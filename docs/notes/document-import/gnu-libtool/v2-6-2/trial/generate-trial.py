from pathlib import Path
from bs4 import BeautifulSoup
import json,copy,html,hashlib,shutil
N=Path(__file__).resolve().parent.parent;W=Path('/private/tmp/libx-gnu-libtool-trial-997');A=W/'apps/gnu-libtool-trial';S=BeautifulSoup((N/'source/derived/manual.html').read_text(),'html.parser');base='/docs/gnu-libtool-trial/source/v2-6-2/';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert W.name=='libx-gnu-libtool-trial-997' and A.exists()
shutil.rmtree(A/'src/content/docs');P=A/'public/source/v2-6-2';P.mkdir(parents=True,exist_ok=True)
for src,dest in [('source/derived/manual.html','manual.html'),('source/downloads/libtool-2.6.2.tar.gz','libtool-2.6.2.tar.gz')]:shutil.copyfile(N/src,P/dest)
def clean(node):
 n=copy.deepcopy(node)
 for x in n.select('.nav-panel,.copiable-link,.menu'):x.decompose()
 return n
notice='<p>This manual is for GNU Libtool (version 2.6.2, 16 July 2026).</p><p>Copyright © 1996–2019, 2021–2026 Free Software Foundation, Inc.</p><p>Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, with no Front-Cover Texts, and with no Back-Cover Texts. A copy of the license is included in the section entitled “GNU Free Documentation License”.</p>'
context='<section><h3>Libx GNU Libtool 2.6.2 Library Build Guide — Local Conversion Trial / Libx GNU Libtool 2.6.2 ライブラリビルドガイド — ローカル変換試作</h3><p>Original authors: Gordon Matzigkeit, Alexandre Oliva, Thomas Tanner, Gary V. Vaughan. Original publisher: Free Software Foundation. Modification author and publisher: Libx.</p>'+notice+'<p>Copyright © 2026 Libx, for conversion and independent Japanese sample translation. This modified version is available under GNU Free Documentation License 1.3 or later, with no Invariant Sections, no Front-Cover Texts and no Back-Cover Texts. No new invariant sections or cover texts are added.</p><h3>History / 履歴</h3><p>Original: GNU Libtool, version 2.6.2, 16 July 2026, authors listed above, Free Software Foundation. Modified 12 October 2026 by Libx under the distinct trial title above. English chapters 2–3 and footnotes 1–4; Japanese section 3.1 sample only. This is an unpublished local trial; adoption and full Japanese translation remain pending.</p><p>Libxの運用方針: 原文コピーと非公式の独自日本語訳を提供するローカル試作です。英語第2〜3章・脚注1〜4、日本語は3.1節の試訳のみです。他章・全API・上流固有機能は未収録で、完全な情報は固定原文を参照してください。例は実行せず文字列として保存します。原文中の古い環境名・出力例も維持します。</p><p><a href="'+base+'manual.html">Fixed complete original / 固定原文全文</a> · <a href="'+base+'libtool-2.6.2.tar.gz">Original source archive / 原文ソース配布物</a></p>'+str(clean(S.find(id='GNU-Free-Documentation-License')))+'</section>'
c=BeautifulSoup(context,'html.parser');ids={x['id']:'libtool-context-'+x['id']for x in c.select('[id]')}
for x in c.select('[id]'):x['id']=ids[x['id']]
for x in c.select('a[href]'):
 if x['href'].startswith('#'):x['href']='#'+ids[x['href'][1:]]if x['href'][1:]in ids else base+'manual.html'+x['href']
ctx=[{'kind':'source','html':str(c)}];rows=[]
def write(lang,name,title,n):
 n=clean(n)
 if name=='02-using-libtool':
  for i in range(1,5):
   f=S.find(id='FOOT'+str(i)).parent;n.append(copy.deepcopy(f));f=f.find_next_sibling()
   while f is not None and f.name!='h5':n.append(copy.deepcopy(f));f=f.find_next_sibling()
 ids={x.get('id')for x in n.select('[id]')};ids.add(n.get('id'))
 for a in n.select('a[href]'):
  if a['href'].startswith('#')and a['href'][1:]not in ids:a['href']=base+'manual.html'+a['href']
 p=A/'src/content/docs/v2-6-2'/lang/'01-guide'/(name+'.md');p.parent.mkdir(parents=True,exist_ok=True);serialized=str(n)
 for pre in n.select('pre'):
  literal=str(pre).replace('\n','&#10;');serialized=serialized.replace(str(pre),literal)
 p.write_text('---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\nlicenseSource: gnu-libtool-manual\ndocumentContext: '+json.dumps(ctx,ensure_ascii=False)+'\n---\n\n<div class="gnu-libtool-original-content">'+serialized+'</div>\n');rows.append({'path':str(p.relative_to(A)),'sha256':h(p),'pre':len(n.select('pre')),'paragraphs':len(n.select('p')),'footnotes':[x['id']for x in n.select('[id]')if x['id'].startswith('FOOT')]})
