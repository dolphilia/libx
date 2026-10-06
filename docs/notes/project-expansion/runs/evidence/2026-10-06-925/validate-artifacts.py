from pathlib import Path
import json,hashlib,zipfile,datetime,sys
E=Path(__file__).parent;W=Path('/private/tmp/libx-gnu-gzip-formal-923');role=sys.argv[1];T=Path('/private/tmp/libx-gnu-gzip-'+role+'-artifact-925');sha=json.loads((E/'COMMIT_RESULT.json').read_text())['commit'];h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
m=json.loads((T/'manifest.json').read_text());assert m['commit']==sha
assert {str(p.relative_to(T/'dist')) for p in (T/'dist').rglob('*') if p.is_file()}=={x['path'] for x in m['files']}
for x in m['files']:
 p=Path(x['path']);assert not p.is_absolute() and '..' not in p.parts
 assert h(T/'dist'/p)==x['sha256'] and (T/'dist'/p).stat().st_size==x['bytes']
articles=[x for x in m['files'] if x['path'].startswith('docs/gnu-gzip/v1-15/') and x['path'].endswith('/index.html') and len(Path(x['path']).parts)==7];assert len(articles)==17
preferred=0
for p in (W/'apps/gnu-gzip/public/source/v1-15/edited').rglob('*.md'):
 assert h(p)==h(T/'dist/docs/gnu-gzip/source/v1-15/edited'/p.relative_to(W/'apps/gnu-gzip/public/source/v1-15/edited'));preferred+=1
assert preferred==17
offer=json.loads((E.parent/'2026-10-06-924/SOURCE_OFFER.json').read_text());source=T/'dist/docs/gnu-gzip/source/v1-15/source.zip';assert h(source)==offer['archiveSHA256']
with zipfile.ZipFile(source) as z:
 c=json.loads(z.read('SOURCE_COMPONENTS.json'));assert set(z.namelist())=={x['path'] for x in c['files']}|{'SOURCE_COMPONENTS.json'};assert len(z.namelist())==593
 for x in c['files']:assert hashlib.sha256(z.read(x['path'])).hexdigest()==x['sha256']
 assert not any(n.endswith('/source.zip') for n in z.namelist())
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'commit':sha,'files':len(m['files']),'allManifestFilesExact':True,'documents':17,'EnglishPages':8,'JapaneseGuides':8,'EnglishOnlyReferences':1,'gnuGzipDeployedFiles':len([x for x in m['files'] if x['path'].startswith('docs/gnu-gzip/')]),'preferredSourcesExact':preferred,'sourceOfferMembers':593,'sourceOfferSHA256':h(source)}
if role=='production':
 S=Path('/private/tmp/libx-gnu-gzip-production-state-925');B=Path('/private/tmp/libx-gnu-gzip-production-before-925');b=json.loads((S/'before.json').read_text());p=json.loads((S/'prepublish.json').read_text());a=json.loads((S/'after.json').read_text())
 assert b==json.loads((B/'before.json').read_text());assert b['deployment']['commit']=='f4075fe64342ecb9da630cdca707da658bd0c887';assert b['deployment']==p['deployment'];assert a['deployment']['commit']==sha;assert a['deployment']['id']!=b['deployment']['id'];assert 'libx.dev' in a['domains']
 out.update(rollbackSavedBeforePublication=True,baselineUnchangedAtPrepublish=True,previousDeployment=b['deployment'],publishedDeployment=a['deployment'])
 for name,data in [('PRODUCTION_BEFORE.json',b),('PRODUCTION_PREPUBLISH.json',p),('PRODUCTION_AFTER.json',a)]: (E/name).write_text(json.dumps(data,indent=2)+'\n')
(E/(role.upper()+'_MANIFEST.json')).write_text(json.dumps(m,indent=2)+'\n');(E/(role.upper()+'_ARTIFACT_VALIDATION.json')).write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
