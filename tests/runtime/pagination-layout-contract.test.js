import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const paginationPath = path.join(rootDir, 'packages/ui/src/components/Pagination.astro');

test('ページネーションはPrevを左列、Nextを右列に固定する', () => {
  const source = fs.readFileSync(paginationPath, 'utf8');
  const styles = source.slice(source.indexOf('<style>'));

  assert.match(styles, /display:\s*grid/);
  assert.match(styles, /grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(styles, /a\[rel='prev'\][\s\S]*?grid-column:\s*1/);
  assert.match(styles, /a\[rel='next'\][\s\S]*?grid-column:\s*2/);
  assert.doesNotMatch(styles, /flex-direction:\s*row-reverse/);
});

test('狭い画面では両リンクを1列に戻す', () => {
  const source = fs.readFileSync(paginationPath, 'utf8');

  assert.match(
    source,
    /@media \(max-width: 40rem\)[\s\S]*?grid-template-columns:\s*minmax\(0, 1fr\)[\s\S]*?a\[rel='prev'\],[\s\S]*?a\[rel='next'\][\s\S]*?grid-column:\s*1/
  );
});
