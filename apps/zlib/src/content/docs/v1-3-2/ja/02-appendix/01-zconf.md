---
title: "zconf.h設定ヘッダー"
licenseSource: zlib-zconf
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>固定したzlib 1.3.2のzconf.h全文を整形した英語定本からの非公式な日本語訳です。原資料：zconf.h。<a href=\"https://zlib.net/zlib-1.3.2.tar.gz\">公式配布物</a>のSHA-256：<code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>。原資料のSHA-256：<code>cb7c2c84211473b4699223edd363d3207b43b9578e739b5bf638f42204ea6e0f</code>。原通知は下記に改変せず併記しています。この整形版と翻訳は非公式です。</p><p><a href=\"../05-license/\">ライセンス原文の全文</a>。本文の外にあるソース参照（deflate.c、zutil.c、test/example.c、test/minigzip.c、ChangeLog、contribなど）は固定した公式配布物内を参照してください。</p></aside>"}]
---


<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="0"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="./">zconf.h</a> — zlib圧縮ライブラリの設定
 Copyright (C) 1995-2026 Jean-loup Gailly, Mark Adler
 配布・使用条件については<a href="../../01-api/01-overview/">zlib.h</a>の著作権通知を参照してください
 </div></div><div data-zlib-block="1"><pre><code>

