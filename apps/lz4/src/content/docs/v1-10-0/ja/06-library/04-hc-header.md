---
title: "LZ4: 高圧縮APIヘッダー"
licenseSource: "lz4-1-10-0-lib-lz4hc-h"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>e43824e8a9ba16f54100c4ccbccfa5782a858ca9ab83c48aac303fea3e76e21e</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/lib/lz4hc.h\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/lib/lz4hc.h.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>独立した説明コメントを日本語に訳し、法的通知は英語全文で保持しました。宣言・マクロ・コード中のコメントと診断文字列は変更していません。LZ4HC_CLEVEL_MINの宣言は2、LZ4_compress_HC()の説明は1から最大値までという原記述です。本文のLZ4_resetStreamHC(_fast)とLZ4_streamHCsも原表記を保持しています。後半の実験的APIの説明と、公開部分にもあるLZ4_resetStreamHC_fast()の宣言を削除・統合していません。本文の仕様・性能説明は固定原著の記述で、今回の測定や実行結果ではありません。</p>"
---


<pre class="lz4-source-comment">/*
   LZ4 HC - High Compression Mode of LZ4
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

<pre><code>#ifndef LZ4_HC_H_19834876238432
#define LZ4_HC_H_19834876238432

#if defined (__cplusplus)
extern &quot;C&quot; {
#endif

</code></pre>

<pre class="lz4-source-comment">/*!
依存関係
*/
</pre>

<pre class="lz4-source-comment">/*!
注意: lz4hcのコンパイルには、lz4.h/lz4.cが必要です。
*/
</pre>

<pre><code>#include &quot;lz4.h&quot;   /* stddef, LZ4LIB_API, LZ4_DEPRECATED */


</code></pre>

<pre class="lz4-source-comment">/*!
便利な定数
*/
</pre>

<pre><code>#define LZ4HC_CLEVEL_MIN         2
#define LZ4HC_CLEVEL_DEFAULT     9
#define LZ4HC_CLEVEL_OPT_MIN    10
#define LZ4HC_CLEVEL_MAX        12


</code></pre>

<pre class="lz4-source-comment">/*!
ブロック圧縮
*/
</pre>

<pre class="lz4-source-comment">/*!
LZ4_compress_HC():
強力ですが遅い「HC」アルゴリズムを使い、`src`のデータを`dst`へ圧縮します。
`dst`は事前に確保しなければなりません。
`dstCapacity &gt;= LZ4_compressBound(srcSize)`なら、圧縮の成功を保証します（&quot;lz4.h&quot;参照）。
サポートする`srcSize`の最大値はLZ4_MAX_INPUT_SIZEです（&quot;lz4.h&quot;参照）。
`compressionLevel`: 1からLZ4HC_CLEVEL_MAXまでの任意の値で動作します。&gt; LZ4HC_CLEVEL_MAXの値は、LZ4HC_CLEVEL_MAXと同じように動作します。
@return: &#x27;dst&#x27;へ書いたバイト数、または圧縮失敗時は0。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_compress_HC (const char* src, char* dst, int srcSize, int dstCapacity, int compressionLevel);


</code></pre>

<pre class="lz4-source-comment">/*!
注意:
展開関数は&quot;lz4.h&quot;で提供します（BSDライセンス）。
*/
</pre>

<pre><code>

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_compress_HC_extStateHC():
`state`に外部で確保したメモリ領域を使う点を除き、LZ4_compress_HC()と同じです。
`state`のサイズはLZ4_sizeofStateHC()が提供します。
メモリ領域は8バイト境界に合わせなければなりません（通常のmalloc()なら適切に行うはずです）。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_sizeofStateHC(void);
LZ4LIB_API int LZ4_compress_HC_extStateHC(void* stateHC, const char* src, char* dst, int srcSize, int maxDstSize, int compressionLevel);


