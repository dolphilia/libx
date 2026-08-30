---
title: "Awesome Silverstripe CMS"
description: "Silverstripe CMSを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-wernerkrauss-awesome-silverstripe-cms-readme-md"
---

# Awesome Silverstripe CMS

Silverstripe CMSを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次





- [リソース](#resources)
  - [公式 Web サイト](#official-websites)
  - [ドキュメント・チュートリアル](#documentation--tutorials)
  - [ブログ](#blogs)
  - [動画チャンネル](#video-channels)
  - [コミュニティ](#community)
  - [会議・ミートアップ](#conferences--meetups)
- [非常に便利なモジュール](#very-useful-modules)
  - [モジュール一覧](#module-listings)
  - [一般モジュール](#general-modules)
  - [I18N（国際化）](#i18n-internationalisation)
  - [サイト検索](#site-search)
  - [開発支援](#development-helpers)
  - [高度なフォームフィールド](#fancy-form-fields)
- [ツール](#tools)
  - [管理](#management)
  - [IDE プラグイン](#ide-plugins)
  - [仮想化](#virtualisation)



## リソース
### 公式 Web サイト

- [www.silverstripe.org](https://www.silverstripe.org) - フレームワークと CMS。
- [www.silverstripe.com](https://www.silverstripe.com) - CMS の運営企業 Silverstripe Ltd.。
- [www.s2-hub.com](https://www.s2-hub.com) - 欧州 Silverstripe 協会 S2Hub。

### ドキュメント・チュートリアル
- [API Docs](http://api.silverstripe.org/) - 自動生成 API ドキュメント。
- [Technical Documentation](http://doc.silverstripe.org/framework/en/) - 開発者向け。すべてのコア概念を説明する。
- [Using the CMS](http://userhelp.silverstripe.org/) - コア機能の使い方を扱うエンドユーザー向けドキュメント。
- [Silverstripe Lessons](https://www.silverstripe.org/learn/lessons/) - 実際のプロジェクトで Silverstripe サイトを段階的に構築する方法を学ぶ。
- [Font reference](https://silverstripe-fonts.dorset-digital.net/) - バックエンド用に組み込まれたアイコンフォント。
- [TinyMCE Configuration Examples For SS3](https://github.com/jonom/silverstripe-tinytidy) - HTMLEditorField 向け設定例。


### ブログ
- [Official Silverstripe Blog](https://www.silverstripe.org/blog/) - Silverstripe CMS に関するニュース。
- [SilverStrip.es](http://www.silverstrip.es) - Silverstripe 開発者による有用な発見。

### 動画チャンネル
- [Official StripeCon YouTube Channel](https://www.youtube.com/channel/UC38vU3H_UrdGFnc3vTJiORA) - さまざまな StripeCon 会議の講演。
- [Official Silverstripe Vimeo Channel](https://vimeo.com/silverstripe) - ミートアップ・会議からのさまざまな動画。

### コミュニティ
- [Stack Overflow](https://stackoverflow.com/questions/tagged/silverstripe) - Stack Overflow 上の Silverstripe 関連質問。
- [Silverstripe User Slack](https://silverstripe-users.slack.com/) - 即時の支援や他開発者との交流のためのコミュニティ Slack チャンネル。
  - [Invitation to Silverstripe User Slack](https://www.silverstripe.org/community/slack-signup)
- [Forum](https://forum.silverstripe.org/) - 質問・議論のための公式フォーラム。

### 会議・ミートアップ
- [European Silverstripe Conference](https://www.stripecon.eu) - 毎年異なる国で開催。
- [Meetups](https://www.meetup.com/topics/silverstripe/all/) - Silverstripe 関連ミートアップの一覧。

## 非常に便利なモジュール
### モジュール一覧
- [SSMods: Detailed Module Search](http://ssmods.com) - 代替モジュール検索。
- [Most Used Modules](https://addons.silverstripe.org/add-ons?sort=relative) - ダウンロード数の多いモジュールを表示する。
- [Silverstripe Recipes on Packagist](https://packagist.org/packages/silverstripe/recipe-plugin/dependents) - さまざまな種類のプロジェクト向けに事前設定されたモジュールセット。

### 一般モジュール
- [Multiuser editing alert](https://github.com/silverstripe/silverstripe-multiuser-editing-alert) - 複数人が同じページを編集しているときに Silverstripe CMS のユーザーへ警告する。

### I18N（国際化）
- [Fluent](https://github.com/tractorcow-farm/silverstripe-fluent) - 別々のサイトツリーを管理せずに使える Silverstripe 向け多言語翻訳モジュール。
- [Autotranslate](https://github.com/bratiask/silverstripe-autotranslate) - Google Translate API を使いフィールドの自動翻訳を作成する。

### サイト検索 
- [Silverstripe Searchable](https://github.com/i-lateral/silverstripe-searchable) - Silverstripe ORM を使ったより複雑なサイト検索を追加する。複数検索オブジェクトにまたがる検索結果用の専用テンプレートを備える。
- [Searchable DataObjects](https://github.com/g4b0/silverstripe-searchable-dataobjects) - 高速・シンプルな MySQL ベース検索。単一言語サイトに便利。
- [Fulltext Search](https://github.com/silverstripe/silverstripe-fulltextsearch) - Solr4（EOL）向けフル機能検索インターフェース。
- [Fulltext Search Local Solr](https://addons.silverstripe.org/add-ons/silverstripe/fulltextsearch-localsolr) - ローカル開発向けに容易にインストールできる Solr4（EOL）インスタンス。
- [Solr search](https://github.com/firesphere/silverstripe-solr-search) - 最新 Solr（9）版までサポートする Solr 検索インターフェース。「Fulltext Search」モジュールからの移行、subsite、fluent などのサブモジュールを備える。

### 開発支援
- [Debugbar](https://github.com/lekoala/silverstripe-debugbar/) - ブラウザーにデバッグ統計を表示する。
- [IdeAnnotator](https://github.com/silverleague/silverstripe-ideannotator) - dev/build 時にクラスアノテーションを自動生成する。
- [Populate](https://github.com/dnadesign/silverstripe-populate) - YAML ファイルを通してデータベースを投入する。
- [Mock DataObjects](https://github.com/unclecheese/silverstripe-mock-dataobjects) - DataObjects に偽データを使った知的な自己投入を可能にする。
- [Version Truncator](https://github.com/axllent/silverstripe-version-truncator) - 古い SiteTree ページバージョンを自動削除する。
- [UserSwitcher](https://github.com/sheadawson/silverstripe-userswitcher) - 任意ユーザーとして素早くログインするための小さなフォームをフロント・バックエンド両方に追加する。
- [Masquerade](https://github.com/dhensby/silverstripe-masquerade) - 管理者が別の「Member」として「ログイン」できる。デバッグ・リモートサポートに有用。

### 高度なフォームフィールド
- [Markdown Field](https://github.com/Silverstripers/markdownfield) - Markdown 構文を利用できるよう HTMLEditorFields（TinyMCE 使用）を置き換えられる。
- [Code Editor Field](https://github.com/nathancox/silverstripe-codeeditorfield) - 構文強調テキストエリアフィールドを提供。CMS ベースの YAML・HTML に最適。

## ツール
### 管理
- [SSPak](https://github.com/silverstripe/sspak) - Silverstripe 環境の db/assets バンドルを管理するツール。
- [SSPy](https://github.com/Firesphere/silverstripe-sspy) - 2GB 超のアセットを扱える SSPak の Python 版。

### IDE プラグイン
- [VSCode Silverstripe](https://marketplace.visualstudio.com/items?itemName=adrian.silverstripe) - VSCode で Silverstripe テンプレートファイルを構文強調する。
- [Jetbrains / PHPStorm Silverstripe Template Language Support](https://plugins.jetbrains.com/plugin/17014-silverstripe-template-language-support) - Silverstripe テンプレートファイルの構文強調。
- [PHPStorm / Webstorm Live Templates](https://github.com/northcreation-agency/silverstripe-php-web-storm-live-templates) - さまざまな Silverstripe 固有コードスニペットを追加するショートカット。

### 仮想化

#### Docker
- [ddev setup](https://firesphere.dev/articles/ddevelopment-environment/) - Silverstripe CMS で ddev を使うための設定方法。
- [brettt89/silverstripe-web](https://hub.docker.com/r/brettt89/silverstripe-web) - Silverstripe 対応の PHP モジュールを事前インストールした Apache + PHP Docker イメージ。
- [brettt89/sspak](https://hub.docker.com/r/brettt89/sspak) - SSPak Docker イメージ。
- [brettt89/silverstripe-solr-cwp](https://hub.docker.com/r/brettt89/silverstripe-solr-cwp) - CWP Solr Docker イメージ。

#### Vagrant
Laravel の homestead box のような公式ボックスはありません。ただし Vagrant 向けには利用できる良いボックスがいくつかあります:
- [Twisted Bytes](https://www.twistedbytes.nl/en/blog/php-vagrant-box/) - 複数の PHP バージョン、MariaDB・PostgreSQL、メールキャッチャーなどを備える便利な Vagrant ボックス。
- [Twisted Bytes Box Templates](https://derkbox.com) - Twisted Bytes Vagrant ボックスを使うさまざまな開発シナリオ向け便利なテンプレート。
- [Laravel Homestead](https://github.com/laravel/homestead) - ローカル開発向け事前パッケージ化ボックス。
- [Scotchbox](https://box.scotch.io) - ローカル開発向け人気 LAMP/LEMP スタック。
- [Zauberfisch Vagrant Boxes](https://github.com/Zauberfisch/vagrant-boxes) - SS3・SS4 向け事前設定済み Vagrant ボックス。
