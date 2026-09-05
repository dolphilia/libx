import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  discoverApps,
  findRepositoryRoot,
  resolveApp,
  selectApps,
} from '../../packages/project-config/src/app-registry.js';

function fixture(t) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-app-registry-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.mkdirSync(path.join(root, 'apps'));
  fs.writeFileSync(path.join(root, 'pnpm-workspace.yaml'), 'packages: []\n');
  const write = (file, value) => {
    fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
    fs.writeFileSync(
      path.join(root, file),
      typeof value === 'string' ? value : JSON.stringify(value)
    );
  };
  const app = (id, name = `apps-${id.replaceAll('/', '-')}`) => {
    write(`apps/${id}/package.json`, { name });
    write(`apps/${id}/astro.config.mjs`, 'export default {};');
    write(`apps/${id}/src/config/project.config.jsonc`, {
      paths: { projectSlug: id.split('/').at(-1) },
    });
  };
  const group = (id, extra = {}) =>
    write(`apps/${id}/group.config.jsonc`, {
      schemaVersion: 1,
      name: { ja: id },
      entry: 'overview',
      ...extra,
    });
  return { root, write, app, group };
}

test('standalone and one-level groups share discovery with stable identities and ordering', (t) => {
  const f = fixture(t);
  f.app('lua');
  f.group('awesome', { order: ['web', 'overview'], versioning: { mode: 'shared' } });
  f.app('awesome/overview');
  f.app('awesome/web');
  f.app('awesome/data');
  f.group('other');
  f.app('other/overview');
  f.app('other/web');
  f.write('apps/awesome/notes/README.md', 'not an application');
  const registry = discoverApps(f.root);
  assert.equal(registry.apps.length, 6);
  assert.deepEqual(registry.groups[0].memberIds, [
    'awesome/web',
    'awesome/overview',
    'awesome/data',
  ]);
  assert.equal(resolveApp('awesome/web', f.root).publicBase, '/docs/awesome');
  assert.notEqual(
    resolveApp('other/web', f.root).directory,
    resolveApp('awesome/web', f.root).directory
  );
  assert.equal(resolveApp('lua', f.root).publicBase, '/docs/lua');
  assert.equal(findRepositoryRoot(path.join(f.root, 'apps/awesome/web/src')), f.root);
  assert.equal(selectApps({ group: 'awesome' }, f.root).length, 3);
  assert.equal(selectApps({ projects: 'lua,awesome/web,lua' }, f.root).length, 2);
  assert.throws(() => selectApps({ group: 'awesome', projects: 'lua' }, f.root));
  for (const id of ['web', 'awesome', '../lua', '/lua', 'awesome/web/deeper', 'lua/../lua']) {
    assert.throws(() => resolveApp(id, f.root));
  }
});

for (const [name, configure] of [
  [
    'missing entry',
    (f) => {
      f.group('g');
      f.app('g/web');
    },
  ],
  [
    'duplicate order',
    (f) => {
      f.group('g', { order: ['overview', 'overview'] });
      f.app('g/overview');
    },
  ],
  [
    'unknown ordered member',
    (f) => {
      f.group('g', { order: ['missing'] });
      f.app('g/overview');
    },
  ],
  [
    'nested group',
    (f) => {
      f.group('g');
      f.group('g/nested');
    },
  ],
  [
    'app/group overlap',
    (f) => {
      f.group('g');
      f.app('g');
    },
  ],
  [
    'incomplete child',
    (f) => {
      f.group('g');
      f.write('apps/g/overview/package.json', { name: 'incomplete' });
    },
  ],
  [
    'duplicate package',
    (f) => {
      f.app('one', 'duplicate');
      f.app('two', 'duplicate');
    },
  ],
  [
    'symlink',
    (f) => {
      f.app('one');
      fs.symlinkSync(path.join(f.root, 'apps/one'), path.join(f.root, 'apps/two'));
    },
  ],
  [
    'unsupported schema',
    (f) => {
      f.group('g', { schemaVersion: 2 });
    },
  ],
  [
    'duplicate membership source',
    (f) => {
      f.group('g', { members: ['overview'] });
    },
  ],
]) {
  test(`rejects ${name}`, (t) => {
    const f = fixture(t);
    configure(f);
    assert.throws(() => discoverApps(f.root));
  });
}

test('actual repository standalone applications resolve without changing package names', () => {
  const registry = discoverApps();
  assert.equal(resolveApp('lua').packageName, 'apps-lua');
  assert.ok(registry.apps.length >= 4);
});
