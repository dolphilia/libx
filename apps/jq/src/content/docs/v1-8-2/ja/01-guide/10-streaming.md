---
title: "ストリーミング"
order: 10
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"出典と通知\">出典と通知</h2>\n<p>出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">公式マニュアル</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">固定原典</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">ライセンス</a> · <a href=\"/docs/jq/v1-8-2/ja/02-license/01-original-notices/\">原著作権・第三者通知</a> · <a href=\"/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/\">ライセンス全文</a></p>"}]
---

<div class="jq-upstream-field" data-source-key="sections/9/title">

<h2 id="streaming">ストリーミング</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/9/body">

<p><code>--stream</code> オプションを使うと、jqは入力テキストをストリーミング形式で解析できます。そのため、大きなJSONテキストを、解析が完了してからではなく、すぐに処理し始められます。1GBの単一のJSONテキストがある場合、ストリーミングによって、より早く処理できます。</p>
<p>ただし、ストリーミングを扱うのは簡単ではありません。jqプログラムの入力が、<code>[&lt;path&gt;, &lt;leaf-value&gt;]</code> や、いくつかの別の形式になるためです。</p>
<p>ストリームを扱いやすくするため、いくつかの組込み関数があります。</p>
<p>以下の例では、<code>["a",["b"]]</code> のストリーミング形式を使います。これは <code>[[0],"a"],[[1,0],"b"],[[1,0]],[[1]]</code> です。</p>
<p>ストリーミング形式には、<code>[&lt;path&gt;, &lt;leaf-value&gt;]</code>（スカラー値、空の配列、空のオブジェクトを示すもの）と、<code>[&lt;path&gt;]</code>（配列またはオブジェクトの終わりを示すもの）が含まれます。将来のjqを <code>--stream</code> と <code>--seq</code> で実行した場合、入力テキストの解析に失敗したときに、<code>["error message"]</code> のような追加の形式を出力する可能性があります。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/9/entries/0/title">

<h3 id="truncate_stream"><code>truncate_stream(stream_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/9/entries/0/body">

<p>数値を入力として受け取り、指定したストリーミング式の出力から、その数に対応する個数のパス要素を左側から切り落とします。</p>

</div>

<!-- jq-example:sections/9/entries/0/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'truncate_stream([[0],"a"],[[1,0],"b"],[[1,0]],[[1]])'
```

入力

```text
1
```

出力 1

```text
[[0],"b"]
```

出力 2

```text
[[0]]
```

<!-- jq-example:sections/9/entries/0/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/9/entries/1/title">

<h3 id="fromstream"><code>fromstream(stream_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/9/entries/1/body">

<p>ストリーム式の出力に対応する値を出力します。</p>

</div>

<!-- jq-example:sections/9/entries/1/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'fromstream(1|truncate_stream([[0],"a"],[[1,0],"b"],[[1,0]],[[1]]))'
```

入力

```text
null
```

出力 1

```text
["b"]
```

<!-- jq-example:sections/9/entries/1/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/9/entries/2/title">

<h3 id="tostream"><code>tostream</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/9/entries/2/body">

<p>組込み関数 <code>tostream</code> は、入力のストリーミング形式を出力します。</p>

</div>

<!-- jq-example:sections/9/entries/2/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '. as $dot|fromstream($dot|tostream)|.==$dot'
```

入力

```text
[0,[1,{"a":1},{"b":2}]]
```

出力 1

```text
true
```

<!-- jq-example:sections/9/entries/2/examples/0:end -->

