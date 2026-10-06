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

  3.  ノードのコピーを最適化しました（文書間のコピーで10%、文書間のコピーで3倍高速化。使用するスタック領域も一定量になりました）。

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

Major release, featuring various new features, bug fixes and compatibility improvements.

</div>

<div class="ulist">

- Specification changes:

  <div class="olist arabic">

  1.  Documents without element nodes are now rejected with `status_no_document_element` error, unless `parse_fragment` option is used

  </div>

- New features:

  <div class="olist arabic">

  1.  Added XML fragment parsing (`parse_fragment` flag)

  2.  Added PCDATA whitespace trimming (`parse_trim_pcdata` flag)

  3.  Added long long support for `xml_attribute` and `xml_text` (`as_llong`, `as_ullong` and `set_value`/`set` overloads)

  4.  Added hexadecimal integer parsing support for `as_int`/`as_uint`/`as_llong`/`as_ullong`

  5.  Added `xml_node::append_buffer` to improve performance of assembling documents from fragments

  6.  `xml_named_node_iterator` is now bidirectional

  7.  Reduced XPath stack consumption during compilation and evaluation (useful for embedded systems)

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Improved support for platforms without wchar_t support

  2.  Fixed several false positives in clang static analysis

  3.  Fixed several compilation warnings for various GCC versions

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed undefined pointer arithmetic in XPath implementation

  2.  Fixed non-seekable iostream support for certain stream types, i.e. Boost `file_source` with pipe input

  3.  Fixed `xpath_query::return_type` for some expressions

  4.  Fixed dllexport issues with `xml_named_node_iterator`

  5.  Fixed `find_child_by_attribute` assertion for attributes with null name/value

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.2"></span>

### <a href="#source-v1.2" class="anchor"></a><a href="#source-v1.2" class="link">v1.2 <sup>2012-05-01</sup></a>

<div class="paragraph">

Major release, featuring header-only mode, various interface enhancements (i.e. PCDATA manipulation and C++11 iteration), many other features and compatibility improvements.

</div>

<div class="ulist">

- New features:

  <div class="olist arabic">

  1.  Added `xml_text` helper class for working with PCDATA/CDATA contents of an element node

  2.  Added optional header-only mode (controlled by `PUGIXML_HEADER_ONLY` define)

  3.  Added `xml_node::children()` and `xml_node::attributes()` for C++11 ranged for loop or `BOOST_FOREACH`

  4.  Added support for Latin-1 (ISO-8859-1) encoding conversion during loading and saving

  5.  Added custom default values for `xml_attribute::as_*` (they are returned if the attribute does not exist)

  6.  Added `parse_ws_pcdata_single` flag for preserving whitespace-only PCDATA in case it’s the only child

  7.  Added `format_save_file_text` for `xml_document::save_file` to open files as text instead of binary (changes newlines on Windows)

  8.  Added `format_no_escapes` flag to disable special symbol escaping (complements `~parse_escapes`)

  9.  Added support for loading document from streams that do not support seeking

  10. Added `PUGIXML_MEMORY_*` constants for tweaking allocation behavior (useful for embedded systems)

  11. Added `PUGIXML_VERSION` preprocessor define

  </div>

- Compatibility improvements:

  <div class="olist arabic">

  1.  Parser does not require setjmp support (improves compatibility with some embedded platforms, enables `/clr:pure` compilation)

  2.  STL forward declarations are no longer used (fixes SunCC/RWSTL compilation, fixes clang compilation in C++11 mode)

  3.  Fixed AirPlay SDK, Android, Windows Mobile (WinCE) and C++/CLI compilation

  4.  Fixed several compilation warnings for various GCC versions, Intel C++ compiler and Clang

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed unsafe bool conversion to avoid problems on C++/CLI

  2.  Iterator dereference operator is const now (fixes Boost `filter_iterator` support)

  3.  `xml_document::save_file` now checks for file I/O errors during saving

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v1.0"></span>

### <a href="#source-v1.0" class="anchor"></a><a href="#source-v1.0" class="link">v1.0 <sup>2010-11-01</sup></a>

<div class="paragraph">

