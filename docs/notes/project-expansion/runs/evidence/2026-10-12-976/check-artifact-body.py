from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit,unquote
import runpy,sys,json,hashlib,datetime
from functools import lru_cache
@lru_cache(None)
def html(p):return BeautifulSoup(p.read_bytes(),'html.parser')
role=sys.argv[1];assert role in ['preview','production'];R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/gnu-m4/v1-4-21';W=Path('/private/tmp/libx-gnu-m4-formal-971');E=Path(__file__).resolve().parent;D=Path('/private/tmp/libx-gnu-m4-'+role+'-artifact-976/dist');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sys.argv=[str(N/'check-final-rendered.py'),str(W),str(E/(role.upper()+'_BODY_VERIFICATION.json'))];source=(N/'check-final-rendered.py').read_text().replace("D=A/'dist'","D=Path('/private/tmp/libx-gnu-m4-'+role+'-artifact-976/dist/docs/gnu-m4')");exec(compile(source,str(N/'check-final-rendered.py'),'exec'),{'__file__':str(N/'check-final-rendered.py'),'role':role});refs=0
for p in (D/'docs/gnu-m4').rglob('*.html'):
 if 'source' in p.relative_to(D/'docs/gnu-m4').parts:continue
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
assert h(D/'docs/gnu-m4/source/v1-4-21/source.zip')==h(N/'source-offer.zip');rows=[]
for p in (N/'preferred').rglob('*.md'):assert p.read_bytes()==(D/'docs/gnu-m4/source/v1-4-21/edited'/p.relative_to(N/'preferred')).read_bytes()
(E/(role.upper()+'_RENDERED_LINKS.json')).write_text(json.dumps({'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'localReferencesAndAssets':refs,'sourceKitSHA256':h(N/'source-offer.zip'),'all37EditedDownloadsExact':True,'buildVerifierSHA256':h(N/'check-final-rendered.py')},indent=2)+'\n');print('Integrated links/assets',refs)
