Zstandard Compression Format
============================

### Notices

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is granted to copy and distribute this document
for any purpose and without charge,
including translations into other languages
and incorporation into compilations,
provided that the copyright notice and this notice are preserved,
and that any substantive changes or deletions from the original
are clearly marked.
Distribution of this document is unlimited.

### Version

0.4.3 (2024-10-07)


Introduction
------------

The purpose of this document is to define a lossless compressed data format,
that is independent of CPU type, operating system,
file system and character set, suitable for
file compression, pipe and streaming compression,
using the [Zstandard algorithm](https://facebook.github.io/zstd/).
The text of the specification assumes a basic background in programming
at the level of bits and other primitive data representations.

The data can be produced or consumed,
even for an arbitrarily long sequentially presented input data stream,
using only an a priori bounded amount of intermediate storage,
and hence can be used in data communications.
The format uses the Zstandard compression method,
and optional [xxHash-64 checksum method](https://cyan4973.github.io/xxHash/),
for detection of data corruption.

The data format defined by this specification
does not attempt to allow random access to compressed data.

Unless otherwise indicated below,
a compliant compressor must produce data sets
that conform to the specifications presented here.
It doesn’t need to support all options though.

A compliant decompressor must be able to decompress
at least one working set of parameters
that conforms to the specifications presented here.
It may also ignore informative fields, such as checksum.
Whenever it does not support a parameter defined in the compressed stream,
it must produce a non-ambiguous error code and associated error message
explaining which parameter is unsupported.

This specification is intended for use by implementers of software
to compress data into Zstandard format and/or decompress data from Zstandard format.
The Zstandard format is supported by an open source reference implementation,
written in portable C, and available at : https://github.com/facebook/zstd .


### Overall conventions
In this document:
- square brackets i.e. `[` and `]` are used to indicate optional fields or parameters.
- the naming convention for identifiers is `Mixed_Case_With_Underscores`

### Definitions
Content compressed by Zstandard is transformed into a Zstandard __frame__.
Multiple frames can be appended into a single file or stream.
A frame is completely independent, has a defined beginning and end,
and a set of parameters which tells the decoder how to decompress it.

A frame encapsulates one or multiple __blocks__.
Each block contains arbitrary content, which is described by its header,
and has a guaranteed maximum content size, which depends on frame parameters.
Unlike frames, each block depends on previous blocks for proper decoding.
However, each block can be decompressed without waiting for its successor,
allowing streaming operations.

Overview
---------
- [Frames](#frames)
  - [Zstandard frames](#zstandard-frames)
    - [Blocks](#blocks)
      - [Literals Section](#literals-section)
      - [Sequences Section](#sequences-section)
      - [Sequence Execution](#sequence-execution)
  - [Skippable frames](#skippable-frames)
- [Entropy Encoding](#entropy-encoding)
  - [FSE](#fse)
  - [Huffman Coding](#huffman-coding)
- [Dictionary Format](#dictionary-format)

