---
title: "変更履歴"
description: "pugixml 1.16の公式変更履歴全文。"
licenseSource: "pugixml-manual-1.16"
---

<div class="sect1">

<span id="source-changes"></span>

## <a href="#source-changes" class="anchor"></a><a href="#source-changes" class="link">9. 変更履歴</a>

<div class="sectionbody">

<div class="sect2">

<span id="source-v1.16"></span>

### <a href="#source-v1.16" class="anchor"></a><a href="#source-v1.16" class="link">v1.16 <sup>2026-06-16</sup></a>

<div class="paragraph">

記念リリース（pugixmlは今年で20周年です！）。変更点：

</div>

<div class="ulist">

- 動作の変更：

  <div class="olist arabic">

  1.  空のPCDATAの子を1つだけ持つ要素は、空要素タグとして出力されるようになりました（`format_no_empty_element_tags`を使う場合を除きます）。

  </div>

- 改善：

  <div class="olist arabic">

  1.  `PUGIXML_CHARCONV_FLOAT`オプションを有効にすると、浮動小数点の変換を`<charconv>`へ切り替えられます。C++17が必要で、変換がロケールに依存しなくなり、性能が向上する場合があります。

  2.  指定した名前の子/属性を返し、存在しなければ追加する`xml_node::ensure_child`と`xml_node::ensure_attribute`を追加しました。

  3.  名前によるノードと属性の検索の性能を改善しました。

  4.  空のバッファーから文書を読み込む場合、メモリーを確保しなくなりました。

  </div>

- XPathの改善：

  <div class="olist arabic">

  1.  `@attr > 5`のように、属性値を評価したり比較したりする問い合わせの性能を改善しました。

  2.  名前によってノードや属性を選択する問い合わせの性能を改善しました。

  </div>

- 不具合の修正：

  <div class="olist arabic">

  1.  非常に深く入れ子になった部分ツリーを削除する場合の、スタックオーバーフローを修正しました。

  2.  32ビットプラットフォームの`PUGIXML_WCHAR_MODE`で非常に大きい文書（1 GB以上）を読み込む場合に、クラッシュを引き起こす可能性があった整数オーバーフローを修正しました。

  3.  値が未代入の文字列変数を含む`xpath_variable_set`オブジェクトをコピーする場合の、nullポインター参照を修正しました。

  </div>

- CMakeの改善：

  <div class="olist arabic">

  1.  `PUGIXML_BUILD_APPLE_FRAMEWORK`でビルドしたAppleフレームワークに、フレームワークのヘッダーが含まれるようになりました。

  2.  `PUGIXML_INSTALL_SOURCE`オプションで、`pugixml.cpp`をインストールできます（ヘッダーのみのモードで役立ちます）。

  </div>

- 互換性の改善：

  <div class="olist arabic">

  1.  Visual Studio 2026向けのプロジェクトファイルとNuGetパッケージを追加しました。

  2.  グローバルモジュールフラグメント内で`pugixml.hpp`をインクルードする場合の、C++20モジュールとの互換性を修正しました。

  3.  clang/gccの警告`-Wextra-semi-stmt`、`-Wsign-conversion`、`-Wuninitialized`（GCC16）を修正しました。

  4.  Embarcadero C++ XE5でのコンパイルを修正しました。

  5.  静的解析の複数の誤検出を回避しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.15"></span>

### <a href="#source-v1.15" class="anchor"></a><a href="#source-v1.15" class="link">v1.15 <sup>2025-01-10</sup></a>

<div class="paragraph">

保守リリース。変更点：

</div>

<div class="ulist">

- 改善：

  <div class="olist arabic">

  1.  C++17対応が検出された場合、多くの`xml_attribute::`と`xml_node::`の関数が、`std::string_view`と`std::string`を透過的に扱えるようになりました。

  </div>

- CMakeの改善：

  <div class="olist arabic">

  1.  NixOS向けの`pkg-config`ファイルの生成を改善しました。

  2.  CMakeの`PUGIXML_BUILD_APPLE_FRAMEWORK`オプションで、pugixmlを`.xcframework`としてビルドできます。

  3.  CMakeの`PUGIXML_INSTALL`オプションで、インストールターゲットを無効にできます。

  </div>

- 互換性の改善：

  <div class="olist arabic">

  1.  clang/gccの警告`-Wzero-as-null-pointer-constant`、`-Wuseless-cast`、`-Wshorten-64-to-32`を修正しました。

  2.  `PUGIXML_NO_STL`設定での未参照関数の警告を修正しました。

  3.  CMake 3.31の非推奨警告を修正しました。

  4.  `noexcept`が使える場合、非推奨の`throw()`を使わなくなりました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.14"></span>

### <a href="#source-v1.14" class="anchor"></a><a href="#source-v1.14" class="link">v1.14 <sup>2023-10-01</sup></a>

<div class="paragraph">

保守リリース。変更点：

</div>

<div class="ulist">

- 改善：

  <div class="olist arabic">

  1.  `xml_attribute::set_name`と`xml_node::set_name`に、null終端されていない文字列へのポインターとサイズを受け取るオーバーロードを追加しました。

  2.  原文書に、解析時に読み飛ばされるコメントがある場合、PCDATAの内容を単一のノードへ結合する解析モード`parse_merge_pcdata`を実装しました。

  3.  `xml_document::load_file`にフォルダーへのパスを渡す場合、より一貫したエラー状態を返すようになりました。

  </div>

- 不具合の修正：

  <div class="olist arabic">

  1.  英語以外のロケールでXPathの数値から文字列への変換を行う場合のアサーションを修正しました。

  2.  MSVCと最近のCMakeを使う場合、静的CRTを正しく選択するように、CMakeのPUGIXML_STATIC_CRTオプションを修正しました。

  </div>

