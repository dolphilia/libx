---
title: "条件式と比較"
order: 5
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/4/title">

<h2 id="conditionals-and-comparisons">条件式と比較</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/0/title">

<h3 id="==-!="><code>==</code>, <code>!=</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/0/body">

<p>式'a == b'は、aとbを評価した結果が等しい場合（つまり、等価なJSON値を表す場合）に'true'を生成し、それ以外の場合に'false'を生成します。特に、文字列が数値と等しいとみなされることはありません。JSONオブジェクトの等価性を調べるとき、キーの順序は関係ありません。JavaScriptを使っていた方は、jqの <code>==</code> が、JavaScriptの「厳密等価」演算子 <code>===</code> と同様であることに注意してください。</p>
<p>!=は「等しくない」を意味し、'a != b'は'a == b'と逆の値を返します。</p>

</div>

<!-- jq-example:sections/4/entries/0/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '. == false'
```

入力

```text
null
```

出力 1

```text
false
```

<!-- jq-example:sections/4/entries/0/examples/0:end -->

<!-- jq-example:sections/4/entries/0/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '. == {"b": {"d": (4 + 1e-20), "c": 3}, "a":1}'
```

入力

```text
{"a":1, "b": {"c": 3, "d": 4}}
```

出力 1

```text
true
```

<!-- jq-example:sections/4/entries/0/examples/1:end -->

<!-- jq-example:sections/4/entries/0/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '.[] == 1'
```

入力

```text
[1, 1.0, "1", "banana"]
```

出力 1

```text
true
```

出力 2

```text
true
```

出力 3

```text
false
```

出力 4

```text
false
```

<!-- jq-example:sections/4/entries/0/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/4/entries/1/title">

<h3 id="if-then-else-end">if-then-else-end</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/1/body">

<p><code>if A then B else C end</code> が <code>B</code> と同じ動作をするのは、<code>A</code> がfalseでもnullでもない値を生成する場合です。それ以外の場合は <code>C</code> と同じ動作をします。</p>
<p><code>if A then B end</code> は、<code>if A then B else .  end</code> と同じです。つまり、<code>else</code> 分岐は省略可能で、省略した場合は <code>.</code> と同じです。これは、<code>elif</code> で最後の <code>else</code> 分岐を省略した場合にも当てはまります。</p>
<p>falseかnullかを調べるという「真とみなすかどうか」の基準は、JavaScriptやPythonより単純です。ただし、求める条件を、より明示的に指定しなければならない場合があります。たとえば、<code>if .name then A else B end</code> では文字列が空かどうかは調べられません。代わりに、<code>if .name == "" then A else B end</code> のような式が必要です。</p>
<p>条件 <code>A</code> が複数の結果を生成する場合、<code>B</code> はfalseでもnullでもない各結果に対して1回ずつ評価され、<code>C</code> はfalseまたはnullの各結果に対して1回ずつ評価されます。</p>
<p>ifにさらに条件を追加するには、<code>elif A then B</code> 構文を使います。</p>

</div>

<!-- jq-example:sections/4/entries/1/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'if . == 0 then
  "zero"
elif . == 1 then
  "one"
else
  "many"
end'
```

入力

```text
2
```

出力 1

```text
"many"
```

<!-- jq-example:sections/4/entries/1/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/4/entries/2/title">

<h3 id="&gt;-&gt;=-&lt;=-&lt;"><code>&gt;</code>, <code>&gt;=</code>, <code>&lt;=</code>, <code>&lt;</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/2/body">

<p>比較演算子 <code>&gt;</code>、<code>&gt;=</code>、<code>&lt;=</code>、<code>&lt;</code> は、それぞれ、左の引数が右の引数より大きいか、以上か、以下か、より小さいかを返します。</p>
<p>順序は、前述の <code>sort</code> で説明した順序と同じです。</p>

</div>

<!-- jq-example:sections/4/entries/2/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '. < 5'
```

入力

```text
2
```

出力 1

```text
true
```

<!-- jq-example:sections/4/entries/2/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/4/entries/3/title">

<h3 id="and-or-not"><code>and</code>, <code>or</code>, <code>not</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/3/body">

<p>jqは、通常の真偽値演算子 <code>and</code>、<code>or</code>、<code>not</code> に対応しています。真とみなす基準はif式と同じです。<code>false</code> と <code>null</code> は「偽の値」とみなされ、それ以外はすべて「真の値」です。</p>
<p>これらの演算子のオペランドが複数の結果を生成する場合、演算子自体も各入力に対して結果を生成します。</p>
<p>実際には、<code>not</code> は演算子ではなく組込み関数です。そのため、専用の構文ではなく、値をパイプで渡すフィルターとして呼び出します。たとえば、<code>.foo and .bar |
not</code> のように使います。</p>
<p>この3つは、<code>true</code> と <code>false</code> の値だけを生成します。そのため、純粋な真偽値演算に使うもので、Perl/Python/Rubyでよく使われる"value_that_may_be_null or default"という書き方には使えません。このような「or」を使い、条件を評価する代わりに2つの値から選びたい場合は、後述の <code>//</code> 演算子を参照してください。</p>

</div>

<!-- jq-example:sections/4/entries/3/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '42 and "a string"'
```

