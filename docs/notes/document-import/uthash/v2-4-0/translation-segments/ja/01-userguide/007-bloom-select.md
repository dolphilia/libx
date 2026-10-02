<div class="sect2">

<!--libx-source-heading:_bloom_filter_faster_misses-->

### Bloomフィルター（検索失敗を高速化）

<div class="paragraph">

検索失敗（`HASH_FIND` の結果が `NULL` になること）がある程度の割合で発生するプログラムは、組み込みのBloomフィルターから恩恵を受ける可能性があります。検索がすべて成功するプログラムではわずかな性能低下が生じるため、既定では無効です。また、削除を行うプログラムではBloomフィルターを使うべきではありません。正しく動作しますが、削除によってフィルターの利点が減るためです。有効にするには、次のように `-DHASH_BLOOM=n` を付けてコンパイルするだけです。

</div>

<div class="literalblock">

<div class="content">

    -DHASH_BLOOM=27

</div>

</div>

<div class="paragraph">

この数値は32までの任意の値を指定でき、以下に示すように、フィルターが使用するメモリー量を決めます。より多くのメモリーを使うとフィルターの精度が高まり、検索失敗をより早く打ち切ることで、プログラムを高速化できる可能性があります。

</div>

<div class="tableblock">

<table rules="none" width="50%" frame="border" cellspacing="0" cellpadding="4">
<caption class="title">表1. nの値ごとのBloomフィルターのサイズ</caption>
<colgroup><col width="25%">
<col width="75%">
</colgroup><thead>
<tr>
<th align="left" valign="top"> n   </th>
<th align="left" valign="top"> Bloomフィルターのサイズ（ハッシュテーブルごと）</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>16</code></p></td>
<td align="left" valign="top"><p class="table">8キロバイト</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>20</code></p></td>
<td align="left" valign="top"><p class="table">128キロバイト</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>24</code></p></td>
<td align="left" valign="top"><p class="table">2メガバイト</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>28</code></p></td>
<td align="left" valign="top"><p class="table">32メガバイト</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>32</code></p></td>
<td align="left" valign="top"><p class="table">512メガバイト</p></td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

Bloomフィルターは、性能だけに関わる機能です。ハッシュ操作の結果を変えることは一切ありません。プログラムに適しているかどうかを判断する唯一の方法は、試してみることです。Bloomフィルターのサイズとして妥当な値は16-32ビットです。

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_select-->

### 選択

<div class="paragraph">

実験的な *選択* 操作が用意されています。指定した条件を満たす要素を、元のハッシュから宛先のハッシュへ挿入します。`HASH_ADD` を使う場合よりもいくらか効率よく挿入できます。選択した要素のキーについて、ハッシュ関数を再計算しないためです。この操作は、元のハッシュから要素を取り除きません。選択した要素は、両方のハッシュに存在するようになります。宛先のハッシュにすでに要素があっても構いません。選択した要素は、そこに追加されます。構造体を `HASH_SELECT` で使うには、2つ以上のハッシュハンドルが必要です（[複数テーブルへの登録](#multihash)で説明したように、構造体は同時に多くのハッシュテーブルに存在できますが、テーブルごとに別々のハッシュハンドルが必要です）。

</div>

<div class="literalblock">

<div class="content">

    user_t *users = NULL;   /* hash table of users */
    user_t *admins = NULL;  /* hash table of admins */

</div>

</div>

<div class="literalblock">

<div class="content">

    typedef struct {
        int id;
        UT_hash_handle hh;  /* handle for users hash */
        UT_hash_handle ah;  /* handle for admins hash */
    } user_t;

</div>

</div>

<div class="paragraph">

利用者を何人か追加した後、IDが1024未満の管理者だけを選択したいとしましょう。

</div>

<div class="literalblock">

<div class="content">

    #define is_admin(x) (((user_t*)x)->id < 1024)
    HASH_SELECT(ah, admins, hh, users, is_admin);

</div>

</div>

<div class="paragraph">

最初の2つの引数は *宛先* のハッシュハンドルとハッシュテーブル、次の2つは *元* のハッシュハンドルとハッシュテーブル、最後の引数は *選択条件* です。ここではマクロ `is_admin(x)` を使っていますが、関数を使っても構いません。

</div>

<div class="literalblock">

<div class="content">

    int is_admin(const void *userv) {
      user_t *user = (const user_t*)userv;
      return (user->id < 1024) ? 1 : 0;
    }

</div>

</div>

<div class="paragraph">

選択条件が常に真になる場合、この操作は実質的に、元のハッシュを宛先のハッシュへ *マージ* します。

</div>

<div class="paragraph">

`HASH_SELECT` は、元のハッシュから要素を取り除かずに宛先へ追加するため、元のハッシュテーブルは変わりません。宛先のハッシュテーブルは、元のハッシュテーブルと同じであってはなりません。

</div>

<div class="paragraph">

`HASH_SELECT` の使用例は、`tests/test36.c` に収録されています。

</div>

</div>

