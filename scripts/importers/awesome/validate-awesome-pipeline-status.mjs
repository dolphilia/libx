#!/usr/bin/env node
import { createAwesomeResolver, readAwesomeRouteManifest } from './app-ownership.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { notesDir, readJson, rootDir, snapshotVersion } from './common.mjs';

const version = snapshotVersion;
const status = readJson(path.join(notesDir, 'BATCH_STATUS.json'));
const routes = readAwesomeRouteManifest({ root: rootDir, localized: false }).entries.filter(
  (entry) => entry.version === version
);
const expected = new Set(routes.map((entry) => entry.sourceId));
const errors = [];
const seen = new Set();
const resolver = createAwesomeResolver(rootDir);
const translatedPath = (entry) =>
  resolver.contentPath({ ...entry, moduleKey: entry.moduleKey.replace('/en/', '/ja/') });
const jaFiles = resolver.apps.flatMap((app) => {
  const jaRoot = path.join(app.directory, 'src/awesome-content', version, 'ja');
  return fs.existsSync(jaRoot)
    ? fs
        .readdirSync(jaRoot, { recursive: true, withFileTypes: true })
        .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
        .map((entry) => path.join(entry.parentPath ?? entry.path, entry.name))
    : [];
});
for (const batch of status.batches ?? []) {
  if (batch.sourceIds.length === 0 || batch.sourceIds.length > 10)
    errors.push(`翻訳バッチのサイズが不正です: ${batch.batchNumber}`);
  for (const sourceId of batch.sourceIds) {
    if (!expected.has(sourceId) || seen.has(sourceId))
      errors.push(`sourceIdが不正または重複です: ${sourceId}`);
    seen.add(sourceId);
    const page = batch.pages?.[sourceId];
    if (!page) errors.push(`ページ状態がありません: ${sourceId}`);
    if (page?.['human-reviewed'] === 'completed' && page['translation-validated'] !== 'completed')
      errors.push(`人手レビュー状態が不正です: ${sourceId}`);
  }
  if (
    batch['translation-validated'] === 'completed' &&
    Object.values(batch.pages).some((page) => page['translation-validated'] !== 'completed')
  )
    errors.push(`バッチ翻訳検査状態がページと一致しません: ${batch.batchNumber}`);
}
for (const sourceId of expected)
  if (!seen.has(sourceId)) errors.push(`翻訳バッチにありません: ${sourceId}`);
for (const route of routes) {
  const file = translatedPath(route);
  if (!fs.existsSync(file)) continue;
  const sourceId = route.sourceId;
  const page = status.batches.flatMap((batch) =>
    batch.pages?.[sourceId] ? [batch.pages[sourceId]] : []
  )[0];
  if (!page || page['translation-validated'] !== 'completed')
    errors.push(`日本語本文と翻訳状態が一致しません: ${sourceId}`);
}
if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}
console.log(
  `Awesome pipeline status: OK (${status.batches.length} batches, ${jaFiles.length}/${expected.size} translated pages)`
);
