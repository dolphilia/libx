from pathlib import Path
import re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4/drafts/ja/27-api-3-state.reviewed-content.md');s=p.read_text();s,k=re.subn(r'メモリー量の対象： (<a[^>]*>buffer</a>),',r'\1内のメモリー量。',s);assert k==1
s,k=re.subn(r'サイズの対象： (<a[^>]*>customSecret</a> または <a[^>]*>extSecret</a>)',r'\1のサイズ。',s);assert k==1;p.write_text(s)
