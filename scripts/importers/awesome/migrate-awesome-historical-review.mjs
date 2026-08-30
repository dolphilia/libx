#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { notesDir, readJson, rootDir, snapshotVersion, writeJsonAtomic } from './common.mjs';

if (snapshotVersion !== 'v2026-08-20') {
  throw new Error('履歴レビュー継承の対象はv2026-08-20だけです');
}

const write = process.argv.includes('--write');
const evidence = readJson(
  path.join(notesDir, 'HISTORICAL_REVIEW_EVIDENCE_RECONCILIATION.json')
);
const currentQueue = readJson(path.join(notesDir, 'FINAL_REVIEW_QUEUE.json'));
const baseline = evidence.publishedBaseline;
const readBaseline = (gitPath) =>
  JSON.parse(
    execFileSync('git', ['show', `${baseline.gitCommit}:${gitPath}`], {
      cwd: rootDir,
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
    })
  );
const baselineQueue = readBaseline(baseline.finalReviewQueueGitPath);
const baselineResults = readBaseline(baseline.finalReviewResultsGitPath);
const aggregate = baselineResults.aggregateReview;

if (
  aggregate?.scope !== 'all-review-items' ||
  aggregate.itemCount !== baselineQueue.items.length ||
  aggregate.evidenceHash !== baselineQueue.evidenceHash ||
  aggregate.decision !== 'approved'
) {
  throw new Error('公開基準点の包括レビュー証明がキューと一致しません');
}

const baselineById = new Map(baselineQueue.items.map((item) => [item.id, item]));
const changedFields = (baselineItem, currentItem) => {
  if (!baselineItem) return ['new-item'];
  const fields = [];
  const evidenceKeys = new Set([
    ...Object.keys(baselineItem.evidence ?? {}),
    ...Object.keys(currentItem.evidence ?? {}),
  ]);
  for (const key of evidenceKeys) {
    if (baselineItem.evidence?.[key] !== currentItem.evidence?.[key]) fields.push(key);
  }
  for (const key of ['kind', 'page', 'sourceId', 'location', 'reason']) {
    if (baselineItem[key] !== currentItem[key]) fields.push(key);
  }
  return fields;
};
const classifyPending = (item, fields) => {
  if (fields.includes('new-item')) {
    return {
      classification: 'new-review-item',
      reason: '公開時点のレビューキューに存在しないため、新規の人手レビューが必要。',
    };
  }
  const japaneseChanged = fields.includes('japanesePageSha256');
  const englishChanged = fields.includes('englishCanonicalSha256');
  if (japaneseChanged && englishChanged) {
    return {
      classification: 'english-and-japanese-content-changed',
      reason: '英語定本と日本語ページの双方が公開時点から変わり、旧全文レビューの証拠を継承できない。',
    };
  }
  if (japaneseChanged) {
    return {
      classification: 'japanese-content-changed',
      reason: '日本語ページが公開時点から変わり、定型説明の機械監査合格だけでは全文の人手意味レビューを証明できない。',
    };
  }
  if (englishChanged) {
    return {
      classification: 'english-canonical-changed',
      reason: '英語定本が公開時点から変わり、旧標本レビューの証拠を継承できない。',
    };
  }
  return {
    classification: 'review-definition-changed',
    reason: 'レビュー項目の定義または理由が公開時点から変わり、証拠ハッシュが一致しない。',
  };
};
const inherited = currentQueue.items
  .filter((item) => baselineById.get(item.id)?.evidenceHash === item.evidenceHash)
  .map((item) => ({
    id: item.id,
    evidenceHash: item.evidenceHash,
    decision: 'approved',
    reviewer: aggregate.reviewer,
    reviewedAt: aggregate.reviewedAt,
    notes: `公開時点の包括レビュー証明から継承。現在の項目IDと証拠ハッシュが一致する。${aggregate.notes}`,
  }));
const pending = currentQueue.items
  .filter((item) => baselineById.get(item.id)?.evidenceHash !== item.evidenceHash)
  .map((item) => {
    const baselineItem = baselineById.get(item.id);
    const fields = changedFields(baselineItem, item);
    return {
      id: item.id,
      kind: item.kind,
      page: item.page,
      sourceId: item.sourceId,
      changedFields: fields,
      ...classifyPending(item, fields),
      baselineEvidenceHash: baselineItem?.evidenceHash ?? null,
      currentEvidenceHash: item.evidenceHash,
      baselineEvidence: baselineItem?.evidence ?? null,
      currentEvidence: item.evidence,
      decision: 'pending-human-review',
    };
  });
const countBy = (items, key) =>
  Object.fromEntries(
    [...new Set(items.map((item) => item[key]))]
      .sort((left, right) => left.localeCompare(right))
      .map((value) => [value, items.filter((item) => item[key] === value).length])
  );
const result = {
  schemaVersion: 1,
  snapshotVersion,
  migration: {
    sourceGitCommit: baseline.gitCommit,
    sourceQueueEvidenceHash: baselineQueue.evidenceHash,
    sourceAggregateEvidenceHash: aggregate.evidenceHash,
    inheritedItems: inherited.length,
    pendingItems: currentQueue.items.length - inherited.length,
    rule: '公開時点の項目IDと証拠ハッシュが現在のキューに完全一致する項目だけを継承する。',
  },
  reviews: inherited,
};
const classification = {
  schemaVersion: 1,
  snapshotVersion,
  source: {
    gitCommit: baseline.gitCommit,
    baselineQueueEvidenceHash: baselineQueue.evidenceHash,
    currentQueueEvidenceHash: currentQueue.evidenceHash,
  },
  policy: {
    inheritance: '項目IDと証拠ハッシュが公開時点のキューに完全一致する場合だけ旧包括承認を継承する。',
    remediationEvidence:
      '定型説明監査は修正対象0を証明するが、TRANSLATION_REVIEW_LOG.jsonの日本語レビューはpendingであり、変更後ページの全文人手意味レビューとしては使用しない。',
  },
  summary: {
    baselineItems: baselineQueue.items.length,
    currentItems: currentQueue.items.length,
    inheritedItems: inherited.length,
    pendingItems: pending.length,
    pendingByKind: countBy(pending, 'kind'),
    pendingByClassification: countBy(pending, 'classification'),
  },
  pendingItems: pending,
};

if (write) {
  writeJsonAtomic(path.join(notesDir, 'FINAL_REVIEW_RESULTS.json'), result);
  writeJsonAtomic(path.join(notesDir, 'HISTORICAL_REVIEW_DIFF_CLASSIFICATION.json'), classification);
}
console.log(
  `Awesome historical review migration: OK (${inherited.length} inherited, ${result.migration.pendingItems} pending${write ? ', written' : ''})`
);
