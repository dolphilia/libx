---
title: "mdBook：インストール"
documentId: "mdbook:guide/src/guide/installation.md"
order: 2
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/guide/installation.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/29-guide-installation.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}]
prev: {"text": "導入", "link": "/v0-5-4/ja/01-guide/01-index"}
next: {"text": "本を読む", "link": "/v0-5-4/ja/01-guide/30-guide-reading"}
---


<div class="mdbook-guide">
<h1 id="installation"><a class="header" href="#installation">インストール</a></h1>
<p>mdBookのCLIツールをインストールする方法はいくつかあります。以下から、必要に合った方法を選んでください。自動デプロイのためにmdBookをインストールする場合は、<a href="/docs/mdbook/v0-5-4/ja/01-guide/10-continuous-integration/">継続的インテグレーション</a>の章にもインストール例があります。</p>
<h2 id="pre-compiled-binaries"><a class="header" href="#pre-compiled-binaries">コンパイル済みバイナリー</a></h2>
<p>実行可能なバイナリーは<a href="https://github.com/rust-lang/mdBook/releases">GitHubのリリースページ</a>からダウンロードできます。利用するプラットフォーム（Windows、macOS、Linux）用のバイナリーをダウンロードし、アーカイブを展開してください。アーカイブには、本をビルドするための<code>mdbook</code>実行ファイルが含まれています。</p>
<p>実行しやすくするため、バイナリーのあるディレクトリを<code>PATH</code>に追加してください。</p>
<h2 id="build-from-source-using-rust"><a class="header" href="#build-from-source-using-rust">Rustでソースからビルドする</a></h2>
<p><code>mdbook</code>実行ファイルをソースからビルドするには、まずRustとCargoのインストールが必要です。<a href="https://www.rust-lang.org/tools/install">Rustのインストールページ</a>の手順に従ってください。本版のmdBookにはRust 1.88以上が必要です。</p>
<p>Rustのインストール後は、次のコマンドでmdBookをビルドしてインストールできます。</p>
<pre><code class="language-sh">cargo install mdbook&#10;</code></pre>
<p>このコマンドは、<a href="https://crates.io/">crates.io</a>からmdBookを自動でダウンロードし、ビルドして、Cargoの共通バイナリーディレクトリ（既定では<code>~/.cargo/bin/</code>）にインストールします。</p>
<p>新しいバージョンに更新したいときは、<code>cargo install mdbook</code>を再実行できます。新しいバージョンがあるか確認し、見つかった場合はmdBookを再インストールします。</p>
<p>アンインストールするには、<code>cargo uninstall mdbook</code>コマンドを実行します。</p>
<h3 id="installing-the-latest-master-version"><a class="header" href="#installing-the-latest-master-version">masterの最新版をインストールする</a></h3>
<p>crates.ioで公開されるバージョンは、GitHub上のバージョンよりわずかに遅れます。最新版が必要なら、GitにあるmdBookを自分でビルドできます。Cargoを使えば、これは<em><strong>とても簡単</strong></em>です。</p>
<pre><code class="language-sh">cargo install --git https://github.com/rust-lang/mdBook.git mdbook&#10;</code></pre>
<p>この場合も、Cargoのバイナリーディレクトリを<code>PATH</code>に追加してください。</p>
<h2 id="modifying-and-contributing"><a class="header" href="#modifying-and-contributing">変更と貢献</a></h2>
<p>mdBook自体を変更したい場合は、<a href="https://github.com/rust-lang/mdBook/blob/master/CONTRIBUTING.md">貢献ガイド</a>に詳しい説明があります。</p>
</div>
