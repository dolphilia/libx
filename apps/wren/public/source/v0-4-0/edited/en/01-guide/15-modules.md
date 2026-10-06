---
title: "Modules"
documentId: "wren:modules/index.html"
order: 15
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Modules</h1>
<p>Wren comes with two kinds of modules, the core module (built-in),
and a few optional modules that the host embedding Wren can enable.</p>
<h2>Core module <a href="#core-module" name="core-module" class="header-anchor">#</a></h2>
<p>The core module is built directly into the VM and is implicitly
imported by every other module. You don&rsquo;t need to <code>import</code> anything to use it.
It contains objects and types for the language itself like <a href="/docs/wren/v0-4-0/en/02-reference/08-modules-core-num/">numbers</a> and <a href="/docs/wren/v0-4-0/en/02-reference/12-modules-core-string/">strings</a>.</p>
<p>Because Wren is designed for <a href="/docs/wren/v0-4-0/en/01-guide/16-embedding/">embedding in applications</a>, its core
module is minimal and is focused on working with objects within Wren. For
stuff like file IO, graphics, etc., it is up to the host application to provide
interfaces for this.</p>
<h2>Optional modules <a href="#optional-modules" name="optional-modules" class="header-anchor">#</a></h2>
<p>Optional modules are available in the Wren project, but whether they are included is up to the host.
They are written in Wren and C, with no external dependencies, so including them in
your application is as easy as a simple compile flag.</p>
<p>Since they aren&rsquo;t <em>needed</em> by the VM itself to function, you can
disable some or all of them, so check if your host has them available.</p>
<p>So far there are a few optional modules:</p>
<ul>
<li><a href="/docs/wren/v0-4-0/en/02-reference/14-modules-meta/">meta docs</a></li>
<li><a href="/docs/wren/v0-4-0/en/02-reference/16-modules-random/">random docs</a></li>
</ul>
</div>
