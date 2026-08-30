# Awesomeタイトル・序文正規化 Preview検証

- 検証日: 2026-08-31
- Cloudflare Pages環境: Preview
- branch: `awesome-introduction-normalization-preview`
- deployment ID: `cfc7aff9-c346-4d0a-99c7-07d101a784f6`
- 固有URL: `https://cfc7aff9.libx.pages.dev`
- branch alias: `https://awesome-introduction-normali.libx.pages.dev`
- 配置成果物: 4,754ファイル、646.00 MiB
- 配置成果物ツリーハッシュ: `dd9ff0d27b5ee657c7dac2afb93ecacdb2b42b306426bc56eeb7e8164961cf9a`
- 直前Production: `e2f480a1-2b26-4dd6-a6f5-6ea4b336f6b3`

## 配置結果

Wrangler 4.127.1の標準送信設定で、4,176件を新規送信し、578件を既存assetとして再利用した。asset uploadは1,620.79秒で完了し、deploymentは成功した。途中に数分単位の応答待ちはあったが、再開不能なエラーは発生しなかった。

## 検証結果

- トップ、英語overview、日本語overview、branch aliasはHTTP 200。
- 日本語overviewの`title`、H1、概要、meta descriptionは正規化判断と一致。
- overview序文内の画像、中央揃え要素は0件。
- metadata-only、RST由来、最大級Zsh PluginsページでH1と概要を確認。
- 最新版の英日リンクは`v2026-08-23`内の対応ページを維持。
- 最大級Zsh Pluginsページは390×844で横方向overflow 0。

タイトル・序文の外部表示検証は合格した。Productionは変更していない。

## Preview後の配信軽量化

Previewの遅延調査後、HTMLなどから到達不能なAstro静的生成用JavaScript 2,276件、189.90 MiBを配信成果物から除く処理を追加した。通常の統合ビルドで再生成した次候補は2,478ファイル、456.10 MiB、ツリーハッシュ`a2d0291f55105504852abe63d26d1a76ca82e9a83f694a8d70b856a492fd1538`である。

軽量化候補はruntime 95/95、smoke 13/13、配信予算検査、ローカル実ブラウザの最大級ページ・検索・JavaScript読込みへ合格した。CI経由の外部Previewを追加実施してからProduction候補として固定する。
