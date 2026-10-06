/* gzip file access functions */

/*
     This library supports reading and writing files in gzip (.gz) format with
   an interface similar to that of stdio, using the functions that start with
   "gz".  The gzip format is different from the zlib format.  gzip is a gzip
   wrapper, documented in RFC 1952, wrapped around a deflate stream.
*/

typedef struct gzFile_s *gzFile;    /* semi-opaque gzip file descriptor */

/*
ZEXTERN gzFile ZEXPORT gzopen(const char *path, const char *mode);

     Open the gzip (.gz) file at path for reading and decompressing, or
   compressing and writing.  The mode parameter is as in fopen ("rb" or "wb")
   but can also include a compression level ("wb9") or a strategy: 'f' for
   filtered data as in "wb6f", 'h' for Huffman-only compression as in "wb1h",
   'R' for run-length encoding as in "wb1R", or 'F' for fixed code compression
   as in "wb9F".  (See the description of deflateInit2 for more information
   about the strategy parameter.)  'T' will request transparent writing or
   appending with no compression and not using the gzip format. 'T' cannot be
   used to force transparent reading. Transparent reading is automatically
   performed if there is no gzip header at the start. Transparent reading can
   be disabled with the 'G' option, which will instead return an error if there
   is no gzip header. 'N' will open the file in non-blocking mode.

     'a' can be used instead of 'w' to request that the gzip stream that will
   be written be appended to the file.  '+' will result in an error, since
   reading and writing to the same gzip file is not supported.  The addition of
   'x' when writing will create the file exclusively, which fails if the file
   already exists.  On systems that support it, the addition of 'e' when
   reading or writing will set the flag to close the file on an execve() call.

     These functions, as well as gzip, will read and decode a sequence of gzip
   streams in a file.  The append function of gzopen() can be used to create
   such a file.  (Also see gzflush() for another way to do this.)  When
   appending, gzopen does not test whether the file begins with a gzip stream,
   nor does it look for the end of the gzip streams to begin appending.  gzopen
   will simply append a gzip stream to the existing file.

     gzopen can be used to read a file which is not in gzip format; in this
   case gzread will directly read from the file without decompression.  When
   reading, this will be detected automatically by looking for the magic two-
   byte gzip header.

     gzopen returns NULL if the file could not be opened, if there was
   insufficient memory to allocate the gzFile state, or if an invalid mode was
   specified (an 'r', 'w', or 'a' was not provided, or '+' was provided).
   errno can be checked to determine if the reason gzopen failed was that the
   file could not be opened. Note that if 'N' is in mode for non-blocking, the
   open() itself can fail in order to not block. In that case gzopen() will
   return NULL and errno will be EAGAIN or ENONBLOCK. The call to gzopen() can
   then be re-tried. If the application would like to block on opening the
   file, then it can use open() without O_NONBLOCK, and then gzdopen() with the
   resulting file descriptor and 'N' in the mode, which will set it to non-
   blocking.
*/

ZEXTERN gzFile ZEXPORT gzdopen(int fd, const char *mode);
/*
     Associate a gzFile with the file descriptor fd.  File descriptors are
   obtained from calls like open, dup, creat, pipe or fileno (if the file has
   been previously opened with fopen).  The mode parameter is as in gzopen. An
   'e' in mode will set fd's flag to close the file on an execve() call. An 'N'
   in mode will set fd's non-blocking flag.

     The next call of gzclose on the returned gzFile will also close the file
   descriptor fd, just like fclose(fdopen(fd, mode)) closes the file descriptor
   fd.  If you want to keep fd open, use fd = dup(fd_keep); gz = gzdopen(fd,
   mode);.  The duplicated descriptor should be saved to avoid a leak, since
   gzdopen does not close fd if it fails.  If you are using fileno() to get the
   file descriptor from a FILE *, then you will have to use dup() to avoid
   double-close()ing the file descriptor.  Both gzclose() and fclose() will
   close the associated file descriptor, so they need to have different file
   descriptors.

     gzdopen returns NULL if there was insufficient memory to allocate the
   gzFile state, if an invalid mode was specified (an 'r', 'w', or 'a' was not
   provided, or '+' was provided), or if fd is -1.  The file descriptor is not
   used until the next gz* read, write, seek, or close operation, so gzdopen
   will not detect if fd is invalid (unless fd is -1).
*/

