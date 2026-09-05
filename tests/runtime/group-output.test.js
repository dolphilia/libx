import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { discoverApps } from '../../packages/project-config/src/app-registry.js';
import { buildOrReuseTarget } from '../../scripts/deployment-builder.js';
import {
  composeGroupOutput,
  canonicalOutputPath,
  recordAppBuild,
  readVerifiedAppBuild,
} from '../../scripts/group-output.js';

function write(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, typeof data === 'string' ? data : JSON.stringify(data));
}

test('出力集合の照合は入力で除外する名前のディレクトリ内も検査する', (t) => {
  const f = fixture(t);
  const app = discoverApps(f.root).apps[0];
  recordAppBuild(app, f.root);
  write(path.join(app.outputDirectory, 'dist/unexpected.html'), 'unexpected');
  assert.throws(() => readVerifiedAppBuild(app, f.root), /集合が変更/);
  recordAppBuild(app, f.root);
  fs.writeFileSync(path.join(app.outputDirectory, 'dist/unexpected.html'), 'tampered');
  assert.throws(() => readVerifiedAppBuild(app, f.root), /欠損・変更/);
});

test('別checkoutへ復元した成果物は同じ入力なら再利用し、欠損・改変・本文変更は再生成する', (t) => {
  const original = fixture(t);
  for (const app of discoverApps(original.root).apps) recordAppBuild(app, original.root);
  const restoredRoot = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-restored-')));
  t.after(() => fs.rmSync(restoredRoot, { recursive: true, force: true }));
  fs.cpSync(original.root, restoredRoot, { recursive: true });
  const registry = discoverApps(restoredRoot);
  const app = registry.apps.find((entry) => entry.id === 'example/web');
  const target = { name: app.id, app };
  let builds = 0;
  const runBuild = () => {
    builds += 1;
    fs.cpSync(path.join(original.root, 'apps/example/web/dist'), app.outputDirectory, {
      recursive: true,
    });
    recordAppBuild(app, restoredRoot);
  };
  const run = () => buildOrReuseTarget(target, restoredRoot, { reuse: true, runBuild });
  assert.equal(run(), 'reused');
  assert.equal(builds, 0);
  const html = path.join(app.outputDirectory, 'v1/en/guide/web/index.html');
  fs.writeFileSync(html, 'modified');
  assert.equal(run(), 'built');
  fs.rmSync(app.outputDirectory, { recursive: true });
  assert.equal(run(), 'built');
  fs.appendFileSync(
    path.join(app.directory, 'src/content/docs/v1/en/guide/web.md'),
    '\nChanged body'
  );
  assert.equal(run(), 'built');
  assert.equal(builds, 3);
  assert.equal(run(), 'reused');
  // A sibling body change does not alter the group's page metadata.
  fs.appendFileSync(
    path.join(restoredRoot, 'apps/example/overview/src/content/docs/v1/en/guide/overview.md'),
    '\nSibling body'
  );
  assert.equal(run(), 'reused');
  assert.equal(builds, 3);
});

function fixture(t) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-group-output-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  write(path.join(root, 'pnpm-workspace.yaml'), 'packages: [apps/*/*]');
  write(path.join(root, 'apps/example/group.config.jsonc'), {
    schemaVersion: 1,
    name: { en: 'Example' },
    entry: 'overview',
    order: ['overview', 'web'],
  });
  for (const child of ['overview', 'web']) {
    const app = path.join(root, 'apps/example', child);
    write(path.join(app, 'package.json'), { name: `apps-example-${child}` });
    write(path.join(app, 'astro.config.mjs'), 'export default {};');
    write(path.join(app, 'src/config/project.config.jsonc'), {
      paths: { projectSlug: child },
      versioning: { versions: [{ id: 'v1', name: 'Version 1' }] },
    });
    write(
      path.join(app, `src/content/docs/v1/en/guide/${child}.md`),
      `---\ntitle: ${child}\n---\nBody`
    );
    write(path.join(app, 'dist/index.html'), `entry-${child}`);
    write(path.join(app, 'dist/404.html'), `not-found-${child}`);
    write(
      path.join(app, `dist/v1/en/guide/${child}/index.html`),
      `<script src="/docs/example/assets/${child}/client.js"></script>${child}`
    );
    write(path.join(app, `dist/assets/${child}/client.js`), `console.log('${child}');`);
    write(path.join(app, `dist/assets/${child}/unused.js`), 'unused');
    write(path.join(app, 'dist/search/v1/en.json'), {
      schemaVersion: 1,
      version: 'v1',
      lang: 'en',
      entries: [{ title: child, url: `/docs/example/v1/en/guide/${child}/` }],
    });
    write(path.join(app, 'dist/sidebar/sidebar-en-v1.json'), [
      {
        title: 'Shared category',
        items: [{ title: child, href: `/docs/example/v1/en/guide/${child}/` }],
      },
    ]);
  }
  const registry = discoverApps(root);
  return {
    root,
    group: registry.groups[0],
    apps: registry.apps,
    destination: path.join(root, 'composed'),
  };
}

