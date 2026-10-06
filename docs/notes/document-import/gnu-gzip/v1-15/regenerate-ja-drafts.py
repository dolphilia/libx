"""Rebuild unreviewed candidate body drafts; canonical and application updated separately by adopt-canonical.py."""
from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,re,hashlib,html,sys
from translation_nodes import selected_nodes
N=Path(__file__).resolve().parent;D=N/'translations';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();saved=[]
for tf in sorted(D.glob('*-ja.json')):
 if len(sys.argv)>1 and tf.name.removesuffix('-ja.json') not in sys.argv[1:]:continue
 slug=tf.name.removesuffix('-ja.json');u=json.loads((D/(slug+'-units.json')).read_text());translations=json.loads(tf.read_text());source=N/'drafts/en'/(slug+'.body.html');assert h(source)==u['bodySHA256'];s=BeautifulSoup(source.read_text(),'html.parser');nodes=selected_nodes(s);assert len(nodes)==len(translations)==len(u['units'])
 originalpre=[p.get_text()for p in s.select('pre')]
 for node,unit,translated in zip(nodes,u['units'],translations):
  assert str(node)==unit['sourceHTML'];assert sorted(re.findall('⟦[0-9]+⟧',translated))==sorted(unit['tokens']),(slug,unit['index'])
  value=html.escape(translated)
  for key,literal in unit['tokens'].items():value=value.replace(key,literal)
  inner=BeautifulSoup(value,'html.parser');node.clear()
  for child in list(inner.contents):node.append(child)
 for link in s.select('a[href]'):link['href']=link['href'].replace('/v1-15/en/01-guide/','/v1-15/ja/01-guide/')
 assert [p.get_text()for p in s.select('pre')]==originalpre
 placeholders={}
 for i,pre in enumerate(s.select('pre')):
  key=f'LIBX_GZIP_DRAFT_PRE_{i}_END';placeholders[key]=str(pre).replace('\n','&#10;').replace('\t','&#9;');pre.replace_with(NavigableString(key))
 fragment=str(s)
 for key,value in placeholders.items():fragment=fragment.replace(key,value)
 p=N/'drafts/ja'/(slug+'.body.html');p.parent.mkdir(parents=True,exist_ok=True);p.write_text(fragment+'\n')
 saved.append({'slug':slug,'units':len(nodes),'ENBodySHA256':h(source),'unitsSHA256':h(D/(slug+'-units.json')),'translationSHA256':h(tf),'draftSHA256':h(p),'meaningReview':'pending','preVerbatim':len(originalpre)})
(D/'REGENERATED_DRAFTS.json').write_text(json.dumps({'status':'saved-unreviewed-candidate-body-delta','pages':saved,'completedReviews':0,'pendingReviews':len(saved),'formalOperation':False,'limits':'Mechanical token/pre preservation grants no whole meaning approval. Formal application, canonical adoption and separate whole reviews pending.'},ensure_ascii=False,indent=2)+'\n')
print('JA body drafts',len(saved),'saved;wholemeaningreview0')
