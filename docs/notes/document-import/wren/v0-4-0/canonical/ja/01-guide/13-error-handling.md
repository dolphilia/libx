---
title: "エラー処理"
documentId: "wren:error-handling.html"
order: 13
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">エラー処理</h1>
<p>エラーには、いくつかの種類があります。</p>
<h2>構文エラー <a class="header-anchor" href="#syntax-errors" name="syntax-errors">#</a></h2>
<p>最初に遭遇するのは、たいてい構文エラーでしょう。これは、コードが言語の文法に従っていない、次のような単純な不具合を含みます。</p>
<pre class="snippet"><code>&#10;1 + * 2&#10;</code></pre>
<p>Wrenは、コードを読み取ろうとした時点で、これらのエラーを検出します。エラーがあると、次のような分かりやすいメッセージを表示します。</p>
<pre><code>[main line 1] Error on '*': Unexpected token for expression.&#10;</code></pre>
<p>もう少し「意味的」なエラーも、この種類に含まれます。未定義の変数を使うことや、同じスコープで同じ名前の変数を二つ宣言することなどです。例えば、次のように書くと、</p>
<pre class="snippet"><code>&#10;var a = "once"&#10;var a = "twice"&#10;</code></pre>
<p>Wrenは、次のように知らせます。</p>
<pre><code>[main line 2] Error on 'a': Top-level variable is already defined.&#10;</code></pre>
<p>これは、コードを<em>一つでも</em>実行する前に行う点に注意してください。ほかの一部のスクリプト言語とは異なり、Wrenは、可能な限り早くエラーを見つけられるようにします。</p>
<p>コードの実行を開始したなら、構文や変数のスコープに関するエラーがないことは確かです。</p>
<h2>実行時エラー <a class="header-anchor" href="#runtime-errors" name="runtime-errors">#</a></h2>
<p>残念ながら、「コンパイル時」のエラーをすべて直しても、コードが意図どおりに動くとは限りません。プログラムには、静的には検出できないエラーが残っているかもしれません。コードを実行するまで見つけられないので、「実行時」エラーと呼びます。</p>
<p>実行時エラーの大半は、VM自身から発生します。VMができない操作を、コードが行おうとするためです。最も一般的なのは、「メソッドが見つからない」というエラーです。オブジェクトのメソッドを呼び出しても、そのクラスにも、すべてのスーパークラスにもそのメソッドが定義されていなければ、Wrenには何もできません。</p>
<pre class="snippet"><code>&#10;class Foo {&#10;  construct new() {}&#10;}&#10;&#10;var foo = Foo.new()&#10;foo.someRandomMethod&#10;</code></pre>
<p>これを実行すると、Wrenは次のように表示します。</p>
<pre><code>Foo does not implement method 'someRandomMethod'.&#10;</code></pre>
<p>その後、コードの実行を停止します。ほかの一部の言語とは異なり、Wrenは実行時エラーが起きた後に実行を続けません。実行時エラーは、コードに不具合があることを意味するため、それに気付いてほしいのです。助けとなるよう、エラーが起きたコードの位置と、そこへ至るすべてのメソッド呼び出しを示すスタックトレースを表示します。</p>
<p>ほかによくある実行時エラーは、メソッドに型の違う引数を渡すことです。例えば、リストのインデックスには数値を使います。ほかの型を渡そうとすると、エラーになります。</p>
<pre class="snippet"><code>&#10;var list = ["a", "b", "c"]&#10;list["1"]&#10;</code></pre>
<p>これは、次のように表示して終了します。</p>
<pre><code>Subscript must be a number or a range.&#10;[main line 2] in (script)&#10;</code></pre>
<p>この二つが、最も一般的な実行時エラーですが、ほかにもあります。リストの範囲外へのアクセス、引数の個数を間違えた関数呼び出しなどです。</p>
<h2>実行時エラーを処理する <a class="header-anchor" href="#handling-runtime-errors" name="handling-runtime-errors">#</a></h2>
<p>ほとんどの場合、実行時エラーはコードの不具合を示し、最善の解決策は、不具合を直すことです。しかし、実行時にエラーを処理できると便利な場合もあります。</p>
<p>言語を単純にするため、Wrenには例外処理がありません。代わりに、エラーの処理に<a href="/docs/wren/v0-4-0/ja/01-guide/12-concurrency/">ファイバー</a>を使います。実行時エラーが起きると、現在のファイバーは中止します。通常は、そのファイバーを呼び出したファイバーも、メインファイバーまで順に中止し、VMを終了します。</p>
<p>ただし、<code>try</code>メソッドを使ってファイバーを実行することもできます。呼び出したファイバーで実行時エラーが起きると、エラーを捕捉し、<code>try</code>メソッドはエラーメッセージを文字列として返します。</p>
<p>例えば、次のプログラムを実行すると、</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  123.badMethod&#10;}&#10;&#10;var error = fiber.try()&#10;System.print("Caught error: " + error)&#10;</code></pre>
<p>次のように表示します。</p>
<pre><code>Caught error: Num does not implement method 'badMethod'.&#10;</code></pre>
<p>呼び出したファイバーは、もう使えませんが、ほかのファイバーは通常どおり続行できます。実行時エラーによってファイバーが中止された場合、そのファイバーオブジェクトからエラーを取得することもできます。上の例を続けると、</p>
<pre class="snippet"><code>&#10;System.print(fiber.error)&#10;</code></pre>
<p>これも、次のように表示します。</p>
<pre><code>Num does not implement method 'badMethod'.&#10;</code></pre>
<p>ファイバー呼び出しの連鎖の中で実行時エラーが起きると、その連鎖をたどって<code>try</code>呼び出しを探します。したがって、<code>try</code>を呼び出したファイバーが、さらに呼び出したファイバーで発生した実行時エラーも捕捉できます。</p>
<h2>実行時エラーを発生させる <a class="header-anchor" href="#creating-runtime-errors" name="creating-runtime-errors">#</a></h2>
<p>実行時エラーの大半はWren VMの内部から発生しますが、自分で実行時エラーを発生させたい場合もあります。<code>Fiber</code>の静的<code>abort()</code>メソッドを呼び出すと、それができます。</p>
<pre class="snippet"><code>&#10;Fiber.abort("Something bad happened")&#10;</code></pre>
<p>エラーメッセージを渡す必要があり、そのメッセージは文字列でなければなりません。</p>
<p>渡したメッセージが<code>null</code>なら、実行時エラーは発生しません。</p>
<h2>処理の失敗 <a class="header-anchor" href="#failures" name="failures">#</a></h2>
<p>最後の種類のエラーは、最も高水準のものです。これまでのエラーは、すべて<em>不具合</em>、つまりコード自体が正しくない箇所を示します。しかし、予測できない理由により、単にコードが処理を達成できなかったことを示すエラーもあります。これを「失敗」と呼びます。</p>
<p>ユーザーから入力文字列を読み取り、数値へ解析するプログラムを考えてください。多くの文字列は有効な数値ではないので、この解析は失敗することがあります。プログラムが失敗を防ぐには、解析の前に文字列を検証するしかありませんが、文字列が数値かどうかの検証は、解析とほぼ同じ処理です。</p>
<p>このように失敗が起こり得て、プログラムがそれを処理<em>したい</em>場合、ファイバーと<code>try()</code>は、粒度が粗すぎます。代わりに、こうした操作は、何らかのエラーの印を<em>返す</em>ことで、失敗を示します。</p>
<p>例えば、数値を解析するメソッドは、成功したら数値を、解析が失敗したことを示すためには<code>null</code>を返せます。Wrenは動的型付けなので、メソッドから型の異なる値を返すことは、簡単で自然です。</p>
<p><br/><hr/><a class="right" href="/docs/wren/v0-4-0/ja/01-guide/14-modularity/">モジュール化 →</a><a href="/docs/wren/v0-4-0/ja/01-guide/12-concurrency/">← 並行処理</a></p>
</div>

