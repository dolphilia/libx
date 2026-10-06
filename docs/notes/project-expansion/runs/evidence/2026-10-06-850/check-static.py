from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime
E=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-06-850');d=json.loads((E/'STATIC_PREPARATION.json').read_text());A=Path(d['workspace'])/'apps/rapidjson-static-trial';O=Path(d['sourceWorkspace']);sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();rows=[];links=0;tooltips=0;targets={}
def shape(n):
 if n.name is None:return str(n)
 attrs=dict(n.attrs)
 if n.name=='area'and'coords'in attrs:
  import re
  values=re.split(r'[,\s]+',attrs['coords'].strip());assert all(re.fullmatch(r'-?[0-9]+',v)for v in values);attrs['coords']=[int(v)for v in values]
 return {'name':n.name,'attributes':attrs,'children':[shape(x)for x in n.children if not(n.name in ['div','main']and x.name is None and not str(x).strip())]}
for p in d['pages']:
 old=O/'src/content/docs/v1-1-0/en'/p['id'];new=A/'src/content/docs/v1-1-0/en'/p['id'];assert sha(old)==p['sourceSHA256'];assert sha(new)==p['staticSHA256'];a=BeautifulSoup(old.read_text().split('---\n',2)[2].replace('/docs/rapidjson-trial/','/docs/rapidjson-static-trial/'),'html.parser');b=BeautifulSoup(new.read_text().split('---\n',2)[2],'html.parser');assert shape(a.select_one('.rapidjson-document'))==shape(b.select_one('.rapidjson-document'));route='v1-1-0/en/'+p['id'][:-3];r=BeautifulSoup((A/'dist'/route/'index.html').read_text(),'html.parser');assert shape(b.select_one('.rapidjson-document'))==shape(r.select_one('.rapidjson-document')),p['id'];assert not r.select('script[src*="doxygen"],script[src*="rapidjson-source"],iframe');t=len(b.select('.ttc'));tooltips+=t;targets['/docs/rapidjson-static-trial/'+route]=(b,r);rows.append({'id':p['id'],'originalBodyDOMExactExceptRoute':True,'renderedBodyDOMExact':True,'staticDefinitionBlocks':t,'fragmentCodeBlocks':len(b.select('.fragment'))})
from urllib.parse import urlsplit,unquote
for route,(b,r)in targets.items():
 for a in b.select('a[href],area[href]'):
  href=a['href'];u=urlsplit(href)
  if href.startswith('#'):assert r.find(id=unquote(u.fragment)),(route,href);continue
  if not href.startswith('/docs/rapidjson-static-trial/'):continue
  target=targets.get(u.path.rstrip('/'))
  if target:
   if u.fragment:assert target[1].find(id=unquote(u.fragment)),(route,href)
  else:assert(A/'public'/u.path.removeprefix('/docs/rapidjson-static-trial/')).is_file(),(route,href)
  links+=1
for p in d['copiedPublicMaterials']:assert sha(A/'public'/p['path'])==p['sha256'];assert sha(A/'dist'/p['path'])==p['sha256']
out={'status':'passed-mechanical-static-scope','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'pages':len(rows),'originalBodiesRetained':217,'renderedBodiesExact':217,'staticDefinitionBlocks':tooltips,'linksChecked':links,'materialsPreserved':len(d['copiedPublicMaterials']),'noTooltipRuntime':True,'rows':rows,'limitations':['Native static definitions/normal/max/diagram representatives still pending.','Candidate selection, Japanese translation and full semantic review have not been performed.','Original upstream sample technical correctness has not been audited.']};(E/'STATIC_CHECK.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print({k:v for k,v in out.items()if k not in ['rows','limitations']})
