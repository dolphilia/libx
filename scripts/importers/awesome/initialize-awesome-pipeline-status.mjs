#!/usr/bin/env node
import path from 'node:path';
import fs from 'node:fs';
import { notesDir, readJson, rootDir, sha256, writeJsonAtomic } from './common.mjs';

const statusPath = path.join(notesDir, 'BATCH_STATUS.json');
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const existing = readJson(statusPath);
const included = lock.sources
  .filter((source) => source.status === 'included')
  .sort((a, b) => a.sourceId.localeCompare(b.sourceId));
const fetchBatches = existing.fetchBatches ?? existing.batches ?? [];
const jaRoot = path.join(rootDir, 'apps/awesome/src/awesome-content/v2026-08-20/ja');
const translated = new Set(
  fs.existsSync(jaRoot)
    ? fs
        .readdirSync(jaRoot, { recursive: true, withFileTypes: true })
        .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
        .map(
          (entry) =>
            fs
              .readFileSync(path.join(entry.parentPath ?? entry.path, entry.name), 'utf8')
              .match(/^licenseSource:\s*"?([^"\n]+)"?$/m)?.[1]
        )
        .filter(Boolean)
    : []
);
const batches = [];
for (let index = 0; index < included.length; index += 10) {
  const sources = included.slice(index, index + 10);
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
      JSON.stringify(sources.map((source) => [source.sourceId, source.documentSha256]))
    ),
    outputHash: sha256(
      JSON.stringify(sources.map((source) => [source.sourceId, source.documentSha256]))
    ),
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
  `Initialized Awesome pipeline status (${batches.length} batches, ${included.length} sources)`
);
