---
title: "Zstandard: シーケンスと実行"
description: "形式仕様0.4.3 — シーケンスと実行"
documentId: "zstd-format-04-sequences"
order: 4
licenseSource: "zstd-format-0.4.3"
documentContext: [{"kind":"source","html":"<p>Meta Platforms, Inc. and affiliatesによるZstandard 1.5.7収録の形式仕様0.4.3（2024-10-07）。<a href=\"https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md\">固定原典</a>・<a href=\"/docs/zstd/source/v1-5-7/zstd_compression_format.md\">原文Markdown全文</a>・<a href=\"/docs/zstd/source/v1-5-7/NOTICE.txt\">原許諾通知</a>。</p>"},{"kind":"editorial","html":"<p>Libxによる非公式日本語訳です。固定形式仕様の全文を9章の静的文書として提供します。CLI・API・実装固有の挙動は収録範囲外で、原典を参照してください。分割に伴い原見出しIDを追加し内部参照を対応付け、圧縮ブロックへの原参照切れ1件を補正しました。英語の原通知を保持し、第1章には通知の日本語訳を併記しています。</p>"}]
---

<a id="source-sequences-section"></a>

シーケンスセクション
-----------------
圧縮ブロックは、*シーケンス*の連続です。
シーケンスは、リテラルのコピー命令と、それに続くマッチのコピー命令からなります。
リテラルのコピー命令は長さを指定します。これはリテラルセクションからコピー（または取り出し）するバイト数です。
マッチのコピー命令は、オフセットと長さを指定します。

すべての*シーケンス*を復号した後、*リテラルセクション*にリテラルが残っていれば、そのバイト列をブロックの末尾に追加します。

