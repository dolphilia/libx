# Reading JSON
The library provides 5 functions for reading JSON.<br/>
Each function accepts an input of UTF-8 data or a file,<br/>
returns a document if successful or `NULL` if it fails.

## Read JSON from string
The `dat` should be a UTF-8 string, null-terminator is not required.<br/>
The `len` is the byte length of `dat`.<br/>
The `flg` is reader flag, pass 0 if you don't need it, see `reader flag` for details.<br/>
Returns `NULL` if `dat` is NULL or `len` is 0.

```c
yyjson_doc *yyjson_read(const char *dat, 
                        size_t len, 
                        yyjson_read_flag flg);
```
Sample code:

```c
const char *str = "[1,2,3,4]";
yyjson_doc *doc = yyjson_read(str, strlen(str), 0);
if (doc) {...}
yyjson_doc_free(doc);
```

## Read JSON from file

The `path` is the JSON file path. This should be a null-terminated string using the system's native encoding.<br/>
The `flg` is reader flag, pass 0 if you don't need it, see `reader flag` for details.<br/>
The `alc` is memory allocator, pass NULL if you don't need it, see `memory allocator` for details.<br/>
The `err` is a pointer to receive error message, pass NULL if you don't need it.<br/>
Returns `NULL` if `path` is NULL or invalid.

```c
yyjson_doc *yyjson_read_file(const char *path,
                             yyjson_read_flag flg,
                             const yyjson_alc *alc,
                             yyjson_read_err *err);
```

Sample code:

```c
yyjson_doc *doc = yyjson_read_file("/tmp/test.json", 0, NULL, NULL);
if (doc) {...}
yyjson_doc_free(doc);
```

## Read JSON from file pointer

The `fp` is file pointer. The data will be read from the current position of the FILE to the end.<br/>
The `flg` is reader flag, pass 0 if you don't need it, see `reader flag` for details.<br/>
The `alc` is memory allocator, pass NULL if you don't need it, see `memory allocator` for details.<br/>
The `err` is a pointer to receive error message, pass NULL if you don't need it.<br/>
Returns `NULL` if `fp` is NULL or invalid.

```c
yyjson_doc *yyjson_read_fp(FILE *fp,
                           yyjson_read_flag flg,
                           const yyjson_alc *alc,
                           yyjson_read_err *err);
```

Sample code:

```c
FILE *fp = fdopen(fd, "rb"); // POSIX file descriptor (fd)
yyjson_doc *doc = yyjson_read_fp(fp, 0, NULL, NULL);
if (fp) fclose(fp);
if (doc) {...}
yyjson_doc_free(doc);
```

## Read JSON with options
The `dat` should be a UTF-8 string, you can pass a const string if you don't use `YYJSON_READ_INSITU` flag.<br/>
The `len` is the `dat`'s length in bytes.<br/>
The `flg` is reader flag, pass 0 if you don't need it, see `reader flag` for details.<br/>
The `alc` is memory allocator, pass NULL if you don't need it, see `memory allocator` for details.<br/>
The `err` is a pointer to receive error message, pass NULL if you don't need it.<br/>

```c
yyjson_doc *yyjson_read_opts(char *dat, 
                             size_t len, 
                             yyjson_read_flag flg,
                             const yyjson_alc *alc, 
                             yyjson_read_err *err);
```

Sample code:

```c
const char *dat = your_file.bytes;
size_t len = your_file.size;

yyjson_read_flag flg = YYJSON_READ_ALLOW_COMMENTS | YYJSON_READ_ALLOW_INF_AND_NAN;
yyjson_doc *doc = yyjson_read_opts((char *)dat, len, flg, NULL, NULL);

if (doc) {...}

yyjson_doc_free(doc);
```

## Read JSON incrementally

Reading a very large JSON document can freeze the program for a short while. If
this is not acceptable, incremental reading can be used.

Incremental reading is recommended only for large documents and only when the
program needs to be responsive. Incremental reading is slightly slower than
`yyjson_read()` and `yyjson_read_opts()`.

Note: The incremental JSON reader only supports standard JSON.
Flags for non-standard features (e.g. comments, trailing commas) are ignored.

To read a large JSON document incrementally:

1. Call `yyjson_incr_new()` to create the state for incremental reading.
2. Call `yyjson_incr_read()` repeatedly.
3. Call `yyjson_incr_free()` to free the state.

