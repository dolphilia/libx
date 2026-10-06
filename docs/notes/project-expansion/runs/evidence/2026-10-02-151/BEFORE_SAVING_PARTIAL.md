---
title: "文書の保存"
description: "pugixml 1.16の公式文書保存説明全文。"
licenseSource: "pugixml-manual-1.16"
---

<div class="sect1">

<span id="source-saving"></span>

## <a href="#source-saving" class="anchor"></a><a href="#source-saving" class="link">7. 文書の保存</a>

<div class="sectionbody">

<div class="paragraph">

新しい文書を作成したり、既存の文書を読み込んで処理したりした後は、結果をファイルへ保存する必要がよくあります。また、文書全体や部分ツリーをストリームへ出力すると便利な場合もあります。用途には、デバッグ表示、ネットワークやほかのテキスト用媒体を通じた直列化などがあります。pugixmlには、文書の任意の部分ツリーを、ファイル、ストリーム、汎用の転送インターフェースへ出力する関数があります。これらの関数は、出力形式を調整でき（[出力オプション](#source-saving.options)を参照）、必要なエンコーディング変換も行います（[エンコーディング](#source-saving.encoding)を参照）。この節では、関連する機能を説明します。

</div>

<div class="paragraph">

出力先へ書き込む前に、ノードや属性のデータは、ノード型に応じて適切に整形されます。`<`や`&`など、XMLの特殊記号はすべて適切にエスケープされます。ただし、[format_no_escapes](#source-format_no_escapes)フラグを設定した場合は除きます。ノードや属性の名前の設定忘れに備え、空の名前は`":anonymous"`として出力されます。整形式の出力を得るには、すべてのノードと属性の名前に意味のある値を設定してください。

</div>

<div class="paragraph">

値に`"]]>"`を含むCDATAセクションは、次のように複数のセクションへ分割されます。値が`"pre]]>post"`のセクションは、`<![CDATA[pre]]]]><![CDATA[>post]]>`として書き出されます。これは文書の構造を変えます。保存後に読み込むと、CDATAセクションが1つではなく2つになりますが、CDATAの内容をエスケープする唯一の方法です。

</div>

<div class="sect2">

<span id="source-saving.file"></span>

### <a href="#source-saving.file" class="anchor"></a><a href="#source-saving.file" class="link">7.1. ファイルへの文書の保存</a>

<div class="paragraph">

<span id="source-xml_document::save_file"></span><span id="source-xml_document::save_file_wide"></span> 文書全体をファイルへ保存するには、次の関数のいずれかを使えます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
bool xml_document::save_file(const char* path, const char_t* indent = "\t", unsigned int flags = format_default, xml_encoding encoding = encoding_auto) const;
bool xml_document::save_file(const wchar_t* path, const char_t* indent = "\t", unsigned int flags = format_default, xml_encoding encoding = encoding_auto) const;
```

</div>

</div>

<div class="paragraph">

これらの関数は、第1引数にファイルパスを取り、ほかに省略可能な引数が3つあります。インデントとほかの出力オプション（[出力オプション](#source-saving.options)を参照）、出力データのエンコーディング（[エンコーディング](#source-saving.encoding)を参照）を指定します。パスは対象OSの形式に従います。相対パスでも絶対パスでも構いませんが、対象システムの区切り文字を使い、ファイルシステムが大文字と小文字を区別する場合には正確な文字の大小を指定するなどの必要があります。成功時には`true`を返し、ファイルを開けない場合や書き込めない場合には`false`を返します。

</div>

<div class="paragraph">

最初の関数（`const char* path`を受け取るもの）は、システムのファイルオープン関数へパスをそのまま渡します。2番目の関数は、ランタイムライブラリが専用のファイルオープン関数を提供していればそれを使い、それ以外の場合はパスをUTF-8へ変換してシステムのファイルオープン関数を使います。

</div>

<div id="source-xml_writer_file" class="paragraph">

`save_file`は対象ファイルを書き込み用に開き、要求されたヘッダーを出力してから、文書の内容を保存します。既定では、文書に宣言がすでにない限り、文書宣言を出力します。`save_file`の呼び出しは、`FILE*`ハンドルだけをコンストラクターの引数として`xml_writer_file`オブジェクトを作成し、`save`を呼び出すことと同じです。writerインターフェースの詳細は、[writerインターフェースによる文書の保存](#source-saving.writer)を参照してください。

</div>

<div class="paragraph">

XML文書をファイルへ保存する簡単な例です（[samples/save_file.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/save_file.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
// save document to file
std::cout << "Saving result: " << doc.save_file("save_file_output.xml") << std::endl;
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-saving.stream"></span>

### <a href="#source-saving.stream" class="anchor"></a><a href="#source-saving.stream" class="link">7.2. C++ IOstreamへの文書の保存</a>

<div id="source-xml_document::save_stream" class="paragraph">

相互運用性を高めるため、pugixmlには、C++の`std::ostream`インターフェースを実装した任意のオブジェクトへ文書を保存する関数があります。これにより、標準のC++ストリーム（ファイルストリームなど）や、インターフェースに準拠した第三者の実装（Boost Iostreamsなど）へ文書を保存できます。特に、`std::cout`を保存先に使えるため、デバッグ出力が簡単になります。関数は2つあり、一方はナロー文字ストリーム、もう一方はワイド文字ストリームを扱います。

</div>

<div class="listingblock">

<div class="content">

``` cpp
void xml_document::save(std::ostream& stream, const char_t* indent = "\t", unsigned int flags = format_default, xml_encoding encoding = encoding_auto) const;
void xml_document::save(std::wostream& stream, const char_t* indent = "\t", unsigned int flags = format_default) const;
```

</div>

</div>

<div class="paragraph">

`std::ostream`引数を取る`save`は、`save_file`と同じ方法で文書をストリームへ保存します。つまり、要求されたヘッダーを出力し、エンコーディング変換も行います。一方、`std::wostream`引数を取る`save`は、ワイド文字ストリームへ[encoding_wchar](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-encoding_wchar)エンコーディングで文書を保存します。このため、ワイド文字ストリームで`save`を使う場合は、`imbue`関数の使用など、通常はプラットフォーム固有の慎重なストリーム設定が必要です。一般に、ワイド文字ストリームの使用は勧めませんが、Unicode以外のエンコーディングへ文書を保存できます。たとえば、適切なロケールを設定すれば、Shift-JISのデータを保存できます。

</div>

<div id="source-xml_writer_stream" class="paragraph">

ストリームを出力先にして`save`を呼び出すことは、ストリームだけをコンストラクターの引数として`xml_writer_stream`オブジェクトを作成し、`save`を呼び出すことと同じです。writerインターフェースの詳細は、[writerインターフェースによる文書の保存](#source-saving.writer)を参照してください。ワイド文字ストリームで`xml_writer_stream`を使う場合は、ワイド文字データを想定するため、`encoding_wchar`を明示的に渡さなければなりません。

</div>

<div class="paragraph">

XML文書を標準出力へ保存する簡単な例です（[samples/save_stream.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/save_stream.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
// save document to standard output
std::cout << "Document:\n";
doc.save(std::cout);
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-saving.writer"></span>

### <a href="#source-saving.writer" class="anchor"></a><a href="#source-saving.writer" class="link">7.3. writerインターフェースによる文書の保存</a>

<div class="paragraph">

<span id="source-xml_document::save"></span><span id="source-xml_writer"></span><span id="source-xml_writer::write"></span> これまでに説明した保存関数は、すべてwriterインターフェースを使って実装されています。関数を1つだけ持つ単純なインターフェースで、出力処理中に、文書データの断片を入力として複数回呼び出されます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
class xml_writer
{
public:
    virtual void write(const void* data, size_t size) = 0;
};

void xml_document::save(xml_writer& writer, const char_t* indent = "\t", unsigned int flags = format_default, xml_encoding encoding = encoding_auto) const;
```

</div>

</div>

<div class="paragraph">

ソケットなど、独自の転送方法で文書を出力するには、`xml_writer`インターフェースを実装したオブジェクトを作成し、`save`へ渡してください。`xml_writer::write`はバッファを入力として呼び出されます。`data`はバッファの先頭を指し、`size`はバイト単位のバッファサイズです。`write`の実装は、バッファを転送先へ書き込まなければなりません。`write`が戻った後はバッファ内容が変わるため、渡されたバッファのポインターを保存しておくことはできません。バッファには、指定したエンコーディングの文書データの断片が含まれます。

</div>

<div class="paragraph">

`write`は比較的大きなブロックで呼び出されます。通常は数キロバイトですが、最後のブロックは小さい場合があります。このため、多くの場合、実装内で追加のバッファリングを行う必要はありません。

</div>

<div class="paragraph">

文書データをSTL文字列へ保存する独自writerの簡単な例です（[samples/save_custom_writer.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/save_custom_writer.cpp)）。より複雑な例は、サンプルコードを読んでください。

</div>

<div class="listingblock">

<div class="content">

``` cpp
struct xml_string_writer: pugi::xml_writer
{
    std::string result;

    virtual void write(const void* data, size_t size)
    {
        result.append(static_cast<const char*>(data), size);
    }
};
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-saving.subtree"></span>

### <a href="#source-saving.subtree" class="anchor"></a><a href="#source-saving.subtree" class="link">7.4. Saving a single subtree</a>

<div class="paragraph">

<span id="source-xml_node::print"></span><span id="source-xml_node::print_stream"></span> While the previously described functions save the whole document to the destination, it is easy to save a single subtree. The following functions are provided:

</div>

<div class="listingblock">

<div class="content">

``` cpp
void xml_node::print(std::ostream& os, const char_t* indent = "\t", unsigned int flags = format_default, xml_encoding encoding = encoding_auto, unsigned int depth = 0) const;
void xml_node::print(std::wostream& os, const char_t* indent = "\t", unsigned int flags = format_default, unsigned int depth = 0) const;
void xml_node::print(xml_writer& writer, const char_t* indent = "\t", unsigned int flags = format_default, xml_encoding encoding = encoding_auto, unsigned int depth = 0) const;
```

</div>

</div>

<div class="paragraph">

These functions have the same arguments with the same meaning as the corresponding `xml_document::save` functions, and allow you to save the subtree to either a C++ IOstream or to any object that implements `xml_writer` interface.

</div>

<div class="paragraph">

Saving a subtree differs from saving the whole document: the process behaves as if [format_write_bom](#source-format_write_bom) is off, and [format_no_declaration](#source-format_no_declaration) is on, even if actual values of the flags are different. This means that BOM is not written to the destination, and document declaration is only written if it is the node itself or is one of node’s children. Note that this also holds if you’re saving a document; this example ([samples/save_subtree.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/save_subtree.cpp)) illustrates the difference:

</div>

<div class="listingblock">

<div class="content">

``` cpp
// get a test document
pugi::xml_document doc;
doc.load_string("<foo bar='baz'><call>hey</call></foo>");

// print document to standard output (prints <?xml version="1.0"?><foo bar="baz"><call>hey</call></foo>)
doc.save(std::cout, "", pugi::format_raw);
std::cout << std::endl;

// print document to standard output as a regular node (prints <foo bar="baz"><call>hey</call></foo>)
doc.print(std::cout, "", pugi::format_raw);
std::cout << std::endl;

// print a subtree to standard output (prints <call>hey</call>)
doc.child("foo").child("call").print(std::cout, "", pugi::format_raw);
std::cout << std::endl;
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-saving.options"></span>

### <a href="#source-saving.options" class="anchor"></a><a href="#source-saving.options" class="link">7.5. Output options</a>

<div class="paragraph">

All saving functions accept the optional parameter `flags`. This is a bitmask that customizes the output format; you can select the way the document nodes are printed and select the needed additional information that is output before the document contents.

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

- <span id="source-format_indent"></span>`format_indent` determines if all nodes should be indented with the indentation string (this is an additional parameter for all saving functions, and is `"\t"` by default). If this flag is on, the indentation string is printed several times before every node, where the amount of indentation depends on the node’s depth relative to the output subtree. This flag has no effect if [format_raw](#source-format_raw) is enabled. This flag is **on** by default.

- <span id="source-format_indent_attributes"></span>`format_indent_attributes` determines if all attributes should be printed on a new line, indented with the indentation string according to the attribute’s depth. This flag implies [format_indent](#source-format_indent). This flag has no effect if [format_raw](#source-format_raw) is enabled. This flag is **off** by default.

- <span id="source-format_raw"></span>`format_raw` switches between formatted and raw output. If this flag is on, the nodes are not indented in any way, and also no newlines that are not part of document text are printed. Raw mode can be used for serialization where the result is not intended to be read by humans; also it can be useful if the document was parsed with [parse_ws_pcdata](/docs/pugixml/v1-16/en/02-manual/04-loading-documents/#source-parse_ws_pcdata) flag, to preserve the original document formatting as much as possible. This flag is **off** by default.

- <span id="source-format_no_escapes"></span>`format_no_escapes` disables output escaping for attribute values and PCDATA contents. If this flag is off, special symbols (`"`, `&`, `<`, `>`) and all non-printable characters (those with codepoint values less than 32) are converted to XML escape sequences (i.e. `&amp;`) during output. If this flag is on, no text processing is performed; therefore, output XML can be malformed if output contents contains invalid symbols (i.e. having a stray `<` in the PCDATA will make the output malformed). This flag is **off** by default.

- <span id="source-format_no_empty_element_tags"></span>`format_no_empty_element_tags` determines if start/end tags should be output instead of empty element tags for empty elements (that is, elements with no children). This flag is **off** by default.

- <span id="source-format_skip_control_chars"></span>`format_skip_control_chars` enables skipping characters belonging to range \[0; 32) instead of "&#xNN;" encoding. This flag is **off** by default.

- <span id="source-format_attribute_single_quote"></span>`format_attribute_single_quote` enables using single quotes `'` instead of double quotes `"` for enclosing attribute values. This flag is **off** by default.

</div>

<div class="paragraph">

These flags control the additional output information:

</div>

<div class="ulist">

- <span id="source-format_no_declaration"></span>`format_no_declaration` disables default node declaration output. By default, if the document is saved via `save` or `save_file` function, and it does not have any document declaration, a default declaration is output before the document contents. Enabling this flag disables this declaration. This flag has no effect in `xml_node::print` functions: they never output the default declaration. This flag is **off** by default.

- <span id="source-format_write_bom"></span>`format_write_bom` enables Byte Order Mark (BOM) output. By default, no BOM is output, so in case of non UTF-8 encodings the resulting document’s encoding may not be recognized by some parsers and text editors, if they do not implement sophisticated encoding detection. Enabling this flag adds an encoding-specific BOM to the output. This flag has no effect in `xml_node::print` functions: they never output the BOM. This flag is **off** by default.

- <span id="source-format_save_file_text"></span>`format_save_file_text` changes the file mode when using `save_file` function. By default, file is opened in binary mode, which means that the output file will contain platform-independent newline `\n` (ASCII 10). If this flag is on, file is opened in text mode, which on some systems changes the newline format (i.e. on Windows you can use this flag to output XML documents with `\r\n` (ASCII 13 10) newlines). This flag is **off** by default.

</div>

<div class="paragraph">

Additionally, there is one predefined option mask:

</div>

<div class="ulist">

- <span id="source-format_default"></span>`format_default` is the default set of flags, i.e. it has all options set to their default values. It sets formatted output with indentation, without BOM and with default node declaration, if necessary.

</div>

<div class="paragraph">

This is an example that shows the outputs of different output options ([samples/save_options.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/save_options.cpp)):

</div>

<div class="listingblock">

<div class="content">

``` cpp
// get a test document
pugi::xml_document doc;
doc.load_string("<foo bar='baz'><call>hey</call></foo>");

// default options; prints
// <?xml version="1.0"?>
// <foo bar="baz">
//         <call>hey</call>
// </foo>
doc.save(std::cout);
std::cout << std::endl;

// default options with custom indentation string; prints
// <?xml version="1.0"?>
// <foo bar="baz">
// --<call>hey</call>
// </foo>
doc.save(std::cout, "--");
std::cout << std::endl;

// default options without indentation; prints
// <?xml version="1.0"?>
// <foo bar="baz">
// <call>hey</call>
// </foo>
doc.save(std::cout, "\t", pugi::format_default & ~pugi::format_indent); // can also pass "" instead of indentation string for the same effect
std::cout << std::endl;

// raw output; prints
// <?xml version="1.0"?><foo bar="baz"><call>hey</call></foo>
doc.save(std::cout, "\t", pugi::format_raw);
std::cout << std::endl << std::endl;

// raw output without declaration; prints
// <foo bar="baz"><call>hey</call></foo>
doc.save(std::cout, "\t", pugi::format_raw | pugi::format_no_declaration);
std::cout << std::endl;
```

</div>

</div>

</div>

<div class="sect2">

<span id="source-saving.encoding"></span>

### <a href="#source-saving.encoding" class="anchor"></a><a href="#source-saving.encoding" class="link">7.6. Encodings</a>

<div class="paragraph">

pugixml supports all popular Unicode encodings (UTF-8, UTF-16 (big and little endian), UTF-32 (big and little endian); UCS-2 is naturally supported since it’s a strict subset of UTF-16) and handles all encoding conversions during output. The output encoding is set via the `encoding` parameter of saving functions, which is of type `xml_encoding`. The possible values for the encoding are documented in [Encodings](/docs/pugixml/v1-16/en/02-manual/04-loading-documents/#source-loading.encoding); the only flag that has a different meaning is `encoding_auto`.

</div>

<div class="paragraph">

While all other flags set the exact encoding, `encoding_auto` is meant for automatic encoding detection. The automatic detection does not make sense for output encoding, since there is usually nothing to infer the actual encoding from, so here `encoding_auto` means UTF-8 encoding, which is the most popular encoding for XML data storage. This is also the default value of output encoding; specify another value if you do not want UTF-8 encoded output.

</div>

<div class="paragraph">

Also note that wide stream saving functions do not have `encoding` argument and always assume [encoding_wchar](/docs/pugixml/v1-16/en/02-manual/04-loading-documents/#source-encoding_wchar) encoding.

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
<td class="content">The current behavior for Unicode conversion is to skip all invalid UTF sequences during conversion. This behavior should not be relied upon; if your node/attribute names do not contain any valid UTF sequences, they may be output as if they are empty, which will result in malformed XML document.</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<span id="source-saving.declaration"></span>

### <a href="#source-saving.declaration" class="anchor"></a><a href="#source-saving.declaration" class="link">7.7. Customizing document declaration</a>

<div class="paragraph">

When you are saving the document using `xml_document::save()` or `xml_document::save_file()`, a default XML document declaration is output, if `format_no_declaration` is not specified and if the document does not have a declaration node. However, the default declaration is not customizable. If you want to customize the declaration output, you need to create the declaration node yourself.

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
<td class="content">By default the declaration node is not added to the document during parsing. If you just need to preserve the original declaration node, you have to add the flag <a href="/docs/pugixml/v1-16/en/02-manual/04-loading-documents/#source-parse_declaration">parse_declaration</a> to the parsing flags; the resulting document will contain the original declaration node, which will be output during saving.</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

Declaration node is a node with type [node_declaration](/docs/pugixml/v1-16/en/02-manual/03-document-object-model/#source-node_declaration); it behaves like an element node in that it has attributes with values (but it does not have child nodes). Therefore setting custom version, encoding or standalone declaration involves adding attributes and setting attribute values.

</div>

<div class="paragraph">

This is an example that shows how to create a custom declaration node ([samples/save_declaration.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/save_declaration.cpp)):

</div>

<div class="listingblock">

<div class="content">

``` cpp
// get a test document
pugi::xml_document doc;
doc.load_string("<foo bar='baz'><call>hey</call></foo>");

// add a custom declaration node
pugi::xml_node decl = doc.prepend_child(pugi::node_declaration);
decl.append_attribute("version") = "1.0";
decl.append_attribute("encoding") = "UTF-8";
decl.append_attribute("standalone") = "no";

// <?xml version="1.0" encoding="UTF-8" standalone="no"?>
// <foo bar="baz">
//         <call>hey</call>
// </foo>
doc.save(std::cout);
std::cout << std::endl;
```

</div>

</div>

</div>

</div>

</div>
