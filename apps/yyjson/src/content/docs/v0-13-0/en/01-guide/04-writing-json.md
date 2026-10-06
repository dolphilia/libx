---
title: "Writing JSON"
documentId: "yyjson:01-guide/04-writing-json.md"
order: 4
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/API.md#L515-L796\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/yyjson/source/v0-13-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定Markdown7資料とSVG7図、英語原文19ページ・非公式日本語訳16ガイドの編集原稿、再生成入力、原MIT通知、共有ビルドコードと再構築手順を含みます。更新履歴・原著Performance TODO・MIT通知の3資料は未翻訳の英語原文です。各ファイルの条件を参照してください。</p>"}]
---
# Writing JSON
The library provides 5 sets of functions for writing JSON.<br/>
Each function accepts an input of JSON document or root value, and returns a UTF-8 string or file.

## Write JSON to string
The `doc/val` is the JSON document or root value. If it is NULL, returns NULL.<br/>
The `flg` is writer flag, pass 0 if you don't need it, see `writer flag` for details.<br/>
The `len` is a pointer to receive output length (not including the
    null-terminator), pass NULL if you don't need it.<br/>
This function returns a new JSON string, or NULL if an error occurs.<br/>
The string is encoded as UTF-8 with a null-terminator. <br/>
You should use `free()` or `alc->free()` to release it when it's no longer needed.

```c
// doc -> str
char *yyjson_write(const yyjson_doc *doc, yyjson_write_flag flg, size_t *len);
// mut_doc -> str
char *yyjson_mut_write(const yyjson_mut_doc *doc, yyjson_write_flag flg, size_t *len);
// val -> str
char *yyjson_val_write(const yyjson_val *val, yyjson_write_flag flg, size_t *len);
// mut_val -> str
char *yyjson_mut_val_write(const yyjson_mut_val *val, yyjson_write_flag flg, size_t *len);
```

Sample code 1:

```c
yyjson_doc *doc = yyjson_read("[1,2,3]", 7, 0);
char *json = yyjson_write(doc, YYJSON_WRITE_PRETTY, NULL);
printf("%s\n", json);
free(json);
```

Sample code 2:
```c
yyjson_mut_doc *doc = yyjson_mut_doc_new(NULL);
yyjson_mut_val *arr = yyjson_mut_arr(doc);
yyjson_mut_doc_set_root(doc, arr);
yyjson_mut_arr_add_int(doc, arr, 1);
yyjson_mut_arr_add_int(doc, arr, 2);
yyjson_mut_arr_add_int(doc, arr, 3);
    
char *json = yyjson_mut_write(doc, YYJSON_WRITE_PRETTY, NULL);
printf("%s\n", json);
free(json);
```

## Write JSON to file
The `path` is the output JSON file path. This should be a null-terminated string using the system's native encoding. If `path` is NULL or invalid, returns false. If the file is not empty, its content is discarded.<br/>
The `doc/val` is the JSON document or root value. If it is NULL, returns false.<br/>
The `flg` is writer flag, pass 0 if you don't need it, see `writer flag` for details.<br/>
The `alc` is memory allocator, pass NULL if you don't need it, see `memory allocator` for details.<br/>
The `err` is a pointer to receive error message, pass NULL if you don't need it.<br/>
This function returns true on success, or false if an error occurs.<br/>

```c
// doc -> file
bool yyjson_write_file(const char *path, const yyjson_doc *doc, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
// mut_doc -> file
bool yyjson_mut_write_file(const char *path, const yyjson_mut_doc *doc, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
// val -> file
bool yyjson_val_write_file(const char *path, const yyjson_val *val, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
// mut_val -> file
bool yyjson_mut_val_write_file(const char *path, const yyjson_mut_val *val, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
```

Sample code:

```c
yyjson_doc *doc = yyjson_read_file("/tmp/test.json", 0, NULL, NULL);
bool suc = yyjson_write_file("tmp/test.json", doc, YYJSON_WRITE_PRETTY, NULL, NULL);
if (suc) printf("OK");
```

## Write JSON to file pointer
The `fp` is the output file pointer. The data will be written to the current position of the file.<br/>
If `fp` is NULL or invalid, returns false.<br/>
The `doc/val` is the JSON document or root value. If it is NULL, returns false.<br/>
The `flg` is writer flag, pass 0 if you don't need it, see `writer flag` for details.<br/>
The `alc` is memory allocator, pass NULL if you don't need it, see `memory allocator` for details.<br/>
The `err` is a pointer to receive error message, pass NULL if you don't need it.<br/>
This function returns true on success, or false if an error occurs.<br/>

