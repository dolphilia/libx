---
title: "zlib 1.3.2 API structure trial"
licenseSource: zlib-trial-api
toc:
  maxLevel: 6
---

<p>Local unpublished conversion trial. Navigation headings are editorial; all source text is retained in source order.</p>

<div class="zlib-trial-document" style="overflow-wrap:anywhere"><div data-zlib-block="0"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="../api/">zlib.h</a> -- interface of the &#x27;zlib&#x27; general purpose compression library
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
</div></div><a id="z_stream" data-editorial="anchor"></a><a id="alloc_func" data-editorial="anchor"></a><a id="free_func" data-editorial="anchor"></a><div data-zlib-block="3"><pre><code>

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
   the symbol MAXSEG_64K is defined (see <a href="../zconf/">zconf.h</a>).  WARNING: On MSDOS, pointers
   returned by zalloc for objects of exactly 65536 bytes *must* have their
   offset normalized to zero.  The default allocation function provided by this
   library ensures this (see zutil.c).  To reduce memory requirements and avoid
   any allocation of 64K objects, at the expense of compression ratio, compile
   the library with -DMAX_WBITS=14 (see <a href="../zconf/">zconf.h</a>).

     The fields total_in and total_out can be used for statistics or progress
   reports.  After compression, total_in holds the total size of the
   uncompressed data and may be saved for use by the decompressor (particularly
   if the decompressor wants to decompress everything in a single step).
</div></div><div data-zlib-block="7"><pre><code>

                        </code></pre></div><h2 id="section-8" data-editorial="navigation">constants</h2><div data-zlib-block="8"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> constants </div></div><div data-zlib-block="9"><pre><code>

#define Z_NO_FLUSH      0
#define Z_PARTIAL_FLUSH 1
#define Z_SYNC_FLUSH    2
#define Z_FULL_FLUSH    3
#define Z_FINISH        4
#define Z_BLOCK         5
#define Z_TREES         6
</code></pre></div><div data-zlib-block="10"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> Allowed flush values; see <a href="../api/#deflate">deflate</a>() and <a href="../api/#inflate">inflate</a>() below for details </div></div><div data-zlib-block="11"><pre><code>

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
</code></pre></div><div data-zlib-block="16"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> compression strategy; see <a href="../api/#deflateInit2">deflateInit2</a>() below for details </div></div><div data-zlib-block="17"><pre><code>

#define Z_BINARY   0
#define Z_TEXT     1
#define Z_ASCII    Z_TEXT   /* for compatibility with 1.2.2 and earlier */
#define Z_UNKNOWN  2
</code></pre></div><div data-zlib-block="18"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> Possible values of the data_type field for <a href="../api/#deflate">deflate</a>() </div></div><div data-zlib-block="19"><pre><code>

#define Z_DEFLATED   8
</code></pre></div><div data-zlib-block="20"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> The deflate compression method (the only one supported in this version) </div></div><div data-zlib-block="21"><pre><code>

#define Z_NULL  0  /* for initializing zalloc, zfree, opaque */

#define zlib_version zlibVersion()
</code></pre></div><div data-zlib-block="22"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> for compatibility with versions &lt; 1.0.2 </div></div><div data-zlib-block="23"><pre><code>


                        </code></pre></div><h2 id="section-24" data-editorial="navigation">basic functions</h2><div data-zlib-block="24"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> basic functions </div></div><h3 id="nav-25" data-editorial="navigation">zlibVersion</h3><a id="zlibVersion" data-editorial="anchor"></a><div data-zlib-block="25"><pre><code>

ZEXTERN const char * ZEXPORT zlibVersion(void);
</code></pre></div><div data-zlib-block="26"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> The application can compare <a href="../api/#zlibVersion">zlibVersion</a> and ZLIB_VERSION for consistency.
   If the first character differs, the library code actually used is not
   compatible with the <a href="../api/">zlib.h</a> header file used by the application.  This check
   is automatically made by <a href="../api/#deflateInit">deflateInit</a> and <a href="../api/#inflateInit">inflateInit</a>.
 </div></div><div data-zlib-block="27"><pre><code>

</code></pre></div><h3 id="nav-28" data-editorial="navigation">deflateInit</h3><a id="deflateInit" data-editorial="anchor"></a><div data-zlib-block="28"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN int ZEXPORT deflateInit(z_streamp strm, int level);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Initializes the internal stream state for compression.  The fields
   zalloc, zfree and opaque must be initialized before by the caller.  If
   zalloc and zfree are set to Z_NULL, <a href="../api/#deflateInit">deflateInit</a> updates them to use default
   allocation functions.  total_in, total_out, adler, and msg are initialized.

     The compression level must be Z_DEFAULT_COMPRESSION, or between 0 and 9:
   1 gives best speed, 9 gives best compression, 0 gives no compression at all
   (the input data is simply copied a block at a time).  Z_DEFAULT_COMPRESSION
   requests a default compromise between speed and compression (currently
   equivalent to level 6).

     <a href="../api/#deflateInit">deflateInit</a> returns Z_OK if success, Z_MEM_ERROR if there was not enough
   memory, Z_STREAM_ERROR if level is not a valid compression level, or
   Z_VERSION_ERROR if the zlib library version (zlib_version) is incompatible
   with the version assumed by the caller (ZLIB_VERSION).  msg is set to null
   if there is no error message.  <a href="../api/#deflateInit">deflateInit</a> does not perform any compression:
   this will be done by <a href="../api/#deflate">deflate</a>().
</div></div><h3 id="nav-29" data-editorial="navigation">deflate</h3><a id="deflate" data-editorial="anchor"></a><div data-zlib-block="29"><pre><code>


ZEXTERN int ZEXPORT deflate(z_streamp strm, int flush);
</code></pre></div><div data-zlib-block="30"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
    deflate compresses as much data as possible, and stops when the input
  buffer becomes empty or the output buffer becomes full.  It may introduce
  some output latency (reading input without producing any output) except when
  forced to flush.

    The detailed semantics are as follows.  deflate performs one or both of the
  following actions:

  - Compress more input starting at next_in and update next_in and avail_in
    accordingly.  If not all input can be processed (because there is not
    enough room in the output buffer), next_in and avail_in are updated and
    processing will resume at this point for the next call of <a href="../api/#deflate">deflate</a>().

  - Generate more output starting at next_out and update next_out and avail_out
    accordingly.  This action is forced if the parameter flush is non zero.
    Forcing flush frequently degrades the compression ratio, so this parameter
    should be set only when necessary.  Some output may be provided even if
    flush is zero.

    Before the call of <a href="../api/#deflate">deflate</a>(), the application should ensure that at least
  one of the actions is possible, by providing more input and/or consuming more
  output, and updating avail_in or avail_out accordingly; avail_out should
  never be zero before the call.  The application can consume the compressed
  output when it wants, for example when the output buffer is full (avail_out
  == 0), or after each call of <a href="../api/#deflate">deflate</a>().  If <a href="../api/#deflate">deflate</a> returns Z_OK and with
  zero avail_out, it must be called again after making room in the output
  buffer because there might be more output pending. See <a href="../api/#deflatePending">deflatePending</a>(),
  which can be used if desired to determine whether or not there is more output
  in that case.

    Normally the parameter flush is set to Z_NO_FLUSH, which allows deflate to
  decide how much data to accumulate before producing output, in order to
  maximize compression.

    If the parameter flush is set to Z_SYNC_FLUSH, all pending output is
  flushed to the output buffer and the output is aligned on a byte boundary, so
  that the decompressor can get all input data available so far.  (In
  particular avail_in is zero after the call if enough output space has been
  provided before the call.) Flushing may degrade compression for some
  compression algorithms and so it should be used only when necessary.  This
  completes the current deflate block and follows it with an empty stored block
  that is three bits plus filler bits to the next byte, followed by four bytes
  (00 00 ff ff).

    If flush is set to Z_PARTIAL_FLUSH, all pending output is flushed to the
  output buffer, but the output is not aligned to a byte boundary.  All of the
  input data so far will be available to the decompressor, as for Z_SYNC_FLUSH.
  This completes the current deflate block and follows it with an empty fixed
  codes block that is 10 bits long.  This assures that enough bytes are output
  in order for the decompressor to finish the block before the empty fixed
  codes block.

    If flush is set to Z_BLOCK, a deflate block is completed and emitted, as
  for Z_SYNC_FLUSH, but the output is not aligned on a byte boundary, and up to
  seven bits of the current block are held to be written as the next byte after
  the next deflate block is completed.  In this case, the decompressor may not
  be provided enough bits at this point in order to complete decompression of
  the data provided so far to the compressor.  It may need to wait for the next
  block to be emitted.  This is for advanced applications that need to control
  the emission of deflate blocks.

    If flush is set to Z_FULL_FLUSH, all output is flushed as with
  Z_SYNC_FLUSH, and the compression state is reset so that decompression can
  restart from this point if previous compressed data has been damaged or if
  random access is desired.  Using Z_FULL_FLUSH too often can seriously degrade
  compression.

    If <a href="../api/#deflate">deflate</a> returns with avail_out == 0, this function must be called again
  with the same value of the flush parameter and more output space (updated
  avail_out), until the flush is complete (<a href="../api/#deflate">deflate</a> returns with non-zero
  avail_out).  In the case of a Z_FULL_FLUSH or Z_SYNC_FLUSH, make sure that
  avail_out is greater than six when the flush marker begins, in order to avoid
  repeated flush markers upon calling <a href="../api/#deflate">deflate</a>() again when avail_out == 0.

    If the parameter flush is set to Z_FINISH, pending input is processed,
  pending output is flushed and <a href="../api/#deflate">deflate</a> returns with Z_STREAM_END if there was
  enough output space.  If <a href="../api/#deflate">deflate</a> returns with Z_OK or Z_BUF_ERROR, this
  function must be called again with Z_FINISH and more output space (updated
  avail_out) but no more input data, until it returns with Z_STREAM_END or an
  error.  After deflate has returned Z_STREAM_END, the only possible operations
  on the stream are <a href="../api/#deflateReset">deflateReset</a> or <a href="../api/#deflateEnd">deflateEnd</a>.

    Z_FINISH can be used in the first deflate call after <a href="../api/#deflateInit">deflateInit</a> if all the
  compression is to be done in a single step.  In order to complete in one
  call, avail_out must be at least the value returned by <a href="../api/#deflateBound">deflateBound</a> (see
  below).  Then deflate is guaranteed to return Z_STREAM_END.  If not enough
  output space is provided, deflate will not return Z_STREAM_END, and it must
  be called again as described above.

    <a href="../api/#deflate">deflate</a>() sets strm-&gt;adler to the Adler-32 checksum of all input read
  so far (that is, total_in bytes).  If a gzip stream is being generated, then
  strm-&gt;adler will be the CRC-32 checksum of the input read so far.  (See
  <a href="../api/#deflateInit2">deflateInit2</a> below.)

    <a href="../api/#deflate">deflate</a>() may update strm-&gt;data_type if it can make a good guess about
  the input data type (Z_BINARY or Z_TEXT).  If in doubt, the data is
  considered binary.  This field is only for information purposes and does not
  affect the compression algorithm in any manner.

    <a href="../api/#deflate">deflate</a>() returns Z_OK if some progress has been made (more input
  processed or more output produced), Z_STREAM_END if all input has been
  consumed and all output has been produced (only when flush is set to
  Z_FINISH), Z_STREAM_ERROR if the stream state was inconsistent (for example
  if next_in or next_out was Z_NULL or the state was inadvertently written over
  by the application), or Z_BUF_ERROR if no progress is possible (for example
  avail_in or avail_out was zero).  Note that Z_BUF_ERROR is not fatal, and
  <a href="../api/#deflate">deflate</a>() can be called again with more input and more output space to
  continue compressing.
</div></div><h3 id="nav-31" data-editorial="navigation">deflateEnd</h3><a id="deflateEnd" data-editorial="anchor"></a><div data-zlib-block="31"><pre><code>


ZEXTERN int ZEXPORT deflateEnd(z_streamp strm);
</code></pre></div><div data-zlib-block="32"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     All dynamically allocated data structures for this stream are freed.
   This function discards any unprocessed input and does not flush any pending
   output.

     <a href="../api/#deflateEnd">deflateEnd</a> returns Z_OK if success, Z_STREAM_ERROR if the
   stream state was inconsistent, Z_DATA_ERROR if the stream was freed
   prematurely (some input or output was discarded).  In the error case, msg
   may be set but then points to a static string (which must not be
   deallocated).
</div></div><div data-zlib-block="33"><pre><code>


</code></pre></div><h3 id="nav-34" data-editorial="navigation">inflateInit</h3><a id="inflateInit" data-editorial="anchor"></a><div data-zlib-block="34"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN int ZEXPORT inflateInit(z_streamp strm);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Initializes the internal stream state for decompression.  The fields
   next_in, avail_in, zalloc, zfree and opaque must be initialized before by
   the caller.  In the current version of inflate, the provided input is not
   read or consumed.  The allocation of a sliding window will be deferred to
   the first call of inflate (if the decompression does not complete on the
   first call).  If zalloc and zfree are set to Z_NULL, <a href="../api/#inflateInit">inflateInit</a> updates
   them to use default allocation functions.  total_in, total_out, adler, and
   msg are initialized.

     <a href="../api/#inflateInit">inflateInit</a> returns Z_OK if success, Z_MEM_ERROR if there was not enough
   memory, Z_VERSION_ERROR if the zlib library version is incompatible with the
   version assumed by the caller, or Z_STREAM_ERROR if the parameters are
   invalid, such as a null pointer to the structure.  msg is set to null if
   there is no error message.  <a href="../api/#inflateInit">inflateInit</a> does not perform any decompression.
   Actual decompression will be done by <a href="../api/#inflate">inflate</a>().  So next_in, and avail_in,
   next_out, and avail_out are unused and unchanged.  The current
   implementation of <a href="../api/#inflateInit">inflateInit</a>() does not process any header information --
   that is deferred until <a href="../api/#inflate">inflate</a>() is called.
</div></div><h3 id="nav-35" data-editorial="navigation">inflate</h3><a id="inflate" data-editorial="anchor"></a><div data-zlib-block="35"><pre><code>


