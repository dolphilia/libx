#!/usr/bin/env node
import { getAwesomeApps } from './app-ownership.mjs';
import fs from 'node:fs';
import path from 'node:path';
import {
  notesDir,
  readJson,
  rootDir,
  sha256,
  snapshotVersion,
  writeJsonAtomic,
} from './common.mjs';

const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const batches = readJson(path.join(notesDir, 'BATCH_STATUS.json'));
function countMarkdown(root) {
  if (!fs.existsSync(root)) return 0;
  return fs
    .readdirSync(root, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md')).length;
}
const status = Object.groupBy(lock.sources, (source) => source.status);
const pageCounts = Object.fromEntries(
  getAwesomeApps(rootDir).apps.map((app) => {
    const versionRoot = path.join(app.directory, 'src/awesome-content', snapshotVersion);
    return [
      app.id,
      {
        en: countMarkdown(path.join(versionRoot, 'en')),
        ja: countMarkdown(path.join(versionRoot, 'ja')),
      },
    ];
  })
);
const report = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  snapshot: lock.snapshot.version,
  lockSha256: sha256(`${JSON.stringify(lock, null, 2)}\n`),
  sources: Object.fromEntries(Object.entries(status).map(([key, values]) => [key, values.length])),
  pages: {
    en: Object.values(pageCounts).reduce((total, count) => total + count.en, 0),
    ja: Object.values(pageCounts).reduce((total, count) => total + count.ja, 0),
    byProject: pageCounts,
  },
  fetchedBatches: (batches.fetchBatches ?? batches.batches ?? []).length,
  fetchedSources: (batches.fetchBatches ?? batches.batches ?? []).reduce(
    (total, batch) => total + batch.sourceIds.length,
    0
  ),
  translationBatches: (batches.batches ?? []).length,
  translationValidatedPages: (batches.batches ?? []).reduce(
    (total, batch) =>
      total +
      Object.values(batch.pages ?? {}).filter(
        (page) => page['translation-validated'] === 'completed'
      ).length,
    0
  ),
};
const reportPath = path.join(notesDir, 'PROGRESS_REPORT.json');
if (!process.argv.includes('--stdout')) writeJsonAtomic(reportPath, report);
console.log(JSON.stringify(report, null, 2));
