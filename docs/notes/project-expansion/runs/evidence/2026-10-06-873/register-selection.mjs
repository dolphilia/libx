import fs from 'node:fs';
import assert from 'node:assert/strict';
import {readLedger,updateLedger,hashFile,selectionHash,report,validateLedger,counts} from '../../../../../../scripts/project-expansion/ledger.mjs';
const root=process.cwd(),b='docs/notes/project-expansion',e=b+'/runs/evidence/2026-10-06-873',read=p=>JSON.parse(fs.readFileSync(p)),ref=p=>({path:p,sha256:hashFile(p)}),write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n',{flag:'wx'}),l=readLedger(root),c=read(e+'/CANDIDATE_DRAFT.json');
assert(!l.candidates.candidates.some(x=>x.id===c.id));assert(counts(l).eligible<l.policy.limits.eligible);assert.equal(l.policy.minimumScore,60);
for(const v of[...Object.values(c.conditions),...Object.values(c.scores),c.japaneseResearch])for(const x of v.evidence)assert.equal(hashFile(x.path),x.sha256);
assert(Object.values(c.conditions).every(x=>x.status==='pass'));assert.equal(c.japaneseResearch.status,'partial');
const source=read(e+'/FIXED_INPUTS.json'),work=read(e+'/SCOPE_WORKLOAD.json'),prototype=read(e+'/CONVERSION_PROTOTYPE.json');
assert.equal(source.version,'0.13.0');assert.equal(source.commit,'6447536015f3d600f3d65323b10976103b337ca7');assert.equal(source.files.length,7);
assert.equal(work.guidePages,16);assert.equal(work.guideWords,13312);assert.equal(work.apiSplit.length,13);assert(work.apiSplitReassemblyExact);
assert.equal(prototype.results.reduce((n,x)=>n+x.codeBlocksExact,0),85);assert.equal(prototype.results.reduce((n,x)=>n+x.tables,0),10);
const total=Object.entries(c.scores).reduce((n,[k,v])=>n+v.value/5*l.policy.weights[k],0);assert.equal(total,70);assert(c.scores.additionalValue.value>=3&&c.scores.practicality.value>=3);
const at=new Date().toISOString(),inputHash=selectionHash(c),proofNames=['FIXED_INPUTS.json','IMAGE_INPUTS.json','JAPANESE_OBSERVATIONS.json','JAPANESE_FETCH.json','SCOPE_WORKLOAD.json','CONVERSION_PROTOTYPE.json','PROTOTYPE_BROWSER.json','CANDIDATE_DRAFT.json','SCORING.json'];
write(e+'/SELECTION_REVIEW.json',{status:'passed',at,inputHash,separateReviewPass:true,method:'草稿保存後に別パスで6条件・固定入力・範囲・日本語資料・得点の根拠を再照合。機械一致を翻訳内容reviewへ読み替えず、原文自体の技術監査へ拡張しない。',findings:[
 '公式安定0.13.0のRelease/commit/treeを確認、Markdown7とSVG7をGit blob/SHAで固定した取得記録を照合。最新を検索cacheだけで推測しない。',
 '原MIT全文はassociated documentation明示。doc下独立LICENSEとSVG内別通知は固定TREE/7原SVGで未発見。原copyright/permission/disclaimerを保持し、第三者Doxygen theme/バッジ複製は除外。',
 'API13意味節は原API1854行の全順序/境界/再組立てSHA一致。README/BuildAndTest/DataStructureと合わせて16ガイド、CHANGELOG/原著Performance TODO/MIT3英語参照。全生成API一覧未収録を明示。',
 '原著Performance TODO4bytes、READMEの2020benchmark参照と原著制限を保持し補作しない。静的図/表と原典リンクで読める範囲を提供する。',
 'Astro処理試作3資料code85/table10/固定SVG7参照、代表native表/Ccode/構造図を確認。初MITメールrawHTML欠落はescape修正後reloadで解消。正式app/全ページ表示や日本語reviewはまだ行っていない。',
 '既存Raia日本語資料の存在を認める。確認DataStructure snapshotで欠けるMemory Management節に具体的追加価値、Changelog最上位0.6.0はそのsnapshotだけの結果。API未取得から全サイト旧版/未翻訳を推測しない。限定調査partialのまま追加価値3。',
 'guide16はコード込み13,312語。3〜4バッチ・5〜8h目安を工数として明示し、原著code実行/サイト再現の負荷は含めない。通常Markdown/静的SVGと正規templateを使う。',
 '追加価値3/実用4/品質3/保守4/再利用4の70点が現行60と必須2項目各3を満たす。原TODO・未確認JAAPIと正式工程を完了扱いせずeligible登録のみ。',
 'Wren872公開が優先。本runでは新operation/app/翻訳を作成せず、上限eligible1として根拠を保存する。'
 ],evidence:proofNames.map(f=>ref(e+'/'+f))});
