---
title: "Cコードでのライブラリの読み込み"
description: "オープン関数と標準ライブラリの選択的な読み込み"
licenseSource: "lua-5.5.1"
---

# 6.1 – <a id="6.1"></a>Cコードでのライブラリの読み込み

Cのホストプログラムでスクリプトから標準ライブラリを使用するには、そのライブラリをステートへ明示的に読み込む必要があります。そのために、ホストプログラムは関数[`luaL_openlibs`](/docs/lua/v5-5-1/ja/05-standard-library/02-loading-libraries-in-c/#luaL_openlibs)を呼び出せます。あるいは、[`luaL_openselectedlibs`](/docs/lua/v5-5-1/ja/05-standard-library/02-loading-libraries-in-c/#luaL_openselectedlibs)を使って、開くライブラリを選択できます。どちらの関数もヘッダーファイル`lualib.h`で宣言されています。

スタンドアロンインタープリター`lua`（[§7](/docs/lua/v5-5-1/ja/06-tools/01-lua-standalone/#7)を参照）は、すべての標準ライブラリをすでに開いています。

---

## <a id="luaL_openlibs"></a>`luaL_openlibs`

[-0, +0, *e*]

```lua
void luaL_openlibs (lua_State *L);
```

指定されたステートですべてのLua標準ライブラリを開きます。

---

## <a id="luaL_openselectedlibs"></a>`luaL_openselectedlibs`

[-0, +0, *e*]

```lua
void luaL_openselectedlibs (lua_State *L, int load, int preload);
```

ステート`L`で、選択した標準ライブラリを開き（ロードし）、またはプリロードします。（*プリロード*とは、ライブラリーローダーをテーブル[`package.preload`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.preload)へ追加し、後からプログラムがそのライブラリをrequireできるようにすることです。[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)自体は*package*ライブラリによって提供される点に注意してください。プログラムがそのライブラリを読み込まなければ、何もrequireできません。）

整数`load`は読み込むライブラリを選びます。整数`preload`は、読み込まれなかったライブラリのうち、プリロードするものを選びます。どちらも、次の定数をビット単位ORで組み合わせたマスクです。

- **<a id="pdf-LUA_GLIBK"></a>`LUA_GLIBK`**：基本ライブラリ。
- **<a id="pdf-LUA_LOADLIBK"></a>`LUA_LOADLIBK`**：パッケージライブラリ。
- **<a id="pdf-LUA_COLIBK"></a>`LUA_COLIBK`**：コルーチンライブラリ。
- **<a id="pdf-LUA_STRLIBK"></a>`LUA_STRLIBK`**：文字列ライブラリ。
- **<a id="pdf-LUA_UTF8LIBK"></a>`LUA_UTF8LIBK`**：UTF-8ライブラリ。
- **<a id="pdf-LUA_TABLIBK"></a>`LUA_TABLIBK`**：テーブルライブラリ。
- **<a id="pdf-LUA_MATHLIBK"></a>`LUA_MATHLIBK`**：数学ライブラリ。
- **<a id="pdf-LUA_IOLIBK"></a>`LUA_IOLIBK`**：I/Oライブラリ。
- **<a id="pdf-LUA_OSLIBK"></a>`LUA_OSLIBK`**：オペレーティングシステムライブラリ。
- **<a id="pdf-LUA_DBLIBK"></a>`LUA_DBLIBK`**：デバッグライブラリ。