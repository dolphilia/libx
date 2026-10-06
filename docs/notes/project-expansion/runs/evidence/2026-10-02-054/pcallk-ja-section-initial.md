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

この関数は、呼び出された関数がyieldすることを許可する点（[§4.5](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcall)を参照）を除き、[`lua_pcall`](/docs/lua/v5-5-1/ja/03-c-api/06-handling-yields-in-c/#4.5)とまったく同様に動作します。
