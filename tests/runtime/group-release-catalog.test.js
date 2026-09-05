import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  createGroupReleaseCatalog,
  verifyGroupReleaseSource,
} from '../../scripts/experimental/group-release-catalog.js';
import { canonicalOutputPath } from '../../scripts/group-output.js';
import { packageGroupWorkers } from '../../scripts/experimental/package-group-workers.js';
import { packageGroupRollback } from '../../scripts/experimental/package-group-rollback.js';
import { createGroupRouter } from '../../scripts/experimental/group-router.js';
import { readGroupWorkerContract } from '../../scripts/experimental/group-worker-contract.js';
import { verifyGroupWorkerPackage } from '../../scripts/experimental/group-worker-package-integrity.js';

import { collectRetainedGroupAssets } from '../../scripts/experimental/group-retained-assets.js';

const group = {
  id: 'docs',
  publicBase: '/docs/docs',
  memberIds: ['docs/overview', 'docs/web'],
};
const record = (name, owner, content = name) => ({
  path: name,
  canonical: canonicalOutputPath(name),
  appId: owner,
  sha256: crypto.createHash('sha256').update(content).digest('hex'),
  bytes: Buffer.byteLength(content),
  contentType: name.endsWith('.html') ? 'text/html' : 'application/json',
});
const fixture = () => ({
  schemaVersion: 1,
  groupId: group.id,
  publicBase: group.publicBase,
  files: [
    record('index.html', 'docs/overview'),
    record('404.html', 'docs/overview'),
    record('v1/en/mixed/first/index.html', 'docs/overview'),
    record('v1/en/mixed/second/index.html', 'docs/web'),
    record('navigation/pages.json', 'group:docs'),
  ],
});

test('生成したWorker設定で各所有先を参照し、URL・HEAD・404・障害を扱う', async (t) => {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-workers-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const source = path.join(root, 'site');
  const destination = path.join(root, 'preview');
  const manifest = fixture();
  for (const file of manifest.files) {
    const target = path.join(source, file.path);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, file.path);
  }
  const catalog = packageGroupWorkers({ manifest, group, source, destination });
  assert.throws(() => packageGroupWorkers({ manifest, group, source, destination }), /既に/);
  const routing = JSON.parse(fs.readFileSync(path.join(destination, 'router/routes.json')));
  const config = JSON.parse(fs.readFileSync(path.join(destination, 'router/wrangler.jsonc')));
  assert.equal(config.services.length, catalog.units.length);
  const verify = () =>
    verifyGroupWorkerPackage({ directory: destination, packageSha256: catalog.packageSha256 });
  assert.equal(verify().revision, catalog.revision);
  assert.equal(catalog.schemaVersion, 2);
  assert.equal(
    fs.readFileSync(path.join(destination, 'router/group-router.js'), 'utf8'),
    catalog.delivery.router.source
  );
  for (const unit of catalog.units) {
    assert.equal(
      fs.readFileSync(path.join(destination, unit.service, 'index.js'), 'utf8'),
      catalog.delivery.unit.source
    );
    assert.deepEqual(
      JSON.parse(fs.readFileSync(path.join(destination, unit.service, 'wrangler.jsonc'))),
      { ...catalog.delivery.unit.config, name: unit.service }
    );
    assert.equal(
      config.services.find((s) => s.binding === unit.binding).entrypoint,
      catalog.delivery.unit.entrypoint
    );
  }
  const calls = [];
  const env = Object.fromEntries(
    catalog.units.map((unit) => [
      unit.binding,
      {
        async fetch(request) {
          const url = new URL(request.url);
          calls.push({ binding: unit.binding, path: url.pathname, search: url.search });
          const local = path.join(destination, unit.service, 'assets', url.pathname.slice(1));
          return new Response(request.method === 'HEAD' ? null : fs.readFileSync(local));
        },
      },
    ])
  );
  const router = createGroupRouter(routing);
  const request = (url, options) =>
    router.fetch(new Request(`https://example.test${url}`, options), env);
  const page = '/docs/docs/v1/en/mixed/second/';
  const response = await request(`${page}?q=hello`);
  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'v1/en/mixed/second/index.html');
  assert.equal(calls.at(-1).search, '?q=hello');
  assert.equal(calls.at(-1).binding, catalog.units.find((u) => u.owner === 'docs/web').binding);
  for (const alias of [page.slice(0, -1), `${page}index.html`]) {
    const redirect = await request(`${alias}?q=hello`);
    assert.equal(redirect.status, 308);
    assert.equal(redirect.headers.get('location'), `https://example.test${page}?q=hello`);
  }
  const head = await request(page, { method: 'HEAD' });
  assert.equal(head.status, 200);
  assert.equal(await head.text(), '');
  const missing = await request('/docs/docs/missing');
  assert.equal(missing.status, 404);
  assert.equal(await missing.text(), '404.html');
  assert.equal((await request('/docs/docs-other')).status, 404);
  assert.equal((await request('/docs/docs/%2Fprivate')).status, 400);
  assert.equal((await request(page, { method: 'POST' })).status, 405);
  delete env[catalog.units.find((u) => u.owner === 'docs/web').binding];
  const unavailable = await request(page);
  assert.equal(unavailable.status, 503);
  assert.equal(unavailable.headers.get('cache-control'), 'no-store');
  const configPath = path.join(destination, 'router/wrangler.jsonc');
  const original = fs.readFileSync(configPath);
  fs.appendFileSync(configPath, '\n');
  assert.throws(verify, /変更/);
  fs.writeFileSync(configPath, original);
  fs.writeFileSync(path.join(destination, 'extra'), 'extra');
  assert.throws(verify, /追加/);
  fs.unlinkSync(path.join(destination, 'extra'));
  fs.unlinkSync(configPath);
  assert.throws(verify, /欠損/);
  fs.writeFileSync(configPath, original);
  fs.appendFileSync(path.join(destination, 'package-manifest.json'), '\n');
  assert.throws(verify, /ハッシュ/);
});

