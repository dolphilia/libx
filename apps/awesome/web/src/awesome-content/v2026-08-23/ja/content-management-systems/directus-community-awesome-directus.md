---
title: "Awesome Directus"
description: "Directusの公式資料、SDK・連携、拡張機能、記事、オープンソースの活用例。"
licenseSource: "github-directus-community-awesome-directus-readme-md"
---

# Awesome Directus

[Directus](https://directus.io)は、SQLデータベースの内容を管理するためのリアルタイムAPIとアプリのダッシュボードを提供します。このリストでは、公式・コミュニティの資料、SDKやフレームワークとの連携、拡張機能、記事、Directusを使うオープンソースプロジェクトを探せます。

## 資料 <a id="resources"></a><a id="リソース"></a>

### 公式 <a id="official"></a>

- [ドキュメント](https://docs.directus.io/getting-started/introduction/)
- [GitHubリポジトリ](https://github.com/directus/directus)
- [Discordでのリアルタイムの議論](https://directus.chat)
- [コミュニティの質問・相談掲示板](https://github.com/directus/directus/discussions/categories/q-a)
- [YouTubeの動画チュートリアル](https://www.youtube.com/c/DirectusVideos/featured)
- [コミュニティのリポジトリ](https://github.com/directus-community)

### コミュニティ <a id="community"></a>

- [Directus Extensions](https://directusextensions.com) - Directusの拡張機能、テーマ、OSなどを検索できる索引。
- [ポルトガル語のYouTubeチャンネル](https://www.youtube.com/c/DirectusBR)

## 連携 <a id="integration"></a><a id="統合"></a>

- [公式JS SDK](https://www.npmjs.com/package/@directus/sdk) - JavaScriptで動くプロジェクト（ブラウザーとNode.js）からDirectus APIを直感的に扱えるインターフェースを提供するJS SDK。
- [公式Gatsbyソースプラグイン](https://www.npmjs.com/package/@directus/gatsby-source-directus) - Directus APIからGatsbyへデータを取り込むソースプラグイン。
- [react-directus](https://github.com/gremo/react-directus) - DirectusヘッドレスCMS向けのReactコンポーネントとユーティリティのセット。
- [Flutter SDK](https://pub.dev/packages/directus) - Directus APIを扱うためのインターフェースを提供するFlutter SDK。
- [PHP SDK](https://github.com/alantiller/directus-php-sdk) - Directus APIに容易にアクセスするためのPHP SDK。
- [Lite SDK (TypeScript)](https://github.com/jacoborus/directus-lite-sdk) - Directus API用のクエリビルダー（ブラウザー、Deno、Node.js）。fetchは利用側で用意する。
- [Nuxt Directus](https://github.com/directus-community/nuxt-directus) - Directusインスタンスとの連携を目的に設計されたNuxt 3モジュール。
- [Nuxtus](https://nuxtus.com) - DirectusのコレクションからNuxtページを自動生成するための、Nuxtのひな型とツールセットを提供する。
- [cool-stack](https://github.com/tdsoftpl/cool-stack) - DirectusとRemixをフルスタックのモノレポに統合するテンプレートリポジトリ。

## 拡張機能 <a id="extensions"></a>

- [Image Scout](https://github.com/resauce-dev/directus-image-scout?ref=awesome-directus) - ロイヤリティフリーの画像サイト（Pexels、Pixabay、Unsplash、Giphy）から画像を検索して選択する。
- [Editor.js Interface](https://github.com/dimitrov-adrian/directus-extension-editorjs-interface) - Directus 9向けのブロックエディター（Editor.js）インターフェース。
- [Draw Interface](https://github.com/jesusgp22/directus-draw-interface) - Directusアプリ内で自由に描画できるインターフェース。
- [扱いやすいファイルパス](https://gist.github.com/ToJans/fa18e2a7363edd24be6ad8dda2dd0232) - フォルダーとファイルのモジュール構造を使ってアセットを参照する。
- [Date Picker Interface](https://github.com/u12206050/directus-9-date-picker-interface) - Directus標準のDateTimeインターフェースを置き換える日付選択インターフェース。
- [Search Sync](https://github.com/dimitrov-adrian/directus-extension-searchsync) - データを検索エンジンの索引へ同期する。Algolia、ElasticSearch、MeiliSearchに対応。
- [Dictionary](https://github.com/georgexchelebiev/directus-dictionary) - キーと値の組をJSON形式のデータとして保存し、入力の充足状況を示す進捗表示を備える。
- [WordPress-like Slug](https://github.com/dimitrov-adrian/directus-extension-wpslug-interface) - 接頭辞と接尾辞に対応するスラッグ／パーマリンクのインターフェース。
- [Link Meta](https://github.com/dimitrov-adrian/directus-extension-linkmeta) - ハイパーリンクのメタデータをDirectusに保存する。
- [Group Modal](https://github.com/dimitrov-adrian/directus-extension-group-modal-interface) - インターフェースのフィールドを、ボタンで開けるモーダルにまとめる。
- [Display Link](https://github.com/jacoborus/directus-extension-display-link) - 「新しいタブで開く」ボタン付きでURLを表示する。
- [SQL Panel](https://github.com/harish2704/directus-sql-panel) - 保存されたSQLクエリの結果を表として表示するパネルコンポーネント。
- [SVG Map Picker Interface](https://github.com/dimitrov-adrian/directus-extension-svgmap-picker-interface) - SVGマップの選択欄から値を選ぶ。
- [Directus Mailer](https://github.com/ryntab/Directus-Mailer) - DirectusのNodemailerサービスでメールを送信するためのエンドポイント。
- [Data Grid Interface](https://github.com/seymoe/directus-extension-vgrid-interface) - Directus 9向けの、`@revolist/vue3-datagrid`を使うデータグリッドインターフェース。
- [SparkLine Display](https://github.com/seymoe/directus-extension-sparkline-display) - Directus 9向けの、`apexcharts`を使うスパークライン表示。
- [Tags M2M](https://github.com/dimitrov-adrian/directus-extension-tags-m2m-interface) - M2M関係に基づくタグのインターフェース。
- [Sanitize HTML](https://github.com/licitdev/directus-extension-sanitize-html) - Directusに入力されるHTMLをサニタイズする。
- [Directus LogSnag](https://github.com/Intevel/directus-logsnag) - LogSnagを使い、Directusのイベントをスマートフォンへ直接送信する。
- [Field Actions](https://github.com/utomic-media/directus-extension-field-actions) - フィールドに、クリップボードへのコピーとURLを開く操作ボタンを追加する（インターフェースと表示の両方）。
- [Generate Types](https://github.com/maltejur/directus-extension-generate-types) - そのDirectusデータベースに接続するDirectus JS-SDK用のTypeScript型を生成するモジュールを追加する。PythonまたはOpenAPIの型も生成できる。
- [Computed Interface](https://github.com/rezo-labs/directus-extension-computed-interface) - 他のフィールドに基づいて値を計算する。
- [Inline Form Interface](https://github.com/hanneskuettner/directus-extension-inline-form-interface) - 親レコード内のインラインフォームでM2O関係を編集する。
- [Tab Group Interface](https://github.com/hanneskuettner/directus-extension-group-tabs-interface) - グループをタブパネルとして表示する。アコーディオングループの代わりに使える、省スペースの表示方法。
- [Woodpecker Build Status](https://github.com/sguter90/directus-extension-woodpecker-build-status) - [Woodpecker](https://woodpecker-ci.org/)パイプラインのビルド状態を示すステータスバーをDirectus UIに追加する。
- [Imagga Hook](https://github.com/gbicou/directus-extension-imagga) - ファイルのアップロード時に、[Imagga API](https://imagga.com/)で画像を自動的にタグ付けするフック。
- [Tiptap Interface & Display](https://github.com/gbicou/directus-extension-tiptap) - Tiptapリッチテキストエディターの入力インターフェースと表示。
- [API Viewer](https://github.com/u12206050/directus-extension-api-viewer-module) - モジュールからAPIクエリを直接閲覧・実行する。
- [Flexible Editor](https://github.com/formfcw/directus-extension-flexible-editor) - JSONを出力するリッチテキストエディター（WYSIWYG）。M2A関係を組み込んで柔軟に編集できる。
- [BlurHash](https://github.com/pixielabs/directus-extension-blurhash/) - アップロードした画像のblurhashを生成するDirectus拡張機能。
- [Media AI Bundle](https://github.com/Arood/directus-extension-media-ai-bundle) - 画像の説明とOCRを実行する2つの操作。
- [Directus Copilot](https://github.com/programmarchy/directus-extension-copilot/) - データを踏まえた質問をチャットインターフェースで行えるパネルを含むバンドル。
- [OpenAI Automatic Translation](https://github.com/timio23/directus-operation-auto-translate/) - OpenAI経由で新規項目を自動翻訳する操作。
- [Machine Learning Operations](https://github.com/karamokoisrael/directus-hackathon-submission/) - 機械学習モデルを訓練、テスト、利用するための拡張機能セット。
- [Tab Group](https://github.com/formfcw/directus-extension-tab-group) - グループ内のフィールドの表示を切り替えるタブメニューを備えたグループインターフェース。
- [Drawer Notice](https://github.com/formfcw/directus-extension-drawer-notice) - ドロワー内でのみ表示される通知フィールド。
- [Classified Group](https://github.com/formfcw/directus-extension-classified-group) - 独自のスタイルを適用するためにクラスを割り当てられるグループ。
- [Tokenized Preview](https://github.com/formfcw/directus-extension-tokenized-preview) - 有効な認証トークンをプレビューURLに追加するエンドポイント。
- [Umami Analytics](https://github.com/egidiusmengelberg/directus-extension-umami) - Umamiによるアクセス解析をDirectusに追加する。
- [ファイル変換の自動生成](https://github.com/utomic-media/directus-extension-auto-generate-file-transformations) - アップロード時に、選択したファイル変換を自動生成する。

### 拡張スクリプト <a id="extension-scripts"></a>

- [Directus Hook Library](https://github.com/formfcw/directus-hook-library) - Directus向けのカスタマイズ可能なフック集。

### ツール <a id="tools"></a>

- [Directus Sync](https://github.com/tractr/directus-sync) - さまざまな環境間でDirectusのスキーマと設定を同期するCLIツール。

## 記事 <a id="articles"></a>

### 学習 <a id="educational"></a><a id="教育"></a>

- [Directus公式ガイド](https://directus.io/guides/)
- [Learn Directus](https://learndirectus.com/)
- [How to Work With Many to Many Relationships (M2M) On Directus](https://medium.com/@bianperotti/how-i-made-a-many-to-many-relationship-on-directus-b158ff55de7e)
- [Creating a Custom Panel in Directus With Chart.js](https://blog.eperedo.com/2023/02/14/custom-panel-directus-chart-js)

### 個人の記事 <a id="personal"></a><a id="個人"></a>

- [Get Started With Directus](https://medium.com/7span/no-code-backend-get-started-with-directus-7876bffdbd1d)

## 活用例 <a id="examples--showcases"></a><a id="例ショーケース"></a>

ここでは、Directusを使うオープンソースプロジェクトを紹介します。

- [公式の活用例](https://github.com/directus/examples) - Directusとの連携例。
- [Nuxt 3 Demo](https://github.com/bryantgillespie/nuxt3-directus-starter) - 設計方針を定めた、Tailwind CSS付きのNuxt 3／Directusスターター。
- [Agency OS](https://github.com/directus-community/agency-os) - 設計方針を定めた、NuxtとDirectusを使うエージェンシー向けウェブサイトのテンプレート一式。[デモ](https://www.agencyos.dev/)。
- [Nextus](https://github.com/luochuanyuewu/nextus) - NextjsとDirectusを使う多用途のウェブサイトテンプレート。さまざまな種類のサイトをより速く構築できるように設計されている。[デモ](https://nextus.vercel.app/en)。
