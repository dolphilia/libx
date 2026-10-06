---
title: "Lua 5.4からの変更"
description: "Lua 5.5で導入された主な変更"
---

# <a id="changes"></a>Lua 5.4からの変更

Lua 5.5で導入された主な変更を以下に示す。[リファレンスマニュアル](https://www.lua.org/manual/5.5/contents.html)には、導入する必要があった[非互換性](/docs/lua/v5-5-1/ja/07-migration-and-known-issues/02-incompatibilities/#8)が列挙されている。

## 主な変更

- グローバル変数の宣言
- 名前付き可変長引数テーブル
- forループ変数の読み取り専用化
- 再び正しく読み取るために十分な桁数を使った、浮動小数点数の10進表記
- コンストラクターで利用できる階層数の増加
- table.create
- utf8.offsetが文字の最終位置も返すように変更
- Luaが管理しないメモリを使用する外部文字列
- 新関数luaL_openselectedlibsおよびluaL_makeseed
- メジャーガベージコレクションのインクリメンタルな実行
- よりコンパクトな配列（大きな配列が使用するメモリを約60%削減）
- lua.cによる'readline'の動的読み込み
- 静的（固定）バイナリー（メモリ内のバイナリーチャンクを読み込むとき、Luaが一部の内部構造で元のメモリを再利用できる）
- dumpとundumpによるすべての文字列の再利用
- 最終文字列を作成するときの補助バッファーの再利用
