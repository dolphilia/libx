from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime
R=Path.cwd();N=R/'docs/notes/document-import/gnu-m4/v1-4-21';E=Path(__file__).resolve().parent;sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();at=datetime.datetime.now(datetime.timezone.utc).isoformat()
def ref(p):return {'path':str(p.relative_to(R)),'sha256':sha(p)}
def cov(p):return dict(ref(p),coverage=[[1,len(p.read_text().removesuffix('\n').split('\n'))]])
old=json.loads((E/'REVIEW_BEFORE.json').read_text());proof=[];source=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');lic=source.find(id='GNU-Free-Documentation-License')
for x in lic.select('.nav-panel,.copiable-link'):x.decompose()
norm=lambda t:' '.join(t.split());contexts=set()
for p in sorted((N/'preferred').rglob('*.md')):
 rel=p.relative_to(N/'preferred');before=E/'preferred-before'/rel;oldtext=before.read_text();text=p.read_text();assert oldtext.split('---',2)[2]==text.split('---',2)[2],rel
 a=oldtext.splitlines();b=text.splitlines();assert [x for x in a if not x.startswith('documentContext: ')]==[x for x in b if not x.startswith('documentContext: ')],rel
 ctx=json.loads(next(x for x in b if x.startswith('documentContext: ')).split(': ',1)[1])[0];html=ctx['html'];contexts.add(html);s=BeautifulSoup(html,'html.parser');t=norm(s.get_text(' ',strip=True));assert norm(lic.get_text(' ',strip=True))in t
 for x in source.find(id='Top').find_all(['p','blockquote'],recursive=False)[:3]:assert norm(x.get_text(' ',strip=True))in t
 for x in ['René Seindal','François Pinard','Gary V. Vaughan','Eric Blake','Free Software Foundation','Libx','History','no Invariant Sections','no Front-Cover Texts','no Back-Cover Texts','independent unofficial translation','chapters1–3','Other chapters are not translated here','All examples remain static text']:assert x in t,x
 assert 'in progress'not in html;assert s.find('a',href='/docs/gnu-m4/source/v1-4-21/source.zip');assert sha(p)==sha(Path('/private/tmp/libx-gnu-m4-formal-971/apps/gnu-m4/src/content/docs/v1-4-21')/rel)
 proof.append({'page':str(rel),'before':ref(before),'after':ref(p),'bodySHA256':hashlib.sha256(text.split('---',2)[2].encode()).hexdigest(),'body':'byte-for-byte unchanged','otherFrontmatter':'byte-for-byte unchanged'})
assert len(contexts)==1 and len(proof)==37
review=json.loads((E/'REVIEW_BEFORE.json').read_text())
for row in review['pages']:
 before={}
 for role,lang in [('canonical','en'),('translation','ja')]:
  frozen=E/'preferred-before'/lang/row['id'];assert sha(frozen)==row[role]['sha256'];before[role]=dict(ref(frozen),coverage=row[role]['coverage']);row[role]=cov(N/'preferred'/lang/row['id'])
 row['limitedContextUpdate']={'at':at,'separateLimitedReviewPass':True,'previousBodyReview':ref(E/'REVIEW_BEFORE.json'),'previousPreferredFiles':before,'scope':'Only documentContext; source/body/title/other frontmatter byte-for-byte unchanged. Original notice/full GFDL/authors retained; final scope/unofficial translation/history/static examples/source offer wording separately checked.','evidence':str((E/'FINAL_CONTEXT_BINDING.json').relative_to(R))}
review['limits']='All18 whole body reviews retained via exact unchanged-body proof; final context separately reviewed. Sourcekit/replay/integration/publication checks remain separate.'
(N/'REVIEW_MANIFEST.json').write_text(json.dumps(review,ensure_ascii=False,indent=2)+'\n');(E/'REVIEW_FINAL_CONTEXT_FROZEN.json').write_bytes((N/'REVIEW_MANIFEST.json').read_bytes());v={'at':at,'status':'passed-limited-context-review-with-whole-body-review-reuse','pages':37,'wholeBodyReviewsReused':18,'contexts':1,'findings':'Final disclosure accurately limits translation to complete chapters1–3 and footnote1, retains all original notices/full GFDL/four authors/History and adds editable-source offer. No body or title changes. This is a context-only review, not a new body review or publication gate.','rows':proof};(E/'FINAL_CONTEXT_BINDING.json').write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n');print('Final context37; all bodies exact; whole reviews18 rebound')
