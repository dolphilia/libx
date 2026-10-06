---
title: "Zstandard: Huffman coding"
description: "Format specification 0.4.3 — Huffman coding"
documentId: "zstd-format-07-huffman"
order: 7
licenseSource: "zstd-format-0.4.3"
documentContext: [{"kind":"source","html":"<p>Zstandard 1.5.7 / format specification 0.4.3 (2024-10-07), Meta Platforms, Inc. and affiliates. <a href=\"https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md\">Fixed original</a>; <a href=\"/docs/zstd/source/v1-5-7/zstd_compression_format.md\">Complete original Markdown</a>; <a href=\"/docs/zstd/source/v1-5-7/NOTICE.txt\">Original permission notice</a>.</p>"},{"kind":"editorial","html":"<p>Libx provides the complete fixed format specification in nine static chapters. CLI, API and implementation behavior are outside this scope; see the original project. Original headings and internal links are adapted for chapter navigation. One original broken reference to compressed blocks is repaired. This is an unofficial edition; the original notice is preserved.</p><p>The final ABEF encoding table is reproduced verbatim. Its E/F code entries differ from the prefix-code table above; consult the fixed original and reference implementation.</p>"}]
---

<a id="source-huffman-coding"></a>

Huffman Coding
--------------
Zstandard Huffman-coded streams are read backwards,
similar to the FSE bitstreams.
Therefore, to find the start of the bitstream, it is required to
know the offset of the last byte of the Huffman-coded stream.

After writing the last bit containing information, the compressor
writes a single `1`-bit and then fills the byte with 0-7 `0` bits of
padding. The last byte of the compressed bitstream cannot be `0` for
that reason.

When decompressing, the last byte containing the padding is the first
byte to read. The decompressor needs to skip 0-7 initial `0`-bits and
the first `1`-bit it occurs. Afterwards, the useful part of the bitstream
begins.

The bitstream contains Huffman-coded symbols in __little-endian__ order,
with the codes defined by the method below.

<a id="source-huffman-tree-description"></a>

### Huffman Tree Description

Prefix coding represents symbols from an a priori known alphabet
by bit sequences (codewords), one codeword for each symbol,
in a manner such that different symbols may be represented
by bit sequences of different lengths,
but a parser can always parse an encoded string
unambiguously symbol-by-symbol.

Given an alphabet with known symbol frequencies,
the Huffman algorithm allows the construction of an optimal prefix code
using the fewest bits of any possible prefix codes for that alphabet.

Prefix code must not exceed a maximum code length.
More bits improve accuracy but cost more header size,
and require more memory or more complex decoding operations.
This specification limits maximum code length to 11 bits.

<a id="source-representation"></a>

#### Representation

All literal symbols from zero (included) to last present one (excluded)
are represented by `Weight` with values from `0` to `Max_Number_of_Bits`.
Transformation from `Weight` to `Number_of_Bits` follows this formula :
```
Number_of_Bits = Weight ? (Max_Number_of_Bits + 1 - Weight) : 0
```
When a literal symbol is not present, it receives a `Weight` of 0.
The least frequent symbol receives a `Weight` of 1.
If no literal has a `Weight` of 1, then the data is considered corrupted.
If there are not at least two literals with non-zero `Weight`, then the data
is considered corrupted.
The most frequent symbol receives a `Weight` anywhere between 1 and 11 (max).
The last symbol's `Weight` is deduced from previously retrieved Weights,
by completing to the nearest power of 2. It's necessarily non 0.
If it's not possible to reach a clean power of 2 with a single `Weight` value,
the Huffman Tree Description is considered invalid.
This final power of 2 gives `Max_Number_of_Bits`, the depth of the current tree.
`Max_Number_of_Bits` must be <= 11,
otherwise the representation is considered corrupted.

__Example__ :
Let's presume the following Huffman tree must be described :

