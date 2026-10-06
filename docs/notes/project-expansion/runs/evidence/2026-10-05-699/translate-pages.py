from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,hashlib,datetime
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-699';app=Path('/private/tmp/libx-libuv-formal-689/apps/libuv');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
translations={slug:json.loads((ev/'translation-map.json').read_text()) for slug in ['timer','threadpool']}
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
   if paragraph.startswith('Type definition for callback passed to '):translated='に渡すコールバックの型定義です。'
   elif paragraph.startswith('Libuv updates'):translated='も参照してください。'
   elif paragraph.startswith('Get the timer due value'):translated='を基準にした相対値です。'
   elif paragraph.startswith('Callback passed to '):translated='になります。'
   elif paragraph.startswith('This request can be cancelled'):translated='でキャンセルできます。'
   else:raise AssertionError((slug,paragraph))
  if slug=='threadpool' and t=='status':
   preceding=n.parent.previous_sibling;assert isinstance(preceding,NavigableString) and not str(preceding).strip()
   preceding.replace_with('を使って作業がキャンセルされた場合、')
  n.replace_with(translated);nodePairs.append({'en':t,'ja':translated})
 for a in soup.select('.headerlink'):
  if a.get('title')=='Permalink to this heading':a['title']='この見出しへの固定リンク'
  elif a.get('title')=='Permalink to this definition':a['title']='この定義への固定リンク'
 # Source metadata stays in footer, preserving all original notices and editable RST.
 jaApi=(packet/'translation/ja/reference/api.md').read_text().split('---\n',2)[1];ctxline=next(l for l in jaApi.splitlines() if l.startswith('documentContext: '));ctxline=ctxline.replace('/api.rst','/'+slug+'.rst');line=next(l for l in head.splitlines() if l.startswith('documentContext: '));head=head.replace(line,ctxline)
 title={'timer':'uv_timer_t — タイマーハンドル','threadpool':'スレッドプールの作業スケジューリング'}[slug];head='\n'.join(('title: '+json.dumps(title,ensure_ascii=False)) if l.startswith('title: ') else l for l in head.splitlines())+'\n'
 rendered=str(soup).replace('*','&#42;').replace('_','&#95;').replace('`','&#96;').replace('\\','&#92;').replace('\n','&#10;');dest=packet/('translation/ja/reference/'+slug+'.md');dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text('---\n'+head+'---\n\n'+rendered+'\n');target=app/('src/content/docs/v1-53-0/ja/reference/'+slug+'.md');target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(dest.read_bytes())
 # Verify alignment before processing next page: exact API signatures/code/links/ids and every narrative node mapped.
 assert [str(x) for x in original.select('dt.sig')]==[str(x).replace('この定義への固定リンク','Permalink to this definition') for x in soup.select('dt.sig')]
 assert [str(x) for x in original.select('pre')]==[str(x) for x in soup.select('pre')]
 assert [x.get('href') for x in original.select('a')]==[x.get('href') for x in soup.select('a')]
 assert [x['id'] for x in original.select('[id]')]==[x['id'] for x in soup.select('[id]')]
 refs=[{'path':str(p.relative_to(root)),'sha256':sha(p)} for p in [packet/('sources/docs/src/'+slug+'.rst'),src,dest]]
 (ev/('TRANSLATION_'+slug.upper()+'.json')).write_text(json.dumps({'page':'reference/'+slug,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'inputs':refs,'fullPageDraft':True,'scope':'entire title/body/headings/all descriptions/version notes/admonitions/labels/footer','nodePairs':nodePairs,'alignment':{'allNarrativeNodesMapped':True,'apiDeclarationsExact':len(soup.select('dt.sig')),'preBlocksExact':len(soup.select('pre')),'idsAndLinksExact':True},'separateContentReview':'pending','projectTranslationComplete':False,'model':{'configured':'gpt-6.1-sol','runtime':None,'localLLMUsed':False}},ensure_ascii=False,indent=2)+'\n')
 print(slug,len(nodePairs),'narrative nodes; full-page draft/alignment saved; separate review pending')
