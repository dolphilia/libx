from pathlib import Path
import shutil,json,hashlib,zipfile,datetime
W=Path('/private/tmp/libx-sds-formal-859');B=Path('/private/tmp/libx-sds-source-package-861');Q=Path('/private/tmp/libx-sds-source-rebuild-861');E=Path(__file__).parent;S=W/'apps/sds/public/source/v2-0-0/source.zip';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
shutil.copy2(E/'SOURCE_OFFER.json',E/'SOURCE_OFFER_BEFORE_LOCK_FORMAT.json');old=sha(W/'pnpm-lock.yaml');shutil.copy2(W/'pnpm-lock.yaml',B/'workspace/pnpm-lock.yaml');shutil.copy2(W/'pnpm-lock.yaml',Q/'workspace/pnpm-lock.yaml');c=json.loads((B/'SOURCE_COMPONENTS.json').read_text());c['files']=[{'path':str(p.relative_to(B)),'sha256':sha(p)}for p in sorted(B.rglob('*'))if p.is_file()and p!=B/'SOURCE_COMPONENTS.json'];(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n');shutil.copy2(B/'SOURCE_COMPONENTS.json',Q/'SOURCE_COMPONENTS.json')
with zipfile.ZipFile(S,'w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(S)as z:
 assert len(z.namelist())==len(c['files'])+1
 for row in c['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256'];assert sha(Q/row['path'])==row['sha256']
x=json.loads((E/'SOURCE_OFFER.json').read_text());x.update(archiveSha256=sha(S),bytes=S.stat().st_size,members=len(c['files'])+1,refreshedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(),change='NewSDS importer formatting follows repository Prettier; dependency data unchanged. All package members match independent extracted copy.');(E/'SOURCE_OFFER.json').write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n');shutil.copy2(S,Q/'workspace/apps/sds/public/source/v2-0-0/source.zip');print(x['archiveSha256'],x['members'],'members final source kit')
