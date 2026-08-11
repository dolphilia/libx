---
title: "C API functions and types: newstate–pcallk"
description: "Alphabetical C API reference from lua_newstate through lua_pcallk"
licenseSource: "lua-5.5.1"
---

# C API functions and types: newstate–pcallk

## <a id="lua_newstate"></a>`lua_newstate`

[-0, +0, –]

```c
lua_State *lua_newstate (lua_Alloc f, void *ud,
                                   unsigned int seed);
```

Creates a new independent state and returns its main thread. Returns `NULL` if it cannot create the state (due to lack of memory). The argument `f` is the allocator function; Lua will do all memory allocation for this state through this function (see [`lua_Alloc`](/docs/lua/v5-5-1/en/03-c-api/07-functions-and-types-a-c/#lua_Alloc)). The second argument, `ud`, is an opaque pointer that Lua passes to the allocator in every call. The third argument, `seed`, is a seed for the hashing of strings.

---

## <a id="lua_newtable"></a>`lua_newtable`

[-0, +1, *m*]

```c
void lua_newtable (lua_State *L);
```

Creates a new empty table and pushes it onto the stack. It is equivalent to `lua_createtable(L,0,0)`.

---

## <a id="lua_newthread"></a>`lua_newthread`

[-0, +1, *m*]

```c
lua_State *lua_newthread (lua_State *L);
```

Creates a new thread, pushes it on the stack, and returns a pointer to a [`lua_State`](/docs/lua/v5-5-1/en/03-c-api/14-functions-and-types-set-status/#lua_State) that represents this new thread. The new thread returned by this function shares with the original thread its global environment, but has an independent execution stack.

Threads are subject to garbage collection, like any Lua object.

---

## <a id="lua_newuserdatauv"></a>`lua_newuserdatauv`

[-0, +1, *m*]

```c
void *lua_newuserdatauv (lua_State *L, size_t size, int nuvalue);
```

This function creates and pushes on the stack a new full userdata, with `nuvalue` associated Lua values, called `user values`, plus an associated block of raw memory with `size` bytes.

The user values can be set and read with the functions [`lua_setiuservalue`](/docs/lua/v5-5-1/en/03-c-api/14-functions-and-types-set-status/#lua_setiuservalue) and [`lua_getiuservalue`](/docs/lua/v5-5-1/en/03-c-api/09-functions-and-types-get/#lua_getiuservalue). The block of memory is suitably aligned for any ISO C object. (See macro `LUAI_MAXALIGN` in file `luaconf.h` for other alignment requirements.)

The function returns the address of the block of memory. Lua ensures that this address is valid as long as the corresponding userdata is alive (see [§2.5](/docs/lua/v5-5-1/en/02-language/05-garbage-collection/#2.5)). Moreover, if the userdata is marked for finalization (see [§2.5.3](/docs/lua/v5-5-1/en/02-language/05-garbage-collection/#2.5.3)), its address is valid at least until the call to its finalizer.

---

## <a id="lua_next"></a>`lua_next`

[-1, +(2|0), *v*]

```c
int lua_next (lua_State *L, int index);
```

Pops a key from the stack, and pushes a key–value pair from the table at the given index, the "next" pair after the given key. If there are no more elements in the table, then [`lua_next`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_next) returns 0 and pushes nothing.

A typical table traversal looks like this:

```c
     /* table is in the stack at index 't' */
     lua_pushnil(L);  /* first key */
     while (lua_next(L, t) != 0) {
       /* uses 'key' (at index -2) and 'value' (at index -1) */
       printf("%s - %s\n",
              lua_typename(L, lua_type(L, -2)),
              lua_typename(L, lua_type(L, -1)));
       /* removes 'value'; keeps 'key' for next iteration */
       lua_pop(L, 1);
     }
```

While traversing a table, avoid calling [`lua_tolstring`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_tolstring) directly on a key, unless you know that the key is actually a string. Recall that [`lua_tolstring`](/docs/lua/v5-5-1/en/03-c-api/15-functions-and-types-to-type/#lua_tolstring) may change the value at the given index; this confuses the next call to [`lua_next`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_next).

This function may raise an error if the given key is neither **nil** nor present in the table.

See function [`next`](/docs/lua/v5-5-1/en/05-standard-library/03-basic-functions/#pdf-next) for more details about the traversal.

---

## <a id="lua_Number"></a>`lua_Number`

```c
typedef ... lua_Number;
```

The type of floats in Lua.

By default this type is double, but that can be changed to a single float or a long double. (See `LUA_FLOAT_TYPE` in `luaconf.h`.)

---

## <a id="lua_numbertointeger"></a>`lua_numbertointeger`

```c
int lua_numbertointeger (lua_Number n, lua_Integer *p);
```

Tries to convert a Lua float to a Lua integer; the float `n` must have an integral value. If that value is within the range of Lua integers, it is converted to an integer and assigned to `*p`. The macro results in a boolean indicating whether the conversion was successful. (Note that this range test can be tricky to do correctly without this macro, due to rounding.)

This macro may evaluate its arguments more than once.

---

## <a id="lua_numbertocstring"></a>`lua_numbertocstring`

[-0, +0, –]

```c
unsigned lua_numbertocstring (lua_State *L, int idx,
                                        char *buff);
```

Converts the number at acceptable index `idx` to a string and puts the result in `buff`. The buffer must have a size of at least <a id="pdf-LUA_N2SBUFFSZ"></a>`LUA_N2SBUFFSZ` bytes. The conversion follows a non-specified format (see [§3.4.3](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.3)). The function returns the number of bytes written to the buffer (including the final zero), or zero if the value at `idx` is not a number.

---

## <a id="lua_pcall"></a>`lua_pcall`

[-(nargs + 1), +(nresults|1), –]

```c
int lua_pcall (lua_State *L, int nargs, int nresults, int msgh);
```

Calls a function (or a callable object) in protected mode.

Both `nargs` and `nresults` have the same meaning as in [`lua_call`](/docs/lua/v5-5-1/en/03-c-api/07-functions-and-types-a-c/#lua_call). If there are no errors during the call, [`lua_pcall`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_pcall) behaves exactly like [`lua_call`](/docs/lua/v5-5-1/en/03-c-api/07-functions-and-types-a-c/#lua_call). However, if there is any error, [`lua_pcall`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_pcall) catches it, pushes a single value on the stack (the error object), and returns an error code. Like [`lua_call`](/docs/lua/v5-5-1/en/03-c-api/07-functions-and-types-a-c/#lua_call), [`lua_pcall`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_pcall) always removes the function and its arguments from the stack.

If `msgh` is 0, then the error object returned on the stack is exactly the original error object. Otherwise, `msgh` is the stack index of a *message handler*. (This index cannot be a pseudo-index.) In case of runtime errors, this handler will be called with the error object and its return value will be the object returned on the stack by [`lua_pcall`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_pcall).

Typically, the message handler is used to add more debug information to the error object, such as a stack traceback. Such information cannot be gathered after the return of [`lua_pcall`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_pcall), since by then the stack has unwound.

The [`lua_pcall`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_pcall) function returns one of the following status codes: [`LUA_OK`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_OK), [`LUA_ERRRUN`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_ERRRUN), [`LUA_ERRMEM`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_ERRMEM), or [`LUA_ERRERR`](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#pdf-LUA_ERRERR).

---

## <a id="lua_pcallk"></a>`lua_pcallk`

[-(nargs + 1), +(nresults|1), –]

```c
int lua_pcallk (lua_State *L,
                int nargs,
                int nresults,
                int msgh,
                lua_KContext ctx,
                lua_KFunction k);
```

This function behaves exactly like [`lua_pcall`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_pcall), except that it allows the called function to yield (see [§4.5](/docs/lua/v5-5-1/en/03-c-api/06-handling-yields-in-c/#4.5)).

---
