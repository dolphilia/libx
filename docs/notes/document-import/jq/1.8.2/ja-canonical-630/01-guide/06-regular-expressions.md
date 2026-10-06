---
title: "正規表現"
order: 6
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/5/title">

<h2 id="regular-expressions">正規表現</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/body">

<p>jqは、PHP、TextMate、Sublime Textなどと同様に、<a href="https://github.com/kkos/oniguruma/blob/master/doc/RE">Oniguruma正規表現ライブラリ</a>を使っています。そのため、ここではjq固有の点を中心に説明します。</p>
<p>Onigurumaは複数の正規表現の構文に対応しています。jqが使うのは<a href="https://github.com/kkos/oniguruma/blob/master/doc/SYNTAX.md">"Perl NG"（名前付きグループを持つPerl）</a>の構文であることを知っておく必要があります。</p>
<p>jqの正規表現フィルターは、次のいずれかの形式で使えるように定義されています。</p>
<pre><code>STRING | FILTER(REGEX)&#10;STRING | FILTER(REGEX; FLAGS)&#10;STRING | FILTER([REGEX])&#10;STRING | FILTER([REGEX, FLAGS])&#10;</code></pre>
<p>ここで、各要素は次のようになります。</p>
<ul>
<li>STRING、REGEX、FLAGSはjqの文字列で、jqの文字列への式の埋込みが適用されます。</li>
<li>REGEXは、式の埋込み後に、有効な正規表現である必要があります。</li>
<li>FILTERは、後述する <code>test</code>、<code>match</code>、<code>capture</code> のいずれかです。</li>
</ul>
<p>REGEXはJSON文字列に評価される必要があるため、正規表現を構成するための一部の文字をエスケープしなければなりません。たとえば、空白文字を表す正規表現 <code>\s</code> は、<code>"\\s"</code> と書きます。</p>
<p>FLAGSは、対応するフラグを1つ以上含む文字列です。</p>
<ul>
<li><code>g</code> - 全体検索（最初だけでなく、すべての一致を見つける）</li>
<li><code>i</code> - 大文字と小文字を区別しない検索</li>
<li><code>m</code> - 複数行モード（<code>.</code> が改行にも一致する）</li>
<li><code>n</code> - 空の一致を無視する</li>
<li><code>p</code> - sとmの両方のモードを有効にする</li>
<li><code>s</code> - 単一行モード（<code>^</code> -&gt; <code>\A</code>、<code>$</code> -&gt; <code>\Z</code>）</li>
<li><code>l</code> - 可能な限り長い一致を見つける</li>
<li><code>x</code> - 拡張正規表現形式（空白とコメントを無視する）</li>
</ul>
<p><code>x</code> フラグで空白に一致させるには、<code>\s</code> を使います。例：</p>
<pre><code>jq -n '"a b" | test("a\\sb"; "x")'&#10;</code></pre>
<p>一部のフラグは、REGEX内でも指定できることに注意してください。例：</p>
<pre><code>jq -n '("test", "TEst", "teST", "TEST") | test("(?i)te(?-i)st")'&#10;</code></pre>
<p>これは、<code>true</code>、<code>true</code>、<code>false</code>、<code>false</code> に評価されます。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/0/title">