- 互換性の改善：

  <div class="olist arabic">

  1.  GCC 2.95/3.3でのビルドを修正しました。

  2.  CMake 3.27の非推奨警告を修正しました。

  3.  C++03モードでコンパイルする場合の、XCode 14のsprintf非推奨警告を修正しました。

  4.  clang/gccの警告`-Wweak-vtables`、`-Wreserved-macro-identifier`を修正しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.13"></span>

### <a href="#source-v1.13" class="anchor"></a><a href="#source-v1.13" class="link">v1.13 <sup>2022-11-01</sup></a>

<div class="paragraph">

保守リリース。変更点：

</div>

<div class="ulist">

- 改善：

  <div class="olist arabic">

  1.  `xml_attribute::set_value`、`xml_node::set_value`、`xml_text::set`に、null終端されていない文字列へのポインターとサイズを受け取るオーバーロードを追加しました。

  2.  コンパクトモード（`PUGIXML_COMPACT`）でのツリー走査の性能を改善しました。

  </div>

- 不具合の修正：

  <div class="olist arabic">

  1.  ディスクの空き容量が不足していても関数が成功する場合があった、`xml_document::save_file`のエラー処理を修正しました。

  2.  `xml_document::load`でメモリー不足となる一部の状況のエラー処理中に発生する、メモリーリークを修正しました。

  </div>

- 互換性の改善：

  <div class="olist arabic">

  1.  CMakeを使ったDLLビルドで、エクスポートするシンボルを修正しました。

  2.  -fvisibility=hiddenを使ったCMakeの共有オブジェクトビルドで、エクスポートするシンボルを修正しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.12"></span>

### <a href="#source-v1.12" class="anchor"></a><a href="#source-v1.12" class="link">v1.12 <sup>2022-02-09</sup></a>

<div class="paragraph">

保守リリース。変更点：

</div>

<div class="ulist">

- 不具合の修正：

  <div class="olist arabic">

  1.  ムーブ元が空の場合の、xml_documentのムーブ構築の不具合を修正しました。

  2.  C++20 rangesに対応するため、イテレーターオブジェクトのconstの整合性に関する問題を修正しました。

  </div>

- XPathの改善：

  <div class="olist arabic">

  1.  解析中にスタックオーバーフローを引き起こす可能性のある、過度に複雑な問い合わせの検出を改善しました。

  </div>

- 互換性の改善：

  <div class="olist arabic">

  1.  DLLビルドでのCygwin対応を修正しました。

  2.  Windows CE対応を修正しました。

  3.  VS2022向けのNuGetビルドとプロジェクトファイルを追加しました。

  </div>

- ビルドシステムの変更

  <div class="olist arabic">

  1.  すべてのCMakeオプションに`PUGIXML_`という接頭辞が付くようになりました。依存するビルド設定の変更が必要になる場合があります。

  2.  多くのビルド設定をCMakeの設定から指定できるようになりました。特に、`pugiconfig.hpp`を変更せずに、`PUGIXML_COMPACT`と`PUGIXML_WCHAR_MODE`を設定できます。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.11"></span>

### <a href="#source-v1.11" class="anchor"></a><a href="#source-v1.11" class="link">v1.11 <sup>2020-11-26</sup></a>

<div class="paragraph">

保守リリース。変更点：

</div>

<div class="ulist">

- 新機能：

  <div class="olist arabic">

  1.  xml_node::remove_attributesとxml_node::remove_childrenを追加しました。

  2.  xml_attribute::setとxml_text::setのオーバーロードで、浮動小数点の精度を調整する方法を追加しました。

  </div>

- XPathの改善：

  <div class="olist arabic">

  1.  XPathパーサーが再帰の深さを制限するようになり、悪意のある問い合わせによるスタックオーバーフローを防ぎます。

  </div>

- 互換性の改善：

  <div class="olist arabic">

  1.  clang-clコンパイラーでビルドする場合の、Visual Studioの警告を修正しました。

  2.  gccのWconversion警告を修正しました。

  3.  pugixml.hppのWzero-as-null-pointer-constant警告を修正しました。

  4.  静的解析の複数の誤検出を回避しました。

  </div>

- ビルドシステムの変更

  <div class="olist arabic">

  1.  pugixmlのCMakeパッケージは、`pugixml`ターゲットの代わりに`pugixml::pugixml`ターゲットを提供するようになりました。最低バージョン1.11を要求しない場合には、互換用の`pugixml`ターゲットを提供します。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.10"></span>

### <a href="#source-v1.10" class="anchor"></a><a href="#source-v1.10" class="link">v1.10 <sup>2019-09-15</sup></a>

<div class="paragraph">

保守リリース。変更点：

</div>

<div class="ulist">

- 動作の変更：

  <div class="olist arabic">

  1.  属性値のタブ文字（ASCII 9）は、保存・再読み込み後も保持するため、「&amp;#9;」として符号化するようになりました。

  2.  属性値の`>`文字をエスケープしなくなりました。

  </div>

- 新機能：

  <div class="olist arabic">

  1.  デバッグを改善するVisual Studioの.natvisファイルを追加しました。

  2.  CMakeを改善しました（複数のバージョンをビルドするUSE_POSTFIXとBUILD_SHARED_AND_STATIC_LIBSオプション、pkg-configの調整）。

  3.  整形式XMLファイルで使用できない非表示ASCII文字を読み飛ばす整形フラグformat_skip_control_charsを追加しました。

  4.  属性値を既定の二重引用符の代わりに一重引用符で囲む整形フラグformat_attribute_single_quoteを追加しました。

  </div>

- XPathの改善：

  <div class="olist arabic">

  1.  XPathの和集合の結果が、メモリー確保に依存しない安定した順序になりました。文書順の走査に依存する場合、XPath問い合わせの出力を整列する必要が生じることに注意してください。

  2.  XPathの和集合演算の性能を改善し、約2倍高速にしました。

  </div>

