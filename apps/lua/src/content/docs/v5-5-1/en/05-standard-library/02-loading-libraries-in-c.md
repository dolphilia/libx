---
title: "Loading libraries in C code"
description: "Open functions and selective standard-library loading"
licenseSource: "lua-5.5.1"
---

# 6.1 – <a id="6.1"></a>Loading the Libraries in C code

A C host program must explicitly load the standard libraries into a state, if it wants its scripts to use them. For that, the host program can call the function [`luaL_openlibs`](/docs/lua/v5-5-1/en/05-standard-library/02-loading-libraries-in-c/#luaL_openlibs). Alternatively, the host can select which libraries to open, by using [`luaL_openselectedlibs`](/docs/lua/v5-5-1/en/05-standard-library/02-loading-libraries-in-c/#luaL_openselectedlibs). Both functions are declared in the header file `lualib.h`.

The stand-alone interpreter `lua` (see [§7](/docs/lua/v5-5-1/en/06-tools/01-lua-standalone/#7)) already opens all standard libraries.

---

## <a id="luaL_openlibs"></a>`luaL_openlibs`

[-0, +0, *e*]

```lua
void luaL_openlibs (lua_State *L);
```

Opens all standard Lua libraries into the given state.

---

## <a id="luaL_openselectedlibs"></a>`luaL_openselectedlibs`

[-0, +0, *e*]

```lua
void luaL_openselectedlibs (lua_State *L, int load, int preload);
```

Opens (loads) and preloads selected standard libraries into the state `L`. (To *preload* means to add the library loader into the table [`package.preload`](/docs/lua/v5-5-1/en/05-standard-library/05-modules/#pdf-package.preload), so that the library can be required later by the program. Keep in mind that [`require`](/docs/lua/v5-5-1/en/05-standard-library/05-modules/#pdf-require) itself is provided by the *package* library. If a program does not load that library, it will be unable to require anything.)

The integer `load` selects which libraries to load; the integer `preload` selects which to preload, among those not loaded. Both are masks formed by a bitwise OR of the following constants:

- **<a id="pdf-LUA_GLIBK"></a>`LUA_GLIBK`**: the basic library.
- **<a id="pdf-LUA_LOADLIBK"></a>`LUA_LOADLIBK`**: the package library.
- **<a id="pdf-LUA_COLIBK"></a>`LUA_COLIBK`**: the coroutine library.
- **<a id="pdf-LUA_STRLIBK"></a>`LUA_STRLIBK`**: the string library.
- **<a id="pdf-LUA_UTF8LIBK"></a>`LUA_UTF8LIBK`**: the UTF-8 library.
- **<a id="pdf-LUA_TABLIBK"></a>`LUA_TABLIBK`**: the table library.
- **<a id="pdf-LUA_MATHLIBK"></a>`LUA_MATHLIBK`**: the mathematical library.
- **<a id="pdf-LUA_IOLIBK"></a>`LUA_IOLIBK`**: the I/O library.
- **<a id="pdf-LUA_OSLIBK"></a>`LUA_OSLIBK`**: the operating system library.
- **<a id="pdf-LUA_DBLIBK"></a>`LUA_DBLIBK`**: the debug library.
