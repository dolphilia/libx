import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {parse, parseFragment, serialize} from 'parse5';
import {hashFile} from './safe-import-output.js';
import {prepareImportBatch} from './batch-import-output.js';

const repository=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const relativeBase='docs/notes/document-import/ninja/v1-13-2';
const lockHash='10ae65f26152eddaf822d40aa53b80e1f5804d636d9796e28deed19d7c04b30c';
const mapHash='147b5f657bfdea9d22285218c380475f93e0825dd44fc0aae4635ed8c595a00d';
const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)];
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
function noSymlinks(p,recursive=false) {
  for(let current=path.resolve(p);;current=path.dirname(current)) {
    let stat;try{stat=fs.lstatSync(current);}catch(e){if(e.code!=='ENOENT')throw e;}
    if(stat)assert.ok(!stat.isSymbolicLink(),`symlink: ${current}`);
    if(current===path.dirname(current))break;
  }
  if(recursive&&fs.existsSync(p)&&fs.lstatSync(p).isDirectory())
    for(const name of fs.readdirSync(p))noSymlinks(path.join(p,name),true);
}
function inventory(fragment) {
  const nodes=walk(fragment);
  return {bodyText:text(fragment),pre:nodes.filter(n=>n.tagName==='pre').map(text),
    tables:nodes.filter(n=>n.tagName==='table').map(text),
    links:nodes.filter(n=>n.tagName==='a'&&attr(n,'href')!==undefined).map(n=>attr(n,'href')),
    ids:nodes.filter(n=>attr(n,'id')!==undefined).map(n=>attr(n,'id')),
    headings:nodes.filter(n=>/^h[2-6]$/.test(n.tagName??'')).map(n=>({level:n.tagName,id:attr(n,'id'),text:text(n)}))};
}
export function importNinja({root=repository,asciidoc,check=false,commitOptions}={}) {
  assert.ok(asciidoc,'explicit AsciiDoc executable path required');
  root=path.resolve(root);const base=path.join(root,relativeBase);
  noSymlinks(base,true);
  const lockPath=path.join(base,'SOURCE_LOCK.json');assert.equal(hashFile(lockPath),lockHash,'SOURCE_LOCK changed');
  const lock=JSON.parse(fs.readFileSync(lockPath,'utf8'));
  assert.equal(hashFile(path.join(root,lock.sourceManifest.path)),lock.sourceManifest.sha256,'SOURCE_MANIFEST changed');
  assert.equal(lock.contentMap.sha256,mapHash);
  assert.equal(hashFile(path.join(root,lock.contentMap.path)),mapHash,'CONTENT_MAP changed');
  const map=JSON.parse(fs.readFileSync(path.join(root,lock.contentMap.path),'utf8'));
  for(const input of lock.inputs) {
    assert.ok(input.path.startsWith(relativeBase+'/source/')&&!input.path.split('/').includes('..'));
    const p=path.join(root,input.path);noSymlinks(p);assert.ok(fs.lstatSync(p).isFile());
    assert.equal(hashFile(p),input.sha256,`fixed input changed: ${input.path}`);
  }
  const toolVersion=execFileSync(asciidoc,['--version'],{encoding:'utf8'}).trim();
  assert.equal(toolVersion,lock.tool);
  const target=path.join(base,'generated');noSymlinks(target,true);
  if(fs.existsSync(target))assert.ok(fs.lstatSync(target).isDirectory());
  const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'libx-ninja-convert-'));
  try {
    const htmlFile=path.join(tmp,'manual.html');
    execFileSync(asciidoc,['-b','html5','-o',htmlFile,path.join(base,'source/doc/manual.asciidoc')],{stdio:'pipe'});
    const contents=walk(parse(fs.readFileSync(htmlFile,'utf8'))).filter(n=>attr(n,'id')==='content');
    assert.equal(contents.length,1);
    const original=serialize(contents[0]).trim(),before=inventory(parseFragment(original));
    for(const [name,count]of Object.entries(map.expected)) {
      const field=name==='headings'?'headings':name;
      assert.equal(before[field].length,count,`${name} count changed`);
    }
    let html=original,preRepairs=0,headingRepairs=0;
    html=html.replace(/(<pre\b[^>]*>)([\s\S]*?)(<\/pre>)/g,(_,start,body,end)=>{
      assert.ok(!/<[a-z][^>]*>/i.test(body),'unexpected code inline markup');preRepairs++;
      return start+body.replace(/ /g,'&#32;').replace(/\t/g,'&#9;')+end;
    });
    html=html.replace(/(<h[2-6][^>]*>)([\s\S]*?)(<\/h[2-6]>)/g,(_,start,body,end)=>
      start+body.replace(/<span class="monospaced">([\s\S]*?)<\/span>/g,(_,inner)=>{headingRepairs++;return '<code>'+inner+'</code>';})+end);
    const repair=map.repairs[0];assert.equal(html.split(repair.from).length-1,repair.count);
    html=html.replace(repair.from,repair.to).replace(/\r\n/g,'\n').replace(/\n/g,'&#10;');
    assert.equal(preRepairs,31);assert.equal(headingRepairs,3);
    assert.ok(html.startsWith('<div'),'leading Markdown raw HTML block must be literal');
    const after=inventory(parseFragment(html));
    assert.deepEqual(after,{...before,links:before.links.map(h=>h===repair.from?repair.to:h)},'body/code/table/ID/heading/link fidelity');
    for(const href of after.links.filter(h=>h.startsWith('#')))assert.ok(after.ids.includes(href.slice(1)),`missing anchor: ${href}`);
    assert.equal(new Set(after.ids).size,after.ids.length,'duplicate IDs');
    const license=fs.readFileSync(path.join(base,'source/COPYING'),'utf8');assert.ok(!license.includes('```'));
    const pages=[{id:map.pages[0].id,markdown:'---\ntitle: "The Ninja build system"\nlicenseSource: "ninja-1-13-2"\ntoc:\n  minLevel: 2\n  maxLevel: 6\n---\n\n'+html+'\n'},
      {id:map.pages[1].id,markdown:'---\ntitle: "License"\nlicenseSource: "ninja-1-13-2"\n---\n\n## Original COPYING\n\n```text\n'+license+'```\n'}];
    const results=prepareImportBatch({stagingRoot:path.join(tmp,'stage'),check,commitOptions,outputs:[{
      targetPath:target,kind:'directory',generate:prepared=>{
        for(const p of pages){const dest=path.join(prepared,'canonical',p.id);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,p.markdown);}
        fs.mkdirSync(path.join(prepared,'source-fragments'));fs.writeFileSync(path.join(prepared,'source-fragments/manual.html'),original+'\n');
        fs.mkdirSync(path.join(prepared,'assets'));fs.writeFileSync(path.join(prepared,'assets',map.licenseAsset),license);
        fs.writeFileSync(path.join(prepared,'GENERATION.json'),JSON.stringify({schemaVersion:1,project:'ninja',version:'v1-13-2',sourceLockSha256:lockHash,contentMapSha256:mapHash,toolVersion,status:'generated-unreviewed',pages:map.pages,metrics:map.expected,repairs:map.repairs,notes:['Independent HTML5-derived body; not the official DocBook/XSL output.','Full English/Japanese content reviews and Astro rendering verification pending.','Fixed original COPYING retained, including January 2010. Annotated software-license fallback must be shown.']},null,2)+'\n');
      },validate:prepared=>{
        for(const p of pages)assert.equal(fs.readFileSync(path.join(prepared,'canonical',p.id),'utf8'),p.markdown);
        assert.equal(hashFile(path.join(prepared,'assets',map.licenseAsset)),lock.inputs.find(i=>i.path.endsWith('/COPYING')).sha256);
      }}]});
    return {pages:2,assets:1,metrics:map.expected,fidelity:'passed',toolVersion,check,matches:results.every(r=>r.matches)};
  }finally{fs.rmSync(tmp,{recursive:true,force:true});}
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  try{const args=process.argv.slice(2);assert.ok(args.every(a=>a==='--check'||/^--asciidoc=.+$/.test(a)),'unsupported argument');
    assert.equal(new Set(args.map(a=>a.split('=')[0])).size,args.length,'duplicate argument');
    const result=importNinja({check:args.includes('--check'),asciidoc:args.find(a=>a.startsWith('--asciidoc='))?.slice(11)});
    console.log(JSON.stringify(result));if(result.check&&!result.matches)process.exitCode=1;
  }catch(e){console.error(e.stack);process.exitCode=1;}
}
