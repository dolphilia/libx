from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import copy,json,re,hashlib,shutil,datetime
E=Path(__file__).parent;T=Path('/private/tmp/libx-gnu-sed-trial-896');T.mkdir(exist_ok=True)
source=E/'sed-4.10-derived.html';s=BeautifulSoup(source.read_text(),'html.parser')
chapters=['Introduction','Invoking-sed','sed-scripts']
specs=[('01-introduction','Introduction'),('02-overview','Overview'),('03-command-line-options','Command_002dLine-Options'),('04-exit-status','Exit-status'),('05-script-overview','sed-script-overview'),('06-command-summary','sed-commands-list'),('07-substitution','The-_0022s_0022-Command'),('08-often-used-commands','Common-Commands'),('09-less-frequent-commands','Other-Commands'),('10-guru-commands','Programming-Commands'),('11-gnu-commands','Extended-Commands'),('12-multiple-commands','Multiple-commands-syntax')]
rows=[];nodes=[]
for slug,id in specs:
 node=s.new_tag('div');node['class']='gnu-sed-original-content'
 if id in ['Overview','sed-script-overview']:
  parent=s.find(id='Invoking-sed' if id=='Overview' else 'sed-scripts')
  for child in parent.children:
   if getattr(child,'name',None)=='div' and 'section-level-extent' in child.get('class',[]):break
   node.append(copy.deepcopy(child))
 node.append(copy.deepcopy(s.find(id=id)))
 for a in node.select('a.copiable-link'):assert a.get_text()==' ¶';a.decompose()
 nodes.append(node);rows.append({'slug':slug,'sourceNode':id,'sourcePre':[p.get_text() for p in node.select('pre')]})
norm=lambda x:re.sub(r'\s+',' ',x).strip()
assert norm(' '.join(s.find(id=c).get_text().replace(' ¶','') for c in chapters))==norm(' '.join(n.get_text() for n in nodes))
owners={}
for row,node in zip(rows,nodes):
 for x in node.select('[id]'):
  assert x['id'] not in owners,x['id'];owners[x['id']]=row['slug']
notice=s.find(id='Top');copying=''.join(str(p) for p in notice.find_all(['p','blockquote'],recursive=False))
fdl=s.find(id='GNU-Free-Documentation-License');assert fdl
for row,node in zip(rows,nodes):
 foot=[]
 for a in list(node.select('a[href^="#FOOT"]')):
  id=a['href'][1:];n=s.find(id=id);assert n and n.parent.name=='h5'
  box=s.new_tag('div');box['class']='gnu-source-footnote';box.append(copy.deepcopy(n.parent));box.append(copy.deepcopy(n.parent.find_next_sibling()));node.append(box);foot.append(id);owners[id]=row['slug']
 row['footnotes']=foot
for row,node in zip(rows,nodes):
 for a in node.select('a[href^="#"]'):
  id=a['href'][1:];assert s.find(id=id),id
  a['href']=(owners[id]+'.html#'+id) if id in owners else ('sed-4.10-derived.html#'+id)
 conversion=copy.deepcopy(node);tokens={}
 for i,pre in enumerate(conversion.select('pre')):
  token='LIBX_SED_PRE_'+str(i)+'_END'
  literal=''.join(str(child) for child in pre.contents).replace('\n','&#10;').replace('\t','&#9;')
  tokens[token]='<pre class="gnu-sed-literal">'+literal+'</pre>'
  pre.replace_with(NavigableString(token))
 fragment=str(conversion)
 for token,literal in tokens.items():fragment=fragment.replace(token,literal)
 md='# GNU sed 4.10 — '+row['slug']+'\n\n'+fragment+'\n'
 (T/(row['slug']+'.md')).write_text(md)
 row.update(markdownSHA256=hashlib.sha256(md.encode()).hexdigest(),sourceText=norm(node.get_text()),sourceHeadings=[{'id':h.get('id'),'text':norm(h.get_text())} for h in node.find_all(re.compile('^h[1-6]$'))],pre=len(row['sourcePre']))
footer='<footer><h2>Source and local conversion trial</h2><p>Local representative trial; no adoption, translation or publication claim. Libx modified static presentation of complete GNU sed 4.10 chapters1–3. Original authors: Ken Pizzini, Paolo Bonzini, Jim Meyering, Assaf Gordon. Modification author and publisher: Libx. Copyright © 2026 Libx for editing. GFDL1.3-or-later, no invariant sections or cover texts. Manual revision20April2026; acquired6October2026.</p>'+copying+'<h3>History</h3><p>Original GNU sed, a stream editor, version4.10, authors named above, publisher Free Software Foundation. 2026: Libx GNU sed 4.10 chapters1–3 static conversion trial, modified by Libx. No original software execution. <a href="sed-4.10-derived.html">Fixed complete original manual</a>; <a href="https://www.gnu.org/software/sed/manual/">Official original</a>.</p><details><summary>Original English GFDL</summary>'+str(fdl)+'</details></footer>'
(T/'footer.html').write_text(footer);shutil.copyfile(source,T/source.name)
css=Path('/private/tmp/libx-commonmark-production-artifact-891/dist/docs/gnu-make/assets/style.B5RG3mW8.css');shutil.copyfile(css,T/'libx-published.css')
(T/'INPUTS.json').write_text(json.dumps({'status':'draft-representative-content-trial','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'chapters1to3CompleteTextBeforeFootnoteClosure':True,'pre':sum(r['pre'] for r in rows),'footnotes':sum(len(r['footnotes']) for r in rows),'cssSHA256':hashlib.sha256(css.read_bytes()).hexdigest(),'sourceHTMLSHA256':hashlib.sha256(source.read_bytes()).hexdigest(),'pages':rows},ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'pages':len(rows),'pre':sum(r['pre'] for r in rows),'footnotes':sum(len(r['footnotes']) for r in rows),'scope':'Raw HTML inside editable Markdown, matching existing PCRE2 approach; no original software execution/full review/selection claim.'}))
