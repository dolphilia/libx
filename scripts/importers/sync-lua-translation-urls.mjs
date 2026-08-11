#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../..');
const docsRoot = path.join(rootDir, 'apps/lua/src/content/docs/v5-5-1');
const englishRoot = path.join(docsRoot, 'en');
const japaneseRoot = path.join(docsRoot, 'ja');
const urlPattern = /(?:https?:\/\/[^\s)"']+|\/docs\/lua\/[^\s)"']+)/g;

function markdownFiles(root, base = root) {
  if (!fs.existsSync(root)) return [];
  const files = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...markdownFiles(fullPath, base));
    else if (entry.name.endsWith('.md')) files.push(path.relative(base, fullPath));
  }
  return files.sort();
}

let updated = 0;
for (const relativePath of markdownFiles(japaneseRoot)) {
  const englishPath = path.join(englishRoot, relativePath);
  const japanesePath = path.join(japaneseRoot, relativePath);
  if (!fs.existsSync(englishPath)) throw new Error(`English source is missing: ${relativePath}`);

  const english = fs.readFileSync(englishPath, 'utf8');
  const japanese = fs.readFileSync(japanesePath, 'utf8');
  const englishUrls = [...english.matchAll(urlPattern)].map((match) => match[0]);
  const japaneseUrls = [...japanese.matchAll(urlPattern)].map((match) => match[0]);
  if (englishUrls.length !== japaneseUrls.length) {
    throw new Error(
      `URL count differs for ${relativePath}: English ${englishUrls.length}, Japanese ${japaneseUrls.length}`
    );
  }

  let index = 0;
  const synchronized = japanese.replace(urlPattern, () =>
    englishUrls[index++].replace('/v5-5-1/en/', '/v5-5-1/ja/')
  );
  if (synchronized !== japanese) {
    fs.writeFileSync(japanesePath, synchronized);
    updated++;
  }
}

console.log(`Synchronized URLs in ${updated} Japanese files`);
