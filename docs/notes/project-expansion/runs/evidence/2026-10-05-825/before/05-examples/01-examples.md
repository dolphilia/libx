---
title: "LZ4: サンプル"
licenseSource: "lz4-1-10-0-examples-readme-md"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>3dac202b4aa4c03b4921da6ffd2db11791373826ad668614b8ae48fab8283bb5</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/examples/README.md\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/examples/README.md.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の GPL-2.0-or-later（本掲載はversion2条件を履行） をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>本文の「すべてのサンプルはGPL-v2」は固定READMEの記述を保持したものです。固定入力のexamples/COPYINGはGPL-2.0-or-laterを指定し、simple_buffer.cとbench_functions.cには個別のBSD通知があります。個別通知を優先します。参照先4ページの日本語訳は作業中のため、現時点では英語定本へリンクしています。全ページ確定時に日本語参照を整合させます。</p>"
---

<span id="lz4-examples"></span>
# LZ4のサンプル

すべてのサンプルはGPL-v2ライセンスです。

<span id="documents"></span>
## 文書

- [ストリーミングAPIの基礎](/docs/lz4/v1-10-0/en/05-examples/02-streaming-basics/)
- サンプル
  - [ダブルバッファー](/docs/lz4/v1-10-0/en/05-examples/03-double-buffer/)
  - [行単位のテキスト圧縮](/docs/lz4/v1-10-0/en/05-examples/04-line-by-line/)
  - [辞書によるランダムアクセス](/docs/lz4/v1-10-0/en/05-examples/05-dictionary-random-access/)
