<a id="null-check"></a>
# NULLの検査

ライブラリの公開APIは、クラッシュを防ぐため、すべての入力引数に`null check`（NULLの検査）を行います。

たとえばJSONを読み込むとき、各値にNULLの検査や型の検査を行う必要はありません。
```c
yyjson_doc *doc = yyjson_read(NULL, 0, 0); // doc is NULL
yyjson_val *val = yyjson_doc_get_root(doc); // val is NULL
const char *str = yyjson_get_str(val); // str is NULL
if (!str) printf("err!");
yyjson_doc_free(doc); // do nothing
```

ただし、値がNULLではなく、想定する型に一致することが確実な場合は、`unsafe`接頭辞付きのAPIを使ってNULLの検査を省略できます。

たとえば、配列やオブジェクトを走査するとき、値やキーは必ずNULLではありません。
```c
size_t idx, max;
yyjson_val *key, *val;
yyjson_obj_foreach(obj, idx, max, key, val) {
    // this is a valid JSON, so the key must be a valid string
    if (unsafe_yyjson_equals_str(key, "id") &&
        unsafe_yyjson_is_uint(val) &&
        unsafe_yyjson_get_uint(val) == 1234) {
        ...
    }
}
```
