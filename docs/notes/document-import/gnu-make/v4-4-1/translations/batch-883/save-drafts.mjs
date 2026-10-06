import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
const dir=path.dirname(new URL(import.meta.url).pathname);
const translations=Object.fromEntries(fs.readdirSync(dir).filter(f=>f.endsWith('.ja-units.txt')).map(f=>[f.replace('.ja-units.txt',''),fs.readFileSync(path.join(dir,f),'utf8').trimEnd()]));
const records=[];
for (const [stem, text] of Object.entries(translations)) {
  const units=JSON.parse(fs.readFileSync(path.join(dir,stem+'.units.json')));
  const chunks=fs.readFileSync(path.join(dir,stem+'.masked-source.md'),'utf8').split('\n\n');
  const ja=text.split('\n\n');
  if (ja.length!==units.length) throw new Error(stem+' unit mismatch');
  units.forEach((u,i)=>{
    const links=[...u.source.matchAll(/(<a\b[^>]*>)([\s\S]*?)<\/a>/g)];
    let s=ja[i].replace(/\{\{(\d+)\|([^}]+)\}\}/g,(_,n,label)=>links[+n][1]+label+'</a>');
    if ([...s.matchAll(/<a\b/g)].length!==links.length) throw new Error(stem+' link mismatch '+i);
    const spans=[...u.source.matchAll(/<span\b[^>]*><\/span>/g)].map(x=>x[0]);
    chunks[u.chunk]=s+(spans.length?' '+spans.join(' '):'');
  });
  const codes=JSON.parse(fs.readFileSync(path.join(dir,stem+'.code.json')));
  let body=chunks.join('\n\n').replace(/\[LIBX_CODE_(\d+)\]/g,(_,n)=>codes[+n-1]);
  if (body.includes('[LIBX_CODE_')||body.includes('{{')) throw new Error(stem+' unresolved');
  const out=path.join(dir,stem+'.ja-draft.md'); fs.writeFileSync(out,body);
  records.push({stem,units:units.length,codeBlocks:codes.length,draft:out,sha256:crypto.createHash('sha256').update(body).digest('hex')});
}
fs.writeFileSync(path.join(dir,'SAVED_DRAFTS.json'),JSON.stringify({status:'saved-unreviewed',meaningReview:'pending-separate-whole-page-reading',savedAt:new Date().toISOString(),records},null,2)+'\n');
console.log(JSON.stringify(records.map(({stem,units,codeBlocks})=>({stem,units,codeBlocks}))));
