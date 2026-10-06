<div class="gnu-original-content">

<div id="Parsing-Makefiles" class="section-level-extent">

<span id="How-Makefiles-Are-Parsed"></span>

### 3.8 Makefileの解析

<span id="index-parsing-makefiles" class="index-entry-id"></span> <span id="index-makefiles_002c-parsing" class="index-entry-id"></span>

GNU `make`はmakefileを1行ずつ解析します。解析は次の手順で進みます。

1. バックスラッシュでエスケープされた行を含む、完全な論理行を読み込みます（<a href="/docs/gnu-make/v4-4-1/en/01-guide/07-makefile-contents/#Splitting-Lines" class="pxref">長い行の分割</a>を参照）。
2. コメントを取り除きます（<a href="/docs/gnu-make/v4-4-1/en/01-guide/07-makefile-contents/#Makefile-Contents" class="pxref">Makefileに含まれるもの</a>を参照）。
3. 行がレシピの接頭文字で始まり、現在ルールの文脈にいる場合は、その行を現在のレシピに追加し、次の行を読み込みます（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Recipe-Syntax" class="pxref">レシピの構文</a>を参照）。
4. 行の中で*即時*展開の文脈にある要素を展開します（<a href="/docs/gnu-make/v4-4-1/en/01-guide/13-reading-makefiles/#Reading-Makefiles" class="pxref">makeによるMakefileの読み込み</a>を参照）。
5. 行を走査して`:`や`=`などの区切り文字を探し、その行がマクロへの代入かルールかを判定します（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Recipe-Syntax" class="pxref">レシピの構文</a>を参照）。
6. 得られた操作を内部に取り込み、次の行を読み込みます。

この方式の重要な帰結は、*1行であるなら*、マクロを完全なルールに展開できるということです。次の例は動作します。

<div class="example">

    myrule = target : ; echo built

    $(myrule)



</div>

しかし、次の例は動作しません。`make`は、行を展開した後に、再び行に分割することはないからです。

<div class="example">

    define myrule
    target:
            echo built
    endef

    $(myrule)



</div>

上のmakefileでは、レシピを持つルールではなく、`target: echo built`と書かれているかのように、前提条件が`echo`と`built`であるターゲット`target`が定義されます。展開が完了した後も行の中に残っている改行は、通常の空白類として無視されます。

複数行のマクロを正しく展開するには、`eval`関数を使う必要があります。これにより、展開されたマクロの結果に対して`make`のパーサーが実行されます（<a href="/docs/gnu-make/source/v4-4-1/manual.html#Eval-Function" class="pxref">eval関数</a>を参照）。

------------------------------------------------------------------------

</div>

</div>
