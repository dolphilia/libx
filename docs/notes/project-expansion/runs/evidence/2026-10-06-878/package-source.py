from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,datetime,stat
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-yyjson-formal-874');E=Path(__file__).parent;N=W/'docs/notes/document-import/yyjson/v0-13-0';A=W/'apps/yyjson';S=A/'public/source/v0-13-0';B=Path('/private/tmp/libx-yyjson-source-package-878');Q=Path('/private/tmp/libx-yyjson-source-rebuild-878');assert not B.exists() and not Q.exists()
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def write(p,x):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
tracked=subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split('\0')
for rel in tracked:
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/','templates/')) or ('/' not in rel and p.is_file() and not rel.startswith('AGENTS')):
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/yyjson"\n  - "packages/*"\n')
for parent in [A,N]:
 for p in parent.rglob('*'):
  if not p.is_file() or p.is_symlink():continue
  rel=p.relative_to(W)
  if any(x in rel.parts for x in ['node_modules','dist','.astro']) or p==S/'source.zip':continue
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
for cycle in range(875,879):
 p=Path(f'docs/notes/project-expansion/runs/evidence/2026-10-06-{cycle}')
 shutil.copytree(R/p,B/'workspace'/p,dirs_exist_ok=True)
p=Path('scripts/importers/import-yyjson-0.13.0.py');shutil.copy2(W/p,B/'workspace'/p)
shutil.copy2(S/'README.md',B/'README.md');shutil.copy2(N/'SOURCE_MANIFEST.json',B/'SOURCE_MANIFEST.json')
c={'schemaVersion':1,'fixedCommit':'6447536015f3d600f3d65323b10976103b337ca7','buildContextBase':'0c2121e7cd2edbbed0b231e803d8122b7e40ad5a','scope':'19English originals/16Japanese guides;14fixedinputs;3reference Englishonly','preferredEditableInputs':'workspace/apps/yyjson/src/content/docs/v0-13-0/{en,ja}','terms':'Fixed MIT associated documentation;Libx andindividualshared/thirdparty notices retained','sourceSelfExcluded':True,'files':[{'path':str(p.relative_to(B)),'sha256':sha(p)} for p in sorted(B.rglob('*')) if p.is_file()]};write(B/'SOURCE_COMPONENTS.json',c)
with zipfile.ZipFile(S/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(S/'source.zip') as z:
 assert len(z.namelist())==len(c['files'])+1 and not any(n.endswith('/source.zip') for n in z.namelist())
 for i in z.infolist():p=Path(i.filename);assert not p.is_absolute() and '..' not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 for row in c['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
 z.extractall(Q)
shutil.copy2(S/'source.zip',Q/'workspace/apps/yyjson/public/source/v0-13-0/source.zip')
write(E/'SOURCE_OFFER.json',{'status':'passed-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSha256':sha(S/'source.zip'),'bytes':(S/'source.zip').stat().st_size,'members':len(c['files'])+1,'preferredDocuments':35,'originalFiles':14,'allMemberHashesVerified':True,'recursiveSelfZIP':False,'sourcePackage':str(B),'publicPath':'/docs/yyjson/source/v0-13-0/source.zip','reconstruction':'pending','safeExtraction':True,'reconstructionWorkspace':str(Q/'workspace')});print('sourcekit',len(c['files'])+1,'members',(S/'source.zip').stat().st_size,'bytes; independent reconstruction pending')
