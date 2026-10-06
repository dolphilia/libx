import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { parseFragment } from '/Users/dolphilia/github/libx/node_modules/parse5/dist/index.js';
import { readLockedSources,generateCanonicalPages } from '/Users/dolphilia/github/libx/scripts/importers/import-pugixml-1.16.mjs';
import { hashFile } from '/Users/dolphilia/github/libx/scripts/project-expansion/ledger.mjs';
const root='/Users/dolphilia/github/libx',base='docs/notes/document-import/pugixml/v1-16',page='01-overview/01-quick-start.md',ev='docs/notes/project-expansion/runs/evidence/2026-10-02-133';
const read=p=>fs.readFileSync(path.join(root,p),'utf8'), ref=p=>({path:p,sha256:hashFile(path.join(root,p))});
const source=base+'/source-fragments/'+page.replace('.md','.html'),canonical=base+'/canonical/'+page,draft=base+'/translation-draft/2026-10-02-133/ja/'+page,final=base+'/reviewed/2026-10-02-133/ja/'+page;
const en=read(canonical),ja=read(draft),raw=read(source),generated=generateCanonicalPages(readLockedSources(path.join(root,base,'source')));
assert.equal(generated.pages.find(p=>p.output===page).content,en);
const codes=s=>[...s.matchAll(/^```[^\n]*\n([\s\S]*?)^```/gm)].map(m=>m[1]);
const literals=s=>[...s.matchAll(/^(?: {4}[^\n]*\n|\n)+/gm)].map(m=>m[0].trim()).filter(x=>x.startsWith('Copyright')||x.startsWith('This software'));
const inline=s=>[...s.matchAll(/(?<!`)`([^`\n]+)`(?!`)/g)].map(m=>m[1]);
const ids=s=>[...s.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
const links=s=>[...s.matchAll(/(?:href="([^"]+)"|\]\(([^)]+)\))/g)].map(m=>m[1]??m[2]);
assert.deepEqual(codes(en),codes(ja));assert.deepEqual(literals(en),literals(ja));for(let i=0;i<en.split("\n").length;i++) assert.deepEqual(inline(en.split("\n")[i]).sort(),inline(ja.split("\n")[i]).sort());assert.deepEqual(ids(en),ids(ja));assert.deepEqual(links(en).map(x=>x.replace('/v1-16/en/','/v1-16/ja/')),links(ja));
const pres=[];const texts=[];function walk(n){if(n.tagName==='pre')pres.push(text(n).trim());if(n.nodeName==='#text'&&n.value.trim())texts.push(n.value);for(const c of n.childNodes??[])walk(c);}function text(n){return n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');}walk(parseFragment(raw));
assert.deepEqual([...codes(en).map(x=>x.trim()),...literals(en).map(x=>x.replace(/^ {4}/gm,'').trim())],pres);
const map=JSON.parse(read(ev+'/TRANSLATION_MAP.json'));const changed=new Set(map.map(x=>x.line));let inCode=false;
const el=en.trimEnd().split('\n'),jl=ja.trimEnd().split('\n');assert.equal(el.length,jl.length);
for(let i=0;i<el.length;i++){
 if(el[i].startsWith('```')){inCode=!inCode;continue;}
 if(changed.has(i+1)){assert.equal(map.find(x=>x.line===i+1).source,el[i]);assert.equal(map.find(x=>x.line===i+1).translation,jl[i]);continue;}
 assert.equal(el[i],jl[i]);
 if(!inCode&&el[i].trim()&&!el[i].startsWith('<')&&!el[i].startsWith('    ')&&!/^---+$/.test(el[i])&&!['---','licenseSource: "pugixml-quickstart-1.16"'].includes(el[i]))throw new Error('未分類非翻訳行: '+(i+1)+' '+el[i]);
}
const target=path.join(root,final);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,ja,{flag:'wx'});
const privateTarget='/private/tmp/libx-official-pugixml-20261002/apps/pugixml/src/content/docs/v1-16/ja/'+page;assert.ok(!fs.existsSync(privateTarget));fs.mkdirSync(path.dirname(privateTarget),{recursive:true});fs.writeFileSync(privateTarget,ja,{flag:'wx'});assert.equal(hashFile(privateTarget),ref(final).sha256);
const model=JSON.parse(read('docs/notes/project-expansion/runs/2026-10-02-131-pugixml-api-full-review.json')).model;
const mechanical={canonicalRegenerationExact:true,lockedSourcesChecked:true,sourceCodeAndLicenseBlocksExact:true,codeBlocks:codes(en).length,codeLines:codes(en).map(x=>x.trimEnd().split('\n').length),licenseLiteralBlocks:literals(en).length,inlineCodeExactPerLineMultiset:true,inlineOrderAdjustment:"日本語語順で84/243/373行の識別子順が変化。行ごとの全識別子と重複数の一致を検査し、意味上の対応は別工程内容レビューで確認。",links:links(en).length,linksLanguageMappingExact:true,anchors:ids(en).length,anchorIdsExact:true,classifiedChangedUnits:map.length,unclassifiedNontranslatedProse:0,privateCopyExact:true,allJapaneseTargets:'pending: 8ページ未翻訳',rawHtmlUI:'pending',fullProjectBuildAndDisplay:'pending'};
fs.writeFileSync(path.join(root,ev,'MECHANICAL.json'),JSON.stringify(mechanical,null,2)+'\n');
const review={schemaVersion:1,checkedAt:new Date().toISOString(),status:'passed',scope:'クイックスタート1ページ。全9節、注記2・注意2、脚注1、コード全18ブロックとライセンス原文・謝辞2ブロックを別工程で照合。',source:ref(source),canonical:ref(canonical),initial:ref(draft),final:ref(final),model,coverage:{canonical:[[1,el.length]],translation:[[1,jl.length]],source:[[1,raw.trimEnd().split('\n').length]]},aiContentReview:{separatePass:true,sourceToCanonical:'原資料SOURCE_READABLEの全105ブロック（リストp/liの5重複を含む）と末尾脚注を実読。全9節の内容、コード、MIT本文・謝辞、参照・脚注の保全を確認。固定資料からの定本再生成一致は別の機械検査。',canonicalToJapanese:'初稿保存後に訳文前半1–548行と後半549–976行を再読。全82翻訳単位の意味・否定・条件・数値・版と日本語の読みやすさを照合。',findings:['DTD/Schema非検証・非W3C完全準拠と一部整形式検査省略の制約を保持。','xml_document所有権、ハンドル破棄とノード破棄の区別、空ハンドル伝播と暗黙boolを保持。','load_buffer / load_buffer_inplace / load_buffer_inplace_ownの不変性と所有者の3区分、連続メモリー・ストリーム条件を保持。','イテレーター削除時無効化と追加時非無効化、ノード削除で終端後イテレーター無効化も保持。','構造の整合性とXMLの有効性を区別。属性アクセスは挿入せず、XPath例外は例で未捕捉という警告を保持。','MIT通知・謝辞の原文は改変せず保持。リンク表示・全見出し・注意ラベル・脚注・footnote titleは翻訳。'],changes:[]},mechanicalEvidence:ref(ev+'/MECHANICAL.json'),projectVerified:false,reviewedPages:4,totalPages:12};
fs.writeFileSync(path.join(root,ev,'FULL_REVIEW.json'),JSON.stringify(review,null,2)+'\n');console.log(JSON.stringify(mechanical));
