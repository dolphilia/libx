---
title: "Zstandard: Blocks and literals"
description: "Format specification 0.4.3 — Blocks and literals"
documentId: "zstd-format-03-blocks"
order: 3
licenseSource: "zstd-format-0.4.3"
documentContext: [{"kind":"source","html":"<p>Zstandard 1.5.7 / format specification 0.4.3 (2024-10-07), Meta Platforms, Inc. and affiliates. <a href=\"https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md\">Fixed original</a>; <a href=\"/docs/zstd/source/v1-5-7/zstd_compression_format.md\">Complete original Markdown</a>; <a href=\"/docs/zstd/source/v1-5-7/NOTICE.txt\">Original permission notice</a>.</p>"},{"kind":"editorial","html":"<p>Libx provides the complete fixed format specification in nine static chapters. CLI, API and implementation behavior are outside this scope; see the original project. Original headings and internal links are adapted for chapter navigation. One original broken reference to compressed blocks is repaired. This is an unofficial edition; the original notice is preserved.</p>"}]
---

<a id="source-blocks"></a>

Blocks
-------

After `Magic_Number` and `Frame_Header`, there are some number of blocks.
Each frame must have at least one block,
but there is no upper limit on the number of blocks per frame.

The structure of a block is as follows:

| `Block_Header` | `Block_Content` |
|:--------------:|:---------------:|
|    3 bytes     |     n bytes     |

__`Block_Header`__

`Block_Header` uses 3 bytes, written using __little-endian__ convention.
It contains 3 fields :

| `Last_Block` | `Block_Type` | `Block_Size` |
|:------------:|:------------:|:------------:|
|    bit 0     |  bits 1-2    |  bits 3-23   |

__`Last_Block`__

