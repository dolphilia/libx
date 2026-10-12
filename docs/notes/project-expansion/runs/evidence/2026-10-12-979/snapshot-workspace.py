from pathlib import Path
import shutil,json,hashlib,datetime
N=Path('/Users/dolphilia/github/libx/docs/notes/document-import/gnu-patch/v2-8');W=Path('/private/tmp/libx-gnu-patch-formal-979');A=W/'apps/gnu-patch';T=N/'workspace-snapshot';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();files=[];sources=[]
for p in sorted(A.rglob('*')):
 r=p.relative_to(A)
 if any(x in ['node_modules','dist','.astro']for x in r.parts)or p.is_symlink()or not p.is_file():continue
 if r.parts[:2]==('public','source'):sources.append({'path':str(r),'sha256':sha(p),'bytes':p.stat().st_size});continue
 t=T/'apps/gnu-patch'/r;t.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,t);files.append({'path':str(t.relative_to(T)),'sha256':sha(t),'bytes':t.stat().st_size})
t=T/'pnpm-lock.yaml';shutil.copyfile(W/'pnpm-lock.yaml',t);files.append({'path':'pnpm-lock.yaml','sha256':sha(t),'bytes':t.stat().st_size})
x={'status':'saved-current-unverified-formal-workspace','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'baseCommit':'01ada58f864af6a00bb6f73fccc0bd63dbea26d9','workspace':str(W),'excludedFromDeployment':True,'files':files,'reconstructedSourceFiles':sources,'sourceReconstruction':'generate-canonical.py recreates public/source from preserved fixed original files and derived manual. Duplicate public source copies omitted only from snapshot.','excludes':['node_modules','dist','.astro','symlinks'],'limits':'Draft snapshot only; standalone preferred-source kit, independent replay, full meaning review and final checks remain pending.'};(T/'MANIFEST.json').write_text(json.dumps(x,indent=2)+'\n');print('Saved',len(files),'workspace files;',len(sources),'reconstructable source outputs')
