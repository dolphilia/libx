from pathlib import Path
from bs4 import BeautifulSoup
from functools import lru_cache
import json,hashlib,re,sys,datetime
N=Path(__file__).resolve().parent;W=Path(sys.argv[1])if len(sys.argv)>1 else N.parents[4];A=W/'apps/gnu-tar';D=A/'dist';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda s:re.sub(r'\s+',' ',s).strip()
@lru_cache(None)
def parse(p):return BeautifulSoup(p.read_bytes(),'html.parser')
refs=0;pres=0;rows=[]
for p in sorted((N/'preferred').rglob('*.md')):
 rel=p.relative_to(N/'preferred');raw=p.read_text();src=BeautifulSoup(raw.split('---',2)[2],'html.parser');target=D/'v1-35'/rel.with_suffix('')/'index.html';page=parse(target);article=page.select_one('article');assert article
 expected=src.select_one('.gnu-tar-original-content')
 if expected:
  actual=page.select_one('.gnu-tar-original-content');assert actual and norm(expected.get_text())==norm(actual.get_text()),rel
 else:
  expected=src;actual=article;assert norm(src.get_text())in norm(article.get_text()),rel
 left=[x.get_text()for x in expected.select('pre')];right=[x.get_text()for x in actual.select('pre')]
 assert left==right,rel
 ids=[x['id']for x in page.select('[id]')];assert len(ids)==len(set(ids)),rel
 notes=json.loads(next(x.split(': ',1)[1]for x in raw.splitlines()if x.startswith('documentContext: ')));footer=page.select_one('.document-provenance');assert footer
 for note in notes:assert norm(BeautifulSoup(note['html'],'html.parser').get_text())in norm(footer.get_text()),rel
 assert p.read_bytes()==(A/'src/content/docs/v1-35'/rel).read_bytes()==(A/'public/source/v1-35/edited'/rel).read_bytes(),rel
 for link in page.select('a[href]'):
  h=link['href'];path,sep,anchor=h.partition('#')
  if path.startswith('/docs/gnu-tar/'):
   dest=D/path.removeprefix('/docs/gnu-tar/')
   if dest.is_dir():dest=dest/'index.html'
   elif not dest.exists()and not dest.suffix:dest=dest/'index.html'
   assert dest.is_file(),(rel,h)
   if sep and dest.suffix=='.html':assert parse(dest).find(id=anchor),(rel,h)
   refs+=1
  elif h.startswith('#'):assert page.find(id=h[1:]),(rel,h);refs+=1
 pres+=len(expected.select('pre'));rows.append({'path':str(rel),'sha256':sha(p),'bodyPreAndNotices':True})
assert len(rows)==64
for r in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:assert sha(N/r['path'])==r['sha256']
for r in json.loads((N/'REVIEW_MANIFEST.json').read_text())['pages']:
 for role in ['source','canonical','translation']:assert sha(N/Path(r[role]['path']).relative_to('docs/notes/document-import/gnu-tar/v1-35'))==r[role]['sha256'],(r['id'],role)
assert (A/'public/source/v1-35/source.zip').is_file();out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'preferredDocuments':64,'wholeMeaningReviewBindings':31,'originalInputHashes':24,'renderedPre':pres,'existingInternalReferences':refs,'allGuideBodyPreExact':True,'allBodyAndNoticesTextExact':True,'licensePreExact':True,'allEditedDownloadsExact':True,'uniqueIDs':True,'sourceZIP':sha(A/'public/source/v1-35/source.zip'),'rows':rows,'limits':'Scope is this app build; integrated distribution/native404/version/publication remain separate gates.'};path=Path(sys.argv[2])if len(sys.argv)>2 else W/'VERIFY_BUILD.json';path.write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print({k:v for k,v in out.items()if k!='rows'})
