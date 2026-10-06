import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import matter from 'gray-matter';
import {parseFragment} from 'parse5';
import {hashFile} from './safe-import-output.js';
import {remarkSourceHeadingIds} from '../plugins/remark-uthash-source-heading-ids.js';
import {remarkCallouts} from '../plugins/remark-callouts.js';
import {rehypeTaskListA11y} from '../plugins/rehype-task-list-a11y.js';
import {rehypeDocumentEnhancements} from '../plugins/rehype-document-enhancements.js';
const require=createRequire(import.meta.url),ar=createRequire(require.resolve('astro/package.json'));
const {createMarkdownProcessor}=await import(ar.resolve('@astrojs/markdown-remark'));
const walk=(n,f)=>{f(n);for(const c of n.childNodes??[])walk(c,f)},attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
function metrics(html){const m={code:[],inlineCode:[],headings:[],links:[],structure:[],tables:[]};walk(parseFragment(html),n=>{
 for(let p=n;p;p=p.parentNode)if(p.tagName==='script'||attr(p,'class')?.split(' ').includes('docs-code-toolbar'))return;
 if(n.tagName)m.structure.push([n.tagName,n.attrs?.filter(a=>!['href','aria-label'].includes(a.name))]);
 if(n.tagName==='pre')m.code.push(text(n));
 if(n.tagName==='code'){let inside=false;for(let p=n.parentNode;p;p=p.parentNode)if(p.tagName==='pre')inside=true;if(!inside)m.inlineCode.push(text(n));}
 if(/^h[1-6]$/.test(n.tagName??''))m.headings.push({tag:n.tagName,id:attr(n,'id'),text:text(n)});
 if(n.tagName==='a'&&attr(n,'href'))m.links.push(attr(n,'href'));
 if(n.tagName==='table'){const cells=[];walk(n,c=>{if(['td','th'].includes(c.tagName))cells.push({tag:c.tagName,rowspan:attr(c,'rowspan')??'1',colspan:attr(c,'colspan')??'1',text:text(c),codes:(c.childNodes??[]).length})});m.tables.push(cells);}
});return m;}