ZEXTERN int ZEXPORT gzbuffer(gzFile file, unsigned size);
/*
     Set the internal buffer size used by this library's functions for file to
   size.  The default buffer size is 8192 bytes.  This function must be called
   after gzopen() or gzdopen(), and before any other calls that read or write
   the file.  The buffer memory allocation is always deferred to the first read
   or write.  Three times that size in buffer space is allocated.  A larger
   buffer size of, for example, 64K or 128K bytes will noticeably increase the
   speed of decompression (reading).

     The new buffer size also affects the maximum length for gzprintf().

     gzbuffer() returns 0 on success, or -1 on failure, such as being called
   too late.
*/

ZEXTERN int ZEXPORT gzsetparams(gzFile file, int level, int strategy);
/*
     Dynamically update the compression level and strategy for file.  See the
   description of deflateInit2 for the meaning of these parameters. Previously
   provided data is flushed before applying the parameter changes.

     gzsetparams returns Z_OK if success, Z_STREAM_ERROR if the file was not
   opened for writing, Z_ERRNO if there is an error writing the flushed data,
   or Z_MEM_ERROR if there is a memory allocation error.
*/

ZEXTERN int ZEXPORT gzread(gzFile file, voidp buf, unsigned len);
/*
     Read and decompress up to len uncompressed bytes from file into buf.  If
   the input file is not in gzip format, gzread copies the given number of
   bytes into the buffer directly from the file.

     After reaching the end of a gzip stream in the input, gzread will continue
   to read, looking for another gzip stream.  Any number of gzip streams may be
   concatenated in the input file, and will all be decompressed by gzread().
   If something other than a gzip stream is encountered after a gzip stream,
   that remaining trailing garbage is ignored (and no error is returned).

     gzread can be used to read a gzip file that is being concurrently written.
   Upon reaching the end of the input, gzread will return with the available
   data.  If the error code returned by gzerror is Z_OK or Z_BUF_ERROR, then
   gzclearerr can be used to clear the end of file indicator in order to permit
   gzread to be tried again.  Z_OK indicates that a gzip stream was completed
   on the last gzread.  Z_BUF_ERROR indicates that the input file ended in the
   middle of a gzip stream.  Note that gzread does not return -1 in the event
   of an incomplete gzip stream.  This error is deferred until gzclose(), which
   will return Z_BUF_ERROR if the last gzread ended in the middle of a gzip
   stream.  Alternatively, gzerror can be used before gzclose to detect this
   case.

     gzread can be used to read a gzip file on a non-blocking device. If the
   input stalls and there is no uncompressed data to return, then gzread() will
   return -1, and errno will be EAGAIN or EWOULDBLOCK. gzread() can then be
   called again.

     gzread returns the number of uncompressed bytes actually read, less than
   len for end of file, or -1 for error.  If len is too large to fit in an int,
   then nothing is read, -1 is returned, and the error state is set to
   Z_STREAM_ERROR. If some data was read before an error, then that data is
   returned until exhausted, after which the next call will signal the error.
*/

ZEXTERN z_size_t ZEXPORT gzfread(voidp buf, z_size_t size, z_size_t nitems,
                                 gzFile file);
/*
     Read and decompress up to nitems items of size size from file into buf,
   otherwise operating as gzread() does.  This duplicates the interface of
   stdio's fread(), with size_t request and return types.  If the library
   defines size_t, then z_size_t is identical to size_t.  If not, then z_size_t
   is an unsigned integer type that can contain a pointer.

     gzfread() returns the number of full items read of size size, or zero if
   the end of the file was reached and a full item could not be read, or if
   there was an error.  gzerror() must be consulted if zero is returned in
   order to determine if there was an error.  If the multiplication of size and
   nitems overflows, i.e. the product does not fit in a z_size_t, then nothing
   is read, zero is returned, and the error state is set to Z_STREAM_ERROR.

     In the event that the end of file is reached and only a partial item is
   available at the end, i.e. the remaining uncompressed data length is not a
   multiple of size, then the final partial item is nevertheless read into buf
   and the end-of-file flag is set.  The length of the partial item read is not
   provided, but could be inferred from the result of gztell().  This behavior
   is the same as that of fread() implementations in common libraries. This
   could result in data loss if used with size != 1 when reading a concurrently
   written file or a non-blocking file. In that case, use size == 1 or gzread()
   instead.
*/

