---
title: "LZ4: lib/lz4file.h"
licenseSource: "lz4-1-10-0-lib-lz4file-h"
documentContext:
  - kind: source
    html: "<p>Unofficial Libx presentation of the fixed LZ4 1.10.0 English original. Formatting and link mapping: 2026-10-05. Original commit: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>; SHA-256: <code>400ed90bc74324abcf338d37235dd81aa431fd815c22db4b369b88c12b213115</code>. <a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/lib/lz4file.h\">Fixed upstream source</a>; <a href=\"/docs/lz4/source/v1-10-0/originals/lib/lz4file.h.txt\">Unmodified original and its notices</a>; <a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">Complete fixed upstream archive</a>; <a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">Upstream license allocation notice</a>. Original copyright, permission, and warranty notices are retained. Japanese translations are unofficial.</p><p>Presentation changes: complete standalone C block comments exposed as prose pre; all other declarations/code including inline comments retained; literal HTML escaped; exact ordered source spans. No technical prose has been silently corrected or summarized.</p>"
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

<pre class="lz4-source-comment">/*! LZ4F_readOpen() :
 * Set read lz4file handle.
 * `lz4f` will set a lz4file handle.
 * `fp` must be the return value of the lz4 file opened by fopen.
 */
</pre>

<pre><code>LZ4FLIB_STATIC_API LZ4F_errorCode_t LZ4F_readOpen(LZ4_readFile_t** lz4fRead, FILE* fp);

</code></pre>

<pre class="lz4-source-comment">/*! LZ4F_read() :
 * Read lz4file content to buffer.
 * `lz4f` must use LZ4_readOpen to set first.
 * `buf` read data buffer.
 * `size` read data buffer size.
 */
</pre>

<pre><code>LZ4FLIB_STATIC_API size_t LZ4F_read(LZ4_readFile_t* lz4fRead, void* buf, size_t size);

</code></pre>

<pre class="lz4-source-comment">/*! LZ4F_readClose() :
 * Close lz4file handle.
 * `lz4f` must use LZ4_readOpen to set first.
 */
</pre>

<pre><code>LZ4FLIB_STATIC_API LZ4F_errorCode_t LZ4F_readClose(LZ4_readFile_t* lz4fRead);

</code></pre>

<pre class="lz4-source-comment">/*! LZ4F_writeOpen() :
 * Set write lz4file handle.
 * `lz4f` will set a lz4file handle.
 * `fp` must be the return value of the lz4 file opened by fopen.
 */
</pre>

<pre><code>LZ4FLIB_STATIC_API LZ4F_errorCode_t LZ4F_writeOpen(LZ4_writeFile_t** lz4fWrite, FILE* fp, const LZ4F_preferences_t* prefsPtr);

</code></pre>

<pre class="lz4-source-comment">/*! LZ4F_write() :
 * Write buffer to lz4file.
 * `lz4f` must use LZ4F_writeOpen to set first.
 * `buf` write data buffer.
 * `size` write data buffer size.
 */
</pre>

<pre><code>LZ4FLIB_STATIC_API size_t LZ4F_write(LZ4_writeFile_t* lz4fWrite, const void* buf, size_t size);

</code></pre>

<pre class="lz4-source-comment">/*! LZ4F_writeClose() :
 * Close lz4file handle.
 * `lz4f` must use LZ4F_writeOpen to set first.
 */
</pre>

<pre><code>LZ4FLIB_STATIC_API LZ4F_errorCode_t LZ4F_writeClose(LZ4_writeFile_t* lz4fWrite);

#endif /* LZ4FILE_H */

#if defined (__cplusplus)
}
#endif
</code></pre>