---
title: "LZ4: フレームAPIヘッダー"
licenseSource: "lz4-1-10-0-lib-lz4frame-h"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>b845db4b7ee1bfa64b8f641a94f62e7f636a8b5d673cc61766413782283aaad1</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/lib/lz4frame.h\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/lib/lz4frame.h.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>独立した説明コメントを日本語へ訳し、法的通知は英語全文を保持しました。宣言・マクロ・コード中のコメントと診断文字列は変更していません。冒頭の仕様v1.6.1は原文の表記です。同じ固定コミットのフレーム仕様文書はVersion 1.6.4と記しています。原文のLZ4F_compress()、LZ4_flush()、LZ4_createCDict()、LZ4_CDict、LZ4_compressFrame_usingCDict()などの表記も保持し、対応する宣言のLZ4F_compressUpdate()、LZ4F_flush()、LZ4F_createCDict()、LZ4F_CDict、LZ4F_compressFrame_usingCDict()とは区別しています。辞書フレーム圧縮の説明の「@dstBuffer MUST be &gt;= …」は原表記で、実際の容量引数の宣言はdstCapacityです。カスタムメモリ説明のLZ4F_customMemも原表記で、型の宣言はLZ4F_CustomMemです。これらを黙って訂正していません。本文の性能・仕様説明は固定原著の記述で、今回の測定や実行結果ではありません。</p>"
---


<pre class="lz4-source-comment">/*
   LZ4F - LZ4-Frame library
   Header File
   Copyright (C) 2011-2020, Yann Collet.
   BSD 2-Clause License (http://www.opensource.org/licenses/bsd-license.php)

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are
   met:

       * Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
       * Redistributions in binary form must reproduce the above
   copyright notice, this list of conditions and the following disclaimer
   in the documentation and/or other materials provided with the
   distribution.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   &quot;AS IS&quot; AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
   OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
   SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
   LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
   THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
   OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

   You can contact the author at :
   - LZ4 source repository : https://github.com/lz4/lz4
   - LZ4 public forum : https://groups.google.com/forum/#!forum/lz4c
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
LZ4Fは、doc/lz4_Frame_format.mdの仕様v1.6.1に準拠するLZ4フレームを生成・展開できる独立したAPIです。生成するフレームは`lz4` CLIと互換です。

LZ4Fはストリーミング機能も提供します。

lz4frame.hを使う際、LZ4_VERSION_NUMBERなどの共通定数を取り出す場合を除き、lz4.hは不要です。
*/
</pre>

<pre><code>
#ifndef LZ4F_H_09782039843
#define LZ4F_H_09782039843

