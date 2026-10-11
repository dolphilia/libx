from pathlib import Path
import json,hashlib,zipfile,datetime,sys
E=Path(__file__).parent;W=Path('/private/tmp/libx-gnu-patch-formal-979');role=sys.argv[1];T=Path('/private/tmp/libx-gnu-patch-'+role+'-artifact-982');sha=json.loads((E/'COMMIT_RESULT.json').read_text())['commit'];h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
m=json.loads((T/'manifest.json').read_text());assert m['commit']==sha
assert {str(p.relative_to(T/'dist')) for p in (T/'dist').rglob('*') if p.is_file()}=={x['path'] for x in m['files']}
for x in m['files']:
 p=Path(x['path']);assert not p.is_absolute() and '..' not in p.parts
 assert h(T/'dist'/p)==x['sha256'] and (T/'dist'/p).stat().st_size==x['bytes']
articles=[x for x in m['files'] if x['path'].startswith('docs/gnu-patch/v2-8/') and x['path'].endswith('/index.html') and len(Path(x['path']).parts)==7];assert len(articles)==18
preferred=0
for p in (W/'apps/gnu-patch/public/source/v2-8/edited').rglob('*.md'):
 assert h(p)==h(T/'dist/docs/gnu-patch/source/v2-8/edited'/p.relative_to(W/'apps/gnu-patch/public/source/v2-8/edited'));preferred+=1
assert preferred==18
offer=json.loads(Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-12-981/SOURCE_OFFER.json').read_text());source=T/'dist/docs/gnu-patch/source/v2-8/source.zip';assert h(source)==offer['sha256']
with zipfile.ZipFile(source) as z:
 c=json.loads(z.read('SOURCE_COMPONENTS.json'));assert set(z.namelist())=={x['path'] for x in c['files']}|{'SOURCE_COMPONENTS.json'};assert len(z.namelist())==509
 for x in c['files']:assert hashlib.sha256(z.read(x['path'])).hexdigest()==x['sha256']
 assert not any(n.endswith('/source.zip') for n in z.namelist())
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'commit':sha,'files':len(m['files']),'allManifestFilesExact':True,'documents':18,'EnglishGuides':9,'JapaneseGuides':9,'gnuPatchDeployedFiles':len([x for x in m['files'] if x['path'].startswith('docs/gnu-patch/')]),'preferredSourcesExact':preferred,'sourceOfferMembers':509,'sourceOfferSHA256':h(source)}
if role=='production':
 S=Path('/private/tmp/libx-gnu-patch-production-state-982');B=Path('/private/tmp/libx-gnu-patch-production-before-982');b=json.loads((S/'before.json').read_text());p=json.loads((S/'prepublish.json').read_text());a=json.loads((S/'after.json').read_text())
 assert b==json.loads((B/'before.json').read_text());assert b['deployment']['commit']=='01ada58f864af6a00bb6f73fccc0bd63dbea26d9';assert b['deployment']==p['deployment'];assert a['deployment']['commit']==sha;assert a['deployment']['id']!=b['deployment']['id'];assert 'libx.dev' in a['domains']
 out.update(rollbackSavedBeforePublication=True,baselineUnchangedAtPrepublish=True,previousDeployment=b['deployment'],publishedDeployment=a['deployment'])
 for name,data in [('PRODUCTION_BEFORE.json',b),('PRODUCTION_PREPUBLISH.json',p),('PRODUCTION_AFTER.json',a)]: (E/name).write_text(json.dumps(data,indent=2)+'\n')
(E/(role.upper()+'_MANIFEST.json')).write_text(json.dumps(m,indent=2)+'\n');(E/(role.upper()+'_ARTIFACT_VALIDATION.json')).write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