Major release, featuring many XPath enhancements, wide character filename support, miscellaneous performance improvements, bug fixes and more.

</div>

<div class="ulist">

- XPath:

  <div class="olist arabic">

  1.  XPath implementation is moved to `pugixml.cpp` (which is the only source file now); use `PUGIXML_NO_XPATH` if you want to disable XPath to reduce code size

  2.  XPath is now supported without exceptions (`PUGIXML_NO_EXCEPTIONS`); the error handling mechanism depends on the presence of exception support

  3.  XPath is now supported without STL (`PUGIXML_NO_STL`)

  4.  Introduced variable support

  5.  Introduced new `xpath_query::evaluate_string`, which works without STL

  6.  Introduced new `xpath_node_set` constructor (from an iterator range)

  7.  Evaluation function now accept attribute context nodes

  8.  All internal allocations use custom allocation functions

  9.  Improved error reporting; now a last parsed offset is returned together with the parsing error

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed memory leak for loading from streams with stream exceptions turned on

  2.  Fixed custom deallocation function calling with null pointer in one case

  3.  Fixed missing attributes for iterator category functions; all functions/classes can now be DLL-exported

  4.  Worked around Digital Mars compiler bug, which lead to minor read overfetches in several functions

  5.  `load_file` now works with 2+ Gb files in MSVC/MinGW

  6.  XPath: fixed memory leaks for incorrect queries

  7.  XPath: fixed `xpath_node()` attribute constructor with empty attribute argument

  8.  XPath: fixed `lang()` function for non-ASCII arguments

  </div>

- Specification changes:

  <div class="olist arabic">

  1.  CDATA nodes containing `]]>` are printed as several nodes; while this changes the internal structure, this is the only way to escape CDATA contents

  2.  Memory allocation errors during parsing now preserve last parsed offset (to give an idea about parsing progress)

  3.  If an element node has the only child, and it is of CDATA type, then the extra indentation is omitted (previously this behavior only held for PCDATA children)

  </div>

- Additional functionality:

  <div class="olist arabic">

  1.  Added `xml_parse_result` default constructor

  2.  Added `xml_document::load_file` and `xml_document::save_file` with wide character paths

  3.  Added `as_utf8` and `as_wide` overloads for `std::wstring`/`std::string` arguments

  4.  Added DOCTYPE node type (`node_doctype`) and a special parse flag, `parse_doctype`, to add such nodes to the document during parsing

  5.  Added `parse_full` parse flag mask, which extends `parse_default` with all node type parsing flags except `parse_ws_pcdata`

  6.  Added `xml_node::hash_value()` and `xml_attribute::hash_value()` functions for use in hash-based containers

  7.  Added `internal_object()` and additional constructor for both `xml_node` and `xml_attribute` for easier marshalling (useful for language bindings)

  8.  Added `xml_document::document_element()` function

  9.  Added `xml_node::prepend_attribute`, `xml_node::prepend_child` and `xml_node::prepend_copy` functions

  10. Added `xml_node::append_child`, `xml_node::prepend_child`, `xml_node::insert_child_before` and `xml_node::insert_child_after` overloads for element nodes (with name instead of type)

  11. Added `xml_document::reset()` function

  </div>

- Performance improvements:

  <div class="olist arabic">

  1.  `xml_node::root()` and `xml_node::offset_debug()` are now O(1) instead of O(logN)

  2.  Minor parsing optimizations

  3.  Minor memory optimization for strings in DOM tree (`set_name`/`set_value`)

  4.  Memory optimization for string memory reclaiming in DOM tree (`set_name`/`set_value` now reallocate the buffer if memory waste is too big)

  5.  XPath: optimized document order sorting

  6.  XPath: optimized child/attribute axis step

  7.  XPath: optimized number-to-string conversions in MSVC

  8.  XPath: optimized concat for many arguments

  9.  XPath: optimized evaluation allocation mechanism: constant and document strings are not heap-allocated

  10. XPath: optimized evaluation allocation mechanism: all temporaries' allocations use fast stack-like allocator

  </div>