#if defined (__cplusplus)
extern &quot;C&quot; {
#endif

</code></pre>

<pre class="lz4-source-comment">/*!
依存関係
*/
</pre>

<pre><code>#include &lt;stddef.h&gt;   /* size_t */


</code></pre>

<pre class="lz4-source-comment">/*!
はじめに

lz4frame.hはLZ4フレーム仕様を実装します。doc/lz4_Frame_format.mdを参照してください。LZ4フレームは`lz4` CLIと互換で、どのシステムとも相互運用できるよう設計しています。
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
コンパイラー固有の事項
*/
</pre>

<pre class="lz4-source-comment">/*!
LZ4_DLL_EXPORT:
Windows DLLのビルド時に関数のエクスポートを有効にします。
LZ4FLIB_VISIBILITY:
ライブラリのシンボルの可視性を制御します。
*/
</pre>

<pre><code>#ifndef LZ4FLIB_VISIBILITY
#  if defined(__GNUC__) &amp;&amp; (__GNUC__ &gt;= 4)
#    define LZ4FLIB_VISIBILITY __attribute__ ((visibility (&quot;default&quot;)))
#  else
#    define LZ4FLIB_VISIBILITY
#  endif
#endif
#if defined(LZ4_DLL_EXPORT) &amp;&amp; (LZ4_DLL_EXPORT==1)
#  define LZ4FLIB_API __declspec(dllexport) LZ4FLIB_VISIBILITY
#elif defined(LZ4_DLL_IMPORT) &amp;&amp; (LZ4_DLL_IMPORT==1)
#  define LZ4FLIB_API __declspec(dllimport) LZ4FLIB_VISIBILITY
#else
#  define LZ4FLIB_API LZ4FLIB_VISIBILITY
#endif

#ifdef LZ4F_DISABLE_DEPRECATE_WARNINGS
#  define LZ4F_DEPRECATE(x) x
#else
#  if defined(_MSC_VER)
#    define LZ4F_DEPRECATE(x) x   /* __declspec(deprecated) x - only works with C++ */
#  elif defined(__clang__) || (defined(__GNUC__) &amp;&amp; (__GNUC__ &gt;= 6))
#    define LZ4F_DEPRECATE(x) x __attribute__((deprecated))
#  else
#    define LZ4F_DEPRECATE(x) x   /* no deprecation warning for this compiler */
#  endif
#endif


</code></pre>

<pre class="lz4-source-comment">/*!
エラー管理
*/
</pre>

<pre><code>typedef size_t LZ4F_errorCode_t;

LZ4FLIB_API unsigned    LZ4F_isError(LZ4F_errorCode_t code);   /**&lt; tells when a function result is an error code */
LZ4FLIB_API const char* LZ4F_getErrorName(LZ4F_errorCode_t code);   /**&lt; return error code string; for debugging */


</code></pre>

<pre class="lz4-source-comment">/*!
フレーム圧縮の型
*/
</pre>

<pre class="lz4-source-comment">/*!
#define LZ4F_ENABLE_OBSOLETE_ENUMS   // コメントを外すと、廃止された列挙値を有効にします。
*/
</pre>

<pre><code>#ifdef LZ4F_ENABLE_OBSOLETE_ENUMS
#  define LZ4F_OBSOLETE_ENUM(x) , LZ4F_DEPRECATE(x) = LZ4F_##x
#else
#  define LZ4F_OBSOLETE_ENUM(x)
#endif

</code></pre>

<pre class="lz4-source-comment">/*!
ブロックサイズが大きいほど、圧縮率は（わずかに）よくなりますが、その効果は次第に小さくなります。
大きなブロックは、圧縮側と展開側の両方でメモリ使用量も増やします。
*/
</pre>

<pre><code>typedef enum {
    LZ4F_default=0,
    LZ4F_max64KB=4,
    LZ4F_max256KB=5,
    LZ4F_max1MB=6,
    LZ4F_max4MB=7
    LZ4F_OBSOLETE_ENUM(max64KB)
    LZ4F_OBSOLETE_ENUM(max256KB)
    LZ4F_OBSOLETE_ENUM(max1MB)
    LZ4F_OBSOLETE_ENUM(max4MB)
} LZ4F_blockSizeID_t;

</code></pre>

<pre class="lz4-source-comment">/*!
依存ブロックは、小さなブロックを使う際の非効率を大きく減らし、圧縮率を改善します。
ただし、LZ4展開器の中には独立ブロックにしか対応しないものがあります。
*/
</pre>

<pre><code>typedef enum {
    LZ4F_blockLinked=0,
    LZ4F_blockIndependent
    LZ4F_OBSOLETE_ENUM(blockLinked)
    LZ4F_OBSOLETE_ENUM(blockIndependent)
} LZ4F_blockMode_t;

typedef enum {
    LZ4F_noContentChecksum=0,
    LZ4F_contentChecksumEnabled
    LZ4F_OBSOLETE_ENUM(noContentChecksum)
    LZ4F_OBSOLETE_ENUM(contentChecksumEnabled)
} LZ4F_contentChecksum_t;

typedef enum {
    LZ4F_noBlockChecksum=0,
    LZ4F_blockChecksumEnabled
} LZ4F_blockChecksum_t;

typedef enum {
    LZ4F_frame=0,
    LZ4F_skippableFrame
    LZ4F_OBSOLETE_ENUM(skippableFrame)
} LZ4F_frameType_t;

#ifdef LZ4F_ENABLE_OBSOLETE_ENUMS
typedef LZ4F_blockSizeID_t blockSizeID_t;
typedef LZ4F_blockMode_t blockMode_t;
typedef LZ4F_frameType_t frameType_t;
typedef LZ4F_contentChecksum_t contentChecksum_t;
#endif

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_frameInfo_t:
フレームのパラメーターを設定・読み取りできます。
構造体は、まずmemset()またはLZ4F_INIT_FRAMEINFOを使って0に初期化し、すべてのパラメーターを既定値にしなければなりません。
その後、一部のパラメーターだけを変更できます。
*/
</pre>

<pre><code>typedef struct {
  LZ4F_blockSizeID_t     blockSizeID;         /* max64KB, max256KB, max1MB, max4MB; 0 == default (LZ4F_max64KB) */
  LZ4F_blockMode_t       blockMode;           /* LZ4F_blockLinked, LZ4F_blockIndependent; 0 == default (LZ4F_blockLinked) */
  LZ4F_contentChecksum_t contentChecksumFlag; /* 1: add a 32-bit checksum of frame&#x27;s decompressed data; 0 == default (disabled) */
  LZ4F_frameType_t       frameType;           /* read-only field : LZ4F_frame or LZ4F_skippableFrame */
  unsigned long long     contentSize;         /* Size of uncompressed content ; 0 == unknown */
  unsigned               dictID;              /* Dictionary ID, sent by compressor to help decoder select correct dictionary; 0 == no dictID provided */
  LZ4F_blockChecksum_t   blockChecksumFlag;   /* 1: each block followed by a checksum of block&#x27;s compressed data; 0 == default (disabled) */
} LZ4F_frameInfo_t;

#define LZ4F_INIT_FRAMEINFO   { LZ4F_max64KB, LZ4F_blockLinked, LZ4F_noContentChecksum, LZ4F_frame, 0ULL, 0U, LZ4F_noBlockChecksum }    /* v1.8.3+ */

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_preferences_t:
ストリーミングインターフェースへ、高度な圧縮指示を渡せます。
構造体は、まずmemset()またはLZ4F_INIT_PREFERENCESを使って0に初期化し、すべてのパラメーターを既定値にしなければなりません。
予約済みのフィールドは、すべてゼロにしなければなりません。
*/
</pre>

<pre><code>typedef struct {
  LZ4F_frameInfo_t frameInfo;
  int      compressionLevel;    /* 0: default (fast mode); values &gt; LZ4HC_CLEVEL_MAX count as LZ4HC_CLEVEL_MAX; values &lt; 0 trigger &quot;fast acceleration&quot; */
  unsigned autoFlush;           /* 1: always flush; reduces usage of internal buffers */
  unsigned favorDecSpeed;       /* 1: parser favors decompression speed vs compression ratio. Only works for high compression modes (&gt;= LZ4HC_CLEVEL_OPT_MIN) */  /* v1.8.2+ */
  unsigned reserved[3];         /* must be zero for forward compatibility */
} LZ4F_preferences_t;

#define LZ4F_INIT_PREFERENCES   { LZ4F_INIT_FRAMEINFO, 0, 0u, 0u, { 0u, 0u, 0u } }    /* v1.8.3+ */


</code></pre>

<pre class="lz4-source-comment">/*!
基本の圧縮関数
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_compressFrame():
srcBufferの内容を、LZ4で圧縮したフレームへ圧縮します。一括の操作で、入力の全内容を消費し、出力全体を生成します。

注意: 状態を持たない操作です（LZ4F_cctx状態は不要）。アロケーターの負荷を減らすため、LZ4F_compressFrame()は既定で、圧縮状態と一部のテーブル用領域をスタックに確保します。このスタック使用量がアプリケーションにとって大きすぎる場合は、コンパイル時のマクロLZ4F_HEAPMODEを1にして`lz4frame.c`をコンパイルすることを検討してください。状態の確保はすべてヒープを使います。また、その場合、LZ4F_compressFrame()を呼ぶごとに、内部で複数のalloc/free呼び出しを行います。

@dstCapacityは、**必ず** &gt;= LZ4F_compressFrameBound(srcSize, preferencesPtr)でなければなりません。
@preferencesPtrは任意です。NULLを渡すと、すべての設定を既定値にします。
@return: dstBufferへ書いたバイト数。失敗した場合はエラーコードです（LZ4F_isError()で検査できます）。
*/
</pre>

<pre><code>LZ4FLIB_API size_t LZ4F_compressFrame(void* dstBuffer, size_t dstCapacity,
                                const void* srcBuffer, size_t srcSize,
                                const LZ4F_preferences_t* preferencesPtr);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_compressFrameBound():
srcSizeと設定を基に、LZ4F_compressFrame()による最大の圧縮サイズを返します。
`preferencesPtr`は任意です。NULLに置き換えると、既定の設定を想定します。
注意: この結果を使えるのはLZ4F_compressFrame()だけです。LZ4F_compressUpdate()にも関係し得ますが、flush()操作を一度も行わない場合に_限ります_。
*/
</pre>

<pre><code>LZ4FLIB_API size_t LZ4F_compressFrameBound(size_t srcSize, const LZ4F_preferences_t* preferencesPtr);


</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_compressionLevel_max():
@return: 許される最大圧縮レベル（現在は12）。
*/
</pre>

<pre><code>LZ4FLIB_API int LZ4F_compressionLevel_max(void);   /* v1.8.0+ */


</code></pre>

<pre class="lz4-source-comment">/*!
高度な圧縮関数
*/
</pre>

<pre><code>typedef struct LZ4F_cctx_s LZ4F_cctx;   /* incomplete type */
typedef LZ4F_cctx* LZ4F_compressionContext_t;  /* for compatibility with older APIs, prefer using LZ4F_cctx */

typedef struct {
  unsigned stableSrc;    /* 1 == src content will remain present on future calls to LZ4F_compress(); skip copying src content within tmp buffer */
  unsigned reserved[3];
} LZ4F_compressOptions_t;

</code></pre>

<pre class="lz4-source-comment">/*!
リソース管理
*/
</pre>

<pre><code>
#define LZ4F_VERSION 100    /* This number can be used to check for an incompatible API breaking change */
LZ4FLIB_API unsigned LZ4F_getVersion(void);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_createCompressionContext():
まず、ストリーミング圧縮中の処理状態を追跡するcompressionContextオブジェクトを生成します。LZ4F_createCompressionContext()にバージョンとLZ4F_cctx*へのポインターを渡し、生成したポインターをその場所へ書き込みます。
渡す@versionは、**必ず**LZ4F_VERSIONでなければなりません。特にDLLを使う場合の、バージョン不一致の可能性を追跡するためです。関数は、完全に確保したLZ4F_cctxオブジェクトへのポインターを提供します。
@cctxPtrは、**必ず** != NULLでなければなりません。
@returnがゼロでなければ、コンテキストの生成に失敗しています。
生成した圧縮コンテキストは、連続するストリーミング操作に何度も使えます。すべてのストリーミング圧縮処理が終わったら、LZ4F_freeCompressionContext()で状態オブジェクトを解放できます。
注意1: LZ4F_freeCompressionContext()は常に成功します。戻り値は無視できます。
注意2: LZ4F_freeCompressionContext()にNULLポインターを渡しても正常に動作します（何もしません）。
*/
</pre>

<pre><code>LZ4FLIB_API LZ4F_errorCode_t LZ4F_createCompressionContext(LZ4F_cctx** cctxPtr, unsigned version);
LZ4FLIB_API LZ4F_errorCode_t LZ4F_freeCompressionContext(LZ4F_cctx* cctx);


</code></pre>

<pre class="lz4-source-comment">/*!
圧縮
*/
</pre>

<pre><code>
#define LZ4F_HEADER_SIZE_MIN  7   /* LZ4 Frame header size can vary, depending on selected parameters */
#define LZ4F_HEADER_SIZE_MAX 19

</code></pre>

<pre class="lz4-source-comment">/*!
リトルエンディアン形式のブロックヘッダーのバイト数です。最上位ビットは、ブロックのデータが非圧縮かどうかを示します。
*/
</pre>

<pre><code>#define LZ4F_BLOCK_HEADER_SIZE 4

</code></pre>

<pre class="lz4-source-comment">/*!
リトルエンディアン形式のブロックチェックサムのフッターのバイト数です。
*/
</pre>

<pre><code>#define LZ4F_BLOCK_CHECKSUM_SIZE 4

</code></pre>

<pre class="lz4-source-comment">/*!
内容のチェックサムのバイト数です。
*/
</pre>

<pre><code>#define LZ4F_CONTENT_CHECKSUM_SIZE 4

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_compressBegin():
フレームヘッダーをdstBufferへ書き込みます。
dstCapacityは &gt;= LZ4F_HEADER_SIZE_MAXバイトでなければなりません。
`prefsPtr`は任意です。NULLを渡すと、すべての設定を既定値にします。
@return: ヘッダーとしてdstBufferへ書いたバイト数、またはエラーコードです（LZ4F_isError()で検査できます）。
*/
</pre>

<pre><code>LZ4FLIB_API size_t LZ4F_compressBegin(LZ4F_cctx* cctx,
                                      void* dstBuffer, size_t dstCapacity,
                                      const LZ4F_preferences_t* prefsPtr);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_compressBound():
srcSizeと設定を基に、最悪の場合でもLZ4F_compressUpdate()の成功を保証するのに必要な最小dstCapacityを提供します。
srcSize==0なら、代わりにLZ4F_flush()とLZ4F_compressEnd()の上限を提供します。
結果が有効なのは、LZ4F_compressUpdate()一回の呼び出しだけです。複数回呼ぶ際、出力バッファーを空にして先頭から再利用せず、徐々に満たす場合は、各呼び出しの前にLZ4F_compressBound()で残り容量が十分か確認しなければなりません。
同じsrcSizeとprefsPtrに対する@returnは常に同じです。
prefsPtrは任意です。NULLを渡すと、最悪の場合をカバーする設定にします。
技術的な詳細:
自動フラッシュを有効にしていなければ、@returnは内部バッファーに既に最大(blockSize-1)バイト入っている可能性を含みます。
LZ4F_compressEnd()で生成し得るので、フレームのフッター（終端とチェックサム）も含みます。
フレームヘッダーはLZ4F_compressBegin()で既に生成しているため、@returnには含みません。
*/
</pre>

<pre><code>LZ4FLIB_API size_t LZ4F_compressBound(size_t srcSize, const LZ4F_preferences_t* prefsPtr);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_compressUpdate():
必要なだけのデータを圧縮するため、繰り返し呼べます。
重要な規則: dstCapacityは、最悪の場合でも処理の成功を保証できるほど、**必ず**大きくなければなりません。この値はLZ4F_compressBound()が提供します。条件を守らないと、LZ4F_compress()は失敗します（結果はerrorCodeです）。エラー後の状態は未定義（UB）になり、再初期化または解放しなければなりません。
以前に非圧縮ブロックを書いた場合は、圧縮データの追加を続ける前に、バッファー内のデータをフラッシュします。
`cOptPtr`は任意です。NULLを渡すと、すべてのオプションを既定値にします。
@return: `dstBuffer`へ書いたバイト数。ゼロの場合もあり、入力データをバッファーに入れただけという意味です。失敗した場合はエラーコードです（LZ4F_isError()で検査できます）。
*/
</pre>

<pre><code>LZ4FLIB_API size_t LZ4F_compressUpdate(LZ4F_cctx* cctx,
                                       void* dstBuffer, size_t dstCapacity,
                                 const void* srcBuffer, size_t srcSize,
                                 const LZ4F_compressOptions_t* cOptPtr);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_flush():
ブロックが完全に満たされるのを待たず、データを直ちに生成・送信しなければならない場合は、LZ4_flush()を呼べます。cctx内に蓄えたデータを直ちに圧縮します。
`dstCapacity`は、処理の成功を保証できるほど大きくなければなりません。
`cOptPtr`は任意です。NULLを渡すと、すべてのオプションを既定値にします。
@return: dstBufferへ書いたバイト数。cctx内にデータがなければ、ゼロの場合もあります。失敗した場合はエラーコードです（LZ4F_isError()で検査できます）。
注意: dstCapacity &gt;= LZ4F_compressBound(0, prefsPtr)なら、LZ4F_flush()の成功を保証します。
*/
</pre>

<pre><code>LZ4FLIB_API size_t LZ4F_flush(LZ4F_cctx* cctx,
                              void* dstBuffer, size_t dstCapacity,
                        const LZ4F_compressOptions_t* cOptPtr);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_compressEnd():
LZ4フレームを正しく終了するには、LZ4F_compressEnd()を呼びます。LZ4_flush()と同じように、`cctx`内に残ったデータをすべてフラッシュし、endMarkとチェックサムでフレームを正しく完結させます。
`cOptPtr`は任意です。NULLを渡すと、すべてのオプションを既定値にします。
@return: dstBufferへ書いたバイト数（必ず &gt;= 4。endMark）、または失敗時のエラーコードです（LZ4F_isError()で検査できます）。
注意: dstCapacity &gt;= LZ4F_compressBound(0, prefsPtr)なら、LZ4F_compressEnd()の成功を保証します。呼び出しに成功すると、`cctx`は別の圧縮処理に再び使えます。
*/
</pre>

<pre><code>LZ4FLIB_API size_t LZ4F_compressEnd(LZ4F_cctx* cctx,
                                    void* dstBuffer, size_t dstCapacity,
                              const LZ4F_compressOptions_t* cOptPtr);


</code></pre>

<pre class="lz4-source-comment">/*!
展開関数
*/
</pre>

<pre><code>typedef struct LZ4F_dctx_s LZ4F_dctx;   /* incomplete type */
typedef LZ4F_dctx* LZ4F_decompressionContext_t;   /* compatibility with previous API versions */

typedef struct {
  unsigned stableDst;     /* pledges that last 64KB decompressed data is present right before @dstBuffer pointer.
                           * This optimization skips internal storage operations.
                           * Once set, this pledge must remain valid up to the end of current frame. */
  unsigned skipChecksums; /* disable checksum calculation and verification, even when one is present in frame, to save CPU time.
                           * Setting this option to 1 once disables all checksums for the rest of the frame. */
  unsigned reserved1;     /* must be set to zero for forward compatibility */
  unsigned reserved0;     /* idem */
} LZ4F_decompressOptions_t;


</code></pre>

<pre class="lz4-source-comment">/*!
リソース管理
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_createDecompressionContext():
展開処理全体を追跡するLZ4F_dctxオブジェクトを生成します。
渡す@versionは、**必ず**LZ4F_VERSIONでなければなりません。
@dctxPtrは、**必ず**有効でなければなりません。
関数は、確保・初期化済みのLZ4F_dctxオブジェクトへのポインターを@dctxPtrへ書き込みます。
@returnはerrorCodeで、LZ4F_isError()で検査できます。
dctxのメモリはLZ4F_freeDecompressionContext()で解放できます。その結果は、解放時のdecompressionContextの状態を示します。つまり、展開が完全かつ正しく終わっている場合は == 0となるはずです。
*/
</pre>

<pre><code>LZ4FLIB_API LZ4F_errorCode_t LZ4F_createDecompressionContext(LZ4F_dctx** dctxPtr, unsigned version);
LZ4FLIB_API LZ4F_errorCode_t LZ4F_freeDecompressionContext(LZ4F_dctx* dctx);


</code></pre>

<pre class="lz4-source-comment">/*!
ストリーミング展開関数
*/
</pre>

<pre><code>
#define LZ4F_MAGICNUMBER 0x184D2204U
#define LZ4F_MAGIC_SKIPPABLE_START 0x184D2A50U
#define LZ4F_MIN_SIZE_TO_KNOW_HEADER_LENGTH 5

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_headerSize(): v1.9.0+
`src`から始まるフレームのヘッダーサイズを提供します。
`srcSize`は &gt;= LZ4F_MIN_SIZE_TO_KNOW_HEADER_LENGTHでなければなりません。この量があれば、ヘッダーの長さを読み取れます。
@return: フレームヘッダーのサイズ、またはエラーコードです。LZ4F_isError()で検査できます。
注意: フレームヘッダーのサイズは可変ですが、&gt;= LZ4F_HEADER_SIZE_MINバイト、かつ &lt;= LZ4F_HEADER_SIZE_MAXバイトであることを保証します。
*/
</pre>

<pre><code>LZ4FLIB_API size_t LZ4F_headerSize(const void* src, size_t srcSize);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_getFrameInfo():
フレームのパラメーター（最大blockSize、dictIDなど）を取り出します。使用は任意で、利用者はLZ4F_decompress()を直接呼ぶこともできます。
取り出した情報は、既存のLZ4F_frameInfo_t構造体へ書き込みます。メモリ確保や辞書の識別に役立ちます。

次の状況で使えます。
1) 新しいフレームの先頭で、LZ4F_decompress()を一度も呼んでいない場合。`srcBuffer`からヘッダーを読み取り、そのヘッダーを消費して展開処理を開始します。
入力にはフレームヘッダー全体が入るだけのサイズが必要です。ヘッダーサイズはLZ4F_headerSize()で事前に調べられます。サイズは可変ですが、&gt;= LZ4F_HEADER_SIZE_MINバイト、かつ &lt;= LZ4F_HEADER_SIZE_MAXバイトであることを保証します。したがって、調べずにLZ4F_HEADER_SIZE_MAXバイト以上を渡しても常に動作します。ヘッダーサイズを超える入力データも渡せますが、消費するのはヘッダーだけです。入力サイズが不足し、ヘッダーサイズより小さければ、関数は失敗してエラーコードを返します。
2) 展開開始後は、dctx内に保存した、既に読み取り済みのフレームパラメーターを、いつでも取り出せます。ただし、展開を始めたばかりで、ヘッダーを読み取るのに十分な情報をまだ読んでいなければ、失敗します。

