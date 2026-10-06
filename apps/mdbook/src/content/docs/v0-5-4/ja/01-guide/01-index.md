---
title: "mdBook：導入"
documentId: "mdbook:guide/src/README.md"
order: 1
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/README.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/01-index.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}]
next: {"text": "インストール", "link": "/v0-5-4/ja/01-guide/29-guide-installation"}
---


<div class="mdbook-guide">
<h1 id="introduction"><a class="header" href="#introduction">導入</a></h1>
<style>
    .mdbook-version {
        position: absolute;
        right: 20px;
        top: 60px;
        background-color: var(--theme-popup-bg);
        border-radius: 8px;
        padding: 2px 5px 2px 5px;
        border: 1px solid var(--theme-popup-border);
        font-size: 0.9em;
    }
</style>
<div class="mdbook-version">
バージョン：0.5.4
</div>
<p><strong>mdBook</strong>は、Markdownで本を作成するコマンドラインツールです。製品やAPIのドキュメント、チュートリアル、教材など、見やすく、移動しやすく、表示をカスタマイズできる形式が必要なものに適しています。</p>
<ul>
<li>軽量な<a href="/docs/mdbook/v0-5-4/ja/01-guide/20-format-markdown/">Markdown</a>構文により、内容の作成に集中できます</li>
<li>組み込みの<a href="/docs/mdbook/v0-5-4/ja/01-guide/30-guide-reading/#search">検索</a>機能</li>
<li>多くの言語のコードブロックに対応した、色付きの<a href="/docs/mdbook/v0-5-4/ja/01-guide/27-format-theme-syntax-highlighting/">構文ハイライト</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/24-format-theme-index/">テーマ</a>ファイルで出力の表示形式をカスタマイズできます</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/18-format-configuration-preprocessors/">プリプロセッサー</a>で独自構文への拡張や内容の変更ができます</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/19-format-configuration-renderers/">バックエンド</a>で複数の形式に出力できます</li>
<li>速度、安全性、簡潔さのために<a href="https://www.rust-lang.org/">Rust</a>で実装</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/08-cli-test/">Rustコード例</a>の自動テスト</li>
</ul>
<p>このガイド自体が、mdBookで生成できるものの一例です。Rust言語のプロジェクトでもmdBookを使用しており、<a href="https://doc.rust-lang.org/book/">The Rust Programming Language</a>という本も、mdBookの優れた使用例です。</p>
<h2 id="contributing"><a class="header" href="#contributing">貢献</a></h2>
<p>mdBookはフリーでオープンソースです。ソースコードは<a href="https://github.com/rust-lang/mdBook">GitHub</a>で公開されており、不具合や機能の要望は<a href="https://github.com/rust-lang/mdBook/issues">GitHubのIssueトラッカー</a>に投稿できます。バグ修正や機能追加はコミュニティに支えられています。貢献したい場合は、<a href="https://github.com/rust-lang/mdBook/blob/master/CONTRIBUTING.md">CONTRIBUTING</a>ガイドを読み、<a href="https://github.com/rust-lang/mdBook/pulls">プルリクエスト</a>の作成を検討してください。</p>
<h2 id="license"><a class="header" href="#license">ライセンス</a></h2>
<p>mdBookのソースコードとドキュメントは、<a href="https://www.mozilla.org/MPL/2.0/">Mozilla Public License v2.0</a>で公開されています。</p>
</div>

<nav aria-label="原著の目次"><h2>原著の目次（静的表示）</h2>
<h3>目次</h3>
<p><a href="/docs/mdbook/v0-5-4/ja/01-guide/01-index">導入</a></p>
<h3>利用ガイド</h3>
<ul>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/29-guide-installation">インストール</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/30-guide-reading">本を読む</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/28-guide-creating">本を作成する</a></li>
</ul>
<h3>リファレンスガイド</h3>
<ul>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/02-cli-index">コマンドラインツール</a><ul>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/06-cli-init">init</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/03-cli-build">build</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/09-cli-watch">watch</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/07-cli-serve">serve</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/08-cli-test">test</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/04-cli-clean">clean</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/05-cli-completions">completions</a></li>
</ul>
</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/14-format-index">形式</a><ul>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/23-format-summary">SUMMARY.md</a><ul>
<li><span aria-disabled="true">草稿の章（原著でも未執筆）</span></li>
</ul>
</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/15-format-configuration-index">設定</a><ul>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/17-format-configuration-general">全般</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/18-format-configuration-preprocessors">プリプロセッサー</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/19-format-configuration-renderers">レンダラー</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/16-format-configuration-environment-variables">環境変数</a></li>
</ul>
</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/24-format-theme-index">テーマ</a><ul>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/26-format-theme-index-hbs">index.hbs</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/27-format-theme-syntax-highlighting">構文ハイライト</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/25-format-theme-editor">エディター</a></li>
</ul>
</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/21-format-mathjax">MathJax対応</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/22-format-mdbook">mdBook固有の機能</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/20-format-markdown">Markdown</a></li>
</ul>
</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/10-continuous-integration">継続的インテグレーション</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/11-for_developers-index">開発者向け</a><ul>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/13-for_developers-preprocessors">プリプロセッサー</a></li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/12-for_developers-backends">代替バックエンド</a></li>
</ul>
</li>
</ul>
<hr/>
<p><a href="/docs/mdbook/v0-5-4/ja/01-guide/31-misc-contributors">貢献者</a></p>
</nav>

