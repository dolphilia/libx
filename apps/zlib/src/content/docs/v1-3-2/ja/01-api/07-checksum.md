---
title: "チェックサム関数"
licenseSource: zlib-api
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>固定したzlib 1.3.2の原文全体を整形した英語定本からの非公式な日本語訳です。原資料：zlib.h。<a href=\"https://zlib.net/zlib-1.3.2.tar.gz\">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>。原文の通知は固定原資料と<a href=\"../01-overview/\">概要ページの英語原文</a>に保持しています。この整形版と翻訳は非公式です。</p><p><a href=\"../../02-appendix/05-license/\">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は、固定した公式配布物内を参照してください。</p></aside>"},{"kind":"editorial","html":"<aside data-editorial=\"source-note\"><p>原資料についての注記：crc32_combine_opの説明には「op is is」という重複があります。日本語では意味を保って訳しています。</p></aside>"}]
---


<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="164"><h2 id="section-164" data-source-role="section"> チェックサム関数 </h2></div><div data-zlib-block="165"><pre><code>

</code></pre></div><div data-zlib-block="166"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     これらの関数は圧縮とは関係ありませんが、圧縮ライブラリを使うアプリケーションで
   役立つ可能性があるため、エクスポートしています。
</div></div><a id="adler32" data-editorial="anchor"></a><h3 id="nav-167" data-editorial="navigation">adler32</h3><div data-zlib-block="167"><pre><code>

ZEXTERN uLong ZEXPORT adler32(uLong adler, const Bytef *buf, uInt len);
</code></pre></div><div data-zlib-block="168"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     buf[0..len-1]のバイトで継続中のAdler-32チェックサムを更新し、更新後のチェックサムを
   返します。Adler-32値は32ビット符号なし整数の範囲内です。bufがZ_NULLなら、
   チェックサムに必要な初期値を返します。

     Adler-32チェックサムはCRC-32とほぼ同程度の信頼性があり、はるかに速く計算できます。

   使用例：
</div><pre><code>
     uLong adler = adler32(0L, Z_NULL, 0);

     while (read_buffer(buffer, length) != EOF) {
       adler = adler32(adler, buffer, length);
     }
     if (adler != original_adler) error();
</code></pre></div><a id="adler32_z" data-editorial="anchor"></a><h3 id="nav-169" data-editorial="navigation">adler32_z</h3><div data-zlib-block="169"><pre><code>

ZEXTERN uLong ZEXPORT adler32_z(uLong adler, const Bytef *buf,
                                z_size_t len);
</code></pre></div><div data-zlib-block="170"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="./#adler32">adler32</a>()と同じですが、長さはsize_tです。Windowsではlongが32ビットであることに
   注意してください。
</div></div><div data-zlib-block="171"><pre><code>

</code></pre></div><a id="adler32_combine" data-editorial="anchor"></a><h3 id="nav-172" data-editorial="navigation">adler32_combine</h3><div data-zlib-block="172"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN uLong ZEXPORT adler32_combine(uLong adler1, uLong adler2,
                                      z_off_t len2);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     2つのAdler-32チェックサムを1つへ結合します。長さlen1、len2のバイト列seq1、seq2に対し、
   それぞれadler1、adler2を計算したとします。<a href="./#adler32_combine">adler32_combine</a>()はadler1、adler2、len2だけを
   使い、seq1とseq2を連結した列のAdler-32チェックサムを返します。z_off_tはoff_tと同様、
   符号付き整数です。len2が負なら、結果には意味も用途もありません。
</div></div><a id="crc32" data-editorial="anchor"></a><h3 id="nav-173" data-editorial="navigation">crc32</h3><div data-zlib-block="173"><pre><code>

ZEXTERN uLong ZEXPORT crc32(uLong crc, const Bytef *buf, uInt len);
</code></pre></div><div data-zlib-block="174"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     buf[0..len-1]のバイトで継続中のCRC-32を更新し、更新後のCRC-32を返します。
   CRC-32値は32ビット符号なし整数の範囲内です。bufがZ_NULLなら、CRCに必要な初期値を
   返します。前処理と後処理（1の補数）は関数内で行うため、アプリケーションでは
   行うべきではありません。

   使用例：
</div><pre><code>
     uLong crc = crc32(0L, Z_NULL, 0);

     while (read_buffer(buffer, length) != EOF) {
       crc = crc32(crc, buffer, length);
     }
     if (crc != original_crc) error();
</code></pre></div><a id="crc32_z" data-editorial="anchor"></a><h3 id="nav-175" data-editorial="navigation">crc32_z</h3><div data-zlib-block="175"><pre><code>

ZEXTERN uLong ZEXPORT crc32_z(uLong crc, const Bytef *buf,
                              z_size_t len);
</code></pre></div><div data-zlib-block="176"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="./#crc32">crc32</a>()と同じですが、長さはsize_tです。Windowsではlongが32ビットであることに
   注意してください。
</div></div><div data-zlib-block="177"><pre><code>

</code></pre></div><a id="crc32_combine" data-editorial="anchor"></a><h3 id="nav-178" data-editorial="navigation">crc32_combine</h3><div data-zlib-block="178"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN uLong ZEXPORT crc32_combine(uLong crc1, uLong crc2, z_off_t len2);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     2つのCRC-32チェック値を1つへ結合します。長さlen1、len2のバイト列seq1、seq2に対し、
   それぞれcrc1、crc2を計算したとします。<a href="./#crc32_combine">crc32_combine</a>()はcrc1、crc2、len2だけを使い、
   seq1とseq2を連結した列のCRC-32チェック値を返します。len2は非負でなければならず、
   そうでなければ0を返します。
</div></div><div data-zlib-block="179"><pre><code>

</code></pre></div><a id="crc32_combine_gen" data-editorial="anchor"></a><h3 id="nav-180" data-editorial="navigation">crc32_combine_gen</h3><div data-zlib-block="180"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN uLong ZEXPORT crc32_combine_gen(z_off_t len2);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     <a href="./#crc32_combine_op">crc32_combine_op</a>()で使う、長さlen2に対応する演算子を返します。
   len2は非負でなければならず、そうでなければ0を返します。
</div></div><a id="crc32_combine_op" data-editorial="anchor"></a><h3 id="nav-181" data-editorial="navigation">crc32_combine_op</h3><div data-zlib-block="181"><pre><code>

ZEXTERN uLong ZEXPORT crc32_combine_op(uLong crc1, uLong crc2, uLong op);
</code></pre></div><div data-zlib-block="182"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     len2の代わりにopを使って、<a href="./#crc32_combine">crc32_combine</a>()と同じ結果を返します。
   opは<a href="./#crc32_combine_gen">crc32_combine_gen</a>()がlen2から生成します。生成したopを複数回使う場合には、
   <a href="./#crc32_combine">crc32_combine</a>()より速くなります。
</div></div><div data-zlib-block="183"><pre><code>


                        </code></pre></div></div>
