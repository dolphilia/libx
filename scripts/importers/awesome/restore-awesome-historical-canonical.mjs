#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { prepareImportOutput } from '../safe-import-output.js';
import { createAwesomeResolver } from './app-ownership.mjs';
import {
  notesDir,
  readJson,
  rootDir,
  snapshotVersion,
  tempDir,
  writeJsonAtomic,
} from './common.mjs';

if (snapshotVersion !== 'v2026-08-20') {
  throw new Error('履歴定本の復元対象はv2026-08-20だけです');
}

const check = process.argv.includes('--check');
const freezeManifest = process.argv.includes('--freeze-manifest');
if (check && freezeManifest) throw new Error('--checkと--freeze-manifestは同時に指定できません');

const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');
const categoryId = (value) =>
  value
    .normalize('NFKD')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const evidence = readJson(path.join(notesDir, 'HISTORICAL_REVIEW_EVIDENCE_RECONCILIATION.json'));
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const contentMap = readJson(path.join(notesDir, 'CONTENT_MAP.json'));
const categoryBySource = new Map(
  contentMap.entries.map((entry) => [entry.sourceId, entry.categories?.[0]])
);
const included = lock.sources.filter((source) => source.status === 'included');
const normalizedRoot = path.join(tempDir, '03-normalized');
const resolver = createAwesomeResolver(rootDir);
const manifestPath = path.join(notesDir, 'HISTORICAL_CANONICAL_MANIFEST.json');

const routeFor = (source) => {
  if (source.sourceId === 'sindresorhus-awesome-readme') {
    return 'overview/sindresorhus-awesome';
  }
  const category = categoryBySource.get(source.sourceId);
  if (!category) throw new Error(`履歴版カテゴリがありません: ${source.sourceId}`);
  const pageId = source.repository.replace('/', '-');
  if (!/^[A-Za-z0-9._-]+$/.test(pageId)) {
    throw new Error(`安全でない履歴版ページIDです: ${pageId}`);
  }
  return `${categoryId(category)}/${pageId}`;
};

const currentPages = included
  .map((source) => {
    const slug = routeFor(source);
    const pathname = resolver.contentPath({
      sourceId: source.sourceId,
      moduleKey: `/src/awesome-content/${snapshotVersion}/en/${slug}.md`,
    });
    if (!fs.existsSync(pathname)) throw new Error(`履歴版定本がありません: ${slug}`);
    const content = fs.readFileSync(pathname, 'utf8');
    if (!content.includes(`licenseSource: ${JSON.stringify(source.sourceId)}`)) {
      throw new Error(`履歴版のlicenseSourceが一致しません: ${source.sourceId}`);
    }
    return { sourceId: source.sourceId, slug, sha256: sha256(content), content };
  })
  .sort((left, right) => left.sourceId.localeCompare(right.sourceId));

const aggregateSha256 = (pages) =>
  sha256(
    pages
      .map(({ sourceId, slug, sha256: pageHash }) => `${sourceId}\t${slug}\t${pageHash}`)
      .join('\n')
  );

if (freezeManifest) {
  const manifest = {
    schemaVersion: 1,
    snapshotVersion,
    policy:
      '履歴版英語定本を版内ファイルとページ別SHA-256で固定する。検証・正規化入力の回復に他のsnapshotを参照しない。',
    sourceLockSha256: sha256(fs.readFileSync(path.join(notesDir, 'SOURCES.lock.json'))),
    pageCount: currentPages.length,
    aggregateSha256: aggregateSha256(currentPages),
    pages: currentPages.map(({ content: _content, ...page }) => page),
  };
  writeJsonAtomic(manifestPath, manifest);
  console.log(`Frozen Awesome historical canonical manifest (${manifest.pageCount} pages)`);
  process.exit(0);
}

if (!fs.existsSync(manifestPath)) {
  throw new Error(
    '履歴版定本マニフェストがありません。管理者確認後に--freeze-manifestで固定してください'
  );
}
const manifest = readJson(manifestPath);
if (manifest.snapshotVersion !== snapshotVersion)
  throw new Error('履歴版定本マニフェストの版が不正です');
if (manifest.pageCount !== included.length || manifest.pages.length !== included.length) {
  throw new Error('履歴版定本マニフェストのページ数が一致しません');
}
const expectedBySource = new Map(manifest.pages.map((page) => [page.sourceId, page]));
for (const page of currentPages) {
  const expected = expectedBySource.get(page.sourceId);
  if (!expected || expected.slug !== page.slug || expected.sha256 !== page.sha256) {
    throw new Error(`履歴版定本が固定マニフェストと一致しません: ${page.sourceId}`);
  }
}
if (manifest.aggregateSha256 !== aggregateSha256(currentPages)) {
  throw new Error('履歴版定本の集約SHA-256が一致しません');
}
const overview = currentPages.find((page) => page.sourceId === 'sindresorhus-awesome-readme');
if (overview?.sha256 !== evidence.currentReconciledEvidence.englishOverviewSha256) {
  throw new Error('履歴版の概要が現在の調整済み証拠ハッシュと一致しません');
}

if (check) {
  console.log(
    `Awesome historical canonical check: OK (${currentPages.length} pages, snapshot-independent)`
  );
  process.exit(0);
}

function generateNormalized(target) {
  for (const page of currentPages) {
    fs.writeFileSync(path.join(target, `${page.sourceId}.md`), page.content);
  }
}

function validate(target) {
  const files = fs
    .readdirSync(target, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'));
  if (files.length !== included.length) {
    throw new Error(`履歴版正規化入力数が一致しません: ${files.length}`);
  }
}

prepareImportOutput({
  targetPath: normalizedRoot,
  generate: generateNormalized,
  validate,
});
console.log(`Restored Awesome historical normalized input (${currentPages.length} pages)`);
