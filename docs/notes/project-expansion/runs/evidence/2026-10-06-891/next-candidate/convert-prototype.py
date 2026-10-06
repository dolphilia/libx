from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import html,json,hashlib,datetime,urllib.parse
E=Path(__file__).parent;out=E/'prototype-drafts';out.mkdir(exist_ok=True);rows=[]
for p in sorted((E/'source/doc/html').glob('*.html')):
 s=BeautifulSoup(p.read_text(),'html.parser');body=s.body;assert body is not None
 literal=[n.get_text()for n in body.find_all('pre')];tokens={}
 for i,pre in enumerate(body.find_all('pre')):
  token=f'LIBX_PCRE2_LITERAL_{i:05d}_END';assert token not in str(body);tokens[token]='<pre><code>'+html.escape(literal[i],quote=False).replace('\n','&#10;').replace('\t','&#9;')+'</code></pre>';pre.replace_with(NavigableString(token))
 for a in body.find_all('a'):
  if a.get('name') and not a.get('id'):a['id']=a['name']
  h=a.get('href','')
  if h and not h.startswith(('#','https://','http://','mailto:')):a['href']=urllib.parse.urljoin('https://github.com/PCRE2Project/pcre2/blob/6f9d7c1373262c541324a16a358785b33ef116cf/doc/html/'+p.name,h)
 for h in body.find_all(['h1','h2']):h.name='h2' if h.name=='h1' else 'h3'
 content='\n'.join(str(n)for n in body.contents)
 for token,value in tokens.items():assert content.count(token)==1;content=content.replace(token,value)
 dest=out/(p.stem+'.md');dest.write_text(content+'\n');assert [n.get_text()for n in BeautifulSoup(content,'html.parser').find_all('pre')]==literal
 rows.append({'source':p.name,'draft':dest.name,'sourceSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'draftSHA256':hashlib.sha256(dest.read_bytes()).hexdigest(),'originalCodes':literal})
(E/'PROTOTYPE_INPUT_BINDINGS.json').write_text(json.dumps({'status':'saved-unreviewed-conversion-drafts','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'adoption':'not-selected/no-new-operation','files':rows,'correction':'Original pcre2syntax has an unclosed paragraph enclosing block/pre nodes in BeautifulSoup. Initial get_text(separator) comparison added artificial inline-bold separators inside literal pre. Bind separate pre text and actual HTML5 outside-pre text; do not audit or require perfect source markup.'},ensure_ascii=False,indent=2)+'\n');print('Saved5drafts/all51originalpretexts exact; actualtarget/native pending')
