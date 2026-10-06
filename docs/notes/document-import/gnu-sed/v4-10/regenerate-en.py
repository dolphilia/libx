from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import copy,json,re,hashlib,shutil,datetime,subprocess
N=Path(__file__).resolve().parent;W=N.parents[4];A=W/'apps/gnu-sed';T=N/'drafts/en';T.mkdir(parents=True,exist_ok=True);PUBLIC=A/'public/source/v4-10';PUBLIC.mkdir(parents=True,exist_ok=True);S=N/'source/original';M=json.loads((N/'SOURCE_MANIFEST.json').read_text());h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
for f in M['files']:assert h(N/f['path'])==f['sha256']
assert subprocess.check_output(['makeinfo','--version'],text=True).splitlines()[0].endswith('7.1')
source=N/'source/derived/manual.html';source.parent.mkdir(exist_ok=True)
subprocess.run(['makeinfo','--html','--no-split','--no-headers','-I',str(S/'doc'),'-o',str(source),str(S/'doc/sed.texi')],check=True)
s=BeautifulSoup(source.read_text(),'html.parser')
for folder in [A/'src/content/docs/v1',A/'public/search/v1']:
 if folder.exists():shutil.rmtree(folder)
for f in (A/'public/sidebar').glob('*-v1.json'):f.unlink()
chapters=['Introduction','Invoking-sed','sed-scripts']
specs=[('01-introduction','Introduction'),('02-overview','Overview'),('03-command-line-options','Command_002dLine-Options'),('04-exit-status','Exit-status'),('05-script-overview','sed-script-overview'),('06-command-summary','sed-commands-list'),('07-substitution','The-_0022s_0022-Command'),('08-often-used-commands','Common-Commands'),('09-less-frequent-commands','Other-Commands'),('10-guru-commands','Programming-Commands'),('11-gnu-commands','Extended-Commands'),('12-multiple-commands','Multiple-commands-syntax')]
rows=[];nodes=[]
for slug,id in specs:
 node=s.new_tag('div');node['class']='gnu-sed-original-content'
 if id in ['Overview','sed-script-overview']:
  parent=s.find(id='Invoking-sed' if id=='Overview' else 'sed-scripts')
  for child in parent.children:
   if getattr(child,'name',None)=='div' and 'section-level-extent' in child.get('class',[]):break
   node.append(copy.deepcopy(child))
 node.append(copy.deepcopy(s.find(id=id)))
 for a in node.select('a.copiable-link'):assert a.get_text()==' ¶';a.decompose()
 nodes.append(node);rows.append({'slug':slug,'sourceNode':id,'sourcePre':[p.get_text() for p in node.select('pre')]})
norm=lambda x:re.sub(r'\s+',' ',x).strip()
assert norm(' '.join(s.find(id=c).get_text().replace(' ¶','') for c in chapters))==norm(' '.join(n.get_text() for n in nodes))
owners={}
for row,node in zip(rows,nodes):
 for x in node.select('[id]'):
  assert x['id'] not in owners,x['id'];owners[x['id']]=row['slug']
notice=s.find(id='Top');copying=''.join(str(p) for p in notice.find_all(['p','blockquote'],recursive=False))
fdl=s.find(id='GNU-Free-Documentation-License');assert fdl
for row,node in zip(rows,nodes):
 foot=[]
 for a in list(node.select('a[href^="#FOOT"]')):
  id=a['href'][1:];n=s.find(id=id);assert n and n.parent.name=='h5'
  box=s.new_tag('div');box['class']='gnu-source-footnote';box.append(copy.deepcopy(n.parent));box.append(copy.deepcopy(n.parent.find_next_sibling()));node.append(box);foot.append(id);owners[id]=row['slug']
 row['footnotes']=foot
