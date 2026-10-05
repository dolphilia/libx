---
title: "Zstandard: Zstandardフレーム"
description: "形式仕様0.4.3 — Zstandardフレーム"
documentId: "zstd-format-02-frames"
order: 2
licenseSource: "zstd-format-0.4.3"
documentContext: [{"kind":"source","html":"<p>Meta Platforms, Inc. and affiliatesによるZstandard 1.5.7収録の形式仕様0.4.3（2024-10-07）。<a href=\"https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md\">固定原典</a>・<a href=\"/docs/zstd/source/v1-5-7/zstd_compression_format.md\">原文Markdown全文</a>・<a href=\"/docs/zstd/source/v1-5-7/NOTICE.txt\">原許諾通知</a>。</p>"},{"kind":"editorial","html":"<p>Libxによる非公式日本語訳です。固定形式仕様の全文を9章の静的文書として提供します。CLI・API・実装固有の挙動は収録範囲外で、原典を参照してください。分割に伴い原見出しIDを追加し内部参照を対応付け、圧縮ブロックへの原参照切れ1件を補正しました。英語の原通知を保持し、第1章には通知の日本語訳を併記しています。</p>"}]
---

<a id="source-frames"></a>

## フレーム

Zstandardの圧縮データは、1個以上の**フレーム**で構成されます。各フレームは独立しており、他のフレームとは独立に展開できます。複数のフレームを連結したものの展開結果は、各フレームの展開結果を連結したものです。

Zstandardは、Zstandardフレームとスキップ可能なフレームという2つのフレーム形式を定義します。Zstandardフレームには圧縮データが入り、スキップ可能なフレームには独自のユーザーメタデータが入ります。

<a id="source-zstandard-frames"></a>

## Zstandardフレーム

1つのZstandardフレームの構造は次のとおりです。

| `Magic_Number` | `Frame_Header` | `Data_Block` | [さらに続くデータブロック] | [`Content_Checksum`] |
|:--------------:|:--------------:|:------------:| ------------------------- |:--------------------:|
| 4バイト | 2–14バイト | nバイト | | 0–4バイト |

**`Magic_Number`**

4バイトの**リトルエンディアン**形式です。値は0xFD2FB528です。

注：この値は、任意のファイルの先頭で偶然見つかる可能性を低くするために選ばれました。単純なパターン（0x00、0xFF、同じバイトの繰り返し、増加するバイト列など）を避け、ASCIIの範囲外のバイト値を含み、UTF8の空間にも対応しません。これにより、テキストファイルが偶然この値を表す可能性が低くなります。

**`Frame_Header`**

