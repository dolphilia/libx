---
title: "数学関数"
description: "数学ライブラリのリファレンス"
licenseSource: "lua-5.5.1"
---

# 6.8 – <a id="6.8"></a>数学関数

このライブラリは基本的な数学関数を提供します。すべての関数と定数はテーブル<a id="pdf-math"></a>`math`内にあります。"`integer/float`"という注記がある関数は、整数の引数に対して整数の結果を、整数でない引数に対して浮動小数点数の結果を返します。丸め関数[`math.ceil`](/docs/lua/v5-5-1/ja/05-standard-library/09-mathematical-functions/#pdf-math.ceil)、[`math.floor`](/docs/lua/v5-5-1/ja/05-standard-library/09-mathematical-functions/#pdf-math.floor)、[`math.modf`](/docs/lua/v5-5-1/ja/05-standard-library/09-mathematical-functions/#pdf-math.modf)は、結果が整数の範囲に収まる場合は整数を、それ以外の場合は浮動小数点数を返します。

---

## <a id="pdf-math.abs"></a>`math.abs (x)`

`x`と`-x`のうち大きい値を返します。（integer/float）

---

## <a id="pdf-math.acos"></a>`math.acos (x)`

`x`の逆余弦をラジアンで返します。

---

## <a id="pdf-math.asin"></a>`math.asin (x)`

`x`の逆正弦をラジアンで返します。

---

## <a id="pdf-math.atan"></a>`math.atan (y [, x])`

両方の引数の符号を使って結果の象限を求め、`y/x`の逆正接をラジアンで返します。`x`が0の場合も正しく処理します。

`x`のデフォルト値は1なので、呼び出し`math.atan(y)`は`y`の逆正接を返します。

---

## <a id="pdf-math.ceil"></a>`math.ceil (x)`

`x`以上の最小の整数値を返します。

---

## <a id="pdf-math.cos"></a>`math.cos (x)`

`x`（ラジアンと仮定）の余弦を返します。

---

## <a id="pdf-math.deg"></a>`math.deg (x)`

角度`x`をラジアンから度へ変換します。

---

## <a id="pdf-math.exp"></a>`math.exp (x)`

値*e<sup>x</sup>*（`e`は自然対数の底）を返します。

---

## <a id="pdf-math.floor"></a>`math.floor (x)`

`x`以下の最大の整数値を返します。

---

## <a id="pdf-math.fmod"></a>`math.fmod (x, y)`

商を0の方向へ丸める、`x`を`y`で除算した余りを返します。（integer/float）

---

## <a id="pdf-math.frexp"></a>`math.frexp (x)`

*x = m2<sup>e</sup>*を満たす2つの数`m`と`e`を返します。`e`は整数です。`x`が0、NaN、+inf、または-infの場合、`m`は`x`と等しくなります。それ以外の場合、`m`の絶対値は範囲*[0.5, 1)*に入ります。

---

## <a id="pdf-math.huge"></a>`math.huge`

ほかのどの数値よりも大きい浮動小数点値`HUGE_VAL`です。

---

## <a id="pdf-math.ldexp"></a>`math.ldexp (m, e)`

*m2<sup>e</sup>*を返します。`e`は整数です。

---

## <a id="pdf-math.log"></a>`math.log (x [, base])`

指定された底における`x`の対数を返します。`base`のデフォルトは*e*です（したがって、関数は`x`の自然対数を返します）。

---

## <a id="pdf-math.max"></a>`math.max (x, ···)`

Lua演算子`<`に従い、最大値を持つ引数を返します。

---

## <a id="pdf-math.maxinteger"></a>`math.maxinteger`

整数の最大値を持つ整数です。

---

## <a id="pdf-math.min"></a>`math.min (x, ···)`

Lua演算子`<`に従い、最小値を持つ引数を返します。

---

## <a id="pdf-math.mininteger"></a>`math.mininteger`

整数の最小値を持つ整数です。

---

## <a id="pdf-math.modf"></a>`math.modf (x)`

`x`の整数部分と`x`の小数部分を返します。2番目の結果は常に浮動小数点数です。

---

## <a id="pdf-math.pi"></a>`math.pi`

*π*の値です。

---

## <a id="pdf-math.rad"></a>`math.rad (x)`

角度`x`を度からラジアンへ変換します。

---

## <a id="pdf-math.random"></a>`math.random ([m [, n]])`

引数なしで呼び出すと、範囲*[0, 1)*の一様分布に従う疑似乱数の浮動小数点数を返します。2つの整数`m`と`n`を指定して呼び出すと、`math.random`は範囲*[m, n]*の一様分布に従う疑似乱数の整数を返します。正の`n`に対する呼び出し`math.random(n)`は、`math.random(1,n)`と等価です。呼び出し`math.random(0)`は、すべてのビットが（疑似）ランダムな整数を生成します。

この関数は`xoshiro256**`アルゴリズムを使って疑似乱数の64ビット整数を生成します。これは引数0で呼び出した結果です。そのほかの結果（範囲と浮動小数点数）は、これらの整数から偏りなく抽出されます。

Luaは引数なしの[`math.randomseed`](/docs/lua/v5-5-1/ja/05-standard-library/09-mathematical-functions/#pdf-math.randomseed)呼び出しと等価な方法で疑似乱数生成器を初期化します。そのため、`math.random`はプログラムを実行するたびに異なる結果の列を生成するはずです。

---

## <a id="pdf-math.randomseed"></a>`math.randomseed ([x [, y]])`

少なくとも1つの引数を指定して呼び出すと、整数の引数`x`と`y`が、疑似乱数生成器を再初期化するための*シード*へ結合されます。同じシードは同じ数列を生成します。`y`のデフォルトは0です。

引数なしで呼び出すと、Luaは弱いランダム性の試みによってシードを生成します。

この関数は実際に使われた2つのシード成分を返すため、それらを再度設定すれば数列を再現できます。

初期状態に必要なランダム性の水準を確保するため（または反対に、プログラムのデバッグ時などに決定的な数列を得るため）、明示的な引数を指定して[`math.randomseed`](/docs/lua/v5-5-1/ja/05-standard-library/09-mathematical-functions/#pdf-math.randomseed)を呼び出す必要があります。

---

## <a id="pdf-math.sin"></a>`math.sin (x)`

`x`（ラジアンと仮定）の正弦を返します。

---

## <a id="pdf-math.sqrt"></a>`math.sqrt (x)`

`x`の平方根を返します。（式`x^0.5`を使ってこの値を計算することもできます。）

---

## <a id="pdf-math.tan"></a>`math.tan (x)`

`x`（ラジアンと仮定）の正接を返します。

---

## <a id="pdf-math.tointeger"></a>`math.tointeger (x)`

値`x`を整数へ変換できる場合は、その整数を返します。それ以外の場合は**fail**を返します。

---

## <a id="pdf-math.type"></a>`math.type (x)`

`x`が整数なら"`integer`"、浮動小数点数なら"`float`"を返し、`x`が数値でなければ**fail**を返します。

---

## <a id="pdf-math.ult"></a>`math.ult (m, n)`

整数mと整数nを符号なし整数として比較したとき、`m`が`n`より小さい場合に限り、ブール値**true**を返します。
