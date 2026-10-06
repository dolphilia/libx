"""Save fixed-source candidate drafts; no formal adoption/build/review claim."""
from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import copy,json,re,hashlib
N=Path(__file__).resolve().parent
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
C=json.loads((N/'CANDIDATE_DRAFT.json').read_text())
assert h(N/'source/findutils-4.11.0.tar.xz')==C['sourceArchive']['sha256']
for r in C['sourceFiles']:assert h(N/'source/original'/r['path'].split('/source/original/')[1])==r['sha256']
assert h(N/'source/derived-manual.html')==C['wholeDerivedHTML']['sha256']
s=BeautifulSoup((N/'source/derived-manual.html').read_text(),'html.parser')
rows=[{'sourceID':'Top','heading':'GNU Findutils','words':0,'pre':0,'VAR':0,'tables':0,'footnoteLinks':[]}]+C['proposedScope']['rows']
fragments=[]
for i,r in enumerate(rows):
 z=copy.deepcopy(s.find(id=r['sourceID']));assert z
 for child in list(z.children):
  if getattr(child,'name',None)=='div'and (child.get('id')in['SEC_Contents','SEC_Shortcontents']or any(c.endswith('-level-extent')for c in child.get('class',[]))):child.decompose()
 for a in z.select('a.copiable-link'):assert a.get_text()==' ¶';a.decompose()
 if r['sourceID']=='Base-Name-Patterns':
  foot=s.find(id='FOOT1');assert foot
  heading=foot.parent;z.append(copy.deepcopy(heading))
  for sibling in heading.next_siblings:
   if getattr(sibling,'name',None)=='h5':break
   z.append(copy.deepcopy(sibling))
 z['class']=['gnu-findutils-original-content']
 assert len(z.select('pre'))==r['pre'],r['sourceID']
 slug=f'{i+1:02}-'+('overview-notice'if r['sourceID']=='Top'else r['sourceID'].lower())
 r=dict(r,slug=slug,titleEN=('Overview and original notice'if r['sourceID']=='Top'else z.find(re.compile('^h[1-6]$')).get_text(' ',strip=True)))
 fragments.append((r,z))
owners={}
for r,z in fragments:
 for x in [z]+z.select('[id]'):
  if x.has_attr('id'):assert x['id']not in owners;owners[x['id']]=r['slug']
# Source chapter coverage excludes only heading self-link markers. Attached footnote checked separately.
norm=lambda x:re.sub(r'\s+',' ',x).strip()
source=[]
for id in ['Top','Introduction','Finding-Files']:
 z=copy.deepcopy(s.find(id=id))
 if id=='Top':
  for child in list(z.children):
   if getattr(child,'name',None)=='div':child.decompose()
 for a in z.select('a.copiable-link'):a.decompose()
 source.append(z.get_text())
actual=[]
for r,z in fragments:
 c=copy.deepcopy(z)
 if r['sourceID']=='Base-Name-Patterns':
  heading=c.find(id='FOOT1').parent
  for sibling in list(heading.next_siblings):sibling.extract()
  heading.extract()
 actual.append(c.get_text())
assert norm(' '.join(source))==norm(' '.join(actual))
plan=[]
for r,z in fragments:
 before=str(z)+'\n';p=N/'source-fragments/en/01-guide'/(r['slug']+'.html');p.parent.mkdir(parents=True,exist_ok=True);p.write_text(before)
 for a in z.select('a[href^="#"]'):
  target=a['href'][1:];assert s.find(id=target),target
  a['href']=('/docs/gnu-findutils/v4-11-0/en/01-guide/'+owners[target]+'/#'+target)if target in owners else('/docs/gnu-findutils/source/v4-11-0/manual.html#'+target)
 raw=str(z);raw=re.sub(r'(<pre\b[^>]*>)([\s\S]*?)(</pre>)',lambda m:m[1]+m[2].replace('\n','&#10;').replace('\t','&#9;')+m[3],raw)
 d=N/'drafts/en'/(r['slug']+'.body.html');d.parent.mkdir(parents=True,exist_ok=True);d.write_text(raw+'\n')
 plan.append(dict(r,sourceFragmentSHA256=h(p),bodySHA256=h(d),meaningReview='pending',translation='pending'))
assert len(plan)==26;assert sum(r['pre']for r in plan)==31
fdl=s.find(id='GNU-Free-Documentation-License');assert fdl
p=N/'drafts/reference/gfdl.body.html';p.parent.mkdir(parents=True,exist_ok=True);p.write_text(str(fdl)+'\n')
(N/'DRAFT_PAGE_PLAN.json').write_text(json.dumps({'status':'saved-unreviewed-candidate-drafts','pages':plan,'EnglishDrafts':26,'EnglishOnlyLicenseReference':{'path':'drafts/reference/gfdl.body.html','sha256':h(p)},'sourceChapterCoverageExact':True,'adoptedFootnotes':['Base-Name-Patterns#FOOT1/DOCF1-full-body'],'batches':[{'pages':10,'slugs':[r['slug']for r in plan[:10]]},{'pages':8,'slugs':[r['slug']for r in plan[10:18]]},{'pages':8,'slugs':[r['slug']for r in plan[18:]]}],'limits':'Draft only. Formal operation, canonical adoption, whole meaning reviews, build and publication pending.'},ensure_ascii=False,indent=2)+'\n')
print('saved26 fixedEN source/body drafts +fullGFDL;31pre/1completefootnote;formalreview0')
