import fs from 'node:fs';
import { isDeepStrictEqual } from 'node:util';
import { createCloudflareGroupStateReader } from '../../scripts/experimental/cloudflare-group-state.js';
import { productionSnapshot, readProductionProject } from '../../scripts/pages-production-state.js';

const manifest = JSON.parse(
  fs.readFileSync(new URL('./retire-awesome-workers.json', import.meta.url))
);
const publication = JSON.parse(
  fs.readFileSync('docs/notes/nested-app-migration/worker-preview-deployment.json')
);
const names = [publication.routerService, ...publication.uploadedUnits];
const account = process.env.CLOUDFLARE_ACCOUNT_ID;
const token = process.env.CLOUDFLARE_API_TOKEN;
const mode = process.argv[2];
if (
  !['check', 'delete'].includes(mode) ||
  account !== manifest.accountId ||
  !token ||
  names.length !== 9 ||
  new Set(names).size !== 9 ||
  !isDeepStrictEqual(
    manifest.targets.map((t) => t.service),
    names
  )
)
  throw new Error('削除対象・account・操作が承認済み記録と一致しません');
const directory = '.tmp/worker-retirement';
fs.mkdirSync(directory, { recursive: true });
const report = { schemaVersion: 1, mode, startedAt: new Date().toISOString(), workers: [] };
const save = () =>
  fs.writeFileSync(`${directory}/${mode}.json`, JSON.stringify(report, null, 2) + '\n');
const reader = createCloudflareGroupStateReader({ accountId: account, apiToken: token });
const api = async (name, method, suffix = '') => {
  if (!names.includes(name)) throw new Error('削除許可のないWorkerです');
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${account}/workers/scripts/${name}${suffix}`,
    {
      method,
      redirect: 'error',
      signal: AbortSignal.timeout(30_000),
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await response.json();
  if (
    method === 'GET' &&
    response.status === 404 &&
    data.success === false &&
    data.errors?.length === 1 &&
    data.errors[0].code === 10007
  )
    return null;
  if (!response.ok || data.success !== true)
    throw new Error(
      `Worker ${method} failed: HTTP ${response.status}, codes ${JSON.stringify(data.errors?.map((e) => e.code))}`
    );
  return data.result ?? true;
};
const check = async (target) => {
  if ((await api(target.service, 'GET', '/settings')) === null) return null;
  const active = await reader.readActive(target.service);
  for (const key of ['versionId', 'revision', 'scriptEtag'])
    if (active?.[key] !== target[key])
      throw new Error(`記録後にWorkerが変更されています: ${target.service}`);
  const versions = (await reader.readVersions(target.service)).map((v) => v.id).sort();
  if (!isDeepStrictEqual(versions, target.allowedVersions))
    throw new Error(`未確認のWorker版があります: ${target.service}`);
  return { deploymentId: active.deploymentId, versionId: active.versionId };
};
try {
  report.pagesBefore = productionSnapshot(await readProductionProject({ account, token }));
  // 全9個を照合してから変更する。強制削除は使用しない。
  for (const target of manifest.targets) {
    report.workers.push({ service: target.service, before: await check(target) });
    save();
  }
  if (mode === 'delete') {
    const baseline = JSON.parse(fs.readFileSync(`${directory}/check.json`));
    if (
      baseline.mode !== 'check' ||
      baseline.conclusion !== 'success' ||
      baseline.pagesBefore.deployment.id !== report.pagesBefore.deployment.id
    )
      throw new Error('事前確認記録または本番Pagesが変わりました');
    for (const [index, target] of manifest.targets.entries()) {
      const current = await check(target);
      if (current) {
        report.workers[index].deleteStartedAt = new Date().toISOString();
        save();
        await api(target.service, 'DELETE');
      }
      if ((await api(target.service, 'GET', '/settings')) !== null)
        throw new Error(`Workerがまだ存在します: ${target.service}`);
      report.workers[index].result = current ? 'deleted' : 'already-absent';
      save();
      console.log(`${target.service}: ${report.workers[index].result}`);
    }
  }
  report.pagesAfter = productionSnapshot(await readProductionProject({ account, token }), {
    baseline: report.pagesBefore,
  });
  report.conclusion = 'success';
  report.completedAt = new Date().toISOString();
  save();
} catch (error) {
  report.conclusion = 'failure';
  // API本文や認証値は記録しない。
  report.error = error.message.replaceAll(token, '[REDACTED]').replaceAll(account, '[ACCOUNT]');
  save();
  console.error(report.error);
  process.exitCode = 1;
}
