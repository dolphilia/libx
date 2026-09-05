import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import test from 'node:test';
import { stripJsonComments } from '../../packages/project-config/src/jsonc-runtime.js';

const repository = path.resolve(import.meta.dirname, '../..');
test('入れ子appで文書・版・言語を追加し、索引を生成しても単独appを変更しない', (t) => {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-management-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const ignored = new Set(['node_modules', 'dist', '.astro', '.git']);
  const copy = (source, target) =>
    fs.cpSync(source, target, {
      recursive: true,
      filter: (file) => !ignored.has(path.basename(file)),
    });
  for (const name of ['scripts', 'packages', 'config', 'templates'])
    copy(path.join(repository, name), path.join(root, name));
  fs.writeFileSync(path.join(root, 'package.json'), '{"type":"module"}');
  fs.writeFileSync(path.join(root, 'pnpm-workspace.yaml'), 'packages: []\n');
  fs.symlinkSync(path.join(repository, 'node_modules'), path.join(root, 'node_modules'), 'dir');
  const flat = path.join(root, 'apps/flat');
  copy(path.join(root, 'templates/docs-site'), flat);
  const hash = (directory) => {
    const digest = createHash('sha256');
    const visit = (dir) => {
      for (const entry of fs
        .readdirSync(dir, { withFileTypes: true })
        .sort((a, b) => a.name.localeCompare(b.name))) {
        const file = path.join(dir, entry.name);
        digest.update(path.relative(directory, file));
        if (entry.isDirectory()) visit(file);
        else digest.update(fs.readFileSync(file));
      }
    };
    visit(directory);
    return digest.digest('hex');
  };
  const before = hash(flat);
  const run = (script, args, cwd = root) => {
    const result = spawnSync(process.execPath, [path.join(root, 'scripts', script), ...args], {
      cwd,
      encoding: 'utf8',
      timeout: 30000,
    });
    assert.equal(result.status, 0, result.stderr || result.stdout);
    return result;
  };
  run('create-group.js', ['reference', 'Reference', '参照', '--skip-install']);
  const child = path.join(root, 'apps/reference/overview');
  run('create-document.js', ['reference/overview', 'en', 'v1', 'guide', 'Nested Document'], child);
  run('create-version.js', ['reference/overview', 'v2'], child);
  run(
    'add-language.js',
    ['reference/overview', 'de', '--template-lang=en', '--auto-template', '--skip-test'],
    child
  );
  run('build-sidebar-selective.js', ['--projects=reference/overview'], child);
  run('build-search-index.js', ['--project=reference/overview'], child);
  const config = JSON.parse(
    stripJsonComments(fs.readFileSync(path.join(child, 'src/config/project.config.jsonc'), 'utf8'))
  );
  assert.ok(config.versioning.versions.some((version) => version.id === 'v2'));
  assert.ok(config.language.supported.includes('de'));
  const files = fs.readdirSync(path.join(child, 'src/content/docs'), { recursive: true });
  assert.ok(files.some((file) => file.startsWith('v1/en/') && file.includes('nested-document')));
  assert.ok(files.some((file) => file.startsWith('v2/en/') && file.includes('nested-document')));
  const sidebar = fs.readFileSync(path.join(child, 'public/sidebar/sidebar-de-v2.json'), 'utf8');
  assert.match(sidebar, /\/docs\/reference\/v2\/de\//);
  assert.ok(fs.existsSync(path.join(child, 'public/search/v2/de.json')));
  assert.equal(hash(flat), before);
});
