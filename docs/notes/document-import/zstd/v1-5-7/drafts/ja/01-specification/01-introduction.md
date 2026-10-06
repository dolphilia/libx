<a id="source-zstandard-compression-format"></a>

# Zstandard圧縮形式

<a id="source-notices"></a>

### 通知

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is granted to copy and distribute this document
for any purpose and without charge,
including translations into other languages
and incorporation into compilations,
provided that the copyright notice and this notice are preserved,
and that any substantive changes or deletions from the original
are clearly marked.
Distribution of this document is unlimited.

通知の日本語訳：著作権表示と本通知を保持し、原文からの実質的な変更や削除を明確に表示することを条件として、他の言語への翻訳や編纂物への収録を含め、目的を問わず無償で本文書を複製・配布することを許可します。本文書の配布に制限はありません。

<a id="source-version"></a>

### 版

0.4.3 (2024-10-07)

<a id="source-introduction"></a>

## 導入

本文書の目的は、[Zstandardアルゴリズム](https://facebook.github.io/zstd/)を使用し、CPUの種類、オペレーティングシステム、ファイルシステム、文字集合に依存せず、ファイル圧縮、パイプ経由の圧縮、ストリーミング圧縮に適した可逆圧縮データ形式を定義することです。この仕様書は、ビットやその他の基本的なデータ表現を扱うプログラミングの基礎知識を前提とします。

順に与えられる入力データストリームが任意の長さであっても、あらかじめ上限を定めた量の中間記憶領域だけでデータを生成・処理できるため、データ通信にも利用できます。この形式はZstandard圧縮方式を使用し、データ破損の検出には任意で[xxHash-64チェックサム方式](https://cyan4973.github.io/xxHash/)を使用します。

この仕様が定義するデータ形式は、圧縮データへのランダムアクセスを可能にすることを目指していません。

以下で別途指定されていない限り、準拠する圧縮器は、本仕様に適合するデータを生成しなければなりません。ただし、すべての選択肢をサポートする必要はありません。

準拠する展開器は、本仕様に適合するパラメーターの組を少なくとも1組サポートし、その組で圧縮されたデータを展開できなければなりません。チェックサムなどの参考情報フィールドを無視してもかまいません。圧縮ストリームで指定されたパラメーターをサポートしない場合は、どのパラメーターが未対応なのかを説明する、曖昧でないエラーコードと対応するエラーメッセージを生成しなければなりません。

本仕様は、Zstandard形式へデータを圧縮するソフトウェア、またはZstandard形式からデータを展開するソフトウェアの実装者を対象とします。Zstandard形式には、移植性のあるCで記述されたオープンソースの参照実装があり、https://github.com/facebook/zstd で入手できます。

<a id="source-overall-conventions"></a>

### 全体の表記規則

本文書では次の表記を使用します。

- 角括弧、すなわち `[` と `]` は任意のフィールドやパラメーターを表します。
- 識別子の命名規則は `Mixed_Case_With_Underscores` です。

<a id="source-definitions"></a>

### 定義

Zstandardで圧縮された内容は、Zstandardの**フレーム**へ変換されます。複数のフレームを1つのファイルやストリームに連結できます。フレームは完全に独立しており、明確な始まりと終わり、および展開方法をデコーダーへ伝えるパラメーター群を持ちます。

フレームには1個以上の**ブロック**が格納されます。各ブロックにはヘッダーで説明される任意の内容が入り、その内容の最大サイズはフレームのパラメーターによって定まり、保証されます。フレームとは異なり、各ブロックを正しく復号するには前のブロックが必要です。ただし、後続のブロックを待たずに各ブロックを展開できるので、ストリーミング処理が可能です。

<a id="source-overview"></a>

## 概要

- [フレーム](/docs/zstd/v1-5-7/ja/01-specification/02-frames#source-frames)
  - [Zstandardフレーム](/docs/zstd/v1-5-7/ja/01-specification/02-frames#source-zstandard-frames)
    - [ブロック](/docs/zstd/v1-5-7/ja/01-specification/03-blocks#source-blocks)
      - [リテラルセクション](/docs/zstd/v1-5-7/ja/01-specification/03-blocks#source-literals-section)
      - [シーケンスセクション](/docs/zstd/v1-5-7/ja/01-specification/04-sequences#source-sequences-section)
      - [シーケンスの実行](/docs/zstd/v1-5-7/ja/01-specification/04-sequences#source-sequence-execution)
  - [スキップ可能なフレーム](/docs/zstd/v1-5-7/ja/01-specification/05-skippable-frames#source-skippable-frames)
- [エントロピー符号化](/docs/zstd/v1-5-7/ja/01-specification/06-fse#source-entropy-encoding)
  - [FSE](/docs/zstd/v1-5-7/ja/01-specification/06-fse#source-fse)
  - [Huffman符号化](/docs/zstd/v1-5-7/ja/01-specification/07-huffman#source-huffman-coding)
- [辞書形式](/docs/zstd/v1-5-7/ja/01-specification/08-dictionary#source-dictionary-format)
