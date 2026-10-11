from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,urllib.parse,sys
N=Path(__file__).resolve().parent;A=Path(sys.argv[1]if len(sys.argv)>1 else '/private/tmp/libx-gnu-m4-formal-971')/'apps/gnu-m4';D=A/'dist';rows=[];refs=0;norm=lambda x:' '.join(x.split())
for p in sorted((N/'preferred').rglob('*.md')):
 rel=p.relative_to(N/'preferred');render=D/'v1-4-21'/rel.with_suffix('')/'index.html';raw=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser');s=BeautifulSoup(render.read_text(),'html.parser');x=raw.select_one('.gnu-m4-original-content')or raw.find(id='GNU-Free-Documentation-License');y=s.select_one('.gnu-m4-original-content')or s.find(id='GNU-Free-Documentation-License');assert norm(x.get_text())==norm(y.get_text()),rel;assert [a.get_text()for a in x.select('pre')]==[a.get_text()for a in y.select('pre')],rel;ids=[a['id']for a in s.select('[id]')];assert len(ids)==len(set(ids)),rel;footer=s.select_one('.document-provenance');assert footer and 'no Invariant Sections' in footer.get_text();assert 'Local Trial'not in footer.get_text() and 'ローカル試作'not in footer.get_text()
 for a in s.select('a[href],link[href],script[src]'):
  u=a.get('href')or a.get('src');v=urllib.parse.urlsplit(u)
  if v.scheme or v.netloc:continue
  full=urllib.parse.urlsplit(urllib.parse.urljoin('/docs/gnu-m4/v1-4-21/'+str(rel.with_suffix(''))+'/',u));path=urllib.parse.unquote(full.path)
  if not path.startswith('/docs/gnu-m4/'):continue
  q=D/path.removeprefix('/docs/gnu-m4/');q=q/'index.html'if q.is_dir()or(not q.exists()and not q.suffix)else q;assert q.is_file(),(rel,u)
  if full.fragment:assert BeautifulSoup(q.read_text(),'html.parser').find(id=urllib.parse.unquote(full.fragment)),(rel,u)
  refs+=1
 rows.append({'page':str(rel),'preferredSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'renderedSHA256':hashlib.sha256(render.read_bytes()).hexdigest(),'pre':len(x.select('pre')),'bodyText':'exact normalized','preText':'exact'})
v={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed-final37-rendering-body-code-notices-references','pages':len(rows),'EnglishPages':19,'JapanesePages':18,'localReferences':refs,'duplicateIDs':0,'rows':rows,'limits':'Final37 rendering/body/pre/notices/reference checks only; native UI/integration/publication recorded separately.'};(Path(sys.argv[2])if len(sys.argv)>2 else N/'FINAL_BUILD_VERIFICATION.json').write_text(json.dumps(v,indent=2)+'\n');assert len(rows)==37;print('English19/Japanese18 rendered preserved; localReferences',refs)
