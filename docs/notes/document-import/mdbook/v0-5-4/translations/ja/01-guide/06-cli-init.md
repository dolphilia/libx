---
title: "mdBook：initコマンド"
documentId: "mdbook:guide/src/cli/init.md"
order: 6
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/init.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/06-cli-init.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}]
prev: {"text": "コマンドラインツール", "link": "/v0-5-4/ja/01-guide/02-cli-index"}
next: {"text": "build", "link": "/v0-5-4/ja/01-guide/03-cli-build"}
---


<div class="mdbook-guide">
<h1 id="the-init-command"><a class="header" href="#the-init-command">initコマンド</a></h1>
<p>新しい本には、毎回共通する最小限のひな形があります。そのため、mdBookには<code>init</code>コマンドが用意されています。</p>
<p><code>init</code>コマンドは次のように使います。</p>
<pre><code class="language-bash">mdbook init&#10;</code></pre>
<p>初めて<code>init</code>コマンドを使うと、次のファイルなどが用意されます。</p>
<pre><code class="language-bash">book-test/&#10;├── book&#10;└── src&#10;    ├── chapter_1.md&#10;    └── SUMMARY.md&#10;</code></pre>
<ul>
<li>
<p><code>src</code>ディレクトリは、Markdownで本を書く場所です。ソースファイルや設定ファイルなどがすべて含まれます。</p>
</li>
<li>
<p><code>book</code>ディレクトリは、本の出力先です。すべての出力は、読者が閲覧できるようにサーバーへアップロードできる状態になっています。</p>
</li>
<li>
<p><code>SUMMARY.md</code>は本の骨組みです。詳しくは<a href="/docs/mdbook/v0-5-4/ja/01-guide/23-format-summary/">別の章</a>で説明します。</p>
</li>
</ul>
<h4 id="tip-generate-chapters-from-summarymd"><a class="header" href="#tip-generate-chapters-from-summarymd">ヒント：SUMMARY.mdから章を生成する</a></h4>
<p><code>SUMMARY.md</code>がすでにある場合、<code>init</code>コマンドはまずそれを解析し、<code>SUMMARY.md</code>に記載されたパスに従って、不足しているファイルを生成します。本全体の構成を先に考えて作り、ファイルの生成をmdBookに任せられます。</p>
<h4 id="specify-a-directory"><a class="header" href="#specify-a-directory">ディレクトリを指定する</a></h4>
<p><code>init</code>コマンドは、現在の作業ディレクトリの代わりに本のルートとして使うディレクトリを、引数で指定できます。</p>
<pre><code class="language-bash">mdbook init path/to/book&#10;</code></pre>
<h4 id="--theme"><a class="header" href="#--theme"><code>--theme</code></a></h4>
<p><code>--theme</code>フラグを使うと、ソースディレクトリ内の<code>theme</code>というディレクトリへ既定のテーマがコピーされ、変更できるようになります。</p>
<p>テーマは選択的に上書きされます。特定のファイルを上書きしたくない場合は、そのファイルを削除すると、既定のファイルが使われます。</p>
<h4 id="--title"><a class="header" href="#--title"><code>--title</code></a></h4>
<p>本のタイトルを指定します。指定しない場合は、対話的なプロンプトでタイトルを尋ねられます。</p>
<pre><code class="language-bash">mdbook init --title="my amazing book"&#10;</code></pre>
<h4 id="--ignore"><a class="header" href="#--ignore"><code>--ignore</code></a></h4>
<p>本を<a href="/docs/mdbook/v0-5-4/ja/01-guide/03-cli-build/">ビルド</a>したときに生成される<code>book</code>ディレクトリを無視するよう設定した、<code>.gitignore</code>ファイルを作成します。指定しない場合は、作成するかどうかを対話的なプロンプトで尋ねられます。</p>
<pre><code class="language-bash">mdbook init --ignore=none&#10;</code></pre>
<pre><code class="language-bash">mdbook init --ignore=git&#10;</code></pre>
<h4 id="--force"><a class="header" href="#--force"><code>--force</code></a></h4>
<p><code>.gitignore</code>の作成と本のタイトルについてのプロンプトを省略します。</p>
</div>
