---
title: "C APIの関数と型：getallocf–getiuservalue"
description: "get操作に関するアルファベット順C APIリファレンス"
---

# C APIの関数と型：getallocf–getiuservalue

## <a id="lua_getallocf"></a>`lua_getallocf`

[-0, +0, –]

```c
lua_Alloc lua_getallocf (lua_State *L, void **ud);
```

指定されたステートのメモリアロケーター関数を返します。`ud`が`NULL`でなければ、メモリアロケーター関数の設定時に指定された不透明ポインターを`*ud`へ保存します。

---

## <a id="lua_getfield"></a>`lua_getfield`

[-0, +1, *e*]

```c
int lua_getfield (lua_State *L, int index, const char *k);
```

指定されたインデックスの値を`t`として、値`t[k]`をスタックへプッシュします。Luaと同様に、この関数は「index」イベントのメタメソッドを発動する可能性があります（[§2.4](/docs/lua/v5-5-1/ja/02-language/04-metatables-and-metamethods/#2.4)を参照）。

プッシュした値の型を返します。

---

## <a id="lua_getextraspace"></a>`lua_getextraspace`

[-0, +0, –]

```c
void *lua_getextraspace (lua_State *L);
```

指定されたLuaステートに関連付けられた生のメモリ領域へのポインターを返します。アプリケーションはこの領域を任意の目的に使えます。Luaが何かに使うことはありません。

新しい各スレッドでは、この領域がメインスレッドの領域のコピーで初期化されます。

デフォルトで、この領域はvoidへのポインターと同じサイズですが、この領域に異なるサイズを指定してLuaを再コンパイルできます。（`luaconf.h`の`LUA_EXTRASPACE`を参照。）

---

## <a id="lua_getglobal"></a>`lua_getglobal`

[-0, +1, *e*]

```c
int lua_getglobal (lua_State *L, const char *name);
```

グローバル`name`の値をスタックへプッシュします。その値の型を返します。

---

## <a id="lua_geti"></a>`lua_geti`

[-0, +1, *e*]

```c
int lua_geti (lua_State *L, int index, lua_Integer i);
```

指定されたインデックスの値を`t`として、値`t[i]`をスタックへプッシュします。Luaと同様に、この関数は「index」イベントのメタメソッドを発動する可能性があります（[§2.4](/docs/lua/v5-5-1/ja/02-language/04-metatables-and-metamethods/#2.4)を参照）。

プッシュした値の型を返します。

---

## <a id="lua_getmetatable"></a>`lua_getmetatable`

[-0, +(0|1), –]

```c
int lua_getmetatable (lua_State *L, int index);
```

指定されたインデックスの値がメタテーブルを持つ場合、関数はそのメタテーブルをスタックへプッシュし、1を返します。それ以外の場合、関数はスタックへ何もプッシュせず0を返します。

---

## <a id="lua_gettable"></a>`lua_gettable`

[-1, +1, *e*]

```c
int lua_gettable (lua_State *L, int index);
```

指定されたインデックスの値を`t`、スタック最上部の値を`k`として、値`t[k]`をスタックへプッシュします。

この関数はスタックからキーをポップし、その位置に結果の値をプッシュします。Luaと同様に、この関数は「index」イベントのメタメソッドを発動する可能性があります（[§2.4](/docs/lua/v5-5-1/ja/02-language/04-metatables-and-metamethods/#2.4)を参照）。

プッシュした値の型を返します。

---

## <a id="lua_gettop"></a>`lua_gettop`

[-0, +0, –]

```c
int lua_gettop (lua_State *L);
```

スタック最上部の要素のインデックスを返します。インデックスは1から始まるため、この結果はスタックの要素数と等しくなります。特に、0は空のスタックを意味します。

---

## <a id="lua_getiuservalue"></a>`lua_getiuservalue`

[-0, +1, –]

```c
int lua_getiuservalue (lua_State *L, int index, int n);
```

指定されたインデックスのフルユーザーデータに関連付けられた`n`番目のユーザー値をスタックへプッシュし、プッシュした値の型を返します。

ユーザーデータにその値がなければ、**nil**をプッシュして[`LUA_TNONE`](/docs/lua/v5-5-1/ja/03-c-api/02-stack/#pdf-LUA_TNONE)を返します。

---
