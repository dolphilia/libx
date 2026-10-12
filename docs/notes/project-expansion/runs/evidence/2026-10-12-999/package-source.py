from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,stat,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-libtool-998');n=Path('docs/notes/document-import/gnu-libtool/v2-6-2');N=R/n;A=W/'apps/gnu-libtool';P=A/'public/source/v2-6-2';E=Path(__file__).resolve().parent;B=Path('/private/tmp/libx-libtool-source-package-999-final');Q=Path('/private/tmp/libx-libtool-source-rebuild-999-final');assert not B.exists() and not Q.exists();sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def copy(p,t):t.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,t)
shutil.copytree(N/'preferred',P/'edited',dirs_exist_ok=True);copy(N/'SOURCE_OFFER_README.md',P/'SOURCE_README.md')
for rel in subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split(chr(0)):
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/','templates/')) or rel in ['package.json','pnpm-lock.yaml','pnpm-workspace.yaml','.npmrc','LICENSE','README.md','tsconfig.json']:
  if p.is_file():copy(p,B/'workspace'/rel)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/gnu-libtool"\n  - "packages/*"\n')
for p in sorted(A.rglob('*')):
 if not p.is_file() or p.is_symlink():continue
 rel=p.relative_to(W)
 if any(x in ['node_modules','dist','.astro','__pycache__']for x in rel.parts)or p.name=='source.zip':continue
 copy(p,B/'workspace'/rel)
for p in sorted(N.rglob('*')):
 if not p.is_file()or p.is_symlink():continue
 rel=p.relative_to(N)
 if any(x in ['workspace-snapshot','__pycache__']for x in rel.parts)or p.name in ['PROGRESS.json','source-offer.zip','SOURCE_COMPONENTS.json']:continue
 if rel.parts[0]=='trial'and str(rel)not in ['app/src/config/project.config.jsonc','app/src/content/docs/v2-6-2/en/01-guide/01-libtool-paradigm.md']and str(rel)not in ['trial/app/src/config/project.config.jsonc','trial/app/src/content/docs/v2-6-2/en/01-guide/01-libtool-paradigm.md']:continue
 copy(p,B/'workspace'/n/rel)
copy(N/'SOURCE_OFFER_README.md',B/'README.md')
components={'schemaVersion':1,'upstreamVersion':'2.6.2','scope':'Complete chapters2–3,10EN+10JA guides/1English GFDLreference/wholefootnotes1–4/fixedcompleteoriginal/Texinfo/archive','baseCommit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=W,text=True).strip(),'originalArchiveSHA256':'24adb3aa9ae035c70faba344af57d73215eb89281045af6c7ccd307751f8b0bf','terms':'GFDL1.3-or-later,noInvariantSections,noFrontCoverTexts,noBackCoverTexts;originalnotices/authors/fullEnglishGFDL/distinctmodifiedtitle/History preserved;original software/sharedbuild sources retain their notices.','selfZIPExcluded':True,'installedDependenciesExcluded':True,'buildOutputExcluded':True,'files':[{'path':str(p.relative_to(B)),'sha256':sha(p),'bytes':p.stat().st_size}for p in sorted(B.rglob('*'))if p.is_file()]}
components['originalArchiveSHA256']=sha(N/'source/downloads/libtool-2.6.2.tar.gz');(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(components,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(P/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,12,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(P/'source.zip')as z:
 assert len(z.namelist())==len(components['files'])+1
 for i in z.infolist():p=Path(i.filename);assert not p.is_absolute() and '..'not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 for r in components['files']:assert hashlib.sha256(z.read(r['path'])).hexdigest()==r['sha256']
 z.extractall(Q)
copy(P/'source.zip',N/'source-offer.zip');copy(B/'SOURCE_COMPONENTS.json',N/'SOURCE_COMPONENTS.json')
proof={'status':'passed-safe-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sha256':sha(P/'source.zip'),'bytes':(P/'source.zip').stat().st_size,'members':len(components['files'])+1,'preferredDocuments':21,'wholeMeaningReviews':10,'originalInputs':20,'allMemberHashesVerified':True,'safeExtraction':True,'selfZIP':False,'installedDependencies':False,'sourcePackage':str(B),'reconstructionWorkspace':str(Q/'workspace'),'publicPath':'/docs/gnu-libtool/source/v2-6-2/source.zip','reconstruction':'pending'};(E/'SOURCE_OFFER.json').write_text(json.dumps(proof,ensure_ascii=False,indent=2)+'\n');print(proof)
