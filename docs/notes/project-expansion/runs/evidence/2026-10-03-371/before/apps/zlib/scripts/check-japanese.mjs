import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {parse,parseFragment} from 'parse5';
const sourceOnly=process.argv.includes('--source-only');
const app=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>fs.readFileSync(path.join(app,p),'utf8');
const hash=s=>createHash('sha256').update(s).digest('hex');
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const walk=(n,p)=>[...(p(n)?[n]:[]),...(n.childNodes??[]).flatMap(c=>walk(c,p))];
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
const plans=JSON.parse(read('meta/page-plan.json')).pages;
const review=JSON.parse(read('meta/japanese-review-progress.json'));
const expected=JSON.parse(read('meta/expected-blocks.json'));
const docs=new Map(),results=[];
const allFiles=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?allFiles(path.join(dir,e.name)):[path.join(dir,e.name)]);
const jaDir=path.join(app,'src/content/docs/v1-3-2/ja');
assert.deepEqual(allFiles(jaDir).map(f=>path.relative(jaDir,f)).sort(),plans.map(p=>p.page).sort());
assert.equal(review.pages.length,14);
for(const p of plans){
 const record=review.pages.find(r=>r.page===p.page);assert(record,p.page);
 assert.equal(hash(read(record.canonical)),record.canonicalSHA256,p.page+' canonical review hash');
 assert.equal(hash(read(record.translation)),record.translationSHA256,p.page+' translation review hash');
 assert.equal(hash(read(record.source)),record.sourceSHA256,p.page+' original source review hash');
 assert.equal(record.meaning,'passed');assert.equal(record.japaneseReadability,'passed');
 const scoped=spawnSync(process.execPath,['scripts/check-translation-drafts.mjs',p.page,...(sourceOnly?['--source-only']:[])],{cwd:app,encoding:'utf8'});
 assert.equal(scoped.status,0,p.page+' '+scoped.stderr);
 const source=parseFragment(read(record.translation).replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/,''));
 const rendered=sourceOnly?null:parse(read('dist/v1-3-2/ja/'+p.page.replace(/\.md$/,'')+'/index.html'));
 const roots=d=>walk(d,n=>attr(n,'class')?.split(' ').includes('zlib-document')||['provenance','license','source-note','original-notice'].includes(attr(n,'data-editorial')));
 for(const [kind,doc] of [['source',source],...(sourceOnly?[]:[['rendered',rendered]])]){
  const ids=walk(doc,n=>!!attr(n,'id')).map(n=>attr(n,'id'));
  assert.equal(new Set(ids).size,ids.length,p.page+' duplicate '+kind+' ID');
  const provenance=walk(doc,n=>attr(n,'data-editorial')==='provenance');assert.equal(provenance.length,1);
  assert(text(provenance[0]).includes(record.sourceSHA256),p.page+' '+kind+' source hash');
  assert(text(provenance[0]).includes('bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16'));
  const blocks=walk(doc,n=>attr(n,'data-zlib-block')!==undefined);assert.equal(blocks.length,expected[p.page].length);
  docs.set(kind+'/'+p.page.replace(/\.md$/,'')+'/',{ids,roots:roots(doc),page:p.page,kind});
 }
 results.push(JSON.parse(scoped.stdout));
}
let internalLinks=0,externalLinks=0;const externalUrls=new Set();
for(const item of docs.values())for(const root of item.roots)for(const a of walk(root,n=>n.nodeName==='a'&&!!attr(n,'href'))){
 const href=attr(a,'href');const url=new URL(href,'https://libx.dev/docs/zlib/v1-3-2/ja/'+item.page.replace(/\.md$/,'')+'/');
 if(url.origin!=='https://libx.dev'){externalLinks++;externalUrls.add(url.href);continue;}
 assert(url.pathname.startsWith('/docs/zlib/v1-3-2/ja/'),item.page+' language/base leak '+href);
 const target=docs.get(item.kind+'/'+url.pathname.slice('/docs/zlib/v1-3-2/ja/'.length));
 assert(target,item.page+' missing internal target '+href);
 if(url.hash)assert(target.ids.includes(decodeURIComponent(url.hash.slice(1))),item.page+' missing fragment '+href);
 internalLinks++;
}
const faq=results.find(r=>r.page==='02-appendix/03-faq.md');assert.equal(faq.faqQuestions,44);
assert.equal(results.reduce((s,r)=>s+r.blocks,0),321);
console.log(JSON.stringify({status:'passed-japanese-whole-machine-scope',scope:sourceOnly?'all fourteen Japanese sources':'all fourteen Japanese sources and rendered pages',pages:14,renderedPages:sourceOnly?0:14,blocks:321,internalLinkOccurrencesSourceAndRendered:internalLinks,externalLinkOccurrencesSourceAndRendered:externalLinks,externalUrls:[...externalUrls].sort(),reviewHashesUnchanged:true,sourceArchiveHashesPresent:true,FAQQuestions:44,results,pending:['Native visual, keyboard, language-switch and fragment-navigation validation','External destinations: reachability does not prove full content correctness','Publication integration and post-publication validation'],contentReview:'Existing separate full review hashes validated; no new semantic review is inferred from machine checks'},null,2));