```c
// doc -> file
bool yyjson_write_fp(FILE *fp, const yyjson_doc *doc, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
// mut_doc -> file
bool yyjson_mut_write_fp(FILE *fp, const yyjson_mut_doc *doc, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
// val -> file
bool yyjson_val_write_fp(FILE *fp, const yyjson_val *val, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
// mut_val -> file
bool yyjson_mut_val_write_fp(FILE *fp, const yyjson_mut_val *val, yyjson_write_flag flg, const yyjson_alc *alc, yyjson_write_err *err);
```

Sample code:

```c
FILE *fp = fdopen(fd, "wb"); // POSIX file descriptor (fd)
bool suc = yyjson_write_fp(fp, doc, YYJSON_WRITE_PRETTY, NULL, NULL);
if (fp) fclose(fp);
if (suc) printf("OK");
```

## Write JSON to buffer
The `buf` is the output buffer. If `buf` is NULL, returns 0.<br/>
The `buf_len` is the buffer length. If `buf_len` is too small, returns 0.<br/>
The `doc/val` is the JSON document or root value. If it is NULL, returns 0.<br/>
The `flg` is writer flag, pass 0 if you don't need it, see `writer flag` for details.<br/>
The `err` is a pointer to receive error message, pass NULL if you don't need it.<br/>
This function returns the number of bytes written (excluding the null terminator), or 0 on failure.<br/>

This function does not allocate memory, but the buffer must be larger than the final JSON size to allow temporary space.
 
 The extra space is needed temporarily for each value while it is written, and is reused for later values:
 - Number: `40`
 - String: `16 + (str_len * 6)`
 - Other values: `16`
 - Nesting depth: `16 * max_json_depth`

```c
// doc -> buffer
size_t yyjson_write_buf(char *buf, size_t buf_len, const yyjson_doc *doc, yyjson_write_flag flg, yyjson_write_err *err);
// mut_doc -> buffer
size_t yyjson_mut_write_buf(char *buf, size_t buf_len, const yyjson_mut_doc *doc, yyjson_write_flag flg, yyjson_write_err *err);
// val -> buffer
size_t yyjson_val_write_buf(char *buf, size_t buf_len, const yyjson_val *val, yyjson_write_flag flg, yyjson_write_err *err);
// mut_val -> buffer
size_t yyjson_mut_val_write_buf(char *buf, size_t buf_len, const yyjson_mut_val *val, yyjson_write_flag flg, yyjson_write_err *err);
```

Sample code:

```c
char buf[512];
size_t len = yyjson_write_buf(buf, sizeof(buf), doc, YYJSON_WRITE_PRETTY, NULL);
if (len > 0) printf("OK, output:\n%s\n", buf);
```


## Write JSON with options
The `doc/val` is the JSON document or root value. If it is NULL, returns NULL.<br/>
The `flg` is writer flag, pass 0 if you don't need it, see `writer flag` for details.<br/>
The `alc` is memory allocator, pass NULL if you don't need it, see `memory allocator` for details.<br/>
The `len` is a pointer to receive output length (not including the
    null-terminator), pass NULL if you don't need it.<br/>
The `err` is a pointer to receive error message, pass NULL if you don't need it.<br/>

This function returns a new JSON string, or NULL if an error occurs.<br/>
The string is encoded as UTF-8 with a null-terminator. <br/>
You should use free() or alc->free() to release it when it's no longer needed.

```c
char *yyjson_write_opts(const yyjson_doc *doc, yyjson_write_flag flg, const yyjson_alc *alc, size_t *len, yyjson_write_err *err);

char *yyjson_mut_write_opts(const yyjson_mut_doc *doc, yyjson_write_flag flg, const yyjson_alc *alc, size_t *len, yyjson_write_err *err);

char *yyjson_val_write_opts(const yyjson_val *val, yyjson_write_flag flg, const yyjson_alc *alc, size_t *len, yyjson_write_err *err);

char *yyjson_mut_val_write_opts(const yyjson_mut_val *val, yyjson_write_flag flg, const yyjson_alc *alc, size_t *len, yyjson_write_err *err);
```

Sample code:

```c
yyjson_doc *doc = ...;

// init an allocator with stack memory
char buf[64 * 1024];
yyjson_alc alc;
yyjson_alc_pool_init(&alc, buf, sizeof(buf));

// write
size_t len;
yyjson_write_err err;
char *json = yyjson_write_opts(doc, YYJSON_WRITE_PRETTY | YYJSON_WRITE_ESCAPE_UNICODE, &alc, &len, &err);

// get result
if (json) {
    printf("suc: %lu\n%s\n", len, json);
} else {
    printf("err: %u msg:%s\n", err.code, err.msg);
}
alc.free(alc.ctx, json);
```

