import fs from 'node:fs';
import assert from 'node:assert/strict';
import {hashFile,readLedger} from '../../../../../../scripts/project-expansion/ledger.mjs';
const E='docs/notes/project-expansion/runs/evidence/2026-10-06-873',ref=n=>({path:E+'/'+n,sha256:hashFile(E+'/'+n)}),read=n=>JSON.parse(fs.readFileSync(E+'/'+n)),at=new Date().toISOString(),l=readLedger(process.cwd());
assert(!l.candidates.candidates.some(c=>c.id==='yyjson'));
const scope=read('SCOPE_WORKLOAD.json');assert.equal(scope.guidePages,16);assert.equal(scope.guideWords,13312);assert.equal(scope.apiSplit.length,13);
const reasons={
 rights:'固定MITはassociated documentation filesを明示。独立docs通知を固定TREEで調査、doc/SVG7は原MIT全通知付き。第三者Doxygen themeと第三者badgeコピーは対象外。',
 boundary:scope.boundary,
 fixedInput:'公式安定0.13.0/6447536015f3d600f3d65323b10976103b337ca7をRelease API/Git tree/blob/SHAで固定。原Markdown7+SVG7の全取得バイトを保存。',
 selfContained:'JSON利用にまとまった16ガイド。Memory Managementまで含む。原著Performance TODOと古い性能reportは注記/原典リンク、原文技術監査や全API完全収録を要件にしない。',
 conversion:'現行Astro Markdown処理でREADME/API/DataStructureを試作しcode85文字列一致、table10/SVG7参照保持。代表表/code/構造図をnative視認。MITメールのHTML escape修正後通知を確認。正式app/日本語表示は後工程。',
 workload:scope.workload
};
const sources={rights:['FIXED_INPUTS.json','SCOPE_WORKLOAD.json'],boundary:['SCOPE_WORKLOAD.json'],fixedInput:['FIXED_INPUTS.json','IMAGE_INPUTS.json'],selfContained:['SCOPE_WORKLOAD.json','PROTOTYPE_BROWSER.json'],conversion:['CONVERSION_PROTOTYPE.json','PROTOTYPE_BROWSER.json'],workload:['SCOPE_WORKLOAD.json']};
const values={additionalValue:3,practicality:4,quality:3,maintenance:4,reuse:4},scoreReasons={
 additionalValue:'既存Raia日本語資料を認め、確認snapshotで不在のMemory Management節・現0.13.0固定ガイド/対訳の範囲を具体的追加価値とする。日本語API未読/世界全体の資料有無はunknown。既存cJSON/RapidJSONとは別実装の利用手順、最小要件3。',
 practicality:'C89 JSONの読書き・可変/不変doc・文字列コピーと寿命・allocator・Pointer/Patchを説明しC/C++利用者の実装参照に使える。利用人数や実行互換性の未検証数値は主張せず4。',
 quality:'Markdownにコード/表/図/制限と利用例が揃う一方、Performance原TODO/古いベンチreportが残る。注記で補う提供可能性を原文完全性保証へ読み替えず3。',
 maintenance:'固定Markdown7+SVG7・API13意味節の対応で差分追跡可能。静的図と原典リンク、元Doxygen theme/JS不要。正式翻訳16ページ約13.3k語の負荷を明示して4。',
 reuse:'正規templateと通常Markdown/GFM/Shiki/static SVGの既存方式を使う。必要な専用処理はDoxygen title marker/節分割/リンク対応のみで、試作code85保持から4。'
};
const c={id:'yyjson',officialUrl:'https://ibireme.github.io/yyjson/doc/doxygen/html/',repository:'https://github.com/ibireme/yyjson',version:'0.13.0',scope:scope.boundary,field:'json-c-library',discovery:[{route:'official GitHub release/docs + bounded Japanese search',reference:'https://github.com/ibireme/yyjson/releases/tag/0.13.0',date:at}],state:'needs-evidence',conditions:Object.fromEntries(Object.keys(reasons).map(k=>[k,{status:'pass',reason:reasons[k],evidence:sources[k].map(ref)}])),japaneseResearch:{status:'partial',queries:read('JAPANESE_OBSERVATIONS.json').queries,checkedAt:at,evidence:['JAPANESE_OBSERVATIONS.json','JAPANESE_FETCH.json','FIXED_INPUTS.json'].map(ref)},scores:Object.fromEntries(Object.keys(values).map(k=>[k,{value:values[k],reason:scoreReasons[k],evidence:['SCOPE_WORKLOAD.json','JAPANESE_OBSERVATIONS.json','CONVERSION_PROTOTYPE.json','PROTOTYPE_BROWSER.json'].map(ref)}])),decision:'873草稿:6条件と70点を提案。採用前の別パス根拠照合未実施、正式app/訳/全文意味review/公開未実施。',resumeCondition:'Wren872の実行可能な公開工程を優先し、yyjsonの別パス選定照合→枠内eligible登録。着手時は最新の検証済み公開commitを基準に隔離して正規テンプレートで作成。',nextCheckAt:null,selectionReview:null};
fs.writeFileSync(E+'/CANDIDATE_DRAFT.json',JSON.stringify(c,null,2)+'\n',{flag:'wx'});
fs.writeFileSync(E+'/SCORING.json',JSON.stringify({status:'draft',at,total:70,minimum:l.policy.minimumScore,scores:values,translationFullReview:false},null,2)+'\n',{flag:'wx'});
console.log('873 yyjson draft saved:16 guides/13312 words/proposed70;separate selection review pending');
