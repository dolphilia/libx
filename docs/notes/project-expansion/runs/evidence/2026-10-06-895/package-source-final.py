from pathlib import Path
import json,hashlib,shutil,subprocess,zipfile,datetime,stat
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-pcre2-formal-893');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-895';n=Path('docs/notes/document-import/pcre2/v10-49');N=W/n;A=W/'apps/pcre2';S=A/'public/source/v10-49';B=Path('/private/tmp/libx-pcre2-source-package-895b');Q=Path('/private/tmp/libx-pcre2-source-rebuild-895b');assert not B.exists() and not Q.exists();sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();shutil.copy2(R/n/'SOURCE_OFFER_README.md',N/'SOURCE_OFFER_README.md');shutil.copy2(N/'SOURCE_OFFER_README.md',S/'SOURCE_README.md')
for rel in subprocess.check_output(['git','ls-files','-z'],cwd=W).decode().split(chr(0)):
 if not rel:continue
 p=W/rel
 if rel.startswith(('packages/','scripts/','config/','templates/'))or('/'not in rel and p.is_file()and not rel.startswith('AGENTS')):
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
(B/'workspace/pnpm-workspace.yaml').write_text('packages:'+chr(10)+'  - "apps/pcre2"'+chr(10)+'  - "packages/*"'+chr(10))
for parent in [A,N]:
 for p in parent.rglob('*'):
  if not p.is_file()or p.is_symlink():continue
  rel=p.relative_to(W)
  if any(x in rel.parts for x in ['node_modules','dist','.astro'])or p==S/'source.zip'or p.name.endswith('.partial.json'):continue
  q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
for name in ['MEANING_REVIEW.json','MEANING_REVIEW_DRAFT.json','SYNTAX_WHOLE_REVIEW.json','SYNTAX_MEANING_DELTA.json','DRAFT_LITERAL_BINDINGS.json','DRAFT_ESCAPE_CORRECTION.json']:
 rel=Path('docs/notes/project-expansion/runs/evidence/2026-10-06-894')/name;p=R/rel;q=B/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
shutil.copy2(S/'SOURCE_README.md',B/'README.md');shutil.copy2(N/'SOURCE_MANIFEST.json',B/'SOURCE_MANIFEST.json')
c={'schemaVersion':1,'fixedOriginalCommit':'6f9d7c1373262c541324a16a358785b33ef116cf','tag':'pcre2-10.49','buildContextBase':'8e2a6d55b6c4cbdd3c4b36bf3b5a667afbf8b3e9','scope':'5 complete English+Japanese manuals/51pre each; remaining101HTML+2text fixedEnglish','preferredEditableInputs':'workspace/docs/notes/document-import/pcre2/v10-49/translations/batch-894/*-ja.json and *-units.json; canonical/en+ja and appMD copies included','terms':'BSD-3-Clause WITH PCRE2-exception; full originalLICENCE and per-manual author/revision/copyright retained. SharedLibx files retain own existing notices. No originalengine/SLJIT/binary execution.','sourceSelfExcluded':True,'files':[{'path':str(p.relative_to(B)),'sha256':sha(p)}for p in sorted(B.rglob('*'))if p.is_file()]};(B/'SOURCE_COMPONENTS.json').write_text(json.dumps(c,ensure_ascii=False,indent=2)+chr(10))
with zipfile.ZipFile(S/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
 for p in sorted(B.rglob('*')):
  if p.is_file():i=zipfile.ZipInfo(str(p.relative_to(B)),date_time=(2026,10,6,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,p.read_bytes())
with zipfile.ZipFile(S/'source.zip')as z:
 assert len(z.namelist())==len(c['files'])+1 and not any(n.endswith('/source.zip')for n in z.namelist())
 for i in z.infolist():p=Path(i.filename);assert not p.is_absolute()and'..'not in p.parts and not stat.S_ISLNK(i.external_attr>>16)
 for row in c['files']:assert hashlib.sha256(z.read(row['path'])).hexdigest()==row['sha256']
 z.extractall(Q)
shutil.copy2(S/'source.zip',Q/'workspace/apps/pcre2/public/source/v10-49/source.zip');proof={'status':'passed-package-member-hashes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archiveSha256':sha(S/'source.zip'),'bytes':(S/'source.zip').stat().st_size,'members':len(c['files'])+1,'preferredDocuments':10,'originalFiles':110,'allMemberHashesVerified':True,'recursiveSelfZIP':False,'sourcePackage':str(B),'publicPath':'/docs/pcre2/source/v10-49/source.zip','reconstruction':'pending','safeExtraction':True,'reconstructionWorkspace':str(Q/'workspace')};(E/'SOURCE_OFFER.json').write_text(json.dumps(proof,indent=2)+chr(10));print(json.dumps(proof))
