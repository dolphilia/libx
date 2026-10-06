from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,hashlib,html,urllib.parse,shutil,datetime
N=Path(__file__).resolve().parent;W=N.parents[4];R=W;A=W/'apps/pcre2';S=N/'source/original';M=json.loads((N/'SOURCE_MANIFEST.json').read_text())
for f in M['files']:assert hashlib.sha256((W/f['path']).read_bytes()).hexdigest()==f['sha256']
plan=json.loads((N/'PLANNED_ROUTES.json').read_text())['pages'];manuals=['pcre2','pcre2sample','pcre2matching','pcre2limits','pcre2syntax'];titles=['PCRE2 Overview','Sample Program','Matching Algorithms','Size and Other Limitations','Regular Expression Syntax Summary'];mapping=dict(zip(manuals,plan));existing=json.loads((N/'CONTENT_MAP.json').read_text())if (N/'CONTENT_MAP.json').exists()else {};existingItems={x['slug']:x for x in existing.get('items',[])};base='/docs/pcre2/source/v10-49/html/';rows=[];heads=json.loads((A/'src/data/document-headings.json').read_text())if (A/'src/data/document-headings.json').exists()else {};literalHashes=[]
for folder in [A/'src/content/docs/v1',A/'public/search/v1']:
 if folder.exists():shutil.rmtree(folder)
for folder in [A/'public/sidebar']:
 if folder.exists():
  for f in folder.glob('*-v1.json'):f.unlink()
for m,route,title in zip(manuals,plan,titles):
 raw=(N/f'source/derived-html5/{m}.html').read_text();s=BeautifulSoup(raw,'html.parser');body=s.body;assert body
 h1=body.find('h1');originalTitle=h1.get_text(' ',strip=True);h1.decompose()
 toc=body.find('ul');tocText=[]
 if toc and toc.find('a',attrs={'name':True}):tocText=[x.get_text(' ',strip=True)for x in toc.find_all('a')];toc.decompose()
 notice=[]
 for p in list(body.find_all('p')):
  if not p.parent:continue
  text=p.get_text(' ',strip=True)
  if text.startswith('Return to the')and 'PCRE2 index page' in text:notice.append({'kind':'original-navigation','text':text});p.decompose()
  elif text.startswith('This page is part of the PCRE2 HTML documentation.'):
   # Source HTML can place the TOC inside an unclosed p, but never adopted sections.
   assert not p.find(['h2','pre']);notice.append({'kind':'original-generated-notice','text':text});p.decompose()
 fragment=N/'source-fragments/en'/route.replace('.md','.html');fragment.parent.mkdir(parents=True,exist_ok=True);fragment.write_text(body.decode_contents()+'\n')
 # HTML5 repairs original unclosed p; wrap orphan inline/text runs before Markdown.
 rebuilt=[];run=[]
 def flush_inline():
  if not run:return
  if any(getattr(x,'name',None)or str(x).strip()for x in run):
   paragraph=s.new_tag('p')
   for x in run:paragraph.append(x)
   rebuilt.append(paragraph)
  else:rebuilt.extend(run)
  run.clear()
 for x in list(body.contents):
  if getattr(x,'name',None)in ['h2','p','pre','ul','ol','div','table','blockquote','hr']:
   flush_inline();rebuilt.append(x)
  else:run.append(x)
 flush_inline();body.clear()
 for x in rebuilt:body.append(x)
 for i,h in enumerate(body.find_all('h2'),1):
  anchor=h.find('a',attrs={'name':True});key=anchor.get('name')if anchor else f'SEC{i}';h['id']=key
  if anchor:anchor.unwrap()
 for a in body.find_all('a'):
  if a.get('name')and not a.get('id'):a['id']=a['name']
  href=a.get('href','')
  if href.startswith('#TOC'):a['href']='#SEC'+href.removeprefix('#TOC')
  elif href and not href.startswith(('#','http://','https://','mailto:')):
   u=urllib.parse.urlsplit(href);name=Path(u.path).name;stem=Path(name).stem
   if name.endswith('.html')and stem in mapping:
    a['href']='/docs/pcre2/v10-49/en/'+mapping[stem].removesuffix('.md')+'/'+('#'+u.fragment if u.fragment else '')
   else:a['href']=base+u.path+('#'+u.fragment if u.fragment else '')
 codes=[x.get_text()for x in body.find_all('pre')];headings=[{'depth':2,'slug':h['id'],'text':h.get_text(' ',strip=True)}for h in body.find_all('h2')]
 tokens={}
 for i,pre in enumerate(body.find_all('pre')):
  token=f'LIBX_PCRE2_PRE_{i:05d}_END';tokens[token]='<pre><code>'+html.escape(codes[i],quote=False).replace('\n','&#10;').replace('\t','&#9;')+'</code></pre>';pre.replace_with(NavigableString(token))
 text=body.decode_contents()
 for token,rep in tokens.items():assert text.count(token)==1;text=text.replace(token,rep)
 text='<div class="pcre2-original-content">\n'+text+'\n</div>\n';front='---\ntitle: '+json.dumps(title)+'\ndescription: '+json.dumps('Fixed PCRE2 10.49 original manual, with a paired Japanese translation.')+'\ndocumentId: '+json.dumps('pcre2:10.49:'+m)+'\nlicenseSource: pcre2-manual\n---\n\n';content=front+text
 for dest in [N/'canonical/en'/route,A/'src/content/docs/v10-49/en'/route,A/'public/source/v10-49/edited/en'/route]:dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(content)
 draft=N/'drafts/en'/route;draft.parent.mkdir(parents=True,exist_ok=True);draft.write_text(text)
 heads['v10-49/en/'+route.removesuffix('.md')]=headings;rows.append({'slug':route.removesuffix('.md'),'manual':m,'title':title,'source':'docs/notes/document-import/pcre2/v10-49/source/original/doc/html/'+m+'.html','canonical':'docs/notes/document-import/pcre2/v10-49/canonical/en/'+route,'translation':'docs/notes/document-import/pcre2/v10-49/canonical/ja/'+route,'originalTitle':originalTitle,'sourceHeadings':headings,'removedOriginalNavigationAndGeneratedNotice':notice,'removedOriginalTOC':tocText,'originalCodeBlocks':len(codes),'originalCodeSHA256':[hashlib.sha256(x.encode()).hexdigest()for x in codes],'translationStatus':'pending','contentReview':'pending','batch':1})
