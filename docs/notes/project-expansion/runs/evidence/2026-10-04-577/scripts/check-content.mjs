// Read-only preservation checks; separate full content review remains required.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const root = path.resolve(fileURLToPath(new URL('../../../', import.meta.url)));
const require = createRequire(root + '/package.json');
const parse = require('parse5');
const note = 'docs/notes/document-import/gperf/3.3';
const app = 'apps/gperf';
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(path.join(root, p))).digest('hex');
const walk = n => [n, ...(n.childNodes ?? []).flatMap(walk)];
const text = n => n.value ?? (n.childNodes ?? []).map(text).join('');
const attr = (n, key) => n.attrs?.find(a => a.name === key)?.value;
const tags = (nodes, tag) => nodes.filter(n => n.tagName === tag);
const sorted = items => [...items].sort();
const translation = JSON.parse(read(note + '/translations/TRANSLATION_MANIFEST-571.json'));
for (const item of translation.files) assert.equal(sha(note + '/translations/' + item.path), item.sha256, item.path);
const pairs = [
  ...translation.guideSections.map(s => ({id:s.id, source:s.source, translation:s.translation})),
  {id:'header', source:'GUIDE_HEADER.source.html', translation:'GUIDE_HEADER.ja.html'},
  {id:'CLI', source:'CLI.source.html', translation:'CLI.ja.html'}
];
const structures = [];
for (const pair of pairs) {
  const source = walk(parse.parseFragment(read(note + '/translations/' + pair.source)));
  const ja = walk(parse.parseFragment(read(note + '/translations/' + pair.translation)));
  for (const tag of ['pre', 'code', 'samp', 'var']) {
    const a = tags(source, tag).map(text), b = tags(ja, tag).map(text);
    assert.deepEqual(tag === 'pre' ? b : sorted(b), tag === 'pre' ? a : sorted(a), pair.id + ':' + tag);
  }
  for (const tag of ['p','li','ul','ol','dl','dt','dd','table','tr','td','th'])
    assert.equal(tags(ja,tag).length,tags(source,tag).length,pair.id + ':' + tag);
  assert.deepEqual(ja.filter(n=>/^h[1-6]$/.test(n.tagName??'')).map(n=>n.tagName),source.filter(n=>/^h[1-6]$/.test(n.tagName??'')).map(n=>n.tagName), pair.id + ':heading levels');
  for (const key of ['name','href','id'])
    assert.deepEqual(sorted(tags(ja,'a').map(n=>attr(n,key)).filter(Boolean)),sorted(tags(source,'a').map(n=>{const value=attr(n,key);return key==='href'&&value?.startsWith('gperf.html#')?value.slice('gperf.html'.length):value;}).filter(Boolean)),pair.id + ':anchor '+key);
  structures.push({id:pair.id,pre:tags(source,'pre').length,definitions:tags(source,'dt').length});
}
const review = JSON.parse(read(app + '/meta/reviewed-content.json'));
assert.equal(review.completedPages, 2); assert.equal(review.unreviewedPages,0);
const expected = ['01-guide/01-user-guide.md','01-guide/02-cli.md'];
assert.deepEqual(sorted(review.scope), sorted(expected));
assert.deepEqual(sorted(review.pages.map(p=>p.id)), sorted(expected));
for (const p of review.pages) {
  assert.equal(p.status,'passed'); assert.equal(p.method,'ai-content-review'); assert.equal(p.separateReviewPass,true);
  for (const role of ['source','canonical','translation']) assert.equal(sha(p[role].path),p[role].sha256,p.id + ':' + role);
}
const allFiles = folder => fs.readdirSync(folder,{withFileTypes:true}).flatMap(x=>x.isDirectory()?allFiles(path.join(folder,x.name)):[path.join(folder,x.name)]);
for (const locale of ['en','ja']) {
  const prefix = path.join(root, app, 'src/content/docs/v3-3',locale);
  assert.deepEqual(sorted(allFiles(prefix).filter(p=>p.endsWith('.md')).map(p=>path.relative(prefix,p))), sorted(expected));
  for (const id of expected) {
    const md=read(app+'/src/content/docs/v3-3/'+locale+'/'+id);
    assert(md.includes('licenseSource: "'+(id.endsWith('01-user-guide.md')?'gperf-guide':'gperf-cli')+'"'));
    assert(!/\b(?:TODO|TRANSLATION_PENDING)\b/.test(md));
  }
}
const generation = JSON.parse(execFileSync(process.execPath,[path.join(root,'scripts/document-import/gperf/import.mjs'),'--check'],{encoding:'utf8'}));
const output={status:'passed-mechanical-not-new-content-review',scopePages:2,documentFiles:4,sourceTranslationPairs:pairs.length,structures,regeneration:generation,reviewBinding:'previous separate full review; current source/canonical/translation SHA exact',notVerified:['rendered site','browser interaction','integration and publication']};
const out=process.argv.find(x=>x.startsWith('--output='));if(out)fs.writeFileSync(out.slice(9),JSON.stringify(output,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({status:output.status,documentFiles:4,pairs:pairs.length,regenerationOutputs:generation.outputs},null,2));
