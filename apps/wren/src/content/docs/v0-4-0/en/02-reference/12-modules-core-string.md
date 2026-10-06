---
title: "String Class (English original)"
documentId: "wren:modules/core/string.html"
order: 12
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">String Class (English original)</h1>
<p>A string is an immutable array of bytes. Strings usually store text, in which
case the bytes are the UTF-8 encoding of the text&rsquo;s code points. But you can put
any kind of byte values in there you want, including null bytes or invalid
UTF-8.</p>
<p>There are a few ways to think of a string:</p>
<ul>
<li>
<p>As a searchable chunk of text composed of a sequence of textual code points.</p>
</li>
<li>
<p>As an iterable sequence of code point numbers.</p>
</li>
<li>
<p>As a flat array of directly indexable bytes.</p>
</li>
</ul>
<p>All of those are useful for some problems, so the string API supports all three.
The first one is the most common, so that&rsquo;s what methods directly on the string
class cater to.</p>
<p>In UTF-8, a single Unicode code point&mdash;very roughly a single
&ldquo;character&rdquo;&mdash;may encode to one or more bytes. This means you can&rsquo;t
efficiently index by code point. There&rsquo;s no way to jump directly to, say, the
fifth code point in a string without walking the string from the beginning and
counting them as you go.</p>
<p>Because counting code points is relatively slow, the indexes passed to string
methods are <em>byte</em> offsets, not <em>code point</em> offsets. When you do:</p>
<pre class="snippet"><code>&#10;someString[3]&#10;</code></pre>

<p>That means &ldquo;get the code point starting at <em>byte</em> three&rdquo;, not &ldquo;get the third
code point in the string&rdquo;. This sounds scary, but keep in mind that the methods
on strings <em>return</em> byte indexes too. So, for example, this does what you want:</p>
<pre class="snippet"><code>&#10;var metalBand = &quot;Fäcëhämmër&quot;&#10;var hPosition = metalBand.indexOf(&quot;h&quot;)&#10;System.print(metalBand[hPosition]) //&gt; h&#10;</code></pre>

<p>A string can also be indexed with a <a href="/docs/wren/v0-4-0/en/02-reference/10-modules-core-range/">Range</a>, which will return a 
new string as a substring of the original. </p>
<pre class="snippet"><code>&#10;var example = &quot;hello wren&quot;&#10;System.print(example[0...5])   //&gt; hello&#10;System.print(example[-4..-1])  //&gt; wren&#10;</code></pre>

<p>If you want to work with a string as a sequence numeric code points, call the
<code>codePoints</code> getter. It returns a <a href="/docs/wren/v0-4-0/en/02-reference/11-modules-core-sequence/">Sequence</a> that decodes UTF-8
and iterates over the code points, returning each as a number.</p>
<p>If you want to get at the raw bytes, call <code>bytes</code>. This returns a Sequence that
ignores any UTF-8 encoding and works directly at the byte level.</p>
<h2>Static Methods <a href="#static-methods" name="static-methods" class="header-anchor">#</a></h2>
<h3>String.<strong>fromCodePoint</strong>(codePoint) <a href="#string.fromcodepoint(codepoint)" name="string.fromcodepoint(codepoint)" class="header-anchor">#</a></h3>
<p>Creates a new string containing the UTF-8 encoding of <code>codePoint</code>.</p>
<pre class="snippet"><code>&#10;String.fromCodePoint(8225) //&gt; ‡&#10;</code></pre>

<p>It is a runtime error if <code>codePoint</code> is not an integer between <code>0</code> and
<code>0x10ffff</code>, inclusive.</p>
<h3>String.<strong>fromByte</strong>(byte) <a href="#string.frombyte(byte)" name="string.frombyte(byte)" class="header-anchor">#</a></h3>
<p>Creates a new string containing the single byte <code>byte</code>.</p>
<pre class="snippet"><code>&#10;String.fromByte(255) //&gt; �&#10;</code></pre>

<p>It is a runtime error if <code>byte</code> is not an integer between <code>0</code> and <code>0xff</code>, inclusive.</p>
<h2>Methods <a href="#methods" name="methods" class="header-anchor">#</a></h2>
<h3><strong>bytes</strong> <a href="#bytes" name="bytes" class="header-anchor">#</a></h3>
<p>Gets a <a href="/docs/wren/v0-4-0/en/02-reference/11-modules-core-sequence/"><code>Sequence</code></a> that can be used to access the raw bytes of
the string and ignore any UTF-8 encoding. In addition to the normal sequence
methods, the returned object also has a subscript operator that can be used to
directly index bytes.</p>
<pre class="snippet"><code>&#10;System.print(&quot;hello&quot;.bytes[1]) //&gt; 101 (for &quot;e&quot;)&#10;</code></pre>