<h3 id="test"><code>test(val)</code>, <code>test(regex; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/0/body">

<p><code>match</code> と同様ですが、一致オブジェクトは返しません。正規表現が入力に一致するかどうかに応じて、<code>true</code> または <code>false</code> だけを返します。</p>

</div>

<!-- jq-example:sections/5/entries/0/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'test("foo")'
```

入力

```text
"foo"
```

出力 1

```text
true
```

<!-- jq-example:sections/5/entries/0/examples/0:end -->

<!-- jq-example:sections/5/entries/0/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.[] | test("a b c # spaces are ignored"; "ix")'
```

入力

```text
["xabcd", "ABC"]
```

出力 1

```text
true
```

出力 2

```text
true
```

<!-- jq-example:sections/5/entries/0/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/1/title">

<h3 id="match"><code>match(val)</code>, <code>match(regex; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/1/body">

<p><strong>match</strong>は、見つかった一致ごとにオブジェクトを出力します。一致には、次のフィールドがあります。</p>
<ul>
<li><code>offset</code> - 入力の先頭からのオフセット。UTF-8コードポイント単位</li>
<li><code>length</code> - 一致の長さ。UTF-8コードポイント単位</li>
<li><code>string</code> - 一致した文字列</li>
<li><code>captures</code> - キャプチャグループを表すオブジェクトの配列</li>
</ul>
<p>キャプチャグループのオブジェクトには、次のフィールドがあります。</p>
<ul>
<li><code>offset</code> - 入力の先頭からのオフセット。UTF-8コードポイント単位</li>
<li><code>length</code> - このキャプチャグループの長さ。UTF-8コードポイント単位</li>
<li><code>string</code> - キャプチャされた文字列</li>
<li><code>name</code> - キャプチャグループの名前（名前なしの場合は <code>null</code>）</li>
</ul>
<p>何にも一致しなかったキャプチャグループは、オフセット-1を返します。</p>

</div>

<!-- jq-example:sections/5/entries/1/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'match("(abc)+"; "g")'
```

入力

```text
"abc abc"
```

出力 1

```text
{"offset": 0, "length": 3, "string": "abc", "captures": [{"offset": 0, "length": 3, "string": "abc", "name": null}]}
```

出力 2

```text
{"offset": 4, "length": 3, "string": "abc", "captures": [{"offset": 4, "length": 3, "string": "abc", "name": null}]}
```

<!-- jq-example:sections/5/entries/1/examples/0:end -->

<!-- jq-example:sections/5/entries/1/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'match("foo")'
```

入力

```text
"foo bar foo"
```

出力 1

```text
{"offset": 0, "length": 3, "string": "foo", "captures": []}
```

<!-- jq-example:sections/5/entries/1/examples/1:end -->

<!-- jq-example:sections/5/entries/1/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'match(["foo", "ig"])'
```

入力

```text
"foo bar FOO"
```

出力 1

```text
{"offset": 0, "length": 3, "string": "foo", "captures": []}
```

出力 2

```text
{"offset": 8, "length": 3, "string": "FOO", "captures": []}
```

<!-- jq-example:sections/5/entries/1/examples/2:end -->

<!-- jq-example:sections/5/entries/1/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq 'match("foo (?<bar123>bar)? foo"; "ig")'
```

入力

```text
"foo bar foo foo  foo"
```

出力 1

```text
{"offset": 0, "length": 11, "string": "foo bar foo", "captures": [{"offset": 4, "length": 3, "string": "bar", "name": "bar123"}]}
```

出力 2

```text
{"offset": 12, "length": 8, "string": "foo  foo", "captures": [{"offset": -1, "length": 0, "string": null, "name": "bar123"}]}
```

<!-- jq-example:sections/5/entries/1/examples/3:end -->

<!-- jq-example:sections/5/entries/1/examples/4:start -->

#### 実行例 5

コマンド

```sh
jq '[ match("."; "g")] | length'
```

入力

```text
"abc"
```

出力 1

```text
3
```

<!-- jq-example:sections/5/entries/1/examples/4:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/2/title">

<h3 id="capture"><code>capture(val)</code>, <code>capture(regex; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/2/body">

<p>名前付きキャプチャをJSONオブジェクトにまとめます。各キャプチャの名前をキーとし、一致した文字列を対応する値とします。</p>

</div>

<!-- jq-example:sections/5/entries/2/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'capture("(?<a>[a-z]+)-(?<n>[0-9]+)")'
```

入力

```text
"xyzzy-14"
```

出力 1

```text
{ "a": "xyzzy", "n": "14" }
```

<!-- jq-example:sections/5/entries/2/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/3/title">

<h3 id="scan"><code>scan(regex)</code>, <code>scan(regex; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/3/body">

<p>入力のうち、正規表現に一致する重なりのない部分文字列を、ストリームとして出力します。フラグが指定されていれば、それに従います。一致がなければ、ストリームは空です。各入力文字列のすべての一致をまとめて取得するには、<code>[ expr ]</code> という書き方を使います。たとえば、<code>[ scan(regex) ]</code> です。正規表現にキャプチャグループが含まれている場合、フィルターは配列のストリームを出力し、各配列にはキャプチャされた文字列が入ります。</p>

</div>

<!-- jq-example:sections/5/entries/3/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'scan("c")'
```

入力

```text
"abcdefabc"
```

出力 1

```text
"c"
```

出力 2

```text
"c"
```

<!-- jq-example:sections/5/entries/3/examples/0:end -->

<!-- jq-example:sections/5/entries/3/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'scan("(a+)(b+)")'
```

入力

```text
"abaabbaaabbb"
```

出力 1

```text
["a","b"]
```

出力 2

```text
["aa","bb"]
```

出力 3

```text
["aaa","bbb"]
```

<!-- jq-example:sections/5/entries/3/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/4/title">

<h3 id="split-2"><code>split(regex; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/4/body">

<p>入力文字列を、正規表現の各一致箇所で分割します。</p>
<p>後方互換性のため、引数を1つ指定して呼び出した <code>split</code> は、正規表現ではなく文字列で分割します。</p>

</div>

<!-- jq-example:sections/5/entries/4/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'split(", *"; null)'
```

入力

```text
"ab,cd, ef"
```

出力 1

```text
["ab","cd","ef"]
```

<!-- jq-example:sections/5/entries/4/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/5/title">

<h3 id="splits"><code>splits(regex)</code>, <code>splits(regex; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/5/body">

<p>対応する <code>split</code> と同じ結果を、配列ではなくストリームとして提供します。</p>

</div>

<!-- jq-example:sections/5/entries/5/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'splits(", *")'
```

入力

```text
"ab,cd,   ef, gh"
```

出力 1

```text
"ab"
```

出力 2

```text
"cd"
```

出力 3

```text
"ef"
```

出力 4

```text
"gh"
```

<!-- jq-example:sections/5/entries/5/examples/0:end -->

<!-- jq-example:sections/5/entries/5/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'splits(",? *"; "n")'
```

入力

```text
"ab,cd ef,  gh"
```

出力 1

```text
"ab"
```

出力 2

```text
"cd"
```

出力 3

```text
"ef"
```

出力 4

```text
"gh"
```

<!-- jq-example:sections/5/entries/5/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/6/title">

<h3 id="sub"><code>sub(regex; tostring)</code>, <code>sub(regex; tostring; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/6/body">

<p>入力文字列内の正規表現の最初の一致を、式の埋込み後の <code>tostring</code> で置き換えて得られる文字列を出力します。<code>tostring</code> はjqの文字列、またはそのような文字列のストリームである必要があります。各文字列は、名前付きキャプチャへの参照を含められます。名前付きキャプチャは、実質的に、<code>capture</code> が構築するようなJSONオブジェクトとして <code>tostring</code> に渡されます。そのため、"x"という名前でキャプチャされた変数への参照は、<code>"\(.x)"</code> という形式になります。</p>

</div>

<!-- jq-example:sections/5/entries/6/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'sub("[^a-z]*(?<x>[a-z]+)"; "Z\(.x)"; "g")'
```

入力

```text
"123abc456def"
```

出力 1

```text
"ZabcZdef"
```

<!-- jq-example:sections/5/entries/6/examples/0:end -->

<!-- jq-example:sections/5/entries/6/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '[sub("(?<a>.)"; "\(.a|ascii_upcase)", "\(.a|ascii_downcase)")]'
```

入力

```text
"aB"
```

出力 1

```text
["AB","aB"]
```

<!-- jq-example:sections/5/entries/6/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/5/entries/7/title">

<h3 id="gsub"><code>gsub(regex; tostring)</code>, <code>gsub(regex; tostring; flags)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/5/entries/7/body">

<p><code>gsub</code> は <code>sub</code> と同様ですが、正規表現の重なりのないすべての一致を、式の埋込み後の <code>tostring</code> で置き換えます。2番目の引数がjq文字列のストリームであれば、<code>gsub</code> は対応するJSON文字列のストリームを生成します。</p>

</div>

<!-- jq-example:sections/5/entries/7/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'gsub("(?<x>.)[^a]*"; "+\(.x)-")'
```

入力

```text
"Abcabc"
```

出力 1

```text
"+A-+a-"
```

<!-- jq-example:sections/5/entries/7/examples/0:end -->

<!-- jq-example:sections/5/entries/7/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '[gsub("p"; "a", "b")]'
```

入力

```text
"p"
```

出力 1

```text
["a","b"]
```

<!-- jq-example:sections/5/entries/7/examples/1:end -->

## 出典と通知

出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。

[公式マニュアル](https://jqlang.org/manual/v1.8/) · [固定原典](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [ライセンス](https://creativecommons.org/licenses/by/3.0/) · [原著作権・第三者通知](/docs/jq/v1-8-2/ja/02-license/01-original-notices/) · [ライセンス全文](/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/)
