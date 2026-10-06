import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {parse} from '/private/tmp/libx-lz4-formal-786/node_modules/parse5/dist/index.js';
import {unified} from '/private/tmp/libx-lz4-formal-786/node_modules/unified/index.js';
import remarkParse from '/private/tmp/libx-lz4-formal-786/node_modules/remark-parse/index.js';
import remarkGfm from '/private/tmp/libx-lz4-formal-786/node_modules/remark-gfm/index.js';
const root=process.cwd(), ev=root+'/docs/notes/project-expansion/runs/evidence/2026-10-05-787';
const work='/private/tmp/libx-lz4-formal-786', dist=work+'/apps/lz4/dist';
const map=JSON.parse(fs.readFileSync(ev+'/CANONICAL_MAP.json'));
const attr=(n,k)=>n.attrs?.find(x=>x.name===k)?.value;
const find=(n,p)=>[...(p(n)?[n]:[]),...(n.childNodes??[]).flatMap(x=>find(x,p))];
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const errors=[], rows=[], external=[];
const ast=unified().use(remarkParse).use(remarkGfm);
function stripAST(n){
  if(n===null||typeof n!=="object")return n;
  const result={};
  for(const [k,v] of Object.entries(n)){
    if(k==='position'||k==='url') continue;
    result[k]=Array.isArray(v)?v.map(x=>typeof x==='object'?stripAST(x):x):v;
  }
  return result;
}
function localTarget(url,route){
  const u=new URL(url,'https://libx.dev'+route);
  if(u.origin!=='https://libx.dev')return null;
  if(!u.pathname.startsWith('/docs/lz4/'))return null;
  const p=dist+'/'+decodeURIComponent(u.pathname.slice('/docs/lz4/'.length));
  const file=fs.existsSync(p)&&fs.statSync(p).isFile()?p:path.join(p,'index.html');
  return {file,fragment:decodeURIComponent(u.hash.slice(1))};
}
for(const p of map.pages){
  const canonical=fs.readFileSync(work+'/'+p.canonicalPath,'utf8');
  if(sha(Buffer.from(canonical))!==p.canonicalSha256)errors.push(p.path+' canonical hash changed');
  const body=canonical.slice(canonical.indexOf('\n---\n')+5);
  const tree=parse(fs.readFileSync(dist+'/'+p.route.slice('/docs/lz4/'.length)+'index.html','utf8'));
  const article=find(tree,n=>n.tagName==='article'&&(attr(n,'class')??'').includes('sl-markdown-content'))[0];
  const footer=find(tree,n=>n.tagName==='footer'&&attr(n,'class')==='document-context-footer')[0];
  if(!footer||!text(footer).includes('LZ4 1.10.0')||!text(footer).includes(p.sourceSha256))errors.push(p.path+' provenance version/hash missing');
  if(text(footer??{}).includes('Lua')||text(article).includes('Unofficial Libx presentation'))errors.push(p.path+' wrong metadata or Libx notice in body');
  const unmodified=dist+'/source/v1-10-0/originals/'+p.path+'.txt';
  if(!fs.existsSync(unmodified)||sha(fs.readFileSync(unmodified))!==p.sourceSha256)errors.push(p.path+' original download differs');
  let astParity=null;
  if(p.path.endsWith('.md')||p.path.endsWith('.MD')||p.path==='INSTALL'){
    const original=fs.readFileSync(root+'/docs/notes/project-expansion/runs/evidence/2026-10-05-781/lz4-fixed/'+p.path,'utf8');
    astParity=JSON.stringify(stripAST(ast.parse(original)))===JSON.stringify(stripAST(ast.parse(body)));
    if(!astParity)errors.push(p.path+' complete Markdown AST differs beyond destinations/positions');
  }
  const scope=[article,footer].filter(Boolean); let count=0;
  for(const n of scope.flatMap(s=>find(s,n=>n.tagName==='a'&&attr(n,'href')))){
    const href=attr(n,'href');
    if(/^https?:\/\//.test(href)&&!href.startsWith('https://libx.dev/docs/lz4/')){external.push({source:p.path,url:href,status:'not-live-checked; original destination retained'});continue;}
    if(/^mailto:/.test(href))continue;
    const target=localTarget(href,p.route); if(!target){errors.push(p.path+' non-local relative link '+href);continue;}
    count++;
    if(!fs.existsSync(target.file)){errors.push(p.path+' missing local target '+href);continue;}
    if(target.fragment){
      const d=parse(fs.readFileSync(target.file,'utf8'));
      if(!find(d,n=>attr(n,'id')===target.fragment||attr(n,'name')===target.fragment).length)errors.push(p.path+' missing fragment '+href);
    }
  }
  rows.push({source:p.path,completeMarkdownAstParity:astParity,localArticleAndFooterLinksChecked:count,originalDownloadSha256:p.sourceSha256,correctVersionAndFooter:true});
}
const jaFiles=[];
function walk(dir){for(const x of fs.readdirSync(dir,{withFileTypes:true})){const f=dir+'/'+x.name;x.isDirectory()?walk(f):jaFiles.push(f);}}
walk(work+'/apps/lz4/src/content/docs/v1-10-0/ja');
const result={at:new Date().toISOString(),status:errors.length?'failed':'passed',errors,pages:rows,externalDestinations:external,translationFiles:jaFiles.length,limitations:['External destination liveness and image loading have not been checked.','AST parity is source preservation, not semantic content review.','The upstream archive is not yet the complete GPL corresponding Libx documentation source kit.','The generated empty Japanese landing must be inspected before final display gates.']};
fs.writeFileSync(ev+'/PROVENANCE_AND_LINK_AUDIT.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({errors,pages:rows.length,translationFiles:jaFiles.length,external:external.length},null,2));
if(errors.length)process.exitCode=1;
