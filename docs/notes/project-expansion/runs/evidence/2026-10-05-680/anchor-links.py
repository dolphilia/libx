from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit,unquote
import json,hashlib,posixpath
root=Path('/private/tmp/libx-libuv-normalized-679/generated/html');prepared=Path('/private/tmp/libx-libuv-body-prepared-680');prepared.mkdir();out=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-680');sources=Path('/private/tmp/libx-libuv-screening-676/source/docs/src');bodies={};fixes=[];sha=lambda b:hashlib.sha256(b).hexdigest()
for rst in sources.rglob('*.rst'):
 rel=rst.relative_to(sources).with_suffix('.html').as_posix();html=root/rel;body=BeautifulSoup(html.read_text(),'html.parser').find('article',role='main');original=str(body)
 if rel=='dns.html':
  for field in ['host','service']:
   signature='uv_getnameinfo_t.'+field;nodes=[x for x in body.select('dt.sig') if signature in x.get_text()];assert len(nodes)==1;node=nodes[0];assert not node.get('id');node['id']='c.'+signature;fixes.append({'page':rel,'originalSignature':node.get_text(' '),'addedId':node['id'],'reason':'原配列宣言字面は保持し、固定Cdomain生成器が解析失敗した2memberの参照anchorのみ補完。原RST/生成originalは無改変、Libxfooter注記必要。'})
  restored=BeautifulSoup(str(body),'html.parser').find('article',role='main')
  for f in fixes:restored.find(id=f['addedId']).attrs.pop('id')
  assert str(restored)==original
 target=prepared/rel;target.parent.mkdir(parents=True,exist_ok=True);target.write_text(str(body));bodies[rel]=body
errors=[];links=0;assets=[]
for page,body in bodies.items():
 for a in body.select('a[href]'):
  u=urlsplit(a['href'])
  if u.scheme or u.netloc:continue
  links+=1;target=posixpath.normpath(posixpath.join(posixpath.dirname(page),unquote(u.path))) if u.path else page
  if target in bodies:
   if u.fragment and not bodies[target].find(id=unquote(u.fragment)):errors.append({'page':page,'href':a['href'],'reason':'missing body anchor'})
  elif not(root/target).is_file():errors.append({'page':page,'href':a['href'],'reason':'missing generated target'})
 for img in body.select('img[src]'):
  target=posixpath.normpath(posixpath.join(posixpath.dirname(page),img['src']));p=root/target;assert p.is_file();assets.append({'page':page,'path':target,'sha256':sha(p.read_bytes())})
(out/'ANCHOR_AND_LINK_CHECK.json').write_text(json.dumps({'status':'prepared-bodies-static-reference-check','bodyPages':len(bodies),'addedAnchors':fixes,'localLinks':links,'errors':errors,'bodyImages':assets,'preparedDirectory':str(prepared),'limitations':['Not an Astro build or native display check.','Original unresolved Sphinx role references which became plain text require separate directive inventory.','Seven generator warnings remain documented; exact61code slices verified separately.'],'outputs':[{'page':p,'sha256':sha(str(b).encode())} for p,b in sorted(bodies.items())]},ensure_ascii=False,indent=2)+'\n');print('bodies',len(bodies),'links',links,'errors',len(errors),'images',len(assets));print(errors[:8])