- Compatibility:

  <div class="olist arabic">

  1.  Removed wildcard functions (`xml_node::child_w`, `xml_node::attribute_w`, etc.)

  2.  Removed `xml_node::all_elements_by_name`

  3.  Removed `xpath_type_t` enumeration; use `xpath_value_type` instead

  4.  Removed `format_write_bom_utf8` enumeration; use `format_write_bom` instead

  5.  Removed `xml_document::precompute_document_order`, `xml_attribute::document_order` and `xml_node::document_order` functions; document order sort optimization is now automatic

  6.  Removed `xml_document::parse` functions and `transfer_ownership` struct; use `xml_document::load_buffer_inplace` and `xml_document::load_buffer_inplace_own` instead

  7.  Removed `as_utf16` function; use `as_wide` instead

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.9"></span>

### <a href="#source-v0.9" class="anchor"></a><a href="#source-v0.9" class="link">v0.9 <sup>2010-07-01</sup></a>

<div class="paragraph">

Major release, featuring extended and improved Unicode support, miscellaneous performance improvements, bug fixes and more.

</div>

<div class="ulist">

- Major Unicode improvements:

  <div class="olist arabic">

  1.  Introduced encoding support (automatic/manual encoding detection on load, manual encoding selection on save, conversion from/to UTF8, UTF16 LE/BE, UTF32 LE/BE)

  2.  Introduced `wchar_t` mode (you can set `PUGIXML_WCHAR_MODE` define to switch pugixml internal encoding from UTF8 to `wchar_t`; all functions are switched to their Unicode variants)

  3.  Load/save functions now support wide streams

  </div>

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed document corruption on failed parsing bug

  2.  XPath string/number conversion improvements (increased precision, fixed crash for huge numbers)

  3.  Improved DOCTYPE parsing: now parser recognizes all well-formed DOCTYPE declarations

  4.  Fixed `xml_attribute::as_uint()` for large numbers (i.e. 2<sup>32</sup>-1)

  5.  Fixed `xml_node::first_element_by_path` for path components that are prefixes of node names, but are not exactly equal to them.

  </div>

- Specification changes:

  <div class="olist arabic">

  1.  `parse()` API changed to `load_buffer`/`load_buffer_inplace`/`load_buffer_inplace_own`; `load_buffer` APIs do not require zero-terminated strings.

  2.  Renamed `as_utf16` to `as_wide`

  3.  Changed `xml_node::offset_debug` return type and `xml_parse_result::offset` type to `ptrdiff_t`

  4.  Nodes/attributes with empty names are now printed as `:anonymous`

  </div>

- Performance improvements:

  <div class="olist arabic">

  1.  Optimized document parsing and saving

  2.  Changed internal memory management: internal allocator is used for both metadata and name/value data; allocated pages are deleted if all allocations from them are deleted

  3.  Optimized memory consumption: `sizeof(xml_node_struct)` reduced from 40 bytes to 32 bytes on x86

  4.  Optimized debug mode parsing/saving by order of magnitude

  </div>

- Miscellaneous:

  <div class="olist arabic">

  1.  All STL includes except `<exception>` in `pugixml.hpp` are replaced with forward declarations

  2.  `xml_node::remove_child` and `xml_node::remove_attribute` now return the operation result

  </div>

- Compatibility:

  <div class="olist arabic">

  1.  `parse()` and `as_utf16` are left for compatibility (these functions are deprecated and will be removed in version 1.0)

  2.  Wildcard functions, `document_order`/`precompute_document_order` functions, `all_elements_by_name` function and `format_write_bom_utf8` flag are deprecated and will be removed in version 1.0

  3.  `xpath_type_t` enumeration was renamed to `xpath_value_type`; `xpath_type_t` is deprecated and will be removed in version 1.0

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.5"></span>

### <a href="#source-v0.5" class="anchor"></a><a href="#source-v0.5" class="link">v0.5 <sup>2009-11-08</sup></a>

<div class="paragraph">

Major bugfix release. Changes:

</div>

<div class="ulist">

