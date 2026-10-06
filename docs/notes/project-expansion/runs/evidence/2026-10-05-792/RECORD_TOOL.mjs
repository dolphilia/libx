// Save an already reviewed and mechanically checked page. This script does not
// perform translation, semantic review, or invent pass decisions.
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
import {readLedger,hashFile,updateLedger,validateLedger} from '../../../../../scripts/project-expansion/ledger.mjs';
const root=process.cwd(),base='docs/notes/project-expansion',notes='docs/notes/document-import/lz4/v1-10-0';
const configPath=process.argv[2];if(!configPath)throw Error('cycle config required');
const cfg=JSON.parse(fs.readFileSync(configPath)),ev=path.dirname(configPath),ref=p=>({path:p,sha256:hashFile(root+'/'+p)});
const l=readLedger(root);assert.equal(l.operations.revision,cfg.expectedRevision);assert.deepEqual(validateLedger(root,l),[]);
const id=JSON.parse(fs.readFileSync(notes+'/OPERATION_BINDING.json')).operationId;
const o=l.operations.operations.find(o=>o.id===id);assert(o&&o.state==='translating'&&o.excludedFromDeployment);assert(!fs.existsSync(root+'/apps/lz4'));
const r=JSON.parse(fs.readFileSync(cfg.review));assert.equal(r.status,'passed');assert.equal(r.method,'ai-content-review');assert(r.separateReviewPass);
for(const role of ['source','canonical','translation'])assert.equal(hashFile(root+'/'+r[role].path),r[role].sha256);
const machine=JSON.parse(fs.readFileSync(cfg.machine));assert.equal(machine.status,'passed');assert.deepEqual(machine.errors,[]);assert.equal(machine.translationSha256,r.translation.sha256);
assert(fs.readFileSync(ev+'/BUILD.log','utf8').includes('[build] Complete!'));
assert.equal(hashFile(o.workspace+'/apps/lz4/src/content/docs/v1-10-0/ja/'+r.id),r.translation.sha256);
const lock=JSON.parse(fs.readFileSync(notes+'/CANONICAL_LOCK.json'));for(const p of lock.pages)assert.equal(hashFile(lock.workspace+'/'+p.canonicalPath),p.canonicalSha256);
const source=JSON.parse(fs.readFileSync(notes+'/CONTENT_MAP.json')).pages.find(p=>p.canonicalPath==='apps/lz4/src/content/docs/v1-10-0/en/'+r.id)?.sourcePath;assert(source);
const m=JSON.parse(fs.readFileSync(notes+'/REVIEW_MANIFEST.json')),index=m.pages.findIndex(p=>p.id===r.id);assert(index>=0);assert.equal(m.pages[index].status,'pending');
m.pages[index]={...r,evidence:ref(cfg.review)};m.completedPages=m.pages.filter(p=>p.status==='passed').length;m.unreviewedPages=m.pages.length-m.completedPages;m.updatedAt=new Date().toISOString();
const revision=notes+'/reviews/revisions/'+cfg.cycle+'/REVIEW_MANIFEST.json';assert(!fs.existsSync(revision));fs.mkdirSync(path.dirname(revision),{recursive:true});
for(const p of [notes+'/REVIEW_MANIFEST.json',revision])fs.writeFileSync(p,JSON.stringify(m,null,2)+'\n');
const progress=JSON.parse(fs.readFileSync(notes+'/PROGRESS.json'));progress.at=new Date().toISOString();const p=progress.pages.find(p=>p.source===source);assert(p);p.translation='reviewed';p.contentReview='passed';p.translationSnapshot=ref(r.translation.path);p.contentReviewEvidence=ref(cfg.review);p.machineChecks='page token/DOM checks passed; final project gates pending';fs.writeFileSync(notes+'/PROGRESS.json',JSON.stringify(progress,null,2)+'\n');
fs.copyFileSync(notes+'/record-page-cycle.mjs',ev+'/RECORD_TOOL.mjs');
const proofs=[cfg.review,cfg.machine,ev+'/BUILD.log',r.translation.path,...cfg.extraProofs,configPath,ev+'/RECORD_TOOL.mjs',revision];
updateLedger(root,base,'OPERATIONS',cfg.expectedRevision,[ref(base+'/OPERATIONS.json'),ref(ev+'/BASELINE_OPERATIONS.json'),ref(cfg.review),ref(cfg.machine)],d=>{
 const op=d.operations.find(x=>x.id===id);op.artifacts=op.artifacts.map(x=>x.path===notes+'/PROGRESS.json'?ref(x.path):x);op.artifacts.push(...proofs.map(ref));op.reviewManifest=ref(notes+'/REVIEW_MANIFEST.json');op.nextAction=cfg.nextAction;op.resumeCondition=`OPERATIONS${cfg.expectedRevision+1}・定本27SHA・REVIEW_MANIFEST${m.completedPages}合格/${m.unreviewedPages}pending・3roleSHAを照合し${cfg.cycle+1}へ。全finalgates/sourcekit未完・root app absent維持。`;return d;
});
const coverage=Object.fromEntries(['source','canonical','translation'].map(role=>[role,r[role].coverage]));
const run={schemaVersion:1,id:cfg.runId,cycle:cfg.cycle,startedAt:new Date(fs.statSync(ev+'/BASELINE_OPERATIONS.json').birthtimeMs).toISOString(),endedAt:new Date().toISOString(),result:'partial',phase:cfg.phase,model:{configured:'gpt-6.1-sol',configurationEvidence:base+'/POLICY.json',runtime:null,runtimeStatus:'not independently exposed',localLLMUsed:false},tools:['Codex single-page translation','separate full source/canonical/Japanese reading','metadata-only assembler','protected-token/DOM audit','isolated Astro build','CAS ledger'],inputs:[...['BASELINE_OPERATIONS.json','BASELINE_PROGRESS.json','BASELINE_REVIEW_MANIFEST.json'].map(p=>ref(ev+'/'+p)),ref(r.source.path),ref(r.canonical.path)],outputs:proofs.map(ref).concat([ref(notes+'/PROGRESS.json')]),discoveryIds:[],detailIds:[],newOperationIds:[],checks:[{name:'原文/定本/日本語全範囲の別工程AI内容review',status:'passed',evidence:[ref(cfg.review)]},{name:'対象pageの保護token/DOM/footerと隔離build',status:'passed',evidence:[ref(cfg.machine),ref(ev+'/BUILD.log')]},{name:'全27翻訳review・finalgates',status:'pending',evidence:[ref(revision)]}],decisions:cfg.decisions.concat([`日本語/全文review${m.completedPages}/27。機械と意味reviewを分離、外部公開/定期設定なし。`]),coverage,unresolved:[`日本語/全文review${m.unreviewedPages}ページ、全表示/統合/finalgates・GPL対応Libx sourcekit未完`,'外部リンク現在HTTP可用性・画像ロード未確認'],nextAction:cfg.nextAction,resumeCondition:`OPERATIONS${cfg.expectedRevision+1}・SOURCE/CANONICAL/REVIEW SHA照合後${cfg.cycle+1}へ。`};
fs.writeFileSync(base+'/runs/'+cfg.runId+'.json',JSON.stringify(run,null,2)+'\n');assert.deepEqual(validateLedger(root,readLedger(root)),[]);console.log(`OPERATIONS${cfg.expectedRevision+1}; JA/review ${m.completedPages}/27`);