</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_compress_HC_destSize(): v1.9.0+
`targetDstSize`の容量に収まるよう、`src`から可能な限り多くのデータを圧縮します。
結果は2部分で提供します。
@return: &#x27;dst&#x27;へ書いたバイト数（必ず &lt;= targetDstSize）、または圧縮失敗時は0。
`srcSizePtr`: 成功時は、`src`から読んだバイト数を示すよう、*srcSizePtrを更新します。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_compress_HC_destSize(void* stateHC,
                                  const char* src, char* dst,
                                        int* srcSizePtr, int targetDstSize,
                                        int compressionLevel);


</code></pre>

<pre class="lz4-source-comment">/*!
ストリーミング圧縮
バッファーを持たない同期API
*/
</pre>

<pre><code> typedef union LZ4_streamHC_u LZ4_streamHC_t;   /* incomplete type (defined later) */

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_createStreamHC()とLZ4_freeStreamHC():
LZ4 HCのストリーミング状態用のメモリを生成・解放します。
新たに生成した状態は、自動的に初期化します。
同じ状態は連続して何度も使えます。新たなブロックのストリームを始める際は、LZ4_resetStreamHC_fast()で開始します。
*/
</pre>

<pre><code>LZ4LIB_API LZ4_streamHC_t* LZ4_createStreamHC(void);
LZ4LIB_API int             LZ4_freeStreamHC (LZ4_streamHC_t* streamHCPtr);

</code></pre>

<pre class="lz4-source-comment">/*!
これらの関数は、任意のサイズの連続するブロックを圧縮し、以前のブロックを辞書として使って、圧縮率を改善します。
重要な前提として、次のブロックを圧縮する間、以前のブロック（最大64 KB）が読み取りアクセス可能なままである必要があります。リングバッファーには例外があり、64 KBより小さくてもかまいません。リングバッファーの状況は、LZ4_compress_HC_continue()内で自動的に検出・処理します。

圧縮開始前に、状態を確保して正しく初期化しなければなりません。LZ4_createStreamHC()は両方を行いますが、圧縮レベルはLZ4HC_CLEVEL_DEFAULTに設定します。
圧縮レベルは、LZ4_resetStreamHC_fast()（新たなストリームを開始）、またはLZ4_setCompressionLevel()（同じストリームのブロック間で、いつでも可能。実験的）で選べます。
LZ4_resetStreamHC_fast()が動作するのは、少なくとも一度、正しく初期化した状態だけです。LZ4_createStreamHC()で生成した状態は、自動的にこの条件を満たします。

リセット後、最初の「仮想的なブロック」を初期辞書に指定できます。LZ4_loadDictHC()を使います（任意）。
注意: LZ4_loadDictHC()が正しいデータ構造を作るには、辞書を読み込む_前に_圧縮レベルを設定することが不可欠です。

連続する各ブロックを圧縮するには、LZ4_compress_HC_continue()を呼びます。ブロック数に上限はありません。初期辞書がある場合はそれも含め、以前の入力ブロックは圧縮中、アクセス可能で、変更されてはなりません。
LZ4_setCompressionLevel()（実験的）を使い、ブロックの間なら、いつでも圧縮レベルを変更できます。

@dstバッファーは、最悪の場合に対応できるサイズにするべきです（LZ4_compressBound()参照。圧縮の成功を保証します）。失敗時、APIは回復を保証しないので、状態を_必ず_リセットしなければなりません。
@dstバッファーのサイズを &gt;= LZ4_compressBound()にできない場合でも、圧縮の成功を確保するため、LZ4_compress_HC_continue_destSize()の使用を検討してください。

次のブロックの圧縮中、以前の入力ブロックを同じ場所に未変更のまま保持できない場合は、LZ4_saveDictHC()で最後のブロック群を、より安定したメモリ領域へコピーできます。戻り値は、&#x27;safeBuffer&#x27;へ実際に保存した辞書のサイズです（&lt;= 64 KB）。

ストリーミング圧縮の終了後は、LZ4_resetStreamHC_fast()でリセットするだけで、同じLZ4_streamHC_t状態を使い、新たなブロックのストリームを始められます。
*/
</pre>

