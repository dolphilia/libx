from pathlib import Path
import os,json,hashlib,subprocess,sys,shutil,zipfile
N=Path(__file__).resolve().parent;W=N.parents[4];A=W/'apps/gnu-libtool';B=W.parent;h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();manifest=B/'SOURCE_COMPONENTS.json';packageBytes=None
if manifest.exists():
 m=json.loads(manifest.read_text());packageBytes={r['path']:(B/r['path']).read_bytes() for r in m['files']}
 for r in m['files']:assert hashlib.sha256(packageBytes[r['path']]).hexdigest()==r['sha256'],r['path']
 packageBytes['SOURCE_COMPONENTS.json']=manifest.read_bytes()
expected={str(p.relative_to(N/'preferred')):h(p)for p in (N/'preferred').rglob('*.md')};assert len(expected)==21
for r in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:
 p=Path(r['path']);p=p if p.is_absolute() else W/p
 if not p.exists():p=N/r['path']
 assert h(p)==r['sha256'],r['path']
env=dict(os.environ,LIBX_WORKSPACE=str(W))
for script in ['generate.py','translate.py']:subprocess.run([sys.executable,str(N/script)],env=env,check=True)
assert expected=={str(p.relative_to(N/'preferred')):h(p)for p in (N/'preferred').rglob('*.md')}
for r in json.loads((N/'REVIEW_MANIFEST.json').read_text())['pages']:
 for role in ['source','canonical','translation']:assert h(W/r[role]['path'])==r[role]['sha256'],(r['id'],role)
P=A/'public/source/v2-6-2';shutil.copytree(N/'preferred',P/'edited',dirs_exist_ok=True);shutil.copyfile(N/'SOURCE_OFFER_README.md',P/'SOURCE_README.md')
if packageBytes:
 with zipfile.ZipFile(P/'source.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
  for name,data in sorted(packageBytes.items(),key=lambda item:Path(item[0])):
   i=zipfile.ZipInfo(name,date_time=(2026,10,12,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o644<<16;z.writestr(i,data)
print('21preferred/10whole reviews/fixed inputs verified; source offer restored when packaged inventory present')
