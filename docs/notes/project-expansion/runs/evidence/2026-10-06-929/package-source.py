from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,datetime,stat
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-time-formal-928');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-929';n=Path('docs/notes/document-import/gnu-time/v1-10');N=W/n;A=W/'apps/gnu-time';P=A/'public/source/v1-10';B=Path('/private/tmp/libx-gnu-time-source-package-929-v2');Q=Path('/private/tmp/libx-gnu-time-source-rebuild-929-v2');assert not B.exists() and not Q.exists();h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
review=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert review['completedPages']==3
for row in review['pages']:
 for role in ['source','canonical','translation']:assert h(W/row[role]['path'])==row[role]['sha256']
for rel in subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split(chr(0)):
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/','templates/')) or ('/' not in rel and p.is_file() and not rel.startswith('AGENTS')):
  dest=B/'workspace'/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,dest)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/gnu-time"\n  - "packages/*"\n')
for parent in [A,N]:
 for p in sorted(parent.rglob('*')):
  if not p.is_file() or p.is_symlink():continue
  rel=p.relative_to(W)
  if any(part in ['node_modules','dist','.astro','__pycache__']for part in rel.parts) or p==P/'source.zip' or p.name in ['PROGRESS.json','PLANNED_ROUTES.json','CANONICAL_BINDING.json']:continue
  dest=B/'workspace'/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,dest)
for cycle in ['2026-10-06-927','2026-10-06-928']:
 for p in (R/'docs/notes/project-expansion/runs/evidence'/cycle).glob('*.json'):
  dest=B/'workspace'/p.relative_to(R);dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,dest)
shutil.copy2(N/'SOURCE_OFFER_README.md',B/'README.md');shutil.copy2(N/'SOURCE_MANIFEST.json',B/'SOURCE_MANIFEST.json')
assert len(list((B/'workspace'/n/'canonical').rglob('*.md')))==7
components={'schemaVersion':1,'upstreamVersion':'1.10','originalArchiveSHA256':json.loads((N/'SOURCE_MANIFEST.json').read_text())['archiveSHA256'],'documentRevision':'13 February 2026','releaseDate':'14 April 2026','buildContextBase':'d192c99f3009fd1949692867f6ffad65344fe8dc','scope':'Topoverviewnotice and completechapters1–2 in3EN+3JA/9pre/28VAR;wholeoriginalEnglishGFDLreference;conceptindex viafixedwholemanual/Info/Texinfo/archive','preferredEditableInputs':'workspace/docs/notes/document-import/gnu-time/v1-10/translations/*-ja.json and *-units.json;7Markdown originals/translations and portable helpers included','terms':'GFDL1.3-or-later for originalmanual and modifieddocumentation,noInvariantSections/noCoverTexts;originalFSF1991–2021,2026 copyright/permission/fullEnglishLicense/DavidMacKenzie/FSF/LibxmodificationTitleCopyrightHistory retained. Unchanged originalsoftwarearchive contains originalGPL notices and source;no originalGNU Time executable compiled/bundled/run. SharedLibx files retain existing notices.','sourceSelfExcluded':True,'installedDependenciesExcluded':True,'generatedBuildOutputExcluded':True,'operationProgressExcluded':'Deployment/host-specific progress not required to rebuild;full source and content-review bindings included','files':[{'path':str(p.relative_to(B)),'sha256':h(p),'bytes':p.stat().st_size}for p in sorted(B.rglob('*'))if p.is_file()]}
(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(components,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(P/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(P/'source.zip')as z:
 assert len(z.namelist())==len(components['files'])+1 and not any(name.endswith('/source.zip')for name in z.namelist())
 for i in z.infolist():p=Path(i.filename);assert not p.is_absolute() and '..' not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 for row in components['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
 z.extractall(Q)
shutil.copy2(P/'source.zip',Q/'workspace/apps/gnu-time/public/source/v1-10/source.zip')
proof={'status':'passed-source-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSHA256':h(P/'source.zip'),'bytes':(P/'source.zip').stat().st_size,'members':len(components['files'])+1,'preferredDocuments':7,'originalInputs':11,'translationInputs':3,'wholeMeaningReviews':3,'allMemberHashesVerified':True,'safeExtraction':True,'recursiveSelfZIP':False,'installedDependencies':False,'sourcePackage':str(B),'reconstructionWorkspace':str(Q/'workspace'),'publicPath':'/docs/gnu-time/source/v1-10/source.zip','reconstruction':'pending'}
(E/'SOURCE_OFFER.json').write_text(json.dumps(proof,ensure_ascii=False,indent=2)+'\n');print(json.dumps(proof,ensure_ascii=False))
