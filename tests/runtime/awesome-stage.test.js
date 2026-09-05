import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { stageAwesomeGroup } from '../../scripts/migrations/stage-awesome-group.js';

function fixture(t) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'awesome-stage-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (relative, value) => {
    const file = path.join(root, relative);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, typeof value === 'string' ? value : JSON.stringify(value));
  };
  const app = 'apps/awesome/';
  const children = ['overview', 'web', 'languages', 'systems', 'science', 'creative', 'community'];
  write('pnpm-workspace.yaml', 'packages:\n  - apps/*\n');
  write('config/awesome-source-owners.json', {
    schemaVersion: 1,
    groupId: 'awesome',
    sourceOwners: Object.fromEntries(children.map((child) => [child, child])),
  });
  write(app + 'package.json', { name: 'apps-awesome', scripts: {} });
  write(app + 'astro.config.mjs', 'export default {};');
  write(app + 'tsconfig.json', { compilerOptions: { paths: {} } });
  write(app + 'src/config/project.config.jsonc', {
    paths: { baseUrlPrefix: '/docs', projectSlug: 'awesome' },
    versioning: { versions: [{ id: 'v1', isLatest: true }] },
    language: { default: 'en', available: ['en', 'ja'] },
    licensing: { defaultSource: 'overview', sources: children.map((id) => ({ id })) },
  });
  for (const directory of ['layouts', 'styles', 'lib'])
    write(app + `src/${directory}/fixture.txt`, 'fixture');
  write(app + 'src/pages/[version]/[lang]/[...slug].astro', 'fixture');
  for (const file of ['favicon.svg', 'sw.js']) write(app + 'public/' + file, 'fixture');
  const entries = children.flatMap((sourceId, order) =>
    ['en', 'ja'].map((lang) => {
      const moduleKey = `/src/awesome-content/v1/${lang}/shared/${sourceId}.md`;
      write(app + moduleKey.slice(1), `---\ntitle: ${sourceId}\n---\n本文 ${lang}\n`);
      return {
        sourceId,
        version: 'v1',
        lang,
        order,
        moduleKey,
        slug: `shared/${sourceId}`,
        licenseSource: sourceId,
      };
    })
  );
  write(app + 'src/generated/awesome-localized-routes.json', { schemaVersion: 2, entries });
  write(app + 'src/generated/awesome-routes.json', {
    schemaVersion: 2,
    categories: [],
    entries: entries.filter((e) => e.lang === 'en'),
  });
  write(app + 'src/generated/awesome-preview-status.json', { snapshots: [] });
  for (const lang of ['en', 'ja']) {
    const items = children.map((child) => ({
      title: child,
      href: `/docs/awesome/v1/${lang}/shared/${child}`,
    }));
    write(app + `public/sidebar/sidebar-${lang}-v1.json`, [{ title: 'Shared', items }]);
    write(app + `public/search/v1/${lang}.json`, {
      lang,
      version: 'v1',
      entries: items.map((item) => ({ title: item.title, url: item.href + '/' })),
    });
  }
  return { root, write, children, app };
}

test('移行ステージはbaseUrlPrefixから公開経路を解決し、各子の本文・検索・ナビを保存する', (t) => {
  const f = fixture(t);
  const stage = path.join(f.root, 'stage');
  const report = stageAwesomeGroup(stage, f.root);
  assert.equal(report.documents, 14);
  for (const child of f.children)
    for (const lang of ['en', 'ja']) {
      const directory = path.join(stage, 'apps/awesome', child);
      const read = (file) => JSON.parse(fs.readFileSync(path.join(directory, file), 'utf8'));
      assert.deepEqual(
        read(`public/search/v1/${lang}.json`).entries.map((e) => e.url),
        [`/docs/awesome/v1/${lang}/shared/${child}/`]
      );
      assert.deepEqual(
        read(`public/sidebar/sidebar-${lang}-v1.json`)[0].items.map((e) => e.href),
        [`/docs/awesome/v1/${lang}/shared/${child}`]
      );
      const relative = `src/awesome-content/v1/${lang}/shared/${child}.md`;
      assert.deepEqual(
        fs.readFileSync(path.join(directory, relative)),
        fs.readFileSync(path.join(f.root, f.app, relative))
      );
    }
});

test('検索索引が本文を欠落させる移行は公開前に停止し、元appを保持する', (t) => {
  const f = fixture(t);
  f.write(f.app + 'public/search/v1/en.json', { entries: [] });
  const stage = path.join(f.root, 'stage');
  assert.throws(() => stageAwesomeGroup(stage, f.root), /検索件数が一致しません/);
  assert.equal(fs.existsSync(stage), false);
  assert.equal(
    fs.existsSync(path.join(f.root, f.app, 'src/awesome-content/v1/en/shared/web.md')),
    true
  );
});
