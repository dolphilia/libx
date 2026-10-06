---
title: "構文"
documentId: "wren:syntax.html"
order: 3
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}]
---
<div class="wren-document">
<h1 id="page-title">構文</h1>
<p>Wrenの構文は、Cに似た言語を使ってきた人にとってなじみがあり、その一方で少し単純で無駄の少ないものになるよう設計されています。</p>
<p>スクリプトは、拡張子が<code>.wren</code>のプレーンテキストファイルに保存します。Wrenは事前コンパイルを行いません。一般的なスクリプト言語と同様、ソースから直接、上から下へプログラムを実行します。（内部では<a href="/docs/wren/v0-4-0/en/01-guide/22-performance/">効率</a>のためにバイトコードへコンパイルしますが、これは実装上の詳細です。）</p>
<h2>コメント <a class="header-anchor" href="#comments" name="comments">#</a></h2>
<p>行コメントは<code>//</code>で始まり、行末で終わります。</p>
<pre class="snippet"><code>&#10;// This is a comment.&#10;</code></pre>
<p>ブロックコメントは<code>/*</code>で始まり、<code>*/</code>で終わります。複数行にまたがることができます。</p>
<pre class="snippet"><code>&#10;/* This&#10;   is&#10;   a&#10;   multi-line&#10;   comment. */&#10;</code></pre>
<p>Cとは異なり、Wrenではブロックコメントを入れ子にできます。</p>
<pre class="snippet"><code>&#10;/* This is /* a nested */ comment. */&#10;</code></pre>
<p>これは、すでにブロックコメントを含むコードでも、ブロック全体を簡単にコメントアウトできるので便利です。</p>
<h2>予約語 <a class="header-anchor" href="#reserved-words" name="reserved-words">#</a></h2>
<p>その言語らしさを手早くつかむには、どの語が予約されているかを見る方法があります。Wrenの予約語は次のとおりです。</p>
<pre class="snippet"><code>&#10;as break class construct continue else false for foreign if import&#10;in is null return static super this true var while&#10;</code></pre>
<h2>識別子 <a class="header-anchor" href="#identifiers" name="identifiers">#</a></h2>
<p>名前の規則は、ほかのプログラミング言語と似ています。識別子は英字またはアンダースコアで始まり、英字・数字・アンダースコアを含められます。大文字と小文字は区別します。</p>
<pre class="snippet"><code>&#10;hi&#10;camelCase&#10;PascalCase&#10;_under_score&#10;abc123&#10;ALL_CAPS&#10;</code></pre>
<p>アンダースコア（<code>_</code>）で始まる識別子は、Wrenでは特別な意味を持ちます。クラスの<a href="/docs/wren/v0-4-0/en/01-guide/10-classes/#fields">フィールド</a>を表すために使います。</p>
<h2>改行 <a class="header-anchor" href="#newlines" name="newlines">#</a></h2>
<p>改行（<code>\n</code>）はWrenでは意味を持ち、文を区切るために使われます。</p>
<pre class="snippet"><code>&#10;// Two statements:&#10;System.print("hi") // Newline.&#10;System.print("bye")&#10;</code></pre>
<p>ただし、一つの文が一行に収まらず、途中に改行を入れると問題になる場合もあります。そのためWrenには、とても単純な規則があります。文の終わりになれないトークンの直後にある改行を無視します。</p>
<pre class="snippet"><code>&#10;System.print( // Newline here is ignored.&#10;    "hi")&#10;</code></pre>
<p>実際には、各文を別々の行に書き、必要に応じて複数行に折り返しても、それほど困らないということです。</p>
<h2>ブロック <a class="header-anchor" href="#blocks" name="blocks">#</a></h2>
<p>Wrenでは波括弧で<em>ブロック</em>を定義します。<a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/">制御フロー</a>の文など、文を書ける場所ならどこでもブロックを使えます。<a href="/docs/wren/v0-4-0/en/01-guide/10-classes/#methods">メソッド</a>や<a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">関数</a>の本体もブロックです。例えば次のコードでは、then側にブロックを、else側に単独の文を使っています。</p>
<pre class="snippet"><code>&#10;if (happy &amp;&amp; knowIt) {&#10;  hands.clap()&#10;} else System.print("sad")&#10;</code></pre>
<p>ブロックには、似てはいるものの同じではない二つの形式があります。通常、ブロックには次のように一連の文を入れます。</p>
<pre class="snippet"><code>&#10;{&#10;  System.print("one")&#10;  System.print("two")&#10;  System.print("three")&#10;}&#10;</code></pre>
<p>この形式をメソッドや関数の本体に使うと、ブロックの実行が終わった後、自動的に<code>null</code>を返します。別の値を返したい場合は、明示的な<code>return</code>文が必要です。</p>
<p>しかし、一つの式を評価してその結果を返すだけのメソッドや関数もよく使われます。ほかの言語には、その定義に<code>=&gt;</code>を使うものがあります。Wrenでは次のように書きます。</p>
<pre class="snippet"><code>&#10;{ "single expression" }&#10;</code></pre>
<p><code>{</code>の後（<a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">関数</a>の場合は引数リストの後）に改行がなければ、ブロックには一つの式しか入れられず、その結果を自動的に返します。これは、次のように書くのとまったく同じです。</p>
<pre class="snippet"><code>&#10;{&#10;  return "single expression"&#10;}&#10;</code></pre>
<p>この形式では、値を生まない文は使えません。つまり、<code>class</code>、<code>for</code>、<code>if</code>、<code>import</code>、<code>return</code>、<code>var</code>、<code>while</code>で始まるものは書けません。一つだけ文を含むブロックにしたい場合は、そこに改行を入れます。</p>
<pre class="snippet"><code>&#10;{&#10;  if (happy) {&#10;    System.print("I'm feelin' it!")&#10;  }&#10;}&#10;</code></pre>
<p><code>{</code>の直後に改行を置くというのは、少し奇妙で魔法めいて感じられます。しかし、Wrenではもともと改行が意味を持つので、それほど不自然ではありません。<code>=&gt;</code>のような構文と比べてよい点は、ブロックの<em>終わり</em>に明示的な区切りがあることです。これは、呼び出しを連鎖させるときに役立ちます。</p>
<pre class="snippet"><code>&#10;numbers.map {|n| n * 2 }.where {|n| n &lt; 100 }&#10;</code></pre>
<h2>優先順位と結合性 <a class="header-anchor" href="#precedence-and-associativity" name="precedence-and-associativity">#</a></h2>
<p>Wrenの各種の式とその意味は、次の数ページで説明します。ただし、構文上それらがどう組み合わさるかを知りたい場合のために、一覧表を示します。</p>
<p>この表は、どの式の<em>優先順位</em>が高いか、つまりどれがより強く結び付くかと、同種の式が連続するときにどの順番でまとまるかという<em>結合性</em>を示します。Wrenは、おおむねCに従いますが、<a href="http://www.lysator.liu.se/c/dmr-on-or.html">ビット演算子の誤り</a>を修正しています。強く結び付くものから弱いものへの、全優先順位表は次のとおりです。</p>
<div class="wren-table-scroll"><table class="precedence">
<tbody>
<tr>
<th>優先順位</th>
<th>演算子</th>
<th>説明</th>
<th>結合方向</th>
</tr>
<tr>
<td>1</td>
<td><code>()</code> <code>[]</code> <code>.</code></td>
<td>グループ化、<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/">添字、メソッド呼び出し</a></td>
<td>左</td>
</tr>
<tr>
<td>2</td>
<td><code>-</code> <code>!</code> <code>~</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">符号反転、論理否定、補数</a></td>
<td>右</td>
</tr>
<tr>
<td>3</td>
<td><code>*</code> <code>/</code> <code>%</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">乗算、除算、剰余</a></td>
<td>左</td>
</tr>
<tr>
<td>4</td>
<td><code>+</code> <code>-</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">加算、減算</a></td>
<td>左</td>
</tr>
<tr>
<td>5</td>
<td><code>..</code> <code>...</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">終点を含む範囲、終点を含まない範囲</a></td>
<td>左</td>
</tr>
<tr>
<td>6</td>
<td><code>&lt;&lt;</code> <code>&gt;&gt;</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">左シフト、右シフト</a></td>
<td>左</td>
</tr>
<tr>
<td>7</td>
<td><code>&amp;</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">ビット単位のAND</a></td>
<td>左</td>
</tr>
<tr>
<td>8</td>
<td><code>^</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">ビット単位のXOR</a></td>
<td>左</td>
</tr>
<tr>
<td>9</td>
<td><code>|</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">ビット単位のOR</a></td>
<td>左</td>
</tr>
<tr>
<td>10</td>
<td><code>&lt;</code> <code>&lt;=</code> <code>&gt;</code> <code>&gt;=</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">比較</a></td>
<td>左</td>
</tr>
<tr>
<td>11</td>
<td><code>is</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">型の検査</a></td>
<td>左</td>
</tr>
<tr>
<td>12</td>
<td><code>==</code> <code>!=</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">等価、非等価</a></td>
<td>左</td>
</tr>
<tr>
<td>13</td>
<td><code>&amp;&amp;</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#logical-operators">論理AND</a></td>
<td>左</td>
</tr>
<tr>
<td>14</td>
<td><code>||</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#logical-operators">論理OR</a></td>
<td>左</td>
</tr>
<tr>
<td>15</td>
<td><code>?:</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#the-conditional-operator-">条件式</a></td>
<td>右</td>
</tr>
<tr>
<td>16</td>
<td><code>=</code></td>
<td><a href="/docs/wren/v0-4-0/en/01-guide/09-variables/#assignment">代入</a>、<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#setters">セッター</a></td>
<td>右</td>
</tr>
</tbody>
</table></div>
<p><br/><hr/><a class="right" href="/docs/wren/v0-4-0/en/01-guide/04-values/">値 →</a><a href="/docs/wren/v0-4-0/en/01-guide/02-getting-started/">← はじめに</a></p>
</div>

