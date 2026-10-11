from pathlib import Path
import subprocess,hashlib,json,shutil,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-tar-update-986');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-12-994';A=Path('apps/gnu-tar');base='9913e11f258e974870420c1f2993e6f839eebc4e';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();current=json.loads((E/'BASELINE_INSPECTION.json').read_text());assert current['latestSuccessfulProduction']['sha']==base
changed=subprocess.check_output(['git','diff','--name-only','--',str(A)],cwd=W).decode().splitlines();assert len(changed)==7,changed;new=[]
for lang in ['en','ja']:
 for p in sorted((W/A/'src/content/docs/v1-35'/lang/'01-guide').glob('*.md')):
  if int(p.name.split('-')[0])<40:continue
  assert h(p)==h(R/'docs/notes/document-import/gnu-tar/v1-35/updates/2026-10-12-option-summary/preferred'/lang/'01-guide'/p.name)
  new.extend([str(p.relative_to(W)),str(A/'public/source/v1-35/edited'/lang/'01-guide'/p.name)])
assert len(new)==20
for rel in changed:
 old=subprocess.check_output(['git','show',base+':'+rel],cwd=W)
 if rel.endswith('[...slug].astro'):
  assert (R/rel).read_bytes()==old or b''.join((R/rel).read_bytes().split())==b''.join(old.split()),('Existing root route substantive modification',rel)
 else:assert (R/rel).read_bytes()==old,('Existing root ownpath modified',rel)
for rel in new:assert not(R/rel).exists(),rel
allowed=set(changed+new);protected={}
for rel in subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=R).decode().split(chr(0)):
 if not rel or rel in allowed or rel.startswith(str(E.relative_to(R))+'/'):continue
 p=R/rel
 if p.is_file()and not p.is_symlink():protected[rel]=h(p)
(E/'ROOT_OTHER_INPUTS_BEFORE.json').write_text(json.dumps(protected,indent=2)+'\n');oldpreferred={str(p.relative_to(R)):h(p)for p in(R/A/'src/content/docs/v1-35').rglob('*.md')};assert len(oldpreferred)==80
for rel in changed:
 p=E/'root-before'/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes((R/rel).read_bytes())
for rel in sorted(allowed):p=R/rel;p.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(W/rel,p)
assert all(h(R/rel)==sha for rel,sha in protected.items());assert all(h(R/rel)==sha for rel,sha in oldpreferred.items());assert len(list((R/A/'src/content/docs/v1-35').rglob('*.md')))==90
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(W),'baseline':base,'existingChangedFiles':changed,'newFiles':new,'registeredFiles':27,'old80PreferredSHAExact':True,'protectedOtherFiles':len(protected),'allProtectedOtherSHAExact':True,'noUserFilesOverwritten':True,'rootTemplateBridges':'No shared package/template source copied; Only7app generated metadata andkit files, plus20newpreferred/edited files','deploymentExclusion':'Awaiting finalledger verification, no rootpush. Isolatedpublic branch will contain only27appfiles.'};(E/'ROOT_SCOPED_REGISTRATION.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items()if k not in ['newFiles','existingChangedFiles']},ensure_ascii=False))
