from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-wren-formal-864');E=Path(__file__).parent;N=W/'docs/notes/document-import/wren/v0-4-0';A=W/'apps/wren';S=A/'public/source/v0-4-0';B=Path('/private/tmp/libx-wren-source-package-870');assert not B.exists()
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def write(p,x):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
source=json.loads((N/'SOURCE_MANIFEST.json').read_text());bindings=[source[k] for k in ['selection','preparationCheck','knownSourceLimits']]
review=json.loads((N/'REVIEW_MANIFEST.json').read_text())
for row in review['pages']:bindings.extend([row['comparison'],row['metadataDelta'],{'path':row['postReviewChanges']['evidence'],'sha256':row['postReviewChanges']['evidenceSHA256']}])
for cycle in [865,866,867,868,869]:
 for f in (['REVIEW_FROZEN.json','JA_CHECK.json'] if cycle==865 else ['REVIEW_FROZEN.json','JA_CHECK.json','DRAFT_CORRECTIONS.json']):
  p=R/f'docs/notes/project-expansion/runs/evidence/2026-10-06-{cycle}'/f;bindings.append({'path':str(p.relative_to(R)),'sha256':sha(p)})
for row in json.loads((E/'LINK_DELTA.json').read_text())['rows']:bindings.append(row['before'])
bindings=list({r['path']:r for r in bindings}.values())
for ref in bindings:
 p=R/ref['path'];assert sha(p)==ref['sha256'];q=W/ref['path'];q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
