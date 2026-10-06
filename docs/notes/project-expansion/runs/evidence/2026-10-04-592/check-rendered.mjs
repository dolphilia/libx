import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
const req=createRequire(import.meta.url),parse=req('/private/tmp/libx-gperf-integration-20261004/node_modules/parse5'),w='/private/tmp/libx-jq-astro-trial-592',trial='/private/tmp/libx-jq-full-scope-trial-592',dist=w+'/apps/jq/dist';
const proof=JSON.parse(fs.readFileSync(trial+'/TRIAL_RESULT.json'));
const sha=s=>crypto.createHash('sha256').update(s).digest('hex'),walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],txt=n=>n.tagName==='div'&&(attr(n,'class')||'').split(/\s+/).includes('docs-code-toolbar')?'':n.value??(n.childNodes||[]).map(txt).join(''),attr=(n,k)=>n.attrs?.find(x=>x.name===k)?.value,norm=s=>s.replace(/\s+/g,' ').trim();
const article=html=>walk(parse.parse(html)).find(n=>n.tagName==='article'&&(attr(n,'class')||'').includes('sl-markdown-content'));
const reports=[];let local=0,external=0;
for(const p of proof.pages){
 const name=p.name.replace(/\.md$/,''),dst=dist+'/v1-8-2/en/01-guide/'+name+'/index.html',raw=fs.readFileSync(dst,'utf8'),a=article(raw);assert(a,name);
 const kids=a.childNodes,stop=kids.findIndex(n=>n.tagName==='h2'&&norm(txt(n))==='Source and changes');assert(stop>0);
 const scope={childNodes:kids.slice(0,stop)},expected=parse.parseFragment(fs.readFileSync(trial+'/rendered/'+p.name+'.html','utf8')),actual=walk(scope),original=walk(expected);
 assert.equal(norm(txt(scope)),norm(txt(expected)),name+' full rendered text');
 const heading=ns=>ns.filter(n=>/^h[1-6]$/.test(n.tagName||'')).map(n=>[n.tagName,norm(txt(n))]);assert.deepEqual(heading(actual),heading(original),name+' all headings');
 const before=original.filter(n=>n.tagName==='pre').map(txt),after=actual.filter(n=>n.tagName==='pre').map(txt);
 const toolbars=actual.filter(n=>n.tagName==='div'&&(attr(n,'class')||'').split(/\s+/).includes('docs-code-toolbar'));assert.equal(toolbars.length,after.length);for(const bar of toolbars){const buttons=walk(bar).filter(n=>n.tagName==='button');assert.equal(buttons.length,1);assert((attr(buttons[0],'class')||'').split(/\s+/).includes('docs-code-copy'));assert.equal(attr(buttons[0],'data-copy-label'),'Copy code');}
 assert.deepEqual(after,before.map(x=>x.endsWith('\n')?x.slice(0,-1):x),name+' ordered PRE, only renderer terminal LF');
 const inline=ns=>ns.filter(n=>n.tagName==='code'&&n.parentNode?.tagName!=='pre').map(n=>norm(txt(n)));assert.deepEqual(inline(actual),inline(original),name+' inline codes');
 const spans=ns=>ns.filter(n=>n.tagName==='span'&&attr(n,'id')).map(n=>attr(n,'id'));assert.deepEqual(spans(actual),spans(original),name+' original anchors');
 for(const n of walk(a).filter(n=>n.tagName==='a'&&attr(n,'href'))){const h=attr(n,'href'),u=new URL(h,'https://trial.invalid/docs/jq/v1-8-2/en/01-guide/'+name+'/');if(u.origin!=='https://trial.invalid'){external++;continue;}local++;assert(u.pathname.startsWith('/docs/jq/'));const dest=dist+u.pathname.slice('/docs/jq'.length)+(u.pathname.endsWith('/')?'index.html':'');assert(fs.existsSync(dest),'missing '+h);if(u.hash){const ns=walk(parse.parse(fs.readFileSync(dest,'utf8')));assert(ns.some(x=>attr(x,'id')===decodeURIComponent(u.hash.slice(1))||attr(x,'name')===decodeURIComponent(u.hash.slice(1))),'missing fragment '+h);}}
 assert(!actual.some(n=>['options','files','filter'].includes(n.tagName)),name+' swallowed placeholder');
 reports.push({name,inputSha256:p.sha256,renderedSha256:sha(raw),wholeRenderedTextExact:true,headings:heading(actual).length,pre:after.length,inlineCode:inline(actual).length,originalAnchors:spans(actual).length,orderedPreExactExceptSingleRendererTerminalLf:true});
}
for(const [name,input]of [['01-original-notices','/private/tmp/libx-candidate-sources-585/jq/COPYING'],['02-cc-by-3-0','/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-04-585/CC_BY_3_0.txt']]){const out=article(fs.readFileSync(dist+'/v1-8-2/en/02-license/'+name+'/index.html','utf8'));const pres=walk(out).filter(n=>n.tagName==='pre');assert.equal(pres.length,1);assert.equal(txt(pres[0]),fs.readFileSync(input,'utf8'),name+' full protected notice text');}
const output={at:new Date().toISOString(),status:'passed-full-astro-mechanical-fidelity-not-content-review',baselineCommit:'5961d7b32447ca14c681c9201c031c45251e8052',pages:reports,manualPages:16,originalNoticePages:2,sourceFields:165,exampleAssociationChecks:proof.exampleAssociationChecks.length,examples:250,originalAnchors:reports.reduce((n,p)=>n+p.originalAnchors,0),localLinksChecked:local,externalLinksPreserved:external,corrections:proof.corrections,limitations:['comparison uses remark reference; upstream Python Markdown parity not yet assessed','browser keyboard/mobile and anchor interaction pending','full content self-contained review pending','Japanese scope/workload/scoring pending'],terminalLfRule:'remark HTML adds one final LF to every pre/code; Astro Shiki emits code value without that renderer-added LF. Compare ordered displayed source removing precisely one terminal LF from reference, preserving any original terminal LF.'};
fs.writeFileSync(trial+'/ASTRO_RENDERED.json',JSON.stringify(output,null,2)+'\n',{flag:'wx'});console.log({status:output.status,pages:16,noticePages:2,examples:250,anchors:output.originalAnchors,localLinks:local,externalLinks:external});
