# Creating JSON Document
The `yyjson_mut_doc` and related APIs are used to build JSON documents. <br/>

Please note that `yyjson_mut_doc` uses a **memory pool** to hold all strings and values. The pool can only be created, grown, or freed in its entirety. Therefore, `yyjson_mut_doc` is more suitable for write-once than mutation of an existing document.<br/>

JSON objects and arrays are composed of linked lists, so each `yyjson_mut_val` can only be added to one object or array.

Sample code:

```c
// Build this JSON:
//     {
//        "page": 123,
//        "names": [ "Harry", "Ron", "Hermione" ]
//     }

// Create a mutable document.
yyjson_mut_doc *doc = yyjson_mut_doc_new(NULL);

// Create an object, the value's memory is held by doc.
yyjson_mut_val *root = yyjson_mut_obj(doc);

// Create key and value, add to the root object.
yyjson_mut_val *key = yyjson_mut_str(doc, "page");
yyjson_mut_val *num = yyjson_mut_int(doc, 123);
yyjson_mut_obj_add(root, key, num);

// Create 3 string values, add to the array object.
yyjson_mut_val *names = yyjson_mut_arr(doc);
yyjson_mut_val *name1 = yyjson_mut_str(doc, "Harry");
yyjson_mut_val *name2 = yyjson_mut_str(doc, "Ron");
yyjson_mut_val *name3 = yyjson_mut_str(doc, "Hermione");
yyjson_mut_arr_append(names, name1);
yyjson_mut_arr_append(names, name2);
yyjson_mut_arr_append(names, name3);
yyjson_mut_obj_add(root, yyjson_mut_str(doc, "names"), names);

// ❌ Wrong! the value is already added to another container.
yyjson_mut_obj_add(root, key, name1);

// Set the document's root value.
yyjson_mut_doc_set_root(doc, root);

// Write to JSON string
const char *json = yyjson_mut_write(doc, 0, NULL);

// Free the memory of doc and all values created from this doc.
yyjson_mut_doc_free(doc);
```


## Mutable Document

The following functions are used to create, modify, copy, and destroy a JSON document.<br/>

```c
// Creates and returns a new mutable JSON document.
// Returns NULL on error (e.g. memory allocation failure).
// If `alc` is NULL, the default allocator will be used.
yyjson_mut_doc *yyjson_mut_doc_new(const yyjson_alc *alc);

// Delete the JSON document, free the memory of this doc
// and all values created from this doc
void yyjson_mut_doc_free(yyjson_mut_doc *doc);

// Set the internal memory pool size (string length and value count).
// It can be used to reserve memory for the next string and value creation.
bool yyjson_mut_doc_set_str_pool_size(yyjson_mut_doc *doc, size_t len);
bool yyjson_mut_doc_set_val_pool_size(yyjson_mut_doc *doc, size_t count);

// Get or set the root value of this JSON document.
yyjson_mut_val *yyjson_mut_doc_get_root(yyjson_mut_doc *doc);
void yyjson_mut_doc_set_root(yyjson_mut_doc *doc, yyjson_mut_val *root);

// Copies and returns a new mutable document/value from input.
// Returns NULL on error (e.g. memory allocation failure).

// doc -> mut_doc
yyjson_mut_doc *yyjson_doc_mut_copy(const yyjson_doc *doc, const yyjson_alc *alc);
// val -> mut_val
yyjson_mut_val *yyjson_val_mut_copy(yyjson_mut_doc *doc, const yyjson_val *val);
// mut_doc -> mut_doc
yyjson_mut_doc *yyjson_mut_doc_mut_copy(const yyjson_mut_doc *doc, const yyjson_alc *alc);
// mut_val -> mut_val
yyjson_mut_val *yyjson_mut_val_mut_copy(yyjson_mut_doc *doc, const yyjson_mut_val *val);
// mut_doc -> doc
yyjson_doc *yyjson_mut_doc_imut_copy(const yyjson_mut_doc *doc, const yyjson_alc *alc);
// mut_val -> doc
yyjson_doc *yyjson_mut_val_imut_copy(const yyjson_mut_val *val, const yyjson_alc *alc);
```

