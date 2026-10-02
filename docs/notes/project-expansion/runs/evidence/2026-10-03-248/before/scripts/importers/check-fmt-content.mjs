#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {parse} from 'parse5';
import {importFmt,readLockedInputs,NOTES,VERSION} from './import-fmt-12.2.0.mjs';
import {hashFile} from './safe-import-output.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const abs=p=>path.join(root,p),walk=n=>[n,...(n.childNodes??[]).flatMap(walk)],attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const text=n=>attr(n,'class')==='docs-code-toolbar'||n.tagName==='script'?'':n.value??(n.childNodes??[]).map(text).join('');
const read=p=>JSON.parse(fs.readFileSync(abs(p),'utf8')),manifest=read(NOTES+'/REVIEW_MANIFEST.json');
readLockedInputs(root);
assert.ok(importFmt({check:true}).every(r=>r.matches),'English regeneration mismatch');
assert.equal(manifest.completedPages,5);assert.equal(manifest.unreviewedPages,0);assert.equal(manifest.pages.length,5);
assert.deepEqual([...manifest.scope].sort(),manifest.pages.map(p=>p.id).sort());
// Preserve relative paths when descending into category directories.
const list=(directory,prefix='')=>fs.readdirSync(directory,{withFileTypes:true}).flatMap(e=>e.isDirectory()?list(path.join(directory,e.name),prefix+e.name+'/'):e.isFile()&&/\.mdx?$/.test(e.name)?[prefix+e.name]:[]);
for(const lang of ['en','ja'])assert.deepEqual(list(abs(`apps/fmt/src/content/docs/${VERSION}/${lang}`)).sort(),[...manifest.scope].sort(),'App file scope '+lang);
const checked=[];
for(const p of manifest.pages){assert.equal(p.status,'passed');assert.equal(p.method,'ai-content-review');assert.equal(p.separateReviewPass,true);
 for(const role of ['source','canonical','translation']){const r=p[role];assert.equal(hashFile(abs(r.path)),r.sha256,p.id+' '+role+' current SHA');const lines=fs.readFileSync(abs(r.path),'utf8').replace(/\n$/,'').split('\n').length;let next=1;for(const [start,end] of r.coverage){assert.equal(start,next);assert.ok(end>=start);next=end+1;}assert.equal(next,lines+1,'Full coverage '+p.id+' '+role);}
 for(const r of [p.sourceToCanonicalReview,p.bilingualAndReadabilityReview])assert.equal(hashFile(abs(r.path)),r.sha256,'Current review evidence');
 for(const [lang,role] of [['en','canonical'],['ja','translation']])assert.equal(hashFile(abs(`apps/fmt/src/content/docs/${VERSION}/${lang}/${p.id}`)),p[role].sha256,'App/notes byte match');
 checked.push(p.id);
}
const run=(script,args=[])=>{const result=spawnSync(process.execPath,[abs('scripts/importers/'+script),...args],{cwd:root,env:process.env,encoding:'utf8'});assert.equal(result.status,0,result.stderr||result.stdout);return result.stdout.trim();};
run('check-fmt-api-assembly.mjs');
const rendered=[];
if(process.argv.includes('--rendered')){
 run('check-fmt-canonical.mjs',['--rendered']);run('check-fmt-api-translation.mjs');
 const dist=abs('apps/fmt/dist'),tag=(ns,t)=>ns.filter(n=>n.tagName===t),load=(lang,id)=>{const file=path.join(dist,VERSION,lang,id.replace(/\.md$/,''),'index.html'),tree=parse(fs.readFileSync(file,'utf8')),article=walk(tree).find(n=>n.tagName==='article'&&attr(n,'class')?.includes('sl-markdown-content'));assert.ok(article);const generated=article.childNodes.filter(n=>['navigation-container','document-provenance'].includes(attr(n,'class')));assert.equal(generated.length,2);article.childNodes=article.childNodes.filter(n=>!generated.includes(n));return{file,tree,nodes:walk(article)};};
 const prefix=`/docs/fmt/${VERSION}/en/`,relocate=h=>h.startsWith(prefix)?h.replace(prefix,`/docs/fmt/${VERSION}/ja/`):h;
 for(const id of manifest.scope){const en=load('en',id),ja=load('ja',id),links=ns=>tag(ns,'a').filter(n=>attr(n,'href')).map(n=>attr(n,'href')),ids=ns=>ns.filter(n=>attr(n,'id')).map(n=>attr(n,'id'));
 assert.deepEqual(tag(ja.nodes,'pre').map(text),tag(en.nodes,'pre').map(text),id+' ordered codeblocks');
 assert.deepEqual(tag(ja.nodes,'code').map(text).sort(),tag(en.nodes,'code').map(text).sort(),id+' code literals');
 assert.deepEqual(ids(ja.nodes),ids(en.nodes),id+' IDs');assert.deepEqual(ja.nodes.filter(n=>/^h[1-6]$/.test(n.tagName)).map(n=>n.tagName),en.nodes.filter(n=>/^h[1-6]$/.test(n.tagName)).map(n=>n.tagName),id+' heading levels');assert.equal(new Set(ids(ja.nodes)).size,ids(ja.nodes).length);
 assert.deepEqual(links(ja.nodes).sort(),links(en.nodes).map(relocate).sort(),id+' URLs');
 const tables=ns=>tag(ns,'table').map(table=>tag(walk(table),'tr').map(row=>(row.childNodes??[]).filter(n=>['th','td'].includes(n.tagName)).map(cell=>({role:cell.tagName,code:tag(walk(cell),'code').map(text).sort()}))));assert.deepEqual(tables(ja.nodes),tables(en.nodes),id+' tablecell roles/code');
 const images=ns=>tag(ns,'img').map(n=>attr(n,'src'));assert.deepEqual(images(ja.nodes),images(en.nodes),id+' image sources');
 for(const lang of ['en','ja']){const doc=lang==='en'?en:ja;for(const href of links(doc.nodes)){const u=new URL(href,`https://libx.dev/docs/fmt/${VERSION}/${lang}/${id.replace(/\.md$/,'')}/`);if(u.origin!=='https://libx.dev')continue;assert.ok(u.pathname.startsWith('/docs/fmt/'),href);const relative=u.pathname.replace('/docs/fmt/',''),dest=path.join(dist,relative.endsWith('/')?relative+'index.html':relative);assert.ok(fs.existsSync(dest),href);if(u.hash){assert.ok(dest.endsWith('.html'),href);assert.ok(walk(parse(fs.readFileSync(dest,'utf8'))).some(n=>attr(n,'id')===decodeURIComponent(u.hash.slice(1))),href);}}
 const headings=doc.nodes.filter(n=>/^h[2-6]$/.test(n.tagName)&&attr(n,'id')).map(n=>({id:attr(n,'id'),label:text(n).trim()})),toc=tag(walk(doc.tree),'starlight-toc');assert.equal(toc.length,headings.length?2:0);for(const t of toc){const entries=tag(walk(t),'a').filter(n=>attr(n,'href')?.startsWith('#')&&attr(n,'href')!=='#_top').map(n=>({id:decodeURIComponent(attr(n,'href').slice(1)),label:text(n).trim()}));assert.deepEqual(entries,headings,id+' '+lang+' TOC');}}
 rendered.push({page:id,pre:tag(ja.nodes,'pre').length,code:tag(ja.nodes,'code').length,tables:tag(ja.nodes,'table').length,ids:ids(ja.nodes).length,en:hashFile(en.file),ja:hashFile(ja.file)});
 }
 for(const [asset,source] of [['perf.svg','source/doc/perf.svg'],['fmt-LICENSE.txt','source/LICENSE']])assert.equal(hashFile(path.join(dist,'assets',asset)),hashFile(abs(NOTES+'/'+source)));
}
console.log(JSON.stringify({status:'passed',scope:'All5 English/Japanese content files and review evidence; rendering checks only when requested',pages:checked,regeneration:'English5pages/2assets and JapaneseAPI assembly',rendered:process.argv.includes('--rendered')?rendered:'not-requested',semanticReview:'Existing independent evidence audited; no new semantic review claimed',browserUI:'not-performed'}));
