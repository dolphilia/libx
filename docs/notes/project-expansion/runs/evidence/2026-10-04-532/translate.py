from pathlib import Path
import re,json
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');n=r/'docs/notes/document-import/xxhash/v0-8-4'
for num,name,label in [('28','canonical__t','canonical'),('29','state__s','state')]:
 s=(w/f'apps/xxhash/src/content/docs/v0-8-4/en/02-api/{num}-struct_x_x_h64__{name}.md').read_text();body,foot=s.split('## Source and notices')
 m={'&#10;Data Fields':'&#10;データフィールド','The documentation for this struct was generated from the following file:':'この構造体の文書は、次のファイルから生成しました：'}
 if num=='28':
  m.update({'Canonical (big endian) representation of':'正規（ビッグエンディアン）表現の対象：','More...':'詳細…','Detailed Description':'詳細説明'});old='XXH64_canonical_t Struct ReferencePublic API » XXH64 family';title='XXH64_canonical_t構造体（公開API・XXH64ファミリー）'
 else:
  m.update({'Field Documentation':'フィールドの説明','Total length hashed. This is always 64-bit.':'ハッシュ化した全体の長さ。常に64ビットです。','Accumulator lanes':'アキュムレーターのレーン。','Internal buffer for partial reads..':'部分的な読み込み用の内部バッファー。','Amount of data in':'データ量の対象：','Reserved field, needed for padding anyways':'予約フィールド。いずれにしてもパディングに必要です。','Reserved field. Do not read or write to it.':'予約フィールド。読み取りも書き込みもしないでください。'});old='XXH64_state_s Struct Reference';title='XXH64_state_s構造体'
 parts=re.split(r'(<[^>]*>)',body);used=set()
 for i in range(0,len(parts),2):
  x=parts[i].strip()
  if x in m:parts[i]=parts[i].replace(x,m[x]);used.add(x)
 assert used==set(m);body=''.join(parts).replace(old,title)
 assert foot==(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1]
 jfoot=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1]
 p=n/f'drafts/ja/{num}-api-64-{label}.reviewed-content.md';assert not p.exists();p.write_text((body+'## 出典と通知'+jfoot).replace('/v0-8-4/en/','/v0-8-4/ja/'))
 Path(f'/private/tmp/libx-struct64-{num}-labels-532.json').write_text(json.dumps({'labels':{'More...':'詳細…'}if num=='28'else{},'titles':{}}))
