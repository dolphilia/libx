import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {parse} from '/private/tmp/libx-css-regression-20261003-329/node_modules/parse5/dist/index.js';
const root='/Users/dolphilia/github/libx',ev=root+'/docs/notes/project-expansion/runs/evidence/2026-10-03-334',src=root+'/docs/notes/project-expansion/runs/evidence/2026-10-03-327/source/zlib-1.3.2',clone='/private/tmp/libx-css-regression-20261003-329';
const hash=b=>createHash('sha256').update(b).digest('hex');
const expected=JSON.parse(fs.readFileSync(ev+'/EXPECTED_BLOCKS.json'));
const visit=(n,fn)=>{fn(n);for(const c of n.childNodes??[])visit(c,fn);};
const text=n=>n.nodeName==='button' && n.attrs?.some(a=>a.name==='class'&&a.value==='docs-code-copy')?'':n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
const result=[];
for (const [name,blocks] of Object.entries(expected)){
 const file=clone+'/apps/cjson/dist/v1-7-19/en/99-zlib-trial/'+name+'/index.html',raw=fs.readFileSync(file),document=parse(raw.toString()); const rendered=[];let attrs=[];
 visit(document,n=>{if(n.attrs?.some(a=>a.name==='data-zlib-block')){rendered.push(text(n));attrs.push(n.attrs.find(a=>a.name==='data-zlib-block').value);}});
 const mismatches=blocks.flatMap((s,i)=>s===rendered[i]?[]:[{index:i,expectedLength:s.length,actualLength:rendered[i]?.length,expectedStart:s.slice(0,100),actualStart:rendered[i]?.slice(0,100)}]);
 result.push({name,file,sha256:hash(raw),expectedBlocks:blocks.length,actualBlocks:rendered.length,mismatches,allEqual:JSON.stringify(blocks)===JSON.stringify(rendered)});
}
fs.writeFileSync(ev+'/ASTRO_BLOCK_CHECK_V2.json',JSON.stringify({status:result.every(r=>r.allEqual)?'passed':'failed',scope:'six entire source display block texts after actual Astro build',results:result},null,2)+'\n',{flag:'wx'});
assert(result.every(r=>r.allEqual));
// Independent header lexical declaration inventory: exclude comments, strings
// and whole logical preprocessor lines; preserve positions and every branch.
function mask(s){let out=s.split(''),i=0;const blank=(a,b)=>{for(let j=a;j<b;j++)if(out[j]!=='\n')out[j]=' ';};while(i<s.length){let start=i;if(s.slice(i,i+2)==='/*'){i=s.indexOf('*/',i+2);assert(i>=0);i+=2;blank(start,i);}else if(s.slice(i,i+2)==='//'){i=s.indexOf('\n',i);if(i<0)i=s.length;blank(start,i);}else if(s[i]==='"'||s[i]==="'"){const q=s[i++];while(i<s.length){if(s[i]==='\\')i+=2;else if(s[i++]===q)break;}blank(start,i);}else i++;}let m=out.join('');return m.replace(/^\s*#[^\n]*(?:\\\n[^\n]*)*/gm,v=>v.replace(/[^\n]/g,' '));}
const inventories=[];
for(const name of ['zlib.h','zconf.h']){const s=fs.readFileSync(src+'/'+name,'utf8'),clean=mask(s),declarations=[];for(const m of clean.matchAll(/^\s*ZEXTERN\b[^;]*;/gm)){const symbol=m[0].match(/\bZEXPORT(?:VA)?\s+(\w+)\s*\(/);assert(symbol);const start=m.index+m[0].indexOf('ZEXTERN');declarations.push({symbol:symbol[1],line:s.slice(0,start).split('\n').length,declaration:s.slice(start,m.index+m[0].length)});}inventories.push({file:name,sourceSha256:hash(s),declarationOccurrences:declarations.length,uniqueSymbols:[...new Set(declarations.map(d=>d.symbol))],declarations});}
assert.equal(inventories[1].declarationOccurrences,0);
fs.writeFileSync(ev+'/API_DECLARATION_INVENTORY.json',JSON.stringify({status:'measured',method:'C lexical scanner masks comments/strings/preprocessor logical lines, anchored ZEXTERN function declarations, no preprocessing or software execution',inventories,limitations:['All conditional declaration branches retained. Unique symbols includes undocumented, support and compatibility declarations; not a count of fully documented APIs.','Public initialization/function macros, typedefs, constants and structural field explanations are preserved in trial but not counted as exported function symbols. Manual category audit remains pending.']},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({astro:result.map(r=>({name:r.name,blocks:r.actualBlocks,equal:r.allEqual})),declarations:inventories.map(i=>({file:i.file,occurrences:i.declarationOccurrences,unique:i.uniqueSymbols.length}))}));
