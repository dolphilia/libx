---
title: "定数"
licenseSource: zlib-api
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>固定したzlib 1.3.2の原文全体を整形した英語定本からの非公式な日本語訳です。原資料：zlib.h。<a href="https://zlib.net/zlib-1.3.2.tar.gz">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>。原文の通知は固定原資料と<a href="../01-overview/">概要ページの英語原文</a>に保持しています。この整形版と翻訳は非公式です。</p><p><a href="../../02-appendix/05-license/">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は、固定した公式配布物内を参照してください。</p></aside>
<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="8"><h2 id="section-8" data-source-role="section"> 定数 </h2></div><div data-zlib-block="9"><pre><code>

#define Z_NO_FLUSH      0
#define Z_PARTIAL_FLUSH 1
#define Z_SYNC_FLUSH    2
#define Z_FULL_FLUSH    3
#define Z_FINISH        4
#define Z_BLOCK         5
#define Z_TREES         6
</code></pre></div><div data-zlib-block="10"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 使用できるフラッシュ値です。詳細は後述の<a href="../03-basic/#deflate">deflate</a>()と<a href="../03-basic/#inflate">inflate</a>()を参照してください。 </div></div><div data-zlib-block="11"><pre><code>

#define Z_OK            0
#define Z_STREAM_END    1
#define Z_NEED_DICT     2
#define Z_ERRNO        (-1)
#define Z_STREAM_ERROR (-2)
#define Z_DATA_ERROR   (-3)
#define Z_MEM_ERROR    (-4)
#define Z_BUF_ERROR    (-5)
#define Z_VERSION_ERROR (-6)
</code></pre></div><div data-zlib-block="12"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 圧縮・展開関数の戻り値コードです。負の値はエラーを表し、
 正の値は特殊ですが正常な事象に使われます。
 </div></div><div data-zlib-block="13"><pre><code>

#define Z_NO_COMPRESSION         0
#define Z_BEST_SPEED             1
#define Z_BEST_COMPRESSION       9
#define Z_DEFAULT_COMPRESSION  (-1)
</code></pre></div><div data-zlib-block="14"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 圧縮レベル </div></div><div data-zlib-block="15"><pre><code>

#define Z_FILTERED            1
#define Z_HUFFMAN_ONLY        2
#define Z_RLE                 3
#define Z_FIXED               4
#define Z_DEFAULT_STRATEGY    0
</code></pre></div><div data-zlib-block="16"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 圧縮方針です。詳細は後述の<a href="../04-advanced/#deflateInit2">deflateInit2</a>()を参照してください。 </div></div><div data-zlib-block="17"><pre><code>

#define Z_BINARY   0
#define Z_TEXT     1
#define Z_ASCII    Z_TEXT   /* 1.2.2以前との互換性のため */
#define Z_UNKNOWN  2
</code></pre></div><div data-zlib-block="18"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="../03-basic/#deflate">deflate</a>()におけるdata_typeフィールドの取り得る値です。 </div></div><div data-zlib-block="19"><pre><code>

#define Z_DEFLATED   8
</code></pre></div><div data-zlib-block="20"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> deflate圧縮方式です（この版が対応する唯一の方式です）。 </div></div><div data-zlib-block="21"><pre><code>

#define Z_NULL  0  /* zalloc、zfree、opaqueの初期化用 */

#define zlib_version zlibVersion()
</code></pre></div><div data-zlib-block="22"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 1.0.2より前のバージョンとの互換性のための定義です。 </div></div><div data-zlib-block="23"><pre><code>


                        </code></pre></div></div>
