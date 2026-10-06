<div class="gnu-original-content">

<div id="Makefiles">

<span id="Writing-Makefiles"></span>

## 3 Makefileの書き方

<span id="index-makefile_002c-how-to-write" class="index-entry-id"></span>

システムを再コンパイルする方法を`make`に伝える情報は、*makefile*というデータベースを読み込むことで得られます。

------------------------------------------------------------------------

</div>

<div id="Makefile-Contents" class="section-level-extent">

<span id="What-Makefiles-Contain"></span>

### 3.1 Makefileに含まれるもの

makefileには、*明示的なルール*、*暗黙のルール*、*変数の定義*、*ディレクティブ*、*コメント*という5種類の要素が含まれます。ルール、変数、ディレクティブについては、後の章で詳しく説明します。

- *明示的なルール*は、そのルールの*ターゲット*と呼ばれる1つ以上のファイルを、いつ、どのように作り直すかを指定します。ターゲットが依存するほかのファイルを、ターゲットの*前提条件*として列挙し、ターゲットを作成または更新するためのレシピも指定できます。<a href="/docs/gnu-make/source/v4-4-1/manual.html#Rules" class="xref">ルールの書き方</a>を参照してください。 <span id="index-rule_002c-explicit_002c-definition-of" class="index-entry-id"></span> <span id="index-explicit-rule_002c-definition-of" class="index-entry-id"></span>

- *暗黙のルール*は、ファイルの名前に基づいて、ある種類のファイルをいつ、どのように作り直すかを指定します。ターゲットが、それと似た名前のファイルにどのように依存するかを記述し、そのターゲットを作成または更新するレシピを指定します。<a href="/docs/gnu-make/source/v4-4-1/manual.html#Implicit-Rules" class="xref">暗黙のルールの使用</a>を参照してください。 <span id="index-rule_002c-implicit_002c-definition-of" class="index-entry-id"></span> <span id="index-implicit-rule_002c-definition-of" class="index-entry-id"></span>

- *変数の定義*は、後でテキスト中に置換できる、変数の文字列値を指定する行です。簡単なmakefileの例では、すべてのオブジェクトファイルのリストを値とする`objects`変数を定義しています（<a href="/docs/gnu-make/v4-4-1/en/01-guide/05-simplifying-makefiles/#Variables-Simplify" class="pxref">変数でMakefileを簡単にする</a>を参照）。 <span id="index-variable-definition" class="index-entry-id"></span>

- *ディレクティブ*は、makefileを読み込んでいる間に、特別な処理を行うよう`make`に指示するものです。たとえば、次のような処理があります。
  - ほかのmakefileを読み込む（<a href="/docs/gnu-make/v4-4-1/en/01-guide/09-including-makefiles/#Include" class="pxref">ほかのMakefileの読み込み</a>を参照）。
  - makefileの一部を使うか無視するかを、変数の値に基づいて決める（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Conditionals" class="pxref">Makefileの条件付き部分</a>を参照）。
  - 複数行を含む文字列をそのまま使って変数を定義する（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Multi_002dLine" class="pxref">複数行の変数の定義</a>を参照）。 <span id="index-directive" class="index-entry-id"></span>

- makefileの行にある`#`は、*コメント*の開始を表します。`#`とそれ以降の行の内容は無視されます。ただし、行末のバックスラッシュが別のバックスラッシュでエスケープされていない場合、コメントは複数行にわたって続きます。コメントだけを含む行（その前に空白があってもかまいません）は、実質的に空行であり、無視されます。文字としての`#`が必要な場合は、バックスラッシュでエスケープしてください（例：`\#`）。コメントはmakefileのどの行にも書けますが、特定の状況では特別に扱われます。 <span id="index-comments_002c-in-makefile" class="index-entry-id"></span> <span id="index-_0023-_0028comments_0029_002c-in-makefile" class="index-entry-id"></span>

  変数参照や関数呼び出しの中ではコメントを使えません。その中にある`#`はすべて、コメントの開始ではなく、文字そのものとして扱われます。

  レシピ中のコメントは、ほかのレシピのテキストと同じようにシェルへ渡されます。解釈の方法はシェルが決めます。それがコメントかどうかは、シェル次第です。

  `define`ディレクティブの中では、変数を定義するときにコメントは無視されず、そのまま変数の値に保持されます。変数を展開すると、評価する文脈に応じて、`make`のコメントまたはレシピのテキストとして扱われます。

------------------------------------------------------------------------

<div id="Splitting-Lines" class="subsection-level-extent">

<span id="Splitting-Long-Lines"></span>

#### 3.1.1 長い行の分割

<span id="index-splitting-long-lines" class="index-entry-id"></span> <span id="index-long-lines_002c-splitting" class="index-entry-id"></span> <span id="index-backslash-_0028_005c_0029_002c-to-quote-newlines" class="index-entry-id"></span>

makefileは「行単位」の構文を使います。改行文字には特別な意味があり、文の終わりを示します。GNU `make`では、コンピュータのメモリ量が許す限り、文の行の長さに制限はありません。

ただし、折り返しやスクロールなしでは表示できないほど長い行は、読みにくくなります。そこで、文の途中に改行を入れ、makefileを読みやすい形に整えられます。途中の改行は、バックスラッシュ（`\`）でエスケープします。区別が必要な場合、エスケープの有無にかかわらず、改行で終わる1行を「物理行」と呼びます。一方、最初のエスケープされていない改行までの、エスケープされた改行をすべて含む完全な文を「論理行」と呼びます。

バックスラッシュと改行の組み合わせの扱いは、その文がレシピの行か、それ以外の行かによって異なります。レシピの行での扱いは、後で説明します（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Splitting-Recipe-Lines" class="pxref">レシピの行の分割</a>を参照）。

レシピの行以外では、バックスラッシュと改行は1つのスペース文字に変換されます。その後、その前後の空白類はすべて1つのスペースにまとめられます。これには、バックスラッシュの直前にあるすべての空白類、その改行後の行の先頭にあるすべての空白類、連続するバックスラッシュと改行の組み合わせも含まれます。

特殊ターゲット`.POSIX`が定義されている場合は、POSIX.2に準拠するため、この扱いが少し変わります。第1に、バックスラッシュの直前の空白類は削除されません。第2に、連続するバックスラッシュと改行はまとめられません。

<span id="Splitting-Without-Adding-Whitespace"></span>

#### 空白を追加せずに分割する

<span id="index-whitespace_002c-avoiding-on-line-split" class="index-entry-id"></span> <span id="index-removing-whitespace-from-split-lines" class="index-entry-id"></span>

行を分割したいけれど、空白を追加し*たくない*場合は、少し巧妙な方法を使えます。バックスラッシュと改行の組を、ドル記号、バックスラッシュ、改行という3文字に置き換えます。

<div class="example">

    var := one$\
           word



</div>

`make`がバックスラッシュと改行を取り除き、次の行との間を1つのスペースにまとめると、次と同等になります。

<div class="example">

    var := one$ word



</div>

その後、`make`は変数を展開します。変数参照`$ `は、「 」（スペース）という1文字の名前の変数を参照します。この変数は存在しないため空文字列に展開され、最終的な代入は次と同等になります。

<div class="example">

    var := oneword



</div>

------------------------------------------------------------------------

</div>

</div>

</div>