ZEXTERN int ZEXPORT gzwrite(gzFile file, voidpc buf, unsigned len);
/*
     Compress and write the len uncompressed bytes at buf to file. gzwrite
   returns the number of uncompressed bytes written, or 0 in case of error or
   if len is 0.  If the write destination is non-blocking, then gzwrite() may
   return a number of bytes written that is not 0 and less than len.

     If len does not fit in an int, then 0 is returned and nothing is written.
*/

ZEXTERN z_size_t ZEXPORT gzfwrite(voidpc buf, z_size_t size,
                                  z_size_t nitems, gzFile file);
/*
     Compress and write nitems items of size size from buf to file, duplicating
   the interface of stdio's fwrite(), with size_t request and return types.  If
   the library defines size_t, then z_size_t is identical to size_t.  If not,
   then z_size_t is an unsigned integer type that can contain a pointer.

     gzfwrite() returns the number of full items written of size size, or zero
   if there was an error.  If the multiplication of size and nitems overflows,
   i.e. the product does not fit in a z_size_t, then nothing is written, zero
   is returned, and the error state is set to Z_STREAM_ERROR.

     If writing a concurrently read file or a non-blocking file with size != 1,
   a partial item could be written, with no way of knowing how much of it was
   not written, resulting in data loss.  In that case, use size == 1 or
   gzwrite() instead.
*/

#if defined(STDC) || defined(Z_HAVE_STDARG_H)
ZEXTERN int ZEXPORTVA gzprintf(gzFile file, const char *format, ...);
#else
ZEXTERN int ZEXPORTVA gzprintf();
#endif
/*
     Convert, format, compress, and write the arguments (...) to file under
   control of the string format, as in fprintf.  gzprintf returns the number of
   uncompressed bytes actually written, or a negative zlib error code in case
   of error.  The number of uncompressed bytes written is limited to 8191, or
   one less than the buffer size given to gzbuffer().  The caller should assure
   that this limit is not exceeded.  If it is exceeded, then gzprintf() will
   return an error (0) with nothing written.

     In that last case, there may also be a buffer overflow with unpredictable
   consequences, which is possible only if zlib was compiled with the insecure
   functions sprintf() or vsprintf(), because the secure snprintf() and
   vsnprintf() functions were not available. That would only be the case for
   a non-ANSI C compiler. zlib may have been built without gzprintf() because
   secure functions were not available and having gzprintf() be insecure was
   not an option, in which case, gzprintf() returns Z_STREAM_ERROR. All of
   these possibilities can be determined using zlibCompileFlags().

     If a Z_BUF_ERROR is returned, then nothing was written due to a stall on
   the non-blocking write destination.
*/

ZEXTERN int ZEXPORT gzputs(gzFile file, const char *s);
/*
     Compress and write the given null-terminated string s to file, excluding
   the terminating null character.

     gzputs returns the number of characters written, or -1 in case of error.
   The number of characters written may be less than the length of the string
   if the write destination is non-blocking.

     If the length of the string does not fit in an int, then -1 is returned
   and nothing is written.
*/

ZEXTERN char * ZEXPORT gzgets(gzFile file, char *buf, int len);
/*
     Read and decompress bytes from file into buf, until len-1 characters are
   read, or until a newline character is read and transferred to buf, or an
   end-of-file condition is encountered.  If any characters are read or if len
   is one, the string is terminated with a null character.  If no characters
   are read due to an end-of-file or len is less than one, then the buffer is
   left untouched.

     gzgets returns buf which is a null-terminated string, or it returns NULL
   for end-of-file or in case of error. If some data was read before an error,
   then that data is returned until exhausted, after which the next call will
   return NULL to signal the error.

     gzgets can be used on a file being concurrently written, and on a non-
   blocking device, both as for gzread(). However lines may be broken in the
   middle, leaving it up to the application to reassemble them as needed.
*/

