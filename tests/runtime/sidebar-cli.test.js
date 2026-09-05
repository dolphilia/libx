import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

const repository = path.resolve(import.meta.dirname, '../..');
function fixture(t) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-sidebar-cli-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (file, data) => {
    const target = path.join(root, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, typeof data === 'string' ? data : JSON.stringify(data));
  };
  for (const file of [
    ...[
      'build-sidebar',
      'build-sidebar-selective',
      'utils',
      'logger',
      'jsonc-utils',
      'global-defaults',
    ].map((name) => `scripts/${name}.js`),
    'packages/project-config/src/app-registry.js',
    'packages/project-config/src/jsonc-runtime.js',
    'packages/project-config/default-resolvers.js',
    'packages/content-utils/src/category-navigation.js',
  ])
    write(file, fs.readFileSync(path.join(repository, file), 'utf8'));
  write('package.json', { type: 'module' });
  write('pnpm-workspace.yaml', 'packages: []\n');
  fs.symlinkSync(path.join(repository, 'node_modules'), path.join(root, 'node_modules'), 'dir');
  write('apps/group/group.config.jsonc', { schemaVersion: 1, name: { en: 'Group' }, entry: 'web' });
  write('apps/group/web/package.json', { name: 'group-web' });
  write('apps/group/web/astro.config.mjs', 'export default {};');
  write('apps/group/web/src/config/project.config.jsonc', {
    paths: { projectSlug: 'web' },
    language: { default: 'en', supported: ['en'] },
    translations: { en: { categories: { guide: 'Guide' } } },
  });
  write('apps/group/web/src/content/docs/v1/en/guide/page.md', '---\ntitle: Example\n---\nBody\n');
  const run = (script, args = []) =>
    spawnSync(process.execPath, [path.join(root, 'scripts', script), ...args], {
      cwd: path.join(root, 'apps/group/web'),
      encoding: 'utf8',
    });
  return { root, write, run };
}

test('全体と選択サイドバーCLIは入れ子appの同じ公開URLを生成する', (t) => {
  const f = fixture(t);
  f.write(
    'apps/group/web/src/content/docs/v1/.en-check-temporary/guide/page.md',
    '---\ntitle: Temporary\n---\n'
  );
  f.write(
    'apps/group/web/src/content/docs/.v1-check/en/guide/page.md',
    '---\ntitle: Temporary\n---\n'
  );
  const first = f.run('build-sidebar.js');
  assert.equal(first.status, 0, first.stderr);
  const output = path.join(f.root, 'apps/group/web/public/sidebar/sidebar-en-v1.json');
  const before = fs.readFileSync(output, 'utf8');
  assert.match(before, /\/docs\/group\/v1\/en\/guide\/page/);
  assert.deepEqual(fs.readdirSync(path.dirname(output)), ['sidebar-en-v1.json']);
  const second = f.run('build-sidebar-selective.js', ['--projects=group/web']);
  assert.equal(second.status, 0, second.stderr);
  assert.equal(fs.readFileSync(output, 'utf8'), before);
});

test('検出失敗・空ID・壊れたMarkdownは失敗し既存サイドバーを保持する', (t) => {
  const f = fixture(t);
  const publicDirectory = path.join(f.root, 'apps/group/web/public');
  f.write('apps/group/web/public/sidebar/previous.json', 'previous');
  for (const arg of ['--projects=,', '--projects=group/web,']) {
    assert.notEqual(f.run('build-sidebar-selective.js', [arg]).status, 0);
  }
  f.write('apps/group/web/src/content/docs/v1/en/guide/page.md', '---\ntitle: [broken\n---\n');
  assert.notEqual(f.run('build-sidebar.js').status, 0);
  assert.equal(
    fs.readFileSync(path.join(publicDirectory, 'sidebar/previous.json'), 'utf8'),
    'previous'
  );
  assert.deepEqual(fs.readdirSync(publicDirectory), ['sidebar']);
  f.write('apps/group/group.config.jsonc', '{broken');
  assert.notEqual(f.run('build-sidebar.js').status, 0);
});
