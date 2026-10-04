---
title: "代入"
order: 11
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/10/title">

<h2 id="assignment">代入</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/10/body">

<p>jqの代入は、ほとんどのプログラミング言語と少し異なります。jqは、参照とコピーを区別しません。2つのオブジェクトや配列は、等しいか等しくないかのどちらかであり、「同じオブジェクト」か「別のオブジェクト」かという追加の概念はありません。</p>
<p>オブジェクトに、配列である2つのフィールド <code>.foo</code> と <code>.bar</code> があり、<code>.foo</code> に何かを追加しても、<code>.bar</code> は大きくなりません。以前に <code>.bar = .foo</code> と設定していても同じです。Python、Java、Ruby、JavaScriptなどの言語に慣れている場合は、jqが代入前にすべてのオブジェクトを完全にディープコピーするかのように考えられます。性能のため、実際にはそうしていませんが、大まかな考え方はそのようになります。</p>
<p>このため、jqで循環する値を構築することはできません。たとえば、最初の要素が自分自身である配列は作れません。これは意図的なもので、jqプログラムが生成できるものをすべてJSONで表現できるようにしています。</p>
<p>jqのすべての代入演算子では、左辺（LHS）がパス式です。右辺（RHS）は、左辺のパス式が指定するパスへ設定する値を提供します。</p>
<p>jqの値は、常に不変です。内部では、集約処理を使って、<code>.</code> を置き換える新しい値を計算することで代入を行います。その値には、必要な代入をすべて <code>.</code> に適用してから、変更した値を出力します。次の例で分かりやすくなるかもしれません。<code>{a:{b:{c:1}}} | (.a.b|=3), .</code> は、<code>{"a":{"b":3}}</code> と <code>{"a":{"b":{"c":1}}}</code> を出力します。最後の部分式 <code>.</code> が見るのは、変更した値ではなく、元の値だからです。</p>
<p>多くの場合、<code>|=</code> や <code>+=</code> のような変更を行う代入演算子を使い、<code>=</code> は使わない方がよいでしょう。</p>
<p>代入演算子の左辺は、<code>.</code> 内の値を参照することに注意してください。そのため、<code>$var.foo = 1</code> は期待どおりには動きません。<code>$var.foo</code> は、<code>.</code> 内の有効または有用なパス式ではありません。代わりに <code>$var | .foo =
1</code> を使います。</p>
<p>また、<code>.a,.b=0</code> は <code>.a</code> と <code>.b</code> の両方を設定するわけではありませんが、<code>(.a,.b)=0</code> は両方を設定します。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/10/entries/0/title">

<h3 id="update-assignment">更新代入：<code>|=</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/10/entries/0/body">

<p>これは「更新」演算子 <code>|=</code> です。右辺にフィルターを取り、代入対象の <code>.</code> のプロパティの古い値を、この式に渡して処理することで、新しい値を計算します。たとえば、<code>(.foo, .bar) |= .+1</code> は、<code>foo</code> フィールドを入力の <code>foo</code> に1を加えた値に、<code>bar</code> フィールドを入力の <code>bar</code> に1を加えた値に設定したオブジェクトを構築します。</p>
<p>左辺には、一般的なパス式を使えます。<code>path()</code> を参照してください。</p>
<p><code>|=</code> の左辺が参照するのは、<code>.</code> 内の値であることに注意してください。そのため、<code>$var.foo |= . + 1</code> は期待どおりには動きません。<code>$var.foo</code> は、<code>.</code> 内の有効または有用なパス式ではありません。代わりに、<code>$var |
.foo |= . + 1</code> を使います。</p>
<p>右辺が何も出力しない場合（つまり、<code>empty</code> の場合）、<code>del(path)</code> と同様に、左辺のパスを削除します。</p>
<p>右辺が複数の値を出力する場合、最初の値だけを使います。互換性に関する注意：jq 1.5以前のリリースでは、最後の値だけを使っていました。</p>

</div>

<!-- jq-example:sections/10/entries/0/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '(..|select(type=="boolean")) |= if . then 1 else 0 end'
```

入力

```text
[true,false,[5,true,[true,[false]],false]]
```

出力 1

```text
[1,0,[5,1,[1,[0]],0]]
```

<!-- jq-example:sections/10/entries/0/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/10/entries/1/title">

<h3 id="arithmetic-update-assignment">算術更新代入：<code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>, <code>//=</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/10/entries/1/body">

<p>jqには、<code>a op= b</code> という形式の演算子がいくつかあり、すべて <code>a |= . op b</code> と同じです。そのため、<code>+= 1</code> は、<code>|= . + 1</code> と同じ意味で、値を1増やすために使えます。</p>

</div>

<!-- jq-example:sections/10/entries/1/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.foo += 1'
```

入力

```text
{"foo": 42}
```

出力 1

