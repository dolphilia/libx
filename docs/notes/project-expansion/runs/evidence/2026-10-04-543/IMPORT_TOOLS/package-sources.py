"""Package the reviewed xxHash document editing sources with deterministic metadata."""
from pathlib import Path
import hashlib, json, re, io, tarfile, gzip
root=Path(__file__).resolve().parents[3]
note=root/'docs/notes/document-import/xxhash/v0-8-4'
app=root/'apps/xxhash'
mp=json.loads((note/'CONTENT_MAP.json').read_text())
sm=json.loads((note/'SOURCE_MANIFEST.json').read_text())
tm=json.loads((note/'TRANSLATION_REVIEW_MANIFEST.json').read_text())
assert len(mp['items'])==len(tm['records'])==56 and not tm['remaining']
sha=lambda b:hashlib.sha256(b).hexdigest()
files={}
def add(name,p,expected=None):
 b=p.read_bytes()
 if expected is not None:assert sha(b)==expected,str(p)
 assert name not in files
 files[name]=b
for item in sm['files']:
 prefix='docs/notes/document-import/xxhash/v0-8-4/sources/'
 if item['path'].startswith(prefix):add('original/'+item['path'][len(prefix):],root/item['path'],item['sha256'])
for p in sorted((note/'notices').rglob('*')):
 if p.is_file():add('notices/'+str(p.relative_to(note/'notices')),p)
licenses={}
for item in mp['items']:
 rec=next(r for r in tm['records']if r['slug']==item['slug'])
 for role,lang in [('canonical','en'),('translation','ja')]:
  p=root/item[role];add('documents/'+lang+'/'+item['slug']+'.md',p,rec[role]['sha256'])
  licenses['documents/'+lang+'/'+item['slug']+'.md']=re.search(r'^licenseSource: "([^"]+)"',p.read_text(),re.M).group(1)
for name in ['CONTENT_MAP.json','SOURCE_MANIFEST.json','CANONICAL_GENERATION.json','LICENSE_APPLICATION_DESIGN.json','EDITORIAL_NOTES.en.json']:
 add('metadata/'+name,note/name)
add('metadata/project.config.jsonc',app/'src/config/project.config.jsonc')
for name in ['import.mjs','check-canonical.mjs','build-document-headings.mjs','package-sources.py']:
 add('tools/'+name,root/'scripts/document-import/xxhash'/name)
readme='''# xxHash 0.8.4 document editing sources / 文書の編集用ソース

Fixed upstream: https://github.com/Cyan4973/xxHash
Commit: c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0

## Contents / 内容

- original/: fixed upstream C, guides, specification, build inputs and license files used by this documentation.
- documents/en/ and documents/ja/: all 56 English canonical and Japanese Markdown pages, including the preserved original-code reference and original notices.
- notices/: original copyright, permission and warranty notices.
- metadata/: fixed-input/page/license mapping and conversion records.
- tools/: the canonical converter, preservation checker and this packaging script.

原文、英語定本、日本語Markdownを編集可能な形で提供します。原コード参照ページのコードとコード内コメントは原文を保持し、案内・参照説明を日本語化しています。
APIの原入力HTMLは固定ヘッダーとDoxygen設定から生成したものです。このパッケージには、そのCソース・設定と変換後のMarkdownを収録しています。生成器のUI画像・CSS・JavaScriptは含めていません。変換器の実行には対応するLibxリポジトリの環境と生成入力が必要です。

The original API input HTML was generated from the fixed header and Doxygen configuration. This package provides the C source/configuration and converted Markdown. Generator UI images, CSS and JavaScript are excluded. Running the converter requires the corresponding Libx repository environment and generated inputs.

## Notices and reuse / 通知と再利用

Each file retains its original notices. The project configuration and LICENSE_APPLICATION_DESIGN.json identify the applicable component and the annotated software-license fallback used where a separate document license was not found.
Library/API guides use BSD-2-Clause with that annotation; CLI/make/collision documentation uses GPL-2.0-or-later with that annotation; the CMake component uses CC0-1.0 with that annotation. The specification has its own explicit document permission. Explicit file notices take precedence.
GPL-covered translated/canonical document editing sources and the supplied conversion/packaging tools are provided under GPL-2.0-or-later. This statement does not replace the separate notices for other components. The complete GPL v2 text is in original/cli/COPYING.

各ファイルの原通知を保持しています。文書専用ライセンス未発見時のソフトウェアライセンス適用は、注釈付きの運用判断です。原通知を置き換えず、個別ファイルの明示条件を優先します。
ライブラリ・APIガイドは注釈付きBSD-2-Clause、CLI・make・衝突検査の文書は注釈付きGPL-2.0-or-later、CMake成分は注釈付きCC0-1.0です。仕様書には独自の明示的な文書許諾があります。
GPL対象の日本語訳・定本の編集用ソースと、同梱の変換・パッケージ化ツールはGPL-2.0-or-later条件で提供します。他の成分の原通知はそれぞれ保持します。GPL v2全文はoriginal/cli/COPYINGにあります。

Libx changes include format conversion, internal links, separate editorial notes and unofficial Japanese translations created in October 2026. Original substantive discrepancies are retained and identified in the documents.
Libxによる2026年10月の変更は、形式変換、内部リンク、明示した編集者注記、非公式の日本語訳です。原文の実質的な不整合は、本文中に明示して原記述を保持しています。

FILE_MANIFEST.json records SHA-256 for every included file and the document license-source IDs. It is a file-integrity inventory, not a legal determination or content-review certificate.
FILE_MANIFEST.jsonは各収録ファイルのSHA-256と文書のライセンス出典IDを記録した整合性一覧です。内容レビュー証明や法的判断ではありません。
'''
files['README.md']=readme.encode()
manifest={'version':'0.8.4','commit':sm['commit'],'documents':112,'files':[{'path':p,'sha256':sha(b),**({'licenseSource':licenses[p]}if p in licenses else{})}for p,b in sorted(files.items())]}
files['FILE_MANIFEST.json']=(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n').encode()
buffer=io.BytesIO()
with tarfile.open(fileobj=buffer,mode='w',format=tarfile.PAX_FORMAT)as tar:
 for name,b in sorted(files.items()):
  info=tarfile.TarInfo('libx-xxhash-0.8.4-document-sources/'+name);info.size=len(b);info.mtime=0;info.mode=0o644;info.uid=info.gid=0;info.uname=info.gname='';tar.addfile(info,io.BytesIO(b))
compressed=gzip.compress(buffer.getvalue(),mtime=0)
dest=app/'public/source/v0-8-4/libx-xxhash-0.8.4-document-sources.tar.gz';dest.write_bytes(compressed)
Path(str(dest)+'.sha256').write_text(sha(compressed)+'  '+dest.name+'\n')
print(json.dumps({'archive':str(dest.relative_to(root)),'sha256':sha(compressed),'bytes':len(compressed),'files':len(files),'documents':112},indent=2))
