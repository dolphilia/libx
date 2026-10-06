"""Prepare an internal reproducible source tree; never publish or edit source inputs."""
import pathlib, json, hashlib, shutil, os, re
root=pathlib.Path('/Users/dolphilia/github/libx')
work=pathlib.Path('/private/tmp/libx-lz4-formal-786')
ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-831'
kit=pathlib.Path('/private/tmp/libx-lz4-sourcekit-831')
assert not kit.exists(), 'Do not overwrite an existing kit'
kit.mkdir()
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
inventory={}
skip={'node_modules','.git','.astro','.tmp','dist','baseline-dist','__pycache__','.DS_Store'}
def copy(source,relative):
    relative=pathlib.PurePosixPath(relative)
    assert not relative.is_absolute() and '..' not in relative.parts
    assert source.is_file() and not source.is_symlink(), str(source)
    dest=kit/relative;before=sha(source)
    if str(relative) in inventory:
        assert sha(dest)==before;return
    dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(source,dest)
    assert sha(source)==before and sha(dest)==before
    inventory[str(relative)]={'sha256':before,'bytes':dest.stat().st_size,'source':str(source)}
def tree(source,relative):
    for parent,dirs,files in os.walk(source):
        dirs[:]=sorted(d for d in dirs if d not in skip)
        for name in sorted(files):
            if name in skip or name.endswith('.pyc'):continue
            p=pathlib.Path(parent)/name
            copy(p,str(pathlib.PurePosixPath(relative)/p.relative_to(source).as_posix()))
for p in ['package.json','pnpm-lock.yaml','pnpm-workspace.yaml','AGENTS.md','.gitignore','.gitattributes']:
    copy(work/p,p)
tree(work/'apps/lz4','apps/lz4')
tree(work/'packages','packages')
tree(work/'config','config')
tree(work/'templates/docs-site','templates/docs-site')
# Build helpers and Markdown plugins only: no Awesome inputs, deployment action,
# or node_modules is copied or executed by this preparation.
for p in sorted((work/'scripts').iterdir()):
    if p.is_file() and p.suffix in {'.js','.mjs','.json'}:
        copy(p,'scripts/'+p.name)
tree(work/'scripts/plugins','scripts/plugins')
tree(work/'scripts/service-worker','scripts/service-worker')
notes='docs/notes/document-import/lz4/v1-10-0'
tree(root/notes,notes)
copy(root/'docs/notes/project-expansion/OPERATIONS.json','docs/notes/project-expansion/OPERATIONS.json')
copy(root/'docs/notes/project-expansion/POLICY.json','docs/notes/project-expansion/POLICY.json')
copy(root/'docs/plans/CONTINUOUS_DOCUMENT_PROJECT_EXPANSION_PLAN.md','docs/plans/CONTINUOUS_DOCUMENT_PROJECT_EXPANSION_PLAN.md')
for name in ['780/LZ4_FIXED.tar.gz','784/BOUNDARY.json','784/RIGHTS_AND_FULFILLMENT.json','802/generate-canonical.py']:
    p='docs/notes/project-expansion/runs/evidence/2026-10-05-'+name;copy(root/p,p)
fixed='docs/notes/project-expansion/runs/evidence/2026-10-05-781/lz4-fixed'
tree(root/fixed,fixed)
seen=set()
historical_absolute_refs=[]
def refs(value):
    if isinstance(value,list):
        for x in value:refs(x)
    elif isinstance(value,dict):
        if isinstance(value.get('path'),str) and re.fullmatch(r'[0-9a-f]{64}',str(value.get('sha256',''))):
            p=value['path']
            if pathlib.Path(p).is_absolute():
                absolute=pathlib.Path(p)
                assert absolute.is_relative_to(root), 'unknown absolute source reference: '+p
                portable=absolute.relative_to(root).as_posix()
                historical_absolute_refs.append(dict(path=p,portablePath=portable,sha256=value['sha256'],reason='historical location kept in original review JSON; exact file also bundled under its repository-relative path'))
                p=portable
            assert sha(root/p)==value['sha256'],p;copy(root/p,p)
            if p.endswith('.json') and p not in seen:
                seen.add(p);refs(json.loads((root/p).read_text()))
        for x in value.values():refs(x)
op=json.loads((root/'docs/notes/project-expansion/OPERATIONS.json').read_text())
binding=json.loads((root/notes/'OPERATION_BINDING.json').read_text())
operation=next(x for x in op['operations'] if x['id']==binding['operationId'])
refs(operation['reviewManifest'])
m=json.loads((root/operation['reviewManifest']['path']).read_text())
for r in m['pages']:
    if r.get('restorationProof'):
        p=r['restorationProof'];copy(root/p,p);refs(json.loads((root/p).read_text()))
    if r.get('priorFullReview'):refs(r['priorFullReview'])
