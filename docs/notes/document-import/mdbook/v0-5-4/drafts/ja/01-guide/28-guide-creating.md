

<div class="mdbook-guide">
<h1 id="creating-a-book"><a class="header" href="#creating-a-book">本を作成する</a></h1>
<p><code>mdbook</code>のCLIツールをインストールすると、本を作成して出力できます。</p>
<h2 id="initializing-a-book"><a class="header" href="#initializing-a-book">本を初期化する</a></h2>
<p><code>mdbook init</code>コマンドは、作業の出発点となる空の本を含む、新しいディレクトリを作成します。作成するディレクトリ名を指定してください。</p>
<pre><code class="language-sh">mdbook init my-first-book&#10;</code></pre>
<p>本を生成する前に、いくつかの質問が表示されます。回答したら、新しい本のディレクトリへ移動できます。</p>
<pre><code class="language-sh">cd my-first-book&#10;</code></pre>
<p>本を出力する方法はいくつかありますが、簡単な方法のひとつは<code>serve</code>コマンドです。本をビルドし、ローカルのウェブサーバーを起動します。</p>
<pre><code class="language-sh">mdbook serve --open&#10;</code></pre>
<p><code>--open</code>オプションは、作成した本を表示するために既定のウェブブラウザーを開きます。本の内容を編集している間もサーバーを起動したままにできます。<code>mdbook</code>は出力を自動で再ビルドし、<em>さらに</em>ウェブブラウザーの表示も自動で更新します。</p>
<p>ほかの<code>mdbook</code>コマンドやCLIオプションについては、<a href="/docs/mdbook/v0-5-4/ja/01-guide/02-cli-index/">CLIガイド</a>を参照してください。</p>
<h2 id="anatomy-of-a-book"><a class="header" href="#anatomy-of-a-book">本を構成するもの</a></h2>
<p>本は、設定や構成を定義する複数のファイルから作られます。</p>
<h3 id="booktoml"><a class="header" href="#booktoml"><code>book.toml</code></a></h3>
<p>本のルートには、ビルド方法を指定する設定ファイル<code>book.toml</code>があります。このファイルは<a href="https://toml.io/">TOML</a>で記述します。通常、作業を始めるには既定の設定で十分です。mdBookのほかの機能やオプションを知りたい場合は、<a href="/docs/mdbook/v0-5-4/ja/01-guide/15-format-configuration-index/">設定の章</a>を参照してください。</p>
<p>基本的な<code>book.toml</code>は、次のように簡単に記述できます。</p>
<pre><code class="language-toml">&#91;book&#93;&#10;title = "My First Book"&#10;</code></pre>
<h3 id="summarymd"><a class="header" href="#summarymd"><code>SUMMARY.md</code></a></h3>
<p>次に重要なのは、<code>src/SUMMARY.md</code>にある目次ファイルです。本に含まれる全章の一覧を記述します。章を表示するには、先にこの一覧へ追加する必要があります。</p>
<p>次は、いくつかの章を含む基本的な目次ファイルです。</p>
<pre><code class="language-md"># Summary&#10;&#10;&#91;Introduction&#93;(README.md)&#10;&#10;- &#91;My First Chapter&#93;(my-first-chapter.md)&#10;- &#91;Nested example&#93;(nested/README.md)&#10;    - &#91;Sub-chapter&#93;(nested/sub-chapter.md)&#10;</code></pre>
<p>エディターで<code>src/SUMMARY.md</code>を開き、章をいくつか追加してみてください。章のファイルが存在しない場合は、<code>mdbook</code>が自動で作成します。</p>
<p>目次ファイルで指定できるほかの書式については、<a href="/docs/mdbook/v0-5-4/ja/01-guide/23-format-summary/">目次の章</a>を参照してください。</p>
<h3 id="source-files"><a class="header" href="#source-files">ソースファイル</a></h3>
<p>本の内容はすべて<code>src</code>ディレクトリにあります。各章は独立したMarkdownファイルです。通常、章のタイトルを指定するレベル1の見出しから始めます。</p>
<pre><code class="language-md"># My First Chapter&#10;&#10;Fill out your content here.&#10;</code></pre>
<p>具体的なファイルの配置は自由に決められます。ファイル構成は生成されるHTMLファイルの構成に対応するため、ファイルの配置が各章のURLの一部になることに注意してください。</p>
<p><code>mdbook serve</code>コマンドの実行中は、章のファイルを開いて編集できます。ファイルを保存するたびに、<code>mdbook</code>が本を再ビルドし、ウェブブラウザーの表示を更新します。</p>
<p>章の内容の書式については、<a href="/docs/mdbook/v0-5-4/ja/01-guide/20-format-markdown/">Markdownの章</a>を参照してください。</p>
<p><code>src</code>ディレクトリにある、ほかのファイルもすべて出力に含まれます。画像などの静的ファイルがある場合は、<code>src</code>ディレクトリ内に配置してください。</p>
<h2 id="publishing-a-book"><a class="header" href="#publishing-a-book">本を公開する</a></h2>
<p>本を書いたら、ほかの人が読めるように公開したくなるかもしれません。まず、本の出力をビルドします。<code>book.toml</code>があるディレクトリで、<code>mdbook build</code>コマンドを実行してください。</p>
<pre><code class="language-sh">mdbook build&#10;</code></pre>
<p>本のHTMLを含む<code>book</code>というディレクトリが生成されます。このディレクトリを任意のウェブサーバーに配置して公開できます。</p>
<p>公開やデプロイについて詳しくは、<a href="/docs/mdbook/v0-5-4/ja/01-guide/10-continuous-integration/">継続的インテグレーションの章</a>を参照してください。</p>
</div>