### Create the state for incremental reading

The `buf` should be a UTF-8 string, null-terminator is not required.
You can pass a const string if you don't use the `YYJSON_READ_INSITU` flag.<br/>
The `buf_len` is the length of `buf` in bytes.
The `flg` is reader flag. Pass 0 if you don't need it. See reader flag for details.
The `alc` is memory allocator, pass NULL if you don't need it. See `memory allocator` for details.<br/>

The function returns a new state, or NULL if memory allocation fails.

```c
yyjson_incr_state *yyjson_incr_new(char *buf, size_t buf_len, yyjson_read_flag flg, const yyjson_alc *alc);
```

### Perform incremental read

Performs incremental read of up to `len` bytes.

The `state` for incremental reading is created using `yyjson_incr_new()`.<br/>
The `len` is the maximum number of bytes to read, counting from the start of the JSON data.<br/>
The `err` is a pointer to receive the error information. Required.<br/>

The function returns a document object when the reading is complete and NULL otherwise.
If `err->code` is set to `YYJSON_READ_ERROR_MORE`, it indicates that parsing is not yet complete.
Then, increase `len` by some kilobytes and call this function again.
Continue increasing `len` until `len == buf_len` (the total length of the input buffer) or until an error other than `YYJSON_READ_ERROR_MORE` is returned.

Note: Parsing in very small increments is not efficient.
An increment of several kilobytes or megabytes is recommended.

```c
yyjson_doc *yyjson_incr_read(yyjson_incr_state *state, size_t len, yyjson_read_err *err);
```

### Free the state used for incremental reading

Free the `state` created by `yyjson_incr_new()`.

```c
void yyjson_incr_free(yyjson_incr_state *state);
```

### Sample code

```c
const char *dat = your_file.bytes;
size_t len = your_file.size;

yyjson_read_flag flg = YYJSON_READ_NOFLAG;
yyjson_incr_state *state = yyjson_incr_new(dat, len, flg, NULL);
yyjson_doc *doc;
yyjson_read_err err;
size_t read_so_far = 0;
do {
    read_so_far += 100000;
    if (read_so_far > len)
        read_so_far = len;
    doc = yyjson_incr_read(state, read_so_far, &err);
    if (err.code != YYJSON_READ_ERROR_MORE)
        break;
} while (read_so_far < len);
yyjson_incr_free(state);

if (doc != NULL) { ... }

yyjson_doc_free(doc);
```

## Reader error handling

When reading JSON fails, and you need error information, you can pass a `yyjson_read_err` pointer to the `yyjson_read_xxx()` functions to receive the error details.

Sample code:
```c
char *dat = ...;
size_t dat_len = ...;
yyjson_read_err err;
yyjson_doc *doc = yyjson_read_opts(dat, dat_len, 0, NULL, &err);

if (!doc) {
    printf("read error: %s, code: %u at byte position: %lu\n", 
            err.msg, err.code, err.pos);
    // printed:
    // read error: trailing comma is not allowed, code: 7, at byte position: 40
}

yyjson_doc_free(doc);
```

The `pos` in the error information indicates the byte position where the error occurred. If you need the line and column number of the error, you can use the `yyjson_locate_pos()` function. Note that `line` and `column` start from 1, while `character` starts from 0. All values are calculated based on Unicode characters to ensure compatibility with various text editors.

Sample code:
```c
char *dat = ...;
size_t dat_len = ...;
yyjson_read_err err = ...;

size_t line, col, chr;
if (yyjson_locate_pos(dat, dat_len, err.pos, &line, &col, &chr)) {
    printf("error at line: %lu, column: %lu, character index: %lu\n",
           line, col, chr);
    // printed:
    // error at line: 3, column: 5, character index: 32
}
```

The complete list of error codes (`yyjson_read_code`):

