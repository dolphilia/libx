---
title: "mdBook：レンダラーの設定"
documentId: "mdbook:guide/src/format/configuration/renderers.md"
order: 18
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/configuration/renderers.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/19-format-configuration-renderers.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}, {"kind": "editorial", "html": "<p>原素材のFont Awesome SVGは変更せず、CC BY 4.0の通知を保持します。非アイコンコードにはMIT等の素材別条件を適用します。<a href=\"/docs/mdbook/source/v0-5-4/notices/FA_5_15_4_LICENSE.txt\">Font Awesome 5の原通知</a> · <a href=\"/docs/mdbook/source/v0-5-4/notices/FA_6_2_0_LICENSE.txt\">Font Awesome 6の原通知</a>。</p>"}]
prev: {"text": "プリプロセッサー", "link": "/v0-5-4/ja/01-guide/18-format-configuration-preprocessors"}
next: {"text": "環境変数", "link": "/v0-5-4/ja/01-guide/16-format-configuration-environment-variables"}
---


<div class="mdbook-guide">
<h1 id="configuring-renderers"><a class="header" href="#configuring-renderers">レンダラーの設定</a></h1>
<p>レンダラー（「バックエンド」とも呼びます）は、本の出力を生成します。</p>
<p>次のバックエンドが組み込まれています。</p>
<ul>
<li><a href="#html-renderer-options"><code>html</code></a> — 本をHTMLへ変換します。<code>book.toml</code>でほかの<code>[output]</code>テーブルを定義していなければ、既定で有効です。</li>
<li><a href="#markdown-renderer"><code>markdown</code></a> — プリプロセッサーを実行した後、本をMarkdownとして出力します。プリプロセッサーのデバッグに便利です。</li>
</ul>
<p>コミュニティは、いくつかのバックエンドを開発しています。利用できるバックエンドの一覧は、Wikiの<a href="https://github.com/rust-lang/mdBook/wiki/Third-party-plugins">Third Party Plugins</a>ページを参照してください。</p>
<p>新しいバックエンドの作り方は、<a href="/docs/mdbook/v0-5-4/ja/01-guide/12-for_developers-backends/">開発者向けのバックエンド</a>の章を参照してください。</p>
<h2 id="output-tables"><a class="header" href="#output-tables">出力テーブル</a></h2>
<p><code>book.toml</code>に、バックエンド名を付けた<code>output</code>テーブルを追加すると、バックエンドを使えます。たとえば、<code>mdbook-wordcount</code>というバックエンドなら、次のように指定します。</p>
<pre><code class="language-toml">&#91;output.wordcount&#93;&#10;</code></pre>
<p>このテーブルによって、mdBookは<code>mdbook-wordcount</code>バックエンドを実行します。</p>
<p>このテーブルには、バックエンド固有のキーと値の組も追加できます。たとえば、例のバックエンドに追加の設定が必要なら、次のように指定します。</p>
<pre><code class="language-toml">&#91;output.wordcount&#93;&#10;ignores = &#91;"Example Chapter"&#93;&#10;</code></pre>
<p><code>[output]</code>テーブルを1つでも定義すると、<code>html</code>バックエンドは既定では有効になりません。引き続き<code>html</code>バックエンドを使うには、<code>book.toml</code>ファイルに追加してください。例を示します。</p>
<pre><code class="language-toml">&#91;book&#93;&#10;title = "My Awesome Book"&#10;&#10;&#91;output.wordcount&#93;&#10;&#10;&#91;output.html&#93;&#10;</code></pre>
<p><code>output</code>テーブルを複数追加すると、出力ディレクトリの構成が変わります。バックエンドが1つなら、出力は<code>book</code>ディレクトリへ直接置かれます（場所を変更するには<a href="/docs/mdbook/v0-5-4/ja/01-guide/17-format-configuration-general/#build-options"><code>build.build-dir</code></a>を参照してください）。バックエンドが複数なら、それぞれの出力を<code>book</code>内の別々のディレクトリへ置きます。たとえば、上の例では<code>book/html</code>と<code>book/wordcount</code>になります。</p>
<h3 id="custom-backend-commands"><a class="header" href="#custom-backend-commands">独自バックエンドのコマンド</a></h3>
<p>既定では、<code>book.toml</code>へ<code>[output.foo]</code>テーブルを追加すると、<code>mdbook</code>は<code>mdbook-foo</code>実行ファイルの呼び出しを試みます。別のプログラム名を使ったり、コマンドライン引数を渡したりする場合は、<code>command</code>フィールドを追加して、この動作を上書きできます。</p>
<pre><code class="language-toml">&#91;output.random&#93;&#10;command = "python random.py"&#10;</code></pre>
<h3 id="optional-backends"><a class="header" href="#optional-backends">任意のバックエンド</a></h3>
<p>有効にしたバックエンドがインストールされていない場合、既定ではエラーになります。バックエンドを任意と指定すると、この動作を変えられます。</p>
<pre><code class="language-toml">&#91;output.wordcount&#93;&#10;optional = true&#10;</code></pre>
<p>これによって、エラーが警告になります。</p>
<h2 id="html-renderer-options"><a class="header" href="#html-renderer-options">HTMLレンダラーの設定</a></h2>
<p>HTMLレンダラーには、以下に詳しく説明するさまざまな設定があります。<code>book.toml</code>ファイルの<code>[output.html]</code>テーブルに指定してください。</p>
<pre><code class="language-toml"># Example book.toml file with all output options.&#10;&#91;book&#93;&#10;title = "Example book"&#10;authors = &#91;"John Doe", "Jane Doe"&#93;&#10;description = "The example book covers examples."&#10;&#10;&#91;output.html&#93;&#10;theme = "my-theme"&#10;default-theme = "light"&#10;preferred-dark-theme = "navy"&#10;smart-punctuation = true&#10;definition-lists = true&#10;admonitions = true&#10;mathjax-support = false&#10;additional-css = &#91;"custom.css", "custom2.css"&#93;&#10;additional-js = &#91;"custom.js"&#93;&#10;no-section-label = false&#10;git-repository-url = "https://github.com/rust-lang/mdBook"&#10;git-repository-icon = "fab-github"&#10;edit-url-template = "https://github.com/rust-lang/mdBook/edit/master/guide/{path}"&#10;site-url = "/example-book/"&#10;cname = "myproject.rs"&#10;input-404 = "not-found.md"&#10;sidebar-header-nav = true&#10;</code></pre>
<p>次の設定が使えます。</p>
<ul>
<li><strong>theme:</strong> mdBookには、既定のテーマと必要なリソースファイルが含まれます。この設定を指定すると、指定したフォルダーにあるファイルで、対応するテーマファイルを上書きします。</li>
<li><strong>default-theme:</strong> 「Change Theme」ドロップダウンで、既定として選択する配色です。既定は<code>light</code>です。</li>
<li><strong>preferred-dark-theme:</strong> 既定のダークテーマです。ブラウザーがCSSメディアクエリー<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"><code>prefers-color-scheme</code></a>でサイトのダーク版を要求すると、このテーマを使います。既定は<code>navy</code>です。</li>
<li><strong>smart-punctuation:</strong> 引用符を曲線の引用符へ、<code>...</code>を<code>…</code>へ、<code>--</code>をenダッシュへ、<code>---</code>をemダッシュへ変換します。<a href="/docs/mdbook/v0-5-4/ja/01-guide/20-format-markdown/#smart-punctuation">句読点の自動変換</a>を参照してください。既定は<code>true</code>です。</li>
<li><strong>definition-lists:</strong> <a href="/docs/mdbook/v0-5-4/ja/01-guide/20-format-markdown/#definition-lists">定義リスト</a>を有効にします。既定は<code>true</code>です。</li>
<li><strong>admonitions:</strong> <a href="/docs/mdbook/v0-5-4/ja/01-guide/20-format-markdown/#admonitions">注意書き</a>を有効にします。既定は<code>true</code>です。</li>
<li><strong>mathjax-support:</strong> <a href="/docs/mdbook/v0-5-4/ja/01-guide/21-format-mathjax/">MathJax</a>対応を追加します。既定は<code>false</code>です。</li>
<li><strong>additional-css:</strong> スタイル全体を置き換えずに本の見た目を少し変えたい場合は、スタイルシートの集合を指定できます。既定のスタイルシートの後に読み込まれ、部分的にスタイルを変更できます。</li>
<li><strong>additional-js:</strong> 本の現在の動作を削らず、新しい動作を追加したい場合は、JavaScriptファイルの集合を指定できます。既定のファイルとともに読み込まれます。</li>
<li><strong>no-section-label:</strong> mdBookは既定では、目次欄に「1.」「2.1」などの節番号を追加します。trueにすると、番号を表示しません。既定は<code>false</code>です。</li>
<li><strong>git-repository-url:</strong> 本のGitリポジトリのURLです。指定すると、本のメニューバーにアイコン付きのリンクを表示します。</li>
<li><strong>git-repository-icon:</strong> Gitリポジトリへのリンクに使うFont Awesomeのアイコンクラスです。既定は<code>fab-github</code>で、<span class="fa-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></span>のように表示されます。GitHubを使わない場合は、<span class="fa-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M80 104c13.3 0 24-10.7 24-24s-10.7-24-24-24S56 66.7 56 80s10.7 24 24 24zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24zM248 432c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24z"></path></svg></span>のように表示される<code>fas-code-fork</code>も候補になります。文字列の先頭は、regularアイコンなら<code>fa-</code>、solidアイコンなら<code>fas-</code>、brandアイコンなら<code>fab-</code>です。利用できるアイコンは<a href="https://fontawesome.com/v6/search">無料のアイコン集合</a>を参照してください。</li>
<li><strong>edit-url-template:</strong> 編集URLのテンプレートです。指定すると「Suggest an edit」ボタン（<span class="fa-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M421.7 220.3l-11.3 11.3-22.6 22.6-205 205c-6.6 6.6-14.8 11.5-23.8 14.1L30.8 511c-8.4 2.5-17.5 .2-23.7-6.1S-1.5 489.7 1 481.2L38.7 353.1c2.6-9 7.5-17.2 14.1-23.8l205-205 22.6-22.6 11.3-11.3 33.9 33.9 62.1 62.1 33.9 33.9zM96 353.9l-9.3 9.3c-.9 .9-1.6 2.1-2 3.4l-25.3 86 86-25.3c1.3-.4 2.5-1.1 3.4-2l9.3-9.3H112c-8.8 0-16-7.2-16-16V353.9zM453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-14.5 14.5-22.6 22.6-11.3 11.3-33.9-33.9-62.1-62.1L314.3 67.7l11.3-11.3 22.6-22.6 14.5-14.5c25-25 65.5-25 90.5 0z"></path></svg></span>）を表示し、閲覧中のページの編集へ直接移動できます。たとえばGitHubのプロジェクトでは<code>https://github.com/&lt;owner&gt;/&lt;repo&gt;/edit/&lt;branch&gt;/{path}</code>、Bitbucketでは<code>https://bitbucket.org/&lt;owner&gt;/&lt;repo&gt;/src/&lt;branch&gt;/{path}?mode=edit</code>を指定します。{path}は、リポジトリ内のファイルの完全なパスに置き換えられます。</li>
<li><strong>input-404:</strong> ファイルが見つからない場合に使うMarkdownファイルの名前です。出力ファイルは同じ名前で、拡張子が<code>html</code>に置き換わります。既定は<code>404.md</code>です。</li>
<li><strong>site-url:</strong> 本を公開するURLです。サブディレクトリのURLへアクセスしても、404ファイルのナビゲーションリンクやscript/cssの読み込みが正しく動くようにするために必要です。既定は<code>/</code>です。<code>site-url</code>を設定する場合、アセットには文書を基準とした相対リンクを使ってください。つまり、<code>/</code>で始めないようにします。</li>
<li><strong>cname:</strong> 本を公開するDNSのサブドメインまたはapexドメインです。GitHub Pagesの要件に従い、サイトのルートにCNAMEというファイルを作り、この文字列を書き込みます（<a href="https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site"><em>GitHub Pagesサイトのカスタムドメインを管理する</em></a>を参照）。</li>
<li><strong>hash-files:</strong> 静的アセットのファイル名に、内容から作った暗号学的な「指紋」を含めます。内容を変更するとファイル名も変わります。たとえば、<code>css/chrome.css</code>は<code>css/chrome-9b8f428e.css</code>になる場合があります。章のHTMLファイルの名前は変わりません。静的CSSとJSは、<code>{{ resource "filename" }}</code>ディレクティブで相互に参照できます。既定は<code>true</code>です。</li>
<li><strong>sidebar-header-nav:</strong> <code>true</code>なら、現在のページの見出しへのナビゲーションをサイドバーに含めます。既定は<code>true</code>です。</li>
</ul>
<h3 id="outputhtmlprint"><a class="header" href="#outputhtmlprint"><code>&#91;output.html.print&#93;</code></a></h3>
<p><code>[output.html.print]</code>テーブルでは、印刷出力を制御します。既定では、mdBookは本の右上にアイコン（<span class="fa-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zm-16-88c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"></path></svg></span>）を置き、本全体を1ページとして印刷できるようにします。</p>
<pre><code class="language-toml">&#91;output.html.print&#93;&#10;enable = true    # include support for printable output&#10;page-break = true # insert page-break after each chapter&#10;</code></pre>
<ul>
<li><strong>enable:</strong> 印刷機能を有効にします。<code>false</code>なら、印刷に関する機能を一切出力しません。既定は<code>true</code>です。</li>
<li><strong>page-break:</strong> 章の間に改ページを挿入します。既定は<code>true</code>です。</li>
</ul>
<h3 id="outputhtmlfold"><a class="header" href="#outputhtmlfold"><code>&#91;output.html.fold&#93;</code></a></h3>
<p><code>[output.html.fold]</code>テーブルでは、ナビゲーションサイドバーの章の一覧を折りたたむ動作を制御します。</p>
<pre><code class="language-toml">&#91;output.html.fold&#93;&#10;enable = false    # whether or not to enable section folding&#10;level = 0         # the depth to start folding&#10;</code></pre>
<ul>
<li><strong>enable:</strong> 節の折りたたみを有効にします。無効の場合、すべての折りたたみを開きます。既定は<code>false</code>です。</li>
<li><strong>level:</strong> 値が大きいほど、開いた状態の領域が多くなります。0の場合は、すべて閉じます。既定は<code>0</code>です。</li>
</ul>
<h3 id="outputhtmlplayground"><a class="header" href="#outputhtmlplayground"><code>&#91;output.html.playground&#93;</code></a></h3>
<p><code>[output.html.playground]</code>テーブルでは、Rustのコード例と、<a href="https://play.rust-lang.org/">Rust Playground</a>との連携を制御します。</p>
<pre><code class="language-toml">&#91;output.html.playground&#93;&#10;editable = false         # allows editing the source code&#10;copyable = true          # include the copy button for copying code snippets&#10;copy-js = true           # includes the JavaScript for the code editor&#10;line-numbers = false     # displays line numbers for editable code&#10;runnable = true          # displays a run button for rust code&#10;</code></pre>
<ul>
<li><strong>editable:</strong> ソースコードの編集を許可します。既定は<code>false</code>です。</li>
<li><strong>copyable:</strong> コードにコピーボタンを表示します。既定は<code>true</code>です。</li>
<li><strong>copy-js:</strong> エディターのJavaScriptファイルを出力ディレクトリへコピーします。既定は<code>true</code>です。</li>
<li><strong>line-numbers:</strong> 編集可能なコードに行番号を表示します。<code>editable</code>と<code>copy-js</code>の両方を<code>true</code>にする必要があります。既定は<code>false</code>です。</li>
<li><strong>runnable:</strong> Rustのコードに実行ボタンを表示します。<code>false</code>にすると、playgroundで実行する機能を全体で無効にします。既定は<code>true</code>です。</li>
</ul>
<h3 id="outputhtmlcode"><a class="header" href="#outputhtmlcode"><code>&#91;output.html.code&#93;</code></a></h3>
<p><code>[output.html.code]</code>テーブルでは、コードブロックを制御します。</p>
<pre><code class="language-toml">&#91;output.html.code&#93;&#10;# A prefix string per language (one or more chars).&#10;# Any line starting with whitespace+prefix is hidden.&#10;hidelines = { python = "~" }&#10;</code></pre>
<ul>
<li><strong>hidelines:</strong> 言語ごとに<a href="/docs/mdbook/v0-5-4/ja/01-guide/22-format-mdbook/#hiding-code-lines">コード行を非表示にする</a>方法を定義するテーブルです。キーは言語、値は文字列で、この接頭辞で始まるコード行が非表示になります。</li>
</ul>
<h3 id="outputhtmlsearch"><a class="header" href="#outputhtmlsearch"><code>&#91;output.html.search&#93;</code></a></h3>
<p><code>[output.html.search]</code>テーブルでは、組み込みの全文<a href="/docs/mdbook/v0-5-4/ja/01-guide/30-guide-reading/#search">検索</a>を制御します。mdBookは<code>search</code>機能を有効にしてコンパイルする必要があります（既定で有効です）。</p>
<pre><code class="language-toml">&#91;output.html.search&#93;&#10;enable = true            # enables the search feature&#10;limit-results = 30       # maximum number of search results&#10;teaser-word-count = 30   # number of words used for a search result teaser&#10;use-boolean-and = true   # multiple search terms must all match&#10;boost-title = 2          # ranking boost factor for matches in headers&#10;boost-hierarchy = 1      # ranking boost factor for matches in page names&#10;boost-paragraph = 1      # ranking boost factor for matches in text&#10;expand = true            # partial words will match longer terms&#10;heading-split-level = 3  # link results to heading levels&#10;copy-js = true           # include Javascript code for search&#10;</code></pre>
<ul>
<li><strong>enable:</strong> 検索機能を有効にします。既定は<code>true</code>です。</li>
<li><strong>limit-results:</strong> 検索結果の最大件数です。既定は<code>30</code>です。</li>
<li><strong>teaser-word-count:</strong> 検索結果の短い抜粋に使う単語数です。既定は<code>30</code>です。</li>
<li><strong>use-boolean-and:</strong> 複数の検索語を論理的にどう結び付けるかを定めます。trueなら、すべての検索語が各結果に含まれている必要があります。既定は<code>false</code>です。</li>
<li><strong>boost-title:</strong> 検索語が見出しに含まれる場合、検索結果のスコアへ掛ける増加係数です。既定は<code>2</code>です。</li>
<li><strong>boost-hierarchy:</strong> 検索語が階層に含まれる場合、検索結果のスコアへ掛ける増加係数です。階層には、親文書のすべてのタイトルと、すべての親見出しが含まれます。既定は<code>1</code>です。</li>
<li><strong>boost-paragraph:</strong> 検索語が本文に含まれる場合、検索結果のスコアへ掛ける増加係数です。既定は<code>1</code>です。</li>
<li><strong>expand:</strong> 長い単語にも一致させる場合はtrueにします。たとえば、<code>micro</code>の検索で<code>microwave</code>にも一致します。既定は<code>true</code>です。</li>
<li><strong>heading-split-level:</strong> 検索結果は、結果を含む文書の節へリンクします。文書は、指定したレベル以下の見出しで節に分割されます。既定は<code>3</code>です（<code>### This is a level 3 heading</code>）。</li>
<li><strong>copy-js:</strong> 検索実装のJavaScriptファイルを出力ディレクトリへコピーします。既定は<code>true</code>です。</li>
</ul>
<h4 id="outputhtmlsearchchapter"><a class="header" href="#outputhtmlsearchchapter"><code>&#91;output.html.search.chapter&#93;</code></a></h4>
<p>[<code>output.html.search.chapter</code>]テーブルでは、章やディレクトリごとに検索設定を変えられます。各キーは章のソースファイルまたはディレクトリのパスで、値はそのパスへ適用する設定テーブルです。これらは再帰的にマージされ、より具体的なパスが優先されます。</p>
<pre><code class="language-toml">&#91;output.html.search.chapter&#93;&#10;# Disables search indexing for all chapters in the `appendix` directory.&#10;"appendix" = { enable = false }&#10;# Enables search indexing for just this one appendix chapter.&#10;"appendix/glossary.md" = { enable = true }&#10;</code></pre>
<ul>
<li><strong>enable:</strong> 指定した章の検索インデックスへの登録を有効または無効にします。既定は<code>true</code>です。全体の<code>output.html.search.enable</code>設定は上書きしません。どの検索機能を使う場合も、全体の設定を<code>true</code>にする必要があります。章の登録を無効にすると、読者が語句を検索して、見つかるはずの結果が見つからずに混乱する可能性があります。章をインデックスに残すと検索結果の品質に問題が生じる、例外的な場合にだけ使ってください。</li>
</ul>
<h3 id="outputhtmlredirect"><a class="header" href="#outputhtmlredirect"><code>&#91;output.html.redirect&#93;</code></a></h3>
<p><code>[output.html.redirect]</code>テーブルでは、リダイレクトを追加できます。ページを移動、改名、削除した際に、旧URLへのリンクを新しい場所へ誘導するために便利です。</p>
<pre><code class="language-toml">&#91;output.html.redirect&#93;&#10;"/appendices/bibliography.html" = "https://rustc-dev-guide.rust-lang.org/appendix/bibliography.html"&#10;"/other-installation-methods.html" = "../infra/other-installation-methods.html"&#10;&#10;# Fragment redirects also work.&#10;"/some-existing-page.html#old-fragment" = "some-existing-page.html#new-fragment"&#10;&#10;# Fragment redirects also work for deleted pages.&#10;"/old-page.html" = "new-page.html"&#10;"/old-page.html#old-fragment" = "new-page.html#new-fragment"&#10;</code></pre>
<p>このテーブルにはキーと値の組を指定します。キーは、リダイレクト用のファイルを作成する場所を、ビルドディレクトリからの絶対パスで表します（例：<code>/appendices/bibliography.html</code>）。値には、ブラウザーの移動先となる任意の有効なURIを指定できます（例：<code>https://rust-lang.org/</code>、<code>/overview.html</code>、<code>../bibliography.html</code>）。</p>
<p>指定した場所へ自動でリダイレクトするHTMLページが生成されます。</p>
<p>フラグメントのリダイレクトを指定した場合、そのページはJavaScriptを使って正しい場所へ移動させる必要があります。節の見出しを改名、移動したときに便利です。フラグメントのリダイレクトは、既存のページと削除したページで使えます。</p>
<h2 id="markdown-renderer"><a class="header" href="#markdown-renderer">Markdownレンダラー</a></h2>
<p>Markdownレンダラーは、プリプロセッサーを実行した後、その結果のMarkdownを出力します。主にプリプロセッサーのデバッグに便利で、特に<code>mdbook test</code>と組み合わせると、<code>mdbook</code>が<code>rustdoc</code>へ渡すMarkdownを確認できます。</p>
<p>Markdownレンダラーは<code>mdbook</code>に含まれますが、既定では無効です。次の空のテーブルを<code>book.toml</code>へ追加すると、有効になります。</p>
<pre><code class="language-toml">&#91;output.markdown&#93;&#10;</code></pre>
<p>現時点でMarkdownレンダラーに設定項目はありません。有効か無効かだけを指定できます。</p>
<p>Markdownレンダラーの前に実行するプリプロセッサーの指定方法は、<a href="/docs/mdbook/v0-5-4/ja/01-guide/18-format-configuration-preprocessors/">プリプロセッサーの文書</a>を参照してください。</p>
</div>
