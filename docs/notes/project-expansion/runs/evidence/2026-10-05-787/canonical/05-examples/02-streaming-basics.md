---
title: "LZ4: examples/streaming_api_basics.md"
licenseSource: "lz4-1-10-0-examples-streaming-api-basics-md"
documentContext:
  - kind: source
    html: "<p>Unofficial Libx presentation of the fixed LZ4 1.10.0 English original. Formatting and link mapping: 2026-10-05. Original commit: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>; SHA-256: <code>f5f623970b6f533586fe2cb6dd12bcd82f0852a35d1d3406eef2ab86323831e7</code>. <a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/examples/streaming_api_basics.md\">Fixed upstream source</a>; <a href=\"/docs/lz4/source/v1-10-0/originals/examples/streaming_api_basics.md.txt\">Unmodified original and its notices</a>; <a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">Complete fixed upstream archive</a>; <a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">Upstream license allocation notice</a>. Original copyright, permission, and warranty notices are retained. Japanese translations are unofficial.</p><p>Under Libx’s operating policy, where no documentation-specific license statement was found, the software license identified for this material is applied to this documentation. Applicable terms: GPL-2.0-or-later（本掲載はversion2条件を履行）. This is an operational decision, not a newly obtained permission.</p><p>Presentation changes: original Markdown unchanged except mapped local destinations. No technical prose has been silently corrected or summarized.</p>"
---

# LZ4 Streaming API Basics
by *Takayuki Matsuoka*
## LZ4 API sets

LZ4 has the following API sets :

 - "Auto Framing" API (lz4frame.h) :
   This is most recommended API for usual application.
   It guarantees interoperability with other LZ4 framing format compliant tools/libraries
   such as LZ4 command line utility, node-lz4, etc.
 - "Block" API : This is recommended for simple purpose.
   It compresses single raw memory block to LZ4 memory block and vice versa.
 - "Streaming" API : This is designed for complex things.
   For example, compress huge stream data in restricted memory environment.

Basically, you should use "Auto Framing" API.
But if you want to write advanced application, it's time to use Block or Streaming APIs.


## What is difference between Block and Streaming API ?

Block API (de)compresses a single contiguous memory block.
In other words, LZ4 library finds redundancy from a single contiguous memory block.
Streaming API does same thing but (de)compresses multiple adjacent contiguous memory blocks.
So Streaming API could find more redundancy than Block API.

The following figure shows difference between API and block sizes.
In these figures, the original data is split into 4KiBytes contiguous chunks.

```
Original Data
    +---------------+---------------+----+----+----+
    | 4KiB Chunk A  | 4KiB Chunk B  | C  | D  |... |
    +---------------+---------------+----+----+----+

Example (1) : Block API, 4KiB Block
    +---------------+---------------+----+----+----+
    | 4KiB Chunk A  | 4KiB Chunk B  | C  | D  |... |
    +---------------+---------------+----+----+----+
    | Block #1      | Block #2      | #3 | #4 |... |
    +---------------+---------------+----+----+----+

                    (No Dependency)


Example (2) : Block API, 8KiB Block
    +---------------+---------------+----+----+----+
    | 4KiB Chunk A  | 4KiB Chunk B  | C  | D  |... |
    +---------------+---------------+----+----+----+
    |            Block #1           |Block #2 |... |
    +--------------------+----------+-------+-+----+
          ^              |             ^    |
          |              |             |    |
          +--------------+             +----+
          Internal Dependency          Internal Dependency


Example (3) : Streaming API, 4KiB Block
    +---------------+---------------+-----+----+----+
    | 4KiB Chunk A  | 4KiB Chunk B  | C   | D  |... |
    +---------------+---------------+-----+----+----+
    | Block #1      | Block #2      | #3  | #4 |... |
    +---------------+----+----------+-+---+-+--+----+
          ^              |   ^        | ^   |
          |              |   |        | |   |
          +--------------+   +--------+ +---+
          Dependency         Dependency Dependency
```

 - In example (1), there is no dependency.
   All blocks are compressed independently.
 - In example (2), naturally 8KiBytes block has internal dependency.
   But still block #1 and #2 are compressed independently.
 - In example (3), block #2 has dependency to #1,
   also #3 has dependency to #2 and #1, #4 has #3, #2 and #1, and so on.

Here, we can observe difference between example (2) and (3).
In (2), there's no dependency between chunk B and C, but (3) has dependency between B and C.
This dependency improves compression ratio.


## Restriction of Streaming API

For efficiency, Streaming API doesn't keep a mirror copy of dependent (de)compressed memory.
This means users should keep these dependent (de)compressed memory explicitly.
Usually, "Dependent memory" is previous adjacent contiguous memory up to 64KiBytes.
LZ4 will not access further memories.
