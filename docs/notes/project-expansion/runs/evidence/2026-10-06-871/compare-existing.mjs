import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import assert from 'node:assert/strict';import{parse}from'/private/tmp/libx-wren-formal-871/node_modules/parse5/dist/index.js';
const E=new URL('.',import.meta.url),old='/private/tmp/libx-sds-production-artifact-862/dist',current='/private/tmp/libx-wren-formal-871/dist',sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const files=(d,p='')=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(d,e.name),path.join(p,e.name)):[path.join(p,e.name)]);const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;const has=(n,c)=>(attr(n,'class')??'').split(/\s+/).includes(c);const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)];const text=n=>n.value??(n.childNodes??[]).map(text).join('');
const shape=n=>({name:n.nodeName,...(n.value!==undefined?{value:n.value}:{}),...(n.data!==undefined?{data:n.data}:{}),...(n.attrs?{attrs:n.attrs}:{}),children:(n.childNodes??[]).map(shape)});
const prior=new Map();const presentation=[];
const css=JSON.parse(fs.readFileSync(new URL('CSS_SCOPE_MAP.json',E))); assert.equal(css.status,'passed');
function sidebarList(n){if(n.nodeName!=='ul')return false;let p=n.parentNode,nav=false;while(p){if(p.nodeName==='nav')nav=true;if(p.nodeName==='aside'&&attr(p,'id')==='sidebar')return nav;p=p.parentNode;}return false;}
function normalize(tree,added){const kinds=[],scopes={};if(!added)for(const l of walk(tree).filter(n=>n.nodeName==='link'&&attr(n,'rel')==='stylesheet'))for(const [a,b]of Object.entries(css.perStylesheet[attr(l,'href')]??{})){assert(!scopes[a]||scopes[a]===b);scopes[a]=b;}
 for(const n of walk(tree).reverse()){
  if(!added&&n.attrs) for(const a of n.attrs){if(scopes[a.name]) a.name=scopes[a.name];if(a.name==='href'&&css.urlMap[a.value]) a.value=css.urlMap[a.value];}

  if(added&&has(n,'project-card')&&(attr(n,'href')??'').startsWith('/docs/wren/')){const p=n.parentNode,i=p.childNodes.indexOf(n);assert(['/docs/wren/v0-4-0/en/01-guide/01-overview','/docs/wren/v0-4-0/ja/01-guide/01-overview'].includes(attr(n,'href')));p.childNodes.splice(i,1);if(p.childNodes[i]?.nodeName==='#text'&&/^\s*$/.test(p.childNodes[i].value))p.childNodes.splice(i,1);kinds.push('only new Wren card and separating space removed');}
  if(has(n,'doc-grid')||has(n,'category-list')||sidebarList(n)){n.childNodes=n.childNodes.filter(c=>!(c.nodeName==='#text'&&/^\s*$/.test(c.value)));n.childNodes.sort((a,b)=>JSON.stringify(shape(a)).localeCompare(JSON.stringify(shape(b))));kinds.push('same sidebar/category/card sibling set order normalized');}
  if(n.nodeName==='head'){const css=n.childNodes.filter(c=>c.nodeName==='link'&&attr(c,'rel')==='stylesheet');if(css.length>1){n.childNodes=n.childNodes.filter(c=>!css.includes(c));n.childNodes.push(...css.sort((a,b)=>attr(a,'href').localeCompare(attr(b,'href'))));kinds.push('same stylesheet tags order normalized');}}
 }
 return kinds;
}

