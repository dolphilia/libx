from pathlib import Path
import re,json
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');n=r/'docs/notes/document-import/xxhash/v0-8-4'
for num,name in [('25','canonical__t'),('26','state__s')]:
 slug=f'02-api/{num}-struct_x_x_h32__{name}';s=(w/f'apps/xxhash/src/content/docs/v0-8-4/en/{slug}.md').read_text();body,foot=s.split('## Source and notices')
 m={'&#10;Data Fields':'&#10;データフィールド','Field Documentation':'フィールドの説明','The documentation for this struct was generated from the following file:':'この構造体の文書は、次のファイルから生成しました：'}
 if num=='25':
  m.update({'Canonical (big endian) representation of':'正規（ビッグエンディアン）表現の対象：','More...':'詳細…','Detailed Description':'詳細説明','Hash bytes, big endian':'ハッシュのバイト列。ビッグエンディアン。'})
  title='XXH32_canonical_t構造体（公開API・XXH32ファミリー）';old='XXH32_canonical_t Struct ReferencePublic API » XXH32 family'
 else:
  m.update({'Total length hashed, modulo 2^32':'ハッシュ化した全体の長さを2^32で割った余り。','Whether the hash is &gt;= 16 (handles':'ハッシュが16以上かどうか（','overflow)':'のオーバーフローを扱います）。','Accumulator lanes':'アキュムレーターのレーン。','Internal buffer for partial reads.':'部分的な読み込み用の内部バッファー。','Amount of data in':'データ量の対象：','Reserved field. Do not read nor write to it.':'予約フィールド。読み取りも書き込みもしないでください。'})
  title='XXH32_state_s構造体';old='XXH32_state_s Struct Reference'
 parts=re.split(r'(<[^>]*>)',body);used=set()
 for i in range(0,len(parts),2):
  x=parts[i].strip()
  if x in m:parts[i]=parts[i].replace(x,m[x]);used.add(x)
 assert set(m)==used
 body=''.join(parts).replace(old,title)
 if num=='26':body+='\n編集注記：`large_len`の原文は「ハッシュが16以上かどうか」と表現しています。固定ソースの更新処理では、今回の入力長`len`または累積長`total_len_32`が16以上の場合に、このフラグを立てます。これはハッシュ値の大小を判定するものではありません。\n\n'
 assert foot==(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1]
 jfoot=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1]
 label='canonical'if num=='25'else'state';p=n/f'drafts/ja/{num}-api-32-{label}.reviewed-content.md';assert not p.exists();p.write_text((body+'## 出典と通知'+jfoot).replace('/v0-8-4/en/','/v0-8-4/ja/'))
 Path(f'/private/tmp/libx-struct32-{num}-labels-530.json').write_text(json.dumps({'labels':{'More...':'詳細…'}if num=='25'else{},'titles':{}}))
