import fs from 'node:fs';
import assert from 'node:assert/strict';
import {api} from './github-api.mjs';
const directory=new URL('./',import.meta.url);
const sha='1ba9b5a5be5b38b559e535843d66c65fda87ca41';
const branch='codex/integrate-footer-production-20261004';
const intentFile=new URL('PRODUCTION_DISPATCH_INTENT.json',directory);
assert.equal((await api('/git/ref/heads/'+branch)).object.sha,sha);
if(process.argv.includes('--dispatch')){
 assert(!fs.existsSync(intentFile),'Existing intent: observe it rather than repeat dispatch');
 const before=await api('/actions/workflows/cloudflare-pages-deploy.yml/runs?branch='+encodeURIComponent(branch)+'&per_page=10');
 const inputs={deploy_target:'production',preview_branch:'codex-footer-20261004',expected_production_commit:'5961d7b32447ca14c681c9201c031c45251e8052'};
 const intent={at:new Date().toISOString(),sha,branch,inputs,beforeRunIds:before.workflow_runs.map(run=>run.id),authorization:'2026-10-04 user explicitly requested publication of verified footer maintenance, then continuous-plan resumption.'};
 fs.writeFileSync(intentFile,JSON.stringify(intent,null,2)+'\n',{flag:'wx'});
 const result=await api('/actions/workflows/cloudflare-pages-deploy.yml/dispatches',{ref:branch,inputs});
 fs.writeFileSync(new URL('PRODUCTION_DISPATCH_RESPONSE.json',directory),JSON.stringify({at:new Date().toISOString(),...result},null,2)+'\n',{flag:'wx'});
 console.log('Dispatch HTTP '+result.status);
}
const intent=JSON.parse(fs.readFileSync(intentFile));
const response=await api('/actions/workflows/cloudflare-pages-deploy.yml/runs?branch='+encodeURIComponent(branch)+'&per_page=10');
const results=[];
for(const run of response.workflow_runs.filter(run=>run.head_sha===sha&&!intent.beforeRunIds.includes(run.id)&&Date.parse(run.created_at)>=Date.parse(intent.at)-5000)){
 const jobs=await api('/actions/runs/'+run.id+'/jobs');
 results.push({id:run.id,sha:run.head_sha,status:run.status,conclusion:run.conclusion,url:run.html_url,jobs:jobs.jobs.map(job=>({name:job.name,status:job.status,conclusion:job.conclusion,steps:job.steps.map(step=>({name:step.name,status:step.status,conclusion:step.conclusion}))}))});
}
const output={at:new Date().toISOString(),sha,branch,runs:results};
fs.writeFileSync(new URL('CI_'+Date.now()+'.json',directory),JSON.stringify(output,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(output));
