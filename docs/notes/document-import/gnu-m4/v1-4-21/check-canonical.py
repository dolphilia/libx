from pathlib import Path
from bs4 import BeautifulSoup,Tag,NavigableString
import json,copy,hashlib,re,datetime,urllib.parse,subprocess
N=Path(__file__).resolve().parent;R=Path.cwd();W=Path('/private/tmp/libx-gnu-m4-formal-971');S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');G=json.loads((N/'CANONICAL_GENERATION.json').read_text());rows=G['rows'];assert len(rows)==18;P=N/'preferred';expectedNodes=[h.parent['id']for chapter in ['Preliminaries','Invoking-m4','Syntax']for h in S.find(id=chapter).select('h2,h3')];assert expectedNodes==[r['id']for r in rows]
def tree(n,pre=False):
 if isinstance(n,NavigableString):return str(n)if pre else ' '.join(str(n).split())
 if not isinstance(n,Tag):return ''
 if set(n.get('class',[]))&{'nav-panel','copiable-link'}:return ''
 attrs={k:v for k,v in n.attrs.items()if k!='href'}
 if n.get('href'):attrs['href']='#'+n['href'].split('#',1)[1]if '#'in n['href']and n['href'].startswith(('#','/docs/gnu-m4/'))else n['href']
 return [n.name,attrs,[v for x in n.children if (v:=tree(x,pre or n.name in ['pre','code']))!='']]
allIds={};pre=[];localRefs=0
for r in rows:
 p=P/'en'/r['page'];raw=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser').select_one('.gnu-m4-original-content').find(recursive=False);original=copy.deepcopy(S.find(id=r['id']))
 for x in original.select('div[class$="-level-extent"]'):x.decompose()
 if r['id']==G['footnoteOwner']:
  f=S.find(id='FOOT1').parent;original.append(copy.deepcopy(f));original.append(copy.deepcopy(f.find_next_sibling('p')))
 assert tree(raw)==tree(original),r['id'];assert len(raw.select('pre'))==r['pre'];pre.extend(x.get_text()for x in raw.select('pre'))
 for x in [raw,*raw.select('[id]')]:
  if x.get('id'):assert x['id']not in allIds,x['id'];allIds[x['id']]=r['page']
for r in rows:
 raw=BeautifulSoup((P/'en'/r['page']).read_text().split('---',2)[2],'html.parser').select_one('.gnu-m4-original-content')
 for a in raw.select('a[href]'):
  href=a['href'];q=urllib.parse.urlsplit(href)
  if href.startswith('/docs/gnu-m4/v1-4-21/en/'):
   path=q.path.removeprefix('/docs/gnu-m4/v1-4-21/en/').rstrip('/')+'.md';assert (P/'en'/path).exists(),href
   if q.fragment:assert allIds[q.fragment]==path,href
   localRefs+=1
  elif href.startswith('/docs/gnu-m4/source/v1-4-21/manual.html'):
   assert S.find(id=urllib.parse.unquote(q.fragment)),href;localRefs+=1
assert len(pre)==15;before={str(p.relative_to(P)):hashlib.sha256(p.read_bytes()).hexdigest()for p in P.rglob('*.md')};subprocess.run(['/private/tmp/libx-doc-review-python/bin/python',str(N/'generate-canonical.py')],check=True,capture_output=True);after={str(p.relative_to(P)):hashlib.sha256(p.read_bytes()).hexdigest()for p in P.rglob('*.md')};assert before==after
v={'status':'passed-canonical-not-full-meaning-review','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'guides':18,'references':1,'headingsOrderExact':True,'originalPreExact':15,'originalIDs':len(allIds),'remappedReferencesChecked':localRefs,'wholeSourceDOM':'each complete original semantic section exact after removing navigation/copied heading anchors, splitting nested sections and remapping links; all18 source sections present in order; footnote1 included exact','regeneration':'all19preferredfiles exact','files':[{'path':str((P/p).relative_to(R)),'sha256':sha}for p,sha in before.items()],'limits':'No Japanese full translation/meaning review or final rights/sourcekit/build/integration/publication gate.'};(N/'CANONICAL_VALIDATION.json').write_text(json.dumps(v,indent=2)+'\n');print(json.dumps({k:v for k,v in v.items()if k!='files'}))
