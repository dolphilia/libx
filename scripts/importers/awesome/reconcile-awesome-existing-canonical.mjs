#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {
  notesRootDir,
  readJson,
  rootDir,
  sha256,
  tempRootDir,
  writeJsonAtomic,
} from './common.mjs';

const historicalVersion = 'v2026-08-20';
const targetVersion = 'v2026-08-23';
const apply = process.argv.includes('--apply');
const historicalNotes = path.join(notesRootDir, 'snapshots', historicalVersion);
const targetNotes = path.join(notesRootDir, 'snapshots', targetVersion);
const historicalRoot = path.join(
  rootDir,
  'apps/awesome/src/awesome-content',
  historicalVersion,
  'en'
);
const targetRoot = path.join(
  rootDir,
  'apps/awesome/src/awesome-content',
  targetVersion,
  'en'
);
const normalizedRoot = path.join(
  tempRootDir,
  'snapshots',
  targetVersion,
  '03-normalized'
);
const reportPath = path.join(notesRootDir, 'migration', 'RECONCILIATION_REPORT.json');

const historicalLock = readJson(path.join(historicalNotes, 'SOURCES.lock.json'));
const targetLock = readJson(path.join(targetNotes, 'SOURCES.lock.json'));
const routes = readJson(
  path.join(rootDir, 'apps/awesome/src/generated/awesome-routes.json')
).entries;
const historicalRoutes = new Map(
  routes
    .filter((entry) => entry.version === historicalVersion)
    .map((entry) => [entry.sourceId, entry])
);
const targetRoutes = new Map(
  routes.filter((entry) => entry.version === targetVersion).map((entry) => [entry.sourceId, entry])
);
const targetById = new Map(targetLock.sources.map((source) => [source.sourceId, source]));
const historicalIncluded = historicalLock.sources.filter((source) => source.status === 'included');
const lockFields = [
  'repository',
  'commitSha',
  'documentPath',
  'documentSha256',
  'licenseSpdx',
  'status',
];
const errors = [];
const pages = [];

for (const historical of historicalIncluded) {
  const target = targetById.get(historical.sourceId);
  if (!target) {
    errors.push(`新版ロックに旧included sourceがありません: ${historical.sourceId}`);
    continue;
  }
  const changedFields = lockFields.filter((field) => historical[field] !== target[field]);
  if (changedFields.length) {
    errors.push(
      `固定入力が変化しているため継承できません: ${historical.sourceId}: ${changedFields.join(', ')}`
    );
    continue;
  }
  const historicalRoute = historicalRoutes.get(historical.sourceId);
  const targetRoute = targetRoutes.get(historical.sourceId);
  if (!historicalRoute || !targetRoute) {
    errors.push(`版別ルートがありません: ${historical.sourceId}`);
    continue;
  }
  const historicalPath = path.join(historicalRoot, `${historicalRoute.slug}.md`);
  const targetPath = path.join(targetRoot, `${targetRoute.slug}.md`);
  const normalizedPath = path.join(normalizedRoot, `${historical.sourceId}.md`);
  const historicalContent = fs.readFileSync(historicalPath);
  const beforeContent = fs.existsSync(targetPath) ? fs.readFileSync(targetPath) : null;
  const intentionalExclusion = historical.sourceId === 'sindresorhus-awesome-readme';

  if (!intentionalExclusion && apply) {
    fs.copyFileSync(historicalPath, normalizedPath);
  }

  const expectedContent = intentionalExclusion
    ? fs.readFileSync(normalizedPath)
    : historicalContent;
  if (!apply && !fs.readFileSync(normalizedPath).equals(expectedContent)) {
    errors.push(`正規化済み入力が継承結果と一致しません: ${historical.sourceId}`);
  }
  pages.push({
    sourceId: historical.sourceId,
    historicalSlug: historicalRoute.slug,
    targetSlug: targetRoute.slug,
    fixedInputUnchanged: true,
    policy: intentionalExclusion
      ? 'regenerated-with-recorded-banner-exclusion'
      : 'byte-for-byte-canonical-carry-forward',
    historicalCanonicalSha256: sha256(historicalContent),
    beforeTargetCanonicalSha256: beforeContent ? sha256(beforeContent) : null,
    expectedTargetCanonicalSha256: sha256(expectedContent),
  });
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

const changedBefore = pages.filter(
  (page) => page.beforeTargetCanonicalSha256 !== page.expectedTargetCanonicalSha256
);
const report = {
  schemaVersion: 1,
  generatedOn: '2026-08-28',
  historicalVersion,
  targetVersion,
  policy:
    '固定入力が同一の旧includedページは検証済み英語定本をバイト単位で継承し、記録済み除外規則が変わったページだけ再生成する。',
  summary: {
    historicalIncludedPages: historicalIncluded.length,
    unchangedFixedInputs: pages.length,
    byteForByteCarryForward: pages.filter(
      (page) => page.policy === 'byte-for-byte-canonical-carry-forward'
    ).length,
    intentionallyRegenerated: pages.filter(
      (page) => page.policy === 'regenerated-with-recorded-banner-exclusion'
    ).length,
    targetPagesDifferingBeforeReconciliation: changedBefore.length,
  },
  pages,
};

if (apply) writeJsonAtomic(reportPath, report);
console.log(
  `Awesome canonical reconciliation: OK (${pages.length} fixed inputs, ${changedBefore.length} target differences${apply ? ', applied' : ''})`
);
