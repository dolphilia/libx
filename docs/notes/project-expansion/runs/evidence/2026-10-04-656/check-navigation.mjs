import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire('/private/tmp/libx-jq-footer-integration-20261004/package.json'); const {parse}=require('parse5');
const E='docs/notes/project-expansion/runs/evidence/2026-10-04-656', A='/private/tmp/libx-mdbook-astro-trial-655/apps/mdbook-trial';
const data=JSON.parse(fs.readFileSync(A+'/src/data/mdbook-navigation.json'));
const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)], at=(n,k)=>n.attrs?.find(x=>x.name===k)?.value, txt=n=>n.value??(n.childNodes??[]).map(txt).join('');
const flat=xs=>xs.flatMap(x=>[...(x.href?[x]:[]),...flat(x.items??[])]), rows=flat(data); assert.equal(rows.length,31);
const expected=xs=>xs.map(x=>({title:x.title,href:x.href??null,draft:!!x.draft,items:expected(x.items??[])}));
const actual=ul=>ul.childNodes.filter(n=>n.nodeName==='li').map(n=>{const c=n.childNodes.find(n=>['a','span'].includes(n.nodeName)); const children=n.childNodes.find(n=>n.nodeName==='ul');return {title:txt(c),href:at(c,'href')??null,draft:at(c,'aria-disabled')==='true',items:children?actual(children):[]}});
const results=[];
for(let i=0;i<rows.length;i++){
 const r=rows[i], tree=parse(fs.readFileSync(A+'/dist/'+r.href.replace('/docs/mdbook-trial/','')+'/index.html','utf8')), ns=walk(tree);
 const sidebar=ns.find(n=>at(n,'id')==='sidebar'); assert(sidebar);assert.deepEqual(actual(sidebar.childNodes.find(n=>n.nodeName==='ul')),expected(data));
 const current=walk(sidebar).filter(n=>at(n,'aria-current')==='page');assert.equal(current.length,1);assert.equal(at(current[0],'href'),r.href);
 for(const [rel,pos] of [['prev',i-1],['next',i+1]]){const as=ns.filter(n=>n.nodeName==='a'&&at(n,'rel')===rel);assert.equal(as.length,pos>=0&&pos<rows.length?1:0);if(as.length){assert.equal(at(as[0],'href'),rows[pos].href);assert(txt(as[0]).includes(rows[pos].title));}}
 const body=ns.find(n=>(at(n,'class')??'').split(/\s+/).includes('mdbook-guide'));
 const notes=ns.find(n=>at(n,'aria-labelledby')==='document-provenance-title'); assert(notes);assert(!walk(body).includes(notes));
 for(const name of ['ACE_LICENSE.txt','HIGHLIGHT_LICENSE.txt','CLIPBOARD_LINKED_LICENSE.html','MATHJAX_LICENSE.txt']) assert(walk(notes).some(n=>at(n,'href')?.endsWith('/'+name)));
 assert(txt(notes).includes('Modern clipboard transport')); results.push({source:r.sourcePath,sidebar:'exact-original-hierarchy-order-title-and-draft',current:'passed',pagination:'passed',runtimeNotices:'footer-only'});
}
fs.writeFileSync(E+'/NAVIGATION_CHECK.json',JSON.stringify({status:'passed',pages:31,paginationLinks:60,drafts:1,partLabels:['User guide','Reference guide'],results,conversionGatePassed:false},null,2)+'\n',{flag:'wx'});console.log('31章目次/60前後章/フッター注記 合格');
