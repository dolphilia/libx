Frames
------
Zstandard compressed data is made of one or more __frames__.
Each frame is independent and can be decompressed independently of other frames.
The decompressed content of multiple concatenated frames is the concatenation of
each frame decompressed content.

There are two frame formats defined by Zstandard:
  Zstandard frames and Skippable frames.
Zstandard frames contain compressed data, while
skippable frames contain custom user metadata.

## Zstandard frames
The structure of a single Zstandard frame is following:

| `Magic_Number` | `Frame_Header` |`Data_Block`| [More data blocks] | [`Content_Checksum`] |
|:--------------:|:--------------:|:----------:| ------------------ |:--------------------:|
|  4 bytes       |  2-14 bytes    |  n bytes   |                    |     0-4 bytes        |

__`Magic_Number`__

4 Bytes, __little-endian__ format.
Value : 0xFD2FB528
Note: This value was selected to be less probable to find at the beginning of some random file.
It avoids trivial patterns (0x00, 0xFF, repeated bytes, increasing bytes, etc.),
contains byte values outside of ASCII range,
and doesn't map into UTF8 space.
It reduces the chances that a text file represent this value by accident.

__`Frame_Header`__

2 to 14 Bytes, detailed in [`Frame_Header`](#frame_header).

__`Data_Block`__

Detailed in [`Blocks`](#blocks).
That’s where compressed data is stored.

__`Content_Checksum`__

An optional 32-bit checksum, only present if `Content_Checksum_flag` is set.
The content checksum is the result
of [xxh64() hash function](https://cyan4973.github.io/xxHash/)
digesting the original (decoded) data as input, and a seed of zero.
The low 4 bytes of the checksum are stored in __little-endian__ format.

### `Frame_Header`

The `Frame_Header` has a variable size, with a minimum of 2 bytes,
and up to 14 bytes depending on optional parameters.
The structure of `Frame_Header` is following:

| `Frame_Header_Descriptor` | [`Window_Descriptor`] | [`Dictionary_ID`] | [`Frame_Content_Size`] |
| ------------------------- | --------------------- | ----------------- | ---------------------- |
| 1 byte                    | 0-1 byte              | 0-4 bytes         | 0-8 bytes              |

#### `Frame_Header_Descriptor`

The first header's byte is called the `Frame_Header_Descriptor`.
It describes which other fields are present.
Decoding this byte is enough to tell the size of `Frame_Header`.

| Bit number | Field name                |
| ---------- | ----------                |
| 7-6        | `Frame_Content_Size_flag` |
| 5          | `Single_Segment_flag`     |
| 4          | `Unused_bit`              |
| 3          | `Reserved_bit`            |
| 2          | `Content_Checksum_flag`   |
| 1-0        | `Dictionary_ID_flag`      |

In this table, bit 7 is the highest bit, while bit 0 is the lowest one.

__`Frame_Content_Size_flag`__

This is a 2-bits flag (`= Frame_Header_Descriptor >> 6`),
specifying if `Frame_Content_Size` (the decompressed data size)
is provided within the header.
`Flag_Value` provides `FCS_Field_Size`,
which is the number of bytes used by `Frame_Content_Size`
according to the following table:

|  `Flag_Value`  |    0   |  1  |  2  |  3  |
| -------------- | ------ | --- | --- | --- |
|`FCS_Field_Size`| 0 or 1 |  2  |  4  |  8  |

When `Flag_Value` is `0`, `FCS_Field_Size` depends on `Single_Segment_flag` :
if `Single_Segment_flag` is set, `FCS_Field_Size` is 1.
Otherwise, `FCS_Field_Size` is 0 : `Frame_Content_Size` is not provided.

__`Single_Segment_flag`__

If this flag is set,
data must be regenerated within a single continuous memory segment.

In this case, `Window_Descriptor` byte is skipped,
but `Frame_Content_Size` is necessarily present.
As a consequence, the decoder must allocate a memory segment
of size equal or larger than `Frame_Content_Size`.

In order to preserve the decoder from unreasonable memory requirements,
a decoder is allowed to reject a compressed frame
which requests a memory size beyond decoder's authorized range.

For broader compatibility, decoders are recommended to support
memory sizes of at least 8 MB.
This is only a recommendation,
each decoder is free to support higher or lower limits,
depending on local limitations.

__`Unused_bit`__

A decoder compliant with this specification version shall not interpret this bit.
It might be used in any future version,
to signal a property which is transparent to properly decode the frame.
An encoder compliant with this specification version must set this bit to zero.

__`Reserved_bit`__

This bit is reserved for some future feature.
Its value _must be zero_.
A decoder compliant with this specification version must ensure it is not set.
This bit may be used in a future revision,
to signal a feature that must be interpreted to decode the frame correctly.

__`Content_Checksum_flag`__

If this flag is set, a 32-bits `Content_Checksum` will be present at frame's end.
See `Content_Checksum` paragraph.

__`Dictionary_ID_flag`__

This is a 2-bits flag (`= FHD & 3`),
telling if a dictionary ID is provided within the header.
It also specifies the size of this field as `DID_Field_Size`.

|`Flag_Value`    |  0  |  1  |  2  |  3  |
| -------------- | --- | --- | --- | --- |
|`DID_Field_Size`|  0  |  1  |  2  |  4  |

#### `Window_Descriptor`

Provides guarantees on minimum memory buffer required to decompress a frame.
This information is important for decoders to allocate enough memory.

The `Window_Descriptor` byte is optional.
When `Single_Segment_flag` is set, `Window_Descriptor` is not present.
In this case, `Window_Size` is `Frame_Content_Size`,
which can be any value from 0 to 2^64-1 bytes (16 ExaBytes).

| Bit numbers |     7-3    |     2-0    |
| ----------- | ---------- | ---------- |
| Field name  | `Exponent` | `Mantissa` |

The minimum memory buffer size is called `Window_Size`.
It is described by the following formulas :
```
windowLog = 10 + Exponent;
windowBase = 1 << windowLog;
windowAdd = (windowBase / 8) * Mantissa;
Window_Size = windowBase + windowAdd;
```
The minimum `Window_Size` is 1 KB.
The maximum `Window_Size` is `(1<<41) + 7*(1<<38)` bytes, which is 3.75 TB.

In general, larger `Window_Size` tend to improve compression ratio,
but at the cost of memory usage.

To properly decode compressed data,
a decoder will need to allocate a buffer of at least `Window_Size` bytes.

In order to preserve decoder from unreasonable memory requirements,
a decoder is allowed to reject a compressed frame
which requests a memory size beyond decoder's authorized range.

For improved interoperability,
it's recommended for decoders to support `Window_Size` of up to 8 MB,
and it's recommended for encoders to not generate frame requiring `Window_Size` larger than 8 MB.
It's merely a recommendation though,
decoders are free to support larger or lower limits,
depending on local limitations.

#### `Dictionary_ID`

This is a variable size field, which contains
the ID of the dictionary required to properly decode the frame.
`Dictionary_ID` field is optional. When it's not present,
it's up to the decoder to know which dictionary to use.

`Dictionary_ID` field size is provided by `DID_Field_Size`.
`DID_Field_Size` is directly derived from value of `Dictionary_ID_flag`.
1 byte can represent an ID 0-255.
2 bytes can represent an ID 0-65535.
4 bytes can represent an ID 0-4294967295.
Format is __little-endian__.

It's allowed to represent a small ID (for example `13`)
with a large 4-bytes dictionary ID, even if it is less efficient.

A value of `0` has same meaning as no `Dictionary_ID`,
in which case the frame may or may not need a dictionary to be decoded,
and the ID of such a dictionary is not specified.
The decoder must know this information by other means.

#### `Frame_Content_Size`

This is the original (uncompressed) size. This information is optional.
`Frame_Content_Size` uses a variable number of bytes, provided by `FCS_Field_Size`.
`FCS_Field_Size` is provided by the value of `Frame_Content_Size_flag`.
`FCS_Field_Size` can be equal to 0 (not present), 1, 2, 4 or 8 bytes.

| `FCS_Field_Size` |    Range   |
| ---------------- | ---------- |
|        0         |   unknown  |
|        1         |   0 - 255  |
|        2         | 256 - 65791|
|        4         | 0 - 2^32-1 |
|        8         | 0 - 2^64-1 |

`Frame_Content_Size` format is __little-endian__.
When `FCS_Field_Size` is 1, 4 or 8 bytes, the value is read directly.
When `FCS_Field_Size` is 2, _the offset of 256 is added_.
It's allowed to represent a small size (for example `18`) using any compatible variant.


