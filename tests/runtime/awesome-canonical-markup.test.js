import test from 'node:test';
import assert from 'node:assert/strict';
import { inspectCanonicalMarkup } from '../../scripts/importers/awesome/canonical-markup-validation.mjs';

test('licenseSourceをYAMLとして比較し、本文の偽装表記は認めない', () => {
  for (const value of ['source-id', '"source-id"', "'source-id'"])
    assert.equal(inspectCanonicalMarkup(`---\nlicenseSource: ${value}\n---\n# Test`, 'source-id').sourceMatches, true);
  assert.equal(inspectCanonicalMarkup('---\nlicenseSource: other\n---\nlicenseSource: "source-id"', 'source-id').sourceMatches, false);
});

test('教材コード内のHTMLコメントは保持し、実際の未処理コメントは検出する', () => {
  const example = '```html\n<!-- code example -->\n<a href="#x">x</a>\n```\n`<!-- inline example -->`';
  assert.deepEqual(inspectCanonicalMarkup(example, 'id').comments, []);
  assert.equal(inspectCanonicalMarkup(example + '\n\n<!-- operational notice -->', 'id').comments.length, 1);
});
