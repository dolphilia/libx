import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '../..');
const notesRoot = path.join(root, 'docs/notes/document-import/awesome');
const migration = JSON.parse(
  fs.readFileSync(
    path.join(notesRoot, 'migration/SNAPSHOT_ARTIFACT_MIGRATION.json'),
    'utf8'
  )
);

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

test('Awesome旧直下証拠は版別移行表へハッシュ付きで収録されている', () => {
  const legacyArtifacts = fs
    .readdirSync(notesRoot, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .sort();
  assert.deepEqual(
    migration.mappings.map((entry) => entry.artifact),
    legacyArtifacts
  );

  for (const entry of migration.mappings) {
    assert.equal(sha256(path.join(root, entry.legacyPath)), entry.legacySha256);
    for (const target of entry.targets) {
      assert.ok(migration.snapshots.includes(target.snapshot));
      assert.match(target.targetSha256, /^[a-f0-9]{64}$/);
      assert.ok(fs.existsSync(path.join(root, target.targetPath)));
      assert.equal(sha256(path.join(root, target.targetPath)), target.targetSha256);
      assert.equal(
        target.relationship,
        target.targetSha256 === entry.legacySha256
          ? 'exact-copy'
          : 'version-specific-replacement'
      );
    }
  }
});

test('Awesomeの両snapshotは主要証拠を独立して保持する', () => {
  const required = [
    'SOURCES.lock.json',
    'CONTENT_MAP.json',
    'EXCLUSIONS.json',
    'BATCH_STATUS.json',
    'MACHINE_AUDIT.json',
    'FINAL_REVIEW_QUEUE.json',
    'FINAL_REVIEW_RESULTS.json',
  ];
  for (const snapshot of migration.snapshots) {
    for (const artifact of required) {
      assert.ok(
        fs.existsSync(path.join(notesRoot, 'snapshots', snapshot, artifact)),
        `${snapshot}/${artifact}が必要です`
      );
    }
  }
  assert.ok(
    fs.existsSync(
      path.join(
        notesRoot,
        'snapshots/v2026-08-20/HISTORICAL_CANONICAL_MANIFEST.json'
      )
    )
  );
});

test('履歴版レビューの公開時点証拠と失効後証拠を混同しない', () => {
  const evidence = JSON.parse(
    fs.readFileSync(
      path.join(
        notesRoot,
        'snapshots/v2026-08-20/HISTORICAL_REVIEW_EVIDENCE_RECONCILIATION.json'
      ),
      'utf8'
    )
  );
  const baseline = evidence.publishedBaseline;
  const restored = evidence.restoredWorkingEvidence;
  const current = evidence.currentReconciledEvidence;
  const gitBlob = (gitPath) =>
    execFileSync('git', ['show', `${baseline.gitCommit}:${gitPath}`], { cwd: root });
  const hashBuffer = (value) => crypto.createHash('sha256').update(value).digest('hex');

  assert.equal(hashBuffer(gitBlob(baseline.finalReviewQueueGitPath)), baseline.finalReviewQueueBlobSha256);
  assert.equal(
    hashBuffer(gitBlob(baseline.finalReviewResultsGitPath)),
    baseline.finalReviewResultsBlobSha256
  );
  assert.notEqual(baseline.aggregateEvidenceHash, restored.queueEvidenceHash);
  assert.equal(restored.resultsAggregateEvidenceHash, baseline.aggregateEvidenceHash);
  assert.equal(baseline.standWithUkraineBannerPresent, false);
  assert.equal(restored.standWithUkraineBannerPresent, true);
  assert.equal(restored.state, 'superseded-intermediate');

  assert.equal(current.state, 'current');
  assert.equal(
    sha256(path.join(root, current.finalReviewQueuePath)),
    current.finalReviewQueueSha256
  );
  assert.equal(
    sha256(path.join(root, current.finalReviewResultsPath)),
    current.finalReviewResultsSha256
  );
  assert.equal(
    sha256(path.join(root, current.reviewDiffClassificationPath)),
    current.reviewDiffClassificationSha256
  );
  assert.equal(
    sha256(path.join(root, current.historicalCanonicalManifestPath)),
    current.historicalCanonicalManifestSha256
  );
  assert.equal(current.reviewItems, 417);
  assert.equal(current.inheritedApprovedItems, 305);
  assert.equal(current.automatedEvidenceApprovedItems, 112);
  assert.equal(current.pendingItems, 0);
  assert.equal(current.reviewMode, 'automated-evidence-review');
  assert.equal(current.standWithUkraineBannerPresent, false);

  const classification = JSON.parse(
    fs.readFileSync(path.join(root, current.reviewDiffClassificationPath), 'utf8')
  );
  assert.deepEqual(classification.summary.pendingByKind, {
    'english-canonical-sample-review': 1,
    'exclusion-review': 1,
    'japanese-full-page-semantic-review': 110,
  });
  assert.equal(
    classification.pendingItems.every(
      (item) => item.decision === 'pending-human-review'
    ),
    true
  );
});

test('履歴版定本の検証・正規化入力回復は新版snapshotを参照しない', () => {
  const scriptPath = path.join(
    root,
    'scripts/importers/awesome/restore-awesome-historical-canonical.mjs'
  );
  const source = fs.readFileSync(scriptPath, 'utf8');
  assert.equal(source.includes('v2026-08-23'), false);
  execFileSync(
    process.execPath,
    [scriptPath, '--snapshot=v2026-08-20', '--check'],
    { cwd: root, stdio: 'pipe' }
  );
});
