---
title: "実体参照と数値文字参照"
description: "CommonMark 0.31.2の規則と原典の対照例。"
documentId: "commonmark:0.31.2:05-character-references"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="entity-and-numeric-character-references"><span class="number">2.5</span>実体参照と数値文字参照</h3><p>次の例外を除き、有効なHTML実体参照と数値文字参照は、対応するUnicode文字の代わりに使えます。</p><ul>
<li>
<p>実体参照と文字参照は、コードブロックやコードスパンの中では認識されません。</p>
</li>
<li>
<p>実体参照と文字参照は、CommonMarkの構造要素を定義する特殊文字の代わりにはなりません。たとえば<code>&amp;#42;</code>は文字としての<code>*</code>の代わりに使えますが、<code>&amp;#42;</code>を、強調の区切り、箇条書きのリストマーカー、主題区切りの<code>*</code>の代わりに使うことはできません。</p>
</li>
</ul><p>仕様に適合するCommonMarkパーサーは、ある文字がソース中でUnicode文字として書かれていたか、実体参照として書かれていたかという情報を保存する必要はありません。</p><p><a class="definition" href="#entity-references" id="entity-references">実体参照</a>は、<code>&amp;</code>、有効なHTML5実体名のいずれか、<code>;</code>を順に並べたものです。有効な実体参照と対応するコードポイントの正式な情報源として、文書<a href="https://html.spec.whatwg.org/entities.json">https://html.spec.whatwg.org/entities.json</a>を使います。</p><div class="commonmark-example" id="example-25">
<div class="examplenum">
<a href="#example-25">例25</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;nbsp; &amp;amp; &amp;copy; &amp;AElig; &amp;Dcaron;&#10;&amp;frac34; &amp;HilbertSpace; &amp;DifferentialD;&#10;&amp;ClockwiseContourIntegral; &amp;ngE;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;  &amp;amp; © Æ Ď&#10;¾ ℋ ⅆ&#10;∲ ≧̸&lt;/p&gt;&#10;</code></pre>
</div>
</div><p><a class="definition" href="#decimal-numeric-character-references" id="decimal-numeric-character-references">10進数値文字参照</a>は、<code>&amp;#</code>、1〜7桁のアラビア数字の並び、<code>;</code>からなります。数値文字参照は、対応するUnicode文字として解析されます。無効なUnicodeコードポイントは、置換文字（REPLACEMENT CHARACTER、<code>U+FFFD</code>）に置き換えられます。安全上の理由から、コードポイント<code>U+0000</code>も<code>U+FFFD</code>に置き換えられます。</p><div class="commonmark-example" id="example-26">
<div class="examplenum">
<a href="#example-26">例26</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;#35; &amp;#1234; &amp;#992; &amp;#0;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;# Ӓ Ϡ �&lt;/p&gt;&#10;</code></pre>
</div>
</div><p><a class="definition" href="#hexadecimal-numeric-character-references" id="hexadecimal-numeric-character-references">16進数値文字参照</a>は、<code>&amp;#</code>、<code>X</code>または<code>x</code>、1〜6桁の16進数字の並び、<code>;</code>からなります。これらも、対応するUnicode文字として解析されます。ただし、今回は10進数ではなく16進数で指定されます。</p><div class="commonmark-example" id="example-27">
<div class="examplenum">
<a href="#example-27">例27</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;#X22; &amp;#XD06; &amp;#xcab;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&amp;quot; ആ ಫ&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>次は、実体参照にはならない例です。</p><div class="commonmark-example" id="example-28">
<div class="examplenum">
<a href="#example-28">例28</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;nbsp &amp;x; &amp;#; &amp;#x;&#10;&amp;#87654321;&#10;&amp;#abcdef0;&#10;&amp;ThisIsNotDefined; &amp;hi?;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&amp;amp;nbsp &amp;amp;x; &amp;amp;#; &amp;amp;#x;&#10;&amp;amp;#87654321;&#10;&amp;amp;#abcdef0;&#10;&amp;amp;ThisIsNotDefined; &amp;amp;hi?;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>HTML5では末尾のセミコロンを省いた実体参照も一部受け付けます。たとえば<code>&amp;copy</code>がその例です。しかし、この仕様では文法が曖昧になりすぎるため、それらは認識されません。</p><div class="commonmark-example" id="example-29">
<div class="examplenum">
<a href="#example-29">例29</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;copy&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&amp;amp;copy&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>HTML5の名前付き実体の一覧にない文字列も、実体参照としては認識されません。</p><div class="commonmark-example" id="example-30">
<div class="examplenum">
<a href="#example-30">例30</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;MadeUpEntity;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&amp;amp;MadeUpEntity;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>実体参照と数値文字参照は、コードスパンとコードブロックを除くあらゆる文脈で認識されます。URL、<a href="https://spec.commonmark.org/0.31.2/#link-title">リンクのタイトル</a>、<a href="/docs/commonmark/v0-31-2/ja/01-guide/11-fenced-code-blocks/#fenced-code-block">フェンス付きコードブロック</a>の<a href="/docs/commonmark/v0-31-2/ja/01-guide/11-fenced-code-blocks/#info-string">情報文字列</a>もその対象です。</p><div class="commonmark-example" id="example-31">
<div class="examplenum">
<a href="#example-31">例31</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;a href="&amp;ouml;&amp;ouml;.html"&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;a href="&amp;ouml;&amp;ouml;.html"&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-32">
<div class="examplenum">
<a href="#example-32">例32</a>
</div>
<div class="column">
<pre><code class="language-text">[foo](/f&amp;ouml;&amp;ouml; "f&amp;ouml;&amp;ouml;")&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/f%C3%B6%C3%B6" title="föö"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-33">
<div class="examplenum">
<a href="#example-33">例33</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]&#10;&#10;[foo]: /f&amp;ouml;&amp;ouml; "f&amp;ouml;&amp;ouml;"&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/f%C3%B6%C3%B6" title="föö"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-34">
<div class="examplenum">
<a href="#example-34">例34</a>
</div>
<div class="column">
<pre><code class="language-text">``` f&amp;ouml;&amp;ouml;&#10;foo&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-föö"&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>実体参照と数値文字参照は、コードスパンとコードブロックの中では、文字列そのものとして扱われます。</p><div class="commonmark-example" id="example-35">
<div class="examplenum">
<a href="#example-35">例35</a>
</div>
<div class="column">
<pre><code class="language-text">`f&amp;ouml;&amp;ouml;`&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt;f&amp;amp;ouml;&amp;amp;ouml;&lt;/code&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-36">
<div class="examplenum">
<a href="#example-36">例36</a>
</div>
<div class="column">
<pre><code class="language-text">    f&amp;ouml;f&amp;ouml;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;f&amp;amp;ouml;f&amp;amp;ouml;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>実体参照と数値文字参照は、CommonMark文書の構造を示す記号の代わりには使えません。</p><div class="commonmark-example" id="example-37">
<div class="examplenum">
<a href="#example-37">例37</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;#42;foo&amp;#42;&#10;*foo*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;*foo*&#10;&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-38">
<div class="examplenum">
<a href="#example-38">例38</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;#42; foo&#10;&#10;* foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;* foo&lt;/p&gt;&#10;&lt;ul&gt;&#10;&lt;li&gt;foo&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-39">
<div class="examplenum">
<a href="#example-39">例39</a>
</div>
<div class="column">
<pre><code class="language-text">foo&amp;#10;&amp;#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;foo&#10;&#10;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-40">
<div class="examplenum">
<a href="#example-40">例40</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;#9;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&#9;foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-41">
<div class="examplenum">
<a href="#example-41">例41</a>
</div>
<div class="column">
<pre><code class="language-text">[a](url &amp;quot;tit&amp;quot;)&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;[a](url &amp;quot;tit&amp;quot;)&lt;/p&gt;&#10;</code></pre>
</div>
</div>
</div>
