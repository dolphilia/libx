#!/usr/bin/env node
import path from 'node:path';
import { githubRaw, isoNow, notesDir, readJson, sha256, writeJsonAtomic } from './common.mjs';

const lockPath = path.join(notesDir, 'SOURCES.lock.json');
const decisionsPath = path.join(notesDir, 'LICENSE_DECISIONS.json');
const lock = readJson(lockPath);
const decisions = readJson(decisionsPath);
const dryRun = process.argv.includes('--dry-run');
const candidates = ['LICENSE', 'LICENSE.md', 'license', 'license.md', 'COPYING', 'COPYING.md'];
const expectedText = {
  MIT: 'MIT License',
  'CC0-1.0': 'CC0 1.0 Universal',
};

const targets = lock.sources.filter(
  (source) =>
    source.status === 'included' &&
    (!source.licensePath || !source.licenseSha256 || !expectedText[source.licenseSpdx])
);
if (dryRun) {
  console.log(JSON.stringify({ targets: targets.map((source) => source.sourceId) }, null, 2));
  process.exit(0);
}

const verified = [];
const demoted = [];
for (const source of targets) {
  let evidence = null;
  for (const licensePath of candidates) {
    try {
      const content = await githubRaw(source.repository, source.commitSha, licensePath);
      if (content.includes(expectedText[source.licenseSpdx])) {
        evidence = { licensePath, licenseSha256: sha256(content) };
        break;
      }
    } catch {
      // A missing candidate is expected; try the next conventional license filename.
    }
  }
  const decision = decisions.decisions.find((item) => item.decisionId === source.decisionId);
  if (evidence) {
    source.licensePath = evidence.licensePath;
    source.licenseSha256 = evidence.licenseSha256;
    if (decision) {
      decision.rationale = `${source.licenseSpdx}の固定ライセンス本文（${evidence.licensePath}、SHA-256: ${evidence.licenseSha256}）を確認した。固定通知を出典パネルで保持する。`;
      decision.decidedAt = isoNow();
    }
    verified.push(source.sourceId);
  } else {
    source.status = 'metadata-only';
    if (decision) {
      decision.status = 'metadata-only';
      decision.rationale =
        '固定コミットで再現可能なライセンス本文を確認できないため、本文を複製せずmetadata-onlyとして原文リンクだけを保持する。';
      decision.decidedAt = isoNow();
    }
    demoted.push(source.sourceId);
  }
}

writeJsonAtomic(lockPath, lock);
writeJsonAtomic(decisionsPath, decisions);
console.log(JSON.stringify({ verified, demoted }, null, 2));
