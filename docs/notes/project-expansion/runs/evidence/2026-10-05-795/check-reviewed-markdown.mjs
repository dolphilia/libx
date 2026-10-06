import fs from 'node:fs';import assert from 'node:assert/strict';import crypto from 'node:crypto';
import{unified}from'/private/tmp/libx-lz4-formal-786/node_modules/unified/index.js';
import rp from'/private/tmp/libx-lz4-formal-786/node_modules/remark-parse/index.js';
import gfm from'/private/tmp/libx-lz4-formal-786/node_modules/remark-gfm/index.js';
import{parse}from'/private/tmp/libx-lz4-formal-786/node_modules/parse5/dist/index.js';
const ev='docs/notes/project-expansion/runs/evidence/2026-10-05-795',work='/private/tmp/libx-lz4-formal-786';
const review=JSON.parse(fs.readFileSync(ev+'/CONTENT_REVIEW_README.json'));
const c=fs.readFileSync(review.canonical.path,'utf8'),t=fs.readFileSync(review.translation.path,'utf8');
const body=s=>s.slice(s.indexOf('\n---\n')+5),ast=s=>unified().use(rp).use(gfm).parse(body(s));
const nodes=(n,p)=>[...(p(n)?[n]:[]),...(n.children??[]).flatMap(x=>nodes(x,p))];
const values=(s,type,key)=>nodes(ast(s),n=>n.type===type).map(n=>n[key]);
assert.deepEqual(values(t,'code','value'),values(c,'code','value'));
assert.deepEqual(values(t,'inlineCode','value').sort(),values(c,'inlineCode','value').sort());
for(const type of ['link','definition','image'])assert.deepEqual(values(t,type,'url').sort(),values(c,type,'url').sort());
assert.deepEqual(values(t,'heading','depth'),values(c,'heading','depth'));
function resolvedReferences(s){const a=ast(s),defs=new Map(nodes(a,n=>n.type==='definition').map(n=>[n.identifier,n.url]));return nodes(a,n=>n.type==='linkReference'||n.type==='imageReference').map(n=>{assert(defs.has(n.identifier));return n.type+':'+defs.get(n.identifier);}).sort();}
assert.deepEqual(resolvedReferences(t),resolvedReferences(c));
for(const type of ['listItem','strong','table','tableRow','tableCell'])assert.equal(nodes(ast(t),n=>n.type===type).length,nodes(ast(c),n=>n.type===type).length);
const numbers=s=>nodes(ast(s),n=>n.type==='text'||n.type==='inlineCode'||n.type==='code').flatMap(n=>n.value.match(/\d+/g)??[]).sort();
assert.deepEqual(numbers(t),numbers(c));
const sid=s=>s.match(/^licenseSource: (.*)$/m)?.[1]??null;assert.equal(sid(t),sid(c));
const html=fs.readFileSync(work+'/apps/lz4/dist/v1-10-0/ja/'+review.id.replace(/\.md$/,'')+'/index.html','utf8');
const d=parse(html),attr=(n,k)=>n.attrs?.find(x=>x.name===k)?.value,find=(n,p)=>[...(p(n)?[n]:[]),...(n.childNodes??[]).flatMap(x=>find(x,p))],text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
const a=find(d,n=>n.tagName==='article'&&(attr(n,'class')??'').includes('sl-markdown-content'))[0],footer=find(d,n=>attr(n,'class')==='document-context-footer')[0];
for(const id of ['lz4---extremely-fast-compression','benchmarks','installation','building-lz4---using-vcpkg','documentation','other-source-versions','packaging-status','special-thanks'])assert.equal(find(a,n=>attr(n,'id')===id).length,1);
assert(text(footer).includes('v1.9.0')&&text(footer).includes('ライブラリの説明'));
const mdText=n=>n.value??(n.children??[]).map(mdText).join(''),norm=s=>s.replace(/\s+/g,' ').trim();
const sourceBench=nodes(ast(c),n=>n.type==='table')[1],jaBench=nodes(ast(t),n=>n.type==='table')[1];assert.equal(sourceBench.children.length,11);assert.equal(jaBench.children.length,11);
for(let i=1;i<11;i++){for(let j=1;j<4;j++)assert.equal(norm(mdText(jaBench.children[i].children[j])),norm(mdText(sourceBench.children[i].children[j])));assert.equal(norm(mdText(jaBench.children[i].children[0])),norm(mdText(sourceBench.children[i].children[0])).replace('default','既定'));}
const renderedTables=find(a,n=>n.tagName==='table');assert.equal(renderedTables.length,2);assert.deepEqual(find(renderedTables[1],n=>n.tagName==='th'||n.tagName==='td').map(n=>norm(text(n))),nodes(jaBench,n=>n.type==='tableCell').map(n=>norm(mdText(n))));
const renderedCode=find(a,n=>n.tagName==='code'&&n.parentNode?.tagName==='pre').map(n=>text(n).replace(/\n$/,''));assert.deepEqual(renderedCode,values(c,'code','value'));
function images(s){const a=ast(s),defs=new Map(nodes(a,n=>n.type==='definition').map(n=>[n.identifier,n]));return nodes(a,n=>n.type==='image'||n.type==='imageReference').map(n=>({src:n.type==='image'?n.url:defs.get(n.identifier).url,alt:n.alt,title:n.type==='image'?n.title:defs.get(n.identifier).title}));}
assert.deepEqual(images(t).map(i=>i.src).sort(),images(c).map(i=>i.src).sort());
assert.deepEqual(find(a,n=>n.tagName==='img').map(n=>({src:attr(n,'src'),alt:attr(n,'alt'),title:attr(n,'title')??null})),images(t));
for(const n of find(a,n=>n.tagName==='a'&&(attr(n,'href')??'').startsWith('/docs/lz4/'))){const href=attr(n,'href').split('#')[0];let target=work+'/apps/lz4/dist/'+href.slice('/docs/lz4/'.length);if(!fs.existsSync(target)||!fs.statSync(target).isFile())target=target.replace(/\/$/,'')+'/index.html';assert(fs.existsSync(target),href);}
assert(text(footer).includes('非公式日本語訳')&&!text(a).includes('Libxの運用方針'));
assert(find(d,n=>n.tagName==='link'&&attr(n,'hreflang')==='en'&&attr(n,'href')?.includes('/en/'+review.id.replace(/\.md$/,'')+'/')).length);
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');assert.equal(sha(fs.readFileSync(work+'/apps/lz4/src/content/docs/v1-10-0/ja/'+review.id)),review.translation.sha256);
fs.writeFileSync(ev+'/MACHINE_README.json',JSON.stringify({at:new Date().toISOString(),status:'passed',errors:[],page:review.id,translationSha256:review.translation.sha256,renderedSha256:sha(Buffer.from(html)),scope:'all fenced code in order/inlinecode multiset (Japanese prose may reorder)/URL destinations/heading depths/list/strong/table counts/numeric tokens/explicit canonical ID/footer/body separation/reviewed snapshot/EN alternate',display:'browser not performed',fullProject:'JA8/27 reviews8/27, final gates pending'},null,2)+'\n');console.log('README page machine checks passed; final gates pending');
