#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../..');
const docsRoot = path.join(rootDir, 'apps/glfw/src/content/docs/v3-5-1');
const englishRoot = path.join(docsRoot, 'en');
const japaneseRoot = path.join(docsRoot, 'ja');
const allowMissing = process.argv.includes('--allow-missing');

function filesBelow(root, base = root) {
  if (!fs.existsSync(root)) return [];
  const found = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) found.push(...filesBelow(fullPath, base));
    else if (entry.name.endsWith('.md')) found.push(path.relative(base, fullPath));
  }
  return found.sort();
}

function matches(text, pattern, transform = (value) => value) {
  return [...text.matchAll(pattern)].map((match) => transform(match[1] ?? match[0])).sort();
}

function codeBlocks(text) {
  return matches(text, /```[^\n]*\n([\s\S]*?)```/g, (value) => value.trimEnd());
}

function inlineCode(text) {
  return matches(text.replace(/```[^\n]*\n[\s\S]*?```/g, ''), /`([^`\n]+)`/g);
}

function anchors(text) {
  return matches(text, /<(?:a|span)\s+id="([^"]+)"/g);
}

function urls(text) {
  return matches(text, /(?:https?:\/\/[^\s)"']+|\/docs\/glfw\/[^\s)"']+)/g, (value) =>
    value.replace('/v3-5-1/ja/', '/v3-5-1/en/')
  );
}

function markdownDestinations(text) {
  return matches(text, /\]\(([^)]+)\)/g, (value) => value.replace('/v3-5-1/ja/', '/v3-5-1/en/'));
}

function identifiers(text) {
  return matches(
    text,
    /\b(?:GLFW[A-Za-z0-9_]+|glfw[A-Za-z0-9_]+|Vk[A-Za-z0-9_]+|VK_[A-Z0-9_]+)\b/g
  );
}

function compare(label, english, japanese, relativePath, errors) {
  if (
    english.length !== japanese.length ||
    english.some((value, index) => value !== japanese[index])
  ) {
    errors.push(
      `${relativePath}: ${label}が英語定本と一致しません (${english.length}/${japanese.length})`
    );
  }
}

const englishFiles = filesBelow(englishRoot);
const japaneseFiles = filesBelow(japaneseRoot);
const missing = englishFiles.filter((file) => !japaneseFiles.includes(file));
const extra = japaneseFiles.filter((file) => !englishFiles.includes(file));
const errors = [];

if (extra.length) errors.push(`日本語だけに存在するファイル: ${extra.join(', ')}`);
if (missing.length && !allowMissing) errors.push(`未翻訳ファイル: ${missing.join(', ')}`);

for (const relativePath of japaneseFiles.filter((file) => englishFiles.includes(file))) {
  const english = fs.readFileSync(path.join(englishRoot, relativePath), 'utf8');
  const japanese = fs.readFileSync(path.join(japaneseRoot, relativePath), 'utf8');
  if (!japanese.includes('licenseSource: "glfw-3.5.1"')) {
    errors.push(`${relativePath}: licenseSourceがありません`);
  }
  if (/ZXQ|¤/.test(japanese)) errors.push(`${relativePath}: 翻訳保護トークンが残っています`);
  compare('コードブロック', codeBlocks(english), codeBlocks(japanese), relativePath, errors);
  compare('インラインコード', inlineCode(english), inlineCode(japanese), relativePath, errors);
  compare('HTMLアンカー', anchors(english), anchors(japanese), relativePath, errors);
  compare('URL', urls(english), urls(japanese), relativePath, errors);
  compare(
    'Markdownリンク先',
    markdownDestinations(english),
    markdownDestinations(japanese),
    relativePath,
    errors
  );
  compare('API識別子', identifiers(english), identifiers(japanese), relativePath, errors);
}

console.log(
  `翻訳構造検査: 英語${englishFiles.length}件、日本語${japaneseFiles.length}件、未翻訳${missing.length}件`
);
if (missing.length) console.log(`未翻訳: ${missing.join(', ')}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exitCode = 1;
} else {
  console.log('既存の日本語ページに構造上の問題はありません');
}
