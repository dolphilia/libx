<div class="commonmark-original-content">
<h3 class="definition" id="tabs"><span class="number">2.2</span>タブ</h3><p>行の中のタブは、<a href="/docs/commonmark/v0-31-2/en/01-guide/02-characters-and-lines/#space">スペース</a>には展開されません。ただし、スペースがブロック構造の定義に使われる文脈では、タブは4文字間隔のタブストップでスペースに置き換えられたかのように扱われます。</p><p>したがって、たとえば字下げによるコードブロックでは、4個のスペースの代わりにタブを使えます。ただし、内部のタブはスペースに展開されず、実際のタブのまま引き渡されることに注意してください。</p><div class="commonmark-example" id="example-1">
<div class="examplenum">
<a href="#example-1">例1</a>
</div>
<div class="column">
<pre><code class="language-text">&#9;foo&#9;baz&#9;&#9;bim&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo&#9;baz&#9;&#9;bim&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-2">
<div class="examplenum">
<a href="#example-2">例2</a>
</div>
<div class="column">
<pre><code class="language-text">  &#9;foo&#9;baz&#9;&#9;bim&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo&#9;baz&#9;&#9;bim&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-3">
<div class="examplenum">
<a href="#example-3">例3</a>
</div>
<div class="column">
<pre><code class="language-text">    a&#9;a&#10;    ὐ&#9;a&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;a&#9;a&#10;ὐ&#9;a&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>次の例では、リスト項目の続きの段落がタブで字下げされています。その効果は、4個のスペースによる字下げとまったく同じです。</p><div class="commonmark-example" id="example-4">
<div class="examplenum">
<a href="#example-4">例4</a>
</div>
<div class="column">
<pre><code class="language-text">  - foo&#10;&#10;&#9;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;&#10;&lt;p&gt;foo&lt;/p&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-5">
<div class="examplenum">
<a href="#example-5">例5</a>
</div>
<div class="column">
<pre><code class="language-text">- foo&#10;&#10;&#9;&#9;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;&#10;&lt;p&gt;foo&lt;/p&gt;&#10;&lt;pre&gt;&lt;code&gt;  bar&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><p>通常、ブロック引用を始める<code>&gt;</code>の後には、任意でスペースを1つ置けます。このスペースは内容の一部とはみなされません。次の例では<code>&gt;</code>の後にタブがあり、そのタブを3個のスペースに展開したものとして扱います。このうち1個のスペースは区切り記号の一部とみなされるため、<code>foo</code>はブロック引用の内部で6個のスペースによって字下げされているとみなされます。したがって、先頭に2個のスペースを持つ字下げコードブロックになります。</p><div class="commonmark-example" id="example-6">
<div class="examplenum">
<a href="#example-6">例6</a>
</div>
<div class="column">
<pre><code class="language-text">&gt;&#9;&#9;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;pre&gt;&lt;code&gt;  foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;/blockquote&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-7">
<div class="examplenum">
<a href="#example-7">例7</a>
</div>
<div class="column">
<pre><code class="language-text">-&#9;&#9;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;&#10;&lt;pre&gt;&lt;code&gt;  foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-8">
<div class="examplenum">
<a href="#example-8">例8</a>
</div>
<div class="column">
<pre><code class="language-text">    foo&#10;&#9;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo&#10;bar&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-9">
<div class="examplenum">
<a href="#example-9">例9</a>
</div>
<div class="column">
<pre><code class="language-text"> - foo&#10;   - bar&#10;&#9; - baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;foo&#10;&lt;ul&gt;&#10;&lt;li&gt;bar&#10;&lt;ul&gt;&#10;&lt;li&gt;baz&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-10">
<div class="examplenum">
<a href="#example-10">例10</a>
</div>
<div class="column">
<pre><code class="language-text">#&#9;Foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;Foo&lt;/h1&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-11">
<div class="examplenum">
<a href="#example-11">例11</a>
</div>
<div class="column">
<pre><code class="language-text">*&#9;*&#9;*&#9;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;</code></pre>
</div>
</div><h3 class="definition" id="insecure-characters"><span class="number">2.3</span>安全でない文字</h3><p>安全上の理由から、Unicode文字<code>U+0000</code>は置換文字（REPLACEMENT CHARACTER、<code>U+FFFD</code>）に置き換えなければなりません。</p>
</div>
