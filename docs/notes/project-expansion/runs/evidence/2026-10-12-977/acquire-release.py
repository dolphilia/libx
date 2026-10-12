from pathlib import Path
import urllib.request,hashlib,json,datetime,tarfile,io
E=Path(__file__).parent;url='https://ftp.gnu.org/gnu/bc/bc-1.08.2.tar.gz'
assert 'href="bc-1.08.2.tar.gz"' in (E/'source/releases.html').read_text()
with urllib.request.urlopen(url,timeout=45) as r:b=r.read();status=r.status;final=r.url
assert status==200
(E/'source/bc-1.08.2.tar.gz').write_bytes(b);rows=[]
with tarfile.open(fileobj=io.BytesIO(b),mode='r:gz') as t:
 for m in t.getmembers():
  p=Path(m.name);assert not p.is_absolute() and '..' not in p.parts
  if not m.isfile():continue
  if str(p).startswith('bc-1.08.2/doc/') or p.name in ['COPYING','README','AUTHORS','NEWS','ChangeLog']:
   data=t.extractfile(m).read();out=E/'source'/p;out.parent.mkdir(exist_ok=True,parents=True);out.write_bytes(data);rows.append({'path':str(out.relative_to(E)),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
x={'status':'acquired-fixed-release','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'url':url,'finalURL':final,'archivePath':'source/bc-1.08.2.tar.gz','archiveBytes':len(b),'archiveSHA256':hashlib.sha256(b).hexdigest(),'files':rows,'limits':['Archive identity pinned by SHA256; signature not verified','Selected docs and notices only safely copied from regular archive entries; no source code executed','Preliminary candidate research; no app or operation registered']};(E/'RELEASE_ACQUISITION.json').write_text(json.dumps(x,indent=2)+'\n');print(json.dumps(x))