<pre><code>
LZ4LIB_API void LZ4_resetStreamHC_fast(LZ4_streamHC_t* streamHCPtr, int compressionLevel);   /* v1.9.0+ */
LZ4LIB_API int  LZ4_loadDictHC (LZ4_streamHC_t* streamHCPtr, const char* dictionary, int dictSize);

LZ4LIB_API int LZ4_compress_HC_continue (LZ4_streamHC_t* streamHCPtr,
                                   const char* src, char* dst,
                                         int srcSize, int maxDstSize);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_compress_HC_continue_destSize(): v1.9.0+
LZ4_compress_HC_continue()と似ていますが、`targetDstSize`の容量に収まるよう、`src`から可能な限り多くのデータを読みます。
結果は2部分で提供します。
@return: &#x27;dst&#x27;へ書いたバイト数（必ず &lt;= targetDstSize）、または圧縮失敗時は0。
`srcSizePtr`: 成功時は、`src`から読んだバイト数を示すよう、*srcSizePtrを更新します。
入力全体を消費するとは限らない点に注意してください。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_compress_HC_continue_destSize(LZ4_streamHC_t* LZ4_streamHCPtr,
                                           const char* src, char* dst,
                                                 int* srcSizePtr, int targetDstSize);

LZ4LIB_API int LZ4_saveDictHC (LZ4_streamHC_t* streamHCPtr, char* safeBuffer, int maxDictSize);


</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_attach_HC_dictionary(): v1.10.0から安定
静的辞書を何度も効率よく再利用できるAPIです。

毎回の圧縮前に、辞書バッファーを作業コンテキストへ再読み込みしたり、読み込み済みの辞書のLZ4_streamHC_tを作業用LZ4_streamHC_tへコピーしたりする代わりに、コピーのない準備方法を提供します。作業ストリームは、その場にある辞書ストリームを参照します。

辞書ストリームの状態には、いくつかの前提があります。現在、動作を期待すべきなのは、LZ4_loadDictHC()で準備したストリームだけです。
辞書ストリームのポインターとしてNULLも渡せます。その場合は、既存の辞書ストリームを解除します。
辞書を接続するべきなのは、履歴のないストリームだけです（つまり、リセットした直後のストリーム）。

辞書は、現在のストリームセッションの間だけ、作業ストリームへ接続したままになります。LZ4_resetStreamHC(_fast)を呼ぶと、作業ストリームから辞書コンテキストの関連付けを取り除きます。辞書ストリームと元のバッファーは、ストリームセッションの全期間にわたり、同じ場所で、アクセス可能かつ未変更でなければなりません。
*/
</pre>

<pre><code>LZ4LIB_API void
LZ4_attach_HC_dictionary(LZ4_streamHC_t* working_stream,
                   const LZ4_streamHC_t* dictionary_stream);


</code></pre>

<pre class="lz4-source-comment">/*!
!!!!!! 静的リンク専用 !!!!!!
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
内部用の定義:
これらの定義を直接使わないでください。
`LZ4_streamHC_t`を静的に確保できるようにするためだけに公開しています。以下の型ではなく、`LZ4_streamHC_t`を直接宣言してください。
その場合でも、バージョン間で定義が変わる場合があるので、静的リンクの際にだけ行ってください。
*/
</pre>

<pre><code>
#define LZ4HC_DICTIONARY_LOGSIZE 16
#define LZ4HC_MAXD (1&lt;&lt;LZ4HC_DICTIONARY_LOGSIZE)
#define LZ4HC_MAXD_MASK (LZ4HC_MAXD - 1)

#define LZ4HC_HASH_LOG 15
#define LZ4HC_HASHTABLESIZE (1 &lt;&lt; LZ4HC_HASH_LOG)
#define LZ4HC_HASH_MASK (LZ4HC_HASHTABLESIZE - 1)


</code></pre>

<pre class="lz4-source-comment">/*!
これらの定義を決して直接使わないでください。
代わりに、LZ4_streamHC_tを宣言または確保してください。
*/
</pre>

