import fs from 'node:fs';import assert from 'node:assert/strict';
import {importUthash} from '/private/tmp/libx-official-uthash-20261002/scripts/importers/import-uthash-2.4.0.mjs';
import {describePath} from '/private/tmp/libx-official-uthash-20261002/scripts/importers/safe-import-output.js';
const root='/private/tmp/libx-official-uthash-20261002',base=root+'/docs/notes/document-import/uthash/v2-4-0',
  options={root,asciidoc:'/private/tmp/libx-uthash-trial-175-venv/bin/asciidoc',pandoc:'/private/tmp/libx-pandoc-official-176/pandoc-3.8.3-arm64/bin/pandoc'};
const snapshot=()=>describePath(base+'/generated'),before=snapshot();
const first=importUthash(options);assert.deepEqual(snapshot(),before);
const second=importUthash(options);assert.deepEqual(snapshot(),before);
const checked=importUthash({...options,check:true});assert.ok(checked.matches);assert.deepEqual(snapshot(),before);
const failures=[];
const input=base+'/source/doc/utstack.txt',original=fs.readFileSync(input);
try {fs.appendFileSync(input,'\nfixed-input-failure-probe\n');assert.throws(()=>importUthash(options),/fixed input changed/);assert.deepEqual(snapshot(),before);failures.push({name:'changed fixed input rejects before replacement',preserved:true});}
finally{fs.writeFileSync(input,original);}
assert.throws(()=>importUthash({...options,pandoc:'/private/tmp/nonexistent-libx-uthash-pandoc'}),/ENOENT/);assert.deepEqual(snapshot(),before);
failures.push({name:'missing conversion executable',preserved:true});
assert.throws(()=>importUthash({...options,commitOptions:{beforeCommit(){throw Error('forced commit failure');}}}),/forced commit failure/);
assert.deepEqual(snapshot(),before);failures.push({name:'commit exception after backup restores previous complete output',preserved:true});
assert.ok(importUthash({...options,check:true}).matches);
const result={schemaVersion:1,checkedAt:new Date().toISOString(),status:'passed',regeneration:{first,second,readOnlyCheck:checked,allFilesIdentical:true,inventory:before},failures,
  limitations:['Machine preservation/regeneration only; full AI content review and app integration remain pending.']};
fs.writeFileSync('/private/tmp/libx-uthash-regeneration-186.json',JSON.stringify(result,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({status:'passed',outputFiles:before.files?.length??before.length,failures}));