srcBufferから消費したバイト数は、*srcSizePtrへ書き込みます（必ず元の値以下）。バイトを消費するのは、展開がまだ始まっておらず、かつヘッダーの読み取りに成功した場合だけです。その後の展開は、(srcBuffer + *srcSizePtr)から再開しなければなりません。
@return: 次の呼び出しでLZ4F_decompress()が期待するsrcSizeバイト数の目安、またはエラーコードです。LZ4F_isError()で検査できます。
注意1: エラーの場合はdctxを変更しません。展開処理は安全に先頭から再開できます。
注意2: フレームのパラメーターは、確保済みのLZ4F_frameInfo_t構造体へ*コピーします*。
*/
</pre>

<pre><code>LZ4FLIB_API size_t
LZ4F_getFrameInfo(LZ4F_dctx* dctx,
                  LZ4F_frameInfo_t* frameInfoPtr,
            const void* srcBuffer, size_t* srcSizePtr);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_decompress():
`srcBuffer`内の圧縮データを復元するため、繰り返し呼びます。
有効なdctx状態が必要です。srcBufferから最大*srcSizePtrバイトを読み、容量*dstSizePtrのdstBufferへデータを展開します。
srcBufferから消費したバイト数を*srcSizePtrへ、dstBufferへ展開したバイト数を*dstSizePtrへ書き込みます（どちらも必ず元の値以下）。
入力の全バイトを読むとは限らないので、*srcSizePtrの値を常に確認してください。未消費の入力データは、後続の呼び出しで再び渡さなければなりません。
`dstBuffer`は、連続する呼び出しの間で自由に変更できます。その内容は上書きします。

