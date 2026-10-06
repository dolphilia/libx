import json,pathlib,hashlib,datetime
D=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-841');T=pathlib.Path('/private/tmp/libx-zstd-production-artifact-841');sha='a1064ee8d657a3d3c9a50b8691a12998ce0e103b';m=json.loads((T/'manifest.json').read_text());assert m['commit']==sha
actual={str(f.relative_to(T/'dist'))for f in (T/'dist').rglob('*')if f.is_file()};assert actual=={f['path']for f in m['files']}
for f in m['files']:
 q=pathlib.PurePosixPath(f['path']);assert not q.is_absolute() and '..'not in q.parts
 raw=(T/'dist'/q).read_bytes();assert len(raw)==f['bytes'] and hashlib.sha256(raw).hexdigest()==f['sha256']
articles=[f for f in m['files'] if f['path'].startswith('docs/zstd/v1-5-7/') and f['path'].endswith('/index.html') and len(pathlib.PurePosixPath(f['path']).parts)==7];assert len(articles)==18
source=T/'dist/docs/zstd/source/v1-5-7/zstd_compression_format.md';assert hashlib.sha256(source.read_bytes()).hexdigest()=='81d08d9af1e3011190cae694d1b775b46db4743728733522a4119a5cb7558bb5'
notice=T/'dist/docs/zstd/source/v1-5-7/NOTICE.txt';assert notice.read_bytes()==pathlib.Path('/private/tmp/libx-zstd-formal-838/apps/zstd/public/source/v1-5-7/NOTICE.txt').read_bytes()
S=pathlib.Path('/private/tmp/libx-zstd-production-state-841');B=pathlib.Path('/private/tmp/libx-zstd-production-before-841');b=json.loads((S/'before.json').read_text());p=json.loads((S/'prepublish.json').read_text());a=json.loads((S/'after.json').read_text());assert b==json.loads((B/'before.json').read_text());assert b['deployment']['commit']=='ee69b24fa1126eaeeb4381b3d79fd3663fe6c356';assert b['deployment']==p['deployment'];assert a['deployment']['commit']==sha;assert a['deployment']['id']!=b['deployment']['id'];assert 'libx.dev'in a['domains']
r={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'commit':sha,'files':len(m['files']),'allManifestFilesExact':True,'noAdditionalDistFiles':True,'zstdDocuments':18,'zstdDeployedFiles':len([f for f in m['files'] if f['path'].startswith('docs/zstd/')]),'fixedSourceAndNoticeExact':True,'rollbackSavedBeforePublication':True,'baselineUnchangedAtPrepublish':True,'previousDeployment':b['deployment'],'publishedDeployment':a['deployment']}
for n,o in [('PRODUCTION_BEFORE.json',b),('PRODUCTION_PREPUBLISH.json',p),('PRODUCTION_AFTER.json',a)]: (D/n).write_text(json.dumps(o,indent=2)+'\n')
(D/'PRODUCTION_MANIFEST.json').write_text(json.dumps(m,indent=2)+'\n');(D/'PRODUCTION_ARTIFACT_VALIDATION.json').write_text(json.dumps(r,indent=2)+'\n');print(json.dumps(r))
