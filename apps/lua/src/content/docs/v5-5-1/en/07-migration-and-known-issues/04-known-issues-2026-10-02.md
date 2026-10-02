---
title: "Known issues in Lua 5.5.1 (2026-10-02 snapshot)"
description: "The complete official Lua 5.5.1 bug report and reproducer acquired on 2026-10-02."
licenseSource: "lua-bugs-2026-10-02"
---

> **Libx snapshot note (2026-10-02, Asia/Tokyo):** This page preserves the official bugs list acquired at 2026-10-01T17:29:12.280720Z. For later reports, see the [current official bugs list](https://www.lua.org/bugs.html#5.5.1). The [2026-08-11 snapshot](/docs/lua/v5-5-1/en/07-migration-and-known-issues/03-known-issues/) is retained separately.

# <a id="5.5.1"></a>Lua 5.5.1 [1](#5.5.1-1)

1. <a id="5.5.1-1"></a>

   'luaO_applyparam' can be called with a negative parameter, causing a negative value to be left-shifted (undefined behavior). reported by Sergey Bronnikov on 26 Aug 2026. existed since 5.0. fixed in [github](https://github.com/lua/lua/commit/0b29f408433e92953cc72b1d3e06c7ac8139e439).

   Example:

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

## Libx license annotation

The description and reproducer on this page were obtained from the official Lua bugs page. No documentation-specific license notice was found. Under the Libx operating policy, the Lua software MIT license is applied with this annotation. This operational decision does not establish an explicit individual permission for the submitted material. The original reporter attribution and the Lua.org and PUC-Rio copyright and permission notices are retained.

Original Lua software license notice ([official source](https://www.lua.org/copyright.html)):

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