ZEXTERN int ZEXPORT inflate(z_streamp strm, int flush);
</code></pre></div><div data-zlib-block="36"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
    inflate decompresses as much data as possible, and stops when the input
  buffer becomes empty or the output buffer becomes full.  It may introduce
  some output latency (reading input without producing any output) except when
  forced to flush.

  The detailed semantics are as follows.  inflate performs one or both of the
  following actions:

  - Decompress more input starting at next_in and update next_in and avail_in
    accordingly.  If not all input can be processed (because there is not
    enough room in the output buffer), then next_in and avail_in are updated
    accordingly, and processing will resume at this point for the next call of
    <a href="../api/#inflate">inflate</a>().

  - Generate more output starting at next_out and update next_out and avail_out
    accordingly.  <a href="../api/#inflate">inflate</a>() provides as much output as possible, until there is
    no more input data or no more space in the output buffer (see below about
    the flush parameter).

    Before the call of <a href="../api/#inflate">inflate</a>(), the application should ensure that at least
  one of the actions is possible, by providing more input and/or consuming more
  output, and updating the next_* and avail_* values accordingly.  If the
  caller of <a href="../api/#inflate">inflate</a>() does not provide both available input and available
  output space, it is possible that there will be no progress made.  The
  application can consume the uncompressed output when it wants, for example
  when the output buffer is full (avail_out == 0), or after each call of
  <a href="../api/#inflate">inflate</a>().  If <a href="../api/#inflate">inflate</a> returns Z_OK and with zero avail_out, it must be
  called again after making room in the output buffer because there might be
  more output pending.

    The flush parameter of <a href="../api/#inflate">inflate</a>() can be Z_NO_FLUSH, Z_SYNC_FLUSH, Z_FINISH,
  Z_BLOCK, or Z_TREES.  Z_SYNC_FLUSH requests that <a href="../api/#inflate">inflate</a>() flush as much
  output as possible to the output buffer.  Z_BLOCK requests that <a href="../api/#inflate">inflate</a>()
  stop if and when it gets to the next deflate block boundary.  When decoding
  the zlib or gzip format, this will cause <a href="../api/#inflate">inflate</a>() to return immediately
  after the header and before the first block.  When doing a raw inflate,
  <a href="../api/#inflate">inflate</a>() will go ahead and process the first block, and will return when it
  gets to the end of that block, or when it runs out of data.

    The Z_BLOCK option assists in appending to or combining deflate streams.
  To assist in this, on return <a href="../api/#inflate">inflate</a>() always sets strm-&gt;data_type to the
  number of unused bits in the input taken from strm-&gt;next_in, plus 64 if
  <a href="../api/#inflate">inflate</a>() is currently decoding the last block in the deflate stream, plus
  128 if <a href="../api/#inflate">inflate</a>() returned immediately after decoding an end-of-block code or
  decoding the complete header up to just before the first byte of the deflate
  stream.  The end-of-block will not be indicated until all of the uncompressed
  data from that block has been written to strm-&gt;next_out.  The number of
  unused bits may in general be greater than seven, except when bit 7 of
  data_type is set, in which case the number of unused bits will be less than
  eight.  data_type is set as noted here every time <a href="../api/#inflate">inflate</a>() returns for all
  flush options, and so can be used to determine the amount of currently
  consumed input in bits.

    The Z_TREES option behaves as Z_BLOCK does, but it also returns when the
  end of each deflate block header is reached, before any actual data in that
  block is decoded.  This allows the caller to determine the length of the
  deflate block header for later use in random access within a deflate block.
  256 is added to the value of strm-&gt;data_type when <a href="../api/#inflate">inflate</a>() returns
  immediately after reaching the end of the deflate block header.

    <a href="../api/#inflate">inflate</a>() should normally be called until it returns Z_STREAM_END or an
  error.  However if all decompression is to be performed in a single step (a
  single call of inflate), the parameter flush should be set to Z_FINISH.  In
  this case all pending input is processed and all pending output is flushed;
  avail_out must be large enough to hold all of the uncompressed data for the
  operation to complete.  (The size of the uncompressed data may have been
  saved by the compressor for this purpose.)  The use of Z_FINISH is not
  required to perform an inflation in one step.  However it may be used to
  inform inflate that a faster approach can be used for the single <a href="../api/#inflate">inflate</a>()
  call.  Z_FINISH also informs inflate to not maintain a sliding window if the
  stream completes, which reduces inflate&#x27;s memory footprint.  If the stream
  does not complete, either because not all of the stream is provided or not
  enough output space is provided, then a sliding window will be allocated and
  <a href="../api/#inflate">inflate</a>() can be called again to continue the operation as if Z_NO_FLUSH had
  been used.

     In this implementation, <a href="../api/#inflate">inflate</a>() always flushes as much output as
  possible to the output buffer, and always uses the faster approach on the
  first call.  So the effects of the flush parameter in this implementation are
  on the return value of <a href="../api/#inflate">inflate</a>() as noted below, when <a href="../api/#inflate">inflate</a>() returns early
  when Z_BLOCK or Z_TREES is used, and when <a href="../api/#inflate">inflate</a>() avoids the allocation of
  memory for a sliding window when Z_FINISH is used.

     If a preset dictionary is needed after this call (see <a href="../api/#inflateSetDictionary">inflateSetDictionary</a>
  below), inflate sets strm-&gt;adler to the Adler-32 checksum of the dictionary
  chosen by the compressor and returns Z_NEED_DICT; otherwise it sets
  strm-&gt;adler to the Adler-32 checksum of all output produced so far (that is,
  total_out bytes) and returns Z_OK, Z_STREAM_END or an error code as described
  below.  At the end of the stream, <a href="../api/#inflate">inflate</a>() checks that its computed Adler-32
  checksum is equal to that saved by the compressor and returns Z_STREAM_END
  only if the checksum is correct.

    <a href="../api/#inflate">inflate</a>() can decompress and check either zlib-wrapped or gzip-wrapped
  deflate data.  The header type is detected automatically, if requested when
  initializing with <a href="../api/#inflateInit2">inflateInit2</a>().  Any information contained in the gzip
  header is not retained unless <a href="../api/#inflateGetHeader">inflateGetHeader</a>() is used.  When processing
  gzip-wrapped deflate data, strm-&gt;adler32 is set to the CRC-32 of the output
  produced so far.  The CRC-32 is checked against the gzip trailer, as is the
  uncompressed length, modulo 2^32.

    <a href="../api/#inflate">inflate</a>() returns Z_OK if some progress has been made (more input processed
  or more output produced), Z_STREAM_END if the end of the compressed data has
  been reached and all uncompressed output has been produced, Z_NEED_DICT if a
  preset dictionary is needed at this point, Z_DATA_ERROR if the input data was
  corrupted (input stream not conforming to the zlib format or incorrect check
  value, in which case strm-&gt;msg points to a string with a more specific
  error), Z_STREAM_ERROR if the stream structure was inconsistent (for example
  next_in or next_out was Z_NULL, or the state was inadvertently written over
  by the application), Z_MEM_ERROR if there was not enough memory, Z_BUF_ERROR
  if no progress was possible or if there was not enough room in the output
  buffer when Z_FINISH is used.  Note that Z_BUF_ERROR is not fatal, and
  <a href="../api/#inflate">inflate</a>() can be called again with more input and more output space to
  continue decompressing.  If Z_DATA_ERROR is returned, the application may
  then call <a href="../api/#inflateSync">inflateSync</a>() to look for a good compression block if a partial
  recovery of the data is to be attempted.
</div></div><h3 id="nav-37" data-editorial="navigation">inflateEnd</h3><a id="inflateEnd" data-editorial="anchor"></a><div data-zlib-block="37"><pre><code>


ZEXTERN int ZEXPORT inflateEnd(z_streamp strm);
</code></pre></div><div data-zlib-block="38"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     All dynamically allocated data structures for this stream are freed.
   This function discards any unprocessed input and does not flush any pending
   output.

     <a href="../api/#inflateEnd">inflateEnd</a> returns Z_OK if success, or Z_STREAM_ERROR if the stream state
   was inconsistent.
</div></div><div data-zlib-block="39"><pre><code>


                        </code></pre></div><h2 id="section-40" data-editorial="navigation">Advanced functions</h2><div data-zlib-block="40"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> Advanced functions </div></div><div data-zlib-block="41"><pre><code>

</code></pre></div><div data-zlib-block="42"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
    The following functions are needed only in some special applications.
</div></div><div data-zlib-block="43"><pre><code>

</code></pre></div><h3 id="nav-44" data-editorial="navigation">deflateInit2</h3><a id="deflateInit2" data-editorial="anchor"></a><div data-zlib-block="44"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN int ZEXPORT deflateInit2(z_streamp strm,
                                 int level,
                                 int method,
                                 int windowBits,
                                 int memLevel,
                                 int strategy);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     This is another version of <a href="../api/#deflateInit">deflateInit</a> with more compression options.  The
   fields zalloc, zfree and opaque must be initialized before by the caller.

     The method parameter is the compression method.  It must be Z_DEFLATED in
   this version of the library.

     The windowBits parameter is the base two logarithm of the window size
   (the size of the history buffer).  It should be in the range 8..15 for this
   version of the library.  Larger values of this parameter result in better
   compression at the expense of memory usage.  The default value is 15 if
   <a href="../api/#deflateInit">deflateInit</a> is used instead.

     For the current implementation of <a href="../api/#deflate">deflate</a>(), a windowBits value of 8 (a
   window size of 256 bytes) is not supported.  As a result, a request for 8
   will result in 9 (a 512-byte window).  In that case, providing 8 to
   <a href="../api/#inflateInit2">inflateInit2</a>() will result in an error when the zlib header with 9 is
   checked against the initialization of <a href="../api/#inflate">inflate</a>().  The remedy is to not use 8
   with <a href="../api/#deflateInit2">deflateInit2</a>() with this initialization, or at least in that case use 9
   with <a href="../api/#inflateInit2">inflateInit2</a>().

     windowBits can also be -8..-15 for raw deflate.  In this case, -windowBits
   determines the window size.  <a href="../api/#deflate">deflate</a>() will then generate raw deflate data
   with no zlib header or trailer, and will not compute a check value.

     windowBits can also be greater than 15 for optional gzip encoding.  Add
   16 to windowBits to write a simple gzip header and trailer around the
   compressed data instead of a zlib wrapper.  The gzip header will have no
   file name, no extra data, no comment, no modification time (set to zero), no
   header crc, and the operating system will be set to the appropriate value,
   if the operating system was determined at compile time.  If a gzip stream is
   being written, strm-&gt;adler is a CRC-32 instead of an Adler-32.

     For raw deflate or gzip encoding, a request for a 256-byte window is
   rejected as invalid, since only the zlib header provides a means of
   transmitting the window size to the decompressor.

     The memLevel parameter specifies how much memory should be allocated
   for the internal compression state.  memLevel=1 uses minimum memory but is
   slow and reduces compression ratio; memLevel=9 uses maximum memory for
   optimal speed.  The default value is 8.  See <a href="../zconf/">zconf.h</a> for total memory usage
   as a function of windowBits and memLevel.

     The strategy parameter is used to tune the compression algorithm.  Use the
   value Z_DEFAULT_STRATEGY for normal data, Z_FILTERED for data produced by a
   filter (or predictor), Z_RLE to limit match distances to one (run-length
   encoding), or Z_HUFFMAN_ONLY to force Huffman encoding only (no string
   matching).  Filtered data consists mostly of small values with a somewhat
   random distribution, as produced by the PNG filters.  In this case, the
   compression algorithm is tuned to compress them better.  The effect of
   Z_FILTERED is to force more Huffman coding and less string matching than the
   default; it is intermediate between Z_DEFAULT_STRATEGY and Z_HUFFMAN_ONLY.
   Z_RLE is almost as fast as Z_HUFFMAN_ONLY, but should give better
   compression for PNG image data than Huffman only.  The degree of string
   matching from most to none is: Z_DEFAULT_STRATEGY, Z_FILTERED, Z_RLE, then
   Z_HUFFMAN_ONLY. The strategy parameter affects the compression ratio but
   never the correctness of the compressed output, even if it is not set
   optimally for the given data.  Z_FIXED uses the default string matching, but
   prevents the use of dynamic Huffman codes, allowing for a simpler decoder
   for special applications.

     <a href="../api/#deflateInit2">deflateInit2</a> returns Z_OK if success, Z_MEM_ERROR if there was not enough
   memory, Z_STREAM_ERROR if any parameter is invalid (such as an invalid
   method), or Z_VERSION_ERROR if the zlib library version (zlib_version) is
   incompatible with the version assumed by the caller (ZLIB_VERSION).  msg is
   set to null if there is no error message.  <a href="../api/#deflateInit2">deflateInit2</a> does not perform any
   compression: this will be done by <a href="../api/#deflate">deflate</a>().
</div></div><h3 id="nav-45" data-editorial="navigation">deflateSetDictionary</h3><a id="deflateSetDictionary" data-editorial="anchor"></a><div data-zlib-block="45"><pre><code>

ZEXTERN int ZEXPORT deflateSetDictionary(z_streamp strm,
                                         const Bytef *dictionary,
                                         uInt  dictLength);
</code></pre></div><div data-zlib-block="46"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Initializes the compression dictionary from the given byte sequence
   without producing any compressed output.  When using the zlib format, this
   function must be called immediately after <a href="../api/#deflateInit">deflateInit</a>, <a href="../api/#deflateInit2">deflateInit2</a> or
   <a href="../api/#deflateReset">deflateReset</a>, and before any call of deflate.  When doing raw deflate, this
   function must be called either before any call of deflate, or immediately
   after the completion of a deflate block, i.e. after all input has been
   consumed and all output has been delivered when using any of the flush
   options Z_BLOCK, Z_PARTIAL_FLUSH, Z_SYNC_FLUSH, or Z_FULL_FLUSH.  The
   compressor and decompressor must use exactly the same dictionary (see
   <a href="../api/#inflateSetDictionary">inflateSetDictionary</a>).

     The dictionary should consist of strings (byte sequences) that are likely
   to be encountered later in the data to be compressed, with the most commonly
   used strings preferably put towards the end of the dictionary.  Using a
   dictionary is most useful when the data to be compressed is short and can be
   predicted with good accuracy; the data can then be compressed better than
   with the default empty dictionary.

     Depending on the size of the compression data structures selected by
   <a href="../api/#deflateInit">deflateInit</a> or <a href="../api/#deflateInit2">deflateInit2</a>, a part of the dictionary may in effect be
   discarded, for example if the dictionary is larger than the window size
   provided in <a href="../api/#deflateInit">deflateInit</a> or <a href="../api/#deflateInit2">deflateInit2</a>.  Thus the strings most likely to be
   useful should be put at the end of the dictionary, not at the front.  In
   addition, the current implementation of deflate will use at most the window
   size minus 262 bytes of the provided dictionary.

     Upon return of this function, strm-&gt;adler is set to the Adler-32 value
   of the dictionary; the decompressor may later use this value to determine
   which dictionary has been used by the compressor.  (The Adler-32 value
   applies to the whole dictionary even if only a subset of the dictionary is
   actually used by the compressor.) If a raw deflate was requested, then the
   Adler-32 value is not computed and strm-&gt;adler is not set.

     <a href="../api/#deflateSetDictionary">deflateSetDictionary</a> returns Z_OK if success, or Z_STREAM_ERROR if a
   parameter is invalid (e.g.  dictionary being Z_NULL) or the stream state is
   inconsistent (for example if deflate has already been called for this stream
   or if not at a block boundary for raw deflate).  <a href="../api/#deflateSetDictionary">deflateSetDictionary</a> does
   not perform any compression: this will be done by <a href="../api/#deflate">deflate</a>().
