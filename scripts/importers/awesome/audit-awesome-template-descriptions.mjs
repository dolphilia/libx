#!/usr/bin/env node
import { createAwesomeContentAccess } from './app-ownership.mjs';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { notesDir, rootDir, snapshotVersion } from './common.mjs';

const version = snapshotVersion;
const content = createAwesomeContentAccess(version, rootDir);
const reviewResultsPath = path.join(notesDir, 'TEMPLATE_DESCRIPTION_REVIEW_RESULTS.json');
const outputOptionIndex = process.argv.indexOf('--output');
const outputPath =
  outputOptionIndex === -1 ? null : path.resolve(process.argv[outputOptionIndex + 1] ?? '');

if (outputOptionIndex !== -1 && !process.argv[outputOptionIndex + 1]) {
  console.error('awesome: --output にはJSONファイルを指定してください');
  process.exit(1);
}

function listDescriptions(file) {
  const content = matter(fs.readFileSync(file, 'utf8')).content;
  const tree = unified().use(remarkParse).parse(content);
  const descriptions = new Map();
  let listIndex = 0;

  function visit(node) {
    if (node.type === 'listItem') {
      const paragraph = node.children.find((child) => child.type === 'paragraph');
      const firstLink = paragraph?.children.find((child) => child.type === 'link');
      if (paragraph?.position && firstLink?.position) {
        const remainder = content
          .slice(firstLink.position.end.offset, paragraph.position.end.offset)
          .replace(/^\s*(?:[-–—:]|&mdash;)\s*/i, '')
          .replace(/\s+/g, ' ')
          .trim();
        if (isSemanticDescription(remainder)) descriptions.set(listIndex, remainder);
      }
      listIndex += 1;
    }

    for (const child of node.children ?? []) visit(child);
  }

  visit(tree);

  return descriptions;
}

function isSemanticDescription(description) {
  if (!description) return false;
  const withoutAnchors = description.replace(/<a\b[^>]*><\/a>/gi, '').trim();
  if (!withoutAnchors) return false;
  const compact = withoutAnchors
    .replace(/<img\b[^>]*>/gi, '')
    .replace(/[\s\p{P}\p{S}]+/gu, '')
    .toLocaleLowerCase('en-US');
  return !['', 'and', 'or', 'by', 'および', 'または', 'から', 'を参照', '向け'].includes(compact);
}

