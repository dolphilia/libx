import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const req=createRequire(import.meta.url),deps='/private/tmp/libx-gperf-integration-20261004/node_modules/.pnpm';
const {unified}=await import(deps+'/unified@11.0.5/node_modules/unified/index.js');
const {default:parse}=await import(deps+'/remark-parse@11.0.0/node_modules/remark-parse/index.js');
const {default:rehype}=await import(deps+'/remark-rehype@11.1.2/node_modules/remark-rehype/index.js');
const {default:stringify}=await import(deps+'/rehype-stringify@10.0.1/node_modules/rehype-stringify/index.js');
const yaml=req(deps+'/js-yaml@4.1.0/node_modules/js-yaml'),root='/Users/dolphilia/github/libx',source='/private/tmp/libx-candidate-sources-585/jq/docs/content/manual/v1.8/manual.yml';
const trial='/private/tmp/libx-jq-full-scope-trial-591',raw=fs.readFileSync(source,'utf8'),manual=yaml.load(raw),map=JSON.parse(fs.readFileSync(root+'/docs/notes/project-expansion/runs/evidence/2026-10-04-590/JQ_BOUNDARY.json'));
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');assert.equal(hash(raw),map.rawSha256);
const pipeline=unified().use(parse).use(rehype,{allowDangerousHtml:true}).use(stringify,{allowDangerousHtml:true}),parser=unified().use(parse);
const visit=(node,fn)=>{fn(node);for(const n of node.children||[])visit(n,fn);};
const fields=[],examples=[],pages=[];let count=0;
function field(text,key){assert.equal(typeof text,'string');const start=`<!-- jq-source-field:${key}:start -->\n`,end=`\n<!-- jq-source-field:${key}:end -->`;
 const ast=parser.parse(text),links=[],html=[],code=[];visit(ast,n=>{if(['link','image','definition'].includes(n.type))links.push({type:n.type,url:n.url});if(n.type==='html')html.push(n.value);if(n.type==='code'||n.type==='inlineCode')code.push({type:n.type,value:n.value,lang:n.lang??null});});
 fields.push({key,sha256:hash(text),bytes:Buffer.byteLength(text),links,rawHtml:html,code,expectedHtml:String(pipeline.processSync(text))});
 return start+text+end+'\n';}
function fenced(text,lang='text'){assert.equal(typeof text,'string');const longest=Math.max(0,...Array.from(text.matchAll(/`+/g),m=>m[0].length));const fence='`'.repeat(Math.max(3,longest+1));return `${fence}${lang}\n${text}\n${fence}\n`;}
function page(name,title,body){pages.push({name,title,text:`---\ntitle: ${JSON.stringify(title)}\n---\n\n${body}`});}
page('00-introduction.md',manual.headline,field(manual.body,'body'));
for(const [i,s] of manual.sections.entries()){
 let body=`<span id="${map.sections[i].id}"></span>\n\n`;body+=field(s.title,`sections/${i}/title`);if(s.body!==undefined)body+=field(s.body,`sections/${i}/body`);
 for(const [j,e] of (s.entries||[]).entries()){
  body+=`\n<span id="${map.sections[i].entries[j].id}"></span>\n\n### ${e.title}\n\n`;
  body+=field(e.body,`sections/${i}/entries/${j}/body`);
  for(const [k,x] of (e.examples||[]).entries()){
   const key=`sections/${i}/entries/${j}/examples/${k}`;count++;
   body+=`\n#### Example ${k+1}\n\nCommand\n\n`+fenced(`jq '${x.program}'`,'sh')+'\nInput\n\n'+fenced(x.input);
   if(x.output.length===0)body+='\nOutput: none\n';
   else for(const [l,o] of x.output.entries())body+=`\nOutput ${l+1}\n\n`+fenced(o);
   examples.push({key,program:x.program,input:x.input,outputs:x.output});
  }
 }
 page(`${String(i+1).padStart(2,'0')}-${map.sections[i].id}.md`,s.title,body);
}
page('15-manpage-appendix.md','Manpage introduction and epilogue',field(manual.manpage_intro,'manpage_intro')+'\n'+field(manual.manpage_epilogue,'manpage_epilogue'));
fs.mkdirSync(trial);fs.mkdirSync(trial+'/markdown');fs.mkdirSync(trial+'/rendered');
const diagnostics={at:new Date().toISOString(),status:'preliminary-full-scope-mechanical-trial-not-astro-or-content-review',inputSha256:hash(raw),pageCount:pages.length,fieldCount:fields.length,examples:count,entryCount:map.counters.entries,anchors:[],fields:[],pages:[],remaining:['Actual Astro rendering of all 16 pages','Cross-page link mapping and browser behavior','Upstream Python Markdown differences and manpage placeholders','Full content self-contained review','Japanese research/workload/scoring']};
for(const p of pages){
 fs.writeFileSync(trial+'/markdown/'+p.name,p.text,{flag:'wx'});
 const body=p.text.slice(p.text.indexOf('---\n',4)+4),html=String(pipeline.processSync(body));fs.writeFileSync(trial+'/rendered/'+p.name+'.html',html,{flag:'wx'});
 for(const f of fields){const begin=`<!-- jq-source-field:${f.key}:start -->\n`,end=`\n<!-- jq-source-field:${f.key}:end -->`;if(!p.text.includes(begin))continue;const idx=p.text.indexOf(begin)+begin.length,stop=p.text.indexOf(end,idx);assert(stop>=idx);const extracted=p.text.slice(idx,stop);assert.equal(hash(extracted),f.sha256);diagnostics.fields.push({key:f.key,sha256:f.sha256,bytes:f.bytes,exactSourceField:true,links:f.links,rawHtml:f.rawHtml,codeNodes:f.code.length});}
 const ast=parser.parse(body),codes=[];visit(ast,n=>{if(n.type==='code')codes.push(n.value);if(n.type==='html'){for(const m of n.value.matchAll(/<span id="([^"]+)"><\/span>/g))diagnostics.anchors.push(m[1]);}});
 for(const [i,s] of manual.sections.entries())if(p.name.startsWith(String(i+1).padStart(2,'0')+'-'))for(const e of s.entries||[])for(const x of e.examples||[]){assert(codes.includes(`jq '${x.program}'`));assert(codes.includes(x.input));for(const o of x.output)assert(codes.includes(o));}
 diagnostics.pages.push({name:p.name,bytes:Buffer.byteLength(p.text),sha256:hash(p.text),renderedSha256:hash(html),fencedCodeNodes:codes.length});
}
assert.equal(diagnostics.fields.length,fields.length);assert.equal(count,250);assert.equal(new Set(diagnostics.anchors).size,150);assert.equal(diagnostics.anchors.length,150);
fs.writeFileSync(trial+'/TRIAL_RESULT.json',JSON.stringify(diagnostics,null,2)+'\n',{flag:'wx'});
fs.writeFileSync(trial+'/EXAMPLES.json',JSON.stringify(examples,null,2)+'\n',{flag:'wx'});
console.log({pages:pages.length,sourceFields:fields.length,examples:count,anchors:diagnostics.anchors.length,rawHtmlFields:fields.filter(x=>x.rawHtml.length).map(x=>({key:x.key,rawHtml:x.rawHtml})),status:diagnostics.status});
