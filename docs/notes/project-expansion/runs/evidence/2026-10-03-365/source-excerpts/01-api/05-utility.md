/* utility functions */

/*
     The following utility functions are implemented on top of the basic
   stream-oriented functions.  To simplify the interface, some default options
   are assumed (compression level and memory usage, standard memory allocation
   functions).  The source code of these utility functions can be modified if
   you need special options.  The _z versions of the functions use the size_t
   type for lengths.  Note that a long is 32 bits on Windows.
*/

ZEXTERN int ZEXPORT compress(Bytef *dest, uLongf *destLen,
                             const Bytef *source, uLong sourceLen);
ZEXTERN int ZEXPORT compress_z(Bytef *dest, z_size_t *destLen,
                               const Bytef *source, z_size_t sourceLen);
/*
     Compresses the source buffer into the destination buffer.  sourceLen is
   the byte length of the source buffer.  Upon entry, destLen is the total size
   of the destination buffer, which must be at least the value returned by
   compressBound(sourceLen).  Upon exit, destLen is the actual size of the
   compressed data.  compress() is equivalent to compress2() with a level
   parameter of Z_DEFAULT_COMPRESSION.

     compress returns Z_OK if success, Z_MEM_ERROR if there was not
   enough memory, Z_BUF_ERROR if there was not enough room in the output
   buffer.
*/

ZEXTERN int ZEXPORT compress2(Bytef *dest, uLongf *destLen,
                              const Bytef *source, uLong sourceLen,
                              int level);
ZEXTERN int ZEXPORT compress2_z(Bytef *dest, z_size_t *destLen,
                                const Bytef *source, z_size_t sourceLen,
                                int level);
/*
     Compresses the source buffer into the destination buffer.  The level
   parameter has the same meaning as in deflateInit.  sourceLen is the byte
   length of the source buffer.  Upon entry, destLen is the total size of the
   destination buffer, which must be at least the value returned by
   compressBound(sourceLen).  Upon exit, destLen is the actual size of the
   compressed data.

     compress2 returns Z_OK if success, Z_MEM_ERROR if there was not enough
   memory, Z_BUF_ERROR if there was not enough room in the output buffer,
   Z_STREAM_ERROR if the level parameter is invalid.
*/

ZEXTERN uLong ZEXPORT compressBound(uLong sourceLen);
ZEXTERN z_size_t ZEXPORT compressBound_z(z_size_t sourceLen);
/*
     compressBound() returns an upper bound on the compressed size after
   compress() or compress2() on sourceLen bytes.  It would be used before a
   compress() or compress2() call to allocate the destination buffer.
*/

ZEXTERN int ZEXPORT uncompress(Bytef *dest, uLongf *destLen,
                               const Bytef *source, uLong sourceLen);
ZEXTERN int ZEXPORT uncompress_z(Bytef *dest, z_size_t *destLen,
                                 const Bytef *source, z_size_t sourceLen);
/*
     Decompresses the source buffer into the destination buffer.  sourceLen is
   the byte length of the source buffer.  On entry, *destLen is the total size
   of the destination buffer, which must be large enough to hold the entire
   uncompressed data.  (The size of the uncompressed data must have been saved
   previously by the compressor and transmitted to the decompressor by some
   mechanism outside the scope of this compression library.)  On exit, *destLen
   is the actual size of the uncompressed data.

     uncompress returns Z_OK if success, Z_MEM_ERROR if there was not
   enough memory, Z_BUF_ERROR if there was not enough room in the output
   buffer, or Z_DATA_ERROR if the input data was corrupted or incomplete.  In
   the case where there is not enough room, uncompress() will fill the output
   buffer with the uncompressed data up to that point.
*/

ZEXTERN int ZEXPORT uncompress2(Bytef *dest, uLongf *destLen,
                                const Bytef *source, uLong *sourceLen);
ZEXTERN int ZEXPORT uncompress2_z(Bytef *dest, z_size_t *destLen,
                                  const Bytef *source, z_size_t *sourceLen);
/*
     Same as uncompress, except that sourceLen is a pointer, where the
   length of the source is *sourceLen.  On return, *sourceLen is the number of
   source bytes consumed.
*/

                        