import fs from 'node:fs';
import path from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import Ajv from 'ajv';
import { commitPreparedPathsAtomically } from '../atomic-paths.js';
import { loadPresentationMaintenance } from './presentation-maintenance-v3.mjs';

export const requiredConditions = ['rights', 'boundary', 'fixedInput', 'selfContained', 'conversion', 'workload'];
export const scoreNames = ['additionalValue', 'practicality', 'quality', 'maintenance', 'reuse'];
export const activeStates = ['planned', 'source-locked', 'canonical-ready', 'translating', 'content-reviewed', 'blocked', 'stale'];
export const requiredChecks = ['canonical', 'structure', 'links', 'integrity', 'build', 'display'];
export const sha256 = (value) => createHash('sha256').update(value).digest('hex');
export const hashFile = (file) => sha256(fs.readFileSync(file));
export const selectionHash = (candidate) => sha256(JSON.stringify({
  officialUrl: candidate.officialUrl, repository: candidate.repository, version: candidate.version,
  scope: candidate.scope, conditions: candidate.conditions, japaneseResearch: candidate.japaneseResearch,
  scores: candidate.scores,
}));
export const operationId = (candidateId, version, scope) => `${candidateId}:${version}:${sha256(JSON.stringify(scope))}`;

// A language-tree prefix correction changes the scope-derived ID, but does not
// start another project. Permit only an exact, one-to-one normalization of an
// existing active operation; scope additions/deletions remain new starts.
function isLanguagePathNormalization(previous, next, nextIds) {
  if (nextIds.has(previous.id) || !activeStates.includes(previous.state)) return false;
  for (const field of ['kind', 'candidateId', 'appId', 'version', 'createdAt', 'workspace', 'owner']) {
    if (previous[field] !== next[field]) return false;
  }
  const prefix = `apps/${previous.appId}/src/content/docs/${previous.version}/en/`;
  if (!previous.scope.pages.length || !previous.scope.pages.every(page => page.startsWith(prefix))) return false;
  const pages = previous.scope.pages.map(page => page.slice(prefix.length));
  if (pages.some(page => !page || page.split('/').some(part => part === '..' || part === '.'))) return false;
  return JSON.stringify({ ...previous.scope, pages }) === JSON.stringify(next.scope);
}

function officialIdentity(reference) {
  const url = new URL(reference);
  const pathname = url.pathname.replace(/\/$/, '').replace(/\.git$/, '');
  return `${url.hostname.toLowerCase()}${url.hostname.toLowerCase() === 'github.com' ? pathname.toLowerCase() : pathname}`;
}

export function safePath(root, relative) {
  if (typeof relative !== 'string' || path.isAbsolute(relative) || relative.includes('\\')) throw new Error(`不正な相対パス: ${relative}`);
  const target = path.resolve(root, relative);
  if (!target.startsWith(`${path.resolve(root)}${path.sep}`)) throw new Error(`範囲外: ${relative}`);
  let current = path.resolve(root);
  for (const segment of path.relative(current, target).split(path.sep)) {
    current = path.join(current, segment);
    if (fs.existsSync(current) && fs.lstatSync(current).isSymbolicLink()) throw new Error(`symlinkは禁止: ${relative}`);
  }
  return target;
}

export function inventory(root, relative) {
  const target = safePath(root, relative);
  if (!fs.existsSync(target)) throw new Error(`入力がありません: ${relative}`);
  if (fs.statSync(target).isFile()) return [{ path: relative, sha256: hashFile(target) }];
  return fs.readdirSync(target).sort().flatMap((name) => inventory(root, `${relative}/${name}`));
}

export function readLedger(root, directory = 'docs/notes/project-expansion') {
  const read = (name) => JSON.parse(fs.readFileSync(safePath(root, `${directory}/${name}.json`), 'utf8'));
  return { policy: read('POLICY'), candidates: read('CANDIDATES'), operations: read('OPERATIONS') };
}

