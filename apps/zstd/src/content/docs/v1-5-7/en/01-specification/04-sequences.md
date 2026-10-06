---
title: "Zstandard: Sequences and execution"
description: "Format specification 0.4.3 — Sequences and execution"
documentId: "zstd-format-04-sequences"
order: 4
licenseSource: "zstd-format-0.4.3"
documentContext: [{"kind":"source","html":"<p>Zstandard 1.5.7 / format specification 0.4.3 (2024-10-07), Meta Platforms, Inc. and affiliates. <a href=\"https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md\">Fixed original</a>; <a href=\"/docs/zstd/source/v1-5-7/zstd_compression_format.md\">Complete original Markdown</a>; <a href=\"/docs/zstd/source/v1-5-7/NOTICE.txt\">Original permission notice</a>.</p>"},{"kind":"editorial","html":"<p>Libx provides the complete fixed format specification in nine static chapters. CLI, API and implementation behavior are outside this scope; see the original project. Original headings and internal links are adapted for chapter navigation. One original broken reference to compressed blocks is repaired. This is an unofficial edition; the original notice is preserved.</p>"}]
---

<a id="source-sequences-section"></a>

Sequences Section
-----------------
A compressed block is a succession of _sequences_ .
A sequence is a literal copy command, followed by a match copy command.
A literal copy command specifies a length.
It is the number of bytes to be copied (or extracted) from the Literals Section.
A match copy command specifies an offset and a length.

When all _sequences_ are decoded,
if there are literals left in the _literals section_,
these bytes are added at the end of the block.

