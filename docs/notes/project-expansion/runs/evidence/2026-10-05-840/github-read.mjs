import fs from 'node:fs';
import {api} from '../2026-10-04-645/github-api.mjs';
const latest=await api('/actions/workflows/cloudflare-pages-deploy.yml/runs?event=workflow_dispatch&per_page=4');
const rows=latest.workflow_runs.map(r=>({id:r.id,sha:r.head_sha,status:r.status,conclusion:r.conclusion,branch:r.head_branch,url:r.html_url}));
fs.writeFileSync(new URL('REMOTE_RUNS_BEFORE.json',import.meta.url),JSON.stringify({at:new Date().toISOString(),runs:rows},null,2)+'\n');
console.log(JSON.stringify(rows));
