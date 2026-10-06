---
title: "Auxiliary functions and types: makeseed–pushresultsize"
description: "State, option and result auxiliary API reference"
---

# Auxiliary functions and types: makeseed–pushresultsize

## <a id="luaL_makeseed"></a>`luaL_makeseed`

[-0, +0, –]

```c
unsigned int luaL_makeseed (lua_State *L);
```

Returns a value with a weak attempt for randomness. The parameter `L` can be `NULL` if there is no Lua state available.

---

## <a id="luaL_newlib"></a>`luaL_newlib`

[-0, +1, *m*]

```c
void luaL_newlib (lua_State *L, const luaL_Reg l[]);
```

Creates a new table and registers there the functions in the list `l`.

It is implemented as the following macro:

```c
     (luaL_newlibtable(L,l), luaL_setfuncs(L,l,0))
```

The array `l` must be the actual array, not a pointer to it.

---

## <a id="luaL_newlibtable"></a>`luaL_newlibtable`

[-0, +1, *m*]

```c
void luaL_newlibtable (lua_State *L, const luaL_Reg l[]);
```

Creates a new table with a size optimized to store all entries in the array `l` (but does not actually store them). It is intended to be used in conjunction with [`luaL_setfuncs`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_setfuncs) (see [`luaL_newlib`](/docs/lua/v5-5-1/en/04-auxiliary-library/05-functions-and-types-make-push/#luaL_newlib)).

It is implemented as a macro. The array `l` must be the actual array, not a pointer to it.

---

## <a id="luaL_newmetatable"></a>`luaL_newmetatable`

[-0, +1, *m*]

```c
int luaL_newmetatable (lua_State *L, const char *tname);
```

If the registry already has the key `tname`, returns 0. Otherwise, creates a new table to be used as a metatable for userdata, adds to this new table the pair `__name = tname`, adds to the registry the pair `[tname] = new table`, and returns 1.

In both cases, the function pushes onto the stack the final value associated with `tname` in the registry.

Usage note: Beware the use of the return value of this function to conditionally initializes the new metatable (e.g., by adding metamethods to it). If the initialization raises an error, the metatable will not be properly initialized, but a subsequent execution of that code will detect that the metatable already exists and then skip the initialization.

---

## <a id="luaL_newstate"></a>`luaL_newstate`

[-0, +0, –]

```c
lua_State *luaL_newstate (void);
```

Creates a new Lua state. It calls [`lua_newstate`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_newstate) with [`luaL_alloc`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_alloc) as the allocator function and the result of `luaL_makeseed(NULL)` as the seed, and then sets a warning function and a panic function (see [§4.4](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#4.4)) that print messages to the standard error output.

Returns the new state, or `NULL` if there is a memory allocation error.

---

## <a id="luaL_opt"></a>`luaL_opt`

[-0, +0, –]

```c
T luaL_opt (L, func, arg, dflt);
```

This macro is defined as follows:

```c
     (lua_isnoneornil(L,(arg)) ? (dflt) : func(L,(arg)))
```

In words, if the argument `arg` is nil or absent, the macro results in the default `dflt`. Otherwise, it results in the result of calling `func` with the state `L` and the argument index `arg` as arguments. Note that it evaluates the expression `dflt` only if needed.

---

## <a id="luaL_optinteger"></a>`luaL_optinteger`

[-0, +0, *v*]

```c
lua_Integer luaL_optinteger (lua_State *L,
                             int arg,
                             lua_Integer d);
```

If the function argument `arg` is an integer (or it is convertible to an integer), returns this integer. If this argument is absent or is **nil**, returns `d`. Otherwise, raises an error.

---

## <a id="luaL_optlstring"></a>`luaL_optlstring`

[-0, +0, *v*]

```c
const char *luaL_optlstring (lua_State *L,
                             int arg,
                             const char *d,
                             size_t *l);
```

If the function argument `arg` is a string, returns this string. If this argument is absent or is **nil**, returns `d`. Otherwise, raises an error.

If `l` is not `NULL`, fills its referent with the result's length. If the result is `NULL` (only possible when returning `d` and `d == NULL`), its length is considered zero.

This function uses [`lua_tolstring`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_tolstring) to get its result, so all conversions and caveats of that function apply here.

---

## <a id="luaL_optnumber"></a>`luaL_optnumber`

[-0, +0, *v*]

```c
lua_Number luaL_optnumber (lua_State *L, int arg, lua_Number d);
```

If the function argument `arg` is a number, returns this number as a `lua_Number`. If this argument is absent or is **nil**, returns `d`. Otherwise, raises an error.

---

## <a id="luaL_optstring"></a>`luaL_optstring`

[-0, +0, *v*]

```c
const char *luaL_optstring (lua_State *L,
                            int arg,
                            const char *d);
```

If the function argument `arg` is a string, returns this string. If this argument is absent or is **nil**, returns `d`. Otherwise, raises an error.

---

## <a id="luaL_prepbuffer"></a>`luaL_prepbuffer`

[-?, +?, *m*]

```c
char *luaL_prepbuffer (luaL_Buffer *B);
```

Equivalent to [`luaL_prepbuffsize`](/docs/lua/v5-5-1/en/04-auxiliary-library/05-functions-and-types-make-push/#luaL_prepbuffsize) with the predefined size <a id="pdf-LUAL_BUFFERSIZE"></a>`LUAL_BUFFERSIZE`.

---

## <a id="luaL_prepbuffsize"></a>`luaL_prepbuffsize`

[-?, +?, *m*]

```c
char *luaL_prepbuffsize (luaL_Buffer *B, size_t sz);
```

Returns an address to a space of size `sz` where you can copy a string to be added to buffer `B` (see [`luaL_Buffer`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)). After copying the string into this space you must call [`luaL_addsize`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_addsize) with the size of the string to actually add it to the buffer.

---

## <a id="luaL_pushfail"></a>`luaL_pushfail`

[-0, +1, –]

```c
void luaL_pushfail (lua_State *L);
```

Pushes the **fail** value onto the stack (see [§6](/docs/lua/v5-5-1/en/05-standard-library/01-overview/#6)).

---

## <a id="luaL_pushresult"></a>`luaL_pushresult`

[-?, +1, *m*]

```c
void luaL_pushresult (luaL_Buffer *B);
```

Finishes the use of buffer `B` leaving the final string on the top of the stack.

---

## <a id="luaL_pushresultsize"></a>`luaL_pushresultsize`

[-?, +1, *m*]

```c
void luaL_pushresultsize (luaL_Buffer *B, size_t sz);
```

Equivalent to the sequence [`luaL_addsize`](/docs/lua/v5-5-1/en/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_addsize), [`luaL_pushresult`](/docs/lua/v5-5-1/en/04-auxiliary-library/05-functions-and-types-make-push/#luaL_pushresult).

---
