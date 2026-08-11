#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../..');
const docsRoot = path.join(rootDir, 'apps/glfw/src/content/docs/v3-5-1');
const allowMissingJapanese = process.argv.includes('--allow-missing-ja');
const internalLinkPattern = /\/docs\/glfw\/v3-5-1\/(en|ja)\/([^\s)"']*)/g;
const errors = [];
const warnings = [];
let checked = 0;

function filesBelow(root) {
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .flatMap((entry) => {
      const fullPath = path.join(root, entry.name);
      return entry.isDirectory()
        ? filesBelow(fullPath)
        : entry.name.endsWith('.md')
          ? [fullPath]
          : [];
    })
    .sort();
}

function anchorsIn(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  return new Set([...text.matchAll(/<(?:a|span)\s+id="([^"]+)"/g)].map((match) => match[1]));
}

for (const language of ['en', 'ja']) {
  for (const sourcePath of filesBelow(path.join(docsRoot, language))) {
    const source = fs.readFileSync(sourcePath, 'utf8');
    for (const match of source.matchAll(internalLinkPattern)) {
      checked++;
      const [, targetLanguage, rawTarget] = match;
      const [targetRoute, anchor] = rawTarget.split('#');
      if (!targetRoute) continue;
      const normalizedRoute = targetRoute.replace(/\/$/, '');
      const targetPath = path.join(docsRoot, targetLanguage, `${normalizedRoute}.md`);
      if (!fs.existsSync(targetPath)) {
        const message = `${path.relative(rootDir, sourcePath)} -> ${targetLanguage}/${normalizedRoute}`;
        if (allowMissingJapanese && targetLanguage === 'ja') warnings.push(message);
        else errors.push(`リンク先ページがありません: ${message}`);
        continue;
      }
      if (anchor && !anchorsIn(targetPath).has(anchor)) {
        errors.push(
          `リンク先アンカーがありません: ${path.relative(rootDir, sourcePath)} -> ${targetLanguage}/${normalizedRoute}#${anchor}`
        );
      }
    }
  }
}

console.log(
  `GLFW内部リンク検査: ${checked}件、欠落許容${warnings.length}件、エラー${errors.length}件`
);
if (warnings.length) console.log(`未翻訳ページへのリンク: ${warnings.length}件`);
for (const error of errors) console.error(`ERROR: ${error}`);
if (errors.length) process.exitCode = 1;
