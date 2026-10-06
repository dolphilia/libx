from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,datetime,stat
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-grep-formal-903');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-906';n=Path('docs/notes/document-import/gnu-grep/v3-12');N=W/n;A=W/'apps/gnu-grep';P=A/'public/source/v3-12';B=Path('/private/tmp/libx-gnu-grep-source-package-906-final');Q=Path('/private/tmp/libx-gnu-grep-source-rebuild-906-final');assert not B.exists() and not Q.exists();h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
review=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert review['completedPages']==24
for row in review['pages']:
 for role in ['source','canonical','translation']:assert h(W/row[role]['path'])==row[role]['sha256']
for rel in subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split(chr(0)):
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/','templates/')) or ('/' not in rel and p.is_file() and not rel.startswith('AGENTS')):
  dest=B/'workspace'/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,dest)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/gnu-grep"\n  - "packages/*"\n')
for parent in [A,N]:
 for p in sorted(parent.rglob('*')):
  if not p.is_file() or p.is_symlink():continue
  rel=p.relative_to(W)
  if any(part in ['node_modules','dist','.astro','__pycache__']for part in rel.parts) or p==P/'source.zip' or p.name in ['PROGRESS.json','PLANNED_ROUTES.json','CANONICAL_BINDING.json']:continue
  dest=B/'workspace'/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,dest)
evidence=[Path('docs/notes/project-expansion/runs/evidence/2026-10-06-905')/name for name in ['REVIEW_FROZEN.json','CANONICAL_BINDING_BATCH3.json','MEANING_DELTA_REVIEW.json','BATCH3_DRAFT_DELTA_BINDING.json']]
for rel in evidence:
 dest=B/'workspace'/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(R/rel,dest)
shutil.copy2(N/'SOURCE_OFFER_README.md',B/'README.md');shutil.copy2(N/'SOURCE_MANIFEST.json',B/'SOURCE_MANIFEST.json')
components={'schemaVersion':1,'upstreamVersion':'3.12','originalArchiveSHA256':json.loads((N/'SOURCE_MANIFEST.json').read_text())['archiveSHA256'],'documentRevision':'2 January 2025','buildContextBase':'2151cecac964a5227a763e1179e3bca5294d0395','scope':'Complete chapters1–4 in24EN+24JA;nofootnotes;whole original English GFDL reference;remaining3chapter complete manual/Info/Texinfo original','preferredEditableInputs':'workspace/docs/notes/document-import/gnu-grep/v3-12/translations/*-ja.json and *-units.json;49Markdown originals/translations and portable helpers included','terms':'GFDL1.3-or-later for originalmanual and modifieddocumentation,noInvariantSections/noCoverTexts;original1999–2002,2005,2008–2025 copyright/permission/fullEnglishLicense/AlainMagloireEtAl/FSF/LibxmodificationTitleCopyrightHistory retained. Unchanged originalsoftwarearchive contains originalGPL notices and source;no originalGNU sed executable compiled/bundled/run. SharedLibx files retain existing notices.','sourceSelfExcluded':True,'installedDependenciesExcluded':True,'generatedBuildOutputExcluded':True,'operationProgressExcluded':'Deployment/host-specific progress not required to rebuild;full source and content-review bindings included','files':[{'path':str(p.relative_to(B)),'sha256':h(p),'bytes':p.stat().st_size}for p in sorted(B.rglob('*'))if p.is_file()]}
(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(components,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(P/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(P/'source.zip')as z:
 assert len(z.namelist())==len(components['files'])+1 and not any(name.endswith('/source.zip')for name in z.namelist())
 for i in z.infolist():p=Path(i.filename);assert not p.is_absolute() and '..' not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 for row in components['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
 z.extractall(Q)
shutil.copy2(P/'source.zip',Q/'workspace/apps/gnu-grep/public/source/v3-12/source.zip')
proof={'status':'passed-source-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSHA256':h(P/'source.zip'),'bytes':(P/'source.zip').stat().st_size,'members':len(components['files'])+1,'preferredDocuments':49,'originalInputs':12,'translationInputs':24,'wholeMeaningReviews':24,'allMemberHashesVerified':True,'safeExtraction':True,'recursiveSelfZIP':False,'installedDependencies':False,'sourcePackage':str(B),'reconstructionWorkspace':str(Q/'workspace'),'publicPath':'/docs/gnu-grep/source/v3-12/source.zip','reconstruction':'pending'}
(E/'SOURCE_OFFER.json').write_text(json.dumps(proof,ensure_ascii=False,indent=2)+'\n');print(json.dumps(proof,ensure_ascii=False))
