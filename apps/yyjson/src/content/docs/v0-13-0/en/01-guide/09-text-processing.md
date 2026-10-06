---
title: "Text Processing"
documentId: "yyjson:01-guide/09-text-processing.md"
order: 9
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/API.md#L1645-L1684\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/yyjson/source/v0-13-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定Markdown7資料とSVG7図、英語原文19ページ・非公式日本語訳16ガイドの編集原稿、再生成入力、原MIT通知、共有ビルドコードと再構築手順を含みます。更新履歴・原著Performance TODO・MIT通知の3資料は未翻訳の英語原文です。各ファイルの条件を参照してください。</p>"}]
---
# Text Processing

## Character Encoding
By default, this library supports UTF-8 encoding without a BOM, as specified in [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259#section-8.1):

> JSON text exchanged between systems that are not part of a closed ecosystem MUST be encoded using UTF-8.
> Implementations MUST NOT add a byte order mark (U+FEFF) to the beginning of a networked-transmitted JSON text.

This library performs strict UTF-8 encoding validation on input strings by default. If an invalid character is encountered, an error will be reported.

To allow a BOM, use the `YYJSON_READ_ALLOW_BOM` or `YYJSON_READ_ALLOW_EXT_WHITESPACE` flags.

To allow invalid Unicode encoding, use the `YYJSON_READ_ALLOW_INVALID_UNICODE` and `YYJSON_WRITE_ALLOW_INVALID_UNICODE` flags. **Note:** Enabling these flags may result in yyjson producing values that contain invalid characters, which could be processed by other code and potentially introduce security risks.

To mark a string as not requiring escaping during JSON writing, use `yyjson_set_str_noesc(yyjson_val *val, bool noesc)` or `yyjson_mut_set_str_noesc(yyjson_mut_val *val, bool noesc)`.  This can improve string-writing performance and preserve the original string bytes.

## NUL Character
This library supports the `NUL` character (also known as the `null terminator`, or Unicode `U+0000`, ASCII `\0`) inside strings.

When reading JSON, `\u0000` will be unescaped to `NUL` character. If a string contains the `NUL` character, the length obtained with `strlen()` will be inaccurate, and you should use `yyjson_get_len()` to get the actual length.

When building JSON, the input string is treated as null-terminated by default. If you need to pass in a string that contains the `NUL` character, you should use the API with the `n` suffix and provide the actual length of the string.

For example:
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



