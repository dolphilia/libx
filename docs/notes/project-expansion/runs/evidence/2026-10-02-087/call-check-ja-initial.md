---
title: "補助関数と型：callmeta–checkversion"
description: "引数検査とメタテーブル補助APIのリファレンス"
---

# 補助関数と型：callmeta–checkversion

## <a id="luaL_callmeta"></a>`luaL_callmeta`

[-0, +(0|1), *e*]

```c
int luaL_callmeta (lua_State *L, int obj, const char *e);
```

メタメソッドを呼び出します。

インデックス`obj`のオブジェクトがメタテーブルを持ち、そのメタテーブルにフィールド`e`がある場合、この関数はオブジェクトだけを引数としてフィールドを呼び出します。この場合、この関数はtrueを返し、呼び出しが返した値をスタックへプッシュします。メタテーブルまたはメタメソッドがなければ、スタックへ値をプッシュせずfalseを返します。

---

## <a id="luaL_checkany"></a>`luaL_checkany`

[-0, +0, *v*]

```c
void luaL_checkany (lua_State *L, int arg);
```

関数が位置`arg`に任意の型（**nil**を含む）の引数を持つかを確認します。

---

## <a id="luaL_checkinteger"></a>`luaL_checkinteger`

[-0, +0, *v*]

```c
lua_Integer luaL_checkinteger (lua_State *L, int arg);
```

関数の引数`arg`が整数である（または整数へ変換できる）かを確認し、その整数を返します。

---

## <a id="luaL_checklstring"></a>`luaL_checklstring`

[-0, +0, *v*]

```c
const char *luaL_checklstring (lua_State *L, int arg, size_t *l);
```

関数の引数`arg`が文字列であるかを確認し、その文字列を返します。`l`が`NULL`でなければ、その参照先へ文字列の長さを設定します。

この関数は結果を取得するために[`lua_tolstring`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_tolstring)を使うため、その関数のすべての変換と注意事項がここでも適用されます。

---

## <a id="luaL_checknumber"></a>`luaL_checknumber`

[-0, +0, *v*]

```c
lua_Number luaL_checknumber (lua_State *L, int arg);
```

関数の引数`arg`が数値であるかを確認し、`lua_Number`へ変換した数値を返します。

---

## <a id="luaL_checkoption"></a>`luaL_checkoption`

[-0, +0, *v*]

```c
int luaL_checkoption (lua_State *L,
                      int arg,
                      const char *def,
                      const char *const lst[]);
```

関数の引数`arg`が文字列であるかを確認し、配列`lst`（NULL終端でなければなりません）でその文字列を検索します。文字列が見つかった配列内のインデックスを返します。引数が文字列でない場合、または文字列を見つけられない場合はエラーを発生させます。

`def`が`NULL`でなければ、引数`arg`がない場合、またはこの引数が**nil**の場合に、関数は`def`をデフォルト値として使います。

これは文字列をCの列挙型へ対応付けるのに便利な関数です。（Luaライブラリでは通常、オプションの選択に数値ではなく文字列を使います。）

---

## <a id="luaL_checkstack"></a>`luaL_checkstack`

[-0, +0, *v*]

```c
void luaL_checkstack (lua_State *L, int sz, const char *msg);
```

スタックサイズを`top + sz`要素まで増やします。そのサイズまで増やせなければエラーを発生させます。`msg`はエラーメッセージへ追加するテキストです（追加テキストがなければ`NULL`）。

---

## <a id="luaL_checkstring"></a>`luaL_checkstring`

[-0, +0, *v*]

```c
const char *luaL_checkstring (lua_State *L, int arg);
```

関数の引数`arg`が文字列であるかを確認し、その文字列を返します。

この関数は結果を取得するために[`lua_tolstring`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_tolstring)を使うため、その関数のすべての変換と注意事項がここでも適用されます。

---

## <a id="luaL_checktype"></a>`luaL_checktype`

[-0, +0, *v*]

```c
void luaL_checktype (lua_State *L, int arg, int t);
```

関数の引数`arg`が型`t`を持つかを確認します。`t`における型の符号化については[`lua_type`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_type)を参照してください。

---

## <a id="luaL_checkudata"></a>`luaL_checkudata`

[-0, +0, *v*]

```c
void *luaL_checkudata (lua_State *L, int arg, const char *tname);
```

関数の引数`arg`が型`tname`のユーザーデータであるかを確認し（[`luaL_newmetatable`](/docs/lua/v5-5-1/ja/04-auxiliary-library/05-functions-and-types-make-push/#luaL_newmetatable)を参照）、ユーザーデータのメモリブロックのアドレスを返します（[`lua_touserdata`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_touserdata)を参照）。

---

## <a id="luaL_checkversion"></a>`luaL_checkversion`

[-0, +0, *v*]

```c
void luaL_checkversion (lua_State *L);
```

呼び出しを行うコードと、呼び出されるLuaライブラリが、同じLuaバージョンと同じ数値型を使っているかを確認します。
