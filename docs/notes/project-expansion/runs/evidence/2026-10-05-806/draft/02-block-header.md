---
title: "LZ4: ブロックAPIヘッダー"
licenseSource: "lz4-1-10-0-lib-lz4-h"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>26b82efc53d1570f3b54eef02e9c4764c1ad374ff03cac04e2ced5ea4d4c552f</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/lib/lz4.h\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/lib/lz4.h.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>独立した説明コメントを日本語に訳し、原著の法的通知は英語全文で保持しました。宣言・マクロ・コード中のコメントと診断文字列は変更していません。LZ4_compress_destSize()の説明はdstCapacity、宣言はtargetDstSizeという原表記です。in-place圧縮の説明にあるサイズ >= maxCompressedSizeと、余裕を加えるLZ4_COMPRESS_INPLACE_BUFFER_SIZEマクロの両方を保持しています。これらを黙って同じ式へ書き換えていません。本文の旧APIや執筆時点の性能・仕様説明は固定原文の記述で、今回の測定や実行結果ではありません。</p>"
---


<pre class="lz4-source-comment">/*
 *  LZ4 - Fast LZ compression algorithm
 *  Header File
 *  Copyright (C) 2011-2023, Yann Collet.

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
    - LZ4 homepage : http://www.lz4.org
    - LZ4 source repository : https://github.com/lz4/lz4
*/
</pre>

