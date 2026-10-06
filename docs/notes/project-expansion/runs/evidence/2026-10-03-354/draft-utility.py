from pathlib import Path
import re
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');s=(app/'src/content/docs/v1-3-2/en/01-api/05-utility.md').read_text().replace('title: "Utility functions"','title: "ユーティリティ関数"').replace('> utility functions </h2>','> ユーティリティ関数 </h2>')
provenance=re.search(r'<aside data-editorial="provenance">.*?</aside>',(app/'src/content/docs/v1-3-2/ja/01-api/03-basic.md').read_text(),re.S)[0]
s=re.sub(r'<aside data-editorial="provenance">.*?</aside>',lambda m:provenance,s,flags=re.S)
p={98:'''
     以下のユーティリティ関数は、基本的なストリーム指向の関数を使って実装しています。
   インターフェイスを簡単にするため、圧縮レベル、メモリ使用量、標準のメモリ確保関数には
   既定のオプションを想定しています。特別なオプションが必要なら、これらの関数のソースコードを
   変更できます。関数の_z版は、長さにsize_t型を使います。Windowsではlongが32ビットであることに
   注意してください。
''',100:'''
     元バッファーを宛先バッファーへ圧縮します。sourceLenは元バッファーのバイト長です。
   呼び出し時のdestLenは宛先バッファーの総サイズであり、少なくとも
   <a href="./#compressBound">compressBound</a>(sourceLen)の戻り値以上でなければなりません。戻る際のdestLenは、
   圧縮データの実際のサイズです。<a href="./#compress">compress</a>()は、levelにZ_DEFAULT_COMPRESSIONを
   指定した<a href="./#compress2">compress2</a>()と同等です。

     <a href="./#compress">compress</a>は、成功時にZ_OK、メモリ不足時にZ_MEM_ERROR、出力バッファーの
   空きが足りなければZ_BUF_ERRORを返します。
''',102:'''
     元バッファーを宛先バッファーへ圧縮します。levelの意味は<a href="../03-basic/#deflateInit">deflateInit</a>と同じです。
   sourceLenは元バッファーのバイト長です。呼び出し時のdestLenは宛先バッファーの総サイズであり、
   少なくとも<a href="./#compressBound">compressBound</a>(sourceLen)の戻り値以上でなければなりません。
   戻る際のdestLenは圧縮データの実際のサイズです。

     <a href="./#compress2">compress2</a>は、成功時にZ_OK、メモリ不足時にZ_MEM_ERROR、出力バッファーの
   空きが足りなければZ_BUF_ERROR、levelが不正ならZ_STREAM_ERRORを返します。
''',104:'''
     <a href="./#compressBound">compressBound</a>()は、sourceLenバイトに<a href="./#compress">compress</a>()または<a href="./#compress2">compress2</a>()を適用した後の
   圧縮サイズの上限を返します。宛先バッファーを確保するために、<a href="./#compress">compress</a>()または
   <a href="./#compress2">compress2</a>()より前に呼び出します。
''',106:'''
     元バッファーを宛先バッファーへ展開します。sourceLenは元バッファーのバイト長です。
   呼び出し時の*destLenは宛先バッファーの総サイズであり、展開データ全体を保持できるだけの
   大きさが必要です。（非圧縮データのサイズは、圧縮側が事前に保存し、この圧縮ライブラリの
   範囲外の仕組みで展開側へ伝えておかなければなりません。）戻る際の*destLenは、
   展開データの実際のサイズです。

     <a href="./#uncompress">uncompress</a>は、成功時にZ_OK、メモリ不足時にZ_MEM_ERROR、出力バッファーの
   空きが足りなければZ_BUF_ERROR、入力データが破損しているか不完全ならZ_DATA_ERRORを返します。
   空きが足りない場合、<a href="./#uncompress">uncompress</a>()はその時点までの展開データで出力バッファーを満たします。
''',108:'''
     uncompressと同じですが、sourceLenがポインターであり、元データの長さは*sourceLenです。
   戻る際の*sourceLenは、消費した元データのバイト数です。
'''}
for k,v in p.items():
 pat=rf'(<div data-zlib-block="{k}"><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)';s,n=re.subn(pat,lambda m:m[1]+v+m[2],s,flags=re.S);assert n==1,k
f=app/'src/content/docs/v1-3-2/ja/01-api/05-utility.md';assert not f.exists();f.write_text(s);print(f)
