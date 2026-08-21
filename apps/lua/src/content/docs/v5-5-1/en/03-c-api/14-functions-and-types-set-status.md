---
title: "C API functions and types: setallocf–stringtonumber"
description: "Alphabetical C API reference for setters and status operations"
---

# C API functions and types: setallocf–stringtonumber

## <a id="lua_setallocf"></a>`lua_setallocf`

[-0, +0, –]

```c
void lua_setallocf (lua_State *L, lua_Alloc f, void *ud);
```

Changes the allocator function of a given state to `f` with user data `ud`.

---

## <a id="lua_setfield"></a>`lua_setfield`

[-1, +0, *e*]

```c
void lua_setfield (lua_State *L, int index, const char *k);
```

Does the equivalent to `t[k] = v`, where `t` is the value at the given index and `v` is the value on the top of the stack.

This function pops the value from the stack. As in Lua, this function may trigger a metamethod for the "newindex" event (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)).

---

## <a id="lua_setglobal"></a>`lua_setglobal`

[-1, +0, *e*]

```c
void lua_setglobal (lua_State *L, const char *name);
```

Pops a value from the stack and sets it as the new value of global `name`.

---

## <a id="lua_seti"></a>`lua_seti`

[-1, +0, *e*]

```c
void lua_seti (lua_State *L, int index, lua_Integer n);
```

Does the equivalent to `t[n] = v`, where `t` is the value at the given index and `v` is the value on the top of the stack.

This function pops the value from the stack. As in Lua, this function may trigger a metamethod for the "newindex" event (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)).

---

## <a id="lua_setiuservalue"></a>`lua_setiuservalue`

[-1, +0, –]

```c
int lua_setiuservalue (lua_State *L, int index, int n);
```

Pops a value from the stack and sets it as the new `n`-th user value associated to the full userdata at the given index. Returns 0 if the userdata does not have that value.

---

## <a id="lua_setmetatable"></a>`lua_setmetatable`

[-1, +0, –]

```c
int lua_setmetatable (lua_State *L, int index);
```

Pops a table or **nil** from the stack and sets that value as the new metatable for the value at the given index. (**nil** means no metatable.)

(For historical reasons, this function returns an `int`, which now is always 1.)

---

## <a id="lua_settable"></a>`lua_settable`

[-2, +0, *e*]

```c
void lua_settable (lua_State *L, int index);
```

Does the equivalent to `t[k] = v`, where `t` is the value at the given index, `v` is the value on the top of the stack, and `k` is the value just below the top.

This function pops both the key and the value from the stack. As in Lua, this function may trigger a metamethod for the "newindex" event (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)).

---

## <a id="lua_settop"></a>`lua_settop`

[-?, +?, *e*]

```c
void lua_settop (lua_State *L, int index);
```

Receives any acceptable stack index, or 0, and sets the stack top to this index. If the new top is greater than the old one, then the new elements are filled with **nil**. If `index` is 0, then all stack elements are removed.

This function can run arbitrary code when removing an index marked as to-be-closed from the stack.

---

## <a id="lua_setwarnf"></a>`lua_setwarnf`

[-0, +0, –]

```c
void lua_setwarnf (lua_State *L, lua_WarnFunction f, void *ud);
```

Sets the warning function to be used by Lua to emit warnings (see [`lua_WarnFunction`](/docs/lua/v5-5-1/en/03-c-api/16-functions-and-types-u-y/#lua_WarnFunction)). The `ud` parameter sets the value `ud` passed to the warning function.

---

## <a id="lua_State"></a>`lua_State`

```c
typedef struct lua_State lua_State;
```

An opaque structure that points to a thread and indirectly (through the thread) to the whole state of a Lua interpreter. The Lua library is fully reentrant: it has no global variables. All information about a state is accessible through this structure.

A pointer to this structure must be passed as the first argument to every function in the library, except to [`lua_newstate`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_newstate), which creates a Lua state from scratch.

---

## <a id="lua_status"></a>`lua_status`

[-0, +0, –]

```c
int lua_status (lua_State *L);
```

Returns the status of the thread `L`.

The status can be [`LUA_OK`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_OK) for a normal thread, an error code if the thread finished the execution of a [`lua_resume`](/docs/lua/v5-5-1/en/03-c-api/13-functions-and-types-raw-resume/#lua_resume) with an error, or [`LUA_YIELD`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_YIELD) if the thread is suspended.

You can call functions only in threads with status [`LUA_OK`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_OK). You can resume threads with status [`LUA_OK`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_OK) (to start a new coroutine) or [`LUA_YIELD`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_YIELD) (to resume a coroutine).

---

## <a id="lua_stringtonumber"></a>`lua_stringtonumber`

[-0, +(0|1), –]

```c
size_t lua_stringtonumber (lua_State *L, const char *s);
```

Converts the zero-terminated string `s` to a number, pushes that number into the stack, and returns the total size of the string, that is, its length plus one. The conversion can result in an integer or a float, according to the lexical conventions of Lua (see [§3.1](/docs/lua/v5-5-1/en/02-language/07-lexical-conventions/#3.1)). The string may have leading and trailing whitespaces and a sign. If the string is not a valid numeral, returns 0 and pushes nothing. (Note that the result can be used as a boolean, true if the conversion succeeds.)

---