## JSON Value Creation
The following functions are used to create mutable JSON value, 
the value's memory is held by the document.<br/>

```c
// Creates and returns a new value, returns NULL on error.
yyjson_mut_val *yyjson_mut_null(yyjson_mut_doc *doc);
yyjson_mut_val *yyjson_mut_true(yyjson_mut_doc *doc);
yyjson_mut_val *yyjson_mut_false(yyjson_mut_doc *doc);
yyjson_mut_val *yyjson_mut_bool(yyjson_mut_doc *doc, bool val);
yyjson_mut_val *yyjson_mut_uint(yyjson_mut_doc *doc, uint64_t num);
yyjson_mut_val *yyjson_mut_sint(yyjson_mut_doc *doc, int64_t num);
yyjson_mut_val *yyjson_mut_int(yyjson_mut_doc *doc, int64_t num);
yyjson_mut_val *yyjson_mut_float(yyjson_mut_doc *doc, float num);
yyjson_mut_val *yyjson_mut_double(yyjson_mut_doc *doc, double num);
yyjson_mut_val *yyjson_mut_real(yyjson_mut_doc *doc, double num);

// Creates a string value, the input string is NOT copied.
yyjson_mut_val *yyjson_mut_str(yyjson_mut_doc *doc, const char *str);
yyjson_mut_val *yyjson_mut_strn(yyjson_mut_doc *doc, const char *str, size_t len);

// Creates a string value, the input string is copied and held by the document.
yyjson_mut_val *yyjson_mut_strcpy(yyjson_mut_doc *doc, const char *str);
yyjson_mut_val *yyjson_mut_strncpy(yyjson_mut_doc *doc, const char *str, size_t len);
```


## JSON Array Creation
The following functions are used to create mutable JSON array.<br/>

```c
// Creates and returns an empty mutable array, returns NULL on error.
yyjson_mut_val *yyjson_mut_arr(yyjson_mut_doc *doc);

// Creates and returns a mutable array with a C array.
yyjson_mut_val *yyjson_mut_arr_with_bool(yyjson_mut_doc *doc, bool *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_sint(yyjson_mut_doc *doc, int64_t *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_uint(yyjson_mut_doc *doc, uint64_t *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_real(yyjson_mut_doc *doc, double *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_sint8(yyjson_mut_doc *doc, int8_t *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_sint16(yyjson_mut_doc *doc, int16_t *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_sint32(yyjson_mut_doc *doc, int32_t *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_sint64(yyjson_mut_doc *doc, int64_t *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_uint8(yyjson_mut_doc *doc, uint8_t *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_uint16(yyjson_mut_doc *doc, uint16_t *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_uint32(yyjson_mut_doc *doc, uint32_t *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_uint64(yyjson_mut_doc *doc, uint64_t *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_float(yyjson_mut_doc *doc, float *vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_double(yyjson_mut_doc *doc, double *vals, size_t count);
// sample code:
int32_t vals[3] = {-1, 0, 1};
yyjson_mut_val *arr = yyjson_mut_arr_with_sint32(doc, vals, 3);

// Creates and returns a mutable array with strings,
// the strings should be encoded as UTF-8.
yyjson_mut_val *yyjson_mut_arr_with_str(yyjson_mut_doc *doc, const char **vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_strn(yyjson_mut_doc *doc, const char **vals, const size_t *lens, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_strcpy(yyjson_mut_doc *doc, const char **vals, size_t count);
yyjson_mut_val *yyjson_mut_arr_with_strncpy(yyjson_mut_doc *doc, const char **vals, const size_t *lens, size_t count);
// sample code:
const char *strs[3] = {"Jan", "Feb", "Mar"};
yyjson_mut_val *arr = yyjson_mut_arr_with_str(doc, strs, 3);
```

## JSON Array Modification

The following functions are used to modify the contents of a JSON array.<br/>

