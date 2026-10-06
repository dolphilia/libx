import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const w='/private/tmp/libx-lz4-formal-786',ev=process.cwd()+'/docs/notes/project-expansion/runs/evidence/2026-10-05-830';
const {extractSearchEntry,buildSearchIndexes}=await import(w+'/scripts/build-search-index.js');
const require=createRequire(w+'/package.json'),matter=require('gray-matter');
const extract=s=>extractSearchEntry('---\ntitle: Test\n---\n'+s,'test.md','/docs/test','v1','ja');
const tests=[
 ['numeric API','<pre>LZ4&#95;decompress&#95;safe&#95;partial()&#10;next</pre>','LZ4_decompress_safe_partial() next'],
 ['hex API','<pre>LZ4&#x5f;decompress&#x5f;safe()</pre>','LZ4_decompress_safe()'],
 ['named entity','<p>AT&amp;T &quot;API&quot; &copy;</p>','AT&T "API" ©'],
 ['encoded tag text','<pre>&lt;vector&lt;int&gt;&gt;</pre>','<vector<int'],
 ['plain code','```c\nLZ4_decompress_safe(src, dst, n, m);\n```','c LZ4_decompress_safe(src, dst, n, m);'],
 ['inline link and emphasis','**API** [lz4](https://example.invalid) _word_','API lz4 word'],
 ['HTML anchor','<a id="api"></a><a href="#api">LZ4_decompress_safe</a>','LZ4_decompress_safe'],
 ['Markdown image excluded','![badge](https://example.invalid/x.svg) remaining','remaining'],
 ['entity-looking literal','<pre>&amp;#95; &#0;</pre>','& 95; �'],
];
for(const [name,input,expected] of tests)assert.equal(extract(input).text,expected,name);
const stableFields=['title','description','url','headings','anchors','identifiers','symbols'];
let unchanged=0,changed=0;
for(const lang of ['ja','en']){
 const prev=JSON.parse(fs.readFileSync(ev+'/SEARCH_'+lang.toUpperCase()+'_BEFORE.json'));
 for(const old of prev.entries){
  const rel=old.url.split('/'+lang+'/')[1].replace(/\/$/,'')+'.md';
  const source=fs.readFileSync(w+'/apps/lz4/src/content/docs/v1-10-0/'+lang+'/'+rel,'utf8');
  const fresh=extractSearchEntry(source,rel,'/docs/lz4','v1-10-0',lang);
  for(const key of stableFields)assert.deepEqual(fresh[key],old[key],lang+' '+rel+' '+key);
  if(fresh.text===old.text)unchanged++;else changed++;
  if(rel==='01-overview/03-history.md')assert(fresh.text.includes('LZ4_decompress_safe_partial'));
 }
}
// Plain Markdown and existing GLFW/Lua indexing remain stable where no HTML entities exist.
let existingPages=0,existingStable=0;
for(const project of ['glfw','lua']){
 const walk=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(d=>d.isDirectory()?walk(p+'/'+d.name):d.name.endsWith('.md')?[p+'/'+d.name]:[]);
 for(const file of walk(w+'/apps/'+project+'/src/content/docs')){
  const source=fs.readFileSync(file,'utf8'),body=matter(source).content;
  const entry=extractSearchEntry(source,'test.md','/docs/'+project,'v1','en');assert(entry.text.length>0);existingPages++;
  if(!/&(?:#\d+|#x[\da-f]+|[a-z]+);/i.test(body)){
   const original=body.replace(/<a\s+id=["'][^"']+["']\s*><\/a>/gi,'').replace(/<[^>]+>/g,' ').replace(/!\[[^\]]*\]\([^)]*\)/g,' ').replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/(?<![\p{Letter}\p{Number}])_+|_+(?![\p{Letter}\p{Number}])/gu,' ').replace(/[`*~>#|]/g,' ').replace(/\s+/g,' ').trim();
   assert.equal(entry.text,original,file);existingStable++;
  }
 }
}
fs.writeFileSync(ev+'/SEARCH_FIX_TEST.json',JSON.stringify({status:'passed',fixtures:tests.length,lz4Entries:54,unchanged,changed,stableFields,existingProjects:['glfw','lua'],existingPages,existingStable},null,2)+'\n');
console.log('Search regression passed', {fixtures:tests.length,unchanged,changed,existingPages,existingStable});
console.log(buildSearchIndexes(w+'/apps/lz4','/docs/lz4'));
