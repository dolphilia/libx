import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
const ROOT='/Users/dolphilia/github/libx',W='/private/tmp/libx-gnu-make-formal-881',n='docs/notes/document-import/gnu-make/v4-4-1',N=ROOT+'/'+n,D=N+'/translations/batch-882',E=path.dirname(new URL(import.meta.url).pathname),R=JSON.parse(fs.readFileSync(N+'/regeneration/ROUTES.json')),hash=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex'),write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const observations=[
 '全21prose/heading単位。作者・3.76・POSIX6.2・全用途・時刻判定・読書順/第2章例外・報告の非保証/最小再現/非自由ツール回避/期待結果/2経路/version/OS/READMEを全文照合。3codeの宛先/URL/コマンド保持。',
 '全12単位。8C/3header、ヘッダー変更時の全include元再コンパイル、新旧すべてのobjectのlink、target/prerequisite/recipe、各行TABと.RECIPEPREFIX代替、前提条件なしclean、実行時期/更新関係を照合。1code保持。',
 '全10単位と完全makefile/2commands。8object/C/3headerの依存関係、バックスラッシュ連結、.oの二役、生成前提を先に更新、レシピ先頭TAB/実装責任、clean明示実行/phony/error参照を照合。3code保持。',
 '全9単位。先頭.名の除外と/例外、CLI/.DEFAULT_GOAL、推移依存、source/headerが新しいORobject欠落、生成Cの先更新、edit欠落ORobjectが新しい、insert.c/command.h変更の対象3objectsを照合。1code保持。',
 '全12単位。重複リストの追加漏れ、6種変数名/$(objects)、暗黙.o←.c/cc-c、レシピ省略を条件とする.c前提省略、2変更/全makefile/clean参照を全文照合。4code保持。変数のsubstitutionを代入から置換に修正し該当2文を再読。',
 '全11単位。暗黙ルールのみという条件、前提条件によるgroup/3header各対象、好み/compactと情報集約、.PHONYと-rmの別々の役割、先頭clean禁止/default edit、引数なし非実行/明示makecleanを照合。3code保持。'
];
const rows=[];
for(const [i,p] of R.guides.slice(0,6).entries()){
 const stem=path.basename(p.id,'.md'),draft=D+'/'+stem+'.ja-draft.md',en=N+'/'+p.canonical,body=N+'/regeneration/'+stem+'.body.md',ja=fs.readFileSync(draft,'utf8'),canonical=fs.readFileSync(en,'utf8');
 assert(canonical.includes(fs.readFileSync(body,'utf8').trim()),stem+' adoptedEN');assert(!ja.includes('LIBX_CODE_'));assert(!ja.includes('undefined'));
 rows.push({id:p.id,sourceWords:p.words,codeBlocks:p.codeBlocks,originalHTML:{path:n+'/'+p.sourceFragment,sha256:hash(N+'/'+p.sourceFragment)},canonicalEN:{path:n+'/'+p.canonical,sha256:hash(en)},savedJA:{path:n+'/translations/batch-882/'+stem+'.ja-draft.md',sha256:hash(draft)},method:'Sameagent separatepass AFTERdraftsave;completeoriginalHTML+Englishprose/code+savedJapanese prose/code reading. No separateagent claim;not a machine-only semanticpass.',coverage:'whole-adopted-page',result:'passed-meaning-review',observations:observations[i]});
 let page=canonical.replace('title: '+JSON.stringify(p.titleEN),'title: '+JSON.stringify(p.titleJA)).replace('# '+p.titleEN+'\n','# '+p.titleJA+'\n').replace(fs.readFileSync(body,'utf8').trim(),()=>ja.trim());
 assert(page!==canonical);for(const base of [N+'/canonical/ja',W+'/'+n+'/canonical/ja',W+'/apps/gnu-make/src/content/docs/v4-4-1/ja',W+'/apps/gnu-make/public/source/v4-4-1/edited/ja']){const dest=base+'/'+p.id;fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,page);}
}
write(E+'/MEANING_REVIEW.json',{status:'passed-whole-saved-page-meaning-review',at:new Date().toISOString(),pages:6,sourceWords:3180,originalCodes:15,rows,scope:'Original notices/wholeEnglishGFDL retained unchanged,not translatedorclaimedJapanese review. OriginalGNUsoftware/examplecorrectness not audited/executed. Intrascope links stillEnglishcurrenttargets;labels explicitly Englishoriginal. Batch2 language-switch/link delta pending.'});
write(E+'/DRAFT_SAVE_FAILURE.json',{status:'corrected',action:'Initialsave-drafts.mjs syntax',reason:'Unescaped inline backticks inside JS template literal',correction:'Converted translations to JSON-quoted strings;successful subsequent saveall6;no draft/code undefined accepted'});
console.log('6 whole saved-page meaning reviews recorded;6canonicalJA copiedtoisolatedapp;formalverification pending');
