from pathlib import Path
import re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4/drafts/ja/18-api-dispatch.reviewed-content.md');s=p.read_text()
for isa in ['AVX2','AVX512']:
 s,n=re.subn(r'次のマクロと同様ですが： (<a\b[^>]*>XXH_TARGET_SSE2</a>)'+isa+'向けです。',r'\1と同様ですが、'+isa+'向けです。',s);assert n==1
p.write_text(s)
print('XXH_TARGET_SSE2と同様ですが、AVX2/AVX512向けです（各一覧項目を修正）。')
s=Path('/private/tmp/libx-xxh64-machine-523.py').read_text().replace('17-group___x_x_h64__impl','18-group__dispatch').replace('17-api-xxh64-impl.reviewed-content.md','18-api-dispatch.reviewed-content.md').replace('libx-xxh64-labels-523','libx-dispatch-labels-524').replace('api-523','api-524');Path('/private/tmp/libx-dispatch-machine-524.py').write_text(s)
