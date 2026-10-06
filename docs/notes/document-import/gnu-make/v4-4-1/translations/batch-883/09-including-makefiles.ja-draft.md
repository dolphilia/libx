<div class="gnu-original-content">

<div id="Include" class="section-level-extent">

<span id="Including-Other-Makefiles"></span>

### 3.3 ほかのMakefileの読み込み

<span id="index-including-other-makefiles" class="index-entry-id"></span> <span id="index-makefile_002c-including" class="index-entry-id"></span> <span id="index-include" class="index-entry-id"></span>

`include`ディレクティブは、現在のmakefileの読み込みを中断し、1つ以上のほかのmakefileを読み込んでから再開するよう、`make`に指示します。makefile中の、次のような行です。

<div class="example">

    include filenames...



</div>

`filenames`には、シェルのファイル名パターンを含められます。`filenames`が空なら、何も読み込まれず、エラーも表示されません。 <span id="index-shell-file-name-pattern-_0028in-include_0029" class="index-entry-id"></span> <span id="index-shell-wildcards-_0028in-include_0029" class="index-entry-id"></span> <span id="index-wildcard_002c-in-include" class="index-entry-id"></span>

行の先頭に余分なスペースを置いてもかまいません。これらは無視されます。ただし、最初の文字はタブ（または`.RECIPEPREFIX`の値）であってはいけません。タブで始まる行はレシピの行とみなされます。`include`とファイル名の間、およびファイル名同士の間には空白類が必要です。そこやディレクティブの末尾にある余分な空白類は無視されます。行末には`#`で始まるコメントを書けます。ファイル名に変数参照や関数参照が含まれている場合は、それらが展開されます。<a href="/docs/gnu-make/source/v4-4-1/manual.html#Using-Variables" class="xref">変数の使い方</a>を参照してください。

たとえば、`a.mk`、`b.mk`、`c.mk`という3つの`.mk`ファイルがあり、`$(bar)`が`bish bash`に展開されるなら、次の式は、

<div class="example">

    include foo *.mk $(bar)



</div>

次と同等になります。

<div class="example">

    include foo a.mk b.mk c.mk bish bash



</div>

`make`は`include`ディレクティブを処理すると、そのディレクティブを含むmakefileの読み込みを中断し、列挙された各ファイルを順番に読み込みます。それが終わると、ディレクティブのあるmakefileの読み込みを再開します。

`include`を使う場面の1つは、別々のディレクトリにある個別のmakefileで処理する複数のプログラムが、共通の変数定義（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Setting" class="pxref">変数の設定</a>を参照）やパターンルール（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Pattern-Rules" class="pxref">パターンルールの定義と再定義</a>を参照）を必要とする場合です。

もう1つは、ソースファイルから前提条件を自動生成したい場合です。前提条件を、主となるmakefileから読み込むファイルに入れられます。この方法は、ほかのバージョンの`make`で従来行われていたように、何らかの方法で主となるmakefileの末尾に前提条件を追加する方法より、一般にすっきりしています。<a href="/docs/gnu-make/source/v4-4-1/manual.html#Automatic-Prerequisites" class="xref">前提条件の自動生成</a>を参照してください。 <span id="index-prerequisites_002c-automatic-generation" class="index-entry-id"></span> <span id="index-automatic-generation-of-prerequisites" class="index-entry-id"></span> <span id="index-generating-prerequisites-automatically" class="index-entry-id"></span>

<span id="index-_002dI" class="index-entry-id"></span> <span id="index-_002d_002dinclude_002ddir" class="index-entry-id"></span> <span id="index-included-makefiles_002c-default-directories" class="index-entry-id"></span> <span id="index-default-directories-for-included-makefiles" class="index-entry-id"></span> <span id="index-_002fusr_002fgnu_002finclude" class="index-entry-id"></span> <span id="index-_002fusr_002flocal_002finclude" class="index-entry-id"></span> <span id="index-_002fusr_002finclude" class="index-entry-id"></span>

指定した名前がスラッシュで始まらず（GNU MakeがMS-DOS / MS-Windowsのパス対応を有効にしてコンパイルされている場合は、ドライブ文字とコロンでも始まらず）、現在のディレクトリで見つからない場合は、ほかのいくつかのディレクトリを探します。まず、`-I`または`--include-dir`オプションで指定したディレクトリを探します（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Options-Summary" class="pxref">オプションの一覧</a>を参照）。次に、存在するなら、`prefix/include`（通常は`/usr/local/include` <a href="/docs/gnu-make/v4-4-1/en/01-guide/09-including-makefiles/#FOOT1" id="DOCF1" class="footnote"><sup>1</sup></a>）、`/usr/gnu/include`、`/usr/local/include`、`/usr/include`の順で探します。

`.INCLUDE_DIRS`変数には、makeが読み込むファイルを探すディレクトリの現在のリストが格納されます。<a href="/docs/gnu-make/source/v4-4-1/manual.html#Special-Variables" class="xref">その他の特殊変数</a>を参照してください。

これらのデフォルトのディレクトリを探させないようにするには、コマンドラインに`-I`オプションと特殊な値`-`を追加します（例：`-I-`）。これにより、`make`はデフォルトのディレクトリを含め、すでに設定されているインクルード用ディレクトリをすべて忘れます。

読み込もうとするmakefileがこれらのどのディレクトリでも見つからなくても、ただちに致命的なエラーにはなりません。`include`を含むmakefileの処理は続きます。すべてのmakefileを読み終えると、`make`は古くなっているものや存在しないものを作り直そうとします。<a href="/docs/gnu-make/v4-4-1/en/01-guide/11-remaking-makefiles/#Remaking-Makefiles" class="xref">Makefileの再生成</a>を参照してください。makefileを作り直すルールが見つからなかった場合、またはルールは見つかったもののレシピが失敗した場合に初めて、`make`はmakefileがないことを致命的なエラーと判断します。

存在しない、または作り直せないmakefileを、エラーメッセージなしで単に無視してほしい場合は、`include`の代わりに、次のように`-include`ディレクティブを使います。

<div class="example">

    -include filenames...



</div>

これは、`filenames`のいずれか（または、そのいずれかのファイルの前提条件のいずれか）が存在しない、あるいは作り直せない場合に、エラーも警告も出さないという点を除き、すべて`include`と同じように動作します。

ほかの一部の`make`実装との互換性のため、`sinclude`も`-include`の別名になっています。

------------------------------------------------------------------------

</div>

<div class="gnu-source-footnote">

##### <a href="/docs/gnu-make/v4-4-1/en/01-guide/09-including-makefiles/#DOCF1" id="FOOT1">(1)</a>

MS-DOSおよびMS-Windows向けにコンパイルされたGNU Makeは、`prefix`がDJGPPのディレクトリ階層のルートに定義されているかのように動作します。

</div>

</div>
