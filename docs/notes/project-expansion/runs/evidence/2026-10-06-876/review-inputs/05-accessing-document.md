# Accessing JSON Document

## JSON Document

You can access the content of a document with the following functions:
```c
// Get the root value of this JSON document.
yyjson_val *yyjson_doc_get_root(const yyjson_doc *doc);

// Get how many bytes are read when parsing JSON.
// e.g. "[1,2,3]" returns 7.
size_t yyjson_doc_get_read_size(const yyjson_doc *doc);

// Get total value count in this JSON document.
// e.g. "[1,2,3]" returns 4 (1 array and 3 numbers).
size_t yyjson_doc_get_val_count(const yyjson_doc *doc);
```

A document holds all the memory for its internal values and strings. When you no longer need it, you should release the document and free up all the memory:
```c
// Free the document; if NULL is passed in, do nothing.
void yyjson_doc_free(yyjson_doc *doc);
```

## JSON Value

Each JSON Value has a type and subtype, as specified in the table:

| Type             | Subtype              |                         |
| ---------------- | -------------------- | ----------------------- |
| YYJSON_TYPE_NONE |                      | Invalid value           |
| YYJSON_TYPE_RAW  |                      | Raw string              |
| YYJSON_TYPE_NULL |                      | `null` literal          |
| YYJSON_TYPE_BOOL | YYJSON_SUBTYPE_FALSE | `false` literal         |
| YYJSON_TYPE_BOOL | YYJSON_SUBTYPE_TRUE  | `true` literal          |
| YYJSON_TYPE_NUM  | YYJSON_SUBTYPE_UINT  | `uint64_t` number       |
| YYJSON_TYPE_NUM  | YYJSON_SUBTYPE_SINT  | `int64_t` number        |
| YYJSON_TYPE_NUM  | YYJSON_SUBTYPE_REAL  | `double` number         |
| YYJSON_TYPE_STR  |                      | String value            |
| YYJSON_TYPE_STR  | YYJSON_SUBTYPE_NOESC | String value, no-escape |
| YYJSON_TYPE_ARR  |                      | Array value             |
| YYJSON_TYPE_OBJ  |                      | Object value            |

- `YYJSON_TYPE_NONE` means invalid value, it does not appear when the JSON is successfully parsed.
- `YYJSON_TYPE_RAW` only appears when the corresponding flag `YYJSON_READ_XXX_AS_RAW` is used.
- `YYJSON_SUBTYPE_NOESC` is used to optimize the writing speed of strings that do not need to be escaped. This subtype is used internally, and the user does not need to handle it.

The following functions can be used to determine the type of JSON value.

```c
// Returns the type and subtype of a JSON value.
// Returns 0 if `val` is NULL.
yyjson_type yyjson_get_type(const yyjson_val *val);
yyjson_subtype yyjson_get_subtype(const yyjson_val *val);

// Returns value's tag, see `Data Structures` doc for details.
uint8_t yyjson_get_tag(const yyjson_val *val);

// returns type description, such as:  
// "null", "string", "array", "object", "true", "false",
// "uint", "sint", "real", "unknown"
const char *yyjson_get_type_desc(const yyjson_val *val);

// Returns true if the JSON value is specified type.
// Returns false if `val` is NULL or type does not match.
bool yyjson_is_null(const yyjson_val *val);  // null
bool yyjson_is_true(const yyjson_val *val);  // true
bool yyjson_is_false(const yyjson_val *val); // false
bool yyjson_is_bool(const yyjson_val *val);  // true/false
bool yyjson_is_uint(const yyjson_val *val);  // uint64_t
bool yyjson_is_sint(const yyjson_val *val);  // int64_t
bool yyjson_is_int(const yyjson_val *val);   // uint64_t/int64_t
bool yyjson_is_real(const yyjson_val *val);  // double
bool yyjson_is_num(const yyjson_val *val);   // uint64_t/int64_t/double
bool yyjson_is_str(const yyjson_val *val);   // string
bool yyjson_is_arr(const yyjson_val *val);   // array
bool yyjson_is_obj(const yyjson_val *val);   // object
bool yyjson_is_ctn(const yyjson_val *val);   // array/object
bool yyjson_is_raw(const yyjson_val *val);   // raw string
```

