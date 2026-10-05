

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