test('group composition merges indexes, preserves ownership and removes unreachable JS', async (t) => {
  const f = fixture(t);
  await composeGroupOutput(f.group, f.apps, f.destination);
  const site = path.join(f.destination, 'site');
  assert.equal(fs.readFileSync(path.join(site, 'index.html'), 'utf8'), 'entry-overview');
  assert.equal(fs.readFileSync(path.join(site, '404.html'), 'utf8'), 'not-found-overview');
  const search = JSON.parse(fs.readFileSync(path.join(site, 'search/v1/en.json')));
  assert.deepEqual(
    search.entries.map((entry) => entry.title),
    ['overview', 'web']
  );
  assert.equal(
    JSON.parse(fs.readFileSync(path.join(site, 'sidebar/sidebar-en-v1.json')))[0].items.length,
    2
  );
  const navigation = JSON.parse(fs.readFileSync(path.join(site, 'navigation/v1/en.json')));
  assert.equal(navigation.schemaVersion, 1);
  assert.equal(navigation.items[0].items.length, 2);
  const staticIndex = fs.readFileSync(path.join(site, 'navigation/v1/en/index.html'), 'utf8');
  assert.match(staticIndex, /href="\/docs\/example\/v1\/en\/guide\/overview\/"/);
  assert.match(staticIndex, /href="\/docs\/example\/v1\/en\/guide\/web\/"/);
  assert.doesNotMatch(staticIndex, /<script/);
  assert.equal(fs.existsSync(path.join(site, 'assets/web/client.js')), true);
  assert.equal(fs.existsSync(path.join(site, 'assets/web/unused.js')), false);
  const manifest = JSON.parse(fs.readFileSync(path.join(f.destination, 'manifest.json')));
  assert.equal(
    manifest.files.find((entry) => entry.path === 'v1/en/guide/web/index.html').appId,
    'example/web'
  );
  assert.equal(fs.existsSync(path.join(site, 'manifest.json')), false);
  const overviewBefore = fs.readFileSync(path.join(site, 'v1/en/guide/overview/index.html'));
  write(path.join(f.apps[1].outputDirectory, 'v1/en/guide/web/index.html'), 'updated-web');
  await composeGroupOutput(f.group, f.apps, f.destination);
  assert.deepEqual(
    fs.readFileSync(path.join(site, 'v1/en/guide/overview/index.html')),
    overviewBefore
  );
  assert.equal(
    fs.readFileSync(path.join(site, 'v1/en/guide/web/index.html'), 'utf8'),
    'updated-web'
  );
  assert.equal(fs.existsSync(path.join(site, 'assets/web/client.js')), false);
});

test('collision, incomplete members and broken index leave the published group untouched', async (t) => {
  const f = fixture(t);
  await composeGroupOutput(f.group, f.apps, f.destination);
  const manifest = fs.readFileSync(path.join(f.destination, 'manifest.json'));
  write(path.join(f.apps[1].outputDirectory, 'v1/en/guide/overview/index.html'), 'collision');
  await assert.rejects(composeGroupOutput(f.group, f.apps, f.destination), /重複/);
  assert.deepEqual(fs.readFileSync(path.join(f.destination, 'manifest.json')), manifest);
  fs.rmSync(path.join(f.apps[1].outputDirectory, 'v1/en/guide/overview'), { recursive: true });
  await assert.rejects(composeGroupOutput(f.group, [f.apps[0]], f.destination), /揃って/);
  fs.rmSync(path.join(f.apps[1].outputDirectory, 'v1/en/guide/web'), { recursive: true });
  await assert.rejects(composeGroupOutput(f.group, f.apps, f.destination), /ページがありません/);
  assert.deepEqual(fs.readFileSync(path.join(f.destination, 'manifest.json')), manifest);
});

test('URL aliases and traversal cannot acquire distinct ownership', () => {
  assert.equal(
    canonicalOutputPath('v1/en/guide/%77eb/index.html'),
    canonicalOutputPath('v1/en/guide/web/index.html')
  );
  for (const file of ['/outside', '../outside', 'a/%2e%2e/b', 'a/%2fb', 'a\\b', 'a//b', 'a?query'])
    assert.throws(() => canonicalOutputPath(file));
});

