from pathlib import Path
import json,re
root=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');note=root/'docs/notes/document-import/xxhash/v0-8-4';s=(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/17-group___x_x_h64__impl.md').read_text();body,foot=s.split('## Source and notices');m={'&#10;Macros':'&#10;マクロ','&#10;Functions':'&#10;関数','Detailed Description':'詳細説明','Details on the XXH64 implementation.':'XXH64実装の詳細。','Macro Definition Documentation':'マクロ定義の説明','Value:':'値：'};parts=re.split(r'(<[^>]*>)',body);used=[]
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.append(x)
assert set(m)==set(used);body=''.join(parts).replace('title: "XXH64 implementation Implementation"','title: "XXH64の実装"');assert foot==(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1];jfoot=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1];out=note/'drafts/ja/17-api-xxh64-impl.reviewed-content.md';assert not out.exists();out.write_text((body+'## 出典と通知'+jfoot).replace('/v0-8-4/en/','/v0-8-4/ja/'));Path('/private/tmp/libx-xxh64-labels-523.json').write_text(json.dumps({'labels':{},'titles':{}}))
