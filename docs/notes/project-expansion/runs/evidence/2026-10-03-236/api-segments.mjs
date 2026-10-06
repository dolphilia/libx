import fs from 'node:fs';import {parse} from '/private/tmp/libx-uthash-release-20261002/node_modules/parse5/dist/index.js';
const root='/Users/dolphilia/github/libx',walk=n=>[n,...(n.childNodes??[]).flatMap(walk)],txt=n=>n.value??(n.childNodes??[]).map(txt).join(''),attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const tree=parse(fs.readFileSync('/private/tmp/libx-fmt-import-20261002/apps/fmt/dist/v12-2-0/en/01-docs/03-api/index.html','utf8'));const article=walk(tree).find(n=>n.tagName==='article');if(!article)throw Error('article missing');
const ancestors=n=>n.parentNode?[n.parentNode,...ancestors(n.parentNode)]:[];
const segments=walk(article).filter(n=>/^(p|li|h[2-6])$/.test(n.tagName)&&!ancestors(n).some(a=>['pre','nav','aside'].includes(a.tagName))&&!(n.tagName==='li'&&walk(n).slice(1).some(a=>['p','li'].includes(a.tagName))));
const data=segments.map((n,index)=>({index,tag:n.tagName,id:attr(n,'id')??null,text:txt(n)}));
const ev=root+'/docs/notes/project-expansion/runs/evidence/2026-10-03-236';fs.mkdirSync(ev,{recursive:true});fs.writeFileSync(ev+'/API_TRANSLATION_SEGMENTS.json',JSON.stringify(data,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({total:data.length,first:data.slice(0,26)},null,2));
