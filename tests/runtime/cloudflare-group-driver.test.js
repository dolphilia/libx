import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { createCloudflareGroupDriver } from '../../scripts/experimental/cloudflare-group-driver.js';
import { createCloudflareGroupStateReader } from '../../scripts/experimental/cloudflare-group-state.js';
import { createWranglerGroupVersionClient } from '../../scripts/experimental/wrangler-group-versions.js';
import { verifyGroupHttpFiles } from '../../scripts/experimental/verify-group-http.js';
import { createGroupRouter } from '../../scripts/experimental/group-router.js';
import { packageGroupWorkers } from '../../scripts/experimental/package-group-workers.js';
import { packageGroupRollback } from '../../scripts/experimental/package-group-rollback.js';
import { readGroupWorkerContract } from '../../scripts/experimental/group-worker-contract.js';
import {
  publishGroupRelease,
  reconcileGroupRelease,
} from '../../scripts/experimental/publish-group-release.js';
import { canonicalOutputPath } from '../../scripts/group-output.js';

function setup(t) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-cloudflare-driver-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const accountId = 'a'.repeat(32),
    apiToken = 'test-token';
  const versions = new Map(),
    active = new Map(),
    uploads = [];
  let loseRouterResponse = false,
    failUpload = false;
  const stateDirectory = path.join(root, 'state');
  const reader = createCloudflareGroupStateReader({
    accountId,
    apiToken,
    fetcher: async (url, options) => {
      assert.equal(options.headers.Authorization, 'Bearer test-token');
      const parts = new URL(url).pathname.split('/');
      const service = parts[parts.indexOf('scripts') + 1];
      const suffix = parts.slice(parts.indexOf('scripts') + 2);
      if (!versions.has(service))
        return new Response(JSON.stringify({ success: false, errors: [{ code: 10007 }] }), {
          status: 404,
        });
      let result;
      if (suffix[0] === 'deployments')
        result = { deployments: active.has(service) ? [active.get(service)] : [] };
      else if (suffix.length === 1)
        result = { items: [...versions.get(service).values()].map((v) => v.details) };
      else result = versions.get(service).get(suffix[1]).details;
      return new Response(JSON.stringify({ success: true, result }));
    },
  });
  const client = createWranglerGroupVersionClient({
    accountId,
    apiToken,
    workDirectory: path.join(stateDirectory, 'operations'),
    execute: async (command, args, options) => {
      assert.equal(command, 'pnpm');
      const config = JSON.parse(fs.readFileSync(args[args.indexOf('--config') + 1]));
      const service = config.name;
      let result;
      const initial = args[3] === 'deploy';
      if (args.includes('upload') && failUpload) throw new Error('simulated upload failure');
      if (args.includes('upload') || initial) {
        if (!initial)
          assert.ok(versions.has(service), 'version upload requires an existing Worker');
        else {
          assert.equal(versions.has(service), false);
          assert.equal(config.assets, undefined);
          assert.equal(config.services, undefined);
          assert.match(fs.readFileSync(path.join(options.cwd, 'index.js'), 'utf8'), /status: 503/);
        }
        const id = crypto.randomUUID();
        if (!initial) uploads.push(service);
        const revision = args[args.indexOf('--message') + 1];
        const bindings = config.assets
          ? [{ type: 'assets', name: 'ASSETS' }]
          : (config.services ?? []).map((s) => ({
              type: 'service',
              name: s.binding,
              service: s.service,
              entrypoint: s.entrypoint,
            }));
        const details = {
          id,
          annotations: { 'workers/message': revision },
          resources: {
            script: {
              etag: crypto
                .createHash('sha256')
                .update(fs.readFileSync(path.join(options.cwd, 'index.js')))
                .digest('hex'),
            },
            script_runtime: {
              compatibility_date: config.compatibility_date,
              compatibility_flags: config.compatibility_flags,
            },
            bindings,
          },
        };
        if (!versions.has(service)) versions.set(service, new Map());
        versions.get(service).set(id, { details, directory: options.cwd, config });
        result = {
          type: initial ? 'deploy' : 'version-upload',
          version: 1,
          worker_name: service,
          version_id: id,
          preview_url: `https://${id.slice(0, 8)}-${service}.test.workers.dev`,
        };
        if (initial)
          active.set(service, {
            id: crypto.randomUUID(),
            versions: [{ version_id: id, percentage: 100 }],
          });
      } else {
        const id = args.find((arg) => arg.endsWith('@100')).slice(0, -4);
        const deploymentId = crypto.randomUUID();
        active.set(service, { id: deploymentId, versions: [{ version_id: id, percentage: 100 }] });
        if (loseRouterResponse && service.startsWith('libx-preview-'))
          throw new Error('simulated lost response');
        result = {
          type: 'version-deploy',
          version: 1,
          worker_name: service,
          deployment_id: deploymentId,
        };
      }
      fs.writeFileSync(options.env.WRANGLER_OUTPUT_FILE_PATH, JSON.stringify(result) + '\n');
    },
  });
  const assetResponse = (worker, request) => {
    const name = path.join(
      worker.directory,
      'assets',
      decodeURIComponent(new URL(request.url).pathname).slice(1)
    );
    return fs.existsSync(name)
      ? new Response(fs.readFileSync(name))
      : new Response('missing', { status: 404 });
  };
  const publicFetch = async (url, options = {}) => {
    assert.equal(options.headers?.Authorization, undefined);
    const parsed = new URL(url),
      label = parsed.hostname.split('.')[0];
    const service = label.slice(9),
      prefix = label.slice(0, 8);
    const worker = [...versions.get(service).values()].find((v) => v.details.id.startsWith(prefix));
    if (worker.config.assets) return assetResponse(worker, new Request(url));
    const routes = JSON.parse(fs.readFileSync(path.join(worker.directory, 'routes.json')));
    const env = Object.fromEntries(
      worker.config.services.map((s) => [
        s.binding,
        {
          fetch(request) {
            const id = active.get(s.service).versions[0].version_id;
            return assetResponse(versions.get(s.service).get(id), request);
          },
        },
      ])
    );
    return createGroupRouter(routes).fetch(new Request(url), env);
  };
  const makePackage = (label, previous) => {
    const source = path.join(root, 'source-' + label),
      directory = path.join(root, 'package-' + label);
    const group = { id: 'docs', publicBase: '/docs/docs', memberIds: ['docs/a', 'docs/b'] };
    const entries = [
      ['index.html', 'docs/a', 'entry'],
      ['404.html', 'docs/a', 'not found'],
      ['v1/en/page/index.html', 'docs/b', label],
      ['assets/' + label + '.js', 'docs/b', label + ' script'],
      ['navigation/pages.json', 'group:docs', '[]'],
    ];
    const files = entries.map(([name, appId, body]) => {
      const target = path.join(source, name);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, body);
      return {
        path: name,
        canonical: canonicalOutputPath(name),
        appId,
        bytes: Buffer.byteLength(body),
        sha256: crypto.createHash('sha256').update(body).digest('hex'),
        contentType: name.endsWith('.html') ? 'text/html' : 'application/json',
      };
    });
    const delivery = readGroupWorkerContract();
    delivery.unit.config.preview_urls = true;
    delivery.router.config.preview_urls = true;
    delivery.router.config.workers_dev = true;
    const result = packageGroupWorkers({
      manifest: { schemaVersion: 1, groupId: group.id, publicBase: group.publicBase, files },
      group,
      source,
      destination: directory,
      previous,
      delivery,
    });
    return { directory, packageSha256: result.packageSha256, release: result };
  };
  const driverFor = (pkg) =>
    createCloudflareGroupDriver({
      ...pkg,
      accountId,
      apiToken,
      stateDirectory,
      reader,
      client,
      verifyHttp: (args) => verifyGroupHttpFiles({ ...args, fetcher: publicFetch }),
    });
  const publish = async (pkg) => {
    const driver = driverFor(pkg);
    const base = await driver.readActive('docs');
    return publishGroupRelease({
      ...pkg,
      stateDirectory,
      expectedDeploymentId: base?.deploymentId ?? null,
      driver,
    });
  };
  return {
    root,
    stateDirectory,
    versions,
    active,
    uploads,
    makePackage,
    driverFor,
    publish,
    publicFetch,
    set failUpload(value) {
      failUpload = value;
    },
    set loseRouterResponse(value) {
      loseRouterResponse = value;
    },
  };
}

