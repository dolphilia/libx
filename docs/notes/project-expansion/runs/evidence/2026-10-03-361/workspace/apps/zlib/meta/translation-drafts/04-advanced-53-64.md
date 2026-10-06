---
title: "高度な関数：翻訳中（ブロック53〜64）"
---

<aside data-editorial="draft-status"><p>ブロック53〜64の翻訳原稿です。章全体は未完了で、公開ルートから除外しています。</p></aside><aside data-editorial="source-note"><p>原文のdelfateBound_z表記を保持しています。宣言の名前はdeflateBound_zです。</p></aside>
<div class="zlib-document"><a id="deflateParams" data-editorial="anchor"></a><h3 id="nav-53" data-editorial="navigation">deflateParams</h3><div data-zlib-block="53"><pre><code>

ZEXTERN int ZEXPORT deflateParams(z_streamp strm,
                                  int level,
                                  int strategy);
</code></pre></div><div data-zlib-block="54"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     圧縮レベルと圧縮方針を動的に更新します。levelとstrategyの意味は<a href="./#deflateInit2">deflateInit2</a>()と
   同じです。圧縮と入力の単純コピーを切り替えたり、別の方針が必要な種類の入力へ
   切り替えたりできます。圧縮方法（levelによって決まります）またはstrategyが変わり、
   状態の初期化かリセット後に<a href="../03-basic/#deflate">deflate</a>()を呼び出していれば、それまでに利用可能な入力を
   <a href="../03-basic/#deflate">deflate</a>(strm, Z_BLOCK)で旧レベル・旧方針を使って圧縮します。
   圧縮レベル0、1〜3、4〜9には、それぞれ異なる3つの方法があります。
   新レベル・新方針は次の<a href="../03-basic/#deflate">deflate</a>()呼び出しから有効になります。

     <a href="./#deflateParams">deflateParams</a>()が<a href="../03-basic/#deflate">deflate</a>(strm, Z_BLOCK)を実行し、完了するだけの出力領域が
   なければ、パラメーター変更は反映されません。この場合、同じパラメーターと追加の
   出力領域で<a href="./#deflateParams">deflateParams</a>()を再び呼び出し、再試行できます。

     最初の試行で確実にパラメーターを変更するには、<a href="./#deflateParams">deflateParams</a>()の呼び出し前に、
   <a href="../03-basic/#deflate">deflate</a>()でZ_BLOCKなどのフラッシュを要求し、strm.avail_outが0以外になるまで
   フラッシュするべきです。その後、<a href="./#deflateParams">deflateParams</a>()を呼ぶ前に入力を追加するべきではありません。
   この手順に従えば、<a href="./#deflateParams">deflateParams</a>()より前に圧縮したデータには旧レベル・旧方針が、
   <a href="./#deflateParams">deflateParams</a>()より後に圧縮したデータには新レベル・新方針が適用されます。

     <a href="./#deflateParams">deflateParams</a>は、成功時にZ_OK、元ストリームの状態が不整合か引数が不正なら
   Z_STREAM_ERROR、方針や圧縮方法の変更前に利用可能な入力の圧縮を完了するだけの
   出力領域がなければZ_BUF_ERRORを返します。Z_BUF_ERRORの場合、パラメーターは
   変更されません。Z_BUF_ERRORは致命的ではなく、出力領域を追加して
   <a href="./#deflateParams">deflateParams</a>()を再試行できます。
</div></div><a id="deflateTune" data-editorial="anchor"></a><h3 id="nav-55" data-editorial="navigation">deflateTune</h3><div data-zlib-block="55"><pre><code>

ZEXTERN int ZEXPORT deflateTune(z_streamp strm,
                                int good_length,
                                int max_lazy,
                                int nice_length,
                                int max_chain);
</code></pre></div><div data-zlib-block="56"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     deflateの内部圧縮パラメーターを微調整します。zlibのdeflateが最良の一致文字列を
   探すアルゴリズムを理解している人だけが使うべきであり、その中でも、自分の特定の
   入力データから圧縮後の最後の1ビットまで絞り出そうとする、最も熱心な最適化者に
   限るべきです。max_lazy、good_length、nice_length、max_chainの意味は
   deflate.cのソースコードを読んでください。

     <a href="./#deflateTune">deflateTune</a>()は<a href="../03-basic/#deflateInit">deflateInit</a>()または<a href="./#deflateInit2">deflateInit2</a>()の後に呼び出せます。
   成功時にZ_OK、不正なdeflateストリームにはZ_STREAM_ERRORを返します。
 </div></div><a id="deflateBound_z" data-editorial="anchor"></a><a id="deflateBound" data-editorial="anchor"></a><h3 id="nav-57" data-editorial="navigation">deflateBound</h3><div data-zlib-block="57"><pre><code>