</code></pre></div><div data-zlib-block="2"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> @(#) $Id$ </div></div><div data-zlib-block="3"><pre><code>

#ifndef ZCONF_H
#define ZCONF_H

</code></pre></div><div data-zlib-block="4"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
 すべての型とライブラリ関数に固有の接頭辞が本当に必要な場合は、
 -DZ_PREFIXを指定してコンパイルしてください。「標準」のzlibは、この指定なしでコンパイルするべきです。
 -DZ_PREFIXを指定してコンパイルするより、configureで
 「./configure --zprefix」を使い、<a href="./">zconf.h</a>にこの設定を恒久的に反映する方がさらによい方法です。
 </div></div><div data-zlib-block="5"><pre><code>
#ifdef Z_PREFIX     /* ./configureによって#if 1に設定される場合があります */
#  define Z_PREFIX_SET

</code></pre></div><div data-zlib-block="6"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> リンクされるすべてのシンボルと初期化マクロ </div></div><div data-zlib-block="7"><pre><code>
#  define _dist_code            z__dist_code
#  define _length_code          z__length_code
#  define _tr_align             z__tr_align
#  define _tr_flush_bits        z__tr_flush_bits
#  define _tr_flush_block       z__tr_flush_block
#  define _tr_init              z__tr_init
#  define _tr_stored_block      z__tr_stored_block
#  define _tr_tally             z__tr_tally
#  define adler32               z_adler32
#  define adler32_combine       z_adler32_combine
#  define adler32_combine64     z_adler32_combine64
#  define adler32_z             z_adler32_z
#  ifndef Z_SOLO
#    define compress              z_compress
#    define compress2             z_compress2
#    define compress_z            z_compress_z
#    define compress2_z           z_compress2_z
#    define compressBound         z_compressBound
#    define compressBound_z       z_compressBound_z
#  endif
#  define crc32                 z_crc32
#  define crc32_combine         z_crc32_combine
#  define crc32_combine64       z_crc32_combine64
#  define crc32_combine_gen     z_crc32_combine_gen
#  define crc32_combine_gen64   z_crc32_combine_gen64
#  define crc32_combine_op      z_crc32_combine_op
#  define crc32_z               z_crc32_z
#  define deflate               z_deflate
#  define deflateBound          z_deflateBound
#  define deflateBound_z        z_deflateBound_z
#  define deflateCopy           z_deflateCopy
#  define deflateEnd            z_deflateEnd
#  define deflateGetDictionary  z_deflateGetDictionary
#  define deflateInit           z_deflateInit
#  define deflateInit2          z_deflateInit2
#  define deflateInit2_         z_deflateInit2_
#  define deflateInit_          z_deflateInit_
#  define deflateParams         z_deflateParams
#  define deflatePending        z_deflatePending
#  define deflatePrime          z_deflatePrime
#  define deflateReset          z_deflateReset
#  define deflateResetKeep      z_deflateResetKeep
#  define deflateSetDictionary  z_deflateSetDictionary
#  define deflateSetHeader      z_deflateSetHeader
#  define deflateTune           z_deflateTune
#  define deflateUsed           z_deflateUsed
#  define deflate_copyright     z_deflate_copyright
#  define get_crc_table         z_get_crc_table
#  ifndef Z_SOLO
#    define gz_error              z_gz_error
#    define gz_intmax             z_gz_intmax
#    define gz_strwinerror        z_gz_strwinerror
#    define gzbuffer              z_gzbuffer
#    define gzclearerr            z_gzclearerr
#    define gzclose               z_gzclose
#    define gzclose_r             z_gzclose_r
#    define gzclose_w             z_gzclose_w
#    define gzdirect              z_gzdirect
#    define gzdopen               z_gzdopen
#    define gzeof                 z_gzeof
#    define gzerror               z_gzerror
#    define gzflush               z_gzflush
#    define gzfread               z_gzfread
#    define gzfwrite              z_gzfwrite
#    define gzgetc                z_gzgetc
#    define gzgetc_               z_gzgetc_
#    define gzgets                z_gzgets
#    define gzoffset              z_gzoffset
#    define gzoffset64            z_gzoffset64
#    define gzopen                z_gzopen
#    define gzopen64              z_gzopen64
#    ifdef _WIN32
#      define gzopen_w              z_gzopen_w
#    endif
#    define gzprintf              z_gzprintf
#    define gzputc                z_gzputc
#    define gzputs                z_gzputs
#    define gzread                z_gzread
#    define gzrewind              z_gzrewind
#    define gzseek                z_gzseek
#    define gzseek64              z_gzseek64
#    define gzsetparams           z_gzsetparams
#    define gztell                z_gztell
#    define gztell64              z_gztell64
#    define gzungetc              z_gzungetc
#    define gzvprintf             z_gzvprintf
#    define gzwrite               z_gzwrite
#  endif
#  define inflate               z_inflate
#  define inflateBack           z_inflateBack
#  define inflateBackEnd        z_inflateBackEnd
#  define inflateBackInit       z_inflateBackInit
#  define inflateBackInit_      z_inflateBackInit_
#  define inflateCodesUsed      z_inflateCodesUsed
#  define inflateCopy           z_inflateCopy
#  define inflateEnd            z_inflateEnd
#  define inflateGetDictionary  z_inflateGetDictionary
#  define inflateGetHeader      z_inflateGetHeader
#  define inflateInit           z_inflateInit
#  define inflateInit2          z_inflateInit2
#  define inflateInit2_         z_inflateInit2_
#  define inflateInit_          z_inflateInit_
#  define inflateMark           z_inflateMark
#  define inflatePrime          z_inflatePrime
#  define inflateReset          z_inflateReset
#  define inflateReset2         z_inflateReset2
#  define inflateResetKeep      z_inflateResetKeep
#  define inflateSetDictionary  z_inflateSetDictionary
#  define inflateSync           z_inflateSync
#  define inflateSyncPoint      z_inflateSyncPoint
#  define inflateUndermine      z_inflateUndermine
#  define inflateValidate       z_inflateValidate
#  define inflate_copyright     z_inflate_copyright
#  define inflate_fast          z_inflate_fast
#  define inflate_table         z_inflate_table
#  define inflate_fixed         z_inflate_fixed
#  ifndef Z_SOLO
#    define uncompress            z_uncompress
#    define uncompress2           z_uncompress2
#    define uncompress_z          z_uncompress_z
#    define uncompress2_z         z_uncompress2_z
#  endif
#  define zError                z_zError
#  ifndef Z_SOLO
#    define zcalloc               z_zcalloc
#    define zcfree                z_zcfree
#  endif
#  define zlibCompileFlags      z_zlibCompileFlags
#  define zlibVersion           z_zlibVersion

</code></pre></div><div data-zlib-block="8"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="../../01-api/01-overview/">zlib.h</a>と<a href="./">zconf.h</a>にあるすべてのzlibのtypedef </div></div><div data-zlib-block="9"><pre><code>
#  define Byte                  z_Byte
#  define Bytef                 z_Bytef
#  define alloc_func            z_alloc_func
#  define charf                 z_charf
#  define free_func             z_free_func
#  ifndef Z_SOLO
#    define gzFile                z_gzFile
#  endif
#  define gz_header             z_gz_header
#  define gz_headerp            z_gz_headerp
#  define in_func               z_in_func
#  define intf                  z_intf
#  define out_func              z_out_func
#  define uInt                  z_uInt
#  define uIntf                 z_uIntf
#  define uLong                 z_uLong
#  define uLongf                z_uLongf
#  define voidp                 z_voidp
#  define voidpc                z_voidpc
#  define voidpf                z_voidpf

</code></pre></div><div data-zlib-block="10"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="../../01-api/01-overview/">zlib.h</a>と<a href="./">zconf.h</a>にあるすべてのzlibの構造体 </div></div><div data-zlib-block="11"><pre><code>
#  define gz_header_s           z_gz_header_s
#  define internal_state        z_internal_state

#endif

#if defined(__MSDOS__) &amp;&amp; !defined(MSDOS)
#  define MSDOS
#endif
#if (defined(OS_2) || defined(__OS2__)) &amp;&amp; !defined(OS2)
#  define OS2
#endif
#if defined(_WINDOWS) &amp;&amp; !defined(WINDOWS)
#  define WINDOWS
#endif
#if defined(_WIN32) || defined(_WIN32_WCE) || defined(__WIN32__)
#  ifndef WIN32
#    define WIN32
#  endif
#endif
#if (defined(MSDOS) || defined(OS2) || defined(WINDOWS)) &amp;&amp; !defined(WIN32)
#  if !defined(__GNUC__) &amp;&amp; !defined(__FLAT__) &amp;&amp; !defined(__386__)
#    ifndef SYS16BIT
#      define SYS16BIT
#    endif
#  endif
#endif

</code></pre></div><div data-zlib-block="12"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
 メモリ確保関数が一度に64kバイトを超えて確保できない場合は、
 -DMAXSEG_64Kを指定してコンパイルしてください（intが16ビットのシステムで必要です）。
 </div></div><div data-zlib-block="13"><pre><code>
#ifdef SYS16BIT
#  define MAXSEG_64K
#endif
#ifdef MSDOS
#  define UNALIGNED_OK
#endif

#ifdef __STDC_VERSION__
#  ifndef STDC
#    define STDC
#  endif
#  if __STDC_VERSION__ &gt;= 199901L
#    ifndef STDC99
#      define STDC99
#    endif
#  endif
#endif
#if !defined(STDC) &amp;&amp; (defined(__STDC__) || defined(__cplusplus))
#  define STDC
#endif
#if !defined(STDC) &amp;&amp; (defined(__GNUC__) || defined(__BORLANDC__))
#  define STDC
#endif
#if !defined(STDC) &amp;&amp; (defined(MSDOS) || defined(WINDOWS) || defined(WIN32))
#  define STDC
#endif
#if !defined(STDC) &amp;&amp; (defined(OS2) || defined(__HOS_AIX__))
#  define STDC
#endif

#if defined(__OS400__) &amp;&amp; !defined(STDC)    /* iSeries（旧AS/400）。 */
#  define STDC
#endif

#ifndef STDC
#  ifndef const /* Macでは!defined(STDC) &amp;&amp; !defined(const)を使用できません */
#    define const       /* 注意：ここには、より穏当な解決方法が必要です */
#  endif
#endif

#ifndef z_const
#  ifdef ZLIB_CONST
#    define z_const const
#  else
#    define z_const
#  endif
#endif

#ifdef Z_SOLO
#  ifdef _WIN64
     typedef unsigned long long z_size_t;
#  else
     typedef unsigned long z_size_t;
#  endif
#else
#  define z_longlong long long
#  if defined(NO_SIZE_T)
     typedef unsigned NO_SIZE_T z_size_t;
#  elif defined(STDC)
#    include &lt;stddef.h&gt;
     typedef size_t z_size_t;
#  else
     typedef unsigned long z_size_t;
#  endif
#  undef z_longlong
#endif

</code></pre></div><div data-zlib-block="14"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="../../01-api/04-advanced/#deflateInit2">deflateInit2</a>で使うmemLevelの最大値 </div></div><div data-zlib-block="15"><pre><code>
#ifndef MAX_MEM_LEVEL
#  ifdef MAXSEG_64K
#    define MAX_MEM_LEVEL 8
#  else
#    define MAX_MEM_LEVEL 9
#  endif
#endif

</code></pre></div><div data-zlib-block="16"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="../../01-api/04-advanced/#deflateInit2">deflateInit2</a>と<a href="../../01-api/04-advanced/#inflateInit2">inflateInit2</a>で使うwindowBitsの最大値。
 警告：MAX_WBITSを小さくすると、minigzipはgzipが作成した.gzファイルを展開できなくなります。
 （minigzipが作成したファイルは、引き続きgzipで展開できます。）
 </div></div><div data-zlib-block="17"><pre><code>
#ifndef MAX_WBITS
#  define MAX_WBITS   15 /* 32KのLZ77ウィンドウ */
#endif

</code></pre></div><div data-zlib-block="18"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> deflateに必要なメモリ量（バイト）は次のとおりです：
            (1 &lt;&lt; (windowBits+2)) +  (1 &lt;&lt; (memLevel+9))
 つまり、windowBits=15に対する128KとmemLevel=8に対する128K（デフォルト値）、
 さらに小さいオブジェクト用に数キロバイトが必要です。たとえば、
 デフォルトの必要メモリ量を256Kから128Kに減らしたい場合は、次の指定でコンパイルします：
     make CFLAGS=&quot;-O -DMAX_WBITS=14 -DMAX_MEM_LEVEL=7&quot;
 もちろん、一般に圧縮率は悪くなります（ただで得られるものはありません）。

   inflateに必要なメモリ量（バイト）は1 &lt;&lt; windowBitsです。
 つまり、windowBits=15（デフォルト値）に対する32Kと、
 さらに小さいオブジェクト用に約7キロバイトが必要です。
</div></div><div data-zlib-block="19"><pre><code>

                        </code></pre></div><div data-zlib-block="20"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 型宣言 </div></div><div data-zlib-block="21"><pre><code>

#ifndef OF /* 関数プロトタイプ */
#  ifdef STDC
#    define OF(args)  args
#  else
#    define OF(args)  ()
#  endif
#endif

</code></pre></div><div data-zlib-block="22"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> FARに関する以下の定義は、MSDOSで混合モデルのプログラミングを行う場合にのみ必要です
 （一部をfarとして確保するsmallまたはmediumモデル）。
 テストしたのはMSCだけです。他のMSDOSコンパイラーでは、zutil.hでNO_MEMCPYを
 定義しなければならない場合があります。混合モデルが不要であれば、FARを空に定義するだけで構いません。
 </div></div><div data-zlib-block="23"><pre><code>
#ifdef SYS16BIT
#  if defined(M_I86SM) || defined(M_I86MM)
     </code></pre></div><div data-zlib-block="24"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> MSCのsmallまたはmediumモデル </div></div><div data-zlib-block="25"><pre><code>
#    define SMALL_MEDIUM
#    ifdef _MSC_VER
#      define FAR _far
#    else
#      define FAR far
#    endif
#  endif
#  if (defined(__SMALL__) || defined(__MEDIUM__))
     </code></pre></div><div data-zlib-block="26"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> Turbo Cのsmallまたはmediumモデル </div></div><div data-zlib-block="27"><pre><code>
#    define SMALL_MEDIUM
#    ifdef __BORLANDC__
#      define FAR _far
#    else
#      define FAR far
#    endif
#  endif
#endif

#if defined(WINDOWS) || defined(WIN32)
   </code></pre></div><div data-zlib-block="28"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> zlibをDLLとしてビルドするかDLLとして使う場合は、ZLIB_DLLを定義してください。
    必須ではありませんが、性能が少し向上します。
    </div></div><div data-zlib-block="29"><pre><code>
#  ifdef ZLIB_DLL
#    if defined(WIN32) &amp;&amp; (!defined(__BORLANDC__) || (__BORLANDC__ &gt;= 0x500))
#      ifdef ZLIB_INTERNAL
#        define ZEXTERN extern __declspec(dllexport)
#      else
#        define ZEXTERN extern __declspec(dllimport)
#      endif
#    endif
#  endif  /* ZLIB_DLL */
   </code></pre></div><div data-zlib-block="30"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> WINAPI/WINAPIV呼び出し規約でzlibをビルドするか使用する場合は、
    ZLIB_WINAPIを定義してください。
    注意：標準のZLIB1.DLLは、ZLIB_WINAPIを使ってコンパイルされていません。
    </div></div><div data-zlib-block="31"><pre><code>
#  ifdef ZLIB_WINAPI
#    ifdef FAR
#      undef FAR
#    endif
#    ifndef WIN32_LEAN_AND_MEAN
#      define WIN32_LEAN_AND_MEAN
#    endif
#    include &lt;windows.h&gt;
     </code></pre></div><div data-zlib-block="32"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> _exportは不要です。代わりにZLIB.DEFを使ってください。 </div></div><div data-zlib-block="33"><pre><code>
     </code></pre></div><div data-zlib-block="34"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> Windowsとの完全な互換性を得るには、__stdcallではなくWINAPIを使ってください。 </div></div><div data-zlib-block="35"><pre><code>
#    define ZEXPORT WINAPI
#    ifdef WIN32
#      define ZEXPORTVA WINAPIV
#    else
#      define ZEXPORTVA FAR CDECL
#    endif
#  endif
#endif

#if defined (__BEOS__)
#  ifdef ZLIB_DLL
#    ifdef ZLIB_INTERNAL
#      define ZEXPORT   __declspec(dllexport)
#      define ZEXPORTVA __declspec(dllexport)
#    else
#      define ZEXPORT   __declspec(dllimport)
#      define ZEXPORTVA __declspec(dllimport)
#    endif
#  endif
#endif

#ifndef ZEXTERN
#  define ZEXTERN extern
#endif
#ifndef ZEXPORT
#  define ZEXPORT
#endif
#ifndef ZEXPORTVA
#  define ZEXPORTVA
#endif

#ifndef FAR
#  define FAR
#endif

#if !defined(__MACTYPES__)
typedef unsigned char  Byte;  /* 8ビット */
#endif
typedef unsigned int   uInt;  /* 16ビット以上 */
typedef unsigned long  uLong; /* 32ビット以上 */

#ifdef SMALL_MEDIUM
   </code></pre></div><div data-zlib-block="36"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> Borland C/C++と一部の古いMSCの版は、typedef内のFARを無視します </div></div><div data-zlib-block="37"><pre><code>
#  define Bytef Byte FAR
#else
   typedef Byte  FAR Bytef;
#endif
typedef char  FAR charf;
typedef int   FAR intf;
typedef uInt  FAR uIntf;
typedef uLong FAR uLongf;

#ifdef STDC
   typedef void const *voidpc;
   typedef void FAR   *voidpf;
   typedef void       *voidp;
#else
   typedef Byte const *voidpc;
   typedef Byte FAR   *voidpf;
   typedef Byte       *voidp;
#endif

#if !defined(Z_U4) &amp;&amp; !defined(Z_SOLO) &amp;&amp; defined(STDC)
#  include &lt;limits.h&gt;
#  if (UINT_MAX == 0xffffffffUL)
#    define Z_U4 unsigned
#  elif (ULONG_MAX == 0xffffffffUL)
#    define Z_U4 unsigned long
#  elif (USHRT_MAX == 0xffffffffUL)
#    define Z_U4 unsigned short
#  endif
#endif

#ifdef Z_U4
   typedef Z_U4 z_crc_t;
#else
   typedef unsigned long z_crc_t;
#endif

#if HAVE_UNISTD_H-0     /* ./configureによって#if 1に設定される場合があります */
#  define Z_HAVE_UNISTD_H
#endif

#if HAVE_STDARG_H-0     /* ./configureによって#if 1に設定される場合があります */
#  define Z_HAVE_STDARG_H
#endif

#ifdef STDC
#  ifndef Z_SOLO
#    include &lt;sys/types.h&gt;      /* off_t用 */
#  endif
#endif

#if defined(STDC) || defined(Z_HAVE_STDARG_H)
#  ifndef Z_SOLO
#    include &lt;stdarg.h&gt;         /* va_list用 */
#  endif
#endif

#ifdef _WIN32
#  ifndef Z_SOLO
#    include &lt;stddef.h&gt;         /* wchar_t用 */
#  endif
#endif

</code></pre></div><div data-zlib-block="38"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> 「#define _LARGEFILE64_SOURCE」と「#define _LARGEFILE64_SOURCE 1」の
 両方を64ビット操作の要求として扱うための小さな工夫です
 （前者はLFS文書に適合しません）。一方、
 「#undef _LARGEFILE64_SOURCE」と「#define _LARGEFILE64_SOURCE 0」は、
 同じく64ビット操作を要求しないものとして扱います。
 </div></div><div data-zlib-block="39"><pre><code>
#if defined(_LARGEFILE64_SOURCE) &amp;&amp; -_LARGEFILE64_SOURCE - -1 == 1
#  undef _LARGEFILE64_SOURCE
#endif

#ifndef Z_HAVE_UNISTD_H
#  if defined(__WATCOMC__) || defined(__GO32__) || \
      (defined(_LARGEFILE64_SOURCE) &amp;&amp; !defined(_WIN32))
#    define Z_HAVE_UNISTD_H
#  endif
#endif
#ifndef Z_SOLO
#  if defined(Z_HAVE_UNISTD_H)
#    include &lt;unistd.h&gt;         /* SEEK_*、off_t、_LFS64_LARGEFILE用 */
#    ifdef VMS
#      include &lt;unixio.h&gt;       /* off_t用 */
#    endif
#    ifndef z_off_t
#      define z_off_t off_t
#    endif
#  endif
#endif

#if defined(_LFS64_LARGEFILE) &amp;&amp; _LFS64_LARGEFILE-0
#  define Z_LFS64
#endif

#if defined(_LARGEFILE64_SOURCE) &amp;&amp; defined(Z_LFS64)
#  define Z_LARGE64
#endif

#if defined(_FILE_OFFSET_BITS) &amp;&amp; _FILE_OFFSET_BITS-0 == 64 &amp;&amp; defined(Z_LFS64)
#  define Z_WANT64
#endif

#if !defined(SEEK_SET) &amp;&amp; !defined(Z_SOLO)
#  define SEEK_SET        0       /* ファイルの先頭を基準にシークします。  */
#  define SEEK_CUR        1       /* 現在位置を基準にシークします。  */
#  define SEEK_END        2       /* ファイルポインターをEOFに「offset」を加えた位置に設定します */
#endif

#ifndef z_off_t
#  define z_off_t long long
#endif

#if !defined(_WIN32) &amp;&amp; defined(Z_LARGE64)
#  define z_off64_t off64_t
#elif defined(__MINGW32__)
#  define z_off64_t long long
#elif defined(_WIN32) &amp;&amp; !defined(__GNUC__)
#  define z_off64_t __int64
#elif defined(__GO32__)
#  define z_off64_t offset_t
#else
#  define z_off64_t z_off_t
#endif

</code></pre></div><div data-zlib-block="40"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> MVSリンカーは8バイトを超える外部名に対応していません </div></div><div data-zlib-block="41"><pre><code>
#if defined(__MVS__)
  #pragma map(deflateInit_,&quot;DEIN&quot;)
  #pragma map(deflateInit2_,&quot;DEIN2&quot;)
  #pragma map(deflateEnd,&quot;DEEND&quot;)
  #pragma map(deflateBound,&quot;DEBND&quot;)
  #pragma map(inflateInit_,&quot;ININ&quot;)
  #pragma map(inflateInit2_,&quot;ININ2&quot;)
  #pragma map(inflateEnd,&quot;INEND&quot;)
  #pragma map(inflateSync,&quot;INSY&quot;)
  #pragma map(inflateSetDictionary,&quot;INSEDI&quot;)
  #pragma map(compressBound,&quot;CMBND&quot;)
  #pragma map(inflate_table,&quot;INTABL&quot;)
  #pragma map(inflate_fast,&quot;INFA&quot;)
  #pragma map(inflate_copyright,&quot;INCOPY&quot;)
#endif

#endif /* ZCONF_H */
</code></pre></div></div>

<aside data-editorial="original-notice"><details><summary>改変していない英語原通知</summary><pre style="white-space:pre-wrap;overflow-wrap:anywhere"> zconf.h -- configuration of the zlib compression library
 Copyright (C) 1995-2026 Jean-loup Gailly, Mark Adler
 For conditions of distribution and use, see copyright notice in zlib.h
 </pre></details></aside>