test('資産Workerのコード・設定・CLI版の変更は配信先を更新する', () => {
  const manifest = fixture();
  const delivery = readGroupWorkerContract();
  const before = createGroupReleaseCatalog({ manifest, group, delivery });
  for (const mutate of [
    (d) => {
      d.unit.source += '\n// changed asset handler\n';
    },
    (d) => {
      d.unit.config.compatibility_date = '2026-09-06';
    },
    (d) => {
      d.unit.config.assets.html_handling = 'auto-trailing-slash';
    },
    (d) => {
      d.wranglerVersion = '4.130.0';
    },
    (d) => {
      d.packagerSha256 = 'a'.repeat(64);
    },
  ]) {
    const nextDelivery = structuredClone(delivery);
    mutate(nextDelivery);
    const after = createGroupReleaseCatalog({ manifest, group, delivery: nextDelivery });
    assert.notEqual(after.revision, before.revision);
    for (const unit of before.units) {
      assert.notEqual(after.units.find((u) => u.owner === unit.owner).service, unit.service);
    }
  }
});

test('入口Workerだけの変更は既存配信単位を再利用できる', () => {
  const manifest = fixture();
  const delivery = readGroupWorkerContract();
  const before = createGroupReleaseCatalog({ manifest, group, delivery });
  for (const mutate of [
    (d) => {
      d.router.source += '\n// changed routing\n';
    },
    (d) => {
      d.router.config.compatibility_date = '2026-09-06';
    },
  ]) {
    const nextDelivery = structuredClone(delivery);
    mutate(nextDelivery);
    const after = createGroupReleaseCatalog({ manifest, group, delivery: nextDelivery });
    assert.notEqual(after.revision, before.revision);
    assert.deepEqual(after.units, before.units);
  }
  const snapshot = JSON.stringify(before);
  delivery.unit.source = 'mutated after snapshot';
  delivery.router.config.compatibility_date = '2026-09-07';
  assert.equal(JSON.stringify(before), snapshot);
});

