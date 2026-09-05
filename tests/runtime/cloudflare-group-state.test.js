import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createCloudflareGroupStateReader,
  describeGroupWorkerVersion,
  verifyGroupWorkerConfiguration,
} from '../../scripts/experimental/cloudflare-group-state.js';

const versionId = '11111111-1111-1111-1111-111111111111';
const deploymentId = '22222222-2222-2222-2222-222222222222';
const revision = 'a'.repeat(64);
const version = () => ({
  id: versionId,
  annotations: { 'workers/message': `libx-release:${revision}` },
  resources: {
    script: { etag: 'script-content-etag' },
    script_runtime: { compatibility_date: '2026-09-05', compatibility_flags: ['nodejs_compat'] },
    bindings: [{ type: 'assets', name: 'ASSETS' }],
  },
});
const config = {
  compatibility_date: '2026-09-05',
  compatibility_flags: ['nodejs_compat'],
  assets: { binding: 'ASSETS' },
};
const json = (result, status = 200, success = true) =>
  new Response(JSON.stringify({ success, result }), { status });
function reader(fetcher) {
  return createCloudflareGroupStateReader({
    accountId: 'b'.repeat(32),
    apiToken: 'test-only-placeholder',
    fetcher,
  });
}

test('現在deploymentから版を読み、識別子を取得する。API以外へ認証を渡さない', async () => {
  const calls = [];
  const client = reader(async (url, options) => {
    calls.push(url);
    assert.equal(new URL(url).origin, 'https://api.cloudflare.com');
    assert.equal(options.redirect, 'error');
    assert.equal(options.headers.Authorization, 'Bearer test-only-placeholder');
    return url.endsWith('/deployments')
      ? json({
          deployments: [
            { id: deploymentId, versions: [{ version_id: versionId, percentage: 100 }] },
          ],
        })
      : json(version());
  });
  const active = await client.readActive('libx-test');
  assert.equal(active.deploymentId, deploymentId);
  assert.equal(active.versionId, versionId);
  assert.equal(active.revision, revision);
  assert.equal(calls.length, 2);
  assert.equal(verifyGroupWorkerConfiguration(active.details, config), true);
  await assert.rejects(client.readActive('../other'), /Worker名/);
  await assert.rejects(client.readVersion('libx-test', '../version'), /版ID/);
  assert.equal(calls.length, 2);
});

test('Worker不存在以外の認証・制限・サーバーエラーを未配置へ変換しない', async () => {
  for (const [status, code] of [
    [401, 10000],
    [403, 10007],
    [429, 10007],
    [500, 10007],
    [404, 9999],
  ]) {
    const client = reader(
      async () =>
        new Response(
          JSON.stringify({ success: false, errors: [{ code, message: 'private error details' }] }),
          { status }
        )
    );
    await assert.rejects(client.readActive('libx-test'), (error) => {
      assert.match(error.message, /読取に失敗/);
      assert.equal(error.message.includes('private error details'), false);
      return true;
    });
  }
  const absent = reader(
    async () =>
      new Response(JSON.stringify({ success: false, errors: [{ code: 10007 }] }), { status: 404 })
  );
  assert.equal(await absent.readActive('libx-test'), null);
  assert.equal(await reader(async () => json({ deployments: [] })).readActive('libx-test'), null);
});

test('複数版配信・不明な一覧・版IDの不一致を拒否する', async () => {
  for (const deployments of [
    null,
    [{ id: deploymentId, versions: [] }],
    [{ id: deploymentId, versions: [{ version_id: versionId, percentage: 50 }] }],
    [
      {
        id: deploymentId,
        versions: [
          { version_id: versionId, percentage: 100 },
          { version_id: versionId, percentage: 0 },
        ],
      },
    ],
  ]) {
    await assert.rejects(reader(async () => json({ deployments })).readActive('libx-test'));
  }
  assert.throws(
    () => describeGroupWorkerVersion({ ...version(), id: deploymentId }, versionId),
    /版ID/
  );
  assert.throws(
    () => describeGroupWorkerVersion({ ...version(), annotations: {} }, versionId),
    /識別情報/
  );
});

test('互換設定・bindingの追加や変更・別service環境を拒否する', () => {
  for (const mutate of [
    (v) => {
      v.resources.script_runtime.compatibility_date = '2026-09-06';
    },
    (v) => {
      v.resources.script_runtime.compatibility_flags = [];
    },
    (v) => {
      v.resources.bindings = [];
    },
    (v) => {
      v.resources.bindings.push({ type: 'secret_text', name: 'UNEXPECTED' });
    },
  ]) {
    const v = version();
    mutate(v);
    assert.throws(() => verifyGroupWorkerConfiguration(v, config));
  }
  const serviceConfig = {
    ...config,
    assets: undefined,
    services: [{ binding: 'CHILD', service: 'libx-child', entrypoint: 'AssetDelivery' }],
  };
  const v = version();
  v.resources.bindings = [
    {
      type: 'service',
      name: 'CHILD',
      service: 'libx-child',
      entrypoint: 'AssetDelivery',
      environment: 'production',
    },
  ];
  assert.equal(verifyGroupWorkerConfiguration(v, serviceConfig), true);
  v.resources.bindings[0].environment = 'staging';
  assert.throws(() => verifyGroupWorkerConfiguration(v, serviceConfig), /環境/);
});

test('巨大応答・JSON以外・ネットワーク障害を成功にしない', async () => {
  await assert.rejects(
    reader(async () => new Response('x'.repeat(2 * 1024 * 1024 + 1))).readActive('libx-test'),
    /大きすぎ/
  );
  await assert.rejects(
    reader(async () => new Response('<html>error</html>', { status: 502 })).readActive('libx-test'),
    /JSON/
  );
  await assert.rejects(
    reader(async () => {
      throw new Error('network unavailable');
    }).readActive('libx-test'),
    /network unavailable/
  );
});
