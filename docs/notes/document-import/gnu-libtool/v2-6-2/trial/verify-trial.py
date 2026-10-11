from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,urllib.parse,copy,re
N=Path(__file__).resolve().parent.parent;A=Path('/private/tmp/libx-gnu-libtool-trial-997/apps/gnu-libtool-trial');E=N.parents[2]/'project-expansion/runs/evidence/2026-10-12-997';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();s=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');rows=[];errors=[]
for row in json.loads((N/'trial/TRIAL_GENERATION.json').read_text())['rows']:
 p=A/row['path'];front=p.read_text().split('---',2)[1];raw=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser').select_one('.gnu-libtool-original-content');relative=Path(row['path']).relative_to('src/content/docs').with_suffix('');out=A/'dist'/relative/'index.html';dom=BeautifulSoup(out.read_text(),'html.parser');body=dom.select_one('.gnu-libtool-original-content')
 assert body is not None
 for tag in ['p','pre','dt','dd','li','h2','h3','h4','h5']:
  assert [x.get_text()for x in raw.select(tag)]==[x.get_text()for x in body.select(tag)],(row['path'],tag)
 assert len(body.select('pre'))==row['pre']
 ids=[x['id']for x in dom.select('[id]')];assert len(ids)==len(set(ids)),row['path']
 count=0
 for a in dom.select('a[href]'):
  u=urllib.parse.urlsplit(a['href'])
  if u.scheme or u.netloc:continue
  if u.path in ['/en','/ja']:
   assert (Path('/private/tmp/libx-gnu-tar-production-artifact-995/dist')/u.path.lstrip('/')/'index.html').exists();count+=1;continue
  target=out if not u.path else A/'dist'/u.path.removeprefix('/docs/gnu-libtool-trial/').lstrip('/') if u.path.startswith('/') else out.parent/u.path
  if target.is_dir():target=target/'index.html'
  if not target.exists():errors.append({'page':str(relative),'href':a['href'],'target':str(target)});continue
  if u.fragment and target.suffix=='.html':
   dest=dom if target==out else BeautifulSoup(target.read_text(),'html.parser')
   if not dest.find(id=urllib.parse.unquote(u.fragment)):errors.append({'page':str(relative),'fragment':a['href']})
  count+=1
 ctx=json.loads(next(x for x in front.splitlines()if x.startswith('documentContext: ')).split(': ',1)[1])[0]['html'];context=BeautifulSoup(ctx,'html.parser')
 for text in ['Gordon Matzigkeit','Alexandre Oliva','Thomas Tanner','Gary V. Vaughan','1996–2019, 2021–2026','no Invariant Sections','History / 履歴','GNU Free Documentation License']:
  assert text in context.get_text(),text
 # English complete paragraphs/list/code content is equal to cleaned fixed source, with full footnotes.
 if relative.parts[1]=='en':
  node=copy.deepcopy(s.find(id='Libtool-paradigm'if '01-libtool' in p.name else 'Using-libtool'))
  for x in node.select('.nav-panel,.copiable-link,.menu'):x.decompose()
  if '02-using' in p.name:
   for i in range(1,5):
    f=s.find(id='FOOT'+str(i)).parent;node.append(copy.deepcopy(f));f=f.find_next_sibling()
    while f is not None and f.name!='h5':node.append(copy.deepcopy(f));f=f.find_next_sibling()
  assert [x.get_text()for x in node.select('p,pre,dt,dd,li')]==[x.get_text()for x in body.select('p,pre,dt,dd,li')]
 else:assert [x.get_text()for x in s.find(id='Creating-object-files').select('pre')]==[x.get_text()for x in body.select('pre')]
 rows.append({**row,'renderedSHA256':h(out),'localReferencesChecked':count,'status':'passed'})
assert not errors,errors
out={'status':'passed','rows':rows,'errors':errors,'buildPages':8,'limits':'Trial structure/source/code/notice/links verification; not full Japanese10page review, adoption or publication.'};(E/'TRIAL_STRUCTURE.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(json.dumps(out))
