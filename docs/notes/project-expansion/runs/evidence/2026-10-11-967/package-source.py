from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,stat,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-tar-formal-964');n=Path('docs/notes/document-import/gnu-tar/v1-35');N=R/n;A=W/'apps/gnu-tar';P=A/'public/source/v1-35';E=Path(__file__).resolve().parent;B=Path('/private/tmp/libx-gnu-tar-source-package-967-fixed2');Q=Path('/private/tmp/libx-gnu-tar-source-rebuild-967-fixed2');assert not B.exists()and not Q.exists();sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
review=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert review['completedPages']==31
for r in review['pages']:
 for role in ['source','canonical','translation']:assert sha(R/r[role]['path'])==r[role]['sha256']
for rel in subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split(chr(0)):
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/','templates/'))or rel in ['package.json','pnpm-lock.yaml','pnpm-workspace.yaml','.npmrc','LICENSE','README.md','tsconfig.json']:
  if p.is_file():d=B/'workspace'/rel;d.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,d)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/gnu-tar"\n  - "packages/*"\n')
for p in sorted(A.rglob('*')):
 if not p.is_file()or p.is_symlink():continue
 rel=p.relative_to(W)
 if any(x in ['node_modules','dist','.astro','__pycache__']for x in rel.parts)or p.name=='source.zip':continue
 d=B/'workspace'/rel;d.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,d)
for p in sorted(N.rglob('*')):
 if not p.is_file()or p.is_symlink():continue
 rel=p.relative_to(N)
 if any(x in ['workspace-snapshot','__pycache__']for x in rel.parts)or p.name in ['PROGRESS.json','source-offer.zip','SOURCE_COMPONENTS.json']:continue
 if rel.parts[0]=='trial'and str(rel)not in ['trial/project.config.jsonc','trial/preferred/en/01-guide/01-introduction.md']:continue
 d=B/'workspace'/n/rel;d.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,d)
shutil.copy2(N/'SOURCE_OFFER_README.md',B/'README.md')
components={'schemaVersion':1,'upstreamVersion':'1.35','scope':'Complete chapters1–2/footnote1;31EN+31JA guides and2English license references;fixed whole manual/Info/Texinfo/archive','baseCommit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=W,text=True).strip(),'originalArchiveSHA256':'14d55e32063ea9526e057fbf35fcabd53378e769787eff7919c3755b02d2b57e','preferredEditingInputs':'workspace/docs/notes/document-import/gnu-tar/v1-35/translate-batch{1,2,3}.py and all64 preferred Markdown documents','terms':'GFDL1.3-or-later with declared invariant GNU General Public License, Front-Cover Text A GNU Manual, Back-Cover Text You have the freedom to copy and modify this GNU manual.;whole unchanged same-archive COPYING supplement;full original notices/authors/History, modified title/Libx publisher/copyright preserved. Original software and shared code retain their own notices.','originalGPLAppendixLimitation':'Original has no GPL appendix;same-archive COPYING supplied explicitly without claiming historical intended identity proof.','selfZIPExcluded':True,'installedDependenciesExcluded':True,'buildOutputExcluded':True,'files':[{'path':str(p.relative_to(B)),'sha256':sha(p),'bytes':p.stat().st_size}for p in sorted(B.rglob('*'))if p.is_file()]};(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(components,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(P/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,11,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(P/'source.zip')as z:
 assert len(z.namelist())==len(components['files'])+1
 for i in z.infolist():p=Path(i.filename);assert not p.is_absolute()and'..'not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 for r in components['files']:assert hashlib.sha256(z.read(r['path'])).hexdigest()==r['sha256']
 z.extractall(Q)
shutil.copy2(P/'source.zip',Q/'workspace/apps/gnu-tar/public/source/v1-35/source.zip');shutil.copy2(P/'source.zip',N/'source-offer.zip');shutil.copy2(B/'SOURCE_COMPONENTS.json',N/'SOURCE_COMPONENTS.json')
proof={'status':'passed-source-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sha256':sha(P/'source.zip'),'bytes':(P/'source.zip').stat().st_size,'members':len(components['files'])+1,'preferredDocuments':64,'wholeMeaningReviews':31,'originalInputs':24,'allMemberHashesVerified':True,'safeExtraction':True,'selfZIP':False,'installedDependencies':False,'sourcePackage':str(B),'reconstructionWorkspace':str(Q/'workspace'),'publicPath':'/docs/gnu-tar/source/v1-35/source.zip','reconstruction':'pending'};(E/'SOURCE_OFFER.json').write_text(json.dumps(proof,ensure_ascii=False,indent=2)+'\n');print(proof)
