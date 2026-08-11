---
title: "Cでのyield処理"
description: "継続関数とyieldするC呼び出し"
licenseSource: "lua-5.5.1"
---

# 4.5 – <a id="4.5"></a>Cでのyield処理

内部的に、LuaはコルーチンをyieldするためにCの`longjmp`機能を使います。そのため、C関数`foo`がAPI関数を呼び出し、そのAPI関数がyieldすると（直接、またはyieldする別の関数を呼び出すことで間接的に）、`longjmp`がCスタックからそのフレームを除去するため、Luaは`foo`へ戻れなくなります。

この種の問題を避けるため、LuaはAPI呼び出しをまたいでyieldしようとするとエラーを発生させます。ただし、[`lua_yieldk`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yieldk)、[`lua_callk`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_callk)、[`lua_pcallk`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcallk)の3関数は例外です。これらの関数はすべて、yield後に実行を継続する*継続関数*を（`k`という名前の引数として）受け取ります。

継続を説明するため、いくつかの用語を定めます。Luaから呼び出されるC関数があり、これを*元の関数*と呼びます。この元の関数は、次にC APIの上記3関数の1つを呼び出します。これを*呼び出された関数*と呼び、これは現在のスレッドをyieldします。呼び出された関数が[`lua_yieldk`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yieldk)である場合、または呼び出された関数が[`lua_callk`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_callk)か[`lua_pcallk`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcallk)で、それらが呼び出した関数がyieldする場合に、この状況が起こります。

実行中のスレッドが、呼び出された関数の実行中にyieldしたとします。スレッドをresumeすると、最終的には呼び出された関数の実行を完了します。しかし、yieldによってCスタック内のフレームが破棄されたため、呼び出された関数は元の関数へ戻れません。代わりに、Luaは呼び出された関数への引数として指定された*継続関数*を呼び出します。その名前が示すとおり、継続関数は元の関数の処理を継続する必要があります。

例として、次の関数を考えます。

```c
     int original_function (lua_State *L) {
       ...     /* code 1 */
       status = lua_pcall(L, n, m, h);  /* calls Lua */
       ...     /* code 2 */
     }
```

ここで、[`lua_pcall`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcall)が実行するLuaコードにyieldを許可したいとします。まず、関数を次のように書き換えられます。

```c
     int k (lua_State *L, int status, lua_KContext ctx) {
       ...  /* code 2 */
     }
     
     int original_function (lua_State *L) {
       ...     /* code 1 */
       return k(L, lua_pcall(L, n, m, h), ctx);
     }
```

上のコードで、新しい関数`k`は*継続関数*（型[`lua_KFunction`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_KFunction)）です。元の関数が[`lua_pcall`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcall)の呼び出し後に行っていたすべての処理を担当する必要があります。次に、[`lua_pcall`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcall)が実行するLuaコードが何らかの形（エラーまたはyield）で中断されたとき、`k`を呼び出す必要があることをLuaへ通知しなければなりません。そのため、[`lua_pcall`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcall)を[`lua_pcallk`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcallk)へ置き換え、次のようにコードを書き換えます。

```c
     int original_function (lua_State *L) {
       ...     /* code 1 */
       return k(L, lua_pcallk(L, n, m, h, ctx2, k), ctx1);
     }
```

外側にある継続への明示的な呼び出しに注意してください。Luaが継続を呼び出すのは、エラーの場合、またはyield後にresumeする場合など、必要なときだけです。呼び出した関数が一度もyieldせず正常に返ると、[`lua_pcallk`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcallk)（および[`lua_callk`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_callk)）も正常に返ります。（もちろん、この場合に継続を呼び出す代わりに、元の関数内で等価な処理を直接行っても構いません。）

Luaステートに加え、継続関数は2つの引数、すなわち呼び出しの最終ステータスと、元々[`lua_pcallk`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcallk)へ渡されたコンテキスト値（`ctx`）を持ちます。Luaはこのコンテキスト値を使用せず、元の関数から継続関数へ渡すだけです。[`lua_pcallk`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcallk)では、ステータスは[`lua_pcallk`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcallk)が返すはずの値と同じです。ただし、yield後に実行された場合は[`LUA_OK`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_YIELD)ではなく[`LUA_YIELD`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)になります。[`lua_yieldk`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yieldk)と[`lua_callk`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_callk)では、Luaが継続を呼び出すときのステータスは常に[`LUA_YIELD`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_YIELD)です。（これら2つの関数はエラーを処理しないため、エラー時にLuaが継続を呼び出すことはありません。）同様に、[`lua_callk`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_callk)を使う場合は、ステータスを[`LUA_OK`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)として継続関数を呼び出すべきです。（[`lua_yieldk`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yieldk)では、[`lua_yieldk`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yieldk)が通常返らないため、継続関数を直接呼び出すことに大きな意味はありません。）

Luaは継続関数を元の関数であるかのように扱います。継続関数は、呼び出された関数が返った場合と同じ状態にある、元の関数と同じLuaスタックを受け取ります。（たとえば、[`lua_callk`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_callk)の後では、関数とその引数がスタックから除去され、呼び出しの結果に置き換えられます。）また、同じ上位値を持ちます。継続関数が返すものは、元の関数からの戻り値であるかのようにLuaによって処理されます。
