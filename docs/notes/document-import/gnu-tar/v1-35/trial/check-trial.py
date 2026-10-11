from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,urllib.parse
N=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-gnu-tar-trial-964');A=W/'apps/gnu-tar-trial';D=A/'dist';norm=lambda x:' '.join(x.split());h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();rows=[];refs=0
for p in sorted((A/'src/content/docs/v1-35').rglob('*.md')):
 rel=p.relative_to(A/'src/content/docs');render=D/rel.with_suffix('')/'index.html';raw=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser');s=BeautifulSoup(render.read_text(),'html.parser');x=raw.select_one('.gnu-tar-original-content');y=s.select_one('.gnu-tar-original-content');assert norm(x.get_text())==norm(y.get_text()),rel;assert [a.get_text()for a in x.select('pre')]==[a.get_text()for a in y.select('pre')],rel;ids=[a['id']for a in s.select('[id]')];assert len(ids)==len(set(ids)),('duplicate ids',rel);footer=s.select_one('.document-provenance');assert footer and 'A GNU Manual' in footer.get_text() and 'GNU General Public License' in footer.get_text()
 for a in s.select('a[href],link[href],script[src]'):
  u=a.get('href')or a.get('src');v=urllib.parse.urlsplit(u)
  if v.scheme or v.netloc:continue
  full=urllib.parse.urlsplit(urllib.parse.urljoin('/docs/gnu-tar-trial/'+str(rel.with_suffix(''))+'/',u));path=urllib.parse.unquote(full.path)
  if not path.startswith('/docs/gnu-tar-trial/'):continue
  q=D/path.removeprefix('/docs/gnu-tar-trial/');q=q/'index.html'if q.is_dir()or(not q.exists()and not q.suffix)else q;assert q.is_file(),(rel,u)
  if full.fragment:assert BeautifulSoup(q.read_text(),'html.parser').find(id=urllib.parse.unquote(full.fragment)),(rel,u)
  refs+=1
 rows.append({'path':str(rel),'rawSHA256':h(p),'renderSHA256':h(render),'pre':len(x.select('pre')),'bodyText':'exact after whitespace normalization','preText':'exact','duplicateIds':0})
v={'status':'passed-representative-conversion-not-full-content-review','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'pages':len(rows),'localReferences':refs,'rows':rows,'limits':'Whole English chapters1–2 and one Japanese sample render preserved. No full Japanese translation/meaning review/adoption/rights pass or deployment.'};(N/'TRIAL_RENDERED.json').write_text(json.dumps(v,indent=2)+'\n');print(json.dumps(v))
