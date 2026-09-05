import { isDeepStrictEqual } from 'node:util';

const uuid = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
const servicePattern = /^[a-z0-9][a-z0-9-]{0,62}$/;
const revisionPattern = /^libx-release:([a-f0-9]{64})$/;

export function describeGroupWorkerVersion(version, expectedId) {
  if (!uuid.test(expectedId) || version?.id !== expectedId)
    throw new Error('Cloudflareの版IDが一致しません');
  const revision = revisionPattern.exec(version.annotations?.['workers/message'])?.[1];
  if (!revision) throw new Error('libxの識別情報がないWorker版です');
  const scriptEtag = version.resources?.script?.etag;
  if (typeof scriptEtag !== 'string' || !scriptEtag)
    throw new Error('Workerコードの識別情報がありません');
  return { versionId: expectedId, revision, scriptEtag };
}

export function verifyGroupWorkerConfiguration(version, config) {
  const runtime = version.resources?.script_runtime;
  if (
    runtime?.compatibility_date?.slice(0, 10) !== config.compatibility_date ||
    !Array.isArray(runtime?.compatibility_flags) ||
    !isDeepStrictEqual(
      [...runtime.compatibility_flags].sort(),
      [...(config.compatibility_flags ?? [])].sort()
    )
  )
    throw new Error('配置済みWorkerの互換設定が一致しません');
  const expected = [
    ...(config.assets ? [{ type: 'assets', name: config.assets.binding }] : []),
    ...(config.services ?? []).map((binding) => ({
      type: 'service',
      name: binding.binding,
      service: binding.service,
      entrypoint: binding.entrypoint,
    })),
  ];
  const bindings = version.resources?.bindings;
  if (!Array.isArray(bindings)) throw new Error('配置済みbindingの形式が不明です');
  const actual = bindings.map((binding) => {
    if (binding.type === 'assets') return { type: binding.type, name: binding.name };
    if (binding.type === 'service') {
      if (binding.environment && binding.environment !== 'production')
        throw new Error('想定外のservice環境です');
      return {
        type: binding.type,
        name: binding.name,
        service: binding.service,
        entrypoint: binding.entrypoint,
      };
    }
    throw new Error(`想定外のbinding形式です: ${binding.type}`);
  });
  const sort = (items) => items.sort((a, b) => a.name.localeCompare(b.name, 'en'));
  if (!isDeepStrictEqual(sort(actual), sort(expected)))
    throw new Error('配置済みWorkerのbindingが一致しません');
  return true;
}

/** Read-only API client. A token is never attached to redirects or public URLs. */
export function createCloudflareGroupStateReader({ accountId, apiToken, fetcher = fetch }) {
  if (!/^[a-f0-9]{32}$/i.test(accountId) || typeof apiToken !== 'string' || !apiToken)
    throw new Error('Cloudflareのaccount IDとAPI tokenを指定してください');
  const root = `https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/scripts/`;
  const api = async (service, suffix, allowMissing = false) => {
    if (!servicePattern.test(service)) throw new Error('Worker名が不正です');
    const response = await fetcher(root + service + suffix, {
      method: 'GET',
      redirect: 'error',
      headers: { Authorization: `Bearer ${apiToken}`, Accept: 'application/json' },
      signal: AbortSignal.timeout(30000),
    });
    const reader = response.body?.getReader();
    if (!reader) throw new Error('Cloudflare APIの応答本文がありません');
    const chunks = [];
    let length = 0;
    try {
      for (let chunk = await reader.read(); !chunk.done; chunk = await reader.read()) {
        const { value } = chunk;
        length += value.byteLength;
        if (length > 2 * 1024 * 1024) throw new Error('Cloudflare APIの応答が大きすぎます');
        chunks.push(value);
      }
    } finally {
      await reader.cancel();
    }
    let data;
    try {
      data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch {
      throw new Error(`Cloudflare API応答がJSONではありません（HTTP ${response.status}）`);
    }
    // Only the documented missing Worker case can become null. Auth/rate/server
    // failures must never be interpreted as permission to create/overwrite.
    if (
      allowMissing &&
      response.status === 404 &&
      data.success === false &&
      Array.isArray(data.errors) &&
      data.errors.length === 1 &&
      data.errors[0].code === 10007
    )
      return null;
    if (!response.ok || data.success !== true || data.result === undefined)
      throw new Error(`Cloudflare APIの読取に失敗しました（HTTP ${response.status}）`);
    return data.result;
  };
  const readVersion = async (service, versionId) => {
    if (!uuid.test(versionId)) throw new Error('Worker版IDが不正です');
    const version = await api(service, `/versions/${versionId}`);
    return { ...describeGroupWorkerVersion(version, versionId), details: version };
  };
  return {
    readVersion,
    async readVersions(service) {
      const result = await api(service, '/versions', true);
      if (result === null) return [];
      if (!Array.isArray(result.items) || result.items.some((item) => !uuid.test(item.id)))
        throw new Error('Worker版一覧の形式が不正です');
      return result.items;
    },
    async readActive(service) {
      const result = await api(service, '/deployments', true);
      if (result === null) return null;
      if (!Array.isArray(result.deployments)) throw new Error('配置一覧の形式が不正です');
      if (!result.deployments.length) return null;
      // The API uses newest first, as consumed by Wrangler fetchLatestDeployment.
      const latest = result.deployments[0];
      if (
        !uuid.test(latest.id) ||
        !Array.isArray(latest.versions) ||
        latest.versions.length !== 1 ||
        latest.versions[0].percentage !== 100
      )
        throw new Error('単一版100%以外の配置は自動更新できません');
      const version = await readVersion(service, latest.versions[0].version_id);
      return { deploymentId: latest.id, ...version };
    },
  };
}
