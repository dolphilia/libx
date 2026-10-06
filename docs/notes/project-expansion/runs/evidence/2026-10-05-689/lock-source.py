from pathlib import Path
import json,hashlib,shutil,tarfile
root=Path('/Users/dolphilia/github/libx');out=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-689';packet=root/'docs/notes/document-import/libuv/1.53.0';packet.mkdir(parents=True);source=Path('/private/tmp/libx-libuv-screening-676/source');archive=root/'docs/notes/project-expansion/research/2026-10-01/libuv-source.tar.gz';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();assert sha(archive)=='768e567dcabb9a55cb88b552b3e93c723aeca1ea6d8bb9fd8ff573c2623feac3';recon=json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-05-676/INPUT_RECONCILIATION.json').read_text());rows=[]
with tarfile.open(archive) as t:
 for m in t.getmembers():
  if m.isfile():
   b=t.extractfile(m).read();rel='/'.join(m.name.split('/')[1:]);assert (source/rel).read_bytes()==b;rows.append({'path':rel,'sha256':hashlib.sha256(b).hexdigest(),'bytes':len(b)})
paths=[str(p.relative_to(source)) for p in (source/'docs').rglob('*') if p.is_file()]+['README.md','LICENSE','LICENSE-docs','LICENSE-extra','include/uv.h','include/uv/version.h','src/unix/core.c'];refs=[]
for rel in sorted(paths):
 p=packet/'sources'/rel;p.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(source/rel,p);refs.append({'path':str(p.relative_to(root)),'originalPath':rel,'sha256':sha(p),'bytes':p.stat().st_size})
(packet/'SOURCE_MANIFEST.json').write_text(json.dumps({'project':'libuv','releaseVersion':'1.53.0','appVersion':'v1-53-0','releaseDate':'2026-09-24','releaseUrl':'https://github.com/libuv/libuv/releases/tag/v1.53.0','tagObject':'b2f1760973bfaed11a0b8e76b321b9620f8e76f8','commit':'840404ce8ba7cc0204be52389a6cfff9f2c90fb6','archive':{'path':str(archive.relative_to(root)),'sha256':sha(archive),'url':'https://codeload.github.com/libuv/libuv/tar.gz/840404ce8ba7cc0204be52389a6cfff9f2c90fb6'},'allOriginalRegularFiles':rows,'durableSources':refs,'scope':'official42RST reader pages plus generated index reference, all referenced code/assets/source kit','guideOriginalVersion':'1.42.0 (inside fixed1.53.0 source; preserve original statement)','canonicalReady':False,'translated':False,'contentReviewed':False},ensure_ascii=False,indent=2)+'\n')
(packet/'ONBOARDING.md').write_text('libuv 1.53.0 / 固定原文の正式取り込み\n\n正式作業場所: /private/tmp/libx-libuv-formal-689。正規create-projectを本番検証済みcommit6e0dbefからの隔離exportで実行。テンプレートの例は定本ではなく、公開対象から除外したsource-locked作業として扱う。\n\n対象は原42RST本文と生成索引参照1。guideの1.42.0/WIP/未徹底review、既知のuv_fs_t.errorno・UV_RUN_ONCE one event・uv_os_free_group型差を原文保持のフッター注記へ。初回は49区分以上の翻訳と独立した全文内容レビューを予定。\n\n次: 可搬な正式canonical生成器と全量content map、原英語43ページ・出典フッター・全code/anchor検査を準備。試験の/libuv-trialを/libuvに対応付ける。第三原差はmiscフッターへ追加。機械検査を全文意味レビューに代用しない。\n')
formal=Path('/private/tmp/libx-libuv-formal-689');files=[]
for p in sorted(formal.rglob('*')):
 rel=p.relative_to(formal)
 if p.is_symlink() or any(s in ['node_modules','dist','.astro','.git'] for s in rel.parts) or not p.is_file():continue
 files.append({'path':str(rel),'bytes':p.stat().st_size,'sha256':sha(p)})
(out/'WORKSPACE_MANIFEST.json').write_text(json.dumps({'workspace':str(formal),'files':files,'templateOnly':True,'canonicalReady':False},indent=2)+'\n')
with tarfile.open(out/'WORKSPACE_PACKET.tar.gz','w:gz') as t:
 for r in files:t.add(formal/r['path'],arcname=r['path'],recursive=False)
print('locked originals',len(rows),'durable sources',len(refs),'workspace',len(files))
