import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
const dir='docs/notes/project-expansion/runs/evidence/2026-10-05-661';
const workspace='/private/tmp/libx-mdbook-source-rebuild-661/workspace';
const app=workspace+'/apps/mdbook-trial';
const require=createRequire('/private/tmp/libx-jq-footer-integration-20261004/package.json');
const {parse,parseFragment}=require('parse5');
const prep=JSON.parse(fs.readFileSync(dir+'/TRIAL_PREPARED.json'));
const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)];
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const has=(n,c)=>(attr(n,'class')??'').split(/\s+/).includes(c);
const text=n=>n.value??(n.childNodes??[]).map(text).join('');
const sha=b=>createHash('sha256').update(b).digest('hex');
const shape=n=>({name:n.nodeName,...(n.value!==undefined?{value:n.value}:{}),...(n.data!==undefined?{data:n.data}:{}),...(n.attrs?{attrs:n.attrs}:{}),children:(n.childNodes??[]).filter(c=>!(['#document-fragment','div','main'].includes(n.nodeName)&&c.nodeName==='#text'&&/^\s*$/.test(c.value))).map(shape)});
const results=[];const trees=new Map();const broken=[];
for(const p of prep.pages){
 const file=app+'/dist/'+p.route.replace('/docs/mdbook-trial/','')+'index.html';
 const tree=parse(fs.readFileSync(file,'utf8'));trees.set(p.route,tree);
 const body=walk(tree).filter(n=>has(n,'mdbook-guide'));assert.equal(body.length,1,p.route);
 const md=fs.readFileSync(workspace+'/'+p.file,'utf8');assert.equal(sha(md),p.sha256);
 const original=walk(parseFragment(md.slice(md.indexOf('\n---\n')+5))).find(n=>has(n,'mdbook-guide'));assert(original);
 assert.deepEqual(shape(body[0]),shape(original),'Generated DOM source mismatch '+p.sourcePath);
 const nodes=walk(body[0]);const codes=nodes.filter(n=>n.nodeName==='code'&&n.parentNode?.nodeName==='pre');
 const footer=walk(tree).filter(n=>has(n,'document-context')); // Actual context class is also recorded below.
 const sourceLink=walk(tree).filter(n=>n.nodeName==='a'&&attr(n,'href')==='https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/'+p.sourcePath);assert.equal(sourceLink.length,1);
 assert(!nodes.some(n=>n===sourceLink[0]),'Source information leaked into body');
 results.push({sourcePath:p.sourcePath,route:p.route,htmlSha256:sha(fs.readFileSync(file)),dom:'exact-after-documented-block-whitespace-normalization',codeCount:codes.length,codeHashes:codes.map(n=>sha(text(n))),sourceInformationOutsideBody:true,footerContextNodes:footer.length,links:nodes.filter(n=>n.nodeName==='a'&&attr(n,'href')).map(n=>attr(n,'href')),images:nodes.filter(n=>n.nodeName==='img').map(n=>attr(n,'src'))});
}
for(const r of results){
 const tree=trees.get(r.route);
 for(const href of r.links){
  if(/^[a-z][a-z0-9+.-]*:/i.test(href)||href.startsWith('//'))continue;
  const url=new URL(href,'https://trial.invalid'+r.route);
  const target=trees.get(url.pathname);
  if(target){if(url.hash&&!walk(target).some(n=>attr(n,'id')===decodeURIComponent(url.hash.slice(1))))broken.push({source:r.sourcePath,href,reason:'anchor missing'});}
  else if(!fs.existsSync(app+'/dist/'+url.pathname.replace('/docs/mdbook-trial/','')))broken.push({source:r.sourcePath,href,reason:'target missing or unresolved original absolute path'});
 }
 for(const src of r.images){
  assert(src.startsWith('/docs/mdbook-trial/source-assets/'),src);
  const rel=src.replace('/docs/mdbook-trial/source-assets/','');
  const expected=fs.readFileSync('/private/tmp/libx-mdbook-trial-654/source/guide/book/html/'+rel);
  assert.deepEqual(fs.readFileSync(app+'/dist/source-assets/'+rel),expected,'asset mismatch '+src);
 }
}
const out={status:broken.length?'content-preserved-links-need-repair':'passed-mechanical-content-links-assets-only',pages:results.length,codeBlocks:results.reduce((n,r)=>n+r.codeCount,0),brokenLinks:broken,normalPage:results.find(r=>r.sourcePath==='guide/src/guide/creating.md').route,maxPage:results.find(r=>r.sourcePath==='guide/src/format/configuration/renderers.md').route,hardPage:results.find(r=>r.sourcePath==='guide/src/format/mdbook.md').route,fullContentReviewPerformed:false,nativeDisplayVerified:false,conversionGatePassed:false,remaining:['native adapters verification saved separately; not a conversion gate','preferred editable source offer closure','normal/max/hard local Astro display'],results};
fs.writeFileSync(dir+'/RECONSTRUCT_CONTENT_CHECK.json',JSON.stringify(out,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({status:out.status,pages:out.pages,codeBlocks:out.codeBlocks,brokenLinks:out.brokenLinks}));
