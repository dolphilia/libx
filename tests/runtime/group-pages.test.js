import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { discoverApps } from '../../packages/project-config/src/app-registry.js';
import {
  collectGroupPages,
  resolveGroupPageContext,
  resolveGroupPagination,
  resolveGroupDocumentLink,
} from '../../packages/project-config/src/group-pages.js';
import { appInputHash } from '../../scripts/group-output.js';

function write(root, file, data) {
  const target = path.join(root, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, typeof data === 'string' ? data : JSON.stringify(data));
}

test('ナビの世代は入力順・本文だけの変更で変わらず、カテゴリ翻訳の変更で更新する', (t) => {
  const f = fixture(t);
  const registry = discoverApps(f.root);
  const group = registry.groups[0];
  const before = collectGroupPages(group, registry.apps);
  assert.equal(
    collectGroupPages(group, [...registry.apps].reverse()).navigationRevision,
    before.navigationRevision
  );
  const app = registry.apps[0];
  const page = before.pages.find((entry) => entry.appId === app.id);
  fs.appendFileSync(path.join(app.directory, page.sourcePath), '\n本文のみ追記');
  assert.equal(
    collectGroupPages(group, registry.apps).navigationRevision,
    before.navigationRevision
  );
  const configPath = path.join(app.directory, 'src/config/project.config.jsonc');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  config.translations = { ja: { categories: { guide: '改訂ガイド' } } };
  fs.writeFileSync(configPath, JSON.stringify(config));
  assert.notEqual(
    collectGroupPages(group, registry.apps).navigationRevision,
    before.navigationRevision
  );
});
function fixture(t) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-page-catalog-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  write(root, 'pnpm-workspace.yaml', 'packages: [apps/*/*]');
  write(root, 'apps/example/group.config.jsonc', {
    schemaVersion: 1,
    name: { en: 'Example' },
    entry: 'overview',
    versioning: { mode: 'shared' },
  });
  for (const child of ['overview', 'web']) {
    write(root, `apps/example/${child}/package.json`, { name: `apps-example-${child}` });
    write(root, `apps/example/${child}/astro.config.mjs`, 'export default {};');
    write(root, `apps/example/${child}/src/config/project.config.jsonc`, {
      paths: { projectSlug: child },
      versioning: {
        versions: [
          { id: 'v1', name: 'One' },
          { id: 'v2', name: 'Two', isLatest: true },
        ],
      },
    });
  }
  const document = (child, route, id, title = 'Guide') =>
    write(
      root,
      `apps/example/${child}/src/content/docs/${route}.md`,
      `---\ntitle: ${title}\ndocumentId: ${id}\n---\nBody\n`
    );
  document('web', 'v1/en/guide/start', 'guide');
  document('web', 'v1/ja/guide/start', 'guide');
  document('web', 'v2/en/guide/renamed', 'guide');
  document('overview', 'v2/ja/guide/moved', 'guide');
  document('overview', 'v2/ar/overview', 'overview');
  const { groups, apps } = discoverApps(root);
  return { root, group: groups[0], apps, document };
}

test('stable document IDs resolve renamed and cross-child counterparts with honest index fallbacks', (t) => {
  const f = fixture(t);
  const catalog = collectGroupPages(f.group, f.apps);
  const current = resolveGroupPageContext(catalog, {
    appId: 'example/web',
    version: 'v2',
    lang: 'en',
    url: '/docs/example/v2/en/guide/renamed/',
  });
  assert.equal(
    current.languagePaths.find((item) => item.lang === 'ja').path,
    '/docs/example/v2/ja/guide/moved/'
  );
  assert.deepEqual(
    current.languagePaths.find((item) => item.lang === 'ar'),
    { lang: 'ar', path: '/docs/example/navigation/v2/ar/', isCurrent: false, exact: false }
  );
  assert.equal(current.versionPaths.v1, '/docs/example/v1/en/guide/start/');
  assert.equal(current.documentId, 'guide');
  const independent = resolveGroupPageContext(
    { ...catalog, versionMode: 'independent' },
    { appId: 'example/web', version: 'v2', lang: 'en', url: '/docs/example/v2/en/guide/renamed/' }
  );
  assert.deepEqual(
    independent.languagePaths.map((item) => item.lang),
    ['en']
  );
});

test('duplicate identity and incomplete shared-version declarations stop catalog publication', (t) => {
  const f = fixture(t);
  f.document('overview', 'v1/en/duplicate', 'guide');
  assert.throws(() => collectGroupPages(f.group, f.apps), /文書ID・版・言語が重複/);
  fs.rmSync(path.join(f.root, 'apps/example/overview/src/content/docs/v1/en/duplicate.md'));
  const file = path.join(f.apps[1].directory, 'src/config/project.config.jsonc');
  const config = JSON.parse(fs.readFileSync(file));
  config.versioning.versions.push({ id: 'v3', name: 'Three' });
  fs.writeFileSync(file, JSON.stringify(config));
  assert.throws(() => collectGroupPages(f.group, f.apps), /版宣言が揃って/);
});

