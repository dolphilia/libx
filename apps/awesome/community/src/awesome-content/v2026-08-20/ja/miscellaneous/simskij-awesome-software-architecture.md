---
title: "Awesome Software Architecture"
description: "Software Architectureを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-simskij-awesome-software-architecture-readme-md"
---

# Awesome Software Architecture

Software Architectureを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [原則](#principles)
- [デザインパターン](#design-patterns)
  - [スケーラビリティとレジリエンス](#scalability-and-resilience)
- [方法論](#methodology)
- [ドキュメント](#documentation)
- [ワークショップ形式](#workshop-formats)
- [モデリング](#modeling)
- [ツール](#tools)
- [フレームワーク](#frameworks)
  - [Agile](#agile)
  - [リーンソフトウェア開発](#lean-software-development)
  - [エクストリームプログラミング](#extreme-programming)
  - [DevOps](#devops)
- [ボーナス](#bonus)

## 原則
- [Flexibility](https://medium.com/faun/flexibility-a-software-architecture-principle-6eafe045a1d4) - 構造変更を伴わず、環境と使いやすさの要件の両方における変更へ適応できること。
- [SOLID](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) - プロジェクトの成長に伴う保守・拡張を考慮してソフトウェアを開発することに寄与します。

## デザインパターン
- [Ports and adapters pattern](https://jmgarridopaz.github.io/content/hexagonalarchitecture.html) - アプリケーションのコアロジックを、それが使用するサービスから分離します。
- [Observer pattern](https://medium.com/datadriveninvestor/design-patterns-a-quick-guide-to-observer-pattern-d0622145d6c2) - 一対多の状態変更通知。
- [Design Patterns: Elements of Reusable Object-Oriented Software, by Gamma et al](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/) - すべての始まりとなったもの :orange_book:。
- [Software Design Patterns: A Guide](https://airbrake.io/blog/design-patterns/software-design-patterns-guide) - 一般的なソフトウェアデザインパターンの紹介。
- [CQRS](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs) - 別個のインターフェースを使用して、データを読み取る操作をデータ更新操作から分離します。
- [Event Sourcing](https://docs.microsoft.com/en-us/azure/architecture/patterns/event-sourcing) - ドメイン内のデータの現在状態だけを保存する代わりに、そのデータに対して行った完全な一連のアクションを追記専用ストアで記録します。
- [Feature Toggles](https://www.martinfowler.com/articles/feature-toggles.html) - Feature Toggles（Feature Flagsとも呼ばれることが多い）は、コードを変えずにチームがシステムの振る舞いを変更できる強力な技術です。
- [Behavior Driven Development (BDD) and Functional Testing](https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2) - BDDは、人間が読めるソフトウェアユーザー要件の説明をソフトウェアテストの基礎として使います。
- [N-tier architecture style](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier) - レイヤーは責任を分離し、依存関係を管理する方法です。

### スケーラビリティとレジリエンス
- [Circuit Breaker](https://martinfowler.com/bliki/CircuitBreaker.html) - カスケード障害を防ぐため、障害中のリソースを保護します。
- [Bulkhead](https://docs.microsoft.com/en-us/azure/architecture/patterns/bulkhead) - 障害を分離するためリソースを分割します。
- [Leader Election](https://docs.microsoft.com/en-us/azure/architecture/patterns/leader-election) - リーダー選出により分散ワークロードを調整します。

## 方法論

- [No silver bullet, by Brooks](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf) - 小さな増分でソフトウェアを成長させる主張 :orange_book:。
- [Clean Architecture, by Martin](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164) - 持続可能で保守しやすいソフトウェアを構築するための主要原則と概念 :orange_book:。
- [Technical Debt, by Fowler](https://martinfowler.com/bliki/TechnicalDebt.html) - 技術的負債を蓄積するコストと影響。
- [The Magic Tricks of Testing, by Metz](https://www.youtube.com/watch?v=URSWYvyc42M) - ソフトウェアテストへの実践的・実用的アプローチとしてのミニマリズムの理想 🎥。
- [TDD, Where did it all go wrong?, by Cooper](https://www.infoq.com/presentations/tdd-original/) - 結合度を減らすためのTDDプラクティスと境界に関する提案 🎥。

## ドキュメント

- [arc42](https://arc42.org/) - ソフトウェア・システムアーキテクチャの文書化とコミュニケーション向けテンプレート。
- [Architectural Decision Records](https://adr.github.io/) - コードと同じようにアーキテクチャ上の決定をバージョン管理・文書化します。
- [Documenting architecture](https://dzone.com/articles/documenting-architecture-1) - ソフトウェアアーキテクチャを効果的に文書化する実用的なヒント。


## ワークショップ形式

- [Event Storming](https://www.eventstorming.com/) - ドメイン駆動設計を探求するための形式。
- [MoSCoW Prioritization](https://www.knowledgehut.com/blog/agile/how-to-prioritise-requirements-with-the-moscow-technique) - 要件の高速で非常に単純な優先順位付け方法。
- [Story mapping](https://www.jpattonassociates.com/wp-content/uploads/2015/03/story_mapping.pdf) - ストーリーマップを作成して要件を可視化します。
- [Impact mapping](https://www.impactmapping.org/) - 製品構築とプロジェクト提供に使用される戦略的計画手法。
- [Business Model Canvas](https://en.wikipedia.org/wiki/Business_Model_Canvas) - シンプルで視覚的な事業計画。
- [Business Model Generation, by Osterwalder & Pigneur](https://www.amazon.com/Business-Model-Generation-Visionaries-Challengers/dp/0470876417) - 価値提案、コスト、収益源を容易に可視化します :orange_book:。

## モデリング

- [The C4 Model](https://c4model.com/) - Context、Containers、Components、Codeを使ってソフトウェアを記述します。
- [Wikipedia: Data modeling](https://en.wikipedia.org/wiki/Data_modeling) - データモデリングへの優れた短い入門。

## ツール

- [Sparx Systems Enterprise Architect](https://sparxsystems.com/products/ea/index.html) - オブジェクト指向モデリングスイート。Windowsでのみネイティブに利用可能。
- [Visual Paradigm](https://www.visual-paradigm.com/) - Enterprise Architectに類似。複数プラットフォームで利用可能。
- [Lucidchart](https://www.lucidchart.com) - 有料のクラウドベース図エディター。すべての一般的なプラットフォームで利用可能。
- [Draw.io](https://www.draw.io) - 無料でシンプルな図エディター。Visioなどに匹敵します。すべての一般的なプラットフォームで利用可能。
- [Structurizr](https://structurizr.com) - C4 Model（上記）に基づくモデリングツール。
- [PlantUML](http://plantuml.com/) - 図向けのmarkdownのように、PlantUMLは英語に似た文法を図へレンダリングします。
- [PlantUML for Atlassian](https://marketplace.atlassian.com/apps/1215115/plantuml-for-confluence-cloud?hosting=cloud&tab=overview) - atlassianスイートにPlantUMLベース図のサポートを追加します。
- [Sketchboard.io](https://sketchboard.io/) - 共同スケッチボーディング。
- [ERD Lab](https://www.erdlab.io/) - 開発者向けに作られた無料クラウドベースのエンティティ関係図（ERD）ツール。
- [Pumler](https://pumler.com) - PlantUML、Mermaid、Structurizr（C4）向け、ブラウザーベースのPNG/SVGエクスポートを持つリアルタイム共同テキストから図へのエディター。

## フレームワーク

### Agile

- [Scrum](https://www.scrumguides.org/) - 複雑な製品を開発・保守するためのフレームワーク。
- [SAFe](https://www.scaledagileframework.com/) - スケーラブルなアジャイルフレームワーク。
- [Nexus](https://www.scrum.org/resources/scaling-scrum) - Scrum共同作成者Ken SchwaberによるスケーラブルScrum。
- [The death of Agile, by Allen Holub](https://www.youtube.com/watch?v=HZyRQ8Uhhmk&feature=youtu.be) - 「Agile」がアジリティの基本原則からどのように離れ、改善に何が必要か 🎥。
- [Agile Architecture Pt. 1, by Allen Holub](https://www.youtube.com/watch?v=0kRCFVGpX7k) - アジャイル世界でアーキテクチャをどのように扱うか 🎥。
- [Agile Architecture Pt. 2, by Allen Holub](https://www.youtube.com/watch?v=txbS0WJC1bo) - アジャイル世界でアーキテクチャをどのように扱うか 🎥。
### リーンソフトウェア開発

- [Wikipedia: Lean Software Development](https://en.wikipedia.org/wiki/Lean_software_development) - ソフトウェア開発領域に向けたリーン製造の翻訳。
- [Rolling rocks downhill, by Clarke Ching](https://www.amazon.com/Rolling-Rocks-Downhill-Software-Projects/dp/1505446511) - アジャイルとリーンソフトウェア開発に関するビジネス小説 :orange_book:。
- [The Goal: A Process of Ongoing Improvement, by Goldratt](https://www.amazon.com/Goal-Process-Ongoing-Improvement/dp/0884270610) - 製造環境における継続的改善に関するビジネス小説。ソフトウェア開発にも容易に適用できます :orange_book:。
### エクストリームプログラミング

- [Extreme Programming](http://www.extremeprogramming.org/) - 人気のアジャイルプロセスの中で最も具体的で、エンジニアリングと開発プラクティスに焦点を当てます。

### DevOps

- [Wikipedia: DevOps](https://en.wikipedia.org/wiki/DevOps) - 高品質を維持しつつ市場投入までの時間を短縮する、ソフトウェア開発と運用プラクティスの組み合わせ。
- [The Phoenix Project, by Gene Kim et al](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592) - IT、Devops、ビジネスの勝利を支援すること :orange_book:。
- [The Unicorn Project, by Gene Kim](https://www.amazon.com/Unicorn-Project-Developers-Disruption-Thriving-ebook/dp/B07QT9QR41) - 開発者、デジタル破壊、データ時代の繁栄 :orange_book:。
- [Keep CALMS and carry on](https://dwpdigital.blog.gov.uk/2019/03/25/keep-calms-and-carry-on-how-we-do-devops/) - BPDTSがDevOps適応の参照としてCALMSモデルを使う方法。
- [Chaos Engineering at Netfix](https://www.youtube.com/watch?v=6ilMZqKdMMU) - Chaos Engineeringは、スケールでの分散システムの振る舞いに信頼を築くソフトウェアエンジニアリング内の新しい規律です 🎥。
- [Adidas DevOps Maturity Framework](https://github.com/adidas/adidas-devops-maturity-framework) - C.A.L.M.S.のDevOps定義に基づき、採用するとチームの効率、効果、幸福を高める能力とガイドラインのセットを定義します。
## ボーナス

- [How to learn software design and architecture - a roadmap](https://www.freecodecamp.org/news/software-design/) - ソフトウェアアーキテクチャの確かな理解に役立つ、さらに学ぶべきこと。
- [Software Architect Roadmap](https://roadmap.sh/software-architect) - ソフトウェアアーキテクトになるための完全で構造化されたガイド。

## 貢献

このリストをさらに良くすることに貢献したいですか？素晴らしいです！ただし開始前に、<a href="code_of_conduct.md">行動規範</a>と<a href="contributing.md">貢献ガイドライン</a>をご覧ください。

## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律の下で可能な限り、[simskij](https://github.com/simskij)はこの作品に関するすべての著作権および関連・隣接する権利を放棄しました。
