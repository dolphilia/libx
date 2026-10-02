---
title: "文書オブジェクトモデル"
description: "pugixml 1.16の公式文書オブジェクトモデル説明全文。"
licenseSource: "pugixml-manual-1.16"
---

<div class="sect1">

<span id="source-dom"></span>

## <a href="#source-dom" class="anchor"></a><a href="#source-dom" class="link">3. 文書オブジェクトモデル</a>

<div class="sectionbody">

<div class="paragraph">

pugixmlは、DOMに似た方法でXMLデータを保存します。XML文書全体（文書構造と要素データの両方）が、ツリーとしてメモリーに保持されます。ツリーは文字ストリーム（ファイル、文字列、C++ I/Oストリーム）から読み込み、専用APIやXPath式を使って走査できます。ツリー全体は変更可能で、ノード構造もノード・属性のデータもいつでも変更できます。最後に、文書変換の結果を文字ストリーム（ファイル、C++ I/Oストリーム、独自の転送手段）に保存できます。

</div>

<div class="sect2">

<span id="source-dom.tree"></span>

### <a href="#source-dom.tree" class="anchor"></a><a href="#source-dom.tree" class="link">3.1. ツリー構造</a>

<div class="paragraph">

XML文書はツリーデータ構造で表されます。ツリーのルートは文書そのもので、C++の[xml_document](#source-xml_document)型に対応します。文書には1個以上の子ノードがあり、それぞれC++の[xml_node](#source-xml_node)型に対応します。ノードにはさまざまな型があります。型によって、子ノードの集合、C++の[xml_attribute](#source-xml_attribute)型に対応する属性の集合、その他のデータ（名前など）を持ちます。

</div>

<div id="source-xml_node_type" class="paragraph">

ツリーのノードは、次のいずれかの型になります。これらを合わせて`xml_node_type`列挙型を構成します。

</div>

<div class="ulist">

- 文書ノード（<span id="source-node_document"></span>`node_document`）はツリーのルートで、複数の子ノードから構成されます。このノードは[xml_document](#source-xml_document)クラスに対応します。[xml_document](#source-xml_document)は[xml_node](#source-xml_node)のサブクラスなので、ノードのインターフェース全体も利用できます。ただし、文書ノードにはいくつかの特別な性質があり、後で説明します。ツリー内に文書ノードは1個しか存在できず、XML上の表現はありません。文書は通常、子要素ノードを1個持ちます（[document_element()](#source-xml_document::document_element)を参照）。ただし、XMLフラグメントから解析した文書（[parse_fragment](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-parse_fragment)を参照）では、複数の子要素を持つことがあります。

- 要素・タグノード（<span id="source-node_element"></span>`node_element`）は最も一般的なノード型で、XML要素を表します。要素ノードは名前、属性の集合、子ノードの集合を持ちます。どちらの集合も空で構いません。属性は単純な名前と値の組です。要素ノードのXML表現の例を次に示します。

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <node attr="value"><child/></node>
  ```

  </div>

  </div>

  <div class="paragraph">

  ここには2個の要素ノードがあります。一方の名前は`"node"`で、属性`"attr"`を1個、子ノード`"child"`を1個持ちます。もう一方の名前は`"child"`で、属性も子ノードも持ちません。

  </div>

- 通常の文字データノード（<span id="source-node_pcdata"></span>`node_pcdata`）はXML内のプレーンテキストを表します。PCDATAノードは値を持ちますが、名前、子ノード、属性は持ちません。**通常の文字データは要素ノードの一部ではなく、独立したノードを持つ**ことに注意してください。1個の要素ノードが複数のPCDATA子ノードを持つことがあります。テキストノードのXML表現の例を次に示します。

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <node> text1 <child/> text2 </node>
  ```

  </div>

  </div>

  <div class="paragraph">

  ここでは、`"node"`要素が3個の子ノードを持ち、そのうち2個は値が`" text1 "`と`" text2 "`のPCDATAノードです。

  </div>

- 文字データノード（<span id="source-node_cdata"></span>`node_cdata`）は、特別な方法で囲まれたXML内のテキストを表します。CDATAノードは、XML上の表現を除けばPCDATAノードと違いはありません。先ほどのテキストの例をCDATAで表すと、次のようになります。

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <node> <![CDATA[text1]]> <child/> <![CDATA[text2]]> </node>
  ```

  </div>

  </div>

  <div class="paragraph">

  CDATAノードを使うと、エスケープしていない`<`、`&`、`>`をプレーンテキストに容易に含められます。文字列`]]>`はノード内容の終端を示すため、CDATAの値に含めることはできません。

  </div>

- コメントノード（<span id="source-node_comment"></span>`node_comment`）はXML内のコメントを表します。コメントノードは値を持ちますが、名前、子ノード、属性は持ちません。コメントノードのXML表現の例を次に示します。

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <!-- comment text -->
  ```

  </div>

  </div>

  <div class="paragraph">

  ここでは、コメントノードの値は`"comment text"`です。既定では、コメントノードはXMLマークアップの必須でない部分として扱われ、XML解析時には読み込まれません。この動作は[parse_comments](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-parse_comments)フラグで変更できます。

  </div>

