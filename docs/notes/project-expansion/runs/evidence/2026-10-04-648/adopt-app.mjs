import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';
import { hashFile, sha256 } from '../../../../../../scripts/project-expansion/ledger.mjs';
const root=process.cwd(),workspace='/private/tmp/libx-jq-footer-integration-20261004',dir='docs/notes/project-expansion/runs/evidence/2026-10-04-648';
assert.equal(fs.existsSync('apps/jq'),false,'既存root jqを置換しません');
const frozen=JSON.parse(fs.readFileSync('docs/notes/project-expansion/runs/evidence/2026-10-04-647/CANDIDATE_INPUTS.json'));
for(const r of frozen.paths)assert.equal(hashFile(path.join(workspace,r.path)),r.sha256);
const dirty=execFileSync('git',['status','--porcelain=v1','-z','--untracked-files=all'],{encoding:'utf8',maxBuffer:128*1024*1024}).split('\0').filter(Boolean);
assert.ok(dirty.every(s=>!s.startsWith('R ')&&!s.startsWith('C ')),'rename inventory needs explicit handling');
const protectedFiles=dirty.map(s=>s.slice(3)).filter(p=>fs.existsSync(p)&&fs.statSync(p).isFile()).map(p=>({path:p,sha256:hashFile(p)}));
const files=frozen.paths.filter(r=>r.path.startsWith('apps/jq/'));assert.equal(files.length,60);
for(const r of files){fs.mkdirSync(path.dirname(r.path),{recursive:true});fs.copyFileSync(path.join(workspace,r.path),r.path);assert.equal(hashFile(r.path),r.sha256);}
for(const r of protectedFiles)assert.equal(hashFile(r.path),r.sha256,`保護ファイル変更: ${r.path}`);
fs.writeFileSync(`${dir}/ROOT_ADOPTION.json`,JSON.stringify({status:'passed',files:60,protectedFileCount:protectedFiles.length,protectedFiles,adopted:files,rootSharedFilesChanged:false,rootDependenciesInstalled:false,rootBuildPerformed:false},null,2)+'\n');
console.log(`jq 60ファイル限定導入・既存${protectedFiles.length}ファイル保護一致`);
