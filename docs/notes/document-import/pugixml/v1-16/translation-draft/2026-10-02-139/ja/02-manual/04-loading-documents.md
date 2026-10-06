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

### <a href="#source-loading.options" class="anchor"></a><a href="#source-loading.options" class="link">4.5. 解析オプション</a>

<div class="paragraph">

文書読み込み関数はすべて、省略可能な`options`パラメーターを受け取ります。これは解析処理を調整するビットマスクで、解析するノード型と、XMLテキストに適用する各種変換を選べます。一部の変換を無効にすると、文書によっては解析性能が向上することがあります。ただし、すべての変換処理は十分に最適化されているため、大多数の文書では性能上の利点はありません。目安として、既定では除外されるノード（宣言やコメントなど）を文書に含めたい場合にだけ、解析フラグを変更してください。

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
<td class="content">ビットマスクの操作には、通常のビット演算を使ってください。フラグを有効にするには<code>mask | flag</code>、無効にするには<code>mask &amp; ~flag</code>を使います。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

次のフラグは、結果のツリーの内容を制御します。

</div>

<div class="ulist">

- <span id="source-parse_declaration"></span>`parse_declaration`は、XML文書宣言（[node_declaration](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_declaration)型のノード）をDOMツリーに入れるかどうかを決めます。無効の場合、ツリーには入りませんが、解析と正しさの検査は引き続き行われます。既定では**無効**です。

- <span id="source-parse_doctype"></span>`parse_doctype`は、XML文書型宣言（[node_doctype](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_doctype)型のノード）をDOMツリーに入れるかどうかを決めます。無効の場合、ツリーには入りませんが、解析と正しさの検査は引き続き行われます。既定では**無効**です。

- <span id="source-parse_pi"></span>`parse_pi`は、処理命令（[node_pi](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pi)型のノード）をDOMツリーに入れるかどうかを決めます。無効の場合、ツリーには入りませんが、解析と正しさの検査は引き続き行われます。`<?xml …​?>`（文書宣言）はPIとは見なされません。既定では**無効**です。

- <span id="source-parse_comments"></span>`parse_comments`は、コメント（[node_comment](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_comment)型のノード）をDOMツリーに入れるかどうかを決めます。無効の場合、ツリーには入りませんが、解析と正しさの検査は引き続き行われます。既定では**無効**です。

- <span id="source-parse_cdata"></span>`parse_cdata`は、CDATAセクション（[node_cdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_cdata)型のノード）をDOMツリーに入れるかどうかを決めます。無効の場合、ツリーには入りませんが、解析と正しさの検査は引き続き行われます。既定では**有効**です。

- <span id="source-parse_trim_pcdata"></span>`parse_trim_pcdata`は、PCDATAノードの先頭と末尾の空白文字を取り除くかどうかを決めます。アプリケーションによっては先頭や末尾の空白が重要ですが、多くの場合、空白以外の内容だけが必要なので、解析時にテキストの空白を取り除く方が扱いやすくなります。既定では**無効**です。

- <span id="source-parse_ws_pcdata"></span>`parse_ws_pcdata`は、空白文字だけからなるPCDATAノード（[node_pcdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pcdata)型のノード）をDOMツリーに入れるかどうかを決めます。多くの場合、空白だけのデータはアプリケーションにとって重要ではなく、こうしたノードの割り当てと保持には、メモリーと速度の両面で大きな負担がかかることがあります。たとえば、XML文字列`<node> <a/> </node>`を解析すると、`parse_ws_pcdata`を設定した場合、`<node>`要素は3個の子を持ちます。値が`" "`の[node_pcdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pcdata)型の子、名前が`"a"`の[node_element](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_element)型の子、そして値が`" "`の別の[node_pcdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pcdata)型の子です。`parse_ws_pcdata`を設定しない場合は、子は1個だけです。既定では**無効**です。