export async function checkUthashTranslation({root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..')}={}) {
 const base='docs/notes/document-import/uthash/v2-4-0',read=p=>fs.readFileSync(path.join(root,p),'utf8'),reviewPath=base+'/review/2026-10-02-209/TRANSLATION_REVIEW.json';
 assert.equal(hashFile(path.join(root,reviewPath)),'b4d11ccbe9c3f52be9de479909d6d0c33c1b6cd4c28146e007a3c6b3fcb19ff9','review manifest changed; renew the reviewed evidence binding');
 const review=JSON.parse(read(reviewPath)),map=JSON.parse(read(base+'/CONTENT_MAP.json'));
 assert.equal(review.status,'passed-content-review');assert.equal(review.pages.length,8);assert.deepEqual(review.unreviewedPages,[]);assert.equal(new Set(review.pages.map(p=>p.id)).size,8);
 const processor=await createMarkdownProcessor({smartypants:false,remarkPlugins:[remarkCallouts,remarkSourceHeadingIds],rehypePlugins:[rehypeTaskListA11y,rehypeDocumentEnhancements]});
 const pages=[];
 const listMarkdown=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?listMarkdown(path.join(d,e.name)):e.name.endsWith('.md')?[path.relative(docsRoot,path.join(d,e.name))]:[]);
 for(const lang of ['en','ja']){var docsRoot=path.join(root,'apps/uthash/src/content/docs/v2-4-0',lang);assert.deepEqual(listMarkdown(docsRoot).sort(),map.pages.map(p=>p.id).sort());}

 for(const p of map.pages){
  const rev=review.pages.find(r=>r.id===p.id);assert.ok(rev);assert.equal(rev.status,'passed');assert.equal(rev.separateReviewPass,true);
  for(const k of ['source','canonical','translation'])assert.equal(hashFile(path.join(root,rev[k].path)),rev[k].sha256,`${p.id} review ${k}`);
  const enPath='apps/uthash/src/content/docs/v2-4-0/en/'+p.id,jaPath='apps/uthash/src/content/docs/v2-4-0/ja/'+p.id;
  assert.equal(hashFile(path.join(root,enPath)),rev.canonical.sha256);assert.equal(hashFile(path.join(root,jaPath)),rev.translation.sha256);
  const e=matter(read(enPath)),j=matter(read(jaPath));for(const k of ['sourceURL','licenseSource','upstreamAuthors','upstreamVersionHeader'])assert.deepEqual(e.data[k],j.data[k]);assert.equal(j.data.sourceURL,p.sourceURL);assert.equal(j.data.licenseSource,p.licenseSource);
  const er=await processor.render(e.content),jr=await processor.render(j.content),em=metrics(er.code),jm=metrics(jr.code);
  const expectedCode=[...em.code];
  if(p.id==='01-guides/06-utstring.md'){
   const mapped=rev.findings.find(f=>f.kind==='translated-explanatory-literal');assert.ok(mapped);const evidence=mapped.evidence[0];assert.equal(hashFile(path.join(root,evidence.path)),evidence.sha256);const mapping=JSON.parse(read(evidence.path)).checks.explanatoryLiteralBlockMapped;assert.equal(mapping.length,4);
   for(const [from,to] of mapping){assert.equal(expectedCode.join('\n').split(from).length-1,1);for(let i=0;i<expectedCode.length;i++)expectedCode[i]=expectedCode[i].replace(from,to);}
  }
  assert.deepEqual(expectedCode,jm.code,`${p.id} code and explicitly reviewed explanatory literal`);
  if(p.id==='02-license/01-license.md'){
   assert.equal(jm.code.length,1);assert.equal(jm.code[0],read(base+'/source/LICENSE'));assert.equal(jm.headings.length,2);assert.ok(j.content.includes('非公式の参考訳'));
  }else{
   assert.deepEqual(em.structure,jm.structure,`${p.id} structure`);
   assert.deepEqual(em.inlineCode.map(x=>p.id==='01-guides/01-userguide.md'&&x==='within'?'内部':x),jm.inlineCode,`${p.id} inline`);
   assert.deepEqual(em.headings.map(({tag,id})=>({tag,id})),jm.headings.map(({tag,id})=>({tag,id})),`${p.id} headings`);
   assert.deepEqual(em.links.map(h=>h.replace('/docs/uthash/v2-4-0/en/','/docs/uthash/v2-4-0/ja/')),jm.links,`${p.id} links`);
  }
  const ids=[],refs=[];walk(parseFragment(jr.code),n=>{const id=attr(n,'id');if(id)ids.push(id);for(const attribute of ['href','src']){const value=attr(n,attribute);if(value)refs.push({attribute,value});}});assert.equal(new Set(ids).size,ids.length);
  pages.push({id:p.id,en:{path:enPath,sha256:hashFile(path.join(root,enPath))},ja:{path:jaPath,sha256:hashFile(path.join(root,jaPath))},reviewedSource:rev.source,route:'/docs/uthash/v2-4-0/ja/'+p.id.replace(/\.md$/,'')+'/',ids,refs,codeBlocks:jm.code.length,inlineCodes:jm.inlineCode.length,headings:jm.headings.length,tables:jm.tables.length});
 }
 let internal=0,external=0;
 for(const p of pages)for(const ref of p.refs){const url=new URL(ref.value,'https://libx.dev'+p.route);if(url.origin!=='https://libx.dev'){external++;continue;}
 if(url.pathname===map.assets[0].target){assert.equal(hashFile(path.join(root,'apps/uthash/public',url.pathname.replace(/^\/docs\/uthash\//,''))),map.assets[0].sha256);internal++;continue;}
 const target=pages.find(p=>p.route===url.pathname);assert.ok(target,`missing JA target ${ref.value}`);if(url.hash)assert.ok(target.ids.includes(decodeURIComponent(url.hash.slice(1))),`missing JA fragment ${ref.value}`);internal++;}
 const cfg=JSON.parse(read('apps/uthash/src/config/project.config.jsonc'));assert.deepEqual(cfg.language.supported,['en','ja']);
 for(const p of map.pages){const source=cfg.licensing.sources.find(s=>s.id===p.licenseSource);assert.ok(source);assert.equal(source.sourceUrl,p.sourceURL);assert.ok(source.provenanceNotes.some(n=>n.ja.includes('文書専用ライセンスの表記が確認できないため')));assert.ok(source.provenanceNotes.some(n=>n.ja.includes('非公式日本語訳')));}
 const note=JSON.parse(read(base+'/review/2026-10-02-201/SORT_NAMES_NOTE.json')).note;assert.ok(cfg.licensing.sources[0].provenanceNotes.some(n=>n.en===note.en&&n.ja===note.ja));
 return {schemaVersion:1,checkedAt:new Date().toISOString(),status:'passed-content-machine',review:{path:reviewPath,sha256:hashFile(path.join(root,reviewPath))},pages,checks:{reviewedPages:8,appExactReviewedENJA:true,allExecutableCodeExact:true,utstringExplanatoryLiteralMapped:4,sourceMetadataExact:true,allJAInternalReferences:internal,externalPreservedNotNetworkChecked:external,licenseOriginalExact:true,sourceNotesConfigured:true},limitations:['内容の意味は別工程review証拠で判断。機械検査だけで翻訳品質を合格にしない。','ビルド/ブラウザー表示/統合公開は別工程。']};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {const result=await checkUthashTranslation();const arg=process.argv.slice(2).find(a=>a.startsWith('--report='));if(arg)fs.writeFileSync(arg.slice(9),JSON.stringify(result,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify(result.checks));}
