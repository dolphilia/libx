---
title: "モジュール"
description: "パッケージとモジュール読み込みのリファレンス"
---

# 6.4 – <a id="6.4"></a>モジュール

パッケージライブラリは、Luaでモジュールを読み込むための基本的な機能を提供します。1つの関数[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)をグローバル環境へ直接エクスポートします。そのほかはすべてテーブル<a id="pdf-package"></a>`package`へエクスポートされます。

---

## <a id="pdf-require"></a>`require (modname)`

指定されたモジュールを読み込みます。関数は最初に[`package.loaded`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.loaded)テーブルを調べ、`modname`がすでに読み込まれているかを判定します。読み込まれていれば、`require`は`package.loaded[modname]`に保存された値を返します。（この場合に第2結果がないことは、この呼び出しでモジュールを読み込む必要がなかったことを示します。）それ以外の場合、モジュールの*ローダー*を探します。

ローダーを探すとき、`require`はテーブル[`package.searchers`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.searchers)に従います。このテーブルの各項目は、特定の方法でモジュールを検索する検索関数です。このテーブルを変更すると、`require`がモジュールを探す方法を変更できます。以下の説明は[`package.searchers`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.searchers)のデフォルト設定に基づきます。

最初に`require`は`package.preload[modname]`を問い合わせます。値があれば、その値（関数でなければなりません）がローダーです。それ以外の場合、`require`は[`package.path`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.path)に保存されたパスを使ってLuaローダーを検索します。それにも失敗すると、[`package.cpath`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.cpath)に保存されたパスを使ってCローダーを検索します。それにも失敗すると、*オールインワン*ローダーを試します（[`package.searchers`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.searchers)を参照）。

ローダーが見つかると、`require`は2つの引数、`modname`と、検索関数も返した追加値である*ローダーデータ*を指定してローダーを呼び出します。ローダーデータにはモジュールに役立つ任意の値を使用できます。デフォルトの検索関数では、ローダーが見つかった場所を示します。（たとえば、ローダーがファイルから得られた場合、この追加値はファイルパスです。）ローダーがnilでない値を返すと、`require`は返された値を`package.loaded[modname]`へ代入します。ローダーがnilでない値を返さず、`package.loaded[modname]`へ値を代入してもいなければ、`require`はこの項目へ**true**を代入します。どの場合も、`require`は`package.loaded[modname]`の最終値を返します。その値に加え、`require`は第2結果として、検索関数が返したローダーデータも返します。これは`require`がモジュールを見つけた方法を示します。

モジュールの読み込みまたは実行中にエラーがある場合、あるいはモジュールのローダーを見つけられない場合、`require`はエラーを発生させます。

---

## <a id="pdf-package.config"></a>`package.config`

パッケージのコンパイル時設定の一部を表す文字列です。この文字列は次の行の列です。