<p>The <code>count</code> method on the returned sequence returns the number of bytes in the
string. Unlike <code>count</code> on the string itself, it does not have to iterate over
the string, and runs in constant time instead.</p>
<h3><strong>codePoints</strong> <a href="#codepoints" name="codepoints" class="header-anchor">#</a></h3>
<p>Gets a <a href="/docs/wren/v0-4-0/en/02-reference/11-modules-core-sequence/"><code>Sequence</code></a> that can be used to access the UTF-8 decode
code points of the string <em>as numbers</em>. Iteration and subscripting work similar
to the string itself. The difference is that instead of returning
single-character strings, this returns the numeric code point values.</p>
<pre class="snippet"><code>&#10;var string = &quot;(ᵔᴥᵔ)&quot;&#10;System.print(string.codePoints[0]) //&gt; 40 (for &quot;(&quot;)&#10;System.print(string.codePoints[4]) //&gt; 7461 (for &quot;ᴥ&quot;)&#10;</code></pre>

<p>If the byte at <code>index</code> does not begin a valid UTF-8 sequence, or the end of the
string is reached before the sequence is complete, returns <code>-1</code>.</p>
<pre class="snippet"><code>&#10;var string = &quot;(ᵔᴥᵔ)&quot;&#10;System.print(string.codePoints[2]) //&gt; -1 (in the middle of &quot;ᵔ&quot;)&#10;</code></pre>

<h3><strong>contains</strong>(other) <a href="#contains(other)" name="contains(other)" class="header-anchor">#</a></h3>
<p>Checks if <code>other</code> is a substring of the string.</p>
<p>It is a runtime error if <code>other</code> is not a string.</p>
<h3><strong>count</strong> <a href="#count" name="count" class="header-anchor">#</a></h3>
<p>Returns the number of code points in the string. Since UTF-8 is a
variable-length encoding, this requires iterating over the entire string, which
is relatively slow.</p>
<p>If the string contains bytes that are invalid UTF-8, each byte adds one to the
count as well.</p>
<h3><strong>endsWith</strong>(suffix) <a href="#endswith(suffix)" name="endswith(suffix)" class="header-anchor">#</a></h3>
<p>Checks if the string ends with <code>suffix</code>.</p>
<p>It is a runtime error if <code>suffix</code> is not a string.</p>
<h3><strong>indexOf</strong>(search) <a href="#indexof(search)" name="indexof(search)" class="header-anchor">#</a></h3>
<p>Returns the index of the first byte matching <code>search</code> in the string or <code>-1</code> if
<code>search</code> was not found.</p>
<p>It is a runtime error if <code>search</code> is not a string.</p>
<h3><strong>indexOf</strong>(search, start) <a href="#indexof(search,-start)" name="indexof(search,-start)" class="header-anchor">#</a></h3>
<p>Returns the index of the first byte matching <code>search</code> in the string or <code>-1</code> if
<code>search</code> was not found, starting a byte offset <code>start</code>. The start can be
negative to count backwards from the end of the string.</p>
<p>It is a runtime error if <code>search</code> is not a string or <code>start</code> is not an integer
index within the string&rsquo;s byte length.</p>
<h3><strong>iterate</strong>(iterator), <strong>iteratorValue</strong>(iterator) <a href="#iterate(iterator),-iteratorvalue(iterator)" name="iterate(iterator),-iteratorvalue(iterator)" class="header-anchor">#</a></h3>
<p>Implements the <a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#the-iterator-protocol">iterator protocol</a> for iterating over the <em>code points</em> in the
string:</p>
<pre class="snippet"><code>&#10;var codePoints = []&#10;for (c in &quot;(ᵔᴥᵔ)&quot;) {&#10;  codePoints.add(c)&#10;}&#10;&#10;System.print(codePoints) //&gt; [(, ᵔ, ᴥ, ᵔ, )]&#10;</code></pre>

<p>If the string contains any bytes that are not valid UTF-8, this iterates over
those too, one byte at a time.</p>
<h3><strong>replace</strong>(old, swap) <a href="#replace(old,-swap)" name="replace(old,-swap)" class="header-anchor">#</a></h3>
<p>Returns a new string with all occurrences of <code>old</code> replaced with <code>swap</code>.</p>
<pre class="snippet"><code>&#10;var string = &quot;abc abc abc&quot;&#10;System.print(string.replace(&quot; &quot;, &quot;&quot;)) //&gt; abcabcabc&#10;</code></pre>

<h3><strong>split</strong>(separator) <a href="#split(separator)" name="split(separator)" class="header-anchor">#</a></h3>
<p>Returns a list of one or more strings separated by <code>separator</code>.</p>
<pre class="snippet"><code>&#10;var string = &quot;abc abc abc&quot;&#10;System.print(string.split(&quot; &quot;)) //&gt; [abc, abc, abc]&#10;</code></pre>

