<span id="projects-for-various-integrated-development-environments-ide"></span>

各種統合開発環境（IDE）向けのプロジェクト
==============================================================

<span id="included-projects"></span>

#### 同梱されているプロジェクト

lz4 の配布物には、次のプロジェクトが含まれています。
- `cmake` - CMake プロジェクト
- `meson` - Meson プロジェクト
- `visual` - `cmake` スクリプトから Visual Studio ソリューションを生成するスクリプト
- `VS2022` - Visual Studio 2022 ソリューション。近いうちに非推奨となる予定です。`visual` の生成スクリプトを優先してください。


<span id="projects-available-within-vs2022lz4sln"></span>

#### VS2022\lz4.sln に含まれるプロジェクト

Visual Studio のソリューションファイル `lz4.sln` には、`build\VS2010\bin\$(Platform)_$(Configuration)` ディレクトリへコンパイルされる多数のプロジェクトが含まれています。たとえば、`lz4` を `x64` と `Release` に設定すると、`build\VS2010\bin\x64_Release\lz4.exe` へコンパイルされます。ソリューションファイルに含まれるプロジェクトは次のとおりです。

- `lz4` : gzip のような引数に対応するコマンドラインユーティリティ
- `datagen` : テスト用の、パラメーターを指定して合成データを生成するプログラム
- `frametest` : 対象プラットフォーム上で lz4frame の整合性を検査するテストツール
- `fullbench` : lz4 の各内部関数の速度を精密に測定するプログラム
- `fuzzer` : 対象プラットフォーム上で lz4 の整合性を検査するテストツール
- `liblz4` : `liblz4_static.lib` にコンパイルされる静的 LZ4 ライブラリ
- `liblz4-dll` : `liblz4.dll` にコンパイルされ、インポートライブラリ `liblz4.lib` が付属する動的 LZ4 ライブラリ（DLL）
- `fullbench-dll` : インポートライブラリを使ってコンパイルされる fullbench プログラム。実行ファイルには LZ4 DLL が必要です。


<span id="using-lz4-dll-with-microsoft-visual-c-project"></span>

#### Microsoft Visual C++ プロジェクトで LZ4 DLL を使う

Visual C++ を使うプロジェクトをコンパイルするには、ヘッダーファイル `lib\lz4.h`、`lib\lz4hc.h`、`lib\lz4frame.h` と、インポートライブラリ `build\VS2010\bin\$(Platform)_$(Configuration)\liblz4.lib` が必要です。

1. ヘッダーファイルへのパスは、`Additional Include Directories` に追加することを推奨します。この項目は、Visual Studio IDE のプロジェクトプロパティにある `C/C++` プロパティページの `General` ページで確認できます。
2. インポートライブラリは、`Additional Dependencies` に追加する必要があります。この項目は、プロジェクトプロパティにある `Linker` プロパティページの `Input` ページで確認できます。ライブラリへのフルパスを指定せず、`liblz4.lib` という名前だけを指定する場合は、ライブラリのディレクトリを `Linker\General\Additional Library Directories` に追加する必要があります。

コンパイルされた実行ファイルには、`build\VS2010\bin\$(Platform)_$(Configuration)\liblz4.dll` にある LZ4 DLL が必要です。
