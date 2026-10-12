from pathlib import Path
from bs4 import BeautifulSoup,NavigableString,Tag
import json,datetime,hashlib
N=Path(__file__).resolve().parent.parent;A=Path('/private/tmp/libx-gnu-tar-trial-964/apps/gnu-m4-trial');S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');rows=[]
def norm(s):return ' '.join(s.split())
def tree(n,pre=False):
 if isinstance(n,NavigableString):return str(n)if pre else norm(str(n))
 if not isinstance(n,Tag):return ''
 # Navigation/copied heading anchor alone are removed by the documented converter.
 if set(n.get('class',[]))&{'nav-panel','copiable-link'}:return ''
 attrs={k:v for k,v in n.attrs.items()if k!='href'}
 if n.get('href'):attrs['href']=n['href'].split('manual.html')[-1]if 'manual.html#'in n['href'] else n['href']
 return [n.name,attrs,[v for x in n.children if (v:=tree(x,pre or n.name in ['pre','code']))!='']]
for name,node in [('01-preliminaries','Preliminaries'),('02-invoking-m4','Invoking-m4'),('03-syntax','Syntax')]:
 p=A/'src/content/docs/v1-4-21/en/01-guide'/(name+'.md');raw=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser').select_one('.gnu-m4-original-content').find(recursive=False);original=S.find(id=node)
 if node=='Syntax':
  # Footnote appended separately; compare chapter contents and footnote through their separate exact trees.
  f=raw.find(id='FOOT1').parent;fn=f.find_next_sibling('p');assert tree(f)==tree(S.find(id='FOOT1').parent);assert tree(fn)==tree(S.find(id='FOOT1').parent.find_next_sibling('p'));f.decompose();fn.decompose()
 assert tree(raw)==tree(original),name
 rows.append({'name':name,'rawSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'originalVsTrialWholeDOM':'exact except documented nav/copied anchors and external fixed-source fragment routing','pre':len(original.select('pre'))})
ja=A/'src/content/docs/v1-4-21/ja/01-guide/01-quoted-input.md';raw=BeautifulSoup(ja.read_text().split('---',2)[2],'html.parser');assert [p.get_text()for p in raw.select('pre')]==[p.get_text()for p in S.find(id='Quoting-input-to-m4').parent.select('pre')]
notice=S.find(id='Top').find_all(['p','blockquote'],recursive=False)[:3];lic=S.find(id='GNU-Free-Documentation-License')
for x in lic.select('.nav-panel,.copiable-link'):x.decompose()
for p in (A/'src/content/docs').rglob('*.md'):
 ctx=json.loads(next(x for x in p.read_text().splitlines()if x.startswith('documentContext: ')).split(': ',1)[1])[0]['html'];c=BeautifulSoup(ctx,'html.parser');text=norm(c.get_text(' ',strip=True))
 for t in notice:assert norm(t.get_text(' ',strip=True))in text
 assert norm(lic.get_text(' ',strip=True).replace('¶',''))in text
 for name in ['René Seindal','François Pinard','Gary V. Vaughan','Eric Blake','History','Libx','no Invariant Sections']:assert name in text
v={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed-source-body-and-notices','rows':rows,'JapaneseSamplePre':'exact2','originalNotice':'all3exact','EnglishGFDL':'entiretextpreserved','limits':'Trial source checks; not full Japanese review or formal publication fulfillment. Copyright, notices, authors, History are present; final source kit still required.'};(N/'trial/TRIAL_SOURCE.json').write_text(json.dumps(v,indent=2)+'\n');print(json.dumps(v))
