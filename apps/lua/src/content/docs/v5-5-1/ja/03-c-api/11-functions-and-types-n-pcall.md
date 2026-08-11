---
title: "C APIの関数と型：newstate–pcallk"
description: "lua_newstateからlua_pcallkまでのアルファベット順C APIリファレンス"
licenseSource: "lua-5.5.1"
---

# C APIの関数と型：newstate–pcallk

## <a id="lua_newstate"></a>`lua_newstate`

[-0, +0, –]

```c
lua_State *lua_newstate (lua_Alloc f, void *ud,
                                   unsigned int seed);
```

新しい独立したステートを作成し、そのメインスレッドを返します。（メモリ不足によって）ステートを作成できなければ`NULL`を返します。引数`f`はアロケーター関数です。Luaはこの関数を通じて、このステートのすべてのメモリ割り当てを行います（[`lua_Alloc`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_Alloc)を参照）。第2引数`ud`は、Luaが呼び出しのたびにアロケーターへ渡す不透明ポインターです。第3引数`seed`は文字列ハッシュ用のシードです。

---

## <a id="lua_newtable"></a>`lua_newtable`

[-0, +1, *m*]

```c
void lua_newtable (lua_State *L);
```

新しい空のテーブルを作成し、スタックへプッシュします。`lua_createtable(L,0,0)`と等価です。

---

## <a id="lua_newthread"></a>`lua_newthread`

[-0, +1, *m*]

```c
lua_State *lua_newthread (lua_State *L);
```