function checkArtifacts(root, records, errors, label, resolve = () => undefined) {
  for (const record of records ?? []) {
    try {
      if (hashFile(safePath(root, record.path)) !== record.sha256 && resolve(record) === undefined) errors.push(`${label}: ハッシュ失効 ${record.path}`);
    } catch (error) { errors.push(`${label}: ${error.message}`); }
  }
}

function evidence(root, references, errors, label, resolve) {
  if (!references?.length) { errors.push(`${label}: 根拠がありません`); return; }
  for (const reference of references) {
    // URLのみでpassを記録しない。取得証拠または調査記録を固定する。
    checkArtifacts(root, [reference], errors, label, resolve);
  }
}

export function counts(ledger) {
  const operations = ledger.operations.operations;
  const active = operations.filter((operation) => activeStates.includes(operation.state));
  return {
    verified: operations.filter((operation) => operation.state === 'verified').length,
    published: operations.filter((operation) => operation.publication === 'published').length,
    awaitingRelease: operations.filter((operation) => operation.state === 'verified' && operation.publication !== 'published').length,
    active: active.length,
    activeNew: active.filter((operation) => operation.kind === 'new').length,
    deferred: operations.filter((operation) => operation.state === 'deferred').length,
    candidateHolds: ledger.candidates.candidates.filter((candidate) => ['needs-evidence', 'deferred'].includes(candidate.state)).length,
    eligible: ledger.candidates.candidates.filter((candidate) => candidate.state === 'eligible').length,
  };
}

export function canStartNew(ledger, now = new Date()) {
  const totals = counts(ledger);
  const limits = ledger.policy.limits;
  const readyUpdates = ledger.operations.operations.filter((operation) => operation.kind !== 'new' && operation.state === 'planned' && operation.ready);
  return totals.active < limits.active && totals.activeNew < limits.activeNew && totals.awaitingRelease < limits.awaitingRelease &&
    (ledger.policy.workPriority === 'new-projects-first' || (readyUpdates.length < limits.readyUpdates && !readyUpdates.some((operation) => now - new Date(operation.createdAt) >= limits.oldUpdateDays * 86400000)));
}

export function validateRuns(root, policy, directory = 'docs/notes/project-expansion', resolve) {
  const errors = [];
  const runsPath = safePath(root, `${directory}/runs`);
  if (!fs.existsSync(runsPath)) return errors;
  const schema = JSON.parse(fs.readFileSync(safePath(root, `${directory}/schemas/run.schema.json`), 'utf8'));
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  const cycles = new Set();
  for (const name of fs.readdirSync(runsPath).filter((entry) => entry.endsWith('.json')).sort()) {
    try {
      const run = JSON.parse(fs.readFileSync(safePath(root, `${directory}/runs/${name}`), 'utf8'));
      if (!validate(run)) { errors.push(`${name}: ${ajv.errorsText(validate.errors)}`); continue; }
      if (`${run.id}.json` !== name || cycles.has(run.cycle)) errors.push(`${name}: 実行ID・サイクル重複`);
      cycles.add(run.cycle);
      if (!Number.isFinite(Date.parse(run.startedAt)) || (run.endedAt && (!Number.isFinite(Date.parse(run.endedAt)) || Date.parse(run.endedAt) < Date.parse(run.startedAt)))) errors.push(`${name}: 実行日時が不正`);
      if (run.result !== 'partial' && !run.endedAt) errors.push(`${name}: 完了日時がありません`);
      for (const [field, limit] of [['discoveryIds', 'discovery'], ['detailIds', 'detail'], ['newOperationIds', 'newPerCycle']]) {
        if (run[field].length > policy.limits[limit] || new Set(run[field]).size !== run[field].length) errors.push(`${name}: ${field}の件数上限・重複`);
      }
      if (run.model.localLLMUsed) errors.push(`${name}: ローカルLLM使用は禁止`);
      // 入出力ハッシュは当時の記録。後続修正で変わり得るので現在との照合は作業台帳で行う。
      for (const check of run.checks) if (check.status === 'passed') evidence(root, check.evidence, errors, `${name}/${check.name}`, resolve);
    } catch (error) { errors.push(`${name}: ${error.message}`); }
  }
  return errors;
}

