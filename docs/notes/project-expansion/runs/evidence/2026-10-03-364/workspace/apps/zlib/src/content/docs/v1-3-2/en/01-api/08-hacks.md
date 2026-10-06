---
title: "Various hacks, don’t look :)"
licenseSource: zlib-api
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>Unofficial formatting of the complete fixed zlib 1.3.2 originals. Original source: zlib.h. <a href="https://zlib.net/zlib-1.3.2.tar.gz">Official archive</a>; SHA-256: <code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>. Source file SHA-256: <code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>. Original notices remain intact. This presentation and its translations are unofficial.</p><p><a href="../../02-appendix/05-license/">Full original license</a>. Plain source references outside this manual, including deflate.c, zutil.c, test/example.c, test/minigzip.c, ChangeLog and contrib, can be found in that fixed official archive.</p></aside>
<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="184"><h2 id="section-184" data-source-role="section"> various hacks, don&#x27;t look :) </h2></div><div data-zlib-block="185"><pre><code>

</code></pre></div><div data-zlib-block="186"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="../03-basic/#deflateInit">deflateInit</a> and <a href="../03-basic/#inflateInit">inflateInit</a> are macros to allow checking the zlib version
 and the compiler&#x27;s view of <a href="../01-overview/#z_stream">z_stream</a>:
 </div></div><a id="inflateBackInit_" data-editorial="anchor"></a><a id="inflateInit2_" data-editorial="anchor"></a><a id="deflateInit2_" data-editorial="anchor"></a><a id="inflateInit_" data-editorial="anchor"></a><a id="deflateInit_" data-editorial="anchor"></a><h3 id="nav-187" data-editorial="navigation">deflateInit_</h3><div data-zlib-block="187"><pre><code>
ZEXTERN int ZEXPORT deflateInit_(z_streamp strm, int level,
                                 const char *version, int stream_size);
ZEXTERN int ZEXPORT inflateInit_(z_streamp strm,
                                 const char *version, int stream_size);
ZEXTERN int ZEXPORT deflateInit2_(z_streamp strm, int  level, int  method,
                                  int windowBits, int memLevel,
                                  int strategy, const char *version,
                                  int stream_size);
ZEXTERN int ZEXPORT inflateInit2_(z_streamp strm, int  windowBits,
                                  const char *version, int stream_size);
ZEXTERN int ZEXPORT inflateBackInit_(z_streamp strm, int windowBits,
                                     unsigned char FAR *window,
                                     const char *version,
                                     int stream_size);
#ifdef Z_PREFIX_SET
#  define z_deflateInit(strm, level) \
          deflateInit_((strm), (level), ZLIB_VERSION, (int)sizeof(z_stream))
#  define z_inflateInit(strm) \
          inflateInit_((strm), ZLIB_VERSION, (int)sizeof(z_stream))
#  define z_deflateInit2(strm, level, method, windowBits, memLevel, strategy) \
          deflateInit2_((strm),(level),(method),(windowBits),(memLevel),\
                        (strategy), ZLIB_VERSION, (int)sizeof(z_stream))
#  define z_inflateInit2(strm, windowBits) \
          inflateInit2_((strm), (windowBits), ZLIB_VERSION, \
                        (int)sizeof(z_stream))
#  define z_inflateBackInit(strm, windowBits, window) \
          inflateBackInit_((strm), (windowBits), (window), \
                           ZLIB_VERSION, (int)sizeof(z_stream))
#else
#  define deflateInit(strm, level) \
          deflateInit_((strm), (level), ZLIB_VERSION, (int)sizeof(z_stream))
#  define inflateInit(strm) \
          inflateInit_((strm), ZLIB_VERSION, (int)sizeof(z_stream))
#  define deflateInit2(strm, level, method, windowBits, memLevel, strategy) \
          deflateInit2_((strm),(level),(method),(windowBits),(memLevel),\
                        (strategy), ZLIB_VERSION, (int)sizeof(z_stream))
#  define inflateInit2(strm, windowBits) \
          inflateInit2_((strm), (windowBits), ZLIB_VERSION, \
                        (int)sizeof(z_stream))
#  define inflateBackInit(strm, windowBits, window) \
          inflateBackInit_((strm), (windowBits), (window), \
                           ZLIB_VERSION, (int)sizeof(z_stream))
#endif

#ifndef Z_SOLO

</code></pre></div><div data-zlib-block="188"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="../06-gzip/#gzgetc">gzgetc</a>() macro and its supporting function and exposed data structure.  Note
 that the real internal state is much larger than the exposed structure.
 This abbreviated structure exposes just enough for the <a href="../06-gzip/#gzgetc">gzgetc</a>() macro.  The
 user should not mess with these exposed elements, since their names or
 behavior could change in the future, perhaps even capriciously.  They can
 only be used by the <a href="../06-gzip/#gzgetc">gzgetc</a>() macro.  You have been warned.
 </div></div><a id="gzgetc_" data-editorial="anchor"></a><h3 id="nav-189" data-editorial="navigation">gzgetc_</h3><div data-zlib-block="189"><pre><code>
