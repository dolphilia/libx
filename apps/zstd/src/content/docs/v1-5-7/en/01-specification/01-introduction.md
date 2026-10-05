---
title: "Zstandard: Introduction and notices"
description: "Format specification 0.4.3 — Introduction and notices"
documentId: "zstd-format-01-introduction"
order: 1
licenseSource: "zstd-format-0.4.3"
documentContext: [{"kind":"source","html":"<p>Zstandard 1.5.7 / format specification 0.4.3 (2024-10-07), Meta Platforms, Inc. and affiliates. <a href=\"https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md\">Fixed original</a>; <a href=\"/docs/zstd/source/v1-5-7/zstd_compression_format.md\">Complete original Markdown</a>; <a href=\"/docs/zstd/source/v1-5-7/NOTICE.txt\">Original permission notice</a>.</p>"},{"kind":"editorial","html":"<p>Libx provides the complete fixed format specification in nine static chapters. CLI, API and implementation behavior are outside this scope; see the original project. Original headings and internal links are adapted for chapter navigation. One original broken reference to compressed blocks is repaired. This is an unofficial edition; the original notice is preserved.</p>"}]
---

<a id="source-zstandard-compression-format"></a>

Zstandard Compression Format
============================

<a id="source-notices"></a>

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

<a id="source-version"></a>

### Version

0.4.3 (2024-10-07)


<a id="source-introduction"></a>

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


<a id="source-overall-conventions"></a>

### Overall conventions
In this document:
- square brackets i.e. `[` and `]` are used to indicate optional fields or parameters.
- the naming convention for identifiers is `Mixed_Case_With_Underscores`

<a id="source-definitions"></a>

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

<a id="source-overview"></a>

Overview
---------
- [Frames](/docs/zstd/v1-5-7/en/01-specification/02-frames#source-frames)
  - [Zstandard frames](/docs/zstd/v1-5-7/en/01-specification/02-frames#source-zstandard-frames)
    - [Blocks](/docs/zstd/v1-5-7/en/01-specification/03-blocks#source-blocks)
      - [Literals Section](/docs/zstd/v1-5-7/en/01-specification/03-blocks#source-literals-section)
      - [Sequences Section](/docs/zstd/v1-5-7/en/01-specification/04-sequences#source-sequences-section)
      - [Sequence Execution](/docs/zstd/v1-5-7/en/01-specification/04-sequences#source-sequence-execution)
  - [Skippable frames](/docs/zstd/v1-5-7/en/01-specification/05-skippable-frames#source-skippable-frames)
- [Entropy Encoding](/docs/zstd/v1-5-7/en/01-specification/06-fse#source-entropy-encoding)
  - [FSE](/docs/zstd/v1-5-7/en/01-specification/06-fse#source-fse)
  - [Huffman Coding](/docs/zstd/v1-5-7/en/01-specification/07-huffman#source-huffman-coding)
- [Dictionary Format](/docs/zstd/v1-5-7/en/01-specification/08-dictionary#source-dictionary-format)


[description of the codes]: /docs/zstd/v1-5-7/en/01-specification/04-sequences#source-the-codes-for-literals-lengths-match-lengths-and-offsets
[FSE section]: /docs/zstd/v1-5-7/en/01-specification/06-fse#source-from-normalized-distribution-to-decoding-tables
[Offset Codes]: /docs/zstd/v1-5-7/en/01-specification/04-sequences#source-offset-codes
[LZ4]:https://lz4.github.io/lz4/
[Finite State Entropy]:https://github.com/Cyan4973/FiniteStateEntropy/
[ANS]: https://en.wikipedia.org/wiki/Asymmetric_Numeral_Systems
[next section]:/docs/zstd/v1-5-7/en/01-specification/06-fse#source-from-normalized-distribution-to-decoding-tables
[Appendix A]: /docs/zstd/v1-5-7/en/01-specification/09-appendices#source-appendix-a---decoding-tables-for-predefined-codes
[compressed blocks]: /docs/zstd/v1-5-7/en/01-specification/03-blocks#source-compressed-blocks
[decodeCorpus]: https://github.com/facebook/zstd/tree/v1.3.4/tests#decodecorpus---tool-to-generate-zstandard-frames-for-decoder-testing
