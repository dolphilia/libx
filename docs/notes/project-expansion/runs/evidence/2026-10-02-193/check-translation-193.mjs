import fs from 'node:fs';import assert from 'node:assert/strict';import {createRequire} from 'node:module';import {createHash} from 'node:crypto';import {parseFragment} from 'parse5';
import {remarkSourceHeadingIds} from './scripts/plugins/remark-uthash-source-heading-ids.js';import {remarkCallouts} from './scripts/plugins/remark-callouts.js';import {rehypeTaskListA11y} from './scripts/plugins/rehype-task-list-a11y.js';import {rehypeDocumentEnhancements} from './scripts/plugins/rehype-document-enhancements.js';
const root='/Users/dolphilia/github/libx',base='docs/notes/document-import/uthash/v2-4-0',id='01-guides/04-utringbuffer.md';
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
assert.deepEqual(em.code,jm.code);assert.equal(em.code.length,9);assert.deepEqual(em.inlineCode,jm.inlineCode);
assert.deepEqual(em.structure,jm.structure);assert.deepEqual(em.headings.map(({tag,id})=>({tag,id})),jm.headings.map(({tag,id})=>({tag,id})));
assert.ok(jm.headings.every(h=>/[\u3000-\u9fff]/.test(h.text)));
assert.deepEqual(em.links.map(x=>x.replace('/v2-4-0/en/','/v2-4-0/ja/')),jm.links);
assert.equal(jm.tables.length,1);assert.deepEqual(jm.tables.map(x=>x.length),[30]);
for(let t=0;t<1;t++)for(let c=0;c<em.tables[t].length;c++){const a=em.tables[t][c],b=jm.tables[t][c];assert.deepEqual([a.tag,a.rowspan,a.colspan],[b.tag,b.rowspan,b.colspan]);if(c%2===0)assert.equal(a.text,b.text);else assert.ok(/[\u3000-\u9fff]/.test(b.text));}
assert.ok(j.body.includes('`utringbuffer_clear` を使う場合を除いて'));assert.ok(j.body.includes('再割り当てを行わない'));assert.ok(j.body.includes('突然*最も新しい*要素'));assert.ok(j.body.includes('utringbufferでは一切使われません'));assert.equal((j.body.match(/^\d\.  /gm)??[]).length,5);
for(const y of ['2008','2010'])assert.ok(j.body.includes(y));
const output={schemaVersion:1,checkedAt:new Date().toISOString(),status:'passed-page-only',page:id,inputs:[enPath,jaPath].map(path=>({path,sha256:sha(path)})),checks:{renderedStructureEqual:true,codeBlocksExact:9,inlineCodeOrderExact:true,headingsAndIdsExact:jm.headings.length,tableShapes:[15],tableSignaturesExact:true,linksExplicitLanguageMapping:true,fiveNotesAndHistoricVersionsPreserved:true,metadataPreserved:true},linkMapping:em.links.map((from,i)=>({from,to:jm.links[i]})),pending:['JAライセンスページは未作成。全体内部参照/全JA build/ブラウザー表示は未検証。','最終全8content gate未完了。'],renderedHeadingMap:jm.headings};
assert.ok(jm.headings.some(h=>h.id==='operations'));assert.ok(jm.links.includes('#operations'));
const dest=root+'/docs/notes/project-expansion/runs/evidence/2026-10-02-193';fs.mkdirSync(dest,{recursive:true});fs.writeFileSync(dest+'/UTRINGBUFFER_MECHANICAL.json',JSON.stringify(output,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify(output.checks));
