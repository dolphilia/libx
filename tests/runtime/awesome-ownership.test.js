import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { readJsoncFile } from '../../scripts/jsonc-utils.js';
import { remarkAwesomeInternalLinks } from '../../scripts/plugins/remark-awesome-internal-links.js';
import {
  appForSource,
  createAwesomeResolver,
  createAwesomeContentAccess,
  awesomeContentPath,
  getAwesomeApps,
  loadAwesomeOwnership,
  ownerForSource,
  partitionAwesomeRecords,
  readAwesomeRouteManifest,
} from '../../scripts/importers/awesome/app-ownership.mjs';

function fixture(t, nested = true) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-awesome-owner-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (file, value) => {
    const target = path.join(root, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, typeof value === 'string' ? value : JSON.stringify(value));
  };
  write('pnpm-workspace.yaml', 'packages: []');
  const ownership = {
    schemaVersion: 1,
    groupId: 'awesome',
    sourceOwners: { Root: 'overview', Web: 'web' },
  };
  write('config/awesome-source-owners.json', ownership);
  const ids = nested ? ['awesome/overview', 'awesome/web'] : ['awesome'];
  if (nested)
    write('apps/awesome/group.config.jsonc', {
      schemaVersion: 1,
      name: { ja: 'Awesome' },
      entry: 'overview',
    });
  for (const id of ids) {
    write(`apps/${id}/package.json`, { name: `apps-${id.replaceAll('/', '-')}` });
    write(`apps/${id}/astro.config.mjs`, 'export default {};');
    write(`apps/${id}/src/config/project.config.jsonc`, {
      paths: { projectSlug: id.split('/').at(-1) },
    });
  }
  const record = (sourceId, version = 'v1', lang = 'en') => ({
    sourceId,
    repository: `source/${sourceId}`,
    version,
    lang,
    order: sourceId === 'Root' ? 0 : 1,
    slug: `category/${sourceId}`,
    moduleKey: `/src/awesome-content/${version}/${lang}/category/${sourceId}.md`,
  });
  const manifest = (id, entries) =>
    write(`apps/${id}/src/generated/awesome-localized-routes.json`, {
      schemaVersion: 2,
      entries,
    });
  for (const id of ids)
    manifest(
      id,
      (nested ? [id.endsWith('/web') ? 'Web' : 'Root'] : ['Root', 'Web']).flatMap((source) => [
        record(source),
        record(source, 'v1', 'ja'),
        record(source, 'v2'),
      ])
    );
  return { root, write, record, manifest, ownership };
}

test('Awesome所有先は版・言語・カテゴリから独立し、大文字小文字を保持する', (t) => {
  const f = fixture(t);
  const ownership = loadAwesomeOwnership(f.root);
  const manifest = readAwesomeRouteManifest({ root: f.root });
  assert.equal(manifest.entries.length, 6);
  const partitions = partitionAwesomeRecords(manifest.entries, ownership);
  assert.equal(partitions.get('web').length, 3);
  assert.ok(partitions.get('web').every((entry) => entry.appId === 'awesome/web'));
  assert.equal(appForSource('Web', f.root).id, 'awesome/web');
  assert.throws(() => ownerForSource('web', ownership), /所有子を追加/);
  assert.throws(() => ownerForSource('toString', ownership), /所有子を追加/);
  assert.equal(
    awesomeContentPath(f.record('Web'), f.root),
    path.join(f.root, 'apps/awesome/web/src/awesome-content/v1/en/category/Web.md')
  );
});

test('Awesome所有APIは移行前の単独配置でも同じ全版・言語を返す', (t) => {
  const f = fixture(t, false);
  assert.equal(getAwesomeApps(f.root).group, null);
  assert.equal(appForSource('Web', f.root).id, 'awesome');
  assert.equal(readAwesomeRouteManifest({ root: f.root }).entries.length, 6);
});

