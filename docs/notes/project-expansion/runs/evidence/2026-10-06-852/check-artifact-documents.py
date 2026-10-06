from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,sys
D=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-06-852');R=Path('/Users/dolphilia/github/libx');role=sys.argv[1];T=Path('/private/tmp/libx-mdbook-'+role+'-artifact-852/dist/docs/mdbook');notes=R/'docs/notes/document-import/mdbook/v0-5-4';map=json.loads((notes/'CONTENT_MAP.json').read_text());rows=[];sourceLinks=0
def shape(node):
 if node.name is None:return str(node)
 children=[shape(c)for c in node.children if not(node.name in ['div','nav','main']and c.name is None and not str(c).strip())]
 return {'tag':node.name,'attributes':node.attrs,'children':children}
for p in map['pages']:
 for language,key in [('en','canonical'),('ja','translation')]:
  raw=(R/p[key]['path']).read_bytes();assert hashlib.sha256(raw).hexdigest()==p[key]['sha256'];front,body=raw.decode().split('---\n',2)[1:];expected=BeautifulSoup(body,'html.parser');route='v0-5-4/'+language+'/'+p['id'][:-3]+'/index.html';actual=BeautifulSoup((T/route).read_text(),'html.parser');assert shape(expected.select_one('.mdbook-guide'))==shape(actual.select_one('.mdbook-guide')),route
  a=expected.select('nav');b=[x for x in actual.select('nav')if x.get('aria-label') in [n.get('aria-label')for n in a]];assert len(a)==len(b)
  for x,y in zip(a,b):assert shape(x)==shape(y),route
  import re
  context=json.loads(re.search(r'^documentContext: (.*)$',front,re.M)[1])
  for c in context:
   for link in BeautifulSoup(c['html'],'html.parser').select('a[href]'):
    assert actual.select_one('a[href="'+link['href']+'"]'),link['href'];sourceLinks+=1
  rows.append({'id':p['id'],'language':language,'htmlSha256':hashlib.sha256((T/route).read_bytes()).hexdigest(),'bodyDOMExact':True,'navDOMExact':True,'codeBlocks':len(expected.select('pre code'))})
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'documents':len(rows),'bodyAndNavigationDOMExact':True,'footerLinks':sourceLinks,'rows':rows};(D/(role.upper()+'_DOCUMENTS.json')).write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print('Artifact documents:',len(rows),'body/navigation exact;',sourceLinks,'footer links')
