---
title: "VMの設定"
documentId: "wren:embedding/configuring-the-vm.html"
order: 21
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">VMの設定</h1>
<p>Wren VMを作るとき、WrenConfiguration構造体へのポインターを渡して、設定を調整します。Wrenにはグローバルな状態がないので、アプリケーションで複数のVMを実行する場合、それぞれを別々に設定できます。</p>
<p>構造体は、次のようになっています。</p>
<pre class="snippet" data-lang="c"><code>&#10;typedef struct&#10;{&#10;  WrenReallocateFn reallocateFn;&#10;  WrenLoadModuleFn loadModuleFn;&#10;  WrenBindForeignMethodFn bindForeignMethodFn;&#10;  WrenBindForeignClassFn bindForeignClassFn;&#10;  WrenWriteFn writeFn;&#10;  WrenErrorFn errorFn;&#10;  size_t initialHeapSize;&#10;  size_t minHeapSize;&#10;  int heapGrowthPercent;&#10;} WrenConfiguration;&#10;</code></pre>
<p>ほとんどのフィールドには、有用な既定値があります。次を呼び出して初期化できますし、そうするべきです。</p>
<pre class="snippet" data-lang="c"><code>&#10;wrenInitConfiguration(&amp;configuration);&#10;</code></pre>
<p>これを呼び出すことで、WrenConfigurationへ新しいフィールドを追加しても、VMへ未初期化の設定を渡さずに済みます。各フィールドの働きを、大まかに分類して説明します。</p>
<h2>束縛 <a class="header-anchor" href="#binding" name="binding">#</a></h2>
<p>VMは外の世界から隔離されています。これらのコールバックを使い、VMはインポートするコードや外部機能へのアクセスを要求できます。</p>
<h3><strong><code>loadModuleFn</code></strong> <a class="header-anchor" href="#loadmodulefn" name="loadmodulefn">#</a></h3>
<p>インポートしたモジュールを読み込むためにWrenが使うコールバックです。VM自身は、ファイルシステムとのやり取りを知りません。そのため、<code>import</code>文を実行するとき、ホストアプリケーションに頼って、モジュールのソースコードを探し、読み込みます。</p>
<p>この関数のシグネチャは、次のとおりです。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenLoadModuleResult loadModule(WrenVM* vm, const char* name)&#10;</code></pre>
<p>モジュールをインポートするとき、Wrenは、この関数を呼び出し、モジュール名を渡します。ホストは、そのモジュールのソースコードを<code>WrenLoadModuleResult</code>構造体で返すべきです。</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenLoadModuleResult myLoadModule(WrenVM* vm, const char* name) {&#10;  WrenLoadModuleResult result = {0};&#10;    result.source = getSourceForModule(name);&#10;  return result;&#10;}&#10;</code></pre>
<p>モジュールローダーは、一つのモジュール名につき一度だけ呼び出します。Wrenは内部で結果をキャッシュするので、同じモジュールの後続のインポートでは、すでに読み込んだコードを使います。</p>
<p>ホストアプリケーションが、指定した名前のモジュールを読み込めない場合、戻り値の<code>source</code>を<code>NULL</code>にします。Wrenは、それを実行時エラーとして報告します。</p>
<p><code>import</code>文を使わない場合、設定の<code>loadModuleFn</code>フィールドは、既定値の<code>NULL</code>のままにできます。</p>
<p>さらに、<code>WrenLoadModuleResult</code>には、Wrenが<code>source</code>を使い終えたときのコールバックを追加できます。必要なら、メモリーを解放するために使えます。</p>
<pre class="snippet" data-lang="c"><code>&#10;&#10;static void loadModuleComplete(WrenVM* vm, &#10;                               const char* module,&#10;                               WrenLoadModuleResult result) &#10;{&#10;  if(result.source) {&#10;    //for example, if we used malloc to allocate&#10;    //our source string, we use free to release it.&#10;    free((void*)result.source);&#10;  }&#10;}&#10;&#10;WrenLoadModuleResult myLoadModule(WrenVM* vm, const char* name) {&#10;  WrenLoadModuleResult result = {0};&#10;    result.onComplete = loadModuleComplete;&#10;    result.source = getSourceForModule(name);&#10;  return result;&#10;}&#10;</code></pre>
<h3><strong><code>bindForeignMethodFn</code></strong> <a class="header-anchor" href="#bindforeignmethodfn" name="bindforeignmethodfn">#</a></h3>
<p>Wrenが外部メソッドを探し、クラスへ束縛するために使うコールバックです。詳細は<a href="/docs/wren/v0-4-0/ja/01-guide/18-embedding-calling-c-from-wren/">このページ</a>を参照してください。アプリケーションが外部メソッドを定義しない場合、<code>NULL</code>のままにできます。</p>
<h3><strong><code>bindForeignClassFn</code></strong> <a class="header-anchor" href="#bindforeignclassfn" name="bindforeignclassfn">#</a></h3>
<p>Wrenが外部クラスを探し、その外部メソッドを取得するために使うコールバックです。詳細は<a href="/docs/wren/v0-4-0/ja/01-guide/20-embedding-storing-c-data/">このページ</a>を参照してください。アプリケーションが外部クラスを定義しない場合、<code>NULL</code>のままにできます。</p>
<h2>診断 <a class="header-anchor" href="#diagnostics" name="diagnostics">#</a></h2>
<p>これらを使って、最小限の出力を結び付け、コードが期待どおりに動いているか確認できます。</p>
<h3><strong><code>writeFn</code></strong> <a class="header-anchor" href="#writefn" name="writefn">#</a></h3>
<p><code>System.print()</code>や関連するほかの関数を呼び出したときに、テキストを出力するためにWrenが使うコールバックです。VMと外の世界との最小限の接続であり、基本的な「printfデバッグ」を行えます。そのシグネチャは、次のとおりです。</p>
<pre class="snippet" data-lang="c"><code>&#10;void write(WrenVM* vm, const char* text)&#10;</code></pre>
<p>Wrenには、この既定の実装は<em>ありません</em>。<code>printf()</code>など、テキストを表示する手段へ結び付けるのは、利用者の責任です。<code>NULL</code>のままにすると、<code>System.print()</code>などの呼び出しは、何もせず、出力もありません。</p>
<h3><strong><code>errorFn</code></strong> <a class="header-anchor" href="#errorfn" name="errorfn">#</a></h3>
<p>Wrenは、このコールバックでコンパイル時エラーと実行時エラーを報告します。そのシグネチャは、次のとおりです。</p>
<pre class="snippet" data-lang="c"><code>&#10;void error(&#10;      WrenVM* vm, &#10;      WrenErrorType type,&#10;      const char* module,&#10;      int line,&#10;      const char* message)&#10;</code></pre>
<p><code>type</code>引数は、次のいずれかです。</p>
<pre class="snippet" data-lang="c"><code>&#10;typedef enum&#10;{&#10;  // A syntax or resolution error detected at compile time.&#10;  WREN_ERROR_COMPILE,&#10;&#10;  // The error message for a runtime error.&#10;  WREN_ERROR_RUNTIME,&#10;&#10;  // One entry of a runtime error's stack trace.&#10;  WREN_ERROR_STACK_TRACE&#10;} WrenErrorType;&#10;</code></pre>
<p>コンパイルエラーが起きると、<code>errorFn</code>を一度呼び出します。種類<code>WREN_ERROR_COMPILE</code>、エラーが起きたモジュール名と行、エラーメッセージを渡します。</p>
<p>実行時エラーには、スタックトレースがあります。これを扱うため、Wrenは、まず<code>errorFn</code>を、<code>WREN_ERROR_RUNTIME</code>、モジュールと行なし、実行時エラーのメッセージを使って呼び出します。その後、種類<code>WREN_ERROR_STACK_TRACE</code>を使い、スタックトレースの各行につき一度、<code>errorFn</code>を再び呼び出します。各呼び出しには、メソッドや関数を定義したモジュールと行があり、<code>message</code>には、メソッドや関数の名前を渡します。</p>
<p><code>NULL</code>のままにすると、Wrenは、どのエラーも報告しません。</p>
<h2>メモリー管理 <a class="header-anchor" href="#memory-management" name="memory-management">#</a></h2>
<p>これらのフィールドは、VMによるメモリーの割り当てと管理を制御します。</p>
<h3><strong><code>reallocateFn</code></strong> <a class="header-anchor" href="#reallocatefn" name="reallocatefn">#</a></h3>
<p>独自のメモリー割り当て関数を指定できます。そのシグネチャは、次のとおりです。</p>
<pre class="snippet" data-lang="c"><code>&#10;void* reallocate(void* memory, size_t newSize, void* userData)&#10;</code></pre>
<p>Wrenは、この一つの関数を使って、メモリーの割り当て、拡大、縮小、解放を行います。割り当てを変更したり解放したりする場合、呼び出し時の<code>memory</code>は、そのメモリーブロックへの既存のポインターです。新しいメモリーを要求する場合、<code>memory</code>は<code>NULL</code>です。</p>
<p><code>newSize</code>は、要求するメモリーのバイト数です。メモリーを解放する場合、これは0です。コールバックは、適切な量のメモリーを割り当て、それを返すべきです。</p>
<p>独自のアロケーターを指定しなければ、VMは、<code>realloc</code>と<code>free</code>を使う既定のものを使います。</p>
<h3><strong><code>initialHeapSize</code></strong> <a class="header-anchor" href="#initialheapsize" name="initialheapsize">#</a></h3>
<p>最初のガベージコレクションを起動する前に、VMが割り当てるメモリーの総バイト数を定義します。小さな数値にすると、Wrenが一度に割り当てるメモリー量は減りますが、ガベージコレクションの頻度は増えます。</p>
<p>0に設定すると、Wrenは、既定の10MBを使います。</p>
<h3><strong><code>minHeapSize</code></strong> <a class="header-anchor" href="#minheapsize" name="minheapsize">#</a></h3>
<p>ガベージコレクションの後、<em>次の</em>回収のしきい値は、使用中として残ったバイト数に基づいて決めます。これにより、実際に必要なメモリー量に応じて、Wrenは、自動でメモリー使用量を増減できます。</p>
<p>ヒープが<em>小さくなりすぎない</em>ようにするために使えます。小さすぎると、使えるサイズまで再びヒープが大きくなる過程で、何度も回収が起きる場合があります。</p>
<p>0の場合、既定値は1MBです。</p>
<h3><strong><code>heapGrowthPercent</code></strong> <a class="header-anchor" href="#heapgrowthpercent" name="heapgrowthpercent">#</a></h3>
<p>Wrenは、回収後にまだ使っているメモリー量に基づき、ガベージコレクションの頻度を調整します。この数値で、その調整を制御します。回収後に追加で使うメモリー量を、現在のヒープサイズに対する割合で決めます。</p>
<p>例えば、50とします。ガベージコレクション後、まだ400バイトを使っています。この場合、合計600バイトを割り当てた時点で、次の回収を起動します。（すでに使用中の400バイトも含みます。）</p>
<p>小さな数値にすると、無駄なメモリーは減りますが、ガベージコレクションの頻度は増えます。</p>
<p>0に設定すると、VMは、既定値の50を使います。</p>
<p><a href="/docs/wren/v0-4-0/ja/01-guide/20-embedding-storing-c-data/">← Cデータの保存</a></p>
</div>

