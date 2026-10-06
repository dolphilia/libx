import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
const ROOT='/Users/dolphilia/github/libx',W='/private/tmp/libx-gnu-make-formal-881',n='docs/notes/document-import/gnu-make/v4-4-1',N=ROOT+'/'+n,D=N+'/translations/batch-883',E=path.dirname(new URL(import.meta.url).pathname),R=JSON.parse(fs.readFileSync(N+'/regeneration/ROUTES.json')),hash=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex'),write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const observations=[
  "全22prose/heading/list単位+3code。5要素/入れ子directive3項/コメントの継続と関数・recipe・define例外、物理/論理行、非recipe空白集約、.POSIXの2例外、$+backslash+newline/スペース名変数で空白除去を全文照合。inlinebackslashを原文/英語/保存JAの文字コード92で確認、2文字化はなく未変更。",
  "全5単位。GNUmakefile→makefile→Makefile順、GNU固有時のみGNUmakefile、欠落時組込み暗黙ルール、-f/--file複数の順序/標準名を自動検索しない条件を全文照合。",
  "全18単位+4code+参照脚注全文23語。include読み込み中断/再開、空filenames、TAB/.RECIPEPREFIX禁止、変数展開、共通定義/自動前提、相対path/MSドライブ条件/検索順4dir/.INCLUDE_DIRS/-I-、作り直し後のfatal、-includeの前提も含む無警告、sinclude、DJGPP prefixを照合。FOOT1/DOCF1 IDs保持。",
  "全4単位。MAKEFILES環境変数/先読み空白区切り、defaultgoalなし/欠落非error、再帰通信/最上位設定非推奨、指定makefileなし時の有用例/ログイン自動設定の他者失敗とinclude推奨を照合。",
  "全14単位+2code。読込順各makefileゴール/並列、変更あれば白紙再読込/MAKE_RESTARTS、空レシピによる検索停止、レシピあり前提なしdoublecolonとphonyの非再生成/infinite回避、default名欠落作成/非error、-t/-q/-nでもmakefile実更新、明示ゴール時例外と2mfile例の更新前後recipeを全文照合。",
  "全6単位+全コード。include異recipe制約/何でも一致%/foo上書きとbar別makefile、forceの実在targetでも実行、force空recipeでimplicit検索/依存loop防止を照合。",
  "全15単位+2code（7代入/8define/ルール式）。読み込む2段階/依存グラフ、即時と遅延の2契機、+=のsimple条件/:::=の$→$$/!=の再帰変数、条件式automatic不可→shell、5ルール形式共通のtarget前提即時/recipe遅延を照合。",
  "全7単位+2code。6順序すべて、recipeprefix AND rulecontext条件、1行macroルール化/複数行不可、展開後改行が空白扱いでecho built前提化、eval必要を全文照合。",
  "全23単位+7code。前提だけ/定義順/escape解除と二次展開、top/bottom、automatic scope/main-lib/function、$$@/%/< /^/+の既出ルールと重複全列、recipe最後/明示?*不可/静的*stem・?不可、暗黙一致stem/4変数、D展開後付加と3paths/%→$$*を全文照合。原文の動作は変更・技術監査せず、意味/値/例を保持。"
];
const rows=[];
for(const [i,p] of R.guides.slice(6).entries()){
 const stem=path.basename(p.id,'.md'),draft=D+'/'+stem+'.ja-draft.md',en=N+'/'+p.canonical,body=N+'/regeneration/'+stem+'.body.md',ja=fs.readFileSync(draft,'utf8'),canonical=fs.readFileSync(en,'utf8');
 assert(canonical.includes(fs.readFileSync(body,'utf8').trim()),stem+' adoptedEN');assert(!ja.includes('LIBX_CODE_'));assert(!ja.includes('undefined'));
 rows.push({id:p.id,sourceWords:p.words,codeBlocks:p.codeBlocks,originalHTML:{path:n+'/'+p.sourceFragment,sha256:hash(N+'/'+p.sourceFragment)},canonicalEN:{path:n+'/'+p.canonical,sha256:hash(en)},savedJA:{path:n+'/translations/batch-883/'+stem+'.ja-draft.md',sha256:hash(draft)},method:'Sameagent separatepass AFTERdraftsave;completeoriginalHTML+Englishprose/code+savedJapanese prose/code reading. No separateagent claim;not a machine-only semanticpass.',coverage:'whole-adopted-page',result:'passed-meaning-review',observations:observations[i]});
 let page=canonical.replace('title: '+JSON.stringify(p.titleEN),'title: '+JSON.stringify(p.titleJA)).replace('# '+p.titleEN+'\n','# '+p.titleJA+'\n').replace(fs.readFileSync(body,'utf8').trim(),()=>ja.trim());
 assert(page!==canonical);for(const base of [N+'/canonical/ja',W+'/'+n+'/canonical/ja',W+'/apps/gnu-make/src/content/docs/v4-4-1/ja',W+'/apps/gnu-make/public/source/v4-4-1/edited/ja']){const dest=base+'/'+p.id;fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,page);}
}
write(E+'/MEANING_REVIEW.json',{status:'passed-whole-saved-page-meaning-review',at:new Date().toISOString(),pages:9,sourceWords:4836,originalCodes:21,rows,scope:'Original notices/wholeEnglishGFDL retained unchanged,not translatedorclaimedJapanese review. OriginalGNUsoftware/examplecorrectness not audited/executed. Intrascope links stillEnglishcurrenttargets;finalsame-language links/footnotebackjump delta pendingbeforeformalrelease.'});
write(E+'/REVIEW_CHECK_ATTEMPTS.json',{status:'no-content-fix-needed',action:'Backslash literal inspection',result:'An attempted double-backslash correction assertion failed because actualJA/sourceEN/sourceHTML allalready containedonebackslash codepoint92;no contentmutation,verifiedactualchars ratherthan escapedtool display.'});
console.log('9 whole saved-page meaning reviews recorded;9canonicalJA copiedtoisolatedapp;formalverification pending');
