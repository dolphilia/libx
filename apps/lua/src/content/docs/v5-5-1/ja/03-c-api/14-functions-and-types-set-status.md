---
title: "C APIの関数と型：setallocf–stringtonumber"
description: "setterとステータス操作に関するアルファベット順C APIリファレンス"
licenseSource: "lua-5.5.1"
---

# C APIの関数と型：setallocf–stringtonumber

## <a id="lua_setallocf"></a>`lua_setallocf`

[-0, +0, –]

```c
void lua_setallocf (lua_State *L, lua_Alloc f, void *ud);
```

指定されたステートのアロケーター関数を、ユーザーデータ`ud`を持つ`f`へ変更します。

---

## <a id="lua_setfield"></a>`lua_setfield`

[-1, +0, *e*]

```c
void lua_setfield (lua_State *L, int index, const char *k);
```

指定されたインデックスの値を`t`、スタック最上部の値を`v`として、`t[k] = v`と等価な操作を行います。

この関数はスタックから値をポップします。Luaと同様に、この関数は「newindex」イベントのメタメソッドを発動する可能性があります（[§2.4](/docs/lua/v5-5-1/ja/02-language/04-metatables-and-metamethods/#2.4)を参照）。

---

## <a id="lua_setglobal"></a>`lua_setglobal`

[-1, +0, *e*]

```c
void lua_setglobal (lua_State *L, const char *name);
```

スタックから値をポップし、グローバル`name`の新しい値として設定します。

---

## <a id="lua_seti"></a>`lua_seti`

[-1, +0, *e*]

```c
void lua_seti (lua_State *L, int index, lua_Integer n);
```

指定されたインデックスの値を`t`、スタック最上部の値を`v`として、`t[n] = v`と等価な操作を行います。

この関数はスタックから値をポップします。Luaと同様に、この関数は「newindex」イベントのメタメソッドを発動する可能性があります（[§2.4](/docs/lua/v5-5-1/ja/02-language/04-metatables-and-metamethods/#2.4)を参照）。

---

## <a id="lua_setiuservalue"></a>`lua_setiuservalue`

[-1, +0, –]

```c
int lua_setiuservalue (lua_State *L, int index, int n);
```

スタックから値をポップし、指定されたインデックスのフルユーザーデータに関連付けられた新しい`n`番目のユーザー値として設定します。ユーザーデータがその値を持たない場合は0を返します。

---

## <a id="lua_setmetatable"></a>`lua_setmetatable`

[-1, +0, –]

```c
int lua_setmetatable (lua_State *L, int index);
```

スタックからテーブルまたは**nil**をポップし、その値を指定されたインデックスの値の新しいメタテーブルとして設定します。（**nil**はメタテーブルなしを意味します。）

（歴史的な理由から、この関数は`int`を返します。現在は常に1です。）

---

## <a id="lua_settable"></a>`lua_settable`

[-2, +0, *e*]

```c
void lua_settable (lua_State *L, int index);
```

指定されたインデックスの値を`t`、スタック最上部の値を`v`、最上部のすぐ下の値を`k`として、`t[k] = v`と等価な操作を行います。

この関数はスタックからキーと値の両方をポップします。Luaと同様に、この関数は「newindex」イベントのメタメソッドを発動する可能性があります（[§2.4](/docs/lua/v5-5-1/ja/02-language/04-metatables-and-metamethods/#2.4)を参照）。

---

## <a id="lua_settop"></a>`lua_settop`

[-?, +?, *e*]

```c
void lua_settop (lua_State *L, int index);
```

任意の許容されるスタックインデックスまたは0を受け取り、スタック最上部をこのインデックスへ設定します。新しい最上部が以前より大きい場合、新しい要素は**nil**で埋められます。`index`が0なら、すべてのスタック要素を除去します。

この関数は、クローズ対象として印を付けられたインデックスをスタックから除去するとき、任意のコードを実行する可能性があります。

---

## <a id="lua_setwarnf"></a>`lua_setwarnf`

[-0, +0, –]

```c
void lua_setwarnf (lua_State *L, lua_WarnFunction f, void *ud);
```

Luaが警告を発するために使う警告関数を設定します（[`lua_WarnFunction`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_WarnFunction)を参照）。引数`ud`は、警告関数へ渡される値`ud`を設定します。

---

## <a id="lua_State"></a>`lua_State`

```c
typedef struct lua_State lua_State;
```

スレッドを指し、間接的に（スレッドを通じて）Luaインタープリターのステート全体を指す不透明な構造です。Luaライブラリは完全に再入可能で、グローバル変数を持ちません。ステートに関するすべての情報には、この構造を通じてアクセスできます。

Luaステートを一から作成する[`lua_newstate`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_newstate)を除き、ライブラリのすべての関数へ、この構造へのポインターを第1引数として渡す必要があります。

---

## <a id="lua_status"></a>`lua_status`

[-0, +0, –]

```c
int lua_status (lua_State *L);
```

スレッド`L`のステータスを返します。

通常のスレッドではステータスは[`LUA_OK`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)です。スレッドが[`lua_resume`](/docs/lua/v5-5-1/ja/03-c-api/13-functions-and-types-raw-resume/#lua_resume)の実行をエラーで終了した場合はエラーコード、スレッドが中断されている場合は[`LUA_YIELD`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_YIELD)です。

ステータスが[`LUA_OK`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)のスレッドでのみ関数を呼び出せます。ステータスが[`LUA_OK`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)（新しいコルーチンを開始）または[`LUA_YIELD`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_YIELD)（コルーチンをresume）のスレッドをresumeできます。

---

## <a id="lua_stringtonumber"></a>`lua_stringtonumber`

[-0, +(0|1), –]

```c
size_t lua_stringtonumber (lua_State *L, const char *s);
```

ゼロ終端文字列`s`を数値へ変換し、その数値をスタックへプッシュして、文字列の総サイズ、つまり長さに1を加えた値を返します。Luaの字句規則（[§3.1](/docs/lua/v5-5-1/ja/02-language/07-lexical-conventions/#3.1)を参照）に従い、変換結果は整数または浮動小数点数になります。文字列の先頭と末尾には空白を含められ、符号も指定できます。文字列が有効な数値表記でなければ、0を返して何もプッシュしません。（結果は、変換に成功すればtrueとなるブール値として使えることに注意してください。）

---
