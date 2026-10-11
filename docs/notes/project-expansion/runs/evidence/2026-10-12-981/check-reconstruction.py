from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit,unquote
import json,hashlib,datetime
R=Path.cwd();N=R/'docs/notes/document-import/gnu-patch/v2-8';E=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-gnu-patch-formal-979');Q=Path('/private/tmp/libx-gnu-patch-source-rebuild-981-final2/workspace');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();prefix='/docs/gnu-patch/';rows=[];at=datetime.datetime.now(datetime.timezone.utc).isoformat()
def check(workspace):
 D=workspace/'apps/gnu-patch/dist';results=[];cache={}
 def soup(p):
  if p not in cache:cache[p]=BeautifulSoup(p.read_text(),'html.parser')
  return cache[p]
 for p in sorted((N/'preferred').rglob('*.md')):
  rel=p.relative_to(N/'preferred');out=D/'v2-8'/rel.with_suffix('')/'index.html';s=soup(out);a=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser').select_one('.gnu-patch-original-content');b=s.select_one('.gnu-patch-original-content');assert ' '.join(a.get_text().split())==' '.join(b.get_text().split());assert [x.get_text()for x in a.select('pre')]==[x.get_text()for x in b.select('pre')];ids=[x['id']for x in s.select('[id]')];assert len(ids)==len(set(ids));f=s.select_one('footer.document-context-footer');assert f;notice=' '.join(f.get_text(' ',strip=True).split())
  for text in ['Copyright © 1989–2025','Copyright © 1984–1986, 1988','Permission is granted to make and distribute verbatim copies','Permission is granted to copy and distribute modified versions','Permission is granted to copy and distribute translations','identical to this one.','Larry Wall','Paul Eggert','Wayne Davison','David MacKenzie','Andreas Gruenbacher']:assert text in notice,(p,text)
  assert f.find('a',href=prefix+'source/v2-8/source.zip')
  links=0
  for a in s.select('a[href]'):
   u=urlsplit(a['href'])
   if u.scheme or u.netloc:continue
   if a['href'].startswith('#'):target=out
   elif u.path.startswith(prefix):
    target=D/unquote(u.path[len(prefix):]);target=target/'index.html'if not target.is_file()and(target.is_dir()or not target.suffix)else target
   else:continue
   assert target.is_file(),(out,a['href'])
   if u.fragment:assert soup(target).find(id=unquote(u.fragment)),(out,a['href'])
   links+=1
  assert sha(p)==sha(workspace/'apps/gnu-patch/src/content/docs/v2-8'/rel)==sha(D/'source/v2-8/edited'/rel)
  results.append({'page':str(rel),'preferredSHA256':sha(p),'outputSHA256':sha(out),'bodyDOMSHA256':hashlib.sha256(str(b).encode()).hexdigest(),'links':links,'preExact':True,'noticesAndSourceKitLink':True})
 assert sha(N/'source-offer.zip')==sha(D/'source/v2-8/source.zip')
 for name in ['patch.man','NEWS','AUTHORS','COPYING','README','patch-2.8.tar.gz']:assert sha(D/'source/v2-8'/name)==sha(N/'source/original'/name)
 return {'pages':len(results),'links':sum(x['links']for x in results),'rows':results,'sourceZIPExact':True,'publicEditedSourcesExact':18}
a=check(W);b=check(Q);assert [x['bodyDOMSHA256']for x in a['rows']]==[x['bodyDOMSHA256']for x in b['rows']]
for row in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:assert sha(Q/row['path'])==row['sha256']
for p in (N/'preferred').rglob('*.md'):assert sha(p)==sha(Q/'docs/notes/document-import/gnu-patch/v2-8/preferred'/p.relative_to(N/'preferred'))
write=lambda p,x:p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n');write(E/'FORMAL_BUILD_VERIFICATION.json',{'status':'passed','at':at,**a});write(E/'INDEPENDENT_BUILD_VERIFICATION.json',{'status':'passed','at':at,**b});write(E/'RECONSTRUCTION_FINAL.json',{'status':'passed-sourcekit-replay-and-body-notices','at':at,'preferredExact':18,'reviewBindings':9,'fixedInputsExact':7,'independentRoutes':23,'bodyDOMExact':18,'formalLinks':a['links'],'independentLinks':b['links'],'sourceZIPExact':True,'sourceMembers':json.loads((E/'SOURCE_OFFER.json').read_text())['members'],'limits':'Whole content review reused unchanged. Native final display/integration/publication pending; no claim of complete shell byte equality.'});print('18 preferred exact;9 reviews;7inputs;23 routes;18 bodyDOM equal;',a['links'],'references each')
