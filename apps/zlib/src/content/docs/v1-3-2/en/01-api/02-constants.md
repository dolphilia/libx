---
title: "Constants"
licenseSource: zlib-api
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>Unofficial formatting of the complete fixed zlib 1.3.2 originals. Original source: zlib.h. <a href=\"https://zlib.net/zlib-1.3.2.tar.gz\">Official archive</a>; SHA-256: <code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>. Source file SHA-256: <code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>. Original notices remain intact. This presentation and its translations are unofficial.</p><p><a href=\"../../02-appendix/05-license/\">Full original license</a>. Plain source references outside this manual, including deflate.c, zutil.c, test/example.c, test/minigzip.c, ChangeLog and contrib, can be found in that fixed official archive.</p></aside>"}]
---


<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="8"><h2 id="section-8" data-source-role="section"> constants </h2></div><div data-zlib-block="9"><pre><code>

#define Z_NO_FLUSH      0
#define Z_PARTIAL_FLUSH 1
#define Z_SYNC_FLUSH    2
#define Z_FULL_FLUSH    3
#define Z_FINISH        4
#define Z_BLOCK         5
#define Z_TREES         6
</code></pre></div><div data-zlib-block="10"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> Allowed flush values; see <a href="../03-basic/#deflate">deflate</a>() and <a href="../03-basic/#inflate">inflate</a>() below for details </div></div><div data-zlib-block="11"><pre><code>

#define Z_OK            0
#define Z_STREAM_END    1
#define Z_NEED_DICT     2
#define Z_ERRNO        (-1)
#define Z_STREAM_ERROR (-2)
#define Z_DATA_ERROR   (-3)
#define Z_MEM_ERROR    (-4)
#define Z_BUF_ERROR    (-5)
#define Z_VERSION_ERROR (-6)
</code></pre></div><div data-zlib-block="12"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> Return codes for the compression/decompression functions. Negative values
 are errors, positive values are used for special but normal events.
 </div></div><div data-zlib-block="13"><pre><code>

#define Z_NO_COMPRESSION         0
#define Z_BEST_SPEED             1
#define Z_BEST_COMPRESSION       9
#define Z_DEFAULT_COMPRESSION  (-1)
</code></pre></div><div data-zlib-block="14"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> compression levels </div></div><div data-zlib-block="15"><pre><code>

#define Z_FILTERED            1
#define Z_HUFFMAN_ONLY        2
#define Z_RLE                 3
#define Z_FIXED               4
#define Z_DEFAULT_STRATEGY    0
</code></pre></div><div data-zlib-block="16"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> compression strategy; see <a href="../04-advanced/#deflateInit2">deflateInit2</a>() below for details </div></div><div data-zlib-block="17"><pre><code>

#define Z_BINARY   0
#define Z_TEXT     1
#define Z_ASCII    Z_TEXT   /* for compatibility with 1.2.2 and earlier */
#define Z_UNKNOWN  2
</code></pre></div><div data-zlib-block="18"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> Possible values of the data_type field for <a href="../03-basic/#deflate">deflate</a>() </div></div><div data-zlib-block="19"><pre><code>

#define Z_DEFLATED   8
</code></pre></div><div data-zlib-block="20"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> The deflate compression method (the only one supported in this version) </div></div><div data-zlib-block="21"><pre><code>

#define Z_NULL  0  /* for initializing zalloc, zfree, opaque */

#define zlib_version zlibVersion()
</code></pre></div><div data-zlib-block="22"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> for compatibility with versions &lt; 1.0.2 </div></div><div data-zlib-block="23"><pre><code>


                        </code></pre></div></div>
