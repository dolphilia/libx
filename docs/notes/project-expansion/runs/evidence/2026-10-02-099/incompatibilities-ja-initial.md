---
title: "Lua 5.4との非互換性"
description: "以前のバージョンとの言語、ライブラリ、APIの非互換性"
---

# 8 – <a id="8"></a>以前のバージョンとの非互換性

ここでは、プログラムをLua 5.4からLua 5.5へ移行するときに遭遇する可能性のある非互換性を列挙します。

適切なオプション（ファイル`luaconf.h`を参照）を指定してLuaをコンパイルすれば、一部の非互換性を回避できます。ただし、これらの互換性オプションは将来すべて削除されます。互換性の問題は、そのオプションが削除されたときに生じることが少なくありません。そのため、機会があるときは、すべての互換性オプションを無効にしてコンパイルしたLuaでコードをテストしてください。これにより、新しいLuaバージョンへの移行が容易になります。

Luaの各バージョンでは、定数の数値や関数のマクロ実装など、プログラムのソースコード変更を伴わない形でC APIが変更される可能性があります。したがって、異なるLuaバージョン間でバイナリ互換性があると仮定してはいけません。新しいバージョンを使うときは、Lua APIのクライアントを必ず再コンパイルしてください。

同様に、プリコンパイル済みチャンクの内部表現はLuaの各バージョンで変更される可能性があります。プリコンパイル済みチャンクには異なるLuaバージョン間の互換性がありません。

公式配布物の標準パスは、バージョン間で変更される可能性があります。

## 8.1 – <a id="8.1"></a>言語の非互換性

- 単語
  
  **global**
  
  は予約語です。通常の名前として使わないでください。
  
  コンパイルオプション`LUA_COMPAT_GLOBAL`（`luaconf.h`を参照）は`global`を通常の単語にします。
- 
  **for**
  
  ループの制御変数は読み取り専用です。変更する必要がある場合は、ループ本体で同じ名前のローカル変数を宣言してください。
- 
  `__call`
  
  メタメソッドの連鎖は最大15オブジェクトです。
- エラーでは、エラーオブジェクトが
  
  **nil**
  
  の場合、文字列メッセージに置き換えられます。

## 8.2 – <a id="8.2"></a>ライブラリの非互換性

- ガベージコレクションの引数は、オプション"
  
  `incremental`
  
  "と"
  
  `generational`
  
  "では設定しません。代わりに、この目的のための新しいオプション"
  
  `param`
  
  "があります。さらに、引数自体にもいくつかの変更があります。

## 8.3 – <a id="8.3"></a>APIの非互換性

- 
  [`lua_call`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_call)
  
  と関連関数では、要求する結果数（
  
  `nresults`
  
  ）の最大値は250です。さらに大きな値が本当に必要なら、
  
  [`LUA_MULTRET`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#pdf-LUA_MULTRET)
  
  を使い、その後でスタックサイズを調整してください。以前、この制限は規定されていませんでした。
- [`lua_newstate`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_newstate)
  
  には第3引数として、文字列ハッシュ用のシードがあります。
- 関数
  
  `lua_resetthread`
  
  は非推奨です。これは
  
  [`lua_closethread`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_closethread)
  
  の
  
  `from`
  
  を
  
  `NULL`
  
  としたものと等価です。
- 関数
  
  `lua_setcstacklimit`
  
  は非推奨です。この関数の呼び出しは単純に削除できます。
- 関数
  
  [`lua_dump`](/docs/lua/v5-5-1/ja/03-c-api/08-functions-and-types-concat-gc/#lua_dump)
  
  は、writer関数の呼び出しを通じてスタックを保持する方法が変更されました。（以前のバージョンでは規定されていませんでした。）また、ダンプの終了を通知するためにwriter関数をもう一度呼び出します。
- ガベージコレクションの引数は、オプション
  
  [`LUA_GCINC`](/docs/lua/v5-5-1/ja/03-c-api/08-functions-and-types-concat-gc/#pdf-LUA_GCINC)
  
  と
  
  [`LUA_GCGEN`](/docs/lua/v5-5-1/ja/03-c-api/08-functions-and-types-concat-gc/#pdf-LUA_GCGEN)
  
  では設定しません。代わりに、この目的のための新しいオプション
  
  [`LUA_GCPARAM`](/docs/lua/v5-5-1/ja/03-c-api/08-functions-and-types-concat-gc/#pdf-LUA_GCPARAM)
  
  があります。さらに、引数自体にもいくつかの変更があります。
- 関数
  
  [`lua_pushvfstring`](/docs/lua/v5-5-1/ja/03-c-api/12-functions-and-types-pop-push/#lua_pushvfstring)
  
  は、エラーを発生させる代わりに報告するようになりました。
