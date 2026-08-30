#!/usr/bin/env node
import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const notesRoot = path.join(rootDir, 'docs/notes/document-import/awesome');
const outputRoot = path.join(notesRoot, 'review');
const planPath = path.join(outputRoot, 'CROSS_SNAPSHOT_FINAL_REVIEW_PLAN.json');
const runbookPath = path.join(outputRoot, 'HUMAN_REVIEW_RUNBOOK.md');
const signoffTemplatePath = path.join(
  outputRoot,
  'CROSS_SNAPSHOT_FINAL_REVIEW_SIGNOFF_TEMPLATE.json'
);
const snapshots = ['v2026-08-20', 'v2026-08-23'];
const batchSize = 25;
const check = process.argv.includes('--check');

const readJson = (pathname) => JSON.parse(fs.readFileSync(pathname, 'utf8'));
const stableJson = (value) => `${JSON.stringify(value, null, 2)}\n`;
const queues = Object.fromEntries(
  snapshots.map((snapshot) => [
    snapshot,
    readJson(path.join(notesRoot, 'snapshots', snapshot, 'FINAL_REVIEW_QUEUE.json')),
  ])
);

const pendingBySnapshot = Object.fromEntries(
  snapshots.map((snapshot) => {
    const preAutomatedResultsPath = path.join(
      notesRoot,
      'snapshots',
      snapshot,
      'PRE_AUTOMATED_FINAL_REVIEW_RESULTS.json'
    );
    const preAutomatedResults = fs.existsSync(preAutomatedResultsPath)
      ? readJson(preAutomatedResultsPath)
      : { reviews: [] };
    const previouslyApproved = new Set(
      (preAutomatedResults.reviews ?? [])
        .filter((review) => review.decision === 'approved')
        .map((review) => `${review.id}:${review.evidenceHash}`)
    );
    return [
      snapshot,
      queues[snapshot].items.filter(
        (item) => !previouslyApproved.has(`${item.id}:${item.evidenceHash}`)
      ),
    ];
  })
);
const unitsByEvidence = new Map();

for (const snapshot of snapshots.toReversed()) {
  for (const item of pendingBySnapshot[snapshot]) {
    const key = `${item.id}:${item.evidenceHash}`;
    const existing = unitsByEvidence.get(key);
    if (existing) {
      existing.snapshots.unshift(snapshot);
      existing.queueItems[snapshot] = item.id;
      continue;
    }
    unitsByEvidence.set(key, {
      kind: item.kind,
      category: item.category ?? null,
      page: item.page ?? null,
      sourceId: item.sourceId ?? null,
      location: item.location ?? null,
      reason: item.reason,
      evidenceHash: item.evidenceHash,
      evidence: item.evidence,
      snapshots: [snapshot],
      queueItems: { [snapshot]: item.id },
    });
  }
}

const kindOrder = [
  'japanese-full-page-semantic-review',
  'english-canonical-sample-review',
  'exclusion-review',
];
const reviewUnits = [...unitsByEvidence.values()].sort((left, right) => {
  const kindDifference = kindOrder.indexOf(left.kind) - kindOrder.indexOf(right.kind);
  if (kindDifference) return kindDifference;
  return `${left.category ?? ''}/${left.page ?? ''}/${left.sourceId ?? ''}`.localeCompare(
    `${right.category ?? ''}/${right.page ?? ''}/${right.sourceId ?? ''}`
  );
});

const batches = [];
for (const kind of kindOrder) {
  const items = reviewUnits.filter((item) => item.kind === kind);
  for (let index = 0; index < items.length; index += batchSize) {
    const batchItems = items.slice(index, index + batchSize);
    batches.push({
      batchNumber: batches.length + 1,
      kind,
      itemCount: batchItems.length,
      items: batchItems.map((item) => ({
        page: item.page,
        sourceId: item.sourceId,
        evidenceHash: item.evidenceHash,
        snapshots: item.snapshots,
        queueItems: item.queueItems,
      })),
    });
  }
}

