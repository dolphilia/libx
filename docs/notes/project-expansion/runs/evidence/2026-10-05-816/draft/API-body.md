

<h1>1.10.0 マニュアル</h1>

<hr>
<a name="Contents" id="Contents"></a><h2>目次</h2>

<ol>
<li><a href="#Chapter1">はじめに</a></li>
<li><a href="#Chapter2">バージョン</a></li>
<li><a href="#Chapter3">メモリ使用量の調整</a></li>
<li><a href="#Chapter4">基本関数</a></li>
<li><a href="#Chapter5">高度な関数</a></li>
<li><a href="#Chapter6">ストリーミング圧縮関数</a></li>
<li><a href="#Chapter7">ストリーミング展開関数</a></li>
<li><a href="#Chapter8">実験的な節</a></li>
<li><a href="#Chapter9">内部用の定義</a></li>
<li><a href="#Chapter10">廃止された関数</a></li>
</ol>
<hr>
<a name="Chapter1" id="Chapter1"></a><h2>はじめに</h2>
<pre>LZ4は可逆圧縮アルゴリズムで、コア当たり&gt;500 MB/sの圧縮速度を提供し、複数コアのCPUへスケールします。展開器は非常に高速で、コア当たり複数GB/sに達し、複数コアのシステムでは通常RAMの速度限界に達します。

LZ4圧縮ライブラリは、メモリ内の圧縮・展開関数を提供します。バッファーの制御はすべて利用者に委ねます。圧縮は次の方法で行えます。
- 一段階（基本関数として説明）
- コンテキストを再利用する一段階（高度な関数で説明）
- 回数に上限のない複数段階（ストリーミング圧縮として説明）

lz4.hは、LZ4圧縮ブロックを生成・展開します（doc/lz4_Block_format.md）。この圧縮ブロックの展開には追加のメタデータが必要です。具体的なメタデータは展開関数によって異なります。通常のLZ4_decompress_safe()では、ブロックの圧縮サイズと、展開サイズの上限が含まれます。各アプリケーションは、そのメタデータを自由な方法で符号化・受け渡しできます。

lz4.hが扱うのはブロックだけで、フレームは生成できません。

ブロックとフレームは異なります（doc/lz4_Frame_format.md）。フレームは、定められた方法でブロックとメタデータをまとめます。圧縮データを自己完結的かつ移植可能にするには、メタデータを埋め込む必要があります。フレーム形式は、lz4frame.hで宣言する別のAPIで提供します。`lz4` CLIが扱えるのはフレームだけです。<BR></pre>

<pre><b>#if defined(LZ4_FREESTANDING) && (LZ4_FREESTANDING == 1)
#  define LZ4_HEAPMODE 0
#  define LZ4HC_HEAPMODE 0
#  define LZ4_STATIC_LINKING_ONLY_DISABLE_MEMORY_ALLOCATION 1
#  if !defined(LZ4_memcpy)
#    error "LZ4_FREESTANDING requires macro 'LZ4_memcpy'."
#  endif
#  if !defined(LZ4_memset)
#    error "LZ4_FREESTANDING requires macro 'LZ4_memset'."
#  endif
#  if !defined(LZ4_memmove)
#    error "LZ4_FREESTANDING requires macro 'LZ4_memmove'."
#  endif
#elif ! defined(LZ4_FREESTANDING)
#  define LZ4_FREESTANDING 0
#endif
</b><p>このマクロを1に設定すると、標準Cライブラリをサポートしない典型的な独立実行環境に適した「freestandingモード」を有効にします。

- LZ4_FREESTANDINGはコンパイル時の切り替えです。
- LZ4_memcpy、LZ4_memmove、LZ4_memsetの各マクロを定義する必要があります。
- ヒープを使わないLZ4/HC関数だけを有効にします。LZ4F_*関数はすべて非対応です。
- 基本的な設定はtests/freestanding.cを参照してください。</p></pre><BR>

<a name="Chapter2" id="Chapter2"></a><h2>バージョン</h2>
<pre></pre>

<pre><b>int LZ4_versionNumber (void);  </b>/**&lt; library version number; useful to check dll version; requires v1.3.0+ */<b>
</b></pre><BR>
<pre><b>const char* LZ4_versionString (void);   </b>/**&lt; library version string; useful to check dll version; requires v1.7.5+ */<b>
</b></pre><BR>
<a name="Chapter3" id="Chapter3"></a><h2>メモリ使用量の調整</h2>
<pre></pre>

<pre><b>#ifndef LZ4_MEMORY_USAGE
# define LZ4_MEMORY_USAGE LZ4_MEMORY_USAGE_DEFAULT
#endif
</b><p>LZ4_MEMORY_USAGEを設定し、コンパイル時に選択できます。
メモリ使用量の式: N-&gt;2^Nバイト（例: 10 -&gt; 1KB、12 -&gt; 4KB、16 -&gt; 64KB、20 -&gt; 1MB）。
メモリ使用量を増やすと圧縮率が改善しますが、通常は速度を犠牲にします。
使用量を減らすと、キャッシュの局所性が改善し、圧縮率と引き換えに速度が向上する場合があります。
既定値は14で16KBです。大半のL1キャッシュによく収まります。</p></pre><BR>