```text
{"foo": 43}
```

<!-- jq-example:sections/10/entries/1/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/10/entries/2/title">

<h3 id="plain-assignment">通常の代入：<code>=</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/10/entries/2/body">

<p>これは通常の代入演算子です。他の代入演算子と違い、右辺（RHS）への入力は、左辺（LHS）のパスにある値ではなく、左辺への入力と同じです。また、右辺が出力するすべての値を使います。以下の例を参照してください。</p>
<p><code>=</code> の右辺が複数の値を生成する場合、jqはそれぞれの値に対して、左辺のパスをその値に設定し、変更した <code>.</code> を出力します。たとえば、<code>(.a,.b) = range(2)</code> は、<code>{"a":0,"b":0}</code> を出力し、その後に <code>{"a":1,"b":1}</code> を出力します。前述の「更新」形式の代入では、このようにはなりません。</p>
<p>次の例で、<code>=</code> と <code>|=</code> の違いが分かるでしょう。</p>
<p>入力 <code>{"a": {"b": 10}, "b": 20}</code> を、次のプログラムに与えます。</p>
<pre><code>.a = .b&#10;</code></pre>
<p>および、</p>
<pre><code>.a |= .b&#10;</code></pre>
<p>前者は、入力の <code>a</code> フィールドを入力の <code>b</code> フィールドに設定し、<code>{"a": 20, "b": 20}</code> を出力します。後者は、入力の <code>a</code> フィールドを、<code>a</code> フィールド内の <code>b</code> フィールドに設定し、<code>{"a": 10, "b": 20}</code> を出力します。</p>

</div>

<!-- jq-example:sections/10/entries/2/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.a = .b'
```

入力

```text
{"a": {"b": 10}, "b": 20}
```

出力 1

```text
{"a":20,"b":20}
```

<!-- jq-example:sections/10/entries/2/examples/0:end -->

<!-- jq-example:sections/10/entries/2/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.a |= .b'
```

入力

```text
{"a": {"b": 10}, "b": 20}
```

出力 1

```text
{"a":10,"b":20}
```

<!-- jq-example:sections/10/entries/2/examples/1:end -->

<!-- jq-example:sections/10/entries/2/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '(.a, .b) = range(3)'
```

入力

```text
null
```

出力 1

```text
{"a":0,"b":0}
```

出力 2

```text
{"a":1,"b":1}
```

出力 3

```text
{"a":2,"b":2}
```

<!-- jq-example:sections/10/entries/2/examples/2:end -->

<!-- jq-example:sections/10/entries/2/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq '(.a, .b) |= range(3)'
```

入力

```text
null
```

出力 1

```text
{"a":0,"b":0}
```

<!-- jq-example:sections/10/entries/2/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/10/entries/3/title">

<h3 id="complex-assignments">複雑な代入</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/10/entries/3/body">

<p>jqの代入の左辺には、ほとんどの言語よりも、多くのものを指定できます。左辺の単純なフィールドへのアクセスはすでに見ました。配列へのアクセスも、同じように使えます。</p>
<pre><code>.posts[0].title = "JQ Manual"&#10;</code></pre>
<p>意外かもしれませんが、左側の式は、入力文書の異なる位置を参照する複数の結果を生成できます。</p>
<pre><code>.posts[].comments |= . + ["this is great"]&#10;</code></pre>
<p>この例は、入力内の各記事の"comments"配列に、文字列"this is great"を追加します。入力は、記事の配列である"posts"フィールドを持つオブジェクトです。</p>
<p>jqが'a = b'のような代入に出会うと、aを実行するときに、入力文書の一部を選択するためにたどった「パス」を記録します。代入を実行するときには、このパスを使って、入力のどの部分を変更するかを見つけます。等号の左辺には、どのフィルターでも使えます。そのフィルターが入力から選択するパスが、代入を行う場所になります。</p>
<p>これは非常に強力な操作です。前述の"blog"入力を使って、ブログ記事にコメントを追加したいとします。今回は、"stedolan"が書いた記事だけにコメントしたいとします。前述の"select"関数で、そのような記事を見つけられます。</p>
<pre><code>.posts[] | select(.author == "stedolan")&#10;</code></pre>
<p>この操作が提供するパスは、"stedolan"が書いた各記事を指しています。以前と同じ方法で、それぞれにコメントできます。</p>
<pre><code>(.posts[] | select(.author == "stedolan") | .comments) |=&#10;    . + ["terrible."]&#10;</code></pre>

</div>

## 出典と通知

出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。

[公式マニュアル](https://jqlang.org/manual/v1.8/) · [固定原典](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [ライセンス](https://creativecommons.org/licenses/by/3.0/) · [原著作権・第三者通知](/docs/jq/v1-8-2/ja/02-license/01-original-notices/) · [ライセンス全文](/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/)