export function validateLedger(root, ledger, directory = 'docs/notes/project-expansion') {
  const errors = [];
  const ajv = new Ajv({ allErrors: true });
  for (const [name, document] of Object.entries(ledger)) {
    const schema = JSON.parse(fs.readFileSync(safePath(root, `${directory}/schemas/${name}.schema.json`), 'utf8'));
    const validate = ajv.compile(schema);
    if (!validate(document)) errors.push(`${name}: ${ajv.errorsText(validate.errors)}`);
  }
  if (errors.length) return errors;
  const resolve = loadPresentationMaintenance(root, ledger.operations.presentationMaintenance, { safePath, hashFile, sha256 }, errors);
  const check = (root, records, errors, label) => checkArtifacts(root, records, errors, label, resolve);
  const proof = (root, references, errors, label) => evidence(root, references, errors, label, resolve);
  errors.push(...validateRuns(root, ledger.policy, directory, record => resolve(record, 'history')));
  checkArtifacts(root, [ledger.policy.plan], errors, '運用計画');
  if (ledger.policy.authorization) checkArtifacts(root, [ledger.policy.authorization], errors, '運用方針のユーザー指示');
  const limits = ledger.policy.limits;
  const totals = counts(ledger);
  for (const key of ['active', 'activeNew', 'eligible']) {
    if (totals[key] > limits[key]) errors.push(`${key}: 件数上限超過 ${totals[key]}/${limits[key]}`);
  }
  const candidates = new Map();
  const identities = new Set();
  for (const candidate of ledger.candidates.candidates) {
    let identity;
    try { identity = officialIdentity(candidate.repository ?? candidate.officialUrl); }
    catch { errors.push(`${candidate.id}: 公式URL・リポジトリが不正`); }
    if (candidates.has(candidate.id) || identities.has(identity)) errors.push(`候補の重複: ${candidate.id}`);
    candidates.set(candidate.id, candidate); identities.add(identity);
    for (const name of requiredConditions) {
      const condition = candidate.conditions[name];
      if (condition.status === 'pass') evidence(root, condition.evidence, errors, `${candidate.id}/${name}`);
    }
    if (!['eligible', 'selected'].includes(candidate.state)) continue;
    for (const name of requiredConditions) {
      if (candidate.conditions[name].status !== 'pass') errors.push(`${candidate.id}: 必須条件 ${name} が未合格`);
    }
    if (candidate.japaneseResearch.status === 'unresearched') errors.push(`${candidate.id}: 日本語資料未調査`);
    evidence(root, candidate.japaneseResearch.evidence, errors, `${candidate.id}/日本語調査`);
    let total = 0;
    for (const name of scoreNames) {
      const score = candidate.scores[name];
      if (score.value === null) errors.push(`${candidate.id}: ${name} 未採点`);
      evidence(root, score.evidence, errors, `${candidate.id}/${name}`);
      total += (score.value ?? 0) / 5 * ledger.policy.weights[name];
    }
    if (total < ledger.policy.minimumScore || candidate.scores.additionalValue.value < 3 || candidate.scores.practicality.value < 3) errors.push(`${candidate.id}: 選定得点不足 ${total}`);
    if (candidate.selectionReview?.inputHash !== selectionHash(candidate) || candidate.selectionReview?.status !== 'passed') errors.push(`${candidate.id}: 別パスの選定照合が未完了・失効`);
    evidence(root, candidate.selectionReview?.evidence, errors, `${candidate.id}/選定照合`);
  }
  const ids = new Set();
  const newApps = new Map();
  for (const project of ledger.operations.projects) {
    if (project.originOperationId && !ledger.operations.operations.some((operation) =>
      operation.id === project.originOperationId && operation.kind === 'new' &&
      operation.appId === project.id && operation.version === project.version &&
      operation.lastValidStage === 'verified')) {
      errors.push(`${project.id}: 登録元の検証済み新規作業がありません`);
    }
    check(root, [project.sourceManifest, project.contentMap, ...project.canonicalFiles, ...project.translatedFiles], errors, `${project.id}/登録内容`);
    for (const [language, records] of [['en', project.canonicalFiles], ['ja', project.translatedFiles]]) {
      try {
        const actual = inventory(root, `apps/${project.id}/src/content/docs/${project.version}/${language}`).filter((record) => /\.mdx?$/.test(record.path));
        if (JSON.stringify(actual.map((record) => record.path).sort()) !== JSON.stringify(records.map((record) => record.path).sort())) errors.push(`${project.id}/${language}: 登録ファイル集合と実ファイルが不一致`);
      } catch (error) { errors.push(error.message); }
    }
  }
  for (const operation of ledger.operations.operations) {
    if (ids.has(operation.id)) errors.push(`作業ID重複: ${operation.id}`);
    ids.add(operation.id);
    if (operation.id !== operationId(operation.candidateId, operation.version, operation.scope)) errors.push(`作業IDと範囲が不一致: ${operation.id}`);
    if (operation.kind === 'new') {
      const registeredProject = ledger.operations.projects.find((project) => project.id === operation.appId);
      if (registeredProject && registeredProject.originOperationId !== operation.id) errors.push(`既存アプリの重複生成: ${operation.appId}`);
      if (candidates.get(operation.candidateId)?.state !== 'selected') errors.push(`${operation.id}: selectedでない新規着手`);
      const previous = newApps.get(operation.appId);
      if (previous) errors.push(`同じアプリの重複生成: ${operation.appId}`);
      newApps.set(operation.appId, operation.id);
    }
    if (operation.kind === 'new' && operation.state === 'planned' && totals.awaitingRelease >= limits.awaitingRelease) errors.push(`${operation.id}: 公開待ち上限による新規着手停止`);
    if (operation.state === 'deferred' && (!operation.resumeCondition || !operation.excludedFromDeployment)) errors.push(`${operation.id}: 長期保留の復帰条件・配信除外が不足`);
    if (operation.state !== 'stale') check(root, operation.artifacts, errors, operation.id);
    const reviewRequired = ['content-reviewed', 'verified'].includes(operation.state);
    if (operation.state === 'stale') continue;
    if (!operation.reviewManifest) {
      if (reviewRequired) errors.push(`${operation.id}: 内容レビュー記録なし`);
      continue;
    }
    check(root, [operation.reviewManifest], errors, operation.id);
    try {
      const review = JSON.parse(fs.readFileSync(safePath(root, operation.reviewManifest.path), 'utf8'));
      if (JSON.stringify([...review.scope].sort()) !== JSON.stringify([...operation.scope.pages].sort())) errors.push(`${operation.id}: レビュー範囲不一致`);
      if (review.pages.length !== review.scope.length || new Set(review.pages.map((page) => page.id)).size !== review.pages.length) errors.push(`${operation.id}: ページ欠落・重複`);
      const completed = review.pages.filter((page) => page.status === 'passed').length;
      if ((review.completedPages !== undefined && review.completedPages !== completed)
        || (review.unreviewedPages !== undefined && review.unreviewedPages !== review.pages.length - completed)) {
        errors.push(`${operation.id}: レビュー進捗件数とページ状態が不一致`);
      }
      for (const page of review.pages) {
        if (!reviewRequired && ['pending', 'needs-final-review'].includes(page.status)) continue;
        if (!review.scope.includes(page.id) || page.status !== 'passed' || page.method !== 'ai-content-review' || !page.model || !page.reviewedAt || !page.findings || !page.separateReviewPass) errors.push(`${operation.id}/${page.id}: 全文内容レビュー未完了`);
        for (const role of ['source', 'canonical', 'translation']) {
          const record = page[role];
          if (!record) { errors.push(`${operation.id}/${page.id}: ${role}なし`); continue; }
          check(root, [record], errors, `${operation.id}/${page.id}`);
          const text = hashFile(safePath(root, record.path)) === record.sha256 ? fs.readFileSync(safePath(root, record.path), 'utf8') : (resolve(record) ?? fs.readFileSync(safePath(root, record.path), 'utf8'));
          const lines = text.replace(/\n$/, '').split('\n').length;
          const ranges = record.coverage ?? [];
          let next = 1;
          for (const [start, end] of ranges) {
            if (start !== next || end < start) errors.push(`${operation.id}/${page.id}: ${role}の確認範囲に欠落・重複`);
            next = end + 1;
          }
          if (next !== lines + 1) errors.push(`${operation.id}/${page.id}: ${role}の全文未確認`);
        }
      }
    } catch (error) { errors.push(`${operation.id}: ${error.message}`); }
    if (operation.state === 'verified') {
      // 保存したレビューが、実際に配信対象となる英日本文にも対応することを確認する。
      try {
        const review = JSON.parse(fs.readFileSync(safePath(root, operation.reviewManifest.path), 'utf8'));
        for (const page of review.pages) {
          for (const [role, language] of [['canonical', 'en'], ['translation', 'ja']]) {
            const directory = safePath(root, `apps/${operation.appId}/src/content/docs/${operation.version}/${language}`);
            if (hashFile(safePath(directory, page.id)) !== page[role].sha256 && resolve({ path: `apps/${operation.appId}/src/content/docs/${operation.version}/${language}/${page.id}`, sha256: page[role].sha256 }) === undefined) errors.push(`${operation.id}/${page.id}: 配信本文とレビューが不一致`);
          }
        }
      } catch (error) { errors.push(`${operation.id}: ${error.message}`); }
      for (const name of requiredChecks) {
        const check = operation.checks[name];
        if (check?.status !== 'passed') errors.push(`${operation.id}: 機械・表示検証 ${name} 未完了`);
        else proof(root, check.evidence, errors, `${operation.id}/${name}`);
      }
    }
  }
  return errors;
}

