from pathlib import Path
from bs4 import BeautifulSoup
import json,copy,hashlib,re,html
E=Path(__file__).parent;S=E/'source/commonmark';P=E/'prototype';P.mkdir(exist_ok=True);s=BeautifulSoup((S/'official.html').read_bytes(),'html.parser');tests={x['example']:x for x in json.loads((S/'tests.json').read_text())};selected=[]
for h in s.select('h1.definition')[:4]:
 selected.append(copy.copy(h))
 for node in h.next_siblings:
  if node.name=='h1':break
  if node.name:selected.append(copy.copy(node))
fragment=BeautifulSoup(''.join(str(n) for n in selected),'html.parser');rows=[]
for ex in fragment.select('.example'):
 number=int(ex['id'].split('-')[1]);t=tests[number];codes=ex.select('pre code');assert len(codes)==2
 for code,key in zip(codes,['markdown','html']):code.clear();code.append(t[key]);code['class']=['language-text']
 for a in ex.select('.dingus'):a.decompose()
 ex['class']=['commonmark-example'];rows.append({'example':number,'sourceLine':t['start_line'],'inputSHA256':hashlib.sha256(t['markdown'].encode()).hexdigest(),'HTMLSHA256':hashlib.sha256(t['html'].encode()).hexdigest()})
assert len(rows)==227
for h in fragment.select('h2'):h.name='h3'
for h in fragment.select('h1'):h.name='h2';h['data-source-heading']='chapter'
ids={n['id'] for n in fragment.select('[id]')}
external=[]
for a in fragment.select('a[href]'):
 href=a['href']
 if href.startswith('#') and href[1:] not in ids:
  a['href']='https://spec.commonmark.org/0.31.2/'+href;external.append({'label':a.get_text(),'original':href,'target':a['href']})
(P/'EXTERNAL_REFERENCE_MAP.json').write_text(json.dumps(external,indent=2)+'\n')
literals=[]
for i,code in enumerate(fragment.select('pre code')):
 value=code.get_text();key=f'LIBX_COMMONMARK_LITERAL_CODE_{i:05d}_END';literals.append((key,html.escape(value,quote=False).replace('\n','&#10;').replace('\t','&#9;')));code.clear();code.append(key)
content=str(fragment)
for key,value in literals:assert content.count(key)==1;content=content.replace(key,value)
md='<div class="commonmark-original-content">\n'+content+'\n</div>\n';(P/'first-four-chapters.md').write_text(md);(P/'EXAMPLE_EXPECTATIONS.json').write_text(json.dumps(rows,indent=2)+'\n');print('PrototypeEN first4complete chapters/227literalinput-outputpairs;noJapanese translation ormeaningreviewclaim')
