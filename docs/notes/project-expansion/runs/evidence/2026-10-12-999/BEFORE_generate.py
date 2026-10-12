from pathlib import Path
from bs4 import BeautifulSoup
import json,copy,hashlib,shutil,re
N=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-gnu-libtool-998');A=W/'apps/gnu-libtool';S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();base='/docs/gnu-libtool/source/v2-6-2/';inventory=json.loads((N/'SCOPE_INVENTORY_INITIAL.json').read_text());rows=inventory['pages'];names=['01-libtool-paradigm','02-using-libtool','03-creating-object-files','04-linking-libraries','05-linking-executables','06-wrapper-executables','07-debugging-executables','08-installing-libraries','09-installing-executables','10-static-libraries'];assert len(rows)==len(names)==10
assert A.exists() and W.name=='libx-gnu-libtool-998'
if (A/'src/content/docs').exists():shutil.rmtree(A/'src/content/docs')
context=json.loads(next(x.split(': ',1)[1]for x in (N/'trial/app/src/content/docs/v2-6-2/en/01-guide/01-libtool-paradigm.md').read_text().splitlines()if x.startswith('documentContext: ')))[0]['html']
context=context.replace('/gnu-libtool-trial/','/gnu-libtool/').replace(' — Local Conversion Trial',' — Chapters 2–3').replace(' — ローカル変換試作',' — 第2〜3章').replace('conversion and independent Japanese sample translation','conversion and independent Japanese translation').replace('distinct trial title above','distinct guide title above').replace('English chapters 2–3 and footnotes 1–4; Japanese section 3.1 sample only. This is an unpublished local trial; adoption and full Japanese translation remain pending.','English chapters 2–3 and complete footnotes 1–4, with independent unofficial Japanese translation. Other chapters and APIs are available in the fixed complete original.').replace('原文コピーと非公式の独自日本語訳を提供するローカル試作です。英語第2〜3章・脚注1〜4、日本語は3.1節の試訳のみです。','原文コピーと非公式の独自日本語訳を提供します。収録範囲は第2〜3章と参照脚注1〜4です。').replace('</section>','<p>Original network locations: <a href="https://ftp.gnu.org/gnu/libtool/libtool-2.6.2.tar.gz">GNU Libtool 2.6.2 source archive</a> · <a href="https://www.gnu.org/software/libtool/manual/">GNU Libtool manual</a>.</p></section>',1)
context += '<p>Libxの編集注記: 原文3.3.1ではデバッグ診断の出力先が本文で stderr、オプション一覧で stdout と記載されています。両方の記載を保持しています。また、原文3.7の便宜用ライブラリのリンクに関する一文は、同節末尾の利用目安と読み合わせる必要がある表現のため、推測で書き換えず保持しました。詳しくは <a href="'+base+'manual.html#Wrapper-executables">3.3.1原文</a> と <a href="'+base+'manual.html#Static-libraries">3.7原文</a> を参照してください。</p>'
(N/'DOCUMENT_CONTEXT.json').write_text(json.dumps([{'kind':'source','html':context}],ensure_ascii=False,indent=2)+'\n')
config=json.loads((N/'trial/app/src/config/project.config.jsonc').read_text());config['paths']['projectSlug']='gnu-libtool'
for lang in ['en','ja']:
 config['translations'][lang].update(displayName='GNU Libtool',displayDescription='Portable shared and static library build guide'if lang=='en'else'可搬な共有・静的ライブラリのビルドガイド',categories={'guide':'Guide'if lang=='en'else'ガイド','reference':'Reference'if lang=='en'else'参照'})
source=config['licensing']['sources'][0];source['name']='GNU Libtool 2.6.2 manual';source['licenseUrl']=base+'manual.html#GNU-Free-Documentation-License';source['provenanceNotes']=[{'en':'Complete chapters 2–3 with their referenced footnotes. Original examples remain static text, including historical platforms. Other chapters, API details and upstream functionality are available in the fixed complete original.','ja':'第2〜3章と参照脚注を収録します。古い環境名を含め、原文の例は静的な文字列で保持します。他章・API詳細・上流機能は固定原文全文を参照してください。'}];source['attributionLinks'][0]['url']=base+'manual.html';(N/'project.config.jsonc').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n');shutil.copyfile(N/'project.config.jsonc',A/'src/config/project.config.jsonc')
P=A/'public/source/v2-6-2';P.mkdir(parents=True,exist_ok=True)
for src,dst in [('source/derived/manual.html','manual.html'),('source/downloads/libtool-2.6.2.tar.gz','libtool-2.6.2.tar.gz')]:shutil.copyfile(N/src,P/dst)
def clean(node):
 n=copy.deepcopy(node)
 for x in n.select('.nav-panel,.copiable-link,.menu'):x.decompose()
 for r in rows:
  nested=n.find(id=r['nodeId'])
  if nested is not None:nested.decompose()
 return n