<pre><code>typedef struct LZ4HC_CCtx_internal LZ4HC_CCtx_internal;
struct LZ4HC_CCtx_internal
{
    LZ4_u32 hashTable[LZ4HC_HASHTABLESIZE];
    LZ4_u16 chainTable[LZ4HC_MAXD];
    const LZ4_byte* end;     /* next block here to continue on current prefix */
    const LZ4_byte* prefixStart;  /* Indexes relative to this position */
    const LZ4_byte* dictStart; /* alternate reference for extDict */
    LZ4_u32 dictLimit;       /* below that point, need extDict */
    LZ4_u32 lowLimit;        /* below that point, no more history */
    LZ4_u32 nextToUpdate;    /* index from which to continue dictionary update */
    short   compressionLevel;
    LZ4_i8  favorDecSpeed;   /* favor decompression speed if this flag set,
                                otherwise, favor compression ratio */
    LZ4_i8  dirty;           /* stream has to be fully reset if this flag is set */
    const LZ4HC_CCtx_internal* dictCtx;
};

#define LZ4_STREAMHC_MINSIZE  262200  /* static size, for inter-version compatibility */
union LZ4_streamHC_u {
    char minStateSize[LZ4_STREAMHC_MINSIZE];
    LZ4HC_CCtx_internal internal_donotuse;
}; /* previously typedef&#x27;d to LZ4_streamHC_t */

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_streamHC_t:
LZ4 HCのストリーミング状態を静的に確保できる構造体です。スタック上への静的な確保や、より大きな構造体の一部としての確保に使えます。
この状態は、最初に使う前に、LZ4_initStreamHC()で**必ず**初期化しなければなりません。
LZ4_createStreamHC()で状態を生成した場合（推奨）は、LZ4_initStreamHC()の呼び出しが不要な点に注意してください。通常の生成関数を使えば、新たな状態は自動的に初期化します。
静的な確保を使えるのは、静的リンクとの組み合わせだけです。
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_initStreamHC(): v1.9.0+
静的に確保したLZ4_streamHC_tを最初に使う前に必要です。
v1.9.0より前では、代わりにLZ4_resetStreamHC()を使ってください。
*/
</pre>

<pre><code>LZ4LIB_API LZ4_streamHC_t* LZ4_initStreamHC(void* buffer, size_t size);


</code></pre>

<pre class="lz4-source-comment">/*!
非推奨の関数
*/
</pre>

<pre class="lz4-source-comment">/*!
非推奨の警告を無効にするには、lz4.hのLZ4_DISABLE_DEPRECATE_WARNINGSを参照してください。
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
非推奨の圧縮関数
*/
</pre>

<pre><code>LZ4_DEPRECATED(&quot;use LZ4_compress_HC() instead&quot;) LZ4LIB_API int LZ4_compressHC               (const char* source, char* dest, int inputSize);
LZ4_DEPRECATED(&quot;use LZ4_compress_HC() instead&quot;) LZ4LIB_API int LZ4_compressHC_limitedOutput (const char* source, char* dest, int inputSize, int maxOutputSize);
LZ4_DEPRECATED(&quot;use LZ4_compress_HC() instead&quot;) LZ4LIB_API int LZ4_compressHC2              (const char* source, char* dest, int inputSize, int compressionLevel);
LZ4_DEPRECATED(&quot;use LZ4_compress_HC() instead&quot;) LZ4LIB_API int LZ4_compressHC2_limitedOutput(const char* source, char* dest, int inputSize, int maxOutputSize, int compressionLevel);
LZ4_DEPRECATED(&quot;use LZ4_compress_HC_extStateHC() instead&quot;) LZ4LIB_API int LZ4_compressHC_withStateHC               (void* state, const char* source, char* dest, int inputSize);
LZ4_DEPRECATED(&quot;use LZ4_compress_HC_extStateHC() instead&quot;) LZ4LIB_API int LZ4_compressHC_limitedOutput_withStateHC (void* state, const char* source, char* dest, int inputSize, int maxOutputSize);
LZ4_DEPRECATED(&quot;use LZ4_compress_HC_extStateHC() instead&quot;) LZ4LIB_API int LZ4_compressHC2_withStateHC              (void* state, const char* source, char* dest, int inputSize, int compressionLevel);
LZ4_DEPRECATED(&quot;use LZ4_compress_HC_extStateHC() instead&quot;) LZ4LIB_API int LZ4_compressHC2_limitedOutput_withStateHC(void* state, const char* source, char* dest, int inputSize, int maxOutputSize, int compressionLevel);
LZ4_DEPRECATED(&quot;use LZ4_compress_HC_continue() instead&quot;) LZ4LIB_API int LZ4_compressHC_continue               (LZ4_streamHC_t* LZ4_streamHCPtr, const char* source, char* dest, int inputSize);
LZ4_DEPRECATED(&quot;use LZ4_compress_HC_continue() instead&quot;) LZ4LIB_API int LZ4_compressHC_limitedOutput_continue (LZ4_streamHC_t* LZ4_streamHCPtr, const char* source, char* dest, int inputSize, int maxOutputSize);

