---
title: "クイックスタートガイド"
description: "pugixml 1.16の公式クイックスタートガイド全文。"
licenseSource: "pugixml-quickstart-1.16"
---

<div class="sect1">

<span id="source-introduction"></span>

## <a href="#source-introduction" class="anchor"></a><a href="#source-introduction" class="link">はじめに</a>

<div class="sectionbody">

<div class="paragraph">

[pugixml](https://pugixml.org/)は軽量なC++ XML処理ライブラリです。豊富な走査・変更機能を備えたDOMに似たインターフェース、XMLファイルやバッファからDOMツリーを構築する非常に高速なXMLパーサー、複雑なデータ依存のツリー問い合わせを行うXPath 1.0実装で構成されています。Unicodeにも完全に対応し、2種類のUnicodeインターフェースと、異なるUnicodeエンコーディング間の変換を提供します。変換は解析・保存時に自動で行われます。このライブラリは移植性が非常に高く、組み込みも使用も容易です。pugixmlは2006年から開発・保守されており、多くの利用者がいます。すべてのコードは[MITライセンス](#source-license)で配布されているため、オープンソースアプリケーションでもプロプライエタリアプリケーションでも完全に自由に使用できます。

</div>

<div class="paragraph">

pugixmlでは、XML文書を非常に高速かつ手軽に、メモリーを効率よく使って処理できます。ただし、pugixmlはDOMパーサーを備えているため、メモリーに収まらないXML文書を処理できません。また、パーサーは妥当性検証を行わないので、DTDやスキーマによる妥当性検証が必要な用途には適していません。

</div>

<div class="paragraph">

これは、ライブラリをすぐに使い始められるようにするためのpugixmlクイックスタートガイドです。ライブラリの重要な機能の多くは、まったく説明していないか、簡単に触れるだけにとどめています。より詳しい情報については、[完全なマニュアルを読んでください](/docs/pugixml/v1-16/ja/02-manual/01-overview/)。

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
<td class="content">完璧な文書はなく、この文書も例外ではありません。誤りや説明の抜けを見つけた場合は、遠慮なく<a href="https://github.com/zeux/pugixml/issues/new">issueを報告するか、修正を含むプルリクエストを提出してください</a>。</td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

<div class="sect1">

<span id="source-install"></span>

## <a href="#source-install" class="anchor"></a><a href="#source-install" class="link">インストール</a>

<div class="sectionbody">

<div class="paragraph">

最新のソース配布物はアーカイブとしてダウンロードできます。

</div>

<div class="paragraph">

[pugixml-1.16.zip](https://github.com/zeux/pugixml/releases/download/v1.16/pugixml-1.16.zip)（Windows形式の改行） / [pugixml-1.16.tar.gz](https://github.com/zeux/pugixml/releases/download/v1.16/pugixml-1.16.tar.gz)（Unix形式の改行）

</div>

<div class="paragraph">

配布物には、ライブラリのソース、文書（今読んでいるこのガイドとマニュアル）、コード例が含まれています。配布物をダウンロードしたら、圧縮アーカイブ内のすべてのファイルを展開してpugixmlをインストールしてください。

</div>

<div class="paragraph">

pugixmlのソース全体は、ソースファイル`pugixml.cpp`と、ヘッダーファイル`pugixml.hpp`、`pugiconfig.hpp`の3ファイルで構成されています。`pugixml.hpp`は、pugixmlのクラスや関数を使うためにインクルードする主要なヘッダーです。このガイドの以降の説明では、`#include "pugixml.hpp"`でヘッダーが見つかるように、`pugixml.hpp`がカレントディレクトリかプロジェクトのインクルードディレクトリのいずれかにあると仮定します。ただし、相対パス（例：`#include "../libs/pugixml/src/pugixml.hpp"`）や、インクルードディレクトリからの相対パス（例：`#include <xml/thirdparty/pugixml/src/pugixml.hpp>`）も使えます。

</div>

<div class="paragraph">

pugixmlをビルドする最も簡単な方法は、ソースファイル`pugixml.cpp`を既存のライブラリや実行ファイルと一緒にコンパイルすることです。この手順はアプリケーションのビルド方法によって異なります。たとえばMicrosoft Visual Studio <sup>\[<a href="#source-_footnotedef_1" id="source-_footnoteref_1" class="footnote" title="脚注を表示。">1</a>\]</sup>、Apple Xcode、Code::Blocks、その他のIDEを使っている場合は、**いずれかのプロジェクトに`pugixml.cpp`を追加するだけ**です。pugixmlを独立した静的ライブラリや共有ライブラリとしてビルドする方法など、ほかの方法もあります。詳しくは[マニュアルを読んでください](/docs/pugixml/v1-16/ja/02-manual/02-installation/#source-install.building)。

</div>

</div>

</div>

<div class="sect1">

<span id="source-dom"></span>

## <a href="#source-dom" class="anchor"></a><a href="#source-dom" class="link">文書オブジェクトモデル</a>

<div class="sectionbody">

<div class="paragraph">

pugixmlは、DOMに似た方法でXMLデータを保存します。XML文書全体（文書構造と要素データの両方）が、ツリーとしてメモリーに保持されます。ツリーは文字ストリーム（ファイル、文字列、C++ I/Oストリーム）から読み込み、専用APIやXPath式を使って走査できます。ツリー全体は変更可能で、ノード構造もノード・属性のデータもいつでも変更できます。最後に、文書変換の結果を文字ストリーム（ファイル、C++ I/Oストリーム、独自の転送手段）に保存できます。

</div>

<div class="paragraph">

ツリーのルートは文書そのもので、C++の`xml_document`型に対応します。文書には1個以上の子ノードがあり、それぞれC++の`xml_node`型に対応します。ノードにはさまざまな型があります。型によって、子ノードの集合、C++の`xml_attribute`型に対応する属性の集合、その他のデータ（名前など）を持ちます。

</div>

<div class="paragraph">

最も一般的なノード型は次のとおりです。

</div>

<div class="ulist">

- 文書ノード（`node_document`）はツリーのルートで、複数の子ノードから構成されます。このノードは`xml_document`クラスに対応します。`xml_document`は`xml_node`のサブクラスなので、ノードのインターフェース全体も利用できます。

- 要素・タグノード（`node_element`）は最も一般的なノード型で、XML要素を表します。要素ノードは名前、属性の集合、子ノードの集合を持ちます。どちらの集合も空で構いません。属性は単純な名前と値の組です。

- 通常の文字データノード（`node_pcdata`）はXML内のプレーンテキストを表します。PCDATAノードは値を持ちますが、名前、子ノード、属性は持ちません。**通常の文字データは要素ノードの一部ではなく、独立したノードを持つ**ことに注意してください。たとえば、1個の要素ノードが複数のPCDATA子ノードを持つことがあります。

</div>

<div class="paragraph">

ノード型はいくつもありますが、ツリーを表すC++型は`xml_document`、`xml_node`、`xml_attribute`の3つだけです。`xml_node`に対する操作の中には、特定のノード型でのみ有効なものがあります。これらについては後で説明します。

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
<td class="content">pugixmlのすべてのクラスと関数は<code>pugi</code>名前空間にあります。明示的に名前を修飾する（例：<code>pugi::xml_node</code>）か、<code>using</code>指令を使って必要なシンボルにアクセスできるようにする（例：<code>using pugi::xml_node;</code>または<code>using namespace pugi;</code>）必要があります。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

`xml_document`は文書構造全体の所有者です。文書を破棄すると、ツリー全体が破棄されます。`xml_document`のインターフェースには、読み込み関数、保存関数、文書の調査や変更に使える`xml_node`のインターフェース全体が含まれます。`xml_document`は`xml_node`のサブクラスですが、`xml_node`はポリモーフィックな型ではないことに注意してください。継承は使い方を簡単にするためだけに用いられています。

</div>

<div class="paragraph">

`xml_node`は文書ノードへのハンドルで、文書そのものを含む文書内のどのノードも指せます。すべての型のノードに共通のインターフェースがあります。`xml_node`は実際のノードへのハンドルにすぎず、ノードそのものではありません。同じ実体を指す`xml_node`ハンドルが複数あっても構いません。`xml_node`ハンドルを破棄しても、ノードは破棄されず、ツリーからも削除されません。

</div>

<div class="paragraph">

`xml_node`型には、nullノードまたは空ノードと呼ばれる特別な値があります。どの文書のどのノードにも対応せず、nullポインターに似ています。ただし、空ノードに対してもすべての操作が定義されています。通常、これらの操作は何もせず、空のノード・属性や空文字列を返します。これは呼び出しを連鎖させるときに便利です。たとえば、ノードの祖父ノードは`node.parent().parent()`で取得できます。ノードがnullノードであるか親を持たない場合、最初の`parent()`はnullノードを返し、2回目の`parent()`もnullノードを返すため、エラーを2回確認する必要はありません。ハンドルがnullかどうかは、`if (node) { …​ }`や`if (!node) { …​ }`のように暗黙のbool変換で調べられます。

</div>

<div class="paragraph">

`xml_attribute`はXML属性へのハンドルで、`xml_node`と同じ意味論を持ちます。つまり、同じ実体を指す`xml_attribute`ハンドルが複数あっても構わず、関数の結果にも伝わる特別なnull属性の値があります。

</div>

<div class="paragraph">

pugixmlの設定では、インターフェースと内部表現を2種類から選べます。UTF-8インターフェース（charインターフェースとも呼ばれます）か、UTF-16/32インターフェース（wchar_tインターフェースとも呼ばれます）です。選択は`PUGIXML_WCHAR_MODE`の定義で制御し、`pugiconfig.hpp`またはプリプロセッサーのオプションで設定できます。文字列を扱うすべてのツリー関数は、選択した文字型のC形式のnull終端文字列、またはSTL文字列を扱います。Unicodeインターフェースの詳細は[マニュアルを読んでください](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-dom.unicode)。

</div>

</div>

</div>

<div class="sect1">

<span id="source-loading"></span>

## <a href="#source-loading" class="anchor"></a><a href="#source-loading" class="link">文書の読み込み</a>

<div class="sectionbody">

<div class="paragraph">

pugixmlには、ファイル、C++ iostream、メモリーバッファなど、さまざまな場所からXMLデータを読み込む関数があります。すべての関数は、妥当性検証を行わない非常に高速なパーサーを使います。このパーサーはW3C仕様に完全には準拠していません。有効なXML文書はすべて読み込めますが、一部の整形式性の検査は行いません。不正なXML文書を拒否するために相当の努力が払われていますが、性能上の理由から一部の検証を省いています。XMLデータは、解析前に必ず内部の文字形式へ変換されます。pugixmlは広く使われているすべてのUnicodeエンコーディング（UTF-8、UTF-16のビッグエンディアンとリトルエンディアン、UTF-32のビッグエンディアンとリトルエンディアン）に対応し、すべてのエンコーディング変換を自動で処理します。UCS-2はUTF-16の厳密な部分集合なので、当然ながら対応しています。

</div>

<div class="paragraph">

XMLデータの読み込み元として最も一般的なのはファイルです。pugixmlには、ファイルからXML文書を読み込む専用の関数があります。この関数は、第1引数にファイルパスを取り、ほかに省略可能な引数が2つあります。これらは解析オプションと入力データのエンコーディングを指定するもので、マニュアルで説明しています。

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

<div class="paragraph">

`load_file`は、ほかの読み込み関数と同様に、既存の文書ツリーを破棄してから、指定したファイルから新しいツリーを読み込もうとします。操作結果は`xml_parse_result`オブジェクトとして返されます。このオブジェクトには、操作の状態と、それに関連する情報（解析に失敗した場合は、入力ファイル内の解析に成功した最後の位置など）が含まれます。

</div>

<div class="paragraph">

解析結果オブジェクトは暗黙に`bool`へ変換できます。解析エラーを詳細に処理する必要がなければ、読み込み関数の戻り値を`if (doc.load_file("file.xml")) { …​ } else { …​ }`のように`bool`として調べるだけで構いません。それ以外の場合は、`status`メンバーで解析状態を取得するか、`description()`メンバー関数で状態を文字列として取得できます。

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

<div class="paragraph">

XMLデータをファイル以外、たとえばHTTP URLから読み込む必要がある場合もあります。また、仮想ファイルシステムの機能を使ったり、gzip圧縮ファイルからXMLを読み込んだりするために、標準以外の関数でファイルを読み込みたい場合もあります。こうした場合は、文書をメモリーから読み込むか、C++ IOstreamから読み込む必要があります。前者では、XMLデータ全体を含む連続したメモリーブロックを用意し、バッファ読み込み関数のいずれかに渡してください。後者では、`std::istream`または`std::wistream`インターフェースを実装したオブジェクトを用意してください。

</div>

<div class="paragraph">

メモリーから文書を読み込む関数にはいくつかあり、渡されたバッファを、変更不可のバッファ（`load_buffer`）、呼び出し元が所有する変更可能なバッファ（`load_buffer_inplace`）、pugixmlが所有する変更可能なバッファ（`load_buffer_inplace_own`）としてそれぞれ扱います。また、null終端の文字列からXML文書を読み込みたい場合には、単純な補助関数`xml_document::load_string`もあります。

</div>

<div class="paragraph">

これらの関数の1つでメモリーからXML文書を読み込む例です（[samples/load_memory.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/load_memory.cpp)）。ほかの例はサンプルコードを読んでください。

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

</div>

<div class="sect1">

<span id="source-access"></span>

## <a href="#source-access" class="anchor"></a><a href="#source-access" class="link">文書データへのアクセス</a>

<div class="sectionbody">

<div class="paragraph">

pugixmlには、文書からさまざまな種類のデータを取得し、文書を走査するための幅広いインターフェースがあります。各種アクセサーでノード・属性のデータを取得でき、アクセサーやイテレーターで子ノードや属性のリストを走査でき、`xml_tree_walker`オブジェクトで深さ優先走査を行えます。また、複雑なデータ依存の問い合わせにはXPathを使えます。

</div>

<div class="paragraph">

ノードや属性の名前は`name()`アクセサーで、値は`value()`アクセサーで取得できます。どちらの関数もnullポインターを返すことはありません。該当する内容を持つ文字列を返すか、名前・値がない場合やハンドルがnullの場合には空文字列を返します。値の読み取りについては、さらに次の2点に注意してください。

</div>

<div class="ulist">

- データをノードのテキスト内容として保存することはよくあります。たとえば、`<node><description>This is a node</description></node>`です。この場合、`<description>`ノード自体は値を持たず、値が`"This is a node"`である`node_pcdata`型の子ノードを持ちます。pugixmlは、このようなデータを解析する補助関数`child_value()`と`text()`を提供しています。

- 属性値が文字列以外の型を表すこともよくあります。たとえば、XMLでは文字列として表現されていても、整数として扱うべき値だけを含む属性がある場合です。pugixmlには、属性値を別の型へ変換するアクセサーがいくつかあります。

</div>

<div class="paragraph">

これらの関数を使う例です（[samples/traverse_base.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_base.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
for (pugi::xml_node tool = tools.child("Tool"); tool; tool = tool.next_sibling("Tool"))
{
    std::cout << "Tool " << tool.attribute("Filename").value();
    std::cout << ": AllowRemote " << tool.attribute("AllowRemote").as_bool();
    std::cout << ", Timeout " << tool.attribute("Timeout").as_int();
    std::cout << ", Description '" << tool.child_value("Description") << "'\n";
}
```

</div>

</div>

<div class="paragraph">

文書の走査では、指定した名前のノードや属性を探す操作が多いため、そのための専用関数があります。たとえば、`child("Tool")`は名前が`"Tool"`である最初のノードを返し、該当するノードがなければnullハンドルを返します。こうした関数を使う例です（[samples/traverse_base.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_base.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
std::cout << "Tool for *.dae generation: " << tools.find_child_by_attribute("Tool", "OutputFileMasks", "*.dae").attribute("Filename").value() << "\n";

for (pugi::xml_node tool = tools.child("Tool"); tool; tool = tool.next_sibling("Tool"))
{
    std::cout << "Tool " << tool.attribute("Filename").value() << "\n";
}
```

</div>

</div>

<div class="paragraph">

子ノードのリストと属性のリストは、単純な双方向連結リストです。`previous_sibling`、`next_sibling`などの関数で反復処理できますが、pugixmlはノードと属性のイテレーターも提供するので、ノードを、他のノードや属性のコンテナーとして扱えます。すべてのイテレーターは双方向で、通常のイテレーター操作をすべてサポートします。指しているノード・属性の実体がツリーから削除されると、イテレーターは無効になります。ノードや属性を追加しても、イテレーターは無効になりません。

</div>

<div class="paragraph">

イテレーターで文書を走査する例です（[samples/traverse_iter.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_iter.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
for (pugi::xml_node_iterator it = tools.begin(); it != tools.end(); ++it)
{
    std::cout << "Tool:";

    for (pugi::xml_attribute_iterator ait = it->attributes_begin(); ait != it->attributes_end(); ++ait)
    {
        std::cout << " " << ait->name() << "=" << ait->value();
    }

    std::cout << std::endl;
}
```

</div>

</div>

<div class="paragraph">

C++コンパイラーが範囲for文に対応していれば、それを使ってノードや属性を列挙できます。これはC++11の機能で、Microsoft Visual Studio 2012以降、GCC 4.6以降、Clang 3.0以降が対応しています。このための補助機能も用意されています。これらは[Boost Foreach](http://www.boost.org/libs/foreach/)とも互換性があり、C++11より前のほかのforeach機能とも互換性がある可能性があります。

</div>

<div class="paragraph">

C++11の範囲for文で文書を走査する例です（[samples/traverse_rangefor.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_rangefor.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
for (pugi::xml_node tool: tools.children("Tool"))
{
    std::cout << "Tool:";

    for (pugi::xml_attribute attr: tool.attributes())
    {
        std::cout << " " << attr.name() << "=" << attr.value();
    }

    for (pugi::xml_node child: tool.children())
    {
        std::cout << ", child " << child.name();
    }

    std::cout << std::endl;
}
```

</div>

</div>

<div class="paragraph">

これまで説明した方法では、あるノードの直接の子を走査できます。ツリーを深く走査するには、再帰関数などの方法が必要です。ただし、pugixmlには部分木を深さ優先で走査するための補助機能があります。利用するには、`xml_tree_walker`インターフェースを実装し、`traverse`関数を呼び出してください。

</div>

<div class="paragraph">

xml_tree_walkerでツリーの階層を走査する例です（[samples/traverse_walker.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/traverse_walker.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
struct simple_walker: pugi::xml_tree_walker
{
    virtual bool for_each(pugi::xml_node& node)
    {
        for (int i = 0; i < depth(); ++i) std::cout << "  "; // indentation

        std::cout << node_types[node.type()] << ": name='" << node.name() << "', value='" << node.value() << "'\n";

        return true; // continue traversal
    }
};
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
simple_walker walker;
doc.traverse(walker);
```

</div>

</div>

<div class="paragraph">

最後に、複雑な問い合わせには、より高水準のDSLが必要になることがよくあります。pugixmlは、そのような問い合わせのためにXPath 1.0言語の実装を提供します。XPathの使い方の詳しい説明はマニュアルにありますが、ここではいくつかの例を示します。

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugi::xpath_node_set tools = doc.select_nodes("/Profile/Tools/Tool[@AllowRemote='true' and @DeriveCaptionFrom='lastparam']");

std::cout << "Tools:\n";

for (pugi::xpath_node_set::const_iterator it = tools.begin(); it != tools.end(); ++it)
{
    pugi::xpath_node node = *it;
    std::cout << node.node().attribute("Filename").value() << "\n";
}

pugi::xpath_node build_tool = doc.select_node("//Tool[contains(Description, 'build system')]");

if (build_tool)
    std::cout << "Build tool: " << build_tool.node().attribute("Filename").value() << "\n";
```

</div>

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
<td class="content">XPath関数はエラー時に<code>xpath_exception</code>オブジェクトを送出します。上のサンプルでは、これらの例外を捕捉していません。</td>
</tr>
</tbody>
</table>

</div>

</div>

</div>

<div class="sect1">

<span id="source-modify"></span>

## <a href="#source-modify" class="anchor"></a><a href="#source-modify" class="link">文書データの変更</a>

<div class="sectionbody">

<div class="paragraph">

pugixmlの文書は全体が変更可能です。文書構造を完全に変えたり、ノード・属性のデータを変更したりできます。すべての関数がメモリー管理と構造の整合性を自ら維持するため、結果のツリーは常に構造上有効になります。ただし、不正なXMLツリーを作ることはできます。たとえば、同名の属性を2つ追加したり、属性・ノードの名前に空文字列や不正な文字列を設定したりする場合です。ツリーの変更は性能とメモリー使用量の面で最適化されているので、十分なメモリーがあれば、pugixmlで文書を一から作成して後でファイルやストリームに保存できます。誤りを招きやすい手作業でのテキスト作成に頼る必要はなく、大きなオーバーヘッドも生じません。

</div>

<div class="paragraph">

ノード・属性のデータや構造を変更するメンバー関数はすべて非constなので、constハンドルに対しては呼び出せません。ただし、単純な代入によってconstハンドルを非constハンドルに容易に変換できます。たとえば`void foo(const pugi::xml_node& n) { pugi::xml_node nc = n; }`です。そのため、ここでのconstの正しさは、主に追加の説明として機能します。

</div>

<div class="paragraph">

先に説明したように、ノードには名前と値があり、どちらも文字列です。ノード型によっては名前や値がないことがあります。設定には`set_name`と`set_value`メンバー関数を使えます。属性にも同様の関数がありますが、`set_value`は浮動小数点数など、文字列以外の型についてもオーバーロードされています。また、属性値は代入演算子でも設定できます。ノード・属性の名前と値を設定する例です（[samples/modify_base.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/modify_base.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugi::xml_node node = doc.child("node");

// change node name
std::cout << node.set_name("notnode");
std::cout << ", new node name: " << node.name() << std::endl;

// change comment text
std::cout << doc.last_child().set_value("useless comment");
std::cout << ", new comment text: " << doc.last_child().value() << std::endl;

// we can't change value of the element or name of the comment
std::cout << node.set_value("1") << ", " << doc.last_child().set_name("2") << std::endl;
```

</div>

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugi::xml_attribute attr = node.attribute("id");

// change attribute name/value
std::cout << attr.set_name("key") << ", " << attr.set_value("345");
std::cout << ", new attribute: " << attr.name() << "=" << attr.value() << std::endl;

// we can use numbers or booleans
attr.set_value(1.234);
std::cout << "new attribute value: " << attr.value() << std::endl;

// we can also use assignment operators for more concise code
attr = true;
std::cout << "final attribute value: " << attr.value() << std::endl;
```

</div>

</div>

<div class="paragraph">

ノードや属性は文書ツリーなしでは存在できないので、いずれかの文書へ追加せずに作成することはできません。ノードや属性は、ノード・属性リストの末尾、またはほかのノードの前後に作成できます。すべての挿入関数は、成功時には新しく作成した実体へのハンドルを、失敗時にはnullハンドルを返します。操作に失敗しても（たとえばPCDATAノードに子ノードを追加しようとした場合）、文書の整合性は保たれますが、要求したノードや属性は追加されません。

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
<td class="content"><code>attribute()</code>関数と<code>child()</code>関数はツリーへ属性やノードを追加しません。そのため、<code>node</code>に<code>"id"</code>という名前の属性がなければ、<code>node.attribute("id") = 123;</code>のようなコードは何もしません。必要に応じて属性・ノードを追加し、実在する属性・ノードを操作していることを確認してください。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

文書へ新しい属性やノードを追加する例です（[samples/modify_add.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/modify_add.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
// add node with some name
pugi::xml_node node = doc.append_child("node");

// add description node with text child
pugi::xml_node descr = node.append_child("description");
descr.append_child(pugi::node_pcdata).set_value("Simple node");

// add param node before the description
pugi::xml_node param = node.insert_child_before("param", descr);

// add attributes to param node
param.append_attribute("name") = "version";
param.append_attribute("value") = 1.1;
param.insert_attribute_after("type", param.attribute("name")) = "float";
```

</div>

</div>

<div class="paragraph">

文書に含めたくないノードや属性は、`remove_attribute`関数と`remove_child`関数で削除できます。属性やノードを削除すると、同じ実体を指すすべてのハンドルとイテレーターが無効になります。ノードを削除すると、その属性リストや子ノードリストの終端の次を指すイテレーターもすべて無効になります。このようなハンドルやイテレーターが存在しないか、属性・ノードの削除後に使用されないことを必ず確認してください。

</div>

<div class="paragraph">

文書から属性やノードを削除する例です（[samples/modify_remove.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/modify_remove.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
// remove description node with the whole subtree
pugi::xml_node node = doc.child("node");
node.remove_child("description");

// remove value attribute
pugi::xml_node param = node.child("param");
param.remove_attribute("value");

// we can also remove nodes/attributes by handles
pugi::xml_attribute id = param.attribute("name");
param.remove_attribute(id);
```

</div>

</div>

</div>

</div>

<div class="sect1">

<span id="source-saving"></span>

## <a href="#source-saving" class="anchor"></a><a href="#source-saving" class="link">文書の保存</a>

<div class="sectionbody">

<div class="paragraph">

新しい文書を作成したり、既存の文書を読み込んで処理したりした後には、結果をファイルへ保存する必要があることがよくあります。また、文書全体や部分木をストリームへ出力すると便利な場合もあります。用途には、デバッグ用の出力、ネットワークやその他のテキスト指向の媒体を介したシリアライズなどがあります。pugixmlには、文書の任意の部分木をファイル、ストリーム、その他の汎用的な転送インターフェースへ出力する関数がいくつかあります。これらの関数では出力形式を調整でき、必要なエンコーディング変換も行います。

</div>

<div class="paragraph">

出力先へ書き込む前に、ノード・属性のデータはノード型に応じて適切に整形されます。\<や&など、XMLの特殊記号はすべて適切にエスケープされます。ノード・属性の名前の設定し忘れに対処するため、空のノード・属性名は`":anonymous"`として出力されます。整形式の出力を得るには、すべてのノード名と属性名に意味のある値を設定してください。

</div>

<div class="paragraph">

文書全体をファイルへ保存するには、`save_file`関数を使えます。成功時には`true`を返します。XML文書をファイルへ保存する簡単な例です（[samples/save_file.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/save_file.cpp)）。

</div>

<div class="listingblock">

<div class="content">

``` cpp
// save document to file
std::cout << "Saving result: " << doc.save_file("save_file_output.xml") << std::endl;
```

</div>

</div>

<div class="paragraph">

相互運用性を高めるため、pugixmlには、C++の`std::ostream`インターフェースを実装した任意のオブジェクトへ文書を保存する関数があります。これにより、標準のC++ストリーム（ファイルストリームなど）や、インターフェースに準拠した第三者の実装（Boost Iostreamsなど）へ文書を保存できます。特に、保存先として`std::cout`ストリームを使えるため、デバッグ出力が容易になります。関数は2つあり、一方はナロー文字ストリーム、もう一方はワイド文字ストリームを扱います。

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

<div class="paragraph">

これまでの保存関数はすべて、writerインターフェースを使って実装されています。これは関数を1つだけ持つ単純なインターフェースで、出力処理中に、文書データのチャンクを入力として何度か呼び出されます。ソケットなどの独自の転送手段で文書を出力するには、`xml_writer`インターフェースを実装したオブジェクトを作り、`xml_document::save`関数へ渡してください。

</div>

<div class="paragraph">

文書データをSTL文字列へ保存する独自のwriterの簡単な例です（[samples/save_custom_writer.cpp](/docs/pugixml/assets/pugixml-v1-16/samples/save_custom_writer.cpp)）。より複雑な例はサンプルコードを読んでください。

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

<div class="paragraph">

これまでの関数は文書全体を出力先へ保存しますが、1つの部分木だけを保存することも容易です。`xml_document::save`を呼び出す代わりに、対象ノードの`xml_node::print`関数を呼び出してください。これにより、ノードの内容をC++ IOstreamオブジェクトや独自のwriterへ保存できます。部分木の保存は文書全体の保存と少し異なります。詳しくは[マニュアルを読んでください](/docs/pugixml/v1-16/ja/02-manual/07-saving-documents/#source-saving.subtree)。

</div>

</div>

</div>

<div class="sect1">

<span id="source-feedback"></span>

## <a href="#source-feedback" class="anchor"></a><a href="#source-feedback" class="link">フィードバック</a>

<div class="sectionbody">

<div class="paragraph">

pugixmlのバグを見つけたと思ったら、[issue報告フォーム](https://github.com/zeux/pugixml/issues/new)から報告してください。バグを再現できるように、pugixmlの版、コンパイラーの版、対象アーキテクチャ、pugixmlを使ってバグが発生するコードなど、関連情報を必ず含めてください。機能の要望や貢献もissueとして提出できます。

</div>

<div class="paragraph">

<span id="source-email"></span>

プライバシーなどの懸念からissueを提出できない場合は、pugixmlの作者へ直接メールで連絡できます：<arseny.kapoulkine@gmail.com>。

</div>

</div>

</div>

<div class="sect1">

<span id="source-license"></span>

## <a href="#source-license" class="anchor"></a><a href="#source-license" class="link">ライセンス</a>

<div class="sectionbody">

<div class="paragraph">

pugixmlライブラリはMITライセンスで配布されています。

</div>

<div class="literalblock">

<div class="content">

    Copyright (c) 2006-2026 Arseny Kapoulkine

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

</div>

</div>

<div class="paragraph">

つまり、オープンソースかプロプライエタリかを問わず、自分のアプリケーションでpugixmlを自由に使用できます。製品でpugixmlを使う場合、製品の配布物に次のような謝辞を追加すれば十分です。

</div>

<div class="literalblock">

<div class="content">

    This software is based on pugixml library (https://pugixml.org).
    pugixml is Copyright (C) 2006-2026 Arseny Kapoulkine.

</div>

</div>

</div>

</div>

<div id="source-footnotes">

------------------------------------------------------------------------

<div id="source-_footnotedef_1" class="footnote">

[1](#source-_footnoteref_1)。使用しているすべての商標は、それぞれの所有者に帰属します。

</div>

</div>