ZEXTERN int ZEXPORT gzputc(gzFile file, int c);
/*
     Compress and write c, converted to an unsigned char, into file.  gzputc
   returns the value that was written, or -1 in case of error.
*/

ZEXTERN int ZEXPORT gzgetc(gzFile file);
/*
     Read and decompress one byte from file. gzgetc returns this byte or -1 in
   case of end of file or error. If some data was read before an error, then
   that data is returned until exhausted, after which the next call will return
   -1 to signal the error.

     This is implemented as a macro for speed. As such, it does not do all of
   the checking the other functions do. I.e. it does not check to see if file
   is NULL, nor whether the structure file points to has been clobbered or not.

     gzgetc can be used to read a gzip file on a non-blocking device. If the
   input stalls and there is no uncompressed data to return, then gzgetc() will
   return -1, and errno will be EAGAIN or EWOULDBLOCK. gzread() can then be
   called again.
*/

ZEXTERN int ZEXPORT gzungetc(int c, gzFile file);
/*
     Push c back onto the stream for file to be read as the first character on
   the next read.  At least one character of push-back is always allowed.
   gzungetc() returns the character pushed, or -1 on failure.  gzungetc() will
   fail if c is -1, and may fail if a character has been pushed but not read
   yet.  If gzungetc is used immediately after gzopen or gzdopen, at least the
   output buffer size of pushed characters is allowed.  (See gzbuffer above.)
   The pushed character will be discarded if the stream is repositioned with
   gzseek() or gzrewind().

     gzungetc(-1, file) will force any pending seek to execute. Then gztell()
   will report the position, even if the requested seek reached end of file.
   This can be used to determine the number of uncompressed bytes in a gzip
   file without having to read it into a buffer.
*/

ZEXTERN int ZEXPORT gzflush(gzFile file, int flush);
/*
     Flush all pending output to file.  The parameter flush is as in the
   deflate() function.  The return value is the zlib error number (see function
   gzerror below).  gzflush is only permitted when writing.

     If the flush parameter is Z_FINISH, the remaining data is written and the
   gzip stream is completed in the output.  If gzwrite() is called again, a new
   gzip stream will be started in the output.  gzread() is able to read such
   concatenated gzip streams.

     gzflush should be called only when strictly necessary because it will
   degrade compression if called too often.
*/

/*
ZEXTERN z_off_t ZEXPORT gzseek(gzFile file,
                               z_off_t offset, int whence);

     Set the starting position to offset relative to whence for the next gzread
   or gzwrite on file.  The offset represents a number of bytes in the
   uncompressed data stream.  The whence parameter is defined as in lseek(2);
   the value SEEK_END is not supported.

     If the file is opened for reading, this function is emulated but can be
   extremely slow.  If the file is opened for writing, only forward seeks are
   supported; gzseek then compresses a sequence of zeroes up to the new
   starting position. For reading or writing, any actual seeking is deferred
   until the next read or write operation, or close operation when writing.

     gzseek returns the resulting offset location as measured in bytes from
   the beginning of the uncompressed stream, or -1 in case of error, in
   particular if the file is opened for writing and the new starting position
   would be before the current position.
*/

ZEXTERN int ZEXPORT gzrewind(gzFile file);
/*
     Rewind file. This function is supported only for reading.

     gzrewind(file) is equivalent to (int)gzseek(file, 0L, SEEK_SET).
*/

/*
ZEXTERN z_off_t ZEXPORT gztell(gzFile file);

     Return the starting position for the next gzread or gzwrite on file.
   This position represents a number of bytes in the uncompressed data stream,
   and is zero when starting, even if appending or reading a gzip stream from
   the middle of a file using gzdopen().

     gztell(file) is equivalent to gzseek(file, 0L, SEEK_CUR)
*/

