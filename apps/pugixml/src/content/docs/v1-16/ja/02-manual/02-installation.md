---
title: "インストール"
description: "pugixml 1.16の公式インストール説明全文。"
licenseSource: "pugixml-manual-1.16"
---

<div class="sect1">

<span id="source-install"></span>

## <a href="#source-install" class="anchor"></a><a href="#source-install" class="link">2. インストール</a>

<div class="sectionbody">

<div class="sect2">

<span id="source-install.getting"></span>

### <a href="#source-install.getting" class="anchor"></a><a href="#source-install.getting" class="link">2.1. pugixmlの入手</a>

<div class="paragraph">

pugixmlはソース形式で配布されています。ソース配布物をダウンロードするか、Gitリポジトリをクローンできます。

</div>

<div class="sect3">

<span id="source-install.getting.source"></span>

#### <a href="#source-install.getting.source" class="anchor"></a><a href="#source-install.getting.source" class="link">2.1.1. ソース配布物</a>

<div class="paragraph">

最新のソース配布物はアーカイブとしてダウンロードできます。

</div>

<div class="paragraph">

[pugixml-1.16.zip](https://github.com/zeux/pugixml/releases/download/v1.16/pugixml-1.16.zip)（Windows形式の改行） / [pugixml-1.16.tar.gz](https://github.com/zeux/pugixml/releases/download/v1.16/pugixml-1.16.tar.gz)（Unix形式の改行）

</div>

<div class="paragraph">

配布物には、ライブラリのソース、文書（今読んでいるこのマニュアルとクイックスタートガイド）、コード例が含まれています。配布物をダウンロードしたら、圧縮アーカイブ内のすべてのファイルを展開してpugixmlをインストールしてください。

</div>

<div class="paragraph">

古い版が必要な場合は、[バージョンアーカイブ](https://github.com/zeux/pugixml/releases)からダウンロードできます。

</div>

</div>

<div class="sect3">

<span id="source-install.getting.git"></span>

#### <a href="#source-install.getting.git" class="anchor"></a><a href="#source-install.getting.git" class="link">2.1.2. Gitリポジトリ</a>

<div class="paragraph">

Gitリポジトリは[https://github.com/zeux/pugixml/](https://github.com/zeux/pugixml/)にあります。各バージョンにはGitタグ"v{version}"があり、常に最新の安定版リリースを指す"latest"タグもあります。

</div>

<div class="paragraph">

たとえば、現在の版をチェックアウトするには、次のコマンドを使えます。

</div>

<div class="listingblock">

<div class="content">

``` bash
git clone https://github.com/zeux/pugixml
cd pugixml
git checkout v1.16
```

</div>

</div>

<div class="paragraph">

リポジトリには、ライブラリのソース、文書、コード例、完全な単体テストスイートが含まれています。

</div>

<div class="paragraph">

新しい版を自動的に取得したい場合は`latest`タグを使ってください。明示的な操作でのみ新しい版へ切り替えたい場合は、ほかのタグを使ってください。また、masterブランチには開発途中のコードが含まれていることに注意してください。新しいリリースを待たずにmasterから新機能やバグ修正を取得できる一方、構成によってはコードが動作しなくなることもあります。

</div>

</div>

<div class="sect3">

<span id="source-install.getting.packages"></span>

#### <a href="#source-install.getting.packages" class="anchor"></a><a href="#source-install.getting.packages" class="link">2.1.3. パッケージ</a>

<div class="paragraph">

pugixmlは、各種パッケージマネージャーを通じてパッケージとして入手できます。ほとんどのパッケージはメインリポジトリとは別に保守されているため、必ずしも最新の版を含んでいません。

</div>

<div class="paragraph">

各種システムのpugixmlパッケージの例を挙げます。これは網羅的な一覧ではありません。

</div>

<div class="ulist">

- Linux（[Ubuntu](http://packages.ubuntu.com/search?keywords=pugixml)、[Debian](https://tracker.debian.org/pkg/pugixml)、[Fedora](https://packages.fedoraproject.org/pkgs/pugixml/pugixml)、[Arch Linux](https://archlinux.org/packages/extra/x86_64/pugixml/)、その他の[ディストリビューション](https://pkgs.org/download/pugixml)）

- [FreeBSD](https://www.freshports.org/textproc/pugixml)

- OSX：[Homebrew](https://formulae.brew.sh/formula/pugixml)経由

- Windows：[NuGet](https://www.nuget.org/packages/pugixml)経由

- C++パッケージマネージャー（[vcpkg](https://vcpkg.io/en/package/pugixml)、[Conan](https://conan.io/center/recipes/pugixml)）

</div>

</div>

</div>

<div class="sect2">

<span id="source-install.building"></span>

### <a href="#source-install.building" class="anchor"></a><a href="#source-install.building" class="link">2.2. pugixmlのビルド</a>

<div class="paragraph">

pugixmlはソース形式で配布され、ビルド済みバイナリーは含まれていません。自分でビルドする必要があります。

</div>

<div class="paragraph">

pugixmlのソース全体は、ソースファイル`pugixml.cpp`と、ヘッダーファイル`pugixml.hpp`、`pugiconfig.hpp`の3ファイルで構成されています。`pugixml.hpp`は、pugixmlのクラスや関数を使うためにインクルードする主要なヘッダーです。`pugiconfig.hpp`は補助的な設定ファイルです（[追加の設定オプション](#source-install.building.config)を参照）。このガイドの以降の説明では、`#include "pugixml.hpp"`でヘッダーが見つかるように、`pugixml.hpp`がカレントディレクトリかプロジェクトのインクルードディレクトリのいずれかにあると仮定します。ただし、相対パス（例：`#include "../libs/pugixml/src/pugixml.hpp"`）や、インクルードディレクトリからの相対パス（例：`#include <xml/thirdparty/pugixml/src/pugixml.hpp>`）も使えます。

</div>

<div class="sect3">

<span id="source-install.building.embed"></span>

#### <a href="#source-install.building.embed" class="anchor"></a><a href="#source-install.building.embed" class="link">2.2.1. ほかの静的ライブラリ・実行ファイルの一部としてビルドする</a>

<div class="paragraph">

pugixmlをビルドする最も簡単な方法は、ソースファイル`pugixml.cpp`を既存のライブラリや実行ファイルと一緒にコンパイルすることです。この手順はアプリケーションのビルド方法によって異なります。たとえばMicrosoft Visual Studio <sup>\[<a href="#source-_footnotedef_1" id="source-_footnoteref_1" class="footnote" title="脚注を表示。">1</a>\]</sup>、Apple Xcode、Code::Blocks、その他のIDEを使っている場合は、**いずれかのプロジェクトに`pugixml.cpp`を追加するだけ**です。

</div>

<div class="paragraph">

Microsoft Visual Studioを使っていて、プロジェクトでプリコンパイル済みヘッダーが有効になっていると、次のエラーメッセージが表示されます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
pugixml.cpp(3477) : fatal error C1010: unexpected end of file while looking for precompiled header. Did you forget to add '#include "stdafx.h"' to your source?
```

</div>

</div>

<div class="paragraph">

正しい解決方法は、`pugixml.cpp`についてプリコンパイル済みヘッダーを無効にすることです。"Create/Use Precompiled Header"オプション（Propertiesダイアログ → C/C++ → Precompiled Headers → Create/Use Precompiled Header）を"Not Using Precompiled Headers"に設定してください。すべてのプロジェクト構成・プラットフォームについて設定する必要があります。オプションを編集する前に、Configurationで"All Configurations"、Platformで"All Platforms"を選択できます。

</div>

<table class="tableblock frame-none grid-all stretch">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch1.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch1.png" alt="vs2005 プリコンパイル済みヘッダー設定 1" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch2.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch2.png" alt="vs2005 プリコンパイル済みヘッダー設定 2" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch3.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch3.png" alt="vs2005 プリコンパイル済みヘッダー設定 3" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch4.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_pch4.png" alt="vs2005 プリコンパイル済みヘッダー設定 4" /></a>
</div>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="sect3">

<span id="source-install.building.static"></span>

#### <a href="#source-install.building.static" class="anchor"></a><a href="#source-install.building.static" class="link">2.2.2. 独立した静的ライブラリとしてビルドする</a>

<div class="paragraph">

pugixmlを独立した静的ライブラリとしてコンパイルすることもできます。この手順はアプリケーションのビルド方法によって異なります。pugixmlの配布物には、よく使われるいくつかのIDE・ビルドシステム用のプロジェクトファイルが付属しています。Apple XCode、Code::Blocks、Codelite、Microsoft Visual Studio 2005、2008、2010以降用のプロジェクトファイルと、CMakeおよびpremake4用の設定スクリプトがあります。ほかのソフトウェア用のプロジェクトファイルやビルドスクリプトの提出も歓迎します。[フィードバック](/docs/pugixml/v1-16/ja/02-manual/01-overview/#source-overview.feedback)を参照してください。

</div>

<div class="paragraph">

Microsoft Visual Studioの各版には2つのプロジェクトがあります。1つは`pugixml_vs2008.vcproj`のような名前の、CRTを動的にリンクするものです。もう1つは`pugixml_vs2008_static.vcproj`のような名前の、CRTを静的にリンクするものです。アプリケーションで使うCRTと一致する方を選択してください。Microsoft Visual Studioで作成した新規プロジェクトの既定値は、CRTの動的リンクです。そのため、既定値を変更していなければ動的CRT版を使ってください。たとえばMicrosoft Visual Studio 2008では`pugixml_vs2008.vcproj`です。

</div>

<div class="paragraph">

pugixmlプロジェクトをワークスペースへ追加するだけでなく、アプリケーションがpugixmlライブラリとリンクすることも確認する必要があります。Microsoft Visual Studio 2005/2008の場合は、アプリケーションのプロジェクトからpugixmlプロジェクトへの依存関係を追加できます。Microsoft Visual Studio 2010以降の場合は、代わりにアプリケーションのプロジェクトへ参照を追加する必要があります。ほかのIDEやシステムについては、それぞれの文書を参照してください。

</div>

<table class="tableblock frame-none grid-all stretch">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th colspan="2" class="tableblock halign-left valign-top">Microsoft Visual Studio 2005/2008</th>
<th colspan="2" class="tableblock halign-left valign-top">Microsoft Visual Studio 2010+</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_link1.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_link1.png" alt="vs2005 リンク設定 1" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_link2.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2005_link2.png" alt="vs2005 リンク設定 2" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2010_link1.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2010_link1.png" alt="vs2010 リンク設定 1" /></a>
</div>
</div>
</div></td>
<td class="tableblock halign-left valign-top"><div class="content">
<div class="imageblock">
<div class="content">
<a href="/docs/pugixml/assets/pugixml-v1-16/images/vs2010_link2.png" class="image"><img src="/docs/pugixml/assets/pugixml-v1-16/images/vs2010_link2.png" alt="vs2010 リンク設定 2" /></a>
</div>
</div>
</div></td>
</tr>
</tbody>
</table>

</div>

<div class="sect3">

<span id="source-install.building.shared"></span>

#### <a href="#source-install.building.shared" class="anchor"></a><a href="#source-install.building.shared" class="link">2.2.3. 独立した共有ライブラリとしてビルドする</a>

<div class="paragraph">

pugixmlを独立した共有ライブラリとしてコンパイルすることもできます。手順は通常、静的ライブラリの場合と似ています。ただし、pugixmlの配布物には設定済みのプロジェクトやスクリプトが含まれていないため、自分で用意する必要があります。一般に、GCCベースのツールチェーンでは、ほかのライブラリをDLLとしてビルドする場合と違いはありません。コンパイルフラグに-sharedを追加すれば十分です。MSVCベースのツールチェーンでは、エクスポートするシンボルをdeclspec属性で明示的に指定する必要があります。[PUGIXML_API](#source-PUGIXML_API)マクロを、たとえば`pugiconfig.hpp`で次のように定義すれば指定できます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
#ifdef _DLL
    #define PUGIXML_API __declspec(dllexport)
#else
    #define PUGIXML_API __declspec(dllimport)
#endif
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
<td class="content">STL関連の関数を使う場合は、アプリケーションとpugixmlのSTL割り当てに同じヒープを使うよう、共有ランタイムライブラリを使ってください。MSVCでは、'Runtime library'プロパティに'Multithreaded DLL'または'Multithreaded Debug DLL'を選択します（<code>/MD</code>または<code>/MDd</code>リンカースイッチ）。また、プロジェクト間でランタイムライブラリの選択が一致していることも確認してください。</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="sect3">

<span id="source-install.building.header"></span>

#### <a href="#source-install.building.header" class="anchor"></a><a href="#source-install.building.header" class="link">2.2.4. ヘッダーオンリーモードで使う</a>

<div id="source-PUGIXML_HEADER_ONLY" class="paragraph">

pugixmlはヘッダーオンリーモードでも使用できます。これは、`pugixml.hpp`をインクルードするすべての翻訳単位に、pugixmlのソースコード全体が含まれることを意味します。BoostやSTLのライブラリの多くはこの方法で動作しています。

</div>

<div class="paragraph">

この方法には利点も欠点もあります。ツールチェーンがリンク時最適化に対応していない場合や、それを無効にしている場合には、多くの単純な関数がインライン化されるため、ヘッダーモードでツリーの走査・変更性能が向上することがあります。リンク時最適化を使う場合の性能は、ヘッダーオンリーでないモードと同程度になるはずです。ただし、コンパイラーはpugixmlをインクルードする翻訳単位ごとにそのソースをコンパイルしなければならないため、コンパイル時間が大幅に増えることがあります。ヘッダーモードで使いたいもののXPathは不要な場合は、[PUGIXML_NO_XPATH](#source-PUGIXML_NO_XPATH)の定義でXPathを無効にし、コンパイル時間を短縮することを検討できます。

</div>

<div class="paragraph">

ヘッダーオンリーモードを有効にするには、`PUGIXML_HEADER_ONLY`を定義する必要があります。`pugiconfig.hpp`に定義するか、コンパイラーのコマンドラインで指定できます。

</div>

<div class="paragraph">

`PUGIXML_HEADER_ONLY`が定義されていても、`pugixml.cpp`をコンパイルして問題ありません。たとえばRelease構成だけでヘッダーオンリーモードを使いたい場合は、pugixml.cppをプロジェクトに含め（[ほかの静的ライブラリ・実行ファイルの一部としてビルドする方法](#source-install.building.embed)を参照）、次のように`pugiconfig.hpp`で条件付きでヘッダーオンリーモードを有効にできます。

</div>

<div class="listingblock">

<div class="content">

``` cpp
#ifndef _DEBUG
    #define PUGIXML_HEADER_ONLY
#endif
```

</div>

</div>

</div>

<div class="sect3">

<span id="source-install.building.config"></span>

#### <a href="#source-install.building.config" class="anchor"></a><a href="#source-install.building.config" class="link">2.2.5. 追加の設定オプション</a>

<div class="paragraph">

pugixmlはいくつかの定義を使ってコンパイル処理を制御します。定義方法は2つあります。必要な定義を`pugiconfig.hpp`に記述する（コメントアウトされた例がいくつかあります）か、コンパイラーのコマンドラインで指定します。一貫性が重要です。アプリケーション全体で、`pugixml.hpp`をインクルードするすべてのソースファイル（pugixmlのソースも含む）の定義を一致させてください。`pugiconfig.hpp`へ定義を追加すれば、この一致を保証できます。ただし、マクロ定義をプリプロセッサーの`#if`や`#ifdef`指令で囲んでいて、その指令が一貫していない場合は除きます。`pugiconfig.hpp`に初めから入っているのは常にコメントだけなので、新しい版へ更新するときにも、自分で変更した版をそのまま安全に残せます。

</div>

<div class="paragraph">

<span id="source-PUGIXML_WCHAR_MODE"></span>`PUGIXML_WCHAR_MODE`の定義は、UTF-8形式のインターフェース（メモリー内のテキストをUTF-8と仮定し、ほとんどの関数が文字型として`char`を使う）と、UTF-16/32形式のインターフェース（`wchar_t`のサイズに応じてメモリー内のテキストをUTF-16/32と仮定し、ほとんどの関数が文字型として`wchar_t`を使う）を切り替えます。詳細は[Unicodeインターフェース](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-dom.unicode)を参照してください。

</div>

<div class="paragraph">

<span id="source-PUGIXML_CHARCONV_FLOAT"></span>`PUGIXML_CHARCONV_FLOAT`を定義すると、浮動小数点数の書式設定に`<stdio.h>`の関数ではなく[\<charconv\>](https://en.cppreference.com/cpp/header/charconv)を使います。これにはC++17とUTF-8インターフェースが必要です。この場合、変換はロケールを無視し、常に既定の`C`ロケールを使う場合と同じように動作します。

</div>

<div class="paragraph">

<span id="source-PUGIXML_COMPACT"></span>`PUGIXML_COMPACT`の定義は、文書保存の内部表現を別のものへ切り替えます。ノードや属性などのマークアップが多い文書では、メモリー効率が大幅に向上しますが、解析やアクセスは少し遅くなります。詳細は[コンパクトモード](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-dom.memory.compact)を参照してください。

</div>

<div class="paragraph">

<span id="source-PUGIXML_NO_XPATH"></span>`PUGIXML_NO_XPATH`の定義はXPathを無効にします。XPathのインターフェースと実装の両方がコンパイル対象から除かれます。このオプションは、XPathの機能が不要でコードサイズを節約したい場合のために用意されています。

</div>

<div class="paragraph">

<span id="source-PUGIXML_NO_STL"></span>`PUGIXML_NO_STL`の定義は、pugixmlでのSTLの使用を無効にします。このマクロを定義すると、STL型を扱う関数（iostream経由の読み込み・保存など）がなくなります。このオプションは、対象プラットフォームに標準準拠のSTL実装がない場合のために用意されています。

</div>

<div class="paragraph">

<span id="source-PUGIXML_NO_EXCEPTIONS"></span>`PUGIXML_NO_EXCEPTIONS`の定義は、pugixmlでの例外の使用を無効にします。このオプションは、対象プラットフォームが例外処理機能を持たない場合のために用意されています。

</div>

<div class="paragraph">

<span id="source-PUGIXML_API"></span>`PUGIXML_API`、<span id="source-PUGIXML_CLASS"></span>`PUGIXML_CLASS`、<span id="source-PUGIXML_FUNCTION"></span>`PUGIXML_FUNCTION`の定義により、pugixmlのクラスや非メンバー関数に独自の属性（declspecや呼び出し規約など）を指定できます。`PUGIXML_CLASS`や`PUGIXML_FUNCTION`が定義されていない場合は、代わりに`PUGIXML_API`の定義が使われます。たとえば、呼び出し規約を固定するには、`PUGIXML_FUNCTION`を`__fastcall`などと定義できます。別の例として、MSVCのDLLインポート・エクスポート属性があります（[独立した共有ライブラリとしてビルドする方法](#source-install.building.shared)を参照）。

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
<td class="content">この例では、<code>PUGIXML_API</code>が複数のソースファイル間で一致していません。これは一貫性の規則の例外です。</td>
</tr>
</tbody>
</table>

</div>

<div class="paragraph">

<span id="source-PUGIXML_MEMORY_PAGE_SIZE"></span>`PUGIXML_MEMORY_PAGE_SIZE`、<span id="source-PUGIXML_MEMORY_OUTPUT_STACK"></span>`PUGIXML_MEMORY_OUTPUT_STACK`、<span id="source-PUGIXML_MEMORY_XPATH_PAGE_SIZE"></span>`PUGIXML_MEMORY_XPATH_PAGE_SIZE`は、特定の重要なサイズを調整し、アプリケーション固有の使用パターンに合わせてメモリー使用量を最適化するために使えます。詳細は[メモリー消費の調整](/docs/pugixml/v1-16/ja/02-manual/03-document-object-model/#source-dom.memory.tuning)を参照してください。

</div>

<div class="paragraph">

<span id="source-PUGIXML_HAS_LONG_LONG"></span>`PUGIXML_HAS_LONG_LONG`の定義は、pugixmlでの`long long`型のサポートを有効にします。この定義は、プラットフォームが`long long`に対応していると分かっている場合（C++11に対応している場合や、既知のコンパイラーの比較的新しい版を使う場合など）には自動で有効になります。実際には`long long`に対応しているのにpugixmlがそれを認識しない場合は、手動で定義を有効にできます。

</div>

<div class="paragraph">

<span id="source-PUGIXML_HAS_STRING_VIEW"></span>`PUGIXML_HAS_STRING_VIEW`の定義は、`std::string_view`引数を取る関数のオーバーロードを有効にします。C++17以降を対象にビルドすると、この定義は自動で有効になります。実際には`std::string_view`に対応しているのにpugixmlがそれを認識しない場合は、手動で定義を有効にできます。

</div>

</div>

</div>

<div class="sect2">

<span id="source-install.portability"></span>

### <a href="#source-install.portability" class="anchor"></a><a href="#source-install.portability" class="link">2.3. 移植性</a>

<div class="paragraph">

pugixmlは標準準拠のC++で書かれており、必要な箇所ではコンパイラー固有の回避策を使っています。C++98以降のどのC++標準でもコンパイルできます。新しい標準では追加機能が自動で有効になります。C++11ではムーブ意味論と範囲for文、C++17では`std::string_view`のオーバーロードが有効になります。各版は、コードカバレッジが99%を超える単体テストスイートで検査されています。

</div>

<div class="paragraph">

pugixmlはさまざまなデスクトッププラットフォーム（Microsoft Windows、Linux、FreeBSD、Apple MacOSX、Sun Solarisなど）、ゲーム機（Microsoft Xbox 360、Microsoft Xbox One、Nintendo Wii、Sony Playstation Portable、Sony Playstation 3など）、モバイルプラットフォーム（Android、iOS、BlackBerry、Samsung bada、Microsoft Windows CEなど）で動作します。

</div>

<div class="paragraph">

pugixmlは、x86/x86-64、PowerPC、ARM、MIPS、SPARCなどのさまざまなアーキテクチャに対応しています。一般に、アーキテクチャ固有のコードを使わず、非アラインメモリーアクセスなどの機能にも依存していないため、どのアーキテクチャでも動作するはずです。

</div>

<div class="paragraph">

pugixmlはどのC++コンパイラーでもコンパイルできます。Microsoft Visual C++の6.0から2026までのすべての版、GCCの3.4から16まで、Clangの3.2から21までに加え、Borland C++、Digital Mars C++、Intel C++、Metrowerks CodeWarrior、PathScaleなど、さまざまなコンパイラーで検査されています。コードは、警告レベルをかなり高くしてもコンパイル警告が出ないように書かれています。

</div>

<div class="paragraph">

一部のプラットフォームでは、C++のサポートがごく限られている場合があります。問題なくコンパイルするには、`PUGIXML_NO_STL`や`PUGIXML_NO_EXCEPTIONS`を使う必要がある場合もあります。これは主に、古いゲーム機や組み込みシステムに当てはまります。

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
