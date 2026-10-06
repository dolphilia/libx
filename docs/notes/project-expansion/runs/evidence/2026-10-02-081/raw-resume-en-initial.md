---
title: "C API functions and types: rawequal–rotate"
description: "Alphabetical C API reference for raw access through rotation"
---

# C API functions and types: rawequal–rotate

## <a id="lua_rawequal"></a>`lua_rawequal`

[-0, +0, –]

```c
int lua_rawequal (lua_State *L, int index1, int index2);
```

Returns 1 if the two values in indices `index1` and `index2` are primitively equal (that is, equal without calling the `__eq` metamethod). Otherwise returns 0. Also returns 0 if any of the indices are not valid.

---

## <a id="lua_rawget"></a>`lua_rawget`

[-1, +1, –]

```c
int lua_rawget (lua_State *L, int index);
```

Similar to [`lua_gettable`](/docs/lua/v5-5-1/en/03-c-api/09-functions-and-types-get/#lua_gettable), but does a raw access (i.e., without metamethods). The value at `index` must be a table.

---

## <a id="lua_rawgeti"></a>`lua_rawgeti`

[-0, +1, –]

```c
int lua_rawgeti (lua_State *L, int index, lua_Integer n);
```

Pushes onto the stack the value `t[n]`, where `t` is the table at the given index. The access is raw, that is, it does not use the `__index` metavalue.

Returns the type of the pushed value.

---

## <a id="lua_rawgetp"></a>`lua_rawgetp`

[-0, +1, –]

```c
int lua_rawgetp (lua_State *L, int index, const void *p);
```

Pushes onto the stack the value `t[k]`, where `t` is the table at the given index and `k` is the pointer `p` represented as a light userdata. The access is raw; that is, it does not use the `__index` metavalue.

Returns the type of the pushed value.

---

## <a id="lua_rawlen"></a>`lua_rawlen`

[-0, +0, –]

```c
lua_Unsigned lua_rawlen (lua_State *L, int index);
```

Returns the raw "length" of the value at the given index: for strings, this is the string length; for tables, this is the result of the length operator ('`#`') with no metamethods; for userdata, this is the size of the block of memory allocated for the userdata. For other values, this call returns 0.

---

## <a id="lua_rawset"></a>`lua_rawset`

[-2, +0, *m*]

```c
void lua_rawset (lua_State *L, int index);
```

Similar to [`lua_settable`](/docs/lua/v5-5-1/en/03-c-api/14-functions-and-types-set-status/#lua_settable), but does a raw assignment (i.e., without metamethods). The value at `index` must be a table.

---

## <a id="lua_rawseti"></a>`lua_rawseti`

[-1, +0, *m*]

```c
void lua_rawseti (lua_State *L, int index, lua_Integer i);
```

Does the equivalent of `t[i] = v`, where `t` is the table at the given index and `v` is the value on the top of the stack.

This function pops the value from the stack. The assignment is raw, that is, it does not use the `__newindex` metavalue.

---

## <a id="lua_rawsetp"></a>`lua_rawsetp`

[-1, +0, *m*]

```c
void lua_rawsetp (lua_State *L, int index, const void *p);
```

Does the equivalent of `t[p] = v`, where `t` is the table at the given index, `p` is encoded as a light userdata, and `v` is the value on the top of the stack.

This function pops the value from the stack. The assignment is raw, that is, it does not use the `__newindex` metavalue.

---

## <a id="lua_Reader"></a>`lua_Reader`

```c
typedef const char * (*lua_Reader) (lua_State *L,
                                    void *data,
                                    size_t *size);
```

The reader function used by [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load). Every time [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load) needs another piece of the chunk, it calls the reader, passing along its `data` parameter. The reader must return a pointer to a block of memory with a new piece of the chunk and set `size` to the block size. The block must exist until the reader function is called again. To signal the end of the chunk, the reader must return `NULL` or set `size` to zero. The reader function may return pieces of any size greater than zero.

---

## <a id="lua_register"></a>`lua_register`

[-0, +0, *e*]

```c
void lua_register (lua_State *L, const char *name, lua_CFunction f);
```

Sets the C function `f` as the new value of global `name`. It is defined as a macro:

```c
     #define lua_register(L,n,f) \
            (lua_pushcfunction(L, f), lua_setglobal(L, n))
```

---

## <a id="lua_remove"></a>`lua_remove`

[-1, +0, –]

```c
void lua_remove (lua_State *L, int index);
```

Removes the element at the given valid index, shifting down the elements above this index to fill the gap. This function cannot be called with a pseudo-index, because a pseudo-index is not an actual stack position.

---

## <a id="lua_replace"></a>`lua_replace`

[-1, +0, –]

```c
void lua_replace (lua_State *L, int index);
```

Moves the top element into the given valid index without shifting any element (therefore replacing the value at that given index), and then pops the top element.

---

## <a id="lua_resume"></a>`lua_resume`

[-?, +?, –]

```c
int lua_resume (lua_State *L, lua_State *from, int nargs,
                          int *nresults);
```

Starts and resumes a coroutine in the given thread `L`.

To start a coroutine, you push the main function plus any arguments onto the empty stack of the thread. Then you call [`lua_resume`](/docs/lua/v5-5-1/en/03-c-api/13-functions-and-types-raw-resume/#lua_resume), with `nargs` being the number of arguments. The function returns when the coroutine suspends, finishes its execution, or raises an unprotected error. When it returns without errors, `*nresults` is updated and the top of the stack contains the `*nresults` values passed to [`lua_yield`](/docs/lua/v5-5-1/en/03-c-api/16-functions-and-types-u-y/#lua_yield) or returned by the body function. [`lua_resume`](/docs/lua/v5-5-1/en/03-c-api/13-functions-and-types-raw-resume/#lua_resume) returns [`LUA_YIELD`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_YIELD) if the coroutine yields, [`LUA_OK`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_OK) if the coroutine finishes its execution without errors, or an error code in case of errors (see [§4.4.1](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#4.4.1)). In case of errors, the error object is pushed on the top of the stack. (In that case, `nresults` is not updated, as its value would have to be 1 for the sole error object.)

To resume a suspended coroutine, you remove the `*nresults` yielded values from its stack, push the values to be passed as results from `yield`, and then call [`lua_resume`](/docs/lua/v5-5-1/en/03-c-api/13-functions-and-types-raw-resume/#lua_resume).

The parameter `from` represents the coroutine that is resuming `L`. If there is no such coroutine, this parameter can be `NULL`.

---

## <a id="lua_rotate"></a>`lua_rotate`

[-0, +0, –]

```c
void lua_rotate (lua_State *L, int idx, int n);
```

Rotates the stack elements between the valid index `idx` and the top of the stack. The elements are rotated `n` positions in the direction of the top, for a positive `n`, or `-n` positions in the direction of the bottom, for a negative `n`. The absolute value of `n` must not be greater than the size of the slice being rotated. This function cannot be called with a pseudo-index, because a pseudo-index is not an actual stack position.

---
