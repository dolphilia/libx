---
title: "C API functions and types: getallocf–getiuservalue"
description: "Alphabetical C API reference for get operations"
---

# C API functions and types: getallocf–getiuservalue

## <a id="lua_getallocf"></a>`lua_getallocf`

[-0, +0, –]

```c
lua_Alloc lua_getallocf (lua_State *L, void **ud);
```

Returns the memory-allocator function of a given state. If `ud` is not `NULL`, Lua stores in `*ud` the opaque pointer given when the memory-allocator function was set.

---

## <a id="lua_getfield"></a>`lua_getfield`

[-0, +1, *e*]

```c
int lua_getfield (lua_State *L, int index, const char *k);
```

Pushes onto the stack the value `t[k]`, where `t` is the value at the given index. As in Lua, this function may trigger a metamethod for the "index" event (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)).

Returns the type of the pushed value.

---

## <a id="lua_getextraspace"></a>`lua_getextraspace`

[-0, +0, –]

```c
void *lua_getextraspace (lua_State *L);
```

Returns a pointer to a raw memory area associated with the given Lua state. The application can use this area for any purpose; Lua does not use it for anything.

Each new thread has this area initialized with a copy of the area of the main thread.

By default, this area has the size of a pointer to void, but you can recompile Lua with a different size for this area. (See `LUA_EXTRASPACE` in `luaconf.h`.)

---

## <a id="lua_getglobal"></a>`lua_getglobal`

[-0, +1, *e*]

```c
int lua_getglobal (lua_State *L, const char *name);
```

Pushes onto the stack the value of the global `name`. Returns the type of that value.

---

## <a id="lua_geti"></a>`lua_geti`

[-0, +1, *e*]

```c
int lua_geti (lua_State *L, int index, lua_Integer i);
```

Pushes onto the stack the value `t[i]`, where `t` is the value at the given index. As in Lua, this function may trigger a metamethod for the "index" event (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)).

Returns the type of the pushed value.

---

## <a id="lua_getmetatable"></a>`lua_getmetatable`

[-0, +(0|1), –]

```c
int lua_getmetatable (lua_State *L, int index);
```

If the value at the given index has a metatable, the function pushes that metatable onto the stack and returns 1. Otherwise, the function returns 0 and pushes nothing on the stack.

---

## <a id="lua_gettable"></a>`lua_gettable`

[-1, +1, *e*]

```c
int lua_gettable (lua_State *L, int index);
```

Pushes onto the stack the value `t[k]`, where `t` is the value at the given index and `k` is the value on the top of the stack.

This function pops the key from the stack, pushing the resulting value in its place. As in Lua, this function may trigger a metamethod for the "index" event (see [§2.4](/docs/lua/v5-5-1/en/02-language/04-metatables-and-metamethods/#2.4)).

Returns the type of the pushed value.

---

## <a id="lua_gettop"></a>`lua_gettop`

[-0, +0, –]

```c
int lua_gettop (lua_State *L);
```

Returns the index of the top element in the stack. Because indices start at 1, this result is equal to the number of elements in the stack; in particular, 0 means an empty stack.

---

## <a id="lua_getiuservalue"></a>`lua_getiuservalue`

[-0, +1, –]

```c
int lua_getiuservalue (lua_State *L, int index, int n);
```

Pushes onto the stack the `n`-th user value associated with the full userdata at the given index and returns the type of the pushed value.

If the userdata does not have that value, pushes **nil** and returns [`LUA_TNONE`](/docs/lua/v5-5-1/en/03-c-api/02-stack/#pdf-LUA_TNONE).

---