- 互換性の改善：

  <div class="olist arabic">

  1.  DLL設定でビルドする場合のVisual Studioの警告を修正しました。

  2.  Coverityとclangの静的解析の誤検出を修正しました。

  3.  gccのWdouble-promotion警告を修正しました。

  4.  NuGetパッケージにVisual Studio 2019対応を追加しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.9"></span>

### <a href="#source-v1.9" class="anchor"></a><a href="#source-v1.9" class="link">v1.9 <sup>2018-04-04</sup></a>

<div class="paragraph">

保守リリース。変更点：

</div>

<div class="ulist">

- 仕様の変更：

  <div class="olist arabic">

  1.  `xml_document::load(const char*)`（1.5で非推奨化）に、`deprecated`属性が付くようになりました。代わりに`xml_document::load_string`を使ってください。

  2.  `xml_node::select_single_node`（1.5で非推奨化）に、`deprecated`属性が付くようになりました。代わりに`xml_node::select_node`を使ってください。

  </div>

- 新機能：

  <div class="olist arabic">

  1.  xml_documentにムーブセマンティクス対応を追加し、ほかのオブジェクトのムーブセマンティクス対応を改善しました。

  2.  CMakeビルドがインクルードディレクトリーをエクスポートするようになりました。

  3.  BUILD_SHARED_LIBS=ONのCMakeビルドで、MSVCのdllexport属性を使うようになりました。

  </div>

- XPathの改善：

  <div class="olist arabic">

  1.  パーサー/評価器を、例外的な制御フローに依存しないように改めました。例外が無効な場合、longjmpを使わなくなりました。

  2.  `.[1]`や`(1`など、一部の不正な式のエラーメッセージを改善しました。

  3.  性能を小幅に改善しました。

  </div>

- 互換性の改善：

  <div class="olist arabic">

  1.  Texas Instrumentsコンパイラーの警告を修正しました。

  2.  一部のバージョンのgccで、limits.hに関するコンパイルの問題を修正しました。

  3.  Clang/C2でのコンパイルの問題を修正しました。

  4.  gcc 7の暗黙のフォールスルー警告を修正しました。

  5.  gcc 8の未知の属性指定に関する警告を修正しました。

  6.  cray++コンパイラーのエラーを修正しました。

  7.  -fsanitize=integerでの符号なし整数オーバーフローエラーを修正しました。

  8.  コンパクトモードの未定義動作検査器の問題を修正しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.8"></span>

### <a href="#source-v1.8" class="anchor"></a><a href="#source-v1.8" class="link">v1.8 <sup>2016-11-24</sup></a>

<div class="paragraph">

保守リリース。変更点：

</div>

<div class="ulist">

- 仕様の変更：

  <div class="olist arabic">

  1.  format_rawモードで空要素を出力する場合、/の前に空白を追加しなくなりました。

  </div>

- 新機能：

  <div class="olist arabic">

  1.  可能であればPCDATAの値を要素ノードに格納する解析モードparse_embed_pcdataを追加しました（一部の文書でメモリー消費を大幅に削減します）。

  2.  解析時にLatin-1（ISO-8859-1）エンコーディングを自動検出する機能を追加しました。

  3.  空要素を空要素タグではなく開始/終了タグで出力する整形フラグformat_no_empty_element_tagsを追加しました。

  </div>

- 性能の改善：

  <div class="olist arabic">

  1.  メモリー確保を小幅に改善しました（一部の場合にメモリー消費を最大1%削減します）。

  </div>

- 互換性の改善：

  <div class="olist arabic">

  1.  Borland C++ 5.4でのコンパイルの問題を修正しました。

  2.  一部のMinGW 3.8ディストリビューションでのコンパイルの問題を修正しました。

  3.  Clang/GCCの各種警告を修正しました。

  4.  MSVC 2010以降で、XPathオブジェクトのムーブセマンティクス対応を有効にしました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.7"></span>

### <a href="#source-v1.7" class="anchor"></a><a href="#source-v1.7" class="link">v1.7 <sup>2015-10-19</sup></a>

<div class="paragraph">

性能とメモリーの改善に加え、新機能を含むメジャーリリースです。変更点：

</div>

<div class="ulist">

- コンパクトモード：

  <div class="olist arabic">

  1.  性能と引き換えにメモリー消費を大幅に削減する、新しいツリー格納モードを導入しました（DOMの大きさは1/2～1/5）。

  2.  `PUGIXML_COMPACT`を定義すると、このモードを有効にできます。

  </div>

- 整数の解析/整形の新実装：

  <div class="olist arabic">

  1.  整数への変換と整数からの変換を行う関数（例：`as_int`/`set_value`）が、CRTに依存しなくなりました。

  2.  新実装は3～5倍高速で、オーバーフローとアンダーフローに対して常に正しく動作します。これは動作の変更です。以前は値"-1"に対して`as_uint()`がUINT_MAXを返していましたが、現在は0を返します。

  </div>

- 新機能：

  <div class="olist arabic">

  1.  コンパイラーがC++11に対応していれば、XPathオブジェクト（`xpath_query`、`xpath_node_set`、`xpath_variable_set`）をムーブできるようになりました。さらに、`xpath_variable_set`はコピーも可能です。

  2.  出力XMLを行単位の差分/マージツールで扱いやすくする`format_indent_attributes`を追加しました。

  3.  検索性能を改善できるヒントを受け取る`xml_node::attribute`関数の別形式を追加しました。

  4.  独自のメモリー確保関数は、nullポインターを返す代わりに例外を送出できるようになりました（必須ではありません）。

  </div>

- 不具合の修正：

  <div class="olist arabic">

  1.  メモリー不足時のClang 3.7のクラッシュを修正しました（C++ DR 1748）。

  2.  SPARC64（およびdoubleを8バイト境界に配置する必要がある、ほかの32ビットアーキテクチャー）でのXPathのクラッシュを修正しました。

  3.  強い例外保証を提供するよう、xpath_node_setの代入を修正しました。

  4.  write()から例外を送出できる独自のxml_writer実装での保存を修正しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.6"></span>

