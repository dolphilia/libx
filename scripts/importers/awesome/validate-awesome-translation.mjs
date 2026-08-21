#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { rootDir } from './common.mjs';

const version = 'v2026-08-20';
const requireComplete = process.argv.includes('--require-complete');
const errors = [];

function files(root) {
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => path.relative(root, path.join(entry.parentPath, entry.name)))
    .sort();
}
function extract(content) {
  const parsed = matter(content);
  return {
    licenseSource: parsed.data.licenseSource ?? null,
    headingLevels: [...parsed.content.matchAll(/^(#{1,6})\s+.+$/gm)].map((match) => match[1].length),
    urls: [...parsed.content.matchAll(/https?:\/\/[^\s)>]+/g)].map((match) =>
      match[0].replace(/[.,;:]$/, '')
    ),
    listStructure: [...parsed.content.matchAll(/^([ \t]*)([-*+]|\d+\.)\s+(.+)$/gm)].map(
      (match) => ({
        indent: match[1].length,
        marker: /^\d+\.$/.test(match[2]) ? 'ordered' : 'unordered',
        urls: [...match[3].matchAll(/https?:\/\/[^\s)>]+/g)].map((url) => url[0].replace(/[.,;:]$/, '')),
      })
    ),
    codeTokens: [...parsed.content.matchAll(/`([^`\n]+)`/g)].map((match) => match[1]),
  };
}
let englishPageCount = 0;
let japanesePageCount = 0;
{
  const contentRoot = path.join(rootDir, 'apps/awesome/src/awesome-content', version);
  const englishRoot = path.join(contentRoot, 'en');
  const japaneseRoot = path.join(contentRoot, 'ja');
  const englishFiles = new Set(files(englishRoot));
  const japaneseFiles = files(japaneseRoot);
  englishPageCount += englishFiles.size;
  japanesePageCount += japaneseFiles.length;
  for (const file of japaneseFiles) {
    if (!englishFiles.has(file)) {
      errors.push(`awesome: 日本語ページに対応する英語ページがありません: ${file}`);
      continue;
    }
    const en = extract(fs.readFileSync(path.join(englishRoot, file), 'utf8'));
    const ja = extract(fs.readFileSync(path.join(japaneseRoot, file), 'utf8'));
    if (en.licenseSource !== ja.licenseSource)
      errors.push(`awesome: licenseSource が不一致です: ${file}`);
    if (JSON.stringify(en.headingLevels) !== JSON.stringify(ja.headingLevels))
      errors.push(`awesome: 見出し階層または順序が不一致です: ${file}`);
    if (JSON.stringify(en.listStructure) !== JSON.stringify(ja.listStructure))
      errors.push(`awesome: リスト項目構造または順序が不一致です: ${file}`);
    if (JSON.stringify(en.urls) !== JSON.stringify(ja.urls))
      errors.push(`awesome: URL順序または集合が不一致です: ${file}`);
    if (JSON.stringify(en.codeTokens) !== JSON.stringify(ja.codeTokens))
      errors.push(`awesome: インラインコードが不一致です: ${file}`);
  }
  if (requireComplete) {
    for (const file of [...englishFiles].sort()) {
      if (!japaneseFiles.includes(file))
        errors.push(`awesome: 日本語ページが未翻訳です: ${file}`);
    }
  }
}
if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `Awesome translation validation: OK (${japanesePageCount}/${englishPageCount} translated pages${
      requireComplete ? ', complete' : ''
    })`
  );
}