- <span id="source-parse_ws_pcdata_single"></span>`parse_ws_pcdata_single`は、兄弟ノードを持たない、空白だけのPCDATAノードをDOMツリーに入れるかどうかを決めます。たとえば`<node> </node>`のようなノードの空白だけの内容を解析する必要があり、それ以外の空白マークアップには関心がない場合があります。[parse_ws_pcdata](#source-parse_ws_pcdata)フラグも使えますが、余分な割り当てが発生し、文書処理も複雑になります。このフラグを使うと、それを避けられます。たとえば、`parse_ws_pcdata_single`を設定してXML文字列`<node> <a> </a> </node>`を解析すると、`<node>`要素の子は`<a>`の1個だけになり、`<a>`要素の子は、値が`" "`の[node_pcdata](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_pcdata)型の1個だけになります。[parse_ws_pcdata](#source-parse_ws_pcdata)が有効な場合、このフラグは効果を持ちません。既定では**無効**です。

- <span id="source-parse_embed_pcdata"></span>`parse_embed_pcdata`は、PCDATAの内容を要素の値として保存するかどうかを決めます。通常、要素ノードは名前を持ちますが値は持ちません。このフラグを指定すると、PCDATAが要素ノードの最初の子である場合、その内容を値として保存します。それ以外の場合は、通常どおりPCDATAノードを作ります。これにより、PCDATAノードの多い文書で必要なメモリーを大幅に減らせます。データの取得には、要素ノードの`xml_node::value()`や、`child_value`、`text`などの高水準の関数を使えます。このフラグはDOM構造を大きく変えるため、メモリーが限られた環境で、PCDATAノードの多い文書を解析する場合にだけ推奨します。既定では**無効**です。

- <span id="source-parse_merge_pcdata"></span>`parse_merge_pcdata`は、間にノードがなければ、PCDATAの内容を直前のPCDATAノードと結合するかどうかを決めます。PCDATAの間にCDATAセクション、PIノード、コメントがあり、[parse_cdata](#source-parse_cdata)、[parse_pi](#source-parse_pi)、[parse_comments](#source-parse_comments)のいずれかが設定されていない場合、PCDATAノードの内容は直前のものと結合されます。既定では**無効**です。このフラグは`parse_embed_pcdata`と互換性がありません。

- <span id="source-parse_fragment"></span>`parse_fragment`は、文書を有効なXMLのフラグメントとして扱うかどうかを決めます。フラグメントとして解析すると、最上位のPCDATAの内容（ノードの内部にないテキスト）がツリーへ追加されます。また、要素ノードのない文書も有効として扱い、最上位の要素ノードを複数持つことも認めます。現在は、このフラグが無効でも最上位の要素ノードを複数持つことが認められていますが、その動作には依存しないでください。既定では**無効**です。

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
<td class="content"><code>parse_fragment</code>フラグとインプレース解析（<a href="#source-xml_document::load_buffer_inplace">load_buffer_inplace</a>）を併用すると、バッファの最後の文字がPCDATAの一部である場合、その文字が失われることがあります。PCDATAの値はnull終端文字列なので、これを解決する唯一の方法は、null終端のバッファを<code>load_buffer_inplace</code>への入力として渡すことです。たとえば<code>doc.load_buffer_inplace("test\0", 5, pugi::parse_default | pugi::parse_fragment)</code>です。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

次のフラグは、ツリー要素の内容の変換を制御します。

</div>

<div class="ulist">

- <span id="source-parse_escapes"></span>`parse_escapes`は、解析時に文字参照と実体参照を展開するかどうかを決めます。文字参照の形式は`&#…​;`または`&#x…​;`で、`…​`は文字のUnicode数値表現を10進数（`&#…​;`）または16進数（`&#x…​;`）で表したものです。実体参照は`&lt;`、`&gt;`、`&amp;`、`&apos;`、`&quot;`です。pugixmlはDTDを処理しないため、使える実体はあらかじめ定義されたものだけです。文字参照や実体参照を展開できない場合は、そのまま残るので、後から追加の処理を行えます。参照の展開は属性値とPCDATAの内容に対して行われます。既定では**有効**です。

- <span id="source-parse_eol"></span>`parse_eol`は、入力データ（コメント内容、PCDATA・CDATA内容、属性値）に改行処理を行うかどうかを決めます。改行処理とは、`\r\n`を1文字の`\n`へ置き換え、単独の`\r`をすべて`\n`へ置き換えることです。既定では**有効**です。

- <span id="source-parse_wconv_attribute"></span>`parse_wconv_attribute`は、すべての属性について属性値の正規化を行うかどうかを決めます。これは、空白文字（改行、タブ、スペース）をスペース（`' '`）へ置き換えることを意味します。改行文字は常に[parse_eol](#source-parse_eol)が設定されているかのように扱われ、`\r\n`は1個のスペースへ変換されます。既定では**有効**です。

- <span id="source-parse_wnorm_attribute"></span>`parse_wnorm_attribute`は、すべての属性について拡張した属性値の正規化を行うかどうかを決めます。[parse_wconv_attribute](#source-parse_wconv_attribute)を設定した場合と同じ正規化の後に、先頭と末尾のスペースを除去し、連続するスペースをすべて1個のスペースに置き換えます。このフラグが有効な場合、[parse_wconv_attribute](#source-parse_wconv_attribute)は効果を持ちません。既定では**無効**です。

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
<td class="content"><code>parse_wconv_attribute</code>オプションは、CDATAとして宣言された属性についてW3C仕様が要求する変換を行います。<a href="#source-parse_wnorm_attribute">parse_wnorm_attribute</a>は、NMTOKENS属性に必要な変換を行います。文書型宣言がない場合、すべての属性はCDATAとして宣言されたかのように振る舞うべきなので、<a href="#source-parse_wconv_attribute">parse_wconv_attribute</a>が既定のオプションです。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

さらに、あらかじめ定義されたオプションマスクが3つあります。

</div>

<div class="ulist">

- <span id="source-parse_minimal"></span>`parse_minimal`は、すべてのオプションを無効にします。このマスクでは、pugixmlは結果のツリーに宣言ノード、文書型宣言ノード、PIノード、CDATAセクション、コメントを追加せず、入力データの変換も行いません。そのため、理論上は最速のモードです。ただし、前述のとおり、実際には[parse_default](#source-parse_default)も通常は同じ速さです。

- <span id="source-parse_default"></span>`parse_default`は、すべてのオプションを既定値に設定した、既定のフラグ集合です。CDATAセクションの解析（コメントとPIは解析しません）、文字参照と実体参照の展開、属性値の空白文字からスペースへの置き換え、改行処理が含まれます。性能上の理由から、空白文字だけのPCDATAセクションは既定では解析されません。

- <span id="source-parse_full"></span>`parse_full`は、すべての型のノードを結果のツリーに追加し、入力データに既定の変換を行うフラグ集合です。CDATAセクション、コメント、PIノード、文書宣言ノード、文書型宣言ノードの解析、文字参照と実体参照の展開、属性値の空白文字からスペースへの置き換え、改行処理が含まれます。このモードでも、空白文字だけのPCDATAセクションは解析されません。

</div>

<div class="paragraph">

各種解析オプションを使う例です（[samples/load_options.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/load_options.cpp)）。

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

### <a href="#source-loading.encoding" class="anchor"></a><a href="#source-loading.encoding" class="link">4.6. エンコーディング</a>

<div id="source-xml_encoding" class="paragraph">

pugixmlは、広く使われているすべてのUnicodeエンコーディング（UTF-8、UTF-16のビッグエンディアンとリトルエンディアン、UTF-32のビッグエンディアンとリトルエンディアン）と、一部の非Unicodeエンコーディング（Latin-1）に対応し、すべてのエンコーディング変換を処理します。UCS-2はUTF-16の厳密な部分集合なので、当然ながら対応しています。ほとんどの読み込み関数は、省略可能な`encoding`パラメーターを受け取ります。これは`xml_encoding`列挙型の値で、次のいずれかになります。

</div>

<div class="ulist">

- <span id="source-encoding_auto"></span>`encoding_auto`は、XMLの原データからエンコーディングの推定を試みることを意味します。このアルゴリズムは、[XML勧告の附録F](http://www.w3.org/TR/REC-xml/#sec-guessing)に示されたものを変更したものです。まず、対応するエンコーディングのいずれかのバイト順マークを探します。見つからなければ、入力の先頭数バイトが、UTF-16またはUTF-32のいずれかの形式の`<`や`<?`に見えるかを調べます。それでも分からなければ、UTF-8か非Unicodeエンコーディングのいずれかと仮定します。最終的な判断のために、XML文書宣言の`encoding`属性の解析を試み、文書宣言がないか、対応するエンコーディングを指定していない場合は、最終的にUTF-8を使います。

- <span id="source-encoding_utf8"></span>`encoding_utf8`は、Unicode標準で定義されたUTF-8エンコーディングに対応します。長さが5または6のUTF-8シーケンスは標準ではないため、拒否されます。

- <span id="source-encoding_utf16_le"></span>`encoding_utf16_le`は、Unicode標準で定義されたリトルエンディアンのUTF-16エンコーディングに対応します。サロゲートペアにも対応しています。

- <span id="source-encoding_utf16_be"></span>`encoding_utf16_be`は、Unicode標準で定義されたビッグエンディアンのUTF-16エンコーディングに対応します。サロゲートペアにも対応しています。

- <span id="source-encoding_utf16"></span>`encoding_utf16`は、Unicode標準で定義されたUTF-16エンコーディングに対応します。エンディアンは、対象プラットフォームと同じと仮定します。

- <span id="source-encoding_utf32_le"></span>`encoding_utf32_le`は、Unicode標準で定義されたリトルエンディアンのUTF-32エンコーディングに対応します。

- <span id="source-encoding_utf32_be"></span>`encoding_utf32_be`は、Unicode標準で定義されたビッグエンディアンのUTF-32エンコーディングに対応します。

- <span id="source-encoding_utf32"></span>`encoding_utf32`は、Unicode標準で定義されたUTF-32エンコーディングに対応します。エンディアンは、対象プラットフォームと同じと仮定します。

- <span id="source-encoding_wchar"></span>`encoding_wchar`は、`wchar_t`型のエンコーディングに対応します。`wchar_t`のサイズに応じて、`encoding_utf16`または`encoding_utf32`と同じ意味になります。

- <span id="source-encoding_latin1"></span>`encoding_latin1`は、ISO-8859-1エンコーディング（Latin-1とも呼ばれます）に対応します。

</div>

<div class="paragraph">

`encoding_auto`のアルゴリズムは、すべての整形式XML文書（文書宣言で始まるため）と、`<`で始まるその他のすべてのXML文書について、対応するUnicodeエンコーディングを正しく検出します。XML文書が`<`で始まらず、UTF-8以外のエンコーディングを使う場合は、エンコーディングを具体的に指定してください。

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
<td class="content">現在のUnicode変換は、変換中に不正なUTFシーケンスをすべて読み飛ばします。この動作には依存しないでください。また、エンコーディング変換を行わない場合、不正なシーケンスは除去されず、ノードや属性の内容にそのまま含まれます。</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<span id="source-loading.w3c"></span>

### <a href="#source-loading.w3c" class="anchor"></a><a href="#source-loading.w3c" class="link">4.7. W3C仕様への準拠</a>

<div class="paragraph">

pugixmlはW3C仕様に完全には準拠していません。有効なXML文書はすべて読み込めますが、一部の整形式性の検査は行いません。不正なXML文書を拒否するために相当の努力が払われていますが、性能上の理由から一部の検証を省いています。

</div>

<div class="paragraph">

有効なXML文書を扱う場合の非準拠動作は1つだけです。pugixmlは解析時に、文書型宣言で提供された情報を使いません。このため、DOCTYPEで宣言された実体は展開されず、すべての属性値・PCDATA値は、解析オプションだけに依存する一律の方法で処理されます。

</div>

<div class="paragraph">

不正なXML文書の拒否については、次のものを含め、W3C仕様と一致しない点がいくつかあります。

</div>

<div class="ulist">

- 同じノードの複数の属性が、同じ名前を持つことがあります。

- タグ名と属性名が許可された文字だけで構成されるかどうかを完全には検証しないため、一部の不正なタグは拒否されません。

- `<`を含む属性値は拒否されません。

- 不正な実体参照や文字参照は拒否されず、そのまま残されます。

- コメントの値に`--`を含められます。

- XMLデータは文書宣言で始まる必要がなく、文書宣言がコメントやその他のノードの後に現れることもあります。

- 不正な文書型宣言は、場合によっては通知せず無視されます。

- Unicodeの検証は行われないため、不正なUTFシーケンスは拒否されません。

- 文書は最上位の要素ノードを複数含められます。

</div>

</div>

</div>

</div>
