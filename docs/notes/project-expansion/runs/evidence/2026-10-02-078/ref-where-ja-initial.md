---
title: "補助関数と型：ref–where"
description: "参照、登録、ストリーム、診断に関する補助APIリファレンス"
---

# 補助関数と型：ref–where

## <a id="luaL_ref"></a>`luaL_ref`

[-1, +0, *m*]

```c
int luaL_ref (lua_State *L, int t);
```

インデックス`t`のテーブルに、スタック最上部のオブジェクトの*参照*を作成して返します（そしてオブジェクトをポップします）。

参照システムはテーブルの整数キーを使います。参照は一意な整数キーです。[`luaL_ref`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref)は返すキーの一意性を保証します。項目1は内部使用のために予約されています。[`luaL_ref`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref)を初めて使う前に、テーブルの整数キーは正しいシーケンス（欠落なし）を構成し、項目1の値は偽、つまりシーケンスが空なら**nil**、それ以外なら**false**であるべきです。[`luaL_ref`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref)を初めて使った後は、テーブルの整数キーを手動で設定してはいけません。

`lua_rawgeti(L,t,r)`または`lua_geti(L,t,r)`を呼び出すと、参照`r`が参照するオブジェクトを取得できます。関数[`luaL_unref`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_unref)は参照を解放します。

スタック最上部のオブジェクトが**nil**なら、[`luaL_ref`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref)は定数<a id="pdf-LUA_REFNIL"></a>`LUA_REFNIL`を返します。定数<a id="pdf-LUA_NOREF"></a>`LUA_NOREF`は、[`luaL_ref`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref)が返すすべての参照と異なることが保証されています。

---

## <a id="luaL_Reg"></a>`luaL_Reg`

```c
typedef struct luaL_Reg {
  const char *name;
  lua_CFunction func;
} luaL_Reg;
```

[`luaL_setfuncs`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_setfuncs)によって登録される関数の配列の型です。`name`は関数名、`func`は関数へのポインターです。すべての[`luaL_Reg`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_Reg)配列は、`name`と`func`の両方が`NULL`である番兵項目で終わらなければなりません。

---

## <a id="luaL_requiref"></a>`luaL_requiref`

[-0, +1, *e*]

```c
void luaL_requiref (lua_State *L, const char *modname,
                    lua_CFunction openf, int glb);
```

`package.loaded[modname]`がtrueでなければ、文字列`modname`を引数として関数`openf`を呼び出し、その呼び出しの結果を`package.loaded[modname]`へ設定します。その関数が[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)を通じて呼び出されたかのように動作します。

`glb`がtrueなら、モジュールをグローバル変数`modname`へも保存します。

モジュールのコピーをスタックに残します。

---

## <a id="luaL_setfuncs"></a>`luaL_setfuncs`

[-nup, +0, *m*]

```c
void luaL_setfuncs (lua_State *L, const luaL_Reg *l, int nup);
```

配列`l`（[`luaL_Reg`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_Reg)を参照）のすべての関数を、スタック最上部（省略可能な上位値より下、次を参照）のテーブルへ登録します。

`nup`が0でない場合、すべての関数は`nup`個の上位値を持って作成されます。この上位値は、ライブラリテーブルの上に事前にプッシュされた`nup`個の値のコピーで初期化されます。これらの値は登録後にスタックからポップされます。

`NULL`値を持つ関数はプレースホルダーを表し、**false**で埋められます。

---

## <a id="luaL_setmetatable"></a>`luaL_setmetatable`

[-0, +0, –]

```c
void luaL_setmetatable (lua_State *L, const char *tname);
```

