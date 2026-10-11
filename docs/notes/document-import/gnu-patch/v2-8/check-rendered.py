from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit,unquote
import json,hashlib,datetime,sys
N=Path(__file__).resolve().parent;W=Path(sys.argv[1]if len(sys.argv)>1 else '/private/tmp/libx-gnu-patch-formal-979');A=W/'apps/gnu-patch';D=A/'dist';rows=[];norm=lambda n:' '.join(n.get_text().split());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();prefix='/docs/gnu-patch/';cache={}
def soup(p):
 if p not in cache:cache[p]=BeautifulSoup(p.read_text(),'html.parser')
 return cache[p]
for p in sorted((N/'preferred').rglob('*.md')):
 rel=p.relative_to(N/'preferred');route=Path('v2-8')/rel.with_suffix('')/'index.html';out=D/route;assert out.is_file(),out;S=soup(out);r=S.select_one('.gnu-patch-original-content');s=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser').select_one('.gnu-patch-original-content');assert norm(s)==norm(r),(p,'text');assert [x.get_text()for x in s.select('pre')]==[x.get_text()for x in r.select('pre')],(p,'pre');ids=[x['id']for x in S.select('[id]')];assert len(ids)==len(set(ids)),p;links=0
 for a in S.select('a[href]'):
  h=a['href'];u=urlsplit(h)
  if u.scheme or u.netloc:continue
  if h.startswith('#'):target=out
  elif u.path.startswith(prefix):
   target=D/unquote(u.path[len(prefix):]);target=target/'index.html'if not target.is_file()and(target.is_dir()or not target.suffix)else target
  else:continue
  assert target.is_file(),(p,h,target)
  if u.fragment:assert soup(target).find(id=unquote(u.fragment)),(p,h)
  links+=1
 footer=S.select_one('footer.document-context-footer');assert footer
 for term in ['Copyright © 1989–2025','Copyright © 1984–1986, 1988','Permission is granted to copy and distribute translations','identical to this one.','Larry Wall','Paul Eggert','Wayne Davison','David MacKenzie','Andreas Gruenbacher']:
  assert term in norm(footer),(p,term)
 rows.append({'preferred':str(p),'preferredSHA256':sha(p),'output':str(out),'outputSHA256':sha(out),'textAndPreExact':True,'links':links})
for name in ['patch.man','NEWS','AUTHORS','COPYING','README','patch-2.8.tar.gz']:assert (D/'source/v2-8'/name).read_bytes()==(N/'source/original'/name).read_bytes()
x={'status':'passed-current-preferred-files','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'pages':len(rows),'rows':rows,'localLinks':sum(r['links']for r in rows),'originalFilesExact':6,'limits':'Current preferred source pages only. Whole content review, final app display/source kit/publication are separate requirements.'};(N/('RENDERED_EN.json'if len(rows)==9 else 'RENDERED_CURRENT.json')).write_text(json.dumps(x,indent=2)+'\n');print('Rendered',len(rows),'pages/body/pre/notices and',x['localLinks'],'links passed')
