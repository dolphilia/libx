---
title: "Awesome Event-Driven Architecture"
description: "Event-Driven Architectureを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-lutzh-awesome-event-driven-architecture-readme-md"
---

# Awesome Event-Driven Architecture

Event-Driven Architectureを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
  
- [📕 記事](#-articles)
  - [基礎](#foundational)
  - [経験報告・実践](#experience-reports-and-practicalities)
- [📺 動画](#-videos)
  - [基礎](#foundational-1)
  - [経験報告・実践](#experience-reports-and-practicalities-1)
- [関連トピック](#related-topics)
  
## 📕 記事
### 基礎
- [Going “Events-First” for Microservices with Event Storming and DDD](https://medium.com/russmiles/going-events-first-for-microservices-with-event-storming-and-ddd-8614437486f0) - Russ Miles、2016 年 10 月。「設計初期に重要なのは**物事そのものではなく**、**起きること**である。」
- [Events As First-Class Citizens](https://hackernoon.com/events-as-first-class-citizens-8633e8479493?gi=5ecff3301dfa) - Randy Shoup、2018 年 1 月。EDA で最重要な部分、すなわち実際のイベントへ焦点を当てる。
- [Why Event-First Programming Changes Everything](https://www.confluent.io/blog/journey-to-event-driven-part-1-why-event-first-thinking-changes-everything/) - Neil Avery、2019 年 1 月。「全体像」を描くのに優れた、やや長めの記事。
- [Introduction to Event-Driven Architecture](https://medium.com/microservicegeeks/introduction-to-event-driven-architecture-e94ef442d824) - Kacey Bui、2021 年 2 月。基礎のよい概要。
- [The Resurgence of Event Driven Architecture](https://kimjulianclark.medium.com/the-resurgence-of-event-driven-architecture-9c2daa41d9b6) - Kim Clark、2021 年 5 月。EDA への関心再燃の歴史的背景。Kafka とキューの高水準な比較を提供し、実行時の疎結合とリクエスト・レスポンスを明確に区別する。
- [Orchestration vs. Choreography](https://www.ben-morris.com/orchestration-vs-choreography-for-microservice-workflows/) - Ben Morris、2021 年 12 月。重要でないものも含め、あらゆるシステムは複数サービスにまたがるワークフローを含む。その処理方法には対立する考え方があり、短くバランスのよい導入を提供する。

### 経験報告・実践
- [Event Granularity: Modelling events in event driven applications](https://barryosull.com/blog/event-granularity-modelling-events-in-event-driven-applications/) - Barry O'Sullivan、2017 年 12 月。イベントに適切な粒度を見つけることについて。  
- [Moving from orchestration to choreography](https://blogit.michelin.io/choregraphy-or-orchestration-thats-the-question/) - Olivier Jauze、2021 年 3 月。Michelin による BPM オーケストレーションからイベント駆動コレオグラフィへの移行。シリーズの第 1 部で、[第 2 部](https://blogit.michelin.io/moving-from-orchestration-to-choregraphy-part-2/)と[第 3 部](https://blogit.michelin.io/moving-from-orchestration-to-choreography-part-3/)が続く。 
- [The different types of events in event-driven systems](https://blog.frankdejonge.nl/the-different-types-of-events-in-event-driven-systems/) - Frank de Jonge、2022 年 2 月。イベント分類にはさまざまなアプローチがあるが、これは非常によいもの。
- [Reliable event dispatching using a transactional outbox](https://blog.frankdejonge.nl/reliable-event-dispatching-using-a-transactional-outbox/) - Frank de Jonge、2022 年 2 月。トランザクショナルアウトボックスは、CRUD/RDBMS に永続性を基づけるサービスの重要なパターン。
- [Behind the scenes: McDonald's event-driven architecture](https://medium.com/mcdonalds-technical-blog/behind-the-scenes-mcdonalds-event-driven-architecture-51a6542c0d86) - McDonald's 技術ブログ、2022 年 8 月。詳細ではないが、大規模イベント駆動アーキテクチャについて理解しやすい事例研究。ここへの掲載は製品の推奨ではない。[第 2 部](https://medium.com/mcdonalds-technical-blog/mcdonalds-event-driven-architecture-the-data-journey-and-how-it-works-4591d108821f)もある。
- [Event Driven Architecture — 5 Pitfalls to Avoid](https://medium.com/wix-engineering/event-driven-architecture-5-pitfalls-to-avoid-b3ebf885bdb1) - Natan Silnitsky、2022 年 8 月。特に始めたばかりなら、後でフラストレーションを避けるため確認したい。末尾の「Further Reading」節も確認するとよい。 
- [5 pitfalls to avoid when implementing an Event-Driven Architecture](https://medium.com/@kris_22373/5-pitfalls-to-avoid-when-implementing-an-event-driven-architecture-7fb04d7fa7ca) - Kris Van Vlaenderen、2024 年 1 月。前の記事と非常に似て聞こえるが、重複イベントではなく実際には異なる 5 つの助言。
- [Event-Driven Patterns for Cloud-Native Banking: Lessons from What Works and What Hurts](https://www.infoq.com/articles/event-driven-banking-architecture/) - Chris Tacey-Green、2026 年 3 月。Investec での本番経験に基づき、規制環境で EDA を実行する利点・コストを扱う。

## 📺 動画
### 基礎
- [Core Decisions in Event-Driven Architecture](https://www.youtube.com/watch?v=SKXS2h3MdPM&list=PLXstpDPZ7AtX78V_JYUJX7z8RjdcB9HQq) - Duana Stanley、2019 年 10 月。全体として視聴に値する優れた講演。以下はいくつかの小さな問題。
    - 他エンティティへの参照にイベント内 ID を使う助言は誤りではないが、より深い議論が必要。
    - 「command events」という用語は好ましくない。何かはコマンドかイベントのいずれか。
    - 最後に Kafka をイベントストアとして示唆するが、それはよい考えではない。
- [Event-Driven Architectures Done Right](https://www.youtube.com/watch?v=A_mstzRGfIE&list=PLXstpDPZ7AtX78V_JYUJX7z8RjdcB9HQq) - Tim Berglund、2021 年 5 月。よい概要と明確な説明。
- [Event Driven Architecture & Governance in Action](https://www.youtube.com/watch?v=9guR3CBTG44&list=PLXstpDPZ7AtX78V_JYUJX7z8RjdcB9HQq) - Wim Debreuck、2023 年 6 月。技術的基礎を超え、イベント駆動アプリケーションのアーキテクチャ・設計プロセスへ進む講演。示す手法は普遍的ではないかもしれないが重要な洞察を提供し、特にビジネスイベントの明確さがよい。
- [Event-Driven Architecture Explained in 15 Minutes](https://www.youtube.com/watch?v=Fb_0UOD2X2I&list=PLXstpDPZ7AtX78V_JYUJX7z8RjdcB9HQq) - Dave Farley、2024 年 7 月。Dave Farley の動画を見る時間は常によい投資であり、イベント駆動アーキテクチャに関する短い解説も例外ではない。 

### 経験報告・実践
- [EDA in Practice: Building an eCommerce Platform at Cinch](https://www.youtube.com/watch?v=wM-dTroS0FA&t=493s&list=PLXstpDPZ7AtX78V_JYUJX7z8RjdcB9HQq) - Toli Apostolidis、2022 年 9 月。最初の 8 分 15 秒は無視できる（実際リンクが飛ばす）。主に AWS の宣伝だが、その後はイベント駆動アーキテクチャの現実世界での経験についてよい講演が続く。
- [What is the Transactional Outbox Pattern?](https://www.youtube.com/watch?v=5YLpjPmsPCA&list=PLXstpDPZ7AtX78V_JYUJX7z8RjdcB9HQq) - Wade Waldron、2024 年 2 月。トランザクショナルアウトボックスパターンと動作を説明する短い動画（5 分強）。
- [Shifting Gears: From Events to Event-Driven](https://www.youtube.com/watch?v=1dWJO31wpV8&list=PLXstpDPZ7AtX78V_JYUJX7z8RjdcB9HQq) - Ryan Cormack、2024 年 5 月。Motorway がイベント駆動へ移行した過程を語り、多くの基礎面も含む。 


## 関連トピック
- [Event Sourcing – What, Why & How](https://www.youtube.com/watch?v=1KlQVhVYiFU&list=PLXstpDPZ7AtX78V_JYUJX7z8RjdcB9HQq) - Anita Kvamme、2024 年 6 月。イベントベースではあるが、_Event Sourcing_ は _Event-Driven Architecture_ と同じではない。両者はよく補完するが、一方なしに他方を使うこともできる。幸い、この優れた Event Sourcing 概要は冒頭でそれを明確にする。



## 貢献

このリストは**高度にキュレーションされている**点に注意してください。原則・用語を明確に伝える点で優れたリソースを集めることが目標です。コレクション全体として主題の包括的かつ一貫した概要を提供すべきです。Awesome Lists の[ガイドライン一覧](https://github.com/sindresorhus/awesome/blob/main/pull_request_template.md)の精神に従います: _「Awesome リストはすべてではなく、最良のものをキュレーションする。」_


もちろん、リストに属する何かが欠けていると思う場合は、[Issue](https://codeberg.org/lutzh/awesome-event-driven-architecture/issues)または[プルリクエスト](https://docs.codeberg.org/collaborating/pull-requests-and-git-flow/)で追加を提案できます。




## 脚注

変更の最新情報は <a href="https://mastodon.social/@lutzhuehnken" rel="me">Mastodon</a>、[Bluesky](https://bsky.app/profile/huehnken.de)、[LinkedIn](https://de.linkedin.com/in/lutzh)でフォローしてください。興味があれば[ブログ](https://www.reactivesystems.eu/blog/)も気に入るかもしれません。


私は独立コンサルタントとして、組織がイベント駆動アーキテクチャ導入に伴う技術的・組織的課題を乗り越える支援をしています。サービスについては[//lutz huehnken _consulting*](https://www.huehnken.de)を確認してください。
