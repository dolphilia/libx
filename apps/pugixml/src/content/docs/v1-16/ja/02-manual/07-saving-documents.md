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

### <a href="#source-saving.subtree" class="anchor"></a><a href="#source-saving.subtree" class="link">7.4. 単一の部分ツリーの保存</a>

<div class="paragraph">

<span id="source-xml_node::print"></span><span id="source-xml_node::print_stream"></span> これまでに説明した関数は文書全体を出力先へ保存しますが、単一の部分ツリーを保存することも簡単です。次の関数があります。

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

これらの関数の引数とその意味は、対応する`xml_document::save`と同じです。部分ツリーを、C++ IOstreamか、`xml_writer`インターフェースを実装した任意のオブジェクトへ保存できます。

</div>

<div class="paragraph">

部分ツリーの保存は、文書全体の保存とは異なります。実際のフラグ値にかかわらず、[format_write_bom](#source-format_write_bom)が無効で、[format_no_declaration](#source-format_no_declaration)が有効であるかのように動作します。つまり、出力先にBOMは書き込まれず、文書宣言は、対象ノード自体かその子の1つである場合にだけ書き込まれます。これは文書を保存する場合にも当てはまります。この例（[samples/save_subtree.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/save_subtree.cpp)）に違いを示します。

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

### <a href="#source-saving.options" class="anchor"></a><a href="#source-saving.options" class="link">7.5. 出力オプション</a>

<div class="paragraph">

すべての保存関数は、省略可能な`flags`パラメーターを受け取ります。これは出力形式を調整するビットマスクです。文書のノードの出力方法と、文書の内容より前に出力する追加情報を選べます。

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

次のフラグは、出力されるツリーの内容を制御します。

</div>

<div class="ulist">

- <span id="source-format_indent"></span>`format_indent`は、すべてのノードにインデント文字列でインデントを付けるかどうかを決めます。この文字列は、すべての保存関数の追加パラメーターで、既定値は`"\t"`です。有効な場合、各ノードの前にインデント文字列が何回か出力されます。その回数は、出力する部分ツリーに対するノードの相対的な深さに依存します。[format_raw](#source-format_raw)が有効な場合、このフラグは効果を持ちません。既定では**有効**です。

- <span id="source-format_indent_attributes"></span>`format_indent_attributes`は、各属性を新しい行に出力し、属性の深さに応じてインデント文字列でインデントを付けるかどうかを決めます。このフラグは[format_indent](#source-format_indent)も有効にします。[format_raw](#source-format_raw)が有効な場合、効果を持ちません。既定では**無効**です。

- <span id="source-format_raw"></span>`format_raw`は、整形された出力とそのままの出力を切り替えます。有効な場合、ノードには一切インデントを付けず、文書のテキストに含まれない改行も出力しません。rawモードは、人が読むことを目的としない直列化に使えます。また、[parse_ws_pcdata](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-parse_ws_pcdata)で文書を解析した場合、元の整形をできるだけ保持するのにも役立ちます。既定では**無効**です。

- <span id="source-format_no_escapes"></span>`format_no_escapes`は、属性値とPCDATA内容の出力時のエスケープを無効にします。このフラグが無効の場合、特殊記号（`"`、`&`、`<`、`>`）と、すべての表示できない文字（コードポイント値が32未満のもの）は、出力時にXMLエスケープシーケンス（たとえば`&amp;`）へ変換されます。有効な場合、テキスト処理は行いません。そのため、出力内容に不正な記号が含まれていると、出力XMLは不正な形式になる場合があります。たとえば、PCDATAに単独の`<`があると不正な形式になります。既定では**無効**です。

- <span id="source-format_no_empty_element_tags"></span>`format_no_empty_element_tags`は、空要素（子を持たない要素）に空要素タグではなく開始タグと終了タグを出力するかどうかを決めます。既定では**無効**です。

- <span id="source-format_skip_control_chars"></span>`format_skip_control_chars`は、範囲\[0; 32)に属する文字を「&#xNN;」で符号化する代わりに、読み飛ばすことを有効にします。既定では**無効**です。

- <span id="source-format_attribute_single_quote"></span>`format_attribute_single_quote`は、属性値を囲む二重引用符`"`の代わりに、一重引用符`'`を使うことを有効にします。既定では**無効**です。

</div>

<div class="paragraph">

次のフラグは、追加の出力情報を制御します。

</div>

<div class="ulist">

- <span id="source-format_no_declaration"></span>`format_no_declaration`は、既定のノード宣言の出力を無効にします。既定では、`save`や`save_file`で文書を保存し、文書宣言がない場合、文書の内容より前に既定の宣言が出力されます。このフラグを有効にすると、その宣言を無効にします。`xml_node::print`では効果を持ちません。これらの関数は既定の宣言を出力しないためです。既定では**無効**です。

- <span id="source-format_write_bom"></span>`format_write_bom`は、バイト順マーク（BOM）の出力を有効にします。既定ではBOMを出力しないため、UTF-8以外のエンコーディングの場合、高度なエンコーディング検出を実装していない一部のパーサーやテキストエディターが、文書のエンコーディングを認識できないことがあります。このフラグを有効にすると、エンコーディングに固有のBOMを出力に追加します。`xml_node::print`では効果を持ちません。これらの関数はBOMを出力しないためです。既定では**無効**です。

- <span id="source-format_save_file_text"></span>`format_save_file_text`は、`save_file`を使う場合のファイルモードを変更します。既定ではバイナリーモードで開くため、出力ファイルの改行はプラットフォームに依存しない`\n`（ASCII 10）です。有効にするとテキストモードで開き、一部のシステムでは改行形式が変わります。たとえばWindowsでは、このフラグで`\r\n`（ASCII 13 10）改行のXML文書を出力できます。既定では**無効**です。

</div>

<div class="paragraph">

さらに、あらかじめ定義されたオプションマスクが1つあります。

</div>

<div class="ulist">

- <span id="source-format_default"></span>`format_default`は、すべてのオプションを既定値に設定した、既定のフラグ集合です。インデント付きの整形出力を設定し、BOMは付けず、必要なら既定のノード宣言を付けます。

</div>

<div class="paragraph">

各種出力オプションの出力結果を示す例です（[samples/save_options.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/save_options.cpp)）。

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

### <a href="#source-saving.encoding" class="anchor"></a><a href="#source-saving.encoding" class="link">7.6. エンコーディング</a>

<div class="paragraph">

pugixmlは、広く使われているすべてのUnicodeエンコーディング（UTF-8、UTF-16のビッグエンディアンとリトルエンディアン、UTF-32のビッグエンディアンとリトルエンディアン）に対応し、出力時にすべてのエンコーディング変換を処理します。UCS-2はUTF-16の厳密な部分集合なので、当然ながら対応しています。出力エンコーディングは、保存関数の`encoding`パラメーターで設定します。型は`xml_encoding`です。指定できる値は[エンコーディング](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-loading.encoding)で説明しています。意味が異なるフラグは`encoding_auto`だけです。

</div>

<div class="paragraph">

ほかのフラグは正確なエンコーディングを指定しますが、`encoding_auto`はエンコーディングの自動検出を意図しています。出力エンコーディングは、通常、その実際の値を推定する手掛かりがないため、自動検出に意味がありません。そのため、ここでの`encoding_auto`は、XMLデータの保存で最も広く使われるUTF-8を意味します。これは出力エンコーディングの既定値でもあります。UTF-8以外の出力が必要なら、別の値を指定してください。

</div>

<div class="paragraph">

ワイド文字ストリームへの保存関数には`encoding`引数がなく、常に[encoding_wchar](/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-encoding_wchar)を仮定します。

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
<td class="content">現在のUnicode変換は、変換中に不正なUTFシーケンスをすべて読み飛ばします。この動作には依存しないでください。ノードや属性の名前に有効なUTFシーケンスが1つもなければ、空の名前であるかのように出力され、不正な形式のXML文書になる場合があります。</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect2">

<span id="source-saving.declaration"></span>

### <a href="#source-saving.declaration" class="anchor"></a><a href="#source-saving.declaration" class="link">7.7. 文書宣言の調整</a>

<div class="paragraph">

`xml_document::save()`や`xml_document::save_file()`で文書を保存する場合、`format_no_declaration`を指定しておらず、文書に宣言ノードがなければ、既定のXML文書宣言が出力されます。ただし、既定の宣言は調整できません。宣言の出力を調整するには、宣言ノードを自分で作成する必要があります。

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
<td class="content">既定では、解析時に宣言ノードは文書へ追加されません。元の宣言ノードを保持したいだけなら、解析フラグに<a href="/docs/pugixml/v1-16/ja/02-manual/04-loading-documents/#source-parse_declaration">parse_declaration</a>を追加してください。結果の文書には元の宣言ノードが含まれ、保存時に出力されます。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

宣言ノードは[node_declaration](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-node_declaration)型のノードです。値を持つ属性がある点では要素ノードと同様ですが、子ノードは持ちません。このため、独自のversion、encoding、standalone宣言を設定するには、属性を追加し、その値を設定します。

</div>

<div class="paragraph">

独自の宣言ノードを作成する方法を示す例です（[samples/save_declaration.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/save_declaration.cpp)）。

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
