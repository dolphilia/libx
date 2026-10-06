from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,hashlib,datetime,sys
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-705';app=Path('/private/tmp/libx-libuv-formal-689/apps/libuv');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
sys.path.insert(0,str(packet));from html_preservation import serialize_article
translations={slug:json.loads((ev/'translation-map.json').read_text()) for slug in ['guide/basics']}
for slug,mapping in translations.items():
 originalRst='guide/basics.rst'
 src=packet/('canonical/en/'+slug+'.md');head,body=src.read_text().split('---\n',2)[1:];soup=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');original=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');nodePairs=[]
 paragraphOriginal={id(p):p.get_text() for p in soup.select('p')}
 for n in list(soup.select_one('article').descendants):
  if not isinstance(n,NavigableString) or not str(n).strip() or (n.find_parent(['code','pre']) or n.find_parent('dt',class_='sig')):continue
  t=str(n)
  if t=='¶':continue
  assert t in mapping,(slug,t)
  translated=mapping[t]
  if t=='.':
   paragraph=paragraphOriginal[id(n.find_parent('p'))]
   if paragraph.startswith('libuv’s event loop is explained'):translated='で、より詳しく説明しています。'
   elif paragraph.startswith('Initialization functions or synchronous'):translated='として定義されています。'
  n.replace_with(translated);nodePairs.append({'en':t,'ja':translated})
 for a in soup.select('.headerlink'):
  if a.get('title')=='Permalink to this heading':a['title']='この見出しへの固定リンク'
  elif a.get('title')=='Permalink to this definition':a['title']='この定義への固定リンク'
 # Source metadata stays in footer, preserving all original notices and editable RST.
 jaApi=(packet/'translation/ja/reference/api.md').read_text().split('---\n',2)[1];ctxline=next(l for l in jaApi.splitlines() if l.startswith('documentContext: '));ctxline=ctxline.replace('/api.rst','/'+originalRst);contexts=json.loads(ctxline.split(': ',1)[1]);contexts.append({'kind':'editorial','html':'<p>固定リリースに含まれるガイドは、本書と例がv1.42.0を基にしており、執筆途中で、十分なレビューを受けていないと説明しています。これらの原文の記述は保持しています。すべてのガイドの例が1.53.0向けに更新されたとするものではありません。</p>'});contexts[-1]['html']+='<p>固定ガイドのループの終了処理についてのLibx編集注記: 本文には例でループを閉じないとありますが、掲載された3例はすべて<code>uv_loop_close</code>を呼び出しています。固定原文の<a href="/docs/libuv/source/v1-53-0/docs/code/helloworld/main.c">helloworld</a>、<a href="/docs/libuv/source/v1-53-0/docs/code/default-loop/main.c">default-loop</a>、<a href="/docs/libuv/source/v1-53-0/docs/code/idle-basic/main.c">idle-basic</a>を参照してください。本文とコードは原文のまま保持し、この注記で両者の不整合を示しています。</p>';contexts[-1]['html']+='<p>原文の外部YouTube動画は、元のyoutube-nocookie URLを通じて埋め込んでいます。Libxは動画を複製したり、CC BY 4.0として再許諾したりしていません。提供状況は配信元に従います。<a href="https://www.youtube.com/watch?v=nGn60vDSxQ4">LXJS2012 Bert Belder libuv</a>。埋め込み動画は外部の補助資料です。</p>';ctxline='documentContext: '+json.dumps(contexts,ensure_ascii=False);line=next(l for l in head.splitlines() if l.startswith('documentContext: '));head=head.replace(line,ctxline)
 title='libuvの基礎';head='\n'.join(('title: '+json.dumps(title,ensure_ascii=False)) if l.startswith('title: ') else l for l in head.splitlines())+'\n'
 rendered=serialize_article(soup.select_one('article.libuv-document'),body)
 dest=packet/('translation/ja/'+slug+'.md');dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text('---\n'+head+'---\n\n'+rendered+'\n');target=app/('src/content/docs/v1-53-0/ja/'+slug+'.md');target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(dest.read_bytes())
 # Verify alignment before processing next page: exact API signatures/code/links/ids and every narrative node mapped.
 assert [str(x) for x in original.select('dt.sig')]==[str(x).replace('この定義への固定リンク','Permalink to this definition') for x in soup.select('dt.sig')]
 assert [str(x) for x in original.select('pre')]==[str(x) for x in soup.select('pre')]
 assert [x.get('href') for x in original.select('a')]==[x.get('href') for x in soup.select('a')]
 assert [x['id'] for x in original.select('[id]')]==[x['id'] for x in soup.select('[id]')]
 refs=[{'path':str(p.relative_to(root)),'sha256':sha(p)} for p in [packet/('sources/docs/src/'+originalRst),src,dest]]
 (ev/('TRANSLATION_'+slug.split('/')[-1].upper()+'.json')).write_text(json.dumps({'page':slug,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'inputs':refs,'fullPageDraft':True,'scope':'entire title/body/headings/all descriptions/version notes/admonitions/labels/footer','nodePairs':nodePairs,'alignment':{'allNarrativeNodesMapped':True,'apiDeclarationsExact':len(soup.select('dt.sig')),'preBlocksExact':len(soup.select('pre')),'idsAndLinksExact':True},'serializationPolicy':'html_preservation.py: actual article starts raw HTML block; original canonical pre HTML copied exactly; rendered DOM/code whitespace separately verified','separateContentReview':'pending','projectTranslationComplete':False,'model':{'configured':'gpt-6.1-sol','runtime':None,'localLLMUsed':False}},ensure_ascii=False,indent=2)+'\n')
 print(slug,len(nodePairs),'narrative nodes; full-page draft/alignment saved; separate review pending')
