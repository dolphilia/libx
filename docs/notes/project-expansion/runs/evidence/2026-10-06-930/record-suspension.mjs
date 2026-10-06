import fs from 'node:fs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readLedger, updateLedger, hashFile, report, validateLedger } from '../../../../../../scripts/project-expansion/ledger.mjs';

const root = process.cwd();
const base = 'docs/notes/project-expansion';
const evidence = `${base}/runs/evidence/2026-10-06-930`;
const progressPath = 'docs/notes/document-import/gnu-time/v1-10/PROGRESS.json';
const workspace = '/private/tmp/libx-gnu-time-formal-928';
const read = path => JSON.parse(fs.readFileSync(path));
const write = (path, value) => fs.writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
const ref = path => ({ path, sha256: hashFile(path) });
const at = new Date().toISOString();
const ledger = readLedger(root);
const runPath = `${base}/runs/2026-10-06-930-gnu-time-publication.json`;
const run = read(runPath);
const ci = read(`${evidence}/CI_STATUS.json`);
assert.equal(ci.runs[0].id, 37473038764);
assert.equal(ci.runs[0].conclusion, 'failure');
assert.equal(read(`${evidence}/REPAIR_FORMAT_EQUIVALENCE.json`).status, 'passed');
assert.equal(read(`${evidence}/REPAIR_OWN_OUTPUT_REUSE.json`).all49OwnOutputBytesUnchanged, true);
const changed = execFileSync('git', ['diff', '--name-only'], { cwd: workspace, encoding: 'utf8' }).trim().split('\n');
assert.deepEqual(changed, ['sites/landing/src/config/projects.config.jsonc']);
assert.equal(execFileSync('git', ['diff', '--cached', '--name-only'], { cwd: workspace, encoding: 'utf8' }).trim(), '');
fs.copyFileSync(`${evidence}/CI_STATUS.json`, `${evidence}/FAILED_PREVIEW_CI.json`);
fs.writeFileSync(`${evidence}/UNCOMMITTED_FORMAT_REPAIR.diff`, execFileSync('git', ['diff', '--', changed[0]], { cwd: workspace }));
const next = '930:目標がpausedのため追加push・公開を停止。GNU Timeはverified/awaiting-release。Preview37473038764はlanding設定のPrettier違反で失敗、deploy未実施。専用/private/tmp/libx-gnu-time-formal-928で設定値不変の書式修正だけ未commit、formatcheck/対象統合build/全49独自出力byte一致/既存出力比較は合格。再開指示後は1ファイル修正をcommit/pushしPreview再実行、新commitへ公開検証helperを結び直してartifact/HTTP/代表表示→現本番GNU gzipd192c99/57fa304cをCAS保護してProduction公開・確認。本文111単位review・522kit独立再生成は再利用する。';
write(`${evidence}/SUSPENSION.json`, {
  status: 'paused', at, reason: 'get_goal returned paused; no additional commit/push/deploy performed',
  goalComplete: false, workspace, pushedCommit: '5975d51a13062be551f12ba5042ebdfa21155d40',
  failedPreviewRun: 37473038764, deploymentPerformed: false,
  formatRepair: { changed, committed: false, pushed: false, parsedSettingsUnchanged: true, own49OutputsUnchanged: true },
  remaining: ['repair commit/push', 'Preview CI and actual artifact/HTTP/native checks', 'Production CAS/deployment and postchecks'],
  secondaryCandidate: { id: 'gnu-ed', version: '1.22.5', archiveSaved: true, extracted: false, selected: false, reviewCompleted: false, next: 'bsdtar -xOfで固定archiveの文書・通知だけ安全に抽出し、明示許諾と範囲を確認。候補調査未完・正式app未作成。' },
  nextAction: next
});
const additions = ['FAILED_PREVIEW_CI.json', 'FAILED_CI_STATIC_ANALYSIS.log', 'REPAIR_FORMAT.log', 'REPAIR_FORMAT_CHECK.log', 'REPAIR_FORMAT_EQUIVALENCE.json', 'REPAIR_INTEGRATED_BUILD.log', 'REPAIR_OWN_OUTPUT_REUSE.json', 'REPAIR_EXISTING_OUTPUT_COMPARISON.json', 'UNCOMMITTED_FORMAT_REPAIR.diff', 'SUSPENSION.json'].map(file => ref(`${evidence}/${file}`));
const progress = read(progressPath);
Object.assign(progress, { nextAction: next, publicationAttempt: { status: 'paused', failedPreviewRun: 37473038764, repairCommitted: false, productionPublished: false, evidence: ref(`${evidence}/SUSPENSION.json`) } });
write(progressPath, progress);
updateLedger(root, base, 'OPERATIONS', ledger.operations.revision, [ref(`${base}/OPERATIONS.json`), ...additions], operations => {
  const operation = operations.operations.find(item => item.appId === 'gnu-time');
  assert.equal(operation.state, 'verified');
  assert.equal(operation.publication, 'awaiting-release');
  const current = [...additions, ref(progressPath)];
  operation.artifacts = operation.artifacts.filter(item => !current.some(value => value.path === item.path)).concat(current);
  operation.nextAction = next;
  operation.resumeCondition = next;
  return operations;
});
Object.assign(run, { endedAt: at, result: 'partial', nextAction: next, resumeCondition: next });
run.outputs.push(...additions);
run.checks.push({ name: 'Initial Preview CI', status: 'failed', evidence: [ref(`${evidence}/FAILED_PREVIEW_CI.json`), ref(`${evidence}/FAILED_CI_STATIC_ANALYSIS.log`)] });
run.checks.push({ name: 'Uncommitted format repair: settings equivalent, selective build and unchanged own outputs', status: 'passed', evidence: additions.filter(item => item.path.includes('REPAIR_')) });
run.decisions.push('Goal status paused observed; preserve repair without additional commit/push/deployment.');
run.unresolved = ['修正未commit/push・Preview再実行未実施', 'Preview実artifact/HTTP/404/native未確認', 'Production公開・公開後確認未実施', 'GNU ed固定archiveと日本語調査資料のみ保存・候補判断未完'];
write(runPath, run);
const errors = validateLedger(root, readLedger(root));
write(`${evidence}/LEDGER_SUSPENSION_VALIDATION.json`, { status: errors.length ? 'failed' : 'passed', at, errors });
assert.deepEqual(errors, []);
fs.writeFileSync(`${base}/REPORT.md`, report(root, readLedger(root)));
console.log('930 suspension recorded; ledger validation errors: 0; no publication performed');
