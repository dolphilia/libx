<div class="commonmark-original-content">
<h2 class="definition" data-source-heading="chapter" id="blocks-and-inlines"><span class="number">3</span>ブロックとインライン</h2><p>文書は、<a class="definition" href="#blocks" id="blocks">ブロック</a>の並びとして考えられます。ブロックとは、段落、ブロック引用、リスト、見出し、区切り線、コードブロックなどの構造要素です。ブロック引用やリスト項目のように、別のブロックを含むブロックもあります。一方、見出しや段落のようなブロックは、テキスト、リンク、強調されたテキスト、画像、コードスパンなどの<a class="definition" href="#inline" id="inline">インライン</a>内容を含みます。</p><h3 class="definition" id="precedence"><span class="number">3.1</span>優先順位</h3><p>ブロック構造を示す記号は、インライン構造を示す記号よりも常に優先されます。したがって、たとえば次の例は、コードスパンを含む1つの項目からなるリストではなく、2つの項目からなるリストです。</p><div class="commonmark-example" id="example-42">
<div class="examplenum">
<a href="#example-42">例42</a>
</div>
<div class="column">
<pre><code class="language-text">- `one&#10;- two`&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;`one&lt;/li&gt;&#10;&lt;li&gt;two`&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><p>このことから、解析は2段階で進められます。まず、文書のブロック構造を判別します。次に、段落、見出し、その他のブロック構造の内部にあるテキスト行を、インライン構造として解析します。第2段階では、リンク参照定義についての情報が必要になりますが、その情報がそろうのは第1段階の終わりです。第1段階では行を順番に処理する必要があります。一方、第2段階は並列に処理できます。あるブロック要素のインライン解析は、ほかのブロック要素のインライン解析に影響しないためです。</p><h3 class="definition" id="container-blocks-and-leaf-blocks"><span class="number">3.2</span>コンテナブロックと葉ブロック</h3><p>ブロックは、ほかのブロックを含められる<a href="https://spec.commonmark.org/0.31.2/#container-blocks">コンテナブロック</a>と、含められない<a href="/docs/commonmark/v0-31-2/en/01-guide/07-thematic-breaks/#leaf-blocks">葉ブロック</a>の2種類に分けられます。</p>
</div>
