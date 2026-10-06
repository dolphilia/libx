from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,datetime,stat
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-sed-formal-898');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-900';n=Path('docs/notes/document-import/gnu-sed/v4-10');N=W/n;A=W/'apps/gnu-sed';P=A/'public/source/v4-10';B=Path('/private/tmp/libx-gnu-sed-source-package-900');Q=Path('/private/tmp/libx-gnu-sed-source-rebuild-900');assert not B.exists() and not Q.exists();h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
review=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert review['completedPages']==12
for row in review['pages']:
 for role in ['source','canonical','translation']:assert h(W/row[role]['path'])==row[role]['sha256']
for rel in subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split(chr(0)):
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/','templates/')) or ('/' not in rel and p.is_file() and not rel.startswith('AGENTS')):
  dest=B/'workspace'/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,dest)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/gnu-sed"\n  - "packages/*"\n')
for parent in [A,N]:
 for p in sorted(parent.rglob('*')):
  if not p.is_file() or p.is_symlink():continue
  rel=p.relative_to(W)
  if any(part in ['node_modules','dist','.astro','__pycache__']for part in rel.parts) or p==P/'source.zip' or p.name in ['PROGRESS.json','PLANNED_ROUTES.json']:continue
  dest=B/'workspace'/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,dest)
evidence=[Path('docs/notes/project-expansion/runs/evidence/2026-10-06-899')/name for name in ['CANONICAL_BINDING_BATCH2_FINAL.json','MEANING_DELTA_REVIEW.json']]
evidence += [Path(row['separatePassTranscript']['path'])for row in review['pages'] if 'separatePassTranscript' in row]
for rel in evidence:
 dest=B/'workspace'/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(R/rel,dest)
shutil.copy2(N/'SOURCE_OFFER_README.md',B/'README.md');shutil.copy2(N/'SOURCE_MANIFEST.json',B/'SOURCE_MANIFEST.json')
components={'schemaVersion':1,'upstreamVersion':'4.10','originalArchiveSHA256':json.loads((N/'SOURCE_MANIFEST.json').read_text())['archiveSHA256'],'documentRevision':'20 April 2026','buildContextBase':'faae5fa043432e7da9d73a66d248a08ea84f76b1','scope':'Complete chapters1–3 in12EN+12JA;4footnotes;whole original English GFDL reference;remaining10chapter complete manual/Info/Texinfo original','preferredEditableInputs':'workspace/docs/notes/document-import/gnu-sed/v4-10/translations/*-ja.json and *-units.json;25Markdown originals/translations and portable helpers included','terms':'GFDL1.3-or-later for originalmanual and modifieddocumentation,noInvariantSections/noCoverTexts;original1998–2026 copyright/permission/fullEnglishLicense/4authors/FSF/LibxmodificationTitleCopyrightHistory retained. Unchanged originalsoftwarearchive contains originalGPL notices and source;no originalGNU sed executable compiled/bundled/run. SharedLibx files retain existing notices.','sourceSelfExcluded':True,'installedDependenciesExcluded':True,'generatedBuildOutputExcluded':True,'operationProgressExcluded':'Deployment/host-specific progress not required to rebuild;full source and content-review bindings included','files':[{'path':str(p.relative_to(B)),'sha256':h(p),'bytes':p.stat().st_size}for p in sorted(B.rglob('*'))if p.is_file()]}
(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(components,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(P/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(P/'source.zip')as z:
 assert len(z.namelist())==len(components['files'])+1 and not any(name.endswith('/source.zip')for name in z.namelist())
 for i in z.infolist():p=Path(i.filename);assert not p.is_absolute() and '..' not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 for row in components['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
 z.extractall(Q)
shutil.copy2(P/'source.zip',Q/'workspace/apps/gnu-sed/public/source/v4-10/source.zip')
proof={'status':'passed-source-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSHA256':h(P/'source.zip'),'bytes':(P/'source.zip').stat().st_size,'members':len(components['files'])+1,'preferredDocuments':25,'originalInputs':14,'translationInputs':12,'wholeMeaningReviews':12,'allMemberHashesVerified':True,'safeExtraction':True,'recursiveSelfZIP':False,'installedDependencies':False,'sourcePackage':str(B),'reconstructionWorkspace':str(Q/'workspace'),'publicPath':'/docs/gnu-sed/source/v4-10/source.zip','reconstruction':'pending'}
(E/'SOURCE_OFFER.json').write_text(json.dumps(proof,ensure_ascii=False,indent=2)+'\n');print(json.dumps(proof,ensure_ascii=False))
