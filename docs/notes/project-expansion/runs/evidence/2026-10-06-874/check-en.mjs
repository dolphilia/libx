import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {parse} from '/private/tmp/libx-yyjson-formal-874/node_modules/parse5/dist/index.js';
const R='/Users/dolphilia/github/libx',E=path.dirname(new URL(import.meta.url).pathname),N=R+'/docs/notes/document-import/yyjson/v0-13-0',W='/private/tmp/libx-yyjson-formal-874',A=W+'/apps/yyjson',D=A+'/dist',routes=JSON.parse(fs.readFileSync(N+'/regeneration/ROUTES.json')),hash=b=>createHash('sha256').update(b).digest('hex'),walk=n=>[n,...(n.childNodes??[]).flatMap(walk)],txt=n=>n.value??(n.childNodes??[]).map(txt).join(''),attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const inputs=[...JSON.parse(fs.readFileSync(N+'/source/FETCH.json')).files,...JSON.parse(fs.readFileSync(N+'/source/IMAGE_FETCH.json')).files];
for(const f of inputs){const data=fs.readFileSync(N+'/source/original/'+f.upstreamPath);assert.equal(hash(data),f.sha256);assert.equal(createHash('sha1').update(Buffer.concat([Buffer.from('blob '+data.length+'\0'),data])).digest('hex'),f.gitBlob);}
const rows=[];let codeCount=0,links=0;
for(const r of routes.guides.concat(routes.references)){
 const canonical=fs.readFileSync(N+'/canonical/en/'+r.id);assert.deepEqual(canonical,fs.readFileSync(A+'/src/content/docs/v0-13-0/en/'+r.id));
 const raw=fs.readFileSync(N+'/source/original/'+r.source,'utf8'),source=r.startLine?raw.split(/(?<=\n)/).slice(r.startLine-1,r.endLine).join(''):raw;
 const expected=r.wholeCode?[source.replace(/\n$/,'')]:[...source.matchAll(/^```[^\n]*\n([\s\S]*?)^```\s*$/gm)].map(x=>x[1].replace(/\n$/,''));
 const relative='v0-13-0/en/'+r.id.replace(/\.md$/,'')+'/index.html',all=walk(parse(fs.readFileSync(D+'/'+relative,'utf8'))),article=all.find(n=>n.tagName==='article'&&(attr(n,'class')??'').includes('sl-markdown-content'));assert(article,r.id);
 const nodes=walk(article),code=nodes.filter(n=>n.tagName==='pre').map(txt);assert.deepEqual(code,expected,r.id+' original code');codeCount+=code.length;
 for(const n of all){const val=attr(n,'href')??attr(n,'src');if(!val||/^(?:https?:|mailto:|data:|javascript:)/.test(val))continue;const url=new URL(val,'https://libx.dev/docs/yyjson/'+relative);if(!url.pathname.startsWith('/docs/yyjson/'))continue;let p=path.join(D,url.pathname.slice('/docs/yyjson/'.length));if(fs.existsSync(p)&&fs.statSync(p).isDirectory())p=path.join(p,'index.html');if(!fs.existsSync(p)&&!path.extname(p))p+='/index.html';assert(fs.existsSync(p),'missing '+val+' in '+r.id);if(url.hash&&p.endsWith('.html')){const target=walk(parse(fs.readFileSync(p,'utf8')));assert(target.some(t=>attr(t,'id')===decodeURIComponent(url.hash.slice(1))||attr(t,'name')===decodeURIComponent(url.hash.slice(1))),'missing anchor '+val);}links++;}
 rows.push({id:r.id,canonicalSHA256:hash(canonical),sourceSHA256:hash(Buffer.from(source)),originalCodeBlocksExact:code.length,renderedTables:nodes.filter(n=>n.tagName==='table').length});
}
assert.equal(rows.length,19);assert.equal(inputs.length,14);
const out={status:'passed-English-preparation',at:new Date().toISOString(),workspace:W,fixedSHAAndGitBlobInputs:14,EnglishOriginals:19,JapaneseDrafts:0,fullMeaningReviewed:0,originalCodeBlocksExact:codeCount,internalLinks:links,rows,scope:'Fixed-copy/code/structural/link English preparation only. No Japanese full meaning review/original code execution/formal integrated/publication completion claim.'};
fs.writeFileSync(E+'/EN_CHECK.json',JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({status:out.status,EnglishOriginals:19,originalCodeBlocksExact:codeCount,internalLinks:links}));
