---
title: "cJSON 利用ガイド"
licenseSource: cjson-readme
toc:
  maxLevel: 6
---

<div class="cjson-upstream-document">
<h1 id="cjson">cJSON</h1>
<p>ANSI Cで書かれた、きわめて軽量なJSONパーサーです。</p>
<h2 id="table-of-contents">目次</h2>
<ul>
<li><a href="#license">ライセンス</a></li>
<li><a href="#usage">使い方</a></li>
<li><a href="#welcome-to-cjson">cJSONへようこそ</a></li>
<li><a href="#building">ビルド</a><ul>
<li><a href="#copying-the-source">ソースのコピー</a></li>
<li><a href="#cmake">CMake</a></li>
<li><a href="#makefile">Makefile</a></li>
<li><a href="#meson">Meson</a></li>
<li><a href="#vcpkg">Vcpkg</a></li>
</ul>
</li>
<li><a href="#including-cjson">cJSONのインクルード</a></li>
<li><a href="#data-structure">データ構造</a></li>
<li><a href="#working-with-the-data-structure">データ構造の操作</a><ul>
<li><a href="#basic-types">基本型</a></li>
<li><a href="#arrays">配列</a></li>
<li><a href="#objects">オブジェクト</a></li>
</ul>
</li>
<li><a href="#parsing-json">JSONの解析</a></li>
<li><a href="#printing-json">JSONの出力</a></li>
<li><a href="#example">例</a><ul>
<li><a href="#printing">出力</a></li>
<li><a href="#parsing">解析</a></li>
</ul>
</li>
<li><a href="#caveats">注意事項</a><ul>
<li><a href="#zero-character">ゼロ文字</a></li>
<li><a href="#character-encoding">文字エンコーディング</a></li>
<li><a href="#c-standard">C規格</a></li>
<li><a href="#floating-point-numbers">浮動小数点数</a></li>
<li><a href="#deep-nesting-of-arrays-and-objects">配列とオブジェクトの深い入れ子</a></li>
<li><a href="#thread-safety">スレッド安全性</a></li>
<li><a href="#case-sensitivity">大文字と小文字の区別</a></li>
<li><a href="#duplicate-object-members">オブジェクトの重複メンバー</a></li>
</ul>
</li>
<li><a href="#enjoy-cjson">cJSONをお楽しみください！</a></li>
</ul>
<h2 id="license">ライセンス</h2>
<p>MIT ライセンス</p>
<p class="cjson-original-notice-label">原文MIT通知を以下に保持しています。<a href="/docs/cjson/v1-7-19/ja/02-license/01-license/#mit-reference-translation">日本語参考訳</a>はライセンスページを参照してください。</p>
<blockquote>
<p>Copyright (c) 2009-2017 Dave Gamble and cJSON contributors</p>
<p>Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:</p>
<p>The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.</p>
<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.</p>
</blockquote>
<h2 id="usage">使い方</h2>
<h3 id="welcome-to-cjson">cJSONへようこそ</h3>
<p>cJSONは、必要な仕事をこなせる限り、できるだけ単純なパーサーを目指しています。Cのソースファイル1個とヘッダーファイル1個で構成されています。</p>
<p>JSONについては http://www.json.org/ の説明が最も適しています。XMLに似ていますが、余分なものをそぎ落としています。データの受け渡しや保存、あるいはプログラムの状態を表すために使います。</p>
<p>ライブラリとしてのcJSONは、できるだけ手間を減らしつつ、使い手の邪魔にならないことを目指しています。実用上の話として（厳密さはさておき）、自動と手動の2つのモードで使える、と言っておきましょう。簡単に見ていきます。</p>
<p>このページからJSONの例を借りてきました: http://www.json.org/fatfree.html 。そのページに触発され、JSONそのものと同じ考え方を共有しようとするパーサー、cJSONを書きました。簡単で単純、そして邪魔にならないものです。</p>
<h3 id="building">ビルド</h3>
<p>cJSONをプロジェクトに組み込む方法はいくつかあります。</p>
<h4 id="copying-the-source">ソースのコピー</h4>
<p>ライブラリ全体がCファイル1個とヘッダーファイル1個だけなので、<code>cJSON.h</code>と<code>cJSON.c</code>をプロジェクトのソースへコピーするだけで使い始められます。</p>
<p>できるだけ多くのプラットフォームとコンパイラーに対応するため、cJSONはANSI C（C89）で書かれています。</p>
<h4 id="cmake">CMake</h4>
<p>CMakeを使うと、cJSONの本格的なビルドシステムを利用でき、最も多くの機能が使えます。CMakeは2.8.5以降に対応しています。CMakeでは、コンパイルしたファイルをソースとは別のディレクトリに置く、ソースツリー外でのビルドを推奨します。Unix環境でCMakeを使ってcJSONをビルドするには、<code>build</code>ディレクトリを作成し、その中でCMakeを実行します。</p>
<pre><code>mkdir build
cd build
cmake ..
</code></pre>
<p>これでMakefileなどのファイルが作成されます。続いてコンパイルできます。</p>
<pre><code>make
</code></pre>
<p>必要なら<code>make install</code>でインストールできます。既定では、ヘッダーは<code>/usr/local/include/cjson</code>に、ライブラリは<code>/usr/local/lib</code>にインストールされます。また、既存のCMakeのインストールを検出して使用しやすくするためのpkg-config用ファイルもインストールします。さらに、CMakeを使う他のプロジェクトからライブラリを見つけられるよう、CMake設定ファイルもインストールします。</p>
<p>CMakeに渡す次のオプションでビルド手順を変更できます。有効にするには<code>On</code>、無効にするには<code>Off</code>を指定します。</p>
<ul>
<li><code>-DENABLE_CJSON_TEST=On</code>: テストのビルドを有効にします。（既定で有効）</li>
<li><code>-DENABLE_CJSON_UTILS=On</code>: cJSON_Utilsのビルドを有効にします。（既定で無効）</li>
<li><code>-DENABLE_TARGET_EXPORT=On</code>: CMakeターゲットのエクスポートを有効にします。問題が起きる場合は無効にしてください。（既定で有効）</li>
<li><code>-DENABLE_CUSTOM_COMPILER_FLAGS=On</code>: 独自のコンパイラーフラグを有効にします。現在はClang、GCC、MSVCが対象です。問題が起きる場合は無効にしてください。（既定で有効）</li>
<li><code>-DENABLE_VALGRIND=On</code>: <a href="http://valgrind.org">valgrind</a>を使ってテストを実行します。（既定で無効）</li>
<li><code>-DENABLE_SANITIZERS=On</code>: 可能であれば<a href="https://github.com/google/sanitizers/wiki/AddressSanitizer">AddressSanitizer</a>と<a href="https://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html">UndefinedBehaviorSanitizer</a>を有効にしてcJSONをコンパイルします。（既定で無効）</li>
<li><code>-DENABLE_SAFE_STACK</code>: <a href="https://clang.llvm.org/docs/SafeStack.html">SafeStack</a>による計装処理を有効にします。現在はClangコンパイラーでのみ動作します。（既定で無効）</li>
<li><code>-DBUILD_SHARED_LIBS=On</code>: 共有ライブラリをビルドします。（既定で有効）</li>
<li><code>-DBUILD_SHARED_AND_STATIC_LIBS=On</code>: 共有ライブラリと静的ライブラリの両方をビルドします。（既定で無効）</li>
<li><code>-DCMAKE_INSTALL_PREFIX=/usr</code>: インストール先のプレフィックスを設定します。</li>
<li><code>-DENABLE_LOCALES=On</code>: localeconvメソッドの使用を有効にします。（既定で有効）</li>
<li><code>-DCJSON_OVERRIDE_BUILD_SHARED_LIBS=On</code>: <code>-DCJSON_BUILD_SHARED_LIBS</code>による<code>BUILD_SHARED_LIBS</code>の値の上書きを有効にします。</li>
<li><code>-DENABLE_CJSON_VERSION_SO</code>: cJSONのsoバージョンを有効にします。（既定で有効）</li>
</ul>
<p>Linuxディストリビューション向けにcJSONをパッケージ化する場合は、例えば次の手順を使うでしょう。</p>
<pre><code>mkdir build
cd build
cmake .. -DENABLE_CJSON_UTILS=On -DENABLE_CJSON_TEST=Off -DCMAKE_INSTALL_PREFIX=/usr
make
make DESTDIR=$pkgdir install
</code></pre>
<p>Windowsでは通常、Visual Studioの開発者コマンドプロンプト内でCMakeを実行し、Visual Studioソリューションファイルを作成します。具体的な手順はCMakeとMicrosoftの公式文書を参照し、好みの検索エンジンで調べてください。上記オプションの説明は概ね当てはまりますが、すべてがWindowsで動くわけではありません。</p>
<h4 id="makefile">Makefile</h4>
<p><strong>注意:</strong> この方法は非推奨です。可能な限りCMakeを使ってください。Makefileのサポートは不具合修正に限られます。</p>
<p>CMakeがなくてもGNU makeがあれば、Makefileを使ってcJSONをビルドできます。</p>
<p>ソースコードのディレクトリでこのコマンドを実行すると、静的・共有ライブラリと小さなテストプログラムが自動的にコンパイルされます。完全なテストスイートではありません。</p>
<pre><code>make all
</code></pre>
<p>必要なら<code>make install</code>でコンパイル済みライブラリをシステムにインストールできます。既定では、ヘッダーは<code>/usr/local/include/cjson</code>、ライブラリは<code>/usr/local/lib</code>にインストールされます。<code>PREFIX</code>と<code>DESTDIR</code>変数を設定すれば、この動作を変更できます: <code>make PREFIX=/usr DESTDIR=temp install</code>。アンインストールには<code>make PREFIX=/usr DESTDIR=temp uninstall</code>を使います。</p>
<h4 id="meson">Meson</h4>
<p>Mesonを使うプロジェクトでcjsonを利用するには、libcjsonへの依存関係を組み込む必要があります。</p>
<pre><code class="language-meson">project('c-json-example', 'c')

