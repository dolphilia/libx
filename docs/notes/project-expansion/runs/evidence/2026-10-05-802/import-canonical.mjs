import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { prepareImportBatch } from '../../../../../../scripts/importers/batch-import-output.js';
import { assertSafeImportTarget, hashFile } from '../../../../../../scripts/importers/safe-import-output.js';

const ev = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(ev, '../../../../../..');
const work = '/private/tmp/libx-lz4-formal-786';
const check = process.argv.includes('--check');
assert(!fs.existsSync(root+'/apps/lz4'), 'unfinished app must stay outside shared deployment');
const target = work+'/apps/lz4/src/content/docs/v1-10-0/en';
assertSafeImportTarget(target, work+'/apps/lz4/src/content/docs', 'en');
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'lz4-canonical-802-'));
try {
  execFileSync('python3', [ev+'/generate-canonical.py', '--root', root, '--stage', temp], {stdio:'inherit'});
  const map = JSON.parse(fs.readFileSync(temp+'/CANONICAL_MAP.json'));
  assert.equal(map.pages.length, 27);
  for (const p of map.pages) {
    const rel = path.relative('apps/lz4/src/content/docs/v1-10-0/en', p.canonicalPath);
    assert(!rel.startsWith('..') && !path.isAbsolute(rel));
    assert.equal(hashFile(temp+'/en/'+rel), p.canonicalSha256);
    assert.equal(hashFile(temp+'/source/originals/'+p.path+'.txt'), p.sourceSha256);
  }
  const result = await prepareImportBatch({
    stagingRoot: work+'/.tmp/document-import/lz4/02-extracted', check,
    outputs: [
      {targetPath:target, kind:'directory', generate: async p=>fs.cpSync(temp+'/en',p,{recursive:true})},
      {targetPath:work+'/apps/lz4/public/source/v1-10-0', kind:'directory', generate:async p=>fs.cpSync(temp+'/source',p,{recursive:true})},
      {targetPath:ev+'/CANONICAL_MAP.json',kind:'file',generate:async p=>fs.copyFileSync(temp+'/CANONICAL_MAP.json',p)}
    ]
  });
  console.log(JSON.stringify({mode:check?'read-only replay':'atomic isolated import',result},null,2));
  if(check && result.some(x=>!x.matches)) process.exitCode=1;
} finally { fs.rmSync(temp,{recursive:true,force:true}); }
