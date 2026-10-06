from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-sds-formal-859');E=Path(__file__).parent;N=W/'docs/notes/document-import/sds/v2-0-0';A=W/'apps/sds';S=A/'public/source/v2-0-0';B=Path('/private/tmp/libx-sds-source-package-861');assert not B.exists()
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def write(p,x):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
source=json.loads((N/'SOURCE_MANIFEST.json').read_text());bindings=[source[k] for k in ['selection','savedFormattingProof','preparation']]
bindings.extend(p['comparison'] for p in json.loads((N/'REVIEW_MANIFEST.json').read_text())['pages'])
for f in ['DRAFT_ASSEMBLY.json','DRAFT_CORRECTIONS.json','COVERAGE_RECORD_REPAIR.json','REVIEW_FROZEN.json','JA_CHECK.json']:
 p=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-860'/f;bindings.append({'path':str(p.relative_to(R)),'sha256':sha(p)})
for f in ['CANONICAL_RESULT.json','EN_CHECK.json','PREPARATION_INPUTS.json']:
 p=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-859'/f;bindings.append({'path':str(p.relative_to(R)),'sha256':sha(p)})
for ref in {r['path']:r for r in bindings}.values():
 p=R/ref['path'];assert sha(p)==ref['sha256'];q=W/ref['path'];q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
