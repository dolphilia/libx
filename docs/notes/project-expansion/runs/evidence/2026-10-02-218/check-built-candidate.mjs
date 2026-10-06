import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import{createRequire}from'node:module';
import{mapReference}from'/private/tmp/libx-uthash-release-20261002/scripts/importers/import-uthash-2.4.0.mjs';
import{hashFile}from'/private/tmp/libx-uthash-release-20261002/scripts/importers/safe-import-output.js';
const root='/private/tmp/libx-uthash-release-20261002',app=root+'/apps/uthash',base=root+'/docs/notes/document-import/uthash/v2-4-0',require=createRequire(root+'/package.json'),{parse,parseFragment}=require('parse5'),
 map=JSON.parse(fs.readFileSync(base+'/CONTENT_MAP.json')),config=JSON.parse(fs.readFileSync(app+'/src/config/project.config.jsonc')),index=JSON.parse(fs.readFileSync(app+'/public/search/v2-4-0/en.json')),
 attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,walk=(n,f)=>{f(n);for(const c of n.childNodes??[])walk(c,f)},txt=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(txt).join(''),norm=s=>s.replace(/\s+/g,' ').trim(),all=n=>[n,...(n.childNodes??[]).flatMap(all)];
function metrics(n){const m={prose:'',codes:[],anchors:[],links:[],images:[],tables:[],headings:[]};walk(n,x=>{let parent=x;while(parent){if(parent.tagName==='script'||attr(parent,'class')?.split(' ').includes('docs-code-toolbar')||attr(parent,'aria-labelledby')==='document-provenance-title'||attr(parent,'class')?.split(' ').includes('navigation-container'))return;parent=parent.parentNode;}if(x.nodeName==='#text'){let p=x.parentNode,code=false;while(p){if(p.tagName==='pre')code=true;p=p.parentNode}if(!code)m.prose+=' '+x.value;}if(x.tagName==='pre')m.codes.push(txt(x));if(attr(x,'id'))m.anchors.push(attr(x,'id'));if(x.tagName==='a'&&attr(x,'href'))m.links.push(attr(x,'href'));if(x.tagName==='img')m.images.push({src:attr(x,'src'),alt:attr(x,'alt')??''});if(x.tagName==='table'){const cells=[];walk(x,z=>{if(['td','th'].includes(z.tagName))cells.push({tag:z.tagName,text:norm(txt(z)),colspan:attr(z,'colspan')??'1',rowspan:attr(z,'rowspan')??'1'});});m.tables.push(cells)}if(/^h[1-6]$/.test(x.tagName??''))m.headings.push(norm(txt(x)));});m.prose=norm(m.prose);return m}

