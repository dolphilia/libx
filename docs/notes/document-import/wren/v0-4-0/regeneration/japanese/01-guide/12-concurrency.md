---
title: "並行処理"
documentId: "wren:concurrency.html"
order: 12
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">並行処理</h1>
<p>軽量な並行処理はWrenの重要な機能で、<em>ファイバー</em>を使って表します。ファイバーは、すべてのコードの実行方法を制御し、<a href="/docs/wren/v0-4-0/ja/01-guide/13-error-handling/">エラー処理</a>では例外の代わりになります。</p>
<p>ファイバーはスレッドに少し似ていますが、<em>協調的</em>にスケジュールします。つまり、指示しない限り、Wrenは一つのファイバーを一時停止して別のファイバーへ切り替えません。思いがけないタイミングでのコンテキスト切り替えや、それに伴う問題を心配する必要がありません。</p>
<p>WrenはVM内のすべてのファイバーを管理するため、OSのスレッド資源を使わず、重いコンテキスト切り替えも必要ありません。各ファイバーに必要なのは、スタックのための少量のメモリーだけです。参照されなくなると、ほかのオブジェクトと同じようにガベージコレクションの対象になるので、自由に作成できます。</p>
<p>例えば、ゲーム内の各エンティティーに別々のファイバーを割り当てられるほど軽量です。Wrenは何千ものファイバーを余裕で処理できます。例えば、対話モードでWrenを実行すると、入力したコードの各行について新しいファイバーを作ります。</p>
<h2>ファイバーの作成 <a class="header-anchor" href="#creating-fibers" name="creating-fibers">#</a></h2>
<p>すべてのWrenコードは、ファイバーのコンテキスト内で実行します。最初にWrenスクリプトを開始すると、メインファイバーを自動的に作成します。Fiberクラスのコンストラクターを使うと、新しいファイバーを作れます。</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  System.print("This runs in a separate fiber.")&#10;}&#10;</code></pre>
<p>コンストラクターは、そのファイバーが実行するコードを含む<a href="/docs/wren/v0-4-0/ja/01-guide/11-functions/">関数</a>を受け取ります。関数のパラメーターはゼロ個か一個で、それより多くはできません。ファイバーを作っても、直ちに実行するわけではありません。関数を包んで、起動を待つだけです。</p>
<h2>ファイバーの呼び出し <a class="header-anchor" href="#invoking-fibers" name="invoking-fibers">#</a></h2>
<p>ファイバーを作成したら、その<code>call()</code>メソッドを呼び出して実行します。</p>
<pre class="snippet"><code>&#10;fiber.call()&#10;</code></pre>
<p>これにより、現在のファイバーを中断し、呼び出したファイバーを、本体の終わりに達するか、さらに別のファイバーへ制御を渡すまで実行します。本体の終わりに達したら、<em>完了</em>と見なします。</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  System.print("It's alive!")&#10;}&#10;&#10;System.print(fiber.isDone) //&gt; false&#10;fiber.call() //&gt; It's alive!&#10;System.print(fiber.isDone) //&gt; true&#10;</code></pre>
<p>呼び出したファイバーが終了すると、それを呼び出したファイバーへ、自動的に制御を<em>戻します</em>。すでに完了したファイバーを呼び出そうとすると、実行時エラーになります。</p>
<h2>yieldによる制御の返却 <a class="header-anchor" href="#yielding" name="yielding">#</a></h2>
<p>ファイバーと関数の主な違いは、ファイバーを処理の途中で中断し、後で再開できることです。別のファイバーを呼び出すのは、ファイバーを中断する一つの方法ですが、それはおおむね、一つの関数が別の関数を呼ぶのと同じです。</p>
<p>興味深いのは、ファイバーが<em>yield</em>するときです。yieldしたファイバーは、それを実行したファイバーへ制御を<em>戻します</em>が、<em>現在の位置を覚えています</em>。次にそのファイバーを呼び出すと、中断した位置から、そのまま実行を続けます。</p>
<p>Fiberの静的<code>yield()</code>メソッドを呼び出すと、ファイバーをyieldさせられます。</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  System.print("Before yield")&#10;  Fiber.yield()&#10;  System.print("Resumed")&#10;}&#10;&#10;System.print("Before call") //&gt; Before call&#10;fiber.call() //&gt; Before yield&#10;System.print("Calling again") //&gt; Calling again&#10;fiber.call() //&gt; Resumed&#10;System.print("All done") //&gt; All done&#10;</code></pre>
<p>このプログラムは<em>並行処理</em>を使っていても、<em>決定的</em>である点に注意してください。何を行うかを正確に推論でき、コードでロシアンルーレットをするスレッドスケジューラーに振り回されません。</p>
<h2>値を渡す <a class="header-anchor" href="#passing-values" name="passing-values">#</a></h2>
<p>ファイバーの呼び出しとyieldは制御を渡すために使いますが、<em>データ</em>も渡せます。ファイバーを呼び出す際、必要に応じて値を渡せます。</p>
<p>パラメーターを取る関数でファイバーを作成した場合、<code>call()</code>を通じて値を渡せます。</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {|param|&#10;  System.print(param)&#10;}&#10;&#10;fiber.call("Here you go") //&gt; Here you go&#10;</code></pre>
<p>ファイバーがyieldして再開を待っている場合、callに渡した値は、再開時に<code>yield()</code>呼び出しの戻り値になります。</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {|param|&#10;  System.print(param)&#10;  var result = Fiber.yield()&#10;  System.print(result)&#10;}&#10;&#10;fiber.call("First") //&gt; First&#10;fiber.call("Second") //&gt; Second&#10;</code></pre>
<p>ファイバーは、yieldするときに値を<em>返す</em>こともできます。<code>yield()</code>に引数を渡すと、ファイバーの呼び出しに使った<code>call()</code>の戻り値になります。</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  Fiber.yield("Reply")&#10;}&#10;&#10;System.print(fiber.call()) //&gt; Reply&#10;</code></pre>
<p>関数呼び出しが値を返すのに少し似ていますが、ファイバーはyieldのたびに一つずつ、値の列全体を返せます。</p>
<h2>完全なコルーチン <a class="header-anchor" href="#full-coroutines" name="full-coroutines">#</a></h2>
<p>ここまでの機能は、<em>ジェネレーター</em>を持つPythonやC#などの言語でできることによく似ています。ジェネレーターでは、中断して再開できる関数呼び出しを定義できます。使う側からは、反復処理できるシーケンスのように見えます。</p>
<p>Wrenのファイバーにもそれができますが、さらに多くのことができます。Luaと同様、完全な<em>コルーチン</em>であり、コールスタックのどこからでも中断できます。ファイバーの作成に使った関数がメソッドを呼び、そのメソッドが別のメソッドを呼び、それが三つ目のメソッドを呼んで、最後にyieldを呼ぶこともできます。そのとき、それら<em>すべて</em>のメソッド呼び出し、つまりコールスタック全体を中断します。例えば、次のようになります。</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  (1..10).each {|i|&#10;    Fiber.yield(i)&#10;  }&#10;}&#10;</code></pre>
<p>ここでは、<code>each()</code>メソッドに渡す<a href="/docs/wren/v0-4-0/ja/01-guide/11-functions/">関数</a>の中から<code>yield()</code>を呼び出しています。Wrenでは、内側の<code>yield()</code>呼び出しが、<code>each()</code>の呼び出しと、そのコールバックとして渡した関数を中断するので、問題なく動作します。</p>
<h2>制御の移譲 <a class="header-anchor" href="#transferring-control" name="transferring-control">#</a></h2>
<p>ファイバーには、もう一つの機能があります。<code>call()</code>を使ってファイバーを実行すると、yield時にどのファイバーへ戻るかを記録します。これにより、ファイバー呼び出しの連鎖を作れます。呼び出したファイバーがすべてyieldまたは終了すると、最終的にメインファイバーまで戻ります。</p>
<p>通常は、この動作を望むでしょう。しかし、ファイバーのプールを管理する独自のスケジューラーを書くような低水準の処理では、ファイバーを明示的にスタックとして扱いたくない場合もあります。</p>
<p>そのようなまれな場合のために、ファイバーには<code>transfer()</code>メソッドもあります。これは移譲先のファイバーへ実行を切り替え、移譲<em>元</em>のファイバーを「忘れます」。移譲元は、その時点の状態のまま中断します。明示的にそちらへ再び制御を移譲するか、呼び出すことで再開できます。そうしなければ、最後の移譲先のファイバーが戻ったときに、実行が停止します。</p>
<p><code>call()</code>と<code>yield()</code>が関数の呼び出しと復帰に似ているのに対し、<code>transfer()</code>は構造化されていないgotoのように動作します。対等な複数のファイバーの間で、自由に制御を切り替えられます。</p>
<p><br/><hr/><a class="right" href="/docs/wren/v0-4-0/ja/01-guide/13-error-handling/">エラー処理 →</a><a href="/docs/wren/v0-4-0/ja/01-guide/10-classes/">← クラス</a></p>
</div>

