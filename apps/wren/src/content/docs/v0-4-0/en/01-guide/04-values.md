---
title: "Values"
documentId: "wren:values.html"
order: 4
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Values</h1>
<p>Values are the built-in atomic object types that all other objects are composed
of. They can be created through <em>literals</em>, expressions that evaluate to a
value. All values are <em>immutable</em>&mdash;once created, they do not change. The
number <code>3</code> is always the number <code>3</code>. The string <code>"frozen"</code> can never have its
character array modified in place.</p>
<h2>Booleans <a href="#booleans" name="booleans" class="header-anchor">#</a></h2>
<p>A boolean value represents truth or falsehood. There are two boolean literals,
<code>true</code> and <code>false</code>. Their class is <a href="/docs/wren/v0-4-0/en/02-reference/01-modules-core-bool/">Bool</a>.</p>
<h2>Numbers <a href="#numbers" name="numbers" class="header-anchor">#</a></h2>
<p>Like other scripting languages, Wren has a single numeric type:
double-precision floating point. Number literals look like you expect coming
from other languages:</p>
<pre class="snippet"><code>&#10;0&#10;1234&#10;-5678&#10;3.14159&#10;1.0&#10;-12.34&#10;0.0314159e02&#10;0.0314159e+02&#10;314.159e-02&#10;0xcaffe2&#10;</code></pre>

<p>Numbers are instances of the <a href="/docs/wren/v0-4-0/en/02-reference/08-modules-core-num/">Num</a> class.</p>
<h2>Strings <a href="#strings" name="strings" class="header-anchor">#</a></h2>
<p>A string is an array of bytes. Typically, they store characters encoded in
UTF-8, but you can put any byte values in there, even zero or invalid UTF-8
sequences. (You might have some trouble <em>printing</em> the latter to your terminal,
though.)</p>
<p>String literals are surrounded in double quotes:</p>
<pre class="snippet"><code>&#10;&quot;hi there&quot;&#10;</code></pre>

<p>They can also span multiple lines:</p>
<pre class="snippet"><code>&#10;&quot;hi&#10;there,&#10;again&quot;&#10;</code></pre>

<h3>Escaping <a href="#escaping" name="escaping" class="header-anchor">#</a></h3>
<p>A handful of escape characters are supported:</p>
<pre class="snippet"><code>&#10;&quot;\0&quot; // The NUL byte: 0.&#10;&quot;\&quot;&quot; // A double quote character.&#10;&quot;\\&quot; // A backslash.&#10;&quot;\%&quot; // A percent sign.&#10;&quot;\a&quot; // Alarm beep. (Who uses this?)&#10;&quot;\b&quot; // Backspace.&#10;&quot;\e&quot; // ESC character.&#10;&quot;\f&quot; // Formfeed.&#10;&quot;\n&quot; // Newline.&#10;&quot;\r&quot; // Carriage return.&#10;&quot;\t&quot; // Tab.&#10;&quot;\v&quot; // Vertical tab.&#10;&#10;&#10;&quot;\x48&quot;        // Unencoded byte     (2 hex digits)&#10;&quot;\u0041&quot;      // Unicode code point (4 hex digits)&#10;&quot;\U0001F64A&quot;  // Unicode code point (8 hex digits)&#10;</code></pre>

<p>A <code>\x</code> followed by two hex digits specifies a single unencoded byte:</p>
<pre class="snippet"><code>&#10;System.print(&quot;\x48\x69\x2e&quot;) //&gt; Hi.&#10;</code></pre>

<p>A <code>\u</code> followed by four hex digits can be used to specify a Unicode code point:</p>
<pre class="snippet"><code>&#10;System.print(&quot;\u0041\u0b83\u00DE&quot;) //&gt; AஃÞ&#10;</code></pre>

<p>A capital <code>\U</code> followed by <em>eight</em> hex digits allows Unicode code points outside
of the basic multilingual plane, like all-important emoji:</p>
<pre class="snippet"><code>&#10;System.print(&quot;\U0001F64A\U0001F680&quot;) //&gt; 🙊🚀&#10;</code></pre>

<p>Strings are instances of class <a href="/docs/wren/v0-4-0/en/02-reference/12-modules-core-string/">String</a>.</p>
<h3>Interpolation <a href="#interpolation" name="interpolation" class="header-anchor">#</a></h3>
<p>String literals also allow <em>interpolation</em>. If you have a percent sign (<code>%</code>)
followed by a parenthesized expression, the expression is evaluated. The
resulting object&rsquo;s <code>toString</code> method is called and the result is inserted in the
string:</p>
<pre class="snippet"><code>&#10;System.print(&quot;Math %(3 + 4 * 5) is fun!&quot;) //&gt; Math 23 is fun!&#10;</code></pre>