### <a href="#source-v1.6" class="anchor"></a><a href="#source-v1.6" class="link">v1.6 <sup>2015-04-10</sup></a>

<div class="paragraph">

保守リリース。変更点：

</div>

<div class="ulist">

- 仕様の変更：

  <div class="olist arabic">

  1.  保存・再読み込み時の値の保持を保証するため、属性/テキストの値で浮動小数点数を出力する場合、より多くの桁を使うようになりました。

  2.  混合内容を持つノードを整形出力する場合、テキストノードの前後に余分な空白を付けなくなりました。

  </div>

- 不具合の修正：

  <div class="olist arabic">

  1.  XPathのtranslate関数とnormalize-space関数が、内部にNUL文字を含む文字列を返さないよう修正しました。

  2.  DOCTYPE節内の不正な形式のコメントによるバッファー超過を修正しました。

  3.  不正な形式の入力によってDOCTYPE解析のスタック領域が不足することがなくなりました（XML解析に使用するスタック領域は、現在は上限が決まっています）。

  4.  PIの値に`?>`が含まれる場合に、不正な形式の文書にならないよう、処理命令の出力を調整しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.5"></span>

### <a href="#source-v1.5" class="anchor"></a><a href="#source-v1.5" class="link">v1.5 <sup>2014-11-27</sup></a>

<div class="paragraph">

多くの性能改善と新機能を含むメジャーリリースです。

</div>

<div class="ulist">

- 仕様の変更：

  <div class="olist arabic">

  1.  `xml_document::load(const char_t*)`を`load_string`へ改名しました。旧メソッドも引き続き使えますが、今後のリリースで非推奨となる予定です。

  2.  `xml_node::select_single_node`を`select_node`へ改名しました。旧メソッドも引き続き使えますが、今後のリリースで非推奨となる予定です。

  </div>

- 新機能：

  <div class="olist arabic">

  1.  文書内でノードを移動するための`xml_node::append_move`などの関数を追加しました。

  2.  単一のノードを結果とする問い合わせを評価する`xpath_query::evaluate_node`を追加しました。

  </div>

- 性能の改善：

  <div class="olist arabic">

  1.  XML解析を最適化しました（clang/gccで10～40%、MSVCで最大10%高速化）。

  2.  同じ文書内でノードをコピーする場合のメモリー消費を最適化しました（文字列の内容を共有するようになりました）。

  3.  ノードのコピーを最適化しました（文書間のコピーで10%、文書間のコピーで3倍高速化。使用するスタック領域も一定量になりました）。 訳注：原文は「cross-document copies」と「inter-document copies」を併記しています。両者の区別はこの記述だけでは明確でないため、原文の数値と表記を保持しています。

  4.  ノードの出力を最適化しました（60%高速化。使用するスタック領域も一定量になりました）。

  5.  XPathのメモリー確保を最適化しました（問い合わせの評価に伴う一時的なメモリー確保が減りました）。

  6.  XPathの整列を最適化しました（一部の場合にノード集合の整列が2～3倍高速化）。

  7.  XPathの評価を最適化しました（XPathMarkスイートで100倍、一部のよく使われる問い合わせで3～4倍高速化）。

  </div>

- 互換性の改善：

  <div class="olist arabic">

  1.  `xml_node::offset_debug`の境界的な場合の動作を修正しました。

  2.  一部の場合にmemcpyの呼び出しで発生する未定義動作を修正しました。

  3.  MSVC 2015のコンパイル警告を修正しました。

  4.  Boost 1.56.0に対する`contrib/foreach.hpp`を修正しました。

  </div>

- 不具合の修正

  <div class="olist arabic">

  1.  コメントの値に`--`が含まれる場合に、不正な形式の文書にならないよう、コメントの出力を調整しました。

  2.  append_bufferで作成した文書のXPathの整列を修正しました。

  3.  C++11モードを有効にしたMinGWで、非ASCII文字を含むワイド文字のパスを使う場合の`load_file`を修正しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.4"></span>

### <a href="#source-v1.4" class="anchor"></a><a href="#source-v1.4" class="link">v1.4 <sup>2014-02-27</sup></a>

<div class="paragraph">

各種新機能、不具合修正、互換性改善を含むメジャーリリースです。

</div>

<div class="ulist">

- 仕様の変更：

  <div class="olist arabic">

  1.  `parse_fragment`オプションを使わない場合、要素ノードがない文書を`status_no_document_element`エラーで拒否するようになりました。

  </div>

- 新機能：

  <div class="olist arabic">

  1.  XML断片の解析を追加しました（`parse_fragment`フラグ）。

  2.  PCDATAの前後の空白除去を追加しました（`parse_trim_pcdata`フラグ）。

  3.  `xml_attribute`と`xml_text`にlong long対応を追加しました（`as_llong`、`as_ullong`、`set_value`/`set`のオーバーロード）。

  4.  `as_int`/`as_uint`/`as_llong`/`as_ullong`に、16進整数の解析対応を追加しました。

  5.  断片から文書を組み立てる際の性能を改善する`xml_node::append_buffer`を追加しました。

  6.  `xml_named_node_iterator`が双方向になりました。

  7.  XPathのコンパイルと評価で使用するスタック領域を削減しました（組み込みシステムで役立ちます）。

  </div>

- 互換性の改善：

  <div class="olist arabic">

  1.  wchar_tに対応していないプラットフォームへの対応を改善しました。

  2.  clangの静的解析の複数の誤検出を修正しました。

  3.  各種GCCバージョンの複数のコンパイル警告を修正しました。

  </div>

