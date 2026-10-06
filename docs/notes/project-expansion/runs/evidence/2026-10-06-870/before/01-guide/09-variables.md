---
title: "変数"
documentId: "wren:variables.html"
order: 9
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}]
---
<div class="wren-document">
<h1 id="page-title">変数</h1>
<p>変数は、値を保存するための名前付きのスロットです。Wrenでは、次のように<code>var</code>文で新しい変数を定義します。</p>
<pre class="snippet"><code>&#10;var a = 1 + 2&#10;</code></pre>
<p>これで、現在のスコープに<code>a</code>という新しい変数を作り、<code>=</code>の後にある式の結果で初期化します。変数を定義すると、予想どおり名前でアクセスできます。</p>
<pre class="snippet"><code>&#10;var animal = "Slow Loris"&#10;System.print(animal) //&gt; Slow Loris&#10;</code></pre>
<h2>スコープ <a class="header-anchor" href="#scope" name="scope">#</a></h2>
<p>Wrenには本来のブロックスコープがあります。変数は、定義した位置から、その定義がある<a href="/docs/wren/v0-4-0/en/01-guide/03-syntax/#blocks">ブロック</a>の終わりまで存在します。</p>
<pre class="snippet"><code>&#10;{&#10;  System.print(a) //! "a" doesn't exist yet.&#10;  var a = 123&#10;  System.print(a) //&gt; 123&#10;}&#10;System.print(a) //! "a" doesn't exist anymore.&#10;</code></pre>
<p>スクリプトの最上位で定義した変数は<em>トップレベル</em>で、<a href="/docs/wren/v0-4-0/en/01-guide/14-modularity/">モジュール</a>システムから見えます。それ以外の変数はすべて<em>ローカル</em>です。外側の変数と同じ名前の変数を内側のスコープで宣言することを<em>シャドーイング</em>と呼びます。これはエラーではありません（ただし、頻繁に行いたい操作ではないでしょう）。</p>
<pre class="snippet"><code>&#10;var a = "outer"&#10;{&#10;  var a = "inner"&#10;  System.print(a) //&gt; inner&#10;}&#10;System.print(a) //&gt; outer&#10;</code></pre>
<p><em>同じ</em>スコープで同じ名前の変数を宣言することは、<em>エラーです</em>。</p>
<pre class="snippet"><code>&#10;var a = "hi"&#10;var a = "again" //! "a" is already declared.&#10;</code></pre>
<h2>代入 <a class="header-anchor" href="#assignment" name="assignment">#</a></h2>
<p>変数を宣言した後は、<code>=</code>を使って代入できます。</p>
<pre class="snippet"><code>&#10;var a = 123&#10;a = 234&#10;</code></pre>
<p>代入では、スコープのスタックを外側へたどって、指定した名前の変数が宣言されている場所を探します。定義されていない変数へ代入すると、エラーになります。Wrenは、暗黙の変数定義を認めません。</p>
<p>より大きな式の中で使う場合、代入式の評価結果は、代入した値です。</p>
<pre class="snippet"><code>&#10;var a = "before"&#10;System.print(a = "after") //&gt; after&#10;</code></pre>
<p>左辺が単なる変数名より複雑な式なら、これは代入ではありません。代わりに、<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#setters">セッターメソッド</a>を呼び出しています。</p>
<p><br/><hr/><a class="right" href="/docs/wren/v0-4-0/en/01-guide/11-functions/">関数 →</a><a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/">← 制御フロー</a></p>
</div>

