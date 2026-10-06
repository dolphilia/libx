from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,re,hashlib,html,shutil
from translation_nodes import selected_nodes
N=Path(__file__).resolve().parent;W=N.parents[4];A=W/'apps/gnu-grep';D=N/'translations';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
headfile=A/'src/data/document-headings.json';heads=json.loads(headfile.read_text());saved=[];review=json.loads((N/'REVIEW_MANIFEST.json').read_text()) if (N/'REVIEW_MANIFEST.json').exists() else {'pages':[]};approved={r['id']:r for r in review['pages'] if r['status']=='passed'}
for tf in sorted(D.glob('*-ja.json')):
 slug=tf.name.removesuffix('-ja.json');u=json.loads((D/(slug+'-units.json')).read_text());translations=json.loads(tf.read_text());source=N/'drafts/en'/(slug+'.body.html');assert h(source)==u['bodySHA256'];s=BeautifulSoup(source.read_text(),'html.parser');nodes=selected_nodes(s);assert len(nodes)==len(translations)==len(u['units'])
 originalpre=[p.get_text() for p in s.select('pre')];originalCodeMasks=[]
 for pre in s.select('pre'):
  mask=BeautifulSoup(str(pre),'html.parser')
  for explanation in mask.select('.gnu-grep-comment-prose'):explanation.clear()
  originalCodeMasks.append(mask.get_text())
 for node,unit,translated in zip(nodes,u['units'],translations):
  assert str(node)==unit['sourceHTML'];assert sorted(re.findall('⟦[0-9]+⟧',translated))==sorted(unit['tokens']),(slug,unit['index'],'token mismatch')
  value=html.escape(translated)
  for key,literal in unit['tokens'].items():value=value.replace(key,literal)
  inner=BeautifulSoup(value,'html.parser');node.clear()
  for child in list(inner.contents):node.append(child)
 for link in s.select('a[href]'):link['href']=link['href'].replace('/v3-12/en/01-guide/','/v3-12/ja/01-guide/')
 annotated=sum(bool(p.select('.gnu-grep-comment-prose')) for p in s.select('pre'))
 for index,pre in enumerate(s.select('pre')):
  mask=BeautifulSoup(str(pre),'html.parser')
  for explanation in mask.select('.gnu-grep-comment-prose'):explanation.clear()
  assert mask.get_text()==originalCodeMasks[index]
 title=nodes[0].get_text().strip();title=re.sub(r'^\d+(?:\.\d+)*\s+','',title)
 route='01-guide/'+slug+'.md';en=(N/'canonical/en'/route).read_text();_,front,body=en.split('---',2);lines=front.strip().splitlines();front='\n'.join(('title: '+json.dumps(title,ensure_ascii=False)) if l.startswith('title:') else ('description: '+json.dumps('GNU grep3.12の第1〜4章全文。固定原文に対するLibxの独立・非公式日本語訳。',ensure_ascii=False)) if l.startswith('description:') else l for l in lines)
 heads['v3-12/ja/'+route.removesuffix('.md')]=[{'depth':int(x.name[1]),'slug':x['id'],'text':re.sub(r'\s+',' ',x.get_text()).strip()} for x in s.find_all(re.compile('^h[1-6]$')) if x.has_attr('id')]
 placeholders={}
 for i,pre in enumerate(s.select('pre')):
  key='LIBX_GREP_JA_PRE_'+str(i)+'_END';placeholders[key]='<pre class="gnu-grep-literal">'+''.join(str(c) for c in pre.contents).replace('\n','&#10;').replace('\t','&#9;')+'</pre>';pre.replace_with(NavigableString(key))
 fragment=str(s)
 for key,value in placeholders.items():fragment=fragment.replace(key,value)
 page='---\n'+front+'\n---\n\n'+fragment+'\n'
 for base in [N/'drafts/ja',A/'src/content/docs/v3-12/ja',A/'public/source/v3-12/edited/ja']:
  dest=base/route;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(page)
 prior=approved.get(route);reviewStatus='passed' if prior and prior['translation']['sha256']==h(N/'drafts/ja'/route) else 'pending'
 saved.append({'id':route,'units':len(nodes),'ENBodySHA256':h(source),'unitsSHA256':h(D/(slug+'-units.json')),'translationSHA256':h(tf),'draftSHA256':h(N/'drafts/ja'/route),'review':reviewStatus,'preVerbatim':len(originalpre)-annotated,'preWithTranslatedExplanation':annotated})
headfile.write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n');(D/'SAVED_DRAFTS.json').write_text(json.dumps({'status':'saved-partial-reviewed' if any(r['review']=='passed' for r in saved) else 'saved-unreviewed','pages':saved,'completedReviews':sum(r['review']=='passed' for r in saved),'pendingReviews':sum(r['review']!='passed' for r in saved),'meaningReview':'Only existing separate whole meaning reviews with exact draft SHA are reused; mechanical preservation grants no new meaning approval.'},ensure_ascii=False,indent=2)+'\n')
print('JA草稿保存',len(saved),'ページ。既存全文レビュー再利用',sum(r['review']=='passed' for r in saved),'ページ、未確認',sum(r['review']!='passed' for r in saved),'ページ。')
