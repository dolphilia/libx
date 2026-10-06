from pathlib import Path
p=Path(__file__).parent/'compare-existing.mjs';s=p.read_text();s=s.replace("const css=JSON.parse", "const previous=JSON.parse(fs.readFileSync(new URL('EXISTING_OUTPUT_SCOPE_ONLY.json',E)));const prior=new Map(previous.rows.map(r=>[r.path,r]));const presentation=[];\nconst css=JSON.parse")
addition='''
function presentationPair(x,y,rel){
 const dateRows=[];
 for(const [tree,zone]of[[x,'America/Los_Angeles'],[y,'Asia/Tokyo']]) for(const n of walk(tree).filter(n=>has(n,'version-date'))){
  let link=n.parentNode;while(link&&!(link.nodeName==='a'&&attr(link,'data-version-link')==='true'))link=link.parentNode;assert(link,'date must bind version link');
  const u=attr(link,'href').match(/^\\/docs\\/([^/]+)\\/([^/]+)\\/([^/]+)/);assert(u);const [,id,version,lang]=u;
  const configPath='/private/tmp/libx-rapidjson-formal-853/apps/'+id+'/src/config/project.config.jsonc';const config=JSON.parse(fs.readFileSync(configPath,'utf8').replace(/^\\s*\\/\\/.*$/gm,''));const fixed=config.versioning.versions.find(v=>v.id===version).date;assert(fixed);
  const expected=new Date(fixed).toLocaleDateString(lang,{year:'numeric',month:'short',day:'numeric',timeZone:zone});assert.equal(text(n).trim(),expected,rel+' version date '+zone);
  dateRows.push({version,language:lang,sourceDate:fixed,zone,rendered:expected});n.childNodes=[{nodeName:'#text',value:' '+fixed+' '}];
 }
 if(dateRows.length)presentation.push({path:rel,dateSourceBound:dateRows});
 if(!rel.startsWith('docs/sample-docs/'))return;
 const before=walk(x),after=walk(y),xc=before.filter(n=>n.nodeName==='code'&&n.parentNode?.nodeName==='pre'),yc=after.filter(n=>n.nodeName==='code'&&n.parentNode?.nodeName==='pre');assert.equal(xc.length,yc.length);
 for(let i=0;i<xc.length;i++){assert.equal(text(xc[i]),text(yc[i]),rel+' exact code characters');assert.deepEqual(xc[i].attrs,yc[i].attrs);assert.deepEqual(xc[i].parentNode.attrs,yc[i].parentNode.attrs);const raw=text(xc[i]);xc[i].childNodes=[{nodeName:'#text',value:raw}];yc[i].childNodes=[{nodeName:'#text',value:raw}];}
 const xt=before.filter(n=>['tab','tabpanel'].includes(attr(n,'role'))),yt=after.filter(n=>['tab','tabpanel'].includes(attr(n,'role')));assert.equal(xt.length,yt.length);const ids={};
 for(let i=0;i<xt.length;i++){assert.equal(attr(xt[i],'role'),attr(yt[i],'role'));const a=attr(xt[i],'id'),b=attr(yt[i],'id');assert(/^tab(?:-panel)?-\\d+$/.test(a)&&/^tab(?:-panel)?-\\d+$/.test(b));assert(!ids[a]);ids[a]=b;}
 assert.equal(Object.values(ids).length,new Set(Object.values(ids)).size);
 for(const n of before)for(const a of n.attrs??[]){if(a.name==='id'&&ids[a.value])a.value=ids[a.value];if(a.name==='href'&&a.value.startsWith('#')&&ids[a.value.slice(1)])a.value='#'+ids[a.value.slice(1)];if(['aria-labelledby','aria-controls'].includes(a.name))a.value=a.value.split(/\\s+/).map(v=>ids[v]??v).join(' ');}
 presentation.push({path:rel,exactCodeFences:xc.length,tabAndPanelBijectiveIDs:ids,delta:'only inner highlighting spans/color after exact code/pre attrs, and generated tab numeric IDs with all references preserved'});
}
'''
s=s.replace('const rows=[],unchanged=[],missing=[],fail=[];',addition+'\nconst rows=[],unchanged=[],missing=[],fail=[];')
s=s.replace("const row={path:rel,oldSHA256:sha(a),newSHA256:sha(b),ok:false};", "const row={path:rel,oldSHA256:sha(a),newSHA256:sha(b),ok:false};const reused=prior.get(rel);if(reused?.ok&&reused.oldSHA256===row.oldSHA256&&reused.newSHA256===row.newSHA256){rows.push({...reused,reusedEvidence:'EXISTING_OUTPUT_SCOPE_ONLY.json'});continue;}")
s=s.replace("normalize(x,false);row.classification=normalize(y,true);", "normalize(x,false);row.classification=normalize(y,true);presentationPair(x,y,rel);")
s=s.replace("fs.writeFileSync(new URL('EXISTING_OUTPUT_COMPARISON.json',E)", "fs.writeFileSync(new URL('BUILD_ENVIRONMENT_PRESENTATION_DELTA.json',E),JSON.stringify({status:fail.length?'failed':'passed',method:'CSS exact bijective scope map; version-date only validated against fixed source configuration and each build timezone; sample code text/pre attrs and tab id-reference bijection',rows:presentation},null,2)+'\\n');fs.writeFileSync(new URL('EXISTING_OUTPUT_COMPARISON.json',E)")
old=p.parent/'EXISTING_OUTPUT_COMPARISON.json';old.rename(p.parent/'EXISTING_OUTPUT_SCOPE_ONLY.json');p.write_text(s)
