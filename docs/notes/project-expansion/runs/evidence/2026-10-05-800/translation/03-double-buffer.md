---
title: "LZ4: ダブルバッファー"
licenseSource: "lz4-1-10-0-examples-blockstreaming-doublebuffer-md"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>186607a249d039a9b558592719845ee13222284d4bc8c90eb577a1697007dab0</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/examples/blockStreaming_doubleBuffer.md\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/examples/blockStreaming_doubleBuffer.md.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の GPL-2.0-or-later（本掲載はversion2条件を履行） をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>固定原文の旧API名を保持しています。LZ4 1.10.0のlib/lz4.hではLZ4_compress_continue()は非推奨で、LZ4_compress_fast_continue()を代替として示しています。原文の「Always better compression ratio」は例の説明として訳し、今回の測定結果ではありません。圧縮節の「line」は原文のまま「行」とし、原文の「External Dictonaly mode」は「外部辞書モード」と訳しました。展開節の「reverse order」は、直後に示す先頭からの読み込み手順に従い「逆の処理」と訳しています。原文を逆順読み込みへ書き換えていません。</p>"
---

<span id="lz4-streaming-api-example--double-buffer"></span>
# LZ4ストリーミングAPIの例: ダブルバッファー

著者: *Takayuki Matsuoka*

`blockStreaming_doubleBuffer.c`は、ダブルバッファーによる圧縮・展開を実装する、LZ4ストリーミングAPIのサンプルです。

注意事項:

- まず「LZ4ストリーミングAPIの基礎」を読んでください。
- 比較的高度なアプリケーションの例です。
- 出力ファイルはlz4frameと互換性がなく、プラットフォームに依存します。

<span id="whats-the-point-of-this-example"></span>
## このサンプルのポイント

- 少量のメモリで巨大なファイルを扱う。
- Block APIより常に高い圧縮率。
- 均一なブロックサイズ。

<span id="how-the-compression-works"></span>
## 圧縮の仕組み

まず、入力用の「ダブルバッファー」と、出力用のLZ4圧縮データバッファーを確保します。ダブルバッファーには、「最初」のページ（Page#1）と「二番目」のページ（Page#2）の二つのページがあります。

```
        Double Buffer

      Page#1    Page#2
    +---------+---------+
    | Block#1 |         |
    +----+----+---------+
         |
         v
      {Out#1}


      Prefix Dependency
         +---------+
         |         |
         v         |
    +---------+----+----+
    | Block#1 | Block#2 |
    +---------+----+----+
                   |
                   v
                {Out#2}


   External Dictionary Mode
         +---------+
         |         |
         |         v
    +----+----+---------+
    | Block#3 | Block#2 |
    +----+----+---------+
         |
         v
      {Out#3}


      Prefix Dependency
         +---------+
         |         |
         v         |
    +---------+----+----+
    | Block#3 | Block#4 |
    +---------+----+----+
                   |
                   v
                {Out#4}
```

次に、最初のブロックをダブルバッファーの最初のページに読み込み、`LZ4_compress_continue()`で圧縮します。初回は、LZ4は先行する依存先を知りません。そのため、その行を依存関係なしで圧縮し、LZ4圧縮データバッファーに圧縮ブロック{Out#1}を生成します。その後、{Out#1}をファイルに書き込みます。

次に、二番目のブロックをダブルバッファーの二番目のページに読み込み、圧縮します。今度は、LZ4がBlock#1への依存関係を使い、圧縮率を改善できます。この依存関係を「プレフィックスモード」と呼びます。

次に、三番目のブロックをダブルバッファーの *最初* のページに読み込み、圧縮します。この場合も、LZ4はBlock#2への依存関係を使えます。この依存関係を「外部辞書モード」と呼びます。

ファイルの末尾まで、この手順を繰り返します。

<span id="how-the-decompression-works"></span>
## 展開の仕組み

展開では、逆の処理を行います。

- 最初の圧縮ブロックを読み込みます。
- 最初のページに展開し、そのページをファイルに書き込みます。
- 二番目の圧縮ブロックを読み込みます。
- 二番目のページに展開し、そのページをファイルに書き込みます。
- 三番目の圧縮ブロックを読み込みます。
- *最初* のページに展開し、そのページをファイルに書き込みます。

圧縮ファイルの末尾まで、この手順を繰り返します。