</div></div><h3 id="nav-47" data-editorial="navigation">deflateGetDictionary</h3><a id="deflateGetDictionary" data-editorial="anchor"></a><div data-zlib-block="47"><pre><code>

ZEXTERN int ZEXPORT deflateGetDictionary(z_streamp strm,
                                         Bytef *dictionary,
                                         uInt  *dictLength);
</code></pre></div><div data-zlib-block="48"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Returns the sliding dictionary being maintained by deflate.  dictLength is
   set to the number of bytes in the dictionary, and that many bytes are copied
   to dictionary.  dictionary must have enough space, where 32768 bytes is
   always enough.  If <a href="../api/#deflateGetDictionary">deflateGetDictionary</a>() is called with dictionary equal to
   Z_NULL, then only the dictionary length is returned, and nothing is copied.
   Similarly, if dictLength is Z_NULL, then it is not set.

     <a href="../api/#deflateGetDictionary">deflateGetDictionary</a>() may return a length less than the window size, even
   when more than the window size in input has been provided. It may return up
   to 258 bytes less in that case, due to how zlib&#x27;s implementation of deflate
   manages the sliding window and lookahead for matches, where matches can be
   up to 258 bytes long. If the application needs the last window-size bytes of
   input, then that would need to be saved by the application outside of zlib.

     <a href="../api/#deflateGetDictionary">deflateGetDictionary</a> returns Z_OK on success, or Z_STREAM_ERROR if the
   stream state is inconsistent.
</div></div><h3 id="nav-49" data-editorial="navigation">deflateCopy</h3><a id="deflateCopy" data-editorial="anchor"></a><div data-zlib-block="49"><pre><code>

ZEXTERN int ZEXPORT deflateCopy(z_streamp dest,
                                z_streamp source);
</code></pre></div><div data-zlib-block="50"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Sets the destination stream as a complete copy of the source stream.

     This function can be useful when several compression strategies will be
   tried, for example when there are several ways of pre-processing the input
   data with a filter.  The streams that will be discarded should then be freed
   by calling <a href="../api/#deflateEnd">deflateEnd</a>.  Note that <a href="../api/#deflateCopy">deflateCopy</a> duplicates the internal
   compression state which can be quite large, so this strategy is slow and can
   consume lots of memory.

     <a href="../api/#deflateCopy">deflateCopy</a> returns Z_OK if success, Z_MEM_ERROR if there was not
   enough memory, Z_STREAM_ERROR if the source stream state was inconsistent
   (such as zalloc being Z_NULL).  msg is left unchanged in both source and
   destination.
</div></div><h3 id="nav-51" data-editorial="navigation">deflateReset</h3><a id="deflateReset" data-editorial="anchor"></a><div data-zlib-block="51"><pre><code>

ZEXTERN int ZEXPORT deflateReset(z_streamp strm);
</code></pre></div><div data-zlib-block="52"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     This function is equivalent to <a href="../api/#deflateEnd">deflateEnd</a> followed by <a href="../api/#deflateInit">deflateInit</a>, but
   does not free and reallocate the internal compression state.  The stream
   will leave the compression level and any other attributes that may have been
   set unchanged.  total_in, total_out, adler, and msg are initialized.

     <a href="../api/#deflateReset">deflateReset</a> returns Z_OK if success, or Z_STREAM_ERROR if the source
   stream state was inconsistent (such as zalloc or state being Z_NULL).
</div></div><h3 id="nav-53" data-editorial="navigation">deflateParams</h3><a id="deflateParams" data-editorial="anchor"></a><div data-zlib-block="53"><pre><code>

ZEXTERN int ZEXPORT deflateParams(z_streamp strm,
                                  int level,
                                  int strategy);
</code></pre></div><div data-zlib-block="54"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Dynamically update the compression level and compression strategy.  The
   interpretation of level and strategy is as in <a href="../api/#deflateInit2">deflateInit2</a>().  This can be
   used to switch between compression and straight copy of the input data, or
   to switch to a different kind of input data requiring a different strategy.
   If the compression approach (which is a function of the level) or the
   strategy is changed, and if there have been any <a href="../api/#deflate">deflate</a>() calls since the
   state was initialized or reset, then the input available so far is
   compressed with the old level and strategy using <a href="../api/#deflate">deflate</a>(strm, Z_BLOCK).
   There are three approaches for the compression levels 0, 1..3, and 4..9
   respectively.  The new level and strategy will take effect at the next call
   of <a href="../api/#deflate">deflate</a>().

     If a <a href="../api/#deflate">deflate</a>(strm, Z_BLOCK) is performed by <a href="../api/#deflateParams">deflateParams</a>(), and it does
   not have enough output space to complete, then the parameter change will not
   take effect.  In this case, <a href="../api/#deflateParams">deflateParams</a>() can be called again with the
   same parameters and more output space to try again.

     In order to assure a change in the parameters on the first try, the
   deflate stream should be flushed using <a href="../api/#deflate">deflate</a>() with Z_BLOCK or other flush
   request until strm.avail_out is not zero, before calling <a href="../api/#deflateParams">deflateParams</a>().
   Then no more input data should be provided before the <a href="../api/#deflateParams">deflateParams</a>() call.
   If this is done, the old level and strategy will be applied to the data
   compressed before <a href="../api/#deflateParams">deflateParams</a>(), and the new level and strategy will be
   applied to the data compressed after <a href="../api/#deflateParams">deflateParams</a>().

     <a href="../api/#deflateParams">deflateParams</a> returns Z_OK on success, Z_STREAM_ERROR if the source stream
   state was inconsistent or if a parameter was invalid, or Z_BUF_ERROR if
   there was not enough output space to complete the compression of the
   available input data before a change in the strategy or approach.  Note that
   in the case of a Z_BUF_ERROR, the parameters are not changed.  A return
   value of Z_BUF_ERROR is not fatal, in which case <a href="../api/#deflateParams">deflateParams</a>() can be
   retried with more output space.
</div></div><h3 id="nav-55" data-editorial="navigation">deflateTune</h3><a id="deflateTune" data-editorial="anchor"></a><div data-zlib-block="55"><pre><code>

ZEXTERN int ZEXPORT deflateTune(z_streamp strm,
                                int good_length,
                                int max_lazy,
                                int nice_length,
                                int max_chain);
</code></pre></div><div data-zlib-block="56"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Fine tune deflate&#x27;s internal compression parameters.  This should only be
   used by someone who understands the algorithm used by zlib&#x27;s deflate for
   searching for the best matching string, and even then only by the most
   fanatic optimizer trying to squeeze out the last compressed bit for their
   specific input data.  Read the deflate.c source code for the meaning of the
   max_lazy, good_length, nice_length, and max_chain parameters.

     <a href="../api/#deflateTune">deflateTune</a>() can be called after <a href="../api/#deflateInit">deflateInit</a>() or <a href="../api/#deflateInit2">deflateInit2</a>(), and
   returns Z_OK on success, or Z_STREAM_ERROR for an invalid deflate stream.
 </div></div><h3 id="nav-57" data-editorial="navigation">deflateBound</h3><a id="deflateBound" data-editorial="anchor"></a><a id="deflateBound_z" data-editorial="anchor"></a><div data-zlib-block="57"><pre><code>

ZEXTERN uLong ZEXPORT deflateBound(z_streamp strm, uLong sourceLen);
ZEXTERN z_size_t ZEXPORT deflateBound_z(z_streamp strm, z_size_t sourceLen);
</code></pre></div><div data-zlib-block="58"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="../api/#deflateBound">deflateBound</a>() returns an upper bound on the compressed size after
   deflation of sourceLen bytes.  It must be called after <a href="../api/#deflateInit">deflateInit</a>() or
   <a href="../api/#deflateInit2">deflateInit2</a>(), and after <a href="../api/#deflateSetHeader">deflateSetHeader</a>(), if used.  This would be used
   to allocate an output buffer for deflation in a single pass, and so would be
   called before <a href="../api/#deflate">deflate</a>().  If that first <a href="../api/#deflate">deflate</a>() call is provided the
   sourceLen input bytes, an output buffer allocated to the size returned by
   <a href="../api/#deflateBound">deflateBound</a>(), and the flush value Z_FINISH, then <a href="../api/#deflate">deflate</a>() is guaranteed
   to return Z_STREAM_END.  Note that it is possible for the compressed size to
   be larger than the value returned by <a href="../api/#deflateBound">deflateBound</a>() if flush options other
   than Z_FINISH or Z_NO_FLUSH are used.

     delfateBound_z() is the same, but takes and returns a size_t length.  Note
   that a long is 32 bits on Windows.
</div></div><h3 id="nav-59" data-editorial="navigation">deflatePending</h3><a id="deflatePending" data-editorial="anchor"></a><div data-zlib-block="59"><pre><code>

ZEXTERN int ZEXPORT deflatePending(z_streamp strm,
                                   unsigned *pending,
                                   int *bits);
</code></pre></div><div data-zlib-block="60"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="../api/#deflatePending">deflatePending</a>() returns the number of bytes and bits of output that have
   been generated, but not yet provided in the available output.  The bytes not
   provided would be due to the available output space having being consumed.
   The number of bits of output not provided are between 0 and 7, where they
   await more bits to join them in order to fill out a full byte.  If pending
   or bits are Z_NULL, then those values are not set.

     <a href="../api/#deflatePending">deflatePending</a> returns Z_OK if success, or Z_STREAM_ERROR if the source
   stream state was inconsistent.  If an int is 16 bits and memLevel is 9, then
   it is possible for the number of pending bytes to not fit in an unsigned. In
   that case Z_BUF_ERROR is returned and *pending is set to the maximum value
   of an unsigned.
 </div></div><h3 id="nav-61" data-editorial="navigation">deflateUsed</h3><a id="deflateUsed" data-editorial="anchor"></a><div data-zlib-block="61"><pre><code>

ZEXTERN int ZEXPORT deflateUsed(z_streamp strm,
                                int *bits);
</code></pre></div><div data-zlib-block="62"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="../api/#deflateUsed">deflateUsed</a>() returns in *bits the most recent number of deflate bits used
   in the last byte when flushing to a byte boundary. The result is in 1..8, or
   0 if there has not yet been a flush. This helps determine the location of
   the last bit of a deflate stream.

     <a href="../api/#deflateUsed">deflateUsed</a> returns Z_OK if success, or Z_STREAM_ERROR if the source
   stream state was inconsistent.
 </div></div><h3 id="nav-63" data-editorial="navigation">deflatePrime</h3><a id="deflatePrime" data-editorial="anchor"></a><div data-zlib-block="63"><pre><code>

ZEXTERN int ZEXPORT deflatePrime(z_streamp strm,
                                 int bits,
                                 int value);
</code></pre></div><div data-zlib-block="64"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="../api/#deflatePrime">deflatePrime</a>() inserts bits in the deflate output stream.  The intent
   is that this function is used to start off the deflate output with the bits
   leftover from a previous deflate stream when appending to it.  As such, this
   function can only be used for raw deflate, and must be used before the first
   <a href="../api/#deflate">deflate</a>() call after a <a href="../api/#deflateInit2">deflateInit2</a>() or <a href="../api/#deflateReset">deflateReset</a>().  bits must be less
   than or equal to 16, and that many of the least significant bits of value
   will be inserted in the output.

     <a href="../api/#deflatePrime">deflatePrime</a> returns Z_OK if success, Z_BUF_ERROR if there was not enough
   room in the internal buffer to insert the bits, or Z_STREAM_ERROR if the
   source stream state was inconsistent.
</div></div><h3 id="nav-65" data-editorial="navigation">deflateSetHeader</h3><a id="deflateSetHeader" data-editorial="anchor"></a><div data-zlib-block="65"><pre><code>

ZEXTERN int ZEXPORT deflateSetHeader(z_streamp strm,
                                     gz_headerp head);
</code></pre></div><div data-zlib-block="66"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="../api/#deflateSetHeader">deflateSetHeader</a>() provides gzip header information for when a gzip
   stream is requested by <a href="../api/#deflateInit2">deflateInit2</a>().  <a href="../api/#deflateSetHeader">deflateSetHeader</a>() may be called
   after <a href="../api/#deflateInit2">deflateInit2</a>() or <a href="../api/#deflateReset">deflateReset</a>() and before the first call of
   <a href="../api/#deflate">deflate</a>().  The text, time, os, extra field, name, and comment information
   in the provided <a href="../api/#gz_header">gz_header</a> structure are written to the gzip header (xflag is
   ignored -- the extra flags are set according to the compression level).  The
   caller must assure that, if not Z_NULL, name and comment are terminated with
   a zero byte, and that if extra is not Z_NULL, that extra_len bytes are
   available there.  If hcrc is true, a gzip header crc is included.  Note that
   the current versions of the command-line version of gzip (up through version
   1.3.x) do not support header crc&#x27;s, and will report that it is a &quot;multi-part
   gzip file&quot; and give up.

     If <a href="../api/#deflateSetHeader">deflateSetHeader</a> is not used, the default gzip header has text false,
   the time set to zero, and os set to the current operating system, with no
   extra, name, or comment fields.  The gzip header is returned to the default
   state by <a href="../api/#deflateReset">deflateReset</a>().

     <a href="../api/#deflateSetHeader">deflateSetHeader</a> returns Z_OK if success, or Z_STREAM_ERROR if the source
   stream state was inconsistent.
</div></div><div data-zlib-block="67"><pre><code>

