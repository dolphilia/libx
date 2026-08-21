---
title: "Luaのインストール"
description: "Lua 5.5のビルド、インストール、カスタマイズ"
---

# <a id="install"></a>Luaのインストール

Luaは[ソース](https://www.lua.org/ftp/)形式で配布されている。使用する前にビルドする必要がある。Luaは純粋なISO Cで実装されており、ISO Cコンパイラーを備えた既知のすべてのプラットフォームで無変更のままコンパイルできるため、ビルドは容易なはずである。LuaはC++としても無変更でコンパイルできる。以下のビルド手順は、LinuxやmacOSなどのUnix系プラットフォームを対象としている。[その他のシステム向けの手順](/docs/lua/v5-5-1/ja/01-overview/02-installing/#other)と[カスタマイズオプション](/docs/lua/v5-5-1/ja/01-overview/02-installing/#customization)も参照すること。

自分でLuaをコンパイルする時間や意向がない場合は、[LuaBinaries](https://luabinaries.sourceforge.net)からバイナリーを入手できる。

## Luaのビルド

一般的なUnix系プラットフォームの多くでは、単に「<kbd>make</kbd>」を実行すればよい。詳細な手順を以下に示す。

1. ターミナルウィンドウを開き、最上位ディレクトリ`lua-5.5.1`へ移動する。そこにある`Makefile`が、ビルド処理とインストール処理の両方を制御する。
2. 「<kbd>make</kbd>」を実行する。`Makefile`がプラットフォームを推測し、そのプラットフォーム向けにLuaをビルドする。
3. 推測に失敗した場合は「<kbd>make help</kbd>」を実行し、使用するプラットフォームが一覧にあるか確認する。現在対応しているプラットフォームは次のとおりである。
  
  guess aix bsd c89 freebsd generic ios linux macosx mingw posix solaris
  
  使用するプラットフォームが一覧にある場合は、「<kbd>make xxx</kbd>」を実行する。xxxにはプラットフォーム名を指定する。
  
  一覧にない場合は、最も近いもの、posix、generic、c89の順に試す。
4. コンパイルにはわずかな時間しかかからず、`src`ディレクトリにlua（インタープリター）、luac（コンパイラー）、liblua.a（ライブラリ）の3ファイルが生成される。
5. Luaが正しくビルドされたことを確認するには、ビルド後に「<kbd>make test</kbd>」を実行する。インタープリターが実行され、そのバージョンが表示される。

## Luaのインストール

Luaをビルドした後、システムの標準的な場所へインストールする場合は「<kbd>make install</kbd>」を実行する。標準の場所とファイルのインストール方法は`Makefile`で定義されている。ファイルのインストールには適切な権限が必要となる可能性が高いため、「<kbd>sudo make install</kbd>」を実行する必要があるかもしれない。

Luaのビルドとインストールを一度に行うには、「<kbd>make all install</kbd>」または「<kbd>make xxx install</kbd>」を実行する。xxxにはプラットフォーム名を指定する。

ビルド後にLuaをローカルへインストールするには、「<kbd>make local</kbd>」を実行する。これにより、`bin`、`include`、`lib`、`man`、`share`の各サブディレクトリを持つ`install`ディレクトリが作成され、以下のとおりLuaがインストールされる。別のディレクトリへローカルインストールするには、「<kbd>make install INSTALL_TOP=xxx</kbd>」を実行する。xxxには選択したディレクトリを指定する。インストールは`src`および`doc`ディレクトリから開始されるため、`INSTALL_TOP`が絶対パスでない場合は注意すること。

**bin:**

lua luac

**include:**

lua.h luaconf.h lualib.h lauxlib.h lua.hpp

**lib:**

liblua.a

**man/man1:**

lua.1 luac.1

開発に必要なのは、これらのディレクトリだけである。Luaプログラムを実行するだけなら、`bin`と`man`のファイルだけが必要となる。LuaをCまたはC++プログラムへ組み込むには、`include`と`lib`のファイルが必要となる。

## <a id="customization"></a>カスタマイズ

ファイルを編集することで、次の3種類の項目をカスタマイズできる。

- Luaのインストール先とインストール方法 — `Makefile`を編集する。
- Luaのビルド方法 — `src/Makefile`を編集する。
- Luaの機能 — `src/luaconf.h`を編集する。

makeを呼び出す際に関連する変数をコマンドラインで設定できるため、実際にはMakefileを編集する必要はない。それでも、加えた変更を記録するためには、Makefileを編集して保存するのが最善だろう。

一方、Luaの機能をカスタマイズする必要がある場合は、Luaをビルドしてインストールする前に`src/luaconf.h`を編集する。編集したファイルがインストールされ、ビルドするすべてのLuaクライアントで使用されるため、一貫性が確保される。専門家はLuaのソースを編集することで、さらにカスタマイズできる。

## <a id="other"></a>その他のシステムでのLuaのビルド

通常のUnixツールを使用していない場合、Luaのビルド手順は使用するコンパイラーによって異なる。次のように、ライブラリ、インタープリター、コンパイラーをビルドするためのプロジェクト（または使用するコンパイラーに相当するもの）を作成する必要がある。

**library:**

lapi.c lcode.c lctype.c ldebug.c ldo.c ldump.c lfunc.c lgc.c llex.c lmem.c lobject.c lopcodes.c lparser.c lstate.c lstring.c ltable.c ltm.c lundump.c lvm.c lzio.c lauxlib.c lbaselib.c lcorolib.c ldblib.c liolib.c lmathlib.c loadlib.c loslib.c lstrlib.c ltablib.c lutf8lib.c linit.c

**interpreter:**

library, lua.c

**compiler:**

library, luac.c

自分のプログラムでLuaをライブラリとして使用するには、使用するコンパイラーでライブラリを作成し利用する方法を理解している必要がある。さらに、Lua用のCライブラリを動的に読み込むには、動的ライブラリの作成方法を理解し、それらの動的ライブラリからLua API関数へアクセスできるようにする必要がある。ただし、個々の動的ライブラリへLuaライブラリをリンクしては*ならない*。Unixでは、Luaライブラリをホストプログラムへ静的にリンクし、そのシンボルを動的リンク用にエクスポートすることを推奨する。`src/Makefile`はLuaインタープリターに対してこれを行う。Windowsでは、LuaライブラリをDLLにすることを推奨する。いずれの場合も、コンパイラーluacは静的にリンクするべきである。

前述のとおり、Luaをビルドする前に`src/luaconf.h`を編集して、いくつかの機能をカスタマイズできる。
