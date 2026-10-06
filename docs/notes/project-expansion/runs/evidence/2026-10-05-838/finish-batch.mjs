import fs from 'node:fs';
import {hashFile,readLedger,updateLedger,operationId,report} from '../../../../../../scripts/project-expansion/ledger.mjs';
const root=process.cwd(),base='docs/notes/project-expansion',ev=`${base}/runs/evidence/2026-10-05-838`,notes='docs/notes/document-import/zstd/v1-5-7';
const ref=p=>({path:p,sha256:hashFile(p)});
const write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const map=JSON.parse(fs.readFileSync(`${notes}/CONTENT_MAP.json`));
const at=new Date().toISOString();
const coverage=p=>({...ref(p),coverage:[[1,fs.readFileSync(p,'utf8').replace(/\n$/,'').split('\n').length]]});
const findings={
 '01-introduction':['原通知英語全文と明示日本語訳、版0.4.3、入力独立性・中間記憶上限・ランダムアクセス非対応を対照。','圧縮器のmust/選択肢対応不要、展開器の少なくとも1組/任意checksum/unsupported error説明を保持。定義のframe独立とblock依存/streaming、目次全11参照を照合。'],
 '02-frames':['全7表のbit7→0、FCS/DID分岐とサイズ・数値範囲、checksum seed0/lower4、辞書ID0の意味を全文対照。','Single_Segmentの必須連続領域/size、Unused禁止解釈・Reserved必須zeroを区別。8MBは推奨、拒否許可とWindow公式4行コード保持。FCS2byteのみ+256と任意compatible variant保持。','原文inlineコードのBlocksはAPI識別子ではなく章名で、日本語リンクラベルへ訳す。'],
 '03-blocks':['全6表・全4blocktype、21bitサイズ、RLE1byteと反復回数、128KB/Windowの小さい方、圧縮/展開両方の上限を全文対照。','過去データ/offset/Huffman/FSE前提とdictionary来源、4literals modesと不正Treeless条件、Size_Formatの全分岐/式/値を保持。','stream1/4、Compressed_Sizeにtreeサイズ含む・zero不可・4stream>=10、>1KB必須/256実用推奨、jumpTable6byte・各streamサイズ/last3byte差・Stream4>=1と破損条件を保持。'],
 '05-skippable-frames':['LZ4互換・skip内容ignore/後から再開・追跡透かしと分析除去推奨を全文対照。16magic値0x184D2A50–5F、32bit unsigned/size除外/2^32-1上限を保持。'],
 '08-dictionary':['raw辞書最低8byteとformatted Content相当、zstd --train・ID0禁止・public予約2範囲を全文対照。原indented codeをfenced codeへ移してcode値一致を確認。','Huffman literals→FSE offsets→match lengths→literal lengthsの順、原Repeat Stats/Repeat distributionの表現保持、3offset/4byte/12byte/内容size以下/zero不可を保持。','Window_Size以下で辞書のより遠い部分も参照可能、超過後参照禁止、外部辞書untrusted/慎重ロードを保持。原参照切れはCompressed Blocksの同source見出しへ補正しフッター明示。']
};
const pages=map.pages.map(p=>{
 const key=p.id.split('/')[1].replace(/\.md$/,'');
 const translation=`${notes}/translations/ja/${p.id}`;
 if(!findings[key])return{id:p.id,status:'pending',findings:['未翻訳・別パス全文レビュー未実施']};
 return{id:p.id,status:'passed',method:'ai-content-review',model:'configured gpt-6.1-sol; actual runtime not independently exposed; no local LLM',reviewedAt:at,separateReviewPass:true,source:coverage(p.source.path),canonical:coverage(p.canonical.path),translation:coverage(translation),findings:findings[key],passDescription:'作成後に別パスで原文/定本/訳文を全文読解。構造検査は内容レビューの代用にしていない。'};
});
const manifest={schemaVersion:1,scope:map.pages.map(p=>p.id),completedPages:5,unreviewedPages:4,pages};
write(`${notes}/REVIEW_MANIFEST.json`,manifest);
write(`${ev}/REVIEW_MANIFEST_FROZEN.json`,manifest);
const progress={schemaVersion:1,workspace:map.workspace,state:'translating',translatedPages:5,reviewedPages:5,totalPages:9,pages:pages.map(p=>({id:p.id,translation:p.status==='passed'?'complete':'pending',review:p.status})),batch:'838:1/2/3/5/8章。原文719行、5pages。',machine:'9EN AST原文対応/5JA table-code-heading/14article DOM・81内部link確認、未訳4章行き15linkは未完',publication:'not-ready',nextAction:'第2バッチ:4シーケンス/6FSE/7Huffman/9付録・履歴を翻訳・別パス全文review。付録草稿から続行。可搬再生成器・全9章最終link・原文download bytes・言語操作・codecopy・table keyboardは後工程。'};
write(`${notes}/PROGRESS.json`,progress);write(`${ev}/PROGRESS_FROZEN.json`,progress);
write(`${ev}/CONTENT_MAP_FROZEN.json`,map);
const id=operationId('zstd','v1-5-7',JSON.parse(fs.readFileSync(`${ev}/OPERATION_PLAN.json`)).scope);
const ledger=readLedger(root);
updateLedger(root,base,'OPERATIONS',ledger.operations.revision,[ref(`${base}/OPERATIONS.json`),ref(`${notes}/PROGRESS.json`),ref(`${notes}/REVIEW_MANIFEST.json`)],d=>{
 const op=d.operations.find(o=>o.id===id);op.state='translating';op.lastValidStage='source-locked';op.reviewManifest=ref(`${notes}/REVIEW_MANIFEST.json`);
 op.artifacts=op.artifacts.filter(r=>r.path!==`${notes}/PROGRESS.json`).concat([ref(`${notes}/PROGRESS.json`),ref(`${ev}/BATCH_CHECK.json`),ref(`${ev}/SELECTIVE_BUILD.log`),ref(`${ev}/BROWSER_REPRESENTATIVES.json`)]);
 op.nextAction='838:英語9定本/日本語5章（1/2/3/5/8）全文review済み。次は4シーケンス・6FSE・7Huffman・9付録/履歴のバッチ。5章を再reviewしない。可搬再生成器/全章リンク/原文download byte/言語selector/codecopy/table keyboard/正式統合・Pages公開は未完。';op.resumeCondition='専用/private/tmp/libx-zstd-formal-838。current manifest5/9とBATCH_CHECK/本文SHA照合、未訳4章だけ開始。root app未追加/本番95313a35不変、他案件root変更を保護。';return d;
});
const run={schemaVersion:1,id:'2026-10-05-838-zstd-reevaluation-and-first-translation-batch',cycle:838,startedAt:'2026-10-05T11:49:35Z',endedAt:at,result:'partial',phase:'再開照合・旧候補新基準再評価・Zstandard正式定本・5章翻訳/別パスレビュー/バッチ検証',model:{configured:'gpt-6.1-sol',configurationEvidence:`${base}/POLICY.json`,runtime:null,runtimeStatus:'not independently exposed',localLLMUsed:false},tools:['current ledger one-time check / existing evidence SHA reuse','isolated production checkout and canonical create-project','offline pnpm install / selective build','same Codex separate-pass full content review','Markdown AST and rendered DOM/link/code/anchor equivalence','CUA desktop/mobile source footer inspection'],inputs:[ref(`${ev}/BASELINE_OPERATIONS.json`),ref(`${ev}/BASELINE_CANDIDATES.json`),ref(`${notes}/source/zstd_compression_format.md`)],outputs:[ref(`${ev}/SELECTION_REVIEW.json`),ref(`${ev}/OPERATION_PLAN.json`),ref(`${ev}/REVIEW_MANIFEST_FROZEN.json`),ref(`${ev}/PROGRESS_FROZEN.json`),ref(`${ev}/CONTENT_MAP_FROZEN.json`),ref(`${ev}/BATCH_CHECK.json`),ref(`${ev}/SELECTIVE_BUILD.log`),ref(`${ev}/BROWSER_REPRESENTATIVES.json`)],discoveryIds:[],detailIds:['zstd','mdbook','rapidjson'],newOperationIds:[id],checks:[{name:'saved selection evidence under current policy',status:'passed',evidence:[ref(`${ev}/SELECTION_REVIEW.json`)]},{name:'first batch structure/DOM/build',status:'passed',evidence:[ref(`${ev}/BATCH_CHECK.json`),ref(`${ev}/SELECTIVE_BUILD.log`)]},{name:'complete project display/integration/publication',status:'pending',evidence:[ref(`${ev}/BROWSER_REPRESENTATIVES.json`)]}],decisions:['新規/公開待ち0、重大不具合なし。LZ4入口はsame-order入力順変動のみで本文欠落なし、低重大度保守候補を保持。','Zstd旧66点/必須6pass/固定根拠18file同SHA/旧選定inputHashを再利用し現行最低60点で別パス採用。旧103記録は改変せず加点なし。','mdBook/RapidJSONは静的表示と原典リンク方式で再評価対象へ戻したが、新方式未試験でdeferred保持。','5章719原行の日本語全文review、9EN機械対応と14rendered article確認。英語未review4章を内容合格としない。','未完成root appなし。公開条件未達、push/外部公開なし。Workers/定期設定なし。'],unresolved:['4章未訳/未review。15リンクは未訳予定JA宛てで正式リンクgate未合格。','可搬canonical再生成器と全案件機械/表示/統合gateは未完。','表ArrowRight直後0でkeyboard成功未確認、言語selector/codecopy/download bytes未実施。'],nextAction:progress.nextAction,resumeCondition:'新規1件枠を保持、OPERATIONSの838案件とPROGRESS/REVIEW hashを照合。5章合格を再利用し未確認4章のみ進め、全条件合格後に限定push→統合Pages→公開後確認。'};
write(`${base}/runs/${run.id}.json`,run);
fs.writeFileSync(`${base}/REPORT.md`,report(root,readLedger(root)));
console.log('838 saved: 5/9 reviewed; operation translating; full project gates pending; no external publication');
