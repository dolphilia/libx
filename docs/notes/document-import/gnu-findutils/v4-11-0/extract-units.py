from pathlib import Path
from bs4 import BeautifulSoup, NavigableString, Tag, Comment
import json,re,hashlib
from translation_nodes import selected_nodes
N=Path(__file__).resolve().parent; D=N/'translations';D.mkdir(exist_ok=True)
for f in sorted((N/'drafts/en').glob('*.body.html')):
 s=BeautifulSoup(f.read_text(),'html.parser'); units=[]; covered=set()
 nodes=selected_nodes(s)
 for i,node in enumerate(nodes):
  tokens={};counter=[0]
  def token(value):
   k='⟦'+str(counter[0])+'⟧';counter[0]+=1;tokens[k]=value;return k
  def encode(x):
   if isinstance(x,Comment):covered.add(id(x));return token('<!--'+str(x)+'-->')
   if isinstance(x,NavigableString):covered.add(id(x));return str(x)
   assert isinstance(x,Tag)
   if x.name in ['code','samp','var','pre']:
    for text in x.find_all(string=True):covered.add(id(text))
    return token(str(x))
   opening=str(x).split('>',1)[0]+'>'
   return token(opening)+''.join(encode(c) for c in x.contents)+token('</'+x.name+'>')
  value=re.sub(r'\s+',' ',''.join(encode(c) for c in node.contents)).strip()
  units.append({'index':i,'tag':node.name,'text':value,'tokens':tokens,'sourceHTML':str(node)})
 unhandled=[]
 for t in s.find_all(string=True):
  if not t.strip() or id(t) in covered:continue
  if t.find_parent('pre'):continue
  if t.find_parent('dt') and (t.find_parent(['code','samp','var']) or not re.search('[A-Za-z]{2,}',str(t))):continue
  unhandled.append(str(t))
 assert not unhandled,(f,unhandled)
 out={'slug':f.name.removesuffix('.body.html'),'bodySHA256':hashlib.sha256(f.read_bytes()).hexdigest(),'units':units,'nonProse':'Command/flag literals and code/output examples retained; headings, prose, explanatory dt/dd and table headings/cells extracted; complete adopted footnote included. Unreviewed candidate drafts only; no unhandled prose text.'}
 (D/(out['slug']+'-units.json')).write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
 print(out['slug'],len(units))
