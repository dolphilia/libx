<a id="text-processing"></a>
# 文字列の処理

<a id="character-encoding"></a>
## 文字エンコーディング

既定では、ライブラリは[RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259#section-8.1)に規定された、BOMなしのUTF-8エンコーディングに対応します。

> 閉じたエコシステムの一部ではないシステム間で交換されるJSONテキストは、UTF-8でエンコードしなければなりません。
> 実装は、ネットワークで送信するJSONテキストの先頭に、バイトオーダーマーク（U+FEFF）を追加してはなりません。

ライブラリは、既定で入力文字列に対して厳密なUTF-8エンコーディングの検証を行います。無効な文字がある場合は、エラーを報告します。

BOMを許可するには、`YYJSON_READ_ALLOW_BOM`または`YYJSON_READ_ALLOW_EXT_WHITESPACE`フラグを使います。

無効なUnicodeエンコーディングを許可するには、`YYJSON_READ_ALLOW_INVALID_UNICODE`と`YYJSON_WRITE_ALLOW_INVALID_UNICODE`フラグを使います。**注意**：これらのフラグを有効にすると、yyjsonが無効な文字を含む値を生成する場合があります。その値をほかのコードが処理することで、セキュリティー上のリスクが生じる可能性があります。

JSONを書き出す際に、エスケープが不要な文字列であることを指定するには、`yyjson_set_str_noesc(yyjson_val *val, bool noesc)`または`yyjson_mut_set_str_noesc(yyjson_mut_val *val, bool noesc)`を使います。これにより、文字列の書き出し性能を向上させ、元の文字列のバイト列を保持できます。

<a id="nul-character"></a>
## NUL文字

ライブラリは、文字列内の`NUL`文字に対応します。これは`null terminator`（NUL終端文字）、Unicodeの`U+0000`、ASCIIの`\0`としても知られています。

JSONを読み込むとき、`\u0000`はエスケープが解除され、`NUL`文字になります。文字列に`NUL`文字が含まれる場合、`strlen()`で得られる長さは不正確になるため、実際の長さは`yyjson_get_len()`で取得する必要があります。

JSONを構築するとき、入力文字列は既定でNUL終端として扱います。`NUL`文字を含む文字列を渡す必要がある場合は、`n`サフィックス付きのAPIを使い、文字列の実際の長さを指定する必要があります。

例：
```c
// null-terminated string
yyjson_mut_str(doc, str);
yyjson_obj_get(obj, str);

// any string, with or without null terminator
yyjson_mut_strn(doc, str, len);
yyjson_obj_getn(obj, str, len);

// C++ string
std::string sstr = ...;
yyjson_obj_getn(obj, sstr.data(), sstr.length());
```
