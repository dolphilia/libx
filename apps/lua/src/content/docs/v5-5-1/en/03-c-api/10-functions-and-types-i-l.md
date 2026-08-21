---
title: "C API functions and types: insert–load"
description: "Alphabetical C API reference from lua_insert through lua_load"
---

# C API functions and types: insert–load

## <a id="lua_insert"></a>`lua_insert`

[-1, +1, –]

```c
void lua_insert (lua_State *L, int index);
```

Moves the top element into the given valid index, shifting up the elements above this index to open space. This function cannot be called with a pseudo-index, because a pseudo-index is not an actual stack position.

---

## <a id="lua_Integer"></a>`lua_Integer`

```c
typedef ... lua_Integer;
```

The type of integers in Lua.

By default this type is `long long`, (usually a 64-bit two's complement integer), but that can be changed to `long` or `int` (usually a 32-bit two's complement integer). (See `LUA_INT_TYPE` in `luaconf.h`.)

Lua also defines the constants <a id="pdf-LUA_MININTEGER"></a>`LUA_MININTEGER` and <a id="pdf-LUA_MAXINTEGER"></a>`LUA_MAXINTEGER`, with the minimum and the maximum values that fit in this type.

---

## <a id="lua_isboolean"></a>`lua_isboolean`

[-0, +0, –]

```c
int lua_isboolean (lua_State *L, int index);
```

Returns 1 if the value at the given index is a boolean, and 0 otherwise.

---

## <a id="lua_iscfunction"></a>`lua_iscfunction`

[-0, +0, –]

```c
int lua_iscfunction (lua_State *L, int index);
```

Returns 1 if the value at the given index is a C function, and 0 otherwise.

---

## <a id="lua_isfunction"></a>`lua_isfunction`

[-0, +0, –]

```c
int lua_isfunction (lua_State *L, int index);
```

Returns 1 if the value at the given index is a function (either C or Lua), and 0 otherwise.

---

## <a id="lua_isinteger"></a>`lua_isinteger`

[-0, +0, –]

```c
int lua_isinteger (lua_State *L, int index);
```

Returns 1 if the value at the given index is an integer (that is, the value is a number and is represented as an integer), and 0 otherwise.

---

## <a id="lua_islightuserdata"></a>`lua_islightuserdata`

[-0, +0, –]

```c
int lua_islightuserdata (lua_State *L, int index);
```

Returns 1 if the value at the given index is a light userdata, and 0 otherwise.

---

## <a id="lua_isnil"></a>`lua_isnil`

[-0, +0, –]

```c
int lua_isnil (lua_State *L, int index);
```

Returns 1 if the value at the given index is **nil**, and 0 otherwise.

---

## <a id="lua_isnone"></a>`lua_isnone`

[-0, +0, –]

```c
int lua_isnone (lua_State *L, int index);
```

Returns 1 if the given index is not valid, and 0 otherwise.

---

## <a id="lua_isnoneornil"></a>`lua_isnoneornil`

[-0, +0, –]

```c
int lua_isnoneornil (lua_State *L, int index);
```

Returns 1 if the given index is not valid or if the value at this index is **nil**, and 0 otherwise.

---

## <a id="lua_isnumber"></a>`lua_isnumber`

[-0, +0, –]

```c
int lua_isnumber (lua_State *L, int index);
```

Returns 1 if the value at the given index is a number or a string convertible to a number, and 0 otherwise.

---

## <a id="lua_isstring"></a>`lua_isstring`

[-0, +0, –]

```c
int lua_isstring (lua_State *L, int index);
```

Returns 1 if the value at the given index is a string or a number (which is always convertible to a string), and 0 otherwise.

---

## <a id="lua_istable"></a>`lua_istable`

[-0, +0, –]

```c
int lua_istable (lua_State *L, int index);
```

Returns 1 if the value at the given index is a table, and 0 otherwise.

---

## <a id="lua_isthread"></a>`lua_isthread`

[-0, +0, –]

```c
int lua_isthread (lua_State *L, int index);
```

Returns 1 if the value at the given index is a thread, and 0 otherwise.

---

