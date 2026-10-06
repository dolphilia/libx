import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { unified } from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import { hashFile, selectionHash, operationId, readLedger, updateLedger, canStartNew, requiredChecks } from '../../../../../../scripts/project-expansion/ledger.mjs';

const root = process.cwd();
const workspace = '/private/tmp/libx-zstd-formal-838';
const base = 'docs/notes/project-expansion';
const ev = `${base}/runs/evidence/2026-10-05-838`;
const notes = 'docs/notes/document-import/zstd/v1-5-7';
const original = `${base}/runs/evidence/2026-10-02-103/source/zstd/members/doc/zstd_compression_format.md`;
const ref = p => ({ path: p, sha256: hashFile(path.join(root, p)) });
const write = (p, x) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, typeof x === 'string' ? x : JSON.stringify(x, null, 2) + '\n'); };
const source = fs.readFileSync(original, 'utf8');
assert.equal(hashFile(original), '81d08d9af1e3011190cae694d1b775b46db4743728733522a4119a5cb7558bb5');
const lines = source.trimEnd().split('\n');
const ranges = [
  [1,94,'01-introduction','Introduction and notices','導入と通知'],
  [95,319,'02-frames','Zstandard frames','Zstandardフレーム'],
  [320,612,'03-blocks','Blocks and literals','ブロックとリテラル'],
  [613,984,'04-sequences','Sequences and execution','シーケンスと実行'],
  [985,1027,'05-skippable-frames','Skippable frames','スキップ可能なフレーム'],
  [1028,1232,'06-fse','Entropy encoding and FSE','エントロピー符号化とFSE'],
  [1233,1473,'07-huffman','Huffman coding','Huffman符号化'],
  [1474,1537,'08-dictionary','Dictionary format','辞書形式'],
  [1538,lines.length,'09-appendices','Appendices and version changes','付録と版の変更履歴'],
];
const tree = unified().use(parse).use(gfm).parse(source);
const text = n => n.value ?? (n.children ?? []).map(text).join('');
const slug = s => s.toLowerCase().replace(/[^\p{L}\p{N}_\-\s]/gu, '').replace(/\s/g, '-');
const anchors = new Map();
const headingIds = new Map();
const headings = tree.children.filter(n => n.type === 'heading');
for (const h of headings) {
  const baseId = slug(text(h));
  let id = baseId;
  let suffix = 0;
  while (anchors.has(id)) id = `${baseId}-${++suffix}`;
  headingIds.set(h, id);
  anchors.set(id, ranges.find(r => h.position.start.line >= r[0] && h.position.start.line <= r[1])[2]);
}
const definitions = tree.children.filter(n => n.type === 'definition').map(n => source.slice(n.position.start.offset, n.position.end.offset));
const sourceUrl = 'https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md';
const notice = lines.slice(5,15).join('\n') + '\n';
write(`${notes}/source/zstd_compression_format.md`, source);
write(`${notes}/SOURCE_MANIFEST.json`, { schemaVersion:1, project:'zstd', upstreamVersion:'1.5.7', specificationVersion:'0.4.3', specificationDate:'2024-10-07', commit:'f8745da6ff1ad1e7bab384bd1f9d742439278e99', sourceUrl, source:ref(`${notes}/source/zstd_compression_format.md`), priorSelection:ref(`${ev}/SELECTION_REVIEW.json`), rights:'原仕様の翻訳明示許可。独自通知を英日本文/配布物で保持。BSD/MITへの置換なし。', scope:'固定仕様の全文・両付録・全変更履歴。CLI/APIは原典参照。', changes:'意味節9ページへの分割、固定原見出しID追加、内部参照のページ横断対応、原参照切れ1箇所補正。日本語は非公式翻訳。原文の技術監査や元サイトの機能再現は行わない。' });
const map = { schemaVersion:1, workspace, version:'v1-5-7', original:ref(`${notes}/source/zstd_compression_format.md`), pages:[] };
fs.rmSync(`${workspace}/apps/zstd/src/content/docs/v1`, { recursive:true, force:true });
for (let i=0; i<ranges.length; i++) {
  const [start,end,id,en,ja] = ranges[i];
  const part = lines.slice(start-1,end).join('\n')+'\n';
  write(`${notes}/source/parts/${id}.md`,part);
  let body = part;
  const localHeadings = headings.filter(h => h.position.start.line>=start && h.position.start.line<=end);
  for (const h of [...localHeadings].reverse()) {
    const position = lines.slice(start-1,h.position.start.line-1).join('\n').length + (h.position.start.line>start ? 1 : 0);
    body = body.slice(0,position) + `<a id="source-${headingIds.get(h)}"></a>\n\n` + body.slice(position);
  }
  // Reference definitions are globally scoped in the original single file.
  body += '\n'+definitions.filter(d => !part.includes(d)).join('\n')+'\n';
  body = body.replace(/\(#([a-zA-Z0-9_\-]+)\)/g, (_,a) => {
    if(a==='the-format-of-compressed_block')a='compressed-blocks';
    assert(anchors.has(a), `missing heading ${a}`);
    const page=anchors.get(a);
    return `(${page===id?'':`/docs/zstd/v1-5-7/en/01-specification/${page}`}#source-${a})`;
  });
  // Definition destinations have no parentheses.
  body = body.replace(/(^\[[^\n]+\]:\s*)#([a-zA-Z0-9_\-]+)/gm, (_,prefix,a) => {
    if(a==='the-format-of-compressed_block')a='compressed-blocks';
    assert(anchors.has(a), `missing definition ${a}`);
    return prefix+(anchors.get(a)===id?'':`/docs/zstd/v1-5-7/en/01-specification/${anchors.get(a)}`)+`#source-${a}`;
  });
  const context = [ {kind:'source',html:`<p>Zstandard 1.5.7 / format specification 0.4.3 (2024-10-07), Meta Platforms, Inc. and affiliates. <a href="${sourceUrl}">Fixed original</a>; <a href="/docs/zstd/source/v1-5-7/zstd_compression_format.md">Complete original Markdown</a>; <a href="/docs/zstd/source/v1-5-7/NOTICE.txt">Original permission notice</a>.</p>`}, {kind:'editorial',html:'<p>Libx provides the complete fixed format specification in nine static chapters. CLI, API and implementation behavior are outside this scope; see the original project. Original headings and internal links are adapted for chapter navigation. One original broken reference to compressed blocks is repaired. This is an unofficial edition; the original notice is preserved.</p>'} ];
  const metadata = {title:`Zstandard: ${en}`,description:`Format specification 0.4.3 — ${en}`,documentId:`zstd-format-${id}`,order:i+1,licenseSource:'zstd-format-0.4.3',documentContext:context};
  const canonical='---\n'+Object.entries(metadata).map(([k,v])=>`${k}: ${JSON.stringify(v)}`).join('\n')+'\n---\n\n'+body;
  const relative=`01-specification/${id}.md`;
  write(`${workspace}/apps/zstd/src/content/docs/v1-5-7/en/${relative}`,canonical);
  write(`${notes}/canonical/en/${relative}`,canonical);
  map.pages.push({id:relative,title:{en,ja},originalLines:[start,end],source:ref(`${notes}/source/parts/${id}.md`),canonical:ref(`${notes}/canonical/en/${relative}`),translation:'pending',contentReview:'pending'});
}
assert.equal(ranges.map(r=>lines.slice(r[0]-1,r[1]).join('\n')).join('\n')+'\n',source);
write(`${notes}/CONTENT_MAP.json`,map);
write(`${notes}/PROGRESS.json`,{schemaVersion:1,workspace,state:'canonical-ready',translatedPages:0,reviewedPages:0,totalPages:9,pages:map.pages.map(p=>({id:p.id,translation:'pending',review:'pending'})),nextAction:'1–5章（原文1–1027行）を1バッチで翻訳、別パス全文レビュー。残り4章未確認。'});
write(`${workspace}/apps/zstd/public/source/v1-5-7/zstd_compression_format.md`,source);
write(`${workspace}/apps/zstd/public/source/v1-5-7/NOTICE.txt`,notice);
const config={paths:{baseUrlPrefix:'/docs',projectSlug:'zstd',siteUrl:'https://libx.dev'},language:{default:'en',supported:['en','ja'],displayNames:{en:'English',ja:'日本語'}},translations:{en:{displayName:'Zstandard Format',displayDescription:'Zstandard 1.5.7: complete format specification 0.4.3',categories:{specification:'Format specification'}},ja:{displayName:'Zstandard 形式仕様',displayDescription:'Zstandard 1.5.7収録の形式仕様0.4.3全文',categories:{specification:'形式仕様'}}},versioning:{versions:[{id:'v1-5-7',name:'1.5.7 / format 0.4.3',date:'2025-02-19T21:50:11Z',isLatest:true}]},licensing:{defaultSource:'zstd-format-0.4.3',showAttribution:true,sourceLanguage:'en',sources:[{id:'zstd-format-0.4.3',name:'Zstandard Compression Format 0.4.3',author:'Meta Platforms, Inc. and affiliates',license:'Zstandard document permission notice',licenseUrl:sourceUrl+'#notices',sourceUrl}]}};
write(`${workspace}/apps/zstd/src/config/project.config.jsonc`,config);
const plan={workspace,scope:{description:'Zstandard 1.5.7固定形式仕様0.4.3全文（両付録・通知・履歴）を9ページで提供',pages:map.pages.map(p=>p.id)},sourceManifest:ref(`${notes}/SOURCE_MANIFEST.json`),contentMap:ref(`${notes}/CONTENT_MAP.json`),progress:ref(`${notes}/PROGRESS.json`),baselineCommit:'ee69b24fa1126eaeeb4381b3d79fd3663fe6c356',rootAppAbsent:!fs.existsSync('apps/zstd'),template:'正規create-project実行ログ。rootとの差は既存テンプレートruntime整形のみ、公開基準の実装を使用。'};
write(`${ev}/OPERATION_PLAN.json`,plan);
const ledger=readLedger(root); assert(canStartNew(ledger));
const candidate=ledger.candidates.candidates.find(c=>c.id==='zstd');
const review=JSON.parse(fs.readFileSync(`${ev}/SELECTION_REVIEW.json`));assert.equal(selectionHash(candidate),review.inputHash);
updateLedger(root,base,'CANDIDATES',ledger.candidates.revision,[ref(`${base}/CANDIDATES.json`),ref(`${ev}/SELECTION_REVIEW.json`)],d=>{
  const c=d.candidates.find(c=>c.id==='zstd');c.state='selected';c.decision='838:旧66点/6条件と別パス証拠を現行最低60点へ照合し採用。点数変更なし。静的Markdown9章で固定形式仕様全文を提供、CLI/APIは原典参照。翻訳・全文レビュー・正式検証は次工程。';c.resumeCondition='専用838で全9章翻訳・別パス全文レビュー・機械/代表表示/統合後、検証済み対象だけPages公開。';c.nextCheckAt=null;c.selectionReview={status:'passed',inputHash:review.inputHash,evidence:[ref(`${ev}/SELECTION_REVIEW.json`)]};
  for(const id of ['mdbook','rapidjson']){const c=d.candidates.find(c=>c.id===id);c.resumeCondition='838:現行最低60点と簡素な静的提供方針で再評価対象。保存済み権利/固定入力/範囲/日本語調査を再利用し、mdBookは実行デモ/独自JSを静的codeと原典リンク、RapidJSONはtooltipを静的参照へ置換する方式を代表で確認して再採点・別パス照合。未確認のためdeferred維持。';c.nextCheckAt=null;}
  return d;
});
const id=operationId('zstd','v1-5-7',plan.scope);
updateLedger(root,base,'OPERATIONS',ledger.operations.revision,[ref(`${base}/OPERATIONS.json`),ref(`${base}/CANDIDATES.json`),ref(`${ev}/OPERATION_PLAN.json`)],d=>{d.operations.push({id,candidateId:'zstd',appId:'zstd',kind:'new',version:'v1-5-7',scope:plan.scope,state:'canonical-ready',lastValidStage:'source-locked',publication:'not-requested',owner:'Codex; runtime not independently exposed',workspace,createdAt:new Date().toISOString(),ready:true,dependencies:[],artifacts:[plan.sourceManifest,plan.contentMap,plan.progress,ref(`${ev}/SELECTION_REVIEW.json`),ref(`${ev}/OPERATION_PLAN.json`),ref(`${ev}/TEMPLATE_CREATION.log`)],reviewManifest:null,checks:Object.fromEntries(requiredChecks.map(k=>[k,{status:'pending',evidence:[]}])),nextAction:'第1–5章を翻訳・別パス全文レビュー、バッチ末尾で構造/リンク/対象build/代表表示をまとめる。後半4章は未確認。',resumeCondition:'専用838とsource/map/progressを照合。rootアプリ未追加、他案件とrootユーザー差分を含めず、全9章/全gate後に公開。',excludedFromDeployment:true});return d;});
console.log(`Registered ${id}; 9 EN canonical chapters, no Japanese completion claims.`);