<p>It is a runtime error if <code>separator</code> is not a string or is an empty string.</p>
<h3><strong>startsWith</strong>(prefix) <a href="#startswith(prefix)" name="startswith(prefix)" class="header-anchor">#</a></h3>
<p>Checks if the string starts with <code>prefix</code>.</p>
<p>It is a runtime error if <code>prefix</code> is not a string.</p>
<h3><strong>trim</strong>() <a href="#trim()" name="trim()" class="header-anchor">#</a></h3>
<p>Returns a new string with whitespace removed from the beginning and end of this
string. &ldquo;Whitespace&rdquo; is space, tab, carriage return, and line feed characters.</p>
<pre class="snippet"><code>&#10;System.print(&quot; \nstuff\r\t&quot;.trim()) //&gt; stuff&#10;</code></pre>

<h3><strong>trim</strong>(chars) <a href="#trim(chars)" name="trim(chars)" class="header-anchor">#</a></h3>
<p>Returns a new string with all code points in <code>chars</code> removed from the beginning
and end of this string.</p>
<pre class="snippet"><code>&#10;System.print(&quot;ᵔᴥᵔᴥᵔbearᵔᴥᴥᵔᵔ&quot;.trim(&quot;ᵔᴥ&quot;)) //&gt; bear&#10;</code></pre>

<h3><strong>trimEnd</strong>() <a href="#trimend()" name="trimend()" class="header-anchor">#</a></h3>
<p>Like <code>trim()</code> but only removes from the end of the string.</p>
<pre class="snippet"><code>&#10;System.print(&quot; \nstuff\r\t&quot;.trimEnd()) //&gt; &quot; \nstuff&quot;&#10;</code></pre>

<h3><strong>trimEnd</strong>(chars) <a href="#trimend(chars)" name="trimend(chars)" class="header-anchor">#</a></h3>
<p>Like <code>trim()</code> but only removes from the end of the string.</p>
<pre class="snippet"><code>&#10;System.print(&quot;ᵔᴥᵔᴥᵔbearᵔᴥᴥᵔᵔ&quot;.trimEnd(&quot;ᵔᴥ&quot;)) //&gt; ᵔᴥᵔᴥᵔbear&#10;</code></pre>

<h3><strong>trimStart</strong>() <a href="#trimstart()" name="trimstart()" class="header-anchor">#</a></h3>
<p>Like <code>trim()</code> but only removes from the beginning of the string.</p>
<pre class="snippet"><code>&#10;System.print(&quot; \nstuff\r\t&quot;.trimStart()) //&gt; &quot;stuff\r\t&quot;&#10;</code></pre>

<h3><strong>trimStart</strong>(chars) <a href="#trimstart(chars)" name="trimstart(chars)" class="header-anchor">#</a></h3>
<p>Like <code>trim()</code> but only removes from the beginning of the string.</p>
<pre class="snippet"><code>&#10;System.print(&quot;ᵔᴥᵔᴥᵔbearᵔᴥᴥᵔᵔ&quot;.trimStart(&quot;ᵔᴥ&quot;)) //&gt; bearᵔᴥᴥᵔᵔ&#10;</code></pre>

<h3><strong>+</strong>(other) operator <a href="#+(other)-operator" name="+(other)-operator" class="header-anchor">#</a></h3>
<p>Returns a new string that concatenates this string and <code>other</code>.</p>
<p>It is a runtime error if <code>other</code> is not a string.</p>
<h3><strong>*</strong>(count) operator <a href="#(count)-operator" name="(count)-operator" class="header-anchor">#</a></h3>
<p>Returns a new string that contains this string repeated <code>count</code> times.</p>
<p>It is a runtime error if <code>count</code> is not a positive integer.</p>
<h3><strong>==</strong>(other) operator <a href="#==(other)-operator" name="==(other)-operator" class="header-anchor">#</a></h3>
<p>Checks if the string is equal to <code>other</code>.</p>
<h3><strong>!=</strong>(other) operator <a href="#=(other)-operator" name="=(other)-operator" class="header-anchor">#</a></h3>
<p>Check if the string is not equal to <code>other</code>.</p>
<h3><strong>[</strong>index<strong>]</strong> operator <a href="#[index]-operator" name="[index]-operator" class="header-anchor">#</a></h3>
<p>Returns a string containing the code point starting at byte <code>index</code>.</p>
<pre class="snippet"><code>&#10;System.print(&quot;ʕ•ᴥ•ʔ&quot;[5]) //&gt; ᴥ&#10;</code></pre>

<p>Since <code>ʕ</code> is two bytes in UTF-8 and <code>•</code> is three, the fifth byte points to the
bear&rsquo;s nose.</p>
<p>If <code>index</code> points into the middle of a UTF-8 sequence or at otherwise invalid
UTF-8, this returns a one-byte string containing the byte at that index:</p>
<pre class="snippet"><code>&#10;System.print(&quot;I ♥ NY&quot;[3]) //&gt; (one-byte string [153])&#10;</code></pre>

<p>It is a runtime error if <code>index</code> is greater than the number of bytes in the
string.</p>
</div>