ZEXTERN uLong ZEXPORT deflateBound(z_streamp strm, uLong sourceLen);
ZEXTERN z_size_t ZEXPORT deflateBound_z(z_streamp strm, z_size_t sourceLen);
</code></pre></div><div data-zlib-block="58"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="./#deflateBound">deflateBound</a>()はsourceLenバイトを圧縮した後のサイズの上限を返します。
   <a href="../03-basic/#deflateInit">deflateInit</a>()または<a href="./#deflateInit2">deflateInit2</a>()の後、さらに<a href="./#deflateSetHeader">deflateSetHeader</a>()を使う場合は
   その後に呼び出さなければなりません。1回で圧縮するための出力バッファーの確保に使うので、
   <a href="../03-basic/#deflate">deflate</a>()より前に呼び出します。最初の<a href="../03-basic/#deflate">deflate</a>()にsourceLenバイトの入力、
   <a href="./#deflateBound">deflateBound</a>()が返したサイズの出力バッファー、flush値Z_FINISHを指定すれば、
   <a href="../03-basic/#deflate">deflate</a>()は必ずZ_STREAM_ENDを返します。Z_FINISHまたはZ_NO_FLUSH以外の
   フラッシュを使うと、圧縮後サイズが<a href="./#deflateBound">deflateBound</a>()の戻り値を超える可能性があります。

     delfateBound_z()も同じですが、長さをsize_tで受け取り、size_tで返します。
   Windowsではlongが32ビットであることに注意してください。
</div></div><a id="deflatePending" data-editorial="anchor"></a><h3 id="nav-59" data-editorial="navigation">deflatePending</h3><div data-zlib-block="59"><pre><code>

ZEXTERN int ZEXPORT deflatePending(z_streamp strm,
                                   unsigned *pending,
                                   int *bits);
</code></pre></div><div data-zlib-block="60"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="./#deflatePending">deflatePending</a>()は、生成済みでありながら、利用可能な出力へまだ渡されていない
   出力のバイト数とビット数を返します。未出力のバイトがあるのは、利用可能な出力領域を
   使い切ったためです。未出力のビット数は0〜7で、1バイトを満たすためにさらにビットが
   加わるのを待っています。pendingまたはbitsがZ_NULLなら、その値は設定しません。

     <a href="./#deflatePending">deflatePending</a>は、成功時にZ_OK、元ストリーム状態が不整合ならZ_STREAM_ERRORを
   返します。intが16ビットでmemLevelが9の場合、保留中のバイト数がunsignedに
   収まらないことがあります。その場合はZ_BUF_ERRORを返し、*pendingをunsignedの最大値に設定します。
 </div></div><a id="deflateUsed" data-editorial="anchor"></a><h3 id="nav-61" data-editorial="navigation">deflateUsed</h3><div data-zlib-block="61"><pre><code>

ZEXTERN int ZEXPORT deflateUsed(z_streamp strm,
                                int *bits);
</code></pre></div><div data-zlib-block="62"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="./#deflateUsed">deflateUsed</a>()は、バイト境界へのフラッシュ時に最後のバイトで使用したdeflateビット数の
   直近の値を*bitsに返します。結果は1〜8、まだフラッシュしていなければ0です。
   deflateストリームの最終ビットの位置を特定するのに役立ちます。

     <a href="./#deflateUsed">deflateUsed</a>は、成功時にZ_OK、元ストリーム状態が不整合ならZ_STREAM_ERRORを返します。
 </div></div><a id="deflatePrime" data-editorial="anchor"></a><h3 id="nav-63" data-editorial="navigation">deflatePrime</h3><div data-zlib-block="63"><pre><code>

ZEXTERN int ZEXPORT deflatePrime(z_streamp strm,
                                 int bits,
                                 int value);
</code></pre></div><div data-zlib-block="64"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="./#deflatePrime">deflatePrime</a>()はdeflate出力ストリームへビットを挿入します。前のdeflateストリームへ
   追記する際、そのストリームに残ったビットから新しいdeflate出力を開始することを
   意図しています。そのためraw deflateだけで使うことができ、<a href="./#deflateInit2">deflateInit2</a>()または
   <a href="./#deflateReset">deflateReset</a>()後の最初の<a href="../03-basic/#deflate">deflate</a>()呼び出しより前に使わなければなりません。
   bitsは16以下でなければならず、valueの下位からその数のビットを出力へ挿入します。

     <a href="./#deflatePrime">deflatePrime</a>は、成功時にZ_OK、ビット挿入用の内部バッファーの空きが足りなければ
   Z_BUF_ERROR、元ストリーム状態が不整合ならZ_STREAM_ERRORを返します。
</div></div></div>
