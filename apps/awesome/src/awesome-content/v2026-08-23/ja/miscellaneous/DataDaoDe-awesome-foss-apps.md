---
title: "Awesome FOSS apps"
description: "FOSS appsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-DataDaoDe-awesome-foss-apps-readme-md"
---

# Awesome FOSS apps

FOSS appsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="toc"></a>

- [Webアプリ（フロントエンドのみ）](#web-apps-frontend-only)
- [Webアプリ（フルスタック）](#web-apps-fullstack)
- [デスクトップアプリ](#desktop-apps)
- [モバイルアプリ](#mobile-apps)
- [ゲーム](#games)


## Webアプリ（フロントエンドのみ） <a id="web-apps-frontend-only"></a>
----

### [Codesandbox](https://github.com/CompuIves/codesandbox-client)

* react, nginx, phoenix
* GNU General Public License

> Codesandboxは、Vue、Preact、ReactなどのモダンなJavaScriptフレームワークや、素のJavaScriptを使ったフロントエンドアプリケーションを、Web開発者がすばやく試作・実装できるオンラインIDEです。

### [CircleCI](https://github.com/circleci/frontend)

* clojurescript, om, react
* Eclipse Public License

> CircleCIは継続的インテグレーションとデプロイのプラットフォームです。そのフロントエンドは、ClojureScriptの不変データ構造で構築された大規模アプリケーションの優れた実例です。Pusher、Intercom、D3、Google Analyticsと連携し、ナビゲーションルーティングや、リアルタイムイベント、WebSocket、バックエンドAPIサーバーを介した通信の好例も備えています。テストスイートはそれほど広範ではありませんが、Karmaを使ったClojureScript／Omアプリのテスト方法を学ぶよい例です。

### [Precursor App](https://github.com/PrecursorApp/precursor)

* clojurescript, om, react
* Eclipse Public License

> Precursorは高度にインタラクティブなプロトタイピングWebアプリです。フロントエンドはClojureScriptで一から構築されています。ルーティングとイベント受け渡しの仕組みは十分に単純で、ClojureScriptを学び始めた開発者でも、そのアプリケーションでルーティングがどう機能するかを理解しやすくなっています。多数のコンポーネントがHTML5 Canvasを操作したりHTML5 APIを利用したりする、インタラクティブなグラフィックスアプリケーションのコンポーネントベース・フロントエンド設計例も豊富です。

### [The Guardian](https://github.com/guardian/frontend)

* play2, scala, node
* Apache 2.0 License

> The Guardianは、購読、サインイン、検索、管理画面に加え、静的フロントエンドとバックエンドAPIの通信を担う複数のScala仲介アプリを備えたニュースサイトです。非常に高速で包括的なテストスイートを持ち、従来型の大規模Webサイトを高速化する優れた実例も含まれています。

### Webアプリ（フルスタック） <a id="web-apps-fullstack"></a>
----

### [Ghost](https://github.com/TryGhost/Ghost)

* node, express, ember
* MIT License

> Ghostはブロガー向けのシンプルな公開プラットフォームです。コードにはEmber.jsクライアントとNodeサーバーバックエンドが含まれ、認可、ロール管理、タグ付け、ブログ投稿、データ永続化など、高品質なブログプラットフォームに期待されるほとんどの機能を扱います。Ghostが対応していないのはi18nだけです。Ember／Nodeスタック全体を対象とした統合テストと単体テストによる包括的なテストスイートも備えています。

### [Gitlab](https://github.com/gitlabhq/gitlabhq)

* ruby, rails, coffescript, redis, sidekiq,
* MIT License

> Gitlabはコード共同作業ツールです。10万を超える組織で利用されています。ユーザー管理、ユーザーロール、OAuth、i18n、サードパーティー連携用の多数のモジュール、Gitとの深い統合、Sidekiqを使った大規模な非同期タスクシステムなど、Webアプリで考えられるほぼすべてを備えています。CucumberとRSpecを用いた模範的なテストスイートもあります。

### [Discourse](https://github.com/discourse/discourse)

* ruby, rails, ember
* GPLv2 License

> Discourseはディスカッションプラットフォームであり、現代的なWebフォーラムです。Rails上に構築された高度にモジュール化されたシステムで、Railsアプリケーション内にEmberによるインタラクティブなフロントエンドを構築する好例を含みます。管理画面に加え、Google、Facebook、Twitter、Yahoo、GithubのOAuthによる登録・サインインを備えています。広範なi18n、リアルタイム通知、プラグインエコシステム、SEO最適化に対応し、タブレットとモバイル端末向けにも設計されています。

### [Reddit](https://github.com/reddit)

* python, pylons, node, react, rabbitmq, postgresql
* Common Public Attribution License Version 1.0

> Redditは、Web上の新しい話題や人気の話題を扱うニュースプラットフォームです。Pythonで構築され、RabbitMQ、Memcached、Cassandra、Solr、PostgreSQLなど、多数のサードパーティーサービスと連携しています。大規模なPylonsプロジェクトの好例であり、特に多くの外部サービスと連携するコードが優れています。

### [Taiga](https://github.com/taigaio)

* python3, django, coffeescript, angular
* GNU Affero License

> Taigaはプロジェクト管理ツールです。モジュール型アーキテクチャの見事な実例です。インターフェースは簡潔で洗練され、レスポンシブかつ高速です。Python 3で書かれたモダンなバックエンドコードは、よく設計されたDjangoアプリの優れた例です。pytestを使った統合テストと単体テストによる広範なテストスイートも備えています。


### [Travis CI](https://github.com/travis-ci)

* ruby, rails, sinatra, rabbitmq, ember
* MIT License

> Travis CIは継続的インテグレーションとデプロイのシステムです。優れているのはそのモジュール型アーキテクチャで、この大規模な分散システムの各コンポーネントが主要機能ごとに分割されています。ワーカー管理、Railsバックエンド、Ember.jsフロントエンド、YAML設定パーサーまで、それぞれ独立したリポジトリになっています。

### [Filestash](https://github.com/mickael-kerjean/filestash)

* golang, react
* AGPLv3 License

> Filestashは、FTP、SFTP、S3、Minio、Git、WebDAV、Backblaze、Dropbox、Google Drive、LDAP、CalDAV、CardDAVなど、さまざまなプロトコルとプラットフォームに対応するWebベースのファイルマネージャーです。

### [Dnote](https://github.com/dnote/dnote)

* golang, react, typescript
* GPLv3 License, AGPLv3 License

> Dnoteは、台数無制限のデバイス間でスケーラブルなデータ同期に対応する、自由・オープンソースのコマンドラインノートソフトウェアです。モバイル端末へProgressive Web Appとしてインストールできる、モバイルファーストのWebインターフェースも備えています。

### [Healthchecks](https://github.com/healthchecks/healthchecks)

* python, django, postgresql
* BSD License

> Healthchecksはcronジョブの監視サービスです。cronジョブや定期タスク（「checks」）から送られるHTTPリクエストやメール（「pings」）を待ち受けます。pingが予定時刻までに届かない場合、Healthchecksがアラートを送信します。

## デスクトップアプリ <a id="desktop-apps"></a>
----

### [Blender](http://www.blender.org/download/)

* c, c++, python
* GPLv2 License

> BlenderはMayaや3DS Maxと視覚面で競える3Dグラフィックスソフトウェアです。クロスプラットフォーム3Dツールの素晴らしい完成例で、1994年から開発が続く非常に成熟したプロジェクトです。組み込みPythonスクリプトエンジンとゲームロジックエンジンを備え、3D操作、レンダリング、コンポジットのアルゴリズム実装が豊富に含まれています。


### [Atom](https://github.com/atom/atom)

* coffeescript, electron, node
* MIT License

> Atomはハック可能なテキストエディターです。Electron上に構築され、libchromium、Node.js、Web技術をクロスプラットフォームで動作するバイナリへ統合する好例です。Electronアプリ向けの模範的なテストスイートも含まれています。

### [Daytona](https://github.com/daytonaio/daytona)

* go
* Apache 2.0 License

> Daytonaは徹底してシンプルなオープンソース開発環境マネージャーです。インスタンスのプロビジョニング、設定の解釈と適用、プリビルドの準備、安全なVPN接続の確立、ローカルIDEまたはWeb IDEへの安全な接続、共有や共同作業を容易にする完全修飾ドメイン名の割り当てまで、開発環境のセットアップ工程全体を自動化します。

### モバイルアプリ <a id="mobile-apps"></a>
----

*引き続き探索中*

### ゲーム <a id="games"></a>
----

### [0ad](https://github.com/0ad/0ad)

* c++, python
* GPLv2 License

> 0 A.D.は古代の戦争を題材にしたクロスプラットフォームのリアルタイム戦略ゲームです。AIからグラフィックスまで、実装のあらゆる面が現代的で優れています。組み込みSpiderMonkeyスクリプトエンジンも備え、既存のC++プロジェクトへJavaScriptによるスクリプト機能を追加する優れた実例です。

### [Hedgewars](https://github.com/hedgewars/hw)

* c, c++, pascal, haskell
* GPLv2 License

> HedgewarsはWormsに似た、ハリネズミが戦う2Dターン制戦略ゲームです。グラフィックス、アニメーション、ゲームプレイはあらゆる面でWormsに匹敵します。ゲームサーバーはHaskellの印象的な実用例であり、フロントエンドはQtとバックエンドゲームの間に明快なインターフェースを提供します。

### [Wesnoth](https://github.com/wesnoth/wesnoth)

* c, c++, lua
* GPLv2 License

> The Battle for Wesnothは、ハイファンタジーをテーマにしたターン制戦術戦略ゲームです。シングルプレイヤーとオンラインマルチプレイヤーの戦闘に対応します。GUIとゲームプレイのグラフィックスに加え、マルチプラットフォーム対応（NaCLでもビルド可能）が優れています。組み込みLuaスクリプトエンジン、ダイアログとGUIシステム、C++テストスイート、クロスプラットフォームビルドまで、ゲーム開発者が知りたいほぼあらゆることの、明快でよく書かれた実例を備えています。


## ライセンス <a id="license"></a>

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲において、John Faucettはこの作品に関するすべての著作権および関連する権利または隣接権を放棄しています。
