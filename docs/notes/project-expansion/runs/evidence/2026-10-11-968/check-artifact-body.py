from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit,unquote
import runpy,sys,json,hashlib,datetime
from functools import lru_cache
@lru_cache(None)
def html(p):return BeautifulSoup(p.read_bytes(),'html.parser')
role=sys.argv[1];assert role in ['preview','production'];R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/gnu-tar/v1-35';W=Path('/private/tmp/libx-gnu-tar-formal-964');E=Path(__file__).resolve().parent;D=Path('/private/tmp/libx-gnu-tar-'+role+'-artifact-968/dist');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sys.argv=[str(N/'verify-build.py'),str(W),str(E/(role.upper()+'_BODY_VERIFICATION.json'))];source=(N/'verify-build.py').read_text().replace("D=A/'dist'","D=Path('/private/tmp/libx-gnu-tar-'+role+'-artifact-968/dist/docs/gnu-tar')");exec(compile(source,str(N/'verify-build.py'),'exec'),{'__file__':str(N/'verify-build.py'),'role':role});refs=0
for p in (D/'docs/gnu-tar').rglob('*.html'):
 if 'source' in p.relative_to(D/'docs/gnu-tar').parts:continue
 s=BeautifulSoup(p.read_bytes(),'html.parser')
 for el in s.select('[href],[src]'):
  for attr in ['href','src']:
   url=el.get(attr,'');parts=urlsplit(url)
   if not url or parts.scheme or parts.netloc:continue
   dest=(D/parts.path.lstrip('/'))if parts.path.startswith('/')else(p.parent/parts.path)
   if not parts.path:dest=p
   if dest.is_dir():dest=dest/'index.html'
   elif not dest.exists()and not dest.suffix:dest=dest/'index.html'
   assert dest.is_file(),(p,url)
   if parts.fragment and dest.suffix=='.html':assert html(dest).find(id=unquote(parts.fragment)),(p,url)
   refs+=1
assert h(D/'docs/gnu-tar/source/v1-35/source.zip')==h(N/'source-offer.zip');rows=[]
for p in (N/'preferred').rglob('*.md'):assert p.read_bytes()==(D/'docs/gnu-tar/source/v1-35/edited'/p.relative_to(N/'preferred')).read_bytes()
(E/(role.upper()+'_RENDERED_LINKS.json')).write_text(json.dumps({'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'localReferencesAndAssets':refs,'sourceKitSHA256':h(N/'source-offer.zip'),'all64EditedDownloadsExact':True,'buildVerifierSHA256':h(N/'verify-build.py')},indent=2)+'\n');print('Integrated links/assets',refs)