注意: `LZ4F_decompress()`より先に`LZ4F_getFrameInfo()`を呼んだ場合は、ヘッダー読み取りで消費したバイト数を反映するよう、srcBufferを更新しなければなりません。更新せずに`LZ4F_decompress()`を呼ぶと、展開の失敗、またはさらに悪いことに、成功しているように見える誤った展開を招きます。詳細は`LZ4F_getFrameInfo()`の説明を参照してください。

@return: 次の呼び出しでLZ4F_decompress()が期待する`srcSize`バイト数の目安です。概略として、現在の（または残りの）圧縮ブロックのサイズと、次のブロックのヘッダーの合計です。目安に従うと中間バッファーを省けるため、速度が少し向上します。ただし、あくまで目安で、任意のsrcSizeを渡せます。
フレームを完全に展開すると、@returnは0です（それ以上のデータは期待しません）。フレームの展開に必要な量より多くのバイトを渡した場合は、現在のフレームの終端で正確に読み取りを止め、0を返します。
展開に失敗した場合はエラーコードを返し、LZ4F_isError()で検査できます。エラー後の`dctx`コンテキストは再開できません。LZ4F_resetDecompressionContext()で正常な状態に戻してください。
フレームの展開が完全に終わった後は、dctxを別のフレームの展開に再利用できます。
*/
</pre>