</code></pre></div><h3 id="nav-68" data-editorial="navigation">inflateInit2</h3><a id="inflateInit2" data-editorial="anchor"></a><div data-zlib-block="68"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN int ZEXPORT inflateInit2(z_streamp strm,
                                 int windowBits);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     This is another version of <a href="../api/#inflateInit">inflateInit</a> with an extra parameter.  The
   fields next_in, avail_in, zalloc, zfree and opaque must be initialized
   before by the caller.

     The windowBits parameter is the base two logarithm of the maximum window
   size (the size of the history buffer).  It should be in the range 8..15 for
   this version of the library.  The default value is 15 if <a href="../api/#inflateInit">inflateInit</a> is used
   instead.  windowBits must be greater than or equal to the windowBits value
   provided to <a href="../api/#deflateInit2">deflateInit2</a>() while compressing, or it must be equal to 15 if
   <a href="../api/#deflateInit2">deflateInit2</a>() was not used.  If a compressed stream with a larger window
   size is given as input, <a href="../api/#inflate">inflate</a>() will return with the error code
   Z_DATA_ERROR instead of trying to allocate a larger window.

     windowBits can also be zero to request that inflate use the window size in
   the zlib header of the compressed stream.

     windowBits can also be -8..-15 for raw inflate.  In this case, -windowBits
   determines the window size.  <a href="../api/#inflate">inflate</a>() will then process raw deflate data,
   not looking for a zlib or gzip header, not generating a check value, and not
   looking for any check values for comparison at the end of the stream.  This
   is for use with other formats that use the deflate compressed data format
   such as zip.  Those formats provide their own check values.  If a custom
   format is developed using the raw deflate format for compressed data, it is
   recommended that a check value such as an Adler-32 or a CRC-32 be applied to
   the uncompressed data as is done in the zlib, gzip, and zip formats.  For
   most applications, the zlib format should be used as is.  Note that comments
   above on the use in <a href="../api/#deflateInit2">deflateInit2</a>() applies to the magnitude of windowBits.

     windowBits can also be greater than 15 for optional gzip decoding.  Add
   32 to windowBits to enable zlib and gzip decoding with automatic header
   detection, or add 16 to decode only the gzip format (the zlib format will
   return a Z_DATA_ERROR).  If a gzip stream is being decoded, strm-&gt;adler is a
   CRC-32 instead of an Adler-32.  Unlike the gunzip utility and <a href="../api/#gzread">gzread</a>() (see
   below), <a href="../api/#inflate">inflate</a>() will *not* automatically decode concatenated gzip members.
   <a href="../api/#inflate">inflate</a>() will return Z_STREAM_END at the end of the gzip member.  The state
   would need to be reset to continue decoding a subsequent gzip member.  This
   *must* be done if there is more data after a gzip member, in order for the
   decompression to be compliant with the gzip standard (RFC 1952).

     <a href="../api/#inflateInit2">inflateInit2</a> returns Z_OK if success, Z_MEM_ERROR if there was not enough
   memory, Z_VERSION_ERROR if the zlib library version is incompatible with the
   version assumed by the caller, or Z_STREAM_ERROR if the parameters are
   invalid, such as a null pointer to the structure.  msg is set to null if
   there is no error message.  <a href="../api/#inflateInit2">inflateInit2</a> does not perform any decompression
   apart from possibly reading the zlib header if present: actual decompression
   will be done by <a href="../api/#inflate">inflate</a>().  (So next_in and avail_in may be modified, but
   next_out and avail_out are unused and unchanged.) The current implementation
   of <a href="../api/#inflateInit2">inflateInit2</a>() does not process any header information -- that is
   deferred until <a href="../api/#inflate">inflate</a>() is called.
</div></div><h3 id="nav-69" data-editorial="navigation">inflateSetDictionary</h3><a id="inflateSetDictionary" data-editorial="anchor"></a><div data-zlib-block="69"><pre><code>

ZEXTERN int ZEXPORT inflateSetDictionary(z_streamp strm,
                                         const Bytef *dictionary,
                                         uInt  dictLength);
</code></pre></div><div data-zlib-block="70"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Initializes the decompression dictionary from the given uncompressed byte
   sequence.  This function must be called immediately after a call of inflate,
   if that call returned Z_NEED_DICT.  The dictionary chosen by the compressor
   can be determined from the Adler-32 value returned by that call of inflate.
   The compressor and decompressor must use exactly the same dictionary (see
   <a href="../api/#deflateSetDictionary">deflateSetDictionary</a>).  For raw inflate, this function can be called at any
   time to set the dictionary.  If the provided dictionary is smaller than the
   window and there is already data in the window, then the provided dictionary
   will amend what&#x27;s there.  The application must insure that the dictionary
   that was used for compression is provided.

     <a href="../api/#inflateSetDictionary">inflateSetDictionary</a> returns Z_OK if success, Z_STREAM_ERROR if a
   parameter is invalid (e.g.  dictionary being Z_NULL) or the stream state is
   inconsistent, Z_DATA_ERROR if the given dictionary doesn&#x27;t match the
   expected one (incorrect Adler-32 value).  <a href="../api/#inflateSetDictionary">inflateSetDictionary</a> does not
   perform any decompression: this will be done by subsequent calls of
   <a href="../api/#inflate">inflate</a>().
</div></div><h3 id="nav-71" data-editorial="navigation">inflateGetDictionary</h3><a id="inflateGetDictionary" data-editorial="anchor"></a><div data-zlib-block="71"><pre><code>

ZEXTERN int ZEXPORT inflateGetDictionary(z_streamp strm,
                                         Bytef *dictionary,
                                         uInt  *dictLength);
</code></pre></div><div data-zlib-block="72"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Returns the sliding dictionary being maintained by inflate.  dictLength is
   set to the number of bytes in the dictionary, and that many bytes are copied
   to dictionary.  dictionary must have enough space, where 32768 bytes is
   always enough.  If <a href="../api/#inflateGetDictionary">inflateGetDictionary</a>() is called with dictionary equal to
   Z_NULL, then only the dictionary length is returned, and nothing is copied.
   Similarly, if dictLength is Z_NULL, then it is not set.

     <a href="../api/#inflateGetDictionary">inflateGetDictionary</a> returns Z_OK on success, or Z_STREAM_ERROR if the
   stream state is inconsistent.
</div></div><h3 id="nav-73" data-editorial="navigation">inflateSync</h3><a id="inflateSync" data-editorial="anchor"></a><div data-zlib-block="73"><pre><code>

ZEXTERN int ZEXPORT inflateSync(z_streamp strm);
</code></pre></div><div data-zlib-block="74"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Skips invalid compressed data until a possible full flush point (see above
   for the description of deflate with Z_FULL_FLUSH) can be found, or until all
   available input is skipped.  No output is provided.

     <a href="../api/#inflateSync">inflateSync</a> searches for a 00 00 FF FF pattern in the compressed data.
   All full flush points have this pattern, but not all occurrences of this
   pattern are full flush points.

     <a href="../api/#inflateSync">inflateSync</a> returns Z_OK if a possible full flush point has been found,
   Z_BUF_ERROR if no more input was provided, Z_DATA_ERROR if no flush point
   has been found, or Z_STREAM_ERROR if the stream structure was inconsistent.
   In the success case, the application may save the current value of total_in
   which indicates where valid compressed data was found.  In the error case,
   the application may repeatedly call <a href="../api/#inflateSync">inflateSync</a>, providing more input each
   time, until success or end of the input data.
</div></div><h3 id="nav-75" data-editorial="navigation">inflateCopy</h3><a id="inflateCopy" data-editorial="anchor"></a><div data-zlib-block="75"><pre><code>

ZEXTERN int ZEXPORT inflateCopy(z_streamp dest,
                                z_streamp source);
</code></pre></div><div data-zlib-block="76"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Sets the destination stream as a complete copy of the source stream.

     This function can be useful when randomly accessing a large stream.  The
   first pass through the stream can periodically record the inflate state,
   allowing restarting inflate at those points when randomly accessing the
   stream.

     <a href="../api/#inflateCopy">inflateCopy</a> returns Z_OK if success, Z_MEM_ERROR if there was not
   enough memory, Z_STREAM_ERROR if the source stream state was inconsistent
   (such as zalloc being Z_NULL).  msg is left unchanged in both source and
   destination.
</div></div><h3 id="nav-77" data-editorial="navigation">inflateReset</h3><a id="inflateReset" data-editorial="anchor"></a><div data-zlib-block="77"><pre><code>

ZEXTERN int ZEXPORT inflateReset(z_streamp strm);
</code></pre></div><div data-zlib-block="78"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     This function is equivalent to <a href="../api/#inflateEnd">inflateEnd</a> followed by <a href="../api/#inflateInit">inflateInit</a>,
   but does not free and reallocate the internal decompression state.  The
   stream will keep attributes that may have been set by <a href="../api/#inflateInit2">inflateInit2</a>.
   total_in, total_out, adler, and msg are initialized.

     <a href="../api/#inflateReset">inflateReset</a> returns Z_OK if success, or Z_STREAM_ERROR if the source
   stream state was inconsistent (such as zalloc or state being Z_NULL).
</div></div><h3 id="nav-79" data-editorial="navigation">inflateReset2</h3><a id="inflateReset2" data-editorial="anchor"></a><div data-zlib-block="79"><pre><code>

ZEXTERN int ZEXPORT inflateReset2(z_streamp strm,
                                  int windowBits);
</code></pre></div><div data-zlib-block="80"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     This function is the same as <a href="../api/#inflateReset">inflateReset</a>, but it also permits changing
   the wrap and window size requests.  The windowBits parameter is interpreted
   the same as it is for <a href="../api/#inflateInit2">inflateInit2</a>.  If the window size is changed, then the
   memory allocated for the window is freed, and the window will be reallocated
   by <a href="../api/#inflate">inflate</a>() if needed.

     <a href="../api/#inflateReset2">inflateReset2</a> returns Z_OK if success, or Z_STREAM_ERROR if the source
   stream state was inconsistent (such as zalloc or state being Z_NULL), or if
   the windowBits parameter is invalid.
</div></div><h3 id="nav-81" data-editorial="navigation">inflatePrime</h3><a id="inflatePrime" data-editorial="anchor"></a><div data-zlib-block="81"><pre><code>

ZEXTERN int ZEXPORT inflatePrime(z_streamp strm,
                                 int bits,
                                 int value);
</code></pre></div><div data-zlib-block="82"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     This function inserts bits in the inflate input stream.  The intent is to
   use <a href="../api/#inflatePrime">inflatePrime</a>() to start inflating at a bit position in the middle of a
   byte.  The provided bits will be used before any bytes are used from
   next_in.  This function should be used with raw inflate, before the first
   <a href="../api/#inflate">inflate</a>() call, after <a href="../api/#inflateInit2">inflateInit2</a>() or <a href="../api/#inflateReset">inflateReset</a>().  It can also be used
   after an <a href="../api/#inflate">inflate</a>() return indicates the end of a deflate block or header
   when using Z_BLOCK.  bits must be less than or equal to 16, and that many of
   the least significant bits of value will be inserted in the input.  The
   other bits in value can be non-zero, and will be ignored.

     If bits is negative, then the input stream bit buffer is emptied.  Then
   <a href="../api/#inflatePrime">inflatePrime</a>() can be called again to put bits in the buffer.  This is used
   to clear out bits leftover after feeding inflate a block description prior
   to feeding inflate codes.

     <a href="../api/#inflatePrime">inflatePrime</a> returns Z_OK if success, or Z_STREAM_ERROR if the source
   stream state was inconsistent, or if bits is out of range.  If inflate was
   in the middle of processing a header, trailer, or stored block lengths, then
   it is possible for there to be only eight bits available in the bit buffer.
   In that case, bits &gt; 8 is considered out of range.  However, when used as
   outlined above, there will always be 16 bits available in the buffer for
   insertion.  As noted in its documentation above, inflate records the number
   of bits in the bit buffer on return in data_type. 32 minus that is the
   number of bits available for insertion.  <a href="../api/#inflatePrime">inflatePrime</a> does not update
   data_type with the new number of bits in buffer.
</div></div><h3 id="nav-83" data-editorial="navigation">inflateMark</h3><a id="inflateMark" data-editorial="anchor"></a><div data-zlib-block="83"><pre><code>

ZEXTERN long ZEXPORT inflateMark(z_streamp strm);
</code></pre></div><div data-zlib-block="84"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     This function returns two values, one in the lower 16 bits of the return
   value, and the other in the remaining upper bits, obtained by shifting the
   return value down 16 bits.  If the upper value is -1 and the lower value is
   zero, then <a href="../api/#inflate">inflate</a>() is currently decoding information outside of a block.
   If the upper value is -1 and the lower value is non-zero, then inflate is in
   the middle of a stored block, with the lower value equaling the number of
   bytes from the input remaining to copy.  If the upper value is not -1, then
   it is the number of bits back from the current bit position in the input of
   the code (literal or length/distance pair) currently being processed.  In
   that case the lower value is the number of bytes already emitted for that
   code.

     A code is being processed if inflate is waiting for more input to complete
   decoding of the code, or if it has completed decoding but is waiting for
   more output space to write the literal or match data.

     <a href="../api/#inflateMark">inflateMark</a>() is used to mark locations in the input data for random
   access, which may be at bit positions, and to note those cases where the
   output of a code may span boundaries of random access blocks.  The current
   location in the input stream can be determined from avail_in and data_type
   as noted in the description for the Z_BLOCK flush parameter for inflate.

     <a href="../api/#inflateMark">inflateMark</a> returns the value noted above, or -65536 if the provided
   source stream state was inconsistent.
</div></div><h3 id="nav-85" data-editorial="navigation">inflateGetHeader</h3><a id="inflateGetHeader" data-editorial="anchor"></a><div data-zlib-block="85"><pre><code>

ZEXTERN int ZEXPORT inflateGetHeader(z_streamp strm,
                                     gz_headerp head);
