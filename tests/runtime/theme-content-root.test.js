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

test('本文リンクのホバー下線はborderと重ねず一本だけ表示する', () => {
  const theme = fs.readFileSync(themePath, 'utf8');
  const linkRule = theme.match(
    /:where\(\.article-content, \.sl-markdown-content\) a\s*\{([^}]*)\}/s
  )?.[1];
  const hoverRule = theme.match(
    /:where\(\.article-content, \.sl-markdown-content\) a:hover\s*\{([^}]*)\}/s
  )?.[1];

  assert.ok(linkRule);
  assert.ok(hoverRule);
  assert.doesNotMatch(linkRule, /border-bottom/);
  assert.doesNotMatch(hoverRule, /border-bottom/);
  assert.match(hoverRule, /text-decoration:\s*underline/);
  assert.match(hoverRule, /text-decoration-thickness:\s*1px/);
});

test('本文中の長いURLは狭い画面で折り返す', () => {
  const theme = fs.readFileSync(themePath, 'utf8');
  const linkRule = theme.match(
    /:where\(\.article-content, \.sl-markdown-content\) a\s*\{([^}]*)\}/s
  )?.[1];

  assert.ok(linkRule);
  assert.match(linkRule, /overflow-wrap:\s*anywhere/);
});

test('本文中の長いインラインコードは狭い画面で折り返す', () => {
  const theme = fs.readFileSync(themePath, 'utf8');
  const inlineCodeRule = theme.match(
    /:where\(\.article-content, \.sl-markdown-content\) :not\(pre\) > code\s*\{([^}]*)\}/s
  )?.[1];

  assert.ok(inlineCodeRule);
  assert.match(inlineCodeRule, /overflow-wrap:\s*anywhere/);
});

test('全配信レイアウトとテンプレートが正式な本文ルートを使用する', () => {
  for (const relativePath of layoutPaths) {
    const source = fs.readFileSync(path.join(rootDir, relativePath), 'utf8');
    assert.match(source, /<article class="sl-markdown-content"/, relativePath);
  }
});
