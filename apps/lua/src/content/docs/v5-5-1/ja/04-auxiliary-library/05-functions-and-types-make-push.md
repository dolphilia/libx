---
title: "補助関数と型：makeseed–pushresultsize"
description: "ステート、オプション、結果に関する補助APIリファレンス"
licenseSource: "lua-5.5.1"
---

# 補助関数と型：makeseed–pushresultsize

## <a id="luaL_makeseed"></a>`luaL_makeseed`

[-0, +0, –]

```c
unsigned int luaL_makeseed (lua_State *L);
```

弱いランダム性の試みによる値を返します。利用可能なLuaステートがなければ、引数`L`を`NULL`にできます。

---

## <a id="luaL_newlib"></a>`luaL_newlib`

[-0, +1, *m*]

```c
void luaL_newlib (lua_State *L, const luaL_Reg l[]);
```

新しいテーブルを作成し、リスト`l`の関数をそのテーブルへ登録します。

次のマクロとして実装されています。

```c
     (luaL_newlibtable(L,l), luaL_setfuncs(L,l,0))
```

配列`l`は、配列へのポインターではなく、実際の配列でなければなりません。

---

## <a id="luaL_newlibtable"></a>`luaL_newlibtable`

[-0, +1, *m*]

```c
void luaL_newlibtable (lua_State *L, const luaL_Reg l[]);
```