write(N/'EVIDENCE_INDEX.json',{'role':'Fixed input/static/code preservation and separate guide meaning review evidence; original references4 excluded from full meaning review','files':list({r['path']:r for r in bindings}.values())})
readme='''# SDS 2.0.0 Libx編集用ソース

固定コミット: f74b9b785b63c6d8ea312d7e7864df5267149c85
原典: https://github.com/antirez/sds/tree/f74b9b785b63c6d8ea312d7e7864df5267149c85

英語原文12ページと非公式日本語訳8章、固定版の全9ファイル、原通知、再生成入力、Libxの共有ビルドコードと設定を収録します。READMEの全文を8章に分けて英日で提供し、APIコメント・公開ヘッダー・割当ヘッダー・原ライセンスの4ページは英語のみです。全文意味レビューはガイド8章が対象です。原ソフトウェアのコード例は実行検証していません。

## 編集・再構築

1. ZIPを新しいディレクトリへ展開します。workspace/apps/sds/src/content/docs/v2-0-0/{en,ja}/ が表示用の編集可能なMarkdown原稿（raw HTMLを含む）です。public/source/v2-0-0/edited/ にも同じ原稿を収録しています。編集する場合は、配布原稿にも同じ変更を反映してください。
2. Node.js20以上とpnpm10.10.0を用い、workspaceで `pnpm install --frozen-lockfile` を実行します。依存本体は収録しないため、取得先への接続または事前取得済みstoreが必要です。
3. 展開に使ったZIPを workspace/apps/sds/public/source/v2-0-0/source.zip へコピーします。ZIP自身は再帰収録せず、これによりフッターの配布リンクを有効にします。
4. `pnpm --filter=apps-sds build` で apps/sds/dist/ を生成します。統合配信では /docs/sds/ へ配置します。原SDSソフトウェアをコンパイルする手順ではありません。

## 再生成・確認

Python3.10以上で仮想環境を作成し、 `python -m pip install -r docs/notes/document-import/sds/v2-0-0/requirements-content.txt` でMarkdown3.7を用意します。
`python scripts/importers/import-sds-2.0.0.py --output=/任意の空ディレクトリ` で、固定入力から英語12ページと保存済み日本語8章を再生成します。再翻訳や上流サイトの動作再現は行いません。
仮想環境のPythonを `SDS_PYTHON=/絶対パス/bin/python` に指定して `pnpm --filter=apps-sds check:content` と、ビルド後の `pnpm --filter=apps-sds check:rendered` を実行できます。
改変前の配布物では、固定9ファイルのSHA/Git blob、英日原稿20件・配布原稿・再生成一致、保存済みレビューの結び付け、リンクと描画本文を照合します。本文を改変した後も保存済みレビューが有効になるという意味ではありません。

## 原文と条件

固定9ファイルは workspace/docs/notes/document-import/sds/v2-0-0/source/original/ にあります。READMEは同版LICENSEのBSD2条項を明示参照します。sds.c・sds.h・sdsalloc.hには別のBSD3条項通知があり、Redisや貢献者名による推薦・宣伝の制限も全文保持します。各原通知・第三者成分・Libxの共有コードの条件を一括で置き換えるものではありません。同梱Libx LICENSEと各ファイルの通知を参照してください。
Libxの変更は、2026年10月の章分割・静的HTMLへの変換・非公式日本語訳・原典リンク・分離した編集注記です。原文の旧内部構造、結合/トリミングAPIの説明差、例の不備などはフッターで補います。原文自体の技術的正しさや現在のAPI全体を保証しません。
原文の語を削らず、3つの入れ子コードフェンスだけをインデント形式へ直した固定入力を保持します。コード改行はAstroでの再解釈を避けるためHTML参照で表しますが、表示時のコード文字・空白は原文どおりです。
SOURCE_COMPONENTS.jsonは全収録ファイルのSHA一覧であり、法的判断や新たなレビュー証明ではありません。
'''
S.mkdir(parents=True,exist_ok=True);(S/'README.md').write_text(readme);(A/'README.md').write_text('# SDS documentation\n\nSDS2.0.0の固定README全文を8章の英語原文と非公式日本語訳で提供します。APIコメント・ヘッダー等4ページは英語参照です。編集・再生成・再構築・条件は[配布ソース案内](public/source/v2-0-0/README.md)を参照してください。\n');(N/'requirements-content.txt').write_text('Markdown==3.7\n')
tracked=subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split('\0')
for rel in tracked:
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/')) or ('/' not in rel and p.is_file() and not rel.startswith('AGENTS')):
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/sds"\n  - "packages/*"\n')
for parent in [A,N]:
 for p in parent.rglob('*'):
  if not p.is_file() or p.is_symlink():continue
  rel=p.relative_to(W)
  if any(x in rel.parts for x in ['node_modules','dist','.astro']) or p==S/'source.zip':continue
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
for ref in json.loads((N/'EVIDENCE_INDEX.json').read_text())['files']:
 q=B/'workspace'/ref['path'];q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(W/ref['path'],q)
for rel in ['scripts/importers/import-sds-2.0.0.py']:
 q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(W/rel,q)
shutil.copy2(S/'README.md',B/'README.md');shutil.copy2(N/'SOURCE_MANIFEST.json',B/'SOURCE_MANIFEST.json')
c={'schemaVersion':1,'fixedCommit':source['commit'],'buildContextBase':'45d598a887d89a6d41405b30fbdbaa1514d13161','scope':'12 English originals/8 Japanese guides;4 references English only;complete fixed9 sourcefiles','preferredEditableInputs':'workspace/apps/sds/src/content/docs/v2-0-0/{en,ja}','terms':'README BSD2; code/header original BSD3 notices and Libx shared code notices retained, no blanket relicensing','sourceSelfExcluded':True,'files':[{'path':str(p.relative_to(B)),'sha256':sha(p)}for p in sorted(B.rglob('*'))if p.is_file()]};write(B/'SOURCE_COMPONENTS.json',c)
with zipfile.ZipFile(S/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():info=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o644<<16;z.writestr(info,p.read_bytes())
with zipfile.ZipFile(S/'source.zip')as z:
 assert len(z.namelist())==len(c['files'])+1;assert not any(n.endswith('/source.zip')for n in z.namelist())
 for row in c['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
write(E/'SOURCE_OFFER.json',{'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSha256':sha(S/'source.zip'),'bytes':(S/'source.zip').stat().st_size,'members':len(c['files'])+1,'preferredDocuments':20,'originalFiles':9,'allMemberHashesVerified':True,'recursiveSelfZIP':False,'sourcePackage':str(B),'publicPath':'/docs/sds/source/v2-0-0/source.zip','reconstruction':'pending'})
print('SDS sourcekit',len(c['files'])+1,'members',(S/'source.zip').stat().st_size,'bytes')
