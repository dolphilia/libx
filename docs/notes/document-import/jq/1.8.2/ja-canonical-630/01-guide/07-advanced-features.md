---
title: "高度な機能"
order: 7
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/6/title">

<h2 id="advanced-features">高度な機能</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/body">

<p>ほとんどのプログラミング言語では変数が不可欠ですが、jqでは「高度な機能」として扱われます。</p>
<p>ほとんどの言語では、データを受け渡す手段は変数だけです。値を計算して2回以上使いたい場合、変数に保存する必要があります。プログラムの別の部分に値を渡すには、その部分で、関数の引数やオブジェクトのメンバーなど、データを置く変数を定義する必要があります。</p>
<p>jqでも関数を定義できます。ただし、この機能の主な用途はjqの標準ライブラリの定義です。<code>map</code> や <code>select</code> など、多くのjq関数は、実際にjqで書かれています。</p>
<p>jqには集約演算子があり、非常に強力ですが、少し扱いにくいものです。これらも主に、jqの標準ライブラリの便利な部分を定義するため、内部で使われています。</p>
<p>最初は分かりにくいかもしれませんが、jqの中心にあるのはジェネレーターです。他の言語でもよく見られるものです。ジェネレーターを扱うための補助機能がいくつか提供されています。</p>
<p>標準入力からJSONを読み込み、標準出力へJSONを書き出す以外にも、最小限の入出力機能があります。</p>
<p>最後に、モジュール／ライブラリの仕組みがあります。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/0/title">

<h3 id="variable-symbolic-binding-operator">変数／記号的束縛演算子：<code>... as $identifier | ...</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/0/body">

