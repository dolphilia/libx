import fs from 'node:fs';
import {createRequire} from 'node:module';
const w='/private/tmp/libx-gperf-trial-20261004-559',r='/Users/dolphilia/github/libx',a=w+'/apps/gperf-trial',gpl=fs.readFileSync(r+'/docs/notes/project-expansion/runs/evidence/2026-10-04-556/GPL_SECTION_ORIGINAL.html','utf8'),notice=fs.readFileSync(r+'/docs/notes/project-expansion/runs/evidence/2026-10-04-556/MANUAL_NOTICE_ORIGINAL.html','utf8');
for(const lang of ['en','ja'])for(const id of ['01-full-guide','02-ordinary','03-declarations','04-cli']){const p=a+'/src/content/docs/v3-3/'+lang+'/01-guide/'+id+'.md';let s=fs.readFileSync(p,'utf8');const pos=s.indexOf(gpl),fix=t=>t.replace(/<A NAME="([^"]+)"/g,'<A ID="$1" NAME="$1"');if(pos>=0)s=fix(s.slice(0,pos))+'<span id="SEC1"></span>\n'+gpl+fix(s.slice(pos+gpl.length));else s=fix(s);
const localIds=new Set([...s.matchAll(/\b(?:ID|id)="([^"]+)"/g)].map(x=>x[1]));if(id!=='01-full-guide')s=s.replace(/HREF="#([^"]+)"/g,(m,h)=>localIds.has(h)?m:'HREF="/docs/gperf-trial/v3-3/'+lang+'/01-guide/01-full-guide/#'+h+'"');
if(id==='01-full-guide'&&(!s.includes(gpl)||!s.includes(notice)))throw Error('Protected original changed');fs.writeFileSync(p,s);}
console.log('Added compatibility IDs outside protected GPL; fragment cross-references point to full guide.');
