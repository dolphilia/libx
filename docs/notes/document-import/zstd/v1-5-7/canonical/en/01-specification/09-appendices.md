---
title: "Zstandard: Appendices and version changes"
description: "Format specification 0.4.3 — Appendices and version changes"
documentId: "zstd-format-09-appendices"
order: 9
licenseSource: "zstd-format-0.4.3"
documentContext: [{"kind":"source","html":"<p>Zstandard 1.5.7 / format specification 0.4.3 (2024-10-07), Meta Platforms, Inc. and affiliates. <a href=\"https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md\">Fixed original</a>; <a href=\"/docs/zstd/source/v1-5-7/zstd_compression_format.md\">Complete original Markdown</a>; <a href=\"/docs/zstd/source/v1-5-7/NOTICE.txt\">Original permission notice</a>.</p>"},{"kind":"editorial","html":"<p>Libx provides the complete fixed format specification in nine static chapters. CLI, API and implementation behavior are outside this scope; see the original project. Original headings and internal links are adapted for chapter navigation. One original broken reference to compressed blocks is repaired. This is an unofficial edition; the original notice is preserved.</p>"}]
---

<a id="source-appendix-a---decoding-tables-for-predefined-codes"></a>

Appendix A - Decoding tables for predefined codes
-------------------------------------------------

This appendix contains FSE decoding tables
for the predefined literal length, match length, and offset codes.
The tables have been constructed using the algorithm as given above in chapter
"from normalized distribution to decoding tables".
The tables here can be used as examples
to crosscheck that an implementation build its decoding tables correctly.

<a id="source-literal-length-code"></a>

#### Literal Length Code:

| State | Symbol | Number_Of_Bits | Base |
| ----- | ------ | -------------- | ---- |
|     0 |      0 |              4 |    0 |
|     1 |      0 |              4 |   16 |
|     2 |      1 |              5 |   32 |
|     3 |      3 |              5 |    0 |
|     4 |      4 |              5 |    0 |
|     5 |      6 |              5 |    0 |
|     6 |      7 |              5 |    0 |
|     7 |      9 |              5 |    0 |
|     8 |     10 |              5 |    0 |
|     9 |     12 |              5 |    0 |
|    10 |     14 |              6 |    0 |
|    11 |     16 |              5 |    0 |
|    12 |     18 |              5 |    0 |
|    13 |     19 |              5 |    0 |
|    14 |     21 |              5 |    0 |
|    15 |     22 |              5 |    0 |
|    16 |     24 |              5 |    0 |
|    17 |     25 |              5 |   32 |
|    18 |     26 |              5 |    0 |
|    19 |     27 |              6 |    0 |
|    20 |     29 |              6 |    0 |
|    21 |     31 |              6 |    0 |
|    22 |      0 |              4 |   32 |
|    23 |      1 |              4 |    0 |
|    24 |      2 |              5 |    0 |
|    25 |      4 |              5 |   32 |
|    26 |      5 |              5 |    0 |
|    27 |      7 |              5 |   32 |
|    28 |      8 |              5 |    0 |
|    29 |     10 |              5 |   32 |
|    30 |     11 |              5 |    0 |
|    31 |     13 |              6 |    0 |
|    32 |     16 |              5 |   32 |
|    33 |     17 |              5 |    0 |
|    34 |     19 |              5 |   32 |
|    35 |     20 |              5 |    0 |
|    36 |     22 |              5 |   32 |
|    37 |     23 |              5 |    0 |
|    38 |     25 |              4 |    0 |
|    39 |     25 |              4 |   16 |
|    40 |     26 |              5 |   32 |
|    41 |     28 |              6 |    0 |
|    42 |     30 |              6 |    0 |
|    43 |      0 |              4 |   48 |
|    44 |      1 |              4 |   16 |
|    45 |      2 |              5 |   32 |
|    46 |      3 |              5 |   32 |
|    47 |      5 |              5 |   32 |
|    48 |      6 |              5 |   32 |
|    49 |      8 |              5 |   32 |
|    50 |      9 |              5 |   32 |
|    51 |     11 |              5 |   32 |
|    52 |     12 |              5 |   32 |
|    53 |     15 |              6 |    0 |
|    54 |     17 |              5 |   32 |
|    55 |     18 |              5 |   32 |
|    56 |     20 |              5 |   32 |
|    57 |     21 |              5 |   32 |
|    58 |     23 |              5 |   32 |
|    59 |     24 |              5 |   32 |
|    60 |     35 |              6 |    0 |
|    61 |     34 |              6 |    0 |
|    62 |     33 |              6 |    0 |
|    63 |     32 |              6 |    0 |

