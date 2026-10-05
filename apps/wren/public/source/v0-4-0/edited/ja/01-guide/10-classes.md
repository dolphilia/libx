---
title: "クラス"
documentId: "wren:classes.html"
order: 10
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">クラス</h1>
<p>Wrenのすべての値はオブジェクトで、すべてのオブジェクトはクラスのインスタンスです。<code>true</code>と<code>false</code>も、完全な機能を持つオブジェクトで、<a href="/docs/wren/v0-4-0/en/02-reference/01-modules-core-bool/">Bool</a>クラスのインスタンスです。</p>
<p>クラスは、オブジェクトの<em>振る舞い</em>と<em>状態</em>を定義します。振る舞いは、クラスに置く<a href="/docs/wren/v0-4-0/ja/01-guide/07-method-calls/"><em>メソッド</em></a>で定義します。同じクラスのオブジェクトは、すべて同じメソッドに対応します。状態は<em>フィールド</em>で定義し、その値は各インスタンスに保存します。</p>
<h2>クラスの定義 <a class="header-anchor" href="#defining-a-class" name="defining-a-class">#</a></h2>
<p>予想どおり、クラスは<code>class</code>キーワードで作成します。</p>
<pre class="snippet"><code>&#10;class Unicorn {}&#10;</code></pre>
<p>これで、メソッドもフィールドも持たない、<code>Unicorn</code>というクラスを作成します。</p>
<h2>メソッド <a class="header-anchor" href="#methods" name="methods">#</a></h2>
<p>ユニコーンが何かできるようにするには、メソッドを与える必要があります。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  prance() {&#10;    System.print("The unicorn prances in a fancy manner!")&#10;  }&#10;}&#10;</code></pre>
<p>これで、引数を取らない<code>prance()</code>メソッドを定義します。パラメーターを追加するには、丸括弧の中にその名前を書きます。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  prance(where, when) {&#10;    System.print("The unicorn prances in %(where) at %(when).")&#10;  }&#10;}&#10;</code></pre>
<p>パラメーターの個数はメソッドの<a href="/docs/wren/v0-4-0/ja/01-guide/07-method-calls/#signature">シグネチャ</a>の一部なので、一つのクラスに同じ名前のメソッドを複数定義できます。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  prance() {&#10;    System.print("The unicorn prances in a fancy manner!")&#10;  }&#10;&#10;  prance(where) {&#10;    System.print("The unicorn prances in %(where).")&#10;  }&#10;&#10;  prance(where, when) {&#10;    System.print("The unicorn prances in %(where) at %(when).")&#10;  }&#10;}&#10;</code></pre>
<p>同じ概念的な操作を、異なる引数の組で使えるようにするのは、自然なことです。ほかの言語では、操作のために一つのメソッドを定義し、省略可能な引数が渡されていないかを調べる必要があります。Wrenでは、これらを別々のメソッドとして、それぞれ実装します。</p>
<p>パラメーターリストを持つ名前付きメソッドに加え、Wrenには、メソッドのためのさまざまな構文があります。自分のクラスでも、そのすべてを定義できます。</p>
<h3>ゲッター <a class="header-anchor" href="#getters" name="getters">#</a></h3>
<p>ゲッターでは、パラメーターリストと丸括弧を省きます。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  // Unicorns are always fancy.&#10;  isFancy { true }&#10;}&#10;</code></pre>
<h3>セッター <a class="header-anchor" href="#setters" name="setters">#</a></h3>
<p>セッターでは、名前の後に<code>=</code>を置き、その後に丸括弧で囲んだ一つのパラメーターを書きます。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  rider=(value) {&#10;    System.print("I am being ridden by %(value).")&#10;  }&#10;}&#10;</code></pre>
<p>慣例として、このパラメーターには通常<code>value</code>という名前を付けますが、好きな名前を付けてかまいません。</p>
<h3>演算子 <a class="header-anchor" href="#operators" name="operators">#</a></h3>
<p>前置演算子には、ゲッターと同様、パラメーターリストがありません。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  - {&#10;    System.print("Negating a unicorn is weird.")&#10;  }&#10;}&#10;</code></pre>
<p>中置演算子には、セッターと同様、右のオペランドのための、丸括弧で囲んだ一つのパラメーターがあります。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  -(other) {&#10;    System.print("Subtracting %(other) from a unicorn is weird.")&#10;  }&#10;}&#10;</code></pre>
<p>添字演算子では、角括弧の中にパラメーターを書きます。複数のパラメーターも使えます。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  [index] {&#10;    System.print("Unicorns are not lists!")&#10;  }&#10;&#10;  [x, y] {&#10;    System.print("Unicorns are not matrices either!")&#10;  }&#10;}&#10;</code></pre>
<p>名前付きメソッドとは異なり、パラメーターリストが空の添字演算子は定義できません。</p>
<p>名前が示すとおり、添字セッターは、添字演算子とセッターを組み合わせた形になります。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  [index]=(value) {&#10;    System.print("You can't stuff %(value) into me at %(index)!")&#10;  }&#10;}&#10;</code></pre>
<h2>メソッドのスコープ <a class="header-anchor" href="#method-scope" name="method-scope">#</a></h2>
<p>ここまで、<a href="/docs/wren/v0-4-0/ja/01-guide/09-variables/#scope">スコープ</a>という語は、<a href="/docs/wren/v0-4-0/ja/01-guide/09-variables/">変数</a>についてだけ使ってきました。Cのような手続き型言語や、Schemeのような関数型言語では、スコープはこの一種類だけです。しかし、Wrenのようなオブジェクト指向言語には、もう一つの<em>オブジェクトスコープ</em>があります。これは、そのオブジェクトで利用できるメソッドを含みます。次のように書くと、</p>
<pre class="snippet"><code>&#10;unicorn.isFancy&#10;</code></pre>
<p>「オブジェクト<code>unicorn</code>のスコープで、メソッド<code>isFancy</code>を探す」と指示しています。この場合、探したいものが<em>変数</em><code>isFancy</code>ではなく、<em>メソッド</em><code>isFancy</code>であることは明示されています。それを表すのが<code>.</code>であり、ピリオドの左側のオブジェクトが、メソッドを探す対象です。</p>
<h3><code>this</code> <a class="header-anchor" href="#this" name="this">#</a></h3>
<p>メソッドの本体の中では、もう少し複雑になります。あるオブジェクトのメソッドが呼び出され、その本体を実行しているときには、そのオブジェクト自身へアクセスしたいことがよくあります。<code>this</code>を使うと、それができます。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  name { "Francis" }&#10;&#10;  printName() {&#10;    System.print(this.name) //&gt; Francis&#10;  }&#10;}&#10;</code></pre>
<p><code>this</code>キーワードは、変数のように働きますが、特別な振る舞いがあります。常に、現在実行しているメソッドを持つインスタンスを参照します。これにより、「自分自身」のメソッドを呼び出せます。</p>
<p>メソッドの外で<code>this</code>を参照すると、エラーになります。しかし、メソッドの<em>中</em>で宣言した<a href="/docs/wren/v0-4-0/ja/01-guide/11-functions/">関数</a>の中なら、問題なく使えます。その場合も、<code>this</code>は、呼び出された<em>メソッド</em>を持つインスタンスを参照します。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  name { "Francis" }&#10;&#10;  printNameThrice() {&#10;    (1..3).each {&#10;      // Use "this" inside the function passed to each().&#10;      System.print(this.name) //&gt; Francis&#10;    } //&gt; Francis&#10;  } //&gt; Francis&#10;}&#10;</code></pre>
<p>これは、メソッドの中でコールバックを作ると、<code>this</code>を「忘れる」場合があるLuaやJavaScriptとは異なります。Wrenでは、この場面で意図どおり、元のオブジェクトへの参照を保持します。</p>
<p>（専門的に言うと、関数のクロージャーには<code>this</code>も含まれます。Wrenがこれをできるのは、メソッドと関数を区別しているためです。）</p>
<h3>暗黙の<code>this</code> <a class="header-anchor" href="#implicit-this" name="implicit-this">#</a></h3>
<p>自分自身のメソッドを呼ぶたびに<code>this.</code>を使うことはできますが、面倒で冗長です。そのため、一部の言語では必須にしていません。明示的なレシーバーなしでメソッド（またはゲッターやセッター）を呼び出すと、「自己への送信」ができます。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  name { "Francis" }&#10;&#10;  printName() {&#10;    System.print(name) //&gt; Francis&#10;  }&#10;}&#10;</code></pre>
<p>クラスの外にも同じ名前の変数があると、このようなコードは複雑になります。次の例を考えてください。</p>
<pre class="snippet"><code>&#10;var name = "variable"&#10;&#10;class Unicorn {&#10;  name { "Francis" }&#10;&#10;  printName() {&#10;    System.print(name) // ???&#10;  }&#10;}&#10;</code></pre>
<p><code>printName()</code>は「variable」と「Francis」のどちらを表示すべきでしょうか？ メソッドの本体は、二つの世界にまたがっています。プログラム内で定義した位置のレキシカルスコープに囲まれていますが、同時に、<code>this</code>のメソッドからなるオブジェクトスコープも持ちます。</p>
<p>どちらのスコープが優先されるのでしょうか？ 各言語は、これをどう扱うか決める必要があり、驚くほど多くの方法があります。Wrenは、メソッド内の名前を次の手順で解決します。</p>
<ol>
<li>メソッド内にその名前のローカル変数があれば、それを優先する。</li>
<li>そうでなく、名前が小文字で始まるなら、<code>this</code>のメソッドとして扱う。</li>
<li>それ以外なら、周囲のスコープでその名前の変数を探す。</li>
</ol>
<p>したがって、上の例では二番目の場合に該当し、「Francis」を表示します。名前の最初の文字の<em>大小</em>によって、自己への送信と外側の変数を区別するのは、奇妙に思えるかもしれませんが、意外にうまく機能します。Wrenのメソッド名は小文字で、クラス名は大文字で始まります。</p>
<p>メソッドの中からクラスの外の名前へアクセスしたいとき、その名前はたいてい、別のクラスの名前です。この規則によって、それが機能します。</p>
<p>次は、三つの場合をすべて示す例です。</p>
<pre class="snippet"><code>&#10;var shadowed = "surrounding"&#10;var lowercase = "surrounding"&#10;var Capitalized = "surrounding"&#10;&#10;class Scope {&#10;  shadowed { "object" }&#10;  lowercase { "object" }&#10;  Capitalized { "object" }&#10;&#10;  test() {&#10;    var shadowed = "local"&#10;&#10;    System.print(shadowed) //&gt; local&#10;    System.print(lowercase) //&gt; object&#10;    System.print(Capitalized) //&gt; surrounding&#10;  }&#10;}&#10;</code></pre>
<p>少し変わった規則ですが、Rubyも、おおむね同じように動作します。</p>
<h2>コンストラクター <a class="header-anchor" href="#constructors" name="constructors">#</a></h2>
<p>オブジェクトの種類を定義し、そのメソッドを宣言する方法を見てきました。ユニコーンは跳ね回れますが、そうするためのユニコーン自体を、まだ<em>持っていません</em>。クラスの<em>インスタンス</em>を作るには、<em>コンストラクター</em>が必要です。次のように定義します。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  construct new(name, color) {&#10;    System.print("My name is " + name + " and I am " + color + ".")&#10;  }&#10;}&#10;</code></pre>
<p><code>construct</code>キーワードは、コンストラクターを定義していることを表し、<code>new</code>は、その名前です。Wrenでは、すべてのコンストラクターに名前があります。「new」はWrenで特別な語ではなく、よく使われるコンストラクター名にすぎません。</p>
<p>ユニコーンを作るには、クラス自身のコンストラクターメソッドを呼び出します。</p>
<pre class="snippet"><code>&#10;var fred = Unicorn.new("Fred", "palomino")&#10;</code></pre>
<p>コンストラクターに名前を付けると、複数のコンストラクターを持て、それぞれがどのようにインスタンスを作るか明確にできるので、便利です。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  construct brown(name) {&#10;    System.print("My name is " + name + " and I am brown.")&#10;  }&#10;}&#10;&#10;var dave = Unicorn.brown("Dave")&#10;</code></pre>
<p>ほかの一部の言語とは異なり、Wrenは既定のコンストラクターを提供しないため、自分で宣言する必要があります。これは、構築することを想定していないクラスもあるので、役立ちます。ほかのクラスが継承するメソッドだけを含む抽象基底クラスなら、コンストラクターは不要で、持つこともありません。</p>
<p>ほかのメソッドと同様、コンストラクターにも当然、引数を渡せ、<a href="/docs/wren/v0-4-0/ja/01-guide/07-method-calls/#signature">引数の個数</a>によるオーバーロードもできます。コンストラクターは、空でもよい引数リストを持つ名前付きメソッドで<em>なければなりません</em>。演算子、ゲッター、セッターをコンストラクターにはできません。</p>
<p>コンストラクターは、<code>return</code>を明示的に使わなくても、作成しているクラスのインスタンスを返します。コンストラクター内で<code>return</code>を使うことはできますが、returnの後に式を書くとエラーになります。この規則は<code>return this</code>にも当てはまります。コンストラクター内では、returnがそれを暗黙に扱うため、<code>return</code>だけで十分です。</p>
<pre class="snippet"><code>&#10;return          //&gt; valid, returns 'this'&#10;&#10;return variable //&gt; invalid&#10;return null     //&gt; invalid&#10;return this     //&gt; also invalid&#10;</code></pre>
<p>実際には、コンストラクターは二つのメソッドの組です。クラス側に、次のメソッドができます。</p>
<pre class="snippet"><code>&#10;Unicorn.brown("Dave")&#10;</code></pre>
<p>これは新しいインスタンスを作り、続いて、そのインスタンスの<em>初期化メソッド</em>を呼び出します。定義したコンストラクター本体を実行するのは、こちらです。</p>
<p>この区別は重要です。これにより、コンストラクターの本体の中で<code>this</code>へアクセスし、<a href="#fields">フィールド</a>へ代入し、スーパークラスのコンストラクターを呼び出すことなどができます。</p>
<h2>フィールド <a class="header-anchor" href="#fields" name="fields">#</a></h2>
<p>インスタンスに保存する状態は、すべて<em>フィールド</em>に保存します。各フィールドの名前は、アンダースコアで始まります。</p>
<pre class="snippet"><code>&#10;class Rectangle {&#10;  area { _width * _height }&#10;&#10;  // Other stuff...&#10;}&#10;</code></pre>
<p>ここでは、<code>area</code><a href="/docs/wren/v0-4-0/ja/01-guide/10-classes/#methods">ゲッター</a>内の<code>_width</code>と<code>_height</code>は、長方形のインスタンスのフィールドを参照します。ほかの言語の<code>this.width</code>や<code>this.height</code>のようなものと考えられます。</p>
<p>フィールド名が現れると、Wrenは、最も内側の、その位置を囲むクラスを探し、そのクラスのインスタンスでフィールドを探します。フィールド名は、インスタンスメソッドの外では使えません。メソッド内の<a href="/docs/wren/v0-4-0/ja/01-guide/11-functions/">関数</a>の中では<em>使えます</em>。Wrenは、入れ子になった関数の外側を、その位置を囲むメソッドが見つかるまで探します。</p>
<p><a href="/docs/wren/v0-4-0/ja/01-guide/09-variables/">変数</a>とは異なり、フィールドは、代入するだけで暗黙に宣言されます。初期化する前にフィールドへアクセスすると、その値は<code>null</code>です。</p>
<h3>カプセル化 <a class="header-anchor" href="#encapsulation" name="encapsulation">#</a></h3>
<p>Wrenでは、すべてのフィールドは<em>非公開</em>です。オブジェクトのフィールドへ直接アクセスできるのは、そのオブジェクトのクラスで定義したメソッドの内部だけです。</p>
<p>つまり、オブジェクトのプロパティーを外から見えるようにするには、<strong>それを公開するゲッターを定義する必要があります</strong>。</p>
<pre class="snippet"><code>&#10;class Rectangle {&#10;  width { _width }&#10;  height { _height }&#10;&#10;  // ...&#10;}&#10;</code></pre>
<p>外側のコードからフィールドを変更できるようにするには、<strong>アクセス用のセッターを提供する必要があります</strong>。</p>
<pre class="snippet"><code>&#10;class Rectangle {&#10;  width=(value) { _width = value }&#10;  height=(value) { _height = value }&#10;}&#10;</code></pre>
<p>なじみのある動作とは違うかもしれませんので、重要な二つの事実を挙げます。</p>
<ul>
<li>基底クラスのフィールドにはアクセスできません。</li>
<li>自分と同じクラスの別インスタンスのフィールドにはアクセスできません。</li>
</ul>
<p>次は、コードによる例です。</p>
<pre class="snippet"><code>&#10;class Shape {&#10;  construct new() {&#10;    _shape = "none"&#10;  }&#10;}&#10;&#10;class Rectangle is Shape {&#10;  construct new() {&#10;    //This will print null!&#10;    //_shape from the parent class is private,&#10;    //we are reading `_shape` from `this`,&#10;    //which has not been set, so returns null.&#10;    System.print("I am a %(_shape)")&#10;&#10;    //a local variable, all variables are private&#10;    _width = 10&#10;    var other = Rectangle.new()&#10;&#10;    //other._width is not accessible from here,&#10;    //even though we are also a rectangle. The field&#10;    //is private, and other._width is invalid syntax!&#10;  }&#10;}&#10;...&#10;</code></pre>
<p>過去40年のソフトウェア工学で学んだことの一つは、状態をカプセル化するとコードを保守しやすくなる傾向があることです。そのため、Wrenでは、既定でオブジェクトの状態をかなり厳密に閉じ込めます。オブジェクトのフィールドの大半について、ゲッターやセッターを定義しなければならない、あるいは定義すべきだと考える必要はありません。</p>
<h2>メタクラスと静的メンバー <a class="header-anchor" href="#metaclasses-and-static-members" name="metaclasses-and-static-members">#</a></h2>
<p><strong>TODO</strong></p>
<h3>静的フィールド <a class="header-anchor" href="#static-fields" name="static-fields">#</a></h3>
<p>アンダースコア<em>二つ</em>で始まる名前は、<em>静的</em>フィールドです。<a href="#fields">フィールド</a>と同様に働きますが、データはインスタンスではなく、クラス自身に保存します。インスタンスメソッドと静的メソッドの<em>両方</em>で使えます。</p>
<pre class="snippet"><code>&#10;class Foo {&#10;  construct new() {}&#10;&#10;  static setFromStatic(a) { __a = a }&#10;  setFromInstance(a) { __a = a }&#10;&#10;  static printFromStatic() {&#10;    System.print(__a)&#10;  }&#10;&#10;  printFromInstance() {&#10;    System.print(__a)&#10;  }&#10;}&#10;</code></pre>
<p>インスタンスフィールドと同様、静的フィールドの初期値は<code>null</code>です。</p>
<pre class="snippet"><code>&#10;Foo.printFromStatic() //&gt; null&#10;</code></pre>
<p>静的メソッドから使えます。</p>
<pre class="snippet"><code>&#10;Foo.setFromStatic("first")&#10;Foo.printFromStatic() //&gt; first&#10;</code></pre>
<p>インスタンスメソッドからも使えます。その場合も、クラスのすべてのインスタンスで共有する静的フィールドは一つだけです。</p>
<pre class="snippet"><code>&#10;var foo1 = Foo.new()&#10;var foo2 = Foo.new()&#10;&#10;foo1.setFromInstance("second")&#10;foo2.printFromInstance() //&gt; second&#10;</code></pre>
<h2>継承 <a class="header-anchor" href="#inheritance" name="inheritance">#</a></h2>
<p>クラスは、「親」または<em>スーパークラス</em>から継承できます。あるクラスのオブジェクトでメソッドを呼び出し、それが見つからない場合は、スーパークラスの連鎖を上へたどって探します。</p>
<p>既定では、新しいクラスはObjectを継承します。Objectは、ほかのすべてのクラスが最終的に派生するスーパークラスです。クラスの宣言時に<code>is</code>を使うと、別の親クラスを指定できます。</p>
<pre class="snippet"><code>&#10;class Pegasus is Unicorn {}&#10;</code></pre>
<p>これで、Unicornを継承する、新しいPegasusクラスを宣言します。</p>
<p>組み込み型（Bool、Num、String、Range、List）を継承するクラスを作るべきではない点に注意してください。組み込み型は、内部のビット表現が非常に特定の形であることを前提とします。派生型で、継承した組み込みメソッドを呼び出すと、ひどく混乱してしまいます。</p>
<p>メタクラスの階層は、通常のクラス階層と<em>同じ継承関係にはなりません</em>。したがって、PegasusがUnicornを継承していても、PegasusのメタクラスはUnicornのメタクラスを継承しません。より平易に言うと、静的メソッドは継承しません。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  // Unicorns cannot fly. :(&#10;  static canFly { false }&#10;}&#10;&#10;class Pegasus is Unicorn {}&#10;&#10;Pegasus.canFly //! Static methods are not inherited.&#10;</code></pre>
<p>これは、コンストラクターも継承しないという意味です。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  construct new(name) {&#10;    System.print("My name is " + name + ".")&#10;  }&#10;}&#10;&#10;class Pegasus is Unicorn {}&#10;&#10;Pegasus.new("Fred") //! Pegasus does not define new().&#10;</code></pre>
<p>各クラスは、基底クラスから独立して、自分をどのように構築できるか制御します。ただし、コンストラクターの<em>初期化メソッド</em>は、新しいオブジェクトのインスタンスメソッドなので、継承します。</p>
<p>つまり、コンストラクター内で<code>super</code>の呼び出しができます。</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  construct new(name) {&#10;    System.print("My name is " + name + ".")&#10;  }&#10;}&#10;&#10;class Pegasus is Unicorn {&#10;  construct new(name) {&#10;    super(name)&#10;  }&#10;}&#10;&#10;Pegasus.new("Fred") //&gt; My name is Fred&#10;</code></pre>
<h2>Super <a class="header-anchor" href="#super" name="super">#</a></h2>
<p><strong>TODO：ページによりよく組み込む。上でsuperに言及する前に、これを説明するべき。</strong></p>
<p>自分自身のメソッドを呼び出しつつ、<a href="/docs/wren/v0-4-0/ja/01-guide/10-classes/#inheritance">スーパークラス</a>の一つで定義したメソッドを使いたい場合があります。通常は、オーバーライドしたメソッドから、オーバーライド元のメソッドにアクセスしたいときに行います。</p>
<p>そのためには、メソッド呼び出しのレシーバーとして、特別な<code>super</code>キーワードを使えます。</p>
<pre class="snippet"><code>&#10;class Base {&#10;  method() {&#10;    System.print("base method")&#10;  }&#10;}&#10;&#10;class Derived is Base {&#10;  method() {&#10;    super.method() //&gt; base method&#10;  }&#10;}&#10;</code></pre>
<p>コンストラクター内では、メソッド名なしの<code>super</code>を使って、基底クラスのコンストラクターを呼び出すこともできます。</p>
<pre class="snippet"><code>&#10;class Base {&#10;  construct new(arg) {&#10;    System.print("base got " + arg)&#10;  }&#10;}&#10;&#10;class Derived is Base {&#10;  construct new() {&#10;    super("value") //&gt; base got value&#10;  }&#10;}&#10;</code></pre>
<h2>属性 <a class="header-anchor" href="#attributes" name="attributes">#</a></h2>
<p><small><strong>実験段階</strong>：小さな変更が加わる可能性があります</small></p>
<p>クラスや、クラス内のメソッドには、「メタ属性」を付けられます。</p>
<p>次のように書きます。</p>
<pre class="snippet"><code>&#10;#hidden = true&#10;class Example {}&#10;</code></pre>
<p>これらの属性はメタデータです。クラスについての任意の追加情報を注記し、保存する方法を提供し、必要に応じて実行時にアクセスできます。この情報は外部ツールでも利用でき、コードからツールへ追加のヒントや情報を提供できます。</p>
<p><small>この機能は導入されたばかりなので、<strong>注意してください</strong>。</small></p>
<p><strong>現時点では</strong>、組み込みの意味を持つ属性はありません。属性は、ユーザーが定義するメタデータです。ただし、慣例や、Wren自身による利用によって明確に定義される属性が出てくる可能性があり、この状態が続くとは限りません。</p>
<p>属性は、クラスまたはメソッドの定義の前に置き、<code>#</code>のハッシュ記号を使います。</p>
<p>次の形式を使えます。</p>
<ul>
<li><code>#key</code>だけ</li>
<li><code>#key = value</code></li>
<li><code>#group(with, multiple = true, keys = "value")</code></li>
</ul>
<p>属性の<em>キー</em>に使えるのは、<code>Name</code>だけです。これは、メソッド名、クラス名、変数名と同じ種類の名前で、Wrenの識別子の規則に従う識別子です。名前は、実行時にはStringの値になります。</p>
<p>属性の<em>値</em>には、<code>Name, String, Bool, Num</code>というリテラル値のいずれかを使えます。値には式を含められず、値だけを指定します。コンパイル時の評価はありません。</p>
<p>グループは複数行にまたがれます。メソッドには独自の属性があり、キーの重複も有効です。</p>
<pre class="snippet"><code>&#10;#key&#10;#key = value&#10;#group(&#10;  multiple,&#10;  lines = true,&#10;  lines = 0&#10;)&#10;class Example {&#10;  #test(skip = true, iterations = 32)&#10;  doStuff() {}&#10;}&#10;</code></pre>
<h3>実行時に属性へアクセスする <a class="header-anchor" href="#accessing-attributes-at-runtime" name="accessing-attributes-at-runtime">#</a></h3>
<p>既定では、属性はコンパイル時に除外して無視します。</p>
<p>属性を実行時に見えるようにするには、感嘆符を使って、実行時アクセスの対象として指定します。</p>
<pre class="snippet"><code>&#10;#doc = "not runtime data"&#10;#!runtimeAccess = true&#10;#!maxIterations = 16&#10;</code></pre>
<p>実行時の属性は、クラスに保存します。<code>YourClass.attributes</code>でアクセスできます。クラスに属性がない場合、または実行時アクセスの指定がない場合、そのクラスの<code>attributes</code>フィールドはnullになります。</p>
<p>クラスにクラス属性またはメソッド属性があれば、これは二つのゲッターを持つオブジェクトになります。</p>
<ul>
<li>クラス属性のための<code>YourClass.attributes.self</code></li>
<li>メソッド属性のための<code>YourClass.attributes.methods</code></li>
</ul>
<p>属性は、通常のWren Map内に、グループごとに保存します。グループに属さないキーでは、グループのキーとして<code>null</code>を使います。</p>
<p>キーの重複が許されるため、複数の値を保存する必要があり、値はリストに保存します。保存順は、定義した順です。</p>
<p>メソッド属性は、メソッドのシグネチャをキーとするマップに保存します。各メソッドには、上の構造に合う独自の属性があります。必要に応じて、メソッドのシグネチャの前に<code>static</code>または<code>foreign static</code>を付けます。</p>
<p>どのような形になるか、見てみましょう。</p>
<pre class="snippet"><code>&#10;// Example.attributes.self = &#10;// { &#10;//   null: { "key":[null] }, &#10;//   group: { "key":[value, 32, false] }&#10;// }&#10;&#10;#!key&#10;#ignored //compiled out&#10;#!group(key=value, key=32, key=false)&#10;class Example {&#10;  #!getter&#10;  getter {}&#10;&#10;  // { regular(_,_): { regular:[null] } }&#10;  #!regular&#10;  regular(arg0, arg1) {}&#10;&#10;  // { static other(): { isStatic:[true] } }&#10;  #!isStatic = true&#10;  static other()&#10;  &#10;  // { foreign static example(): { isForeignStatic:[32] } }&#10;  #!isForeignStatic=32&#10;  foreign static example()&#10;}&#10;</code></pre>
<p><br/><hr/><a class="right" href="/docs/wren/v0-4-0/ja/01-guide/12-concurrency/">並行処理 →</a><a href="/docs/wren/v0-4-0/ja/01-guide/11-functions/">← 関数</a></p>
</div>

