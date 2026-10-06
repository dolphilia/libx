import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
import {api} from '../2026-10-04-645/github-api.mjs';
const ev=new URL('.',import.meta.url),branch='codex/import-zstd-20261005',sha=execFileSync('git',['rev-parse','HEAD'],{cwd:'/private/tmp/libx-zstd-formal-838',encoding:'utf8'}).trim();
if(process.argv[2]==='dispatch'){
 const body={ref:branch,inputs:{deploy_target:'production',preview_branch:'zstd-20261005',expected_production_commit:'ee69b24fa1126eaeeb4381b3d79fd3663fe6c356'}};
 const r=await api('/actions/workflows/cloudflare-pages-deploy.yml/dispatches',body);fs.writeFileSync(new URL('DISPATCH_PRODUCTION.json',ev),JSON.stringify({at:new Date().toISOString(),sha,body,result:r},null,2)+'\n',{flag:'wx'});console.log(JSON.stringify(r));
}else{
 const raw=await api('/actions/runs?branch='+encodeURIComponent(branch)+'&event=workflow_dispatch&per_page=5'),runs=[];
 for(const x of raw.workflow_runs){assert.equal(x.head_sha,sha);const jobs=await api('/actions/runs/'+x.id+'/jobs?per_page=100');runs.push({id:x.id,sha:x.head_sha,status:x.status,conclusion:x.conclusion,url:x.html_url,attempt:x.run_attempt,jobs:jobs.jobs.map(j=>({id:j.id,name:j.name,status:j.status,conclusion:j.conclusion,steps:j.steps.map(s=>({name:s.name,status:s.status,conclusion:s.conclusion}))}))});}
 fs.writeFileSync(new URL('CI_STATUS.json',ev),JSON.stringify({at:new Date().toISOString(),runs},null,2)+'\n');console.log(JSON.stringify(runs));
}
