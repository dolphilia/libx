import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
const require=createRequire('/private/tmp/libx-jq-footer-integration-20261004/package.json');
const {parseFragment}=require('parse5');
const dir='docs/notes/project-expansion/runs/evidence/2026-10-05-670';
const x=JSON.parse(fs.readFileSync(dir+'/ASTRO_PREPARED.json'));
const materials=JSON.parse(fs.readFileSync('docs/notes/project-expansion/runs/evidence/2026-10-05-668/MATERIAL_PROVENANCE.json')).assets;
const archive='rapidjson-f54b0e47a08782a6131cc3d60f94d038fa6e0a51.tar.gz';
const sha=b=>createHash('sha256').update(b).digest('hex');
const archiveSha=sha(fs.readFileSync(x.app+'/public/upstream/'+archive));
const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)];
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const results=[];
for(const r of x.rows){
  const p=x.workspace+'/'+r.file, raw=fs.readFileSync(p,'utf8');
  const separator=raw.indexOf('\n---\n');
  const body=raw.slice(separator+5);
  const imageUrls=walk(parseFragment(body)).filter(n=>n.nodeName==='img').map(n=>attr(n,'src')??'');
  const remote=imageUrls.filter(url=>!url.startsWith('/docs/rapidjson-trial/assets/'));
  const names=[...new Set(imageUrls.filter(url=>url.startsWith('/docs/rapidjson-trial/assets/')).map(url=>path.basename(url)))];
  const used=names.map(n=>{const a=materials.find(a=>a.file===n);if(!a)throw Error('Unknown material '+n);return a;});
  const lines=raw.slice(0,separator).split('\n');
  const i=lines.findIndex(l=>l.startsWith('documentContext: '));
  const contexts=JSON.parse(lines[i].slice('documentContext: '.length));
  contexts.push({kind:'source',html:`<p>定本はRapidJSON v1.1.0の固定コミットf54b0e47a08782a6131cc3d60f94d038fa6e0a51です。<a href="/docs/rapidjson-trial/upstream/${archive}">取得時の原文・ソース一式（tar.gz）</a>を提供します。SHA-256: <code>${archiveSha}</code>。アーカイブ内のlicense.txtと各ファイルの通知を保持しています。</p>`});
  contexts.push({kind:'editorial',html:'<p>Libxの運用方針に基づき、固定原文のDoxyfile.inをDoxygen 1.17.0で再生成し、本文をLibxの表示へ変換しています。上流の公開処理が指定するDoxygen 1.8.7とは生成器の版が異なります。<a href="/docs/rapidjson-trial/notices/Doxyfile.in">原生成設定</a>の出力ディレクトリ用プレースホルダーだけを実行環境へ置換しました。<a href="https://github.com/doxygen/doxygen/releases/tag/Release_1_17_0">生成器の公式配布元</a>。原文の説明とコードを保持し、索引アンカー等の補正は該当ページの注記に記載しています。</p>'});
  if(used.length){
    const descriptions=used.map(a=>a.originalSourceMatches.length
      ? `<li><code>${escape(a.file)}</code>: 固定原文の<code>${escape(a.originalSourceMatches.join(', '))}</code>に由来する画像を変更せず使用しています。</li>`
      : `<li><code>${escape(a.file)}</code>: 固定ヘッダーからDoxygen 1.17.0が生成した継承関係図です。</li>`).join('');
    contexts.push({kind:'source',html:`<p>本文画像の由来:</p><ul>${descriptions}</ul><p>原文画像にも、文書専用許諾の表記が確認できないため本体ライセンスを注釈付きで適用する運用判断を用いています。生成図は入力に基づく生成文書として扱っています（<a href="https://www.doxygen.nl/license.html">Doxygenの生成文書に関する説明</a>）。Doxygen本体や補助ソフトウェアのライセンスをMITへ変更する判断ではありません。原文の著作権・例外通知は<a href="/docs/rapidjson-trial/notices/LICENSE.txt">原ライセンス全文</a>と上記原文アーカイブを参照してください。ロゴは原文の説明文脈で使用し、公式運営や提携を示すものではありません。</p>`});
  }
  if(remote.length) contexts.push({kind:'editorial',html:`<p>原文に含まれる外部サービスのバッジ画像は原URLを保持しています。これらは固定した20点のローカル画像には含まれず、取得内容・再配布条件・版時点との対応は未検証です。</p><ul>${remote.map(url=>`<li><a href="${escape(url)}">${escape(url)}</a></li>`).join('')}</ul>`});
  // Combine general notes into one disclosure per kind; preserve scoped notes.
  const combined=[];
  for(const note of contexts){
    const existing=!note.context && combined.find(n=>n.kind===note.kind&&!n.context);
    if(existing) existing.html+=note.html;
    else combined.push(note);
  }
  lines[i]='documentContext: '+JSON.stringify(combined);
  const updated=lines.join('\n')+'\n---\n'+body;
  fs.writeFileSync(p,updated);
  r.sha256=sha(Buffer.from(updated));
  results.push({generated:r.generated,assets:used.map(a=>a.file),remoteImages:remote,sourceArchiveOffered:true,generatorNote:true,bodyBytePreserved:updated.slice(updated.indexOf('\n---\n')+5)===body});
}
fs.writeFileSync(dir+'/ASTRO_PREPARED.json',JSON.stringify(x,null,2)+'\n');
fs.writeFileSync(dir+'/FOOTER_MATERIAL_PREPARED.json',JSON.stringify({pages:results.length,archive,archiveSha,assetPages:results.filter(r=>r.assets.length).length,rows:results},null,2)+'\n');
console.log({pages:results.length,assetPages:results.filter(r=>r.assets.length).length});