<a name="Chapter4" id="Chapter4"></a><h2>基本関数</h2>
<pre></pre>

<pre><b>int LZ4_compress_default(const char* src, char* dst, int srcSize, int dstCapacity);
</b><p>バッファー&#x27;src&#x27;の&#x27;srcSize&#x27;バイトを、事前に確保したサイズ&#x27;dstCapacity&#x27;の&#x27;dst&#x27;バッファーへ圧縮します。
&#x27;dstCapacity&#x27; &gt;= LZ4_compressBound(srcSize)なら、圧縮の成功を保証します。速度も速くなるため、推奨する設定です。
より小さな&#x27;dst&#x27;容量に&#x27;src&#x27;を圧縮できない場合、圧縮は*直ちに*停止し、関数の戻り値はゼロです。その場合、&#x27;dst&#x27;の内容は未定義（無効）です。
srcSize: サポートする最大値はLZ4_MAX_INPUT_SIZEです。
dstCapacity: バッファー&#x27;dst&#x27;のサイズです（事前に確保しなければなりません）。
@return: &#x27;dst&#x27;へ書き込んだバイト数（必ず &lt;= dstCapacity）、または圧縮失敗時は0。
注意: この関数はバッファーオーバーフローに対して保護されています。&#x27;dst&#x27;の外へ書き込むことも、&#x27;source&#x27;の外を読むこともありません。</p></pre><BR>

<pre><b>int LZ4_decompress_safe (const char* src, char* dst, int compressedSize, int dstCapacity);
</b><p>@compressedSize: 圧縮ブロック全体の正確なサイズです。
@dstCapacity: 出力先バッファーのサイズです（事前に確保しなければなりません）。展開サイズの上限と想定します。
@return: 出力先バッファーへ展開したバイト数（必ず &lt;= dstCapacity）。出力先バッファーが不足すると展開を停止し、エラーコード（負の値）を出します。入力ストリームの不正な形式を検出した場合も、展開を停止して負の値を返します。
注意1: この関数は悪意のあるデータパケットに対して保護されています。圧縮ブロックが悪意を持って改変され、展開器にバッファー外アクセスを指示していても、&#x27;dst&#x27;の外に書き込むことも、&#x27;source&#x27;の外を読むこともありません。その場合、展開器は直ちに停止し、圧縮ブロックを不正な形式と判断します。
注意2: compressedSizeとdstCapacityは関数へ渡さなければなりません。圧縮ブロックには含まれません。実装は、最も都合のよい方法でこの情報を送信・保存・導出できます。圧縮データとメタデータをまとめる別の形式が必要なら、代わりにlz4frame.hを検討してください。</p></pre><BR>

<a name="Chapter5" id="Chapter5"></a><h2>高度な関数</h2>
<pre></pre>

<pre><b>int LZ4_compressBound(int inputSize);
</b><p>入力データを圧縮できない「最悪の場合」に、LZ4圧縮が出力し得る最大サイズを提供します。主にメモリ確保（出力先バッファーのサイズ）に役立ちます。
コンパイル時の評価用にLZ4_COMPRESSBOUND()マクロも提供します（例えばスタック上のメモリ確保）。
dstCapacity &gt;= LZ4_compressBound(srcSize)ならLZ4_compress_default()の圧縮が速くなる点に注意してください。
inputSize: サポートする最大値はLZ4_MAX_INPUT_SIZEです。
return: 「最悪の場合」の最大出力サイズ。入力サイズが不正（大きすぎる、または負）なら0です。</p></pre><BR>

<pre><b>int LZ4_compress_fast (const char* src, char* dst, int srcSize, int dstCapacity, int acceleration);
</b><p>LZ4_compress_default()と同じですが、「acceleration」係数を選べます。値が大きいほどアルゴリズムは速くなりますが、圧縮は弱くなります。これはトレードオフです。細かく調整でき、値を一つ増やすごとに、速度が概ね+~3%向上します。
accelerationが&quot;1&quot;なら、通常のLZ4_compress_default()と同じです。
&lt;= 0の値はLZ4_ACCELERATION_DEFAULTに置き換えます（現在 == 1。lz4.c参照）。
&gt; LZ4_ACCELERATION_MAXの値はLZ4_ACCELERATION_MAXに置き換えます（現在 == 65537。lz4.c参照）。</p></pre><BR>

<pre><b>int LZ4_sizeofState(void);
int LZ4_compress_fast_extState (void* state, const char* src, char* dst, int srcSize, int dstCapacity, int acceleration);
</b><p>LZ4_compress_fast()と同じですが、状態には外部で確保したメモリ領域を使います。
LZ4_sizeofState()で必要なメモリ量を調べ、8バイト境界に合わせて確保します（通常は`malloc()`を使います）。
その後、このバッファーを`void* state`として圧縮関数に渡します。</p></pre><BR>

