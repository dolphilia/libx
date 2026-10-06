---
title: "Lua 5.5.1 の既知の不具合（2026-10-02 取得版）"
description: "2026-10-02 に取得した Lua 5.5.1 の公式不具合報告と再現例の全文。"
licenseSource: "lua-bugs-2026-10-02"
---

> **Libx 取得版の注記（2026-10-02、Asia/Tokyo）：** このページは、2026-10-01T17:29:12.280720Z に取得した公式の不具合一覧を保持しています。その後の報告は、[現在の公式不具合一覧](https://www.lua.org/bugs.html#5.5.1)を参照してください。[2026-08-11 取得版](/docs/lua/v5-5-1/ja/07-migration-and-known-issues/03-known-issues/)は別に保持しています。

# <a id="5.5.1"></a>Lua 5.5.1 [1](#5.5.1-1)

1. <a id="5.5.1-1"></a>

   'luaO_applyparam' は負のパラメーターで呼び出されることがあり、その結果、負の値が左シフトされます（未定義動作）。Sergey Bronnikov が 2026 年 8 月 26 日に報告しました。この不具合は 5.0 から存在します。修正は [github](https://github.com/lua/lua/commit/0b29f408433e92953cc72b1d3e06c7ac8139e439) にあります。

   例：

   ```lua
   -- To be run with Lua compiled with -fsanitize=undefined

   local lim = 1e6

   -- make major collections non-incremental
   collectgarbage("param", "stepmul", 0)

   -- make "majorminor" large enough to force a left-shift
   -- when applying the parameter (internal details)
   collectgarbage("param", "majorminor", 2000)

   collectgarbage(); collectgarbage()

   local M = collectgarbage"count"

   -- create a large table
   local t = {}
   for i = 1, lim do t[i] = true end
   assert(collectgarbage"count" > M + (lim * string.packsize"j")/1024)

   -- force collector to "generational major" mode
   collectgarbage"step"
   collectgarbage"step"
   collectgarbage"step"
   assert(not T or T.gcquery() == "genmajor")

   -- shrink the table
   for i = 1, lim do t[i] = nil end
   t[2 * lim] = true
   assert(collectgarbage"count" < M * 5/4)

   collectgarbage"step"   -- assert violation
   ```

## Libx のライセンス適用注釈

このページの説明と再現例はLua公式の既知不具合一覧から取得したものです。文書専用のライセンス表記は見つからなかったため、Libxの運用方針に基づきLua本体のMITライセンスを注釈付きで適用しています。この判断は、当該投稿素材への個別許諾が明示されていることを意味しません。原文の報告者表示とLua.org・PUC-Rioの著作権・許諾通知を保持しています。

Lua 本体のライセンス原文通知（[公式出典](https://www.lua.org/copyright.html)）：

```text
Copyright © 1994–2026 Lua.org, PUC-Rio.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
