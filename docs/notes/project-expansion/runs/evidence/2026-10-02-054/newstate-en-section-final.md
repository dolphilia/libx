## <a id="luaL_newstate"></a>`luaL_newstate`

[-0, +0, –]

```c
lua_State *luaL_newstate (void);
```

Creates a new Lua state. It calls [`lua_newstate`](/docs/lua/v5-5-1/en/03-c-api/11-functions-and-types-n-pcall/#lua_newstate) with [`luaL_alloc`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_alloc) as the allocator function and the result of `luaL_makeseed(NULL)` as the seed, and then sets a warning function and a panic function (see [§4.4](/docs/lua/v5-5-1/en/03-c-api/05-error-handling-in-c/#4.4)) that print messages to the standard error output.

Returns the new state, or `NULL` if there is a memory allocation error.