write('en','01-libtool-paradigm','The Libtool paradigm — Local trial',S.find(id='Libtool-paradigm'));write('en','02-using-libtool','Using Libtool — Local trial',S.find(id='Using-libtool'))
ja=clean(S.find(id='Creating-object-files'));ja.find(['h2','h3','h4']).string='3.1 オブジェクトファイルの作成'
translations=[
'ソースファイルからオブジェクトファイルを作成するには、コンパイラを -c フラグ（および必要なその他のフラグ）付きで呼び出します。',
'上のコンパイラコマンドは、ソースファイル main.c から、通常 main.o という名前のオブジェクトファイルを生成します。',
'ほとんどのライブラリシステムでは、静的ライブラリの一部になるオブジェクトファイルの作成は、リンクして実行可能ファイルにするオブジェクトファイルの作成と同じくらい単純です。',
'一方、共有ライブラリは位置独立コード（PIC）からしかビルドできない場合があります。そのため、通常の位置依存コードではなく PIC を生成するよう、特別なフラグをコンパイラに渡す必要があります。',
'これはライブラリ実装の詳細なので、libtool は PIC 用コンパイラフラグの複雑さを隠し、ライブラリ用のオブジェクトファイルを分けて使います。PIC 版は .libs サブディレクトリ、静的版は現在のディレクトリに置かれます。共有ライブラリのないシステムでは PIC 版を作成せず、AIX のようにすべてのコードが PIC であるシステムでは静的版を作成しません。',
'foo.c と hello.c のライブラリ用オブジェクトファイルを作成するには、通常のコンパイルコマンドを引数として libtool を呼び出すだけです（Compile mode を参照）。',
'libtool は compile の呼び出しごとに、追加の制御ファイルを黙って作成します。.lo ファイルが libtool オブジェクトであり、Libtool はこれを使って共有ライブラリに組み込めるオブジェクトファイルを判断します。a23 では静的ライブラリしかサポートされないため、ライブラリ用オブジェクトは次のようになります。',
'共有ライブラリを使えるシステムでは、libtool は適切な PIC 生成フラグをコンパイルコマンドに挿入し、追加の PIC オブジェクトを自動生成します。',
'Libtool は最初の実行時に .libs ディレクトリを自動作成しました。PIC 版のライブラリ用オブジェクトファイルはここに保存されます。',
'burger は共有ライブラリをサポートし、そのビルドに PIC オブジェクトが必要なので、Libtool は PIC オブジェクトをコンパイルし、その情報を libtool オブジェクトに記録しています。',
'GCC の2回目の実行では出力が破棄されます。コンパイラの警告が煩わしく重複するのを防ぐためです。両方の警告を確認する必要がある場合（たとえば #ifdef PIC 内に条件付きコードがある場合）は、libtool のコンパイルモードに -no-suppress オプションを渡して抑制を解除できます。'
]
ps=ja.find_all('p');assert len(ps)==len(translations)
for p,t in zip(ps,translations):p.clear();p.append(t)
# Restore the single original cross-reference as a fixed-original link after replacing prose.
p=ps[5];p.append(' ');a=S.new_tag('a',href=base+'manual.html#Compile-mode');a.string='Compile mode';p.append(a)
write('ja','03-creating-object-files','オブジェクトファイルの作成 — 試作',ja)
config={'paths':{'baseUrlPrefix':'/docs','projectSlug':'gnu-libtool-trial','siteUrl':'https://libx.dev'},'language':{'default':'en','supported':['en','ja'],'displayNames':{'en':'English','ja':'日本語'}},'translations':{l:{'displayName':v,'displayDescription':'Local static conversion trial; excluded from deployment','categories':{'guide':'Guide'if l=='en'else'ガイド'}}for l,v in [('en','GNU Libtool local trial'),('ja','GNU Libtool ローカル試作')]},'versioning':{'versions':[{'id':'v2-6-2','name':'2.6.2','date':'2026-07-16T00:00:00.000Z','isLatest':True}]},'licensing':{'defaultSource':'gnu-libtool-manual','showAttribution':True,'sourceLanguage':'en','sources':[{'id':'gnu-libtool-manual','name':'GNU Libtool 2.6.2 manual — trial','author':'Gordon Matzigkeit, Alexandre Oliva, Thomas Tanner, Gary V. Vaughan / Free Software Foundation','license':'GFDL1.3-or-later','licenseUrl':base+'manual.html#GNU-Free-Documentation-License','sourceUrl':'https://www.gnu.org/software/libtool/manual/','provenanceNotes':[{'en':'Local conversion trial only. Full Japanese translation and adoption are pending. Shell examples are static original text.','ja':'ローカル変換試作です。採用と範囲全体の日本語訳は未完です。例は原文の静的な文字列です。'}],'attributionLinks':[{'url':base+'manual.html','label':{'en':'Fixed complete original','ja':'固定原文全文'}}]}]}}
(A/'src/config/project.config.jsonc').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n')
out={'status':'generated-local-trial-not-adopted','workspace':str(W),'fixedHTMLSHA256':h(N/'source/derived/manual.html'),'rows':rows,'limits':'English chapters2–3 including all4whole footnotes; independent Japanese3.1 sample only. No public app or operation. No example executed.'};(N/'trial/TRIAL_GENERATION.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(json.dumps(out))
