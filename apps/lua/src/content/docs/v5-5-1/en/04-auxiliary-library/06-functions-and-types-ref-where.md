---
title: "Auxiliary functions and types: ref–where"
description: "Reference, registration, stream and diagnostic auxiliary API reference"
licenseSource: "lua-5.5.1"
---

# Auxiliary functions and types: ref–where

## <a id="luaL_ref"></a>`luaL_ref`

[-1, +0, *m*]

```c
int luaL_ref (lua_State *L, int t);
```

Creates and returns a *reference*, in the table at index `t`, for the object on the top of the stack (and pops the object).

The reference system uses the integer keys of the table. A reference is a unique integer key; [`luaL_ref`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref) ensures the uniqueness of the keys it returns. The entry 1 is reserved for internal use. Before the first use of [`luaL_ref`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref), the integer keys of the table should form a proper sequence (no holes), and the value at entry 1 should be false: **nil** if the sequence is empty, **false** otherwise. You should not manually set integer keys in the table after the first use of [`luaL_ref`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref).

You can retrieve an object referred by the reference `r` by calling `lua_rawgeti(L,t,r)` or `lua_geti(L,t,r)`. The function [`luaL_unref`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_unref) frees a reference.

If the object on the top of the stack is **nil**, [`luaL_ref`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref) returns the constant <a id="pdf-LUA_REFNIL"></a>`LUA_REFNIL`. The constant <a id="pdf-LUA_NOREF"></a>`LUA_NOREF` is guaranteed to be different from any reference returned by [`luaL_ref`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref).

---

## <a id="luaL_Reg"></a>`luaL_Reg`

```c
typedef struct luaL_Reg {
  const char *name;
  lua_CFunction func;
} luaL_Reg;
```

Type for arrays of functions to be registered by [`luaL_setfuncs`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_setfuncs). `name` is the function name and `func` is a pointer to the function. Any array of [`luaL_Reg`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_Reg) must end with a sentinel entry in which both `name` and `func` are `NULL`.

---

## <a id="luaL_requiref"></a>`luaL_requiref`

[-0, +1, *e*]

```c
void luaL_requiref (lua_State *L, const char *modname,
                    lua_CFunction openf, int glb);
```

