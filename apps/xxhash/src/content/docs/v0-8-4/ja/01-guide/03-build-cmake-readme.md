---
title: "build/cmake/README.md"
licenseSource: "xxhash-cmake"
documentContext: [{"kind":"source","html":"<h2 id=\"出典と通知\">出典と通知</h2>\n<p>記録した確認範囲では、文書専用ライセンスの表記が見つかりませんでした。Libxの運用方針に基づき、ソフトウェア本体のCC0-1.0ライセンスを、この注釈を付けて文書にも適用しています。これは運用上の判断であり、新たに取得した許諾ではありません。</p>\n<p>固定したソフトウェア版は<strong>0.8.4</strong>、出典コミットは<code>c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0</code>です。これは非公式の日本語訳です。書式、内部リンク、明示した編集者注記はLibxによる変更です。コード例の英語コメントは原文どおり保持しています。コメントは順に、任意で追加前の設定を行うこと、コマンドラインツールをビルドしないこと、静的ライブラリをビルドすること、プロジェクトにxxHashを追加すること、対象ターゲットにリンクすることを説明しています。</p>\n<p><a href=\"/docs/xxhash/v0-8-4/ja/03-notices/cmake-header/\">CMakeファイルの原通知</a></p>\n<p><a href=\"https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/build/cmake/README.md\">固定した原文</a> · <a href=\"/docs/xxhash/source/v0-8-4/build/cmake/README.md.txt\">原文テキストのダウンロード</a></p>"}]
---

# xxHashのCMakeへの組み込み

この文書では、xxHashをCMakeプロジェクトに組み込む方法を説明します。用途に最も適した方法を選んでください。

## 方法1：インストールしてインポートする（推奨）

**適した用途：** xxHashをシステム全体で利用するライブラリとして使いたいプロジェクト。

### 手順1：xxHashをビルドしてインストールする

```bash
cd /path/to/xxHash
cmake -S build/cmake -B cmake_build
cmake --build cmake_build --parallel
cmake --install cmake_build
```

### 手順2：自分のプロジェクトで使う

`CMakeLists.txt`に次を追加します。

```cmake
find_package(xxHash 0.8 CONFIG REQUIRED)
target_link_libraries(YourTarget PRIVATE xxHash::xxhash)
```

### ビルドオプション

次のオプションでビルドを設定します。

- `-DXXHASH_BUILD_XXHSUM=OFF`：コマンドラインツールのビルドを省略します（デフォルト：ON）。
- `-DBUILD_SHARED_LIBS=OFF`：共有ライブラリの代わりに静的ライブラリをビルドします（デフォルト：ON）。
- `-DCMAKE_INSTALL_PREFIX=/custom/path`：インストール先を指定します。
- `-DDISPATCH=OFF`：CPUディスパッチの最適化を無効にします（x64でのデフォルト：ON）。

## 方法2：サブディレクトリーとして追加する

**適した用途：** システムにインストールせず、xxHashを直接同梱したいプロジェクト。

`CMakeLists.txt`に次を追加します。

```cmake
# Optional: Configure xxHash before adding
set(XXHASH_BUILD_XXHSUM OFF)        # Don't build command line tool
option(BUILD_SHARED_LIBS OFF)       # Build static library

# Add xxHash to your project
add_subdirectory(path/to/xxHash/build/cmake xxhash_build EXCLUDE_FROM_ALL)

# Link to your target
target_link_libraries(YourTarget PRIVATE xxHash::xxhash)
```

