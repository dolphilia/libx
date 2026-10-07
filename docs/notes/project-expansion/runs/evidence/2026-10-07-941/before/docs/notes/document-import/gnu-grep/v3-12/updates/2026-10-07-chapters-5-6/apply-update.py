from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,hashlib,re,copy,os
N=Path(__file__).resolve().parent;P=N.parents[1];W=P.parents[4];A=W/'apps/gnu-grep';assert os.environ.get('LIBX_UPDATE_WORKSPACE')==str(W),'Explicit isolatedworkspace required; no root draft publication';assert A.is_dir();sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();plan=json.loads((N/'PAGE_PLAN.json').read_text());review=json.loads((N/'DRAFT_REVIEW_MANIFEST.json').read_text());assert review['completedPages']==3 and review['allUnitsReviewed']==21;owners={};literal=[];old={str(p.relative_to(A)):sha(p)for p in (A/'src/content/docs/v3-12').rglob('*.md')if p.parent.name=='02-reference' or int(p.name.split('-')[0])<=24};manual=BeautifulSoup((P/'source/derived/manual.html').read_bytes(),'html.parser');assert sha(P/'source/derived/manual.html')==plan['source']['sha256']
for f in sorted((P/'source-fragments/en/01-guide').glob('*.html')):
 s=BeautifulSoup(f.read_text(),'html.parser')
 for node in s.select('[id]'):assert node['id']not in owners;owners[node['id']]=f.stem
for row in plan['pages']:
 s=BeautifulSoup((N/'drafts/en'/(row['slug']+'.body.html')).read_text(),'html.parser')
 for node in s.select('[id]'):assert node['id']not in owners;owners[node['id']]=row['slug']
headfile=A/'src/data/document-headings.json';heads=json.loads(headfile.read_text());rows=[]
for row,proof in zip(plan['pages'],review['pages']):
 assert row['slug']==proof['slug']
 for lang,key in [('en','EnglishSHA256'),('ja','JapaneseSHA256')]:
  f=N/'drafts'/lang/(row['slug']+'.body.html');assert sha(f)==proof[key];s=BeautifulSoup(f.read_text(),'html.parser');before=s.get_text();beforepre=[x.get_text()for x in s.select('pre')]
  for a in s.select('a[href^="#"]'):
   target=a['href'][1:];assert manual.find(id=target);a['href']=('/docs/gnu-grep/v3-12/'+lang+'/01-guide/'+owners[target]+'/#'+target)if target in owners else('/docs/gnu-grep/source/v3-12/manual.html#'+target)
  assert s.get_text()==before;title=s.find(['h2','h3','h4']).get_text(' ',strip=True);title=re.sub(r'^\d+(?:\.\d+)*\s+','',title);heads['v3-12/'+lang+'/01-guide/'+row['slug']]=[{'depth':int(x.name[1]),'slug':x['id'],'text':x.get_text(' ',strip=True)}for x in s.find_all(re.compile('^h[1-6]$'))if x.has_attr('id')]
  tokens={}
  for i,pre in enumerate(s.select('pre')):
   key='LIBX_GREP_UPDATE_PRE_'+str(i)+'_END';value='<pre class="gnu-grep-literal">'+''.join(str(c)for c in pre.contents)+'</pre>'
   for char,entity in [('\n','&#10;'),('\t','&#9;'),('`','&#96;'),('*','&#42;'),('_','&#95;')]:value=value.replace(char,entity)
   tokens[key]=value;pre.replace_with(NavigableString(key))
  raw=str(s)
  for key,value in tokens.items():raw=raw.replace(key,value)
  parsed=BeautifulSoup(raw,'html.parser');assert parsed.get_text()==before;assert [x.get_text()for x in parsed.select('pre')]==beforepre
  md='---\n'+'title: '+json.dumps(title,ensure_ascii=False)+'\ndescription: '+json.dumps('GNU diffutils3.12 fixed original manual, complete Chapters5–6.'if lang=='en'else'GNU diffutils3.12第5〜6章全文の独立・非公式日本語訳。',ensure_ascii=False)+'\n---\n\n'+raw+'\n';route='01-guide/'+row['slug']+'.md'
  for base in [N/'canonical'/lang,A/'src/content/docs/v3-12'/lang,A/'public/source/v3-12/edited'/lang]:
   q=base/route;q.parent.mkdir(parents=True,exist_ok=True);q.write_text(md)
  rows.append({'id':route,'language':lang,'path':str((N/'canonical'/lang/route).relative_to(W)),'sha256':sha(N/'canonical'/lang/route),'savedReviewedDraft':proof['EnglishSHA256'if lang=='en'else'JapaneseSHA256'],'bodyTextAndPreExact':True})
assert all(sha(A/p)==h for p,h in old.items());headfile.write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n');(N/'CANONICAL_BINDING.json').write_text(json.dumps({'status':'passed-body-preserving-canonical','documents':6,'existingPreferredMDExact':len(old),'rows':rows},indent=2)+'\n');print('New6canonicalMD;existing',len(old),'unchanged;commoncontext/sourcekit pending')
