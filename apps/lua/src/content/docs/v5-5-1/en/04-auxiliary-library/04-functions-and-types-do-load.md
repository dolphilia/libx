---
title: "Auxiliary functions and types: dofile–loadstring"
description: "Execution, result and loading auxiliary API reference"
---

# Auxiliary functions and types: dofile–loadstring

## <a id="luaL_dofile"></a>`luaL_dofile`

[-0, +?, *m*]

```c
int luaL_dofile (lua_State *L, const char *filename);
```

Loads and runs the given file. It is defined as the following macro:

```c
     (luaL_loadfile(L, filename) || lua_pcall(L, 0, LUA_MULTRET, 0))
```

It returns 0 ([`LUA_OK`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)) if there are no errors, or 1 in case of errors. (Except for out-of-memory errors, which are raised.)

---

## <a id="luaL_dostring"></a>`luaL_dostring`

[-0, +?, –]

```c
int luaL_dostring (lua_State *L, const char *str);
```

Loads and runs the given string. It is defined as the following macro:

```c
     (luaL_loadstring(L, str) || lua_pcall(L, 0, LUA_MULTRET, 0))
```

It returns 0 ([`LUA_OK`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)) if there are no errors, or 1 in case of errors.

---

## <a id="luaL_error"></a>`luaL_error`

[-0, +0, *v*]

```c
int luaL_error (lua_State *L, const char *fmt, ...);
```

Raises an error. The error message format is given by `fmt` plus any extra arguments, following the same rules of [`lua_pushfstring`](/docs/lua/v5-5-1/en/03-c-api/12-functions-and-types-pop-push/#lua_pushfstring). It also adds at the beginning of the message the file name and the line number where the error occurred, if this information is available.

This function never returns, but it is an idiom to use it in C functions as `return luaL_error(args)`.

---

## <a id="luaL_execresult"></a>`luaL_execresult`

[-0, +3, *m*]

```c
int luaL_execresult (lua_State *L, int stat);
```

This function produces the return values for process-related functions in the standard library ([`os.execute`](/docs/lua/v5-5-1/en/05-standard-library/11-operating-system/#pdf-os.execute) and [`io.close`](/docs/lua/v5-5-1/en/05-standard-library/10-input-and-output/#pdf-io.close)).

---

## <a id="luaL_fileresult"></a>`luaL_fileresult`

[-0, +(1|3), *m*]

```c
int luaL_fileresult (lua_State *L, int stat, const char *fname);
```

This function produces the return values for file-related functions in the standard library ([`io.open`](/docs/lua/v5-5-1/en/05-standard-library/10-input-and-output/#pdf-io.open), [`os.rename`](/docs/lua/v5-5-1/en/05-standard-library/11-operating-system/#pdf-os.rename), [`file:seek`](/docs/lua/v5-5-1/en/05-standard-library/10-input-and-output/#pdf-file:seek), etc.).

---

## <a id="luaL_getmetafield"></a>`luaL_getmetafield`

[-0, +(0|1), *m*]

```c
int luaL_getmetafield (lua_State *L, int obj, const char *e);
```

Pushes onto the stack the field `e` from the metatable of the object at index `obj` and returns the type of the pushed value. If the object does not have a metatable, or if the metatable does not have this field, pushes nothing and returns `LUA_TNIL`.

---

## <a id="luaL_getmetatable"></a>`luaL_getmetatable`

[-0, +1, *m*]

```c
int luaL_getmetatable (lua_State *L, const char *tname);
```

Pushes onto the stack the metatable associated with the name `tname` in the registry (see [`luaL_newmetatable`](/docs/lua/v5-5-1/en/04-auxiliary-library/05-functions-and-types-make-push/#luaL_newmetatable)), or **nil** if there is no metatable associated with that name. Returns the type of the pushed value.

---

## <a id="luaL_getsubtable"></a>`luaL_getsubtable`

[-0, +1, *e*]

```c
int luaL_getsubtable (lua_State *L, int idx, const char *fname);
```

Ensures that the value `t[fname]`, where `t` is the value at index `idx`, is a table, and pushes that table onto the stack. Returns true if it finds a previous table there and false if it creates a new table.

---

## <a id="luaL_gsub"></a>`luaL_gsub`

[-0, +1, *m*]

```c
const char *luaL_gsub (lua_State *L,
                       const char *s,
                       const char *p,
                       const char *r);
```

Creates a copy of string `s`, replacing any occurrence of the string `p` with the string `r`. Pushes the resulting string on the stack and returns it.

---

## <a id="luaL_len"></a>`luaL_len`

[-0, +0, *e*]

```c
lua_Integer luaL_len (lua_State *L, int index);
```

Returns the "length" of the value at the given index as a number; it is equivalent to the '`#`' operator in Lua (see [§3.4.7](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.7)). Raises an error if the result of the operation is not an integer. (This case can only happen through metamethods.)

---

## <a id="luaL_loadbuffer"></a>`luaL_loadbuffer`

[-0, +1, –]

```c
int luaL_loadbuffer (lua_State *L,
                     const char *buff,
                     size_t sz,
                     const char *name);
```

Equivalent to [`luaL_loadbufferx`](/docs/lua/v5-5-1/en/04-auxiliary-library/04-functions-and-types-do-load/#luaL_loadbufferx) with `mode` equal to `NULL`.

---

## <a id="luaL_loadbufferx"></a>`luaL_loadbufferx`

[-0, +1, –]

```c
int luaL_loadbufferx (lua_State *L,
                      const char *buff,
                      size_t sz,
                      const char *name,
                      const char *mode);
```

Loads a buffer as a Lua chunk. This function uses [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load) to load the chunk in the buffer pointed to by `buff` with size `sz`.

This function returns the same results as [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load). `name` is the chunk name, used for debug information and error messages. The string `mode` works as in the function [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load). In particular, this function supports mode '`B`' for fixed buffers.

---

## <a id="luaL_loadfile"></a>`luaL_loadfile`

[-0, +1, *m*]

```c
int luaL_loadfile (lua_State *L, const char *filename);
```

Equivalent to [`luaL_loadfilex`](/docs/lua/v5-5-1/en/04-auxiliary-library/04-functions-and-types-do-load/#luaL_loadfilex) with `mode` equal to `NULL`.

---

## <a id="luaL_loadfilex"></a>`luaL_loadfilex`

[-0, +1, *m*]

```c
int luaL_loadfilex (lua_State *L, const char *filename,
                                            const char *mode);
```

Loads a file as a Lua chunk. This function uses [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load) to load the chunk in the file named `filename`. If `filename` is `NULL`, then it loads from the standard input. The first line in the file is ignored if it starts with a `#`.

The string `mode` works as in the function [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load).

This function returns the same results as [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load), or [`LUA_ERRFILE`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_ERRFILE) for file-related errors.

As [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load), this function only loads the chunk; it does not run it.

---

## <a id="luaL_loadstring"></a>`luaL_loadstring`

[-0, +1, –]

```c
int luaL_loadstring (lua_State *L, const char *s);
```

Loads a string as a Lua chunk. This function uses [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load) to load the chunk in the zero-terminated string `s`.

This function returns the same results as [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load).

Also as [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load), this function only loads the chunk; it does not run it.

---
