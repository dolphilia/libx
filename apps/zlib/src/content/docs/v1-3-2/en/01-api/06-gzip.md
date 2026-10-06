---
title: "Gzip file access functions"
licenseSource: zlib-api
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>Unofficial formatting of the complete fixed zlib 1.3.2 originals. Original source: zlib.h. <a href=\"https://zlib.net/zlib-1.3.2.tar.gz\">Official archive</a>; SHA-256: <code>bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16</code>. Source file SHA-256: <code>818667d6ab6a37fe7469cb06a7f0cb2c2cb2f2c948a03e5accf1a4a74bf3020a</code>. Original notices remain intact. This presentation and its translations are unofficial.</p><p><a href=\"../../02-appendix/05-license/\">Full original license</a>. Plain source references outside this manual, including deflate.c, zutil.c, test/example.c, test/minigzip.c, ChangeLog and contrib, can be found in that fixed official archive.</p></aside>"}]
---


<div class="zlib-document" style="overflow-wrap:anywhere"><div data-zlib-block="110"><h2 id="section-110" data-source-role="section"> gzip file access functions </h2></div><div data-zlib-block="111"><pre><code>

</code></pre></div><div data-zlib-block="112"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     This library supports reading and writing files in gzip (.gz) format with
   an interface similar to that of stdio, using the functions that start with
   &quot;gz&quot;.  The gzip format is different from the zlib format.  gzip is a gzip
   wrapper, documented in RFC 1952, wrapped around a deflate stream.
</div></div><a id="gzFile" data-editorial="anchor"></a><div data-zlib-block="113"><pre><code>

typedef struct gzFile_s *gzFile;    /* semi-opaque gzip file descriptor */

