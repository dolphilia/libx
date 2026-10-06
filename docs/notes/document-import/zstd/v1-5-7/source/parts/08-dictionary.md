Dictionary Format
-----------------

Zstandard is compatible with "raw content" dictionaries,
free of any format restriction, except that they must be at least 8 bytes.
These dictionaries function as if they were just the `Content` part
of a formatted dictionary.

But dictionaries created by `zstd --train` follow a format, described here.

__Pre-requisites__ : a dictionary has a size,
                     defined either by a buffer limit, or a file size.

| `Magic_Number` | `Dictionary_ID` | `Entropy_Tables` | `Content` |
| -------------- | --------------- | ---------------- | --------- |

__`Magic_Number`__ : 4 bytes ID, value 0xEC30A437, __little-endian__ format

__`Dictionary_ID`__ : 4 bytes, stored in __little-endian__ format.
              `Dictionary_ID` can be any value, except 0 (which means no `Dictionary_ID`).
              It's used by decoders to check if they use the correct dictionary.

_Reserved ranges :_
If the dictionary is going to be distributed in a public environment,
the following ranges of `Dictionary_ID` are reserved for some future registrar
and shall not be used :

    - low range  : <= 32767
    - high range : >= (2^31)

Outside of these ranges, any value of `Dictionary_ID`
which is both `>= 32768` and `< (1<<31)` can be used freely,
even in public environment.


__`Entropy_Tables`__ : follow the same format as tables in [compressed blocks].
              See the relevant [FSE](#fse-table-description)
              and [Huffman](#huffman-tree-description) sections for how to decode these tables.
              They are stored in following order :
              Huffman tables for literals, FSE table for offsets,
              FSE table for match lengths, and FSE table for literals lengths.
              These tables populate the Repeat Stats literals mode and
              Repeat distribution mode for sequence decoding.
              It's finally followed by 3 offset values, populating recent offsets (instead of using `{1,4,8}`),
              stored in order, 4-bytes __little-endian__ each, for a total of 12 bytes.
              Each recent offset must have a value <= dictionary content size, and cannot equal 0.

__`Content`__ : The rest of the dictionary is its content.
              The content act as a "past" in front of data to compress or decompress,
              so it can be referenced in sequence commands.
              As long as the amount of data decoded from this frame is less than or
              equal to `Window_Size`, sequence commands may specify offsets longer
              than the total length of decoded output so far to reference back to the
              dictionary, even parts of the dictionary with offsets larger than `Window_Size`.
              After the total output has surpassed `Window_Size` however,
              this is no longer allowed and the dictionary is no longer accessible.

[compressed blocks]: #the-format-of-compressed_block

If a dictionary is provided by an external source,
it should be loaded with great care, its content considered untrusted.



