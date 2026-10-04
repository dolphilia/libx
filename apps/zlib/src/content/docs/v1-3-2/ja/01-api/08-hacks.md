---
title: "各種の内部実装、見ないでください :)"
licenseSource: zlib-api
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>固定したzlib 1.3.2の原文全体を整形した英語定本からの非公式な日本語訳です。原資料：zlib.h。<a href=\"https://zlib.net/zlib-1.3.2.tar.gz\">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>。原文の通知は固定原資料と<a href=\"../01-overview/\">概要ページの英語原文</a>に保持しています。この整形版と翻訳は非公式です。</p><p><a href=\"../../02-appendix/05-license/\">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は、固定した公式配布物内を参照してください。</p></aside>"}]
---


<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="184"><h2 id="section-184" data-source-role="section"> 各種の内部実装、見ないでください :) </h2></div><div data-zlib-block="185"><pre><code>

</code></pre></div><div data-zlib-block="186"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="../03-basic/#deflateInit">deflateInit</a>と<a href="../03-basic/#inflateInit">inflateInit</a>は、zlibの版と、コンパイラーが認識する<a href="../01-overview/#z_stream">z_stream</a>を
 検査できるようにするためのマクロです：
 </div></div><a id="inflateBackInit_" data-editorial="anchor"></a><a id="inflateInit2_" data-editorial="anchor"></a><a id="deflateInit2_" data-editorial="anchor"></a><a id="inflateInit_" data-editorial="anchor"></a><a id="deflateInit_" data-editorial="anchor"></a><h3 id="nav-187" data-editorial="navigation">deflateInit_</h3><div data-zlib-block="187"><pre><code>
ZEXTERN int ZEXPORT deflateInit_(z_streamp strm, int level,
                                 const char *version, int stream_size);
ZEXTERN int ZEXPORT inflateInit_(z_streamp strm,
                                 const char *version, int stream_size);
ZEXTERN int ZEXPORT deflateInit2_(z_streamp strm, int  level, int  method,
                                  int windowBits, int memLevel,
                                  int strategy, const char *version,
                                  int stream_size);
ZEXTERN int ZEXPORT inflateInit2_(z_streamp strm, int  windowBits,
                                  const char *version, int stream_size);
ZEXTERN int ZEXPORT inflateBackInit_(z_streamp strm, int windowBits,
                                     unsigned char FAR *window,
                                     const char *version,
                                     int stream_size);
#ifdef Z_PREFIX_SET
#  define z_deflateInit(strm, level) \
          deflateInit_((strm), (level), ZLIB_VERSION, (int)sizeof(z_stream))
#  define z_inflateInit(strm) \
          inflateInit_((strm), ZLIB_VERSION, (int)sizeof(z_stream))
#  define z_deflateInit2(strm, level, method, windowBits, memLevel, strategy) \
          deflateInit2_((strm),(level),(method),(windowBits),(memLevel),\
                        (strategy), ZLIB_VERSION, (int)sizeof(z_stream))
#  define z_inflateInit2(strm, windowBits) \
          inflateInit2_((strm), (windowBits), ZLIB_VERSION, \
                        (int)sizeof(z_stream))
#  define z_inflateBackInit(strm, windowBits, window) \
          inflateBackInit_((strm), (windowBits), (window), \
                           ZLIB_VERSION, (int)sizeof(z_stream))
#else
#  define deflateInit(strm, level) \
          deflateInit_((strm), (level), ZLIB_VERSION, (int)sizeof(z_stream))
#  define inflateInit(strm) \
          inflateInit_((strm), ZLIB_VERSION, (int)sizeof(z_stream))
#  define deflateInit2(strm, level, method, windowBits, memLevel, strategy) \
          deflateInit2_((strm),(level),(method),(windowBits),(memLevel),\
                        (strategy), ZLIB_VERSION, (int)sizeof(z_stream))
#  define inflateInit2(strm, windowBits) \
          inflateInit2_((strm), (windowBits), ZLIB_VERSION, \
                        (int)sizeof(z_stream))
#  define inflateBackInit(strm, windowBits, window) \
          inflateBackInit_((strm), (windowBits), (window), \
                           ZLIB_VERSION, (int)sizeof(z_stream))
#endif

#ifndef Z_SOLO

</code></pre></div><div data-zlib-block="188"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="../06-gzip/#gzgetc">gzgetc</a>()マクロ、それを支える関数、公開されているデータ構造です。
 実際の内部状態は、この公開構造体よりはるかに大きいことに注意してください。
 この省略した構造体は、<a href="../06-gzip/#gzgetc">gzgetc</a>()マクロに必要な部分だけを公開しています。
 名前や動作は将来、気まぐれにさえ変更される可能性があるため、利用者はこれらの公開要素を
 いじるべきではありません。使えるのは<a href="../06-gzip/#gzgetc">gzgetc</a>()マクロだけです。警告しました。
 </div></div><a id="gzgetc_" data-editorial="anchor"></a><h3 id="nav-189" data-editorial="navigation">gzgetc_</h3><div data-zlib-block="189"><pre><code>