<pre><code>#if defined (__cplusplus)
extern &quot;C&quot; {
#endif

#ifndef LZ4_H_2983827168210
#define LZ4_H_2983827168210

</code></pre>

<pre class="lz4-source-comment">/*!
依存関係
*/
</pre>

<pre><code>#include &lt;stddef.h&gt;   /* size_t */


</code></pre>

<pre class="lz4-source-comment">/*!
はじめに

LZ4は可逆圧縮アルゴリズムで、コア当たり&gt;500 MB/sの圧縮速度を提供し、複数コアのCPUへスケールします。展開器は非常に高速で、コア当たり複数GB/sに達し、複数コアのシステムでは通常RAMの速度限界に達します。

LZ4圧縮ライブラリは、メモリ内の圧縮・展開関数を提供します。バッファーの制御はすべて利用者に委ねます。圧縮は次の方法で行えます。
- 一段階（基本関数として説明）
- コンテキストを再利用する一段階（高度な関数で説明）
- 回数に上限のない複数段階（ストリーミング圧縮として説明）

lz4.hは、LZ4圧縮ブロックを生成・展開します（doc/lz4_Block_format.md）。この圧縮ブロックの展開には追加のメタデータが必要です。具体的なメタデータは展開関数によって異なります。通常のLZ4_decompress_safe()では、ブロックの圧縮サイズと、展開サイズの上限が含まれます。各アプリケーションは、そのメタデータを自由な方法で符号化・受け渡しできます。

lz4.hが扱うのはブロックだけで、フレームは生成できません。

ブロックとフレームは異なります（doc/lz4_Frame_format.md）。フレームは、定められた方法でブロックとメタデータをまとめます。圧縮データを自己完結的かつ移植可能にするには、メタデータを埋め込む必要があります。フレーム形式は、lz4frame.hで宣言する別のAPIで提供します。`lz4` CLIが扱えるのはフレームだけです。
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
エクスポートパラメーター
*/
</pre>

<pre class="lz4-source-comment">/*!
LZ4_DLL_EXPORT:
Windows DLLのビルド時に関数のエクスポートを有効にします。
LZ4LIB_VISIBILITY:
ライブラリのシンボルの可視性を制御します。
*/
</pre>

<pre><code>#ifndef LZ4LIB_VISIBILITY
#  if defined(__GNUC__) &amp;&amp; (__GNUC__ &gt;= 4)
#    define LZ4LIB_VISIBILITY __attribute__ ((visibility (&quot;default&quot;)))
#  else
#    define LZ4LIB_VISIBILITY
#  endif
#endif
#if defined(LZ4_DLL_EXPORT) &amp;&amp; (LZ4_DLL_EXPORT==1)
#  define LZ4LIB_API __declspec(dllexport) LZ4LIB_VISIBILITY
#elif defined(LZ4_DLL_IMPORT) &amp;&amp; (LZ4_DLL_IMPORT==1)
#  define LZ4LIB_API __declspec(dllimport) LZ4LIB_VISIBILITY /* It isn&#x27;t required but allows to generate better code, saving a function pointer load from the IAT and an indirect jump.*/
#else
#  define LZ4LIB_API LZ4LIB_VISIBILITY
#endif

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_FREESTANDING:
このマクロを1に設定すると、標準Cライブラリをサポートしない典型的な独立実行環境に適した「freestandingモード」を有効にします。

- LZ4_FREESTANDINGはコンパイル時の切り替えです。
- LZ4_memcpy、LZ4_memmove、LZ4_memsetの各マクロを定義する必要があります。
- ヒープを使わないLZ4/HC関数だけを有効にします。LZ4F_*関数はすべて非対応です。
- 基本的な設定はtests/freestanding.cを参照してください。
*/
</pre>

<pre><code>#if defined(LZ4_FREESTANDING) &amp;&amp; (LZ4_FREESTANDING == 1)
#  define LZ4_HEAPMODE 0
#  define LZ4HC_HEAPMODE 0
#  define LZ4_STATIC_LINKING_ONLY_DISABLE_MEMORY_ALLOCATION 1
#  if !defined(LZ4_memcpy)
#    error &quot;LZ4_FREESTANDING requires macro &#x27;LZ4_memcpy&#x27;.&quot;
#  endif
#  if !defined(LZ4_memset)
#    error &quot;LZ4_FREESTANDING requires macro &#x27;LZ4_memset&#x27;.&quot;
#  endif
#  if !defined(LZ4_memmove)
#    error &quot;LZ4_FREESTANDING requires macro &#x27;LZ4_memmove&#x27;.&quot;
#  endif
#elif ! defined(LZ4_FREESTANDING)
#  define LZ4_FREESTANDING 0
#endif


</code></pre>

<pre class="lz4-source-comment">/*!
バージョン
*/
</pre>

<pre><code>#define LZ4_VERSION_MAJOR    1    /* for breaking interface changes  */
#define LZ4_VERSION_MINOR   10    /* for new (non-breaking) interface capabilities */
#define LZ4_VERSION_RELEASE  0    /* for tweaks, bug-fixes, or development */

#define LZ4_VERSION_NUMBER (LZ4_VERSION_MAJOR *100*100 + LZ4_VERSION_MINOR *100 + LZ4_VERSION_RELEASE)

#define LZ4_LIB_VERSION LZ4_VERSION_MAJOR.LZ4_VERSION_MINOR.LZ4_VERSION_RELEASE
#define LZ4_QUOTE(str) #str
#define LZ4_EXPAND_AND_QUOTE(str) LZ4_QUOTE(str)
#define LZ4_VERSION_STRING LZ4_EXPAND_AND_QUOTE(LZ4_LIB_VERSION)  /* requires v1.7.3+ */

LZ4LIB_API int LZ4_versionNumber (void);  /**&lt; library version number; useful to check dll version; requires v1.3.0+ */
LZ4LIB_API const char* LZ4_versionString (void);   /**&lt; library version string; useful to check dll version; requires v1.7.5+ */


</code></pre>

<pre class="lz4-source-comment">/*!
メモリ使用量の調整
*/
</pre>

<pre class="lz4-source-comment">/*!
LZ4_MEMORY_USAGE:
LZ4_MEMORY_USAGEを設定し、コンパイル時に選択できます。
メモリ使用量の式: N-&gt;2^Nバイト（例: 10 -&gt; 1KB、12 -&gt; 4KB、16 -&gt; 64KB、20 -&gt; 1MB）。
メモリ使用量を増やすと圧縮率が改善しますが、通常は速度を犠牲にします。
使用量を減らすと、キャッシュの局所性が改善し、圧縮率と引き換えに速度が向上する場合があります。
既定値は14で16KBです。大半のL1キャッシュによく収まります。
*/
</pre>

<pre><code>#ifndef LZ4_MEMORY_USAGE
# define LZ4_MEMORY_USAGE LZ4_MEMORY_USAGE_DEFAULT
#endif

</code></pre>

<pre class="lz4-source-comment">/*!
これらは絶対的な制限値です。利用者は変更すべきではありません。
*/
</pre>

<pre><code>#define LZ4_MEMORY_USAGE_MIN 10
#define LZ4_MEMORY_USAGE_DEFAULT 14
#define LZ4_MEMORY_USAGE_MAX 20

#if (LZ4_MEMORY_USAGE &lt; LZ4_MEMORY_USAGE_MIN)
#  error &quot;LZ4_MEMORY_USAGE is too small !&quot;
#endif

#if (LZ4_MEMORY_USAGE &gt; LZ4_MEMORY_USAGE_MAX)
#  error &quot;LZ4_MEMORY_USAGE is too large !&quot;
#endif

</code></pre>

<pre class="lz4-source-comment">/*!
基本関数
*/
</pre>

<pre class="lz4-source-comment">/*!
LZ4_compress_default():
バッファー&#x27;src&#x27;の&#x27;srcSize&#x27;バイトを、事前に確保したサイズ&#x27;dstCapacity&#x27;の&#x27;dst&#x27;バッファーへ圧縮します。
&#x27;dstCapacity&#x27; &gt;= LZ4_compressBound(srcSize)なら、圧縮の成功を保証します。速度も速くなるため、推奨する設定です。
より小さな&#x27;dst&#x27;容量に&#x27;src&#x27;を圧縮できない場合、圧縮は*直ちに*停止し、関数の戻り値はゼロです。その場合、&#x27;dst&#x27;の内容は未定義（無効）です。
srcSize: サポートする最大値はLZ4_MAX_INPUT_SIZEです。
dstCapacity: バッファー&#x27;dst&#x27;のサイズです（事前に確保しなければなりません）。
@return: &#x27;dst&#x27;へ書き込んだバイト数（必ず &lt;= dstCapacity）、または圧縮失敗時は0。
注意: この関数はバッファーオーバーフローに対して保護されています。&#x27;dst&#x27;の外へ書き込むことも、&#x27;source&#x27;の外を読むこともありません。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_compress_default(const char* src, char* dst, int srcSize, int dstCapacity);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_decompress_safe():
@compressedSize: 圧縮ブロック全体の正確なサイズです。
@dstCapacity: 出力先バッファーのサイズです（事前に確保しなければなりません）。展開サイズの上限と想定します。
@return: 出力先バッファーへ展開したバイト数（必ず &lt;= dstCapacity）。出力先バッファーが不足すると展開を停止し、エラーコード（負の値）を出します。入力ストリームの不正な形式を検出した場合も、展開を停止して負の値を返します。
注意1: この関数は悪意のあるデータパケットに対して保護されています。圧縮ブロックが悪意を持って改変され、展開器にバッファー外アクセスを指示していても、&#x27;dst&#x27;の外に書き込むことも、&#x27;source&#x27;の外を読むこともありません。その場合、展開器は直ちに停止し、圧縮ブロックを不正な形式と判断します。
注意2: compressedSizeとdstCapacityは関数へ渡さなければなりません。圧縮ブロックには含まれません。実装は、最も都合のよい方法でこの情報を送信・保存・導出できます。圧縮データとメタデータをまとめる別の形式が必要なら、代わりにlz4frame.hを検討してください。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_decompress_safe (const char* src, char* dst, int compressedSize, int dstCapacity);


</code></pre>

<pre class="lz4-source-comment">/*!
高度な関数
*/
</pre>

<pre><code>#define LZ4_MAX_INPUT_SIZE        0x7E000000   /* 2 113 929 216 bytes */
#define LZ4_COMPRESSBOUND(isize)  ((unsigned)(isize) &gt; (unsigned)LZ4_MAX_INPUT_SIZE ? 0 : (isize) + ((isize)/255) + 16)

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_compressBound():
入力データを圧縮できない「最悪の場合」に、LZ4圧縮が出力し得る最大サイズを提供します。主にメモリ確保（出力先バッファーのサイズ）に役立ちます。
コンパイル時の評価用にLZ4_COMPRESSBOUND()マクロも提供します（例えばスタック上のメモリ確保）。
dstCapacity &gt;= LZ4_compressBound(srcSize)ならLZ4_compress_default()の圧縮が速くなる点に注意してください。
inputSize: サポートする最大値はLZ4_MAX_INPUT_SIZEです。
return: 「最悪の場合」の最大出力サイズ。入力サイズが不正（大きすぎる、または負）なら0です。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_compressBound(int inputSize);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_compress_fast():
LZ4_compress_default()と同じですが、「acceleration」係数を選べます。値が大きいほどアルゴリズムは速くなりますが、圧縮は弱くなります。これはトレードオフです。細かく調整でき、値を一つ増やすごとに、速度が概ね+~3%向上します。
accelerationが&quot;1&quot;なら、通常のLZ4_compress_default()と同じです。
&lt;= 0の値はLZ4_ACCELERATION_DEFAULTに置き換えます（現在 == 1。lz4.c参照）。
&gt; LZ4_ACCELERATION_MAXの値はLZ4_ACCELERATION_MAXに置き換えます（現在 == 65537。lz4.c参照）。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_compress_fast (const char* src, char* dst, int srcSize, int dstCapacity, int acceleration);


</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_compress_fast_extState():
LZ4_compress_fast()と同じですが、状態には外部で確保したメモリ領域を使います。
LZ4_sizeofState()で必要なメモリ量を調べ、8バイト境界に合わせて確保します（通常は`malloc()`を使います）。
その後、このバッファーを`void* state`として圧縮関数に渡します。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_sizeofState(void);
LZ4LIB_API int LZ4_compress_fast_extState (void* state, const char* src, char* dst, int srcSize, int dstCapacity, int acceleration);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_compress_destSize():
処理の考え方を逆にし、&#x27;src&#x27;から可能な限り多くのデータを、事前に確保したサイズ &gt;= &#x27;dstCapacity&#x27;のバッファー&#x27;dst&#x27;に圧縮します。
&#x27;dst&#x27;が十分大きければ&#x27;src&#x27;の全内容を圧縮し、そうでなければ&#x27;src&#x27;から可能な限り多くのデータを圧縮して&#x27;dst&#x27;を完全に満たします。
注意: accelerationパラメーターは「既定」に固定されています。

*srcSizePtr: 入出力パラメーターです。初期値は入力サイズで、&#x27;dst&#x27;を満たすために&#x27;src&#x27;から読んだバイト数へ変更します。新しい値は必ず入力値以下です。
@return: &#x27;dst&#x27;へ書いたバイト数（必ず &lt;= dstCapacity）、または圧縮失敗時は0。

注意: v1.8.2からv1.9.1にはバグがありました（v1.9.2+で修正）。特定の状況では、生成した圧縮内容を展開するのに、展開する内容より少なくとも1バイト大きい出力先バッファーが必要になる場合があります。
アプリケーションが`LZ4_compress_destSize()`を使う場合は、liblz4をv1.9.2以降へ更新することを強く推奨します。
更新できない、または更新を保証できない場合、受信側の展開関数には、展開サイズより少なくとも1バイト大きいdstCapacity（&gt; decompressedSize）を渡すべきです。
詳しくはhttps://github.com/lz4/lz4/issues/859を参照してください。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_compress_destSize(const char* src, char* dst, int* srcSizePtr, int targetDstSize);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_decompress_safe_partial():
&#x27;src&#x27;位置のサイズ&#x27;srcSize&#x27;のLZ4圧縮ブロックを、サイズ&#x27;dstCapacity&#x27;の出力先バッファー&#x27;dst&#x27;に展開します。
最大&#x27;targetOutputSize&#x27;バイトを展開し、その量に到達すると停止します。ブロックの先頭だけが必要な場合に、性能の向上に役立ちます。
@return: `dst`へ展開したバイト数（必ず &lt;= targetOutputSize）。入力ストリームの不正な形式を検出した場合は、負の値を返します。

注意1: 圧縮ブロックに含まれるデータが少なければ、@returnは &lt; targetOutputSizeになる場合があります。
注意2: targetOutputSizeは &lt;= dstCapacityでなければなりません。
注意3: 実際にはtargetOutputSizeに到達すると展開を停止するため、dstCapacityはある意味で冗長です。古い版では、展開処理はシーケンス全体を書き込んでいました。そのため、正確にtargetOutputSizeで書き込みを止める保証はなく、dstCapacityの範囲まで、それ以上のバイトを書き込む場合がありました。正常動作には「余裕」が必要でしたが、現在は不要です。それでもAPI互換性を保つため、同じシグネチャを維持しています。
注意4: srcSizeがブロックの正確なサイズなら、targetOutputSizeは、ブロックの展開サイズを超える値も含め任意の値にできます。生成するのは、最大でもブロックの展開サイズです。
注意5: srcSizeがブロックの圧縮サイズより_大きい_場合、targetOutputSizeは**必ず**ブロックの展開サイズ以下でなければなりません。そうでなければ、*通知されないデータ破損が発生します*。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_decompress_safe_partial (const char* src, char* dst, int srcSize, int targetOutputSize, int dstCapacity);


</code></pre>

<pre class="lz4-source-comment">/*!
ストリーミング圧縮関数
*/
</pre>

<pre><code>typedef union LZ4_stream_u LZ4_stream_t;  /* incomplete type (defined later) */

</code></pre>

<pre class="lz4-source-comment">/*!
RC_INVOKEDについて

- RC_INVOKEDは、MSVC/Visual Studioに含まれるリソースコンパイラーrc.exeの定義済みシンボルです。
  https://docs.microsoft.com/en-us/windows/win32/menurc/predefined-macros
- rc.exeは古いコンパイラーなので、長いシンボル（&gt; 30文字）を切り詰め、&quot;RC4011: identifier truncated&quot;という警告を出します。
- 警告をなくすため、長いプリプロセッサーシンボルを&quot;#if !defined(RC_INVOKED) ... #endif&quot;ブロックで囲みます。これは「rc.exeが読み込む場合は、このブロックを読み飛ばす」という意味です。
*/
</pre>

<pre><code>#if !defined(RC_INVOKED) /* https://docs.microsoft.com/en-us/windows/win32/menurc/predefined-macros */
#if !defined(LZ4_STATIC_LINKING_ONLY_DISABLE_MEMORY_ALLOCATION)
LZ4LIB_API LZ4_stream_t* LZ4_createStream(void);
LZ4LIB_API int           LZ4_freeStream (LZ4_stream_t* streamPtr);
#endif /* !defined(LZ4_STATIC_LINKING_ONLY_DISABLE_MEMORY_ALLOCATION) */
#endif

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_resetStream_fast(): v1.9.0+
依存ブロックの新たな連鎖（例えばLZ4_compress_fast_continue()）のために、LZ4_stream_tを準備します。

LZ4_stream_tは、使う前に一度初期化しなければなりません。LZ4_createStream()で生成すると自動的に初期化します。ただし、例えばスタック上でLZ4_stream_tを単に宣言する場合は、まずLZ4_initStream()で初期化する必要があります。

初期化後、新しいストリームはLZ4_resetStream_fast()で開始します。新たなストリームごとにLZ4_resetStream_fast()で開始すれば、同じLZ4_stream_tを連続して何度も再利用し、複数ストリームを圧縮できます。

LZ4_resetStream_fast()はLZ4_initStream()よりずっと速いですが、ごみデータを含むメモリ領域には使えません。
注意: LZ4_resetStream_fast()が役立つのは、ストリーミング圧縮の場合だけです。*extState*関数は自分でリセットするため、事前のLZ4_resetStream_fast()は冗長で、むしろ逆効果です。
*/
</pre>

<pre><code>LZ4LIB_API void LZ4_resetStream_fast (LZ4_stream_t* streamPtr);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_loadDict():
LZ4_stream_tで静的辞書を参照するための関数です。辞書は、圧縮中ずっと利用可能でなければなりません。LZ4_loadDict()はリセットを行うので、以前のデータをすべて忘れます。正常に展開するには、展開側でも同じ辞書を読み込む必要があります。
辞書は小さなデータ（KB単位）の圧縮率改善に役立ちます。LZ4自体はどのような入力も辞書として受け入れますが、辞書の効率も問題になります。迷う場合は、ZstandardのDictionary Builderを使ってください。
サイズ0の読み込みも許され、リセットと同じです。
@return: 読み込んだ辞書のバイト数（最後の64 KBだけを読み込みます）。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_loadDict (LZ4_stream_t* streamPtr, const char* dictionary, int dictSize);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_loadDictSlow(): v1.10.0+
LZ4_loadDict()と同じですが、CPUを少し多く使って、辞書の内容をより徹底して参照します。これにより、圧縮率がわずかに改善する見込みです。辞書を複数のセッションで再利用する場合には、追加のCPUコストに見合う可能性が高いです。
@return: 読み込んだ辞書のバイト数（最後の64 KBだけを読み込みます）。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_loadDictSlow(LZ4_stream_t* streamPtr, const char* dictionary, int dictSize);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_attach_dictionary(): v1.10.0から安定

静的辞書を何度も効率よく再利用できます。
毎回の圧縮前に、辞書バッファーを作業コンテキストへ再読み込みしたり、読み込み済みの辞書のLZ4_stream_tを作業用LZ4_stream_tへコピーしたりする代わりに、コピーのない準備方法を提供します。作業ストリームは、その場にある@dictionaryStreamを参照します。

@dictionaryStreamの状態について、いくつかの前提があります。現在、動作を期待すべきなのは、LZ4_loadDict()またはLZ4_loadDictSlow()で準備した状態だけです。
@dictionaryStreamにNULLを渡すこともでき、その場合は既存の辞書ストリームを解除します。

辞書を渡すと、既存のストリーム履歴をすべて置き換えます。参照できる履歴は辞書の内容だけで、論理的には、その後の最初の圧縮呼び出しで圧縮するデータの直前に位置します。

辞書が作業ストリームに接続されたままなのは、最初の圧縮呼び出しまでです。その終了時に解除します。@dictionaryStreamストリームと元のバッファーは、圧縮セッションが完了するまで、同じ場所にあり、アクセス可能で、変更されてはなりません。

注意: 展開側には相当するLZ4_attach_*()メソッドはありません。初期化コストがないため、複数セッションにわたってコストを共有する必要がないからです。辞書を使うLZ4ブロックの展開では、接続の有無にかかわらず、ストリーミングには通常のLZ4_setStreamDecode()、一括の展開には状態を持たないLZ4_decompress_safe_usingDict()を使ってください。
*/
</pre>

<pre><code>LZ4LIB_API void
LZ4_attach_dictionary(LZ4_stream_t* workingStream,
                const LZ4_stream_t* dictionaryStream);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_compress_fast_continue():
以前に圧縮したブロックのデータを使って&#x27;src&#x27;の内容を圧縮し、圧縮率を改善します。&#x27;dst&#x27;バッファーは事前に確保しなければなりません。
dstCapacity &gt;= LZ4_compressBound(srcSize)なら、圧縮の成功を保証し、速度も速くなります。
@return: 圧縮ブロックのサイズ。エラー時（通常は&#x27;dst&#x27;に収まらない場合）は0。

注意1: LZ4_compress_fast_continue()の呼び出しごとに新たなブロックを生成します。各ブロックの境界は明確です。各ブロックは、対応するメタデータでLZ4_decompress_*()を呼び、別々に展開しなければなりません。ブロックを連結し、LZ4_decompress_*()の一回の呼び出しでまとめて展開することはできません。
注意2: 直前64KBの入力データが、メモリ内の同じアドレスに、未変更のまま存在することを__前提とします__。
注意3: 入力がダブルバッファーなら、各バッファーは &lt; 64 KBも含め任意のサイズにできます。バッファー同士を少なくとも一バイト離してください。これにより、各ブロックが直前のブロックだけに依存することを保証します。
注意4: 入力がリングバッファーなら、&lt; 64 KBも含め任意のサイズにできます。
注意5: エラー後のストリーム状態は未定義（無効）で、リセットまたは解放だけが可能です。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_compress_fast_continue (LZ4_stream_t* streamPtr, const char* src, char* dst, int srcSize, int dstCapacity, int acceleration);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_saveDict():
最後の64KBのデータが、現在のメモリ位置で利用可能なままであると保証できない場合は、安全な場所（char* safeBuffer）へ保存します。
概念的にはmemcpy()の後にLZ4_loadDict()を呼ぶのと同じですが、LZ4_saveDict()はテーブルを作り直さないため、ずっと速くなります。
@return: 保存した辞書のバイト数（必ず &lt;= maxDictSize）、またはエラー時は0。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_saveDict (LZ4_stream_t* streamPtr, char* safeBuffer, int maxDictSize);


</code></pre>

<pre class="lz4-source-comment">/*!
ストリーミング展開関数
バッファーを持たない同期API
*/
</pre>

<pre><code>typedef union LZ4_streamDecode_u LZ4_streamDecode_t;   /* tracking context */

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_createStreamDecode()とLZ4_freeStreamDecode():
ストリーミング展開の追跡コンテキストを生成・破棄します。
追跡コンテキストは何度も再利用できます。
*/
</pre>

<pre><code>#if !defined(RC_INVOKED) /* https://docs.microsoft.com/en-us/windows/win32/menurc/predefined-macros */
#if !defined(LZ4_STATIC_LINKING_ONLY_DISABLE_MEMORY_ALLOCATION)
LZ4LIB_API LZ4_streamDecode_t* LZ4_createStreamDecode(void);
LZ4LIB_API int                 LZ4_freeStreamDecode (LZ4_streamDecode_t* LZ4_stream);
#endif /* !defined(LZ4_STATIC_LINKING_ONLY_DISABLE_MEMORY_ALLOCATION) */
#endif

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_setStreamDecode():
LZ4_streamDecode_tコンテキストは一度確保し、何度も再利用できます。
ブロックの新たなストリームの展開を開始するために使います。
任意で辞書を設定できます。リセットを指示するにはNULLまたはサイズ0を使います。
辞書は安定していると想定します。次の展開中は、アクセス可能で、変更されてはなりません。
@return: 正常なら1、エラーなら0。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_setStreamDecode (LZ4_streamDecode_t* LZ4_streamDecode, const char* dictionary, int dictSize);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_decoderRingBufferSize(): v1.8.2+
注意: 任意のリングバッファー方式では、ブロックを隣接させて展開すると想定します。次のブロック用の残り領域が不足したとき（remainingSize &lt; maxBlockSize）、リングバッファーの先頭から再開します。
ストリーミング展開用にこのようなリングバッファーを設定する際、maxBlockSizeの条件を守るどの入力にも対応できる、リングバッファーの最小サイズを提供します。
@return: リングバッファーの最小サイズ、またはエラー時（maxBlockSizeが不正）は0。
*/
</pre>

<pre><code>LZ4LIB_API int LZ4_decoderRingBufferSize(int maxBlockSize);
#define LZ4_DECODER_RING_BUFFER_SIZE(maxBlockSize) (65536 + 14 + (maxBlockSize))  /* for static allocation; maxBlockSize presumed valid */

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_decompress_safe_continue():
「ストリーミング」モードで、連続するブロックを展開できます。通常の独立ブロックと異なり、新しいブロックは以前のブロック内のデータを参照できます。
ブロックは分割できない単位で、全体を展開関数に渡さなければなりません。LZ4_decompress_safe_continue()は、一度に一ブロックだけを受け入れます。`LZ4_decompress_safe()`を基にしており、同様に動作します。

@LZ4_streamDecode: 以前のデータのメモリ位置を追跡する展開状態。
@compressedSize: 圧縮ブロック一つの、全体の正確なサイズ。
@dstCapacity: 出力先バッファーのサイズ（事前に確保しなければなりません）。展開サイズの上限でなければなりません。
@return: 出力先バッファーへ展開したバイト数（必ず &lt;= dstCapacity）。出力先バッファーが不足すると展開を停止し、エラーコード（負の値）を出します。入力ストリームの不正な形式を検出した場合も、展開を停止して負の値を返します。

以前に展開したデータの最後の64KBは、展開したときのメモリ位置で、利用可能かつ未変更のまま残って*いなければなりません*。展開したデータが64KB未満なら、その全データが存在しなければなりません。

特別な条件: 展開側がリングバッファーを使う場合、次の条件のいずれかを満たさなければなりません。
- 展開バッファーのサイズが、_少なくとも_LZ4_decoderRingBufferSize(maxBlockSize)であること。maxBlockSizeは単一ブロックの最大サイズで、&gt; 16バイトの任意の値にできます。この場合、圧縮・展開バッファーの同期は不要です。実際に、LZ4形式仕様とmaxBlockSizeを守る任意の入力元がデータを生成できます。
- 同期モード: 展開バッファーのサイズが、圧縮バッファーと_厳密に_同じで、更新規則も厳密に同じであること（ブロック境界が同じ位置）。また、展開関数に各ブロックの正確な展開サイズを渡すこと（ストリームの最後のブロックは例外）。_その場合_、展開・圧縮リングバッファーは、小さいもの（&lt; 64 KB）も含め任意のサイズにできます。
- 展開バッファーが圧縮バッファーより、少なくともmaxBlockSizeバイト大きいこと。この場合、圧縮・展開バッファーの同期は不要で、圧縮リングバッファーは、小さいもの（&lt; 64 KB）も含め任意のサイズにできます。

これらの条件を満たせない場合は、展開済みデータの最後の64KBを、展開中に変更されない安全なバッファーへ保存してください。その後、次のブロックを展開する前に、LZ4_setStreamDecode()で保存場所を指定します。
*/
</pre>

<pre><code>LZ4LIB_API int
LZ4_decompress_safe_continue (LZ4_streamDecode_t* LZ4_streamDecode,
                        const char* src, char* dst,
                        int srcSize, int dstCapacity);


</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_decompress_safe_usingDict():
LZ4_setStreamDecode()の後にLZ4_decompress_safe_continue()を呼ぶ組み合わせと同じように動作します。
ただし、状態を持たないので、LZ4_streamDecode_t状態は不要です。
辞書は安定していると想定します。展開中は、アクセス可能で、変更されてはなりません。
性能上のヒント: dst == dictStart + dictSizeの場合、展開速度が大幅に向上する可能性があります。
*/
</pre>

<pre><code>LZ4LIB_API int
LZ4_decompress_safe_usingDict(const char* src, char* dst,
                              int srcSize, int dstCapacity,
                              const char* dictStart, int dictSize);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_decompress_safe_partial_usingDict():
LZ4_decompress_safe_partial()と同じように動作し、以前のデータのメモリ領域を指定する機能を追加しています。
性能上のヒント: dst == dictStart + dictSizeの場合、展開速度が大幅に向上する可能性があります。
*/
</pre>

<pre><code>LZ4LIB_API int
LZ4_decompress_safe_partial_usingDict(const char* src, char* dst,
                                      int compressedSize,
                                      int targetOutputSize, int maxOutputSize,
                                      const char* dictStart, int dictSize);

#endif /* LZ4_H_2983827168210 */


</code></pre>

<pre class="lz4-source-comment">/*!
!!!!!! 静的リンク専用 !!!!!!
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
実験的な節

この節で宣言するシンボルは、不安定とみなさなければなりません。将来、シグネチャや意味が変わったり、完全に削除されたりする場合があります。そのため、呼び出し側がライブラリへ静的にリンクする場合にだけ、依存しても安全です。

安全でない使い方を防ぐため、宣言を保護するだけでなく、共有・動的ライブラリとしてLZ4をビルドする際は、定義も既定で隠します。

これらの宣言を使うには、アプリケーションでLZ4のヘッダーを組み込む前にLZ4_STATIC_LINKING_ONLYを定義してください。

実装を動的にアクセス可能にするには、LZ4ライブラリのビルド時にLZ4_PUBLISH_STATIC_FUNCTIONSを定義しなければなりません。
*/
</pre>

<pre><code>
#ifdef LZ4_STATIC_LINKING_ONLY

#ifndef LZ4_STATIC_3504398509
#define LZ4_STATIC_3504398509

#ifdef LZ4_PUBLISH_STATIC_FUNCTIONS
# define LZ4LIB_STATIC_API LZ4LIB_API
#else
# define LZ4LIB_STATIC_API
#endif


</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_compress_fast_extState_fastReset():
LZ4_compress_fast_extState()の一種です。

この版を使うと、高コストの初期化段階を避けられます。状態バッファーが既に正しく初期化済みと分かっている場合にだけ、安全に呼べます（「正しく初期化済み」の定義は、前述のLZ4_resetStream_fast()のコメント参照）。
大まかな違いは、この関数がLZ4_resetStream_fast()のような呼び出しで渡された状態を初期化するのに対し、LZ4_compress_fast_extState()はLZ4_resetStream()の呼び出しから始める点です。
*/
</pre>

<pre><code>LZ4LIB_STATIC_API int LZ4_compress_fast_extState_fastReset (void* state, const char* src, char* dst, int srcSize, int dstCapacity, int acceleration);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_compress_destSize_extState(): v1.10.0で導入
LZ4_compress_destSize()と同じですが、外部で確保した状態を使います。
また、@accelerationを指定できます。
*/
</pre>

<pre><code>int LZ4_compress_destSize_extState(void* state, const char* src, char* dst, int* srcSizePtr, int targetDstSize, int acceleration);

</code></pre>

<pre class="lz4-source-comment">/*!
同じバッファー内での圧縮・展開

メモリが非常に制限された環境では、入力と出力で同じバッファーを共有できます。どちらの場合も、入力をバッファーの末尾に置き、展開をバッファーの先頭から開始する必要があります。バッファーには余裕が必要なので、最終サイズより大きくなければなりません。

 * |&lt;------------------------buffer---------------------------------&gt;|
 *                             |&lt;-----------compressed data---------&gt;|
 * |&lt;-----------decompressed size------------------&gt;|
 *                                                  |&lt;----margin----&gt;|

この方法は、展開でより役立ちます。通常、展開サイズの方が大きく、余裕は小さいためです。

同一バッファー内の展開は、サイズ &gt;= LZ4_DECOMPRESS_INPLACE_BUFFER_SIZE(decompressedSize)の任意のバッファーで動作します。これはdecompressedSize &gt; compressedSizeを前提とします。そうでなければ、圧縮によって実際にはデータが拡大したということで、非圧縮を示すフラグを付けて保存する方が効率的です。圧縮できないデータ（既に圧縮済み、または暗号化済み）で起こり得ます。

同一バッファー内の圧縮では、余裕がより大きくなります。LZ4_DISTANCE_MAXまでの入力データを未変更のまま残す履歴保全と、圧縮できない入力のデータ拡大の、両方に対応しなければならないためです。その結果、必要なバッファーサイズはずっと大きくなり、同一バッファー内の圧縮によるメモリ節約は限られます。

圧縮のこのコストを抑える方法があります。
- LZ4_DISTANCE_MAXを変更して、履歴サイズを減らします。コンパイル時の定数なので、すべての圧縮にこの制限を適用する点に注意してください。input_size &lt; LZ4_DISTANCE_MAXの場合を除き、低い値では圧縮率が下がります。入力が小さいと分かっている場合には、妥当な工夫です。
- 圧縮器に「最大圧縮サイズ」を指定します。これは`LZ4_compress*()`の`dstCapacity`パラメーターです。このサイズが &lt; LZ4_COMPRESSBOUND(inputSize)なら圧縮が失敗する可能性があり、その場合の戻り値は0（ゼロ）です。呼び出し側は、その場合に備えなければなりません。通常は、データを非圧縮で送る代替手段を用意します。
両方を組み合わせると、同一バッファー内の圧縮に必要な余裕を大幅に減らせます。

同一バッファー内の圧縮は、サイズ &gt;= (maxCompressedSize)の任意のバッファーで動作できます。圧縮成功を保証するには、maxCompressedSize == LZ4_COMPRESSBOUND(srcSize)とします。LZ4_COMPRESS_INPLACE_BUFFER_SIZE()は、maxCompressedSizeとLZ4_DISTANCE_MAXの両方に依存するため、これらを調整して必要メモリ量を減らせます。
*/
</pre>

<pre><code>
#define LZ4_DECOMPRESS_INPLACE_MARGIN(compressedSize)          (((compressedSize) &gt;&gt; 8) + 32)
#define LZ4_DECOMPRESS_INPLACE_BUFFER_SIZE(decompressedSize)   ((decompressedSize) + LZ4_DECOMPRESS_INPLACE_MARGIN(decompressedSize))  /**&lt; note: presumes that compressedSize &lt; decompressedSize. note2: margin is overestimated a bit, since it could use compressedSize instead */

#ifndef LZ4_DISTANCE_MAX   /* history window size; can be user-defined at compile time */
#  define LZ4_DISTANCE_MAX 65535   /* set to maximum value by default */
#endif

#define LZ4_COMPRESS_INPLACE_MARGIN                           (LZ4_DISTANCE_MAX + 32)   /* LZ4_DISTANCE_MAX can be safely replaced by srcSize when it&#x27;s smaller */
#define LZ4_COMPRESS_INPLACE_BUFFER_SIZE(maxCompressedSize)   ((maxCompressedSize) + LZ4_COMPRESS_INPLACE_MARGIN)  /**&lt; maxCompressedSize is generally LZ4_COMPRESSBOUND(inputSize), but can be set to any lower value, with the risk that compression can fail (return code 0(zero)) */

#endif   /* LZ4_STATIC_3504398509 */
#endif   /* LZ4_STATIC_LINKING_ONLY */



#ifndef LZ4_H_98237428734687
#define LZ4_H_98237428734687

</code></pre>

<pre class="lz4-source-comment">/*!
内部用の定義

これらの定義を直接使わないでください。
`LZ4_stream_t`と`LZ4_streamDecode_t`を静的に確保できるようにするためだけに公開しています。
メンバーへアクセスすると、利用者のコードが将来のライブラリのAPIやABIの互換性破壊の影響を受けます。
*/
</pre>

<pre><code>#define LZ4_HASHLOG   (LZ4_MEMORY_USAGE-2)
#define LZ4_HASHTABLESIZE (1 &lt;&lt; LZ4_MEMORY_USAGE)
#define LZ4_HASH_SIZE_U32 (1 &lt;&lt; LZ4_HASHLOG)       /* required as macro for static allocation */

#if defined(__cplusplus) || (defined (__STDC_VERSION__) &amp;&amp; (__STDC_VERSION__ &gt;= 199901L) /* C99 */)
# include &lt;stdint.h&gt;
  typedef  int8_t  LZ4_i8;
  typedef uint8_t  LZ4_byte;
  typedef uint16_t LZ4_u16;
  typedef uint32_t LZ4_u32;
#else
  typedef   signed char  LZ4_i8;
  typedef unsigned char  LZ4_byte;
  typedef unsigned short LZ4_u16;
  typedef unsigned int   LZ4_u32;
#endif

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_stream_t:
以下の内部定義を決して直接使わないでください。
API/ABIに関して安全ではなく、将来のバージョンで変わる場合があります。
静的に確保する必要がある場合は、LZ4_stream_tオブジェクトを宣言または確保してください。
*/
</pre>

<pre><code>
typedef struct LZ4_stream_t_internal LZ4_stream_t_internal;
struct LZ4_stream_t_internal {
    LZ4_u32 hashTable[LZ4_HASH_SIZE_U32];
    const LZ4_byte* dictionary;
    const LZ4_stream_t_internal* dictCtx;
    LZ4_u32 currentOffset;
    LZ4_u32 tableType;
    LZ4_u32 dictSize;
</code></pre>

<pre class="lz4-source-comment">/*!
構造体のアラインメントを確保するための暗黙のパディング
*/
</pre>

<pre><code>};

#define LZ4_STREAM_MINSIZE  ((1UL &lt;&lt; (LZ4_MEMORY_USAGE)) + 32)  /* static size, for inter-version compatibility */
union LZ4_stream_u {
    char minStateSize[LZ4_STREAM_MINSIZE];
    LZ4_stream_t_internal internal_donotuse;
}; /* previously typedef&#x27;d to LZ4_stream_t */


</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_initStream(): v1.9.0+
LZ4_stream_t構造体は、少なくとも一度初期化しなければなりません。LZ4_createStream()では自動的に行いますが、例えばスタック上で構造体を単に宣言する場合は行いません。

新たに宣言したLZ4_stream_tを正しく初期化するには、LZ4_initStream()を使ってください。十分なサイズの任意のバッファーも初期化でき、初期化時には、適切な型のポインターを@returnとして返します。

注意: サイズとアラインメントの条件を満たさない場合は初期化に失敗し、@returnはNULLです。
注意2: LZ4_stream_t構造体は、正しいアラインメントとサイズを保証します。
注意3: v1.9.0より前では、代わりにLZ4_resetStream()を使ってください。
*/
</pre>

<pre><code>LZ4LIB_API LZ4_stream_t* LZ4_initStream (void* stateBuffer, size_t size);


</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_streamDecode_t:
以下の内部定義を決して直接使わないでください。
API/ABIに関して安全ではなく、将来のバージョンで変わる場合があります。
静的に確保する必要がある場合は、LZ4_streamDecode_tオブジェクトを宣言または確保してください。
*/
</pre>

<pre><code>typedef struct {
    const LZ4_byte* externalDict;
    const LZ4_byte* prefixEnd;
    size_t extDictSize;
    size_t prefixSize;
} LZ4_streamDecode_t_internal;

#define LZ4_STREAMDECODE_MINSIZE 32
union LZ4_streamDecode_u {
    char minStateSize[LZ4_STREAMDECODE_MINSIZE];
    LZ4_streamDecode_t_internal internal_donotuse;
} ;   /* previously typedef&#x27;d to LZ4_streamDecode_t */



</code></pre>

<pre class="lz4-source-comment">/*!
廃止された関数
*/
</pre>

<pre><code>
</code></pre>

<pre class="lz4-source-comment">/*!
非推奨の警告

非推奨の関数を呼ぶと、コンパイラーが警告を出します。利用者にソースコードの更新を促すためです。
警告が問題になる場合は、通常、無効にできます。典型的にはgccの-Wno-deprecated-declarations、またはVisualの_CRT_SECURE_NO_WARNINGSです。
別の方法として、ヘッダーファイルを組み込む前にLZ4_DISABLE_DEPRECATE_WARNINGSを定義します。
*/
</pre>

<pre><code>#ifdef LZ4_DISABLE_DEPRECATE_WARNINGS
#  define LZ4_DEPRECATED(message)   /* disable deprecation warnings */
#else
#  if defined (__cplusplus) &amp;&amp; (__cplusplus &gt;= 201402) /* C++14 or greater */
#    define LZ4_DEPRECATED(message) [[deprecated(message)]]
#  elif defined(_MSC_VER)
#    define LZ4_DEPRECATED(message) __declspec(deprecated(message))
#  elif defined(__clang__) || (defined(__GNUC__) &amp;&amp; (__GNUC__ * 10 + __GNUC_MINOR__ &gt;= 45))
#    define LZ4_DEPRECATED(message) __attribute__((deprecated(message)))
#  elif defined(__GNUC__) &amp;&amp; (__GNUC__ * 10 + __GNUC_MINOR__ &gt;= 31)
#    define LZ4_DEPRECATED(message) __attribute__((deprecated))
#  else
#    pragma message(&quot;WARNING: LZ4_DEPRECATED needs custom implementation for this compiler&quot;)
#    define LZ4_DEPRECATED(message)   /* disabled */
#  endif
#endif /* LZ4_DISABLE_DEPRECATE_WARNINGS */

</code></pre>

<pre class="lz4-source-comment">/*!
廃止された圧縮関数（v1.7.3から）
*/
</pre>

<pre><code>LZ4_DEPRECATED(&quot;use LZ4_compress_default() instead&quot;)       LZ4LIB_API int LZ4_compress               (const char* src, char* dest, int srcSize);
LZ4_DEPRECATED(&quot;use LZ4_compress_default() instead&quot;)       LZ4LIB_API int LZ4_compress_limitedOutput (const char* src, char* dest, int srcSize, int maxOutputSize);
LZ4_DEPRECATED(&quot;use LZ4_compress_fast_extState() instead&quot;) LZ4LIB_API int LZ4_compress_withState               (void* state, const char* source, char* dest, int inputSize);
LZ4_DEPRECATED(&quot;use LZ4_compress_fast_extState() instead&quot;) LZ4LIB_API int LZ4_compress_limitedOutput_withState (void* state, const char* source, char* dest, int inputSize, int maxOutputSize);
LZ4_DEPRECATED(&quot;use LZ4_compress_fast_continue() instead&quot;) LZ4LIB_API int LZ4_compress_continue                (LZ4_stream_t* LZ4_streamPtr, const char* source, char* dest, int inputSize);
LZ4_DEPRECATED(&quot;use LZ4_compress_fast_continue() instead&quot;) LZ4LIB_API int LZ4_compress_limitedOutput_continue  (LZ4_stream_t* LZ4_streamPtr, const char* source, char* dest, int inputSize, int maxOutputSize);

</code></pre>

<pre class="lz4-source-comment">/*!
廃止された展開関数（v1.8.0から）
*/
</pre>

<pre><code>LZ4_DEPRECATED(&quot;use LZ4_decompress_fast() instead&quot;) LZ4LIB_API int LZ4_uncompress (const char* source, char* dest, int outputSize);
LZ4_DEPRECATED(&quot;use LZ4_decompress_safe() instead&quot;) LZ4LIB_API int LZ4_uncompress_unknownOutputSize (const char* source, char* dest, int isize, int maxOutputSize);

</code></pre>

<pre class="lz4-source-comment">/*!
廃止されたストリーミング関数（v1.7.0から）
機能が低下しています。使わないでください。

これらの関数は、ストリーミング圧縮のために、現在は状態内で追跡していないデータに依存していました。可能な限り維持しているので、使っても正しい出力を生成します。ただし、実際には圧縮呼び出しの間で履歴を保持しません。そのため、圧縮率は各チャンクを独立に圧縮した場合よりよくなりません。
*/
</pre>

<pre><code>LZ4_DEPRECATED(&quot;Use LZ4_createStream() instead&quot;) LZ4LIB_API void* LZ4_create (char* inputBuffer);
LZ4_DEPRECATED(&quot;Use LZ4_createStream() instead&quot;) LZ4LIB_API int   LZ4_sizeofStreamState(void);
LZ4_DEPRECATED(&quot;Use LZ4_resetStream() instead&quot;)  LZ4LIB_API int   LZ4_resetStreamState(void* state, char* inputBuffer);
LZ4_DEPRECATED(&quot;Use LZ4_saveDict() instead&quot;)     LZ4LIB_API char* LZ4_slideInputBuffer (void* state);

</code></pre>

<pre class="lz4-source-comment">/*!
廃止されたストリーミング展開関数（v1.7.0から）
*/
</pre>

<pre><code>LZ4_DEPRECATED(&quot;use LZ4_decompress_safe_usingDict() instead&quot;) LZ4LIB_API int LZ4_decompress_safe_withPrefix64k (const char* src, char* dst, int compressedSize, int maxDstSize);
LZ4_DEPRECATED(&quot;use LZ4_decompress_fast_usingDict() instead&quot;) LZ4LIB_API int LZ4_decompress_fast_withPrefix64k (const char* src, char* dst, int originalSize);

</code></pre>

<pre class="lz4-source-comment">/*!
廃止されたLZ4_decompress_fastの各種関数（v1.9.0から）:
以前はLZ4_decompress_safe()より速かった関数ですが、現在はそうではなく、むしろ遅くなっています。LZ4_decompress_fast()は入力サイズを知らないため、ブロック終端の外を読まないように、入力バッファーをより慎重に進めなければならないからです。さらに、`LZ4_decompress_fast()`は、不正な形式や悪意のある入力に対して保護されておらず、セキュリティ上の問題になります。そのため、LZ4_decompress_fast()は強く非推奨とされ、非推奨APIになっています。

LZ4_decompress_fast()に残る唯一の特性は、圧縮サイズを知らずにブロックを展開できる点です。LZ4_decompress_safe_partial()を使えば、この機能をより安全に実現できます。

パラメーター:
originalSize: 復元する非圧縮サイズ。`dst`は事前に確保し、そのサイズは &gt;= &#x27;originalSize&#x27;バイトでなければなりません。
@return: 入力バッファーから読んだバイト数（== 圧縮サイズ）。関数はブロックの終端で正確に終わることを期待します。入力ストリームの不正な形式を検出した場合は、展開を停止して負の値を返します。
注意: LZ4_decompress_fast*()にはoriginalSizeが必要です。この情報により、出力バッファーの終端を超えて書くことはありません。ただし、&#x27;src&#x27;のサイズを知らないので、入力バッファーの境界を超えて、量の分からない入力を読む場合があります。また、一致のオフセットを検証しないので、&#x27;src&#x27;からの一致データの読み取りが、先頭より前へはみ出す場合もあります。これらは、入力（圧縮）データが正しければ起こりませんが、不正な場合（誤り、または意図的な改変）には起こり得ます。したがって、これらの関数は、信頼できる環境で、信頼できるデータに対して**のみ**使ってください。
*/
</pre>

<pre><code>LZ4_DEPRECATED(&quot;This function is deprecated and unsafe. Consider using LZ4_decompress_safe_partial() instead&quot;)
LZ4LIB_API int LZ4_decompress_fast (const char* src, char* dst, int originalSize);
LZ4_DEPRECATED(&quot;This function is deprecated and unsafe. Consider migrating towards LZ4_decompress_safe_continue() instead. &quot;
               &quot;Note that the contract will change (requires block&#x27;s compressed size, instead of decompressed size)&quot;)
LZ4LIB_API int LZ4_decompress_fast_continue (LZ4_streamDecode_t* LZ4_streamDecode, const char* src, char* dst, int originalSize);
LZ4_DEPRECATED(&quot;This function is deprecated and unsafe. Consider using LZ4_decompress_safe_partial_usingDict() instead&quot;)
LZ4LIB_API int LZ4_decompress_fast_usingDict (const char* src, char* dst, int originalSize, const char* dictStart, int dictSize);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4_resetStream():
LZ4_stream_t構造体は、少なくとも一度初期化しなければなりません。LZ4_initStream()またはLZ4_resetStream()で行います。
LZ4_initStream()への切り替えを検討してください。将来、LZ4_resetStream()を呼ぶと非推奨の警告が出るようになります。
*/
</pre>

<pre><code>LZ4LIB_API void LZ4_resetStream (LZ4_stream_t* streamPtr);


#endif /* LZ4_H_98237428734687 */


#if defined (__cplusplus)
}
#endif
</code></pre>