<pre><b>int LZ4_compress_destSize(const char* src, char* dst, int* srcSizePtr, int targetDstSize);
</b><p>処理の考え方を逆にし、&#x27;src&#x27;から可能な限り多くのデータを、事前に確保したサイズ &gt;= &#x27;dstCapacity&#x27;のバッファー&#x27;dst&#x27;に圧縮します。
&#x27;dst&#x27;が十分大きければ&#x27;src&#x27;の全内容を圧縮し、そうでなければ&#x27;src&#x27;から可能な限り多くのデータを圧縮して&#x27;dst&#x27;を完全に満たします。
注意: accelerationパラメーターは「既定」に固定されています。

*srcSizePtr: 入出力パラメーターです。初期値は入力サイズで、&#x27;dst&#x27;を満たすために&#x27;src&#x27;から読んだバイト数へ変更します。新しい値は必ず入力値以下です。
@return: &#x27;dst&#x27;へ書いたバイト数（必ず &lt;= dstCapacity）、または圧縮失敗時は0。

注意: v1.8.2からv1.9.1にはバグがありました（v1.9.2+で修正）。特定の状況では、生成した圧縮内容を展開するのに、展開する内容より少なくとも1バイト大きい出力先バッファーが必要になる場合があります。
アプリケーションが`LZ4_compress_destSize()`を使う場合は、liblz4をv1.9.2以降へ更新することを強く推奨します。
更新できない、または更新を保証できない場合、受信側の展開関数には、展開サイズより少なくとも1バイト大きいdstCapacity（&gt; decompressedSize）を渡すべきです。
詳しくはhttps://github.com/lz4/lz4/issues/859を参照してください。</p></pre><BR>

<pre><b>int LZ4_decompress_safe_partial (const char* src, char* dst, int srcSize, int targetOutputSize, int dstCapacity);
</b><p>&#x27;src&#x27;位置のサイズ&#x27;srcSize&#x27;のLZ4圧縮ブロックを、サイズ&#x27;dstCapacity&#x27;の出力先バッファー&#x27;dst&#x27;に展開します。
最大&#x27;targetOutputSize&#x27;バイトを展開し、その量に到達すると停止します。ブロックの先頭だけが必要な場合に、性能の向上に役立ちます。
@return: `dst`へ展開したバイト数（必ず &lt;= targetOutputSize）。入力ストリームの不正な形式を検出した場合は、負の値を返します。

注意1: 圧縮ブロックに含まれるデータが少なければ、@returnは &lt; targetOutputSizeになる場合があります。
注意2: targetOutputSizeは &lt;= dstCapacityでなければなりません。
注意3: 実際にはtargetOutputSizeに到達すると展開を停止するため、dstCapacityはある意味で冗長です。古い版では、展開処理はシーケンス全体を書き込んでいました。そのため、正確にtargetOutputSizeで書き込みを止める保証はなく、dstCapacityの範囲まで、それ以上のバイトを書き込む場合がありました。正常動作には「余裕」が必要でしたが、現在は不要です。それでもAPI互換性を保つため、同じシグネチャを維持しています。
注意4: srcSizeがブロックの正確なサイズなら、targetOutputSizeは、ブロックの展開サイズを超える値も含め任意の値にできます。生成するのは、最大でもブロックの展開サイズです。
注意5: srcSizeがブロックの圧縮サイズより_大きい_場合、targetOutputSizeは**必ず**ブロックの展開サイズ以下でなければなりません。そうでなければ、*通知されないデータ破損が発生します*。</p></pre><BR>

<a name="Chapter6" id="Chapter6"></a><h2>ストリーミング圧縮関数</h2>
<pre></pre>

<pre><b>#if !defined(RC_INVOKED) </b>/* https://docs.microsoft.com/en-us/windows/win32/menurc/predefined-macros */<b>
#if !defined(LZ4_STATIC_LINKING_ONLY_DISABLE_MEMORY_ALLOCATION)
LZ4_stream_t* LZ4_createStream(void);
int           LZ4_freeStream (LZ4_stream_t* streamPtr);
#endif </b>/* !defined(LZ4_STATIC_LINKING_ONLY_DISABLE_MEMORY_ALLOCATION) */<b>
#endif
</b><p>- RC_INVOKEDは、MSVC/Visual Studioに含まれるリソースコンパイラーrc.exeの定義済みシンボルです。
  https://docs.microsoft.com/en-us/windows/win32/menurc/predefined-macros
- rc.exeは古いコンパイラーなので、長いシンボル（&gt; 30文字）を切り詰め、&quot;RC4011: identifier truncated&quot;という警告を出します。
- 警告をなくすため、長いプリプロセッサーシンボルを&quot;#if !defined(RC_INVOKED) ... #endif&quot;ブロックで囲みます。これは「rc.exeが読み込む場合は、このブロックを読み飛ばす」という意味です。</p></pre><BR>

