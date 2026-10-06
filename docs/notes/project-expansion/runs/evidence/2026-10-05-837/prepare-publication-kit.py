from pathlib import Path
import shutil,json,hashlib,os
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-lz4-integration-833/libx-lz4-sourcekit');kit=Path('/private/tmp/libx-lz4-publication-kit-837');ev=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-837';assert not kit.exists();skip={'node_modules','dist','.astro','.tmp','.git','__pycache__','.DS_Store','SOURCEKIT_MANIFEST.json','SOURCEKIT_INVENTORY.json','SOURCEKIT_README.md'}
def ignore(parent,names):return [n for n in names if n in skip or n.endswith('.tsbuildinfo') or n=='LIBX_LZ4_SOURCEKIT.tar.gz']
shutil.copytree(w,kit,ignore=ignore)
script='''from pathlib import Path
import gzip,tarfile,json,hashlib,io
root=Path(__file__).resolve().parents[1];out=root/'apps/lz4/public/source/v1-10-0/LIBX_LZ4_SOURCEKIT.tar.gz'
skip={'node_modules','dist','.astro','.tmp','.git','__pycache__','.DS_Store'}
files=sorted(p for p in root.rglob('*') if p.is_file() and not any(x in skip for x in p.relative_to(root).parts) and p!=out and p.name!='SOURCEKIT_MANIFEST.json' and not p.name.endswith('.tsbuildinfo'))
assert all(not p.is_symlink() for p in files)
manifest={'format':1,'scope':'LZ4 1.10.0 Libx complete preferred modification source; original fixed source/translated documents/build scripts/shared implementation/lock/notices','files':[{'path':p.relative_to(root).as_posix(),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'bytes':p.stat().st_size} for p in files]}
m=root/'SOURCEKIT_MANIFEST.json';m.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\\n');files.append(m);out.parent.mkdir(parents=True,exist_ok=True)
with out.open('wb') as raw,gzip.GzipFile(filename='',mode='wb',fileobj=raw,mtime=0) as gz,tarfile.open(fileobj=gz,mode='w') as t:
 for p in sorted(files):
  name='libx-lz4-sourcekit/'+p.relative_to(root).as_posix();i=tarfile.TarInfo(name);data=p.read_bytes();i.size=len(data);i.mode=0o644;i.mtime=0;t.addfile(i,io.BytesIO(data))
print('Sourcekit archive',out.stat().st_size,'bytes',hashlib.sha256(out.read_bytes()).hexdigest())
'''
(kit/'scripts/package-lz4-sourcekit.py').write_text(script)
(kit/'SOURCEKIT_README.md').write_text('''# LZ4 1.10.0 Libx対応ソース

固定原文208ファイル、英語定本27・日本語訳27、原通知、変換器、共有UIとテーマ、ビルド補助、固定依存lock、原ライセンス通知を収録します。node_modules、生成dist、他アプリ・Awesomeの本文は含めません。原文と翻訳のライセンスは各ページとpublic/sourceの通知が優先します。Libx自身のコードの公開ライセンスは確認待ちです。この草稿はまだ公開しません。

## 再現手順

Node.js20以上、pnpm10.10.0、Python3を使います。外部Python依存は不要です。

```sh
python3 scripts/package-lz4-sourcekit.py
pnpm install --frozen-lockfile
pnpm --filter apps-lz4 build
pnpm --filter apps-lz4 check:content
pnpm --filter apps-lz4 preview --host 127.0.0.1 --port 4330
```

最初のコマンドはキット自身の圧縮アーカイブを再作成します。再帰的に自分を同梱せず、同梱ソースから再現できます。表示先はhttp://127.0.0.1:4330/docs/lz4です。Astro5.7.12の固定版プレビュー補助がgzipアーカイブを元バイトで返します。別版では再検証を要求します。Cloudflare Workersを起動しません。

このキットはLZ4の部分リポジトリです。保存済み全文レビューは同梱していますが、履歴の他アプリまで収録しないため全体の運用台帳検査は実行対象外です。本文と定本は変更しません。全文レビューの新規実施や履歴のローカルworkspace値の正規化は行っていません。

THIRD_PARTY_NOTICESは導入パッケージの原通知を保持する参考在庫です。すべての導入パッケージが配信されるという意味ではありません。依存コードは同梱せず、lockで固定した各原配布元から取得します。
''')
assert not(kit/'apps/glfw').exists() and not(kit/'apps/lua').exists();(ev/'PUBLICATION_KIT_PREPARATION.json').write_text(json.dumps({'status':'prepared-license-pending','workspace':str(kit),'latestLZ4Source':str(w),'publicArchiveFileNotIncludedRecursively':True,'otherAppsExcluded':True,'licenseChoicePending':True},indent=2)+'\n');print('Prepared latest corresponding source kit')
