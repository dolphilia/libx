---
title: "高度な関数：翻訳中（ブロック65〜74）"
---

<aside data-editorial="draft-status"><p>ブロック65〜74の原稿です。章全体は未完了で、公開ルートから除外しています。</p></aside><aside data-editorial="source-note"><p>原文コメントのxflagと構造体のxflagsを区別して保持しています。inflateInit2にはヘッダーを読み込む可能性の説明と、現在の実装では処理を遅延する説明が併存しています。両方を保持しています。</p></aside>
<div class="zlib-document"><a id="deflateSetHeader" data-editorial="anchor"></a><h3 id="nav-65" data-editorial="navigation">deflateSetHeader</h3><div data-zlib-block="65"><pre><code>

ZEXTERN int ZEXPORT deflateSetHeader(z_streamp strm,
                                     gz_headerp head);
</code></pre></div><div data-zlib-block="66"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="./#deflateSetHeader">deflateSetHeader</a>()は、<a href="./#deflateInit2">deflateInit2</a>()でgzipストリームを要求した場合の
   gzipヘッダー情報を指定します。<a href="./#deflateSetHeader">deflateSetHeader</a>()は、<a href="./#deflateInit2">deflateInit2</a>()または
   <a href="./#deflateReset">deflateReset</a>()の後、最初の<a href="../03-basic/#deflate">deflate</a>()呼び出しより前に呼び出せます。
   指定した<a href="../01-overview/#gz_header">gz_header</a>構造体のtext、time、os、extraフィールド、name、commentの情報を
   gzipヘッダーへ書き込みます。xflagは無視し、追加フラグは圧縮レベルに応じて設定します。
   呼び出し側は、nameとcommentがZ_NULLでなければゼロバイトで終端すること、extraが
   Z_NULLでなければそこにextra_lenバイトが存在することを保証しなければなりません。
   hcrcが真ならgzipヘッダーCRCを含めます。コマンドライン版gzipの現行版（1.3.xまで）は
   ヘッダーCRCに対応せず、「multi-part gzip file」と報告して処理を断念することに注意してください。

     <a href="./#deflateSetHeader">deflateSetHeader</a>を使わない場合、既定のgzipヘッダーではtextは偽、timeは0、
   osは現在のOSに設定し、extra、name、commentのフィールドはありません。
   <a href="./#deflateReset">deflateReset</a>()はgzipヘッダーを既定状態へ戻します。

     <a href="./#deflateSetHeader">deflateSetHeader</a>は、成功時にZ_OK、元ストリーム状態が不整合ならZ_STREAM_ERRORを返します。
</div></div><div data-zlib-block="67"><pre><code>

</code></pre></div><a id="inflateInit2" data-editorial="anchor"></a><h3 id="nav-68" data-editorial="navigation">inflateInit2</h3><div data-zlib-block="68"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN int ZEXPORT inflateInit2(z_streamp strm,
                                 int windowBits);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     引数を1つ追加した<a href="../03-basic/#inflateInit">inflateInit</a>の別版です。呼び出し側は事前に
   next_in、avail_in、zalloc、zfree、opaqueを初期化しなければなりません。

     windowBitsは最大ウィンドウサイズ（履歴バッファーのサイズ）の底2の対数です。
   この版では8〜15の範囲にするべきです。代わりに<a href="../03-basic/#inflateInit">inflateInit</a>を使う場合の既定値は15です。
   圧縮時に<a href="./#deflateInit2">deflateInit2</a>()へ指定したwindowBits以上でなければなりません。
   <a href="./#deflateInit2">deflateInit2</a>()を使わなかった場合は15でなければなりません。
   より大きなウィンドウの圧縮ストリームを入力すると、<a href="../03-basic/#inflate">inflate</a>()は大きなウィンドウを
   確保しようとする代わりに、Z_DATA_ERRORを返します。

     windowBitsを0にすると、圧縮ストリームのzlibヘッダーにあるウィンドウサイズを
   inflateが使うよう要求できます。

     raw inflateのためにwindowBitsを-8〜-15にすることもできます。この場合、
   -windowBitsがウィンドウサイズを決めます。<a href="../03-basic/#inflate">inflate</a>()はraw deflateデータを処理し、
   zlibやgzipヘッダーを探さず、チェック値も生成せず、ストリーム終端で比較するための
   チェック値も探しません。zipなど、deflate圧縮データ形式を使う別の形式向けです。
   それらの形式は独自のチェック値を提供します。raw deflateを圧縮データに使う独自形式を
   作る場合は、zlib、gzip、zipと同様に、非圧縮データへAdler-32やCRC-32などのチェック値を
   適用することを推奨します。多くのアプリケーションではzlib形式をそのまま使うべきです。
   上述の<a href="./#deflateInit2">deflateInit2</a>()についての注記は、windowBitsの絶対値にも適用されます。

     gzipデコードを選ぶ場合はwindowBitsを15より大きくすることもできます。
   windowBitsに32を加えると、ヘッダーの自動検出によりzlibとgzipの両方をデコードできます。
   16を加えるとgzipだけをデコードし、zlib形式にはZ_DATA_ERRORを返します。
   gzipのデコード時、strm-&gt;adlerはAdler-32ではなくCRC-32です。
   gunzipユーティリティや後述の<a href="../06-gzip/#gzread">gzread</a>()とは異なり、<a href="../03-basic/#inflate">inflate</a>()は連結された
   gzipメンバーを自動的にはデコードしません。<a href="../03-basic/#inflate">inflate</a>()はgzipメンバーの終端で
   Z_STREAM_ENDを返します。後続メンバーのデコードを続けるには状態をリセットする必要があります。
   gzipメンバーの後ろにデータがある場合、gzip標準（RFC 1952）に適合した展開とするため、
   必ずこのリセットを行わなければなりません。

     <a href="./#inflateInit2">inflateInit2</a>は、成功時にZ_OK、メモリ不足時にZ_MEM_ERROR、ライブラリの版が
   呼び出し側の想定する版と互換性がない場合にZ_VERSION_ERROR、構造体へのnullポインターなど
   引数が不正な場合にZ_STREAM_ERRORを返します。エラーメッセージがなければmsgはnullです。
   <a href="./#inflateInit2">inflateInit2</a>は、存在するzlibヘッダーを読み込む可能性を除き、展開は行いません。
   実際の展開は<a href="../03-basic/#inflate">inflate</a>()が行います。そのためnext_inとavail_inは変更される可能性が
   ありますが、next_outとavail_outは使用せず、変更もしません。
   現在の<a href="./#inflateInit2">inflateInit2</a>()はヘッダー情報を処理せず、<a href="../03-basic/#inflate">inflate</a>()を呼ぶまで遅延します。
