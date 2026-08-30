#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { notesDir, readJson, rootDir, snapshotVersion, writeJsonAtomic } from './common.mjs';

const version = snapshotVersion;
const statusPath = path.join(notesDir, 'BATCH_STATUS.json');
const status = readJson(statusPath);
const jaRoot = path.join(rootDir, 'apps/awesome/src/awesome-content', version, 'ja');
const translated = new Set(
  readJson(path.join(rootDir, 'apps/awesome/src/generated/awesome-routes.json'))
    .entries.filter(
      (entry) => entry.version === version && fs.existsSync(path.join(jaRoot, `${entry.slug}.md`))
    )
    .map((entry) => entry.sourceId)
);
for (const batch of status.batches) {
  for (const sourceId of batch.sourceIds) {
    const complete = translated.has(sourceId);
    batch.pages[sourceId].translated = complete ? 'completed' : 'pending';
    batch.pages[sourceId]['translation-validated'] = complete ? 'completed' : 'pending';
  }
  const complete = batch.sourceIds.every(
    (sourceId) => batch.pages[sourceId]['translation-validated'] === 'completed'
  );
  batch.translated = complete ? 'completed' : 'pending';
  batch['translation-validated'] = complete ? 'completed' : 'pending';
}
writeJsonAtomic(statusPath, status);
console.log(`Synchronized Awesome translation status (${translated.size} translated pages)`);
