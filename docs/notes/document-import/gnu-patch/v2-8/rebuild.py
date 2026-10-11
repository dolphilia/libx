from pathlib import Path
import sys,subprocess,hashlib,json,zipfile,shutil
N=Path(__file__).resolve().parent;R=N.parents[4];W=Path(sys.argv[1])if len(sys.argv)>1 else R;P=N/'preferred';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();before={str(p.relative_to(P)):sha(p)for p in P.rglob('*.md')};assert len(before)==18
# Recreate the omitted self-ZIP from supplied packet files before generators update records.
packet=R.parent;inventory=packet/'SOURCE_COMPONENTS.json';archive=W/'apps/gnu-patch/public/source/v2-8/source.zip'
if not archive.exists():
 archive.parent.mkdir(parents=True,exist_ok=True)
 if inventory.is_file():
  records=json.loads(inventory.read_text())['files']
  for row in records:
   rel=Path(row['path']);assert not rel.is_absolute()and'..'not in rel.parts
   assert sha(packet/rel)==row['sha256'],rel
  with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED,compresslevel=9)as z:
   for rel in sorted([Path(row['path'])for row in records]+[Path('SOURCE_COMPONENTS.json')]):
    info=zipfile.ZipInfo(str(rel),date_time=(2026,10,12,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o644<<16;z.writestr(info,(packet/rel).read_bytes())
  print('Omitted self-ZIP recreated from supplied inventory/files')
 elif(N/'source-offer.zip').is_file():shutil.copyfile(N/'source-offer.zip',archive)
 else:raise RuntimeError('Run from the full extracted source packet, retaining SOURCE_COMPONENTS.json beside workspace')
for row in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:assert sha(R/row['path'])==row['sha256'],row['path']
for name in ['generate-canonical.py','translate-batch1.py','translate-batch2.py','prepare-source-public.py']:subprocess.run([sys.executable,str(N/name),str(W)],check=True)
assert before=={str(p.relative_to(P)):sha(p)for p in P.rglob('*.md')},'regenerated preferred documents differ'
for row in json.loads((N/'REVIEW_MANIFEST.json').read_text())['pages']:
 assert row['status']=='passed'
 for role in ['source','canonical','translation']:assert sha(R/row[role]['path'])==row[role]['sha256'],(row['id'],role)
for rel,digest in before.items():assert sha(W/'apps/gnu-patch/src/content/docs/v2-8'/rel)==digest
print('18 preferred documents reproduced exactly;9 whole review bindings and7 fixed inputs exact')
