<div class="commonmark-original-content">
<h3 class="definition" id="atx-headings"><span class="number">4.2</span>ATX見出し</h3><p><a class="definition" href="#atx-heading" id="atx-heading">ATX見出し</a>は、エスケープされていない<code>#</code>を1〜6個並べた開始列と、任意で置く、エスケープされていない<code>#</code>を任意の個数並べた終了列との間にある文字列で、その文字列をインライン内容として解析したものです。開始列の<code>#</code>の後には、スペース、タブ、または行末が必要です。任意の終了列の<code>#</code>の前にはスペースまたはタブが必要で、後ろに置けるのもスペースとタブだけです。開始の<code>#</code>の前には、最大3個のスペースによる字下げを置けます。見出しの生の内容から先頭と末尾のスペースやタブを取り除いてから、インライン内容として解析します。見出しのレベルは開始列の<code>#</code>の個数と同じです。</p><p>単純な見出しの例です。</p><div class="commonmark-example" id="example-62">
<div class="examplenum">
<a href="#example-62">例62</a>
</div>
<div class="column">
<pre><code class="language-text"># foo&#10;## foo&#10;### foo&#10;#### foo&#10;##### foo&#10;###### foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo&lt;/h1&gt;&#10;&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;h3&gt;foo&lt;/h3&gt;&#10;&lt;h4&gt;foo&lt;/h4&gt;&#10;&lt;h5&gt;foo&lt;/h5&gt;&#10;&lt;h6&gt;foo&lt;/h6&gt;&#10;</code></pre>
</div>
</div><p><code>#</code>が6個を超える場合、見出しにはなりません。</p><div class="commonmark-example" id="example-63">
<div class="examplenum">
<a href="#example-63">例63</a>
</div>
<div class="column">
<pre><code class="language-text">####### foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;####### foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>見出しが空でない限り、<code>#</code>の列と見出しの内容の間には、少なくとも1個のスペースまたはタブが必要です。現在、多くの実装ではスペースを要求しない点に注意してください。しかし、<a href="http://www.aaronsw.com/2002/atx/atx.py">元のATX実装</a>ではスペースが必須でした。また、この条件は、次のようなものが見出しとして解析されるのを防ぎます。</p><div class="commonmark-example" id="example-64">
<div class="examplenum">
<a href="#example-64">例64</a>
</div>
<div class="column">
<pre><code class="language-text">#5 bolt&#10;&#10;#hashtag&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;#5 bolt&lt;/p&gt;&#10;&lt;p&gt;#hashtag&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>最初の<code>#</code>がエスケープされているため、これは見出しにはなりません。</p><div class="commonmark-example" id="example-65">
<div class="examplenum">
<a href="#example-65">例65</a>
</div>
<div class="column">
<pre><code class="language-text">\## foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;## foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>内容はインラインとして解析されます。</p><div class="commonmark-example" id="example-66">
<div class="examplenum">
<a href="#example-66">例66</a>
</div>
<div class="column">
<pre><code class="language-text"># foo *bar* \*baz\*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo &lt;em&gt;bar&lt;/em&gt; *baz*&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>インライン内容を解析するとき、先頭と末尾のスペースやタブは無視されます。</p><div class="commonmark-example" id="example-67">
<div class="examplenum">
<a href="#example-67">例67</a>
</div>
<div class="column">
<pre><code class="language-text">#                  foo                     &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>最大3個のスペースによる字下げが許されます。</p><div class="commonmark-example" id="example-68">
<div class="examplenum">
<a href="#example-68">例68</a>
</div>
<div class="column">
<pre><code class="language-text"> ### foo&#10;  ## foo&#10;   # foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h3&gt;foo&lt;/h3&gt;&#10;&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;h1&gt;foo&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>4個のスペースによる字下げは多すぎます。</p><div class="commonmark-example" id="example-69">
<div class="examplenum">
<a href="#example-69">例69</a>
</div>
<div class="column">
<pre><code class="language-text">    # foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;# foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-70">
<div class="examplenum">
<a href="#example-70">例70</a>
</div>
<div class="column">
<pre><code class="language-text">foo&#10;    # bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;foo&#10;# bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>終了の<code>#</code>の列は省略できます。</p><div class="commonmark-example" id="example-71">
<div class="examplenum">
<a href="#example-71">例71</a>
</div>
<div class="column">
<pre><code class="language-text">## foo ##&#10;  ###   bar    ###&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;h3&gt;bar&lt;/h3&gt;&#10;</code></pre>
</div>
</div><p>終了列は開始列と同じ長さである必要はありません。</p><div class="commonmark-example" id="example-72">
<div class="examplenum">
<a href="#example-72">例72</a>
</div>
<div class="column">
<pre><code class="language-text"># foo ##################################&#10;##### foo ##&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo&lt;/h1&gt;&#10;&lt;h5&gt;foo&lt;/h5&gt;&#10;</code></pre>
</div>
</div><p>終了列の後にスペースやタブを置けます。</p><div class="commonmark-example" id="example-73">
<div class="examplenum">
<a href="#example-73">例73</a>
</div>
<div class="column">
<pre><code class="language-text">### foo ###     &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h3&gt;foo&lt;/h3&gt;&#10;</code></pre>
</div>
</div><p><code>#</code>の列の後にスペースとタブ以外のものがある場合、その列は終了列ではなく、見出しの内容の一部になります。</p><div class="commonmark-example" id="example-74">
<div class="examplenum">
<a href="#example-74">例74</a>
</div>
<div class="column">
<pre><code class="language-text">### foo ### b&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h3&gt;foo ### b&lt;/h3&gt;&#10;</code></pre>
</div>
</div><p>終了列の前には、スペースまたはタブが必要です。</p><div class="commonmark-example" id="example-75">
<div class="examplenum">
<a href="#example-75">例75</a>
</div>
<div class="column">
<pre><code class="language-text"># foo#&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo#&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>バックスラッシュでエスケープされた<code>#</code>は、終了列の一部には数えません。</p><div class="commonmark-example" id="example-76">
<div class="examplenum">
<a href="#example-76">例76</a>
</div>
<div class="column">
<pre><code class="language-text">### foo \###&#10;## foo #\##&#10;# foo \#&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h3&gt;foo ###&lt;/h3&gt;&#10;&lt;h2&gt;foo ###&lt;/h2&gt;&#10;&lt;h1&gt;foo #&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>ATX見出しは、周囲の内容と空行で区切る必要はなく、段落を中断できます。</p><div class="commonmark-example" id="example-77">
<div class="examplenum">
<a href="#example-77">例77</a>
</div>
<div class="column">
<pre><code class="language-text">****&#10;## foo&#10;****&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-78">
<div class="examplenum">
<a href="#example-78">例78</a>
</div>
<div class="column">
<pre><code class="language-text">Foo bar&#10;# baz&#10;Bar foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo bar&lt;/p&gt;&#10;&lt;h1&gt;baz&lt;/h1&gt;&#10;&lt;p&gt;Bar foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>ATX見出しは空でもかまいません。</p><div class="commonmark-example" id="example-79">
<div class="examplenum">
<a href="#example-79">例79</a>
</div>
<div class="column">
<pre><code class="language-text">## &#10;#&#10;### ###&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;&lt;/h2&gt;&#10;&lt;h1&gt;&lt;/h1&gt;&#10;&lt;h3&gt;&lt;/h3&gt;&#10;</code></pre>
</div>
</div>
</div>
