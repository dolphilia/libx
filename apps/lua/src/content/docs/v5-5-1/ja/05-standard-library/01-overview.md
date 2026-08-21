---
title: "標準ライブラリの概要"
description: "Lua標準ライブラリと読み込み規約"
---

# 6 – <a id="6"></a>標準ライブラリ

Luaの標準ライブラリは、C APIを通じてCで実装された便利な関数を提供します。一部の関数は、言語に不可欠なサービス（例：[`type`](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#pdf-type)や[`getmetatable`](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#pdf-getmetatable)）を提供します。ほかには、外部サービス（例：I/O）へのアクセスを提供する関数や、Lua自体でも実装できるものの、さまざまな理由からCで実装するに値する関数（例：[`table.sort`](/docs/lua/v5-5-1/ja/05-standard-library/08-table-manipulation/#pdf-table.sort)）があります。

すべてのライブラリは公式C APIを通じて実装され、独立したCモジュールとして提供されます。特に記載がない限り、これらのライブラリ関数は、引数の数を期待する仮引数の数に合わせて調整しません。たとえば、`foo(arg)`と記載された関数を引数なしで呼び出してはいけません。

**fail**という表記は、何らかの失敗を表す偽の値を意味します。（現在、**fail**は**nil**と同じですが、将来のバージョンでは変更される可能性があります。これらの関数の成功を調べるときは、常に`(status == nil)`ではなく`(not status)`を使うことを推奨します。）

現在、Luaには次の標準ライブラリがあります。

- 基本ライブラリ（
  
  [§6.2](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#6.2)
  
  ）
- コルーチンライブラリ（
  
  [§6.3](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#6.3)
  
  ）
- パッケージライブラリ（
  
  [§6.4](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#6.4)
  
  ）
- 文字列操作（
  
  [§6.5](/docs/lua/v5-5-1/ja/05-standard-library/06-string-manipulation/#6.5)
  
  ）
- 基本的なUTF-8サポート（
  
  [§6.6](/docs/lua/v5-5-1/ja/05-standard-library/07-utf8-support/#6.6)
  
  ）
- テーブル操作（
  
  [§6.7](/docs/lua/v5-5-1/ja/05-standard-library/08-table-manipulation/#6.7)
  
  ）
- 数学関数（
  
  [§6.8](/docs/lua/v5-5-1/ja/05-standard-library/09-mathematical-functions/#6.8)
  
  ）（sin、logなど）
- 入出力（
  
  [§6.9](/docs/lua/v5-5-1/ja/05-standard-library/10-input-and-output/#6.9)
  
  ）
- オペレーティングシステム機能（
  
  [§6.10](/docs/lua/v5-5-1/ja/05-standard-library/11-operating-system/#6.10)
  
  ）
- デバッグ機能（
  
  [§6.11](/docs/lua/v5-5-1/ja/05-standard-library/12-debug-library/#6.11)
  
  ）

基本ライブラリとパッケージライブラリを除き、各ライブラリはすべての関数をグローバルテーブルのフィールドまたは自身のオブジェクトのメソッドとして提供します。
