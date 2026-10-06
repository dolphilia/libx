## <a id="luaL_newstate"></a>`luaL_newstate`

[-0, +0, –]

```c
lua_State *luaL_newstate (void);
```

新しいLuaステートを作成します。アロケーター関数を[`luaL_alloc`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_newstate)、シードを`luaL_makeseed(NULL)`の結果として[`lua_newstate`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_alloc)を呼び出し、その後、標準エラー出力へメッセージを表示する警告関数とパニック関数（[§4.4](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#4.4)を参照）を設定します。

新しいステートを返し、メモリ割り当てエラーの場合は`NULL`を返します。
