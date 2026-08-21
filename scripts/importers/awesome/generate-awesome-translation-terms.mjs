#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { notesDir, rootDir, sha256, writeJsonAtomic } from './common.mjs';

const version = 'v2026-08-20';
const root = path.join(rootDir, 'apps/awesome/src/awesome-content', version, 'en');
const files = fs.readdirSync(root, { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
  .map((entry) => path.join(entry.parentPath ?? entry.path, entry.name));
const frequencies = new Map();
const categories = new Set();
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  categories.add(path.relative(root, file).split(path.sep)[0]);
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
  rules: '本ファイルは翻訳語を自動決定しない。protectedTermsはURL、コード、製品名、リポジトリ名、ライセンス名として原文を保持する。',
};
writeJsonAtomic(path.join(notesDir, 'TRANSLATION_TERMS.json'), output);
console.log(`Generated Awesome translation terms (${files.length} pages, ${protectedTerms.length} protected terms)`);
