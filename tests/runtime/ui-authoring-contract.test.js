import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { parseContentDocument } from '../../scripts/content-validation.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const fixtureDir = path.join(
  rootDir,
  'apps/test-verification/src/content/docs/v2/en/03-markdown-contract'
);

function read(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), 'utf8');
}

test('MarkdownとMDXの基礎要素を同じ構造として解析する', () => {
  const markdown = parseContentDocument(
    fs.readFileSync(path.join(fixtureDir, '01-markdown-parity.md'), 'utf8'),
    '.md'
  );
  const mdx = parseContentDocument(
    fs.readFileSync(path.join(fixtureDir, '02-mdx-parity.mdx'), 'utf8'),
    '.mdx'
  );

  for (const key of ['headings', 'code', 'inlineCode', 'links', 'images', 'anchors']) {
    assert.deepEqual(mdx[key], markdown[key], key);
  }
});

test('執筆ガイドが存在しないUI APIを例示しない', () => {
  const documents = [
    'docs/guides/DOCUMENT_ADDITION_GUIDE.md',
    'apps/sample-docs/src/content/docs/v2/en/04-reference/02-mdx-authoring.mdx',
    'apps/sample-docs/src/content/docs/v2/ja/04-reference/02-mdx-authoring.mdx',
    'apps/sample-docs/src/content/docs/v2/en/02-components/01-overview.mdx',
    'apps/sample-docs/src/content/docs/v2/ja/02-components/01-overview.mdx',
  ].map(read);
  const combined = documents.join('\n');

  assert.doesNotMatch(combined, /\bCodeWindow\b/);
  assert.doesNotMatch(combined, /import \{ Alert, Tabs, Tab \}/);
  assert.doesNotMatch(combined, /<Alert\s+type=/);
  assert.doesNotMatch(combined, /<Card[^>]+\stype=/);
  assert.doesNotMatch(combined, /\*\*(?:Breadcrumbs|Grid|TwoColumn)\*\*/);
});

test('文書化した主要UI APIを実ビルド対象のMDX fixtureで使用する', () => {
  const fixture = fs.readFileSync(path.join(fixtureDir, '03-ui-components.mdx'), 'utf8');
  const exportsSource = read('packages/ui/src/components/index.ts');

  for (const component of ['Alert', 'Card', 'CardGrid', 'TabItem', 'Tabs']) {
    assert.match(fixture, new RegExp(`\\b${component}\\b`));
    assert.match(exportsSource, new RegExp(`\\b${component}\\b`));
  }
  assert.match(fixture, /<Alert variant="info"/);
  assert.match(fixture, /<TabItem label=/);
  assert.match(fixture, /<Card[^>]+variant="link"/);
});
