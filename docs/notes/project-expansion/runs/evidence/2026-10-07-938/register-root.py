from pathlib import Path
import subprocess,hashlib,json,shutil,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-diffutils-update-formal-938');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-07-938';A=Path('apps/gnu-diffutils');base='1ad5ec225f4bf32523e48764dde8dddf7c5d9dff';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();pub=json.loads((E.parent/'2026-10-07-936/PUBLICATION_RESULT.json').read_text());assert pub['status']=='published-and-verified'and pub['commit']==base
changed=subprocess.check_output(['git','diff','--name-only','--',str(A)],cwd=W).decode().splitlines();assert len(changed)==8,changed;new=[]
for lang in ['en','ja']:
 for p in sorted((W/A/'src/content/docs/v3-12'/lang/'01-guide').glob('*.md')):
  if int(p.name[:2])<44:continue
  assert h(p)==h(R/'docs/notes/document-import/gnu-diffutils/v3-12/updates/2026-10-07-chapters-5-9/canonical'/lang/'01-guide'/p.name)
  new.extend([str(p.relative_to(W)),str(A/'public/source/v3-12/edited'/lang/'01-guide'/p.name)])
assert len(new)==76
for rel in changed:
 old=subprocess.check_output(['git','show',base+':'+rel],cwd=W);assert (R/rel).read_bytes()==old,('Existing root ownpath modified',rel)
for rel in new:assert not(R/rel).exists(),rel
allowed=set(changed+new);protected={}
for rel in subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=R).decode().split(chr(0)):
 if not rel or rel in allowed or rel.startswith(str(E.relative_to(R))+'/'):continue
 p=R/rel
 if p.is_file()and not p.is_symlink():protected[rel]=h(p)
(E/'ROOT_OTHER_INPUTS_BEFORE.json').write_text(json.dumps(protected,indent=2)+'\n');oldpreferred={str(p.relative_to(R)):h(p)for p in(R/A/'src/content/docs/v3-12').rglob('*.md')};assert len(oldpreferred)==87
for rel in changed:
 p=E/'root-before'/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes((R/rel).read_bytes())
for rel in sorted(allowed):p=R/rel;p.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(W/rel,p)
assert all(h(R/rel)==sha for rel,sha in protected.items());assert all(h(R/rel)==sha for rel,sha in oldpreferred.items());assert len(list((R/A/'src/content/docs/v3-12').rglob('*.md')))==125
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(W),'baseline':base,'existingChangedFiles':changed,'newFiles':new,'registeredFiles':84,'old87PreferredSHAExact':True,'protectedOtherFiles':len(protected),'allProtectedOtherSHAExact':True,'noUserFilesOverwritten':True,'rootTemplateBridges':'No shared/own existingtemplate source copied; only8derived metadata/kit and76newpreferred/edited files','deploymentExclusion':'Awaiting finalledger verification, no rootpush. Isolatedpublic branch will contain only84appfiles.'};(E/'ROOT_SCOPED_REGISTRATION.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items()if k not in ['newFiles','existingChangedFiles']},ensure_ascii=False))
