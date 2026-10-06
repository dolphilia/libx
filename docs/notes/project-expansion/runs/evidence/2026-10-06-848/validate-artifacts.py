from pathlib import Path
import json,hashlib,datetime,sys,zipfile
D=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-06-848');W=Path('/private/tmp/libx-mdbook-formal-843');role=sys.argv[1];T=Path('/private/tmp/libx-mdbook-'+role+'-artifact-849');sha='a8c5c59562e0d7e1240ab785f4807e0997c1e9d9';hash=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();m=json.loads((T/'manifest.json').read_text());assert m['commit']==sha
actual={str(p.relative_to(T/'dist'))for p in(T/'dist').rglob('*')if p.is_file()};assert actual=={p['path']for p in m['files']}
for p in m['files']:
 q=Path(p['path']);assert not q.is_absolute()and'..'not in q.parts;f=T/'dist'/q;assert f.stat().st_size==p['bytes']and hash(f)==p['sha256']
articles=[p for p in m['files']if p['path'].startswith('docs/mdbook/v0-5-4/')and p['path'].endswith('/index.html')and len(Path(p['path']).parts)==7];assert len(articles)==62
for lang in ['en','ja']:
 for p in (W/'apps/mdbook/public/source/v0-5-4/edited'/lang).glob('*.md'):assert hash(T/'dist/docs/mdbook/source/v0-5-4/edited'/lang/p.name)==hash(p)
offer=json.loads((D/'SOURCE_OFFER.json').read_text());source=T/'dist/docs/mdbook/source/v0-5-4/source.zip';assert hash(source)==offer['archiveSha256']
with zipfile.ZipFile(source)as z:
 manifest=json.loads(z.read('SOURCE_MANIFEST.json'));assert set(z.namelist())=={p['path']for p in manifest['files']}|{'SOURCE_MANIFEST.json'};assert len(z.namelist())==811
 for p in manifest['files']:assert hashlib.sha256(z.read(p['path'])).hexdigest()==p['sha256']
assert hash(T/'dist/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz')=='9800afa8e565117ca70f2f4fd690fcc67fbf230dfea4587b3f60a61e7c2bdda9'
result={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'commit':sha,'files':len(m['files']),'allManifestFilesExact':True,'noAdditionalDistFiles':True,'mdBookDocuments':62,'mdBookDeployedFiles':len([p for p in m['files']if p['path'].startswith('docs/mdbook/')]),'preferredSourcesExact':62,'sourceOfferMembers':811,'sourceOfferSHA256':hash(source),'fullOriginalArchiveExact':True}
if role=='production':
 S=Path('/private/tmp/libx-mdbook-production-state-849');B=Path('/private/tmp/libx-mdbook-production-before-849');b=json.loads((S/'before.json').read_text());p=json.loads((S/'prepublish.json').read_text());a=json.loads((S/'after.json').read_text());assert b==json.loads((B/'before.json').read_text());assert b['deployment']['commit']=='a1064ee8d657a3d3c9a50b8691a12998ce0e103b';assert b['deployment']==p['deployment'];assert a['deployment']['commit']==sha;assert a['deployment']['id']!=b['deployment']['id'];assert'libx.dev'in a['domains']
 result.update({'rollbackSavedBeforePublication':True,'baselineUnchangedAtPrepublish':True,'previousDeployment':b['deployment'],'publishedDeployment':a['deployment']})
 for name,data in [('PRODUCTION_BEFORE.json',b),('PRODUCTION_PREPUBLISH.json',p),('PRODUCTION_AFTER.json',a)]: (D/name).write_text(json.dumps(data,indent=2)+'\n')
(D/(role.upper()+'_MANIFEST.json')).write_text(json.dumps(m,indent=2)+'\n');(D/(role.upper()+'_ARTIFACT_VALIDATION.json')).write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result))
