from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-rapidjson-formal-853');E=Path(__file__).parent;N=W/'docs/notes/document-import/rapidjson/v1-1-0';A=W/'apps/rapidjson';S=A/'public/source/v1-1-0';B=Path('/private/tmp/libx-rapidjson-source-package-856');assert not B.exists()
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def write(p,x):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
source=json.loads((N/'SOURCE_MANIFEST.json').read_text());bindings=[]
for ref in [source['selection'],*source['provenance']]:
 p=R/ref['path'];assert sha(p)==ref['sha256'];q=W/ref['path'];q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q);bindings.append(ref)
for run in ['853','854','855']:
 for name in ['BATCH_CHECK.json','DELTA_CHECK.json','BROWSER_REPRESENTATIVE.json','LOCAL_HTTP.json']:
  p=R/f'docs/notes/project-expansion/runs/evidence/2026-10-06-{run}'/name
  if p.exists():q=W/p.relative_to(R);q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q);bindings.append({'path':str(p.relative_to(R)),'sha256':sha(p)})
write(N/'EVIDENCE_INDEX.json',{'role':'fixed source/static body and separate-review batch verification provenance; no original technical audit','files':bindings})
readme='''# RapidJSON 1.1.0 Libx編集用ソース

このZIPは、英語原文218ページと非公式日本語訳13章の編集可能なMarkdown（raw HTMLを含む）、固定原文、通知、静的再生成入力、Libx表示のビルドに使う共有コードと設定を収録しています。API・索引・ソースの205ページは英語原文です。日本語の全文意味レビューは利用ガイド13章が対象です。

## 編集と再構築

1. ZIPを新しいディレクトリへ展開します。`workspace/apps/rapidjson/src/content/docs/v1-1-0/{en,ja}/`が表示用の編集原稿です。`public/source/v1-1-0/edited/`の配布用原稿も同じ内容に更新します。生成済みHTMLを編集する必要はありません。
2. Node.js 20以上とpnpm 10.10.0を用い、`workspace`で`pnpm install --frozen-lockfile`を実行します。依存の版は同梱lockfileに固定しています。依存パッケージの本体は含まないため、通常の取得先への接続または事前取得済みstoreが必要です。
3. 自分が展開したZIPを`workspace/apps/rapidjson/public/source/v1-1-0/source.zip`へコピーします。ZIPは再帰収録を避けるため自身を含まず、フッターのダウンロード参照を有効にするために戻します。
4. `pnpm --filter=rapidjson build`で`workspace/apps/rapidjson/dist/`を生成します。公開URLのプレフィックスは`/docs/rapidjson/`です。Libx統合配信ではこの位置へ配置します。
5. 改変前の配布物は`pnpm --filter=rapidjson check:content`と`pnpm --filter=rapidjson check:rendered`で再生成、原稿、保存済み全文レビューのハッシュ、リンク、本文描画を照合できます。改変後に保存済みレビューがそのまま有効になるという意味ではありません。

## 静的入力からの再生成

`workspace`で`python3 scripts/importers/import-rapidjson-1.1.0.py --output=/任意の空ディレクトリ`を実行します。Python 3.10以上の標準ライブラリーだけを用い、保存済み英語Doxygen本文218件と、レビュー済み日本語入力13件から再生成します。原文に対応する3件の表示修正は固定ソースと前後のハッシュを確認して適用します。元サイトのJavaScriptやDoxygenの実行、再翻訳は行いません。元の固定原文一式は`upstream/rapidjson-f54b0e47a08782a6131cc3d60f94d038fa6e0a51.tar.gz`にあり、その固定コミット・SHA-256はSOURCE_MANIFESTに記録しています。

## 条件と提供範囲

RapidJSONの元の著作権、MIT License、個別コンポーネントの例外条件を`notices/LICENSE.txt`と原文アーカイブで保持しています。文書専用条件が確認できない部分にはソフトウェア本体のライセンスを注釈付きで適用するLibxの運用方針を示しています。図20点を変更せず保持し、外部バッジ4点は元URLを参照します。第三者素材、Doxygen自体、Libxの共有コードを一括でRapidJSONのMITに変更するものではありません。各ファイルの原通知と同梱したLibxのLICENSEを参照してください。

コード、表、図、アンカーと元の定義を静的表示します。定義はソースまたは例の後の参照ブロックです。動的ツールチップや元サイトの全機能を再現せず、詳しい情報は原典リンクで補います。2016年版の原文の技術的正しさや現在の性能を追加保証するものではありません。
'''
S.mkdir(parents=True,exist_ok=True);(S/'README.md').write_text(readme);(A/'README.md').write_text('# RapidJSON documentation\n\nRapidJSON 1.1.0の固定英語原文218ページと、利用ガイド13章の非公式日本語訳を提供します。API・索引・ソース205ページは英語のみです。編集・再生成・再構築・利用条件は[配布ソースの案内](public/source/v1-1-0/README.md)を参照してください。\n')
# Build context contains only this app; all shared packages retain their licences.
tracked=subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split('\0');allowed=[]
for rel in tracked:
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/')) or ('/' not in rel and p.is_file() and not rel.startswith('AGENTS')):allowed.append(rel)
for rel in allowed:
 p=W/rel;q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
