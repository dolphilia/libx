---
title: "型と値"
order: 3
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/2/title">

<h2 id="types-and-values">型と値</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/2/body">

<p>jqはJSONと同じデータ型を扱えます。数値、文字列、真偽値、配列、オブジェクト（JSONでは、キーが文字列だけであるハッシュを指します）、そして"null"です。</p>
<p>真偽値、null、文字列、数値は、JSONと同じ形式で記述します。jqの他のすべてと同様に、これらの単純な値も入力を受け取り、出力を生成します。<code>42</code> は有効なjqの式で、入力を受け取って無視し、代わりに42を返します。</p>
<p>jqの数値は、内部ではIEEE754の倍精度による近似値として表現されます。数値がリテラルであっても、先行するフィルターの結果であっても、数値に対する算術演算は倍精度の浮動小数点数の結果を生成します。</p>
<p>ただし、リテラルを解析する際、jqは元のリテラル文字列を保存します。この値に変更を加えなければ、倍精度への変換で精度が失われる場合でも、元の形式のまま出力されます。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/2/entries/0/title">

<h3 id="array-construction">配列の構築：<code>[]</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/2/entries/0/body">

<p>JSONと同様に、<code>[]</code> は <code>[1,2,3]</code> のように配列を構築するために使います。配列の要素には、パイプラインを含む任意のjqの式を使えます。すべての式が生成するすべての結果が、1つの大きな配列にまとめられます。<code>[.foo, .bar, .baz]</code> のように既知の個数の値から配列を構築するためにも、<code>[.items[].name]</code> のようにフィルターのすべての結果を配列へ「集める」ためにも使えます。</p>
<p>","演算子を理解すると、jqの配列構文を別の観点から見られます。式 <code>[1,2,3]</code> は、カンマ区切りの配列専用の組込み構文を使っているわけではありません。3つの別々の結果を生成する式1,2,3に、結果を集める <code>[]</code> 演算子を適用しています。</p>
<p>4つの結果を生成するフィルター <code>X</code> がある場合、式 <code>[X]</code> は、4要素の配列という1つの結果を生成します。</p>

</div>

<!-- jq-example:sections/2/entries/0/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[.user, .projects[]]'
```

入力

```text
{"user":"stedolan", "projects": ["jq", "wikiflow"]}
```

出力 1

```text
["stedolan", "jq", "wikiflow"]
```

<!-- jq-example:sections/2/entries/0/examples/0:end -->

<!-- jq-example:sections/2/entries/0/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '[ .[] | . * 2]'
```

入力

```text
[1, 2, 3]
```

出力 1

```text
[2, 4, 6]
```

<!-- jq-example:sections/2/entries/0/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/2/entries/1/title">

<h3 id="object-construction">オブジェクトの構築：<code>{}</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/2/entries/1/body">

