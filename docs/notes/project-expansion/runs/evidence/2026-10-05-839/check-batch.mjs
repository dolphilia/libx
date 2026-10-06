import fs from 'node:fs';
import assert from 'node:assert/strict';
import path from 'node:path';
import matter from 'gray-matter';
import {unified} from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import {parse as htmlParse} from 'parse5';
const notes='docs/notes/document-import/zstd/v1-5-7';
const map=JSON.parse(fs.readFileSync(`${notes}/CONTENT_MAP.json`));
const u=unified().use(parse).use(gfm);
const walk=(n,type)=>[...(n.type===type?[n]:[]),...(n.children??[]).flatMap(x=>walk(x,type))];
const original=fs.readFileSync(`${notes}/source/zstd_compression_format.md`,'utf8');
const definitions=walk(u.parse(original),'definition').map(n=>original.slice(n.position.start.offset,n.position.end.offset)).join('\n');
const normalize=n=>{
  const result=Object.fromEntries(Object.entries(n).filter(([k])=>k!=='position'&&k!=='children'));
  if(result.url?.includes('#source-'))result.url='#'+result.url.split('#source-')[1];
  if(result.url==='#the-format-of-compressed_block')result.url='#compressed-blocks';
  if(n.children)result.children=n.children.filter(c=>c.type!=='definition'&&!(c.type==='html'&&/^<a id="source-/.test(c.value))).map(normalize);
  return result;
};
const htmlNodes=(n,predicate)=>[...(predicate(n)?[n]:[]),...(n.childNodes??[]).flatMap(c=>htmlNodes(c,predicate))];
const htext=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(htext).join('');
const attr=(n,k)=>n.attrs?.find(x=>x.name===k)?.value;
const report={status:'passed',scope:'9 EN canonical structure; 9 translated JA pages; 18 rendered articles',pages:[],pendingJapanese:[],errors:[],knownRenderingDifferences:[],internalLinks:{checked:0,pending:[]}};
const rendered=new Map();
for(const p of map.pages){
 const originalPart=fs.readFileSync(p.source.path,'utf8');
 const canonical=matter(fs.readFileSync(p.canonical.path,'utf8')).content;
 assert.deepEqual(normalize(u.parse(originalPart+'\n'+definitions)),normalize(u.parse(canonical.replace(/<a id="source-[^"]+"><\/a>\n\n/g,''))),`source/canonical AST ${p.id}`);
 const row={id:p.id,canonicalEquivalent:true};
 const translation=`${notes}/translations/ja/${p.id}`;
 if(fs.existsSync(translation)){
   const ja=matter(fs.readFileSync(translation,'utf8')).content;
   const sourceTree=u.parse(originalPart),jaTree=u.parse(ja);
   const codes=n=>walk(n,'code').map(n=>n.value);
   assert.deepEqual(codes(sourceTree),codes(jaTree),`JA code ${p.id}`);
   assert.deepEqual(walk(sourceTree,'table').map(t=>t.children.map(r=>r.children.length)),walk(jaTree,'table').map(t=>t.children.map(r=>r.children.length)),`JA table shape ${p.id}`);
   assert.deepEqual(walk(sourceTree,'heading').map(h=>h.depth),walk(jaTree,'heading').map(h=>h.depth),`JA heading shape ${p.id}`);
   const inlines=n=>new Set(walk(n,'inlineCode').map(n=>n.value));
   row.inlineLabelTranslations=[...inlines(sourceTree)].filter(v=>!inlines(jaTree).has(v));
   assert.deepEqual(row.inlineLabelTranslations,p.id.includes('02-frames')?['Blocks']:[],`JA inline ${p.id}`);
   const numericCells=n=>walk(n,'table').map(t=>t.children.map(r=>r.children.map(c=>walk(c,'text').map(x=>x.value).join('').trim()).filter(v=>/^(?:[0-9]+(?:[- ]+[0-9]+)?|[01x]+|N\/A)$/.test(v))));
   assert.deepEqual(numericCells(sourceTree),numericCells(jaTree),`JA numeric table cells ${p.id}`);
   const ids=s=>[...s.matchAll(/<a id="([^"]+)"/g)].map(m=>m[1]);
   assert.deepEqual(ids(canonical),ids(ja),`JA source anchors ${p.id}`);
   row.japaneseCodeExact=true;row.tableShapesExact=true;row.numericTableCellsExact=true;row.sourceAnchorsExact=true;
 }else report.pendingJapanese.push(p.id);
 for(const lang of ['en','ja']){
   const file=`${map.workspace}/dist/docs/zstd/v1-5-7/${lang}/${p.id.replace(/\.md$/,'')}/index.html`;
   if(!fs.existsSync(file))continue;
   const dom=htmlParse(fs.readFileSync(file,'utf8'));
   const article=htmlNodes(dom,n=>n.nodeName==='article')[0];assert(article,`article ${file}`);
   const md=matter(fs.readFileSync(`${map.workspace}/apps/zstd/src/content/docs/v1-5-7/${lang}/${p.id}`,'utf8'));
   const ast=u.parse(md.content);
   const anchors=[...md.content.matchAll(/<a id="([^"]+)"/g)].map(m=>m[1]);
   for(const id of anchors)assert.equal(htmlNodes(dom,n=>attr(n,'id')===id).length,1,`anchor ${id}`);
   assert.equal(htmlNodes(article,n=>n.nodeName==='table').length,walk(ast,'table').length,`rendered tables ${file}`);
   const code=htmlNodes(article,n=>n.nodeName==='pre').map(htext);
   assert.deepEqual(code,walk(ast,'code').map(n=>n.value),`rendered codes ${file}`);
   assert(htext(dom).includes(lang==='ja'?'非公式日本語訳':'unofficial edition'),`source footer ${file}`);
   const key=`/docs/zstd/v1-5-7/${lang}/${p.id.replace(/\.md$/,'')}`;
   rendered.set(key,{dom,article,lang});
   row[lang]={tables:walk(ast,'table').length,code:code.length,anchors:anchors.length,footer:true};
 }
 report.pages.push(row);
}
for(const [route,{article,dom,lang}] of rendered){
 for(const n of htmlNodes(article,n=>n.nodeName==='a')){
  const href=attr(n,'href');if(!href||(!href.startsWith('#')&&!href.startsWith('/docs/zstd/v1-5-7/')))continue;
  const url=new URL(href,'https://libx.dev'+route);const destination=url.pathname.replace(/\/$/,'');
  const target=rendered.get(destination);
  if(!target){assert(destination.includes('/ja/'),'missing English route '+href);assert(map.pages.some(p=>destination.endsWith(p.id.replace(/\.md$/,''))),'unplanned route '+href);report.internalLinks.pending.push({from:route,href,reason:'未翻訳の正式予定ページ'});continue;}
  if(url.hash)assert.equal(htmlNodes(target.dom,n=>attr(n,'id')===decodeURIComponent(url.hash.slice(1))).length,1,`missing fragment ${href}`);
  report.internalLinks.checked++;
 }
}
assert.equal(report.pendingJapanese.length,0);assert.equal(report.internalLinks.pending.length,0);assert.equal(rendered.size,18);
report.renderedArticles=rendered.size;
fs.writeFileSync('docs/notes/project-expansion/runs/evidence/2026-10-05-839/BATCH_CHECK.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({status:report.status,articles:rendered.size,internalLinks:report.internalLinks.checked,pendingJapaneseLinks:report.internalLinks.pending.length,pendingPages:report.pendingJapanese.length}));