export function updateLedger(root, directory, name, expectedRevision, expectedInputs, transform) {
  if (!['CANDIDATES', 'OPERATIONS'].includes(name)) throw new Error('更新対象は候補または作業台帳です');
  const target = safePath(root, `${directory}/${name}.json`);
  const lock = `${target}.lock`;
  const descriptor = fs.openSync(lock, 'wx');
  let prepared;
  try {
    fs.writeFileSync(descriptor, `${JSON.stringify({ pid: process.pid, startedAt: new Date().toISOString() })}\n`);
    const before = fs.readFileSync(target, 'utf8');
    const document = JSON.parse(before);
    if (document.revision !== expectedRevision) throw new Error('台帳リビジョン競合。再読込してください');
    const errors = [];
    checkArtifacts(root, expectedInputs, errors, '更新前');
    if (errors.length) throw new Error(errors.join('\n'));
    const next = transform(structuredClone(document));
    next.revision = expectedRevision + 1;
    const ledger = readLedger(root, directory);
    if (name === 'OPERATIONS') {
      const previousIds = new Set(ledger.operations.operations.map((operation) => operation.id));
      const nextIds = new Set(next.operations.map(operation => operation.id));
      const addedNew = next.operations.filter((operation) => operation.kind === 'new' && !previousIds.has(operation.id)
        && ledger.operations.operations.filter(previous => isLanguagePathNormalization(previous, operation, nextIds)).length !== 1);
      if (addedNew.length > ledger.policy.limits.newPerCycle || (addedNew.length && !canStartNew(ledger))) throw new Error('新規着手の件数上限・作業優先方針に抵触');
    }
    ledger[name === 'CANDIDATES' ? 'candidates' : 'operations'] = next;
    const validation = validateLedger(root, ledger, directory);
    if (validation.length) throw new Error(validation.join('\n'));
    if (fs.readFileSync(target, 'utf8') !== before) throw new Error('検査中に台帳が変わりました');
    const finalErrors = [];
    checkArtifacts(root, expectedInputs, finalErrors, '確定前');
    if (finalErrors.length) throw new Error(finalErrors.join('\n'));
    prepared = `${target}.${randomUUID()}.tmp`;
    fs.writeFileSync(prepared, `${JSON.stringify(next, null, 2)}\n`);
    commitPreparedPathsAtomically([{ preparedPath: prepared, targetPath: target }]);
    return next;
  } finally {
    fs.closeSync(descriptor);
    if (prepared && fs.existsSync(prepared)) fs.rmSync(prepared);
    fs.rmSync(lock);
  }
}

