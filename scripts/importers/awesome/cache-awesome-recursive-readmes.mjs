#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { githubRaw, notesDir, readJson, tempDir, writeJsonAtomic } from './common.mjs';

const limit = Number(process.argv.find((argument) => argument.startsWith('--limit='))?.slice(8) ?? 25);
const inventoryPath =
  process.argv.find((argument) => argument.startsWith('--inventory='))?.slice(12) ??
  path.join(tempDir, '02-inventory/pilot-recursive-candidates.json');
if (!Number.isInteger(limit) || limit < 1 || limit > 25) throw new Error('--limit は1から25です');
const state = readJson(path.join(notesDir, 'DISCOVERY_STATE.json'));
const inventory = readJson(inventoryPath);
const inventoryRepositories = new Set(
  (inventory.newCandidates ?? inventory.candidates).map((candidate) => candidate.repository.toLowerCase())
);
const candidates = state.visited
  .filter(
    (candidate) =>
      inventoryRepositories.has(candidate.repository.toLowerCase()) &&
      candidate.readmePath &&
      candidate.readmeSha256
  )
  .sort((left, right) => left.repository.localeCompare(right.repository));
const cachePath = (candidate) =>
  path.join(tempDir, '01-source/recursive', candidate.repository.replace('/', '--'), candidate.readmePath);
const pending = candidates.filter((candidate) => !fs.existsSync(cachePath(candidate))).slice(0, limit);
const results = [];
for (let offset = 0; offset < pending.length; offset += 5) {
  const chunk = await Promise.all(
    pending.slice(offset, offset + 5).map(async (candidate) => {
      try {
        const text = await githubRaw(candidate.repository, candidate.commitSha, candidate.readmePath);
        const target = cachePath(candidate);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, text);
        return { repository: candidate.repository, cached: true };
      } catch (error) {
        return { repository: candidate.repository, cached: false, error: String(error.message) };
      }
    })
  );
  results.push(...chunk);
}
const report = {
  schemaVersion: 1,
  at: new Date().toISOString(),
  eligible: candidates.length,
  requested: pending.length,
  cached: results.filter((result) => result.cached).length,
  failures: results.filter((result) => !result.cached),
};
writeJsonAtomic(path.join(tempDir, '05-reports/recursive-readme-cache.json'), report);
state.checkpoints.push({ kind: 'recursive-readme-cache', ...report });
writeJsonAtomic(path.join(notesDir, 'DISCOVERY_STATE.json'), state);
console.log(JSON.stringify(report, null, 2));