| Code | Name | Description |
|------|------|-------------|
| 0 | `YYJSON_READ_SUCCESS` | Success, no error. |
| 1 | `YYJSON_READ_ERROR_INVALID_PARAMETER` | Invalid parameter, such as NULL input string or 0 input length. |
| 2 | `YYJSON_READ_ERROR_MEMORY_ALLOCATION` | Memory allocation failure. |
| 3 | `YYJSON_READ_ERROR_EMPTY_CONTENT` | Input JSON string is empty. |
| 4 | `YYJSON_READ_ERROR_UNEXPECTED_CONTENT` | Unexpected content after document end, such as `[123]abc`. |
| 5 | `YYJSON_READ_ERROR_UNEXPECTED_END` | Unexpected end of input; the parsed part is valid, such as `[123`. |
| 6 | `YYJSON_READ_ERROR_UNEXPECTED_CHARACTER` | Unexpected character inside the document, such as `[abc]`. |
| 7 | `YYJSON_READ_ERROR_JSON_STRUCTURE` | Invalid JSON structure, such as `[1,]`. |
| 8 | `YYJSON_READ_ERROR_INVALID_COMMENT` | Invalid comment (deprecated, mapped to `UNEXPECTED_END`). |
| 9 | `YYJSON_READ_ERROR_INVALID_NUMBER` | Invalid number, such as `123.e12` or `000`. |
| 10 | `YYJSON_READ_ERROR_INVALID_STRING` | Invalid string, such as an invalid escape sequence. |
| 11 | `YYJSON_READ_ERROR_LITERAL` | Invalid JSON literal, such as `truu`. |
| 12 | `YYJSON_READ_ERROR_FILE_OPEN` | Failed to open a file. |
| 13 | `YYJSON_READ_ERROR_FILE_READ` | Failed to read a file. |
| 14 | `YYJSON_READ_ERROR_MORE` | Incomplete input during incremental parsing; state is preserved for continuation. |
| 15 | `YYJSON_READ_ERROR_DEPTH` | Nesting depth exceeded `YYJSON_READER_DEPTH_LIMIT`. |

## Reader flag
The library provides a set of flags for JSON reader.<br/>

You can use a single flag, or combine multiple flags with bitwise `|` operator.<br/>

Non-standard flags (such as `YYJSON_READ_JSON5`) have no performance impact when reading standard JSON input.

### **YYJSON_READ_NOFLAG = 0**

This is the default flag for JSON reader (RFC-8259 or ECMA-404 compliant):

- Read positive integer as `uint64_t`.
- Read negative integer as `int64_t`.
- Read floating-point number as `double` with correct rounding.
- Read integer which cannot fit in `uint64_t` or `int64_t` as `double`.
- Report error if double number is infinity.
- Report error if string contains invalid UTF-8 character or BOM.
- Report error on trailing commas, comments, `Inf` and `NaN` literals.

### **YYJSON_READ_INSITU**
Read the input data in-situ.<br/>

This option allows the reader to modify and use the input data to store string values, which can slightly improve reading speed. However, the caller must ensure that the input data is held until the document is freed. The input data must be padded with at least `YYJSON_PADDING_SIZE` bytes. For example: `[1,2]` should be `[1,2]\0\0\0\0`, input length should be 5.

Sample code:

```c
size_t dat_len = ...;
char *buf = malloc(dat_len + YYJSON_PADDING_SIZE); // create a buffer larger than (len + 4)
read_from_socket(buf, ...);
memset(buf + dat_len, 0, YYJSON_PADDING_SIZE); // set 4-byte padding after data

yyjson_doc *doc = yyjson_read_opts(buf, dat_len, YYJSON_READ_INSITU, NULL, NULL);
if (doc) {...}
yyjson_doc_free(doc);
free(buf); // the input data should be freed after the document.
```

### **YYJSON_READ_STOP_WHEN_DONE**
Stop parsing when reaching the end of a JSON document instead of issuing an error if there's additional content after it.<br/>

