<div class="sect1">

<!--libx-source-heading:Macro_reference-->

## マクロリファレンス

<div class="sectionbody">

<div class="sect2">

<!--libx-source-heading:_convenience_macros-->

### 便利マクロ

<div class="paragraph">

便利マクロは汎用マクロと同じ操作を行いますが、必要な引数が少なくなっています。

</div>

<div class="paragraph">

便利マクロを使うには、次の条件を満たす必要があります。

</div>

<div class="olist arabic">

1.  構造体の`UT_hash_handle`フィールドの名前が`hh`であること。

2.  追加または検索では、キーフィールドの型が`int`、`char[]`、またはポインターであること。

</div>

<div class="tableblock">

<table rules="none" width="90%" frame="border" cellspacing="0" cellpadding="4">
<caption class="title">表3. 便利マクロ</caption>
<colgroup><col width="25%">
<col width="75%">
</colgroup><thead>
<tr>
<th align="left" valign="top">マクロ</th>
<th align="left" valign="top">引数</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_INT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_INT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND_INT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, key_ptr, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_STR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_STR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND_STR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, key_ptr, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_PTR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_PTR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, keyfield_name, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND_PTR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, key_ptr, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_DEL</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_SORT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_COUNT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(head)</code></p></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<!--libx-source-heading:_general_macros-->

### 汎用マクロ

<div class="paragraph">

これらのマクロは、ハッシュ内の項目を追加・検索・削除・ソートします。`UT_hash_handle`の名前が`hh`以外の場合や、キーのデータ型が`int`または`char[]`ではない場合には、汎用マクロを使う必要があります。

</div>

<div class="tableblock">

<table rules="none" width="90%" frame="border" cellspacing="0" cellpadding="4">
<caption class="title">表4. 汎用マクロ</caption>
<colgroup><col width="25%">
<col width="75%">
</colgroup><thead>
<tr>
<th align="left" valign="top">マクロ</th>
<th align="left" valign="top">引数</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_BYHASHVALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, hashv, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_KEYPTR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_KEYPTR_BYHASHVALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, hashv, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_BYHASHVALUE_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, hashv, item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_KEYPTR_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ADD_KEYPTR_BYHASHVALUE_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, hashv, item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_BYHASHVALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, hashv, item_ptr, replaced_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, item_ptr, replaced_item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_REPLACE_BYHASHVALUE_INORDER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, keyfield_name, key_len, hashv, item_ptr, replaced_item_ptr, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_FIND_BYHASHVALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, key_ptr, key_len, hashv, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_DELETE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_VALUE</code></p></td>
<td align="left" valign="top"><p class="table"><code>(key_ptr, key_len, hashv)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_SRT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, cmp)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_CNT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_CLEAR</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_SELECT</code></p></td>
<td align="left" valign="top"><p class="table"><code>(dst_hh_name, dst_head, src_hh_name, src_head, condition)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_ITER</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head, item_ptr, tmp_item_ptr)</code></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><code>HASH_OVERHEAD</code></p></td>
<td align="left" valign="top"><p class="table"><code>(hh_name, head)</code></p></td>
</tr>
</tbody>
</table>

</div>

<div class="admonitionblock">

<table><tbody><tr>
<td class="icon">
<div class="title">注意</div>
</td>
<td class="content"><code>HASH_ADD_KEYPTR</code>は、構造体がキー自体ではなく、
キーへのポインターを保持している場合に使います。</td>
</tr></tbody></table>

</div>

<div class="paragraph">

`HASH_VALUE`と`..._BYHASHVALUE`マクロは、主として、異なるハッシュテーブル内の異なる構造体が同一のキーを持つという特殊な場合に使う性能向上の仕組みです。ハッシュ値を一度だけ求めて`..._BYHASHVALUE`マクロへ渡すことで、ハッシュ値を再計算するコストを省けます。

</div>

<div class="sect3">

<!--libx-source-heading:_argument_descriptions-->

#### 引数の説明

<div class="dlist">

hh_name  
構造体内の`UT_hash_handle`フィールドの名前です。慣例では`hh`とします。

head  
ハッシュの「先頭」として働く構造体ポインター変数です。最初はハッシュに追加された最初の項目を指すため、この名前で呼ばれます。

keyfield_name  
構造体内のキーフィールドの名前です（複数フィールドのキーでは、キーの最初のフィールドです）。マクロに慣れていないと、フィールド名をパラメーターとして渡すのは奇妙に見えるかもしれません。[注意](#validc)を参照してください。

key_len  
キーフィールドの長さをバイト単位で指定します。たとえば整数キーでは`sizeof(int)`、文字列キーでは`strlen(key)`です（複数フィールドのキーについては[こちらの注意](#multifield_note)を参照してください）。

key_ptr  
`HASH_FIND`では、ハッシュ内で検索するキーへのポインターです（ポインターなので、リテラル値を直接渡すことはできません）。`HASH_ADD_KEYPTR`では、追加する項目のキーのアドレスです。

hashv  
指定したキーのハッシュ値です。`..._BYHASHVALUE`マクロでは入力パラメーター、`HASH_VALUE`では出力パラメーターです。同じキーを繰り返し検索する場合、キャッシュしたハッシュ値の再利用で性能を向上できることがあります。

item_ptr  
追加・削除・置換・検索する構造体へのポインター、または反復処理中の現在のポインターです。`HASH_ADD`、`HASH_DELETE`、`HASH_REPLACE`マクロでは入力パラメーター、`HASH_FIND`と`HASH_ITER`では出力パラメーターです（`HASH_ITER`で反復処理を行う場合、`tmp_item_ptr`は`item_ptr`と同じ型の別変数で、内部で使われます）。

replaced_item_ptr  
`HASH_REPLACE`マクロで使います。置換された項目を指すように設定される出力パラメーターです（置換される項目がなければNULLに設定されます）。

cmp  
2つの引数（比較する項目へのポインター）を受け取り、最初の項目を2番目の項目より前・同順位・後のどこに並べるかを示すintを返す比較関数へのポインターです（`strcmp`と同様）。

condition  
引数を1つ受け取る関数またはマクロです。引数は構造体へのvoidポインターで、適切な構造体型にキャストする必要があります。その構造体を宛先ハッシュへの追加対象として「選択」する場合、関数またはマクロは非ゼロの値を返す必要があります。

</div>

</div>

</div>

</div>

</div>
