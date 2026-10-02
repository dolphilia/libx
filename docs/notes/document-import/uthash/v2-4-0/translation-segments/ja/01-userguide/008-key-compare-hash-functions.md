<div class="sect2">

<!--libx-source-heading:hash_keycompare-->

### 別のキー比較関数を指定する

<div class="paragraph">

`HASH_FIND(hh, head, intfield, sizeof(int), out)` を呼び出すと、uthashはまず [`HASH_FUNCTION`](#hash_functions)`(intfield, sizeof(int), hashvalue)` を呼び出し、検索するバケット `b` を決めます。続いて、各要素 `elt` について、バケット `b` の中で、`elt->hh.hashv == hashvalue && elt.hh.keylen == sizeof(int) && HASH_KEYCMP(intfield, elt->hh.key, sizeof(int)) == 0` を評価します。`HASH_KEYCMP` は、`0` を返すことで、`elt` が一致しており返すべき要素であることを示します。0以外の値は、一致する要素の検索を続けるべきことを示します。

</div>

<div class="paragraph">

既定では、uthashは `HASH_KEYCMP` を `memcmp` の別名として定義します。`memcmp` を提供しないプラットフォームでは、独自の実装に置き換えられます。

</div>

<div class="listingblock">

<div class="content">

    #undef HASH_KEYCMP
    #define HASH_KEYCMP(a,b,len) bcmp(a, b, len)

</div>

</div>

<div class="paragraph">

キー比較関数を独自のものに置き換える別の理由として、単純には比較できない「キー」を使う場合があります。この場合、`HASH_FUNCTION` も独自のものに置き換える必要があります。

</div>

<div class="listingblock">

<div class="content">

    struct Key {
        short s;
        /* 2 bytes of padding */
        float f;
    };
    /* do not compare the padding bytes; do not use memcmp on floats */
    unsigned key_hash(struct Key *s) { return s + (unsigned)f; }
    bool key_equal(struct Key *a, struct Key *b) { return a.s == b.s && a.f == b.f; }

    #define HASH_FUNCTION(s,len,hashv) (hashv) = key_hash((struct Key *)s)
    #define HASH_KEYCMP(a,b,len) (!key_equal((struct Key *)a, (struct Key *)b))

</div>

</div>

<div class="paragraph">

キー比較関数を独自のものに置き換えるもう1つの理由は、正確性を犠牲にして速度を高めることです。uthashは、バケットを線形探索するとき、常に32ビットの `hashv` を先に比較し、`HASH_KEYCMP` を呼び出すのは `hashv` が等しい場合だけです。そのため、`HASH_KEYCMP` は、検索が成功するたびに少なくとも1回呼び出されます。良いハッシュ関数なら、`hashv` の比較が「偽陽性」の一致になるのは40億回に1回だけと期待できます。そのため、`HASH_KEYCMP` はほとんどの場合に `0` を返すと期待できます。検索が多数成功すると見込まれ、アプリケーションが時折の偽陽性を許容するなら、何もしない比較関数に置き換えることも考えられます。

</div>

<div class="listingblock">

<div class="content">

    #undef HASH_KEYCMP
    #define HASH_KEYCMP(a,b,len) 0  /* occasionally wrong, but very fast */

</div>

</div>

<div class="paragraph">

注意：グローバルな等値比較関数 `HASH_KEYCMP` は、`HASH_ADD_INORDER` に引数として渡す大小比較関数とは、まったく関係がありません。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:hash_functions-->

### 組み込みハッシュ関数

<div class="paragraph">

内部では、ハッシュ関数がキーをバケット番号へ変換します。既定のハッシュ関数を使うために何かする必要はありません。現在の既定はJenkinsです。

</div>

<div class="paragraph">

別の組み込みハッシュ関数を使うと、性能が向上するプログラムもあります。uthashには、別のハッシュ関数で性能が向上するかどうかを判断するための、簡単な解析ユーティリティーが同梱されています。

</div>

<div class="paragraph">

別のハッシュ関数を使うには、`-DHASH_FUNCTION=HASH_xyz` を付けてプログラムをコンパイルします。`xyz` は、以下に示すシンボル名のいずれかです。たとえば、次のようにします。

</div>

<div class="literalblock">

<div class="content">

    cc -DHASH_FUNCTION=HASH_BER -o program program.c

</div>

</div>

<div class="tableblock">

<table rules="none" width="50%" frame="border" cellspacing="0" cellpadding="4">
<caption class="title">表2. 組み込みハッシュ関数</caption>
<colgroup><col width="20%">
<col width="80%">
</colgroup><thead>
<tr>
<th align="center" valign="top">シンボル </th>
<th align="left" valign="top">   名前</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center" valign="top"><p class="table"><code>JEN</code></p></td>
<td align="left" valign="top"><p class="table">Jenkins（既定）</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>BER</code></p></td>
<td align="left" valign="top"><p class="table">Bernstein</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>SAX</code></p></td>
<td align="left" valign="top"><p class="table">Shift-Add-Xor</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>OAT</code></p></td>
<td align="left" valign="top"><p class="table">One-at-a-time</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>FNV</code></p></td>
<td align="left" valign="top"><p class="table">Fowler/Noll/Vo</p></td>
</tr>
<tr>
<td align="center" valign="top"><p class="table"><code>SFH</code></p></td>
<td align="left" valign="top"><p class="table">Paul Hsieh</p></td>
</tr>
</tbody>
</table>

</div>

<div class="sect3">

<!--libx-source-heading:_which_hash_function_is_best-->

#### どのハッシュ関数が最適ですか？

<div class="paragraph">

使用するキーの範囲に最適なハッシュ関数を簡単に判断できます。そのためには、まずデータ収集のためにプログラムを1回実行し、収集したデータを同梱の解析ユーティリティーで処理します。

</div>

<div class="paragraph">

まず、解析ユーティリティーをビルドしなければなりません。最上位のディレクトリから、次のように実行します。

</div>

<div class="literalblock">

<div class="content">

    cd tests/
    make

</div>

</div>

<div class="paragraph">

データ収集と解析の手順を、`test14.c` を使って示します（ここでは、`sh` の構文を使い、ファイル記述子3の出力をファイルへリダイレクトします）。

</div>

<div class="listingblock">

<div class="title">

keystatsの使用

</div>

<div class="content">

    % cc -DHASH_EMIT_KEYS=3 -I../src -o test14 test14.c
    % ./test14 3>test14.keys
    % ./keystats test14.keys
    fcn  ideal%     #items   #buckets  dup%  fl   add_usec  find_usec  del-all usec
    ---  ------ ---------- ---------- -----  -- ---------- ----------  ------------
    SFH   91.6%       1219        256    0%  ok         92        131            25
    FNV   90.3%       1219        512    0%  ok        107         97            31
    SAX   88.7%       1219        512    0%  ok        111        109            32
    OAT   87.2%       1219        256    0%  ok         99        138            26
    JEN   86.7%       1219        256    0%  ok         87        130            27
    BER   86.2%       1219        256    0%  ok        121        129            27

</div>

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">注意</div>
</td>
<td class="content"><code>-DHASH_EMIT_KEYS=3</code>の数値3はファイル記述子です。
プログラムが自身の用途に使っていないファイル記述子であれば、3の代わりに使えます。
<code>-DHASH_EMIT_KEYS=x</code>で有効にするデータ収集モードは、
本番のコードで使うべきではありません。</td>
</tr></tbody></table>

</div>

<div class="paragraph">

通常は、一覧の先頭にあるハッシュ関数を選べばよいでしょう。この例では `SFH` です。キーを最も均等に分布させる関数です。複数の関数で `ideal%` が同じ場合は、`find_usec` 列を見て最も高速なものを選んでください。

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_keystats_column_reference-->

#### keystatsの列リファレンス

<div class="dlist">

fcn  
ハッシュ関数のシンボル名

ideal%  
理想的なステップ数以内で検索できる、ハッシュテーブル内の要素の割合です（以下で詳しく説明します）。

\#items  
出力されたキーファイルから読み込んだキーの数

\#buckets  
すべてのキーを追加した後の、ハッシュ内のバケット数

dup%  
出力されたキーファイルで見つかった重複キーの割合です。キーの一意性を保つため、重複するキーは除去します（重複は通常起こるものです。たとえば、アプリケーションがハッシュへ要素を追加し、削除してから再び追加すると、そのキーは出力ファイルに2回書き込まれます）。

flags  
これは `ok` または `nx`（noexpand）です。後者は、[拡張の内部処理](#expansion)で説明する拡張抑制フラグが設定されている場合です。`noexpand` フラグが設定されるハッシュ関数の使用は推奨されません。

add_usec  
すべてのキーをハッシュに追加するために必要な実経過時間（マイクロ秒）

find_usec  
ハッシュ内のすべてのキーを検索するために必要な実経過時間（マイクロ秒）

del-all usec  
ハッシュ内のすべての要素を削除するために必要な実経過時間（マイクロ秒）

</div>

</div>

<div class="sect3">

<!--libx-source-heading:ideal-->

#### ideal%の意味

<div class="sidebarblock">

<div class="content">

<div class="title">

ideal%とは何ですか？

</div>

<div class="paragraph">

ハッシュ内の *n* 個の要素は、*k* 個のバケットに分配されます。理想的には、各バケットが均等に *(n/k)* 個の要素を持ちます。言い換えると、すべてのバケットを均等に使えば、バケットのチェーン内での要素の線形位置の最大値は *n/k* になります。一部のバケットが多用され、他のバケットの使用が少ない場合、多用されるバケットには、線形位置が *n/k* を超える要素が入ります。このような要素を、理想的でない要素とみなします。

</div>

<div class="paragraph">

お察しのとおり、`ideal%` は、ハッシュ内の理想的な要素の割合です。これらの要素は、バケットのチェーン内で有利な線形位置にあります。`ideal%` が100%に近づくほど、ハッシュテーブルの検索性能は定数時間に近づきます。

</div>

</div>

</div>

</div>

</div>