</code></pre></div><div data-zlib-block="86"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="../api/#inflateGetHeader">inflateGetHeader</a>() requests that gzip header information be stored in the
   provided <a href="../api/#gz_header">gz_header</a> structure.  <a href="../api/#inflateGetHeader">inflateGetHeader</a>() may be called after
   <a href="../api/#inflateInit2">inflateInit2</a>() or <a href="../api/#inflateReset">inflateReset</a>(), and before the first call of <a href="../api/#inflate">inflate</a>().
   As <a href="../api/#inflate">inflate</a>() processes the gzip stream, head-&gt;done is zero until the header
   is completed, at which time head-&gt;done is set to one.  If a zlib stream is
   being decoded, then head-&gt;done is set to -1 to indicate that there will be
   no gzip header information forthcoming.  Note that Z_BLOCK or Z_TREES can be
   used to force <a href="../api/#inflate">inflate</a>() to return immediately after header processing is
   complete and before any actual data is decompressed.

     The text, time, xflags, and os fields are filled in with the gzip header
   contents.  hcrc is set to true if there is a header CRC.  (The header CRC
   was valid if done is set to one.)  The extra, name, and comment pointers
   much each be either Z_NULL or point to space to store that information from
   the header.  If extra is not Z_NULL, then extra_max contains the maximum
   number of bytes that can be written to extra.  Once done is true, extra_len
   contains the actual extra field length, and extra contains the extra field,
   or that field truncated if extra_max is less than extra_len.  If name is not
   Z_NULL, then up to name_max characters, including the terminating zero, are
   written there.  If comment is not Z_NULL, then up to comm_max characters,
   including the terminating zero, are written there.  The application can tell
   that the name or comment did not fit in the provided space by the absence of
   a terminating zero.  If any of extra, name, or comment are not present in
   the header, then that field&#x27;s pointer is set to Z_NULL.  This allows the use
   of <a href="../api/#deflateSetHeader">deflateSetHeader</a>() with the returned structure to duplicate the header.
   Note that if those fields initially pointed to allocated memory, then the
   application will need to save them elsewhere so that they can be eventually
   freed.

     If <a href="../api/#inflateGetHeader">inflateGetHeader</a> is not used, then the header information is simply
   discarded.  The header is always checked for validity, including the header
   CRC if present.  <a href="../api/#inflateReset">inflateReset</a>() will reset the process to discard the header
   information.  The application would need to call <a href="../api/#inflateGetHeader">inflateGetHeader</a>() again to
   retrieve the header from the next gzip stream.

     <a href="../api/#inflateGetHeader">inflateGetHeader</a> returns Z_OK if success, or Z_STREAM_ERROR if the source
   stream state was inconsistent.
</div></div><div data-zlib-block="87"><pre><code>

</code></pre></div><h3 id="nav-88" data-editorial="navigation">inflateBackInit</h3><a id="inflateBackInit" data-editorial="anchor"></a><div data-zlib-block="88"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN int ZEXPORT inflateBackInit(z_streamp strm, int windowBits,
                                    unsigned char FAR *window);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Initialize the internal stream state for decompression using <a href="../api/#inflateBack">inflateBack</a>()
   calls.  The fields zalloc, zfree and opaque in strm must be initialized
   before the call.  If zalloc and zfree are Z_NULL, then the default library-
   derived memory allocation routines are used.  windowBits is the base two
   logarithm of the window size, in the range 8..15.  window is a caller
   supplied buffer of that size.  Except for special applications where it is
   assured that deflate was used with small window sizes, windowBits must be 15
   and a 32K byte window must be supplied to be able to decompress general
   deflate streams.

     See <a href="../api/#inflateBack">inflateBack</a>() for the usage of these routines.

     <a href="../api/#inflateBackInit">inflateBackInit</a> will return Z_OK on success, Z_STREAM_ERROR if any of
   the parameters are invalid, Z_MEM_ERROR if the internal state could not be
   allocated, or Z_VERSION_ERROR if the version of the library does not match
   the version of the header file.
</div></div><h3 id="nav-89" data-editorial="navigation">inflateBack</h3><a id="inflateBack" data-editorial="anchor"></a><a id="in_func" data-editorial="anchor"></a><a id="out_func" data-editorial="anchor"></a><div data-zlib-block="89"><pre><code>

typedef unsigned (*in_func)(void FAR *,
                            z_const unsigned char FAR * FAR *);
typedef int (*out_func)(void FAR *, unsigned char FAR *, unsigned);

ZEXTERN int ZEXPORT inflateBack(z_streamp strm,
                                in_func in, void FAR *in_desc,
                                out_func out, void FAR *out_desc);
</code></pre></div><div data-zlib-block="90"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="../api/#inflateBack">inflateBack</a>() does a raw inflate with a single call using a call-back
   interface for input and output.  This is potentially more efficient than
   <a href="../api/#inflate">inflate</a>() for file i/o applications, in that it avoids copying between the
   output and the sliding window by simply making the window itself the output
   buffer.  <a href="../api/#inflate">inflate</a>() can be faster on modern CPUs when used with large
   buffers.  <a href="../api/#inflateBack">inflateBack</a>() trusts the application to not change the output
   buffer passed by the output function, at least until <a href="../api/#inflateBack">inflateBack</a>() returns.

     <a href="../api/#inflateBackInit">inflateBackInit</a>() must be called first to allocate the internal state
   and to initialize the state with the user-provided window buffer.
   <a href="../api/#inflateBack">inflateBack</a>() may then be used multiple times to inflate a complete, raw
   deflate stream with each call.  <a href="../api/#inflateBackEnd">inflateBackEnd</a>() is then called to free the
   allocated state.

     A raw deflate stream is one with no zlib or gzip header or trailer.
   This routine would normally be used in a utility that reads zip or gzip
   files and writes out uncompressed files.  The utility would decode the
   header and process the trailer on its own, hence this routine expects only
   the raw deflate stream to decompress.  This is different from the default
   behavior of <a href="../api/#inflate">inflate</a>(), which expects a zlib header and trailer around the
   deflate stream.

     <a href="../api/#inflateBack">inflateBack</a>() uses two subroutines supplied by the caller that are then
   called by <a href="../api/#inflateBack">inflateBack</a>() for input and output.  <a href="../api/#inflateBack">inflateBack</a>() calls those
   routines until it reads a complete deflate stream and writes out all of the
   uncompressed data, or until it encounters an error.  The function&#x27;s
   parameters and return types are defined above in the <a href="../api/#in_func">in_func</a> and <a href="../api/#out_func">out_func</a>
   typedefs.  <a href="../api/#inflateBack">inflateBack</a>() will call in(in_desc, &amp;buf) which should return the
   number of bytes of provided input, and a pointer to that input in buf.  If
   there is no input available, in() must return zero -- buf is ignored in that
   case -- and <a href="../api/#inflateBack">inflateBack</a>() will return a buffer error.  <a href="../api/#inflateBack">inflateBack</a>() will
   call out(out_desc, buf, len) to write the uncompressed data buf[0..len-1].
   out() should return zero on success, or non-zero on failure.  If out()
   returns non-zero, <a href="../api/#inflateBack">inflateBack</a>() will return with an error.  Neither in() nor
   out() are permitted to change the contents of the window provided to
   <a href="../api/#inflateBackInit">inflateBackInit</a>(), which is also the buffer that out() uses to write from.
   The length written by out() will be at most the window size.  Any non-zero
   amount of input may be provided by in().

     For convenience, <a href="../api/#inflateBack">inflateBack</a>() can be provided input on the first call by
   setting strm-&gt;next_in and strm-&gt;avail_in.  If that input is exhausted, then
   in() will be called.  Therefore strm-&gt;next_in must be initialized before
   calling <a href="../api/#inflateBack">inflateBack</a>().  If strm-&gt;next_in is Z_NULL, then in() will be called
   immediately for input.  If strm-&gt;next_in is not Z_NULL, then strm-&gt;avail_in
   must also be initialized, and then if strm-&gt;avail_in is not zero, input will
   initially be taken from strm-&gt;next_in[0 ..  strm-&gt;avail_in - 1].

     The in_desc and out_desc parameters of <a href="../api/#inflateBack">inflateBack</a>() is passed as the
   first parameter of in() and out() respectively when they are called.  These
   descriptors can be optionally used to pass any information that the caller-
   supplied in() and out() functions need to do their job.

     On return, <a href="../api/#inflateBack">inflateBack</a>() will set strm-&gt;next_in and strm-&gt;avail_in to
   pass back any unused input that was provided by the last in() call.  The
   return values of <a href="../api/#inflateBack">inflateBack</a>() can be Z_STREAM_END on success, Z_BUF_ERROR
   if in() or out() returned an error, Z_DATA_ERROR if there was a format error
   in the deflate stream (in which case strm-&gt;msg is set to indicate the nature
   of the error), or Z_STREAM_ERROR if the stream was not properly initialized.
   In the case of Z_BUF_ERROR, an input or output error can be distinguished
   using strm-&gt;next_in which will be Z_NULL only if in() returned an error.  If
   strm-&gt;next_in is not Z_NULL, then the Z_BUF_ERROR was due to out() returning
   non-zero.  (in() will always be called before out(), so strm-&gt;next_in is
   assured to be defined if out() returns non-zero.)  Note that <a href="../api/#inflateBack">inflateBack</a>()
   cannot return Z_OK.
</div></div><h3 id="nav-91" data-editorial="navigation">inflateBackEnd</h3><a id="inflateBackEnd" data-editorial="anchor"></a><div data-zlib-block="91"><pre><code>

ZEXTERN int ZEXPORT inflateBackEnd(z_streamp strm);
</code></pre></div><div data-zlib-block="92"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     All memory allocated by <a href="../api/#inflateBackInit">inflateBackInit</a>() is freed.

     <a href="../api/#inflateBackEnd">inflateBackEnd</a>() returns Z_OK on success, or Z_STREAM_ERROR if the stream
   state was inconsistent.
</div></div><h3 id="nav-93" data-editorial="navigation">zlibCompileFlags</h3><a id="zlibCompileFlags" data-editorial="anchor"></a><div data-zlib-block="93"><pre><code>

ZEXTERN uLong ZEXPORT zlibCompileFlags(void);
</code></pre></div><div data-zlib-block="94"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> Return flags indicating compile-time options.
</div><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><div style="white-space:pre-wrap;overflow-wrap:anywhere">    Type sizes, two bits each, 00 = 16 bits, 01 = 32, 10 = 64, 11 = other:
</div><table><tbody><tr><td style="white-space:pre-wrap">     1.0:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> size of uInt
</td></tr><tr><td style="white-space:pre-wrap">     3.2:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> size of uLong
</td></tr><tr><td style="white-space:pre-wrap">     5.4:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> size of voidpf (pointer)
</td></tr><tr><td style="white-space:pre-wrap">     7.6:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> size of z_off_t
</td></tr></tbody></table><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><div style="white-space:pre-wrap;overflow-wrap:anywhere">    Compiler, assembler, and debug options:
</div><table><tbody><tr><td style="white-space:pre-wrap">     8:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> ZLIB_DEBUG
</td></tr><tr><td style="white-space:pre-wrap">     9:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> ASMV or ASMINF -- use ASM code
</td></tr><tr><td style="white-space:pre-wrap">     10:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> ZLIB_WINAPI -- exported functions use the WINAPI calling convention
</td></tr><tr><td style="white-space:pre-wrap">     11:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> 0 (reserved)
</td></tr></tbody></table><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><div style="white-space:pre-wrap;overflow-wrap:anywhere">    One-time table building (smaller code, but not thread-safe if true):
</div><table><tbody><tr><td style="white-space:pre-wrap">     12:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> BUILDFIXED -- build static block decoding tables when needed
</td></tr><tr><td style="white-space:pre-wrap">     13:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> DYNAMIC_CRC_TABLE -- build CRC calculation tables when needed
</td></tr><tr><td style="white-space:pre-wrap">     14,15:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> 0 (reserved)
</td></tr></tbody></table><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><div style="white-space:pre-wrap;overflow-wrap:anywhere">    Library content (indicates missing functionality):
</div><table><tbody><tr><td style="white-space:pre-wrap">     16:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> NO_GZCOMPRESS -- gz* functions cannot compress (to avoid linking
                          deflate code when not needed)
</td></tr><tr><td style="white-space:pre-wrap">     17:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> NO_GZIP -- deflate can&#x27;t write gzip streams, and inflate can&#x27;t detect
                    and decode gzip streams (to avoid linking crc code)
</td></tr><tr><td style="white-space:pre-wrap">     18-19:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> 0 (reserved)
</td></tr></tbody></table><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><div style="white-space:pre-wrap;overflow-wrap:anywhere">    Operation variations (changes in library functionality):
</div><table><tbody><tr><td style="white-space:pre-wrap">     20:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> PKZIP_BUG_WORKAROUND -- slightly more permissive inflate
</td></tr><tr><td style="white-space:pre-wrap">     21:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> FASTEST -- deflate algorithm with only one, lowest compression level
</td></tr><tr><td style="white-space:pre-wrap">     22,23:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> 0 (reserved)
</td></tr></tbody></table><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><div style="white-space:pre-wrap;overflow-wrap:anywhere">    The sprintf variant used by <a href="../api/#gzprintf">gzprintf</a> (all zeros is best):
</div><table><tbody><tr><td style="white-space:pre-wrap">     24:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> 0 = vs*, 1 = s* -- 1 means limited to 20 arguments after the format
</td></tr><tr><td style="white-space:pre-wrap">     25:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> 0 = *nprintf, 1 = *printf -- 1 means <a href="../api/#gzprintf">gzprintf</a>() is not secure!
</td></tr><tr><td style="white-space:pre-wrap">     26:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> 0 = returns value, 1 = void -- 1 means inferred string length returned
</td></tr><tr><td style="white-space:pre-wrap">     27:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> 0 = <a href="../api/#gzprintf">gzprintf</a>() present, 1 = not -- 1 means <a href="../api/#gzprintf">gzprintf</a>() returns an error
</td></tr></tbody></table><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><div style="white-space:pre-wrap;overflow-wrap:anywhere">    Remainder:
</div><table><tbody><tr><td style="white-space:pre-wrap">     28-31:</td><td style="white-space:pre-wrap;overflow-wrap:anywhere"> 0 (reserved)
</td></tr></tbody></table><div style="white-space:pre-wrap;overflow-wrap:anywhere"> </div></div><div data-zlib-block="95"><pre><code>

#ifndef Z_SOLO

                        </code></pre></div><h2 id="section-96" data-editorial="navigation">utility functions</h2><div data-zlib-block="96"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> utility functions </div></div><div data-zlib-block="97"><pre><code>

</code></pre></div><div data-zlib-block="98"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     The following utility functions are implemented on top of the basic
   stream-oriented functions.  To simplify the interface, some default options
   are assumed (compression level and memory usage, standard memory allocation
   functions).  The source code of these utility functions can be modified if
   you need special options.  The _z versions of the functions use the size_t
   type for lengths.  Note that a long is 32 bits on Windows.
</div></div><h3 id="nav-99" data-editorial="navigation">compress</h3><a id="compress" data-editorial="anchor"></a><a id="compress_z" data-editorial="anchor"></a><div data-zlib-block="99"><pre><code>

ZEXTERN int ZEXPORT compress(Bytef *dest, uLongf *destLen,
                             const Bytef *source, uLong sourceLen);
ZEXTERN int ZEXPORT compress_z(Bytef *dest, z_size_t *destLen,
                               const Bytef *source, z_size_t sourceLen);
</code></pre></div><div data-zlib-block="100"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Compresses the source buffer into the destination buffer.  sourceLen is
   the byte length of the source buffer.  Upon entry, destLen is the total size
   of the destination buffer, which must be at least the value returned by
   <a href="../api/#compressBound">compressBound</a>(sourceLen).  Upon exit, destLen is the actual size of the
   compressed data.  <a href="../api/#compress">compress</a>() is equivalent to <a href="../api/#compress2">compress2</a>() with a level
   parameter of Z_DEFAULT_COMPRESSION.

     <a href="../api/#compress">compress</a> returns Z_OK if success, Z_MEM_ERROR if there was not
   enough memory, Z_BUF_ERROR if there was not enough room in the output
   buffer.
