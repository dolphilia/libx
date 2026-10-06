---
title: "開発への参加"
documentId: "wren:contributing.html"
order: 24
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}]
---
<div class="wren-document">
<h1 id="page-title">貢献</h1>
<p>鳥のミソサザイと同じく、Wrenのエコシステムは小さいながら、活気に満ちています。ほぼすべてが活発に開発中で、やることはたくさんあります。手伝っていただければ、うれしく思います。</p>
<p>まず、<a href="https://discord.gg/Kx6PxSX">Discordコミュニティー</a>、または<a href="https://groups.google.com/forum/#!forum/wren-lang">メーリングリスト</a>へ参加して、「こんにちは」と言ってください。Wrenに見知らぬ人はいません。まだ会ったことのない友人がいるだけです。</p>
<h2>エコシステムを広げる <a class="header-anchor" href="#growing-the-ecosystem" name="growing-the-ecosystem">#</a></h2>
<p>Wrenへ参加する最も簡単で、よく役立つ方法は、Wrenの<em>利用者</em>になることです。Wrenを組み込むアプリケーションを作る。Wrenでライブラリーや便利なユーティリティーを書く。好きなテキストエディターへ、Wrenの構文強調を追加する。それらを共有すると、次にやって来るWrenの利用者の助けになります。</p>
<p>そのどれかを行ったら、<a href="https://github.com/wren-lang/wren/wiki">Wiki</a>へ追加して知らせてください。<br/>私たちは、次のものを把握しておきたいと思っています。</p>
<ul>
<li>スクリプト言語としてWrenをホストする<a href="https://github.com/wren-lang/wren/wiki/Applications">アプリケーション</a>。</li>
<li>ほかの人が使える、Wrenで書いた<a href="https://github.com/wren-lang/wren/wiki/Modules">モジュール</a>。</li>
<li>ほかの言語からWrenとやり取りできる<a href="https://github.com/wren-lang/wren/wiki/Language-Bindings">言語バインディング</a>。</li>
<li>Wrenプログラマーの作業を容易にする<a href="https://github.com/wren-lang/wren/wiki/Tools">ツールとユーティリティー</a>。</li>
</ul>
<h2>Wrenへの貢献 <a class="header-anchor" href="#contributing-to-wren" name="contributing-to-wren">#</a></h2>
<p>コアVMでも、コマンドラインインタープリターでも、Wren自身への貢献も大歓迎です。ソースは<a href="https://github.com/wren-lang/">GitHubで</a>開発しています。コード、テスト、<a href="https://github.com/wren-lang/wren/tree/main/doc/site">文書</a>が、理解しやすく、貢献しやすいことを願っています。そうでなければ、それは不具合です。</p>
<p>Wrenのビルド方法は、<a href="/docs/wren/v0-4-0/en/01-guide/02-getting-started/#building-wren">入門ページ</a>で確認できます。</p>
<h3>取り組むものを探す <a class="header-anchor" href="#finding-something-to-hack-on" name="finding-something-to-hack-on">#</a></h3>
<p><a href="https://github.com/wren-lang/wren/issues">課題管理</a>を見たり、コード内で<code>TODO</code>コメントを探したりすれば、必要な作業を見つけるのは、かなり簡単です。ただし、私たちは、いつもすべてを書き留められているわけではありません。</p>
<p>合うものがなければ、新しい考えも歓迎します！ 大きな変更や追加を考えているなら、大量のコードを書く前に、<a href="https://github.com/wren-lang/wren/labels/proposal">提案</a>を登録して相談してください。Wrenは、最小限に保つため、<em>非常に</em>努力しています。そのため、言語への追加は、とても良いものでも、「いいえ」と言う必要がよくあります。</p>
<h3>文書を変更する <a class="header-anchor" href="#hacking-on-docs" name="hacking-on-docs">#</a></h3>
<p><a href="/docs/wren/v0-4-0/en/01-guide/01-overview/">文書</a>は、Wrenへ貢献しやすい部分の一つであり、とても重要でもあります！ サイトのソースは<a href="http://daringfireball.net/projects/markdown/">Markdown</a>で書き、<code>doc/site</code>にあります。単純なPython 3のスクリプト<code>util/generate_docs.py</code>が、HTMLとCSSへ変換します。</p>
<pre><code>$ python util/generate_docs.py&#10;</code></pre>
<p>これは、<code>build/docs/</code>へサイトを生成します。そこから、どんな単純な静的Webサーバーでも実行できます。Pythonにも、次が含まれます。</p>
<pre><code>$ cd build/docs&#10;$ python -m http.server&#10;</code></pre>
<p>Markdownを一行変えるたびに、そのスクリプトを実行すると、時間がかかる場合があります。そのため、ファイルを監視し、編集したときに文書を自動で再生成する版もあります。</p>
<pre><code>$ python util/generate_docs.py --watch&#10;</code></pre>
<h3>VMを変更する <a class="header-anchor" href="#hacking-on-the-vm" name="hacking-on-the-vm">#</a></h3>
<p>基本的な手順は、単純です。</p>
<ol>
<li><p><strong>ローカルでビルドし、テストを実行できることを確認します。</strong>コードを触る前に、正常な状態から始めるとよいでしょう。テストの実行は、<code>bin/wren_test</code>を生成する<a href="/docs/wren/v0-4-0/en/01-guide/02-getting-started/#building-wren">vmプロジェクトをビルド</a>し、次のPython 3のスクリプトを実行するだけです。</p><pre><code>$ python util/test.py&#10;</code></pre><p>失敗がなければ、準備できています。</p></li>
<li><p><strong>ローカルで変更できるよう、<a href="https://help.github.com/articles/fork-a-repo/">リポジトリをフォーク</a>します。</strong>作業を容易にするため、変更は別の<a href="https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow">機能ブランチ</a>で行ってください。</p></li>
<li><p><strong>コードを変更します。</strong>周囲のコードのスタイルに合わせてください。基本的には、<code>camelCase</code>の名前、次の行に置く<code>{</code>、80桁以内、2スペースの字下げです。既存コードの不統一を見つけたら、知らせてください。</p></li>
<li><p><strong>新しい機能のテストを書きます。</strong>テストは<code>test/</code>にあります。期待結果の定義方法は、既存のテストを見て確認してください。</p></li>
<li><p><strong>既存のテストも新しいテストも、すべて合格することを確認します。</strong></p></li>
<li><p><strong>まだ登録していなければ、<a href="https://github.com/wren-lang/wren/tree/main/AUTHORS">AUTHORS</a>ファイルへ名前とメールアドレスを追加します。</strong></p></li>
<li><p><strong><a href="https://github.com/wren-lang/wren/pulls">プルリクエスト</a>を送ります。</strong>楽しいオープンソースプロジェクトへ貢献した自分を、ねぎらってください！</p></li>
</ol>
<h2>助けを求める <a class="header-anchor" href="#getting-help" name="getting-help">#</a></h2>
<p>途中で質問があれば、気軽に<a href="https://github.com/wren-lang/wren/issues">課題を登録</a>するか、<a href="https://discord.gg/Kx6PxSX">Discordコミュニティー</a>、または<a href="https://groups.google.com/forum/#!forum/wren-lang">メーリングリスト</a>で尋ねてください。Redditを使っているなら、<a href="https://www.reddit.com/r/wren_lang/">/r/wren_lang</a>サブレディットもあります。あまり公開したくなければ、私へ直接メールしてもかまいません。（<code>robert</code> at <code>stuffwithstuff.com</code>）</p>
</div>

