---
title: "スコープ、変数、環境"
description: "レキシカルスコープ、変数、環境"
---

# 2.2 – <a id="2.2"></a>スコープ、変数、環境

変数名は、コード上のその位置で有効な宣言に従い、グローバル変数またはローカル変数を参照する。（ここでの議論では、関数の仮引数はローカル変数と同等である。）

すべてのチャンクは、すべての自由名をグローバル変数として宣言する暗黙の宣言`global *`で始まる。次の例に示すように、この冒頭の宣言は、別の**global**宣言のスコープ内では無効になる。

```lua
     X = 1       -- Ok, global by default
     do
       global Y  -- voids the implicit initial declaration
       Y = 1     -- Ok, Y declared as global
       X = 1     -- ERROR, X not declared
     end
     X = 2       -- Ok, global by default again
```

したがって、どのglobal宣言の外側でも、Luaはデフォルトでグローバルとして動作する。global宣言の内側ではデフォルトがなく、すべての変数を宣言しなければならない。

Luaはレキシカルスコープを持つ言語である。変数宣言のスコープは、宣言直後の最初の文から始まり、その宣言を含む最も内側のブロックにある最後の非void文まで続く。（*Void文*とは、ラベルと空文である。）

ある宣言は、その宣言位置で有効な同名の宣言を隠蔽する。この隠蔽の内側では、その名前に対する外側の宣言はすべて無効となる。次の例を参照すること。

```lua
     global print, x
     x = 10                -- global variable
     do                    -- new block
       local x = x         -- new 'x', with value 10
       print(x)            --> 10
       x = x+1
       do                  -- another block
         local x = x+1     -- another 'x'
         print(x)          --> 12
       end
       print(x)            --> 11
     end
     print(x)              --> 10  (the global one)
```

`local x = x`のような宣言では、宣言中の新しい`x`はまだスコープ内にないため、右辺の`x`は外側の変数を参照することに注意すること。

レキシカルスコープの規則により、ローカル変数のスコープ内で定義された関数は、そのローカル変数へ自由にアクセスできる。内側の関数が使用するローカル変数は、その内側の関数では*アップバリュー*（または*外部ローカル変数*、単に*外部変数*）と呼ばれる。

**local**文を実行するたびに、新しいローカル変数が定義されることに注意すること。次の例を考える。

```lua
     a = {}
     local x = 20
     for i = 1, 10 do
       local y = 0
       a[i] = function () y = y + 1; return x + y end
     end
```

このループは、10個のクロージャ（すなわち無名関数の10個のインスタンス）を作成する。これらのクロージャはそれぞれ異なる`y`変数を使用する一方、すべてが同じ`x`を共有する。

[§3.2](/docs/lua/v5-5-1/ja/02-language/08-variables/#3.2)および[§3.3.3](/docs/lua/v5-5-1/ja/02-language/09-statements/#3.3.3)でさらに説明するように、グローバル変数`var`への参照はすべて構文的に`_ENV.var`へ変換される。さらに、各チャンクは`_ENV`という名前の外部ローカル変数のスコープ内でコンパイルされるため（[§3.3.2](/docs/lua/v5-5-1/ja/02-language/09-statements/#3.3.2)を参照）、`_ENV`自体がチャンク内の自由名になることはない。

この外部`_ENV`変数と自由名の変換が存在するにもかかわらず、`_ENV`は通常の名前である。特に、この名前を持つ新しい変数や引数を定義できる。（ただし、`_ENV`をグローバル変数として定義するべきではない。定義すると`_ENV.var`が`_ENV._ENV.var`へ変換され、以下同様に無限ループとなる。）グローバル変数名への各参照は、プログラム上のその位置で見える`_ENV`を使用する。

`_ENV`の値として使用されるテーブルは、すべて*環境*と呼ばれる。

Luaは、*グローバル環境*と呼ばれる特別な環境を保持している。この値はCレジストリ内の特別なインデックスに保持される（[§4.3](/docs/lua/v5-5-1/ja/03-c-api/04-registry/#4.3)を参照）。Luaでは、グローバル変数[`_G`](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#pdf-_G)が同じ値で初期化される。（[`_G`](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#pdf-_G)が内部で使用されることはないため、その値の変更は自分のコードだけに影響する。）

Luaがチャンクを読み込むとき、その`_ENV`変数のデフォルト値はグローバル環境である（[`load`](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#pdf-load)を参照）。そのため、デフォルトでは、Luaコード内のグローバル変数はグローバル環境のエントリーを参照し、従来のグローバル変数として動作する。さらに、すべての標準ライブラリがグローバル環境へ読み込まれ、そこにある一部の関数はその環境に対して動作する。[`load`](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#pdf-load)（または[`loadfile`](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#pdf-loadfile)）を使用すると、異なる環境でチャンクを読み込める。（Cでは、チャンクを読み込んだ後、その最初のアップバリューの値を変更する必要がある。[`lua_setupvalue`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_setupvalue)を参照。）