```c
// Inserts a value into an array at a given index.
// Returns false on error (e.g. out of bounds).
// Note that this function takes a linear search time.
bool yyjson_mut_arr_insert(yyjson_mut_val *arr, yyjson_mut_val *val, size_t idx);

// Inserts a val at the end of the array, returns false on error.
bool yyjson_mut_arr_append(yyjson_mut_val *arr, yyjson_mut_val *val);

// Inserts a val at the head of the array, returns false on error.
bool yyjson_mut_arr_prepend(yyjson_mut_val *arr, yyjson_mut_val *val);

// Replaces a value at index and returns old value, returns NULL on error.
// Note that this function takes a linear search time.
yyjson_mut_val *yyjson_mut_arr_replace(yyjson_mut_val *arr, size_t idx, yyjson_mut_val *val);

// Removes and returns a value at index, returns NULL on error.
// Note that this function takes a linear search time.
yyjson_mut_val *yyjson_mut_arr_remove(yyjson_mut_val *arr, size_t idx);

// Removes and returns the first value in this array, returns NULL on error.
yyjson_mut_val *yyjson_mut_arr_remove_first(yyjson_mut_val *arr);

// Removes and returns the last value in this array, returns NULL on error.
yyjson_mut_val *yyjson_mut_arr_remove_last(yyjson_mut_val *arr);

// Removes all values within a specified range in the array.
// Note that this function takes a linear search time.
bool yyjson_mut_arr_remove_range(yyjson_mut_val *arr, size_t idx, size_t len);

// Removes all values in this array.
bool yyjson_mut_arr_clear(yyjson_mut_val *arr);

// Convenience API:
// Adds a value at the end of this array, returns false on error.
bool yyjson_mut_arr_add_val(yyjson_mut_val *arr, yyjson_mut_val *val);
bool yyjson_mut_arr_add_null(yyjson_mut_doc *doc, yyjson_mut_val *arr);
bool yyjson_mut_arr_add_true(yyjson_mut_doc *doc, yyjson_mut_val *arr);
bool yyjson_mut_arr_add_false(yyjson_mut_doc *doc, yyjson_mut_val *arr);
bool yyjson_mut_arr_add_bool(yyjson_mut_doc *doc, yyjson_mut_val *arr, bool val);
bool yyjson_mut_arr_add_uint(yyjson_mut_doc *doc, yyjson_mut_val *arr, uint64_t num);
bool yyjson_mut_arr_add_sint(yyjson_mut_doc *doc, yyjson_mut_val *arr, int64_t num);
bool yyjson_mut_arr_add_int(yyjson_mut_doc *doc, yyjson_mut_val *arr, int64_t num);
bool yyjson_mut_arr_add_float(yyjson_mut_doc *doc, yyjson_mut_val *arr, float num);
bool yyjson_mut_arr_add_double(yyjson_mut_doc *doc, yyjson_mut_val *arr, double num);
bool yyjson_mut_arr_add_real(yyjson_mut_doc *doc, yyjson_mut_val *arr, double num);
bool yyjson_mut_arr_add_str(yyjson_mut_doc *doc, yyjson_mut_val *arr, const char *str);
bool yyjson_mut_arr_add_strn(yyjson_mut_doc *doc, yyjson_mut_val *arr, const char *str, size_t len);
bool yyjson_mut_arr_add_strcpy(yyjson_mut_doc *doc, yyjson_mut_val *arr, const char *str);
bool yyjson_mut_arr_add_strncpy(yyjson_mut_doc *doc, yyjson_mut_val *arr, const char *str, size_t len);

// Convenience API:
// Creates and adds a new array at the end of the array.
// Returns the new array, or NULL on error.
yyjson_mut_val *yyjson_mut_arr_add_arr(yyjson_mut_doc *doc, yyjson_mut_val *arr);

// Convenience API:
// Creates and adds a new object at the end of the array.
// Returns the new object, or NULL on error.
yyjson_mut_val *yyjson_mut_arr_add_obj(yyjson_mut_doc *doc, yyjson_mut_val *arr);
```

## JSON Object Creation
The following functions are used to create mutable JSON object.<br/>

