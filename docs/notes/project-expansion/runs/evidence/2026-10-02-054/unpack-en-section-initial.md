## <a id="pdf-string.unpack"></a>`string.unpack (fmt, s [, pos])`

Returns the values packed in string `s` (see [`string.pack`](/docs/lua/v5-5-1/en/05-standard-library/06-string-manipulation/#pdf-string.pack)) according to the format string `fmt` (see [§6.5.2](/docs/lua/v5-5-1/en/05-standard-library/06-string-manipulation/#6.5.2)). An optional `pos` marks where to start reading in `s` (default is 1). After the read values, this function also returns the index of the first unread byte in `s`.
