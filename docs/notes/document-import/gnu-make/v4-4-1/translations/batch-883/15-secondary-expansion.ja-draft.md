<div class="gnu-original-content">

<div id="Secondary-Expansion" class="section-level-extent">

<span id="Secondary-Expansion-1"></span>

### 3.9 二次展開

<span id="index-secondary-expansion" class="index-entry-id"></span> <span id="index-expansion_002c-secondary" class="index-entry-id"></span> <span id="index-_002eSECONDEXPANSION" class="index-entry-id"></span>

前に、GNU `make`は読み込み段階とターゲット更新段階という、明確に分かれた2つの段階で動作すると説明しました（<a href="/docs/gnu-make/v4-4-1/en/01-guide/13-reading-makefiles/#Reading-Makefiles" class="pxref">makeによるMakefileの読み込み</a>を参照）。GNU Makeではさらに、makefileで定義した一部またはすべてのターゲットについて、前提条件*だけ*を*2回目に展開*する機能を有効にできます。この二次展開を行うには、その機能を使う最初の前提条件リストより前に、特殊ターゲット`.SECONDEXPANSION`を定義しなければなりません。

`.SECONDEXPANSION`が定義されていると、GNU `make`がターゲットの前提条件を調べる必要があるとき、前提条件は*2回目の展開*を受けます。ほとんどの場合、すべての変数参照や関数参照はmakefileの最初の解析中に展開済みなので、この二次展開には効果がありません。したがって、パーサーの二次展開段階を利用するには、makefileの変数参照や関数参照を*エスケープ*する必要があります。この場合、最初の展開では参照のエスケープを解除するだけで展開せず、展開を二次展開段階に残します。たとえば、次のmakefileを考えてください。

<div class="example">

    .SECONDEXPANSION:
    ONEVAR = onefile
    TWOVAR = twofile
    myfile: $(ONEVAR) $$(TWOVAR)



</div>

最初の展開段階の後、ターゲット`myfile`の前提条件リストは`onefile`と`$(TWOVAR)`になります。最初の（エスケープされていない）変数参照`ONEVAR`は展開されますが、2つ目の（エスケープされた）変数参照は、変数参照として認識されず、単にエスケープが解除されます。二次展開では、最初の語は再び展開されますが、変数参照や関数参照を含まないため、値は`onefile`のままです。一方、2つ目の語は今度は通常の`TWOVAR`への参照となり、値`twofile`に展開されます。最終的には、`onefile`と`twofile`という2つの前提条件が得られます。

もちろん、これはあまり興味深い例ではありません。両方の変数をエスケープせずに前提条件リストに書けば、より簡単に同じ結果を得られるからです。変数を再設定すると、違いが明らかになります。次の例を考えてください。

<div class="example">

    .SECONDEXPANSION:
    AVAR = top
    onefile: $(AVAR)
    twofile: $$(AVAR)
    AVAR = bottom



</div>

ここでは、`onefile`の前提条件は即時展開され、値`top`になります。一方、`twofile`の前提条件は二次展開まで完全には展開されず、値`bottom`になります。

これは少しだけ面白い例ですが、この機能の本当の力が分かるのは、二次展開が常に、そのターゲットの自動変数が有効な範囲で行われると気づいたときです。つまり、二次展開中に`$@`や`$*`などの変数を使うと、レシピ中と同じように、期待どおりの値になります。必要なのは、`$`をエスケープして展開を遅らせることだけです。また、二次展開は明示的なルールと暗黙のルール（パターンルール）の両方で行われます。これを知ると、この機能の用途は大きく広がります。たとえば、次のように使えます。

<div class="example">

    .SECONDEXPANSION:
    main_OBJS := main.o try.o test.o
    lib_OBJS := lib.o api.o

    main lib: $$($$@_OBJS)



</div>

ここでは、最初の展開後、ターゲット`main`と`lib`の前提条件はいずれも`$($@_OBJS)`になります。二次展開中、変数`$@`にはターゲットの名前が設定されるので、`main`の展開では`$(main_OBJS)`、つまり`main.o try.o test.o`が得られます。一方、`lib`の二次展開では`$(lib_OBJS)`、つまり`lib.o api.o`が得られます。

適切にエスケープされていれば、ここで関数を組み合わせることもできます。

<div class="example">

    main_SRCS := main.c try.c test.c
    lib_SRCS := lib.c api.c

    .SECONDEXPANSION:
    main lib: $$(patsubst %.c,%.o,$$($$@_SRCS))



