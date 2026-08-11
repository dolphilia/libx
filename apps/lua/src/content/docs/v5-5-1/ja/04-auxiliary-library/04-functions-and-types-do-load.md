---
title: "補助関数と型：dofile–loadstring"
description: "実行、結果、読み込みに関する補助APIリファレンス"
licenseSource: "lua-5.5.1"
---

# 補助関数と型：dofile–loadstring

## <a id="luaL_dofile"></a>`luaL_dofile`

[-0, +?, *m*]

```c
int luaL_dofile (lua_State *L, const char *filename);
```

指定されたファイルを読み込んで実行します。次のマクロとして定義されています。

```c
     (luaL_loadfile(L, filename) || lua_pcall(L, 0, LUA_MULTRET, 0))
```

エラーがなければ0（[`LUA_OK`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)）を、エラーの場合は1を返します。（ただし、メモリ不足エラーは発生させます。）

---

## <a id="luaL_dostring"></a>`luaL_dostring`

[-0, +?, –]

```c
int luaL_dostring (lua_State *L, const char *str);
```

指定された文字列を読み込んで実行します。次のマクロとして定義されています。

```c
     (luaL_loadstring(L, str) || lua_pcall(L, 0, LUA_MULTRET, 0))
```

エラーがなければ0（[`LUA_OK`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)）を、エラーの場合は1を返します。

---

## <a id="luaL_error"></a>`luaL_error`

[-0, +0, *v*]

```c
int luaL_error (lua_State *L, const char *fmt, ...);
```

