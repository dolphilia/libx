---
title: "Zstandard: ブロックとリテラル"
description: "形式仕様0.4.3 — ブロックとリテラル"
documentId: "zstd-format-03-blocks"
order: 3
licenseSource: "zstd-format-0.4.3"
documentContext: [{"kind":"source","html":"<p>Meta Platforms, Inc. and affiliatesによるZstandard 1.5.7収録の形式仕様0.4.3（2024-10-07）。<a href=\"https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md\">固定原典</a>・<a href=\"/docs/zstd/source/v1-5-7/zstd_compression_format.md\">原文Markdown全文</a>・<a href=\"/docs/zstd/source/v1-5-7/NOTICE.txt\">原許諾通知</a>。</p>"},{"kind":"editorial","html":"<p>Libxによる非公式日本語訳です。固定形式仕様の全文を9章の静的文書として提供します。CLI・API・実装固有の挙動は収録範囲外で、原典を参照してください。分割に伴い原見出しIDを追加し内部参照を対応付け、圧縮ブロックへの原参照切れ1件を補正しました。英語の原通知を保持し、第1章には通知の日本語訳を併記しています。</p>"}]
---

<a id="source-blocks"></a>

## ブロック

`Magic_Number` と `Frame_Header` の後には、いくつかのブロックが続きます。各フレームには少なくとも1個のブロックが必要ですが、フレームあたりのブロック数に上限はありません。

ブロックの構造は次のとおりです。

| `Block_Header` | `Block_Content` |
|:--------------:|:---------------:|
| 3バイト | nバイト |

**`Block_Header`**

`Block_Header` は3バイトで、**リトルエンディアン**の規則で記録します。次の3つのフィールドを含みます。

| `Last_Block` | `Block_Type` | `Block_Size` |
|:------------:|:------------:|:------------:|
| ビット0 | ビット1-2 | ビット3-23 |

**`Last_Block`**