<pre><b>void LZ4_resetStream_fast (LZ4_stream_t* streamPtr);
</b><p>依存ブロックの新たな連鎖（例えばLZ4_compress_fast_continue()）のために、LZ4_stream_tを準備します。

LZ4_stream_tは、使う前に一度初期化しなければなりません。LZ4_createStream()で生成すると自動的に初期化します。ただし、例えばスタック上でLZ4_stream_tを単に宣言する場合は、まずLZ4_initStream()で初期化する必要があります。

初期化後、新しいストリームはLZ4_resetStream_fast()で開始します。新たなストリームごとにLZ4_resetStream_fast()で開始すれば、同じLZ4_stream_tを連続して何度も再利用し、複数ストリームを圧縮できます。

LZ4_resetStream_fast()はLZ4_initStream()よりずっと速いですが、ごみデータを含むメモリ領域には使えません。
注意: LZ4_resetStream_fast()が役立つのは、ストリーミング圧縮の場合だけです。*extState*関数は自分でリセットするため、事前のLZ4_resetStream_fast()は冗長で、むしろ逆効果です。</p></pre><BR>

<pre><b>int LZ4_loadDict (LZ4_stream_t* streamPtr, const char* dictionary, int dictSize);
</b><p>LZ4_stream_tで静的辞書を参照するための関数です。辞書は、圧縮中ずっと利用可能でなければなりません。LZ4_loadDict()はリセットを行うので、以前のデータをすべて忘れます。正常に展開するには、展開側でも同じ辞書を読み込む必要があります。
辞書は小さなデータ（KB単位）の圧縮率改善に役立ちます。LZ4自体はどのような入力も辞書として受け入れますが、辞書の効率も問題になります。迷う場合は、ZstandardのDictionary Builderを使ってください。
サイズ0の読み込みも許され、リセットと同じです。
@return: 読み込んだ辞書のバイト数（最後の64 KBだけを読み込みます）。</p></pre><BR>

<pre><b>int LZ4_loadDictSlow(LZ4_stream_t* streamPtr, const char* dictionary, int dictSize);
</b><p>LZ4_loadDict()と同じですが、CPUを少し多く使って、辞書の内容をより徹底して参照します。これにより、圧縮率がわずかに改善する見込みです。辞書を複数のセッションで再利用する場合には、追加のCPUコストに見合う可能性が高いです。
@return: 読み込んだ辞書のバイト数（最後の64 KBだけを読み込みます）。</p></pre><BR>

<pre><b>void
LZ4_attach_dictionary(LZ4_stream_t* workingStream,
                const LZ4_stream_t* dictionaryStream);
</b><p>静的辞書を何度も効率よく再利用できます。
毎回の圧縮前に、辞書バッファーを作業コンテキストへ再読み込みしたり、読み込み済みの辞書のLZ4_stream_tを作業用LZ4_stream_tへコピーしたりする代わりに、コピーのない準備方法を提供します。作業ストリームは、その場にある@dictionaryStreamを参照します。

@dictionaryStreamの状態について、いくつかの前提があります。現在、動作を期待すべきなのは、LZ4_loadDict()またはLZ4_loadDictSlow()で準備した状態だけです。
@dictionaryStreamにNULLを渡すこともでき、その場合は既存の辞書ストリームを解除します。

辞書を渡すと、既存のストリーム履歴をすべて置き換えます。参照できる履歴は辞書の内容だけで、論理的には、その後の最初の圧縮呼び出しで圧縮するデータの直前に位置します。

辞書が作業ストリームに接続されたままなのは、最初の圧縮呼び出しまでです。その終了時に解除します。@dictionaryStreamストリームと元のバッファーは、圧縮セッションが完了するまで、同じ場所にあり、アクセス可能で、変更されてはなりません。

注意: 展開側には相当するLZ4_attach_*()メソッドはありません。初期化コストがないため、複数セッションにわたってコストを共有する必要がないからです。辞書を使うLZ4ブロックの展開では、接続の有無にかかわらず、ストリーミングには通常のLZ4_setStreamDecode()、一括の展開には状態を持たないLZ4_decompress_safe_usingDict()を使ってください。</p></pre><BR>

<pre><b>int LZ4_compress_fast_continue (LZ4_stream_t* streamPtr, const char* src, char* dst, int srcSize, int dstCapacity, int acceleration);
</b><p>以前に圧縮したブロックのデータを使って&#x27;src&#x27;の内容を圧縮し、圧縮率を改善します。&#x27;dst&#x27;バッファーは事前に確保しなければなりません。
dstCapacity &gt;= LZ4_compressBound(srcSize)なら、圧縮の成功を保証し、速度も速くなります。
@return: 圧縮ブロックのサイズ。エラー時（通常は&#x27;dst&#x27;に収まらない場合）は0。

