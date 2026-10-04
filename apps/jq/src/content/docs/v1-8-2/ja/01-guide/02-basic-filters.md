---
title: "基本フィルター"
order: 2
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"出典と通知\">出典と通知</h2>\n<p>出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">公式マニュアル</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">固定原典</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">ライセンス</a> · <a href=\"/docs/jq/v1-8-2/ja/02-license/01-original-notices/\">原著作権・第三者通知</a> · <a href=\"/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/\">ライセンス全文</a></p>"}]
---

<div class="jq-upstream-field" data-source-key="sections/1/title">

<h2 id="basic-filters">基本フィルター</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/0/title">

<h3 id="identity">恒等フィルター：<code>.</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/0/body">

<p>最も単純なフィルターは <code>.</code> です。このフィルターは入力を受け取り、同じ値を出力します。つまり、恒等演算子です。</p>
<p>jqは既定ですべての出力を整形するため、<code>.</code> だけからなる簡単なプログラムを使って、たとえば <code>curl</code> のJSON出力を整形できます。</p>
<p>恒等フィルター自体は入力の値を変更しませんが、jqの処理によって、変更されたように見えることがあります。たとえば、jqの現在の実装では、次の式を評価すると、</p>
<pre><code>1E1234567890 | .&#10;</code></pre>
<p>少なくとも1つのプラットフォームで <code>1.7976931348623157e+308</code> が生成されます。これは、数値を解析する過程で、この特定の版のjqがIEEE754の倍精度表現へ変換し、精度が失われたためです。</p>
<p>jqによる数値の扱いはこれまでに変化しており、今後も関連するJSON標準が定める範囲内で変化する可能性が高いと考えられます。また、ビルド設定のオプションによって、jqの数値処理の方法が変わることがあります。</p>
<p>したがって、以下の説明は、jqの現在の版の動作を記述することを意図したものであり、動作を規定するものと解釈すべきではない、という前提で示します。</p>
<p>(1) まだIEEE754の倍精度表現へ変換されていない数値に対して算術演算を行うと、IEEE754表現への変換が発生します。</p>
<p>(2) jqは、数値リテラルの元の十進精度を維持しようとします（ビルド設定のオプション <code>--disable-decnum</code> が使われなかった場合）。ただし、<code>1E1234567890</code> のような式では、指数が大きすぎると精度が失われます。</p>
<p>(3) 数値の切り詰められていない大きな十進数表現が利用できる場合、比較はその表現を使って行われます。以下の実行例の1つで、この動作を示します。</p>
<p>以下の実行例では、組込み関数 <code>have_decnum</code> を使って、ビルド設定のオプション <code>--disable-decnum</code> を使った場合と使わなかった場合に期待される違いを示します。また、このオプションの使用の有無にかかわらず、実行例から作成した自動テストが成功するようにしています。</p>

</div>

<!-- jq-example:sections/1/entries/0/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.'
```

入力

```text
"Hello, world!"
```

出力 1

```text
"Hello, world!"
```

<!-- jq-example:sections/1/entries/0/examples/0:end -->

<!-- jq-example:sections/1/entries/0/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.'
```

入力

```text
0.12345678901234567890123456789
```

出力 1

```text
0.12345678901234567890123456789
```

<!-- jq-example:sections/1/entries/0/examples/1:end -->

<!-- jq-example:sections/1/entries/0/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '[., tojson] == if have_decnum then [12345678909876543212345,"12345678909876543212345"] else [12345678909876543000000,"12345678909876543000000"] end'
```

入力

```text
12345678909876543212345
```

出力 1

```text
true
```

<!-- jq-example:sections/1/entries/0/examples/2:end -->

<!-- jq-example:sections/1/entries/0/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq '[1234567890987654321,-1234567890987654321 | tojson] == if have_decnum then ["1234567890987654321","-1234567890987654321"] else ["1234567890987654400","-1234567890987654400"] end'
```

入力

```text
null
```

出力 1

```text
true
```

<!-- jq-example:sections/1/entries/0/examples/3:end -->

<!-- jq-example:sections/1/entries/0/examples/4:start -->

#### 実行例 5

コマンド

```sh
jq '. < 0.12345678901234567890123456788'
```

入力

```text
0.12345678901234567890123456789
```