# Standalone workspace prevents unrelated application discovery.
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/rapidjson"\n  - "packages/*"\n')
for parent in [A,N,W/'docs/notes/project-expansion/runs/evidence']:
 for p in parent.rglob('*'):
  if not p.is_file() or p.is_symlink():continue
  rel=p.relative_to(W)
  if any(x in rel.parts for x in ['node_modules','dist','.astro']) or p==S/'source.zip':continue
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
shutil.copy2(W/'scripts/importers/import-rapidjson-1.1.0.py',B/'workspace/scripts/importers/import-rapidjson-1.1.0.py')
shutil.copy2(S/'README.md',B/'README.md');shutil.copy2(N/'SOURCE_MANIFEST.json',B/'SOURCE_MANIFEST.json')
components={'schemaVersion':1,'fixedCommit':source['commit'],'originalArchive':source['archive'],'buildContextBase':'5a3372c9b0fcb3734f8ddf3fac6368e5dc6617cc','preferredEditableInputs':'workspace/apps/rapidjson/src/content/docs/v1-1-0/{en,ja}; saved replays and fixed originals in workspace/docs/notes/document-import/rapidjson/v1-1-0','scope':'218 EN originals and13 JA guides;205 references English only','terms':'RapidJSON original MIT and component exceptions retained; source annotations/third party materials/shared Libx code retain their notices; no blanket relicensing','sourceSelfExcluded':True,'files':[{'path':str(p.relative_to(B)),'sha256':sha(p)}for p in sorted(B.rglob('*'))if p.is_file()]};write(B/'SOURCE_COMPONENTS.json',components)
with zipfile.ZipFile(S/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():info=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o644<<16;z.writestr(info,p.read_bytes())
with zipfile.ZipFile(S/'source.zip')as z:
 assert len(z.namelist())==len(components['files'])+1;assert not any(n.endswith('/source.zip')for n in z.namelist())
 for row in components['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
write(E/'SOURCE_OFFER.json',{'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSha256':sha(S/'source.zip'),'bytes':(S/'source.zip').stat().st_size,'members':len(components['files'])+1,'preferredDocuments':231,'originalArchiveRetained':True,'allMemberHashesVerified':True,'recursiveSelfZIP':False,'sourcePackage':str(B),'publicPath':'/docs/rapidjson/source/v1-1-0/source.zip','limitations':['Rebuild uses saved fixed static bodies; upstream Doxygen regeneration and AI retranslation not performed.']})
print('Source kit:',len(components['files'])+1,'members,',(S/'source.zip').stat().st_size,'bytes')
