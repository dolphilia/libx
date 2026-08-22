#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { notesDir, readJson, writeJsonAtomic } from './common.mjs';

const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const discovery = readJson(path.join(notesDir, 'DISCOVERY_STATE.json'));
const outputJson = path.join(notesDir, 'CONTENT_MAP.json');
const outputMarkdown = path.join(notesDir, 'CONTENT_MAP.md');
const categoryByRepository = new Map();

for (const record of Object.values(discovery.visited ?? {})) {
  if (!record?.repository || !Array.isArray(record.occurrences) || record.occurrences.length === 0)
    continue;
  categoryByRepository.set(record.repository.toLowerCase(), [
    ...new Set(record.occurrences.map((occurrence) => occurrence.category).filter(Boolean)),
  ]);
}

const entries = lock.sources
  .filter((source) => source.status === 'included')
  .map((source) => ({
    sourceId: source.sourceId,
    repository: source.repository,
    categories:
      source.sourceId === 'sindresorhus-awesome-readme'
        ? ['Awesome Lists']
        : (categoryByRepository.get(source.repository.toLowerCase()) ?? []),
  }))
  .sort((left, right) => left.sourceId.localeCompare(right.sourceId));
const unmapped = entries.filter((entry) => entry.categories.length === 0);
if (unmapped.length > 0)
  throw new Error(
    `起点カテゴリを復元できないincludedソースがあります: ${unmapped.map((x) => x.sourceId).join(', ')}`
  );

const categories = Object.entries(
  entries.reduce((result, entry) => {
    for (const category of entry.categories) result[category] = (result[category] ?? 0) + 1;
    return result;
  }, {})
)
  .map(([name, sourceCount]) => ({ name, sourceCount }))
  .sort(
    (left, right) => right.sourceCount - left.sourceCount || left.name.localeCompare(right.name)
  );
const map = {
  generatedAt: new Date().toISOString(),
  snapshotVersion: lock.snapshotVersion,
  entries,
  categories,
};
const stable = ({ generatedAt, ...value }) => value;

if (process.argv.includes('--check')) {
  if (JSON.stringify(stable(readJson(outputJson))) !== JSON.stringify(stable(map)))
    throw new Error('CONTENT_MAP.jsonがロックファイルと探索状態から再生成した結果に一致しません');
  console.log(
    `Awesome content map check: OK (${entries.length} sources, ${categories.length} categories)`
  );
} else {
  writeJsonAtomic(outputJson, map);
  const lines = [
    '# Awesome content map',
    '',
    '`SOURCES.lock.json`と`DISCOVERY_STATE.json`から生成する、固定済み本文の配置対応表。',
    '',
    '## 上位カテゴリ',
    '',
    '| カテゴリ | included本文数 |',
    '| --- | ---: |',
    ...categories.map((category) => `| ${category.name} | ${category.sourceCount} |`),
    '',
    '## ページ対応',
    '',
    '| sourceId | repository | 上位カテゴリ |',
    '| --- | --- | --- |',
    ...entries.map(
      (entry) => `| ${entry.sourceId} | ${entry.repository} | ${entry.categories.join(', ')} |`
    ),
    '',
  ];
  fs.writeFileSync(outputMarkdown, lines.join('\n'));
  console.log(
    `Generated Awesome content map (${entries.length} sources, ${categories.length} categories)`
  );
}
