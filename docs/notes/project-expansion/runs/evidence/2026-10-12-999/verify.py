from pathlib import Path
from bs4 import BeautifulSoup
from functools import lru_cache
import json,hashlib,re,datetime,copy,urllib.parse
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/gnu-libtool/v2-6-2';E=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-gnu-libtool-998');Q=Path('/private/tmp/libx-libtool-source-rebuild-999-final/workspace');A=W/'apps/gnu-libtool';D=A/'dist';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda s:' '.join(s.split())
@lru_cache(None)
def dom(p):return BeautifulSoup(p.read_text(),'html.parser')
def clean(x):
 x=copy.deepcopy(x)
 for t in [x,*x.select('*')]:
  for k in list(t.attrs):
   if k.startswith('data-astro-'):del t[k]
 return re.sub(r'\n[ \t]*\n+','\n',str(x))
ctx=json.loads((N/'DOCUMENT_CONTEXT.json').read_text())[0]['html'];rights=BeautifulSoup(ctx,'html.parser');source=dom(N/'source/derived/manual.html');license=copy.deepcopy(source.find(id='GNU-Free-Documentation-License'))
for k in license.select('.nav-panel,.copiable-link'):k.decompose()
assert norm(license.get_text())==norm(rights.find(id='libtool-context-GNU-Free-Documentation-License').get_text())
for t in ['Gordon Matzigkeit','Alexandre Oliva','Thomas Tanner','Gary V. Vaughan','1996–2019, 2021–2026','Version 1.3 or any later version','no Invariant Sections','no Front-Cover Texts','no Back-Cover Texts','Copyright © 2026 Libx','Modification author and publisher: Libx.','Modified 12 October 2026','Original network locations:']:assert t in rights.get_text(),t
original=source.find(id='Top')
assert 'Version 1.3 or any later version' in norm(source.get_text())
rows=[];refs=0;pres=0
for p in sorted((N/'preferred').rglob('*.md')):
 rel=p.relative_to(N/'preferred');raw=p.read_text();x=BeautifulSoup(raw.split('---',2)[2],'html.parser').select_one('.gnu-libtool-original-content');out=D/'v2-6-2'/rel.with_suffix('')/'index.html';a=dom(out);y=a.select_one('.gnu-libtool-original-content');b=dom(Q/'apps/gnu-libtool/dist/v2-6-2'/rel.with_suffix('')/'index.html')
 for tag in ['p','pre','dt','dd','li','h2','h3','h4','h5']:
  text=lambda z:z.get_text()if tag=='pre'else norm(z.get_text())
  assert [text(z)for z in x.select(tag)]==[text(z)for z in y.select(tag)],(str(rel),tag)
 assert [(z.get('href'),norm(z.get_text()))for z in x.select('a[href]')]==[(z.get('href'),norm(z.get_text()))for z in y.select('a[href]')]
 assert clean(y)==clean(b.select_one('.gnu-libtool-original-content')),(str(rel),'independent whole body')
 footer=a.select_one('.document-provenance');assert clean(footer)==clean(b.select_one('.document-provenance')),(str(rel),'independent footer')
 assert norm(rights.get_text()) in norm(footer.get_text()),str(rel)
 for end in ['source.zip','SOURCE_README.md']:assert footer.find('a',href='/docs/gnu-libtool/source/v2-6-2/'+end)
 ids=[t['id']for t in a.select('[id]')];assert len(ids)==len(set(ids))
 for t in x.select('[id]'):assert a.find(id=t['id'])
 for link in a.select('a[href]'):
  u=urllib.parse.urlsplit(link['href'])
  if u.scheme or u.netloc:continue
  if u.path in ['/en','/ja']:
   assert (Path('/private/tmp/libx-gnu-tar-production-artifact-995/dist')/u.path.lstrip('/')/'index.html').exists();continue
  t=out if not u.path else D/u.path.removeprefix('/docs/gnu-libtool/').lstrip('/')if u.path.startswith('/')else out.parent/u.path
  if t.is_dir():t=t/'index.html'
  assert t.exists(),(str(rel),link['href'])
  if u.fragment and t.suffix=='.html':assert dom(t).find(id=urllib.parse.unquote(u.fragment)),(str(rel),link['href'])
  refs+=1
 for base in [A/'src/content/docs/v2-6-2',Q/'apps/gnu-libtool/src/content/docs/v2-6-2',A/'public/source/v2-6-2/edited',Q/'apps/gnu-libtool/public/source/v2-6-2/edited']:assert sha(p)==sha(base/rel),str(rel)
 pres+=len(y.select('pre'));rows.append({'page':str(rel),'preferredSHA256':sha(p),'renderedSHA256':sha(out),'independentWholeBodyAndFooterExact':True})
assert len(rows)==21
for r in json.loads((N/'REVIEW_MANIFEST.json').read_text())['pages']:
 for role in ['source','canonical','translation']:assert sha(R/r[role]['path'])==r[role]['sha256']
for r in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:assert sha(R/r['path'])==sha(Q/r['path'])==r['sha256']
assert sha(N/'source-offer.zip')==sha(A/'public/source/v2-6-2/source.zip')==sha(Q/'apps/gnu-libtool/public/source/v2-6-2/source.zip')
assert sha(N/'project.config.jsonc')==sha(A/'src/config/project.config.jsonc')==sha(Q/'apps/gnu-libtool/src/config/project.config.jsonc')
for name in ['TARGET_BUILD.log','INDEPENDENT_BUILD.log']:assert '26 page(s) built' in(E/name).read_text()and'[build] Complete!'in(E/name).read_text()
out={'status':'passed-target-and-independent-rebuild','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'preferredPages':21,'wholeMeaningReviews':10,'fixedInputs':20,'rows':rows,'preCopiesExact':pres,'localReferences':refs,'unchangedReviewBindings':True,'sourceZIPIndependentExact':True,'sourceZIP_SHA256':sha(N/'source-offer.zip'),'allOriginalNoticesAuthorsFullGFDLModifiedTitlesHistory':True,'originalConditions':'GFDL1.3-or-later,noInvariantSections,noFrontCoverTexts,noBackCoverTexts','formatNormalization':'Non-code whitespace, consecutive HTML blank lines, generated data-astro scope attributes only; literal pre exact. Target/independent whole article body and provenance exact under those scope attributes.','limits':'Local target/independent scope. Shared/en,/ja landing refs matched previous production artifact existence;latest integrated client/regression/HTTP404 and deployment pending.'}
(E/'FORMAL_SOURCE_VERIFICATION.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print('21preferred/10reviews/20inputs/26routes/rights/wholebody/sourceZIP verified;',refs,'references')
