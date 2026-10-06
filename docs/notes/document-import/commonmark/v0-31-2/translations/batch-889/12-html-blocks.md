<div class="commonmark-original-content">
<h3 class="definition" id="html-blocks"><span class="number">4.6</span>HTMLブロック</h3><p><a class="definition" href="#html-block" id="html-block">HTMLブロック</a>とは、生のHTMLとして扱われる行のまとまりです。HTML出力ではエスケープされません。</p><p><a href="#html-block">HTMLブロック</a>には7種類あり、それぞれの開始条件と終了条件で定義できます。ブロックは、任意の最大3個のスペースによる字下げの後に、<a class="definition" href="#start-condition" id="start-condition">開始条件</a>を満たす行で始まります。その種類に対応する<a class="definition" href="#end-condition" id="end-condition">終了条件</a>を満たす最初の後続行で終わります。該当する行がなければ、文書の最終行、または現在のHTMLブロックを含む<a href="https://spec.commonmark.org/0.31.2/#container-blocks">コンテナブロック</a>の最終行で終わります。これは、<a href="#end-condition">終了条件</a>を満たす行に出会わない場合の扱いです。最初の行が<a href="#start-condition">開始条件</a>と<a href="#end-condition">終了条件</a>の両方を満たす場合、そのブロックにはその1行だけが含まれます。</p><ol>
<li>
<p><strong>開始条件:</strong> 行が文字列<code>&lt;pre</code>、<code>&lt;script</code>、<code>&lt;style</code>、または<code>&lt;textarea</code>で始まり、大文字と小文字は区別しません。その後にスペース、タブ、文字列<code>&gt;</code>、または行末が続きます。<br/><strong>終了条件:</strong> 行に終了タグ<code>&lt;/pre&gt;</code>、<code>&lt;/script&gt;</code>、<code>&lt;/style&gt;</code>、または<code>&lt;/textarea&gt;</code>が含まれます。大文字と小文字は区別せず、開始タグと一致する必要もありません。</p>
</li>
<li>
<p><strong>開始条件:</strong> 行が文字列<code>&lt;!--</code>で始まります。<br/><strong>終了条件:</strong> 行に文字列<code>--&gt;</code>が含まれます。</p>
</li>
<li>
<p><strong>開始条件:</strong> 行が文字列<code>&lt;?</code>で始まります。<br/><strong>終了条件:</strong> 行に文字列<code>?&gt;</code>が含まれます。</p>
</li>
<li>
<p><strong>開始条件:</strong> 行が文字列<code>&lt;!</code>で始まり、その後にASCIIの英字が続きます。<br/><strong>終了条件:</strong> 行に文字<code>&gt;</code>が含まれます。</p>
</li>
<li>
<p><strong>開始条件:</strong> 行が文字列<code>&lt;![CDATA[</code>で始まります。<br/><strong>終了条件:</strong> 行に文字列<code>]]&gt;</code>が含まれます。</p>
</li>
<li>
<p><strong>開始条件:</strong> 行が文字列<code>&lt;</code>または<code>&lt;/</code>で始まり、その後に次の文字列のいずれかが続きます。大文字と小文字は区別しません。<code>address</code>、<code>article</code>、<code>aside</code>、<code>base</code>、<code>basefont</code>、<code>blockquote</code>、<code>body</code>、<code>caption</code>、<code>center</code>、<code>col</code>、<code>colgroup</code>、<code>dd</code>、<code>details</code>、<code>dialog</code>、<code>dir</code>、<code>div</code>、<code>dl</code>、<code>dt</code>、<code>fieldset</code>、<code>figcaption</code>、<code>figure</code>、<code>footer</code>、<code>form</code>、<code>frame</code>、<code>frameset</code>、<code>h1</code>、<code>h2</code>、<code>h3</code>、<code>h4</code>、<code>h5</code>、<code>h6</code>、<code>head</code>、<code>header</code>、<code>hr</code>、<code>html</code>、<code>iframe</code>、<code>legend</code>、<code>li</code>、<code>link</code>、<code>main</code>、<code>menu</code>、<code>menuitem</code>、<code>nav</code>、<code>noframes</code>、<code>ol</code>、<code>optgroup</code>、<code>option</code>、<code>p</code>、<code>param</code>、<code>search</code>、<code>section</code>、<code>summary</code>、<code>table</code>、<code>tbody</code>、<code>td</code>、<code>tfoot</code>、<code>th</code>、<code>thead</code>、<code>title</code>、<code>tr</code>、<code>track</code>、<code>ul</code>。さらに、スペース、タブ、行末、文字列<code>&gt;</code>、または文字列<code>/&gt;</code>が続きます。<br/><strong>終了条件:</strong> 行の後に<a href="/docs/commonmark/v0-31-2/en/01-guide/02-characters-and-lines/#blank-line">空行</a>が続きます。</p>
</li>
<li>
<p><strong>開始条件:</strong> 行が完全な<a href="https://spec.commonmark.org/0.31.2/#open-tag">開始タグ</a>（<a href="https://spec.commonmark.org/0.31.2/#tag-name">タグ名</a>は<code>pre</code>、<code>script</code>、<code>style</code>、<code>textarea</code>以外の任意のもの）または完全な<a href="https://spec.commonmark.org/0.31.2/#closing-tag">終了タグ</a>で始まり、その後に0個以上のスペースやタブ、さらに行末が続きます。<br/><strong>終了条件:</strong> 行の後に<a href="/docs/commonmark/v0-31-2/en/01-guide/02-characters-and-lines/#blank-line">空行</a>が続きます。</p>
</li>
</ol><p>HTMLブロックは、対応する<a href="#end-condition">終了条件</a>、文書の最終行、またはそれを含む別の<a href="https://spec.commonmark.org/0.31.2/#container-blocks">コンテナブロック</a>の最終行によって閉じられるまで続きます。したがって、通常なら開始条件として認識されうるHTMLでも、<strong>HTMLブロックの内部</strong>では、パーサーの状態を変えることなく無視され、そのまま出力に渡されます。</p><p>たとえば、<code>&lt;pre&gt;</code>が<code>&lt;table&gt;</code>で始まったHTMLブロックの内部にあっても、パーサーの状態には影響しません。このHTMLブロックは開始条件6で始まっているため、空行で終わります。意外に感じられることもあります。</p><div class="commonmark-example" id="example-148">
<div class="examplenum">
<a href="#example-148">例148</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&lt;tr&gt;&lt;td&gt;&#10;&lt;pre&gt;&#10;**Hello**,&#10;&#10;_world_.&#10;&lt;/pre&gt;&#10;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&lt;tr&gt;&lt;td&gt;&#10;&lt;pre&gt;&#10;**Hello**,&#10;&lt;p&gt;&lt;em&gt;world&lt;/em&gt;.&#10;&lt;/pre&gt;&lt;/p&gt;&#10;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&#10;</code></pre>
</div>
</div><p>この場合、HTMLブロックは空行で終わります。<code>**Hello**</code>のテキストはそのまま残り、通常の解析が再開されます。その結果、後ろには段落、強調された<code>world</code>、インラインとブロックのHTMLが続きます。</p><p>種類7以外のすべての<a href="#html-blocks">HTMLブロック</a>は、段落を中断できます。種類7のブロックは段落を中断できません。この制限は、行を折り返した段落の内部にある長いタグが、意図せずHTMLブロックの開始と解釈されることを防ぐためです。</p><p>以下に単純な例を示します。まず、種類6の基本的なHTMLブロックです。</p><div class="commonmark-example" id="example-149">
<div class="examplenum">
<a href="#example-149">例149</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&#10;  &lt;tr&gt;&#10;    &lt;td&gt;&#10;           hi&#10;    &lt;/td&gt;&#10;  &lt;/tr&gt;&#10;&lt;/table&gt;&#10;&#10;okay.&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&#10;  &lt;tr&gt;&#10;    &lt;td&gt;&#10;           hi&#10;    &lt;/td&gt;&#10;  &lt;/tr&gt;&#10;&lt;/table&gt;&#10;&lt;p&gt;okay.&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-150">
<div class="examplenum">
<a href="#example-150">例150</a>
</div>
<div class="column">
<pre><code class="language-text"> &lt;div&gt;&#10;  *hello*&#10;         &lt;foo&gt;&lt;a&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text"> &lt;div&gt;&#10;  *hello*&#10;         &lt;foo&gt;&lt;a&gt;&#10;</code></pre>
</div>
</div><p>ブロックは終了タグで始めることもできます。</p><div class="commonmark-example" id="example-151">
<div class="examplenum">
<a href="#example-151">例151</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;/div&gt;&#10;*foo*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;/div&gt;&#10;*foo*&#10;</code></pre>
</div>
</div><p>次の例には、Markdownの段落を間にはさんだ2つのHTMLブロックがあります。</p><div class="commonmark-example" id="example-152">
<div class="examplenum">
<a href="#example-152">例152</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;DIV CLASS="foo"&gt;&#10;&#10;*Markdown*&#10;&#10;&lt;/DIV&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;DIV CLASS="foo"&gt;&#10;&lt;p&gt;&lt;em&gt;Markdown&lt;/em&gt;&lt;/p&gt;&#10;&lt;/DIV&gt;&#10;</code></pre>
</div>
</div><p>最初の行のタグは、本来空白が入る位置で分割されていれば、途中まででもかまいません。</p><div class="commonmark-example" id="example-153">
<div class="examplenum">
<a href="#example-153">例153</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div id="foo"&#10;  class="bar"&gt;&#10;&lt;/div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div id="foo"&#10;  class="bar"&gt;&#10;&lt;/div&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-154">
<div class="examplenum">
<a href="#example-154">例154</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div id="foo" class="bar&#10;  baz"&gt;&#10;&lt;/div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div id="foo" class="bar&#10;  baz"&gt;&#10;&lt;/div&gt;&#10;</code></pre>
</div>
</div><p>開始タグを閉じる必要はありません。</p><div class="commonmark-example" id="example-155">
<div class="examplenum">
<a href="#example-155">例155</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;*foo*&#10;&#10;*bar*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;*foo*&#10;&lt;p&gt;&lt;em&gt;bar&lt;/em&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>途中までのタグは、最後まで完成させる必要すらありません。不正な入力は、不正なまま出力されます。</p><div class="commonmark-example" id="example-156">
<div class="examplenum">
<a href="#example-156">例156</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div id="foo"&#10;*hi*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div id="foo"&#10;*hi*&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-157">
<div class="examplenum">
<a href="#example-157">例157</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div class&#10;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div class&#10;foo&#10;</code></pre>
</div>
</div><p>最初のタグは、タグらしく始まっていれば、有効なタグである必要すらありません。</p><div class="commonmark-example" id="example-158">
<div class="examplenum">
<a href="#example-158">例158</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div *???-&amp;&amp;&amp;-&lt;---&#10;*foo*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div *???-&amp;&amp;&amp;-&lt;---&#10;*foo*&#10;</code></pre>
</div>
</div><p>種類6のブロックでは、最初のタグだけで1行を占める必要はありません。</p><div class="commonmark-example" id="example-159">
<div class="examplenum">
<a href="#example-159">例159</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&lt;a href="bar"&gt;*foo*&lt;/a&gt;&lt;/div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&lt;a href="bar"&gt;*foo*&lt;/a&gt;&lt;/div&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-160">
<div class="examplenum">
<a href="#example-160">例160</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&lt;tr&gt;&lt;td&gt;&#10;foo&#10;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&lt;tr&gt;&lt;td&gt;&#10;foo&#10;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&#10;</code></pre>
</div>
</div><p>次の空行または文書の末尾までのすべてが、HTMLブロックに含まれます。そのため、次の例でMarkdownのコードブロックに見えるものは、実際にはHTMLブロックの一部です。HTMLブロックは、空行または文書の末尾に達するまで続きます。</p><div class="commonmark-example" id="example-161">
<div class="examplenum">
<a href="#example-161">例161</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&lt;/div&gt;&#10;``` c&#10;int x = 33;&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&lt;/div&gt;&#10;``` c&#10;int x = 33;&#10;```&#10;</code></pre>
</div>
</div><p>(6)のブロックレベルタグ一覧に<em>ない</em>タグで<a href="#html-block">HTMLブロック</a>を始めるには、最初の行にそのタグだけを置かなければなりません。また、タグは完全でなければなりません。</p><div class="commonmark-example" id="example-162">
<div class="examplenum">
<a href="#example-162">例162</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;a href="foo"&gt;&#10;*bar*&#10;&lt;/a&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;a href="foo"&gt;&#10;*bar*&#10;&lt;/a&gt;&#10;</code></pre>
</div>
</div><p>種類7のブロックでは、<a href="https://spec.commonmark.org/0.31.2/#tag-name">タグ名</a>は任意です。</p><div class="commonmark-example" id="example-163">
<div class="examplenum">
<a href="#example-163">例163</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;Warning&gt;&#10;*bar*&#10;&lt;/Warning&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;Warning&gt;&#10;*bar*&#10;&lt;/Warning&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-164">
<div class="examplenum">
<a href="#example-164">例164</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;i class="foo"&gt;&#10;*bar*&#10;&lt;/i&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;i class="foo"&gt;&#10;*bar*&#10;&lt;/i&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-165">
<div class="examplenum">
<a href="#example-165">例165</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;/ins&gt;&#10;*bar*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;/ins&gt;&#10;*bar*&#10;</code></pre>
</div>
</div><p>これらの規則は、ブロックレベルにもインラインレベルにもなれるタグを扱えるように設計されています。<code>&lt;del&gt;</code>タグはよい例です。内容を<code>&lt;del&gt;</code>タグで囲む方法は3通りあります。この場合、<code>&lt;del&gt;</code>タグだけで1行を占めているため、生のHTMLブロックになります。</p><div class="commonmark-example" id="example-166">
<div class="examplenum">
<a href="#example-166">例166</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;del&gt;&#10;*foo*&#10;&lt;/del&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;del&gt;&#10;*foo*&#10;&lt;/del&gt;&#10;</code></pre>
</div>
</div><p>この場合、直後の空行で終わるため、<code>&lt;del&gt;</code>タグだけを含む生のHTMLブロックになります。そのため、内容はCommonMarkとして解釈されます。</p><div class="commonmark-example" id="example-167">
<div class="examplenum">
<a href="#example-167">例167</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;del&gt;&#10;&#10;*foo*&#10;&#10;&lt;/del&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;del&gt;&#10;&lt;p&gt;&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;&#10;&lt;/del&gt;&#10;</code></pre>
</div>
</div><p>最後に、この場合は、<code>&lt;del&gt;</code>タグがCommonMarkの段落の<em>内部</em>の<a href="https://spec.commonmark.org/0.31.2/#raw-html">生のHTML</a>として解釈されます。タグだけで1行を占めていないため、<a href="#html-block">HTMLブロック</a>ではなくインラインHTMLになります。</p><div class="commonmark-example" id="example-168">
<div class="examplenum">
<a href="#example-168">例168</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;del&gt;*foo*&lt;/del&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;del&gt;&lt;em&gt;foo&lt;/em&gt;&lt;/del&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>文字どおりの内容を含めるためのHTMLタグ（<code>pre</code>、<code>script</code>、<code>style</code>、<code>textarea</code>）、コメント、処理命令、宣言は、少し異なる方法で扱います。最初の空行で終わるのではなく、対応する終了タグを含む最初の行で終わります。このため、これらのブロックには空行を含められます。</p><p>preタグ（種類1）の例です。</p><div class="commonmark-example" id="example-169">
<div class="examplenum">
<a href="#example-169">例169</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre language="haskell"&gt;&lt;code&gt;&#10;import Text.HTML.TagSoup&#10;&#10;main :: IO ()&#10;main = print $ parseTags tags&#10;&lt;/code&gt;&lt;/pre&gt;&#10;okay&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre language="haskell"&gt;&lt;code&gt;&#10;import Text.HTML.TagSoup&#10;&#10;main :: IO ()&#10;main = print $ parseTags tags&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;okay&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>scriptタグ（種類1）の例です。</p><div class="commonmark-example" id="example-170">
<div class="examplenum">
<a href="#example-170">例170</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;script type="text/javascript"&gt;&#10;// JavaScript example&#10;&#10;document.getElementById("demo").innerHTML = "Hello JavaScript!";&#10;&lt;/script&gt;&#10;okay&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;script type="text/javascript"&gt;&#10;// JavaScript example&#10;&#10;document.getElementById("demo").innerHTML = "Hello JavaScript!";&#10;&lt;/script&gt;&#10;&lt;p&gt;okay&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>textareaタグ（種類1）の例です。</p><div class="commonmark-example" id="example-171">
<div class="examplenum">
<a href="#example-171">例171</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;textarea&gt;&#10;&#10;*foo*&#10;&#10;_bar_&#10;&#10;&lt;/textarea&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;textarea&gt;&#10;&#10;*foo*&#10;&#10;_bar_&#10;&#10;&lt;/textarea&gt;&#10;</code></pre>
</div>
</div><p>styleタグ（種類1）の例です。</p><div class="commonmark-example" id="example-172">
<div class="examplenum">
<a href="#example-172">例172</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;style&#10;  type="text/css"&gt;&#10;h1 {color:red;}&#10;&#10;p {color:blue;}&#10;&lt;/style&gt;&#10;okay&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;style&#10;  type="text/css"&gt;&#10;h1 {color:red;}&#10;&#10;p {color:blue;}&#10;&lt;/style&gt;&#10;&lt;p&gt;okay&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>対応する終了タグがなければ、ブロックは文書の末尾、またはそれを含む<a href="https://spec.commonmark.org/0.31.2/#block-quotes">ブロック引用</a>や<a href="https://spec.commonmark.org/0.31.2/#list-items">リスト項目</a>の末尾で終わります。</p><div class="commonmark-example" id="example-173">
<div class="examplenum">
<a href="#example-173">例173</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;style&#10;  type="text/css"&gt;&#10;&#10;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;style&#10;  type="text/css"&gt;&#10;&#10;foo&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-174">
<div class="examplenum">
<a href="#example-174">例174</a>
</div>
<div class="column">
<pre><code class="language-text">&gt; &lt;div&gt;&#10;&gt; foo&#10;&#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;div&gt;&#10;foo&#10;&lt;/blockquote&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-175">
<div class="examplenum">
<a href="#example-175">例175</a>
</div>
<div class="column">
<pre><code class="language-text">- &lt;div&gt;&#10;- foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;&#10;&lt;div&gt;&#10;&lt;/li&gt;&#10;&lt;li&gt;foo&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><p>終了タグは、開始タグと同じ行にあってもかまいません。</p><div class="commonmark-example" id="example-176">
<div class="examplenum">
<a href="#example-176">例176</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;style&gt;p{color:red;}&lt;/style&gt;&#10;*foo*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;style&gt;p{color:red;}&lt;/style&gt;&#10;&lt;p&gt;&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-177">
<div class="examplenum">
<a href="#example-177">例177</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;!-- foo --&gt;*bar*&#10;*baz*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;!-- foo --&gt;*bar*&#10;&lt;p&gt;&lt;em&gt;baz&lt;/em&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>最終行で終了タグの後にあるものは、すべて<a href="#html-block">HTMLブロック</a>に含まれる点に注意してください。</p><div class="commonmark-example" id="example-178">
<div class="examplenum">
<a href="#example-178">例178</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;script&gt;&#10;foo&#10;&lt;/script&gt;1. *bar*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;script&gt;&#10;foo&#10;&lt;/script&gt;1. *bar*&#10;</code></pre>
</div>
</div><p>コメント（種類2）の例です。</p><div class="commonmark-example" id="example-179">
<div class="examplenum">
<a href="#example-179">例179</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;!-- Foo&#10;&#10;bar&#10;   baz --&gt;&#10;okay&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;!-- Foo&#10;&#10;bar&#10;   baz --&gt;&#10;&lt;p&gt;okay&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>処理命令（種類3）の例です。</p><div class="commonmark-example" id="example-180">
<div class="examplenum">
<a href="#example-180">例180</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;?php&#10;&#10;  echo '&gt;';&#10;&#10;?&gt;&#10;okay&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;?php&#10;&#10;  echo '&gt;';&#10;&#10;?&gt;&#10;&lt;p&gt;okay&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>宣言（種類4）の例です。</p><div class="commonmark-example" id="example-181">
<div class="examplenum">
<a href="#example-181">例181</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;!DOCTYPE html&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;!DOCTYPE html&gt;&#10;</code></pre>
</div>
</div><p>CDATA（種類5）の例です。</p><div class="commonmark-example" id="example-182">
<div class="examplenum">
<a href="#example-182">例182</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;![CDATA[&#10;function matchwo(a,b)&#10;{&#10;  if (a &lt; b &amp;&amp; a &lt; 0) then {&#10;    return 1;&#10;&#10;  } else {&#10;&#10;    return 0;&#10;  }&#10;}&#10;]]&gt;&#10;okay&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;![CDATA[&#10;function matchwo(a,b)&#10;{&#10;  if (a &lt; b &amp;&amp; a &lt; 0) then {&#10;    return 1;&#10;&#10;  } else {&#10;&#10;    return 0;&#10;  }&#10;}&#10;]]&gt;&#10;&lt;p&gt;okay&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>開始タグの前には、最大3個のスペースによる字下げを置けますが、4個は許されません。</p><div class="commonmark-example" id="example-183">
<div class="examplenum">
<a href="#example-183">例183</a>
</div>
<div class="column">
<pre><code class="language-text">  &lt;!-- foo --&gt;&#10;&#10;    &lt;!-- foo --&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">  &lt;!-- foo --&gt;&#10;&lt;pre&gt;&lt;code&gt;&amp;lt;!-- foo --&amp;gt;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-184">
<div class="examplenum">
<a href="#example-184">例184</a>
</div>
<div class="column">
<pre><code class="language-text">  &lt;div&gt;&#10;&#10;    &lt;div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">  &lt;div&gt;&#10;&lt;pre&gt;&lt;code&gt;&amp;lt;div&amp;gt;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>種類1〜6のHTMLブロックは段落を中断でき、前に空行を置く必要はありません。</p><div class="commonmark-example" id="example-185">
<div class="examplenum">
<a href="#example-185">例185</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;&lt;div&gt;&#10;bar&#10;&lt;/div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&lt;/p&gt;&#10;&lt;div&gt;&#10;bar&#10;&lt;/div&gt;&#10;</code></pre>
</div>
</div><p>ただし、文書の末尾の場合と、<a href="#html-block">上で示した</a>種類1〜5のブロックの場合を除き、後ろには空行が必要です。</p><div class="commonmark-example" id="example-186">
<div class="examplenum">
<a href="#example-186">例186</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;bar&#10;&lt;/div&gt;&#10;*foo*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;bar&#10;&lt;/div&gt;&#10;*foo*&#10;</code></pre>
</div>
</div><p>種類7のHTMLブロックは、段落を中断できません。</p><div class="commonmark-example" id="example-187">
<div class="examplenum">
<a href="#example-187">例187</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;&lt;a href="bar"&gt;&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;&lt;a href="bar"&gt;&#10;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>この規則は、John Gruberの元のMarkdown構文仕様とは異なります。そこでは次のように述べられています。</p><blockquote>
<p>制限は、<code>&lt;div&gt;</code>、<code>&lt;table&gt;</code>、<code>&lt;pre&gt;</code>、<code>&lt;p&gt;</code>などのブロックレベルのHTML要素を、周囲の内容と空行で区切ることと、ブロックの開始タグと終了タグをスペースやタブで字下げしないことだけです。</p>
</blockquote><p>Gruberの規則は、いくつかの点で、ここに示した規則より厳しくなっています。</p><ul>
<li>HTMLブロックの前に空行を要求します。</li>
<li>開始タグの字下げを許しません。</li>
<li>対応する終了タグを要求し、その終了タグの字下げも許しません。</li>
</ul><p>ほとんどのMarkdown実装は、Gruber自身による実装の一部も含めて、これらの制限をすべて守っているわけではありません。</p><p>ただし、Gruberの規則は、HTMLブロックの内部に空行を置けるという点で、ここに示した規則より寛容です。ここでそれを許さない理由は2つあります。まず、対応の取れたタグを解析する必要がなくなります。この解析は高コストで、対応する終了タグが見つからない場合は、文書の末尾から後戻りして解析しなければならないことがあります。次に、HTMLタグの内部にMarkdown内容を入れる、とても単純で柔軟な方法を提供できます。MarkdownとHTMLを空行で区切るだけです。</p><p>次の例と比較してください。</p><div class="commonmark-example" id="example-188">
<div class="examplenum">
<a href="#example-188">例188</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;&#10;*Emphasized* text.&#10;&#10;&lt;/div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;&lt;p&gt;&lt;em&gt;Emphasized&lt;/em&gt; text.&lt;/p&gt;&#10;&lt;/div&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-189">
<div class="examplenum">
<a href="#example-189">例189</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;*Emphasized* text.&#10;&lt;/div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;*Emphasized* text.&#10;&lt;/div&gt;&#10;</code></pre>
</div>
</div><p>Markdown実装の中には、開始タグに<code>markdown=1</code>属性がある場合、タグの内部の内容をテキストとして解釈する慣習を採用したものがあります。上の規則は、同じ表現力を得るための、より単純で洗練された方法に思われます。解析もはるかに簡単です。</p><p>考えられる主な欠点は、HTMLブロックをMarkdown文書に貼り付けても、100%確実には処理できなくなることです。しかし、<em>ほとんどの場合</em>は問題なく動きます。HTMLの空行の後には通常、HTMLブロックのタグが続くためです。たとえば次のようになります。</p><div class="commonmark-example" id="example-190">
<div class="examplenum">
<a href="#example-190">例190</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&#10;&#10;&lt;tr&gt;&#10;&#10;&lt;td&gt;&#10;Hi&#10;&lt;/td&gt;&#10;&#10;&lt;/tr&gt;&#10;&#10;&lt;/table&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&#10;&lt;tr&gt;&#10;&lt;td&gt;&#10;Hi&#10;&lt;/td&gt;&#10;&lt;/tr&gt;&#10;&lt;/table&gt;&#10;</code></pre>
</div>
</div><p>ただし、内部のタグが字下げされ、<em>さらに</em>空白で区切られている場合は問題が生じます。その場合、字下げによるコードブロックとして解釈されるためです。</p><div class="commonmark-example" id="example-191">
<div class="examplenum">
<a href="#example-191">例191</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&#10;&#10;  &lt;tr&gt;&#10;&#10;    &lt;td&gt;&#10;      Hi&#10;    &lt;/td&gt;&#10;&#10;  &lt;/tr&gt;&#10;&#10;&lt;/table&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&#10;  &lt;tr&gt;&#10;&lt;pre&gt;&lt;code&gt;&amp;lt;td&amp;gt;&#10;  Hi&#10;&amp;lt;/td&amp;gt;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;  &lt;/tr&gt;&#10;&lt;/table&gt;&#10;</code></pre>
</div>
</div><p>幸い、空行は通常は不要で、削除できます。例外は<code>&lt;pre&gt;</code>タグの内部ですが、<a href="#html-blocks">上で説明した</a>とおり、<code>&lt;pre&gt;</code>で始まる生のHTMLブロックには空行を<em>含められます</em>。</p>
</div>