struct gzFile_s {
    unsigned have;
    unsigned char *next;
    z_off64_t pos;
};
ZEXTERN int ZEXPORT gzgetc_(gzFile file);       /* 後方互換性 */
#ifdef Z_PREFIX_SET
#  undef z_gzgetc
#  define z_gzgetc(g) \
          ((g)-&gt;have ? ((g)-&gt;have--, (g)-&gt;pos++, *((g)-&gt;next)++) : (gzgetc)(g))
#else
#  define gzgetc(g) \
          ((g)-&gt;have ? ((g)-&gt;have--, (g)-&gt;pos++, *((g)-&gt;next)++) : (gzgetc)(g))
#endif

</code></pre></div><div data-zlib-block="190"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> _LARGEFILE64_SOURCEが定義されていれば64ビットオフセット関数を提供し、
 _FILE_OFFSET_BITSが64なら通常の関数を64ビットへ変更します。両方を満たす場合、
 アプリケーションは*64関数を利用でき、通常の関数も64ビットへ変更します。
 大きなファイルに対応しないシステムでこれらを設定した場合に備え、
 _LFS64_LARGEFILEも真でなければなりません。
 </div></div><a id="crc32_combine_gen64" data-editorial="anchor"></a><a id="crc32_combine64" data-editorial="anchor"></a><a id="adler32_combine64" data-editorial="anchor"></a><a id="gzoffset64" data-editorial="anchor"></a><a id="gztell64" data-editorial="anchor"></a><a id="gzseek64" data-editorial="anchor"></a><a id="gzopen64" data-editorial="anchor"></a><h3 id="nav-191" data-editorial="navigation">gzopen64</h3><div data-zlib-block="191"><pre><code>
#ifdef Z_LARGE64
   ZEXTERN gzFile ZEXPORT gzopen64(const char *, const char *);
   ZEXTERN z_off64_t ZEXPORT gzseek64(gzFile, z_off64_t, int);
   ZEXTERN z_off64_t ZEXPORT gztell64(gzFile);
   ZEXTERN z_off64_t ZEXPORT gzoffset64(gzFile);
   ZEXTERN uLong ZEXPORT adler32_combine64(uLong, uLong, z_off64_t);
   ZEXTERN uLong ZEXPORT crc32_combine64(uLong, uLong, z_off64_t);
   ZEXTERN uLong ZEXPORT crc32_combine_gen64(z_off64_t);
#endif

#if !defined(ZLIB_INTERNAL) &amp;&amp; defined(Z_WANT64)
#  ifdef Z_PREFIX_SET
#    define z_gzopen z_gzopen64
#    define z_gzseek z_gzseek64
#    define z_gztell z_gztell64
#    define z_gzoffset z_gzoffset64
#    define z_adler32_combine z_adler32_combine64
#    define z_crc32_combine z_crc32_combine64
#    define z_crc32_combine_gen z_crc32_combine_gen64
#  else
#    define gzopen gzopen64
#    define gzseek gzseek64
#    define gztell gztell64
#    define gzoffset gzoffset64
#    define adler32_combine adler32_combine64
#    define crc32_combine crc32_combine64
#    define crc32_combine_gen crc32_combine_gen64
#  endif
#  ifndef Z_LARGE64
     ZEXTERN gzFile ZEXPORT gzopen64(const char *, const char *);
     ZEXTERN z_off_t ZEXPORT gzseek64(gzFile, z_off_t, int);
     ZEXTERN z_off_t ZEXPORT gztell64(gzFile);
     ZEXTERN z_off_t ZEXPORT gzoffset64(gzFile);
     ZEXTERN uLong ZEXPORT adler32_combine64(uLong, uLong, z_off64_t);
     ZEXTERN uLong ZEXPORT crc32_combine64(uLong, uLong, z_off64_t);
     ZEXTERN uLong ZEXPORT crc32_combine_gen64(z_off64_t);
#  endif
#else
   ZEXTERN gzFile ZEXPORT gzopen(const char *, const char *);
   ZEXTERN z_off_t ZEXPORT gzseek(gzFile, z_off_t, int);
   ZEXTERN z_off_t ZEXPORT gztell(gzFile);
   ZEXTERN z_off_t ZEXPORT gzoffset(gzFile);
   ZEXTERN uLong ZEXPORT adler32_combine(uLong, uLong, z_off_t);
   ZEXTERN uLong ZEXPORT crc32_combine(uLong, uLong, z_off_t);
   ZEXTERN uLong ZEXPORT crc32_combine_gen(z_off_t);
#endif

#else /* Z_SOLO */

   ZEXTERN uLong ZEXPORT adler32_combine(uLong, uLong, z_off_t);
   ZEXTERN uLong ZEXPORT crc32_combine(uLong, uLong, z_off_t);
   ZEXTERN uLong ZEXPORT crc32_combine_gen(z_off_t);

#endif /* !Z_SOLO */

</code></pre></div></div>
