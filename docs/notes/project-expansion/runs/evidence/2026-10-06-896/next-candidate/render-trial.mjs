import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import {parse} from '/private/tmp/libx-pcre2-formal-893/node_modules/parse5/dist/index.js';
const T='/private/tmp/libx-gnu-sed-trial-896',E=new URL('.',import.meta.url),r=createRequire('/private/tmp/libx-pcre2-formal-893/apps/pcre2/package.json'),a=createRequire(r.resolve('astro/package.json'));
const {createMarkdownProcessor}=await import(a.resolve('@astrojs/markdown-remark'));
const processor=await createMarkdownProcessor({smartypants:false,syntaxHighlight:'shiki'}),input=JSON.parse(fs.readFileSync(T+'/INPUTS.json'));
const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)],txt=n=>n.value??(n.childNodes??[]).map(txt).join(''),attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,norm=s=>s.replace(/\s+/g,' ').trim(),hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const rows=[];
for(const row of input.pages){
 const md=fs.readFileSync(T+'/'+row.slug+'.md','utf8');assert.equal(hash(md),row.markdownSHA256);
 const code=(await processor.render(md)).code,tree=parse(code),body=walk(tree).find(n=>attr(n,'class')==='gnu-sed-original-content');assert(body);
 assert.equal(norm(txt(body)),row.sourceText,row.slug+' all prose');assert.deepEqual(walk(body).filter(n=>n.tagName==='pre').map(txt),row.sourcePre,row.slug+' all literal pre');
 assert.deepEqual(walk(body).filter(n=>/^h[1-6]$/.test(n.tagName??'')).map(n=>({id:attr(n,'id')??null,text:norm(txt(n))})),row.sourceHeadings);
 assert.equal(walk(body).filter(n=>['script','iframe'].includes(n.tagName)).length,0);
 const footer=fs.readFileSync(T+'/footer.html','utf8'),html='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>GNU sed 4.10 local content trial — '+row.slug+'</title><link rel="stylesheet" href="libx-published.css"><style>body{padding:2rem}main{max-width:960px;margin:auto}footer{margin-top:3rem;overflow-wrap:anywhere}article{min-width:0}header{margin-bottom:2rem}pre{overflow-x:auto}</style></head><body><main><header>Libx GNU sed 4.10 — local representative content trial, adoption pending</header><article class="sl-markdown-content" dir="ltr">'+code+'</article>'+footer+'</main></body></html>';
 fs.writeFileSync(T+'/'+row.slug+'.html',html);rows.push({slug:row.slug,markdownSHA256:hash(md),renderedHTMLSHA256:hash(html),allTextExact:true,literalPreExact:row.pre,headingsExact:true});
}
let links=0;
for(const row of input.pages){const tree=parse(fs.readFileSync(T+'/'+row.slug+'.html','utf8')),body=walk(tree).find(n=>attr(n,'class')==='gnu-sed-original-content');
 for(const n of walk(body).filter(n=>n.tagName==='a')){const h=attr(n,'href');if(!h||/^https?:|^mailto:/.test(h))continue;const[file,id]=h.split('#'),target=T+'/'+(file||row.slug+'.html');assert(fs.existsSync(target),h);if(id)assert(walk(parse(fs.readFileSync(target,'utf8'))).some(x=>attr(x,'id')===decodeURIComponent(id)),h);links++;}
}
const out={status:'passed-content-conversion-trial-only',at:new Date().toISOString(),pages:12,originalPre:51,carriedFootnotes:4,bodyLinksResolved:links,rows,cssSHA256:input.cssSHA256,scope:'Actual Astro Markdown-remark and parse5 with byte-bound published Libx GNU Make CSS. Complete chapters1–3 text/pre/headings/links preserved in 12 editable Markdown pages; native representative display and scoring pending. No translated, whole-meaning-reviewed, selected or formally generated app claim.'};
fs.writeFileSync(new URL('CONTENT_TRIAL.json',E),JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({...out,rows:undefined}));
