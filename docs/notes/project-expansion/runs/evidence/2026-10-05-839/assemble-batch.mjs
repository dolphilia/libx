import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
const notes='docs/notes/document-import/zstd/v1-5-7';
const map=JSON.parse(fs.readFileSync(`${notes}/CONTENT_MAP.json`));
for(const page of map.pages){
  const draft=`${notes}/drafts/ja/${page.id}`;
  if(!fs.existsSync(draft))continue;
  const en=matter(fs.readFileSync(`${notes}/canonical/en/${page.id}`,'utf8'));
  const data={...en.data,title:`Zstandard: ${page.title.ja}`,description:`形式仕様0.4.3 — ${page.title.ja}`};
  data.documentContext=[{kind:'source',html:'<p>Meta Platforms, Inc. and affiliatesによるZstandard 1.5.7収録の形式仕様0.4.3（2024-10-07）。<a href="https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md">固定原典</a>・<a href="/docs/zstd/source/v1-5-7/zstd_compression_format.md">原文Markdown全文</a>・<a href="/docs/zstd/source/v1-5-7/NOTICE.txt">原許諾通知</a>。</p>'},{kind:'editorial',html:'<p>Libxによる非公式日本語訳です。固定形式仕様の全文を9章の静的文書として提供します。CLI・API・実装固有の挙動は収録範囲外で、原典を参照してください。分割に伴い原見出しIDを追加し内部参照を対応付け、圧縮ブロックへの原参照切れ1件を補正しました。英語の原通知を保持し、第1章には通知の日本語訳を併記しています。</p>'}];
  if (page.id.endsWith('/07-huffman.md')) data.documentContext[1].html += '<p>末尾のABEFの符号化表は原文のまま掲載しています。そのE/Fの符号は、上の接頭符号表と一致していません。固定原典と参照実装を併せて参照してください。</p>';
  const result='---\n'+Object.entries(data).map(([k,v])=>`${k}: ${JSON.stringify(v)}`).join('\n')+'\n---\n\n'+fs.readFileSync(draft,'utf8');
  for(const prefix of [`${notes}/translations/ja`,`${map.workspace}/apps/zstd/src/content/docs/v1-5-7/ja`]){
    const out=path.join(prefix,page.id);fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,result);
  }
}