test('翻訳用の論理ファイル指定は子の配置を隠し、未知・逸脱・誤配置を拒否する', (t) => {
  const f = fixture(t);
  const version = 'v2026-08-23';
  for (const [source, child] of [
    ['Root', 'overview'],
    ['Web', 'web'],
  ]) {
    f.write(`apps/awesome/${child}/src/generated/awesome-routes.json`, {
      schemaVersion: 2,
      entries: [f.record(source, version)],
    });
    for (const lang of ['en', 'ja'])
      f.write(
        `apps/awesome/${child}/src/awesome-content/${version}/${lang}/category/${source}.md`,
        source
      );
  }
  const content = createAwesomeContentAccess(version, f.root);
  assert.deepEqual(content.files('en'), ['category/Root.md', 'category/Web.md']);
  assert.deepEqual(content.files('ja'), content.files('en'));
  assert.equal(
    content.pathFor('ja', 'category/Web.md'),
    path.join(f.root, `apps/awesome/web/src/awesome-content/${version}/ja/category/Web.md`)
  );
  for (const file of ['../secret.md', '/etc/passwd', 'category/unknown.md'])
    assert.throws(() => content.pathFor('ja', file), /経路目録に本文がありません/);
  assert.throws(() => content.files('../../'), /言語が不正/);
  assert.throws(() => content.pathFor('../en', 'category/Web.md'), /言語が不正/);
  f.write(`apps/awesome/overview/src/awesome-content/${version}/ja/category/Web.md`, 'wrong owner');
  assert.throws(() => content.files('ja'), /所有子と異なる/);
  const target = content.pathFor('ja', 'category/Web.md');
  fs.rmSync(target);
  f.write('outside.md', 'must not be overwritten');
  fs.symlinkSync(path.join(f.root, 'outside.md'), target);
  assert.throws(() => content.pathFor('ja', 'category/Web.md'), /symlink/);
});

test('分割した概要から他の子のリストへ、同じ版・言語の内部リンクを生成する', (t) => {
  const f = fixture(t);
  const routes = readAwesomeRouteManifest({ root: f.root }).entries;
  for (const lang of ['en', 'ja']) {
    const link = { type: 'link', url: 'https://github.com/source/Web', children: [] };
    remarkAwesomeInternalLinks({ routes })(
      { type: 'root', children: [link] },
      {
        path: `${f.root}/apps/awesome/overview/src/awesome-content/v1/${lang}/overview/sindresorhus-awesome.md`,
      }
    );
    assert.equal(link.url, `/docs/awesome/v1/${lang}/category/Web/`);
  }
  const missing = { type: 'link', url: 'https://github.com/source/Web', children: [] };
  remarkAwesomeInternalLinks({ routes })(
    { type: 'root', children: [missing] },
    {
      path: `${f.root}/apps/awesome/overview/src/awesome-content/v2/ja/overview/sindresorhus-awesome.md`,
    }
  );
  assert.equal(missing.url, 'https://github.com/source/Web');
});

test('Awesomeは誤配置・重複・未知取得元・欠損所有子で停止する', (t) => {
  const f = fixture(t);
  f.manifest('awesome/web', [f.record('Root')]);
  assert.throws(() => readAwesomeRouteManifest({ root: f.root }), /所有子と異なる/);
  f.manifest('awesome/web', [f.record('Web'), f.record('Web')]);
  assert.throws(() => readAwesomeRouteManifest({ root: f.root }), /重複/);
  f.manifest('awesome/web', [f.record('Unknown')]);
  assert.throws(() => readAwesomeRouteManifest({ root: f.root }), /所有子を追加/);
  f.ownership.sourceOwners.Web = 'missing';
  f.write('config/awesome-source-owners.json', f.ownership);
  assert.throws(() => getAwesomeApps(f.root), /子appがありません/);
});

test('Awesome本文解決はパス逸脱を拒否し、所有設定の不正を診断する', (t) => {
  const f = fixture(t);
  for (const moduleKey of [
    '/src/awesome-content/../secret',
    '/etc/passwd',
    '/src/awesome-content/a\\b',
    '/src/awesome-content//x',
  ])
    assert.throws(
      () => awesomeContentPath({ ...f.record('Web'), moduleKey }, f.root),
      /本文パスが不正/
    );
  for (const value of [
    null,
    { ...f.ownership, members: ['web'] },
    { ...f.ownership, sourceOwners: { ' ': 'web' } },
    { ...f.ownership, sourceOwners: { Web: '../web' } },
  ]) {
    f.write('config/awesome-source-owners.json', value);
    assert.throws(() => loadAwesomeOwnership(f.root), /所有割当/);
  }
});

test('実Awesomeの全取得元に所有割当があり、英日・履歴の経路を欠落させない', () => {
  const root = path.resolve(import.meta.dirname, '../..');
  const localized = readAwesomeRouteManifest({ root });
  const english = readAwesomeRouteManifest({ root, localized: false });
  assert.equal(localized.entries.length, 2074);
  assert.equal(english.entries.length, 1037);
  assert.equal(new Set(localized.entries.map((entry) => entry.sourceId)).size, 672);
  assert.deepEqual(
    new Set(Object.keys(loadAwesomeOwnership(root).sourceOwners)),
    new Set(localized.entries.map((entry) => entry.sourceId))
  );
  const resolver = createAwesomeResolver(root);
  for (const entry of localized.entries)
    assert.ok(fs.existsSync(resolver.contentPath(entry)), entry.sourceId);
});

