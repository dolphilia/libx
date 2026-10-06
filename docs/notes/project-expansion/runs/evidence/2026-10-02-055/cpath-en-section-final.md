## <a id="pdf-package.cpath"></a>`package.cpath`

A string with the path used by [`require`](/docs/lua/v5-5-1/en/05-standard-library/05-modules/#pdf-require) to search for a C loader.

Lua initializes the C path [`package.cpath`](/docs/lua/v5-5-1/en/05-standard-library/05-modules/#pdf-package.cpath) in the same way it initializes the Lua path [`package.path`](/docs/lua/v5-5-1/en/05-standard-library/05-modules/#pdf-package.path), using the environment variable <a id="pdf-LUA_CPATH_5_5"></a>`LUA_CPATH_5_5`, or the environment variable <a id="pdf-LUA_CPATH"></a>`LUA_CPATH`, or a default path defined in `luaconf.h`.

