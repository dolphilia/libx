---
title: "LZ4: 旧静的フレームヘッダー"
licenseSource: "lz4-1-10-0-lib-lz4frame-static-h"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>31ab72a6e97e4fa0bedd4420d24a3f1f8024cbfa1d8ffad88c87cbb4e04f769d</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/lib/lz4frame_static.h\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/lib/lz4frame_static.h.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>移行説明のコメントを日本語に訳し、法的通知は英語全文を保持しました。ヘッダーガード・LZ4F_STATIC_LINKING_ONLYの定義・lz4frame.hの組み込みを原文のまま保持しています。直接組み込みの推奨は固定原著の記述です。今回、利用側コードの移行やAPI実行検証は行っていません。</p>"
---


<pre class="lz4-source-comment">/*
   LZ4 auto-framing library
   Header File for static linking only
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
#ifndef LZ4FRAME_STATIC_H_0398209384
#define LZ4FRAME_STATIC_H_0398209384

</code></pre>

<pre class="lz4-source-comment">/*!
以前ここで行っていた宣言は、LZ4F_STATIC_LINKING_ONLYマクロで保護し、lz4frame.hへ統合しました。今後は、そのヘッダーを直接組み込むだけにすることを推奨します。
*/
</pre>

<pre><code>
#define LZ4F_STATIC_LINKING_ONLY
#include &quot;lz4frame.h&quot;

#endif /* LZ4FRAME_STATIC_H_0398209384 */
</code></pre>