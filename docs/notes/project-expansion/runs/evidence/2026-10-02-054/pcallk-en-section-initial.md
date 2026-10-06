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
