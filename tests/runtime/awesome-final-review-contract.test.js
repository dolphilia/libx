import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '../..');
const notes = path.join(
  root,
  'docs/notes/document-import/awesome/snapshots/v2026-08-20'
);
const queue = JSON.parse(fs.readFileSync(path.join(notes, 'FINAL_REVIEW_QUEUE.json'), 'utf8'));
const crossSnapshotPlan = JSON.parse(
  fs.readFileSync(
    path.join(
      root,
      'docs/notes/document-import/awesome/review/CROSS_SNAPSHOT_FINAL_REVIEW_PLAN.json'
    ),
    'utf8'
  )
);

test('Awesome最終レビューキューは自動証拠レビュー済みの標本と証拠を固定する', () => {
  assert.equal(queue.counts.total, queue.items.length);
  assert.equal(queue.counts.japaneseFullPageReviews, 365);
  assert.equal(queue.counts.exclusionReviews, 3);
  assert.equal(queue.counts.pending, 0);
  assert.equal(queue.counts.approved, 417);
  assert.match(queue.evidenceHash, /^[a-f0-9]{64}$/);
  assert.ok(queue.items.every((item) => /^[a-f0-9]{64}$/.test(item.evidenceHash)));

  const englishSamples = queue.items.filter(
    (item) => item.kind === 'english-canonical-sample-review'
  );
  const reasons = englishSamples.flatMap((item) => item.selectionReasons);
  for (let batch = 1; batch <= 15; batch += 1) {
    assert.ok(
      reasons.includes(`batch-${batch}-minimum-sample`),
      `取得バッチ${batch}の標本が必要です`
    );
  }
  assert.ok(reasons.some((reason) => reason.startsWith('first-license-')));
  assert.ok(reasons.some((reason) => reason.startsWith('first-markdown-structure-')));
});

test('Awesome履歴レビュー同期は自動証拠レビュー後の完了状態を保持する', () => {
  const output = execFileSync(
    process.execPath,
    [
      'scripts/importers/awesome/sync-awesome-final-review.mjs',
      '--snapshot=v2026-08-20',
    ],
    { cwd: root, encoding: 'utf8' }
  );
  assert.match(output, /365\/365 pages/);
  assert.match(output, /0 pending/);

  const completeOutput = execFileSync(
    process.execPath,
    [
      'scripts/importers/awesome/sync-awesome-final-review.mjs',
      '--snapshot=v2026-08-20',
      '--require-complete',
    ],
    { cwd: root, encoding: 'utf8' }
  );
  assert.match(completeOutput, /365\/365 pages/);
});

test('両snapshotの移行前レビュー計画は同一証拠だけを重複排除する', () => {
  const queueItems = ['v2026-08-20', 'v2026-08-23'].flatMap((snapshot) => {
    const snapshotQueue = JSON.parse(
      fs.readFileSync(
        path.join(
          root,
          'docs/notes/document-import/awesome/snapshots',
          snapshot,
          'FINAL_REVIEW_QUEUE.json'
        ),
        'utf8'
      )
    );
    const preAutomatedResultsPath = path.join(
      root,
      'docs/notes/document-import/awesome/snapshots',
      snapshot,
      'PRE_AUTOMATED_FINAL_REVIEW_RESULTS.json'
    );
    const preAutomatedResults = fs.existsSync(preAutomatedResultsPath)
      ? JSON.parse(fs.readFileSync(preAutomatedResultsPath, 'utf8'))
      : { reviews: [] };
    const approvedBeforeAutomatedReview = new Set(
      preAutomatedResults.reviews
        .filter((review) => review.decision === 'approved')
        .map((review) => `${review.id}:${review.evidenceHash}`)
    );
    return snapshotQueue.items
      .filter(
        (item) => !approvedBeforeAutomatedReview.has(`${item.id}:${item.evidenceHash}`)
      )
      .map((item) => `${snapshot}:${item.id}:${item.evidenceHash}`);
  });
  const plannedItems = crossSnapshotPlan.reviewUnits.flatMap((unit) =>
    unit.snapshots.map(
      (snapshot) => `${snapshot}:${unit.queueItems[snapshot]}:${unit.evidenceHash}`
    )
  );

  assert.equal(crossSnapshotPlan.counts.rawPendingItems, 871);
  assert.equal(crossSnapshotPlan.counts.uniqueReviewUnits, 768);
  assert.equal(crossSnapshotPlan.counts.sharedReviewUnits, 103);
  assert.equal(crossSnapshotPlan.counts.batches, 33);
  assert.ok(crossSnapshotPlan.batches.every((batch) => batch.itemCount <= 25));
  assert.deepEqual(plannedItems.toSorted(), queueItems.toSorted());

  const output = execFileSync(
    process.execPath,
    ['scripts/importers/awesome/generate-awesome-cross-snapshot-review-plan.mjs', '--check'],
    { cwd: root, encoding: 'utf8' }
  );
  assert.match(output, /768 unique units, 33 batches/);
});

test('Awesome最終レビュー署名は証拠変更時に失効する', () => {
  const fixtureDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'awesome-final-review-'));
  const fixture = path.join(fixtureDirectory, 'results.json');
  const item = queue.items[0];
  fs.writeFileSync(
    fixture,
    `${JSON.stringify(
      {
        schemaVersion: 1,
        snapshotVersion: queue.snapshotVersion,
        reviews: [
          {
            id: item.id,
            evidenceHash: '0'.repeat(64),
            decision: 'approved',
            reviewer: 'runtime-test',
            reviewedAt: '2026-08-22T00:00:00Z',
            notes: '失効検査用の一時署名',
          },
        ],
      },
      null,
      2
    )}\n`
  );

  try {
    assert.throws(
      () =>
        execFileSync(
          process.execPath,
          [
            'scripts/importers/awesome/generate-awesome-machine-audit.mjs',
            '--snapshot=v2026-08-20',
            '--check',
            '--results',
            fixture,
          ],
          { cwd: root, encoding: 'utf8', stdio: 'pipe' }
        ),
      (error) => {
        assert.match(error.stderr, /証拠ハッシュが失効しています/);
        return true;
      }
    );
  } finally {
    fs.rmSync(fixtureDirectory, { recursive: true, force: true });
  }
});

test('Awesome包括レビュー証明も証拠変更時に失効する', () => {
  const fixtureDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'awesome-final-review-'));
  const fixture = path.join(fixtureDirectory, 'results.json');
  fs.writeFileSync(
    fixture,
    `${JSON.stringify(
      {
        schemaVersion: 1,
        snapshotVersion: queue.snapshotVersion,
        aggregateReview: {
          scope: 'all-review-items',
          itemCount: queue.items.length,
          evidenceHash: '0'.repeat(64),
          decision: 'approved',
          reviewer: 'runtime-test',
          reviewedAt: '2026-08-22T00:00:00Z',
          notes: '包括証明の失効検査',
        },
        reviews: [],
      },
      null,
      2
    )}\n`
  );

  try {
    assert.throws(
      () =>
        execFileSync(
          process.execPath,
          [
            'scripts/importers/awesome/generate-awesome-machine-audit.mjs',
            '--snapshot=v2026-08-20',
            '--check',
            '--results',
            fixture,
          ],
          { cwd: root, encoding: 'utf8', stdio: 'pipe' }
        ),
      (error) => {
        assert.match(error.stderr, /包括レビュー証明.*失効/);
        return true;
      }
    );
  } finally {
    fs.rmSync(fixtureDirectory, { recursive: true, force: true });
  }
});