出力 1

```text
false
```

<!-- jq-example:sections/1/entries/0/examples/4:end -->

<!-- jq-example:sections/1/entries/0/examples/5:start -->

#### 実行例 6

コマンド

```sh
jq 'map([., . == 1]) | tojson == if have_decnum then "[[1,true],[1.000,true],[1.0,true],[1.00,true]]" else "[[1,true],[1,true],[1,true],[1,true]]" end'
```

入力

```text
[1, 1.000, 1.0, 100e-2]
```

出力 1

```text
true
```

<!-- jq-example:sections/1/entries/0/examples/5:end -->

<!-- jq-example:sections/1/entries/0/examples/6:start -->

#### 実行例 7

コマンド

```sh
jq '. as $big | [$big, $big + 1] | map(. > 10000000000000000000000000000000) | . == if have_decnum then [true, false] else [false, false] end'
```

入力

```text
10000000000000000000000000000001
```

出力 1

```text
true
```

<!-- jq-example:sections/1/entries/0/examples/6:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/1/title">

<h3 id="object-identifier-index">オブジェクトの識別子による索引：<code>.foo</code>、<code>.foo.bar</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/1/body">

<p>最も単純で<em>役に立つ</em>フィルターは <code>.foo</code> という形式です。JSONオブジェクト（辞書やハッシュとも呼ばれます）を入力として与えると、<code>.foo</code> はキー"foo"が存在する場合にその値を、存在しない場合にnullを生成します。</p>
<p><code>.foo.bar</code> という形式のフィルターは <code>.foo | .bar</code> と同じです。</p>
<p><code>.foo</code> の構文は、単純で識別子のようなキーにだけ使えます。つまり、英数字とアンダースコアだけで構成され、数字で始まらないキーです。</p>
<p>キーに特殊文字が含まれる場合や数字で始まる場合は、<code>."foo$"</code> のように二重引用符で囲むか、<code>.["foo$"]</code> を使う必要があります。</p>
<p>たとえば、<code>.["foo::bar"]</code> と <code>.["foo.bar"]</code> は使えますが、<code>.foo::bar</code> は使えません。</p>

</div>

<!-- jq-example:sections/1/entries/1/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.foo'
```

入力

```text
{"foo": 42, "bar": "less interesting data"}
```

出力 1

```text
42
```

<!-- jq-example:sections/1/entries/1/examples/0:end -->

<!-- jq-example:sections/1/entries/1/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.foo'
```

入力

```text
{"notfoo": true, "alsonotfoo": false}
```

出力 1

```text
null
```

<!-- jq-example:sections/1/entries/1/examples/1:end -->

<!-- jq-example:sections/1/entries/1/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '.["foo"]'
```

入力

```text
{"foo": 42}
```

出力 1

```text
42
```

<!-- jq-example:sections/1/entries/1/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/2/title">

<h3 id="optional-object-identifier-index">オブジェクトの識別子による索引（エラーを抑制）：<code>.foo?</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/2/body">

<p><code>.foo</code> と同様ですが、<code>.</code> がオブジェクトでなくてもエラーを出力しません。</p>

</div>

<!-- jq-example:sections/1/entries/2/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.foo?'
```

入力

```text
{"foo": 42, "bar": "less interesting data"}
```

出力 1

```text
42
```

<!-- jq-example:sections/1/entries/2/examples/0:end -->

<!-- jq-example:sections/1/entries/2/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.foo?'
```

入力

```text
{"notfoo": true, "alsonotfoo": false}
```

出力 1

```text
null
```

<!-- jq-example:sections/1/entries/2/examples/1:end -->

<!-- jq-example:sections/1/entries/2/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '.["foo"]?'
```

入力

```text
{"foo": 42}
```

出力 1

```text
42
```

<!-- jq-example:sections/1/entries/2/examples/2:end -->