This option is useful for parsing small pieces of JSON within larger data, such as [NDJSON](https://en.wikipedia.org/wiki/JSON_streaming).<br/>

Sample code:

```c
// Single file with multiple JSON, such as:
// [1,2,3] [4,5,6] {"a":"b"}

size_t file_size = ...;
char *dat = malloc(file_size + YYJSON_PADDING_SIZE);
your_read_file(dat, file);
memset(dat + file_size, 0, YYJSON_PADDING_SIZE); // add padding
    
char *hdr = dat;
char *end = dat + file_size;
yyjson_read_flag flg = YYJSON_READ_INSITU | YYJSON_READ_STOP_WHEN_DONE;

while (true) {
    yyjson_doc *doc = yyjson_read_opts(hdr, end - hdr, flg, NULL, NULL);
    if (!doc) break;
    your_doc_process(doc);
    hdr += yyjson_doc_get_read_size(doc); // move to next position
    yyjson_doc_free(doc);
}
free(dat);
```

### **YYJSON_READ_ALLOW_TRAILING_COMMAS**
Allow a single trailing comma at the end of an object or array (non-standard), for example:

```
{
    "a": 1,
    "b": 2,
}

[
    "a",
    "b",
]
```

### **YYJSON_READ_ALLOW_COMMENTS**
Allow C-style single-line and multi-line comments (non-standard), for example:

```
{
    "name": "Harry", // single-line comment
    "id": /* multi-line comment */ 123
}
```

### **YYJSON_READ_ALLOW_INF_AND_NAN**
Allow nan/inf number or case-insensitive literal (non-standard), for example:

```
{
    "large": 123e999,
    "nan1": NaN,
    "nan2": nan,
    "inf1": Inf,
    "inf2": -Infinity
}
```

### **YYJSON_READ_NUMBER_AS_RAW**
Read all numbers as raw strings without parsing.

This flag is useful if you want to handle number parsing yourself.
You can use the following functions to extract raw strings:
```c
bool yyjson_is_raw(const yyjson_val *val);
const char *yyjson_get_raw(const yyjson_val *val);
size_t yyjson_get_len(const yyjson_val *val);
```

### **YYJSON_READ_BIGNUM_AS_RAW**
Read big numbers as raw strings.

This flag is useful if you want to parse these big numbers yourself.
These big numbers include integers that cannot be represented by `int64_t` and `uint64_t`, and floating-point numbers that cannot be represented by finite `double`.

Note that this flag will be overridden by `YYJSON_READ_NUMBER_AS_RAW` flag.

### **YYJSON_READ_ALLOW_INVALID_UNICODE**
Allow reading invalid unicode when parsing string values (non-standard),
for example:
```
"\x80xyz"
"\xF0\x81\x81\x81"
```
This flag permits invalid characters to appear in the string values, but it still reports errors for invalid escape sequences. It does not impact the performance of correctly encoded strings.

***Warning***: when using this option, be aware that strings within JSON values may contain incorrect encoding, so you need to handle these strings carefully to avoid security risks.

### **YYJSON_READ_ALLOW_BOM**
Allow UTF-8 BOM and skip it before parsing if any (non-standard).

### **YYJSON_READ_ALLOW_EXT_NUMBER**
Allow extended number formats (non-standard):
- Hexadecimal numbers, such as `0x7B`.
- Numbers with leading or trailing decimal point, such as `.123`, `123.`.
- Numbers with a leading plus sign, such as `+123`.

### **YYJSON_READ_ALLOW_EXT_ESCAPE**
Allow extended escape sequences in strings (non-standard):
- Additional escapes: `\a`, `\e`, `\v`, ``\'``, `\?`, `\0`.
- Hex escapes: `\xNN`, such as `\x7B`.
- Line continuation: backslash followed by line terminator sequences.
- Unknown escape: if backslash is followed by an unsupported character,
    the backslash will be removed and the character will be kept as-is.
    However, `\1`-`\9` will still trigger an error.

### **YYJSON_READ_ALLOW_EXT_WHITESPACE**
Allow extended whitespace characters (non-standard):
- Vertical tab `\v` and form feed `\f`.
- Line separator `\u2028` and paragraph separator `\u2029`.
- Non-breaking space `\xA0`.
- Byte order mark: `\uFEFF`.
- Other Unicode characters in the Zs (Separator, space) category.

### **YYJSON_READ_ALLOW_SINGLE_QUOTED_STR**
Allow strings enclosed in single quotes (non-standard), such as ``'ab'``.

### **YYJSON_READ_ALLOW_UNQUOTED_KEY**
Allow object keys without quotes (non-standard), such as `{a:1,b:2}`.
This extends the ECMAScript IdentifierName rule by allowing any
non-whitespace character with code point above `U+007F`.

### **YYJSON_READ_JSON5**
Allow JSON5 format, see: https://json5.org.

This flag supports all JSON5 features with some additional extensions:
- Accepts more escape sequences than JSON5 (e.g. `\a`, `\e`).
- Unquoted keys are not limited to ECMAScript IdentifierName.
- Allow case-insensitive `NaN`, `Inf` and `Infinity` literals.

For example:
```json
{
    /* JSON5 example */
    id: 123,
    name: 'Harry',
    color: 0x66CCFF,
    min: .001,
    max: Inf,
    data: '\x00\xAA\xFF',
}
```

---------------
