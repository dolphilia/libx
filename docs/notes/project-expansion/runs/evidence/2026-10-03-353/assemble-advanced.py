from pathlib import Path
import re,json,hashlib
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');d=app/'meta/translation-drafts';review=json.loads((d/'04-advanced-fragment-review.json').read_text())
assert hashlib.sha256((app/review['canonical']).read_bytes()).hexdigest()==review['canonicalSHA256']
parts=[]
for f in review['fragments']:
 s=(app/f['draft']).read_text();assert hashlib.sha256(s.encode()).hexdigest()==f['sha256']
 body=s.split('<div class="zlib-document"',1)[1].split('>',1)[1];assert body.rstrip().endswith('</div>');parts.append(body.rstrip()[:-6])
first=(d/'04-advanced-40-52.md').read_text();provenance=re.search(r'<aside data-editorial="provenance">.*?</aside>',first,re.S)[0]
notes='<aside data-editorial="source-note"><p>原資料についての注記：deflateBound_zの宣言名は、コメントの1箇所ではdelfateBound_zと誤記されています。inflateInit2にはヘッダーを読み込む可能性の説明と、現在の実装はinflateまで処理を遅延するという説明があり、両方を保持しています。「much each」は原文の誤記です。deflateTuneは内部の調整に関する詳細をdeflate.cへ委ねており、この文書ではその詳細を創作していません。deflateSetHeaderのコメントではxflag、gz_headerのフィールド名ではxflagsとなっており、両方の原文表記を保持しています。</p></aside>'
out='---\ntitle: "高度な関数"\nlicenseSource: zlib-api\ntoc:\n  maxLevel: 6\n---\n\n'+provenance+notes+'\n<div class="zlib-document" style="overflow-wrap:anywhere">'+''.join(parts)+'</div>\n'
p=app/'src/content/docs/v1-3-2/ja/01-api/04-advanced.md';assert not p.exists();p.write_text(out)
print(p)
