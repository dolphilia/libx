import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { safePath, hashFile, sha256 } from '../../scripts/project-expansion/ledger.mjs';
import { loadPresentationMaintenance } from '../../scripts/project-expansion/presentation-maintenance.mjs';

function fixture(t) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-presentation-proof-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (file, value) => {
    fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
    fs.writeFileSync(path.join(root, file), typeof value === 'string' ? value : JSON.stringify(value));
    return { path: file, sha256: hashFile(path.join(root, file)) };
  };
  const file = 'apps/sample/src/content/docs/v1/en/01-guide/page.md';
  const frontmatter = '---\ntitle: Page\n---\n';
  const untouched = '# Page\n\nOriginal technical content.\n\n';
  const originalNote = '## Source and notices\n\nUnder the user-approved operating policy, the license is applied.\n';
  const context = [{ kind: 'source', html: '<h2>Source and notices</h2><p>Under Libx’s operating policy, the license is applied.</p>' }];
  const original = frontmatter + untouched + originalNote;
  const current = `---\ntitle: Page\ndocumentContext: ${JSON.stringify(context)}\n---\n${untouched}`;
  write(file, current);
  const record = { path: file, before: sha256(original), after: sha256(current), bodyBefore: sha256(untouched + originalNote), bodyAfter: sha256(untouched), notes: [{ start: untouched.length, end: untouched.length + originalNote.length, original: originalNote, normalized: originalNote.replace('Under the user-approved operating policy', 'Under Libx’s operating policy') }] };
  const migration = { files: 1, records: [record] };
  const manifest = { schemaVersion: 1, kind: 'libx-source-notes-footer-migration', migration: write('proof/migration.json', migration), validation: write('proof/validation.json', { issues: [], checkedPages: 1, reconstructedBodies: 1 }), build: write('proof/build.log', '[build] Complete!'), runtimeTests: write('proof/tests.log', 'fail 0'), files: [{ path: file, before: record.before, after: record.after, kind: 'document-context', frontmatterBefore: frontmatter, contextSha256: sha256(JSON.stringify(context)) }] };
  const reference = write('proof/bindings.json', manifest);
  const resolve = () => {
    const errors = [];
    const lookup = loadPresentationMaintenance(root, [reference], { safePath, hashFile, sha256 }, errors);
    return { errors, lookup };
  };
  return { root, file, write, reference, manifest, record, original, current, resolve };
}

test('移動前の全文レビューは元ファイルを復元したハッシュで対応付ける', t => {
  const f = fixture(t);
  const { errors, lookup } = f.resolve();
  assert.deepEqual(errors, []);
  assert.equal(lookup({ path: f.file, sha256: f.record.before }), f.original);
  assert.equal(lookup({ path: f.file, sha256: sha256('unreviewed') }), undefined);
});

test('本文・移動注記・タイトルの変更を表示移動として受け入れない', t => {
  const f = fixture(t);
  for (const modified of [
    f.current.replace('Original technical content.', 'Changed technical content.'),
    f.current.replace('the license is applied', 'new permission was granted'),
    f.current.replace('title: Page', 'title: Different'),
  ]) {
    f.write(f.file, modified);
    assert.ok(f.resolve().errors.length > 0);
    // Even refreshing the after hash alone does not waive reconstruction or note checks.
    f.manifest.files[0].after = sha256(modified);
    f.reference.sha256 = f.write(f.reference.path, f.manifest).sha256;
    assert.ok(f.resolve().errors.length > 0);
  }
});

test('固定した移行証拠の改変を拒否する', t => {
  const f = fixture(t);
  f.write(f.manifest.migration.path, '{}');
  assert.ok(f.resolve().errors.some(error => error.includes('ハッシュ失効')));
});
