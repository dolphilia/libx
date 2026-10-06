from pathlib import Path
import re
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');s=(app/'src/content/docs/v1-3-2/en/01-api/07-checksum.md').read_text().replace('title: "Checksum functions"','title: "チェックサム関数"').replace('> checksum functions </h2>','> チェックサム関数 </h2>')
provenance=re.search(r'<aside data-editorial="provenance">.*?</aside>',(app/'src/content/docs/v1-3-2/ja/01-api/05-utility.md').read_text(),re.S)[0];s=re.sub(r'<aside data-editorial="provenance">.*?</aside>',lambda m:provenance+'<aside data-editorial="source-note"><p>原資料についての注記：crc32_combine_opの説明には「op is is」という重複があります。日本語では意味を保って訳しています。</p></aside>',s,flags=re.S)
p={166:'''
     これらの関数は圧縮とは関係ありませんが、圧縮ライブラリを使うアプリケーションで
   役立つ可能性があるため、エクスポートしています。
''',168:'''
     buf[0..len-1]のバイトで継続中のAdler-32チェックサムを更新し、更新後のチェックサムを
   返します。Adler-32値は32ビット符号なし整数の範囲内です。bufがZ_NULLなら、
   チェックサムに必要な初期値を返します。

     Adler-32チェックサムはCRC-32とほぼ同程度の信頼性があり、はるかに速く計算できます。

   使用例：
''',170:'''
     <a href="./#adler32">adler32</a>()と同じですが、長さはsize_tです。Windowsではlongが32ビットであることに
   注意してください。
''',172:'''

     2つのAdler-32チェックサムを1つへ結合します。長さlen1、len2のバイト列seq1、seq2に対し、
   それぞれadler1、adler2を計算したとします。<a href="./#adler32_combine">adler32_combine</a>()はadler1、adler2、len2だけを
   使い、seq1とseq2を連結した列のAdler-32チェックサムを返します。z_off_tはoff_tと同様、
   符号付き整数です。len2が負なら、結果には意味も用途もありません。
''',174:'''
     buf[0..len-1]のバイトで継続中のCRC-32を更新し、更新後のCRC-32を返します。
   CRC-32値は32ビット符号なし整数の範囲内です。bufがZ_NULLなら、CRCに必要な初期値を
   返します。前処理と後処理（1の補数）は関数内で行うため、アプリケーションでは
   行うべきではありません。

   使用例：
''',176:'''
     <a href="./#crc32">crc32</a>()と同じですが、長さはsize_tです。Windowsではlongが32ビットであることに
   注意してください。
''',178:'''

     2つのCRC-32チェック値を1つへ結合します。長さlen1、len2のバイト列seq1、seq2に対し、
   それぞれcrc1、crc2を計算したとします。<a href="./#crc32_combine">crc32_combine</a>()はcrc1、crc2、len2だけを使い、
   seq1とseq2を連結した列のCRC-32チェック値を返します。len2は非負でなければならず、
   そうでなければ0を返します。
''',180:'''

     <a href="./#crc32_combine_op">crc32_combine_op</a>()で使う、長さlen2に対応する演算子を返します。
   len2は非負でなければならず、そうでなければ0を返します。
''',182:'''
     len2の代わりにopを使って、<a href="./#crc32_combine">crc32_combine</a>()と同じ結果を返します。
   opは<a href="./#crc32_combine_gen">crc32_combine_gen</a>()がlen2から生成します。生成したopを複数回使う場合には、
   <a href="./#crc32_combine">crc32_combine</a>()より速くなります。
'''}
for k,v in p.items():
 if k in (168,174):pat=rf'(<div data-zlib-block="{k}"><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div><pre><code>)'
 elif k in (172,178,180):pat=rf'(<div data-zlib-block="{k}">.*?</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)'
 else:pat=rf'(<div data-zlib-block="{k}"><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)'
 s,n=re.subn(pat,lambda m:m[1]+v+m[2],s,flags=re.S);assert n==1,k
f=app/'src/content/docs/v1-3-2/ja/01-api/07-checksum.md';assert not f.exists();f.write_text(s);print(f)
