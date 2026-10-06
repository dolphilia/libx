---
title: "Basic functions"
licenseSource: zlib-api
toc:
  maxLevel: 6
---

<aside data-editorial="provenance"><p>Unofficial formatting of the complete fixed zlib 1.3.2 originals. Original source: zlib.h. <a href="https://zlib.net/zlib-1.3.2.tar.gz">Official archive</a>; SHA-256: <code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>. Source file SHA-256: <code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>. Original notices remain intact. This presentation and its translations are unofficial.</p><p><a href="../../02-appendix/05-license/">Full original license</a>. Plain source references outside this manual, including deflate.c, zutil.c, test/example.c, test/minigzip.c, ChangeLog and contrib, can be found in that fixed official archive.</p></aside><aside data-editorial="source-note"><p>Original-source note: the stream structure defines adler; the inflate comment uses strm-&gt;adler32. Both original forms are preserved.</p></aside>
<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="24"><h2 id="section-24" data-source-role="section"> basic functions </h2></div><a id="zlibVersion" data-editorial="anchor"></a><h3 id="nav-25" data-editorial="navigation">zlibVersion</h3><div data-zlib-block="25"><pre><code>

ZEXTERN const char * ZEXPORT zlibVersion(void);
</code></pre></div><div data-zlib-block="26"><div style="white-space:pre-wrap;overflow-wrap:anywhere"> The application can compare <a href="./#zlibVersion">zlibVersion</a> and ZLIB_VERSION for consistency.
   If the first character differs, the library code actually used is not
   compatible with the <a href="../01-overview/">zlib.h</a> header file used by the application.  This check
   is automatically made by <a href="./#deflateInit">deflateInit</a> and <a href="./#inflateInit">inflateInit</a>.
 </div></div><div data-zlib-block="27"><pre><code>

</code></pre></div><a id="deflateInit" data-editorial="anchor"></a><h3 id="nav-28" data-editorial="navigation">deflateInit</h3><div data-zlib-block="28"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN int ZEXPORT deflateInit(z_streamp strm, int level);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Initializes the internal stream state for compression.  The fields
   zalloc, zfree and opaque must be initialized before by the caller.  If
   zalloc and zfree are set to Z_NULL, <a href="./#deflateInit">deflateInit</a> updates them to use default
   allocation functions.  total_in, total_out, adler, and msg are initialized.

     The compression level must be Z_DEFAULT_COMPRESSION, or between 0 and 9:
   1 gives best speed, 9 gives best compression, 0 gives no compression at all
   (the input data is simply copied a block at a time).  Z_DEFAULT_COMPRESSION
   requests a default compromise between speed and compression (currently
   equivalent to level 6).

     <a href="./#deflateInit">deflateInit</a> returns Z_OK if success, Z_MEM_ERROR if there was not enough
   memory, Z_STREAM_ERROR if level is not a valid compression level, or
   Z_VERSION_ERROR if the zlib library version (zlib_version) is incompatible
   with the version assumed by the caller (ZLIB_VERSION).  msg is set to null
   if there is no error message.  <a href="./#deflateInit">deflateInit</a> does not perform any compression:
   this will be done by <a href="./#deflate">deflate</a>().
