#!/usr/bin/env node
import path from 'node:path';
import { isoNow, notesDir, readJson, reproducibleLicenseIds, writeJsonAtomic } from './common.mjs';

const lockPath = path.join(notesDir, 'SOURCES.lock.json');
const decisionsPath = path.join(notesDir, 'LICENSE_DECISIONS.json');
const lock = readJson(lockPath);
const decisions = readJson(decisionsPath);
const state = readJson(path.join(notesDir, 'DISCOVERY_STATE.json'));
const dryRun = process.argv.includes('--dry-run');
const unreadable = state.visited.filter(
  (candidate) => !candidate.readmePath || !candidate.readmeSha256
);
const records = state.visited
  .filter((candidate) => candidate.readmePath && candidate.readmeSha256)
  .map((candidate) => {
    const sourceId = `github-${candidate.repository.replace('/', '-')}-${candidate.readmePath.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    const status =
      candidate.licenseSpdx && reproducibleLicenseIds.has(candidate.licenseSpdx)
        ? 'included'
        : 'metadata-only';
    return {
      sourceId,
      parentSourceId: 'sindresorhus-awesome-readme',
      discoveryDepth: 1,
      repository: candidate.repository,
      defaultBranch: candidate.defaultBranch,
      commitSha: candidate.commitSha,
      documentPath: candidate.readmePath,
      documentSha256: candidate.readmeSha256,
      licenseSpdx: candidate.licenseSpdx ?? null,
      licensePath: candidate.licensePath ?? null,
      licenseSha256: candidate.licenseSha256 ?? null,
      retrievedAt: candidate.inspectedAt,
      status,
      decisionId: `license-${sourceId}`,
      normalizerVersion: 'awesome-importer-v1',
    };
  });
if (dryRun) {
  console.log(
    JSON.stringify(
      {
        candidates: records.length,
        excludedUnreadable: unreadable.length,
        included: records.filter((record) => record.status === 'included').length,
        metadataOnly: records.filter((record) => record.status === 'metadata-only').length,
      },
      null,
      2
    )
  );
  process.exit(0);
}
for (const record of records) {
  lock.sources = lock.sources.filter((source) => source.sourceId !== record.sourceId);
  lock.sources.push(record);
  decisions.decisions = decisions.decisions.filter(
    (decision) => decision.decisionId !== record.decisionId
  );
  decisions.decisions.push({
    decisionId: record.decisionId,
    sourceId: record.sourceId,
    commitSha: record.commitSha,
    licenseSpdx: record.licenseSpdx,
    status: record.status,
    rationale:
      record.status === 'included'
        ? `${record.licenseSpdx}はパイロットで承認済みの文書ライセンス規則に一致する。固定ライセンス通知を出典パネルで保持する。`
        : 'ライセンス種別が未承認または不明のため、本文を複製せずmetadata-onlyとして原文リンクだけを保持する。',
    decidedBy: 'repository-administrator',
    decidedAt: isoNow(),
  });
}
lock.sources.sort((left, right) => left.sourceId.localeCompare(right.sourceId));
writeJsonAtomic(lockPath, lock);
writeJsonAtomic(decisionsPath, decisions);
console.log(
  JSON.stringify(
    {
      locked: records.length,
      excludedUnreadable: unreadable.length,
      included: records.filter((record) => record.status === 'included').length,
      metadataOnly: records.filter((record) => record.status === 'metadata-only').length,
    },
    null,
    2
  )
);
