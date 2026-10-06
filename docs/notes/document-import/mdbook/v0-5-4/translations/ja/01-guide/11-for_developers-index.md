---
title: "mdBook：開発者向け"
documentId: "mdbook:guide/src/for_developers/README.md"
order: 28
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/for_developers/README.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/11-for_developers-index.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}]
prev: {"text": "継続的インテグレーション", "link": "/v0-5-4/ja/01-guide/10-continuous-integration"}
next: {"text": "プリプロセッサー", "link": "/v0-5-4/ja/01-guide/13-for_developers-preprocessors"}
---


<div class="mdbook-guide">
<h1 id="for-developers"><a class="header" href="#for-developers">開発者向け</a></h1>
<p><code>mdbook</code>は主にコマンドラインツールとして使われますが、内部のライブラリーを直接取り込み、本を管理するために使うこともできます。また、柔軟なプラグインの仕組みがあるため、本を分析したり別の形式へ出力したりする必要がある場合は、独自のツールや、本を処理するもの（通常は<em>バックエンド</em>と呼びます）を作れます。</p>
<p><em>開発者向け</em>の章では、<code>mdbook</code>の高度な使い方を説明します。</p>
<p>開発者が本のビルド処理へ介入する、主な方法は次の2つです。</p>
<ul>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/13-for_developers-preprocessors/">プリプロセッサー</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/12-for_developers-backends/">代替バックエンド</a></li>
</ul>
<h2 id="the-build-process"><a class="header" href="#the-build-process">ビルド処理</a></h2>
<p>本のプロジェクトを表示形式へ変換する処理は、いくつかの工程を経ます。</p>
<ol>
<li>本を読み込みます。
<ul>
<li><code>book.toml</code>を解析します。存在しなければ、既定の<code>Config</code>を使います。</li>
<li>本の各章をメモリーへ読み込みます。</li>
<li>使うプリプロセッサーとバックエンドを見つけます。</li>
</ul>
</li>
<li>各バックエンドについて、次の処理を行います。
<ol>
<li>すべてのプリプロセッサーを実行します。</li>
<li>バックエンドを呼び出し、処理した結果を出力します。</li>
</ol>
</li>
</ol>
<h2 id="using-mdbook-as-a-library"><a class="header" href="#using-mdbook-as-a-library"><code>mdbook</code>をライブラリーとして使う</a></h2>
<p><code>mdbook</code>バイナリーは、内部のmdBookクレートを包み、その機能をコマンドラインのプログラムとして提供するものです。プログラムからmdBookを操作するには、[<code>mdbook-driver</code>]クレートを使えます。独自の機能を追加したり、ビルド処理を調整したりできます。</p>
<p><code>mdbook-driver</code>クレートの使い方を知るには、<a href="https://docs.rs/mdbook-driver/latest/mdbook_driver/">API文書</a>を見るのが最も簡単です。最上位の文書では、<a href="https://docs.rs/mdbook-driver/latest/mdbook_driver/struct.MDBook.html"><code>MDBook</code></a>型で本を読み込み、ビルドする方法を説明しています。<a href="https://docs.rs/mdbook-driver/latest/mdbook_driver/config/index.html">config</a>モジュールでは、設定システムについて詳しく説明しています。</p>
</div>
