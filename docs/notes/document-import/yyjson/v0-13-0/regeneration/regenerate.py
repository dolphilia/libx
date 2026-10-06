"""Regenerate fixed yyjson Markdown originals; translations are separate saved inputs."""
from pathlib import Path
import json, hashlib, re, argparse, html

B=Path(__file__).resolve().parents[1]
routes=json.loads((B/'regeneration/ROUTES.json').read_text())
sha=lambda b:hashlib.sha256(b).hexdigest()
prefix='/docs/yyjson/v0-13-0/'
official='https://ibireme.github.io/yyjson/doc/doxygen/html/'
mapping={'data-structures.html':'01-guide/16-data-structures','building-and-testing.html':'01-guide/15-build-and-test','changelog.html':'02-reference/01-changelog','api.html':'01-guide/02-api-design'}
headings={}
for r in routes['guides']:
 if r['source']=='doc/API.md':
  lines=(B/'source/original/doc/API.md').read_text().splitlines()[r['startLine']-1:r['endLine']]
  fence=False
  for line in lines:
   if line.startswith('```'):fence=not fence
   if not fence and re.match(r'^#{1,6} ',line):
    title=re.sub(r'^#+ ','',line).strip()
    key=re.sub(r'[^\w\- ]','',title.lower()).replace(' ','-')
    headings[key]=r['id'].removesuffix('.md')

def edited(r):
 raw=(B/'source/original'/r['source']).read_bytes()
 assert sha(raw)==r['sourceSHA256']
 text=raw.decode()
 if 'startLine' in r:
  text=''.join(text.splitlines(keepends=True)[r['startLine']-1:r['endLine']])
  assert sha(text.encode())==r['inputSHA256']
 if r.get('wholeCode'):return '```text\n'+text+'```\n'
 text=re.sub(r'^(.*?) \{#([\w-]+)\}$',r'\1',text,flags=re.M)
 text=re.sub(r'\]\((?:doc/)?images/([^\)]+)\)',r'](/docs/yyjson/source/v0-13-0/images/\1)',text)
 def figure(m):
  src='/docs/yyjson/source/v0-13-0/images/'+m[2]
  return '<figure class="yyjson-figure"><img src="'+html.escape(src,quote=True)+'" alt="'+html.escape(m[1],quote=True)+'"><figcaption><a href="'+html.escape(src,quote=True)+'">Original image / 図の原寸表示</a></figcaption></figure>'
 text=re.sub(r'!\[([^\]]*)\]\(/docs/yyjson/source/v0-13-0/images/([^\)]+)\)',figure,text)
 for name,target in mapping.items():
  if name=='api.html':
   text=re.sub(re.escape(official+name)+r'#([\w-]+)',lambda m:prefix+'en/'+headings.get(m[1],target)+'/#'+m[1],text)
  text=text.replace(official+name,prefix+'en/'+target+'/')
 return text

def render(r,lang,body):
 source='https://github.com/ibireme/yyjson/blob/'+routes['commit']+'/'+r['source']
 if 'startLine' in r:source+='#L'+str(r['startLine'])+'-L'+str(r['endLine'])
 context=[{'kind':'source','html':'<p>yyjson 0.13.0, fixed commit '+routes['commit']+'. By YaoYuan and yyjson contributors. <a href="'+html.escape(source,quote=True)+'">Fixed official original</a>. <a href="/docs/yyjson/notices/LICENSE.txt">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>'},{'kind':'editorial','html':'<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href="'+official+'">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>'}]
 context.append({'kind':'source','html':'<p><a href="/docs/yyjson/source/v0-13-0/source.zip">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定Markdown7資料とSVG7図、英語原文19ページ・非公式日本語訳16ガイドの編集原稿、再生成入力、原MIT通知、共有ビルドコードと再構築手順を含みます。更新履歴・原著Performance TODO・MIT通知の3資料は未翻訳の英語原文です。各ファイルの条件を参照してください。</p>'})
 title=r.get('titleJA') if lang=='ja' else r['titleEN']
 assert title
 meta={'title':title,'documentId':'yyjson:'+r['id'],'order':r['order'],'licenseSource':'yyjson-fixed','toc':{'maxLevel':6},'documentContext':context}
 return '---\n'+''.join(k+': '+json.dumps(v,ensure_ascii=False)+'\n' for k,v in meta.items())+'---\n'+body

parser=argparse.ArgumentParser();parser.add_argument('--output',type=Path,default=B/'canonical');args=parser.parse_args()
records=[]
for r in routes['guides']+routes['references']:
 body=edited(r);p=args.output/'en'/r['id'];p.parent.mkdir(parents=True,exist_ok=True);p.write_text(render(r,'en',body));records.append({'id':r['id'],'language':'en','sha256':sha(p.read_bytes())})
 if r in routes['guides']:
  t=B/'translations/ja'/r['id']
  if t.exists():
   p=args.output/'ja'/r['id'];p.parent.mkdir(parents=True,exist_ok=True);p.write_text(render(r,'ja',t.read_text()));records.append({'id':r['id'],'language':'ja','sha256':sha(p.read_bytes())})
print(json.dumps({'status':'generated','EnglishOriginals':19,'JapaneseSavedInputs':len([r for r in records if r['language']=='ja']),'files':records}))
