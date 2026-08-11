---
title: "C APIの関数と型：insert–load"
description: "lua_insertからlua_loadまでのアルファベット順C APIリファレンス"
licenseSource: "lua-5.5.1"
---

# C APIの関数と型：insert–load

## <a id="lua_insert"></a>`lua_insert`

[-1, +1, –]

```c
void lua_insert (lua_State *L, int index);
```

最上部の要素を指定された有効なインデックスへ移動し、そのインデックスより上の要素を上へずらして領域を空けます。疑似インデックスは実際のスタック位置ではないため、この関数を疑似インデックスで呼び出すことはできません。

---

## <a id="lua_Integer"></a>`lua_Integer`

```c
typedef ... lua_Integer;
```

Luaにおける整数の型です。

デフォルトで、この型は`long long`（通常は64ビットの2の補数整数）ですが、`long`または`int`（通常は32ビットの2の補数整数）へ変更できます。（`luaconf.h`の`LUA_INT_TYPE`を参照。）

Luaは、この型に収まる最小値と最大値を持つ定数<a id="pdf-LUA_MININTEGER"></a>`LUA_MININTEGER`と<a id="pdf-LUA_MAXINTEGER"></a>`LUA_MAXINTEGER`も定義します。

---

## <a id="lua_isboolean"></a>`lua_isboolean`

[-0, +0, –]

```c
int lua_isboolean (lua_State *L, int index);
```

指定されたインデックスの値がブール値なら1を、それ以外なら0を返します。

---

## <a id="lua_iscfunction"></a>`lua_iscfunction`

[-0, +0, –]

```c
int lua_iscfunction (lua_State *L, int index);
```

指定されたインデックスの値がC関数なら1を、それ以外なら0を返します。

---

## <a id="lua_isfunction"></a>`lua_isfunction`

[-0, +0, –]

```c
int lua_isfunction (lua_State *L, int index);
```

指定されたインデックスの値が関数（CまたはLua）なら1を、それ以外なら0を返します。

---

## <a id="lua_isinteger"></a>`lua_isinteger`

[-0, +0, –]

```c
int lua_isinteger (lua_State *L, int index);
```

指定されたインデックスの値が整数（つまり、値が数値で、整数として表現されている）なら1を、それ以外なら0を返します。

---

## <a id="lua_islightuserdata"></a>`lua_islightuserdata`

[-0, +0, –]

```c
int lua_islightuserdata (lua_State *L, int index);
```

指定されたインデックスの値がライトユーザーデータなら1を、それ以外なら0を返します。

---

## <a id="lua_isnil"></a>`lua_isnil`

[-0, +0, –]

```c
int lua_isnil (lua_State *L, int index);
```

指定されたインデックスの値が**nil**なら1を、それ以外なら0を返します。

---

## <a id="lua_isnone"></a>`lua_isnone`

[-0, +0, –]

```c
int lua_isnone (lua_State *L, int index);
```

指定されたインデックスが有効でなければ1を、それ以外なら0を返します。

---

## <a id="lua_isnoneornil"></a>`lua_isnoneornil`

[-0, +0, –]

```c
int lua_isnoneornil (lua_State *L, int index);
```

指定されたインデックスが有効でないか、このインデックスの値が**nil**なら1を、それ以外なら0を返します。

---

## <a id="lua_isnumber"></a>`lua_isnumber`

[-0, +0, –]

```c
int lua_isnumber (lua_State *L, int index);
```

指定されたインデックスの値が数値、または数値へ変換できる文字列なら1を、それ以外なら0を返します。

---

## <a id="lua_isstring"></a>`lua_isstring`

[-0, +0, –]

```c
int lua_isstring (lua_State *L, int index);
```

指定されたインデックスの値が文字列、または数値（常に文字列へ変換可能）なら1を、それ以外なら0を返します。

---

## <a id="lua_istable"></a>`lua_istable`

[-0, +0, –]

```c
int lua_istable (lua_State *L, int index);
```

指定されたインデックスの値がテーブルなら1を、それ以外なら0を返します。

---

## <a id="lua_isthread"></a>`lua_isthread`

[-0, +0, –]

```c
int lua_isthread (lua_State *L, int index);
```

指定されたインデックスの値がスレッドなら1を、それ以外なら0を返します。

---

## <a id="lua_isuserdata"></a>`lua_isuserdata`

[-0, +0, –]

```c
int lua_isuserdata (lua_State *L, int index);
```

指定されたインデックスの値がユーザーデータ（フルまたはライト）なら1を、それ以外なら0を返します。

---

