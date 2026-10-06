"""Read-only reproducibility gate: regenerate in a temporary copy, compare exact current bytes."""
from pathlib import Path
import argparse,json,hashlib,shutil,tempfile,subprocess,sys,datetime
arg=argparse.ArgumentParser();arg.add_argument('--repository',required=True);arg.add_argument('--workspace',required=True);arg.add_argument('--manifest',required=True);arg.add_argument('--output',required=True);a=arg.parse_args();root=Path(a.repository).resolve();w=Path(a.workspace).resolve();packetrel=Path('docs/notes/document-import/libuv/1.53.0');packet=root/packetrel;m=json.loads((root/a.manifest).read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();assert m['completedPages']==43 and m['unreviewedPages']==0
baseline={r[role]['path']:r[role]['sha256'] for r in m['pages'] for role in ['source','canonical','translation']}
for file,expected in baseline.items():assert sha(root/file)==expected,file
steps=['generate-canonical.py','apply-basics-editorial-note.py','apply-networking-declaration.py','apply-processes-editorial-note.py','apply-eventloops-editorial-note.py','apply-utilities-editorial-note.py','apply-utilities-idle-note.py','apply-design-editorial-note.py','apply-index-source-note.py'];logs=[];comparisons=[]
def run(command,cwd):
 p=subprocess.run(command,cwd=cwd,capture_output=True,text=True);logs.append({'command':command,'exitCode':p.returncode,'stdout':p.stdout,'stderr':p.stderr});assert p.returncode==0,logs[-1]
with tempfile.TemporaryDirectory(prefix='libx-libuv-reproduction-') as temp:
 clone=Path(temp)/'repository';workspace=Path(temp)/'workspace';cp=clone/packetrel;cp.parent.mkdir(parents=True);shutil.copytree(packet,cp)
 search=clone/'scripts/importers/build-libuv-search-index.mjs';search.parent.mkdir(parents=True);shutil.copyfile(root/'scripts/importers/build-libuv-search-index.mjs',search)
 ep=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-687');(clone/ep).parent.mkdir(parents=True,exist_ok=True);shutil.copytree(root/ep,clone/ep)
 for file in baseline:
  if not (clone/file).exists():p=clone/file;p.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(root/file,p)
 (clone/a.manifest).parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(root/a.manifest,clone/a.manifest)
 for dirname in ['scripts','packages','config','templates']:
  shutil.copytree(w/dirname,workspace/dirname,symlinks=True,ignore=shutil.ignore_patterns('node_modules','dist','.astro','__pycache__'))
 for file in ['package.json','pnpm-workspace.yaml']:shutil.copyfile(w/file,workspace/file)
 shutil.copytree(w/'apps/libuv',workspace/'apps/libuv',symlinks=True,ignore=shutil.ignore_patterns('node_modules','dist','.astro'))
 (workspace/'node_modules').symlink_to(w/'node_modules',target_is_directory=True)
 (workspace/'apps/libuv/node_modules').symlink_to(w/'apps/libuv/node_modules',target_is_directory=True)
 # Delete generated language bodies/navigation/search first, so copied output cannot pass accidentally.
 for rel in ['src/content/docs/v1-53-0','src/data/document-headings.json','public/search','public/sidebar']:
  p=workspace/'apps/libuv'/rel
  if p.is_dir():shutil.rmtree(p)
  elif p.exists():p.unlink()
 for step in steps:run([sys.executable,str(cp/step),'--repository',str(clone),'--workspace',str(workspace)],clone)
 for row in m['pages']:
  expected=row['canonical'];p=clone/expected['path'];assert sha(p)==expected['sha256'],row['id'];comparisons.append({'page':row['id'],'role':'canonical','sha256':sha(p)})
  src=clone/row['translation']['path'];dest=workspace/'apps/libuv/src/content/docs/v1-53-0/ja'/row['id'];dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(src,dest)
 out=clone/'regeneration-evidence';out.mkdir()
 run([sys.executable,str(cp/'localize-ja-links.py'),'--repository',str(clone),'--workspace',str(workspace),'--evidence','regeneration-evidence','--manifest',a.manifest],clone)
 delta=json.loads((out/'JA_LINK_LOCALIZATION.json').read_text());assert delta['count']==0 and not delta['changedPages'],'Current translations must already have localized hrefs'
 run([sys.executable,str(cp/'prepare-runtime.py'),'--repository',str(clone),'--workspace',str(workspace),'--manifest',str(clone/a.manifest)],clone)
 run([sys.executable,str(cp/'prepare-content-gate.py'),'--repository',str(clone),'--workspace',str(workspace)],clone)
 run([sys.executable,str(cp/'generate-headings.py'),'--workspace',str(workspace),'--output',str(out/'PAGE_HEADINGS.json')],clone)
 run(['node',str(workspace/'packages/project-config/src/prepare-app.js'),'--projects=libuv'],workspace/'apps/libuv')
 run(['node',str(workspace/'scripts/importers/build-libuv-search-index.mjs')],workspace/'apps/libuv')
 for row in m['pages']:
  for lang,role in [('en','canonical'),('ja','translation')]:
   file=workspace/'apps/libuv/src/content/docs/v1-53-0'/lang/row['id'];assert sha(file)==row[role]['sha256'];comparisons.append({'page':row['id'],'role':'app-'+lang,'sha256':sha(file)})
 for rel in ['src/config/project.config.jsonc','package.json','src/data/document-headings.json','public/search/v1-53-0/en.json','public/search/v1-53-0/ja.json','public/sidebar/sidebar-en-v1-53-0.json','public/sidebar/sidebar-ja-v1-53-0.json']:
  actual=workspace/'apps/libuv'/rel;expected=w/'apps/libuv'/rel;assert actual.read_bytes()==expected.read_bytes(),rel;comparisons.append({'runtime':rel,'sha256':sha(actual)})
for file,expected in baseline.items():assert sha(root/file)==expected,'Read-only input changed: '+file
result={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'canonicalSteps':steps,'canonicalPages':43,'translatedPages':43,'currentLocalizedHrefOverlay':'idempotent, zero further edits','runtimeExact':7,'comparisons':comparisons,'commands':logs,'sourceInputsUnchanged':True,'fullContentReview':'preserved from current manifest, not performed by this mechanical gate','nativeUI':'pending'};out=Path(a.output);out.parent.mkdir(parents=True,exist_ok=True);out.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print('43 canonical +86 app pages +7 runtime files reproduce exactly; original inputs unchanged')