c.state='eligible';c.selectionReview={status:'passed',inputHash,evidence:[ref(e+'/SELECTION_REVIEW.json')]};c.decision='873:yyjson0.13.0 固定16ガイド対訳+3原英語参照方式で6条件/別パス選定照合/70>=60を満たしeligible。正式app/翻訳/全文意味review/公開未実施。';
c.resumeCondition='Wren872公開を優先。外部CI待機中は最新の検証済み公開commitを基準にyyjson隔離checkout/正規作成器/原入力・通知・再生成器を準備できる。16ガイドを3〜6k語のバッチ草稿/別パス全文reviewへ。';
updateLedger(root,b,'CANDIDATES',l.candidates.revision,[ref(b+'/CANDIDATES.json'),ref(e+'/SELECTION_REVIEW.json')],d=>{assert(!d.candidates.some(x=>x.id==='yyjson'));d.candidates.push(c);return d;});
write(b+'/runs/2026-10-06-873-yyjson-selection.json',{schemaVersion:1,id:'2026-10-06-873-yyjson-selection',cycle:873,startedAt:source.at,endedAt:at,result:'complete',phase:'yyjson固定版ガイド範囲発見/静的試作/別パス選定照合',model:{configured:l.policy.model.preferred,configurationEvidence:b+'/POLICY.json',runtime:null,runtimeStatus:'not independently exposed',localLLMUsed:false},tools:['official release/tree/blob API','bounded primary/Japanese source web research','Astro static Markdown conversion','CUA native representative','CAS ledger'],inputs:[ref(b+'/POLICY.json')],outputs:[...proofNames,'SELECTION_REVIEW.json'].map(f=>ref(e+'/'+f)),discoveryIds:['yyjson'],detailIds:['yyjson'],newOperationIds:[],checks:[{name:'fixed Markdown7/SVG7 and rights/scope',status:'passed',evidence:[ref(e+'/FIXED_INPUTS.json'),ref(e+'/IMAGE_INPUTS.json'),ref(e+'/SCOPE_WORKLOAD.json')]},{name:'static representative/code85/table10/6conditions/70/separate selection review',status:'passed',evidence:[ref(e+'/SELECTION_REVIEW.json')]}],decisions:['第三者訳未再配布、JAAPI未確認はpartial保持。原文技術完全性・元Doxygen機能再現を要件にしない。','16英日ガイド/3英語参照の予定範囲。新operation未作成。Wrenの実行可能な公開工程を優先。'],unresolved:['正規app/再生成と16ガイド翻訳・別パス全文意味review','正式表示/検査/統合/Pages公開・公開後確認'],nextAction:c.resumeCondition,resumeCondition:c.resumeCondition});
assert.deepEqual(validateLedger(root,readLedger(root)),[]);fs.writeFileSync(b+'/REPORT.md',report(root,readLedger(root)));console.log('873 yyjson eligible70 registered;ledger errors0;Wren release first');
