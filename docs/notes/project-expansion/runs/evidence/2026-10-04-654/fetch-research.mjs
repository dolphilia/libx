import fs from 'node:fs';
import { createHash } from 'node:crypto';
const dir='docs/notes/project-expansion/runs/evidence/2026-10-04-654';
const urls=[
 ['OFFICIAL_GUIDE','https://rust-lang.github.io/mdBook/'],
 ['OFFICIAL_REPO','https://github.com/rust-lang/mdBook'],
 ['OFFICIAL_WIKI','https://github.com/rust-lang/mdBook/wiki'],
 ['JAPANESE_COMMUNITY','https://github.com/rust-lang-ja'],
 ['MULTILINGUAL_ARTICLE','https://zenn.dev/dalance/articles/b69c8833ffc739'],
 ['ENGLISH_MIRROR_1','https://moenarch.github.io/moenarchbook/index.html'],
 ['ENGLISH_MIRROR_2','https://wofwca.github.io/mdBook/cli/serve.html'],
 ['ENGLISH_MIRROR_3','https://books.irust.net/read/mdbook-guide/en-us/index.html']
];
const records=await Promise.all(urls.map(async([name,url])=>{
 try {const response=await fetch(url,{signal:AbortSignal.timeout(25000)});const data=Buffer.from(await response.arrayBuffer());const file=dir+'/'+name+'.html';fs.writeFileSync(file,data,{flag:'wx'});return {url,finalUrl:response.url,httpStatus:response.status,file,bytes:data.length,sha256:createHash('sha256').update(data).digest('hex')};}
 catch(error){return {url,status:'unavailable',reason:error.message};}
}));
fs.writeFileSync(dir+'/RESEARCH_FETCH.json',JSON.stringify({at:new Date().toISOString(),records},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(records.map(x=>({url:x.url,httpStatus:x.httpStatus,status:x.status}))));
