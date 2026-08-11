---
title: "Registry"
description: "The Lua registry and reserved keys"
licenseSource: "lua-5.5.1"
---

# 4.3 – <a id="4.3"></a>Registry

Lua provides a *registry*, a predefined table that can be used by any C code to store whatever Lua values it needs to store. The registry table is always accessible at pseudo-index <a id="pdf-LUA_REGISTRYINDEX"></a>`LUA_REGISTRYINDEX`. Any C library can store data into this table, but it must take care to choose keys that are different from those used by other libraries, to avoid collisions. Typically, you should use as key a string containing your library name, or a light userdata with the address of a C object in your code, or any Lua object created by your code. As with variable names, string keys starting with an underscore followed by uppercase letters are reserved for Lua.

The integer keys in the registry are used by the reference mechanism (see [`luaL_ref`](/docs/lua/v5-5-1/en/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_ref)), with some predefined values. Therefore, integer keys in the registry must not be used for other purposes.

When you create a new Lua state, its registry comes with some predefined values. These predefined values are indexed with integer keys defined as constants in `lua.h`. The following constants are defined:

- **<a id="pdf-LUA_RIDX_MAINTHREAD"></a>`LUA_RIDX_MAINTHREAD`**: At this index the registry has the main thread of the state. (The main thread is the one created together with the state.)
- **<a id="pdf-LUA_RIDX_GLOBALS"></a>`LUA_RIDX_GLOBALS`**: At this index the registry has the global environment.