</div>

この版では、オブジェクトファイルではなくソースファイルを指定できますが、得られる前提条件リストは前の例と同じです。

二次展開段階での自動変数の評価、特にターゲット名の変数`$$@`の評価は、レシピ内での評価と似た動作です。ただし、`make`が理解するルール定義の種類ごとに、微妙な違いや境界的なケースがあります。各自動変数の使い方の細かな違いを、以下で説明します。

<span id="Secondary-Expansion-of-Explicit-Rules"></span>

#### 明示的なルールの二次展開

<span id="index-secondary-expansion-and-explicit-rules" class="index-entry-id"></span> <span id="index-explicit-rules_002c-secondary-expansion-of" class="index-entry-id"></span>

明示的なルールの二次展開では、`$$@`はターゲットのファイル名に、`$$%`はターゲットがアーカイブのメンバーである場合に、そのメンバー名に評価されます。変数`$$<`は、このターゲットの最初のルールにある最初の前提条件に評価されます。`$$^`と`$$+`は、同じターゲットについて*すでに現れたルール*のすべての前提条件のリストに評価されます（`$$+`では重複を残し、`$$^`では取り除きます）。次の例は、これらの動作を理解する助けになります。

<div class="example">

    .SECONDEXPANSION:

    foo: foo.1 bar.1 $$< $$^ $$+    # line #1

    foo: foo.2 bar.2 $$< $$^ $$+    # line #2

    foo: foo.3 bar.3 $$< $$^ $$+    # line #3



</div>

最初の前提条件リストでは、3つの変数（`$$<`、`$$^`、`$$+`）はすべて空文字列に展開されます。2つ目では、それぞれ`foo.1`、`foo.1 bar.1`、`foo.1 bar.1`という値になります。3つ目では、それぞれ`foo.1`、`foo.1 bar.1 foo.2 bar.2`、`foo.1 bar.1 foo.2 bar.2 foo.1 foo.1 bar.1 foo.1 bar.1`という値になります。

ルールはmakefileに現れる順に二次展開されます。ただし、レシピを持つルールは常に最後に評価されます。

変数`$$?`と`$$*`は使えず、空文字列に展開されます。

<span id="Secondary-Expansion-of-Static-Pattern-Rules"></span>

#### 静的パターンルールの二次展開

<span id="index-secondary-expansion-and-static-pattern-rules" class="index-entry-id"></span> <span id="index-static-pattern-rules_002c-secondary-expansion-of" class="index-entry-id"></span>

静的パターンルールの二次展開は、1つの例外を除き、上記の明示的なルールと同じです。静的パターンルールでは、変数`$$*`にパターンの語幹（stem）が設定されます。明示的なルールと同じく、`$$?`は使えず、空文字列に展開されます。

<span id="Secondary-Expansion-of-Implicit-Rules"></span>

#### 暗黙のルールの二次展開

<span id="index-secondary-expansion-and-implicit-rules" class="index-entry-id"></span> <span id="index-implicit-rules_002c-secondary-expansion-of" class="index-entry-id"></span>

`make`は暗黙のルールを探すとき、ターゲットのパターンが一致する各ルールについて、語幹を置換してから二次展開を行います。自動変数の値は、静的パターンルールと同じ方法で決まります。たとえば、次のようになります。

<div class="example">

    .SECONDEXPANSION:

    foo: bar

    foo foz: fo%: bo%

    %oo: $$< $$^ $$+ $$*



</div>

ターゲット`foo`について暗黙のルールを試すと、`$$<`は`bar`に、`$$^`は`bar boo`に、`$$+`も`bar boo`に、`$$*`は`f`に展開されます。

<a href="/docs/gnu-make/source/v4-4-1/manual.html#Implicit-Rule-Search" class="ref">暗黙のルールの検索アルゴリズム</a>で説明するディレクトリ接頭辞（D）は、展開後に、前提条件リスト中のすべてのパターンに付加される点に注意してください。たとえば、次のようになります。

<div class="example">

    .SECONDEXPANSION:

    /tmp/foo.o:

    %.o: $$(addsuffix /%.c,foo bar) foo.h
            @echo $^



</div>

二次展開とディレクトリ接頭辞の復元後に表示される前提条件リストは、`/tmp/foo/foo.c /tmp/bar/foo.c foo.h`になります。この復元を望まない場合は、前提条件リストで`%`の代わりに`$$*`を使えます。

------------------------------------------------------------------------

</div>

</div>
