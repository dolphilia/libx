<div class="commonmark-original-content">
<h3 class="definition" id="backslash-escapes"><span class="number">2.4</span>バックスラッシュによるエスケープ</h3><p>どのASCII句読記号文字も、バックスラッシュでエスケープできます。</p><div class="commonmark-example" id="example-12">
<div class="examplenum">
<a href="#example-12">例12</a>
</div>
<div class="column">
<pre><code class="language-text">\!\"\#\$\%\&amp;\'\(\)\*\+\,\-\.\/\:\;\&lt;\=\&gt;\?\@\[\\\]\^\_\`\{\|\}\~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;!&amp;quot;#$%&amp;amp;'()*+,-./:;&amp;lt;=&amp;gt;?@[\]^_`{|}~&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>それ以外の文字の前にあるバックスラッシュは、文字そのものとして扱われます。</p><div class="commonmark-example" id="example-13">
<div class="examplenum">
<a href="#example-13">例13</a>
</div>
<div class="column">
<pre><code class="language-text">\&#9;\A\a\ \3\φ\«&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;\&#9;\A\a\ \3\φ\«&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>エスケープされた文字は普通の文字として扱われ、通常のMarkdownでの意味を持ちません。</p><div class="commonmark-example" id="example-14">
<div class="examplenum">
<a href="#example-14">例14</a>
</div>
<div class="column">
<pre><code class="language-text">\*not emphasized*&#10;\&lt;br/&gt; not a tag&#10;\[not a link](/foo)&#10;\`not code`&#10;1\. not a list&#10;\* not a list&#10;\# not a heading&#10;\[foo]: /url "not a reference"&#10;\&amp;ouml; not a character entity&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;*not emphasized*&#10;&amp;lt;br/&amp;gt; not a tag&#10;[not a link](/foo)&#10;`not code`&#10;1. not a list&#10;* not a list&#10;# not a heading&#10;[foo]: /url &amp;quot;not a reference&amp;quot;&#10;&amp;amp;ouml; not a character entity&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>バックスラッシュ自体がエスケープされている場合、その次の文字はエスケープされません。</p><div class="commonmark-example" id="example-15">
<div class="examplenum">
<a href="#example-15">例15</a>
</div>
<div class="column">
<pre><code class="language-text">\\*emphasis*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;\&lt;em&gt;emphasis&lt;/em&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>行末のバックスラッシュは<a href="https://spec.commonmark.org/0.31.2/#hard-line-break">ハード改行</a>になります。</p><div class="commonmark-example" id="example-16">
<div class="examplenum">
<a href="#example-16">例16</a>
</div>
<div class="column">
<pre><code class="language-text">foo\&#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;foo&lt;br /&gt;&#10;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>バックスラッシュによるエスケープは、コードブロック、コードスパン、自動リンク、生のHTMLの中では働きません。</p><div class="commonmark-example" id="example-17">
<div class="examplenum">
<a href="#example-17">例17</a>
</div>
<div class="column">
<pre><code class="language-text">`` \[\` ``&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt;\[\`&lt;/code&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-18">
<div class="examplenum">
<a href="#example-18">例18</a>
</div>
<div class="column">
<pre><code class="language-text">    \[\]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;\[\]&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-19">
<div class="examplenum">
<a href="#example-19">例19</a>
</div>
<div class="column">
<pre><code class="language-text">~~~&#10;\[\]&#10;~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;\[\]&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-20">
<div class="examplenum">
<a href="#example-20">例20</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;https://example.com?find=\*&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="https://example.com?find=%5C*"&gt;https://example.com?find=\*&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-21">
<div class="examplenum">
<a href="#example-21">例21</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;a href="/bar\/)"&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;a href="/bar\/)"&gt;&#10;</code></pre>
</div>
</div><p>それ以外のすべての文脈では働きます。これには、URL、リンクのタイトル、リンク参照、<a href="/docs/commonmark/v0-31-2/en/01-guide/11-fenced-code-blocks/#fenced-code-blocks">フェンス付きコードブロック</a>の<a href="/docs/commonmark/v0-31-2/en/01-guide/11-fenced-code-blocks/#info-string">情報文字列</a>も含まれます。</p><div class="commonmark-example" id="example-22">
<div class="examplenum">
<a href="#example-22">例22</a>
</div>
<div class="column">
<pre><code class="language-text">[foo](/bar\* "ti\*tle")&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/bar*" title="ti*tle"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-23">
<div class="examplenum">
<a href="#example-23">例23</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]&#10;&#10;[foo]: /bar\* "ti\*tle"&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/bar*" title="ti*tle"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-24">
<div class="examplenum">
<a href="#example-24">例24</a>
</div>
<div class="column">
<pre><code class="language-text">``` foo\+bar&#10;foo&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-foo+bar"&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div>
</div>