test('配信単位はカテゴリでなく所有目録から生成し、順序に依存しない', () => {
  const manifest = fixture();
  const catalog = createGroupReleaseCatalog({ manifest, group });
  assert.equal(catalog.units.length, 3);
  assert.deepEqual(
    createGroupReleaseCatalog({
      manifest: { ...manifest, files: [...manifest.files].reverse() },
      group,
    }),
    catalog
  );
  assert.equal(
    catalog.units.find((u) => u.owner === 'docs/web').files[0].url,
    '/docs/docs/v1/en/mixed/second/'
  );
});

test('一子の本文更新は他の配信先を変えず、全体リリースだけを更新する', () => {
  const manifest = fixture();
  const before = createGroupReleaseCatalog({ manifest, group });
  manifest.files[3] = record(manifest.files[3].path, 'docs/web', 'updated');
  const after = createGroupReleaseCatalog({ manifest, group });
  assert.notEqual(before.revision, after.revision);
  for (const unit of before.units) {
    const next = after.units.find((u) => u.owner === unit.owner);
    if (unit.owner === 'docs/web') assert.notEqual(unit.service, next.service);
    else assert.deepEqual(unit, next);
  }
});

test('未知所有者・重複・不正パス・欠けた子は配信先生成前に拒否する', () => {
  for (const mutate of [
    (m) => {
      m.files[0].appId = 'unregistered';
    },
    (m) => {
      m.files.push(m.files[0]);
    },
    (m) => {
      m.files[0].path = '../outside';
    },
    (m) => {
      m.files = m.files.filter((f) => f.appId !== 'docs/web');
    },
    (m) => {
      m.files = m.files.filter((f) => f.path !== '404.html');
    },
  ]) {
    const manifest = fixture();
    mutate(manifest);
    assert.throws(() => createGroupReleaseCatalog({ manifest, group }));
  }
});

test('配信元の全ファイルを照合し、変更・追加・欠損・symlinkを拒否する', (t) => {
  // realpath avoids macOS /var -> /private/var in a trusted temporary root.
  const directory = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-release-')));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const manifest = fixture();
  for (const file of manifest.files) {
    const target = path.join(directory, file.path);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, file.path);
  }
  const catalog = createGroupReleaseCatalog({ manifest, group });
  const verify = () => verifyGroupReleaseSource({ catalog, directory });
  assert.equal(verify().files, 5);
  fs.writeFileSync(path.join(directory, 'extra'), 'extra');
  assert.throws(verify, /一致/);
  fs.unlinkSync(path.join(directory, 'extra'));
  fs.writeFileSync(path.join(directory, 'index.html'), 'changed');
  assert.throws(verify, /一致/);
  fs.unlinkSync(path.join(directory, 'index.html'));
  assert.throws(verify, /欠損/);
  fs.symlinkSync(path.join(directory, '404.html'), path.join(directory, 'index.html'));
  assert.throws(verify, /形式/);
});

