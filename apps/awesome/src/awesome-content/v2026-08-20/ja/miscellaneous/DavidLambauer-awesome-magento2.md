---
title: "Awesome Magento 2"
description: "Magento 2を扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-DavidLambauer-awesome-magento2-readme-md"
---

# Awesome Magento 2

Magento 2を扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="table-of-contents"></a>

- [凡例](#legend)
- [Magentoとは](#what-is-magento)
- [イベント：コミュニティとの交流](#events-meet-the-community)
- [フロントエンド](#front-ends)
- [ツール](#tools)
- [オープンソース拡張](#open-source-extensions)
- [ブログ](#blogs)
- [ポッドキャスト](#podcasts)
- [ニュースレター](#newsletters)
- [コミュニティ](#community)
- [学習](#learning)
- [プラットフォーム](#platforms)
- [公式資料](#official-resources)
- [信頼できる拡張開発者一覧](#list-of-trustworthy-extension-developers)
- [影響力のある人物](#influencing-people)
- [Magento 2関連のほかのAwesomeリスト](#other-magento-2-related-awesome-lists)
- [ライセンス](#license)

---

## 凡例 <a id="legend"></a>

状態シグナルは自動パイプラインにより毎週更新されます。各バッジは項目の現在状態を表します。

- 🔥 **注目** — 分類内でGitHubスター数が上位10%のリポジトリです（分類内に5件以上のGitHub項目が必要）。
- 🫡 **活発に保守** — 最終コミットが90日以内で、過去1年以内にリリースがあります。
- 🪦 **墓地** — GitHubでアーカイブ済み、または過去3年間コミット・リリースがない項目です。各節末尾の折りたたみ領域へ移し、歴史的参照用に保持します。固定項目は移動しません。

---

## Magentoとは <a id="what-is-magento"></a>

MagentoはWebショップを構築できるオープンソースのECアプリケーションです。顧客が商品を購入するストアフロントをフロントエンド、顧客や商品を管理するMagento管理パネルをバックエンドと呼びます。PHP、HTML、CSS、JS、XMLなどのソースコードはOSLv3で配布され、再利用と変更が可能です。このオープン性により広く普及し、「Magento」は製品、コミュニティ、またはその両方を指します。

MagentoはVarienが開始し、2008年に初公開されたMagento 1で普及しました。Magento 2は2015年11月に初公開されましたが、複雑な構造とKnockoutJS、RequireJS、Zend Framework 1など旧式技術のため採用に課題があり、ストアフロントでは多様な新フロントエンドが生まれました。2018年にAdobeが買収し、Magento EnterpriseはAdobe Commerce Cloudへ統合、Community EditionはMagento Open Sourceへ改称されました。長期保守へのコミュニティの懸念からMage-OSが設立されました。

関連資料:

- [en.wikipedia.org/wiki/Magento](https://en.wikipedia.org/wiki/Magento)

## イベント：コミュニティとの交流 <a id="events-meet-the-community"></a>

- [MageUnconference Netherlands](https://mageunconference.nl/) 🫡 - ネザレランドで開催された Magento オンコンファレンス
- [Meet Commerce](https://www.meetcommerce.com/) 🫡 - 商業とイノベーションに焦点を当てたグローバルシリーズのカンファレンス
- [MageUnconference Germany](https://www.mageunconference.org/) - ドイツで開催されたMagento unconference.

### Meet Magento <a id="meet-magento"></a>

[Meet Magentoイベント](https://www.meet-magento.com/)は、事業者、開発者、ソリューション・技術提供者、マーケターを結び付け、継続的に拡大しています。

- [Meet Magento Florida](https://meetmagentofl.com/) 🫡 - フロリダでの Meet Magento イベントシリーズ
- [Meet Magento India](https://www.meetmagento.in/) 🫡 - インドでの Meet Magento イベントシリーズ
- [Meet Magento Netherlands](https://nl.meet-magento.com/) 🫡 - ネザレランドでの Meet Magento イベントシリーズ
- [Meet Magento New York City](https://meetmagentonyc.com/) 🫡 - NYCでの Meet Magento イベントシリーズ
- [Meet Magento Poland](https://meetmagento.pl/) 🫡 - ポーランドでの Meet Magento イベントシリーズ
- [Meet Magento UK](https://meet-magento.co.uk/) 🫡 - UKでの Meet Magento イベントシリーズ
- [Meet Magento Malaysia](https://www.meetmagento.asia/) - Meet Magento イベントシリーズ — マレーシア
- [Meet Magento Romania](https://ro.meet-magento.com/) - Meet Magento イベントシリーズ — ローマニア

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [Meet Magento Baltics](https://meetmagentobaltics.com/) - Meet Magento イベントシリーズ — バルト諸国
- [Meet Magento Brazil](https://meetmagentobrasil.org/) - Meet Magento イベントシリーズ — ブラジル
- [Meet Magento Singapore](https://meetmagento.sg/) - Meet Magento イベントシリーズ — サンゴール

</details>

## フロントエンド <a id="front-ends"></a>

Magento 2のストアフロントは多様な方法で構築・装飾できます。

- [Adobe PWA Studio](https://developer.adobe.com/commerce/pwa-studio/) - AdobeのヘッドレスReactフロントエンド。GraphQLクライアント；Veniaテーマ、Peregrineハック、Buildpack（Webpack）およびUPWARD（SSR/画像ミドルウェア）を提供
- [Magento Luma](https://developer.adobe.com/commerce/frontend-core/guide/) - Magento 2のデフォルトデモテーマ（Magento/blankを拡張）。この名前は、XMLレイアウト＋ブロック/コンテナ＋PHTMLテンプレート、LESSコンパイルされたCSSとRequireJS/KnockoutJS/jQueryで豊かにされた全体のLumaスタックを指す
- [MageObsidian](https://github.com/mage-obsidian/module-modern-frontend) 🫡 - Vite、Vue 3 islandsおよびTailwindCSS 4を用いた、オープンソースのLumaの代替品。ネイティブレイアウト／ブロック／テンプレートをベースに。ネイティブESM、HMR、オプションのTwigエンジンを備える.
- [Alokai](https://github.com/vuestorefront/vue-storefront) - かつてVue StoreFrontと呼ばれていたヘッドレスフロントエンドフレームワーク
- [ScandiPWA](https://github.com/scandipwa/scandipwa) - React/ReduxベースのPWAテーマ（Magento 2.3以降対応）
- [Breeze Evolution](https://breezefront.com/themes) - 100ページスピードを目標とした軽量Luma互換テーマ
- [Hyvä](https://hyva.io/) - TailwindCSSとAlpineJSを使用したLumaの代替品。商用ライセンス。アクティブな互換モジュールエコシステム

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [Front-Commerce](https://www.front-commerce.com/) - Magento向けのフランス語PWAフロントエンドソリューション

</details>

## ツール <a id="tools"></a>

- [PhpInsights](https://github.com/nunomaduro/phpinsights) 🔥 🫡 - Magento 2 プレセットを用いた PHP の品質チェック
- [DDEV](https://github.com/ddev/ddev) 🔥 🫡 - PHP、Node.js および Python をサポートし、数分でローカルWeb開発環境を起動できるオープンソースツール
- [markshust/docker-magento](https://github.com/markshust/docker-magento) 🫡 - Mark Shust の Magento 用 Docker 設定
- [n98-magerun2](https://github.com/netz98/n98-magerun2) 🫡 - Magento 2 用の CLI スイス軍刀
- [Warden](https://github.com/wardenenv/warden) 🫡 - David Alger による docker-compose 環境を操作する CLI ユーティリティ
- [PhpStorm Magento2 Extension](https://github.com/magento/magento2-phpstorm-plugin) 🫡 - 官方 PhpStorm の Magento 2 延長機能
- [Magento 2 Database Synchronizer](https://github.com/jellesiderius/mage-db-sync) 🫡 - Magento 、および WordPress 用のデータベース同期ツール（Magerun2 に基づく）。開発、ステージング、本番環境を同期します
- [Mage](https://github.com/GrimLink/mage) 🫡 - bin/magento コマンドをショートカットと生産性補助ツールで簡略化
- [MageForge](https://github.com/OpenForgeProject/mageforge) 🫡 - Magento 2 CLI による自動テーマ生成（Hyvä 用）
- [Mage Chrome Toolbar](https://github.com/magespecialist/mage-chrome-toolbar) - MageSpecialist による Magento 2 開発用 Chrome エクステンション
- [AmpersandHQ/ampersand-magento2-upgrade-patch-helper](https://github.com/AmpersandHQ/ampersand-magento2-upgrade-patch-helper) - Magento 2 サイトのアップグレードを支援するオーバーライド検出用のヘルパースクリプト
- [Magento 2 Url Data Integrity Checker](https://github.com/baldwin-agency/magento2-module-url-data-integrity-checker) - Magento 2 モジュールで、カタログデータ内のURL関連問題を検出
- [MageSpecialist DevTools for Magento 2](https://github.com/magespecialist/m2-MSP_DevTools) - Magento 2 用の開発者ツールバー
- [Tango](https://github.com/roma-glushko/tango) - アクセスログを分析する CLI ツール
- [Migrate DB Magento 2 Commerce to Magento 2 Open-Source](https://github.com/opengento/magento2-downgrade-ee-ce) - Magento 2 Commerce データベースを Magento 2 Open Source に移行
- [RabbitMQ Retry Mechanism](https://github.com/run-as-root/magento2-message-queue-retry) - Magento 2 用の拡張機能で、RabbitMQ の失敗メッセージのリトライを可能に
- [Mage Wizard](https://github.com/clickAndMortar/mage-wizard) - Magento 2 コードベース内でモジュール、プラグイン、設定、観察者、コマンド、クロントabs を直接表示・作成できるローカルWebUI
- [magento2docker](https://github.com/aliuosio/magento2docker) - MariaDB、PHP、Redis、ElasticSearch を1つのDockerfileで構成した、高速デモ／開発環境
- [Mage2Gen](https://mage2gen.com/) - オンラインモジュール作成ツール
- [Magento 2 Composer patches helper](https://chrome.google.com/webstore/detail/magento-2-composer-patche/gfndadbceejgfjahpfaijcacnmdloiad) - vaimo/composer-patches 用のコピー＆ペースト可能な composer パッチ定義を作成する Chrome エクステンション
- [Magento Log Viewer (VS Code extension)](https://marketplace.visualstudio.com/items?itemName=MathiasElle.magento-log-viewer) - VS Code拡張機能で、マーゲンのログファイルやレポートを直接ワークスペース内に表示・監視・管理できます。
- [Tablerates Generator](https://www.tableratesgenerator.com/) - オンラインでタブレートレートを生成します。

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [Pestle](https://github.com/astorm/pestle) - アラン・ストームが開発したコード生成ツール。
- [Masquerade](https://github.com/elgentos/masquerade) - 設定ベースで、プラットフォームに依存せず、ロケールに対応したデータ生成ツール。
- [Subodha Magento2 Gulp Integration](https://github.com/subodha/magento-2-gulp) - マーゲン2用Gulp統合。
- [Documentation Search for Alfred](https://github.com/DavidLambauer/Alfred-Workflow-Magento-2-DevDocs-Search) - アルフレッドのワークフローで、公式マーゲン2ドキュメント検索を統合。

</details>

## オープンソース拡張 <a id="open-source-extensions"></a>

### 開発ユーティリティ <a id="development-utilities"></a>

- [Magento Cache Clean](https://github.com/mage2tv/magento-cache-clean) 🔥 - Vinai Koppによるbin/magento cache:cleanの高速な即時置き換え。ファイルウォッチャーを搭載。
- [Magewire PHP](https://github.com/magewirephp/magewire) 🫡 - ライアーライブウィアのポートで、複雑なAJAXベースのコンポーネントを簡単に構築できます。ハイヴァーチェックアウトで使用されています。
- [Scope Hints](https://github.com/avstudnitz/AvS_ScopeHint2) 🫡 - アンデリアス・フォン・スタドニッツによるストア設定に追加情報を表示します。
- [Config ImportExport](https://github.com/semaio/Magento2-ConfigImportExport) 🫡 - CLIベースの設定管理ツール。
- [bitExpert/phpstan-magento](https://github.com/bitExpert/phpstan-magento) 🫡 - マーゲンに特化したPHPStan拡張機能。
- [Whoops Exceptions](https://github.com/yireo/Yireo_Whoops) 🫡 - マーゲン2用のPHP例外。
- [graycoreio/magento2-cors](https://github.com/graycoreio/magento2-cors) 🫡 - マーゲンGraphQL APIでの設定可能なCORSヘッダーを有効にします。
- [Magento 2 Prometheus Exporter](https://github.com/run-as-root/magento2-prometheus-exporter) 🫡 - マーゲンの一般的なデータをPrometheus形式でエクスポートするツール。
- [Yireo LokiComponents](https://github.com/yireo/Yireo_LokiComponents) 🫡 - AJAXベースのフォームコンポーネントを簡単に構築できるライブラリ。Yireo Lokiチェックアウトで使用されています。
- [Developer Toolbar](https://github.com/mgtcommerce/Mgt_Developertoolbar) - マーゲン2開発者ツールバー。
- [Advanced Template Hints](https://github.com/ho-nl/magento2-Ho_Templatehints) - マーゲン2テンプレートヒントヘルパー。
- [MageVulnDB](https://github.com/gwillem/magevulndb) - 既知のセキュリティ問題のある第三者マーゲン拡張機能の中央リポジトリ。
- [Magento 2 Configurator](https://github.com/ctidigital/magento2-configurator) - CTI Digitalが最初に開発したマーゲンモジュールで、ファイルを使用してデータベース変数の作成と維持を実現します。
- [Cypress Testing Suite](https://github.com/elgentos/magento2-cypress-testing-suite/) - マーゲン2向けのコミュニティ開発によるCypressテストセット。
- [Auto Cache Flush](https://github.com/yireo/Yireo_AutoFlushCache) - マーゲン2モジュールでキャッシュを自動的に削除します。
- [Dot Env](https://github.com/zepgram/magento-dotenv) - マグノリア2の環境変数コンポーネント（Symfony Dotenvの実装）
- [Rest Client](https://github.com/zepgram/module-rest) - 技術的なマグノリア2モジュール。Guzzleクライアントを用いて外部サービスへのREST APIリクエストを行うためのシンプルな開発パターン、設定、最適化を提供。
- [Magento 2 Model Generator / CRUD Generator](https://www.model-generator.com/) - ミシェル・ゲルツンによるマグノリア2のモデル・CRUDジェネレーターの更新版。
- [Simon's Troubleshooting Guide](https://gist.github.com/ProcessEight/000245eac361cbcfeb9daf6de3c1c2e4) - 開発中に遭遇する最も一般的なエラーの一覧。

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [Magento 2 PHPStorm File Templates](https://github.com/lfolco/phpstorm-m2-filetemplates) - PHPStormにおけるマグノリア2ファイルテンプレート。

</details>

### デプロイ <a id="deployment"></a>

- [Deployer Magento2 Recipe](https://github.com/deployphp/deployer/blob/master/recipe/magento2.php) 🫡 - Magento 2のデプロイリシピ（deployer用）.
- [easyaudit-cli](https://github.com/crealoz/easyaudit-cli) 🫡 - Magento 、2コードベース向けの静的解析CLIツール。アンチパターン、コード品質問題、アーキテクチャ問題を検出。CI/CD統合用SARIF出力.
- [Github Actions for Magento2](https://github.com/extdn/github-actions-m2) - マグノリア2拡張機能向けのGitHub Actions。

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [Magento 2 Deployer Plus](https://github.com/jalogut/magento2-deployer-plus) - deployer.orgをベースにしたツール。マグノリア2プロジェクトのゼロダウンタイムデプロイを実行。

</details>

### ローカライズ <a id="localization"></a>

- [de_DE](https://github.com/splendidinternet/Magento2_German_LocalePack_de_DE) 🔥 - ドイツ語パッケージ.
- [pl_PL](https://github.com/SnowdogApps/magento2-pl_pl) - ポーランド語パッケージ。
- [it_IT](https://github.com/mageplaza/magento-2-italian-language-pack) - イタリア語パッケージ。
- [nl_NL](https://github.com/magento-l10n/language-nl_NL) - オランダ語パッケージ。
- [da_DK](https://magentodanmark.dk/) - デンマーク語パッケージ。
- [fi_FL](https://github.com/mageplaza/magento-2-finnish-language-pack) - フィンランド語パッケージ。
- [hr_HR](https://marketplace.magento.com/inchoo-language-hr-hr.html) - クロアチア語パッケージ。

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [pt_BR](https://github.com/rafaelstz/traducao_magento2_pt_br) - ブラジルポルトガル語パッケージ。
- [fr_FR](https://github.com/Imaginaerum/magento2-language-fr-fr) - フランス語パッケージ。
- [tr_TR](https://github.com/hidonet/magento2-language-tr_tr) - トルコ語パッケージ。
- [es_ES](https://github.com/eusonlito/magento2-language-es_es) - スペイン語パッケージ。
- [sl_SI](https://github.com/symfony-si/magento2-sl-si) - スロベニア語パッケージ。
- [ro_RO](https://github.com/EaDesgin/magento2-romanian-language-pack) - ルーマニア語パッケージ。
- [de_CH](https://github.com/staempfli/magento2-language-de-ch) - スイス語パッケージ。
- [ko_KR](https://github.com/mageplaza/magento-2-korean-language-pack) - 韓国語パッケージ
- [en_GB](https://github.com/cubewebsites/magento2-language-en-gb) - イギリス語パッケージ
- [es_AR](https://github.com/SemExpert/Magento2-language-es_ar) - スペイン語（アルゼンチン）パッケージ
- [sk_SK](https://github.com/mageplaza/magento-2-slovak-language-pack) - スロバキア語パッケージ

</details>

### 検索 <a id="search"></a>

- [Elastic Suite Integration](https://github.com/Smile-SA/elasticsuite/) 🔥 🫡 - Elastic Suiteの統合.
- [Algolia Search Integration](https://github.com/algolia/algoliasearch-magento-2) 🫡 - Algolia Search（SaaS）統合
- [FastSimpleImport2](https://github.com/firegento/FireGento_FastSimpleImport2) 🫡 - Magento 2 ImportExport機能のラッパー。商品と顧客を配列からインポートする
- [Typesense-Magento-2](https://github.com/run-as-root/Typesense-Magento-2) 🫡 - Magento 2 および Mage-OS 用のオープンソース Typesense 検索統合。即時検索、自動補完、階層フィルタ、視覚カテゴリマーケティング、クエリマーケティング、ゼロダウンタイムリインデックス — すべてHyva本体で実装され、CSP対応
- [Disable Search Engine](https://github.com/zepgram/module-disable-search-engine) - カテゴリ検索用のElasticsearchおよび全文検索を無効化
- [magento2-module-meilisearch](https://github.com/walkwizus/magento2-module-meilisearch) - Magento 2用Meilisearch拡張機能により、Magentoのデフォルト検索エンジン（OpenSearch）をMeilisearchに置き換える

### CMS <a id="cms"></a>

- [Magento 2 Blog Extension by Magefan](https://github.com/magefan/module-blog) 🔥 - Magento 2向けの無料ブログモジュール。無制限のブログ記事とカテゴリをサポート。SEO対応、遅延ロード、AMP対応。
- [Mageplaza Blog Extension](https://github.com/mageplaza/magento-2-blog-extension) 🫡 - 簡単で効果的なブログ拡張機能
- [module-page-builder-widget](https://github.com/mage-os/module-page-builder-widget) 🫡 - CMSウィジェット用のネイティブMagentoページビルダー対応
- [Opengento GDPR](https://github.com/opengento/magento2-gdpr) - Magento 2 GDPRモジュール。GDPR準拠を支援
- [hyva-ai-tools](https://github.com/hyva-themes/hyva-ai-tools) - Hyvaテーマ用のAIパワードスキル。AIコードアシスタントにHyvaテーマ、モジュール、CMSコンポーネント作成に特化した知識を追加
- [magento-2-seeder](https://github.com/run-as-root/magento-2-seeder) - Laravelスタイルのデータシーダー（Magento 2 / Mage-OS）。bin/magento db:seed で現実的な商品（すべてのタイプ）、カテゴリ、顧客、注文（すべての状態）、CMSページ、レビューを生成

### マーケティング <a id="marketing"></a>

- [Google Tag Manager](https://github.com/magepal/magento2-google-tag-manager) 🔥 - Magento 2向けのGoogle Tag Manager（GTM）およびデータレイヤー.
- [MagePlaza Seo](https://github.com/mageplaza/magento-2-seo-extension) 🫡 - 詳細にドキュメント化されたマルチ用途SEO拡張機能
- [magento2-withdrawl](https://github.com/Zwernemann/magento2-withdrawl) 🫡 - 2026年6月19日から必要となるEU離脱ボタンを提供するMagento 2モジュール（§356a BGB / 指示（EU）2023/2673）。顧客およびゲストが注文を簡易フォーム（名前、注文番号、メールアドレス）で取り消せるようになり、自動確認メールを送信し、バックエンドでの管理が可能
- [module-blog](https://github.com/mage-os-lab/module-blog) 🫡 - Mage-OS / Magento 2用のブログモジュール。投稿、カテゴリ、タグ、著者、スケジュール発行、SEO、RSS、サイトマップ、6つのウィジェット、フルGraphQL APIを提供。Luma + Hyvä

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [Magento 2 PDF](https://github.com/staempfli/magento2-module-pdf) - wkhtmltopdfをベースとしたPDF生成ツール.

</details>

### 管理画面／バックエンド <a id="adminhtml--backend"></a>

- [Menu Editor](https://github.com/SnowdogApps/magento2-menu) 🔥 🫡 - Magento 2におけるカテゴリベースのメニューを置き換えるための強力なメニュー編集ツールを提供。
- [Sentry.io](https://github.com/justbetter/magento2-sentry) 🫡 - Magento 2用のアプリケーション監視およびエラー追跡ソフトウェア
- [magento2-hyva-admin](https://github.com/hyva-themes/magento2-hyva-admin) 🫡 - Magento 2のアドミン画面でのグリッドとフォームの作成を、楽しいと速くするためのモジュール
- [FireGento Fast Simple Import](https://github.com/firegento/FireGento_FastSimpleImport2) 🫡 - Magento 2 ImportExport機能のラッパー。商品と顧客を配列からインポートする
- [Reset UI Bookmarks](https://github.com/magenizr/Magenizr_ResetUiBookmarks) 🫡 - 管理者ユーザーが自身のUIブックマーク（フィルタ状態、列の位置、適用されたソートなど）をリセットできるようにする
- [theme-adminhtml-m137](https://github.com/mage-os/theme-adminhtml-m137) 🫡 - M137 Magento/Mage-OS用の管理テーマ
- [Custom SMTP](https://github.com/magepal/magento2-gmail-smtp-app) - Magento 2 が Google アプリ、Gmail、Amazon SES、Microsoft Office 365 およびその他の SMTP サーバーを使用してすべてのトランザクションメールを送信できるように設定
- [Disable Stock Reservation](https://github.com/AmpersandHQ/magento2-disable-stock-reservation) - Magento 2.3.3 で導入されたインベントリ予約論理を無効にする
- [Customer Force Login](https://github.com/bitExpert/magento2-force-login) - 特定のページにアクセスする前に顧客がログインするよう強制する
- [Clean Admin Menu](https://github.com/redchamps/clean-admin-menu) - 3rd-party拡張機能を1つのメニューに統合
- [Magento 2 Import Framework](https://github.com/techdivision/import) - 一般的なMagento 2インポート機能をサポートするライブラリ
- [Checkout Tester](https://github.com/yireo/Yireo_CheckoutTester2) - チェックアウト変更を迅速にテストできる拡張機能
- [Preview Checkout Success Page](https://github.com/magepal/magento2-preview-checkout-success-page) - 注文確認ページを簡単にプレビュー・テストできるよう、新しい注文を立てなくてもよい
- [Guest to Customer](https://github.com/magepal/magento2-guest-to-customer) - 既存のゲストチェックアウト顧客を登録顧客に簡単に変換できる
- [PageNotFound](https://github.com/experius/Magento-2-Module-PageNotFound) - データベースに来週の404エラーを保存し、リダイレクトを作成できる
- [Product Links Navigator](https://github.com/elninotech/ElNino_ProductLinksNavigator) - 管理者側の商品間ナビゲーションを強化。グリッドやモーダル内の商品に直接フロントエンド／バックエンドリンクを追加し、「親商品」タブを追加

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [shkoliar/magento-grid-colors](https://github.com/shkoliar/magento-grid-colors) - Magento 2 グリッドカラーモジュール。グリッドの色分けをサポート。Dmitry Shkoliar によるグリッドブックマークによる状態の保存をサポート
- [extdn/extension-dashboard-m2](https://github.com/extdn/extension-dashboard-m2) - Magento 2 用のダッシュボード。Magento Extension Developers Network でインストールされた拡張機能を表示
- [Reset Customer Password](https://github.com/Vinai/module-customer-password-command) - bin/magento で顧客パスワードを設定する（Vinai Kopp）
- [hivecommerce/magento2-content-fuzzyfyr](https://github.com/hivecommerce/magento2-content-fuzzyfyr) - Magento 2 用のContent Fuzzyfyrモジュールは、実際のコンテンツをダミーコンテンツに置き換える。開発、テストデータ、GDPR規制との適合に有用

</details>

### セキュリティ <a id="security"></a>

- [Magento Quality Patches](https://experienceleague.adobe.com/tools/commerce-quality-patches/index.html) - すべてのMagento／Adobe Commerceのパッチが1か所に集約されている。

### 決済サービスプロバイダー <a id="payment-service-provider"></a>

- [PAYONE](https://github.com/PAYONE-GmbH/magento-2) 🫡 - PAYONE支払い統合.
- [Braintree Payments](https://marketplace.magento.com/paypal-module-braintree.html) - Magento 2 用の公式Braintree統合

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [Stripe](https://github.com/pmclain/module-stripe) - Magento 2 用のStripe支払い

</details>

### インフラストラクチャ <a id="infrastructure"></a>

- [Ethan3600/magento2-CronjobManager](https://github.com/Ethan3600/magento2-CronjobManager) 🔥 - Magento 2向けのスケジュールジョブマネージャー。
- [magento-cache-clean](https://github.com/mage-os/magento-cache-clean) 🫡 - bin/magento cache:clean へのより高速なドロップイン置き換え。ファイルウォッチャーを用いる
- [module-theme-optimization](https://github.com/mage-os/module-theme-optimization) 🫡 - bfcache、予測ロード、ビュー遷移をMagentoに提供
- [Fastly Extension](https://github.com/fastly/fastly-magento2) - マグノリ 2 と ファストリ の統合
- [Interceptor Optimization](https://github.com/creatuity/magento2-interceptors) - マグノリ 2 の新しいインターセプターモジュール
- [Clean Media](https://github.com/sivaschenko/magento2-clean-media) - メディアファイルに関する情報と削除オプションを提供するモジュール
- [Magento 2 Ngrok](https://github.com/shkoliar/magento-ngrok) - マグノリ 2 と ニグロク の統合

### プロプライエタリ拡張 <a id="proprietary-extensions"></a>

- [Magicento](http://magicento.com/) - マグノリ 2 関連機能を追加する PHPStorm プラグイン

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [Commercebug Debugging Extension](http://store.pulsestorm.net/products/commerce-bug-3) - マグノリ 2 デバッグ拡張モジュール

</details>

### プログレッシブWebアプリケーション <a id="progressive-web-application"></a>

- [ScandiPWA Theme](https://github.com/scandipwa/base-theme) 🔥 - ReactおよびReduxをベースにしたMagento 2.3以降のPWAテーマ。
- [graphcommerce](https://github.com/graphcommerce-org/graphcommerce) 🫡 - GraphCommerce®はMagento 2（PWA）のヘッドレスストアフロントエンドの代替品であり、より高速かつ優れたユーザー体験を提供。完全にカスタマイズ可能（React、Next.js）かつオープンソース。
- [magento2-default-theme](https://github.com/hyva-themes/magento2-default-theme) - タイルウェインドで構築されたマグノリ 2 テーマ
- [magento2-theme-module](https://github.com/hyva-themes/magento2-theme-module) - マグノリ 及びタイルウェインドのテーマ用補助モジュール
- [magento2-default-theme-csp](https://github.com/hyva-themes/magento2-default-theme-csp) - タイルウェインドとアルペイン・JSで構築された厳密なCSP対応マグノリ 2 テーマ

---

## ブログ <a id="blogs"></a>

### 個人ブログ <a id="personal-blogs"></a>

- [Jigar Karangiya](https://jigarkarangiya.com/) 🫡 - Magento 2およびAdobe Commerce開発に関する個人ブログ。

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [Alan Storm](http://alanstorm.com/category/magento-2/) - マグノリ 2 の技術的な詳細解説
- [Fabian Schmengler](https://www.schmengler-se.de/) - マグノリ 2 のアーキテクチャとプロセスを扱う個人ブログ

</details>

### 企業ブログ <a id="company-blogs"></a>

- [Atwix](https://www.atwix.com/blog/) 🫡 - マグノリ開発アグリーチャのブログ
- [FireBear Studio](https://firebearstudio.com/blog) 🫡 - ファイバーベア スタディのマグノリ開発ブログ
- [inchoo](http://inchoo.net/category/magento-2/) 🫡 - インチョーのマグノリ開発ブログ
- [Classy Llama](https://www.classyllama.com/blog) - マグノリ開発アグリーチャのブログ
- [M.academy](https://m.academy/blog/) - M.academy チームのブログ

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [bitExpert AG](https://blog.bitexpert.de/blog/tags/magento) - bitExpert のマグノリタグ付きブログ記事
- [dev98](https://dev98.de/) - ドイツのマグノリ開発アグリーチャのブログ
- [Fooman](http://store.fooman.co.nz/blog) - Fooman のマグノリ拡張および開発ブログ
- [integer_net blog](https://www.integer-net.com/blog/) - integer_net の技術的なマグノリブログ
- [MageComp](https://magecomp.com/blog/category/magento-2/) - MageCompのMagento 2チュートリアルとヒント
- [OneStepCheckout](https://blog.onestepcheckout.com/) - OneStepCheckoutのMagentoブログ

</details>

### その他 <a id="other"></a>



<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [MageTalk](http://magetalk.com/) - Kalen JordanおよびPhillip Jacksonによるコミュニティポッドキャスト。

</details>

## ポッドキャスト <a id="podcasts"></a>

- [Talk Commerce](https://talk-commerce.com/podcasts/) 🫡 - Brent Petersonによるデジタルコンマース実務家、販売業者、プラットフォーム専門家とのインタビュー
- [The JetRails Podcast](https://jetrails.com/podcast/) 🫡 - JetRailsによるエコマース向けポッドキャスト。ホスティング、パフォーマンス、プラットフォーム戦略をカバー

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [MageTalk](https://magetalk.com/) - Phillip JacksonおよびKalen Jordanが運営する週間Magentoポッドキャスト。Magentoニュース、インタビュー、コミュニティトピックをカバー。

</details>

## ニュースレター <a id="newsletters"></a>

- [Mage Dispatch](https://www.magedispatch.com/) 🫡 - コミュニティが運営するニュースレター。Magentoコミュニティが知るべきリンクを集めたもの。
- [M Bytes Newsletter](https://m.academy/newsletter/) - M.academyの週刊開発者ニュースレター。毎木曜日に3つの無料Magento動画講座を提供
- [Mageres Monthly Digest](https://mailchi.mp/6a498018d9ef/mageres) - Alessandro Ronchiが手選別した月次ニュースレター。有用なMagentoリソースを収集
- [The Devletter](https://www.maxpronko.com/the-devletter/) - Max Pronkoによる無料週間メールまとめ。Magento 2開発のヒントとニュースをカバー

## コミュニティ <a id="community"></a>

- [Dutchento](https://www.dutchento.org/) - オランダのMagentoコミュニティ
- [ExtDN](https://extdn.org/) - トップクラスのMagento拡張開発者たちが構成する、品質とベストプラクティスを重視するネットワーク
- [Firegento](https://firegento.com/) - Magento熱心な開発者たちがオープンソースモジュールを開発し、ハッキングイベントを主催するグループ
- [Mage-OS Association](https://mage-os.org/) - Magento Open Sourceのアクセシビリティ、持続性、成功を確保するコミュニティ連携
- [Magento Association](https://www.magentoassociation.org/home) - オープンで強力なMagentoエコシステム協会
- [Magento Stack Exchange](https://magento.stackexchange.com/) - Magentoエコマースプラットフォームのユーザーおよび開発者向けQ&Aサイト
- [OpenGento](https://opengento.fr/) - フランスのMagentoコミュニティ
- [Reddit r/Magento](https://www.reddit.com/r/Magento/) - Reddit上のMagentoコミュニティ — 質問、ニュース、ディスカッション

## 学習 <a id="learning"></a>

- [Max Pronko DevChannel](https://www.youtube.com/channel/UCxbWGz6h6KNQsi2ughRUV2Q) 🫡 - Max PronkoのYouTubeチャンネル（Magento 2開発用）
- [M.academy](https://m.academy/) - Magento 2およびAdobe Commerce向けの動画講座とコース
- [Max Bucknell — Magento 2 JavaScript](https://www.youtube.com/watch?v=tHxebA-jOSo) - Max BucknellによるMagento 2のJavaScriptスタックに関する講演
- [Yireo Training](https://www.yireo.com/training) - Magento 2のバックエンドおよびフロントエンド開発コース

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [magento-notes/magento2-exam-notes](https://github.com/magento-notes/magento2-exam-notes) - Magento 及認定プロフェッショナル開発者試験の準備ノート
- [fisheye-academy/m2cpfed-training](https://github.com/fisheye-academy/m2cpfed-training) - Magento 2認定プロフェッショナルフロントエンド開発者試験のリソース
- [magento-notes/magento2-cloud-developer-notes](https://github.com/magento-notes/magento2-cloud-developer-notes) - マグノリア2認定プロフェッショナルクラウド開発者試験の準備ノート
- [roma-glushko/magento2-dev-plus-exam](https://github.com/roma-glushko/magento2-dev-plus-exam) - マグノリア2認定プロフェッショナル開発者プラス試験の準備ノート
- [Mage2.tv](https://www.mage2.tv) - Vinai Koppによるマグノリア2開発者スクリーンキャスト
- [MageTitans Italia 2016](https://www.youtube.com/playlist?list=PLwB4Uz_0hoVP3Fm_c4HfNPK5JdRD6DIDl) - MageTitans Italia 2016会議の録音
- [MageTitans MCR 2016](https://www.youtube.com/playlist?list=PLwB4Uz_0hoVMOnBRS49ICbNWOU5jhNNWC) - MageTitans Manchester 2016会議の録音
- [MageTitans USA/Texas 2016](https://www.youtube.com/playlist?list=PLwB4Uz_0hoVOLU7LPRNL4lAmJeAv7HQ-b) - MageTitans USA/Texas 2016会議の録音
- [The Magento 2 Beginner Tutorial Class](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9eL59JGE3ny-_GAU-z5X5D) - マグノリア2を学ぶための無料YouTubeシリーズ
- [Vinai Kopp Mage2Katas](https://www.youtube.com/channel/UCRFDWo7jTlrpEsJxzc7WyPw) - Vinai KoppのMage2Katas YouTubeチャンネル

</details>

---

## プラットフォーム <a id="platforms"></a>

- [StackExchange](http://magento.stackexchange.com/) - Magento開発者のためのQ&Aフォーラム

---

## 公式資料 <a id="official-resources"></a>

- [Magento GitHub Repository](https://github.com/magento/magento2) 🫡 - Magento 2のGitHubリポジトリ
- [Magento Coding Standards](https://github.com/magento/magento-coding-standard) - PHP_CodeSniffer用の公式マグノリア2高度ルールセット
- [Magento 2 data migration tool](https://github.com/magento/data-migration-tool) - マグノリア1からマグノリア2への移行ツール（公式）
- [Magento 2 Architecture](https://github.com/magento/architecture) - マグノリア2に関するアーキテクチャディスカッション
- [Magento Developer Blog](https://community.magento.com/t5/Magento-DevBlog/bg-p/devblog) - マグノリアが運営する開発者ブログ
- [Magento Developer Documentation](http://devdocs.magento.com/) - 公式開発者ドキュメンテーション
- [Magento Forum](https://community.magento.com/) - マグノリアが運営するコミュニティフォーラム
- [Magento Official Website](https://www.magento.com) - マグノリアの公式ウェブサイト

---

## 信頼できる拡張開発者一覧 <a id="list-of-trustworthy-extension-developers"></a>

- [CustomGento](https://www.customgento.com/extensions/) - 品質に焦点を当てたマグノリア2拡張プラグインベンダー；ExtDNに加盟
- [Hyva Themes](https://www.hyva.io/) - マグノリア2用のハイバーフロントエンドフレームワークの開発者；2025年11月にオープンソース化
- [integer_net](https://www.integer-net.com/) - ドイツのマグノリアアgencyおよび拡張プラグインベンダー；ExtDNに加盟；ソルR検索およびコード品質ツール開発で知られている
- [Modulwerft](https://www.modulwerft.com/) - ドイツのマグノリア2拡張プラグインベンダー
- [Paradox Labs](https://www.paradoxlabs.com/) - マグノリア2用のサブスクリプション、トークン化決済、顧客アカウント管理用拡張プラグイン
- [ProxiBlue](https://www.proxiblue.com.au/) - オーストラリアのMagento 2拡張機能ベンダー。プロモーションおよび動的カテゴリに特化。
- [run-as-root](https://www.run-as-root.sh/) - ドイツのMagentoアgencyおよびオープンソース貢献者。awesome-magento2および複数のコミュニティ拡張機能を維持。
- [Smile.io](https://smile.io/) - ロイヤリティおよび報酬プラットフォーム（かつてはSweet Tooth）。
- [Yireo](https://www.yireo.com/) - オランダのMagento 2拡張機能ベンダーおよびトレーニングプロバイダー。HyvaおよびGraphQL専門家。ExtDNメンバー。

> **Magento Extension Developers Network（ExtDN）**
> Magento Extension Developers Network（ExtDN）は、高品質なMagento拡張の開発・販売を中核事業とする、審査済み開発者ネットワークです。
> ExtDNはMagento拡張市場へ説明責任と信頼をもたらすために設立されました。
> 会員はコーディング、著作権、事業行動に関する高い基準を守ることへ同意します。

解説
by [Fooman](http://store.fooman.co.nz/blog/how-to-find-trustworthy-information-about-magento-extensions.html)

---

## 影響力のある人物 <a id="influencing-people"></a>

講演、ブログ記事、オープンソース保守、教材の面で注目すべきコミュニティメンバーです。

- [Alessandro Ronchi](https://github.com/aleron75) - Mage-OSドキュメンテーションワーキンググループメンバー。Mageresを維持。ExtDNの共同創業者。Hyva Themesのエンジニアリングマネージャー。
- [Andreas von Studnitz](https://github.com/avstudnitz) - Mage-OS技術ワーキンググループメンバー。Hyva ThemesのMagentoアーキテクト。2回のMagentoマスター。かつてはinteger_netの共同所有者。
- [David Lambauer](https://www.davidlambauer.de) - Mage-OSの副会長。Adobe認定マスターアーキテクト。Mage-OS DevDocsの創設者。run-as-root GmbHの創業者。
- [Fabrizio Balliano](https://fabrizioballiano.com) - Mage-OS技術ワーキンググループメンバー。Mage-OS 2.0リリースマネージャー。5回のMagento認定フリーランスエンジニア。
- [Jisse Reitsma](https://www.yireo.com/blog) - Magentoアソシエーションの副会長。3回のMagentoマスター。Yireoの創業者。Hyva、GraphQL、Loki Checkoutのトレーナー。Mage-OSオープンソースタスクフォースメンバー。
- [Noah Oken-Berg](https://www.abovethefray.com) - Magentoアソシエーションボードの議長。Above The FrayのCEO。コミュニティガバナンスおよび持続可能なエコシステム成長に注目。
- [Peter Jaap Blaakmeer](https://github.com/peterjaap) - elgentosのCTO。Mage-OSの創設署名者。Magento 2およびMage-OSへの豊富なオープンソース貢献者。
- [Ryan Hoerr](https://github.com/rhoerr) - Mage-OSボードメンバーおよび技術ワーキンググループ参加者。2025年～2026年にかけてMage-OSリリースの主なエンジニア。ParadoxLabs。
- [Sanne Bolkenstein](https://www.hyva.io/about) - Hyva Themesの商業ディレクターおよびパートナー。Mage-OS Netherlandsを主催。
- [Sergej Derzap](https://amasty.com) - Magentoアソシエーションの財務責任者。Amasty（Magento 2拡張機能ベンダーの最大規模企業の一つ）のCEOおよびCPO。エコシステムで18年以上の経験。
- [Vinai Kopp](https://mage2.tv/) - Mage-OSの会長。Hyva Themesの技術ディレクター。3回のMagentoマスター。Mage2Katasの創設者。Mage-OS技術ワーキンググループのリーダー。
- [Willem Poortman](https://wpoortman.nl) - Hyva Themesのシニア開発者。Magento 2のサーバーサイドコンポーネント向けMagewireフレームワークの創設者。
- [Willem Wigman](https://www.hyva.io/blog/author/willemwigman) - Hyva Themesの創業者およびCEO。Magento 2向けHyvaフロントエンドフレームワークの創設者。2025年11月にHyvaをオープンソースリリース。

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [Mark Shust](https://markshust.com/) - markshust/docker-magento（Magento向けGitHubリポジトリで最もスター数を獲得）の創設者。M.academyでの教育者。600以上の動画講義を提供。

</details>

---

## Magento 2関連のほかのAwesomeリスト <a id="other-magento-2-related-awesome-lists"></a>

- [Awesome PHP](https://github.com/ziadoz/awesome-php) - PHPリソースの厳選されたリスト。
- [Mageres](https://github.com/aleron75/mageres) - Magento 1およびMagento 2向けAlessandro Ronchiのリソースリスト。

<details>
<summary>🪦 墓地 — 現在は推奨されないプロジェクト</summary>

- [Awesome Magento](https://github.com/sunel/awesome-magento) - 素晴らしい Magento リスト。M1 と M2 のコンテンツが混在している。sunel による。

</details>

---

## ライセンス <a id="license"></a>

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法令で認められる範囲において、David Lambauerはこの作品に関する著作権および関連・隣接する権利を
放棄しています。

---

すべての言語パックを収集した[Anna Völkl](https://github.com/avoelkl)と[Sander Mangel](https://github.com/sandermangel)に感謝します。


---

講演をYouTubeで共有した[MageTitans](http://www.magetitans.co.uk/)に感謝します。
