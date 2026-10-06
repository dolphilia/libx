---
title: "値"
documentId: "wren:values.html"
order: 4
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">値</h1>
<p>値は、ほかのすべてのオブジェクトの構成要素となる、組み込みの基本的なオブジェクト型です。値を評価結果として得る式である<em>リテラル</em>を使って作成できます。すべての値は<em>不変</em>で、一度作成すると変わりません。数値<code>3</code>は常に数値<code>3</code>です。文字列<code>"frozen"</code>の文字配列を、その場で変更することはできません。</p>
<h2>真偽値 <a class="header-anchor" href="#booleans" name="booleans">#</a></h2>
<p>真偽値は真または偽を表します。真偽値リテラルは<code>true</code>と<code>false</code>の二つです。そのクラスは<a href="/docs/wren/v0-4-0/en/02-reference/01-modules-core-bool/">Bool</a>です。</p>
<h2>数値 <a class="header-anchor" href="#numbers" name="numbers">#</a></h2>
<p>ほかのスクリプト言語と同じように、Wrenの数値型は倍精度浮動小数点数の一種類です。数値リテラルは、ほかの言語を使ってきた人が予想するような形をしています。</p>
<pre class="snippet"><code>&#10;0&#10;1234&#10;-5678&#10;3.14159&#10;1.0&#10;-12.34&#10;0.0314159e02&#10;0.0314159e+02&#10;314.159e-02&#10;0xcaffe2&#10;</code></pre>
<p>数値は<a href="/docs/wren/v0-4-0/en/02-reference/08-modules-core-num/">Num</a>クラスのインスタンスです。</p>
<h2>文字列 <a class="header-anchor" href="#strings" name="strings">#</a></h2>
<p>文字列はバイトの配列です。通常はUTF-8で符号化した文字を保存しますが、ゼロや不正なUTF-8列を含め、どんなバイト値でも入れられます。（ただし、後者を端末に<em>表示する</em>のは難しいかもしれません。）</p>
<p>文字列リテラルは二重引用符で囲みます。</p>
<pre class="snippet"><code>&#10;"hi there"&#10;</code></pre>
<p>複数行にまたがることもできます。</p>
<pre class="snippet"><code>&#10;"hi&#10;there,&#10;again"&#10;</code></pre>
<h3>エスケープ <a class="header-anchor" href="#escaping" name="escaping">#</a></h3>
<p>いくつかのエスケープ文字をサポートしています。</p>
<pre class="snippet"><code>&#10;"\0" // The NUL byte: 0.&#10;"\"" // A double quote character.&#10;"\\" // A backslash.&#10;"\%" // A percent sign.&#10;"\a" // Alarm beep. (Who uses this?)&#10;"\b" // Backspace.&#10;"\e" // ESC character.&#10;"\f" // Formfeed.&#10;"\n" // Newline.&#10;"\r" // Carriage return.&#10;"\t" // Tab.&#10;"\v" // Vertical tab.&#10;&#10;&#10;"\x48"        // Unencoded byte     (2 hex digits)&#10;"\u0041"      // Unicode code point (4 hex digits)&#10;"\U0001F64A"  // Unicode code point (8 hex digits)&#10;</code></pre>
<p><code>\x</code>に続けて16進数の数字を二桁書くと、文字の符号化を行わず、単一のバイトを指定できます。</p>
<pre class="snippet"><code>&#10;System.print("\x48\x69\x2e") //&gt; Hi.&#10;</code></pre>
<p><code>\u</code>に続けて16進数の数字を四桁書くと、Unicodeコードポイントを指定できます。</p>
<pre class="snippet"><code>&#10;System.print("\u0041\u0b83\u00DE") //&gt; AஃÞ&#10;</code></pre>
<p>大文字の<code>\U</code>に続けて16進数の数字を<em>八桁</em>書くと、欠かせない絵文字など、基本多言語面の外にあるUnicodeコードポイントを指定できます。</p>
<pre class="snippet"><code>&#10;System.print("\U0001F64A\U0001F680") //&gt; 🙊🚀&#10;</code></pre>
<p>文字列は<a href="/docs/wren/v0-4-0/en/02-reference/12-modules-core-string/">String</a>クラスのインスタンスです。</p>
<h3>文字列補間 <a class="header-anchor" href="#interpolation" name="interpolation">#</a></h3>
<p>文字列リテラルでは<em>補間</em>も使えます。パーセント記号（<code>%</code>）の後に丸括弧で囲んだ式を書くと、その式が評価されます。結果のオブジェクトの<code>toString</code>メソッドを呼び出し、その結果を文字列に挿入します。</p>
<pre class="snippet"><code>&#10;System.print("Math %(3 + 4 * 5) is fun!") //&gt; Math 23 is fun!&#10;</code></pre>
<p>丸括弧の中には、どれほど複雑な式でも書けます。</p>
<pre class="snippet"><code>&#10;System.print("wow %((1..3).map {|n| n * n}.join())") //&gt; wow 149&#10;</code></pre>
<p>補間する式には、さらに独自の補間を入れ子にした文字列リテラルを含めることもできます。ただし、そうするとすぐに読みにくくなります。</p>
<h3>raw文字列 <a class="header-anchor" href="#raw-strings" name="raw-strings">#</a></h3>
<p>三重引用符<code>"""</code>を使って文字列リテラルを作ることもでき、この場合はraw文字列として解析します。raw文字列も、ほかの文字列と違いはありません。解析の仕方が違うだけです。</p>
<p><strong>raw文字列ではエスケープを処理せず、補間も一切行いません</strong>。</p>
<pre class="snippet"><code>&#10;"""hi there"""&#10;</code></pre>
<p>raw文字列が複数行にまたがり、三重引用符がそれだけの行にある場合、その行の空白は無視します。つまり、三重引用符を別の行に置き、それ以外が空白（スペースとタブ）だけなら、開始行と終了行は文字列の一部として数えません。</p>
<pre class="snippet"><code>&#10;  """&#10;    Hello world&#10;  """&#10;</code></pre>
<p>上の例で得られる文字列の値には、改行も末尾の空白もありません。Helloの前にあるスペースは保持される点に注意してください。</p>
<pre class="snippet"><code>&#10;    Hello world&#10;</code></pre>
<p>raw文字列は、ファイルに書かれたとおりに、変更せず解析します。つまり、引用符、不正な構文、ほかのデータ形式などを含めても、Wrenによって変更されません。</p>
<pre class="snippet"><code>&#10;"""&#10;  {&#10;    "hello": "wren",&#10;    "from" : "json"&#10;  }&#10;"""&#10;</code></pre>
<p>もう一つの例として、文字列にWrenのコードを安全に埋め込みます。</p>
<pre class="snippet"><code>&#10;"""&#10;A markdown string with embedded wren code example.&#10;&#10;    class Example {&#10;      construct code() {&#10;        //&#10;      }&#10;    }&#10;"""&#10;</code></pre>
<h2>範囲 <a class="header-anchor" href="#ranges" name="ranges">#</a></h2>
<p>範囲は、連続する数値の範囲を表す小さなオブジェクトです。専用のリテラル構文はありません。代わりに、数値クラスが範囲を作る<code>..</code>と<code>...</code>の<a href="/docs/wren/v0-4-0/ja/01-guide/07-method-calls/#operators">演算子</a>を実装しています。</p>
<pre class="snippet"><code>&#10;3..8&#10;</code></pre>
<p>これで、8そのものも含む3から8までの範囲を作成します。片側の端点だけを含む範囲にしたい場合は、<code>...</code>を使います。</p>
<pre class="snippet"><code>&#10;4...6&#10;</code></pre>
<p>これは、6そのものを<em>含まない</em>4から6までの範囲を作成します。範囲は、数値の列を<a href="/docs/wren/v0-4-0/ja/01-guide/08-control-flow/#for-statements">反復処理する</a>際によく使いますが、ほかにも用途があります。例えば、<a href="/docs/wren/v0-4-0/ja/01-guide/05-lists/">リスト</a>の添字演算子に渡すとリストの一部分を、Stringに渡すとその範囲の部分文字列を返します。</p>
<pre class="snippet"><code>&#10;var list = ["a", "b", "c", "d", "e"]&#10;var slice = list[1..3]&#10;System.print(slice) //&gt; [b, c, d]&#10;&#10;var string = "hello wren"&#10;var wren = string[-4..-1]&#10;System.print(wren) //&gt; wren&#10;</code></pre>
<p>そのクラスは<a href="/docs/wren/v0-4-0/en/02-reference/10-modules-core-range/">Range</a>です。</p>
<h2>Null <a class="header-anchor" href="#null" name="null">#</a></h2>
<p>Wrenには特別な値<code>null</code>があり、これは<a href="/docs/wren/v0-4-0/en/02-reference/07-modules-core-null/">Null</a>クラスの唯一のインスタンスです。（大文字と小文字の違いに注意してください。）一部の言語の<code>void</code>に似た働きをし、値がないことを表します。何も返さないメソッドを呼び出して戻り値を取得すると、<code>null</code>が返ります。</p>
<p><br/><hr/><a class="right" href="/docs/wren/v0-4-0/ja/01-guide/05-lists/">リスト →</a><a href="/docs/wren/v0-4-0/ja/01-guide/03-syntax/">← 構文</a></p>
</div>

