import fs from'node:fs';import path from'node:path';import assert from'node:assert/strict';import{parse}from'parse5';
const base='/private/tmp/libx-lz4-formal-786/apps/lz4',stage='/private/tmp/libx-lz4-integration-833/libx-lz4-sourcekit/apps/lz4',ev='docs/notes/project-expansion/runs/evidence/2026-10-05-833';
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const find=(n,f)=>f(n)?n:(n.childNodes??[]).map(c=>find(c,f)).find(Boolean);
function tree(n,format=false,pre=false){
 if(n.nodeName==='#text'){let v=n.value;if(format&&!pre){if(!v.trim())return null;v=v.replace(/\s+/g,' ').trim();}return {text:v};}
 if(n.nodeName==='#comment')return {comment:n.data};
 return {tag:n.tagName??n.nodeName,attrs:(n.attrs??[]).filter(a=>!a.name.startsWith('data-astro-cid-')).map(a=>[a.name,a.value]).sort(),children:(n.childNodes??[]).map(c=>tree(c,format,pre||['pre','code'].includes(n.tagName))).filter(x=>x!==null)};
}
const walk=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(path.join(p,x.name)):[path.join(p,x.name)]);
const rows=[];
for(const p of walk(stage+'/dist/v1-10-0').filter(x=>x.endsWith('/index.html'))){
 const rel=path.relative(stage+'/dist',p);if(rel.split('/').length!==5)continue;
 const before=parse(fs.readFileSync(base+'/dist/'+rel,'utf8')),after=parse(fs.readFileSync(p,'utf8'));
 const art=d=>find(d,n=>n.tagName==='article'),foot=d=>find(d,n=>attr(n,'aria-labelledby')==='document-provenance-title');assert(art(before)&&art(after)&&foot(before)&&foot(after));
 const articleExact=JSON.stringify(tree(art(before)))===JSON.stringify(tree(art(after)));
 const footerAfterFormatting=JSON.stringify(tree(foot(before),true))===JSON.stringify(tree(foot(after),true));
 assert(articleExact,rel+' article changed');assert(footerAfterFormatting,rel+' footer changed');rows.push({path:rel,articleExact,footerAfterFormatting});
}
assert.equal(rows.length,54);const searches=[];
for(const lang of ['en','ja']){const rel='/public/search/v1-10-0/'+lang+'.json';assert.equal(fs.readFileSync(base+rel,'utf8'),fs.readFileSync(stage+rel,'utf8'));searches.push({lang,exact:true});}
fs.writeFileSync(ev+'/RENDER_COMPARISON.json',JSON.stringify({status:'passed',rows,searches,scope:'Full article DOM/text/attributes exact except generated Astro scope attrs; full source footer DOM exact after layout formatting whitespace only, pre/code text protected; no link/ID/API/prose normalization. Shared UI visual/keyboard behavior is a separate pending test.'},null,2)+'\n');console.log('54 exact article DOM;54 footer DOM formatting-only;2 exact search indexes.');