<pre><code>LZ4FLIB_API size_t
LZ4F_decompress(LZ4F_dctx* dctx,
                void* dstBuffer, size_t* dstSizePtr,
          const void* srcBuffer, size_t* srcSizePtr,
          const LZ4F_decompressOptions_t* dOptPtr);


</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_resetDecompressionContext(): v1.8.0で追加
エラーの場合、コンテキストは「未定義」の状態になります。再利用する前に、リセットしなければなりません。
未完了の展開を途中で停止し、同じコンテキストのリソースを使って新たな展開を始めるためにも使えます。
*/
</pre>

<pre><code>LZ4FLIB_API void LZ4F_resetDecompressionContext(LZ4F_dctx* dctx);   /* always successful */


</code></pre>

<pre class="lz4-source-comment">/*!
辞書圧縮API
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
辞書は、小さなメッセージ（KB単位）の圧縮に役立ち、圧縮効率を大幅に改善します。
LZ4はどのような入力も辞書として受け入れますが、役立つのは最後の64 KBだけです。一般には、サンプル群から高品質な辞書を生成するZstandardのDictionary Builderを使うと、よりよい結果が得られます。
正常に展開するには、展開側でも同じ辞書を使わなければなりません。展開時に正しい辞書を識別できるよう、フレームヘッダーには、任意でdictIDフィールドを埋め込めます。
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_compressBegin_usingDict(): v1.10から安定
辞書を使うストリーミング圧縮を初期化し、フレームヘッダーをdstBufferへ書き込みます。
@dstCapacityは &gt;= LZ4F_HEADER_SIZE_MAXバイトでなければなりません。
@prefsPtrは任意で、NULLも渡せます。ただし、フレームヘッダーへdictIDを提供するには、この設定を渡す以外に方法がありません。
@dictBufferは、圧縮セッションより長く存続しなければなりません。
@return: ヘッダーとしてdstBufferへ書いたバイト数、またはエラーコードです（LZ4F_isError()で検査できます）。
注意: LZ4Frame仕様では、独立した各ブロックを辞書で圧縮できますが、この関数が対応するのは、最初のブロックだけが辞書を使う、より限られた状況です。一ブロックしか必要ない小さなデータには、それでも役立ちます。より大きな入力では、後述のLZ4F_compressFrame_usingCDict()の方に関心があるかもしれません。
*/
</pre>