The lowest bit signals if this block is the last one.
The frame will end after this last block.
It may be followed by an optional `Content_Checksum`
(see [Zstandard Frames](/docs/zstd/v1-5-7/en/01-specification/02-frames#source-zstandard-frames)).

__`Block_Type`__

The next 2 bits represent the `Block_Type`.
`Block_Type` influences the meaning of `Block_Size`.
There are 4 block types :

|    Value     |      0      |      1      |         2          |     3     |
| ------------ | ----------- | ----------- | ------------------ | --------- |
| `Block_Type` | `Raw_Block` | `RLE_Block` | `Compressed_Block` | `Reserved`|

- `Raw_Block` - this is an uncompressed block.
  `Block_Content` contains `Block_Size` bytes.

- `RLE_Block` - this is a single byte, repeated `Block_Size` times.
  `Block_Content` consists of a single byte.
  On the decompression side, this byte must be repeated `Block_Size` times.

- `Compressed_Block` - this is a [Zstandard compressed block](#source-compressed-blocks),
  explained later on.
  `Block_Size` is the length of `Block_Content`, the compressed data.
  The decompressed size is not known,
  but its maximum possible value is guaranteed (see below)

- `Reserved` - this is not a block.
  This value cannot be used with current version of this specification.
  If such a value is present, it is considered corrupted data.

__`Block_Size`__

The upper 21 bits of `Block_Header` represent the `Block_Size`.

When `Block_Type` is `Compressed_Block` or `Raw_Block`,
`Block_Size` is the size of `Block_Content` (hence excluding `Block_Header`).

When `Block_Type` is `RLE_Block`, since `Block_Content`’s size is always 1,
`Block_Size` represents the number of times this byte must be repeated.

`Block_Size` is limited by `Block_Maximum_Size` (see below).

__`Block_Content`__ and __`Block_Maximum_Size`__

The size of `Block_Content` is limited by `Block_Maximum_Size`,
which is the smallest of:
-  `Window_Size`
-  128 KB

`Block_Maximum_Size` is constant for a given frame.
This maximum is applicable to both the decompressed size
and the compressed size of any block in the frame.

The reasoning for this limit is that a decoder can read this information
at the beginning of a frame and use it to allocate buffers.
The guarantees on the size of blocks ensure that
the buffers will be large enough for any following block of the valid frame.


<a id="source-compressed-blocks"></a>

Compressed Blocks
-----------------
To decompress a compressed block, the compressed size must be provided
from `Block_Size` field within `Block_Header`.

A compressed block consists of 2 sections :
- [Literals Section](#source-literals-section)
- [Sequences Section](/docs/zstd/v1-5-7/en/01-specification/04-sequences#source-sequences-section)

The results of the two sections are then combined to produce the decompressed
data in [Sequence Execution](/docs/zstd/v1-5-7/en/01-specification/04-sequences#source-sequence-execution)

<a id="source-prerequisites"></a>

#### Prerequisites
To decode a compressed block, the following elements are necessary :
- Previous decoded data, up to a distance of `Window_Size`,
  or beginning of the Frame, whichever is smaller.
- List of "recent offsets" from previous `Compressed_Block`.
- The previous Huffman tree, required by `Treeless_Literals_Block` type
- Previous FSE decoding tables, required by `Repeat_Mode`
  for each symbol type (literals lengths, match lengths, offsets)

Note that decoding tables aren't always from the previous `Compressed_Block`.

- Every decoding table can come from a dictionary.
- The Huffman tree comes from the previous `Compressed_Literals_Block`.

<a id="source-literals-section"></a>

Literals Section
----------------
All literals are regrouped in the first part of the block.
They can be decoded first, and then copied during [Sequence Execution],
or they can be decoded on the flow during [Sequence Execution].

Literals can be stored uncompressed or compressed using Huffman prefix codes.
When compressed, a tree description may optionally be present,
followed by 1 or 4 streams.

| `Literals_Section_Header` | [`Huffman_Tree_Description`] | [jumpTable] | Stream1 | [Stream2] | [Stream3] | [Stream4] |
| ------------------------- | ---------------------------- | ----------- | ------- | --------- | --------- | --------- |


<a id="source-literals_section_header"></a>

### `Literals_Section_Header`

Header is in charge of describing how literals are packed.
It's a byte-aligned variable-size bitfield, ranging from 1 to 5 bytes,
using __little-endian__ convention.

| `Literals_Block_Type` | `Size_Format` | `Regenerated_Size` | [`Compressed_Size`] |
| --------------------- | ------------- | ------------------ | ------------------- |
|       2 bits          |  1 - 2 bits   |    5 - 20 bits     |     0 - 18 bits     |

In this representation, bits on the left are the lowest bits.

__`Literals_Block_Type`__

This field uses 2 lowest bits of first byte, describing 4 different block types :

| `Literals_Block_Type`       | Value |
| --------------------------- | ----- |
| `Raw_Literals_Block`        |   0   |
| `RLE_Literals_Block`        |   1   |
| `Compressed_Literals_Block` |   2   |
| `Treeless_Literals_Block`   |   3   |

- `Raw_Literals_Block` - Literals are stored uncompressed.
- `RLE_Literals_Block` - Literals consist of a single byte value
        repeated `Regenerated_Size` times.
- `Compressed_Literals_Block` - This is a standard Huffman-compressed block,
        starting with a Huffman tree description.
        In this mode, there are at least 2 different literals represented in the Huffman tree description.
        See details below.
- `Treeless_Literals_Block` - This is a Huffman-compressed block,
        using Huffman tree _from previous Huffman-compressed literals block_.
        `Huffman_Tree_Description` will be skipped.
        Note: If this mode is triggered without any previous Huffman-table in the frame
        (or [dictionary](/docs/zstd/v1-5-7/en/01-specification/08-dictionary#source-dictionary-format)), this should be treated as data corruption.

__`Size_Format`__

`Size_Format` is divided into 2 families :

- For `Raw_Literals_Block` and `RLE_Literals_Block`,
  it's only necessary to decode `Regenerated_Size`.
  There is no `Compressed_Size` field.
- For `Compressed_Block` and `Treeless_Literals_Block`,
  it's required to decode both `Compressed_Size`
  and `Regenerated_Size` (the decompressed size).
  It's also necessary to decode the number of streams (1 or 4).

For values spanning several bytes, convention is __little-endian__.

__`Size_Format` for `Raw_Literals_Block` and `RLE_Literals_Block`__ :

`Size_Format` uses 1 _or_ 2 bits.
Its value is : `Size_Format = (Literals_Section_Header[0]>>2) & 3`

- `Size_Format` == 00 or 10 : `Size_Format` uses 1 bit.
               `Regenerated_Size` uses 5 bits (0-31).
               `Literals_Section_Header` uses 1 byte.
               `Regenerated_Size = Literals_Section_Header[0]>>3`
- `Size_Format` == 01 : `Size_Format` uses 2 bits.
               `Regenerated_Size` uses 12 bits (0-4095).
               `Literals_Section_Header` uses 2 bytes.
               `Regenerated_Size = (Literals_Section_Header[0]>>4) + (Literals_Section_Header[1]<<4)`
- `Size_Format` == 11 : `Size_Format` uses 2 bits.
               `Regenerated_Size` uses 20 bits (0-1048575).
               `Literals_Section_Header` uses 3 bytes.
               `Regenerated_Size = (Literals_Section_Header[0]>>4) + (Literals_Section_Header[1]<<4) + (Literals_Section_Header[2]<<12)`

Only Stream1 is present for these cases.
Note : it's allowed to represent a short value (for example `27`)
using a long format, even if it's less efficient.

__`Size_Format` for `Compressed_Literals_Block` and `Treeless_Literals_Block`__ :

`Size_Format` always uses 2 bits.

- `Size_Format` == 00 : _A single stream_.
               Both `Regenerated_Size` and `Compressed_Size` use 10 bits (0-1023).
               `Literals_Section_Header` uses 3 bytes.
- `Size_Format` == 01 : 4 streams.
               Both `Regenerated_Size` and `Compressed_Size` use 10 bits (6-1023).
               `Literals_Section_Header` uses 3 bytes.
- `Size_Format` == 10 : 4 streams.
               Both `Regenerated_Size` and `Compressed_Size` use 14 bits (6-16383).
               `Literals_Section_Header` uses 4 bytes.
- `Size_Format` == 11 : 4 streams.
               Both `Regenerated_Size` and `Compressed_Size` use 18 bits (6-262143).
               `Literals_Section_Header` uses 5 bytes.

Both `Compressed_Size` and `Regenerated_Size` fields follow __little-endian__ convention.
Note: `Compressed_Size` __includes__ the size of the Huffman Tree description
_when_ it is present.
Note 2: `Compressed_Size` can never be `==0`.
Even in single-stream scenario, assuming an empty content, it must be `>=1`,
since it contains at least the final end bit flag.
In 4-streams scenario, a valid `Compressed_Size` is necessarily `>= 10`
(6 bytes for the jump table, + 4x1 bytes for the 4 streams).

4 streams is faster than 1 stream in decompression speed,
by exploiting instruction level parallelism.
But it's also more expensive,
costing on average ~7.3 bytes more than the 1 stream mode, mostly from the jump table.

In general, use the 4 streams mode when there are more literals to decode,
to favor higher decompression speeds.
Note that beyond >1KB of literals, the 4 streams mode is compulsory.

Note that a minimum of 6 bytes is required for the 4 streams mode.
That's a technical minimum, but it's not recommended to employ the 4 streams mode
for such a small quantity, that would be wasteful.
A more practical lower bound would be around ~256 bytes.

<a id="source-raw-literals-block"></a>

#### Raw Literals Block
The data in Stream1 is `Regenerated_Size` bytes long,
it contains the raw literals data to be used during [Sequence Execution].

<a id="source-rle-literals-block"></a>

#### RLE Literals Block
Stream1 consists of a single byte which should be repeated `Regenerated_Size` times
to generate the decoded literals.

<a id="source-compressed-literals-block-and-treeless-literals-block"></a>

#### Compressed Literals Block and Treeless Literals Block
Both of these modes contain Huffman encoded data.

For `Treeless_Literals_Block`,
the Huffman table comes from previously compressed literals block,
or from a dictionary.


<a id="source-huffman_tree_description"></a>

### `Huffman_Tree_Description`
This section is only present when `Literals_Block_Type` type is `Compressed_Literals_Block` (`2`).
The tree describes the weights of all literals symbols that can be present in the literals block, at least 2 and up to 256.
The format of the Huffman tree description can be found at [Huffman Tree description](/docs/zstd/v1-5-7/en/01-specification/07-huffman#source-huffman-tree-description).
The size of `Huffman_Tree_Description` is determined during decoding process,
it must be used to determine where streams begin.
`Total_Streams_Size = Compressed_Size - Huffman_Tree_Description_Size`.


<a id="source-jump-table"></a>

### Jump Table
The Jump Table is only present when there are 4 Huffman-coded streams.

Reminder : Huffman compressed data consists of either 1 or 4 streams.

If only one stream is present, it is a single bitstream occupying the entire
remaining portion of the literals block, encoded as described in
[Huffman-Coded Streams](/docs/zstd/v1-5-7/en/01-specification/07-huffman#source-huffman-coded-streams).

If there are four streams, `Literals_Section_Header` only provided
enough information to know the decompressed and compressed sizes
of all four streams _combined_.
The decompressed size of _each_ stream is equal to `(Regenerated_Size+3)/4`,
except for the last stream which may be up to 3 bytes smaller,
to reach a total decompressed size as specified in `Regenerated_Size`.

The compressed size of each stream is provided explicitly in the Jump Table.
Jump Table is 6 bytes long, and consists of three 2-byte __little-endian__ fields,
describing the compressed sizes of the first three streams.
`Stream4_Size` is computed from `Total_Streams_Size` minus sizes of other streams:

`Stream4_Size = Total_Streams_Size - 6 - Stream1_Size - Stream2_Size - Stream3_Size`.

`Stream4_Size` is necessarily `>= 1`. Therefore,
if `Total_Streams_Size < Stream1_Size + Stream2_Size + Stream3_Size + 6 + 1`,
data is considered corrupted.

Each of these 4 bitstreams is then decoded independently as a Huffman-Coded stream,
as described in [Huffman-Coded Streams](/docs/zstd/v1-5-7/en/01-specification/07-huffman#source-huffman-coded-streams)



[description of the codes]: /docs/zstd/v1-5-7/en/01-specification/04-sequences#source-the-codes-for-literals-lengths-match-lengths-and-offsets
[FSE section]: /docs/zstd/v1-5-7/en/01-specification/06-fse#source-from-normalized-distribution-to-decoding-tables
[Offset Codes]: /docs/zstd/v1-5-7/en/01-specification/04-sequences#source-offset-codes
[LZ4]:https://lz4.github.io/lz4/
[Finite State Entropy]:https://github.com/Cyan4973/FiniteStateEntropy/
[ANS]: https://en.wikipedia.org/wiki/Asymmetric_Numeral_Systems
[next section]:/docs/zstd/v1-5-7/en/01-specification/06-fse#source-from-normalized-distribution-to-decoding-tables
[Appendix A]: /docs/zstd/v1-5-7/en/01-specification/09-appendices#source-appendix-a---decoding-tables-for-predefined-codes
[compressed blocks]: #source-compressed-blocks
[decodeCorpus]: https://github.com/facebook/zstd/tree/v1.3.4/tests#decodecorpus---tool-to-generate-zstandard-frames-for-decoder-testing