- XPath bugfixes:

  <div class="olist arabic">

  1.  Fixed `translate()`, `lang()` and `concat()` functions (infinite loops/crashes)

  2.  Fixed compilation of queries with empty literal strings (`""`)

  3.  Fixed axis tests: they never add empty nodes/attributes to the resulting node set now

  4.  Fixed string-value evaluation for node-set (the result excluded some text descendants)

  5.  Fixed `self::` axis (it behaved like `ancestor-or-self::`)

  6.  Fixed `following::` and `preceding::` axes (they included descendent and ancestor nodes, respectively)

  7.  Minor fix for `namespace-uri()` function (namespace declaration scope includes the parent element of namespace declaration attribute)

  8.  Some incorrect queries are no longer parsed now (i.e. `foo: *`)

  9.  Fixed `text()`/etc. node test parsing bug (i.e. `foo[text()]` failed to compile)

  10. Fixed root step (`/`) - it now selects empty node set if query is evaluated on empty node

  11. Fixed string to number conversion (`"123 "` converted to NaN, `"123 .456"` converted to 123.456 - now the results are 123 and NaN, respectively)

  12. Node set copying now preserves sorted type; leads to better performance on some queries

  </div>

- Miscellaneous bugfixes:

  <div class="olist arabic">

  1.  Fixed `xml_node::offset_debug` for PI nodes

  2.  Added empty attribute checks to `xml_node::remove_attribute`

  3.  Fixed `node_pi` and `node_declaration` copying

  4.  Const-correctness fixes

  </div>

- Specification changes:

  <div class="olist arabic">

  1.  `xpath_node::select_nodes()` and related functions now throw exception if expression return type is not node set (instead of assertion)

  2.  `xml_node::traverse()` now sets depth to -1 for both `begin()` and `end()` callbacks (was 0 at `begin()` and -1 at `end()`)

  3.  In case of non-raw node printing a newline is output after PCDATA inside nodes if the PCDATA has siblings

  4.  UTF8 → `wchar_t` conversion now considers 5-byte UTF8-like sequences as invalid

  </div>

- New features:

  <div class="olist arabic">

  1.  Added `xpath_node_set::operator[]` for index-based iteration

  2.  Added `xpath_query::return_type()`

  3.  Added getter accessors for memory-management functions

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.42"></span>

### <a href="#source-v0.42" class="anchor"></a><a href="#source-v0.42" class="link">v0.42 <sup>2009-09-17</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed deallocation in case of custom allocation functions or if `delete[]` / `free` are incompatible

  2.  XPath parser fixed for incorrect queries (i.e. incorrect XPath queries should now always fail to compile)

  3.  Const-correctness fixes for `find_child_by_attribute`

  4.  Improved compatibility (miscellaneous warning fixes, fixed `<cstring>` include dependency for GCC)

  5.  Fixed iterator begin/end and print function to work correctly for empty nodes

  </div>

- New features:

  <div class="olist arabic">

  1.  Added `PUGIXML_API`/`PUGIXML_CLASS`/`PUGIXML_FUNCTION` configuration macros to control class/function attributes

  2.  Added `xml_attribute::set_value` overloads for different types

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.41"></span>

### <a href="#source-v0.41" class="anchor"></a><a href="#source-v0.41" class="link">v0.41 <sup>2009-02-08</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed bug with node printing (occasionally some content was not written to output stream)

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.4"></span>

### <a href="#source-v0.4" class="anchor"></a><a href="#source-v0.4" class="link">v0.4 <sup>2009-01-18</sup></a>

<div class="paragraph">

Changes:

</div>

<div class="ulist">

- Bug fixes:

  <div class="olist arabic">

  1.  Documentation fix in samples for `parse()` with manual lifetime control

  2.  Fixed document order sorting in XPath (it caused wrong order of nodes after `xpath_node_set::sort` and wrong results of some XPath queries)

  </div>

- Node printing changes:

  <div class="olist arabic">

  1.  Single quotes are no longer escaped when printing nodes

  2.  Symbols in second half of ASCII table are no longer escaped when printing nodes; because of this, `format_utf8` flag is deleted as it’s no longer needed and `format_write_bom` is renamed to `format_write_bom_utf8`.

  3.  Reworked node printing - now it works via `xml_writer` interface; implementations for `FILE*` and `std::ostream` are available. As a side-effect, `xml_document::save_file` now works without STL.

  </div>

