from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,datetime,stat
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-make-formal-881');E=Path(__file__).parent;N=W/'docs/notes/document-import/gnu-make/v4-4-1';A=W/'apps/gnu-make';S=A/'public/source/v4-4-1';B=Path('/private/tmp/libx-gnu-make-source-package-884');Q=Path('/private/tmp/libx-gnu-make-source-rebuild-884');assert not B.exists() and not Q.exists()
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def write(p,x):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
tracked=subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split('\0')
for rel in tracked:
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/','templates/')) or ('/' not in rel and p.is_file() and not rel.startswith('AGENTS')):
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/gnu-make"\n  - "packages/*"\n')
for parent in [A,N]:
 for p in parent.rglob('*'):
  if not p.is_file() or p.is_symlink():continue
  rel=p.relative_to(W)
  if any(x in rel.parts for x in ['node_modules','dist','.astro']) or p==S/'source.zip':continue
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
for cycle in [882,883,884]:
 p=Path(f'docs/notes/project-expansion/runs/evidence/2026-10-06-{cycle}')
 shutil.copytree(R/p,B/'workspace'/p,dirs_exist_ok=True)
shutil.copy2(S/'README.md',B/'README.md');shutil.copy2(N/'SOURCE_MANIFEST.json',B/'SOURCE_MANIFEST.json')
c={'schemaVersion':1,'fixedArchiveSHA256':'dd16fb1d67bfab79a72f5e8390735c49e3e8e70b4945a15ab1f81ddb78658fb3','buildContextBase':'878747b110b4e08764ab32fa53856e3676487c4c','scope':'16English documents/15Japanese guides;completechapters1..3/1referencedfootnote;15fixedinputs/fulloriginalarchive','preferredEditableInputs':'workspace/apps/gnu-make/src/content/docs/v4-4-1/{en,ja}','terms':'ManualGFDL1.3+noInvariantSections/originalCoverTexts/notices/History/fullEnglishlicense retained;softwarearchiveCOPYINGandalloriginalnoticesretained;Libx/sharedcomponentsownnotices unchanged','sourceSelfExcluded':True,'files':[{'path':str(p.relative_to(B)),'sha256':sha(p)} for p in sorted(B.rglob('*')) if p.is_file()]};write(B/'SOURCE_COMPONENTS.json',c)
with zipfile.ZipFile(S/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(S/'source.zip') as z:
 assert len(z.namelist())==len(c['files'])+1 and not any(n.endswith('/source.zip') for n in z.namelist())
 for i in z.infolist():p=Path(i.filename);assert not p.is_absolute() and '..' not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 for row in c['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
 z.extractall(Q)
shutil.copy2(S/'source.zip',Q/'workspace/apps/gnu-make/public/source/v4-4-1/source.zip')
write(E/'SOURCE_OFFER.json',{'status':'passed-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSha256':sha(S/'source.zip'),'bytes':(S/'source.zip').stat().st_size,'members':len(c['files'])+1,'preferredDocuments':31,'originalFiles':15,'allMemberHashesVerified':True,'recursiveSelfZIP':False,'sourcePackage':str(B),'publicPath':'/docs/gnu-make/source/v4-4-1/source.zip','reconstruction':'pending','safeExtraction':True,'reconstructionWorkspace':str(Q/'workspace')});print('sourcekit',len(c['files'])+1,'members',(S/'source.zip').stat().st_size,'bytes; independent reconstruction pending')
