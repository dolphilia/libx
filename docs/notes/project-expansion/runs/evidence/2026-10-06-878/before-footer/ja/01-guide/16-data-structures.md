---
title: "データ構造"
documentId: "yyjson:01-guide/16-data-structures.md"
order: 16
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/DataStructure.md\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}]
---
<a id="data-structures"></a>
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
<a id="immutable-value"></a>
## 不変の値

各JSON値は、不変の`yyjson_val`構造体に格納されます。
```c
struct yyjson_val {
    uint64_t tag;
    union {
        uint64_t    u64;
        int64_t     i64;
        double      f64;
        const char *str;
        void       *ptr;
        size_t      ofs;
    } uni;
}
```
<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_ival.svg" alt="yyjson_val"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_ival.svg">Original image / 図の原寸表示</a></figcaption></figure>

値の型は、`tag`の下位8ビットに格納します。<br/>
文字列長、オブジェクトサイズ、配列サイズなど、値のサイズは、`tag`の上位56ビットに格納します。

現代の64ビットプロセッサーでは、RAMアドレスに使えるビット数が通常64ビット未満に制限されています（[Wikipedia](https://en.wikipedia.org/wiki/RAM_limit)）。たとえば、Intel64、AMD64、ARMv8の物理アドレスは52ビット（4PB）が上限です。そのため、64ビットの`tag`内に型とサイズの情報を格納しても安全です。

<a id="immutable-document"></a>
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
<a id="mutable-value"></a>
## 可変の値

各可変JSON値は、`yyjson_mut_val`構造体に格納されます。
```c
struct yyjson_mut_val {
    uint64_t tag;
    union {
        uint64_t    u64;
        int64_t     i64;
        double      f64;
        const char *str;
        void       *ptr;
        size_t      ofs;
    } uni;
    yyjson_mut_val *next;
}
```
<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_mval.svg" alt="yyjson_mut_val"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_mval.svg">Original image / 図の原寸表示</a></figcaption></figure>

`tag`と`uni`フィールドは、不変の値と同じです。`next`フィールドは、連結リストの構築に使います。

<a id="mutable-document"></a>
## 可変のドキュメント

可変JSONドキュメントは、複数の`yyjson_mut_val`で構成されます。

`object`または`array`の子の値は、循環するように連結されています。<br/>
親は循環連結リストの**末尾**を保持するため、yyjsonは`append`、`prepend`、`remove_first`を定数時間で実行できます。

例：

<figure class="yyjson-figure"><img src="/docs/yyjson/source/v0-13-0/images/struct_mdoc.svg" alt="yyjson_mut_doc"><figcaption><a href="/docs/yyjson/source/v0-13-0/images/struct_mdoc.svg">Original image / 図の原寸表示</a></figcaption></figure>

---------------
<a id="memory-management"></a>
## メモリ管理

JSONドキュメント（`yyjson_doc`、`yyjson_mut_doc`）は、すべてのJSON値と文字列のメモリを管理します。ドキュメントが不要になったら、利用者は`yyjson_doc_free()`または`yyjson_mut_doc_free()`を呼び出して、関連するメモリを解放することが重要です。

JSON値（`yyjson_val`、`yyjson_mut_val`）の寿命は、そのドキュメントと同じです。メモリはドキュメントが管理し、個別に解放することはできません。

詳細はAPI文書を参照してください。
