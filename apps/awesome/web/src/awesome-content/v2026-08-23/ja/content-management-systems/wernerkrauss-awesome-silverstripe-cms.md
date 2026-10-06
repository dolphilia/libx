---
title: "Awesome Silverstripe CMS"
description: "Silverstripe CMSのドキュメント、チュートリアル、コミュニティ、モジュール、開発ツール、IDEプラグイン、DockerとVagrantの開発環境。"
licenseSource: "github-wernerkrauss-awesome-silverstripe-cms-readme-md"
---

# Awesome Silverstripe CMS

[Silverstripe CMS](https://www.silverstripe.org)は、ウェブアプリケーションを迅速に開発するための、オープンソースのPHP MVCフレームワークです。通常のCMSとしても、GraphQLや独自APIで問い合わせるヘッドレスCMSとしても利用でき、Active Recordパターンに従って、プロジェクト固有のデータモデルで組み込み機能を拡張できます。このリストでは、ドキュメント、チュートリアル、コミュニティ、モジュール、開発ツール、IDEプラグイン、DockerとVagrantの開発環境を探せます。

古い項目は[アーカイブ](https://github.com/wernerkrauss/awesome-silverstripe-cms/blob/8f378e0d9585d40573bc1d7ef65dcabadba265f1/ARCHIVE.md)に掲載されています。

## <a id="resources"></a>リソース
### <a id="official-websites"></a>公式 Web サイト
- [www.silverstripe.org](https://www.silverstripe.org) - フレームワークとCMS。
- [www.silverstripe.com](https://www.silverstripe.com) - CMSを開発する企業Silverstripe Ltd.。
- [www.s2-hub.com](https://www.s2-hub.com) - 欧州Silverstripe協会S2Hub。

### <a id="documentation--tutorials"></a>ドキュメント・チュートリアル
- [APIドキュメント](http://api.silverstripe.org/) - 自動生成されたAPIドキュメント。
- [技術ドキュメント](http://doc.silverstripe.org/framework/en/) - 開発者向け。中核となるすべての概念を説明する。
- [CMSの使い方](http://userhelp.silverstripe.org/) - 主要機能の使い方を説明する、エンドユーザー向けドキュメント。
- [Silverstripe Lessons](https://www.silverstripe.org/learn/lessons/) - 実際のプロジェクトを通じて、Silverstripeサイトを段階的に構築する方法を学ぶ。
- [フォントリファレンス](https://silverstripe-fonts.dorset-digital.net/) - 管理画面向けの組み込みアイコンフォント。
- [TinyMCE Configuration Examples For SS3](https://github.com/jonom/silverstripe-tinytidy) - HTMLEditorFieldの設定例。

### <a id="blogs"></a>ブログ
- [Silverstripe公式ブログ](https://www.silverstripe.org/blog/) - Silverstripe CMSに関するニュース。
- [SilverStrip.es](http://www.silverstrip.es) - Silverstripe開発者による有用な知見。

### <a id="video-channels"></a>動画チャンネル
- [StripeCon公式YouTubeチャンネル](https://www.youtube.com/channel/UC38vU3H_UrdGFnc3vTJiORA) - 各StripeConカンファレンスの講演。
- [Silverstripe公式Vimeoチャンネル](https://vimeo.com/silverstripe) - ミートアップやカンファレンスの動画。

### <a id="community"></a>コミュニティ
- [Stack Overflow](https://stackoverflow.com/questions/tagged/silverstripe) - Stack OverflowのSilverstripe関連の質問。
- [Silverstripe User Slack](https://silverstripe-users.slack.com/) - 相談や他の開発者との議論のためのコミュニティSlackチャンネル。
  - [Silverstripe User Slackへの参加案内](https://www.silverstripe.org/community/slack-signup)
- [フォーラム](https://forum.silverstripe.org/) - 質問や議論のための公式フォーラム。

### <a id="conferences--meetups"></a><a id="会議ミートアップ"></a>カンファレンス・ミートアップ
- [European Silverstripe Conference](https://www.stripecon.eu) - 原文では毎年異なる国で開催されるカンファレンスと説明されている。
- [ミートアップ](https://www.meetup.com/topics/silverstripe/all/) - Silverstripe関連のミートアップ一覧。

## <a id="very-useful-modules"></a><a id="非常に便利なモジュール"></a>モジュール
### <a id="module-listings"></a>モジュール一覧
- [SSMods：詳細なモジュール検索](http://ssmods.com) - 代替のモジュール検索。
- [ダウンロード数の多いモジュール](https://addons.silverstripe.org/add-ons?sort=relative) - 最も多くダウンロードされているモジュールを表示する。
- [PackagistのSilverstripe Recipes](https://packagist.org/packages/silverstripe/recipe-plugin/dependents) - さまざまな種類のプロジェクト向けに設定済みのモジュールセット。

### <a id="general-modules"></a>一般モジュール
- [Multiuser editing alert](https://github.com/silverstripe/silverstripe-multiuser-editing-alert) - 複数人が同じページを編集しているとき、Silverstripe CMSのユーザーへ警告する。

### <a id="i18n-internationalisation"></a>I18N（国際化）
- [Fluent](https://github.com/tractorcow-farm/silverstripe-fluent) - 別々のサイトツリーを管理する必要がない、Silverstripe向け多言語翻訳モジュール。
- [Autotranslate](https://github.com/bratiask/silverstripe-autotranslate) - Google Translate APIを使ってフィールドの翻訳を自動作成する。

### <a id="site-search"></a>サイト検索
- [Silverstripe Searchable](https://github.com/i-lateral/silverstripe-searchable) - Silverstripe ORMを使って、より複雑なサイト検索を追加する。複数の検索オブジェクトにまたがる検索結果の専用テンプレートを備える。
- [Searchable DataObjects](https://github.com/g4b0/silverstripe-searchable-dataobjects) - 単一言語サイトに適したMySQLベースの検索モジュール。原文では高速でシンプルと説明されている。
- [Fulltext Search](https://github.com/silverstripe/silverstripe-fulltextsearch) - Solr 4（EOL）向けの本格的な検索インターフェース。
- [Fulltext Search Local Solr](https://addons.silverstripe.org/add-ons/silverstripe/fulltextsearch-localsolr) - ローカル開発用に容易にインストールできるSolr 4（EOL）インスタンス。
- [Solr search](https://github.com/firesphere/silverstripe-solr-search) - 原文ではSolr 9までの版に対応すると説明される、Solr検索インターフェース。「Fulltext Search」モジュールからの移行や、subsite、fluentなどのサブモジュールを備える。

### <a id="development-helpers"></a>開発支援
- [Debugbar](https://github.com/lekoala/silverstripe-debugbar/) - ブラウザーにデバッグ統計を表示する。
- [IdeAnnotator](https://github.com/silverleague/silverstripe-ideannotator) - dev/build時にクラスのアノテーションを自動生成する。
- [Populate](https://github.com/dnadesign/silverstripe-populate) - YAMLファイルを使ってデータベースへデータを追加する。
- [Mock DataObjects](https://github.com/unclecheese/silverstripe-mock-dataobjects) - DataObjectsに、生成されたダミーデータを自動設定できるようにする。
- [Version Truncator](https://github.com/axllent/silverstripe-version-truncator) - SiteTreeページの古い版を自動削除する。
- [UserSwitcher](https://github.com/sheadawson/silverstripe-userswitcher) - 任意のユーザーとして素早くログインできる小さなフォームを、フロントエンドと管理画面の両方へ追加する。
- [Masquerade](https://github.com/dhensby/silverstripe-masquerade) - 管理者が別の「Member」として「ログイン」できるようにする。デバッグやリモートサポートに役立つ。

### <a id="fancy-form-fields"></a>高度なフォームフィールド
- [Markdown Field](https://github.com/Silverstripers/markdownfield) - TinyMCEを使うHTMLEditorFieldsを置き換えて、Markdown構文を使えるようにする。
- [Code Editor Field](https://github.com/nathancox/silverstripe-codeeditorfield) - CMSでYAMLやHTMLを扱うための、構文ハイライト付きテキストエリアフィールド。

## <a id="tools"></a>ツール
### <a id="management"></a>管理
- [SSPak](https://github.com/silverstripe/sspak) - Silverstripe環境のデータベースとアセットのバンドルを管理するツール。
- [SSPy](https://github.com/Firesphere/silverstripe-sspy) - 2GB超のアセットを扱える、SSPakのPython版。

### <a id="ide-plugins"></a>IDE プラグイン
- [VSCode Silverstripe](https://marketplace.visualstudio.com/items?itemName=adrian.silverstripe) - VSCodeでSilverstripeテンプレートファイルの構文をハイライトする。
- [Jetbrains / PHPStorm Silverstripe Template Language Support](https://plugins.jetbrains.com/plugin/17014-silverstripe-template-language-support) - Silverstripeテンプレートファイルの構文ハイライト。
- [PHPStorm / Webstorm Live Templates](https://github.com/northcreation-agency/silverstripe-php-web-storm-live-templates) - Silverstripe固有の各種コードスニペットを追加するショートカット。

## <a id="virtualisation"></a>仮想化

### Docker
- [ddevのセットアップ](https://firesphere.dev/articles/ddevelopment-environment/) - Silverstripe CMSでddevを使うための設定方法。
- [brettt89/silverstripe-web](https://hub.docker.com/r/brettt89/silverstripe-web) - Silverstripeを使うためのPHPモジュールを事前インストールした、ApacheとPHPのDockerイメージ。
- [brettt89/sspak](https://hub.docker.com/r/brettt89/sspak) - SSPakのDockerイメージ。
- [brettt89/silverstripe-solr-cwp](https://hub.docker.com/r/brettt89/silverstripe-solr-cwp) - CWP SolrのDockerイメージ。

### Vagrant
固定原文では、LaravelのHomesteadボックスのような公式のSilverstripe用Vagrantボックスはないと説明されています。代替となるVagrantボックスとテンプレートを以下に掲載します。
- [Twisted Bytes](https://www.twistedbytes.nl/en/blog/php-vagrant-box/) - 複数のPHPバージョン、MariaDBまたはPostgreSQL、メールキャッチャーなどを備えるVagrantボックス。
- [Twisted Bytes Box Templates](https://derkbox.com) - Twisted BytesのVagrantボックスを使う、さまざまな開発シナリオ向けのテンプレート。
- [Laravel Homestead](https://github.com/laravel/homestead) - ローカル開発向けにパッケージ化されたボックス。
- [Scotchbox](https://box.scotch.io) - ローカル開発向けのLAMP/LEMPスタック。原文では広く使われていると説明されている。
- [Zauberfisch Vagrant Boxes](https://github.com/Zauberfisch/vagrant-boxes) - SS3とSS4向けに設定済みのVagrantボックス。
