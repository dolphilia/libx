#!/usr/bin/env node
import { createAwesomeContentAccess } from './app-ownership.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { notesDir, rootDir, sha256, snapshotVersion, writeJsonAtomic } from './common.mjs';

const version = snapshotVersion;
const contentAccess = createAwesomeContentAccess(version, rootDir);
const logicalFiles = contentAccess.files('en');
const files = logicalFiles.map((file) => contentAccess.pathFor('en', file));
const categoryByFile = new Map(
  files.map((file, index) => [file, logicalFiles[index].split('/')[0]])
);
const frequencies = new Map();
const categories = new Set();
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  categories.add(categoryByFile.get(file));
  for (const match of content.matchAll(/`([^`\n]+)`/g)) {
    const term = match[1].trim();
    if (!term || term.length > 80) continue;
    frequencies.set(term, (frequencies.get(term) ?? 0) + 1);
  }
}
const protectedTerms = [...frequencies]
  .filter(([term]) => /[A-Z]|[0-9]|[-_./]/.test(term))
  .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
  .slice(0, 200)
  .map(([term, occurrences]) => ({ term, occurrences, treatment: 'preserve' }));
const output = {
  schemaVersion: 1,
  snapshotVersion: version,
  generatedAt: new Date().toISOString(),
  source: { pages: files.length, sourceSetSha256: sha256(files.sort().join('\n')) },
  categories: [...categories].sort(),
  protectedTerms,
  fixedTranslations: [
    { source: 'Overview', target: '概要' },
    { source: 'Awesome Lists', target: 'Awesomeリスト' },
  ],
  rules:
    '本ファイルは翻訳語を自動決定しない。protectedTermsはURL、コード、製品名、リポジトリ名、ライセンス名として原文を保持する。',
};
if (process.argv.includes('--stdout')) console.log(JSON.stringify(output, null, 2));
else writeJsonAtomic(path.join(notesDir, 'TRANSLATION_TERMS.json'), output);
if (!process.argv.includes('--stdout'))
  console.log(
    `Generated Awesome translation terms (${files.length} pages, ${protectedTerms.length} protected terms)`
  );
