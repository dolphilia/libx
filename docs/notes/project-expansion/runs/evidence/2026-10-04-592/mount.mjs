import fs from 'node:fs';
import path from 'node:path';
import {readJsoncFile} from '/private/tmp/libx-jq-astro-trial-592/scripts/jsonc-utils.js';
const w='/private/tmp/libx-jq-astro-trial-592',a=w+'/apps/jq',t='/private/tmp/libx-jq-full-scope-trial-592',root='/Users/dolphilia/github/libx';
fs.symlinkSync('/private/tmp/libx-gperf-integration-20261004/node_modules',w+'/node_modules');
fs.symlinkSync('/private/tmp/libx-gperf-integration-20261004/templates/docs-site/node_modules',a+'/node_modules');
const config=readJsoncFile(a+'/src/config/project.config.jsonc');
config.language.supported=['en'];config.language.default='en';
const release=JSON.parse(fs.readFileSync(root+'/docs/notes/project-expansion/runs/evidence/2026-10-04-583/JQ_RELEASE.json'));
config.versioning.versions=[{id:'v1-8-2',name:'jq 1.8.2 / Manual 1.8',date:release.published_at,isLatest:true}];
config.translations.en.categories={guide:'Manual',license:'Original notices and license'};
config.licensing={defaultSource:'jq-manual-1-8',showAttribution:true,sourceLanguage:'en',sources:[{id:'jq-manual-1-8',name:'jq 1.8 Manual',author:'Stephen Dolan / jq project contributors',license:'CC BY 3.0 Unported',licenseUrl:'https://creativecommons.org/licenses/by/3.0/',sourceUrl:'https://jqlang.org/manual/v1.8/'}]};
fs.writeFileSync(a+'/src/config/project.config.jsonc',JSON.stringify(config,null,2)+'\n');
fs.rmSync(a+'/src/content/docs/v1',{recursive:true});
for(const p of ['search/v1','sidebar'])fs.rmSync(a+'/public/'+p,{recursive:true});
const base=a+'/src/content/docs/v1-8-2/en',dir=base+'/01-guide';fs.mkdirSync(dir,{recursive:true});
for(const [i,name]of fs.readdirSync(t+'/markdown').sort().entries()){
let md=fs.readFileSync(t+'/markdown/'+name,'utf8');md=md.replace('\n---\n',`\norder: ${i}\ncategoryOrder: 1\n---\n`);
md+='\n\n## Source and changes\n\n'+JSON.parse(fs.readFileSync(root+'/docs/notes/project-expansion/runs/evidence/2026-10-04-590/JQ_LICENSE_FULFILLMENT.json')).noticeEn+'\n\n[Original manual](https://jqlang.org/manual/v1.8/) · [Fixed source](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [License](https://creativecommons.org/licenses/by/3.0/) · [Original notices](/docs/jq/v1-8-2/en/02-license/01-original-notices/) · [Full legal code](/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/)\n';
fs.writeFileSync(dir+'/'+name,md,{flag:'wx'});
}
fs.mkdirSync(base+'/02-license');
const code=s=>{const run=Math.max(0,...Array.from(s.matchAll(/`+/g),m=>m[0].length));const f='`'.repeat(Math.max(3,run+1));return f+'text\n'+s+'\n'+f+'\n';};
for(const[name,title,input]of [['01-original-notices.md','Original jq COPYING','/private/tmp/libx-candidate-sources-585/jq/COPYING'],['02-cc-by-3-0.md','CC BY 3.0 Unported — Full legal code',root+'/docs/notes/project-expansion/runs/evidence/2026-10-04-585/CC_BY_3_0.txt']])fs.writeFileSync(base+'/02-license/'+name,`---\ntitle: ${JSON.stringify(title)}\ncategoryOrder: 2\n---\n\n`+code(fs.readFileSync(input,'utf8')),{flag:'wx'});
console.log({workspace:w,scope:'trial only, EN not translated',pages:18,productionChanges:false});
