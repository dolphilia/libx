Skippable Frames
----------------

| `Magic_Number` | `Frame_Size` | `User_Data` |
|:--------------:|:------------:|:-----------:|
|   4 bytes      |  4 bytes     |   n bytes   |

Skippable frames allow the insertion of user-defined metadata
into a flow of concatenated frames.

Skippable frames defined in this specification are compatible with [LZ4] ones.

[LZ4]:https://lz4.github.io/lz4/

From a compliant decoder perspective, skippable frames need just be skipped,
and their content ignored, resuming decoding after the skippable frame.

It can be noted that a skippable frame
can be used to watermark a stream of concatenated frames
embedding any kind of tracking information (even just a UUID).
Users wary of such possibility should scan the stream of concatenated frames
in an attempt to detect such frame for analysis or removal.

__`Magic_Number`__

4 Bytes, __little-endian__ format.
Value : 0x184D2A5?, which means any value from 0x184D2A50 to 0x184D2A5F.
All 16 values are valid to identify a skippable frame.
This specification doesn't detail any specific tagging for skippable frames.

__`Frame_Size`__

This is the size, in bytes, of the following `User_Data`
(without including the magic number nor the size field itself).
This field is represented using 4 Bytes, __little-endian__ format, unsigned 32-bits.
This means `User_Data` can’t be bigger than (2^32-1) bytes.

__`User_Data`__

The `User_Data` can be anything. Data will just be skipped by the decoder.



