import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import renderer from './render-man.cjs';
import {prepareImportBatch} from '../../importers/batch-import-output.js';
const root=fileURLToPath(new URL('../../../',import.meta.url)),req=createRequire(root+'/package.json'),parse=req('parse5'),note='docs/notes/document-import/gperf/3.3',app=root+'/apps/gperf',sha=s=>createHash('sha256').update(s).digest('hex'),abs=p=>path.join(root,p),check=process.argv.includes('--check');
const manifest=JSON.parse(fs.readFileSync(abs(note+'/SOURCE_MANIFEST.json'))),map=JSON.parse(fs.readFileSync(abs(note+'/CONTENT_MAP.json')));for(const x of [...manifest.files,manifest.archive])assert.equal(sha(fs.readFileSync(abs(x.path))),x.sha256,x.path);
const prepared=[];
const emit=(p,s)=>prepared.push({kind:'file',targetPath:p,generate:target=>fs.writeFileSync(target,s),validate:target=>assert.equal(fs.readFileSync(target,'utf8'),s)});
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'),src=n=>fs.readFileSync(abs(note+'/sources/gperf-3.3/'+n),'utf8');
const raw=src('doc/gperf.html'),gplStart=raw.indexOf('<H1><A NAME="SEC1"'),gplEnd=raw.indexOf('<H1><A NAME="SEC2"'),gpl=raw.slice(gplStart,gplEnd),body=raw.slice(raw.indexOf('<BODY>')+6,raw.indexOf('</BODY>')),bodyGpl=body.indexOf(gpl);assert(bodyGpl>=0);const fix=s=>s.replace(/HREF="gperf\.html#/g,'HREF="#');const guide=fix(body.slice(0,bodyGpl))+gpl+fix(body.slice(bodyGpl+gpl.length));assert(guide.includes(gpl));
const man=renderer.renderMan(src('doc/gperf.1'));let cli=man.html.replace(/<(h[23])>([^<]+)<\/\1>/g,(_,tag,label)=>'<'+tag+' id="cli-'+label.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'">'+label+'</'+tag+'>');cli+='\n<h2 id="original-gpl">Original GNU GPL</h2>\n<pre>'+esc(src('COPYING')).replaceAll('\n','&#10;')+'</pre>';
const intro='This is an unofficial Libx presentation of the complete documentation bundled in the fixed GNU gperf 3.3 release archive. The user guide identifies itself as edition 3.2 (28 October 2024); the CLI identifies version 3.3 (April 2025). These original version labels are preserved. The version metadata date is the source acquisition date ('+manifest.snapshotAt.slice(0,10)+'), not a claimed upstream release day.\n\n[Original release archive]('+manifest.archive.url+') — SHA-256 `'+manifest.archive.sha256+'`. Formatting, internal links, and explicitly marked editorial notes are Libx changes.\n\n';
const notes='\n\n## Editorial notes on the fixed source\n\n- In guide section 4.2, the sentence “Otherwise it returns NULL” after the struct-return description is ambiguous for a successful non-struct lookup. The fixed 3.3 implementation (`src/output.cc`, ordinary lookup success branch) returns the matching keyword string pointer without `--struct-type`, and a structure pointer with that option. The failure path returns NULL. The original guide text is retained; this is a separate implementation note, not an upstream correction.\n- The CLI states that `--jump` must be odd, while guide section 5.5 describes rounding up even values. The fixed `src/options.cc` parser rejects negative values and adds one to a nonzero even value. Both original texts are retained. The zero-value random behavior has not been independently executed here.\n';
const fallback='The fixed CLI manual does not supply a separately identified documentation-specific license beyond its GPLv3+ notice. Following the project policy, the software license GPL-3.0-or-later is applied to this complete CLI document with this annotation. This is an unofficial reformatted version; the original copyright, license, and warranty notice and the complete original GPL are retained.\n\n';
const outputs=[{id:map.scope[0],title:'User guide (edition 3.2 bundled with gperf 3.3)',license:'gperf-guide',body:guide,appendix:notes},{id:map.scope[1],title:'GNU gperf 3.3 CLI manual',license:'gperf-cli',body:cli,appendix:notes,preface:fallback}];
const transNote=note+'/translations',trans=JSON.parse(fs.readFileSync(abs(transNote+'/TRANSLATION_MANIFEST.json')));
for(const x of trans.files)assert.equal(sha(fs.readFileSync(abs(transNote+'/'+x.path))),x.sha256,x.path);
assert.equal(trans.completedIndependentReviewPages,0);
const modificationDate=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo'}).format(new Date(trans.at));
assert(/^\d{4}-\d{2}-\d{2}$/.test(modificationDate));
const modificationEN=license=>'Libx modification date (Japan Standard Time): '+modificationDate+'. '+(license==='gperf-cli'?'This complete CLI work, including the Libx translation, formatting and editorial changes, is distributed under GPL-3.0-or-later.':'This complete derived user guide, including the Libx translation, formatting and editorial changes, is distributed under the original manual permission notice reproduced below.')+'\n\n';
const modificationJA=license=>'Libxによる変更日（日本標準時）: '+modificationDate+'。'+(license==='gperf-cli'?'Libxの翻訳・書式・編集上の変更を含むCLI文書全体をGPL-3.0-or-laterで配布します。':'Libxの翻訳・書式・編集上の変更を含む利用ガイド全体を、以下に保持した原マニュアルの許諾通知と同じ条件で配布します。')+'\n\n';
const draft=p=>fs.readFileSync(abs(transNote+'/'+p),'utf8'),progress=JSON.parse(draft('guide-sections/PROGRESS-567.json'));
assert.equal(progress.draftSections,27);assert.equal(progress.records.length,27);
let jaGuide=draft('GUIDE_HEADER.ja.html')+gpl;
assert.equal(draft('GUIDE_HEADER.source.html'),raw.slice(raw.indexOf('<BODY>')+6,gplStart));
for(let n=2;n<=28;n++){
  const start=raw.search(new RegExp('<H[1-6]><A NAME="SEC'+n+'"')),end=n===28?raw.indexOf('</BODY>'):raw.search(new RegExp('<H[1-6]><A NAME="SEC'+(n+1)+'"'));
  assert(start>=0&&end>start);const original=raw.slice(start,end),s=draft('guide-sections/SEC'+n+'.source.html'),t=draft('guide-sections/SEC'+n+'.ja.html'),record=progress.records.find(x=>x.id==='SEC'+n);
  assert.equal(s,original);assert.equal(sha(s),record.sourceSHA256);assert.equal(sha(t),record.translationSHA256);jaGuide+=t;
}
assert(jaGuide.includes(gpl));
const notice=body.slice(body.indexOf('<P>\nCopyright (C) 1989-2024'),bodyGpl);
assert(guide.includes(notice)&&jaGuide.includes(notice));
assert.equal(draft('CLI.source.html'),man.html);
const jaCLI=draft('CLI.ja.html')+'\n<h2 id="original-gpl">GNU GPLの原文</h2>\n<pre>'+esc(src('COPYING')).replaceAll('\n','&#10;')+'</pre>';
const jaIntro='このページは、固定したGNU gperf 3.3の公式リリースアーカイブに同梱された文書全体を掲載する、Libxの非公式な日本語訳です。利用ガイド自身の版表示は第3.2版（2024年10月28日）、CLIの版表示は3.3（2025年4月）です。原文の版の違いを保持しています。バージョン情報の日付は原典の取得日（'+manifest.snapshotAt.slice(0,10)+'）であり、上流のリリース日を示すものではありません。\n\n[公式リリースアーカイブ]('+manifest.archive.url+') — SHA-256 `'+manifest.archive.sha256+'`。日本語訳、書式、内部リンク、明示した編集注記はLibxによる変更です。利用ガイドの許諾通知とGPLの章、およびCLIの著作権・ライセンス・免責通知とGPL全文は原英語を保持しています。参考文献の書誌は原表記を、索引は元のアルファベット別の配列を保持しています。\n\n';
const jaNotes='\n\n## 固定原文についての編集注記\n\n- 利用ガイド4.2の、構造体の戻り値の説明に続く「それ以外の場合はNULLを返します」という原文には、構造体を使わない検索が成功した場合について曖昧さがあります。固定した3.3の実装（`src/output.cc`の通常の検索成功分岐）では、`--struct-type`なしでは一致したキーワード文字列へのポインターを、そのオプションを使う場合は構造体へのポインターを返します。失敗経路ではNULLを返します。原文の説明は保持して訳し、この実装上の説明を別に付けています。上流の修正として扱ってはいません。\n- CLIは`--jump`の値に奇数を要求する一方、利用ガイド5.5では偶数を切り上げると説明しています。固定した`src/options.cc`のパーサーは負数を拒否し、ゼロでない偶数に1を加えます。両方の原文をそのまま保持して訳しています。ゼロの値でのランダムな動作は、ここでは独立に実行して確認していません。\n';
const jaFallback='文書専用ライセンスの表記が、固定したCLIマニュアルのGPLv3以降の通知以外には確認できないため、ユーザー承認に基づき、ソフトウェア本体のGPL-3.0-or-laterをこのCLI文書にも適用する運用判断で掲載しています。これは新たな許諾を取得したという記録ではありません。非公式翻訳として書式と日本語本文を変更し、原文の著作権・許諾条件・免責通知と完全なGPL原文を保持しています。\n\n';
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],text=n=>n.value??(n.childNodes||[]).map(text).join(''),attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,headingMap={};
for(const x of outputs){const md='---\ntitle: '+JSON.stringify(x.title)+'\nlicenseSource: '+JSON.stringify(x.license)+'\n---\n\n'+intro+modificationEN(x.license)+(x.preface||'')+'<div class="gperf-original">\n'+x.body+'\n</div>\n'+x.appendix;emit(app+'/src/content/docs/v3-3/en/'+x.id,md);headingMap['v3-3/en/'+x.id.replace(/\.md$/,'')]=walk(parse.parseFragment(x.body)).filter(n=>/^h[1-6]$/.test(n.tagName||'')).flatMap(n=>{const id=attr(n,'id')||walk(n).map(c=>attr(c,'name')).find(Boolean);return id?[{depth:+n.tagName[1],slug:id,text:text(n).trim()}]:[];});}
for(const x of [{...outputs[0],title:'利用ガイド（gperf 3.3同梱・第3.2版）',body:jaGuide,appendix:jaNotes},{...outputs[1],title:'GNU gperf 3.3 CLIマニュアル',body:jaCLI,preface:jaFallback,appendix:jaNotes}]){
  const md='---\ntitle: '+JSON.stringify(x.title)+'\nlicenseSource: '+JSON.stringify(x.license)+'\n---\n\n'+jaIntro+modificationJA(x.license)+(x.preface||'')+'<div class="gperf-original">\n'+x.body+'\n</div>\n'+x.appendix;
  emit(app+'/src/content/docs/v3-3/ja/'+x.id,md);headingMap['v3-3/ja/'+x.id.replace(/\.md$/,'')]=walk(parse.parseFragment(x.body)).filter(n=>/^h[1-6]$/.test(n.tagName||'')).flatMap(n=>{const id=attr(n,'id')||walk(n).map(c=>attr(c,'name')).find(Boolean);return id?[{depth:+n.tagName[1],slug:id,text:text(n).trim()}]:[];});
}
emit(app+'/src/data/document-headings.json',JSON.stringify(headingMap,null,2)+'\n');
for(const lang of ['en','ja'])emit(app+'/public/v3-3/'+lang+'/01-guide/01-user-guide/gperf.html',raw);
emit(app+'/public/source/v3-3/gperf.1',src('doc/gperf.1'));emit(app+'/public/source/v3-3/COPYING',src('COPYING'));
const results=prepareImportBatch({outputs:prepared,stagingRoot:abs('tmp/gperf-import-staging'),check});if(check)for(const x of results)assert(x.matches,'Regeneration mismatch '+x.targetPath);
console.log(JSON.stringify({mode:check?'read-only-check':'generate',scope:map.scope,sourceFiles:manifest.files.length,guideOriginalGPLBytes:Buffer.byteLength(gpl),guideGPLSHA256:sha(gpl),CLITerms:35,translationDraftAssembled:true,contentReviewCompleted:false,outputs:results.length},null,2));