test('現行Awesome出典レジストリのcheckは生成値を照合しファイルを変更しない', () => {
  const root = path.resolve(import.meta.dirname, '../..');
  const files = getAwesomeApps(root).apps.map((app) =>
    path.join(app.directory, 'src/config/project.config.jsonc')
  );
  const before = files.map((file) => fs.readFileSync(file));
  for (const snapshot of ['v2026-08-20', 'v2026-08-23']) {
    const output = execFileSync(
      process.execPath,
      [
        'scripts/importers/awesome/generate-awesome-source-registry.mjs',
        `--snapshot=${snapshot}`,
        '--check',
      ],
      { cwd: root, encoding: 'utf8', stdio: 'pipe' }
    );
    assert.match(output, /Awesome source registry check: OK/);
    files.forEach((file, index) => assert.deepEqual(fs.readFileSync(file), before[index]));
  }
});

test('案内ページ生成は記録済みの正規化を適用し、現行の日本語本文を再現する', () => {
  const root = path.resolve(import.meta.dirname, '../..');
  for (const [version, count] of [
    ['v2026-08-20', 0],
    ['v2026-08-23', 56],
  ]) {
    const output = execFileSync(
      process.execPath,
      ['scripts/importers/awesome/translate-awesome-metadata-pages.mjs', `--snapshot=${version}`],
      { cwd: root, encoding: 'utf8', stdio: 'pipe' }
    );
    assert.ok(output.includes(`Awesome metadata translation: OK (${count} pages)`));
  }
});

test('現行の外部リンク報告は移動に依存しない取得元IDで本文を照合する', () => {
  const root = path.resolve(import.meta.dirname, '../..');
  const output = execFileSync(
    process.execPath,
    [
      'scripts/importers/awesome/generate-awesome-external-link-report.mjs',
      '--snapshot=v2026-08-23',
      '--report=docs/notes/nested-app-migration/external-links-before.json',
      '--check',
    ],
    { cwd: root, encoding: 'utf8', stdio: 'pipe' }
  );
  assert.match(output, /OK \(616 pages, 138784 links\)/);
});

