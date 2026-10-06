from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
from collections import Counter
import json,re,hashlib
from units import units
N=Path('docs/notes/document-import/rapidjson/v1-1-0');E=Path(__file__).parent;A=Path('/private/tmp/libx-rapidjson-formal-853/apps/rapidjson');rows=[]
titles={'10-performance':'性能','11-internals':'内部設計','12-faq':'よくある質問','13-npm':'NPMパッケージ'}
for name,title in titles.items():
 p=N/f'canonical/en/01-guide/{name}.md';front,body=p.read_text().split('---\n',2)[1:];soup=BeautifulSoup(body,'html.parser');u=units(soup);draft=json.loads((E/f'{name}-draft.json').read_text());assert len(u)==len(draft['sentences'])
 for (el,nodes,r),d in zip(u,draft['sentences']):
  assert d['source']==r['text'] and d['n']==r['n'];t=d['ja'];expected=Counter('{'+str(i+1)+'}'for i in range(len(r['tokens'])));assert Counter(re.findall(r'\{\d+\}',t))==expected,(name,r['n'],t)
  for i,token in enumerate(r['tokens']):
   ts=BeautifulSoup(token,'html.parser')
   for leaf in list(ts.find_all(string=True)):
    if str(leaf) in draft['tokenTranslations']:leaf.replace_with(draft['tokenTranslations'][str(leaf)])
    elif str(leaf)=='Encoding' and leaf.parent.name=='a' and '/01-guide/'in leaf.parent.get('href',''):leaf.replace_with('エンコーディング')
   t=t.replace('{'+str(i+1)+'}',str(ts))
  fragment=BeautifulSoup(t,'html.parser');first=nodes[0]
  for child in list(fragment.contents):first.insert_before(child)
  for node in nodes:node.extract()
 if name=='04-dom':
  captions=soup.select('.caption');assert [x.get_text().strip()for x in captions]==['normal parsing','instiu parsing']
  for x,t in zip(captions,['通常の解析','in situ解析']):x.clear();x.append(t)
 # Translate only guide routes; API/reference links keep the English original targets.
 for node in soup.select('[href]'):
  node['href']=node['href'].replace('/v1-1-0/en/01-guide/','/v1-1-0/ja/01-guide/')
 context=json.loads(re.search(r'^documentContext: (.*)$',front,re.M)[1])
 for c in context:
  c['html']=c['html'].replace('Libx provides an unofficial static edition. Original definitions, signatures and descriptions appear as ordinary reference blocks after source or example code. Code and reference links retain their targets. Dynamic tooltips are not used. The Japanese edition covers the 13 user guides; the other 205 API, index and source pages are English original references. Refer to the linked original documentation for further details.','Libxの非公式日本語訳です。原文の定義・宣言・説明は、ソースやコード例の後に静的な参照として表示します。コードと参照先を保持し、動的ツールチップは使いません。日本語版の対象は利用ガイド13件で、その他205件のAPI・索引・ソース参照は英語原文です。詳しい情報はリンク先の原典を参照してください。')
 sourcePath=next(g['sourcePath']for g in json.loads((N/'regeneration/ROUTES.json').read_text())['guides']if g['id']==f'01-guide/{name}.md')
 context[0]['html']+=f'<p>RapidJSON 1.1.0の非公式日本語訳。<a href="https://github.com/Tencent/rapidjson/blob/f54b0e47a08782a6131cc3d60f94d038fa6e0a51/{sourcePath}">固定した原典</a> · <a href="/docs/rapidjson/v1-1-0/en/01-guide/{name}/">Libxの英語原文</a>。コード内のコメントと識別子、画像内の文字は原文を保持しています。</p>'
 context[1]['html']+='<p>固定版に含まれる当時の記述を翻訳しています。原文の誤記・説明不足やコードの未実行箇所をLibxによる技術保証に置き換えていません。追加の情報は原典とAPI原文参照で補ってください。</p>'
 if name=='06-stream':context[1]['html']+='<p>原文のOStreamWrapperの説明には「input stream」、末尾のostreamラッパーの紹介には「std::istream」とあります。また、FileWriteStreamの生成説明には入力・fread()の記述があります。訳文とコードはこれらの原文表記を保持しています。出力処理の具体的な利用方法は固定ソースとAPI原文を参照してください。</p>'
 front=re.sub(r'^title: .*$',lambda m:'title: '+json.dumps(title,ensure_ascii=False),front,flags=re.M);front=re.sub(r'^documentContext: .*$',lambda m:'documentContext: '+json.dumps(context,ensure_ascii=False),front,flags=re.M)
 result='---\n'+front+'---\n\n'+str(soup).strip().replace('\n','&#10;')+'\n'
 for out in [N/f'drafts/ja/01-guide/{name}.md',N/f'translations/ja/01-guide/{name}.md',A/f'src/content/docs/v1-1-0/ja/01-guide/{name}.md']:out.parent.mkdir(parents=True,exist_ok=True);out.write_text(result)
 rows.append({'id':f'01-guide/{name}.md','sha256':hashlib.sha256(result.encode()).hexdigest(),'units':len(u),'status':'draft-not-reviewed'})
 (E/f'{name}-review-pairs.json').write_text(json.dumps([{'n':r['n'],'source':r['text'],'tokens':r['tokens'],'ja':d['ja']}for(el,nodes,r),d in zip(u,draft['sentences'])],ensure_ascii=False,indent=2)+'\n')
 (E/f'{name}-review-readable.txt').write_text('\n'.join(f"{i+1}\t{a.get_text()}"for i,a in enumerate(soup.select('h1,h2,h3,h4,h5,h6,p,li,td,th,.ttdoc'))if a.get_text().strip() and not a.find_parent(class_='line'))+'\n')
print('Saved four Japanese drafts; separate full review/build pending')
(E/'DRAFTS.json').write_text(json.dumps({'status':'draft-not-reviewed','pages':rows,'newBatchDrafts':len(rows),'priorReviewedGuides':9,'remainingUnreviewedGuides':4,'scope':'all prose and static ttdoc descriptions; original code/identifiers/image text preserved'},ensure_ascii=False,indent=2)+'\n')
