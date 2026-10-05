---
title: "LZ4: ストリーミングAPIの基礎"
licenseSource: "lz4-1-10-0-examples-streaming-api-basics-md"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>f5f623970b6f533586fe2cb6dd12bcd82f0852a35d1d3406eef2ab86323831e7</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/examples/streaming_api_basics.md\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/examples/streaming_api_basics.md.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の GPL-2.0-or-later（本掲載はversion2条件を履行） をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
---

<span id="lz4-streaming-api-basics"></span>
# LZ4ストリーミングAPIの基礎

著者: *Takayuki Matsuoka*

<span id="lz4-api-sets"></span>
## LZ4のAPI群

LZ4には次のAPI群があります。

- 「Auto Framing」API（lz4frame.h）: 通常のアプリケーションで最も推奨するAPIです。LZ4コマンドラインユーティリティやnode-lz4など、LZ4フレーム形式に準拠する他のツール・ライブラリとの相互運用性を保証します。
- 「Block」API: 単純な用途に推奨します。単一の生のメモリブロックをLZ4メモリブロックに圧縮し、その逆の展開も行います。
- 「Streaming」API: 複雑な処理のために設計されています。例えば、メモリが制限された環境で巨大なストリームデータを圧縮する場合です。

基本的には「Auto Framing」APIを使うべきです。ただし、高度なアプリケーションを書く場合は、Block APIやStreaming APIを使う出番です。

<span id="what-is-difference-between-block-and-streaming-api"></span>
## Block APIとStreaming APIの違い

Block APIは、単一の連続したメモリブロックを圧縮・展開します。言い換えると、LZ4ライブラリは、単一の連続したメモリブロックから冗長性を見つけます。Streaming APIも同じことを行いますが、隣接する複数の連続メモリブロックを圧縮・展開します。そのため、Streaming APIはBlock APIより多くの冗長性を見つけられる可能性があります。

次の図は、APIとブロックサイズによる違いを示します。これらの図では、元のデータを連続する4KiBytesのチャンクに分割しています。

```
Original Data
    +---------------+---------------+----+----+----+
    | 4KiB Chunk A  | 4KiB Chunk B  | C  | D  |... |
    +---------------+---------------+----+----+----+

Example (1) : Block API, 4KiB Block
    +---------------+---------------+----+----+----+
    | 4KiB Chunk A  | 4KiB Chunk B  | C  | D  |... |
    +---------------+---------------+----+----+----+
    | Block #1      | Block #2      | #3 | #4 |... |
    +---------------+---------------+----+----+----+

                    (No Dependency)


Example (2) : Block API, 8KiB Block
    +---------------+---------------+----+----+----+
    | 4KiB Chunk A  | 4KiB Chunk B  | C  | D  |... |
    +---------------+---------------+----+----+----+
    |            Block #1           |Block #2 |... |
    +--------------------+----------+-------+-+----+
          ^              |             ^    |
          |              |             |    |
          +--------------+             +----+
          Internal Dependency          Internal Dependency


Example (3) : Streaming API, 4KiB Block
    +---------------+---------------+-----+----+----+
    | 4KiB Chunk A  | 4KiB Chunk B  | C   | D  |... |
    +---------------+---------------+-----+----+----+
    | Block #1      | Block #2      | #3  | #4 |... |
    +---------------+----+----------+-+---+-+--+----+
          ^              |   ^        | ^   |
          |              |   |        | |   |
          +--------------+   +--------+ +---+
          Dependency         Dependency Dependency
```

- 例(1)には依存関係がありません。すべてのブロックを独立に圧縮します。
- 例(2)の8KiBytesブロックには、当然ながら内部の依存関係があります。ただし、ブロック#1と#2は依然として独立に圧縮します。
- 例(3)では、ブロック#2は#1に依存し、#3は#2と#1に、#4は#3、#2、#1に依存します。それ以降も同様です。

ここで、例(2)と(3)の違いが分かります。(2)ではチャンクBとCの間に依存関係がありませんが、(3)ではBとCの間に依存関係があります。この依存関係が圧縮率を改善します。

<span id="restriction-of-streaming-api"></span>
## Streaming APIの制約

効率のため、Streaming APIは、圧縮・展開時に依存するメモリの複製を保持しません。したがって、利用者がこの依存先のメモリを明示的に保持する必要があります。通常、「依存先のメモリ」は、直前に隣接する連続したメモリで、最大64KiBytesです。LZ4は、それより前のメモリにはアクセスしません。
