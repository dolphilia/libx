---
title: "Zstandard: スキップ可能なフレーム"
description: "形式仕様0.4.3 — スキップ可能なフレーム"
documentId: "zstd-format-05-skippable-frames"
order: 5
licenseSource: "zstd-format-0.4.3"
documentContext: [{"kind":"source","html":"<p>Meta Platforms, Inc. and affiliatesによるZstandard 1.5.7収録の形式仕様0.4.3（2024-10-07）。<a href=\"https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md\">固定原典</a>・<a href=\"/docs/zstd/source/v1-5-7/zstd_compression_format.md\">原文Markdown全文</a>・<a href=\"/docs/zstd/source/v1-5-7/NOTICE.txt\">原許諾通知</a>。</p>"},{"kind":"editorial","html":"<p>Libxによる非公式日本語訳です。固定形式仕様の全文を9章の静的文書として提供します。CLI・API・実装固有の挙動は収録範囲外で、原典を参照してください。分割に伴い原見出しIDを追加し内部参照を対応付け、圧縮ブロックへの原参照切れ1件を補正しました。英語の原通知を保持し、第1章には通知の日本語訳を併記しています。</p>"}]
---

<a id="source-skippable-frames"></a>

## スキップ可能なフレーム

| `Magic_Number` | `Frame_Size` | `User_Data` |
|:--------------:|:------------:|:-----------:|
| 4バイト | 4バイト | nバイト |

スキップ可能なフレームによって、連結されたフレームの流れに、ユーザー定義のメタデータを挿入できます。

本仕様で定義するスキップ可能なフレームは、[LZ4](https://lz4.github.io/lz4/)のものと互換性があります。

準拠するデコーダーは、スキップ可能なフレームを単に読み飛ばして内容を無視し、そのフレームの後から復号を再開すればよいことになります。

スキップ可能なフレームを使うと、追跡情報を埋め込んで、連結フレームのストリームに透かしを付けられる点に注意してください。追跡情報は任意の種類で、UUIDだけでもかまいません。この可能性を懸念するユーザーは、連結フレームのストリームを走査し、このようなフレームを検出して、解析または除去することを試みるべきです。

**`Magic_Number`**

4バイトの**リトルエンディアン**形式です。値は0x184D2A5?、すなわち0x184D2A50から0x184D2A5Fまでの任意の値です。16個すべての値が、スキップ可能なフレームの識別に有効です。本仕様では、スキップ可能なフレームの個別のタグ付け方法は詳述しません。

**`Frame_Size`**

後続の `User_Data` のバイト単位のサイズです（マジックナンバーとサイズフィールド自体は含みません）。このフィールドは、4バイトの**リトルエンディアン**形式の符号なし32ビット値で表します。したがって、`User_Data` は (2^32-1) バイトを超えられません。

**`User_Data`**

`User_Data` の内容は任意です。デコーダーは、このデータを単に読み飛ばします。
