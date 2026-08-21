#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {
  githubJson,
  githubRaw,
  isoNow,
  notesDir,
  readJson,
  sha256,
  snapshotVersion,
  tempDir,
  writeJsonAtomic,
} from './common.mjs';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const rootRepository = 'sindresorhus/awesome';
const retrievedAt = isoNow();
const repository = await githubJson(`/repos/${rootRepository}`);
const commit = await githubJson(`/repos/${rootRepository}/commits/${repository.default_branch}`);
const commitSha = commit.sha;
const readmePath = 'readme.md';
const licensePath = 'license';
const [readme, license] = await Promise.all([
  githubRaw(rootRepository, commitSha, readmePath),
  githubRaw(rootRepository, commitSha, licensePath),
]);
const source = {
  sourceId: 'sindresorhus-awesome-readme',
  parentSourceId: null,
  discoveryDepth: 0,
  repository: rootRepository,
  defaultBranch: repository.default_branch,
  commitSha,
  documentPath: readmePath,
  documentSha256: sha256(readme),
  licenseSpdx: 'CC0-1.0',
  licensePath,
  licenseSha256: sha256(license),
  retrievedAt,
  status: 'included',
  decisionId: 'license-sindresorhus-awesome-cc0-1.0',
  normalizerVersion: 'awesome-importer-v1',
};
if (dryRun) {
  console.log(JSON.stringify({ action: 'lock root source', source }, null, 2));
  process.exit(0);
}
const lockPath = path.join(notesDir, 'SOURCES.lock.json');
const lock = readJson(lockPath);
if (lock.sources.length && lock.sources[0].commitSha !== commitSha) {
  throw new Error('既存スナップショットの起点コミットは上書きできません');
}
lock.snapshot.createdAt ??= retrievedAt;
lock.sources = [source];
writeJsonAtomic(lockPath, lock);
writeJsonAtomic(path.join(notesDir, 'LICENSE_DECISIONS.json'), {
  $schema: './schemas/license-decisions.schema.json',
  schemaVersion: 1,
  decisions: [
    {
      decisionId: source.decisionId,
      sourceId: source.sourceId,
      commitSha,
      licenseSpdx: 'CC0-1.0',
      status: 'included',
      rationale: '固定コミットの license は CC0-1.0。翻訳・改変・再配布を許可する。',
      decidedBy: 'repository-administrator',
      decidedAt: retrievedAt,
    },
  ],
});
fs.mkdirSync(path.join(tempDir, '01-source/responses'), { recursive: true });
fs.writeFileSync(path.join(tempDir, '01-source/responses/root-readme.md'), readme);
fs.writeFileSync(path.join(tempDir, '01-source/responses/root-license'), license);
const lockHash = sha256(`${JSON.stringify(lock, null, 2)}\n`);
fs.writeFileSync(
  path.join(notesDir, 'SOURCE_MANIFEST.md'),
  `# Awesome source manifest\n\n| 項目 | 値 |\n| --- | --- |\n| スナップショットID | \`${snapshotVersion}\` |\n| 起点 | \`${rootRepository}\` |\n| 起点コミット | \`${commitSha}\` |\n| 取得日時 (UTC) | \`${retrievedAt}\` |\n| README SHA-256 | \`${source.documentSha256}\` |\n| LICENSE SHA-256 | \`${source.licenseSha256}\` |\n| ロックファイル SHA-256 | \`${lockHash}\` |\n\n固定コミットの Raw Markdown と license を一時領域に取得した。本文の公開は個別ライセンス判定後に限る。\n`
);
console.log(`Locked ${rootRepository}@${commitSha}`);
