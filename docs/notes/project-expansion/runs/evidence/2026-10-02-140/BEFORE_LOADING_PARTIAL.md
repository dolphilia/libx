---
title: "文書の読み込み"
description: "pugixml 1.16の公式文書読み込み説明全文。"
licenseSource: "pugixml-manual-1.16"
---

<div class="sect1">

<span id="source-loading"></span>

## <a href="#source-loading" class="anchor"></a><a href="#source-loading" class="link">4. 文書の読み込み</a>

<div class="sectionbody">

<div class="paragraph">

pugixmlには、ファイル、C++ iostream、メモリーバッファなど、さまざまな場所からXMLデータを読み込む関数があります。すべての関数は、妥当性検証を行わない非常に高速なパーサーを使います。このパーサーはW3C仕様に完全には準拠していません。有効なXML文書はすべて読み込めますが、一部の整形式性の検査は行いません。不正なXML文書を拒否するために相当の努力が払われていますが、性能上の理由から一部の検証を省いています。また、改行処理や属性値の正規化など、一部のXML変換は解析速度に影響するため、無効にできます。ただし、XML文書の大多数では、解析オプションによる性能の違いはありません。解析オプションは、特定のXMLノードを解析するかどうかも制御します。詳しくは[解析オプション](#source-loading.options)を参照してください。

</div>

<div class="paragraph">

XMLデータは、解析前に必ず内部の文字形式へ変換されます（[Unicodeインターフェース](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-dom.unicode)を参照）。pugixmlは、広く使われているすべてのUnicodeエンコーディング（UTF-8、UTF-16のビッグエンディアンとリトルエンディアン、UTF-32のビッグエンディアンとリトルエンディアン）と、一部の非Unicodeエンコーディング（Latin-1）に対応し、すべてのエンコーディング変換を自動で処理します。UCS-2はUTF-16の厳密な部分集合なので、当然ながら対応しています。エンコーディングを明示しない限り、読み込み関数はXMLの原データからエンコーディングを自動検出するため、ほとんどの場合、文書のエンコーディングを指定する必要はありません。変換の詳細は[エンコーディング](#source-loading.encoding)で説明します。

</div>

<div class="sect2">

<span id="source-loading.file"></span>

### <a href="#source-loading.file" class="anchor"></a><a href="#source-loading.file" class="link">4.1. ファイルからの文書の読み込み</a>

<div class="paragraph">

<span id="source-xml_document::load_file"></span><span id="source-xml_document::load_file_wide"></span> XMLデータの読み込み元として最も一般的なのはファイルです。pugixmlには、ファイルからXML文書を読み込む専用の関数があります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_parse_result xml_document::load_file(const char* path, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
xml_parse_result xml_document::load_file(const wchar_t* path, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
```

</div>

</div>

<div class="paragraph">

これらの関数は、第1引数にファイルパスを取り、ほかに省略可能な引数が2つあります。これらは解析オプション（[解析オプション](#source-loading.options)を参照）と入力データのエンコーディング（[エンコーディング](#source-loading.encoding)を参照）を指定します。パスは対象OSの形式に従います。相対パスでも絶対パスでも構いませんが、対象システムの区切り文字を使い、ファイルシステムが大文字と小文字を区別する場合には正確な文字の大小を指定するなどの必要があります。

</div>

<div class="paragraph">

最初の関数（`const char* path`を受け取るもの）は、システムのファイルオープン関数へパスをそのまま渡します。2番目の関数は、ランタイムライブラリが専用のファイルオープン関数を提供していればそれを使い、それ以外の場合はパスをUTF-8へ変換してシステムのファイルオープン関数を使います。

</div>

<div class="paragraph">

`load_file`は既存の文書ツリーを破棄してから、指定したファイルから新しいツリーを読み込もうとします。操作結果は[xml_parse_result](#source-xml_parse_result)オブジェクトとして返されます。このオブジェクトには、操作の状態と、それに関連する情報（解析に失敗した場合は、入力ファイル内の解析に成功した最後の位置など）が含まれます。エラー処理の詳細は[解析エラーの処理](#source-loading.errors)を参照してください。

</div>

<div class="paragraph">

ファイルからXML文書を読み込む例です（[samples/load_file.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/load_file.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugi::xml_document doc;

pugi::xml_parse_result result = doc.load_file("tree.xml");

std::cout << "Load result: " << result.description() << ", mesh name: " << doc.child("mesh").attribute("name").value() << std::endl;
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-loading.memory"></span>

### <a href="#source-loading.memory" class="anchor"></a><a href="#source-loading.memory" class="link">4.2. メモリーからの文書の読み込み</a>

<div class="paragraph">

<span id="source-xml_document::load_buffer"></span><span id="source-xml_document::load_buffer_inplace"></span><span id="source-xml_document::load_buffer_inplace_own"></span> XMLデータをファイル以外、たとえばHTTP URLから読み込む必要がある場合もあります。また、仮想ファイルシステムの機能を使ったり、GZip圧縮ファイルからXMLを読み込んだりするために、標準以外の関数でファイルを読み込みたい場合もあります。これらの場合はいずれも、文書をメモリーから読み込む必要があります。まず、XMLデータ全体を含む連続したメモリーブロックを用意し、次にバッファ読み込み関数のいずれかを呼び出してください。これらの関数は、必要であればエンコーディング変換を処理した後、データを解析して対応するXMLツリーを作ります。バッファ読み込み関数にはいくつかあり、動作が異なるため、性能やメモリー使用量も異なります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_parse_result xml_document::load_buffer(const void* contents, size_t size, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
xml_parse_result xml_document::load_buffer_inplace(void* contents, size_t size, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
xml_parse_result xml_document::load_buffer_inplace_own(void* contents, size_t size, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
```

</div>

</div>

<div class="paragraph">

すべての関数は、XMLデータへのポインター`contents`と、バイト単位のデータサイズで表されるバッファを受け取ります。また、解析オプション（[解析オプション](#source-loading.options)を参照）と入力データのエンコーディング（[エンコーディング](#source-loading.encoding)を参照）を指定する、省略可能な引数が2つあります。バッファはゼロ終端である必要はありません。

</div>

<div class="paragraph">

`load_buffer`は変更不可のバッファを扱い、バッファを変更することは一切ありません。この制約のため、解析前に専用のバッファを作ってXMLデータをコピーしなければなりません。必要であればエンコーディング変換も適用します。このコピー操作には性能上の負担があるため、インプレース関数`load_buffer_inplace`と`load_buffer_inplace_own`が用意されています。これらは文書データをバッファに保持し、その過程でバッファを変更します。インプレース関数を使う場合は、文書を有効に保つため、バッファの寿命がツリーの寿命より長いことを保証しなければなりません。さらに、`load_buffer_inplace`はバッファの所有権を引き受けないため、自分で破棄する必要があります。`load_buffer_inplace_own`は所有権を引き受け、不要になった時点でバッファを破棄します。このため、`load_buffer_inplace_own`を使う場合は、pugixmlの割り当て関数でメモリーを割り当てなければなりません。この関数は[get_memory_allocation_function](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-get_memory_allocation_function)で取得できます。

</div>

<div class="paragraph">

性能とメモリーの面で最善の方法は、`load_buffer_inplace_own`で文書を読み込むことです。この関数はXMLデータを含むバッファを最大限に制御できるため、不要なコピーを避け、解析中のピークメモリー使用量を減らせます。メモリーから文書を読み込む必要があり、性能が重要な場合には、この関数を推奨します。

</div>

<div id="source-xml_document::load_string" class="paragraph">

null終端の文字列からXML文書を読み込みたい場合には、単純な補助関数もあります。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_parse_result xml_document::load_string(const char_t* contents, unsigned int options = parse_default);
```

</div>

</div>

<div class="paragraph">

これは、文字型に応じて`size`に`strlen(contents)`または`wcslen(contents) * sizeof(wchar_t)`を指定して、`load_buffer`を呼び出すことと同じです。この関数は入力データをネイティブエンコーディングと仮定するため、エンコーディング変換を行いません。一般に、文字列リテラルから小さい文書を読み込む用途には適していますが、バッファ読み込み関数よりオーバーヘッドが大きく、機能も少なくなります。

</div>

<div class="paragraph">

各種関数でメモリーからXML文書を読み込む例です（[samples/load_memory.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/load_memory.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char source[] = "<mesh name='sphere'><bounds>0 0 1 1</bounds></mesh>";
size_t size = sizeof(source);
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
// You can use load_buffer to load document from immutable memory block:
pugi::xml_parse_result result = doc.load_buffer(source, size);
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
// You can use load_buffer_inplace to load document from mutable memory block; the block's lifetime must exceed that of document
char* buffer = new char[size];
memcpy(buffer, source, size);

// The block can be allocated by any method; the block is modified during parsing
pugi::xml_parse_result result = doc.load_buffer_inplace(buffer, size);

// You have to destroy the block yourself after the document is no longer used
delete[] buffer;
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
// You can use load_buffer_inplace_own to load document from mutable memory block and to pass the ownership of this block
// The block has to be allocated via pugixml allocation function - using i.e. operator new here is incorrect
char* buffer = static_cast<char*>(pugi::get_memory_allocation_function()(size));
memcpy(buffer, source, size);

// The block will be deleted by the document
pugi::xml_parse_result result = doc.load_buffer_inplace_own(buffer, size);
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
// You can use load to load document from null-terminated strings, for example literals:
pugi::xml_parse_result result = doc.load_string("<mesh name='sphere'><bounds>0 0 1 1</bounds></mesh>");
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-loading.stream"></span>

### <a href="#source-loading.stream" class="anchor"></a><a href="#source-loading.stream" class="link">4.3. C++ IOstreamからの文書の読み込み</a>

<div id="source-xml_document::load_stream" class="paragraph">

相互運用性を高めるため、pugixmlには、C++の`std::istream`インターフェースを実装した任意のオブジェクトから文書を読み込む関数があります。これにより、標準のC++ストリーム（ファイルストリームなど）や、インターフェースに準拠した第三者の実装（Boost Iostreamsなど）から文書を読み込めます。関数は2つあり、一方はナロー文字ストリーム、もう一方はワイド文字ストリームを扱います。

</div>

<div class="listingblock">

<div class="content">

``` cpp
xml_parse_result xml_document::load(std::istream& stream, unsigned int options = parse_default, xml_encoding encoding = encoding_auto);
xml_parse_result xml_document::load(std::wistream& stream, unsigned int options = parse_default);
```

</div>

</div>

<div class="paragraph">

`std::istream`引数を取る`load`は、現在の読み取り位置からストリームの末尾まで文書を読み込みます。ストリームの内容を、指定したエンコーディングのバイトストリームとして扱い、必要に応じてエンコーディングを自動検出します。そのため、開いている`std::ifstream`オブジェクトに対して`xml_document::load`を呼び出すことは、`xml_document::load_file`を呼び出すことと同じです。

</div>

<div class="paragraph">

`std::wistream`引数を取る`load`は、ストリームの内容をワイド文字ストリームとして扱います。エンコーディングは常に[encoding_wchar](#source-encoding_wchar)です。このため、ワイド文字ストリームで`load`を使う場合は、`imbue`関数の使用など、慎重なストリーム設定が必要です。通常、この設定はプラットフォーム固有です。一般に、ワイド文字ストリームの使用は勧めませんが、Unicode以外のエンコーディングから文書を読み込むことができます。たとえば、適切なロケールを設定すると、Shift-JISのデータを読み込めます。

</div>

<div class="paragraph">

ストリームを使ってファイルからXML文書を読み込む簡単な例です（[samples/load_stream.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/load_stream.cpp)）。ワイド文字ストリームやロケールを使う、より複雑な例はサンプルコードを読んでください。

</div>

<div class="listingblock">

<div class="content">

``` cpp
std::ifstream stream("weekly-utf-8.xml");
pugi::xml_parse_result result = doc.load(stream);
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-loading.errors"></span>

### <a href="#source-loading.errors" class="anchor"></a><a href="#source-loading.errors" class="link">4.4. 解析エラーの処理</a>

<div id="source-xml_parse_result" class="paragraph">

文書読み込み関数はすべて、`xml_parse_result`オブジェクトを通じて解析結果を返します。このオブジェクトには、解析状態、元のストリームの先頭から解析に成功した最後の文字までのオフセット、元のストリームのエンコーディングが含まれます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
struct xml_parse_result
{
    xml_parse_status status;
    ptrdiff_t offset;
    xml_encoding encoding;

    operator bool() const;
    const char* description() const;
};
```

</div>

</div>

<div class="paragraph">

<span id="source-xml_parse_status"></span><span id="source-xml_parse_result::status"></span> 解析状態は`xml_parse_status`列挙型で表され、次のいずれかになります。

</div>

<div class="ulist">

- <span id="source-status_ok"></span>`status_ok`は、解析中にエラーが発生しなかったことを意味します。元のストリームは有効なXML文書を表し、全体が解析されてツリーへ変換されています。

- <span id="source-status_file_not_found"></span>`status_file_not_found`は`load_file`関数からのみ返され、ファイルを開けなかったことを意味します。

- <span id="source-status_io_error"></span>`status_io_error`は、`load_file`関数と、`std::istream`または`std::wistream`引数を取る`load`関数から返されます。ファイルやストリームの読み取り中にI/Oエラーが発生したことを意味します。

- <span id="source-status_out_of_memory"></span>`status_out_of_memory`は、いずれかの割り当て時にメモリーが足りなかったことを意味します。解析中の割り当て失敗は、すべてこのエラーになります。

- <span id="source-status_internal_error"></span>`status_internal_error`は、何かが深刻に失敗したことを意味します。現在、このエラーは発生しません。

- <span id="source-status_unrecognized_tag"></span>`status_unrecognized_tag`は、タグの名前が空であるか、`#`などの不正な文字で始まっているために解析が停止したことを意味します。

- <span id="source-status_bad_pi"></span>`status_bad_pi`は、不正な文書宣言や処理命令のために解析が停止したことを意味します。

- <span id="source-status_bad_comment"></span>`status_bad_comment`、<span id="source-status_bad_cdata"></span>`status_bad_cdata`、<span id="source-status_bad_doctype"></span>`status_bad_doctype`、<span id="source-status_bad_pcdata"></span>`status_bad_pcdata`は、それぞれの型の構造が不正なために解析が停止したことを意味します。

- <span id="source-status_bad_start_element"></span>`status_bad_start_element`は、開始タグに閉じる`>`がないか、不正な記号が含まれているために解析が停止したことを意味します。

- <span id="source-status_bad_attribute"></span>`status_bad_attribute`は、値がない属性や値が引用符で囲まれていない属性など、不正な属性のために解析が停止したことを意味します。`<node attr=1>`はXMLでは不正です。

- <span id="source-status_bad_end_element"></span>`status_bad_end_element`は、終了タグの構文が不正なために解析が停止したことを意味します。たとえば、タグ名と`>`の間に余分な非空白文字がある場合です。

- <span id="source-status_end_element_mismatch"></span>`status_end_element_mismatch`は、終了タグが開始タグと一致しない（例：`<node></nedo>`）か、タグがまったく閉じられていないために解析が停止したことを意味します。

- <span id="source-status_no_document_element"></span>`status_no_document_element`は、解析中に要素ノードが見つからなかったことを意味します。通常は、空または不正な文書を示します。

</div>

<div id="source-xml_parse_result::description" class="paragraph">

`description()`メンバー関数は、解析状態を文字列へ変換するために使えます。返されるメッセージは常に英語なので、翻訳された文字列が必要であれば、独自の関数を書く必要があります。ただし、`description()`が返す正確なメッセージは版によって変わることがあるため、複雑な状態処理は`status`の値に基づいて行ってください。また、`description()`は`PUGIXML_WCHAR_MODE`でも`char`文字列を返します。`wchar_t`文字列を得るには、[as_wide](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-as_wide)を呼び出す必要があります。

</div>

<div class="paragraph">

元のデータが有効なXMLでないために解析に失敗しても、結果のツリーは破棄されません。読み込み関数がエラーを返していても、解析に成功した部分のツリーは使えます。ただし、最後の要素の名前や値が予想外のものになる場合があります。たとえば、`<node attr="value>some data</node>`のように属性値が必要な引用符で終わっていない場合、属性`attr`の値には`value>some data</node>`という文字列が含まれます。

</div>

<div id="source-xml_parse_result::offset" class="paragraph">

解析結果には状態コードに加えて`offset`メンバーがあります。元のデータのエラーで解析に失敗した場合は、解析に成功した最後の文字のオフセットが含まれ、それ以外の場合は`offset`は0です。解析効率のため、pugixmlは解析中に現在の行を追跡しません。このオフセットの単位は[pugi::char_t](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-char_t)で、charモードではバイト、ワイド文字モードではワイド文字です。多くのテキストエディターには'Go To Position'機能があり、正確なエラー位置を探すために使えます。また、メモリーから文書を読み込む場合は、エラーの説明と一緒に該当部分を表示できます。下のコード例を参照してください。

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
<td class="content">オフセットは、ネイティブエンコーディングのXMLバッファ内で計算されます。解析時にエンコーディング変換を行う場合、このオフセットでエラー位置を確実に追跡することはできません。</td>
</tr>
</tbody>
</table>

</div>

<div id="source-xml_parse_result::encoding" class="paragraph">

解析結果には`encoding`メンバーもあり、元のデータのエンコーディングが正しく推定されたかを確認できます。この値は、エンディアンも含めて、実際に解析に使われた正確なエンコーディングと等しくなります。詳しくは[エンコーディング](#source-loading.encoding)を参照してください。

</div>

<div id="source-xml_parse_result::bool" class="paragraph">

解析結果オブジェクトは暗黙に`bool`へ変換できます。解析エラーを詳細に処理する必要がなければ、読み込み関数の戻り値を`if (doc.load_file("file.xml")) { …​ } else { …​ }`のように`bool`として調べるだけで構いません。

</div>

<div class="paragraph">

読み込みエラーを処理する例です（[samples/load_error_handling.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/load_error_handling.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugi::xml_document doc;
pugi::xml_parse_result result = doc.load_string(source);

if (result)
{
    std::cout << "XML [" << source << "] parsed without errors, attr value: [" << doc.child("node").attribute("attr").value() << "]\n\n";
}
else
{
    std::cout << "XML [" << source << "] parsed with errors, attr value: [" << doc.child("node").attribute("attr").value() << "]\n";
    std::cout << "Error description: " << result.description() << "\n";
    std::cout << "Error offset: " << result.offset << " (error at [..." << (source + result.offset) << "]\n\n";
}
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-loading.options"></span>

### <a href="#source-loading.options" class="anchor"></a><a href="#source-loading.options" class="link">4.5. Parsing options</a>

<div class="paragraph">

All document loading functions accept the optional parameter `options`. This is a bitmask that customizes the parsing process: you can select the node types that are parsed and various transformations that are performed with the XML text. Disabling certain transformations can improve parsing performance for some documents; however, the code for all transformations is very well optimized, and thus the majority of documents won’t get any performance benefit. As a rule of thumb, only modify parsing flags if you want to get some nodes in the document that are excluded by default (i.e. declaration or comment nodes).

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
Note
</div></td>
<td class="content">You should use the usual bitwise arithmetics to manipulate the bitmask: to enable a flag, use <code>mask | flag</code>; to disable a flag, use <code>mask &amp; ~flag</code>.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

These flags control the resulting tree contents:

</div>

<div class="ulist">

- <span id="source-parse_declaration"></span>`parse_declaration` determines if XML document declaration (node with type [node_declaration](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_declaration)) is to be put in DOM tree. If this flag is off, it is not put in the tree, but is still parsed and checked for correctness. This flag is **off** by default.

- <span id="source-parse_doctype"></span>`parse_doctype` determines if XML document type declaration (node with type [node_doctype](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_doctype)) is to be put in DOM tree. If this flag is off, it is not put in the tree, but is still parsed and checked for correctness. This flag is **off** by default.

- <span id="source-parse_pi"></span>`parse_pi` determines if processing instructions (nodes with type [node_pi](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_pi)) are to be put in DOM tree. If this flag is off, they are not put in the tree, but are still parsed and checked for correctness. Note that `<?xml …​?>` (document declaration) is not considered to be a PI. This flag is **off** by default.

- <span id="source-parse_comments"></span>`parse_comments` determines if comments (nodes with type [node_comment](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_comment)) are to be put in DOM tree. If this flag is off, they are not put in the tree, but are still parsed and checked for correctness. This flag is **off** by default.

- <span id="source-parse_cdata"></span>`parse_cdata` determines if CDATA sections (nodes with type [node_cdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_cdata)) are to be put in DOM tree. If this flag is off, they are not put in the tree, but are still parsed and checked for correctness. This flag is **on** by default.

- <span id="source-parse_trim_pcdata"></span>`parse_trim_pcdata` determines if leading and trailing whitespace characters are to be removed from PCDATA nodes. While for some applications leading/trailing whitespace is significant, often the application only cares about the non-whitespace contents so it’s easier to trim whitespace from text during parsing. This flag is **off** by default.

- <span id="source-parse_ws_pcdata"></span>`parse_ws_pcdata` determines if PCDATA nodes (nodes with type [node_pcdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_pcdata)) that consist only of whitespace characters are to be put in DOM tree. Often whitespace-only data is not significant for the application, and the cost of allocating and storing such nodes (both memory and speed-wise) can be significant. For example, after parsing XML string `<node> <a/> </node>`, `<node>` element will have three children when `parse_ws_pcdata` is set (child with type [node_pcdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_pcdata) and value `" "`, child with type [node_element](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_element) and name `"a"`, and another child with type [node_pcdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_pcdata) and value `" "`), and only one child when `parse_ws_pcdata` is not set. This flag is **off** by default.

- <span id="source-parse_ws_pcdata_single"></span>`parse_ws_pcdata_single` determines if whitespace-only PCDATA nodes that have no sibling nodes are to be put in DOM tree. In some cases application needs to parse the whitespace-only contents of nodes, i.e. `<node> </node>`, but is not interested in whitespace markup elsewhere. It is possible to use [parse_ws_pcdata](#source-parse_ws_pcdata) flag in this case, but it results in excessive allocations and complicates document processing; this flag can be used to avoid that. As an example, after parsing XML string `<node> <a> </a> </node>` with `parse_ws_pcdata_single` flag set, `<node>` element will have one child `<a>`, and `<a>` element will have one child with type [node_pcdata](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_pcdata) and value `" "`. This flag has no effect if [parse_ws_pcdata](#source-parse_ws_pcdata) is enabled. This flag is **off** by default.

- <span id="source-parse_embed_pcdata"></span>`parse_embed_pcdata` determines if PCDATA contents is to be saved as element values. Normally element nodes have names but not values; this flag forces the parser to store the contents as a value if PCDATA is the first child of the element node (otherwise PCDATA node is created as usual). This can significantly reduce the memory required for documents with many PCDATA nodes. To retrieve the data you can use `xml_node::value()` on the element nodes or any of the higher-level functions like `child_value` or `text`. Since this flag significantly changes the DOM structure it is only recommended for parsing documents with many PCDATA nodes in memory-constrained environments. This flag is **off** by default.

- <span id="source-parse_merge_pcdata"></span>`parse_merge_pcdata` determines if PCDATA contents is to be merged with the previous PCDATA node when no intermediary nodes are present between them. If the PCDATA contains CDATA sections, PI nodes, or comments in between, and either of the flags [parse_cdata](#source-parse_cdata), [parse_pi](#source-parse_pi), [parse_comments](#source-parse_comments) is not set, the contents of the PCDATA node will be merged with the previous one. This flag is **off** by default. Note that this flag is not compatible with `parse_embed_pcdata`.

- <span id="source-parse_fragment"></span>`parse_fragment` determines if document should be treated as a fragment of a valid XML. Parsing document as a fragment leads to top-level PCDATA content (i.e. text that is not located inside a node) to be added to a tree, and additionally treats documents without element nodes as valid and permits multiple top-level element nodes (currently multiple top-level element nodes are also permitted when the flag is off, but that behavior should not be relied on). This flag is **off** by default.

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
Caution
</div></td>
<td class="content">Using in-place parsing (<a href="#source-xml_document::load_buffer_inplace">load_buffer_inplace</a>) with <code>parse_fragment</code> flag may result in the loss of the last character of the buffer if it is a part of PCDATA. Since PCDATA values are null-terminated strings, the only way to resolve this is to provide a null-terminated buffer as an input to <code>load_buffer_inplace</code> - i.e. <code>doc.load_buffer_inplace("test\0", 5, pugi::parse_default | pugi::parse_fragment)</code>.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

These flags control the transformation of tree element contents:

</div>

<div class="ulist">

- <span id="source-parse_escapes"></span>`parse_escapes` determines if character and entity references are to be expanded during the parsing process. Character references have the form `&#…​;` or `&#x…​;` (`…​` is Unicode numeric representation of character in either decimal (`&#…​;`) or hexadecimal (`&#x…​;`) form), entity references are `&lt;`, `&gt;`, `&amp;`, `&apos;` and `&quot;` (note that as pugixml does not handle DTD, the only allowed entities are predefined ones). If character/entity reference can not be expanded, it is left as is, so you can do additional processing later. Reference expansion is performed on attribute values and PCDATA content. This flag is **on** by default.

- <span id="source-parse_eol"></span>`parse_eol` determines if EOL handling (that is, replacing sequences `\r\n` by a single `\n` character, and replacing all standalone `\r` characters by `\n`) is to be performed on input data (that is, comment contents, PCDATA/CDATA contents and attribute values). This flag is **on** by default.

- <span id="source-parse_wconv_attribute"></span>`parse_wconv_attribute` determines if attribute value normalization should be performed for all attributes. This means, that whitespace characters (new line, tab and space) are replaced with space (`' '`). New line characters are always treated as if [parse_eol](#source-parse_eol) is set, i.e. `\r\n` is converted to a single space. This flag is **on** by default.

- <span id="source-parse_wnorm_attribute"></span>`parse_wnorm_attribute` determines if extended attribute value normalization should be performed for all attributes. This means, that after attribute values are normalized as if [parse_wconv_attribute](#source-parse_wconv_attribute) was set, leading and trailing space characters are removed, and all sequences of space characters are replaced by a single space character. [parse_wconv_attribute](#source-parse_wconv_attribute) has no effect if this flag is on. This flag is **off** by default.

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
Note
</div></td>
<td class="content"><code>parse_wconv_attribute</code> option performs transformations that are required by W3C specification for attributes that are declared as CDATA; <a href="#source-parse_wnorm_attribute">parse_wnorm_attribute</a> performs transformations required for NMTOKENS attributes. In the absence of document type declaration all attributes should behave as if they are declared as CDATA, thus <a href="#source-parse_wconv_attribute">parse_wconv_attribute</a> is the default option.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

Additionally there are three predefined option masks:

</div>

<div class="ulist">

- <span id="source-parse_minimal"></span>`parse_minimal` has all options turned off. This option mask means that pugixml does not add declaration nodes, document type declaration nodes, PI nodes, CDATA sections and comments to the resulting tree and does not perform any conversion for input data, so theoretically it is the fastest mode. However, as mentioned above, in practice [parse_default](#source-parse_default) is usually equally fast.

- <span id="source-parse_default"></span>`parse_default` is the default set of flags, i.e. it has all options set to their default values. It includes parsing CDATA sections (comments/PIs are not parsed), performing character and entity reference expansion, replacing whitespace characters with spaces in attribute values and performing EOL handling. Note, that PCDATA sections consisting only of whitespace characters are not parsed (by default) for performance reasons.

- <span id="source-parse_full"></span>`parse_full` is the set of flags which adds nodes of all types to the resulting tree and performs default conversions for input data. It includes parsing CDATA sections, comments, PI nodes, document declaration node and document type declaration node, performing character and entity reference expansion, replacing whitespace characters with spaces in attribute values and performing EOL handling. Note, that PCDATA sections consisting only of whitespace characters are not parsed in this mode.

</div>

<div class="paragraph">

This is an example of using different parsing options ([samples/load_options.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/load_options.cpp)):

</div>

<div class="listingblock">

<div class="content">

``` cpp
const char* source = "<!--comment--><node>&lt;</node>";

// Parsing with default options; note that comment node is not added to the tree, and entity reference &lt; is expanded
doc.load_string(source);
std::cout << "First node value: [" << doc.first_child().value() << "], node child value: [" << doc.child_value("node") << "]\n";

// Parsing with additional parse_comments option; comment node is now added to the tree
doc.load_string(source, pugi::parse_default | pugi::parse_comments);
std::cout << "First node value: [" << doc.first_child().value() << "], node child value: [" << doc.child_value("node") << "]\n";

// Parsing with additional parse_comments option and without the (default) parse_escapes option; &lt; is not expanded
doc.load_string(source, (pugi::parse_default | pugi::parse_comments) & ~pugi::parse_escapes);
std::cout << "First node value: [" << doc.first_child().value() << "], node child value: [" << doc.child_value("node") << "]\n";

// Parsing with minimal option mask; comment node is not added to the tree, and &lt; is not expanded
doc.load_string(source, pugi::parse_minimal);
std::cout << "First node value: [" << doc.first_child().value() << "], node child value: [" << doc.child_value("node") << "]\n";
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-loading.encoding"></span>

### <a href="#source-loading.encoding" class="anchor"></a><a href="#source-loading.encoding" class="link">4.6. Encodings</a>

<div id="source-xml_encoding" class="paragraph">

pugixml supports all popular Unicode encodings (UTF-8, UTF-16 (big and little endian), UTF-32 (big and little endian); UCS-2 is naturally supported since it’s a strict subset of UTF-16) as well as some non-Unicode encodings (Latin-1) and handles all encoding conversions. Most loading functions accept the optional parameter `encoding`. This is a value of enumeration type `xml_encoding`, that can have the following values:

</div>

<div class="ulist">

- <span id="source-encoding_auto"></span>`encoding_auto` means that pugixml will try to guess the encoding based on source XML data. The algorithm is a modified version of the one presented in [Appendix F of XML recommendation](http://www.w3.org/TR/REC-xml/#sec-guessing). It tries to find a Byte Order Mark of one of the supported encodings first; if that fails, it checks if the first few bytes of the input data look like a representation of `<` or `<?` in one of UTF-16 or UTF-32 variants; if that fails as well, encoding is assumed to be either UTF-8 or one of the non-Unicode encodings - to make the final decision the algorithm tries to parse the `encoding` attribute of the XML document declaration, ultimately falling back to UTF-8 if document declaration is not present or does not specify a supported encoding.

- <span id="source-encoding_utf8"></span>`encoding_utf8` corresponds to UTF-8 encoding as defined in the Unicode standard; UTF-8 sequences with length equal to 5 or 6 are not standard and are rejected.

- <span id="source-encoding_utf16_le"></span>`encoding_utf16_le` corresponds to little-endian UTF-16 encoding as defined in the Unicode standard; surrogate pairs are supported.

- <span id="source-encoding_utf16_be"></span>`encoding_utf16_be` corresponds to big-endian UTF-16 encoding as defined in the Unicode standard; surrogate pairs are supported.

- <span id="source-encoding_utf16"></span>`encoding_utf16` corresponds to UTF-16 encoding as defined in the Unicode standard; the endianness is assumed to be that of the target platform.

- <span id="source-encoding_utf32_le"></span>`encoding_utf32_le` corresponds to little-endian UTF-32 encoding as defined in the Unicode standard.

- <span id="source-encoding_utf32_be"></span>`encoding_utf32_be` corresponds to big-endian UTF-32 encoding as defined in the Unicode standard.

- <span id="source-encoding_utf32"></span>`encoding_utf32` corresponds to UTF-32 encoding as defined in the Unicode standard; the endianness is assumed to be that of the target platform.

- <span id="source-encoding_wchar"></span>`encoding_wchar` corresponds to the encoding of `wchar_t` type; it has the same meaning as either `encoding_utf16` or `encoding_utf32`, depending on `wchar_t` size.

- <span id="source-encoding_latin1"></span>`encoding_latin1` corresponds to ISO-8859-1 encoding (also known as Latin-1).

</div>

<div class="paragraph">

The algorithm used for `encoding_auto` correctly detects any supported Unicode encoding for all well-formed XML documents (since they start with document declaration) and for all other XML documents that start with `<`; if your XML document does not start with `<` and has encoding that is different from UTF-8, use the specific encoding.

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
Note
</div></td>
<td class="content">The current behavior for Unicode conversion is to skip all invalid UTF sequences during conversion. This behavior should not be relied upon; moreover, in case no encoding conversion is performed, the invalid sequences are not removed, so you’ll get them as is in node/attribute contents.</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<span id="source-loading.w3c"></span>

### <a href="#source-loading.w3c" class="anchor"></a><a href="#source-loading.w3c" class="link">4.7. Conformance to W3C specification</a>

<div class="paragraph">

pugixml is not fully W3C conformant - it can load any valid XML document, but does not perform some well-formedness checks. While considerable effort is made to reject invalid XML documents, some validation is not performed because of performance reasons.

</div>

<div class="paragraph">

There is only one non-conformant behavior when dealing with valid XML documents: pugixml does not use information supplied in document type declaration for parsing. This means that entities declared in DOCTYPE are not expanded, and all attribute/PCDATA values are always processed in a uniform way that depends only on parsing options.

</div>

<div class="paragraph">

As for rejecting invalid XML documents, there are a number of incompatibilities with W3C specification, including:

</div>

<div class="ulist">

- Multiple attributes of the same node can have equal names.

- Tag and attribute names are not fully validated for consisting of allowed characters, so some invalid tags are not rejected

- Attribute values which contain `<` are not rejected.

- Invalid entity/character references are not rejected and are instead left as is.

- Comment values can contain `--`.

- XML data is not required to begin with document declaration; additionally, document declaration can appear after comments and other nodes.

- Invalid document type declarations are silently ignored in some cases.

- Unicode validation is not performed so invalid UTF sequences are not rejected.

- Document can contain multiple top-level element nodes.

</div>

</div>

</div>

</div>
