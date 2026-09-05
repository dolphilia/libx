#!/usr/bin/env node
import { createAwesomeResolver, readAwesomeRouteManifest } from './app-ownership.mjs';
import path from 'node:path';
import fs from 'node:fs';
import {
  notesDir,
  readJson,
  rootDir,
  sha256,
  snapshotVersion,
  writeJsonAtomic,
} from './common.mjs';

const statusPath = path.join(notesDir, 'BATCH_STATUS.json');
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const existing = readJson(statusPath);
const routes = readAwesomeRouteManifest({ root: rootDir, localized: false })
  .entries.filter((entry) => entry.version === snapshotVersion)
  .sort((left, right) => left.sourceId.localeCompare(right.sourceId));
const lockBySource = new Map(lock.sources.map((source) => [source.sourceId, source]));
const fetchBatches = existing.fetchBatches ?? existing.batches ?? [];
const resolver = createAwesomeResolver(rootDir);
const translatedPath = (entry) =>
  resolver.contentPath({ ...entry, moduleKey: entry.moduleKey.replace('/en/', '/ja/') });
const translated = new Set(
  routes.filter((entry) => fs.existsSync(translatedPath(entry))).map((entry) => entry.sourceId)
);
const batches = [];
for (let index = 0; index < routes.length; index += 10) {
  const sources = routes.slice(index, index + 10);
  batches.push({
    batchNumber: batches.length + 1,
    sourceIds: sources.map((source) => source.sourceId),
    discovered: 'completed',
    locked: 'completed',
    normalized: 'completed',
    'canonical-validated': 'completed',
    translated: 'pending',
    'translation-validated': 'pending',
    'human-reviewed': 'pending',
    inputHash: sha256(
      JSON.stringify(
        sources.map((source) => [
          source.sourceId,
          lockBySource.get(source.sourceId)?.documentSha256 ?? source.licenseSource,
        ])
      )
    ),
    outputHash: sha256(JSON.stringify(sources.map((source) => [source.sourceId, source.slug]))),
    checks: ['awesome:validate-canonical', 'awesome:publish --check'],
    pages: Object.fromEntries(
      sources.map((source) => [
        source.sourceId,
        {
          translated: translated.has(source.sourceId) ? 'completed' : 'pending',
          'translation-validated': translated.has(source.sourceId) ? 'completed' : 'pending',
          'human-reviewed': 'pending',
        },
      ])
    ),
  });
}
writeJsonAtomic(statusPath, {
  $schema: './schemas/batch-status.schema.json',
  schemaVersion: 1,
  snapshotVersion: lock.snapshot.version,
  fetchBatches,
  batches,
});
console.log(
  `Initialized Awesome pipeline status (${batches.length} batches, ${routes.length} pages)`
);
