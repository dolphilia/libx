import fs from 'node:fs';import assert from 'node:assert/strict';
import{importUthash}from'/private/tmp/libx-official-uthash-20261002/scripts/importers/import-uthash-2.4.0.mjs';
import{describePath}from'/private/tmp/libx-official-uthash-20261002/scripts/importers/safe-import-output.js';
const root='/private/tmp/libx-official-uthash-20261002',output=root+'/docs/notes/document-import/uthash/v2-4-0/generated',
 options={root,asciidoc:'/private/tmp/libx-uthash-trial-175-venv/bin/asciidoc',pandoc:'/private/tmp/libx-pandoc-official-176/pandoc-3.8.3-arm64/bin/pandoc'},before=describePath(output),backup=output+'-safety-backup-186';
assert.ok(!fs.existsSync(backup));fs.renameSync(output,backup);
try{fs.symlinkSync('/private/tmp/nonexistent-libx-uthash-output-186',output);assert.throws(()=>importUthash(options),/symlink/);}
finally{fs.unlinkSync(output);fs.renameSync(backup,output);}
assert.deepEqual(describePath(output),before);
const fake='/private/tmp/libx-uthash-failing-pandoc-186';
fs.writeFileSync(fake,'#!/bin/sh\nif [ "$1" = "--version" ]; then echo "pandoc 3.8.3"; exit 0; fi\ncat >/dev/null\necho "intentional conversion failure" >&2\nexit 1\n',{mode:0o700,flag:'wx'});
try{assert.throws(()=>importUthash({...options,pandoc:fake}),/intentional conversion failure/);}
finally{fs.unlinkSync(fake);}
assert.deepEqual(describePath(output),before);
assert.ok(importUthash({...options,check:true}).matches);
const result={schemaVersion:1,checkedAt:new Date().toISOString(),status:'passed',checks:[
{name:'dangling output symlink rejected before generated output replacement',status:'passed'},
{name:'conversion tool exits after valid version check, existing output retained',status:'passed'},
{name:'final importer regeneration check',status:'passed'}],inventory:before};
fs.writeFileSync('/private/tmp/libx-uthash-safety-186.json',JSON.stringify(result,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({status:result.status,checks:result.checks}));
