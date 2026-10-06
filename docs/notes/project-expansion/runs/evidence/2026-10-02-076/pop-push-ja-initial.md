---
title: "C APIの関数と型：pop–pushvfstring"
description: "スタックへのpush操作に関するアルファベット順C APIリファレンス"
---

# C APIの関数と型：pop–pushvfstring

## <a id="lua_pop"></a>`lua_pop`

[-n, +0, *e*]

```c
void lua_pop (lua_State *L, int n);
```

スタックから`n`個の要素をポップします。[`lua_settop`](/docs/lua/v5-5-1/ja/03-c-api/14-functions-and-types-set-status/#lua_settop)を使うマクロとして実装されています。

---

## <a id="lua_pushboolean"></a>`lua_pushboolean`

[-0, +1, –]

```c
void lua_pushboolean (lua_State *L, int b);
```

値`b`を持つブール値をスタックへプッシュします。

---

## <a id="lua_pushcclosure"></a>`lua_pushcclosure`

[-n, +1, *m*]

```c
void lua_pushcclosure (lua_State *L, lua_CFunction fn, int n);
```

新しいCクロージャーをスタックへプッシュします。この関数はC関数へのポインターを受け取り、呼び出されると対応するC関数を実行する、型`function`のLua値をスタックへプッシュします。引数`n`は、この関数が持つ上位値の数を示します（[§4.2](/docs/lua/v5-5-1/ja/03-c-api/03-c-closures/#4.2)を参照）。

Luaから呼び出し可能なすべての関数は、引数を受け取り結果を返すための正しいプロトコルに従う必要があります（[`lua_CFunction`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_CFunction)を参照）。

C関数を作成するとき、上位値と呼ばれるいくつかの値を関連付けられます。関数が呼び出されるたびに、その関数はこれらの上位値へアクセスできます。この関連付けをCクロージャーと呼びます（[§4.2](/docs/lua/v5-5-1/ja/03-c-api/03-c-closures/#4.2)を参照）。Cクロージャーを作成するには、最初に上位値の初期値をスタックへプッシュする必要があります。（複数の上位値がある場合、最初の値を最初にプッシュします。）次に[`lua_pushcclosure`](/docs/lua/v5-5-1/ja/03-c-api/12-functions-and-types-pop-push/#lua_pushcclosure)を呼び出し、関数に関連付ける値の数を引数`n`で指定して、C関数を作成しスタックへプッシュします。[`lua_pushcclosure`](/docs/lua/v5-5-1/ja/03-c-api/12-functions-and-types-pop-push/#lua_pushcclosure)はこれらの値もスタックからポップします。

`n`の最大値は255です。

`n`が0の場合、この関数はC関数へのポインターにすぎない*ライトC関数*を作成します。この場合、メモリエラーを発生させることはありません。

---

## <a id="lua_pushcfunction"></a>`lua_pushcfunction`

[-0, +1, –]

```c
void lua_pushcfunction (lua_State *L, lua_CFunction f);
```

C関数をスタックへプッシュします。この関数は上位値なしの[`lua_pushcclosure`](/docs/lua/v5-5-1/ja/03-c-api/12-functions-and-types-pop-push/#lua_pushcclosure)と等価です。

---

## <a id="lua_pushexternalstring"></a>`lua_pushexternalstring`

[-0, +1, *m*]

```c
const char *lua_pushexternalstring (lua_State *L,
                const char *s, size_t len, lua_Alloc falloc, void *ud);
```

*外部文字列*、つまりLuaが管理しないメモリを使う文字列を作成します。ポインター`s`は文字列内容を保持する外部バッファーを指し、`len`は文字列の長さです。文字列の末尾にはゼロが必要です。つまり条件`s[len] == '\0'`を満たす必要があります。Luaのすべての文字列と同様、長さはLua整数に収まらなければなりません。

`falloc`が`NULL`でなければ、外部バッファーが不要になったときにLuaがその関数を呼び出します。この呼び出しまでバッファーの内容を変更してはいけません。関数は、指定された`ud`、ブロックとしての文字列`s`、以前のサイズとして長さに1（末尾のゼロ用）を加えた値、新しいサイズとして0を指定して呼び出されます。

外部バッファーを使う場合でも、Luaは文字列のヘッダーを割り当てる必要があります。メモリ割り当てエラーの場合、Luaはエラーを発生させる前に`falloc`を呼び出します。

関数は文字列へのポインター（つまり`s`）を返します。

---

## <a id="lua_pushfstring"></a>`lua_pushfstring`

[-0, +1, *v*]

```c
const char *lua_pushfstring (lua_State *L, const char *fmt, ...);
```

整形した文字列をスタックへプッシュし、その文字列へのポインターを返します（[§4.1.3](/docs/lua/v5-5-1/ja/03-c-api/02-stack/#4.1.3)を参照）。結果は、各*変換指定子*を対応する追加引数の文字列表現へ置き換えた`fmt`のコピーです。変換指定子（と対応する追加引数）には、'`%%`'（文字'`%`'を挿入）、'`%s`'（サイズ制限なしのゼロ終端文字列を挿入）、'`%f`'（[`lua_Number`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_Number)を挿入）、'`%I`'（[`lua_Integer`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_Integer)を挿入）、'`%p`'（voidポインターを挿入）、'`%d`'（`int`を挿入）、'`%c`'（`int`を1バイト文字として挿入）、'`%U`'（`unsigned long`をUTF-8バイト列として挿入）を指定できます。

文字列`fmt`内の'`%`'のすべての出現は、有効な変換指定子を構成しなければなりません。

メモリ割り当てエラーに加え、結果の文字列が大きすぎる場合、この関数はエラーを発生させる可能性があります。

---

## <a id="lua_pushglobaltable"></a>`lua_pushglobaltable`

[-0, +1, –]

```c
void lua_pushglobaltable (lua_State *L);
```

グローバル環境をスタックへプッシュします。

---

## <a id="lua_pushinteger"></a>`lua_pushinteger`

[-0, +1, –]

```c
void lua_pushinteger (lua_State *L, lua_Integer n);
```

値`n`を持つ整数をスタックへプッシュします。

---

## <a id="lua_pushlightuserdata"></a>`lua_pushlightuserdata`

[-0, +1, –]

```c
void lua_pushlightuserdata (lua_State *L, void *p);
```

ライトユーザーデータをスタックへプッシュします。

ユーザーデータはLua内でCの値を表します。*ライトユーザーデータ*はポインター、`void*`を表します。これは数値のような値です。作成するものではなく、個別のメタテーブルを持たず、（作成されたものではないため）収集されません。ライトユーザーデータは、同じCアドレスを持つ「任意の」ライトユーザーデータと等しくなります。

---

## <a id="lua_pushliteral"></a>`lua_pushliteral`

[-0, +1, *v*]

```c
const char *lua_pushliteral (lua_State *L, const char *s);
```

このマクロは[`lua_pushstring`](/docs/lua/v5-5-1/ja/03-c-api/12-functions-and-types-pop-push/#lua_pushstring)と等価ですが、`s`がリテラル文字列の場合にのみ使うべきです。（Luaはこの場合を最適化することがあります。）

---

## <a id="lua_pushlstring"></a>`lua_pushlstring`

[-0, +1, *v*]

```c
const char *lua_pushlstring (lua_State *L, const char *s, size_t len);
```

`s`が指すサイズ`len`の文字列をスタックへプッシュします。Luaは指定された文字列の内部コピーを作成または再利用するため、関数が返った直後に`s`のメモリを解放または再利用できます。文字列には、埋め込まれたゼロを含む任意のバイナリデータを含められます。

文字列の内部コピーへのポインターを返します（[§4.1.3](/docs/lua/v5-5-1/ja/03-c-api/02-stack/#4.1.3)を参照）。

メモリ割り当てエラーに加え、文字列が大きすぎる場合、この関数はエラーを発生させる可能性があります。

---

## <a id="lua_pushnil"></a>`lua_pushnil`

[-0, +1, –]

```c
void lua_pushnil (lua_State *L);
```

nil値をスタックへプッシュします。

---

## <a id="lua_pushnumber"></a>`lua_pushnumber`

[-0, +1, –]

```c
void lua_pushnumber (lua_State *L, lua_Number n);
```

値`n`を持つ浮動小数点数をスタックへプッシュします。

---

## <a id="lua_pushstring"></a>`lua_pushstring`

[-0, +1, *m*]

```c
const char *lua_pushstring (lua_State *L, const char *s);
```

`s`が指すゼロ終端文字列をスタックへプッシュします。Luaは指定された文字列の内部コピーを作成または再利用するため、関数が返った直後に`s`のメモリを解放または再利用できます。

文字列の内部コピーへのポインターを返します（[§4.1.3](/docs/lua/v5-5-1/ja/03-c-api/02-stack/#4.1.3)を参照）。

`s`が`NULL`なら、**nil**をプッシュして`NULL`を返します。

---

## <a id="lua_pushthread"></a>`lua_pushthread`

[-0, +1, –]

```c
int lua_pushthread (lua_State *L);
```

`L`が表すスレッドをスタックへプッシュします。このスレッドがそのステートのメインスレッドなら1を返します。

---

## <a id="lua_pushvalue"></a>`lua_pushvalue`

[-0, +1, –]

```c
void lua_pushvalue (lua_State *L, int index);
```

指定されたインデックスの要素のコピーをスタックへプッシュします。

---

## <a id="lua_pushvfstring"></a>`lua_pushvfstring`

[-0, +1, –]

```c
const char *lua_pushvfstring (lua_State *L,
                              const char *fmt,
                              va_list argp);
```

可変数の引数ではなく`va_list`を受け取り、エラーを発生させない点を除き、[`lua_pushfstring`](/docs/lua/v5-5-1/ja/03-c-api/12-functions-and-types-pop-push/#lua_pushfstring)と等価です。代わりに、エラーの場合はエラーメッセージをプッシュし、`NULL`を返します。

---
