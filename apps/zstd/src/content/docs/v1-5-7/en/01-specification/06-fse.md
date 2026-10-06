---
title: "Zstandard: Entropy encoding and FSE"
description: "Format specification 0.4.3 — Entropy encoding and FSE"
documentId: "zstd-format-06-fse"
order: 6
licenseSource: "zstd-format-0.4.3"
documentContext: [{"kind":"source","html":"<p>Zstandard 1.5.7 / format specification 0.4.3 (2024-10-07), Meta Platforms, Inc. and affiliates. <a href=\"https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md\">Fixed original</a>; <a href=\"/docs/zstd/source/v1-5-7/zstd_compression_format.md\">Complete original Markdown</a>; <a href=\"/docs/zstd/source/v1-5-7/NOTICE.txt\">Original permission notice</a>.</p>"},{"kind":"editorial","html":"<p>Libx provides the complete fixed format specification in nine static chapters. CLI, API and implementation behavior are outside this scope; see the original project. Original headings and internal links are adapted for chapter navigation. One original broken reference to compressed blocks is repaired. This is an unofficial edition; the original notice is preserved.</p>"}]
---

<a id="source-entropy-encoding"></a>

Entropy Encoding
----------------
Two types of entropy encoding are used by the Zstandard format:
FSE, and Huffman coding.
Huffman is used to compress literals,
while FSE is used for all other symbols
(`Literals_Length_Code`, `Match_Length_Code`, offset codes)
and to compress Huffman headers.


<a id="source-fse"></a>

FSE
---
FSE, short for Finite State Entropy, is an entropy codec based on [ANS].
FSE encoding/decoding involves a state that is carried over between symbols.
Decoding must be done in the opposite direction as encoding.
Therefore, all FSE bitstreams are read from end to beginning.
Note that the order of the bits in the stream is not reversed,
we just read each multi-bits element in the reverse order they are encoded.

For additional details on FSE, see [Finite State Entropy].

[Finite State Entropy]:https://github.com/Cyan4973/FiniteStateEntropy/

FSE decoding is directed by a decoding table with a power of 2 size, each row containing three elements:
`Symbol`, `Num_Bits`, and `Baseline`.
The `log2` of the table size is its `Accuracy_Log`.
An FSE state value represents an index in this table.

To obtain the initial state value, consume `Accuracy_Log` bits from the stream as a __little-endian__ value.
The first symbol in the stream is the `Symbol` indicated in the table for that state.
To obtain the next state value,
the decoder should consume `Num_Bits` bits from the stream as a __little-endian__ value and add it to `Baseline`.

[ANS]: https://en.wikipedia.org/wiki/Asymmetric_Numeral_Systems

<a id="source-fse-table-description"></a>

### FSE Table Description
To decode an FSE bitstream, it is necessary to build its FSE decoding table.
The decoding table is derived from a distribution of Probabilities.
The Zstandard format encodes distributions of Probabilities as follows:

The distribution of probabilities is described in a bitstream which is read forward,
in __little-endian__ fashion.
The amount of bytes consumed from the bitstream to describe the distribution
is discovered at the end of the decoding process.

The bitstream starts by reporting on which scale the distribution operates.
Let's `low4Bits` designate the lowest 4 bits of the first byte :
`Accuracy_Log = low4bits + 5`.

An FSE distribution table describes the probabilities of all symbols
from `0` to the last present one (included) in natural order.
The sum of probabilities is normalized to reach a power of 2 total of `1 << Accuracy_Log` .
There must be two or more symbols with non-zero probabilities.

The number of bits used to decode each probability is variable.
It depends on :

- Remaining probabilities + 1 :
  __example__ :
  Presuming an `Accuracy_Log` of 8,
  and presuming 100 probability points have already been distributed,
  the decoder may read any value from `0` to `256 - 100 + 1 == 157` (inclusive).
  Therefore, it may read up to `log2sup(157) == 8` bits, where `log2sup(N)`
  is the smallest integer `T` that satisfies `(1 << T) > N`.

- Value decoded : small values use 1 less bit :
  __example__ :
  Presuming values from 0 to 157 (inclusive) are possible,
  255-157 = 98 values are remaining in an 8-bits field.
  They are used this way :
  first 98 values (hence from 0 to 97) use only 7 bits,
  values from 98 to 157 use 8 bits.
  This is achieved through this scheme :

  | 8-bit field read | Value decoded | Nb of bits consumed |
  | ---------------- | ------------- | ------------------- |
  |         0 -  97  |   0 -  97     |  7                  |
  |        98 - 127  |  98 - 127     |  8                  |
  |       128 - 225  |   0 -  97     |  7                  |
  |       226 - 255  | 128 - 157     |  8                  |

Probability is derived from Value decoded using the following formula:
`Probality = Value - 1`

Consequently, a Probability of `0` is described by a Value `1`.

A Value `0` is used to signal a special case, named "Probability `-1`".
It describes a probability which should have been "less than 1".
Its effect on the decoding table building process is described in the [next section].
For the purpose of counting total allocated probability points, it counts as one.

[next section]:#source-from-normalized-distribution-to-decoding-tables

Symbols probabilities are read one by one, in order.
After each probability is decoded, the total nb of probability points is updated.
This is used to determine how many bits must be read to decode the probability of next symbol.