最下位ビットは、このブロックが最後のブロックかどうかを示します。この最後のブロックの後でフレームが終わります。その後に任意の `Content_Checksum` が続く場合があります（[Zstandardフレーム](/docs/zstd/v1-5-7/ja/01-specification/02-frames#source-zstandard-frames)を参照）。

**`Block_Type`**

次の2ビットが `Block_Type` を表します。`Block_Type` によって `Block_Size` の意味が変わります。ブロックには次の4種類があります。

| 値 | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| `Block_Type` | `Raw_Block` | `RLE_Block` | `Compressed_Block` | `Reserved` |

- `Raw_Block`：圧縮されていないブロックです。`Block_Content` には `Block_Size` バイトが入ります。
- `RLE_Block`：単一のバイトを `Block_Size` 回繰り返したものです。`Block_Content` は1バイトだけで構成されます。展開側では、このバイトを `Block_Size` 回繰り返さなければなりません。
- `Compressed_Block`：後述する[Zstandard圧縮ブロック](#source-compressed-blocks)です。`Block_Size` は圧縮データ `Block_Content` の長さです。展開後のサイズは分かりませんが、その取り得る最大値は保証されます（後述）。
- `Reserved`：ブロックではありません。本仕様の現行版ではこの値を使えません。この値が存在する場合、破損したデータとみなします。

**`Block_Size`**

`Block_Header` の上位21ビットが `Block_Size` を表します。

`Block_Type` が `Compressed_Block` または `Raw_Block` の場合、`Block_Size` は `Block_Content` のサイズです（したがって `Block_Header` を含みません）。

`Block_Type` が `RLE_Block` の場合、`Block_Content` のサイズは常に1なので、`Block_Size` はそのバイトを繰り返す回数を表します。

`Block_Size` は `Block_Maximum_Size` によって制限されます（後述）。

**`Block_Content` と `Block_Maximum_Size`**

`Block_Content` のサイズは、次のうち小さい方の値である `Block_Maximum_Size` によって制限されます。

- `Window_Size`
- 128 KB

`Block_Maximum_Size` は、あるフレームの中では一定です。この最大値は、フレーム内のすべてのブロックの展開後サイズと圧縮後サイズの両方に適用されます。

この制限を設ける理由は、デコーダーがフレームの先頭でこの情報を読み取り、バッファーの確保に使えるようにするためです。ブロックサイズの保証により、有効なフレームで後に続くどのブロックに対しても、バッファーが十分な大きさになります。

<a id="source-compressed-blocks"></a>

## 圧縮ブロック

圧縮ブロックを展開するには、`Block_Header` 内の `Block_Size` フィールドから圧縮サイズを得る必要があります。

圧縮ブロックは次の2つのセクションで構成されます。

- [リテラルセクション](#source-literals-section)
- [シーケンスセクション](/docs/zstd/v1-5-7/ja/01-specification/04-sequences#source-sequences-section)

その後、[シーケンスの実行](/docs/zstd/v1-5-7/ja/01-specification/04-sequences#source-sequence-execution)で両セクションの結果を組み合わせ、展開後のデータを生成します。

<a id="source-prerequisites"></a>

#### 前提条件

圧縮ブロックを復号するには、次の要素が必要です。

- `Window_Size` の距離、またはフレームの先頭までの距離のうち、小さい方の範囲にある過去の復号済みデータ。
- 前の `Compressed_Block` から引き継いだ「最近のオフセット」のリスト。
- `Treeless_Literals_Block` 型で必要になる、前のHuffman木。
- 各シンボル種（リテラル長、マッチ長、オフセット）の `Repeat_Mode` で必要になる、前のFSE復号表。

復号表が必ずしも直前の `Compressed_Block` に由来するとは限らない点に注意してください。

- どの復号表も、辞書に由来することがあります。
- Huffman木は、前の `Compressed_Literals_Block` に由来します。

<a id="source-literals-section"></a>

## リテラルセクション

すべてのリテラルは、ブロックの最初の部分にまとめられます。先に復号して[シーケンスの実行](/docs/zstd/v1-5-7/ja/01-specification/04-sequences#source-sequence-execution)中にコピーすることも、[シーケンスの実行](/docs/zstd/v1-5-7/ja/01-specification/04-sequences#source-sequence-execution)に合わせて逐次復号することもできます。

リテラルは、非圧縮で格納するか、Huffman接頭符号で圧縮して格納できます。圧縮する場合には、任意で木の記述が存在し、その後に1本または4本のストリームが続きます。

| `Literals_Section_Header` | [`Huffman_Tree_Description`] | [jumpTable] | Stream1 | [Stream2] | [Stream3] | [Stream4] |
| ------------------------- | ---------------------------- | ----------- | ------- | --------- | --------- | --------- |

<a id="source-literals_section_header"></a>

### `Literals_Section_Header`

ヘッダーは、リテラルの格納方法を説明します。1〜5バイトの、バイト境界に揃った可変サイズのビットフィールドで、**リトルエンディアン**の規則を使用します。

| `Literals_Block_Type` | `Size_Format` | `Regenerated_Size` | [`Compressed_Size`] |
| --------------------- | ------------- | ------------------ | ------------------- |
| 2ビット | 1–2ビット | 5–20ビット | 0–18ビット |

この表現では、左側のビットが下位ビットです。

**`Literals_Block_Type`**

最初のバイトの下位2ビットを使い、次の4種類のブロックを表します。

| `Literals_Block_Type` | 値 |
| --------------------- | --- |
| `Raw_Literals_Block` | 0 |
| `RLE_Literals_Block` | 1 |
| `Compressed_Literals_Block` | 2 |
| `Treeless_Literals_Block` | 3 |

- `Raw_Literals_Block`：リテラルを非圧縮で格納します。
- `RLE_Literals_Block`：リテラルは、単一のバイト値を `Regenerated_Size` 回繰り返したものです。
- `Compressed_Literals_Block`：通常のHuffman圧縮ブロックで、Huffman木の記述から始まります。このモードでは、Huffman木の記述に少なくとも2種類の異なるリテラルが表されます。詳しくは後述します。
- `Treeless_Literals_Block`：**前のHuffman圧縮リテラルブロックの**Huffman木を使うHuffman圧縮ブロックです。`Huffman_Tree_Description` は省略されます。注：フレーム内にも[辞書](/docs/zstd/v1-5-7/ja/01-specification/08-dictionary#source-dictionary-format)にも以前のHuffman表がない状態でこのモードが指定された場合、データ破損として扱うべきです。

**`Size_Format`**

`Size_Format` は、次の2系統に分かれます。

- `Raw_Literals_Block` と `RLE_Literals_Block` では、`Regenerated_Size` だけを復号すればよく、`Compressed_Size` フィールドはありません。
- `Compressed_Block` と `Treeless_Literals_Block` では、`Compressed_Size` と `Regenerated_Size`（展開後のサイズ）の両方を復号する必要があります。また、ストリーム数（1本または4本）も復号する必要があります。

複数バイトにまたがる値には、**リトルエンディアン**の規則を使用します。

**`Raw_Literals_Block` と `RLE_Literals_Block` の `Size_Format`**

`Size_Format` は1ビット**または**2ビットを使用します。その値は `Size_Format = (Literals_Section_Header[0]>>2) & 3` です。

- `Size_Format` == 00または10：`Size_Format` は1ビットを使用します。`Regenerated_Size` は5ビット（0-31）、`Literals_Section_Header` は1バイトを使用します。`Regenerated_Size = Literals_Section_Header[0]>>3`
- `Size_Format` == 01：`Size_Format` は2ビットを使用します。`Regenerated_Size` は12ビット（0-4095）、`Literals_Section_Header` は2バイトを使用します。`Regenerated_Size = (Literals_Section_Header[0]>>4) + (Literals_Section_Header[1]<<4)`
- `Size_Format` == 11：`Size_Format` は2ビットを使用します。`Regenerated_Size` は20ビット（0-1048575）、`Literals_Section_Header` は3バイトを使用します。`Regenerated_Size = (Literals_Section_Header[0]>>4) + (Literals_Section_Header[1]<<4) + (Literals_Section_Header[2]<<12)`

これらの場合には、Stream1だけが存在します。注：効率は低下しますが、短い値（たとえば `27`）を長い形式で表してもかまいません。

**`Compressed_Literals_Block` と `Treeless_Literals_Block` の `Size_Format`**

`Size_Format` は常に2ビットを使用します。

- `Size_Format` == 00：**単一のストリーム**です。`Regenerated_Size` と `Compressed_Size` はどちらも10ビット（0-1023）、`Literals_Section_Header` は3バイトを使用します。
- `Size_Format` == 01：4本のストリームです。`Regenerated_Size` と `Compressed_Size` はどちらも10ビット（6-1023）、`Literals_Section_Header` は3バイトを使用します。
- `Size_Format` == 10：4本のストリームです。`Regenerated_Size` と `Compressed_Size` はどちらも14ビット（6-16383）、`Literals_Section_Header` は4バイトを使用します。
- `Size_Format` == 11：4本のストリームです。`Regenerated_Size` と `Compressed_Size` はどちらも18ビット（6-262143）、`Literals_Section_Header` は5バイトを使用します。

`Compressed_Size` と `Regenerated_Size` の両フィールドは、**リトルエンディアン**の規則に従います。

注：`Compressed_Size` は、Huffman木の記述が**存在する場合、そのサイズを含みます**。

注2：`Compressed_Size` が `==0` になることはありません。単一ストリームで内容が空である場合でも、少なくとも最後の終了ビットフラグを含むため、`>=1` でなければなりません。4ストリームの場合、有効な `Compressed_Size` は必ず `>= 10` です（ジャンプテーブルの6バイトと、4本のストリームそれぞれの1バイト、すなわち4x1バイト）。

4ストリームでは命令レベルの並列性を利用できるため、1ストリームよりも展開が高速です。ただしコストも高く、主にジャンプテーブルのため、1ストリームモードより平均で約7.3バイト多く必要です。

一般に、復号するリテラルが多い場合は、展開速度を重視して4ストリームモードを使います。リテラルが1 KBを超える場合、4ストリームモードは必須である点に注意してください。

4ストリームモードには、最低6バイトが必要です。これは技術的な最小値ですが、これほど少量に4ストリームモードを使うことは無駄が多いため推奨しません。より実用的な下限は、約256バイトです。

<a id="source-raw-literals-block"></a>

#### 非圧縮リテラルブロック

Stream1のデータは `Regenerated_Size` バイトで、[シーケンスの実行](/docs/zstd/v1-5-7/ja/01-specification/04-sequences#source-sequence-execution)で使う非圧縮リテラルデータを含みます。

<a id="source-rle-literals-block"></a>

#### RLEリテラルブロック

Stream1は単一のバイトからなり、復号後のリテラルを生成するために、そのバイトを `Regenerated_Size` 回繰り返すべきです。

<a id="source-compressed-literals-block-and-treeless-literals-block"></a>

#### 圧縮リテラルブロックと木のないリテラルブロック

どちらのモードにもHuffman符号化されたデータが入ります。

`Treeless_Literals_Block` では、Huffman表は以前の圧縮リテラルブロック、または辞書から得られます。

<a id="source-huffman_tree_description"></a>

### `Huffman_Tree_Description`

このセクションは、`Literals_Block_Type` が `Compressed_Literals_Block`（`2`）の場合だけ存在します。木は、リテラルブロックに現れ得るすべてのリテラルシンボルの重みを記述し、その種類数は少なくとも2、最大256です。Huffman木の記述形式は、[Huffman木の記述](/docs/zstd/v1-5-7/ja/01-specification/07-huffman#source-huffman-tree-description)を参照してください。`Huffman_Tree_Description` のサイズは復号中に判明するため、このサイズを使ってストリームの開始位置を求めなければなりません。

`Total_Streams_Size = Compressed_Size - Huffman_Tree_Description_Size`。

<a id="source-jump-table"></a>

### ジャンプテーブル

ジャンプテーブルは、Huffman符号化ストリームが4本ある場合だけ存在します。

Huffman圧縮データのストリーム数は、1本または4本です。

ストリームが1本だけの場合、リテラルブロックの残りの部分すべてを占める単一のビットストリームであり、[Huffman符号化ストリーム](/docs/zstd/v1-5-7/ja/01-specification/07-huffman#source-huffman-coded-streams)で説明する方法で符号化されます。

ストリームが4本の場合、`Literals_Section_Header` に含まれるのは、4本**全体の**展開後サイズと圧縮後サイズを知るのに十分な情報だけです。**各**ストリームの展開後サイズは `(Regenerated_Size+3)/4` ですが、最後のストリームは `Regenerated_Size` が指定する合計展開後サイズに合わせるため、最大3バイト小さくなる場合があります。

各ストリームの圧縮サイズは、ジャンプテーブルで明示されます。ジャンプテーブルは6バイトで、最初の3本のストリームの圧縮サイズを示す3つの2バイト**リトルエンディアン**フィールドからなります。`Stream4_Size` は、`Total_Streams_Size` から他のストリームのサイズを引いて求めます。

`Stream4_Size = Total_Streams_Size - 6 - Stream1_Size - Stream2_Size - Stream3_Size`。

`Stream4_Size` は必ず `>= 1` です。したがって、`Total_Streams_Size < Stream1_Size + Stream2_Size + Stream3_Size + 6 + 1` の場合、データは破損しているとみなします。

その後、4本の各ビットストリームを、[Huffman符号化ストリーム](/docs/zstd/v1-5-7/ja/01-specification/07-huffman#source-huffman-coded-streams)で説明する方法に従って、Huffman符号化ストリームとして独立に復号します。
