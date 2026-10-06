---
title: "制御フロー"
documentId: "wren:control-flow.html"
order: 8
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}]
---
<div class="wren-document">
<h1 id="page-title">制御フロー</h1>
<p>制御フローは、どのコードを何回実行するかを決めるために使います。<em>分岐</em>の文や式は、あるコードを実行するかどうかを決め、<em>ループ</em>の文や式は、同じものを複数回実行します。</p>
<h2>真偽の判定 <a class="header-anchor" href="#truth" name="truth">#</a></h2>
<p>すべての制御フローは、何かをするかどうかの<em>判断</em>に基づいています。この判断は、ある式の値によって決まります。考えられるすべてのオブジェクトを二つに分け、一方を「真」、残りを「偽」と見なします。式の結果が真の側の値なら、ある動作を行います。そうでなければ、別の動作を行います。</p>
<p>当然、真偽値<code>true</code>は「真」、<code>false</code>は「偽」に入ります。しかし、ほかの型の値はどうでしょうか？ この選択に絶対的な決まりはなく、言語ごとに規則が異なります。Wrenの規則はRubyに従っています。</p>
<ul>
<li>真偽値<code>false</code>は偽です。</li>
<li>null値<code>null</code>は偽です。</li>
<li>それ以外はすべて真です。</li>
</ul>
<p>つまり、<code>0</code>、空の文字列、空のコレクションも、すべて「真」の値と見なします。</p>
<h2>if文 <a class="header-anchor" href="#if-statements" name="if-statements">#</a></h2>
<p>最も単純な分岐文である<code>if</code>は、条件に応じてコードを読み飛ばします。次のように書きます。</p>
<pre class="snippet"><code>&#10;if (ready) System.print("go!")&#10;</code></pre>
<p><code>if</code>の後にある、丸括弧で囲んだ式を評価します。真なら、条件の後の文を評価します。そうでなければ、その文を読み飛ばします。単独の文の代わりに、<a href="/docs/wren/v0-4-0/en/01-guide/03-syntax/#blocks">ブロック</a>も書けます。</p>
<pre class="snippet"><code>&#10;if (ready) {&#10;  System.print("getSet")&#10;  System.print("go!")&#10;}&#10;</code></pre>
<p><code>else</code>の分岐を設けることもできます。条件が偽の場合は、こちらを実行します。</p>
<pre class="snippet"><code>&#10;if (ready) System.print("go!") else System.print("not ready!")&#10;</code></pre>
<p>もちろん、こちらもブロックにできます。</p>
<pre class="snippet"><code>&#10;if (ready) {&#10;  System.print("go!")&#10;} else {&#10;  System.print("not ready!")&#10;}&#10;</code></pre>
<h2>論理演算子 <a class="header-anchor" href="#logical-operators" name="logical-operators">#</a></h2>
<p>Wrenのほかの多くの<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">演算子</a>は、<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/">メソッド呼び出し</a>の特別な構文にすぎませんが、<code>&amp;&amp;</code>と<code>||</code>は特別です。右のオペランドを条件に応じてしか評価しない、短絡評価を行うためです。</p>
<p><code>&amp;&amp;</code>（「論理AND」）の式は、左の引数を評価します。偽なら、その値を返します。そうでなければ、右の引数を評価して返します。</p>
<pre class="snippet"><code>&#10;System.print(false &amp;&amp; 1)  //&gt; false&#10;System.print(1 &amp;&amp; 2)      //&gt; 2&#10;</code></pre>
<p><code>||</code>（「論理OR」）の式は逆です。左の引数が<em>真</em>なら、それを返します。そうでなければ、右の引数を評価して返します。</p>
<pre class="snippet"><code>&#10;System.print(false || 1)  //&gt; 1&#10;System.print(1 || 2)      //&gt; 1&#10;</code></pre>
<h2>条件演算子<code>?:</code> <a class="header-anchor" href="#the-conditional-operator-" name="the-conditional-operator-">#</a></h2>
<p>Wrenには、Cや似た言語でおなじみの、小さな「式の形をしたif文」があります。三つの引数を取るので、「三項」演算子とも呼ばれます。</p>
<pre class="snippet"><code>&#10;System.print(1 != 2 ? "math is sane" : "math is not sane!")&#10;</code></pre>
<p>条件式、<code>?</code>、then側の式、<code>:</code>、else側の式の順に書きます。<code>if</code>と同じように条件を評価し、真ならthen側の式を評価して返します。そうでなければ、else側の式を評価して返します。</p>
<h2>while文 <a class="header-anchor" href="#while-statements" name="while-statements">#</a></h2>
<p>コードの一部分を繰り返し実行しなければ、役に立つプログラムを書くのは難しいでしょう。そのために、ループ文を使います。Wrenには二つあり、ほかの命令型言語を使ったことがあれば、なじみのあるものです。</p>
<p>最も単純な<code>while</code>文は、条件が成り立ち続ける限り、コードを実行します。例えば、次のように書きます。</p>
<pre class="snippet"><code>&#10;// Hailstone sequence.&#10;var n = 27&#10;while (n != 1) {&#10;  if (n % 2 == 0) {&#10;    n = n / 2&#10;  } else {&#10;    n = 3 * n + 1&#10;  }&#10;}&#10;</code></pre>
<p>式<code>n != 1</code>を評価し、真なら、その後の本体を実行します。その後、先頭に戻って条件をもう一度評価します。条件が真と見なされる値になる限り、これを繰り返します。</p>
<p>whileループの条件には任意の式を使えますが、丸括弧で囲む必要があります。ループの本体は、通常は波括弧で囲んだブロックですが、単独の文でもかまいません。</p>
<pre class="snippet"><code>&#10;var n = 27&#10;while (n != 1) if (n % 2 == 0) n = n / 2 else n = 3 * n + 1&#10;</code></pre>
<h2>for文 <a class="header-anchor" href="#for-statements" name="for-statements">#</a></h2>
<p>while文は、無期限に、または複雑な条件に従って繰り返したい場合に便利です。しかし、多くの場合は<a href="/docs/wren/v0-4-0/en/01-guide/05-lists/">リスト</a>、一連の数値、その他の「シーケンス」オブジェクトを順に処理します。<code>for</code>は、そのための文です。次のように書きます。</p>
<pre class="snippet"><code>&#10;for (beatle in ["george", "john", "paul", "ringo"]) {&#10;  System.print(beatle)&#10;}&#10;</code></pre>
<p><code>for</code>ループは、三つの部分からなります。</p>
<ol>
<li><p>値を結び付ける<em>変数名</em>。例では<code>beatle</code>です。Wrenは、この名前の新しい変数を作ります。そのスコープは、ループの本体です。</p></li>
<li><p><em>シーケンス式</em>。何を反復処理するかを決めます。ループ本体の実行前に<em>一度だけ</em>評価します。この例ではリストリテラルですが、任意の式を使えます。</p></li>
<li><p><em>本体</em>。波括弧で囲んだブロックか、単独の文です。ループの各反復で一度実行します。</p></li>
</ol>
<h2>break文 <a class="header-anchor" href="#break-statements" name="break-statements">#</a></h2>
<p>ループの本体の途中で、抜け出して終了したくなることがあります。そのために<code>break</code>文を使えます。<code>break</code>キーワードを単独で書くだけです。直ちに、最も内側の、現在の文を囲む<code>while</code>または<code>for</code>ループを抜けます。</p>
<pre class="snippet"><code>&#10;for (i in [1, 2, 3, 4]) {&#10;  System.print(i)           //&gt; 1&#10;  if (i == 3) break         //&gt; 2&#10;}                           //&gt; 3&#10;</code></pre>
<h2>continue文 <a class="header-anchor" href="#continue-statements" name="continue-statements">#</a></h2>
<p>ループ本体の実行中に、現在の反復の残りを読み飛ばして次の反復へ進みたくなることがあります。そのために<code>continue</code>文を使えます。<code>continue</code>キーワードを単独で書くだけです。直ちに次のループ反復の先頭へ移り、ループの条件を確認します。</p>
<pre class="snippet"><code>&#10;for (i in [1, 2, 3, 4]) {&#10;  System.print(i)           //&gt; 1&#10;  if (i == 2) continue      //&gt; 3&#10;}                           //&gt; 4&#10;</code></pre>
<h2>数値の範囲 <a class="header-anchor" href="#numeric-ranges" name="numeric-ranges">#</a></h2>
<p>リストは<code>for</code>ループのよくある用途ですが、一連の数値を順に処理したり、一定の回数だけ繰り返したりしたい場合もあります。その場合は、次のように<a href="/docs/wren/v0-4-0/en/01-guide/04-values/#ranges">範囲</a>を作れます。</p>
<pre class="snippet"><code>&#10;for (i in 1..100) {&#10;  System.print(i)&#10;}&#10;</code></pre>
<p>これは100そのものも含め、1から100までの数値について繰り返します。最後の値を含めたくなければ、点を二つではなく三つにします。</p>
<pre class="snippet"><code>&#10;for (i in 1...100) {&#10;  System.print(i)&#10;}&#10;</code></pre>
<p><code>for</code>ループ専用の「範囲」構文に見えますが、実際には二つの演算子です。<code>..</code>と<code>...</code>は、中置の「範囲」演算子です。<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">ほかの演算子</a>と同様、通常のメソッド呼び出しの特別な構文です。数値型がこれらを実装し、一連の数値を反復処理する方法を知っている<a href="/docs/wren/v0-4-0/en/01-guide/04-values/#ranges">範囲オブジェクト</a>を返します。</p>
<h2>イテレータープロトコル <a class="header-anchor" href="#the-iterator-protocol" name="the-iterator-protocol">#</a></h2>
<p>リストと範囲で、最も一般的な二種類のループを扱えますが、自分のシーケンスも定義できる必要があります。そのために、<code>for</code>の意味は「イテレータープロトコル」で定義されています。ループ自体はリストや範囲を知りません。シーケンス式を評価して得たオブジェクトに対し、特定の二つのメソッドを呼び出す方法だけを知っています。</p>
<p>次のようなループを書くと、</p>
<pre class="snippet"><code>&#10;for (i in 1..100) {&#10;  System.print(i)&#10;}&#10;</code></pre>
<p>Wrenには、おおよそ次のように見えます。</p>
<pre class="snippet"><code>&#10;var iter_ = null&#10;var seq_ = 1..100&#10;while (iter_ = seq_.iterate(iter_)) {&#10;  var i = seq_.iteratorValue(iter_)&#10;  System.print(i)&#10;}&#10;</code></pre>
<p>まず、Wrenはシーケンス式を評価し、隠れた変数に保存します（例では<code>seq_</code>と書いていますが、実際には利用できる名前はありません）。また、隠れた「イテレーター」変数を作り、<code>null</code>で初期化します。</p>
<p>各反復で、現在のイテレーターの値を渡してシーケンスの<code>iterate()</code>を呼び出します（最初の反復では<code>null</code>を渡します）。シーケンスの役目は、そのイテレーターを受け取って次の要素へ進めることです（イテレーターが<code>null</code>の場合は、<em>最初の</em>要素へ進めます）。その後、新しいイテレーターか、もう要素がないことを示す<code>false</code>を返します。</p>
<p><code>false</code>が返ると、Wrenはループを抜けて終了します。それ以外が返ると、新しい有効な要素へ進んだという意味です。その要素を得るため、Wrenは続いてシーケンスの<code>iteratorValue()</code>を呼び出し、<code>iterate()</code>から得たばかりのイテレーターの値を渡します。シーケンスはそれを使って、該当する要素を調べて返します。</p>
<p>組み込みの<a href="/docs/wren/v0-4-0/en/01-guide/05-lists/">List</a>型と<a href="/docs/wren/v0-4-0/en/01-guide/04-values/#ranges">Range</a>型は、それぞれのシーケンスを順に処理するため、<code>iterate()</code>と<code>iteratorValue()</code>を実装しています。自分のクラスでも同じメソッドを実装すれば、独自の型を反復処理できるようになります。</p>
<p><br/><hr/><a class="right" href="/docs/wren/v0-4-0/en/01-guide/09-variables/">変数 →</a><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/">← メソッド呼び出し</a></p>
</div>

