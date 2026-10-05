---
title: "Wrenの組み込み"
documentId: "wren:embedding/index.html"
order: 16
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Wrenの組み込み</h1>
<p>Wrenは、ホストアプリケーションの中で動くスクリプト言語として設計されています。そのため、組み込みAPIは、言語の各機能と同じくらい重要です。このAPIを適切に設計するには、いくつかの制約を満たす必要があります。</p>
<ol>
<li><p><strong>Wrenは動的型付けですが、Cは違います。</strong>Wrenの変数には、どの型の値でも格納できますが、Cでは、何らかのバリアント型を定義しない限り、そうはいきません。そして、バリアント型を定義しても、結局は問題を先送りするだけです。最終的には、静的型付けのコードと動的型付けのコードの境界を越えて、データを移動する必要があります。</p></li>
<li><p><strong>Wrenはガベージコレクションを使いますが、Cはメモリーを手動で管理します。</strong>GCによって、APIにいくつかの制約が加わります。VMは、まだ利用できるすべてのWrenオブジェクトを、ネイティブCコードから参照しているものも含めて、見つけられる必要があります。そうでなければ、まだ使用中のオブジェクトを解放してしまうかもしれません。</p><p>また、理想的には、Wrenが管理するメモリー領域への生のポインターを、ネイティブCコードに見せたくありません。多くのガベージコレクション方式では、メモリー内の<a href="https://en.wikipedia.org/wiki/Tracing_garbage_collection#Copying_vs._mark-and-sweep_vs._mark-and-don.27t-sweep">オブジェクトを移動</a>します。Cコードがオブジェクトを直接指せると、オブジェクトが移動した際、そのポインターは無効な場所を指すことになります。現在のWrenのGCはオブジェクトを移動しませんが、将来、その選択肢を残しておきたいのです。</p></li>
<li><p><strong>組み込みAPIは高速でなければなりません。</strong>利用者は、APIを扱いやすくするため、その上に抽象化の層を加えるかもしれません。しかし、基本のAPIが、システムで得られる<em>最大</em>の性能を決めます。スタックの最下層なので、遅すぎる場合に、利用者がそれを回避して最適化する方法はありません。さらに低水準の代替手段もありません。</p></li>
<li><p><strong>APIを使いやすいものにしたい。</strong>これは、最も柔らかい制約なので、最後に挙げています。もちろん、美しく使いやすいAPIにしたいと考えています。しかし、上の制約への対応は、本当に<em>必要</em>です。そのため、最初の三つの目標を達成するためには、少し手間のかかるものにすることも受け入れます。</p></li>
</ol>
<p>幸い、この問題に取り組むのは私たちが初めてではありません。<a href="https://www.lua.org/pil/24.html">LuaのC API</a>に慣れていれば、Wrenも似ていると感じるでしょう。</p>
<h3>性能と安全性 <a class="header-anchor" href="#performance-and-safety" name="performance-and-safety">#</a></h3>
<p>コードがVMの範囲に収まっているときは、かなり安全です。メソッド呼び出しを動的に検査し、捕捉して処理できる実行時エラーを発生させます。スタックがあふれそうになると、スタックを拡張します。一般に、Wrenコードの中では、クラッシュを避けるために、できる限りのことをします。</p>
<p>そもそも、高水準言語を使う理由は、Cより安全で生産的だからです。一方、Cは、利用者が何をしているか理解していることを前提とします。ポインターを不正にキャストしたり、ビットを誤って解釈したり、解放済みのメモリーを使ったりできます。その代わりに、非常に高い性能が得られます。Cが速い理由の多くは、制限装置や保護柵を外していることにあります。</p>
<p>Wrenの組み込みAPIは、この二つの世界の境界を定義し、Cの特徴の一部を引き継ぎます。組み込みAPIの各関数を呼び出すときは、正しく呼んでいることを前提とします。Cから、引数を三つ要求するWrenメソッドを呼び出すなら、三つの引数を渡したと信頼します。</p>
<p>デバッグビルドでは、可能な限り多くのことを調べるアサーションがありますが、リリースビルドでは、利用者が正しく操作することを前提とします。つまり、組み込みAPIを使う際は、ほかのCコードを書く場合と同じように注意が必要です。その代わり、かなり高速なAPIが得られます。</p>
<h2>Wrenを組み入れる <a class="header-anchor" href="#including-wren" name="including-wren">#</a></h2>
<p>Wren VMを自分のプログラムへ組み入れる方法は、二つ（実際には三つ）あります。</p>
<ol>
<li><p><strong>静的ライブラリーまたは動的ライブラリーへリンクする。</strong><a href="/docs/wren/v0-4-0/en/01-guide/02-getting-started/">Wrenをビルド</a>すると、リンクに使える共有ライブラリーと静的ライブラリーの両方を<code>lib</code>に生成します。</p></li>
<li><p><strong>アプリケーションにソースを直接組み入れる。</strong>プログラムへソースを直接組み入れるなら、ビルド手順を実行する必要はありません。<code>src/vm</code>内のソースファイルを、プロジェクトへ追加するだけです。C99、C++98、またはそれ以降の規格で、問題なくコンパイルできるはずです。</p></li>
</ol>
<p>どちらの場合も、<a href="https://github.com/wren-lang/wren/blob/main/src/include/wren.h">Wrenの公開ヘッダー</a>を見つけられるよう、インクルードパスに<code>src/include</code>を追加します。</p>
<pre class="snippet" data-lang="c"><code>&#10;#include "wren.h"&#10;</code></pre>
<p>WrenはC標準ライブラリーだけに依存するため、通常は、ほかのものへリンクする必要はありません。一部のプラットフォーム（少なくともBSDとLinux）では、<code>math.h</code>の数学関数の一部が、独立した<a href="https://en.wikipedia.org/wiki/C_mathematical_functions#libm">libm</a>ライブラリーで実装されているため、明示的にリンクする必要があります。</p>
<p>プログラムがC++で、CとしてコンパイルしたWrenライブラリーへリンクする場合、このヘッダーが、CとC++の呼び出し規約の違いを処理します。</p>
<pre class="snippet" data-lang="c"><code>&#10;#include "wren.hpp"&#10;</code></pre>
<h2>Wren VMの作成 <a class="header-anchor" href="#creating-a-wren-vm" name="creating-a-wren-vm">#</a></h2>
<p>コードを実行可能ファイルへ組み入れたら、仮想マシンを作る必要があります。そのためには、<code>WrenConfiguration</code>オブジェクトを作り、初期化します。</p>
<pre class="snippet" data-lang="c"><code>&#10;    WrenConfiguration config;&#10;    wrenInitConfiguration(&amp;config);&#10;</code></pre>
<p>これで、すべての項目に妥当な既定値を持つ基本設定が得られます。設定できることは後で<a href="/docs/wren/v0-4-0/en/01-guide/21-embedding-configuring-the-vm/">詳しく説明</a>しますが、ここでは、テキストを表示できるよう、<code>writeFn</code>だけを追加します。</p>
<p>まず、Wrenが<code>System.print</code>（または<code>System.write</code>）から送ってくる出力を、何らかの方法で処理する関数が必要です。<em>出力に改行を含まない点に注意してください。</em></p>
<pre class="snippet" data-lang="c"><code>&#10;void writeFn(WrenVM* vm, const char* text) {&#10;  printf("%s", text);&#10;}&#10;</code></pre>
<p>続いて、その関数を指すように設定を更新します。</p>
<pre class="snippet" data-lang="c"><code>&#10;  WrenConfiguration config;&#10;  wrenInitConfiguration(&amp;config);&#10;    config.writeFn = &amp;writeFn;&#10;</code></pre>
<p>これが準備できたら、VMを作成できます。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenVM* vm = wrenNewVM(&amp;config);&#10;</code></pre>
<p>これは、新しいVMのためのメモリーを確保し、初期化します。WrenのC実装にはグローバルな状態がなく、Wrenが使うすべてのデータは、WrenVMの中にまとめられています。複数のWren VMを互いに独立して、問題なく実行でき、別々のスレッドで並行して動かすこともできます。</p>
<p><code>wrenNewVM()</code>は設定のコピーを自分で保存するため、呼び出した後は、値を設定したWrenConfiguration構造体を破棄できます。これで、コードの実行を待つ、動作中のVMができました！</p>
<h2>Wrenコードの実行 <a class="header-anchor" href="#executing-wren-code" name="executing-wren-code">#</a></h2>
<p>Wrenソースコードの文字列は、次のように実行します。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenInterpretResult result = wrenInterpret(&#10;    vm,&#10;    "my_module",&#10;    "System.print(\"I am running in a VM!\")");&#10;</code></pre>
<p>この文字列は、改行で区切った一つ以上の文です。Wrenは文字列をコピーするため、呼び出した後に解放できます。<code>wrenInterpret()</code>を呼び出すと、まずソースをバイトコードへコンパイルします。エラーが起きると、直ちに<code>WREN_RESULT_COMPILE_ERROR</code>を返します。</p>
<p>エラーがなければ、Wrenは新しい<a href="/docs/wren/v0-4-0/en/01-guide/12-concurrency/">ファイバー</a>を起動し、その中でコードを実行します。そのコードは、さらに必要なファイバーを自由に作れます。すべてのファイバーが完了するか、一つが<a href="/docs/wren/v0-4-0/en/02-reference/03-modules-core-fiber/#fiber.suspend()">suspend</a>するまで、ファイバーの実行を続けます。</p>
<p><a href="/docs/wren/v0-4-0/en/01-guide/13-error-handling/">実行時エラー</a>が起き、ほかのファイバーが処理しなければ、メインファイバーまで順に中止し、<code>WREN_RESULT_RUNTIME_ERROR</code>を返します。そうでなければ、最後のファイバーが正常に戻ったとき、<code>WREN_RESULT_SUCCESS</code>を返します。</p>
<p><code>wrenInterpret()</code>へ渡したすべてのコードは、特別な「main」モジュールで実行します。そのため、一つの呼び出しで定義したトップレベルの名前へ、後の呼び出しからアクセスできます。REPLのセッションに似ています。</p>
<h2>VMの終了 <a class="header-anchor" href="#shutting-down-a-vm" name="shutting-down-a-vm">#</a></h2>
<p>処理が終わり、VMを終了したい場合は、そのVMが確保したメモリーを解放する必要があります。次のように行います。</p>
<pre class="snippet" data-lang="c"><code>&#10;wrenFreeVM(vm);&#10;</code></pre>
<p>呼び出した後は、当然、渡した<code>WrenVM*</code>を再び使うことはできません。もう終了しています。</p>
<p>この呼び出しの時点で、まだ有効な<a href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/#handles">WrenHandle</a>オブジェクトがあると、Wrenは警告する点に注意してください。これにより、追跡できなくなったハンドルによるメモリーリークがないことと、VM解放後にハンドルを使おうとしないことを確認できます。</p>
<h2>全体の例 <a class="header-anchor" href="#a-complete-example" name="a-complete-example">#</a></h2>
<p>以下は、上の内容をまとめた全体の例です。このファイルは、<a href="https://github.com/wren-lang/wren/blob/main/example/embedding/main.c">example</a>フォルダーにあります。</p>
<pre class="snippet" data-lang="c"><code>&#10;//For more details, visit https://wren.io/embedding/&#10;&#10;#include &lt;stdio.h&gt;&#10;#include "wren.h"&#10;&#10;static void writeFn(WrenVM* vm, const char* text)&#10;{&#10;  printf("%s", text);&#10;}&#10;&#10;void errorFn(WrenVM* vm, WrenErrorType errorType,&#10;             const char* module, const int line,&#10;             const char* msg)&#10;{&#10;  switch (errorType)&#10;  {&#10;    case WREN_ERROR_COMPILE:&#10;    {&#10;      printf("[%s line %d] [Error] %s\n", module, line, msg);&#10;    } break;&#10;    case WREN_ERROR_STACK_TRACE:&#10;    {&#10;      printf("[%s line %d] in %s\n", module, line, msg);&#10;    } break;&#10;    case WREN_ERROR_RUNTIME:&#10;    {&#10;      printf("[Runtime Error] %s\n", msg);&#10;    } break;&#10;  }&#10;}&#10;&#10;int main()&#10;{&#10;&#10;  WrenConfiguration config;&#10;  wrenInitConfiguration(&amp;config);&#10;    config.writeFn = &amp;writeFn;&#10;    config.errorFn = &amp;errorFn;&#10;  WrenVM* vm = wrenNewVM(&amp;config);&#10;&#10;  const char* module = "main";&#10;  const char* script = "System.print(\"I am running in a VM!\")";&#10;&#10;  WrenInterpretResult result = wrenInterpret(vm, module, script);&#10;&#10;  switch (result) {&#10;    case WREN_RESULT_COMPILE_ERROR:&#10;      { printf("Compile Error!\n"); } break;&#10;    case WREN_RESULT_RUNTIME_ERROR:&#10;      { printf("Runtime Error!\n"); } break;&#10;    case WREN_RESULT_SUCCESS:&#10;      { printf("Success!\n"); } break;&#10;  }&#10;&#10;  wrenFreeVM(vm);&#10;&#10;}&#10;</code></pre>
<p>次は、このVMで役立つ処理を行う方法を学びます。</p>
<p><a class="right" href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/">スロットとハンドル →</a></p>
</div>

