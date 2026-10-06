データ構造
===============

yyjsonには、不変と可変の2種類のデータ構造があります。

| |不変|可変|
|---|---|---|
|ドキュメント|yyjson_doc|yyjson_mut_doc|
|値|yyjson_val|yyjson_mut_val|

- 不変のデータ構造は、JSONドキュメントを読み込むと返されます。変更はできません。
- 可変のデータ構造は、JSONドキュメントを構築するときに作られます。変更できます。
- yyjsonは、これらの2種類のデータ構造を相互に変換する関数も提供しています。

この文書で説明するデータ構造は非公開扱いであることに注意してください。アクセスには公開APIを使うことを推奨します。

---------------
## 不変の値

各JSON値は、不変の`yyjson_val`構造体に格納されます。
@@CODE_0@@
<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_ival.svg" alt="yyjson_val"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_ival.svg">Original image / 図の原寸表示</a></figcaption></figure>

値の型は、`tag`の下位8ビットに格納します。<br/>
文字列長、オブジェクトサイズ、配列サイズなど、値のサイズは、`tag`の上位56ビットに格納します。

現代の64ビットプロセッサーでは、RAMアドレスに使えるビット数が通常64ビット未満に制限されています（[Wikipedia](https://en.wikipedia.org/wiki/RAM_limit)）。たとえば、Intel64、AMD64、ARMv8の物理アドレスは52ビット（4PB）が上限です。そのため、64ビットの`tag`内に型とサイズの情報を格納しても安全です。

## 不変のドキュメント

JSONドキュメントは、すべての文字列を**連続した**メモリ領域に格納します。<br/>
各文字列は、その場所でエスケープが解除され、NUL終端文字で終わります。<br/>
例：

<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_idoc1.svg" alt="yyjson_doc"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_idoc1.svg">Original image / 図の原寸表示</a></figcaption></figure>

JSONドキュメントは、すべての値を、別の**連続した**メモリ領域に格納します。<br/>
`object`と`array`のコンテナーは、自身のメモリ使用量を格納するため、子の値を容易に走査できます。<br/>
例：

<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_idoc2.svg" alt="yyjson_doc"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_idoc2.svg">Original image / 図の原寸表示</a></figcaption></figure>

---------------
## 可変の値

各可変JSON値は、`yyjson_mut_val`構造体に格納されます。
@@CODE_1@@
<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_mval.svg" alt="yyjson_mut_val"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_mval.svg">Original image / 図の原寸表示</a></figcaption></figure>

`tag`と`uni`フィールドは、不変の値と同じです。`next`フィールドは、連結リストの構築に使います。

## 可変のドキュメント

可変JSONドキュメントは、複数の`yyjson_mut_val`で構成されます。

`object`または`array`の子の値は、循環するように連結されています。<br/>
親は循環連結リストの**末尾**を保持するため、yyjsonは`append`、`prepend`、`remove_first`を定数時間で実行できます。

例：

<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_mdoc.svg" alt="yyjson_mut_doc"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_mdoc.svg">Original image / 図の原寸表示</a></figcaption></figure>

---------------
## メモリ管理

JSONドキュメント（`yyjson_doc`、`yyjson_mut_doc`）は、すべてのJSON値と文字列のメモリを管理します。ドキュメントが不要になったら、利用者は`yyjson_doc_free()`または`yyjson_mut_doc_free()`を呼び出して、関連するメモリを解放することが重要です。

JSON値（`yyjson_val`、`yyjson_mut_val`）の寿命は、そのドキュメントと同じです。メモリはドキュメントが管理し、個別に解放することはできません。

詳細はAPI文書を参照してください。
