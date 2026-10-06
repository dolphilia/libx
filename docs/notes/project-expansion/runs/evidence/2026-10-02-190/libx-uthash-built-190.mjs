import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import{createRequire}from'node:module';
import{mapReference}from'/private/tmp/libx-official-uthash-20261002/scripts/importers/import-uthash-2.4.0.mjs';
import{hashFile}from'/private/tmp/libx-official-uthash-20261002/scripts/importers/safe-import-output.js';
const root='/private/tmp/libx-official-uthash-20261002',app=root+'/apps/uthash',base=root+'/docs/notes/document-import/uthash/v2-4-0',require=createRequire(root+'/package.json'),{parse,parseFragment}=require('parse5'),
 map=JSON.parse(fs.readFileSync(base+'/CONTENT_MAP.json')),config=JSON.parse(fs.readFileSync(app+'/src/config/project.config.jsonc')),index=JSON.parse(fs.readFileSync(app+'/public/search/v2-4-0/en.json')),
 attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,walk=(n,f)=>{f(n);for(const c of n.childNodes??[])walk(c,f)},txt=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(txt).join(''),norm=s=>s.replace(/\s+/g,' ').trim(),all=n=>[n,...(n.childNodes??[]).flatMap(all)];
function metrics(n){const m={prose:'',codes:[],anchors:[],links:[],images:[],tables:[],headings:[]};walk(n,x=>{let parent=x;while(parent){if(parent.tagName==='script'||attr(parent,'class')?.split(' ').includes('docs-code-toolbar')||attr(parent,'aria-labelledby')==='document-provenance-title'||attr(parent,'class')?.split(' ').includes('navigation-container'))return;parent=parent.parentNode;}if(x.nodeName==='#text'){let p=x.parentNode,code=false;while(p){if(p.tagName==='pre')code=true;p=p.parentNode}if(!code)m.prose+=' '+x.value;}if(x.tagName==='pre')m.codes.push(txt(x));if(attr(x,'id'))m.anchors.push(attr(x,'id'));if(x.tagName==='a'&&attr(x,'href'))m.links.push(attr(x,'href'));if(x.tagName==='img')m.images.push({src:attr(x,'src'),alt:attr(x,'alt')??''});if(x.tagName==='table'){const cells=[];walk(x,z=>{if(['td','th'].includes(z.tagName))cells.push({tag:z.tagName,text:norm(txt(z)),colspan:attr(z,'colspan')??'1',rowspan:attr(z,'rowspan')??'1'});});m.tables.push(cells)}if(/^h[1-6]$/.test(x.tagName??''))m.headings.push(norm(txt(x)));});m.prose=norm(m.prose);return m}

const pages=[];
for(const p of map.pages){
 const target=app+'/dist/v2-4-0/en/'+p.id.replace(/\.md$/,'')+'/index.html',doc=parse(fs.readFileSync(target,'utf8')),nodes=all(doc),article=nodes.find(n=>n.tagName==='article');assert.ok(article);
 const actual=metrics(article),ids=nodes.map(n=>attr(n,'id')).filter(Boolean);assert.equal(ids.length,new Set(ids).size,'duplicate built IDs');
 const entry=index.entries.find(e=>e.url==='/docs/uthash/v2-4-0/en/'+p.id.replace(/\.md$/,'')+'/');assert.ok(entry);
 const headings=all(article).filter(n=>/^h[1-6]$/.test(n.tagName??'')&&attr(n,'id')!=='document-provenance-title');
 assert.deepEqual(entry.headings.map(h=>({text:norm(h.text),slug:h.slug})),headings.map(n=>({text:norm(txt(n)),slug:attr(n,'id')})));
 const source=config.licensing.sources.find(s=>s.id===p.licenseSource),provenance=nodes.find(n=>attr(n,'aria-labelledby')==='document-provenance-title');assert.ok(provenance);
 for(const note of source.provenanceNotes)assert.ok(norm(txt(provenance)).includes(norm(note.en)),p.id+' note missing');
 assert.ok(norm(txt(provenance)).includes(source.author));
 assert.ok(all(provenance).some(n=>attr(n,'href')===p.sourceURL));
 const checks={};
 if(p.id.startsWith('02-license')){assert.deepEqual(actual.codes,[fs.readFileSync(root+'/'+p.source.path,'utf8')]);checks.originalNoticeLiteral=true;}
 else{
 const expected=metrics(parseFragment(fs.readFileSync(base+'/generated/source-fragments/'+p.id.replace(/\.md$/,'.html'),'utf8')));
 expected.links=expected.links.map(h=>mapReference(h,map));expected.images=expected.images.map(i=>({...i,src:mapReference(i.src,map)}));
 for(const k of ['prose','codes','links','images','tables','headings'])checks[k]=JSON.stringify(actual[k])===JSON.stringify(expected[k]);
 checks.sourceIds=JSON.stringify(expected.anchors)===JSON.stringify(actual.anchors.filter(a=>expected.anchors.includes(a)));
 }
 assert.ok(Object.values(checks).every(Boolean),p.id+' body preservation');
 let internal=0;
 for(const n of nodes)for(const a of n.attrs??[])if(['href','src'].includes(a.name)){
  const url=new URL(a.value,'https://libx.dev/docs/uthash/v2-4-0/en/'+p.id.replace(/\.md$/,'')+'/');
  if(url.origin!=='https://libx.dev'||!url.pathname.startsWith('/docs/uthash/'))continue;
  const direct=app+'/dist/'+url.pathname.slice('/docs/uthash/'.length),dest=fs.existsSync(direct)&&fs.statSync(direct).isFile()?direct:path.join(direct,'index.html');
  assert.ok(fs.existsSync(dest),'missing built target '+a.value);
  if(url.hash)assert.ok(all(parse(fs.readFileSync(dest,'utf8'))).some(n=>attr(n,'id')===decodeURIComponent(url.hash.slice(1))),'missing fragment '+a.value);
  internal++;
 }
 pages.push({id:p.id,status:'passed',checks,headings:headings.length,codes:actual.codes.length,tables:actual.tables.length,provenanceNotes:source.provenanceNotes.length,internalTargets:internal});
}
assert.equal(pages.length,8);assert.equal(pages.reduce((n,p)=>n+p.headings,0),172);
assert.equal(hashFile(app+'/dist/assets/uthash-v2-4-0/rss.png'),map.assets[0].sha256);
const result={schemaVersion:1,checkedAt:new Date().toISOString(),status:'passed',scope:'All8 actual Astro5.7.12 built EN articles preserve fixed source body; original notice exact; source-ID search172 same as DOM; all internal href/src targets; source footer authors/URLs/version/policy/change/4 upstream notes visible in rendered HTML.',pages,
 limitations:['Desktop/mobile/keyboard actual browser inspection not yet performed for this formal app.','JA0/8; content check deliberately cannot pass; no publication.']};
fs.writeFileSync('/private/tmp/libx-uthash-built-190.json',JSON.stringify(result,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({status:'passed',pages:8,searchHeadings:172}));
