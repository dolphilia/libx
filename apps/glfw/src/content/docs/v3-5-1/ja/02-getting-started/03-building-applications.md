---
title: "アプリケーションをビルドする"
description: "GLFWを使うアプリケーションをビルドしてリンクする"
licenseSource: "glfw-3.5.1"
---

> このページは、[GLFW 3.5.1 公式ドキュメント](https://www.glfw.org/docs/3.5.1/)を改変して Markdown 化したものです。libx 向けに書式、ナビゲーション、リンクを変更していますが、技術的な内容は GLFW 3.5.1 のソース配布物に基づいています。

<a id="build_guide"></a>

# アプリケーションをビルドする

このページでは、GLFW を使うアプリケーションのコンパイルとリンクについて説明します。そのようなアプリケーションの作成方法については、[入門チュートリアル](/docs/glfw/v3-5-1/ja/02-getting-started/01-getting-started/#quick_guide)から始めてください。GLFW ライブラリ自体のコンパイル方法については、[compile_guide](/docs/glfw/v3-5-1/ja/02-getting-started/02-compiling-glfw/#compile_guide)を参照してください。

これはコンパイルやリンクそのもののチュートリアルではありません。C プログラムをコンパイル・リンクする方法と、選択した開発環境のコンパイラの使い方について、基本的な知識があることを前提としています。コンパイルとリンクの手順については、C プログラミングの教材や開発環境のドキュメントで説明されているはずです。


<a id="build_include"></a>

## GLFWヘッダーファイルをインクルードする

OpenGL または GLFW を使うソースファイルでは、GLFW ヘッダーをインクルードしてください。

```c
#include <GLFW/glfw3.h>
```

このヘッダーは、GLFW API のすべての定数を定義し、すべての型と関数プロトタイプを宣言します。デフォルトでは、開発環境の OpenGL ヘッダーもインクルードします。OpenGL ES ヘッダーの選択などについては、後述の[オプションマクロ](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#build_macros)を参照してください。

GLFW ヘッダーは OpenGL ヘッダーが必要とするプラットフォーム固有のマクロも定義するため、ウィンドウシステムのヘッダーを用意しなくても OpenGL ヘッダーをインクルードできます。

この定義は必要な場合にだけ行われます。そのため、ウィンドウシステムのヘッダーがすでにインクルードされていれば、GLFW ヘッダーはそれらのシンボルを再定義しません。逆の順序では成立しません。たとえば `windows.h` は、Win32 のシンボルがすでに定義されていると正しく処理できません。

つまり、次のようにしてください。

 - OpenGL または OpenGL ES ヘッダーを移植可能な方法でインクルードするには、GLFW ヘッダーを使う
 - ウィンドウシステムの API を直接使う場合を除き、そのヘッダーをインクルードしない
 - そのようなヘッダーが必要な場合は、GLFW ヘッダーより先にインクルードする

[glad][] などの OpenGL 拡張ローダーライブラリを使う場合は、拡張ローダーのヘッダーを GLFW ヘッダーより先にインクルードしてください。GLFW は、先にインクルードされた OpenGL、OpenGL ES、拡張ローダーの各ヘッダーを検出しようとし、検出するとデフォルトの OpenGL ヘッダーをインクルードしません。多くの拡張ローダーも、それより後に同種のヘッダーがインクルードされるのを防ぐマクロを定義します。

[glad]: https://github.com/Dav1dde/glad

```c
#include <glad/gl.h>
#include <GLFW/glfw3.h>
```

どちらの仕組みも、拡張ローダーのヘッダーが既知のマクロを定義することに依存します。使用するローダーがそのようなマクロを定義しない場合や、利用者がどのローダーを選ぶか分からない場合は、[GLFW_INCLUDE_NONE](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#GLFW_INCLUDE_NONE) マクロを使うと、GLFW ヘッダーによる OpenGL ヘッダーのインクルードを明示的に防げます。これにより、2つのヘッダーをどちらの順序でもインクルードできます。

```c
#define GLFW_INCLUDE_NONE
#include <GLFW/glfw3.h>
#include <glad/gl.h>
```


<a id="build_macros"></a>

### GLFWヘッダーのオプションマクロ

以下のマクロは GLFW ヘッダーをインクルードする前に定義でき、その動作に影響します。

<a id="GLFW_DLL"></a>

__GLFW_DLL__ は、Windows で GLFW DLL を使う場合に必要です。GLFW の関数が DLL 内で定義されていることをコンパイラへ伝えます。

以下のマクロは、インクルードする OpenGL または OpenGL ES API ヘッダーを制御します。同時に定義できるのは1つだけです。

> **注:** GLFW は、以下に挙げる API ヘッダーを提供しません。これらは開発環境、または OpenGL、OpenGL ES、Vulkan の各 SDK が提供します。その多くは [Khronos Registry][registry] からダウンロードできます。

[registry]: https://www.khronos.org/registry/

<a id="GLFW_INCLUDE_GLCOREARB"></a>

__GLFW_INCLUDE_GLCOREARB__ を定義すると、GLFW ヘッダーは通常の OpenGL ヘッダーの代わりに、モダン OpenGL の `GL/glcorearb.h` ヘッダー（macOS では `OpenGL/gl3.h`）をインクルードします。

<a id="GLFW_INCLUDE_ES1"></a>

__GLFW_INCLUDE_ES1__ を定義すると、GLFW ヘッダーは通常の OpenGL ヘッダーの代わりに OpenGL ES 1.x の `GLES/gl.h` ヘッダーをインクルードします。

<a id="GLFW_INCLUDE_ES2"></a>

__GLFW_INCLUDE_ES2__ を定義すると、GLFW ヘッダーは通常の OpenGL ヘッダーの代わりに OpenGL ES 2.0 の `GLES2/gl2.h` ヘッダーをインクルードします。

<a id="GLFW_INCLUDE_ES3"></a>

__GLFW_INCLUDE_ES3__ を定義すると、GLFW ヘッダーは通常の OpenGL ヘッダーの代わりに OpenGL ES 3.0 の `GLES3/gl3.h` ヘッダーをインクルードします。

<a id="GLFW_INCLUDE_ES31"></a>

__GLFW_INCLUDE_ES31__ を定義すると、GLFW ヘッダーは通常の OpenGL ヘッダーの代わりに OpenGL ES 3.1 の `GLES3/gl31.h` ヘッダーをインクルードします。

<a id="GLFW_INCLUDE_ES32"></a>

__GLFW_INCLUDE_ES32__ を定義すると、GLFW ヘッダーは通常の OpenGL ヘッダーの代わりに OpenGL ES 3.2 の `GLES3/gl32.h` ヘッダーをインクルードします。

<a id="GLFW_INCLUDE_NONE"></a>

__GLFW_INCLUDE_NONE__ を定義すると、GLFW ヘッダーは OpenGL または OpenGL ES の API ヘッダーを一切インクルードしません。拡張ローダーライブラリと組み合わせる場合に便利です。

上記のインクルード用マクロがどれも定義されていない場合、GLFW が認識している OpenGL、OpenGL ES、拡張ローダーの各ヘッダーのインクルードガードを検出しない限り、標準の OpenGL `GL/gl.h` ヘッダー（macOS では `OpenGL/gl.h`）がインクルードされます。

以下のマクロは、追加の API ヘッダーをインクルードするかどうかを制御します。これらは任意の数を同時に定義でき、上記のマクロの1つと組み合わせることもできます。

<a id="GLFW_INCLUDE_VULKAN"></a>

__GLFW_INCLUDE_VULKAN__ を定義すると、選択した OpenGL または OpenGL ES ヘッダーに加えて、Vulkan の `vulkan/vulkan.h` ヘッダーもインクルードします。

<a id="GLFW_INCLUDE_GLEXT"></a>

__GLFW_INCLUDE_GLEXT__ を定義すると、上記で選択した OpenGL または OpenGL ES ヘッダーに続けて、それに適した拡張ヘッダーもインクルードします。

<a id="GLFW_INCLUDE_GLU"></a>

__GLFW_INCLUDE_GLU__ を定義すると、上記で選択したヘッダーに加えて GLU ヘッダーもインクルードします。これは標準の OpenGL ヘッダーと組み合わせ、古いコードとの互換性を保つ場合に限って使ってください。GLU は非推奨であり、新しいコードでは使うべきではありません。

> **注:** GLFW 自体のコンパイル中は、これらのマクロを1つも定義してはいけません。ビルドに GLFW を含め、ビルドファイル内でこれらのいずれかを定義する場合は、GLFW のソースに適用されないようにしてください。


<a id="build_link"></a>

## 適切なライブラリをリンクする

GLFW は基本的にさまざまなプラットフォーム固有 API のラッパーであるため、多くの異なるシステムライブラリをリンクする必要があります。GLFW を共有ライブラリ／動的ライブラリ／DLL として使う場合は、GLFW 側がこれらのリンクを処理します。一方、GLFW を静的ライブラリとして使う場合は、実行ファイル側でこれらのライブラリをリンクする必要があります。

Windows と macOS ではシステムライブラリの一覧が固定されており、ビルド環境へ直接記述できます。後述する各開発環境の節を参照してください。Linux やその他の Unix 系オペレーティングシステムでは一覧が変化しますが、後述するさまざまな方法で取得できます。

リンク全般についての優れた入門資料として、David Drysdale による [Beginner's Guide to Linkers][linker_guide] があります。

[linker_guide]: https://www.lurklurk.org/linkers/linkers.html


<a id="build_link_win32"></a>

### Visual C++とGLFWバイナリを使う

ダウンロードした[バイナリアーカイブ](https://www.glfw.org/download.html)を使う場合は、まずビルド対象のアーキテクチャ（32ビットまたは64ビット）に合ったアーカイブであることを確認してください。一致していないとリンクエラーになります。また、使用している Visual C++ のバージョン向けのバイナリであることも確認してください。一致していない場合は、別のリンクエラーが発生する可能性があります。

実行ファイルのほかの部分と同じ基本ランタイムライブラリを使う必要があるため、バイナリアーカイブには2種類の静的 GLFW ライブラリが含まれています。

一方は `glfw3.lib` という名前で、プロジェクトの _Runtime Library_ オプションを _Multi-threaded DLL_ または _Multi-threaded Debug DLL_ に設定した場合に使います。もう一方は `glfw3_mt.lib` という名前で、_Runtime Library_ を _Multi-threaded_ または _Multi-threaded Debug_ に設定した場合に使います。静的 GLFW ライブラリを使うには、プロジェクトの _Additional Dependencies_ オプションへ `path/to/glfw3.lib` または `path/to/glfw3_mt.lib` を追加する必要があります。

GLFW の静的ライブラリを自分でコンパイルした場合は、`glfw3.lib` という名前のものが1つだけ生成されます。この場合は、ランタイムライブラリの種類が一致することを自分で確認しなければなりません。

GLFW ライブラリの DLL 版は `glfw3.dll` という名前ですが、リンクには `glfw3dll.lib` リンクライブラリを使います。DLL を使うには、プロジェクトの _Additional Dependencies_ オプションへ `path/to/glfw3dll.lib` を追加する必要があります。必要な依存関係はすべてデフォルトでそこに記載されていますが、GLFW の DLL 版でビルドする場合は [GLFW_DLL](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#GLFW_DLL) も定義する必要があります。プロジェクトの _Preprocessor Definitions_ オプションで定義するか、GLFW ヘッダーをインクルードする前にソースコード内で定義できます。

```c
#define GLFW_DLL
#include <GLFW/glfw3.h>
```

GLFW のリンク時依存関係は、すべてデフォルトで _Additional Dependencies_ オプションに記載されています。


<a id="build_link_mingw"></a>

### MinGW-w64とGLFWバイナリを使う

この節では、Windows 上で [MinGW-w64][] と GLFW バイナリを使い、コマンドラインまたは makefile からプログラムをビルドする方法を説明します。GLFW バイナリには、ダウンロードして展開した[バイナリアーカイブ](https://www.glfw.org/download.html)か、自分でコンパイルしたものを使えます。以下のパスはバイナリアーカイブを使う前提です。

ダウンロードしたバイナリアーカイブを使う場合は、まずビルド対象のアーキテクチャ（32ビットまたは64ビット）に合ったアーカイブであることを確認してください。一致していないとリンクエラーになります。

GCC では、ソースファイルとライブラリの指定順が重要です。依存されるものは、それに依存するファイルより後に記載しなければなりません。GLFW に依存するソースファイルは GLFW ライブラリより前に記載する必要があります。また GLFW は `gdi32` に依存するため、その前に記載しなければなりません。

[MinGW-w64]: https://www.mingw-w64.org/

`libglfw3.a` という名前の静的 GLFW ライブラリを使う場合は、次のようにします。

```sh
gcc -o myprog myprog.c -I path/to/glfw/include path/to/glfw/lib-mingw-w64/libglfw3.a -lgdi32
```

`glfw3.dll` という名前の DLL 版 GLFW ライブラリを使う場合は、`libglfw3dll.a` リンクライブラリが必要です。

```sh
gcc -o myprog myprog.c -I path/to/glfw/include path/to/glfw/lib-mingw-w64/libglfw3dll.a -lgdi32
```

生成された実行ファイルを動かすには `glfw3.dll` を見つけられる必要があります。通常は、両方のファイルを同じディレクトリに置きます。

GLFW の DLL 版でビルドする場合は、[GLFW_DLL](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#GLFW_DLL) マクロも定義する必要があります。GLFW ヘッダーをインクルードする前であれば、ソースファイル内で定義できます。

```c
#define GLFW_DLL
#include <GLFW/glfw3.h>
```

コマンドラインで定義することもできます。

```sh
gcc -o myprog myprog.c -D GLFW_DLL -I path/to/glfw/include path/to/glfw/lib-mingw-w64/libglfw3dll.a -lgdi32
```


<a id="build_link_cmake_source"></a>

### CMakeとGLFWソースを使う

この節では、CMake を使い、アプリケーションとともに GLFW をコンパイルしてリンクする方法を説明します。インストール済みのバイナリを使う場合は、[build_link_cmake_package](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#build_link_cmake_package)を参照してください。

`CMakeLists.txt` にいくつか変更を加えると、GLFW ソースツリーをアプリケーションと一緒にビルドできます。

GLFW ソースツリーのルートディレクトリをプロジェクトへ追加します。これにより、`glfw` ターゲットがプロジェクトへ追加されます。

```cmake
add_subdirectory(path/to/glfw)
```

GLFW を追加したら、アプリケーションを `glfw` ターゲットにリンクします。これにより、現在の構成に応じた GLFW ライブラリとそのリンク時依存関係、GLFW ヘッダーのインクルードディレクトリ、該当する場合は [GLFW_DLL](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#GLFW_DLL) マクロが追加されます。

```cmake
target_link_libraries(myapp glfw)
```

GLFW は必要な OpenGL、OpenGL ES、Vulkan の各ライブラリを実行時に読み込むため、`glfw` ターゲットは OpenGL に依存しないことに注意してください。アプリケーションがモダンな[拡張ローダーライブラリ](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_glext_auto)を使わず、OpenGL を直接呼び出す場合は、OpenGL の CMake パッケージを使います。

```cmake
find_package(OpenGL REQUIRED)
```

OpenGL が見つかると、ライブラリとインクルードディレクトリのパスを含む `OpenGL::GL` ターゲットがプロジェクトへ追加されます。ほかのライブラリと同じようにリンクしてください。

```cmake
target_link_libraries(myapp OpenGL::GL)
```

CMake でプログラムと GLFW ソースをビルドする最小構成の例については、GitHub の [GLFW CMake Starter][cmake_starter] を参照してください。

[cmake_starter]: https://github.com/juliettef/GLFW-CMake-starter


<a id="build_link_cmake_package"></a>

### CMakeとインストール済みGLFWバイナリを使う

この節では、ビルドしてインストールした後の GLFW を CMake でリンクする方法を説明します。アプリケーションと一緒に GLFW をビルドする場合は、[build_link_cmake_source](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#build_link_cmake_source)を参照してください。

`CMakeLists.txt` にいくつか変更を加えると、GLFW のインストール時に生成されたパッケージファイルとターゲットファイルを検索できます。

```cmake
find_package(glfw3 3.5 REQUIRED)
```

GLFW をプロジェクトへ追加したら、`glfw` ターゲットを使ってリンクします。これにより、GLFW ライブラリとそのリンク時依存関係、GLFW ヘッダーのインクルードディレクトリ、該当する場合は [GLFW_DLL](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#GLFW_DLL) マクロが追加されます。

```cmake
target_link_libraries(myapp glfw)
```

GLFW は必要な OpenGL、OpenGL ES、Vulkan の各ライブラリを実行時に読み込むため、`glfw` ターゲットは OpenGL に依存しないことに注意してください。アプリケーションがモダンな[拡張ローダーライブラリ](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_glext_auto)を使わず、OpenGL を直接呼び出す場合は、OpenGL の CMake パッケージを使います。

```cmake
find_package(OpenGL REQUIRED)
```

OpenGL が見つかると、ライブラリとインクルードディレクトリのパスを含む `OpenGL::GL` ターゲットがプロジェクトへ追加されます。ほかのライブラリと同じようにリンクしてください。

```cmake
target_link_libraries(myapp OpenGL::GL)
```


<a id="build_link_pkgconfig"></a>

### Unixでpkg-configとGLFWバイナリを使う

この節では、macOS、Linux、FreeBSD、Cygwin などの Unix 系システムで、コマンドラインまたは makefile からプログラムをビルドする方法を説明します。

GLFW は [pkg-config][] をサポートしています。GLFW ライブラリのビルド時に `glfw3.pc` pkg-config ファイルが生成され、ライブラリとともにインストールされます。pkg-config ファイルには、ライブラリの使用に必要なすべてのコンパイル時・リンク時フラグと依存関係が記述されています。これらが更新された場合やシステム間で異なる場合も、正しい内容を自動的に取得できます。

[pkg-config]: https://www.freedesktop.org/wiki/Software/pkg-config/

静的 GLFW ライブラリを使う場合の一般的なコンパイル・リンク用コマンドラインは、次のようになります。

```sh
cc $(pkg-config --cflags glfw3) -o myprog myprog.c $(pkg-config --static --libs glfw3)
```

共有版の GLFW ライブラリを使う場合は、`--static` フラグを省略します。

```sh
cc $(pkg-config --cflags glfw3) -o myprog myprog.c $(pkg-config --libs glfw3)
```

`PKG_CONFIG_PATH` 環境変数を使うと、`glfw3.pc` ファイルを先にインストールせずに利用することもできます。

```sh
env PKG_CONFIG_PATH=path/to/glfw/src cc $(pkg-config --cflags glfw3) -o myprog myprog.c $(pkg-config --libs glfw3)
```

GLFW は必要な OpenGL、OpenGL ES、Vulkan の各ライブラリを実行時に読み込むため、依存関係に OpenGL は含まれません。アプリケーションがモダンな[拡張ローダーライブラリ](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_glext_auto)を使わず、OpenGL を直接呼び出す場合は、`gl` pkg-config パッケージを追加してください。

```sh
cc $(pkg-config --cflags glfw3 gl) -o myprog myprog.c $(pkg-config --libs glfw3 gl)
```


<a id="build_link_xcode"></a>

### macOS上のXcodeを使う

GLFW の動的ライブラリ版を使う場合は、それをプロジェクトの依存関係へ追加します。

GLFW の静的ライブラリ版を使う場合は、そのライブラリと Cocoa、OpenGL、IOKit、QuartzCore の各フレームワークをプロジェクトの依存関係へ追加します。これらはすべて `/System/Library/Frameworks` にあります。


<a id="build_link_osx"></a>

### macOS上のコマンドラインまたはmakefileを使う

macOS のコマンドラインからインストール済み GLFW バイナリを使う場合は、[pkg-config](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#build_link_pkgconfig)の使用を推奨します。新しく追加された依存関係も自動的に取得できるためです。それでも手動でビルドする場合は、`-l` と `-framework` スイッチを使い、必要なフレームワークとライブラリを自分でコマンドラインへ追加する必要があります。

`libglfw.3.dylib` という名前の動的 GLFW ライブラリを使う場合は、次のようにします。

```sh
cc -o myprog myprog.c -lglfw -framework Cocoa -framework OpenGL -framework IOKit -framework QuartzCore
```

`libglfw3.a` という名前の静的ライブラリを使う場合は、`-lglfw` を `-lglfw3` に置き換えます。

コマンドラインからフレームワークをリンクする場合は、フレームワーク名に `.framework` 拡張子を付けないことに注意してください。

> **注:** マシンに `libGL.*.dylib` 形式の OpenGL ライブラリがある場合がありますが、これは X Window System 用であり、macOS ネイティブ版の GLFW では動作しません。