配列`l`のすべての項目を保存するためにサイズを最適化した新しいテーブルを作成します（実際にはまだ保存しません）。[`luaL_setfuncs`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_setfuncs)と組み合わせて使うことを意図しています（[`luaL_newlib`](/docs/lua/v5-5-1/ja/04-auxiliary-library/05-functions-and-types-make-push/#luaL_newlib)を参照）。

マクロとして実装されています。配列`l`は、配列へのポインターではなく、実際の配列でなければなりません。

---

## <a id="luaL_newmetatable"></a>`luaL_newmetatable`

[-0, +1, *m*]

```c
int luaL_newmetatable (lua_State *L, const char *tname);
```

レジストリがすでにキー`tname`を持つ場合は0を返します。それ以外の場合、ユーザーデータのメタテーブルとして使う新しいテーブルを作成し、新しいテーブルへ組`__name = tname`を、レジストリへ組`[tname] = new table`を追加し、1を返します。

どちらの場合も、この関数はレジストリ内で`tname`に関連付けられた最終的な値をスタックへプッシュします。

使用上の注意：新しいメタテーブルを条件付きで初期化するために、この関数の戻り値を使う場合（たとえばメタメソッドを追加する場合）は注意してください。初期化でエラーが発生すると、メタテーブルは正しく初期化されませんが、そのコードを後で実行すると、メタテーブルがすでに存在すると判定され、初期化を読み飛ばします。

---

## <a id="luaL_newstate"></a>`luaL_newstate`

[-0, +0, –]

```c
lua_State *luaL_newstate (void);
```

新しいLuaステートを作成します。アロケーター関数を[`luaL_alloc`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_newstate)、シードを`luaL_makeseed(NULL)`の結果として[`lua_newstate`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_alloc)を呼び出し、その後、標準エラー出力へメッセージを表示する警告関数とパニック関数（[§4.4](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#4.4)を参照）を設定します。

新しいステートを返し、メモリ割り当てエラーの場合は`NULL`を返します。

---

## <a id="luaL_opt"></a>`luaL_opt`

[-0, +0, –]

```c
T luaL_opt (L, func, arg, dflt);
```

このマクロは次のように定義されています。

```c
     (lua_isnoneornil(L,(arg)) ? (dflt) : func(L,(arg)))
```

言い換えると、引数`arg`がnilまたは存在しなければ、マクロの結果はデフォルト値`dflt`です。それ以外の場合、ステート`L`と引数インデックス`arg`を引数として`func`を呼び出した結果になります。式`dflt`は必要な場合にだけ評価されることに注意してください。

---

## <a id="luaL_optinteger"></a>`luaL_optinteger`

[-0, +0, *v*]

```c
lua_Integer luaL_optinteger (lua_State *L,
                             int arg,
                             lua_Integer d);
```

関数の引数`arg`が整数（または整数へ変換可能）なら、その整数を返します。この引数が存在しないか**nil**なら`d`を返します。それ以外の場合はエラーを発生させます。

---

## <a id="luaL_optlstring"></a>`luaL_optlstring`

[-0, +0, *v*]

```c
const char *luaL_optlstring (lua_State *L,
                             int arg,
                             const char *d,
                             size_t *l);
```

関数の引数`arg`が文字列なら、その文字列を返します。この引数が存在しないか**nil**なら`d`を返します。それ以外の場合はエラーを発生させます。

`l`が`NULL`でなければ、その参照先へ結果の長さを設定します。結果が`NULL`なら（`d`を返し、`d == NULL`の場合にのみ可能）、長さは0とみなされます。

この関数は結果を取得するために[`lua_tolstring`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_tolstring)を使うため、その関数のすべての変換と注意事項がここでも適用されます。

---

## <a id="luaL_optnumber"></a>`luaL_optnumber`

[-0, +0, *v*]

```c
lua_Number luaL_optnumber (lua_State *L, int arg, lua_Number d);
```

関数の引数`arg`が数値なら、`lua_Number`としてその数値を返します。この引数が存在しないか**nil**なら`d`を返します。それ以外の場合はエラーを発生させます。

---

## <a id="luaL_optstring"></a>`luaL_optstring`

[-0, +0, *v*]

```c
const char *luaL_optstring (lua_State *L,
                            int arg,
                            const char *d);
```

関数の引数`arg`が文字列なら、その文字列を返します。この引数が存在しないか**nil**なら`d`を返します。それ以外の場合はエラーを発生させます。

---

## <a id="luaL_prepbuffer"></a>`luaL_prepbuffer`

[-?, +?, *m*]

```c
char *luaL_prepbuffer (luaL_Buffer *B);
```

事前定義されたサイズ<a id="pdf-LUAL_BUFFERSIZE"></a>`LUAL_BUFFERSIZE`を指定した[`luaL_prepbuffsize`](/docs/lua/v5-5-1/ja/04-auxiliary-library/05-functions-and-types-make-push/#luaL_prepbuffsize)と等価です。

---

## <a id="luaL_prepbuffsize"></a>`luaL_prepbuffsize`

[-?, +?, *m*]

```c
char *luaL_prepbuffsize (luaL_Buffer *B, size_t sz);
```

バッファー`B`へ追加する文字列をコピーできる、サイズ`sz`の領域へのアドレスを返します（[`luaL_Buffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)を参照）。文字列をこの領域へコピーした後、実際にバッファーへ追加するには、文字列のサイズを指定して[`luaL_addsize`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_addsize)を呼び出す必要があります。

---

## <a id="luaL_pushfail"></a>`luaL_pushfail`

[-0, +1, –]

```c
void luaL_pushfail (lua_State *L);
```

**fail**値をスタックへプッシュします（[§6](/docs/lua/v5-5-1/ja/05-standard-library/01-overview/#6)を参照）。

---

## <a id="luaL_pushresult"></a>`luaL_pushresult`

[-?, +1, *m*]

```c
void luaL_pushresult (luaL_Buffer *B);
```

バッファー`B`の使用を終了し、最終的な文字列をスタック最上部に残します。

---

## <a id="luaL_pushresultsize"></a>`luaL_pushresultsize`

[-?, +1, *m*]

```c
void luaL_pushresultsize (luaL_Buffer *B, size_t sz);
```

呼び出し列[`luaL_addsize`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_addsize)、[`luaL_pushresult`](/docs/lua/v5-5-1/ja/04-auxiliary-library/05-functions-and-types-make-push/#luaL_pushresult)と等価です。

---