test('公開制御・API読取・CLI出力・HTTP照合を結合し、一子更新と復旧で他の子を再配置しない', async (t) => {
  const f = setup(t),
    first = f.makePackage('old');
  await f.publish(first);
  const second = f.makePackage('new', first);
  const updated = await f.publish(second);
  assert.equal(updated.uploaded.length, 1);
  assert.equal(updated.reused.length, 2);
  const directory = path.join(f.root, 'rollback');
  const restored = packageGroupRollback({
    target: first,
    previous: second,
    destination: directory,
  });
  const result = await f.publish({ directory, packageSha256: restored.packageSha256 });
  assert.equal(result.uploaded.length, 0);
  assert.equal(result.reused.length, 3);
  assert.equal(f.uploads.length, 7, '初回3子+入口、更新1子+入口、復旧入口のみ');
  const response = await f.publicFetch(result.candidate.previewUrl + '/docs/docs/assets/new.js');
  assert.equal(await response.text(), 'new script');
  const body = await f.publicFetch(result.candidate.previewUrl + '/docs/docs/v1/en/page/');
  assert.equal(await body.text(), 'old');
});

test('配置記録を失った既存Workerと公開本文の改変を検出して入口を維持する', async (t) => {
  const f = setup(t),
    first = f.makePackage('old');
  await f.publish(first);
  const unit = first.release.units[0];
  const file = path.join(f.stateDirectory, 'receipts', unit.service + '.json');
  const receipt = fs.readFileSync(file);
  fs.unlinkSync(file);
  await assert.rejects(f.publish(first), /配置記録/);
  fs.writeFileSync(file, receipt);
  const remote = f.versions.get(unit.service).get(JSON.parse(receipt).versionId);
  const asset = unit.files[0];
  fs.appendFileSync(path.join(remote.directory, 'assets', 'docs/docs', asset.path), 'changed');
  const before = structuredClone([...f.active.entries()]);
  await assert.rejects(f.publish(first), /期待サイズ|ハッシュ/);
  assert.deepEqual([...f.active.entries()], before);
});

test('CLIが切替応答を失ってもAPIと保存した版記録で照合できる', async (t) => {
  const f = setup(t),
    pkg = f.makePackage('old');
  f.loseRouterResponse = true;
  await assert.rejects(f.publish(pkg), /未確定/);
  const result = await reconcileGroupRelease({
    stateDirectory: f.stateDirectory,
    groupId: 'docs',
    driver: f.driverFor(pkg),
  });
  assert.equal(result.status, 'published-after-reconciliation');
  assert.equal(f.uploads.length, 4);
});

test('初期作成後にアップロードが失敗しても503の初期版を照合して再開できる', async (t) => {
  const f = setup(t),
    pkg = f.makePackage('old');
  f.failUpload = true;
  await assert.rejects(f.publish(pkg), /未確定/);
  assert.equal(f.uploads.length, 0);
  const service = pkg.release.units[0].service;
  assert.equal(f.versions.get(service).size, 1);
  assert.equal(await f.driverFor(pkg).readUnit(service), null);
  f.failUpload = false;
  await f.publish(pkg);
  assert.equal(f.versions.get(service).size, 2);
  assert.equal(fs.readdirSync(path.join(f.stateDirectory, 'bootstrap')).length, 4);
});