</code></pre>

<pre class="lz4-source-comment">/*!
廃止されたストリーミング関数。機能が低下しています。使わないでください。

これらの関数は、ストリーミング圧縮のために、現在は状態内で追跡していないデータに依存していました。可能な限り維持しているので、使っても正しい出力を生成します。ただし、LZ4_slideInputBufferHC()を使うと、ウィンドウサイズ分の履歴を保持する代わりに、ストリームの履歴を切り詰めます。
*/
</pre>

<pre><code>#if !defined(LZ4_STATIC_LINKING_ONLY_DISABLE_MEMORY_ALLOCATION)
LZ4_DEPRECATED(&quot;use LZ4_createStreamHC() instead&quot;) LZ4LIB_API void* LZ4_createHC (const char* inputBuffer);
LZ4_DEPRECATED(&quot;use LZ4_freeStreamHC() instead&quot;) LZ4LIB_API   int   LZ4_freeHC (void* LZ4HC_Data);
#endif
LZ4_DEPRECATED(&quot;use LZ4_saveDictHC() instead&quot;) LZ4LIB_API     char* LZ4_slideInputBufferHC (void* LZ4HC_Data);
LZ4_DEPRECATED(&quot;use LZ4_compress_HC_continue() instead&quot;) LZ4LIB_API int LZ4_compressHC2_continue               (void* LZ4HC_Data, const char* source, char* dest, int inputSize, int compressionLevel);
LZ4_DEPRECATED(&quot;use LZ4_compress_HC_continue() instead&quot;) LZ4LIB_API int LZ4_compressHC2_limitedOutput_continue (void* LZ4HC_Data, const char* source, char* dest, int inputSize, int maxOutputSize, int compressionLevel);
LZ4_DEPRECATED(&quot;use LZ4_createStreamHC() instead&quot;) LZ4LIB_API int   LZ4_sizeofStreamStateHC(void);
LZ4_DEPRECATED(&quot;use LZ4_initStreamHC() instead&quot;) LZ4LIB_API  int   LZ4_resetStreamStateHC(void* state, char* inputBuffer);


</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_resetStreamHC()は、現在LZ4_initStreamHC()に置き換えられています。
これは、新たなブロックのストリームを始めるために現在推奨するLZ4_resetStreamHC_fast()との違いを強調するためです。fastの関数は、任意のごみデータを含むメモリ領域の初期化には使えません。
LZ4_initStreamHC()への切り替えを推奨します。
LZ4_resetStreamHC()は、将来のバージョンで非推奨の警告を出します。
*/
</pre>

<pre><code>LZ4LIB_API void LZ4_resetStreamHC (LZ4_streamHC_t* streamHCPtr, int compressionLevel);


#if defined (__cplusplus)
}
#endif

#endif /* LZ4_HC_H_19834876238432 */


</code></pre>

