<div class="sect2">

<!--libx-source-heading:hashscan-->

### hashscan

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">注意</div>
</td>
<td class="content">このユーティリティーは、LinuxとFreeBSD（8.1以降）でのみ利用できます。</td>
</tr></tbody></table>

</div>

<div class="paragraph">

`hashscan` というユーティリティーが、`tests/` ディレクトリに同梱されています。このディレクトリで `make` を実行すると、自動的にビルドされます。このツールは、実行中のプロセスを調べ、そのプログラムのメモリー内で見つけたuthashのテーブルを報告します。各テーブルのキーを、`keystats` に入力できる形式で保存することもできます。

</div>

<div class="paragraph">

`hashscan` の使用例を示します。まず、ビルドされていることを確認します。

</div>

<div class="literalblock">

<div class="content">

    cd tests/
    make

</div>

</div>

<div class="paragraph">

`hashscan` は調べる対象として実行中のプログラムを必要とするため、ハッシュテーブルを作ってからスリープする簡単なプログラムを、試験対象として起動します。

</div>

<div class="literalblock">

<div class="content">

    ./test_sleep &
    pid: 9711

</div>

</div>

<div class="paragraph">

試験用プログラムが起動したので、`hashscan` で調べてみましょう。

</div>

<div class="literalblock">

<div class="content">

    ./hashscan 9711
    Address            ideal    items  buckets mc fl bloom/sat fcn keys saved to
    ------------------ ----- -------- -------- -- -- --------- --- -------------
    0x862e038            81%    10000     4096 11 ok 16    14% JEN

</div>

</div>

<div class="paragraph">

すべてのキーを取り出し、`keystats` で外部解析したい場合は、`-k` フラグを追加します。

</div>

<div class="literalblock">

<div class="content">

    ./hashscan -k 9711
    Address            ideal    items  buckets mc fl bloom/sat fcn keys saved to
    ------------------ ----- -------- -------- -- -- --------- --- -------------
    0x862e038            81%    10000     4096 11 ok 16    14% JEN /tmp/9711-0.key

</div>

</div>

<div class="paragraph">

これで、`./keystats /tmp/9711-0.key` を実行し、このキー集合に最も適した特性を持つハッシュ関数を解析できます。

</div>

<div class="sect3">

<!--libx-source-heading:_hashscan_column_reference-->

#### hashscanの列リファレンス

<div class="dlist">

Address  
ハッシュテーブルの仮想アドレス

