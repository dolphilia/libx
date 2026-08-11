---
title: "Changes since Lua 5.4"
description: "Main changes introduced in Lua 5.5"
licenseSource: "lua-5.5.1"
---

# <a id="changes"></a>Changes since Lua 5.4

Here are the main changes introduced in Lua 5.5. The [reference manual](https://www.lua.org/manual/5.5/contents.html) lists the [incompatibilities](/docs/lua/v5-5-1/en/07-migration-and-known-issues/02-incompatibilities/#8) that had to be introduced.

## Main changes

- declarations for global variables
- named vararg tables
- for-loop variables are read only
- floats are printed in decimal with enough digits to be read back correctly.
- more levels for constructors
- table.create
- utf8.offset returns also final position of character
- external strings (that use memory not managed by Lua)
- new functions luaL_openselectedlibs and luaL_makeseed
- major garbage collections done incrementally
- more compact arrays (large arrays use about 60% less memory)
- lua.c loads 'readline' dynamically
- static (fixed) binaries (when loading a binary chunk in memory, Lua can reuse its original memory in some of the internal structures)
- dump and undump reuse all strings
- auxiliary buffer reuses buffer when it creates final string
