---
title: "高度な関数：翻訳中（ブロック40〜52）"
licenseSource: zlib-api
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>固定したzlib 1.3.2の原文全体を整形した英語定本からの非公式な日本語訳です。原資料：zlib.h。<a href="https://zlib.net/zlib-1.3.2.tar.gz">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>。原文の通知は固定原資料と<a href="../01-overview/">概要ページの英語原文</a>に保持しています。この整形版と翻訳は非公式です。</p><p><a href="../../02-appendix/05-license/">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は、固定した公式配布物内を参照してください。</p></aside><aside data-editorial="draft-status"><p>高度な関数章のブロック40〜52だけの翻訳原稿です。残り43ブロックと章全体の注記は未翻訳であり、全文翻訳・レビュー済みページではありません。公開用ルートから除外しています。</p></aside>
<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="40"><h2 id="section-40" data-source-role="section"> 高度な関数 </h2></div><div data-zlib-block="41"><pre><code>

</code></pre></div><div data-zlib-block="42"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
    以下の関数が必要になるのは、一部の特殊なアプリケーションだけです。
</div></div><div data-zlib-block="43"><pre><code>

</code></pre></div><a id="deflateInit2" data-editorial="anchor"></a><h3 id="nav-44" data-editorial="navigation">deflateInit2</h3><div data-zlib-block="44"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN int ZEXPORT deflateInit2(z_streamp strm,
                                 int level,
                                 int method,
                                 int windowBits,
                                 int memLevel,
                                 int strategy);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     圧縮オプションを追加した、<a href="../03-basic/#deflateInit">deflateInit</a>の別版です。
   呼び出し側は事前にzalloc、zfree、opaqueを初期化しなければなりません。

     methodは圧縮方式を指定します。この版のライブラリではZ_DEFLATEDでなければなりません。

     windowBitsはウィンドウサイズ（履歴バッファーのサイズ）の底2の対数です。
   この版では8〜15の範囲にするべきです。値を大きくするとメモリ使用量と引き換えに
   圧縮率が上がります。代わりに<a href="../03-basic/#deflateInit">deflateInit</a>を使う場合の既定値は15です。

     現在の<a href="../03-basic/#deflate">deflate</a>()はwindowBitsが8（256バイトのウィンドウ）に対応していません。
   そのため8を要求すると9（512バイト）になります。この場合、<a href="./#inflateInit2">inflateInit2</a>()に8を
   指定すると、9を含むzlibヘッダーを<a href="../03-basic/#inflate">inflate</a>()の初期化設定と照合する際に
   エラーになります。対処方法は、この初期化設定では<a href="./#deflateInit2">deflateInit2</a>()に8を使わないこと、
   または少なくともその場合は<a href="./#inflateInit2">inflateInit2</a>()に9を指定することです。

     raw deflateにはwindowBitsを-8〜-15にもできます。この場合、-windowBitsが
   ウィンドウサイズを決めます。<a href="../03-basic/#deflate">deflate</a>()はzlibヘッダーもトレーラーもない
   raw deflateデータを生成し、チェック値を計算しません。

     任意のgzipエンコードのためにwindowBitsを15より大きくすることもできます。
   windowBitsに16を加えると、zlibラッパーの代わりに単純なgzipヘッダーとトレーラーを
   圧縮データの前後に書き込みます。このgzipヘッダーにはファイル名、追加データ、コメント、
   更新時刻（0に設定）、ヘッダーCRCはなく、コンパイル時にOSが判定されていれば、
   OSフィールドを適切な値に設定します。gzipストリームの書き込み時、strm-&gt;adlerは
   Adler-32ではなくCRC-32です。

     raw deflateまたはgzipエンコードでは、256バイトのウィンドウ要求は不正として拒否します。
   ウィンドウサイズを展開側へ伝える手段を提供するのはzlibヘッダーだけだからです。

     memLevelは内部圧縮状態に確保するメモリの量を指定します。memLevel=1は最小のメモリを
   使いますが低速で圧縮率も下がり、memLevel=9は最大のメモリを使って速度を最適化します。
   既定値は8です。windowBitsとmemLevelによる総メモリ使用量は<a href="../../02-appendix/01-zconf/">zconf.h</a>を参照してください。

     strategyは圧縮アルゴリズムの調整に使います。通常のデータにはZ_DEFAULT_STRATEGY、
   フィルター（または予測器）が生成したデータにはZ_FILTERED、マッチ距離を1に制限する
   ランレングス符号化にはZ_RLE、文字列マッチングを行わずHuffman符号化だけを強制するには
   Z_HUFFMAN_ONLYを使います。フィルター後のデータは、PNGフィルターの出力のように、
   ややランダムな分布を持つ小さな値が主です。この場合、それらをよりよく圧縮するよう
   アルゴリズムを調整します。Z_FILTEREDは既定よりHuffman符号化を増やし、文字列マッチングを
   減らします。Z_DEFAULT_STRATEGYとZ_HUFFMAN_ONLYの中間です。Z_RLEはZ_HUFFMAN_ONLYと
   ほぼ同じ速度ですが、PNG画像データではHuffmanのみよりよい圧縮率になるはずです。
   文字列マッチングの程度は多い順にZ_DEFAULT_STRATEGY、Z_FILTERED、Z_RLE、
   Z_HUFFMAN_ONLY（なし）です。strategyは圧縮率には影響しますが、データに最適でなくても
   圧縮出力の正しさには決して影響しません。Z_FIXEDは既定の文字列マッチングを使いますが、
   動的Huffman符号の使用を防ぎ、特殊なアプリケーションでデコーダーを簡略化できます。

     <a href="./#deflateInit2">deflateInit2</a>は、成功時にZ_OK、メモリ不足時にZ_MEM_ERROR、いずれかの引数が
   不正な場合（不正なmethodなど）にZ_STREAM_ERROR、ライブラリの版（zlib_version）が
   呼び出し側の想定する版（ZLIB_VERSION）と互換性がない場合にZ_VERSION_ERRORを返します。
   エラーメッセージがなければmsgはnullです。<a href="./#deflateInit2">deflateInit2</a>自体は圧縮せず、
   圧縮は<a href="../03-basic/#deflate">deflate</a>()が行います。
