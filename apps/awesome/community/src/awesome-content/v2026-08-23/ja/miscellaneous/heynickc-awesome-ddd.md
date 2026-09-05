---
title: "Awesome Domain-Driven Design"
description: "Domain-Driven Designを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-heynickc-awesome-ddd-readme-md"
---

# Awesome Domain-Driven Design

Domain-Driven Designを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [Awesome Domain-Driven Design](https://github.com/heynickc/awesome-ddd/)
	- [Contents](#contents)
	- [Books](#books)
	- [Free eBooks](#free-ebooks)
	- [Training Courses](#training-courses)
	- [Video Collections](#video-collections)
	- [Community Resources](#community-resources)
	- [Blogs](#blogs)
	- [Sample Projects](#sample-projects)
		- [GO](#go)
		- [.NET (C#/F#)](#net-cf)
		- [Haskell](#haskell)
		- [Idris](#idris)
		- [JavaScript / TypeScript](#javascript--typescript)
		- [JVM languages](#jvm-languages)
		- [PHP](#php)
	- [Libraries and Frameworks](#libraries-and-frameworks)
		- [GO](#go-1)
		- [.NET](#net)
		- [Databases](#databases)
		- [Elixir](#elixir)
		- [JavaScript / TypeScript](#javascript--typescript-1)
		- [JVM](#jvm)
		- [PHP](#php-1)
		- [Python](#python)
		- [Ruby](#ruby)
	- [Podcasts and Interviews](#podcasts-and-interviews)
	- [Conferences](#conferences)
	- [User Groups](#user-groups)
	- [Tools](#tools)
	- [License](#license)

<a id="books"></a>
## 書籍

- [Applying Domain Driven Design with CQRS and Event Sourcing](https://buildplease.com/pages/now-what/) - イベントストーミングおよびその他のモデリング技術を用いて、架空のビジネスドメインに対してCQRSおよびイベントソースベースのプロトタイプを構築するプロセスの解説
- [Architecture Modernization](https://www.manning.com/books/architecture-modernization) - ソフトウェアアーキテクチャをビジネスドメイン、組織設計、チームトポロジー、企業戦略と一致させるための具体的なツール、技術、プロセス
- [Collaborative Software Design](https://www.manning.com/books/collaborative-software-design) - ソフトウェア設計においてすべてのステークホルダーを効果的に関与させるための実践的なガイド
- [CQRS](https://leanpub.com/cqrs) - グレッグ・ユンから学んだDDDおよびCQRSに関するマーカス・ニホフのノート。本書に併せて広範なサンプルプロジェクトが付属している。
- [Crafting Great APIs with Domain-Driven Design: Collaborative Craftsmanship of Asynchronous and Synchronous APIs](https://amzn.to/4oN6fqk) - ドメインドリブンデザインの原則に基づいてAPIを設計・構築するための包括的なガイド。イベント駆動型の非同期および同期APIパターンをカバー。
- [Domain-Driven Design: Tackling the Complexity at the Heart of Software](https://amzn.com/0321125215) - ドメインドリブンデザインという用語を創出した定番書。また、「ブルーブック」とも呼ばれる。
- [Domain-Driven Design Distilled](https://www.amazon.com/Domain-Driven-Design-Distilled-Vaughn-Vernon/dp/0134434420) - [Implementing Domain-Driven Design](https://vaughnvernon.co/?page_id=168#iddd)または[Domain-Driven Design: Tackling the Complexity at the Heart of Software](https://amzn.com/0321125215)を読む前に読むべき非常に良い入門書。
- [Domain-Driven Design in PHP](https://leanpub.com/ddd-in-php) - PHPで書かれた実際の例が示され、DDDアーキテクチャスタイル、戦術設計、境界コンテキスト統合が紹介されている。
- [Domain-Driven Rails](https://blog.arkency.com/domain-driven-rails/) - ドメインドリブン・レールズは、11の技術（境界コンテキストからイベントソースまで）を紹介し、新しいおよび古いレールアプリケーションでそれぞれ独立してまたは組み合わせて使用することで、より良いアーキテクチャを実現できるようにする。
- [Domain Modeling Made Functional](https://pragprog.com/book/swdddf/domain-modeling-made-functional) - ドメインドリブンデザインとF#を用いてソフトウェアの複雑性に取り組む。
- [Domain Specific Languages](http://martinfowler.com/books/dsl.html) - DDDと関連性が薄いが、普遍言語の重要性やドメイン専門家との協働、そして多くの技術的詳細について説明。
- [Event Sourcing and CQRS with .NET Core and SQL Server](https://buildplease.com/products/fpc-v2/) - ASP.NET CoreとSQL Serverを用いて、生産環境でイベントソースおよびCQRSとドメインドリブンデザインを実装するプロセスの解説。
- [Hands-On Domain-Driven Design with .NET Core](https://www.amazon.com/Hands-Domain-Driven-Design-NET-dp-1788834097/dp/1788834097) - アレクセイ・ジマレフがDDDの原則を実践することで、ソフトウェアの中心部における複雑性に取り組む。
- [Implementing Domain-Driven Design](https://www.amazon.com/Implementing-Domain-Driven-Design-Vaughn-Vernon/dp/0321834577) - ドメインドリブンデザインを理解するためのトップダウンアプローチを示す定番書。また、「レッドブック」とも呼ばれる。
- [Implementing DDD, CQRS and Event Sourcing](https://leanpub.com/implementing-ddd-cqrs-and-event-sourcing) - DDD、CQRS、イベントソースの実装方法を学び、理論を理解し、JavaScriptおよびNode.jsで実践する方法を学ぶ。
- [Introducing Event Storming: An act of Deliberate Collective Learning](https://leanpub.com/introducing_eventstorming) - イベントストーミングについて最も深いチュートリアルと説明。発明者自身が提供した内容。
- [Learning Domain-Driven Design: Aligning Software Architecture and Business Strategy](https://www.amazon.com/Learning-Domain-Driven-Design-Aligning-Architecture/dp/1098100131/) - ドメインドリブンデザインの基本的なパターンと実践方法を学び、グリーンフィールドおよびブラウンフィールドプロジェクトにおいて日々の業務に応用する方法を学ぶ。
- [Microsoft .NET - Architecting Applications for the Enterprise (2nd Edition)](https://www.amazon.com/Microsoft-NET-Architecting-Applications-Enterprise/dp/0735685355/) - ソフトウェアアーキテクトが実際の開発現場で適用する基本的な実践をまとめた解説。
- [Patterns, Principles, and Practices of Domain-Driven Design (1st Edition)](https://www.amazon.com/Patterns-Principles-Practices-Domain-Driven-Design/dp/1118714709) - ドメインドリブンデザインの原則、原則、パターンに基づいた複雑なソフトウェア開発の管理方法。C#でのコード例を伴う。
- [Secure by Design](https://www.manning.com/books/secure-by-design?a_aid=danbjson&a_bid=0b3fac80) - ドメインドリブンデザインを用いてセキュリティ脆弱性を回避する方法を示す。
- [Specification by Example](https://www.manning.com/books/specification-by-example) - この書籍は、世界中でチームをリードしてきた経験から、ソフトウェアの短いイテレーションサイクルでの仕様化、テスト、デリバリーに有効な方法をまとめており、本書のケーススタディは、小さなウェブスタートアップから大きな金融機関まで、XP、スクラム、カンバンなど多くのプロセスで実際の業務を実施しているものである。
- [Versioning in an Event Sourced System](https://leanpub.com/esversioning) - イベントソースシステムのバージョン管理に困った経験がありますか？初めてイベントソースシステムに触れる方へ。本書は、長期間にわたるバージョン管理をどう行うかを示す、決定的なガイドである。
- [What is Domain-Driven Design?](https://learning.oreilly.com/library/view/what-is-domain-driven/9781492057802/) - ドメインドリブンデザインの核となるパターンと原則、および旧システムプロジェクトでのDDDの適用戦略について、短い読書で紹介する。
- [Writing Great Specifications](https://www.manning.com/books/writing-great-specifications) - 「素晴らしい仕様書を書く」は、Gherkin仕様書の良質な作成方法を学ぶための、事例を豊富に含んだチュートリアルである。
-

<a id="free-ebooks"></a>
## 無料電子書籍

- [The Anatomy of Domain-Driven Design - The Infographic](https://leanpub.com/theanatomyofdomain-drivendesign) - ドメインドリブンデザインの構造を示す情報グラフィック。
- [Architecting Modern Web Applications with ASP.NET Core and Microsoft Azure](https://dotnet.microsoft.com/download/thank-you/aspnet-ebook) - DDDを用いて、ASP.NET CoreとAzureを活用したモノリスウェブアプリケーションの開発に至るまでの一貫したガイドを提供する。 [eShopOnWeb sample](https://github.com/dotnet-architecture/eShopOnWeb)
- [Architecture Patterns with Python](https://www.cosmicpython.com/book/preface.html) - Pythonによるアプリケーションアーキテクチャパターンが複雑性を管理する方法についての書籍。
- [CQRS Journey](https://msdn.microsoft.com/en-us/library/jj554200.aspx) - CQRSとイベントソースについての探索。
- [Domain-Driven Design: The First 15 Years](https://dddeurope.com/15years) - 記念日を祝うために、ソフトウェア設計分野の著名な著者たちが、過去と現在のエッセイを寄稿しました。マーティン・フォーバー、ジェームズ・コープリエン、リベッカ・ウィルズ・ブロック、メル・コンウェイ、その他多くの著者による寄稿があります。
- [DDD Reference](http://domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf) - DDDのパターンと定義についての要約。
- [Domain Driven Design Quickly](https://www.infoq.com/minibooks/domain-driven-design-quickly) - ドメインドリブンデザインを迅速に理解するための短い、読みやすい要約と導入。
- [Effective Aggregate Design](http://dddcommunity.org/library/vernon_2011/) -  この3部構成のシリーズでは、ヴァーン・ヴェルトンが、よくある設計の誤りについて説明し、さまざまなアグリゲートモデル選択の利点と欠点を議論し、アグリゲートモデルの設計に使えるルールを提示する。
- [Getting Started with DDD when Surrounded by Legacy Systems](http://domainlanguage.com/wp-content/uploads/2016/04/GettingStartedWithDDDWhenSurroundedByLegacySystemsV1.pdf) - 大きな継承システムへの対応を強いられる場合に、DDDを始めるための3つの戦略について説明する。
- [Living Documentation by Design, with Domain-Driven Design](https://leanpub.com/livingdocumentation) - 生きているドキュメントが、ビジネス目標からビジネスドメイン知識、アーキテクチャと設計、プロセスおよびデプロイメントまで、すべてのプロジェクトにおいてどのように役立つかを解説する。
- [.NET Microservices: Architecture for Containerized .NET Applications](https://dotnet.microsoft.com/download/thank-you/microservices-architecture-ebook) - コンテナを用いてマイクロサービスベースアプリケーションを開発し、それらを管理するための導入ガイド。 [eShopOnContainers sample](https://github.com/dotnet-architecture/eShopOnContainers)
- [The Semantic JavaScript Backend for Event-Driven Development](https://docs.wolkenkit.io/1.1.0/downloads/brochure/) - DDD、CQRS、イベントソースがそれぞれ何であるか、そしてどう関係しているかを68ページの無料電子書籍で解説する。
- [DDD Magazine from Xebia #1](https://pages.xebia.com/domain-driven-design-magazine-xebia) - このマガジンは、個人、ビジネス、顧客の経験に基づく、視覚的で実用的な洞察を豊富に盛り込み、あなたのDDDの旅をサポートする。
- [Visual Collaboration Tools](https://leanpub.com/visualcollaborationtools/) - ソフトウェア開発チーム向けの書籍。日々の業務に役立つツールを説明し、さまざまな実務家による現場のストーリーを紹介する。

<a id="training-courses"></a>
## トレーニングコース
- [Advanced Distributed Systems Design](https://learn-particular.thinkific.com/courses/adsd-online) - ウディ・ダーンによるオンライントレーニングコース。ウディのライブトレーニングスケジュールは、 [here](http://udidahan.com/training/) で確認できます。
- [DDD Workshops across Europe and Online](https://training.dddeurope.com/) - エリック・エヴァンス、アルベルト・ブランドオリニ、マティアス・ヴェラース、リベッカ・ウィルズ・ブロック、ニック・チューン、その他多くの著者による公開セミナー。
- [DDD Workshop by Xebia](https://xebia.com/academy/en/search?query=Domain-driven%20design) - 公開および内部のドメイン駆動設計（DDD）ワークショップ。基礎からプロレベルまで。
- [Distilling Domain-Driven Design](https://www.informit.com/store/domain-driven-design-livelessons-video-training-9780134597324) - ヴァーン・フォーリンのオンライントレーニングコース。
- [Domain Language eLearning](http://elearn.domainlanguage.com/) - 元のDDD書（ドメイン駆動設計）を著したエリック・エヴァンズによる動画レッスンを活用し、実際のソフトウェアの品質を高めるためのモデルの進化技術を自習できます。
- [Event Sourcery](https://www.youtube.com/@EventSourcery) - DDD、CQRS、イベントソースの概要。
- [EventStorming Fundamentals Course](https://elearning.dsolemorera.com/courses/eventstorming-fundamentals) () - イベントストーミングの基礎を学びます。イベントストーミングに関するすべての内容と例を含みます。 [also in Spanish](https://elearning.dsolemorera.com/courses/fundamentos-eventstorming)
- [Greg Young's CQRS Class](http://subscriptions.viddler.com/GregYoung/) - これらの動画には、グレッグ・ユンのDDD、CQRS、イベントソース講義のすべてが含まれています。
- [Mixter](https://github.com/DevLyon/mixter) - CQRSおよびイベントソースの「コアン」（問題解決の練習）。
- [Nomad PHP](https://nomadphp.com/product/introduction-event-sourcing-cqrs/) - イベントソースとCQRSの概要。
- [Pluralsight](https://pluralsight.com)
	 - [Domain-Driven Design Fundamentals](https://www.pluralsight.com/courses/domain-driven-design-fundamentals) - エリック・エヴァンズのアドバイスを交え、顧客とのインタラクションや複雑なデモアプリケーションをもとに、ドメイン駆動設計（DDD）の基礎を学びます。
	 - [Domain-Driven Design in Practice](https://www.pluralsight.com/courses/domain-driven-design-in-practice) - ドメイン駆動設計（DDD）の原則を実際の開発現場で適用するための詳細な説明と実践的な導入方法。
	 - [Modern Software Architecture: Domain Models, CQRS, and Event Sourcing](https://www.pluralsight.com/courses/modern-software-architecture-domain-models-cqrs-event-sourcing) - このコースは、ビジネスドメインのトップレベルアーキテクチャを発見するためのDDD分析パターンをカバーしています。アーキテクトおよび開発者は、ドメインモデル、CQRS、イベントソースなどの実装パターンの詳細を学びます。
- [Rails + Domain Driven Design Workshop](https://blog.arkency.com/ddd-training/) - DDDの概要、CQRSおよびイベントソースの基礎（Ruby/Rails開発者向け）。
- [Reactive Architecture: CQRS and Event Sourcing](https://cognitiveclass.ai/courses/reactive-architecture-cqrs/) - このコースでは、CQRS/ESを使用する理由、それがもたらすメリット、そしてそのコストについて説明します。CQRS/ESがアプリケーションのスケーラビリティ、一貫性、可用性に与える影響についても見ていきます。
- [Reactive Architecture: Domain Driven Design](https://cognitiveclass.ai/courses/reactive-architecture-ddd/) - DDDを用いて問題領域を管理可能な部分に分解し、それらが反応型マイクロサービスおよび反応型アーキテクチャの基礎となる方法を学びます。無料、オンライン、自習型。完了後に証明書を発行。
- [Spatie's Event Sourcing Course](https://spatie.be/products/event-sourcing-in-laravel) - Laravelでイベントソースアプリケーションを構築する方法を学びます。Spatieのイベントソースパッケージを使用します。動画コンテンツは2時間、それに伴う電子書籍も提供されています。

<a id="video-collections"></a>
## 動画コレクション

- [DDD Europe](https://dddeurope.com/videos) - DDDヨーロッパでの講演の録画。
- [SkillsCasts by SkillsMatter](https://skillsmatter.com/skillscasts) - DDDを検索すると、グレッグ・ユン、アルベルト・ブランドオーニ、ダン・ノースなどによるさまざまな講演が返されます。
- [Alberto Brandolini: Event Storming](https://www.youtube.com/watch?v=veTVAN0oEkQ&list=PLve553MhJLs4YkEnHmOjWJv0B-6WY0-JI) - アルベルト・ブランドオーニによるイベントストーミング講演のYouTubeコレクション。
- [GlobalAppTesting TechTalks](https://vimeo.com/showcase/gatengineering) - DDDおよびCQRSに特化したVimeoチャンネル。
- [Greg Young](https://www.youtube.com/watch?v=JHGkaShoyNs&list=PL5XpN_ZVafKLePdxruDfdfi-IiZtXz-k9) - グレッグ・ユンによるさまざまな講演のYouTubeコレクション。
- [Explore DDD videos](https://www.youtube.com/channel/UCcpKGt6MVvz7dISXLlMGmag) - Explore DDDカンファレンスで行われた講演の録音ファイル
- [KanDDDinsky](https://www.youtube.com/channel/UCJCpnslPdb_Dl8DKokXC3HA) - KanDDDinskyで行われた講演のYouTubeコレクション
- [Virtual Domain-driven design](https://www.youtube.com/channel/UCob_jOzzpxBp-di-x0vLlwA) - Virtual Domain-driven designのミーティングセッションの録画を収録したYouTubeコレクション
- [Visuality DDD webinars](https://youtube.com/playlist?list=PLvMNoWK93wtnu9JcSEYnFRgzqbxtLtZZ4) - Ruby on RailsにおけるDDDに焦点を当てたウェビナーのYouTubeコレクション
- [The Art of Discovering Bounded Contexts by Nick Tune](https://www.youtube.com/watch?v=ez9GWESKG4I) - 2017年のDevoxxUKでのセッション：bounded contextの定義方法

<a id="community-resources"></a>
## コミュニティリソース

- [DDD/CQRS Google Group](https://groups.google.com/forum/?utm_source=digest&utm_medium=email#!forum/dddcqrs) - 質問を投げかけたり、DDD/CQRSに関する細かい知識を学ぶために活用できるメールマガジンと優れたリソース
- [DDD-es Google Group](https://groups.google.com/g/ddd-es) - スペイン語でDDDを議論するGoogleグループ
- [DDDinPHP Google Group](https://groups.google.com/forum/#!forum/dddinphp) - PHPの文脈におけるDDD、CQRS、Event Sourcing、Model Storming、Hexagonal Architecture、分散システム、Reactiveなどに関する議論の場
- [EventStorming Google Group](https://groups.google.com/g/eventstorming) - EventStormingに関する議論をするGoogleグループ
- [DDD in Ruby on Rails](https://www.visuality.pl/posts/introduction-to-ddd-in-ruby-on-rails) - Ruby on RailsにおけるDDDに関する記事のコレクション
- [DDD in Ruby subreddit](https://www.reddit.com/r/ddd_ruby/) - DDDに興味があるRuby開発者向けのRedditコミュニティ
- [DDD/CQRS/ES Discord](https://github.com/ddd-cqrs-es/community) - DDD、CQRS、Event Sourcing、あるいは偶然の話題について話すためのDiscord（旧Slack）チーム。メインチャンネルは言語やフレームワークに依存しない。
- [Domain StoryTelling Discord](https://discord.gg/KsYaHNNn33) - DDDに関するストーリーテリング（#domain-storytellingチャンネル）に関するDiscordチーム（ [@hofstef](https://twitter.com/hofstef) による）。ホームページは [domainstorytelling.org](http://domainstorytelling.org/) にあります。
- [Software Engineering Stack Exchange](http://softwareengineering.stackexchange.com/questions/tagged/domain-driven-design) - Software Engineering Stack Exchangeに投稿された*domain-driven-design*タグ付きの質問
- [Code Review Stack Exchange](http://codereview.stackexchange.com/questions/tagged/ddd) - Code Review Stack Exchangeに投稿された*domain-driven-design*タグ付きの質問
- [Stack Overflow](https://stackoverflow.com/questions/tagged/domain-driven-design) - Stack Overflowに投稿された*domain-driven-design*タグ付きの質問
- [Advanced Topics in Event Sourcing / CQRS / DDD](https://github.com/sebastianharko/adv-es-cqrs-ddd) - @[sebastianharko](https://github.com/sebastianharko)が編集・維持しているEvent Sourcing / CQRS / DDDに関する高度なトピックリスト
- [Quora](https://www.quora.com/topic/Domain-Driven-Design-DDD) - *domain-driven-design*タグ付きの質問
- [wolkenkit Slack](http://slackin.wolkenkit.io/) - DDD、event-sourcing、CQRSおよびwolkenkitに関するSlackチーム
- [Awesome Event Storming](https://github.com/mariuszgil/awesome-eventstorming) - Event Stormingに特化したawesomeリスト
- [Awesome Domain Storytelling](https://github.com/hofstef/awesome-domain-storytelling) - 素晴らしいリストで、ドメインストーリーテリングにのみ焦点を当てる.
- [Virtual Domain-driven design community](https://virtualddd.com) - オンラインミートアップによるパネルディスカッション、オンラインコラボレーション、リソース共有.
- [Domain-driven design heuristics](https://www.dddheuristics.com/) - ドメインドリブンデザインヒューリスティクスは、デザインヒューリスティクスの記録と議論を行うコミュニティ運営サイトです.
- [Domain-Driven Design in dynamic languages GitHub](https://github.com/valignatev/ddd-dynamic) - GitHubにおけるドメインドリブンデザインの動的言語でのプロフィール.
- [Domain-Driven Design Crew GitHub](https://github.com/ddd-crew) - GitHubにおけるドメインドリブンデザイン・クルーのプロフィール.
- [Context Mapping by ddd-crew](https://github.com/ddd-crew/context-mapping) - 	ddd-crewによるコンテキストマッピングのキャッチアップシートとスタートキット.
- [DDD North America](https://dddna.net/) - 北米各地のライブトレーニング、イベント、ユーザーグループの開催予定.

<a id="blogs"></a>
## ブログ

- [Aardling Blog](https://aardling.eu/en/insights) - Mathias Verraesおよび他の人々によるDDDとソフトウェア設計に関する記事.
- [Nick Chamberlain](https://buildplease.com) - .NET開発者向けの有効な開発および設計アドバイス.
- [Ardalis.com](https://ardalis.com/blog) - Steve Smith. Pluralsightの著者であり、[DDD Fundamentals](https://www.pluralsight.com/courses/domain-driven-design-fundamentals)コースおよびMicrosoft [eShopOnWeb sample app](https://github.com/dotnet-architecture/eShopOnWeb)の著者です.
- [DDD Weekly](http://dddweekly.com) - DDD/CQRS/ESに関連する週間キュレーションされたリンク.
- [Daniel Whittaker](http://danielwhittaker.me) - CQRSとイベントソースについて学びたいですか？このブログにはステップバイステップの記事が多数あり、初学者にも最適です.
- [Cyrille Martraire](http://cyrille.martraire.com) - 金融業界に深く浸っており、プログラミングにも情熱をもつため、エリック・エヴァンズのドメインドリブンデザイン、TDD、BDDおよびアジャイル/XPの実践に自然と好意を持っています.
- [Jimmy Bogard](https://lostechies.com/jimmybogard/) - 私はDDD、分散システム、およびその他の略語中心の設計／アーキテクチャ／メソッドに特に注目しています.
- [CodeBetter](http://codebetter.com) - CodeBetter.Comは、ソフトウェア開発コミュニティにおける優れた実践、優れたツール、確立されたメソッドおよび技術の認識を高めるために存在しています.
- [Greg Young](https://goodenoughsoftware.net/) - Good Enough Softwareは定義上、Good Enoughである.
- [InfoQ Blog](https://www.infoq.com/domaindrivendesign/) - InfoQにおけるドメインドリブンデザインのコンテンツ.
- [Dan North](https://dannorth.net/blog/) - 行動ドリブンデザインの発明者。イベントストーミングに関するブログと講演も行っています.
- [Mike Mogosanu](http://blog.sapiensworks.com) - 維持可能なコードはビジネス上の利点です。ドメインマップ：ドメインモデリングツール「簡単で強力なドメインドリブンデザイン」の開発者です.
- [Christian Posta](http://blog.christianposta.com) - Red Hatでの主要なミドルウェアアーキテクト。オープンソースの愛好家。Apacheでのコンテナ、統合、Kubernetes、Docker、OpenShift、Fabric8のコンテイブラーです.
- [Vladimir Khorikov](http://enterprisecraftsmanship.com) - プラルスightの著者。ソフトウェア開発の原則とベストプラクティスについてのブログを執筆。
- [TechBeacon](http://techbeacon.com/) - TechBeaconに掲載された*ドメインドリブンデザイン*に関する記事。
- [Derek Comartin](http://codeopinion.com) - *ドメインドリブンデザイン*カテゴリの記事。
- [Alberto Brandolini](https://ziobrando.blogspot.it) - イベントストーミングの創始者。問題を解決するための思考は、その問題が生まれた当初の思考とは異なると主張し、頻繁にアーキテクト、メンターやコーチ、マネージャー、開発者といった視点を切り替える。
- [Jérémie Chassaing](http://thinkbeforecoding.com/) - DDD/CQRSに関するさまざまな記事。F#でグレッグ・ユンのSimpleCQRSサンプルを実装。
- [Vaughn Vernon](https://vaughnvernon.co) - ヴァーン・フォーリンは、ソフトウェア開発の独自の要件や、急速に進展する業界でスキルを高める際に直面する課題を理解している。
- [Vladik Khononov](http://vladikk.com/) - DDDに関連するさまざまな記事。
- [Eventsourcing Publications](https://blog.eventsourcing.com) - 実用的なイベントソースの導入。
- [Jef Claes](http://www.jefclaes.be/) - ドメインドリブンデザインに関する優れた記事と講演。
- [Udi Dahan](http://udidahan.com/articles/) - NServiceBusの創設者によるコンテンツ。
- [Chris Patterson](https://lostechies.com/chrispatterson/) - MassTransit分散アプリケーションフレームワークの創設者によるコンテンツ。
- [Aaron Stannard](http://www.aaronstannard.com/) - PetabridgeのCTOおよび共同創業者の視点から、Akka.NETアクターモデルフレームワークの開発者たちの視点から。
- [Roger Johansson](https://rogeralsing.com/) - 主にC#、DDD、Akka.NETについて。
- [Konrad Garus](http://squirrel.pl/blog/) - Java、Clojure、JavaScriptでのrantingとプログラミング。*cqrs*にタグ付けされた記事。
- [Oasis Digital](http://blog.oasisdigital.com/category/cqrs/) - Oasis Digitalが掲載した*cqrs*にタグ付けされたコンテンツ。
- [Adaptech](http://adaptechsolutions.net/blog/) - Adaptech Solutionsのブログ。当社の創業者であるアダム・ディミトルクは、グレッグ・ユンが「CQRS」という用語を定義する前から、その価値についてグレッグと議論した。アダムとビジネスパートナーのロバート・レプルは、イベントソースマイクロサービスの主要な実践者である。
- [Lev Gorodinski](http://gorodinski.com/) - 2013年に掲載されたDDDに関するいくつかの記事。その内容は今も関連性がある。
- [Dino Esposito](https://software2cents.wordpress.com/) - ソフトウェアアーキテクト、トレーナー、著者。[Microsoft .NET - Architecting Applications for the Enterprise (2nd Edition)](https://www.amazon.com/Microsoft-NET-Architecting-Applications-Enterprise/dp/0735685355/)を著した。
- [Dan Bergh Johnsson "Dear Junior"](http://dearjunior.blogspot.se/search/label/domain%20driven%20design) - セキュリティとアジャイルの一般に、ドメインドリブンデザインを融合した内容。若いプログラマーへ宛てたフィクションの手紙形式で書かれた。
- [the native web](https://www.thenativeweb.io/blog/2017-10-25-09-46-ddd-and-co-part-1-whats-wrong-with-crud/) - DDD & Co.シリーズ
- [Arkency](https://blog.arkency.com/) - Rubyの専門家たちが執筆したDDD、CQRS、イベントソース関連の記事のさまざまなもの。
- [Svaťa Šimara](http://svatasimara.cz/) - DDDシリーズ - 言語、ドメイン、モデリング、インフラ、PHPでの実装
- [Martin Havlišta](https://xhafan.com/blog/) - C# .NETでDDD、CQRS、TDDに関するブログ記事とコードサンプル
- [Khalil Stemmler](https://khalilstemmler.com/articles/categories/domain-driven-design) - DDDシリーズの紹介およびDDDをTypeScriptで実装する方法についての話
- [Kenny Baas-Schwegler](https://baasie.com/) - DDD、BDD、ソシオテクニカル、イベントストーミングおよび継続的デリバリーに関するブログ。
- [João Rosa](https://joaorosa.io) - ドメインドリブンデザイン、視覚的な協働、リーダーシップおよび組織設計についての個人ブログ。その他にも中間的なテーマを扱っています。 [Visual Collaboration Tools](https://leanpub.com/visualcollaborationtools/)のキュレーターであり、 [Software Crafts Podcast](https://www.softwarecraftspodcast.com/)のホスト。
- [GlobalAppTesting engineering](https://gat.engineering) - GlobalAppTestingのエンジニアリングブログで、実用的なDDDとCQRSに関する資料が掲載されています。

<a id="sample-projects"></a>
## サンプルプロジェクト

<a id="go"></a>
### Go
- [BDD in GO](https://github.com/JankariTech/bsDateServer) - Cucumber + GOを用いたBDDテストアプローチのサンプルアプリ。ブログ記事は [here](https://dev.to/jankaritech/demonstrating-bdd-behavior-driven-development-in-go-1eci) にあります。
- [Citerus DDD Sample App GO Port](https://github.com/marcusolsson/goddd) - これは [DDD Sample App](https://github.com/citerus/dddsample-core) を、Goにふさわしい形で移植しようとする試みです。アプリケーションのプレビューにはDockerで実行可能です。
- [DDD by Refactoring](https://github.com/ThreeDotsLabs/wild-workouts-go-ddd-example) - DDD、クリーンアーキテクチャ、CQRSを実用的なGoプロジェクトのリファクタリングを通じて適用するためのサーバレスアプリケーションの完全な例。詳細は <https://threedots.tech/> にあります。
- [DDD Food App](https://github.com/victorsteven/food-app-server) - 4層（ドメイン、インフラ、アプリケーション、インターフェース）を実装し、2つのドメインパターンを考慮したDDDアプリケーションのサンプル。そのために書かれたブログ記事は [here](https://dev.to/stevensunflash/using-domain-driven-design-ddd-in-golang-3ee5) にあります。
- [DDD Sample in GO](https://github.com/takashabe/go-ddd-sample) - ただのもう一つのDDDの4層を実装したサンプルアプリケーション。
- [Evolutive CRUD API](https://github.com/friendsofgo/gopherapi) - SOLID、ヘキサゴナルアーキテクチャを用いたフルCRUDのAPI実装。そのために書かれたブログ記事は <https://blog.friendsofgo.tech/> にあります。
- [Go DDD Template](https://github.com/sklinkert/go-ddd) - 価格の高いDDDとCQRSテンプレート。バリュー・オブジェクト、競合を避ける一貫性のあるコマンド、トランザクション出力ボックス付きのドメインイベント、そしてゼロからDDDを教えるチュートリアルシリーズを含む。
- [Simple Hexagonal Architecture PoC API](https://github.com/tomiok/patients-API) - ヘキサゴナルアーキテクチャパターンを用いた患者APIのプロトタイプ。
- [Azure DDD boilerplate](https://github.com/joshpme/azure-go-ddd-boilerplate) - Azure上でDDDを実装するためのボイラープレートプロジェクト。カスタムハンドラーとCosmos DBを用いたイベントソース。

<a id="net-cf"></a>
### .NET（C#/F#）
- [AppointMe](https://github.com/bravodev-hub/appointme) - .NET 10、React、モジュラリモノリス、垂直スライス、マルチテナント、CQRS、DDD、イベント駆動アーキテクチャ、持続可能なメッセージング（出力ボックス）を備えたプロダクションレベルのSaaSテンプレート。
- [Better code with DDD building blocks](https://github.com/asc-lab/better-code-with-ddd) - ソリューションは、コードの読みやすさと表現力を高めるためにDDDの戦略的パターンの活用を示しています。DDDパターンと普遍的な言語を組み合わせることで、専門家とチーム間の言語とコード内の言語のギャップを埋めます。
- [CQRS-DDD Example](https://github.com/dcomartin/DDD-CQRS-ES-Example) - GetEventStore、CommonDomain、NServiceBus、Entity Framework、SQL Server、SignalRを用いたDDD、CQRS、イベントソースの例。
- [Companion Code for Microsoft .NET Architecting Applications for the Enterprise](https://github.com/mastreeno/Merp) - イベントベースのマイクロERP。
- [ContosoUniversityCore](https://github.com/jbogard/ContosoUniversityCore) - ContosoUniversity が ASP.NET Core とフル .NET フレームワークを使用したアプリケーション
- [DDD-starter-dotnet](https://github.com/itlibrium/DDD-starter-dotnet) - DDD アプリケーションのさまざまなアプローチのサンプル実装と比較。DDD .net プロジェクトを迅速に開始するためのベースラインとして有用。
- [DDDInventoryItemFSharp](https://github.com/eulerfx/DDDInventoryItemFSharp) - ドメイン駆動設計のための自然な F# 実装
- [DDDSkeletonNet](https://github.com/andras-nemes/DDDSkeletonNet) (C#) - ドメイン駆動設計と緩い結合層の概念を紹介する .NET のフレームワークプロジェクト
- [DotNet CQRS Intro](https://github.com/asc-lab/dotnet-cqrs-intro) - イベントソースを用いたCQRS実装の例（進化型アプローチ：CQRSなし、同じモデルの分離モデルとコマンド、分離モデルとコマンド、分離モデルと分離ストレージ、イベントソース）。
- [EISK](https://github.com/eisk) - .NET CLI と VS テンプレートによるシンプルなケースで、.NET Core 上のスケーラブルアプリケーションをアーキテクチャのベストプラクティス（DDD、オンネンアーキテクチャなど）に基づいて構築するもの
- [EmailMaker](https://github.com/xhafan/emailmaker) - メールマーケティング ASP.NET Core MVC および ASP.NET MVC デモアプリで [CoreDdd](https://github.com/xhafan/coreddd) の使用を示す
- [Equinox Project](https://github.com/EduardoPires/EquinoxProject) - フル ASP.NET Core 3.1 アプリケーションでクリーンアーキテクチャ、DDD、CQRS およびイベントソースの概念を実装
- [eShopOnWeb](https://github.com/dotnet-architecture/eShopOnWeb) - Microsoft が提供するフル ASP.NET Core 3.1 リファレンスアプリケーションで、モノリスックデプロイメントアーキテクチャを示す
- [eShopOnContainersDDD](https://github.com/volak/eShopOnContainersDDD) - eShop フルスタック例でカタログ、バスケット、チェックアウト、注文のバウンドコンテキストを示す
- [Example of Domain-Driven Design in F#](https://gist.github.com/swlaschin/2ad8627d0400b2ab70e9f3da08902c9d) - チェッカーボードのゲームに対するドメイン駆動設計の例。2つのファイルがある：設計のスクラッチファイルと最終版。
- [Event Sourcing .NET](https://github.com/oskardudycz/EventSourcing.NetCore) - .NET におけるイベントソースと CQRS に関するサンプルとリソース。また、自習用のイベントストアの構築方法を含む。
- [EventFlow.Example](https://github.com/OKTAYKIR/EventFlow.Example) - DDD、CQRS、イベントソースの例で、以下の技術スタックを含む： [EventFlow](https://github.com/eventflow/EventFlow), [EventStore](https://eventstore.com), [RabbitMQ](https://www.rabbitmq.com), [MongoDB](https://www.mongodb.com), [PostgreSQL](https://www.postgresql.org), [Docker](https://www.docker.com)
- [Fohjin](https://github.com/MarkNijhof/Fohjin) - マーク・ニホフの [CQRS](https://leanpub.com/cqrs) 書籍に付随する例プロジェクト。
- [FsUno](https://github.com/thinkbeforecoding/FsUno) - F# でのイベントソース実装サンプル。
- [IDDD Samples in .NET](https://github.com/VaughnVernon/IDDD_Samples_NET) - これらのサンプルは、ヴァーン・ヴェルンの『ドメイン駆動設計の実装』書籍から導かれた C#.NET のバウンドコンテキストです。
- [LexiQuest-Modular-DDD](https://github.com/ryletko/LexiQuest-Modular-DDD) - クリーンアーキテクチャとDDDの原則に基づいたモジュラリティを持つアプリケーションで、迅速にマイクロサービスに分割できるように設計されている。
- [Microsoft Patterns and Practices: CQRS Journey Sample Code](https://github.com/mspnp/cqrs-journey) - CQRS フィードバックのサンプルコード。
- [Modular Monolith](https://github.com/kgrzybek/modular-monolith-with-ddd) - フルモジュラリティのモノリスケ .NET アプリケーションでドメイン駆動設計アプローチを採用。
- [Modular.StarterTemplate](https://github.com/ryletko/Modular.StarterTemplate) - モジュラリティを備えたクリーンアーキテクチャ DDD スタイルのスタートテンプレートで、モジュール間の同期インタラクションが単一トランザクション内で行われる。ERP アプリケーションに最適。
- [NLayerAppV3](https://github.com/cesarcastrocuba/nlayerappv3) (.Net Core Preview 2) - N層アーキテクチャのサンプルプロジェクト。
- [OpenMind.DDD.Patterns](https://github.com/tung-le-lv/OpenMind.DDD.Patterns) - 注文管理ドメインを用いた、DDD戦術パターン（エンティティ、バリュー・オブジェクト、アグリゲート、ドメインイベント）および戦略設計（バウンド・コンテキスト、コンテキストマッピング）を網羅したC#のデモ。CQRS、イベント駆動アーキテクチャ、MongoDBを用いる。
- [Photostock CQRS-DDD Example](https://github.com/mr0zek/Photostock)
- [Reactive Trader Cloud](https://github.com/AdaptiveConsulting/ReactiveTraderCloud) - Adaptive ConsultingによるReactive Trader Cloud。
- [Sample .NET Core CQRS REST API](https://github.com/kgrzybek/sample-dotnet-core-cqrs-api) - .NET Core REST APIにおけるCQRS実装（raw SQLとDDDを用いた）およびクリーンアーキテクチャ。
- [Scritchy](https://github.com/ToJans/Scritchy) - CQRSのパイプラインなし、。 [video](http://www.youtube.com/watch?v=5DKTFZD3hu8)
- [Simple CQRS in F#](https://github.com/thinkbeforecoding/m-r) - Greg YoungによるF#でのSimpleCQRS。
- [SimpleCQRS](https://github.com/gregoryyoung/m-r) - Greg Youngによる「最もシンプルなこと」CQRSとイベントソースプロジェクト。
- [TaskoMask](https://github.com/hamed-shirbandi/TaskoMask) - .NET Coreをベースとしたタスク管理システム。DDD、CQRS、イベントソースの概念を用いる。
- [TodoMVC-DDD-CQRS-EventSourcing](https://github.com/volak/TodoMVC-DDD-CQRS-EventSourcing) - eventsourcing、cqrs、ドメインドリブンデザインを用いたtastejs/todomvcベースのTodoアプリの実装。

<a id="haskell"></a>
### Haskell
- [Eventuria gsd](https://github.com/Eventuria/gsd) - HaskellによるTodoリストアプリケーション。DDD、CQRS、イベントソース、FRPを用いる。

<a id="idris"></a>
### Idris
- [OrderTaking](http://github.com/andorp/order-taking) - 『Domain Modeling Made Functional』書の依存型による実装。バウンド・コンテキストとワークフロー図の形式化例。NodeJSでデプロイ可能なデモ。

<a id="javascript--typescript"></a>
### JavaScript / TypeScript
- [wolkenkit Sample Applications](https://docs.wolkenkit.io/latest/media/sample-applications/wolkenkit-boards/) - DDDサンプルアプリケーションのコレクション。TodoMVC、地図キャッシュアプリ、協働ボードなど。
- [Booster framework examples](https://github.com/boostercloud/booster/tree/master/docs/examples) Booster Frameworkで構築された例アプリケーション。
- [Over-engineered ToDo app](https://github.com/bitloops/ddd-hexagonal-cqrs-es-eda) - TypeScriptとNestJSで生成された、ドメインドリブンデザイン（DDD）、ヘキサゴナルアーキテクチャ、CQRS、イベントソース（ES）、イベント駆動アーキテクチャ（EDA）、行動ドリブン開発（BDD）を用いた完全な実行例。 [Bitloops Language (BL)](https://github.com/bitloops/bitloops-language)
- [`txob`](https://github.com/osbytes/txob) - PostgresとMongoDBのネイティブプラグインを用いたトランザクショナルアウトボックスイベントプロセッサ — 最低1回の配信、近いリアルタイムのウェイクアップシグナル、スムーズなシャットダウン、および水平スケーリング。

<a id="jvm-languages"></a>
### JVM言語
- [Akka CQRS ES Demo](https://github.com/mdonkers/akka-cqrs-es-demo) - Scala-AkkaでCQRSおよびイベントソースパターンを実装するデモプロジェクト。
- [Casino Engine](https://github.com/nekzabirov/IGaming-Game-Engine) - Kotlin/KtorによるプロダクションiGaming/カジノエンジン。ヘキサゴナルアーキテクチャとDDD、CQRSを示す。アグリゲートはドメインイベントを発行し、リポジトリポートはドメイン層に存在し、コマンドとクエリハンドラーはKoinで発見されたレジストリを通じて接続され、ドメインイベントは書き込みトランザクションがコミットされた後、RabbitMQに公開される。Apache 2.0。
- [DDD By Examples - Library](https://github.com/ddd-by-examples/library) - 実際のビジネス要件に基づくライブラリのサンプルプロジェクト。DDD、BDD、イベントストーミング、例マッピング、CQRSなどにより実現されたモジュラリーモノリス。
- [DDD Leaven](https://github.com/BottegaIT/ddd-leaven-v2) - Spring、JPA、テストを用いた、高度なドメインモデリングの開始に役立つDDD-CQRSサンプルv2.0プロジェクト。
- [DDD Workshop - Project Manager](https://github.com/mkopylec/project-manager) - 「自分でやる」DDDワークショップと、同時にサンプルDDDアプリケーションを提供。プロジェクトマネジメントドメインをベースにしている。
- [Event Sourcing Example](https://github.com/Pragmatists/eventsourcing-java-example) - イベントソースとCQRSのJavaコードにおける簡易な（メモリ内）例（銀行業界の用途事例を想定）。
- [Event Sourcing and CQRS Examples](https://github.com/andreschaffer/event-sourcing-cqrs-examples) - イベントソースとCQRSの実用的なJava実装例。よくある問題（イベントの順序、一意性など）に関する参考資料も提供。
- [Event Sourcing and CQRS Sample](https://github.com/pilloPl/event-source-cqrs-sample) - コマンド・クエリ責任分離（CQRS）を用いたイベントソースアプリケーションのサンプル。
- [IDDD Samples](https://github.com/VaughnVernon/IDDD_Samples) - ヴァーン・フォーリンの『ドメインドリブンデザインの実装』書籍に掲載された、ボンデッドコンテキストのサンプル。
- [Java CQRS Intro](https://github.com/asc-lab/java-cqrs-intro) - イベントソースを用いたCQRS実装の例（進化型アプローチ：CQRSなし、同じモデルの分離モデルとコマンド、分離モデルとコマンド、分離モデルと分離ストレージ、イベントソース）。
- [Kotlin DDD Sample](https://github.com/fabriciorissetto/kotlin-ddd-sample) - Kotlinで書かれたDDD/CQRSプロジェクトのサンプル。
- [EventStormingWorkshop - Designing Cloud Native Microservices On AWS](https://github.com/humank/EventStormingWorkShop/) - イベントストーミングワークショップを経て、JavaでDDDの戦略設計パターンを実装し、AWSクラウドネイティブサービスを用いてビジネスイベントベースのコーヒーショップシナリオを構築するための具体的なサンプル。
- [DDDSample](https://github.com/citerus/dddsample-core) - Spring Bootを使用したDDDプロジェクトのサンプル（元々は http://dddsample.sourceforge.net/ でホスト）。
- [Eclipse CargoTracker](https://eclipse-ee4j.github.io/cargotracker/) - このプロジェクトは、Jakarta EEプラットフォームを用いて、ドメインドリブンデザイン（DDD）といった広く採用されているアーキテクチャベストプラクティスを用いてアプリケーションを開発する方法を示しています。[The code](https://github.com/eclipse-ee4j/cargotracker/) は、実際の開発現場で開発者が扱うような非自明なアプリケーションを模倣しています。このプロジェクトは、Jakarta EEを用いて実際の企業課題（生産性、柔軟性、テスト可能性、柔軟性、保守性、スケーラビリティ、セキュリティなど）を効果的に解決する方法を、実際の体験を通じて示しています。このプロジェクトは、DDDの先駆者であるエリック・エヴァンズの会社「ドメイン・ラングュエージ」とスウェーデンのソフトウェアコンサルティング会社「Citerus」が開発した著名なオリジナル [Java DDD sample application](https://github.com/citerus/dddsample-core) を直接基にしています。
- [https://github.com/felipexw/clean-arch-ddd-intro](https://github.com/felipexw/clean-arch-ddd-intro) - マイクロナウで構築されたシンプルなDDD＋クリーンアーキテクチャ。

<a id="php"></a>
### PHP
- [DDD CQRS Todo Sample](https://github.com/ferrius/ddd-cqrs-example) - PHP 7とSymfony 5を用いたDDD CQRS ADRの六角アーキテクチャ実装。
- [DDD Modulith](https://github.com/janikredpandadev/ddd-modulith) - Symfony 7を用いたDDDのオニオンアーキテクチャ実装（モジュリス構造）。
- [DDD Wish List](https://github.com/franzose/symfony-ddd-wishlist) - Symfony 3とVue.jsを用いたPHPで構築されたアプリケーションのサンプル。
- [DDD Playground](https://github.com/jorge07/ddd-playground/) - PHPでの実装サンプル。
- [Eric Evans DDD Cargo Sample](https://github.com/codeliner/php-ddd-cargo-sample) - エリック・エヴァンズのDDD書籍で使用されたPHP 7版のキャロットサンプル。
- [Shop Cart in PHP](https://github.com/simara-svatopluk/cart) - 買い物かごのシンプルな構造を示すサンプルプロジェクト。ドメインオブジェクト、Doctrine統合、TDD、レイヤー、ユニットテスト。
- [Symfony 5 DDD ES CQRS backend](https://github.com/jorge07/symfony-5-es-cqrs-boilerplate) - SymfonyとPHP 8を用いたDDD、CQRS、イベントソースアプリケーション。

<a id="libraries-and-frameworks"></a>
## ライブラリとフレームワーク

<a id="go-1"></a>
### Go
- [Ginkgo](https://github.com/onsi/ginkgo) - GinkgoはGoのテストパッケージをベースにし、表現力の高い行動駆動開発（BDD）スタイルのテストを可能にします。
- [GOBDD](https://github.com/go-bdd/gobdd) - GO向けの小さなBDDフレームワーク。
- [GoConvey](https://github.com/smartystreets/goconvey) - ブラウザ上でGoでのテスト。`go test` と統合。Goで行動テストを書く。
- [Godog](https://github.com/cucumber/godog) - godogパッケージはGolang用の公式Cucumber BDDフレームワークであり、仕様とテストドキュメンテーションを一つの統合された全体として統合し、Given、When、Then形式のGherkin形式のシナリオを使用する。

<a id="net"></a>
### .NET
- [Aggregates.NET](https://github.com/volak/Aggregates.NET) - .NETにおけるイベントソースドメインドリブン設計モデルをNServicebusとGetEventStoreで実現。
- [AggregateSource](https://github.com/yreynhout/aggregateSource) - アグリゲートを使用したイベントソースを実行するための軽量インフラストラクチャ。
- [Akka.NET](http://getakka.net/) - Akka.NETは、.NETおよびMono上で高スレッド性、分散性、障害耐性を備えたイベント駆動アプリケーションを構築するためのツールキットおよびランタイム。
- [ABP](https://abp.io) - ASP.NET Boilerplateの継承者——N層構成、ドメインドリブン設計を採用したWebアプリケーションフレームワークで、マイクロサービスに焦点を当てたモジュラーフレームワークを提供。
- [ASP.NET Boilerplate](http://aspnetboilerplate.com/) - ASP.NET MVC、Web APIおよびASP.NET Coreに基づくアプリケーションフレームワークで、N層構成、ドメインドリブン設計を採用したWebアプリケーションを実装し、ベストプラクティスを適用。
- [ByValue](https://github.com/sm-g/ByValue) - このライブラリは、コレクションプロパティを含むValueObjectの作成を支援し、適切に実装された等価性の振る舞いを提供する。
- [Cedar.CommandHandling](https://github.com/damianh/Cedar.CommandHandling) - HTTP上のコマンドを処理するためのミドルウェア；通常はCQRSアプリケーションで使用。
- [Cirqus](https://github.com/d60/Cirqus) - d60イベントソース＋CQRSフレームワーク。
- [CommandQuery](https://github.com/hlaueriksson/CommandQuery) - 🌐ASP.NET Core ⚡AWS Lambda ⚡Azure Functions ⚡Google Cloud Functions 🌐ASP.NET Web API 2におけるコマンド・クエリ分離。
- [CoreDdd](https://github.com/xhafan/coreddd) - DDDおよびCQRSを支援するオープンソース.NETライブラリのセット、NHibernateによる永続化を含む。
- [CQRS on Azure](https://github.com/MerrionComputing/CQRSAzure) Windows AzureにおけるCQRS。
- [Dolittle](https://dolittle.com) - Dolittleでより良いアプリケーションを構築。イベントソース、マイクロサービスプラットフォームであり、開発者の生産性と簡易性を最優先に設計。
- [Edument CQRS and Intentful BDD Testing Starter Kit](https://www.cqrs.nu/) - CQRS/ESアプリケーションの構築方法に関するライブラリおよびチュートリアル、BDDスタイルのテストフレームワークを含む。
- [EventFlow](https://github.com/eventflow/EventFlow) - .NET向けのAsync/awaitを第一に設計したCQRS+ESおよびDDDフレームワーク http://geteventflow.net/.
- [Core.EventStore](https://github.com/younos1986/Core.EventStore) - CommandServiceとQueryService間の通信を支援するライブラリ。イベントがCommandServiceで発生した際、QueryServiceのMongoDbに保存されるように設計されている。
- [Its.Cqrs](https://github.com/jonsequitur/Its.Cqrs) - CQRSおよびイベントソースを支援するライブラリセットで、ドメインドリブン設計の味方を提供。
- [Marten](https://github.com/JasperFx/marten) - Postgresqlを.NETアプリケーションのドキュメントデータベースおよびイベントストアとして使用。
- [MassTransit](https://github.com/MassTransit/MassTransit) - .NET向けの分散アプリケーションフレームワーク。
- [MediatR](https://github.com/jbogard/MediatR) - リクエスト/レスポンス、コマンド、クエリ、通知、イベントをサポートし、同期および非同期で、C#のジェネリックバリアンスを用いた知的なディスパッチを実現。
- [MessageRouter](https://github.com/QuickenLoans/MessageRouter) - この動画で説明されている: [The Beating Heart of CQRS, or Actor-Based Message Routing on the CLR](https://vimeo.com/171178586) による Paulmichael Blasucci の New York F# .NET User Group の発表.
- [NetDevPack](https://github.com/netdevpack) - .NET を使用した開発効率の向上を目的とした、よく使われるクラスと実装のスマートなセット (DDD, CQRS, Specification Pattern, MediatR, Validations, Notifications).
- [NEventStore](https://github.com/NEventStore/NEventStore) - イベントソースをストレージメカニズムとして使う場合に、異なるストレージ実装を抽象化するための永続性ライブラリ.
- [NServiceBus](https://github.com/Particular/NServiceBus) - .NET 用のサービスバス.
- [OpenCQRS](https://github.com/OpenCQRS/OpenCQRS) - OpenCQRS は DDD, CQRS, イベントソースをサポートする .NET フレームワークであり、シンプルなメディエーターとして利用可能であり、Cosmos DB または Entity Framework Core をストレージとして使う場合の完全なイベントソースソリューションとしても利用可能。Service Bus, RabbitMQ, Redis Cache, Memory Cache, FluentValidation などに内蔵されたサポート機能を備えている.
- [Projac](https://github.com/yreynhout/Projac) - Projac は、さまざまなバックストアに向けたプロジエクションを書けるプロジエクションライブラリのセット.
- [shriek-fx](https://github.com/ElderJames/shriek-fx) - .NET Core 2.0 を使用して開発された、シンプルで洗練されており、有用なドメインドリブンデザインと CQRS フレームワーク.
- [SqlStreamStore](https://github.com/damianh/SqlStreamStore) - SQLベースの実装をターゲットとした .NET ストリームストアライブラリ.
- [Stratara](https://github.com/yesbert/Stratara) - .NET 用の CQRS およびイベントソースフレームワークで、タップアンドエビデンスストリームとテナント認識暗号化を提供し、統合されたメディエーター、アウトボックス、サガ、プロジエクションを提供.
- [Streamstone](https://github.com/yevhen/Streamstone) - Azure Table Storage 用のイベントストア.
- [Stringly.Typed](https://github.com/mission202/Stringly.Typed) - 文字列を .NET 型に変換する際の、より簡単で効率的な方法を提供する.
- [Xer.Cqrs](https://github.com/jeyjeyemem/Xer.Cqrs) - C# で開発された .NET Standard 1..0 をターゲットとした、CQRS パターンに基づくアプリケーションを作成するためのシンプルなライブラリ。属性ルーティングとホストされたハンドラーをサポートしている.
- [Deveel Repository](https://github.com/deveel/deveel.repository) - .NET 用のリポジトリパターンのシンプルな実装で、MongoDB および Entity Framework をサポートし、モデルにキャッシュ、ページング、バリデーションなど、さらに多くのユーティリティを拡張している.
- [Deveel Events](https:///events.deveel.org)- .NET アプリケーションにおけるイベントの公開および購読を簡単に行えるフレームワークを提供しており、複数のメッセージチャネル（例：RabbitMQ, Azure Service Bus など）およびさまざまなシリアル化形式（例：JSON, XML など）をサポートしている.

<a id="databases"></a>
### データベース
- [Event Store](https://geteventstore.com) - JavaScript で実装されたオープンソースの機能的なデータベースで、複雑なイベント処理を提供している.
- [Eventsourcing](https://eventsourcing.com) - ビジネスイベントのキャプチャおよびクエリフレームワーク.
- [Message DB](https://github.com/message-db/message-db) - Postgres 用のマイクロサービスネイティブイベントストアおよびメッセージストア。Pub/Sub、イベントソース、メッセージング、イベントドリブンマイクロサービスアプリケーション向けに完全に機能するイベントストアおよびメッセージストアを PostgreSQL で実装している.
- [Serialized](https://serialized.io) - イベントソースおよび CQRS 用の完全なプラットフォーム.

<a id="elixir"></a>
### Elixir
- [Commanded](https://github.com/slashdotdash/commanded) - CQRS/ES アプリケーション向けのコマンドハンドリングミドルウェア、アグリゲートおよびプロセスマネージャー用の純粋な関数データ構造、ポイントツーポイントメッセージルーティングなど、Elixir（Erlang VM）で実装されたもの。すべてアクター並列モデルで構成されている.
- [Event Bus](https://github.com/otobus/event_bus) - ETS をベースにした、トレース可能で拡張可能かつミニマリストなイベントバスの実装。内蔵されたイベントストアとイベントウォッチャーを備えている。
- [eventstore](https://github.com/slashdotdash/eventstore) - PostgreSQLを永続化として使用するCQRSイベントストア

<a id="javascript--typescript-1"></a>
### JavaScript / TypeScript

- [cqrs.js](http://cqrs.js.org) - node.jsにおけるCQRSの実装。含まれる [node-eventstore](https://github.com/adrai/node-eventstore), [node-cqrs-domain](https://github.com/adrai/node-cqrs-domain), [node-eventdenormalizer](https://github.com/adrai/node-cqrs-eventdenormalizer), [node-cqrs-saga](https://github.com/adrai/node-cqrs-saga)。
- [wolkenkit](https://www.wolkenkit.io/) - JavaScriptおよびNode.js向けのCQRS、DDD、イベントソースフレームワーク。
- [Bitloops Language (BL)](https://github.com/bitloops/bitloops-language) - オープンソースで、4世代のトランスパイルプログラミング言語であり、DDDおよびヘキサゴナルアーキテクチャを用いて、テスト可能、確認可能、維持可能な高品質ソフトウェアを書くことを支援します。
- [Booster](https://www.booster.cloud/) - CQRS、DDD、イベントソースを用いたオープンソースフレームワーク。すべてのインフラを活用し、高度な抽象化と規約を提供。ユーザーはビジネスロジックに集中できるように、高度なイベント駆動アプリケーションを構築できるようになります。
- [Node API Boilerplate](https://github.com/talyssonoc/node-api-boilerplate) - DDDおよびクリーンアーキテクチャアプリケーション向けのNodeJSウェブAPIのボイラプレート。
- [nestjs-hexagonal](https://github.com/Softtor/nestjs-hexagonal) - Claude CodeプラグインによるNestJSの境界コンテキスト構築。ヘキサゴナルアーキテクチャ、DDD、CQRS、イベント駆動パターンを用いる。

<a id="jvm"></a>
### JVM
- [akka-ddd](https://github.com/pawelkaczor/akka-ddd) - Akkaプラットフォーム上でCQRS/DDDベースのアプローチを用いたアプリケーション開発に必要な再利用可能なアーティファクト。
- [Apache Isis](https://isis.apache.org/index.html) - Apache IsisはJavaでドメインドリブンアプリケーションを高速開発するためのフレームワーク。
- [Axon Framework](http://www.axonframework.org/) - Axonフレームワークは、CQRS原則に基づくJavaアプリケーションを作成する開発者にとって、開発をしやすくするためのもの。
- [DDDplus framework](https://github.com/funkygao/cp-ddd-framework) - DDDに基づく複雑なビジネスアーキテクチャを実現する軽量で柔軟な開発フレームワーク。
- [JESA](https://github.com/yreynhout/JESA) -  Java向けのイベントソースアグリゲート。
- [Lagom](https://www.lagomframework.com) - Lagomフレームワークは、Java仮想マシン向けのマイクロサービスフレームワークであり、JavaおよびScala言語のAPIを提供。イベントソース/CQRSベースの永続化モジュールを含む。
- [Pure Assert](https://github.com/sympol/pure-assert) - 軽量かつ依存関係のないJavaライブラリ。純粋な入力断言とドメイン不変性を表現するためのもの。
- [SeedStack's Business Framework](http://seedstack.org/docs/business/) - ドメインドリブン設計（DDD）アプローチに基づいてビジネスロジックをコードするための構成ブロックのセット。
- [Spine Event Engine](https://spine.io/) - クラウドアプリケーション開発向けのCQRS/ESフレームワーク。プロトブの構文で境界コンテキスト、コマンド、イベント、エンティティ状態を定義。バックエンドロジックは、プロトコード生成に基づくJavaで実装。Java、JSまたはDartのクライアントコードはgRPCを介してバックエンドと通信。
- [Ahoo-Wang/Wow](https://github.com/Ahoo-Wang/Wow) - DDDおよびイベントソースに基づく現代的な反応型CQRSアーキテクチャマイクロサービス開発フレームワーク。

<a id="php-1"></a>
### PHP
- [Broadway](https://github.com/broadway/broadway) - Broadwayは（PHP）プロジェクトで、CQRSおよびイベントソースアプリケーションのインフラとテスト支援を提供。
- [CodefyPHP Framework](https://github.com/codefyphp/) - ドメインドリブン設計、CQRS、イベントソースを用いて複雑なアプリケーションをコード化・構築するためのPHPフレームワーク。
- [Ecotone](http://ecotone.tech) - PHPにおけるメッセージ駆動アーキテクチャを可能にし、DDDおよびCQRSの原則を実現するための構成ブロックを提供。
- [PHP Glossary](https://github.com/javanile/php-glossary) - 項の分析を適用して、領域用語と範囲外用語をDDD方式で抽出する。

<a id="python"></a>
### Python
- [Eventsoucing in Python](https://github.com/johnbywater/eventsourcing) - 成熟し、安定したPythonライブラリ。イベントソーシングとDDDをサポートし、さまざまなデータベース、ドメインイベントの順序、アプリケーションレベルの暗号化、スナップショット、最適な競合制御、イベントプロセスをサポート。アプリケーションやその全体のシステムはインフラに依存せず定義でき、単一スレッド、マルチスレッド、クロック付き、ステップモード、マルチプロセス、アクターモデルなどさまざまな実行方式とインフラで動作できる。
- [dry-python](https://github.com/dry-python) - プラグイン可能なビジネスロジックコンポーネント向けのライブラリセット。
- [PyAssimilator](https://github.com/knucklesuganda/py_assimilator/) - DDD Pythonパターン、イベントベースシステム、CRUDアプリケーションを迅速に作成。SQLAlchemy、MongoDB、Redis、または純粋Pythonをサポートするデータベースアクセス用のPythonパターンセット。PyAssimilatorは、依存関係のないコードを書けるため、SQLをNoSQLに変更しても、システム内の1つのファイルも変更しなくてもよい。

<a id="ruby"></a>
### Ruby
- [Eventide](https://eventide-project.org) - Ruby向けのイベントソーシングとマイクロサービススタック。イベント駆動型、自律サービスを書くためのライブラリセット。
- [Rails Event Store](https://railseventstore.org) - Rails Event Store (RES) は、イベントの発行、消費、保存、取得を行うためのライブラリ。Railsアプリケーションでイベント駆動アーキテクチャを採用する際の最適なパートナー。

<a id="podcasts-and-interviews"></a>
## ポッドキャストとインタビュー

- [Deeper into DDD on DotNetRocks with David Real](http://dotnetrocks.com/?show=1151) - 2015年6月11日。
- [Thinking in DDD on DotNetRocks with Julie Lerman and Steve Smith](http://dotnetrocks.com/?show=1023) - 2014年8月19日。
- [Eric Evans on Domain Driven Design on DotNetRocks](http://dotnetrocks.com/?show=236) - 2007年5月10日。
- [Jimmy Nilsson on Domain Driven Design on DotNetRocks](http://dotnetrocks.com/?show=191) - 2006年8月29日。
- [Being the Worst](http://www.beingtheworst.com) - 2012年から2016年まで。
- [Software Engineering Radio Episode 225: Eric Evans on Domain-Driven Design at 10 Years](http://www.se-radio.net/2015/05/se-radio-episode-226-eric-evans-on-domain-driven-design-at-10-years/) - 2015年5月13日。
- [Software Engineering Radio Episode 218: Udi Dahan on CQRS (Command Query Responsibility Segregation)](http://www.se-radio.net/2015/01/episode-218-udi-dahan-on-cqrs-command-query-responsibility-segregation/) - 2015年1月30日。

<a id="conferences"></a>
## カンファレンス

- [Domain-Driven Design Europe](https://dddeurope.com) - DDDコンファレンス（COVID19期間中のオンライン開催）
- [EventSourcing](https://dddeurope.com/2020/#eventsourcing) - CQRS/イベントソーシングコミュニティ向けの新しいイベント
- [DDD Foundations](https://dddeurope.com/2020/#foundations) - DDD初心者向けのセレクトされたコンファレンス
- [Explore DDD - USA](http://exploreddd.com/)
- [Kandddinsky - Germany](http://kandddinsky.com/)

<a id="user-groups"></a>
## ユーザーグループ

- [Collective CFP](https://sessionize.com/ddd-meetups) - すべてのDDDユーザーグループに一括で講演を提出できる。
- [Map of user groups in Europe](https://datawrapper.dwcdn.net/9FNZI/)
- [Map of user groups in North America](https://datawrapper.dwcdn.net/nbZkd/)
- [Map of user groups in South America](https://datawrapper.dwcdn.net/GhcEA/)
- [Map of user groups in Asia](https://datawrapper.dwcdn.net/oin66/)
- [Map of user groups in Africa](https://datawrapper.dwcdn.net/yaEOa/)
- [Map of user groups in Oceania](https://datawrapper.dwcdn.net/jdLbp/)
- [Virtual](https://virtualddd.com/)
- [Worldwide](https://kommunity.com/worldwide-eventstorming) - イベントストーミングに関する具体的な情報
- [Austria](https://www.meetup.com/ddd-vienna/)
- [Barcelona](https://kommunity.com/dddbcn)
- [Belfast](https://dddbelfast.com/)
- [Belgium](http://www.meetup.com/dddbelgium/)
- [Berlin](http://www.meetup.com/Domain-Driven-Design-Berlin/)
- [Cologne/Bonn](https://www.meetup.com/Domain-Driven-Design-Koln-Bonn/)
- [Copenhagen](https://www.meetup.com/copenhagen-domain-driven-design-meetup/)
- [Cracow](http://www.meetup.com/ddd-krk/)
- [DDD Taiwan Community](https://www.facebook.com/groups/dddtaiwan/)
- [Denver](https://www.meetup.com/ddd-denver/)
- [Iran](https://t.me/ddd_iran/)
- [Greece](https://www.meetup.com/dddgreece/)
- [Hamburg](https://www.meetup.com/DDD-HH-Domain-driven-Design-Hamburg/)
- [London](http://www.meetup.com/dddlondon/)
- [Munich](https://www.meetup.com/Microservices-Meetup-Munich/)
- [Nederland](http://www.meetup.com/Domain-Driven-Design-Nederland/)
- [Norway](https://www.meetup.com/dddnorway/)
- [Phoenix](https://www.meetup.com/DDD-Phoenix)
- [Warsaw](https://www.meetup.com/DDD-WAW)
- [Wroclaw](http://www.meetup.com/DDD-WRO)
- [Russia](https://t.me/dddevotion)

<a id="tools"></a>
## ツール

- [Domain Storytelling](http://www.domainstorytelling.org/) - 関与する人々が領域を理解し、共有された理解を表現するモデルを導き出すための知識の整理技術。[print-out template](http://www.domainstorytelling.org/images/DST_Whiteboard-Kit.pdf)として提供され、オープンソースのオンラインツール [WPS Modeler](https://www.wps.de/modeler)（[source](https://github.com/wps/domain-story-modeler)）も提供。
- [DDD Toolbox](https://dddtoolbox.com) - 現代のウェブベースツールのオープンソースコレクション。領域ストーリーリングとイベントストーミング（[Source Code](https://github.com/poulainpi/ddd-toolbox)）を含む。

<a id="license"></a>
## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法的に可能である範囲で、[Nick Chamberlain](https://buildplease.com) はこの作品に関するすべての著作権および関連又は隣接する権利を放棄した。
