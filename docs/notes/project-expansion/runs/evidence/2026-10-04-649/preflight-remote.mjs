import fs from 'node:fs';import assert from 'node:assert/strict';import {api} from '../2026-10-04-645/github-api.mjs';
const dir='docs/notes/project-expansion/runs/evidence/2026-10-04-649';
const response=await api('/actions/workflows/cloudflare-pages-deploy.yml/runs?per_page=30');
const runs=response.workflow_runs.map(r=>({id:r.id,sha:r.head_sha,status:r.status,conclusion:r.conclusion,branch:r.head_branch,event:r.event,url:r.html_url}));
const main=await api('/git/ref/heads/main');
fs.writeFileSync(`${dir}/REMOTE_PREFLIGHT_${Date.now()}.json`,JSON.stringify({at:new Date().toISOString(),main:main.object.sha,runs},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({main:main.object.sha,runs:runs.slice(0,8)}));
assert.equal(runs[0].id,37191406058,'新しい公開関連runを精査してください');