注意1: LZ4_compress_fast_continue()の呼び出しごとに新たなブロックを生成します。各ブロックの境界は明確です。各ブロックは、対応するメタデータでLZ4_decompress_*()を呼び、別々に展開しなければなりません。ブロックを連結し、LZ4_decompress_*()の一回の呼び出しでまとめて展開することはできません。
注意2: 直前64KBの入力データが、メモリ内の同じアドレスに、未変更のまま存在することを__前提とします__。
注意3: 入力がダブルバッファーなら、各バッファーは &lt; 64 KBも含め任意のサイズにできます。バッファー同士を少なくとも一バイト離してください。これにより、各ブロックが直前のブロックだけに依存することを保証します。
注意4: 入力がリングバッファーなら、&lt; 64 KBも含め任意のサイズにできます。
注意5: エラー後のストリーム状態は未定義（無効）で、リセットまたは解放だけが可能です。</p></pre><BR>

<pre><b>int LZ4_saveDict (LZ4_stream_t* streamPtr, char* safeBuffer, int maxDictSize);
</b><p>最後の64KBのデータが、現在のメモリ位置で利用可能なままであると保証できない場合は、安全な場所（char* safeBuffer）へ保存します。
概念的にはmemcpy()の後にLZ4_loadDict()を呼ぶのと同じですが、LZ4_saveDict()はテーブルを作り直さないため、ずっと速くなります。
@return: 保存した辞書のバイト数（必ず &lt;= maxDictSize）、またはエラー時は0。</p></pre><BR>

<a name="Chapter7" id="Chapter7"></a><h2>ストリーミング展開関数</h2>
<pre>バッファーを持たない同期API<BR></pre>

<pre><b>#if !defined(RC_INVOKED) </b>/* https://docs.microsoft.com/en-us/windows/win32/menurc/predefined-macros */<b>
#if !defined(LZ4_STATIC_LINKING_ONLY_DISABLE_MEMORY_ALLOCATION)
LZ4_streamDecode_t* LZ4_createStreamDecode(void);
int                 LZ4_freeStreamDecode (LZ4_streamDecode_t* LZ4_stream);
#endif </b>/* !defined(LZ4_STATIC_LINKING_ONLY_DISABLE_MEMORY_ALLOCATION) */<b>
#endif
</b><p>ストリーミング展開の追跡コンテキストを生成・破棄します。
追跡コンテキストは何度も再利用できます。</p></pre><BR>

<pre><b>int LZ4_setStreamDecode (LZ4_streamDecode_t* LZ4_streamDecode, const char* dictionary, int dictSize);
</b><p>LZ4_streamDecode_tコンテキストは一度確保し、何度も再利用できます。
ブロックの新たなストリームの展開を開始するために使います。
任意で辞書を設定できます。リセットを指示するにはNULLまたはサイズ0を使います。
辞書は安定していると想定します。次の展開中は、アクセス可能で、変更されてはなりません。
@return: 正常なら1、エラーなら0。</p></pre><BR>

<pre><b>int LZ4_decoderRingBufferSize(int maxBlockSize);
#define LZ4_DECODER_RING_BUFFER_SIZE(maxBlockSize) (65536 + 14 + (maxBlockSize))  </b>/* for static allocation; maxBlockSize presumed valid */<b>
</b><p>注意: 任意のリングバッファー方式では、ブロックを隣接させて展開すると想定します。次のブロック用の残り領域が不足したとき（remainingSize &lt; maxBlockSize）、リングバッファーの先頭から再開します。
ストリーミング展開用にこのようなリングバッファーを設定する際、maxBlockSizeの条件を守るどの入力にも対応できる、リングバッファーの最小サイズを提供します。
@return: リングバッファーの最小サイズ、またはエラー時（maxBlockSizeが不正）は0。</p></pre><BR>

<pre><b>int
LZ4_decompress_safe_continue (LZ4_streamDecode_t* LZ4_streamDecode,
                        const char* src, char* dst,
                        int srcSize, int dstCapacity);
</b><p>「ストリーミング」モードで、連続するブロックを展開できます。通常の独立ブロックと異なり、新しいブロックは以前のブロック内のデータを参照できます。
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

これらの条件を満たせない場合は、展開済みデータの最後の64KBを、展開中に変更されない安全なバッファーへ保存してください。その後、次のブロックを展開する前に、LZ4_setStreamDecode()で保存場所を指定します。</p></pre><BR>

<pre><b>int
LZ4_decompress_safe_usingDict(const char* src, char* dst,
                              int srcSize, int dstCapacity,
                              const char* dictStart, int dictSize);
</b><p>LZ4_setStreamDecode()の後にLZ4_decompress_safe_continue()を呼ぶ組み合わせと同じように動作します。
ただし、状態を持たないので、LZ4_streamDecode_t状態は不要です。
辞書は安定していると想定します。展開中は、アクセス可能で、変更されてはなりません。
性能上のヒント: dst == dictStart + dictSizeの場合、展開速度が大幅に向上する可能性があります。</p></pre><BR>

