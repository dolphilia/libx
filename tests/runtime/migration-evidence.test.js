import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {
  captureMigrationEvidence,
  compareMigrationEvidence,
} from '../../scripts/migrations/awesome-migration-evidence.js';

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-migration-evidence-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (name, value) => {
    const file = path.join(root, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, typeof value === 'string' ? value : JSON.stringify(value));
  };
  write('apps/example/package.json', { name: 'apps-example' });
  write('apps/example/astro.config.mjs', 'export default {};');
  write('apps/example/src/config/project.config.jsonc', {
    paths: { projectSlug: 'example' },
    versioning: { versions: [{ id: 'v1', name: 'One' }] },
    licensing: { sources: [{ id: 'upstream', sourceUrl: 'https://example.org/source' }] },
  });
  write(
    'apps/example/src/content/docs/v1/en/guide/start.md',
    '---\ntitle: Start\ndocumentId: start\nlicenseSource: upstream\n---\n## Start\n'
  );
  write(
    'dist/docs/example/v1/en/guide/start/index.html',
    '<!doctype html><link rel="canonical" href="https://libx.dev/docs/example/v1/en/guide/start/"><nav id="old-nav"></nav><article class="sl-markdown-content"><h2 id="start">Start</h2></article>'
  );
  write('dist/docs/example/search/v1/en.json', {
    schemaVersion: 1,
    version: 'v1',
    lang: 'en',
    entries: [{ title: 'Start', url: '/docs/example/v1/en/guide/start/' }],
  });
  return { root, write };
}

test('migration evidence permits physical movement and reports shell changes while protecting document invariants', (t) => {
  const f = fixture(t);
  const before = captureMigrationEvidence({ root: f.root, groupId: 'example' });
  const after = structuredClone(before);
  after.documents[0].appId = 'example/web';
  after.documents[0].sourcePath = 'apps/example/web/src/content/docs/v1/en/guide/start.md';
  after.documents[0].allAnchors = ['new-nav', 'start'];
  after.publicUrls.push('/docs/example/navigation/v1/en/');
  const comparison = compareMigrationEvidence(before, after);
  assert.equal(comparison.passed, true);
  assert.equal(comparison.shellAnchorChanges.length, 1);
  for (const field of [
    'sourceSha256',
    'bodySha256',
    'sourceRecordSha256',
    'licenseSource',
    'canonical',
    'contentAnchors',
  ]) {
    const changed = structuredClone(after);
    changed.documents[0][field] = 'changed';
    assert.equal(compareMigrationEvidence(before, changed).passed, false, field);
  }
  const missing = structuredClone(after);
  missing.documents = [];
  assert.equal(compareMigrationEvidence(before, missing).passed, false);
});

test('capture fails for missing search membership, output or source registry', (t) => {
  const f = fixture(t);
  f.write('dist/docs/example/search/v1/en.json', {
    schemaVersion: 1,
    version: 'v1',
    lang: 'en',
    entries: [],
  });
  assert.throws(
    () => captureMigrationEvidence({ root: f.root, groupId: 'example' }),
    /検索の集合が一致/
  );
  fs.rmSync(path.join(f.root, 'dist/docs/example/v1/en/guide/start/index.html'));
  assert.throws(() => captureMigrationEvidence({ root: f.root, groupId: 'example' }), /ENOENT/);
});

test('unreferenced template indexes are recorded separately from the document search contract', (t) => {
  const f = fixture(t);
  f.write('dist/docs/example/search/v0/en.json', {
    schemaVersion: 1,
    version: 'v0',
    lang: 'en',
    entries: [{ title: 'Old template', url: '/docs/template/v0/en/start/' }],
  });
  const evidence = captureMigrationEvidence({ root: f.root, groupId: 'example' });
  assert.equal(evidence.searches.length, 1);
  assert.equal(evidence.legacySearches.length, 1);
  assert.equal(evidence.legacySearches[0].path, 'search/v0/en.json');
  const configPath = path.join(f.root, 'apps/example/src/config/project.config.jsonc');
  const config = JSON.parse(fs.readFileSync(configPath));
  config.licensing.sources = [];
  fs.writeFileSync(configPath, JSON.stringify(config));
  assert.throws(
    () => captureMigrationEvidence({ root: f.root, groupId: 'example' }),
    /出典レジストリがありません/
  );
});
