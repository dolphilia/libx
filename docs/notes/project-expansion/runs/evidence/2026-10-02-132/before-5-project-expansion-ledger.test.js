import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  canStartNew, counts, hashFile, operationId, readLedger, requiredConditions,
  scoreNames, selectionHash, updateLedger, validateLedger, validateRuns,
} from '../../scripts/project-expansion/ledger.mjs';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const directory = 'docs/notes/project-expansion';
function fixture(t) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-expansion-')));
  t.after(() => fs.rmSync(root, { force: true, recursive: true }));
  fs.mkdirSync(path.join(root, directory), { recursive: true });
  fs.cpSync(path.join(repository, directory, 'schemas'), path.join(root, directory, 'schemas'), { recursive: true });
  const write = (relative, value) => {
    const file = path.join(root, relative);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, typeof value === 'string' ? value : `${JSON.stringify(value)}\n`);
    return { path: relative, sha256: hashFile(file) };
  };
  const proof = write('proof.txt', '固定した調査・レビュー証拠\n');
  const policy = JSON.parse(fs.readFileSync(path.join(repository, directory, 'POLICY.json')));
  policy.plan = proof;
  if (policy.authorization) policy.authorization = proof;
  const candidate = {
    id: 'sample', officialUrl: 'https://sample.example/', repository: 'https://example.org/sample', version: 'v1',
    scope: '公式利用ガイド一式', field: 'build', discovery: [{ route: 'related', reference: 'https://sample.example/', date: '2026-10-01' }],
    state: 'selected', conditions: Object.fromEntries(requiredConditions.map((name) => [name, { status: 'pass', reason: '固定証拠を確認', evidence: [proof] }])),
    japaneseResearch: { status: 'partial', queries: ['sample 日本語'], checkedAt: '2026-10-01', evidence: [proof] },
    scores: Object.fromEntries(scoreNames.map((name) => [name, { value: 4, reason: '確認済みの用途と根拠', evidence: [proof] }])),
    decision: '基準を満たす', resumeCondition: '証拠が変わったら再調査', nextCheckAt: null, selectionReview: null,
  };
  candidate.selectionReview = { status: 'passed', inputHash: selectionHash(candidate), evidence: [proof] };
  const scope = { description: 'ガイド一式', pages: ['guide.md'] };
  const sources = Object.fromEntries(['source', 'canonical', 'translation'].map((role) => {
    const artifact = write(`${role}.md`, `# ${role}\n\n本文\n`);
    return [role, { ...artifact, coverage: [[1, 3]] }];
  }));
  const review = { scope: scope.pages, pages: [{ id: 'guide.md', status: 'passed', method: 'ai-content-review', model: 'configured:gpt-6.1-sol;runtime:unavailable', reviewedAt: '2026-10-01', separateReviewPass: true, findings: ['原文、定本、日本語を全文照合'], ...sources }] };
  const reviewManifest = write('review.json', review);
  write('apps/sample/src/content/docs/v1/en/guide.md', '# canonical\n\n本文\n');
  write('apps/sample/src/content/docs/v1/ja/guide.md', '# translation\n\n本文\n');
  const operation = {
    id: operationId('sample', 'v1', scope), candidateId: 'sample', appId: 'sample', kind: 'new', version: 'v1', scope,
    state: 'verified', lastValidStage: 'verified', publication: 'not-requested', owner: null, workspace: root,
    createdAt: '2026-10-01', ready: true, dependencies: [], artifacts: [proof], reviewManifest,
    checks: Object.fromEntries(['canonical', 'structure', 'links', 'integrity', 'build', 'display'].map((name) => [name, { status: 'passed', evidence: [proof] }])),
    nextAction: '公開指示まで待機', resumeCondition: '明示指示', excludedFromDeployment: true,
  };
  const ledger = { policy, candidates: { schemaVersion: 1, revision: 0, candidates: [candidate] }, operations: { schemaVersion: 1, revision: 0, projects: [], operations: [operation] } };
  const save = () => { for (const [name, document] of Object.entries(ledger)) write(`${directory}/${name.toUpperCase()}.json`, document); };
  save();
  return { root, ledger, candidate, operation, proof, write, save, review };
}

test('権利unknownと根拠未保存は得点で相殺できない', (t) => {
  const f = fixture(t);
  assert.deepEqual(validateLedger(f.root, f.ledger), []);
  f.candidate.conditions.rights.status = 'unknown';
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('rights が未合格')));
  f.candidate.conditions.rights.status = 'pass';
  f.candidate.conditions.rights.evidence = [];
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('根拠がありません')));
});

