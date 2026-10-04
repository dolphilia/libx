---
title: "Overview and original notices"
licenseSource: zlib-api
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>Unofficial formatting of the complete fixed zlib 1.3.2 originals. Original source: zlib.h. <a href=\"https://zlib.net/zlib-1.3.2.tar.gz\">Official archive</a>; SHA-256: <code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>. Source file SHA-256: <code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>. Original notices remain intact. This presentation and its translations are unofficial.</p><p><a href=\"../../02-appendix/05-license/\">Full original license</a>. Plain source references outside this manual, including deflate.c, zutil.c, test/example.c, test/minigzip.c, ChangeLog and contrib, can be found in that fixed official archive.</p></aside>"}]
---


<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="0"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="./">zlib.h</a> -- interface of the &#x27;zlib&#x27; general purpose compression library
  version 1.3.2, February 17th, 2026

  Copyright (C) 1995-2026 Jean-loup Gailly and Mark Adler

  This software is provided &#x27;as-is&#x27;, without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.

  Jean-loup Gailly        Mark Adler
  jloup@gzip.org          madler@alumni.caltech.edu


  The data format used by the zlib library is described by RFCs (Request for
  Comments) 1950 to 1952 at <a href="https://datatracker.ietf.org/doc/html/rfc1950">https://datatracker.ietf.org/doc/html/rfc1950</a>
  (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
</div></div><div data-zlib-block="1"><pre><code>

#ifndef ZLIB_H
#define ZLIB_H

#ifdef ZLIB_BUILD
#  include &lt;zconf.h&gt;
#else
# include &quot;zconf.h&quot;
#endif

#ifdef __cplusplus
extern &quot;C&quot; {
#endif

#define ZLIB_VERSION &quot;1.3.2&quot;
#define ZLIB_VERNUM 0x1320
#define ZLIB_VER_MAJOR 1
#define ZLIB_VER_MINOR 3
#define ZLIB_VER_REVISION 2
#define ZLIB_VER_SUBREVISION 0

</code></pre></div><div data-zlib-block="2"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
    The &#x27;zlib&#x27; compression library provides in-memory compression and
  decompression functions, including integrity checks of the uncompressed data.
  This version of the library supports only one compression method (deflation)
  but other algorithms will be added later and will have the same stream
  interface.

    Compression can be done in a single step if the buffers are large enough,
  or can be done by repeated calls of the compression function.  In the latter
  case, the application must provide more input and/or consume the output
  (providing more output space) before each call.

    The compressed data format used by default by the in-memory functions is
  the zlib format, which is a zlib wrapper documented in RFC 1950, wrapped
  around a deflate stream, which is itself documented in RFC 1951.

    The library also supports reading and writing files in gzip (.gz) format
  with an interface similar to that of stdio using the functions that start
  with &quot;gz&quot;.  The gzip format is different from the zlib format.  gzip is a
  gzip wrapper, documented in RFC 1952, wrapped around a deflate stream.

    This library can optionally read and write gzip and raw deflate streams in
  memory as well.

    The zlib format was designed to be compact and fast for use in memory
  and on communications channels.  The gzip format was designed for single-
  file compression on file systems, has a larger header than zlib to maintain
  directory information, and uses a different, slower check method than zlib.

    The library does not install any signal handler.  The decoder checks
  the consistency of the compressed data, so the library should never crash
  even in the case of corrupted input.
</div></div><a id="free_func" data-editorial="anchor"></a><a id="alloc_func" data-editorial="anchor"></a><a id="z_stream" data-editorial="anchor"></a><div data-zlib-block="3"><pre><code>

typedef voidpf (*alloc_func)(voidpf opaque, uInt items, uInt size);
typedef void   (*free_func)(voidpf opaque, voidpf address);

struct internal_state;

typedef struct z_stream_s {
    z_const Bytef *next_in;     /* next input byte */
    uInt     avail_in;  /* number of bytes available at next_in */
    uLong    total_in;  /* total number of input bytes read so far */

    Bytef    *next_out; /* next output byte will go here */
    uInt     avail_out; /* remaining free space at next_out */
    uLong    total_out; /* total number of bytes output so far */

    z_const char *msg;  /* last error message, NULL if no error */
    struct internal_state FAR *state; /* not visible by applications */

    alloc_func zalloc;  /* used to allocate the internal state */
    free_func  zfree;   /* used to free the internal state */
    voidpf     opaque;  /* private data object passed to zalloc and zfree */

    int     data_type;  /* best guess about the data type: binary or text
                           for deflate, or the decoding state for inflate */
    uLong   adler;      /* Adler-32 or CRC-32 value of the uncompressed data */
    uLong   reserved;   /* reserved for future use */
} z_stream;

typedef z_stream FAR *z_streamp;

</code></pre></div><div data-zlib-block="4"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     gzip header information passed to and from zlib routines.  See RFC 1952
  for more details on the meanings of these fields.
</div></div><a id="gz_header" data-editorial="anchor"></a><div data-zlib-block="5"><pre><code>
typedef struct gz_header_s {
    int     text;       /* true if compressed data believed to be text */
    uLong   time;       /* modification time */
    int     xflags;     /* extra flags (not used when writing a gzip file) */
    int     os;         /* operating system */
    Bytef   *extra;     /* pointer to extra field or Z_NULL if none */
    uInt    extra_len;  /* extra field length (valid if extra != Z_NULL) */
    uInt    extra_max;  /* space at extra (only when reading header) */
    Bytef   *name;      /* pointer to zero-terminated file name or Z_NULL */
    uInt    name_max;   /* space at name (only when reading header) */
    Bytef   *comment;   /* pointer to zero-terminated comment or Z_NULL */
    uInt    comm_max;   /* space at comment (only when reading header) */
    int     hcrc;       /* true if there was or will be a header crc */
    int     done;       /* true when done reading gzip header (not used
                           when writing a gzip file) */
} gz_header;

typedef gz_header FAR *gz_headerp;

</code></pre></div><div data-zlib-block="6"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     The application must update next_in and avail_in when avail_in has dropped
   to zero.  It must update next_out and avail_out when avail_out has dropped
   to zero.  The application must initialize zalloc, zfree and opaque before
   calling the init function.  All other fields are set by the compression
   library and must not be updated by the application.

     The opaque value provided by the application will be passed as the first
   parameter for calls of zalloc and zfree.  This can be useful for custom
   memory management.  The compression library attaches no meaning to the
   opaque value.

     zalloc must return Z_NULL if there is not enough memory for the object.
   If zlib is used in a multi-threaded application, zalloc and zfree must be
   thread safe.  In that case, zlib is thread-safe.  When zalloc and zfree are
   Z_NULL on entry to the initialization function, they are set to internal
   routines that use the standard library functions malloc() and free().

     On 16-bit systems, the functions zalloc and zfree must be able to allocate
   exactly 65536 bytes, but will not be required to allocate more than this if
   the symbol MAXSEG_64K is defined (see <a href="../../02-appendix/01-zconf/">zconf.h</a>).  WARNING: On MSDOS, pointers
   returned by zalloc for objects of exactly 65536 bytes *must* have their
   offset normalized to zero.  The default allocation function provided by this
   library ensures this (see zutil.c).  To reduce memory requirements and avoid
   any allocation of 64K objects, at the expense of compression ratio, compile
   the library with -DMAX_WBITS=14 (see <a href="../../02-appendix/01-zconf/">zconf.h</a>).

     The fields total_in and total_out can be used for statistics or progress
   reports.  After compression, total_in holds the total size of the
   uncompressed data and may be saved for use by the decompressor (particularly
   if the decompressor wants to decompress everything in a single step).
</div></div><div data-zlib-block="7"><pre><code>

                        </code></pre></div></div>