</div></div><a id="inflateSetDictionary" data-editorial="anchor"></a><h3 id="nav-69" data-editorial="navigation">inflateSetDictionary</h3><div data-zlib-block="69"><pre><code>

ZEXTERN int ZEXPORT inflateSetDictionary(z_streamp strm,
                                         const Bytef *dictionary,
                                         uInt  dictLength);
</code></pre></div><div data-zlib-block="70"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     指定した非圧縮バイト列から展開辞書を初期化します。inflateがZ_NEED_DICTを
   返した場合、その呼び出し直後にこの関数を呼び出さなければなりません。
   圧縮側が選んだ辞書は、そのinflate呼び出しが返したAdler-32値から判別できます。
   圧縮側と展開側はまったく同じ辞書を使わなければなりません（<a href="./#deflateSetDictionary">deflateSetDictionary</a>を参照）。
   raw inflateでは、いつでもこの関数を呼んで辞書を設定できます。指定した辞書が
   ウィンドウより小さく、ウィンドウにすでにデータがある場合、指定した辞書で既存の内容を補います。
   アプリケーションは、圧縮に使った辞書を渡すことを保証しなければなりません。

     <a href="./#inflateSetDictionary">inflateSetDictionary</a>は、成功時にZ_OK、引数が不正な場合（dictionaryがZ_NULLなど）や
   ストリーム状態が不整合ならZ_STREAM_ERROR、辞書が想定と一致しない場合
   （Adler-32値が不正）にZ_DATA_ERRORを返します。<a href="./#inflateSetDictionary">inflateSetDictionary</a>自体は
   展開せず、その後の<a href="../03-basic/#inflate">inflate</a>()呼び出しが行います。
</div></div><a id="inflateGetDictionary" data-editorial="anchor"></a><h3 id="nav-71" data-editorial="navigation">inflateGetDictionary</h3><div data-zlib-block="71"><pre><code>

ZEXTERN int ZEXPORT inflateGetDictionary(z_streamp strm,
                                         Bytef *dictionary,
                                         uInt  *dictLength);
</code></pre></div><div data-zlib-block="72"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     inflateが維持するスライディング辞書を返します。dictLengthを辞書のバイト数に設定し、
   その数のバイトをdictionaryへコピーします。dictionaryには十分な領域が必要であり、
   32768バイトあれば常に十分です。<a href="./#inflateGetDictionary">inflateGetDictionary</a>()でdictionaryがZ_NULLなら、
   辞書の長さだけを返し、何もコピーしません。同様にdictLengthがZ_NULLなら設定しません。

     <a href="./#inflateGetDictionary">inflateGetDictionary</a>は、成功時にZ_OK、ストリーム状態が不整合ならZ_STREAM_ERRORを返します。
</div></div><a id="inflateSync" data-editorial="anchor"></a><h3 id="nav-73" data-editorial="navigation">inflateSync</h3><div data-zlib-block="73"><pre><code>

ZEXTERN int ZEXPORT inflateSync(z_streamp strm);
</code></pre></div><div data-zlib-block="74"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     フルフラッシュ地点の候補を見つけるか、利用可能な入力をすべて読み飛ばすまで、
   不正な圧縮データを読み飛ばします。フルフラッシュについては、前述のdeflateの
   Z_FULL_FLUSHの説明を参照してください。出力は生成しません。

     <a href="./#inflateSync">inflateSync</a>は圧縮データ内の00 00 FF FFを探します。すべてのフルフラッシュ地点に
   このパターンがありますが、このパターンが現れる場所すべてがフルフラッシュ地点とは限りません。

     <a href="./#inflateSync">inflateSync</a>は、フルフラッシュ地点の候補を見つけた場合にZ_OK、追加の入力が
   渡されていない場合にZ_BUF_ERROR、フラッシュ地点が見つからなければZ_DATA_ERROR、
   ストリーム構造が不整合ならZ_STREAM_ERRORを返します。成功時は、有効な圧縮データを
   見つけた位置を示す現在のtotal_inを保存できます。エラー時は、成功するか入力データの
   終端に達するまで、入力を追加しながら<a href="./#inflateSync">inflateSync</a>を繰り返し呼び出せます。
</div></div></div>
