import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {parse,parseFragment} from 'parse5';
const defaultRoot=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)];
const attr=(n,k)=>n.attrs?.find(v=>v.name===k)?.value;
const text=n=>attr(n,'class')==='docs-code-toolbar'||n.tagName==='script'?'':n.value??(n.childNodes??[]).map(text).join('');
const norm=s=>s.replace(/\s+/g,' ').trim();
const trim=s=>s.replace(/\r\n/g,'\n').replace(/\n$/,'');
export function checkNinjaRendered(root=defaultRoot){
  const base=path.join(root,'docs/notes/document-import/ninja/v1-13-2'),app=path.join(root,'apps/ninja'),config=JSON.parse(fs.readFileSync(path.join(app,'src/config/project.config.jsonc'))),checks=[];
  assert.deepEqual(config.language.supported,['en','ja']);
  const add=(name,fn)=>{fn();checks.push({name,status:'passed'});};
  const read=(lang,id)=>parse(fs.readFileSync(path.join(app,'dist/v1-13-2',lang,id.replace(/\.md$/,''),'index.html'),'utf8'));
  const strip=tree=>{const article=walk(tree).find(n=>n.tagName==='article');assert.ok(article);article.childNodes=article.childNodes.filter(n=>!['navigation-container','document-provenance'].includes(attr(n,'class')));return article;};
  const notice=fs.readFileSync(path.join(base,'source/COPYING'),'utf8');
  for(const lang of['en','ja']){
    const manual=read(lang,'01-docs/01-manual.md');
    add(lang+' document language',()=>assert.equal(attr(walk(manual).find(n=>n.tagName==='html'),'lang'),lang));
    add(lang+' visible provenance annotations',()=>{const article=walk(manual).find(n=>n.tagName==='article');for(const n of config.licensing.sources[0].provenanceNotes)assert.ok(text(article).includes(n[lang]));});
    const article=strip(manual),actual=walk(article);
    const body=lang==='en'?fs.readFileSync(path.join(base,'generated/source-fragments/manual.html'),'utf8'):fs.readFileSync(path.join(base,'translation/generated/01-docs/01-manual.md'),'utf8').replace(/^---\n[\s\S]*?\n---\n/,'').trim();
    const original=parseFragment(body),expected=walk(original);
    add(lang+' whole manual body text',()=>assert.equal(norm(text(article)),norm(text(original))));
    add(lang+' all 31 code examples expose copy controls',()=>{assert.equal(actual.filter(n=>n.tagName==='button'&&attr(n,'class')==='docs-code-copy').length,31);assert.equal(actual.filter(n=>n.tagName==='code'&&n.parentNode?.tagName==='pre').length,31);});
    add(lang+' all 31 exact ordered code examples',()=>{const codes=ns=>ns.filter(n=>n.tagName==='pre').map(n=>trim(text(n)));assert.equal(codes(actual).length,31);assert.deepEqual(codes(actual),codes(expected));});
    add(lang+' all 33 ordered source references',()=>{const refs=ns=>ns.filter(n=>n.tagName==='a'&&attr(n,'href')).map(n=>attr(n,'href'));assert.equal(refs(actual).length,33);assert.deepEqual(refs(actual),refs(expected).map(h=>h.replace('https://https://www.gnu.org/','https://www.gnu.org/')));});
    const ids=expected.filter(n=>attr(n,'id')).map(n=>attr(n,'id'));
    add(lang+' all 41 explicit IDs and internal references',()=>{assert.equal(ids.length,41);assert.equal(new Set(ids).size,41);for(const id of ids)assert.equal(actual.filter(n=>attr(n,'id')===id).length,1);for(const n of actual.filter(n=>n.tagName==='a'&&attr(n,'href')?.startsWith('#')))assert.ok(ids.includes(attr(n,'href').slice(1)));});
    add(lang+' both full tables',()=>assert.deepEqual(actual.filter(n=>n.tagName==='table').map(n=>norm(text(n))),expected.filter(n=>n.tagName==='table').map(n=>norm(text(n)))));
    const headings=actual.filter(n=>/^h[2-6]$/.test(n.tagName??'')&&attr(n,'id')).map(n=>({id:attr(n,'id'),label:text(n).trim()}));
    add(lang+' desktop/mobile native TOC all 41 headings',()=>{assert.equal(headings.length,41);const tocs=walk(manual).filter(n=>n.tagName==='starlight-toc');assert.equal(tocs.length,2);for(const toc of tocs)assert.deepEqual(walk(toc).filter(n=>n.tagName==='a'&&attr(n,'href')?.startsWith('#')&&attr(n,'href')!=='#_top').map(n=>({id:attr(n,'href').slice(1),label:text(n).trim()})),headings);});
    const license=read(lang,'02-license/01-license.md'),la=walk(license).find(n=>n.tagName==='article');
    add(lang+' full license and annotations',()=>{const pres=walk(la).filter(n=>n.tagName==='pre');assert.equal(pres.length,1);assert.equal(trim(text(pres[0])),trim(notice));for(const n of config.licensing.sources[0].provenanceNotes)assert.ok(text(la).includes(n[lang]));});
  }
  add('exact original downloadable COPYING',()=>assert.deepEqual(fs.readFileSync(path.join(app,'dist/assets/ninja-COPYING.txt')),Buffer.from(notice)));
  const review=JSON.parse(fs.readFileSync(path.join(base,'REVIEW_MANIFEST.json')));
  add('reviewed app EN/JA exact bytes',()=>{for(const p of review.pages)for(const[role,lang]of[['canonical','en'],['translation','ja']])assert.deepEqual(fs.readFileSync(path.join(root,p[role].path)),fs.readFileSync(path.join(app,'src/content/docs/v1-13-2',lang,p.id)));});
  return{status:'passed',scope:'Full formal four EN/JA articles and their rendered bodies, literal codes, IDs, source references, table text, native TOC structure, language metadata, provenance and fixed notice. Browser behavior/external HTTP/whole integrated release checks are separate.',checks};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{const args=process.argv.slice(2);assert.ok(args.every(a=>/^--(?:root|output)=.+$/.test(a)));assert.equal(new Set(args.map(a=>a.split('=')[0])).size,args.length);const root=args.find(a=>a.startsWith('--root='))?.slice(7)??defaultRoot,result=checkNinjaRendered(root),out=args.find(a=>a.startsWith('--output='))?.slice(9);if(out)fs.writeFileSync(out,JSON.stringify({checkedAt:new Date().toISOString(),workspace:root,...result},null,2)+'\n',{flag:'wx'});console.log(JSON.stringify(result));}catch(e){console.error(e.stack);process.exitCode=1;}}
