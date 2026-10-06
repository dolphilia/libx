---
title: "LZ4: Visual Studioソリューションの生成"
licenseSource: "lz4-1-10-0-build-visual-readme-md"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>a9cbf6a75a656a8991460f8560686ca1e230724e9e0c097940b18d960aa26bc4</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/build/visual/README.md\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/build/visual/README.md.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の GPL-2.0-or-later（本掲載はversion2条件を履行） をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
---

これらのスクリプトは、対応する MS Visual の特定の版向けに Visual Studio ソリューションを生成します。

これらのスクリプトを動作させるには、実行するシステムに `cmake` と対応する版の Visual Studio の両方がローカルにインストールされている必要があります。

`cmake` を標準以外のディレクトリにインストールしている場合、または特定の版の `cmake` を試したい場合は、対象の `cmake` ディレクトリを環境変数 `CMAKE_PATH` で指定できます。
