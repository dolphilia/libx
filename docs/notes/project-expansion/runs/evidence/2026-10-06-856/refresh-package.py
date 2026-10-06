from pathlib import Path
import json,hashlib,shutil,zipfile,datetime
W=Path('/private/tmp/libx-rapidjson-formal-853');E=Path(__file__).parent;B=Path('/private/tmp/libx-rapidjson-source-package-856');S=W/'apps/rapidjson/public/source/v1-1-0';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
for rel in ['pnpm-lock.yaml','apps/rapidjson/check-content.mjs','apps/rapidjson/src/config/project.config.jsonc','apps/rapidjson/src/styles/global.css','apps/rapidjson/tsconfig.json','apps/rapidjson/README.md','apps/rapidjson/public/source/v1-1-0/README.md']:
 shutil.copy2(W/rel,B/'workspace'/rel)
shutil.copy2(S/'README.md',B/'README.md')
c=json.loads((B/'SOURCE_COMPONENTS.json').read_text());c['files']=[{'path':str(p.relative_to(B)),'sha256':sha(p)}for p in sorted(B.rglob('*'))if p.is_file()and p!=B/'SOURCE_COMPONENTS.json'];(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(S/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():info=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o644<<16;z.writestr(info,p.read_bytes())
with zipfile.ZipFile(S/'source.zip')as z:
 for row in c['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
 assert len(z.namelist())==len(c['files'])+1
out=json.loads((E/'SOURCE_OFFER.json').read_text());out.update({'archiveSha256':sha(S/'source.zip'),'bytes':(S/'source.zip').stat().st_size,'members':len(c['files'])+1,'refreshedAt':datetime.datetime.now(datetime.timezone.utc).isoformat()});(E/'SOURCE_OFFER.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
Q=Path('/private/tmp/libx-rapidjson-source-rebuild-856');assert not Q.exists()
with zipfile.ZipFile(S/'source.zip')as z:z.extractall(Q)
shutil.copy2(S/'source.zip',Q/'workspace/apps/rapidjson/public/source/v1-1-0/source.zip')
(E/'LOCAL_ATTEMPTS.json').write_text(json.dumps({'nonPassingAttempts':[{'file':'CONTENT_CHECK.log','reason':'wrong filter rapidjson matched no projects; not pass evidence'},{'file':'CONTENT_CHECK_FINAL.log','reason':'checker incorrectly treated document footer links as public files; corrected'},{'file':'FORMAT.log','reason':'new canonical app config/CSS/tsconfig and only-new lock importer formatting; corrected'}]},ensure_ascii=False,indent=2)+'\n')
print('Refreshed source ZIP and extracted scratch reconstruction:',out['archiveSha256'],out['members'])