<pre class="lz4-source-comment">/*!
!!!!! 静的リンク専用 !!!!!
以下の定義は実験的とみなします。
まだAPIの安定性を保証しないので、DLLからリンクするべきではありません。
実際の利用状況での使用が成功した後、プロトタイプを「安定」の状態へ昇格させます。
*/
</pre>

<pre><code>#ifdef LZ4_HC_STATIC_LINKING_ONLY   /* protection macro */
#ifndef LZ4_HC_SLO_098092834
#define LZ4_HC_SLO_098092834

#define LZ4_STATIC_LINKING_ONLY   /* LZ4LIB_STATIC_API */
#include &quot;lz4.h&quot;

#if defined (__cplusplus)
extern &quot;C&quot; {
#endif

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_setCompressionLevel(): v1.8.0+（実験的）
動的に適応させるため、LZ4_compress_HC_continue*()の連続する呼び出しの間で、圧縮レベルを変更できます。
*/
</pre>

<pre><code>LZ4LIB_STATIC_API void LZ4_setCompressionLevel(
    LZ4_streamHC_t* LZ4_streamHCPtr, int compressionLevel);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_favorDecompressionSpeed(): v1.8.2+（実験的）
最適パーサーは、圧縮率より展開速度を優先します。
適用できるのは、レベル &gt;= LZ4HC_CLEVEL_OPT_MINだけです。
*/
</pre>

<pre><code>LZ4LIB_STATIC_API void LZ4_favorDecompressionSpeed(
    LZ4_streamHC_t* LZ4_streamHCPtr, int favor);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_resetStreamHC_fast(): v1.9.0+
LZ4_streamHC_tが、内部的に整合する状態だと分かっている場合、ほとんど作業せずに、新たな圧縮の準備ができることが多いです。不確定な状態のストリームでは常に必要な、完全で高コストのリセット（LZ4_resetStreamHC()が行うリセット）に切り替えるのは、ときどきだけです。

LZ4_streamHCsは、次の場合に有効な状態であることを保証します。
- LZ4_createStreamHC()から返された場合。
- LZ4_resetStreamHC()でリセットした場合。
- memset(stream, 0, sizeof(LZ4_streamHC_t))を行った場合。
- 有効な状態だったストリームをLZ4_resetStreamHC_fast()でリセットした場合。
- 有効な状態だったストリームを、成功を返した圧縮呼び出しで使った場合。
- 不確定な状態だったストリームを、状態全体をリセットする圧縮呼び出し（LZ4_compress_HC_extStateHC()）で使い、成功を返した場合。

注意: 最後に使った圧縮呼び出しがエラーを返したストリームも、この関数へ渡せます。ただし、完全にリセットし、コンテキスト内の既存の履歴と設定をすべて消去します。
*/
</pre>

<pre><code>LZ4LIB_STATIC_API void LZ4_resetStreamHC_fast(
    LZ4_streamHC_t* LZ4_streamHCPtr, int compressionLevel);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_compress_HC_extStateHC_fastReset():
LZ4_compress_HC_extStateHC()の一種です。

この版を使うと、高コストの初期化段階を避けられます。状態バッファーが既に正しく初期化済みと分かっている場合にだけ、安全に呼べます（「正しく初期化済み」の定義は、前述のLZ4_resetStreamHC_fast()のコメント参照）。
大まかな違いは、この関数が渡された状態をLZ4_resetStreamHC_fast()の呼び出しで初期化するのに対し、LZ4_compress_HC_extStateHC()はLZ4_resetStreamHC()の呼び出しから始める点です。
*/
</pre>

<pre><code>LZ4LIB_STATIC_API int LZ4_compress_HC_extStateHC_fastReset (
    void* state,
    const char* src, char* dst,
    int srcSize, int dstCapacity,
    int compressionLevel);

#if defined (__cplusplus)
}
#endif

#endif   /* LZ4_HC_SLO_098092834 */
#endif   /* LZ4_HC_STATIC_LINKING_ONLY */
</code></pre>