<a id="source-match-length-code"></a>

#### Match Length Code:

| State | Symbol | Number_Of_Bits | Base |
| ----- | ------ | -------------- | ---- |
|     0 |      0 |              6 |    0 |
|     1 |      1 |              4 |    0 |
|     2 |      2 |              5 |   32 |
|     3 |      3 |              5 |    0 |
|     4 |      5 |              5 |    0 |
|     5 |      6 |              5 |    0 |
|     6 |      8 |              5 |    0 |
|     7 |     10 |              6 |    0 |
|     8 |     13 |              6 |    0 |
|     9 |     16 |              6 |    0 |
|    10 |     19 |              6 |    0 |
|    11 |     22 |              6 |    0 |
|    12 |     25 |              6 |    0 |
|    13 |     28 |              6 |    0 |
|    14 |     31 |              6 |    0 |
|    15 |     33 |              6 |    0 |
|    16 |     35 |              6 |    0 |
|    17 |     37 |              6 |    0 |
|    18 |     39 |              6 |    0 |
|    19 |     41 |              6 |    0 |
|    20 |     43 |              6 |    0 |
|    21 |     45 |              6 |    0 |
|    22 |      1 |              4 |   16 |
|    23 |      2 |              4 |    0 |
|    24 |      3 |              5 |   32 |
|    25 |      4 |              5 |    0 |
|    26 |      6 |              5 |   32 |
|    27 |      7 |              5 |    0 |
|    28 |      9 |              6 |    0 |
|    29 |     12 |              6 |    0 |
|    30 |     15 |              6 |    0 |
|    31 |     18 |              6 |    0 |
|    32 |     21 |              6 |    0 |
|    33 |     24 |              6 |    0 |
|    34 |     27 |              6 |    0 |
|    35 |     30 |              6 |    0 |
|    36 |     32 |              6 |    0 |
|    37 |     34 |              6 |    0 |
|    38 |     36 |              6 |    0 |
|    39 |     38 |              6 |    0 |
|    40 |     40 |              6 |    0 |
|    41 |     42 |              6 |    0 |
|    42 |     44 |              6 |    0 |
|    43 |      1 |              4 |   32 |
|    44 |      1 |              4 |   48 |
|    45 |      2 |              4 |   16 |
|    46 |      4 |              5 |   32 |
|    47 |      5 |              5 |   32 |
|    48 |      7 |              5 |   32 |
|    49 |      8 |              5 |   32 |
|    50 |     11 |              6 |    0 |
|    51 |     14 |              6 |    0 |
|    52 |     17 |              6 |    0 |
|    53 |     20 |              6 |    0 |
|    54 |     23 |              6 |    0 |
|    55 |     26 |              6 |    0 |
|    56 |     29 |              6 |    0 |
|    57 |     52 |              6 |    0 |
|    58 |     51 |              6 |    0 |
|    59 |     50 |              6 |    0 |
|    60 |     49 |              6 |    0 |
|    61 |     48 |              6 |    0 |
|    62 |     47 |              6 |    0 |
|    63 |     46 |              6 |    0 |

<a id="source-offset-code"></a>

#### Offset Code:

| State | Symbol | Number_Of_Bits | Base |
| ----- | ------ | -------------- | ---- |
|     0 |      0 |              5 |    0 |
|     1 |      6 |              4 |    0 |
|     2 |      9 |              5 |    0 |
|     3 |     15 |              5 |    0 |
|     4 |     21 |              5 |    0 |
|     5 |      3 |              5 |    0 |
|     6 |      7 |              4 |    0 |
|     7 |     12 |              5 |    0 |
|     8 |     18 |              5 |    0 |
|     9 |     23 |              5 |    0 |
|    10 |      5 |              5 |    0 |
|    11 |      8 |              4 |    0 |
|    12 |     14 |              5 |    0 |
|    13 |     20 |              5 |    0 |
|    14 |      2 |              5 |    0 |
|    15 |      7 |              4 |   16 |
|    16 |     11 |              5 |    0 |
|    17 |     17 |              5 |    0 |
|    18 |     22 |              5 |    0 |
|    19 |      4 |              5 |    0 |
|    20 |      8 |              4 |   16 |
|    21 |     13 |              5 |    0 |
|    22 |     19 |              5 |    0 |
|    23 |      1 |              5 |    0 |
|    24 |      6 |              4 |   16 |
|    25 |     10 |              5 |    0 |
|    26 |     16 |              5 |    0 |
|    27 |     28 |              5 |    0 |
|    28 |     27 |              5 |    0 |
|    29 |     26 |              5 |    0 |
|    30 |     25 |              5 |    0 |
|    31 |     24 |              5 |    0 |



