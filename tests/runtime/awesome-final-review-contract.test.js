import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '../..');
const notes = path.join(root, 'docs/notes/document-import/awesome');
const queue = JSON.parse(fs.readFileSync(path.join(notes, 'FINAL_REVIEW_QUEUE.json'), 'utf8'));

test('Awesome最終レビューキューは計画9.4の標本と証拠を固定する', () => {
  assert.equal(queue.counts.total, queue.items.length);
  assert.equal(queue.counts.japaneseFullPageReviews, 365);
  assert.equal(queue.counts.exclusionReviews, 2);
  assert.equal(queue.counts.pending, 0);
  assert.equal(queue.counts.approved, queue.items.length);
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

test('Awesome包括レビュー証明は全ページとバッチを完了扱いにする', () => {
  const output = execFileSync(
    process.execPath,
    ['scripts/importers/awesome/sync-awesome-final-review.mjs'],
    { cwd: root, encoding: 'utf8' }
  );
  assert.match(output, /365\/365 pages/);
  assert.match(output, /0 pending/);

  const completeOutput = execFileSync(
    process.execPath,
    ['scripts/importers/awesome/sync-awesome-final-review.mjs', '--require-complete'],
    { cwd: root, encoding: 'utf8' }
  );
  assert.match(completeOutput, /37\/37 batches/);
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
