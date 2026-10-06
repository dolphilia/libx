from pathlib import Path
from bs4 import BeautifulSoup
from translation_nodes import selected_nodes
import json,hashlib,html,re,collections
N=Path(__file__).resolve().parent;h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();rows=[]
for tf in sorted((N/'translations').glob('*-ja.json')):
 data=json.loads(tf.read_text());slug=data['slug'];u=json.loads((N/'translations'/(slug+'-units.json')).read_text());source=N/'drafts/en'/(slug+'.body.html');assert h(source)==u['bodySHA256']==data['sourceBodySHA256'];s=BeautifulSoup(source.read_text(),'html.parser');nodes=selected_nodes(s);ja=data['translations'];assert len(nodes)==len(u['units'])==len(ja);pre=[x.get_text()for x in s.select('pre')];attrs=[(x.get('id'),x.get('href'))for x in s.select('[id],[href]')]
 for node,unit,line in zip(nodes,u['units'],ja):
  assert str(node)==unit['sourceHTML'];assert collections.Counter(re.findall('⟦[0-9]+⟧',line))==collections.Counter(unit['tokens'].keys());value=html.escape(line)
  for k,v in unit['tokens'].items():value=value.replace(k,v)
  inner=BeautifulSoup(value,'html.parser');node.clear()
  for child in list(inner.contents):node.append(child)
 assert [x.get_text()for x in s.select('pre')]==pre;assert [(x.get('id'),x.get('href'))for x in s.select('[id],[href]')]==attrs
 f=N/'drafts/ja'/(slug+'.body.html');f.parent.mkdir(exist_ok=True);f.write_text(str(s)+'\n');rows.append({'slug':slug,'units':len(ja),'EnglishSHA256':h(source),'JapaneseSHA256':h(f),'translationInputSHA256':h(tf),'preExact':len(pre),'review':'pending'})
(N/'DRAFT_BINDING.json').write_text(json.dumps({'status':'saved-unreviewed','pages':rows,'totalUnits':sum(x['units']for x in rows),'meaningApproval':False},indent=2)+'\n');print('Rendered saved Japanese drafts:',len(rows),'units:',sum(x['units']for x in rows))
