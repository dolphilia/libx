from pathlib import Path
from bs4 import BeautifulSoup
import json,re,datetime
N=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-gnu-tar-formal-964');D=W/'apps/gnu-tar/dist';P=N/'preferred';refs=0;pending=set();norm=lambda x:re.sub(r'\s+',' ',x).strip();G=json.loads((N/'CANONICAL_GENERATION.json').read_text());planned={'/docs/gnu-tar/v1-35/ja/'+r['page'][:-3]+'/'for r in G['rows']};bodyCount=0
for raw in sorted(P.rglob('*.md')):
 rel=raw.relative_to(P);target=D/'v1-35'/rel.with_suffix('')/'index.html';assert target.exists(),target;s=BeautifulSoup(target.read_text(),'html.parser');src=BeautifulSoup(raw.read_text().split('---',2)[2],'html.parser');klass='.gnu-tar-original-content';a=src.select_one(klass);b=s.select_one(klass)
 if a:
  assert b and norm(a.get_text())==norm(b.get_text()),rel
  assert [x.get_text()for x in a.select('pre')]==[x.get_text()for x in b.select('pre')],rel;bodyCount+=1
 ids=[x['id']for x in s.select('[id]')];assert len(ids)==len(set(ids)),rel
 ctx=json.loads(next(x for x in raw.read_text().splitlines()if x.startswith('documentContext: ')).split(': ',1)[1])[0]['html'];footer=s.select_one('.document-provenance');
 if not footer:footer=s.find(id='document-provenance-title').parent
 assert norm(BeautifulSoup(ctx,'html.parser').get_text())in norm(footer.get_text()),rel
 for a in s.select('a[href]'):
  h=a['href'];path,sep,anchor=h.partition('#')
  if path.startswith('/docs/gnu-tar/v1-35/'):
   dest=D/path.removeprefix('/docs/gnu-tar/').rstrip('/')/'index.html'
   if not dest.exists():assert path.rstrip('/')+'/'in planned and '/ja/'in path,h;pending.add(path.rstrip('/')+'/');continue
   if sep:assert BeautifulSoup(dest.read_text(),'html.parser').find(id=anchor),(rel,h)
   refs+=1
  elif path.startswith('/docs/gnu-tar/source/'):
   dest=D/path.removeprefix('/docs/gnu-tar/');assert dest.exists(),(rel,h)
   if sep and dest.suffix=='.html':assert BeautifulSoup(dest.read_text(),'html.parser').find(id=anchor),(rel,h)
   refs+=1
  elif h.startswith('#'):assert s.find(id=h[1:]),(rel,h);refs+=1
log=(Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-11-964/BUILD_BATCH1.log')).read_text();assert '48 page(s) built'in log and not re.search(r'\[ERROR\]|Error:',log)
out={'status':'passed-rendered-current-batch-with-pending-routes','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'renderedPreferredPages':43,'guideBodiesExact':bodyCount,'buildRoutes':48,'existingLocalReferencesVerified':refs,'pendingFutureJapaneseRoutes':sorted(pending),'limits':'Future Japanese links are declared pending and must all resolve before complete links gate/publication. Current batch display in native browser and independent sourcekit verification remain pending.'};(N/'RENDERED_BATCH1.json').write_text(json.dumps(out,indent=2)+'\n');print({k:v for k,v in out.items()if k!='pendingFutureJapaneseRoutes'});print('pending routes',len(pending))
