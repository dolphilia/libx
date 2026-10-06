import fs from 'node:fs';import assert from 'node:assert/strict';import {createRequire} from 'node:module';import {createHash} from 'node:crypto';import {parseFragment} from 'parse5';
import {remarkSourceHeadingIds} from './scripts/plugins/remark-uthash-source-heading-ids.js';import {remarkCallouts} from './scripts/plugins/remark-callouts.js';import {rehypeTaskListA11y} from './scripts/plugins/rehype-task-list-a11y.js';import {rehypeDocumentEnhancements} from './scripts/plugins/rehype-document-enhancements.js';
const root='/Users/dolphilia/github/libx',base='docs/notes/document-import/uthash/v2-4-0',id='01-guides/07-changelog.md';
const require=createRequire(new URL('./templates/docs-site/package.json',import.meta.url));const ar=createRequire(require.resolve('astro'));const {createMarkdownProcessor}=await import(ar.resolve('@astrojs/markdown-remark'));
const processor=await createMarkdownProcessor({smartypants:false,remarkPlugins:[remarkCallouts,remarkSourceHeadingIds],rehypePlugins:[rehypeTaskListA11y,rehypeDocumentEnhancements]});
const read=p=>fs.readFileSync(root+'/'+p,'utf8'),sha=p=>createHash('sha256').update(fs.readFileSync(root+'/'+p)).digest('hex');
const enPath=base+'/canonical/'+id,jaPath=base+'/translation-draft/ja/'+id,en=read(enPath),ja=read(jaPath);
const fm=s=>{const end=s.indexOf('\n---\n',4);return {metadata:Object.fromEntries(s.slice(4,end).split('\n').map(l=>{const i=l.indexOf(': ');return[l.slice(0,i),JSON.parse(l.slice(i+2))]})),body:s.slice(end+5)}};
const e=fm(en),j=fm(ja);for(const k of ['sourceURL','licenseSource','upstreamAuthors','upstreamVersionHeader'])assert.deepEqual(e.metadata[k],j.metadata[k]);
const walk=(n,f)=>{f(n);for(const c of n.childNodes??[])walk(c,f)},attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
function metrics(html){const m={code:[],inlineCode:[],headings:[],links:[],structure:[],tables:[]};walk(parseFragment(html),n=>{
 for(let p=n;p;p=p.parentNode)if(p.tagName==='script'||attr(p,'class')?.split(' ').includes('docs-code-toolbar'))return;
 if(n.tagName)m.structure.push([n.tagName,n.attrs?.filter(a=>!['href','aria-label'].includes(a.name))]);
 if(n.tagName==='pre')m.code.push(text(n));
 if(n.tagName==='code'){let inside=false;for(let p=n.parentNode;p;p=p.parentNode)if(p.tagName==='pre')inside=true;if(!inside)m.inlineCode.push(text(n));}
 if(/^h[1-6]$/.test(n.tagName??''))m.headings.push({tag:n.tagName,id:attr(n,'id'),text:text(n)});
 if(n.tagName==='a'&&attr(n,'href'))m.links.push(attr(n,'href'));
 if(n.tagName==='table'){const cells=[];walk(n,c=>{if(['td','th'].includes(c.tagName))cells.push({tag:c.tagName,rowspan:attr(c,'rowspan')??'1',colspan:attr(c,'colspan')??'1',text:text(c),codes:(c.childNodes??[]).length})});m.tables.push(cells);}
});return m;}
const er=await processor.render(e.body),jr=await processor.render(j.body),em=metrics(er.code),jm=metrics(jr.code);

