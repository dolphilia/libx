from pathlib import Path
import subprocess,hashlib,json,shutil,datetime,re
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-tar-formal-964');E=Path(__file__).resolve().parent;A=Path('apps/gnu-tar');assert not(R/A).exists();h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();allowed={'.prettierignore','pnpm-lock.yaml'};protected={}
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
p=R/'pnpm-lock.yaml';s=p.read_text();assert '  apps/gnu-tar:'not in s;block=re.search(r'^  apps/gnu-tar:\n.*?(?=^  \S|\Z)',(W/'pnpm-lock.yaml').read_text(),re.M|re.S).group();assert len(block.splitlines())==33;assert '  apps/gnu-time:'in s;s=s.replace('  apps/gnu-time:',block+'  apps/gnu-time:',1);p.write_text(s)
p=R/'.prettierignore';s=p.read_text();assert 'apps/gnu-tar/'not in s;s+='\n# GNU tar fixed sources and reviewed hash-bound inputs retain bytes.\ndocs/notes/document-import/gnu-tar/**\napps/gnu-tar/src/content/docs/**\napps/gnu-tar/public/source/**\napps/gnu-tar/src/config/project.config.jsonc\n';p.write_text(s)
assert all(h(R/rel)==sha for rel,sha in protected.items());assert all((R/x).read_bytes()==(W/x).read_bytes()for x in new)
(E/'ROOT_SCOPED_REGISTRATION.json').write_text(json.dumps({'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseline':'92a00f53cc764834ab58d787e5680a32e462ee39','workspace':str(W),'newFiles':sorted(new),'existingChangedFiles':sorted(allowed),'registeredFiles':len(new)+2,'protectedOtherFiles':len(protected),'allProtectedOtherSHAExact':True,'lockChange':'Only33-line apps/gnu-tar importer inserted;other existing bytes retained','ignoreChange':'Only6-line GNU tar hash-bound artifact formatting exclusions appended','noUserFilesOverwritten':True},indent=2)+'\n');print('Registered',len(new)+2,'files, protected',len(protected))