<p>Arbitrarily complex expressions are allowed inside the parentheses:</p>
<pre class="snippet"><code>&#10;System.print(&quot;wow %((1..3).map {|n| n * n}.join())&quot;) //&gt; wow 149&#10;</code></pre>

<p>An interpolated expression can even contain a string literal which in turn has
its own nested interpolations, but doing that gets unreadable pretty quickly.</p>
<h3>Raw strings <a href="#raw-strings" name="raw-strings" class="header-anchor">#</a></h3>
<p>A string literal can also be created using triple quotes <code>"""</code> which is
parsed as a raw string. A raw string is no different
from any other string, it&rsquo;s just parsed in a different way.</p>
<p><strong>Raw strings do not process escapes and do not apply any interpolation</strong>.</p>
<pre class="snippet"><code>&#10;&quot;&quot;&quot;hi there&quot;&quot;&quot;&#10;</code></pre>

<p>When a raw string spans multiple lines and a triple quote is on it&rsquo;s own line,
any whitespace on that line will be ignored. This means the opening and closing
lines are not counted as part of the string when the triple quotes are separate lines,
as long as they only contain whitespace (spaces + tabs).</p>
<pre class="snippet"><code>&#10;  &quot;&quot;&quot;&#10;    Hello world&#10;  &quot;&quot;&quot;&#10;</code></pre>

<p>The resulting value in the string above has no newlines or trailing whitespace. 
Note the spaces in front of the Hello are preserved. </p>
<pre class="snippet"><code>&#10;    Hello world&#10;</code></pre>

<p>A raw string will be parsed exactly as is in the file, unmodified.
This means it can contain quotes, invalid syntax, other data formats 
and so on without being modified by Wren.</p>
<pre class="snippet"><code>&#10;&quot;&quot;&quot;&#10;  {&#10;    &quot;hello&quot;: &quot;wren&quot;,&#10;    &quot;from&quot; : &quot;json&quot;&#10;  }&#10;&quot;&quot;&quot;&#10;</code></pre>

<p>One more example, embedding wren code inside a string safely.</p>
<pre class="snippet"><code>&#10;&quot;&quot;&quot;&#10;A markdown string with embedded wren code example.&#10;&#10;    class Example {&#10;      construct code() {&#10;        //&#10;      }&#10;    }&#10;&quot;&quot;&quot;&#10;</code></pre>

<h2>Ranges <a href="#ranges" name="ranges" class="header-anchor">#</a></h2>
<p>A range is a little object that represents a consecutive range of numbers. They
don&rsquo;t have their own dedicated literal syntax. Instead, the number class
implements the <code>..</code> and <code>...</code> <a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">operators</a> to create them:</p>
<pre class="snippet"><code>&#10;3..8&#10;</code></pre>

<p>This creates a range from three to eight, including eight itself. If you want a
half-inclusive range, use <code>...</code>:</p>
<pre class="snippet"><code>&#10;4...6&#10;</code></pre>

<p>This creates a range from four to six <em>not</em> including six itself. Ranges are
commonly used for <a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#for-statements">iterating</a> over a
sequences of numbers, but are useful in other places too. You can pass them to
a <a href="/docs/wren/v0-4-0/en/01-guide/05-lists/">list</a>&rsquo;s subscript operator to return a subset of the list, for
example, or on a String, the substring in that range:</p>
<pre class="snippet"><code>&#10;var list = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;]&#10;var slice = list[1..3]&#10;System.print(slice) //&gt; [b, c, d]&#10;&#10;var string = &quot;hello wren&quot;&#10;var wren = string[-4..-1]&#10;System.print(wren) //&gt; wren&#10;</code></pre>

<p>Their class is <a href="/docs/wren/v0-4-0/en/02-reference/10-modules-core-range/">Range</a>.</p>
<h2>Null <a href="#null" name="null" class="header-anchor">#</a></h2>
<p>Wren has a special value <code>null</code>, which is the only instance of the class
<a href="/docs/wren/v0-4-0/en/02-reference/07-modules-core-null/">Null</a>. (Note the difference in case.) It functions a bit like <code>void</code> in some
languages: it indicates the absence of a value. If you call a method that
doesn&rsquo;t return anything and get its returned value, you get <code>null</code> back.</p>
<p><br><hr>
<a class="right" href="/docs/wren/v0-4-0/en/01-guide/05-lists/">Lists &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/03-syntax/">&larr; Syntax</a></p>
</div>
