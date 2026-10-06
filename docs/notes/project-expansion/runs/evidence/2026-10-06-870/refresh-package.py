from pathlib import Path
import json,hashlib,shutil,zipfile,datetime,stat
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-wren-formal-864');B=Path('/private/tmp/libx-wren-source-package-870');E=Path(__file__).parent;Q=Path('/private/tmp/libx-wren-source-rebuild-870');S=W/'apps/wren/public/source/v0-4-0/source.zip';assert not Q.exists()
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
shutil.copy2(E/'SOURCE_OFFER.json',E/'SOURCE_OFFER_BEFORE_CHECKER_REPAIR.json')
for rel in ['.prettierignore','pnpm-lock.yaml','templates/README.md','apps/wren/check-content.mjs','apps/wren/package.json','apps/wren/src/config/project.config.jsonc']:
 p=B/'workspace'/rel;p.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(W/rel,p)
c=json.loads((B/'SOURCE_COMPONENTS.json').read_text());old={x['path']:x['sha256'] for x in c['files']};c['files']=[{'path':str(p.relative_to(B)),'sha256':sha(p)} for p in sorted(B.rglob('*')) if p.is_file() and p!=B/'SOURCE_COMPONENTS.json'];new={x['path']:x['sha256'] for x in c['files']};(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(S,'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(S) as z:
 assert len(z.namelist())==len(c['files'])+1 and not any(n.endswith('/source.zip') for n in z.namelist())
 for i in z.infolist():
  p=Path(i.filename);assert not p.is_absolute() and '..' not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 for row in c['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
 z.extractall(Q)
shutil.copy2(S,Q/'workspace/apps/wren/public/source/v0-4-0/source.zip')
x=json.loads((E/'SOURCE_OFFER.json').read_text());x.update(archiveSha256=sha(S),bytes=S.stat().st_size,members=len(c['files'])+1,refreshedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(),changedMembers=sorted(k for k in old.keys()&new.keys() if old[k]!=new[k]),addedMembers=sorted(new.keys()-old.keys()),removedMembers=sorted(old.keys()-new.keys()),unchangedMembers=sum(old[k]==new[k] for k in old.keys()&new.keys()),change='Checker preserves literal-percent original anchor, exact inverse guide-href review binding, only pure multiple LF outside pre/code collapsed for Astro boundary;formatted app metadata/lock;template discovery README retained. No body or full review change.')
(E/'SOURCE_OFFER.json').write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n');print(x['members'],'safe extracted;independent reconstruction pending',x['archiveSha256'])