test('sibling body-only updates preserve cache keys while navigation metadata updates invalidate them', (t) => {
  const f = fixture(t);
  const overview = f.apps.find((app) => app.id === 'example/overview');
  const before = appInputHash(overview, f.root);
  const file = path.join(f.root, 'apps/example/web/src/content/docs/v1/en/guide/start.md');
  fs.appendFileSync(file, 'More body text.\n');
  assert.equal(appInputHash(overview, f.root), before);
  fs.writeFileSync(
    file,
    fs.readFileSync(file, 'utf8').replace('title: Guide', 'title: Updated guide')
  );
  assert.notEqual(appInputHash(overview, f.root), before);
});

test('shared groups paginate across child boundaries while keeping categories and locales separate', (t) => {
  const f = fixture(t);
  f.document('overview', 'v1/en/guide/overview', 'overview-start');
  const catalog = collectGroupPages(f.group, f.apps);
  const start = '/docs/example/v1/en/guide/overview/';
  const next = '/docs/example/v1/en/guide/start/';
  assert.equal(resolveGroupPagination(catalog, start).next.url, next);
  assert.equal(resolveGroupPagination(catalog, next).prev.url, start);
  assert.equal(
    resolveGroupPagination({ ...catalog, versionMode: 'independent' }, start).next,
    undefined
  );
  assert.equal(resolveGroupDocumentLink(catalog, '/v1/en/guide/start', start).url, next);
  assert.equal(
    resolveGroupDocumentLink(catalog, '../start/#heading', start).url,
    next + '#heading'
  );
  for (const target of [
    'https://other.invalid/page',
    '//other.invalid/page',
    '/v1/en/missing',
    'javascript:alert(1)',
    '/v1/en/guide/start?query',
  ]) {
    assert.throws(() => resolveGroupDocumentLink(catalog, target, start));
  }
});

test('版全体のページネーションはカテゴリ・子の境界を越え、元の文書順を保持する', (t) => {
  const f = fixture(t);
  f.document('overview', 'v1/en/overview/index', 'index');
  const catalog = collectGroupPages(f.group, f.apps);
  const first = catalog.pages.find((page) => page.slug === 'overview/index');
  const second = catalog.pages.find(
    (page) => page.version === 'v1' && page.lang === 'en' && page.appId === 'example/web'
  );
  first.order = 2;
  second.order = 1;
  const options = { scope: 'version', order: 'document' };
  assert.equal(resolveGroupPagination(catalog, second.url, options).next.url, first.url);
  assert.equal(resolveGroupPagination(catalog, first.url, options).prev.url, second.url);
  assert.equal(resolveGroupPagination(catalog, second.url).next, undefined);
  assert.equal(
    resolveGroupPagination({ ...catalog, versionMode: 'independent' }, second.url, options).next,
    undefined
  );
  assert.throws(
    () => resolveGroupPagination(catalog, first.url, { scope: 'all-languages' }),
    /範囲または順序/
  );
});

test('別の子の取得元repository変更で、概要の内部リンク生成キャッシュを無効化する', (t) => {
  const f = fixture(t);
  const web = f.apps.find((app) => app.id === 'example/web');
  const overview = f.apps.find((app) => app.id === 'example/overview');
  const moduleKey = '/src/awesome-content/v1/en/guide/list.md';
  fs.mkdirSync(path.dirname(path.join(web.directory, moduleKey.slice(1))), { recursive: true });
  fs.writeFileSync(path.join(web.directory, moduleKey.slice(1)), '---\ntitle: List\n---\nBody\n');
  const routeFile = path.join(web.directory, 'src/generated/awesome-localized-routes.json');
  fs.mkdirSync(path.dirname(routeFile), { recursive: true });
  const manifest = {
    schemaVersion: 2,
    entries: [
      {
        sourceId: 'list',
        repository: 'owner/old',
        moduleKey,
        version: 'v1',
        lang: 'en',
        slug: 'guide/list',
        order: 1,
      },
    ],
  };
  fs.writeFileSync(routeFile, JSON.stringify(manifest));
  const before = appInputHash(overview, f.root);
  manifest.entries[0].repository = 'owner/new';
  fs.writeFileSync(routeFile, JSON.stringify(manifest));
  assert.notEqual(appInputHash(overview, f.root), before);
});
