---
title: "関数"
documentId: "wren:functions.html"
order: 11
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">関数</h1>
<p>今日の多くの言語と同様、Wrenの関数は小さなコードのまとまりで、変数に保存したり、メソッドの引数として渡したりできます。</p>
<p><em>関数</em>と<em>メソッド</em>には違いがある点に注意してください。</p>
<p>Wrenはオブジェクト指向なので、コードの大半はクラスのメソッドに置きますが、独立した関数も非常に便利です。</p>
<p>Wrenのほかのものと同じように、関数もオブジェクトで、<code>Fn</code>クラスのインスタンスです。</p>
<h2>関数の作成 <a class="header-anchor" href="#creating-a-function" name="creating-a-function">#</a></h2>
<p>関数を作るには、実行するブロックを受け取る<code>Fn.new</code>を呼び出します。関数を呼び出すには、その関数インスタンスの<code>.call()</code>を使います。</p>
<pre class="snippet"><code>&#10;var sayHello = Fn.new { System.print("hello") }&#10;&#10;sayHello.call() //&gt; hello&#10;</code></pre>
<p>後で、関数を作成するための短い構文も説明します。</p>
<h2>関数のパラメーター <a class="header-anchor" href="#function-parameters" name="function-parameters">#</a></h2>
<p>もちろん、値を渡せなければ、関数はあまり役に立ちません。上の関数は引数を受け取りません。引数を受け取るようにするには、本体の開始の波括弧の直後に、<code>|</code>で囲んだパラメーターリストを置きます。</p>
<p>関数へ引数を渡すには、<code>call</code>メソッドに渡します。</p>
<pre class="snippet"><code>&#10;var sayMessage = Fn.new {|recipient, message|&#10;  System.print("message for %(recipient): %(message)")&#10;}&#10;&#10;sayMessage.call("Bob", "Good day!")&#10;</code></pre>
<p>パラメーターリストが要求する個数より少ない引数で関数を呼び出すと、エラーになります。引数が<em>多すぎる</em>場合、余分な引数は無視します。</p>
<h2>値を返す <a class="header-anchor" href="#returning-values" name="returning-values">#</a></h2>
<p>関数の本体は<a href="/docs/wren/v0-4-0/ja/01-guide/03-syntax/#blocks">ブロック</a>です。一つの式だけであれば、より正確には<code>{</code>またはパラメーターリストの後に改行がなければ、関数は暗黙にその式の値を返します。</p>
<p>そうでない場合、本体は既定で<code>null</code>を返します。<code>return</code>文を使うと、値を明示的に返せます。言い換えると、次の二つの関数は同じ動作をします。</p>
<pre class="snippet"><code>&#10;Fn.new { "return value" }&#10;&#10;Fn.new {&#10;  return "return value"&#10;}&#10;</code></pre>
<p><code>call</code>を使うと、その戻り値を受け取れます。</p>
<pre class="snippet"><code>&#10;var fn = Fn.new { "some value" }&#10;var result = fn.call()&#10;System.print(result) //&gt; some value&#10;</code></pre>
<h2>クロージャー <a class="header-anchor" href="#closures" name="closures">#</a></h2>
<p>予想どおり、関数はクロージャーであり、自分のスコープの外で定義した変数にアクセスできます。関数を定義したスコープを離れた後も、閉じ込めた変数を保持します。</p>
<pre class="snippet"><code>&#10;class Counter {&#10;  static create() {&#10;    var i = 0&#10;    return Fn.new { i = i + 1 }&#10;  }&#10;}&#10;</code></pre>
<p>ここでは、<code>create</code>メソッドは、二行目で作った関数を返します。その関数は、関数の外で宣言した変数<code>i</code>を参照します。<code>create</code>から関数を返した後でも、<code>i</code>を読み取ったり、代入したりできます。</p>
<pre class="snippet"><code>&#10;var counter = Counter.create()&#10;System.print(counter.call()) //&gt; 1&#10;System.print(counter.call()) //&gt; 2&#10;System.print(counter.call()) //&gt; 3&#10;</code></pre>
<h2>呼び出し可能なクラス <a class="header-anchor" href="#callable-classes" name="callable-classes">#</a></h2>
<p><code>Fn</code>はクラスであり、<code>call()</code>に応答するので、どのクラスでも<code>call()</code>に応答することで関数の代わりに使えます。コールバックやイベントのように、呼び出すために関数をメソッドへ渡す場面で、特に便利です。</p>
<pre class="snippet"><code>&#10;class Callable {&#10;  construct new() {}&#10;  call(name, version) {&#10;    System.print("called %(name) with version %(version)")&#10;  }&#10;}&#10;&#10;var fn = Callable.new()&#10;fn.call("wren", "0.4.0")&#10;</code></pre>
<h2>ブロック引数 <a class="header-anchor" href="#block-arguments" name="block-arguments">#</a></h2>
<p>呼び出すために関数をメソッドへ渡すのは、非常によくある操作です。Wrenには数え切れないほどの例があります。例えば、関数を受け取る<code>where</code>メソッドを使って、<a href="/docs/wren/v0-4-0/ja/01-guide/05-lists/">リスト</a>を絞り込めます。</p>
<pre class="snippet"><code>&#10;var list = [1, 2, 3, 4, 5]&#10;var filtered = list.where(Fn.new {|value| value &gt; 3 }) &#10;System.print(filtered.toList) //&gt; [4, 5]&#10;</code></pre>
<p>この構文は少し読み書きしづらいため、Wrenには<em>ブロック引数</em>という概念があります。関数をメソッドへ渡す際、それが最後の引数であれば、<em>ブロック部分だけ</em>という短い構文を使えます。</p>
<p><code>list.where</code>でブロック引数を使ってみましょう。これは最後の、そして唯一の引数です。</p>
<pre class="snippet"><code>&#10;var list = [1, 2, 3, 4, 5]&#10;var filtered = list.where {|value| value &gt; 3 } &#10;System.print(filtered.toList) //&gt; [4, 5]&#10;</code></pre>
<p>前のページでは、<code>map</code>と<code>where</code>を使う同じ構文をすでに見ました。</p>
<pre class="snippet"><code>&#10;numbers.map {|n| n * 2 }.where {|n| n &lt; 100 }&#10;</code></pre>
<h2>ブロック引数の例 <a class="header-anchor" href="#block-argument-example" name="block-argument-example">#</a></h2>
<p>全体の例を見て、渡す側と受け取る側の両方を確認しましょう。</p>
<p>次は、クリックイベントが送られてきたときに関数を呼び出すものを表す、架空のクラスです。関数だけを渡してマウスの左ボタンを想定することも、ボタンと関数を渡すこともできます。</p>
<pre class="snippet"><code>&#10;class Clickable {&#10;  construct new() {&#10;    _fn = null&#10;    _button = 0&#10;  }&#10;  &#10;  onClick(fn) {&#10;    _fn = fn&#10;  }&#10;&#10;  onClick(button, fn) {&#10;    _button = button&#10;    _fn = fn&#10;  }&#10;&#10;  fireEvent(button) {&#10;    if(_fn &amp;&amp; button == _button) {&#10;      _fn.call(button)&#10;    }&#10;  }&#10;}&#10;</code></pre>
<p>クリック可能なクラスができたので、使ってみましょう。既定の左ボタンでよいので、まずは関数だけを受け取るメソッドを使います。</p>
<pre class="snippet"><code>&#10;var link = Clickable.new()&#10;&#10;link.onClick {|button|&#10;  System.print("I was clicked by button %(button)")&#10;}&#10;&#10;// send a left mouse click&#10;// normally this would happen from elsewhere&#10;&#10;link.fireEvent(0)  //&gt; I was clicked by button 0&#10;</code></pre>
<p>今度は、ボタンの引数を追加して試しましょう。</p>
<pre class="snippet"><code>&#10;var contextMenu = Clickable.new()&#10;&#10;contextMenu.onClick(1) {|button|&#10;  System.print("I was right-clicked")&#10;}&#10;&#10;link.fireEvent(0)  //&gt; (nothing happened)&#10;link.fireEvent(1)  //&gt; I was right-clicked&#10;</code></pre>
<p>ほかの引数は通常どおり渡しており、特別なのは最後の引数だけという点に注意してください。</p>
<p><strong>普通の関数にすぎない</strong></p>
<p>ブロック引数は、関数を作成して渡す操作を一つの小さな構文にまとめた、純粋な糖衣構文です。次の二つは同じです。</p>
<pre class="snippet"><code>&#10;onClick(Fn.new { System.print("clicked") })&#10;onClick { System.print("clicked") }&#10;</code></pre>
<p>次の書き方も、同じように有効です。</p>
<pre class="snippet"><code>&#10;var onEvent = Fn.new {|button|&#10;  System.print("clicked by button %(button)")&#10;}&#10;&#10;onClick(onEvent)&#10;onClick(1, onEvent)&#10;</code></pre>
<p><strong>Fn.new</strong><br/>ここまででお気付きかもしれませんが、<code>Fn</code>は<code>Fn.new</code>のためのブロック引数を受け取ります。このコンストラクターが行うのは、その引数をそのまま返すことだけです！</p>
<p><br/><hr/><a class="right" href="/docs/wren/v0-4-0/ja/01-guide/10-classes/">クラス →</a><a href="/docs/wren/v0-4-0/ja/01-guide/09-variables/">← 変数</a></p>
</div>

