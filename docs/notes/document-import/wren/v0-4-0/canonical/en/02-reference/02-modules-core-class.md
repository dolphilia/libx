---
title: "Class Class (English original)"
documentId: "wren:modules/core/class.html"
order: 2
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Class Class (English original)</h1>
<p><strong>TODO</strong></p>
<h2>Methods <a href="#methods" name="methods" class="header-anchor">#</a></h2>
<h3><strong>name</strong> <a href="#name" name="name" class="header-anchor">#</a></h3>
<p>The name of the class.</p>
<h3><strong>supertype</strong> <a href="#supertype" name="supertype" class="header-anchor">#</a></h3>
<p>The superclass of this class.</p>
<pre class="snippet"><code>&#10;class Crustacean {}&#10;class Crab is Crustacean {}&#10;&#10;System.print(Crab.supertype) //&gt; Crustacean&#10;</code></pre>

<p>A class with no explicit superclass implicitly inherits Object:</p>
<pre class="snippet"><code>&#10;System.print(Crustacean.supertype) //&gt; Object&#10;</code></pre>

<p>Object forms the root of the class hierarchy and has no supertype:</p>
<pre class="snippet"><code>&#10;System.print(Object.supertype) //&gt; null&#10;</code></pre>
</div>
