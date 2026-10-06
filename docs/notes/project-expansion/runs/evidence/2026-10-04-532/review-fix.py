from pathlib import Path
import re
n=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4/drafts/ja')
p=n/'28-api-64-canonical.reviewed-content.md';s=p.read_text();s,k=re.subn(r'正規（ビッグエンディアン）表現の対象： (<a[^>]*>XXH64_hash_t</a>)\.',r'\1の正規（ビッグエンディアン）表現。',s);assert k==2;p.write_text(s)
p=n/'29-api-64-state.reviewed-content.md';s=p.read_text();s,k=re.subn(r'データ量の対象： (<a[^>]*>buffer</a>)',r'\1内のデータ量。',s);assert k==1;p.write_text(s)
