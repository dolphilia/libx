---
title: "Awesome Heroku"
description: "Herokuを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-ianstormtaylor-awesome-heroku-readme-md"
---

# Awesome Heroku

Herokuを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/analytics.png" /> 分析

Heroku の分析ツールです。

- `tool` [Metabase](http://www.metabase.com/docs/v0.13.3/operations-guide/running-metabase-on-heroku.html) — Heroku に直接デプロイできるアプリとして提供される、Metabase のベータ版です。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/architecture.png" /> アーキテクチャ

Heroku プロジェクトを設計する方法です。

- `article` [Heroku のマイクロサービスアーキテクチャを探る](http://blog.codeship.com/exploring-microservices-architecture-on-heroku/) — マイクロサービスを扱う際に考慮すべき多くのツールを Heroku が不要にする理由を解説します。
- `article` [Heroku と SOA](https://www.rdegges.com/2014/heroku-and-soa/) — Heroku がプロジェクトのサービス指向アーキテクチャ構築に最適な理由を論じます。
- `article` [npm と NodeJS を使って Heroku 上でフロントエンドをバックエンドから分離する](https://medium.com/@spygi/scalable-cost-effective-web-architectures-for-heroku-eb8f1f55a4b6) - npm と NodeJS を使い、マイクロサービス Web アプリケーションを Heroku へデプロイする実践ガイドです。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/blogs.png" /> ブログ

Heroku について頻繁に、または専門的に書いているインターネット上のブログです。

- `blog` [Heroku ブログ](https://blog.heroku.com) — Heroku の公式ブログです。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/deployment.png" /> デプロイ

Heroku へのデプロイに役立つリソースです。

- `official` [Preboot](https://devcenter.heroku.com/articles/preboot) — 正しく実現するのが難しいゼロダウンタイムデプロイを「Preboot」機能で有効にする方法を解説します。
- `article` [Jenkins から Heroku デプロイを自動化する](https://www.paulfurley.com/automating-heroku-deployments-from-jenkins/) — メンテナンスモードの有効化、本番データベースからステージングへのコピー、ステージングに対するマイグレーションなど、デプロイの一部を自動化する方法を解説します。
- `question` [Heroku へデプロイするときファイルを無視するには？](http://stackoverflow.com/questions/12523435/how-do-i-ignore-folders-and-files-when-pushing-to-heroku-with-a-rails-app) — `.gitignore` のような機能に関する一般的な質問への回答です。
- `article` [Procfile を使いこなす6つのヒント](https://medium.com/@adam_41691/six-tips-for-mastering-your-procfile-64ea1207b779) — Heroku プロセスの実行方法を改善します。
- `article` [Docker で Django を Heroku へデプロイする](https://testdriven.io/blog/deploying-django-to-heroku-with-docker/) — Heroku Container Runtime 経由で、Docker を使った Django アプリを Heroku へデプロイする方法を紹介します。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/development.png" /> 開発

- `official` [アプリの複数環境を管理する](https://devcenter.heroku.com/articles/multiple-environments) — 各環境のさまざまな要素の管理方法を考えるための優れた入門です。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/domains.png" /> ドメイン

Heroku で独自ドメイン名を使うためのヒントです。

- `article` [Heroku アプリ向けに Cloudflare DNS を設定する](http://www.higherorderheroku.com/articles/cloudflare-dns-heroku/) — Cloudflare を DNS プロバイダーとして使う手順です。
- `article` [単一ドメインで複数の Heroku アプリをホストする](https://pilot.co/blog/hosting-multiple-heroku-apps-on-a-single-domain/) — 複数の Heroku アプリケーションで同じドメインを共有する方法を説明します。
- `question` [単一ドメインで複数の Heroku アプリをホストするには？](http://stackoverflow.com/questions/19119164/multiple-heroku-apps-on-a-single-domain) — サブドメインではなく異なるパスから複数の Heroku アプリを配信する一般的な質問に、複数の回答が寄せられた Stack Overflow の質問です。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/general.png" /> 全般

Heroku に関する多様な内容を扱う一般リソースです。

- `book` [The Heroku Hacker's Guide](http://www.theherokuhackersguide.com/) — Heroku 上のプロジェクトを保守・拡張するための基本を幅広く扱う電子書籍です。
- `book` [Heroku Cookbook](http://www.amazon.com/Heroku-Cookbook-Mike-Coutermarsh/dp/1782177949) — Heroku 上の実用的な本番 Web アプリケーションを管理・拡張する際の課題を解決する、段階的なレシピです。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/meta.png" /> メタ情報

会社自体に関する情報です。

- `official` [大きなキックオフ](https://blog.heroku.com/archives/2007/10/30/the_big_kickoff) — Heroku で最初のブログ記事です。
- `article` [Heroku は愚か者のためのものではない](https://www.rdegges.com/2012/heroku-isnt-for-idiots/) — Heroku の利点と、単なるサイドプロジェクト向けではない理由を説明します。
- `article` [私の Heroku の価値観](https://brandur.org/heroku-values) — [Brandur Leach](https://twitter.com/brandur) が Heroku を離れた際にまとめた、優れた一連の学びです。
- `talk` [Buildpack Adventure](http://buildpack-adventure.herokuapp.com/) — Heroku の Buildpack と、オープンソースコミュニティがそれを使って作っているものに関する素晴らしいスライドショーです。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/postgres.png" /> Postgres

[Heroku Postgres](https://www.heroku.com/postgres) に関するものです。

- `official` [Heroku Postgres](https://www.heroku.com/postgres) — 概要を説明するランディングページです。
- `plugin` [heroku-buildpack-pgbouncer](https://github.com/heroku/heroku-buildpack-pgbouncer) — [`stunnel`](https://www.stunnel.org/index.html) と [`pgbouncer`](https://wiki.postgresql.org/wiki/PgBouncer) を使った Transaction Pooling を可能にし、接続上限への到達を避ける Buildpack です。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/redis.png" /> Redis

[Heroku Redis](https://elements.heroku.com/addons/heroku-redis) に関するものです。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/scaling.png" /> スケーリング

Heroku プロジェクトのスケーリングに役立つリソースです。

- `tool` [HireFire](https://www.hirefire.io/) — 負荷に応じて Heroku Dyno を自動的に増減する SaaS ツールです。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/security.png" /> セキュリティ

Heroku アプリケーションを保護する方法です。

- `article` [Heroku で Cloudflare の無料 SSL を設定する](https://robots.thoughtbot.com/set-up-cloudflare-free-ssl-on-heroku) — Cloudflare 経由で無料 SSL を設定する正確な手順を案内します。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/toolbelt.png" /> Toolbelt

[Heroku Toolbelt](https://toolbelt.heroku.com/) の便利なリソースです。

- `official` [Toolbelt のダウンロード](https://toolbelt.heroku.com/) — Heroku Toolbelt のダウンロード先です。
- `plugin` [heroku-accounts](https://github.com/ddollar/heroku-accounts) — コマンドラインから複数のアカウントを同時に簡単に扱えます。
- `plugin` [heroku-pg-extras](https://github.com/heroku/heroku-pg-extras) — Postgres を扱うための便利な機能を追加する Toolbelt プラグインです。キャッシュヒット率、外れ値クエリ、未使用インデックス、テーブルサイズなどを分析できます。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/goodbye.png" /> さようなら…

何らかの理由で Heroku から移行すると決めた場合に確認するものです。

- `tool` [dokku](http://dokku.viewdocs.io/dokku/) — 自分でホストする Docker ベースの Heroku 互換プラットフォームです。


## <img width="21" height="21" src="https://raw.githubusercontent.com/ianstormtaylor/awesome-heroku/c9090a52f950af1965a28372f49fc2161bc7df5b/images/license.png" /> ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲で、[Ian Storm Taylor](http://ianstormtaylor.com) はこの作品に関するすべての著作権および関連する権利または隣接する権利を放棄しています。
