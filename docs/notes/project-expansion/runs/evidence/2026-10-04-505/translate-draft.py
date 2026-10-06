from pathlib import Path
import re,json,hashlib
root=Path('/Users/dolphilia/github/libx');note=root/'docs/notes/document-import/xxhash/v0-8-4';w=Path('/private/tmp/libx-xxhash-import-20261003');mp=json.loads((note/'CONTENT_MAP.json').read_text());it=next(x for x in mp['items'] if x['slug']=='02-api/12-group___x_x_h32__family');en=w/it['canonical'];s=en.read_text();body,footer=s.split('## Source and notices');expected=(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1];assert footer==expected
body=body.replace('title: "XXH32 family Public API"','title: "XXH32ファミリーの公開API"')
# Translate complete descriptions while keeping original inline API tags, in their original order.
paragraphs={
'Calculates the 32-bit hash of':('xxHash32を使って、','using xxHash32.','の32ビットハッシュを計算します。'),
'Allocates an':('','.', 'を割り当てます。'),
'Frees an':('','.', 'を解放します。'),
'Copies one':('','to another.', 'を別の状態へコピーします。'),
'Resets an':('','to begin a new hash.', 'をリセットして、新しいハッシュ処理を開始します。'),
'Consumes a block of':('',None,None),
'Returns the calculated hash value from an':('','.', 'から計算済みのハッシュ値を返します。'),
'Converts an':('',None,None),
'Canonical (big endian) representation of':('','.', 'の正規（ビッグエンディアン）表現。')}
counts={}
def translate_paragraph(m):
 full=m[0];inside=m[1];nodes=re.split(r'(<[^>]*>)',inside);texts=[i for i,x in enumerate(nodes)if i%2==0 and x.strip()];first=nodes[texts[0]].strip() if texts else ''
 if first not in paragraphs:return full
 prefix,ending,newend=paragraphs[first];nodes[texts[0]]=nodes[texts[0]].replace(first,prefix)
 if first=='Consumes a block of':
  for i in texts:
   if nodes[i].strip()=='to an':nodes[i]=nodes[i].replace('to an','を、')
  nodes[texts[-1]]=nodes[texts[-1]].replace('.','に取り込みます。')
 elif first=='Converts an':
  for i in texts:
   if nodes[i].strip()=='to a big endian':nodes[i]=nodes[i].replace('to a big endian','を、ビッグエンディアンの')
   if nodes[i].strip()=='to a native':nodes[i]=nodes[i].replace('to a native','を、ネイティブ形式の')
  nodes[texts[-1]]=nodes[texts[-1]].replace('.','へ変換します。')
 else:
  assert nodes[texts[-1]].strip()==ending,(first,nodes[texts[-1]])
  nodes[texts[-1]]=nodes[texts[-1]].replace(ending,newend)
 counts[first]=counts.get(first,0)+1
 return '<p>'+''.join(nodes)+'</p>'
# Some Doxygen brief descriptions use a table td rather than p; handle identical complete description units too.
body=re.sub(r'<p>([\s\S]*?)</p>',translate_paragraph,body)
# Brief descriptions with trailing "More..." cannot be transformed as standalone paragraphs; leave pending.
headers={'&#10;Data Structures':'&#10;データ構造','&#10;Typedefs':'&#10;型定義','&#10;Functions':'&#10;関数','Detailed Description':'詳細説明','Typedef Documentation':'型定義の説明','Function Documentation':'関数の説明','Contains functions used in the classic 32-bit xxHash algorithm.':'従来の32ビットxxHashアルゴリズムで使う関数を含みます。','The opaque state struct for the XXH32 streaming API.':'XXH32ストリーミングAPI用の不透明な状態構造体。'}
parts=re.split(r'(<[^>]*>)',body)
for i in range(0,len(parts),2):
 value=parts[i].strip()
 if value in headers:parts[i]=parts[i].replace(value,headers[value])
body=''.join(parts)
footer=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1]
out=note/'drafts/ja/12-api-xxh32-family.descriptions-unreviewed.md';assert not out.exists();out.write_text((body+'## 出典と通知'+footer).replace('/v0-8-4/en/','/v0-8-4/ja/'))
print({'draft':str(out),'paragraphTranslations':counts,'wholePageCompleted':False})
