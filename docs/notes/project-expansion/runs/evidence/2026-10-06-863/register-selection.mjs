import fs from 'node:fs';
import assert from 'node:assert/strict';
import { readLedger, updateLedger, hashFile, selectionHash, report, validateLedger, counts } from '../../../../../../scripts/project-expansion/ledger.mjs';
const root = process.cwd(), b = 'docs/notes/project-expansion', e = b + '/runs/evidence/2026-10-06-863';
const ref = p => ({ path: p, sha256: hashFile(p) });
const read = p => JSON.parse(fs.readFileSync(p));
const write = (p, x) => fs.writeFileSync(p, JSON.stringify(x, null, 2) + '\n', { flag: 'wx' });
const l = readLedger(root), c = read(e + '/CANDIDATE_DRAFT.json');
assert.equal(l.policy.minimumScore, 60);
assert.equal(l.policy.externalPublication, 'authorized-verified-awaiting-release');
assert.equal(l.candidates.candidates.find(x => x.id === 'wren').state, 'rejected');
assert(counts(l).eligible < l.policy.limits.eligible);
for (const v of [...Object.values(c.conditions), ...Object.values(c.scores)]) {
  if ('status' in v) assert.equal(v.status, 'pass');
  for (const x of v.evidence) assert.equal(hashFile(x.path), x.sha256);
}
const work = read(e + '/WORKLOAD_DECISION.json');
assert.equal(work.EnglishBodyPages, 41); assert.equal(work.JapaneseGuidePages, 24);
assert.equal(work.EnglishOnlyReferences, 17); assert.equal(work.JapaneseGuideCodeBlocks, 253);
assert.equal(work.totalCodeBlocksPreserved, 353);
assert.equal(work.batches.flatMap(x => x.sources).length, 24);
assert(work.batches.every(x => x.visibleSourceWords >= 3000 && x.visibleSourceWords <= 6000));
assert.equal(read(e + '/PROVISION_DISPOSITION.json').findings.length, 5);
const total = Object.entries(c.scores).reduce((n, [k, v]) => n + v.value / 5 * l.policy.weights[k], 0);
assert.equal(total, 63); assert(c.scores.additionalValue.value >= 3 && c.scores.practicality.value >= 3);
assert.equal(c.scores.quality.value, 2);
const at = new Date().toISOString(), inputHash = selectionHash(c);
write(e + '/SELECTION_REVIEW.json', {
  status: 'passed', at, inputHash, separateReviewPass: true,
  method: '同じCodexが草稿保存後の別パスで6条件・固定入力・提供範囲・工数・日本語資料・得点の根拠を照合。旧原文監査や試験を繰り返さず同一SHAの証拠を再利用。採用前の選定照合であり日本語訳の全文意味レビューではない。',
  findings: [
    '0.4.0/4a18fc489の保存100入力はGit blob/bytes/SHA一致。今回最新リリースの再調査をしたとは記録しない。',
    'MIT原通知はassociated documentationを明示。41本文の個別条件を確認した既存証拠を使用。著作者・固定版・非公式訳・変更表示と原通知全文を保持し、第三者サイト資産を一括再配布しない。',
    '24言語/VM/利用ガイド全体が対訳対象、17APIは英語原文参照、LICENSE1を別に保持。modules/indexは任意モジュール利用のガイドで、meta2の未執筆APIとは別。core/indexの転送は本文数に含めない。',
    '旧4件の技術的完全性保留とmeta2のTODOは原著の制限として維持。未執筆部分を補作せず、短い注記・固定原典・ヘッダーリンクで読める提供方式を採用。原文正しさ・全API・例実行を保証しない。',
    '全41原文の変換/353code/5表21bar/42ページ82ナビ/1440・390代表表示は同一入力証拠。現在の正規テンプレート表示と日本語レビューは今後の正式工程で実施。',
    '日本語調査は3日前の限定調査を再利用。紹介・部分資料があることを認め、24ガイドの全文対訳との差を追加価値3と評価。存在しないとの全世界的主張はしない。',
    '全英語範囲31,750visible tokensの大規模負荷を明示。訳・全文意味レビューは24ガイド25,182tokens/253code。3–6k語の5バッチ、9–15hは目安。API17の日本語レビューを完了とは扱わない。',
    '追加価値3/実用4/原著品質2/保守3/再利用4=63、現行60と必要2項目3以上を満たす。注記で原文品質を加点していない。',
    '照合で発見した古いlatestRelease・境界未確定・採点未完の草稿説明を現在の固定範囲へ修正し、変更した3条件の説明と既存証拠を再照合。',
    'SDS862の公開工程を優先。CI外部待機中にWren準備は可能、公開時は最新の検証済み公開基準へ限定差分を統合する。'
  ],
  evidence: ['CANDIDATE_DRAFT.json', 'CANDIDATE_BEFORE_WORDING_CORRECTION.json', 'CANDIDATE_BEFORE.json', 'SAVED_EVIDENCE_REUSE.json', 'PROVISION_DISPOSITION.json', 'WORKLOAD_DECISION.json', 'SCORING.json'].map(x => ref(e + '/' + x))
});
c.state = 'eligible';
c.selectionReview = { status: 'passed', inputHash, evidence: [ref(e + '/SELECTION_REVIEW.json')] };
c.decision = '863:旧meta未執筆による全API完備基準の不採用を保存し、現行目的で24ガイド全対訳+17API英語参照へ再評価。6条件/別パス選定照合/63>=60を満たしeligible。品質2を維持。翻訳・正式検証・公開は未実施。';
c.resumeCondition = 'SDS862の実行可能な公開工程を優先。外部CI待機中はWren専用の正規テンプレート作業場所と固定原文・通知・再生成器を準備し、24ガイドをバッチ翻訳/別パス全文レビュー。Wren公開前に最新検証済み公開基準へ限定統合する。';
c.nextCheckAt = null;
updateLedger(root, b, 'CANDIDATES', l.candidates.revision, [ref(b + '/CANDIDATES.json'), ref(e + '/SELECTION_REVIEW.json')], d => {
  d.candidates[d.candidates.findIndex(x => x.id === 'wren')] = c; return d;
});
write(b + '/runs/2026-10-06-863-wren-guide-reassessment.json', {
  schemaVersion: 1, id: '2026-10-06-863-wren-guide-reassessment', cycle: 863,
  startedAt: read(e + '/START.json').at, endedAt: at, result: 'complete',
  phase: '旧Wren保留を24ガイド対訳/原API参照方式で再評価・別パス選定照合',
  model: { configured: 'gpt-6.1-sol', configurationEvidence: b + '/POLICY.json', runtime: null, runtimeStatus: 'not independently exposed', localLLMUsed: false },
  tools: ['saved fixed source / notices / source reading / static conversion SHA reuse', 'current provision / workload / scoring', 'separate selection review / CAS ledger'],
  inputs: [ref(e + '/CANDIDATE_BEFORE.json')],
  outputs: ['SAVED_EVIDENCE_REUSE.json', 'PROVISION_DISPOSITION.json', 'WORKLOAD_DECISION.json', 'SCORING.json', 'SELECTION_REVIEW.json'].map(x => ref(e + '/' + x)),
  discoveryIds: [], detailIds: ['wren'], newOperationIds: [],
  checks: [
    { name: 'fixed100 / same-source retained proof bindings', status: 'passed', evidence: [ref(e + '/SAVED_EVIDENCE_REUSE.json')] },
    { name: 'current6conditions / 63>=60 / separate selection review', status: 'passed', evidence: [ref(e + '/SELECTION_REVIEW.json')] }
  ],
  decisions: ['旧291不採用/4技術的完全性保留/原metaTODOを保存。原著監査を拡張しない。', '原文41+MIT通知1、日本語対象24ガイド、未翻訳17APIを明示。', 'SDS外部CI待機中の準備は可。新operationは本runでは未作成。'],
  unresolved: ['24ガイド翻訳・別パス全文意味レビュー', '正規app・再生成・通知/sourceZIP・正式表示/統合', 'Pages Preview/Production公開と公開後確認'],
  nextAction: c.resumeCondition, resumeCondition: c.resumeCondition
});
assert.deepEqual(validateLedger(root, readLedger(root)), []);
fs.writeFileSync(b + '/REPORT.md', report(root, readLedger(root)));
console.log('863 Wren eligible63/current60; translation/formal integration/publication pending; SDS release first');