The following functions can be used to get the contents of the JSON value.

```c
// Returns the raw string, or NULL if `val` is not raw type.
const char *yyjson_get_raw(const yyjson_val *val);

// Returns bool value, or false if `val` is not bool type.
bool yyjson_get_bool(const yyjson_val *val);

// Returns uint64_t value (cast), or 0 if `val` is not uint/sint type.
uint64_t yyjson_get_uint(const yyjson_val *val);

// Returns int64_t value (cast), or 0 if `val` is not uint/sint type.
int64_t yyjson_get_sint(const yyjson_val *val);

// Returns int value (cast, may overflow), or 0 if `val` is not uint/sint type.
int yyjson_get_int(const yyjson_val *val);

// Returns double value, or 0 if `val` is not real type.
double yyjson_get_real(const yyjson_val *val);

// Returns double value (cast), or 0 if `val` is not uint/sint/real type.
double yyjson_get_num(const yyjson_val *val);

// Returns the string value, or NULL if `val` is not string type.
const char *yyjson_get_str(const yyjson_val *val);

// Returns the content length for raw/string/array/object values.
// Returns 0 if `val` is NULL. The return value is unspecified for other types.
size_t yyjson_get_len(const yyjson_val *val);

// Returns whether the value is equal to a string.
// Returns false if `val` is NULL or is not string.
bool yyjson_equals_str(const yyjson_val *val, const char *str);
bool yyjson_equals_strn(const yyjson_val *val, const char *str, size_t len);

// Returns whether two JSON values are equal (deep compare).
// Returns false if `lhs` or `rhs` is NULL.
// Note: result may be inaccurate if an object has duplicate keys.
// Warning: this function is recursive and may cause a stack overflow
//          if the object/array nesting level is too deep.
bool yyjson_equals(const yyjson_val *lhs, const yyjson_val *rhs);
bool yyjson_mut_equals(const yyjson_mut_val *lhs, const yyjson_mut_val *rhs);
```


The following functions can be used to modify the content of a JSON value.<br/>

Warning: For immutable documents, these functions will break the `immutable` convention, you should use this set of APIs with caution (e.g. make sure the document is only accessed in a single thread).

```c
// Set the value to new type and content.
// Returns false if `val` is NULL or is object or array.
bool yyjson_set_raw(yyjson_val *val, const char *raw, size_t len);
bool yyjson_set_null(yyjson_val *val);
bool yyjson_set_bool(yyjson_val *val, bool num);
bool yyjson_set_uint(yyjson_val *val, uint64_t num);
bool yyjson_set_sint(yyjson_val *val, int64_t num);
bool yyjson_set_int(yyjson_val *val, int64_t num);
bool yyjson_set_float(yyjson_val *val, float num);
bool yyjson_set_double(yyjson_val *val, double num);
bool yyjson_set_real(yyjson_val *val, double num);

// The string is not copied, should be held by caller.
bool yyjson_set_str(yyjson_val *val, const char *str);
bool yyjson_set_strn(yyjson_val *val, const char *str, size_t len);
```


## JSON Array

The following functions can be used to access a JSON array.<br/>

Note that accessing elements by index may take a linear search time. Therefore, if you need to iterate through an array, it is recommended to use the iterator API.

```c
// Returns the number of elements in this array.
// Returns 0 if `arr` is NULL or is not an array.
size_t yyjson_arr_size(const yyjson_val *arr);

// Returns the element at the specified position (linear search time).
// Returns NULL if `arr` is NULL, is not an array, or `idx` is out of bounds.
yyjson_val *yyjson_arr_get(const yyjson_val *arr, size_t idx);

// Returns the first element of this array (constant time).
// Returns NULL if `arr` is NULL, is not an array, or is empty.
yyjson_val *yyjson_arr_get_first(const yyjson_val *arr);

// Returns the last element of this array (linear search time).
// Returns NULL if `arr` is NULL, is not an array, or is empty.
yyjson_val *yyjson_arr_get_last(const yyjson_val *arr);
```

