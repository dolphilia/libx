---
title: "Awesome NoSQL Guides"
description: "NoSQL Guidesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-erictleung-awesome-nosql-guides-readme-md"
---

# Awesome NoSQL Guides

NoSQL Guidesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [NoSQLの概説](#overview-of-nosql)
- [データ構造とモデリング](#data-structures-and-modeling)
- [CAP/Brewerの定理におけるトレードオフ](#trade-offs-in-capbrewers-theorem)
- [クラウドソース情報](#crowd-sourced-information)
- [グラフデータベース](#graph-databases)
- [批判と議論](#criticisms-and-debates)
- [その他](#miscellaneous)


## NoSQLの概説

- [Introduction To NoSQL - Martin Fowler (54:52)](https://www.youtube.com/watch?v=qI_g07C_Q5I) - GOTO 2012で行われた、NoSQLデータベース、種類、歴史、長所と短所、使用方法・時期への優れた入門講演。
- [NoSQL Distilled](https://martinfowler.com/books/nosql.html) - 多様なNoSQLデータベースを説明し、NoSQLの利用がプロジェクトに適切かどうかの判断を助ける、読みやすく手頃な書籍。
- [Seven Databases in Song (1:43)](https://www.youtube.com/watch?v=jyx8iP5tfCI) - 7つ（うち6つはNoSQL）のデータベースと、それぞれの仕組みを非常に短く概観する2012年の楽しい歌。
- [NoSQL Databases: a Survey and Decision Guidance (2016)](https://medium.baqend.com/nosql-databases-a-survey-and-decision-guidance-ea7823a822d) - 「このNoSQL Toolboxにより、中心的なアプリケーション要件に基づき、実務家・研究者が潜在的なシステム候補を絞り込むための単純な決定木を導ける」。
- [Data Management in the Cloud: Limitations and Opportunities (PDF)](http://www.cs.umd.edu/~abadi/papers/abadi-cloud-ieee09.pdf) - Abadi（2009）が、クラウドにおけるデータ管理・分析の制約と機会を論じる。
- [10 NoSQL Misconceptions](https://web.archive.org/web/20210701080816/https://www.dummies.com/programming/big-data/10-nosql-misconceptions/) - NoSQLデータベースとは何か、ACID準拠、セキュリティなどに関するいくつかの誤解。
- [10 Reasons Developers Love NoSQL](https://web.archive.org/web/20210701080841/https://www.dummies.com/programming/big-data/10-reasons-developers-love-nosql/) - 開発者がNoSQLデータベースを好んで使う10の理由のリスト。
- [Distribution, Data, Deployment: Software Architecture Convergence in Big Data Systems (PDF)](https://resources.sei.cmu.edu/library/asset-view.cfm?assetID=90909) - GortonとKlein（2014）による、分散、データ、デプロイメントの観点からビッグデータシステムを扱う際のソフトウェア工学上の懸念を論じる論文。[こちら](https://doi.org/10.1109/MS.2014.51)からも利用できる。
- [Use cases for NoSQL (2017)](https://stackoverflow.com/questions/2875432/use-cases-for-nosql) - 従来のSQLデータベースよりNoSQLデータベースを使う最適なユースケースについてのStack Overflow上の議論。
- [Five Common Data Stores and When to Use Them (2019)](https://shopify.engineering/five-common-data-stores-usage) - 5つの一般的なデータストア（リレーショナル、非リレーショナル（NoSQL）、キーバリュー、全文検索、メッセージキュー）とその特性を説明する記事。
- [NoSQL Databases (PDF)](https://web.archive.org/web/20190927222738/https://www.christof-strauch.de/nosqldbs.pdf) - NoSQLデータベースの動機と根拠、また共通概念・技法・パターンを概説する149ページ文書。最終更新は2011年頃。
- [NoSQL Data Architecture & Data Governance: Everything You Need to Know (2018)](https://www.dataversity.net/nosql-data-architecture-data-governance-everything-need-know/) - 図を伴う、異なるNoSQLデータベースアーキテクチャの概観。
- [NoSQL vs SQL: Demystifying NoSQL Databases (2019)](https://build5nines.com/nosql-vs-sql-demystifying-nosql-databases/) - CAP定理のトレードオフを扱いながら、NoSQLデータベーススキーマ種類の概説・例を示す。
- [Comparing Database Types: How Database Types Evolved to Meet Different Needs](https://www.prisma.io/dataguide/intro/comparing-database-types) - 一般的なデータベースと、NoSQLデータベースの種類がどう異なり役立つかの優れた概説。
- [The NoSQL Ecosystem](https://www.aosabook.org/en/nosql.html) - 「The Architecture of Open Source Applications」のAdam Marcusによる章。これらのシステム構築の深い理解を必要とするシステムアーキテクト向け。
- [What is NoSQL - Amazon AWS](https://aws.amazon.com/nosql/) - NoSQLデータベース、SQLデータベース技術・用語との比較を高水準で概観する。キーバリュー（Amazon DynamoDB）、ドキュメント（Amazon DocumentDB）、グラフ（Amazon Neptune）、インメモリー（Amazon ElastiCache）、検索エンジン（Amazon Elasticsearch）NoSQL選択肢のAWSサービスへのランディングページも兼ねる。
- [NoSQL vs. SQL: Important Differences & Which One Is Best for Your Project (2021) - Upwork](https://www.upwork.com/resources/nosql-vs-sql) - SQLとNoSQLデータベースを比較し、ユースケースに適したデータベースソリューションを選ぶ助言を示す説明。
- [NoSQL Database Tutorial – Full Course for Beginners (2:54:52)](https://www.youtube.com/watch?v=xh4gy1lbL2k) - Ania KubowがNoSQLデータベースの4種類をレビューし、内容を試すためのハンズオンプロジェクト2件を提供する。


## データ構造とモデリング

- [Structure Your Database](https://firebase.google.com/docs/database/android/structure-data) - データベースがJSONを使う場合の、データ構造化ベストプラクティス（2018年時点）。
- [NoSQL Data Modeling Techniques (2012)](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/) - データモデリングの観点からNoSQLシステムファミリーを短く比較し、一般的なモデリング技法をいくつか概説する記事。
- [Data Models For MongoDB](https://www.mongodb.com/docs/manual/data-modeling/) - スキーマ検証とパターン例を含むMongoDB固有のデータモデリング支援。ただし概念は他のドキュメント型NoSQLデータベースにも適用できる可能性がある。
- [Data Models Will Be Beautiful Again (2016)](https://tdwi.org/articles/2016/11/22/data-models-will-be-beautiful-again.aspx) - スキーマレスデータベースが存在しても、アルゴリズムを使って知識と洞察を得るには慎重なデータベースモデリングが重要であると論じるエッセイ。
- [Unified Data Modeling for Relational and NoSQL Databases](https://www.infoq.com/articles/unified-data-modeling-for-relational-and-nosql-databases/) - Unified Data Modeling手法を使い、NoSQLとリレーショナルデータベースの両方を管理するソリューション。
- [Unifying Relational, Document, Graph, and Temporal Data Models](https://fauna.com/blog/unifying-relational-document-graph-and-temporal-data-models) - 同じデータベースで複数パラダイムを横断してクエリするパターン。
- [How To Design Schema For Your NoSQL Database?](https://www.dataversity.net/how-to-design-schema-for-your-nosql-database/#) - NoSQLはスキーマレスという一般的な考えに反し、NoSQLデータベースが「クエリ駆動設計」に従うことと、このスキーマの柔軟性で考慮すべき事項を概説する。
- [Best Practices for NoSQL Database Design (2012)](https://softwareengineering.stackexchange.com/q/158790/) - NoSQLデータベース設計に関するいくつかの回答・リンク。


## CAP/Brewerの定理におけるトレードオフ

- [Visual Guide To NoSQL Systems (2010)](http://blog.nahurst.com/visual-guide-to-nosql-systems) - 異なるNoSQLデータベースにおけるCAP定理のトレードオフを視覚的に示す。
- [How to Choose The Right NoSQL Database For Your Application? (2018)](https://www.dataversity.net/choose-right-nosql-database-application/) - CAP定理をレビューし、適切な選択を助けるため一般的なNoSQLデータベースをCAPカテゴリへ対応付ける。


## クラウドソース情報

- [/r/nosql](https://www.reddit.com/r/nosql/) - NoSQLデータベースに関する一般的な質問・議論を扱うRedditページ。
- [[nosql] Tag On Stack Overflow](https://stackoverflow.com/tags/nosql/info)
- [Ask HN: Learning NoSQL, Papers and Books (2017)](https://news.ycombinator.com/item?id=15427932) - 「あなたの意見では、NoSQLの主題を本当に理解するため必須の論文と書籍は何ですか?」
- [Difference Between Scaling Horizontally And Vertically For Databases](https://stackoverflow.com/q/11707879/6873133) - データベースの世界で話される一般的な用語と、他者からの回答。
- [NoSQL - Wikipedia](https://en.wikipedia.org/wiki/NoSQL) - NoSQLデータベース全般に関するWikipedia記事。


## グラフデータベース

- [Graph Databases Use Cases](https://neo4j.com/use-cases/) - 文書はNeo4j向けですが、概念はすべてのグラフデータベースに適用できる。
- [How The ICIJ Used Neo4j To Unravel The Panama Papers - Mar Cabra (32:02)](https://www.youtube.com/watch?v=S20XMQyvANY) - 50超の国の政治家140人を含むタックスヘイブン企業とつながる主要人物を調べるうえで、グラフデータベースがどう重要だったかを学ぶ。
- [Graph Databases For Beginners: The Basics Of Data Modeling](https://neo4j.com/blog/data-modeling-basics/) - データモデリングの基本と、採るべきアプローチを論じる。
- [Graph Data Modeling Guidelines](https://neo4j.com/developer/guide-data-modeling/) - Neo4jと直接関連しますが、任意のグラフデータベースにも適用できる可能性がある。
- [Graph Data Modeling Visualize Structure and Meaning](http://www.graphdatamodeling.com) - グラフデータモデリングの短い入門であり、Thomas Frisendalによる書籍「Graph Data Modeling for NoSQL and SQL」への導入。


## 批判と議論

- [Addressing the NoSQL Criticism (2011)](https://www.bradley-holt.com/2011/07/addressing-the-nosql-criticism/) - CouchDBに当てはまるNoSQLデータベースへの9つの批判に反論するが、他にも当てはまる可能性がある。
- [Thank You For Your Help NoSQL, But We Got It From Here (2020)](https://web.archive.org/web/20200913032621/https://www.memsql.com/blog/why-nosql-databases-wrong-tool-for-modern-application/) - スケーリング問題からNoSQLがデータベース進化を促したが、今はNewSQLがその懸念に対処しているとする議論（MemSQLの観点）。
- [The Five Stages Of NoSQL (2016)](https://sookocheff.com/post/opinion/the-five-stages-of-nosql/) - 悲嘆の5段階をなぞり、NoSQLデータベースを選び利用する過程を扱う。
- [The Biggest Challenges Of Moving To NoSQL (2017)](https://dzone.com/articles/the-biggest-challenges-of-moving-to-nosql) - NoSQLへの移行の課題を乗り越えることで得られた速度、スケーラビリティ、開発者の喜びを扱う。


## その他

- [What As A NoSQL Database? Learn By Writing One In Python](https://web.archive.org/web/20201109032031/https://jeffknupp.com/blog/2014/09/01/what-is-a-nosql-database-learn-by-writing-one-in-python/) - Pythonで玩具データベースを構築してNoSQLとRDBMSを学ぶ、優れたチュートリアル。
- [Dynamo Vs Cassandra : Systems Design Of NoSQL Databases](https://sujithjay.com/data-systems/dynamo-cassandra/) - よく知られた2つのNoSQLデータベースのシステム設計を比較するブログ投稿。
- [Why You Should Build Your Wwn NoSQL Database](https://medium.com/@marceloboeira/why-you-should-build-your-own-nosql-database-9bbba42039f5) - NoSQLデータベースとスキーマのスペクトラムを簡潔に概観し、Crystalプログラミング言語でNoSQLデータベースを非常に基本的に実装する。
- [PostgreSQL, The NoSQL Database (2015)](https://www.linuxjournal.com/content/postgresql-nosql-database) - Version 9.4時点のHStore（キーバリューストア）とJSONB（ドキュメントベース）などの新機能を使うPostgreSQLが、NoSQLデータベースの代替になり得るとする議論。