- 第1行はディレクトリ区切り文字列です。デフォルトはWindowsでは'
  
  `\`
  
  '、そのほかのすべてのシステムでは'
  
  `/`
  
  'です。
- 第2行はパス内のテンプレートを区切る文字です。デフォルトは'
  
  `;`
  
  'です。
- 第3行はテンプレート内の置換地点を示す文字列です。デフォルトは'
  
  `?`
  
  'です。
- 第4行は、Windowsのパス内で実行ファイルのディレクトリへ置き換えられる文字列です。デフォルトは'
  
  `!`
  
  'です。
- 第5行は、
  
  `luaopen_`
  
  関数名を構築するとき、その後のすべてのテキストを無視するための記号です。デフォルトは'
  
  `-`
  
  'です。

---

## <a id="pdf-package.cpath"></a>`package.cpath`

[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)がCローダーを検索するために使うパスを持つ文字列です。

Luaは、環境変数<a id="pdf-LUA_CPATH_5_5"></a>`LUA_CPATH_5_5`、環境変数<a id="pdf-LUA_CPATH"></a>`LUA_CPATH`、または`luaconf.h`で定義されたデフォルトパスを使い、Luaパス[`package.path`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.cpath)と同じ方法でCパス[`package.cpath`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.path)を初期化します。

---

## <a id="pdf-package.loaded"></a>`package.loaded`

どのモジュールがすでに読み込まれているかを[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)が管理するために使うテーブルです。モジュール`modname`をrequireするとき、`package.loaded[modname]`がfalseでなければ、[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)はそこに保存された値をそのまま返します。

この変数は実際のテーブルへの参照にすぎません。この変数へ代入しても、[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)が使うテーブルは変わりません。実際のテーブルはCレジストリ（[§4.3](/docs/lua/v5-5-1/ja/03-c-api/04-registry/#4.3)を参照）に、文字列であるキー<a id="pdf-LUA_LOADED_TABLE"></a>`LUA_LOADED_TABLE`でインデックスを付けて保存されています。

---

## <a id="pdf-package.loadlib"></a>`package.loadlib (libname, funcname)`

ホストプログラムをCライブラリ`libname`へ動的リンクします。

`funcname`が"`*`"なら、ライブラリへリンクするだけで、そのライブラリがエクスポートするシンボルを、動的リンクされるほかのライブラリから利用できるようにします。それ以外の場合、ライブラリ内で関数`funcname`を探し、その関数をC関数として返します。したがって、`funcname`は[`lua_CFunction`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_CFunction)プロトタイプに従う必要があります（[`lua_CFunction`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_CFunction)を参照）。

これは低水準の関数です。パッケージとモジュールのシステムを完全に迂回します。[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)とは異なり、パス検索を行わず、拡張子も自動的に追加しません。`libname`は、必要ならパスと拡張子を含むCライブラリの完全なファイル名でなければなりません。`funcname`はCライブラリがエクスポートする正確な名前でなければなりません（使用するCコンパイラーとリンカーに依存する場合があります）。

この機能はISO Cでサポートされません。そのため、`loadlib`はLinux、Windows、Mac OS X、Solaris、BSD、および`dlfcn`標準をサポートするそのほかのUnixシステムなど、一部のプラットフォームでのみ利用できます。

この関数は、Luaがシステム内の任意の読み取り可能な動的ライブラリの任意の関数を呼び出せるようにするため、本質的に安全ではありません。（Luaは、任意の関数が適切なプロトタイプを持ち、適切なプロトコルに従うと仮定して呼び出します（[`lua_CFunction`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_CFunction)を参照）。したがって、任意の動的ライブラリ内の任意の関数を呼び出すと、多くの場合アクセス違反になります。）

---

## <a id="pdf-package.path"></a>`package.path`

[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)がLuaローダーを検索するために使うパスを持つ文字列です。

起動時にLuaは、環境変数<a id="pdf-LUA_PATH_5_5"></a>`LUA_PATH_5_5`の値、環境変数<a id="pdf-LUA_PATH"></a>`LUA_PATH`の値、または、これらの環境変数が定義されていなければ`luaconf.h`で定義されたデフォルトパスで、この変数を初期化します。環境変数の値にある"`;;`"はデフォルトパスへ置き換えられます。

---

## <a id="pdf-package.preload"></a>`package.preload`

特定のモジュールのローダーを保存するテーブルです（[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)を参照）。

この変数は実際のテーブルへの参照にすぎません。この変数へ代入しても、[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)が使うテーブルは変わりません。実際のテーブルはCレジストリ（[§4.3](/docs/lua/v5-5-1/ja/03-c-api/04-registry/#4.3)を参照）に、文字列であるキー<a id="pdf-LUA_PRELOAD_TABLE"></a>`LUA_PRELOAD_TABLE`でインデックスを付けて保存されています。

---

## <a id="pdf-package.searchers"></a>`package.searchers`

モジュールを探す方法を[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)が管理するために使うテーブルです。

このテーブルの各項目は*検索関数*です。モジュールを探すとき、[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)は、モジュール名（[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)へ渡された引数）だけを引数として、これらの検索関数を昇順で呼び出します。検索関数がモジュールを見つけると、別の関数であるモジュールの*ローダー*と、ローダーへ渡され、[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)の第2結果として返される追加値である*ローダーデータ*を返します。モジュールを見つけられなければ、理由を説明する文字列（何も伝えることがなければ**nil**）を返します。

Luaはこのテーブルを4つの検索関数で初期化します。

第1検索関数は、[`package.preload`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.preload)テーブル内でローダーを探すだけです。

第2検索関数は、[`package.path`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.path)に保存されたパスを使い、Luaライブラリとしてローダーを探します。検索は関数[`package.searchpath`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.searchpath)で説明されている方法で行われます。

第3検索関数は、変数[`package.cpath`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.cpath)が指定するパスを使い、Cライブラリとしてローダーを探します。ここでも、検索は関数[`package.searchpath`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.searchpath)で説明されている方法で行われます。たとえば、Cパスが次の文字列なら

```lua
     "./?.so;./?.dll;/usr/local/?/init.so"