test('継続的公開承認は有効な指示を必要とし、全文レビューや検査を免除しない', (t) => {
  const f = fixture(t);
  f.ledger.policy.externalPublication = 'authorized-verified-awaiting-release';
  const authorization = f.write('authorization.json', { instruction: '正規公開待ちは追加承認なしで公開' });
  f.ledger.policy.authorization = authorization;
  assert.deepEqual(validateLedger(f.root, f.ledger), []);
  f.write('authorization.json', { instruction: 'changed' });
  assert.ok(validateLedger(f.root, f.ledger).some(error => error.includes('運用方針のユーザー指示: ハッシュ失効')));
  f.ledger.policy.authorization = f.proof;
  delete f.ledger.policy.authorization;
  assert.ok(validateLedger(f.root, f.ledger).some(error => error.includes('authorization')));
  f.ledger.policy.authorization = f.proof;
  f.operation.checks.display.status = 'pending';
  assert.ok(validateLedger(f.root, f.ledger).some(error => error.includes('表示検証 display 未完了')));
  f.operation.checks.display.status = 'passed';
  f.operation.reviewManifest = null;
  assert.ok(validateLedger(f.root, f.ledger).some(error => error.includes('内容レビュー記録なし')));
});

test('重複発見と同じアプリの重複生成を拒否する', (t) => {
  const f = fixture(t);
  f.ledger.candidates.candidates.push({ ...f.candidate, id: 'mirror' });
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('候補の重複')));
  f.ledger.candidates.candidates.pop();
  f.ledger.candidates.candidates.push({ ...f.candidate, id: 'case-variant', repository: 'https://EXAMPLE.ORG/sample.git/' });
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('候補の重複')));
  f.ledger.candidates.candidates.pop();
  const scope = { description: '別の範囲', pages: ['guide.md'] };
  f.ledger.operations.operations.push({ ...f.operation, scope, id: operationId('sample', 'v1', scope) });
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('同じアプリの重複生成')));
});

test('検証済み新規案件を保守登録でき、別案件の重複生成と不正な登録元を拒否する', (t) => {
  const f = fixture(t);
  const project = {
    id: 'sample', originOperationId: f.operation.id,
    officialUrl: f.candidate.officialUrl, repository: f.candidate.repository, version: 'v1',
    sourceManifest: f.proof, contentMap: f.proof,
    canonicalFiles: [{ path: 'apps/sample/src/content/docs/v1/en/guide.md', sha256: hashFile(path.join(f.root, 'apps/sample/src/content/docs/v1/en/guide.md')) }],
    translatedFiles: [{ path: 'apps/sample/src/content/docs/v1/ja/guide.md', sha256: hashFile(path.join(f.root, 'apps/sample/src/content/docs/v1/ja/guide.md')) }],
    monitorUrls: [f.candidate.officialUrl], lastCheckedAt: null, monitorState: 'pending',
    baselineContentReview: 'not-imported', notes: '完了した新規作業を保守対象として登録',
  };
  f.ledger.operations.projects.push(project);
  assert.deepEqual(validateLedger(f.root, f.ledger), []);
  f.operation.state = 'stale';
  assert.deepEqual(validateLedger(f.root, f.ledger), []);
  f.operation.state = 'verified';
  const scope = { description: '同アプリの別取り込み', pages: ['guide.md'] };
  f.ledger.operations.operations.push({ ...f.operation, scope, id: operationId('sample', 'v1', scope) });
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('既存アプリの重複生成')));
  f.ledger.operations.operations.pop();
  project.originOperationId = 'missing';
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('登録元の検証済み新規作業がありません')));
  project.originOperationId = f.operation.id;
  f.operation.lastValidStage = 'content-reviewed';
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('登録元の検証済み新規作業がありません')));
  f.operation.lastValidStage = 'verified';
  delete project.originOperationId;
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('既存アプリの重複生成')));
});

test('Preview済み・not-requestedも公開待ちに含み、上限で新規着手を止める', (t) => {
  const f = fixture(t);
  assert.equal(canStartNew(f.ledger), true);
  const scope = { description: '既存修正', pages: ['guide.md'] };
  f.ledger.operations.operations.push({ ...f.operation, kind: 'correction', appId: 'existing', scope, id: operationId('existing', 'v1', scope), candidateId: 'existing', publication: 'preview-verified' });
  assert.equal(counts(f.ledger).awaitingRelease, 2);
  assert.equal(canStartNew(f.ledger), false);
  f.operation.publication = 'published';
  assert.equal(canStartNew(f.ledger), true);
});

test('定本・訳文変更でレビューを失効させ、機械検査では全文未確認を補えない', (t) => {
  const f = fixture(t);
  f.write('translation.md', '# 変更\n\n本文\n');
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('ハッシュ失効 translation.md')));
  f.review.pages[0].translation = { ...f.write('translation.md', '# translation\n\n本文\n'), coverage: [[1, 2]] };
  f.operation.reviewManifest = f.write('review.json', f.review);
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('全文未確認')));
  f.review.pages[0].translation.coverage = [[1, 3]];
  f.operation.reviewManifest = f.write('review.json', f.review);
  f.write('canonical.md', '# 新しい定本\n\n本文\n');
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('ハッシュ失効 canonical.md')));
});

test('レビュー保存物だけが合格していても配信本文の変更を完了扱いにしない', (t) => {
  const f = fixture(t);
  f.write('apps/sample/src/content/docs/v1/ja/guide.md', '# 別の本文\n');
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('配信本文とレビューが不一致')));
});

