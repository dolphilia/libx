---
title: "Auxiliary functions and types: callmeta–checkversion"
description: "Argument checking and metatable auxiliary API reference"
---

# Auxiliary functions and types: callmeta–checkversion

## <a id="luaL_callmeta"></a>`luaL_callmeta`

[-0, +(0|1), *e*]

```c
int luaL_callmeta (lua_State *L, int obj, const char *e);
```

Calls a metamethod.

If the object at index `obj` has a metatable and this metatable has a field `e`, this function calls this field passing the object as its only argument. In this case this function returns true and pushes onto the stack the value returned by the call. If there is no metatable or no metamethod, this function returns false without pushing any value on the stack.

---

## <a id="luaL_checkany"></a>`luaL_checkany`

[-0, +0, *v*]

```c
void luaL_checkany (lua_State *L, int arg);
```

Checks whether the function has an argument of any type (including **nil**) at position `arg`.

---

## <a id="luaL_checkinteger"></a>`luaL_checkinteger`

[-0, +0, *v*]

```c
lua_Integer luaL_checkinteger (lua_State *L, int arg);
```

Checks whether the function argument `arg` is an integer (or can be converted to an integer) and returns this integer.

---

## <a id="luaL_checklstring"></a>`luaL_checklstring`

[-0, +0, *v*]

```c
const char *luaL_checklstring (lua_State *L, int arg, size_t *l);
```

Checks whether the function argument `arg` is a string and returns this string; if `l` is not `NULL` fills its referent with the string's length.

This function uses [`lua_tolstring`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_tolstring) to get its result, so all conversions and caveats of that function apply here.

---

## <a id="luaL_checknumber"></a>`luaL_checknumber`

[-0, +0, *v*]

```c
lua_Number luaL_checknumber (lua_State *L, int arg);
```

Checks whether the function argument `arg` is a number and returns this number converted to a `lua_Number`.

---

## <a id="luaL_checkoption"></a>`luaL_checkoption`

[-0, +0, *v*]

```c
int luaL_checkoption (lua_State *L,
                      int arg,
                      const char *def,
                      const char *const lst[]);
```

Checks whether the function argument `arg` is a string and searches for this string in the array `lst` (which must be NULL-terminated). Returns the index in the array where the string was found. Raises an error if the argument is not a string or if the string cannot be found.

If `def` is not `NULL`, the function uses `def` as a default value when there is no argument `arg` or when this argument is **nil**.

This is a useful function for mapping strings to C enums. (The usual convention in Lua libraries is to use strings instead of numbers to select options.)

---

## <a id="luaL_checkstack"></a>`luaL_checkstack`

[-0, +0, *v*]

```c
void luaL_checkstack (lua_State *L, int sz, const char *msg);
```

Grows the stack size to `top + sz` elements, raising an error if the stack cannot grow to that size. `msg` is an additional text to go into the error message (or `NULL` for no additional text).

---

## <a id="luaL_checkstring"></a>`luaL_checkstring`

[-0, +0, *v*]

```c
const char *luaL_checkstring (lua_State *L, int arg);
```

Checks whether the function argument `arg` is a string and returns this string.

This function uses [`lua_tolstring`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_tolstring) to get its result, so all conversions and caveats of that function apply here.

---

## <a id="luaL_checktype"></a>`luaL_checktype`

[-0, +0, *v*]

```c
void luaL_checktype (lua_State *L, int arg, int t);
```

Checks whether the function argument `arg` has type `t`. See [`lua_type`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_type) for the encoding of types for `t`.

---

## <a id="luaL_checkudata"></a>`luaL_checkudata`

[-0, +0, *v*]

```c
void *luaL_checkudata (lua_State *L, int arg, const char *tname);
```

Checks whether the function argument `arg` is a userdata of the type `tname` (see [`luaL_newmetatable`](/docs/lua/v5-5-1/en/04-auxiliary-library/05-functions-and-types-make-push/#luaL_newmetatable)) and returns the userdata's memory-block address (see [`lua_touserdata`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_touserdata)).

---

## <a id="luaL_checkversion"></a>`luaL_checkversion`

[-0, +0, *v*]

```c
void luaL_checkversion (lua_State *L);
```

Checks whether the code making the call and the Lua library being called are using the same version of Lua and the same numeric types.

---