新しいスレッドを作成してスタックへプッシュし、この新しいスレッドを表す[`lua_State`](/docs/lua/v5-5-1/ja/03-c-api/14-functions-and-types-set-status/#lua_State)へのポインターを返します。この関数が返す新しいスレッドは、元のスレッドとグローバル環境を共有しますが、独立した実行スタックを持ちます。

スレッドはほかのLuaオブジェクトと同様にガベージコレクションの対象です。

---

## <a id="lua_newuserdatauv"></a>`lua_newuserdatauv`

[-0, +1, *m*]

```c
void *lua_newuserdatauv (lua_State *L, size_t size, int nuvalue);
```

この関数は、`user values`（ユーザー値）と呼ばれる`nuvalue`個の関連付けられたLua値と、`size`バイトの関連付けられた生のメモリブロックを持つ、新しいフルユーザーデータを作成してスタックへプッシュします。

ユーザー値は関数[`lua_setiuservalue`](/docs/lua/v5-5-1/ja/03-c-api/14-functions-and-types-set-status/#lua_setiuservalue)と[`lua_getiuservalue`](/docs/lua/v5-5-1/ja/03-c-api/09-functions-and-types-get/#lua_getiuservalue)で設定・読み取りできます。メモリブロックは任意のISO Cオブジェクトに適切にアラインされます。（そのほかのアラインメント要件については、ファイル`luaconf.h`のマクロ`LUAI_MAXALIGN`を参照。）

関数はメモリブロックのアドレスを返します。対応するユーザーデータが生存している限り、このアドレスが有効であることをLuaが保証します（[§2.5](/docs/lua/v5-5-1/ja/02-language/05-garbage-collection/#2.5)を参照）。さらに、ユーザーデータがファイナライズ対象として印を付けられていれば（[§2.5.3](/docs/lua/v5-5-1/ja/02-language/05-garbage-collection/#2.5.3)を参照）、少なくともそのファイナライザーの呼び出しまでアドレスは有効です。

---

## <a id="lua_next"></a>`lua_next`

[-1, +(2|0), *v*]

```c
int lua_next (lua_State *L, int index);
```

スタックからキーをポップし、指定されたインデックスのテーブルから、指定されたキーの「次」にあるキーと値の組をプッシュします。テーブルにそれ以上要素がなければ、[`lua_next`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_next)は0を返して何もプッシュしません。

典型的なテーブル走査は次のようになります。

```c
     /* table is in the stack at index 't' */
     lua_pushnil(L);  /* first key */
     while (lua_next(L, t) != 0) {
       /* uses 'key' (at index -2) and 'value' (at index -1) */
       printf("%s - %s\n",
              lua_typename(L, lua_type(L, -2)),
              lua_typename(L, lua_type(L, -1)));
       /* removes 'value'; keeps 'key' for next iteration */
       lua_pop(L, 1);
     }
```

テーブルの走査中、キーが実際に文字列であると分かっている場合を除き、キーに対して直接[`lua_tolstring`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_tolstring)を呼び出すことは避けてください。[`lua_tolstring`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_tolstring)は指定されたインデックスの値を変更する可能性があり、これによって次の[`lua_next`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_next)呼び出しが混乱することを思い出してください。

指定されたキーが**nil**でもテーブル内に存在するものでもない場合、この関数はエラーを発生させる可能性があります。

走査の詳細については関数[`next`](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#pdf-next)を参照してください。

---

## <a id="lua_Number"></a>`lua_Number`

```c
typedef ... lua_Number;
```

Luaにおける浮動小数点数の型です。

デフォルトでこの型はdoubleですが、single floatまたはlong doubleへ変更できます。（`luaconf.h`の`LUA_FLOAT_TYPE`を参照。）

---

## <a id="lua_numbertointeger"></a>`lua_numbertointeger`

```c
int lua_numbertointeger (lua_Number n, lua_Integer *p);
```

Lua浮動小数点数をLua整数へ変換しようとします。浮動小数点数`n`は整数値を持つ必要があります。その値がLua整数の範囲内なら、整数へ変換して`*p`へ代入します。マクロの結果は変換が成功したかを示すブール値です。（丸めのため、このマクロなしでこの範囲検査を正しく行うのは難しい場合があります。）

このマクロは引数を複数回評価する場合があります。

---

## <a id="lua_numbertocstring"></a>`lua_numbertocstring`

[-0, +0, –]

```c
unsigned lua_numbertocstring (lua_State *L, int idx,
                                        char *buff);
```

許容されるインデックス`idx`の数値を文字列へ変換し、結果を`buff`へ格納します。バッファーは少なくとも<a id="pdf-LUA_N2SBUFFSZ"></a>`LUA_N2SBUFFSZ`バイトのサイズを持つ必要があります。変換は規定されていない形式に従います（[§3.4.3](/docs/lua/v5-5-1/ja/02-language/10-expressions/#3.4.3)を参照）。関数はバッファーへ書き込んだバイト数（最後のゼロを含む）を返し、`idx`の値が数値でなければ0を返します。

---

## <a id="lua_pcall"></a>`lua_pcall`

[-(nargs + 1), +(nresults|1), –]

```c
int lua_pcall (lua_State *L, int nargs, int nresults, int msgh);
```

関数（または呼び出し可能なオブジェクト）を保護モードで呼び出します。

`nargs`と`nresults`はどちらも[`lua_call`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_call)と同じ意味を持ちます。呼び出し中にエラーがなければ、[`lua_pcall`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcall)は[`lua_call`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_call)とまったく同様に動作します。ただし、エラーがある場合、[`lua_pcall`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcall)はエラーを捕捉し、単一の値（エラーオブジェクト）をスタックへプッシュして、エラーコードを返します。[`lua_call`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_call)と同様に、[`lua_pcall`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcall)は常に関数とその引数をスタックから除去します。

`msgh`が0なら、スタックへ返されるエラーオブジェクトは元のエラーオブジェクトそのものです。それ以外の場合、`msgh`は*メッセージハンドラー*のスタックインデックスです。（このインデックスを疑似インデックスにすることはできません。）実行時エラーの場合、このハンドラーはエラーオブジェクトを指定して呼び出され、その戻り値が[`lua_pcall`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcall)によってスタックへ返されるオブジェクトになります。

通常、メッセージハンドラーはスタックトレースバックなど、エラーオブジェクトへさらにデバッグ情報を追加するために使われます。[`lua_pcall`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcall)が返った後ではスタックが巻き戻されているため、このような情報を収集できません。

関数[`lua_pcall`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcall)は、次のステータスコードのいずれかを返します：[`LUA_OK`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)、[`LUA_ERRRUN`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_ERRRUN)、[`LUA_ERRMEM`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_ERRMEM)、[`LUA_ERRERR`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_ERRERR)。

---

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

---
