import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { hashFile } from '../../scripts/importers/safe-import-output.js';
import { importNinja } from '../../scripts/importers/import-ninja-1.13.2.mjs';
import { assembleNinjaTranslation } from '../../scripts/importers/assemble-ninja-translation.mjs';

const app = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(app, '../..');
const base = path.join(root, 'docs/notes/document-import/ninja/v1-13-2');
// The existing CI setup pins AsciiDoc 10.2.1 for uthash. Both importers require it.
const generated = importNinja({
  root,
  asciidoc: process.env.NINJA_ASCIIDOC ?? process.env.UTHASH_ASCIIDOC,
  check: true,
});
assert.ok(generated.matches, 'Ninja canonical differs from fixed source');
const translated = assembleNinjaTranslation({ repository: root, check: true });
assert.ok(translated.matches, 'Ninja translation differs from reviewed units');
const review = JSON.parse(fs.readFileSync(path.join(base, 'REVIEW_MANIFEST.json'), 'utf8'));
assert.equal(review.project, 'ninja');
assert.equal(review.version, 'v1-13-2');
assert.equal(review.completedPages, 2);
assert.equal(review.unreviewedPages, 0);
assert.deepEqual(
  review.pages.map((p) => p.id),
  ['01-docs/01-manual.md', '02-license/01-license.md']
);
for (const page of review.pages) {
  assert.equal(page.status, 'passed');
  assert.equal(page.method, 'ai-content-review');
  assert.equal(page.separateReviewPass, true);
  assert.deepEqual(page.unresolvedContentFindings, []);
  for (const role of ['source', 'canonical', 'translation']) {
    const proof = page[role];
    const expectedDirectory = {
      source: 'source',
      canonical: 'generated/canonical',
      translation: 'translation/generated',
    }[role];
    const file = path.resolve(root, proof.path);
    assert.ok(file.startsWith(path.join(base, expectedDirectory) + path.sep));
    assert.equal(hashFile(file), proof.sha256, `${page.id} ${role}: reviewed bytes changed`);
    const lines = fs.readFileSync(file, 'utf8').split('\n').length - 1;
    assert.deepEqual(proof.coverage, [[1, lines]], `${page.id} ${role}: incomplete coverage`);
  }
  for (const [lang, role] of [
    ['en', 'canonical'],
    ['ja', 'translation'],
  ]) {
    assert.equal(
      hashFile(path.join(app, 'src/content/docs/v1-13-2', lang, page.id)),
      page[role].sha256,
      `${lang} ${page.id}: app differs from reviewed bytes`
    );
  }
}
console.log(
  JSON.stringify({
    status: 'passed',
    pages: 2,
    pairedArticles: 4,
    scope:
      'Fixed source regeneration, Japanese unit assembly, full review coverage/hash and app byte equality. Rendering, browser behavior and publication are separate.',
  })
);