## JSON Array Iterator
There are two ways to traverse an array:<br/>

Sample code 1 (iterator API):
```c
yyjson_val *arr; // the array to be traversed

yyjson_val *val;
yyjson_arr_iter iter = yyjson_arr_iter_with(arr);
while ((val = yyjson_arr_iter_next(&iter))) {
    your_func(val);
}
```

Sample code 2 (foreach macro):
```c
yyjson_val *arr; // the array to be traversed

size_t idx, max;
yyjson_val *val;
yyjson_arr_foreach(arr, idx, max, val) {
    your_func(idx, val);
}
```
<br/>

There's also a mutable version of the API to traverse a mutable array:<br/>

Sample code 1 (mutable iterator API):
```c
yyjson_mut_val *arr; // the array to be traversed

yyjson_mut_val *val;
yyjson_mut_arr_iter iter = yyjson_mut_arr_iter_with(arr);
while ((val = yyjson_mut_arr_iter_next(&iter))) {
    if (your_val_is_unused(val)) {
        // you can remove current value inside iteration
        yyjson_mut_arr_iter_remove(&iter); 
    }
}
```

Sample code 2 (mutable foreach macro):
```c
yyjson_mut_val *arr; // the array to be traversed

size_t idx, max;
yyjson_mut_val *val;
yyjson_mut_arr_foreach(arr, idx, max, val) {
    your_func(idx, val);
}
```


## JSON Object
The following functions can be used to access a JSON object.<br/>

Note that accessing elements by key may take a linear search time. Therefore, if you need to iterate through an object, it is recommended to use the iterator API.


```c
// Returns the number of key-value pairs in this object.
// Returns 0 if `obj` is NULL or is not an object.
size_t yyjson_obj_size(const yyjson_val *obj);

// Returns the value to which the specified key is mapped.
// Returns NULL if this object contains no mapping for the key.
yyjson_val *yyjson_obj_get(const yyjson_val *obj, const char *key);
yyjson_val *yyjson_obj_getn(const yyjson_val *obj, const char *key, size_t key_len);

// If the order of the object's keys is known at compile-time,
// you can use this method to avoid searching the entire object.
// e.g. { "x":1, "y":2, "z":3 }
yyjson_val *obj = ...;
yyjson_obj_iter iter = yyjson_obj_iter_with(obj);

yyjson_val *x = yyjson_obj_iter_get(&iter, "x");
yyjson_val *z = yyjson_obj_iter_get(&iter, "z");
```

## JSON Object Iterator
There are two ways to traverse an object:<br/>

Sample code 1 (iterator API):
```c
yyjson_val *obj; // the object to be traversed

yyjson_val *key, *val;
yyjson_obj_iter iter = yyjson_obj_iter_with(obj);
while ((key = yyjson_obj_iter_next(&iter))) {
    val = yyjson_obj_iter_get_val(key);
    your_func(key, val);
}
```

Sample code 2 (foreach macro):
```c
yyjson_val *obj; // this is your object

size_t idx, max;
yyjson_val *key, *val;
yyjson_obj_foreach(obj, idx, max, key, val) {
    your_func(key, val);
}
```
<br/>

There's also a mutable version of the API to traverse a mutable object:<br/>

Sample code 1 (mutable iterator API):
```c
yyjson_mut_val *obj; // the object to be traversed

yyjson_mut_val *key, *val;
yyjson_mut_obj_iter iter = yyjson_mut_obj_iter_with(obj);
while ((key = yyjson_mut_obj_iter_next(&iter))) {
    val = yyjson_mut_obj_iter_get_val(key);
    if (your_key_is_unused(key)) {
        // you can remove current kv pair inside iteration
        yyjson_mut_obj_iter_remove(&iter);
    }
}
```

Sample code 2 (mutable foreach macro):
```c
yyjson_mut_val *obj; // the object to be traversed

size_t idx, max;
yyjson_mut_val *key, *val;
yyjson_mut_obj_foreach(obj, idx, max, key, val) {
    your_func(key, val);
}
```


---------------
