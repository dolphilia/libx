---
title: "LZ4: examples/dictionaryRandomAccess.md"
licenseSource: "lz4-1-10-0-examples-dictionaryrandomaccess-md"
documentContext:
  - kind: source
    html: "<p>Unofficial Libx presentation of the fixed LZ4 1.10.0 English original. Formatting and link mapping: 2026-10-05. Original commit: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>; SHA-256: <code>013d1e25de9217ff6224d14522f2a562901c78216cafd832f77c1921175abfe7</code>. <a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/examples/dictionaryRandomAccess.md\">Fixed upstream source</a>; <a href=\"/docs/lz4/source/v1-10-0/originals/examples/dictionaryRandomAccess.md.txt\">Unmodified original and its notices</a>; <a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">Complete fixed upstream archive</a>; <a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">Upstream license allocation notice</a>. Original copyright, permission, and warranty notices are retained. Japanese translations are unofficial.</p><p>Under Libx’s operating policy, where no documentation-specific license statement was found, the software license identified for this material is applied to this documentation. Applicable terms: GPL-2.0-or-later（本掲載はversion2条件を履行）. This is an operational decision, not a newly obtained permission.</p><p>Presentation changes: original Markdown unchanged except mapped local destinations; remove leading UTF-8 BOM before insertion below frontmatter; original download bytes unchanged. No technical prose has been silently corrected or summarized.</p>"
  - kind: editorial
    html: "<p>The original compression prose calls the final integer the number of blocks, whereas the diagram and decompression instructions use the number of offsets (N+1). The prose itself already specifies N+1 offsets. The fixed dictionaryRandomAccess.c writes offsetsEnd - offsets and reads numOffsets. All original representations are retained. An earlier Libx note incorrectly said that the prose described N offsets; that note was corrected on 2026-10-05.</p>"
---

# LZ4 API Example : Dictionary Random Access

`dictionaryRandomAccess.c` is LZ4 API example which implements dictionary compression and random access decompression.

Please note that the output file is not compatible with lz4frame and is platform dependent.


## What's the point of this example ?

 - Dictionary based compression for homogeneous files.
 - Random access to compressed blocks.


## How the compression works

Reads the dictionary from a file, and uses it as the history for each block.
This allows each block to be independent, but maintains compression ratio.

```
    Dictionary
         +
         |
         v
    +---------+
    | Block#1 |
    +----+----+
         |
         v
      {Out#1}


    Dictionary
         +
         |
         v
    +---------+
    | Block#2 |
    +----+----+
         |
         v
      {Out#2}
```

After writing the magic bytes `TEST` and then the compressed blocks, write out the jump table.
The last 4 bytes is an integer containing the number of blocks in the stream.
If there are `N` blocks, then just before the last 4 bytes is `N + 1` 4 byte integers containing the offsets at the beginning and end of each block.
Let `Offset#K` be the total number of bytes written after writing out `Block#K` *including* the magic bytes for simplicity.

```
+------+---------+     +---------+---+----------+     +----------+-----+
| TEST | Block#1 | ... | Block#N | 4 | Offset#1 | ... | Offset#N | N+1 |
+------+---------+     +---------+---+----------+     +----------+-----+
```

## How the decompression works

Decompression will do reverse order.

 - Seek to the last 4 bytes of the file and read the number of offsets.
 - Read each offset into an array.
 - Seek to the first block containing data we want to read.
   We know where to look because we know each block contains a fixed amount of uncompressed data, except possibly the last.
 - Decompress it and write what data we need from it to the file.
 - Read the next block.
 - Decompress it and write that page to the file.

Continue these procedures until all the required data has been read.
