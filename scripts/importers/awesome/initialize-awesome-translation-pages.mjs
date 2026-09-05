#!/usr/bin/env node
import { createAwesomeContentAccess } from './app-ownership.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { rootDir, snapshotVersion } from './common.mjs';

const apply = process.argv.includes('--apply');
const refresh = process.argv.includes('--refresh');
const files = process.argv.slice(2).filter((argument) => argument.endsWith('.md'));
const content = createAwesomeContentAccess(snapshotVersion, rootDir);

if (files.length === 0) {
  console.error(
    'usage: initialize-awesome-translation-pages.mjs <category/file.md>... --snapshot=<version> [--apply] [--refresh]'
  );
  process.exit(1);
}

let created = 0;
for (const relativeFile of files) {
  const englishFile = content.pathFor('en', relativeFile);
  const japaneseFile = content.pathFor('ja', relativeFile);
  if (!fs.existsSync(englishFile)) {
    throw new Error(`英語定本がありません: ${relativeFile}`);
  }
  if (fs.existsSync(japaneseFile) && !refresh) {
    throw new Error(`日本語ページがすでに存在します: ${relativeFile}`);
  }
  const action = fs.existsSync(japaneseFile) ? '再初期化' : '作成';
  console.log(`${apply ? action : `${action}予定`}: ${relativeFile}`);
  if (apply) {
    fs.mkdirSync(path.dirname(japaneseFile), { recursive: true });
    fs.writeFileSync(japaneseFile, fs.readFileSync(englishFile));
  }
  created += 1;
}

console.log(`${apply ? '作成済み' : '作成予定'}: ${created}ページ`);