test('cached artifacts require matching source and output hashes including shared data', (t) => {
  const f = fixture(t);
  const app = f.apps[1];
  recordAppBuild(app, f.root);
  assert.equal(readVerifiedAppBuild(app, f.root).appId, app.id);
  write(path.join(app.outputDirectory, 'search/v1/en.json'), '{}');
  assert.throws(() => readVerifiedAppBuild(app, f.root), /欠損・変更/);
  recordAppBuild(app, f.root);
  write(path.join(app.directory, 'src/new.md'), 'new source');
  assert.throws(() => readVerifiedAppBuild(app, f.root), /入力が変更/);
});

test('static navigation escapes labels and honors RTL without requiring JavaScript', async (t) => {
  const f = fixture(t);
  f.group.config.name.ar = '<Example & Arabic>';
  for (const app of f.apps) {
    fs.renameSync(
      path.join(app.directory, 'src/content/docs/v1/en'),
      path.join(app.directory, 'src/content/docs/v1/ar')
    );
    fs.renameSync(path.join(app.outputDirectory, 'v1/en'), path.join(app.outputDirectory, 'v1/ar'));
    const child = path.basename(app.directory);
    write(path.join(app.outputDirectory, 'search/v1/en.json'), {
      schemaVersion: 1,
      version: 'v1',
      lang: 'ar',
      entries: [{ title: child, url: `/docs/example/v1/ar/guide/${child}/` }],
    });
    fs.rmSync(path.join(app.outputDirectory, 'sidebar/sidebar-en-v1.json'));
    write(path.join(app.outputDirectory, 'sidebar/sidebar-ar-v1.json'), [
      { title: child + '<script>', href: `/docs/example/v1/ar/guide/${child}/` },
    ]);
  }
  await composeGroupOutput(f.group, f.apps, f.destination);
  const html = fs.readFileSync(
    path.join(f.destination, 'site/navigation/v1/ar/index.html'),
    'utf8'
  );
  assert.match(html, /lang="ar" dir="rtl"/);
  assert.match(html, /&lt;Example &amp; Arabic&gt;/);
  assert.match(html, /web&lt;script&gt;/);
  assert.doesNotMatch(html, /<script/);
});

test('a complete page output cannot publish with missing search or navigation records', async (t) => {
  const f = fixture(t);
  await composeGroupOutput(f.group, f.apps, f.destination);
  const before = fs.readFileSync(path.join(f.destination, 'manifest.json'));
  const index = path.join(f.apps[1].outputDirectory, 'search/v1/en.json');
  fs.rmSync(index);
  await assert.rejects(composeGroupOutput(f.group, f.apps, f.destination), /検索・ナビ目録が欠損/);
  assert.deepEqual(fs.readFileSync(path.join(f.destination, 'manifest.json')), before);
});

test('category identity comes from document directories, not localized display titles', async (t) => {
  const f = fixture(t);
  const app = f.apps[1];
  fs.renameSync(
    path.join(app.directory, 'src/content/docs/v1/en/guide'),
    path.join(app.directory, 'src/content/docs/v1/en/reference')
  );
  fs.renameSync(
    path.join(app.outputDirectory, 'v1/en/guide'),
    path.join(app.outputDirectory, 'v1/en/reference')
  );
  for (const name of ['search/v1/en.json', 'sidebar/sidebar-en-v1.json']) {
    const file = path.join(app.outputDirectory, name);
    fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replaceAll('/guide/', '/reference/'));
  }
  await composeGroupOutput(f.group, f.apps, f.destination);
  const navigation = JSON.parse(
    fs.readFileSync(path.join(f.destination, 'site/navigation/v1/en.json'))
  );
  assert.deepEqual(
    navigation.items.map((item) => item.categoryId),
    ['guide', 'reference']
  );
  assert.equal(navigation.items[0].title, navigation.items[1].title);
  assert.equal(navigation.items[0].items.length, 1);
  assert.equal(navigation.items[1].items.length, 1);
});

test('conflicting labels and forged category IDs fail without replacing published navigation', async (t) => {
  const f = fixture(t);
  await composeGroupOutput(f.group, f.apps, f.destination);
  const previous = fs.readFileSync(path.join(f.destination, 'manifest.json'));
  const file = path.join(f.apps[1].outputDirectory, 'sidebar/sidebar-en-v1.json');
  const original = JSON.parse(fs.readFileSync(file));
  write(file, [{ ...original[0], title: 'Conflicting name' }]);
  await assert.rejects(composeGroupOutput(f.group, f.apps, f.destination), /表示名が一致しません/);
  write(file, [{ ...original[0], categoryId: 'forged' }]);
  await assert.rejects(
    composeGroupOutput(f.group, f.apps, f.destination),
    /文書の配置と一致しません/
  );
  assert.deepEqual(fs.readFileSync(path.join(f.destination, 'manifest.json')), previous);
});
