import fs from 'node:fs';
import {api} from '../2026-10-04-645/github-api.mjs';
const latest=await api('/actions/runs?per_page=6');
const deployment=await api('/deployments?environment=production&per_page=4');
const main=await api('/commits/main');
const rows=latest.workflow_runs.map(r=>({id:r.id,sha:r.head_sha,status:r.status,conclusion:r.conclusion,branch:r.head_branch,event:r.event,url:r.html_url}));
const record={at:new Date().toISOString(),runs:rows,main:main.sha,deployments:deployment.map(d=>({id:d.id,sha:d.sha,ref:d.ref,environment:d.environment,createdAt:d.created_at}))};
fs.writeFileSync(new URL('REMOTE_BASELINE.json',import.meta.url),JSON.stringify(record,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify(record));