- New features:

  <div class="olist arabic">

  1.  Added unsigned integer support for attributes (`xml_attribute::as_uint`, `xml_attribute::operator=`)

  2.  Now document declaration (`<?xml …​?>`) is parsed as node with type `node_declaration` when `parse_declaration` flag is specified (access to encoding/version is performed as if they were attributes, i.e. `doc.child("xml").attribute("version").as_float()`); corresponding flags for node printing were also added

  3.  Added support for custom memory management (see `set_memory_management_functions` for details)

  4.  Implemented node/attribute copying (see `xml_node::insert_copy_*` and `xml_node::append_copy` for details)

  5.  Added `find_child_by_attribute` and `find_child_by_attribute_w` to simplify parsing code in some cases (i.e. COLLADA files)

  6.  Added file offset information querying for debugging purposes (now you’re able to determine exact location of any `xml_node` in parsed file, see `xml_node::offset_debug` for details)

  7.  Improved error handling for parsing - now `load()`, `load_file()` and `parse()` return `xml_parse_result`, which contains error code and last parsed offset; this does not break old interface as `xml_parse_result` can be implicitly casted to `bool`.

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.34"></span>

### <a href="#source-v0.34" class="anchor"></a><a href="#source-v0.34" class="link">v0.34 <sup>2007-10-31</sup></a>

<div class="paragraph">

Maintenance release. Changes:

</div>

<div class="ulist">

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed bug with loading from text-mode iostreams

  2.  Fixed leak when `transfer_ownership` is true and parsing is failing

  3.  Fixed bug in saving (`\r` and `\n` are now escaped in attribute values)

  4.  Renamed `free()` to `destroy()` - some macro conflicts were reported

  </div>

- New features:

  <div class="olist arabic">

  1.  Improved compatibility (supported Digital Mars C++, MSVC 6, CodeWarrior 8, PGI C++, Comeau, supported PS3 and XBox360)

  2.  `PUGIXML_NO_EXCEPTION` flag for platforms without exception handling

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.3"></span>

### <a href="#source-v0.3" class="anchor"></a><a href="#source-v0.3" class="link">v0.3 <sup>2007-02-21</sup></a>

<div class="paragraph">

Refactored, reworked and improved version. Changes:

</div>

<div class="ulist">

- Interface:

  <div class="olist arabic">

  1.  Added XPath

  2.  Added tree modification functions

  3.  Added no STL compilation mode

  4.  Added saving document to file

  5.  Refactored parsing flags

  6.  Removed `xml_parser` class in favor of `xml_document`

  7.  Added transfer ownership parsing mode

  8.  Modified the way `xml_tree_walker` works

  9.  Iterators are now non-constant

  </div>

- Implementation:

  <div class="olist arabic">

  1.  Support of several compilers and platforms

  2.  Refactored and sped up parsing core

  3.  Improved standard compliancy

  4.  Added XPath implementation

  5.  Fixed several bugs

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.2"></span>

### <a href="#source-v0.2" class="anchor"></a><a href="#source-v0.2" class="link">v0.2 <sup>2006-11-06</sup></a>

<div class="paragraph">

First public release. Changes:

</div>

<div class="ulist">

- Bug fixes:

  <div class="olist arabic">

  1.  Fixed `child_value()` (for empty nodes)

  2.  Fixed `xml_parser_impl` warning at W4

  </div>

- New features:

  <div class="olist arabic">

  1.  Introduced `child_value(name)` and `child_value_w(name)`

  2.  `parse_eol_pcdata` and `parse_eol_attribute` flags + `parse_minimal` optimizations

  3.  Optimizations of `strconv_t`

  </div>

</div>

</div>

<div class="sect2">

<span id="source-v0.1"></span>

### <a href="#source-v0.1" class="anchor"></a><a href="#source-v0.1" class="link">v0.1 <sup>2006-07-15</sup></a>

<div class="paragraph">

First private release for testing purposes

</div>

</div>

</div>

</div>