test('旧アセットを複数世代保持し、削除した本文は復活させない', async (t) => {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-retention-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const packages = [];
  let previous;
  for (let generation = 1; generation <= 3; generation++) {
    const manifest = fixture();
    if (generation > 1) manifest.files = manifest.files.filter((f) => !f.path.includes('/first/'));
    manifest.files.push(record(`assets/chunk-${generation}.js`, 'docs/web'));
    const source = path.join(root, `source-${generation}`);
    const destination = path.join(root, `release-${generation}`);
    for (const file of manifest.files) {
      const target = path.join(source, file.path);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, file.path);
    }
    const catalog = packageGroupWorkers({ manifest, group, source, destination, previous });
    assert.equal(catalog.retainedAssets.length, generation - 1);
    packages.push({ destination, catalog });
    previous = { directory: destination, packageSha256: catalog.packageSha256 };
  }
  const latest = packages.at(-1);
  const routing = JSON.parse(fs.readFileSync(path.join(latest.destination, 'router/routes.json')));
  const config = JSON.parse(
    fs.readFileSync(path.join(latest.destination, 'router/wrangler.jsonc'))
  );
  const env = Object.fromEntries(
    config.services.map((service) => [
      service.binding,
      {
        fetch(request) {
          const owner = packages.find((p) =>
            fs.existsSync(path.join(p.destination, service.service))
          );
          assert.ok(owner, '参照先は検証済みの過去または現在のパッケージに存在する');
          const file = path.join(
            owner.destination,
            service.service,
            'assets',
            new URL(request.url).pathname.slice(1)
          );
          return new Response(fs.readFileSync(file));
        },
      },
    ])
  );
  const router = createGroupRouter(routing);
  for (let generation = 1; generation <= 3; generation++) {
    const result = await router.fetch(
      new Request(`https://example.test/docs/docs/assets/chunk-${generation}.js`),
      env
    );
    assert.equal(result.status, 200);
    assert.equal(await result.text(), `assets/chunk-${generation}.js`);
  }
  const removed = await router.fetch(
    new Request('https://example.test/docs/docs/v1/en/mixed/first/'),
    env
  );
  assert.equal(removed.status, 404);
  for (const asset of latest.catalog.retainedAssets) {
    assert.equal(fs.existsSync(path.join(latest.destination, asset.service)), false);
  }
  assert.throws(
    () =>
      packageGroupWorkers({
        manifest: fixture(),
        group,
        source: path.join(root, 'unused'),
        destination: path.join(root, 'invalid'),
        previous: { ...previous, packageSha256: '0'.repeat(64) },
      }),
    /一致/
  );
  assert.equal(fs.existsSync(path.join(root, 'invalid')), false);
});

test('同じアセットURLの内容差し替えと異なるグループの保持元を拒否する', () => {
  const manifest = fixture();
  manifest.files.push(record('assets/shared.js', 'docs/web', 'before'));
  const before = createGroupReleaseCatalog({ manifest, group });
  manifest.files[manifest.files.length - 1] = record('assets/shared.js', 'docs/web', 'after');
  const after = createGroupReleaseCatalog({ manifest, group });
  assert.throws(() => collectRetainedGroupAssets(before, after), /同じアセットURL/);
  assert.throws(() => collectRetainedGroupAssets({ ...before, groupId: 'other' }, after), /一致/);
  manifest.files.pop();
  const removed = createGroupReleaseCatalog({ manifest, group });
  const retainedAssets = collectRetainedGroupAssets(before, removed);
  const preserved = createGroupReleaseCatalog({ manifest, group, retainedAssets });
  assert.notEqual(preserved.revision, removed.revision);
  assert.deepEqual(preserved.units, removed.units);
  assert.throws(
    () =>
      createGroupReleaseCatalog({
        manifest,
        group,
        retainedAssets: [...retainedAssets, ...retainedAssets],
      }),
    /重複/
  );
  assert.throws(
    () =>
      createGroupReleaseCatalog({
        manifest,
        group,
        retainedAssets: [{ ...retainedAssets[0], assetPath: '/docs/docs/v1/removed/index.html' }],
      }),
    /不正/
  );
});

