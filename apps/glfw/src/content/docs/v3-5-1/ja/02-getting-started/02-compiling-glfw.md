---
title: "GLFWをコンパイルする"
description: "GLFWライブラリをソースからコンパイルする"
---

<a id="compile_guide"></a>

# GLFWをコンパイルする

このページでは、GLFW ライブラリ自体のコンパイルについて説明します。GLFW を使うアプリケーションのビルド方法については、[build_guide](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#build_guide)を参照してください。

GLFW は C99 の一部の機能を使うため、Visual Studio 2012 以前はサポートしていません。


<a id="compile_cmake"></a>

## CMakeを使う

GLFW の扱い方は、CMake を使うほかの多くのライブラリと同様です。そのため、このガイドでは主に標準的な構成、生成、コンパイルの手順を説明します。ほかのプロジェクトですでにこの手順に慣れている場合は、GLFW 固有の情報を扱う [compile_deps](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#compile_deps) と [compile_options](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#compile_options) の節を重点的に読むとよいでしょう。

GLFW は [CMake](https://cmake.org/) を使って、選択した開発環境向けのプロジェクトファイルまたは makefile を生成します。GLFW をコンパイルするには、まず CMake でこれらのファイルを生成し、それを使って GLFW ライブラリをコンパイルします。

Windows または macOS では、公式サイトから [CMake をダウンロード](https://cmake.org/download/)できます。

Linux、FreeBSD、Cygwin などの Unix 系システムを使っている場合や、Fink、MacPorts、Homebrew などのパッケージシステムがある場合は、その CMake パッケージをインストールできます。

CMake は複雑なツールであり、このガイドでは GLFW の設定とコンパイルについて、利用可能な方法の一部だけを示します。CMake プロジェクトは、GLFW 固有ではないこのガイドの内容をすべて網羅した、はるかに詳しい [CMake ユーザーガイド][cmake-guide]を提供しています。このガイドとあわせて参照すると役立つでしょう。

[cmake-guide]: https://cmake.org/cmake/help/latest/guide/user-interaction/


<a id="compile_deps"></a>

### 依存関係をインストールする

Visual Studio、Xcode、MinGW-w64 の C/C++ 開発環境には、GLFW のコンパイルに必要な依存関係がすべて含まれています。一方、Linux や FreeBSD などの Unix 系システムでは、追加のパッケージがいくつか必要です。


<a id="compile_deps_wayland"></a>

#### WaylandとX11の依存関係

Linux およびその他の Unix 系システム（macOS を除く）では、デフォルトで Wayland と X11 の両バックエンドが有効です。一方または両方を無効にするには、次の手順でビルドファイルを生成するときに、CMake オプション [GLFW_BUILD_WAYLAND](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#GLFW_BUILD_WAYLAND) または [GLFW_BUILD_X11](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#GLFW_BUILD_X11) を設定します。

Wayland と X11 の両方に対応する GLFW をコンパイルするには、X11、Wayland、xkbcommon の開発パッケージをインストールしておく必要があります。一部のシステムでは、ほかにもいくつかのパッケージが必要です。コンパイル済みの GLFW ライブラリを使うプログラムのビルドや実行には、ここで挙げた開発パッケージはどれも必要ありません。

Debian および Ubuntu、Linux Mint などの派生ディストリビューションでは、Wayland 向けのコンパイルに `libwayland-dev` と `libxkbcommon-dev`、X11 向けのコンパイルに `xorg-dev` メタパッケージが必要です。これらをインストールすると、その他の依存関係もすべて導入されます。

```sh
sudo apt install libwayland-dev libxkbcommon-dev xorg-dev
```

Fedora および Red Hat などの派生ディストリビューションでは、Wayland 向けのコンパイルに `wayland-devel` と `libxkbcommon-devel`、X11 向けのコンパイルに `libXcursor-devel`、`libXi-devel`、`libXinerama-devel`、`libXrandr-devel` が必要です。これらをインストールすると、その他の依存関係もすべて導入されます。

```sh
sudo dnf install wayland-devel libxkbcommon-devel libXcursor-devel libXi-devel libXinerama-devel libXrandr-devel
```

FreeBSD では、Wayland 向けのコンパイルに `wayland`、`libxkbcommon`、`evdev-proto` パッケージが必要です。X11 ヘッダーはエンドユーザー向け X11 パッケージとともにインストールされるため、X サーバーが動作しているなら、通常はヘッダーも用意されています。用意されていない場合は、X11 向けのコンパイルに `xorgproto` パッケージをインストールしてください。

```sh
pkg install wayland libxkbcommon evdev-proto xorgproto
```

Cygwin では Wayland はサポートされていませんが、X11 向けのコンパイルに `libXcursor-devel`、`libXi-devel`、`libXinerama-devel`、`libXrandr-devel`、`libXrender-devel` パッケージが必要です。これらは GUI インストーラーの Libs セクションにあり、その他の依存関係もすべて導入されます。

必要な依存関係を用意したら、[compile_generate](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#compile_generate)へ進みます。


<a id="compile_generate"></a>

### CMakeでビルドファイルを生成する

必要な依存関係をすべて用意したら、開発環境向けのプロジェクトファイルまたは makefile を生成します。この処理には、CMake に次の2つのパスを指定する必要があります。

 - GLFW ソースツリーのルートディレクトリ（その中の `src` サブディレクトリではありません）へのパス
 - 生成したビルドファイルとコンパイル済みバイナリを置くディレクトリへのパス

両者が同じ場合をインツリービルド、異なる場合をアウトオブツリービルドと呼びます。

ソースツリー内が煩雑になるのを避けられるため、アウトオブツリービルドを推奨します。また、同じソースツリーを使いながら、構成ごとに複数のビルドディレクトリを用意できます。

単一の構成をビルドする場合は、ソースツリーのルートに `build` という名前のビルドディレクトリを置くのが一般的です。


<a id="compile_generate_gui"></a>

#### CMake GUIで生成する

CMake GUI を起動し、前述したソースディレクトリとビルドディレクトリのパスを設定します。次に _Configure_、_Generate_ の順に押します。

一覧内の CMake 変数を変更する場合は、_Configure_、_Generate_ の順に押して新しい値を反映します。変数一覧は最初の構成処理の後に表示されます。

Linux および macOS 以外の Unix 系システムでは、GLFW はデフォルトで Wayland と X11 を使います。一方または両方のサポートを無効にするには、変数一覧の GLFW セクションで [GLFW_BUILD_WAYLAND](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#GLFW_BUILD_WAYLAND) や [GLFW_BUILD_X11](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#GLFW_BUILD_X11) オプションを設定し、前述の方法で新しい値を反映します。

選択した開発環境向けのプロジェクトファイルまたは makefile を生成したら、[compile_compile](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#compile_compile)へ進みます。


<a id="compile_generate_cli"></a>

#### コマンドラインのCMakeで生成する

ビルドディレクトリを作るには、ソースディレクトリとビルドディレクトリを `cmake` コマンドに渡します。相対パスと絶対パスのどちらでも指定できます。ビルドディレクトリが存在しない場合は作成されます。

```sh
cmake -S path/to/glfw -B path/to/build
```

単一の構成だけをビルドする予定なら、ビルドディレクトリを `build` と名付け、ソースツリーのルートに置くのが一般的です。

```sh
cd path/to/glfw
cmake -S . -B build
```

ほかのフラグを指定しない場合、Windows では Visual Studio のプロジェクトファイルが、その他のプラットフォームでは makefile が生成されます。`-G` フラグを使うと別のターゲットを選択できます。

```sh
cmake -S path/to/glfw -B path/to/build -G Xcode
```

Linux および macOS 以外の Unix 系システムでは、GLFW はデフォルトで Wayland と X11 を使います。一方または両方のサポートを無効にするには、CMake オプション [GLFW_BUILD_WAYLAND](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#GLFW_BUILD_WAYLAND) や [GLFW_BUILD_X11](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#GLFW_BUILD_X11) を設定します。

```sh
cmake -S path/to/glfw -B path/to/build -D GLFW_BUILD_X11=0
```

選択した開発環境向けのプロジェクトファイルまたは makefile を生成したら、[compile_compile](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#compile_compile)へ進みます。


<a id="compile_compile"></a>

### ライブラリをコンパイルする

これで、GLFW のコンパイルに必要な依存関係とプロジェクトファイルまたは makefile がすべて揃いました。ほかのプロジェクトと同じように、これらのファイルを使って実際の GLFW ライブラリをコンパイルしてください。

Visual Studio では `GLFW.sln` を開き、Build メニューを使います。Xcode では `GLFW.xcodeproj` を開き、Project メニューを使います。

Linux、macOS、その他の Unix では `make` を実行します。

```sh
cd path/to/build
make
```

MinGW-w64 では `mingw32-make` を実行します。

```sh
cd path/to/build
mingw32-make
```

CMake のビルドディレクトリは、`cmake` コマンドと `--build` フラグを使ってビルドすることもできます。

```sh
cmake --build path/to/build
```

このコマンドは、そのディレクトリの生成対象となったプラットフォーム固有のビルドツールを実行します。

GLFW ライブラリをコンパイルしたら、GLFW ライブラリをリンクしてアプリケーションをビルドできます。詳しくは [build_guide](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#build_guide)を参照してください。


<a id="compile_options"></a>

## CMakeオプション

GLFW の CMake ファイルは多くのオプションを提供しますが、サポートするすべてのプラットフォームで全オプションが利用できるわけではありません。その一部は CMake を使うプロジェクト間で事実上の標準となっているため、`GLFW_` 接頭辞がありません。

CMake の GUI 版を使っている場合、これらは一覧に表示され、GUI から変更できます。コマンドライン版の CMake を使っている場合は、`ccmake` の ncurses GUI でオプションを設定できます。Ubuntu など Debian GNU/Linux を基盤とする一部のパッケージシステムでは、このツールは別の `cmake-curses-gui` パッケージに含まれています。

GUI を使いたくない場合は、`cmake` のコマンドラインで `-D` フラグを使ってオプションを設定できます。

```sh
cmake -S path/to/glfw -B path/to/build -D BUILD_SHARED_LIBS=ON
```


<a id="compile_options_shared"></a>

### 共通のCMakeオプション

<a id="BUILD_SHARED_LIBS"></a>

__BUILD_SHARED_LIBS__ は、GLFW を静的ライブラリとしてビルドするか、DLL／共有ライブラリ／動的ライブラリとしてビルドするかを決定します。デフォルトでは無効で、静的 GLFW ライブラリが生成されます。この変数は CMake が定義するため、`GLFW_` 接頭辞がありません。GLFW が大きなプロジェクトの一部であり、GLFW だけライブラリ形式を変更したい場合は、[GLFW_LIBRARY_TYPE](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#GLFW_LIBRARY_TYPE)を参照してください。

<a id="GLFW_LIBRARY_TYPE"></a>

__GLFW_LIBRARY_TYPE__ を使うと、大きなプロジェクト内のほかのライブラリに影響を与えず、GLFW についてだけ [BUILD_SHARED_LIBS](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#BUILD_SHARED_LIBS) を上書きできます。設定する場合、このオプションの値は有効な CMake ライブラリ型でなければなりません。GLFW を静的ライブラリとしてビルドするには `STATIC`、共有ライブラリ／動的ライブラリ／DLL としてビルドするには `SHARED`、CMake オブジェクトライブラリにするには `OBJECT` を設定します。

<a id="GLFW_BUILD_EXAMPLES"></a>

__GLFW_BUILD_EXAMPLES__ は、GLFW のサンプルをライブラリと一緒にビルドするかどうかを決定します。GLFW を大きな CMake プロジェクトのサブプロジェクトとしてビルドする場合を除き、デフォルトで有効です。

<a id="GLFW_BUILD_TESTS"></a>

__GLFW_BUILD_TESTS__ は、GLFW のテストプログラムをライブラリと一緒にビルドするかどうかを決定します。GLFW を大きな CMake プロジェクトのサブプロジェクトとしてビルドする場合を除き、デフォルトで有効です。

<a id="GLFW_BUILD_DOCS"></a>

__GLFW_BUILD_DOCS__ は、GLFW のドキュメントをライブラリと一緒にビルドするかどうかを決定します。CMake の構成時に [Doxygen](https://www.doxygen.nl/) が見つかった場合、デフォルトで有効です。


<a id="compile_options_win32"></a>

### Win32固有のCMakeオプション

<a id="GLFW_BUILD_WIN32"></a>

__GLFW_BUILD_WIN32__ は、ライブラリのコンパイル時に Win32 サポートを含めるかどうかを決定します。このオプションは Windows 向けにコンパイルする場合だけ利用できます。デフォルトで有効です。

<a id="USE_MSVC_RUNTIME_LIBRARY_DLL"></a>

__USE_MSVC_RUNTIME_LIBRARY_DLL__ は、Visual C++ ランタイムライブラリの DLL 版と静的ライブラリ版のどちらを使うかを決定します。有効にすると Visual C++ ライブラリの DLL 版が使われます。デフォルトで有効です。

この GLFW 固有オプションの代わりに、標準の CMake 変数 [CMAKE_MSVC_RUNTIME_LIBRARY][] を設定することを推奨します。

[CMAKE_MSVC_RUNTIME_LIBRARY]: https://cmake.org/cmake/help/latest/variable/CMAKE_MSVC_RUNTIME_LIBRARY.html

<a id="GLFW_USE_HYBRID_HPG"></a>

__GLFW_USE_HYBRID_HPG__ は `NvOptimusEnablement` と `AmdPowerXpressRequestHighPerformance` シンボルをエクスポートするかどうかを決定します。これらは Nvidia Optimus および AMD PowerXpress システムで高性能 GPU の使用を強制します。ドライバーが検出できるようにするには EXE がこれらのシンボルをエクスポートする必要があるため、GLFW を DLL としてビルドした場合、この上書きは機能しません。デフォルトでは無効で、オペレーティングシステムとドライバーに判断を委ねます。


<a id="compile_options_macos"></a>

### macOS固有のCMakeオプション

<a id="GLFW_BUILD_COCOA"></a>

__GLFW_BUILD_COCOA__ は、ライブラリのコンパイル時に Cocoa サポートを含めるかどうかを決定します。このオプションは macOS 向けにコンパイルする場合だけ利用できます。デフォルトで有効です。


<a id="compile_options_unix"></a>

### Unix系システム固有のCMakeオプション

<a id="GLFW_BUILD_WAYLAND"></a>

__GLFW_BUILD_WAYLAND__ は、ライブラリのコンパイル時に Wayland サポートを含めるかどうかを決定します。このオプションは Linux および macOS 以外の Unix 系システム向けにコンパイルする場合だけ利用できます。デフォルトで有効です。

<a id="GLFW_BUILD_X11"></a>

__GLFW_BUILD_X11__ は、ライブラリのコンパイル時に X11 サポートを含めるかどうかを決定します。このオプションは Linux および macOS 以外の Unix 系システム向けにコンパイルする場合だけ利用できます。デフォルトで有効です。


<a id="compile_mingw_cross"></a>

## CMakeとMinGW-w64でクロスコンパイルする

Cygwin と多くの Linux ディストリビューションは、MinGW-w64 パッケージを提供しています。たとえば Cygwin には、32ビット版と64ビット版の MinGW-w64 向けに `mingw64-i686-gcc` と `mingw64-x86_64-gcc` パッケージがあります。Debian GNU/Linux と Ubuntu などの派生ディストリビューションには、両方に対応する `mingw-w64` パッケージがあります。

GLFW の `CMake` サブディレクトリには、Windows バイナリのクロスコンパイルを設定する CMake ツールチェーンファイルがあります。これらのファイルを使うには、ビルドファイルの構成・生成時に `-D` フラグで CMake 変数 `CMAKE_TOOLCHAIN_FILE` を設定します。

```sh
cmake -S path/to/glfw -B path/to/build -D CMAKE_TOOLCHAIN_FILE=path/to/file
```

使用するツールチェーンファイルは、システム上の MinGW-w64 バイナリが使う接頭辞によって異なります。通常は /usr ディレクトリで確認できます。たとえば Ubuntu と Cygwin の MinGW-w64 パッケージは、どちらも64ビットコンパイラに `/usr/x86_64-w64-mingw32` を使うため、正しい呼び出し方は次のとおりです。

```sh
cmake -S path/to/glfw -B path/to/build -D CMAKE_TOOLCHAIN_FILE=CMake/x86_64-w64-mingw32.cmake
```

ツールチェーンファイルへのパスは、現在のディレクトリではなく、`-S` フラグに渡した GLFW ソースツリーへのパスを基準とします。

詳しくは [CMake ツールチェーンガイド][cmake-toolchains]を参照してください。

[cmake-toolchains]: https://cmake.org/cmake/help/latest/manual/cmake-toolchains.7.html


<a id="compile_manual"></a>

## GLFWを手動でコンパイルする

GLFW の CMake ビルド環境を使わずにコンパイルする場合は、少なくとも一部のプラットフォーム検出を自分で行う必要があります。利用可能なプラットフォーム（ウィンドウシステム）のサポートを有効にするプリプロセッサマクロがあります。また、さまざまな機能について、プラットフォーム固有の任意指定マクロもあります。

ビルド時、GLFW は必要な構成マクロがコマンドラインで定義されていることを前提とします。GLFW の CMake ファイルは GLFW ターゲットの非公開コンパイル定義としてこれらを設定しますが、GLFW のソースを手動でコンパイルする場合は、自分で定義する必要があります。

ウィンドウシステムは、ウィンドウの作成、入力、モニター、ガンマランプ、クリップボードの処理に使われます。選択肢は次のとおりです。

 - Cocoa フレームワークを使う `_GLFW_COCOA`
 - Win32 API を使う `_GLFW_WIN32`
 - Wayland プロトコルを使う `_GLFW_WAYLAND`
 - X Window System を使う `_GLFW_X11`

`_GLFW_WAYLAND` と `_GLFW_X11` のマクロは併用できます。併用すると、初期化時に適切なプラットフォームの検出を試みるライブラリが生成されます。

GLFW を共有ライブラリ／動的ライブラリ／DLL としてビルドする場合は、`_GLFW_BUILD_DLL` も定義しなければなりません。それ以外の場合は定義してはいけません。

Vulkan、EGL、GLX、OSMesa、OpenGL、GLESv1、GLESv2 の各ライブラリに独自の名前を使う場合は、必要なものについて `_GLFW_VULKAN_LIBRARY`、`_GLFW_EGL_LIBRARY`、`_GLFW_GLX_LIBRARY`、`_GLFW_OSMESA_LIBRARY`、`_GLFW_OPENGL_LIBRARY`、`_GLFW_GLESV1_LIBRARY`、`_GLFW_GLESV2_LIBRARY` を定義すると、デフォルト名を上書きできます。それ以外の場合、GLFW は組み込みのデフォルト名を使います。

> **注:** GLFW のコンパイル中は、[build_macros](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#build_macros)のマクロを1つも定義してはいけません。ビルドファイルでこれらを定義する場合は、GLFW のソースに適用されないようにしてください。
