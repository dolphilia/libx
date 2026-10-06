import fs from 'node:fs';
import assert from 'node:assert/strict';
import {hashFile,readLedger,updateLedger} from '../../../../../../scripts/project-expansion/ledger.mjs';
const base='docs/notes/project-expansion',notes='docs/notes/document-import/zstd/v1-5-7',ev=`${base}/runs/evidence/2026-10-05-840`;
const ref=p=>({path:p,sha256:hashFile(p)});
const write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const manifest=JSON.parse(fs.readFileSync(`${ev}/REVIEW_BEFORE.json`));
const diff=JSON.parse(fs.readFileSync(`${ev}/EMPHASIS_CHANGES.json`));
for(const change of diff.changes){
 const page=manifest.pages.find(p=>p.id===change.id);assert.equal(change.before.sha256,page.translation.sha256);
 const before=fs.readFileSync(change.before.path,'utf8'),after=fs.readFileSync(page.translation.path,'utf8');
 assert.equal(after,before.replace(/__(リトルエンディアン|確率|シンボルの圧縮モード)__/g,'**$1**'));
 page.translation.sha256=hashFile(page.translation.path);
 page.formatUpdates=[{at:new Date().toISOString(),before:change.before,after:ref(page.translation.path),method:'exact whole-file markup-only replacement; prior full-content review reused',scope:'Japanese double underscore emphasis becomes star emphasis; every other byte identical'}];
 page.passDescription+=' 840で日本語太字記法だけを置換し、全ファイルが指定置換以外byte同一と確認。839の全文意味レビューを再利用。';
}
for(const page of manifest.pages)for(const record of [page.source,page.canonical,page.translation])assert.equal(hashFile(record.path),record.sha256);
write(`${notes}/REVIEW_MANIFEST.json`,manifest);
const map=JSON.parse(fs.readFileSync(`${notes}/CONTENT_MAP.json`));for(const p of map.pages)p.translation=ref(p.translation.path);write(`${notes}/CONTENT_MAP.json`,map);
const progress=JSON.parse(fs.readFileSync(`${notes}/PROGRESS.json`));progress.nextAction='専用840:可搬check:content/check:rendered・正式統合/差分限定release検証から続行。全9意味reviewを再利用（3JAは840書式だけ置換）。全公開条件後に対象push→統合Cloudflare Pages→公開後確認。';write(`${notes}/PROGRESS.json`,progress);
const ledger=readLedger(process.cwd());updateLedger(process.cwd(),base,'OPERATIONS',ledger.operations.revision,[ref(`${base}/OPERATIONS.json`),ref(`${notes}/REVIEW_MANIFEST.json`),ref(`${ev}/EMPHASIS_CHANGES.json`)],d=>{
 const op=d.operations.find(o=>o.appId==='zstd');op.reviewManifest=ref(`${notes}/REVIEW_MANIFEST.json`);
 const changes=[ref(`${notes}/CONTENT_MAP.json`),ref(`${notes}/PROGRESS.json`),ref(`${ev}/EMPHASIS_CHANGES.json`),ref(`${ev}/REVIEW_BEFORE.json`)];op.artifacts=op.artifacts.filter(r=>!changes.some(x=>x.path===r.path)).concat(changes);op.nextAction=progress.nextAction;return d;
});
console.log('9 reviews valid; 3 JA markup-only replacements byte verified; full review evidence reused');
