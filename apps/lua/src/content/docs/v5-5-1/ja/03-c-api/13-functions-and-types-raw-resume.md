---
title: "C APIの関数と型：rawequal–rotate"
description: "rawアクセスから回転までのアルファベット順C APIリファレンス"
licenseSource: "lua-5.5.1"
---

# C APIの関数と型：rawequal–rotate

## <a id="lua_rawequal"></a>`lua_rawequal`

[-0, +0, –]

```c
int lua_rawequal (lua_State *L, int index1, int index2);
```

インデックス`index1`と`index2`の2つの値が原始的に等しい（つまり、`__eq`メタメソッドを呼び出さずに等しい）場合は1を返します。それ以外の場合は0を返します。いずれかのインデックスが有効でない場合も0を返します。

---

## <a id="lua_rawget"></a>`lua_rawget`

[-1, +1, –]

```c
int lua_rawget (lua_State *L, int index);
```

[`lua_gettable`](/docs/lua/v5-5-1/ja/03-c-api/09-functions-and-types-get/#lua_gettable)と同様ですが、rawアクセス（つまりメタメソッドなし）を行います。`index`の値はテーブルでなければなりません。

---

## <a id="lua_rawgeti"></a>`lua_rawgeti`

[-0, +1, –]

```c
int lua_rawgeti (lua_State *L, int index, lua_Integer n);
```

指定されたインデックスのテーブルを`t`として、値`t[n]`をスタックへプッシュします。アクセスはrawです。つまり、メタ値`__index`を使いません。

プッシュした値の型を返します。

---

## <a id="lua_rawgetp"></a>`lua_rawgetp`

[-0, +1, –]

```c
int lua_rawgetp (lua_State *L, int index, const void *p);
```

指定されたインデックスのテーブルを`t`、ライトユーザーデータとして表現したポインター`p`を`k`として、値`t[k]`をスタックへプッシュします。アクセスはrawです。つまり、メタ値`__index`を使いません。

プッシュした値の型を返します。

---

## <a id="lua_rawlen"></a>`lua_rawlen`

[-0, +0, –]

```c
lua_Unsigned lua_rawlen (lua_State *L, int index);
```

指定されたインデックスの値のrawな「長さ」を返します。文字列では文字列長、テーブルではメタメソッドなしの長さ演算子（'`#`'）の結果、ユーザーデータではそのユーザーデータ用に割り当てられたメモリブロックのサイズです。そのほかの値では、この呼び出しは0を返します。

---

## <a id="lua_rawset"></a>`lua_rawset`

[-2, +0, *m*]

```c
void lua_rawset (lua_State *L, int index);
```

[`lua_settable`](/docs/lua/v5-5-1/ja/03-c-api/14-functions-and-types-set-status/#lua_settable)と同様ですが、raw代入（つまりメタメソッドなし）を行います。`index`の値はテーブルでなければなりません。

---

## <a id="lua_rawseti"></a>`lua_rawseti`

[-1, +0, *m*]

```c
void lua_rawseti (lua_State *L, int index, lua_Integer i);
```

指定されたインデックスのテーブルを`t`、スタック最上部の値を`v`として、`t[i] = v`と等価な操作を行います。

この関数はスタックから値をポップします。代入はrawです。つまり、メタ値`__newindex`を使いません。

---

## <a id="lua_rawsetp"></a>`lua_rawsetp`

[-1, +0, *m*]

```c
void lua_rawsetp (lua_State *L, int index, const void *p);
```

指定されたインデックスのテーブルを`t`、ライトユーザーデータとして符号化した値を`p`、スタック最上部の値を`v`として、`t[p] = v`と等価な操作を行います。

この関数はスタックから値をポップします。代入はrawです。つまり、メタ値`__newindex`を使いません。

---

## <a id="lua_Reader"></a>`lua_Reader`

```c
typedef const char * (*lua_Reader) (lua_State *L,
                                    void *data,
                                    size_t *size);
```

[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)が使うreader関数です。[`lua_load`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_load)がチャンクの別の断片を必要とするたびに、その引数`data`を渡してreaderを呼び出します。readerはチャンクの新しい断片を持つメモリブロックへのポインターを返し、`size`をブロックサイズへ設定しなければなりません。ブロックはreader関数が再び呼び出されるまで存在する必要があります。チャンクの終わりを通知するには、readerは`NULL`を返すか、`size`を0へ設定する必要があります。reader関数は0より大きい任意のサイズの断片を返せます。

---

## <a id="lua_register"></a>`lua_register`

[-0, +0, *e*]

```c
void lua_register (lua_State *L, const char *name, lua_CFunction f);
```

C関数`f`をグローバル`name`の新しい値として設定します。次のマクロとして定義されています。

```c
     #define lua_register(L,n,f) \
            (lua_pushcfunction(L, f), lua_setglobal(L, n))
```

---

## <a id="lua_remove"></a>`lua_remove`

[-1, +0, –]

```c
void lua_remove (lua_State *L, int index);
```

指定された有効なインデックスの要素を除去し、そのインデックスより上の要素を下へずらして隙間を埋めます。疑似インデックスは実際のスタック位置ではないため、この関数を疑似インデックスで呼び出すことはできません。

---

## <a id="lua_replace"></a>`lua_replace`

[-1, +0, –]

```c
void lua_replace (lua_State *L, int index);
```

どの要素もずらさず、最上部の要素を指定された有効なインデックスへ移動し（したがって、そのインデックスの値を置き換え）、最上部の要素をポップします。

---

## <a id="lua_resume"></a>`lua_resume`

[-?, +?, –]

```c
int lua_resume (lua_State *L, lua_State *from, int nargs,
                          int *nresults);
```

指定されたスレッド`L`でコルーチンを開始またはresumeします。

コルーチンを開始するには、メイン関数とすべての引数をスレッドの空のスタックへプッシュします。次に、引数の数を`nargs`として[`lua_resume`](/docs/lua/v5-5-1/ja/03-c-api/13-functions-and-types-raw-resume/#lua_resume)を呼び出します。コルーチンが中断する、実行を完了する、または保護されていないエラーを発生させると、関数が返ります。エラーなく返ると、`*nresults`が更新され、スタック最上部には[`lua_yield`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yield)へ渡された、または本体関数が返した`*nresults`個の値があります。コルーチンがyieldした場合、[`lua_resume`](/docs/lua/v5-5-1/ja/03-c-api/13-functions-and-types-raw-resume/#lua_resume)は[`LUA_YIELD`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_YIELD)を、コルーチンがエラーなく実行を完了した場合は[`LUA_OK`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)を、エラーの場合はエラーコード（[§4.4.1](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#4.4.1)を参照）を返します。エラーの場合、エラーオブジェクトをスタック最上部へプッシュします。（この場合、唯一のエラーオブジェクトについて値が1になる必要があるため、`nresults`は更新されません。）

中断されたコルーチンをresumeするには、そのスタックからyieldされた`*nresults`個の値を除去し、`yield`の結果として渡す値をプッシュして、[`lua_resume`](/docs/lua/v5-5-1/ja/03-c-api/13-functions-and-types-raw-resume/#lua_resume)を呼び出します。

引数`from`は`L`をresumeしているコルーチンを表します。そのようなコルーチンがなければ、この引数を`NULL`にできます。

---

## <a id="lua_rotate"></a>`lua_rotate`

[-0, +0, –]

```c
void lua_rotate (lua_State *L, int idx, int n);
```

有効なインデックス`idx`からスタック最上部までのスタック要素を回転します。正の`n`では最上部の方向へ`n`位置、負の`n`では底の方向へ`-n`位置回転します。`n`の絶対値は、回転する区間のサイズより大きくてはいけません。疑似インデックスは実際のスタック位置ではないため、この関数を疑似インデックスで呼び出すことはできません。

---
