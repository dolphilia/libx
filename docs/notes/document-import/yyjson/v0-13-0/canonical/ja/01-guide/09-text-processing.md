---
title: "テキスト処理"
documentId: "yyjson:01-guide/09-text-processing.md"
order: 9
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/API.md#L1645-L1684\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/yyjson/source/v0-13-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定Markdown7資料とSVG7図、英語原文19ページ・非公式日本語訳16ガイドの編集原稿、再生成入力、原MIT通知、共有ビルドコードと再構築手順を含みます。更新履歴・原著Performance TODO・MIT通知の3資料は未翻訳の英語原文です。各ファイルの条件を参照してください。</p>"}]
---
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
