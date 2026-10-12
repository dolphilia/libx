from pathlib import Path
from bs4 import BeautifulSoup
import json,collections,hashlib,datetime,urllib.parse
N=Path(__file__).resolve().parent;R=Path.cwd();P=N/'preferred';A=Path('/private/tmp/libx-gnu-m4-formal-971/apps/gnu-m4');S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');norm=lambda t:' '.join(t.split());rows=[]
for p in sorted((P/'ja/01-guide').glob('*.md'))[12:18]:
 e=P/'en/01-guide'/p.name;en=BeautifulSoup(e.read_text().split('---',2)[2],'html.parser');ja=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser')
 for sel in ['pre','kbd','samp','var','code']:
  a=collections.Counter(x.get_text()if sel=='pre'else norm(x.get_text())for x in en.select(sel));b=collections.Counter(x.get_text()if sel=='pre'else norm(x.get_text())for x in ja.select(sel));assert a==b,(p.name,sel,a-b,b-a)
 assert [x['id']for x in en.select('[id]')]==[x['id']for x in ja.select('[id]')],p.name
 assert [x['href'].replace('/v1-4-21/en/','/v1-4-21/ja/')for x in en.select('a[href]')]==[x['href']for x in ja.select('a[href]')],p.name
 assert len(en.select('h2,h3,p,pre,dt,li'))==len(ja.select('h2,h3,p,pre,dt,li')),p.name
 def ctx(f):return json.loads(next(l for l in f.read_text().splitlines()if l.startswith('documentContext: ')).split(': ',1)[1])[0]['html']
 assert ctx(e)==ctx(p);context=BeautifulSoup(ctx(p),'html.parser');text=norm(context.get_text(' ',strip=True));lic=BeautifulSoup(str(S.find(id='GNU-Free-Documentation-License')),'html.parser')
 for x in lic.select('.nav-panel,.copiable-link'):x.decompose()
 assert norm(lic.get_text(' ',strip=True))in text
 for x in S.find(id='Top').find_all(['p','blockquote'],recursive=False)[:3]:assert norm(x.get_text(' ',strip=True))in text
 for t in ['René Seindal','François Pinard','Gary V. Vaughan','Eric Blake','History','Libx','no Invariant Sections','complete translation and content review remain in progress']:assert t in text,t
 rows.append({'page':'01-guide/'+p.name,'EnglishSHA256':hashlib.sha256(e.read_bytes()).hexdigest(),'JapaneseSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'proseBlocks':len(ja.select('p')),'pre':len(ja.select('pre')),'contextSHA256':hashlib.sha256(ctx(p).encode()).hexdigest(),'IDs':'exact','literalCodeTokens':'allmultisetsequal','links':'exact except EN→JA path routing','context':'exactoriginalnotice/wholeGFDL/authors/history; ENJAidentical'})
assert len(rows)==6;v={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed-batch3-structure-not-meaning-review','rows':rows,'limits':'Mechanics only; independent full meaning review recorded separately. Existing unchanged GFDL whole-text/rights evidence reused.'};(N/'BATCH3_STRUCTURE.json').write_text(json.dumps(v,indent=2)+'\n');print('Batch3 structural/context6pages exact; separate meaning review required')