</div></div><h3 id="nav-101" data-editorial="navigation">compress2</h3><a id="compress2" data-editorial="anchor"></a><a id="compress2_z" data-editorial="anchor"></a><div data-zlib-block="101"><pre><code>

ZEXTERN int ZEXPORT compress2(Bytef *dest, uLongf *destLen,
                              const Bytef *source, uLong sourceLen,
                              int level);
ZEXTERN int ZEXPORT compress2_z(Bytef *dest, z_size_t *destLen,
                                const Bytef *source, z_size_t sourceLen,
                                int level);
</code></pre></div><div data-zlib-block="102"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Compresses the source buffer into the destination buffer.  The level
   parameter has the same meaning as in <a href="../api/#deflateInit">deflateInit</a>.  sourceLen is the byte
   length of the source buffer.  Upon entry, destLen is the total size of the
   destination buffer, which must be at least the value returned by
   <a href="../api/#compressBound">compressBound</a>(sourceLen).  Upon exit, destLen is the actual size of the
   compressed data.

     <a href="../api/#compress2">compress2</a> returns Z_OK if success, Z_MEM_ERROR if there was not enough
   memory, Z_BUF_ERROR if there was not enough room in the output buffer,
   Z_STREAM_ERROR if the level parameter is invalid.
</div></div><h3 id="nav-103" data-editorial="navigation">compressBound</h3><a id="compressBound" data-editorial="anchor"></a><a id="compressBound_z" data-editorial="anchor"></a><div data-zlib-block="103"><pre><code>

ZEXTERN uLong ZEXPORT compressBound(uLong sourceLen);
ZEXTERN z_size_t ZEXPORT compressBound_z(z_size_t sourceLen);
</code></pre></div><div data-zlib-block="104"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     <a href="../api/#compressBound">compressBound</a>() returns an upper bound on the compressed size after
   <a href="../api/#compress">compress</a>() or <a href="../api/#compress2">compress2</a>() on sourceLen bytes.  It would be used before a
   <a href="../api/#compress">compress</a>() or <a href="../api/#compress2">compress2</a>() call to allocate the destination buffer.
</div></div><h3 id="nav-105" data-editorial="navigation">uncompress</h3><a id="uncompress" data-editorial="anchor"></a><a id="uncompress_z" data-editorial="anchor"></a><div data-zlib-block="105"><pre><code>

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

     <a href="../api/#uncompress">uncompress</a> returns Z_OK if success, Z_MEM_ERROR if there was not
   enough memory, Z_BUF_ERROR if there was not enough room in the output
   buffer, or Z_DATA_ERROR if the input data was corrupted or incomplete.  In
   the case where there is not enough room, <a href="../api/#uncompress">uncompress</a>() will fill the output
   buffer with the uncompressed data up to that point.
</div></div><h3 id="nav-107" data-editorial="navigation">uncompress2</h3><a id="uncompress2" data-editorial="anchor"></a><a id="uncompress2_z" data-editorial="anchor"></a><div data-zlib-block="107"><pre><code>

ZEXTERN int ZEXPORT uncompress2(Bytef *dest, uLongf *destLen,
                                const Bytef *source, uLong *sourceLen);
ZEXTERN int ZEXPORT uncompress2_z(Bytef *dest, z_size_t *destLen,
                                  const Bytef *source, z_size_t *sourceLen);
</code></pre></div><div data-zlib-block="108"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Same as uncompress, except that sourceLen is a pointer, where the
   length of the source is *sourceLen.  On return, *sourceLen is the number of
   source bytes consumed.
</div></div><div data-zlib-block="109"><pre><code>

                        </code></pre></div><h2 id="section-110" data-editorial="navigation">gzip file access functions</h2><div data-zlib-block="110"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> gzip file access functions </div></div><div data-zlib-block="111"><pre><code>

</code></pre></div><div data-zlib-block="112"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     This library supports reading and writing files in gzip (.gz) format with
   an interface similar to that of stdio, using the functions that start with
   &quot;gz&quot;.  The gzip format is different from the zlib format.  gzip is a gzip
   wrapper, documented in RFC 1952, wrapped around a deflate stream.
</div></div><a id="gzFile" data-editorial="anchor"></a><div data-zlib-block="113"><pre><code>

typedef struct gzFile_s *gzFile;    /* semi-opaque gzip file descriptor */

