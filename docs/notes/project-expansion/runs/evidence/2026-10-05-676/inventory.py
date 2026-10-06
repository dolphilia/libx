import pathlib,json,tarfile,hashlib,re,posixpath,collections
base=pathlib.Path('docs/notes/project-expansion/research/2026-10-01');out=pathlib.Path('docs/notes/project-expansion/runs/evidence/2026-10-05-676');sha=lambda b:hashlib.sha256(b).hexdigest();save=lambda n,d:(out/n).write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
t=tarfile.open(base/'libuv-source.tar.gz');files={m.name.split('/',1)[1]:t.extractfile(m).read() for m in t.getmembers() if m.isfile()};old=json.loads((base/'libuv-input-inventory.json').read_text())['files'];mapping={x['path']:x for x in old};assert set(mapping)==set(files);assert all(mapping[p]['sha256']==sha(b) for p,b in files.items())
extract=pathlib.Path('/private/tmp/libx-libuv-screening-676/source');extract.mkdir(parents=True,exist_ok=True)
for p,b in files.items():
 assert not p.startswith('/') and '..' not in pathlib.PurePosixPath(p).parts
 target=extract/p;target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(b)
rows=[];directives=[];notices=[];external=[]
for p,b in sorted(files.items()):
 if not(p.startswith('docs/') or p in ['LICENSE','LICENSE-docs','README.md','include/uv/version.h']):continue
 text=b.decode('utf-8',errors='replace');cl=('body-rst' if p.endswith('.rst') else 'example-reference' if p.startswith('docs/code/') else 'body-asset' if p.startswith('docs/src/static/') else 'generator-reference' if p.startswith('docs/') else 'notice-or-version-reference')
 rows.append({'path':p,'sha256':sha(b),'bytes':len(b),'classification':cl})
 if p.endswith('.rst'):
  for i,line in enumerate(text.splitlines(),1):
   m=re.match(r'\s*\.\.\s+([\w:-]+)::\s*(.*)',line)
   if m:directives.append({'path':p,'line':i,'directive':m[1],'argument':m[2]})
 for i,line in enumerate(text.splitlines(),1):
  if re.search(r'copyright|licen[sc]e|creative.?commons|CC.BY|attribution|permission|public.domain|adapted.from|originally',line,re.I):notices.append({'path':p,'line':i,'text':line})
  if p.endswith('.rst') and ('https://' in line or 'http://' in line):external.append({'path':p,'line':i,'text':line})
version=files['include/uv/version.h'].decode();assert all(re.search(r'#define '+k+r' '+str(v)+r'\b',version) for k,v in [('UV_VERSION_MAJOR',1),('UV_VERSION_MINOR',53),('UV_VERSION_PATCH',0),('UV_VERSION_IS_RELEASE',1)])
counts=dict(collections.Counter(r['classification'] for r in rows));save('INPUT_RECONCILIATION.json',{'archiveSha256':sha((base/'libuv-source.tar.gz').read_bytes()),'fixedCommit':'840404ce8ba7cc0204be52389a6cfff9f2c90fb6','version':'1.53.0','allArchiveFiles':len(files),'priorManifestExact':True,'sourceWorkspace':str(extract),'sourceExecution':False,'docsFiles':sum(p.startswith('docs/') for p in files),'classifications':counts,'rows':rows});save('DIRECTIVE_SCAN.json',{'counts':dict(collections.Counter(x['directive'] for x in directives)),'rows':directives});save('NOTICE_SCAN.json',{'method':'candidate-line inventory; a regex hit or its absence is not a final rights decision','rows':notices,'externalReferenceLines':external});print(json.dumps({'counts':counts,'directives':dict(collections.Counter(x['directive'] for x in directives)),'noticeRows':len(notices)}))
