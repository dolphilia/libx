---
title: "onqtam/awesome-cmake"
description: "onqtam/awesome-cmake の正規スナップショット"
licenseSource: "github-onqtam-awesome-cmake-readme-md"
---

<a id="awesome-cmake"></a>
# Awesome CMake [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://rawgit.com/onqtam/awesome-cmake/master/cmake-logo.svg" align="right" width="100">](https://cmake.org/)

> 優れた [CMake](https://cmake.org/) スクリプト、モジュール、サンプルなどを厳選したリストです。

貢献を歓迎します。最初に [CONTRIBUTING.md](https://github.com/onqtam/awesome-cmake/blob/40dfb5e378c52cba5710e8041a70c7bca91d883e/CONTRIBUTING.md) を確認してください。

別ファイルの [`NonModernCMake.md`](https://github.com/onqtam/awesome-cmake/blob/40dfb5e378c52cba5710e8041a70c7bca91d883e/NonModernCMake.md) にも参考になるリンクがありますが、`target_*` ベースの依存関係管理を使わないなど、現代的ではない旧来の手法を扱っています。詳細は [`#16`](https://github.com/onqtam/awesome-cmake/issues/16) と [`#42`](https://github.com/onqtam/awesome-cmake/pull/42) を参照してください。

<a id="contents"></a>
## 目次

- [コミュニティ](#community)
- [資料](#resources)
- [パッケージ管理／ビルドシステム](#package-management--build-systems)
- [モジュール](#modules)
- [ユーティリティスクリプト](#utility-scripts)
- [ツールチェーン](#toolchains)
- [サンプル／テンプレート](#examples--templates)
- [その他](#other)

<a id="community"></a>
## コミュニティ

* [```#cmake``` on Freenode](http://webchat.freenode.net/?channels=cmake)
* [```/r/cmake``` on Reddit](https://www.reddit.com/r/cmake/)
* [```/r/cpp``` on Reddit](https://www.reddit.com/r/cpp/)
* [Official Discourse Forum](https://discourse.cmake.org/)
* [Stack Overflow](http://stackoverflow.com/questions/tagged/cmake)

<a id="resources"></a>
## 資料

* [Latest Documentation](https://cmake.org/cmake/help/latest/)
* [FAQ](https://gitlab.kitware.com/cmake/community/-/wikis/FAQ)
* [Wiki](https://gitlab.kitware.com/cmake/community/-/wikis/home)
* [Webinars](https://cmake.org/webinars/)
* [Web Book](https://github.com/ruslo/CGold) - CGold: CMakeへのヒッチハイカーの [Guide](https://cgold.readthedocs.io)。[```[BSD2]```][BSD-2-Clause]
* [Modern CMake](https://github.com/toeb/moderncmake) - 現代的なCMake **PDF** およびサンプル。[cmakepp](https://github.com/toeb/cmakepp)の創造者による。[```[MIT]```][MIT]
* [Tutorial](https://www.siliceum.com/en/blog/post/cmake_01_cmake-basics) - 現代的なCMakeチュートリアル第1部：CMakeの基礎
* [Article](http://foonathan.net/blog/2016/03/03/cmake-install.html) - CMakeのinstallおよびfind_packageを簡単にサポートします。
* [Article](http://foonathan.net/blog/2016/07/07/cmake-dependency-handling.html) - CMakeとGitでC++の依存関係管理が簡単です。
* [Article](https://steveire.wordpress.com/2016/08/09/opt-in-header-only-libraries-with-cmake/) - CMakeで利用可能にするヘッダーライブラリ
* [Article](https://rix0r.nl/blog/2015/08/13/cmake-guide/) - 現代のCMakeに関する完全ガイド
* [Article](https://web.archive.org/web/20190116071957/http://voices.canonical.com/jussi.pakkanen/2013/03/26/a-list-of-common-cmake-antipatterns/) - よくあるCMakeの悪パターンのリスト（2013年ですがまだ関連性があります）
* [Article](http://preshing.com/20170511/how-to-build-a-cmake-based-project/) - CMakeベースのプロジェクトを構築する方法
* [Article](http://preshing.com/20170522/learn-cmakes-scripting-language-in-15-minutes/) - 15分でCMakeのスクリプト言語を学ぶ
* [Article](http://aosabook.org/en/cmake.html) - CMakeのアーキテクチャ
* [Lecture](https://www.youtube.com/watch?v=bsXLMQ6WgIk) - 効果的なCMake - ダニエル・ペフィル、C++Now 2017で
* [Article](https://devblogs.nvidia.com/parallelforall/building-cuda-applications-cmake/) - CMakeでクロスプラットフォームCUDAアプリケーションを構築する
* [Tutorial](https://github.com/Wigner-GPU-Lab/Teaching/tree/master/CMake) - CMakeを理解するためのステップバイステップガイド
* [Article + Lecture](https://steveire.wordpress.com/2017/11/05/embracing-modern-cmake/) - 現代のCMakeを採用する - ステファン・ケリーによる。
* [Lecture](https://www.youtube.com/watch?v=eC9-iRN2b04) - モジュール設計向け現代的なCMake - マティュー・ロペルト、CppCon 2017で
* [Article](https://pabloariasal.github.io/2018/02/19/its-time-to-do-cmake-right/) - CMakeを正しく使う時期到了（CMakeについての最も良い記事の一つ）
* Articles - A series on CMake - by Martin Hořeňovský
    * [Basic CMake usage](https://codingnest.com/basic-cmake/) - .
    * [Basic CMake, part 2: libraries](https://codingnest.com/basic-cmake-part-2/) - .
* [Lecture](https://www.youtube.com/watch?v=jt3meXdP-QI) - CMakeの導入 - Florent Castelli、C++ Sweden 2018で
* [Article](http://bastian.rieck.me/blog/posts/2018/cmake_tips/) - いくつかの良いかつ正確なCMakeのヒント。
* [Article](http://unclejimbo.github.io/2018/06/08/Modern-CMake-for-Library-Developers/) - ライブラリ開発者向けの現代的なCMake
* [Article](https://gist.github.com/mbinna/c61dbb39bca0e4fb7d1f73b0d66a4fd1) - 効果的な現代CMake：多くの良い慣行をまとめた素晴らしい解説 - マヌエル・ビンナが執筆
* [Book](https://crascit.com/professional-cmake/) - プロフェッショナルなCMake：実用的なガイド（有料）
* [Book](https://leanpub.com/effective-cmake) - 効果的なCMake：より良いCMakeを書くための実用的アドバイス（まだ完全には書かれていない）
* [Web Book](https://cliutils.gitlab.io/modern-cmake/) - 現代CMakeの導入
* [YouTube Series](https://vector-of-bool.github.io/2018/08/12/cmake-good.html) - CMakeの良い使い方。[```[CC0-1.0]```][CC0-1.0]
* [Lecture](https://www.youtube.com/watch?v=y7ndUhdQuU8) - More Modern CMake ([slides & examples](https://github.com/Bagira80/More-Modern-CMake))- デニズ・バハディルによる、C++ 2018年Meetingでの発表
* [Lecture](https://www.youtube.com/watch?v=y9kSr5enrSk) - Oh No! More Modern CMake ([slides](https://github.com/Bagira80/More-Modern-CMake/raw/master/OhNoMoreModernCMake.pdf))- デニズ・バハディルによる、C++ 2019年Meetingでの発表
* [Article](https://cristianadam.eu/20190223/modifying-the-default-cmake-build-types/) - デフォルトのCMakeビルドタイプ/フラグ、ツールチェーンおよびパッチの変更 - オーマイ！ - クリスチャン・アダムが執筆
* [Tutorial](https://github.com/schweitzer/modern-cmake-tutorial) - 現代CMakeを適切に使用するためのチュートリアルと例

<a id="package-management--build-systems"></a>
## パッケージ管理／ビルドシステム

* [hunter](https://github.com/ruslo/hunter) - C++用のクロスプラットフォームパッケージマネージャ（CMake ExternalProjectに基づく）. [```[BSD2]```][BSD-2-Clause]
* [cget](https://github.com/pfultz2/cget) - CMakeによるパッケージ取得。これによりCMakeパッケージをダウンロードおよびインストールできる。[```[BOOST]```][BOOST]
* [cppan](https://cppan.org/) - C++アーカイブネットワーク - CMakeをベースにしたC++パッケージマネージャ（C++14で実装）。[```[APACHE2]```][APACHE2]
* [cpm](https://github.com/iauns/cpm) - CMakeおよびGitをベースにしたC++パッケージマネージャ。[```[MIT]```][MIT]
* [conan](https://github.com/conan-io/conan) - Conan C++パッケージマネージャ、Pythonで実装され、CMakeの統合バックエンドを備えている。[```[MIT]```][MIT]
* [fips](https://github.com/floooh/fips) - 分散型、マルチプラットフォームC/C++プロジェクト向けの高レベルビルドシステム／依存関係管理。[```[MIT]```][MIT]
* [Ninja](https://github.com/ninja-build/ninja) - 他のビルドシステムとは異なる2つの主な特徴を持つビルドシステム：入力ファイルはより上位のビルドシステム（例：CMake）によって生成され、ビルドが可能な限り高速に実行されるように設計されている。[```[APACHE2]```][APACHE2]
* [vcpkg](https://github.com/Microsoft/vcpkg) - C++オープンソースライブラリの取得とビルドを行うツール。内部でCMakeをビルドスクリプト言語として使用。[```[MIT]```][MIT]
* [pmm](https://github.com/AnotherFoxGuy/pmm) - PMMはCMakeのモジュールで、...パッケージマネージャを管理する。[```[MIT]```][MIT]
* [cpm](https://github.com/TheLartians/CPM) - 設定不要のCMake + git依存関係マネージャ。[```[MIT]```][MIT]
* [FetchDependency](https://github.com/jpetrie/fetch-dependency) - 構成時における依存関係の取得、構成およびビルド。[```[MIT]```][MIT]

<a id="modules"></a>
## モジュール

* [cmake-modules](https://github.com/rpavlik/cmake-modules) - [Ryan Pavlik](https://github.com/rpavlik)のCMakeモジュールコレクション。findモジュールが多数存在し、特に仮想現実や物理シミュレーション向けのものが多く、一部はユーティリティモジュールであり、CMake自体のパッチや補完も含まれる。[```[BOOST]```][BOOST]
* [cmake-modules](https://github.com/bilke/cmake-modules) - これは追加のCMakeモジュールのコレクションである。ほとんどがリーン・パヴリックによるものである。[```[BOOST]```][BOOST]
* [CMake](https://github.com/Eyescale/CMake) - [Eyescale](https://github.com/Eyescale)の共通CMakeモジュール。[```[BSD3]```][BSD-3-Clause]
* [cmake-modules](https://github.com/jedbrown/cmake-modules) - いくつかの科学ライブラリ向けのCMakeモジュール。[```[BSD2]```][BSD-2-Clause]
* [cgcmake](https://github.com/chadmv/cgcmake) - コンピュータグラフィックス関連の一般的なアプリケーション向けのCMakeモジュール。[```[MIT]```][MIT]
* [FindMathematica](https://github.com/sakra/FindMathematica) - Mathematica向けのCMakeモジュール。[```[MIT]```][MIT]
* [extra-cmake-modules](https://github.com/KDE/extra-cmake-modules) - [KDE](https://github.com/KDE)のCMake用の追加モジュールおよびスクリプト。[```[BSD3]```][BSD-3-Clause]
* [FindICU.cmake](https://github.com/julp/FindICU.cmake) - 国際文字コード（ICU）ライブラリを検出するためのCMakeモジュール。[```[BSD2]```][BSD-2-Clause]
* [FindTBB](https://github.com/justusc/FindTBB) - Intel Threading Building Blocks向けのCMake検出モジュール。[```[MIT]```][MIT]
* [FindWiX](https://github.com/apriorit/FindWiX) - [Windows Installer](https://en.wikipedia.org/wiki/Windows_Installer)パッケージを[WiX toolset](http://wixtoolset.org)で構築するためのCMakeモジュール。[```[BSD3]```][BSD-3-Clause]
* [FindIDL](https://github.com/apriorit/FindIDL) - [IDL](https://docs.microsoft.com/en-us/windows/win32/midl/interface-definition-idl-file)ファイルをMIDLで構築し、[Tlbimp](https://docs.microsoft.com/en-us/dotnet/framework/tools/tlbimp-exe-type-library-importer)を使ってCLR DLLを生成するためのCMakeモジュール。[```[MIT]```][MIT]
* [cmake-modules](https://github.com/hanjianwei/cmake-modules) - [hanjianwei](https://github.com/hanjianwei)のCMakeモジュールコレクション。[```[MIT]```][MIT]
* [YCM](https://github.com/robotology/ycm) - [Yet Another Robot Platform](https://github.com/robotology/yarp)および仲間向けの追加CMakeモジュール。[```[BSD3]```][BSD-3-Clause]
* [CMakeCM](https://github.com/AnotherFoxGuy/CMakeCM) - CMakeコミュニティモジュール。```[NO LICENSE]```
* [Metabench](https://github.com/ldionne/metabench) - コンパイル時マイクロベンチマーク用のCMakeモジュール。[```[BOOST]```][BOOST]
* [Oranges](https://github.com/benthevining/Oranges) - [Ben Vining](https://github.com/benthevining)のCMakeモジュールおよびツールチェーンのライブラリ。[```[GPL]```][GPL]
* [better.cmake](https://gitlab.com/copr-projekte/better-cmake) - 現代的なCMake拡張のコレクション。[```[APACHE2]```][APACHE-2.0]

<a id="utility-scripts"></a>
## ユーティリティスクリプト

These provide a wide range of functionality - from dealing with compiler flags to using tools. Some also contain modules.

* [cotire](https://github.com/sakra/cotire) - Cotire（コンパイル時減速）は、CMakeベースのビルドシステムのビルドプロセスを高速化するために、C言語およびC++向けのプリコンパイルヘッダーおよびユニティビルドを完全に自動化するCMakeモジュールである。[```[MIT]```][MIT]
* [ucm](https://github.com/onqtam/ucm) - コンパイラ／リンクフラグの管理、ソースファイルの収集、プリコンパイルヘッダー、ユニティビルドなどに関するもの。[```[MIT]```][MIT]
* [cmakepp](https://github.com/toeb/cmakepp) - CMakeビルドシステムの強化パッケージ。[```[MIT]```][MIT]
* [sugar](https://github.com/ruslo/sugar) - CMake ツールと例：ソースファイルの収集、警告の抑制など。[```[BSD2]```][BSD-2-Clause]
* [DownloadProject](https://github.com/Crascit/DownloadProject) - CMake モジュールで、構成時に行う外部プロジェクトのソースコードのダウンロード。[```[MIT]```][MIT]
* [buildem](https://github.com/janelia-flyem/buildem) - ExternalProject を活用してビルドを簡略化する、モジュラリティを持つ CMake ベースのシステム。[```[LICENSE]```](https://github.com/janelia-flyem/buildem/blob/master/LICENSE.txt)
* [coveralls-cmake](https://github.com/JoakimSoderberg/coveralls-cmake) - Coveralls JSON フォーマットのカバレッジ生成およびアップロードツール（CMake用）。[```[MIT]```][MIT]
* [compatibility](https://github.com/foonathan/compatibility) - cmake-compile-features の改善版。[```[LICENSE]```](https://github.com/foonathan/compatibility/blob/master/LICENSE)
* [cmake-modules](https://github.com/Tronic/cmake-modules) - LibFindMacros の開発リポジトリおよびその他の面白い CMake ツール。[```[LICENSE]```](https://github.com/Tronic/cmake-modules/blob/master/LibFindMacros.cmake#L2)
* [GreatCMakeCookOff](https://github.com/UCL/GreatCMakeCookOff) - 便利で、それほど便利でない CMake のレシピを収録したリポジトリ。[```[MIT]```][MIT]
* [cppcheck-target-cmake](https://github.com/polysquare/cppcheck-target-cmake) - CMake 用のターゲットごとの CPPCheck。[```[MIT]```][MIT]
* [clang-tidy-target-cmake](https://github.com/polysquare/clang-tidy-target-cmake) - CMake を使ってターゲットに clang-tidy のチェックを追加。[```[MIT]```][MIT]
* [cmake-unit](https://github.com/polysquare/cmake-unit) - CMake 用のユニットテストフレームワーク。[```[MIT]```][MIT]
* [cmake-header-language](https://github.com/polysquare/cmake-header-language) - CMake マクロでヘッダーファイルの言語を判定。[```[MIT]```][MIT]
* [tooling-cmake-util](https://github.com/polysquare/tooling-cmake-util) - すべての polysquare CMake ツールに共通するユーティリティおよび共通ライブラリ。[```[MIT]```][MIT]
* [iwyu-target-cmake](https://github.com/polysquare/iwyu-target-cmake) - include-what-you-use との CMake インテグレーション。[```[MIT]```][MIT]
* [sanitizers-cmake](https://github.com/arsenm/sanitizers-cmake) - バイナリターゲット向けのサニタイザーを有効にする CMake モジュール。[```[MIT]```][MIT]
* [cmake-precompiled-header](https://github.com/larsch/cmake-precompiled-header) - Visual Studio および GCC 用のプリコンパイルヘッダーマクロ。[```[LICENSE]```](https://github.com/larsch/cmake-precompiled-header/blob/master/PrecompiledHeader.cmake#L31)
* [CMakePCHCompiler](https://github.com/nanoant/CMakePCHCompiler) - CMake 用のプリコンパイルヘッダー（カスタムコンパイラ拡張による）— 再利用機能付き！[```[MIT]```][MIT]
* [CMake-codecov](https://github.com/RWTH-ELP/CMake-codecov) - コードカバレッジを有効にし、CMake ターゲットでカバレッジレポートを生成。[```[GPL]```][GPL]
* [cmake-get](https://github.com/pfultz2/cmake-get) - 設定モードまたはスクリプトモードで依存関係を取得。```[NO LICENSE]```
* [ixm](https://github.com/slurps-mad-rips/ixm) - Modern Flexible CMake を書く際に CMake をより簡単にする。[```[MIT]```][MIT]
* [CMakeCooking](https://github.com/hakuch/CMakeCooking) - 外部依存関係を持つ CMake プロジェクト向けの柔軟な開発環境。[```[APACHE2]```][APACHE2]
* [fetch_paths.cmake](https://github.com/XiaoLey/fetch_paths.cmake) - 軽量なユーティリティで、CMakeにおけるファイル／ディレクトリパスの取得を簡略化。動的検索と柔軟な出力フォーマットをサポート。[```[MIT]```](https://github.com/XiaoLey/fetch_paths.cmake/blob/main/LICENSE)

<a id="toolchains"></a>
## ツールチェーン

* [dockcross](https://github.com/dockcross/dockcross) - Dockerイメージ内でクロスコンパイルツールチェーンを構築。[```[MIT]```][MIT]
* [android-cmake](https://github.com/taka-no-me/android-cmake) - Android NDK用のCMakeツールチェーンファイルおよびその他のスクリプト。[```[BSD3]```][BSD-3-Clause]
* [ios-cmake](https://github.com/cristeab/ios-cmake) - iOS開発用のCMakeツールチェーンファイルおよび例。[```[BSD3]```][BSD-3-Clause]
* [qt-android-cmake](https://github.com/LaurentGomila/qt-android-cmake) - QtベースのアプリケーションをAndroid上でQtCreatorなしでビルド・デプロイするためのもの。[```[LICENSE]```](https://github.com/LaurentGomila/qt-android-cmake/blob/master/license.txt)
* [mingw-w64-cmake](https://github.com/lachs0r/mingw-w64-cmake) - CMakeベースのMinGW-w64クロスツールチェーン（mpvのWindowsバイナリをビルドするため）。[```[ISC]```][ISC]
* [cmake-avr](https://github.com/mkleemann/cmake-avr) - AVR用のCMakeツールチェーン。[```[LICENSE]```](https://github.com/mkleemann/cmake-avr/blob/master/LICENSE)
* [arduino-cmake](https://github.com/francoiscampbell/arduino-cmake) - Arduinoプラットフォーム用のCMakeプロジェクト設定。[```[MPL]```][MPL]
* [polly](https://github.com/ruslo/polly) - クロスプラットフォームビルドおよびCIテスト用のCMakeツールチェーンファイルおよびスクリプトのコレクション。[```[BSD2]```][BSD-2-Clause]
* [toolchains](https://github.com/mosra/toolchains) - CMakeによるクロスコンパイルに使用。主にArchLinuxで使用されるように設計されている。```[NO LICENSE]```
* [cmake](https://github.com/staticlibs/cmake/tree/master/toolchains) - 静的リンクに主に使用されるCMakeツールチェーンファイルのコレクション。[```[APACHE2]```][APACHE2]
* [Arduino-CMake-Toolchain](https://github.com/a9183756-gh/Arduino-CMake-Toolchain) - すべての公式および3rdパーティArduinoプラットフォーム向けのCMakeツールチェーン。[```[MIT]```][MIT]

<a id="examples--templates"></a>
## サンプル／テンプレート

* [cmake-init](https://github.com/cginternals/cmake-init) - 信頼性の高い、クロスプラットフォームC++プロジェクトの設定用のCMakeテンプレート。[```[LICENSE]```](https://github.com/cginternals/cmake-init/blob/master/LICENSE)
* [android-cmake](https://github.com/forexample/android-cmake) - [ruslo/hunter](https://github.com/ruslo/hunter)パッケージマネージャーをAndroidアプリケーションに適用する例。[```[BSD2]```][BSD-2-Clause]
* [hunter-simple](https://github.com/forexample/hunter-simple) - [ruslo/hunter](https://github.com/ruslo/hunter)パッケージマネージャーを使って依存関係をダウンロード／インストールする例。[```[BSD2]```][BSD-2-Clause]
* [package-example](https://github.com/forexample/package-example) - find_packageのコンフィグモード（[this](http://stackoverflow.com/questions/20746936/cmake-of-what-use-is-find-package-if-you-need-to-specify-cmake-module-path-an)Stack Overflowの質問に対する例）。```[NO LICENSE]```
* [minimal_cmake_example](https://github.com/krux02/minimal_cmake_example) - 最小限のCMake例で、依存関係とパッケージングをカバー。[```[CC0-1.0]```][CC0-1.0]
* [cmake-example](https://github.com/bast/cmake-example) - さまざまなCMake機能を示す例プロジェクト。[```[BSD3]```][BSD-3-Clause]
* [cmake-examples](https://github.com/ttroy50/cmake-examples) - チュートリアル形式の有用なCMake例。[```[MIT]```][MIT]
* [mini-cmake-qt](https://github.com/euler0/mini-cmake-qt) - Qt 5プロジェクト向けの最小限のCMakeテンプレート。[```[LICENSE]```](https://github.com/euler0/mini-cmake-qt/blob/master/LICENSE)
* [BASIS](https://github.com/cmake-basis/BASIS) - CMake [BASIS](https://cmake-basis.github.io) により、共有可能なソフトウェアやライブラリを簡単に作成し、互いに協調して動作するようにできます。[```[BSD2]```][BSD-2-Clause]
* [cpp-boilerplate](https://github.com/Lectem/cpp-boilerplate) - 現代の CMake および CI に対する参考となるテンプレート。[```[MIT]```][MIT]
* [how-to-export-cpp-library](https://github.com/robotology/how-to-export-cpp-library) - 共有、静的、ヘッダーのみの C++ ライブラリをエクスポートできる OS に依存しないテンプレートプロジェクト。ctest および CI をサポートし、シンプルな CMake で記述されており、1行1行のチュートリアルコメントが含まれています。[```[MIT]```][MIT]
* [modern-cmake-sample](https://github.com/pabloariasal/modern-cmake-sample) - CMake をターゲットを使って使うことで、ベストプラクティスと適切な使い方を学ぶ。```[NO LICENSE]```
* [CMakeInstallExample](https://github.com/DeveloperPaul123/CMakeInstallExample) - C++ プロジェクト（Windows）における CMake のインストール例。```[NO LICENSE]```
* [cpp14-project-template](https://github.com/arnavb/cpp14-project-template) - C++14 テンプレートで CI、テスト、コードカバレッジ、ドキュメント、静的解析の統合。[```[CC0-1.0]```][CC0-1.0]
* [cmake_templates](https://github.com/acdemiralp/cmake_templates) - C++ ライブラリおよび実行ファイル（conan を含む）を作成するためのテンプレート。```[NO LICENSE]```
* [cmake_snippets](https://github.com/adishavit/cmake_snippets) - 短いコピー可能な CMake スニペット。[```[BSD3]```][BSD-3-Clause]
* [cmake-cookbook](https://github.com/dev-cafe/cmake-cookbook) - 非常に多くのレシピを含む CMake のレシピブック。[```[MIT]```][MIT]
* [cpp-template](https://github.com/joshpeterson/cpp-template) - CMake と Catch を使用する C++ テンプレートリポジトリ。```[NO LICENSE]```
* [pitchfork](https://github.com/vector-of-bool/pitchfork) - ネイティブ C および C++ プロジェクトのための規約の集合。[```[MIT]```][MIT]
* [cmake-examples](https://github.com/pr0g/cmake-examples) - 可能な限りシンプルで、現代的な CMake プロジェクトのコレクション。[```[MIT]```][MIT]
* [cpp-project](https://github.com/bsamseth/cpp-project) - C++ プロジェクトのボイラープレート - テスト、CI、カバレッジ、ドキュメント。[```[UNLICENSE]```][UNLICENSE]
* [ModernCppStarter](https://github.com/TheLartians/ModernCppStarter) - 現代の C++ プロジェクト向けの CMake、CI、コードカバレッジ、clang-format、再現可能な依存関係管理、[doctest](https://github.com/onqtam/doctest) を使用したテストなど、多くの機能を備えた即時使用可能な CMake テンプレート。[```[UNLICENSE]```][UNLICENSE]
* [SeeMake](https://github.com/MhmRhm/SeeMake) - テスト、静的および動的チェック、カバレッジレポートなど、多くの機能を備えた即時使用可能な CMake テンプレート。[```[MIT]```][MIT]

<a id="other"></a>
## その他

* [autocmake](https://github.com/coderefinery/autocmake) - autocmake.yml ファイル [Autocmake](http://autocmake.readthedocs.io/en/latest/) を使って、CMake のビルドブロックを CMake プロジェクトに組み込み、CMakeLists.txt およびセットアップスクリプトを生成。セットアップスクリプトは CMakeLists.txt のフロントエンドとして機能します。[```[BSD3]```][BSD-3-Clause]
* [UseLATEX](https://gitlab.kitware.com/kmorel/UseLATEX) - LaTeX ファイルのビルドを簡略化するための CMake マクロのコレクション。[```[BSD3]```][BSD-3-Clause]
* [scikit-build](https://github.com/scikit-build/scikit-build) - CPython C拡張のための改善されたビルドシステムジェネレーター。[```[MIT]```][MIT]
* [node-cmake](https://github.com/cjntaylor/node-cmake) - node.js ネイティブモジュール向けの CMake ベースのビルドシステム。[```[ISC]```][ISC]
* [cmake-font-lock](https://github.com/Lindydancer/cmake-font-lock) - Emacs 内の CMake スクリプトにおける高度な構文色付きサポート。[```[GPL]```][GPL]
* [autovala](https://github.com/rastersoft/autovala) - Valaプロジェクト用にCMake設定ファイルを自動生成するプログラム。[```[GPL]```][GPL]
* [catkin](https://github.com/ros/catkin) - ロボット操作システム（ROS）におけるすべてのパッケージを構築するために使用されるCMakeベースのビルドシステム。[```[BSD3]```][BSD-3-Clause]
* [suitesparse-metis-for-windows](https://github.com/jlblancoc/suitesparse-metis-for-windows) - SuiteSparse+METISの簡単な使用に必要なCMakeスクリプト。[```[BSD3]```][BSD-3-Clause]
* [osg-3rdparty-cmake](https://github.com/bjornblissing/osg-3rdparty-cmake) - OpenSceneGraphの第三者ライブラリを構築するためのCMakeスクリプト。```[MIXED LICENSE]```
* [cmake-d](https://github.com/dcarp/cmake-d) - D2用のCMake。[```[MIT]```][MIT]
* [cmakeprojectmanager2](https://github.com/h4tr3d/cmakeprojectmanager2) - Qt Creator用の強化されたCMakeプロジェクトマネージャープラグイン。```[NO LICENSE]```
* [cmake-lint](https://github.com/richq/cmake-lint) - CMakeファイルにおけるコーディングスタイルの問題をチェック。cmakelintはPythonを必要とする。[```[APACHE2]```][APACHE2]
* [git-cmake-format](https://github.com/kbenzie/git-cmake-format) - gitリポジトリにホストされているCMakeプロジェクトにclang-formatを統合。[```[LICENSE]```](https://github.com/kbenzie/git-cmake-format/blob/master/license.txt)
* [cmakefmt](https://github.com/cmakefmt/cmakefmt) - Rustで書かれた高速なCMakeフォーマッター。保存時にフォーマットを実行するエディタサポートおよびGitHubの本家アクションを備えている。[```[MIT]```][MIT]
* [configure-cmake](https://github.com/nemequ/configure-cmake) - configure-cmakeはCMakeベースプロジェクト用のautotoolsスタイルの設定スクリプト。[```[CC0-1.0]```][CC0-1.0]
* [cmake-ast](https://github.com/polysquare/cmake-ast) - CMakeファイルをASTに簡略化するPythonモジュール。[```[MIT]```][MIT]
* [cmake-checks-cache](https://github.com/cristianadam/cmake-checks-cache) - CMakeチェックキャッシュのヘルプモジュール。[```[MIT]```][MIT]
* [cmake_check](https://github.com/DaelDe/cmake_check) - CMake言語に対する静的解析（リント）ツール（現代的なCMakeルールを強制するなど）。[```[MIT]```][MIT]
* [cmake-language-server](https://github.com/regen100/cmake-language-server) - CMake言語サーバープロトコルの実装。[```[MIT]```][MIT]
* [cmake-xray](https://github.com/pt9912/cmake-xray) - コンパイルデータベースおよびCMakeファイルAPIデータからCMakeベースのC++ビルドを分析・診断。[```[MIT]```][MIT]
* [cmake-maven-plugin](https://github.com/cmake-maven-project/cmake-maven-project) - MavenビルドにおけるCMake統合。[```[APACHE2]```][APACHE2]
* [version-from-git](https://github.com/MhmRhm/version-from-git) - バイナリにgit情報を埋め込む。[```[MIT]```][MIT]
* [SoCMake](https://github.com/HEP-SoC/SoCMake) - ハードウェア（ASIC、FPGA）およびシステムオンチップのビルド自動化に用いるCMakeベースのビルドシステム。[```[LGPL]```][LGPL]

<a id="license"></a>
## ライセンス

本リストは [**```Creative Commons Attribution 4.0 International```**](http://creativecommons.org/licenses/by/4.0/) License ```(CC BY 4.0)``` の下で公開されています。

[ISC]: https://opensource.org/licenses/ISC
[GPL]: https://www.gnu.org/licenses/gpl-3.0.html
[GPL2]: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
[LGPL]: https://www.gnu.org/licenses/lgpl-3.0.en.html
[MIT]: https://opensource.org/licenses/MIT
[BOOST]: http://www.boost.org/LICENSE_1_0.txt
[BSD-2-Clause]: https://opensource.org/licenses/BSD-2-Clause
[BSD-3-Clause]: https://opensource.org/licenses/BSD-3-Clause
[APACHE2]: http://www.apache.org/licenses/LICENSE-2.0
[CC0-1.0]: https://creativecommons.org/publicdomain/zero/1.0/
[MPL]: https://www.mozilla.org/en-US/MPL/2.0/
[UNLICENSE]: https://unlicense.org/
