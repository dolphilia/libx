import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import crypto from 'node:crypto';import {parse,serialize} from '/private/tmp/libx-css-regression-20261003-329/node_modules/parse5/dist/index.js';
const root='/Users/dolphilia/github/libx',base='/private/tmp/libx-cjson-import-20261003',work='/private/tmp/libx-css-regression-20261003-329',ev=root+'/docs/notes/project-expansion/runs/evidence/2026-10-03-329';const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const current=fs.readFileSync(ev+'/CURRENT_CSS_V2.css'),old=fs.readFileSync('/Users/dolphilia/.codex/worktrees/official-docs-maintenance/libx/packages/theme/src/css/starlight-overrides.css');
const addition='  /* 見出し先頭の互換アンカーでも、端数のスクロール位置で文字を切らない。 */\n  :where(.article-content, .sl-markdown-content) :is(h1, h2, h3, h4, h5, h6) > a[id]:empty {\n    scroll-margin-top: 1rem;\n  }\n\n';assert.equal(current.toString().replace(addition,'').replace('var(--sl-nav-height, 0px)','var(--sl-nav-height)'),old.toString());assert.equal(sha(current),sha(fs.readFileSync(work+'/packages/theme/src/css/starlight-overrides.css')));
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
  const rel=path.relative(work,file),newTree=parse(fs.readFileSync(file,'utf8')),oldFile=base+'/'+rel;assert(fs.existsSync(oldFile));const oldTree=parse(fs.readFileSync(oldFile,'utf8'));
  const select=n=>n.tagName==='article'&&(attr(n,'class')??'').split(' ').includes('sl-markdown-content');const newer=find(newTree,select)[0],older=find(oldTree,select)[0];
  if(!newer){assert(!older);continue;}assert(older);
  const a=serialize(newer),b=serialize(older);compareNodes(newer,older,rel+' article changed');
  const matches=find(newer,n=>n.tagName==='a'&&attr(n,'id')!==undefined&&!n.childNodes?.length&&/^h[1-6]$/.test(n.parentNode?.tagName));
  rows.push({path:rel,articleSha256:sha(a),previousArticleSha256:sha(b),articleIdentical:true,selectorMatches:matches.map(n=>({anchor:attr(n,'id'),heading:attr(n.parentNode,'id')}))});
 }
 const sourceFiles=files(root+'/apps/'+app+'/src/content/docs').filter(p=>/\.mdx?$/.test(p));for(const file of sourceFiles){const rel=path.relative(root,file);assert.equal(sha(fs.readFileSync(file)),sha(fs.readFileSync(work+'/'+rel)),rel);}
}
const ledger=JSON.parse(fs.readFileSync(root+'/docs/notes/project-expansion/OPERATIONS.json'));const affected=ledger.operations.filter(o=>o.artifacts.some(a=>a.path==='packages/theme/src/css/starlight-overrides.css'));
const scope=affected.map(o=>({operation:o.id,pages:o.scope.pages.flatMap(p=>['en','ja'].map(lang=>{const route='dist/docs/'+o.appId+'/'+o.version+'/'+lang+'/'+p.replace(/\.mdx?$/,'')+'/index.html';const row=rows.find(r=>r.path===route);assert(row,route);return {path:route,articleIdentical:row.articleIdentical,selectorMatchCount:row.selectorMatches.length};}))}));
const result={status:'passed',cssSha256:sha(current),previousCssSha256:sha(old),changes:[addition,'heading scroll-margin-top var(--sl-nav-height)に未定義時0pxのfallback追加'],wholeSourcesIdentical:true,pages:rows,affectedScope:scope,astroScopeIdChanges:Object.fromEntries(scopeIds),coverage:'全Lua/GLFWの現行配信本文と旧統合ビルドarticle DOM/text/属性順・値が同一。AstroのCSS変更に伴う空data-astro-cid-*属性名のhashのみ全体で一対一対応を確認して許容。その他差分を正規化せず、原article SHAも保存。新selector適用先全数と旧3操作の範囲を明示。source再生成検査の代替ではない。'};
fs.writeFileSync(ev+'/CSS_STATIC_REGRESSION.json',JSON.stringify(result,null,2)+'\n',{flag:'wx'});console.log({pages:rows.length,totalMatches:rows.reduce((s,r)=>s+r.selectorMatches.length,0),affectedScope:scope.map(o=>({id:o.operation,pages:o.pages.length,matches:o.pages.reduce((s,r)=>s+r.selectorMatchCount,0)}))});