When a symbol has a __probability__ of `zero` (decoded from reading a Value `1`),
it is followed by a 2-bits repeat flag.
This repeat flag tells how many probabilities of zeroes follow the current one.
It provides a number ranging from 0 to 3.
If it is a 3, another 2-bits repeat flag follows, and so on.

When the Probability for a symbol makes cumulated total reach `1 << Accuracy_Log`,
then it's the last symbol, and decoding is complete.

Then the decoder can tell how many bytes were used in this process,
and how many symbols are present.
The bitstream consumes a round number of bytes.
Any remaining bit within the last byte is just unused.

If this process results in a non-zero probability for a symbol outside of the
valid range of symbols that the FSE table is defined for, even if that symbol is
not used, then the data is considered corrupted.
For the specific case of offset codes,
a decoder implementation may reject a frame containing a non-zero probability
for an offset code larger than the largest offset code supported by the decoder
implementation.

<a id="source-from-normalized-distribution-to-decoding-tables"></a>

#### From normalized distribution to decoding tables

The normalized distribution of probabilities is enough
to create a unique decoding table.
It is generated using the following build rule :

The table has a size of `Table_Size = 1 << Accuracy_Log`.
Each row specifies the decoded symbol,
and instructions to reach the next state (`Number_of_Bits` and `Baseline`).

Symbols are first scanned in their natural order for "less than 1" probabilities
(previously decoded from a Value of `0`).
Symbols with this special probability are being attributed a single row,
starting from the end of the table and retreating.
These symbols define a full state reset, reading `Accuracy_Log` bits.

Then, all remaining symbols, sorted in natural order, are allocated rows.
Starting from smallest present symbol, and table position `0`,
each symbol gets allocated as many rows as its probability.

Row allocation is not linear, it follows this order, in modular arithmetic:
```
position += (tableSize>>1) + (tableSize>>3) + 3;
position &= tableSize-1;
```

Using above ordering rule, each symbol gets allocated as many rows as its probability.
If a position is already occupied by a "less than 1" probability symbol,
it is simply skipped, and the next position is allocated instead.
Once enough rows have been allocated for the current symbol,
the allocation process continues, using the next symbol, in natural order.
This process guarantees that the table is entirely and exactly filled.

Each row specifies a decoded symbol, and is accessed by current state value.
It also specifies `Number_of_Bits` and `Baseline`, which are required to determine next state value.

To correctly set these fields, it's necessary to sort all occurrences of each symbol in state value order,
and then attribute N+1 bits to lower rows, and N bits to higher rows,
following the process described below (using an example):

__Example__ :
Presuming an `Accuracy_Log` of 7,
let's imagine a symbol with a Probability of 5:
it receives 5 rows, corresponding to 5 state values between `0` and `127`.

In this example, the first state value happens to be `1` (after unspecified previous symbols).
The next 4 states are then determined using above modular arithmetic rule,
which specifies to add `64+16+3 = 83` modulo `128` to jump to next position,
producing the following series: `1`, `84`, `39`, `122`, `77` (modular arithmetic).
(note: the next symbol will then start at `32`).

These state values are then sorted in natural order,
resulting in the following series: `1`, `39`, `77`, `84`, `122`.

The next power of 2 after 5 is 8.
Therefore, the probability space will be divided into 8 equal parts.
Since the probability space is `1<<7 = 128` large, each share is `128/8 = 16` large.

In order to reach 8 shares, the `8-5 = 3` lowest states will count "double",
doubling their shares (32 in width), hence requiring one more bit.

Baseline is assigned starting from the lowest state using fewer bits,
continuing in natural state order, looping back at the beginning.
Each state takes its allocated range from Baseline, sized by its `Number_of_Bits`.

| state order      |   0   |   1   |    2   |   3  |    4   |
| ---------------- | ----- | ----- | ------ | ---- | ------ |
| state value      |   1   |  39   |   77   |  84  |  122   |
| width            |  32   |  32   |   32   |  16  |   16   |
| `Number_of_Bits` |   5   |   5   |    5   |   4  |    4   |
| allocation order |   3   |   4   |    5   |   1  |    2   |
| `Baseline`       |  32   |  64   |   96   |   0  |   16   |
| range            | 32-63 | 64-95 | 96-127 | 0-15 | 16-31  |

During decoding, the next state value is determined by using current state value as row number,
then reading the required `Number_of_Bits` from the bitstream, and adding the specified `Baseline`.

Note:
as a trivial example, it follows that, for a symbol with a Probability of `1`,
`Baseline` is necessarily `0`, and `Number_of_Bits` is necessarily `Accuracy_Log`.

See [Appendix A] to see the outcome of this process applied to the default distributions.

[Appendix A]: /docs/zstd/v1-5-7/en/01-specification/09-appendices#source-appendix-a---decoding-tables-for-predefined-codes



[description of the codes]: /docs/zstd/v1-5-7/en/01-specification/04-sequences#source-the-codes-for-literals-lengths-match-lengths-and-offsets
[FSE section]: #source-from-normalized-distribution-to-decoding-tables
[Offset Codes]: /docs/zstd/v1-5-7/en/01-specification/04-sequences#source-offset-codes
[LZ4]:https://lz4.github.io/lz4/
[compressed blocks]: /docs/zstd/v1-5-7/en/01-specification/03-blocks#source-compressed-blocks
[decodeCorpus]: https://github.com/facebook/zstd/tree/v1.3.4/tests#decodecorpus---tool-to-generate-zstandard-frames-for-decoder-testing
