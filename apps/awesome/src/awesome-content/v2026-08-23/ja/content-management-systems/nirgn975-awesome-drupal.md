---
title: "nirgn975/awesome-drupal"
description: "nirgn975/awesome-drupal の正規スナップショット"
licenseSource: "github-nirgn975-awesome-drupal-readme-md"
---

# Awesome Drupal [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://raw.githubusercontent.com/nirgn975/awesome-drupal/master/icon-drupal.png" align="right" width="90">](https://www.drupal.org)

> [Drupal](https://www.drupal.org)はPHPで記述され、GNU General Public Licenseの下で配布される無料オープンソースCMSです。個人ブログから企業、政治、政府サイトまで、世界中のWebサイトへバックエンドを提供します。

[awesome-php](https://github.com/ziadoz/awesome-php)もおすすめです。


## 目次

- [ツール](#tools)
- [モジュール](#modules)
- [ドキュメント](#documentation)
- [記事](#articles)
- [ディストリビューション](#distributions)
- [書籍](#books)
- [動画](#videos)
- [ポッドキャスト](#podcasts)
- [コミュニティ](#community)
- [ヒント](#tips)


## ツール <a id="tools"></a>

- [Drupal Console](https://drupalconsole.com/) - Drupal CLI。ボイラープレートコードの生成、Drupalとの対話、デバッグを行うツール。
- [DrupalVM](https://www.drupalvm.com/) - Drupal開発環境を素早く簡単に構築し、旧式のMAMP／WAMPベース開発に代わって仮想マシンやDockerコンテナー上のDrupal開発を紹介。
- [Drush](http://www.drush.org/) - Drupal向けコマンドラインシェル兼Unixスクリプトインターフェース。モジュール、テーマ、プロファイルなどのコードを操作する多数の便利なコマンドを標準搭載。update.phpの実行、SQLクエリとDB移行、cron実行やキャッシュ削除などのユーティリティにも対応。
- [Yo Hedley!](https://github.com/Gizra/generator-hedley) - ヘッドレスDrupalバックエンド、Angularアプリクライアント、Behatテストのひな形を生成。
- [DDEV-Local](https://github.com/drud/ddev) - ローカル開発環境を作成・管理するDockerベースのツール。ほかのPHPアプリにも利用可能。[入門ガイド](https://www.drud.com/get-started/)も参照。


## モジュール <a id="modules"></a>

- [Administration menu](https://www.drupal.org/project/admin_menu) - テーマに依存しない管理インターフェース（ナビゲーション、バックエンド）を提供。
- [Administration views](https://www.drupal.org/project/admin_views) - 管理用の概要・一覧ページを実際のViewへ置き換え、操作性を向上。
- [Backup and Migrate](https://www.drupal.org/project/backup_migrate) - DrupalのMySQLデータベース、コード、ファイルをバックアップ・復元し、環境間でサイトを移行。gzip、bzip、zip圧縮と自動スケジュールバックアップに対応。
- [Better Exposed Filters](https://www.drupal.org/project/better_exposed_filters) - DrupalのMySQLデータベース、コード、ファイルをバックアップ・復元し、環境間でサイトを移行。gzip、bzip、zip圧縮と自動スケジュールバックアップに対応。
- [CKEditor - WYSIWYG HTML editor](https://www.drupal.org/project/ckeditor) - Drupalのtextareaフィールドを、一般にWYSIWYGエディターと呼ばれる視覚的HTMLエディターCKEditorへ置き換える。
- [Colorbox](https://www.drupal.org/project/colorbox) - jQuery向けの軽量でカスタマイズ可能なライトボックスプラグインColorboxをDrupalへ統合。
- [Context](https://www.drupal.org/project/context) - サイトの各部分に対する文脈条件と反応を管理。各Contextをサイトの「セクション」と見なせる。
- [Display Suite](https://www.drupal.org/project/ds) - ドラッグ＆ドロップインターフェースでコンテンツ表示を完全に制御。
- [RESTful module](https://www.drupal.org/project/restful) - セキュリティ、性能、操作性のベストプラクティスを使い、RESTful HTTPリクエストからDrupalを操作可能にする。
- [Organic groups module](https://www.drupal.org/project/og) - ユーザーが独自の「グループ」を作成・管理できるようにする。
- [Message](https://www.drupal.org/project/message) - さまざまなユースケースでシステムイベントを記録・表示。
- [Message Notify](https://www.drupal.org/project/message_notify)  – メッセージ生成時に転送。
- [Message Subscribe](https://www.drupal.org/project/message_subscribe) – 特定コンテンツのメッセージ生成時に通知を受け取るよう登録。
- [Module Filter](https://www.drupal.org/project/module_filter) – 大規模なサイトや、新しい各種モジュールを試すだけの開発サイトでも巨大になり得るモジュール一覧ページを扱いやすくする。
- [Entities Diagram Graph](https://www.drupal.org/sandbox/bricel/2654176) - 特定のDrupal 7インストールについて、エンティティ、フィールド、その関係のグラフを生成。
- [Owl Carousel](https://www.drupal.org/project/OwlCarousel) - OwlFonkが構築したOwl Carouselスライダーを統合。
- [csv2sql](https://www.drupal.org/project/csv2sql) - CSVをSQLへ変換し、Drupalインストール内にテーブルを作成。
- [Logs HTTP](https://www.drupal.org/project/logs_http) - tag/httpエンドポイント経由でLogsへJSONイベントを送信。
- [Features](https://www.drupal.org/project/features) - Drupal内のFeatureを取得・管理。Featureは、組み合わせて特定のユースケースを満たすDrupalエンティティの集合。
- [Commerce](https://www.drupal.org/project/commerce) - あらゆる規模のECサイトとアプリケーションを構築。
- [Views](https://www.drupal.org/project/views) - 管理者とサイト設計者がコンテンツ一覧を作成、管理、表示できるようにする。
- [Panels](https://www.drupal.org/project/panels) - サイト管理者が複数用途のカスタムレイアウトを作成できるようにする。
- [Panelizer](https://www.drupal.org/project/panelizer) - サイト管理者が複数用途のカスタムレイアウトを作成できるようにする。
- [Pathauto](https://www.drupal.org/project/pathauto) - ユーザーがパス別名を手動指定せず、ノード、タクソノミー用語、ユーザーなど各種コンテンツのURL／パス別名を自動生成。
- [Ctools](https://www.drupal.org/project/ctools) - 主に開発者体験を向上するAPIとツールのスイート。
- [Search API](https://www.drupal.org/project/search_api) - 任意の検索エンジンを使い、Drupalが認識する任意のエンティティに対する検索を簡単に作成するフレームワーク。
- [Slick](https://www.drupal.org/project/slick) - Ken WheelerのSlick Carouselを活用する強力で高性能なスライドショー／カルーセル。http://kenwheeler.github.io/slick を参照。
- [Token](https://www.drupal.org/project/token) - コアが対応しない追加Token（特にフィールド）と、Tokenを閲覧するUIを提供。
- [Ubercart](https://www.drupal.org/project/ubercart) - Webサイト向けで最も人気のDrupal ECプラットフォーム。オンライン販売開始に必要なものをすべて実装。
- [Rules](https://www.drupal.org/project/rules) - 発生したイベントに基づき条件付きで実行するアクション（リアクティブ規則またはECA規則）をサイト管理者が定義可能にする。
- [Entity API](https://www.drupal.org/project/entity) - DrupalコアのEntity APIを拡張し、エンティティとそのプロパティを統一的に扱えるようにする。
- [Entity cache](https://www.drupal.org/project/entitycache) - コアエンティティをDrupalのCache APIへ保存。
- [elFinder file manager](https://www.drupal.org/project/elfinder) - オープンソースのAJAXファイルマネージャー。
- [IMCE](https://www.drupal.org/project/imce) - 個人ディレクトリと容量制限に対応する画像／ファイルアップローダー兼ブラウザー。
- [Date](https://www.drupal.org/project/date) - 柔軟な日付／時刻フィールド型Date Fieldと、他モジュールが利用できるDate APIを収録。
- [Devel](https://www.drupal.org/project/devel) - モジュール開発者とテーマ開発者向けの便利なモジュールスイート。
- [Migrate](https://www.drupal.org/project/migrate) - ほかの情報源からDrupalへコンテンツを移行する柔軟なフレームワーク。
- [Entity validator](https://www.drupal.org/project/entity_validator) - 扱うオブジェクトを検証するプラグインとメソッドを定義可能にする。
- [Webform](https://www.drupal.org/project/webform) - Drupalでフォームとアンケートを作るモジュール。
- [WYSIWYG](https://www.drupal.org/project/wysiwyg) - クライアント側エディターでコンテンツを編集可能にする。


## ドキュメント <a id="documentation"></a>

- [インストールガイド ](https://www.drupal.org/docs/7/install)
- [サイト構築ガイド](https://www.drupal.org/documentation/build)
- [管理・セキュリティガイド](https://www.drupal.org/docs/7/administering-drupal-7-site)
- [構造ガイド](https://www.drupal.org/docs/7/nodes-content-types-and-fields)
- [多言語ガイド](https://www.drupal.org/docs/7/multilingual)
- [テーマ作成ガイド](https://www.drupal.org/docs/7/theming)
- [モバイルガイド](https://www.drupal.org/docs/7/mobile)
- [APIリファレンス](https://api.drupal.org/api/drupal)
- [開発者向けサンプル](https://www.drupal.org/project/examples)
- [トラブルシューティング](https://www.drupal.org/troubleshooting)
- [The Drupal Cookbook（初心者向け）](https://www.drupal.org/documentation/customization/tutorials/beginners-cookbook)


## 記事 <a id="articles"></a>

- [Let’s Talk about Decoupled Authentication](http://www.gizra.com/content/restful-access-token/)
- [Creating a Dynamic Email Template in Drupal](http://www.gizra.com/content/dynamic-email-template/)
- [Getting started with a Core Initiative](http://www.gizra.com/content/getting-started-with-drupal-core-initiative/)
- [Drupal 8: Migrate Nodes with Attachments Easily](http://www.gizra.com/content/drupal-8-attachment-migration/)
- [Migration Best Practices](http://www.gizra.com/content/migration-best-practices/)
- [Cross-Site Scripting attack detection](http://www.gizra.com/content/xss-attack/)
- [simpleTest with Behat for Drupal 8](http://www.gizra.com/content/simpletest-behat-drupal-8/)
- [Logs, The Easy Way](http://www.gizra.com/content/logs-easy-way/)
- [Todo app with RESTful backend](http://www.gizra.com/content/todo-restful-backend/)
- [Message-subscribe - A New Subscription System](http://www.gizra.com/content/message-subscribe-new-subscription-system/)
- [What is Message module, and its new features](http://www.gizra.com/content/what-message-module-and-its-new-features/)
- [Message notify - Multilingual email notifications](http://www.gizra.com/content/message-notify-multilingual-email-notifications/)
- [Data Migration - part 1](http://www.gizra.com/content/data-migration-part-1/)
- [Data Migration - part 2](http://www.gizra.com/content/data-migration-part-2/)
- [How to install Drupal using Composer](http://whaaat.com/installing-drush-9-using-composer)
- [Using composer to set up Drupal 8](https://www.lullabot.com/articles/goodbye-drush-make-hello-composer)
- [Drupal Headless Architecture with Inferno.js [Live Demo]](https://snipcart.com/blog/drupal-headless-architecture-tutorial)


## ディストリビューション <a id="distributions"></a>

- [Commerce kickstart](https://www.drupal.org/project/commerce_kickstart) - Drupal Commerceを最短で稼働させる方法。
- [OpenScholar](https://www.drupal.org/project/openscholar) - 組織内の全Webサイトを最も簡単に運用。
- [Open Atrium](https://www.drupal.org/project/openatrium) - Phase2 Technologyが管理するDrupalディストリビューション。便利な共同作業機能を通じ、同僚と安心して連携できる。
- [OpenPublic](https://www.drupal.org/project/openpublic) - 政府・公共政策組織では、公共部門のセキュリティ、アクセシビリティ、柔軟性の要件に合わせて構築されて初めてオープンソースが機能する。
- [OpenPublish](https://www.drupal.org/project/openpublish) - オンラインニュース業界向けに設計されたDrupal 7パッケージ済みディストリビューション。雑誌、新聞、学術誌、業界誌、放送、通信社、マルチメディア、会員向け出版物など各種メディアサイトで利用される。

## 書籍 <a id="books"></a>

- [Drupal 7 The Essentials - Johan Falk](https://archive.org/details/Drupal7TheEssentials)


## 動画 <a id="videos"></a>

- [Drupal 8 Basics - LevelUpTuts](https://www.youtube.com/playlist?list=PLLnpHn493BHE9mfp6z5--UowO-6SOzcuI)
- [Drupal 7 Tutorials - LevelUpTuts](https://www.youtube.com/playlist?list=PL15BE2E8313A4E809)
- [Decoupled Drupal: When, Why, and How](https://www.youtube.com/watch?v=bLWa3SbEEa8)
- [Building Modern APIs with RESTful](https://www.youtube.com/playlist?list=PLZOQ_ZMpYrZv8_c7jd_CkO_93-DnyVFY5)
- [DrupalCon Portland 2013 - Organic Groups \\ Message](https://www.youtube.com/watch?v=XglUUroifsg)
- [Drupalize Me](https://drupalize.me)


## ポッドキャスト <a id="podcasts"></a>

- [Lullabot Podcast](https://www.lullabot.com/podcasts)
- [DrupalEasy Podcast](https://www.drupaleasy.com/podcast)
- [Talking Drupal](http://www.talkingdrupal.com)
- [Acquia Engage](https://dev.acquia.com/learn?type_1=podcast)


## コミュニティ <a id="community"></a>

- [Reddit](https://www.reddit.com/r/drupal/)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/drupal)
- [Twitterの`@drupal`](https://twitter.com/drupal)
- [Freenodeの`#drupal`](http://webchat.freenode.net/?channels=drupal)
- [Freenodeの`#drupal-contribute`](http://webchat.freenode.net/?channels=drupal-contribute)
- [Freenodeの`#drupal-support`](http://webchat.freenode.net/?channels=drupal-support)
- [Drupal Israel Meetup Group](https://www.meetup.com/Drupal-Israel/) *（ヘブライ語）*
- [Drupal NYC Meetup Group](https://www.meetup.com/drupalnyc/)


## ヒント <a id="tips"></a>

- [Solr Script](https://github.com/RoySegall/solr-script) - Apache Solrをインストールする便利なスクリプト。
- [Ubuntu development environment setup](https://github.com/Gizra/KnowledgeBase/wiki/Ubuntu-and-development-environment-setup) - PHP・Drupal開発に使えるようUbuntuを構成する手順。
- [MacOS: New Machine configuration](https://github.com/Gizra/KnowledgeBase/wiki/MacOS:-New-Machine) - 開発向けにmacOSを構成するファイルとスクリプト。


## コントリビュート <a id="contribute"></a>

コントリビューションを歓迎します。まず[コントリビューションガイドライン](https://github.com/nirgn975/awesome-drupal/blob/8327cca5c8a5016acdb5f934efa5b680d8e9f38f/contributing.md)をお読みください。


## ライセンス <a id="license"></a>

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる限り、[Nir Galon](http://nirgn.com)は本作品に関するすべての著作権および関連する権利または隣接権を放棄しています。