## <a id="lua_isyieldable"></a>`lua_isyieldable`

[-0, +0, –]

```c
int lua_isyieldable (lua_State *L);
```

指定されたコルーチンがyield可能なら1を、それ以外なら0を返します。

---

## <a id="lua_KContext"></a>`lua_KContext`

```c
typedef ... lua_KContext;
```

継続関数のコンテキスト用の型です。数値型でなければなりません。`intptr_t`を利用できる場合、この型はポインターも保存できるように`intptr_t`として定義されます。それ以外の場合は`ptrdiff_t`として定義されます。

---

## <a id="lua_KFunction"></a>`lua_KFunction`

```c
typedef int (*lua_KFunction) (lua_State *L, int status, lua_KContext ctx);
```

継続関数の型です（[§4.5](/docs/lua/v5-5-1/ja/03-c-api/06-handling-yields-in-c/#4.5)を参照）。

---

## <a id="lua_len"></a>`lua_len`

[-0, +1, *e*]

```c
void lua_len (lua_State *L, int index);
```

指定されたインデックスの値の長さを返します。Luaの'`#`'演算子と等価で（[§3.4.7](/docs/lua/v5-5-1/ja/02-language/10-expressions/#3.4.7)を参照）、「length」イベントのメタメソッドを発動する可能性があります（[§2.4](/docs/lua/v5-5-1/ja/02-language/04-metatables-and-metamethods/#2.4)を参照）。結果をスタックへプッシュします。

---

## <a id="lua_load"></a>`lua_load`

[-0, +1, –]

```c
int lua_load (lua_State *L,
              lua_Reader reader,
              void *data,
              const char *chunkname,
              const char *mode);
```

Luaチャンクを実行せずに読み込みます。エラーがなければ、`lua_load`はコンパイル済みチャンクをLua関数としてスタック最上部へプッシュします。それ以外の場合はエラーメッセージをプッシュします。

関数`lua_load`は、ユーザーが指定した`reader`関数を使ってチャンクを読み込みます（[`lua_Reader`](/docs/lua/v5-5-1/ja/03-c-api/13-functions-and-types-raw-resume/#lua_Reader)を参照）。引数`data`はreader関数へ渡される不透明な値です。

引数`chunkname`はチャンクへ名前を付けます。この名前はエラーメッセージとデバッグ情報で使われます（[§4.7](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#4.7)を参照）。

`lua_load`はチャンクがテキストかバイナリかを自動的に検出し、それに従って読み込みます（プログラム`luac`を参照）。文字列`mode`は関数[`load`](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#pdf-load)と同様に動作し、`NULL`値が文字列"`bt`"と等価である点が加わります。さらに、'`b`'の代わりに、バイナリダンプを持つ*固定バッファー*を意味する'`B`'を指定できます。

固定バッファーとは、reader関数が返したアドレスが、チャンクによって作成されたすべてのものが収集されるまでチャンクを含み続けることを意味します。そのため、Luaはチャンクの一部を内部構造へコピーせずに済みます。（一般に、たとえばROM内のチャンクでは、固定バッファーはプログラム終了まで内容を保持します。）さらに、固定バッファーではreader関数が最初の読み取りでチャンク全体を返すべきです。（例として、[`luaL_loadbufferx`](/docs/lua/v5-5-1/ja/04-auxiliary-library/04-functions-and-types-do-load/#luaL_loadbufferx)はそう動作するため、固定バッファーの読み込みに使えます。）

関数[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)はreader関数の呼び出しを通じてLuaスタックを完全に保持します。ただし、最初の呼び出し前に内部使用の値をいくつかプッシュする場合があり、最後の呼び出し後にスタックサイズを元のサイズに1（プッシュした結果用）を加えたサイズへ戻します。

`lua_load`は[`LUA_OK`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)、[`LUA_ERRSYNTAX`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_ERRSYNTAX)、または[`LUA_ERRMEM`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_ERRMEM)を返せます。read関数が発生させたエラーに対応するほかの値を返す場合もあります（[§4.4.1](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#4.4.1)を参照）。

結果の関数に上位値がある場合、最初の上位値はレジストリ内のインデックス`LUA_RIDX_GLOBALS`に保存されたグローバル環境の値へ設定されます（[§4.3](/docs/lua/v5-5-1/ja/03-c-api/04-registry/#4.3)を参照）。メインチャンクを読み込むとき、この上位値は変数`_ENV`になります（[§2.2](/docs/lua/v5-5-1/ja/02-language/02-scopes-variables-and-environments/#2.2)を参照）。そのほかの上位値は**nil**で初期化されます。

---
