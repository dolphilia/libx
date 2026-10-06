import fs from 'node:fs';import {execFileSync} from 'node:child_process';import assert from 'node:assert/strict';import {api} from './github-api.mjs';
const ev=new URL('.',import.meta.url),branch='codex/import-yyjson-20261006',sha=execFileSync('git',['rev-parse','HEAD'],{cwd:'/private/tmp/libx-yyjson-formal-874',encoding:'utf8'}).trim();
const command=process.argv[2];
if(['preview','production'].includes(command)){
 const body={ref:branch,inputs:{deploy_target:command,preview_branch:'yyjson-20261006',...(command==='production'?{expected_production_commit:'0c2121e7cd2edbbed0b231e803d8122b7e40ad5a'}:{})}};
 const r=await api('/actions/workflows/cloudflare-pages-deploy.yml/dispatches',body);fs.writeFileSync(new URL('DISPATCH_'+command.toUpperCase()+'.json',ev),JSON.stringify({at:new Date().toISOString(),sha,body,result:r},null,2)+'\n',{flag:'wx'});console.log(JSON.stringify(r));
}else{
 const raw=await api('/actions/runs?branch='+encodeURIComponent(branch)+'&per_page=6'),runs=[];
 for(const x of raw.workflow_runs.filter(r=>r.head_sha===sha)){assert.equal(x.head_sha,sha);const jobs=await api('/actions/runs/'+x.id+'/jobs?per_page=100');runs.push({id:x.id,sha:x.head_sha,status:x.status,conclusion:x.conclusion,url:x.html_url,attempt:x.run_attempt,jobs:jobs.jobs.map(j=>({id:j.id,name:j.name,status:j.status,conclusion:j.conclusion,steps:j.steps.map(s=>({name:s.name,status:s.status,conclusion:s.conclusion}))}))});}
 fs.writeFileSync(new URL('CI_STATUS.json',ev),JSON.stringify({at:new Date().toISOString(),runs},null,2)+'\n');console.log(JSON.stringify(runs.map(x=>({id:x.id,status:x.status,conclusion:x.conclusion,jobs:x.jobs.map(j=>({name:j.name,status:j.status,conclusion:j.conclusion,current:j.steps.find(s=>s.status==='in_progress')?.name}))}))));
}
