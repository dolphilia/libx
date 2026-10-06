# Text Processing

## Character Encoding
By default, this library supports UTF-8 encoding without a BOM, as specified in [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259#section-8.1):

> JSON text exchanged between systems that are not part of a closed ecosystem MUST be encoded using UTF-8.
> Implementations MUST NOT add a byte order mark (U+FEFF) to the beginning of a networked-transmitted JSON text.

This library performs strict UTF-8 encoding validation on input strings by default. If an invalid character is encountered, an error will be reported.

To allow a BOM, use the `YYJSON_READ_ALLOW_BOM` or `YYJSON_READ_ALLOW_EXT_WHITESPACE` flags.

To allow invalid Unicode encoding, use the `YYJSON_READ_ALLOW_INVALID_UNICODE` and `YYJSON_WRITE_ALLOW_INVALID_UNICODE` flags. **Note:** Enabling these flags may result in yyjson producing values that contain invalid characters, which could be processed by other code and potentially introduce security risks.

To mark a string as not requiring escaping during JSON writing, use `yyjson_set_str_noesc(yyjson_val *val, bool noesc)` or `yyjson_mut_set_str_noesc(yyjson_mut_val *val, bool noesc)`.  This can improve string-writing performance and preserve the original string bytes.

## NUL Character
This library supports the `NUL` character (also known as the `null terminator`, or Unicode `U+0000`, ASCII `\0`) inside strings.

When reading JSON, `\u0000` will be unescaped to `NUL` character. If a string contains the `NUL` character, the length obtained with `strlen()` will be inaccurate, and you should use `yyjson_get_len()` to get the actual length.

When building JSON, the input string is treated as null-terminated by default. If you need to pass in a string that contains the `NUL` character, you should use the API with the `n` suffix and provide the actual length of the string.

For example:
```c
// null-terminated string
yyjson_mut_str(doc, str);
yyjson_obj_get(obj, str);

// any string, with or without null terminator
yyjson_mut_strn(doc, str, len);
yyjson_obj_getn(obj, str, len);

// C++ string
std::string sstr = ...;
yyjson_obj_getn(obj, sstr.data(), sstr.length());
```