</div></div><a id="deflate" data-editorial="anchor"></a><h3 id="nav-29" data-editorial="navigation">deflate</h3><div data-zlib-block="29"><pre><code>


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
    processing will resume at this point for the next call of <a href="./#deflate">deflate</a>().

  - Generate more output starting at next_out and update next_out and avail_out
    accordingly.  This action is forced if the parameter flush is non zero.
    Forcing flush frequently degrades the compression ratio, so this parameter
    should be set only when necessary.  Some output may be provided even if
    flush is zero.

    Before the call of <a href="./#deflate">deflate</a>(), the application should ensure that at least
  one of the actions is possible, by providing more input and/or consuming more
  output, and updating avail_in or avail_out accordingly; avail_out should
  never be zero before the call.  The application can consume the compressed
  output when it wants, for example when the output buffer is full (avail_out
  == 0), or after each call of <a href="./#deflate">deflate</a>().  If <a href="./#deflate">deflate</a> returns Z_OK and with
  zero avail_out, it must be called again after making room in the output
  buffer because there might be more output pending. See <a href="../04-advanced/#deflatePending">deflatePending</a>(),
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

    If <a href="./#deflate">deflate</a> returns with avail_out == 0, this function must be called again
  with the same value of the flush parameter and more output space (updated
  avail_out), until the flush is complete (<a href="./#deflate">deflate</a> returns with non-zero
  avail_out).  In the case of a Z_FULL_FLUSH or Z_SYNC_FLUSH, make sure that
  avail_out is greater than six when the flush marker begins, in order to avoid
  repeated flush markers upon calling <a href="./#deflate">deflate</a>() again when avail_out == 0.

    If the parameter flush is set to Z_FINISH, pending input is processed,
  pending output is flushed and <a href="./#deflate">deflate</a> returns with Z_STREAM_END if there was
  enough output space.  If <a href="./#deflate">deflate</a> returns with Z_OK or Z_BUF_ERROR, this
  function must be called again with Z_FINISH and more output space (updated
  avail_out) but no more input data, until it returns with Z_STREAM_END or an
  error.  After deflate has returned Z_STREAM_END, the only possible operations
  on the stream are <a href="../04-advanced/#deflateReset">deflateReset</a> or <a href="./#deflateEnd">deflateEnd</a>.

    Z_FINISH can be used in the first deflate call after <a href="./#deflateInit">deflateInit</a> if all the
  compression is to be done in a single step.  In order to complete in one
  call, avail_out must be at least the value returned by <a href="../04-advanced/#deflateBound">deflateBound</a> (see
  below).  Then deflate is guaranteed to return Z_STREAM_END.  If not enough
  output space is provided, deflate will not return Z_STREAM_END, and it must
  be called again as described above.

    <a href="./#deflate">deflate</a>() sets strm-&gt;adler to the Adler-32 checksum of all input read
  so far (that is, total_in bytes).  If a gzip stream is being generated, then
  strm-&gt;adler will be the CRC-32 checksum of the input read so far.  (See
  <a href="../04-advanced/#deflateInit2">deflateInit2</a> below.)

    <a href="./#deflate">deflate</a>() may update strm-&gt;data_type if it can make a good guess about
  the input data type (Z_BINARY or Z_TEXT).  If in doubt, the data is
  considered binary.  This field is only for information purposes and does not
  affect the compression algorithm in any manner.

    <a href="./#deflate">deflate</a>() returns Z_OK if some progress has been made (more input
  processed or more output produced), Z_STREAM_END if all input has been
  consumed and all output has been produced (only when flush is set to
  Z_FINISH), Z_STREAM_ERROR if the stream state was inconsistent (for example
  if next_in or next_out was Z_NULL or the state was inadvertently written over
  by the application), or Z_BUF_ERROR if no progress is possible (for example
  avail_in or avail_out was zero).  Note that Z_BUF_ERROR is not fatal, and
  <a href="./#deflate">deflate</a>() can be called again with more input and more output space to
  continue compressing.
</div></div><a id="deflateEnd" data-editorial="anchor"></a><h3 id="nav-31" data-editorial="navigation">deflateEnd</h3><div data-zlib-block="31"><pre><code>


ZEXTERN int ZEXPORT deflateEnd(z_streamp strm);
</code></pre></div><div data-zlib-block="32"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     All dynamically allocated data structures for this stream are freed.
   This function discards any unprocessed input and does not flush any pending
   output.

     <a href="./#deflateEnd">deflateEnd</a> returns Z_OK if success, Z_STREAM_ERROR if the
   stream state was inconsistent, Z_DATA_ERROR if the stream was freed
   prematurely (some input or output was discarded).  In the error case, msg
   may be set but then points to a static string (which must not be
   deallocated).
</div></div><div data-zlib-block="33"><pre><code>