エラーを発生させます。エラーメッセージの形式は、[`lua_pushfstring`](/docs/lua/v5-5-1/ja/03-c-api/12-functions-and-types-pop-push/#lua_pushfstring)と同じ規則に従う`fmt`とすべての追加引数によって指定されます。また、情報を利用できる場合、メッセージの先頭へエラーが起きたファイル名と行番号を追加します。

この関数が返ることはありませんが、C関数で`return luaL_error(args)`として使うのが慣用表現です。

---

## <a id="luaL_execresult"></a>`luaL_execresult`

[-0, +3, *m*]

```c
int luaL_execresult (lua_State *L, int stat);
```

この関数は、標準ライブラリのプロセス関連関数（[`os.execute`](/docs/lua/v5-5-1/ja/05-standard-library/11-operating-system/#pdf-os.execute)と[`io.close`](/docs/lua/v5-5-1/ja/05-standard-library/10-input-and-output/#pdf-io.close)）の戻り値を生成します。

---

## <a id="luaL_fileresult"></a>`luaL_fileresult`

[-0, +(1|3), *m*]

```c
int luaL_fileresult (lua_State *L, int stat, const char *fname);
```

この関数は、標準ライブラリのファイル関連関数（[`io.open`](/docs/lua/v5-5-1/ja/05-standard-library/10-input-and-output/#pdf-io.open)、[`os.rename`](/docs/lua/v5-5-1/ja/05-standard-library/11-operating-system/#pdf-os.rename)、[`file:seek`](/docs/lua/v5-5-1/ja/05-standard-library/10-input-and-output/#pdf-file:seek)など）の戻り値を生成します。

---

## <a id="luaL_getmetafield"></a>`luaL_getmetafield`

[-0, +(0|1), *m*]

```c
int luaL_getmetafield (lua_State *L, int obj, const char *e);
```

インデックス`obj`のオブジェクトのメタテーブルからフィールド`e`をスタックへプッシュし、プッシュした値の型を返します。オブジェクトにメタテーブルがない場合、またはメタテーブルにこのフィールドがない場合は、何もプッシュせず`LUA_TNIL`を返します。

---

## <a id="luaL_getmetatable"></a>`luaL_getmetatable`

[-0, +1, *m*]

```c
int luaL_getmetatable (lua_State *L, const char *tname);
```

レジストリ内で名前`tname`に関連付けられたメタテーブル（[`luaL_newmetatable`](/docs/lua/v5-5-1/ja/04-auxiliary-library/05-functions-and-types-make-push/#luaL_newmetatable)を参照）をスタックへプッシュします。その名前に関連付けられたメタテーブルがなければ**nil**をプッシュします。プッシュした値の型を返します。

---

## <a id="luaL_getsubtable"></a>`luaL_getsubtable`

[-0, +1, *e*]

```c
int luaL_getsubtable (lua_State *L, int idx, const char *fname);
```

インデックス`idx`の値を`t`としたとき、値`t[fname]`がテーブルであることを保証し、そのテーブルをスタックへプッシュします。以前からあるテーブルを見つけた場合はtrue、新しいテーブルを作成した場合はfalseを返します。

---

## <a id="luaL_gsub"></a>`luaL_gsub`

[-0, +1, *m*]

```c
const char *luaL_gsub (lua_State *L,
                       const char *s,
                       const char *p,
                       const char *r);
```

文字列`s`のコピーを作成し、文字列`p`のすべての出現を文字列`r`へ置き換えます。結果の文字列をスタックへプッシュして返します。

---

## <a id="luaL_len"></a>`luaL_len`

[-0, +0, *e*]

```c
lua_Integer luaL_len (lua_State *L, int index);
```

指定されたインデックスの値の「長さ」を数値として返します。Luaの'`#`'演算子と等価です（[§3.4.7](/docs/lua/v5-5-1/ja/02-language/10-expressions/#3.4.7)を参照）。操作の結果が整数でない場合はエラーを発生させます。（この場合はメタメソッドを通じてのみ起こり得ます。）

---

## <a id="luaL_loadbuffer"></a>`luaL_loadbuffer`

[-0, +1, –]

```c
int luaL_loadbuffer (lua_State *L,
                     const char *buff,
                     size_t sz,
                     const char *name);
```

`mode`を`NULL`とした[`luaL_loadbufferx`](/docs/lua/v5-5-1/ja/04-auxiliary-library/04-functions-and-types-do-load/#luaL_loadbufferx)と等価です。

---

## <a id="luaL_loadbufferx"></a>`luaL_loadbufferx`

[-0, +1, –]

```c
int luaL_loadbufferx (lua_State *L,
                      const char *buff,
                      size_t sz,
                      const char *name,
                      const char *mode);
```

バッファーをLuaチャンクとして読み込みます。この関数は[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)を使い、`buff`が指すサイズ`sz`のバッファー内のチャンクを読み込みます。

この関数は[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)と同じ結果を返します。`name`はデバッグ情報とエラーメッセージに使われるチャンク名です。文字列`mode`は関数[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)と同様に動作します。特に、この関数は固定バッファー用のモード'`B`'をサポートします。

---

## <a id="luaL_loadfile"></a>`luaL_loadfile`

[-0, +1, *m*]

```c
int luaL_loadfile (lua_State *L, const char *filename);
```

`mode`を`NULL`とした[`luaL_loadfilex`](/docs/lua/v5-5-1/ja/04-auxiliary-library/04-functions-and-types-do-load/#luaL_loadfilex)と等価です。

---

## <a id="luaL_loadfilex"></a>`luaL_loadfilex`

[-0, +1, *m*]

```c
int luaL_loadfilex (lua_State *L, const char *filename,
                                            const char *mode);
```

ファイルをLuaチャンクとして読み込みます。この関数は[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)を使い、`filename`という名前のファイル内のチャンクを読み込みます。`filename`が`NULL`なら、標準入力から読み込みます。ファイルの先頭行が`#`で始まる場合、その行を無視します。

文字列`mode`は関数[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)と同様に動作します。

この関数は[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)と同じ結果を返し、ファイル関連のエラーでは[`LUA_ERRFILE`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_ERRFILE)を返します。

[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)と同様、この関数はチャンクを読み込むだけで、実行はしません。

---

## <a id="luaL_loadstring"></a>`luaL_loadstring`

[-0, +1, –]

```c
int luaL_loadstring (lua_State *L, const char *s);
```

文字列をLuaチャンクとして読み込みます。この関数は[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)を使い、ゼロ終端文字列`s`内のチャンクを読み込みます。

この関数は[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)と同じ結果を返します。

同じく[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)と同様、この関数はチャンクを読み込むだけで、実行はしません。

---