The complete list of error codes (`yyjson_write_code`):

| Code | Name | Description |
|------|------|-------------|
| 0 | `YYJSON_WRITE_SUCCESS` | Success, no error. |
| 1 | `YYJSON_WRITE_ERROR_INVALID_PARAMETER` | Invalid parameter, such as NULL document. |
| 2 | `YYJSON_WRITE_ERROR_MEMORY_ALLOCATION` | Memory allocation failure. |
| 3 | `YYJSON_WRITE_ERROR_INVALID_VALUE_TYPE` | Invalid value type in JSON document. |
| 4 | `YYJSON_WRITE_ERROR_NAN_OR_INF` | NaN or Infinity number occurs. |
| 5 | `YYJSON_WRITE_ERROR_FILE_OPEN` | Failed to open a file. |
| 6 | `YYJSON_WRITE_ERROR_FILE_WRITE` | Failed to write a file. |
| 7 | `YYJSON_WRITE_ERROR_INVALID_STRING` | Invalid unicode in string. |
| 8 | `YYJSON_WRITE_ERROR_DEPTH` | Nesting depth exceeded `YYJSON_WRITER_DEPTH_LIMIT`. |


## Writer flag
The library provides a set of flags for JSON writer.<br/>
You can use a single flag, or combine multiple flags with bitwise `|` operator.

### **YYJSON_WRITE_NOFLAG = 0**
This is the default flag for JSON writer:

- Writes JSON in minified format.
- Reports an error on encountering `inf` or `nan` number.
- Reports an error on encountering invalid UTF-8 strings.
- Does not escape unicode or slashes.

### **YYJSON_WRITE_PRETTY**
Writes JSON with a pretty format using a 4-space indent.

### **YYJSON_WRITE_PRETTY_TWO_SPACES**
Writes JSON with a pretty format using a 2-space indent.
This flag will override `YYJSON_WRITE_PRETTY` flag.

### **YYJSON_WRITE_ESCAPE_UNICODE**
Escape unicode as `\uXXXX`, making the output ASCII-only, for example:

```json
["Alizée, 😊"]
["Aliz\\u00E9e, \\uD83D\\uDE0A"]
```

### **YYJSON_WRITE_LOWERCASE_HEX**
Use lowercase hex digits in `\uXXXX` escape sequences instead of the default uppercase. 
Only effective when `YYJSON_WRITE_ESCAPE_UNICODE` is also set.

### **YYJSON_WRITE_ESCAPE_SLASHES**
Escapes the forward slash character `/` as `\/`, for example:

```json
["https://github.com"]
["https:\/\/github.com"]
```

### **YYJSON_WRITE_ALLOW_INF_AND_NAN**
Writes inf/nan numbers as `Infinity` and `NaN` literals instead of reporting errors.<br/>

Note that this output is **NOT** standard JSON and may be rejected by other JSON libraries, for example:

```js
{"not_a_number":NaN,"large_number":Infinity}
```

### **YYJSON_WRITE_INF_AND_NAN_AS_NULL**
Writes inf/nan numbers as `null` literals instead of reporting errors.<br/>
This flag will override `YYJSON_WRITE_ALLOW_INF_AND_NAN` flag, for example:

```js
{"not_a_number":null,"large_number":null}
```

### **YYJSON_WRITE_ALLOW_INVALID_UNICODE**
Allows invalid unicode when encoding string values.

Invalid characters within string values will be copied byte by byte. If `YYJSON_WRITE_ESCAPE_UNICODE` flag is also set, invalid characters will be escaped as `\uFFFD` (replacement character).

This flag does not affect the performance of correctly encoded strings.

### **YYJSON_WRITE_NEWLINE_AT_END**
Adds a newline character `\n` at the end of the JSON.
This can be helpful for text editors or NDJSON.

### **YYJSON_WRITE_FP_TO_FLOAT**
Write floating-point numbers using single-precision (float).
This casts `double` to `float` before serialization.
This will produce shorter output, but may lose some precision.
This flag is ignored if `YYJSON_WRITE_FP_TO_FIXED(prec)` is also used.

### **YYJSON_WRITE_FP_TO_FIXED(prec)**
Write floating-point number using fixed-point notation.
This is similar to ECMAScript `Number.prototype.toFixed(prec)`,
but with trailing zeros removed. The `prec` ranges from 1 to 15.
This will produce shorter output but may lose some precision.



---------------