</code></pre></div><a id="inflateInit" data-editorial="anchor"></a><h3 id="nav-34" data-editorial="navigation">inflateInit</h3><div data-zlib-block="34"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN int ZEXPORT inflateInit(z_streamp strm);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Initializes the internal stream state for decompression.  The fields
   next_in, avail_in, zalloc, zfree and opaque must be initialized before by
   the caller.  In the current version of inflate, the provided input is not
   read or consumed.  The allocation of a sliding window will be deferred to
   the first call of inflate (if the decompression does not complete on the
   first call).  If zalloc and zfree are set to Z_NULL, <a href="./#inflateInit">inflateInit</a> updates
   them to use default allocation functions.  total_in, total_out, adler, and
   msg are initialized.

     <a href="./#inflateInit">inflateInit</a> returns Z_OK if success, Z_MEM_ERROR if there was not enough
   memory, Z_VERSION_ERROR if the zlib library version is incompatible with the
   version assumed by the caller, or Z_STREAM_ERROR if the parameters are
   invalid, such as a null pointer to the structure.  msg is set to null if
   there is no error message.  <a href="./#inflateInit">inflateInit</a> does not perform any decompression.
   Actual decompression will be done by <a href="./#inflate">inflate</a>().  So next_in, and avail_in,
   next_out, and avail_out are unused and unchanged.  The current
   implementation of <a href="./#inflateInit">inflateInit</a>() does not process any header information --
   that is deferred until <a href="./#inflate">inflate</a>() is called.
