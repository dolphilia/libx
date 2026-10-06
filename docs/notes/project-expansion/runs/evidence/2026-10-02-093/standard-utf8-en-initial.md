---
title: "UTF-8 support"
description: "UTF-8 library reference"
---

# 6.6 – <a id="6.6"></a>UTF-8 Support

This library provides basic support for UTF-8 encoding. It provides all its functions inside the table <a id="pdf-utf8"></a>`utf8`. This library does not provide any support for Unicode other than the handling of the encoding. Any operation that needs the meaning of a character, such as character classification, is outside its scope.

Unless stated otherwise, all functions that expect a byte position as a parameter assume that the given position is either the start of a byte sequence or one plus the length of the subject string. As in the string library, negative indices count from the end of the string.

Functions that create byte sequences accept all values up to `0x7FFFFFFF`, as defined in the original UTF-8 specification; that implies byte sequences of up to six bytes.

Functions that interpret byte sequences only accept valid sequences (well formed and not overlong). By default, they only accept byte sequences that result in valid Unicode code points, rejecting values greater than `10FFFF` and surrogates. A boolean argument `lax`, when available, lifts these checks, so that all values up to `0x7FFFFFFF` are accepted. (Not well formed and overlong sequences are still rejected.)

---

## <a id="pdf-utf8.char"></a>`utf8.char (···)`

Receives zero or more integers, converts each one to its corresponding UTF-8 byte sequence and returns a string with the concatenation of all these sequences.

---

## <a id="pdf-utf8.charpattern"></a>`utf8.charpattern`

The pattern (a string, not a function) "`[\0-\x7F\xC2-\xFD][\x80-\xBF]*`" (see [§6.5.1](/docs/lua/v5-5-1/en/05-standard-library/06-string-manipulation/#6.5.1)), which matches exactly one UTF-8 byte sequence, assuming that the subject is a valid UTF-8 string.

---

## <a id="pdf-utf8.codes"></a>`utf8.codes (s [, lax])`

Returns values so that the construction

```lua
     for p, c in utf8.codes(s) do body end
```

will iterate over all UTF-8 characters in string `s`, with `p` being the position (in bytes) and `c` the code point of each character. It raises an error if it meets any invalid byte sequence.

---

## <a id="pdf-utf8.codepoint"></a>`utf8.codepoint (s [, i [, j [, lax]]])`

Returns the code points (as integers) from all characters in `s` that start between byte position `i` and `j` (both included). The default for `i` is 1 and for `j` is `i`. It raises an error if it meets any invalid byte sequence.

---

## <a id="pdf-utf8.len"></a>`utf8.len (s [, i [, j [, lax]]])`

Returns the number of UTF-8 characters in string `s` that start between positions `i` and `j` (both inclusive). The default for `i` is 1 and for `j` is -1. If it finds any invalid byte sequence, returns **fail** plus the position of the first invalid byte.

---

## <a id="pdf-utf8.offset"></a>`utf8.offset (s, n [, i])`

Returns the position of the `n`-th character of `s` (counting from byte position `i`) as two integers: The index (in bytes) where its encoding starts and the index (in bytes) where it ends.

If the specified character is right after the end of `s`, the function behaves as if there was a '`\0`' there. If the specified character is neither in the subject nor right after its end, the function returns **fail**.

A negative `n` gets characters before position `i`. The default for `i` is 1 when `n` is non-negative and `#s + 1` otherwise, so that `utf8.offset(s,-n)` gets the offset of the `n`-th character from the end of the string.

As a special case, when `n` is 0 the function returns the start and end of the encoding of the character that contains the `i`-th byte of `s`.

This function assumes that `s` is a valid UTF-8 string.