/*
ZEXTERN z_off_t ZEXPORT gzoffset(gzFile file);

     Return the current compressed (actual) read or write offset of file.  This
   offset includes the count of bytes that precede the gzip stream, for example
   when appending or when using gzdopen() for reading.  When reading, the
   offset does not include as yet unused buffered input.  This information can
   be used for a progress indicator.  On error, gzoffset() returns -1.
*/

ZEXTERN int ZEXPORT gzeof(gzFile file);
/*
     Return true (1) if the end-of-file indicator for file has been set while
   reading, false (0) otherwise.  Note that the end-of-file indicator is set
   only if the read tried to go past the end of the input, but came up short.
   Therefore, just like feof(), gzeof() may return false even if there is no
   more data to read, in the event that the last read request was for the exact
   number of bytes remaining in the input file.  This will happen if the input
   file size is an exact multiple of the buffer size.

     If gzeof() returns true, then the read functions will return no more data,
   unless the end-of-file indicator is reset by gzclearerr() and the input file
   has grown since the previous end of file was detected.
*/

ZEXTERN int ZEXPORT gzdirect(gzFile file);
/*
     Return true (1) if file is being copied directly while reading, or false
   (0) if file is a gzip stream being decompressed.

     If the input file is empty, gzdirect() will return true, since the input
   does not contain a gzip stream.

     If gzdirect() is used immediately after gzopen() or gzdopen() it will
   cause buffers to be allocated to allow reading the file to determine if it
   is a gzip file. Therefore if gzbuffer() is used, it should be called before
   gzdirect(). If the input is being written concurrently or the device is non-
   blocking, then gzdirect() may give a different answer once four bytes of
   input have been accumulated, which is what is needed to confirm or deny a
   gzip header. Before this, gzdirect() will return true (1).

     When writing, gzdirect() returns true (1) if transparent writing was
   requested ("wT" for the gzopen() mode), or false (0) otherwise.  (Note:
   gzdirect() is not needed when writing.  Transparent writing must be
   explicitly requested, so the application already knows the answer.  When
   linking statically, using gzdirect() will include all of the zlib code for
   gzip file reading and decompression, which may not be desired.)
*/

ZEXTERN int ZEXPORT gzclose(gzFile file);
/*
     Flush all pending output for file, if necessary, close file and
   deallocate the (de)compression state.  Note that once file is closed, you
   cannot call gzerror with file, since its structures have been deallocated.
   gzclose must not be called more than once on the same file, just as free
   must not be called more than once on the same allocation.

     gzclose will return Z_STREAM_ERROR if file is not valid, Z_ERRNO on a
   file operation error, Z_MEM_ERROR if out of memory, Z_BUF_ERROR if the
   last read ended in the middle of a gzip stream, or Z_OK on success.
*/

ZEXTERN int ZEXPORT gzclose_r(gzFile file);
ZEXTERN int ZEXPORT gzclose_w(gzFile file);
/*
     Same as gzclose(), but gzclose_r() is only for use when reading, and
   gzclose_w() is only for use when writing or appending.  The advantage to
   using these instead of gzclose() is that they avoid linking in zlib
   compression or decompression code that is not used when only reading or only
   writing respectively.  If gzclose() is used, then both compression and
   decompression code will be included the application when linking to a static
   zlib library.
*/

ZEXTERN const char * ZEXPORT gzerror(gzFile file, int *errnum);
/*
     Return the error message for the last error which occurred on file.
   If errnum is not NULL, *errnum is set to zlib error number.  If an error
   occurred in the file system and not in the compression library, *errnum is
   set to Z_ERRNO and the application may consult errno to get the exact error
   code.

     The application must not modify the returned string.  Future calls to
   this function may invalidate the previously returned string.  If file is
   closed, then the string previously returned by gzerror will no longer be
   available.

     gzerror() should be used to distinguish errors from end-of-file for those
   functions above that do not distinguish those cases in their return values.
*/

ZEXTERN void ZEXPORT gzclearerr(gzFile file);
/*
     Clear the error and end-of-file flags for file.  This is analogous to the
   clearerr() function in stdio.  This is useful for continuing to read a gzip
   file that is being written concurrently.
*/

#endif /* !Z_SOLO */

                        