<p>JSONと同様に、<code>{}</code> は <code>{"a": 42, "b": 17}</code> のようにオブジェクト（辞書やハッシュとも呼ばれます）を構築するために使います。</p>
<p>キーが「識別子のような」形式であれば、<code>{a:42, b:17}</code> のように引用符を省略できます。キーの式として変数参照を使うと、その変数の値がキーになります。定数リテラル、識別子、変数参照以外のキーの式は、<code>{("a"+"b"):59}</code> のように丸括弧で囲む必要があります。</p>
<p>値には任意の式を使えます。ただし、たとえばコロンを含む場合などには、丸括弧で囲む必要があることがあります。その式は、{}という式への入力に適用されます。すべてのフィルターには入力と出力があることを思い出してください。</p>
<pre><code>{foo: .bar}&#10;</code></pre>
<p>は、JSONオブジェクト <code>{"foo": 42}</code> を生成します（入力としてJSONオブジェクト <code>{"bar":42, "baz":43}</code> を与えた場合）。これを使って、オブジェクトの特定のフィールドを選択できます。入力が"user"、"title"、"id"、"content"フィールドを持つオブジェクトで、"user"と"title"だけが必要なら、次のように書けます。</p>
<pre><code>{user: .user, title: .title}&#10;</code></pre>
<p>これはよく使われるため、短縮構文 <code>{user, title}</code> があります。</p>
<p>式の1つが複数の結果を生成すると、複数の辞書が生成されます。入力が次のとき、</p>
<pre><code>{"user":"stedolan","titles":["JQ Primer", "More JQ"]}&#10;</code></pre>
<p>次の式は、</p>
<pre><code>{user, title: .titles[]}&#10;</code></pre>
<p>2つの出力を生成します。</p>
<pre><code>{"user":"stedolan", "title": "JQ Primer"}&#10;{"user":"stedolan", "title": "More JQ"}&#10;</code></pre>
<p>キーを丸括弧で囲むと、式として評価されます。上と同じ入力に対して、</p>
<pre><code>{(.user): .titles}&#10;</code></pre>
<p>は次を生成します。</p>
<pre><code>{"stedolan": ["JQ Primer", "More JQ"]}&#10;</code></pre>
<p>キーとして変数参照を使うと、変数の値がキーになります。値を指定しない場合は、変数名がキーになり、その変数の値が値になります。</p>
<pre><code>"f o o" as $foo | "b a r" as $bar | {$foo, $bar:$foo}&#10;</code></pre>
<p>は次を生成します。</p>
<pre><code>{"foo":"f o o","b a r":"f o o"}&#10;</code></pre>

</div>

<!-- jq-example:sections/2/entries/1/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '{user, title: .titles[]}'
```

入力

```text
{"user":"stedolan","titles":["JQ Primer", "More JQ"]}
```

出力 1

```text
{"user":"stedolan", "title": "JQ Primer"}
```

出力 2

```text
{"user":"stedolan", "title": "More JQ"}
```

<!-- jq-example:sections/2/entries/1/examples/0:end -->

<!-- jq-example:sections/2/entries/1/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '{(.user): .titles}'
```

入力

```text
{"user":"stedolan","titles":["JQ Primer", "More JQ"]}
```

出力 1

```text
{"stedolan": ["JQ Primer", "More JQ"]}
```

<!-- jq-example:sections/2/entries/1/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/2/entries/2/title">

<h3 id="recursive-descent">再帰的な走査：<code>..</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/2/entries/2/body">

<p><code>.</code> を再帰的に走査し、すべての値を生成します。これは、引数なしの組込み関数 <code>recurse</code>（後述）と同じです。XPathの <code>//</code> 演算子に似た動作を意図しています。<code>..a</code> は使えないため、代わりに <code>.. | .a</code> を使ってください。以下の実行例では、<code>.. | .a?</code> を使って、<code>.</code> の「下」にあるオブジェクト内で、キー"a"のすべての値を探します。</p>
<p><code>path(EXP)</code>（これも後述）や <code>?</code> 演算子と組み合わせると、特に便利です。</p>

</div>

<!-- jq-example:sections/2/entries/2/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.. | .a?'
```

入力

```text
[[{"a":1}]]
```

出力 1

```text
1
```

<!-- jq-example:sections/2/entries/2/examples/0:end -->

## 訳注

訳注：この節の数値に関する一般的な説明を読む際は、Basic filtersのIdentityで示された、実装とビルド設定による精度保持・比較の条件も参照してください。入力リテラルの保持がすべてのビルドで保証されるという意味には解釈しないでください。have_literal_numbersとhave_decnumの説明も参考になります。

[原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/03-types-and-values/#types-and-values) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/02-basic-filters/#identity) · [原典の該当項目（en）](/docs/jq/v1-8-2/en/01-guide/04-builtin-operators-and-functions/#have_literal_numbers) · [原典の該当項目（en）](/docs/jq/v1-8-2/en/01-guide/04-builtin-operators-and-functions/#have_decnum)

## 出典と通知

出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。

[公式マニュアル](https://jqlang.org/manual/v1.8/) · [固定原典](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [ライセンス](https://creativecommons.org/licenses/by/3.0/) · [原著作権・第三者通知](/docs/jq/v1-8-2/ja/02-license/01-original-notices/) · [ライセンス全文](/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/)
