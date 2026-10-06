from pathlib import Path
import re
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');src=(app/'src/content/docs/v1-3-2/en/01-api/04-advanced.md').read_text();part='<div data-zlib-block="87"'+src.split('<div data-zlib-block="87"',1)[1]
s='---\ntitle: "高度な関数：翻訳中（ブロック87〜95）"\n---\n\n<aside data-editorial="draft-status"><p>ブロック87〜95の原稿です。章全体の注記と正式ページへの組み立て・全文レビューは未完了で、公開ルートから除外しています。</p></aside>\n<div class="zlib-document">'+part
p={88:'''

     <a href="./#inflateBack">inflateBack</a>()呼び出しによる展開のために、内部ストリーム状態を初期化します。
   呼び出し前にstrmのzalloc、zfree、opaqueを初期化しなければなりません。
   zallocとzfreeがZ_NULLなら、ライブラリが提供する既定のメモリ確保ルーチンを使います。
   windowBitsはウィンドウサイズの底2の対数で、範囲は8〜15です。windowは、そのサイズの
   呼び出し側が提供するバッファーです。小さなウィンドウサイズでdeflateを使用したと
   保証できる特別な用途を除き、一般的なdeflateストリームを展開できるように、windowBitsを15とし、
   32Kバイトのウィンドウを提供しなければなりません。

     これらのルーチンの使い方は<a href="./#inflateBack">inflateBack</a>()を参照してください。

     <a href="./#inflateBackInit">inflateBackInit</a>は、成功時にZ_OK、引数が不正な場合にZ_STREAM_ERROR、内部状態を
   確保できなかった場合にZ_MEM_ERROR、ライブラリの版とヘッダーファイルの版が一致しない場合に
   Z_VERSION_ERRORを返します。
''',90:'''
     <a href="./#inflateBack">inflateBack</a>()は、入出力のコールバックを使い、1回の呼び出しでraw inflateを行います。
   ウィンドウ自体を出力バッファーにすることで、出力とスライディングウィンドウの間のコピーを
   避けるため、ファイル入出力を行う用途では<a href="../03-basic/#inflate">inflate</a>()より効率的な可能性があります。
   現代のCPUでは、大きなバッファーを使う<a href="../03-basic/#inflate">inflate</a>()の方が速い場合があります。
   <a href="./#inflateBack">inflateBack</a>()は、少なくとも<a href="./#inflateBack">inflateBack</a>()が戻るまでは、アプリケーションが出力関数に渡される
   出力バッファーを変更しないものと信頼します。

     最初に<a href="./#inflateBackInit">inflateBackInit</a>()を呼び出して内部状態を確保し、利用者が提供するウィンドウ
   バッファーで状態を初期化しなければなりません。その後、<a href="./#inflateBack">inflateBack</a>()を複数回使えます。
   各呼び出しで完全なraw deflateストリームを1つ展開します。最後に<a href="./#inflateBackEnd">inflateBackEnd</a>()を
   呼び出して、確保した状態を解放します。

     raw deflateストリームにはzlibやgzipのヘッダー、トレーラーがありません。
   このルーチンは通常、zipやgzipファイルを読み、非圧縮ファイルを書き出すユーティリティで
   使います。ユーティリティ自身がヘッダーをデコードし、トレーラーを処理するため、このルーチンは
   展開対象としてraw deflateストリームだけを想定します。これは、deflateストリームの前後に
   zlibヘッダーとトレーラーを想定する<a href="../03-basic/#inflate">inflate</a>()の既定動作とは異なります。

     <a href="./#inflateBack">inflateBack</a>()は、呼び出し側が提供する入出力用の2つのサブルーチンを使い、
   <a href="./#inflateBack">inflateBack</a>()がそれらを呼び出します。
   完全なdeflateストリームを読み、すべての非圧縮データを書き出すか、エラーに遭遇するまで、
   <a href="./#inflateBack">inflateBack</a>()はそれらのルーチンを呼び出します。関数の引数と戻り値の型は、上の<a href="./#in_func">in_func</a>と<a href="./#out_func">out_func</a>の
   typedefで定義しています。<a href="./#inflateBack">inflateBack</a>()はin(in_desc, &amp;buf)を呼び出します。
   in()は、提供する入力のバイト数を返し、その入力へのポインターをbufへ設定するべきです。
   入力がなければin()は0を返さなければなりません。その場合bufは無視し、<a href="./#inflateBack">inflateBack</a>()は
   バッファーエラーを返します。<a href="./#inflateBack">inflateBack</a>()は非圧縮データbuf[0..len-1]を書き出すために
   out(out_desc, buf, len)を呼び出します。out()は成功時に0、失敗時に0以外を返すべきです。
   out()が0以外を返せば、<a href="./#inflateBack">inflateBack</a>()はエラーで戻ります。in()もout()も、
   <a href="./#inflateBackInit">inflateBackInit</a>()へ提供したウィンドウの内容を変更してはいけません。
   そのウィンドウは、out()が書き出すデータのバッファーでもあります。out()が書き出す長さは
   ウィンドウサイズ以下です。in()は0以外の任意の量の入力を提供できます。

     便宜上、strm-&gt;next_inとstrm-&gt;avail_inを設定して、<a href="./#inflateBack">inflateBack</a>()の最初の呼び出しに入力を渡せます。
   その入力を使い切るとin()を呼び出します。そのため、<a href="./#inflateBack">inflateBack</a>()の呼び出し前に
   strm-&gt;next_inを初期化しなければなりません。strm-&gt;next_inがZ_NULLなら、入力のために
   直ちにin()を呼び出します。Z_NULLでなければstrm-&gt;avail_inも初期化しなければなりません。
   strm-&gt;avail_inが0でなければ、最初はstrm-&gt;next_in[0 .. strm-&gt;avail_in - 1]から入力を取ります。

     <a href="./#inflateBack">inflateBack</a>()のin_descとout_descは、それぞれin()とout()を呼び出すときに
   最初の引数として渡します。必要に応じて、呼び出し側が提供するin()とout()の処理に必要な
   任意の情報を、この記述子を使って渡せます。

     戻る際、<a href="./#inflateBack">inflateBack</a>()はstrm-&gt;next_inとstrm-&gt;avail_inを設定して、最後のin()呼び出しが
   提供した未使用の入力を返します。<a href="./#inflateBack">inflateBack</a>()の戻り値は、成功時にZ_STREAM_END、in()やout()がエラーを
   返した場合にZ_BUF_ERROR、deflateストリームの形式エラー時にZ_DATA_ERROR（エラーの内容を
   示すようstrm-&gt;msgを設定）、ストリームが適切に初期化されていない場合にZ_STREAM_ERRORです。
   Z_BUF_ERRORの場合、strm-&gt;next_inで入力エラーと出力エラーを区別できます。
   in()がエラーを返した場合に限りZ_NULLになります。Z_NULLでなければ、out()が0以外を返した
   ことがZ_BUF_ERRORの原因です。（in()は常にout()より先に呼び出すため、out()が0以外を
   返す場合にはstrm-&gt;next_inが定義されていると保証できます。）<a href="./#inflateBack">inflateBack</a>()は
   Z_OKを返せないことに注意してください。
''',92:'''
     <a href="./#inflateBackInit">inflateBackInit</a>()が確保したすべてのメモリを解放します。

     <a href="./#inflateBackEnd">inflateBackEnd</a>()は、成功時にZ_OK、ストリーム状態が不整合ならZ_STREAM_ERRORを返します。
'''}
for k,v in p.items():
 pat=rf'(<div data-zlib-block="{k}">.*?</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)' if k==88 else rf'(<div data-zlib-block="{k}"><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)'
 s,n=re.subn(pat,lambda m:m[1]+v+m[2],s,flags=re.S);assert n==1,k