- 不具合の修正：

  <div class="olist arabic">

  1.  XPath実装の未定義のポインター演算を修正しました。

  2.  一部のストリーム型で、シークできないiostreamへの対応を修正しました。たとえば、パイプ入力を持つBoostの`file_source`です。

  3.  一部の式に対する`xpath_query::return_type`を修正しました。

  4.  `xml_named_node_iterator`のdllexportの問題を修正しました。

  5.  名前/値がnullの属性に対する`find_child_by_attribute`のアサーションを修正しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.2"></span>

### <a href="#source-v1.2" class="anchor"></a><a href="#source-v1.2" class="link">v1.2 <sup>2012-05-01</sup></a>

<div class="paragraph">

ヘッダーのみのモード、各種インターフェースの拡張（PCDATA操作、C++11の反復処理など）、多数の新機能と互換性改善を含むメジャーリリースです。

</div>

<div class="ulist">

- 新機能：

  <div class="olist arabic">

  1.  要素ノードのPCDATA/CDATA内容を操作する補助クラス`xml_text`を追加しました。

  2.  任意で使えるヘッダーのみのモードを追加しました（`PUGIXML_HEADER_ONLY`の定義で制御します）。

  3.  C++11の範囲forループや`BOOST_FOREACH`で使う`xml_node::children()`と`xml_node::attributes()`を追加しました。

  4.  読み込みと保存で、Latin-1（ISO-8859-1）エンコーディング変換への対応を追加しました。

  5.  `xml_attribute::as_*`に独自の既定値を追加しました（属性が存在しない場合に返します）。

  6.  空白のみのPCDATAが唯一の子の場合に、そのPCDATAを保持する`parse_ws_pcdata_single`フラグを追加しました。

  7.  ファイルをバイナリーではなくテキストとして開く`format_save_file_text`を、`xml_document::save_file`に追加しました（Windowsの改行形式が変わります）。

  8.  特殊記号のエスケープを無効にする`format_no_escapes`フラグを追加しました（`~parse_escapes`を補完します）。

  9.  シークできないストリームから文書を読み込む機能を追加しました。

  10. メモリー確保の動作を調整する`PUGIXML_MEMORY_*`定数を追加しました（組み込みシステムで役立ちます）。

  11. プリプロセッサー定義`PUGIXML_VERSION`を追加しました。

  </div>

- 互換性の改善：

  <div class="olist arabic">

  1.  パーサーがsetjmp対応を必要としなくなりました（一部の組み込みプラットフォームとの互換性が改善し、`/clr:pure`でコンパイルできます）。

  2.  STLの前方宣言を使わなくなりました（SunCC/RWSTLでのコンパイル、C++11モードのclangでのコンパイルを修正）。

  3.  AirPlay SDK、Android、Windows Mobile（WinCE）、C++/CLIでのコンパイルを修正しました。

  4.  各種GCCバージョン、Intel C++コンパイラー、Clangの複数のコンパイル警告を修正しました。

  </div>

- 不具合の修正：

  <div class="olist arabic">

  1.  C++/CLIでの問題を回避するため、安全でないbool変換を修正しました。

  2.  イテレーターの参照外し演算子がconstになりました（Boostの`filter_iterator`対応を修正）。

  3.  `xml_document::save_file`が保存中のファイルI/Oエラーを確認するようになりました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.0"></span>

### <a href="#source-v1.0" class="anchor"></a><a href="#source-v1.0" class="link">v1.0 <sup>2010-11-01</sup></a>

<div class="paragraph">

多数のXPath拡張、ワイド文字のファイル名対応、各種性能改善、不具合修正などを含むメジャーリリースです。

</div>

<div class="ulist">

- XPath：

  <div class="olist arabic">

  1.  XPathの実装を`pugixml.cpp`へ移動しました（現在はこれが唯一のソースファイルです）。コードサイズを削減するためにXPathを無効にしたい場合は、`PUGIXML_NO_XPATH`を使ってください。

  2.  例外を使わなくてもXPathに対応するようになりました（`PUGIXML_NO_EXCEPTIONS`）。エラー処理の仕組みは、例外対応の有無によって変わります。

  3.  STLを使わなくてもXPathに対応するようになりました（`PUGIXML_NO_STL`）。

  4.  変数への対応を導入しました。

  5.  STLなしで動作する、新しい`xpath_query::evaluate_string`を導入しました。

  6.  イテレーター範囲から作成する、新しい`xpath_node_set`のコンストラクターを導入しました。

  7.  評価関数が、属性をコンテキストノードとして受け取れるようになりました。

  8.  内部のメモリー確保がすべて独自のメモリー確保関数を使うようになりました。

  9.  エラー報告を改善しました。解析エラーとともに、最後に解析した位置のオフセットを返すようになりました。

  </div>

- 不具合の修正：

  <div class="olist arabic">

  1.  ストリームの例外を有効にしてストリームから読み込む場合の、メモリーリークを修正しました。

  2.  独自の解放関数をnullポインターで呼んでいたケースを修正しました。

  3.  イテレーターカテゴリーの関数に不足していた属性を修正しました。すべての関数/クラスをDLLからエクスポートできるようになりました。

  4.  複数の関数でわずかに過剰な読み取りを引き起こしていた、Digital Marsコンパイラーの不具合を回避しました。

  5.  MSVC/MinGWの`load_file`が、2 Gb以上のファイルで動作するようになりました。

  6.  XPath：不正な問い合わせによるメモリーリークを修正しました。

  7.  XPath：空の属性引数を渡す場合の`xpath_node()`の属性コンストラクターを修正しました。

  8.  XPath：非ASCIIの引数に対する`lang()`関数を修正しました。

  </div>

- 仕様の変更：

  <div class="olist arabic">

  1.  `]]>`を含むCDATAノードは、複数のノードとして出力するようになりました。内部構造は変わりますが、これがCDATA内容をエスケープする唯一の方法です。

  2.  解析中のメモリー確保エラーでも、最後に解析した位置のオフセットを保持するようになりました（解析がどこまで進んだかを把握するためです）。

  3.  要素ノードの唯一の子がCDATA型の場合、余分なインデントを省略します（以前はPCDATAの子にだけ適用していました）。

  </div>