<a id="source-appendix-b---resources-for-implementers"></a>

Appendix B - Resources for implementers
-------------------------------------------------

An open source reference implementation is available on :
https://github.com/facebook/zstd

The project contains a frame generator, called [decodeCorpus],
which can be used by any 3rd-party implementation
to verify that a tested decoder is compliant with the specification.

[decodeCorpus]: https://github.com/facebook/zstd/tree/v1.3.4/tests#decodecorpus---tool-to-generate-zstandard-frames-for-decoder-testing

`decodeCorpus` generates random valid frames.
A compliant decoder should be able to decode them all,
or at least provide a meaningful error code explaining for which reason it cannot
(memory limit restrictions for example).


<a id="source-version-changes"></a>

Version changes
---------------
- 0.4.3 : clarifications for Huffman prefix code assignment example
- 0.4.2 : refactor FSE table construction process, inspired by Donald Pian
- 0.4.1 : clarifications on a few error scenarios, by Eric Lasota
- 0.4.0 : fixed imprecise behavior for nbSeq==0, detected by Igor Pavlov
- 0.3.9 : clarifications for Huffman-compressed literal sizes.
- 0.3.8 : clarifications for Huffman Blocks and Huffman Tree descriptions.
- 0.3.7 : clarifications for Repeat_Offsets, matching RFC8878
- 0.3.6 : clarifications for Dictionary_ID
- 0.3.5 : clarifications for Block_Maximum_Size
- 0.3.4 : clarifications for FSE decoding table
- 0.3.3 : clarifications for field Block_Size
- 0.3.2 : remove additional block size restriction on compressed blocks
- 0.3.1 : minor clarification regarding offset history update rules
- 0.3.0 : minor edits to match RFC8478
- 0.2.9 : clarifications for huffman weights direct representation, by Ulrich Kunitz
- 0.2.8 : clarifications for IETF RFC discuss
- 0.2.7 : clarifications from IETF RFC review, by Vijay Gurbani and Nick Terrell
- 0.2.6 : fixed an error in huffman example, by Ulrich Kunitz
- 0.2.5 : minor typos and clarifications
- 0.2.4 : section restructuring, by Sean Purcell
- 0.2.3 : clarified several details, by Sean Purcell
- 0.2.2 : added predefined codes, by Johannes Rudolph
- 0.2.1 : clarify field names, by Przemyslaw Skibinski
- 0.2.0 : numerous format adjustments for zstd v0.8+
- 0.1.2 : limit Huffman tree depth to 11 bits
- 0.1.1 : reserved dictID ranges
- 0.1.0 : initial release

[description of the codes]: /docs/zstd/v1-5-7/en/01-specification/04-sequences#source-the-codes-for-literals-lengths-match-lengths-and-offsets
[FSE section]: /docs/zstd/v1-5-7/en/01-specification/06-fse#source-from-normalized-distribution-to-decoding-tables
[Offset Codes]: /docs/zstd/v1-5-7/en/01-specification/04-sequences#source-offset-codes
[LZ4]:https://lz4.github.io/lz4/
[Finite State Entropy]:https://github.com/Cyan4973/FiniteStateEntropy/
[ANS]: https://en.wikipedia.org/wiki/Asymmetric_Numeral_Systems
[next section]:/docs/zstd/v1-5-7/en/01-specification/06-fse#source-from-normalized-distribution-to-decoding-tables
[Appendix A]: #source-appendix-a---decoding-tables-for-predefined-codes
[compressed blocks]: /docs/zstd/v1-5-7/en/01-specification/03-blocks#source-compressed-blocks
