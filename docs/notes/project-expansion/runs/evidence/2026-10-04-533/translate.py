from pathlib import Path
import re,json
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');n=r/'docs/notes/document-import/xxhash/v0-8-4';s=(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/30-topics.md').read_text();body,foot=s.split('## Source and notices')
labels={'x86 Dispatcher':'x86ディスパッチャー','Public API':'公開API','XXH32 family':'XXH32ファミリー','XXH64 family':'XXH64ファミリー','XXH3 family':'XXH3ファミリー','Tuning parameters':'チューニングパラメーター','Implementation':'実装','XXH32 implementation':'XXH32の実装','XXH64 implementation':'XXH64の実装','XXH3 implementation':'XXH3の実装'};m={**labels,'Here is a list of all topics with brief descriptions:':'全トピックと簡単な説明の一覧です：'}
parts=re.split(r'(<[^>]*>)',body);used=set()
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.add(x)
assert set(m)==used;body=''.join(parts).replace('title: "Topics"','title: "トピック"')
assert foot==(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1]
jfoot=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1]
p=n/'drafts/ja/30-api-topics.reviewed-content.md';assert not p.exists();p.write_text((body+'## 出典と通知'+jfoot).replace('/v0-8-4/en/','/v0-8-4/ja/'));Path('/private/tmp/libx-topics-labels-533.json').write_text(json.dumps({'labels':labels,'titles':{}}))
