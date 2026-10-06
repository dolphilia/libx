import json,pathlib,hashlib,datetime
D=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-780');T=pathlib.Path('/private/tmp/libx-libuv-production-artifact-780');S=pathlib.Path('/private/tmp/libx-libuv-production-state-780');B=pathlib.Path('/private/tmp/libx-libuv-production-before-780')
b=json.loads((S/'before.json').read_text());p=json.loads((S/'prepublish.json').read_text());a=json.loads((S/'after.json').read_text());rollback=json.loads((B/'before.json').read_text());assert b==rollback
for s in [b,p,a]:
 assert s['project']=='libx' and s['productionBranch']=='main' and 'libx.dev'in s['domains']
assert b['deployment']['commit']=='6e0dbef265ff6ebadf58a7437564a7d07ffeb296';assert b['deployment']==p['deployment'];assert a['deployment']['commit']=='3168336edf2363dc6c30d2979a27f517b2d76163';assert a['deployment']['id']!=b['deployment']['id']
m=json.loads((T/'manifest.json').read_text());assert m['commit']==a['deployment']['commit'];assert len(m['files'])==3366
actual={str(f.relative_to(T/'dist'))for f in (T/'dist').rglob('*')if f.is_file()};assert actual=={f['path']for f in m['files']};assert not any(x.endswith('.pyc')for x in actual)
for f in m['files']:
 q=pathlib.PurePosixPath(f['path']);assert not q.is_absolute() and '..'not in q.parts
 raw=(T/'dist'/q).read_bytes();assert len(raw)==f['bytes'] and hashlib.sha256(raw).hexdigest()==f['sha256']
for name,obj in [('PRODUCTION_BEFORE.json',b),('PRODUCTION_PREPUBLISH.json',p),('PRODUCTION_AFTER.json',a),('CI_MANIFEST.json',m)]:
 with (D/name).open('x')as out:json.dump(obj,out,indent=2)
r={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workflowRun':37254735200,'commit':m['commit'],'files':len(m['files']),'allManifestFilesExact':True,'noAdditionalDistFiles':True,'generatedCacheNotPublished':True,'rollbackSavedBeforePublication':True,'baselineUnchangedAtPrepublish':True,'previousDeployment':b['deployment'],'publishedDeployment':a['deployment'],'publicHTTPVerified':False,'nativeDisplayVerified':False}
with (D/'ARTIFACT_VALIDATION.json').open('x')as out:json.dump(r,out,indent=2)
print(json.dumps(r))
