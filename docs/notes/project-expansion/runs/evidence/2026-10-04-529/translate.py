from pathlib import Path
import re,json
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');n=r/'docs/notes/document-import/xxhash/v0-8-4'
for num,name in [('23','canonical'),('24','hash')]:
 slug=f'02-api/{num}-struct_x_x_h128__{name}__t';s=(w/f'apps/xxhash/src/content/docs/v0-8-4/en/{slug}.md').read_text();body,foot=s.split('## Source and notices')
 m={'&#10;Data Fields':'&#10;データフィールド','The documentation for this struct was generated from the following file:':'この構造体の文書は、次のファイルから生成しました：'}
 if name=='hash':m.update({'The return value from 128-bit hashes.  &#10;':'128ビットハッシュの戻り値。  &#10;','The return value from 128-bit hashes.':'128ビットハッシュの戻り値。','More...':'詳細…','Detailed Description':'詳細説明','Stored in little endian order, although the fields themselves are in native endianness.':'リトルエンディアンの順序で格納しますが、各フィールド自体はネイティブのエンディアンです。','Field Documentation':'フィールドの説明'})
 parts=re.split(r'(<[^>]*>)',body);used=set()
 for i in range(0,len(parts),2):
  x=parts[i].strip()
  if x in m:parts[i]=parts[i].replace(x,m[x]);used.add(x)
 assert set(m)==used
 body=''.join(parts).replace(f'XXH128_{name}_t Struct ReferencePublic API » XXH3 family',f'XXH128_{name}_t構造体（公開API・XXH3ファミリー）')
 assert foot==(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1]
 jfoot=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1]
 p=n/f'drafts/ja/{num}-api-128-{name}.reviewed-content.md';assert not p.exists();p.write_text((body+'## 出典と通知'+jfoot).replace('/v0-8-4/en/','/v0-8-4/ja/'))
 Path(f'/private/tmp/libx-struct128-{num}-labels-529.json').write_text(json.dumps({'labels':{'More...':'詳細…'}if name=='hash'else{},'titles':{}}))
