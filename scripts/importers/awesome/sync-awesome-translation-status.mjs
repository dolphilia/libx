#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { notesDir, readJson, rootDir, writeJsonAtomic } from './common.mjs';

const version = 'v2026-08-20';
const statusPath = path.join(notesDir, 'BATCH_STATUS.json');
const status = readJson(statusPath);
const jaRoot = path.join(rootDir, 'apps/awesome/src/awesome-content', version, 'ja');
const translated = new Set(
  fs.existsSync(jaRoot)
    ? fs.readdirSync(jaRoot, { recursive: true, withFileTypes: true })
        .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
        .map((entry) => fs.readFileSync(path.join(entry.parentPath ?? entry.path, entry.name), 'utf8').match(/^licenseSource:\s*"?([^"\n]+)"?$/m)?.[1])
        .filter(Boolean)
    : []
);
for (const batch of status.batches) {
  for (const sourceId of batch.sourceIds) {
    const complete = translated.has(sourceId);
    batch.pages[sourceId].translated = complete ? 'completed' : 'pending';
    batch.pages[sourceId]['translation-validated'] = complete ? 'completed' : 'pending';
  }
  const complete = batch.sourceIds.every((sourceId) => batch.pages[sourceId]['translation-validated'] === 'completed');
  batch.translated = complete ? 'completed' : 'pending';
  batch['translation-validated'] = complete ? 'completed' : 'pending';
}
writeJsonAtomic(statusPath, status);
console.log(`Synchronized Awesome translation status (${translated.size} translated pages)`);
