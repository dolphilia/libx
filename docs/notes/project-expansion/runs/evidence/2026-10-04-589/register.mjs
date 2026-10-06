import fs from 'node:fs';
import assert from 'node:assert/strict';
import {readLedger,validateLedger,updateLedger,report,counts,inventory,hashFile} from '/Users/dolphilia/github/libx/scripts/project-expansion/ledger.mjs';
const root='/Users/dolphilia/github/libx',dir='docs/notes/project-expansion',ev=dir+'/runs/evidence/2026-10-04-589',at=new Date().toISOString();
const ref=p=>({path:p,sha256:hashFile(root+'/'+p)}),before=readLedger(root);
assert.equal(before.operations.revision,714); assert.equal(before.candidates.revision,118); assert.deepEqual(validateLedger(root,before),[]);
assert.equal(before.policy.workPriority,'new-projects-first');
fs.mkdirSync(root+'/'+ev);
const research={at,status:'partial-research-not-eligibility',priority:'new-projects-first',mdbook:{fixedVersion:'0.5.4',scope:'公式guide目次31章と必要なinclude・版置換・例・素材。全ファイル分類は未完。',license:'固定本体MPL-2.0の注釈付き適用を設計中。専用表記の不在と運用判断を区別する。履行設計未完なのでrightsはunknownを維持。',conversion:'guide-helperはguide/guide-helperに所在。版置換と実include、エスケープされた説明用構文を区別する。試験未実施。'},jq:{fixedVersion:'1.8.2',manualVersion:'1.8',license:'固定COPYINGと公式footerはdocs配下CC BY 3.0を明示。本体MIT fallbackで置換しない。帰属・原URI・変更表示・全文条件へのリンク設計を完了してからrights判定。',conversion:'固定manual/v1.8/manual.yml、build_website.py、manual.html.j2を基準に全節・entry・例のprogram/input/outputとアンカーを保全。試験未実施。',japaneseLead:{url:'https://dev.classmethod.jp/articles/jq-manual-japanese-translation-roughly/',displayedDate:'2013-07-10',observation:'著者によるjq Manual日本語訳の案内を確認。公開日だけから対象版を断定しない。全文の範囲差分・品質評価は未実施。訳文を再利用しない。'}},japaneseResearch:{status:'incomplete',queries:['mdBook 日本語 翻訳','mdBook 0.5 日本語','mdBook Documentation 日本語','mdbook 公式ドキュメント 日本語訳','jq 1.8 マニュアル 日本語','jq 日本語マニュアル','jq Manual 1.8 日本語','jq マニュアル 1.7 翻訳'],limitations:'mdBookを使用した別プロジェクトの訳をmdBookツールの訳と混同しない。公式言語一覧・翻訳パス・公式案内と既存jq訳の範囲照合が未完。未発見・追加価値の採点を確定しない。'},dependencyProbe:{command:'/Users/dolphilia/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 -c import yaml,jinja2,markdown',result:'ModuleNotFoundError: No module named yaml',scope:'最初のyaml importで停止したため、jinja2/markdownの利用可否は未確認。依存インストールなし。共有rootの依存変更なし。',next:'既存の隔離checkoutで利用可能なparserを調べ、必要なら一時領域のみへ依存を準備。'},remaining:['全ファイル分類と権利履行設計','公式日本語案内と既存訳の範囲照合','隔離変換・全例/アンカー/素材の保全試験','工数実測・採点・別選定照合']};
fs.writeFileSync(root+'/'+ev+'/RESEARCH_PROGRESS.json',JSON.stringify(research,null,2)+'\n',{flag:'wx'});
fs.copyFileSync('/private/tmp/libx-candidate-research-register-589.mjs',root+'/'+ev+'/register.mjs',fs.constants.COPYFILE_EXCL);
const inputs=[ref(dir+'/CANDIDATES.json'),ref(dir+'/POLICY.json')],proof=ref(ev+'/RESEARCH_PROGRESS.json'),outputs=inventory(root,ev);
updateLedger(root,dir,'CANDIDATES',118,[...inputs,...outputs],document=>{
  for(const id of ['mdbook','jq']) {
    const c=document.candidates.find(c=>c.id===id); assert.equal(c.state,'screening');
    c.conditions.rights.evidence.push(proof); c.conditions.conversion.evidence.push(proof);
    c.decision+=' 589:新規優先方針の下で権利履行・生成処理・日本語資料の調査を継続。jq旧日本語訳の案内を発見したが版/全範囲差分は未確認。採点・試験未完、採用0。';
    c.resumeCondition+=' 589 RESEARCH_PROGRESS.jsonを基準に、未完の日本語範囲照合と権利履行を確定し、隔離parserの準備と保全試験へ。';
  }
  return document;
});
const after=readLedger(root); assert.deepEqual(validateLedger(root,after),[]);
const previous=JSON.parse(fs.readFileSync(root+'/'+dir+'/runs/2026-10-04-585-candidate-archives-and-generation-boundary.json'));
fs.writeFileSync(root+'/'+dir+'/runs/2026-10-04-589-new-project-priority-candidate-research.json',JSON.stringify({...previous,id:'2026-10-04-589-new-project-priority-candidate-research',cycle:589,startedAt:at,endedAt:new Date().toISOString(),result:'partial',phase:'candidate-research',inputs,outputs:[...outputs,ref(dir+'/CANDIDATES.json')],tools:['fixed source generation and license inspection','Japanese web search','read-only bundled Python dependency probe','CAS candidate update'],checks:[{name:'priority policy and plan correspondence',status:'passed',evidence:[ref(dir+'/POLICY.json')]},{name:'remaining candidate eligibility',status:'pending',evidence:[proof]}],decisions:['公開済みの定期再確認より、新規mdBook・jqの詳細調査を優先。重大な確認済み不具合は引き続き優先。','公開済みgperfを再公開せず、検証15/公開15/公開待ち0を保持。','固定入力pass以外は未確認を合格にしない。研究の途中経過と次の操作を保存。','前turnはgperf本番検証・公開とschema訂正によるprogress。今回も候補生成要件・日本語資料の調査によりprogress。'],unresolved:research.remaining,nextAction:'mdBook・jqの全文境界/通知配置/既存日本語訳の範囲を確定後、一時領域でYAML等のparserを準備し忠実変換試験・工数実測・採点へ。',resumeCondition:'585固定原資料・treeauditと589調査証拠を保持。root共有依存/Awesome変更を保護し、未完ゲートを推測で合格にしない。',counts:counts(after)},null,2)+'\n',{flag:'wx'});
fs.writeFileSync(root+'/'+dir+'/REPORT.md',report(root,after));
assert.deepEqual(validateLedger(root,readLedger(root)),[]);
console.log({operations:after.operations.revision,candidates:after.candidates.revision,...counts(after)});
