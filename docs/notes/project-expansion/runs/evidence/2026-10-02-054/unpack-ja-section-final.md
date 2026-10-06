## <a id="pdf-string.unpack"></a>`string.unpack (fmt, s [, pos])`

書式文字列`fmt`（[§6.5.2](/docs/lua/v5-5-1/ja/05-standard-library/06-string-manipulation/#6.5.2)を参照）に従い、文字列`s`にパックされた値（[`string.pack`](/docs/lua/v5-5-1/ja/05-standard-library/06-string-manipulation/#pdf-string.pack)を参照）を返します。省略可能な`pos`は`s`内で読み始める位置を示し、既定値は1です。この関数は読み取った値の後に、`s`内で最初の未読バイトのインデックスも返します。
