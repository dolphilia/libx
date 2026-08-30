---
title: "schlessera/awesome-wp-cli"
description: "schlessera/awesome-wp-cli の定本スナップショット"
licenseSource: "github-schlessera-awesome-wp-cli-readme-md"
---


# Awesome WP-CLI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![awesome-lint](https://github.com/schlessera/awesome-wp-cli/workflows/awesome-lint/badge.svg)](https://github.com/schlessera/awesome-wp-cli/actions?query=workflow%3Aawesome-lint) [<img src="assets/wp-cli-bw-trans-filled-tight@311x160.png" alt="WP-CLI Logo" align="right" height="80">](https://wp-cli.org/)


[WP-CLI](https://wp-cli.org/) は WordPress のコマンドラインインターフェースです。WordPress 管理ダッシュボードの完全な代替手段を提供し、多くの場合その機能を上回るか、新しいユースケースを可能にします。また、Composer パッケージにバンドルされる、または WordPress プラグインやテーマへ直接統合される、豊富なサードパーティーコマンドのエコシステムも備えています。

## 目次

- [公式リンク](#official-links)
- [サードパーティーパッケージ](#third-party-packages)
	- [パッケージ発見](#package-discovery)
	- [注目のパッケージ](#notable-packages)
- [チュートリアルとガイド](#tutorials--guides)
- [貢献](#contribute)

## 公式リンク

公式 WP-CLI チームが直接管理する関連情報すべて。


- [wp-cli.org](https://wp-cli.org/) - WP-CLI プロジェクトのホームページ。
- [WP-CLI handbook](https://make.wordpress.org/cli/handbook/) - WP-CLI の使用方法または拡張方法に関するガイド。
- [WP-CLI command reference](https://developer.wordpress.org/cli/commands/) - すべての公式 WP-CLI コマンドのリファレンスドキュメント。
- [Make WordPress.org - CLI](https://make.wordpress.org/cli/) - WP-CLI へ貢献するための主な入口。
  - [Contributing guide](https://make.wordpress.org/cli/handbook/contributing/) - ツールまたはそのインフラストラクチャへ貢献するために知るべきすべて。
  - [Official MakeWP Slack](https://make.wordpress.org/chat/) - WordPress とそのチームへの国際的な貢献すべてについて議論する公式 Slack チーム。
    - [#cli channel](http://wordpress.slack.com/messages/cli/) - WP-CLI と WordPress CLI チームの公式サポートチャンネル。
  - [Good first issues](https://make.wordpress.org/cli/good-first-issues/) - 範囲と複雑さが限定された issue の一覧。
- [WP-CLI GitHub organization](https://github.com/wp-cli) - WP-CLI ソースコードの正規ホーム。
  - [WP-CLI framework repository](https://github.com/wp-cli/wp-cli) - すべてのコマンドを支える WP-CLI フレームワークのソースコード。
  - [WP-CLI bundle repository](https://github.com/wp-cli/wp-cli-bundle) - WP-CLI の「バイナリー」とその組み立て方法のソース。
  - [WP-CLI tests repository](https://github.com/wp-cli/wp-cli-tests) - すべての WP-CLI リポジトリで使われるテストフレームワーク。

## サードパーティーパッケージ

非公式のサードパーティーパッケージ。

### パッケージ発見

使用できるサードパーティーパッケージを検索する方法。

- [Packagist.org search by WP-CLI package type](https://packagist.org/?type=wp-cli-package) - タイプ `wp-cli-package` でフィルターした Composer パッケージ。
- [GitHub.com search for WP-CLI integrations](https://github.com/search?q=WP_CLI%3A%3Aadd_command%28+NOT+Akismet_CLI+NOT+elementor+NOT+WordCamp_CLI_Miscellaneous+NOT+W3TotalCache_Command+path%3A*.php+language%3APHP+-org%3Awp-cli+-path%3Avendor+-path%3Awp-content+-path%3Apublic+-path%3Adeployer+-path%3Aweb+-path%3Asrc%2Fvendor+-path%3Aapp+-path%3Awordpress+-path%3Aentity-command.php+-path%3Aclass-wc-cli.php+-path%3Awp-cli-bp.php+NOT+is%3Afork+-path%3Aextension-command.php+-path%3Acron-command.php+-path%3Awp-seo-main.php+-path%3Aplugins+-path%3Adata+-path%3Abackup+-path%3Ademo+-path%3Awordcamp.org+-path%3Awordpress.org+-path%3Alanguage-command.php+-path%3Aredirection-cli.php+-path%3Athemes+-path%3Alibrary+-path%3Aeval-command+-path%3Arole-command+-path%3Awidget-command+-path%3Acache-command.php+-path%3Awp-app+-path%3Apublic_html+-path%3Aqueue.php+-path%3AmyWeb+-path%3Adocroot+-path%3Awebsite&type=code) - `WP_CLI::add_command()` を使うリポジトリ向けに大幅に事前フィルターした検索。

### 注目のパッケージ

一般によく役立つサードパーティーパッケージ。

- [Yoast/wp-cli-faker](https://github.com/Yoast/wp-cli-faker) - テスト目的で、偽の WordPress および WooCommerce コンテンツを生成します。
- [aaemnnosttv/wp-cli-login-command](https://github.com/aaemnnosttv/wp-cli-login-command) - セキュアなパスワードレスのマジックリンクで WordPress へログインします。
- [schlessera/wp-cli-psysh](https://github.com/schlessera/wp-cli-psysh) - WP-CLI shell の標準 REPL を [PsySH](http://psysh.org/) へ置き換えます。
- [php-stubs/wp-cli-stubs](https://github.com/php-stubs/wp-cli-stubs) - 静的解析のための WP-CLI 関数・クラス宣言スタブ。

## チュートリアルとガイド

WP-CLI を最大限に活用する方法に関するウェブサイト、電子書籍、PDF、トーク、スライドショー。

- [An Introduction to WP-CLI](https://pascalbirchler.com/an-introduction-to-wp-cli/) - WP-CLI の主な概念と人気のユースケースを紹介する入門記事。
- [Controlling WordPress through the Command Line](https://wordpress.tv/2017/05/22/alain-schlesser-controlling-wordpress-through-the-command-line-introduction-to-wp-cli/) - コンソールを一度も使ったことがない人を対象に、コマンドラインの基礎を説明する入門トーク。
- [WP Bullet WP-CLI Guides](https://guides.wp-bullet.com/category/wp-cli/) - 特定のユースケースを解決するスニペットベースのガイド。
- [Siteground Webinar: Learn How WP-CLI Can Make Your Life Easier](https://www.youtube.com/watch?v=DlxbRYpZdQg) - WP-CLI でワークフローを改善するための実践例。
- [CaptainCore Cookbook](https://captaincore.io/cookbook/) - WordPress メンテナンスを自動化する WP-CLI コマンドと bash スクリプトのコレクション。

## 貢献

貢献を歓迎します。まず [contribution guidelines](https://github.com/schlessera/awesome-wp-cli/blob/f39a7973045c5d916f2a92658bf7ec7c05b81973/contributing.md) をお読みください。
