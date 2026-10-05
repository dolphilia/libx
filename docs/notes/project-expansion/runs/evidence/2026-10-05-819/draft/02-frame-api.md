---
title: "LZ4: フレームAPIマニュアル"
licenseSource: "lz4-1-10-0-doc-lz4frame-manual-html"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>16d83fc4920d1df5e26c3de9e1c6c24fe0233033fb1c8c52c0ef689cb20a11d3</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/doc/lz4frame_manual.html\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/doc/lz4frame_manual.html.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の GPL-2.0-or-later（本掲載はversion2条件を履行） をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>生成APIマニュアルの説明・見出し・目次を日本語に翻訳し、全宣言・宣言内コメントを原文のまま保持しました。同文の固定ヘッダーコメントの日本語訳を、生成時に省かれた関数/節名と版ラベルを除いて再利用しています。説明の改行・記号はHTML文字参照で保持しています。</p><p>原説明にはLZ4F_compressUpdateの説明内のLZ4F_compress、LZ4F_flush/Endの説明内のLZ4_flush、LZ4F_createCDict宣言に対するLZ4_createCDictとLZ4_CDict、LZ4F_CustomMem宣言に対するLZ4F_customMemがあり、無断で修正していません。LZ4F_compressFrame_usingCDictの容量条件にある@dstBufferも、宣言のdstCapacityへ置換していません。元lz4frame.h全文は別ページに収録し、生成マニュアルの範囲外説明も保持しています。今回ソフトウェアの実行や性能測定は行っていません。</p>"
---



<h1>1.10.0 マニュアル</h1>

<hr>
<a name="Contents" id="Contents"></a><h2>目次</h2>

<ol>
<li><a href="#Chapter1">はじめに</a></li>
<li><a href="#Chapter2">コンパイラー固有の事項</a></li>
<li><a href="#Chapter3">エラー管理</a></li>
<li><a href="#Chapter4">フレーム圧縮の型</a></li>
<li><a href="#Chapter5">基本圧縮関数</a></li>
<li><a href="#Chapter6">高度な圧縮関数</a></li>
<li><a href="#Chapter7">リソース管理</a></li>
<li><a href="#Chapter8">圧縮</a></li>
<li><a href="#Chapter9">展開関数</a></li>
<li><a href="#Chapter10">ストリーミング展開関数</a></li>
<li><a href="#Chapter11">辞書圧縮API</a></li>
<li><a href="#Chapter12">辞書圧縮の一括処理</a></li>
<li><a href="#Chapter13">高度な圧縮操作</a></li>
<li><a href="#Chapter14">メモリ確保のカスタマイズ</a></li>
</ol>
<hr>
<a name="Chapter1" id="Chapter1"></a><h2>はじめに</h2>
<pre>lz4frame.hはLZ4フレーム仕様を実装します。doc/lz4&#95;Frame&#95;format.mdを参照してください。LZ4フレームは&#96;lz4&#96; CLIと互換で、どのシステムとも相互運用できるよう設計しています。<BR></pre>

<a name="Chapter2" id="Chapter2"></a><h2>コンパイラー固有の事項</h2>
<pre></pre>

<a name="Chapter3" id="Chapter3"></a><h2>エラー管理</h2>
<pre></pre>

<pre><b>unsigned    LZ4F_isError(LZ4F_errorCode_t code);   </b>/**&lt; tells when a function result is an error code */<b>
</b></pre><BR>
<pre><b>const char* LZ4F_getErrorName(LZ4F_errorCode_t code);   </b>/**&lt; return error code string; for debugging */<b>
</b></pre><BR>
<a name="Chapter4" id="Chapter4"></a><h2>フレーム圧縮の型</h2>
<pre> 
<BR></pre>