<!-- jq-example:sections/1/entries/2/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq '[.foo?]'
```

入力

```text
[1,2]
```

出力 1

```text
[]
```

<!-- jq-example:sections/1/entries/2/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/3/title">

<h3 id="object-index">オブジェクトの索引：<code>.[&lt;string&gt;]</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/3/body">

<p><code>.["foo"]</code> のような構文を使って、オブジェクトのフィールドを検索することもできます（前述の <code>.foo</code> はこの省略形ですが、識別子のような文字列にだけ使えます）。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/4/title">

<h3 id="array-index">配列の索引：<code>.[&lt;number&gt;]</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/4/body">

<p>索引の値が整数の場合、<code>.[&lt;number&gt;]</code> で配列を参照できます。配列の索引は0から始まるため、<code>.[2]</code> は3番目の要素を返します。</p>
<p>負の索引も使えます。-1は最後の要素、-2は最後から2番目の要素を指し、以下も同様です。</p>

</div>

<!-- jq-example:sections/1/entries/4/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.[0]'
```

入力

```text
[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]
```

出力 1

```text
{"name":"JSON", "good":true}
```

<!-- jq-example:sections/1/entries/4/examples/0:end -->

<!-- jq-example:sections/1/entries/4/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.[2]'
```

入力

```text
[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]
```

出力 1

```text
null
```

<!-- jq-example:sections/1/entries/4/examples/1:end -->

<!-- jq-example:sections/1/entries/4/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '.[-2]'
```

入力

```text
[1,2,3]
```

出力 1

```text
2
```

<!-- jq-example:sections/1/entries/4/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/5/title">

<h3 id="array-string-slice">配列・文字列のスライス：<code>.[&lt;number&gt;:&lt;number&gt;]</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/5/body">

<p><code>.[&lt;number&gt;:&lt;number&gt;]</code> という構文を使うと、配列の部分配列や文字列の部分文字列を返せます。<code>.[10:15]</code> が返す配列の長さは5で、索引10（含む）から索引15（含まない）までの要素を含みます。どちらの索引も負の値にできます。その場合、配列の末尾から逆向きに数えます。また、どちらも省略でき、その場合は配列の先頭または末尾を指します。索引は0から始まります。</p>

</div>

<!-- jq-example:sections/1/entries/5/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.[2:4]'
```

入力

```text
["a","b","c","d","e"]
```

出力 1

```text
["c", "d"]
```

<!-- jq-example:sections/1/entries/5/examples/0:end -->

<!-- jq-example:sections/1/entries/5/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.[2:4]'
```

入力

```text
"abcdefghi"
```

出力 1

```text
"cd"
```

<!-- jq-example:sections/1/entries/5/examples/1:end -->

<!-- jq-example:sections/1/entries/5/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '.[:3]'
```

入力

```text
["a","b","c","d","e"]
```

出力 1

```text
["a", "b", "c"]
```

<!-- jq-example:sections/1/entries/5/examples/2:end -->

<!-- jq-example:sections/1/entries/5/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq '.[-2:]'
```

入力

```text
["a","b","c","d","e"]
```

出力 1

```text
["d", "e"]
```

<!-- jq-example:sections/1/entries/5/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/6/title">

<h3 id="array-object-value-iterator">配列・オブジェクトの値のイテレーター：<code>.[]</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/6/body">

<p><code>.[index]</code> の構文で索引を完全に省略すると、配列の<em>すべて</em>の要素を返します。<code>.[]</code> を入力 <code>[1,2,3]</code> に対して実行すると、1つの配列ではなく、3つの別々の結果として数値を生成します。<code>.foo[]</code> という形式のフィルターは <code>.foo | .[]</code> と同じです。</p>
<p>オブジェクトに対して使うこともでき、その場合はオブジェクトのすべての値を返します。</p>
<p>このイテレーター演算子は、値のジェネレーターであることに注意してください。</p>

</div>

<!-- jq-example:sections/1/entries/6/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.[]'
```

入力

```text
[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]
```

出力 1

```text
{"name":"JSON", "good":true}
```

出力 2

```text
{"name":"XML", "good":false}
```

<!-- jq-example:sections/1/entries/6/examples/0:end -->

<!-- jq-example:sections/1/entries/6/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.[]'
```

入力

```text
[]
```

出力なし

<!-- jq-example:sections/1/entries/6/examples/1:end -->

<!-- jq-example:sections/1/entries/6/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '.foo[]'
```

入力

```text
{"foo":[1,2,3]}
```

出力 1

```text
1
```

出力 2

```text
2
```

出力 3

```text
3
```

<!-- jq-example:sections/1/entries/6/examples/2:end -->

<!-- jq-example:sections/1/entries/6/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq '.[]'
```

