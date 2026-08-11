---
title: "変数"
description: "Luaの変数形式とインデックスの意味論"
licenseSource: "lua-5.5.1"
---

# 3.2 – <a id="3.2"></a>変数

変数は値を格納する場所である。Luaには、グローバル変数、ローカル変数、テーブルフィールドの3種類の変数がある。

単一の名前は、グローバル変数またはローカル変数（あるいは、ローカル変数の一種である関数の仮引数）を表せる（[§2.2](/docs/lua/v5-5-1/ja/02-language/02-scopes-variables-and-environments/#2.2)を参照）。

```lua
	var ::= Name
```

Nameは識別子を表す（[§3.1](/docs/lua/v5-5-1/ja/02-language/07-lexical-conventions/#3.1)を参照）。

変数は*レキシカルスコープ*を持つため、ローカル変数のスコープ内で定義された関数は、そのローカル変数へ自由にアクセスできる（[§2.2](/docs/lua/v5-5-1/ja/02-language/02-scopes-variables-and-environments/#2.2)を参照）。

変数へ最初に代入する前、その値は**nil**である。

テーブルのインデックス指定には角括弧を使用する。

```lua
	var ::= prefixexp ‘[’ exp ‘]’
```

テーブルフィールドへのアクセスの意味は、メタテーブルを介して変更できる（[§2.4](/docs/lua/v5-5-1/ja/02-language/04-metatables-and-metamethods/#2.4)を参照）。

構文`var.Name`は、単に`var["Name"]`の構文糖である。

```lua
	var ::= prefixexp ‘.’ Name
```

グローバル変数`x`へのアクセスは、`_ENV.x`と等価である。