ideal  
理想的なステップ数以内で検索できる、テーブル内の要素の割合です。[\[ideal\]](#ideal)については、`keystats` の節を参照してください。

items  
ハッシュテーブル内の要素数

buckets  
ハッシュテーブル内のバケット数

mc  
ハッシュテーブル内で見つかった最大チェーン長です（uthashは通常、各バケットの要素を10個未満に保とうとします。場合によっては10の倍数が基準になります）。

fl  
フラグです（`ok`、または拡張抑制フラグが設定されている場合は `NX`）。

bloom/sat  
ハッシュテーブルがBloomフィルターを使っている場合は、そのサイズを2のべき乗で表した値です（たとえば16なら、フィルターのサイズは2^16ビットです）。2番目の数値は、ビットの「飽和度」を割合で表します。割合が低いほど、キャッシュミスを素早く識別できる利点が大きくなる可能性があります。

fcn  
ハッシュ関数のシンボル名

keys saved to  
キーを保存した場合の保存先ファイル

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

hashscanの仕組み

</div>

<div class="paragraph">

hashscanを実行すると、対象プロセスにアタッチし、そのプロセスを一時的に停止します。この短い停止中に、対象の仮想メモリーを走査してuthashのハッシュテーブルのシグネチャーを探します。次に、そのシグネチャーに有効なハッシュテーブルの構造が伴っているかを調べ、見つかったものを報告します。デタッチすると、対象プロセスは通常の実行を再開します。hashscanは「読み取り専用」で行われ、対象プロセスを変更しません。実行中のプロセスの瞬間的なスナップショットを解析するため、実行のたびに異なる結果を返す場合があります。

</div>

</div>

</div>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:expansion-->

### 拡張の内部処理

<div class="paragraph">

内部では、このハッシュはバケット数を管理し、各バケットに少数の要素だけが入るよう、十分な数のバケットを確保することを目指します。

</div>

<div class="sidebarblock">

<div class="content">

<div class="title">

バケット数が重要なのはなぜですか？

</div>

<div class="paragraph">

キーで要素を検索するとき、このハッシュは対応するバケットの要素を線形に走査します。線形走査を定数時間で行うには、各バケットの要素数に上限が必要です。必要に応じてバケット数を増やすことで、それを実現します。

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_normal_expansion-->

#### 通常の拡張

<div class="paragraph">

このハッシュは、各バケットの要素を10個未満に保とうとします。要素を追加することで、あるバケットがこの数を超える場合は、ハッシュ内のバケット数を2倍にし、新しいバケットへ要素を再分配します。理想的には、各バケットの要素数はそれまでの半分になります。

</div>

<div class="paragraph">

バケットの拡張は、必要に応じて自動的に、表に現れずに行われます。アプリケーションが、その発生時点を知る必要はありません。

</div>

<div class="sect4">

<!--libx-source-heading:_per_bucket_expansion_threshold-->

##### バケットごとの拡張しきい値

<div class="paragraph">

通常、すべてのバケットは、拡張を引き起こす同じしきい値（10個の要素）を共有しています。拡張処理中に、特定のバケットが多用されていると分かると、uthashはこの拡張しきい値をバケットごとに調整できます。

</div>

<div class="paragraph">

しきい値を調整すると、そのバケットでは10から10の倍数へ変更されます。何倍にするかは、実際のチェーン長が理想的な長さの何倍かに基づきます。ハッシュ関数が少数のバケットを多用していても、全体の分布は良好な場合に、過剰な拡張を減らすための実用的な対策です。ただし、全体の分布が悪くなりすぎると、uthashは方針を変えます。

</div>

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_inhibited_expansion-->

#### 拡張の抑制

<div class="paragraph">

通常、この仕組みを知ったり、気にしたりする必要はありません。特に、開発中に `keystats` ユーティリティーを使い、キーに適したハッシュ関数を選んだ場合はそうです。

</div>

<div class="paragraph">

ハッシュ関数によって、バケット間の要素の分布に偏りが生じる場合があります。適度な偏りなら問題ありません。チェーン長が増えると、通常のバケット拡張が行われます。ただし、キーの範囲にハッシュ関数が適していないために大きな偏りが生じると、拡張してもチェーン長を減らせない場合があります。

</div>

<div class="paragraph">

すべての要素を常にバケット0に入れる、非常に悪いハッシュ関数を想像してください。バケット数を何回2倍にしても、バケット0のチェーン長は変わりません。このような状況では、拡張を止め、*O(n)* の検索性能を受け入れるのが最善です。uthashはそう動作します。ハッシュ関数がキーに適していない場合でも、急激な破綻を避けながら性能が低下します。

</div>

<div class="paragraph">

2回連続のバケット拡張で、`ideal%` が50%未満になると、uthashはそのハッシュテーブルの拡張を抑制します。*バケット拡張抑制* フラグは、設定されると、ハッシュに要素がある限り有効なままです。拡張の抑制によって、`HASH_FIND` の性能が定数時間より悪くなる場合があります。

</div>

</div>

<div class="sect3">

<!--libx-source-heading:_diagnostic_hooks-->

#### 診断フック

<div class="paragraph">

uthashがバケットを拡張するとき、または *バケット拡張抑制* フラグを設定するときに実行される、2つの「通知」フックがあります。アプリケーションがこれらのフックを設定したり、これらのイベントに応じて何かしたりする必要はありません。主に診断用です。通常、両方のフックは未定義なので、コンパイル時に取り除かれ、何も生成されません。

</div>

<div class="paragraph">

`uthash_expand_fyi` フックを定義すると、uthashがバケットを拡張するたびにコードを実行できます。

</div>

<div class="listingblock">

<div class="content">

    #undef uthash_expand_fyi
    #define uthash_expand_fyi(tbl) printf("expanded to %u buckets\n", tbl->num_buckets)

</div>

</div>

<div class="paragraph">

`uthash_noexpand_fyi` フックを定義すると、uthashが *バケット拡張抑制* フラグを設定するたびにコードを実行できます。

</div>

<div class="listingblock">

<div class="content">

    #undef uthash_noexpand_fyi
    #define uthash_noexpand_fyi(tbl) printf("warning: bucket expansion inhibited\n")

</div>

</div>

</div>

</div>

