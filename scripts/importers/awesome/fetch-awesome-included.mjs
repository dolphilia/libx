#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {
  githubRaw,
  isoNow,
  notesDir,
  readJson,
  sha256,
  tempDir,
  writeJsonAtomic,
} from './common.mjs';

const limit = Number(
  process.argv.find((argument) => argument.startsWith('--limit='))?.slice(8) ?? 25
);
if (!Number.isInteger(limit) || limit < 1 || limit > 25) throw new Error('--limit は1から25です');
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const sourceRoot = path.join(tempDir, '01-source/repositories');
const statePath = path.join(notesDir, 'BATCH_STATUS.json');
const status = readJson(statePath);
const included = lock.sources.filter((source) => source.status === 'included');
const cached = new Set(
  included
    .filter((source) => fs.existsSync(path.join(sourceRoot, source.sourceId, source.documentPath)))
    .map((source) => source.sourceId)
);
const batch = included.filter((source) => !cached.has(source.sourceId)).slice(0, limit);
async function fetchSource(source) {
  const [document, license] = await Promise.all([
    githubRaw(source.repository, source.commitSha, source.documentPath),
    source.licensePath
      ? githubRaw(source.repository, source.commitSha, source.licensePath)
      : Promise.resolve(null),
  ]);
  if (sha256(document) !== source.documentSha256)
    throw new Error(`README hash mismatch: ${source.sourceId}`);
  if (source.licenseSha256 && (!license || sha256(license) !== source.licenseSha256))
    throw new Error(`license hash mismatch: ${source.sourceId}`);
  return { source, document, license };
}
const results = [];
for (let offset = 0; offset < batch.length; offset += 5)
  results.push(...(await Promise.all(batch.slice(offset, offset + 5).map(fetchSource))));
for (const { source, document, license } of results) {
  const target = path.join(sourceRoot, source.sourceId);
  fs.mkdirSync(path.dirname(path.join(target, source.documentPath)), { recursive: true });
  fs.writeFileSync(path.join(target, source.documentPath), document);
  if (license && source.licensePath)
    fs.writeFileSync(path.join(target, source.licensePath), license);
}
status.fetchBatches ??= status.batches ?? [];
const batchNumber = status.fetchBatches.length + 1;
status.fetchBatches.push({
  batchNumber,
  sourceIds: results.map((result) => result.source.sourceId),
  discovered: 'completed',
  locked: 'completed',
  fetched: 'completed',
  inputHash: sha256(
    JSON.stringify(batch.map((source) => [source.sourceId, source.documentSha256]))
  ),
  outputHash: sha256(
    JSON.stringify(results.map((result) => [result.source.sourceId, result.source.documentSha256]))
  ),
  checkedAt: isoNow(),
});
writeJsonAtomic(statePath, status);
console.log(
  JSON.stringify(
    {
      batchNumber,
      fetched: results.length,
      remaining: included.length - cached.size - results.length,
    },
    null,
    2
  )
);
