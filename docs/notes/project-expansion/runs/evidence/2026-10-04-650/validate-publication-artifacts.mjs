import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import crypto from 'node:crypto';
const ev='docs/notes/project-expansion/runs/evidence/2026-10-04-650',base='/private/tmp/jq-ci-artifacts-650',sha='6e0dbef265ff6ebadf58a7437564a7d07ffeb296',previous='84f9815bcdcc2f6ab62836de624ce6b1c33b51e3',run=37202125558;
const save=(name,value)=>fs.writeFileSync(`${ev}/${name}`,JSON.stringify(value,null,2)+'\n',{flag:'wx'});
const ciDir='docs/notes/project-expansion/runs/evidence/2026-10-04-649';const latest=fs.readdirSync(ciDir).filter(p=>/^CI_\d+\.json$/.test(p)).sort().at(-1);const ci=JSON.parse(fs.readFileSync(`${ciDir}/${latest}`)).runs.find(r=>r.id===run);
assert.equal(ci.sha,sha);assert.equal(ci.status,'completed');assert.equal(ci.conclusion,'success');
for(const name of ['quality-check','deploy-production'])assert.equal(ci.jobs.find(j=>j.name===name)?.conclusion,'success',name);
const states=path.join(base,`pages-production-state-${run}-1`);const before=JSON.parse(fs.readFileSync(path.join(states,'before.json'))),prepublish=JSON.parse(fs.readFileSync(path.join(states,'prepublish.json'))),after=JSON.parse(fs.readFileSync(path.join(states,'after.json')));
const rollback=JSON.parse(fs.readFileSync(path.join(base,`pages-production-before-${run}-1`,'before.json')));
for(const s of [before,prepublish,after,rollback]){assert.equal(s.project,'libx');assert.equal(s.productionBranch,'main');assert(s.domains.includes('libx.dev'));assert.match(s.deployment.url,/^https:\/\/[a-f0-9]+\.libx\.pages\.dev$/);}
assert.deepEqual(before,rollback);assert.equal(before.deployment.commit,previous);assert.deepEqual(prepublish.deployment,before.deployment);assert.equal(after.deployment.commit,sha);assert.notEqual(after.deployment.id,before.deployment.id);
const artifact=path.join(base,`verified-deployment-${sha}-1`);const manifest=JSON.parse(fs.readFileSync(path.join(artifact,'manifest.json')));assert.equal(manifest.commit,sha);assert.equal(manifest.files.length,3152);
const walk=(dir)=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>{const p=path.join(dir,e.name);assert(!e.isSymbolicLink());return e.isDirectory()?walk(p):[p]});
const actual=walk(path.join(artifact,'dist')).map(p=>path.relative(path.join(artifact,'dist'),p));assert.deepEqual(actual.sort(),manifest.files.map(r=>r.path).sort());
for(const r of manifest.files){assert(!path.isAbsolute(r.path)&&!r.path.split('/').includes('..'));const b=fs.readFileSync(path.join(artifact,'dist',r.path));assert.equal(b.length,r.bytes,r.path);assert.equal(crypto.createHash('sha256').update(b).digest('hex'),r.sha256,r.path);}
for(const [name,s] of [['PRODUCTION_BEFORE.json',before],['PRODUCTION_PREPUBLISH.json',prepublish],['PRODUCTION_AFTER.json',after],['CI_MANIFEST.json',manifest]])save(name,s);
save('ARTIFACT_VALIDATION.json',{at:new Date().toISOString(),status:'passed',workflowRun:run,workflowURL:ci.url,commit:sha,files:3152,allManifestFilesExact:true,noAdditionalDistFiles:true,rollbackSavedBeforePublication:true,baselineUnchangedAtPrepublish:true,previousDeployment:before.deployment,publishedDeployment:after.deployment,ciObservation:`${ciDir}/${latest}`,publicHTTPVerified:false,nativeDisplayVerified:false});
console.log('同run CI成功・CAS・公開commit・3152成果物ファイル全SHA一致。HTTP/実画面は別工程。');