function normalizeEnglishMeaning(description) {
  return description
    .normalize('NFKC')
    .toLocaleLowerCase('en-US')
    .replace(/<a\b[^>]*><\/a>/gi, '')
    .replace(/[\s.,;:!?"'“”‘’()[\]{}*_~`<>\-–—]+/g, ' ')
    .trim();
}

function severity(collisionItemCount) {
  if (collisionItemCount >= 500) return 'critical';
  if (collisionItemCount >= 100) return 'high';
  if (collisionItemCount >= 20) return 'medium';
  return 'low';
}

function normalizeTemplate(description) {
  return description
    .replace(/\s+(?:参照|関連参照|関連情報|関連コード|値):.+$/, '')
    .replace(/\s+\[[^\]]+\]\([^)]+\).*$/, '')
    .replace(/\s+`[^`]+`.*$/, '')
    .replace(/^.+?に関する/, '<主題>に関する')
    .replace(/^.+?に分類される/, '<分類>に分類される')
    .replace(/^.+?を対象とする/, '<対象>を対象とする');
}

function collisionGroups(pairs, normalize = (description) => description) {
  const groups = new Map();
  for (const pair of pairs) {
    const key = normalize(pair.japanese);
    const group = groups.get(key) ?? [];
    group.push(pair);
    groups.set(key, group);
  }

  return [...groups.entries()].filter(([, group]) => {
    const meanings = new Set(group.map(({ english }) => normalizeEnglishMeaning(english)));
    return group.length > 1 && meanings.size > 1;
  });
}

const japaneseFiles = content.files('ja');
const documents = [];
const reviewDocuments = [];
const reviewedFalsePositiveDocuments = [];
const reviewedFalsePositives = new Set(
  fs.existsSync(reviewResultsPath)
    ? JSON.parse(fs.readFileSync(reviewResultsPath, 'utf8'))
        .results.filter((result) => result.decision === 'false-positive')
        .flatMap((result) => result.files)
    : []
);
let comparablePageCount = 0;
let alignedDescriptionCount = 0;

for (const file of japaneseFiles) {
  const englishFile = content.pathFor('en', file);
  if (!fs.existsSync(englishFile)) continue;

  const englishDescriptions = listDescriptions(englishFile);
  const japaneseDescriptions = listDescriptions(content.pathFor('ja', file));
  const pairs = [];
  let japaneseOnlyDescriptionCount = 0;
  let missingJapaneseDescriptionCount = 0;

  for (const [listIndex, japanese] of japaneseDescriptions) {
    const english = englishDescriptions.get(listIndex);
    if (english) pairs.push({ listIndex, english, japanese });
    else japaneseOnlyDescriptionCount += 1;
  }
  for (const listIndex of englishDescriptions.keys()) {
    if (!japaneseDescriptions.has(listIndex)) missingJapaneseDescriptionCount += 1;
  }

  if (pairs.length > 0) comparablePageCount += 1;
  alignedDescriptionCount += pairs.length;

  const exactCollisions = collisionGroups(pairs);
  const normalizedCollisions = collisionGroups(pairs, normalizeTemplate);
  const isConfirmed =
    exactCollisions.length > 0 ||
    japaneseOnlyDescriptionCount > 0 ||
    missingJapaneseDescriptionCount > 0;
  const collisions = isConfirmed ? exactCollisions : normalizedCollisions;
  if (!isConfirmed && collisions.length === 0) continue;

  const collisionItemCount = collisions.reduce((sum, [, group]) => sum + group.length, 0);
  const collapsedDifferenceCount = collisions.reduce((sum, [, group]) => sum + group.length - 1, 0);
  const structuralIndexes = new Set();
  for (const listIndex of japaneseDescriptions.keys()) {
    if (!englishDescriptions.has(listIndex)) structuralIndexes.add(listIndex);
  }
  for (const listIndex of englishDescriptions.keys()) {
    if (!japaneseDescriptions.has(listIndex)) structuralIndexes.add(listIndex);
  }
  const affectedIndexes = [
    ...new Set([
      ...collisions.flatMap(([, group]) => group.map(({ listIndex }) => listIndex)),
      ...structuralIndexes,
    ]),
  ].sort((left, right) => left - right);
  const collisionIndexes = [
    ...new Set(collisions.flatMap(([, group]) => group.map(({ listIndex }) => listIndex))),
  ].sort((left, right) => left - right);

  const affectedItemCount =
    collisionItemCount + japaneseOnlyDescriptionCount + missingJapaneseDescriptionCount;
  const document = {
    file,
    route: `/docs/awesome/${version}/ja/${file.replace(/\.md$/, '')}/`,
    alignedDescriptionCount: pairs.length,
    collisionItemCount,
    collapsedDifferenceCount,
    collisionGroupCount: collisions.length,
    collisionRatio: pairs.length > 0 ? Number((collisionItemCount / pairs.length).toFixed(4)) : 0,
    largestCollisionGroup:
      collisions.length > 0 ? Math.max(...collisions.map(([, group]) => group.length)) : 0,
    japaneseOnlyDescriptionCount,
    missingJapaneseDescriptionCount,
    affectedItemCount,
    affectedIndexes,
    collisionIndexes,
    structuralIndexes: [...structuralIndexes].sort((left, right) => left - right),
    severity: severity(affectedItemCount),
    detection: isConfirmed ? 'structural-or-exact-collision' : 'normalized-only-review',
  };
  document.sampleGroups = collisions.slice(0, 10).map(([japaneseTemplate, group]) => ({
    japaneseTemplate,
    englishExamples: [...new Set(group.map(({ english }) => english))].slice(0, 3),
  }));
  if (reviewedFalsePositives.has(file)) reviewedFalsePositiveDocuments.push(document);
  else if (isConfirmed) documents.push(document);
  else reviewDocuments.push(document);
}

for (const collection of [documents, reviewDocuments, reviewedFalsePositiveDocuments]) {
  collection.sort(
    (left, right) =>
      right.affectedItemCount - left.affectedItemCount || left.file.localeCompare(right.file)
  );
}

const severityCounts = Object.fromEntries(
  ['critical', 'high', 'medium', 'low'].map((level) => [
    level,
    documents.filter((document) => document.severity === level).length,
  ])
);

const report = {
  schemaVersion: 1,
  generatedAt: '2026-08-22',
  snapshot: version,
  detectionRule:
    '同一ページの同じ位置にある英語と日本語の説明を比較し、相異なる複数の英語説明が完全に同一の日本語説明へ収束した文書を候補とする。',
  reviewRule:
    '主題名と付加参照だけを除いて同一になる日本語説明も類似定型の要確認候補とする。完全一致がない文書は自動確定しない。',
  severityRule: {
    critical: 'collisionItemCount >= 500',
    high: 'collisionItemCount >= 100',
    medium: 'collisionItemCount >= 20',
    low: 'collisionItemCount < 20',
  },
  summary: {
    japanesePageCount: japaneseFiles.length,
    comparablePageCount,
    pagesWithoutComparableInlineDescriptions: japaneseFiles.length - comparablePageCount,
    alignedDescriptionCount,
    affectedPageCount: documents.length,
    reviewCandidatePageCount: reviewDocuments.length,
    reviewedFalsePositivePageCount: reviewedFalsePositiveDocuments.length,
    totalCandidatePageCount:
      documents.length + reviewDocuments.length + reviewedFalsePositiveDocuments.length,
    collisionItemCount: documents.reduce((sum, document) => sum + document.collisionItemCount, 0),
    japaneseOnlyDescriptionCount: documents.reduce(
      (sum, document) => sum + document.japaneseOnlyDescriptionCount,
      0
    ),
    missingJapaneseDescriptionCount: documents.reduce(
      (sum, document) => sum + document.missingJapaneseDescriptionCount,
      0
    ),
    collapsedDifferenceCount: documents.reduce(
      (sum, document) => sum + document.collapsedDifferenceCount,
      0
    ),
    severityCounts,
  },
  documents,
  reviewDocuments,
  reviewedFalsePositiveDocuments,
};

const serialized = `${JSON.stringify(report, null, 2)}\n`;
if (outputPath) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, serialized);
  console.log(
    `Awesome template description audit: ${documents.length} affected pages, ${reviewDocuments.length} review candidates`
  );
} else {
  process.stdout.write(serialized);
}