|  literal symbol  |  A  |  B  |  C  |  D  |  E  |  F  |
| ---------------- | --- | --- | --- | --- | --- | --- |
| `Number_of_Bits` |  1  |  2  |  3  |  0  |  4  |  4  |

The tree depth is 4, since its longest elements uses 4 bits
(longest elements are the ones with smallest frequency).

All symbols will now receive a `Weight` instead of `Number_of_Bits`.
Weight formula is :
```
Weight = Number_of_Bits ? (Max_Number_of_Bits + 1 - Number_of_Bits) : 0
```
It gives the following series of Weights :

| literal symbol |  A  |  B  |  C  |  D  |  E  |  F  |
| -------------- | --- | --- | --- | --- | --- | --- |
|   `Weight`     |  4  |  3  |  2  |  0  |  1  |  1  |

This list will be sent to the decoder, with the following modifications:

- `F` will not be listed, because it can be determined from previous symbols
- nor will symbols above `F` as they are all 0
- on the other hand, all symbols before `A`, starting with `\0`, will be listed, with a Weight of 0.

The decoder will do the inverse operation :
having collected weights of literal symbols from `A` to `E`,
it knows the last literal, `F`, is present with a non-zero `Weight`.
The `Weight` of `F` can be determined by advancing to the next power of 2.
The sum of `2^(Weight-1)` (excluding 0's) is :
`8 + 4 + 2 + 0 + 1 = 15`.
Nearest larger power of 2 value is 16.
Therefore, `Max_Number_of_Bits = log2(16) = 4` and `Weight[F] = log_2(16 - 15) + 1 = 1`.

<a id="source-huffman-tree-header"></a>

#### Huffman Tree header

This is a single byte value (0-255),
which describes how the series of weights is encoded.

- if `headerByte` < 128 :
  the series of weights is compressed using FSE (see below).
  The length of the FSE-compressed series is equal to `headerByte` (0-127).

- if `headerByte` >= 128 :
  + the series of weights uses a direct representation,
    where each `Weight` is encoded directly as a 4 bits field (0-15).
  + They are encoded forward, 2 weights to a byte,
    first weight taking the top four bits and second one taking the bottom four.
    * e.g. the following operations could be used to read the weights:
      `Weight[0] = (Byte[0] >> 4), Weight[1] = (Byte[0] & 0xf)`, etc.
  + The full representation occupies `Ceiling(Number_of_Weights/2)` bytes,
    meaning it uses only full bytes even if `Number_of_Weights` is odd.
  + `Number_of_Weights = headerByte - 127`.
    * Note that maximum `Number_of_Weights` is 255-127 = 128,
      therefore, only up to 128 `Weight` can be encoded using direct representation.
    * Since the last non-zero `Weight` is _not_ encoded,
      this scheme is compatible with alphabet sizes of up to 129 symbols,
      hence including literal symbol 128.
    * If any literal symbol > 128 has a non-zero `Weight`,
      direct representation is not possible.
      In such case, it's necessary to use FSE compression.


<a id="source-finite-state-entropy-fse-compression-of-huffman-weights"></a>

#### Finite State Entropy (FSE) compression of Huffman weights

In this case, the series of Huffman weights is compressed using FSE compression.
It's a single bitstream with 2 interleaved states,
sharing a single distribution table.

To decode an FSE bitstream, it is necessary to know its compressed size.
Compressed size is provided by `headerByte`.
It's also necessary to know its _maximum possible_ decompressed size,
which is `255`, since literal symbols span from `0` to `255`,
and last symbol's `Weight` is not represented.

An FSE bitstream starts by a header, describing probabilities distribution.
It will create a Decoding Table.
For a list of Huffman weights, the maximum accuracy log is 6 bits.
For more description see the [FSE header description](/docs/zstd/v1-5-7/en/01-specification/06-fse#source-fse-table-description)

The Huffman header compression uses 2 states,
which share the same FSE distribution table.
The first state (`State1`) encodes the even indexed symbols,
and the second (`State2`) encodes the odd indexed symbols.
`State1` is initialized first, and then `State2`, and they take turns
decoding a single symbol and updating their state.
For more details on these FSE operations, see the [FSE section](/docs/zstd/v1-5-7/en/01-specification/06-fse#source-fse).

The number of symbols to decode is determined
by tracking bitStream overflow condition:
If updating state after decoding a symbol would require more bits than
remain in the stream, it is assumed that extra bits are 0.  Then,
symbols for each of the final states are decoded and the process is complete.

If this process would produce more weights than the maximum number of decoded
weights (255), then the data is considered corrupted.

If either of the 2 initial states are absent or truncated, then the data is
considered corrupted.  Consequently, it is not possible to encode fewer than
2 weights using this mode.

<a id="source-conversion-from-weights-to-huffman-prefix-codes"></a>

#### Conversion from weights to Huffman prefix codes

All present symbols shall now have a `Weight` value.
It is possible to transform weights into `Number_of_Bits`, using this formula:
```
Number_of_Bits = (Weight>0) ? Max_Number_of_Bits + 1 - Weight : 0
```
In order to determine which prefix code is assigned to each Symbol,
Symbols are first sorted by `Weight`, then by natural sequential order.
Symbols with a `Weight` of zero are removed.
Then, starting from lowest `Weight` (hence highest `Number_of_Bits`),
prefix codes are assigned in ascending order.

__Example__ :
Let's assume the following list of weights has been decoded:

| Literal  |  A  |  B  |  C  |  D  |  E  |  F  |
| -------- | --- | --- | --- | --- | --- | --- |
| `Weight` |  4  |  3  |  2  |  0  |  1  |  1  |

Sorted by weight and then natural sequential order,
it gives the following prefix codes distribution:

| Literal          |  D  |   E  |   F  |   C  |   B  |   A  |
| ---------------- | --- | ---- | ---- | ---- | ---- | ---- |
| `Weight`         |  0  |   1  |   1  |   2  |   3  |   4  |
| `Number_of_Bits` |  0  |   4  |   4  |   3  |   2  |   1  |
| prefix code      | N/A | 0000 | 0001 | 001  | 01   | 1    |
| ascending order  | N/A | 0000 | 0001 | 001x | 01xx | 1xxx |

<a id="source-huffman-coded-streams"></a>

### Huffman-coded Streams

Given a Huffman decoding table,
it's possible to decode a Huffman-coded stream.

Each bitstream must be read _backward_,
that is starting from the end down to the beginning.
Therefore it's necessary to know the size of each bitstream.

It's also necessary to know exactly which _bit_ is the last one.
This is detected by a final bit flag :
the highest bit of latest byte is a final-bit-flag.
Consequently, a last byte of `0` is not possible.
And the final-bit-flag itself is not part of the useful bitstream.
Hence, the last byte contains between 0 and 7 useful bits.

Starting from the end,
it's possible to read the bitstream in a __little-endian__ fashion,
keeping track of already used bits. Since the bitstream is encoded in reverse
order, starting from the end read symbols in forward order.

For example, if the literal sequence `ABEF` was encoded using above prefix code,
it would be encoded (in reverse order) as:

|Symbol  |   F  |   E  |  B | A | Padding |
|--------|------|------|----|---|---------|
|Encoding|`0000`|`0001`|`01`|`1`| `00001` |

Resulting in following 2-bytes bitstream :
```
00010000 00001101
```

Here is an alternative representation with the symbol codes separated by underscore:
```
0001_0000 00001_1_01
```

Reading highest `Max_Number_of_Bits` bits,
it's possible to compare extracted value to decoding table,
determining the symbol to decode and number of bits to discard.

The process continues up to reading the required number of symbols per stream.
If a bitstream is not entirely and exactly consumed,
hence reaching exactly its beginning position with _all_ bits consumed,
the decoding process is considered faulty.



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