write(N/'EVIDENCE_INDEX.json',{'scope':'24 complete separate EN/JA guide meaning reviews;17 API English originals excluded;full original conversion evidence reused with exact footer/link deltas','files':bindings})
readme='''# Wren 0.4.0 Libx編集用ソース

固定コミット: 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb
原典: https://github.com/wren-lang/wren/tree/4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb/doc/site

英語原文42ページ（本文41・MIT通知1）と非公式日本語訳24ガイド、固定原文45ファイル、保存した変換用HTML、原通知、共有ビルドコードと設定を収録します。API 17ページは未翻訳の英語原文で、全文意味レビュー対象は日本語24ガイドです。Metaの未執筆2ページも原文のままです。原ソフトウェアや例は実行しません。

## 編集と再構築

1. ZIPを新しいディレクトリへ展開します。workspace/apps/wren/src/content/docs/v0-4-0/{en,ja}/ は、raw HTMLを含む編集可能なMarkdown原稿です。public/source/v0-4-0/edited/ にも同じ原稿を収録しています。編集時は配布原稿へも同じ変更を反映してください。
2. Node.js20以上とpnpm10.10.0を用い、workspaceで `pnpm install --frozen-lockfile` を実行します。依存本体は収録しないため、取得先への接続または取得済みstoreが必要です。
3. 展開に使ったZIPを workspace/apps/wren/public/source/v0-4-0/source.zip へコピーします。ZIP自身は再帰収録しません。このコピーで配布リンクが有効になります。
4. `pnpm --filter=apps-wren build` で apps/wren/dist/ を生成します。統合配信時は /docs/wren/ へ配置します。Wrenソフトウェアをコンパイルする手順ではありません。

## 固定入力からの再生成と確認

Python3.10以上の標準ライブラリーで、workspaceから `python3 scripts/importers/import-wren-0.4.0.py --output=/任意の空ディレクトリ` を実行できます。保存した固定HTMLと版情報から英語42ページを再生成し、保存済み日本語24ガイドをSHA照合して出力します。再翻訳、原著のPython生成器の実行、元サイト固有の機能再現は行いません。
`pnpm --filter=apps-wren check:content`、ビルド後に `pnpm --filter=apps-wren check:rendered` を実行できます。必要ならPythonを `WREN_PYTHON=/絶対パス/bin/python` で指定します。改変前の配布物では、固定原文45件のSHA/Git blob、原稿66件・配布原稿・再生成の一致、24全文レビューとリンク変更の結び付け、内部リンク、本文と前後の導線を確認します。本文改変後も保存済みのレビューが有効になるという意味ではありません。

## 原文と条件

固定原文は workspace/docs/notes/document-import/wren/v0-4-0/source/original/ にあります。Wrenの原MIT通知は、関連文書を明示しており、著者名と許諾・免責の全文を保持します。同梱Libx LICENSEおよび各共有コード・第三者成分の通知も参照してください。各ファイルの条件を一括で置き換えるものではありません。
Libxの変更は、2026年10月の静的HTML化、見出し・内部リンク・表の表示調整、非公式日本語訳、原典リンク、出典・編集注記です。ClassesのTODO・不完全な例、VM設定やモジュールの説明不足を補作せず、公開ヘッダー・固定原典と注記へ案内します。性能値・著者の見解は固定版の記載であり、現在の性能比較や技術的正しさを保証するものではありません。CLI、ブログ、実行デモは原典リンクで案内します。
コード内コメントは原文を保持します。コード改行・Cヘッダーの角括弧はAstroによる再解釈を避けるHTML参照で保存し、表示時のコード文字・空白は原文どおりです。性能図は固定値21本の静的な棒と4表として提供します。
SOURCE_COMPONENTS.jsonは収録ファイルのSHA一覧であり、新たな意味レビューや法的判断の証明ではありません。
'''
S.mkdir(parents=True,exist_ok=True);(S/'README.md').write_text(readme);(A/'README.md').write_text('# Wren documentation\n\n固定0.4.0の英語42ページと非公式日本語訳24ガイドを提供します。API17ページは英語原文です。編集・再生成・再構築・条件は[配布ソース案内](public/source/v0-4-0/README.md)を参照してください。\n')
tracked=subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split('\0')
for rel in tracked:
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/')) or ('/' not in rel and p.is_file() and not rel.startswith('AGENTS')):
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/wren"\n  - "packages/*"\n')
for parent in [A,N]:
 for p in parent.rglob('*'):
  if not p.is_file() or p.is_symlink():continue
  rel=p.relative_to(W)
  if any(x in rel.parts for x in ['node_modules','dist','.astro']) or p==S/'source.zip':continue
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
for ref in bindings:
 q=B/'workspace'/ref['path'];q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(W/ref['path'],q)
q=B/'workspace/scripts/importers/import-wren-0.4.0.py';q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(W/'scripts/importers/import-wren-0.4.0.py',q)
shutil.copy2(S/'README.md',B/'README.md');shutil.copy2(N/'SOURCE_MANIFEST.json',B/'SOURCE_MANIFEST.json')
c={'schemaVersion':1,'fixedCommit':source['commit'],'buildContextBase':'45d598a887d89a6d41405b30fbdbaa1514d13161','scope':'42 English originals/24 Japanese guides;17 API English only;45 fixed source files','preferredEditableInputs':'workspace/apps/wren/src/content/docs/v0-4-0/{en,ja}','terms':'Original MIT including associated documentation;Libx and individual third-party notices retained','sourceSelfExcluded':True,'files':[{'path':str(p.relative_to(B)),'sha256':sha(p)} for p in sorted(B.rglob('*')) if p.is_file()]};write(B/'SOURCE_COMPONENTS.json',c)
with zipfile.ZipFile(S/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():info=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o644<<16;z.writestr(info,p.read_bytes())
with zipfile.ZipFile(S/'source.zip') as z:
 assert len(z.namelist())==len(c['files'])+1 and not any(n.endswith('/source.zip') for n in z.namelist())
 for row in c['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
write(E/'SOURCE_OFFER.json',{'status':'passed-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSha256':sha(S/'source.zip'),'bytes':(S/'source.zip').stat().st_size,'members':len(c['files'])+1,'preferredDocuments':66,'originalFiles':45,'allMemberHashesVerified':True,'recursiveSelfZIP':False,'sourcePackage':str(B),'publicPath':'/docs/wren/source/v0-4-0/source.zip','reconstruction':'pending'})
print('Wren sourcekit',len(c['files'])+1,'members',(S/'source.zip').stat().st_size,'bytes;reconstruction pending')
