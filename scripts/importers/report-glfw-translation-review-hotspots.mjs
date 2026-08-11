#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../..');
const englishRoot = path.join(rootDir, 'apps/glfw/src/content/docs/v3-5-1/en');
const outputPath = path.join(
  rootDir,
  '.tmp/document-import/glfw/05-reports/translation-review-hotspots.json'
);
const riskPattern =
  /\b(must(?:n't| not)?|should(?:n't| not)?|may|cannot|can't|not|unless|until|before|after|only|if)\b/gi;

function listMarkdownFiles(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory()
        ? listMarkdownFiles(fullPath)
        : entry.name.endsWith('.md')
          ? [fullPath]
          : [];
    })
    .sort();
}

const hotspots = [];
for (const filePath of listMarkdownFiles(englishRoot)) {
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  let inFence = false;
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (line.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const terms = [...line.matchAll(riskPattern)].map((match) => match[0].toLowerCase());
    if (terms.length === 0) continue;
    hotspots.push({
      file: path.relative(englishRoot, filePath),
      line: index + 1,
      terms: [...new Set(terms)],
      priority: terms.some((term) =>
        [
          'must not',
          'should not',
          "shouldn't",
          'cannot',
          "can't",
          'unless',
          'until',
          'before',
          'after',
        ].includes(term)
      )
        ? 'high'
        : 'normal',
      source: line.trim(),
    });
  }
}

const counts = {};
for (const hotspot of hotspots) {
  for (const term of hotspot.terms) counts[term] = (counts[term] ?? 0) + 1;
}
const priorityCounts = hotspots.reduce((grouped, hotspot) => {
  (grouped[hotspot.priority] ??= []).push(hotspot);
  return grouped;
}, {});

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(
  outputPath,
  `${JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      total: hotspots.length,
      priority: Object.fromEntries(
        Object.entries(priorityCounts).map(([key, values]) => [key, values.length])
      ),
      counts,
      hotspots,
    },
    null,
    2
  )}\n`
);
console.log(`翻訳重点レビュー候補: ${hotspots.length}件`);
console.log(`Wrote ${path.relative(rootDir, outputPath)}`);
