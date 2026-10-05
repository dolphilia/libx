---
title: "Cのデータを格納する"
documentId: "wren:embedding/storing-c-data.html"
order: 20
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Cデータの保存</h1>
<p>組み込み言語では、ネイティブのデータを扱う必要がよくあります。Cのヒープで管理するメモリーへのポインターが必要な場合や、Wrenの動的な仕組みより効率的にデータのまとまりを保存したい場合があるでしょう。ファイルハンドルやデータベース接続などのネイティブリソースを表すWrenオブジェクトが必要な場合もあります。</p>
<p>そのような場合は、状態をWrenとCで半分ずつ持つ、混成の<strong>外部クラス</strong>を定義できます。名前、コンストラクター、メソッドを持つ、実際のWrenクラスです。Wrenで書いたメソッドや、Cで書いた<a href="/docs/wren/v0-4-0/ja/01-guide/18-embedding-calling-c-from-wren/">外部メソッド</a>を定義できます。渡したり、<code>is</code>で検査したりできる、実際のWrenオブジェクトを作ります。それと同時に、Wrenからは不透明で、Cからはアクセスできる、生のメモリーのまとまりを包みます。</p>
<h2>外部クラスの定義 <a class="header-anchor" href="#defining-a-foreign-class" name="defining-a-foreign-class">#</a></h2>
<p>次のように定義します。</p>
<pre class="snippet"><code>&#10;foreign class Point {&#10;  // ...&#10;}&#10;</code></pre>
<p><code>foreign</code>キーワードは、クラスのインスタンスを構築するとき、ホストアプリケーションを関与させるようWrenへ伝えます。ホストは、外部インスタンスに何バイトの追加メモリーを持たせるかWrenへ伝え、Wrenは、そのデータを初期化する機会をホストへ与えます。</p>
<p>ホストアプリとやり取りするため、Wrenは外部クラスのインスタンスを構築するときに呼び出すC関数を必要とします。この関数は、<a href="/docs/wren/v0-4-0/ja/01-guide/18-embedding-calling-c-from-wren/#binding-foreign-methods">外部メソッドの束縛</a>と似た処理で探します。<a href="/docs/wren/v0-4-0/ja/01-guide/21-embedding-configuring-the-vm/">VMを設定</a>するとき、WrenConfigurationの<code>bindForeignClassFn</code>フィールドを、定義したCのコールバックへ向けます。そのシグネチャは、次のとおりでなければなりません。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenForeignClassMethods bindForeignClass(&#10;    WrenVM* vm, const char* module, const char* className);&#10;</code></pre>
<p>Wrenは、外部クラスの宣言を実行するとき、このコールバックを一度だけ呼び出します。外部クラスを含むモジュール名と、宣言するクラス名を渡します。ホストは、次の構造体を返す責任があります。</p>
<pre class="snippet" data-lang="c"><code>&#10;typedef struct&#10;{&#10;  WrenForeignMethodFn allocate;&#10;  WrenFinalizerFn finalize;&#10;} WrenForeignClassMethods;&#10;</code></pre>
<p>これは、二つの関数ポインターです。最初の<code>allocate</code>は、外部クラスのインスタンスを作るたびにWrenが呼び出します。（省略可能な<code>finalize</code>コールバックは、後で説明します。）割り当てコールバックのシグネチャは、外部メソッドと同じです。</p>
<pre class="snippet" data-lang="c"><code>&#10;void allocate(WrenVM* vm);&#10;</code></pre>
<h2>インスタンスの初期化 <a class="header-anchor" href="#initializing-an-instance" name="initializing-an-instance">#</a></h2>
<p><a href="/docs/wren/v0-4-0/ja/01-guide/10-classes/#constructors">コンストラクター</a>を呼び出して外部クラスのインスタンスを作ると、Wrenは、その外部クラスを束縛するときに渡した<code>allocate</code>コールバックを呼び出します。そのコールバックで主に行うことは、何バイトの生のメモリーが必要かWrenへ伝えることです。次を呼び出します。</p>
<pre class="snippet" data-lang="c"><code>&#10;void* wrenSetSlotNewForeign(WrenVM* vm,&#10;    int slot, int classSlot, size_t size);&#10;</code></pre>
<p>ほかの<a href="/docs/wren/v0-4-0/ja/01-guide/17-embedding-slots-and-handles/">スロット操作関数</a>と同様に、スロット配列を読み書きします。ほかの外部メソッドでも使えるよう汎用性を持たせるため、いくつかの引数があります。</p>
<ul>
<li><p><code>slot</code>引数は、新しい外部オブジェクトを置く、宛先スロットです。外部クラスの割り当てコールバックで呼び出すときは、0にします。</p></li>
<li><p><code>classSlot</code>引数は、構築する外部クラスがあるスロットです。VMが外部クラスの割り当てコールバックを呼び出すとき、クラス自身はすでにスロット0にあるので、これにも0を渡します。</p></li>
<li><p>最後の<code>size</code>引数が、注目する部分です。外部インスタンスに保存させたい、追加の生データのバイト数を渡します。Cから操作できるのが、このメモリーです。</p></li>
</ul>
<p>例えば、8バイトのCデータを持つ外部インスタンスを作るには、次のように呼び出します。</p>
<pre class="snippet" data-lang="c"><code>&#10;void* data = wrenSetSlotNewForeign(vm, 0, 0, 8);&#10;</code></pre>
<p><code>wrenSetSlotNewForeign()</code>の戻り値は、要求したバイト領域への生のポインターです。（要求したバイト数に収まる限り）適切なCの型へキャストし、必要に応じて初期化できます。</p>
<p>コンストラクターへ渡した引数も、スロット配列の後続スロットで使えます。そのため、Wrenからコンストラクターへ渡した値を使って、外部データを初期化できます。</p>
<p>割り当てコールバックが戻ると、Wrenで書いたクラスのコンストラクターを実行し、通常どおり処理を続けます。その後、Wren内では、通常のクラスのインスタンスに見えます。ただ、その内部には、外部メソッドからアクセスできる追加のバイト領域があります。</p>
<h2>外部データへのアクセス <a class="header-anchor" href="#accessing-foreign-data" name="accessing-foreign-data">#</a></h2>
<p>外部クラスのインスタンスに保存したデータは、通常、ほかの外部メソッドから使います。そのメソッドは同じ外部クラスに定義することが多いですが、ほかのクラスに定義してもかまいません。Wrenは、どちらでも扱えます。</p>
<p>スロットに外部インスタンスを入れたら、次を呼び出して、保存した生のバイト領域へアクセスできます。</p>
<pre class="snippet" data-lang="c"><code>&#10;void* wrenGetSlotForeign(WrenVM* vm, int slot);&#10;</code></pre>
<p>外部オブジェクトを含むスロットのインデックスを渡すと、そのオブジェクトが包む生のメモリーへのポインターを返します。いつもどおり、C APIは型や範囲を検査しません。そのスロット内のオブジェクトが、実際に外部クラスのインスタンスであり、アクセスする分のメモリーを持つことを確認するのは、利用者の責任です。</p>
<p>そのvoidポインターを使って、指す先のデータを自由に読み書きできます。データは利用者のもので、Wrenは、それを保持するだけです。</p>
<h2>リソースの解放 <a class="header-anchor" href="#freeing-resources" name="freeing-resources">#</a></h2>
<p>外部インスタンスがメモリーを保持するだけで、その寿命をWrenのガベージコレクターへ任せてよければ、これで完了です。Wrenは、参照がある限り、そのバイト領域を保持します。インスタンスへ到達できなくなれば、いずれガベージコレクターが処理し、メモリーを解放します。</p>
<p>しかし、外部データは、寿命を明示的に管理する必要のあるリソースを参照することがよくあります。例えば、開いたファイルハンドルを包む外部オブジェクトでは、GCが外部インスタンスを解放するとき、そのハンドルが開いたまま残らないようにする必要があります。</p>
<p>もちろん、外部クラスに<code>close()</code>などのメソッドを追加して、オブジェクトが管理するリソースを利用者が明示的に解放できるようにできますし、通常は、そうするべきです。しかし、利用者が忘れ、オブジェクトへ到達できなくなった場合も、リソースが漏れないようにしたいでしょう。</p>
<p>そのため、外部クラスを束縛するとき、<em>ファイナライザー</em>関数も指定できます。WrenForeignClassMethods構造体の、もう一方のコールバックです。指定すると、ガベージコレクターが外部クラスのインスタンスを解放する直前に、Wrenが呼び出します。オブジェクトのリソースを片付ける、最後の機会です。</p>
<p>これはガベージコレクションの途中で呼び出すため、VMへ自由にはアクセスできません。通常の外部メソッドのように、スロットなどを操作することはできません。GCの実行中にそうすると、Wrenが不整合な状態になるおそれがあります。</p>
<p>そのため、finalizeコールバックのシグネチャは、次だけです。</p>
<pre class="snippet" data-lang="c"><code>&#10;void finalize(void* data);&#10;</code></pre>
<p>Wrenが渡すのは、外部関数のメモリーへのポインターだけです。ファイナライザー内で行うべき<em>唯一</em>の処理は、そのメモリーから参照する、外部リソースの解放です。</p>
<h2>完全な例 <a class="header-anchor" href="#a-full-example" name="a-full-example">#</a></h2>
<p>内容が多いので、ファイナライザーといくつかのメソッドを持つ、外部クラスの完全な例を見てみましょう。Cの標準ファイルAPIを包むFileクラスを作ります。</p>
<p>Wrenで作るクラスは、次のとおりです。</p>
<pre class="snippet"><code>&#10;foreign class File {&#10;  construct create(path) {}&#10;&#10;  foreign write(text)&#10;  foreign close()&#10;}&#10;</code></pre>
<p>パスを指定して新しいファイルを作れます。作成後は書き込むことができ、必要なら明示的に閉じられます。また、利用者が閉じ忘れ、GCがオブジェクトを片付ける場合も、ファイルが閉じるようにする必要があります。</p>
<h3>VMの準備 <a class="header-anchor" href="#setting-up-the-vm" name="setting-up-the-vm">#</a></h3>
<p>ホスト側では、まずVMを準備します。</p>
<pre class="snippet" data-lang="c"><code>&#10;#include "wren.h"&#10;&#10;int main(int argc, const char* argv[])&#10;{&#10;  WrenConfiguration config;&#10;  wrenInitConfiguration(&amp;config);&#10;&#10;  config.bindForeignClassFn = bindForeignClass;&#10;  config.bindForeignMethodFn = bindForeignMethod;&#10;&#10;  WrenVM* vm = wrenNewVM(&amp;config);&#10;  wrenInterpret(vm, "my_module", "some code...");&#10;&#10;  return 0;&#10;}&#10;</code></pre>
<h3>外部クラスの束縛 <a class="header-anchor" href="#binding-the-foreign-class" name="binding-the-foreign-class">#</a></h3>
<p>VMへ二つのコールバックを渡します。最初は、外部クラス自身を結び付けるためのものです。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenForeignClassMethods bindForeignClass(&#10;    WrenVM* vm, const char* module, const char* className)&#10;{&#10;  WrenForeignClassMethods methods;&#10;&#10;  if (strcmp(className, "File") == 0)&#10;  {&#10;    methods.allocate = fileAllocate;&#10;    methods.finalize = fileFinalize;&#10;  }&#10;  else&#10;  {&#10;    // Unknown class.&#10;    methods.allocate = NULL;&#10;    methods.finalize = NULL;&#10;  }&#10;&#10;  return methods;&#10;}&#10;</code></pre>
<p>束縛コールバックをFileクラスに対して呼び出したとき、VMが呼び出すべきallocate関数とfinalize関数を返します。割り当て処理は、次のようになります。</p>
<pre class="snippet" data-lang="c"><code>&#10;#include &lt;stdio.h&gt;&#10;#include "wren.h"&#10;&#10;void fileAllocate(WrenVM* vm)&#10;{&#10;  FILE** file = (FILE**)wrenSetSlotNewForeign(vm,&#10;      0, 0, sizeof(FILE*));&#10;  const char* path = wrenGetSlotString(vm, 1);&#10;  *file = fopen(path, "w");&#10;}&#10;</code></pre>
<p>まず、<code>wrenSetSlotNewForeign()</code>を呼び出し、インスタンスを作ります。Cでファイルハンドルを表す<code>FILE*</code>を保存するのに十分な追加バイト数を指定します。そのバイト領域へのポインターを受け取ります。ファイルハンドル自身がポインターなので、二段階の間接参照となり、<code>FILE**</code>になります。通常は、単一の<code>*</code>になります。</p>
<p>スロット配列からファイルパスも取得します。次に、Cに、そのパスで新しいファイルを作らせます。新しいファイルハンドル、つまり<code>FILE*</code>を受け取り、<code>*file</code>を使って、外部インスタンスへ保存します。これで、開いたファイルハンドルを包む外部オブジェクトができました。</p>
<p>ファイナライザーは、外部インスタンスのデータを適切な型へキャストし直し、ファイルを閉じるだけです。</p>
<pre class="snippet" data-lang="c"><code>&#10;void fileFinalize(void* data)&#10;{&#10;  closeFile((FILE**) data);&#10;}&#10;</code></pre>
<p>次の小さな補助関数を使います。</p>
<pre class="snippet" data-lang="c"><code>&#10;static void closeFile(FILE** file)&#10;{&#10;  // Already closed.&#10;  if (*file == NULL) return;&#10;&#10;  fclose(*file);&#10;  *file = NULL;&#10;}&#10;</code></pre>
<p>この関数は、まだ閉じていなければファイルを閉じ、ファイルハンドルをnullにします。これで、閉じたファイルを使おうとしないようにします。</p>
<h3>外部メソッドの束縛 <a class="header-anchor" href="#binding-the-foreign-methods" name="binding-the-foreign-methods">#</a></h3>
<p>外部<em>クラス</em>の部分は、これで完了です。次は、いくつかの外部<em>メソッド</em>を扱います。ホストは、次の関数へのポインターをWrenへ渡し、メソッドの探し方をVMへ伝えます。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenForeignMethodFn bindForeignMethod(WrenVM* vm, const char* module,&#10;    const char* className, bool isStatic, const char* signature)&#10;{&#10;  if (strcmp(className, "File") == 0)&#10;  {&#10;    if (!isStatic &amp;&amp; strcmp(signature, "write(_)") == 0)&#10;    {&#10;      return fileWrite;&#10;    }&#10;&#10;    if (!isStatic &amp;&amp; strcmp(signature, "close()") == 0)&#10;    {&#10;      return fileClose;&#10;    }&#10;  }&#10;&#10;  // Unknown method.&#10;  return NULL;&#10;}&#10;</code></pre>
<p>Wrenがこれを呼び出すと、クラス名とメソッド名を調べ、束縛するメソッドを特定し、適した関数へのポインターを返します。ファイルへ書き込む外部メソッドは、次のとおりです。</p>
<pre class="snippet" data-lang="c"><code>&#10;void fileWrite(WrenVM* vm)&#10;{&#10;  FILE** file = (FILE**)wrenGetSlotForeign(vm, 0);&#10;&#10;  // Make sure the file is still open.&#10;  if (*file == NULL)&#10;  {&#10;    wrenSetSlotString(vm, 0, "Cannot write to a closed file.");&#10;    wrenAbortFiber(vm, 0);&#10;    return;&#10;  }&#10;&#10;  const char* text = wrenGetSlotString(vm, 1);&#10;  fwrite(text, sizeof(char), strlen(text), *file);&#10;}&#10;</code></pre>
<p><code>wrenGetSlotForeign()</code>を使い、スロット配列から外部データを取得します。このメソッドは、ファイル自身を対象に呼び出すので、外部オブジェクトはスロット0にあります。受け取ったポインターを、適切な型のポインターへキャストします。ここでも、外部データ<em>自身</em>がポインターなので、ポインターへのポインターを受け取ります。</p>
<p>利用者がすでに閉じたファイルへ書き込んでいないか、簡単に確認します。そうでなければ、<code>fwrite()</code>を呼び出してファイルへ書き込みます。</p>
<p>もう一つのメソッドは<code>close()</code>で、利用者が明示的にファイルを閉じられるようにします。</p>
<pre class="snippet" data-lang="c"><code>&#10;void fileClose(WrenVM* vm)&#10;{&#10;  FILE** file = (FILE**)wrenGetSlotForeign(vm, 0);&#10;  closeFile(file);&#10;}&#10;</code></pre>
<p>上で定義したのと同じ補助関数を使います。これで、ファイナライザーといくつかの外部メソッドを持つ、完全な外部クラスができました。Wrenでは、次のように使えます。</p>
<pre class="snippet"><code>&#10;var file = File.create("some/path.txt")&#10;file.write("some text")&#10;file.close()&#10;</code></pre>
<p>便利でしょう？ このクラスは、通常のWrenクラスと同じように見え、同じように扱えますが、ネイティブCコードの機能と、その性能の多くを備えています。</p>
<p><a class="right" href="/docs/wren/v0-4-0/ja/01-guide/21-embedding-configuring-the-vm/">VMの設定 →</a><a href="/docs/wren/v0-4-0/ja/01-guide/18-embedding-calling-c-from-wren/">← WrenからCを呼び出す</a></p>
</div>