struct gzFile_s {
    unsigned have;
    unsigned char *next;
    z_off64_t pos;
};
ZEXTERN int ZEXPORT gzgetc_(gzFile file);       /* backward compatibility */
#ifdef Z_PREFIX_SET
#  undef z_gzgetc
#  define z_gzgetc(g) \
          ((g)-&gt;have ? ((g)-&gt;have--, (g)-&gt;pos++, *((g)-&gt;next)++) : (gzgetc)(g))
#else
#  define gzgetc(g) \
          ((g)-&gt;have ? ((g)-&gt;have--, (g)-&gt;pos++, *((g)-&gt;next)++) : (gzgetc)(g))
#endif

</code></pre></div><div data-zlib-block="190"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> provide 64-bit offset functions if _LARGEFILE64_SOURCE defined, and/or
 change the regular functions to 64 bits if _FILE_OFFSET_BITS is 64 (if
 both are true, the application gets the *64 functions, and the regular
 functions are changed to 64 bits) -- in case these are set on systems
 without large file support, _LFS64_LARGEFILE must also be true
 </div></div><a id="crc32_combine_gen64" data-editorial="anchor"></a><a id="crc32_combine64" data-editorial="anchor"></a><a id="adler32_combine64" data-editorial="anchor"></a><a id="gzoffset64" data-editorial="anchor"></a><a id="gztell64" data-editorial="anchor"></a><a id="gzseek64" data-editorial="anchor"></a><a id="gzopen64" data-editorial="anchor"></a><h3 id="nav-191" data-editorial="navigation">gzopen64</h3><div data-zlib-block="191"><pre><code>
#ifdef Z_LARGE64
   ZEXTERN gzFile ZEXPORT gzopen64(const char *, const char *);
   ZEXTERN z_off64_t ZEXPORT gzseek64(gzFile, z_off64_t, int);
   ZEXTERN z_off64_t ZEXPORT gztell64(gzFile);
   ZEXTERN z_off64_t ZEXPORT gzoffset64(gzFile);
   ZEXTERN uLong ZEXPORT adler32_combine64(uLong, uLong, z_off64_t);
   ZEXTERN uLong ZEXPORT crc32_combine64(uLong, uLong, z_off64_t);
   ZEXTERN uLong ZEXPORT crc32_combine_gen64(z_off64_t);
#endif

#if !defined(ZLIB_INTERNAL) &amp;&amp; defined(Z_WANT64)
#  ifdef Z_PREFIX_SET
#    define z_gzopen z_gzopen64
#    define z_gzseek z_gzseek64
#    define z_gztell z_gztell64
#    define z_gzoffset z_gzoffset64
#    define z_adler32_combine z_adler32_combine64
#    define z_crc32_combine z_crc32_combine64
#    define z_crc32_combine_gen z_crc32_combine_gen64
#  else
#    define gzopen gzopen64
#    define gzseek gzseek64
#    define gztell gztell64
#    define gzoffset gzoffset64
#    define adler32_combine adler32_combine64
#    define crc32_combine crc32_combine64
#    define crc32_combine_gen crc32_combine_gen64
#  endif
#  ifndef Z_LARGE64
     ZEXTERN gzFile ZEXPORT gzopen64(const char *, const char *);
     ZEXTERN z_off_t ZEXPORT gzseek64(gzFile, z_off_t, int);
     ZEXTERN z_off_t ZEXPORT gztell64(gzFile);
     ZEXTERN z_off_t ZEXPORT gzoffset64(gzFile);
     ZEXTERN uLong ZEXPORT adler32_combine64(uLong, uLong, z_off64_t);
     ZEXTERN uLong ZEXPORT crc32_combine64(uLong, uLong, z_off64_t);
     ZEXTERN uLong ZEXPORT crc32_combine_gen64(z_off64_t);
#  endif
#else
   ZEXTERN gzFile ZEXPORT gzopen(const char *, const char *);
   ZEXTERN z_off_t ZEXPORT gzseek(gzFile, z_off_t, int);
   ZEXTERN z_off_t ZEXPORT gztell(gzFile);
   ZEXTERN z_off_t ZEXPORT gzoffset(gzFile);
   ZEXTERN uLong ZEXPORT adler32_combine(uLong, uLong, z_off_t);
   ZEXTERN uLong ZEXPORT crc32_combine(uLong, uLong, z_off_t);
   ZEXTERN uLong ZEXPORT crc32_combine_gen(z_off_t);
#endif

#else /* Z_SOLO */

   ZEXTERN uLong ZEXPORT adler32_combine(uLong, uLong, z_off_t);
   ZEXTERN uLong ZEXPORT crc32_combine(uLong, uLong, z_off_t);
   ZEXTERN uLong ZEXPORT crc32_combine_gen(z_off_t);

#endif /* !Z_SOLO */

</code></pre></div></div>
