## <a id="pdf-package.cpath"></a>`package.cpath`

[`require`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-require)がCローダーを検索するために使うパスを持つ文字列です。

Luaは、環境変数<a id="pdf-LUA_CPATH_5_5"></a>`LUA_CPATH_5_5`、環境変数<a id="pdf-LUA_CPATH"></a>`LUA_CPATH`、または`luaconf.h`で定義されたデフォルトパスを使い、Luaパス[`package.path`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.path)と同じ方法でCパス[`package.cpath`](/docs/lua/v5-5-1/ja/05-standard-library/05-modules/#pdf-package.cpath)を初期化します。