function presentationPair(x,y,rel){
 const dateRows=[];const xd=walk(x).filter(n=>has(n,'version-date')),yd=walk(y).filter(n=>has(n,'version-date'));assert.equal(xd.length,yd.length);const different=new Set(xd.map((n,i)=>text(n).trim()!==text(yd[i]).trim()?i:-1).filter(i=>i>=0));
 for(const [tree,zone]of[[x,'America/Los_Angeles'],[y,'Asia/Tokyo']]) for(const [index,n]of walk(tree).filter(n=>has(n,'version-date')).entries()){if(!different.has(index))continue;
  let link=n.parentNode;while(link&&!(link.nodeName==='a'&&attr(link,'data-version-link')==='true'))link=link.parentNode;assert(link,'date must bind version link');
  const u=attr(link,'href').match(/^\/docs\/([^/]+)\/([^/]+)\/([^/]+)/);assert(u);const [,id,version,lang]=u;
  const configPath='/private/tmp/libx-wren-formal-871/apps/'+id+'/src/config/project.config.jsonc';const config=JSON.parse(fs.readFileSync(configPath,'utf8').replace(/^\s*\/\/.*$/gm,''));const fixed=config.versioning.versions.find(v=>v.id===version).date;assert(fixed);
  const expected=new Date(fixed).toLocaleDateString(lang,{year:'numeric',month:'short',day:'numeric',timeZone:zone});assert.equal(text(n).trim(),expected,rel+' version date '+zone);
  dateRows.push({version,language:lang,sourceDate:fixed,zone,rendered:expected});n.childNodes=[{nodeName:'#text',value:' '+fixed+' '}];
 }
 if(dateRows.length)presentation.push({path:rel,dateSourceBound:dateRows});
 if(!rel.startsWith('docs/sample-docs/'))return;
 const before=walk(x),after=walk(y),xc=before.filter(n=>n.nodeName==='code'&&n.parentNode?.nodeName==='pre'),yc=after.filter(n=>n.nodeName==='code'&&n.parentNode?.nodeName==='pre');assert.equal(xc.length,yc.length);
 for(let i=0;i<xc.length;i++){assert.equal(text(xc[i]),text(yc[i]),rel+' exact code characters');assert.deepEqual(xc[i].attrs,yc[i].attrs);assert.deepEqual(xc[i].parentNode.attrs,yc[i].parentNode.attrs);const raw=text(xc[i]);xc[i].childNodes=[{nodeName:'#text',value:raw}];yc[i].childNodes=[{nodeName:'#text',value:raw}];}
 const xt=before.filter(n=>['tab','tabpanel'].includes(attr(n,'role'))),yt=after.filter(n=>['tab','tabpanel'].includes(attr(n,'role')));assert.equal(xt.length,yt.length);const ids={};
 for(let i=0;i<xt.length;i++){assert.equal(attr(xt[i],'role'),attr(yt[i],'role'));const a=attr(xt[i],'id'),b=attr(yt[i],'id');assert(/^tab(?:-panel)?-\d+$/.test(a)&&/^tab(?:-panel)?-\d+$/.test(b));assert(!ids[a]);ids[a]=b;}
 assert.equal(Object.values(ids).length,new Set(Object.values(ids)).size);
 for(const n of before)for(const a of n.attrs??[]){if(a.name==='id'&&ids[a.value])a.value=ids[a.value];if(a.name==='href'&&a.value.startsWith('#')&&ids[a.value.slice(1)])a.value='#'+ids[a.value.slice(1)];if(['aria-labelledby','aria-controls'].includes(a.name))a.value=a.value.split(/\s+/).map(v=>ids[v]??v).join(' ');}
 presentation.push({path:rel,exactCodeFences:xc.length,tabAndPanelBijectiveIDs:ids,delta:'only inner highlighting spans/color after exact code/pre attrs, and generated tab numeric IDs with all references preserved'});
}

const rows=[],unchanged=[],missing=[],fail=[];
for(const rel of files(old)){
 const p=path.join(current,rel);if(!fs.existsSync(p)){const mapped=css.urlMap['/'+rel];if(mapped){rows.push({path:rel,replacement:mapped.slice(1),ok:true,classification:['exact CSS bytes after bijective Astro scope mapping']});continue;} missing.push(rel);continue;}const a=fs.readFileSync(path.join(old,rel)),b=fs.readFileSync(p);if(sha(a)===sha(b)){unchanged.push({path:rel,sha256:sha(a)});continue;}
 const row={path:rel,oldSHA256:sha(a),newSHA256:sha(b),ok:false};const reused=prior.get(rel);if(reused?.ok&&reused.oldSHA256===row.oldSHA256&&reused.newSHA256===row.newSHA256){rows.push({...reused,reusedEvidence:'EXISTING_OUTPUT_SCOPE_ONLY.json'});continue;}
 if(rel.endsWith('.html')){const x=parse(a.toString()),y=parse(b.toString());normalize(x,false);row.classification=normalize(y,true);presentationPair(x,y,rel);row.articleAndFooterUnchanged=JSON.stringify(walk(x).filter(n=>n.nodeName==='article'||has(n,'document-provenance')).map(shape))===JSON.stringify(walk(y).filter(n=>n.nodeName==='article'||has(n,'document-provenance')).map(shape));row.ok=JSON.stringify(shape(x))===JSON.stringify(shape(y));
  if(!row.ok){const u=JSON.stringify(shape(x)),v=JSON.stringify(shape(y));let i=0;while(i<Math.min(u.length,v.length)&&u[i]===v[i])i++;row.firstDiff={old:u.slice(Math.max(0,i-80),i+200),new:v.slice(Math.max(0,i-80),i+200)};}
 }
 rows.push(row);if(!row.ok)fail.push(row);
}
const newFiles=files(current).filter(p=>!fs.existsSync(path.join(old,p)));const out={status:fail.length||missing.length?'failed':'passed',at:new Date().toISOString(),baseline:'375ed5dee2d0d7abdc0ba14adef465d567c31832',unchangedCount:unchanged.length,changedCount:rows.length,addedCount:newFiles.length,missing,failures:fail,rows,unchanged,newFiles};fs.writeFileSync(new URL('BUILD_ENVIRONMENT_PRESENTATION_DELTA.json',E),JSON.stringify({status:fail.length?'failed':'passed',method:'CSS exact bijective scope map; version-date only validated against fixed source configuration and each build timezone; sample code text/pre attrs and tab id-reference bijection',rows:presentation},null,2)+'\n');fs.writeFileSync(new URL('EXISTING_OUTPUT_COMPARISON.json',E),JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({status:out.status,unchanged:unchanged.length,changed:rows.length,added:newFiles.length,missing,failures:fail.slice(0,5),failureCount:fail.length}));

process.exitCode=fail.length||missing.length?1:0;
