// DOM/provenance audit only; full meaning review is a separate artifact.
import fs from 'node:fs';import assert from 'node:assert/strict';import crypto from 'node:crypto';import {parse,parseFragment} from '/private/tmp/libx-lz4-formal-786/node_modules/parse5/dist/index.js';
const ev='docs/notes/project-expansion/runs/evidence/2026-10-05-809',work='/private/tmp/libx-lz4-formal-786';
const r=JSON.parse(fs.readFileSync(ev+'/CONTENT_REVIEW_HEADER.json')),s=JSON.parse(fs.readFileSync(ev+'/STATIC_HEADER.json'));assert.equal(s.status,'passed');
const t=fs.readFileSync(r.translation.path,'utf8'),c=fs.readFileSync(r.canonical.path,'utf8'),body=x=>x.slice(x.indexOf('\n---\n')+5);
const find=(n,p)=>[...(p(n)?[n]:[]),...(n.childNodes??[]).flatMap(x=>find(x,p))],text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join(''),attr=(n,k)=>n.attrs?.find(x=>x.name===k)?.value;
const rawPres=find(parseFragment(body(t)),n=>n.tagName==='pre');assert.equal(rawPres.length,55);
const html=fs.readFileSync(work+'/apps/lz4/dist/v1-10-0/ja/'+r.id.replace(/\.md$/,'')+'/index.html','utf8'),d=parse(html);
const a=find(d,n=>n.tagName==='article'&&(attr(n,'class')??'').includes('sl-markdown-content'))[0];assert(a);
const pres=find(a,n=>n.tagName==='pre');assert.equal(pres.length,55);assert.deepEqual(pres.map(text),rawPres.map(text));
assert.equal(pres.filter(n=>attr(n,'class')==='lz4-source-comment').length,29);
assert.equal(pres.filter(n=>find(n,x=>x.tagName==='code').length).length,26);
const footer=find(d,n=>attr(n,'class')==='document-context-footer')[0];assert(footer);assert(text(footer).includes('非公式日本語訳')&&text(footer).includes(r.source.sha256)&&text(footer).includes('LZ4HC_CLEVEL_MIN')&&text(footer).includes('今回の測定や実行結果ではありません'));
assert(!text(a).includes('今回の測定や実行結果ではありません'));
assert.equal(t.match(/^licenseSource: (.*)$/m)[1],c.match(/^licenseSource: (.*)$/m)[1]);
let localTargets=0;for(const n of find(footer,n=>n.tagName==='a')){const href=attr(n,'href');if(href?.startsWith('/docs/lz4/source/')){assert(fs.existsSync(work+'/apps/lz4/dist/'+href.slice('/docs/lz4/'.length)));localTargets++;}}assert(localTargets>=3);
assert(find(d,n=>n.tagName==='link'&&attr(n,'hreflang')==='en'&&attr(n,'href')?.includes('/en/'+r.id.replace(/\.md$/,'')+'/')).length);
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');assert.equal(sha(fs.readFileSync(work+'/apps/lz4/src/content/docs/v1-10-0/ja/'+r.id)),r.translation.sha256);assert.equal(s.translationSha256,r.translation.sha256);
fs.writeFileSync(ev+'/MACHINE_HEADER.json',JSON.stringify({at:new Date().toISOString(),status:'passed',errors:[],page:r.id,translationSha256:r.translation.sha256,renderedSha256:sha(Buffer.from(html)),scope:'55 source byte spans/26 code segments/legal notice/per-comment API numeric URL tokens/55 exact DOM texts/footer/body/3 local source targets/EN alternate/review/live SHA',staticEvidence:ev+'/STATIC_HEADER.json',display:'browser not performed',fullProject:'JA20/27 and full reviews20/27; final gates pending'},null,2)+'\n');console.log('Header static and DOM checks passed; final gates pending');