test('入れ子の本文・asset検査は全子を検査し、他の子の出典登録で欠落を隠さない', (t) => {
  const f = fixture(t);
  const repository = path.resolve(import.meta.dirname, '../..');
  f.write('package.json', { type: 'module' });
  fs.symlinkSync(path.join(repository, 'node_modules'), path.join(f.root, 'node_modules'));
  for (const file of [
    'scripts/importers/awesome/validate-awesome-single-app.mjs',
    'scripts/importers/awesome/validate-awesome-translation.mjs',
    'scripts/importers/awesome/app-ownership.mjs',
    'scripts/importers/awesome/common.mjs',
    'scripts/jsonc-utils.js',
    'packages/project-config/src/app-registry.js',
    'packages/project-config/src/jsonc-runtime.js',
  ])
    f.write(file, fs.readFileSync(path.join(repository, file), 'utf8'));
  const version = 'v2026-08-23';
  f.write(`docs/notes/document-import/awesome/snapshots/${version}/SOURCES.lock.json`, {
    sources: ['Root', 'Web'].map((sourceId) => ({ sourceId, status: 'included' })),
  });
  for (const [source, child] of [
    ['Root', 'overview'],
    ['Web', 'web'],
  ]) {
    const id = `awesome/${child}`;
    f.write(`apps/${id}/src/config/project.config.jsonc`, {
      paths: { projectSlug: child },
      licensing: { sources: [{ id: source }] },
    });
    const record = { ...f.record(source, version), title: source, licenseSource: source };
    f.write(`apps/${id}/src/generated/awesome-routes.json`, {
      schemaVersion: 2,
      entries: [record],
    });
    for (const lang of ['en', 'ja']) {
      f.write(
        `apps/${id}/src/awesome-content/${version}/${lang}/category/${source}.md`,
        `---\ntitle: ${source}\nlicenseSource: ${source}\n---\n# ${source}\n`
      );
      f.write(
        `apps/${id}/dist/${version}/${lang}/category/${source}/index.html`,
        `<h1>${source}</h1>`
      );
    }
  }
  const run = (...args) =>
    execFileSync(
      process.execPath,
      [
        'scripts/importers/awesome/validate-awesome-single-app.mjs',
        `--snapshot=${version}`,
        ...args,
      ],
      { cwd: f.root, encoding: 'utf8', stdio: 'pipe' }
    );
  assert.match(run(), /Awesome group validation: OK \(2 English pages, 2 translated pages\)/);
  assert.match(
    run('--assets'),
    /Awesome asset validation: OK \(2 English pages, 2 translated pages/
  );
  const translation = () =>
    execFileSync(
      process.execPath,
      [
        'scripts/importers/awesome/validate-awesome-translation.mjs',
        `--snapshot=${version}`,
        '--require-complete',
      ],
      { cwd: f.root, encoding: 'utf8', stdio: 'pipe' }
    );
  assert.match(
    translation(),
    /Awesome translation validation: OK \(2\/2 translated pages, complete\)/
  );
  fs.rmSync(
    path.join(f.root, `apps/awesome/web/src/awesome-content/${version}/ja/category/Web.md`)
  );
  assert.throws(translation, (error) => {
    assert.match(error.stderr, /awesome\/web: 日本語ページが未翻訳です: category\/Web.md/);
    return true;
  });
  f.write('apps/awesome/web/src/config/project.config.jsonc', {
    paths: { projectSlug: 'web' },
    licensing: { sources: [{ id: 'Root' }] },
  });
  assert.throws(
    () => run(),
    (error) => {
      assert.match(error.stderr, /licenseSourceが出典レジストリにありません: Web/);
      return true;
    }
  );
});

test('入れ子出典生成は履歴版の出典と共通出典参照を保持し、古い版指定でも全子の新版を保持する', (t) => {
  const f = fixture(t);
  const repository = path.resolve(import.meta.dirname, '../..');
  f.write('package.json', { type: 'module' });
  for (const file of [
    'scripts/importers/awesome/generate-awesome-source-registry.mjs',
    'scripts/importers/awesome/app-ownership.mjs',
    'scripts/importers/awesome/common.mjs',
    'scripts/importers/batch-import-output.js',
    'scripts/importers/safe-import-output.js',
    'scripts/atomic-paths.js',
    'scripts/jsonc-utils.js',
    'packages/project-config/src/app-registry.js',
    'packages/project-config/src/jsonc-runtime.js',
  ])
    f.write(file, fs.readFileSync(path.join(repository, file), 'utf8'));
  const old = 'v2026-08-20';
  const current = 'v2026-08-23';
  for (const version of [old, current]) {
    const directory = `docs/notes/document-import/awesome/snapshots/${version}`;
    f.write(`${directory}/SOURCES.lock.json`, {
      sources: ['Root', 'Web'].map((sourceId) => ({
        sourceId,
        status: sourceId === 'Web' && version === current ? 'excluded' : 'included',
        repository: `owner/${sourceId}`,
        licenseSpdx: 'MIT',
        commitSha: version,
        documentPath: 'README.md',
      })),
    });
    f.write(`${directory}/CONTENT_PARTITIONS.json`, {
      categories: [{ id: 'overview', name: 'Overview' }],
    });
  }
  for (const child of ['overview', 'web']) {
    f.write(`apps/awesome/${child}/src/config/project.config.jsonc`, {
      paths: { projectSlug: child },
      translations: { en: { categories: {} }, ja: { categories: {} } },
      versioning: {
        versions: [old, current].map((id) => ({ id, name: id, isLatest: id === current })),
      },
      licensing: { defaultSource: 'Root', sources: [] },
    });
  }
  f.manifest('awesome/overview', [{ ...f.record('Root', current), licenseSource: 'Root' }]);
  f.manifest('awesome/web', [
    { ...f.record('Web', old), licenseSource: 'Web' },
    { ...f.record('Web', current), licenseSource: 'Root' },
  ]);
  const run = (...args) =>
    execFileSync(
      process.execPath,
      [
        'scripts/importers/awesome/generate-awesome-source-registry.mjs',
        `--snapshot=${old}`,
        ...args,
      ],
      { cwd: f.root, encoding: 'utf8', stdio: 'pipe' }
    );
  assert.match(run(), /Generated Awesome source registry for awesome\/web/);
  const overview = readJsoncFile(
    path.join(f.root, 'apps/awesome/overview/src/config/project.config.jsonc')
  );
  const web = readJsoncFile(path.join(f.root, 'apps/awesome/web/src/config/project.config.jsonc'));
  assert.deepEqual(
    overview.licensing.sources.map((source) => source.id),
    ['Root']
  );
  assert.deepEqual(
    web.licensing.sources.map((source) => source.id),
    ['Root', 'Web']
  );
  assert.ok(web.licensing.sources.find((source) => source.id === 'Web').sourceUrl.includes(old));
  for (const config of [overview, web]) {
    assert.deepEqual(
      config.versioning.versions.map((version) => version.id),
      [old, current]
    );
    assert.deepEqual(
      config.versioning.versions.filter((version) => version.isLatest).map((version) => version.id),
      [current]
    );
  }
  assert.match(run('--check'), /Awesome source registry check: OK \(2 app\(s\)\)/);
});
