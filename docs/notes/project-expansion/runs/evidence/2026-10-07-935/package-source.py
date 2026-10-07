from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,datetime,stat
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-ed-formal-934');E=Path(__file__).resolve().parent;n=Path('docs/notes/document-import/gnu-ed/v1-22-6');N=W/n;A=W/'apps/gnu-ed';P=A/'public/source/v1-22-6';B=Path('/private/tmp/libx-gnu-ed-source-package-935');Q=Path('/private/tmp/libx-gnu-ed-source-rebuild-935');assert not B.exists() and not Q.exists();h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
review=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert review['completedPages']==12
for row in review['pages']:
 for role in ['source','canonical','translation']:
  path=Path(row[role]['path']);assert h(W/path)==row[role]['sha256']
def copy(p,rel):
 q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
for rel in subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split(chr(0)):
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/','templates/')) or ('/'not in rel and p.is_file()and not rel.startswith(('AGENTS','.env'))):copy(p,rel)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:\n  - "apps/gnu-ed"\n  - "packages/*"\n')
for p in sorted(A.rglob('*')):
 if not p.is_file()or p.is_symlink()or any(part in ['node_modules','dist','.astro']for part in p.relative_to(A).parts)or p==P/'source.zip':continue
 copy(p,p.relative_to(W))
folders=['source','drafts','translations','canonical','source-fragments'];files=['SOURCE_MANIFEST.json','CANDIDATE_DRAFT.json','EXTRACTION.json','DRAFT_REVIEW_MANIFEST.json','REVIEW_MANIFEST.json','SOURCE_OFFER_README.md','regenerate-en.py','extract-units.py','translation_nodes.py','render-translations.py','prepare-notice-draft.py','import-canonical.py','check-draft-render.py']
for name in folders:
 for p in sorted((N/name).rglob('*')):
  if p.is_file()and '__pycache__'not in p.parts:copy(p,p.relative_to(W))
for name in files:copy(N/name,n/name)
shutil.copy2(N/'SOURCE_OFFER_README.md',B/'README.md');shutil.copy2(N/'SOURCE_MANIFEST.json',B/'SOURCE_MANIFEST.json')
assert len(list((B/'workspace'/n/'canonical').rglob('*.md')))==25
c={'schemaVersion':1,'upstreamVersion':'1.22.6','originalArchiveSHA256':json.loads((N/'SOURCE_MANIFEST.json').read_text())['archiveSHA256'],'buildContextBase':'d192c99f3009fd1949692867f6ffad65344fe8dc','scope':'Top and eleven complete chapters,12EN+12JA/16originalpre/15translated explanatory commentlines;complete original English GFDL reference','preferredEditableInputs':'12translation JSON + 12token maps + explanatory commentJSON;25editable Markdown;fixedoriginal Texinfo/Info/archive and UTF8servedHTML transformation included','terms':'GFDL1.3-or-later/noInvariant/noCover for manual and modifieddocs;original authors/copyright/permission/fullEnglishLicense/FSFpublisher/Libx separatetitle/history/date retained. Unmodified software archive retains its originalGPL source/notices;no executable compiled/bundled. SharedLibx files retain existingnotices.','installedDependenciesExcluded':True,'buildOutputExcluded':True,'selfZIPExcluded':True,'files':[{'path':str(p.relative_to(B)),'sha256':h(p),'bytes':p.stat().st_size}for p in sorted(B.rglob('*'))if p.is_file()]}
(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(P/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,7,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(P/'source.zip')as z:
 assert set(z.namelist())=={x['path']for x in c['files']}|{'SOURCE_COMPONENTS.json'}
 for i in z.infolist():p=Path(i.filename);assert not p.is_absolute()and '..'not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 for row in c['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
 z.extractall(Q)
shutil.copy2(P/'source.zip',Q/'workspace/apps/gnu-ed/public/source/v1-22-6/source.zip')
out={'status':'passed-source-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSHA256':h(P/'source.zip'),'members':len(c['files'])+1,'bytes':(P/'source.zip').stat().st_size,'preferredDocuments':25,'preferredTranslations':12,'wholeMeaningReviews':12,'allMemberHashesVerified':True,'safeExtraction':True,'recursiveSelfZIP':False,'installedDependencies':False,'sourcePackage':str(B),'reconstructionWorkspace':str(Q/'workspace'),'reconstruction':'pending'}
(E/'SOURCE_OFFER.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
