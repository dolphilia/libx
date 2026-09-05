import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createGroup } from '../../scripts/create-group.js';
import { discoverApps, readAppGroup } from '../../packages/project-config/src/app-registry.js';
import { copyTemplateDirectory } from '../../scripts/create-project.js';

function fixture(t) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-group-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.mkdirSync(path.join(root, 'apps'));
  fs.writeFileSync(path.join(root, 'pnpm-workspace.yaml'), "packages:\n  - 'apps/*/*'\n");
  copyTemplateDirectory(
    path.resolve('templates/docs-site'),
    path.join(root, 'templates/docs-site')
  );
  return root;
}

test('group scaffolding creates a complete entry and resolves paths without membership duplication', (t) => {
  const root = fixture(t);
  const result = createGroup({ id: 'example', nameEn: 'Example', nameJa: '例' }, root);
  const registry = discoverApps(root);
  assert.deepEqual(registry.groups[0].memberIds, ['example/overview']);
  assert.equal(registry.groups[0].config.members, undefined);
  assert.equal(registry.apps[0].packageName, 'apps-example-overview');
  assert.equal(registry.apps[0].publicBase, '/docs/example');
  assert.equal(fs.existsSync(path.join(result.directory, 'package.json')), false);
  const child = path.join(result.directory, 'overview');
  const pkg = JSON.parse(fs.readFileSync(path.join(child, 'package.json')));
  assert.equal(pkg.scripts.prebuild, 'libx-docs-prepare --projects=example/overview');
  const ts = JSON.parse(fs.readFileSync(path.join(child, 'tsconfig.json')));
  assert.equal(ts.extends, '@docs/config/astro.json');
  assert.equal(ts.compilerOptions?.paths, undefined);
  assert.equal(readAppGroup(child).id, 'example');
  assert.deepEqual(fs.readdirSync(path.join(root, 'apps')), ['example']);
  assert.throws(() => createGroup({ id: 'example', nameEn: 'Duplicate', nameJa: '重複' }, root));
  assert.equal(discoverApps(root).apps.length, 1);
});

test('dry-run and invalid IDs cannot create partial groups', (t) => {
  const root = fixture(t);
  assert.equal(
    createGroup({ id: 'preview', nameEn: 'Preview', nameJa: '確認', dryRun: true }, root).dryRun,
    true
  );
  for (const id of ['../outside', 'a/b', '/absolute', 'Bad', 'dist']) {
    assert.throws(() => createGroup({ id, nameEn: 'Bad', nameJa: '不正' }, root));
  }
  assert.deepEqual(fs.readdirSync(path.join(root, 'apps')), []);
});

test('failed template preparation leaves no group marker or stage', (t) => {
  const root = fixture(t);
  fs.rmSync(path.join(root, 'templates/docs-site/tsconfig.json'));
  assert.throws(() => createGroup({ id: 'broken', nameEn: 'Broken', nameJa: '失敗' }, root));
  assert.deepEqual(fs.readdirSync(path.join(root, 'apps')), []);
});
