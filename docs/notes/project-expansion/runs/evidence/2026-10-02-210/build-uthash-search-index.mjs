import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import matter from 'gray-matter';
import {buildSearchIndexes} from '../build-search-index.js';
import {prepareImportBatch} from './batch-import-output.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const app=path.join(root,'apps/uthash'),version='v2-4-0',base='/docs/uthash';
const require=createRequire(import.meta.url),astroRequire=createRequire(require.resolve('astro/package.json')),
 markdownRequire=createRequire(astroRequire.resolve('@astrojs/markdown-remark'));
const [{unified},{default:remarkParse}]=await Promise.all([import(markdownRequire.resolve('unified')),import(markdownRequire.resolve('remark-parse'))]);
const parser=unified().use(remarkParse);
// Generate normal complete entries, then bind every actual source heading to its original ID.
// All patched language files are validated before atomic replacement; no shared search code is changed.
buildSearchIndexes(app,base);
const directory=path.join(app,'public/search',version),prepared=[];
for(const langFile of fs.readdirSync(directory).filter(n=>n.endsWith('.json')).sort()) {
 const lang=langFile.slice(0,-5),target=path.join(directory,langFile),index=JSON.parse(fs.readFileSync(target,'utf8'));
 let count=0;
 for(const entry of index.entries) {
  const prefix=`${base}/${version}/${lang}/`;assert.ok(entry.url.startsWith(prefix));
  const slug=entry.url.slice(prefix.length).replace(/\/$/,'');assert.ok(!slug.includes('..'));
  const file=path.join(app,'src/content/docs',version,lang,slug+'.md');
  const content=matter(fs.readFileSync(file,'utf8')).content,children=parser.parse(content).children,ids=[];
  for(let i=0;i<children.length;i++) {
   const match=children[i].type==='html'&&children[i].value.match(/^\s*<!--libx-source-heading:([A-Za-z0-9_.:-]+)-->\s*$/);
   if(match){assert.equal(children[i+1]?.type,'heading');ids.push(match[1]);}
  }
  if(slug==='02-license/01-license'&&lang==='ja'){assert.equal(ids.length,0);assert.equal(entry.headings.length,2);continue;}
  assert.equal(ids.length,entry.headings.length,`missing source marker ${lang}/${slug}`);
  assert.equal(new Set(ids).size,ids.length);
  entry.headings.forEach((h,i)=>{h.slug=ids[i];count++;});
 }
 const json=JSON.stringify(index)+'\n';assert.ok(Buffer.byteLength(json)<=2*1024*1024);
 prepared.push({target,json,lang,count,pages:index.entries.length});
}
prepareImportBatch({stagingRoot:path.join(app,'public/.uthash-search-staging'),outputs:prepared.map(p=>({targetPath:p.target,kind:'file',generate:dest=>fs.writeFileSync(dest,p.json)}))});
fs.rmdirSync(path.join(app,'public/.uthash-search-staging'));
console.log(JSON.stringify({sourceIdSearch:prepared.map(p=>({lang:p.lang,pages:p.pages,headings:p.count}))}));
