#!/usr/bin/env node
import path from 'node:path';
import { notesDir, readJson, writeJsonAtomic } from './common.mjs';

const write = process.argv.includes('--write');
const requireComplete = process.argv.includes('--require-complete');
const queuePath = path.join(notesDir, 'FINAL_REVIEW_QUEUE.json');
const statusPath = path.join(notesDir, 'BATCH_STATUS.json');
const queue = readJson(queuePath);
const status = readJson(statusPath);
const errors = [];

if (queue.snapshotVersion !== status.snapshotVersion) {
  errors.push('最終レビューキューとバッチ状態のsnapshotVersionが一致しません');
}

const itemsBySource = new Map();
for (const item of queue.items ?? []) {
  const items = itemsBySource.get(item.sourceId) ?? [];
  items.push(item);
  itemsBySource.set(item.sourceId, items);
}

let reviewedPages = 0;
let reviewedBatches = 0;
for (const batch of status.batches ?? []) {
  for (const sourceId of batch.sourceIds) {
    const page = batch.pages?.[sourceId];
    if (!page) {
      errors.push(`バッチのページ状態がありません: ${sourceId}`);
      continue;
    }
    const japaneseReview = (itemsBySource.get(sourceId) ?? []).find(
      (item) => item.kind === 'japanese-full-page-semantic-review'
    );
    if (!japaneseReview) {
      errors.push(`日本語全文レビュー項目がありません: ${sourceId}`);
      continue;
    }
    const expected = japaneseReview.status === 'approved' ? 'completed' : 'pending';
    if (page['human-reviewed'] !== expected) {
      if (write) page['human-reviewed'] = expected;
      else errors.push(`ページの人手レビュー状態がキューと一致しません: ${sourceId}`);
    }
    if (expected === 'completed') reviewedPages += 1;
  }

  const relatedItems = batch.sourceIds.flatMap((sourceId) => itemsBySource.get(sourceId) ?? []);
  const expected =
    relatedItems.length > 0 && relatedItems.every((item) => item.status === 'approved')
      ? 'completed'
      : 'pending';
  if (batch['human-reviewed'] !== expected) {
    if (write) batch['human-reviewed'] = expected;
    else errors.push(`バッチの人手レビュー状態がキューと一致しません: ${batch.batchNumber}`);
  }
  if (expected === 'completed') reviewedBatches += 1;
}

const pending = (queue.items ?? []).filter((item) => item.status === 'pending').length;
const changesRequested = (queue.items ?? []).filter(
  (item) => item.status === 'changes-requested'
).length;
if (requireComplete && (pending > 0 || changesRequested > 0)) {
  errors.push(
    `最終人手レビューが未完了です: pending=${pending}, changes-requested=${changesRequested}`
  );
}
if (
  requireComplete &&
  (status.batches ?? []).some((batch) => batch['human-reviewed'] !== 'completed')
) {
  errors.push('human-reviewedになっていない翻訳バッチがあります');
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}
if (write) writeJsonAtomic(statusPath, status);
const totalPages = (status.batches ?? []).reduce(
  (sum, batch) => sum + (batch.sourceIds?.length ?? 0),
  0
);
console.log(
  `Awesome final review status: OK (${reviewedPages}/${totalPages} pages, ${reviewedBatches}/${status.batches.length} batches, ${pending} pending, ${changesRequested} changes-requested)`
);
