---
title: "Checksum functions"
licenseSource: zlib-api
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>Unofficial formatting of the complete fixed zlib 1.3.2 originals. Original source: zlib.h. <a href=\"https://zlib.net/zlib-1.3.2.tar.gz\">Official archive</a>; SHA-256: <code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>. Source file SHA-256: <code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>. Original notices remain intact. This presentation and its translations are unofficial.</p><p><a href=\"../../02-appendix/05-license/\">Full original license</a>. Plain source references outside this manual, including deflate.c, zutil.c, test/example.c, test/minigzip.c, ChangeLog and contrib, can be found in that fixed official archive.</p></aside>"}]
---


<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="164"><h2 id="section-164" data-source-role="section"> checksum functions </h2></div><div data-zlib-block="165"><pre><code>

</code></pre></div><div data-zlib-block="166"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     These functions are not related to compression but are exported
   anyway because they might be useful in applications using the compression
   library.
</div></div><a id="adler32" data-editorial="anchor"></a><h3 id="nav-167" data-editorial="navigation">adler32</h3><div data-zlib-block="167"><pre><code>

ZEXTERN uLong ZEXPORT adler32(uLong adler, const Bytef *buf, uInt len);
</code></pre></div><div data-zlib-block="168"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Update a running Adler-32 checksum with the bytes buf[0..len-1] and
   return the updated checksum. An Adler-32 value is in the range of a 32-bit
   unsigned integer. If buf is Z_NULL, this function returns the required
   initial value for the checksum.

     An Adler-32 checksum is almost as reliable as a CRC-32 but can be computed
   much faster.

   Usage example:
</div><pre><code>
     uLong adler = adler32(0L, Z_NULL, 0);

     while (read_buffer(buffer, length) != EOF) {
       adler = adler32(adler, buffer, length);
     }
     if (adler != original_adler) error();
</code></pre></div><a id="adler32_z" data-editorial="anchor"></a><h3 id="nav-169" data-editorial="navigation">adler32_z</h3><div data-zlib-block="169"><pre><code>

ZEXTERN uLong ZEXPORT adler32_z(uLong adler, const Bytef *buf,
                                z_size_t len);
</code></pre></div><div data-zlib-block="170"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Same as <a href="./#adler32">adler32</a>(), but with a size_t length.  Note that a long is 32 bits
   on Windows.
</div></div><div data-zlib-block="171"><pre><code>

</code></pre></div><a id="adler32_combine" data-editorial="anchor"></a><h3 id="nav-172" data-editorial="navigation">adler32_combine</h3><div data-zlib-block="172"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN uLong ZEXPORT adler32_combine(uLong adler1, uLong adler2,
                                      z_off_t len2);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Combine two Adler-32 checksums into one.  For two sequences of bytes, seq1
   and seq2 with lengths len1 and len2, Adler-32 checksums were calculated for
   each, adler1 and adler2.  <a href="./#adler32_combine">adler32_combine</a>() returns the Adler-32 checksum of
   seq1 and seq2 concatenated, requiring only adler1, adler2, and len2.  Note
   that the z_off_t type (like off_t) is a signed integer.  If len2 is
   negative, the result has no meaning or utility.
</div></div><a id="crc32" data-editorial="anchor"></a><h3 id="nav-173" data-editorial="navigation">crc32</h3><div data-zlib-block="173"><pre><code>

ZEXTERN uLong ZEXPORT crc32(uLong crc, const Bytef *buf, uInt len);
</code></pre></div><div data-zlib-block="174"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Update a running CRC-32 with the bytes buf[0..len-1] and return the
   updated CRC-32. A CRC-32 value is in the range of a 32-bit unsigned integer.
   If buf is Z_NULL, this function returns the required initial value for the
   crc. Pre- and post-conditioning (one&#x27;s complement) is performed within this
   function so it shouldn&#x27;t be done by the application.

   Usage example:
</div><pre><code>
     uLong crc = crc32(0L, Z_NULL, 0);

     while (read_buffer(buffer, length) != EOF) {
       crc = crc32(crc, buffer, length);
     }
     if (crc != original_crc) error();
</code></pre></div><a id="crc32_z" data-editorial="anchor"></a><h3 id="nav-175" data-editorial="navigation">crc32_z</h3><div data-zlib-block="175"><pre><code>

ZEXTERN uLong ZEXPORT crc32_z(uLong crc, const Bytef *buf,
                              z_size_t len);
</code></pre></div><div data-zlib-block="176"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Same as <a href="./#crc32">crc32</a>(), but with a size_t length.  Note that a long is 32 bits on
   Windows.
</div></div><div data-zlib-block="177"><pre><code>

</code></pre></div><a id="crc32_combine" data-editorial="anchor"></a><h3 id="nav-178" data-editorial="navigation">crc32_combine</h3><div data-zlib-block="178"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN uLong ZEXPORT crc32_combine(uLong crc1, uLong crc2, z_off_t len2);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Combine two CRC-32 check values into one.  For two sequences of bytes,
   seq1 and seq2 with lengths len1 and len2, CRC-32 check values were
   calculated for each, crc1 and crc2.  <a href="./#crc32_combine">crc32_combine</a>() returns the CRC-32
   check value of seq1 and seq2 concatenated, requiring only crc1, crc2, and
   len2. len2 must be non-negative, otherwise zero is returned.
</div></div><div data-zlib-block="179"><pre><code>

</code></pre></div><a id="crc32_combine_gen" data-editorial="anchor"></a><h3 id="nav-180" data-editorial="navigation">crc32_combine_gen</h3><div data-zlib-block="180"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN uLong ZEXPORT crc32_combine_gen(z_off_t len2);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Return the operator corresponding to length len2, to be used with
   <a href="./#crc32_combine_op">crc32_combine_op</a>(). len2 must be non-negative, otherwise zero is returned.
</div></div><a id="crc32_combine_op" data-editorial="anchor"></a><h3 id="nav-181" data-editorial="navigation">crc32_combine_op</h3><div data-zlib-block="181"><pre><code>

ZEXTERN uLong ZEXPORT crc32_combine_op(uLong crc1, uLong crc2, uLong op);
</code></pre></div><div data-zlib-block="182"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Give the same result as <a href="./#crc32_combine">crc32_combine</a>(), using op in place of len2. op is
   is generated from len2 by <a href="./#crc32_combine_gen">crc32_combine_gen</a>(). This will be faster than
   <a href="./#crc32_combine">crc32_combine</a>() if the generated op is used more than once.
</div></div><div data-zlib-block="183"><pre><code>


                        </code></pre></div></div>
