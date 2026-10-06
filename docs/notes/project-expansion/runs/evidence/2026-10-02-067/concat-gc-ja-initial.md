---
title: "C APIの関数と型：concat–gc"
description: "lua_concatからlua_gcまでのアルファベット順C APIリファレンス"
---

# C APIの関数と型：concat–gc

## <a id="lua_concat"></a>`lua_concat`

[-n, +1, *e*]

```c
void lua_concat (lua_State *L, int n);
```

スタック最上部の`n`個の値を連結してポップし、結果を最上部に残します。`n`が1なら、結果はスタック上の単一の値です（つまり、関数は何もしません）。`n`が0なら、結果は空文字列です。連結はLuaの通常の意味論に従って実行されます（[§3.4.6](/docs/lua/v5-5-1/ja/02-language/10-expressions/#3.4.6)を参照）。

---

## <a id="lua_copy"></a>`lua_copy`

[-0, +0, –]

```c
void lua_copy (lua_State *L, int fromidx, int toidx);
```

インデックス`fromidx`の要素を有効なインデックス`toidx`へコピーし、その位置の値を置き換えます。ほかの位置の値には影響しません。

---

## <a id="lua_createtable"></a>`lua_createtable`

[-0, +1, *m*]

```c
void lua_createtable (lua_State *L, int nseq, int nrec);
```

新しい空のテーブルを作成し、スタックへプッシュします。引数`nseq`はテーブルがシーケンスとして持つ要素数のヒント、引数`nrec`はテーブルが持つそのほかの要素数のヒントです。Luaはこれらのヒントを使い、新しいテーブルのメモリを事前に割り当てることがあります。テーブルの要素数が事前に分かっている場合、この事前割り当ては性能向上に役立つことがあります。それ以外の場合は関数[`lua_newtable`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_newtable)を使うべきです。

---

## <a id="lua_dump"></a>`lua_dump`

[-0, +0, –]

```c
int lua_dump (lua_State *L,
                        lua_Writer writer,
                        void *data,
                        int strip);
```

関数をバイナリチャンクとしてダンプします。スタック最上部のLua関数を受け取り、再び読み込むとダンプした関数と等価な関数になるバイナリチャンクを生成します。チャンクの各部分を生成するとき、[`lua_dump`](/docs/lua/v5-5-1/ja/03-c-api/08-functions-and-types-concat-gc/#lua_dump)は、指定された`data`を使って書き込むために関数`writer`（[`lua_Writer`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_Writer)を参照）を呼び出します。

関数[`lua_dump`](/docs/lua/v5-5-1/ja/03-c-api/08-functions-and-types-concat-gc/#lua_dump)はwriter関数の呼び出しを通じてLuaスタックを完全に保持します。ただし、最初の呼び出し前に内部使用の値をいくつかプッシュする場合があり、最後の呼び出し後にスタックサイズを元のサイズへ戻します。

`strip`がtrueなら、容量を節約するため、バイナリ表現に関数のすべてのデバッグ情報を含めない場合があります。

返される値はwriterの最後の呼び出しが返したエラーコードです。0はエラーなしを意味します。

---

## <a id="lua_error"></a>`lua_error`

[-1, +0, *v*]

```c
int lua_error (lua_State *L);
```

スタック最上部の値をエラーオブジェクトとしてLuaエラーを発生させます。この関数はロングジャンプを行うため、決して返りません（[`luaL_error`](/docs/lua/v5-5-1/ja/04-auxiliary-library/04-functions-and-types-do-load/#luaL_error)を参照）。

---

## <a id="lua_gc"></a>`lua_gc`

[-0, +0, –]

```c
int lua_gc (lua_State *L, int what, ...);
```

ガベージコレクターを制御します。

この関数は引数`what`の値に従って複数の処理を行います。追加引数が必要なオプションでは、オプションの後に記載しています。

- **<a id="pdf-LUA_GCCOLLECT"></a>`LUA_GCCOLLECT`**：完全なガベージコレクションサイクルを実行します。
- **<a id="pdf-LUA_GCSTOP"></a>`LUA_GCSTOP`**：ガベージコレクターを停止します。
- **<a id="pdf-LUA_GCRESTART"></a>`LUA_GCRESTART`**：ガベージコレクターを再開します。
- **<a id="pdf-LUA_GCCOUNT"></a>`LUA_GCCOUNT`**：Luaが使用中の現在のメモリ量をKbyte単位で返します。
- **<a id="pdf-LUA_GCCOUNTB"></a>`LUA_GCCOUNTB`**：Luaが使用中の現在のメモリのバイト数を1024で割った余りを返します。
- **<a id="pdf-LUA_GCSTEP"></a>`LUA_GCSTEP` (size_t n)**：ガベージコレクションのステップを実行します。
- **<a id="pdf-LUA_GCISRUNNING"></a>`LUA_GCISRUNNING`**：コレクターが実行中（つまり停止していない）かを示すブール値を返します。
- **<a id="pdf-LUA_GCINC"></a>`LUA_GCINC`**：コレクターをインクリメンタルモードへ変更します。以前のモード（`LUA_GCGEN`または`LUA_GCINC`）を返します。
- **<a id="pdf-LUA_GCGEN"></a>`LUA_GCGEN`**：コレクターを世代別モードへ変更します。以前のモード（`LUA_GCGEN`または`LUA_GCINC`）を返します。
- **<a id="pdf-LUA_GCPARAM"></a>`LUA_GCPARAM` (int param, int val)**
  
  ：コレクターの引数値を変更または返します。
  
  `val`
  
  が-1なら、呼び出しは現在の値を返すだけです。引数
  
  `param`
  
  は次の値のいずれかでなければなりません。
  
  - **<a id="pdf-LUA_GCPMINORMUL"></a>`LUA_GCPMINORMUL`**
    
    ：マイナー乗数。
  - **<a id="pdf-LUA_GCPMAJORMINOR"></a>`LUA_GCPMAJORMINOR`**
    
    ：メジャー・マイナー乗数。
  - **<a id="pdf-LUA_GCPMINORMAJOR"></a>`LUA_GCPMINORMAJOR`**
    
    ：マイナー・メジャー乗数。
  - **<a id="pdf-LUA_GCPPAUSE"></a>`LUA_GCPPAUSE`**
    
    ：ガベージコレクターの一時停止。
  - **<a id="pdf-LUA_GCPSTEPMUL"></a>`LUA_GCPSTEPMUL`**
    
    ：ステップ乗数。
  - **<a id="pdf-LUA_GCPSTEPSIZE"></a>`LUA_GCPSTEPSIZE`**
    
    ：ステップサイズ。

これらのオプションの詳細については[`collectgarbage`](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#pdf-collectgarbage)を参照してください。

この関数をファイナライザーから呼び出すべきではありません。

---
