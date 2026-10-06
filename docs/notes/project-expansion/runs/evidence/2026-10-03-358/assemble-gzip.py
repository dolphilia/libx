from pathlib import Path
import re,json,hashlib
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');d=app/'meta/translation-drafts';review=json.loads((d/'06-gzip-fragment-review.json').read_text())
assert hashlib.sha256((app/review['canonical']).read_bytes()).hexdigest()==review['canonicalSHA256']
parts=[]
for f in review['fragments']:
 s=(app/f['draft']).read_text();assert hashlib.sha256(s.encode()).hexdigest()==f['sha256']
 body=s.split('<div class="zlib-document"',1)[1].split('>',1)[1];assert body.rstrip().endswith('</div>');parts.append(body.rstrip()[:-6])
first=(d/'06-gzip-110-128.md').read_text();provenance=re.search(r'<aside data-editorial="provenance">.*?</aside>',first,re.S)[0]
notes='<aside data-editorial="source-note"><p>原資料についての注記：gzopenの原文にはENONBLOCKと記載されており、その表記を保持しています。gzgetcのノンブロッキングに関する段落では、再試行先としてgzreadを記載しています。原文どおり保持しています。</p></aside>'
out='---\ntitle: "gzipファイルアクセス関数"\nlicenseSource: zlib-api\ntoc:\n  maxLevel: 6\n---\n\n'+provenance+notes+'\n<div class="zlib-document" style="overflow-wrap:anywhere">'+''.join(parts)+'</div>\n'
p=app/'src/content/docs/v1-3-2/ja/01-api/06-gzip.md';assert not p.exists();p.write_text(out)
print(p)