入力

```text
{"a": 1, "b": 1}
```

出力 1

```text
1
```

出力 2

```text
1
```

<!-- jq-example:sections/1/entries/6/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/7/title">

<h3 id=".[]?"><code>.[]?</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/7/body">

<p><code>.[]</code> と同様ですが、.が配列でもオブジェクトでもない場合も、エラーを出力しません。<code>.foo[]?</code> という形式のフィルターは <code>.foo | .[]?</code> と同じです。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/8/title">

<h3 id="comma">カンマ：<code>,</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/8/body">

<p>2つのフィルターをカンマで区切ると、両方に同じ入力が渡され、2つのフィルターが出力する値のストリームが順番に連結されます。最初に左側の式が生成するすべての出力が続き、その後に右側の式が生成するすべての出力が続きます。たとえば、フィルター <code>.foo,
.bar</code> は"foo"フィールドと"bar"フィールドの両方を、別々の出力として生成します。</p>
<p><code>,</code> 演算子は、ジェネレーターを構築する方法の1つです。</p>

</div>

<!-- jq-example:sections/1/entries/8/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.foo, .bar'
```

入力

```text
{"foo": 42, "bar": "something else", "baz": true}
```

出力 1

```text
42
```

出力 2

```text
"something else"
```

<!-- jq-example:sections/1/entries/8/examples/0:end -->

<!-- jq-example:sections/1/entries/8/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.user, .projects[]'
```

入力

```text
{"user":"stedolan", "projects": ["jq", "wikiflow"]}
```

出力 1

```text
"stedolan"
```

出力 2

```text
"jq"
```

出力 3

```text
"wikiflow"
```

<!-- jq-example:sections/1/entries/8/examples/1:end -->

<!-- jq-example:sections/1/entries/8/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '.[4,2]'
```

入力

```text
["a","b","c","d","e"]
```

出力 1

```text
"e"
```

出力 2

```text
"c"
```

<!-- jq-example:sections/1/entries/8/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/9/title">

<h3 id="pipe">パイプ：<code>|</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/9/body">

<p>|演算子は、左側のフィルターの出力を右側のフィルターの入力へ渡すことで、2つのフィルターを組み合わせます。Unixシェルのパイプに慣れていれば、それと似たものと考えられます。</p>
<p>左側が複数の結果を生成すると、右側はそれぞれの結果に対して実行されます。したがって、式 <code>.[] | .foo</code> は入力配列の各要素から"foo"フィールドを取り出します。これは直積であり、意外に感じることがあります。</p>
<p><code>.a.b.c</code> は <code>.a | .b | .c</code> と同じであることに注意してください。</p>
<p>また、<code>.</code> は「パイプライン」の特定の段階、具体的には <code>.</code> という式が現れる位置での入力値です。したがって、<code>.a | . | .b</code> は <code>.a.b</code> と同じです。中央の <code>.</code> は、<code>.a</code> が生成した値を指すためです。</p>

</div>

<!-- jq-example:sections/1/entries/9/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.[] | .name'
```

入力

```text
[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]
```

出力 1

```text
"JSON"
```

出力 2

```text
"XML"
```

<!-- jq-example:sections/1/entries/9/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/1/entries/10/title">

<h3 id="parenthesis">丸括弧</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/1/entries/10/body">

<p>丸括弧は、一般的なプログラミング言語と同様に、式をまとめる演算子として働きます。</p>

</div>

<!-- jq-example:sections/1/entries/10/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '(. + 2) * 5'
```

入力

```text
1
```

出力 1

```text
15
```

<!-- jq-example:sections/1/entries/10/examples/0:end -->

## 訳注

訳注：この節の数値精度の説明は、現在の実装とビルド設定を条件としています。後続の数値型・算術の説明だけから、すべてのビルドで同じ精度保持や比較になると解釈しないでください。入力数値リテラルの保持に対応するかはhave_literal_numbers、現在のdecnumバックエンドでビルドされたかはhave_decnumの説明も参照してください。

[原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/02-basic-filters/#identity) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/04-builtin-operators-and-functions/#have_literal_numbers) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/04-builtin-operators-and-functions/#have_decnum)

