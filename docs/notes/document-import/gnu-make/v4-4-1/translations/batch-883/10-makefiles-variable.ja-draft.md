<div class="gnu-original-content">

<div id="MAKEFILES-Variable" class="section-level-extent">

<span id="The-Variable-MAKEFILES"></span>

### 3.4 変数`MAKEFILES`

<span id="index-makefile_002c-and-MAKEFILES-variable" class="index-entry-id"></span> <span id="index-including-_0028MAKEFILES-variable_0029" class="index-entry-id"></span> <span id="index-MAKEFILES" class="index-entry-id"></span>

環境変数`MAKEFILES`が定義されている場合、`make`はその値を、ほかのmakefileより先に読み込む追加のmakefile名のリスト（空白類で区切ったもの）とみなします。これは`include`ディレクティブとよく似た動作です。これらのファイルを探すため、さまざまなディレクトリを検索します（<a href="/docs/gnu-make/v4-4-1/en/01-guide/09-including-makefiles/#Include" class="pxref">ほかのMakefileの読み込み</a>を参照）。ただし、これらのmakefileや、それらが読み込むmakefileからデフォルトのゴールを選ぶことはありません。また、`MAKEFILES`に列挙されたファイルが見つからなくても、エラーにはなりません。

<span id="index-recursion_002c-and-MAKEFILES-variable" class="index-entry-id"></span>

`MAKEFILES`の主な用途は、再帰的に呼び出される`make`同士の通信です（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Recursion" class="pxref">makeの再帰的な使用</a>を参照）。通常、最上位の`make`を呼び出す前にこの環境変数を設定するのは望ましくありません。makefileを外側からいじらない方が、たいていはよいからです。ただし、特定のmakefileを指定せずに`make`を実行する場合は、`MAKEFILES`に指定したmakefileが、検索パスの定義などによって、組み込みの暗黙のルールがうまく働くよう補助できます（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Directory-Search" class="pxref">前提条件を探すためのディレクトリ検索</a>を参照）。

ログイン時に環境変数`MAKEFILES`を自動設定し、それを前提とするmakefileを書きたくなる利用者もいます。これは非常に悪い考えです。そのmakefileは、ほかの人が実行すると動作しなくなるからです。makefileに明示的な`include`ディレクティブを書く方が、はるかによい方法です。<a href="/docs/gnu-make/v4-4-1/en/01-guide/09-including-makefiles/#Include" class="xref">ほかのMakefileの読み込み</a>を参照してください。

------------------------------------------------------------------------

</div>

</div>
