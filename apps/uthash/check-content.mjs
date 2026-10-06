import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {hashFile} from '../../scripts/importers/safe-import-output.js';
import {checkUthashTranslation} from '../../scripts/importers/check-uthash-translation.mjs';
import {importUthash} from '../../scripts/importers/import-uthash-2.4.0.mjs';
const app=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(app,'../..');
const base=path.join(root,'docs/notes/document-import/uthash/v2-4-0');
const map=JSON.parse(fs.readFileSync(path.join(base,'CONTENT_MAP.json'),'utf8'));
const generated=importUthash({root,asciidoc:process.env.UTHASH_ASCIIDOC,pandoc:process.env.UTHASH_PANDOC,check:true});
assert.ok(generated.matches,'generated canonical differs from fixed source');
let translated=0;
for(const p of map.pages){
 const canonical=path.join(root,p.canonical),staged=path.join(base,'generated/canonical',p.id),en=path.join(app,'src/content/docs/v2-4-0/en',p.id);
 assert.equal(hashFile(canonical),hashFile(staged),'reviewed canonical differs from deterministic output');
 assert.equal(hashFile(en),hashFile(canonical),'app EN differs from reviewed canonical');
 const ja=path.join(app,'src/content/docs/v2-4-0/ja',p.id);
 if(fs.existsSync(ja))translated++;
}
assert.equal(translated,8,'JA translation incomplete; final content verification cannot pass');
const result=await checkUthashTranslation({root});console.log(JSON.stringify(result.checks));
