from pathlib import Path
import subprocess,hashlib,json,shutil,datetime,re
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-m4-formal-971');E=Path(__file__).resolve().parent;A=Path('apps/gnu-m4');assert not(R/A).exists();h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();allowed={'.prettierignore','pnpm-lock.yaml'};protected={}
for rel in subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=R).decode().split(chr(0)):
 if not rel or rel in allowed or rel.startswith(str(E.relative_to(R))+'/'):continue
 p=R/rel
 if p.is_file()and not p.is_symlink():protected[rel]=h(p)
(E/'ROOT_OTHER_INPUTS_BEFORE.json').write_text(json.dumps(protected,indent=2)+'\n');new=[]
for p in (W/A).rglob('*'):
 if not p.is_file()or p.is_symlink()or any(x in ['node_modules','dist','.astro','__pycache__']for x in p.relative_to(W/A).parts):continue
 rel=p.relative_to(W);d=R/rel;d.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,d);new.append(str(rel))
for rel in allowed:
 d=E/'root-before'/rel;d.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(R/rel,d)
p=R/'pnpm-lock.yaml';s=p.read_text();assert '  apps/gnu-m4:'not in s;block=re.search(r'^  apps/gnu-m4:\n.*?(?=^  \S|\Z)',(W/'pnpm-lock.yaml').read_text(),re.M|re.S).group();assert len(block.splitlines())==33;assert '  apps/gnu-sed:'in s;s=s.replace('  apps/gnu-sed:',block+'  apps/gnu-sed:',1);p.write_text(s)
p=R/'.prettierignore';s=p.read_text();assert 'apps/gnu-m4/'not in s;s+='\n# GNU M4 fixed sources and reviewed hash-bound inputs retain bytes.\ndocs/notes/document-import/gnu-m4/**\napps/gnu-m4/src/content/docs/**\napps/gnu-m4/public/source/**\napps/gnu-m4/src/config/project.config.jsonc\n';p.write_text(s)
assert all(h(R/rel)==sha for rel,sha in protected.items());assert all((R/x).read_bytes()==(W/x).read_bytes()for x in new)
(E/'ROOT_SCOPED_REGISTRATION.json').write_text(json.dumps({'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseline':'32cbf39324f24ac653c25902315b25b72f30bf9d','workspace':str(W),'newFiles':sorted(new),'existingChangedFiles':sorted(allowed),'registeredFiles':len(new)+2,'protectedOtherFiles':len(protected),'allProtectedOtherSHAExact':True,'lockChange':'Only33-line apps/gnu-m4 importer inserted;other existing bytes retained','ignoreChange':'Only6-line GNU M4 hash-bound artifact formatting exclusions appended','noUserFilesOverwritten':True},indent=2)+'\n');print('Registered',len(new)+2,'files, protected',len(protected))
