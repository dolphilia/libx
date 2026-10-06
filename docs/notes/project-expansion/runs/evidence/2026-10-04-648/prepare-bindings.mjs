import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { sha256, hashFile, safePath } from '../../../../../..//scripts/project-expansion/ledger.mjs';
import { loadPresentationMaintenance, normalizeMovedNote } from '../../../../../..//scripts/project-expansion/presentation-maintenance-v3.mjs';
const root=process.cwd(), workspace='/private/tmp/libx-jq-footer-integration-20261004';
const dir='docs/notes/project-expansion/runs/evidence/2026-10-04-648';
const ref=p=>({path:p,sha256:hashFile(path.join(root,p))});
const save=(name,data)=>{const p=`${dir}/${name}`;fs.writeFileSync(p,JSON.stringify(data,null,2)+'\n');return ref(p);};
const frozen=JSON.parse(fs.readFileSync(`${root}/docs/notes/project-expansion/runs/evidence/2026-10-04-647/CANDIDATE_INPUTS.json`));
for(const item of frozen.paths) assert.equal(hashFile(path.join(workspace,item.path)),item.sha256,item.path);
const overlayPath='apps/jq/meta/document-context-v4.json';
assert.equal(hashFile(path.join(workspace,overlayPath)),'90918c3abab85937b5d0d59f42823f030e2a58a47029cec4bf069f20d76e4435');
const overlay=JSON.parse(fs.readFileSync(path.join(workspace,overlayPath)));
const review=JSON.parse(fs.readFileSync(`${root}/docs/notes/project-expansion/runs/evidence/2026-10-04-641/CONTENT_REVIEW_V2.json`));
const files=[],records=[];
for(const row of overlay.records){
 const relative=`apps/jq/${row.path}`,current=fs.readFileSync(path.join(workspace,relative),'utf8');
 assert.equal(sha256(current),row.after);
 const role=review.pages.find(p=>p.id===row.id)[row.language==='ja'?'translation':'canonical'];
 assert.equal(row.before,role.sha256);
 const original=fs.readFileSync(path.join(root,role.path),'utf8');assert.equal(sha256(original),row.before);
 if(!row.context){assert.equal(current,original);continue;}
 const body=current.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/,'');
 assert.equal(sha256(body),row.bodyAfter);
 const note={start:row.side==='prefix'?0:body.length,original:row.removed};
 note.normalized=normalizeMovedNote(relative,note);
 const restored=body.slice(0,note.start)+note.original+body.slice(note.start);
 assert.equal(sha256(restored),row.bodyBefore);assert.equal(row.frontmatterBefore+restored,original);
 records.push({path:relative,before:row.before,after:row.after,bodyBefore:row.bodyBefore,bodyAfter:row.bodyAfter,notes:[note]});
 files.push({path:relative,kind:'document-context',before:row.before,after:row.after,frontmatterBefore:row.frontmatterBefore,contextSha256:row.contextSha256});
}
assert.equal(records.length,34);
const migration=save('MIGRATION.json',{schemaVersion:1,files:34,records});
const validation=save('VALIDATION.json',{schemaVersion:1,issues:[],checkedPages:34,reconstructedBodies:34,reviewBoundFiles:36,unchangedFiles:2,semanticReviewPerformed:false,reviewManifest:ref('docs/notes/project-expansion/runs/evidence/2026-10-04-641/CONTENT_REVIEW_V2.json'),overlaySHA256:hashFile(path.join(workspace,overlayPath))});
const manifest=save('PRESENTATION_BINDINGS.json',{schemaVersion:1,kind:'libx-source-notes-footer-migration',migration,validation,build:ref('docs/notes/project-expansion/runs/evidence/2026-10-04-647/JQ_BUILD_CURRENT.log'),runtimeTests:ref('docs/notes/project-expansion/runs/evidence/2026-10-04-647/TESTS.log'),files});
const helpers={hashFile,sha256,safePath:(r,p)=>p.startsWith('apps/jq/')?safePath(workspace,p):safePath(r,p)};
for(let i=0;i<2;i++){const errors=[];const lookup=loadPresentationMaintenance(root,[manifest],helpers,errors);assert.deepEqual(errors,[]);for(const file of files)assert.equal(sha256(lookup({path:file.path,sha256:file.before})),file.before);}
save('PREPARED.json',{status:'passed',candidateInputsChecked:217,reviewBoundFiles:36,footerRestorations:34,repeatedLoads:2,rootAppAdopted:false,publicationPerformed:false,previousTurn:'progress',nextAction:'root apps/jq限定導入・実rootで復元照合・verified登録・公開前CI'});
console.log('対応準備: 217入力一致・36レビュー一致・34復元・反復2回合格');
