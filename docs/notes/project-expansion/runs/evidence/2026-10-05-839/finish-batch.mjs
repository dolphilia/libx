import fs from 'node:fs';
import assert from 'node:assert/strict';
import {hashFile,readLedger,updateLedger,report} from '../../../../../../scripts/project-expansion/ledger.mjs';
const root=process.cwd(),base='docs/notes/project-expansion',ev=`${base}/runs/evidence/2026-10-05-839`,notes='docs/notes/document-import/zstd/v1-5-7';
const ref=p=>({path:p,sha256:hashFile(p)});
const write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const map=JSON.parse(fs.readFileSync(`${notes}/CONTENT_MAP.json`));
const prior=JSON.parse(fs.readFileSync(`${ev}/REVIEW_BEFORE.json`));
const at=new Date().toISOString();
const coverage=p=>({...ref(p),coverage:[[1,fs.readFileSync(p,'utf8').replace(/\n$/,'').split('\n').length]]});
const findings={
'04-sequences':['別パスで原文372行・定本・訳文を全文対照。1–3byte件数分岐・zero時Repeat表非更新、4modeとmax accuracy9/8、code0–35/0–52/0–N・全12表・4codeを保持。','初期state順LL→Offset→ML、追加bits順Offset→ML→LL、更新順LL→ML→Offset・最後は更新しない・stream完全消費を保持。既定分布accuracy6/6/5・N28/536870908と全数値を保持。','repeat例外literal_length0、Repeat1-1==0破損、初期1/4/8・辞書/直近Compressed_Block・全更新例を保持。日本語隣接時に表示が崩れたunderscore強調をstarへ限定変更、語句同一と最終DOM emを確認。レビュー修正はRepeat_Modeの直近の有効ブロックの日本語語順とshouldの強制化を修正した2節のみ再対照。原byte0条件や大小文字を勝手に技術修正しない。'],
'06-fse':['別パスで原文205行・定本・訳文を全文対照。entropy用途・状態index/3field/log、element逆順とelement内部little endianを区別。分布headerは順方向/low4+5、>=2nonzero、remaining+1・small98 values・4行表を保持。','Value-1/Value0の特殊確率-1/合計では1・zero時2bitrepeat3継続・整数byteunused・有効範囲外nonzero破損/offset拒否許可を保持。','正規化分布から2^Accuracy_Log行、特殊低確率の末尾割当/完全reset、naturalorder・modularcode2行・skip・N/N+1割当を保持。5states例1,84,39,122,77/32・8shares16/32・Baselinewrap・全7行表・確率1特例と付録参照を保持。'],
'07-huffman':['別パスで原文241行・定本・訳文を全文対照。逆読み/padding0–7+1/endbyte非zero・prefixcode11bit、Weight0/1/nonzero>=2/最後省略/2冪補完と3公式codeを保持。','header<128 FSEサイズ/ >=128 4bit direct top/bottom・ceil・128weights/129symbols・literal>128不可、2stateeven/odd共有・State1先・overflow不足bits0・最終各symbol・>255/初期欠落破損/最低2を保持。','Weight/Nbits順と全5表・ABEFの2コード例・終端flagとstream完全消費を保持。原ABEF表E/Fと先行prefix表の相違は原文のまま、EN/JAフッターで注記し固定原典/参照実装へ案内。原文自体の追加技術監査は行わない。強調のunderscoreが文字として見えた5語をstarへ変更し、同一語句のem表示を確認。'],
'09-appendices':['別パスで原文234行・定本・訳文を全文対照。事前定義のliteral/match/offset用FSE表3つ（64/64/32states）の全数値を保持。本文は構築例のcrosscheck用途を説明。','decodeCorpusの原リンク/ランダムvalidframe/全部decode又は理由を示すerror（メモリ例）のshouldを保持。全27版変更0.4.3→0.1.0と氏名・RFC8878/RFC8478・nbSeq==0・v0.8+・11bitを保持。レビューで0.2.8の訳を「討議に関する」へ補正し該当項のみ再対照。']
};
const pages=map.pages.map(p=>{
 const key=p.id.split('/')[1].replace(/\.md$/,'');
 if(!findings[key]){const old=prior.pages.find(x=>x.id===p.id);assert.equal(old.status,'passed');for(const r of [old.source,old.canonical,old.translation])assert.equal(hashFile(r.path),r.sha256);return old;}
 return{id:p.id,status:'passed',method:'ai-content-review',model:'configured gpt-6.1-sol; actual runtime not independently exposed; no local LLM',reviewedAt:at,separateReviewPass:true,source:coverage(p.source.path),canonical:coverage(p.canonical.path),translation:coverage(`${notes}/translations/ja/${p.id}`),findings:findings[key],passDescription:'作成後の独立した別パスで原文/定本/訳文を全文読解。修正後は変更箇所と依存範囲を再対照。数値/構造検査を意味レビューの代用にしない。'};
});
const manifest={schemaVersion:1,scope:map.pages.map(p=>p.id),completedPages:9,unreviewedPages:0,pages};
write(`${notes}/REVIEW_MANIFEST.json`,manifest);write(`${ev}/REVIEW_MANIFEST_FROZEN.json`,manifest);
for(const p of map.pages){p.canonical=ref(p.canonical.path);p.translation=ref(`${notes}/translations/ja/${p.id}`);p.contentReview='passed';}
write(`${notes}/CONTENT_MAP.json`,map);write(`${ev}/CONTENT_MAP_FROZEN.json`,map);
const progress={schemaVersion:1,workspace:map.workspace,state:'content-reviewed',translatedPages:9,reviewedPages:9,totalPages:9,pages:pages.map(p=>({id:p.id,translation:'complete',review:p.status})),batch:'839:残り4/6/7/9章、原文1052行。838の5章はSHA同一で再利用。',machine:'9EN再生成一致・9JA code/table/heading/anchor・18article/123内部link（pending0）、HTTP原文・NOTICE bytes一致。',publication:'not-ready',nextAction:'専用checkoutに可搬check:content/review packetを組み込み、統合・内容/整合性・差分限定release検証を完了。コードコピーはUI貼り付けで期待する63字の式と実一致。全公開条件後に対象push→統合Cloudflare Pages→公開後確認。'};
write(`${notes}/PROGRESS.json`,progress);write(`${ev}/PROGRESS_FROZEN.json`,progress);
const ledger=readLedger(root);const opid=ledger.operations.operations.find(o=>o.appId==='zstd').id;
updateLedger(root,base,'OPERATIONS',ledger.operations.revision,[ref(`${base}/OPERATIONS.json`),ref(`${notes}/REVIEW_MANIFEST.json`),ref(`${notes}/CONTENT_MAP.json`)],d=>{
 const op=d.operations.find(o=>o.id===opid);op.state='content-reviewed';op.lastValidStage='content-reviewed';op.reviewManifest=ref(`${notes}/REVIEW_MANIFEST.json`);
 const updates=[ref(`${notes}/PROGRESS.json`),ref(`${notes}/CONTENT_MAP.json`),ref(`${ev}/BATCH_CHECK.json`),ref(`${ev}/SELECTIVE_BUILD_ISOLATED_FINAL.log`),ref(`${ev}/REPLAY_CHECK.json`),ref(`${ev}/BROWSER_REPRESENTATIVES.json`),ref('scripts/importers/import-zstd-1.5.7.mjs')];
 op.artifacts=op.artifacts.filter(r=>!updates.some(x=>x.path===r.path)).concat(updates);
 op.checks.canonical={status:'passed',evidence:[ref(`${ev}/REPLAY_CHECK.json`)]};
 op.nextAction=progress.nextAction;op.resumeCondition='専用/private/tmp/libx-zstd-formal-838。9/9reviewと現SHAを再利用、正式sharedintegration/限定release工程から再開。root app未追加、他案件/rootユーザー変更を含めない。';return d;
});
const run={schemaVersion:1,id:'2026-10-05-839-zstd-final-translation-batch',cycle:839,startedAt:'2026-10-05T12:14:05.394Z',endedAt:at,result:'partial',phase:'残り4章翻訳・別パス全文レビュー・可搬定本再生成・全章構造/リンク・代表操作',model:{configured:'gpt-6.1-sol',configurationEvidence:`${base}/POLICY.json`,runtime:null,runtimeStatus:'not independently exposed',localLLMUsed:false},tools:['same Codex separate-pass full content review','source hash locked portable canonical generator','selective isolated build / Markdown AST / rendered DOM','CUA locale/search/mobile/table keyboard/code feedback','local HTTP download SHA'],inputs:[ref(`${ev}/PROGRESS_BEFORE.json`),ref(`${ev}/REVIEW_BEFORE.json`),ref(`${notes}/source/zstd_compression_format.md`)],outputs:[ref(`${ev}/REVIEW_MANIFEST_FROZEN.json`),ref(`${ev}/PROGRESS_FROZEN.json`),ref(`${ev}/CONTENT_MAP_FROZEN.json`),ref(`${ev}/BATCH_CHECK.json`),ref(`${ev}/SELECTIVE_BUILD_ISOLATED_FINAL.log`),ref(`${ev}/REPLAY_CHECK.json`),ref(`${ev}/BROWSER_REPRESENTATIVES.json`)],discoveryIds:[],detailIds:['zstd'],newOperationIds:[],checks:[{name:'full 9 chapter translation/review/canonical/batch checks',status:'passed',evidence:[ref(`${ev}/REVIEW_MANIFEST_FROZEN.json`),ref(`${ev}/BATCH_CHECK.json`),ref(`${ev}/REPLAY_CHECK.json`)]},{name:'formal integration and external publication',status:'pending',evidence:[]}],decisions:['838で合格済み5章の入力SHA同一を確認し再reviewしない。残り4章は草稿保存後に原文/定本/訳文を別パス全文読解。','原ABEF表相違はoriginal unchangedと英日注記で対応し、原典の技術監査を拡大しない。','原文/通知はローカルHTTPでbyte同一。言語同章切替・Huffman検索・390px本文はみ出しなし/コードと表個別overflow・表ArrowRight39px移動、コードコピー実63字のUI貼り付け一致を確認。','rootでの対象buildはapp未追加により対象なしで失敗。直ちに専用cloneへ修正し23page build成功。合格証拠は専用clone最終ログのみ。','Root他変更混在なし。公開条件未達のためpush/外部公開なし。Workers/定期設定なし。'],unresolved:['正式content gateとshared integration/release差分・公開・公開後確認は未完。','未確認を合格にしていない。コードコピーはclipboard toolの空読み取り後、UI貼り付けによって期待式63字と一致を確認。'],nextAction:progress.nextAction,resumeCondition:'OPERATIONS最新Zstd案件/9章review/PROGRESSと専用cloneから未完工程へ。バッチ完了をgoal完了にしない。'};
write(`${base}/runs/${run.id}.json`,run);
fs.writeFileSync(`${base}/REPORT.md`,report(root,readLedger(root)));
console.log('839 recorded: 9/9 full reviews; release/integration pending');