const sharedUnits = reviewUnits.filter((item) => item.snapshots.length > 1);
const plan = {
  schemaVersion: 1,
  snapshots: Object.fromEntries(
    snapshots.map((snapshot) => [
      snapshot,
      {
        queueEvidenceHash: queues[snapshot].evidenceHash,
        pendingItems: pendingBySnapshot[snapshot].length,
      },
    ])
  ),
  policy: {
    identity: '同じ項目IDとevidenceHashを持つ項目だけを同一レビュー単位として扱う。',
    approval:
      '本計画は承認を生成しない。人手で原文・訳文・証拠を確認した後、各snapshotのFINAL_REVIEW_RESULTS.jsonへ署名する。',
    invalidation: '本文または証拠が変わった場合は本計画を再生成し、古いレビュー結果を継承しない。',
  },
  counts: {
    rawPendingItems: snapshots.reduce(
      (sum, snapshot) => sum + pendingBySnapshot[snapshot].length,
      0
    ),
    uniqueReviewUnits: reviewUnits.length,
    sharedReviewUnits: sharedUnits.length,
    snapshotSpecificReviewUnits: reviewUnits.length - sharedUnits.length,
    japaneseFullPageReviews: reviewUnits.filter(
      (item) => item.kind === 'japanese-full-page-semantic-review'
    ).length,
    englishCanonicalSamples: reviewUnits.filter(
      (item) => item.kind === 'english-canonical-sample-review'
    ).length,
    exclusionReviews: reviewUnits.filter((item) => item.kind === 'exclusion-review').length,
    batches: batches.length,
    maximumBatchSize: batchSize,
  },
  reviewUnits,
  batches,
};
const planJson = stableJson(plan);
const signoffTemplate = {
  schemaVersion: 1,
  reviewPlanSha256: crypto.createHash('sha256').update(planJson).digest('hex'),
  queueEvidenceHashes: Object.fromEntries(
    snapshots.map((snapshot) => [snapshot, queues[snapshot].evidenceHash])
  ),
  decision: 'pending',
  reviewer: '',
  reviewedAt: '',
  notes: '',
  reviewedBatches: [],
  changesRequested: [],
};

const runbook = `# Awesome 最終人手レビュー実行手順

この手順は、\`v2026-08-20\`と\`v2026-08-23\`の未完了レビューを、項目IDと証拠ハッシュが完全一致する範囲だけ重複排除して実施するためのものである。レビューの正本は各snapshotの\`FINAL_REVIEW_QUEUE.json\`と\`FINAL_REVIEW_RESULTS.json\`であり、本資料だけでは承認済みにならない。

## 現在の対象

- キュー上の保留: ${plan.counts.rawPendingItems}件
- 証拠重複排除後: ${plan.counts.uniqueReviewUnits}件
- 両snapshotで共通のレビュー単位: ${plan.counts.sharedReviewUnits}件
- 日本語全文: ${plan.counts.japaneseFullPageReviews}件
- 英語定本標本: ${plan.counts.englishCanonicalSamples}件
- 除外断片: ${plan.counts.exclusionReviews}件
- 作業バッチ: ${plan.counts.batches}（最大${batchSize}件）

## 実施方法

1. \`CROSS_SNAPSHOT_FINAL_REVIEW_PLAN.json\`の\`batches\`を番号順に確認する。
2. 日本語全文では、同じページの固定英語定本と日本語ページを対照し、対象範囲、否定、数値、固有名詞、URL、技術用語、自然な日本語を確認する。
3. 英語定本標本では固定取得元と定本の内容、正規化、ライセンス、帰属を確認する。
4. 除外断片では除外理由と本文への非混入を確認する。
5. 修正が必要なら承認せず本文を直し、翻訳検査、機械監査、キュー、本計画を再生成する。
6. 全33バッチを確認したら\`CROSS_SNAPSHOT_FINAL_REVIEW_SIGNOFF_TEMPLATE.json\`を作業用結果へ複製し、レビュー者、UTC日時、所見、確認済みバッチ番号を記録する。テンプレート自体は編集しない。
7. 署名内容を各snapshotの\`FINAL_REVIEW_RESULTS.json\`へ反映し、\`awesome:audit-machine --check\`と\`awesome:sync-final-review --require-complete\`を実行する。

## 証拠の扱い

- 同一レビューとして扱えるのは項目IDと\`evidenceHash\`がともに一致する場合だけである。
- \`snapshots\`が二版を含む単位は、一度の内容確認結果を両版の同一証拠へ署名できる。
- 署名前に各キューの\`evidenceHash\`が本計画の値と一致することを再確認する。
`;

const outputs = [
  [planPath, planJson],
  [runbookPath, runbook],
  [signoffTemplatePath, stableJson(signoffTemplate)],
];

if (check) {
  for (const [pathname, expected] of outputs) {
    if (!fs.existsSync(pathname) || fs.readFileSync(pathname, 'utf8') !== expected) {
      throw new Error(`レビュー計画成果物が一致しません: ${pathname}`);
    }
  }
  console.log(
    `Awesome cross-snapshot review plan: OK (${plan.counts.uniqueReviewUnits} unique units, ${plan.counts.batches} batches)`
  );
} else {
  fs.mkdirSync(outputRoot, { recursive: true });
  for (const [pathname, content] of outputs) fs.writeFileSync(pathname, content);
  console.log(
    `Generated Awesome cross-snapshot review plan (${plan.counts.uniqueReviewUnits} unique units, ${plan.counts.batches} batches)`
  );
}
