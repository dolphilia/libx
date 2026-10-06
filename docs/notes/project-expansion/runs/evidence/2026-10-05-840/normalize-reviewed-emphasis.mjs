import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {hashFile} from '../../../../../../scripts/project-expansion/ledger.mjs';
const notes='docs/notes/document-import/zstd/v1-5-7',ev='docs/notes/project-expansion/runs/evidence/2026-10-05-840';
const manifest=JSON.parse(fs.readFileSync(notes+'/REVIEW_MANIFEST.json'));
fs.writeFileSync(ev+'/REVIEW_BEFORE.json',JSON.stringify(manifest,null,2)+'\n');
const changes=[];
for(const id of ['04-sequences','06-fse','07-huffman']){
 const relative='01-specification/'+id+'.md';const file=notes+'/drafts/ja/'+relative;
 const before=fs.readFileSync(file,'utf8');const after=before.replace(/__(リトルエンディアン|確率|シンボルの圧縮モード)__/g,'**$1**');
 assert.equal(after.replace(/\*\*(リトルエンディアン|確率|シンボルの圧縮モード)\*\*/g,'__$1__'),before);
 fs.writeFileSync(file,after);
 const reviewed=notes+'/translations/ja/'+relative;const saved=ev+'/before/ja/'+relative;fs.mkdirSync(path.dirname(saved),{recursive:true});fs.copyFileSync(reviewed,saved);
 changes.push({id:relative,before:{path:saved,sha256:hashFile(saved)},changedMarkupOnly:true,termsUnchanged:['リトルエンディアン','確率','シンボルの圧縮モード'],next:'assemble and current review hash rebind after portable checks'});
}
fs.writeFileSync(ev+'/EMPHASIS_CHANGES.json',JSON.stringify({status:'passed',reason:'Observed literal __リトルエンディアン__ in rendered JA Huffman. Convert reviewed Japanese double underscore emphasis to star emphasis without wording changes; previous 5 pages untouched.',changes},null,2)+'\n');