for row,node in zip(rows,nodes):
 adopted=N/'source-fragments/en/01-guide'/(row['slug']+'.html');adopted.parent.mkdir(parents=True,exist_ok=True);adopted.write_text(str(node)+'\n')
 for a in node.select('a[href^="#"]'):
  id=a['href'][1:];assert s.find(id=id),id
  a['href']=('/docs/gnu-sed/v4-10/en/01-guide/'+owners[id]+'/#'+id) if id in owners else ('/docs/gnu-sed/source/v4-10/manual.html#'+id)
 conversion=copy.deepcopy(node);tokens={}
 for i,pre in enumerate(conversion.select('pre')):
  token='LIBX_SED_PRE_'+str(i)+'_END'
  literal=''.join(str(child) for child in pre.contents).replace('\n','&#10;').replace('\t','&#9;')
  tokens[token]='<pre class="gnu-sed-literal">'+literal+'</pre>'
  pre.replace_with(NavigableString(token))
 fragment=str(conversion)
 for token,literal in tokens.items():fragment=fragment.replace(token,literal)
 (T/(row['slug']+'.body.html')).write_text(fragment+'\n')
 row.update(sourceText=norm(node.get_text()),sourceHeadings=[{'depth':int(h.name[1]),'slug':h.get('id'),'text':norm(h.get_text())} for h in node.find_all(re.compile('^h[1-6]$')) if h.get('id')],pre=len(row['sourcePre']),fragment=fragment)
notice='<section class="gnu-sed-notices"><h3>Libx GNU sed 4.10 Getting Started and Scripts — Chapters 1–3 / Libx GNU sed 4.10 入門とスクリプト — 第1〜3章</h3><p>Original authors: Ken Pizzini, Paolo Bonzini, Jim Meyering, Assaf Gordon. Original publisher: Free Software Foundation. Modification author and publisher: Libx.</p>'+copying+'<p>Copyright © 2026 Libx, for editing and independent Japanese translation. This modified guide is available under GNU Free Documentation License1.3 or later, with no Invariant Sections, Front-Cover Texts, or Back-Cover Texts. No new cover texts or invariant sections have been added.</p><h3>History / 履歴</h3><p>Original: GNU sed, a stream editor; version4.10; updated20April2026; authors listed above; publisher Free Software Foundation. Source: sed-4.10.tar.gz, SHA256 '+M['archiveSHA256']+'.</p><p>2026: Libx GNU sed4.10 Getting Started and Scripts — Chapters1–3 / Libx GNU sed4.10 入門とスクリプト — 第1〜3章. Modification author and publisher: Libx. Static chapter-scoped HTML in editable Markdown and unofficial Japanese translation. Original copyright, permission and whole English license preserved. Modified6October2026.</p></section>'
licenseHTML='<details class="gnu-sed-license"><summary>Original English GNU Free Documentation License / 原英語GFDL全文</summary>'+str(fdl)+'</details>'
context=[{'kind':'source','html':notice+licenseHTML}]
titles=['Introduction','Running sed: Overview','Command-Line Options','Exit Status','sed Script Overview','sed Commands Summary','The s Command','Often-Used Commands','Less Frequently-Used Commands','Commands for sed Gurus','Commands Specific to GNU sed','Multiple Commands Syntax']
headingFile=A/'src/data/document-headings.json';previousMap=json.loads((N/'CONTENT_MAP.json').read_text()) if (N/'CONTENT_MAP.json').exists() else {};previousRows={r['id']:r for r in previousMap.get('items',[])};heads={k:v for k,v in json.loads(headingFile.read_text()).items() if '/ja/' in k} if headingFile.exists() else {};records=[]
for row,title in zip(rows,titles):
 route='01-guide/'+row['slug']+'.md';front={'title':title,'description':'Fixed GNU sed4.10 complete manual chapters1–3, with paired Japanese translation.','documentId':'gnu-sed:4.10:'+row['slug'],'licenseSource':'gnu-sed-manual','toc':{'maxLevel':4},'documentContext':context}
 page='---\n'+''.join(k+': '+json.dumps(v,ensure_ascii=False)+'\n' for k,v in front.items())+'---\n\n'+row['fragment']+'\n'
 for base in [N/'canonical/en',A/'src/content/docs/v4-10/en',PUBLIC/'edited/en']:
  dest=base/route;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(page)
 heads['v4-10/en/'+route.removesuffix('.md')]=row['sourceHeadings']
 records.append({k:row[k] for k in ['slug','sourceNode','sourcePre','sourceHeadings','footnotes','pre','sourceText']}|{'id':route,'titleEN':title,'canonical':'canonical/en/'+route,'canonicalSHA256':h(N/'canonical/en'/route),'batch':1 if len(records)<7 else 2,'translation':'pending','meaningReview':'pending'})
