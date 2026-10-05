---
title: "性能"
documentId: "wren:performance.html"
order: 22
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}]
---
<div class="wren-document">
<h1 id="page-title">性能</h1>
<p>ほとんどのベンチマークは、表示に使うピクセルほどの価値もありませんが、人々は好きなようなので、いくつか示します。</p>
<h3>メソッド呼び出し</h3>
<div class="wren-table-scroll"><table class="chart">
<tr>
<th>wren</th><td><div class="chart-bar wren" style="width: 14%;">0.12s </div></td>
</tr>
<tr>
<th>luajit (-joff)</th><td><div class="chart-bar" style="width: 18%;">0.16s </div></td>
</tr>
<tr>
<th>ruby</th><td><div class="chart-bar" style="width: 23%;">0.20s </div></td>
</tr>
<tr>
<th>lua</th><td><div class="chart-bar" style="width: 41%;">0.35s </div></td>
</tr>
<tr>
<th>python3</th><td><div class="chart-bar" style="width: 91%;">0.78s </div></td>
</tr>
<tr>
<th>python</th><td><div class="chart-bar" style="width: 100%;">0.85s </div></td>
</tr>
</table></div>
<h3>DeltaBlue</h3>
<div class="wren-table-scroll"><table class="chart">
<tr>
<th>wren</th><td><div class="chart-bar wren" style="width: 22%;">0.13s </div></td>
</tr>
<tr>
<th>python3</th><td><div class="chart-bar" style="width: 83%;">0.48s </div></td>
</tr>
<tr>
<th>python</th><td><div class="chart-bar" style="width: 100%;">0.57s </div></td>
</tr>
</table></div>
<h3>二分木</h3>
<div class="wren-table-scroll"><table class="chart">
<tr>
<th>luajit (-joff)</th><td><div class="chart-bar" style="width: 20%;">0.11s </div></td>
</tr>
<tr>
<th>wren</th><td><div class="chart-bar wren" style="width: 41%;">0.22s </div></td>
</tr>
<tr>
<th>ruby</th><td><div class="chart-bar" style="width: 46%;">0.24s </div></td>
</tr>
<tr>
<th>python</th><td><div class="chart-bar" style="width: 71%;">0.37s </div></td>
</tr>
<tr>
<th>python3</th><td><div class="chart-bar" style="width: 73%;">0.38s </div></td>
</tr>
<tr>
<th>lua</th><td><div class="chart-bar" style="width: 100%;">0.52s </div></td>
</tr>
</table></div>
<h3>再帰的なフィボナッチ計算</h3>
<div class="wren-table-scroll"><table class="chart">
<tr>
<th>luajit (-joff)</th><td><div class="chart-bar" style="width: 17%;">0.10s </div></td>
</tr>
<tr>
<th>wren</th><td><div class="chart-bar wren" style="width: 35%;">0.20s </div></td>
</tr>
<tr>
<th>ruby</th><td><div class="chart-bar" style="width: 39%;">0.22s </div></td>
</tr>
<tr>
<th>lua</th><td><div class="chart-bar" style="width: 49%;">0.28s </div></td>
</tr>
<tr>
<th>python</th><td><div class="chart-bar" style="width: 90%;">0.51s </div></td>
</tr>
<tr>
<th>python3</th><td><div class="chart-bar" style="width: 100%;">0.57s </div></td>
</tr>
</table></div>
<p><strong>棒が短いほど高速です。</strong>各ベンチマークは10回実行し、最も速かった時間を採用します。測定するのは、ベンチマーク対象のコード自身を実行する時間だけで、インタープリターの起動時間は含みません。</p>
<p>私のMacBook Pro、2.3 GHz Intel Core i7、16 GBの1,600 MHz DDR3 RAMで実行しました。比較対象はLua 5.2.3、LuaJIT 2.0.2、Python 2.7.5、Python 3.3.4、ruby 2.0.0p247です。JITコンパイルを許可しないプラットフォームもサポートしたいので、LuaJITはJITを<em>無効</em>にして、バイトコードインタープリターモードで実行しています。JITを有効にしたLuaJITは、Wrenも含め、ここで測定したほかのすべての言語より<em>はるかに</em>高速です。Mike Pallは、未来から来たロボットなのです。</p>
<p>ベンチマークの実行基盤とプログラムは、<a href="https://github.com/wren-lang/wren/tree/main/test/benchmark">こちら</a>にあります。</p>
<h2>Wrenが高速なのはなぜか？ <a class="header-anchor" href="#why-is-wren-fast" name="why-is-wren-fast">#</a></h2>
<p>言語の性能は、大まかに四つのグループに分かれます。遅いものから速いものへ並べると、次のとおりです。</p>
<ol>
<li><p>構文木をたどるインタープリター：Ruby 1.8.7以前、Io、大学の授業で作ったインタープリター。</p></li>
<li><p>バイトコードインタープリター：CPython、Ruby 1.9以降、Lua、初期のJavaScript VM。</p></li>
<li><p>JITコンパイルする動的型付け言語：現代のJavaScript VM、LuaJIT、PyPy、一部のLisp/Scheme実装。</p></li>
<li><p>静的型付け言語：C、C++、Java、C#、Haskellなど。</p></li>
</ol>
<p>最初のグループの言語は、ほとんどが本番利用に適していません。（サーバーは例外の一つです。遅い言語へ、より多くのハードウェアを投入できるからです。）二つ目のグループは、挙げた言語の成功が示すように、クライアントのハードウェアでも、多くの用途に十分な速度があります。三つ目のグループは、かなり高速ですが、その実装は驚くほど複雑で、静的型付け言語のコンパイラーに匹敵することもよくあります。</p>
<p>Wrenは、二つ目のグループです。実用に十分な速度を持つ単純な実装が欲しいなら、ここが適したところです。さらに、Wrenには、いくつかの工夫があります。</p>
<h3>コンパクトな値の表現 <a class="header-anchor" href="#a-compact-value-representation" name="a-compact-value-representation">#</a></h3>
<p>動的言語の実装で中心になるのは、変数に使うデータ構造です。どの型の値でも保存、または参照でき、それと同時に、できるだけコンパクトである必要があります。Wrenは、このために<em><a href="http://wingolog.org/archives/2011/05/18/value-representation-in-javascript-implementations">NaNタグ付け</a></em>という手法を使います。</p>
<p>Wrenでは、すべての値を内部で、小さな8バイトの倍精度浮動小数点数として保存します。これはWrenの数値型でもあるので、算術演算では、「生の」数値へアクセスする前の変換が不要です。数値を保持する値は、有効なdouble<em>そのもの</em>です。これで、算術演算を高速に保ちます。</p>
<p>ほかの型の値を保存するために使える、未使用のビットが、NaNのdoubleには大量にあります。そこへ、ヒープに割り当てたオブジェクトのポインターを格納でき、<code>true</code>、<code>false</code>、<code>null</code>などの特別な値に使う余地も残ります。つまり、数値、真偽値、nullはボックス化しません。また、値全体はわずか8バイト、64ビットマシンのネイティブなワードサイズです。CPUキャッシュと、値を受け渡すコストを考えると、小さいほど高速です。</p>
<h3>固定したオブジェクト配置 <a class="header-anchor" href="#fixed-object-layout" name="fixed-object-layout">#</a></h3>
<p>ほとんどの動的言語は、オブジェクトを、名前付きプロパティーの緩い集まりとして扱います。作成後も、自由にプロパティーを追加・削除できます。LuaやJavaScriptなどには、オブジェクトの「型」という明確な概念すらありません。</p>
<p>Wrenは、厳密にクラスを基礎とします。すべてのオブジェクトは、クラスのインスタンスです。クラスには、明確な宣言構文があり、命令的には変更できません。さらに、Wrenのフィールドは、クラスに対して非公開であり、そのクラスへ直接定義したメソッドからしかアクセスできません。</p>
<p>これらを合わせると、<em>コンパイル時</em>に、オブジェクトのフィールドが何個あり、それぞれ何かを、正確に決められます。ほかの言語では、作成時に初期メモリーを割り当てますが、フィールドの追加でオブジェクトが大きくなると、何度も再割り当てが必要になる場合があります。Wrenは、最初に一度だけ、正確なフィールド数に合う領域を割り当てます。</p>
<p>同様に、ほかの言語でフィールドへアクセスするとき、インタープリターは、オブジェクト内のハッシュテーブルで名前を探し、見つからなければ、継承の連鎖をたどる場合があります。フィールドは自由に追加できるので、毎回行う必要があります。Wrenでは、コンパイル時に分かるオフセットを使い、インスタンスのスロットへアクセスするだけです。わずかなポインターの加算で済みます。</p>
<h3>メソッドをコピーする継承 <a class="header-anchor" href="#copy-down-inheritance" name="copy-down-inheritance">#</a></h3>
<p>オブジェクトのメソッドを呼び出すには、そのメソッドを見つける必要があります。オブジェクトのクラスへ直接定義したものかもしれませんし、親クラスから継承したものかもしれません。そのため、最悪の場合、見つけるために継承の連鎖をたどる必要があります。</p>
<p>高度な実装は、これを最適化する巧妙な処理を行いますが、言語自身が変更可能であることが難しさを増します。既存クラスへ自由にメソッドを追加したり、継承階層を変更したりできると、あるメソッドの探索結果が時間とともに変わる場合があります。それを確認する必要があり、CPUサイクルを消費します。</p>
<p>Wrenの継承階層は静的であり、クラス定義時に固定します。継承したメソッドは、今後変わらないと分かるので、子クラスを作るとき、すべてをそこへコピーできます。そのため、メソッドのディスパッチは、レシーバーのクラス内でメソッドを探すだけで済みます。</p>
<h3>メソッドのシグネチャ <a class="header-anchor" href="#method-signatures" name="method-signatures">#</a></h3>
<p>Wrenは、<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#signature">シグネチャ</a>の概念を使い、引数の個数によるオーバーロードをサポートします。これにより、言語の表現力と速度が増します。メソッドを呼び出すとき、レシーバーのクラスで探します。見つかれば、そのメソッドの引数の数も正しいと分かります。</p>
<p>これにより、多くの言語で、メソッドへ渡した引数が少なすぎたり多すぎたりしないか実行時に行う、追加の確認を省けます。Wrenでは、誤った個数の引数でメソッドを呼び出すことは、<em>構文上</em>できません。</p>
<h3>計算型goto <a class="header-anchor" href="#computed-gotos" name="computed-gotos">#</a></h3>
<p>サポートするコンパイラーでは、Wrenのバイトコードインタープリターの主要ループに、<a href="http://eli.thegreenplace.net/2012/07/12/computed-goto-for-efficient-dispatch-tables/"><em>計算型goto</em></a>というものを使います。バイトコードインタープリターの頻繁に実行する中心部分は、実質的には、実行する命令を対象とした巨大な<code>switch</code>です。</p>
<p>これを実際の<code>switch</code>で行うと、CPUの<a href="http://en.wikipedia.org/wiki/Branch_predictor">分岐予測器</a>を混乱させます。インタープリター全体に、事実上一つの分岐点しかないからです。予測器はすぐに飽和し、混乱して何も予測できなくなり、CPUの停止やパイプラインのフラッシュが増えます。</p>
<p>計算型gotoを使うと、各命令の末尾に、別々の分岐点ができます。それぞれが独自の分岐予測を使え、ほかより多い命令の組み合わせがあるため、予測が成功することがよくあります。私の大まかなテストでは、性能に5～10%の差が出ます。</p>
<h3>単一パスのコンパイラー <a class="header-anchor" href="#a-single-pass-compiler" name="a-single-pass-compiler">#</a></h3>
<p>コンパイル時間は、言語の性能の比較的小さな部分です。コードは一度コンパイルすれば済みますが、一行のコードを何度も実行する場合があります。しかし、コンパイルが速いと、何かを起動して動かすまでの<em>起動</em>時間に役立ちます。その点で、Wrenのコンパイラーはかなり高速です。</p>
<p>Luaのコンパイラーを手本にしています。トークン化してから解析し、後の段階で消費・解放する大量のAST構造を作る代わりに、解析中に直接コードを出力します。そのため、解析中のメモリー割り当ては最小限で、余分な負担がほとんどありません。</p>
<h2>ほかの言語が同じことをしないのはなぜか？ <a class="header-anchor" href="#why-don't-other-languages-do-this" name="why-don't-other-languages-do-this">#</a></h2>
<p>Wrenの性能の多くは、言語設計の判断から生まれます。<em>型付け</em>と<em>ディスパッチ</em>は動的ですが、クラスの<em>定義</em>は比較的静的です。そのため、多くのことが容易になります。ほかの言語は、オブジェクトのモデルがはるかに変更可能であり、大量の既存コードを壊さずに変えることはできません。</p>
<p>Wrenに最も近い仲間は、圧倒的にLuaです。LuaはWrenより動的であり、その分、実装が難しくなります。また、Luaは、幅広いハードウェアとコンパイラーとの互換性を保つため、非常に努力しています。C89コンパイラーがあれば、そこでLuaを動かせる可能性は、とても高いでしょう。</p>
<p>Wrenも互換性を重視しますが、C99またはC++98と、IEEEの倍精度浮動小数点数を必要とします。そのため、一部の特殊なハードウェアを除外するかもしれませんが、NaNタグ付け、計算型goto、ほかのいくつかの工夫を使えます。</p>
</div>