```

モジュール`foo`の検索関数は、ファイル`./foo.so`、`./foo.dll`、`/usr/local/foo/init.so`をこの順で開こうとします。Cライブラリを見つけると、この検索関数は最初に動的リンク機能を使ってアプリケーションをライブラリへリンクします。次に、ローダーとして使うC関数をライブラリ内で探します。このC関数の名前は、文字列"`luaopen_`"と、各ドットをアンダースコアに置き換えたモジュール名のコピーを連結したものです。さらに、モジュール名にハイフンがある場合、最初のハイフン以降（ハイフンを含む）の接尾辞を削除します。たとえば、モジュール名が`a.b.c-v2.1`なら、関数名は`luaopen_a_b_c`になります。

第4検索関数は*オールインワンローダー*を試します。指定されたモジュールのルート名を持つライブラリをCパスで検索します。たとえば、`a.b.c`をrequireするとき、`a`のCライブラリを検索します。見つかると、その中でサブモジュールのopen関数を探します。この例では`luaopen_a_b_c`です。この機能により、各サブモジュールが元のopen関数を保ったまま、1つのパッケージへ複数のCサブモジュールをまとめられます。

第1検索関数（preload）を除くすべての検索関数は、[`package.searchpath`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.searchpath)が返した、モジュールが見つかったファイルパスを追加値として返します。第1検索関数は常に文字列"`:preload:`"を返します。

検索関数はエラーを発生させず、Luaで副作用を持つべきではありません。（たとえばアプリケーションをライブラリへリンクすることで、Cでは副作用を持つ場合があります。）

---

## <a id="pdf-package.searchpath"></a>`package.searchpath (name, path [, sep [, rep]])`

指定された`path`内で、指定された`name`を検索します。

パスは、セミコロンで区切られた一連の*テンプレート*を含む文字列です。関数は各テンプレートについて、テンプレート内の各疑問符（存在する場合）を、`name`内の`sep`（デフォルトではドット）をすべて`rep`（デフォルトではシステムのディレクトリ区切り）へ置き換えたコピーで置換し、その結果のファイル名を開こうとします。

たとえば、パスが次の文字列なら

```lua
     "./?.lua;./?.lc;/usr/local/?/init.lua"
```

名前`foo.a`の検索は、ファイル`./foo/a.lua`、`./foo/a.lc`、`/usr/local/foo/a/init.lua`をこの順で開こうとします。

読み取りモードで開けた最初のファイルについて、ファイルを閉じた後、その結果の名前を返します。どれも成功しなければ、**fail**とエラーメッセージを返します。（このエラーメッセージは、開こうとしたすべてのファイル名を列挙します。）
