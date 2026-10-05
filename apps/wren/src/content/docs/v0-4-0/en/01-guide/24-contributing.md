---
title: "Contributing"
documentId: "wren:contributing.html"
order: 24
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Contributing</h1>
<p>Like the bird, Wren&rsquo;s ecosystem is small but full of life. Almost everything is
under active development and there&rsquo;s lots to do. We&rsquo;d be delighted to have you
help.</p>
<p>The first thing to do is to join <a href="https://discord.gg/Kx6PxSX">the discord community</a> (or <a href="https://groups.google.com/forum/#!forum/wren-lang">the mailing list</a>) and say,
&ldquo;Hi&rdquo;. There are no strangers to Wren, just friends we haven&rsquo;t met yet.</p>
<h2>Growing the ecosystem <a href="#growing-the-ecosystem" name="growing-the-ecosystem" class="header-anchor">#</a></h2>
<p>The simplest and often most helpful way to join the Wren party is to be a Wren
<em>user</em>. Create an application that embeds Wren. Write a library or a handy
utility in Wren. Add syntax highlighting support for Wren to your favorite text
editor. Share that stuff and it will help the next Wren user to come along.</p>
<p>If you do any of the above, let us know by adding it to <a href="https://github.com/wren-lang/wren/wiki">the wiki</a>. <br />
We like to keep track of:</p>
<ul>
<li><a href="https://github.com/wren-lang/wren/wiki/Applications">Applications</a> that host Wren as a scripting language.</li>
<li><a href="https://github.com/wren-lang/wren/wiki/Modules">Modules</a> written in Wren that others can use.</li>
<li><a href="https://github.com/wren-lang/wren/wiki/Language-Bindings">Language bindings</a> that let you interact with Wren from other
  languages.</li>
<li><a href="https://github.com/wren-lang/wren/wiki/Tools">Tools and utilities</a> that make it easier to be a Wren programmer.</li>
</ul>
<h2>Contributing to Wren <a href="#contributing-to-wren" name="contributing-to-wren" class="header-anchor">#</a></h2>
<p>You&rsquo;re also more than welcome to contribute to Wren itself, both the core VM and
the command-line interpreter. The source is developed <a href="https://github.com/wren-lang/">on GitHub</a>. Our
hope is that the codebase, tests, and <a href="https://github.com/wren-lang/wren/tree/main/doc/site">documentation</a> are easy to
understand and contribute to. If they aren&rsquo;t, that&rsquo;s a bug.</p>
<p>You can learn how to build wren on the <a href="/docs/wren/v0-4-0/en/01-guide/02-getting-started/#building-wren">getting started page</a>.</p>
<h3>Finding something to hack on <a href="#finding-something-to-hack-on" name="finding-something-to-hack-on" class="header-anchor">#</a></h3>
<p>Between the <a href="https://github.com/wren-lang/wren/issues">issue tracker</a> and searching for <code>TODO</code> comments in the
code, it&rsquo;s pretty easy to find something that needs doing, though we don&rsquo;t
always do a good job of writing everything down.</p>
<p>If nothing there suits your fancy, new ideas are welcome as well! If you have an
idea for a significant change or addition, please file a <a href="https://github.com/wren-lang/wren/labels/proposal">proposal</a> to discuss
it before writing lots of code. Wren tries very <em>very</em> hard to be minimal which
means often having to say &ldquo;no&rdquo; to language additions, even really cool ones.</p>
<h3>Hacking on docs <a href="#hacking-on-docs" name="hacking-on-docs" class="header-anchor">#</a></h3>
<p>The <a href="/docs/wren/v0-4-0/en/01-guide/01-overview/">documentation</a> is one of the easiest&mdash;and most
important!&mdash;parts of Wren to contribute to. The source for the site is
written in <a href="http://daringfireball.net/projects/markdown/">Markdown</a> and lives under <code>doc/site</code>. A
simple Python 3 script, <code>util/generate_docs.py</code>, converts that to HTML and CSS.</p>
<pre><code>$ python util/generate_docs.py&#10;</code></pre>
<p>This generates the site in <code>build/docs/</code>. You can run any simple static web
server from there. Python includes one:</p>
<pre><code>$ cd build/docs&#10;$ python -m http.server&#10;</code></pre>
<p>Running that script every time you change a line of Markdown can be slow,
so there is also a file watching version that will automatically regenerate the
docs when you edit a file:</p>
<pre><code>$ python util/generate_docs.py --watch&#10;</code></pre>
<h3>Hacking on the VM <a href="#hacking-on-the-vm" name="hacking-on-the-vm" class="header-anchor">#</a></h3>
<p>The basic process is simple:</p>
<ol>
<li>
<p><strong>Make sure you can build and run the tests locally.</strong> It&rsquo;s good to ensure
   you&rsquo;re starting from a happy place before you poke at the code. Running the
   tests is as simple as <a href="/docs/wren/v0-4-0/en/01-guide/02-getting-started/#building-wren">building the vm project</a>,
   which generates <code>bin/wren_test</code> and then running the following python 3 script:</p>
<pre><code>$ python util/test.py&#10;</code></pre>
<p>If there are no failures, you&rsquo;re good to go.</p>
</li>
<li>
<p><strong><a href="https://help.github.com/articles/fork-a-repo/">Fork the repo</a> so you can change it locally.</strong> Please make your
   changes in separate <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow">feature branches</a> to make things a little easier.</p>
</li>
<li>
<p><strong>Change the code.</strong> Please follow the style of the surrounding code. That
   basically means <code>camelCase</code> names, <code>{</code> on the next line, keep within 80
   columns, and two spaces of indentation. If you see places where the existing
   code is inconsistent, let us know.</p>
</li>
<li>
<p><strong>Write some tests for your new functionality.</strong> They live under <code>test/</code>.
   Take a look at some existing tests to get an idea of how to define
   expectations.</p>
</li>
<li>
<p><strong>Make sure the tests all pass, both the old ones and your new ones.</strong></p>
</li>
<li>
<p><strong>Add your name and email to the <a href="https://github.com/wren-lang/wren/tree/main/AUTHORS">AUTHORS</a> file if you haven&rsquo;t already.</strong></p>
</li>
<li>
<p><strong>Send a <a href="https://github.com/wren-lang/wren/pulls">pull request</a>.</strong> Pat yourself on the back for contributing to a
   fun open source project! </p>
</li>
</ol>
<h2>Getting help <a href="#getting-help" name="getting-help" class="header-anchor">#</a></h2>
<p>If at any point you have questions, feel free to <a href="https://github.com/wren-lang/wren/issues">file an issue</a> or ask
on the <a href="https://discord.gg/Kx6PxSX">discord community</a> (or the <a href="https://groups.google.com/forum/#!forum/wren-lang">mailing list</a>). If you&rsquo;re a Redditor, try the
<a href="https://www.reddit.com/r/wren_lang/">/r/wren_lang</a> subreddit. You can also email me directly (<code>robert</code> at
<code>stuffwithstuff.com</code>) if you want something less public.</p>
</div>