<pre><b>int
LZ4_decompress_safe_partial_usingDict(const char* src, char* dst,
                                      int compressedSize,
                                      int targetOutputSize, int maxOutputSize,
                                      const char* dictStart, int dictSize);
</b><p>LZ4_decompress_safe_partial()と同じように動作し、以前のデータのメモリ領域を指定する機能を追加しています。
性能上のヒント: dst == dictStart + dictSizeの場合、展開速度が大幅に向上する可能性があります。</p></pre><BR>

<a name="Chapter8" id="Chapter8"></a><h2>実験的な節</h2>
<pre>この節で宣言するシンボルは、不安定とみなさなければなりません。将来、シグネチャや意味が変わったり、完全に削除されたりする場合があります。そのため、呼び出し側がライブラリへ静的にリンクする場合にだけ、依存しても安全です。

安全でない使い方を防ぐため、宣言を保護するだけでなく、共有・動的ライブラリとしてLZ4をビルドする際は、定義も既定で隠します。

これらの宣言を使うには、アプリケーションでLZ4のヘッダーを組み込む前にLZ4_STATIC_LINKING_ONLYを定義してください。

実装を動的にアクセス可能にするには、LZ4ライブラリのビルド時にLZ4_PUBLISH_STATIC_FUNCTIONSを定義しなければなりません。<BR></pre>

<pre><b>LZ4LIB_STATIC_API int LZ4_compress_fast_extState_fastReset (void* state, const char* src, char* dst, int srcSize, int dstCapacity, int acceleration);
</b><p>LZ4_compress_fast_extState()の一種です。

この版を使うと、高コストの初期化段階を避けられます。状態バッファーが既に正しく初期化済みと分かっている場合にだけ、安全に呼べます（「正しく初期化済み」の定義は、前述のLZ4_resetStream_fast()のコメント参照）。
大まかな違いは、この関数がLZ4_resetStream_fast()のような呼び出しで渡された状態を初期化するのに対し、LZ4_compress_fast_extState()はLZ4_resetStream()の呼び出しから始める点です。</p></pre><BR>

<pre><b>int LZ4_compress_destSize_extState(void* state, const char* src, char* dst, int* srcSizePtr, int targetDstSize, int acceleration);
</b><p>LZ4_compress_destSize()と同じですが、外部で確保した状態を使います。
また、@accelerationを指定できます。</p></pre><BR>

<pre><b></b><p>メモリが非常に制限された環境では、入力と出力で同じバッファーを共有できます。どちらの場合も、入力をバッファーの末尾に置き、展開をバッファーの先頭から開始する必要があります。バッファーには余裕が必要なので、最終サイズより大きくなければなりません。

 |&lt;------------------------buffer---------------------------------&gt;|
                             |&lt;-----------compressed data---------&gt;|
 |&lt;-----------decompressed size------------------&gt;|
                                                  |&lt;----margin----&gt;|

この方法は、展開でより役立ちます。通常、展開サイズの方が大きく、余裕は小さいためです。

同一バッファー内の展開は、サイズ &gt;= LZ4_DECOMPRESS_INPLACE_BUFFER_SIZE(decompressedSize)の任意のバッファーで動作します。これはdecompressedSize &gt; compressedSizeを前提とします。そうでなければ、圧縮によって実際にはデータが拡大したということで、非圧縮を示すフラグを付けて保存する方が効率的です。圧縮できないデータ（既に圧縮済み、または暗号化済み）で起こり得ます。

同一バッファー内の圧縮では、余裕がより大きくなります。LZ4_DISTANCE_MAXまでの入力データを未変更のまま残す履歴保全と、圧縮できない入力のデータ拡大の、両方に対応しなければならないためです。その結果、必要なバッファーサイズはずっと大きくなり、同一バッファー内の圧縮によるメモリ節約は限られます。

圧縮のこのコストを抑える方法があります。
- LZ4_DISTANCE_MAXを変更して、履歴サイズを減らします。コンパイル時の定数なので、すべての圧縮にこの制限を適用する点に注意してください。input_size &lt; LZ4_DISTANCE_MAXの場合を除き、低い値では圧縮率が下がります。入力が小さいと分かっている場合には、妥当な工夫です。
- 圧縮器に「最大圧縮サイズ」を指定します。これは`LZ4_compress*()`の`dstCapacity`パラメーターです。このサイズが &lt; LZ4_COMPRESSBOUND(inputSize)なら圧縮が失敗する可能性があり、その場合の戻り値は0（ゼロ）です。呼び出し側は、その場合に備えなければなりません。通常は、データを非圧縮で送る代替手段を用意します。
両方を組み合わせると、同一バッファー内の圧縮に必要な余裕を大幅に減らせます。

同一バッファー内の圧縮は、サイズ &gt;= (maxCompressedSize)の任意のバッファーで動作できます。圧縮成功を保証するには、maxCompressedSize == LZ4_COMPRESSBOUND(srcSize)とします。LZ4_COMPRESS_INPLACE_BUFFER_SIZE()は、maxCompressedSizeとLZ4_DISTANCE_MAXの両方に依存するため、これらを調整して必要メモリ量を減らせます。</p></pre><BR>

