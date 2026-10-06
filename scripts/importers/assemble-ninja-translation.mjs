import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {parseFragment,serialize} from 'parse5';
import {prepareImportBatch} from './batch-import-output.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)];
const a=(n,k)=>n.attrs?.find(v=>v.name===k)?.value;
const text=n=>n.value??(n.childNodes??[]).map(text).join('');
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const norm=s=>s.replace(/\s+/g,' ').trim();
const tags=new Set(['p','h2','h3','h4','h5','h6','dt']);
const isBlock=n=>tags.has(n.tagName)||(n.tagName==='td'&&!n.childNodes?.some(c=>['p','div','pre'].includes(c.tagName)));
function noSymlinks(p,recursive=false){
  for(let n=path.resolve(p);;n=path.dirname(n)){let st;try{st=fs.lstatSync(n);}catch(e){if(e.code!=='ENOENT')throw e;}if(st)assert.ok(!st.isSymbolicLink(),`symlink: ${n}`);if(n===path.dirname(n))break;}
  if(recursive&&fs.existsSync(p)&&fs.lstatSync(p).isDirectory())for(const name of fs.readdirSync(p))noSymlinks(path.join(p,name),true);
}
function inlineMetrics(n){const ns=walk(n);return{links:ns.filter(n=>n.tagName==='a').map(n=>a(n,'href').replace('https://https://www.gnu.org/','https://www.gnu.org/')).sort(),literals:ns.filter(n=>n.tagName==='code'||a(n,'class')==='monospaced').map(n=>norm(text(n))).sort()};}
export function assembleNinjaTranslation({repository=root,check=false,commitOptions}={}){
  const base=path.join(repository,'docs/notes/document-import/ninja/v1-13-2'),dir=path.join(base,'translation');noSymlinks(base,true);
  const source=fs.readFileSync(path.join(base,'generated/source-fragments/manual.html'),'utf8'),index=JSON.parse(fs.readFileSync(path.join(dir,'SOURCE_BLOCKS.json')));
  assert.equal(hash(source),index.sourceSha256,'canonical fragment changed; rebuild translation inventory');
  const lines=fs.readFileSync(path.join(dir,'JA_BLOCKS.tsv'),'utf8').trimEnd().split('\n'),ja=new Map();
  for(const l of lines){const pos=l.indexOf('\t');assert.ok(pos>0);const id=Number(l.slice(0,pos));assert.ok(Number.isInteger(id)&&id>=0&&id<index.blocks.length&&!ja.has(id),'invalid/duplicate translation ID');ja.set(id,l.slice(pos+1));}
  const unchanged=JSON.parse(fs.readFileSync(path.join(dir,'UNCHANGED_BLOCKS.json'))),unchangedMap=new Map();
  for(const b of unchanged){assert.ok(!unchangedMap.has(b.id)&&!ja.has(b.id)&&b.reason);assert.equal(index.blocks[b.id].html,b.html);unchangedMap.set(b.id,b.html);}
  assert.equal(ja.size+unchangedMap.size,index.blocks.length,'missing translation units');
  const tree=parseFragment(source),covered=new Set(),mark=n=>{covered.add(n);for(const c of n.childNodes??[])mark(c);};let id=0;
  const visit=n=>{if(n.tagName==='pre'){mark(n);return;}if(isBlock(n)){
    const block=index.blocks[id];assert.equal(n.tagName,block.tag);assert.equal(serialize(n),block.html,`source block changed: ${id}`);
    const html=ja.get(id)??unchangedMap.get(id);assert.ok(html!==undefined);const replacement=parseFragment(n,html);
    for(const inline of walk(replacement).filter(n=>n.tagName)){
      assert.ok(['a','span','code','em','strong','br'].includes(inline.tagName),`unsupported inline element ${id}: ${inline.tagName}`);
      for(const attr of inline.attrs??[])assert.ok((inline.tagName==='a'&&attr.name==='href')||(inline.tagName==='span'&&attr.name==='class'&&attr.value==='monospaced'),`unsupported inline attribute ${id}`);
    }
    assert.deepEqual(inlineMetrics(replacement),inlineMetrics(n),`inline literals/links changed: ${id}`);
    if(ja.has(id))assert.ok(/[\u3040-\u30ff\u3400-\u9fff]/.test(text(replacement)),`translated block has no Japanese: ${id}`);
    n.childNodes=replacement.childNodes;for(const c of n.childNodes)c.parentNode=n;mark(n);id++;return;
  }for(const c of n.childNodes??[])visit(c);};visit(tree);assert.equal(id,345);
  const residual=walk(tree).filter(n=>!covered.has(n)&&n.nodeName==='#text'&&n.value.trim());assert.deepEqual(residual.map(n=>n.value.trim()),['Important']);residual[0].value='重要';
  let html=serialize(tree).trim();let pres=0;
  html=html.replace(/(<pre\b[^>]*>)([\s\S]*?)(<\/pre>)/g,(_,start,body,end)=>{assert.ok(!/<[a-z][^>]*>/i.test(body));pres++;return start+body.replace(/ /g,'&#32;').replace(/\t/g,'&#9;')+end;});assert.equal(pres,31);
  let headings=0;html=html.replace(/(<h[2-6][^>]*>)([\s\S]*?)(<\/h[2-6]>)/g,(_,start,body,end)=>start+body.replace(/<span class="monospaced">([\s\S]*?)<\/span>/g,(_,inner)=>{headings++;return'<code>'+inner+'</code>';})+end);assert.equal(headings,3);
  html=html.replace(/\r\n/g,'\n').replace(/\n/g,'&#10;');assert.ok(html.startsWith('<div'));
  const original=walk(parseFragment(source)),output=walk(parseFragment(html));
  assert.deepEqual(output.filter(n=>n.tagName==='pre').map(text),original.filter(n=>n.tagName==='pre').map(text),'all literal code blocks must match');
  assert.deepEqual(output.filter(n=>a(n,'id')).map(n=>a(n,'id')),original.filter(n=>a(n,'id')).map(n=>a(n,'id')),'source IDs/order');
  assert.equal(output.filter(n=>/^h[2-6]$/.test(n.tagName??'')).length,41);assert.equal(output.filter(n=>n.tagName==='table').length,2);
  const license=fs.readFileSync(path.join(base,'source/COPYING'),'utf8');
  const pages=[{id:'01-docs/01-manual.md',body:'---\ntitle: "Ninjaビルドシステム"\nlicenseSource: "ninja-1-13-2"\ntoc:\n  minLevel: 2\n  maxLevel: 6\n---\n\n'+html+'\n'},
    {id:'02-license/01-license.md',body:'---\ntitle: "ライセンス"\nlicenseSource: "ninja-1-13-2"\n---\n\n## 原文のCOPYING\n\n以下は固定した上流COPYINGの原文全文です。ライセンス本文は翻訳せず、そのまま掲載しています。文書専用のライセンス表記を確認できなかったため、本体ライセンスを注釈付きで適用しています。\n\n```text\n'+license+'```\n'}];
  const target=path.join(dir,'generated');noSymlinks(target,true);const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'libx-ninja-ja-'));
  try{const results=prepareImportBatch({check,commitOptions,stagingRoot:tmp,outputs:[{targetPath:target,kind:'directory',generate:prepared=>{
    for(const p of pages){const out=path.join(prepared,p.id);fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,p.body);}
    fs.writeFileSync(path.join(prepared,'GENERATION.json'),JSON.stringify({schemaVersion:1,project:'ninja',version:'v1-13-2',status:'translated-unreviewed',sourceFragmentSha256:hash(source),inputs:Object.fromEntries(['SOURCE_BLOCKS.json','JA_BLOCKS.tsv','UNCHANGED_BLOCKS.json'].map(n=>[n,hash(fs.readFileSync(path.join(dir,n)))])),translatedBlocks:ja.size,unchangedLiteralBlocks:unchanged.length,additionalLabel:'Important → 重要',pages:pages.map(p=>({id:p.id,sha256:hash(p.body)})),checks:['all 345 units accounted for','block literal/reference multisets preserved','31 exact code blocks','41 ordered IDs/headings','2 tables','original COPYING unmodified'],notes:['Content review is a separate pending phase.','Original legal license remains English; only explanatory wrapper translated.']},null,2)+'\n');},validate:prepared=>{for(const p of pages)assert.equal(fs.readFileSync(path.join(prepared,p.id),'utf8'),p.body);}}]});return{translatedBlocks:ja.size,unchangedLiteralBlocks:unchanged.length,pages:2,status:'translated-unreviewed',check,matches:results.every(r=>r.matches)};}finally{fs.rmSync(tmp,{recursive:true,force:true});}
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{const args=process.argv.slice(2);assert.ok(args.length===0||(args.length===1&&args[0]==='--check'));const result=assembleNinjaTranslation({check:args.includes('--check')});console.log(JSON.stringify(result));if(result.check&&!result.matches)process.exitCode=1;}catch(e){console.error(e.stack);process.exitCode=1;}}