# Make the fixed archive and license notices easy to locate outside the app.
readme='''# LZ4 1.10.0 Libx再現用ソースキット（内部検証草稿）

この草稿は外部公開していません。英語定本27・日本語27、208固定上流入力、上流アーカイブ、元の通知、内容map/lock・レビュー証拠、変換器、LZ4サイト実装、共有packagesとビルド補助、依存lockを含みます。node_modules、生成dist、他アプリの本文、Awesome資料は含みません。

## 再現

Node.js >=20（今回24.19.0）、pnpm 10.10.0、Python3を用意し、このディレクトリで次を実行します。Pythonの外部ライブラリは不要です。

```sh
pnpm install --frozen-lockfile
pnpm --filter apps-lz4 build
pnpm --filter apps-lz4 check:content
pnpm --filter apps-lz4 preview --host 127.0.0.1 --port 4328
```

表示先は http://127.0.0.1:4328/docs/lz4 です。Cloudflare Workersの起動・公開は行いません。依存lockに含まれる無関係な開発ツールはこの再現工程では実行しません。

英語定本のみの再生成は、空の一時ディレクトリを用意して次を実行します。出力は元の英語本文へ上書きせず、SHAを照合してください。日本語本文を生成する操作ではありません。

```sh
python3 docs/notes/project-expansion/runs/evidence/2026-10-05-802/generate-canonical.py --root . --stage /absolute/path/to/empty-stage
```

check:contentはこのキット内の出典・レビューを使用する既定設定で実行できます。OPERATIONSは取得時の原本を保持しますが、別案件の成果物までは同梱しないため、全体台帳検査をこの部分キットで実行しないでください。古い/tmp workspace記録は履歴であり、コマンドの実行先ではありません。

## 通知と未完条件

文書ごとのBSD/GPL/Frame固有/DJGPP条件は apps/lz4/public/source/v1-10-0/licenses と RIGHTS_AND_FULFILLMENT.json を参照してください。上流原通知を保持し、日本語は非公式翻訳・2026-10-05の改変として表示します。GPL対象の文書ソース・翻訳・定本はその記録された同条件に従います。

Libxの共有実装にはroot LICENSEとpackage license指定を確認できていません。この草稿は共有実装をGPL等へ新たに再許諾した記録ではなく、外部配布条件の確認を未完事項として残します。依存npmパッケージはlockで固定し、各配布物の原ライセンスが適用されます。必要な第三者通知・対応ソース提供範囲の確認、クリーンな依存導入・再生成・ビルド検証、キットのアーカイブ化と同サイトdownload配置、ページからのリンク、共有統合はまだ完了していません。原文アーカイブだけをLibx完全対応ソースとは呼びません。
'''
(kit/'SOURCEKIT_README.md').write_text(readme)
inventory['SOURCEKIT_README.md']={'sha256':sha(kit/'SOURCEKIT_README.md'),'bytes':(kit/'SOURCEKIT_README.md').stat().st_size,'source':'generated by prepare-sourcekit.py; internal draft'}
manifest={'status':'prepared-unverified','workspace':str(kit),'sourceOperationRevision':op['revision'],'files':inventory,'counts':{'files':len(inventory),'fixedInputs':sum(p.startswith(fixed+'/') for p in inventory),'englishPages':len(list((kit/'apps/lz4/src/content/docs/v1-10-0/en').rglob('*.md'))),'japanesePages':len(list((kit/'apps/lz4/src/content/docs/v1-10-0/ja').rglob('*.md')))},'historicalAbsoluteReferences':historical_absolute_refs,'pending':['clean dependency install','portable canonical/review gate and standalone build','archive/download/footer binding','third-party notices and shared implementation redistribution conditions','shared integration/global integrity']}
assert manifest['counts']['fixedInputs']==208 and manifest['counts']['englishPages']==manifest['counts']['japanesePages']==27
for p,v in inventory.items():assert sha(kit/p)==v['sha256']
(ev/'SOURCEKIT_INVENTORY.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
(kit/'SOURCEKIT_MANIFEST.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
(ev/'SOURCEKIT_README.md').write_bytes((kit/'SOURCEKIT_README.md').read_bytes())
print('Prepared internal kit:',manifest['counts'],'portable build and redistribution not yet verified.')