<pre><b>#define LZ4_DECOMPRESS_INPLACE_BUFFER_SIZE(decompressedSize)   ((decompressedSize) + LZ4_DECOMPRESS_INPLACE_MARGIN(decompressedSize))  </b>/**&lt; note: presumes that compressedSize &lt; decompressedSize. note2: margin is overestimated a bit, since it could use compressedSize instead */<b>
</b></pre><BR>
<pre><b>#define LZ4_COMPRESS_INPLACE_BUFFER_SIZE(maxCompressedSize)   ((maxCompressedSize) + LZ4_COMPRESS_INPLACE_MARGIN)  </b>/**&lt; maxCompressedSize is generally LZ4_COMPRESSBOUND(inputSize), but can be set to any lower value, with the risk that compression can fail (return code 0(zero)) */<b>
</b></pre><BR>
<a name="Chapter9" id="Chapter9"></a><h2>内部用の定義</h2>
<pre>これらの定義を直接使わないでください。
`LZ4_stream_t`と`LZ4_streamDecode_t`を静的に確保できるようにするためだけに公開しています。
メンバーへアクセスすると、利用者のコードが将来のライブラリのAPIやABIの互換性破壊の影響を受けます。<BR></pre>

<pre><b></b><p>以下の内部定義を決して直接使わないでください。
API/ABIに関して安全ではなく、将来のバージョンで変わる場合があります。
静的に確保する必要がある場合は、LZ4_stream_tオブジェクトを宣言または確保してください。</p></pre><BR>

<pre><b>LZ4_stream_t* LZ4_initStream (void* stateBuffer, size_t size);
</b><p>LZ4_stream_t構造体は、少なくとも一度初期化しなければなりません。LZ4_createStream()では自動的に行いますが、例えばスタック上で構造体を単に宣言する場合は行いません。

新たに宣言したLZ4_stream_tを正しく初期化するには、LZ4_initStream()を使ってください。十分なサイズの任意のバッファーも初期化でき、初期化時には、適切な型のポインターを@returnとして返します。

注意: サイズとアラインメントの条件を満たさない場合は初期化に失敗し、@returnはNULLです。
注意2: LZ4_stream_t構造体は、正しいアラインメントとサイズを保証します。
注意3: v1.9.0より前では、代わりにLZ4_resetStream()を使ってください。</p></pre><BR>

<pre><b>typedef struct {
    const LZ4_byte* externalDict;
    const LZ4_byte* prefixEnd;
    size_t extDictSize;
    size_t prefixSize;
} LZ4_streamDecode_t_internal;
</b><p>以下の内部定義を決して直接使わないでください。
API/ABIに関して安全ではなく、将来のバージョンで変わる場合があります。
静的に確保する必要がある場合は、LZ4_streamDecode_tオブジェクトを宣言または確保してください。</p></pre><BR>

<a name="Chapter10" id="Chapter10"></a><h2>廃止された関数</h2>
<pre></pre>

<pre><b>#ifdef LZ4_DISABLE_DEPRECATE_WARNINGS
#  define LZ4_DEPRECATED(message)   </b>/* disable deprecation warnings */<b>
#else
#  if defined (__cplusplus) && (__cplusplus >= 201402) </b>/* C++14 or greater */<b>
#    define LZ4_DEPRECATED(message) [[deprecated(message)]]
#  elif defined(_MSC_VER)
#    define LZ4_DEPRECATED(message) __declspec(deprecated(message))
#  elif defined(__clang__) || (defined(__GNUC__) && (__GNUC__ * 10 + __GNUC_MINOR__ >= 45))
#    define LZ4_DEPRECATED(message) __attribute__((deprecated(message)))
#  elif defined(__GNUC__) && (__GNUC__ * 10 + __GNUC_MINOR__ >= 31)
#    define LZ4_DEPRECATED(message) __attribute__((deprecated))
#  else
#    pragma message("WARNING: LZ4_DEPRECATED needs custom implementation for this compiler")
#    define LZ4_DEPRECATED(message)   </b>/* disabled */<b>
#  endif
#endif </b>/* LZ4_DISABLE_DEPRECATE_WARNINGS */<b>
</b><p>非推奨の関数を呼ぶと、コンパイラーが警告を出します。利用者にソースコードの更新を促すためです。
警告が問題になる場合は、通常、無効にできます。典型的にはgccの-Wno-deprecated-declarations、またはVisualの_CRT_SECURE_NO_WARNINGSです。
別の方法として、ヘッダーファイルを組み込む前にLZ4_DISABLE_DEPRECATE_WARNINGSを定義します。</p></pre><BR>

