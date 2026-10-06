import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),base='/private/tmp/libx-candidate-sources-585/jq',root='/Users/dolphilia/github/libx',ev=root+'/docs/notes/project-expansion/runs/evidence/2026-10-04-590';
const yaml=require('/private/tmp/libx-gperf-integration-20261004/node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml');
const yaml2=require('/private/tmp/libx-gperf-integration-20261004/node_modules/.pnpm/yaml@2.7.1/node_modules/yaml');
const hash=s=>crypto.createHash('sha256').update(s).digest('hex'),read=p=>fs.readFileSync(base+'/'+p,'utf8');
const raw=read('docs/content/manual/v1.8/manual.yml'),manual=yaml.load(raw); assert.deepEqual(manual,yaml2.parse(raw));
const tree=JSON.parse(fs.readFileSync(root+'/docs/notes/project-expansion/runs/evidence/2026-10-04-583/JQ_TREE.json'));
assert.equal(tree.truncated,false); assert.equal(tree.sha,'34f7186b86743a083a589741b6cea95293524108');
const selected='docs/content/manual/v1.8/manual.yml';
const legal=read('COPYING'); assert(legal.includes('everything found under the docs/ subdirectory')); assert(legal.includes('Creative Commons CC BY 3.0'));
const footer=read('docs/templates/shared/_footer.html.j2'); assert(footer.includes('license (docs)'));
const reference=new Set(['README.md','NEWS.md','AUTHORS','docs/README.md','docs/Pipfile','docs/Pipfile.lock','docs/build_manpage.py','docs/build_mantests.py','docs/build_website.py','docs/manual_schema.yml','docs/validate_manual_schema.py','docs/templates/manual.html.j2','docs/templates/shared/_footer.html.j2','docs/templates/shared/_head.html.j2','docs/templates/shared/_navbar.html.j2','.gitattributes']);
const files=tree.tree.map(x=>{
 let action,reason,destination=null;
 if(x.type==='tree'){action='reference';reason='ディレクトリ構造のみ。子ファイルは個別分類。';}
 else if(x.path===selected){action='split';reason='正式1.8.2に同梱の公式1.8 Manual全量。導入、全14節、全entryと例、man固有の導入/終文も付録として保持。';destination='intro + 14 section pages + manpage appendix';}
 else if(x.path==='COPYING'){action='adopt';reason='原著作権・文書CC BY3.0指定と免責、他ソフトウェア通知を全文原文保持。';destination='original-notices + source packet/COPYING';}
 else if(x.path==='docs/content/manual/manual.yml'){action='reference';reason='公式default aliasは固定v1.8/manual.ymlへ接続。同一本文の重複掲載をしない。';}
 else if(reference.has(x.path)){action='reference';reason='固定版・生成・schema・出典/帰属/アンカー処理の検査参照。サイトruntimeへコードを取り込まない。';}
 else if(x.path.startsWith('docs/content/manual/')){action='external-reference';reason='旧版または開発版は今回の固定1.8 Manual範囲外。公式版リンクを保持、別版混在しない。';}
 else if(x.path.startsWith('docs/content/')){action='external-reference';reason='公式ホーム/導入tutorial/配布案内は独立文書。manual本文内の案内は公式外部URLを保持。';}
 else if(x.path.startsWith('docs/public/')||x.path.startsWith('docs/templates/')){action='exclude';reason='上流のサイトUI/画像ロゴ/検索/配信資産。manualのYAML本文には含めず正規Astro templateで配信。Bootstrap等の第三者UIを複製しない。';}
 else {action='exclude';reason=x.type==='commit'?'上流ソフトウェアsubmodule。文書入力範囲外、再帰取得・掲載しない。':'ソフトウェア実装/ビルド/テスト/運用のファイル。独立した公式Manualの入力範囲外。';}
 return {...x,action,reason,destination};
});
assert.equal(files.length,453); assert.equal(files.filter(x=>x.action==='split').length,1);
const sectionId=s=>s.replaceAll(' ','-').replace(/[^-a-zA-Z0-9_]/g,'').toLowerCase();
const entryId=s=>{let t=s.replace(/[`;]|: .*|\(.*?\)| \[.+\]/g,'').replace(/ ?\/ ?|,? /g,'-').replace(/\b([^-]+)(?:-\1)+\b/g,'$1');if(/^(split|first-last-nth)$/.test(t))t+=s.includes(';')?'-2':'-1';return t.toLowerCase();};
const ids=new Set(),sections=manual.sections.map((s,i)=>{
 const id=sectionId(s.title); assert(!ids.has(id));ids.add(id);
 return {index:i,title:s.title,id,bodyHash:s.body===undefined?null:hash(s.body),bodyBytes:Buffer.byteLength(s.body||''),entries:(s.entries||[]).map((e,j)=>{
 const id=entryId(e.title);assert(!ids.has(id));ids.add(id);
 return {index:j,title:e.title,id,bodyHash:hash(e.body),bodyBytes:Buffer.byteLength(e.body),examples:(e.examples||[]).map((x,k)=>({index:k,program:hash(x.program),input:hash(x.input),outputs:x.output.map(hash),outputCount:x.output.length,emptyOutputArray:x.output.length===0,firstOutputEmpty:x.output[0]==='',programBytes:Buffer.byteLength(x.program),inputBytes:Buffer.byteLength(x.input)}))};
 })};
});
const strings=[];function walk(x,p=''){if(typeof x==='string')strings.push({path:p,text:x});else if(Array.isArray(x))x.forEach((v,i)=>walk(v,p+'/'+i));else if(x&&typeof x==='object')Object.entries(x).forEach(([k,v])=>walk(v,p+'/'+k));}walk(manual);
const special=strings.filter(x=>/!\[|<img|<svg|<script|<iframe|\{\{|\{%/.test(x.text));
const counters={sections:sections.length,entries:sections.reduce((n,s)=>n+s.entries.length,0),examples:sections.reduce((n,s)=>n+s.entries.reduce((n,e)=>n+e.examples.length,0),0),uniqueSectionEntryAnchors:ids.size,allStringFields:strings.length,syntaxInclusiveWords:strings.reduce((n,x)=>n+(x.text.match(/\S+/g)||[]).length,0),specialResourceFields:special.map(x=>x.path)};
assert.equal(counters.sections,14);
fs.mkdirSync(ev);
const write=(n,o)=>fs.writeFileSync(ev+'/'+n,JSON.stringify(o,null,2)+'\n',{flag:'wx'});
write('JQ_BOUNDARY.json',{at:new Date().toISOString(),status:'complete-boundary-not-content-review',version:'1.8.2',manualVersion:'1.8',commit:tree.sha,scope:'公式jq 1.8 Manual YAML全量、全14節・全entry/例、manpage_intro/epilogue付録と原COPYING。実装から説明を追加生成しない。',rawSha256:hash(raw),parsersAgree:true,parserVersions:['js-yaml 4.1.0','yaml 2.7.1'],files,sections,counters,specialFields:special.map(x=>({path:x.path,sha256:hash(x.text)})),resourceLimitation:'構文候補の機械列挙であり、全Markdown ASTのリンク/表/HTMLの変換保全確認は次工程。文書自己完結性の全文内容レビューは未実施。'});
write('JQ_LICENSE_FULFILLMENT.json',{at:new Date().toISOString(),status:'rights-operational-decision-and-fulfillment-defined',license:'CC BY 3.0 Unported',softwareFallback:false,basis:[{path:'COPYING',sha256:hash(legal)},{path:'docs/templates/shared/_footer.html.j2',sha256:hash(footer)},{path:'docs/content/manual/v1.8/manual.yml',sha256:hash(raw)},{path:'docs/notes/project-expansion/runs/evidence/2026-10-04-585/CC_BY_3_0.txt',sha256:hash(fs.readFileSync(root+'/docs/notes/project-expansion/runs/evidence/2026-10-04-585/CC_BY_3_0.txt'))}],checkedScope:'COPYING全文、footer全文、固定manualのmanpage_epilogue著者欄と全YAML文字列中のlicense/copyright指定を機械列挙。第三者UI・ソフトウェア実装は採用しない。',noticeJa:'出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。',noticeEn:'Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.',placement:{eachEnJaPage:'出典欄に上記注記・原作タイトル/著者・原文URI・固定Git原資料URI・CC BY 3.0 URI・原通知全文/免責全文へのローカルリンクを置く。訳者表示と同等以上の目立ち方を保つ。',originalNotices:'原COPYING全文を変更せず掲載。コードMITと文書CC BY3.0の範囲を明記。',licensePage:'585固定CC_BY_3_0.txt全文をそのまま提供しライセンスの免責・制限を保持。',sourcePacket:'今回の採用YAML・検査参照の生成/schema/テンプレート・COPYING・CC全文・manifest/取得URIとhashを含む。第三者サイトUI/他版/実装は混在しない。',changeLog:'分割・形式変換・内部リンク対応・日本語翻訳・編集注釈を原文と区別して履歴/出典に記録。'},uris:{original:'https://jqlang.org/manual/v1.8/',fixed:'https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml',license:'https://creativecommons.org/licenses/by/3.0/',legalcode:'https://creativecommons.org/licenses/by/3.0/legalcode'},conditions:['3(b)翻訳等の変更表示','4(a)通知/免責/ライセンスURI保持、追加制限/DRMなし','4(b)著者/原作タイトル/URI/翻訳クレジット、非承認表示','4(c)忠実な移植/翻訳、全文内容レビュー別工程','合理的な帰属削除要求が到着した場合は対応を記録'],unverified:'履行方法は確定したが、正式アプリの実際の表示・source packet実装検査は未着手。権利判断と配信検証を混同しない。'});
write('STRUCTURE_DIAGNOSTICS.json',{counters,licenseMentions:strings.filter(x=>/copyright|licen[cs]e|attribution/i.test(x.text)).map(x=>({path:x.path,sha256:hash(x.text)})),allFields:strings.map(x=>({path:x.path,sha256:hash(x.text),bytes:Buffer.byteLength(x.text)}))});
fs.copyFileSync('/private/tmp/jq-boundary-590.mjs',ev+'/boundary.mjs',fs.constants.COPYFILE_EXCL);
console.log(counters);
