---
title: "LZ4: Snapパッケージ化"
licenseSource: "lz4-1-10-0-contrib-snap-readme-md"
documentContext:
  - kind: source
    html: "<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>。原文 SHA-256: <code>9b9d26c4c296d459c7d0daf3adf47895249a7b03fb3eb29f2b5dd60f0ff33e3b</code>。<a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/contrib/snap/README.md\">固定原典</a>、<a href=\"/docs/lz4/source/v1-10-0/originals/contrib/snap/README.md.txt\">変更していない原文と原通知</a>、<a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">固定上流ソース全体</a>、<a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p><p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の GPL-2.0-or-later（本掲載はversion2条件を履行） をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p><p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>"
  - kind: editorial
    html: "<p>原文の依存関係の説明には “with of from” という不自然な表記があります。訳文は、前後の依存関係の同梱と非共有の説明に沿って「他のパッケージと依存関係を共有しない」と解釈したものです。原文の表記は英語定本と原文ダウンロードに保持しています。</p>"
---

<span id="snap-packaging"></span>

Snap パッケージ化
--------------

このディレクトリには、lz4 の Snap パッケージを生成するために必要な設定が含まれています。Snap は汎用的な Linux パッケージです。任意のソースからアプリケーションを簡単にビルドし、<https://snapcraft.io/> へ公開することで、どの Linux ディストリビューションにも配布できます。Snap パッケージの重要な特徴は、理想的には、すべての依存関係を同梱した制御下の環境で実行され、システム上の他のパッケージと依存関係を共有しないよう、実行範囲が制限されている点です。ただし、少数の小さな例外があります。

基本的な構成と作業手順は次のとおりです。

  * バージョン情報などを含め、snap.snapcraft.yaml が最新であることを確認します。

  * snapcraft パッケージをインストールして実行し、Snap をビルドします。

  * snap/* の変更をリポジトリへ push します。もちろん、ビルドで生成された不要なファイルは除きます。

  * Snap Store で lz4 という名前の所有者として自分を登録します。

  * 新しい Snap を Snap Store へ公開します。

  * 任意の Linux ディストリビューションで 'snap install lz4' を実行し、Snap をインストールします。

  * インストール済みの lz4 は、すべて新しい版へ自動更新されます。

Snap の詳細は、<https://docs.snapcraft.io> と <https://forum.snapcraft.io/> を参照してください。