## <a id="lua_isuserdata"></a>`lua_isuserdata`

[-0, +0, –]

```c
int lua_isuserdata (lua_State *L, int index);
```

Returns 1 if the value at the given index is a userdata (either full or light), and 0 otherwise.

---

## <a id="lua_isyieldable"></a>`lua_isyieldable`

[-0, +0, –]

```c
int lua_isyieldable (lua_State *L);
```

Returns 1 if the given coroutine can yield, and 0 otherwise.

---

## <a id="lua_KContext"></a>`lua_KContext`

```c
typedef ... lua_KContext;
```

The type for continuation-function contexts. It must be a numeric type. This type is defined as `intptr_t` when `intptr_t` is available, so that it can store pointers too. Otherwise, it is defined as `ptrdiff_t`.

---

## <a id="lua_KFunction"></a>`lua_KFunction`

```c
typedef int (*lua_KFunction) (lua_State *L, int status, lua_KContext ctx);
```

Type for continuation functions (see [§4.5](/docs/lua/v5-5-1/en/03-c-api/06-handling-yields-in-c/#4.5)).

---

## <a id="lua_len"></a>`lua_len`

[-0, +1, *e*]

```c
void lua_len (lua_State *L, int index);
```

Returns the length of the value at the given index. It is equivalent to the '`#`' operator in Lua (see [§3.4.7](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.7)) and may trigger a metamethod for the "length" event (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)). The result is pushed on the stack.

---

## <a id="lua_load"></a>`lua_load`

[-0, +1, –]

```c
int lua_load (lua_State *L,
              lua_Reader reader,
              void *data,
              const char *chunkname,
              const char *mode);
```

Loads a Lua chunk without running it. If there are no errors, `lua_load` pushes the compiled chunk as a Lua function on top of the stack. Otherwise, it pushes an error message.

The `lua_load` function uses a user-supplied `reader` function to read the chunk (see [`lua_Reader`](/docs/lua/v5-5-1/en/03-c-api/13-functions-and-types-raw-resume/#lua_Reader)). The `data` argument is an opaque value passed to the reader function.

The `chunkname` argument gives a name to the chunk, which is used for error messages and in debug information (see [§4.7](/docs/lua/v5-5-1/en/03-c-api/17-debug-interface/#4.7)).

`lua_load` automatically detects whether the chunk is text or binary and loads it accordingly (see program `luac`). The string `mode` works as in function [`load`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-load), with the addition that a `NULL` value is equivalent to the string "`bt`". Moreover, it may have a '`B`' instead of a '`b`', meaning a *fixed buffer* with the binary dump.

A fixed buffer means that the address returned by the reader function will contain the chunk until everything created by the chunk has been collected; therefore, Lua can avoid copying to internal structures some parts of the chunk. (In general, a fixed buffer would keep its contents until the end of the program, for instance with the chunk in ROM.) Moreover, for a fixed buffer, the reader function should return the entire chunk in the first read. (As an example, [`luaL_loadbufferx`](/docs/lua/v5-5-1/en/04-auxiliary-library/04-functions-and-types-do-load/#luaL_loadbufferx) does that, which means that you can use it to load fixed buffers.)

The function [`lua_load`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_load) fully preserves the Lua stack through the calls to the reader function, except that it may push some values for internal use before the first call, and it restores the stack size to its original size plus one (for the pushed result) after the last call.

`lua_load` can return [`LUA_OK`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_OK), [`LUA_ERRSYNTAX`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_ERRSYNTAX), or [`LUA_ERRMEM`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_ERRMEM). The function may also return other values corresponding to errors raised by the read function (see [§4.4.1](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#4.4.1)).

If the resulting function has upvalues, its first upvalue is set to the value of the global environment stored at index `LUA_RIDX_GLOBALS` in the registry (see [§4.3](/docs/lua/v5-5-1/en/03-c-api/04-registry/#4.3)). When loading main chunks, this upvalue will be the `_ENV` variable (see [§2.2](/docs/lua/v5-5-1/en/02-language/02-scopes-variables-and-environments/#2.2)). Other upvalues are initialized with **nil**.

---
