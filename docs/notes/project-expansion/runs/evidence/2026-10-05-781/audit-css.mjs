import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import crypto from 'node:crypto';import {parse,serialize} from '/private/tmp/libx-css-resume-781/node_modules/parse5/dist/index.js';
const root='/Users/dolphilia/github/libx',work='/private/tmp/libx-css-resume-781',ev=root+'/docs/notes/project-expansion/runs/evidence/2026-10-05-781';const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
function files(p){return fs.readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(p,e.name)):[path.join(p,e.name)]);}
function find(n,p,out=[]){if(p(n))out.push(n);for(const c of n.childNodes??[])find(c,p,out);return out;}
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const scopeIds=new Map(), reverseIds=new Map();
function compareNodes(a,b,location){
 assert.equal(a.nodeName,b.nodeName,location);assert.equal(a.value,b.value,location);
 assert.equal(a.attrs?.length??0,b.attrs?.length??0,location);
 for(let i=0;i<(a.attrs?.length??0);i++){
  const x=a.attrs[i],y=b.attrs[i];assert.equal(x.value,y.value,location);
  if(x.name===y.name)continue;
  assert.match(x.name,/^data-astro-cid-[a-z0-9]+$/);assert.match(y.name,/^data-astro-cid-[a-z0-9]+$/);assert.equal(x.value,'');
  if(scopeIds.has(y.name))assert.equal(scopeIds.get(y.name),x.name);
  if(reverseIds.has(x.name))assert.equal(reverseIds.get(x.name),y.name);
  scopeIds.set(y.name,x.name);reverseIds.set(x.name,y.name);
 }
 assert.equal(a.childNodes?.length??0,b.childNodes?.length??0,location);
 for(let i=0;i<(a.childNodes?.length??0);i++)compareNodes(a.childNodes[i],b.childNodes[i],location);
}
const rows=[];
for(const app of ['lua','glfw']){
 for(const file of files(work+'/dist/docs/'+app).filter(p=>p.endsWith('/index.html')&&p.includes('/'+(app==='lua'?'v5-5-1':'v3-5-1')+'/'))){
  const rel=path.relative(work,file),newTree=parse(fs.readFileSync(file,'utf8')),oldFile=work+'/baseline-dist/'+path.relative(work+'/dist/docs',file);assert(fs.existsSync(oldFile));const oldTree=parse(fs.readFileSync(oldFile,'utf8'));
  const select=n=>n.tagName==='article'&&(attr(n,'class')??'').split(' ').includes('sl-markdown-content');const newer=find(newTree,select)[0],older=find(oldTree,select)[0];
  if(!newer){assert(!older);continue;}assert(older);
  const a=serialize(newer),b=serialize(older);compareNodes(newer,older,rel+' article changed');
  const matches=find(newer,n=>n.tagName==='a'&&attr(n,'id')!==undefined&&!n.childNodes?.length&&/^h[1-6]$/.test(n.parentNode?.tagName));
  rows.push({path:rel,articleSha256:sha(a),previousArticleSha256:sha(b),articleIdentical:true,selectorMatches:matches.map(n=>({anchor:attr(n,'id'),heading:attr(n.parentNode,'id')}))});
 }
 const sourceFiles=files(root+'/apps/'+app+'/src/content/docs').filter(p=>/\.mdx?$/.test(p));for(const file of sourceFiles){const rel=path.relative(root,file);assert.equal(sha(fs.readFileSync(file)),sha(fs.readFileSync(work+'/'+rel)),rel);}
}
fs.writeFileSync(ev+'/CSS_STATIC_REGRESSION.json',JSON.stringify({status:'passed',cssSha256:sha(fs.readFileSync(work+'/packages/theme/src/css/starlight-overrides.css')),articleCount:rows.length,astroScopeIdChanges:Object.fromEntries(scopeIds),pages:rows,coverage:'全186本文DOM/text/属性値/順序は同一。CSSビルド起因の空data-astro-cid属性名だけを一対一対応で許容。出典フッター配置済みの本番基準で比較。全文内容再レビューではない。'},null,2)+'\n');console.log('article DOM parity',rows.length);