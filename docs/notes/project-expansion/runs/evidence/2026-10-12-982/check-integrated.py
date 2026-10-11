from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit,unquote
import runpy,sys,json,hashlib,datetime
from functools import lru_cache
@lru_cache(None)
def html(p):return BeautifulSoup(p.read_bytes(),'html.parser')
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/gnu-patch/v2-8';W=Path('/private/tmp/libx-gnu-patch-formal-979');E=Path(__file__).resolve().parent;D=W/'dist';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();source=(R/'docs/notes/project-expansion/runs/evidence/2026-10-12-981/check-reconstruction.py').read_text();source=source[:source.index('a=check(W);')].replace("D=workspace/'apps/gnu-patch/dist'","D=workspace/'dist/docs/gnu-patch'");ns={'__file__':str(E/'check-integrated.py')};exec(compile(source,'integrated-body','exec'),ns);body=ns['check'](W);(E/'INTEGRATED_BODY_VERIFICATION.json').write_text(json.dumps({'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),**body},indent=2)+'\n');refs=0
for p in (D/'docs/gnu-patch').rglob('*.html'):
 if 'source' in p.relative_to(D/'docs/gnu-patch').parts:continue
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
assert h(D/'docs/gnu-patch/source/v2-8/source.zip')==h(N/'source-offer.zip');rows=[]
for p in (N/'preferred').rglob('*.md'):assert p.read_bytes()==(D/'docs/gnu-patch/source/v2-8/edited'/p.relative_to(N/'preferred')).read_bytes()
(E/'INTEGRATED_LINKS.json').write_text(json.dumps({'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'localReferencesAndAssets':refs,'sourceKitSHA256':h(N/'source-offer.zip'),'all18EditedDownloadsExact':True,'buildVerifierSHA256':h(E/'check-integrated.py')},indent=2)+'\n');print('Integrated links/assets',refs)

for p in (D/"docs/gnu-patch").rglob("*"):
 if p.is_file():assert p.read_bytes()==(W/"apps/gnu-patch/dist"/p.relative_to(D/"docs/gnu-patch")).read_bytes(),p
rows=[]
for f in ["package.json","tsconfig.json"]:
 p=W/"apps/gnu-patch"/f;q=Path("/private/tmp/libx-gnu-patch-source-rebuild-981-final2/workspace/apps/gnu-patch")/f;assert json.loads(p.read_text())==json.loads(q.read_text());rows.append({"file":f,"beforeSHA256":h(q),"afterSHA256":h(p),"parsedJSONExact":True})
(E/"PACKAGE_FORMAT_EQUIVALENCE.json").write_text(json.dumps({"status":"passed","at":datetime.datetime.now(datetime.timezone.utc).isoformat(),"rows":rows,"change":"Whitespace only; commands/dependencies/options exact"},indent=2)+"\n")
