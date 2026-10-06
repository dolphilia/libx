from pathlib import Path
import re
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');en=app/'src/content/docs/v1-3-2/en/01-api/02-constants.md';s=en.read_text().replace('title: "Constants"','title: "定数"')
prose={8:' 定数 ',10:' 使用できるフラッシュ値です。詳細は後述の<a href="../03-basic/#deflate">deflate</a>()と<a href="../03-basic/#inflate">inflate</a>()を参照してください。 ',12:' 圧縮・展開関数の戻り値コードです。負の値はエラーを表し、\n 正の値は特殊ですが正常な事象に使われます。\n ',14:' 圧縮レベル ',16:' 圧縮方針です。詳細は後述の<a href="../04-advanced/#deflateInit2">deflateInit2</a>()を参照してください。 ',18:' <a href="../03-basic/#deflate">deflate</a>()におけるdata_typeフィールドの取り得る値です。 ',20:' deflate圧縮方式です（この版が対応する唯一の方式です）。 ',22:' 1.0.2より前のバージョンとの互換性のための定義です。 '}
for k,v in prose.items():
 pat=rf'(<div data-zlib-block="{k}"><(?:h2[^>]*|div[^>]*)>).*?(</(?:h2|div)></div>)'
 s,n=re.subn(pat,lambda m:m[1]+v+m[2],s,flags=re.S);assert n==1
s=s.replace('/* for compatibility with 1.2.2 and earlier */','/* 1.2.2以前との互換性のため */').replace('/* for initializing zalloc, zfree, opaque */','/* zalloc、zfree、opaqueの初期化用 */')
# Same original zlib.h provenance as the already reviewed overview translation.
jo=(app/'src/content/docs/v1-3-2/ja/01-api/01-overview.md').read_text();provenance=re.search(r'<aside data-editorial="provenance">.*?</aside>',jo,re.S)[0]
s=re.sub(r'<aside data-editorial="provenance">.*?</aside>',lambda m:provenance,s,flags=re.S)
# Here the original notices are retained in upstream and the translated overview; no license text belongs to these sixteen blocks.
s=s.replace('原文の通知は固定原資料と下記の英語原文に保持しています。','原文の通知は固定原資料と<a href="../01-overview/">概要ページの英語原文</a>に保持しています。')
f=app/'src/content/docs/v1-3-2/ja/01-api/02-constants.md';f.write_text(s);print(f)
