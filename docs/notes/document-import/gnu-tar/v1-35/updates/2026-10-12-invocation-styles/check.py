from pathlib import Path
from bs4 import BeautifulSoup
from collections import Counter
import copy,json,re,hashlib,subprocess,sys,datetime
U=Path(__file__).resolve().parent;N=U.parents[1];W=Path('/private/tmp/libx-gnu-tar-update-986')
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
norm=lambda s:re.sub(r'\s+',' ',s).strip()
source=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser')
plan=json.loads((U/'PAGE_PLAN.json').read_text());translation=json.loads((U/'TRANSLATION.json').read_text())
pages={};rows=[];refs=0
for r in plan['rows']:
 original=copy.deepcopy(source.find(id=r['sourceId']))
 for x in original.select('.nav-panel,.copiable-link,div[class$="-level-extent"]'):x.decompose()
 for a in list(original.select('a.footnote[href]')):
  h=source.find(id=a['href'][1:]).parent;original.append(copy.deepcopy(h));original.append(copy.deepcopy(h.find_next_sibling('p')))
 en=BeautifulSoup((U/'preferred/en'/r['page']).read_text().split('---',2)[2],'html.parser').select_one('.gnu-tar-original-content')
 ja=BeautifulSoup((U/'preferred/ja'/r['page']).read_text().split('---',2)[2],'html.parser').select_one('.gnu-tar-original-content')
 # Ordered entire blocks and original code/IDs must survive splitting.
 blocks=lambda s:[(x.name,norm(x.get_text())) for x in s.find_all(re.compile('^(p|pre|dt|dd|li|h[1-6])$'))]
 assert blocks(original)==blocks(en),r['page']
 assert [x.get_text() for x in original.select('pre')]==[x.get_text() for x in en.select('pre')]==[x.get_text() for x in ja.select('pre')],r['page']
 ids=lambda s:([s['id']] if s.get('id') else [])+[x['id'] for x in s.select('[id]')]
 assert ids(original)==ids(en)==ids(ja),r['page']
 for s in [en,ja]: assert len(ids(s))==len(set(ids(s)))
 assert [x.name for x in en.find_all(re.compile('^(p|pre|dt|dd|li|h[1-6])$'))]==[x.name for x in ja.find_all(re.compile('^(p|pre|dt|dd|li|h[1-6])$'))]
 anchors=lambda s:[a['href'].replace('/v1-35/ja/','/v1-35/en/') for a in s.select('a[href]')]
 assert anchors(en)==anchors(ja),r['page']
 for lang in ['en','ja']:pages['/docs/gnu-tar/v1-35/'+lang+'/'+r['page'][:-3]+'/']=BeautifulSoup((U/'preferred'/lang/r['page']).read_text().split('---',2)[2],'html.parser')
 rows.append({'page':r['page'],'enSHA256':sha(U/'preferred/en'/r['page']),'jaSHA256':sha(U/'preferred/ja'/r['page']),'orderedOriginalBlocks':len(blocks(original)),'pre':len(en.select('pre'))})
for p in (N/'preferred').rglob('*.md'):pages['/docs/gnu-tar/v1-35/'+str(p.relative_to(N/'preferred'))[:-3]+'/']=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser')
for r in plan['rows']:
 for lang in ['en','ja']:
  p=pages['/docs/gnu-tar/v1-35/'+lang+'/'+r['page'][:-3]+'/']
  ids=[x['id'] for x in p.select('[id]')];assert len(ids)==len(set(ids))
  for a in p.select('a[href]'):
   v=a['href']
   if v.startswith('/docs/gnu-tar/v1-35/'):
    path,_,anchor=v.partition('#');assert path in pages,(r['page'],v)
    if anchor:assert pages[path].find(id=anchor),(r['page'],v)
    refs+=1
   elif v.startswith('/docs/gnu-tar/source/v1-35/manual.html#'):assert source.find(id=v.split('#')[1]),v;refs+=1
   elif v.startswith('#'):assert p.find(id=v[1:]),v;refs+=1
before={str(p.relative_to(U)):sha(p) for p in (U/'preferred').rglob('*.md')}
for script in ['generate.py','translate.py']:subprocess.run([sys.executable,str(U/script)],check=True,stdout=subprocess.DEVNULL)
assert before=={str(p.relative_to(U)):sha(p) for p in (U/'preferred').rglob('*.md')}
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'pages':rows,'originalParagraphs':sum(len(BeautifulSoup((U/'source-fragments'/Path(r['page']).with_suffix('.html')).read_text(),'html.parser').select('p')) for r in plan['rows']),'preBlocks':sum(r['pre'] for r in rows),'footnotes':['FOOT2','FOOT3','FOOT4'],'references':refs,'regeneration16Exact':True,'limits':'Source/canonical blocks, original code, EN/JA structure/IDs/anchors, regeneration only. Meaning review recorded separately. Rendered layout/sourcekit/formal integration/publication pending.'}
(U/'STRUCTURE_VALIDATION.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print('Structure passed:',len(rows),'EN/JA pages;',refs,'references;',out['preBlocks'],'pre exact')
