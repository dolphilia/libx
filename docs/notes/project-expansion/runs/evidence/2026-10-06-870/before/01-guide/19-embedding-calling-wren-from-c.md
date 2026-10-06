---
title: "CからWrenを呼び出す"
documentId: "wren:embedding/calling-wren-from-c.html"
order: 19
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}]
---
<div class="wren-document">
<h1 id="page-title">CからWrenを呼び出す</h1>
<p>Cからは、<code>wrenInterpret()</code>を呼び出してWrenに処理を指示できますが、VMを動かす最適な方法とは限りません。まず、遅いという問題があります。渡したソースコードの文字列を解析し、コンパイルする必要があります。Wrenのコンパイラーはかなり速いものの、それでも相応の処理が必要です。</p>
<p>通信の方法としても効率的ではありません。引数をソースコード文字列内のリテラルへ変換するような扱いづらい方法を使わない限り、Wrenへ引数を渡せません。また、結果の値を受け取ることもできません。</p>
<p><code>wrenInterpret()</code>は、VMへコードを読み込むのには適していますが、すでに読み込んだコードを実行する最適な方法ではありません。必要なのは、コンパイル済みのコードのまとまりを呼び出すことです。Wrenはオブジェクト指向なので、「コードのまとまり」は、<a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">関数</a>ではなく、<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/">メソッド</a>を意味します。</p>
<p>このためのC APIは<code>wrenCall()</code>です。CからWrenのメソッドを呼び出すには、いくつかのものが必要です。</p>
<ul>
<li><p><strong>呼び出すメソッド。</strong>Wrenは動的型付けなので、名前で探します。さらに、引数の個数によるオーバーロードができるため、実際には完全な<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#signature">シグネチャ</a>が必要です。</p></li>
<li><p><strong>メソッドを呼び出す対象のレシーバーオブジェクト。</strong>実際に呼び出すメソッドは、レシーバーのクラスが決めます。</p></li>
<li><p><strong>メソッドへ渡す引数。</strong></p></li>
</ul>
<p>これらを一つずつ説明します。</p>
<h3>メソッドハンドルの取得 <a class="header-anchor" href="#getting-a-method-handle" name="getting-a-method-handle">#</a></h3>
<p>次のようなWrenコードを実行すると、</p>
<pre class="snippet"><code>&#10;object.someMethod(1, 2, 3)&#10;</code></pre>
<p>実行時には、VMは<code>object</code>のクラスを調べ、シグネチャが<code>someMethod(_,_,_)</code>のメソッドを探す必要があります。メソッドを呼び出すたびに、少なくともシグネチャをハッシュ化するような文字列の操作を行っているように聞こえます。多くの動的言語は、そのように動作します。</p>
<p>しかし、想像できるとおり、それはかなり遅くなります。代わりに、Wrenは、その処理を可能な限りコンパイル時に行います。上のコードをバイトコードへコンパイルするとき、メソッドのシグネチャを、そのメソッドを一意に識別する数値である<em>メソッドシンボル</em>へ変換します。この処理の中で、シグネチャを文字列として扱う必要があるのは、ここだけです。</p>
<p>実行時には、VMはレシーバーのクラスのメソッドテーブルで、メソッドの<em>シンボル</em>を探すだけです。実際、現在の実装では、シンボルは単なる、そのテーブルの配列インデックスです。これが、Wrenの<a href="/docs/wren/v0-4-0/en/01-guide/22-performance/">メソッド呼び出しが高速な理由</a>です。</p>
<p>Cからのメソッド呼び出しで、同じ速度の利点が得られなければ、残念です。これを実現するため、メソッド呼び出しの処理を二段階に分けます。まず、「コンパイル済み」のメソッドシグネチャを表すハンドルを作成します。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenHandle* wrenMakeCallHandle(WrenVM* vm, const char* signature);&#10;</code></pre>
<p>これは、文字列のメソッドシグネチャを受け取り、コンパイル済みのメソッドシンボルを表す不透明なハンドルを返します。これで、レシーバーと引数を指定し、特定のメソッドを非常に速く呼び出すための、<em>再利用可能な</em>ハンドルが得られました。</p>
<p>これは通常のWrenHandleなので、必要な限り保持できます。通常は、アプリケーションの性能が重要なループの外で一度だけ呼び出し、必要な間、再利用します。不要になったときに<code>wrenReleaseHandle()</code>を呼び出して解放するのは、利用者の責任です。</p>
<h2>レシーバーの準備 <a class="header-anchor" href="#setting-up-a-receiver" name="setting-up-a-receiver">#</a></h2>
<p>メソッドは得られましたが、誰を対象に呼び出すのでしょうか？ レシーバーが必要です。<a href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/">前の節</a>を読めば予想できるように、スロットに保存してWrenへ渡します。特に、<strong>メソッド呼び出しのレシーバーは、スロット0へ入れます。</strong></p>
<p>そのスロットに保存した、どんなオブジェクトでもレシーバーとして使えます。必要なら、数値を保存して、その数値の<code>+</code>を呼び出すこともできます。</p>
<p>CからWrenのコードを呼び出すためにレシーバーが必要なのは、奇妙に感じるかもしれません。Cは手続き型なので、Wrenの単独の<em>関数</em>を呼びたいと思うのは自然です。しかし、Wrenは手続き型ではありません。特定のオブジェクトへ論理的に結び付かない、実行可能な操作を定義したいなら、適したクラスに静的メソッドを定義するのが自然です。</p>
<p>例えば、ゲームエンジンを作っているとします。Cから、毎フレーム、すべてのエンティティーを更新するよう指示したいとします。エンティティーのリストはWren内で管理するため、C側には、<code>update(_)</code>を呼び出す明らかな対象オブジェクトがありません。そこで、静的メソッドにします。</p>
<pre class="snippet"><code>&#10;class GameEngine {&#10;  static update(elapsedTime) {&#10;    // ...&#10;  }&#10;}&#10;</code></pre>
<p>CからWrenのメソッドを呼び出すときは、静的メソッドを呼ぶことがよくあります。その場合も、レシーバーは必要です。ただし、レシーバーは<em>クラス自身</em>です。Wrenのクラスは第一級のオブジェクトであり、名前付きクラスを定義する際には、実際には、そのクラス名の変数を宣言し、クラスオブジェクトへの参照を保存しています。</p>
<p>そのクラスをトップレベルで宣言したとすれば、C APIには、それを<a href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/#looking-up-variables">探す方法があります</a>。上のクラスのハンドルを、次のように取得できます。</p>
<pre class="snippet" data-lang="c"><code>&#10;// Load the class into slot 0.&#10;wrenEnsureSlots(vm, 1);&#10;wrenGetVariable(vm, "main", "GameEngine", 0);&#10;</code></pre>
<p><code>update()</code>を呼び出すたびに、これを行うこともできます。しかし、毎回「GameEngine」を名前で探すため、やはり少し遅くなります。速い方法は、クラスのハンドルを一度だけ作り、毎回使うことです。</p>
<pre class="snippet" data-lang="c"><code>&#10;// Load the class into slot 0.&#10;wrenEnsureSlots(vm, 1);&#10;wrenGetVariable(vm, "main", "GameEngine", 0);&#10;WrenHandle* gameEngineClass = wrenGetSlotHandle(vm, 0);&#10;</code></pre>
<p>これで、GameEngineのメソッドを呼び出すたび、その値をスロット0へ戻して保存します。</p>
<pre class="snippet" data-lang="c"><code>&#10;wrenSetSlotHandle(vm, 0, gameEngineClass);&#10;</code></pre>
<p>性能が重要なループの外へ<code>wrenMakeCallHandle()</code>を移したのと同じように、<code>wrenGetVariable()</code>の呼び出しも外へ移せます。もちろん、性能が重要でなければ、そうする必要はありません。</p>
<h2>引数を渡す <a class="header-anchor" href="#passing-arguments" name="passing-arguments">#</a></h2>
<p>レシーバーをスロット0に準備できたので、次は、ほかの引数を渡します。GameEngineの例では、経過時間だけです。メソッドの引数は、レシーバーの後の連続したスロットへ入れます。したがって、経過時間はスロット1に入ります。準備には、どのスロット関数も使えます。この例では、次のようにするだけです。</p>
<pre class="snippet" data-lang="c"><code>&#10;wrenSetSlotDouble(vm, 1, elapsedTime);&#10;</code></pre>
<h2>メソッドの呼び出し <a class="header-anchor" href="#calling-the-method" name="calling-the-method">#</a></h2>
<p>必要なデータはすべて準備できたので、後は、VMにコードの実行開始を指示するだけです。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenInterpretResult wrenCall(WrenVM* vm, WrenHandle* method);&#10;</code></pre>
<p>これは、<code>wrenMakeCallHandle()</code>で作成したメソッドハンドルを受け取ります。Wrenはコードの実行を開始し、レシーバーのメソッドを探して実行します。メソッドが戻るか、ファイバーが<a href="/docs/wren/v0-4-0/en/02-reference/03-modules-core-fiber/#fiber.suspend()">suspend</a>するまで、実行を続けます。</p>
<p><code>wrenCall()</code>は、<code>wrenInterpret()</code>と同じWrenInterpretResult列挙値を返し、メソッドが正常に完了したか、実行時エラーが起きたかを知らせます。（<code>wrenCall()</code>は何もコンパイルしないので、<code>WREN_ERROR_COMPILE</code>を返すことはありません。）</p>
<h2>戻り値の取得 <a class="header-anchor" href="#getting-the-return-value" name="getting-the-return-value">#</a></h2>
<p><code>wrenCall()</code>が戻ると、スロット配列は残ります。スロット0にはメソッドの戻り値があり、どのスロット読み取り関数でもアクセスできます。戻り値が不要なら、無視できます。</p>
<p>CからWrenを動かす方法は、これで分かりました。それでは、Wrenへ制御を渡すには、どうするのでしょうか？ 次の節で説明します。</p>
<p><a class="right" href="/docs/wren/v0-4-0/en/01-guide/18-embedding-calling-c-from-wren/">WrenからCを呼び出す →</a><a href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/">← スロットとハンドル</a></p>
</div>

