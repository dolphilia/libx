# Null Check
The library's public APIs perform a `null check` for every input parameter to prevent crashes.

For example, when reading a JSON, you don't need to perform null checks or type checks on each value:
```c
yyjson_doc *doc = yyjson_read(NULL, 0, 0); // doc is NULL
yyjson_val *val = yyjson_doc_get_root(doc); // val is NULL
const char *str = yyjson_get_str(val); // str is NULL
if (!str) printf("err!");
yyjson_doc_free(doc); // do nothing
```

However, if you are certain that a value is non-null and matches the expected type, you can use the `unsafe` prefix API to avoid the null check.

For example, when iterating over an array or object, the value and key must be non-null:
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



