from pathlib import Path
import shutil,json,hashlib,zipfile,datetime
W=Path('/private/tmp/libx-sds-formal-859');B=Path('/private/tmp/libx-sds-source-package-861');E=Path(__file__).parent;S=W/'apps/sds/public/source/v2-0-0/source.zip';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert not (E/'SOURCE_OFFER_BEFORE_LOCK_REPAIR.json').exists();shutil.copy2(E/'SOURCE_OFFER.json',E/'SOURCE_OFFER_BEFORE_LOCK_REPAIR.json')
for rel in ['pnpm-lock.yaml','templates/README.md']:
 q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(W/rel,q)
c=json.loads((B/'SOURCE_COMPONENTS.json').read_text());c['files']=[{'path':str(p.relative_to(B)),'sha256':sha(p)}for p in sorted(B.rglob('*'))if p.is_file()and p!=B/'SOURCE_COMPONENTS.json'];(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(S,'w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(S)as z:
 assert len(z.namelist())==len(c['files'])+1 and not any(n.endswith('/source.zip')for n in z.namelist())
 for row in c['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
x=json.loads((E/'SOURCE_OFFER.json').read_text());x.update(archiveSha256=sha(S),bytes=S.stat().st_size,members=len(c['files'])+1,refreshedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(),change='Only frozen baseline lock+SDS importer, templates README for canonical prebuild directory discovery');(E/'SOURCE_OFFER.json').write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
Q=Path('/private/tmp/libx-sds-source-rebuild-861');assert not Q.exists()
with zipfile.ZipFile(S)as z:
 for i in z.infolist():assert not Path(i.filename).is_absolute() and '..' not in Path(i.filename).parts
 z.extractall(Q)
shutil.copy2(S,Q/'workspace/apps/sds/public/source/v2-0-0/source.zip');print(x['archiveSha256'],x['members'],'members extracted independent source rebuild')
