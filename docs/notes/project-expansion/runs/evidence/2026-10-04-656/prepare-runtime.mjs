import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
const dir='docs/notes/project-expansion/runs/evidence/2026-10-04-656';
const src='/private/tmp/libx-mdbook-trial-654/source';const app='/private/tmp/libx-mdbook-astro-trial-655/apps/mdbook-trial';
const deps='/private/tmp/libx-jq-footer-integration-20261004/node_modules/.pnpm';
const {parse}=await import(deps+'/acorn@8.14.1/node_modules/acorn/dist/acorn.mjs');
const {default:postcss}=await import(deps+'/postcss@8.5.3/node_modules/postcss/lib/postcss.mjs');
const sha=b=>createHash('sha256').update(b).digest('hex');
const book=fs.readFileSync(dir+'/book.js','utf8');const ast=parse(book,{ecmaVersion:'latest'});
const picks=[];
for(const name of ['playground_text','codeSnippets','clipboard']){
 const nodes=ast.body.filter(n=>n.type==='FunctionDeclaration'?n.id.name===name:n.type==='ExpressionStatement'&&n.expression.type==='CallExpression'&&n.expression.callee.type==='FunctionExpression'&&n.expression.callee.id?.name===name);
 assert.equal(nodes.length,1,name);const n=nodes[0];picks.push({name,start:n.start,end:n.end,sha256:sha(book.slice(n.start,n.end)),code:book.slice(n.start,n.end)});
}
const pub=app+'/public/mdbook-runtime';fs.mkdirSync(pub,{recursive:true});
const vendor=['playground_editor/ace.js','playground_editor/mode-rust.js','playground_editor/editor.js','playground_editor/theme-dawn.js','playground_editor/theme-tomorrow_night.js','js/clipboard.min.js','js/highlight.js'];
const boundary=JSON.parse(fs.readFileSync('docs/notes/project-expansion/runs/evidence/2026-10-04-651/MDBOOK_BOUNDARY.json'));
const records=[];
for(const rel of vendor){const original='crates/mdbook-html/front-end/'+rel;const data=fs.readFileSync(src+'/'+original);assert.equal(sha(data),boundary.records.find(x=>x.path===original).sha256);fs.writeFileSync(pub+'/'+path.basename(rel),data);records.push({source:original,output:'mdbook-runtime/'+path.basename(rel),sha256:sha(data)});}
fs.writeFileSync(pub+'/document-code.js','/* mdBook 0.5.4 MPL-2.0: exact functions extracted from fixed book.js; Libx excludes the original site-navigation and theme UI. */\n'+picks.map(x=>x.code).join('\n\n')+'\n');
const styleParts=[];
for(const rel of ['general.css','chrome.css']){
 const input=fs.readFileSync(dir+'/'+rel,'utf8');const sheet=postcss.parse(input);
 if(rel==='chrome.css')sheet.walkRules(rule=>{if(!/^(pre\b|\.hljs\.ace_editor\b)/.test(rule.selector))rule.remove();});
 sheet.walkRules(rule=>{rule.selectors=rule.selectors.map(selector=>'.mdbook-guide '+selector);});
 styleParts.push(sheet.toString());
}
// The original clipboard CSS embeds an Octicons MIT icon. Reuse the already included,
// fixed Font Awesome copy template instead; this preserves copy behavior and avoids a new icon source.
styleParts.push('.mdbook-guide .clip-button::before { content: none; }\n.mdbook-guide .buttons { visibility: visible; opacity: 1; }\n.mdbook-guide .buttons button:focus-visible { outline: 2px solid currentColor; }');
fs.writeFileSync(pub+'/document.css','/* Scoped mdBook 0.5.4 MPL-2.0 content and code styles, selectors prefixed by Libx. */\n.mdbook-guide { --bg: transparent; --fg: inherit; --links: #2563eb; --code-bg: #1f2937; --sidebar-fg: #e5e7eb; --sidebar-active: #60a5fa; --icons: #d1d5db; --icons-hover: #ffffff; --theme-hover: #374151; --theme-popup-bg: #1f2937; }\n'+styleParts.join('\n'));
fs.writeFileSync(pub+'/highlight.css',fs.readFileSync(src+'/crates/mdbook-html/front-end/css/highlight.css'));
const originalHtml=fs.readFileSync('/private/tmp/libx-mdbook-trial-654/source/guide/book/html/format/mdbook.html','utf8');
const icons=[...originalHtml.matchAll(/<template id=(fa-[\w-]+)>[\s\S]*?<\/template>/g)];assert.equal(icons.length,5);
const runtime='---\nconst base="/docs/mdbook-trial/mdbook-runtime/";\n---\n<link rel="stylesheet" href={base+"document.css"} />\n<link rel="stylesheet" href={base+"highlight.css"} />\n'+icons.map(m=>'<Fragment set:html={'+JSON.stringify(m[0])+'} />').join('\n')+'\n<script is:inline>window.playground_copyable=true;window.playground_line_numbers=true;</script>\n'+vendor.map(r=>'<script is:inline src={base+'+JSON.stringify(path.basename(r))+'}></script>').join('\n')+'\n<script is:inline src={base+"document-code.js"}></script>\n<script is:inline>\n// Libx integration: the original code functions do not include site-theme handling.\nfunction syncMdbookEditorTheme(){(window.editors||[]).forEach(e=>e.setTheme(document.documentElement.classList.contains("dark")?"ace/theme/tomorrow_night":"ace/theme/dawn"));}\nsyncMdbookEditorTheme();new MutationObserver(syncMdbookEditorTheme).observe(document.documentElement,{attributes:true,attributeFilter:["class"]});\ndocument.querySelectorAll(".mdbook-guide .clip-button").forEach(b=>{b.insertAdjacentHTML("beforeend",document.getElementById("fa-copy").innerHTML);});\n</script>\n<!-- Original renderer uses this exact external MathJax version; not a locally fixed binary. -->\n<script is:inline async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>\n';
fs.mkdirSync(app+'/src/components',{recursive:true});fs.writeFileSync(app+'/src/components/MdBookRuntime.astro',runtime);
const layout=app+'/src/layouts/DocLayout.astro';const original=fs.readFileSync(layout,'utf8');assert(!original.includes('MdBookRuntime'));fs.writeFileSync(dir+'/DocLayout.before.astro',original);fs.writeFileSync(layout,original.replace("import MainLayout from './MainLayout.astro';","import MainLayout from './MainLayout.astro';\nimport MdBookRuntime from '../components/MdBookRuntime.astro';")+'\n<MdBookRuntime />\n');
// Notices are trial assets, and will also be included in the preferred editable source offer.
fs.mkdirSync(pub+'/notices',{recursive:true});
for(const n of ['HIGHLIGHT_LICENSE.txt','MATHJAX_LICENSE.txt','CLIPBOARD_LINKED_LICENSE.html'])fs.copyFileSync(dir+'/'+n,pub+'/notices/'+n);
const ace=fs.readFileSync(dir+'/ace.js','utf8');assert(ace.startsWith('/*'));fs.writeFileSync(pub+'/notices/ACE_LICENSE.txt',ace.slice(2,ace.indexOf('*/')).trim()+'\n');
fs.writeFileSync(dir+'/RUNTIME_PREPARED.json',JSON.stringify({status:'prepared-unverified',sourceCommit:boundary.commit,version:'0.5.4',exactOriginalFunctions:picks.map(({code,...x})=>x),vendor:records,styles:'Original general/chrome code rules scoped to mdbook-guide; copy glyph uses existing Font Awesome template. Native button visibility improved for keyboard access.',originalIconTemplates:5,editor:'Original bundled Ace/editor/mode/theme files retained exact',math:'Exact original renderer external CDN MathJax2.7.1; bytes not locally fixed. Source sample formulas unchanged.',remaining:['footer notices integration','native code/editor/reset/copy/run/math and style checks','SUMMARY hierarchy/order/draft/pagination','preferred source offer closure'],conversionGatePassed:false},null,2)+'\n',{flag:'wx'});
console.log('固定版コード機能・Ace・SVG/CSS・原MathJax版の隔離配置完了');