- 処理命令ノード（<span id="source-node_pi"></span>`node_pi`）はXML内の処理命令（PI）を表します。PIノードは名前と省略可能な値を持ちますが、子ノードや属性は持ちません。PIノードのXML表現の例を次に示します。

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <?name value?>
  ```

  </div>

  </div>

  <div class="paragraph">

  ここでは、名前（PIターゲットとも呼ばれます）は`"name"`で、値は`"value"`です。既定では、PIノードはXMLマークアップの必須でない部分として扱われ、XML解析時には読み込まれません。この動作は[parse_pi](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-parse_pi)フラグで変更できます。

  </div>

- 宣言ノード（<span id="source-node_declaration"></span>`node_declaration`）はXML内の文書宣言を表します。宣言ノードは名前（`"xml"`）と省略可能な属性の集合を持ちますが、値や子ノードは持ちません。文書内に宣言ノードは1個しか存在できず、最上位のノードであるべきです（親は文書であるべきです）。宣言ノードのXML表現の例を次に示します。

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <?xml version="1.0"?>
  ```

  </div>

  </div>

  <div class="paragraph">

  ここでは、ノードの名前は`"xml"`で、名前が`"version"`、値が`"1.0"`の属性を1個持ちます。既定では、宣言ノードはXMLマークアップの必須でない部分として扱われ、XML解析時には読み込まれません。この動作は[parse_declaration](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-parse_declaration)フラグで変更できます。また、既定では、XML文書の保存時に文書内に宣言がなければ仮の宣言が出力されます。この動作は[format_no_declaration](/docs/pugixml/v1-16/ja/02-manual/07-saving-documents/#source-format_no_declaration)フラグで無効にできます。

  </div>

- 文書型宣言ノード（<span id="source-node_doctype"></span>`node_doctype`）はXML内の文書型宣言を表します。文書型宣言ノードは、文書型の内容全体に対応する値を持ちます。`<!ENTITY>`のような内部要素のために追加のノードは作られません。文書内に文書型宣言ノードは1個しか存在できず、最上位のノードであるべきです（親は文書であるべきです）。文書型宣言ノードのXML表現の例を次に示します。

  <div class="listingblock">

  <div class="content">

  ``` cpp
  <!DOCTYPE greeting [ <!ELEMENT greeting (#PCDATA)> ]>
  ```

  </div>

  </div>

  <div class="paragraph">

  ここでは、ノードの値は`"greeting [ <!ELEMENT greeting (#PCDATA)> ]"`です。既定では、文書型宣言ノードはXMLマークアップの必須でない部分として扱われ、XML解析時には読み込まれません。この動作は[parse_doctype](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-parse_doctype)フラグで変更できます。

  </div>

</div>

<div class="paragraph">

最後に、XML文書全体の例と、それに対応するツリー表現を示します（[samples/tree.xml](/docs/pugixml/assets/pugixml-v1-16/samples/tree.xml)）。

</div>

<table class="tableblock frame-none grid-all stretch">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="listingblock">
<div class="content">
<pre class="xml"><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;mesh name=&quot;mesh_root&quot;&gt;
    &lt;!-- here is a mesh node --&gt;
    some text
    &lt;![CDATA[someothertext]]&gt;
    some more text
    &lt;node attr1=&quot;value1&quot; attr2=&quot;value2&quot; /&gt;
    &lt;node attr1=&quot;value2&quot;&gt;
        &lt;innernode/&gt;
    &lt;/node&gt;
&lt;/mesh&gt;
&lt;?include somedata?&gt;</code></pre>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/dom_tree.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/dom_tree.png" alt="文書のDOMツリー構造" /></a>
</div>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="sect2">

<span id="source-dom.cpp"></span>

### <a href="#source-dom.cpp" class="anchor"></a><a href="#source-dom.cpp" class="link">3.2. C++インターフェース</a>

<div class="admonitionblock note">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td class="icon"><div class="title">
注記
</div></td>
<td class="content">pugixmlのすべてのクラスと関数は<code>pugi</code>名前空間にあります。明示的に名前を修飾する（例：<code>pugi::xml_node</code>）か、<code>using</code>指令を使って必要なシンボルにアクセスできるようにする（例：<code>using pugi::xml_node;</code>または<code>using namespace pugi;</code>）必要があります。この文書では、以降のすべての宣言で名前空間を省略します。すべてのコード例では完全修飾名を使います。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

ノード型はいくつもありますが、ツリーを表すC++クラスは`xml_document`、`xml_node`、`xml_attribute`の3つだけです。`xml_node`に対する操作の中には、特定のノード型でのみ有効なものがあります。これらのクラスについて、次に説明します。

</div>

<div class="paragraph">

<span id="source-xml_document"></span><span id="source-xml_document::document_element"></span> `xml_document`は文書構造全体の所有者で、コピーできないクラスです。`xml_document`のインターフェースには、読み込み関数（[文書の読み込み](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-loading)を参照）、保存関数（[文書の保存](/docs/pugixml/v1-16/ja/02-manual/07-saving-documents/#source-saving)を参照）、文書の調査や変更に使える`xml_node`のインターフェース全体が含まれます。`xml_document`は`xml_node`のサブクラスですが、`xml_node`はポリモーフィックな型ではないことに注意してください。継承は使い方を簡単にするためだけに用いられています。あるいは、`document_element`関数で、文書の直接の子である要素ノードを取得できます。

</div>

<div class="paragraph">

<span id="source-xml_document::ctor"></span><span id="source-xml_document::dtor"></span><span id="source-xml_document::reset"></span> `xml_document`のデフォルトコンストラクターは、ルートノード（文書ノード）だけを持つツリーとして文書を初期化します。その後、ツリーの変更関数や読み込み関数でデータを追加できます。すべての読み込み関数は、以前のツリーとその使用メモリー全体を破棄するため、その文書の既存のノード・属性ハンドルは無効になります。以前のツリーを破棄したい場合は、`xml_document::reset`関数を使えます。この関数はツリーを破棄し、空のツリーか指定した文書のコピーで置き換えます。`xml_document`のデストラクターもツリーを破棄します。そのため、文書オブジェクトの寿命は、ツリーを指すノード・属性ハンドルの寿命より長くあるべきです。

</div>

<div class="admonitionblock caution">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td class="icon"><div class="title">
注意
</div></td>
<td class="content">技術的には、参照先のツリーを破棄した後もノード・属性ハンドルは存在できますが、そのハンドルのメンバー関数を呼び出すと未定義動作になります。そのため、ノード・属性へのすべての参照が破棄された後にのみ文書を破棄することを推奨します。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

<span id="source-xml_node"></span><span id="source-xml_node::type"></span> `xml_node`は文書ノードへのハンドルで、文書ノードそのものを含む、文書内のどのノードも指せます。すべての型のノードに共通のインターフェースがあり、実際の[ノード型](#source-xml_node_type)は`xml_node::type()`メソッドで調べられます。`xml_node`は実際のノードへのハンドルにすぎず、ノードそのものではありません。同じ実体を指す`xml_node`ハンドルが複数あっても構いません。`xml_node`ハンドルを破棄しても、ノードは破棄されず、ツリーからも削除されません。`xml_node`のサイズはポインターのサイズと等しく、ポインターを包む軽量なラッパーにすぎません。そのため、追加のオーバーヘッドなしに、`xml_node`オブジェクトを値で安全に渡したり返したりできます。

</div>

<div id="source-node_null" class="paragraph">

`xml_node`型には、nullノードまたは空ノードと呼ばれる特別な値があります。このようなノードの型は`node_null`です。どの文書のどのノードにも対応せず、nullポインターに似ています。ただし、空ノードに対してもすべての操作が定義されています。通常、これらの操作は何もせず、空のノード・属性や空文字列を返します。詳しくは個々の関数の文書を参照してください。これは呼び出しを連鎖させるときに便利です。たとえば、ノードの祖父ノードは`node.parent().parent()`で取得できます。ノードがnullノードであるか親を持たない場合、最初の`parent()`はnullノードを返し、2回目の`parent()`もnullノードを返すため、エラー処理が簡単になります。

</div>

<div id="source-xml_attribute" class="paragraph">

`xml_attribute`はXML属性へのハンドルで、`xml_node`と同じ意味論を持ちます。つまり、同じ実体を指す`xml_attribute`ハンドルが複数あっても構わず、関数の結果にも伝わる特別なnull属性の値があります。

</div>

<div class="paragraph">

<span id="source-xml_attribute::ctor"></span><span id="source-xml_node::ctor"></span> `xml_node`と`xml_attribute`には、どちらにもnullオブジェクトとして初期化するデフォルトコンストラクターがあります。

</div>

<div class="paragraph">

<span id="source-xml_attribute::comparison"></span><span id="source-xml_node::comparison"></span> `xml_node`と`xml_attribute`はポインターのように振る舞おうとします。つまり、同じ型のほかのオブジェクトと比較できるため、連想コンテナーのキーとして使えます。同じ実体を指すすべてのハンドルは等しく、異なる実体を指す2つのハンドルは等しくありません。nullハンドルは、nullハンドルとの比較でのみ等しいと判定されます。大小比較の結果は、ファイル内のノードの順序やその他の方法から確実に決定することはできません。検索の最適化（連想コンテナーのキーなど）以外には、大小比較演算子を使わないでください。

</div>

<div class="paragraph">

<span id="source-xml_attribute::hash_value"></span><span id="source-xml_node::hash_value"></span> ハッシュに基づく連想コンテナーのキーとして`xml_node`や`xml_attribute`オブジェクトを使いたい場合は、`hash_value`メンバー関数を使えます。同じ実体を指すすべてのハンドルについて、同じ値になることが保証されたハッシュ値を返します。nullハンドルのハッシュ値は0です。ハッシュ値はノードの内容ではなく、実体の構造がメモリー内にある位置だけに依存します。このため、同じ文書を2回読み込むと異なるハッシュ値になる可能性が高く、ノードをコピーしてもハッシュ値は保持されません。

</div>

<div class="paragraph">

<span id="source-xml_attribute::unspecified_bool_type"></span><span id="source-xml_node::unspecified_bool_type"></span><span id="source-xml_attribute::empty"></span><span id="source-xml_node::empty"></span> 最後に、ハンドルはboolに似たオブジェクトへ暗黙に変換できるため、ノードや属性が空かどうかを`if (node) { …​ }`や`if (!node) { …​ } else { …​ }`で調べられます。あるいは、次のメソッドを呼び出して、指定した`xml_node`や`xml_attribute`ハンドルがnullかどうかを確認できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_attribute::empty() const;
bool xml_node::empty() const;
```

</div>

</div>

<div class="paragraph">

ノードや属性は文書ツリーなしでは存在できないので、いずれかの文書へ追加せずに作成することはできません。ノード・属性の実体が破棄されると、その実体へのハンドルは無効になります。ツリー全体の破棄で、すべてのノード・属性ハンドルが無効になるだけでなく、部分木の破棄（[xml_node::remove_child](/docs/pugixml/v1-16/ja/02-manual/06-modifying-document-data/#source-xml_node::remove_child)の呼び出し）や属性の削除でも、対応するハンドルは無効になります。ハンドルが有効かどうかを確認する方法はないため、外部の仕組みで正しさを保証しなければなりません。

</div>

</div>

<div class="sect2">

<span id="source-dom.unicode"></span>

### <a href="#source-dom.unicode" class="anchor"></a><a href="#source-dom.unicode" class="link">3.3. Unicodeインターフェース</a>

<div class="paragraph">

pugixmlの設定では、インターフェースと内部表現を2種類から選べます。UTF-8インターフェース（charインターフェースとも呼ばれます）か、UTF-16/32インターフェース（wchar_tインターフェースとも呼ばれます）です。選択は[PUGIXML_WCHAR_MODE](/docs/pugixml/v1-16/ja/02-manual/02-installation/#source-PUGIXML_WCHAR_MODE)の定義で制御します。[追加の設定オプション](/docs/pugixml/v1-16/ja/02-manual/02-installation/#source-install.building.config)で説明したように、`pugiconfig.hpp`またはプリプロセッサーのオプションで設定できます。この定義を設定するとwchar_tインターフェースが使われ、それ以外の場合は既定のcharインターフェースが使われます。ワイド文字のエンコーディングはUTF-16かUTF-32と仮定され、`wchar_t`型のサイズに基づいて決まります。

</div>

<div class="admonitionblock note">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td class="icon"><div class="title">
注記
</div></td>
<td class="content"><code>wchar_t</code>のサイズが2の場合、pugixmlはUCS-2ではなくUTF-16エンコーディングと仮定します。そのため、一部の文字は2つのコードポイントで表されます。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

文字列を扱うすべてのツリー関数は、選択した文字型のC形式のnull終端文字列、またはSTL文字列を扱います。たとえば、ノード名のアクセサーはcharモードでは次のようになります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char* xml_node::name() const;
bool xml_node::set_name(const char* value);
```

</div>

</div>

<div class="paragraph">

wchar_tモードでは、次のようになります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
const wchar_t* xml_node::name() const;
bool xml_node::set_name(const wchar_t* value);
```

</div>

</div>

<div class="paragraph">

<span id="source-char_t"></span><span id="source-string_t"></span><span id="source-string_view_t"></span> 文字型として定義され、ライブラリの設定に依存する特別な型`pugi::char_t`があります。以降の文書でもこの型を使います。また、文字型のSTL文字列として定義される`pugi::string_t`型もあります。charモードでは`std::string`、wchar_tモードでは`std::wstring`に対応します。同様に、`string_view_t`は`std::basic_string_view<char_t>`として定義されます。`string_view_t`のオーバーロードは、C++17以降を対象にビルドするときにだけ利用できます（`PUGIXML_HAS_STRING_VIEW`を参照）。

</div>

<div class="paragraph">

インターフェースに加えて、内部実装もXMLデータを`pugi::char_t`として保存するように変わります。そのため、この2つのモードではメモリー使用量の特性が異なります。一般に、UTF-8モードの方がメモリーと性能の面で効率的で、特に`sizeof(wchar_t)`が4の場合に顕著です。文書読み込み時の`pugi::char_t`への変換と、文書保存時の`pugi::char_t`からの変換は自動で行われますが、多少の性能上の負担もあります。ただし、一般的には使用場面に基づいて文字モードを選ぶことを勧めます。たとえばUTF-8を処理しにくく、XMLデータの大半が非ASCIIの場合は、wchar_tモードの方が適しているでしょう。

</div>

<div class="paragraph">

<span id="source-as_utf8"></span><span id="source-as_wide"></span> UTF-8とwchar_tのエンコーディングの間で文字列データを変換しなければならない場合があります。このために、次の補助関数が用意されています。

</div>

<div class="listingblock">

<div class="content">

``` cpp
std::string as_utf8(const wchar_t* str);
std::wstring as_wide(const char* str);
```

</div>

</div>

<div class="paragraph">

どちらの関数も、引数`str`にnull終端文字列を受け取り、変換した文字列を返します。`as_utf8`はUTF-16/32からUTF-8へ、`as_wide`はUTF-8からUTF-16/32へ変換します。不正なUTFシーケンスは、変換時に通知せず破棄されます。`str`は有効な文字列でなければならず、nullポインターを渡すと未定義動作になります。また、同じ意味論を持ち、引数に文字列を受け取るオーバーロードが2つあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
std::string as_utf8(const std::wstring& str);
std::wstring as_wide(const std::string& str);
```

</div>

</div>

<div class="admonitionblock note">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td class="icon"><div class="title">
注記
</div></td>
<td class="content"><div class="paragraph">
<p>この文書の例の大半はcharインターフェースを前提にしているため、<a href="/docs/pugixml/v1-16/ja/02-manual/02-installation/#source-PUGIXML_WCHAR_MODE">PUGIXML_WCHAR_MODE</a>ではコンパイルできません。これは文書を簡潔にするためです。通常、必要な変更は<code>wchar_t</code>文字列リテラルを渡すことだけです。つまり、次のコードの代わりに、</p>
</div>
<div class="paragraph">
<p><code>xml_node node = doc.child("bookstore").find_child_by_attribute("book", "id", "12345");</code></p>
</div>
<div class="paragraph">
<p>次のコードを使う必要があります。</p>
</div>
<div class="paragraph">
<p><code>xml_node node = doc.child(L"bookstore").find_child_by_attribute(L"book", L"id", L"12345");</code></p>
</div></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<span id="source-dom.thread"></span>

### <a href="#source-dom.thread" class="anchor"></a><a href="#source-dom.thread" class="link">3.4. スレッド安全性の保証</a>

<div class="paragraph">

pugixmlのほぼすべての関数には、次のスレッド安全性の保証があります。

</div>

<div class="ulist">

- 非メンバーの自由関数は、複数のスレッドから呼び出しても安全です。

- 同じツリーに対する並行した読み取り専用アクセスは安全です。constメンバー関数はすべてツリーを変更しません。

- 複数のツリーに対する並行した読み書きは、各ツリーに同時にアクセスするスレッドが1つだけであれば安全です。

</div>

<div class="paragraph">

1つのツリーに対する並行した読み書きには、読み書きロックなどによる同期が必要です。変更には、文書構造の変更と、個々のノード・属性のデータの変更（名前や値の変更など）が含まれます。

</div>

<div class="paragraph">

唯一の例外は[set_memory_management_functions](#source-set_memory_management_functions)です。この関数はグローバル変数を変更するため、スレッドセーフではありません。使用方針にはさらに制約があります。[独自のメモリー割り当て・解放関数](#source-dom.memory.custom)を参照してください。

</div>

</div>

<div class="sect2">

<span id="source-dom.exception"></span>

### <a href="#source-dom.exception" class="anchor"></a><a href="#source-dom.exception" class="link">3.5. 例外保証</a>

<div class="paragraph">

XPathを除けば、pugixml自体は例外を送出しません。さらに、pugixmlのほとんどの関数は、例外を送出しないことを保証します。

</div>

<div class="paragraph">

この保証は、STL文字列やIOstreamを扱う関数には当てはまりません。これらの関数には、強い保証（文字列を扱う関数）か基本保証（ストリームを扱う関数）があります。また、ユーザー定義のコールバックを呼び出す関数（[xml_node::traverse](/docs/pugixml/v1-16/ja/02-manual/05-accessing-document-data/#source-xml_node::traverse)や[xml_node::find_node](/docs/pugixml/v1-16/ja/02-manual/05-accessing-document-data/#source-xml_node::find_node)など）は、コールバック自体が提供する以上の例外保証を提供しません。

</div>

<div class="paragraph">

[PUGIXML_NO_EXCEPTIONS](/docs/pugixml/v1-16/ja/02-manual/02-installation/#source-PUGIXML_NO_EXCEPTIONS)の定義で例外処理を無効にしていなければ、XPath関数は解析エラー時に[xpath_exception](/docs/pugixml/v1-16/ja/02-manual/08-xpath/#source-xpath_exception)を送出することがあります。また、メモリー不足時には`std::bad_alloc`を送出することがあります。それでも、XPath関数は強い例外保証を提供します。

</div>

</div>

<div class="sect2">

<span id="source-dom.memory"></span>

### <a href="#source-dom.memory" class="anchor"></a><a href="#source-dom.memory" class="link">3.6. メモリー管理</a>

<div class="paragraph">

pugixmlは、文書を保持するためのメモリーを大きなチャンクで要求し、そのチャンク内に文書データを割り当てます。この節では、チャンクの割り当てに使う関数の置き換えと、内部のメモリー管理実装について説明します。

</div>

<div class="sect3">

<span id="source-dom.memory.custom"></span>

#### <a href="#source-dom.memory.custom" class="anchor"></a><a href="#source-dom.memory.custom" class="link">3.6.1. 独自のメモリー割り当て・解放関数</a>

<div class="paragraph">

<span id="source-allocation_function"></span><span id="source-deallocation_function"></span> ツリー構造、ツリーのデータ、XPathオブジェクトのメモリーはすべて、グローバルに指定された関数で割り当てられます。既定ではmalloc/freeです。`set_memory_management_functions`関数で、独自の割り当て関数を設定できます。関数のインターフェースはmalloc/freeと同じです。

</div>

<div class="listingblock">

<div class="content">

``` cpp
typedef void* (*allocation_function)(size_t size);
typedef void (*deallocation_function)(void* ptr);
```

</div>

</div>

<div class="paragraph">

<span id="source-set_memory_management_functions"></span><span id="source-get_memory_allocation_function"></span><span id="source-get_memory_deallocation_function"></span> 次のアクセサー関数を使って、現在のメモリー管理関数を変更したり取得したりできます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
void set_memory_management_functions(allocation_function allocate, deallocation_function deallocate);
allocation_function get_memory_allocation_function();
deallocation_function get_memory_deallocation_function();
```

</div>

</div>

<div class="paragraph">

割り当て関数は、サイズ（バイト単位）を引数として呼び出されます。基本型の格納に適したアラインメント（通常は`void*`型と`double`型のアラインメントの大きい方で十分）を持ち、要求したサイズ以上のメモリーブロックへのポインターを返すべきです。割り当てに失敗した場合は、nullポインターを返すか、例外を送出しなければなりません。

</div>

<div class="paragraph">

解放関数は、割り当て関数の呼び出しで返されたポインターを引数として呼び出されます。nullポインターで呼び出されることはありません。メモリー管理関数がスレッドセーフでない場合、ライブラリのスレッド安全性は保証されません。

</div>

<div class="paragraph">

独自のメモリー管理の簡単な例です（[samples/custom_memory_management.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/custom_memory_management.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
void* custom_allocate(size_t size)
{
    return new (std::nothrow) char[size];
}

void custom_deallocate(void* ptr)
{
    delete[] static_cast<char*>(ptr);
}
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugi::set_memory_management_functions(custom_allocate, custom_deallocate);
```

</div>

</div>

<div class="paragraph">

新しいメモリー管理関数を設定するときは、有効なpugixmlオブジェクトが残っていないことを確認してください。そうしないと、オブジェクトの破棄時に、古い割り当て関数で取得したメモリーを新しい解放関数へ渡すことになり、未定義動作が生じます。

</div>

</div>

<div class="sect3">

<span id="source-dom.memory.tuning"></span>

#### <a href="#source-dom.memory.tuning" class="anchor"></a><a href="#source-dom.memory.tuning" class="link">3.6.2. メモリー消費の調整</a>

<div class="paragraph">

pugixmlには、あらかじめ定義された定数に依存する、重要なバッファーの最適化がいくつかあります。これらの定数の既定値は、一般的な使用パターンに合わせて調整されています。アプリケーションによっては、定数を変更するとメモリー消費や性能が改善することがあります。既定値が目に見える問題を引き起こしていない限り、変更は推奨しません。

</div>

<div class="paragraph">

これらの定数は、[追加の設定オプション](/docs/pugixml/v1-16/ja/02-manual/02-installation/#source-install.building.config)で説明した設定用の定義で調整できます。`pugiconfig.hpp`で設定することを推奨します。

</div>

<div class="ulist">

- `PUGIXML_MEMORY_PAGE_SIZE`は、文書のメモリー割り当てに使うページサイズを制御します。ノード・属性の実体のメモリーは、指定したサイズのページに割り当てられます。既定のサイズは32 Kbです。アプリケーションによっては、このサイズが大きすぎます。たとえば、ヒープが小さい組み込みシステムや、多数のXML文書をメモリー内に保持するアプリケーションです。最小サイズとして1 Kbを推奨します。

- `PUGIXML_MEMORY_OUTPUT_STACK`は、ノードの出力に必要なスタック領域の合計を制御します。すべての出力操作（部分木のファイルへの保存など）は、性能上の理由から内部でバッファリングを行います。既定のサイズは10 Kbです。スタック領域の小さいスレッドからノードを出力する場合、この値を小さくするとスタックオーバーフローを防げます。最小サイズとして1 Kbを推奨します。

- `PUGIXML_MEMORY_XPATH_PAGE_SIZE`は、XPathのメモリー割り当てに使うページサイズを制御します。XPathクエリーオブジェクトのメモリーとXPath評価用の内部メモリーは、指定したサイズのページに割り当てられます。既定のサイズは4 Kbです。多数のXPathクエリーオブジェクトを常時保持する場合は、メモリー消費を改善するためにサイズを小さくする必要があるかもしれません。最小サイズとして256バイトを推奨します。

</div>

</div>

<div class="sect3">

<span id="source-dom.memory.internals"></span>

#### <a href="#source-dom.memory.internals" class="anchor"></a><a href="#source-dom.memory.internals" class="link">3.6.3. 文書メモリー管理の内部構造</a>

<div class="paragraph">

デフォルトコンストラクターで文書オブジェクトを構築しても、メモリーの割り当ては発生しません。文書ノードは[xml_document](#source-xml_document)オブジェクト内に保存されます。

</div>

<div class="paragraph">

ファイルやバッファから文書を読み込むときは、インプレース読み込み関数を使わない限り（[メモリーからの文書の読み込み](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-loading.memory)を参照）、文字ストリーム全体のコピーが作られます。ノードと属性の名前・値は、すべてこのバッファ内に割り当てられます。このバッファは1回の大きな割り当てで取得され、文書のメモリーを回収するときにだけ解放されます。たとえば、[xml_document](#source-xml_document)オブジェクトを破棄する場合や、同じオブジェクトに別の文書を読み込む場合です。また、ファイルやストリームから読み込むときにエンコーディング変換が必要であれば、追加の大きな割り当てが行われることがあります。一時バッファが割り当てられ、読み込み関数が戻る前に解放されます。

</div>

<div class="paragraph">

文書構造（ノード・属性の実体）やノード・属性の名前・値などの追加メモリーは、すべて約32 Kbのページに割り当てられます。実際のオブジェクトは、多数の小さいオブジェクトの高速な割り当て・解放に最適化されたメモリー管理方式で、ページ内に割り当てられます。この方式の性質上、ページは内部のすべてのオブジェクトが破棄された場合にだけ破棄されます。また一般に、あるオブジェクトを破棄しても、その後に作成するオブジェクトが同じメモリーを再利用するとは限りません。このため、予想より多くのメモリーを使う使用方法を考案することはできます。たとえば大量のノードを追加し、その後で偶数番目のノードをすべて削除しても、ページは1つも回収されません。ただし、これは不都合な動作を起こすように特に作られた例です。実際のあらゆる使用場面では、割り当てのメタデータが非常に小さいため、メモリー消費は汎用アロケーターより少なくなります。

</div>

</div>

<div class="sect3">

<span id="source-dom.memory.compact"></span>

#### <a href="#source-dom.memory.compact" class="anchor"></a><a href="#source-dom.memory.compact" class="link">3.6.4. コンパクトモード</a>

<div class="paragraph">

既定では、ノードと属性はアクセス効率を重視して最適化されています。このため、大量のメモリーを使うことがあります。ノードが多く内容が少ない文書（属性値やノードのテキストが短い文書）では、ポインターサイズによっては、文書構造が文書そのものより明らかに多くのメモリーを使うことがあります。たとえば、64ビットプラットフォームのUTF-8モードでは、ファイルサイズが2.1 Mbのマークアップの多い文書が、文書バッファに2.1 Mb、文書構造に8.3 Mbを使う場合があります。

</div>

<div class="paragraph">

大きな文書を処理する場合や、プラットフォームのメモリーが限られていて、メモリーのために多少の性能を犠牲にできる場合は、`PUGIXML_COMPACT`を定義してpugixmlをコンパイルし、コンパクトモードを有効にできます。コンパクトモードは、ノードと属性の間の参照の局所性を仮定した別の文書構造表現を使い、メモリー使用量を最適化します。その結果、ノード・属性の実体は大幅に小さくなります。通常は、多くの文書のほとんどの実体について追加の保存領域は不要ですが、最悪の場合、つまり参照の局所性の仮定が成り立たない場合には、必要な追加データを保存するためのメモリーが別途割り当てられます。

</div>

<div class="paragraph">

コンパクトな格納方式は、ツリーの変更を含む既存のすべての操作を、同じ償却計算量でサポートします。つまり、基本的な文書操作はすべて、平均では引き続きO(1)です。操作は少し遅くなり、処理がメモリー性能に制約されていない限り、通常、処理時間では10〜50%の低速化が見込まれます。

</div>

<div class="paragraph">

32ビットアーキテクチャでは、コンパクトモードの文書構造は通常、元の約1/2.5になります。64ビットアーキテクチャでは約1/5です。このため、マークアップの多い大きな文書では、コンパクトモードによって、数ギガバイトの文書をRAMだけで処理できるか、ディスクへのスワップが必要かが変わることがあります。文書がメモリーに収まる場合でも、コンパクトな格納方式は領域を減らし、キャッシュやTLBのミスを減らすことでCPUキャッシュを効率よく使えます。

</div>

</div>

</div>

</div>

</div>