- 追加機能：

  <div class="olist arabic">

  1.  `xml_parse_result`の既定のコンストラクターを追加しました。

  2.  ワイド文字のパスを受け取る`xml_document::load_file`と`xml_document::save_file`を追加しました。

  3.  `std::wstring`/`std::string`引数を受け取る`as_utf8`と`as_wide`のオーバーロードを追加しました。

  4.  DOCTYPEのノード型（`node_doctype`）と、解析時にそのノードを文書へ追加する専用の解析フラグ`parse_doctype`を追加しました。

  5.  `parse_default`に、`parse_ws_pcdata`以外のすべてのノード型の解析フラグを加えた、解析フラグマスク`parse_full`を追加しました。

  6.  ハッシュを使うコンテナー向けに、`xml_node::hash_value()`と`xml_attribute::hash_value()`を追加しました。

  7.  マーシャリングを容易にするため、`xml_node`と`xml_attribute`の両方に、`internal_object()`と追加のコンストラクターを導入しました（言語バインディングで役立ちます）。

  8.  `xml_document::document_element()`関数を追加しました。

  9.  `xml_node::prepend_attribute`、`xml_node::prepend_child`、`xml_node::prepend_copy`関数を追加しました。

  10. 要素ノードに対して、型の代わりに名前を受け取る`xml_node::append_child`、`xml_node::prepend_child`、`xml_node::insert_child_before`、`xml_node::insert_child_after`のオーバーロードを追加しました。

  11. `xml_document::reset()`関数を追加しました。

  </div>

- 性能の改善：

  <div class="olist arabic">

  1.  `xml_node::root()`と`xml_node::offset_debug()`が、O(logN)ではなくO(1)になりました。

  2.  解析を小幅に最適化しました。

  3.  DOMツリー内の文字列のメモリーを小幅に最適化しました（`set_name`/`set_value`）。

  4.  DOMツリー内の文字列のメモリー回収を最適化しました（無駄なメモリーが多すぎる場合、`set_name`/`set_value`がバッファーを再確保するようになりました）。

  5.  XPath：文書順の整列を最適化しました。

  6.  XPath：子/属性軸のステップを最適化しました。

  7.  XPath：MSVCでの数値から文字列への変換を最適化しました。

  8.  XPath：多数の引数に対するconcatを最適化しました。

  9.  XPath：評価時のメモリー確保の仕組みを最適化しました。定数と文書の文字列をヒープ上に確保しなくなりました。

  10. XPath：評価時のメモリー確保の仕組みを最適化しました。すべての一時値のメモリー確保に、高速なスタック状のアロケーターを使います。

  </div>

- 互換性：

  <div class="olist arabic">

  1.  ワイルドカード関数（`xml_node::child_w`、`xml_node::attribute_w`など）を削除しました。

  2.  `xml_node::all_elements_by_name`を削除しました。

  3.  列挙型`xpath_type_t`を削除しました。代わりに`xpath_value_type`を使ってください。

  4.  列挙型`format_write_bom_utf8`を削除しました。代わりに`format_write_bom`を使ってください。

  5.  `xml_document::precompute_document_order`、`xml_attribute::document_order`、`xml_node::document_order`関数を削除しました。文書順の整列の最適化が自動になりました。

  6.  `xml_document::parse`関数と`transfer_ownership`構造体を削除しました。代わりに`xml_document::load_buffer_inplace`と`xml_document::load_buffer_inplace_own`を使ってください。

  7.  `as_utf16`関数を削除しました。代わりに`as_wide`を使ってください。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.9"></span>

### <a href="#source-v0.9" class="anchor"></a><a href="#source-v0.9" class="link">v0.9 <sup>2010-07-01</sup></a>

<div class="paragraph">

Unicode対応の拡張と改善、各種性能改善、不具合修正などを含むメジャーリリースです。

</div>

<div class="ulist">

- Unicodeの主要な改善：

  <div class="olist arabic">

  1.  エンコーディング対応を導入しました（読み込み時の自動/手動検出、保存時の手動選択、UTF8、UTF16 LE/BE、UTF32 LE/BEとの相互変換）。

  2.  `wchar_t`モードを導入しました（`PUGIXML_WCHAR_MODE`を定義すると、pugixmlの内部エンコーディングをUTF8から`wchar_t`へ切り替えられます。すべての関数がUnicode版に切り替わります）。

  3.  読み込み/保存関数がワイド文字のストリームに対応するようになりました。

  </div>

- 不具合の修正：

  <div class="olist arabic">

  1.  解析失敗時に文書が破損する不具合を修正しました。

  2.  XPathの文字列/数値変換を改善しました（精度向上、非常に大きい数値でのクラッシュ修正）。

  3.  DOCTYPE解析を改善しました。パーサーが、整形式のDOCTYPE宣言をすべて認識するようになりました。

  4.  大きい数値（例：2<sup>32</sup>-1）に対する`xml_attribute::as_uint()`を修正しました。

  5.  ノード名の接頭辞ではあるものの完全には一致しないパス要素に対する、`xml_node::first_element_by_path`を修正しました。

  </div>

- 仕様の変更：

  <div class="olist arabic">

  1.  `parse()` APIを`load_buffer`/`load_buffer_inplace`/`load_buffer_inplace_own`へ変更しました。`load_buffer` APIはゼロ終端文字列を必要としません。

  2.  `as_utf16`を`as_wide`へ改名しました。

  3.  `xml_node::offset_debug`の戻り値の型と`xml_parse_result::offset`の型を、`ptrdiff_t`へ変更しました。

  4.  名前が空のノード/属性は、`:anonymous`として出力するようになりました。

  </div>

