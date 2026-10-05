---
title: "モジュール化"
documentId: "wren:modularity.html"
order: 14
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}]
---
<div class="wren-document">
<h1 id="page-title">モジュール化</h1>
<p>小さなおもちゃ以上のプログラムを書き始めると、すぐに二つの問題に遭遇します。</p>
<ol>
<li><p>全体を把握しやすいように、複数の小さなファイルへ分割したい。</p></li>
<li><p>その一部分を、別のプログラムでも再利用したい。</p></li>
</ol>
<p>これらに対応するため、Wrenには単純なモジュールシステムがあります。Wrenのコードを含むファイルは、<em>モジュール</em>を定義します。モジュールは、別のモジュールを<em>インポート</em>することで、そのモジュールで定義したコードを使えます。大きなプログラムを、インポートする小さなモジュールへ分割でき、複数のプログラムで一つのモジュールを共有することで、コードを再利用できます。</p>
<p>Wrenには、単一のグローバルスコープがありません。代わりに、各モジュールが、ほかのすべてのモジュールから独立したトップレベルのスコープを持ちます。例えば、二つのモジュールで同じ名前のトップレベル変数を定義しても、名前の衝突が起きません。各モジュールは、モジュールとして独立しています。</p>
<h2>インポートの概要 <a class="header-anchor" href="#importing,-briefly" name="importing,-briefly">#</a></h2>
<p>Wrenを実行し、実行するファイル名を渡すと、そのファイルの内容が、実行を開始する「main」モジュールを定義します。ほかのモジュールを読み込んで実行するには、import文を使います。</p>
<pre class="snippet"><code>&#10;import "beverages" for Coffee, Tea&#10;</code></pre>
<p>これは、「beverages」というモジュールを探し、そのソースコードを実行します。続いて、<em>その</em>モジュール内の二つのトップレベル変数、<code>Coffee</code>と<code>Tea</code>を探し、それらの値を持つ新しい変数を<em>この</em>モジュールに作成します。</p>
<p>この文は、変数宣言が許される場所なら、ブロック内を含め、どこにでも書けます。</p>
<pre class="snippet"><code>&#10;if (thirsty) {&#10;  import "beverages" for Coffee, Tea&#10;}&#10;</code></pre>
<p>別の名前で変数をインポートする必要がある場合は、<code>import "..." for Name as OtherName</code>を使えます。これは、<em>その</em>モジュールのトップレベル変数<code>Name</code>を探し、その値を持つ<code>OtherName</code>という変数を<em>この</em>モジュールに宣言します。</p>
<pre class="snippet"><code>&#10;import "liquids" for Water //Water is now taken&#10;import "beverages" for Coffee, Water as H2O, Tea&#10;// var water = H2O.new()&#10;</code></pre>
<p>モジュールを読み込むだけで、その変数を束縛する必要がない場合は、<code>for</code>節を省けます。</p>
<pre class="snippet"><code>&#10;import "some_imperative_code"&#10;</code></pre>
<p>これが基本的な考え方です。では、行う処理を各段階に分けましょう。</p>
<ol>
<li>モジュールのソースコードを見つける。</li>
<li>インポートするモジュールのコードを実行する。</li>
<li>インポートする側のモジュールに新しい変数を作り、インポートされるモジュールで定義した値に束縛する。</li>
</ol>
<p>各段階を説明します。</p>
<h2>モジュールを見つける <a class="header-anchor" href="#locating-a-module" name="locating-a-module">#</a></h2>
<p>モジュールをインポートするときに、最初に必要なのは、そのコードを実際に<em>見つける</em>ことです。importは、モジュールを一意に識別するための任意の文字列である<em>名前</em>を指定します。組み込み先のアプリケーションが、その文字列からソースコードのまとまりを見つける方法を制御します。</p>
<p>ホストアプリケーションは、新しいWren VMを作るときに、モジュールローダー関数を提供します。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenConfiguration config;&#10;config.loadModuleFn = loadModule;&#10;&#10;// Other configuration...&#10;&#10;WrenVM* vm = wrenNewVM(&amp;config);&#10;</code></pre>
<p>その関数のシグネチャは、次のとおりです。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenLoadModuleResult WrenLoadModuleFn(WrenVM* vm, const char* name);&#10;</code></pre>
<p>モジュールをインポートするたび、VMは、この関数へモジュール名を渡して呼び出します。組み込む側は、モジュールのソースコードの内容を、<code>WrenLoadModuleResult</code>で返すことを求められます。自分のアプリにWrenを組み込む場合、ファイルシステムを参照したり、アプリに同梱した資源から探したりと、好きな方法で処理できます。</p>
<p>この関数から、sourceフィールドを<code>NULL</code>として返すと、モジュールが見つからなかったことを示せます。この場合、Wrenは実行時エラーとして報告します。</p>
<h3>コマンドラインのローダー <a class="header-anchor" href="#the-command-line-loader" name="the-command-line-loader">#</a></h3>
<p><a href="https://wren.io/cli/">Wren CLIコマンドラインツール</a>の検索処理は、とても単純です。mainモジュールを読み込んだディレクトリーに、モジュール名と「.wren」を追加し、そのファイルを探します。例えば、次のように実行したとします。</p>
<pre><code>$ wren code/my_program.wren&#10;</code></pre>
<p>そのmainモジュールに、次の文があると、</p>
<pre class="snippet"><code>&#10;import "some/module"&#10;</code></pre>
<p>コマンドラインVMは、<code>/code/some/module.wren</code>を探します。慣例として、スクリプトをプラットフォームに依存させないため、Windowsでも、パスの区切りにはスラッシュを使うべきです。（Windowsでもスラッシュは有効な区切りですが、ほかのOSではバックスラッシュは有効ではありません。）</p>
<h2>モジュールを実行する <a class="header-anchor" href="#executing-the-module" name="executing-the-module">#</a></h2>
<p>モジュールのソースコードが得られたら、それを実行する必要があります。まずVMは、インポートする側のモジュールで<code>import</code>文を実行している<a href="/docs/wren/v0-4-0/en/01-guide/12-concurrency/">ファイバー</a>を一時停止します。</p>
<p>続いて、新しいモジュールオブジェクト、つまり基本的には新しいトップレベルのスコープと、新しいファイバーを作成します。そのファイバーとスコープで、新しいモジュールのコードを実行します。モジュールは、任意の命令型コードを実行し、任意のトップレベル変数を定義できます。</p>
<p>モジュールのコードの実行が終わり、そのファイバーが完了すると、一時停止していた、インポートする側のモジュールのファイバーを再開します。この中断と再開は再帰的です。「a」が「b」をインポートし、「b」が「c」をインポートするなら、「c」の実行中は「a」と「b」の両方を中断します。「c」が終わると「b」を再開し、その後「b」が完了すると「a」を再開します。</p>
<p>インポートの木を、一度に一つのノードずつたどるように考えてください。どの時点でも、実行中のコードは、一つのモジュールのものだけです。</p>
<h2>変数の束縛 <a class="header-anchor" href="#binding-variables" name="binding-variables">#</a></h2>
<p>モジュールの実行が終わると、最後の段階は、そこからデータを実際に<em>インポート</em>することです。どのモジュールでも、「トップレベル」の<a href="/docs/wren/v0-4-0/en/01-guide/09-variables/">変数</a>を定義できます。これは、<a href="/docs/wren/v0-4-0/en/01-guide/10-classes/#methods">メソッド</a>や<a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">関数</a>の外で宣言する変数のことです。</p>
<p>これらは、モジュール内のどこからでも見えますが、<em>エクスポート</em>して、ほかのモジュールから使うこともできます。Wrenが次のようなimportを実行すると、</p>
<pre class="snippet"><code>&#10;import "beverages" for Coffee, Tea&#10;</code></pre>
<p>まず、「beverages」モジュールを実行します。続いて、<code>for</code>節の各変数名を順に調べます。各名前について、インポートされたモジュールで、その名前のトップレベル変数を探します。変数が見つからなければ、実行時エラーになります。</p>
<p>見つかった場合は、その変数の現在の値を取得し、同じ名前と値を持つ新しい変数を、インポートする側のモジュールに定義します。インポートする側が得るのは<em>独自の</em>変数で、その値は、インポートした時点の元の変数の値のスナップショットです。後で一方のモジュールがその変数に代入しても、もう一方には反映されません。「生きた」接続ではありません。</p>
<p>実際には、トップレベル変数の大半は、一度しか代入しないため、この違いが問題になることはまれです。</p>
<h2>共有されるインポート <a class="header-anchor" href="#shared-imports" name="shared-imports">#</a></h2>
<p>先ほど、プログラムのモジュールの集合を木として説明しました。もちろん、モジュールが<em>木</em>になるのは、<em>共有されるインポート</em>がない場合だけです。次のようなプログラムを考えてください。</p>
<pre class="snippet"><code>&#10;// main.wren&#10;import "a"&#10;import "b"&#10;&#10;// a.wren&#10;import "shared"&#10;&#10;// b.wren&#10;import "shared"&#10;&#10;// shared.wren&#10;System.print("Shared!")&#10;</code></pre>
<p>ここでは、「a」と「b」の両方が「shared」を使おうとします。「shared」がトップレベルの状態を定義するなら、メモリー内に、そのコピーは一つだけあってほしいところです。そのため、モジュールのコードを実行するのは、<em>最初に</em>読み込むときだけです。その後、同じモジュールを再びインポートすると、すでに読み込んだモジュールを探すだけです。</p>
<p>内部では、Wrenは、これまで読み込んだすべてのモジュールのマップを保持します。モジュールをインポートするとき、ソースを得るために組み込む側を呼び出す前に、まず、そのマップで探します。</p>
<p>つまり、上の段階の一覧には、暗黙の第ゼロ段階として、「すでにモジュールを読み込んだか調べ、読み込み済みなら再利用する」があります。したがって、上のプログラムが「Shared!」を表示するのは一度だけです。</p>
<h2>循環するインポート <a class="header-anchor" href="#cyclic-imports" name="cyclic-imports">#</a></h2>
<p>少し注意すれば、インポートを循環させることもできます。読み込み処理の詳細は、次のとおりです。</p>
<ol>
<li>指定した名前のモジュールを、すでに作成したか調べる。</li>
<li>作成済みなら、それを使う。</li>
<li>そうでなければ、その名前の新しいモジュールを作り、モジュールの登録簿に保存する。</li>
<li>そのためのファイバーを作り、コードを実行する。</li>
</ol>
<p>最後の二段階の順序に注意してください。モジュールを読み込むときは、実行する<em>前</em>に登録簿へ追加します。これにより、そのモジュール自身や、そのモジュールがインポートしたものの実行中に、同じモジュールのimportへ到達しても、登録簿で見つかり、循環を打ち切れます。</p>
<p>例えば、次のようになります。</p>
<pre class="snippet"><code>&#10;// main.wren&#10;import "a"&#10;&#10;// a.wren&#10;System.print("start a")&#10;import "b"&#10;System.print("end a")&#10;&#10;// b.wren&#10;System.print("start b")&#10;import "a"&#10;System.print("end b")&#10;</code></pre>
<p>このプログラムは正常に実行し、次のように表示します。</p>
<pre><code>start a&#10;start b&#10;end b&#10;end a&#10;</code></pre>
<p>注意が必要なのは、変数の束縛です。次の例を考えてください。</p>
<pre class="snippet"><code>&#10;// main.wren&#10;import "a"&#10;&#10;// a.wren&#10;import "b" for B&#10;var A = "a variable"&#10;&#10;// b.wren&#10;import "a" for A&#10;var B = "b variable"&#10;</code></pre>
<p>ここでは、b.wren内で「a」をインポートすると失敗します。実行をたどると、次のようになります。</p>
<ol>
<li>「main.wren」で<code>import "a"</code>を実行する。「main.wren」を中断する。</li>
<li>「a.wren」で<code>import "b"</code>を実行する。「a.wren」を中断する。</li>
<li>「b.wren」で<code>import "a"</code>を実行する。「a」はすでにモジュールのマップにあるため、「b.wren」は中断<em>しない</em>。</li>
</ol>
<p>代わりに、そのモジュールで<code>A</code>という変数を探します。しかし、「a.wren」は宣言より前の<code>import "b" for B</code>の行で停止しているため、その変数はまだ定義していません。動作させるには、変数宣言をimportより前へ移動する必要があります。</p>
<pre class="snippet"><code>&#10;// main.wren&#10;import "a"&#10;&#10;// a.wren&#10;var A = "a variable"&#10;import "b" for B&#10;&#10;// b.wren&#10;import "a" for A&#10;var B = "b variable"&#10;</code></pre>
<p>今度は、実行すると次のようになります。</p>
<ol>
<li>「main.wren」で<code>import "a"</code>を実行する。「main.wren」を中断する。</li>
<li>「a.wren」で<code>A</code>を定義する。</li>
<li>「a.wren」で<code>import "b"</code>を実行する。「a.wren」を中断する。</li>
<li>「b.wren」で<code>import "a"</code>を実行する。「a」はすでにモジュールのマップにあるため、「b.wren」は中断<em>しない</em>。すでに定義済みの<code>A</code>を探し、それを束縛する。</li>
<li>「b.wren」で<code>B</code>を定義する。</li>
<li>「b.wren」を完了する。</li>
<li>「b.wren」で<code>B</code>を探し、「a.wren」に束縛する。</li>
<li>「a.wren」を再開する。</li>
</ol>
<p>非常に複雑に聞こえますが、それは循環依存が一般に複雑なためです。ここでの要点は、必要になるまれな場合に、Wrenは循環依存を扱うことが<em>できる</em>ということです。</p>
<p><br/><hr/><a href="/docs/wren/v0-4-0/en/01-guide/13-error-handling/">← エラー処理</a></p>
</div>