入力

```text
null
```

出力 1

```text
true
```

<!-- jq-example:sections/4/entries/3/examples/0:end -->

<!-- jq-example:sections/4/entries/3/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '(true, false) or false'
```

入力

```text
null
```

出力 1

```text
true
```

出力 2

```text
false
```

<!-- jq-example:sections/4/entries/3/examples/1:end -->

<!-- jq-example:sections/4/entries/3/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '(true, true) and (true, false)'
```

入力

```text
null
```

出力 1

```text
true
```

出力 2

```text
false
```

出力 3

```text
true
```

出力 4

```text
false
```

<!-- jq-example:sections/4/entries/3/examples/2:end -->

<!-- jq-example:sections/4/entries/3/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq '[true, false | not]'
```

入力

```text
null
```

出力 1

```text
[false, true]
```

<!-- jq-example:sections/4/entries/3/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/4/entries/4/title">

<h3 id="alternative-operator">代替演算子：<code>//</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/4/body">

<p>演算子 <code>//</code> は、左辺の値のうち、<code>false</code> でも <code>null</code> でもないものをすべて生成します。左辺が <code>false</code> または <code>null</code> 以外の値を1つも生成しない場合、<code>//</code> は右辺の値をすべて生成します。</p>
<p><code>a // b</code> という形式のフィルターは、<code>a</code> の結果のうち、<code>false</code> でも <code>null</code> でもないものをすべて生成します。<code>a</code> が結果を1つも生成しない場合、または <code>false</code> か <code>null</code> 以外の結果を生成しない場合、<code>a
// b</code> は <code>b</code> の結果を生成します。</p>
<p>これは既定値を与える際に便利です。<code>.foo // 1</code> が <code>1</code> に評価されるのは、入力に <code>.foo</code> 要素がない場合です。これは、Pythonで <code>or</code> が使われることがある方法と似ています（jqの <code>or</code> 演算子は、厳密な真偽値演算専用です）。</p>
<p>注意：<code>some_generator // defaults_here</code> は、<code>some_generator | . // defaults_here</code> と同じではありません。後者は左辺の、<code>false</code> でない値、<code>null</code> でない値のすべてに対して既定値を生成しますが、前者はそうではありません。優先順位の規則が分かりにくくする場合があります。たとえば、<code>false, 1 // 2</code> で <code>//</code> の左辺となるのは <code>1</code> であって、<code>false, 1</code> ではありません。<code>false, 1 // 2</code> は、<code>false,
(1 // 2)</code> と同じように解析されます。<code>(false, null, 1) | . // 42</code> で <code>//</code> の左辺となるのは <code>.</code> で、常に1つの値だけを生成します。一方、<code>(false, null, 1) // 42</code> の左辺は3つの値のジェネレーターです。<code>false</code> と <code>null</code> 以外の値を生成するため、既定値 <code>42</code> は生成されません。</p>

</div>

<!-- jq-example:sections/4/entries/4/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'empty // 42'
```

入力

```text
null
```

出力 1

```text
42
```

<!-- jq-example:sections/4/entries/4/examples/0:end -->

<!-- jq-example:sections/4/entries/4/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.foo // 42'
```

入力

```text
{"foo": 19}
```

出力 1

```text
19
```

<!-- jq-example:sections/4/entries/4/examples/1:end -->

<!-- jq-example:sections/4/entries/4/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '.foo // 42'
```

入力

```text
{}
```

出力 1

```text
42
```

<!-- jq-example:sections/4/entries/4/examples/2:end -->

