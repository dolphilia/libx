from pathlib import Path
import shutil,json,hashlib,zipfile
W=Path('/private/tmp/libx-rapidjson-formal-853');B=Path('/private/tmp/libx-rapidjson-source-package-856');Q=Path('/private/tmp/libx-rapidjson-source-rebuild-856-repaired');E=Path(__file__).parent;N=W/'docs/notes/document-import/rapidjson/v1-1-0';S=W/'apps/rapidjson/public/source/v1-1-0';delta=json.loads((E/'RAW_EVIDENCE_PATH_DELTA.json').read_text())
for row in delta['rows']:
 for base in [B/'workspace',Q/'workspace']:
  old=base/row['before'];new=base/row['after'];old.rename(new)
for name in ['regeneration/ROUTES.json','REFERENCE_MAP.json','regeneration/regenerate.py','SOURCE_MANIFEST.json']:
 for base in [B/'workspace',Q/'workspace']:shutil.copy2(N/name,base/'docs/notes/document-import/rapidjson/v1-1-0'/name)
for base in [B,Q]:shutil.copy2(N/'SOURCE_MANIFEST.json',base/'SOURCE_MANIFEST.json')
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();c=json.loads((B/'SOURCE_COMPONENTS.json').read_text());c['files']=[{'path':str(p.relative_to(B)),'sha256':sha(p)}for p in sorted(B.rglob('*'))if p.is_file()and p!=B/'SOURCE_COMPONENTS.json'];(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(S/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():info=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o644<<16;z.writestr(info,p.read_bytes())
with zipfile.ZipFile(S/'source.zip')as z:
 for row in c['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
 assert not any(x.endswith('/source.zip')for x in z.namelist());assert len(z.namelist())==len(c['files'])+1
shutil.copy2(S/'source.zip',Q/'workspace/apps/rapidjson/public/source/v1-1-0/source.zip');shutil.copy2(B/'SOURCE_COMPONENTS.json',Q/'SOURCE_COMPONENTS.json')
out=json.loads((E/'SOURCE_OFFER.json').read_text());out.update({'archiveSha256':sha(S/'source.zip'),'bytes':(S/'source.zip').stat().st_size,'members':len(c['files'])+1});(E/'SOURCE_OFFER.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(out['archiveSha256'],out['members'])
