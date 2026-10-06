import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {createMarkdownProcessor} from '/private/tmp/libx-wren-formal-871/node_modules/.pnpm/@astrojs+markdown-remark@6.3.1/node_modules/@astrojs/markdown-remark/dist/index.js';
import {parse} from '/private/tmp/libx-wren-formal-871/node_modules/parse5/dist/index.js';
const E=path.dirname(new URL(import.meta.url).pathname),B=E+'/source/yyjson/original',P='/private/tmp/libx-yyjson-prototype-873';
fs.mkdirSync(P,{recursive:true});fs.cpSync(B+'/doc/images',P+'/images',{recursive:true});
const proc=await createMarkdownProcessor({smartypants:false,syntaxHighlight:'shiki'}),walk=n=>[n,...(n.childNodes??[]).flatMap(walk)],txt=n=>n.value??(n.childNodes??[]).map(txt).join(''),attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const results=[];
for(const [name,file]of[['introduction','README.md'],['api','doc/API.md'],['data-structures','doc/DataStructure.md']]){
 const raw=fs.readFileSync(B+'/'+file,'utf8'),edited=raw.replace(/^(.*?) \{#([\w-]+)\}$/mg,'$1').replace(/\]\(doc\/images\//g,'](images/');
 const blocks=[...raw.matchAll(/^```[^\n]*\n([\s\S]*?)^```\s*$/gm)].map(x=>x[1].replace(/\n$/,''));
 const rendered=await proc.render(edited),nodes=walk(parse(rendered.code)),code=nodes.filter(n=>n.tagName==='pre').map(txt);
 assert.deepEqual(code,blocks,name+' code must remain exact');
 const imgs=nodes.filter(n=>n.tagName==='img'&&!(attr(n,'src')??'').startsWith('http')).map(n=>attr(n,'src'));
 for(const src of imgs)assert(fs.existsSync(P+'/'+src));
 const tables=nodes.filter(n=>n.tagName==='table').length;
 const html='<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>yyjson 0.13.0 '+name+'</title><style>body{font:16px/1.7 system-ui;max-width:1000px;margin:auto;padding:24px}pre,table{display:block;overflow:auto}img{max-width:100%;height:auto}td,th{padding:5px;border:1px solid #ddd}pre{padding:16px}footer{border-top:1px solid #aaa;margin-top:36px}</style><main>'+rendered.code+'</main><footer><p>Libx conversion prototype; fixed yyjson0.13.0, official original. No translation or full meaning review yet. Doxygen API reference and interactive benchmark reports remain original links.</p><a href="https://github.com/ibireme/yyjson/tree/6447536015f3d600f3d65323b10976103b337ca7">Fixed source</a><pre>'+fs.readFileSync(B+'/LICENSE','utf8').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')+'</pre></footer></html>';
 fs.writeFileSync(P+'/'+name+'.html',html);
 results.push({source:file,sourceSHA256:createHash('sha256').update(raw).digest('hex'),codeBlocksExact:code.length,tables,localFigures:imgs,html:P+'/'+name+'.html'});
}
const out={status:'passed-machine-conversion',at:new Date().toISOString(),processor:'Installed Astro markdown-remark6.3.1, Shiki, GFM;smartypantsfalse',results,scope:'Representative conversion feasibility only. Original text retained;Doxygen title marker removed,relative figure paths relocated. No original code execution/technical audit/Japanese meaning review/native display claim.'};
fs.writeFileSync(E+'/CONVERSION_PROTOTYPE.json',JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify(out));
