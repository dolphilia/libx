---
title: "Awesome CouchDB"
description: "CouchDBを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-quangv-awesome-couchdb-readme-md"
---

# Awesome CouchDB

CouchDBを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
- [ニュースとブログ記事](#news--blog-posts)
- [パターンとベストプラクティス](#patterns--best-practices)
  - [Map/Reduce](#mapreduce)
  - [Join](#joins)
  - [ドキュメントのバージョン管理](#document-versioning)
- [ブログ](#blogs)
- [ドキュメント](#docs)
- [書籍](#books)
- [動画](#videos)
- [ライブラリ](#libraries)
- [コミュニティ](#community)
  - [メーリングリスト](#mailing-list)
  - [企業](#companies)
    - [ホスティング](#hosting)
  - [関連プロジェクト](#related-projects)
- [その他／技術](#misctechnical)
  - [添付ファイル](#attachments)
  - [バックアップ](#backups)
  - [CouchApp](#couchapps)
  - [スケーリング](#scaling)
- [リソース一覧](#resource-lists)
- [ライセンス](#license)

## ニュースとブログ記事

- [Rust による MiniCouchDB](https://www.garrensmith.com/blogs/mini-couch-hack-week)
- [CouchDB 3.0 への道：4.0に備える](https://blog.couchdb.org/2020/02/26/the-road-to-couchdb-3-0-prepare-for-4-0/) _(2020-02-26)_

## パターンとベストプラクティス

- [ベストプラクティス](http://ehealthafrica.github.io/couchdb-best-practices/) - eHealth Africa のベストプラクティスです。
- [PouchDB のページネーション戦略](https://pouchdb.com/2014/04/14/pagination-strategies-with-pouchdb.html)
- [PouchDB でより良いコードを書くための12のプロ向けヒント](https://pouchdb.com/2014/06/17/12-pro-tips-for-better-code-with-pouchdb.html)
- [CouchDB の性能を改善する Linux チューニング](https://github.com/assafmo/couchdb-linux-performance)


### Map/Reduce

- [PouchDB - セカンダリインデックス](https://pouchdb.com/2014/05/01/secondary-indexes-have-landed-in-pouchdb.html)
- [Cloudant - MapReduce 入門](https://cloudant.com/blog/mapreduce-from-the-basics-to-the-actually-useful/#.WIDBfRsrKUl) - reduce、group、group_level の優れた入門です。
- [View Collation を使う](http://docs.couchdb.org/en/2.0.0/couchapp/views/joins.html#using-view-collation) - データを Join するためのインデックスマッピング（emit）です。
- [View Collation](http://docs.couchdb.org/en/2.0.0/couchapp/views/collation.html) - 「View Collation」に関する追加ドキュメントです。
- [Cloudant - MapReduce とセカンダリインデックス（動画）](https://developer.ibm.com/clouddataservices/docs/cloudant/get-started/mapreduce-and-the-secondary-index/) - MapReduce、セカンダリインデックス、複合キーに関する優れた動画です。
- [Cloudant - Design Document](https://docs.cloudant.com/design_documents.html) - Cloudant のドキュメントも CouchDB の概念を学ぶ優れたリソースです。
- [Cloudant - Design Document 管理](https://docs.cloudant.com/design_document_management.html) - 本番環境で Design Document の変更を管理する方法です。


### Join

- [View による Join](http://docs.couchdb.org/en/2.0.0/couchapp/views/joins.html#joins-with-views) - CouchDB／PouchDB で効率的に Join する手法を理解するために必読です。
- [Cloudant で関連ドキュメントをまとめる](https://docs.cloudant.com/transactions.html) - CouchDB の高可用性という性質を活用する手法です。


### ドキュメントのバージョン管理

- [ドキュメントの Revision（Wiki より）](https://wiki.apache.org/couchdb/Document_revisions?action=show&redirect=DocumentRevisions)
- [シンプルなドキュメントのバージョン管理](http://web.archive.org/web/20100701165612/http://blog.couch.io/post/632718824/simple-document-versioning-with-couchdb)


## ブログ

- [公式ブログ](https://blog.couchdb.org/)


## ドキュメント

- [公式ドキュメント](http://docs.couchdb.org/)
- [FAQ（旧 Wiki）](https://wiki.apache.org/couchdb/Frequently_asked_questions) - [新 Wiki](https://cwiki.apache.org/confluence/display/COUCHDB/Frequently+Asked+Questions) より FAQ が多いようです。

## 書籍

- [決定版ガイド](http://guide.couchdb.org/) - CouchDB の _「Dog」_ Book です。
- [Wiki の書籍一覧](https://cwiki.apache.org/confluence/display/COUCHDB/Books)


## 動画

- [よくある10の誤解](https://www.youtube.com/watch?v=BKQ9kXKoHS810) - この[カンファレンス](http://conf.couchdb.org/)には、さらに多くの動画があります。
- [The NoSQL Tapes](http://nosqltapes.com) - [第5巻 - CouchDB](http://nosqltapes.com/video/hoffman-and-kocoloski-on-cloudant-and-couchdb)、[第8巻 - MapReduce](http://nosqltapes.com/video/understanding-mapreduce-with-mike-miller)で CouchDB を扱っています。
- [BigCouch でスケールアウトする](http://www.oreilly.com/pub/e/1760) - BigCouch によるスケールアウトを扱う O'Reilly の動画です。
- [IBM - The New Builders Webinar Series](https://event.on24.com/eventRegistration/EventLobbyServlet?target=reg20.jsp&partnerref=cdc&eventid=1240121&sessionid=1&key=9E23B44802902EAD0BB2603F0434742E&regTag=35370&sourcepage=register)

## ライブラリ

- [Jaki](https://github.com/pandeiro/jaki) - シンプルな ClojureScript CouchDB クライアントです。

## コミュニティ

- [IRC](http://webchat.freenode.net/?channels=couchdb) - `irc://irc.freenode.net/couchdb`
- [Apache CouchDB Conf](http://conf.couchdb.org/) - 多数の動画リンクがあります。
- [規約](http://couchdb.apache.org/bylaws.html)、[議事録](https://whimsy.apache.org/board/minutes/CouchDB.html)


### メーリングリスト

> -dev は CouchDB 開発者が会話する場所、-user は CouchDB ユーザーが会話する場所です。
> もちろん、多少の話題の交差もあります。
> CouchDB 自体の変更について話す場合は -dev が適切です（「developer」はコミット権限などを持っている必要があるという意味ではありません）。-rnewson

- [メーリングリスト](https://mail-archives.apache.org/mod_mbox/#couchdb)
- [メーリングリストの説明](http://svn.apache.org/repos/asf/couchdb/site/htdocs/community/lists.html?p=900000)
- [Grokbase](http://grokbase.com/s/couchdb) - [Stack Overflow](http://stackoverflow.com/questions/tagged/couchdb) のようなインターフェースでメーリングリストを閲覧できます。


[:star2:**素晴らしい** ***CouchDB Committer*** **と Project Manager** :heart_eyes_cat:](http://people.apache.org/committers-by-project.html#couchdb)


### 企業

- [eHealth Africa](https://github.com/eHealthAfrica) - CouchDB の大規模ユーザーです。[ベストプラクティス](https://github.com/eHealthAfrica/couchdb-best-practices)も確認してください。


#### ホスティング

- [Cloudant](https://cloudant.com/) - サービスとしての分散データベース（DBaaS）です。
- [Fly.io](https://fly.io) では、この[ガイド](https://www.canrau.com/en/fly-couchdb)を使ってホストできます。
- [Google Cloud Platform 用 Bitnami Launchpad](https://bitnami.com/stack/couchdb/cloud/google) - Google Cloud Platform で CouchDB をホストします。


### 関連プロジェクト

- [PouchDB](https://pouchdb.com/) - ポケットサイズのデータベースです。
- [FoundationDB](https://www.foundationdb.org/) - CouchDB 4.0 は FoundationDB を利用します。
- [Hoodie](http://hood.ie/) - Offline First アプリケーション向けバックエンドです。
- [Couchbase](https://www.couchbase.com/) - NoSQL データベースです。
  - [Apache CouchDB からの移行](https://docs.couchbase.com/server/current/install/migrate-couchdb.html) - CouchDB と Couchbase の比較です。
- [RxDB](https://rxdb.info/) - JavaScript アプリケーション向け NoSQL データベースです。CouchDB 互換の任意のエンドポイントおよび独自 GraphQL エンドポイントとのリアルタイムレプリケーション用モジュールを提供します。


## その他／技術

- [Dynamo と CouchDB クラスター](https://web.archive.org/web/20160311144130/https://cloudant.com/blog/dynamo-and-couchdb-clusters/#.WIEp4xsrKUk) - クラスターを使った CouchDB のスケーリングに関する記事です。
- [Sawzall に関する Google の論文](http://research.google.com/archive/sawzall.html) - 特殊な Reduction の例です。
- [すべての開発者が CouchDB について知るべきこと](http://www.dimagi.com/blog/what-every-developer-should-know-about-couchdb/) - 得られた教訓に関する記事です。
- [CouchDB の最大データベースサイズ](http://www.nosql.se/2011/09/couchdb-maximum-database-size/)
- [NoSQL パターン](http://horicky.blogspot.com/2009/11/nosql-patterns.html)
- [Git、Clojure、CouchDB の永続 Tree](https://eclipsesource.com/blogs/2009/12/13/persistent-trees-in-git-clojure-and-couchdb-data-structure-convergence/)
- [CouchDB - JSON と B-Tree と REST、なんてことだ！](https://pozorvlak.livejournal.com/176385.html)

### 添付ファイル

- [PouchDB - 添付ファイルは過大評価されている](https://pouchdb.com/2014/06/17/12-pro-tips-for-better-code-with-pouchdb.html) - _「更新：この記事の公開以降、PouchDB の添付ファイルの安定性と性能は大幅に向上しました。…」_
- [Cloudant - 添付ファイルの性能上の考慮事項](https://docs.cloudant.com/attachments.html#performance-considerations)
- [添付ファイルは Revision ごとに複製されるか？](http://grokbase.com/t/couchdb/user/14a1phbzrb/are-attachments-duplicated-for-each-revision-as-well) - Revision をまたぐ添付ファイルに関するメーリングリストの議論です。


### バックアップ

- [シンプルな CouchDB・Cloudant バックアップ](https://developer.ibm.com/clouddataservices/2016/03/22/simple-couchdb-and-cloudant-backup/) - バックアップに関する IBM の記事です。
- [Cloudant バックアップガイド](https://docs.cloudant.com/backup-guide.html) - バックアップに関する Cloudant のドキュメントです。


### CouchApp

- [CouchApp 一覧](https://couchapp.readthedocs.io/en/latest/user/list-of-couchapps.html)
- [Ddoc Lab](http://ddoc.me/) - ブラウザー内で CouchApp と CouchDB Design Doc を作成します。


### スケーリング

- [Bitnami CouchDB](https://bitnami.com/stack/couchdb) - Bitnami により、クラウド上で CouchDB を簡単に実行できます。


## リソース一覧

- [公式 CouchDB Wiki](https://cwiki.apache.org/confluence/display/COUCHDB/Apache+CouchDB+Wiki)
- [公式 CouchDB Wiki（旧）](https://wiki.apache.org/couchdb/) - 新 Wiki にはまだない情報もあります。
- [Cloudant 公式ガイド](https://docs.cloudant.com/guides.html) - CouchDB にも適用できます。
- [CouchDB クライアント一覧](https://cwiki.apache.org/confluence/display/COUCHDB/CouchDB+clients)
- [CouchDB の便利なユーティリティ一覧](https://cwiki.apache.org/confluence/display/COUCHDB/Useful+utilities)
- [旧 Wiki の関連プロジェクト一覧](https://wiki.apache.org/couchdb/Related_Projects)

## ライセンス
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg" /></a><br />この作品は <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons 表示 4.0 国際ライセンス</a>の下で提供されています。
