<div class="commonmark-original-content">
<h3 class="definition" id="setext-headings"><span class="number">4.3</span>Setext見出し</h3><p><a class="definition" href="#setext-heading" id="setext-heading">Setext見出し</a>は、空行による中断のない1行以上のテキストと、それに続く<a href="#setext-heading-underline">Setext見出しの下線</a>からなります。テキストの最初の行の字下げは、3個のスペースを超えてはいけません。これらのテキスト行は、後ろにSetext見出しの下線がなければ段落として解釈されるものでなければなりません。つまり、<a href="/docs/commonmark/v0-31-2/en/01-guide/11-fenced-code-blocks/#code-fence">コードフェンス</a>、<a href="/docs/commonmark/v0-31-2/en/01-guide/08-atx-headings/#atx-headings">ATX見出し</a>、<a href="https://spec.commonmark.org/0.31.2/#block-quotes">ブロック引用</a>、<a href="/docs/commonmark/v0-31-2/en/01-guide/07-thematic-breaks/#thematic-breaks">主題区切り</a>、<a href="https://spec.commonmark.org/0.31.2/#list-items">リスト項目</a>、<a href="/docs/commonmark/v0-31-2/en/01-guide/12-html-blocks/#html-blocks">HTMLブロック</a>として解釈できるものであってはいけません。</p><p><a class="definition" href="#setext-heading-underline" id="setext-heading-underline">Setext見出しの下線</a>は、<code>=</code>を並べた列、または<code>-</code>を並べた列で、先頭の字下げは最大3個のスペース、末尾には任意の数のスペースやタブを置けます。</p><p><code>=</code>を<a href="#setext-heading-underline">Setext見出しの下線</a>に使うとレベル1の見出しになり、<code>-</code>を使うとレベル2になります。見出しの内容は、直前のテキスト行をCommonMarkのインライン内容として解析した結果です。</p><p>一般に、Setext見出しの前後に空行は必要ありません。ただし、段落を中断することはできないので、段落の後にSetext見出しが続く場合は、両者の間に空行が必要です。</p><p>単純な例です。</p><div class="commonmark-example" id="example-80">
<div class="examplenum">
<a href="#example-80">例80</a>
</div>
<div class="column">
<pre><code class="language-text">Foo *bar*&#10;=========&#10;&#10;Foo *bar*&#10;---------&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;Foo &lt;em&gt;bar&lt;/em&gt;&lt;/h1&gt;&#10;&lt;h2&gt;Foo &lt;em&gt;bar&lt;/em&gt;&lt;/h2&gt;&#10;</code></pre>
</div>
</div><p>見出しの内容は、複数行にまたがっていてもかまいません。</p><div class="commonmark-example" id="example-81">
<div class="examplenum">
<a href="#example-81">例81</a>
</div>
<div class="column">
<pre><code class="language-text">Foo *bar&#10;baz*&#10;====&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;Foo &lt;em&gt;bar&#10;baz&lt;/em&gt;&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>内容は、見出しの生の内容をインラインとして解析した結果です。見出しの生の内容は、各行をつなぎ、先頭と末尾のスペースやタブを取り除いて作ります。</p><div class="commonmark-example" id="example-82">
<div class="examplenum">
<a href="#example-82">例82</a>
</div>
<div class="column">
<pre><code class="language-text">  Foo *bar&#10;baz*&#9;&#10;====&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;Foo &lt;em&gt;bar&#10;baz&lt;/em&gt;&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>下線の長さは任意です。</p><div class="commonmark-example" id="example-83">
<div class="examplenum">
<a href="#example-83">例83</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;-------------------------&#10;&#10;Foo&#10;=&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo&lt;/h2&gt;&#10;&lt;h1&gt;Foo&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>見出しの内容の前には、最大3個のスペースによる字下げを置けます。また、下線と位置をそろえる必要はありません。</p><div class="commonmark-example" id="example-84">
<div class="examplenum">
<a href="#example-84">例84</a>
</div>
<div class="column">
<pre><code class="language-text">   Foo&#10;---&#10;&#10;  Foo&#10;-----&#10;&#10;  Foo&#10;  ===&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo&lt;/h2&gt;&#10;&lt;h2&gt;Foo&lt;/h2&gt;&#10;&lt;h1&gt;Foo&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>4個のスペースによる字下げは多すぎます。</p><div class="commonmark-example" id="example-85">
<div class="examplenum">
<a href="#example-85">例85</a>
</div>
<div class="column">
<pre><code class="language-text">    Foo&#10;    ---&#10;&#10;    Foo&#10;---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;Foo&#10;---&#10;&#10;Foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>Setext見出しの下線の前には、最大3個のスペースによる字下げを置けます。末尾にはスペースやタブを置けます。</p><div class="commonmark-example" id="example-86">
<div class="examplenum">
<a href="#example-86">例86</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;   ----      &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo&lt;/h2&gt;&#10;</code></pre>
</div>
</div><p>4個のスペースによる字下げは多すぎます。</p><div class="commonmark-example" id="example-87">
<div class="examplenum">
<a href="#example-87">例87</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;    ---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;---&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Setext見出しの下線の内部に、スペースやタブを含めることはできません。</p><div class="commonmark-example" id="example-88">
<div class="examplenum">
<a href="#example-88">例88</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;= =&#10;&#10;Foo&#10;--- -&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;= =&lt;/p&gt;&#10;&lt;p&gt;Foo&lt;/p&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>内容行の末尾のスペースやタブは、ハード改行にはなりません。</p><div class="commonmark-example" id="example-89">
<div class="examplenum">
<a href="#example-89">例89</a>
</div>
<div class="column">
<pre><code class="language-text">Foo  &#10;-----&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo&lt;/h2&gt;&#10;</code></pre>
</div>
</div><p>末尾のバックスラッシュも、ハード改行にはなりません。</p><div class="commonmark-example" id="example-90">
<div class="examplenum">
<a href="#example-90">例90</a>
</div>
<div class="column">
<pre><code class="language-text">Foo\&#10;----&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo\&lt;/h2&gt;&#10;</code></pre>
</div>
</div><p>ブロック構造を示す記号はインライン構造を示す記号より優先されるため、次の例はSetext見出しになります。</p><div class="commonmark-example" id="example-91">
<div class="examplenum">
<a href="#example-91">例91</a>
</div>
<div class="column">
<pre><code class="language-text">`Foo&#10;----&#10;`&#10;&#10;&lt;a title="a lot&#10;---&#10;of dashes"/&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;`Foo&lt;/h2&gt;&#10;&lt;p&gt;`&lt;/p&gt;&#10;&lt;h2&gt;&amp;lt;a title=&amp;quot;a lot&lt;/h2&gt;&#10;&lt;p&gt;of dashes&amp;quot;/&amp;gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Setext見出しの下線は、リスト項目やブロック引用の<a href="https://spec.commonmark.org/0.31.2/#lazy-continuation-line">省略継続行（lazy continuation line）</a>であってはいけません。</p><div class="commonmark-example" id="example-92">
<div class="examplenum">
<a href="#example-92">例92</a>
</div>
<div class="column">
<pre><code class="language-text">&gt; Foo&#10;---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;p&gt;Foo&lt;/p&gt;&#10;&lt;/blockquote&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-93">
<div class="examplenum">
<a href="#example-93">例93</a>
</div>
<div class="column">
<pre><code class="language-text">&gt; foo&#10;bar&#10;===&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;p&gt;foo&#10;bar&#10;===&lt;/p&gt;&#10;&lt;/blockquote&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-94">
<div class="examplenum">
<a href="#example-94">例94</a>
</div>
<div class="column">
<pre><code class="language-text">- Foo&#10;---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;Foo&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>段落と、それに続くSetext見出しの間には、空行が必要です。そうしないと、その段落も見出しの内容の一部になります。</p><div class="commonmark-example" id="example-95">
<div class="examplenum">
<a href="#example-95">例95</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;Bar&#10;---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo&#10;Bar&lt;/h2&gt;&#10;</code></pre>
</div>
</div><p>ただし、一般にSetext見出しの前後に空行は必要ありません。</p><div class="commonmark-example" id="example-96">
<div class="examplenum">
<a href="#example-96">例96</a>
</div>
<div class="column">
<pre><code class="language-text">---&#10;Foo&#10;---&#10;Bar&#10;---&#10;Baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;&lt;h2&gt;Foo&lt;/h2&gt;&#10;&lt;h2&gt;Bar&lt;/h2&gt;&#10;&lt;p&gt;Baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Setext見出しは空にできません。</p><div class="commonmark-example" id="example-97">
<div class="examplenum">
<a href="#example-97">例97</a>
</div>
<div class="column">
<pre><code class="language-text">&#10;====&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;====&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Setext見出しのテキスト行は、段落以外のブロック構造として解釈できるものであってはいけません。そのため、これらの例ではハイフンの行は主題区切りとして解釈されます。</p><div class="commonmark-example" id="example-98">
<div class="examplenum">
<a href="#example-98">例98</a>
</div>
<div class="column">
<pre><code class="language-text">---&#10;---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-99">
<div class="examplenum">
<a href="#example-99">例99</a>
</div>
<div class="column">
<pre><code class="language-text">- foo&#10;-----&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;foo&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-100">
<div class="examplenum">
<a href="#example-100">例100</a>
</div>
<div class="column">
<pre><code class="language-text">    foo&#10;---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-101">
<div class="examplenum">
<a href="#example-101">例101</a>
</div>
<div class="column">
<pre><code class="language-text">&gt; foo&#10;-----&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;p&gt;foo&lt;/p&gt;&#10;&lt;/blockquote&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p><code>&gt; foo</code>を文字どおりのテキストとする見出しが必要なら、バックスラッシュによるエスケープを使えます。</p><div class="commonmark-example" id="example-102">
<div class="examplenum">
<a href="#example-102">例102</a>
</div>
<div class="column">
<pre><code class="language-text">\&gt; foo&#10;------&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;&amp;gt; foo&lt;/h2&gt;&#10;</code></pre>
</div>
</div><p><strong>互換性についての注記:</strong> 既存のMarkdown実装のほとんどは、Setext見出しのテキストが複数行にまたがることを許していません。しかし、次の内容をどう解釈するかについて、合意はありません。</p><pre><code class="language-markdown">Foo&#10;bar&#10;---&#10;baz&#10;</code></pre><p>4つの異なる解釈が見られます。</p><ol>
<li>paragraph “Foo”, heading “bar”, paragraph “baz”</li>
<li>paragraph “Foo bar”, thematic break, paragraph “baz”</li>
<li>paragraph “Foo bar — baz”</li>
<li>heading “Foo bar”, paragraph “baz”</li>
</ol><p>私たちは解釈4が最も自然だと考えています。また、解釈4は複数行の見出しを許すことで、CommonMarkの表現力を高めます。解釈1を望む書き手は、最初の段落の後に空行を置けます。</p><div class="commonmark-example" id="example-103">
<div class="examplenum">
<a href="#example-103">例103</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;&#10;bar&#10;---&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&lt;/p&gt;&#10;&lt;h2&gt;bar&lt;/h2&gt;&#10;&lt;p&gt;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>解釈2を望む書き手は、主題区切りの前後に空行を置けます。</p><div class="commonmark-example" id="example-104">
<div class="examplenum">
<a href="#example-104">例104</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;bar&#10;&#10;---&#10;&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;bar&lt;/p&gt;&#10;&lt;hr /&gt;&#10;&lt;p&gt;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>または、<a href="#setext-heading-underline">Setext見出しの下線</a>にはならない主題区切りを使えます。たとえば次のようにします。</p><div class="commonmark-example" id="example-105">
<div class="examplenum">
<a href="#example-105">例105</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;bar&#10;* * *&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;bar&lt;/p&gt;&#10;&lt;hr /&gt;&#10;&lt;p&gt;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>解釈3を望む書き手は、バックスラッシュによるエスケープを使えます。</p><div class="commonmark-example" id="example-106">
<div class="examplenum">
<a href="#example-106">例106</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;bar&#10;\---&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;bar&#10;---&#10;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div>
</div>
