from pathlib import Path
from bs4 import BeautifulSoup
from collections import Counter
import json,re,copy,hashlib,datetime,subprocess,sys
N=Path(__file__).resolve().parent;W=Path(sys.argv[1]if len(sys.argv)>1 else '/private/tmp/libx-gnu-tar-formal-964');S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');G=json.loads((N/'CANONICAL_GENERATION.json').read_text());P=N/'preferred';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda x:re.sub(r'\s+',' ',x).strip();expected=[];originalIDs=[]
for ch in ['Introduction','Tutorial']:
 c=copy.deepcopy(S.find(id=ch))
 for x in c.select('.nav-panel,.copiable-link'):x.decompose()
 expected.extend(c.find_all(re.compile('^(p|pre|dt|dd|li|h[1-6])$')));originalIDs.extend(x['id']for x in [c,*c.select('[id]')]if x.get('id'))
f=S.find(id='FOOT1').parent;expected.extend([f,f.find_next_sibling('p')]);originalIDs.extend(x['id']for x in f.select('[id]'))
actual=[];pages={};allIDs=[];pre=[]
for row in G['rows']:
 p=P/'en'/row['page'];assert sha(p)==row['canonicalSHA256'];s=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser');body=s.select_one('.gnu-tar-original-content');assert body;pages['/docs/gnu-tar/v1-35/en/'+row['page'][:-3]+'/']=s
 actual.extend(body.find_all(re.compile('^(p|pre|dt|dd|li|h[1-6])$')));allIDs.extend(x['id']for x in body.select('[id]'));pre.extend(x.get_text()for x in body.select('pre'))
# Footnote heading lies outside the original chapters, counted once as a heading.
assert Counter((x.name,norm(x.get_text()))for x in expected)==Counter((x.name,norm(x.get_text()))for x in actual),'complete prose/list/heading preservation'
assert Counter(originalIDs)==Counter(allIDs),'all original IDs including footnote retained once'
originalPre=[x.get_text()for ch in ['Introduction','Tutorial']for x in S.find(id=ch).select('pre')];assert originalPre==pre and len(pre)==44
for p in (P/'en/02-reference').glob('*.md'):pages['/docs/gnu-tar/v1-35/en/02-reference/'+p.stem+'/']=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser')
refs=0
for uri,s in pages.items():
 ids=[x['id']for x in s.select('[id]')];assert len(ids)==len(set(ids)),uri
 for a in s.select('a[href]'):
  v=a['href']
  if v.startswith('/docs/gnu-tar/v1-35/en/'):
   target,_,anchor=v.partition('#');target=target.rstrip('/')+'/';assert target in pages,(uri,v)
   if anchor:assert pages[target].find(id=anchor),(uri,v)
   refs+=1
  elif v.startswith('/docs/gnu-tar/source/v1-35/manual.html#'):assert S.find(id=v.split('#',1)[1]),(uri,v);refs+=1
  elif v.startswith('#'):assert s.find(id=v[1:]),(uri,v);refs+=1
# Re-run the actual generator and bind complete preferred/config bytes, not only an output claim.
before={str(p.relative_to(N)):sha(p)for p in P.rglob('*.md')};before['project.config.jsonc']=sha(N/'project.config.jsonc');subprocess.run([sys.executable,str(N/'generate-canonical.py'),str(W)],check=True,stdout=subprocess.DEVNULL);after={str(p.relative_to(N)):sha(p)for p in P.rglob('*.md')};after['project.config.jsonc']=sha(N/'project.config.jsonc');assert before==after
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'EnglishGuides':31,'EnglishReferences':2,'allSourceElementsExact':len(expected),'allOriginalIDsExact':len(allIDs),'all44PreExact':True,'localFragmentReferences':refs,'wholePreferredRegenerationExact':True,'files':[{'path':str(P/k),'sha256':v}for k,v in []],'preferred':[{'path':str(p.relative_to(N)),'sha256':sha(p)}for p in sorted(P.rglob('*.md'))],'limits':'Canonical text/pre/ID/link and regeneration checks. Not a Japanese meaning review, formal browser/sourcekit or publication gate.'};(N/'CANONICAL_VALIDATION.json').write_text(json.dumps(out,indent=2)+'\n');print({k:v for k,v in out.items()if k not in ['preferred','files']})