<pre><code>LZ4FLIB_API size_t
LZ4F_compressBegin_usingDict(LZ4F_cctx* cctx,
                            void* dstBuffer, size_t dstCapacity,
                      const void* dictBuffer, size_t dictSize,
                      const LZ4F_preferences_t* prefsPtr);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_decompress_usingDict(): v1.10から安定
事前に定めた辞書を使う点を除き、LZ4F_decompress()と同じです。
辞書は前処理をせず、その場で使います。フレーム全体の展開中ずっと、アクセス可能でなければなりません。
*/
</pre>

<pre><code>LZ4FLIB_API size_t
LZ4F_decompress_usingDict(LZ4F_dctx* dctxPtr,
                          void* dstBuffer, size_t* dstSizePtr,
                    const void* srcBuffer, size_t* srcSizePtr,
                    const void* dict, size_t dictSize,
                    const LZ4F_decompressOptions_t* decompressOptionsPtr);

</code></pre>

<pre class="lz4-source-comment">/*!
複数処理での辞書圧縮
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
辞書の読み込みには、テーブルを構築するためのコストがあります。複数処理用の辞書APIを使うと、並行処理も含め、任意の数の圧縮処理でこのコストを共有でき、これらの場合の圧縮レイテンシーを大幅に改善します。
展開時には辞書の初期化コストがないので、展開側に相当する複数処理用APIはありません。通常のLZ4F_decompress_usingDict()を使ってください。
*/
</pre>

