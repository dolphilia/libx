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

const pilotRepositories = [
  '0pandadev/awesome-windows',
  'avelino/awesome-go',
  'rust-unofficial/awesome-rust',
  'serhii-londar/open-source-mac-os-apps',
  'PatrickJS/awesome-angular',
  'YuzheSHI/awesome-agi-cocosci',
  'awesome-selfhosted/awesome-selfhosted',
];
const dryRun = process.argv.includes('--dry-run');
const state = readJson(path.join(notesDir, 'DISCOVERY_STATE.json'));
const byRepository = new Map(state.visited.map((source) => [source.repository, source]));
const lockPath = path.join(notesDir, 'SOURCES.lock.json');
const lock = readJson(lockPath);
const decisionsPath = path.join(notesDir, 'LICENSE_DECISIONS.json');
const decisions = readJson(decisionsPath);
const results = [];

for (const repository of pilotRepositories) {
  const candidate = byRepository.get(repository);
  if (!candidate?.readmePath || !candidate.commitSha) {
    throw new Error(`パイロット候補の固定READMEがありません: ${repository}`);
  }
  const document = await githubRaw(repository, candidate.commitSha, candidate.readmePath);
  let license = null;
  let licensePath = null;
  for (const pathCandidate of [
    candidate.licensePath,
    'LICENSE',
    'LICENSE.md',
    'license',
    'license.md',
    'COPYING',
    'COPYING.md',
    'UNLICENSE',
    'UNLICENSE.md',
  ].filter(Boolean)) {
    try {
      license = await githubRaw(repository, candidate.commitSha, pathCandidate);
      licensePath = pathCandidate;
      break;
    } catch {}
  }
  const licenseSpdx = license?.includes('MIT License')
    ? 'MIT'
    : license?.includes('CC0 1.0 Universal') ||
        license?.includes('This is free and unencumbered software')
      ? 'CC0-1.0'
      : license?.includes('Creative Commons Attribution 4.0')
        ? 'CC-BY-4.0'
        : candidate.licenseSpdx;
  const sourceId = `github-${repository.replace('/', '-')}-${candidate.readmePath.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const status =
    licenseSpdx === 'CC0-1.0' || licenseSpdx === 'MIT'
      ? 'included'
      : license
        ? 'pending-license-review'
        : 'metadata-only';
  results.push({
    sourceId,
    parentSourceId: 'sindresorhus-awesome-readme',
    discoveryDepth: 1,
    repository,
    defaultBranch: candidate.defaultBranch,
    commitSha: candidate.commitSha,
    documentPath: candidate.readmePath,
    documentSha256: sha256(document),
    licenseSpdx,
    licensePath,
    licenseSha256: license ? sha256(license) : null,
    retrievedAt: isoNow(),
    status,
    decisionId: `license-${sourceId}`,
    normalizerVersion: 'awesome-importer-v1',
    _document: document,
    _license: license,
  });
}

if (dryRun) {
  console.log(
    JSON.stringify(
      results.map(({ _document, _license, ...result }) => result),
      null,
      2
    )
  );
  process.exit(0);
}

const sourceDir = path.join(tempDir, '01-source/repositories');
for (const result of results) {
  const { _document, _license, ...record } = result;
  const targetDir = path.join(sourceDir, record.sourceId);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, record.documentPath), _document);
  if (_license) fs.writeFileSync(path.join(targetDir, record.licensePath), _license);
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
        ? `${record.licenseSpdx}の固定ライセンス文書を確認。READMEは同一リポジトリの付随文書としてライセンス通知を保持して変換・翻訳・再配布する。`
        : '固定コミットでライセンスを検出できないため、本文は複製せず原文へのメタデータリンクに限定する。',
    decidedBy: 'repository-administrator',
    decidedAt: record.retrievedAt,
  });
}
lock.sources.sort((left, right) => left.sourceId.localeCompare(right.sourceId));
writeJsonAtomic(lockPath, lock);
writeJsonAtomic(decisionsPath, decisions);
console.log(
  JSON.stringify(
    {
      locked: results.length,
      included: results.filter((result) => result.status === 'included').length,
      metadataOnly: results.filter((result) => result.status === 'metadata-only').length,
    },
    null,
    2
  )
);
