from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import copy,json,hashlib,re,shutil,datetime,sys
N=Path(__file__).resolve().parent;P=N.parents[1];sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();source=P/'source/derived/manual.html';old=json.loads((P/'CONTENT_MAP.json').read_text());assert sha(source)==old['manualGeneratedSHA256'];s=BeautifulSoup(source.read_bytes(),'html.parser');chapters=s.select('h2.chapter')[3:4];nodes=[];rows=[];count=13
for h in chapters:
 for div in [h.parent]+h.parent.select('div.section-level-extent,div.subsection-level-extent'):
  node=copy.deepcopy(div)
  for child in list(node.children):
   if getattr(child,'name',None)=='div'and any(x.endswith('-level-extent')for x in child.get('class',[])):child.decompose()
  for a in node.select('a.copiable-link'):assert a.get_text()==' ¶';a.decompose()
  node['class']='gnu-sed-original-content';heading=node.find(['h2','h3','h4']);slug=f'{count:02}-'+div['id'].lower();count+=1;nodes.append(node);rows.append({'slug':slug,'sourceNode':div['id'],'heading':heading.get_text(' ',strip=True),'pre':len(node.select('pre'))})
norm=lambda s:re.sub(r'\s+',' ',s).strip();assert norm(' '.join(h.parent.get_text().replace(' ¶','')for h in chapters))==norm(' '.join(n.get_text()for n in nodes))
for row,node in zip(rows,nodes):
 foot=[]
 for a in list(node.select('a[href^="#FOOT"]')):
  ident=a['href'][1:];h=s.find(id=ident).parent;assert h.name=='h5'
  box=s.new_tag('div');box['class']='gnu-source-footnote';box.append(copy.deepcopy(h))
  for sibling in h.next_siblings:
   if getattr(sibling,'name',None)=='h5':break
   box.append(copy.deepcopy(sibling))
  node.append(box);foot.append(ident)
 row['footnotes']=foot;row['pre']=len(node.select('pre'))
 f=N/'drafts/en'/(row['slug']+'.body.html');f.parent.mkdir(parents=True,exist_ok=True);f.write_text(str(node)+'\n');row['bodySHA256']=sha(f)
# Local extractor includes bare list-item prose.
plan={'schemaVersion':1,'state':'draft-preparation','existingProject':'gnu-sed','version':'4.10','scope':'Complete chapter4 including all subsection order and fixed examples','source':{'path':str(source),'sha256':sha(source)},'existing12GuidePagesUnchanged':True,'completeScopeTextExact':True,'pages':rows,'words':sum(len(h.parent.get_text().split())for h in chapters),'pre':sum(r['pre']for r in rows),'Japanese':0,'reviewed':0,'deployment':'excluded','at':datetime.datetime.now(datetime.timezone.utc).isoformat()};(N/'PAGE_PLAN.json').write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in plan.items()if k!='pages'}))