```c
// Creates and returns a mutable object, returns NULL on error.
yyjson_mut_val *yyjson_mut_obj(yyjson_mut_doc *doc);

// Creates and returns a mutable object with keys and values,
// returns NULL on error. The keys and values are NOT copied.
// The strings should be encoded as UTF-8 with null-terminator.
yyjson_mut_val *yyjson_mut_obj_with_str(yyjson_mut_doc *doc,
                                        const char **keys,
                                        const char **vals,
                                        size_t count);
// sample code:
const char *keys[] = {"name", "type", "id"};
const char *vals[] = {"Harry", "student", "123456"};
yyjson_mut_obj_with_str(doc, keys, vals, 3);

// Creates and returns a mutable object with key-value pairs,
// returns NULL on error. The keys and values are NOT copied.
// The strings should be encoded as UTF-8 with null-terminator.
yyjson_mut_val *yyjson_mut_obj_with_kv(yyjson_mut_doc *doc,
                                       const char **kv_pairs,
                                       size_t pair_count);
// sample code:
const char *pairs[] = {"name", "Harry", "type", "student", "id", "123456"};
yyjson_mut_obj_with_kv(doc, pairs, 3);
```

## JSON Object Modification
The following functions are used to modify the contents of a JSON object.<br/>

```c
// Adds a key-value pair at the end of the object. 
// The key must be a string value.
// This function allows duplicate keys in one object.
bool yyjson_mut_obj_add(yyjson_mut_val *obj, yyjson_mut_val *key, yyjson_mut_val *val);

// Adds a key-value pair to the object.
// The key must be a string value.
// This function may remove all key-value pairs for the given key before adding.
// Note that this function takes a linear search time.
bool yyjson_mut_obj_put(yyjson_mut_val *obj, yyjson_mut_val *key, yyjson_mut_val *val);

// Removes a key-value pair from the object with a given key.
// Note that this function takes a linear search time.
bool yyjson_mut_obj_remove(yyjson_mut_val *obj, yyjson_mut_val *key);

// Removes all key-value pairs in this object.
bool yyjson_mut_obj_clear(yyjson_mut_val *obj);

// Convenience API:
// Adds a key-value pair at the end of the object. The key is not copied.
// Note that these functions allow duplicate keys in one object.
bool yyjson_mut_obj_add_null(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key);
bool yyjson_mut_obj_add_true(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key);
bool yyjson_mut_obj_add_false(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key);
bool yyjson_mut_obj_add_bool(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, bool val);
bool yyjson_mut_obj_add_uint(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, uint64_t val);
bool yyjson_mut_obj_add_sint(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, int64_t val);
bool yyjson_mut_obj_add_int(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, int64_t val);
bool yyjson_mut_obj_add_float(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, float val);
bool yyjson_mut_obj_add_double(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, double val);
bool yyjson_mut_obj_add_real(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, double val);
bool yyjson_mut_obj_add_str(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, const char *val);
bool yyjson_mut_obj_add_strn(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, const char *val, size_t len);
bool yyjson_mut_obj_add_strcpy(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, const char *val);
bool yyjson_mut_obj_add_strncpy(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, const char *val, size_t len);
yyjson_mut_val *yyjson_mut_obj_add_arr(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *_key);
yyjson_mut_val *yyjson_mut_obj_add_obj(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *_key);
                              
// Convenience API:
// Removes all key-value pairs for the given key.
// Note that this function takes a linear search time.
bool yyjson_mut_obj_remove_str(yyjson_mut_val *obj, const char *key);
bool yyjson_mut_obj_remove_strn(yyjson_mut_val *obj, const char *key, size_t len);

// Convenience API:
// Replaces all matching keys with the new key.
// Returns true if at least one key was renamed.
// This function takes a linear search time.
yyjson_api_inline bool yyjson_mut_obj_rename_key(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, const char *new_key);
yyjson_api_inline bool yyjson_mut_obj_rename_keyn(yyjson_mut_doc *doc, yyjson_mut_val *obj, const char *key, size_t len, const char *new_key, size_t new_len);
```


---------------