<pre><code>typedef struct LZ4F_CDict_s LZ4F_CDict;

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_createCDict(): v1.10から安定
同じ辞書で複数のメッセージやブロックを圧縮する場合、初期化は一度だけ行うことを推奨します。
LZ4_createCDict()は、処理済みの辞書を生成し、以後の圧縮処理を開始時の遅延なしに始められるようにします。
LZ4_CDictは、読み取り専用で使うため、一度生成して、複数のスレッドで並行して共有できます。
内容をCDict内へコピーするので、LZ4_CDict生成後は@dictBufferを解放できます。
*/
</pre>

<pre><code>LZ4FLIB_API LZ4F_CDict* LZ4F_createCDict(const void* dictBuffer, size_t dictSize);
LZ4FLIB_API void        LZ4F_freeCDict(LZ4F_CDict* CDict);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_compressFrame_usingCDict(): v1.10から安定
処理済みの辞書を使い、srcBuffer全体を有効なLZ4フレームへ圧縮します。
@cctxは、LZ4F_createCompressionContext()で生成したコンテキストを指さなければなりません。
@cdict==NULLなら、辞書なしで圧縮します。
@dstBufferは、**必ず** &gt;= LZ4F_compressFrameBound(srcSize, preferencesPtr)でなければなりません。条件を守らないと失敗します（@returnはerrorCode）。
LZ4F_preferences_t構造体は任意で、NULLを渡せますが、推奨しません。フレームヘッダーへ@dictIDを提供できる唯一の方法だからです。
@return: dstBufferへ書いたバイト数、または失敗時のエラーコードです（LZ4F_isError()で検査できます）。
注意: 複数の独立ブロックを生成する大きな入力では、この関数は各ブロックに辞書を使います。
*/
</pre>

<pre><code>LZ4FLIB_API size_t
LZ4F_compressFrame_usingCDict(LZ4F_cctx* cctx,
                              void* dst, size_t dstCapacity,
                        const void* src, size_t srcSize,
                        const LZ4F_CDict* cdict,
                        const LZ4F_preferences_t* preferencesPtr);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_compressBegin_usingCDict(): v1.10から安定
辞書を使うストリーミング圧縮を初期化し、フレームヘッダーをdstBufferへ書き込みます。
@dstCapacityは &gt;= LZ4F_HEADER_SIZE_MAXバイトでなければなりません。
@prefsPtrは任意で、NULLを渡せます。ただし、フレームヘッダーに@dictIDを挿入できる唯一の方法である点に注意してください。
@cdictは、圧縮セッションより長く存続しなければなりません。
@return: ヘッダーとしてdstBufferへ書いたバイト数、またはエラーコードです。LZ4F_isError()で検査できます。
*/
</pre>

<pre><code>LZ4FLIB_API size_t
LZ4F_compressBegin_usingCDict(LZ4F_cctx* cctx,
                              void* dstBuffer, size_t dstCapacity,
                        const LZ4F_CDict* cdict,
                        const LZ4F_preferences_t* prefsPtr);


#if defined (__cplusplus)
}
#endif

#endif  /* LZ4F_H_09782039843 */

#if defined(LZ4F_STATIC_LINKING_ONLY) &amp;&amp; !defined(LZ4F_H_STATIC_09782039843)
#define LZ4F_H_STATIC_09782039843

</code></pre>

<pre class="lz4-source-comment">/*!
注意:
以下の宣言は安定しておらず、将来変わる場合があります。そのため、呼び出し側がライブラリに静的にリンクしている場合にだけ、依存しても安全です。宣言を使うには、LZ4F_STATIC_LINKING_ONLYを定義してください。
既定では、これらのシンボルは共有・動的ライブラリに公開しません。LZ4F_PUBLISH_STATIC_FUNCTIONSを定義すれば、この動作を上書きし、公開を強制できます。自己責任で使ってください。
*/
</pre>

