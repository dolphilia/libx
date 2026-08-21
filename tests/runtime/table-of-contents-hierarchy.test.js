import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const distributedRoots = [
  'apps/glfw',
  'apps/lua',
  'apps/sample-docs',
  'apps/test-verification',
  'templates/docs-site',
];

test('全ドキュメントサイトが共通の目次ツリー生成を使用する', () => {
  for (const root of distributedRoots) {
    const routePath = path.join(rootDir, root, 'src/pages/[version]/[lang]/[...slug].astro');
    const source = fs.readFileSync(routePath, 'utf8');
    assert.match(source, /buildTableOfContents\(headings,/);
    assert.doesNotMatch(source, /children:\s*\[\]/);
  }
});

test('目次はタイトルから続く一本の基準線と論理方向の字下げで見出し階層を表す', () => {
  const listPath = path.join(
    rootDir,
    'packages/ui/src/components/TableOfContents/TableOfContentsList.astro'
  );
  const tocPath = path.join(
    rootDir,
    'packages/ui/src/components/TableOfContents/TableOfContents.astro'
  );
  const listSource = fs.readFileSync(listPath, 'utf8');
  const tocSource = fs.readFileSync(tocPath, 'utf8');

  assert.match(listSource, /data-heading-level=\{heading\.depth\}/);
  assert.match(listSource, /data-heading-level='2'/);
  assert.match(listSource, /data-heading-level='3'/);
  assert.match(
    listSource,
    /data-heading-level='2'[\s\S]*padding-inline-start: 0;[\s\S]*data-heading-level='3'[\s\S]*padding-inline-start: 1rem;/
  );
  assert.match(listSource, /\.starlight-toc__item > \.starlight-toc__list[\s\S]*border: 0;/);
  assert.doesNotMatch(listSource, /margin-left:|padding-left:|border-left:/);

  assert.match(
    tocSource,
    /starlight-toc:not\(\.starlight-toc--mobile\) nav[\s\S]*border-inline-start:[\s\S]*padding-inline-start: 0\.75rem;/
  );
  assert.doesNotMatch(tocSource, /\.starlight-toc-list\s*\{[^}]*border-inline-start:/);
  assert.doesNotMatch(tocSource, /\.starlight-toc-list\s*\{[^}]*padding-inline-start:/);
  assert.doesNotMatch(tocSource, /margin-left:|padding-left:|border-left:/);
});

test('目次のホバーと現在位置は控えめなナビゲーション表現を使用する', () => {
  const listPath = path.join(
    rootDir,
    'packages/ui/src/components/TableOfContents/TableOfContentsList.astro'
  );
  const source = fs.readFileSync(listPath, 'utf8');

  assert.match(source, /\.starlight-toc__link:hover[\s\S]*var\(--sl-color-gray-7/);
  assert.match(source, /aria-current='true'[\s\S]*background-color: transparent;/);
});