</div></div><a id="deflateSetDictionary" data-editorial="anchor"></a><h3 id="nav-45" data-editorial="navigation">deflateSetDictionary</h3><div data-zlib-block="45"><pre><code>

ZEXTERN int ZEXPORT deflateSetDictionary(z_streamp strm,
                                         const Bytef *dictionary,
                                         uInt  dictLength);
</code></pre></div><div data-zlib-block="46"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     指定したバイト列から圧縮辞書を初期化し、圧縮出力は生成しません。
   zlib形式では、<a href="../03-basic/#deflateInit">deflateInit</a>、<a href="./#deflateInit2">deflateInit2</a>、または<a href="./#deflateReset">deflateReset</a>の直後、
   deflateを一度も呼び出していない時点で呼び出さなければなりません。
   raw deflateでは、deflateを一度も呼び出していない時点か、deflateブロック完了の直後に
   呼び出さなければなりません。ブロック完了とは、Z_BLOCK、Z_PARTIAL_FLUSH、Z_SYNC_FLUSH、
   Z_FULL_FLUSHのいずれかを使い、入力をすべて消費して出力をすべて引き渡した時点です。
   圧縮側と展開側は、まったく同じ辞書を使わなければなりません（<a href="./#inflateSetDictionary">inflateSetDictionary</a>を参照）。

     辞書は、今後の圧縮対象データに現れそうな文字列（バイト列）から構成するべきであり、
   最もよく使う文字列は辞書の末尾寄りに置くことが望まれます。辞書が最も役立つのは、
   圧縮対象が短く、精度よく予測できる場合です。その場合、既定の空の辞書よりよく圧縮できます。

     <a href="../03-basic/#deflateInit">deflateInit</a>または<a href="./#deflateInit2">deflateInit2</a>が選ぶ圧縮用データ構造のサイズによって、
   辞書の一部が実質的に破棄されることがあります。例えば、辞書が<a href="../03-basic/#deflateInit">deflateInit</a>または
   <a href="./#deflateInit2">deflateInit2</a>で指定したウィンドウより大きい場合です。そのため、最も役立ちそうな
   文字列は先頭ではなく末尾へ置くべきです。また、現在のdeflateは、指定した辞書のうち
   最大でウィンドウサイズから262バイトを引いた量だけを使います。

     戻る際、strm-&gt;adlerを辞書のAdler-32値へ設定します。展開側は後でこの値を使って、
   圧縮側が使用した辞書を判別できます。実際には辞書の一部しか使わなくても、この値は
   辞書全体に対するものです。raw deflateを要求した場合はAdler-32を計算せず、
   strm-&gt;adlerも設定しません。

     <a href="./#deflateSetDictionary">deflateSetDictionary</a>は、成功時にZ_OK、引数が不正な場合（dictionaryがZ_NULLなど）、
   またはストリーム状態が不整合な場合にZ_STREAM_ERRORを返します。不整合の例は、すでに
   deflateを呼び出したストリーム、またはraw deflateでブロック境界にない場合です。
   <a href="./#deflateSetDictionary">deflateSetDictionary</a>自体は圧縮せず、圧縮は<a href="../03-basic/#deflate">deflate</a>()が行います。
