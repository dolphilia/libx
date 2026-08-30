#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const notesRoot = path.join(rootDir, 'docs/notes/document-import/awesome');
const reviewRoot = path.join(notesRoot, 'review');
const decisionPath = path.join(reviewRoot, 'REVIEW_GATE_DECISION.json');
const evidencePath = path.join(reviewRoot, 'AUTOMATED_FINAL_REVIEW_EVIDENCE.json');
const snapshots = ['v2026-08-20', 'v2026-08-23'];
const check = process.argv.includes('--check');
const readJson = (pathname) => JSON.parse(fs.readFileSync(pathname, 'utf8'));
const stableJson = (value) => `${JSON.stringify(value, null, 2)}\n`;
const sha256File = (pathname) =>
  crypto.createHash('sha256').update(fs.readFileSync(pathname)).digest('hex');

const decision = readJson(decisionPath);
if (
  decision.humanSignatureRequired !== false ||
  decision.replacementReview !== 'automated-evidence-review' ||
  decision.previewDeploymentApproved !== true ||
  decision.productionDeploymentApproved !== false ||
  typeof decision.automatedReviewer !== 'string' ||
  !decision.automatedReviewer.trim() ||
  !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(decision.decidedAt)
) {
  throw new Error('レビューゲート変更またはPreview承認の管理者決定が不正です');
}

const snapshotEvidence = {};
const resultOutputs = [];
for (const snapshot of snapshots) {
  const snapshotRoot = path.join(notesRoot, 'snapshots', snapshot);
  const queuePath = path.join(snapshotRoot, 'FINAL_REVIEW_QUEUE.json');
  const auditPath = path.join(snapshotRoot, 'MACHINE_AUDIT.json');
  const batchStatusPath = path.join(snapshotRoot, 'BATCH_STATUS.json');
  const templateAuditPath = path.join(snapshotRoot, 'TEMPLATE_DESCRIPTION_AUDIT.json');
  const resultsPath = path.join(snapshotRoot, 'FINAL_REVIEW_RESULTS.json');
  const queue = readJson(queuePath);
  const audit = readJson(auditPath);
  const templateAudit = readJson(templateAuditPath);

  if (queue.snapshotVersion !== snapshot || audit.snapshotVersion !== snapshot) {
    throw new Error(`snapshot証拠が一致しません: ${snapshot}`);
  }
  if ((audit.errors ?? []).length > 0) {
    throw new Error(`機械監査エラーが残っています: ${snapshot}`);
  }
  if (
    templateAudit.summary?.affectedPageCount !== 0 ||
    templateAudit.summary?.reviewCandidatePageCount !== 0
  ) {
    throw new Error(`説明監査の未解決が残っています: ${snapshot}`);
  }

  const notes =
    `管理者決定${decision.decisionId}により人手署名を必須条件から外し、` +
    `キュー全${queue.items.length}件を固定証拠ハッシュ、翻訳完全性、説明監査、機械監査、` +
    'ビルド、リンク、integrity、asset、runtime、smokeの自動証拠レビューで承認した。' +
    '人手で自然さを確認済みであることを示す判定ではない。';
  const result = {
    $schema: './schemas/final-review-results.schema.json',
    schemaVersion: 1,
    snapshotVersion: snapshot,
    aggregateReview: {
      scope: 'all-review-items',
      itemCount: queue.items.length,
      evidenceHash: queue.evidenceHash,
      decision: 'approved',
      reviewer: decision.automatedReviewer,
      reviewedAt: decision.decidedAt,
      notes,
    },
    reviews: [],
  };
  resultOutputs.push([resultsPath, stableJson(result)]);
  snapshotEvidence[snapshot] = {
    queueEvidenceHash: queue.evidenceHash,
    reviewItems: queue.items.length,
    finalReviewResultsPath: path.relative(rootDir, resultsPath),
    machineAuditSha256: sha256File(auditPath),
    batchStatusSha256: sha256File(batchStatusPath),
    finalReviewQueueSha256: sha256File(queuePath),
    templateDescriptionAuditSha256: sha256File(templateAuditPath),
    machineAuditChecks: audit.checks,
    machineAuditErrors: audit.errors.length,
  };
}

const evidence = {
  schemaVersion: 1,
  decisionId: decision.decisionId,
  decisionSha256: sha256File(decisionPath),
  reviewer: decision.automatedReviewer,
  reviewedAt: decision.decidedAt,
  reviewMode: decision.replacementReview,
  limitation:
    '人手による自然さの署名ではない。管理者が明示的に緩和した条件に基づく自動証拠レビューである。',
  snapshots: snapshotEvidence,
};
const outputs = [...resultOutputs, [evidencePath, stableJson(evidence)]];

if (check) {
  for (const [pathname, expected] of outputs) {
    if (!fs.existsSync(pathname) || fs.readFileSync(pathname, 'utf8') !== expected) {
      throw new Error(`自動レビュー成果物が一致しません: ${pathname}`);
    }
  }
  console.log('Awesome automated final review: OK (2 snapshots, check)');
} else {
  const historicalResults = path.join(
    notesRoot,
    'snapshots/v2026-08-20/FINAL_REVIEW_RESULTS.json'
  );
  const archivePath = path.join(
    notesRoot,
    'snapshots/v2026-08-20/PRE_AUTOMATED_FINAL_REVIEW_RESULTS.json'
  );
  if (!fs.existsSync(archivePath)) fs.copyFileSync(historicalResults, archivePath);
  for (const [pathname, content] of outputs) {
    fs.mkdirSync(path.dirname(pathname), { recursive: true });
    fs.writeFileSync(pathname, content);
  }
  console.log('Recorded Awesome automated final review (2 snapshots)');
}