test('作業中のページ単位の合格も全文範囲と現在の入力を検査する', (t) => {
  const f = fixture(t);
  f.operation.state = 'canonical-ready';
  f.review.pages[0].translation.coverage = [[1, 2]];
  f.operation.reviewManifest = f.write('review.json', f.review);
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('全文未確認')));
  f.review.pages[0] = { id: 'guide.md', status: 'pending' };
  f.operation.reviewManifest = f.write('review.json', f.review);
  assert.deepEqual(validateLedger(f.root, f.ledger), []);
});

test('入力・台帳不一致、競合リビジョン、残存ロックで上書きしない', (t) => {
  const f = fixture(t);
  assert.throws(() => updateLedger(f.root, directory, 'OPERATIONS', 9, [f.proof], (document) => document), /リビジョン競合/);
  f.write('proof.txt', '他プロセスの変更\n');
  assert.throws(() => updateLedger(f.root, directory, 'OPERATIONS', 0, [f.proof], (document) => document), /ハッシュ失効/);
  assert.equal(readLedger(f.root).operations.revision, 0);
  f.write(`${directory}/OPERATIONS.json.lock`, '{"pid":123}');
  assert.throws(() => updateLedger(f.root, directory, 'OPERATIONS', 0, [], (document) => document), /EEXIST/);
  assert.ok(fs.existsSync(path.join(f.root, directory, 'OPERATIONS.json.lock')));
});

test('部分レビューの集計はページ状態の誤更新を検出する', (t) => {
  const f = fixture(t);
  f.operation.state = 'canonical-ready';
  f.review.completedPages = 1;
  f.review.unreviewedPages = 0;
  f.operation.reviewManifest = f.write('review.json', f.review);
  assert.deepEqual(validateLedger(f.root, f.ledger), []);
  f.review.pages[0].status = 'needs-final-review';
  f.operation.reviewManifest = f.write('review.json', f.review);
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('進捗件数とページ状態が不一致')));
  f.review.completedPages = 0;
  f.review.unreviewedPages = 1;
  f.operation.reviewManifest = f.write('review.json', f.review);
  assert.deepEqual(validateLedger(f.root, f.ledger), []);
  f.review.unreviewedPages = 0;
  f.operation.reviewManifest = f.write('review.json', f.review);
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('進捗件数とページ状態が不一致')));
});

test('blockedも作業枠に数え、配信除外を確認しない長期保留を拒否する', (t) => {
  const f = fixture(t);
  f.operation.state = 'blocked';
  assert.equal(counts(f.ledger).activeNew, 1);
  assert.equal(canStartNew(f.ledger), false);
  f.operation.state = 'deferred';
  f.operation.excludedFromDeployment = false;
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('配信除外が不足')));
});

test('選定の前提変更で別パスの確認を失効させる', (t) => {
  const f = fixture(t);
  f.candidate.version = 'v2';
  assert.ok(validateLedger(f.root, f.ledger).some((error) => error.includes('選定照合が未完了・失効')));
});

test('正常な更新はリビジョンを進め、失敗は既存台帳を保つ', (t) => {
  const f = fixture(t);
  updateLedger(f.root, directory, 'OPERATIONS', 0, [f.proof], (document) => {
    document.operations[0].nextAction = '保存済みの成果を照合して再開';
    return document;
  });
  assert.equal(readLedger(f.root).operations.revision, 1);
  assert.throws(() => updateLedger(f.root, directory, 'OPERATIONS', 1, [f.proof], (document) => {
    document.operations[0].checks.display.status = 'pending';
    return document;
  }), /display 未完了/);
  assert.equal(readLedger(f.root).operations.revision, 1);
});

test('サイクル上限・完了日時・検査証拠を確認し、当時の出力と現行状態を区別する', (t) => {
  const f = fixture(t);
  const run = {
    schemaVersion: 1, id: 'test-run', cycle: 1, phase: '0', startedAt: '2026-10-01T00:00:00Z', endedAt: '2026-10-01T00:01:00Z', result: 'complete',
    model: { configured: 'gpt-6.1-sol', configurationEvidence: '設定', runtime: null, runtimeStatus: '未取得', localLLMUsed: false },
    tools: ['node:test'], inputs: [], outputs: [{ path: '過去に変更された本文.md', sha256: 'a'.repeat(64) }],
    discoveryIds: [], detailIds: [], newOperationIds: [], checks: [{ name: '異常系検査', status: 'passed', evidence: [f.proof] }],
    decisions: ['確認'], unresolved: [], nextAction: '次の案件', resumeCondition: '入力照合合格',
  };
  const save = () => f.write(`${directory}/runs/test-run.json`, run);
  save();
  assert.deepEqual(validateRuns(f.root, f.ledger.policy), []);
  run.detailIds = ['a', 'b', 'c', 'd']; save();
  assert.ok(validateRuns(f.root, f.ledger.policy).some((error) => error.includes('件数上限')));
  run.detailIds = []; run.endedAt = null; save();
  assert.ok(validateRuns(f.root, f.ledger.policy).some((error) => error.includes('完了日時')));
  run.endedAt = '2026-10-01T00:01:00Z'; run.checks[0].evidence = []; save();
  assert.ok(validateRuns(f.root, f.ledger.policy).some((error) => error.includes('根拠がありません')));
});