<pre><code>
#if defined (__cplusplus)
extern &quot;C&quot; {
#endif

#ifdef LZ4F_PUBLISH_STATIC_FUNCTIONS
# define LZ4FLIB_STATIC_API LZ4FLIB_API
#else
# define LZ4FLIB_STATIC_API
#endif


</code></pre>

<pre class="lz4-source-comment">/*!
エラーの一覧
*/
</pre>

<pre><code>#define LZ4F_LIST_ERRORS(ITEM) \
        ITEM(OK_NoError) \
        ITEM(ERROR_GENERIC) \
        ITEM(ERROR_maxBlockSize_invalid) \
        ITEM(ERROR_blockMode_invalid) \
        ITEM(ERROR_parameter_invalid) \
        ITEM(ERROR_compressionLevel_invalid) \
        ITEM(ERROR_headerVersion_wrong) \
        ITEM(ERROR_blockChecksum_invalid) \
        ITEM(ERROR_reservedFlag_set) \
        ITEM(ERROR_allocation_failed) \
        ITEM(ERROR_srcSize_tooLarge) \
        ITEM(ERROR_dstMaxSize_tooSmall) \
        ITEM(ERROR_frameHeader_incomplete) \
        ITEM(ERROR_frameType_unknown) \
        ITEM(ERROR_frameSize_wrong) \
        ITEM(ERROR_srcPtr_wrong) \
        ITEM(ERROR_decompressionFailed) \
        ITEM(ERROR_headerChecksum_invalid) \
        ITEM(ERROR_contentChecksum_invalid) \
        ITEM(ERROR_frameDecoding_alreadyStarted) \
        ITEM(ERROR_compressionState_uninitialized) \
        ITEM(ERROR_parameter_null) \
        ITEM(ERROR_io_write) \
        ITEM(ERROR_io_read) \
        ITEM(ERROR_maxCode)

#define LZ4F_GENERATE_ENUM(ENUM) LZ4F_##ENUM,

</code></pre>

<pre class="lz4-source-comment">/*!
個々のエラーを扱えるよう、列挙値の一覧を公開しています。
*/
</pre>

<pre><code>typedef enum { LZ4F_LIST_ERRORS(LZ4F_GENERATE_ENUM)
              _LZ4F_dummy_error_enum_for_c89_never_used } LZ4F_errorCodes;

LZ4FLIB_STATIC_API LZ4F_errorCodes LZ4F_getErrorCode(size_t functionResult);

</code></pre>

<pre class="lz4-source-comment">/*!
高度な圧縮操作
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_getBlockSize():
@return: @blockSizeIDに対応する最大ブロックサイズを、スカラー形式（size_t）で返します。@blockSizeIDが不正な場合はエラーコードで、LZ4F_isError()で検査できます。
*/
</pre>

<pre><code>LZ4FLIB_STATIC_API size_t LZ4F_getBlockSize(LZ4F_blockSizeID_t blockSizeID);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_uncompressedUpdate():
非圧縮ブロックとして保存するデータを追加するため、繰り返し呼べます。
重要な規則: 圧縮を行わないので、dstCapacityは入力バッファー全体を保存できるほど、**必ず**大きくなければなりません。条件を守らないと失敗します（結果はerrorCode）。エラー後の状態は未定義（UB）になり、再初期化または解放しなければなりません。
以前に圧縮ブロックを書いた場合は、非圧縮データの追加を続ける前に、まずバッファー内のデータをフラッシュします。
この操作に対応するのは、LZ4F_blockIndependentを使う場合だけです。
`cOptPtr`は任意です。NULLを渡すと、すべてのオプションを既定値にします。
@return: `dstBuffer`へ書いたバイト数。ゼロの場合もあり、入力データをバッファーに入れただけという意味です。失敗した場合はエラーコードです（LZ4F_isError()で検査できます）。
*/
</pre>

<pre><code>LZ4FLIB_STATIC_API size_t
LZ4F_uncompressedUpdate(LZ4F_cctx* cctx,
                        void* dstBuffer, size_t dstCapacity,
                  const void* srcBuffer, size_t srcSize,
                  const LZ4F_compressOptions_t* cOptPtr);

</code></pre>

<pre class="lz4-source-comment">/*!
メモリ確保のカスタマイズ
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
メモリ確保のカスタマイズ: v1.9.4+
これらのプロトタイプで、独自の確保・解放関数を渡せます。
状態生成時に、後述のLZ4F_create*_advanced()を使ってLZ4F_customMemを渡します。
確保・解放処理はすべて、通常の&lt;stdlib.h&gt;の関数に代わり、この独自の関数で行います。
*/
</pre>

<pre><code>typedef void* (*LZ4F_AllocFunction) (void* opaqueState, size_t size);
typedef void* (*LZ4F_CallocFunction) (void* opaqueState, size_t size);
typedef void  (*LZ4F_FreeFunction) (void* opaqueState, void* address);
typedef struct {
    LZ4F_AllocFunction customAlloc;
    LZ4F_CallocFunction customCalloc; /* optional; when not defined, uses customAlloc + memset */
    LZ4F_FreeFunction customFree;
    void* opaqueState;
} LZ4F_CustomMem;
static
#ifdef __GNUC__
__attribute__((__unused__))
#endif
LZ4F_CustomMem const LZ4F_defaultCMem = { NULL, NULL, NULL, NULL };  /**&lt; this constant defers to stdlib&#x27;s functions */

LZ4FLIB_STATIC_API LZ4F_cctx* LZ4F_createCompressionContext_advanced(LZ4F_CustomMem customMem, unsigned version);
LZ4FLIB_STATIC_API LZ4F_dctx* LZ4F_createDecompressionContext_advanced(LZ4F_CustomMem customMem, unsigned version);
LZ4FLIB_STATIC_API LZ4F_CDict* LZ4F_createCDict_advanced(LZ4F_CustomMem customMem, const void* dictBuffer, size_t dictSize);


#if defined (__cplusplus)
}
#endif

#endif  /* defined(LZ4F_STATIC_LINKING_ONLY) &amp;&amp; !defined(LZ4F_H_STATIC_09782039843) */
</code></pre>