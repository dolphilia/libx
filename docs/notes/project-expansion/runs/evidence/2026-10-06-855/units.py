from pathlib import Path
from bs4 import BeautifulSoup,Tag,NavigableString,Comment
import json,re
N=Path('docs/notes/document-import/rapidjson/v1-1-0');E=Path(__file__).parent
def excluded(x):return any(p.name in ['pre','code'] or set(p.get('class',[]))&{'line','ttname','ttdeci','ttdef'} for p in [x,*x.parents] if isinstance(p,Tag))
def units(soup):
 result=[]
 for el in soup.select('h1,h2,h3,h4,h5,h6,p,li,td,th,.ttdoc,.caption'):
  if excluded(el):continue
  nodes=[x for x in el.contents if not isinstance(x,Comment) and (not isinstance(x,Tag) or (x.name not in ['ul','ol','p','table','div','blockquote'] and x.get_text().strip()))]
  if not ''.join(x.get_text()if isinstance(x,Tag)else str(x)for x in nodes).strip():continue
  if any(isinstance(x,Tag) and x.find(['p','li']) for x in nodes):continue
  tokens=[];parts=[]
  for x in nodes:
   if isinstance(x,Tag):
    if not x.get_text().strip():parts.append(str(x));continue
    tokens.append(str(x));parts.append('{'+str(len(tokens))+'}')
   else:parts.append(str(x))
  result.append((el,nodes,{'n':len(result)+1,'tag':el.name,'text':''.join(parts).strip(),'tokens':tokens}))
 return result
if __name__=='__main__':
 for name in ['10-performance','11-internals','12-faq','13-npm']:
  s=BeautifulSoup((N/f'canonical/en/01-guide/{name}.md').read_text().split('---\n',2)[2],'html.parser');u=[r for e,n,r in units(s)];(E/f'{name}-blocks.json').write_text(json.dumps(u,ensure_ascii=False,indent=2)+'\n');print(name,len(u))
