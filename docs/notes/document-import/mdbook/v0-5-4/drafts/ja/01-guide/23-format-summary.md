

<div class="mdbook-guide">
<h1 id="summarymd"><a class="header" href="#summarymd">SUMMARY.md</a></h1>
<p>目次ファイルは、収録する章、その順序と階層、ソースファイルの場所をmdBookへ伝えるために使います。このファイルがなければ、本は作れません。</p>
<p>このMarkdownファイルの名前は、<code>SUMMARY.md</code>でなければなりません。解析しやすくするため、厳格な書式が定められており、以下の構成に従う必要があります。以下に指定されていない要素は、書式でも文字列でも、よくても無視され、場合によっては本のビルド時にエラーになる可能性があります。</p>
<h3 id="structure"><a class="header" href="#structure">構成</a></h3>
<ol>
<li>
<p><em><strong>タイトル</strong></em> — 省略できますが、通常は<code class="language-markdown"># Summary</code>などのタイトルで始めます。ただし、解析時には無視されるので、なくても構いません。</p>
<pre><code class="language-markdown"># Summary&#10;</code></pre>
</li>
<li>
<p><em><strong>前付けの章</strong></em> — 主な番号付きの章の前に、番号なしの章を追加できます。序文や導入などに便利です。ただし、前付けの章は入れ子にできず、すべてルート階層に置く必要があります。また、番号付きの章を追加した後には、前付けの章を追加できません。</p>
<pre><code class="language-markdown">&#91;A Prefix Chapter&#93;(relative/path/to/markdown.md)&#10;&#10;- &#91;First Chapter&#93;(relative/path/to/markdown2.md)&#10;</code></pre>
</li>
<li>
<p><em><strong>部のタイトル</strong></em> — レベル1の見出しは、以降の番号付きの章をまとめるタイトルとして使えます。本の各部分を論理的に分けるためのものです。クリックできない文字列として表示されます。タイトルは省略でき、番号付きの章は任意の数の部に分けられます。部のタイトルにはh1見出し（<code>#</code>ひとつ）を使う必要があり、ほかのレベルの見出しは無視されます。</p>
<pre><code class="language-markdown"># My Part Title&#10;&#10;- &#91;First Chapter&#93;(relative/path/to/markdown.md)&#10;</code></pre>
</li>
<li>
<p><em><strong>番号付きの章</strong></em> — 本の主要な内容を構成します。入れ子にして、章や下位の章などの階層を作れます。</p>
<pre><code class="language-markdown"># Title of Part&#10;&#10;- &#91;First Chapter&#93;(relative/path/to/markdown.md)&#10;- &#91;Second Chapter&#93;(relative/path/to/markdown2.md)&#10;   - &#91;Sub Chapter&#93;(relative/path/to/markdown3.md)&#10;&#10;# Title of Another Part&#10;&#10;- &#91;Another Chapter&#93;(relative/path/to/markdown4.md)&#10;</code></pre>
<p>番号付きの章は、<code>-</code>または<code>*</code>で表せます（区切り記号を混在させないでください）。</p>
</li>
<li>
<p><em><strong>後付けの章</strong></em> — 前付けの章と同様に番号は付きませんが、番号付きの章の後に置きます。</p>
<pre><code class="language-markdown">- &#91;Last Chapter&#93;(relative/path/to/markdown.md)&#10;&#10;&#91;Title of Suffix Chapter&#93;(relative/path/to/markdown2.md)&#10;</code></pre>
</li>
<li>
<p><em><strong>草稿の章</strong></em> — ファイルがなく、内容もない章です。これから書く章を示す目的で使います。また、本の構成を頻繁に変更している設計段階で、ファイルの作成を避けるためにも使えます。HTMLレンダラーでは、草稿の章は目次の無効なリンクとして表示されます。左側の目次にある次の章がその例です。通常の章と同じように記述し、ファイルへのパスだけを書きません。</p>
<pre><code class="language-markdown">- &#91;Draft Chapter&#93;()&#10;</code></pre>
</li>
<li>
<p><em><strong>区切り線</strong></em> — ほかの要素の前、間、後に追加できます。ビルドした目次にHTMLの横線として表示されます。区切り線は、3つ以上のハイフンだけを含む行（<code>---</code>）です。</p>
<pre><code class="language-markdown"># My Part Title&#10;&#10;&#91;A Prefix Chapter&#93;(relative/path/to/markdown.md)&#10;&#10;---&#10;&#10;- &#91;First Chapter&#93;(relative/path/to/markdown2.md)&#10;</code></pre>
</li>
</ol>
<h3 id="example"><a class="header" href="#example">例</a></h3>
<p>以下は、このガイドの<code>SUMMARY.md</code>のMarkdownソースです。生成される目次は左側に表示されています。</p>
<pre><code class="language-markdown"># Summary&#10;&#10;&#91;Introduction&#93;(README.md)&#10;&#10;# User guide&#10;&#10;- &#91;Installation&#93;(guide/installation.md)&#10;- &#91;Reading books&#93;(guide/reading.md)&#10;- &#91;Creating a book&#93;(guide/creating.md)&#10;&#10;# Reference guide&#10;&#10;- &#91;Command-line tool&#93;(cli/README.md)&#10;    - &#91;init&#93;(cli/init.md)&#10;    - &#91;build&#93;(cli/build.md)&#10;    - &#91;watch&#93;(cli/watch.md)&#10;    - &#91;serve&#93;(cli/serve.md)&#10;    - &#91;test&#93;(cli/test.md)&#10;    - &#91;clean&#93;(cli/clean.md)&#10;    - &#91;completions&#93;(cli/completions.md)&#10;- &#91;Format&#93;(format/README.md)&#10;    - &#91;SUMMARY.md&#93;(format/summary.md)&#10;        - &#91;Draft chapter&#93;()&#10;    - &#91;Configuration&#93;(format/configuration/README.md)&#10;        - &#91;General&#93;(format/configuration/general.md)&#10;        - &#91;Preprocessors&#93;(format/configuration/preprocessors.md)&#10;        - &#91;Renderers&#93;(format/configuration/renderers.md)&#10;        - &#91;Environment variables&#93;(format/configuration/environment-variables.md)&#10;    - &#91;Theme&#93;(format/theme/README.md)&#10;        - &#91;index.hbs&#93;(format/theme/index-hbs.md)&#10;        - &#91;Syntax highlighting&#93;(format/theme/syntax-highlighting.md)&#10;        - &#91;Editor&#93;(format/theme/editor.md)&#10;    - &#91;MathJax support&#93;(format/mathjax.md)&#10;    - &#91;mdBook-specific features&#93;(format/mdbook.md)&#10;    - &#91;Markdown&#93;(format/markdown.md)&#10;- &#91;Continuous integration&#93;(continuous-integration.md)&#10;- &#91;For developers&#93;(for_developers/README.md)&#10;    - &#91;Preprocessors&#93;(for_developers/preprocessors.md)&#10;    - &#91;Alternative backends&#93;(for_developers/backends.md)&#10;&#10;-----------&#10;&#10;&#91;Contributors&#93;(misc/contributors.md)&#10;</code></pre>
</div>
