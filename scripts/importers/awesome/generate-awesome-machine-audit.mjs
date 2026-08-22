#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { notesDir, optionValue, readJson, rootDir, writeJsonAtomic } from './common.mjs';

const version = 'v2026-08-20';
const check = process.argv.includes('--check');
const contentRoot = path.join(rootDir, 'apps/awesome/src/awesome-content', version);
const englishRoot = path.join(contentRoot, 'en');
const japaneseRoot = path.join(contentRoot, 'ja');
const auditPath = path.join(notesDir, 'MACHINE_AUDIT.json');
const queuePath = path.join(notesDir, 'FINAL_REVIEW_QUEUE.json');
const resultsPath = optionValue(
  process.argv.slice(2),
  '--results',
  path.join(notesDir, 'FINAL_REVIEW_RESULTS.json')
);

function markdownFiles(directory) {
  return fs
    .readdirSync(directory, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => path.relative(directory, path.join(entry.parentPath, entry.name)))
    .sort();
}

function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function readPage(directory, file) {
  const raw = fs.readFileSync(path.join(directory, file), 'utf8');
  const parsed = matter(raw);
  return { raw, data: parsed.data, content: parsed.content };
}

function proseLines(content) {
  const result = [];
  let fenced = false;
  for (const [index, rawLine] of content.split('\n').entries()) {
    const line = rawLine.trim();
    if (/^```|^~~~/.test(line)) {
      fenced = !fenced;
      continue;
    }
    if (
      fenced ||
      !line ||
      /^#{1,6}\s/.test(line) ||
      /^([-*+] |\d+\. )/.test(line) ||
      /^\|/.test(line) ||
      /^</.test(line) ||
      /^!\[/.test(line)
    ) {
      continue;
    }
    const withoutProtectedValues = line
      .replace(/https?:\/\/[^\s)>]+/g, '')
      .replace(/`[^`]+`/g, '')
      .replace(/[\[\]()*_>]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const englishWords = withoutProtectedValues.match(/\b[A-Za-z][A-Za-z'-]{2,}\b/g) ?? [];
    if (englishWords.length >= 8 && !/[ぁ-んァ-ヶ一-龠]/.test(withoutProtectedValues)) {
      result.push({ line: index + 1, textHash: sha256(withoutProtectedValues) });
    }
  }
  return result;
}

const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const batchStatus = readJson(path.join(notesDir, 'BATCH_STATUS.json'));
const exclusions = readJson(path.join(notesDir, 'EXCLUSIONS.json'));
const reviewResults = fs.existsSync(resultsPath)
  ? readJson(resultsPath)
  : { schemaVersion: 1, snapshotVersion: version, reviews: [] };
const routes = readJson(path.join(rootDir, 'apps/awesome/src/generated/awesome-routes.json'));
const includedIds = new Set(
  lock.sources.filter((source) => source.status === 'included').map((source) => source.sourceId)
);
const knownIds = new Set(lock.sources.map((source) => source.sourceId));
const englishFiles = markdownFiles(englishRoot);
const japaneseFiles = markdownFiles(japaneseRoot);
const englishSet = new Set(englishFiles);
const japaneseSet = new Set(japaneseFiles);
const routeBySource = new Map(routes.entries.map((entry) => [entry.licenseSource, entry]));
const pageBySource = new Map();
const lockBySource = new Map(lock.sources.map((source) => [source.sourceId, source]));
const errors = [];
const englishResidualCandidates = [];

for (const file of englishFiles) {
  const en = readPage(englishRoot, file);
  pageBySource.set(en.data.licenseSource, file);
  if (!knownIds.has(en.data.licenseSource)) errors.push(`未知の英語出典ID: ${file}`);
  if (!includedIds.has(en.data.licenseSource)) errors.push(`included以外の英語本文: ${file}`);
  if (!japaneseSet.has(file)) errors.push(`日本語ページ欠落: ${file}`);
}

for (const file of japaneseFiles) {
  const ja = readPage(japaneseRoot, file);
  if (!englishSet.has(file)) {
    errors.push(`対応英語ページのない日本語本文: ${file}`);
    continue;
  }
  const en = readPage(englishRoot, file);
  if (!knownIds.has(ja.data.licenseSource)) errors.push(`未知の日本語出典ID: ${file}`);
  if (ja.data.licenseSource !== en.data.licenseSource) errors.push(`英日出典ID不一致: ${file}`);
  if (ja.raw === en.raw) errors.push(`英語本文と同一の日本語ページ: ${file}`);
  const candidates = proseLines(ja.content);
  if (candidates.length) {
    englishResidualCandidates.push({
      category: file.split(path.sep)[0],
      page: file,
      sourceId: ja.data.licenseSource,
      locations: candidates,
    });
  }
}

const routeKeys = routes.entries.map((entry) => `${entry.lang}:${entry.slug}`);
if (new Set(routeKeys).size !== routeKeys.length) errors.push('正規URLが重複しています');
if (routes.entries.length !== englishFiles.length)
  errors.push('ルート目録と英語ページ数が一致しません');
for (const entry of routes.entries) {
  if (!englishSet.has(`${entry.slug}.md`)) errors.push(`ルート目録の英語ページ欠落: ${entry.slug}`);
  if (!knownIds.has(entry.licenseSource)) errors.push(`ルート目録の未知出典ID: ${entry.slug}`);
}

const exclusionChecks = exclusions.exclusions.map((exclusion) => {
  const file = pageBySource.get(exclusion.sourceId) ?? null;
  return {
    sourceId: exclusion.sourceId,
    classification: exclusion.classification,
    headingOrRange: exclusion.headingOrRange,
    englishPage: file,
    japanesePage: file && japaneseSet.has(file) ? file : null,
    status:
      file === null || japaneseSet.has(file) ? 'machine-consistent-human-review-required' : 'error',
  };
});
for (const item of exclusionChecks) {
  if (item.status === 'error') errors.push(`除外対象の英日対応不一致: ${item.sourceId}`);
}

const englishSampleBySource = new Map();
const addEnglishSample = (sourceId, reason) => {
  const route = routeBySource.get(sourceId);
  if (!route) return;
  const sample = englishSampleBySource.get(sourceId) ?? {
    category: route.categoryId,
    page: `${route.slug}.md`,
    sourceId,
    selectionReasons: [],
  };
  if (!sample.selectionReasons.includes(reason)) sample.selectionReasons.push(reason);
  englishSampleBySource.set(sourceId, sample);
};

for (const batch of batchStatus.fetchBatches) {
  const eligible = batch.sourceIds.filter(
    (sourceId) => includedIds.has(sourceId) && routeBySource.has(sourceId)
  );
  const required = Math.max(3, Math.ceil(eligible.length * 0.1));
  const selected = [];
  for (let index = 0; index < required && index < eligible.length; index += 1) {
    const position =
      required === 1 ? 0 : Math.round((index * (eligible.length - 1)) / (required - 1));
    if (!selected.includes(eligible[position])) selected.push(eligible[position]);
  }
  for (const sourceId of selected) {
    addEnglishSample(sourceId, `batch-${batch.batchNumber}-minimum-sample`);
  }
}

const orderedIncludedSources = routes.entries.map((entry) => entry.licenseSource);
const firstSourceByLicense = new Map();
for (const sourceId of orderedIncludedSources) {
  const license = lockBySource.get(sourceId)?.licenseSpdx;
  if (license && !firstSourceByLicense.has(license)) firstSourceByLicense.set(license, sourceId);
}
for (const [license, sourceId] of [...firstSourceByLicense].sort(([a], [b]) =>
  a.localeCompare(b)
)) {
  addEnglishSample(sourceId, `first-license-${license}`);
}

const markdownStructures = [
  ['heading', /^#{1,6}\s+/m],
  ['unordered-list', /^\s*[-*+]\s+/m],
  ['ordered-list', /^\s*\d+[.)]\s+/m],
  ['link', /\[[^\]]+\]\([^)]+\)/m],
  ['relative-link', /\[[^\]]+\]\((?:\.\.\/|\.\/)[^)]+\)/m],
  ['image', /!\[[^\]]*\]\([^)]+\)/m],
  ['blockquote', /^\s*>\s+/m],
  ['table', /^\s*\|.+\|\s*$/m],
  ['fenced-code', /^\s*(?:```|~~~)/m],
  ['task-list', /^\s*[-*+]\s+\[[ xX]\]\s+/m],
  ['details', /<details\b/i],
  ['raw-html', /<(?!https?:\/\/)[A-Za-z][^>]*>/m],
  ['footnote', /\[\^[^\]]+\]/m],
];
const firstSourceByStructure = new Map();
for (const sourceId of orderedIncludedSources) {
  const route = routeBySource.get(sourceId);
  const content = readPage(englishRoot, `${route.slug}.md`).content;
  for (const [structure, pattern] of markdownStructures) {
    if (!firstSourceByStructure.has(structure) && pattern.test(content)) {
      firstSourceByStructure.set(structure, sourceId);
    }
  }
}
for (const [structure, sourceId] of markdownStructures
  .map(([structure]) => [structure, firstSourceByStructure.get(structure)])
  .filter(([, sourceId]) => sourceId)) {
  addEnglishSample(sourceId, `first-markdown-structure-${structure}`);
}
const englishSamples = [...englishSampleBySource.values()];

const reviewItems = [];
for (const entry of routes.entries) {
  const file = `${entry.slug}.md`;
  reviewItems.push({
    id: `ja-${entry.licenseSource}`,
    kind: 'japanese-full-page-semantic-review',
    category: entry.categoryId,
    page: file,
    sourceId: entry.licenseSource,
    location: '全文',
    reason:
      '推薦理由、対象範囲、制限、否定、固有名詞、技術・分野用語、自然な日本語を固定原文と照合する。',
    evidence: {
      sourceDocumentSha256: lockBySource.get(entry.licenseSource)?.documentSha256 ?? null,
      englishCanonicalSha256: sha256(readPage(englishRoot, file).raw),
      japanesePageSha256: sha256(readPage(japaneseRoot, file).raw),
    },
    status: 'pending',
  });
}
for (const sample of englishSamples) {
  const source = lockBySource.get(sample.sourceId);
  reviewItems.push({
    id: `en-sample-${sample.sourceId}`,
    kind: 'english-canonical-sample-review',
    ...sample,
    location: '全文',
    reason: `計画9.4の決定的標本（${sample.selectionReasons.join('、')}）として、固定原文と英語定本の項目、URL、順序、説明、除外を全文照合する。`,
    evidence: {
      sourceDocumentSha256: source?.documentSha256 ?? null,
      englishCanonicalSha256: sha256(readPage(englishRoot, sample.page).raw),
    },
    status: 'pending',
  });
}
for (const exclusion of exclusions.exclusions) {
  const route = routeBySource.get(exclusion.sourceId);
  reviewItems.push({
    id: `exclusion-${exclusion.sourceId}-${exclusion.fragmentSha256.slice(0, 12)}`,
    kind: 'exclusion-review',
    category: route?.categoryId ?? 'metadata-only',
    page: route ? `${route.slug}.md` : null,
    sourceId: exclusion.sourceId,
    location: exclusion.headingOrRange,
    reason: exclusion.reason,
    evidence: {
      sourceDocumentSha256: lockBySource.get(exclusion.sourceId)?.documentSha256 ?? null,
      excludedFragmentSha256: exclusion.fragmentSha256,
    },
    status: 'pending',
  });
}

for (const item of reviewItems) {
  item.evidenceHash = sha256(
    stableJson({
      id: item.id,
      kind: item.kind,
      sourceId: item.sourceId,
      page: item.page,
      location: item.location,
      evidence: item.evidence,
    })
  );
}

const queueEvidenceHash = sha256(
  stableJson(reviewItems.map((item) => ({ id: item.id, evidenceHash: item.evidenceHash })))
);

if (
  reviewResults.schemaVersion !== 1 ||
  reviewResults.snapshotVersion !== version ||
  !Array.isArray(reviewResults.reviews)
) {
  errors.push('最終レビュー結果の形式またはsnapshotVersionが不正です');
}
const itemById = new Map(reviewItems.map((item) => [item.id, item]));
const seenReviewIds = new Set();
const signedReviews = Array.isArray(reviewResults.reviews) ? reviewResults.reviews : [];
const aggregateReview = reviewResults.aggregateReview ?? null;
if (aggregateReview !== null && signedReviews.length > 0) {
  errors.push('包括レビュー証明と個別レビュー結果は同時に指定できません');
}
if (aggregateReview !== null) {
  if (
    aggregateReview.scope !== 'all-review-items' ||
    aggregateReview.itemCount !== reviewItems.length ||
    aggregateReview.evidenceHash !== queueEvidenceHash ||
    aggregateReview.decision !== 'approved'
  ) {
    errors.push('包括レビュー証明の対象・件数・証拠ハッシュ・判定が不正または失効しています');
  } else if (
    typeof aggregateReview.reviewer !== 'string' ||
    !aggregateReview.reviewer.trim() ||
    typeof aggregateReview.reviewedAt !== 'string' ||
    !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(aggregateReview.reviewedAt) ||
    typeof aggregateReview.notes !== 'string' ||
    !aggregateReview.notes.trim()
  ) {
    errors.push('包括レビュー証明の署名・日時・所見が不足しています');
  } else {
    for (const item of reviewItems) {
      item.status = 'approved';
      item.review = {
        reviewer: aggregateReview.reviewer,
        reviewedAt: aggregateReview.reviewedAt,
        notes: aggregateReview.notes,
        aggregate: true,
      };
    }
  }
}
for (const result of signedReviews) {
  if (seenReviewIds.has(result.id)) {
    errors.push(`最終レビュー結果IDが重複しています: ${result.id}`);
    continue;
  }
  seenReviewIds.add(result.id);
  const item = itemById.get(result.id);
  if (!item) {
    errors.push(`最終レビュー結果の対象IDが不明です: ${result.id}`);
    continue;
  }
  if (result.evidenceHash !== item.evidenceHash) {
    errors.push(`最終レビュー結果の証拠ハッシュが失効しています: ${result.id}`);
    continue;
  }
  if (!['approved', 'changes-requested'].includes(result.decision)) {
    errors.push(`最終レビュー結果のdecisionが不正です: ${result.id}`);
    continue;
  }
  if (
    typeof result.reviewer !== 'string' ||
    !result.reviewer.trim() ||
    typeof result.reviewedAt !== 'string' ||
    !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(result.reviewedAt) ||
    typeof result.notes !== 'string' ||
    !result.notes.trim()
  ) {
    errors.push(`最終レビュー結果の署名・日時・所見が不足しています: ${result.id}`);
    continue;
  }
  item.status = result.decision;
  item.review = {
    reviewer: result.reviewer,
    reviewedAt: result.reviewedAt,
    notes: result.notes,
  };
}

const audit = {
  schemaVersion: 1,
  snapshotVersion: version,
  generatedFrom: {
    lockSha256: sha256(stableJson(lock)),
    routesSha256: sha256(stableJson(routes)),
    exclusionsSha256: sha256(stableJson(exclusions)),
  },
  counts: {
    knownSources: lock.sources.length,
    includedSources: includedIds.size,
    metadataOnlySources: lock.sources.filter((source) => source.status === 'metadata-only').length,
    englishPages: englishFiles.length,
    japanesePages: japaneseFiles.length,
    canonicalRoutes: routes.entries.length,
    exclusions: exclusions.exclusions.length,
    englishResidualCandidatePages: englishResidualCandidates.length,
    englishResidualCandidateLocations: englishResidualCandidates.reduce(
      (sum, page) => sum + page.locations.length,
      0
    ),
  },
  checks: {
    pageSets: errors.some((error) => /ページ|本文/.test(error)) ? 'failed' : 'passed',
    sourceIds: errors.some((error) => /出典ID/.test(error)) ? 'failed' : 'passed',
    canonicalUrls: errors.some((error) => /URL|ルート目録/.test(error)) ? 'failed' : 'passed',
    exclusions: errors.some((error) => /除外/.test(error)) ? 'failed' : 'passed',
    identicalEnglishPages: errors.some((error) => /同一/.test(error)) ? 'failed' : 'passed',
    englishResiduals: englishResidualCandidates.length ? 'human-review-required' : 'passed',
  },
  errors,
  exclusionChecks,
  englishResidualCandidates,
};
const queue = {
  schemaVersion: 1,
  snapshotVersion: version,
  evidenceHash: queueEvidenceHash,
  selectionRule:
    '全365日本語ページ、Markdown構造・ライセンス種別の初出ページ、25取得元バッチごとの決定的な英語標本、exclude/review断片100%',
  counts: {
    japaneseFullPageReviews: routes.entries.length,
    englishCanonicalSamples: englishSamples.length,
    exclusionReviews: exclusions.exclusions.length,
    total: reviewItems.length,
    pending: reviewItems.filter((item) => item.status === 'pending').length,
    approved: reviewItems.filter((item) => item.status === 'approved').length,
    changesRequested: reviewItems.filter((item) => item.status === 'changes-requested').length,
  },
  items: reviewItems,
};

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exitCode = 1;
} else if (check) {
  for (const [pathname, expected] of [
    [auditPath, audit],
    [queuePath, queue],
  ]) {
    if (!fs.existsSync(pathname) || fs.readFileSync(pathname, 'utf8') !== stableJson(expected)) {
      console.error(`- Awesome機械監査成果物が一致しません: ${pathname}`);
      process.exitCode = 1;
    }
  }
  if (!process.exitCode)
    console.log(
      `Awesome machine audit: OK (${englishFiles.length}/${japaneseFiles.length} EN/JA pages, ${reviewItems.length} review items)`
    );
} else {
  writeJsonAtomic(auditPath, audit);
  writeJsonAtomic(queuePath, queue);
  console.log(
    `Generated Awesome machine audit (${englishFiles.length}/${japaneseFiles.length} EN/JA pages, ${reviewItems.length} review items)`
  );
}