for row in rows:
 old=existingItems.get(row['slug'],{})
 for k in ['translationStatus','contentReview','JapaneseTitle']:
  if k in old:row[k]=old[k]
assert sum(x['originalCodeBlocks']for x in rows)==51
(A/'src/data').mkdir(exist_ok=True);(A/'src/data/document-headings.json').write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n');(N/'CONTENT_MAP.json').write_text(json.dumps({'schemaVersion':1,'project':'pcre2','upstreamVersion':'10.49','items':rows,'sourceInputs':M['files'],'outsideScope':'CompletefixedEnglish doc/html101HTML+2text;fixedman5;originalrepository','originalNavigation':'OriginalmanHTMLindexreturn/TOC replacedbysharednav/ToC/footerindex link. Allotherprose/author/revision/copyright preserved. OriginalgeneratedHTMLnotice movedtofooter bilingualprovenancenote/fixedmanlink.','JapaneseMeaningReview':existing.get('JapaneseMeaningReview','pending')},ensure_ascii=False,indent=2)+'\n')
shutil.copytree(S/'doc/html',A/'public/source/v10-49/html',dirs_exist_ok=True);shutil.copytree(S/'doc',A/'public/source/v10-49/original/doc',dirs_exist_ok=True)
for f in ['LICENCE.md','README']:shutil.copyfile(S/f,A/'public/source/v10-49'/f)
# Use sharedprojectconfig schema and current footer metadata, no customlayout.
c={'paths':{'baseUrlPrefix':'/docs','projectSlug':'pcre2','siteUrl':'https://libx.dev'},'language':{'default':'en','supported':['en','ja'],'displayNames':{'en':'English','ja':'日本語'}},'translations':{'en':{'displayName':'PCRE2 Documentation','displayDescription':'PCRE2 10.49 overview, sample, matching algorithms, limits, and syntax','categories':{'guide':'Native C library and syntax'}},'ja':{'displayName':'PCRE2 ドキュメント','displayDescription':'PCRE2 10.49の概要・サンプル・照合方式・制限・構文','categories':{'guide':'Cライブラリーと構文'}}},'versioning':{'versions':[{'id':'v10-49','name':'10.49','date':M['acquiredAt'],'isLatest':True}]},'licensing':{'defaultSource':'pcre2-manual','showAttribution':True,'sourceLanguage':'en','sources':[{'id':'pcre2-manual','name':'PCRE2 10.49 native C manuals and syntax summary','author':'Philip Hazel, Zoltan Herczeg, the University of Cambridge, and PCRE2 contributors','license':'BSD-3-Clause WITH PCRE2-exception','licenseUrl':'/docs/pcre2/source/v10-49/LICENCE.md','sourceUrl':'https://github.com/PCRE2Project/pcre2/tree/6f9d7c1373262c541324a16a358785b33ef116cf','provenanceNotes':[{'en':'The original PCRE2 license explicitly applies to the doc directory. Full copyright notices, conditions, and disclaimer are retained in the linked original license and source copies. Libx provides unofficial formatting and an independent Japanese translation; no endorsement by the University of Cambridge or any contributor is implied. Original author, revision, and copyright notices remain in each manual.','ja':'原著PCRE2のライセンスはdocディレクトリーへの適用を明記しています。全文の著作権通知・条件・免責を、リンク先の原著ライセンスと原稿コピーへ保持しています。Libxによる非公式な整形と独自の日本語訳であり、ケンブリッジ大学や各寄稿者の推薦を示すものではありません。各文書の原著者・改訂日・著作権通知も保持しています。'},{'en':'Five complete manuals are paired in English and Japanese: overview, sample program explanation, matching algorithms, limits, and syntax summary. Other API, pattern, build, JIT, and command-line details remain in the fixed complete English HTML documentation and original repository. The source is fixed to pcre2-10.49, commit 6f9d7c1373262c541324a16a358785b33ef116cf; the release date is 28 September 2026. The site version date is the acquisition date, 6 October 2026.','ja':'概要・サンプルプログラムの説明・照合アルゴリズム・制限・構文一覧の5文書を全節収録し、英日で対照できます。その他のAPI・パターン・ビルド・JIT・コマンドの詳細は、固定した英語HTML文書一式と原典リポジトリで参照できます。原稿はpcre2-10.49、commit 6f9d7c1373262c541324a16a358785b33ef116cfへ固定しています。リリース日は2026年9月28日、本サイトのバージョン日付は取得日の2026年10月6日です。'},{'en':'The original HTML manuals were generated from man pages and advise consulting the man page if conversion is nonsensical. Both originals are supplied. Original index-return controls and the duplicated contents list are replaced by shared navigation and footer links. Code and syntax are static text; the PCRE2 engine and C examples are not executed. English descriptions in syntax listings are translated in the Japanese pages while literal syntax tokens are retained.','ja':'原著HTMLはmanページからの自動生成で、変換に不自然な箇所があればmanページを参照するよう原著に注記されています。両方の原稿を提供します。原著の索引へ戻る操作と重複する目次は、共通ナビゲーションとフッターのリンクへ置き換えています。コードと構文は静的な文字列で、PCRE2エンジンやCの例は実行しません。構文一覧の英語の説明も日本語ページで訳し、構文自体の記号は保持します。'}],'attributionLinks':[{'url':'/docs/pcre2/source/v10-49/html/index.html','label':{'en':'Fixed complete English HTML documentation','ja':'固定英語HTML文書一式'}},{'url':'/docs/pcre2/source/v10-49/original/doc/pcre2.3','label':{'en':'Fixed original overview man page','ja':'固定した概要の原manページ'}},{'url':'/docs/pcre2/source/v10-49/source.zip','label':{'en':'Editable source and rebuild kit','ja':'編集用原稿と再構築キット'}},{'url':'/docs/pcre2/source/v10-49/SOURCE_README.md','label':{'en':'Source kit and license notes','ja':'原稿キットとライセンスの案内'}}]}]}}
(A/'src/config/project.config.jsonc').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n');(A/'src/styles/global.css').write_text('''/* Extend the existing shared theme. */
@import '@docs/theme/css/starlight-overrides.css';
.pcre2-original-content pre { max-width:100%; min-width:0; overflow-x:auto; white-space:pre; tab-size:4; }
.pcre2-original-content pre code { white-space:pre; }
.document-provenance .attribution-text { overflow-wrap:anywhere; }
''')
print('Regenerated5Englishcanonical/51pre/103staticreferencefiles; savedJAmetadata/headings untouched')
