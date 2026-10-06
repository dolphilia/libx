---
title: "使い始める"
licenseSource: "fmt-12-2-0"
---

<h1 id="get-started">使い始める</h1>

[Compiler Explorer](https://godbolt.org/z/P7h6cd6o3)で、{fmt}の例をオンラインでコンパイルして実行できます。

{fmt}はどのビルドシステムでも使えます。次の節ではCMakeでの使い方を説明し、[ビルドシステム](#build-systems)の節ではその他を扱います。

<h2 id="cmake">CMake</h2>

{fmt}は3つのCMakeターゲットを提供します。標準のコンパイル済みライブラリには`fmt::fmt`、C++モジュールライブラリには`fmt::fmt-module`、ヘッダーのみのライブラリには`fmt::fmt-header-only`を使います。ビルド時間を短縮するため、コンパイル済みライブラリまたはモジュールライブラリの使用を推奨します。

CMakeで{fmt}を使う主な方法は3つあります：

<ul>&#10;<li>&#10;<p><strong>FetchContent</strong>：CMake 3.11以降では、<a href="https://cmake.org/cmake/help/v3.30/module/FetchContent.html"><code>FetchContent</code></a>を使い、構成時に依存関係として{fmt}を自動的にダウンロードできます：</p>&#10;<pre class="highlight"><code>include(FetchContent)&#10;&#10;FetchContent_Declare(&#10;  fmt&#10;  GIT_REPOSITORY https://github.com/fmtlib/fmt&#10;  GIT_TAG        e69e5f977d458f2650bb346dadf2ad30c5320281) # 10.2.1&#10;FetchContent_MakeAvailable(fmt)&#10;&#10;target_link_libraries(&lt;your-target&gt; fmt::fmt)</code></pre>&#10;</li>&#10;<li>&#10;<p><strong>インストール済み</strong>：以下のように、<a href="#installation">インストール済み</a>の{fmt}を、<code>CMakeLists.txt</code>ファイルから検索して使用できます：</p>&#10;<pre class="highlight"><code>find_package(fmt)&#10;target_link_libraries(&lt;your-target&gt; fmt::fmt)</code></pre>&#10;</li>&#10;<li>&#10;<p><strong>ソースツリーの組み込み</strong>：{fmt}のソースツリーをプロジェクトに追加し、<code>CMakeLists.txt</code>ファイルに組み込めます：</p>&#10;<pre class="highlight"><code>add_subdirectory(fmt)&#10;target_link_libraries(&lt;your-target&gt; fmt::fmt)</code></pre>&#10;</li>&#10;</ul>

<h3 id="alternative-targets">別のターゲット</h3>

ヘッダーのみのターゲットまたはモジュールターゲットを使うには、上の手順の`fmt::fmt`を、それぞれ`fmt::fmt-header-only`または`fmt::fmt-module`に置き換えます。

<h2 id="installation">インストール</h2>

<h3 id="debianubuntu">Debian/Ubuntu</h3>

Debian、Ubuntu、その他のDebianを基にしたLinuxディストリビューションに{fmt}をインストールするには、次のコマンドを使います：

<pre class="highlight"><code>apt install libfmt-dev</code></pre>

<h3 id="homebrew">Homebrew</h3>

[Homebrew](https://brew.sh/)を使って、macOSに{fmt}をインストールします：

<pre class="highlight"><code>brew install fmt</code></pre>

<h3 id="conda">Conda</h3>

[Conda](https://docs.conda.io/en/latest/)の[conda-forgeパッケージ](https://github.com/conda-forge/fmt-feedstock)を使って、Linux、macOS、Windowsに{fmt}をインストールします：

<pre class="highlight"><code>conda install -c conda-forge fmt</code></pre>

<h3 id="vcpkg">vcpkg</h3>

vcpkgパッケージマネージャーを使って、{fmt}をダウンロードしてインストールします：

<pre class="highlight"><code>git clone https://github.com/Microsoft/vcpkg.git&#10;cd vcpkg&#10;./bootstrap-vcpkg.sh&#10;./vcpkg integrate install&#10;./vcpkg install fmt</code></pre>

<h3 id="conan">Conan</h3>

[Conan](https://conan.io/)パッケージマネージャーを使って、{fmt}をダウンロードしてインストールできます：

<pre class="highlight"><code>conan install -r conancenter --requires="fmt/[*]" --build=missing</code></pre>

<h2 id="building-from-source">ソースからビルドする</h2>

CMakeは、選択したコンパイラー環境で使えるネイティブなmakefileやプロジェクトファイルを生成します。通常は、`fmt`リポジトリ内で次のコマンドを実行するところから始めます：

<pre class="highlight"><code>mkdir build  # Create a directory to hold the build output.&#10;cd build&#10;cmake ..     # Generate native build scripts.</code></pre>

Unix系のシステムでは、現在のディレクトリにMakefileが生成されているはずです。`make`を実行すると、ライブラリをビルドできます。

ライブラリのビルド後は、`make test`を実行してテストを行えます。

makeの`test`ターゲットを生成するかどうかは、CMakeの`FMT_TEST`オプションで制御できます。これは、fmtを自分のプロジェクトのサブディレクトリとして組み込む一方、fmtのテストを自分の`test`ターゲットに追加したくない場合に便利です。

共有ライブラリをビルドするには、CMake変数`BUILD_SHARED_LIBS`を`TRUE`に設定します：

<pre class="highlight"><code>cmake -DBUILD_SHARED_LIBS=TRUE ..</code></pre>

位置独立コードを持つ静的ライブラリをビルドするには、CMake変数`CMAKE_POSITION_INDEPENDENT_CODE`を`TRUE`に設定します。たとえば、Python拡張など別の共有ライブラリにリンクする場合に使います：

<pre class="highlight"><code>cmake -DCMAKE_POSITION_INDEPENDENT_CODE=TRUE ..</code></pre>

ライブラリのビルド後、Unix系のシステムでは`sudo make install`を実行してインストールできます。

<h3 id="building-the-docs">文書をビルドする</h3>

文書をビルドするには、次のソフトウェアがシステムにインストールされている必要があります：

- [Python](https://www.python.org/)
- [Doxygen](http://www.stack.nl/~dimitri/doxygen/)
- [MkDocs](https://www.mkdocs.org/)と、`mkdocs-material`、`mkdocstrings`、`pymdown-extensions`、`mike`

まず、前の節で説明したように、CMakeでmakefileやプロジェクトファイルを生成します。次に、`doc`ターゲット／プロジェクトをコンパイルします。たとえば、次のように実行します：

<pre class="highlight"><code>make doc</code></pre>

これにより、`doc/html`にHTML文書が生成されます。

<h2 id="build-systems">ビルドシステム</h2>

<h3 id="build2">build2</h3>

依存関係マネージャー兼ビルドシステムの[build2](https://build2.org)で、{fmt}を使えます。

現在、このパッケージは次のパッケージリポジトリで提供されています：

- <https://cppget.org/fmt/>：リリースされ、公開されたバージョン。
- <https://github.com/build2-packaging/fmt>：未リリースのバージョンや独自のバージョン。

**使い方：**

- `build2`パッケージ名：`fmt`
- ライブラリのターゲット名：`lib{fmt}`

`build2`プロジェクトを`fmt`に依存させるには、次のようにします：

<ul>&#10;<li>&#10;<p>まだ追加していなければ、構成または<code>repositories.manifest</code>に、どちらかのリポジトリを追加します：</p>&#10;<pre class="highlight"><code>:&#10;role: prerequisite&#10;location: https://pkg.cppget.org/1/stable</code></pre>&#10;</li>&#10;<li>&#10;<p>このパッケージを<code>manifest</code>ファイルの依存関係に追加します（バージョン10の例）：</p>&#10;<pre class="highlight"><code>depends: fmt ~10.0.0</code></pre>&#10;</li>&#10;<li>&#10;<p>ターゲットをインポートし、<code>fmt</code>を使用する自分のターゲットの前提条件として、適切な<code>buildfile</code>で指定します：</p>&#10;<pre class="highlight"><code>import fmt = fmt%lib{fmt}&#10;lib{mylib} : cxx{**} ... $fmt</code></pre>&#10;</li>&#10;</ul>

その後は通常どおり、`b`または`bdep update`でプロジェクトをビルドします。

<h3 id="meson">Meson</h3>

[Meson WrapDB](https://mesonbuild.com/Wrapdb-projects.html)には、`fmt`パッケージが含まれています。

**使い方：**

<ul>&#10;<li>次のコマンドを実行して、WrapDBから<code>fmt</code>サブプロジェクトをインストールします：<pre class="highlight"><code>meson wrap install fmt</code></pre>&#10;</li>&#10;</ul>

プロジェクトのルートから実行します。

<ul>&#10;<li>&#10;<p>プロジェクトの<code>meson.build</code>ファイルに、新しいサブプロジェクトの項目を追加します：</p>&#10;<pre class="highlight"><code>fmt = subproject('fmt')&#10;fmt_dep = fmt.get_variable('fmt_dep')</code></pre>&#10;</li>&#10;<li>&#10;<p>fmtとリンクするため、新しい依存関係オブジェクトを指定します：</p>&#10;<pre class="highlight"><code>my_build_target = executable(&#10;  'name', 'src/main.cc', dependencies: [fmt_dep])</code></pre>&#10;</li>&#10;</ul>

**オプション：**

必要に応じて、{fmt}を静的ライブラリまたはヘッダーのみのライブラリとしてビルドできます。

静的ビルドには、次のサブプロジェクト定義を使います：

<pre class="highlight"><code>fmt = subproject('fmt', default_options: 'default_library=static')&#10;fmt_dep = fmt.get_variable('fmt_dep')</code></pre>

ヘッダーのみのバージョンには、次の定義を使います：

<pre class="highlight"><code>fmt = subproject('fmt', default_options: ['header-only=true'])&#10;fmt_dep = fmt.get_variable('fmt_header_only_dep')</code></pre>

<h3 id="android-ndk">Android NDK</h3>

{fmt}は[Android.mkファイル](https://github.com/fmtlib/fmt/blob/master/support/Android.mk)を提供しており、[Android NDK](https://developer.android.com/tools/sdk/ndk/index.html)でライブラリをビルドするために使えます。

<h3 id="other">その他</h3>

その他のビルドシステムで{fmt}ライブラリを使うには、[リリースアーカイブ](https://github.com/fmtlib/fmt/releases)または[gitリポジトリ](https://github.com/fmtlib/fmt)から、`include/fmt/base.h`、`include/fmt/format.h`、`include/fmt/format-inl.h`、`src/format.cc`と、必要に応じてその他のヘッダーをプロジェクトに追加します。`include`をインクルードディレクトリに追加し、`src/format.cc`がコンパイルされ、自分のコードにリンクされるようにしてください。