for record in records:
 for key in ['translation','meaningReview','translationCanonical','translationSHA256']:
  if key in previousRows.get(record['id'],{}):record[key]=previousRows[record['id']][key]
ref='02-reference/01-gfdl.md';referenceContext=[{'kind':'source','html':notice}];p='---\ntitle: "Original English GNU Free Documentation License"\nlicenseSource: "gnu-sed-manual"\ndocumentContext: '+json.dumps(referenceContext,ensure_ascii=False)+'\n---\n\n'+str(fdl)+'\n'
for base in [N/'canonical/en',A/'src/content/docs/v4-10/en',PUBLIC/'edited/en']:
 dest=base/ref;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(p)
shutil.copyfile(source,PUBLIC/'manual.html');shutil.copytree(S,PUBLIC/'original',dirs_exist_ok=True)
(PUBLIC/'SOURCE_README.md').write_text((N/'SOURCE_OFFER_README.md').read_text() if (N/'SOURCE_OFFER_README.md').exists() else '# GNU sed4.10 original and editable sources / 原文・編集用原稿\n\nComplete adopted chapters1–3 / 採用第1〜3章全文。Original Texinfo/Info/manual and unchanged archive with notices are provided. 原著GFDL1.3-or-later文書（不変節・covertextsなし）と原英語全文、原sourcearchiveのGPL通知を保持。Libxの独立非公式訳・編集は同GFDL条件。\n\nOriginal manual revision20April2026; acquisition6October2026. 原著更新日と取得日は別です。\n\nFormal Japanese drafts/reviews and final source rebuild ZIP are pending. 日本語草稿・全文レビュー・再構築ZIPはまだ未完了。This draft app is not published. 草稿アプリは未公開です。\n')
c={'paths':{'baseUrlPrefix':'/docs','projectSlug':'gnu-sed','siteUrl':'https://libx.dev'},'language':{'default':'en','supported':['en','ja'],'displayNames':{'en':'English','ja':'日本語'}},'translations':{'en':{'displayName':'GNU sed Getting Started and Scripts','displayDescription':'GNU sed4.10 complete chapters1–3','categories':{'guide':'Getting started and scripts','reference':'Original English notices'}},'ja':{'displayName':'GNU sed 入門とスクリプト','displayDescription':'GNU sed4.10第1〜3章全文の原文と独自日本語訳','categories':{'guide':'入門とスクリプト','reference':'原英語の通知'}}},'versioning':{'versions':[{'id':'v4-10','name':'4.10','date':M['lockedAt'],'isLatest':True}]},'licensing':{'defaultSource':'gnu-sed-manual','showAttribution':True,'sourceLanguage':'en','sources':[{'id':'gnu-sed-manual','name':'GNU sed4.10 manual, complete chapters1–3','author':'Ken Pizzini, Paolo Bonzini, Jim Meyering, Assaf Gordon / Free Software Foundation','license':'GFDL1.3-or-later','licenseUrl':'/docs/gnu-sed/source/v4-10/manual.html#GNU-Free-Documentation-License','sourceUrl':'https://www.gnu.org/software/sed/manual/','provenanceNotes':[{'en':'This unofficial Libx guide includes complete chapters1–3 and all four referenced footnotes from GNU sed4.10. Remaining chapters and indexes are supplied in the fixed complete English manual, Texinfo and Info originals.','ja':'Libxによる非公式ガイドです。GNU sed4.10の第1〜3章全文と参照脚注4件を収録しています。残りの章と索引は、固定全文の英語マニュアル・Texinfo・Info原稿を参照できます。'},{'en':'Original copyright, permission, authors, History and the whole original English GFDL are retained below. There are no Invariant Sections or Cover Texts. Code, command output and variable notation remain static text; heading self-link marks are replaced by shared navigation. No original sed program or command examples are executed.','ja':'原著作権・許諾・著作者・履歴・原英語GFDL全文を以下に保持しています。不変節・表紙文言はありません。コード・出力・変数表記は静的な文字列として提供し、見出しの自己参照記号を共通導線へ置き換えています。GNU sed本体やコマンド例は実行しません。'},{'en':'The original document revision is20April2026. The source is fixed to the original4.10 release archive, SHA256 '+M['archiveSHA256']+'. The site version date is acquisition6October2026, not the original revision date.','ja':'原著文書の更新日は2026年4月20日です。原著4.10リリース配布物、SHA256 '+M['archiveSHA256']+'へ固定しています。サイトの版日付は取得日の2026年10月6日で、原著更新日とは別です。'}],'attributionLinks':[{'url':'/docs/gnu-sed/source/v4-10/manual.html','label':{'en':'Fixed complete original manual','ja':'固定原文マニュアル全文'}},{'url':'/docs/gnu-sed/source/v4-10/original/sed-4.10.tar.gz','label':{'en':'Unchanged original source archive','ja':'未変更の原著ソース配布物'}},{'url':'/docs/gnu-sed/source/v4-10/original/doc/sed.texi','label':{'en':'Original editable Texinfo','ja':'編集可能な原Texinfo'}},{'url':'/docs/gnu-sed/source/v4-10/original/doc/sed.info','label':{'en':'Original Info manual','ja':'原Infoマニュアル'}},{'url':'/docs/gnu-sed/source/v4-10/source.zip','label':{'en':'Editable source and rebuild kit','ja':'編集用原稿・再生成キット'}},{'url':'/docs/gnu-sed/source/v4-10/SOURCE_README.md','label':{'en':'Source and license notes','ja':'原稿とライセンスの案内'}}]}]}}
(A/'src/config/project.config.jsonc').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n');(A/'src/data').mkdir(exist_ok=True);(A/'src/data/document-headings.json').write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n')
(A/'src/styles/global.css').write_text("@import '@docs/theme/css/starlight-overrides.css';\n.gnu-sed-original-content pre { max-width:100%;min-width:0;overflow-x:auto;white-space:pre;tab-size:4; }\n.gnu-sed-original-content pre code {white-space:pre;}\n.gnu-sed-original-content dd {min-width:0;}\n.document-provenance .attribution-text {overflow-wrap:anywhere;}\n")
(N/'CONTENT_MAP.json').write_text(json.dumps({'schemaVersion':1,'version':'4.10','manualGeneratedSHA256':h(source),'sourceChapterOrderCoverageExact':True,'guidePages':12,'referenceEnglishOnly':[ref],'originalPre':51,'footnotes':4,'items':records,'meaningReview':previousMap.get('meaningReview','pending'),'Japanese':previousMap.get('Japanese','pending'),'JapanesePre':previousMap.get('JapanesePre',{'pureCodeOutputExact':50,'codeWithTranslatedExplanation':1,'translatedExplanationUnits':3})},ensure_ascii=False,indent=2)+'\n');print('GNU sed EN12+GFDL1再生成;51pre/4脚注。日本語の保存レビューは別REVIEW_MANIFESTで確認。')