</code></pre></div><h3 id="nav-114" data-editorial="navigation">gzopen</h3><a id="gzopen" data-editorial="anchor"></a><div data-zlib-block="114"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN gzFile ZEXPORT gzopen(const char *path, const char *mode);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Open the gzip (.gz) file at path for reading and decompressing, or
   compressing and writing.  The mode parameter is as in fopen (&quot;rb&quot; or &quot;wb&quot;)
   but can also include a compression level (&quot;wb9&quot;) or a strategy: &#x27;f&#x27; for
   filtered data as in &quot;wb6f&quot;, &#x27;h&#x27; for Huffman-only compression as in &quot;wb1h&quot;,
   &#x27;R&#x27; for run-length encoding as in &quot;wb1R&quot;, or &#x27;F&#x27; for fixed code compression
   as in &quot;wb9F&quot;.  (See the description of <a href="../api/#deflateInit2">deflateInit2</a> for more information
   about the strategy parameter.)  &#x27;T&#x27; will request transparent writing or
   appending with no compression and not using the gzip format. &#x27;T&#x27; cannot be
   used to force transparent reading. Transparent reading is automatically
   performed if there is no gzip header at the start. Transparent reading can
   be disabled with the &#x27;G&#x27; option, which will instead return an error if there
   is no gzip header. &#x27;N&#x27; will open the file in non-blocking mode.

     &#x27;a&#x27; can be used instead of &#x27;w&#x27; to request that the gzip stream that will
   be written be appended to the file.  &#x27;+&#x27; will result in an error, since
   reading and writing to the same gzip file is not supported.  The addition of
   &#x27;x&#x27; when writing will create the file exclusively, which fails if the file
   already exists.  On systems that support it, the addition of &#x27;e&#x27; when
   reading or writing will set the flag to close the file on an execve() call.

     These functions, as well as gzip, will read and decode a sequence of gzip
   streams in a file.  The append function of <a href="../api/#gzopen">gzopen</a>() can be used to create
   such a file.  (Also see <a href="../api/#gzflush">gzflush</a>() for another way to do this.)  When
   appending, <a href="../api/#gzopen">gzopen</a> does not test whether the file begins with a gzip stream,
   nor does it look for the end of the gzip streams to begin appending.  <a href="../api/#gzopen">gzopen</a>
   will simply append a gzip stream to the existing file.

     <a href="../api/#gzopen">gzopen</a> can be used to read a file which is not in gzip format; in this
   case <a href="../api/#gzread">gzread</a> will directly read from the file without decompression.  When
   reading, this will be detected automatically by looking for the magic two-
   byte gzip header.

     <a href="../api/#gzopen">gzopen</a> returns NULL if the file could not be opened, if there was
   insufficient memory to allocate the <a href="../api/#gzFile">gzFile</a> state, or if an invalid mode was
   specified (an &#x27;r&#x27;, &#x27;w&#x27;, or &#x27;a&#x27; was not provided, or &#x27;+&#x27; was provided).
   errno can be checked to determine if the reason <a href="../api/#gzopen">gzopen</a> failed was that the
   file could not be opened. Note that if &#x27;N&#x27; is in mode for non-blocking, the
   open() itself can fail in order to not block. In that case <a href="../api/#gzopen">gzopen</a>() will
   return NULL and errno will be EAGAIN or ENONBLOCK. The call to <a href="../api/#gzopen">gzopen</a>() can
   then be re-tried. If the application would like to block on opening the
   file, then it can use open() without O_NONBLOCK, and then <a href="../api/#gzdopen">gzdopen</a>() with the
   resulting file descriptor and &#x27;N&#x27; in the mode, which will set it to non-
   blocking.
</div></div><h3 id="nav-115" data-editorial="navigation">gzdopen</h3><a id="gzdopen" data-editorial="anchor"></a><div data-zlib-block="115"><pre><code>

ZEXTERN gzFile ZEXPORT gzdopen(int fd, const char *mode);
</code></pre></div><div data-zlib-block="116"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Associate a <a href="../api/#gzFile">gzFile</a> with the file descriptor fd.  File descriptors are
   obtained from calls like open, dup, creat, pipe or fileno (if the file has
   been previously opened with fopen).  The mode parameter is as in <a href="../api/#gzopen">gzopen</a>. An
   &#x27;e&#x27; in mode will set fd&#x27;s flag to close the file on an execve() call. An &#x27;N&#x27;
   in mode will set fd&#x27;s non-blocking flag.

     The next call of <a href="../api/#gzclose">gzclose</a> on the returned <a href="../api/#gzFile">gzFile</a> will also close the file
   descriptor fd, just like fclose(fdopen(fd, mode)) closes the file descriptor
   fd.  If you want to keep fd open, use fd = dup(fd_keep); gz = <a href="../api/#gzdopen">gzdopen</a>(fd,
   mode);.  The duplicated descriptor should be saved to avoid a leak, since
   <a href="../api/#gzdopen">gzdopen</a> does not close fd if it fails.  If you are using fileno() to get the
   file descriptor from a FILE *, then you will have to use dup() to avoid
   double-close()ing the file descriptor.  Both <a href="../api/#gzclose">gzclose</a>() and fclose() will
   close the associated file descriptor, so they need to have different file
   descriptors.

     <a href="../api/#gzdopen">gzdopen</a> returns NULL if there was insufficient memory to allocate the
   <a href="../api/#gzFile">gzFile</a> state, if an invalid mode was specified (an &#x27;r&#x27;, &#x27;w&#x27;, or &#x27;a&#x27; was not
   provided, or &#x27;+&#x27; was provided), or if fd is -1.  The file descriptor is not
   used until the next gz* read, write, seek, or close operation, so <a href="../api/#gzdopen">gzdopen</a>
   will not detect if fd is invalid (unless fd is -1).
</div></div><h3 id="nav-117" data-editorial="navigation">gzbuffer</h3><a id="gzbuffer" data-editorial="anchor"></a><div data-zlib-block="117"><pre><code>

ZEXTERN int ZEXPORT gzbuffer(gzFile file, unsigned size);
</code></pre></div><div data-zlib-block="118"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Set the internal buffer size used by this library&#x27;s functions for file to
   size.  The default buffer size is 8192 bytes.  This function must be called
   after <a href="../api/#gzopen">gzopen</a>() or <a href="../api/#gzdopen">gzdopen</a>(), and before any other calls that read or write
   the file.  The buffer memory allocation is always deferred to the first read
   or write.  Three times that size in buffer space is allocated.  A larger
   buffer size of, for example, 64K or 128K bytes will noticeably increase the
   speed of decompression (reading).

     The new buffer size also affects the maximum length for <a href="../api/#gzprintf">gzprintf</a>().

     <a href="../api/#gzbuffer">gzbuffer</a>() returns 0 on success, or -1 on failure, such as being called
   too late.
</div></div><h3 id="nav-119" data-editorial="navigation">gzsetparams</h3><a id="gzsetparams" data-editorial="anchor"></a><div data-zlib-block="119"><pre><code>

ZEXTERN int ZEXPORT gzsetparams(gzFile file, int level, int strategy);
</code></pre></div><div data-zlib-block="120"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Dynamically update the compression level and strategy for file.  See the
   description of <a href="../api/#deflateInit2">deflateInit2</a> for the meaning of these parameters. Previously
   provided data is flushed before applying the parameter changes.

     <a href="../api/#gzsetparams">gzsetparams</a> returns Z_OK if success, Z_STREAM_ERROR if the file was not
   opened for writing, Z_ERRNO if there is an error writing the flushed data,
   or Z_MEM_ERROR if there is a memory allocation error.
</div></div><h3 id="nav-121" data-editorial="navigation">gzread</h3><a id="gzread" data-editorial="anchor"></a><div data-zlib-block="121"><pre><code>

ZEXTERN int ZEXPORT gzread(gzFile file, voidp buf, unsigned len);
</code></pre></div><div data-zlib-block="122"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Read and decompress up to len uncompressed bytes from file into buf.  If
   the input file is not in gzip format, <a href="../api/#gzread">gzread</a> copies the given number of
   bytes into the buffer directly from the file.

     After reaching the end of a gzip stream in the input, <a href="../api/#gzread">gzread</a> will continue
   to read, looking for another gzip stream.  Any number of gzip streams may be
   concatenated in the input file, and will all be decompressed by <a href="../api/#gzread">gzread</a>().
   If something other than a gzip stream is encountered after a gzip stream,
   that remaining trailing garbage is ignored (and no error is returned).

     <a href="../api/#gzread">gzread</a> can be used to read a gzip file that is being concurrently written.
   Upon reaching the end of the input, <a href="../api/#gzread">gzread</a> will return with the available
   data.  If the error code returned by <a href="../api/#gzerror">gzerror</a> is Z_OK or Z_BUF_ERROR, then
   <a href="../api/#gzclearerr">gzclearerr</a> can be used to clear the end of file indicator in order to permit
   <a href="../api/#gzread">gzread</a> to be tried again.  Z_OK indicates that a gzip stream was completed
   on the last <a href="../api/#gzread">gzread</a>.  Z_BUF_ERROR indicates that the input file ended in the
   middle of a gzip stream.  Note that <a href="../api/#gzread">gzread</a> does not return -1 in the event
   of an incomplete gzip stream.  This error is deferred until <a href="../api/#gzclose">gzclose</a>(), which
   will return Z_BUF_ERROR if the last <a href="../api/#gzread">gzread</a> ended in the middle of a gzip
   stream.  Alternatively, <a href="../api/#gzerror">gzerror</a> can be used before <a href="../api/#gzclose">gzclose</a> to detect this
   case.

     <a href="../api/#gzread">gzread</a> can be used to read a gzip file on a non-blocking device. If the
   input stalls and there is no uncompressed data to return, then <a href="../api/#gzread">gzread</a>() will
   return -1, and errno will be EAGAIN or EWOULDBLOCK. <a href="../api/#gzread">gzread</a>() can then be
   called again.

     <a href="../api/#gzread">gzread</a> returns the number of uncompressed bytes actually read, less than
   len for end of file, or -1 for error.  If len is too large to fit in an int,
   then nothing is read, -1 is returned, and the error state is set to
   Z_STREAM_ERROR. If some data was read before an error, then that data is
   returned until exhausted, after which the next call will signal the error.
</div></div><h3 id="nav-123" data-editorial="navigation">gzfread</h3><a id="gzfread" data-editorial="anchor"></a><div data-zlib-block="123"><pre><code>

ZEXTERN z_size_t ZEXPORT gzfread(voidp buf, z_size_t size, z_size_t nitems,
                                 gzFile file);
</code></pre></div><div data-zlib-block="124"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Read and decompress up to nitems items of size size from file into buf,
   otherwise operating as <a href="../api/#gzread">gzread</a>() does.  This duplicates the interface of
   stdio&#x27;s fread(), with size_t request and return types.  If the library
   defines size_t, then z_size_t is identical to size_t.  If not, then z_size_t
   is an unsigned integer type that can contain a pointer.

     <a href="../api/#gzfread">gzfread</a>() returns the number of full items read of size size, or zero if
   the end of the file was reached and a full item could not be read, or if
   there was an error.  <a href="../api/#gzerror">gzerror</a>() must be consulted if zero is returned in
   order to determine if there was an error.  If the multiplication of size and
   nitems overflows, i.e. the product does not fit in a z_size_t, then nothing
   is read, zero is returned, and the error state is set to Z_STREAM_ERROR.

     In the event that the end of file is reached and only a partial item is
   available at the end, i.e. the remaining uncompressed data length is not a
   multiple of size, then the final partial item is nevertheless read into buf
   and the end-of-file flag is set.  The length of the partial item read is not
   provided, but could be inferred from the result of <a href="../api/#gztell">gztell</a>().  This behavior
   is the same as that of fread() implementations in common libraries. This
   could result in data loss if used with size != 1 when reading a concurrently
   written file or a non-blocking file. In that case, use size == 1 or <a href="../api/#gzread">gzread</a>()
   instead.
</div></div><h3 id="nav-125" data-editorial="navigation">gzwrite</h3><a id="gzwrite" data-editorial="anchor"></a><div data-zlib-block="125"><pre><code>

ZEXTERN int ZEXPORT gzwrite(gzFile file, voidpc buf, unsigned len);
</code></pre></div><div data-zlib-block="126"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Compress and write the len uncompressed bytes at buf to file. <a href="../api/#gzwrite">gzwrite</a>
   returns the number of uncompressed bytes written, or 0 in case of error or
   if len is 0.  If the write destination is non-blocking, then <a href="../api/#gzwrite">gzwrite</a>() may
   return a number of bytes written that is not 0 and less than len.

     If len does not fit in an int, then 0 is returned and nothing is written.
</div></div><h3 id="nav-127" data-editorial="navigation">gzfwrite</h3><a id="gzfwrite" data-editorial="anchor"></a><div data-zlib-block="127"><pre><code>

ZEXTERN z_size_t ZEXPORT gzfwrite(voidpc buf, z_size_t size,
                                  z_size_t nitems, gzFile file);
</code></pre></div><div data-zlib-block="128"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Compress and write nitems items of size size from buf to file, duplicating
   the interface of stdio&#x27;s fwrite(), with size_t request and return types.  If
   the library defines size_t, then z_size_t is identical to size_t.  If not,
   then z_size_t is an unsigned integer type that can contain a pointer.

     <a href="../api/#gzfwrite">gzfwrite</a>() returns the number of full items written of size size, or zero
   if there was an error.  If the multiplication of size and nitems overflows,
   i.e. the product does not fit in a z_size_t, then nothing is written, zero
   is returned, and the error state is set to Z_STREAM_ERROR.

     If writing a concurrently read file or a non-blocking file with size != 1,
   a partial item could be written, with no way of knowing how much of it was
   not written, resulting in data loss.  In that case, use size == 1 or
   <a href="../api/#gzwrite">gzwrite</a>() instead.
</div></div><h3 id="nav-129" data-editorial="navigation">gzprintf</h3><a id="gzprintf" data-editorial="anchor"></a><div data-zlib-block="129"><pre><code>

#if defined(STDC) || defined(Z_HAVE_STDARG_H)
ZEXTERN int ZEXPORTVA gzprintf(gzFile file, const char *format, ...);
#else
ZEXTERN int ZEXPORTVA gzprintf();
#endif
</code></pre></div><div data-zlib-block="130"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Convert, format, compress, and write the arguments (...) to file under
   control of the string format, as in fprintf.  <a href="../api/#gzprintf">gzprintf</a> returns the number of
   uncompressed bytes actually written, or a negative zlib error code in case
   of error.  The number of uncompressed bytes written is limited to 8191, or
   one less than the buffer size given to <a href="../api/#gzbuffer">gzbuffer</a>().  The caller should assure
   that this limit is not exceeded.  If it is exceeded, then <a href="../api/#gzprintf">gzprintf</a>() will
   return an error (0) with nothing written.

     In that last case, there may also be a buffer overflow with unpredictable
   consequences, which is possible only if zlib was compiled with the insecure
   functions sprintf() or vsprintf(), because the secure snprintf() and
   vsnprintf() functions were not available. That would only be the case for
   a non-ANSI C compiler. zlib may have been built without <a href="../api/#gzprintf">gzprintf</a>() because
   secure functions were not available and having <a href="../api/#gzprintf">gzprintf</a>() be insecure was
   not an option, in which case, <a href="../api/#gzprintf">gzprintf</a>() returns Z_STREAM_ERROR. All of
   these possibilities can be determined using <a href="../api/#zlibCompileFlags">zlibCompileFlags</a>().

     If a Z_BUF_ERROR is returned, then nothing was written due to a stall on
   the non-blocking write destination.
</div></div><h3 id="nav-131" data-editorial="navigation">gzputs</h3><a id="gzputs" data-editorial="anchor"></a><div data-zlib-block="131"><pre><code>

ZEXTERN int ZEXPORT gzputs(gzFile file, const char *s);
</code></pre></div><div data-zlib-block="132"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Compress and write the given null-terminated string s to file, excluding
   the terminating null character.

     <a href="../api/#gzputs">gzputs</a> returns the number of characters written, or -1 in case of error.
   The number of characters written may be less than the length of the string
   if the write destination is non-blocking.

     If the length of the string does not fit in an int, then -1 is returned
   and nothing is written.
</div></div><h3 id="nav-133" data-editorial="navigation">gzgets</h3><a id="gzgets" data-editorial="anchor"></a><div data-zlib-block="133"><pre><code>

ZEXTERN char * ZEXPORT gzgets(gzFile file, char *buf, int len);
</code></pre></div><div data-zlib-block="134"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Read and decompress bytes from file into buf, until len-1 characters are
   read, or until a newline character is read and transferred to buf, or an
   end-of-file condition is encountered.  If any characters are read or if len
   is one, the string is terminated with a null character.  If no characters
   are read due to an end-of-file or len is less than one, then the buffer is
   left untouched.

     <a href="../api/#gzgets">gzgets</a> returns buf which is a null-terminated string, or it returns NULL
   for end-of-file or in case of error. If some data was read before an error,
   then that data is returned until exhausted, after which the next call will
   return NULL to signal the error.

     <a href="../api/#gzgets">gzgets</a> can be used on a file being concurrently written, and on a non-
   blocking device, both as for <a href="../api/#gzread">gzread</a>(). However lines may be broken in the
   middle, leaving it up to the application to reassemble them as needed.
</div></div><h3 id="nav-135" data-editorial="navigation">gzputc</h3><a id="gzputc" data-editorial="anchor"></a><div data-zlib-block="135"><pre><code>

ZEXTERN int ZEXPORT gzputc(gzFile file, int c);
</code></pre></div><div data-zlib-block="136"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Compress and write c, converted to an unsigned char, into file.  <a href="../api/#gzputc">gzputc</a>
   returns the value that was written, or -1 in case of error.
</div></div><h3 id="nav-137" data-editorial="navigation">gzgetc</h3><a id="gzgetc" data-editorial="anchor"></a><div data-zlib-block="137"><pre><code>

ZEXTERN int ZEXPORT gzgetc(gzFile file);
</code></pre></div><div data-zlib-block="138"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Read and decompress one byte from file. <a href="../api/#gzgetc">gzgetc</a> returns this byte or -1 in
   case of end of file or error. If some data was read before an error, then
   that data is returned until exhausted, after which the next call will return
   -1 to signal the error.

     This is implemented as a macro for speed. As such, it does not do all of
   the checking the other functions do. I.e. it does not check to see if file
   is NULL, nor whether the structure file points to has been clobbered or not.

     <a href="../api/#gzgetc">gzgetc</a> can be used to read a gzip file on a non-blocking device. If the
   input stalls and there is no uncompressed data to return, then <a href="../api/#gzgetc">gzgetc</a>() will
   return -1, and errno will be EAGAIN or EWOULDBLOCK. <a href="../api/#gzread">gzread</a>() can then be
   called again.
</div></div><h3 id="nav-139" data-editorial="navigation">gzungetc</h3><a id="gzungetc" data-editorial="anchor"></a><div data-zlib-block="139"><pre><code>

ZEXTERN int ZEXPORT gzungetc(int c, gzFile file);
</code></pre></div><div data-zlib-block="140"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Push c back onto the stream for file to be read as the first character on
   the next read.  At least one character of push-back is always allowed.
   <a href="../api/#gzungetc">gzungetc</a>() returns the character pushed, or -1 on failure.  <a href="../api/#gzungetc">gzungetc</a>() will
   fail if c is -1, and may fail if a character has been pushed but not read
   yet.  If <a href="../api/#gzungetc">gzungetc</a> is used immediately after <a href="../api/#gzopen">gzopen</a> or <a href="../api/#gzdopen">gzdopen</a>, at least the
   output buffer size of pushed characters is allowed.  (See <a href="../api/#gzbuffer">gzbuffer</a> above.)
   The pushed character will be discarded if the stream is repositioned with
   <a href="../api/#gzseek">gzseek</a>() or <a href="../api/#gzrewind">gzrewind</a>().

     <a href="../api/#gzungetc">gzungetc</a>(-1, file) will force any pending seek to execute. Then <a href="../api/#gztell">gztell</a>()
   will report the position, even if the requested seek reached end of file.
   This can be used to determine the number of uncompressed bytes in a gzip
   file without having to read it into a buffer.
</div></div><h3 id="nav-141" data-editorial="navigation">gzflush</h3><a id="gzflush" data-editorial="anchor"></a><div data-zlib-block="141"><pre><code>

ZEXTERN int ZEXPORT gzflush(gzFile file, int flush);
</code></pre></div><div data-zlib-block="142"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Flush all pending output to file.  The parameter flush is as in the
   <a href="../api/#deflate">deflate</a>() function.  The return value is the zlib error number (see function
   <a href="../api/#gzerror">gzerror</a> below).  <a href="../api/#gzflush">gzflush</a> is only permitted when writing.

     If the flush parameter is Z_FINISH, the remaining data is written and the
   gzip stream is completed in the output.  If <a href="../api/#gzwrite">gzwrite</a>() is called again, a new
   gzip stream will be started in the output.  <a href="../api/#gzread">gzread</a>() is able to read such
   concatenated gzip streams.

     <a href="../api/#gzflush">gzflush</a> should be called only when strictly necessary because it will
   degrade compression if called too often.
</div></div><div data-zlib-block="143"><pre><code>

</code></pre></div><h3 id="nav-144" data-editorial="navigation">gzseek</h3><a id="gzseek" data-editorial="anchor"></a><div data-zlib-block="144"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN z_off_t ZEXPORT gzseek(gzFile file,
                               z_off_t offset, int whence);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Set the starting position to offset relative to whence for the next <a href="../api/#gzread">gzread</a>
   or <a href="../api/#gzwrite">gzwrite</a> on file.  The offset represents a number of bytes in the
   uncompressed data stream.  The whence parameter is defined as in lseek(2);
   the value SEEK_END is not supported.

     If the file is opened for reading, this function is emulated but can be
   extremely slow.  If the file is opened for writing, only forward seeks are
   supported; <a href="../api/#gzseek">gzseek</a> then compresses a sequence of zeroes up to the new
   starting position. For reading or writing, any actual seeking is deferred
   until the next read or write operation, or close operation when writing.

     <a href="../api/#gzseek">gzseek</a> returns the resulting offset location as measured in bytes from
   the beginning of the uncompressed stream, or -1 in case of error, in
   particular if the file is opened for writing and the new starting position
   would be before the current position.
</div></div><h3 id="nav-145" data-editorial="navigation">gzrewind</h3><a id="gzrewind" data-editorial="anchor"></a><div data-zlib-block="145"><pre><code>

ZEXTERN int ZEXPORT gzrewind(gzFile file);
</code></pre></div><div data-zlib-block="146"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Rewind file. This function is supported only for reading.

     <a href="../api/#gzrewind">gzrewind</a>(file) is equivalent to (int)<a href="../api/#gzseek">gzseek</a>(file, 0L, SEEK_SET).
</div></div><div data-zlib-block="147"><pre><code>

</code></pre></div><h3 id="nav-148" data-editorial="navigation">gztell</h3><a id="gztell" data-editorial="anchor"></a><div data-zlib-block="148"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN z_off_t ZEXPORT gztell(gzFile file);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Return the starting position for the next <a href="../api/#gzread">gzread</a> or <a href="../api/#gzwrite">gzwrite</a> on file.
   This position represents a number of bytes in the uncompressed data stream,
   and is zero when starting, even if appending or reading a gzip stream from
   the middle of a file using <a href="../api/#gzdopen">gzdopen</a>().

     <a href="../api/#gztell">gztell</a>(file) is equivalent to <a href="../api/#gzseek">gzseek</a>(file, 0L, SEEK_CUR)
</div></div><div data-zlib-block="149"><pre><code>

</code></pre></div><h3 id="nav-150" data-editorial="navigation">gzoffset</h3><a id="gzoffset" data-editorial="anchor"></a><div data-zlib-block="150"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN z_off_t ZEXPORT gzoffset(gzFile file);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Return the current compressed (actual) read or write offset of file.  This
   offset includes the count of bytes that precede the gzip stream, for example
   when appending or when using <a href="../api/#gzdopen">gzdopen</a>() for reading.  When reading, the
   offset does not include as yet unused buffered input.  This information can
   be used for a progress indicator.  On error, <a href="../api/#gzoffset">gzoffset</a>() returns -1.
</div></div><h3 id="nav-151" data-editorial="navigation">gzeof</h3><a id="gzeof" data-editorial="anchor"></a><div data-zlib-block="151"><pre><code>

ZEXTERN int ZEXPORT gzeof(gzFile file);
</code></pre></div><div data-zlib-block="152"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Return true (1) if the end-of-file indicator for file has been set while
   reading, false (0) otherwise.  Note that the end-of-file indicator is set
   only if the read tried to go past the end of the input, but came up short.
   Therefore, just like feof(), <a href="../api/#gzeof">gzeof</a>() may return false even if there is no
   more data to read, in the event that the last read request was for the exact
   number of bytes remaining in the input file.  This will happen if the input
   file size is an exact multiple of the buffer size.

     If <a href="../api/#gzeof">gzeof</a>() returns true, then the read functions will return no more data,
   unless the end-of-file indicator is reset by <a href="../api/#gzclearerr">gzclearerr</a>() and the input file
   has grown since the previous end of file was detected.
</div></div><h3 id="nav-153" data-editorial="navigation">gzdirect</h3><a id="gzdirect" data-editorial="anchor"></a><div data-zlib-block="153"><pre><code>

ZEXTERN int ZEXPORT gzdirect(gzFile file);
</code></pre></div><div data-zlib-block="154"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Return true (1) if file is being copied directly while reading, or false
   (0) if file is a gzip stream being decompressed.

     If the input file is empty, <a href="../api/#gzdirect">gzdirect</a>() will return true, since the input
   does not contain a gzip stream.

     If <a href="../api/#gzdirect">gzdirect</a>() is used immediately after <a href="../api/#gzopen">gzopen</a>() or <a href="../api/#gzdopen">gzdopen</a>() it will
   cause buffers to be allocated to allow reading the file to determine if it
   is a gzip file. Therefore if <a href="../api/#gzbuffer">gzbuffer</a>() is used, it should be called before
   <a href="../api/#gzdirect">gzdirect</a>(). If the input is being written concurrently or the device is non-
   blocking, then <a href="../api/#gzdirect">gzdirect</a>() may give a different answer once four bytes of
   input have been accumulated, which is what is needed to confirm or deny a
   gzip header. Before this, <a href="../api/#gzdirect">gzdirect</a>() will return true (1).

     When writing, <a href="../api/#gzdirect">gzdirect</a>() returns true (1) if transparent writing was
   requested (&quot;wT&quot; for the <a href="../api/#gzopen">gzopen</a>() mode), or false (0) otherwise.  (Note:
   <a href="../api/#gzdirect">gzdirect</a>() is not needed when writing.  Transparent writing must be
   explicitly requested, so the application already knows the answer.  When
   linking statically, using <a href="../api/#gzdirect">gzdirect</a>() will include all of the zlib code for
   gzip file reading and decompression, which may not be desired.)
</div></div><h3 id="nav-155" data-editorial="navigation">gzclose</h3><a id="gzclose" data-editorial="anchor"></a><div data-zlib-block="155"><pre><code>

ZEXTERN int ZEXPORT gzclose(gzFile file);
</code></pre></div><div data-zlib-block="156"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Flush all pending output for file, if necessary, close file and
   deallocate the (de)compression state.  Note that once file is closed, you
   cannot call <a href="../api/#gzerror">gzerror</a> with file, since its structures have been deallocated.
   <a href="../api/#gzclose">gzclose</a> must not be called more than once on the same file, just as free
   must not be called more than once on the same allocation.

     <a href="../api/#gzclose">gzclose</a> will return Z_STREAM_ERROR if file is not valid, Z_ERRNO on a
   file operation error, Z_MEM_ERROR if out of memory, Z_BUF_ERROR if the
   last read ended in the middle of a gzip stream, or Z_OK on success.
</div></div><h3 id="nav-157" data-editorial="navigation">gzclose_r</h3><a id="gzclose_r" data-editorial="anchor"></a><a id="gzclose_w" data-editorial="anchor"></a><div data-zlib-block="157"><pre><code>

ZEXTERN int ZEXPORT gzclose_r(gzFile file);
ZEXTERN int ZEXPORT gzclose_w(gzFile file);
</code></pre></div><div data-zlib-block="158"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Same as <a href="../api/#gzclose">gzclose</a>(), but <a href="../api/#gzclose_r">gzclose_r</a>() is only for use when reading, and
   <a href="../api/#gzclose_w">gzclose_w</a>() is only for use when writing or appending.  The advantage to
   using these instead of <a href="../api/#gzclose">gzclose</a>() is that they avoid linking in zlib
   compression or decompression code that is not used when only reading or only
   writing respectively.  If <a href="../api/#gzclose">gzclose</a>() is used, then both compression and
   decompression code will be included the application when linking to a static
   zlib library.
</div></div><h3 id="nav-159" data-editorial="navigation">gzerror</h3><a id="gzerror" data-editorial="anchor"></a><div data-zlib-block="159"><pre><code>

ZEXTERN const char * ZEXPORT gzerror(gzFile file, int *errnum);
</code></pre></div><div data-zlib-block="160"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Return the error message for the last error which occurred on file.
   If errnum is not NULL, *errnum is set to zlib error number.  If an error
   occurred in the file system and not in the compression library, *errnum is
   set to Z_ERRNO and the application may consult errno to get the exact error
   code.

     The application must not modify the returned string.  Future calls to
   this function may invalidate the previously returned string.  If file is
   closed, then the string previously returned by <a href="../api/#gzerror">gzerror</a> will no longer be
   available.

     <a href="../api/#gzerror">gzerror</a>() should be used to distinguish errors from end-of-file for those
   functions above that do not distinguish those cases in their return values.
</div></div><h3 id="nav-161" data-editorial="navigation">gzclearerr</h3><a id="gzclearerr" data-editorial="anchor"></a><div data-zlib-block="161"><pre><code>

ZEXTERN void ZEXPORT gzclearerr(gzFile file);
</code></pre></div><div data-zlib-block="162"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Clear the error and end-of-file flags for file.  This is analogous to the
   clearerr() function in stdio.  This is useful for continuing to read a gzip
   file that is being written concurrently.
</div></div><div data-zlib-block="163"><pre><code>

#endif /* !Z_SOLO */

                        </code></pre></div><h2 id="section-164" data-editorial="navigation">checksum functions</h2><div data-zlib-block="164"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> checksum functions </div></div><div data-zlib-block="165"><pre><code>

</code></pre></div><div data-zlib-block="166"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     These functions are not related to compression but are exported
   anyway because they might be useful in applications using the compression
   library.
</div></div><h3 id="nav-167" data-editorial="navigation">adler32</h3><a id="adler32" data-editorial="anchor"></a><div data-zlib-block="167"><pre><code>

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
</code></pre></div><h3 id="nav-169" data-editorial="navigation">adler32_z</h3><a id="adler32_z" data-editorial="anchor"></a><div data-zlib-block="169"><pre><code>

ZEXTERN uLong ZEXPORT adler32_z(uLong adler, const Bytef *buf,
                                z_size_t len);
</code></pre></div><div data-zlib-block="170"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Same as <a href="../api/#adler32">adler32</a>(), but with a size_t length.  Note that a long is 32 bits
   on Windows.
</div></div><div data-zlib-block="171"><pre><code>

</code></pre></div><h3 id="nav-172" data-editorial="navigation">adler32_combine</h3><a id="adler32_combine" data-editorial="anchor"></a><div data-zlib-block="172"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN uLong ZEXPORT adler32_combine(uLong adler1, uLong adler2,
                                      z_off_t len2);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Combine two Adler-32 checksums into one.  For two sequences of bytes, seq1
   and seq2 with lengths len1 and len2, Adler-32 checksums were calculated for
   each, adler1 and adler2.  <a href="../api/#adler32_combine">adler32_combine</a>() returns the Adler-32 checksum of
   seq1 and seq2 concatenated, requiring only adler1, adler2, and len2.  Note
   that the z_off_t type (like off_t) is a signed integer.  If len2 is
   negative, the result has no meaning or utility.
</div></div><h3 id="nav-173" data-editorial="navigation">crc32</h3><a id="crc32" data-editorial="anchor"></a><div data-zlib-block="173"><pre><code>

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
</code></pre></div><h3 id="nav-175" data-editorial="navigation">crc32_z</h3><a id="crc32_z" data-editorial="anchor"></a><div data-zlib-block="175"><pre><code>

ZEXTERN uLong ZEXPORT crc32_z(uLong crc, const Bytef *buf,
                              z_size_t len);
</code></pre></div><div data-zlib-block="176"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Same as <a href="../api/#crc32">crc32</a>(), but with a size_t length.  Note that a long is 32 bits on
   Windows.
</div></div><div data-zlib-block="177"><pre><code>

</code></pre></div><h3 id="nav-178" data-editorial="navigation">crc32_combine</h3><a id="crc32_combine" data-editorial="anchor"></a><div data-zlib-block="178"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN uLong ZEXPORT crc32_combine(uLong crc1, uLong crc2, z_off_t len2);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Combine two CRC-32 check values into one.  For two sequences of bytes,
   seq1 and seq2 with lengths len1 and len2, CRC-32 check values were
   calculated for each, crc1 and crc2.  <a href="../api/#crc32_combine">crc32_combine</a>() returns the CRC-32
   check value of seq1 and seq2 concatenated, requiring only crc1, crc2, and
   len2. len2 must be non-negative, otherwise zero is returned.
</div></div><div data-zlib-block="179"><pre><code>

</code></pre></div><h3 id="nav-180" data-editorial="navigation">crc32_combine_gen</h3><a id="crc32_combine_gen" data-editorial="anchor"></a><div data-zlib-block="180"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN uLong ZEXPORT crc32_combine_gen(z_off_t len2);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Return the operator corresponding to length len2, to be used with
   <a href="../api/#crc32_combine_op">crc32_combine_op</a>(). len2 must be non-negative, otherwise zero is returned.
</div></div><h3 id="nav-181" data-editorial="navigation">crc32_combine_op</h3><a id="crc32_combine_op" data-editorial="anchor"></a><div data-zlib-block="181"><pre><code>

ZEXTERN uLong ZEXPORT crc32_combine_op(uLong crc1, uLong crc2, uLong op);
</code></pre></div><div data-zlib-block="182"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Give the same result as <a href="../api/#crc32_combine">crc32_combine</a>(), using op in place of len2. op is
   is generated from len2 by <a href="../api/#crc32_combine_gen">crc32_combine_gen</a>(). This will be faster than
   <a href="../api/#crc32_combine">crc32_combine</a>() if the generated op is used more than once.
</div></div><div data-zlib-block="183"><pre><code>


                        </code></pre></div><h2 id="section-184" data-editorial="navigation">various hacks, don&#x27;t look :)</h2><div data-zlib-block="184"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> various hacks, don&#x27;t look :) </div></div><div data-zlib-block="185"><pre><code>

</code></pre></div><div data-zlib-block="186"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="../api/#deflateInit">deflateInit</a> and <a href="../api/#inflateInit">inflateInit</a> are macros to allow checking the zlib version
 and the compiler&#x27;s view of <a href="../api/#z_stream">z_stream</a>:
 </div></div><h3 id="nav-187" data-editorial="navigation">deflateInit_</h3><a id="deflateInit_" data-editorial="anchor"></a><a id="inflateInit_" data-editorial="anchor"></a><a id="deflateInit2_" data-editorial="anchor"></a><a id="inflateInit2_" data-editorial="anchor"></a><a id="inflateBackInit_" data-editorial="anchor"></a><div data-zlib-block="187"><pre><code>
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

</code></pre></div><div data-zlib-block="188"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> <a href="../api/#gzgetc">gzgetc</a>() macro and its supporting function and exposed data structure.  Note
 that the real internal state is much larger than the exposed structure.
 This abbreviated structure exposes just enough for the <a href="../api/#gzgetc">gzgetc</a>() macro.  The
 user should not mess with these exposed elements, since their names or
 behavior could change in the future, perhaps even capriciously.  They can
 only be used by the <a href="../api/#gzgetc">gzgetc</a>() macro.  You have been warned.
 </div></div><h3 id="nav-189" data-editorial="navigation">gzgetc_</h3><a id="gzgetc_" data-editorial="anchor"></a><div data-zlib-block="189"><pre><code>
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
 </div></div><h3 id="nav-191" data-editorial="navigation">gzopen64</h3><a id="gzopen64" data-editorial="anchor"></a><a id="gzseek64" data-editorial="anchor"></a><a id="gztell64" data-editorial="anchor"></a><a id="gzoffset64" data-editorial="anchor"></a><a id="adler32_combine64" data-editorial="anchor"></a><a id="crc32_combine64" data-editorial="anchor"></a><a id="crc32_combine_gen64" data-editorial="anchor"></a><div data-zlib-block="191"><pre><code>
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

</code></pre></div><h2 id="section-192" data-editorial="navigation">undocumented functions</h2><div data-zlib-block="192"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> undocumented functions </div></div><h3 id="nav-193" data-editorial="navigation">zError</h3><a id="zError" data-editorial="anchor"></a><a id="inflateSyncPoint" data-editorial="anchor"></a><a id="get_crc_table" data-editorial="anchor"></a><a id="inflateUndermine" data-editorial="anchor"></a><a id="inflateValidate" data-editorial="anchor"></a><a id="inflateCodesUsed" data-editorial="anchor"></a><a id="inflateResetKeep" data-editorial="anchor"></a><a id="deflateResetKeep" data-editorial="anchor"></a><a id="gzopen_w" data-editorial="anchor"></a><a id="gzvprintf" data-editorial="anchor"></a><div data-zlib-block="193"><pre><code>
ZEXTERN const char   * ZEXPORT zError(int);
ZEXTERN int            ZEXPORT inflateSyncPoint(z_streamp);
ZEXTERN const z_crc_t FAR * ZEXPORT get_crc_table(void);
ZEXTERN int            ZEXPORT inflateUndermine(z_streamp, int);
ZEXTERN int            ZEXPORT inflateValidate(z_streamp, int);
ZEXTERN unsigned long  ZEXPORT inflateCodesUsed(z_streamp);
ZEXTERN int            ZEXPORT inflateResetKeep(z_streamp);
ZEXTERN int            ZEXPORT deflateResetKeep(z_streamp);
#if defined(_WIN32) &amp;&amp; !defined(Z_SOLO)
ZEXTERN gzFile         ZEXPORT gzopen_w(const wchar_t *path,
                                        const char *mode);
#endif
#if defined(STDC) || defined(Z_HAVE_STDARG_H)
#  ifndef Z_SOLO
ZEXTERN int            ZEXPORTVA gzvprintf(gzFile file,
                                           const char *format,
                                           va_list va);
#  endif
#endif

#ifdef __cplusplus
}
#endif

#endif /* ZLIB_H */
</code></pre></div></div>
