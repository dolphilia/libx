import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const themeCssUrl = new URL(
  '../../packages/theme/src/css/starlight-overrides.css',
  import.meta.url
);

test('文書先頭のh1は先行する互換アンカーの有無にかかわらず上余白を持たない', async () => {
  const css = await readFile(themeCssUrl, 'utf8');

  assert.match(
    css,
    /:where\(\.article-content, \.sl-markdown-content\) > h1:first-of-type\s*{[^}]*margin-top:\s*0\s*!important;/s
  );
  assert.match(
    css,
    /:where\(\.article-content, \.sl-markdown-content\) > p:has\(> a\[id\]:only-child:empty\)\s*{[^}]*margin-block:\s*0\s*!important;/s
  );
});
