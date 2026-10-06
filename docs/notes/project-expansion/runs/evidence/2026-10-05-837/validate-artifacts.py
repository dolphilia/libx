import json,pathlib,hashlib,datetime,sys
D=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-837');role=sys.argv[1];T=pathlib.Path('/private/tmp/libx-lz4-'+role+'-artifact-837');m=json.loads((T/'manifest.json').read_text());assert m['commit']=='ee69b24fa1126eaeeb4381b3d79fd3663fe6c356'
actual={str(f.relative_to(T/'dist'))for f in (T/'dist').rglob('*')if f.is_file()};assert actual=={f['path']for f in m['files']}
for f in m['files']:
 q=pathlib.PurePosixPath(f['path']);assert not q.is_absolute() and '..'not in q.parts
 raw=(T/'dist'/q).read_bytes();assert len(raw)==f['bytes'] and hashlib.sha256(raw).hexdigest()==f['sha256']
assert len([f for f in m['files'] if f['path'].startswith('docs/lz4/v1-10-0/') and f['path'].endswith('/index.html') and len(pathlib.PurePosixPath(f['path']).parts)==7])==54
kit=T/'dist/docs/lz4/source/v1-10-0/LIBX_LZ4_SOURCEKIT.tar.gz';assert hashlib.sha256(kit.read_bytes()).hexdigest()=='ab941c5558767dbbd8729083636aad37c6b0c53808e7849edc50a3727aa03638'
r={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'commit':m['commit'],'files':len(m['files']),'allManifestFilesExact':True,'noAdditionalDistFiles':True,'LZ4Documents':54,'sourcekitExact':True}
if role=='production':
 S=pathlib.Path('/private/tmp/libx-lz4-production-state-837');B=pathlib.Path('/private/tmp/libx-lz4-production-before-837');b=json.loads((S/'before.json').read_text());p=json.loads((S/'prepublish.json').read_text());a=json.loads((S/'after.json').read_text());assert b==json.loads((B/'before.json').read_text());assert b['deployment']['commit']=='3168336edf2363dc6c30d2979a27f517b2d76163';assert b['deployment']==p['deployment'];assert a['deployment']['commit']==m['commit'];assert a['deployment']['id']!=b['deployment']['id'];assert 'libx.dev'in a['domains'];r.update(rollbackSavedBeforePublication=True,baselineUnchangedAtPrepublish=True,previousDeployment=b['deployment'],publishedDeployment=a['deployment'])
 for n,o in [('PRODUCTION_BEFORE.json',b),('PRODUCTION_PREPUBLISH.json',p),('PRODUCTION_AFTER.json',a)]: (D/n).write_text(json.dumps(o,indent=2)+'\n')
(D/(role.upper()+'_MANIFEST.json')).write_text(json.dumps(m,indent=2)+'\n');(D/(role.upper()+'_ARTIFACT_VALIDATION.json')).write_text(json.dumps(r,indent=2)+'\n');print(json.dumps(r))