nodes={r['nodeId']:clean(S.find(id=r['nodeId']))for r in rows};footowner={1:'Linking-libraries',2:'Linking-executables',3:'Linking-executables',4:'Installing-libraries'}
for i,owner in footowner.items():
 f=S.find(id='FOOT'+str(i)).parent;nodes[owner].append(copy.deepcopy(f));f=f.find_next_sibling()
 while f is not None and f.name!='h5':nodes[owner].append(copy.deepcopy(f));f=f.find_next_sibling()
lic=copy.deepcopy(S.find(id='GNU-Free-Documentation-License'))
for x in lic.select('.nav-panel,.copiable-link'):x.decompose()
nodes['GNU-Free-Documentation-License']=lic
routes={r['nodeId']:'01-guide/'+names[i]+'.md'for i,r in enumerate(rows)};routes['GNU-Free-Documentation-License']='02-reference/01-gfdl.md';owners={}
for key,node in nodes.items():
 for x in [node,*node.select('[id]')]:
  if x.get('id'):assert x['id']not in owners;owners[x['id']]=key
units=[];records=[]
for key,node in nodes.items():
 page=routes[key];section=N/'sections'/page.replace('.md','.html');section.parent.mkdir(parents=True,exist_ok=True);section.write_text(str(node)+'\n')
 for a in node.select('a[href]'):
  href=a['href']
  if href.startswith('#'):
   anchor=href[1:];owner=owners.get(anchor);a['href']=href if owner==key else '/docs/gnu-libtool/v2-6-2/en/'+routes[owner].removesuffix('.md')+'/#'+anchor if owner else base+'manual.html'+href
 serialized=str(node)
 for pre in node.select('pre'):serialized=serialized.replace(str(pre),str(pre).replace('\n','&#10;'))
 title=node.find(['h2','h3','h4']).get_text(' ',strip=True);p=N/'preferred/en'/page;p.parent.mkdir(parents=True,exist_ok=True);p.write_text('---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\nlicenseSource: gnu-libtool-manual\ndocumentId: '+json.dumps('gnu-libtool:2.6.2:'+key)+'\ndocumentContext: '+json.dumps([{'kind':'source','html':context}],ensure_ascii=False)+'\n---\n\n<div class="gnu-libtool-original-content">'+serialized+'</div>\n');dest=A/'src/content/docs/v2-6-2/en'/page;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,dest)
 if key!='GNU-Free-Documentation-License':
  for i,x in enumerate(node.select('p,dt,dd')):
   if x.name=='dd'and x.find('p'):continue
   units.append({'id':key+':'+str(i),'nodeId':key,'tag':x.name,'html':x.decode_contents(),'text':x.get_text(' ',strip=True)})
 records.append({'nodeId':key,'page':page,'source':str(section.relative_to(N)),'sourceSHA256':h(section),'canonical':str(p.relative_to(N)),'canonicalSHA256':h(p),'pre':len(node.select('pre')),'paragraphs':len(node.select('p')),'ids':[x['id']for x in [node,*node.select('[id]')]if x.get('id')],'footnotes':[x['id']for x in node.select('[id]')if x['id'].startswith('FOOT')]})
(N/'CANONICAL_GENERATION.json').write_text(json.dumps({'status':'generated-canonical-verification-pending','workspace':str(W),'fixedHTMLSHA256':h(N/'source/derived/manual.html'),'rows':records,'guidePages':10,'EnglishReferencePages':1},ensure_ascii=False,indent=2)+'\n');(N/'TRANSLATION_UNITS.json').write_text(json.dumps(units,ensure_ascii=False,indent=2)+'\n');print('Generated11Englishpages;',len(units),'translation units;code31+license3')