- 性能の改善：

  <div class="olist arabic">

  1.  文書の解析と保存を最適化しました。

  2.  内部のメモリー管理を変更しました。メタデータと名前/値のデータの両方に内部アロケーターを使います。確保したページ内の領域がすべて解放されると、そのページも削除します。

  3.  メモリー消費を最適化しました。x86での`sizeof(xml_node_struct)`を40バイトから32バイトへ削減しました。

  4.  デバッグモードの解析/保存を約1桁高速化しました。

  </div>

- その他：

  <div class="olist arabic">

  1.  `pugixml.hpp`内のSTLのインクルードを、`<exception>`以外はすべて前方宣言へ置き換えました。

  2.  `xml_node::remove_child`と`xml_node::remove_attribute`が、操作の結果を返すようになりました。

  </div>

- 互換性：

  <div class="olist arabic">

  1.  互換性のために`parse()`と`as_utf16`を残しています（これらの関数は非推奨で、バージョン1.0で削除する予定です）。

  2.  ワイルドカード関数、`document_order`/`precompute_document_order`関数、`all_elements_by_name`関数、`format_write_bom_utf8`フラグは非推奨となり、バージョン1.0で削除する予定です。

  3.  列挙型`xpath_type_t`を`xpath_value_type`へ改名しました。`xpath_type_t`は非推奨となり、バージョン1.0で削除する予定です。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.5"></span>

### <a href="#source-v0.5" class="anchor"></a><a href="#source-v0.5" class="link">v0.5 <sup>2009-11-08</sup></a>

<div class="paragraph">

主に不具合を修正するリリースです。変更点：

</div>

<div class="ulist">

- XPathの不具合修正：

  <div class="olist arabic">

  1.  `translate()`、`lang()`、`concat()`関数を修正しました（無限ループ/クラッシュ）。

  2.  空の文字列リテラル（`""`）を含む問い合わせのコンパイルを修正しました。

  3.  軸の検査を修正しました。結果のノード集合に空のノード/属性を追加しなくなりました。

  4.  ノード集合の文字列値の評価を修正しました（結果から一部のテキストの子孫が除外されていました）。

  5.  `self::`軸を修正しました（`ancestor-or-self::`と同じ動作をしていました）。

  6.  `following::`軸と`preceding::`軸を修正しました（それぞれ子孫ノード、祖先ノードを含んでいました）。

  7.  `namespace-uri()`関数を小幅に修正しました（名前空間宣言の範囲には、名前空間宣言属性の親要素も含まれます）。

  8.  一部の不正な問い合わせを解析しなくなりました（例：`foo: *`）。

  9.  `text()`などのノード検査の解析の不具合を修正しました（例：`foo[text()]`のコンパイルが失敗していました）。

  10. ルートのステップ（`/`）を修正しました。空のノードに対して問い合わせを評価する場合、空のノード集合を選択するようになりました。

  11. 文字列から数値への変換を修正しました（`"123 "`はNaNに、`"123 .456"`は123.456に変換されていましたが、現在の結果はそれぞれ123とNaNです）。

  12. ノード集合をコピーする場合、整列の種類を保持するようになりました。一部の問い合わせで性能が改善します。

  </div>

- その他の不具合修正：

  <div class="olist arabic">

  1.  PIノードに対する`xml_node::offset_debug`を修正しました。

  2.  `xml_node::remove_attribute`に、空の属性の検査を追加しました。

  3.  `node_pi`と`node_declaration`のコピーを修正しました。

  4.  constの整合性を修正しました。

  </div>

- 仕様の変更：

  <div class="olist arabic">

  1.  `xpath_node::select_nodes()`と関連関数は、式の戻り値の型がノード集合以外の場合、アサーションではなく例外を送出するようになりました。 訳注：関数名はこの履歴の原文表記です。固定版ヘッダーでは、この選択関数はXMLノードのクラスのメンバーとして宣言されています。

  2.  `xml_node::traverse()`が、`begin()`と`end()`の両コールバックで深さを-1に設定するようになりました（以前は`begin()`で0、`end()`で-1でした）。

  3.  rawではないノード出力の場合、PCDATAに兄弟があれば、ノード内のPCDATAの後に改行を出力します。

  4.  UTF8から`wchar_t`への変換は、5バイトのUTF8に似たシーケンスを不正とみなすようになりました。

  </div>

- 新機能：

  <div class="olist arabic">

  1.  インデックスによる反復処理向けに、`xpath_node_set::operator[]`を追加しました。

  2.  `xpath_query::return_type()`を追加しました。

  3.  メモリー管理関数の取得アクセサーを追加しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.42"></span>

### <a href="#source-v0.42" class="anchor"></a><a href="#source-v0.42" class="link">v0.42 <sup>2009-09-17</sup></a>

<div class="paragraph">

保守リリース。変更点：

</div>

<div class="ulist">

- 不具合の修正：

  <div class="olist arabic">

  1.  独自のメモリー確保関数を使う場合や、`delete[]` / `free`に互換性がない場合の、解放を修正しました。

  2.  不正な問い合わせに対するXPathパーサーを修正しました（不正なXPath問い合わせは、必ずコンパイルに失敗するはずです）。

  3.  `find_child_by_attribute`のconstの整合性を修正しました。

  4.  互換性を改善しました（各種警告を修正し、GCCの`<cstring>`インクルード依存を修正）。

  5.  空のノードに対して正しく動作するよう、イテレーターのbegin/endとprint関数を修正しました。

  </div>

- 新機能：

  <div class="olist arabic">

  1.  クラス/関数の属性を制御する設定マクロ`PUGIXML_API`/`PUGIXML_CLASS`/`PUGIXML_FUNCTION`を追加しました。

  2.  各種型を受け取る`xml_attribute::set_value`のオーバーロードを追加しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.41"></span>

### <a href="#source-v0.41" class="anchor"></a><a href="#source-v0.41" class="link">v0.41 <sup>2009-02-08</sup></a>

<div class="paragraph">

保守リリース。変更点：

</div>

<div class="ulist">

