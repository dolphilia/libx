---
title: "phalcon/awesome-phalcon"
description: "phalcon/awesome-phalcon の定本スナップショット"
licenseSource: "github-phalcon-awesome-phalcon-readme-md"
---

# Awesome Phalcon

[![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Actions Status](https://github.com/phalcon/awesome-phalcon/workflows/CI/badge.svg)](https://github.com/phalcon/awesome-phalcon/actions)

優れたPhalconライブラリ・リソースの厳選リスト。[awesome-go](https://github.com/avelino/awesome-go)に着想を得ています。

### 寄稿

まず[寄稿ガイドライン](https://github.com/phalcon/awesome-phalcon/blob/6a0fbbd2fa66c2aba79770a2b6671cb4d0ed1c5f/CONTRIBUTING.md)をざっと確認してください。すべての[寄稿者](https://github.com/phalcon/awesome-phalcon/graphs/contributors)に感謝します。あなたたちは素晴らしい！

ほかのawesome-phalconメンテナーと話すには[Discord](https://discord.com/invite/kRc2N2M)へ参加してください！

### 目次

- [Awesome Phalcon](#awesome-phalcon)
    - [ACL](#acl)
    - [アプリケーションスケルトン](#application-skeleton)
    - [認証とOAuth](#authentication--oauth)
    - [CMSとブログ](#cms--blogs)
    - [コマンドライン](#command-line)
    - [ダッシュボード](#dashboard)
    - [デバッグ](#debug)
    - [i18n](#i18n)
    - [統合](#integration)
    - [IDE](#ide)
    - [その他](#miscellaneous)
    - [ORM](#orm)
    - [ODM](#odm)
    - [プロビジョニング](#provisioning)
    - [RESTful](#restful)
    - [ルーティング](#routing)
    - [検索](#searching)
    - [SEO](#seo)
    - [ショップとEコマース](#shop--ecommerce)
    - [トーク](#talks)
    - [テンプレート](#templating)
    - [テスト](#testing)

- [サーバーアプリケーション](#server-applications)

- [リソース](#resources)
    - [カンファレンス](#conferences)
        - [コミュニティ](#communities)
    - [書籍](#books)
    - [電子書籍](#e-books)
    - [雑誌](#magazines)
    - [Webサイト](#websites)
        - [チュートリアル](#tutorials)

## ACL

*アクセス制御リスト。*

* [PhalconUserPlugin](https://github.com/calinrada/PhalconUserPlugin) - Vökuró ACLのアイデアに基づくプラグイン。

## アプリケーションスケルトン

*さまざまなアプリケーションスケルトン。*

* [Album O'Rama](https://github.com/phalcon/album-o-rama) - Phalcon Framework向けサンプルモジュラーアプリケーション。
* [Base App](https://github.com/mruz/base-app) - Phalcon Frameworkにおける基本アプリケーション。
* [INVO Application](https://github.com/phalcon/invo) - Phalcon Framework向けサンプルアプリケーション。
* [MVC](https://github.com/phalcon/mvc) - Phalcon MVCファイル構造の例。
* [Phalcon Composer](https://github.com/xxtime/phalcon) - Composer対応のPhalcon。MySql、MongoDb、Redis、クリーンさと美しさ。
* [Vökuró](https://github.com/phalcon/vokuro) - Phalcon Framework向けサンプルアプリケーション（Acl、Auth、Security）。
* [Webird](https://github.com/perchlabs/webird) - 最新のPHP・Node.jsイノベーションを一つのアプリケーションスタックへ統合するために作られた。
* [NovaMOOC](https://github.com/les-enovateurs/phalcon-nova-mooc) - API／バックエンド、フロントエンド、JWT認証、Cypressテスト、GitHub Actions、Docker composeを備えるサンプルアプリケーション。
* [PhalconTool](https://github.com/corentin-begne/phalconTool) - Phalcon 5、PHP 8、Apache、MYSQL、SASS、ES6、jQueryを使い、PhalconによるHTMLイベントの自動バインドを可能にするヘルパーシステムを備える、フレームワークなしの完全なフロントエンドスタックを持つPhalcon devtools代替。

## 認証とOAuth

*認証スキームを実装するライブラリ。*

* [Padlock](https://github.com/tegaphilip/padlock) - PHP OAuth 2.0 Server上に構築されたDockerベースPhalcon認証サーバー。
* [phalcon-authmiddleware](https://github.com/SidRoberts/phalcon-authmiddleware) - ディスパッチャーにミドルウェアイベントを追加する。ACLまたはカスタム認証ライブラリと互換性のある汎用設計。
* [Phalcon Auth](https://github.com/sinbadxiii/phalcon-auth) - ガードとプロバイダーに基づく、すぐに使える認証コンポーネント。

## CMSとブログ

*コンテンツ管理システムとブログ。*

* [giada-www](https://github.com/monocasual/giada-www) - [Giada Loop Machine](https://www.giadamusic.com/)の公式Webサイト。
* [KikCMS](https://github.com/krazzer/kikcms) - Phalcon Frameworkで構築されたCMS。
* [Skopy Blog Engine](https://github.com/yuriygr/skopy) - Phalcon学習を始めたい人向けのシンプルなブログエンジン。
* [Yona CMS](https://github.com/alexander-torosh/yona-cms) - モジュラー構造を持つPhalcon FrameworkベースCMS。
* [PhalconCMS](https://github.com/KevinJay/PhalconCMS) - Phalcon Framework上に構築されたブログ。
* [Hummingbird CMS](https://github.com/mvanvu/hummingbird-cms) - 多くの強力な機能を備えるPhalcon 4ベースCMS。
* [Element CMF](https://github.com/odvapro/element) - すべてに対応する管理パネル。[デモ](https://element-demo.odva.pro/element/)（admin | adminpass）。

## コマンドライン

*コマンドラインアプリケーションとツール。*

* [phalcon-console](https://github.com/viebig/phalcon-console) - 優れたPhalcon Frameworkを使うコマンドラインアプリケーション向けサンプルブートストラップアプリケーション。
* [phalcon-cron](https://github.com/SidRoberts/phalcon-cron) - Phalcon向けCronコンポーネント。

## 設定

* [Phalcon Config Loader for Yaml](https://github.com/ienaga/PhalconConfig) - app/configディレクトリ内のすべてのymlを読み込む。

## ダッシュボード

*管理パネルとダッシュボード。*

* [PhalconTime](https://github.com/Videles/PhalconTime) - タイムキーピングツール／ダッシュボードスケルトン。

## デバッグ

*デバッグ・プロファイリングツール。*

* [dd](https://github.com/phalcon/dd) - Phalconアプリケーションへ`dd`・`dump`ヘルパーを追加するパッケージ。
* [Phalcon BB Debugger](https://github.com/ismail0234/Phalcon-BB-Debugger) - Phalcon BB Debugger。強力で簡単にインストールできる。
* [Phalcon Debugbar](https://github.com/snowair/phalcon-debugbar) - [PHP Debug Bar](http://phpdebugbar.com)をPhalcon Frameworkと統合する。
* [Prophiler](https://github.com/fabfuel/prophiler) - PHPプロファイラー・開発者ツールバー（Phalcon向けに構築）。

## i18n

*i18n・l10nライブラリとサービスのリスト。*

* [xgettext-template](https://github.com/gmarty/xgettext) - [xgettextの呼び出し](http://www.gnu.org/software/gettext/manual/gettext.html#xgettext-Invocation)と同一のコマンドラインプログラムを使い、Voltテンプレートからgettextメッセージを抽出する。

## 統合

*サードパーティーサービスとの統合*

* [phalcon-logentries](https://github.com/phalcon-orphanage/phalcon-logentries) - ログメッセージを[Logentries](https://logentries.com/)ログ管理サービスへ送信する。

 ## IDE
 *IDE向け拡張機能のリスト*
 
 * [volt-phalcon-language](https://marketplace.visualstudio.com/items?itemName=fbclol.volt-phalcon-language) - Phalcon Volt構文・補完自動化のサポートを提供するVS Code向け拡張機能。
 
## その他

*ほかのカテゴリに適合しないため、ここへ置かれたライブラリ。*

* [Breadcrumbs](https://github.com/sergeyklay/breadcrumbs) - Phalcon 2+でサイトのパンくずリストを構築する、強力で柔軟なコンポーネント。
* [Feedback](https://quasipickle.github.io/feedback/) - Phalcon組み込みのFlash・Message機能の置き換えとして使うことを意図する。
* [Incubator](https://github.com/phalcon/incubator) - Phalcon Frameworkに組み込まれる可能性がある新しいアダプター、プロトタイプ、機能を公開・共有・実験するリポジトリ。
* [Upgrade Adviser](https://github.com/diplopito/Phalcon-Upgrade-Adviser) - Phalconアプリケーションを3.4.xから4.1.3、3.4.xから5.1.3、4.1.3から5.1.3へアップグレードするためのコマンドラインツール。
* [yarak](https://github.com/zachleigh/yarak) - Laravelに着想を得たPhalcon devtools。
* [phalcon-data-table](https://github.com/maslo2017/phalcon-data-table) - Phalconでbootstrap-tableとの対話を簡素化できる。

## ORM

*オブジェクトリレーショナルマッピングまたはデータマッピング技法を実装するライブラリ。*

* [phalcon-boundmodels](https://github.com/SidRoberts/phalcon-boundmodels) - Phalconフレームワーク内でディスパッチャーパラメーターに基づくモデルを自動取得する。
* [phalcon-repositories](https://github.com/micheleangioni/phalcon-repositories) - Phalcon向けの簡単なRepositoryパターン。
* [phalcon-seeder](https://github.com/SidRoberts/phalcon-seeder) - Phalcon向けデータベースシーダーコンポーネント。
* [phalcon-redis-model](https://github.com/ienaga/RedisPlugin) - RedisベースORMとEasy Criteria（MySQLシャーディングの対応）。

## ODM

*オブジェクトドキュメントマッパー技法を実装するライブラリ。*

* [phalcon-collection-paginator](https://github.com/angelxmoreno/phalcon-collection-paginator) - `Phalcon\Mvc\Collection`を拡張するクラス向け[ページネーションアダプター](https://docs.phalcon.io/3.4/db-pagination#data-adapters)。

## プロビジョニング
*Phalconアプリケーション用システムをプロビジョニングするツール。*
 
* [ansible-phalcon](https://github.com/HanXHX/ansible-phalcon) - DebianにPhalcon FrameworkをインストールするAnsibleロール（PHP 5.6・PHP 7.0パッケージを提供）。
* [setupify](https://github.com/perchlabs/setupify) - デプロイ・開発向けに、Zephir・Phalconベースシステムをプロビジョニングするbashスクリプトコレクション。

## RESTful

*表現状態転送。*

* [phalcon-json-api-package](https://github.com/gte451f/phalcon-json-api-package) - PhalconでJSON:APIを作成するために設計されたcomposerパッケージ。
* [PhREST API](https://github.com/phrest/api) - Phalcon Framework REST APIパッケージ。
* [REST API](https://github.com/phalcon/rest-api) - Phalconを使うAPIアプリケーション実装。

## ルーティング

*さまざまなルーティングライブラリと拡張機能。*

* [Phalcon-autorouter](https://github.com/kahur/Phalcon-autorouter) - 複雑なルート定義なしでモジュールを自動読み込みする簡単な方法。
* [Phalcon Routing for Yaml](https://github.com/ienaga/PhalconRouter) - yamlでルーティングを容易に設定できる。

## 検索

*検索ツールとライブラリ。*

* [ElasticsearchIndexer](https://github.com/SidRoberts/phalcon-elasticsearchindexer) - Phalcon向けElasticsearchインデクサーコンポーネント。

## SEO

*SEOツール。*

* [Phalcon meta tags](https://github.com/izica/phalcon-meta-tags) - メタタグを扱うツール。

## ショップとEコマース

* [Shopping Cart](https://github.com/sinbadxiii/phalcon-cart) - オンラインストア向けシンプルなカート。

## トーク

*カンファレンス、チャット、フォーラムなど。*

* [Phanbook](https://github.com/phanbook/phanbook/) - phanbook.com Webサイトのコードソース。
* [Phosphorum](https://github.com/phalcon/forum) - 公式Phalconフォーラムのコードソース。

## テンプレート

*テンプレート用ライブラリとツール。*

* [twig-phalcon](https://github.com/vinyvicente/phalcon-twig) - Phalcon Framework向けTwigテンプレートエンジン。

## テスト

*テストツールとソリューション。*

* [phalcon-demo](https://github.com/Codeception/phalcon-demo) - Codeceptionテストの基本を示すために変更されたPhalcon INVOアプリケーション。

# サーバーアプリケーション

* [phalcon-docker-nginx](https://github.com/viebig/phalcon-docker-nginx) - Phalcon 3、PHP7、Dockerのサンプルスターターアプリケーション。
* [phalcon-vm](https://github.com/eugene-manuilov/phalcon-vm) - Phalcon 3.x・PHP7.0開発向けVagrant設定。MySQL/PostgreSQL/MongoDB、Redis/Memcached、Gearman/RabbitMQ、Elasticsearch/Sphinxsearchを選択できる。
* [phalcon3-compose](https://github.com/linxlad/phalcon3-compose) - DockerによるPhalcon 3開発環境。

# リソース

*新しいPhalconライブラリを発見する場所。*

## カンファレンス

*カンファレンス、IRC、フォーラムなど。*

### コミュニティ

* [Gab](https://gab.com/phalcon) - Gab上のPhalcon。
* [MeWe](https://mewe.com/join-front/phalcon) - MeWe上のPhalcon。
* [Phalcon Forums](https://forum.phalcon.io/) - Phalconフォーラム。
* [Phalcon Russian Community Chat](https://app.gitter.im/#/room/#phalcon-rus_chat:gitter.im) - Gitter.im上のロシア語コミュニティチャット。
* [Stack Overflow](https://stackoverflow.com/questions/tagged/phalcon) - StackOverflowのタグ付き質問。
* [Telegram](https://t.me/phalcon_news) - Telegram上のPhalcon。
* [Twitter](https://twitter.com/phalconphp) - Twitter上のPhalcon。

## 書籍

* [Phalcon Book (in French)](https://www.editions-eni.fr/livre/phalcon-3-developpez-des-applications-web-complexes-et-performantes-en-php-version-en-ligne-9782409022753) - Phalcon: PHPで複雑かつ強力なWebアプリケーションを開発する。

## 電子書籍

* [Phalcon PDF Documentation](https://buildmedia.readthedocs.org/media/pdf/phalcon-php-framework-documentation/latest/phalcon-php-framework-documentation.pdf) - Phalcon Frameworkドキュメント。

## 雑誌

* [French magazine - Programmez n°239](https://www.programmez.com/magazine/article/les-10-commandements-de-lecoconception) - エコデザインの10の戒め（軽量で環境に配慮したフレームワークとしてPhalconに言及する記事）。
* [French magazine - Programmez n°241](https://www.programmez.com/magazine/article/phalcon-un-framework-performant-et-robuste-compile-en-c) - Phalcon: 新たに知るべきPHPフレームワーク。

## Webサイト

* [Built With](https://builtwith.phalcon.io/) - Phalcon Frameworkで構築されたアプリケーション、デモ、プロジェクトのギャラリー。
* [Phalcon Blog](https://blog.phalcon.io/) - Phalconブログ。
* [Phalconist](https://github.com/phalcon/phalconist) - Phalconist上のPhalcon Framework向けリソースカタログ。

### チュートリアル

* [Phalcon Documentation](https://docs.phalcon.io/4.0/en/introduction) - Phalconドキュメント。
* [Sitepoint](https://www.sitepoint.com/?s=phalcon) - 記事、チュートリアルなど。