<pre><b>typedef enum {
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
</b></pre><BR>
<pre><b>typedef enum {
    LZ4F_blockLinked=0,
    LZ4F_blockIndependent
    LZ4F_OBSOLETE_ENUM(blockLinked)
    LZ4F_OBSOLETE_ENUM(blockIndependent)
} LZ4F_blockMode_t;
</b></pre><BR>
<pre><b>typedef enum {
    LZ4F_noContentChecksum=0,
    LZ4F_contentChecksumEnabled
    LZ4F_OBSOLETE_ENUM(noContentChecksum)
    LZ4F_OBSOLETE_ENUM(contentChecksumEnabled)
} LZ4F_contentChecksum_t;
</b></pre><BR>
<pre><b>typedef enum {
    LZ4F_noBlockChecksum=0,
    LZ4F_blockChecksumEnabled
} LZ4F_blockChecksum_t;
</b></pre><BR>
<pre><b>typedef enum {
    LZ4F_frame=0,
    LZ4F_skippableFrame
    LZ4F_OBSOLETE_ENUM(skippableFrame)
} LZ4F_frameType_t;
</b></pre><BR>
<pre><b>typedef struct {
  LZ4F_blockSizeID_t     blockSizeID;         </b>/* max64KB, max256KB, max1MB, max4MB; 0 == default (LZ4F_max64KB) */<b>
  LZ4F_blockMode_t       blockMode;           </b>/* LZ4F_blockLinked, LZ4F_blockIndependent; 0 == default (LZ4F_blockLinked) */<b>
  LZ4F_contentChecksum_t contentChecksumFlag; </b>/* 1: add a 32-bit checksum of frame's decompressed data; 0 == default (disabled) */<b>
  LZ4F_frameType_t       frameType;           </b>/* read-only field : LZ4F_frame or LZ4F_skippableFrame */<b>
  unsigned long long     contentSize;         </b>/* Size of uncompressed content ; 0 == unknown */<b>
  unsigned               dictID;              </b>/* Dictionary ID, sent by compressor to help decoder select correct dictionary; 0 == no dictID provided */<b>
  LZ4F_blockChecksum_t   blockChecksumFlag;   </b>/* 1: each block followed by a checksum of block's compressed data; 0 == default (disabled) */<b>
} LZ4F_frameInfo_t;
</b><p>フレームのパラメーターを設定・読み取りできます。&#10;構造体は、まずmemset()またはLZ4F&#95;INIT&#95;FRAMEINFOを使って0に初期化し、すべてのパラメーターを既定値にしなければなりません。&#10;その後、一部のパラメーターだけを変更できます。</p></pre><BR>

<pre><b>typedef struct {
  LZ4F_frameInfo_t frameInfo;
  int      compressionLevel;    </b>/* 0: default (fast mode); values > LZ4HC_CLEVEL_MAX count as LZ4HC_CLEVEL_MAX; values &lt; 0 trigger "fast acceleration" */<b>
  unsigned autoFlush;           </b>/* 1: always flush; reduces usage of internal buffers */<b>
  unsigned favorDecSpeed;       </b>/* 1: parser favors decompression speed vs compression ratio. Only works for high compression modes (>= LZ4HC_CLEVEL_OPT_MIN) */  /* v1.8.2+ */<b>
  unsigned reserved[3];         </b>/* must be zero for forward compatibility */<b>
} LZ4F_preferences_t;
</b><p>ストリーミングインターフェースへ、高度な圧縮指示を渡せます。&#10;構造体は、まずmemset()またはLZ4F&#95;INIT&#95;PREFERENCESを使って0に初期化し、すべてのパラメーターを既定値にしなければなりません。&#10;予約済みのフィールドは、すべてゼロにしなければなりません。</p></pre><BR>

<a name="Chapter5" id="Chapter5"></a><h2>基本圧縮関数</h2>
<pre></pre>

<pre><b>size_t LZ4F_compressFrame(void* dstBuffer, size_t dstCapacity,
                                const void* srcBuffer, size_t srcSize,
                                const LZ4F_preferences_t* preferencesPtr);
</b><p>srcBufferの内容を、LZ4で圧縮したフレームへ圧縮します。一括の操作で、入力の全内容を消費し、出力全体を生成します。&#10;&#10;注意: 状態を持たない操作です（LZ4F&#95;cctx状態は不要）。アロケーターの負荷を減らすため、LZ4F&#95;compressFrame()は既定で、圧縮状態と一部のテーブル用領域をスタックに確保します。このスタック使用量がアプリケーションにとって大きすぎる場合は、コンパイル時のマクロLZ4F&#95;HEAPMODEを1にして&#96;lz4frame.c&#96;をコンパイルすることを検討してください。状態の確保はすべてヒープを使います。また、その場合、LZ4F&#95;compressFrame()を呼ぶごとに、内部で複数のalloc/free呼び出しを行います。&#10;&#10;@dstCapacityは、&#42;&#42;必ず&#42;&#42; &gt;= LZ4F&#95;compressFrameBound(srcSize, preferencesPtr)でなければなりません。&#10;@preferencesPtrは任意です。NULLを渡すと、すべての設定を既定値にします。&#10;@return: dstBufferへ書いたバイト数。失敗した場合はエラーコードです（LZ4F&#95;isError()で検査できます）。</p></pre><BR>

<pre><b>size_t LZ4F_compressFrameBound(size_t srcSize, const LZ4F_preferences_t* preferencesPtr);
</b><p>srcSizeと設定を基に、LZ4F&#95;compressFrame()による最大の圧縮サイズを返します。&#10;&#96;preferencesPtr&#96;は任意です。NULLに置き換えると、既定の設定を想定します。&#10;注意: この結果を使えるのはLZ4F&#95;compressFrame()だけです。LZ4F&#95;compressUpdate()にも関係し得ますが、flush()操作を一度も行わない場合に&#95;限ります&#95;。</p></pre><BR>

<pre><b>int LZ4F_compressionLevel_max(void);   </b>/* v1.8.0+ */<b>
</b><p>@return: 許される最大圧縮レベル（現在は12）。</p></pre><BR>

<a name="Chapter6" id="Chapter6"></a><h2>高度な圧縮関数</h2>
<pre></pre>

<pre><b>typedef struct {
  unsigned stableSrc;    </b>/* 1 == src content will remain present on future calls to LZ4F_compress(); skip copying src content within tmp buffer */<b>
  unsigned reserved[3];
} LZ4F_compressOptions_t;
</b></pre><BR>
<a name="Chapter7" id="Chapter7"></a><h2>リソース管理</h2>
<pre></pre>

<pre><b>LZ4F_errorCode_t LZ4F_createCompressionContext(LZ4F_cctx** cctxPtr, unsigned version);
LZ4F_errorCode_t LZ4F_freeCompressionContext(LZ4F_cctx* cctx);
</b><p>まず、ストリーミング圧縮中の処理状態を追跡するcompressionContextオブジェクトを生成します。LZ4F&#95;createCompressionContext()にバージョンとLZ4F&#95;cctx&#42;へのポインターを渡し、生成したポインターをその場所へ書き込みます。&#10;渡す@versionは、&#42;&#42;必ず&#42;&#42;LZ4F&#95;VERSIONでなければなりません。特にDLLを使う場合の、バージョン不一致の可能性を追跡するためです。関数は、完全に確保したLZ4F&#95;cctxオブジェクトへのポインターを提供します。&#10;@cctxPtrは、&#42;&#42;必ず&#42;&#42; != NULLでなければなりません。&#10;@returnがゼロでなければ、コンテキストの生成に失敗しています。&#10;生成した圧縮コンテキストは、連続するストリーミング操作に何度も使えます。すべてのストリーミング圧縮処理が終わったら、LZ4F&#95;freeCompressionContext()で状態オブジェクトを解放できます。&#10;注意1: LZ4F&#95;freeCompressionContext()は常に成功します。戻り値は無視できます。&#10;注意2: LZ4F&#95;freeCompressionContext()にNULLポインターを渡しても正常に動作します（何もしません）。</p></pre><BR>

<a name="Chapter8" id="Chapter8"></a><h2>圧縮</h2>
<pre></pre>

<pre><b>size_t LZ4F_compressBegin(LZ4F_cctx* cctx,
                                      void* dstBuffer, size_t dstCapacity,
                                      const LZ4F_preferences_t* prefsPtr);
</b><p>フレームヘッダーをdstBufferへ書き込みます。&#10;dstCapacityは &gt;= LZ4F&#95;HEADER&#95;SIZE&#95;MAXバイトでなければなりません。&#10;&#96;prefsPtr&#96;は任意です。NULLを渡すと、すべての設定を既定値にします。&#10;@return: ヘッダーとしてdstBufferへ書いたバイト数、またはエラーコードです（LZ4F&#95;isError()で検査できます）。</p></pre><BR>

<pre><b>size_t LZ4F_compressBound(size_t srcSize, const LZ4F_preferences_t* prefsPtr);
</b><p>srcSizeと設定を基に、最悪の場合でもLZ4F&#95;compressUpdate()の成功を保証するのに必要な最小dstCapacityを提供します。&#10;srcSize==0なら、代わりにLZ4F&#95;flush()とLZ4F&#95;compressEnd()の上限を提供します。&#10;結果が有効なのは、LZ4F&#95;compressUpdate()一回の呼び出しだけです。LZ4F&#95;compressUpdate()を複数回呼ぶ際、出力バッファーを空にして先頭から再利用せず、徐々に満たす場合は、各呼び出しの前にLZ4F&#95;compressBound()で残り容量が十分か確認しなければなりません。&#10;同じsrcSizeとprefsPtrに対するLZ4F&#95;compressBound()の@returnは常に同じです。&#10;prefsPtrは任意です。NULLを渡すと、最悪の場合をカバーする設定にします。&#10;技術的な詳細:&#10;自動フラッシュを有効にしていなければ、@returnは内部バッファーに既に最大(blockSize-1)バイト入っている可能性を含みます。&#10;LZ4F&#95;compressEnd()で生成し得るので、フレームのフッター（終端とチェックサム）も含みます。&#10;フレームヘッダーはLZ4F&#95;compressBegin()で既に生成しているため、@returnには含みません。</p></pre><BR>

<pre><b>size_t LZ4F_compressUpdate(LZ4F_cctx* cctx,
                                       void* dstBuffer, size_t dstCapacity,
                                 const void* srcBuffer, size_t srcSize,
                                 const LZ4F_compressOptions_t* cOptPtr);
</b><p>LZ4F&#95;compressUpdate()は、必要なだけのデータを圧縮するため、繰り返し呼べます。&#10;重要な規則: dstCapacityは、最悪の場合でも処理の成功を保証できるほど、&#42;&#42;必ず&#42;&#42;大きくなければなりません。この値はLZ4F&#95;compressBound()が提供します。条件を守らないと、LZ4F&#95;compress()は失敗します（結果はerrorCodeです）。エラー後の状態は未定義（UB）になり、再初期化または解放しなければなりません。&#10;以前に非圧縮ブロックを書いた場合は、圧縮データの追加を続ける前に、バッファー内のデータをフラッシュします。&#10;&#96;cOptPtr&#96;は任意です。NULLを渡すと、すべてのオプションを既定値にします。&#10;@return: &#96;dstBuffer&#96;へ書いたバイト数。ゼロの場合もあり、入力データをバッファーに入れただけという意味です。失敗した場合はエラーコードです（LZ4F&#95;isError()で検査できます）。</p></pre><BR>

<pre><b>size_t LZ4F_flush(LZ4F_cctx* cctx,
                              void* dstBuffer, size_t dstCapacity,
                        const LZ4F_compressOptions_t* cOptPtr);
</b><p>ブロックが完全に満たされるのを待たず、データを直ちに生成・送信しなければならない場合は、LZ4&#95;flush()を呼べます。cctx内に蓄えたデータを直ちに圧縮します。&#10;&#96;dstCapacity&#96;は、処理の成功を保証できるほど大きくなければなりません。&#10;&#96;cOptPtr&#96;は任意です。NULLを渡すと、すべてのオプションを既定値にします。&#10;@return: dstBufferへ書いたバイト数。cctx内にデータがなければ、ゼロの場合もあります。失敗した場合はエラーコードです（LZ4F&#95;isError()で検査できます）。&#10;注意: dstCapacity &gt;= LZ4F&#95;compressBound(0, prefsPtr)なら、LZ4F&#95;flush()の成功を保証します。</p></pre><BR>

<pre><b>size_t LZ4F_compressEnd(LZ4F_cctx* cctx,
                                    void* dstBuffer, size_t dstCapacity,
                              const LZ4F_compressOptions_t* cOptPtr);
</b><p>LZ4フレームを正しく終了するには、LZ4F&#95;compressEnd()を呼びます。LZ4&#95;flush()と同じように、&#96;cctx&#96;内に残ったデータをすべてフラッシュし、endMarkとチェックサムでフレームを正しく完結させます。&#10;&#96;cOptPtr&#96;は任意です。NULLを渡すと、すべてのオプションを既定値にします。&#10;@return: dstBufferへ書いたバイト数（必ず &gt;= 4。endMark）、または失敗時のエラーコードです（LZ4F&#95;isError()で検査できます）。&#10;注意: dstCapacity &gt;= LZ4F&#95;compressBound(0, prefsPtr)なら、LZ4F&#95;compressEnd()の成功を保証します。LZ4F&#95;compressEnd()の呼び出しに成功すると、&#96;cctx&#96;は別の圧縮処理に再び使えます。</p></pre><BR>

<a name="Chapter9" id="Chapter9"></a><h2>展開関数</h2>
<pre></pre>

<pre><b>typedef struct {
  unsigned stableDst;     /* pledges that last 64KB decompressed data is present right before @dstBuffer pointer.
                           * This optimization skips internal storage operations.
                           * Once set, this pledge must remain valid up to the end of current frame. */
  unsigned skipChecksums; /* disable checksum calculation and verification, even when one is present in frame, to save CPU time.
                           * Setting this option to 1 once disables all checksums for the rest of the frame. */
  unsigned reserved1;     </b>/* must be set to zero for forward compatibility */<b>
  unsigned reserved0;     </b>/* idem */<b>
} LZ4F_decompressOptions_t;
</b></pre><BR>
<pre><b>LZ4F_errorCode_t LZ4F_createDecompressionContext(LZ4F_dctx** dctxPtr, unsigned version);
LZ4F_errorCode_t LZ4F_freeDecompressionContext(LZ4F_dctx* dctx);
</b><p>展開処理全体を追跡するLZ4F&#95;dctxオブジェクトを生成します。&#10;渡す@versionは、&#42;&#42;必ず&#42;&#42;LZ4F&#95;VERSIONでなければなりません。&#10;@dctxPtrは、&#42;&#42;必ず&#42;&#42;有効でなければなりません。&#10;関数は、確保・初期化済みのLZ4F&#95;dctxオブジェクトへのポインターを@dctxPtrへ書き込みます。&#10;@returnはerrorCodeで、LZ4F&#95;isError()で検査できます。&#10;dctxのメモリはLZ4F&#95;freeDecompressionContext()で解放できます。LZ4F&#95;freeDecompressionContext()の結果は、解放時のdecompressionContextの状態を示します。つまり、展開が完全かつ正しく終わっている場合は == 0となるはずです。</p></pre><BR>

<a name="Chapter10" id="Chapter10"></a><h2>ストリーミング展開関数</h2>
<pre></pre>

<pre><b>size_t LZ4F_headerSize(const void* src, size_t srcSize);
</b><p>&#96;src&#96;から始まるフレームのヘッダーサイズを提供します。&#10;&#96;srcSize&#96;は &gt;= LZ4F&#95;MIN&#95;SIZE&#95;TO&#95;KNOW&#95;HEADER&#95;LENGTHでなければなりません。この量があれば、ヘッダーの長さを読み取れます。&#10;@return: フレームヘッダーのサイズ、またはエラーコードです。LZ4F&#95;isError()で検査できます。&#10;注意: フレームヘッダーのサイズは可変ですが、&gt;= LZ4F&#95;HEADER&#95;SIZE&#95;MINバイト、かつ &lt;= LZ4F&#95;HEADER&#95;SIZE&#95;MAXバイトであることを保証します。</p></pre><BR>

<pre><b>size_t
LZ4F_getFrameInfo(LZ4F_dctx* dctx,
                  LZ4F_frameInfo_t* frameInfoPtr,
            const void* srcBuffer, size_t* srcSizePtr);
</b><p>フレームのパラメーター（最大blockSize、dictIDなど）を取り出します。使用は任意で、利用者はLZ4F&#95;decompress()を直接呼ぶこともできます。&#10;取り出した情報は、既存のLZ4F&#95;frameInfo&#95;t構造体へ書き込みます。メモリ確保や辞書の識別に役立ちます。&#10;&#10;LZ4F&#95;getFrameInfo()は次の状況で使えます。&#10;1) 新しいフレームの先頭で、LZ4F&#95;decompress()を一度も呼んでいない場合。&#96;srcBuffer&#96;からヘッダーを読み取り、そのヘッダーを消費して展開処理を開始します。&#10;入力にはフレームヘッダー全体が入るだけのサイズが必要です。ヘッダーサイズはLZ4F&#95;headerSize()で事前に調べられます。サイズは可変ですが、&gt;= LZ4F&#95;HEADER&#95;SIZE&#95;MINバイト、かつ &lt;= LZ4F&#95;HEADER&#95;SIZE&#95;MAXバイトであることを保証します。したがって、調べずにLZ4F&#95;HEADER&#95;SIZE&#95;MAXバイト以上を渡しても常に動作します。ヘッダーサイズを超える入力データも渡せますが、LZ4F&#95;getFrameInfo()が消費するのはヘッダーだけです。入力サイズが不足し、ヘッダーサイズより小さければ、関数は失敗してエラーコードを返します。&#10;2) 展開開始後は、dctx内に保存した、既に読み取り済みのフレームパラメーターを、LZ4F&#95;getFrameInfo()を呼んでいつでも取り出せます。ただし、展開を始めたばかりで、ヘッダーを読み取るのに十分な情報をまだ読んでいなければ、LZ4F&#95;getFrameInfo()は失敗します。&#10;&#10;srcBufferから消費したバイト数は、&#42;srcSizePtrへ書き込みます（必ず元の値以下）。LZ4F&#95;getFrameInfo()がバイトを消費するのは、展開がまだ始まっておらず、かつヘッダーの読み取りに成功した場合だけです。その後の展開は、(srcBuffer + &#42;srcSizePtr)から再開しなければなりません。&#10;@return: 次の呼び出しでLZ4F&#95;decompress()が期待するsrcSizeバイト数の目安、またはエラーコードです。LZ4F&#95;isError()で検査できます。&#10;注意1: エラーの場合はdctxを変更しません。展開処理は安全に先頭から再開できます。&#10;注意2: フレームのパラメーターは、確保済みのLZ4F&#95;frameInfo&#95;t構造体へ&#42;コピーします&#42;。</p></pre><BR>

<pre><b>size_t
LZ4F_decompress(LZ4F_dctx* dctx,
                void* dstBuffer, size_t* dstSizePtr,
          const void* srcBuffer, size_t* srcSizePtr,
          const LZ4F_decompressOptions_t* dOptPtr);
</b><p>&#96;srcBuffer&#96;内の圧縮データを復元するため、繰り返し呼びます。&#10;有効なdctx状態が必要です。srcBufferから最大&#42;srcSizePtrバイトを読み、容量&#42;dstSizePtrのdstBufferへデータを展開します。&#10;srcBufferから消費したバイト数を&#42;srcSizePtrへ、dstBufferへ展開したバイト数を&#42;dstSizePtrへ書き込みます（どちらも必ず元の値以下）。&#10;入力の全バイトを読むとは限らないので、&#42;srcSizePtrの値を常に確認してください。未消費の入力データは、後続の呼び出しで再び渡さなければなりません。&#10;&#96;dstBuffer&#96;は、連続する呼び出しの間で自由に変更できます。その内容は上書きします。&#10;&#10;注意: &#96;LZ4F&#95;decompress()&#96;より先に&#96;LZ4F&#95;getFrameInfo()&#96;を呼んだ場合は、ヘッダー読み取りで消費したバイト数を反映するよう、srcBufferを更新しなければなりません。更新せずに&#96;LZ4F&#95;decompress()&#96;を呼ぶと、展開の失敗、またはさらに悪いことに、成功しているように見える誤った展開を招きます。詳細は&#96;LZ4F&#95;getFrameInfo()&#96;の説明を参照してください。&#10;&#10;@return: 次の呼び出しでLZ4F&#95;decompress()が期待する&#96;srcSize&#96;バイト数の目安です。概略として、現在の（または残りの）圧縮ブロックのサイズと、次のブロックのヘッダーの合計です。目安に従うと中間バッファーを省けるため、速度が少し向上します。ただし、あくまで目安で、任意のsrcSizeを渡せます。&#10;フレームを完全に展開すると、@returnは0です（それ以上のデータは期待しません）。フレームの展開に必要な量より多くのバイトを渡した場合は、LZ4F&#95;decompress()は現在のフレームの終端で正確に読み取りを止め、0を返します。&#10;展開に失敗した場合はエラーコードを返し、LZ4F&#95;isError()で検査できます。エラー後の&#96;dctx&#96;コンテキストは再開できません。LZ4F&#95;resetDecompressionContext()で正常な状態に戻してください。&#10;フレームの展開が完全に終わった後は、dctxを別のフレームの展開に再利用できます。</p></pre><BR>

<pre><b>void LZ4F_resetDecompressionContext(LZ4F_dctx* dctx);   </b>/* always successful */<b>
</b><p>エラーの場合、コンテキストは「未定義」の状態になります。再利用する前に、リセットしなければなりません。&#10;未完了の展開を途中で停止し、同じコンテキストのリソースを使って新たな展開を始めるためにも使えます。</p></pre><BR>

<a name="Chapter11" id="Chapter11"></a><h2>辞書圧縮API</h2>
<pre></pre>

<pre><b>size_t
LZ4F_compressBegin_usingDict(LZ4F_cctx* cctx,
                            void* dstBuffer, size_t dstCapacity,
                      const void* dictBuffer, size_t dictSize,
                      const LZ4F_preferences_t* prefsPtr);
</b><p>辞書を使うストリーミング圧縮を初期化し、フレームヘッダーをdstBufferへ書き込みます。&#10;@dstCapacityは &gt;= LZ4F&#95;HEADER&#95;SIZE&#95;MAXバイトでなければなりません。&#10;@prefsPtrは任意で、NULLも渡せます。ただし、フレームヘッダーへdictIDを提供するには、この設定を渡す以外に方法がありません。&#10;@dictBufferは、圧縮セッションより長く存続しなければなりません。&#10;@return: ヘッダーとしてdstBufferへ書いたバイト数、またはエラーコードです（LZ4F&#95;isError()で検査できます）。&#10;注意: LZ4Frame仕様では、独立した各ブロックを辞書で圧縮できますが、この関数が対応するのは、最初のブロックだけが辞書を使う、より限られた状況です。一ブロックしか必要ない小さなデータには、それでも役立ちます。より大きな入力では、後述のLZ4F&#95;compressFrame&#95;usingCDict()の方に関心があるかもしれません。</p></pre><BR>

<pre><b>size_t
LZ4F_decompress_usingDict(LZ4F_dctx* dctxPtr,
                          void* dstBuffer, size_t* dstSizePtr,
                    const void* srcBuffer, size_t* srcSizePtr,
                    const void* dict, size_t dictSize,
                    const LZ4F_decompressOptions_t* decompressOptionsPtr);
</b><p>事前に定めた辞書を使う点を除き、LZ4F&#95;decompress()と同じです。&#10;辞書は前処理をせず、その場で使います。フレーム全体の展開中ずっと、アクセス可能でなければなりません。</p></pre><BR>

<a name="Chapter12" id="Chapter12"></a><h2>辞書圧縮の一括処理</h2>
<pre></pre>

<pre><b>LZ4F_CDict* LZ4F_createCDict(const void* dictBuffer, size_t dictSize);
void        LZ4F_freeCDict(LZ4F_CDict* CDict);
</b><p>同じ辞書で複数のメッセージやブロックを圧縮する場合、初期化は一度だけ行うことを推奨します。&#10;LZ4&#95;createCDict()は、処理済みの辞書を生成し、以後の圧縮処理を開始時の遅延なしに始められるようにします。&#10;LZ4&#95;CDictは、読み取り専用で使うため、一度生成して、複数のスレッドで並行して共有できます。&#10;内容をCDict内へコピーするので、LZ4&#95;CDict生成後は@dictBufferを解放できます。</p></pre><BR>

<pre><b>size_t
LZ4F_compressFrame_usingCDict(LZ4F_cctx* cctx,
                              void* dst, size_t dstCapacity,
                        const void* src, size_t srcSize,
                        const LZ4F_CDict* cdict,
                        const LZ4F_preferences_t* preferencesPtr);
</b><p>処理済みの辞書を使い、srcBuffer全体を有効なLZ4フレームへ圧縮します。&#10;@cctxは、LZ4F&#95;createCompressionContext()で生成したコンテキストを指さなければなりません。&#10;@cdict==NULLなら、辞書なしで圧縮します。&#10;@dstBufferは、&#42;&#42;必ず&#42;&#42; &gt;= LZ4F&#95;compressFrameBound(srcSize, preferencesPtr)でなければなりません。条件を守らないと失敗します（@returnはerrorCode）。&#10;LZ4F&#95;preferences&#95;t構造体は任意で、NULLを渡せますが、推奨しません。フレームヘッダーへ@dictIDを提供できる唯一の方法だからです。&#10;@return: dstBufferへ書いたバイト数、または失敗時のエラーコードです（LZ4F&#95;isError()で検査できます）。&#10;注意: 複数の独立ブロックを生成する大きな入力では、この関数は各ブロックに辞書を使います。</p></pre><BR>

<pre><b>size_t
LZ4F_compressBegin_usingCDict(LZ4F_cctx* cctx,
                              void* dstBuffer, size_t dstCapacity,
                        const LZ4F_CDict* cdict,
                        const LZ4F_preferences_t* prefsPtr);
</b><p>辞書を使うストリーミング圧縮を初期化し、フレームヘッダーをdstBufferへ書き込みます。&#10;@dstCapacityは &gt;= LZ4F&#95;HEADER&#95;SIZE&#95;MAXバイトでなければなりません。&#10;@prefsPtrは任意で、NULLを渡せます。ただし、フレームヘッダーに@dictIDを挿入できる唯一の方法である点に注意してください。&#10;@cdictは、圧縮セッションより長く存続しなければなりません。&#10;@return: ヘッダーとしてdstBufferへ書いたバイト数、またはエラーコードです。LZ4F&#95;isError()で検査できます。</p></pre><BR>

<pre><b>typedef enum { LZ4F_LIST_ERRORS(LZ4F_GENERATE_ENUM)
              _LZ4F_dummy_error_enum_for_c89_never_used } LZ4F_errorCodes;
</b></pre><BR>
<a name="Chapter13" id="Chapter13"></a><h2>高度な圧縮操作</h2>
<pre></pre>

<pre><b>LZ4FLIB_STATIC_API size_t LZ4F_getBlockSize(LZ4F_blockSizeID_t blockSizeID);
</b><p>@return: @blockSizeIDに対応する最大ブロックサイズを、スカラー形式（size&#95;t）で返します。@blockSizeIDが不正な場合はエラーコードで、LZ4F&#95;isError()で検査できます。</p></pre><BR>

<pre><b>LZ4FLIB_STATIC_API size_t
LZ4F_uncompressedUpdate(LZ4F_cctx* cctx,
                        void* dstBuffer, size_t dstCapacity,
                  const void* srcBuffer, size_t srcSize,
                  const LZ4F_compressOptions_t* cOptPtr);
</b><p>LZ4F&#95;uncompressedUpdate()は、非圧縮ブロックとして保存するデータを追加するため、繰り返し呼べます。&#10;重要な規則: 圧縮を行わないので、dstCapacityは入力バッファー全体を保存できるほど、&#42;&#42;必ず&#42;&#42;大きくなければなりません。条件を守らないとLZ4F&#95;uncompressedUpdate()は失敗します（結果はerrorCode）。エラー後の状態は未定義（UB）になり、再初期化または解放しなければなりません。&#10;以前に圧縮ブロックを書いた場合は、非圧縮データの追加を続ける前に、まずバッファー内のデータをフラッシュします。&#10;この操作に対応するのは、LZ4F&#95;blockIndependentを使う場合だけです。&#10;&#96;cOptPtr&#96;は任意です。NULLを渡すと、すべてのオプションを既定値にします。&#10;@return: &#96;dstBuffer&#96;へ書いたバイト数。ゼロの場合もあり、入力データをバッファーに入れただけという意味です。失敗した場合はエラーコードです（LZ4F&#95;isError()で検査できます）。</p></pre><BR>

<a name="Chapter14" id="Chapter14"></a><h2>メモリ確保のカスタマイズ</h2>
<pre></pre>

<pre><b>typedef void* (*LZ4F_AllocFunction) (void* opaqueState, size_t size);
typedef void* (*LZ4F_CallocFunction) (void* opaqueState, size_t size);
typedef void  (*LZ4F_FreeFunction) (void* opaqueState, void* address);
typedef struct {
    LZ4F_AllocFunction customAlloc;
    LZ4F_CallocFunction customCalloc; </b>/* optional; when not defined, uses customAlloc + memset */<b>
    LZ4F_FreeFunction customFree;
    void* opaqueState;
} LZ4F_CustomMem;
static
#ifdef __GNUC__
__attribute__((__unused__))
#endif
LZ4F_CustomMem const LZ4F_defaultCMem = { NULL, NULL, NULL, NULL };  </b>/**&lt; this constant defers to stdlib's functions */<b>
</b><p>これらのプロトタイプで、独自の確保・解放関数を渡せます。&#10;状態生成時に、後述のLZ4F&#95;create&#42;&#95;advanced()を使ってLZ4F&#95;customMemを渡します。&#10;確保・解放処理はすべて、通常の&lt;stdlib.h&gt;の関数に代わり、この独自の関数で行います。</p></pre><BR>



