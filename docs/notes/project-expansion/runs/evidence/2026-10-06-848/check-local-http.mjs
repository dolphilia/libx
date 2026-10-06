import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import assert from 'node:assert/strict';
const workspace='/private/tmp/libx-mdbook-formal-843',ev=new URL('.',import.meta.url),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const files=(d,p='')=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(d,e.name),path.join(p,e.name)):[path.join(p,e.name)]);
const paths=files(workspace+'/dist/docs/mdbook').map(p=>'docs/mdbook/'+p).concat(['en/index.html','ja/index.html']);
const results=[];let cursor=0;
await Promise.all(Array.from({length:6},async()=>{while(cursor<paths.length){const p=paths[cursor++];const url='http://127.0.0.1:4333/'+p.replace(/index\.html$/,'');const response=await fetch(url,{headers:{'Accept-Encoding':'identity'},signal:AbortSignal.timeout(15000)});const body=Buffer.from(await response.arrayBuffer()),expected=fs.readFileSync(workspace+'/dist/'+p);results.push({path:p,status:response.status,bytes:body.length,sha256:sha(body),expectedSHA256:sha(expected),exact:response.status===200&&sha(body)===sha(expected)});}}));
results.sort((a,b)=>a.path.localeCompare(b.path));
const missing=await fetch('http://127.0.0.1:4333/docs/mdbook/v0-5-4/ja/01-guide/this-chapter-does-not-exist/');assert.equal(missing.status,404);
const report={status:results.every(r=>r.exact)?'passed':'failed',workspace,at:new Date().toISOString(),scope:'all mdBook deployed files plus both landing indices and missing chapter 404',count:results.length,missingChapterStatus:missing.status,records:results};fs.writeFileSync(new URL('LOCAL_HTTP.json',ev),JSON.stringify(report,null,2)+'\n');assert.equal(report.status,'passed');console.log(JSON.stringify({status:report.status,files:results.length,missing:missing.status}));