cjson = dependency('libcjson')

example = executable(
    'example',
    'example.c',
    dependencies: [cjson],
)
</code></pre>
<h4 id="vcpkg">Vcpkg</h4>
<p>依存関係マネージャー<a href="https://github.com/Microsoft/vcpkg">vcpkg</a>を使ってcJSONをダウンロードし、インストールできます。</p>
<pre><code>git clone https://github.com/Microsoft/vcpkg.git
cd vcpkg
./bootstrap-vcpkg.sh
./vcpkg integrate install
vcpkg install cjson
</code></pre>
<p>vcpkgのcJSONポートは、Microsoftのチームメンバーとコミュニティの貢献者が最新の状態に保っています。バージョンが古い場合は、vcpkgリポジトリで<a href="https://github.com/Microsoft/vcpkg">Issueまたはプルリクエストを作成</a>してください。</p>
<h3 id="including-cjson">cJSONのインクルード</h3>
<p>CMakeまたはMakefileでインストールした場合は、次のようにcJSONをインクルードできます。</p>
<pre><code class="language-c">#include &lt;cjson/cJSON.h&gt;
</code></pre>
<h3 id="data-structure">データ構造</h3>
<p>cJSONは、<code>cJSON</code>構造体型を使ってJSONデータを表します。</p>
<pre><code class="language-c">/* The cJSON structure: */
typedef struct cJSON
{
    struct cJSON *next;
    struct cJSON *prev;
    struct cJSON *child;
    int type;
    char *valuestring;
    /* writing to valueint is DEPRECATED, use cJSON_SetNumberValue instead */
    int valueint;
    double valuedouble;
    char *string;
} cJSON;
</code></pre>
<p>この型の要素はJSONの値を表します。型は<code>type</code>にビットフラグとして格納されます。（<strong>つまり、<code>type</code>の値を単純に比較するだけでは型を判定できません。</strong>）</p>
<p>要素の型を調べるには、対応する<code>cJSON_Is...</code>関数を使います。この関数は<code>NULL</code>チェックの後に型をチェックし、要素がその型かどうかを真偽値で返します。</p>
<p>型には次のいずれかを使用できます。</p>
<ul>
<li><code>cJSON_Invalid</code>（<code>cJSON_IsInvalid</code>で確認）: 値を持たない無効な要素を表します。要素の全バイトをゼロにすると、自動的にこの型になります。</li>
<li><code>cJSON_False</code>（<code>cJSON_IsFalse</code>で確認）: 真偽値<code>false</code>を表します。真偽値全般の確認には<code>cJSON_IsBool</code>も使えます。</li>
<li><code>cJSON_True</code>（<code>cJSON_IsTrue</code>で確認）: 真偽値<code>true</code>を表します。真偽値全般の確認には<code>cJSON_IsBool</code>も使えます。</li>
<li><code>cJSON_NULL</code>（<code>cJSON_IsNull</code>で確認）: <code>null</code>値を表します。</li>
<li><code>cJSON_Number</code>（<code>cJSON_IsNumber</code>で確認）: 数値を表します。値は<code>valuedouble</code>にdoubleとして格納され、<code>valueint</code>にも格納されます。整数の範囲を超える場合、<code>valueint</code>には<code>INT_MAX</code>または<code>INT_MIN</code>が使われます。</li>
<li><code>cJSON_String</code>（<code>cJSON_IsString</code>で確認）: 文字列を表します。ゼロ終端文字列の形で<code>valuestring</code>に格納されます。</li>
<li><code>cJSON_Array</code>（<code>cJSON_IsArray</code>で確認）: 配列を表します。<code>child</code>が配列の値を表す<code>cJSON</code>要素の連結リストを指すことで実装されています。要素は<code>next</code>と<code>prev</code>でつながれ、先頭要素は<code>prev.next == NULL</code>、末尾要素は<code>next == NULL</code>となります。</li>
<li><code>cJSON_Object</code>（<code>cJSON_IsObject</code>で確認）: オブジェクトを表します。配列と同じ方法で格納されますが、要素がキーを<code>string</code>に格納する点だけが異なります。</li>
<li><code>cJSON_Raw</code>（<code>cJSON_IsRaw</code>で確認）: <code>valuestring</code>にゼロ終端の文字配列として格納された、任意のJSONを表します。例えば、同じ静的JSONを何度も出力するのを避けて性能を高めるために使えます。cJSONは解析時にこの型を生成することはありません。また、有効なJSONかどうかのチェックも行いません。</li>
</ul>
<p>さらに、次の2つのフラグがあります。</p>
<ul>
<li><code>cJSON_IsReference</code>: <code>child</code>が指す要素、または<code>valuestring</code>、あるいはその両方を、この要素が所有していないことを示します。これらは参照にすぎません。そのため<code>cJSON_Delete</code>などの関数は、この要素だけを解放し、<code>child</code>や<code>valuestring</code>は解放しません。</li>
<li><code>cJSON_StringIsConst</code>: <code>string</code>が定数文字列を指していることを意味します。<code>cJSON_Delete</code>などの関数は<code>string</code>を解放しようとしません。</li>
</ul>
<h3 id="working-with-the-data-structure">データ構造の操作</h3>
<p>値の型ごとに、その型の要素を作成する<code>cJSON_Create...</code>関数があります。これらの関数はすべて、後から<code>cJSON_Delete</code>で削除できる<code>cJSON</code>構造体を割り当てます。いずれかの時点で削除しなければ、メモリーリークが起きることに注意してください。<br /><strong>重要</strong>: 要素をすでに配列やオブジェクトに追加した場合、その要素を<code>cJSON_Delete</code>で<strong>削除してはいけません</strong>。追加によって所有権が移り、配列やオブジェクトが削除される際に、その要素も削除されます。<code>cJSON_SetValuestring</code>で<code>cJSON_String</code>の<code>valuestring</code>を変更することもでき、その場合は以前の<code>valuestring</code>を手動で解放する必要はありません。</p>
<h4 id="basic-types">基本型</h4>
<ul>
<li><strong>null</strong>は<code>cJSON_CreateNull</code>で作成します。</li>
<li><strong>真偽値</strong>は<code>cJSON_CreateTrue</code>、<code>cJSON_CreateFalse</code>または<code>cJSON_CreateBool</code>で作成します。</li>
<li><strong>数値</strong>は<code>cJSON_CreateNumber</code>で作成します。<code>valuedouble</code>と<code>valueint</code>の両方が設定されます。整数の範囲を超える場合、<code>valueint</code>には<code>INT_MAX</code>または<code>INT_MIN</code>が使われます。</li>
<li><strong>文字列</strong>は<code>cJSON_CreateString</code>（文字列をコピー）または<code>cJSON_CreateStringReference</code>（文字列を直接参照）で作成します。後者では<code>cJSON_Delete</code>で<code>valuestring</code>が削除されず、その寿命の管理は利用者の責任となります。定数に便利です。</li>
</ul>
<h4 id="arrays">配列</h4>
<p>空の配列は<code>cJSON_CreateArray</code>で作成できます。<code>cJSON_CreateArrayReference</code>は、内容を「所有」しない配列を作成するために使えます。その内容は<code>cJSON_Delete</code>で削除されません。</p>
<p>配列の末尾に要素を追加するには<code>cJSON_AddItemToArray</code>を使います。<code>cJSON_AddItemReferenceToArray</code>を使うと、別の要素、配列、文字列への参照として要素を追加できます。この場合、<code>cJSON_Delete</code>はその要素の<code>child</code>や<code>valuestring</code>を削除しないので、別の場所ですでに使われていても二重解放は起きません。途中に挿入するには<code>cJSON_InsertItemInArray</code>を使います。指定した0始まりのインデックスに要素を挿入し、既存の要素をすべて右に移動します。</p>
<p>指定したインデックスの要素を配列から取り出し、そのまま使い続けるには<code>cJSON_DetachItemFromArray</code>を使います。取り外した要素を返すので、必ずポインターに代入してください。そうしないとメモリーリークが起きます。</p>
<p>要素を削除するには<code>cJSON_DeleteItemFromArray</code>を使います。<code>cJSON_DetachItemFromArray</code>と同じように動作しますが、取り外した要素を<code>cJSON_Delete</code>で削除します。</p>
<p>配列の要素をその場で置き換えることもできます。インデックスを指定する<code>cJSON_ReplaceItemInArray</code>、または要素へのポインターを渡す<code>cJSON_ReplaceItemViaPointer</code>を使います。<code>cJSON_ReplaceItemViaPointer</code>は失敗すると<code>0</code>を返します。内部では古い要素を取り外して削除し、新しい要素をその位置に挿入します。</p>
<p>配列の大きさを得るには<code>cJSON_GetArraySize</code>を使います。指定したインデックスの要素を得るには<code>cJSON_GetArrayItem</code>を使います。</p>
<p>配列は連結リストとして格納されるため、インデックスによる反復は効率が悪く、計算量は<code>O(n²)</code>になります。<code>cJSON_ArrayForEach</code>マクロを使えば<code>O(n)</code>で反復できます。</p>
<h4 id="objects">オブジェクト</h4>
<p>空のオブジェクトは<code>cJSON_CreateObject</code>で作成できます。<code>cJSON_CreateObjectReference</code>は、内容を「所有」しないオブジェクトを作成するために使えます。その内容は<code>cJSON_Delete</code>で削除されません。</p>
<p>オブジェクトに要素を追加するには<code>cJSON_AddItemToObject</code>を使います。名前（要素のキー、つまり<code>cJSON</code>構造体の<code>string</code>）が定数または参照である要素を追加するには<code>cJSON_AddItemToObjectCS</code>を使います。これにより、その名前は<code>cJSON_Delete</code>で解放されなくなります。<code>cJSON_AddItemReferenceToArray</code>を使うと、別のオブジェクト、配列、文字列への参照として要素を追加できます。この場合、<code>cJSON_Delete</code>はその要素の<code>child</code>や<code>valuestring</code>を削除しないので、別の場所ですでに使われていても二重解放は起きません。</p>
<p>要素をオブジェクトから取り出し、そのまま使い続けるには<code>cJSON_DetachItemFromObjectCaseSensitive</code>を使います。取り外した要素を返すので、必ずポインターに代入してください。そうしないとメモリーリークが起きます。</p>
<p>要素を削除するには<code>cJSON_DeleteItemFromObjectCaseSensitive</code>を使います。<code>cJSON_DetachItemFromObjectCaseSensitive</code>の後に<code>cJSON_Delete</code>を呼ぶのと同じように動作します。</p>
<p>オブジェクトの要素をその場で置き換えることもできます。キーを指定する<code>cJSON_ReplaceItemInObjectCaseSensitive</code>、または要素へのポインターを渡す<code>cJSON_ReplaceItemViaPointer</code>を使います。<code>cJSON_ReplaceItemViaPointer</code>は失敗すると<code>0</code>を返します。内部では古い要素を取り外して削除し、新しい要素をその位置に挿入します。</p>
<p>オブジェクトの大きさを得るには<code>cJSON_GetArraySize</code>を使えます。内部ではオブジェクトも配列として格納されているためです。</p>
<p>オブジェクトの要素にアクセスするには<code>cJSON_GetObjectItemCaseSensitive</code>を使います。</p>
<p>オブジェクトを反復するには、配列と同じ方法で<code>cJSON_ArrayForEach</code>マクロを使えます。</p>
<p>cJSONには、<code>cJSON_AddNullToObject</code>など、新しい要素を作成してオブジェクトに追加する便利な補助関数もあります。新しい要素へのポインターを返し、失敗すると<code>NULL</code>を返します。</p>
<h3 id="parsing-json">JSONの解析</h3>
<p>ゼロ終端文字列に入ったJSONは、<code>cJSON_Parse</code>で解析できます。</p>
<pre><code class="language-c">cJSON *json = cJSON_Parse(string);
</code></pre>
<p>ゼロ終端かどうかにかかわらず、文字列に入ったJSONは<code>cJSON_ParseWithLength</code>で解析できます。</p>
<pre><code class="language-c">cJSON *json = cJSON_ParseWithLength(string, buffer_length);
</code></pre>
<p>JSONを解析し、それを表す<code>cJSON</code>要素の木を割り当てます。関数が戻った後、使い終わった木を<code>cJSON_Delete</code>で解放する責任は、すべて利用者にあります。</p>
<p><code>cJSON_Parse</code>が使うアロケーターは、既定では<code>malloc</code>と<code>free</code>ですが、<code>cJSON_InitHooks</code>でグローバルに変更できます。</p>
<p>エラーが起きた場合、入力文字列内のエラー位置へのポインターを<code>cJSON_GetErrorPtr</code>で取得できます。ただし、マルチスレッド環境では競合状態を引き起こす可能性があるため、その場合は<code>return_parse_end</code>を指定して<code>cJSON_ParseWithOpts</code>を使うほうがよいでしょう。既定では、解析されたJSONの後に入力文字列中の文字が残っていてもエラーとはみなしません。</p>
<p>さらにオプションが必要なら、<code>cJSON_ParseWithOpts(const char *value, const char **return_parse_end, cJSON_bool require_null_terminated)</code>を使います。<code>return_parse_end</code>は入力文字列中のJSONの終端、またはエラー位置へのポインターを返します。これにより、スレッドセーフな方法で<code>cJSON_GetErrorPtr</code>を置き換えられます。<code>require_null_terminated</code>を<code>1</code>に設定すると、入力文字列にJSONの後のデータがある場合はエラーになります。</p>
<p>バッファー長を指定するオプションも必要なら、<code>cJSON_ParseWithLengthOpts(const char *value, size_t buffer_length, const char **return_parse_end, cJSON_bool require_null_terminated)</code>を使います。</p>
<h3 id="printing-json">JSONの出力</h3>
<p><code>cJSON</code>要素の木があれば、<code>cJSON_Print</code>で文字列として出力できます。</p>
<pre><code class="language-c">char *string = cJSON_Print(json);
</code></pre>
<p>文字列を割り当て、木のJSON表現を書き込みます。関数が戻った後、使い終わった文字列を自身のアロケーターで解放する責任は、すべて利用者にあります。通常は<code>free</code>ですが、<code>cJSON_InitHooks</code>で何を設定したかによって異なります。</p>
<p><code>cJSON_Print</code>は整形用の空白を入れて出力します。整形せずに出力するには<code>cJSON_PrintUnformatted</code>を使います。</p>
<p>出力する文字列のおおよその大きさが分かる場合は、<code>cJSON_PrintBuffered(const cJSON *item, int prebuffer, cJSON_bool fmt)</code>を使えます。<code>fmt</code>は空白による整形を有効・無効にする真偽値です。<code>prebuffer</code>は最初のバッファーの大きさを指定します。<code>cJSON_Print</code>では現在、最初のバッファーに256バイトを使います。出力中に空きがなくなると新しいバッファーを割り当て、古い内容をコピーしてから出力を続けます。</p>
<p>この動的なバッファー割り当ては、<code>cJSON_PrintPreallocated(cJSON *item, char *buffer, const int length, const cJSON_bool format)</code>で完全に避けられます。書き込み先バッファーへのポインターと、その長さを渡します。長さの限界に達すると出力に失敗して<code>0</code>を返し、成功すると<code>1</code>を返します。ただし、メモリーの容量が十分かどうかの見積もりは完全には正確でないため、実際に必要な量より5バイト多く用意してください。</p>
<h3 id="example">例</h3>
<p>この例では、次のJSONを作成し、解析します。</p>
<pre><code class="language-json">{
    &quot;name&quot;: &quot;Awesome 4K&quot;,
    &quot;resolutions&quot;: [
        {
            &quot;width&quot;: 1280,
            &quot;height&quot;: 720
        },
        {
            &quot;width&quot;: 1920,
            &quot;height&quot;: 1080
        },
        {
            &quot;width&quot;: 3840,
            &quot;height&quot;: 2160
        }
    ]
}
</code></pre>
<h4 id="printing">出力</h4>
<p>上のJSONを作成し、文字列として出力してみましょう。</p>
<pre><code class="language-c">//create a monitor with a list of supported resolutions
//NOTE: Returns a heap allocated string, you are required to free it after use.
char *create_monitor(void)
{
    const unsigned int resolution_numbers[3][2] = {
        {1280, 720},
        {1920, 1080},
        {3840, 2160}
    };
    char *string = NULL;
    cJSON *name = NULL;
    cJSON *resolutions = NULL;
    cJSON *resolution = NULL;
    cJSON *width = NULL;
    cJSON *height = NULL;
    size_t index = 0;

    cJSON *monitor = cJSON_CreateObject();
    if (monitor == NULL)
    {
        goto end;
    }

    name = cJSON_CreateString(&quot;Awesome 4K&quot;);
    if (name == NULL)
    {
        goto end;
    }
    /* after creation was successful, immediately add it to the monitor,
     * thereby transferring ownership of the pointer to it */
    cJSON_AddItemToObject(monitor, &quot;name&quot;, name);

    resolutions = cJSON_CreateArray();
    if (resolutions == NULL)
    {
        goto end;
    }
    cJSON_AddItemToObject(monitor, &quot;resolutions&quot;, resolutions);

    for (index = 0; index &lt; (sizeof(resolution_numbers) / (2 * sizeof(int))); ++index)
    {
        resolution = cJSON_CreateObject();
        if (resolution == NULL)
        {
            goto end;
        }
        cJSON_AddItemToArray(resolutions, resolution);

        width = cJSON_CreateNumber(resolution_numbers[index][0]);
        if (width == NULL)
        {
            goto end;
        }
        cJSON_AddItemToObject(resolution, &quot;width&quot;, width);

        height = cJSON_CreateNumber(resolution_numbers[index][1]);
        if (height == NULL)
        {
            goto end;
        }
        cJSON_AddItemToObject(resolution, &quot;height&quot;, height);
    }

    string = cJSON_Print(monitor);
    if (string == NULL)
    {
        fprintf(stderr, &quot;Failed to print monitor.\n&quot;);
    }

end:
    cJSON_Delete(monitor);
    return string;
}
</code></pre>
<p>別の方法として、<code>cJSON_Add...ToObject</code>補助関数を使えば、少し楽になります。</p>
<pre><code class="language-c">//NOTE: Returns a heap allocated string, you are required to free it after use.
char *create_monitor_with_helpers(void)
{
    const unsigned int resolution_numbers[3][2] = {
        {1280, 720},
        {1920, 1080},
        {3840, 2160}
    };
    char *string = NULL;
    cJSON *resolutions = NULL;
    size_t index = 0;

    cJSON *monitor = cJSON_CreateObject();

    if (cJSON_AddStringToObject(monitor, &quot;name&quot;, &quot;Awesome 4K&quot;) == NULL)
    {
        goto end;
    }

    resolutions = cJSON_AddArrayToObject(monitor, &quot;resolutions&quot;);
    if (resolutions == NULL)
    {
        goto end;
    }

    for (index = 0; index &lt; (sizeof(resolution_numbers) / (2 * sizeof(int))); ++index)
    {
        cJSON *resolution = cJSON_CreateObject();

        if (cJSON_AddNumberToObject(resolution, &quot;width&quot;, resolution_numbers[index][0]) == NULL)
        {
            goto end;
        }

        if (cJSON_AddNumberToObject(resolution, &quot;height&quot;, resolution_numbers[index][1]) == NULL)
        {
            goto end;
        }

        cJSON_AddItemToArray(resolutions, resolution);
    }

    string = cJSON_Print(monitor);
    if (string == NULL)
    {
        fprintf(stderr, &quot;Failed to print monitor.\n&quot;);
    }

end:
    cJSON_Delete(monitor);
    return string;
}
</code></pre>
<h4 id="parsing">解析</h4>
<p>この例では、上の形式のJSONを解析し、診断情報を出力しながら、モニターがFull HDの解像度に対応しているか調べます。</p>
<pre><code class="language-c">/* return 1 if the monitor supports full hd, 0 otherwise */
int supports_full_hd(const char * const monitor)
{
    const cJSON *resolution = NULL;
    const cJSON *resolutions = NULL;
    const cJSON *name = NULL;
    int status = 0;
    cJSON *monitor_json = cJSON_Parse(monitor);
    if (monitor_json == NULL)
    {
        const char *error_ptr = cJSON_GetErrorPtr();
        if (error_ptr != NULL)
        {
            fprintf(stderr, &quot;Error before: %s\n&quot;, error_ptr);
        }
        status = 0;
        goto end;
    }

    name = cJSON_GetObjectItemCaseSensitive(monitor_json, &quot;name&quot;);
    if (cJSON_IsString(name) &amp;&amp; (name-&gt;valuestring != NULL))
    {
        printf(&quot;Checking monitor \&quot;%s\&quot;\n&quot;, name-&gt;valuestring);
    }

    resolutions = cJSON_GetObjectItemCaseSensitive(monitor_json, &quot;resolutions&quot;);
    cJSON_ArrayForEach(resolution, resolutions)
    {
        cJSON *width = cJSON_GetObjectItemCaseSensitive(resolution, &quot;width&quot;);
        cJSON *height = cJSON_GetObjectItemCaseSensitive(resolution, &quot;height&quot;);

        if (!cJSON_IsNumber(width) || !cJSON_IsNumber(height))
        {
            status = 0;
            goto end;
        }

        if ((width-&gt;valuedouble == 1920) &amp;&amp; (height-&gt;valuedouble == 1080))
        {
            status = 1;
            goto end;
        }
    }

end:
    cJSON_Delete(monitor_json);
    return status;
}
</code></pre>
<p><code>cJSON_Parse</code>の結果以外にはNULLチェックがないことに注意してください。<code>cJSON_GetObjectItemCaseSensitive</code>がすでに<code>NULL</code>入力をチェックしているため、<code>NULL</code>値はそのまま伝播し、入力が<code>NULL</code>なら<code>cJSON_IsNumber</code>と<code>cJSON_IsString</code>は<code>0</code>を返します。</p>
<h3 id="caveats">注意事項</h3>
<h4 id="zero-character">ゼロ文字</h4>
<p>cJSONは、ゼロ文字<code>'\0'</code>または<code>\u0000</code>を含む文字列には対応していません。文字列がゼロ終端であるため、現在のAPIでは扱えません。</p>
<h4 id="character-encoding">文字エンコーディング</h4>
<p>cJSONはUTF-8でエンコードされた入力にのみ対応しています。ただし、無効なUTF-8入力も、多くの場合は拒否せずそのまま伝播します。入力に無効なUTF-8が含まれていない限り、出力は常に有効なUTF-8になります。</p>
<h4 id="c-standard">C規格</h4>
<p>cJSONはANSI C（C89、C90とも呼ばれます）で書かれています。コンパイラーやCライブラリがこの規格に従っていない場合、正しい動作は保証されません。</p>
<p>注意: ANSI CはC++ではないので、C++コンパイラーでコンパイルするべきではありません。ただし、CコンパイラーでコンパイルしてC++コードとリンクすることはできます。C++コンパイラーでコンパイルして動く場合もありますが、正しい動作は保証されません。</p>
<h4 id="floating-point-numbers">浮動小数点数</h4>
<p>cJSONは、IEEE754倍精度浮動小数点数以外の<code>double</code>実装を公式にはサポートしていません。他の実装でも動く可能性はありますが、それらで起きた不具合は無効な報告とみなされます。</p>
<p>cJSONが対応する浮動小数点リテラルの長さは、現在、最大63文字です。</p>
<h4 id="deep-nesting-of-arrays-and-objects">配列とオブジェクトの深い入れ子</h4>
<p>配列やオブジェクトが深く入れ子になっているとスタックオーバーフローが起きるため、cJSONは深すぎる入れ子に対応していません。これを防ぐため、深さを<code>CJSON_NESTING_LIMIT</code>で制限しています。既定値は1000で、コンパイル時に変更できます。</p>
<h4 id="thread-safety">スレッド安全性</h4>
<p>一般に、cJSONは<strong>スレッドセーフではありません</strong>。</p>
<p>ただし、次の条件を満たす場合はスレッドセーフです。</p>
<ul>
<li><code>cJSON_GetErrorPtr</code>を一切使わないこと。代わりに<code>cJSON_ParseWithOpts</code>の<code>return_parse_end</code>パラメーターを使えます。</li>
<li><code>cJSON_InitHooks</code>を呼ぶのは、いずれのスレッドでもcJSONを使い始める前だけであること。</li>
<li>cJSON関数のすべての呼び出しが戻るまでは、<code>setlocale</code>を一切呼ばないこと。</li>
</ul>
<h4 id="case-sensitivity">大文字と小文字の区別</h4>
<p>cJSONは当初、JSON規格に従わず、大文字と小文字を区別していませんでした。規格に準拠した正しい動作が必要なら、利用できる箇所では<code>CaseSensitive</code>関数を使ってください。</p>
<h4 id="duplicate-object-members">オブジェクトの重複メンバー</h4>
<p>cJSONは、同じ名前のメンバーが複数あるオブジェクトを含むJSONの解析と出力に対応しています。ただし、<code>cJSON_GetObjectItemCaseSensitive</code>は常に最初の1つだけを返します。</p>
<h1 id="enjoy-cjson">cJSONをお楽しみください！</h1>
<ul>
<li>Dave Gamble（原作者）</li>
<li>Max BrucknerとAlan Wang（現在のメンテナー）</li>
<li>その他の<a href="/docs/cjson/v1-7-19/ja/02-license/02-contributors/">cJSONの貢献者</a></li>
</ul>
</div>
<aside class="libx-source-notes" aria-label="libxによる原文注記">
<h2 id="libx-source-notes">libxによる原文注記</h2>
<p>上には上流の利用ガイド全体を保持しています。以下の編集上の注記では、固定版内の不一致を原文と区別して示します。</p>
<ul>
<li>READMEにはCMake 2.8.5以降と記載されています。同じリリースの<a href="https://github.com/DaveGamble/cJSON/blob/c859b25da02955fef659d658b8f324b5cde87be3/CMakeLists.txt#L2">CMakeLists.txtの2行目</a>ではCMake 3.0を要求しています。1.7.19をビルドする際は、固定版のビルド設定を確認してください。</li>
<li>Objectsの段落には<code>cJSON_AddItemReferenceToArray</code>と記載されています。固定版の<a href="https://github.com/DaveGamble/cJSON/blob/c859b25da02955fef659d658b8f324b5cde87be3/cJSON.h#L235-L236">ヘッダーの235〜236行目</a>には、オブジェクトのメンバーキーを含む<code>cJSON_AddItemReferenceToObject(cJSON *object, const char *string, cJSON *item)</code>が別途宣言されています。原文の段落はそのまま保持しています。</li>
<li>コード例は公開されたまま掲載しており、ここで実行したり、完全なエラー処理の実装例として検証したりはしていません。<code>create_monitor_with_helpers</code>を静的に確認すると、新しく作成したresolutionは、2回の数値追加が終わった後で初めて親配列に追加されています。先に追加処理が失敗すると、monitorを削除しても、まだ追加されていないそのオブジェクトは解放されません。また、要素を追加する関数の戻り値を確認していない箇所もあります。実運用に使う前に、メモリー割り当ての失敗と所有権を検討してください。</li>
</ul>
</aside>
