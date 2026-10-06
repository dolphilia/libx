---
title: "WrenからCを呼び出す"
documentId: "wren:embedding/calling-c-from-wren.html"
order: 18
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}]
---
<div class="wren-document">
<h1 id="page-title">WrenからCを呼び出す</h1>
<p>Wrenの世界の中にいるとき、外側のCの世界は「外部」です。VMへ外部の機能を持ち込みたい理由は、二つあります。</p>
<ul>
<li>Cで書いたコードを実行したい。</li>
<li>生のCデータを保存したい。</li>
</ul>
<p>Wrenはオブジェクト指向なので、振る舞いはメソッドに置きます。そのため、前者には<strong>外部メソッド</strong>があります。同様に、データはオブジェクトに置くので、後者には<strong>外部クラス</strong>を定義します。このページでは、前者の外部メソッドを扱います。<a href="/docs/wren/v0-4-0/en/01-guide/20-embedding-storing-c-data/">次のページ</a>では、外部クラスを説明します。</p>
<p>Wrenから見ると、外部メソッドは通常のメソッドと同じです。Wrenのクラスで定義し、名前とシグネチャを持ち、呼び出しは動的にディスパッチします。唯一の違いは、メソッドの<em>本体</em>をCで書くことです。</p>
<p>外部メソッドは、Wrenで次のように宣言します。</p>
<pre class="snippet"><code>&#10;class Math {&#10;  foreign static add(a, b)&#10;}&#10;</code></pre>
<p><code>foreign</code>キーワードは、メソッド<code>add()</code>を<code>Math</code>で宣言しますが、Cで実装することを、Wrenへ伝えます。静的メソッドもインスタンスメソッドも、外部メソッドにできます。</p>
<h2>外部メソッドの束縛 <a class="header-anchor" href="#binding-foreign-methods" name="binding-foreign-methods">#</a></h2>
<p>外部メソッドを呼び出すとき、Wrenは、どのC関数を実行するか知る必要があります。この処理を<em>束縛</em>と呼びます。VMは、必要になったときに束縛します。外部メソッドを宣言するクラスを実行する時点、つまり<code>class</code>文自身を評価する時点で、VMはホストアプリケーションに、その外部メソッドで使うC関数を問い合わせます。</p>
<p>この処理には、最初に<a href="/docs/wren/v0-4-0/en/01-guide/21-embedding-configuring-the-vm/">VMを設定</a>するときに渡す、<code>bindForeignMethodFn</code>コールバックを使います。このコールバックは、外部メソッド自身ではありません。アプリが外部メソッドを<em>探す</em>ための、束縛用の関数です。</p>
<p>そのシグネチャは、次のとおりです。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenForeignMethodFn bindForeignMethodFn(&#10;    WrenVM* vm,&#10;    const char* module,&#10;    const char* className,&#10;    bool isStatic,&#10;    const char* signature);&#10;</code></pre>
<p>外部メソッドを最初に宣言するたび、VMはこのコールバックを呼び出します。クラス宣言を含むモジュール、メソッドを持つクラスの名前、メソッドのシグネチャ、静的メソッドかどうかを渡します。上の例なら、次のような情報を渡します。</p>
<pre class="snippet" data-lang="c"><code>&#10;bindForeignMethodFn(vm, "main", "Math", true, "add(_,_)");&#10;</code></pre>
<p>VMを設定するとき、指定した外部メソッドに適した関数を探し、そのポインターを返すCのコールバックを渡します。例えば、次のようにします。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenForeignMethodFn bindForeignMethod(&#10;    WrenVM* vm,&#10;    const char* module,&#10;    const char* className,&#10;    bool isStatic,&#10;    const char* signature)&#10;{&#10;  if (strcmp(module, "main") == 0)&#10;  {&#10;    if (strcmp(className, "Math") == 0)&#10;    {&#10;      if (isStatic &amp;&amp; strcmp(signature, "add(_,_)") == 0)&#10;      {&#10;        return mathAdd; // C function for Math.add(_,_).&#10;      }&#10;      // Other foreign methods on Math...&#10;    }&#10;    // Other classes in main...&#10;  }&#10;  // Other modules...&#10;}&#10;</code></pre>
<p>この実装はかなり面倒ですが、考え方は分かるでしょう。ホストアプリケーションでは、もっと気の利いた方法を使ってかまいません。</p>
<p>重要なのは、その外部メソッドに使うC関数のポインターを返すことです。Wrenがこの束縛を行うのは、クラス定義を最初に実行したときの<em>一度だけ</em>です。その後は、返された関数ポインターを保持し、そのメソッドに対応付けます。これにより、外部メソッドの<em>呼び出し</em>が速くなります。</p>
<h2>外部メソッドの実装 <a class="header-anchor" href="#implementing-a-foreign-method" name="implementing-a-foreign-method">#</a></h2>
<p>外部メソッドのためのC関数は、すべて同じシグネチャを持ちます。</p>
<pre class="snippet" data-lang="c"><code>&#10;void foreignMethod(WrenVM* vm);&#10;</code></pre>
<p>Wrenからの引数は、Cの引数として渡すわけではなく、メソッドの戻り値も、Cの戻り値ではありません。代わりに、お察しのとおり、<a href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/">スロット配列</a>を経由します。</p>
<p>Wrenから外部メソッドを呼び出すと、VMは、レシーバーと引数を使ってスロット配列を準備します。CからWrenを呼び出す場合と同じく、レシーバーオブジェクトはスロット0に置き、引数は、その後の連続したスロットに置きます。</p>
<p>スロットAPIで引数を読み取り、Cで必要な処理を行います。外部メソッドから値を返したいなら、スロット0へ入れます。次のように行います。</p>
<pre class="snippet" data-lang="c"><code>&#10;void mathAdd(WrenVM* vm)&#10;{&#10;  double a = wrenGetSlotDouble(vm, 1);&#10;  double b = wrenGetSlotDouble(vm, 2);&#10;  wrenSetSlotDouble(vm, 0, a + b);&#10;}&#10;</code></pre>
<p>外部メソッドの実行中、VMは完全に中断しています。外部メソッドが戻るまで、ほかのファイバーは実行しません。外部メソッドの中から<code>wrenCall()</code>や<code>wrenInterpret()</code>を呼んでVMを再開しようと<em>してはいけません</em>。VMは再入可能ではありません。</p>
<p>外部の振る舞いは、これで扱えます。それでは、外部の<em>状態</em>はどうするのでしょうか？ そのためには、外部<em>クラス</em>が必要です。</p>
<p><a class="right" href="/docs/wren/v0-4-0/en/01-guide/20-embedding-storing-c-data/">Cデータの保存 →</a><a href="/docs/wren/v0-4-0/en/01-guide/19-embedding-calling-wren-from-c/">← CからWrenを呼び出す</a></p>
</div>