<!-- jq-example:sections/4/entries/4/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq '(false, null, 1) // 42'
```

入力

```text
null
```

出力 1

```text
1
```

<!-- jq-example:sections/4/entries/4/examples/3:end -->

<!-- jq-example:sections/4/entries/4/examples/4:start -->

#### 実行例 5

コマンド

```sh
jq '(false, null, 1) | . // 42'
```

入力

```text
null
```

出力 1

```text
42
```

出力 2

```text
42
```

出力 3

```text
1
```

<!-- jq-example:sections/4/entries/4/examples/4:end -->

<div class="jq-upstream-field" data-source-key="sections/4/entries/5/title">

<h3 id="try-catch">try-catch</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/5/body">

<p>エラーは、<code>try EXP catch EXP</code> を使って捕捉できます。最初の式を実行し、失敗した場合は、エラーメッセージを入力として2番目の式を実行します。ハンドラーが何かを出力した場合、それは、試した式の出力であるかのように出力されます。</p>
<p><code>try EXP</code> という形式は、例外ハンドラーとして <code>empty</code> を使います。</p>

</div>

<!-- jq-example:sections/4/entries/5/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'try .a catch ". is not an object"'
```

入力

```text
true
```

出力 1

```text
". is not an object"
```

<!-- jq-example:sections/4/entries/5/examples/0:end -->

<!-- jq-example:sections/4/entries/5/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '[.[]|try .a]'
```

入力

```text
[{}, true, {"a":1}]
```

出力 1

```text
[null, 1]
```

<!-- jq-example:sections/4/entries/5/examples/1:end -->

<!-- jq-example:sections/4/entries/5/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'try error("some exception") catch .'
```

入力

```text
true
```

出力 1

```text
"some exception"
```

<!-- jq-example:sections/4/entries/5/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/4/entries/6/title">

<h3 id="breaking-out-of-control-structures">制御構造から抜け出す</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/6/body">

<p>try/catchの便利な用途の1つは、<code>reduce</code>、<code>foreach</code>、<code>while</code> などの制御構造から抜け出すことです。</p>
<p>例：</p>
<pre><code># Repeat an expression until it raises "break" as an&#10;# error, then stop repeating without re-raising the error.&#10;# But if the error caught is not "break" then re-raise it.&#10;try repeat(exp) catch if .=="break" then empty else error&#10;</code></pre>
<p>jqには、「抜け出す」または「戻る」先として使う、名前付きの字句的なラベルの構文があります。</p>
<pre><code>label $out | ... break $out ...&#10;</code></pre>
<p>式 <code>break $label_name</code> は、最も近い左側の <code>label $label_name</code> が <code>empty</code> を生成したかのように、プログラムを動作させます。</p>
<p><code>break</code> と対応する <code>label</code> の関係は字句的なものです。ラベルがbreakから「見える」位置にある必要があります。</p>
<p>たとえば、<code>reduce</code> から抜け出すには、次のようにします。</p>
<pre><code>label $out | reduce .[] as $item (null; if .==false then break $out else ... end)&#10;</code></pre>
<p>次のjqプログラムは、構文エラーを生成します。</p>
<pre><code>break $out&#10;</code></pre>
<p>ラベル <code>$out</code> が見える位置にないためです。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/7/title">

<h3 id="error-suppression-optional-operator">エラー抑制／オプショナル演算子：<code>?</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/4/entries/7/body">

<p>演算子 <code>?</code> を <code>EXP?</code> として使う書き方は、<code>try EXP</code> の省略形です。</p>

</div>

<!-- jq-example:sections/4/entries/7/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[.[] | .a?]'
```

入力

```text
[{}, true, {"a":1}]
```

出力 1

```text
[null, 1]
```

<!-- jq-example:sections/4/entries/7/examples/0:end -->

<!-- jq-example:sections/4/entries/7/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '[.[] | tonumber?]'
```

入力

```text
["1", "invalid", "3", 4]
```

出力 1

```text
[1, 3, 4]
```

<!-- jq-example:sections/4/entries/7/examples/1:end -->

## 訳注

訳注：原文の注意書きには、パイプを使った形がfalseでもnullでもない値に既定値を生成するという一文がありますが、同じ原文の説明と例では、falseまたはnullに対して既定値を生成し、それ以外の値はそのまま出力しています。保持した例では、(false, null, 1) // 42の出力は1だけで、(false, null, 1) | . // 42の出力は42、42、1です。原文の一文は無言で書き換えず、例との食い違いをここで区別しています。

[原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/05-conditionals-and-comparisons/#alternative-operator) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/05-conditionals-and-comparisons/#alternative-operator) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/05-conditionals-and-comparisons/#alternative-operator)

## 出典と通知

出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。

[公式マニュアル](https://jqlang.org/manual/v1.8/) · [固定原典](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [ライセンス](https://creativecommons.org/licenses/by/3.0/) · [原著作権・第三者通知](/docs/jq/v1-8-2/ja/02-license/01-original-notices/) · [ライセンス全文](/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/)
