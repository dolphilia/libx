---
title: "Classes"
documentId: "wren:classes.html"
order: 10
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Classes</h1>
<p>Every value in Wren is an object, and every object is an instance of a class.
Even <code>true</code> and <code>false</code> are full-featured objects&mdash;instances of the
<a href="/docs/wren/v0-4-0/en/02-reference/01-modules-core-bool/">Bool</a> class.</p>
<p>Classes define an objects <em>behavior</em> and <em>state</em>. Behavior is defined by
<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/"><em>methods</em></a> which live in the class. Every object of the same
class supports the same methods. State is defined in <em>fields</em>, whose values are
stored in each instance.</p>
<h2>Defining a class <a href="#defining-a-class" name="defining-a-class" class="header-anchor">#</a></h2>
<p>Classes are created using the <code>class</code> keyword, unsurprisingly:</p>
<pre class="snippet"><code>&#10;class Unicorn {}&#10;</code></pre>

<p>This creates a class named <code>Unicorn</code> with no methods or fields.</p>
<h2>Methods <a href="#methods" name="methods" class="header-anchor">#</a></h2>
<p>To let our unicorn do stuff, we need to give it methods.</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  prance() {&#10;    System.print(&quot;The unicorn prances in a fancy manner!&quot;)&#10;  }&#10;}&#10;</code></pre>

<p>This defines a <code>prance()</code> method that takes no arguments. To add parameters, put
their names inside the parentheses:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  prance(where, when) {&#10;    System.print(&quot;The unicorn prances in %(where) at %(when).&quot;)&#10;  }&#10;}&#10;</code></pre>

<p>Since the number of parameters is part of a method&rsquo;s <a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#signature">signature</a> a class can
define multiple methods with the same name:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  prance() {&#10;    System.print(&quot;The unicorn prances in a fancy manner!&quot;)&#10;  }&#10;&#10;  prance(where) {&#10;    System.print(&quot;The unicorn prances in %(where).&quot;)&#10;  }&#10;&#10;  prance(where, when) {&#10;    System.print(&quot;The unicorn prances in %(where) at %(when).&quot;)&#10;  }&#10;}&#10;</code></pre>

<p>It&rsquo;s often natural to have the same conceptual operation work with different
sets of arguments. In other languages, you&rsquo;d define a single method for the
operation and have to check for missing optional arguments. In Wren, they are
different methods that you implement separately.</p>
<p>In addition to named methods with parameter lists, Wren has a bunch of other
different syntaxes for methods. Your classes can define all of them.</p>
<h3>Getters <a href="#getters" name="getters" class="header-anchor">#</a></h3>
<p>A getter leaves off the parameter list and the parentheses:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  // Unicorns are always fancy.&#10;  isFancy { true }&#10;}&#10;</code></pre>

<h3>Setters <a href="#setters" name="setters" class="header-anchor">#</a></h3>
<p>A setter has <code>=</code> after the name, followed by a single parenthesized parameter:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  rider=(value) {&#10;    System.print(&quot;I am being ridden by %(value).&quot;)&#10;  }&#10;}&#10;</code></pre>

<p>By convention, the parameter is usually named <code>value</code> but you can call it
whatever makes your heart flutter.</p>
<h3>Operators <a href="#operators" name="operators" class="header-anchor">#</a></h3>
<p>Prefix operators, like getters, have no parameter list:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  - {&#10;    System.print(&quot;Negating a unicorn is weird.&quot;)&#10;  }&#10;}&#10;</code></pre>

<p>Infix operators, like setters, have a single parenthesized parameter for the
right-hand operand:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  -(other) {&#10;    System.print(&quot;Subtracting %(other) from a unicorn is weird.&quot;)&#10;  }&#10;}&#10;</code></pre>

<p>A subscript operator puts the parameters inside square brackets and can have
more than one:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  [index] {&#10;    System.print(&quot;Unicorns are not lists!&quot;)&#10;  }&#10;&#10;  [x, y] {&#10;    System.print(&quot;Unicorns are not matrices either!&quot;)&#10;  }&#10;}&#10;</code></pre>

<p>Unlike with named methods, you can&rsquo;t define a subscript operator with an empty
parameter list.</p>
<p>As the name implies, a subscript setter looks like a combination of a subscript
operator and a setter:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  [index]=(value) {&#10;    System.print(&quot;You can&#x27;t stuff %(value) into me at %(index)!&quot;)&#10;  }&#10;}&#10;</code></pre>

<h2>Method Scope <a href="#method-scope" name="method-scope" class="header-anchor">#</a></h2>
<p>Up to this point, &ldquo;<a href="/docs/wren/v0-4-0/en/01-guide/09-variables/#scope">scope</a>&rdquo; has been used to talk exclusively about
<a href="/docs/wren/v0-4-0/en/01-guide/09-variables/">variables</a>. In a procedural language like C, or a functional one like Scheme,
that&rsquo;s the only kind of scope there is. But object-oriented languages like Wren
introduce another kind of scope: <em>object scope</em>. It contains the methods that
are available on an object. When you write:</p>
<pre class="snippet"><code>&#10;unicorn.isFancy&#10;</code></pre>

<p>You&rsquo;re saying &ldquo;look up the method <code>isFancy</code> in the scope of the object
<code>unicorn</code>&rdquo;. In this case, the fact that you want to look up a <em>method</em>
<code>isFancy</code> and not a <em>variable</em> <code>isFancy</code> is explicit. That&rsquo;s what <code>.</code> does and
the object to the left of the period is the object you want to look up the
method on.</p>
<h3><code>this</code> <a href="#this" name="this" class="header-anchor">#</a></h3>
<p>Things get more interesting when you&rsquo;re inside the body of a method. When the
method is called on some object and the body is being executed, you often need
to access that object itself. You can do that using <code>this</code>.</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  name { &quot;Francis&quot; }&#10;&#10;  printName() {&#10;    System.print(this.name) //&gt; Francis&#10;  }&#10;}&#10;</code></pre>

<p>The <code>this</code> keyword works sort of like a variable, but has special behavior. It
always refers to the instance whose method is currently being executed. This
lets you invoke methods on &ldquo;yourself&rdquo;.</p>
<p>It&rsquo;s an error to refer to <code>this</code> outside of a method. However, it&rsquo;s perfectly
fine to use it inside a <a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">function</a> declared <em>inside</em> a method. When you do,
<code>this</code> still refers to the instance whose <em>method</em> is being called:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  name { &quot;Francis&quot; }&#10;&#10;  printNameThrice() {&#10;    (1..3).each {&#10;      // Use &quot;this&quot; inside the function passed to each().&#10;      System.print(this.name) //&gt; Francis&#10;    } //&gt; Francis&#10;  } //&gt; Francis&#10;}&#10;</code></pre>

<p>This is unlike Lua and JavaScript which can &ldquo;forget&rdquo; <code>this</code> when you create a
callback inside a method. Wren does what you want here and retains the
reference to the original object.</p>
<p>(In technical terms, a function&rsquo;s closure includes <code>this</code>. Wren can do this
because it makes a distinction between methods and functions.)</p>
<h3>Implicit <code>this</code> <a href="#implicit-this" name="implicit-this" class="header-anchor">#</a></h3>
<p>Using <code>this.</code> every time you want to call a method on yourself works, but it&rsquo;s
tedious and verbose, which is why some languages don&rsquo;t require it. You can do a
&ldquo;self send&rdquo; by calling a method (or getter or setter) without any explicit
receiver:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  name { &quot;Francis&quot; }&#10;&#10;  printName() {&#10;    System.print(name) //&gt; Francis&#10;  }&#10;}&#10;</code></pre>

<p>Code like this gets tricky when there is also a variable outside of the class
with the same name. Consider:</p>
<pre class="snippet"><code>&#10;var name = &quot;variable&quot;&#10;&#10;class Unicorn {&#10;  name { &quot;Francis&quot; }&#10;&#10;  printName() {&#10;    System.print(name) // ???&#10;  }&#10;}&#10;</code></pre>

<p>Should <code>printName()</code> print &ldquo;variable&rdquo; or &ldquo;Francis&rdquo;? A method body has a foot in
each of two worlds. It is surrounded by the lexical scope where it&rsquo;s defined in
the program, but it also has the object scope of the methods on <code>this</code>.</p>
<p>Which scope wins? Every language has to decide how to handle this and there
is a surprising plethora of approaches. Wren&rsquo;s approach to resolving a name
inside a method works like this:</p>
<ol>
<li>If there is a local variable inside the method with that name, that wins.</li>
<li>Else, if the name starts with a lowercase letter, treat it like a method on
    <code>this</code>.</li>
<li>Otherwise, look for a variable with that name in the surrounding scope.</li>
</ol>
<p>So, in the above example, we hit case #2 and it prints &ldquo;Francis&rdquo;. Distinguishing
self sends from outer variables based on the <em>case</em> of the first letter in the
name probably seems weird but it works surprisingly well. Method names are
lowercase in Wren. Class names are capitalized.</p>
<p>Most of the time, when you&rsquo;re in a method and want to access a name from outside
of the class, it&rsquo;s usually the name of some other class. This rule makes that
work.</p>
<p>Here&rsquo;s an example that shows all three cases:</p>
<pre class="snippet"><code>&#10;var shadowed = &quot;surrounding&quot;&#10;var lowercase = &quot;surrounding&quot;&#10;var Capitalized = &quot;surrounding&quot;&#10;&#10;class Scope {&#10;  shadowed { &quot;object&quot; }&#10;  lowercase { &quot;object&quot; }&#10;  Capitalized { &quot;object&quot; }&#10;&#10;  test() {&#10;    var shadowed = &quot;local&quot;&#10;&#10;    System.print(shadowed) //&gt; local&#10;    System.print(lowercase) //&gt; object&#10;    System.print(Capitalized) //&gt; surrounding&#10;  }&#10;}&#10;</code></pre>

<p>It&rsquo;s a bit of a strange rule, but Ruby works more or less the same way.</p>
<h2>Constructors <a href="#constructors" name="constructors" class="header-anchor">#</a></h2>
<p>We&rsquo;ve seen how to define kinds of objects and how to declare methods on them.
Our unicorns can prance around, but we don&rsquo;t actually <em>have</em> any unicorns to do
it. To create <em>instances</em> of a class, we need a <em>constructor</em>. You define one
like so:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  construct new(name, color) {&#10;    System.print(&quot;My name is &quot; + name + &quot; and I am &quot; + color + &quot;.&quot;)&#10;  }&#10;}&#10;</code></pre>

<p>The <code>construct</code> keyword says we&rsquo;re defining a constructor, and <code>new</code> is its
name. In Wren, all constructors have names. The word &ldquo;new&rdquo; isn&rsquo;t special to
Wren, it&rsquo;s just a common constructor name.</p>
<p>To make a unicorn now, we call the constructor method on the class itself:</p>
<pre class="snippet"><code>&#10;var fred = Unicorn.new(&quot;Fred&quot;, &quot;palomino&quot;)&#10;</code></pre>

<p>Giving constructors names is handy because it means you can have more than one,
and each can clarify how it creates the instance:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  construct brown(name) {&#10;    System.print(&quot;My name is &quot; + name + &quot; and I am brown.&quot;)&#10;  }&#10;}&#10;&#10;var dave = Unicorn.brown(&quot;Dave&quot;)&#10;</code></pre>

<p>Note that we have to declare a constructor because, unlike some other
languages, Wren doesn&rsquo;t give you a default one. This is useful because some
classes aren&rsquo;t designed to be constructed. If you have an abstract base class
that just contains methods to be inherited by other classes, it doesn&rsquo;t need
and won&rsquo;t have a constructor.</p>
<p>Like other methods, constructors can obviously have arguments, and can be
overloaded by <a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#signature">arity</a>. A constructor <em>must</em> be a named method with
a (possibly empty) argument list. Operators, getters, and setters cannot be
constructors.</p>
<p>A constructor returns the instance of the class being created, even if you 
don&rsquo;t explicitly use <code>return</code>. It is valid to use <code>return</code> inside of a 
constructor, but it is an error to have an expression after the return.
That rule applies to <code>return this</code> as well, return handles that implicitly inside
a constructor, so just <code>return</code> is enough.</p>
<pre class="snippet"><code>&#10;return          //&gt; valid, returns &#x27;this&#x27;&#10;&#10;return variable //&gt; invalid&#10;return null     //&gt; invalid&#10;return this     //&gt; also invalid&#10;</code></pre>

<p>A constructor is actually a pair of methods. You get a method on the class:</p>
<pre class="snippet"><code>&#10;Unicorn.brown(&quot;Dave&quot;)&#10;</code></pre>

<p>That creates the new instance, then it invokes the <em>initializer</em> on that
instance. This is where the constructor body you defined gets run.</p>
<p>This distinction is important because it means inside the body of the
constructor, you can access <code>this</code>, assign <a href="#fields">fields</a>, call superclass
constructors, etc.</p>
<h2>Fields <a href="#fields" name="fields" class="header-anchor">#</a></h2>
<p>All state stored in instances is stored in <em>fields</em>. Each field has a name
that starts with an underscore.</p>
<pre class="snippet"><code>&#10;class Rectangle {&#10;  area { _width * _height }&#10;&#10;  // Other stuff...&#10;}&#10;</code></pre>

<p>Here, <code>_width</code> and <code>_height</code> in the <code>area</code> <a href="/docs/wren/v0-4-0/en/01-guide/10-classes/#methods">getter</a> refer
to fields on the rectangle instance. You can think of them like <code>this.width</code>
and <code>this.height</code> in other languages.</p>
<p>When a field name appears, Wren looks for the nearest enclosing class and looks
up the field on the instance of that class. Field names cannot be used outside
of an instance method. They <em>can</em> be used inside a <a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">function</a>
in a method. Wren will look outside any nested functions until it finds an
enclosing method.</p>
<p>Unlike <a href="/docs/wren/v0-4-0/en/01-guide/09-variables/">variables</a>, fields are implicitly declared by simply
assigning to them. If you access a field before it has been initialized, its
value is <code>null</code>.</p>
<h3>Encapsulation <a href="#encapsulation" name="encapsulation" class="header-anchor">#</a></h3>
<p>All fields are <em>private</em> in Wren&mdash;an object&rsquo;s fields can only be directly
accessed from within methods defined on the object&rsquo;s class. </p>
<p>In short, if you want to make a property of an object visible,
<strong>you need to define a getter to expose it</strong>:</p>
<pre class="snippet"><code>&#10;class Rectangle {&#10;  width { _width }&#10;  height { _height }&#10;&#10;  // ...&#10;}&#10;</code></pre>

<p>To allow outside code to modify the field,
<strong>you need to provide setters to provide access</strong>:</p>
<pre class="snippet"><code>&#10;class Rectangle {&#10;  width=(value) { _width = value }&#10;  height=(value) { _height = value }&#10;}&#10;</code></pre>

<p>This might be different from what you&rsquo;re used to, so here are two important facts:</p>
<ul>
<li>You can&rsquo;t access fields from a base class.</li>
<li>You can&rsquo;t access fields on another instance of your own class.</li>
</ul>
<p>Here is an example in code:</p>
<pre class="snippet"><code>&#10;class Shape {&#10;  construct new() {&#10;    _shape = &quot;none&quot;&#10;  }&#10;}&#10;&#10;class Rectangle is Shape {&#10;  construct new() {&#10;    //This will print null!&#10;    //_shape from the parent class is private,&#10;    //we are reading `_shape` from `this`,&#10;    //which has not been set, so returns null.&#10;    System.print(&quot;I am a %(_shape)&quot;)&#10;&#10;    //a local variable, all variables are private&#10;    _width = 10&#10;    var other = Rectangle.new()&#10;&#10;    //other._width is not accessible from here,&#10;    //even though we are also a rectangle. The field&#10;    //is private, and other._width is invalid syntax!&#10;  }&#10;}&#10;...&#10;</code></pre>

<p>One thing we&rsquo;ve learned in the past forty years of software engineering is that
encapsulating state tends to make code easier to maintain, so Wren defaults to
keeping your object&rsquo;s state pretty tightly bundled up. Don&rsquo;t feel that you have
to or even should define getters or setters for most of your object&rsquo;s fields.</p>
<h2>Metaclasses and static members <a href="#metaclasses-and-static-members" name="metaclasses-and-static-members" class="header-anchor">#</a></h2>
<p><strong>TODO</strong></p>
<h3>Static fields <a href="#static-fields" name="static-fields" class="header-anchor">#</a></h3>
<p>A name that starts with <em>two</em> underscores is a <em>static</em> field. They work
similar to <a href="#fields">fields</a> except the data is stored on the class itself, and
not the instance. They can be used in <em>both</em> instance and static methods.</p>
<pre class="snippet"><code>&#10;class Foo {&#10;  construct new() {}&#10;&#10;  static setFromStatic(a) { __a = a }&#10;  setFromInstance(a) { __a = a }&#10;&#10;  static printFromStatic() {&#10;    System.print(__a)&#10;  }&#10;&#10;  printFromInstance() {&#10;    System.print(__a)&#10;  }&#10;}&#10;</code></pre>

<p>Just like instance fields, static fields are initially <code>null</code>:</p>
<pre class="snippet"><code>&#10;Foo.printFromStatic() //&gt; null&#10;</code></pre>

<p>They can be used from static methods:</p>
<pre class="snippet"><code>&#10;Foo.setFromStatic(&quot;first&quot;)&#10;Foo.printFromStatic() //&gt; first&#10;</code></pre>

<p>And also instance methods. When you do so, there is still only one static field
shared among all instances of the class:</p>
<pre class="snippet"><code>&#10;var foo1 = Foo.new()&#10;var foo2 = Foo.new()&#10;&#10;foo1.setFromInstance(&quot;second&quot;)&#10;foo2.printFromInstance() //&gt; second&#10;</code></pre>

<h2>Inheritance <a href="#inheritance" name="inheritance" class="header-anchor">#</a></h2>
<p>A class can inherit from a &ldquo;parent&rdquo; or <em>superclass</em>. When you invoke a method
on an object of some class, if it can&rsquo;t be found, it walks up the chain of
superclasses looking for it there.</p>
<p>By default, any new class inherits from Object, which is the superclass from
which all other classes ultimately descend. You can specify a different parent
class using <code>is</code> when you declare the class:</p>
<pre class="snippet"><code>&#10;class Pegasus is Unicorn {}&#10;</code></pre>

<p>This declares a new class Pegasus that inherits from Unicorn.</p>
<p>Note that you should not create classes that inherit from the built-in types
(Bool, Num, String, Range, List). The built-in types expect their internal bit
representation to be very specific and get horribly confused when you invoke one
of the inherited built-in methods on the derived type.</p>
<p>The metaclass hierarchy does <em>not</em> parallel the regular class hierarchy. So, if
Pegasus inherits from Unicorn, Pegasus&rsquo;s metaclass does not inherit from
Unicorn&rsquo;s metaclass. In more prosaic terms, this means that static methods are
not inherited.</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  // Unicorns cannot fly. :(&#10;  static canFly { false }&#10;}&#10;&#10;class Pegasus is Unicorn {}&#10;&#10;Pegasus.canFly //! Static methods are not inherited.&#10;</code></pre>

<p>This also means constructors are not inherited:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  construct new(name) {&#10;    System.print(&quot;My name is &quot; + name + &quot;.&quot;)&#10;  }&#10;}&#10;&#10;class Pegasus is Unicorn {}&#10;&#10;Pegasus.new(&quot;Fred&quot;) //! Pegasus does not define new().&#10;</code></pre>

<p>Each class gets to control how it may be constructed independently of its base
classes. However, constructor <em>initializers</em> are inherited since those are
instance methods on the new object.</p>
<p>This means you can do <code>super</code> calls inside a constructor:</p>
<pre class="snippet"><code>&#10;class Unicorn {&#10;  construct new(name) {&#10;    System.print(&quot;My name is &quot; + name + &quot;.&quot;)&#10;  }&#10;}&#10;&#10;class Pegasus is Unicorn {&#10;  construct new(name) {&#10;    super(name)&#10;  }&#10;}&#10;&#10;Pegasus.new(&quot;Fred&quot;) //&gt; My name is Fred&#10;</code></pre>

<h2>Super <a href="#super" name="super" class="header-anchor">#</a></h2>
<p><strong>TODO: Integrate better into page. Should explain this before mentioning
super above.</strong></p>
<p>Sometimes you want to invoke a method on yourself, but using methods defined in
one of your <a href="/docs/wren/v0-4-0/en/01-guide/10-classes/#inheritance">superclasses</a>. You typically do this in
an overridden method when you want to access the original method being
overridden.</p>
<p>To do that, you can use the special <code>super</code> keyword as the receiver in a method
call:</p>
<pre class="snippet"><code>&#10;class Base {&#10;  method() {&#10;    System.print(&quot;base method&quot;)&#10;  }&#10;}&#10;&#10;class Derived is Base {&#10;  method() {&#10;    super.method() //&gt; base method&#10;  }&#10;}&#10;</code></pre>

<p>You can also use <code>super</code> without a method name inside a constructor to invoke a
base class constructor:</p>
<pre class="snippet"><code>&#10;class Base {&#10;  construct new(arg) {&#10;    System.print(&quot;base got &quot; + arg)&#10;  }&#10;}&#10;&#10;class Derived is Base {&#10;  construct new() {&#10;    super(&quot;value&quot;) //&gt; base got value&#10;  }&#10;}&#10;</code></pre>

<h2>Attributes <a href="#attributes" name="attributes" class="header-anchor">#</a></h2>
<p><small><strong>experimental stage</strong>: subject to minor changes</small></p>
<p>A class and methods within a class can be tagged with &lsquo;meta attributes&rsquo;.</p>
<p>Like this:</p>
<pre class="snippet"><code>&#10;#hidden = true&#10;class Example {}&#10;</code></pre>

<p>These attributes are metadata, they give you a way to annotate and store
any additional information about a class, which you can optionally access at runtime.
This information can also be used by external tools, to provide additional
hints and information from code to the tool.</p>
<p><small>
Since this feature has just been introduced, <strong>take note</strong>.</p>
<p><strong>Currently</strong> there are no attributes with a built-in meaning. 
Attributes are user-defined metadata. This may not remain 
true as some may become well defined through convention or potentially
through use by Wren itself. 
</small></p>
<p>Attributes are placed before a class or method definition,
and use the <code>#</code> hash/pound symbol. </p>
<p>They can be </p>
<ul>
<li>a <code>#key</code> on it&rsquo;s own</li>
<li>a <code>#key = value</code></li>
<li>a <code>#group(with, multiple = true, keys = "value")</code></li>
</ul>
<p>An attribute <em>key</em> can only be a <code>Name</code>. This is the same type of name 
as a method name, a class name or variable name, an identifier that matches
the Wren identifier rules. A name results in a String value at runtime.</p>
<p>An attribute <em>value</em> can be any of these literal values: <code>Name, String, Bool, Num</code>.
Values cannot contain expressions, just a value, there is no compile time 
evaluation.</p>
<p>Groups can span multiple lines, methods have their own attributes, and duplicate
keys are valid.</p>
<pre class="snippet"><code>&#10;#key&#10;#key = value&#10;#group(&#10;  multiple,&#10;  lines = true,&#10;  lines = 0&#10;)&#10;class Example {&#10;  #test(skip = true, iterations = 32)&#10;  doStuff() {}&#10;}&#10;</code></pre>

<h3>Accessing attributes at runtime <a href="#accessing-attributes-at-runtime" name="accessing-attributes-at-runtime" class="header-anchor">#</a></h3>
<p>By default, attributes are compiled out and ignored.</p>
<p>For an attribute to be visible at runtime, mark it for runtime
access using an exclamation:</p>
<pre class="snippet"><code>&#10;#doc = &quot;not runtime data&quot;&#10;#!runtimeAccess = true&#10;#!maxIterations = 16&#10;</code></pre>

<p>Attributes at runtime are stored on the class. You can access them via 
<code>YourClass.attributes</code>. The <code>attributes</code> field on a class will 
be null if a class has no attributes or if it&rsquo;s attributes aren&rsquo;t marked.</p>
<p>If the class contains class or method attributes, it will be an object with
two getters:</p>
<ul>
<li><code>YourClass.attributes.self</code> for the class attributes</li>
<li><code>YourClass.attributes.methods</code> for the method attributes</li>
</ul>
<p>Attributes are stored by group in a regular Wren Map. 
Keys that are not grouped, use <code>null</code> as the group key.</p>
<p>Values are stored in a list, since duplicate keys are allowed, multiple
values need to be stored. They&rsquo;re stored in order of definition.</p>
<p>Method attributes are stored in a map by method signature, and each method
has it&rsquo;s own attributes that match the above structure. The method signature
is prefixed by <code>static</code> or <code>foreign static</code> as needed.</p>
<p>Let&rsquo;s see what that looks like:</p>
<pre class="snippet"><code>&#10;// Example.attributes.self = &#10;// { &#10;//   null: { &quot;key&quot;:[null] }, &#10;//   group: { &quot;key&quot;:[value, 32, false] }&#10;// }&#10;&#10;#!key&#10;#ignored //compiled out&#10;#!group(key=value, key=32, key=false)&#10;class Example {&#10;  #!getter&#10;  getter {}&#10;&#10;  // { regular(_,_): { regular:[null] } }&#10;  #!regular&#10;  regular(arg0, arg1) {}&#10;&#10;  // { static other(): { isStatic:[true] } }&#10;  #!isStatic = true&#10;  static other()&#10;  &#10;  // { foreign static example(): { isForeignStatic:[32] } }&#10;  #!isForeignStatic=32&#10;  foreign static example()&#10;}&#10;</code></pre>

<p><br><hr>
<a class="right" href="/docs/wren/v0-4-0/en/01-guide/12-concurrency/">Concurrency &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">&larr; Functions</a></p>
</div>
