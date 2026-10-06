---
title: "LZ4: 行単位のテキスト圧縮"
licenseSource: "lz4-1-10-0-examples-blockstreaming-linebyline-md"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>ed6bf3a195f0aa55c710c9cb785da3247f0285e7269478cced0b320d4405b312</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/examples/blockStreaming_lineByLine.md\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/examples/blockStreaming_lineByLine.md.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の GPL-2.0-or-later（本掲載はversion2条件を履行） をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>固定原文の旧API名を保持しています。LZ4 1.10.0のlib/lz4.hではLZ4_compress_continue()は非推奨で、LZ4_compress_fast_continue()を代替として示しています。原文の「Generally better compression ratio」は例の説明として訳し、今回の測定結果ではありません。「maintain its memory」「forget almost all memories」は原説明を保持した表現です。Streaming API自体が依存メモリの複製を保持するという意味に置き換えず、基礎文書で説明する利用者側のメモリ保持が必要です。展開節の「reverse order」は、直後に示す読み込み・展開・出力の手順に従い「逆の処理」と訳しています。</p>"
---

<span id="lz4-streaming-api-example--line-by-line-text-compression"></span>
# LZ4ストリーミングAPIの例: 行単位のテキスト圧縮

著者: *Takayuki Matsuoka*

`blockStreaming_lineByLine.c`は、行単位の逐次圧縮・展開を実装する、LZ4ストリーミングAPIのサンプルです。

次の制約に注意してください。

- まず「LZ4ストリーミングAPIの基礎」を読んでください。
- 比較的高度なアプリケーションの例です。
- 出力ファイルはlz4frameと互換性がなく、プラットフォームに依存します。

<span id="whats-the-point-of-this-example"></span>
## このサンプルのポイント

- 行単位の逐次圧縮・展開。
- 少量のメモリで巨大なファイルを扱う。
- 一般にBlock APIより高い圧縮率。
- 不均一なブロックサイズ。

<span id="how-the-compression-works"></span>
## 圧縮の仕組み

まず、入力用の「リングバッファー」と、出力用のLZ4圧縮データバッファーを確保します。

```
(1)
    Ring Buffer

    +--------+
    | Line#1 |
    +---+----+
        |
        v
     {Out#1}


(2)
    Prefix Mode Dependency
          +----+
          |    |
          v    |
    +--------+-+------+
    | Line#1 | Line#2 |
    +--------+---+----+
                 |
                 v
              {Out#2}


(3)
          Prefix   Prefix
          +----+   +----+
          |    |   |    |
          v    |   v    |
    +--------+-+------+-+------+
    | Line#1 | Line#2 | Line#3 |
    +--------+--------+---+----+
                          |
                          v
                       {Out#3}


(4)
                        External Dictionary Mode
                +----+   +----+
                |    |   |    |
                v    |   v    |
    ------+--------+-+------+-+--------+
          |  ....  | Line#X | Line#X+1 |
    ------+--------+--------+-----+----+
                            ^     |
                            |     v
                            |  {Out#X+1}
                            |
                          Reset


(5)
                                    Prefix
                                    +-----+
                                    |     |
                                    v     |
    ------+--------+--------+----------+--+-------+
          |  ....  | Line#X | Line#X+1 | Line#X+2 |
    ------+--------+--------+----------+-----+----+
                            ^                |
                            |                v
                            |            {Out#X+2}
                            |
                          Reset
```

次に、図(1)のように最初の行をリングバッファーに読み込み、`LZ4_compress_continue()`で圧縮します。初回は、LZ4は先行する依存先を知りません。そのため、その行を依存関係なしで圧縮し、LZ4圧縮データバッファーに圧縮した行{Out#1}を生成します。その後、{Out#1}をファイルに書き込み、リングバッファーのオフセットを進めます。

二番目の行にも同じ処理を行います（図(2)）。ただし、今度は、LZ4がLine#1への依存関係を使い、圧縮率を改善できます。この依存関係を「プレフィックスモード」と呼びます。

やがてLine#Xでリングバッファーの末尾に到達します（図(4)）。この時点でリングバッファーのオフセットをリセットすべきです。リセット後、Line#X+1のポインターは隣接していませんが、LZ4はまだそのメモリを保持しています。これを「外部辞書モード」と呼びます。

Line#X+2（図(5)）では、LZ4はついにほぼすべてのメモリを忘れますが、Line#X+1はまだ残っています。これはLine#2と同じ状況です。

テキストファイルの末尾まで、この手順を繰り返します。

<span id="how-the-decompression-works"></span>
## 展開の仕組み

展開では、逆の処理を行います。

- ファイルから圧縮した行をバッファーに読み込みます。
- リングバッファーに展開します。
- 展開したプレーンテキストの行をファイルに出力します。
- リングバッファーのオフセットを進めます。オフセットがリングバッファーの末尾を超えた場合は、リセットします。

圧縮ファイルの末尾まで、この手順を繰り返します。
