<a id="json-pointer-and-patch"></a>
# JSON PointerとPatch

## JSON Pointer

ライブラリは、`JSON Pointer`（[RFC 6901](https://tools.ietf.org/html/rfc6901)）によるJSON値の問い合わせに対応します。

```c
// `JSON pointer` is a null-terminated string.
yyjson_val *yyjson_ptr_get(const yyjson_val *val, const char *ptr);
yyjson_val *yyjson_doc_ptr_get(const yyjson_doc *doc, const char *ptr);
yyjson_mut_val *yyjson_mut_ptr_get(const yyjson_mut_val *val, const char *ptr);
yyjson_mut_val *yyjson_mut_doc_ptr_get(const yyjson_mut_doc *doc, const char *ptr);

// `JSON pointer` with string length, allow NUL (Unicode U+0000) characters inside.
yyjson_val *yyjson_ptr_getn(const yyjson_val *val, const char *ptr, size_t len);
yyjson_val *yyjson_doc_ptr_getn(const yyjson_doc *doc, const char *ptr, size_t len);
yyjson_mut_val *yyjson_mut_ptr_getn(const yyjson_mut_val *val, const char *ptr, size_t len);
yyjson_mut_val *yyjson_mut_doc_ptr_getn(const yyjson_mut_doc *doc, const char *ptr, size_t len);

// `JSON pointer` with string length, context and error information.
yyjson_val *yyjson_ptr_getx(const yyjson_val *val, const char *ptr, size_t len, yyjson_ptr_err *err);
yyjson_val *yyjson_doc_ptr_getx(const yyjson_doc *doc, const char *ptr, size_t len, yyjson_ptr_err *err);
yyjson_mut_val *yyjson_mut_ptr_getx(const yyjson_mut_val *val, const char *ptr, size_t len, yyjson_ptr_ctx *ctx, yyjson_ptr_err *err);
yyjson_mut_val *yyjson_mut_doc_ptr_getx(const yyjson_mut_doc *doc, const char *ptr, size_t len, yyjson_ptr_ctx *ctx, yyjson_ptr_err *err);
```

たとえば、次のJSONドキュメントがあるとします。
```json
{
    "size" : 3,
    "users" : [
        {"id": 1, "name": "Harry"},
        {"id": 2, "name": "Ron"},
        {"id": 3, "name": "Hermione"}
    ]
}
```
次のJSON文字列を評価すると、それぞれ隣に示した値になります。

|Pointer|一致する値|
|:--|:--|
| `""` | `ドキュメント全体` |
| `"/size"` | `3` |
| `"/users/0"` | `{"id": 1, "name": "Harry"}` |
| `"/users/1/name"` | `"Ron"` |
| `"/no_match"` | NULL |
| `"no_slash"` | NULL |
| `"/"` | NULL（空のキーに一致：root[""]） |

```c
yyjson_doc *doc = ...;
yyjson_val *val = yyjson_doc_ptr_get(doc, "/users/1/name");
printf("%s\n", yyjson_get_str(val)); // Ron

yyjson_ptr_err err;
yyjson_val *val2 = yyjson_doc_ptr_getx(doc, "/", 1, &err);
if (!val2) printf("err %d: %s\n", err.code, err.msg); // err 3: cannot be resolved
```

ライブラリは、`JSON Pointer`によるJSON値の変更にも対応します。
```c
// Add or insert a new value.
bool yyjson_mut_ptr_add(yyjson_mut_val *val, const char *ptr, yyjson_mut_val *new_val, yyjson_mut_doc *doc);
bool yyjson_mut_ptr_addn(yyjson_mut_val *val, const char *ptr, size_t len, yyjson_mut_val *new_val, yyjson_mut_doc *doc);
bool yyjson_mut_ptr_addx(yyjson_mut_val *val, const char *ptr, size_t len, yyjson_mut_val *new_val, yyjson_mut_doc *doc, bool create_parent, yyjson_ptr_ctx *ctx, yyjson_ptr_err *err);
                                           
bool yyjson_mut_doc_ptr_add(yyjson_mut_doc *doc, const char *ptr, yyjson_mut_val *new_val);
bool yyjson_mut_doc_ptr_addn(yyjson_mut_doc *doc, const char *ptr, size_t len, yyjson_mut_val *new_val);
bool yyjson_mut_doc_ptr_addx(yyjson_mut_doc *doc, const char *ptr, size_t len, yyjson_mut_val *new_val, bool create_parent, yyjson_ptr_ctx *ctx, yyjson_ptr_err *err);

// Set a new value (add if it doesn't exist, replace if it does).
bool yyjson_mut_ptr_set(yyjson_mut_val *val, const char *ptr, yyjson_mut_val *new_val, yyjson_mut_doc *doc);
bool yyjson_mut_ptr_setn(yyjson_mut_val *val, const char *ptr, size_t len, yyjson_mut_val *new_val, yyjson_mut_doc *doc);
bool yyjson_mut_ptr_setx(yyjson_mut_val *val, const char *ptr, size_t len, yyjson_mut_val *new_val, yyjson_mut_doc *doc, bool create_parent, yyjson_ptr_ctx *ctx, yyjson_ptr_err *err);
                                             
bool yyjson_mut_doc_ptr_set(yyjson_mut_doc *doc, const char *ptr, yyjson_mut_val *new_val);
bool yyjson_mut_doc_ptr_setn(yyjson_mut_doc *doc, const char *ptr, size_t len, yyjson_mut_val *new_val);
bool yyjson_mut_doc_ptr_setx(yyjson_mut_doc *doc, const char *ptr, size_t len, yyjson_mut_val *new_val, bool create_parent, yyjson_ptr_ctx *ctx, yyjson_ptr_err *err);

// Replace an existing value.
yyjson_mut_val *yyjson_mut_ptr_replace(yyjson_mut_val *val, const char *ptr, yyjson_mut_val *new_val);
yyjson_mut_val *yyjson_mut_ptr_replacen(yyjson_mut_val *val, const char *ptr, size_t len, yyjson_mut_val *new_val);
yyjson_mut_val *yyjson_mut_ptr_replacex(yyjson_mut_val *val, const char *ptr, size_t len, yyjson_mut_val *new_val, yyjson_ptr_ctx *ctx, yyjson_ptr_err *err);
    
yyjson_mut_val *yyjson_mut_doc_ptr_replace(yyjson_mut_doc *doc, const char *ptr, yyjson_mut_val *new_val);
yyjson_mut_val *yyjson_mut_doc_ptr_replacen(yyjson_mut_doc *doc, const char *ptr, size_t len, yyjson_mut_val *new_val);
yyjson_mut_val *yyjson_mut_doc_ptr_replacex(yyjson_mut_doc *doc, const char *ptr, size_t len, yyjson_mut_val *new_val, yyjson_ptr_ctx *ctx, yyjson_ptr_err *err);

// Remove an existing value.
yyjson_mut_val *yyjson_mut_ptr_remove(yyjson_mut_val *val, const char *ptr);
yyjson_mut_val *yyjson_mut_ptr_removen(yyjson_mut_val *val, const char *ptr, size_t len);
yyjson_mut_val *yyjson_mut_ptr_removex(yyjson_mut_val *val, const char *ptr, size_t len, yyjson_ptr_ctx *ctx, yyjson_ptr_err *err);

yyjson_mut_val *yyjson_mut_doc_ptr_remove(yyjson_mut_doc *doc, const char *ptr);
yyjson_mut_val *yyjson_mut_doc_ptr_removen(yyjson_mut_doc *doc, const char *ptr, size_t len);
yyjson_mut_val *yyjson_mut_doc_ptr_removex(yyjson_mut_doc *doc, const char *ptr, size_t len, yyjson_ptr_ctx *ctx, yyjson_ptr_err *err);
```

例：
```c
yyjson_mut_doc *doc = ...;
// doc: {"a":0,"b":[1,2,3]}

yyjson_mut_doc_ptr_set(doc, "/a", yyjson_mut_int(doc, 9));
// now: {"a":9,"b":[1,2,3]}

yyjson_mut_doc_ptr_add(doc, "/b/-", yyjson_mut_int(doc, 4));
// now: {"a":9,"b":[1,2,3,4]}

yyjson_mut_doc_ptr_remove(doc, "/b");
// now: {"a":9}
```

上に示した、名前が`x`で終わる関数はすべて、結果のコンテキスト`ctx`とエラーメッセージ`err`を取得するために使えます。例：
```c
// doc: {"a":0,"b":[null,2,3]}
yyjson_mut_doc *doc = ...;

// get error code and message
yyjson_ptr_err err;
yyjson_mut_doc_ptr_setx(doc, "/b/99", 4, yyjson_mut_int(doc, 99), true, NULL, &err);
if (err.code) printf("err: %s\n", err.msg); // err: cannot resolve

// get target value's context
// perform some operations without reparsing the JSON Pointer
yyjson_mut_val *val = yyjson_mut_doc_ptr_getx(doc, "/b/0", 4, &ctx, &err);
if (yyjson_mut_is_null(val)) yyjson_ptr_ctx_remove(&ctx);
// now: {"a":0,"b":[2,3]}
```

## JSON Patch

ライブラリはJSON Patch（RFC 6902）に対応します。
仕様と例：<https://tools.ietf.org/html/rfc6902>
```c
// Creates and returns a patched JSON value.
// Returns NULL if the patch could not be applied.
yyjson_mut_val *yyjson_patch(yyjson_mut_doc *doc,
                             const yyjson_val *orig,
                             const yyjson_val *patch,
                             yyjson_patch_err *err);

yyjson_mut_val *yyjson_mut_patch(yyjson_mut_doc *doc,
                                 const yyjson_mut_val *orig,
                                 const yyjson_mut_val *patch,
                                 yyjson_patch_err *err);
```

## JSON Merge Patch

ライブラリはJSON Merge Patch（RFC 7386）に対応します。
仕様と例：<https://tools.ietf.org/html/rfc7386>
```c
// Creates and returns a merge-patched JSON value.
// Returns NULL if the patch could not be applied.
yyjson_mut_val *yyjson_merge_patch(yyjson_mut_doc *doc,
                                   const yyjson_val *orig,
                                   const yyjson_val *patch);

yyjson_mut_val *yyjson_mut_merge_patch(yyjson_mut_doc *doc,
                                       const yyjson_mut_val *orig,
                                       const yyjson_mut_val *patch);
```

---------------
