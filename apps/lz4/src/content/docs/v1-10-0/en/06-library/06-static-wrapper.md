---
title: "LZ4: lib/lz4frame_static.h"
licenseSource: "lz4-1-10-0-lib-lz4frame-static-h"
documentContext:
  - kind: source
    html: "<p>Unofficial Libx presentation of the fixed LZ4 1.10.0 English original. Formatting and link mapping: 2026-10-05. Original commit: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>; SHA-256: <code>31ab72a6e97e4fa0bedd4420d24a3f1f8024cbfa1d8ffad88c87cbb4e04f769d</code>. <a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/lib/lz4frame_static.h\">Fixed upstream source</a>; <a href=\"/docs/lz4/source/v1-10-0/originals/lib/lz4frame_static.h.txt\">Unmodified original and its notices</a>; <a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">Complete fixed upstream archive</a>; <a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">Upstream license allocation notice</a>. Original copyright, permission, and warranty notices are retained. Japanese translations are unofficial.</p><p>Presentation changes: complete standalone C block comments exposed as prose pre; all other declarations/code including inline comments retained; literal HTML escaped; exact ordered source spans. No technical prose has been silently corrected or summarized.</p>"
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

<pre class="lz4-source-comment">/* The declarations that formerly were made here have been merged into
 * lz4frame.h, protected by the LZ4F_STATIC_LINKING_ONLY macro. Going forward,
 * it is recommended to simply include that header directly.
 */
</pre>

<pre><code>
#define LZ4F_STATIC_LINKING_ONLY
#include &quot;lz4frame.h&quot;

#endif /* LZ4FRAME_STATIC_H_0398209384 */
</code></pre>