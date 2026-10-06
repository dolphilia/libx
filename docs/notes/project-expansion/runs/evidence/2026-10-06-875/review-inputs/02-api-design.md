API {#api}
===

This document contains all the API usage and examples for the yyjson library.


# API Design

## API prefix

All public functions and structs are prefixed with `yyjson_`, and all constants are prefixed with `YYJSON_`.

## API for immutable/mutable data

The library has 2 types of data structures: immutable and mutable:

|          | Immutable  | Mutable        |
|----------|------------|----------------|
| Document | yyjson_doc | yyjson_mut_doc |
| Value    | yyjson_val | yyjson_mut_val |

When reading a JSON, yyjson returns immutable documents and values.<br/>
When building a JSON, yyjson creates mutable documents and values.<br/>
The document holds the memory for all its JSON values and strings.<br/>

For most immutable APIs, you can just add a `mut` after `yyjson_` to get the mutable version, for example:
```c
char *yyjson_write(yyjson_doc *doc, ...);
char *yyjson_mut_write(yyjson_mut_doc *doc, ...);

bool yyjson_is_str(const yyjson_val *val);
bool yyjson_mut_is_str(const yyjson_mut_val *val);
```

The library also provides some functions to convert values between immutable and mutable:<br/>

```c
// doc -> mut_doc
yyjson_mut_doc *yyjson_doc_mut_copy(const yyjson_doc *doc, ...);
// val -> mut_val
yyjson_mut_val *yyjson_val_mut_copy(const yyjson_val *val, ...);

// mut_doc -> doc
yyjson_doc *yyjson_mut_doc_imut_copy(const yyjson_mut_doc *doc, ...);
// mut_val -> val
yyjson_doc *yyjson_mut_val_imut_copy(const yyjson_mut_val *val, ...);
```

## API for string
The library supports strings with or without null-terminator (`\0`).<br/>
When you need to use a string without a null-terminator or when you explicitly know the length of the string, you can use the function that ends with `n`, for example:
```c
// null-terminator is required
bool yyjson_equals_str(const yyjson_val *val, const char *str);
// null-terminator is optional
bool yyjson_equals_strn(const yyjson_val *val, const char *str, size_t len);
```

When creating JSON, yyjson treats strings as constants for better performance. However, if your string will be modified, you should use a function with a `cpy` to copy the string to the document, for example:
```c
// reference only, null-terminated is required
yyjson_mut_val *yyjson_mut_str(yyjson_mut_doc *doc, const char *str);
// reference only, null-terminator is optional
yyjson_mut_val *yyjson_mut_strn(yyjson_mut_doc *doc, const char *str, size_t len);

// copied, null-terminated is required
yyjson_mut_val *yyjson_mut_strcpy(yyjson_mut_doc *doc, const char *str);
// copied, null-terminator is optional
yyjson_mut_val *yyjson_mut_strncpy(yyjson_mut_doc *doc, const char *str, size_t len);
```



---------------

