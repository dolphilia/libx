import fs from 'node:fs';import assert from 'node:assert/strict';import crypto from 'node:crypto';
import{unified}from'/private/tmp/libx-lz4-formal-786/node_modules/unified/index.js';
import rp from'/private/tmp/libx-lz4-formal-786/node_modules/remark-parse/index.js';
import gfm from'/private/tmp/libx-lz4-formal-786/node_modules/remark-gfm/index.js';
import{parse}from'/private/tmp/libx-lz4-formal-786/node_modules/parse5/dist/index.js';
const ev='docs/notes/project-expansion/runs/evidence/2026-10-05-797',work='/private/tmp/libx-lz4-formal-786';
const review=JSON.parse(fs.readFileSync(ev+'/CONTENT_REVIEW_FRAME.json'));
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
for(const type of ['listItem','strong','emphasis','table','tableRow','tableCell'])assert.equal(nodes(ast(t),n=>n.type===type).length,nodes(ast(c),n=>n.type===type).length);
const numbers=s=>nodes(ast(s),n=>n.type==='text'||n.type==='inlineCode'||n.type==='code').flatMap(n=>n.value.match(/\d+/g)??[]).sort();
assert.deepEqual(numbers(t),numbers(c));
const content=n=>n.type==='text'||n.type==='inlineCode'?n.value:(n.children??[]).map(content).join('');
const norm=s=>s.replace(/bytes?/gi,'バイト').replace(/\s+/g,'').replace(/[–～]/g,'-').replace('BitNb','ビット番号').replace('FieldName','フィールド名').replace('Reserved','予約').replace('xtimes','x回');
const tables=s=>nodes(ast(s),n=>n.type==='table').map(n=>n.children.map(row=>row.children.map(cell=>norm(content(cell)))));
assert.deepEqual(tables(t),tables(c));assert.equal(tables(c).length,8);
const notice=body(c).slice(body(c).indexOf('Copyright (c)'),body(c).indexOf('### Version')).trim();assert(body(t).includes(notice));
const sid=s=>s.match(/^licenseSource: (.*)$/m)?.[1]??null;assert.equal(sid(t),sid(c));
const html=fs.readFileSync(work+'/apps/lz4/dist/v1-10-0/ja/'+review.id.replace(/\.md$/,'')+'/index.html','utf8');
const d=parse(html),attr=(n,k)=>n.attrs?.find(x=>x.name===k)?.value,find=(n,p)=>[...(p(n)?[n]:[]),...(n.childNodes??[]).flatMap(x=>find(x,p))],text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
const a=find(d,n=>n.tagName==='article'&&(attr(n,'class')??'').includes('sl-markdown-content'))[0],footer=find(d,n=>attr(n,'class')==='document-context-footer')[0];
for(const id of ['lz4-frame-format-description','notices','version','introduction','general-structure-of-lz4-frame-format','frame-descriptor','data-blocks','skippable-frames','legacy-frame','version-changes'])assert.equal(find(a,n=>attr(n,'id')===id).length,1);
for(const literal of ['0x184D2204','0x00000000','0x80000000','0x184D2A5X','0x184D2A50','0x184D2A5F','0x184C2102','(xxh32()>>8) & 0xFF','1.6.4 (28/12/2023)']){assert(body(c).includes(literal));assert(body(t).includes(literal));assert(text(a).includes(literal));}
assert(text(a).includes('決して超えてはなりません'));
const renderedTables=find(a,n=>n.tagName==='table').map(n=>find(n,x=>x.tagName==='tr').map(row=>find(row,x=>x.tagName==='td'||x.tagName==='th').map(cell=>norm(text(cell)))));assert.deepEqual(renderedTables,tables(t));
assert(text(a).replace(/\s+/g,'').includes(notice.replace(/\s+/g,''))); 
for(const n of find(a,n=>n.tagName==='a'&&(attr(n,'href')??'').startsWith('/docs/lz4/'))){const href=attr(n,'href').split('#')[0];let target=work+'/apps/lz4/dist/'+href.slice('/docs/lz4/'.length);if(!fs.existsSync(target)||!fs.statSync(target).isFile())target=target.replace(/\/$/,'')+'/index.html';assert(fs.existsSync(target),href);}
assert(text(footer).includes('非公式日本語訳')&&!text(a).includes('Libxの運用方針'));
assert(find(d,n=>n.tagName==='link'&&attr(n,'hreflang')==='en'&&attr(n,'href')?.includes('/en/'+review.id.replace(/\.md$/,'')+'/')).length);
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');assert.equal(sha(fs.readFileSync(work+'/apps/lz4/src/content/docs/v1-10-0/ja/'+review.id)),review.translation.sha256);
fs.writeFileSync(ev+'/MACHINE_FRAME.json',JSON.stringify({at:new Date().toISOString(),status:'passed',errors:[],page:review.id,translationSha256:review.translation.sha256,renderedSha256:sha(Buffer.from(html)),scope:'all fenced code in order/inlinecode multiset (Japanese prose may reorder)/URL destinations/heading depths/list/strong/table counts/numeric tokens/explicit canonical ID/footer/body separation/reviewed snapshot/EN alternate',tableNormalization:"only bytes/whitespace/range separators/BitNb/FieldName/Reserved/x times translation; all 8 table cells otherwise identical",display:'browser not performed',fullProject:'JA10/27 reviews10/27, final gates pending'},null,2)+'\n');console.log('Frame page machine checks passed; final gates pending');