</code></pre></div><a id="gzopen" data-editorial="anchor"></a><h3 id="nav-114" data-editorial="navigation">gzopen</h3><div data-zlib-block="114"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN gzFile ZEXPORT gzopen(const char *path, const char *mode);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Open the gzip (.gz) file at path for reading and decompressing, or
   compressing and writing.  The mode parameter is as in fopen (&quot;rb&quot; or &quot;wb&quot;)
   but can also include a compression level (&quot;wb9&quot;) or a strategy: &#x27;f&#x27; for
   filtered data as in &quot;wb6f&quot;, &#x27;h&#x27; for Huffman-only compression as in &quot;wb1h&quot;,
   &#x27;R&#x27; for run-length encoding as in &quot;wb1R&quot;, or &#x27;F&#x27; for fixed code compression
   as in &quot;wb9F&quot;.  (See the description of <a href="../04-advanced/#deflateInit2">deflateInit2</a> for more information
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
   streams in a file.  The append function of <a href="./#gzopen">gzopen</a>() can be used to create
   such a file.  (Also see <a href="./#gzflush">gzflush</a>() for another way to do this.)  When
   appending, <a href="./#gzopen">gzopen</a> does not test whether the file begins with a gzip stream,
   nor does it look for the end of the gzip streams to begin appending.  <a href="./#gzopen">gzopen</a>
   will simply append a gzip stream to the existing file.

     <a href="./#gzopen">gzopen</a> can be used to read a file which is not in gzip format; in this
   case <a href="./#gzread">gzread</a> will directly read from the file without decompression.  When
   reading, this will be detected automatically by looking for the magic two-
   byte gzip header.

     <a href="./#gzopen">gzopen</a> returns NULL if the file could not be opened, if there was
   insufficient memory to allocate the <a href="./#gzFile">gzFile</a> state, or if an invalid mode was
   specified (an &#x27;r&#x27;, &#x27;w&#x27;, or &#x27;a&#x27; was not provided, or &#x27;+&#x27; was provided).
   errno can be checked to determine if the reason <a href="./#gzopen">gzopen</a> failed was that the
   file could not be opened. Note that if &#x27;N&#x27; is in mode for non-blocking, the
   open() itself can fail in order to not block. In that case <a href="./#gzopen">gzopen</a>() will
   return NULL and errno will be EAGAIN or ENONBLOCK. The call to <a href="./#gzopen">gzopen</a>() can
   then be re-tried. If the application would like to block on opening the
   file, then it can use open() without O_NONBLOCK, and then <a href="./#gzdopen">gzdopen</a>() with the
   resulting file descriptor and &#x27;N&#x27; in the mode, which will set it to non-
   blocking.
</div></div><a id="gzdopen" data-editorial="anchor"></a><h3 id="nav-115" data-editorial="navigation">gzdopen</h3><div data-zlib-block="115"><pre><code>

ZEXTERN gzFile ZEXPORT gzdopen(int fd, const char *mode);
</code></pre></div><div data-zlib-block="116"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Associate a <a href="./#gzFile">gzFile</a> with the file descriptor fd.  File descriptors are
   obtained from calls like open, dup, creat, pipe or fileno (if the file has
   been previously opened with fopen).  The mode parameter is as in <a href="./#gzopen">gzopen</a>. An
   &#x27;e&#x27; in mode will set fd&#x27;s flag to close the file on an execve() call. An &#x27;N&#x27;
   in mode will set fd&#x27;s non-blocking flag.

     The next call of <a href="./#gzclose">gzclose</a> on the returned <a href="./#gzFile">gzFile</a> will also close the file
   descriptor fd, just like fclose(fdopen(fd, mode)) closes the file descriptor
   fd.  If you want to keep fd open, use fd = dup(fd_keep); gz = <a href="./#gzdopen">gzdopen</a>(fd,
   mode);.  The duplicated descriptor should be saved to avoid a leak, since
   <a href="./#gzdopen">gzdopen</a> does not close fd if it fails.  If you are using fileno() to get the
   file descriptor from a FILE *, then you will have to use dup() to avoid
   double-close()ing the file descriptor.  Both <a href="./#gzclose">gzclose</a>() and fclose() will
   close the associated file descriptor, so they need to have different file
   descriptors.

     <a href="./#gzdopen">gzdopen</a> returns NULL if there was insufficient memory to allocate the
   <a href="./#gzFile">gzFile</a> state, if an invalid mode was specified (an &#x27;r&#x27;, &#x27;w&#x27;, or &#x27;a&#x27; was not
   provided, or &#x27;+&#x27; was provided), or if fd is -1.  The file descriptor is not
   used until the next gz* read, write, seek, or close operation, so <a href="./#gzdopen">gzdopen</a>
   will not detect if fd is invalid (unless fd is -1).
</div></div><a id="gzbuffer" data-editorial="anchor"></a><h3 id="nav-117" data-editorial="navigation">gzbuffer</h3><div data-zlib-block="117"><pre><code>

ZEXTERN int ZEXPORT gzbuffer(gzFile file, unsigned size);
</code></pre></div><div data-zlib-block="118"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Set the internal buffer size used by this library&#x27;s functions for file to
   size.  The default buffer size is 8192 bytes.  This function must be called
   after <a href="./#gzopen">gzopen</a>() or <a href="./#gzdopen">gzdopen</a>(), and before any other calls that read or write
   the file.  The buffer memory allocation is always deferred to the first read
   or write.  Three times that size in buffer space is allocated.  A larger
   buffer size of, for example, 64K or 128K bytes will noticeably increase the
   speed of decompression (reading).

     The new buffer size also affects the maximum length for <a href="./#gzprintf">gzprintf</a>().

     <a href="./#gzbuffer">gzbuffer</a>() returns 0 on success, or -1 on failure, such as being called
   too late.
</div></div><a id="gzsetparams" data-editorial="anchor"></a><h3 id="nav-119" data-editorial="navigation">gzsetparams</h3><div data-zlib-block="119"><pre><code>

ZEXTERN int ZEXPORT gzsetparams(gzFile file, int level, int strategy);
</code></pre></div><div data-zlib-block="120"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Dynamically update the compression level and strategy for file.  See the
   description of <a href="../04-advanced/#deflateInit2">deflateInit2</a> for the meaning of these parameters. Previously
   provided data is flushed before applying the parameter changes.

     <a href="./#gzsetparams">gzsetparams</a> returns Z_OK if success, Z_STREAM_ERROR if the file was not
   opened for writing, Z_ERRNO if there is an error writing the flushed data,
   or Z_MEM_ERROR if there is a memory allocation error.
</div></div><a id="gzread" data-editorial="anchor"></a><h3 id="nav-121" data-editorial="navigation">gzread</h3><div data-zlib-block="121"><pre><code>

ZEXTERN int ZEXPORT gzread(gzFile file, voidp buf, unsigned len);
</code></pre></div><div data-zlib-block="122"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Read and decompress up to len uncompressed bytes from file into buf.  If
   the input file is not in gzip format, <a href="./#gzread">gzread</a> copies the given number of
   bytes into the buffer directly from the file.

     After reaching the end of a gzip stream in the input, <a href="./#gzread">gzread</a> will continue
   to read, looking for another gzip stream.  Any number of gzip streams may be
   concatenated in the input file, and will all be decompressed by <a href="./#gzread">gzread</a>().
   If something other than a gzip stream is encountered after a gzip stream,
   that remaining trailing garbage is ignored (and no error is returned).

     <a href="./#gzread">gzread</a> can be used to read a gzip file that is being concurrently written.
   Upon reaching the end of the input, <a href="./#gzread">gzread</a> will return with the available
   data.  If the error code returned by <a href="./#gzerror">gzerror</a> is Z_OK or Z_BUF_ERROR, then
   <a href="./#gzclearerr">gzclearerr</a> can be used to clear the end of file indicator in order to permit
   <a href="./#gzread">gzread</a> to be tried again.  Z_OK indicates that a gzip stream was completed
   on the last <a href="./#gzread">gzread</a>.  Z_BUF_ERROR indicates that the input file ended in the
   middle of a gzip stream.  Note that <a href="./#gzread">gzread</a> does not return -1 in the event
   of an incomplete gzip stream.  This error is deferred until <a href="./#gzclose">gzclose</a>(), which
   will return Z_BUF_ERROR if the last <a href="./#gzread">gzread</a> ended in the middle of a gzip
   stream.  Alternatively, <a href="./#gzerror">gzerror</a> can be used before <a href="./#gzclose">gzclose</a> to detect this
   case.

     <a href="./#gzread">gzread</a> can be used to read a gzip file on a non-blocking device. If the
   input stalls and there is no uncompressed data to return, then <a href="./#gzread">gzread</a>() will
   return -1, and errno will be EAGAIN or EWOULDBLOCK. <a href="./#gzread">gzread</a>() can then be
   called again.

     <a href="./#gzread">gzread</a> returns the number of uncompressed bytes actually read, less than
   len for end of file, or -1 for error.  If len is too large to fit in an int,
   then nothing is read, -1 is returned, and the error state is set to
   Z_STREAM_ERROR. If some data was read before an error, then that data is
   returned until exhausted, after which the next call will signal the error.
</div></div><a id="gzfread" data-editorial="anchor"></a><h3 id="nav-123" data-editorial="navigation">gzfread</h3><div data-zlib-block="123"><pre><code>

ZEXTERN z_size_t ZEXPORT gzfread(voidp buf, z_size_t size, z_size_t nitems,
                                 gzFile file);
</code></pre></div><div data-zlib-block="124"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Read and decompress up to nitems items of size size from file into buf,
   otherwise operating as <a href="./#gzread">gzread</a>() does.  This duplicates the interface of
   stdio&#x27;s fread(), with size_t request and return types.  If the library
   defines size_t, then z_size_t is identical to size_t.  If not, then z_size_t
   is an unsigned integer type that can contain a pointer.

     <a href="./#gzfread">gzfread</a>() returns the number of full items read of size size, or zero if
   the end of the file was reached and a full item could not be read, or if
   there was an error.  <a href="./#gzerror">gzerror</a>() must be consulted if zero is returned in
   order to determine if there was an error.  If the multiplication of size and
   nitems overflows, i.e. the product does not fit in a z_size_t, then nothing
   is read, zero is returned, and the error state is set to Z_STREAM_ERROR.

     In the event that the end of file is reached and only a partial item is
   available at the end, i.e. the remaining uncompressed data length is not a
   multiple of size, then the final partial item is nevertheless read into buf
   and the end-of-file flag is set.  The length of the partial item read is not
   provided, but could be inferred from the result of <a href="./#gztell">gztell</a>().  This behavior
   is the same as that of fread() implementations in common libraries. This
   could result in data loss if used with size != 1 when reading a concurrently
   written file or a non-blocking file. In that case, use size == 1 or <a href="./#gzread">gzread</a>()
   instead.
</div></div><a id="gzwrite" data-editorial="anchor"></a><h3 id="nav-125" data-editorial="navigation">gzwrite</h3><div data-zlib-block="125"><pre><code>

ZEXTERN int ZEXPORT gzwrite(gzFile file, voidpc buf, unsigned len);
</code></pre></div><div data-zlib-block="126"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Compress and write the len uncompressed bytes at buf to file. <a href="./#gzwrite">gzwrite</a>
   returns the number of uncompressed bytes written, or 0 in case of error or
   if len is 0.  If the write destination is non-blocking, then <a href="./#gzwrite">gzwrite</a>() may
   return a number of bytes written that is not 0 and less than len.

     If len does not fit in an int, then 0 is returned and nothing is written.
</div></div><a id="gzfwrite" data-editorial="anchor"></a><h3 id="nav-127" data-editorial="navigation">gzfwrite</h3><div data-zlib-block="127"><pre><code>

ZEXTERN z_size_t ZEXPORT gzfwrite(voidpc buf, z_size_t size,
                                  z_size_t nitems, gzFile file);
</code></pre></div><div data-zlib-block="128"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Compress and write nitems items of size size from buf to file, duplicating
   the interface of stdio&#x27;s fwrite(), with size_t request and return types.  If
   the library defines size_t, then z_size_t is identical to size_t.  If not,
   then z_size_t is an unsigned integer type that can contain a pointer.

     <a href="./#gzfwrite">gzfwrite</a>() returns the number of full items written of size size, or zero
   if there was an error.  If the multiplication of size and nitems overflows,
   i.e. the product does not fit in a z_size_t, then nothing is written, zero
   is returned, and the error state is set to Z_STREAM_ERROR.

     If writing a concurrently read file or a non-blocking file with size != 1,
   a partial item could be written, with no way of knowing how much of it was
   not written, resulting in data loss.  In that case, use size == 1 or
   <a href="./#gzwrite">gzwrite</a>() instead.
</div></div><a id="gzprintf" data-editorial="anchor"></a><h3 id="nav-129" data-editorial="navigation">gzprintf</h3><div data-zlib-block="129"><pre><code>

#if defined(STDC) || defined(Z_HAVE_STDARG_H)
ZEXTERN int ZEXPORTVA gzprintf(gzFile file, const char *format, ...);
#else
ZEXTERN int ZEXPORTVA gzprintf();
#endif
</code></pre></div><div data-zlib-block="130"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Convert, format, compress, and write the arguments (...) to file under
   control of the string format, as in fprintf.  <a href="./#gzprintf">gzprintf</a> returns the number of
   uncompressed bytes actually written, or a negative zlib error code in case
   of error.  The number of uncompressed bytes written is limited to 8191, or
   one less than the buffer size given to <a href="./#gzbuffer">gzbuffer</a>().  The caller should assure
   that this limit is not exceeded.  If it is exceeded, then <a href="./#gzprintf">gzprintf</a>() will
   return an error (0) with nothing written.

     In that last case, there may also be a buffer overflow with unpredictable
   consequences, which is possible only if zlib was compiled with the insecure
   functions sprintf() or vsprintf(), because the secure snprintf() and
   vsnprintf() functions were not available. That would only be the case for
   a non-ANSI C compiler. zlib may have been built without <a href="./#gzprintf">gzprintf</a>() because
   secure functions were not available and having <a href="./#gzprintf">gzprintf</a>() be insecure was
   not an option, in which case, <a href="./#gzprintf">gzprintf</a>() returns Z_STREAM_ERROR. All of
   these possibilities can be determined using <a href="../04-advanced/#zlibCompileFlags">zlibCompileFlags</a>().

     If a Z_BUF_ERROR is returned, then nothing was written due to a stall on
   the non-blocking write destination.
</div></div><a id="gzputs" data-editorial="anchor"></a><h3 id="nav-131" data-editorial="navigation">gzputs</h3><div data-zlib-block="131"><pre><code>

ZEXTERN int ZEXPORT gzputs(gzFile file, const char *s);
</code></pre></div><div data-zlib-block="132"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Compress and write the given null-terminated string s to file, excluding
   the terminating null character.

     <a href="./#gzputs">gzputs</a> returns the number of characters written, or -1 in case of error.
   The number of characters written may be less than the length of the string
   if the write destination is non-blocking.

     If the length of the string does not fit in an int, then -1 is returned
   and nothing is written.
</div></div><a id="gzgets" data-editorial="anchor"></a><h3 id="nav-133" data-editorial="navigation">gzgets</h3><div data-zlib-block="133"><pre><code>

ZEXTERN char * ZEXPORT gzgets(gzFile file, char *buf, int len);
</code></pre></div><div data-zlib-block="134"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Read and decompress bytes from file into buf, until len-1 characters are
   read, or until a newline character is read and transferred to buf, or an
   end-of-file condition is encountered.  If any characters are read or if len
   is one, the string is terminated with a null character.  If no characters
   are read due to an end-of-file or len is less than one, then the buffer is
   left untouched.

     <a href="./#gzgets">gzgets</a> returns buf which is a null-terminated string, or it returns NULL
   for end-of-file or in case of error. If some data was read before an error,
   then that data is returned until exhausted, after which the next call will
   return NULL to signal the error.

     <a href="./#gzgets">gzgets</a> can be used on a file being concurrently written, and on a non-
   blocking device, both as for <a href="./#gzread">gzread</a>(). However lines may be broken in the
   middle, leaving it up to the application to reassemble them as needed.
</div></div><a id="gzputc" data-editorial="anchor"></a><h3 id="nav-135" data-editorial="navigation">gzputc</h3><div data-zlib-block="135"><pre><code>

ZEXTERN int ZEXPORT gzputc(gzFile file, int c);
</code></pre></div><div data-zlib-block="136"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Compress and write c, converted to an unsigned char, into file.  <a href="./#gzputc">gzputc</a>
   returns the value that was written, or -1 in case of error.
</div></div><a id="gzgetc" data-editorial="anchor"></a><h3 id="nav-137" data-editorial="navigation">gzgetc</h3><div data-zlib-block="137"><pre><code>

ZEXTERN int ZEXPORT gzgetc(gzFile file);
</code></pre></div><div data-zlib-block="138"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Read and decompress one byte from file. <a href="./#gzgetc">gzgetc</a> returns this byte or -1 in
   case of end of file or error. If some data was read before an error, then
   that data is returned until exhausted, after which the next call will return
   -1 to signal the error.

     This is implemented as a macro for speed. As such, it does not do all of
   the checking the other functions do. I.e. it does not check to see if file
   is NULL, nor whether the structure file points to has been clobbered or not.

     <a href="./#gzgetc">gzgetc</a> can be used to read a gzip file on a non-blocking device. If the
   input stalls and there is no uncompressed data to return, then <a href="./#gzgetc">gzgetc</a>() will
   return -1, and errno will be EAGAIN or EWOULDBLOCK. <a href="./#gzread">gzread</a>() can then be
   called again.
</div></div><a id="gzungetc" data-editorial="anchor"></a><h3 id="nav-139" data-editorial="navigation">gzungetc</h3><div data-zlib-block="139"><pre><code>

ZEXTERN int ZEXPORT gzungetc(int c, gzFile file);
</code></pre></div><div data-zlib-block="140"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Push c back onto the stream for file to be read as the first character on
   the next read.  At least one character of push-back is always allowed.
   <a href="./#gzungetc">gzungetc</a>() returns the character pushed, or -1 on failure.  <a href="./#gzungetc">gzungetc</a>() will
   fail if c is -1, and may fail if a character has been pushed but not read
   yet.  If <a href="./#gzungetc">gzungetc</a> is used immediately after <a href="./#gzopen">gzopen</a> or <a href="./#gzdopen">gzdopen</a>, at least the
   output buffer size of pushed characters is allowed.  (See <a href="./#gzbuffer">gzbuffer</a> above.)
   The pushed character will be discarded if the stream is repositioned with
   <a href="./#gzseek">gzseek</a>() or <a href="./#gzrewind">gzrewind</a>().

     <a href="./#gzungetc">gzungetc</a>(-1, file) will force any pending seek to execute. Then <a href="./#gztell">gztell</a>()
   will report the position, even if the requested seek reached end of file.
   This can be used to determine the number of uncompressed bytes in a gzip
   file without having to read it into a buffer.
</div></div><a id="gzflush" data-editorial="anchor"></a><h3 id="nav-141" data-editorial="navigation">gzflush</h3><div data-zlib-block="141"><pre><code>

ZEXTERN int ZEXPORT gzflush(gzFile file, int flush);
</code></pre></div><div data-zlib-block="142"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Flush all pending output to file.  The parameter flush is as in the
   <a href="../03-basic/#deflate">deflate</a>() function.  The return value is the zlib error number (see function
   <a href="./#gzerror">gzerror</a> below).  <a href="./#gzflush">gzflush</a> is only permitted when writing.

     If the flush parameter is Z_FINISH, the remaining data is written and the
   gzip stream is completed in the output.  If <a href="./#gzwrite">gzwrite</a>() is called again, a new
   gzip stream will be started in the output.  <a href="./#gzread">gzread</a>() is able to read such
   concatenated gzip streams.

     <a href="./#gzflush">gzflush</a> should be called only when strictly necessary because it will
   degrade compression if called too often.
</div></div><div data-zlib-block="143"><pre><code>

</code></pre></div><a id="gzseek" data-editorial="anchor"></a><h3 id="nav-144" data-editorial="navigation">gzseek</h3><div data-zlib-block="144"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN z_off_t ZEXPORT gzseek(gzFile file,
                               z_off_t offset, int whence);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Set the starting position to offset relative to whence for the next <a href="./#gzread">gzread</a>
   or <a href="./#gzwrite">gzwrite</a> on file.  The offset represents a number of bytes in the
   uncompressed data stream.  The whence parameter is defined as in lseek(2);
   the value SEEK_END is not supported.

     If the file is opened for reading, this function is emulated but can be
   extremely slow.  If the file is opened for writing, only forward seeks are
   supported; <a href="./#gzseek">gzseek</a> then compresses a sequence of zeroes up to the new
   starting position. For reading or writing, any actual seeking is deferred
   until the next read or write operation, or close operation when writing.

     <a href="./#gzseek">gzseek</a> returns the resulting offset location as measured in bytes from
   the beginning of the uncompressed stream, or -1 in case of error, in
   particular if the file is opened for writing and the new starting position
   would be before the current position.
</div></div><a id="gzrewind" data-editorial="anchor"></a><h3 id="nav-145" data-editorial="navigation">gzrewind</h3><div data-zlib-block="145"><pre><code>

ZEXTERN int ZEXPORT gzrewind(gzFile file);
</code></pre></div><div data-zlib-block="146"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Rewind file. This function is supported only for reading.

     <a href="./#gzrewind">gzrewind</a>(file) is equivalent to (int)<a href="./#gzseek">gzseek</a>(file, 0L, SEEK_SET).
</div></div><div data-zlib-block="147"><pre><code>

</code></pre></div><a id="gztell" data-editorial="anchor"></a><h3 id="nav-148" data-editorial="navigation">gztell</h3><div data-zlib-block="148"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN z_off_t ZEXPORT gztell(gzFile file);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Return the starting position for the next <a href="./#gzread">gzread</a> or <a href="./#gzwrite">gzwrite</a> on file.
   This position represents a number of bytes in the uncompressed data stream,
   and is zero when starting, even if appending or reading a gzip stream from
   the middle of a file using <a href="./#gzdopen">gzdopen</a>().

     <a href="./#gztell">gztell</a>(file) is equivalent to <a href="./#gzseek">gzseek</a>(file, 0L, SEEK_CUR)
</div></div><div data-zlib-block="149"><pre><code>

</code></pre></div><a id="gzoffset" data-editorial="anchor"></a><h3 id="nav-150" data-editorial="navigation">gzoffset</h3><div data-zlib-block="150"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
</div><pre><code>ZEXTERN z_off_t ZEXPORT gzoffset(gzFile file);</code></pre><div style="white-space:pre-wrap;overflow-wrap:anywhere">

     Return the current compressed (actual) read or write offset of file.  This
   offset includes the count of bytes that precede the gzip stream, for example
   when appending or when using <a href="./#gzdopen">gzdopen</a>() for reading.  When reading, the
   offset does not include as yet unused buffered input.  This information can
   be used for a progress indicator.  On error, <a href="./#gzoffset">gzoffset</a>() returns -1.
</div></div><a id="gzeof" data-editorial="anchor"></a><h3 id="nav-151" data-editorial="navigation">gzeof</h3><div data-zlib-block="151"><pre><code>

ZEXTERN int ZEXPORT gzeof(gzFile file);
</code></pre></div><div data-zlib-block="152"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Return true (1) if the end-of-file indicator for file has been set while
   reading, false (0) otherwise.  Note that the end-of-file indicator is set
   only if the read tried to go past the end of the input, but came up short.
   Therefore, just like feof(), <a href="./#gzeof">gzeof</a>() may return false even if there is no
   more data to read, in the event that the last read request was for the exact
   number of bytes remaining in the input file.  This will happen if the input
   file size is an exact multiple of the buffer size.

     If <a href="./#gzeof">gzeof</a>() returns true, then the read functions will return no more data,
   unless the end-of-file indicator is reset by <a href="./#gzclearerr">gzclearerr</a>() and the input file
   has grown since the previous end of file was detected.
</div></div><a id="gzdirect" data-editorial="anchor"></a><h3 id="nav-153" data-editorial="navigation">gzdirect</h3><div data-zlib-block="153"><pre><code>

ZEXTERN int ZEXPORT gzdirect(gzFile file);
</code></pre></div><div data-zlib-block="154"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Return true (1) if file is being copied directly while reading, or false
   (0) if file is a gzip stream being decompressed.

     If the input file is empty, <a href="./#gzdirect">gzdirect</a>() will return true, since the input
   does not contain a gzip stream.

     If <a href="./#gzdirect">gzdirect</a>() is used immediately after <a href="./#gzopen">gzopen</a>() or <a href="./#gzdopen">gzdopen</a>() it will
   cause buffers to be allocated to allow reading the file to determine if it
   is a gzip file. Therefore if <a href="./#gzbuffer">gzbuffer</a>() is used, it should be called before
   <a href="./#gzdirect">gzdirect</a>(). If the input is being written concurrently or the device is non-
   blocking, then <a href="./#gzdirect">gzdirect</a>() may give a different answer once four bytes of
   input have been accumulated, which is what is needed to confirm or deny a
   gzip header. Before this, <a href="./#gzdirect">gzdirect</a>() will return true (1).

     When writing, <a href="./#gzdirect">gzdirect</a>() returns true (1) if transparent writing was
   requested (&quot;wT&quot; for the <a href="./#gzopen">gzopen</a>() mode), or false (0) otherwise.  (Note:
   <a href="./#gzdirect">gzdirect</a>() is not needed when writing.  Transparent writing must be
   explicitly requested, so the application already knows the answer.  When
   linking statically, using <a href="./#gzdirect">gzdirect</a>() will include all of the zlib code for
   gzip file reading and decompression, which may not be desired.)
</div></div><a id="gzclose" data-editorial="anchor"></a><h3 id="nav-155" data-editorial="navigation">gzclose</h3><div data-zlib-block="155"><pre><code>

ZEXTERN int ZEXPORT gzclose(gzFile file);
</code></pre></div><div data-zlib-block="156"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Flush all pending output for file, if necessary, close file and
   deallocate the (de)compression state.  Note that once file is closed, you
   cannot call <a href="./#gzerror">gzerror</a> with file, since its structures have been deallocated.
   <a href="./#gzclose">gzclose</a> must not be called more than once on the same file, just as free
   must not be called more than once on the same allocation.

     <a href="./#gzclose">gzclose</a> will return Z_STREAM_ERROR if file is not valid, Z_ERRNO on a
   file operation error, Z_MEM_ERROR if out of memory, Z_BUF_ERROR if the
   last read ended in the middle of a gzip stream, or Z_OK on success.
</div></div><a id="gzclose_w" data-editorial="anchor"></a><a id="gzclose_r" data-editorial="anchor"></a><h3 id="nav-157" data-editorial="navigation">gzclose_r</h3><div data-zlib-block="157"><pre><code>

ZEXTERN int ZEXPORT gzclose_r(gzFile file);
ZEXTERN int ZEXPORT gzclose_w(gzFile file);
</code></pre></div><div data-zlib-block="158"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Same as <a href="./#gzclose">gzclose</a>(), but <a href="./#gzclose_r">gzclose_r</a>() is only for use when reading, and
   <a href="./#gzclose_w">gzclose_w</a>() is only for use when writing or appending.  The advantage to
   using these instead of <a href="./#gzclose">gzclose</a>() is that they avoid linking in zlib
   compression or decompression code that is not used when only reading or only
   writing respectively.  If <a href="./#gzclose">gzclose</a>() is used, then both compression and
   decompression code will be included the application when linking to a static
   zlib library.
</div></div><a id="gzerror" data-editorial="anchor"></a><h3 id="nav-159" data-editorial="navigation">gzerror</h3><div data-zlib-block="159"><pre><code>

ZEXTERN const char * ZEXPORT gzerror(gzFile file, int *errnum);
</code></pre></div><div data-zlib-block="160"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Return the error message for the last error which occurred on file.
   If errnum is not NULL, *errnum is set to zlib error number.  If an error
   occurred in the file system and not in the compression library, *errnum is
   set to Z_ERRNO and the application may consult errno to get the exact error
   code.

     The application must not modify the returned string.  Future calls to
   this function may invalidate the previously returned string.  If file is
   closed, then the string previously returned by <a href="./#gzerror">gzerror</a> will no longer be
   available.

     <a href="./#gzerror">gzerror</a>() should be used to distinguish errors from end-of-file for those
   functions above that do not distinguish those cases in their return values.
</div></div><a id="gzclearerr" data-editorial="anchor"></a><h3 id="nav-161" data-editorial="navigation">gzclearerr</h3><div data-zlib-block="161"><pre><code>

ZEXTERN void ZEXPORT gzclearerr(gzFile file);
</code></pre></div><div data-zlib-block="162"><div style="white-space:pre-wrap;overflow-wrap:anywhere">
     Clear the error and end-of-file flags for file.  This is analogous to the
   clearerr() function in stdio.  This is useful for continuing to read a gzip
   file that is being written concurrently.
</div></div><div data-zlib-block="163"><pre><code>

#endif /* !Z_SOLO */

                        </code></pre></div></div>
