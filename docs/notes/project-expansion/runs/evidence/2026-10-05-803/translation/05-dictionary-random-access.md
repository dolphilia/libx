---
title: "LZ4: 辞書によるランダムアクセス"
licenseSource: "lz4-1-10-0-examples-dictionaryrandomaccess-md"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>013d1e25de9217ff6224d14522f2a562901c78216cafd832f77c1921175abfe7</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/examples/dictionaryRandomAccess.md\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/examples/dictionaryRandomAccess.md.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の GPL-2.0-or-later（本掲載はversion2条件を履行） をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>原文はN+1個のオフセットを明示しています。一方、圧縮節は末尾整数を「ブロック数」と呼び、図と展開節は「オフセット数」（N+1）として扱っています。固定dictionaryRandomAccess.cはoffsetsEnd - offsetsを書き、numOffsetsへ読み込みます。原文本文と図をそのまま保持し、食い違いを注記しています。以前のLibx英語注記にあった「原文はN個のオフセットと説明する」という誤りはサイクル802で訂正しました。展開節の「reverse order」は、直後のシーク・読み込み・展開手順に従い「逆の処理」と訳しています。</p>"
---

<span id="lz4-api-example--dictionary-random-access"></span>
# LZ4 APIの例: 辞書によるランダムアクセス

`dictionaryRandomAccess.c`は、辞書による圧縮と、ランダムアクセスによる展開を実装するLZ4 APIのサンプルです。

出力ファイルはlz4frameと互換性がなく、プラットフォームに依存する点に注意してください。

<span id="whats-the-point-of-this-example"></span>
## このサンプルのポイント

- 同種のファイルに対する辞書ベースの圧縮。
- 圧縮ブロックへのランダムアクセス。

<span id="how-the-compression-works"></span>
## 圧縮の仕組み

ファイルから辞書を読み込み、各ブロックの履歴として使います。これにより、圧縮率を保ちながら、各ブロックを独立させることができます。

```
    Dictionary
         +
         |
         v
    +---------+
    | Block#1 |
    +----+----+
         |
         v
      {Out#1}


    Dictionary
         +
         |
         v
    +---------+
    | Block#2 |
    +----+----+
         |
         v
      {Out#2}
```

マジックバイト`TEST`を書き、続いて圧縮ブロックを書いた後、ジャンプテーブルを書き出します。最後の4バイトは、ストリーム内のブロック数を格納する整数です。`N`個のブロックがある場合、最後の4バイトの直前に、各ブロックの先頭と末尾のオフセットを格納した、`N + 1`個の4バイト整数があります。簡単のため、`Offset#K`を、`Block#K`を書き出した後の総書き込みバイト数とし、マジックバイトも *含めます*。

```
+------+---------+     +---------+---+----------+     +----------+-----+
| TEST | Block#1 | ... | Block#N | 4 | Offset#1 | ... | Offset#N | N+1 |
+------+---------+     +---------+---+----------+     +----------+-----+
```

<span id="how-the-decompression-works"></span>
## 展開の仕組み

展開では、逆の処理を行います。

- ファイルの最後の4バイトにシークし、オフセット数を読み込みます。
- 各オフセットを配列に読み込みます。
- 読みたいデータを含む最初のブロックにシークします。最後のブロックを除き、各ブロックが固定量の非圧縮データを含むと分かっているため、場所を判定できます。最後のブロックは固定量でない場合があります。
- そのブロックを展開し、必要なデータをファイルに書き込みます。
- 次のブロックを読み込みます。
- 展開し、そのページをファイルに書き込みます。

必要なデータをすべて読み込むまで、この手順を繰り返します。