test('呼出元の版選択ヘッダーを子へ渡さず、HEAD障害応答に本文を付けない', async () => {
  const router = createGroupRouter({
    publicBase: '/docs/docs',
    revision: 'fixed',
    routes: [{ url: '/docs/docs/', assetPath: '/docs/docs/index.html', binding: 'UNIT' }],
    notFound: { assetPath: '/docs/docs/404.html', binding: 'UNIT' },
  });
  const response = await router.fetch(
    new Request('https://example.test/docs/docs/', {
      headers: {
        'Cloudflare-Workers-Version-Overrides': 'other="version"',
        'Cloudflare-Workers-Version-Key': 'user-choice',
        'If-None-Match': 'ordinary-validator',
      },
    }),
    {
      UNIT: {
        fetch(request) {
          assert.equal(request.headers.get('Cloudflare-Workers-Version-Overrides'), null);
          assert.equal(request.headers.get('Cloudflare-Workers-Version-Key'), null);
          assert.equal(request.headers.get('If-None-Match'), 'ordinary-validator');
          return new Response('ok');
        },
      },
    }
  );
  assert.equal(await response.text(), 'ok');
  for (const [url, status] of [
    ['/docs/docs/', 503],
    ['/outside/', 404],
    ['/docs/docs/%2F', 400],
  ]) {
    const error = await router.fetch(
      new Request('https://example.test' + url, { method: 'HEAD' }),
      {}
    );
    assert.equal(error.status, status);
    assert.equal(await error.text(), '');
  }
});

test('復旧は旧本文・コードを戻し、復旧直前のHTMLが参照する新アセットも保持する', async (t) => {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-rollback-package-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const packages = [];
  for (const generation of ['old', 'new']) {
    const manifest = fixture();
    manifest.files[3] = record(`v1/en/mixed/${generation}/index.html`, 'docs/web');
    manifest.files.push(record(`assets/${generation}.js`, 'docs/web'));
    const source = path.join(root, generation);
    const directory = path.join(root, `package-${generation}`);
    for (const file of manifest.files) {
      const output = path.join(source, file.path);
      fs.mkdirSync(path.dirname(output), { recursive: true });
      fs.writeFileSync(output, file.path);
    }
    const delivery = readGroupWorkerContract();
    delivery.unit.source += `\n// ${generation} unit\n`;
    delivery.router.source += `\n// ${generation} router\n`;
    const release = packageGroupWorkers({
      manifest,
      group,
      source,
      destination: directory,
      delivery,
      previous: packages[0],
    });
    packages.push({ directory, packageSha256: release.packageSha256, release });
  }
  const destination = path.join(root, 'rollback');
  const restored = packageGroupRollback({
    target: packages[0],
    previous: packages[1],
    destination,
  });
  assert.deepEqual(restored.units, packages[0].release.units);
  assert.equal(restored.delivery.unit.source, packages[0].release.delivery.unit.source);
  assert.equal(restored.delivery.router.source, packages[0].release.delivery.router.source);
  assert.notEqual(
    restored.revision,
    packages[0].release.revision,
    '保持する新資産も復旧リリースの目録に固定する'
  );
  assert.deepEqual(
    restored.retainedAssets.map((a) => a.url),
    ['/docs/docs/assets/new.js']
  );
  const config = JSON.parse(fs.readFileSync(path.join(destination, 'router/wrangler.jsonc')));
  const routes = JSON.parse(fs.readFileSync(path.join(destination, 'router/routes.json')));
  packages.push({ directory: destination });
  const env = Object.fromEntries(
    config.services.map((s) => [
      s.binding,
      {
        fetch(request) {
          const pkg = packages.find((p) => fs.existsSync(path.join(p.directory, s.service)));
          return new Response(
            fs.readFileSync(
              path.join(pkg.directory, s.service, 'assets', new URL(request.url).pathname.slice(1))
            )
          );
        },
      },
    ])
  );
  const router = createGroupRouter(routes);
  for (const [url, status, body] of [
    ['/docs/docs/v1/en/mixed/old/', 200, 'v1/en/mixed/old/index.html'],
    ['/docs/docs/v1/en/mixed/new/', 404, '404.html'],
    ['/docs/docs/assets/old.js', 200, 'assets/old.js'],
    ['/docs/docs/assets/new.js', 200, 'assets/new.js'],
  ]) {
    const response = await router.fetch(new Request('https://example.test' + url), env);
    assert.equal(response.status, status);
    assert.equal(await response.text(), body);
  }
});