<pre><b>LZ4_DEPRECATED("use LZ4_compress_default() instead")       LZ4LIB_API int LZ4_compress               (const char* src, char* dest, int srcSize);
LZ4_DEPRECATED("use LZ4_compress_default() instead")       LZ4LIB_API int LZ4_compress_limitedOutput (const char* src, char* dest, int srcSize, int maxOutputSize);
LZ4_DEPRECATED("use LZ4_compress_fast_extState() instead") LZ4LIB_API int LZ4_compress_withState               (void* state, const char* source, char* dest, int inputSize);
LZ4_DEPRECATED("use LZ4_compress_fast_extState() instead") LZ4LIB_API int LZ4_compress_limitedOutput_withState (void* state, const char* source, char* dest, int inputSize, int maxOutputSize);
LZ4_DEPRECATED("use LZ4_compress_fast_continue() instead") LZ4LIB_API int LZ4_compress_continue                (LZ4_stream_t* LZ4_streamPtr, const char* source, char* dest, int inputSize);
LZ4_DEPRECATED("use LZ4_compress_fast_continue() instead") LZ4LIB_API int LZ4_compress_limitedOutput_continue  (LZ4_stream_t* LZ4_streamPtr, const char* source, char* dest, int inputSize, int maxOutputSize);
</b><p></p></pre><BR>

<pre><b>LZ4_DEPRECATED("use LZ4_decompress_fast() instead") LZ4LIB_API int LZ4_uncompress (const char* source, char* dest, int outputSize);
LZ4_DEPRECATED("use LZ4_decompress_safe() instead") LZ4LIB_API int LZ4_uncompress_unknownOutputSize (const char* source, char* dest, int isize, int maxOutputSize);
</b><p></p></pre><BR>

<pre><b>LZ4_DEPRECATED("use LZ4_decompress_safe_usingDict() instead") LZ4LIB_API int LZ4_decompress_safe_withPrefix64k (const char* src, char* dst, int compressedSize, int maxDstSize);
LZ4_DEPRECATED("use LZ4_decompress_fast_usingDict() instead") LZ4LIB_API int LZ4_decompress_fast_withPrefix64k (const char* src, char* dst, int originalSize);
</b><p></p></pre><BR>

<pre><b>LZ4_DEPRECATED("This function is deprecated and unsafe. Consider using LZ4_decompress_safe_partial() instead")
int LZ4_decompress_fast (const char* src, char* dst, int originalSize);
LZ4_DEPRECATED("This function is deprecated and unsafe. Consider migrating towards LZ4_decompress_safe_continue() instead. "
               "Note that the contract will change (requires block's compressed size, instead of decompressed size)")
int LZ4_decompress_fast_continue (LZ4_streamDecode_t* LZ4_streamDecode, const char* src, char* dst, int originalSize);
LZ4_DEPRECATED("This function is deprecated and unsafe. Consider using LZ4_decompress_safe_partial_usingDict() instead")
int LZ4_decompress_fast_usingDict (const char* src, char* dst, int originalSize, const char* dictStart, int dictSize);
</b><p>以前はLZ4_decompress_safe()より速かった関数ですが、現在はそうではなく、むしろ遅くなっています。LZ4_decompress_fast()は入力サイズを知らないため、ブロック終端の外を読まないように、入力バッファーをより慎重に進めなければならないからです。さらに、`LZ4_decompress_fast()`は、不正な形式や悪意のある入力に対して保護されておらず、セキュリティ上の問題になります。そのため、LZ4_decompress_fast()は強く非推奨とされ、非推奨APIになっています。

LZ4_decompress_fast()に残る唯一の特性は、圧縮サイズを知らずにブロックを展開できる点です。LZ4_decompress_safe_partial()を使えば、この機能をより安全に実現できます。

パラメーター:
originalSize: 復元する非圧縮サイズ。`dst`は事前に確保し、そのサイズは &gt;= &#x27;originalSize&#x27;バイトでなければなりません。
@return: 入力バッファーから読んだバイト数（== 圧縮サイズ）。関数はブロックの終端で正確に終わることを期待します。入力ストリームの不正な形式を検出した場合は、展開を停止して負の値を返します。
注意: LZ4_decompress_fast*()にはoriginalSizeが必要です。この情報により、出力バッファーの終端を超えて書くことはありません。ただし、&#x27;src&#x27;のサイズを知らないので、入力バッファーの境界を超えて、量の分からない入力を読む場合があります。また、一致のオフセットを検証しないので、&#x27;src&#x27;からの一致データの読み取りが、先頭より前へはみ出す場合もあります。これらは、入力（圧縮）データが正しければ起こりませんが、不正な場合（誤り、または意図的な改変）には起こり得ます。したがって、これらの関数は、信頼できる環境で、信頼できるデータに対して**のみ**使ってください。</p></pre><BR>

<pre><b>void LZ4_resetStream (LZ4_stream_t* streamPtr);
</b><p>LZ4_stream_t構造体は、少なくとも一度初期化しなければなりません。LZ4_initStream()またはLZ4_resetStream()で行います。
LZ4_initStream()への切り替えを検討してください。将来、LZ4_resetStream()を呼ぶと非推奨の警告が出るようになります。</p></pre><BR>



