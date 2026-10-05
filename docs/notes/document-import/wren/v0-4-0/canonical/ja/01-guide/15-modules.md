---
title: "組み込みモジュール"
documentId: "wren:modules/index.html"
order: 15
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">組み込みモジュール</h1>
<p>Wrenには、組み込みのコアモジュールと、Wrenを組み込むホストが有効にできるいくつかのオプションモジュールという、二種類のモジュールがあります。</p>
<h2>コアモジュール <a class="header-anchor" href="#core-module" name="core-module">#</a></h2>
<p>コアモジュールはVMに直接組み込まれており、ほかのすべてのモジュールが暗黙にインポートします。使うために何かを<code>import</code>する必要はありません。<a href="/docs/wren/v0-4-0/en/02-reference/08-modules-core-num/">数値</a>や<a href="/docs/wren/v0-4-0/en/02-reference/12-modules-core-string/">文字列</a>など、言語自体のオブジェクトや型を含みます。</p>
<p>Wrenは<a href="/docs/wren/v0-4-0/ja/01-guide/16-embedding/">アプリケーションへの組み込み</a>を想定しているため、コアモジュールは最小限で、Wren内のオブジェクトの操作に重点を置いています。ファイル入出力やグラフィックスなどのためのインターフェースは、ホストアプリケーションが提供します。</p>
<h2>オプションモジュール <a class="header-anchor" href="#optional-modules" name="optional-modules">#</a></h2>
<p>オプションモジュールはWrenプロジェクト内にありますが、組み込むかどうかはホストが決めます。WrenとCで書かれていて、外部依存がないので、単純なコンパイルフラグだけで、簡単にアプリケーションへ組み込めます。</p>
<p>VM自身の動作には<em>必要ない</em>ため、一部またはすべてを無効にできます。使っているホストで利用できるか確認してください。</p>
<p>現在、次のオプションモジュールがあります。</p>
<ul>
<li><a href="/docs/wren/v0-4-0/en/02-reference/14-modules-meta/">metaの文書</a></li>
<li><a href="/docs/wren/v0-4-0/en/02-reference/16-modules-random/">randomの文書</a></li>
</ul>
</div>

