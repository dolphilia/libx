---
title: "マップ"
documentId: "wren:maps.html"
order: 6
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">マップ</h1>
<p>マップは<em>連想</em>コレクションです。<em>キー</em>を<em>値</em>に対応付けるエントリーの集まりを格納します。同じデータ構造には、ほかの言語でハッシュテーブル、辞書、連想配列、テーブルなど、さまざまな名前が付いています。</p>
<p>コンマで区切った一連のエントリーを波括弧で囲むと、マップを作成できます。各エントリーは、コロンで区切ったキーと値です。</p>
<pre class="snippet"><code>&#10;{&#10;  "maple":  "Sugar Maple (Acer Saccharum)",&#10;  "larch":  "Alpine Larch (Larix Lyallii)",&#10;  "oak":    "Red Oak (Quercus Rubra)",&#10;  "fir":    "Fraser Fir (Abies Fraseri)"&#10;}&#10;</code></pre>
<p>これは、木の種類（キー）を、その仲間の特定の木（値）に対応付けるマップを作成します。構文上、マップリテラルのキーには、任意のリテラル、変数名、丸括弧で囲んだ式を使えます。値には任意の式を使えます。この例では、キーと値の両方に文字列リテラルを使っています。</p>
<p><em>意味上は</em>、値にどんなオブジェクトでも使え、複数のキーを同じ値に対応付けることもできます。</p>
<p>キーにはいくつかの制限があります。Wrenに組み込まれた不変の<a href="/docs/wren/v0-4-0/ja/01-guide/04-values/">値型</a>のいずれかでなければなりません。つまり、数値、文字列、範囲、真偽値、または<code>null</code>です。<a href="/docs/wren/v0-4-0/ja/01-guide/10-classes/">クラスオブジェクト</a>もキーに使えます（そのクラスのインスタンスではなく、クラスそのものです）。</p>
<p>この制限がある理由、そしてほかの言語でマップを「<em>ハッシュ</em>テーブル」と呼ぶ理由は、各キーから数値の<em>ハッシュコード</em>を生成するためです。これにより、とても大きなマップでも、キーに対応する値を定数時間で見つけられます。Wrenは特定の組み込み型のハッシュ方法しか知らないので、キーに使えるのもそれらだけです。</p>
<h2>エントリーの追加 <a class="header-anchor" href="#adding-entries" name="adding-entries">#</a></h2>
<p>新しいキーと値の組をマップに追加するには、<a href="/docs/wren/v0-4-0/ja/01-guide/07-method-calls/#subscripts">添字演算子</a>を使います。</p>
<pre class="snippet"><code>&#10;var capitals = {}&#10;    capitals["Georgia"] = "Atlanta"&#10;    capitals["Idaho"] = "Boise"&#10;    capitals["Maine"] = "Augusta"&#10;</code></pre>
<p>キーがまだ存在しなければ、そのキーを追加して指定した値に対応付けます。キーがすでに存在すれば、その値を置き換えるだけです。</p>
<h2>値の検索 <a class="header-anchor" href="#looking-up-values" name="looking-up-values">#</a></h2>
<p>キーに対応する値を見つけるときも、おなじみの添字演算子を使います。</p>
<pre class="snippet"><code>&#10;System.print(capitals["Idaho"]) //&gt; Boise&#10;</code></pre>
<p>キーが存在すれば、その値を返します。存在しなければ、<code>null</code>を返します。もちろん、<code>null</code>自体も値として使えるため、ここで<code>null</code>が得られても、必ずしもキーが見つからなかったとは限りません。</p>
<p>キーが存在するかを確実に調べるには、<code>containsKey()</code>を呼び出せます。</p>
<pre class="snippet"><code>&#10;var capitals = {"Georgia": null}&#10;&#10;System.print(capitals["Georgia"]) //&gt; null (though key exists)&#10;System.print(capitals["Idaho"])   //&gt; null &#10;System.print(capitals.containsKey("Georgia")) //&gt; true&#10;System.print(capitals.containsKey("Idaho"))   //&gt; false&#10;</code></pre>
<p><code>count</code>を使うと、マップに含まれるエントリーの数を確認できます。</p>
<pre class="snippet"><code>&#10;System.print(capitals.count) //&gt; 3&#10;</code></pre>
<h2>エントリーの削除 <a class="header-anchor" href="#removing-entries" name="removing-entries">#</a></h2>
<p>マップからエントリーを削除するには、<code>remove()</code>を呼び出し、削除したいエントリーのキーを渡します。</p>
<pre class="snippet"><code>&#10;capitals.remove("Maine")&#10;System.print(capitals.containsKey("Maine")) //&gt; false&#10;</code></pre>
<p>キーが見つかれば、それに対応していた値を返します。</p>
<pre class="snippet"><code>&#10;System.print(capitals.remove("Georgia")) //&gt; Atlanta&#10;</code></pre>
<p>もともとマップにキーがなかった場合は、<code>remove()</code>は<code>null</code>を返すだけです。</p>
<p>マップから<em>すべて</em>を削除したい場合は、<a href="/docs/wren/v0-4-0/ja/01-guide/05-lists/">リスト</a>と同様、<code>clear()</code>を呼び出します。</p>
<pre class="snippet"><code>&#10;capitals.clear()&#10;System.print(capitals.count) //&gt; 0&#10;</code></pre>
<h2>内容の反復処理 <a class="header-anchor" href="#iterating-over-the-contents" name="iterating-over-the-contents">#</a></h2>
<p>探しているキーが分かっている場合、添字演算子は値を見つけるのに適しています。しかし、マップのすべての内容を見たいこともあります。通常のforループで内容を反復処理できます。また、マップは内容にアクセスするため、<code>keys</code>と<code>values</code>という二つのメソッドも公開しています。</p>
<p>マップの<code>keys</code>メソッドは、すべてのキーを<a href="/docs/wren/v0-4-0/ja/01-guide/08-control-flow/#the-iterator-protocol">反復処理する</a><a href="/docs/wren/v0-4-0/en/02-reference/11-modules-core-sequence/">Sequence</a>を返します。<code>values</code>メソッドは、値を反復処理するSequenceを返します。</p>
<p>どの方法で反復処理しても、その<em>順序</em>は定義されていません。Wrenは、キーや値をどの順番で反復するかを保証しません。保証するのは、すべてのエントリーがそれぞれ一度だけ現れることです。</p>
<p><strong>for(entry in map)による反復処理</strong><br/><code>for</code>でマップを反復処理すると、<code>key</code>フィールドと<code>value</code>フィールドを持つ<em>エントリー</em>を受け取ります。これで、マップ内の各要素の情報が得られます。</p>
<pre class="snippet"><code>&#10;var birds = {&#10;  "Arizona": "Cactus wren",&#10;  "Hawaii": "Nēnē",&#10;  "Ohio": "Northern Cardinal"&#10;}&#10;&#10;for (bird in birds) {&#10;  System.print("The state bird of %(bird.key) is %(bird.value)")&#10;}&#10;</code></pre>
<p><strong>キーを使った反復処理</strong></p>
<p>キーを反復処理し、それぞれのキーで値を検索することもできます。</p>
<pre class="snippet"><code>&#10;var birds = {&#10;  "Arizona": "Cactus wren",&#10;  "Hawaii": "Nēnē",&#10;  "Ohio": "Northern Cardinal"&#10;}&#10;&#10;for (state in birds.keys) {&#10;  System.print("The state bird of %(state) is " + birds[state])&#10;}&#10;</code></pre>
<p><br/><hr/><a class="right" href="/docs/wren/v0-4-0/ja/01-guide/07-method-calls/">メソッド呼び出し →</a><a href="/docs/wren/v0-4-0/ja/01-guide/05-lists/">← リスト</a></p>
</div>

