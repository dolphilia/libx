---
title: "はじめに"
documentId: "wren:getting-started.html"
order: 2
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}]
---
<div class="wren-document">
<h1 id="page-title">はじめに</h1>
<h2>言語を試す <a class="header-anchor" href="#trying-out-the-language" name="trying-out-the-language">#</a></h2>
<p>Wrenを試すには、いくつかの方法があります。</p>
<ul>
<li><strong>ブラウザーで。</strong> <strong><a href="https://wren.io/try">ここで</a></strong>Wrenを試せます！</li>
<li><strong>自分のコンピューターで。</strong> <a href="https://wren.io/cli">Wren CLI</a>プロジェクトはダウンロードできる実行ファイルで、ファイル入出力などを利用するスクリプトを実行できます。<a href="https://wren.io/cli">Wren CLIの文書</a>を参照してください。</li>
<li><strong>自分のコードに組み込んで。</strong> 下の<a href="#embed-the-vm">Wrenのビルドと組み込み</a>を参照してください。<br/>続いて、<a href="/docs/wren/v0-4-0/en/01-guide/16-embedding/">組み込みガイド</a>を読んでください！</li>
</ul>
<p>試せる場所が用意できたら、<a href="/docs/wren/v0-4-0/en/01-guide/03-syntax/">言語を学ぶ</a>番です。</p>
<hr/>
<h2>VMを組み込む <a class="header-anchor" href="#embed-the-vm" name="embed-the-vm">#</a></h2>
<p><strong>Wren仮想マシン</strong>は、Wrenのソースコードを実行する言語の中核です。単なるライブラリであり、単独で動くアプリケーションではありません。より大きなホストアプリケーションに<a href="/docs/wren/v0-4-0/en/01-guide/16-embedding/">組み込む</a>ことを意図しています。</p>
<p>C標準ライブラリ以外に依存するものはありません。静的ライブラリや共有ライブラリとして利用しても、ソースをアプリケーションに含めてコンパイルしてもかまいません。</p>
<h3>Wrenをビルドする <a class="header-anchor" href="#building-wren" name="building-wren">#</a></h3>
<p>Wrenライブラリをビルドするには、<code>projects/</code>フォルダーを見ます。ここには<code>Visual Studio</code>、<code>XCode</code>、および<code>make</code>などのツール向けに、すぐ使えるプロジェクトが入っています。</p>
<ul>
<li><strong>Windows</strong> <code>projects/vs2019/</code>（または<code>vs2017</code>）内の<code>wren.sln</code>を開き、ビルドを実行します。</li>
<li><strong>Mac</strong> <code>projects/xcode/</code>内の<code>wren.xcworkspace</code>を開き、ビルドを実行します。</li>
<li><strong>Linux</strong> <code>projects/make/</code>内で<code>make</code>を実行します。</li>
</ul>
<p>いずれの場合も、<strong>ルートの<code>lib/</code>フォルダーにライブラリのファイルが生成されます</strong>。<br/>必要に応じて、これらを自分のプロジェクトにリンクします。</p>
<ul>
<li><strong>静的リンク</strong> Windowsでは<code>wren.lib</code>、それ以外では<code>libwren.a</code>です。</li>
<li><strong>動的リンク</strong> Windowsでは<code>wren.dll</code>、Linuxでは<code>libwren.so</code>、Macでは<code>libwren.dylib</code>です。</li>
</ul>
<p><small>既定のビルドでは、<code>bin/</code>内に<code>wren_test</code>も生成されます。<br/>これは言語のテストを実行するためのバイナリーで、簡単なスクリプトも実行できます。</small></p>
<p><strong>その他のプラットフォーム</strong><br/>利用するプラットフォームが明示的にサポートされていない場合は、移植性を得るため、自分のプロジェクトにWrenのソースを含めることをお勧めします。</p>
<h3>自分のプロジェクトにコードを含める <a class="header-anchor" href="#including-the-code-in-your-project" name="including-the-code-in-your-project">#</a></h3>
<p><strong>すべてのソースファイル</strong><br/>用意されているプロジェクトでビルドする代わりに、自分のプロジェクトへWrenのソースコードを含めることもできます。依存関係がないので、<code>src/</code>にあるコードをすべて含めるだけです。詳しくは<code>src/</code>内のreadmeを参照してください。</p>
<p><strong>「amalgamated」ビルド</strong><br/>さらに簡単な方法として、「amalgamated」ビルド（<code>blob</code>または<code>unity</code>ビルドとも呼ばれます）があります。これは<em>Wrenのすべてのソースコードを一つのファイルにまとめたもの</em>です。</p>
<p>このファイルは<code>python3 util/generate_amalgamation.py &gt; build/wren.c</code>を実行すると生成され、出力は<code>build/wren.c</code>に保存されます。</p>
<p>自分のプロジェクトのコードに<code>build/wren.c</code>と<code>src/include/wren.h</code>を含めれば、準備は完了です。<small>将来的には、この生成を自動化してリポジトリに含められるとよいと考えています。</small></p>
<hr/>
<p>バグを見つけた場合や、アイデア・質問がある場合は、次のいずれかを利用してください。</p>
<ul>
<li><a href="https://discord.gg/Kx6PxSX">Discordコミュニティー</a>に参加する。</li>
<li><a href="https://groups.google.com/forum/#!forum/wren-lang">Wrenのメーリングリスト</a>で質問する（あまり活発ではありません）。</li>
<li>Twitterの<a href="https://twitter.com/intent/user?screen_name=munificentbob">@munificentbob</a>または<a href="https://twitter.com/intent/user?screen_name=ruby0x1">@ruby0x1</a>に知らせる。</li>
<li><a href="https://github.com/wren-lang/wren">GitHubリポジトリ</a>に<a href="https://github.com/wren-lang/wren/issues">チケットを登録する</a>。</li>
<li>CLIにも<a href="https://github.com/wren-lang/wren-cli/issues">チケット</a>と<a href="https://github.com/wren-lang/wren-cli">GitHubリポジトリ</a>があります。</li>
<li>プルリクエストを歓迎します。</li>
</ul>
</div>

