---
title: "ユーティリティ関数"
licenseSource: zlib-api
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>固定したzlib 1.3.2の原文全体を整形した英語定本からの非公式な日本語訳です。原資料：zlib.h。<a href="https://zlib.net/zlib-1.3.2.tar.gz">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>。原文の通知は固定原資料と<a href="../01-overview/">概要ページの英語原文</a>に保持しています。この整形版と翻訳は非公式です。</p><p><a href="../../02-appendix/05-license/">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は、固定した公式配布物内を参照してください。</p></aside>
<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="96"><h2 id="section-96" data-source-role="section"> ユーティリティ関数 </h2></div><div data-zlib-block="97"><pre><code>

</code></pre></div><div data-zlib-block="98"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     以下のユーティリティ関数は、基本的なストリーム指向の関数を使って実装しています。
   インターフェイスを簡単にするため、圧縮レベル、メモリ使用量、標準のメモリ確保関数には
   既定のオプションを想定しています。特別なオプションが必要なら、これらの関数のソースコードを
   変更できます。関数の_z版は、長さにsize_t型を使います。Windowsではlongが32ビットであることに
   注意してください。
</div></div><a id="compress_z" data-editorial="anchor"></a><a id="compress" data-editorial="anchor"></a><h3 id="nav-99" data-editorial="navigation">compress</h3><div data-zlib-block="99"><pre><code>

ZEXTERN int ZEXPORT compress(Bytef *dest, uLongf *destLen,
                             const Bytef *source, uLong sourceLen);
ZEXTERN int ZEXPORT compress_z(Bytef *dest, z_size_t *destLen,
                               const Bytef *source, z_size_t sourceLen);
</code></pre></div><div data-zlib-block="100"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     元バッファーを宛先バッファーへ圧縮します。sourceLenは元バッファーのバイト長です。
   呼び出し時のdestLenは宛先バッファーの総サイズであり、少なくとも
   <a href="./#compressBound">compressBound</a>(sourceLen)の戻り値以上でなければなりません。戻る際のdestLenは、
   圧縮データの実際のサイズです。<a href="./#compress">compress</a>()は、levelにZ_DEFAULT_COMPRESSIONを
   指定した<a href="./#compress2">compress2</a>()と同等です。

     <a href="./#compress">compress</a>は、成功時にZ_OK、メモリ不足時にZ_MEM_ERROR、出力バッファーの
   空きが足りなければZ_BUF_ERRORを返します。
</div></div><a id="compress2_z" data-editorial="anchor"></a><a id="compress2" data-editorial="anchor"></a><h3 id="nav-101" data-editorial="navigation">compress2</h3><div data-zlib-block="101"><pre><code>

ZEXTERN int ZEXPORT compress2(Bytef *dest, uLongf *destLen,
                              const Bytef *source, uLong sourceLen,
                              int level);
ZEXTERN int ZEXPORT compress2_z(Bytef *dest, z_size_t *destLen,
                                const Bytef *source, z_size_t sourceLen,
                                int level);
</code></pre></div><div data-zlib-block="102"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     元バッファーを宛先バッファーへ圧縮します。levelの意味は<a href="../03-basic/#deflateInit">deflateInit</a>と同じです。
   sourceLenは元バッファーのバイト長です。呼び出し時のdestLenは宛先バッファーの総サイズであり、
   少なくとも<a href="./#compressBound">compressBound</a>(sourceLen)の戻り値以上でなければなりません。
   戻る際のdestLenは圧縮データの実際のサイズです。

     <a href="./#compress2">compress2</a>は、成功時にZ_OK、メモリ不足時にZ_MEM_ERROR、出力バッファーの
   空きが足りなければZ_BUF_ERROR、levelが不正ならZ_STREAM_ERRORを返します。
</div></div><a id="compressBound_z" data-editorial="anchor"></a><a id="compressBound" data-editorial="anchor"></a><h3 id="nav-103" data-editorial="navigation">compressBound</h3><div data-zlib-block="103"><pre><code>

ZEXTERN uLong ZEXPORT compressBound(uLong sourceLen);
ZEXTERN z_size_t ZEXPORT compressBound_z(z_size_t sourceLen);
</code></pre></div><div data-zlib-block="104"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="./#compressBound">compressBound</a>()は、sourceLenバイトに<a href="./#compress">compress</a>()または<a href="./#compress2">compress2</a>()を適用した後の
   圧縮サイズの上限を返します。宛先バッファーを確保するために、<a href="./#compress">compress</a>()または
   <a href="./#compress2">compress2</a>()より前に呼び出します。
</div></div><a id="uncompress_z" data-editorial="anchor"></a><a id="uncompress" data-editorial="anchor"></a><h3 id="nav-105" data-editorial="navigation">uncompress</h3><div data-zlib-block="105"><pre><code>

ZEXTERN int ZEXPORT uncompress(Bytef *dest, uLongf *destLen,
                               const Bytef *source, uLong sourceLen);
ZEXTERN int ZEXPORT uncompress_z(Bytef *dest, z_size_t *destLen,
                                 const Bytef *source, z_size_t sourceLen);
</code></pre></div><div data-zlib-block="106"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     元バッファーを宛先バッファーへ展開します。sourceLenは元バッファーのバイト長です。
   呼び出し時の*destLenは宛先バッファーの総サイズであり、展開データ全体を保持できるだけの
   大きさが必要です。（非圧縮データのサイズは、圧縮側が事前に保存し、この圧縮ライブラリの
   範囲外の仕組みで展開側へ伝えておかなければなりません。）戻る際の*destLenは、
   展開データの実際のサイズです。

     <a href="./#uncompress">uncompress</a>は、成功時にZ_OK、メモリ不足時にZ_MEM_ERROR、出力バッファーの
   空きが足りなければZ_BUF_ERROR、入力データが破損しているか不完全ならZ_DATA_ERRORを返します。
   空きが足りない場合、<a href="./#uncompress">uncompress</a>()はその時点までの展開データで出力バッファーを満たします。
</div></div><a id="uncompress2_z" data-editorial="anchor"></a><a id="uncompress2" data-editorial="anchor"></a><h3 id="nav-107" data-editorial="navigation">uncompress2</h3><div data-zlib-block="107"><pre><code>

ZEXTERN int ZEXPORT uncompress2(Bytef *dest, uLongf *destLen,
                                const Bytef *source, uLong *sourceLen);
ZEXTERN int ZEXPORT uncompress2_z(Bytef *dest, z_size_t *destLen,
                                  const Bytef *source, z_size_t *sourceLen);
</code></pre></div><div data-zlib-block="108"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     uncompressと同じですが、sourceLenがポインターであり、元データの長さは*sourceLenです。
   戻る際の*sourceLenは、消費した元データのバイト数です。
</div></div><div data-zlib-block="109"><pre><code>

                        </code></pre></div></div>