assert.deepEqual(em.code,jm.code);assert.equal(em.code.length,0);assert.deepEqual(em.inlineCode,jm.inlineCode);
assert.deepEqual(em.structure,jm.structure);
assert.deepEqual(em.headings.map(({tag,id})=>({tag,id})),jm.headings.map(({tag,id})=>({tag,id})));
assert.deepEqual(em.headings.map(h=>h.text.replace('Version','バージョン')),jm.headings.map(h=>h.text));
assert.deepEqual(em.links.map(x=>x.replace('/v2-4-0/en/','/v2-4-0/ja/')),jm.links);
assert.equal(jm.tables.length,1);assert.equal(jm.tables[0].length,2);
assert.deepEqual(jm.tables[0].map(c=>c.text.trim()),['注意','この変更履歴には、不完全または不正確な記載がある可能性があります。gitのコミット履歴を参照してください。']);
const mapPath='docs/notes/project-expansion/runs/evidence/2026-10-02-197/BULLET_MAP.json',pairs=JSON.parse(read(mapPath));
const bullets=s=>[...s.matchAll(/^\s*- (.+)$/gm)].map(m=>m[1]);assert.equal(pairs.length,143);assert.deepEqual(bullets(e.body),pairs.map(p=>p.en));assert.deepEqual(bullets(j.body),pairs.map(p=>p.ja));
let tokenCount=0,nameCount=0;
for(const [i,p] of pairs.entries()){
 const tokens=p.en.match(/(?:HASH|LL|DL|CDL)_[A-Z0-9_]+|UT_(?:icd|hash_handle)|ut(?:hash|array|string|list|stack|ringbuffer)_[a-z0-9_]+|(?<![a-z])-[Wf][a-z-]+/g)??[];
 for(const token of tokens){assert.ok(p.ja.includes(token),`bullet ${i+1}: ${token}`);tokenCount++;}
 for(const digit of p.en.match(/\d+(?:[.,]\d+)*/g)??[])assert.ok(p.ja.includes(digit),`bullet ${i+1}: ${digit}`);
 const thanks=p.en.match(/\((?:thanks|thansk)(?: again)?[, ]+(.+?)!?\)/);if(thanks){assert.ok(p.ja.includes(thanks[1]));nameCount++;}
 assert.ok(/[\u3000-\u9fff]/.test(p.ja));
}
for(const href of jm.links.filter(x=>x.startsWith('/docs/uthash/v2-4-0/ja/'))){const relative=href.slice('/docs/uthash/v2-4-0/ja/'.length).replace(/\/$/,'')+'.md';assert.ok(fs.existsSync(root+'/'+base+'/translation-draft/ja/'+relative));}
const paragraphMap=[['Click to return to the [uthash home page](https://troydhanson.github.io/uthash/).','[uthashのホームページ](https://troydhanson.github.io/uthash/)に戻ります。'],['Thanks to Yu Feng, Richard Cook, Dino Ciuffetti, Chris Groer, and Arun Cherian for feedback and fixes in this release!','このリリースへのフィードバックと修正を提供したYu Feng、Richard Cook、Dino Ciuffetti、Chris Groer、Arun Cherianに感謝します。'],['Special thanks to Alfred Heisner for contributing several enhancements:','複数の改善を寄稿したAlfred Heisnerに特別な感謝を捧げます。'],['This release also includes:','このリリースには、次の変更も含まれます。'],['And lastly,','最後に、次の追加もあります。']];
for(const[a,b]of paragraphMap){assert.ok(e.body.includes(a));assert.ok(j.body.includes(b));}
const checks={renderedStructureEqual:true,codeBlocksExact:0,inlineCodeOrderExact:em.inlineCode.length,headingsVersionsDatesIdsExact:jm.headings.length,bulletsMapped:143,technicalTokensRetained:tokenCount,thanksNamesRetained:nameCount,digitsRetainedPerBullet:true,tableTranslatedAndStructureExact:true,paragraphsExplicitlyMapped:5,linksLanguageMapped:jm.links.length,localTranslationTargetsExist:true,metadataPreserved:true};
const output={schemaVersion:1,checkedAt:new Date().toISOString(),status:'passed-page-only',page:id,inputs:[enPath,jaPath,mapPath].map(path=>({path,sha256:sha(path)})),checks,paragraphMap,renderedHeadingMap:jm.headings,pending:['UserGuide未翻訳、全8ページcontent gate/JA正式build/ブラウザー表示/統合公開は未完。','外部歴史URLを原文どおり保持。全体リンク検証は別工程。']};
const dest=root+'/docs/notes/project-expansion/runs/evidence/2026-10-02-197';fs.writeFileSync(dest+'/CHANGELOG_MECHANICAL.json',JSON.stringify(output,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify(checks));
