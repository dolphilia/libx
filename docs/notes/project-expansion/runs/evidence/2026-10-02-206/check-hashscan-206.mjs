import fs from 'node:fs';import assert from 'node:assert/strict';import {createRequire} from 'node:module';import {createHash} from 'node:crypto';import {parseFragment} from 'parse5';
import {remarkSourceHeadingIds} from './scripts/plugins/remark-uthash-source-heading-ids.js';import {remarkCallouts} from './scripts/plugins/remark-callouts.js';import {rehypeTaskListA11y} from './scripts/plugins/rehype-task-list-a11y.js';import {rehypeDocumentEnhancements} from './scripts/plugins/rehype-document-enhancements.js';
const root='/Users/dolphilia/github/libx',base='docs/notes/document-import/uthash/v2-4-0',id='01-guides/01-userguide.md';
const require=createRequire(new URL('./templates/docs-site/package.json',import.meta.url));const ar=createRequire(require.resolve('astro'));const {createMarkdownProcessor}=await import(ar.resolve('@astrojs/markdown-remark'));
const processor=await createMarkdownProcessor({smartypants:false,remarkPlugins:[remarkCallouts,remarkSourceHeadingIds],rehypePlugins:[rehypeTaskListA11y,rehypeDocumentEnhancements]});
const read=p=>fs.readFileSync(root+'/'+p,'utf8'),sha=p=>createHash('sha256').update(fs.readFileSync(root+'/'+p)).digest('hex');
const enPath=base+'/canonical/'+id,jaPath=base+'/translation-segments/ja/01-userguide/009-hashscan-expansion.md',en=read(enPath).split('\n').slice(2705,3021).join('\n')+'\n',ja=read(jaPath);
const fm=s=>{const end=s.indexOf('\n---\n',4);return {metadata:Object.fromEntries(s.slice(4,end).split('\n').map(l=>{const i=l.indexOf(': ');return[l.slice(0,i),JSON.parse(l.slice(i+2))]})),body:s.slice(end+5)}};
const e={body:en},j={body:ja};
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



assert.deepEqual(em.code,jm.code);assert.equal(em.code.length,6);assert.deepEqual(em.inlineCode,jm.inlineCode);assert.deepEqual(em.structure,jm.structure);
assert.deepEqual(em.headings.map(({tag,id})=>({tag,id})),jm.headings.map(({tag,id})=>({tag,id})));assert.equal(jm.headings.length,7);
assert.deepEqual(em.links,jm.links);
const mapPath='docs/notes/project-expansion/runs/evidence/2026-10-02-206/SEGMENT_MAP.json',map=JSON.parse(read(mapPath)),expected=en.split('\n');for(const p of map){assert.equal(expected[p.canonicalLine-2706],p.en);expected[p.canonicalLine-2706]=p.ja;}assert.equal(expected.join('\n'),ja);assert.equal(map.length,39);
const proseLines=s=>s.split('\n').filter(l=>l&&!l.startsWith('<')&&!l.startsWith('    '));assert.equal(jm.tables.length,1);assert.deepEqual(jm.tables[0].map(c=>c.text.trim()),['注意','このユーティリティーは、LinuxとFreeBSD（8.1以降）でのみ利用できます。']);const labels=['Address','ideal','items','buckets','mc','fl','bloom/sat','fcn','keys saved to'];for(const label of labels)assert.ok(j.body.split('\n').some(l=>l.trim()===label));
for(const p of map)for(const n of p.en.match(/\d+/g)??[])assert.ok(p.ja.includes(n));
assert.deepEqual(e.body.match(/O\([^)]*\)(?:\))?/g),j.body.match(/O\([^)]*\)(?:\))?/g));
const checks={scopeCanonicalLines:[2706,3021],codeBlocksExact:6,inlineCodeOrderExact:jm.inlineCode.length,headingIdsExact:7,linksMapped:jm.links.length,renderedStructureEqual:true,all39ProseTitleHeadingsMapped:true,numericTokensRetained:true};
fs.writeFileSync(root+'/docs/notes/project-expansion/runs/evidence/2026-10-02-206/HASHSCAN_EXPANSION_MECHANICAL.json',JSON.stringify({schemaVersion:1,checkedAt:new Date().toISOString(),status:'passed-segment-only',inputs:[enPath,jaPath,mapPath].map(path=>({path,sha256:sha(path)})),checks,pending:['全UserGuideは未完。#Macro_referenceは後半を含む全体検査までpending。','正式JA build/表示/統合公開未完。']},null,2)+'\n',{flag:'wx'});console.log(JSON.stringify(checks));
