---
title: "Awesome Directus"
description: "Directusを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-directus-community-awesome-directus-readme-md"
---

# Awesome Directus

Directusを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [リソース](#resources)
  - [公式](#official)
  - [コミュニティ](#community)
- [統合](#integration)
- [拡張機能](#extensions)
  - [拡張スクリプト](#extension-scripts)
  - [ツール](#tools)
- [記事](#articles)
  - [教育](#educational)
  - [個人](#personal)
- [例／ショーケース](#examples--showcases)

## リソース

### 公式

- [Documentation](https://docs.directus.io/getting-started/introduction/)
- [GitHub Repository](https://github.com/directus/directus)
- [Live Discussions on Discord](https://directus.chat)
- [Community Help Board](https://github.com/directus/directus/discussions/categories/q-a)
- [Video Tutorials on YouTube](https://www.youtube.com/c/DirectusVideos/featured)
- [Community Repositories](https://github.com/directus-community)

### コミュニティ

- [Directus Extensions](https://directusextensions.com) - Directus拡張機能、テーマ、OSなどを検索できるインデックス。
- [Portuguese YouTube Channel](https://www.youtube.com/c/DirectusBR)

## 統合

- [Official JS SDK](https://www.npmjs.com/package/@directus/sdk) - JS SDKは、JavaScriptで動くプロジェクト（ブラウザーとNode.js）内からDirectus APIの直感的なインターフェースを提供します。
- [Official Gatsby Source Plugin](https://www.npmjs.com/package/@directus/gatsby-source-directus) - Directus APIからGatsbyへデータを取り込むソースプラグイン。
- [react-directus](https://github.com/gremo/react-directus) - Directus Headless CMS向けReactコンポーネントとユーティリティのセット。
- [Flutter SDK](https://pub.dev/packages/directus) - Directus APIのインターフェースを提供するFlutter SDK。
- [PHP SDK](https://github.com/alantiller/directus-php-sdk) - Directus APIへ容易にアクセスするためのPHP SDK。
- [Lite SDK (TypeScript)](https://github.com/jacoborus/directus-lite-sdk) - Directus API用クエリビルダー（Browser、Deno、Node.js）。fetchは自分で用意します。
- [Nuxt Directus](https://github.com/directus-community/nuxt-directus) - Directusインスタンスに接続するための第一級Nuxt 3モジュール。
- [Nuxtus](https://nuxtus.com) - Directus CollectionsからNuxtページを自動作成するためのNuxtボイラープレートとツールセットを提供します。
- [cool-stack](https://github.com/tdsoftpl/cool-stack) - DirectusとRemixをフルスタックモノレポへ統合するテンプレートリポジトリ。

## 拡張機能

- [Image Scout](https://github.com/resauce-dev/directus-image-scout?ref=awesome-directus) - さまざまなロイヤリティフリー画像サイト（Pexels、Pixabay、Unsplash、Giphy!）で見つかる画像を検索・選択します。
- [Editor.js Interface](https://github.com/dimitrov-adrian/directus-extension-editorjs-interface) - Directus 9向けブロックエディター（Editor.js）インターフェース。
- [Draw Interface](https://github.com/jesusgp22/directus-draw-interface) - Directusアプリ向けフリードローインターフェース。
- [User-friendly file paths](https://gist.github.com/ToJans/fa18e2a7363edd24be6ad8dda2dd0232) - フォルダー・ファイルモジュール構造を使用してアセットを参照します。
- [Date Picker Interface](https://github.com/u12206050/directus-9-date-picker-interface) - 元のDirectus DateTimeインターフェースに対する代替Date Picker Interface。
- [Search Sync](https://github.com/dimitrov-adrian/directus-extension-searchsync) - データを検索エンジンインデックスへ同期。Algolia、ElasticSearch、MeiliSearchをサポートします。
- [Dictionary](https://github.com/georgexchelebiev/directus-dictionary) - 完全性の進捗インジケーター付きでキー・値ペアをJSON blobとして保存します。
- [WordPress-like Slug](https://github.com/dimitrov-adrian/directus-extension-wpslug-interface) - 接頭辞・接尾辞をサポートするSlug／Permalinkインターフェース。
- [Link Meta](https://github.com/dimitrov-adrian/directus-extension-linkmeta) - ハイパーリンクメタデータをDirectusへ保存します。
- [Group Modal](https://github.com/dimitrov-adrian/directus-extension-group-modal-interface) - ボタンで開けるモーダル内にグループインターフェースフィールドを配置します。
- [Display Link](https://github.com/jacoborus/directus-extension-display-link) - 「新しいタブで開く」ボタン付きでURLを表示します。
- [SQL Panel](https://github.com/harish2704/directus-sql-panel) - 保存されたSQLクエリの結果をテーブルとして表示するパネルコンポーネント。
- [SVG Map Picker Interface](https://github.com/dimitrov-adrian/directus-extension-svgmap-picker-interface) - SVG Mapボックスから値を選択します。
- [Directus Mailer](https://github.com/ryntab/Directus-Mailer) - Directus Nodemailerサービスでメールを送信するためのエンドポイント。
- [Data Grid Interface](https://github.com/seymoe/directus-extension-vgrid-interface) - Directus 9向け`@revolist/vue3-datagrid`を使うデータグリッドインターフェース。
- [SparkLine Display](https://github.com/seymoe/directus-extension-sparkline-display) - Directus 9向け`apexcharts`を使うスパークライン表示。
- [Tags M2M](https://github.com/dimitrov-adrian/directus-extension-tags-m2m-interface) - M2M駆動のタグインターフェース。
- [Sanitize HTML](https://github.com/licitdev/directus-extension-sanitize-html) - DirectusへのHTML入力をサニタイズします。
- [Directus LogSnag](https://github.com/Intevel/directus-logsnag) - LogSnagを使い、Directusからスマートフォンへイベントを直接送信します。
- [Field Actions](https://github.com/utomic-media/directus-extension-field-actions) - フィールドにクリップボードコピーとURLを開くアクションボタンを追加します（interface + display）。
- [Generate Types](https://github.com/maltejur/directus-extension-generate-types) - そのDirectusデータベースに接続されたDirectus JS-SDK向けtypescript型を生成するモジュールを追加します。PythonまたはOpenAPI型も生成できます。
- [Computed Interface](https://github.com/rezo-labs/directus-extension-computed-interface) - 他のフィールドに基づく計算値を実行します。
- [Inline Form Interface](https://github.com/hanneskuettner/directus-extension-inline-form-interface) - 親レコードに含まれるインラインフォームでM2O関係を編集します。
- [Tab Group Interface](https://github.com/hanneskuettner/directus-extension-group-tabs-interface) - グループをタブパネルとして表示し、アコーディオングループの美しく省スペースな代替を提供します。
- [Woodpecker Build Status](https://github.com/sguter90/directus-extension-woodpecker-build-status) - [Woodpecker](https://woodpecker-ci.org/)パイプラインのビルド状態のステータスバーをDirectus UIへ追加します。
- [Imagga Hook](https://github.com/gbicou/directus-extension-imagga) - [Imagga API](https://imagga.com/)で画像を自動タグ付けするファイルアップロード用フック。
- [Tiptap Interface & Display](https://github.com/gbicou/directus-extension-tiptap) - Tiptapリッチテキストエディターのインターフェースと表示。
- [API Viewer](https://github.com/u12206050/directus-extension-api-viewer-module) - モジュールからAPIクエリを直接閲覧・実行します。
- [Flexible Editor](https://github.com/formfcw/directus-extension-flexible-editor) - JSON出力を持つリッチテキストエディター（WYSIWYG）。M2A関係を統合して極めて柔軟にできます。
- [BlurHash](https://github.com/pixielabs/directus-extension-blurhash/) - アップロード画像のblurhashを生成するDirectus拡張機能。
- [Media AI Bundle](https://github.com/Arood/directus-extension-media-ai-bundle) - 画像説明とOCRを実行する2つの操作。
- [Directus Copilot](https://github.com/programmarchy/directus-extension-copilot/) - チャットインターフェースでデータを認識した質問を行うパネルを含むバンドル。
- [OpenAI Automatic Translation](https://github.com/timio23/directus-operation-auto-translate/) - OpenAI経由で新しい項目を自動翻訳する操作。
- [Machine Learning Operations](https://github.com/karamokoisrael/directus-hackathon-submission/) - 機械学習モデルを訓練、テスト、使用する拡張機能セット。
- [Tab Group](https://github.com/formfcw/directus-extension-tab-group) - グループ内のフィールドの可視性を切り替えるタブメニューを持つグループインターフェース。
- [Drawer Notice](https://github.com/formfcw/directus-extension-drawer-notice) - ドロワー内でのみ表示される通知フィールド。
- [Classified Group](https://github.com/formfcw/directus-extension-classified-group) - カスタムスタイリングのためにクラスを割り当てられるグループ。
- [Tokenized Preview](https://github.com/formfcw/directus-extension-tokenized-preview) - 有効な認証トークンをプレビューURLへ追加するエンドポイント。
- [Umami Analytics](https://github.com/egidiusmengelberg/directus-extension-umami) - Umami分析をDirectusへ追加します。
- [Auto generate file transformations](https://github.com/utomic-media/directus-extension-auto-generate-file-transformations) - 選択したファイル変換をアップロード時に自動生成します。

### 拡張スクリプト

- [Directus Hook Library](https://github.com/formfcw/directus-hook-library) - Directus向けカスタマイズ可能なフックのコレクション。

### ツール

- [Directus Sync](https://github.com/tractr/directus-sync) - さまざまな環境間でDirectusのスキーマと設定を同期するCLIツール。

## 記事

### 教育

- [Directus Guides (Official)](https://directus.io/guides/)
- [Learn Directus](https://learndirectus.com/)
- [How to Work With Many to Many Relationships (M2M) On Directus](https://medium.com/@bianperotti/how-i-made-a-many-to-many-relationship-on-directus-b158ff55de7e)
- [Creating a Custom Panel in Directus With Chart.js](https://blog.eperedo.com/2023/02/14/custom-panel-directus-chart-js)

### 個人

- [Get Started With Directus](https://medium.com/7span/no-code-backend-get-started-with-directus-7876bffdbd1d)

## 例／ショーケース

オープンソースプロジェクトでDirectusを使用している場合は、このプロジェクトをここにリンクしてください。

- [Official Examples](https://github.com/directus/examples) - Directusとの統合例。
- [Nuxt 3 Demo](https://github.com/bryantgillespie/nuxt3-directus-starter) - Tailwind CSSを備える意見を持ったNuxt 3／Directusスターター。
- [Agency OS](https://github.com/directus-community/agency-os) - NuxtとDirectusを特徴とする、完成度の高い意見を持ったエージェンシーウェブサイトテンプレート。[デモ](https://www.agencyos.dev/)を表示します。
- [Nextus](https://github.com/luochuanyuewu/nextus) - NextjsとDirectus技術に基づく包括的、多用途でモダンなウェブサイトテンプレート。さまざまな種類のウェブサイトをより迅速に構築できます。[デモ](https://nextus.vercel.app/en)を表示します。

## 貢献

貢献を歓迎します！最初に[貢献ガイドライン](https://github.com/directus-community/awesome-directus/blob/2052f4750c6940708ad518d1d2e4f31c64c0b7a7/contributing.md)をお読みください。
