import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {readLedger,updateLedger,report,counts,hashFile,inventory} from '/Users/dolphilia/github/libx/scripts/project-expansion/ledger.mjs';
const root='/Users/dolphilia/github/libx', dir='docs/notes/project-expansion', ev=dir+'/runs/evidence/2026-10-03-328', source=dir+'/runs/evidence/2026-10-03-327/source/zlib-1.3.2';
const abs=p=>path.join(root,p), ref=p=>({path:p,sha256:hashFile(abs(p))}), write=(name,data)=>fs.writeFileSync(abs(ev+'/'+name),JSON.stringify(data,null,2)+'\n',{flag:'wx'});
const before=readLedger(root); assert.equal(before.candidates.revision,64); assert.equal(before.operations.revision,483);
const inputs=[ref(dir+'/CANDIDATES.json'),ref(dir+'/OPERATIONS.json'),ref(dir+'/POLICY.json'),ref(source+'/zlib.h'),ref(source+'/zconf.h')];
for(const n of ['API_NATIVE_DOM_V3.json','ZCONF_NATIVE_DOM_V3.json']) assert.equal(JSON.parse(fs.readFileSync(abs(ev+'/'+n))).allEqual,true);
write('ZLIB_SOURCE_CONTENT_ASSESSMENT.json',{
 status:'passed',checkedAt:new Date().toISOString(),purpose:'固定原典の全文読解による候補自立性判定。翻訳の全文レビューとは別工程。',
 coverage:[{file:ref(source+'/zlib.h'),lines:2057,ranges:[[1,700],[360,420],[701,1000],[1001,1300],[1301,1600],[1601,1850],[1851,2057]],note:'初回1–700出力の省略は360–420の再読とnative AX全文表示1–700で補完。省略出力だけを読了根拠にしない。'}, {file:ref(source+'/zconf.h'),lines:551,ranges:[[1,280],[281,551]]}],
 companionReading:'327にREADME全115行、FAQ全371行/44問、zlib.3全149行、LICENSE全22行を読解済み。固定ハッシュは327測定記録と一致。',
 majorCoverage:['z_stream/gz_headerの型・フィールド・custom allocator初期化/16bit条件','deflate/inflate全flush値と返り値、Z_BUF_ERROR非致命的、終了・reset・辞書','raw/zlib/gzip windowBits相違、8要求/9実装制限、gzip複数memberのinflateとgzreadの違い','高度なコピー・同期・bit prime/mark・back callback・header情報の寿命','1.3.2 _z型utility/上限APIとWindows long32bit、deflateUsed','gzip非blocking stall/部分item/errno、seekとtellとoffsetの違い、gzcloseの未完了エラー','checksum初期化/combine負長の条件、CRC内部conditioning','条件付きZ_SOLO/Z_PREFIX/largefile/WinAPI、原典undocumented末尾を全保持','zconfの配置・型・memory/window・oldplatform条件を全保持'],
 decision:'主要な利用説明は公式ヘッダーと同版付録に自立している。独立したAPIマニュアルとしてselfContained pass。実装から不足説明を新規生成しない。',
 limitations:['deflateTuneは元文書が高度な内部最適化の意味をdeflate.cに委ねている。元参照を保持し説明を捏造しない。主要圧縮/展開の利用説明の欠落ではない。','原典undocumented functionsは宣言と未文書化表示をそのまま保持。説明を埋めて文書化済みと偽らない。','原文に誤記/矛盾があり下記別注釈が必要。自立性passは原文の全記述が無誤謬という意味ではない。'],
 originalSourceAnnotations:[
  {lines:[104,503],finding:'実フィールドadlerに対しinflate本文にstrm->adler32と記載。原文は保持し識別子差を別注釈にする。'},
  {lines:[769,782],finding:'宣言deflateBound_zに対し本文delfateBound_zと誤記。定本を黙って修正しない。'},
  {lines:[905,910],finding:'inflateInit2本文にheaderをpossibly読む記述とcurrent implementationは処理せずinflateまでdeferする記述が併存。後者を落とさず版固有の原文説明として注意を残す。'},
  {lines:[1086],finding:'much eachは元の語句。翻訳時は必要条件を保持し、原文誤記との区別を残す。'}
 ],translationReview:'not-started',softwareExecution:false
});
write('ZLIB_TRIAL_REVIEW.json',{
 status:'partial',version:3,source:[ref(source+'/zlib.h'),ref(source+'/zconf.h')],
 testedScope:'両ヘッダー全2608行を原順序のprose/codeへ表示。全原コメント、宣言、型、定数、条件枝と末尾を保持。',
 machine:{status:'passed',evidence:ref(ev+'/v3/ZLIB_HEADER_TRIAL_MACHINE_CHECK.json'),apiBlocks:194,zconfBlocks:42,rawReconstruction:'byte-equal',nativeDom:'all236blocks exact display text'},
 nativeEvidence:[ref(ev+'/API_NATIVE_DOM_V3.json'),ref(ev+'/ZCONF_NATIVE_DOM_V3.json'),ref(ev+'/API_TOP.png'),ref(ev+'/API_TAIL_SCROLLED_V3.png'),ref(ev+'/ZCONF_TOP_V3.png')],
 visual:'元通知冒頭、API末尾の未文書化/条件宣言/閉じ括弧と必須ヘッダー冒頭を確認。API_TAIL_V3.pngはキー操作で末尾へ移動せず冒頭だったため末尾の証拠に使わない。後続scroll後の画像で末尾を確認。',
 fixes:[{version:1,issue:'任意の行頭*を除去し*must*の先頭*が欠落した。v2でコメント装飾の共有形式だけを除去。',preserved:ref(ev+'/CONVERTER_V1.py')},{version:2,issue:'HTML pre要素の仕様により先頭改行が1文字欠落。native DOM不一致を確認。v3でpre/code構造にし元の改行も保持。',failedNative:ref(ev+'/API_NATIVE_DOM.json')}],
 apiCountLimitation:'正規表現の101symbolはコメント内prototypeと条件枝を含む字句リスト。zconfのZEXTERN macroを起点に次の文へ越境して拾った1symbolはAPIでない。独立API全数として採用しない。精密なAPI分類は未了。',
 next:'FAQ44問/README/man/licenseの試験、読みやすいAPI小見出し/署名と説明分離、リンク内部化、Astro形式試験、難しい表/サンプル表示確認、工数見積もりを追加。',
 conversionGate:'unknown',workloadGate:'unknown',softwareExecution:false,localServer:'owned temporary servers 19653/19654/19655 stopped, tab52 closed'
});
write('ZLIB_JAPANESE_OBSERVATION_PARTIAL.json',{
 status:'partial',checkedAt:new Date().toISOString(),queries:['zlib 1.3.2 マニュアル 日本語 翻訳','zlib マニュアル 日本語 奥村'],
 observations:[
  {url:'http://oku.edu.mie-u.ac.jp/~okumura/compression/zlib.html',result:'web open InternalError。原URLは引き続き未読。'},
  {url:'https://okumuralab.org/~okumura/compression/zlib.html',readLines:[0,122],wholePage:true,author:'奥村晴彦',lastModified:'2007-02-14',finding:'同著者のzlib入門を全文確認。1.1.x/1.2.x共通と明示された基本/高次関数入門で、1.3.2全文API訳とは範囲が異なる。旧URLからの移転redirectは未検証で同一URL扱いしない。'},
  {url:'https://www.s-yata.jp/docs/zlib/',readLines:[0,178],wholePage:false,lastModified:'2012-03-08',finding:'C利用入門とzlib1.1.4ヘッダー和訳へのリンクあり。残り179–311行と和訳リンク本体の確認を次回へ。'},
  {url:'https://libof.com/ja/man/zlib',result:'検索要約のみ。本文未読で1.3.2の全文訳有無や品質の判定に用いない。'}
 ],classification:'unresearched',scores:'not-assigned',next:'矢田記事179–311行とリンクされた日本語ヘッダー訳の版/範囲を本文で確認。必要な追加検索を限定して1.3.2の追加API/全範囲との差を記録。既存日本語資料を不存在扱いしない。'
});
const outputs=inventory(root,ev);
const next='zlib候補328:全API header2057行/zconf551行読解済みでselfContained pass。v3全236表示block/native DOM一致、*must*除去とpre先頭改行欠落を修正、元試験失敗も保存。次は全README/FAQ44/man/license変換とAPI小見出し/署名code分離・元リンク・難しい表示/独立API分類を確認し、工数見積もりを確定。矢田日本語記事179–311行と旧1.1.4和訳リンク本文を確認し1.3.2との差で採点・別選定review。全gate合格/70点以上後に正式app着手。ND別冊guideは対象外、原文誤記adler32/delfateBound_zやinflateInit2併存説明は別注釈を設ける。';
updateLedger(root,dir,'CANDIDATES',64,[...inputs,...outputs],d=>{
 const z=d.candidates.find(c=>c.id==='zlib');
 z.conditions.selfContained={status:'pass',reason:'328:公式zlib.h全2057行と必須zconf全551行の内容確認を完了。主要なストリーム/utility/gzip/checksumと条件/寿命/返り値説明が同版原資料に自立。内部最適化の元実装参照と未文書化宣言は原文表示を保持し新規説明を生成しない。',evidence:[ref(ev+'/ZLIB_SOURCE_CONTENT_ASSESSMENT.json')]};
 z.conditions.conversion={status:'unknown',reason:'328:全両headerの損失なし再構成/全236native DOM本文一致。試験で判明した強調記号/先頭改行欠落をv3で修正。残るREADME/FAQ/man/license/リンク/読みやすいAPI構造の試験未了。',evidence:[ref(ev+'/ZLIB_TRIAL_REVIEW.json'),ref(ev+'/v3/ZLIB_HEADER_TRIAL_MACHINE_CHECK.json')]};
 z.conditions.workload.reason='328:21680code込みtokens/全2608header行を読解し変換試験を具体化。字句API101は条件・コメント・誤検出があり独立全数ではない。FAQ/man等変換、API分類、初回/更新工数は未確定。';
 z.conditions.workload.evidence=[...z.conditions.workload.evidence,ref(ev+'/ZLIB_TRIAL_REVIEW.json')];
 z.japaneseResearch.queries=['zlib 1.3.2 マニュアル 日本語 翻訳','zlib マニュアル 日本語 奥村'];
 z.japaneseResearch.evidence=[ref(ev+'/ZLIB_JAPANESE_OBSERVATION_PARTIAL.json')];
 z.decision='328:固定原文全headerの読解により自立性passを追加。機械とnative DOM全236block照合、2変換不具合を修正。既存日本語入門/旧和訳を発見し比較は未了。変換/workload/JP採点/選定未完了、採用0件。'; z.resumeCondition=next;return d;
});
updateLedger(root,dir,'OPERATIONS',483,[ref(dir+'/OPERATIONS.json'),ref(dir+'/CANDIDATES.json'),...outputs],d=>{d.operations.find(o=>o.appId==='cjson').nextAction=next;return d;});
const after=readLedger(root), prev=JSON.parse(fs.readFileSync(abs(dir+'/runs/2026-10-03-327-zlib-fixed-input-boundary-rights.json'))),id='2026-10-03-328-zlib-content-header-conversion-trial';
fs.writeFileSync(abs(dir+'/runs/'+id+'.json'),JSON.stringify({...prev,id,cycle:328,startedAt:'2026-10-03T00:45:00.000Z',endedAt:new Date().toISOString(),phase:'zlib-content-header-conversion-trial',result:'partial',inputs,outputs:[...outputs,ref(dir+'/CANDIDATES.json'),ref(dir+'/OPERATIONS.json')],tools:['Whole fixed API/zconf source reading','Lossless header segmentation/HTML parser check','CUA native browser whole236block DOM comparison and screenshots','Bounded Japanese discovery and primary author pages reading','LedgerCAS'],checks:[{name:'zlib source selfContained assessment',status:'passed',evidence:[ref(ev+'/ZLIB_SOURCE_CONTENT_ASSESSMENT.json')]},{name:'two headers final trial fullblock machine/native DOM',status:'passed',evidence:[ref(ev+'/v3/ZLIB_HEADER_TRIAL_MACHINE_CHECK.json'),ref(ev+'/API_NATIVE_DOM_V3.json'),ref(ev+'/ZCONF_NATIVE_DOM_V3.json')]},{name:'whole conversion/workload/JP/selection',status:'pending',evidence:[ref(ev+'/ZLIB_TRIAL_REVIEW.json'),ref(ev+'/ZLIB_JAPANESE_OBSERVATION_PARTIAL.json')]}],decisions:['前goalturnは方針の整合確認のみでauthoritative更新なし。次の安全な作業としてzlib全原文確認と実変換試験を進め、候補台帳を更新。','内容読解と機械/native DOM照合は別記録。日本語訳レビュー/正式appは未着手。','V1の*must*欠落/V2のpre先頭改行欠落を発見しV3で修正。成功検査のみで失敗を隠さない。','公式原文の誤記/矛盾は別注釈にし、境界や定本を黙って狭めない。','日本語入門と旧訳紹介を発見。全文比較・採点未了で不存在や低品質と断定しない。','Astra設定/runtime未取得を維持。ローカルLLM/Workers/定期設定/外部公開なし。Awesome・ユーザー変更は保護。'],unresolved:['FAQ/README/man/license conversion, readable API structures/links, independent API inventory/workload','Japanese whole scope/version comparison, scoring and separate selection review'],nextAction:next,resumeCondition:next,counts:counts(after)},null,2)+'\n',{flag:'wx'});
fs.writeFileSync(abs(dir+'/REPORT.md'),report(root,after)); console.log(counts(after));