const matter=require('gray-matter'),ar=createRequire(require.resolve('astro/package.json')),{createMarkdownProcessor}=await import(ar.resolve('@astrojs/markdown-remark'));
const {remarkSourceHeadingIds}=await import(root+'/scripts/plugins/remark-uthash-source-heading-ids.js'),{remarkCallouts}=await import(root+'/scripts/plugins/remark-callouts.js'),{rehypeTaskListA11y}=await import(root+'/scripts/plugins/rehype-task-list-a11y.js'),{rehypeDocumentEnhancements}=await import(root+'/scripts/plugins/rehype-document-enhancements.js');
const processor=await createMarkdownProcessor({smartypants:false,remarkPlugins:[remarkCallouts,remarkSourceHeadingIds],rehypePlugins:[rehypeTaskListA11y,rehypeDocumentEnhancements]});
const pages=[];
for(const lang of ['en','ja'])for(const p of map.pages){
 const index=JSON.parse(fs.readFileSync(app+'/public/search/v2-4-0/'+lang+'.json'));
 const target=root+'/dist/docs/uthash/v2-4-0/'+lang+'/'+p.id.replace(/\.md$/,'')+'/index.html',doc=parse(fs.readFileSync(target,'utf8')),nodes=all(doc),article=nodes.find(n=>n.tagName==='article');assert.ok(article);
 const actual=metrics(article),ids=nodes.map(n=>attr(n,'id')).filter(Boolean);assert.equal(ids.length,new Set(ids).size,'duplicate built IDs');
 const entry=index.entries.find(e=>e.url==='/docs/uthash/v2-4-0/'+lang+'/'+p.id.replace(/\.md$/,'')+'/');assert.ok(entry);
 const headings=all(article).filter(n=>/^h[1-6]$/.test(n.tagName??'')&&attr(n,'id')!=='document-provenance-title');
 assert.deepEqual(entry.headings.map(h=>({text:norm(h.text),slug:h.slug})),headings.map(n=>({text:norm(txt(n)),slug:attr(n,'id')})));
 const source=config.licensing.sources.find(s=>s.id===p.licenseSource),provenance=nodes.find(n=>attr(n,'aria-labelledby')==='document-provenance-title');assert.ok(provenance);
 for(const note of source.provenanceNotes)assert.ok(norm(txt(provenance)).includes(norm(note[lang])),p.id+' note missing');
 assert.ok(norm(txt(provenance)).includes(source.author));
 assert.ok(all(provenance).some(n=>attr(n,'href')===p.sourceURL));
 const checks={};
 const markdown=matter(fs.readFileSync(app+'/src/content/docs/v2-4-0/'+lang+'/'+p.id,'utf8')).content;
 const expected=metrics(parseFragment((await processor.render(markdown)).code));
 for(const k of ['prose','codes','links','images','tables','headings'])checks[k]=JSON.stringify(actual[k])===JSON.stringify(expected[k]);
 checks.sourceIds=JSON.stringify(expected.anchors)===JSON.stringify(actual.anchors.filter(a=>expected.anchors.includes(a)));
 if(p.id.startsWith('02-license')){assert.deepEqual(actual.codes,[fs.readFileSync(root+'/'+p.source.path,'utf8')]);checks.originalNoticeLiteral=true;}
 assert.ok(Object.values(checks).every(Boolean),p.id+' body preservation');
 let internal=0;
 for(const n of nodes)for(const a of n.attrs??[])if(['href','src'].includes(a.name)){
  const url=new URL(a.value,'https://libx.dev/docs/uthash/v2-4-0/'+lang+'/'+p.id.replace(/\.md$/,'')+'/');
  if(url.origin!=='https://libx.dev'||!url.pathname.startsWith('/docs/uthash/'))continue;
  const direct=root+'/dist/docs/uthash/'+url.pathname.slice('/docs/uthash/'.length),dest=fs.existsSync(direct)&&fs.statSync(direct).isFile()?direct:path.join(direct,'index.html');
  assert.ok(fs.existsSync(dest),'missing built target '+a.value);
  if(url.hash)assert.ok(all(parse(fs.readFileSync(dest,'utf8'))).some(n=>attr(n,'id')===decodeURIComponent(url.hash.slice(1))),'missing fragment '+a.value);
  internal++;
 }
 pages.push({lang,id:p.id,status:'passed',checks,headings:headings.length,codes:actual.codes.length,tables:actual.tables.length,provenanceNotes:source.provenanceNotes.length,internalTargets:internal});
}
assert.equal(pages.length,16);assert.equal(pages.reduce((n,p)=>n+p.headings,0),346);
assert.equal(hashFile(root+'/dist/docs/uthash/assets/uthash-v2-4-0/rss.png'),map.assets[0].sha256);
const result={schemaVersion:1,checkedAt:new Date().toISOString(),status:'passed',scope:'All16 actual ENJA Astro articles preserve reviewed Markdown rendering, all source-ID search headings equal DOM, original license exact, all local targets exist, all configured source notes/authors/URLs present in generated HTML.',pages,
 limitations:['静的統合成果物の全16本文検査。ローカル表示は別のDISPLAY_AUDIT.jsonに記録。外部配信は未実施。']};
fs.writeFileSync('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-02-218/BUILT_HTML_INTEGRATED.json',JSON.stringify(result,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({status:'passed',pages:16,searchHeadings:346}));
