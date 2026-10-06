import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const req=createRequire(import.meta.url),parse=req('/private/tmp/libx-gperf-integration-20261004/node_modules/parse5'),dir='/private/tmp/libx-jq-upstream-render-593',dist='/private/tmp/libx-jq-astro-trial-592/apps/jq/dist/v1-8-2/en/01-guide';
const proof=JSON.parse(fs.readFileSync('/private/tmp/libx-jq-full-scope-trial-592/TRIAL_RESULT.json')),reference=JSON.parse(fs.readFileSync(dir+'/UPSTREAM_FIELDS.json'));
assert.equal(proof.inputSha256,reference.inputSha256);
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],txt=n=>(attr(n,'class')||'').split(/\s+/).includes('docs-code-toolbar')?'':n.value??(n.childNodes||[]).map(txt).join(''),norm=s=>s.replace(/\s+/g,' ').trim();
const all=[];for(const p of proof.pages){const html=fs.readFileSync(dist+'/'+p.name.replace(/\.md$/,'')+'/index.html','utf8');const article=walk(parse.parse(html)).find(n=>n.tagName==='article');all.push({name:p.name,article});}
const reports=[];
for(const f of reference.fields){
 let actual;
 if(f.mode==='entry-title'){
  const prefix=f.key.replace(/\/title$/,'/body'),item=all.find(p=>p.article.childNodes.some(n=>n.nodeName==='#comment'&&n.data===` jq-source-field:${prefix}:start `));assert(item,f.key);
  const pos=item.article.childNodes.findIndex(n=>n.nodeName==='#comment'&&n.data===` jq-source-field:${prefix}:start `);actual=[...item.article.childNodes.slice(0,pos)].reverse().find(n=>n.tagName==='h3');assert(actual,f.key);
 }else{
  const item=all.find(p=>p.article.childNodes.some(n=>n.nodeName==='#comment'&&n.data===` jq-source-field:${f.key}:start `));assert(item,f.key);
  const children=item.article.childNodes,a=children.findIndex(n=>n.nodeName==='#comment'&&n.data===` jq-source-field:${f.key}:start `),b=children.findIndex(n=>n.nodeName==='#comment'&&n.data===` jq-source-field:${f.key}:end `);assert(b>a);actual={childNodes:children.slice(a+1,b)};
 }
 const expected=parse.parseFragment(f.html),x=walk(actual),y=walk(expected),differences=[];
 if(norm(txt(actual))!==norm(txt(expected)))differences.push({type:'text',expected:norm(txt(expected)),actual:norm(txt(actual))});
 const pre=ns=>ns.filter(n=>n.tagName==='pre').map(txt),inline=ns=>ns.filter(n=>n.tagName==='code'&&n.parentNode?.tagName!=='pre').map(txt);
 if(JSON.stringify(pre(x))!==JSON.stringify(pre(y).map(s=>s.endsWith('\n')?s.slice(0,-1):s)))differences.push({type:'pre',expected:pre(y),actual:pre(x)});
 if(JSON.stringify(inline(x))!==JSON.stringify(inline(y)))differences.push({type:'inline-code',expected:inline(y),actual:inline(x)});
 const roles=ns=>ns.filter(n=>/^(p|ul|ol|li|blockquote|em|strong|h[1-6])$/.test(n.tagName||'')).map(n=>n.tagName);
 if(JSON.stringify(roles(x))!==JSON.stringify(roles(y)))differences.push({type:'roles',expected:roles(y),actual:roles(x)});
 const links=ns=>ns.filter(n=>n.tagName==='a'&&attr(n,'href')).map(n=>[norm(txt(n)),attr(n,'href')]);if(JSON.stringify(links(x))!==JSON.stringify(links(y)))differences.push({type:'links',expected:links(y),actual:links(x)});
 reports.push({key:f.key,sourceSha256:f.sourceSha256,mode:f.mode,textExact:!differences.some(x=>x.type==='text'),differences});
}
const output={at:new Date().toISOString(),status:'independent-upstream-comparison-diagnostics-not-conversion-pass',comparedFields:reports.length,exactFields:reports.filter(x=>!x.differences.length).length,reports,differences:reports.filter(x=>x.differences.length)};
fs.writeFileSync(dir+'/COMPARISON.json',JSON.stringify(output,null,2)+'\n',{flag:'wx'});
console.log({comparedFields:reports.length,exactFields:output.exactFields,differences:output.differences.map(x=>({key:x.key,types:x.differences.map(y=>y.type)}))});
