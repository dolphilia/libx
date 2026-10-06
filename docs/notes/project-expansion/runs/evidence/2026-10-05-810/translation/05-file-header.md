---
title: "LZ4: ファイルAPIヘッダー"
licenseSource: "lz4-1-10-0-lib-lz4file-h"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>400ed90bc74324abcf338d37235dd81aa431fd815c22db4b369b88c12b213115</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/lib/lz4file.h\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/lib/lz4file.h.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>独立したAPI説明コメントを日本語に訳し、Xiaomi Inc.の法的通知は英語全文を保持しました。宣言・コード中のコメントは変更していません。原説明のlz4fとLZ4_readOpenという表記を保持し、宣言の引数lz4fRead/lz4fWriteと関数LZ4F_readOpenとは区別しています。原ヘッダーには各関数の戻り値・エラー条件・FILE*の所有権に関する詳しい説明がありません。今回の翻訳でそれらを推測して追加していません。APIの実行検証は行っていません。</p>"
---


<pre class="lz4-source-comment">/*
   LZ4 file library
   Header File
   Copyright (C) 2022, Xiaomi Inc.
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

<pre><code>#if defined (__cplusplus)
extern &quot;C&quot; {
#endif

#ifndef LZ4FILE_H
#define LZ4FILE_H

#include &lt;stdio.h&gt;  /* FILE* */
#include &quot;lz4frame_static.h&quot;

typedef struct LZ4_readFile_s LZ4_readFile_t;
typedef struct LZ4_writeFile_s LZ4_writeFile_t;

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_readOpen():
読み取り用のlz4fileハンドルを設定します。
`lz4f`にlz4fileハンドルを設定します。
`fp`は、fopenで開いたlz4ファイルの戻り値でなければなりません。
*/
</pre>

<pre><code>LZ4FLIB_STATIC_API LZ4F_errorCode_t LZ4F_readOpen(LZ4_readFile_t** lz4fRead, FILE* fp);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_read():
lz4fileの内容をバッファーへ読み込みます。
`lz4f`は、最初にLZ4_readOpenで設定しなければなりません。
`buf`: データを読み込むバッファー。
`size`: データを読み込むバッファーのサイズ。
*/
</pre>

<pre><code>LZ4FLIB_STATIC_API size_t LZ4F_read(LZ4_readFile_t* lz4fRead, void* buf, size_t size);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_readClose():
lz4fileハンドルを閉じます。
`lz4f`は、最初にLZ4_readOpenで設定しなければなりません。
*/
</pre>

<pre><code>LZ4FLIB_STATIC_API LZ4F_errorCode_t LZ4F_readClose(LZ4_readFile_t* lz4fRead);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_writeOpen():
書き込み用のlz4fileハンドルを設定します。
`lz4f`にlz4fileハンドルを設定します。
`fp`は、fopenで開いたlz4ファイルの戻り値でなければなりません。
*/
</pre>

<pre><code>LZ4FLIB_STATIC_API LZ4F_errorCode_t LZ4F_writeOpen(LZ4_writeFile_t** lz4fWrite, FILE* fp, const LZ4F_preferences_t* prefsPtr);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_write():
バッファーをlz4fileへ書き込みます。
`lz4f`は、最初にLZ4F_writeOpenで設定しなければなりません。
`buf`: 書き込むデータのバッファー。
`size`: 書き込むデータのバッファーのサイズ。
*/
</pre>

<pre><code>LZ4FLIB_STATIC_API size_t LZ4F_write(LZ4_writeFile_t* lz4fWrite, const void* buf, size_t size);

</code></pre>

<pre class="lz4-source-comment">/*!
LZ4F_writeClose():
lz4fileハンドルを閉じます。
`lz4f`は、最初にLZ4F_writeOpenで設定しなければなりません。
*/
</pre>

<pre><code>LZ4FLIB_STATIC_API LZ4F_errorCode_t LZ4F_writeClose(LZ4_writeFile_t* lz4fWrite);

#endif /* LZ4FILE_H */

#if defined (__cplusplus)
}
#endif
</code></pre>