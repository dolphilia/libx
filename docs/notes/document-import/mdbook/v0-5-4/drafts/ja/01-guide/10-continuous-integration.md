

<div class="mdbook-guide">
<h1 id="running-mdbook-in-continuous-integration"><a class="header" href="#running-mdbook-in-continuous-integration">継続的インテグレーションで<code>mdbook</code>を実行する</a></h1>
<p><a href="https://docs.github.com/en/actions">GitHub Actions</a>や<a href="https://docs.gitlab.com/ee/ci/">GitLab CI/CD</a>など、さまざまなサービスを使って、本を自動でテスト・デプロイできます。</p>
<p>以下では、mdBookを実行するためのサービス設定について、一般的な指針を示します。具体的な手順は、Wikiの<a href="https://github.com/rust-lang/mdBook/wiki/Automated-Deployment">Automated Deployment</a>ページを参照してください。</p>
<h2 id="installing-mdbook"><a class="header" href="#installing-mdbook">mdBookをインストールする</a></h2>
<p>mdBookのインストールには、いくつかの方法があります。必要なことや好みに応じて選んでください。</p>
<h3 id="pre-compiled-binaries"><a class="header" href="#pre-compiled-binaries">ビルド済みバイナリー</a></h3>
<p>おそらく最も簡単なのは、<a href="https://github.com/rust-lang/mdBook/releases">GitHub Releasesページ</a>のビルド済みバイナリーを使う方法です。広く使われているCLIツール<code>curl</code>で実行ファイルをダウンロードする、次のような方法があります。</p>
<pre><code class="language-sh">mkdir bin&#10;curl -sSL https://github.com/rust-lang/mdBook/releases/download/v0.5.4/mdbook-v0.5.4-x86_64-unknown-linux-gnu.tar.gz | tar -xz --directory=bin&#10;bin/mdbook build&#10;</code></pre>
<p>この方法について、考慮する点を示します。</p>
<ul>
<li>比較的速く、必ずしもキャッシュへの対応は必要ありません。</li>
<li>Rustをインストールする必要がありません。</li>
<li>特定のURLを指定するため、新しい版を取得するには、スクリプトを手で更新する必要があります。特定の版へ固定したい場合は、利点にもなります。一方、新しい版が公開されたら、自動で取得したいユーザーもいます。</li>
<li>GitHub CDNが利用できることに依存します。</li>
</ul>
<h3 id="building-from-source"><a class="header" href="#building-from-source">ソースからビルドする</a></h3>
<p>ソースからビルドするには、Rustをインストールする必要があります。Rustが事前にインストールされているサービスもありますが、そうでなければ、インストールする工程を追加してください。</p>
<p>Rustをインストールすると、<code>cargo install</code>でmdBookをビルド・インストールできます。mdBookの<strong>互換性を壊さない</strong>最新バージョンを取得するには、SemVerのバージョン指定を推奨します。例を示します。</p>
<pre><code class="language-sh">cargo install mdbook --no-default-features --features search --vers "^0.5.4" --locked&#10;</code></pre>
<p>推奨するいくつかのオプションを含んでいます。</p>
<ul>
<li><code>--no-default-features</code> — CIでは通常不要な、<code>mdbook serve</code>用のHTTPサーバーなどの機能を無効にします。ビルド時間を大幅に短くできます。</li>
<li><code>--features search</code> — 既定の機能を無効にした場合、組み込みの<a href="/docs/mdbook/v0-5-4/ja/01-guide/30-guide-reading/#search">検索</a>など、必要な機能を手で有効にしてください。</li>
<li><code>--vers "^0.5.4"</code> — <code>0.5</code>系列の最新版をインストールします。ただし、<code>0.6.0</code>以降のような、SemVer上の互換性がない版は、ビルドを壊す可能性があるためインストールしません。古いmdBookがすでにインストールされていれば、Cargoが自動で更新します。特定の版へ固定したい場合は、<code>^</code>を<code>=</code>へ置き換えてください。</li>
<li><code>--locked</code> — mdBookのリリース時に使われた依存関係を使います。<code>--locked</code>を指定しなければ、すべての依存関係の最新版を使います。リリース後の修正が含まれる場合もありますが、まれにビルドの問題が起きることもあります。</li>
</ul>
<p>mdBookのビルドには少し時間がかかる場合があるため、キャッシュの方法を調べるとよいでしょう。</p>
<h2 id="running-tests"><a class="header" href="#running-tests">テストを実行する</a></h2>
<p>変更をpushしたりプルリクエストを作成したりするたびに、<a href="/docs/mdbook/v0-5-4/ja/01-guide/08-cli-test/"><code>mdbook test</code></a>でテストを実行するとよいでしょう。本に含まれるRustのコード例を検証できます。</p>
<p>Rustをインストールする必要があります。Rustが事前にインストールされているサービスもありますが、そうでなければ、インストールする工程を追加してください。</p>
<p>適切なバージョンのRustがインストールされていることを確認した後は、本のディレクトリで<code>mdbook test</code>を実行するだけです。</p>
<p>リンク切れを調べる<a href="https://github.com/marxin/mdbook-linkcheck2#continuous-integration">mdbook-linkcheck2</a>など、ほかの種類のテストも検討するとよいでしょう。独自のスタイル検査、スペル検査、そのほかのテストも、CIで実行すると便利です。</p>
<h2 id="deploying"><a class="header" href="#deploying">デプロイする</a></h2>
<p>本を自動でデプロイしたい場合もあるでしょう。変更をpushするたびに行う方法もあれば、特定のリリースにタグを付けたときだけ行う方法もあります。</p>
<p>利用するウェブサービスへ変更を送る、具体的な方法も理解する必要があります。たとえば、<a href="https://docs.github.com/en/pages">GitHub Pages</a>では、特定のGitブランチへ出力をコミットするだけです。ほかのサービスでは、SSHなどでリモートサーバーへ接続する必要がある場合もあります。</p>
<p>基本的には、<code>mdbook build</code>を実行して出力を生成し、<code>book</code>ディレクトリにあるファイルを適切な場所へ転送します。</p>
<p>その後、ウェブサービスのキャッシュを無効にする必要があるか、検討するとよいでしょう。</p>
<p>さまざまなサービスの例は、Wikiの<a href="https://github.com/rust-lang/mdBook/wiki/Automated-Deployment">Automated Deployment</a>ページを参照してください。</p>
<h3 id="404-handling"><a class="header" href="#404-handling">404への対応</a></h3>
<p>mdBookは、リンク切れに使う404ページを自動で生成します。既定では、本のルートに<code>404.html</code>というファイルを出力します。<a href="https://docs.github.com/en/pages">GitHub Pages</a>などのサービスでは、リンク切れにこのページを自動で使います。ほかのサービスでも、ウェブサーバーがこのページを使うよう設定するとよいでしょう。読者が本へ戻るためのナビゲーションを提供できます。</p>
<p>本をドメインのルート以外へデプロイする場合、404ページが正しく動くように<a href="/docs/mdbook/v0-5-4/ja/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.site-url</code></a>を設定してください。CSSなどの静的ファイルを正しく読み込むには、本の公開場所を知る必要があります。たとえば、このガイドは<a href="https://rust-lang.github.io/mdBook/">https://rust-lang.github.io/mdBook/</a>へ公開され、<code>site-url</code>を次のように設定しています。</p>
<pre><code class="language-toml"># book.toml&#10;&#91;output.html&#93;&#10;site-url = "/mdBook/"&#10;</code></pre>
<p>本に<code>src/404.md</code>というファイルを作ると、404ページの見た目を変更できます。別のファイル名を使う場合は、<a href="/docs/mdbook/v0-5-4/ja/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.input-404</code></a>へ指定できます。</p>
</div>