If `package.loaded[modname]` is not true, calls the function `openf` with the string `modname` as an argument and sets the call result to `package.loaded[modname]`, as if that function has been called through [`require`](/docs/lua/v5-5-1/en/05-standard-library/05-modules/#pdf-require).

If `glb` is true, also stores the module into the global variable `modname`.

Leaves a copy of the module on the stack.

---

## <a id="luaL_setfuncs"></a>`luaL_setfuncs`

[-nup, +0, *m*]

```c
void luaL_setfuncs (lua_State *L, const luaL_Reg *l, int nup);
```

Registers all functions in the array `l` (see [`luaL_Reg`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_Reg)) into the table on the top of the stack (below optional upvalues, see next).

When `nup` is not zero, all functions are created with `nup` upvalues, initialized with copies of the `nup` values previously pushed on the stack on top of the library table. These values are popped from the stack after the registration.

A function with a `NULL` value represents a placeholder, which is filled with **false**.

---

## <a id="luaL_setmetatable"></a>`luaL_setmetatable`

[-0, +0, –]

```c
void luaL_setmetatable (lua_State *L, const char *tname);
```

Sets the metatable of the object on the top of the stack as the metatable associated with name `tname` in the registry (see [`luaL_newmetatable`](/docs/lua/v5-5-1/en/04-auxiliary-library/05-functions-and-types-make-push/#luaL_newmetatable)).

---

## <a id="luaL_alloc"></a>`luaL_alloc`

```c
void *luaL_alloc (void *ud, void *ptr, size_t osize, size_t nsize);
```

A standard allocator function for Lua (see [`lua_Alloc`](/docs/lua/v5-5-1/en/03-c-api/07-functions-and-types-a-c/#lua_Alloc)), built on top of the C functions `realloc` and `free`.

---

## <a id="luaL_Stream"></a>`luaL_Stream`

```c
typedef struct luaL_Stream {
  FILE *f;
  lua_CFunction closef;
} luaL_Stream;
```

The standard representation for file handles used by the standard I/O library.

A file handle is implemented as a full userdata, with a metatable called `LUA_FILEHANDLE` (where `LUA_FILEHANDLE` is a macro with the actual metatable's name). The metatable is created by the I/O library (see [`luaL_newmetatable`](/docs/lua/v5-5-1/en/04-auxiliary-library/05-functions-and-types-make-push/#luaL_newmetatable)).

This userdata must start with the structure `luaL_Stream`; it can contain other data after this initial structure. The field `f` points to the corresponding C stream, or it is `NULL` to indicate an incompletely created handle. The field `closef` points to a Lua function that will be called to close the stream when the handle is closed or collected; this function receives the file handle as its sole argument and must return either a true value, in case of success, or a false value plus an error message, in case of error. Once Lua calls this field, it changes the field value to `NULL` to signal that the handle is closed.

---

## <a id="luaL_testudata"></a>`luaL_testudata`

[-0, +0, *m*]

```c
void *luaL_testudata (lua_State *L, int arg, const char *tname);
```

This function works like [`luaL_checkudata`](/docs/lua/v5-5-1/en/04-auxiliary-library/03-functions-and-types-call-check/#luaL_checkudata), except that, when the test fails, it returns `NULL` instead of raising an error.

---

## <a id="luaL_tolstring"></a>`luaL_tolstring`

[-0, +1, *e*]

```c
const char *luaL_tolstring (lua_State *L, int idx, size_t *len);
```

Converts any Lua value at the given index to a C string in a reasonable format. The resulting string is pushed onto the stack and also returned by the function (see [§4.1.3](/docs/lua/v5-5-1/en/03-c-api/02-stack/#4.1.3)). If `len` is not `NULL`, the function also sets `*len` with the string length.

If the value has a metatable with a `__tostring` field, then `luaL_tolstring` calls the corresponding metamethod with the value as argument, and uses the result of the call as its result.

---

## <a id="luaL_traceback"></a>`luaL_traceback`

[-0, +1, *m*]

```c
void luaL_traceback (lua_State *L, lua_State *L1, const char *msg,
                     int level);
```

Creates and pushes a traceback of the stack `L1`. If `msg` is not `NULL`, it is appended at the beginning of the traceback. The `level` parameter tells at which level to start the traceback.

---

## <a id="luaL_typeerror"></a>`luaL_typeerror`

[-0, +0, *v*]

```c
int luaL_typeerror (lua_State *L, int arg, const char *tname);
```

Raises a type error for the argument `arg` of the C function that called it, using a standard message; `tname` is a "name" for the expected type. This function never returns.

---

## <a id="luaL_typename"></a>`luaL_typename`

[-0, +0, –]

```c
const char *luaL_typename (lua_State *L, int index);
```

Returns the name of the type of the value at the given index.

---

## <a id="luaL_unref"></a>`luaL_unref`

[-0, +0, –]

```c
void luaL_unref (lua_State *L, int t, int ref);
```

Releases a reference (see [`luaL_ref`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref)). The integer `ref` must be either [`LUA_NOREF`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#pdf-LUA_NOREF), [`LUA_REFNIL`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#pdf-LUA_REFNIL), or a reference previously returned by [`luaL_ref`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref) and not already released. If `ref` is either [`LUA_NOREF`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#pdf-LUA_NOREF) or [`LUA_REFNIL`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#pdf-LUA_REFNIL) this function does nothing. Otherwise, the entry is removed from the table, so that the referred object can be collected and the reference `ref` can be used again by [`luaL_ref`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref).

---

## <a id="luaL_where"></a>`luaL_where`

[-0, +1, *m*]

```c
void luaL_where (lua_State *L, int lvl);
```

Pushes onto the stack a string identifying the current position of the control at level `lvl` in the call stack. Typically this string has the following format:

```c
     chunkname:currentline:
```

Level 0 is the running function, level 1 is the function that called the running function, etc.

This function is used to build a prefix for error messages.
