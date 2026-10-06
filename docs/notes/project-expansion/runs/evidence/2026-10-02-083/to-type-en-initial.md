---
title: "C API functions and types: toboolean–typename"
description: "Alphabetical C API reference for conversions and type inspection"
---

# C API functions and types: toboolean–typename

## <a id="lua_toboolean"></a>`lua_toboolean`

[-0, +0, –]

```c
int lua_toboolean (lua_State *L, int index);
```

Converts the Lua value at the given index to a C boolean value (0 or 1). Like all tests in Lua, [`lua_toboolean`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_toboolean) returns true for any Lua value different from **false** and **nil**; otherwise it returns false. (If you want to accept only actual boolean values, use [`lua_isboolean`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_isboolean) to test the value's type.)

---

## <a id="lua_tocfunction"></a>`lua_tocfunction`

[-0, +0, –]

```c
lua_CFunction lua_tocfunction (lua_State *L, int index);
```

Converts a value at the given index to a C function. That value must be a C function; otherwise, returns `NULL`.

---

## <a id="lua_toclose"></a>`lua_toclose`

[-0, +0, *v*]

```c
void lua_toclose (lua_State *L, int index);
```

Marks the given index in the stack as a to-be-closed slot (see [§3.3.8](/docs/lua/v5-5-1/en/02-language/09-statements/#3.3.8)). Like a to-be-closed variable in Lua, the value at that slot in the stack will be closed when it goes out of scope. Here, in the context of a C function, to go out of scope means that the running function returns to Lua, or there is an error, or the slot is removed from the stack through [`lua_settop`](/docs/lua/v5-5-1/en/03-c-api/14-functions-and-types-set-status/#lua_settop) or [`lua_pop`](/docs/lua/v5-5-1/en/03-c-api/12-functions-and-types-pop-push/#lua_pop), or there is a call to [`lua_closeslot`](/docs/lua/v5-5-1/en/03-c-api/07-functions-and-types-a-c/#lua_closeslot). A slot marked as to-be-closed should not be removed from the stack by any other function in the API except [`lua_settop`](/docs/lua/v5-5-1/en/03-c-api/14-functions-and-types-set-status/#lua_settop) or [`lua_pop`](/docs/lua/v5-5-1/en/03-c-api/12-functions-and-types-pop-push/#lua_pop), unless previously deactivated by [`lua_closeslot`](/docs/lua/v5-5-1/en/03-c-api/07-functions-and-types-a-c/#lua_closeslot).

This function raises an error if the value at the given slot neither has a `__close` metamethod nor is a false value.

This function should not be called for an index that is equal to or below an active to-be-closed slot.

Note that, both in case of errors and of a regular return, by the time the `__close` metamethod runs, the C stack was already unwound, so that any automatic C variable declared in the calling function (e.g., a buffer) will be out of scope.

---

## <a id="lua_tointeger"></a>`lua_tointeger`

[-0, +0, –]

```c
lua_Integer lua_tointeger (lua_State *L, int index);
```

Equivalent to [`lua_tointegerx`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_tointegerx) with `isnum` equal to `NULL`.

---

## <a id="lua_tointegerx"></a>`lua_tointegerx`

[-0, +0, –]

```c
lua_Integer lua_tointegerx (lua_State *L, int index, int *isnum);
```

Converts the Lua value at the given index to the signed integral type [`lua_Integer`](/docs/lua/v5-5-1/en/03-c-api/10-functions-and-types-i-l/#lua_Integer). The Lua value must be an integer, or a number or string convertible to an integer (see [§3.4.3](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.3)); otherwise, `lua_tointegerx` returns 0.

If `isnum` is not `NULL`, its referent is assigned a boolean value that indicates whether the operation succeeded.

---

## <a id="lua_tolstring"></a>`lua_tolstring`

[-0, +0, *m*]

```c
const char *lua_tolstring (lua_State *L, int index, size_t *len);
```

Converts the Lua value at the given index to a C string. The Lua value must be a string or a number; otherwise, the function returns `NULL`. If the value is a number, then `lua_tolstring` also *changes the actual value in the stack to a string*. (This change confuses [`lua_next`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_next) when `lua_tolstring` is applied to keys during a table traversal.)

If `len` is not `NULL`, the function sets `*len` with the string length. The returned C string always has a zero ('`\0`') after its last character, but can contain other zeros in its body.

The pointer returned by `lua_tolstring` may be invalidated by the garbage collector if the corresponding Lua value is removed from the stack (see [§4.1.3](/docs/lua/v5-5-1/en/03-c-api/02-stack/#4.1.3)).

This function can raise memory errors only when converting a number to a string (as then it may create a new string).

---

## <a id="lua_tonumber"></a>`lua_tonumber`

[-0, +0, –]

```c
lua_Number lua_tonumber (lua_State *L, int index);
```

Equivalent to [`lua_tonumberx`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_tonumberx) with `isnum` equal to `NULL`.

---

## <a id="lua_tonumberx"></a>`lua_tonumberx`

[-0, +0, –]

```c
lua_Number lua_tonumberx (lua_State *L, int index, int *isnum);
```

Converts the Lua value at the given index to the C type [`lua_Number`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_Number) (see [`lua_Number`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_Number)). The Lua value must be a number or a string convertible to a number (see [§3.4.3](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.3)); otherwise, [`lua_tonumberx`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_tonumberx) returns 0.

If `isnum` is not `NULL`, its referent is assigned a boolean value that indicates whether the operation succeeded.

---

## <a id="lua_topointer"></a>`lua_topointer`

[-0, +0, –]

```c
const void *lua_topointer (lua_State *L, int index);
```

Converts the value at the given index to a generic C pointer (`void*`). The value can be a userdata, a table, a thread, a string, or a function; otherwise, `lua_topointer` returns `NULL`. Different objects will give different pointers. There is no way to convert the pointer back to its original value.

Typically this function is used only for hashing and debug information.

---

## <a id="lua_tostring"></a>`lua_tostring`

[-0, +0, *m*]

```c
const char *lua_tostring (lua_State *L, int index);
```

Equivalent to [`lua_tolstring`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_tolstring) with `len` equal to `NULL`.

---

## <a id="lua_tothread"></a>`lua_tothread`

[-0, +0, –]

```c
lua_State *lua_tothread (lua_State *L, int index);
```

Converts the value at the given index to a Lua thread (represented as `lua_State*`). This value must be a thread; otherwise, the function returns `NULL`.

---

## <a id="lua_touserdata"></a>`lua_touserdata`

[-0, +0, –]

```c
void *lua_touserdata (lua_State *L, int index);
```

If the value at the given index is a full userdata, returns its memory-block address. If the value is a light userdata, returns its value (a pointer). Otherwise, returns `NULL`.

---

## <a id="lua_type"></a>`lua_type`

[-0, +0, –]

```c
int lua_type (lua_State *L, int index);
```

Returns the type of the value in the given valid index, or `LUA_TNONE` for a non-valid but acceptable index. The types returned by [`lua_type`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_type) are coded by the following constants defined in `lua.h`: <a id="pdf-LUA_TNIL"></a>`LUA_TNIL`, <a id="pdf-LUA_TNUMBER"></a>`LUA_TNUMBER`, <a id="pdf-LUA_TBOOLEAN"></a>`LUA_TBOOLEAN`, <a id="pdf-LUA_TSTRING"></a>`LUA_TSTRING`, <a id="pdf-LUA_TTABLE"></a>`LUA_TTABLE`, <a id="pdf-LUA_TFUNCTION"></a>`LUA_TFUNCTION`, <a id="pdf-LUA_TUSERDATA"></a>`LUA_TUSERDATA`, <a id="pdf-LUA_TTHREAD"></a>`LUA_TTHREAD`, and <a id="pdf-LUA_TLIGHTUSERDATA"></a>`LUA_TLIGHTUSERDATA`.

---

## <a id="lua_typename"></a>`lua_typename`

[-0, +0, –]

```c
const char *lua_typename (lua_State *L, int tp);
```

Returns the name of the type encoded by the value `tp`, which must be one the values returned by [`lua_type`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_type).

---