スタック最上部のオブジェクトのメタテーブルを、レジストリ内で名前`tname`に関連付けられたメタテーブルへ設定します（[`luaL_newmetatable`](/docs/lua/v5-5-1/ja/04-auxiliary-library/05-functions-and-types-make-push/#luaL_newmetatable)を参照）。

---

## <a id="luaL_alloc"></a>`luaL_alloc`

```c
void *luaL_alloc (void *ud, void *ptr, size_t osize, size_t nsize);
```

C関数`realloc`と`free`の上に構築されたLua用の標準アロケーター関数です（[`lua_Alloc`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_Alloc)を参照）。

---

## <a id="luaL_Stream"></a>`luaL_Stream`

```c
typedef struct luaL_Stream {
  FILE *f;
  lua_CFunction closef;
} luaL_Stream;
```

標準I/Oライブラリが使うファイルハンドルの標準表現です。

ファイルハンドルは、`LUA_FILEHANDLE`という名前のメタテーブル（`LUA_FILEHANDLE`は実際のメタテーブル名を持つマクロ）を持つフルユーザーデータとして実装されます。このメタテーブルはI/Oライブラリによって作成されます（[`luaL_newmetatable`](/docs/lua/v5-5-1/ja/04-auxiliary-library/05-functions-and-types-make-push/#luaL_newmetatable)を参照）。

このユーザーデータは構造`luaL_Stream`で始まらなければなりません。この先頭構造の後にほかのデータを含められます。フィールド`f`は対応するCストリームを指すか、不完全に作成されたハンドルを示す`NULL`です。フィールド`closef`は、ハンドルが閉じられるか収集されたとき、ストリームを閉じるために呼び出されるLua関数を指します。この関数はファイルハンドルだけを引数として受け取り、成功時には真の値を、エラー時には偽の値とエラーメッセージを返さなければなりません。Luaはこのフィールドを呼び出すと、ハンドルが閉じたことを示すため、フィールド値を`NULL`へ変更します。

---

## <a id="luaL_testudata"></a>`luaL_testudata`

[-0, +0, *m*]

```c
void *luaL_testudata (lua_State *L, int arg, const char *tname);
```

この関数は[`luaL_checkudata`](/docs/lua/v5-5-1/ja/04-auxiliary-library/03-functions-and-types-call-check/#luaL_checkudata)と同様に動作しますが、検査に失敗したときにエラーを発生させず`NULL`を返します。

---

## <a id="luaL_tolstring"></a>`luaL_tolstring`

[-0, +1, *e*]

```c
const char *luaL_tolstring (lua_State *L, int idx, size_t *len);
```

指定されたインデックスの任意のLua値を、妥当な形式のC文字列へ変換します。結果の文字列はスタックへプッシュされ、関数からも返されます（[§4.1.3](/docs/lua/v5-5-1/ja/03-c-api/02-stack/#4.1.3)を参照）。`len`が`NULL`でなければ、関数は`*len`へ文字列の長さも設定します。

値が`__tostring`フィールドを持つメタテーブルを持つ場合、`luaL_tolstring`は値を引数として対応するメタメソッドを呼び出し、呼び出しの結果を自身の結果として使います。

---

## <a id="luaL_traceback"></a>`luaL_traceback`

[-0, +1, *m*]

```c
void luaL_traceback (lua_State *L, lua_State *L1, const char *msg,
                     int level);
```

スタック`L1`のトレースバックを作成してプッシュします。`msg`が`NULL`でなければ、トレースバックの先頭に追加します。引数`level`は、トレースバックを開始するレベルを指定します。

---

## <a id="luaL_typeerror"></a>`luaL_typeerror`

[-0, +0, *v*]

```c
int luaL_typeerror (lua_State *L, int arg, const char *tname);
```

この関数を呼び出したC関数の引数`arg`について、標準メッセージを使って型エラーを発生させます。`tname`は期待される型の「名前」です。この関数が返ることはありません。

---

## <a id="luaL_typename"></a>`luaL_typename`

[-0, +0, –]

```c
const char *luaL_typename (lua_State *L, int index);
```

指定されたインデックスの値の型名を返します。

---

## <a id="luaL_unref"></a>`luaL_unref`

[-0, +0, –]

```c
void luaL_unref (lua_State *L, int t, int ref);
```

参照を解放します（[`luaL_ref`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref)を参照）。整数`ref`は[`LUA_NOREF`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#pdf-LUA_NOREF)、[`LUA_REFNIL`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#pdf-LUA_REFNIL)、または以前に[`luaL_ref`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref)が返し、まだ解放されていない参照のいずれかでなければなりません。`ref`が[`LUA_NOREF`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#pdf-LUA_NOREF)または[`LUA_REFNIL`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#pdf-LUA_REFNIL)なら、この関数は何もしません。それ以外の場合、参照先のオブジェクトを収集でき、参照`ref`を[`luaL_ref`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref)が再利用できるように、項目をテーブルから除去します。

---

## <a id="luaL_where"></a>`luaL_where`

[-0, +1, *m*]

```c
void luaL_where (lua_State *L, int lvl);
```

コールスタックのレベル`lvl`における現在の制御位置を識別する文字列をスタックへプッシュします。通常、この文字列は次の形式です。

```c
     chunkname:currentline:
```

レベル0は実行中の関数、レベル1は実行中の関数を呼び出した関数で、以降も同様です。

この関数はエラーメッセージの接頭辞を構築するために使われます。
