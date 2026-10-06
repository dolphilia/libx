---
title: "Awesome Phalcon"
description: "Phalconのライブラリ、アプリケーションの雛形、開発ツール、実行環境、コミュニティ、学習資料。"
licenseSource: "github-phalcon-awesome-phalcon-readme-md"
toc:
  maxLevel: 4
---

# Awesome Phalcon

PHPフレームワークのPhalconで使えるライブラリ、アプリケーションの雛形、開発ツールをまとめています。認証コンポーネント、CMS、データベースアダプター、実行環境、コミュニティ、学習資料を探せます。

## ACL

アクセス制御リスト。

* [PhalconUserPlugin](https://github.com/calinrada/PhalconUserPlugin) - VökuróのACLの考え方に基づくプラグイン

## アプリケーションの雛形 <a id="application-skeleton"></a><a id="アプリケーションスケルトン"></a>

アプリケーションの雛形。

* [Album O'Rama](https://github.com/phalcon/album-o-rama) - Phalcon Framework向けのモジュール構成のサンプルアプリケーション
* [Base App](https://github.com/mruz/base-app) - Phalcon Frameworkの基本アプリケーション
* [INVO Application](https://github.com/phalcon/invo) - Phalcon Framework向けサンプルアプリケーション
* [MVC](https://github.com/phalcon/mvc) - Phalcon MVCのファイル構造の例
* [Phalcon Composer](https://github.com/xxtime/phalcon) - Composer、MySQL、MongoDB、Redisに対応したPhalcon
* [Vökuró](https://github.com/phalcon/vokuro) - Phalcon Framework向けサンプルアプリケーション（ACL、認証、セキュリティ）
* [Webird](https://github.com/perchlabs/webird) - PHPとNode.jsを一つのアプリケーションスタックにまとめるために作られたアプリケーション
* [NovaMOOC](https://github.com/les-enovateurs/phalcon-nova-mooc) - API／バックエンド、フロントエンド、JWT認証、GitHub ActionsによるCypressテスト、Docker Composeを備えるサンプルアプリケーション
* [PhalconTool](https://github.com/corentin-begne/phalconTool) - Phalcon devtoolsの代替ツール。フロントエンドフレームワークを使わず、HTMLイベントを自動的にバインドするヘルパーを備えたフロントエンドスタックを提供。Phalcon 5、PHP 8、Apache、MySQL、Sass、ES6、jQueryを使用

## 認証とOAuth <a id="authentication--oauth"></a>

認証方式を実装するライブラリ。

* [Padlock](https://github.com/tegaphilip/padlock) - PHP OAuth 2.0 Server上に構築されたDockerベースのPhalcon認証サーバー
* [phalcon-authmiddleware](https://github.com/SidRoberts/phalcon-authmiddleware) - ディスパッチャーにミドルウェアイベントを追加。ACLまたは独自の認証ライブラリと互換性のある汎用設計
* [Phalcon Auth](https://github.com/sinbadxiii/phalcon-auth) - ガードとプロバイダーに基づく、すぐに使える認証コンポーネント

## CMSとブログ <a id="cms--blogs"></a>

コンテンツ管理システムとブログ。

* [giada-www](https://github.com/monocasual/giada-www) - [Giada Loop Machine](https://www.giadamusic.com/)の公式ウェブサイト
* [KikCMS](https://github.com/krazzer/kikcms) - Phalcon Frameworkで構築されたCMS
* [Skopy Blog Engine](https://github.com/yuriygr/skopy) - Phalconの学習を始めたい人向けのシンプルなブログエンジン
* [Yona CMS](https://github.com/alexander-torosh/yona-cms) - モジュール構成のPhalcon FrameworkベースのCMS
* [PhalconCMS](https://github.com/KevinJay/PhalconCMS) - Phalcon Frameworkで構築されたブログ
* [Hummingbird CMS](https://github.com/mvanvu/hummingbird-cms) - Phalcon 4ベースのCMS
* [Element CMF](https://github.com/odvapro/element) - 管理パネル。[デモ](https://element-demo.odva.pro/element/)（ログイン情報：admin | adminpass）

## コマンドライン <a id="command-line"></a>

コマンドラインのアプリケーションとツール。

* [phalcon-console](https://github.com/viebig/phalcon-console) - Phalconを使うコマンドラインアプリケーション向けの起動処理のサンプルアプリケーション
* [phalcon-cron](https://github.com/SidRoberts/phalcon-cron) - Phalcon向けCronコンポーネント

## 設定 <a id="config"></a>

* [Phalcon Config Loader for Yaml](https://github.com/ienaga/PhalconConfig) - app/configディレクトリ内のすべてのymlを読み込むツール

## ダッシュボード <a id="dashboard"></a>

管理パネルとダッシュボード。

* [PhalconTime](https://github.com/Videles/PhalconTime) - 時間管理ツールとダッシュボードの雛形

## デバッグ <a id="debug"></a>

デバッグとプロファイリングのツール。

* [dd](https://github.com/phalcon/dd) - Phalconアプリケーションに`dd`と`dump`のヘルパーを追加するパッケージ
* [Phalcon BB Debugger](https://github.com/ismail0234/Phalcon-BB-Debugger) - Phalcon向けデバッガー
* [Phalcon Debugbar](https://github.com/snowair/phalcon-debugbar) - [PHP Debug Bar](http://phpdebugbar.com)をPhalcon Frameworkに統合
* [Prophiler](https://github.com/fabfuel/prophiler) - Phalcon向けに作られたPHPプロファイラーと開発者用ツールバー

## i18n

国際化（i18n）と地域化（l10n）のライブラリ・サービス。

* [xgettext-template](https://github.com/gmarty/xgettext) - [xgettextの呼び出し](http://www.gnu.org/software/gettext/manual/gettext.html#xgettext-Invocation)と同じコマンドラインプログラムを使い、Voltテンプレートからgettextメッセージを抽出

## 外部サービスとの統合 <a id="integration"></a><a id="統合"></a>

サードパーティーのサービスとの統合。

* [phalcon-logentries](https://github.com/phalcon-orphanage/phalcon-logentries) - [Logentries](https://logentries.com/)ログ管理サービスへログメッセージを送信

## IDE

IDE向け拡張機能。

* [volt-phalcon-language](https://marketplace.visualstudio.com/items?itemName=fbclol.volt-phalcon-language) - Phalcon Voltの構文と自動補完に対応したVS Code拡張機能

## その他 <a id="miscellaneous"></a>

ほかの分類に当てはまらないライブラリ。

* [Breadcrumbs](https://github.com/sergeyklay/breadcrumbs) - Phalcon 2+でサイトのパンくずリストを構築するコンポーネント
* [Feedback](https://quasipickle.github.io/feedback/) - Phalcon組み込みのFlash機能とMessage機能の置き換えを目的とするライブラリ
* [Incubator](https://github.com/phalcon/incubator) - Phalcon Frameworkに組み込める可能性のある新しいアダプター、プロトタイプ、機能を公開・共有・実験するリポジトリ
* [Upgrade Adviser](https://github.com/diplopito/Phalcon-Upgrade-Adviser) - Phalconアプリケーションの3.4.xから4.1.3、3.4.xから5.1.3、4.1.3から5.1.3への移行を支援するコマンドラインツール
* [yarak](https://github.com/zachleigh/yarak) - Laravelに着想を得たPhalcon devtools
* [phalcon-data-table](https://github.com/maslo2017/phalcon-data-table) - Phalconでbootstrap-tableを扱う操作を簡素化するツール

## ORM

オブジェクトリレーショナルマッピングやデータマッピングを実装するライブラリ。

* [phalcon-boundmodels](https://github.com/SidRoberts/phalcon-boundmodels) - Phalconフレームワーク内でディスパッチャーのパラメーターに基づくモデルを自動取得
* [phalcon-repositories](https://github.com/micheleangioni/phalcon-repositories) - Phalcon向けRepositoryパターン
* [phalcon-seeder](https://github.com/SidRoberts/phalcon-seeder) - Phalcon向けデータベースシーダーコンポーネント
* [phalcon-redis-model](https://github.com/ienaga/RedisPlugin) - RedisベースのORMとEasy Criteria。元の一覧ではMySQLのシャーディングへの対応を紹介

## ODM

オブジェクトドキュメントマッピングを実装するライブラリ。

* [phalcon-collection-paginator](https://github.com/angelxmoreno/phalcon-collection-paginator) - `Phalcon\Mvc\Collection`を拡張するクラス向けの[ページネーションアダプター](https://docs.phalcon.io/3.4/db-pagination#data-adapters)

## 環境構築 <a id="provisioning"></a><a id="プロビジョニング"></a>

Phalconアプリケーションの実行環境を構築するツール。

* [ansible-phalcon](https://github.com/HanXHX/ansible-phalcon) - DebianにPhalcon FrameworkをインストールするAnsibleロール（PHP 5.6とPHP 7.0のパッケージを提供）
* [setupify](https://github.com/perchlabs/setupify) - デプロイまたは開発に向けて、ZephirとPhalconを使うシステムを構築するbashスクリプト集

## RESTful

REST（Representational State Transfer）。

* [phalcon-json-api-package](https://github.com/gte451f/phalcon-json-api-package) - PhalconでJSON:APIを作成するためのComposerパッケージ
* [PhREST API](https://github.com/phrest/api) - Phalcon Framework向けREST APIパッケージ
* [REST API](https://github.com/phalcon/rest-api) - Phalconを使うAPIアプリケーションの実装

## ルーティング <a id="routing"></a>

ルーティングのライブラリと拡張機能。

* [Phalcon-autorouter](https://github.com/kahur/Phalcon-autorouter) - 複雑なルート定義なしでモジュールを自動読み込み
* [Phalcon Routing for Yaml](https://github.com/ienaga/PhalconRouter) - YAMLでルーティングを設定

## 検索 <a id="searching"></a>

検索のツールとライブラリ。

* [ElasticsearchIndexer](https://github.com/SidRoberts/phalcon-elasticsearchindexer) - Phalcon向けElasticsearchインデクサーコンポーネント

## SEO

SEOのツール。

* [Phalcon meta tags](https://github.com/izica/phalcon-meta-tags) - メタタグを扱うツール

## ショップとEコマース <a id="shop--ecommerce"></a>

* [Shopping Cart](https://github.com/sinbadxiii/phalcon-cart) - オンラインストア向けのシンプルなカート

## 対話・フォーラム用ソフトウェア <a id="talks"></a><a id="トーク"></a>

カンファレンス、チャット、フォーラム用のソフトウェア。

* [Phanbook](https://github.com/phanbook/phanbook/) - phanbook.comウェブサイトのソースコード
* [Phosphorum](https://github.com/phalcon/forum) - 公式Phalconフォーラムのソースコード

## テンプレート処理 <a id="templating"></a><a id="テンプレート"></a>

テンプレート処理のライブラリとツール。

* [twig-phalcon](https://github.com/vinyvicente/phalcon-twig) - Phalcon Framework向けTwigテンプレートエンジン

## テスト <a id="testing"></a>

テストのツールとソリューション。

* [phalcon-demo](https://github.com/Codeception/phalcon-demo) - Codeceptionによるテストの基本を示すために変更されたPhalcon INVOアプリケーション

## サーバーアプリケーション <a id="server-applications"></a>

* [phalcon-docker-nginx](https://github.com/viebig/phalcon-docker-nginx) - Phalcon 3、PHP7、Dockerを使う開発開始用のサンプルアプリケーション
* [phalcon-vm](https://github.com/eugene-manuilov/phalcon-vm) - Phalcon 3.xとPHP7.0による開発向けのVagrant設定。MySQL/PostgreSQL/MongoDB、Redis/Memcached、Gearman/RabbitMQ、Elasticsearch/Sphinxsearchを選択可能
* [phalcon3-compose](https://github.com/linxlad/phalcon3-compose) - Dockerを使うPhalcon 3開発環境

## 資料 <a id="resources"></a><a id="リソース"></a>

新しいPhalconライブラリを見つけるための資料。

### カンファレンス <a id="conferences"></a>

カンファレンス、IRC、フォーラムなどの資料。

#### コミュニティ <a id="communities"></a>

* [Gab](https://gab.com/phalcon) - Gab上のPhalcon
* [MeWe](https://mewe.com/join-front/phalcon) - MeWe上のPhalcon
* [Phalcon Forums](https://forum.phalcon.io/) - Phalconのフォーラム
* [Phalconロシア語コミュニティのチャット](https://app.gitter.im/#/room/#phalcon-rus_chat:gitter.im) - Gitter.im上のロシア語コミュニティのチャット
* [Stack Overflow](https://stackoverflow.com/questions/tagged/phalcon) - Phalconタグの付いたStack Overflowの質問
* [Telegram](https://t.me/phalcon_news) - Telegram上のPhalcon
* [Twitter](https://twitter.com/phalconphp) - Twitter上のPhalcon

### 書籍 <a id="books"></a>

* [Phalcon Book（フランス語）](https://www.editions-eni.fr/livre/phalcon-3-developpez-des-applications-web-complexes-et-performantes-en-php-version-en-ligne-9782409022753) - Phalconを使ってPHPで複雑なウェブアプリケーションを開発するための書籍

### 電子書籍 <a id="e-books"></a>

* [Phalcon PDFドキュメント](https://buildmedia.readthedocs.org/media/pdf/phalcon-php-framework-documentation/latest/phalcon-php-framework-documentation.pdf) - Phalcon Frameworkのドキュメント

### 雑誌 <a id="magazines"></a>

* [フランス語雑誌：Programmez n°239](https://www.programmez.com/magazine/article/les-10-commandements-de-lecoconception) - エコデザインの10の戒めを扱い、Phalconを軽量で環境に配慮したフレームワークとして紹介する記事
* [フランス語雑誌：Programmez n°241](https://www.programmez.com/magazine/article/phalcon-un-framework-performant-et-robuste-compile-en-c) - PhalconをPHPフレームワークとして紹介する記事

### ウェブサイト <a id="websites"></a><a id="webサイト"></a>

* [Built With](https://builtwith.phalcon.io/) - Phalcon Frameworkで構築されたアプリケーション、デモ、プロジェクトのギャラリー
* [Phalcon Blog](https://blog.phalcon.io/) - Phalconのブログ
* [Phalconist](https://github.com/phalcon/phalconist) - Phalconist上のPhalcon Framework向け資料カタログ

#### チュートリアル <a id="tutorials"></a>

* [Phalconドキュメント](https://docs.phalcon.io/4.0/en/introduction) - Phalconのドキュメント
* [Sitepoint](https://www.sitepoint.com/?s=phalcon) - 記事、チュートリアル、その他の資料