<p>jqでは、すべてのフィルターに入力と出力があるため、プログラムのある部分から次の部分に値を渡すための手動の受け渡し処理は必要ありません。たとえば <code>a + b</code> のような多くの式は、入力を2つの異なる部分式に渡します。ここでは、<code>a</code> と <code>b</code> の両方に同じ入力を渡します。そのため、値を2回使うために変数が必要になることは、通常ありません。</p>
<p>たとえば、数値の配列の平均値を計算するには、ほとんどの言語でいくつかの変数が必要です。少なくとも配列を保持する変数が1つ、場合によっては各要素やループのカウンターを保持する変数も必要です。jqでは、単に <code>add / length</code> と書きます。式 <code>add</code> は配列を受け取って合計を生成し、式 <code>length</code> は配列を受け取って長さを生成します。</p>
<p>そのため、jqでは、ほとんどの問題に対して変数を定義するよりすっきりした解決方法があります。それでも、変数で簡単になる場合があるため、jqでは <code>expression as $variable</code> を使って変数を定義できます。変数名はすべて <code>$</code> で始まります。配列の平均の例を、少し見通しの悪い形で書くと、次のようになります。</p>
<pre><code>length as $array_length | add / $array_length&#10;</code></pre>
<p>変数を使うことで実際に楽になる場面を見つけるには、もう少し複雑な問題が必要です。</p>
<p>"author"と"title"フィールドを持つブログ記事の配列と、著者のユーザー名を実名に対応付ける別のオブジェクトがあるとします。入力は次のようになります。</p>
<pre><code>{"posts": [{"title": "First post", "author": "anon"},&#10;           {"title": "A well-written article", "author": "person1"}],&#10; "realnames": {"anon": "Anonymous Coward",&#10;               "person1": "Person McPherson"}}&#10;</code></pre>
<p>次のように、authorフィールドに実名が入った記事を生成したいとします。</p>
<pre><code>{"title": "First post", "author": "Anonymous Coward"}&#10;{"title": "A well-written article", "author": "Person McPherson"}&#10;</code></pre>
<p>変数 <code>$names</code> にrealnamesオブジェクトを保存し、後で著者のユーザー名を調べる際に参照できるようにします。</p>
<pre><code>.realnames as $names | .posts[] | {title, author: $names[.author]}&#10;</code></pre>
<p>式 <code>exp as $x | ...</code> は、式 <code>exp</code> の各値に対して、元の入力全体を使い、<code>$x</code> をその値に設定して、パイプラインの残りを実行するという意味です。そのため、<code>as</code> は一種のforeachループのように機能します。</p>
<p><code>{foo}</code> が <code>{foo: .foo}</code> の便利な省略形であるのと同様に、<code>{$foo}</code> は <code>{foo: $foo}</code> の便利な省略形です。</p>
<p>1つの <code>as</code> 式で複数の変数を宣言できます。入力の構造に一致するパターンを指定します。これは「分割代入」と呼ばれます。</p>
<pre><code>. as {realnames: $names, posts: [$first, $second]} | ...&#10;</code></pre>
<p>配列パターン内の変数宣言（たとえば、<code>. as
[$first, $second]</code>）は、索引0から順に配列の要素を束縛します。配列パターンの要素に対応する索引に値がない場合、その変数には <code>null</code> が束縛されます。</p>
<p>変数のスコープは、その変数を定義した式の残りの部分に及びます。そのため、</p>
<pre><code>.realnames as $names | (.posts[] | {title, author: $names[.author]})&#10;</code></pre>
<p>は動作しますが、</p>
<pre><code>(.realnames as $names | .posts[]) | {title, author: $names[.author]}&#10;</code></pre>
<p>は動作しません。</p>
<p>プログラミング言語の理論の用語では、jqの変数は字句的なスコープを持つ束縛と呼ぶ方が正確です。特に、束縛の値を変更する方法はありません。同じ名前で新しい束縛を作ることだけができますが、以前の束縛が見えていた場所で新しい束縛が見えるようになるわけではありません。</p>

</div>

<!-- jq-example:sections/6/entries/0/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.bar as $x | .foo | . + $x'
```

入力

```text
{"foo":10, "bar":200}
```

出力 1

```text
210
```

<!-- jq-example:sections/6/entries/0/examples/0:end -->

<!-- jq-example:sections/6/entries/0/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '. as $i|[(.*2|. as $i| $i), $i]'
```

入力

```text
5
```

出力 1

```text
[10,5]
```

<!-- jq-example:sections/6/entries/0/examples/1:end -->

<!-- jq-example:sections/6/entries/0/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '. as [$a, $b, {c: $c}] | $a + $b + $c'
```

入力

```text
[2, 3, {"c": 4, "d": 5}]
```

出力 1

```text
9
```

<!-- jq-example:sections/6/entries/0/examples/2:end -->

<!-- jq-example:sections/6/entries/0/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq '.[] as [$a, $b] | {a: $a, b: $b}'
```

入力

```text
[[0], [0, 1], [2, 1, 0]]
```

出力 1

```text
{"a":0,"b":null}
```

出力 2

```text
{"a":0,"b":1}
```

出力 3

```text
{"a":2,"b":1}
```

<!-- jq-example:sections/6/entries/0/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/6/entries/1/title">

<h3 id="destructuring-alternative-operator">分割代入の代替演算子：<code>?//</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/1/body">

<p>分割代入の代替演算子は、複数の形式のいずれかを取り得る入力を、簡潔に分割代入するための仕組みを提供します。</p>
<p>リソースとそれに関連するイベントのリストを返すAPIがあり、各リソースの最初のイベントのuser_idとtimestampを取得したいとします。このAPIは、XMLから不器用に変換されたため、リソースに複数のイベントがある場合だけ、イベントを配列で囲みます。</p>
<pre><code>{"resources": [{"id": 1, "kind": "widget", "events": {"action": "create", "user_id": 1, "ts": 13}},&#10;               {"id": 2, "kind": "widget", "events": [{"action": "create", "user_id": 1, "ts": 14}, {"action": "destroy", "user_id": 1, "ts": 15}]}]}&#10;</code></pre>
<p>分割代入の代替演算子を使うと、この構造の違いを簡単に扱えます。</p>
<pre><code>.resources[] as {$id, $kind, events: {$user_id, $ts}} ?// {$id, $kind, events: [{$user_id, $ts}]} | {$user_id, $kind, $id, $ts}&#10;</code></pre>
<p>あるいは、入力が値の配列なのかオブジェクトなのか、はっきりしない場合は、次のように書けます。</p>
<pre><code>.[] as [$id, $kind, $user_id, $ts] ?// {$id, $kind, $user_id, $ts} | ...&#10;</code></pre>
<p>各代替パターンで、すべて同じ変数を定義する必要はありません。ただし、名前の付いたすべての変数は、その後の式で使えます。成功した代替パターンで一致しなかった変数は <code>null</code> になります。</p>
<pre><code>.resources[] as {$id, $kind, events: {$user_id, $ts}} ?// {$id, $kind, events: [{$first_user_id, $first_ts}]} | {$user_id, $first_user_id, $kind, $id, $ts, $first_ts}&#10;</code></pre>
<p>さらに、その後の式がエラーを返す場合、代替演算子は次の束縛を試みます。最後の代替パターンで発生したエラーは、そのまま伝えられます。</p>
<pre><code>[[3]] | .[] as [$a] ?// [$b] | if $a != null then error("err: \($a)") else {$a,$b} end&#10;</code></pre>

</div>

<!-- jq-example:sections/6/entries/1/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.[] as {$a, $b, c: {$d, $e}} ?// {$a, $b, c: [{$d, $e}]} | {$a, $b, $d, $e}'
```

入力

```text
[{"a": 1, "b": 2, "c": {"d": 3, "e": 4}}, {"a": 1, "b": 2, "c": [{"d": 3, "e": 4}]}]
```

出力 1

```text
{"a":1,"b":2,"d":3,"e":4}
```

出力 2

```text
{"a":1,"b":2,"d":3,"e":4}
```

<!-- jq-example:sections/6/entries/1/examples/0:end -->

<!-- jq-example:sections/6/entries/1/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.[] as {$a, $b, c: {$d}} ?// {$a, $b, c: [{$e}]} | {$a, $b, $d, $e}'
```

入力

```text
[{"a": 1, "b": 2, "c": {"d": 3, "e": 4}}, {"a": 1, "b": 2, "c": [{"d": 3, "e": 4}]}]
```

出力 1

```text
{"a":1,"b":2,"d":3,"e":null}
```

出力 2

```text
{"a":1,"b":2,"d":null,"e":4}
```

<!-- jq-example:sections/6/entries/1/examples/1:end -->

<!-- jq-example:sections/6/entries/1/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '.[] as [$a] ?// [$b] | if $a != null then error("err: \($a)") else {$a,$b} end'
```

入力

```text
[[3]]
```

出力 1

```text
{"a":null,"b":3}
```

<!-- jq-example:sections/6/entries/1/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/6/entries/2/title">

<h3 id="defining-functions">関数の定義</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/2/body">

<p>"def"構文を使って、フィルターに名前を付けられます。</p>
<pre><code>def increment: . + 1;&#10;</code></pre>
<p>その後は、<code>increment</code> を組込み関数と同様にフィルターとして使えます。実際、多くの組込み関数はこの方法で定義されています。関数は引数を受け取ることもできます。</p>
<pre><code>def map(f): [.[] | f];&#10;</code></pre>
<p>引数は、値では_なく_、<em>フィルター</em>（引数のない関数）として渡されます。同じ引数を、異なる入力で複数回参照できます。ここでは、<code>f</code> を入力配列の各要素に対して実行します。関数への引数は、値の引数よりも、コールバックに近い動作をします。この点を理解することが大切です。次の例を考えてください。</p>
<pre><code>def foo(f): f|f;&#10;5|foo(.*2)&#10;</code></pre>
<p>結果は20になります。<code>f</code> は <code>.*2</code> であり、最初の <code>f</code> の呼出しでは <code>.</code> が5、2回目では10（5 * 2）になるため、結果は20です。関数の引数はフィルターであり、フィルターは呼び出されるときに入力を必要とします。</p>
<p>単純な関数を定義するために、値の引数としての動作が欲しい場合は、変数を使えばよいだけです。</p>
<pre><code>def addvalue(f): f as $f | map(. + $f);&#10;</code></pre>
<p>または、次の省略形を使います。</p>
<pre><code>def addvalue($f): ...;&#10;</code></pre>
<p>どちらの定義でも、<code>addvalue(.foo)</code> は、現在の入力の <code>.foo</code> フィールドを配列の各要素に加えます。<code>addvalue(.[])</code> を呼び出すと、呼出し位置の <code>map(. + $f)</code> の部分が、<code>.</code> の値に含まれる各値に対して1回ずつ評価されることに注意してください。</p>
<p>同じ関数名を使った複数の定義が認められています。再定義すると、関数の引数の数が同じ以前の定義を置き換えますが、再定義より後の関数またはメインプログラムからの参照にだけ適用されます。後述のスコープの節も参照してください。</p>

</div>

<!-- jq-example:sections/6/entries/2/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'def addvalue(f): . + [f]; map(addvalue(.[0]))'
```

入力

```text
[[1,2],[10,20]]
```

出力 1

```text
[[1,2,1], [10,20,10]]
```

<!-- jq-example:sections/6/entries/2/examples/0:end -->

<!-- jq-example:sections/6/entries/2/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'def addvalue(f): f as $x | map(. + $x); addvalue(.[0])'
```

入力

```text
[[1,2],[10,20]]
```

出力 1

```text
[[1,2,1,2], [10,20,1,2]]
```

<!-- jq-example:sections/6/entries/2/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/6/entries/3/title">

<h3 id="scoping">スコープ</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/3/body">

<p>jqの記号には、値の束縛（「変数」とも呼ばれます）と関数の2種類があります。どちらも字句的なスコープを持ち、式が参照できるのは、自分より「左側」で定義された記号だけです。この規則の唯一の例外は、再帰関数を作れるように、関数が自分自身を参照できることです。</p>
<p>たとえば、次の式には、定義位置の「右側」では見えますが、「左側」では見えない束縛があります。<code>... | .*3 as
$times_three | [. + $times_three] | ...</code> です。次の式を考えてみてください。<code>... | (.*3 as
$times_three | [. + $times_three]) | ...</code> です。ここでは、束縛 <code>$times_three</code> は、閉じ括弧より後では_見えません_。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/4/title">

<h3 id="isempty"><code>isempty(exp)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/4/body">

<p><code>exp</code> が何も出力しない場合にtrueを返し、それ以外の場合にfalseを返します。</p>

</div>

<!-- jq-example:sections/6/entries/4/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'isempty(empty)'
```

入力

```text
null
```

出力 1

```text
true
```

<!-- jq-example:sections/6/entries/4/examples/0:end -->

<!-- jq-example:sections/6/entries/4/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'isempty(.[])'
```

入力

```text
[]
```

出力 1

```text
true
```

<!-- jq-example:sections/6/entries/4/examples/1:end -->

<!-- jq-example:sections/6/entries/4/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'isempty(.[])'
```

入力

```text
[1,2,3]
```

出力 1

```text
false
```

<!-- jq-example:sections/6/entries/4/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/6/entries/5/title">

<h3 id="limit"><code>limit(n; expr)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/5/body">

<p>関数 <code>limit</code> は、最大 <code>n</code> 個の出力を <code>expr</code> から取り出します。</p>

</div>

<!-- jq-example:sections/6/entries/5/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[limit(3; .[])]'
```

入力

```text
[0,1,2,3,4,5,6,7,8,9]
```

出力 1

```text
[0,1,2]
```

<!-- jq-example:sections/6/entries/5/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/6/entries/6/title">

<h3 id="skip"><code>skip(n; expr)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/6/body">

<p>関数 <code>skip</code> は、最初の <code>n</code> 個の出力を <code>expr</code> から飛ばします。</p>

</div>

<!-- jq-example:sections/6/entries/6/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[skip(3; .[])]'
```

入力

```text
[0,1,2,3,4,5,6,7,8,9]
```

出力 1

```text
[3,4,5,6,7,8,9]
```

<!-- jq-example:sections/6/entries/6/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/6/entries/7/title">

<h3 id="first-last-nth-2"><code>first(expr)</code>, <code>last(expr)</code>, <code>nth(n; expr)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/7/body">

<p>関数 <code>first(expr)</code> と <code>last(expr)</code> は、それぞれ、<code>expr</code> の最初と最後の値を取り出します。</p>
<p>関数 <code>nth(n; expr)</code> は、<code>expr</code> が出力するn番目の値を取り出します。<code>nth(n; expr)</code> は、<code>n</code> の負の値に対応していないことに注意してください。</p>

</div>

<!-- jq-example:sections/6/entries/7/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[first(range(.)), last(range(.)), nth(5; range(.))]'
```

入力

```text
10
```

出力 1

```text
[0,9,5]
```

<!-- jq-example:sections/6/entries/7/examples/0:end -->

<!-- jq-example:sections/6/entries/7/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '[first(empty), last(empty), nth(5; empty)]'
```

入力

```text
null
```

出力 1

```text
[]
```

<!-- jq-example:sections/6/entries/7/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/6/entries/8/title">

<h3 id="first-last-nth-1"><code>first</code>, <code>last</code>, <code>nth(n)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/8/body">

<p>関数 <code>first</code> と <code>last</code> は、<code>.</code> にある配列の最初と最後の値を、それぞれ取り出します。</p>
<p>関数 <code>nth(n)</code> は、<code>.</code> にある配列のn番目の値を取り出します。</p>

</div>

<!-- jq-example:sections/6/entries/8/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[range(.)]|[first, last, nth(5)]'
```

入力

```text
10
```

出力 1

```text
[0,9,5]
```

<!-- jq-example:sections/6/entries/8/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/6/entries/9/title">

<h3 id="reduce"><code>reduce</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/9/body">

<p><code>reduce</code> 構文は、式のすべての結果を1つの答えへ累積することで、まとめられるようにします。形式は <code>reduce EXP as $var (INIT; UPDATE)</code> です。例として、<code>[1,2,3]</code> を次の式に渡します。</p>
<pre><code>reduce .[] as $item (0; . + $item)&#10;</code></pre>
<p><code>.[]</code> が生成する各結果に対して、<code>. + $item</code> を実行し、入力値0から始めて合計を累積します。この例では、<code>.[]</code> は <code>1</code>、<code>2</code>、<code>3</code> を生成するため、次のような式を実行するのと似た効果があります。</p>
<pre><code>0 | 1 as $item | . + $item |&#10;    2 as $item | . + $item |&#10;    3 as $item | . + $item&#10;</code></pre>

</div>

<!-- jq-example:sections/6/entries/9/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'reduce .[] as $item (0; . + $item)'
```

入力

```text
[1,2,3,4,5]
```

出力 1

```text
15
```

<!-- jq-example:sections/6/entries/9/examples/0:end -->

<!-- jq-example:sections/6/entries/9/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'reduce .[] as [$i,$j] (0; . + $i * $j)'
```

入力

```text
[[1,2],[3,4],[5,6]]
```

出力 1

```text
44
```

<!-- jq-example:sections/6/entries/9/examples/1:end -->

<!-- jq-example:sections/6/entries/9/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'reduce .[] as {$x,$y} (null; .x += $x | .y += [$y])'
```

入力

```text
[{"x":"a","y":1},{"x":"b","y":2},{"x":"c","y":3}]
```

出力 1

```text
{"x":"abc","y":[1,2,3]}
```

<!-- jq-example:sections/6/entries/9/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/6/entries/10/title">

<h3 id="foreach"><code>foreach</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/10/body">

<p><code>foreach</code> 構文は <code>reduce</code> と似ていますが、<code>limit</code> や中間結果を生成する集約処理を構築できるようにすることを目的としています。</p>
<p>形式は <code>foreach EXP as $var (INIT; UPDATE; EXTRACT)</code> です。例として、<code>[1,2,3]</code> を次の式に渡します。</p>
<pre><code>foreach .[] as $item (0; . + $item; [$item, . * 2])&#10;</code></pre>
<p><code>reduce</code> 構文と同様に、<code>. + $item</code> を、<code>.[]</code> が生成する各結果に対して実行します。ただし、<code>[$item, . * 2]</code> は各中間値に対して実行します。この例では、中間値が <code>1</code>、<code>3</code>、<code>6</code> であるため、<code>foreach</code> 式は <code>[1,2]</code>、<code>[2,6]</code>、<code>[3,12]</code> を生成します。そのため、次のような式を実行するのと似た効果があります。</p>
<pre><code>0 | 1 as $item | . + $item | [$item, . * 2],&#10;    2 as $item | . + $item | [$item, . * 2],&#10;    3 as $item | . + $item | [$item, . * 2]&#10;</code></pre>
<p><code>EXTRACT</code> を省略した場合、恒等フィルターを使います。つまり、中間値をそのまま出力します。</p>

</div>

<!-- jq-example:sections/6/entries/10/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'foreach .[] as $item (0; . + $item)'
```

入力

```text
[1,2,3,4,5]
```

出力 1

```text
1
```

出力 2

```text
3
```

出力 3

```text
6
```

出力 4

```text
10
```

出力 5

```text
15
```

<!-- jq-example:sections/6/entries/10/examples/0:end -->

<!-- jq-example:sections/6/entries/10/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'foreach .[] as $item (0; . + $item; [$item, . * 2])'
```

入力

```text
[1,2,3,4,5]
```

出力 1

```text
[1,2]
```

出力 2

```text
[2,6]
```

出力 3

```text
[3,12]
```

出力 4

```text
[4,20]
```

出力 5

```text
[5,30]
```

<!-- jq-example:sections/6/entries/10/examples/1:end -->

<!-- jq-example:sections/6/entries/10/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'foreach .[] as $item (0; . + 1; {index: ., $item})'
```

入力

```text
["foo", "bar", "baz"]
```

出力 1

```text
{"index":1,"item":"foo"}
```

出力 2

```text
{"index":2,"item":"bar"}
```

出力 3

```text
{"index":3,"item":"baz"}
```

<!-- jq-example:sections/6/entries/10/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/6/entries/11/title">

<h3 id="recursion">再帰</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/11/body">

<p>前述のとおり、<code>recurse</code> は再帰を使い、どのjq関数も再帰関数になれます。組込み関数 <code>while</code> も再帰によって実装されています。</p>
<p>再帰呼出しの左側にある式が最後の値を出力するとき、末尾呼出しが最適化されます。実際には、再帰呼出しの左側にある式が、各入力に対して2つ以上の出力を生成しないようにするという意味です。</p>
<p>例：</p>
<pre><code>def recurse(f): def r: ., (f | select(. != null) | r); r;&#10;&#10;def while(cond; update):&#10;  def _while:&#10;    if cond then ., (update | _while) else empty end;&#10;  _while;&#10;&#10;def repeat(exp):&#10;  def _repeat:&#10;    exp, _repeat;&#10;  _repeat;&#10;</code></pre>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/12/title">

<h3 id="generators-and-iterators">ジェネレーターとイテレーター</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/6/entries/12/body">

<p>jqの演算子や関数の中には、各入力に対して0個、1個、または複数の値を生成できるという意味で、実際にジェネレーターであるものがあります。ジェネレーターを持つ他のプログラミング言語と同様です。たとえば、<code>.[]</code> は入力のすべての値を生成します。入力は配列かオブジェクトでなければなりません。<code>range(0; 10)</code> は0から10の間の整数を生成する、というようになります。</p>
<p>カンマ演算子もジェネレーターです。まずカンマの左側の式が生成する値を生成し、その後にカンマの右側の式が生成する値を生成します。</p>
<p>組込み関数 <code>empty</code> は、出力を0個生成するジェネレーターです。組込み関数 <code>empty</code> は、直前のジェネレーター式へバックトラックします。</p>
<p>すべてのjq関数は、組込みジェネレーターを使うだけでジェネレーターになれます。再帰とカンマ演算子だけを使って、新しいジェネレーターを構築することもできます。再帰呼出しが「末尾位置」にあれば、ジェネレーターは効率的になります。以下の例では、<code>_range</code> が自分自身を呼び出す再帰呼出しが末尾位置にあります。この例は、末尾再帰、ジェネレーターの構築、下位関数という3つの高度な話題を示します。</p>

</div>

<!-- jq-example:sections/6/entries/12/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'def range(init; upto; by): def _range: if (by > 0 and . < upto) or (by < 0 and . > upto) then ., ((.+by)|_range) else empty end; if init == upto then empty elif by == 0 then init else init|_range end; range(0; 10; 3)'
```

入力

```text
null
```

出力 1

```text
0
```

出力 2

```text
3
```

出力 3

```text
6
```

出力 4

```text
9
```

<!-- jq-example:sections/6/entries/12/examples/0:end -->

<!-- jq-example:sections/6/entries/12/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'def while(cond; update): def _while: if cond then ., (update | _while) else empty end; _while; [while(.<100; .*2)]'
```

入力

```text
1
```

出力 1

```text
[1,2,4,8,16,32,64]
```

<!-- jq-example:sections/6/entries/12/examples/1:end -->

## 出典と通知

出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。

[公式マニュアル](https://jqlang.org/manual/v1.8/) · [固定原典](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [ライセンス](https://creativecommons.org/licenses/by/3.0/) · [原著作権・第三者通知](/docs/jq/v1-8-2/ja/02-license/01-original-notices/) · [ライセンス全文](/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/)