replacements={
' Return flags indicating compile-time options.':' コンパイル時のオプションを表すフラグを返します。',
'    Type sizes, two bits each, 00 = 16 bits, 01 = 32, 10 = 64, 11 = other:':'    型のサイズ（各2ビット）。00 = 16ビット、01 = 32、10 = 64、11 = その他：',
' size of uInt':' uIntのサイズ',' size of uLong':' uLongのサイズ',' size of voidpf (pointer)':' voidpf（ポインター）のサイズ',' size of z_off_t':' z_off_tのサイズ',
'    Compiler, assembler, and debug options:':'    コンパイラー、アセンブラー、デバッグのオプション：',
' ASMV or ASMINF -- use ASM code':' ASMVまたはASMINF — アセンブリコードを使用',
' ZLIB_WINAPI -- exported functions use the WINAPI calling convention':' ZLIB_WINAPI — エクスポート関数はWINAPI呼び出し規約を使用',
' 0 (reserved)':' 0（予約済み）',
'    One-time table building (smaller code, but not thread-safe if true):':'    1回だけのテーブル構築（コードは小さくなるが、真ならスレッドセーフではない）：',
' BUILDFIXED -- build static block decoding tables when needed':' BUILDFIXED — 必要時に静的ブロックのデコード用テーブルを構築',
' DYNAMIC_CRC_TABLE -- build CRC calculation tables when needed':' DYNAMIC_CRC_TABLE — 必要時にCRC計算用テーブルを構築',
'    Library content (indicates missing functionality):':'    ライブラリの内容（欠けている機能を示す）：',
' NO_GZCOMPRESS -- gz* functions cannot compress (to avoid linking\n                          deflate code when not needed)':' NO_GZCOMPRESS — gz*関数では圧縮できない（不要な場合に\n                          deflateコードのリンクを避けるため）',
' NO_GZIP -- deflate can&#x27;t write gzip streams, and inflate can&#x27;t detect\n                    and decode gzip streams (to avoid linking crc code)':' NO_GZIP — deflateはgzipストリームを書き出せず、inflateはgzipストリームの\n                    検出・デコードができない（crcコードのリンクを避けるため）',
'    Operation variations (changes in library functionality):':'    動作の変種（ライブラリ機能の変更）：',
' PKZIP_BUG_WORKAROUND -- slightly more permissive inflate':' PKZIP_BUG_WORKAROUND — inflateを少し寛容にする',
' FASTEST -- deflate algorithm with only one, lowest compression level':' FASTEST — 最低の圧縮レベル1つだけを使うdeflateアルゴリズム',
'    The sprintf variant used by <a href="../06-gzip/#gzprintf">gzprintf</a> (all zeros is best):':'    <a href="../06-gzip/#gzprintf">gzprintf</a>が使用するsprintfの変種（すべて0が最良）：',
' 0 = vs*, 1 = s* -- 1 means limited to 20 arguments after the format':' 0 = vs*、1 = s* — 1なら書式の後の引数は20個まで',
' 0 = *nprintf, 1 = *printf -- 1 means <a href="../06-gzip/#gzprintf">gzprintf</a>() is not secure!':' 0 = *nprintf、1 = *printf — 1なら<a href="../06-gzip/#gzprintf">gzprintf</a>()は安全ではない！',
' 0 = returns value, 1 = void -- 1 means inferred string length returned':' 0 = 値を返す、1 = void — 1なら推定した文字列長を返す',
' 0 = <a href="../06-gzip/#gzprintf">gzprintf</a>() present, 1 = not -- 1 means <a href="../06-gzip/#gzprintf">gzprintf</a>() returns an error':' 0 = <a href="../06-gzip/#gzprintf">gzprintf</a>()あり、1 = なし — 1なら<a href="../06-gzip/#gzprintf">gzprintf</a>()はエラーを返す',
'    Remainder:':'    残り：'}
for en,ja in replacements.items():
 assert en in s,en
 s=s.replace(en,ja)
f=app/'meta/translation-drafts/04-advanced-87-95.md';f.write_text(s);print(f)
