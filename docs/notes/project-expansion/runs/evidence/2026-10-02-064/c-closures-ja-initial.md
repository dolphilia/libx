---
title: "Cクロージャー"
description: "C関数、上位値、Cクロージャー"
---

# 4.2 – <a id="4.2"></a>Cクロージャー

C関数を作成するとき、その関数にいくつかの値を関連付けて、*Cクロージャー*を作成できます（[`lua_pushcclosure`](/docs/lua/v5-5-1/ja/03-c-api/12-functions-and-types-pop-push/#lua_pushcclosure)を参照）。これらの値は*上位値*と呼ばれ、関数が呼び出されるたびにその関数からアクセスできます。

C関数が呼び出されるたびに、その上位値は特定の疑似インデックスに置かれます。これらの疑似インデックスはマクロ[`lua_upvalueindex`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_upvalueindex)によって生成されます。関数に関連付けられた最初の上位値はインデックス`lua_upvalueindex(1)`にあり、以降も同様です。現在の関数の上位値数より*n*が大きい（ただし、クロージャーの上位値最大数に1を加えた256以下）`lua_upvalueindex(n)`へのアクセスは、許容されるものの無効なインデックスを生成します。

Cクロージャーは、対応する上位値の値を変更することもできます。
