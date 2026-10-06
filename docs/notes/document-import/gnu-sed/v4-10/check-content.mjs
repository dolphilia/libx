import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {parse} from 'parse5';
const N=path.dirname(fileURLToPath(import.meta.url)),W=path.resolve(N,'../../../../..'),A=W+'/apps/gnu-sed',req=createRequire(A+'/package.json'),astro=createRequire(req.resolve('astro/package.json'));
const {createMarkdownProcessor}=await import(astro.resolve('@astrojs/markdown-remark'));
const processor=await createMarkdownProcessor({smartypants:false,syntaxHighlight:'shiki'}),M=JSON.parse(fs.readFileSync(N+'/CONTENT_MAP.json')),S=JSON.parse(fs.readFileSync(N+'/SOURCE_MANIFEST.json'));
const hash=b=>crypto.createHash('sha256').update(b).digest('hex'),attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,walk=n=>[n,...(n.childNodes??[]).flatMap(walk)],txt=n=>n.value??(n.childNodes??[]).map(txt).join(''),norm=s=>s.replace(/\s+/g,' ').trim(),body=t=>walk(t).find(n=>attr(n,'class')==='gnu-sed-original-content'),read=p=>fs.readFileSync(p,'utf8'),rows=[];
for(const f of S.files)assert.equal(hash(fs.readFileSync(N+'/'+f.path)),f.sha256);
const originals=[],canonicals=[];
for(const row of M.items){
 const adopted=parse(read(N+'/source-fragments/en/'+row.id.replace(/\.md$/,'.html'))),original=body(adopted),en=read(N+'/'+row.canonical),enbody=en.split('---').slice(2).join('---'),tree=parse((await processor.render(enbody)).code),rendered=body(tree);assert(original&&rendered);
 assert.equal(norm(txt(original)),norm(txt(rendered)),row.id+' full English original meaning text');assert.equal(norm(txt(rendered)),row.sourceText);
 assert.deepEqual(walk(rendered).filter(n=>n.tagName==='pre').map(txt),row.sourcePre,row.id+' original literal pre');
 assert.deepEqual(walk(rendered).filter(n=>/^h[1-6]$/.test(n.tagName??'')&&attr(n,'id')).map(n=>({depth:Number(n.tagName.slice(1)),slug:attr(n,'id'),text:norm(txt(n))})),row.sourceHeadings);
 assert.equal(walk(rendered).filter(n=>['script','iframe'].includes(n.tagName)).length,0);
 originals.push(norm(txt(original)));canonicals.push(norm(txt(rendered)));
 const ja=N+'/drafts/ja/'+row.id;let japass=null;
 if(fs.existsSync(ja)){
  const m=read(ja),raw=m.split('---').slice(2).join('---'),jtree=parse((await processor.render(raw)).code),jbody=body(jtree),expected=body(parse(raw));assert(jbody&&expected);assert.equal(norm(txt(jbody)),norm(txt(expected)),row.id+' all JA render');assert.deepEqual(walk(jbody).filter(n=>n.tagName==='pre').map(txt),walk(expected).filter(n=>n.tagName==='pre').map(txt));const codeMask=n=>n.tagName==='i'?'':n.value??(n.childNodes??[]).map(codeMask).join('');assert.deepEqual(walk(jbody).filter(n=>n.tagName==='pre').map(codeMask),walk(rendered).filter(n=>n.tagName==='pre').map(codeMask));const commandDT=t=>walk(t).filter(n=>n.tagName==='dt').map(n=>walk(n).filter(c=>c.tagName==='code').map(txt));assert.deepEqual(commandDT(jbody),commandDT(rendered));
  assert.equal(hash(fs.readFileSync(ja)),hash(fs.readFileSync(A+'/src/content/docs/v4-10/ja/'+row.id)));japass={draftSHA256:hash(m),allDraftTextRendered:true,pureLiteralPre:row.pre-(row.slug==='11-gnu-commands'?1:0),annotatedPreTranslated:row.slug==='11-gnu-commands'?1:0,commandTokensExact:true};
 }
 assert.equal(hash(en),row.canonicalSHA256);assert.equal(hash(en),hash(fs.readFileSync(A+'/src/content/docs/v4-10/en/'+row.id)));
 rows.push({id:row.id,sourceSHA256:hash(read(N+'/source-fragments/en/'+row.id.replace(/\.md$/,'.html'))),canonicalSHA256:hash(en),allOriginalENTextExact:true,preExact:row.pre,JA:japass});
}
const result={schemaVersion:1,status:'passed-canonical-and-saved-draft-render-binding',at:new Date().toISOString(),sourceInputs:S.files.length,EN:rows.length,JA:rows.filter(r=>r.JA).length,originalPre:rows.reduce((n,r)=>n+r.preExact,0),rows,meaningReview:'Separate REVIEW_MANIFEST required; text and literal equality alone do not certify translation meaning.',pending:'Formal source-offer/final gates remain pending; saved JA count above is actual, meaning approvals are separate REVIEW_MANIFEST evidence.'};fs.writeFileSync(N+'/CANONICAL_BINDING.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({...result,rows:undefined}));
