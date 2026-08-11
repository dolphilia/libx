import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const themePath = path.join(rootDir, 'packages/theme/src/css/starlight-overrides.css');
const layoutPaths = [
  'apps/glfw/src/layouts/DocLayout.astro',
  'apps/lua/src/layouts/DocLayout.astro',
  'apps/sample-docs/src/layouts/DocLayout.astro',
  'apps/test-verification/src/layouts/DocLayout.astro',
  'templates/docs-site/src/layouts/DocLayout.astro',
];

test('共通テーマは正式な本文ルートsl-markdown-contentを対象にする', () => {
  const theme = fs.readFileSync(themePath, 'utf8');
  const legacyOnlySelectors = theme
    .split('\n')
    .filter((line) => /^\s*\.article-content(?:\s|:|\{|\.)/.test(line));

  assert.deepEqual(legacyOnlySelectors, []);
  assert.match(theme, /:where\(\.article-content, \.sl-markdown-content\) p/);
  assert.match(theme, /:where\(\.article-content, \.sl-markdown-content\) table/);
  assert.match(theme, /:where\(\.article-content, \.sl-markdown-content\) blockquote/);
});

test('全配信レイアウトとテンプレートが正式な本文ルートを使用する', () => {
  for (const relativePath of layoutPaths) {
    const source = fs.readFileSync(path.join(rootDir, relativePath), 'utf8');
    assert.match(source, /<article class="sl-markdown-content"/, relativePath);
  }
});
