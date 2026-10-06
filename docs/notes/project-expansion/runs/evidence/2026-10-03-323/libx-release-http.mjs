import fs from 'node:fs';
import {createHash} from 'node:crypto';
const [directory,origin,output]=process.argv.slice(2);
const manifest=JSON.parse(fs.readFileSync(`${directory}/manifest.json`,'utf8'));const expectedOrigin=new URL(origin).origin;
const hash=b=>createHash('sha256').update(b).digest('hex');
const records=[];let next=0;const started=Date.now();
await Promise.all(Array.from({length:12},async()=>{
 while(next<manifest.files.length){const file=manifest.files[next++];let result;
  for(let attempt=0;attempt<3;attempt++){
   try{
    let relative=file.path.endsWith('index.html')?file.path.slice(0,-10):file.path;let url=new URL('/'+relative,origin);let res;
    for(let hop=0;hop<5;hop++){
     res=await fetch(url,{redirect:'manual',signal:AbortSignal.timeout(30000)});
     if([301,302,307,308].includes(res.status)){const target=new URL(res.headers.get('location'),url);if(target.origin!==expectedOrigin)throw Error('Unexpected external redirect');await res.body?.cancel();url=target;continue;}break;
    }
    const bytes=Buffer.from(await res.arrayBuffer());const digest=hash(bytes);
    result={path:file.path,status:res.status,bytes:bytes.length,sha256:digest,ok:digest===file.sha256&&bytes.length===file.bytes&&(res.status===200||file.path.endsWith('404.html')&&res.status===404)};
    if(result.ok||res.status<500)break;
   }catch(e){result={path:file.path,ok:false,error:e.message};}
   if(attempt<2)await new Promise(resolve=>setTimeout(resolve,1000));
  }
  records.push(result);if(records.length%250===0)console.log(JSON.stringify({verified:records.filter(x=>x.ok).length,checked:records.length,total:manifest.files.length}));
 }
}));
records.sort((a,b)=>a.path.localeCompare(b.path));const failures=records.filter(x=>!x.ok);const result={status:failures.length?'failed':'passed',checkedAt:new Date().toISOString(),scope:'All files in the CI verified deployment artifact compared byte-for-byte to fixed Pages deployment URL',origin,commit:manifest.commit,totalFiles:manifest.files.length,verifiedFiles:records.length-failures.length,seconds:(Date.now()-started)/1000,failures,records};fs.writeFileSync(output,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({...result,records:undefined,failures:failures.slice(0,10)}));if(failures.length)process.exitCode=1;