</div></div><a id="inflate" data-editorial="anchor"></a><h3 id="nav-35" data-editorial="navigation">inflate</h3><div data-zlib-block="35"><pre><code>


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
    <a href="./#inflate">inflate</a>().

  - Generate more output starting at next_out and update next_out and avail_out
    accordingly.  <a href="./#inflate">inflate</a>() provides as much output as possible, until there is
    no more input data or no more space in the output buffer (see below about
    the flush parameter).

    Before the call of <a href="./#inflate">inflate</a>(), the application should ensure that at least
  one of the actions is possible, by providing more input and/or consuming more
  output, and updating the next_* and avail_* values accordingly.  If the
  caller of <a href="./#inflate">inflate</a>() does not provide both available input and available
  output space, it is possible that there will be no progress made.  The
  application can consume the uncompressed output when it wants, for example
  when the output buffer is full (avail_out == 0), or after each call of
  <a href="./#inflate">inflate</a>().  If <a href="./#inflate">inflate</a> returns Z_OK and with zero avail_out, it must be
  called again after making room in the output buffer because there might be
  more output pending.

    The flush parameter of <a href="./#inflate">inflate</a>() can be Z_NO_FLUSH, Z_SYNC_FLUSH, Z_FINISH,
  Z_BLOCK, or Z_TREES.  Z_SYNC_FLUSH requests that <a href="./#inflate">inflate</a>() flush as much
  output as possible to the output buffer.  Z_BLOCK requests that <a href="./#inflate">inflate</a>()
  stop if and when it gets to the next deflate block boundary.  When decoding
  the zlib or gzip format, this will cause <a href="./#inflate">inflate</a>() to return immediately
  after the header and before the first block.  When doing a raw inflate,
  <a href="./#inflate">inflate</a>() will go ahead and process the first block, and will return when it
  gets to the end of that block, or when it runs out of data.

    The Z_BLOCK option assists in appending to or combining deflate streams.
  To assist in this, on return <a href="./#inflate">inflate</a>() always sets strm-&gt;data_type to the
  number of unused bits in the input taken from strm-&gt;next_in, plus 64 if
  <a href="./#inflate">inflate</a>() is currently decoding the last block in the deflate stream, plus
  128 if <a href="./#inflate">inflate</a>() returned immediately after decoding an end-of-block code or
  decoding the complete header up to just before the first byte of the deflate
  stream.  The end-of-block will not be indicated until all of the uncompressed
  data from that block has been written to strm-&gt;next_out.  The number of
  unused bits may in general be greater than seven, except when bit 7 of
  data_type is set, in which case the number of unused bits will be less than
  eight.  data_type is set as noted here every time <a href="./#inflate">inflate</a>() returns for all
  flush options, and so can be used to determine the amount of currently
  consumed input in bits.

    The Z_TREES option behaves as Z_BLOCK does, but it also returns when the
  end of each deflate block header is reached, before any actual data in that
  block is decoded.  This allows the caller to determine the length of the
  deflate block header for later use in random access within a deflate block.
  256 is added to the value of strm-&gt;data_type when <a href="./#inflate">inflate</a>() returns
  immediately after reaching the end of the deflate block header.

    <a href="./#inflate">inflate</a>() should normally be called until it returns Z_STREAM_END or an
  error.  However if all decompression is to be performed in a single step (a
  single call of inflate), the parameter flush should be set to Z_FINISH.  In
  this case all pending input is processed and all pending output is flushed;
  avail_out must be large enough to hold all of the uncompressed data for the
  operation to complete.  (The size of the uncompressed data may have been
  saved by the compressor for this purpose.)  The use of Z_FINISH is not
  required to perform an inflation in one step.  However it may be used to
  inform inflate that a faster approach can be used for the single <a href="./#inflate">inflate</a>()
  call.  Z_FINISH also informs inflate to not maintain a sliding window if the
  stream completes, which reduces inflate&#x27;s memory footprint.  If the stream
  does not complete, either because not all of the stream is provided or not
  enough output space is provided, then a sliding window will be allocated and
  <a href="./#inflate">inflate</a>() can be called again to continue the operation as if Z_NO_FLUSH had
  been used.

     In this implementation, <a href="./#inflate">inflate</a>() always flushes as much output as
  possible to the output buffer, and always uses the faster approach on the
  first call.  So the effects of the flush parameter in this implementation are
  on the return value of <a href="./#inflate">inflate</a>() as noted below, when <a href="./#inflate">inflate</a>() returns early
  when Z_BLOCK or Z_TREES is used, and when <a href="./#inflate">inflate</a>() avoids the allocation of
  memory for a sliding window when Z_FINISH is used.

     If a preset dictionary is needed after this call (see <a href="../04-advanced/#inflateSetDictionary">inflateSetDictionary</a>
  below), inflate sets strm-&gt;adler to the Adler-32 checksum of the dictionary
  chosen by the compressor and returns Z_NEED_DICT; otherwise it sets
  strm-&gt;adler to the Adler-32 checksum of all output produced so far (that is,
  total_out bytes) and returns Z_OK, Z_STREAM_END or an error code as described
  below.  At the end of the stream, <a href="./#inflate">inflate</a>() checks that its computed Adler-32
  checksum is equal to that saved by the compressor and returns Z_STREAM_END
  only if the checksum is correct.

    <a href="./#inflate">inflate</a>() can decompress and check either zlib-wrapped or gzip-wrapped
  deflate data.  The header type is detected automatically, if requested when
  initializing with <a href="../04-advanced/#inflateInit2">inflateInit2</a>().  Any information contained in the gzip
  header is not retained unless <a href="../04-advanced/#inflateGetHeader">inflateGetHeader</a>() is used.  When processing
  gzip-wrapped deflate data, strm-&gt;adler32 is set to the CRC-32 of the output
  produced so far.  The CRC-32 is checked against the gzip trailer, as is the
  uncompressed length, modulo 2^32.

    <a href="./#inflate">inflate</a>() returns Z_OK if some progress has been made (more input processed
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
  <a href="./#inflate">inflate</a>() can be called again with more input and more output space to
  continue decompressing.  If Z_DATA_ERROR is returned, the application may
  then call <a href="../04-advanced/#inflateSync">inflateSync</a>() to look for a good compression block if a partial
  recovery of the data is to be attempted.
</div></div><a id="inflateEnd" data-editorial="anchor"></a><h3 id="nav-37" data-editorial="navigation">inflateEnd</h3><div data-zlib-block="37"><pre><code>


ZEXTERN int ZEXPORT inflateEnd(z_streamp strm);
</code></pre></div><div data-zlib-block="38"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     All dynamically allocated data structures for this stream are freed.
   This function discards any unprocessed input and does not flush any pending
   output.

     <a href="./#inflateEnd">inflateEnd</a> returns Z_OK if success, or Z_STREAM_ERROR if the stream state
   was inconsistent.
</div></div><div data-zlib-block="39"><pre><code>


                        </code></pre></div></div>