This is described in more detail in [Sequence Execution](#source-sequence-execution).

The `Sequences_Section` regroup all symbols required to decode commands.
There are 3 symbol types : literals lengths, offsets and match lengths.
They are encoded together, interleaved, in a single _bitstream_.

The `Sequences_Section` starts by a header,
followed by optional probability tables for each symbol type,
followed by the bitstream.

| `Sequences_Section_Header` | [`Literals_Length_Table`] | [`Offset_Table`] | [`Match_Length_Table`] | bitStream |
| -------------------------- | ------------------------- | ---------------- | ---------------------- | --------- |

To decode the `Sequences_Section`, it's required to know its size.
Its size is deduced from the size of `Literals_Section`:
`Sequences_Section_Size = Block_Size - Literals_Section_Size`.


<a id="source-sequences_section_header"></a>

#### `Sequences_Section_Header`

Consists of 2 items:
- `Number_of_Sequences`
- Symbol compression modes

__`Number_of_Sequences`__

This is a variable size field using between 1 and 3 bytes.
Let's call its first byte `byte0`.
- `if (byte0 < 128)` : `Number_of_Sequences = byte0` . Uses 1 byte.
- `if (byte0 < 255)` : `Number_of_Sequences = ((byte0 - 0x80) << 8) + byte1`. Uses 2 bytes.
            Note that the 2 bytes format fully overlaps the 1 byte format.
- `if (byte0 == 255)`: `Number_of_Sequences = byte1 + (byte2<<8) + 0x7F00`. Uses 3 bytes.

`if (Number_of_Sequences == 0)` : there are no sequences.
            The sequence section stops immediately,
            FSE tables used in `Repeat_Mode` aren't updated.
            Block's decompressed content is defined solely by the Literals Section content.

__Symbol compression modes__

This is a single byte, defining the compression mode of each symbol type.

|Bit number|          7-6            |      5-4       |        3-2           |     1-0    |
| -------- | ----------------------- | -------------- | -------------------- | ---------- |
|Field name| `Literals_Lengths_Mode` | `Offsets_Mode` | `Match_Lengths_Mode` | `Reserved` |

The last field, `Reserved`, must be all-zeroes.

`Literals_Lengths_Mode`, `Offsets_Mode` and `Match_Lengths_Mode` define the `Compression_Mode` of
literals lengths, offsets, and match lengths symbols respectively.

They follow the same enumeration :

|        Value       |         0         |      1     |           2           |       3       |
| ------------------ | ----------------- | ---------- | --------------------- | ------------- |
| `Compression_Mode` | `Predefined_Mode` | `RLE_Mode` | `FSE_Compressed_Mode` | `Repeat_Mode` |

- `Predefined_Mode` : A predefined FSE distribution table is used, defined in
          [default distributions](#source-default-distributions).
          No distribution table will be present.
- `RLE_Mode` : The table description consists of a single byte, which contains the symbol's value.
          This symbol will be used for all sequences.
- `FSE_Compressed_Mode` : standard FSE compression.
          A distribution table will be present.
          The format of this distribution table is described in [FSE Table Description](/docs/zstd/v1-5-7/en/01-specification/06-fse#source-fse-table-description).
          Note that the maximum allowed accuracy log for literals length and match length tables is 9,
          and the maximum accuracy log for the offsets table is 8.
          `FSE_Compressed_Mode` must not be used when only one symbol is present,
          `RLE_Mode` should be used instead (although any other mode will work).
- `Repeat_Mode` : The table used in the previous `Compressed_Block` with `Number_of_Sequences > 0` will be used again,
          or if this is the first block, table in the dictionary will be used.
          Note that this includes `RLE_mode`, so if `Repeat_Mode` follows `RLE_Mode`, the same symbol will be repeated.
          It also includes `Predefined_Mode`, in which case `Repeat_Mode` will have same outcome as `Predefined_Mode`.
          No distribution table will be present.
          If this mode is used without any previous sequence table in the frame
          (nor [dictionary](/docs/zstd/v1-5-7/en/01-specification/08-dictionary#source-dictionary-format)) to repeat, this should be treated as corruption.

<a id="source-the-codes-for-literals-lengths-match-lengths-and-offsets"></a>

#### The codes for literals lengths, match lengths, and offsets.

Each symbol is a _code_ in its own context,
which specifies `Baseline` and `Number_of_Bits` to add.
_Codes_ are FSE compressed,
and interleaved with raw additional bits in the same bitstream.

<a id="source-literals-length-codes"></a>

##### Literals length codes

Literals length codes are values ranging from `0` to `35` included.
They define lengths from 0 to 131071 bytes.
The literals length is equal to the decoded `Baseline` plus
the result of reading `Number_of_Bits` bits from the bitstream,
as a __little-endian__ value.

| `Literals_Length_Code` |         0-15           |
| ---------------------- | ---------------------- |
| length                 | `Literals_Length_Code` |
| `Number_of_Bits`       |          0             |

| `Literals_Length_Code` |  16  |  17  |  18  |  19  |  20  |  21  |  22  |  23  |
| ---------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| `Baseline`             |  16  |  18  |  20  |  22  |  24  |  28  |  32  |  40  |
| `Number_of_Bits`       |   1  |   1  |   1  |   1  |   2  |   2  |   3  |   3  |

| `Literals_Length_Code` |  24  |  25  |  26  |  27  |  28  |  29  |  30  |  31  |
| ---------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| `Baseline`             |  48  |  64  |  128 |  256 |  512 | 1024 | 2048 | 4096 |
| `Number_of_Bits`       |   4  |   6  |   7  |   8  |   9  |  10  |  11  |  12  |

| `Literals_Length_Code` |  32  |  33  |  34  |  35  |
| ---------------------- | ---- | ---- | ---- | ---- |
| `Baseline`             | 8192 |16384 |32768 |65536 |
| `Number_of_Bits`       |  13  |  14  |  15  |  16  |


<a id="source-match-length-codes"></a>

##### Match length codes

Match length codes are values ranging from `0` to `52` included.
They define lengths from 3 to 131074 bytes.
The match length is equal to the decoded `Baseline` plus
the result of reading `Number_of_Bits` bits from the bitstream,
as a __little-endian__ value.

| `Match_Length_Code` |         0-31            |
| ------------------- | ----------------------- |
| value               | `Match_Length_Code` + 3 |
| `Number_of_Bits`    |          0              |

| `Match_Length_Code` |  32  |  33  |  34  |  35  |  36  |  37  |  38  |  39  |
| ------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| `Baseline`          |  35  |  37  |  39  |  41  |  43  |  47  |  51  |  59  |
| `Number_of_Bits`    |   1  |   1  |   1  |   1  |   2  |   2  |   3  |   3  |

| `Match_Length_Code` |  40  |  41  |  42  |  43  |  44  |  45  |  46  |  47  |
| ------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| `Baseline`          |  67  |  83  |  99  |  131 |  259 |  515 | 1027 | 2051 |
| `Number_of_Bits`    |   4  |   4  |   5  |   7  |   8  |   9  |  10  |  11  |

| `Match_Length_Code` |  48  |  49  |  50  |  51  |  52  |
| ------------------- | ---- | ---- | ---- | ---- | ---- |
| `Baseline`          | 4099 | 8195 |16387 |32771 |65539 |
| `Number_of_Bits`    |  12  |  13  |  14  |  15  |  16  |

<a id="source-offset-codes"></a>

##### Offset codes

Offset codes are values ranging from `0` to `N`.

A decoder is free to limit its maximum `N` supported.
Recommendation is to support at least up to `22`.
For information, at the time of this writing.
the reference decoder supports a maximum `N` value of `31`.

An offset code is also the number of additional bits to read in __little-endian__ fashion,
and can be translated into an `Offset_Value` using the following formulas :

```
Offset_Value = (1 << offsetCode) + readNBits(offsetCode);
if (Offset_Value > 3) offset = Offset_Value - 3;
```
It means that maximum `Offset_Value` is `(2^(N+1))-1`
supporting back-reference distances up to `(2^(N+1))-4`,
but is limited by [maximum back-reference distance](/docs/zstd/v1-5-7/en/01-specification/02-frames#source-window_descriptor).

`Offset_Value` from 1 to 3 are special : they define "repeat codes".
This is described in more detail in [Repeat Offsets](#source-repeat-offsets).

<a id="source-decoding-sequences"></a>

#### Decoding Sequences
FSE bitstreams are read in reverse direction than written. In zstd,
the compressor writes bits forward into a block and the decompressor
must read the bitstream _backwards_.

To find the start of the bitstream it is therefore necessary to
know the offset of the last byte of the block which can be found
by counting `Block_Size` bytes after the block header.

After writing the last bit containing information, the compressor
writes a single `1`-bit and then fills the byte with 0-7 `0` bits of
padding. The last byte of the compressed bitstream cannot be `0` for
that reason.

When decompressing, the last byte containing the padding is the first
byte to read. The decompressor needs to skip 0-7 initial `0`-bits and
the first `1`-bit it occurs. Afterwards, the useful part of the bitstream
begins.

FSE decoding requires a 'state' to be carried from symbol to symbol.
For more explanation on FSE decoding, see the [FSE section](/docs/zstd/v1-5-7/en/01-specification/06-fse#source-fse).

For sequence decoding, a separate state keeps track of each
literal lengths, offsets, and match lengths symbols.
Some FSE primitives are also used.
For more details on the operation of these primitives, see the [FSE section](/docs/zstd/v1-5-7/en/01-specification/06-fse#source-fse).

<a id="source-starting-states"></a>

##### Starting states
The bitstream starts with initial FSE state values,
each using the required number of bits in their respective _accuracy_,
decoded previously from their normalized distribution.

It starts by `Literals_Length_State`,
followed by `Offset_State`,
and finally `Match_Length_State`.

Reminder : always keep in mind that all values are read _backward_,
so the 'start' of the bitstream is at the highest position in memory,
immediately before the last `1`-bit for padding.

After decoding the starting states, a single sequence is decoded
`Number_Of_Sequences` times.
These sequences are decoded in order from first to last.
Since the compressor writes the bitstream in the forward direction,
this means the compressor must encode the sequences starting with the last
one and ending with the first.

<a id="source-decoding-a-sequence"></a>

##### Decoding a sequence
For each of the symbol types, the FSE state can be used to determine the appropriate code.
The code then defines the `Baseline` and `Number_of_Bits` to read for each type.
See the [description of the codes] for how to determine these values.

[description of the codes]: #source-the-codes-for-literals-lengths-match-lengths-and-offsets

Decoding starts by reading the `Number_of_Bits` required to decode `Offset`.
It then does the same for `Match_Length`, and then for `Literals_Length`.
This sequence is then used for [sequence execution](#source-sequence-execution).

If it is not the last sequence in the block,
the next operation is to update states.
Using the rules pre-calculated in the decoding tables,
`Literals_Length_State` is updated,
followed by `Match_Length_State`,
and then `Offset_State`.
See the [FSE section](/docs/zstd/v1-5-7/en/01-specification/06-fse#source-fse) for details on how to update states from the bitstream.

This operation will be repeated `Number_of_Sequences` times.
At the end, the bitstream shall be entirely consumed,
otherwise the bitstream is considered corrupted.

<a id="source-default-distributions"></a>

#### Default Distributions
If `Predefined_Mode` is selected for a symbol type,
its FSE decoding table is generated from a predefined distribution table defined here.
For details on how to convert this distribution into a decoding table, see the [FSE section].

[FSE section]: /docs/zstd/v1-5-7/en/01-specification/06-fse#source-from-normalized-distribution-to-decoding-tables

<a id="source-literals-length"></a>

##### Literals Length
The decoding table uses an accuracy log of 6 bits (64 states).
```
short literalsLength_defaultDistribution[36] =
        { 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1,
          2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 1, 1, 1, 1, 1,
         -1,-1,-1,-1 };
```

<a id="source-match-length"></a>

##### Match Length
The decoding table uses an accuracy log of 6 bits (64 states).
```
short matchLengths_defaultDistribution[53] =
        { 1, 4, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,-1,-1,
         -1,-1,-1,-1,-1 };
```

<a id="source-offset-codes-1"></a>

##### Offset Codes
The decoding table uses an accuracy log of 5 bits (32 states),
and supports a maximum `N` value of 28, allowing offset values up to 536,870,908 .

If any sequence in the compressed block requires a larger offset than this,
it's not possible to use the default distribution to represent it.
```
short offsetCodes_defaultDistribution[29] =
        { 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1,-1,-1,-1,-1,-1 };
```


<a id="source-sequence-execution"></a>

Sequence Execution
------------------
Once literals and sequences have been decoded,
they are combined to produce the decoded content of a block.

Each sequence consists of a tuple of (`literals_length`, `offset_value`, `match_length`),
decoded as described in the [Sequences Section](#source-sequences-section).
To execute a sequence, first copy `literals_length` bytes
from the decoded literals to the output.

Then `match_length` bytes are copied from previous decoded data.
The offset to copy from is determined by `offset_value`:
if `offset_value > 3`, then the offset is `offset_value - 3`.
If `offset_value` is from 1-3, the offset is a special repeat offset value.
See the [repeat offset](#source-repeat-offsets) section for how the offset is determined
in this case.

The offset is defined as from the current position, so an offset of 6
and a match length of 3 means that 3 bytes should be copied from 6 bytes back.
Note that all offsets leading to previously decoded data
must be smaller than `Window_Size` defined in `Frame_Header_Descriptor`.

<a id="source-repeat-offsets"></a>

#### Repeat offsets
As seen in [Sequence Execution](#source-sequence-execution),
the first 3 values define a repeated offset and we will call them
`Repeated_Offset1`, `Repeated_Offset2`, and `Repeated_Offset3`.
They are sorted in recency order, with `Repeated_Offset1` meaning "most recent one".

If `offset_value == 1`, then the offset used is `Repeated_Offset1`, etc.

There is an exception though, when current sequence's `literals_length = 0`.
In this case, repeated offsets are shifted by one,
so an `offset_value` of 1 means `Repeated_Offset2`,
an `offset_value` of 2 means `Repeated_Offset3`,
and an `offset_value` of 3 means `Repeated_Offset1 - 1`.

In the final case, if `Repeated_Offset1 - 1` evaluates to 0, then the
data is considered corrupted.

For the first block, the starting offset history is populated with following values :
`Repeated_Offset1`=1, `Repeated_Offset2`=4, `Repeated_Offset3`=8,
unless a dictionary is used, in which case they come from the dictionary.

Then each block gets its starting offset history from the ending values of the most recent `Compressed_Block`.
Note that blocks which are not `Compressed_Block` are skipped, they do not contribute to offset history.

[Offset Codes]: #source-offset-codes

<a id="source-offset-updates-rules"></a>

###### Offset updates rules

During the execution of the sequences of a `Compressed_Block`, the
`Repeated_Offsets`' values are kept up to date, so that they always represent
the three most-recently used offsets. In order to achieve that, they are
updated after executing each sequence in the following way:

When the sequence's `offset_value` does not refer to one of the
`Repeated_Offsets`--when it has value greater than 3, or when it has value 3
and the sequence's `literals_length` is zero--the `Repeated_Offsets`' values
are shifted back one, and `Repeated_Offset1` takes on the value of the
just-used offset.

Otherwise, when the sequence's `offset_value` refers to one of the
`Repeated_Offsets`--when it has value 1 or 2, or when it has value 3 and the
sequence's `literals_length` is non-zero--the `Repeated_Offsets` are re-ordered
so that `Repeated_Offset1` takes on the value of the used Repeated_Offset, and
the existing values are pushed back from the first `Repeated_Offset` through to
the `Repeated_Offset` selected by the `offset_value`. This effectively performs
a single-stepped wrapping rotation of the values of these offsets, so that
their order again reflects the recency of their use.

The following table shows the values of the `Repeated_Offsets` as a series of
sequences are applied to them:

| `offset_value` | `literals_length` | `Repeated_Offset1` | `Repeated_Offset2` | `Repeated_Offset3` | Comment                 |
|:--------------:|:-----------------:|:------------------:|:------------------:|:------------------:|:-----------------------:|
|                |                   |                  1 |                  4 |                  8 | starting values         |
|           1114 |                11 |               1111 |                  1 |                  4 | non-repeat              |
|              1 |                22 |               1111 |                  1 |                  4 | repeat 1: no change     |
|           2225 |                22 |               2222 |               1111 |                  1 | non-repeat              |
|           1114 |               111 |               1111 |               2222 |               1111 | non-repeat              |
|           3336 |                33 |               3333 |               1111 |               2222 | non-repeat              |
|              2 |                22 |               1111 |               3333 |               2222 | repeat 2: swap 1 & 2    |
|              3 |                33 |               2222 |               1111 |               3333 | repeat 3: rotate 3 to 1 |
|              3 |                 0 |               2221 |               2222 |               1111 | special case : insert `repeat1 - 1` |
|              1 |                 0 |               2222 |               2221 |               1111 | == repeat 2             |



[LZ4]:https://lz4.github.io/lz4/
[Finite State Entropy]:https://github.com/Cyan4973/FiniteStateEntropy/
[ANS]: https://en.wikipedia.org/wiki/Asymmetric_Numeral_Systems
[next section]:/docs/zstd/v1-5-7/en/01-specification/06-fse#source-from-normalized-distribution-to-decoding-tables
[Appendix A]: /docs/zstd/v1-5-7/en/01-specification/09-appendices#source-appendix-a---decoding-tables-for-predefined-codes
[compressed blocks]: /docs/zstd/v1-5-7/en/01-specification/03-blocks#source-compressed-blocks
[decodeCorpus]: https://github.com/facebook/zstd/tree/v1.3.4/tests#decodecorpus---tool-to-generate-zstandard-frames-for-decoder-testing
