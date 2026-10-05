---
title: "メソッド呼び出し"
documentId: "wren:method-calls.html"
order: 7
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">メソッド呼び出し</h1>
<p>Wrenは徹底したオブジェクト指向言語なので、多くのコードはオブジェクトのメソッドを呼び出すもので、通常は次のような形になります。</p>
<pre class="snippet"><code>&#10;System.print("Heyoo!") //&gt; Heyoo!&#10;</code></pre>
<p><em>レシーバー</em>となる式（ここでは<code>System</code>）に続けて、<code>.</code>、名前（<code>print</code>）、丸括弧で囲んだ引数リスト（<code>("Heyoo!")</code>）を書きます。引数が複数ある場合は、コンマで区切ります。</p>
<pre class="snippet"><code>&#10;list.insert(3, "item")&#10;</code></pre>
<p>引数リストは空でもかまいません。</p>
<pre class="snippet"><code>&#10;list.clear()&#10;</code></pre>
<p>VMは、次の手順でメソッド呼び出しを実行します。</p>
<ol>
<li>レシーバーと引数を左から右へ評価する。</li>
<li>レシーバーの<a href="/docs/wren/v0-4-0/ja/01-guide/10-classes/">クラス</a>でメソッドを探す。</li>
<li>引数の値を渡して、そのメソッドを呼び出す。</li>
</ol>
<h2>シグネチャ <a class="header-anchor" href="#signature" name="signature">#</a></h2>
<p>ほかの多くの動的型付け言語とは異なり、Wrenでは<em>シグネチャ</em>が違っていれば、同じ<em>名前</em>のメソッドを一つのクラスに複数定義できます。シグネチャには、メソッド名と受け取る引数の数が含まれます。専門的に言うと、<em>引数の個数によるオーバーロード</em>が可能です。</p>
<p>例えば、<a href="/docs/wren/v0-4-0/en/02-reference/17-modules-random-random/">Random</a>クラスには、乱数の整数を得るメソッドが二つあります。一方は最小値と最大値を受け取り、その範囲の値を返します。もう一方は最大値だけを受け取り、最小値に0を使います。</p>
<pre class="snippet"><code>&#10;var random = Random.new()&#10;random.int(3, 10)&#10;random.int(4)&#10;</code></pre>
<p>PythonやJavaScriptのような言語では、どちらも何らかの「省略可能な」パラメーターを持つ一つの<code>int()</code>メソッドを呼び出します。メソッドの本体で渡された引数の数を調べ、制御フローを使って二つの動作を処理します。つまり、最初のパラメーターは「別のパラメーターが渡されていなければmax、渡されていればmin」を表します。</p>
<p>この種の「可変引数」のコードは理想的ではないため、Wrenでは推奨していません。</p>
<p>Wrenでは、これらは<code>int(_,_)</code>と<code>int(_)</code>という、完全に別々の二つのメソッドへの呼び出しです。省略可能なパラメーターも、場合分けのための制御フローも必要ないので、このような「オーバーロード」を定義しやすくなります。</p>
<p>実行も速くなります。渡す引数の数はコンパイル時に分かるため、適切なメソッドを直接呼び出すコードを生成でき、「引数が二つならこうする……」という実行時の処理を避けられます。</p>
<h2>ゲッター <a class="header-anchor" href="#getters" name="getters">#</a></h2>
<p>オブジェクトが保存しているプロパティーや、計算して求めるプロパティーを公開するためのメソッドがあります。これらは<em>ゲッター</em>で、丸括弧を付けません。</p>
<pre class="snippet"><code>&#10;"string".count    //&gt; 6&#10;(1..10).min       //&gt; 1&#10;1.23.sin          //&gt; 0.9424888019317&#10;[1, 2, 3].isEmpty //&gt; false&#10;</code></pre>
<p>ゲッターは、空の引数リストを持つメソッドと<em>同じではありません</em>。<code>()</code>はシグネチャの一部なので、<code>count</code>と<code>count()</code>はシグネチャが異なります。Rubyの省略可能な丸括弧とは違い、Wrenはゲッターをゲッターとして、<code>()</code>メソッドを<code>()</code>メソッドとして呼び出すことを求めます。次の呼び出しは使えません。</p>
<pre class="snippet"><code>&#10;"string".count()&#10;[1, 2, 3].clear&#10;</code></pre>
<p>パラメーターが不要なメンバーを定義する場合は、ゲッターにするか、空の<code>()</code>パラメーターリストを持つメソッドにするかを決める必要があります。一般的な指針は次のとおりです。</p>
<ul>
<li>オブジェクトを変更するか、何らかの副作用があるなら、メソッドにする。</li>
</ul>
<pre class="snippet"><code>&#10;list.clear()&#10;</code></pre>
<ul>
<li>メソッドが複数の引数個数に対応するなら、ほかの版と一貫するよう、引数がゼロの場合も<code>()</code>メソッドにする。</li>
</ul>
<pre class="snippet"><code>&#10;Fiber.yield()&#10;Fiber.yield("value")&#10;</code></pre>
<ul>
<li>それ以外なら、おそらくゲッターにできます。</li>
</ul>
<h2>セッター <a class="header-anchor" href="#setters" name="setters">#</a></h2>
<p>ゲッターは、<em>読み取れる</em>公開「プロパティー」をオブジェクトに持たせます。同様に、<em>セッター</em>はプロパティーへの書き込みを可能にします。</p>
<pre class="snippet"><code>&#10;person.height = 74 // Grew up!&#10;</code></pre>
<p><code>=</code>があっても、これはメソッド呼び出しの別の書き方にすぎません。言語の立場から見ると、上の行は単に<code>person</code>の<code>height=(_)</code>メソッドに<code>74</code>を渡して呼び出しています。</p>
<p><code>=(_)</code>はセッターのシグネチャに含まれるため、オブジェクトに同じ名前のゲッターとセッターを定義しても衝突しません。両方を定義すると、読み書きできるプロパティーを提供できます。</p>
<h2>演算子 <a class="header-anchor" href="#operators" name="operators">#</a></h2>
<p>Wrenには、なじみのある演算子の大半が、同じ優先順位と結合性で備わっています。前置演算子は三つあります。</p>
<pre class="snippet"><code>&#10;! ~ -&#10;</code></pre>
<p>これらは、ほかの引数を渡さずにオペランドのメソッドを呼び出すだけです。<code>!possible</code>のような式は、「<code>possible</code>の<code>!</code>メソッドを呼び出す」という意味です。</p>
<p>両側にオペランドを持つ、中置演算子も多数あります。次のとおりです。</p>
<pre class="snippet"><code>&#10;* / % + - .. ... &lt;&lt; &gt;&gt; &lt; &lt;= &gt; &gt;= == != &amp; ^ | is&#10;</code></pre>
<p>前置演算子と同様、これらもすべて、メソッド呼び出しの変わった書き方です。左のオペランドがレシーバーで、右のオペランドを引数として渡します。したがって、<code>a + b</code>は意味上、「<code>a</code>の<code>+(_)</code>メソッドに<code>b</code>を渡して呼び出す」と解釈します。</p>
<p><code>-</code>には前置演算子と中置演算子の両方がある点に注意してください。シグネチャが<code>-</code>と<code>-(_)</code>で異なるので、両者に曖昧さはありません。</p>
<p>これらの大半は、すでになじみがあるでしょう。<code>..</code>と<code>...</code>は「範囲」演算子です。数値型は、<a href="/docs/wren/v0-4-0/ja/01-guide/04-values/#ranges">範囲</a>オブジェクトを作成するためにこれらを実装していますが、ほかの演算子と同じように、メソッド呼び出しです。</p>
<p><code>is</code>キーワードは「型の検査」の演算子です。基底の<a href="/docs/wren/v0-4-0/en/02-reference/09-modules-core-object/">Object</a>クラスがこれを実装し、オブジェクトが指定したクラスのインスタンスかどうかを調べます。必要になることはまれですが、自分のクラスで<code>is</code>をオーバーライドすることもできます。これは、特定のクラスに見せかけたいモックやプロキシーなどに役立ちます。</p>
<h2>添字 <a class="header-anchor" href="#subscripts" name="subscripts">#</a></h2>
<p>数学でおなじみの別の構文に、角括弧（<code>[]</code>）による<em>添字</em>があります。コレクションのようなオブジェクトを扱う際に便利です。例えば、次のように使います。</p>
<pre class="snippet"><code>&#10;list[0]    // Get the first item in a list.&#10;map["key"] // Get the value associated with "key".&#10;</code></pre>
<p>もうお分かりでしょう。Wrenでは、これらもメソッド呼び出しです。上の例でのシグネチャは<code>[_]</code>です。添字演算子には複数の引数も渡せるため、多次元配列などに便利です。</p>
<pre class="snippet"><code>&#10;matrix[3, 5]&#10;</code></pre>
<p>これらの例は添字の「ゲッター」ですが、対応する<em>添字セッター</em>もあります。</p>
<pre class="snippet"><code>&#10;list[0] = "item"&#10;map["key"] = "value"&#10;</code></pre>
<p>これらは、シグネチャが<code>[_]=(_)</code>で、添字（一つまたは複数）と右辺の値を引数に取るメソッド呼び出しと同じです。</p>
<p><br/><hr/><a class="right" href="/docs/wren/v0-4-0/ja/01-guide/08-control-flow/">制御フロー →</a><a href="/docs/wren/v0-4-0/ja/01-guide/06-maps/">← マップ</a></p>
</div>

