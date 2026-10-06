---
title: "JSON Pointer and Patch"
documentId: "yyjson:01-guide/07-pointer-and-patch.md"
order: 7
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/API.md#L1417-L1582\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/yyjson/source/v0-13-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定Markdown7資料とSVG7図、英語原文19ページ・非公式日本語訳16ガイドの編集原稿、再生成入力、原MIT通知、共有ビルドコードと再構築手順を含みます。更新履歴・原著Performance TODO・MIT通知の3資料は未翻訳の英語原文です。各ファイルの条件を参照してください。</p>"}]
---
# JSON Pointer and Patch

## JSON Pointer
The library supports querying JSON values using `JSON Pointer` ([RFC 6901](https://tools.ietf.org/html/rfc6901)).

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

For example, given the JSON document:
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
The following JSON strings evaluate to the accompanying values:

|Pointer|Matched Value|
|:--|:--|
| `""` | `the whole document` |
| `"/size"`| `3` |
| `"/users/0"` | `{"id": 1, "name": "Harry"}` |
| `"/users/1/name"` | `"Ron"` |
| `"/no_match"` | NULL |
| `"no_slash"` | NULL |
| `"/"` | NULL (match to empty key: root[""]) |

```c
yyjson_doc *doc = ...;
yyjson_val *val = yyjson_doc_ptr_get(doc, "/users/1/name");
printf("%s\n", yyjson_get_str(val)); // Ron

yyjson_ptr_err err;
yyjson_val *val2 = yyjson_doc_ptr_getx(doc, "/", 1, &err);
if (!val2) printf("err %d: %s\n", err.code, err.msg); // err 3: cannot be resolved
```

The library also supports modifying JSON values using `JSON Pointer`.
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

For example:
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

All the above functions ending with `x` can be used to get the result context `ctx`, and the error message `err`. For example:
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
The library supports JSON Patch (RFC 6902).
Specification and example: <https://tools.ietf.org/html/rfc6902>
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
The library supports JSON Merge Patch (RFC 7386).
Specification and example: <https://tools.ietf.org/html/rfc7386>
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
