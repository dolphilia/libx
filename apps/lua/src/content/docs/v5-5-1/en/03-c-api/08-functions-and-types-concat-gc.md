---
title: "C API functions and types: concat–gc"
description: "Alphabetical C API reference from lua_concat through lua_gc"
licenseSource: "lua-5.5.1"
---

# C API functions and types: concat–gc

## <a id="lua_concat"></a>`lua_concat`

[-n, +1, *e*]

```c
void lua_concat (lua_State *L, int n);
```

Concatenates the `n` values at the top of the stack, pops them, and leaves the result on the top. If `n` is 1, the result is the single value on the stack (that is, the function does nothing); if `n` is 0, the result is the empty string. Concatenation is performed following the usual semantics of Lua (see [§3.4.6](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.6)).

---

## <a id="lua_copy"></a>`lua_copy`

[-0, +0, –]

```c
void lua_copy (lua_State *L, int fromidx, int toidx);
```

Copies the element at index `fromidx` into the valid index `toidx`, replacing the value at that position. Values at other positions are not affected.

---

## <a id="lua_createtable"></a>`lua_createtable`

[-0, +1, *m*]

```c
void lua_createtable (lua_State *L, int nseq, int nrec);
```

Creates a new empty table and pushes it onto the stack. Parameter `nseq` is a hint for how many elements the table will have as a sequence; parameter `nrec` is a hint for how many other elements the table will have. Lua may use these hints to preallocate memory for the new table. This preallocation may help performance when you know in advance how many elements the table will have. Otherwise you should use the function [`lua_newtable`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_newtable).

---

## <a id="lua_dump"></a>`lua_dump`

[-0, +0, –]

```c
int lua_dump (lua_State *L,
                        lua_Writer writer,
                        void *data,
                        int strip);
```

Dumps a function as a binary chunk. Receives a Lua function on the top of the stack and produces a binary chunk that, if loaded again, results in a function equivalent to the one dumped. As it produces parts of the chunk, [`lua_dump`](/docs/lua/v5-5-1/en/03-c-api/08-functions-and-types-concat-gc/#lua_dump) calls function `writer` (see [`lua_Writer`](/docs/lua/v5-5-1/en/03-c-api/16-functions-and-types-u-y/#lua_Writer)) with the given `data` to write them.

The function [`lua_dump`](/docs/lua/v5-5-1/en/03-c-api/08-functions-and-types-concat-gc/#lua_dump) fully preserves the Lua stack through the calls to the writer function, except that it may push some values for internal use before the first call, and it restores the stack size to its original size after the last call.

If `strip` is true, the binary representation may not include all debug information about the function, to save space.

The value returned is the error code returned by the last call to the writer; 0 means no errors.

---

## <a id="lua_error"></a>`lua_error`

[-1, +0, *v*]

```c
int lua_error (lua_State *L);
```

Raises a Lua error, using the value on the top of the stack as the error object. This function does a long jump, and therefore never returns (see [`luaL_error`](/docs/lua/v5-5-1/en/04-auxiliary-library/04-functions-and-types-do-load/#luaL_error)).

---

## <a id="lua_gc"></a>`lua_gc`

[-0, +0, –]

```c
int lua_gc (lua_State *L, int what, ...);
```

Controls the garbage collector.

This function performs several tasks, according to the value of the parameter `what`. For options that need extra arguments, they are listed after the option.

- **<a id="pdf-LUA_GCCOLLECT"></a>`LUA_GCCOLLECT`**: Performs a full garbage-collection cycle.
- **<a id="pdf-LUA_GCSTOP"></a>`LUA_GCSTOP`**: Stops the garbage collector.
- **<a id="pdf-LUA_GCRESTART"></a>`LUA_GCRESTART`**: Restarts the garbage collector.
- **<a id="pdf-LUA_GCCOUNT"></a>`LUA_GCCOUNT`**: Returns the current amount of memory (in Kbytes) in use by Lua.
- **<a id="pdf-LUA_GCCOUNTB"></a>`LUA_GCCOUNTB`**: Returns the remainder of dividing the current amount of bytes of memory in use by Lua by 1024.
- **<a id="pdf-LUA_GCSTEP"></a>`LUA_GCSTEP` (size_t n)**: Performs a step of garbage collection.
- **<a id="pdf-LUA_GCISRUNNING"></a>`LUA_GCISRUNNING`**: Returns a boolean that tells whether the collector is running (i.e., not stopped).
- **<a id="pdf-LUA_GCINC"></a>`LUA_GCINC`**: Changes the collector to incremental mode. Returns the previous mode (`LUA_GCGEN` or `LUA_GCINC`).
- **<a id="pdf-LUA_GCGEN"></a>`LUA_GCGEN`**: Changes the collector to generational mode. Returns the previous mode (`LUA_GCGEN` or `LUA_GCINC`).
- **<a id="pdf-LUA_GCPARAM"></a>`LUA_GCPARAM` (int param, int val)**: Changes and/or returns the value of a parameter of the collector. If `val` is -1, the call only returns the current value. The argument `param` must have one of the following values:
  
  - **<a id="pdf-LUA_GCPMINORMUL"></a>`LUA_GCPMINORMUL`**: The minor multiplier.
  - **<a id="pdf-LUA_GCPMAJORMINOR"></a>`LUA_GCPMAJORMINOR`**: The major-minor multiplier.
  - **<a id="pdf-LUA_GCPMINORMAJOR"></a>`LUA_GCPMINORMAJOR`**: The minor-major multiplier.
  - **<a id="pdf-LUA_GCPPAUSE"></a>`LUA_GCPPAUSE`**: The garbage-collector pause.
  - **<a id="pdf-LUA_GCPSTEPMUL"></a>`LUA_GCPSTEPMUL`**: The step multiplier.
  - **<a id="pdf-LUA_GCPSTEPSIZE"></a>`LUA_GCPSTEPSIZE`**: The step size.

For more details about these options, see [`collectgarbage`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-collectgarbage).

This function should not be called by a finalizer.

---
