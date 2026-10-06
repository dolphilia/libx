import fs from'node:fs';import path from'node:path';import assert from'node:assert/strict';
import{stripJsonComments}from'/private/tmp/libx-official-uthash-20261002/scripts/jsonc-utils.js';
const root='/private/tmp/libx-official-uthash-20261002',base=root+'/docs/notes/document-import/uthash/v2-4-0',app=root+'/apps/uthash';
const map=JSON.parse(fs.readFileSync(base+'/CONTENT_MAP.json')),notes=JSON.parse(fs.readFileSync(base+'/review/2026-10-02-189/PROVENANCE_NOTES.json')),
 config=JSON.parse(stripJsonComments(fs.readFileSync(app+'/src/config/project.config.jsonc','utf8')));
assert.equal(config.paths.projectSlug,'uthash');
fs.rmSync(app+'/src/content/docs',{recursive:true});fs.rmSync(app+'/public/sidebar',{recursive:true,force:true});fs.rmSync(app+'/public/search',{recursive:true,force:true});
config.language={default:'en',supported:['en'],displayNames:{en:'English',ja:'日本語'}};
config.translations={en:{displayName:'uthash Documentation',displayDescription:'uthash 2.4.0 official guides and API reference',categories:{guides:'Guides',license:'License'}},
 ja:{displayName:'uthash ドキュメント',displayDescription:'uthash 2.4.0 の公式ガイドとAPIリファレンスの非公式日本語訳',categories:{guides:'ガイド',license:'ライセンス'}}};
config.versioning.versions=[{id:'v2-4-0',name:'uthash 2.4.0',date:'2026-06-25T00:00:00.000Z',isLatest:true}];
const policy={en:'No separate documentation license statement was found. Under the recorded policy, the software BSD-1-Clause license is applied to the documentation with this annotation. This is an operational decision, not newly discovered documentation-specific permission.',
 ja:'文書専用ライセンスの表記が確認できないため、ソフトウェア本体のBSD-1-Clauseを文書にも適用する運用判断で掲載しています。文書専用の新たな許諾を発見したという意味ではありません。'};
const change={en:'Libx converted the official upstream documents to the format used by this site. Original examples and notices are preserved.',
 ja:'この文書はLibxによる非公式日本語訳です。原文から日本語への翻訳と配信用形式への変換を行っています。原文の例と通知を保持しています。'};
config.licensing={defaultSource:map.pages[0].licenseSource,showAttribution:true,sourceLanguage:'en',sources:map.pages.map(p=>({id:p.licenseSource,name:p.title,
 author:p.authors.join('; ')||'Document author unspecified; repository copyright holder: Troy D. Hanson',license:'BSD-1-Clause (software license applied with annotation)',
 licenseUrl:'/docs/uthash/v2-4-0/en/02-license/01-license/',sourceUrl:p.sourceURL,copyrightNotice:fs.readFileSync(base+'/source/LICENSE','utf8').split('\n')[0],
 provenanceNotes:[policy,change,...(p.sourceVersionHeader?[{en:'Original document version header: '+p.sourceVersionHeader,ja:'原文の版表記: '+p.sourceVersionHeader}]:[]),...notes.notes.filter(n=>n.pageId===p.id).map(n=>({en:n.en,ja:n.ja}))]}))};
fs.writeFileSync(app+'/src/config/project.config.jsonc',JSON.stringify(config,null,2)+'\n');
for(const p of map.pages){const target=app+'/src/content/docs/v2-4-0/en/'+p.id;fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(root+'/'+p.canonical,target,fs.constants.COPYFILE_EXCL);}
fs.mkdirSync(app+'/public/assets/uthash-v2-4-0',{recursive:true});fs.copyFileSync(base+'/generated/assets/rss.png',app+'/public/assets/uthash-v2-4-0/rss.png');
let astro=fs.readFileSync(app+'/astro.config.mjs','utf8');astro="import { remarkSourceHeadingIds } from '../../scripts/plugins/remark-uthash-source-heading-ids.js';\n"+astro;
astro=astro.replace('export default defineDocsConfig({','const docsConfig = defineDocsConfig({').replace('  base: projectConfig.paths.baseUrl,','  base: projectConfig.paths.baseUrl,\n  rootDir: __dirname,');
astro+="\nexport default { ...docsConfig, markdown: { ...docsConfig.markdown, smartypants: false, remarkPlugins: [...docsConfig.markdown.remarkPlugins, remarkSourceHeadingIds] } };\n";fs.writeFileSync(app+'/astro.config.mjs',astro);
const pkg=JSON.parse(fs.readFileSync(app+'/package.json'));pkg.scripts.prebuild='libx-docs-prepare --projects=uthash && node ../../scripts/importers/build-uthash-search-index.mjs';
pkg.scripts['check:content']='node check-content.mjs';fs.writeFileSync(app+'/package.json',JSON.stringify(pkg,null,2)+'\n');
console.log(JSON.stringify({pages:map.pages.length,notes:notes.notes.length,sourceMetadata:true,languages:['en'],ja:'pending all8 translation'}));