export function report(root, ledger) {
  const totals = counts(ledger);
  const errors = validateLedger(root, ledger);
  const lines = [
    '# 公式文書プロジェクト継続運用レポート', '',
    'POLICY・CANDIDATES・OPERATIONSと実ファイルから生成。既存公開済みサイト数と今回のverified件数は別集計。', '',
    `- 検証済み${errors.length ? '（台帳上・現在の有効性は未確定）' : ''}: ${totals.verified}件 / 今回の公開済み: ${totals.published}件 / 公開待ち: ${totals.awaitingRelease}件`,
    `- 作業中: ${totals.active}件（新規${totals.activeNew}件） / 長期保留作業: ${totals.deferred}件 / 候補保留: ${totals.candidateHolds}件`,
    `- eligible待機: ${totals.eligible}件 / 新規着手: ${canStartNew(ledger) && !errors.length ? '可能' : '停止'}`,
    `- 作業方針: ${ledger.policy.workPriority === 'new-projects-first' ? '新規作成・公開を優先。公開済みの定期再確認は余力時。重大な確認済み不具合は優先対応。' : '保守優先'}`,
    ...(ledger.operations.presentationMaintenance?.length ? [`- 表示保守の対応証拠: ${ledger.operations.presentationMaintenance.length}件。旧全文レビューを保持し、現行本文の復元・配置・表現を別に検査。`] : []),
    `- 台帳・実ファイル照合: ${errors.length ? `不合格（${errors.length}件）` : '合格'}`, '',
    '## 作業と再開操作', '', '| 対象 | 状態 | 最後の有効段階 | 次の操作・再開条件 |', '| --- | --- | --- | --- |',
  ];
  for (const operation of ledger.operations.operations) lines.push(`| ${operation.appId} / ${operation.version} / ${operation.kind} | ${operation.state} | ${operation.lastValidStage} | ${operation.nextAction} ${operation.resumeCondition ?? ''} |`);
  lines.push('', '## 登録済みの既存文書', '', '| プロジェクト | 固定版 | 最終の完全な上流確認 | 課題 |', '| --- | --- | --- | --- |');
  for (const project of ledger.operations.projects) lines.push(`| ${project.id} | ${project.version} | ${project.lastCheckedAt ?? '未実施'} | ${project.notes} |`);
  lines.push('', '## 候補', '', '| 候補 | 対象版 | 状態 | 判断・再開条件 |', '| --- | --- | --- | --- |');
  for (const candidate of ledger.candidates.candidates) lines.push(`| ${candidate.id} | ${candidate.version ?? '未確定'} | ${candidate.state} | ${candidate.decision} ${candidate.resumeCondition ?? ''} |`);
  if (errors.length) lines.push('', '## 失効・不整合', '', ...errors.map((error) => `- ${error}`));
  lines.push('', '## 実行記録', '', '詳細なサイクル結果、モデル設定と実モデルの確認可否、証拠、未実施項目、外部公開・定期実行の許可範囲は `runs/` を参照。', '');
  return lines.join('\n');
}
