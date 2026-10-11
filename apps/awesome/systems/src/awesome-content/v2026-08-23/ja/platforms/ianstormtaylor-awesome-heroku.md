---
title: Awesome Heroku
description: Herokuのデプロイ、設計、データベース、スケーリング、会社の歴史、移行先を扱う固定原文の資料。
licenseSource: github-ianstormtaylor-awesome-heroku-readme-md
documentContext:
  - kind: source
    html: >-
      <p>このリストは<a
      href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>で提供されています。法律で認められる範囲で、<a
      href="http://ianstormtaylor.com">Ian Storm
      Taylor</a>はこの作品に関するすべての著作権および関連する権利または隣接する権利を放棄しています。</p>
---
# Awesome Heroku<a id="-ライセンス"></a>

Herokuのデプロイと設計のガイド、開発・データベースの資料、スケーリング用ツール、会社の歴史、移行先の候補を探せます。製品名、ベータ版の表記、サービスの説明は固定原文当時の記載です。

## 分析 <a id="-分析"></a>

- ツール: [Metabase](http://www.metabase.com/docs/v0.13.3/operations-guide/running-metabase-on-heroku.html) — Herokuへ直接デプロイできるベータ版アプリ。固定原文の説明では「Metadata」と表記。

## アーキテクチャ <a id="-アーキテクチャ"></a>

- 記事: [Exploring Microservices Architecure on Heroku](http://blog.codeship.com/exploring-microservices-architecture-on-heroku/) — マイクロサービスに必要な多くのツールをHerokuが不要にする理由を解説。
- 記事: [Heroku and SOA](https://www.rdegges.com/2014/heroku-and-soa/) — Herokuがサービス指向アーキテクチャに適する理由を解説。
- 記事: [Split Frontend from Backend on Heroku with npm and NodeJS](https://medium.com/@spygi/scalable-cost-effective-web-architectures-for-heroku-eb8f1f55a4b6) — npmとNodeJSを使い、マイクロサービスのウェブアプリをHerokuへデプロイする実践ガイド。

## ブログ <a id="-ブログ"></a>

- ブログ: [Heroku Blog](https://blog.heroku.com) — Herokuの公式ブログ。

## デプロイ <a id="-デプロイ"></a>

- 公式資料: [Preboot](https://devcenter.heroku.com/articles/preboot) — Prebootによる無停止デプロイの方法と、正しく実現する際の難しさを解説。
- 記事: [Automating our Heroku deployments from Jenkins](https://www.paulfurley.com/automating-heroku-deployments-from-jenkins/) — メンテナンスモード、本番データベースのステージングへのコピー、ステージングでのマイグレーションなど、デプロイ手順の自動化を解説。
- 質問と回答: [How do you ignore files when deploying to Heroku?](http://stackoverflow.com/questions/12523435/how-do-i-ignore-folders-and-files-when-pushing-to-heroku-with-a-rails-app) — `.gitignore`のような機能を使い、デプロイ時にファイルを除外する方法への回答。
- 記事: [Six Tips for Mastering your Procfile](https://medium.com/@adam_41691/six-tips-for-mastering-your-procfile-64ea1207b779) — Herokuプロセスの実行方法を改善するヒント。
- 記事: [Deploying Django to Heroku With Docker](https://testdriven.io/blog/deploying-django-to-heroku-with-docker/) — Heroku Container Runtime経由で、Dockerを使ってDjangoアプリをデプロイする方法を解説。

## 開発 <a id="-開発"></a>

- 公式資料: [Managing Multiple Environments for an App](https://devcenter.heroku.com/articles/multiple-environments) — アプリの各環境を構成するさまざまな要素の管理方法を学ぶ入門資料。

## ドメイン <a id="-ドメイン"></a>

- 記事: [Configuring CloudFlare DNS for a Heroku app](http://www.higherorderheroku.com/articles/cloudflare-dns-heroku/) — CloudFlareをDNSプロバイダーとして使う手順。
- 記事: [Hosting multiple Heroku apps on a single domain](https://pilot.co/blog/hosting-multiple-heroku-apps-on-a-single-domain/) — 複数のHerokuアプリケーションで同じドメインを共有する方法を解説。
- 質問と回答: [How do you host multiple Heroku apps on a single domain?](http://stackoverflow.com/questions/19119164/multiple-heroku-apps-on-a-single-domain) — サブドメインではなく異なるパスで複数のHerokuアプリを配信する方法について、複数の回答があるStack Overflowの質問。

## 全般 <a id="-全般"></a>

- 書籍: [The Heroku Hacker's Guide](http://www.theherokuhackersguide.com/) — Herokuプロジェクトの保守とスケーリングの基礎を扱う電子書籍。
- 書籍: [Heroku Cookbook](http://www.amazon.com/Heroku-Cookbook-Mike-Coutermarsh/dp/1782177949) — Heroku上の本番ウェブアプリケーションを管理・スケーリングするための段階的なレシピ。

## 会社と開発文化 <a id="-メタ情報"></a>

- 公式資料: [The big kickoff](https://blog.heroku.com/archives/2007/10/30/the_big_kickoff) — Heroku最初のブログ記事。
- 記事: [Heroku isn't for idiots](https://www.rdegges.com/2012/heroku-isnt-for-idiots/) — Herokuの利点と、サイドプロジェクト以外にも適する理由を解説。
- 記事: [My Heroku values](https://brandur.org/heroku-values) — [Brandur Leach](https://twitter.com/brandur)がHerokuを退職した際にまとめた、在職中の学び。
- 講演: [Buildpack Adventure](http://buildpack-adventure.herokuapp.com/) — HerokuのBuildpackと、それを使ってオープンソースコミュニティが作っているものを紹介するスライド。

## Postgres <a id="-postgres"></a>

[Heroku Postgres](https://www.heroku.com/postgres)の資料です。

- 公式資料: [Heroku Postgres](https://www.heroku.com/postgres) — Heroku Postgresの概要を説明するページ。
- プラグイン: [heroku-buildpack-pgbouncer](https://github.com/heroku/heroku-buildpack-pgbouncer) — [`stunnel`](https://www.stunnel.org/index.html)と[`pgbouncer`](https://wiki.postgresql.org/wiki/PgBouncer)を使ったトランザクションプーリングにより、接続上限への到達を避けるBuildpack。

## Redis <a id="-redis"></a>

[Heroku Redis](https://elements.heroku.com/addons/heroku-redis)の案内です。

## スケーリング <a id="-スケーリング"></a>

- ツール: [HireFire](https://www.hirefire.io/) — 負荷に応じてHerokuのdynoを自動的に増減するSaaSツール。

## セキュリティ <a id="-セキュリティ"></a>

- 記事: [Set up CloudFlare's free SSL on Heroku](https://robots.thoughtbot.com/set-up-cloudflare-free-ssl-on-heroku) — Cloudflare経由で無料SSLを設定する手順。固定原文当時の記載。

## Toolbelt <a id="-toolbelt"></a>

[Heroku Toolbelt](https://toolbelt.heroku.com/)の資料です。

- 公式資料: [Toolbeltのダウンロード](https://toolbelt.heroku.com/) — Heroku Toolbeltのダウンロードページ。
- プラグイン: [heroku-accounts](https://github.com/ddollar/heroku-accounts) — コマンドラインから複数のアカウントを同時に操作。
- プラグイン: [heroku-pg-extras](https://github.com/heroku/heroku-pg-extras) — Postgresのキャッシュヒット率、外れ値クエリ、未使用インデックス、テーブルサイズなどを分析するToolbeltプラグイン。

## Herokuからの移行 <a id="-さようなら"></a>

- ツール: [dokku](http://dokku.viewdocs.io/dokku/) — 自分でホストする、DockerベースのHeroku互換プラットフォーム。