詳細は[シーケンスの実行](#source-sequence-execution)で説明します。

`Sequences_Section`には、命令の復号に必要なすべてのシンボルをまとめます。
シンボルには、リテラル長、オフセット、マッチ長の3種類があります。
これらは、単一の*ビットストリーム*内で交互に組み合わせて符号化します。

`Sequences_Section`は、ヘッダー、各シンボル種別の省略可能な確率表、ビットストリームの順に並びます。

| `Sequences_Section_Header` | [`Literals_Length_Table`] | [`Offset_Table`] | [`Match_Length_Table`] | ビットストリーム |
| -------------------------- | ------------------------- | ---------------- | ---------------------- | --------- |

`Sequences_Section`の復号には、そのサイズを知る必要があります。
サイズは`Literals_Section`のサイズから導きます:
`Sequences_Section_Size = Block_Size - Literals_Section_Size`。

<a id="source-sequences_section_header"></a>

#### `Sequences_Section_Header`

次の2項目からなります:
- `Number_of_Sequences`
- シンボルの圧縮モード

__`Number_of_Sequences`__

1～3バイトを使う可変長フィールドです。最初のバイトを`byte0`と呼びます。
- `if (byte0 < 128)` : `Number_of_Sequences = byte0`。1バイトを使います。
- `if (byte0 < 255)` : `Number_of_Sequences = ((byte0 - 0x80) << 8) + byte1`。2バイトを使います。
  2バイト形式は1バイト形式と完全に重複する点に注意してください。
- `if (byte0 == 255)`: `Number_of_Sequences = byte1 + (byte2<<8) + 0x7F00`。3バイトを使います。

`if (Number_of_Sequences == 0)` : シーケンスはありません。
シーケンスセクションは直ちに終了し、`Repeat_Mode`で使うFSE表は更新しません。
ブロックの伸長後の内容は、リテラルセクションの内容だけで定義します。

__シンボルの圧縮モード__

各シンボル種別の圧縮モードを定義する1バイトです。

|ビット番号|          7-6            |      5-4       |        3-2           |     1-0    |
| -------- | ----------------------- | -------------- | -------------------- | ---------- |
|フィールド名| `Literals_Lengths_Mode` | `Offsets_Mode` | `Match_Lengths_Mode` | `Reserved` |

最後のフィールド`Reserved`は、すべてゼロでなければなりません。

`Literals_Lengths_Mode`、`Offsets_Mode`、`Match_Lengths_Mode`はそれぞれ、リテラル長、オフセット、マッチ長のシンボルの`Compression_Mode`を定義します。

同じ列挙値に従います:

|        値       |         0         |      1     |           2           |       3       |
| ------------------ | ----------------- | ---------- | --------------------- | ------------- |
| `Compression_Mode` | `Predefined_Mode` | `RLE_Mode` | `FSE_Compressed_Mode` | `Repeat_Mode` |

- `Predefined_Mode` : [既定の分布](#source-default-distributions)で定義する事前定義FSE分布表を使います。分布表は格納しません。
- `RLE_Mode` : 表の記述は、シンボルの値を含む1バイトからなります。このシンボルをすべてのシーケンスに使います。
- `FSE_Compressed_Mode` : 標準のFSE圧縮です。分布表を格納します。
  分布表の形式は[FSE表の記述](/docs/zstd/v1-5-7/ja/01-specification/06-fse#source-fse-table-description)で説明します。
  許されるaccuracy logの最大値は、リテラル長表とマッチ長表では9、オフセット表では8です。
  シンボルが1つしか存在しない場合、`FSE_Compressed_Mode`を使ってはなりません。
  代わりに`RLE_Mode`を使うことが望まれます（ただし、ほかのどのモードでも動作します）。
- `Repeat_Mode` : `Number_of_Sequences > 0`である直近の`Compressed_Block`で使った表を再利用します。
  最初のブロックであれば、辞書内の表を使います。
  これには`RLE_mode`も含まれるため、`RLE_Mode`の後に`Repeat_Mode`が続くと、同じシンボルを繰り返します。
  `Predefined_Mode`も含まれ、その場合、`Repeat_Mode`の結果は`Predefined_Mode`と同じです。
  分布表は格納しません。
  フレーム内に再利用できる先行シーケンス表も[辞書](/docs/zstd/v1-5-7/ja/01-specification/08-dictionary#source-dictionary-format)もない状態で使う場合は、破損として扱うことが望まれます。

<a id="source-the-codes-for-literals-lengths-match-lengths-and-offsets"></a>

#### リテラル長、マッチ長、オフセットのコード

各シンボルは、それぞれの文脈で、`Baseline`と追加する`Number_of_Bits`を指定する*コード*です。
*コード*はFSEで圧縮し、同じビットストリーム内で、未圧縮の追加ビットと交互に格納します。

<a id="source-literals-length-codes"></a>

##### リテラル長コード

リテラル長コードは、`0`から`35`まで（両端を含む）の値です。
0から131071バイトまでの長さを定義します。
リテラル長は、復号した`Baseline`に、ビットストリームから`Number_of_Bits`ビットを__リトルエンディアン__値として読み取った結果を加えたものです。

| `Literals_Length_Code` |         0-15           |
| ---------------------- | ---------------------- |
| 長さ                   | `Literals_Length_Code` |
| `Number_of_Bits`       |          0             |

| `Literals_Length_Code` |  16  |  17  |  18  |  19  |  20  |  21  |  22  |  23  |
| ---------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| `Baseline`             |  16  |  18  |  20  |  22  |  24  |  28  |  32  |  40  |
| `Number_of_Bits`       |   1  |   1  |   1  |   1  |   2  |   2  |   3  |   3  |

| `Literals_Length_Code` |  24  |  25  |  26  |  27  |  28  |  29  |  30  |  31  |
| ---------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| `Baseline`             |  48  |  64  |  128 |  256 |  512 | 1024 | 2048 | 4096 |
| `Number_of_Bits`       |   4  |   6  |   7  |   8  |   9  |  10  |  11  |  12  |

| `Literals_Length_Code` |  32  |  33  |  34  |  35  |
| ---------------------- | ---- | ---- | ---- | ---- |
| `Baseline`             | 8192 |16384 |32768 |65536 |
| `Number_of_Bits`       |  13  |  14  |  15  |  16  |

<a id="source-match-length-codes"></a>

##### マッチ長コード

マッチ長コードは、`0`から`52`まで（両端を含む）の値です。
3から131074バイトまでの長さを定義します。
マッチ長は、復号した`Baseline`に、ビットストリームから`Number_of_Bits`ビットを__リトルエンディアン__値として読み取った結果を加えたものです。

| `Match_Length_Code` |         0-31            |
| ------------------- | ----------------------- |
| 値                  | `Match_Length_Code` + 3 |
| `Number_of_Bits`    |          0              |

| `Match_Length_Code` |  32  |  33  |  34  |  35  |  36  |  37  |  38  |  39  |
| ------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| `Baseline`          |  35  |  37  |  39  |  41  |  43  |  47  |  51  |  59  |
| `Number_of_Bits`    |   1  |   1  |   1  |   1  |   2  |   2  |   3  |   3  |

| `Match_Length_Code` |  40  |  41  |  42  |  43  |  44  |  45  |  46  |  47  |
| ------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| `Baseline`          |  67  |  83  |  99  |  131 |  259 |  515 | 1027 | 2051 |
| `Number_of_Bits`    |   4  |   4  |   5  |   7  |   8  |   9  |  10  |  11  |

| `Match_Length_Code` |  48  |  49  |  50  |  51  |  52  |
| ------------------- | ---- | ---- | ---- | ---- | ---- |
| `Baseline`          | 4099 | 8195 |16387 |32771 |65539 |
| `Number_of_Bits`    |  12  |  13  |  14  |  15  |  16  |

<a id="source-offset-codes"></a>

##### オフセットコード

オフセットコードは、`0`から`N`までの値です。

デコーダーは、対応する`N`の最大値を自由に制限できます。
少なくとも`22`までは対応することを推奨します。
参考として、原文の執筆時点で、参照デコーダーは最大`31`の`N`に対応しています。

オフセットコードは、__リトルエンディアン__で読む追加ビット数でもあります。
次の式を使って`Offset_Value`に変換できます:

```
Offset_Value = (1 << offsetCode) + readNBits(offsetCode);
if (Offset_Value > 3) offset = Offset_Value - 3;
```
最大の`Offset_Value`は`(2^(N+1))-1`となり、最大`(2^(N+1))-4`までの後方参照距離に対応しますが、
[最大後方参照距離](/docs/zstd/v1-5-7/ja/01-specification/02-frames#source-window_descriptor)による制限を受けます。

1から3の`Offset_Value`は特殊で、「繰り返しコード」を定義します。
詳細は[繰り返しオフセット](#source-repeat-offsets)で説明します。

<a id="source-decoding-sequences"></a>

#### シーケンスの復号
FSEビットストリームは、書き込んだ方向と逆に読みます。
zstdの圧縮器はビットを順方向にブロックへ書き込み、伸長器はビットストリームを*逆方向*に読む必要があります。

そのため、ビットストリームの読み始めを見つけるには、ブロックの最後のバイトのオフセットを知る必要があります。
これは、ブロックヘッダーの後から`Block_Size`バイトを数えることで分かります。

圧縮器は、情報を含む最後のビットを書いた後に`1`ビットを1つ書き、0～7個の`0`ビットのパディングでバイトを埋めます。
このため、圧縮ビットストリームの最後のバイトは`0`にはなりません。

伸長時には、パディングを含む最後のバイトを最初に読みます。
伸長器は、先頭の0～7個の`0`ビットと、最初に現れる`1`ビットを飛ばす必要があります。
その後に、ビットストリームの有効部分が始まります。

FSEの復号には、シンボル間で引き継ぐ「状態」が必要です。
詳しくは[FSEの節](/docs/zstd/v1-5-7/ja/01-specification/06-fse#source-fse)を参照してください。

シーケンスの復号では、リテラル長、オフセット、マッチ長の各シンボルを、別々の状態で追跡します。
FSEの基本操作もいくつか使います。
これらの操作の詳細は[FSEの節](/docs/zstd/v1-5-7/ja/01-specification/06-fse#source-fse)を参照してください。

<a id="source-starting-states"></a>

##### 初期状態
ビットストリームは、FSEの初期状態値から始まります。
各値は、正規化分布から事前に復号したそれぞれの*accuracy*に応じた必要ビット数を使います。

最初は`Literals_Length_State`、次が`Offset_State`、最後が`Match_Length_State`です。

すべての値を*逆方向*に読むことを、常に意識してください。
ビットストリームの「先頭」は、メモリ上の最も高い位置にあり、パディング用の最後の`1`ビットの直前です。

初期状態を復号した後は、1つのシーケンスを復号する処理を`Number_Of_Sequences`回行います。
シーケンスは、最初から最後へ順番に復号します。
圧縮器はビットストリームを順方向に書くため、シーケンスを最後のものから最初のものへ符号化しなければなりません。

<a id="source-decoding-a-sequence"></a>

##### 1シーケンスの復号
各シンボル種別について、FSE状態から適切なコードを決定できます。
そのコードが、各種別の`Baseline`と読み取る`Number_of_Bits`を定義します。
これらの値の決め方は[コードの説明][description of the codes]を参照してください。

[description of the codes]: #source-the-codes-for-literals-lengths-match-lengths-and-offsets

復号は、`Offset`の復号に必要な`Number_of_Bits`を読み取ることから始めます。
次に`Match_Length`、最後に`Literals_Length`について同じ処理を行います。
得たシーケンスを[シーケンスの実行](#source-sequence-execution)に使います。

ブロックの最後のシーケンスでなければ、次に状態を更新します。
復号表で事前に計算した規則を使い、`Literals_Length_State`、`Match_Length_State`、`Offset_State`の順に更新します。
ビットストリームから状態を更新する詳細は[FSEの節](/docs/zstd/v1-5-7/ja/01-specification/06-fse#source-fse)を参照してください。

この操作を`Number_of_Sequences`回繰り返します。
終了時には、ビットストリームを完全に消費していなければなりません。そうでなければ、ビットストリームは破損していると見なします。

<a id="source-default-distributions"></a>

#### 既定の分布
シンボル種別に`Predefined_Mode`を選択した場合、そのFSE復号表は、ここで定義する事前定義の分布表から生成します。
分布を復号表へ変換する詳細は[FSEの節][FSE section]を参照してください。

[FSE section]: /docs/zstd/v1-5-7/ja/01-specification/06-fse#source-from-normalized-distribution-to-decoding-tables

<a id="source-literals-length"></a>

##### リテラル長
復号表は、6ビットのaccuracy log（64状態）を使います。
```
short literalsLength_defaultDistribution[36] =
        { 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1,
          2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 1, 1, 1, 1, 1,
         -1,-1,-1,-1 };
```

<a id="source-match-length"></a>

##### マッチ長
復号表は、6ビットのaccuracy log（64状態）を使います。
```
short matchLengths_defaultDistribution[53] =
        { 1, 4, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,-1,-1,
         -1,-1,-1,-1,-1 };
```

<a id="source-offset-codes-1"></a>

##### オフセットコード
復号表は、5ビットのaccuracy log（32状態）を使います。
`N`の最大値28に対応し、最大536,870,908のオフセット値を扱えます。

圧縮ブロック内のシーケンスのいずれかが、これより大きいオフセットを必要とする場合、既定の分布では表現できません。
```
short offsetCodes_defaultDistribution[29] =
        { 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1,-1,-1,-1,-1,-1 };
```

<a id="source-sequence-execution"></a>

シーケンスの実行
------------------
リテラルとシーケンスを復号したら、それらを組み合わせて、ブロックの復号内容を生成します。

各シーケンスは、[シーケンスセクション](#source-sequences-section)で説明した方法で復号した、
（`literals_length`、`offset_value`、`match_length`）の組からなります。
実行時には、まず、復号したリテラルから`literals_length`バイトを出力へコピーします。

次に、復号済みのデータから`match_length`バイトをコピーします。
コピー元のオフセットは`offset_value`で決まり、`offset_value > 3`なら`offset_value - 3`です。
`offset_value`が1～3なら、オフセットは特殊な繰り返しオフセット値です。
この場合の決め方は、[繰り返しオフセット](#source-repeat-offsets)の節を参照してください。

オフセットは現在位置からの距離です。たとえば、オフセット6、マッチ長3は、6バイト前から3バイトをコピーすることを意味します。
復号済みデータへのすべてのオフセットは、`Frame_Header_Descriptor`で定義する`Window_Size`より小さくなければなりません。

<a id="source-repeat-offsets"></a>

#### 繰り返しオフセット
[シーケンスの実行](#source-sequence-execution)で示したとおり、最初の3つの値は繰り返しオフセットを定義します。
これらを`Repeated_Offset1`、`Repeated_Offset2`、`Repeated_Offset3`と呼びます。
使った時点が新しい順に並び、`Repeated_Offset1`は「最も最近使ったもの」を意味します。

`offset_value == 1`なら、使うオフセットは`Repeated_Offset1`です。ほかも同様です。

ただし、現在のシーケンスの`literals_length = 0`の場合は例外です。
この場合、繰り返しオフセットを1つずらし、`offset_value`が1なら`Repeated_Offset2`、2なら`Repeated_Offset3`、3なら`Repeated_Offset1 - 1`を意味します。

最後の場合に、`Repeated_Offset1 - 1`の評価結果が0になれば、データは破損していると見なします。

最初のブロックの初期オフセット履歴は、`Repeated_Offset1`=1、`Repeated_Offset2`=4、`Repeated_Offset3`=8です。
ただし、辞書を使う場合は、辞書からこれらの値を取得します。

以降の各ブロックは、直近の`Compressed_Block`の終了時の値を、初期オフセット履歴に使います。
`Compressed_Block`でないブロックは飛ばし、オフセット履歴には影響しません。

[Offset Codes]: #source-offset-codes

<a id="source-offset-updates-rules"></a>

###### オフセットの更新規則

`Compressed_Block`のシーケンスを実行する間は、`Repeated_Offsets`の値を更新し、常に最近使った3つのオフセットを表すようにします。
そのため、各シーケンスの実行後に、次のように更新します:

シーケンスの`offset_value`が`Repeated_Offsets`のいずれも参照しない場合、つまり値が3を超えるか、値が3でシーケンスの`literals_length`がゼロの場合は、
`Repeated_Offsets`を1つ後ろへずらし、`Repeated_Offset1`に、今使ったオフセットの値を設定します。

それ以外、つまりシーケンスの`offset_value`が`Repeated_Offsets`のいずれかを参照する場合（値が1または2、または値が3でシーケンスの`literals_length`がゼロでない場合）は、
使ったRepeated_Offsetの値が`Repeated_Offset1`になるように並べ替えます。
先頭の`Repeated_Offset`から`offset_value`が選んだ`Repeated_Offset`までの既存の値を、後ろへ押し出します。
これは、これらのオフセット値を1段階循環させる操作で、再び、使った時点が新しい順になります。

次の表は、シーケンスを順に適用したときの`Repeated_Offsets`の値を示します:

| `offset_value` | `literals_length` | `Repeated_Offset1` | `Repeated_Offset2` | `Repeated_Offset3` | 説明                 |
|:--------------:|:-----------------:|:------------------:|:------------------:|:------------------:|:-----------------------:|
|                |                   |                  1 |                  4 |                  8 | 初期値         |
|           1114 |                11 |               1111 |                  1 |                  4 | 繰り返し以外              |
|              1 |                22 |               1111 |                  1 |                  4 | 繰り返し1: 変更なし     |
|           2225 |                22 |               2222 |               1111 |                  1 | 繰り返し以外              |
|           1114 |               111 |               1111 |               2222 |               1111 | 繰り返し以外              |
|           3336 |                33 |               3333 |               1111 |               2222 | 繰り返し以外              |
|              2 |                22 |               1111 |               3333 |               2222 | 繰り返し2: 1と2を交換    |
|              3 |                33 |               2222 |               1111 |               3333 | 繰り返し3: 3を1へ循環 |
|              3 |                 0 |               2221 |               2222 |               1111 | 特殊ケース: 挿入 `repeat1 - 1` |
|              1 |                 0 |               2222 |               2221 |               1111 | == 繰り返し2             |
