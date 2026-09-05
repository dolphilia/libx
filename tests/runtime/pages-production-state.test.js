import assert from 'node:assert/strict';
import test from 'node:test';
import { productionSnapshot, readProductionProject } from '../../scripts/pages-production-state.js';

const commit = 'a'.repeat(40);
const project = {
  name: 'libx',
  production_branch: 'main',
  domains: ['libx.dev', 'libx.pages.dev'],
  subdomain: 'libx.pages.dev',
  deployment_configs: { production: { env_vars: { SECRET: 'must-not-be-recorded' } } },
  canonical_deployment: {
    id: '12345678-1234-1234-1234-123456789012',
    url: 'https://12345678.libx.pages.dev',
    environment: 'production',
    latest_stage: { status: 'success' },
    deployment_trigger: { metadata: { commit_hash: commit } },
  },
};

test('本番記録は環境変数を保存せず、想定commitと復旧先IDを照合する', () => {
  const baseline = productionSnapshot(project, { commit });
  assert.equal(JSON.stringify(baseline).includes('must-not-be-recorded'), false);
  assert.equal(productionSnapshot(project, { baseline }).deployment.id, baseline.deployment.id);
  assert.throws(() => productionSnapshot(project, { commit: 'b'.repeat(40) }), /commit/);
  assert.throws(
    () => productionSnapshot(project, { baseline: { deployment: { id: 'changed' } } }),
    /変更/
  );
  assert.throws(() => productionSnapshot({ ...project, production_branch: 'other' }), /branch/);
  for (const change of [{ environment: 'preview' }, { latest_stage: { status: 'failure' } }])
    assert.throws(
      () =>
        productionSnapshot({
          ...project,
          canonical_deployment: { ...project.canonical_deployment, ...change },
        }),
      /成功済み/
    );
});

test('認証付きPages取得は固定APIへGETし、redirectとAPI失敗を拒否する', async () => {
  const options = {
    account: 'a'.repeat(32),
    token: 'test-token',
    fetchImpl: async (url, init) => {
      assert.equal(
        url,
        `https://api.cloudflare.com/client/v4/accounts/${'a'.repeat(32)}/pages/projects/libx`
      );
      assert.equal(init.redirect, 'error');
      assert.equal(init.headers.Authorization, 'Bearer test-token');
      return Response.json({ success: true, result: project });
    },
  };
  assert.deepEqual(await readProductionProject(options), project);
  await assert.rejects(readProductionProject({ ...options, account: '../invalid' }), /account/);
  await assert.rejects(
    readProductionProject({
      ...options,
      fetchImpl: async () => new Response('private', { status: 403 }),
    }),
    /HTTP 403/
  );
});
