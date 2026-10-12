from pathlib import Path
import subprocess,hashlib,json,shutil,datetime,re
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-libtool-998');E=Path(__file__).resolve().parent;A=Path('apps/gnu-libtool');assert not(R/A).exists();sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();files=[]
for p in sorted((W/A).rglob('*')):
 if p.is_file()and not p.is_symlink()and not any(x in ['node_modules','dist','.astro','__pycache__']for x in p.relative_to(W/A).parts):files.append(str(p.relative_to(W)))
for rel in files:assert not(R/rel).exists(),rel
n=R/'docs/notes/document-import/gnu-libtool/v2-6-2'
for p in(n/'preferred').rglob('*.md'):assert sha(p)==sha(W/A/'src/content/docs/v2-6-2'/p.relative_to(n/'preferred'))
protected={}
for rel in subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=R).decode().split(chr(0)):
 if not rel or rel in ['.prettierignore','pnpm-lock.yaml']or rel.startswith(str(E.relative_to(R))+'/'):continue
 p=R/rel
 if p.is_file()and not p.is_symlink():protected[rel]=sha(p)
(E/'ROOT_OTHER_INPUTS_BEFORE.json').write_text(json.dumps(protected,indent=2)+'\n');before={rel:(R/rel).read_bytes()for rel in ['.prettierignore','pnpm-lock.yaml']}
for rel,data in before.items():p=E/'root-before'/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(data)
block=re.search(r'^  apps/gnu-libtool:\n.*?(?=^  [^ ]|^packages:)',(W/'pnpm-lock.yaml').read_text(),re.M|re.S).group().rstrip()+'\n\n';assert b'  apps/gnu-libtool:\n'not in before['pnpm-lock.yaml'];(R/'pnpm-lock.yaml').write_bytes(before['pnpm-lock.yaml'].replace(b'importers:\n',b'importers:\n'+block.encode(),1));assert(R/'pnpm-lock.yaml').read_bytes().replace(block.encode(),b'',1)==before['pnpm-lock.yaml']
extra=b'\n# GNU Libtool fixed sources and reviewed hash-bound inputs retain bytes.\ndocs/notes/document-import/gnu-libtool/**\napps/gnu-libtool/src/content/docs/**\napps/gnu-libtool/public/source/**\napps/gnu-libtool/src/config/project.config.jsonc\n';assert b'apps/gnu-libtool/src/content/docs/**'not in before['.prettierignore'];(R/'.prettierignore').write_bytes(before['.prettierignore']+extra)
for rel in files:p=R/rel;p.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(W/rel,p)
assert all(sha(R/rel)==value for rel,value in protected.items());assert all(sha(R/rel)==sha(W/rel)for rel in files)
out={'status':'passed-scoped-newapp-registration','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseline':'d9339d5a67c732681efc007d50fa05847c448795','workspace':str(W),'newFiles':files,'existingChangedFiles':['.prettierignore','pnpm-lock.yaml'],'registeredFiles':len(files)+2,'protectedOtherFiles':len(protected),'allProtectedOtherSHAExact':True,'noUserFilesOverwritten':True,'rootLockAndIgnore':'OnlynewLibtool importer and ignorepatterns added;allprevious bytes exactly retained;existingroot user/otherprojectchanges not copied to release workspace','limits':'Not published;isolatedrelease branch contains onlynewapp+2settings;verification ledger pending.'};(E/'ROOT_SCOPED_REGISTRATION.json').write_text(json.dumps(out,indent=2)+'\n');print('Registered',len(files),'newappfiles;protected',len(protected),'otherfiles;oldlock/ignorebytesretained')
