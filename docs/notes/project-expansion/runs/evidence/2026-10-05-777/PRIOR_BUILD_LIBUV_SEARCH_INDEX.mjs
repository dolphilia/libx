import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {parseFragment} from 'parse5';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const app=path.join(root,'apps/libuv'),version='v1-53-0';
const attr=(n,k)=>n.attrs?.find(x=>x.name===k)?.value;
const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)];
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join(' ');
const inline=n=>n.nodeName==='#text'?n.value.trim():(n.childNodes??[]).map(inline).join('');
const clean=n=>text(n).replace(/\s+/g,' ').trim();
const files=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(x=>x.isDirectory()?files(path.join(dir,x.name)):x.name.endsWith('.md')?[path.join(dir,x.name)]:[]).sort();
const prepared=[];
for(const lang of ['en','ja']){
 const directory=path.join(app,'src/content/docs',version,lang),entries=[];
 for(const file of files(directory)){
  const {data,content}=matter(fs.readFileSync(file,'utf8'));
  const nodes=walk(parseFragment(content.replaceAll('&#10;','\n')));
  const article=nodes.find(n=>n.tagName==='article'&&attr(n,'class')?.split(/\s+/).includes('libuv-document'));assert(article);
  const body=walk(article),anchors=[...new Set(body.map(n=>attr(n,'id')).filter(Boolean))];
  const headings=body.filter(n=>/^h[1-6]$/.test(n.tagName??'')).map(n=>{
   let parent=n.parentNode,slug=attr(n,'id');
   while(!slug&&parent){if(parent.tagName==='section')slug=attr(parent,'id');parent=parent.parentNode;}
   assert(slug&&anchors.includes(slug));return{text:inline(n).trim().replace(/\s*¶$/,''),slug};
  });
  const symbols=body.filter(n=>n.tagName==='dt'&&attr(n,'class')?.split(/\s+/).includes('sig')).flatMap(n=>{
   const anchor=attr(n,'id');if(!anchor)return[];
   const name=anchor.replace(/^c\./,'');return /^(?:uv_|UV_)[A-Za-z0-9_]+$/.test(name)?[{name,anchor}]:[];
  });
  const slug=path.relative(directory,file).replace(/\.md$/,'').split(path.sep).join('/');
  entries.push({title:String(data.title),description:String(data.description??''),url:`/docs/libuv/${version}/${lang}/${slug}/`,headings,anchors,identifiers:symbols.map(s=>s.name),symbols,text:clean(article).replaceAll(' ¶','')});
 }
 assert.equal(entries.length,43);
 const value=JSON.stringify({schemaVersion:1,version,lang,entries})+'\n';assert(Buffer.byteLength(value)<=2*1024*1024);
 prepared.push({lang,value,pages:entries.length,headings:entries.reduce((n,e)=>n+e.headings.length,0),symbols:entries.reduce((n,e)=>n+e.symbols.length,0),bytes:Buffer.byteLength(value)});
}
const output=path.join(app,'public/search',version);fs.mkdirSync(output,{recursive:true});
for(const p of prepared){const dest=path.join(output,p.lang+'.json'),temporary=dest+'.prepared';fs.writeFileSync(temporary,p.value);fs.renameSync(temporary,dest);}
console.log(JSON.stringify(prepared.map(({value,...rest})=>rest)));