</div></div><a id="deflateGetDictionary" data-editorial="anchor"></a><h3 id="nav-47" data-editorial="navigation">deflateGetDictionary</h3><div data-zlib-block="47"><pre><code>

ZEXTERN int ZEXPORT deflateGetDictionary(z_streamp strm,
                                         Bytef *dictionary,
                                         uInt  *dictLength);
</code></pre></div><div data-zlib-block="48"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     deflateが維持するスライディング辞書を返します。dictLengthを辞書のバイト数に設定し、
   その数のバイトをdictionaryへコピーします。dictionaryには十分な領域が必要であり、
   32768バイトあれば常に十分です。<a href="./#deflateGetDictionary">deflateGetDictionary</a>()でdictionaryがZ_NULLなら、
   辞書の長さだけを返し、何もコピーしません。同様にdictLengthがZ_NULLなら設定しません。

     <a href="./#deflateGetDictionary">deflateGetDictionary</a>()は、ウィンドウサイズを超える入力が渡されていても、
   ウィンドウより短い長さを返すことがあります。この場合、最大258バイト短くなることが
   あります。zlibのdeflate実装によるウィンドウの管理と、最大258バイト長のマッチを
   先読みする方法によるものです。入力の末尾からウィンドウサイズ分のバイトが必要なら、
   アプリケーションがzlibの外で保存しなければなりません。

     <a href="./#deflateGetDictionary">deflateGetDictionary</a>は、成功時にZ_OK、ストリーム状態が不整合ならZ_STREAM_ERRORを返します。
</div></div><a id="deflateCopy" data-editorial="anchor"></a><h3 id="nav-49" data-editorial="navigation">deflateCopy</h3><div data-zlib-block="49"><pre><code>

ZEXTERN int ZEXPORT deflateCopy(z_streamp dest,
                                z_streamp source);
</code></pre></div><div data-zlib-block="50"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     宛先ストリームを、元のストリームの完全なコピーに設定します。

     この関数は複数の圧縮方針を試す場合に役立ちます。例えば、入力データをフィルターで
   前処理する方法が複数ある場合です。破棄するストリームは<a href="../03-basic/#deflateEnd">deflateEnd</a>を呼び出して
   解放するべきです。<a href="./#deflateCopy">deflateCopy</a>は非常に大きいこともある内部圧縮状態を複製するため、
   この方法は低速で、多くのメモリを使うことがあります。

     <a href="./#deflateCopy">deflateCopy</a>は、成功時にZ_OK、メモリ不足時にZ_MEM_ERROR、元ストリームの状態が
   不整合な場合（zallocがZ_NULLなど）にZ_STREAM_ERRORを返します。
   元ストリームと宛先ストリームのmsgは、どちらも変更しません。
</div></div><a id="deflateReset" data-editorial="anchor"></a><h3 id="nav-51" data-editorial="navigation">deflateReset</h3><div data-zlib-block="51"><pre><code>

ZEXTERN int ZEXPORT deflateReset(z_streamp strm);
</code></pre></div><div data-zlib-block="52"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="../03-basic/#deflateEnd">deflateEnd</a>の後に<a href="../03-basic/#deflateInit">deflateInit</a>を行うことに相当しますが、内部圧縮状態を解放したり
   再確保したりしません。圧縮レベルや設定済みのほかの属性は変更せずに残します。
   total_in、total_out、adler、msgを初期化します。

     <a href="./#deflateReset">deflateReset</a>は、成功時にZ_OK、元ストリーム状態が不整合ならZ_STREAM_ERROR
   （zallocまたはstateがZ_NULLの場合など）を返します。
</div></div></div>
