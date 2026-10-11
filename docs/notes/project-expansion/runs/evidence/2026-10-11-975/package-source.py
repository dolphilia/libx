from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,stat,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-m4-formal-971');n=Path('docs/notes/document-import/gnu-m4/v1-4-21');N=R/n;A=W/'apps/gnu-m4';P=A/'public/source/v1-4-21';E=Path(__file__).resolve().parent;B=Path('/private/tmp/libx-gnu-m4-source-package-975-final');Q=Path('/private/tmp/libx-gnu-m4-source-rebuild-975-final');assert not B.exists()and not Q.exists();sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
review=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert review['completedPages']==18
for r in review['pages']:
 for role in ['source','canonical','translation']:assert sha(R/r[role]['path'])==r[role]['sha256']
def copy(p,t):t.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,t)
for rel in subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split(chr(0)):
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/','templates/'))or rel in ['package.json','pnpm-lock.yaml','pnpm-workspace.yaml','.npmrc','LICENSE','README.md','tsconfig.json']:
  if p.is_file():copy(p,B/'workspace'/rel)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/gnu-m4"\n  - "packages/*"\n')
for p in sorted(A.rglob('*')):
 if not p.is_file()or p.is_symlink():continue
 rel=p.relative_to(W)
 if any(x in ['node_modules','dist','.astro','__pycache__']for x in rel.parts)or p.name=='source.zip':continue
 copy(p,B/'workspace'/rel)
for p in sorted(N.rglob('*')):
 if not p.is_file()or p.is_symlink():continue
 rel=p.relative_to(N)
 if any(x in ['workspace-snapshot','__pycache__']for x in rel.parts)or p.name in ['PROGRESS.json','source-offer.zip','SOURCE_COMPONENTS.json']:continue
 if rel.parts[0]=='trial'and str(rel)!='trial/project.config.jsonc':continue
 copy(p,B/'workspace'/n/rel)
for name in ['REVIEW_BEFORE.json','FINAL_CONTEXT_BINDING.json','REVIEW_FINAL_CONTEXT_FROZEN.json']:
 copy(E/name,B/'workspace'/E.relative_to(R)/name)
for p in (E/'preferred-before').rglob('*'):
 if p.is_file():copy(p,B/'workspace'/p.relative_to(R))
copy(N/'SOURCE_OFFER_README.md',B/'README.md')
components={'schemaVersion':1,'upstreamVersion':'1.4.21','scope':'Complete chapters1–3/footnote1;18EN+18JA guides and1English GFDL reference;fixed whole manual/Info/Texinfo/archive','baseCommit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=W,text=True).strip(),'originalArchiveSHA256':'38ae59f7a30bf9c108193cc5c25fbb06014f21e230c7ede2eff614f7b7c37ed8','preferredEditingInputs':'workspace/docs/notes/document-import/gnu-m4/v1-4-21/translate-batch{1,2,3}.py and all37 preferred Markdown documents','terms':'GFDL1.3-or-later with no Invariant Sections, no Front-Cover or Back-Cover Texts;full original notice/authors/History and modified title/Libx publisher/copyright preserved. Original software and shared code retain their own notices.','selfZIPExcluded':True,'installedDependenciesExcluded':True,'buildOutputExcluded':True,'files':[{'path':str(p.relative_to(B)),'sha256':sha(p),'bytes':p.stat().st_size}for p in sorted(B.rglob('*'))if p.is_file()]};(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(components,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(P/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,11,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(P/'source.zip')as z:
 assert len(z.namelist())==len(components['files'])+1
 for i in z.infolist():p=Path(i.filename);assert not p.is_absolute()and'..'not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 for r in components['files']:assert hashlib.sha256(z.read(r['path'])).hexdigest()==r['sha256']
 z.extractall(Q)
copy(P/'source.zip',Q/'workspace/apps/gnu-m4/public/source/v1-4-21/source.zip');copy(P/'source.zip',N/'source-offer.zip');copy(B/'SOURCE_COMPONENTS.json',N/'SOURCE_COMPONENTS.json')
proof={'status':'passed-source-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sha256':sha(P/'source.zip'),'bytes':(P/'source.zip').stat().st_size,'members':len(components['files'])+1,'preferredDocuments':37,'wholeMeaningReviews':18,'originalInputs':16,'allMemberHashesVerified':True,'safeExtraction':True,'selfZIP':False,'installedDependencies':False,'sourcePackage':str(B),'reconstructionWorkspace':str(Q/'workspace'),'publicPath':'/docs/gnu-m4/source/v1-4-21/source.zip','reconstruction':'pending'};(E/'SOURCE_OFFER.json').write_text(json.dumps(proof,ensure_ascii=False,indent=2)+'\n');print(proof)
