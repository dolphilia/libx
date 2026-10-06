from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,hashlib,datetime,sys
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-701';app=Path('/private/tmp/libx-libuv-formal-689/apps/libuv');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
sys.path.insert(0,str(packet));from html_preservation import serialize_article
translations={slug:json.loads((ev/'translation-map.json').read_text()) for slug in ['loop']}
for slug,mapping in translations.items():
 src=packet/('canonical/en/reference/'+slug+'.md');head,body=src.read_text().split('---\n',2)[1:];soup=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');original=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');nodePairs=[]
 paragraphOriginal={id(p):p.get_text() for p in soup.select('p')}
 for n in list(soup.select_one('article').descendants):
  if not isinstance(n,NavigableString) or not str(n).strip() or (n.find_parent(['code','pre']) or n.find_parent('dt',class_='sig')):continue
  t=str(n)
  if t=='¶':continue
  assert t in mapping,(slug,t)
  translated=mapping[t]
  if t=='.':
   paragraph=paragraphOriginal[id(n.find_parent('p'))]
   if paragraph.startswith('Additional loop options'):translated='を参照してください。'
   elif paragraph.startswith('Mode used to run'):translated='でイベントループを実行する際のモード。'
   elif paragraph.startswith('Type definition for callback'):translated='に渡すコールバックの型定義です。'
   elif paragraph.startswith('This option is necessary'):translated='を使うために必要です。'
   elif paragraph.startswith('Walk the list'):translated='を渡して実行します。'
   elif paragraph.startswith('This function is not implemented'):translated='を返します。'
   elif paragraph.startswith('Returns '):translated='です。'
   elif paragraph.startswith('Sets '):translated='に設定します。'
   else:raise AssertionError((slug,paragraph))
  n.replace_with(translated);nodePairs.append({'en':t,'ja':translated})
 for a in soup.select('.headerlink'):
  if a.get('title')=='Permalink to this heading':a['title']='この見出しへの固定リンク'
  elif a.get('title')=='Permalink to this definition':a['title']='この定義への固定リンク'
 # Source metadata stays in footer, preserving all original notices and editable RST.
 jaApi=(packet/'translation/ja/reference/api.md').read_text().split('---\n',2)[1];ctxline=next(l for l in jaApi.splitlines() if l.startswith('documentContext: '));ctxline=ctxline.replace('/api.rst','/'+slug+'.rst');line=next(l for l in head.splitlines() if l.startswith('documentContext: '));head=head.replace(line,ctxline)
 title='uv_loop_t — イベントループ';head='\n'.join(('title: '+json.dumps(title,ensure_ascii=False)) if l.startswith('title: ') else l for l in head.splitlines())+'\n'
 rendered=serialize_article(soup.select_one('article.libuv-document'),body)
 dest=packet/('translation/ja/reference/'+slug+'.md');dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text('---\n'+head+'---\n\n'+rendered+'\n');target=app/('src/content/docs/v1-53-0/ja/reference/'+slug+'.md');target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(dest.read_bytes())
 # Verify alignment before processing next page: exact API signatures/code/links/ids and every narrative node mapped.
 assert [str(x) for x in original.select('dt.sig')]==[str(x).replace('この定義への固定リンク','Permalink to this definition') for x in soup.select('dt.sig')]
 assert [str(x) for x in original.select('pre')]==[str(x) for x in soup.select('pre')]
 assert [x.get('href') for x in original.select('a')]==[x.get('href') for x in soup.select('a')]
 assert [x['id'] for x in original.select('[id]')]==[x['id'] for x in soup.select('[id]')]
 refs=[{'path':str(p.relative_to(root)),'sha256':sha(p)} for p in [packet/('sources/docs/src/'+slug+'.rst'),src,dest]]
 (ev/('TRANSLATION_'+slug.upper()+'.json')).write_text(json.dumps({'page':'reference/'+slug,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'inputs':refs,'fullPageDraft':True,'scope':'entire title/body/headings/all descriptions/version notes/admonitions/labels/footer','nodePairs':nodePairs,'alignment':{'allNarrativeNodesMapped':True,'apiDeclarationsExact':len(soup.select('dt.sig')),'preBlocksExact':len(soup.select('pre')),'idsAndLinksExact':True},'serializationPolicy':'html_preservation.py: actual article starts raw HTML block; original canonical pre HTML copied exactly; rendered DOM/code whitespace separately verified','separateContentReview':'pending','projectTranslationComplete':False,'model':{'configured':'gpt-6.1-sol','runtime':None,'localLLMUsed':False}},ensure_ascii=False,indent=2)+'\n')
 print(slug,len(nodePairs),'narrative nodes; full-page draft/alignment saved; separate review pending')
