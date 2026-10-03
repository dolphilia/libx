---
title: "doc/xxhash_spec.md"
licenseSource: "xxhash-spec"
---

xxHashの高速ダイジェストアルゴリズム
======================

### 通知

Copyright (c) Yann Collet

この文書は、著作権表示とこの通知を保持し、原文からの実質的な変更や削除を明示することを条件として、あらゆる目的で無償で複製・配布できます。他言語への翻訳や編集物への収録も含まれます。この文書の配布に制限はありません。

### バージョン

0.2.0 (29/06/23)

目次
---------------------
- [はじめに](#introduction)
- [XXH32アルゴリズムの説明](#xxh32-algorithm-description)
- [XXH64アルゴリズムの説明](#xxh64-algorithm-description)
- [XXH3アルゴリズムの説明](#xxh3-algorithm-overview)
   - [小さい入力](#xxh3-algorithm-description-for-small-inputs)
   - [中程度の入力](#xxh3-algorithm-description-for-medium-inputs)
   - [大きい入力](#xxh3-algorithm-description-for-large-inputs)
- [性能に関する考慮事項](#performance-considerations)
- [参照実装](#reference-implementation)

<span id="introduction"></span>

はじめに
----------------

この文書では、xxHashダイジェストアルゴリズムの32ビット版と64ビット版である`XXH32`と`XXH64`を説明します。アルゴリズムは、任意の長さのメッセージと任意指定のシード値を入力として受け取り、「フィンガープリント」または「ダイジェスト」として32ビットまたは64ビットの出力を生成します。

xxHashは主に速度を重視して設計されています。非暗号学的と位置づけられており、意図的な衝突（異なる2つのメッセージが同じダイジェストを持つこと）を避けたり、あらかじめ定めたダイジェストを持つメッセージの作成を防いだりすることを目的としていません。

XXH32は32ビットマシンで高速に動くよう設計されています。
XXH64は64ビットマシンで高速に動くよう設計されています。
両者の出力は異なります。
ただし、同じバリアントは、使うCPUやOSにかかわらず、まったく同じ出力を生成しなければなりません。特に、CPUのエンディアンやビット幅がどのようであっても、結果は同一です。

### 演算の記法

すべての演算は、{32,64}ビット幅の剰余演算として行います。算術オーバーフローは想定内です。
`XXH32`は32ビットの剰余演算を使います。
`XXH64`と`XXH3`は64ビットの剰余演算を使います。
演算が入力やシークレットを複数バイトの値として取り込む場合は、リトルエンディアン形式で読み取ります。

- `+`：剰余加算を表します。
- `-`：剰余減算を表します。
- `*`：剰余乗算を表します。
    - **例外：** `XXH3`で`(u128)x * (u128)y`の形になっている場合は、64ビット同士の通常の乗算を行い、完全な128ビットの結果を得ることを表します。
- `X <<< s`：`X`を左に`s`ビット循環シフト（回転）して得られる値を表します。
- `X >> s`：`X`を右にsビットシフトして得られる値を表します。上位`s`ビットは`0`になります。
- `X << s`：`X`を左にsビットシフトして得られる値を表します。下位`s`ビットは`0`になります。
- `X xor Y`：同じビット幅の`X`と`Y`のビット単位XORを表します。
- `X | Y`：同じビット幅の`X`と`Y`のビット単位ORを表します。
- `~X`：`X`のビット単位否定を表します。

<span id="xxh32-algorithm-description"></span>

XXH32アルゴリズムの説明
-------------------------------------

### 概要

入力として任意の長さ`L`のメッセージがあり、そのダイジェストを求めたいとします。ここで`L`は任意の非負整数で、ゼロでもかまいません。メッセージのダイジェストを計算するため、次の手順を実行します。

アルゴリズムは、入力を16バイトの*ストライプ*に分けて取り込み、変換します。変換した値は4つの「アキュムレーター」に保存し、それぞれが符号なし32ビット値を保持します。各アキュムレーターは独立して並列処理でき、複数の実行ユニットを持つCPUで処理を高速化できます。

アルゴリズムは、32ビットの加算、乗算、回転、シフト、XORを使います。多くの演算では32ビットの素数定数が必要で、すべてを以下に定義します。

```c
  static const u32 PRIME32_1 = 0x9E3779B1U;  // 0b10011110001101110111100110110001
  static const u32 PRIME32_2 = 0x85EBCA77U;  // 0b10000101111010111100101001110111
  static const u32 PRIME32_3 = 0xC2B2AE3DU;  // 0b11000010101100101010111000111101
  static const u32 PRIME32_4 = 0x27D4EB2FU;  // 0b00100111110101001110101100101111
  static const u32 PRIME32_5 = 0x165667B1U;  // 0b00010110010101100110011110110001
```

これらの定数は素数で、1と0のビットがよく混ざり、規則的すぎることも偏りすぎることもありません。こうした性質は分散能力に役立ちます。

### 手順1：内部アキュムレーターを初期化する

各アキュムレーターには、任意指定の入力`seed`に基づく初期値を設定します。`seed`は任意指定なので、`0`でもかまいません。

```c
  u32 acc1 = seed + PRIME32_1 + PRIME32_2;
  u32 acc2 = seed + PRIME32_2;
  u32 acc3 = seed + 0;
  u32 acc4 = seed - PRIME32_1;
```

#### 特別な場合：入力が16バイト未満

入力が小さすぎる場合（< 16バイト）、アルゴリズムはストライプを処理しません。そのため、並列アキュムレーターも使いません。

この場合は、1つのアキュムレーターを使って簡略化した初期化を行います。

```c
  u32 acc  = seed + PRIME32_5;
```

その後、アルゴリズムは直接手順4へ進みます。

### 手順2：ストライプを処理する

ストライプは、連続した16バイトの区間です。
これを4バイトずつの4つの*レーン*に均等に分けます。
第1レーンでアキュムレーター1を更新し、第2レーンでアキュムレーター2を更新します。以下も同様です。

各レーンは、対応する32ビット値を**リトルエンディアン**形式で読み取ります。

各{レーン、アキュムレーター}の組に対する更新処理を*ラウンド*と呼び、次の式を適用します。

```c
  accN = accN + (laneN * PRIME32_2);
  accN = accN <<< 13;
  accN = accN * PRIME32_1;
```

これは、入力*レーン*の任意のビットが出力*アキュムレーター*の複数のビットに影響するようにビットをかき混ぜます。すべての演算は2^32を法として行います。

入力は、完全なストライプを1つずつ消費します。入力全体を消費するまで、手順2を必要な回数だけ繰り返します。ただし、最後に残ったストライプを構成できないバイト（< 16バイト）は除きます。
その状態になったら手順3へ進みます。

### 手順3：アキュムレーターを統合する

前の手順の4つのレーンアキュムレーターをまとめ、同じビット幅（32ビット）の1つのアキュムレーターにします。式は次のとおりです。

```c
  acc = (acc1 <<< 1) + (acc2 <<< 7) + (acc3 <<< 12) + (acc4 <<< 18);
```

### 手順4：入力の長さを加える

この段階では、入力全体の長さは分かっているものとします。この手順では、その長さをアキュムレーターに加えるだけです。これにより、長さが最終的な混合に加わります。

```c
  acc = acc + (u32)inputLength;
```

入力の長さが32ビットでは表せないほど大きい場合は、下位32ビットだけをアキュムレーターに加えることに注意してください。

### 手順5：残りの入力を消費する

入力には、まだ消費していないバイトが最大15バイト残っている可能性があります。
最後の段階では、次の擬似コードに従ってそれらをダイジェストに取り込みます。

```c
  while (remainingLength >= 4) {
      lane = read_32bit_little_endian(input_ptr);
      acc = acc + lane * PRIME32_3;
      acc = (acc <<< 17) * PRIME32_4;
      input_ptr += 4; remainingLength -= 4;
  }

  while (remainingLength >= 1) {
      lane = read_byte(input_ptr);
      acc = acc + lane * PRIME32_5;
      acc = (acc <<< 11) * PRIME32_1;
      input_ptr += 1; remainingLength -= 1;
  }
```

この処理によって、入力のすべてのバイトが最終的な混合に含まれます。

### 手順6：最終的な混合（アバランシェ）

最終的な混合では、入力のすべてのビットが出力ダイジェストのどのビットにも影響する可能性を持つようにし、偏りのない分布を得ます。これはアバランシェ効果とも呼ばれます。

```c
  acc = acc xor (acc >> 15);
  acc = acc * PRIME32_2;
  acc = acc xor (acc >> 13);
  acc = acc * PRIME32_3;
  acc = acc xor (acc >> 16);
```

### 手順7：出力

`XXH32()`関数は、符号なし32ビット値を出力します。

結果をバイナリーや16進数の形式で保存・表示する必要があるシステムでは、通常の10進数形式と同じ値を再現するように正規形式を定義します。そのため、**ビッグエンディアン**形式（最上位バイトを先頭に置く）に従います。

<span id="xxh64-algorithm-description"></span>

XXH64アルゴリズムの説明
-------------------------------------

### 概要

`XXH64`のアルゴリズム構造は`XXH32`とよく似ています。主な違いは、`XXH64`が64ビット演算を使うことです。これにより、64ビットに対応するシステムではメモリ転送が速くなりますが、64ビット演算を効率的に実行できるCPUの能力にも依存します。

アルゴリズムは、入力を32バイトの*ストライプ*に分けて取り込み、変換します。変換した値は4つの「アキュムレーター」に保存し、それぞれが符号なし64ビット値を保持します。各アキュムレーターは独立して並列処理でき、複数の実行ユニットを持つCPUで処理を高速化できます。

アルゴリズムは、64ビットの加算、乗算、回転、シフト、XORを使います。多くの演算では64ビットの素数定数が必要で、すべてを以下に定義します。

```c
  static const u64 PRIME64_1 = 0x9E3779B185EBCA87ULL;  // 0b1001111000110111011110011011000110000101111010111100101010000111
  static const u64 PRIME64_2 = 0xC2B2AE3D27D4EB4FULL;  // 0b1100001010110010101011100011110100100111110101001110101101001111
  static const u64 PRIME64_3 = 0x165667B19E3779F9ULL;  // 0b0001011001010110011001111011000110011110001101110111100111111001
  static const u64 PRIME64_4 = 0x85EBCA77C2B2AE63ULL;  // 0b1000010111101011110010100111011111000010101100101010111001100011
  static const u64 PRIME64_5 = 0x27D4EB2F165667C5ULL;  // 0b0010011111010100111010110010111100010110010101100110011111000101
```

これらの定数は素数で、1と0のビットがよく混ざり、規則的すぎることも偏りすぎることもありません。こうした性質は分散能力に役立ちます。

### 手順1：内部アキュムレーターを初期化する

各アキュムレーターには、任意指定の入力`seed`に基づく初期値を設定します。`seed`は任意指定なので、`0`でもかまいません。

```c
  u64 acc1 = seed + PRIME64_1 + PRIME64_2;
  u64 acc2 = seed + PRIME64_2;
  u64 acc3 = seed + 0;
  u64 acc4 = seed - PRIME64_1;
```

#### 特別な場合：入力が32バイト未満

入力が小さすぎる場合（< 32バイト）、アルゴリズムはストライプを処理しません。そのため、並列アキュムレーターも使いません。

この場合は、1つのアキュムレーターを使って簡略化した初期化を行います。

```c
  u64 acc  = seed + PRIME64_5;
```

その後、アルゴリズムは直接手順4へ進みます。

### 手順2：ストライプを処理する

ストライプは、連続した32バイトの区間です。
これを8バイトずつの4つの*レーン*に均等に分けます。
第1レーンでアキュムレーター1を更新し、第2レーンでアキュムレーター2を更新します。以下も同様です。

各レーンは、対応する64ビット値を**リトルエンディアン**形式で読み取ります。

各{レーン、アキュムレーター}の組に対する更新処理を*ラウンド*と呼び、次の式を適用します。

```c
round(accN,laneN):
  accN = accN + (laneN * PRIME64_2);
  accN = accN <<< 31;
  return accN * PRIME64_1;
```

これは、入力*レーン*の任意のビットが出力*アキュムレーター*の複数のビットに影響するようにビットをかき混ぜます。すべての演算は2^64を法として行います。

入力は、完全なストライプを1つずつ消費します。入力全体を消費するまで、手順2を必要な回数だけ繰り返します。ただし、最後に残ったストライプを構成できないバイト（< 32バイト）は除きます。
その状態になったら手順3へ進みます。

### 手順3：アキュムレーターを統合する

前の手順の4つのレーンアキュムレーターをまとめ、同じビット幅（64ビット）の1つのアキュムレーターにします。式は次のとおりです。

アキュムレーターの統合は32ビット版よりも複雑で、*mergeAccumulator()*という別の関数を定義する必要があります。

```c
mergeAccumulator(acc,accN):
  acc  = acc xor round(0, accN);
  acc  = acc * PRIME64_1;
  return acc + PRIME64_4;
```

この関数を、統合の式で次のように使います。

```c
  acc = (acc1 <<< 1) + (acc2 <<< 7) + (acc3 <<< 12) + (acc4 <<< 18);
  acc = mergeAccumulator(acc, acc1);
  acc = mergeAccumulator(acc, acc2);
  acc = mergeAccumulator(acc, acc3);
  acc = mergeAccumulator(acc, acc4);
```

### 手順4：入力の長さを加える

この段階では、入力全体の長さは分かっているものとします。この手順では、その長さをアキュムレーターに加えるだけです。これにより、長さが最終的な混合に加わります。

```c
  acc = acc + inputLength;
```

### 手順5：残りの入力を消費する

入力には、まだ消費していないバイトが最大31バイト残っている可能性があります。
最後の段階では、次の擬似コードに従ってそれらをダイジェストに取り込みます。

```c
  while (remainingLength >= 8) {
      lane = read_64bit_little_endian(input_ptr);
      acc = acc xor round(0, lane);
      acc = (acc <<< 27) * PRIME64_1;
      acc = acc + PRIME64_4;
      input_ptr += 8; remainingLength -= 8;
  }

  if (remainingLength >= 4) {
      lane = read_32bit_little_endian(input_ptr);
      acc = acc xor (lane * PRIME64_1);
      acc = (acc <<< 23) * PRIME64_2;
      acc = acc + PRIME64_3;
      input_ptr += 4; remainingLength -= 4;
  }

  while (remainingLength >= 1) {
      lane = read_byte(input_ptr);
      acc = acc xor (lane * PRIME64_5);
      acc = (acc <<< 11) * PRIME64_1;
      input_ptr += 1; remainingLength -= 1;
  }
```

この処理によって、入力のすべてのバイトが最終的な混合に含まれます。

### 手順6：最終的な混合（アバランシェ）

最終的な混合では、入力のすべてのビットが出力ダイジェストのどのビットにも影響する可能性を持つようにし、偏りのない分布を得ます。これはアバランシェ効果とも呼ばれます。

```c
  acc = acc xor (acc >> 33);
  acc = acc * PRIME64_2;
  acc = acc xor (acc >> 29);
  acc = acc * PRIME64_3;
  acc = acc xor (acc >> 32);
```

### 手順7：出力

`XXH64()`関数は、符号なし64ビット値を出力します。

結果をバイナリーや16進数の形式で保存・表示する必要があるシステムでは、通常の10進数形式と同じ値を再現するように正規形式を定義します。そのため、**ビッグエンディアン**形式（最上位バイトを先頭に置く）に従います。

<span id="xxh3-algorithm-overview"></span>

XXH3アルゴリズムの概要
-------------------------------------

XXH3には、XXH3-64とXXH3-128（またはXXH128）という2つの版があります。それぞれ64ビットと128ビットの出力を生成します。

XXH3は、小さい入力（0–16バイト）、中程度の入力（17–240バイト）、大きい入力（241バイト以上）で異なるアルゴリズムを使います。小さい入力と中程度の入力のアルゴリズムは、性能を重視して最適化されています。3つのアルゴリズムを以下の節で説明します。

多くの演算では64ビットの素数定数が必要です。そのほとんどはXXH32とXXH64で使う定数と同じもので、すべてを以下に定義します。

```c
  static const u64 PRIME32_1 = 0x9E3779B1U;  // 0b10011110001101110111100110110001
  static const u64 PRIME32_2 = 0x85EBCA77U;  // 0b10000101111010111100101001110111
  static const u64 PRIME32_3 = 0xC2B2AE3DU;  // 0b11000010101100101010111000111101
  static const u64 PRIME64_1 = 0x9E3779B185EBCA87ULL;  // 0b1001111000110111011110011011000110000101111010111100101010000111
  static const u64 PRIME64_2 = 0xC2B2AE3D27D4EB4FULL;  // 0b1100001010110010101011100011110100100111110101001110101101001111
  static const u64 PRIME64_3 = 0x165667B19E3779F9ULL;  // 0b0001011001010110011001111011000110011110001101110111100111111001
  static const u64 PRIME64_4 = 0x85EBCA77C2B2AE63ULL;  // 0b1000010111101011110010100111011111000010101100101010111001100011
  static const u64 PRIME64_5 = 0x27D4EB2F165667C5ULL;  // 0b0010011111010100111010110010111100010110010101100110011111000101
  static const u64 PRIME_MX1 = 0x165667919E3779F9ULL;  // 0b0001011001010110011001111001000110011110001101110111100111111001
  static const u64 PRIME_MX2 = 0x9FB21C651E98DF25ULL;  // 0b1001111110110010000111000110010100011110100110001101111100100101
```

`XXH3_64bits()`関数は、符号なし64ビット値を生成します。
`XXH3_128bits()`関数は、`XXH128_hash_t`構造体を生成します。構造体の`low64`と`high64`には、結果の下位64ビットと上位64ビットの半分ずつの値がそれぞれ含まれます。

結果をバイナリーや16進数の形式で保存・表示する必要があるシステムでは、通常の10進数形式と同じ値を再現するように正規形式を定義します。そのため、**ビッグエンディアン**形式（最上位バイトを先頭に置く）に従います。

### シードとシークレット

XXH3は、ハッシュ処理で使う2つの設定可能な定数、シードとシークレットを導入することで、シード付きのハッシュ処理を提供します。シードは符号なし64ビット値で、シークレットは少なくとも136バイトのバイト配列です。デフォルトのシードは0で、デフォルトのシークレットは次の192バイトの値です。

```c
static const u8 defaultSecret[192] = {
  0xb8, 0xfe, 0x6c, 0x39, 0x23, 0xa4, 0x4b, 0xbe, 0x7c, 0x01, 0x81, 0x2c, 0xf7, 0x21, 0xad, 0x1c,
  0xde, 0xd4, 0x6d, 0xe9, 0x83, 0x90, 0x97, 0xdb, 0x72, 0x40, 0xa4, 0xa4, 0xb7, 0xb3, 0x67, 0x1f,
  0xcb, 0x79, 0xe6, 0x4e, 0xcc, 0xc0, 0xe5, 0x78, 0x82, 0x5a, 0xd0, 0x7d, 0xcc, 0xff, 0x72, 0x21,
  0xb8, 0x08, 0x46, 0x74, 0xf7, 0x43, 0x24, 0x8e, 0xe0, 0x35, 0x90, 0xe6, 0x81, 0x3a, 0x26, 0x4c,
  0x3c, 0x28, 0x52, 0xbb, 0x91, 0xc3, 0x00, 0xcb, 0x88, 0xd0, 0x65, 0x8b, 0x1b, 0x53, 0x2e, 0xa3,
  0x71, 0x64, 0x48, 0x97, 0xa2, 0x0d, 0xf9, 0x4e, 0x38, 0x19, 0xef, 0x46, 0xa9, 0xde, 0xac, 0xd8,
  0xa8, 0xfa, 0x76, 0x3f, 0xe3, 0x9c, 0x34, 0x3f, 0xf9, 0xdc, 0xbb, 0xc7, 0xc7, 0x0b, 0x4f, 0x1d,
  0x8a, 0x51, 0xe0, 0x4b, 0xcd, 0xb4, 0x59, 0x31, 0xc8, 0x9f, 0x7e, 0xc9, 0xd9, 0x78, 0x73, 0x64,
  0xea, 0xc5, 0xac, 0x83, 0x34, 0xd3, 0xeb, 0xc3, 0xc5, 0x81, 0xa0, 0xff, 0xfa, 0x13, 0x63, 0xeb,
  0x17, 0x0d, 0xdd, 0x51, 0xb7, 0xf0, 0xda, 0x49, 0xd3, 0x16, 0x55, 0x26, 0x29, 0xd4, 0x68, 0x9e,
  0x2b, 0x16, 0xbe, 0x58, 0x7d, 0x47, 0xa1, 0xfc, 0x8f, 0xf8, 0xb8, 0xd1, 0x7a, 0xd0, 0x31, 0xce,
  0x45, 0xcb, 0x3a, 0x8f, 0x95, 0x16, 0x04, 0x28, 0xaf, 0xd7, 0xfb, 0xca, 0xbb, 0x4b, 0x40, 0x7e,
};
```

シードとシークレットは、ハッシュ関数の`*_withSecret`版と`*_withSeed`版を使って任意に指定できます。

シードとシークレットを同時に指定することはできません（`*_withSecretAndSeed`は、240バイト以下の短い入力と中程度の入力では実際には`*_withSeed`、大きい入力では`*_withSecret`です）。一方を指定すると、他方はデフォルト値を使います。
ただし、1つ例外があります。入力が大きく（> 240バイト）、シードが指定されている場合は、シード値とデフォルトのシークレットから、次の手順でシークレットを導出します。

```c
deriveSecret(u64 seed):
  u64 derivedSecret[24] = defaultSecret[0:192];
  for (i = 0; i < 12; i++) {
    derivedSecret[i*2] += seed;
    derivedSecret[i*2+1] -= seed;
  }
  return derivedSecret; // convert to u8[192] (little-endian)
```

導出処理では、シークレットを24個の64ビット値として扱います。XXH3のアルゴリズムでも同様に、配列の連続した区間を1つ以上の32ビット値または64ビット値として扱い、シークレットを読み取ります。**シークレットの値は常にリトルエンディアン形式で読み取ります。**

### 最終的な混合の手順（アバランシェ）

入力のすべてのビットが、出力ダイジェストのどのビットにも影響する可能性を持つようにするため（アバランシェ効果）、XXH3アルゴリズムの最後の手順では通常、64ビット値のビットを混合する2つの固定演算のいずれかを使います。以下のXXH3の説明では、これらの演算を`avalanche()`と`avalanche_XXH64()`と表します。

```c
avalanche(u64 x):
  x = x xor (x >> 37);
  x = x * PRIME_MX1;
  x = x xor (x >> 32);
  return x;

avalanche_XXH64(u64 x):
  x = x xor (x >> 33);
  x = x * PRIME64_2;
  x = x xor (x >> 29);
  x = x * PRIME64_3;
  x = x xor (x >> 32);
  return x;
```

<span id="xxh3-algorithm-description-for-small-inputs"></span>

XXH3アルゴリズムの説明（小さい入力）
-------------------------------------

小さい入力（0–16バイト）のアルゴリズムは、空の入力、1–3バイト、4–8バイト、9–16バイトという4つの場合にさらに分かれます。

アルゴリズムはバイトスワップ演算を使います。この演算は、32ビット値または64ビット値のバイト順を反転します。32ビット版と64ビット版を、それぞれ`bswap32`と`bswap64`と表します。

### 空の入力

空の入力のハッシュは、シードとシークレットの一部から計算します。

```c
XXH3_64_empty():
  u64 secretWords[2] = secret[56:72];
  return avalanche_XXH64(seed xor secretWords[0] xor secretWords[1]);

XXH3_128_empty():
  u64 secretWords[4] = secret[64:96];
  return {avalanche_XXH64(seed xor secretWords[0] xor secretWords[1]), // lower half
          avalanche_XXH64(seed xor secretWords[2] xor secretWords[3])}; // higher half
```

### 1–3バイトの入力

アルゴリズムは、入力のバイトとその長さを組み合わせた1つの32ビット値から始めます。

```c
u32 combined = (u32)input[inputLength-1] | ((u32)inputLength << 8) |
               ((u32)input[0] << 16) | ((u32)input[inputLength>>1] << 24);
// LSB          8       16           24                    MSB
//  | last byte | length | first byte | middle-or-last byte |
```

次に、この値とシークレットの先頭8バイト（XXH3-64）または16バイト（XXH3-128）から、最終的な出力を計算します。ここでは、シークレットを通常の64ビット値ではなく、32ビット値として読み取ります。

```c
XXH3_64_1to3():
  u32 secretWords[2] = secret[0:8];
  u64 value = ((u64)(secretWords[0] xor secretWords[1]) + seed) xor (u64)combined;
  return avalanche_XXH64(value);

XXH3_128_1to3():
  u32 secretWords[4] = secret[0:16];
  u64 low = ((u64)(secretWords[0] xor secretWords[1]) + seed) xor (u64)combined;
  u64 high = ((u64)(secretWords[2] xor secretWords[3]) - seed) xor (u64)(bswap32(combined) <<< 13);
  // note that the bswap32(combined) <<< 13 above is 32-bit rotate
  return {avalanche_XXH64(low), // lower half
          avalanche_XXH64(high)}; // higher half
```

XXH3-64の結果は、XXH3-128の結果の下位半分になることに注意してください。

### 4–8バイトの入力

アルゴリズムは、入力の先頭4バイトと末尾4バイトをリトルエンディアンの32ビット値として読み取り、変更したシードを用意することから始めます。

```c
u32 inputFirst = input[0:4];
u32 inputLast = input[inputLength-4:inputLength];
u64 modifiedSeed = seed xor ((u64)bswap32((u32)lowerHalf(seed)) << 32);
```

これらの値もシークレットの一部と組み合わせ、最終的な値を生成します。

```c
XXH3_64_4to8():
  u64 secretWords[2] = secret[8:24];
  u64 combined = (u64)inputLast | ((u64)inputFirst << 32);
  u64 value = ((secretWords[0] xor secretWords[1]) - modifiedSeed) xor combined;
  value = value xor (value <<< 49) xor (value <<< 24);
  value = value * PRIME_MX2;
  value = value xor ((value >> 35) + inputLength);
  value = value * PRIME_MX2;
  value = value xor (value >> 28);
  return value;

XXH3_128_4to8():
  u64 secretWords[2] = secret[16:32];
  u64 combined = (u64)inputFirst | ((u64)inputLast << 32);
  u64 value = ((secretWords[0] xor secretWords[1]) + modifiedSeed) xor combined;
  u128 mulResult = (u128)value * (u128)(PRIME64_1 + (inputLength << 2));
  u64 high = higherHalf(mulResult); // mulResult >> 64
  u64 low = lowerHalf(mulResult); // mulResult & 0xFFFFFFFFFFFFFFFF
  high = high + (low << 1);
  low = low xor (high >> 3);
  low = low xor (low >> 35);
  low = low * PRIME_MX2;
  low = low xor (low >> 28);
  high = avalanche(high);
  return {low, high};
```

### 9–16バイトの入力

アルゴリズムは、入力の先頭8バイトと末尾8バイトをリトルエンディアンの64ビット値として読み取ることから始めます。

```c
u64 inputFirst = input[0:8];
u64 inputLast = input[inputLength-8:inputLength];
```

ここでも、これらの値をシークレットの一部と組み合わせ、最終的な値を生成します。

```c
XXH3_64_9to16():
  u64 secretWords[4] = secret[24:56];
  u64 low = ((secretWords[0] xor secretWords[1]) + seed) xor inputFirst;
  u64 high = ((secretWords[2] xor secretWords[3]) - seed) xor inputLast;
  u128 mulResult = (u128)low * (u128)high;
  u64 value = inputLength + bswap64(low) + high + (u64)(lowerHalf(mulResult) xor higherHalf(mulResult));
  return avalanche(value);

XXH3_128_9to16():
  u64 secretWords[4] = secret[32:64];
  u64 val1 = ((secretWords[0] xor secretWords[1]) - seed) xor inputFirst xor inputLast;
  u64 val2 = ((secretWords[2] xor secretWords[3]) + seed) xor inputLast;
  u128 mulResult = (u128)val1 * (u128)PRIME64_1;
  u64 low = lowerHalf(mulResult) + ((u64)(inputLength - 1) << 54);
  u64 high = higherHalf(mulResult) + ((u64)higherHalf(val2) << 32) + (u64)lowerHalf(val2) * PRIME32_2;
  // the above line can also be simplified to higherHalf(mulResult) + val2 + (u64)lowerHalf(val2) * (PRIME32_2 - 1);
  low = low xor bswap64(high);
  // the following three lines are in fact a 128x64 -> 128 multiplication ({low,high} = (u128){low,high} * PRIME64_2)
  u128 mulResult2 = (u128)low * (u128)PRIME64_2;
  low = lowerHalf(mulResult2);
  high = higherHalf(mulResult2) + high * PRIME64_2;
  return {avalanche(low), // lower half
          avalanche(high)}; // higher half
```

<span id="xxh3-algorithm-description-for-medium-inputs"></span>

XXH3アルゴリズムの説明（中程度の入力）
-------------------------------------

このアルゴリズムは、中程度の入力（17–240バイト）に使います。内部のハッシュ状態は、1つ（XXH3-64）または2つ（XXH3-128）の「アキュムレーター」に保存し、それぞれが符号なし64ビット値を保持します。

### 手順1：内部アキュムレーターを初期化する

アキュムレーターは入力の長さに基づいて初期化します。

```c
// For XXH3-64
u64 acc = inputLength * PRIME64_1;

// For XXH3-128
u64 acc[2] = {inputLength * PRIME64_1, 0};
```

### 手順2：入力を処理する

この手順は、17–128バイトの入力と129–240バイトの入力という2つの場合にさらに分かれます。

#### 混合演算

この手順の構成要素として、16バイトのデータ区間、16バイトのシークレット区間、シードを混合して64ビット値にする演算を使います。この演算は、データとシークレットの区間をリトルエンディアンの64ビット値として扱います。

```c
mixStep(u8 data[16], size secretOffset, u64 seed):
  u64 dataWords[2] = data[0:16];
  u64 secretWords[2] = secret[secretOffset:secretOffset+16];
  u128 mulResult = (u128)(dataWords[0] xor (secretWords[0] + seed)) *
                   (u128)(dataWords[1] xor (secretWords[1] - seed));
  return lowerHalf(mulResult) xor higherHalf(mulResult);
```

XXH3-128では、混合演算を常に2つずつの組で呼び出します。2つの16バイトのデータ区間を32バイトのシークレット区間と混合し、それに応じてアキュムレーターを更新します。

```c
mixTwoChunks(u8 data1[16], u8 data2[16], size secretOffset, u64 seed):
  u64 dataWords1[2] = data1[0:16]; // again, little-endian conversion
  u64 dataWords2[2] = data2[0:16];
  acc[0] = acc[0] + mixStep(data1, secretOffset, seed);
  acc[1] = acc[1] + mixStep(data2, secretOffset + 16, seed);
  acc[0] = acc[0] xor (dataWords2[0] + dataWords2[1]);
  acc[1] = acc[1] xor (dataWords1[0] + dataWords1[1]);
```

入力を複数の16バイトのチャンクに分けて混合し、結果をアキュムレーターに加えます。

#### 17–128バイトの入力

入力の先頭から*N*個、末尾から*N*個の16バイトのチャンクを読み取ります。*N*は、これらの2*N*個のチャンクで入力全体を覆う最小の数です。チャンクを対にして混合し、その結果をアキュムレーターに累積します。

```c
// the loop variable `i` should be signed to avoid underflow in implementation
processInput_XXH3_64_17to128():
  u64 numRounds = ((inputLength - 1) >> 5) + 1;
  for (i = numRounds - 1; i >= 0; i--) {
    size offsetStart = i*16;
    size offsetEnd = inputLength - i*16 - 16;
    acc += mixStep(input[offsetStart:offsetStart+16], i*32, seed);
    acc += mixStep(input[offsetEnd:offsetEnd+16], i*32+16, seed);
  }

processInput_XXH3_128_17to128():
  u64 numRounds = ((inputLength - 1) >> 5) + 1;
  for (i = numRounds - 1; i >= 0; i--) {
    size offsetStart = i*16;
    size offsetEnd = inputLength - i*16 - 16;
    mixTwoChunks(input[offsetStart:offsetStart+16], input[offsetEnd:offsetEnd+16], i*32, seed);
  }
```

#### 129–240バイトの入力

入力を16バイト（XXH3-64）または32バイト（XXH3-128）のチャンクに分けます。まず先頭128バイトをチャンクごとに混合し、その後、中間のアバランシェ演算を行います。続いて、残りの完全なチャンクを処理し、最後に末尾の16バイトまたは32バイトを1つのチャンクとして処理します。

```c
processInput_XXH3_64_129to240():
  u64 numChunks = inputLength >> 4;
  for (i = 0; i < 8; i++) {
    acc += mixStep(input[i*16:i*16+16], i*16, seed);
  }
  acc = avalanche(acc);
  for (i = 8; i < numChunks; i++) {
    acc += mixStep(input[i*16:i*16+16], (i-8)*16 + 3, seed);
  }
  acc += mixStep(input[inputLength-16:inputLength], 119, seed);

processInput_XXH3_128_129to240():
  u64 numChunks = inputLength >> 5;
  for (i = 0; i < 4; i++) {
    mixTwoChunks(input[i*32:i*32+16], input[i*32+16:i*32+32], i*32, seed);
  }
  acc[0] = avalanche(acc[0]);
  acc[1] = avalanche(acc[1]);
  for (i = 4; i < numChunks; i++) {
    mixTwoChunks(input[i*32:i*32+16], input[i*32+16:i*32+32], (i-4)*32 + 3, seed);
  }
  // note that the half-chunk order and the seed is different here
  mixTwoChunks(input[inputLength-16:inputLength], input[inputLength-32:inputLength-16], 103, (u64)0 - seed);
```

### 手順3：終了処理

最終結果をアキュムレーターから取り出します。

```c
XXH3_64_17to240():
  return avalanche(acc);

XXH3_128_17to240():
  u64 low = acc[0] + acc[1];
  u64 high = (acc[0] * PRIME64_1) + (acc[1] * PRIME64_4) + (((u64)inputLength - seed) * PRIME64_2);
  return {avalanche(low), // lower half
          (u64)0 - avalanche(high)}; // higher half
```