- 不具合の修正：

  <div class="olist arabic">

  1.  ノードの出力の不具合を修正しました（一部の内容が出力ストリームへ書き込まれないことがありました）。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.4"></span>

### <a href="#source-v0.4" class="anchor"></a><a href="#source-v0.4" class="link">v0.4 <sup>2009-01-18</sup></a>

<div class="paragraph">

変更点：

</div>

<div class="ulist">

- 不具合の修正：

  <div class="olist arabic">

  1.  手動で寿命を管理する`parse()`のサンプル文書を修正しました。

  2.  XPathの文書順の整列を修正しました（`xpath_node_set::sort`の後のノード順が不正となり、一部のXPath問い合わせの結果も不正となっていました）。

  </div>

- ノード出力の変更：

  <div class="olist arabic">

  1.  ノード出力時に、一重引用符をエスケープしなくなりました。

  2.  ノード出力時に、ASCII表の後半の記号をエスケープしなくなりました。このため、不要になった`format_utf8`フラグを削除し、`format_write_bom`を`format_write_bom_utf8`へ改名しました。

  3.  ノード出力を改め、`xml_writer`インターフェースを通じて動作するようにしました。`FILE*`と`std::ostream`向けの実装があります。副次的な効果として、`xml_document::save_file`がSTLなしで動作するようになりました。

  </div>

- 新機能：

  <div class="olist arabic">

  1.  属性に符号なし整数への対応を追加しました（`xml_attribute::as_uint`、`xml_attribute::operator=`）。

  2.  `parse_declaration`フラグを指定すると、文書宣言（`<?xml …​?>`）を`node_declaration`型のノードとして解析するようになりました（encoding/versionには属性と同様にアクセスします。例：`doc.child("xml").attribute("version").as_float()`）。対応するノード出力フラグも追加しました。

  3.  独自のメモリー管理への対応を追加しました（詳細は`set_memory_management_functions`を参照）。

  4.  ノード/属性のコピーを実装しました（詳細は`xml_node::insert_copy_*`と`xml_node::append_copy`を参照）。

  5.  一部の場合（COLLADAファイルなど）に解析コードを簡単にする`find_child_by_attribute`と`find_child_by_attribute_w`を追加しました。

  6.  デバッグ用にファイルのオフセット情報を取得する機能を追加しました（解析済みファイル内の任意の`xml_node`の正確な位置を確認できます。詳細は`xml_node::offset_debug`を参照）。

  7.  解析のエラー処理を改善しました。`load()`、`load_file()`、`parse()`が、エラーコードと最後に解析した位置のオフセットを含む`xml_parse_result`を返すようになりました。`xml_parse_result`は暗黙に`bool`へ変換できるため、旧インターフェースを壊しません。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.34"></span>

### <a href="#source-v0.34" class="anchor"></a><a href="#source-v0.34" class="link">v0.34 <sup>2007-10-31</sup></a>

<div class="paragraph">

保守リリース。変更点：

</div>

<div class="ulist">

- 不具合の修正：

  <div class="olist arabic">

  1.  テキストモードのiostreamから読み込む場合の不具合を修正しました。

  2.  `transfer_ownership`がtrueで解析に失敗する場合のリークを修正しました。

  3.  保存の不具合を修正しました（属性値の`\r`と`\n`をエスケープするようになりました）。

  4.  `free()`を`destroy()`へ改名しました。マクロとの衝突が報告されていたためです。

  </div>

- 新機能：

  <div class="olist arabic">

  1.  互換性を改善しました（Digital Mars C++、MSVC 6、CodeWarrior 8、PGI C++、Comeau、PS3、XBox360に対応）。

  2.  例外処理のないプラットフォーム向けに、`PUGIXML_NO_EXCEPTION`フラグを追加しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.3"></span>

### <a href="#source-v0.3" class="anchor"></a><a href="#source-v0.3" class="link">v0.3 <sup>2007-02-21</sup></a>

<div class="paragraph">

リファクタリング、再設計、改善を行ったバージョンです。変更点：

</div>

<div class="ulist">

- インターフェース：

  <div class="olist arabic">

  1.  XPathを追加しました。

  2.  ツリーの変更関数を追加しました。

  3.  STLなしのコンパイルモードを追加しました。

  4.  文書をファイルへ保存する機能を追加しました。

  5.  解析フラグをリファクタリングしました。

  6.  `xml_parser`クラスを削除し、`xml_document`を使うようにしました。

  7.  所有権を移譲する解析モードを追加しました。

  8.  `xml_tree_walker`の動作を変更しました。

  9.  イテレーターが非constになりました。

  </div>

- 実装：

  <div class="olist arabic">

  1.  複数のコンパイラーとプラットフォームに対応しました。

  2.  解析の中核をリファクタリングし、高速化しました。

  3.  標準への準拠を改善しました。

  4.  XPathの実装を追加しました。

  5.  複数の不具合を修正しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.2"></span>

### <a href="#source-v0.2" class="anchor"></a><a href="#source-v0.2" class="link">v0.2 <sup>2006-11-06</sup></a>

<div class="paragraph">

最初の公開リリースです。変更点：

</div>

<div class="ulist">

- 不具合の修正：

  <div class="olist arabic">

  1.  空のノードに対する`child_value()`を修正しました。

  2.  W4での`xml_parser_impl`の警告を修正しました。

  </div>

- 新機能：

  <div class="olist arabic">

  1.  `child_value(name)`と`child_value_w(name)`を導入しました。

  2.  `parse_eol_pcdata`と`parse_eol_attribute`のフラグを導入し、`parse_minimal`を最適化しました。

  3.  `strconv_t`を最適化しました。

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.1"></span>

### <a href="#source-v0.1" class="anchor"></a><a href="#source-v0.1" class="link">v0.1 <sup>2006-07-15</sup></a>

<div class="paragraph">

テストを目的とした最初の非公開リリースです。

</div>

</div>

</div>

</div>
