import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { analyzeProjectStructure, resolveDocumentFilePath } from '../../scripts/document-utils.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

test('管理CLIはMarkdownを既定としMDXを明示的に選択できる', () => {
  assert.match(resolveDocumentFilePath('fixture', 'en', 'v1', '01-guide', '01-page'), /\.md$/);
  assert.match(
    resolveDocumentFilePath('fixture', 'en', 'v1', '01-guide', '01-page', 'mdx'),
    /\.mdx$/
  );
  assert.throws(
    () => resolveDocumentFilePath('fixture', 'en', 'v1', '01-guide', '01-page', 'html'),
    /未対応の文書形式/
  );
});

test('既存構造の解析はMarkdownとMDXの両方を数える', () => {
  const categories = analyzeProjectStructure('test-verification', 'en', 'v2');
  assert.ok(categories['markdown-contract'].files.some((file) => file.endsWith('.md')));
  assert.ok(categories['markdown-contract'].files.some((file) => file.endsWith('.mdx')));
  assert.equal(categories['markdown-contract'].nextNumber, '05');
});

test('主要な発見処理にMDX専用の拡張子判定を残さない', () => {
  const paths = [
    'scripts/document-utils.js',
    'scripts/add-language.js',
    'packages/content-utils/src/content-utils.ts',
    'packages/landing/src/project-url.ts',
    'packages/landing/src/project-detector.ts',
  ];
  for (const relativePath of paths) {
    const source = fs.readFileSync(path.join(rootDir, relativePath), 'utf8');
    assert.doesNotMatch(source, /endsWith\(['"]\.mdx['"]\)/, relativePath);
  }
});
