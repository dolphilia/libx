

<div class="mdbook-guide">
<h1 id="indexhbs"><a class="header" href="#indexhbs">index.hbs</a></h1>
<p><code>index.hbs</code>は、本を出力するためのhandlebarsテンプレートです。MarkdownファイルをHTMLへ変換して、このテンプレートへ挿入します。</p>
<p>本のレイアウトやスタイルを変える場合は、このテンプレートを少し変更する必要があるでしょう。必要な事項を以下に示します。</p>
<h2 id="data"><a class="header" href="#data">データ</a></h2>
<p>多くのデータが、コンテキストを通じてhandlebarsテンプレートへ公開されます。テンプレート内では、次のようにアクセスできます。</p>
<pre><code class="language-handlebars">{{name_of_property}}&#10;</code></pre>
<p>公開されるプロパティは、次のとおりです。</p>
<ul>
<li>
<p><em><strong>language</strong></em> <code>book.toml</code>で指定する本の言語です。<code>en</code>などの形式で表します（未指定の場合は<code>en</code>）。たとえば、<code class="language-html">&lt;html lang="{{ language }}"&gt;</code>で使います。</p>
</li>
<li>
<p><em><strong>title</strong></em> 現在のページで使うタイトルです。<code>book_title</code>が設定されている場合は<code>{{ chapter_title }} - {{ book_title }}</code>と同じになり、未設定の場合は<code>chapter_title</code>をそのまま使います。</p>
</li>
<li>
<p><em><strong>book_title</strong></em> <code>book.toml</code>で指定する本のタイトルです。</p>
</li>
<li>
<p><em><strong>chapter_title</strong></em> <code>SUMMARY.md</code>に記載された、現在の章のタイトルです。</p>
</li>
<li>
<p><em><strong>path</strong></em> ソースディレクトリから、元のMarkdownファイルへの相対パスです。</p>
</li>
<li>
<p><em><strong>content</strong></em> Markdownを表示用に変換した内容です。</p>
</li>
<li>
<p><em><strong>path_to_root</strong></em> 現在のファイルから本のルートを指す、<code>../</code>だけからなるパスです。元のディレクトリ構成を保持するため、相対リンクの前にこの<code>path_to_root</code>を付けると便利です。</p>
</li>
<li>
<p><em><strong>previous</strong></em>と<em><strong>next</strong></em> 前の章と次の章へのリンクに使うオブジェクトです。対応する章の<code>title</code>と<code>link</code>プロパティを含みます。</p>
</li>
<li>
<p><em><strong>chapters</strong></em> 次の形式の辞書の配列で、</p>
<pre><code class="language-json">{"section": "1.2.1", "name": "name of this chapter", "path": "dir/markdown.md"}&#10;</code></pre>
<p>本のすべての章を含みます。たとえば、目次（サイドバー）を構築するために使います。</p>
</li>
</ul>
<h2 id="handlebars-helpers"><a class="header" href="#handlebars-helpers">Handlebarsヘルパー</a></h2>
<p>アクセスできるプロパティに加え、利用できるhandlebarsヘルパーもあります。</p>
<h3 id="toc"><a class="header" href="#toc">toc</a></h3>
<p>tocヘルパーは、次のように使います。</p>
<pre><code class="language-handlebars">{{#toc}}{{/toc}}&#10;</code></pre>
<p>本の構成に応じて、次のような出力を生成します。</p>
<pre><code class="language-html">&#x3C;ul class="chapter">&#10;    &#x3C;li>&#x3C;a href="link/to/file.html">Some chapter&#x3C;/a>&#x3C;/li>&#10;    &#x3C;li>&#10;        &#x3C;ul class="section">&#10;            &#x3C;li>&#x3C;a href="link/to/other_file.html">Some other Chapter&#x3C;/a>&#x3C;/li>&#10;        &#x3C;/ul>&#10;    &#x3C;/li>&#10;&#x3C;/ul>&#10;</code></pre>
<p>別の構成の目次を作りたい場合は、すべてのデータを含むchaptersプロパティを利用できます。ただし、現時点ではhandlebarsヘルパーで作ることはできず、JavaScriptを使う必要があります。</p>
<pre><code class="language-html">&#x3C;script>&#10;var chapters = {{chapters}};&#10;// Processing here&#10;&#x3C;/script>&#10;</code></pre>
<h3 id="resource"><a class="header" href="#resource">resource</a></h3>
<p>静的ファイルへのパスです。<code>path_to_root</code>を暗黙に含み、ファイル名にハッシュを付けて名前が変わったファイルにも対応します。</p>
<pre><code class="language-handlebars">&#x3C;link rel="stylesheet" href="{{ resource "css/chrome.css" }}">&#10;</code></pre>
<h3 id="fa"><a class="header" href="#fa">fa</a></h3>
<p>mdBookは、<a href="https://fontawesome.com">Font Awesome Free</a>のMITライセンスのSVGファイルを同梱しています。位置引数を3つ受け取ります。</p>
<ol>
<li>種類：“solid”、“regular”、“brands”のいずれか（lightとduotoneは現時点では未対応）</li>
<li>アイコン：<a href="https://fontawesome.com/v6/search">無料のアイコン集合</a>から選択</li>
<li>ID（省略可能）：指定すると、アイコンを囲む<code>&#x3C;span></code>タグへHTMLのID属性を追加</li>
</ol>
<p>たとえば、次のhandlebars構文は、このHTMLになります。</p>
<pre><code class="language-handlebars">{{fa "solid" "print" "print-button"}}&#10;</code></pre>
<pre><code class="language-html">&#x3C;span class=fa-svg id="print-button">&#x3C;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">&#x3C;path d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"/>&#x3C;/svg>&#x3C;/span>&#10;</code></pre>
</div>
