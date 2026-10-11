from pathlib import Path
from bs4 import BeautifulSoup
import json,copy,hashlib,urllib.parse,subprocess
N=Path(__file__).resolve().parent;A=Path('/private/tmp/libx-gnu-libtool-998/apps/gnu-libtool');S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');gen=json.loads((N/'CANONICAL_GENERATION.json').read_text());h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();rows=gen['rows'];errors=[];canonical=[];drafts=[];rendered=[]
def normalize(node,rootid):
 n=copy.deepcopy(node)
 for x in n.select('.nav-panel,.copiable-link,.menu'):x.decompose()
 for row in rows[:10]:
  if row['nodeId']==rootid:continue
  x=n.find(id=row['nodeId'])
  if x:x.decompose()
 return n
def body(p):return BeautifulSoup(p.read_text().split('---',2)[2],'html.parser').select_one('.gnu-libtool-original-content')
for row in rows:
 key=row['nodeId'];original=normalize(S.find(id=key),key)
 for num,owner in [(1,'Linking-libraries'),(2,'Linking-executables'),(3,'Linking-executables'),(4,'Installing-libraries')]:
  if owner!=key:continue
  f=S.find(id='FOOT'+str(num)).parent;original.append(copy.deepcopy(f));f=f.find_next_sibling()
  while f is not None and f.name!='h5':original.append(copy.deepcopy(f));f=f.find_next_sibling()
 p=N/row['canonical'];en=body(p)
 for tag in ['p','pre','dt','dd','li','h2','h3','h4','h5']:assert [x.get_text()for x in original.select(tag)]==[x.get_text()for x in en.select(tag)],(key,tag)
 originalids=[x['id']for x in [original,*original.select('[id]')]if x.get('id')];actualids=[x['id']for x in en.select('[id]')];assert originalids==actualids,key
 canonical.append({'page':row['page'],'sha256':h(p),'sourceSHA256':row['sourceSHA256'],'pre':row['pre'],'paragraphs':row['paragraphs'],'footnotes':row['footnotes']})
 for lang in ['en']if key=='GNU-Free-Documentation-License'else ['en','ja']:
  pp=N/'preferred'/lang/row['page'];raw=body(pp);out=A/'dist/v2-6-2'/lang/row['page'].removesuffix('.md')/'index.html';dom=BeautifulSoup(out.read_text(),'html.parser');actual=dom.select_one('.gnu-libtool-original-content');assert actual
  for tag in ['p','pre','dt','dd','li','h2','h3','h4','h5']:
   # HTML block boundary whitespace may collapse; literal code remains byte-exact.
   text=lambda x:x.get_text() if tag=='pre' else ' '.join(x.get_text().split())
   assert [text(x)for x in raw.select(tag)]==[text(x)for x in actual.select(tag)],(lang,key,tag)
  ids=[x['id']for x in dom.select('[id]')];assert len(ids)==len(set(ids)),(lang,key,'duplicateIDs')
  checked=0
  for a in dom.select('a[href]'):
   u=urllib.parse.urlsplit(a['href'])
   if u.scheme or u.netloc:continue
   if u.path in ['/en','/ja']:
    assert (Path('/private/tmp/libx-gnu-tar-production-artifact-995/dist')/u.path.lstrip('/')/'index.html').exists();checked+=1;continue
   target=out if not u.path else A/'dist'/u.path.removeprefix('/docs/gnu-libtool/').lstrip('/')if u.path.startswith('/')else out.parent/u.path
   if target.is_dir():target=target/'index.html'
   if not target.exists():errors.append([lang,key,a['href']]);continue
   if u.fragment and target.suffix=='.html':
    dest=dom if target==out else BeautifulSoup(target.read_text(),'html.parser')
    if not dest.find(id=urllib.parse.unquote(u.fragment)):errors.append([lang,key,a['href']])
   checked+=1
  rendered.append({'language':lang,'page':row['page'],'preferredSHA256':h(pp),'renderedSHA256':h(out),'pre':len(actual.select('pre')),'localReferencesChecked':checked})
  if lang=='ja':
   assert [x.get_text()for x in original.select('pre')]==[x.get_text()for x in actual.select('pre')],key
   assert actualids==[x['id']for x in raw.select('[id]')],key
   assert len(actual.select('.gnu-libtool-code-note'))==row['pre']
   sourceanchors=[a for a in en.select('a[href]')];jaanchors=raw.select('a[href]');assert len(sourceanchors)==len(jaanchors),(key,'link count')
   for a,b in zip(sourceanchors,jaanchors):assert a['href'].replace('/v2-6-2/en/','/v2-6-2/ja/')==b['href'],(key,a,b)
   drafts.append({'page':row['page'],'sha256':h(pp),'pre':row['pre'],'codeNotes':len(actual.select('.gnu-libtool-code-note')),'status':'structure-passed-meaning-review-pending'})
assert not errors,errors
assert sum(r['pre']for r in canonical[:10])==31;assert sum(r['paragraphs']for r in canonical[:10])==87;assert len(drafts)==10;assert len(rendered)==21
before={str(p.relative_to(N/'preferred')):h(p)for p in (N/'preferred').rglob('*.md')}
for script in ['generate.py','translate.py']:subprocess.run(['/private/tmp/libx-doc-review-python/bin/python',str(N/script)],check=True,stdout=subprocess.DEVNULL)
after={str(p.relative_to(N/'preferred')):h(p)for p in (N/'preferred').rglob('*.md')};assert before==after
for name,value in [('CANONICAL_VALIDATION.json',{'status':'passed','guides':10,'EnglishReferences':1,'rows':canonical,'wholeOriginalParagraphs':87,'literalCodeBlocks':31,'wholeFootnotes':[1,2,3,4],'regeneratedPreferredFilesExact':21}),('DRAFT_STRUCTURE.json',{'status':'passed','rows':drafts,'guidePairs':10,'units':91,'literalCodeBlocks':31,'adjacentJapaneseCodeNotes':31,'meaningReview':'pending'}),('RENDERED_DRAFTS.json',{'status':'passed','rows':rendered,'pages':21,'buildRoutes':26,'errors':errors,'limits':'Draftsource/render/links only;meaningreview,finalrights/sourcekit,integrated/deployment checks pending. Shared/en,/ja landingrefs matched existing production artifact existence;standaloneappdoesnotservethoseroutes.'})]:
 (N/name).write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n')
print('Canonical10+reference,21preferredregeneration,10Japanese structuraldrafts,31code/4footnotes,rendered21pages passed;meaningreviewpending')
