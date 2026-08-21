#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { notesDir, readJson, sha256, writeJsonAtomic } from './common.mjs';

const lockPath = path.join(notesDir, 'SOURCES.lock.json');
const manifestPath = path.join(notesDir, 'SOURCE_MANIFEST.md');
const reportPath = path.join(notesDir, 'LOCK_CLOSURE_REPORT.json');
const lock = readJson(lockPath);
const discovery = readJson(path.join(notesDir, 'DISCOVERY_STATE.json'));
const decisions = readJson(path.join(notesDir, 'LICENSE_DECISIONS.json'));
const approvedLicenses = new Set(['MIT', 'CC0-1.0']);
const errors = [];

if (discovery.status !== 'completed' || discovery.queue.length !== 0)
  errors.push('探索キューが完了状態ではありません');
for (const source of lock.sources) {
  const decision = decisions.decisions.find((entry) => entry.decisionId === source.decisionId);
  if (source.status === 'pending-license-review')
    errors.push(`pending-license-reviewが残っています: ${source.sourceId}`);
  if (!decision || decision.status !== source.status)
    errors.push(`ライセンス決定がロックと一致しません: ${source.sourceId}`);
  if (source.status === 'included') {
    if (!approvedLicenses.has(source.licenseSpdx))
      errors.push(`未承認ライセンスがincludedです: ${source.sourceId}`);
    if (!source.licensePath || !source.licenseSha256)
      errors.push(`includedのライセンス根拠が未固定です: ${source.sourceId}`);
  }
}
if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

const lockHash = sha256(fs.readFileSync(lockPath));
const byStatus = Object.groupBy(lock.sources, (source) => source.status);
const report = {
  schemaVersion: 1,
  snapshotVersion: lock.snapshot.version,
  generatedAt: new Date().toISOString(),
  lockSha256: lockHash,
  discovery: { visited: discovery.visited.length, edges: discovery.edges.length, queue: discovery.queue.length },
  sources: Object.fromEntries(Object.entries(byStatus).map(([status, sources]) => [status, sources.length])),
  includedWithLicenseEvidence: byStatus.included.length,
  pendingLicenseReview: 0,
};
if (process.argv.includes('--check')) {
  const existing = readJson(reportPath);
  const { generatedAt: _generatedAt, ...expected } = report;
  const { generatedAt: _existingGeneratedAt, ...actual } = existing;
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.error('LOCK_CLOSURE_REPORT.jsonが現在のロック状態に一致しません');
    process.exit(1);
  }
  console.log(`Awesome lock closure check: OK (${byStatus.included.length} included)`);
  process.exit(0);
}

writeJsonAtomic(reportPath, report);
const manifest = fs.readFileSync(manifestPath, 'utf8').replace(
  /\| ロックファイル SHA-256 \| `[^`]+` \|/,
  `| ロックファイル SHA-256 | \`${lockHash}\` |`
);
fs.writeFileSync(manifestPath, manifest);
console.log(`Finalized Awesome lock (${byStatus.included.length} included, ${byStatus['metadata-only']?.length ?? 0} metadata-only)`);
