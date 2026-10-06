---
title: "CMake"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href=\"https://github.com/gabime/spdlog/wiki/CMake\">原資料</a>。原資料のSHA-256：<code>74e4d8c650094155e121451378fa39dbc9527958f2ac0d4dccfa5e9913675668</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href=\"/docs/spdlog/v1-17-0/ja/02-reference/01-license/\">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>"},{"kind":"editorial","html":"<aside data-editorial=\"source-note\"><p>この日付付きWikiはCMake 3.0以上と記載しています。別途固定したspdlog 1.17.0のCMakeLists.txtはcmake_minimum_required(VERSION 3.10...3.21)を宣言しています。最小バージョンは3.10で、3.21はポリシーバージョンであり、実行可能なCMakeバージョンの上限ではありません。原資料のWikiの手順は保持しています。</p></aside>"}]
---



<div data-spdlog-source-body="04-cmake">

### CMake

このライブラリは、[CMake](http://www.cmake.org/)でもインストールできます。CMakeのバージョンは3.0以上が必要で、`--version` で確認できます。
```bash
> cmake --version
cmake version 3.3.1

CMake suite maintained and supported by Kitware (kitware.com/cmake).
```

### 生成

現在のディレクトリ（`.`）にある `CMakeLists.txt` を使い、`_builds` ディレクトリにプロジェクトを生成します。OSと必要なジェネレーターに応じて、次のいずれかのコマンドを実行します。
```bash
> cmake -H. -B_builds -DCMAKE_BUILD_TYPE=Release # Default generator is Makefile for *nix platform
> cmake -H. -B_builds -GXcode # Xcode generator on OS X (multi-config, no need for CMAKE_BUILD_TYPE)
> cmake -H. -B_builds -G"Visual Studio 12 2013" # Visual Studio IDE, Windows, multi-config
```

または、ツールチェーンを指定します。
```bash
> cmake -H. -B_builds -DCMAKE_TOOLCHAIN_FILE=/path/to/iOS.cmake -GXcode
> cmake -H. -B_builds -DCMAKE_TOOLCHAIN_FILE=/path/to/android.cmake -DCMAKE_BUILD_TYPE=Release
```

サンプルを追加するには、`SPDLOG_BUILD_EXAMPLE=ON` オプションを使います。
```cmake
> cmake -H. -B_builds -DSPDLOG_BUILD_EXAMPLE=ON -DCMAKE_BUILD_TYPE=Release
```

### ビルド・テスト

生成されたプロジェクトを開き、ビルド・テストのターゲットを実行します。コマンドラインも使えます。
```
> cmake --build _builds --config Release
> cd _builds && ctest -VV -C Release
```

### インストール

ヘッダーは[config](http://www.cmake.org/cmake/help/v3.3/manual/cmake-packages.7.html#config-file-packages)ファイルと一緒にインストールでき、`find_package(spdlog CONFIG REQUIRED)` でライブラリを見つけられるようになります。
```cmake
[spdlog]> cmake -H. -B_builds -DCMAKE_INSTALL_PREFIX=/path/to/install -DCMAKE_BUILD_TYPE=Release
[spdlog]> cmake --build _builds --target install
```

`examples` を独立したプロジェクトとしてビルドすると、使用方法をテストできます。
```cmake
[spdlog/examples]> cmake -H. -B_builds -DCMAKE_PREFIX_PATH=/path/to/install -DCMAKE_BUILD_TYPE=Release
[spdlog/examples]> cmake --build _builds
```

### CMake 3.7でAndroid向けにクロスコンパイルする

Android NDKとSDKを使ったツールチェーン設定を標準でサポートするCMake 3.7で、クロスコンパイルが動作したと報告されています（https://cmake.org/cmake/help/v3.7/manual/cmake-toolchains.7.html#cross-compiling-for-android）。spdlogは古いバージョンのCMakeを対象としており、この例はコミュニティーからの寄稿である点に注意してください。

以下は、Android NDKを使ってspdlogを設定・ビルドする例です。
```bash
> git clone https://github.com/gabime/spdlog
> mkdir build
> cd build 
> cmake ../spdlog \
  -DCMAKE_SYSTEM_NAME=Android \
  -DCMAKE_SYSTEM_VERSION=21 \
  -DCMAKE_ANDROID_ARCH_ABI="armeabi-v7a" \
  -DCMAKE_ANDROID_ARM_NEON=ON \
  -DCMAKE_ANDROID_NDK=$HOME/Android/Ndk/android-ndk-r13b/
> cmake --build .
```

例で使うCMakeの設定オプションの意味については、上のリンク先のCMake文書を参照してください。

## git submoduleとしてExternalProject_Addで静的ライブラリを使う

CMakeを使うプロジェクトで、実際にはlibspdlogd.aという名前の静的ライブラリを使いたい場合の短い例です。
```bash
cd project_dir\lib
git submodule add https://github.com/gabime/spdlog
cd spdlog
git checkout v1.9.2
...
```

```cmake
ExternalProject_Add(spdlog
    PREFIX spdlog
    SOURCE_DIR ${PROJECT_SOURCE_DIR}/lib/spdlog
    CMAKE_ARGS -DCMAKE_BUILD_TYPE=${CMAKE_BUILD_TYPE}
    -DCMAKE_CXX_COMPILER=${CMAKE_CXX_COMPILER}
    -DCMAKE_C_COMPILER=${CMAKE_C_COMPILER}
    -DCMAKE_TOOLCHAIN_FILE=${CMAKE_TOOLCHAIN_FILE}
    -DCMAKE_INSTALL_PREFIX=${STAGING_DIR}
    -DSPDLOG_BUILD_SHARED=OFF
)
```

後で、次も追加します。
```cmake
add_dependencies(${PROJECT_NAME} spdlog)
```

最後に、次のように使います。
```cmake
PUBLIC ${STAGING_DIR}/include/ # spdlog
```

C++/Hファイル内では、次のようにできます。
```C++
#include "spdlog/spdlog.h"
```

## 共有ライブラリでspdlogを使う

共有ライブラリをビルドする場合、`spdlog` サブディレクトリを追加する前に、`CMAKE_POSITION_INDEPENDENT_CODE` を `TRUE` に設定する必要があります。

完全な例：
```cmake
cmake_minimum_required(VERSION 3.10)

project(cmake_test)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED TRUE)
set(CMAKE_POSITION_INDEPENDENT_CODE TRUE)

add_subdirectory("${CMAKE_SOURCE_DIR}/spdlog")

file(GLOB_RECURSE SOURCES "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")
add_library(test SHARED ${SOURCES})
target_include_directories(test PRIVATE "${CMAKE_CURRENT_SOURCE_DIR}/src")

target_link_libraries(test PRIVATE spdlog::spdlog)
```

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
