---
title: "Utility functions"
licenseSource: zlib-api
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>Unofficial formatting of the complete fixed zlib 1.3.2 originals. Original source: zlib.h. <a href="https://zlib.net/zlib-1.3.2.tar.gz">Official archive</a>; SHA-256: <code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>. Source file SHA-256: <code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>. Original notices remain intact. Japanese translations are unofficial.</p><p><a href="../../02-appendix/05-license/">Full original license</a>. Plain source references outside this manual, including deflate.c, zutil.c, test/example.c, test/minigzip.c, ChangeLog and contrib, can be found in that fixed official archive. They are not fabricated local routes.</p></aside>
<div class="zlib-document" style="overflow-wrap:anywhere"><h2 id="section-96" data-editorial="navigation">utility functions</h2><div data-zlib-block="96"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> utility functions </div></div><div data-zlib-block="97"><pre><code>

</code></pre></div><div data-zlib-block="98"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     The following utility functions are implemented on top of the basic
   stream-oriented functions.  To simplify the interface, some default options
   are assumed (compression level and memory usage, standard memory allocation
   functions).  The source code of these utility functions can be modified if
   you need special options.  The _z versions of the functions use the size_t
   type for lengths.  Note that a long is 32 bits on Windows.
</div></div><a id="compress_z" data-editorial="anchor"></a><a id="compress" data-editorial="anchor"></a><h3 id="nav-99" data-editorial="navigation">compress</h3><div data-zlib-block="99"><pre><code>

ZEXTERN int ZEXPORT compress(Bytef *dest, uLongf *destLen,
                             const Bytef *source, uLong sourceLen);
ZEXTERN int ZEXPORT compress_z(Bytef *dest, z_size_t *destLen,
                               const Bytef *source, z_size_t sourceLen);
</code></pre></div><div data-zlib-block="100"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Compresses the source buffer into the destination buffer.  sourceLen is
   the byte length of the source buffer.  Upon entry, destLen is the total size
   of the destination buffer, which must be at least the value returned by
   <a href="./#compressBound">compressBound</a>(sourceLen).  Upon exit, destLen is the actual size of the
   compressed data.  <a href="./#compress">compress</a>() is equivalent to <a href="./#compress2">compress2</a>() with a level
   parameter of Z_DEFAULT_COMPRESSION.

     <a href="./#compress">compress</a> returns Z_OK if success, Z_MEM_ERROR if there was not
   enough memory, Z_BUF_ERROR if there was not enough room in the output
   buffer.
</div></div><a id="compress2_z" data-editorial="anchor"></a><a id="compress2" data-editorial="anchor"></a><h3 id="nav-101" data-editorial="navigation">compress2</h3><div data-zlib-block="101"><pre><code>

ZEXTERN int ZEXPORT compress2(Bytef *dest, uLongf *destLen,
                              const Bytef *source, uLong sourceLen,
                              int level);
ZEXTERN int ZEXPORT compress2_z(Bytef *dest, z_size_t *destLen,
                                const Bytef *source, z_size_t sourceLen,
                                int level);
</code></pre></div><div data-zlib-block="102"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Compresses the source buffer into the destination buffer.  The level
   parameter has the same meaning as in <a href="../03-basic/#deflateInit">deflateInit</a>.  sourceLen is the byte
   length of the source buffer.  Upon entry, destLen is the total size of the
   destination buffer, which must be at least the value returned by
   <a href="./#compressBound">compressBound</a>(sourceLen).  Upon exit, destLen is the actual size of the
   compressed data.

     <a href="./#compress2">compress2</a> returns Z_OK if success, Z_MEM_ERROR if there was not enough
   memory, Z_BUF_ERROR if there was not enough room in the output buffer,
   Z_STREAM_ERROR if the level parameter is invalid.
</div></div><a id="compressBound_z" data-editorial="anchor"></a><a id="compressBound" data-editorial="anchor"></a><h3 id="nav-103" data-editorial="navigation">compressBound</h3><div data-zlib-block="103"><pre><code>

ZEXTERN uLong ZEXPORT compressBound(uLong sourceLen);
ZEXTERN z_size_t ZEXPORT compressBound_z(z_size_t sourceLen);
</code></pre></div><div data-zlib-block="104"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="./#compressBound">compressBound</a>() returns an upper bound on the compressed size after
   <a href="./#compress">compress</a>() or <a href="./#compress2">compress2</a>() on sourceLen bytes.  It would be used before a
   <a href="./#compress">compress</a>() or <a href="./#compress2">compress2</a>() call to allocate the destination buffer.
</div></div><a id="uncompress_z" data-editorial="anchor"></a><a id="uncompress" data-editorial="anchor"></a><h3 id="nav-105" data-editorial="navigation">uncompress</h3><div data-zlib-block="105"><pre><code>

ZEXTERN int ZEXPORT uncompress(Bytef *dest, uLongf *destLen,
                               const Bytef *source, uLong sourceLen);
ZEXTERN int ZEXPORT uncompress_z(Bytef *dest, z_size_t *destLen,
                                 const Bytef *source, z_size_t sourceLen);
</code></pre></div><div data-zlib-block="106"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Decompresses the source buffer into the destination buffer.  sourceLen is
   the byte length of the source buffer.  On entry, *destLen is the total size
   of the destination buffer, which must be large enough to hold the entire
   uncompressed data.  (The size of the uncompressed data must have been saved
   previously by the compressor and transmitted to the decompressor by some
   mechanism outside the scope of this compression library.)  On exit, *destLen
   is the actual size of the uncompressed data.

     <a href="./#uncompress">uncompress</a> returns Z_OK if success, Z_MEM_ERROR if there was not
   enough memory, Z_BUF_ERROR if there was not enough room in the output
   buffer, or Z_DATA_ERROR if the input data was corrupted or incomplete.  In
   the case where there is not enough room, <a href="./#uncompress">uncompress</a>() will fill the output
   buffer with the uncompressed data up to that point.
</div></div><a id="uncompress2_z" data-editorial="anchor"></a><a id="uncompress2" data-editorial="anchor"></a><h3 id="nav-107" data-editorial="navigation">uncompress2</h3><div data-zlib-block="107"><pre><code>

ZEXTERN int ZEXPORT uncompress2(Bytef *dest, uLongf *destLen,
                                const Bytef *source, uLong *sourceLen);
ZEXTERN int ZEXPORT uncompress2_z(Bytef *dest, z_size_t *destLen,
                                  const Bytef *source, z_size_t *sourceLen);
</code></pre></div><div data-zlib-block="108"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Same as uncompress, except that sourceLen is a pointer, where the
   length of the source is *sourceLen.  On return, *sourceLen is the number of
   source bytes consumed.
</div></div><div data-zlib-block="109"><pre><code>

                        </code></pre></div></div>