2〜14バイトです。[`Frame_Header`](#source-frame_header)で詳しく説明します。

**`Data_Block`**

[ブロック](/docs/zstd/v1-5-7/ja/01-specification/03-blocks#source-blocks)で詳しく説明します。圧縮データが格納される部分です。

**`Content_Checksum`**

任意の32ビットチェックサムで、`Content_Checksum_flag` が設定されている場合だけ存在します。内容のチェックサムは、元の（復号後の）データを入力とし、シードを0として[xxh64()ハッシュ関数](https://cyan4973.github.io/xxHash/)を適用した結果です。チェックサムの下位4バイトを**リトルエンディアン**形式で格納します。

<a id="source-frame_header"></a>

### `Frame_Header`

`Frame_Header` のサイズは可変で、最小2バイト、任意のパラメーターに応じて最大14バイトです。構造は次のとおりです。

| `Frame_Header_Descriptor` | [`Window_Descriptor`] | [`Dictionary_ID`] | [`Frame_Content_Size`] |
| ------------------------- | --------------------- | ----------------- | ---------------------- |
| 1バイト | 0–1バイト | 0–4バイト | 0–8バイト |

<a id="source-frame_header_descriptor"></a>

#### `Frame_Header_Descriptor`

ヘッダーの最初のバイトを `Frame_Header_Descriptor` と呼びます。このバイトは、他のどのフィールドが存在するかを示します。このバイトを復号するだけで、`Frame_Header` のサイズが分かります。

| ビット番号 | フィールド名 |
| ---------- | ------------ |
| 7-6 | `Frame_Content_Size_flag` |
| 5 | `Single_Segment_flag` |
| 4 | `Unused_bit` |
| 3 | `Reserved_bit` |
| 2 | `Content_Checksum_flag` |
| 1-0 | `Dictionary_ID_flag` |

この表ではビット7が最上位、ビット0が最下位です。

**`Frame_Content_Size_flag`**

2ビットのフラグ（`= Frame_Header_Descriptor >> 6`）で、`Frame_Content_Size`（展開後のデータサイズ）がヘッダーに含まれるかを指定します。`Flag_Value` によって、`Frame_Content_Size` に使用するバイト数 `FCS_Field_Size` が次の表のとおりに定まります。

| `Flag_Value` | 0 | 1 | 2 | 3 |
| ------------ | --- | --- | --- | --- |
| `FCS_Field_Size` | 0または1 | 2 | 4 | 8 |

`Flag_Value` が `0` のとき、`FCS_Field_Size` は `Single_Segment_flag` に依存します。`Single_Segment_flag` が設定されていれば `FCS_Field_Size` は1です。そうでなければ `FCS_Field_Size` は0であり、`Frame_Content_Size` は含まれません。

**`Single_Segment_flag`**

このフラグが設定されている場合、データは単一の連続したメモリ領域内で復元しなければなりません。

この場合、`Window_Descriptor` のバイトは省略されますが、`Frame_Content_Size` は必ず存在します。そのため、デコーダーは `Frame_Content_Size` 以上のサイズのメモリ領域を確保しなければなりません。

過大なメモリ要求からデコーダーを保護するため、デコーダーに許可された範囲を超えるメモリサイズを要求する圧縮フレームを拒否してもかまいません。

より広い互換性のため、デコーダーには少なくとも8 MBのメモリサイズをサポートすることを推奨します。これは推奨にすぎず、各デコーダーは、その環境の制約に応じて、より大きい上限や小さい上限を自由に採用できます。

**`Unused_bit`**

本仕様のこの版に準拠するデコーダーは、このビットを解釈してはなりません。将来の版で、フレームの正しい復号には影響しない性質を示すために使用される可能性があります。本仕様のこの版に準拠するエンコーダーは、このビットを0にしなければなりません。

**`Reserved_bit`**

このビットは将来の機能のために予約されています。その値は**0でなければなりません**。本仕様のこの版に準拠するデコーダーは、このビットが設定されていないことを確認しなければなりません。将来の改訂で、フレームを正しく復号するために解釈が必要な機能を示すために使用される可能性があります。

**`Content_Checksum_flag`**

このフラグが設定されている場合、フレームの末尾に32ビットの `Content_Checksum` が存在します。`Content_Checksum` の段落を参照してください。

**`Dictionary_ID_flag`**

2ビットのフラグ（`= FHD & 3`）で、辞書IDがヘッダーに含まれるかを示します。また、そのフィールドのサイズを `DID_Field_Size` として指定します。

| `Flag_Value` | 0 | 1 | 2 | 3 |
| ------------ | --- | --- | --- | --- |
| `DID_Field_Size` | 0 | 1 | 2 | 4 |

<a id="source-window_descriptor"></a>

#### `Window_Descriptor`

フレームの展開に必要な最小メモリバッファーに関する保証を示します。この情報は、デコーダーが十分なメモリを確保するうえで重要です。

`Window_Descriptor` のバイトは任意です。`Single_Segment_flag` が設定されている場合、`Window_Descriptor` は存在しません。このとき `Window_Size` は `Frame_Content_Size` となり、0〜2^64-1バイト（16 ExaBytes）の任意の値を取れます。

| ビット番号 | 7-3 | 2-0 |
| ---------- | --- | --- |
| フィールド名 | `Exponent` | `Mantissa` |

最小メモリバッファーのサイズを `Window_Size` と呼びます。次の式で表されます。

```
windowLog = 10 + Exponent;
windowBase = 1 << windowLog;
windowAdd = (windowBase / 8) * Mantissa;
Window_Size = windowBase + windowAdd;
```

`Window_Size` の最小値は1 KBです。最大値は `(1<<41) + 7*(1<<38)` バイト、すなわち3.75 TBです。

一般に `Window_Size` が大きいほど圧縮率が改善する傾向がありますが、メモリ使用量が増加します。

圧縮データを正しく復号するには、デコーダーは少なくとも `Window_Size` バイトのバッファーを確保する必要があります。

過大なメモリ要求からデコーダーを保護するため、デコーダーに許可された範囲を超えるメモリサイズを要求する圧縮フレームを拒否してもかまいません。

相互運用性を高めるため、デコーダーには最大8 MBの `Window_Size` をサポートし、エンコーダーには8 MBを超える `Window_Size` を必要とするフレームを生成しないことを推奨します。ただし、これは推奨にすぎず、デコーダーはその環境の制約に応じて、より大きい上限や小さい上限を自由に採用できます。

<a id="source-dictionary_id"></a>

#### `Dictionary_ID`

フレームを正しく復号するために必要な辞書のIDを含む、可変サイズのフィールドです。`Dictionary_ID` は任意であり、存在しない場合は、どの辞書を使うかをデコーダー側で把握する必要があります。

フィールドのサイズは `DID_Field_Size` によって与えられます。`DID_Field_Size` は `Dictionary_ID_flag` の値から直接導かれます。1バイトなら0–255、2バイトなら0–65535、4バイトなら0–4294967295のIDを表せます。形式は**リトルエンディアン**です。

効率は低下しますが、小さなID（たとえば `13`）を4バイトの大きな辞書IDフィールドで表してもかまいません。

値 `0` は、`Dictionary_ID` がない場合と同じ意味です。この場合、フレームの復号に辞書が必要なことも不要なこともあり、必要な辞書のIDは指定されません。デコーダーは、この情報を別の手段で把握しなければなりません。

<a id="source-frame_content_size"></a>

#### `Frame_Content_Size`

元の（非圧縮の）サイズです。この情報は任意です。`Frame_Content_Size` は、`FCS_Field_Size` が示す可変のバイト数を使用します。`FCS_Field_Size` は `Frame_Content_Size_flag` の値から与えられ、0（存在しない）、1、2、4、8バイトのいずれかです。

| `FCS_Field_Size` | 範囲 |
| --------------- | ---- |
| 0 | 不明 |
| 1 | 0 - 255 |
| 2 | 256 - 65791 |
| 4 | 0 - 2^32-1 |
| 8 | 0 - 2^64-1 |

`Frame_Content_Size` の形式は**リトルエンディアン**です。`FCS_Field_Size` が1、4、8バイトの場合、値をそのまま読み取ります。`FCS_Field_Size` が2の場合は、**256のオフセットを加算します**。任意の互換性のある表現形式を使って、小さなサイズ（たとえば `18`）を表してもかまいません。
