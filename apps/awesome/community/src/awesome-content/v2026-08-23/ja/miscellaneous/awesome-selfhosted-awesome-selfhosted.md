---
title: "Awesome Selfhosted"
description: "セルフホストできるアプリとネットワークサービスを用途別に紹介し、ライセンス・実装言語・外部サービスへの依存を示します。"
licenseSource: "github-awesome-selfhosted-awesome-selfhosted-readme-md"
---

# Awesome Selfhosted

セルフホストは、[SaaSS](https://www.gnu.org/philosophy/who-does-that-server-really-serve.html)の提供者を利用する代わりに、自分のサーバーでアプリケーションを運用・管理することです。このリストは、[自由なソフトウェア](https://en.wikipedia.org/wiki/Free_software)として提供される[ネットワークサービス](https://en.wikipedia.org/wiki/Network_service)と[Webアプリケーション](https://en.wikipedia.org/wiki/Web_application)を、通信、ファイル共有、開発、メディア、管理などの用途別に紹介します。[自由なソフトウェアに該当しないもの](https://github.com/awesome-selfhosted/awesome-selfhosted/blob/master/non-free.md)は別のリストで扱います。

固定原文では[HTML版](https://awesome-selfhosted.net/)の閲覧を推奨し、[Markdown版](https://github.com/awesome-selfhosted/awesome-selfhosted)を旧形式としています。

## ソフトウェア <a id="software"></a>

### データ分析 <a id="analytics"></a>

[データ分析](https://en.wikipedia.org/wiki/Analytics)は、データや統計を計算によって体系的に分析することです。データ内の意味あるパターンを発見・解釈し、伝えるために使います。

関連資料： [データベース管理](#database-management), [個人用ダッシュボード](#personal-dashboards)

- [ANALOG](https://github.com/orangecoloured/analog) - 最小限の分析ツール。10～30日間のイベントを追跡する。 `MIT` `Nodejs/Docker`
- [Aptabase](https://aptabase.com/) - プライバシーを最優先とした、モバイルおよびデスクトップアプリ向けのシンプルな分析。（[ソースコード](https://github.com/aptabase/aptabase)） `AGPL-3.0` `Docker`
- [AWStats](http://www.awstats.org/) - ウェブ、ストリーミング、FTPまたはメールサーバーのログファイルから統計を生成。（[デモ](https://www.awstats.org/#DEMO)，[ソースコード](https://github.com/eldy/awstats)） `GPL-3.0` `Perl`
- [Countly Community Edition](https://count.ly) - リアルタイムのモバイルおよびウェブ分析、クラッシュレポート、プッシュ通知プラットフォーム。（[ソースコード](https://github.com/Countly/countly-server)） `AGPL-3.0` `Nodejs/Docker`
- [d8a.tech](https://d8a.tech) - 既存のGoogle Analytics設定と連携し、ユーザーの行動を収集し、自社のプライベートデータベースに直接送信するデータ収集サービス。（[デモ](https://lookerstudio.google.com/u/0/reporting/0e4102b6-c38b-4f55-aa25-c1fe91d1c1e9)，[ソースコード](https://github.com/d8a-tech/d8a)） `MIT` `Go/Docker`
- [Daily Stars Explorer](https://emanuelef.github.io/daily-stars-explorer) `外部プロプライエタリサービス依存` - GitHubリポジトリの日々のスター数からトレンドを追跡し、時間の経過に伴う成長とコミュニティの関心を確認できます。（[デモ](https://emanuelef.github.io/daily-stars-explorer)，[ソースコード](https://github.com/emanuelef/daily-stars-explorer)） `MIT` `Go/Nodejs/Docker`
- [Druid](https://druid.apache.org) - 分散型、列指向、リアルタイムの分析データストア。（[ソースコード](https://github.com/apache/druid)） `Apache-2.0` `Java/Docker`
- [EDA](https://github.com/jortilles/EDA) - データ分析および可視化を行うウェブアプリ。（`AGPL-3.0`） `Nodejs/Docker`
- [GoAccess](http://goaccess.io/) - リアルタイムのウェブログアナライザおよびターミナル内で実行可能なインタラクティブビュー。（[ソースコード](https://github.com/allinurl/goaccess)） `GPL-2.0` `C`
- [GoatCounter](https://www.goatcounter.com) - 個人データの追跡なしで簡単なウェブ統計。（[ソースコード](https://github.com/arp242/goatcounter)） `EUPL-1.2` `Go`
- [HitKeep](https://hitkeep.com/) - 目標、ファネル、ECのトラッキング、チーム管理を備えた、プライバシーを重視するWeb分析ツール。DuckDBを内蔵した単一バイナリで動作します（Google Analytics、Plausible、Umamiの代替）。（[ソースコード](https://github.com/pascalebeier/hitkeep)） `MIT` `Go/Docker`
- [Litlyx](https://litlyx.com) - AIを使ったダッシュボードにデータを集約する、セルフホスト可能な分析ソリューション。原文では30秒で設定でき、GDPRに対応すると紹介されています。（[ソースコード](https://github.com/Litlyx/litlyx)） `Apache-2.0` `Docker`
- [Liwan](https://liwan.dev/) - プライバシーを最優先としたウェブ分析。（[デモ](https://demo.liwan.dev/p/liwan.dev)，[ソースコード](https://github.com/explodingcamera/liwan)） `Apache-2.0` `Rust/Docker`
- [Matomo](https://matomo.org/) - データと顧客のプライバシーを保護するウェブ分析（Google Analyticsの代替）。（[ソースコード](https://github.com/matomo-org/matomo)） `GPL-3.0` `PHP`
- [Medama Analytics](https://oss.medama.io) - プライバシーを最優先としたウェブサイト分析。小さく、シンプルでクッキーなし。（[デモ](https://demo.medama.io)，[ソースコード](https://github.com/medama-io/medama)） `Apache-2.0/MIT` `Docker/Go`
- [Metabase](https://metabase.com/) - 会社内の誰もが簡単に質問を立て、データから学べる手段。（[ソースコード](https://github.com/metabase/metabase)） `AGPL-3.0` `Java/Docker`
- [Middleware](https://middlewarehq.com/) - エンジニアリーダーがチームの効果を測定・分析するために設計されたツール。DORAメトリクスを使用。（[ソースコード](https://github.com/middlewarehq/middleware)） `Apache-2.0` `Docker/Python/Nodejs`
- [Netron](https://netron.app/) - ニューラルネットワークおよび機械学習モデルの可視化ツール。（[ソースコード](https://github.com/lutzroeder/netron)） `MIT` `Python/Nodejs`
- [Offen](https://www.offen.dev/) - 公正で軽量かつオープンなウェブ分析ツール。ユーザーが自らのデータに完全なアクセスを保ちながら、洞察を得る。（[デモ](https://www.offen.dev/try-demo/)，[ソースコード](https://github.com/offen/offen)） `Apache-2.0` `Go/Docker`
- [Plausible Analytics](https://plausible.io/) - シンプルでプライバシーに配慮したWeb分析。固定原文では1 KB未満で軽量と紹介されています。（[ソースコード](https://github.com/plausible/analytics/)） `AGPL-3.0` `Elixir`
- [PostHog](https://posthog.com) - プロダクト分析、セッション記録、機能フラグおよびA/Bテストを自前でホストできる（Mixpanel、Amplitude、Heap、HotJar、Optimizelyへの代替）。（[ソースコード](https://github.com/posthog/posthog)） `MIT` `Python`
- [Postiz](https://postiz.com) `外部プロプライエタリサービス依存` - 投稿の日程調整、コンテンツの成果の追跡、全ソーシャルメディアアカウントの一括管理を行うツール（Buffer、Hootsuite、Sprout Socialの代替）。（[ソースコード](https://github.com/gitroomhq/postiz-app)） `AGPL-3.0` `Docker`
- [Prisme Analytics](https://www.prismeanalytics.com) - Grafanaに基づくプライバシーに配慮したプログレッシブな分析サービス。（[ソースコード](https://github.com/prismelabs/analytics)） `AGPL-3.0/MIT` `Docker`
- [Redash](http://redash.io) - データソースに接続し、クエリを行い、データを可視化するダッシュボードを作成し、会社内で共有。（[ソースコード](https://github.com/getredash/redash)） `BSD-2-Clause` `Docker`
- [Rybbit](https://rybbit.com/) - 導入しやすいWeb・製品分析ツール。原文ではより直感的と紹介されています（Google Analyticsの代替）。（[デモ](https://demo.rybbit.com/1), [ソースコード](https://github.com/rybbit-io/rybbit)） `AGPL-3.0` `Docker`
- [Shaper](https://taleshape.com/shaper/docs) - すべてSQLで構築されたデータダッシュボード。DuckDBで駆動。（[デモ](https://demo.taleshape.com/view/pvggvdpiwb9wlyppuqbyx0nt), [ソースコード](https://github.com/taleshape-com/shaper)） `MPL-2.0` `Docker/Nodejs/Python/Go`
- [Socioboard](https://github.com/socioboard/Socioboard-5.0) `外部プロプライエタリサービス依存` - 9つのソーシャルメディアネットワークを内蔵でサポートするソーシャルメディア管理、分析、レポートプラットフォーム。 `GPL-3.0` `Nodejs`
- [Statistics for Strava](https://github.com/robiningelbrecht/statistics-for-strava) `外部プロプライエタリサービス依存` - Stravaのデータから生成された統計ダッシュボード。（[デモ](https://statistics-for-strava.robiningelbrecht.be/)） `AGPL-3.0` `Docker`
- [Superset](http://superset.apache.org/) - 現代的なデータ探索および可視化プラットフォーム。（[ソースコード](https://github.com/apache/superset)） `Apache-2.0` `Python`
- [Swetrix](https://swetrix.com/) - オープンソースのWeb分析ツール。原文ではあらゆるニーズを満たすと紹介されています。（[デモ](https://swetrix.com/projects/STEzHcB1rALV), [ソースコード](https://github.com/Swetrix/selfhosting)） `AGPL-3.0` `Docker`
- [Umami](https://umami.is/) - Google Analyticsへのシンプルで高速かつプライバシーに配慮した代替。（[デモ](https://cloud.umami.is/share/LGazGOecbDtaIwDr), [ソースコード](https://github.com/umami-software/umami)） `MIT` `Nodejs/Docker`
- [Vince](https://www.vinceanalytics.com/) - ウェブ分析とダッシュボード（Google Analyticsへの代替）。（[ソースコード](https://github.com/vinceanalytics/vince)） `AGPL-3.0` `Go/Docker/K8S/deb`

### アーカイブとデジタル保存（DP） <a id="archiving-and-digital-preservation-dp"></a>

デジタル資料の[アーカイブ](https://en.wikipedia.org/wiki/Archival_science)と[保存](https://en.wikipedia.org/wiki/Digital_preservation)のためのソフトウェアです。

関連資料： [バックアップ](#backup), [コンテンツ管理システム（CMS）](#content-management-systems-cms)

関連資料： [awesome-web-archiving](https://github.com/iipc/awesome-web-archiving)

- [ArchiveBox](https://archivebox.io/) - ブックマーク、ブラウジング履歴、RSSフィード、その他からのサイトのHTMLおよびスクリーンショットアーカイブを作成（Wayback Machineへの代替）。（[デモ](https://demo.archivebox.io/), [ソースコード](https://github.com/ArchiveBox/ArchiveBox)） `MIT` `Python/Docker`
- [ArchivesSpace](https://archivesspace.org/) - アーカイブ資料、手稿、デジタルオブジェクトを管理し、Webからアクセスできるようにするアーカイブ情報管理アプリケーションです。（[デモ](https://archivesspace.org/application/sandbox), [ソースコード](https://github.com/archivesspace/archivesspace)） `ECL-2.0` `Ruby`
- [Bichon](https://github.com/rustmailer/bichon) - IMAPアカウントから同期し、メールを全文検索用にインデックスし、REST APIを提供するメールアーカイブサーバー。外部データベースは不要で、マルチアカウントをサポートするWebUIを含む。 `AGPL-3.0` `Rust/Docker`
- [bitmagnet](https://bitmagnet.io) - BitTorrentインデクサ、DHTクロール、コンテンツ分類およびトーレント検索エンジン。WebUI、GraphQL API、Servarrスタック統合を備える。（[ソースコード](https://github.com/bitmagnet-io/bitmagnet)） `MIT` `Go/Docker`
- [CKAN](https://ckan.org) - オープンデータウェブサイトを作成。（[ソースコード](https://github.com/ckan/ckan)） `AGPL-3.0` `Python`
- [Collective Access - Providence](https://collectiveaccess.org/) - デジタルおよび物理的なコレクションの管理、記述、発見を可能にする、高度にカスタマイズ可能なウェブベースフレームワーク。さまざまなメタデータ標準、データタイプ、メディアフォーマットをサポート。（[ソースコード](https://github.com/collectiveaccess/providence)） `GPL-3.0` `PHP`
- [Eonvelope](https://dacid99.gitlab.io/eonvelope) - メールを無期限に保存できるメールアーカイブソフトウェア。（[ソースコード](https://gitlab.com/dacid99/eonvelope)） `AGPL-3.0` `K8S/Docker`
- [Ganymede](https://github.com/Zibbp/ganymede) `外部プロプライエタリサービス依存` - TwitchのVODおよびライブストリームアーカイブプラットフォーム。各アーカイブにレンダリングされたチャットを含む。 `GPL-3.0` `Docker`
- [mail-archiver](https://github.com/s1t5/mail-archiver) - Webアプリケーションで、複数アカウント（IMAP、M365またはインポート）からのメールをアーカイブ、検索、エクスポートできる。フォルダ同期、添付ファイル対応、メールボックスの移行、ダッシュボードを備える。 `GPL-3.0` `Docker`
- [Omeka S](https://omeka.org/s/) - デジタル文化遺産コレクションをオンラインの他の資料と結び付けたい機関向けのWeb公開プラットフォーム。原文では次世代のものと紹介されています。 ([ソースコード](https://github.com/omeka/omeka-s)) `GPL-3.0` `Nodejs`
- [Open Archiver](https://openarchiver.com/) - 全文検索およびeDiscovery検索機能を備えたメールアーカイブソリューション。 ([デモ](https://github.com/LogicLabs-OU/OpenArchiver?tab=readme-ov-file#-live-demo), [ソースコード](https://github.com/LogicLabs-OU/OpenArchiver)) `AGPL-3.0` `Docker`
- [Piler](https://www.mailpiler.org/) - 機能豊かなメールアーカイブソリューション。 ([ソースコード](https://github.com/jsuto/piler/)) `GPL-3.0` `C/Docker/deb`
- [Wallabag](https://www.wallabag.org) - 旧称Poche。記事を保存して読みやすい形で後から読めるWebアプリケーションです。 ([ソースコード](https://github.com/wallabag/wallabag)) `MIT` `PHP`
- [Wayback](https://github.com/wabarc/wayback) - インターネットアーカイブ、archive.today、IPFS、ローカルファイルシステムにウェブページをアーカイブするための自前ホスト型ツールキット。 `GPL-3.0` `Go`

### 自動化 <a id="automation"></a>

処理への人の介入を減らすための[自動化](https://en.wikipedia.org/wiki/Automation)ソフトウェアです。

関連資料： [モノのインターネット（IoT）](#internet-of-things-iot), [ソフトウェア開発：継続的インテグレーションとデプロイ](#software-development---continuous-integration--deployment), [メディア管理](#media-management)

- [Activepieces](https://www.activepieces.com) - ZapierやTrayのようなノーコードの業務自動化ツール。たとえばTrelloに新しいカードが追加されるたびにSlackへ通知できます。 ([ソースコード](https://github.com/activepieces/activepieces)) `MIT` `Docker`
- [Apache Airflow](https://airflow.apache.org/) - プログラム的にワークフローを作成・スケジュール・監視できるプラットフォーム。 ([ソースコード](https://github.com/apache/airflow/)) `Apache-2.0` `Python/Docker`
- [Automatisch](https://automatisch.io) - Twitter、Slackなどさまざまなサービスを接続してビジネスプロセスを自動化できるビジネスオートメーションツール（Zapierの代替）。 ([ソースコード](https://github.com/automatisch/automatisch)) `AGPL-3.0` `Docker`
- [BookBounty](https://github.com/TheWicklowWolf/BookBounty) `外部プロプライエタリサービス依存` - Library Genesisから欠落しているReadarrの本を取得。 `MPL-2.0` `Docker`
- [changedetection.io](https://changedetection.io/) - ウェブサイトのコンテンツ変更を常に把握できる。 ([ソースコード](https://github.com/dgtlmoon/changedetection.io)) `Apache-2.0` `Python/Docker`
- [ChiefOnboarding](https://chiefonboarding.com) - 従業員のオンボーディング基盤。ユーザーアカウントのプロビジョニングと、ToDo項目、資料、テキスト・メール・Slackのメッセージなどを組み合わせた一連の処理を作成できます。WebポータルとSlackボットとして利用できます。 ([ソースコード](https://github.com/chiefonboarding/ChiefOnboarding)) `AGPL-3.0` `Docker`
- [Cronicle](https://cronicle.net/) - Web UIを備えた、シンプルな分散タスクスケジューラー兼実行ツールです。 ([ソースコード](https://github.com/jhuckaby/Cronicle)) `MIT` `Nodejs`
- [Cronmaster](https://github.com/fccview/cronmaster) - 人が読める構文、リアルタイムログ、ログ履歴を備えたcronジョブ管理UIです。 `AGPL-3.0` `Docker`
- [Dagu](https://docs.dagu.cloud/) - Web UIを備えたcronの代替ツール。コマンド間の依存関係を有向非巡回グラフ（DAG）として宣言的なYAMLで定義できます。 ([ソースコード](https://github.com/dagucloud/dagu)) `GPL-3.0` `Go/Docker`
- [Discount Bandit](https://discount-bandit.cybrarist.com/) `外部プロプライエタリサービス依存` - アマゾン、Ebay、ワルマートなど複数のストアにおける商品の価格や在庫状況を追跡。 ([ソースコード](https://github.com/Cybrarist/Discount-Bandit)) `GPL-3.0` `PHP/Docker`
- [Dittofeed](https://www.dittofeed.com) - マルチチャネル顧客エンゲージメントおよびメッセージ自動化プラットフォーム（Braze、Customer.io、Iterableの代替）。 ([デモ](https://demo.dittofeed.com/dashboard/journeys), [ソースコード](https://github.com/dittofeed/dittofeed)) `MIT` `Docker`
- [feedmixer](https://github.com/cristoper/feedmixer) - フィードURLのリストを受け取り、各フィードから最新のn件を含む新しいフィードを返すマイクロウェブサービス（Atom、RSS、またはJSONを返す）。 ([デモ](https://mretc.net/feedmixer/json?f=https://hnrss.org/newest&f=https://americancynic.net/atom.xml&n=1)) `WTFPL` `Python`
- [flowctl](https://flowctl.net) - 承認、リモート実行、スケジュールを備えたセルフサービスワークフロー実行プラットフォーム。 ([デモ](https://demo.flowctl.net), [ソースコード](https://github.com/cvhariharan/flowctl)) `Apache-2.0` `Go/Docker`
- [Fredy](https://fredy.orange-coding.net/) `外部プロプライエタリサービス依存` - ImmoScout24やImmoweltなどで、ドイツの新しく掲載されたアパート・住宅・フラットを検索し、SlackやTelegramなどへ結果を即時に届けます。 ([デモ](https://fredy-demo.orange-coding.net), [ソースコード](https://github.com/orangecoding/fredy)) `Apache-2.0` `Nodejs/Docker`
- [gocron](https://github.com/flohoss/gocron) - タスクスケジューラで、ユーザーがシンプルなYAML設定ファイルを使って繰り返し実行するジョブを指定できます。 `MIT` `Docker`
- [HandBrake Web](https://github.com/TheNickOfTime/handbrake-web) - ウェブインターフェースを使ってヘッドレスデバイスにHandBrakeのビデオトランスコーダを1つ以上使用できます。 `AGPL-3.0` `Docker`
- [Healthchecks](https://healthchecks.io/) - ピングを受信し、ピングが遅れた場合にアラートを送信します。 ([ソースコード](https://github.com/healthchecks/healthchecks)) `BSD-3-Clause` `Python/Docker`
- [HomeButler](https://homebutler.dev) - ホスト、Dockerサービス、ウェイクオンLAN、インベントリ、リモート操作の監視を行うホームラボ管理ツールで、ウェブダッシュボードとMCP統合を備えています。 ([ソースコード](https://github.com/Higangssh/homebutler)) `MIT` `Docker/Go`
- [Huginn](https://github.com/huginn/huginn) - 監視と操作を代行するエージェントを構築できます。 `MIT` `Ruby`
- [Kestra](https://kestra.io) - コードで作成・スケジュール・監視できるイベント駆動型で、言語に依存しないプラットフォーム。データパイプラインやETL、ELTなどのタスクを調整できます。 ([ソースコード](https://github.com/kestra-io/kestra)) `Apache-2.0` `Docker`
- [Kibitzr](https://kibitzr.github.io) - 強力な統合機能を備えた軽量な個人用ウェブアシスタント。 ([ソースコード](https://github.com/kibitzr/kibitzr)) `MIT` `Python`
- [LazyLibrarian](https://gitlab.com/LazyLibrarian/LazyLibrarian) `外部プロプライエタリサービス依存` - 著者をフォローし、すべてのデジタル読書ニーズに必要なメタデータを取得できます。Goodreads、Librarything、オプションでGoogleBooksを情報源として使用します。 `GPL-3.0` `Python`
- [Leon](https://getleon.ai) - サーバーに常駐できる個人アシスタント。 ([ソースコード](https://github.com/leon-ai/leon)) `MIT` `Nodejs`
- [Matchering](https://github.com/sergree/matchering) - 自動化された音楽マスタリング（LANDR、eMastered、MajorDecibelの代替）。 `GPL-3.0` `Docker`
- [Mylar3](https://mylar.nerdfirehurricane.com/) - NZBとトレントに対応する、コミック（cbr/cbz）を自動ダウンロードするプログラムです。 ([ソースコード](https://github.com/MylarComics/mylar3)) `GPL-3.0` `Python/Docker`
- [OliveTin](https://www.olivetin.app/) - Linuxシェルコマンドを実行するためのウェブインターフェース。 ([ソースコード](https://github.com/OliveTin/OliveTin)) `AGPL-3.0` `Go`
- [pyLoad](https://pyload.net/) - rapidshare.comやuploaded.toのような1クリックホスティングサイト向けの軽量、カスタマイズ可能でリモート管理可能なダウンローダー。 ([ソースコード](https://github.com/pyload/pyload)) `AGPL-3.0` `Python`
- [StackStorm](https://stackstorm.com) - 自動修復、セキュリティ対応、問題解決、デプロイなどに使うイベント駆動型自動化ツール。「運用向けIFTTT」に例えられています。固定原文ではルールエンジン、ワークフロー、160の統合パックと6000以上のアクション、ChatOpsを挙げています。 ([ソースコード](https://github.com/StackStorm/st2)) `Apache-2.0` `Python`
- [µTask](https://github.com/ovh/utask) - YAMLに宣言されたビジネスプロセスをモデル化・実行する自動化エンジン。 `BSD-3-Clause` `Go/Docker`

### バックアップ <a id="backup"></a>

[バックアップ](https://en.wikipedia.org/wiki/Backup)ソフトウェア。

関連資料： [awesome-sysadmin/Backups](https://github.com/awesome-foss/awesome-sysadmin#backups)

関連資料： [アーカイブとデジタル保存（DP）](#archiving-and-digital-preservation-dp)

### ブログ基盤 <a id="blogging-platforms"></a>

[ブログ](https://en.wikipedia.org/wiki/Blog)は、日記のような個別の文章（投稿）で構成される、議論や情報提供のためのWebサイトです。

関連資料： [静的サイトジェネレーター](#static-site-generators), [コンテンツ管理システム（CMS）](#content-management-systems-cms)

関連資料： [WeblogMatrix](https://www.weblogmatrix.org/)

- [Antville](https://antville.org) - 高性能で多機能なブログホスティングソフトウェアの開発を目指す、自由なオープンソースプロジェクトです。 ([ソースコード](https://github.com/antville/antville)) `Apache-2.0` `Javascript`
- [Castopod](https://castopod.org) - Podcast 2.0規格、自動Fediverseフィード、分析、埋め込みプレーヤーなどを備えたポッドキャスト管理・ホスティングプラットフォーム。原文では当時最新の規格に対応すると紹介されています。 ([ソースコード](https://code.castopod.org/adaures/castopod)) `AGPL-3.0` `PHP/Docker`
- [Chyrp Lite](https://chyrplite.net) - 軽量なブログエンジン。原文では特に優れており、軽量と紹介されています。 ([ソースコード](https://github.com/xenocrat/chyrp-lite)) `BSD-3-Clause` `PHP`
- [Dotclear](https://git.dotclear.org/dev/dotclear) - あなたのブログを完全にコントロールできます。 `GPL-2.0` `PHP`
- [Ech0](https://echo.soopy.cn/) - 個人のアイデア共有に特化した軽量なフェデレート出版プラットフォーム（中国語のドキュメントあり）。 ([デモ](https://memo.vaaat.com/), [ソースコード](https://github.com/lin-snow/Ech0)) `AGPL-3.0` `Docker/K8S`
- [FlatPress](https://flatpress.org/) - 軽量で設定が簡単なフラットファイルブログエンジン。（[ソースコード](https://github.com/flatpressblog/flatpress)） `GPL-2.0` `PHP`
- [fx](https://github.com/rikhuijzer/fx) - 構文ハイライト、モバイルからの投稿などを備えるマイクロブログツール（Twitter、Blueskyの代替）。 `MIT` `Docker`
- [Ghost](https://ghost.org/) - ただのブログプラットフォーム。（[ソースコード](https://github.com/TryGhost/Ghost)） `MIT` `Nodejs`
- [Haven](https://havenweb.org/) - Markdown編集とRSSリーダーを備えた、非公開ブログ向けのシステムです。（[デモ](https://havenweb.org/demo.html)，[ソースコード](https://github.com/havenweb/haven)） `MIT` `Ruby`
- [HTMLy](https://www.htmly.com/) - データベースを使わないPHPブログプラットフォーム。フラットファイルCMSで、原文では高速で安全かつ高機能なWebサイトやブログを数秒で作れると紹介されています。（[デモ](http://demo.htmly.com/)，[ソースコード](https://github.com/danpros/htmly)） `GPL-2.0` `PHP`
- [Known](https://withknown.com/) - 協働型ソーシャル発信プラットフォーム。（[ソースコード](https://github.com/idno/idno)） `Apache-2.0` `PHP`
- [Mataroa](https://mataroa.blog/) - 装飾を抑えたミニマリスト向けのブログプラットフォームです。（[ソースコード](https://github.com/mataroablog/mataroa)） `MIT` `Python`
- [PluXml](https://pluxml.org) - XMLベースのブログ／CMSプラットフォーム。（[ソースコード](https://github.com/pluxml/PluXml)） `GPL-3.0` `PHP`
- [Serendipity](https://docs.s9y.org/) - Serendipity（s9y）は、Smartyテンプレートを使用した高度に拡張可能でカスタマイズ可能なPHPブログエンジン。（[ソースコード](https://github.com/s9y/serendipity)） `BSD-3-Clause` `PHP`
- [WriteFreely](https://writefreely.org) - ミニマルな連合型ブログやコミュニティ全体を立ち上げるための文章公開ソフトウェア。（[ソースコード](https://github.com/writefreely/writefreely)） `AGPL-3.0` `Go`

### 予約と日程調整 <a id="booking-and-scheduling"></a>

イベントの日程調整、予約、面談などの予定を管理するソフトウェアです。

関連資料： [アンケートとイベント](#polls-and-events), [グループウェア](#groupware)

- [Alf.io](https://alf.io/) - チケット予約システム。（[デモ](https://demo.alf.io/authentication)，[ソースコード](https://github.com/alfio-event/alf.io)） `GPL-3.0` `Java`
- [Cal.diy](https://cal.diy/) - オンライン予約スケジュールシステム。（[ソースコード](https://github.com/calcom/cal.diy)） `MIT` `Nodejs`
- [Easy!Appointments](https://easyappointments.org/) - 顧客がWebから面談などの予約を取れるようにします。（[デモ](https://demo.easyappointments.org/)，[ソースコード](https://github.com/alextselegidis/easyappointments)） `GPL-3.0` `PHP`
- [Hi.Events](https://hi.events) - 会議、コンサートなどに向けたイベント管理およびチケット販売プラットフォーム。カスタマイズ可能なイベントページと埋め込み可能なチケットウィジェットを提供。（[デモ](https://demo.hi.events/event/1/dog-conf-2030)，[ソースコード](https://github.com/HiEventsDev/hi.events)） `AGPL-3.0` `Docker`
- [LibreBooking](https://librebooking.readthedocs.io/) - 柔軟でモバイル対応かつ拡張可能なインターフェースを提供し、組織がリソースの予約を管理できるリソーススケジュールソリューション。（[デモ](https://librebooking-demo.fly.dev/)，[ソースコード](https://github.com/LibreBooking/librebooking)） `GPL-3.0` `PHP/Docker`
- [QloApps](https://qloapps.com/) - カスタマイズ可能で直感的なウェブベースのホテル予約システムおよび予約エンジン。（[デモ](https://demo.qloapps.com/)，[ソースコード](https://github.com/Qloapps/QloApps)） `OSL-3.0` `PHP/Nodejs`
- [Rallly](https://rallly.co) - 候補の日時に投票するアンケートを作成できます（Doodleの代替）。（[デモ](https://app.rallly.co)，[ソースコード](https://github.com/lukevella/rallly)） `AGPL-3.0` `Nodejs/Docker`
- [Seatsurfing](https://seatsurfing.app/) - オフィスの席、デスク、部屋の予約をウェブ上で行えるアプリ。（[ソースコード](https://github.com/seatsurfing/seatsurfing)） `GPL-3.0` `Docker`

### ブックマークとリンク共有 <a id="bookmarks-and-link-sharing"></a>

Web文書の[ブックマーク](https://en.wikipedia.org/wiki/Bookmark_(digital))を追加し、注釈を付け、編集・共有するソフトウェアです。

関連資料： [個人用ダッシュボード](#personal-dashboards)

- [Betula](https://joinbetula.org) - Fediverseとアーカイブに対応する、単一ユーザー向けの連合型ブックマーク管理ツールです。（[ソースコード](https://codeberg.org/bouncepaw/betula)） `AGPL-3.0` `Go`
- [Buku](https://github.com/jarun/Buku) - 強力なブックマークマネージャーと個人のテキストミニウェブ。 `GPL-3.0` `Python/deb`
- [Digibunch](https://ladigitale.dev/digibunch/#/) - 学習者や同僚と共有するリンク集を作成できます。 [デモ](https://ladigitale.dev/digibunch/#/b/5f67b12092b60) [ソースコード](https://codeberg.org/ladigitale/digibunch) `AGPL-3.0` `Nodejs/PHP`
- [Espial](https://github.com/jonschoning/espial) - オープンソースのウェブベースのブックマークサーバー。 `AGPL-3.0` `Haskell`
- [Faved](https://faved.to/) - タグ付け、即時検索、集中を妨げないシンプルなUIを備えたブックマーク管理ツール。大量のコレクションと高度なワークフロー向けに、効率性と使いやすさを重視して設計されています。 ([デモ](https://demo.faved.to/), [ソースコード](https://github.com/denho/faved)) `MIT` `Docker`
- [Firefox Account Server](https://mozilla-services.readthedocs.io/en/latest/howtos/run-fxa.html) - 自分のFirefoxアカウントサーバーをホストできます。 ([ソースコード](https://github.com/mozilla/fxa)) `MPL-2.0` `Nodejs/Java`
- [Karakeep](https://karakeep.app/) - データを大量に保存したい方へ、AIを組み込んだブックマークアプリ。 ([デモ](https://try.karakeep.app/signin), [ソースコード](https://github.com/karakeep-app/karakeep)) `AGPL-3.0` `Docker`
- [LinkAce](https://www.linkace.org/) - 自動バックアップをインターネットアーカイブに、リンクの監視、およびフルREST APIを備えたブックマークアーカイブ。DockerまたはシンプルなPHPアプリとしてインストール可能です。 ([デモ](https://demo.linkace.org/guest/links), [ソースコード](https://github.com/Kovah/LinkAce/)) `GPL-3.0` `Docker/PHP`
- [linkding](https://linkding.link/) - シンプルで高速なUIを備えた最小限のブックマーク管理。Dockerで簡単なインストールが可能で、Raspberry Piでも動作します。 ([デモ](https://demo.linkding.link/login/), [ソースコード](https://github.com/sissbruecker/linkding)) `MIT` `Docker`
- [LinkWarden](https://linkwarden.app/) - あなたの便利なリンクを保存するためのブックマークとアーカイブマネージャー。 ([ソースコード](https://github.com/linkwarden/linkwarden)) `MIT` `Docker/Nodejs`
- [NeonLink](https://github.com/AlexSciFier/neonlink) - ユニークなデザインとDockerによる簡単なインストールを備えたブックマークサービス。 `MIT` `Docker`
- [Readeck](https://readeck.org/en/) - 好きなウェブページの読みやすいコンテンツを保存し、永遠に残すことができます。ブックマークマネージャーと「あとで読む」ツールとして捉えられます。 ([ソースコード](https://codeberg.org/readeck/readeck), [クライアント](https://codeberg.org/readeck/browser-extension)) `AGPL-3.0` `Go/Docker`
- [Servas](https://github.com/beromir/Servas) - タグ、グループ、後で読むためのリストで整理できるセルフホスト型ブックマーク管理ツール。2FA付きの複数ユーザー機能と、Firefox・Chrome向け拡張機能を備えています。 ([クライアント](https://github.com/beromir/Servas#browser-extensions)) `GPL-3.0` `Docker/Nodejs/PHP`
- [Shaarli](https://github.com/shaarli/Shaarli) - データベースを使わない、個人向けのミニマルなブックマーク・リンク共有プラットフォーム。原文では非常に高速と紹介されています。 ([デモ](https://demo.shaarli.org)) `Zlib` `PHP/deb`
- [Shiori](https://github.com/go-shiori/shiori) - Goで構築されたシンプルなブックマークマネージャー。 `MIT` `Go/Docker`
- [Slash](https://github.com/yourselfhosted/slash) - オープンソースで自前ホスト可能なブックマークとリンク共有プラットフォーム。 `GPL-3.0` `Docker`
- [SyncMarks](https://codeberg.org/Offerel/SyncMarks-Webapp) - Edge、FirefoxおよびChromiumのブラウザブックマークを同期・管理できます。 ([クライアント](https://codeberg.org/Offerel/SyncMarks-Extension)) `AGPL-3.0` `PHP`

### カレンダーと連絡先 <a id="calendar--contacts"></a>

[CalDAV](https://en.wikipedia.org/wiki/CalDAV)・[CardDAV](https://en.wikipedia.org/wiki/CardDAV)サーバーと、[電子カレンダー](https://en.wikipedia.org/wiki/Calendaring_software)、[アドレス帳](https://en.wikipedia.org/wiki/Address_book)、[連絡先管理](https://en.wikipedia.org/wiki/Contact_manager)のWebクライアント・インターフェースです。

関連資料： [グループウェア](#groupware)

- [Baïkal](https://sabre.io/baikal/) - sabre/davに基づく軽量なCalDAVおよびCardDAVサーバー。 ([ソースコード](https://github.com/sabre-io/Baikal)) `GPL-3.0` `PHP`
- [DAViCal](https://www.davical.org/) - カレンダー共有用のサーバー（CalDAV）で、PostgreSQLデータベースをデータストアとして使用。 ([ソースコード](https://gitlab.com/davical-project/davical)) `GPL-2.0` `PHP/deb`
- [Davis](https://github.com/tchapi/davis) - sabre/davに基づくSymfony 5とBootstrap 4を使用したシンプルでDocker化可能かつ完全に翻訳可能な管理インターフェース。Baïkalに大きくインスパイアされています。 `MIT` `PHP`
- [Keeper.sh](https://keeper.sh/) - iCal/ICSやOAuthを使って、カレンダー間で予定を取得・送信する同期ツール。詳細を匿名化した予定あり/空きの情報にも対応します。 ([ソースコード](https://github.com/ridafkih/keeper.sh)) `AGPL-3.0` `Docker`
- [Manage My Damn Life](https://intri.in/manage-my-damn-life/) - Manage my Damn Life (MMDL) は、あなたのCalDAVタスクとカレンダーを管理するための自前ホストされたフロントエンドです。 ([ソースコード](https://github.com/intri-in/manage-my-damn-life-nextjs)) `GPL-3.0` `Nodejs/Docker`
- [Radicale](https://radicale.org/) - シンプルなカレンダーと連絡先サーバーで、極めて低い管理負荷。 ([ソースコード](https://github.com/Kozea/Radicale)) `GPL-3.0` `Python/deb`
- [SabreDAV](https://sabre.io/) - オープンソースのCardDAV、CalDAV、およびWebDAVフレームワークとサーバー。 ([ソースコード](https://github.com/sabre-io/dav)) `MIT` `PHP`
- [Xandikos](https://github.com/jelmer/xandikos) - Gitリポジトリを保存基盤とし、管理の負担が少ないオープンソースのCardDAV・CalDAVサーバーです。 `GPL-3.0` `Python/deb`

### 通信：独自の通信システム <a id="communication---custom-communication-systems"></a>

独自のプロトコルを使う[通信ソフトウェア](https://en.wikipedia.org/wiki/Communication_software)です。システムへのリモートアクセスや、異なるコンピューター・利用者間でのテキスト、音声、動画によるファイル・メッセージ交換を提供します。

- [AnyCable](https://anycable.io/) - WebSockets、サーバー送信イベントなどによる信頼性の高い双方向通信を実現するリアルタイムサーバー。 ([デモ](https://demo.anycable.io), [ソースコード](https://github.com/anycable/anycable)) `MIT` `Go/Docker`
- [Apprise](https://github.com/caronc/apprise) - Telegram、Discord、Slack、Amazon SNS、Gotifyなどへ通知を送信できます。原文では、当時人気だった通知サービスのほとんどに対応すると紹介されています。 `MIT` `Python/Docker/deb`
- [Centrifugo](https://centrifugal.dev/) - 言語に依存しないリアルタイムメッセージング（WebsocketまたはSockJS）サーバー。 ([デモ](https://github.com/centrifugal/centrifugo#demo), [ソースコード](https://github.com/centrifugal/centrifugo)) `MIT` `Go/Docker/K8S`
- [Chitchatter](https://chitchatter.im/) - サーバーレスで分散型の、一時的なP2Pチャットアプリです。 ([ソースコード](https://github.com/jeremyckahn/chitchatter)) `GPL-2.0` `Nodejs`
- [Conduit](https://conduit.rs/) - Matrixを用いたシンプルで高速かつ信頼性の高いチャットサーバー。 ([ソースコード](https://gitlab.com/famedly/conduit)) `Apache-2.0` `Rust`
- [Continuwuity](https://continuwuity.org/) - ユーザー体験と新機能を重視してconduwuitを継続する、コミュニティ主導のMatrixホームサーバー（Conduitの派生版）です。 ([ソースコード](https://forgejo.ellis.link/continuwuation/continuwuity)) `Apache-2.0` `Rust/Docker/K8S/deb`
- [Databag](https://github.com/balzack/databag) - Web、iOS、Android向けの、エンドツーエンド暗号化を備えた連合型メッセージングサービス。テキスト、写真、動画、WebRTCによる映像・音声通話に対応します。 ([デモ](https://databag.coredb.org/#/create)) `Apache-2.0` `Docker`
- [Element](https://element.io) - Web、iOS、Android向けの多機能なMatrixクライアント。 ([ソースコード](https://github.com/element-hq/element-web)) `Apache-2.0` `Nodejs`
- [GlobaLeaks](https://www.globaleaks.org/) - 通報プラットフォームを構築・運用するための内部告発用ソフトウェア。原文では誰でも簡単に安全な仕組みを用意できると紹介されています。 ([デモ](https://demo.globaleaks.org), [ソースコード](https://github.com/globaleaks/globaleaks-whistleblowing-software)) `AGPL-3.0` `Python/deb/Docker`
- [GNUnet](https://gnunet.org/) - 分散型P2Pネットワーク向けのソフトウェアフレームワークです。 ([ソースコード](https://gnunet.org/git/)) `GPL-3.0` `C`
- [Gotify](https://gotify.net/) - AndroidおよびCLIクライアントを備えた通知サーバー（PushBulletの代替）。 ([ソースコード](https://github.com/gotify/server), [クライアント](https://github.com/gotify/android)) `MIT` `Go/Docker`
- [Hyphanet](https://hyphanet.org/) - 匿名でファイルを共有し、freesites（Hyphanet経由でのみアクセスできるWebサイト）を閲覧・公開し、フォーラムでチャットできます。 ([ソースコード](https://github.com/hyphanet/fred)) `GPL-2.0` `Java`
- [Jami](https://jami.net/) - ユーザーのプライバシーと自由を守る、普遍的なコミュニケーションプラットフォーム。 ([ソースコード](https://git.jami.net/savoirfairelinux?sort=latest_activity_desc&filter=jami)) `GPL-3.0` `C++`
- [Live Helper Chat](https://livehelperchat.com/) - あなたのウェブサイト向けのライブサポートチャット。 ([ソースコード](https://github.com/LiveHelperChat/livehelperchat)) `Apache-2.0` `PHP`
- [Mumble](https://wiki.mumble.info/wiki/Main_Page) - 低遅延かつ高品質の音声・テキストチャットソフトウェア。 ([ソースコード](https://github.com/mumble-voip/mumble), [クライアント](https://wiki.mumble.info/wiki/3rd_Party_Applications)) `BSD-3-Clause` `C++/deb`
- [Notifo](https://github.com/notifo-io/notifo) - メール、モバイルプッシュ、ウェブプッシュ、SMS、メッセージング、JavaScriptプラグインをサポートするマルチチャンネル通知サーバー。 `MIT` `C#`
- [Novu](https://novu.co/) - 開発者向けの通知インフラストラクチャ。 ([ソースコード](https://github.com/novuhq/novu/)) `MIT` `Docker/Nodejs`
- [ntfy](https://ntfy.sh/) - スマホやデスクトップにHTTP PUT/POSTを使用してプッシュ通知を送信。Androidアプリ、CLI、ウェブアプリで利用可能。PushoverやGotifyと同様。（[デモ](https://ntfy.sh/app), [ソースコード](https://github.com/binwiederhier/ntfy), [クライアント](https://github.com/binwiederhier/ntfy-android)）`Apache-2.0/GPL-2.0` `Go/Docker/K8S`
- [One Time Secret](https://docs.onetimesecret.com) - 一度だけ表示できる、内容が消えるリンクで機密情報を共有するツール。原文では安全と紹介されています。（[デモ](https://onetimesecret.com), [ソースコード](https://github.com/onetimesecret/onetimesecret)）`MIT` `Docker/Ruby/Nodejs`
- [OTS](https://ots.fyi/) - ブラウザ内で対称鍵256bit AES暗号化を用いたワンタイムセクレット共有プラットフォーム。（[ソースコード](https://github.com/Luzifer/ots)）`Apache-2.0` `Go`
- [PushBits](https://github.com/pushbits/server) - Matrixを介してプッシュ通知を中継するための通知サーバー。PushBulletやGotifyと同様。（`ISC`）`Go`
- [RetroShare](https://retroshare.cc) - 安全かつ分散型のコミュニケーションシステム。分散型チャット、フォーラム、メッセージング、ファイル転送を提供。（[ソースコード](https://github.com/RetroShare/RetroShare)）`GPL-2.0` `C++`
- [Rocket.Chat](https://rocket.chat/) - データ保護を最優先とするコミュニケーションプラットフォーム（Gitter.imやSlackの代替）。（[ソースコード](https://github.com/RocketChat/Rocket.Chat)）`MIT` `Nodejs/Docker/K8S`
- [SAMA](https://samacloud.io) - セルフホスト型のチャットサーバーとクライアント。原文では次世代のものと紹介されています。（[デモ](https://app.samacloud.io/demo), [ソースコード](https://github.com/SAMA-Communications/sama-server), [クライアント](https://github.com/SAMA-Communications/sama-client)）`GPL-3.0` `Nodejs/Docker`
- [Screego](https://screego.net) - Screegoは、ウェブブラウザ経由で1人または複数の人と画面を迅速に共有するためのシンプルなツール。（[デモ](https://app.screego.net/), [ソースコード](https://github.com/screego/server)）`GPL-3.0` `Docker/Go`
- [Shhh](https://github.com/smallwat3r/shhh) - メールやチャットログに秘密情報を残さず、パスフレーズと有効期限付きのリンクで共有するツール。原文では安全と紹介されています。 `MIT` `Python`
- [SimpleX Chat](https://github.com/simplex-chat/simplex-chat) - Double Ratchetによるエンドツーエンド暗号化を備えたチャット・アプリケーションプラットフォーム。原文では最もプライバシーを保護し、安全と紹介されています。 `AGPL-3.0` `Haskell`
- [Spectrum 2](https://spectrum.im/) - Spectrum 2はオープンソースのインスタントメッセージングトランスポート。異なるIMネットワークを使用しているユーザー間でもチャットが可能。（[ソースコード](https://github.com/SpectrumIM/spectrum2)）`GPL-3.0` `C++`
- [Stoat](https://stoat.chat/) - Stoatは、現代のウェブ技術を用いたユーザー中心のチャットプラットフォーム。（[ソースコード](https://github.com/stoatchat/self-hosted)）`AGPL-3.0/MIT` `Rust`
- [Synapse](https://element-hq.github.io/synapse/latest/index.html) - 分散型の永続的な通信のためのオープン標準である[Matrix](https://matrix.org/)のサーバー。（[ソースコード](https://github.com/element-hq/synapse)）`Apache-2.0` `Python/deb`
- [Tiledesk](https://tiledesk.com) - 見込み顧客の獲得から販売後の対応までを扱う顧客エンゲージメントプラットフォーム。WhatsAppやWebサイトなど複数チャネルで人間の担当者とAIチャットボットが対応できます（Intercom、Zendesk、Tawk.to、Tidioの代替）。（[ソースコード](https://github.com/Tiledesk/tiledesk)）`MIT` `Docker/K8S`
- [Tinode](https://github.com/tinode) - インスタントメッセージングプラットフォーム。バックエンドはGo。クライアント：Swift iOS、Java Android、JSウェブアプリ、スクリプト可能なコマンドライン、チャットボット。（[デモ](https://sandbox.tinode.co/), [ソースコード](https://github.com/tinode/chat), [クライアント](https://github.com/tinode/webapp)）`GPL-3.0` `Go`
- [Tox](https://tox.chat/) - 音声・動画チャットを備えた分散型メッセンジャー。原文では安全と紹介されています。（[ソースコード](https://github.com/TokTok/c-toxcore)）`GPL-3.0` `C`
- [Tuwunel](https://tuwunel.chat) - Matrix向けの高性能かつ機能豊かなチャットサーバー。conduwuit（Conduitのフォーク）の後継。（[デモ](https://try.tuwunel.chat/), [ソースコード](https://github.com/matrix-construct/tuwunel)）`Apache-2.0` `deb/Docker/Nix/Rust`
- [Typebot](https://typebot.io) - 会話型アプリビルダー（TypeformやLandbotの代替）。（[ソースコード](https://github.com/baptisteArno/typebot.io)）`AGPL-3.0` `Docker`
- [WBO](https://github.com/lovasoa/whitebophir) - 図式、描画、メモをリアルタイムで共同編集するWebホワイトボードです。（[デモ](https://wbo.ophir.dev/)）`AGPL-3.0` `Nodejs/Docker`
- [Zulip](https://zulip.org) - Zulipは強力なオープンソースグループチャットアプリケーション。（[ソースコード](https://github.com/zulip/zulip)）`Apache-2.0` `Python`

### 通信：メールの統合ソリューション <a id="communication---email---complete-solutions"></a>

経験が浅い管理者や導入を手早く済ませたい管理者などに向けて、[メール](https://en.wikipedia.org/wiki/Email)サーバーを簡単に導入するためのソフトウェアです。

- [AnonAddy](https://anonaddy.com) - メールのエイリアスを作成するためのメール転送サービス。 ([ソースコード](https://github.com/anonaddy/anonaddy)) `MIT` `PHP/Docker`
- [b1gMail](https://www.b1gmail.eu) - PHPとMariaDBを使うWebスペースで動作する総合メールソリューション。POP3のキャッチオールメールボックスに対応し、自前のサーバーではPostfixやb1gMailServerとも統合できます。 ([ソースコード](https://codeberg.org/b1gMail/b1gMail), [クライアント](https://www.b1gmail.eu/en/start/addon-b1gmailserver/)) `GPL-2.0` `PHP`
- [DebOps](https://docs.debops.org/) - Debianベースのデータセンターを一括で提供するソリューション。DebianまたはUbuntuホストの管理に使える汎用的なAnsibleロールのセット。 ([ソースコード](https://github.com/debops/debops)) `GPL-3.0` `Ansible/Python`
- [docker-mailserver](https://docker-mailserver.github.io/docker-mailserver/edge/) - SMTP、IMAP、LDAP、迷惑メール対策、ウイルス対策などを備え、コンテナー内で動作するメールサーバー。SQLデータベースを使わず設定ファイルだけで構成します。原文では本番運用向けと紹介されています。 ([ソースコード](https://github.com/docker-mailserver/docker-mailserver)) `MIT` `Docker`
- [Dovel](https://dovel.email) - 設定ファイルに基づいてメールを送受信するSMTPサーバー。オプションでウェブインターフェースを提供し、メールを閲覧できます。 ([ソースコード](https://dovel.email/server/tree.html)) `LGPL-3.0` `Go`
- [Inboxen](https://inboxen.org) - 多数の個別受信箱を作成できます。原文では無限に作成できると説明されています。 ([ソースコード](https://codeberg.org/Inboxen/Inboxen)) `GPL-3.0` `Python`
- [iRedMail](https://www.iredmail.org/) - PostfixとDovecotを基盤とする多機能なメールサーバーソリューション。 ([ソースコード](https://github.com/iredmail/iRedMail)) `GPL-3.0` `Shell`
- [Maddy Mail Server](https://maddy.email/) - SMTP（MTAおよびMX）とIMAPを実装するワンストップのメールサーバー。Postfix、Dovecot、OpenDKIM、OpenSPF、OpenDMARCを1つのデーモンで置き換えます。 ([ソースコード](https://github.com/foxcpp/maddy)) `GPL-3.0` `Go`
- [Mail-in-a-Box](https://mailinabox.email/) - Ubuntuサーバーを1コマンドで完全なメールサーバーに変換します。 ([ソースコード](https://github.com/mail-in-a-box/mailinabox)) `CC0-1.0` `Shell`
- [Mailcow](https://mailcow.email/) - Dovecot、Postfixなどのオープンソースソフトウェアを基盤とし、管理用のWeb UIを備えるメールサーバースイート。 ([ソースコード](https://github.com/mailcow/mailcow-dockerized)) `GPL-3.0` `Docker/PHP`
- [Mailu](https://mailu.io/) - シンプルでありながらフル機能のメールサーバーをDockerイメージとして提供します。 ([ソースコード](https://github.com/Mailu/Mailu)) `MIT` `Docker/Python`
- [Modoboa](https://modoboa.org/en/) - メールホスティングおよび管理プラットフォームで、現代的かつ簡易なウェブユーザーインターフェースを提供します。 ([ソースコード](https://github.com/modoboa/modoboa)) `ISC` `Python`
- [Mox](https://www.xmox.nl/) - IMAP4、SMTP、SPF、DKIM、DMARC、MTA-STS、DANE、DNSSEC、送信元評価と内容に基づく迷惑メールフィルター、国際化（IDNA）、ACME・Let's Encryptによる自動TLS、アカウント自動設定、Webメールを備えた総合メールソリューションです。 ([ソースコード](https://github.com/mjl-/mox)) `MIT` `Go`
- [Postal](https://docs.postalserver.io/) - Webサイト・Webサーバー向けの多機能なメールサーバー。 ([ソースコード](https://github.com/postalserver/postal)) `MIT` `Docker/Ruby`
- [Simple NixOS Mailserver](https://gitlab.com/simple-nixos-mailserver/nixos-mailserver) - Nixエコシステムを活用する総合メールサーバーソリューション。 `GPL-3.0` `Nix`
- [SimpleLogin](https://simplelogin.io) - メールアドレスを保護するためのオープンソースのメールエイリアスソリューション。ブラウザー拡張機能とモバイルアプリを備えています。 ([ソースコード](https://github.com/simple-login/app)) `MIT` `Docker/Python`
- [Stalwart Mail Server](https://stalw.art) - JMAP、IMAP4、SMTPをサポートし、幅広い現代的な機能を備えたワンストップメールサーバー。 ([ソースコード](https://github.com/stalwartlabs/stalwart)) `AGPL-3.0` `Rust/Docker`
- [wildduck](https://wildduck.email/) - 単一障害点（SPOF）のない、規模を拡張できるIMAP/POP3メールサーバーです。 ([ソースコード](https://github.com/zone-eu/wildduck)) `EUPL-1.2` `Nodejs/Docker`

### 通信：メール配信エージェント <a id="communication---email---mail-delivery-agents"></a>

[メール配信エージェント](https://en.wikipedia.org/wiki/Message_delivery_agent)（MDA）：[IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol)・[POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol)サーバーソフトウェアです。

- [Cyrus IMAP](https://www.cyrusimap.org/) - メール（IMAP/POP3）、連絡先、カレンダーサーバー。 ([ソースコード](https://github.com/cyrusimap/cyrus-imapd)) `BSD-3-Clause-Attribution` `C`
- [DavMail](https://davmail.sourceforge.net/) `外部プロプライエタリサービス依存` - POP・IMAP・SMTP・CalDAV・CardDAV・LDAPに対応するExchangeゲートウェイ。任意のメール・カレンダークライアントからExchangeサーバーを利用でき、Outlook Web Access経由ではインターネットやファイアウォールの内側からも接続できます。 ([ソースコード](https://github.com/mguessan/davmail)) `GPL-2.0` `Java`
- [Dovecot](https://www.dovecot.org/) - 安全性を重視して設計されたIMAP・POP3サーバー。（[ソースコード](https://github.com/dovecot/core)） `MIT/LGPL-2.1` `C/deb`

### 通信：メール転送エージェント <a id="communication---email---mail-transfer-agents"></a>

[メール転送エージェント](https://en.wikipedia.org/wiki/Message_transfer_agent)（MTA）：[SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)サーバーです。

- [chasquid](https://blitiri.com.ar/p/chasquid/) - SMTP（メール）サーバーは、シンプルさ、安全性、操作の容易さを重視しています。（[ソースコード](https://blitiri.com.ar/git/r/chasquid/)） `Apache-2.0` `Go`
- [Courier MTA](https://www.courier-mta.org/) - 高速かつスケーラブルで、企業向けのメール／グループウェアサーバー。ESMTP、IMAP、POP3、ウェブメール、メールリスト、基本的なウェブベースのカレンダーおよびスケジューリングサービスを提供します。（[ソースコード](https://www.courier-mta.org/repo.html)） `GPL-3.0` `C/deb`
- [DragonFly](https://github.com/corecode/dma) - 家庭やオフィス向けの小型MTA。LinuxおよびFreeBSDで動作します。`BSD-3-Clause` `C`
- [EmailRelay](https://emailrelay.sourceforge.net/) - WindowsおよびLinux向けの小型で設定が簡単なSMTPおよびPOP3サーバー。（[ソースコード](https://sourceforge.net/p/emailrelay/code/HEAD/tree/)） `GPL-3.0` `C++`
- [Exim](https://www.exim.org/) - ケンブリッジ大学で開発されたメール転送エージェント（MTA）です。（[ソースコード](https://git.exim.org/exim.git)） `GPL-3.0` `C/deb`
- [Haraka](https://haraka.github.io/) - 高速で高度に拡張可能でイベント駆動のSMTPサーバー。（[ソースコード](https://github.com/haraka/Haraka)） `MIT` `Nodejs`
- [OpenSMTPD](https://opensmtpd.org/) - OpenBSDプロジェクトのSMTPサーバー実装。原文では安全と紹介されています。（[ソースコード](https://github.com/OpenSMTPD/OpenSMTPD/)） `ISC` `C/deb`
- [OpenTrashmail](https://github.com/HaschekSolutions/opentrashmail) - SMTPサーバーと受信メールを管理するWeb UIを備えた使い捨てメールの総合ツール。複数ドメインとワイルドカードドメインに対応し、ファイルだけで動作してデータベースは不要です。RSSフィードとJSON APIも備えています。 `Apache-2.0` `Python/PHP/Docker`
- [Postfix](http://www.postfix.org/) - Sendmailの代替サーバー。原文では高速で管理しやすく、安全と紹介されています。`IPL-1.0` `C/deb`
- [Sendmail](https://www.proofpoint.com/us/products/email-protection/open-source-email-solution) - メッセージ転送エージェント（MTA）。`Sendmail` `C/deb`

### 通信：メーリングリストとニュースレター <a id="communication---email---mailing-lists-and-newsletters"></a>

[メーリングリスト](https://en.wikipedia.org/wiki/Mailing_list)サーバーと、一つのメッセージを多数の受信者に送る一斉メール配信ソフトウェアです。

関連資料： [顧客関係管理（CRM）](#customer-relationship-management-crm)

- [HyperKitty](https://wiki.list.org/HyperKitty) - GNU Mailman v3のアーカイブにアクセスします。（[デモ](https://lists.mailman3.org/), [ソースコード](https://gitlab.com/mailman/hyperkitty)） `GPL-3.0` `Python`
- [Keila](https://www.keila.io) - 信頼性があり操作が簡単なニュースレターツール（MailchimpやSendinblueの代替）。（[デモ](https://app.keila.io), [ソースコード](https://github.com/pentacent/keila)） `AGPL-3.0` `Docker`
- [Listmonk](https://listmonk.app/) - 高性能で、セルフホスト可能なニュースレターおよびメールリスト管理ツール。現代的なダッシュボードを備えています。（[デモ](https://demo.listmonk.app/), [ソースコード](https://github.com/knadh/listmonk)） `AGPL-3.0` `Go/Docker`
- [Mailman](https://www.list.org/) - 電子メールディスカッションおよびeニュースレターのリストを管理します。（[ソースコード](https://gitlab.com/mailman/)） `GPL-3.0` `Python`
- [Mautic](https://www.mautic.org/) - マーケティング自動化ソフトウェア（メール、ソーシャルメディアなど）。（[ソースコード](https://github.com/mautic/mautic)） `GPL-3.0` `PHP`
- [mlmmj](https://mlmmj.org/) - メーリングリスト管理ツール。原文では楽しく管理できると紹介されています。（[ソースコード](https://codeberg.org/mlmmj/mlmmj)） `MIT` `C`
- [phpList](https://www.phplist.org) - 購読者、配信エラー、プラグインの高度な管理機能を備えたニュースレター・メールマーケティングツールです。（[ソースコード](https://github.com/phpList/phplist3)） `AGPL-3.0` `PHP`
- [Postorius](https://docs.mailman3.org/projects/postorius/en/latest/) - GNU Mailmanにアクセスするウェブユーザーインターフェース。（[ソースコード](https://gitlab.com/mailman/postorius/)） `GPL-3.0` `Python`
- [Schleuder](https://schleuder.nadir.org/) - GPGをサポートしたメールリスト管理ツールで、再送機能を備えています。（[ソースコード](https://0xacab.org/schleuder/schleuder/tree/master)） `GPL-3.0` `Ruby`
- [Sympa](https://www.sympa.community/) - メールリスト管理ツール。 ([ソースコード](https://github.com/sympa-community/sympa)) `GPL-2.0` `Perl`

### 通信：Webメールクライアント <a id="communication---email---webmail-clients"></a>

[Webメール](https://en.wikipedia.org/wiki/Webmail) クライアント.

- [Cypht](https://cypht.org) - メールアカウント用のフィードリーダー。 ([ソースコード](https://github.com/cypht-org/cypht)) `LGPL-2.1` `PHP`
- [Roundcube](https://roundcube.net) - ブラウザベースのIMAPクライアントで、アプリケーションのようなユーザーインターフェースを提供。 ([ソースコード](https://github.com/roundcube/roundcubemail)) `GPL-3.0` `PHP/deb`
- [SnappyMail](https://snappymail.eu/) - シンプルで軽量かつ高速なWebメールクライアント（RainLoopの派生版）です。 ([デモ](https://snappymail.eu/demo/), [ソースコード](https://github.com/the-djmaze/snappymail), [クライアント](https://snappymail.eu/repository/v2/plugins/)) `AGPL-3.0` `PHP`
- [SquirrelMail](https://squirrelmail.org) - 別のブラウザベースのIMAPクライアント。 ([ソースコード](https://sourceforge.net/p/squirrelmail/code/HEAD/tree/)) `GPL-2.0` `PHP`

### 通信：IRC <a id="communication---irc"></a>

[IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat) コミュニケーションソフトウェア。

- [Ergo](https://ergo.chat/) - ircd、サービスフレームワーク、IRCバウンサーの機能を組み合わせた、Go実装のIRCv3サーバーです。 ([ソースコード](https://github.com/ergochat/ergo)) `MIT` `Go/Docker`
- [Glowing Bear](https://github.com/glowing-bear/glowing-bear) - WeeChat用のウェブフロントエンド。 ([デモ](https://www.glowing-bear.org)) `GPL-3.0` `Nodejs`
- [InspIRCd](https://www.inspircd.org/) - Linux、BSD、Windows、macOS向けのC++で書かれたモジュラーなIRCサーバー。 ([ソースコード](https://github.com/inspircd/inspircd)) `GPL-2.0` `C++/Docker`
- [Kiwi IRC](https://kiwiirc.com/) - テーマサポートを備えたレスポンシブなウェブベースIRCクライアント。 ([デモ](https://kiwiirc.com/nextclient/), [ソースコード](https://github.com/kiwiirc/kiwiirc)) `Apache-2.0` `Nodejs`
- [ngircd](https://ngircd.barton.de/) - 小型またはプライベートネットワーク向けのポータブルかつ軽量なIRCサーバー。 ([ソースコード](https://github.com/ngircd/ngircd)) `GPL-2.0` `C/deb`
- [Quassel IRC](https://quassel-irc.org/) - 分散型IRCクライアント。一つ（または複数）のクライアントが中央コアに接続・離脱できる。 ([ソースコード](https://github.com/quassel/quassel)) `GPL-2.0` `C++`
- [Robust IRC](https://robustirc.net/) - ネットスプリットのないIRC。RobustSessionプロトコルに基づく分散型IRCサーバー。 ([ソースコード](https://github.com/robustirc/robustirc)) `BSD-3-Clause` `Go`
- [The Lounge](https://thelounge.chat/) - セルフホスト型ウェブベースIRCクライアント。 ([デモ](https://demo.thelounge.chat/), [ソースコード](https://github.com/thelounge/thelounge)) `MIT` `Nodejs/Docker`
- [UnrealIRCd](https://www.unrealircd.org/) - Linux、BSD、Windows、macOS向けのCで書かれたモジュラーで高度かつ高度にカスタマイズ可能なIRCサーバー。 ([ソースコード](https://github.com/unrealircd/unrealircd)) `GPL-2.0` `C`
- [Weechat](https://weechat.org/) - 高速で軽量かつ拡張可能なチャットクライアント。 ([ソースコード](https://github.com/weechat/weechat)) `GPL-3.0` `C/Docker/deb`
- [ZNC](https://wiki.znc.in/ZNC) - 高度な機能を備えたIRCバウンサーです。 ([ソースコード](https://github.com/znc/znc)) `Apache-2.0` `C++/deb`

### 通信：SIP <a id="communication---sip"></a>

[SIP](https://en.wikipedia.org/wiki/Session_Initiation_Protocol)/[IPBX](https://en.wikipedia.org/wiki/IP_PBX) 電話ソフトウェア。

- [Asterisk](https://www.asterisk.org/) - 使いやすいが高度なIP PBXシステム、VoIPゲートウェイおよび会議サーバー。 ([ソースコード](https://github.com/asterisk/asterisk)) `GPL-2.0` `C/deb`
- [Flexisip](https://www.linphone.org/en/flexisip-sip-server/) - モジュール構成で規模を拡張できるSIPサーバー。アプリが前面で動作していないときの受信にプッシュ通知を必要とするモバイル環境へ、SIP着信やテキストメッセージを届けるプッシュゲートウェイを備えています。 ([ソースコード](https://github.com/BelledonneCommunications/flexisip)) `AGPL-3.0` `C/Docker`
- [Freepbx](https://www.freepbx.org) - ウェブベースのオープンソースGUIでAsteriskを制御および管理。 ([ソースコード](https://git.freepbx.org/projects/FREEPBX)) `GPL-2.0` `PHP`
- [FreeSWITCH](https://freeswitch.org/) - スケーラブルでオープンソースのマルチプラットフォームテレフォニープラットフォーム。 ([ソースコード](https://github.com/signalwire/freeswitch)) `MPL-2.0` `C`
- [FusionPBX](https://www.fusionpbx.com/) - マルチプラットフォームの音声スイッチFreeSWITCH向けのウェブインターフェース。([ソースコード](https://github.com/fusionpbx/fusionpbx)) `MPL-1.1` `PHP`
- [Kamailio](https://www.kamailio.org/w/) - 登録サーバー、プロキシ、ルーターなどとして使えるモジュール式SIPサーバーです。([ソースコード](https://github.com/kamailio/kamailio)) `GPL-2.0` `C/deb`
- [openSIPS](https://opensips.org/) - 音声、動画、IM、プレゼンスおよび他のSIP拡張に対応するSIPプロキシ/サーバー。([ソースコード](https://github.com/OpenSIPS/opensips)) `GPL-2.0` `C`
- [Routr](https://routr.io) - 信頼性と拡張性を重視するSIP基盤向けの、軽量SIPプロキシ、ロケーションサーバー、登録サーバーです。([ソースコード](https://github.com/fonoster/routr)) `MIT` `Docker/K8S`
- [SIP3](https://sip3.io/) - VoIPのトラブルシューティングおよびモニタリングプラットフォーム。([デモ](https://demo.sip3.io), [ソースコード](https://github.com/sip3io/)) `Apache-2.0` `Java`
- [SIPCAPTURE Homer](https://www.sipcapture.org/) - VoIP通話のトラブルシューティングおよびモニタリング。([ソースコード](https://github.com/sipcapture/homer)) `AGPL-3.0` `Nodejs/Go/Docker`
- [Wazo](https://wazo-platform.org/) - Asteriskをベースに構築されたフル機能のIPBXソリューション。統合されたウェブ管理インターフェースとREST APIを備えています。([ソースコード](https://github.com/wazo-platform)) `GPL-3.0` `Python`
- [Yeti-Switch](https://yeti-switch.org/) - 課金・ルーティングエンジンとREST APIを備えた、中継用クラス4ソフトスイッチ（SBC）です。([デモ](https://demo.yeti-switch.org/), [ソースコード](https://github.com/yeti-switch)) `GPL-2.0` `C++/Ruby`

### 通信：ソーシャルネットワークとフォーラム <a id="communication---social-networks-and-forums"></a>

[ソーシャルネットワーク](https://en.wikipedia.org/wiki/Social_networking_service) および [フォーラム](https://en.wikipedia.org/wiki/Internet_forum) のソフトウェア。

- [Akkoma](https://akkoma.social/) - Mastodon、GNU social、ActivityPubと互換性を持つ、フェデレート型のマイクロブロギングサーバー。([ソースコード](https://akkoma.dev/AkkomaGang/akkoma)) `AGPL-3.0` `Elixir/Docker`
- [Answer](https://answer.apache.org) - 知識ベースを備えたコミュニティソフトウェア。製品技術サポート、顧客サポート、ユーザー間のコミュニケーションなど、あなたのQ&Aコミュニティを迅速に構築できます。([ソースコード](https://github.com/apache/answer)) `Apache-2.0` `Docker/Go`
- [Artalk](https://artalk.js.org/) - Golangで構築されたコメントシステム。ウェブサイトにコメントを追加するための軽量かつ高度にカスタマイズ可能なソリューションを提供します。([ソースコード](https://github.com/ArtalkJS/Artalk)) `MIT` `Go/Docker`
- [AsmBB](https://board.asm32.info) - ASMで書かれた、高速かつSQLiteを活用したフォーラムエンジン。([ソースコード](https://asm32.info/fossil/asmbb/index)) `EUPL-1.2` `Assembly`
- [BuddyPress](https://buddypress.org/about/) - WordPress.orgをベースにしたサイトを、ユーザープロフィール、アクティビティストリーム、ユーザーグループなど、ソーシャルネットワーク機能でさらに強化する強力なプラグイン。([ソースコード](https://github.com/buddypress/BuddyPress)) `GPL-2.0` `PHP`
- [Coral](https://coralproject.net/) - Vox Mediaのコメントシステム。原文ではより良いコメント体験を提供すると紹介されています。([ソースコード](https://github.com/coralproject/talk)) `Apache-2.0` `Docker/Nodejs`
- [diaspora*](https://diasporafoundation.org/) - 分散型ソーシャルネットワーキングサーバー。([ソースコード](https://github.com/diaspora/diaspora)) `AGPL-3.0` `Ruby`
- [Discourse](https://www.discourse.org/) - RubyおよびJSをベースとした高度なフォーラム／コミュニティソリューション。([デモ](https://try.discourse.org/), [ソースコード](https://github.com/discourse/discourse)) `GPL-2.0` `Docker`
- [Elgg](https://elgg.org/) - 強力なオープンソースソーシャルネットワーキングエンジン。([ソースコード](https://github.com/Elgg/Elgg)) `GPL-2.0` `PHP`
- [Enigma 1/2 BBS](https://nuskooler.github.io/enigma-bbs/) - 従来のDOSドアゲームに対応する、複数プラットフォーム向けのBBSエンジン。原文では接続ユーザー数に制限がないと紹介されています。([ソースコード](https://github.com/NuSkooler/enigma-bbs)) `BSD-2-Clause` `Shell/Docker/Nodejs`
- [Flarum](https://flarum.org) - シンプルなフォーラムソフトウェア。原文ではオンラインの議論を再び楽しめる次世代のものと紹介されています。([ソースコード](https://github.com/flarum/flarum)) `MIT` `PHP`
- [Friendica](https://friendi.ca/) - ソーシャルコミュニケーションサーバー。([ソースコード](https://github.com/friendica/friendica)) `AGPL-3.0` `PHP`
- [GoToSocial](https://docs.gotosocial.org/en/latest/) - ActivityPubを実装した、MastodonクライアントAPIに対応するフェデレート型ソーシャルネットワーキングサーバー。（[ソースコード](https://codeberg.org/superseriousbusiness/gotosocial)） `AGPL-3.0` `Docker/Go`
- [Habitat](https://gethabitat.org/) - 地域コミュニティ向けのプラットフォーム。（[ソースコード](https://github.com/carlnewton/habitat)） `AGPL-3.0` `Docker`
- [Hatsu](https://hatsu.cli.rs/) - 静的サイトに代わってFediverseとの通信を担うブリッジ。（[ソースコード](https://github.com/importantimport/hatsu)） `AGPL-3.0` `Docker/Rust`
- [Hubzilla](https://hubzilla.org) - 分散型のID管理、プライバシー、公開、共有、クラウドストレージ、通信・交流を提供するプラットフォーム。（[ソースコード](https://framagit.org/hubzilla/core)） `MIT` `PHP`
- [HumHub](https://www.humhub.org/) - プライベートなソーシャルネットワーク向けのフレキシブルなツールキット。（[ソースコード](https://github.com/humhub/humhub)） `AGPL-3.0` `PHP`
- [Iceshrimp.NET](https://iceshrimp.net) - ActivityPubを介して通信するフェデレート型マイクロブロギングサーバー。（[ソースコード](https://iceshrimp.dev/iceshrimp/iceshrimp.net)） `EUPL-1.2` `.NET/C#/Docker`
- [Isso](https://isso-comments.de/) - PythonとJavaScriptで書かれた軽量コメントサーバー。Disqusの代替として使用できるように設計されている。（[ソースコード](https://github.com/isso-comments/isso)） `MIT` `Python/Docker`
- [Lemmy](https://join-lemmy.org/) - Fediverse向けのリンク集計ツール（Redditの代替）。（[ソースコード](https://github.com/LemmyNet/lemmy)） `AGPL-3.0` `Docker/Rust`
- [Loomio](https://www.loomio.org/) - 自分に影響する意思決定へ誰もが参加しやすくする、共同意思決定ツールです。（[ソースコード](https://github.com/loomio/loomio)） `AGPL-3.0` `Docker`
- [Mastodon](https://joinmastodon.org/) - フェデレート型マイクロブロギングサーバー。（[ソースコード](https://github.com/mastodon/mastodon), [クライアント](https://github.com/hyperupcall/awesome-mastodon)） `AGPL-3.0` `Ruby`
- [Misago](https://misago-project.org/) - 多機能で高速かつ規模を拡張でき、画面サイズに適応するフォーラムアプリケーションです。（[ソースコード](https://github.com/rafalp/Misago)） `GPL-2.0` `Docker`
- [Misskey](https://misskey.io/) - ActivityPubでGNU socialやMastodonと連携する、分散型マイクロブログ・SNSサーバー。アプリのような操作感を備えています。（[ソースコード](https://github.com/misskey-dev/misskey)） `AGPL-3.0` `Nodejs/Docker`
- [Movim](https://movim.eu/) - XMPPを基盤とする現代的な連合型SNS。多機能なグループチャット、購読、マイクロブログを備えています。（[ソースコード](https://github.com/movim/movim)） `AGPL-3.0` `PHP/Docker`
- [MyBB](https://mybb.com/) - 自由に利用・改変できる、拡張可能なフォーラムソフトウェアパッケージです。（[ソースコード](https://github.com/mybb/mybb)） `LGPL-3.0` `PHP`
- [NodeBB](https://nodebb.org/) - 現代ウェブ向けに設計されたフォーラムソフトウェア。（[デモ](https://try.nodebb.org/), [ソースコード](https://github.com/NodeBB/NodeBB)） `GPL-3.0` `Nodejs/Docker`
- [OSSN](https://www.opensource-socialnetwork.org/) - SNSサイトを作成するソフトウェア。仕事や個人の関心を共有するメンバー同士のつながりを支援します。（[ソースコード](https://github.com/opensource-socialnetwork/opensource-socialnetwork)） `CAL-1.0` `PHP`
- [phpBB](https://www.phpbb.com/) - グループ内の連絡に利用できる、スレッドを平面的に表示する掲示板ソフトウェア。Webサイト全体の基盤としても利用できます。（[ソースコード](https://github.com/phpbb/phpbb)） `GPL-2.0` `PHP`
- [PieFed](https://join.piefed.social) - Fediverse向けのリンク集計ツール／Redditのクローン（Redditの代替）。（[デモ](https://piefed.social), [ソースコード](https://codeberg.org/rimu/pyfedi)） `AGPL-3.0` `Python/Docker`
- [PixelFed](https://pixelfed.social) - 倫理的な写真共有プラットフォーム。ActivityPubフェデレーションによって駆動（Instagramの代替）。（[ソースコード](https://github.com/pixelfed/pixelfed)） `AGPL-3.0` `PHP`
- [Pleroma](https://pleroma.social) - フェデレート型マイクロブロギングサーバー、Mastodon、GNU social、およびActivityPub対応。（[ソースコード](https://git.pleroma.social/pleroma/pleroma)） `AGPL-3.0` `Elixir`
- [qpixel](https://codidact.com/) - Q&Aベースのコミュニティによる知識共有ソフトウェア。 ([ソースコード](https://github.com/codidact/qpixel)) `AGPL-3.0` `Ruby`
- [Redlib](https://github.com/redlib-org/redlib) `外部プロプライエタリサービス依存` - Libredditを起源とする、プライバシーを重視したRedditの代替フロントエンド。 `AGPL-3.0` `Rust`
- [remark42](https://remark42.com/) - 利用者を追跡しない、軽量でシンプルなコメントエンジン。ブログや記事など、読者がコメントを投稿する場所に埋め込めます。 ([デモ](https://remark42.com/demo/), [ソースコード](https://github.com/umputun/remark42)) `MIT` `Docker/Go`
- [Scoold](https://scoold.com) - 全文検索、SAML、LDAP連携、ソーシャルログインに対応する、JAR形式の企業向けQ&Aプラットフォーム。原文ではJARに収めたStack Overflowのようなものと紹介されています。 ([デモ](https://live.scoold.com), [ソースコード](https://github.com/Erudika/scoold)) `Apache-2.0` `Java/Docker/K8S`
- [Simple Machines Forum](https://www.simplemachines.org/) - 自由に利用・改変できるコミュニティ構築用ソフトウェア。原文では業務品質で、数分でオンラインコミュニティを作れると紹介されています。 ([ソースコード](https://github.com/SimpleMachines/SMF)) `BSD-3-Clause` `PHP`
- [Socialhome](https://socialhome.network) - 連合型かつ分散型のプロフィール作成・SNSエンジン。 ([デモ](https://socialhome.network/), [ソースコード](https://github.com/jaywink/socialhome)) `AGPL-3.0` `Docker/Python`
- [Talkyard](https://www.talkyard.io/) - アイデアの提案、質問への回答、自由な議論やチャットを行うコミュニティを構築するツール。Slack、Stack Overflow、Discourse、Reddit、Disqusを組み合わせたものとして紹介されています。 ([デモ](https://www.talkyard.io/forum/latest), [ソースコード](https://github.com/debiki/talkyard)) `AGPL-3.0` `Docker/Scala`
- [yarn.social](https://yarn.social) - セルフホスト型のTwitter風分散マイクロブログプラットフォーム。広告やトラッキングを使わず、自分のコンテンツとデータを管理します。 ([ソースコード](https://git.mills.io/yarnsocial/yarn)) `MIT` `Go`

### 通信：ビデオ会議 <a id="communication---video-conferencing"></a>

[ビデオ・Web会議](https://en.wikipedia.org/wiki/Web_conferencing) ツールとソフトウェア。

関連資料： [学術会議の管理](#conference-management)

- [BigBlueButton](https://bigbluebutton.org/) - 音声、映像、ホワイトボード操作付きスライド、チャット、画面をリアルタイムで共有できます。講師はアンケート、絵文字、ブレイクアウトルームを使って遠隔の受講者とやり取りできます。 ([ソースコード](https://github.com/bigbluebutton/bigbluebutton)) `LGPL-3.0` `Java`
- [Galene](https://galene.org/) - 導入が容易で、中程度のサーバー資源で動作する映像会議サーバー。 ([ソースコード](https://github.com/jech/galene)) `MIT` `Go`
- [Janus](https://janus.conf.meetecho.com/) - 汎用の軽量かつ最小限の構成を持つWebRTCサーバー。 ([デモ](https://janus.conf.meetecho.com/demos/), [ソースコード](https://github.com/meetecho/janus-gateway)) `GPL-3.0` `C`
- [Jitsi Meet](https://jitsi.org/Projects/JitsiMeet) - Jitsi Videobridgeを用いるWebRTC映像会議アプリケーション。原文では高品質で規模を拡張できると紹介されています。 ([デモ](https://meet.jit.si), [ソースコード](https://github.com/jitsi/jitsi-meet)) `Apache-2.0` `Nodejs/Docker/deb`
- [Jitsi Video Bridge](https://jitsi.org/Projects/JitsiVideobridge) - WebRTC対応の選択的フォワーディングユニット（SFU）により、複数ユーザー間のビデオ通信が可能。 ([ソースコード](https://github.com/jitsi/jitsi-videobridge)) `Apache-2.0` `Java/deb`
- [MiroTalk C2C](https://c2c.mirotalk.com) - エンドツーエンド暗号化を備えたリアルタイム映像通話・画面共有ツール。シンプルなiframeで任意のWebサイトへ埋め込めます。 ([ソースコード](https://github.com/miroslavpejic85/mirotalkc2c)) `AGPL-3.0` `Nodejs/Docker`
- [MiroTalk P2P](https://p2p.mirotalk.com) - リアルタイム映像会議ツール。原文ではシンプルで安全かつ高速、最大4k・60fpsで全ブラウザーとプラットフォームに対応すると紹介されています。 ([デモ](https://p2p.mirotalk.com/newcall), [ソースコード](https://github.com/miroslavpejic85/mirotalk)) `AGPL-3.0` `Nodejs/Docker`
- [MiroTalk SFU](https://sfu.mirotalk.com) - 規模を拡張できるリアルタイム映像会議ツール。原文ではシンプルで安全、最大4kで全ブラウザーとプラットフォームに対応すると紹介されています。 ([デモ](https://sfu.mirotalk.com/newroom), [ソースコード](https://github.com/miroslavpejic85/mirotalksfu)) `AGPL-3.0` `Nodejs/Docker`
- [plugNmeet](https://www.plugnmeet.org/) - スケーラブルかつ高性能なウェブ会議システム。 ([デモ](https://demo.plugnmeet.com/login.html), [ソースコード](https://github.com/mynaparrot/plugNmeet-server)) `MIT` `Docker/Go`

### 通信：XMPPサーバー <a id="communication---xmpp---servers"></a>

[XMPP（Extensible Messaging and Presence Protocol）](https://en.wikipedia.org/wiki/XMPP) サーバー。

- [ejabberd](https://www.ejabberd.im/) - XMPPのインスタントメッセージングサーバー。 ([ソースコード](https://github.com/processone/ejabberd)) `GPL-2.0` `Erlang/Docker`
- [MongooseIM](https://www.erlang-solutions.com/products/mongooseim.html) - 性能と規模の拡張性を重視したモバイル向けメッセージングプラットフォーム。 ([ソースコード](https://github.com/esl/MongooseIM)) `GPL-2.0` `Erlang/Docker/K8S`
- [Openfire](https://www.igniterealtime.org/projects/openfire/) - リアルタイム協働（RTC）サーバー。 ([ソースコード](https://github.com/igniterealtime/Openfire)) `Apache-2.0` `Java`
- [Prosody IM](https://prosody.im/) - 機能が豊富で設定が容易なXMPPサーバー。（[ソースコード](https://hg.prosody.im/)） `MIT` `Lua`
- [Snikket](https://snikket.org/) - Web管理画面とクライアントを含み、Dockerで導入できる総合XMPPソリューションです。（[ソースコード](https://github.com/snikket-im/snikket-server), [クライアント](https://snikket.org/app/)） `Apache-2.0` `Docker`
- [Tigase](https://tigase.net/xmpp-server) - Javaで実装されたXMPPサーバー。（[ソースコード](https://github.com/tigase/tigase-server)） `GPL-3.0` `Java`

### 通信：XMPPのWebクライアント <a id="communication---xmpp---web-clients"></a>

[XMPP（Extensible Messaging and Presence Protocol）](https://en.wikipedia.org/wiki/XMPP) ネットワーククライアント/インターフェース。

- [Converse.js](https://conversejs.org/) - ブラウザ上で動作するXMPPチャットクライアント。（[ソースコード](https://github.com/conversejs/converse.js)） `MPL-2.0` `Javascript`
- [Libervia](https://repos.goffi.org/libervia-web) - Salut à Toiからのウェブフロントエンド。 `AGPL-3.0` `Python`
- [Salut à Toi](https://www.salut-a-toi.org/) - 複数のフロントエンドを備える、多目的な自由ソフトウェアの分散通信ツール。（[ソースコード](https://repos.goffi.org/libervia-backend)） `AGPL-3.0` `Python`

### 地域支援型農業（CSA） <a id="community-supported-agriculture-csa"></a>

地域支援型農業と食品協同組合向けの運営・管理ツールです。

関連資料： [電子商取引](#e-commerce)

- [ACP Admin](https://acp-admin.ch/) - 地域支援型農業（CSA）の運営管理ツール。メンバー、定期購入、配達、受け渡し場所、参加状況、請求書、メールを管理します（ドキュメントはフランス語）。（[ソースコード](https://github.com/csa-admin-org/csa-admin)） `MIT` `Ruby`
- [FoodCoopShop](https://www.foodcoopshop.com/) - 食品共同購入組合向けの使いやすいソフトウェアです。（[ソースコード](https://github.com/foodcoopshop/foodcoopshop)） `AGPL-3.0` `PHP/Docker`
- [Foodsoft](https://foodcoops.net/) - 商品カタログ、注文、会計、作業スケジュールなど、非営利の食品共同購入組合を管理します。（[ソースコード](https://github.com/foodcoops/foodsoft)） `AGPL-3.0` `Docker/Ruby`
- [Hive-Pal](https://hivepal.app) - 巣箱、点検、女王蜂の記録、設備を追跡する養蜂管理アプリ。モバイルでの利用を重視し、現場で効率よく入力できるように設計されています。（[デモ](https://hivepal.app), [ソースコード](https://github.com/martinhrvn/hive-pal)） `MIT` `Nodejs/Docker`
- [juntagrico](https://juntagrico.org/) - 共同菜園や野菜の共同購入組合向けの管理プラットフォームです。（[ソースコード](https://github.com/juntagrico/juntagrico)） `LGPL-3.0` `Python`
- [Open Food Network](https://www.openfoodnetwork.org/) - 地域の食品のオンラインマーケットプレイス。農家や食品の集配拠点が、個人や地域企業とつながるネットワークを構築します。（[ソースコード](https://github.com/openfoodfoundation/openfoodnetwork)） `AGPL-3.0` `Ruby`
- [OpenOlitor](https://openolitor.org/) - 地域支援型農業（CSA）のグループ向け運営管理プラットフォームです。（[ソースコード](https://github.com/OpenOlitor/openolitor-server)） `AGPL-3.0` `Scala`
- [teikei](https://github.com/teikei/teikei) - 利用者から集めたデータを基に、地域支援型農業（CSA）を地図に表示するWebアプリです。（[デモ](https://ernte-teilen.org/karte/#/)） `AGPL-3.0` `Nodejs`

### 学術会議の管理 <a id="conference-management"></a>

学術会議の[要旨](https://en.wikipedia.org/wiki/Abstract_management)提出と、会議の準備・管理のためのソフトウェアです。

関連資料： [通信：ビデオ会議](#communication---video-conferencing)

- [indico](https://getindico.io/) - CERNで開発された、多機能なイベント管理システム。原文ではCERNがWebの発祥地であることにも触れています。（[デモ](https://sandbox.getindico.io/), [ソースコード](https://github.com/indico/indico)） `MIT` `Python`
- [motion.tools (Antragsgrün)](https://motion.tools/) - （政治）会議における議案および修正案の管理。（[デモ](https://sandbox.motion.tools/createsite), [ソースコード](https://github.com/CatoTH/antragsgruen)） `AGPL-3.0` `PHP/Docker`
- [OpenSlides](https://openslides.com/) - 集会の議題、動議、選挙を管理して投影する、プレゼンテーション・集会運営システムです。（[デモ](https://demo.openslides.org/login), [ソースコード](https://github.com/OpenSlides/OpenSlides)） `MIT` `Docker`
- [osem](https://osem.io/) - 自由ソフトウェアのカンファレンス向けイベント管理ツールです。（[ソースコード](https://github.com/openSUSE/osem)） `MIT` `Ruby/Docker`
- [pretalx](https://pretalx.org) - 発表の募集、応募内容の審査、講演日程を管理するWebベースのイベント管理ツール。各種関連ツールとのデータの入出力に対応します。（[ソースコード](https://github.com/pretalx/pretalx)） `Apache-2.0` `Python`

### コンテンツ管理システム（CMS） <a id="content-management-systems-cms"></a>

[コンテンツ管理システム](https://en.wikipedia.org/wiki/Content_management_system)は、第三者のプラグイン、テーマ、機能を追加・調整して、多機能なWebサイトを構築しやすくします。

関連資料： [ブログ基盤](#blogging-platforms), [静的サイトジェネレーター](#static-site-generators), [写真ギャラリー](#photo-galleries)

- [Alfresco Community Edition](https://www.alfresco.com/products/community/download) - コンテンツの種類を問わず、共有や共同作業を支援するオープンソースの企業向けコンテンツ管理ソフトウェア。（[ソースコード](https://github.com/Alfresco/alfresco-community-repo)） `LGPL-3.0` `Java`
- [Apostrophe](https://apostrophecms.com/) - 表示中のコンテンツをその場で編集するツールの拡張性を重視したCMSです。([デモ](https://apostrophecms.com/demo), [ソースコード](https://github.com/apostrophecms/apostrophe)) `MIT` `Nodejs`
- [Automad](https://automad.org/) - フラットファイルコンテンツ管理システムおよびテンプレートエンジン。([デモ](https://try.automad.org/), [ソースコード](https://github.com/marcantondahmen/automad)) `MIT` `PHP/Docker`
- [Backdrop CMS](https://backdropcms.org/) - 中小企業や非営利団体向けの包括的なCMS。([ソースコード](https://github.com/backdrop/backdrop)) `GPL-2.0` `PHP`
- [Bludit](https://www.bludit.com/) `外部プロプライエタリサービス依存` - 投稿やページをJSON形式のテキストファイルに保存するCMS。原文では数秒でサイトやブログを構築できると紹介されています。([ソースコード](https://github.com/bludit/bludit)) `MIT` `PHP`
- [Bolt CMS](https://boltcms.io/) - できるだけシンプルで明確なコンテンツ管理ツール。([ソースコード](https://github.com/bolt/core)) `MIT` `PHP`
- [CMS Made Simple](https://www.cmsmadesimple.org/) - Webコンテンツの管理を迅速かつ容易にするCMS。中小企業から大企業まで規模を拡張できます。([ソースコード](http://svn.cmsmadesimple.org/svn/cmsmadesimple/trunk/)) `GPL-2.0` `PHP`
- [Cockpit](https://getcockpit.com) - どんな構造化コンテンツも管理できるシンプルなコンテンツプラットフォーム。([ソースコード](https://github.com/Cockpit-HQ/Cockpit)) `MIT` `PHP`
- [Concrete 5 CMS](https://www.concretecms.com) - オープンソースコンテンツ管理システム。([ソースコード](https://github.com/concretecms/concretecms)) `MIT` `PHP`
- [Contao](https://contao.org/) - プロフェッショナルなウェブサイトやスケーラブルなウェブアプリケーションを作成できる強力なCMS。([デモ](https://demo.contao.org/contao), [ソースコード](https://github.com/contao/contao/)) `LGPL-3.0` `PHP`
- [CouchCMS](https://www.couchcms.com/) - デザイナー向けのCMS。([ソースコード](https://github.com/CouchCMS/CouchCMS)) `CPAL-1.0` `PHP`
- [Drupal](https://www.drupal.org/) - 高度なオープンソースコンテンツ管理プラットフォーム。([ソースコード](https://git.drupalcode.org/project/drupal)) `GPL-2.0` `PHP`
- [eLabFTW](https://www.elabftw.net) - 研究室向けのオンライン実験ノート。実験を保存し、試薬や実験手順をデータベースで検索し、PDF・ZIPとして書き出して共同研究者と共有できます。原文では信頼できるタイムスタンプを使って実験を法的に記録できると紹介されています。([デモ](https://demo.elabftw.net), [ソースコード](https://github.com/elabftw/elabftw)) `AGPL-3.0` `PHP`
- [Expressa](https://github.com/thomas4019/expressa) - JSONスキーマを使用したデータベース駆動型ウェブサイトを動かすためのコンテンツ管理システム。権限管理と自動REST APIを提供。(`MIT`, `Nodejs`)
- [Joomla!](https://www.joomla.org/) - 高度なコンテンツ管理システム（CMS）。([ソースコード](https://github.com/joomla/joomla-cms)) `GPL-2.0` `PHP`
- [KeystoneJS](https://keystonejs.com/) - CMSおよびウェブアプリケーションプラットフォーム。([ソースコード](https://github.com/keystonejs/keystone)) `MIT` `Nodejs`
- [Localess](https://localess.org/home) `外部プロプライエタリサービス依存` - 強力な翻訳管理およびコンテンツ管理システム。AIを活用して、あなたのウェブサイトやアプリのコンテンツを複数言語に管理・翻訳できる。([ソースコード](https://github.com/Lessify/localess)) `MIT` `Docker`
- [MODX](https://modx.com/) - 高度な機能を備えたコンテンツ管理・公開プラットフォーム。固定原文でのバージョン名はRevolutionです。([ソースコード](https://github.com/modxcms/revolution)) `GPL-2.0` `PHP`
- [Neos](https://www.neos.io) - NeosまたはTYPO3 Neos（バージョン1用）は、現代的なオープンソースCMSである。([ソースコード](https://github.com/neos)) `GPL-3.0` `PHP`
- [Noosfero](https://gitlab.com/noosfero/noosfero) - 社会的連帯経済のネットワーク向けプラットフォーム。ブログ、電子ポートフォリオ、CMS、RSS、テーマ別議論、イベント予定、社会的連帯経済のための集団知を一つのシステムで扱います。 `AGPL-3.0` `Ruby`
- [Omeka](https://omeka.org) - Dublin Core規格に準拠し、複雑な物語や豊富なコレクションをサーバー上に構築・共有するツール。研究者、博物館、図書館、文書館、愛好家向けに設計されています。([デモ](https://omeka.org/classic/showcase/), [ソースコード](https://github.com/omeka/Omeka)) `GPL-3.0` `PHP`
- [Payload CMS](https://payloadcms.com/) - 開発者中心のヘッドレスCMSおよびアプリケーションフレームワーク。（[ソースコード](https://github.com/payloadcms/payload)）`MIT` `Nodejs`
- [Pimcore](http://www.pimcore.com/) - マルチチャネル体験およびエンゲージメント管理プラットフォーム。（[ソースコード](https://github.com/pimcore/pimcore)）`GPL-3.0` `PHP/Docker`
- [Plone](https://plone.org/) - 強力なオープンソースCMSシステム。（[ソースコード](https://github.com/plone)）`ZPL-2.0` `Python/Docker`
- [Publify](https://publify.github.io/) - シンプルながらも機能が豊富なウェブ出版ソフトウェア。（[ソースコード](https://github.com/publify/publify)）`MIT` `Ruby`
- [Pushword](https://pushword.piedweb.com) - Symfonyに基づくコンテンツ管理システム。ページはMarkdown、テーマはTwigで、オプションでGitベースのフラットファイルストレージをサポート。（[ソースコード](https://github.com/Pushword/Pushword)，[クライアント](https://pushword.piedweb.com/extensions)）`MIT` `PHP`
- [REDAXO](https://www.redaxo.org) - シンプルで柔軟な、使いやすいコンテンツ管理システム（ドキュメントはドイツ語）。（[ソースコード](https://github.com/redaxo/core)）`MIT` `PHP/Docker`
- [SilverStripe](https://www.silverstripe.org) - 使いやすいCMSで、強力なMVCフレームワークをベースにしている。（[デモ](https://demo.silverstripe.org/)，[ソースコード](https://github.com/silverstripe)）`BSD-3-Clause` `PHP`
- [SPIP](https://www.spip.net/fr) - ウェブ作者にとって使いやすい、協働作業、多言語環境、シンプルな運用を目的としたインターネット向け出版システム。（[ソースコード](https://git.spip.net/)）`GPL-3.0` `PHP`
- [Squidex](https://squidex.io) - MongoDB、CQRS、イベントソーシングを基盤とするヘッドレスCMSです。（[デモ](https://cloud.squidex.io)，[ソースコード](https://github.com/Squidex/squidex)）`MIT` `.NET`
- [Strapi](https://strapi.io/) - 高機能なAPIを構築するためのオープンソースのヘッドレスCMS。原文では最も先進的で、手間なくAPIを構築できると紹介されています。（[ソースコード](https://github.com/strapi/strapi)）`MIT` `Nodejs`
- [Superdesk](https://superdesk.org/) `外部プロプライエタリサービス依存` - ニュースの作成、生産、キュレーション、配信、公開を一貫して行うプラットフォーム。（[ソースコード](https://github.com/superdesk/superdesk)）`AGPL-3.0` `Docker/Python/PHP`
- [Textpattern](https://textpattern.com/) - 柔軟で洗練され、使いやすいCMS。（[デモ](https://textpattern.co/demo)，[ソースコード](https://github.com/textpattern/textpattern)）`GPL-2.0` `PHP`
- [Typemill](https://typemill.net/) - コンテンツ作成者が使いやすい、フラットファイル型CMS。Vue.jsを基盤とする視覚的なMarkdownエディターを備えています。（[ソースコード](https://github.com/typemill/typemill)）`MIT` `PHP`
- [TYPO3](https://typo3.org/) - 強力で先進的なCMSで、大きなコミュニティを有している。（[ソースコード](https://github.com/TYPO3/typo3)）`GPL-2.0` `PHP`
- [Umbraco](https://umbraco.com/) - 自由なオープンソースCMS。原文では親しみやすく、優れたコミュニティがあると紹介されています。（[ソースコード](https://github.com/umbraco/Umbraco-CMS)）`MIT` `.NET`
- [Vvveb CMS](https://www.vvveb.com) - 強力で使いやすいCMSで、ウェブサイト、ブログ、電子商取引ストアを構築できる。（[デモ](https://demo.vvveb.com)，[ソースコード](https://github.com/givanz/Vvveb)）`AGPL-3.0` `PHP/Docker`
- [Wagtail](https://wagtail.io/) - Djangoに基づくコンテンツ管理システムで、柔軟性とユーザーエクスペリエンスに焦点を当てている。（[ソースコード](https://github.com/wagtail/wagtail)）`BSD-3-Clause` `Python`
- [WinterCMS](https://wintercms.com/) - Laravel PHPフレームワークを基盤とするCMS。原文では高速で安全と紹介されています。（[ソースコード](https://github.com/wintercms/winter)）`MIT` `PHP`
- [WonderCMS](https://www.wondercms.com) - フラットファイルCMS。原文では2008年以降で最小と紹介されています。（[デモ](https://www.wondercms.com/demo)，[ソースコード](https://github.com/WonderCMS/wondercms)）`MIT` `PHP`
- [WordPress](https://wordpress.org/) - ブログ・CMSエンジン。原文では世界で最も使われていると紹介されています。（[ソースコード](https://github.com/WordPress/WordPress)）`GPL-2.0` `PHP`

### 顧客関係管理（CRM） <a id="customer-relationship-management-crm"></a>

[顧客関係管理（CRM）](https://en.wikipedia.org/wiki/Customer_relationship_management)は、組織と顧客とのやり取りを管理・分析・改善するための戦略的なプロセスです。

関連資料： [通信：メーリングリストとニュースレター](#communication---email---mailing-lists-and-newsletters), [データ分析](#analytics), [カレンダーと連絡先](#calendar--contacts)

- [Corteza](https://docs.cortezaproject.org) - 統合ワークスペース、企業向けメッセージング、ローコード環境を備えるCRM。レコードを扱う管理システムを迅速かつ安全に提供するためのツールです。([デモ](https://latest.cortezaproject.org), [ソースコード](https://github.com/cortezaproject/corteza)) `Apache-2.0` `Go`
- [Django-CRM](https://DjangoCRM.github.io/info/) - タスク管理やメールマーケティングなどの機能を備える分析用CRM。個人、あらゆる規模の企業、フリーランス向けに、カスタマイズや開発を容易にするよう設計されています。([ソースコード](https://github.com/DjangoCRM/django-crm)) `AGPL-3.0` `Python`
- [EspoCRM](https://www.espocrm.com/) - シングルページアプリケーション形式のフロントエンドとREST APIを備えるCRM。([デモ](https://demo.espocrm.com/), [ソースコード](https://github.com/espocrm/espocrm)) `AGPL-3.0` `PHP`
- [Krayin](https://krayincrm.com/) - 中小企業および大企業向けの顧客ライフサイクル管理を可能にするCRMソリューション。([デモ](https://demo.krayincrm.com/), [ソースコード](https://github.com/krayin/laravel-crm)) `MIT` `PHP`
- [Monica](https://monicahq.com/) - 個人用の関係管理ツールであり、友人や家族とのやり取りを整理するための新しいタイプのCRM。([ソースコード](https://github.com/monicahq/monica)) `AGPL-3.0` `PHP/Docker`
- [SuiteCRM](https://suitecrm.com) - 企業向けオープンソースCRM。原文では受賞歴があると紹介されています。([ソースコード](https://github.com/SuiteCRM/SuiteCRM)) `AGPL-3.0` `PHP`
- [Twenty](https://twenty.com) - 現代的なCRMで、オープンソースの柔軟性、高度な機能、そして洗練されたデザインを提供。([ソースコード](https://github.com/twentyhq/twenty)) `AGPL-3.0` `Docker`

### データベース管理 <a id="database-management"></a>

[データベース](https://en.wikipedia.org/wiki/Database)を管理するWebインターフェースです。分析・可視化ツールも含みます。

関連資料： [データ分析](#analytics), [自動化](#automation)

関連資料： [dbdb.io - Database of Databases](https://dbdb.io/)

- [Adminer](https://www.adminer.org/) - 1つのPHPファイルでデータベース管理。MySQL、MariaDB、PostgreSQL、SQLite、MS SQL、Oracle、Elasticsearch、MongoDBなどに対応。([ソースコード](https://github.com/vrana/adminer)) `Apache-2.0/GPL-2.0` `PHP`
- [Azimutt](https://azimutt.app) - 大規模で複雑な実際のデータベースを視覚的に探索するツール。スキーマやデータの調査、文書化、拡張に対応し、分析結果や指針も得られます。([デモ](https://azimutt.app/gallery/gospeak), [ソースコード](https://github.com/azimuttapp/azimutt)) `MIT` `Elixir/Nodejs/Docker`
- [Baserow](https://baserow.io/) - 技術経験がなくても自作データベースを作成できる（Airtableの代替）。([ソースコード](https://gitlab.com/baserow/baserow)) `MIT` `Docker`
- [Bytebase](https://www.bytebase.com/) - DevOpsチーム向けの安全なデータベーススキーマ変更とバージョン管理。MySQL、PostgreSQL、TiDB、ClickHouse、Snowflakeに対応。([デモ](https://demo.bytebase.com), [ソースコード](https://github.com/bytebase/bytebase)) `MIT` `Docker/K8S/Go`
- [Chartbrew](https://chartbrew.com) - データベースやAPIに直接接続し、データを使って美しいチャートを作成できる。([デモ](https://app.chartbrew.com/live-demo), [ソースコード](https://github.com/chartbrew/chartbrew)) `MIT` `Nodejs/Docker`
- [ChartDB](https://chartdb.io/) - 単一のクエリでデータベースを可視化・設計できる、データベース図の編集ツールです。([デモ](https://app.chartdb.io), [ソースコード](https://github.com/chartdb/chartdb)) `AGPL-3.0` `Nodejs/Docker`
- [CloudBeaver](https://dbeaver.com/) - データベースを管理。PostgreSQL、MySQL、SQLiteなどに対応。DBeaverのウェブ/ホスティング版。([ソースコード](https://github.com/dbeaver/cloudbeaver)) `Apache-2.0` `Docker`
- [d9](https://d9.webcapsule.io) - SQLデータベースを直感的な管理インターフェースで安全なAPIに変換。データプラットフォームおよびヘッドレスCMS（Directusのフォーク）。([ソースコード](https://github.com/LaWebcapsule/d9)) `GPL-3.0` `Nodejs`
- [Databunker](https://databunker.org/) - 個人データや個人を識別できる情報（PII）向けの、ネットワーク経由で使えるセルフホスト型データベース。原文では安全性とGDPR適合を備えると紹介されています。([ソースコード](https://github.com/securitybunker/databunker)) `MIT` `Docker`
- [Datasette](https://datasette.io/) - データの探索と公開を簡単なインポート・エクスポートとデータベース管理で行える。([ソースコード](https://github.com/simonw/datasette)) `Apache-2.0` `Python/Docker`
- [Evidence](https://evidence.dev) - SQLとMarkdownで作成したレポートをWebサイトとして表示する、コードベースのBIツールです。([ソースコード](https://github.com/evidence-dev/evidence)) `MIT` `Nodejs`
- [LibreDB Studio](https://libredb.org) - PostgreSQL、MySQL、Oracle、SQL Server、SQLite、MongoDB、Redis向けのブラウザー上のSQL IDE。自然言語からSQLを作成するAIアシスタントをオプションで利用できます（DataGrip、DBeaverの代替）。([ソースコード](https://github.com/libredb/libredb-studio)) `MIT` `Docker/K8S`
- [Limbas](https://www.limbas.com/en/) - データベースを使う業務アプリを構築するフレームワーク。GUIのデータベースフロントエンドとして、蓄積データの効率的な処理と、使いやすいデータベースアプリの柔軟な開発を支援します。([ソースコード](https://github.com/limbas/limbas)) `GPL-2.0` `PHP`
- [Mathesar](https://mathesar.org/) - 技術力を問わず、直感的なUIで共同してデータを管理するツール。Postgresを基盤とし、既存のDBへの接続や新規DBの作成に対応します。（[ソースコード](https://github.com/mathesar-foundation/mathesar)） `GPL-3.0` `Docker/Python`
- [OrcaQ](https://orca-q.com) - 複数種のデータベースを管理・照会・探索する、現代的なデータベースクライアント兼IDE。AIアシスタントを内蔵しています。（[ソースコード](https://github.com/cin12211/orca-q)） `MIT` `Nodejs/deb/Docker`
- [StackRender](https://stackrender.io/) - PostgreSQL、MySQL、MariaDB、SQLite、SQL Server、Oracleをサポートするデータベーススキーマ設計およびSQLマイグレーションジェネレーター。（[デモ](https://app.stackrender.io/), [ソースコード](https://github.com/stackrender/stackrender)） `AGPL-3.0` `Nodejs/Docker`

### DNS

広告ブロック機能を備える[DNS](https://en.wikipedia.org/wiki/Domain_Name_System)サーバーと管理ツールです。主に家庭や小規模なネットワークを対象とします。

関連資料： [awesome-sysadmin/DNS - Servers](https://github.com/awesome-foss/awesome-sysadmin#dns---servers), [awesome-sysadmin/DNS - Control Panels & Domain Management](https://github.com/awesome-foss/awesome-sysadmin#dns---control-panels--domain-management)

- [AdGuard Home](https://adguard.com/en/adguard-home/overview.html) - 使いやすい、広告・トラッカー遮断用のDNSサーバー。（[ソースコード](https://github.com/AdguardTeam/AdGuardHome)） `GPL-3.0` `Docker`
- [blocky](https://0xerr0r.github.io/blocky/latest/) - 高速かつ軽量のDNSプロキシとして、ローカルネットワークの広告ブロッキングを実現。多くの機能を備えています（Pi-holeの代替）。（[ソースコード](https://github.com/0xERR0R/blocky)） `Apache-2.0` `Go/Docker`
- [Maza ad blocking](https://maza-ad-blocking.andros.dev/) - ローカルの広告ブロッカー。Pi-holeと同様ですが、ローカルで動作し、あなたのオペレーティングシステムを使用します。（[ソースコード](https://github.com/tanrax/maza-ad-blocking)） `Apache-2.0` `Shell`
- [Numa](https://numa.rs/) - DNSSEC検証付きの再帰名前解決、DoH/DoT/Oblivious DoH、一時的な上書き、ローカルサービス用ドメインを単一Rustバイナリで提供する広告ブロック対応DNSリゾルバー（Pi-hole、AdGuard Home、NextDNSの代替）です。（[ソースコード](https://github.com/razvandimescu/numa)） `MIT` `Rust/Docker/Nix`
- [Pi-hole](https://pi-hole.net/) - GUIで管理および監視できるインターネット広告のブラックホール。（[ソースコード](https://github.com/pi-hole/pi-hole)） `EUPL-1.2` `Shell/PHP/Docker`
- [Technitium DNS Server](https://technitium.com/dns/) - 広告ブロック機能を備えた、権威DNS・再帰DNSサーバーです。（[ソースコード](https://github.com/TechnitiumSoftware/DnsServer)） `GPL-3.0` `Docker/C#`

### 文書管理 <a id="document-management"></a>

[文書管理システム](https://en.wikipedia.org/wiki/Document_management_system)（DMS）は、文書の受領、追跡、管理、保管を行い、紙の使用を減らすためのシステムです。

- [BentoPDF](https://bentopdf.com) `外部プロプライエタリサービス依存` - ブラウザー上でPDFを操作・編集・結合・処理する、クライアント側の多機能なPDFツールキット。プライバシーを最優先する設計です。（[デモ](https://bentopdf.com), [ソースコード](https://github.com/alam00000/bentopdf)） `AGPL-3.0` `Nodejs/Docker`
- [Docspell](https://docspell.org) - 自動タグ付けによるドキュメント整理およびアーカイブ。（[ソースコード](https://github.com/eikek/docspell)） `GPL-3.0` `Scala/Java/Docker`
- [Documenso](https://documenso.com) - デジタルドキュメント署名プラットフォーム（DocuSignの代替）。（[ソースコード](https://github.com/documenso/documenso)） `AGPL-3.0` `Nodejs/Docker`
- [Docuseal](https://www.docuseal.co) - デジタル文書を作成し、必要事項を記入して署名できます（DocuSignの代替）。（[デモ](https://demo.docuseal.tech/), [ソースコード](https://github.com/docusealco/docuseal)） `AGPL-3.0` `Docker`
- [EveryDocs](https://github.com/jonashellmann/everydocs-core) - プライベート用途向けのシンプルなドキュメント管理システム。基本的な機能でドキュメントをデジタルに整理できます。`GPL-3.0` `Docker/Ruby`
- [Gotenberg](https://gotenberg.dev) - ChromiumやLibreOfficeなどを利用し、HTML、Markdown、Word、Excelなど多数の形式をPDFへ変換する、開発者向けAPIです。その他の機能も備えています。（[ソースコード](https://github.com/gotenberg/gotenberg)） `MIT` `Docker`
- [I, Librarian](https://i-librarian.net) - PDF論文およびオフィスドキュメントを整理。産業および学術分野の学生や研究グループに多くの追加機能を提供します。（[デモ](https://eu1.i-librarian.net/demo), [ソースコード](https://github.com/mkucej/i-librarian-free)） `GPL-3.0` `PHP`
- [Mayan EDMS](https://www.mayan-edms.com) - プレビュー生成、OCR、自動分類など、さまざまな機能を備えた電子ドキュメント管理システム。（[ソースコード](https://gitlab.com/mayan-edms/mayan-edms)） `GPL-2.0` `Docker/K8S`
- [OpenSign](https://www.opensignlabs.com) `外部プロプライエタリサービス依存` - ドキュメント署名ソフトウェア（DocuSignの代替）。（[ソースコード](https://github.com/opensignlabs/opensign)） `AGPL-3.0` `Nodejs/Docker`
- [Paperless-ngx](https://docs.paperless-ngx.com/) - 改善されたインターフェースで、すべての紙のドキュメントをスキャン・インデックス・アーカイブできます（Paperlessのフォーク）。（[デモ](https://demo.paperless-ngx.com/), [ソースコード](https://github.com/paperless-ngx/paperless-ngx)） `GPL-3.0` `Python/Docker`
- [Papermerge](https://papermerge.com) - スキャンした文書（電子アーカイブ）を扱う文書管理システム。DropboxやGoogle Driveのようなファイル閲覧、OCR、全文検索、テキストの重ね合わせ・選択に対応します。（[ソースコード](https://github.com/papermerge/papermerge-core)） `Apache-2.0` `Docker/K8S`
- [Papra](https://papra.app) - シンプルに使いやすく、誰でもアクセスできるドキュメントのストレージ、管理、アーカイブプラットフォーム。 ([デモ](https://demo.papra.app/), [ソースコード](https://github.com/papra-hq/papra/)) `AGPL-3.0` `Docker`
- [PdfDing](https://www.pdfding.com) - 複数の端末でスムーズに利用できるPDF管理・閲覧・編集ツール。構成が最小限で高速に動作し、Dockerで容易に導入できるよう設計されています。 ([デモ](https://demo.pdfding.com), [ソースコード](https://github.com/mrmn2/PdfDing)) `AGPL-3.0` `Docker/K8S`
- [SeedDMS](https://www.seeddms.org) - ワークフロー、アクセス権、全文検索などの機能を備える文書管理システム。 ([デモ](https://www.seeddms.org/about/), [ソースコード](https://sourceforge.net/p/seeddms/code/ci/master/tree/)) `GPL-2.0` `PHP`
- [Signature PDF](https://github.com/24eme/signaturepdf) - 共同作業、PDFの整理、圧縮、メタデータ編集に対応する、PDFの署名・操作ツールです。 ([デモ](https://pdf.24eme.fr/)) `AGPL-3.0` `PHP/deb/Docker`
- [SimpleDMS](https://simpledms.eu) - 小規模企業向けに使いやすく、メタデータ駆動のオープンソースドキュメント管理システム（DMS）。ドキュメントをほぼ自動で分類。 ([ソースコード](https://github.com/simpledms/simpledms), [クライアント](https://simpledms.eu/en/product/integrations)) `AGPL-3.0` `Docker`
- [Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) - PDFの結合、分割、形式変換、OCRなどを行う、ローカルでホストするWebアプリケーション。 `Apache-2.0` `Docker/Java`

### 文書管理：電子書籍 <a id="document-management---e-books"></a>

[電子書籍](https://en.wikipedia.org/wiki/Ebook) ライブラリ管理ソフトウェア。

- [Atsumeru](https://atsumeru.xyz) - マンガ／コミック／ライトノベルメディアサーバー。Windows、Linux、macOS、Android向けクライアントを提供。 ([ソースコード](https://github.com/Atsumeru-xyz/Atsumeru), [クライアント](https://atsumeru.xyz/guides/#how-does-it-work)) `MIT` `Java/Docker`
- [Bindery](https://github.com/jarynclouatre/bindery) - フォルダーを監視する電子書籍・コミック用コンバーター。kepubifyでEPUBをKobo KEPUBへ変換し、CBZ・CBR・PDFにはKindle Comic Converterを利用します。端末別プロファイル、ComicInfo.xmlによる命名、章を巻にまとめる機能、Web UIを備えています。 `MIT` `Docker`
- [BookLogr](https://github.com/Mozzo1000/booklogr) - 個人の蔵書を簡単に管理できます。 ([デモ](https://demo.booklogr.app/)) `Apache-2.0` `Docker`
- [Calibre Web Automated](https://github.com/crocodilestick/Calibre-Web-Automated) - Calibre-Webの軽量なWeb UIとCalibreの堅牢で多様な機能を組み合わせた総合ツール（Calibre Webの派生版）です。 `GPL-3.0` `Docker`
- [Calibre Web](https://github.com/janeczku/calibre-web) - 既存のCalibreデータベースを使い、電子書籍を閲覧・読書・ダウンロードするツール。 `GPL-3.0` `Python`
- [Calibre](https://calibre-ebook.com/) - 主要な電子書籍形式の表示・変換・目録作成に対応する蔵書管理ツール。遠隔のクライアント向けに内蔵Webサーバーを提供します。 ([デモ](https://calibre-ebook.com/demo), [ソースコード](https://github.com/kovidgoyal/calibre)) `GPL-3.0` `Python/deb`
- [Inkheart](https://gitlab.com/Nystik/inkheart) - 軽量なPDFライブラリとリーダー。 `Apache-2.0` `Docker`
- [Kapowarr](https://casvt.github.io/Kapowarr/) - コミックのライブラリを構築・管理します。各巻の号を好みに合わせてダウンロード、改名、移動、変換できます。 ([ソースコード](https://github.com/Casvt/Kapowarr)) `GPL-3.0` `Docker/Python`
- [Kavita](https://www.kavitareader.com/) - クロスプラットフォームの電子書籍／マンガ／コミック／PDFサーバーとウェブリーダー。ユーザー管理、評価、レビュー、メタデータサポートを提供。 ([デモ](https://www.kavitareader.com/#demo), [ソースコード](https://github.com/Kareadita/Kavita)) `GPL-3.0` `.NET/Docker`
- [kiwix-serve](https://github.com/kiwix/kiwix-tools) - ZIMファイルからWikiを提供するHTTPデーモン。 `GPL-3.0` `C++`
- [Komga](https://komga.org) - マンガ／コミック／BD向けメディアサーバー。APIおよびOPDSサポート、ライブラリを探索するための現代的なウェブインターフェース、ウェブリーダーを備える。 ([ソースコード](https://github.com/gotson/komga)) `MIT` `Java/Docker`
- [MyMangaDB](https://github.com/FabianRolfMatthiasNoll/MyMangaDB) `外部プロプライエタリサービス依存` - マンガコレクションマネージャー。自動メタデータ、MyAnimeListインポート、詳細なコレクション統計を提供。 `GPL-3.0` `Docker`
- [Stump](https://www.stumpapp.dev) - OPDSに対応する、高速で自由なオープンソースのコミック・漫画・電子書籍サーバーです。 ([ソースコード](https://github.com/stumpapp/stump)) `MIT` `Rust`

### 文書管理：機関リポジトリと電子図書館 <a id="document-management---institutional-repository-and-digital-library-software"></a>

[機関リポジトリ](https://en.wikipedia.org/wiki/Institutional_repository) および [電子図書館](https://en.wikipedia.org/wiki/Digital_library) の管理ソフトウェア。

- [DSpace](http://www.dspace.org/) - デジタルリソースへの持続的なアクセスを提供する、即時導入型リポジトリアプリケーション。 ([ソースコード](https://github.com/DSpace/DSpace)) `BSD-3-Clause` `Java`
- [EPrints](https://www.eprints.org/) - メタデータとワークフローモデルが柔軟なデジタルドキュメント管理システム。主に学術機関に向けたもの。([デモ](http://tryme.demo.eprints-hosting.org/), [ソースコード](https://github.com/eprints/eprints3.4)) `GPL-3.0` `Perl`
- [Fedora Commons Repository](https://wiki.lyrasis.org/display/FF/Fedora+Repository+Home) - 堅牢でモジュール構造を持つ、デジタルコンテンツの管理・配信リポジトリ。アクセスと保存の両面で、電子図書館やアーカイブに適しています。([ソースコード](https://github.com/fcrepo/fcrepo)) `Apache-2.0` `Java`
- [InvenioRDM](https://inveniordm.docs.cern.ch/) - 導入してすぐ使え、規模を大きく拡張できる研究データ管理プラットフォーム。原文では優れた利用体験を提供すると紹介されています。([デモ](https://inveniordm.web.cern.ch/), [ソースコード](https://github.com/inveniosoftware/invenio-app-rdm), [クライアント](https://inveniosoftware.org/products/rdm/)) `MIT` `Python`
- [Islandora](https://www.islandora.ca/) - Drupal向けの、Fedoraベースのデジタルリポジトリを閲覧・管理するモジュール。([デモ](https://sandbox.islandora.ca/), [ソースコード](https://github.com/Islandora/islandora)) `GPL-3.0` `PHP`
- [Samvera Hyrax](https://samvera.org/) - Samveraフレームワークのフロントエンド。Samvera自体は、Fedoraベースのデジタルリポジトリを閲覧・管理するためのRuby on Railsアプリケーションである。([ソースコード](https://github.com/samvera/hyrax)) `Apache-2.0` `Ruby`

### 文書管理：統合図書館システム（ILS） <a id="document-management---integrated-library-systems-ils"></a>

[統合図書館システム](https://en.wikipedia.org/wiki/Integrated_library_system)は、図書館向けの資源計画システムです。所蔵資料、発注、支払い、資料を借りた利用者を追跡します。

関連資料： [コンテンツ管理システム（CMS）](#content-management-systems-cms), [アーカイブとデジタル保存（DP）](#archiving-and-digital-preservation-dp)

- [Evergreen](https://evergreen-ils.org) - 規模を大きく拡張できる図書館向けソフトウェア。利用者による資料の検索と、図書館での管理・目録作成・貸出を支援します。([ソースコード](https://github.com/evergreen-library-system/Evergreen)) `GPL-2.0` `PLpgSQL`
- [Koha](https://koha-community.org/) - 業務規模で利用できる統合図書館システム（ILS）。資料受入、貸出、目録作成、ラベル印刷、インターネットに接続できない場合のオフライン貸出などのモジュールを備えています。([デモ](https://koha-community.org/demo/), [ソースコード](https://github.com/Koha-Community/Koha)) `GPL-3.0` `Perl`
- [RERO ILS](https://rero21.ch/) - 図書館ネットワークを主な対象とする、図書館共同体向け機能を備えた大規模統合図書館システム（ILS）。貸出、資料受入、目録作成などの標準モジュールと、利用者・職員向けのWeb UIを備え、サービスとして運用できます。([デモ](https://ils.test.rero.ch/), [ソースコード](https://github.com/rero/rero-ils)) `AGPL-3.0` `Python/Docker`

### 電子商取引 <a id="e-commerce"></a>

[電子商取引](https://en.wikipedia.org/wiki/E-commerce)ソフトウェア。

関連資料： [地域支援型農業（CSA）](#community-supported-agriculture-csa)

- [Aimeos](https://aimeos.org/) - Laravelを使い、独自のオンラインショップ、マーケットプレイス、複雑なB2Bアプリを構築するECフレームワーク。原文では数十億の商品へ拡張できると紹介されています。([デモ](https://demo.aimeos.org/), [ソースコード](https://github.com/aimeos/aimeos)) `LGPL-3.0/MIT` `PHP`
- [Bagisto](https://bagisto.com/en/) - 複数の在庫元、税計算、ローカライズ、ドロップシッピングなどに対応するLaravelベースのオープンソースECフレームワーク。原文では先導的なものと紹介されています。([デモ](https://demo.bagisto.com/), [ソースコード](https://github.com/bagisto/bagisto)) `MIT` `PHP`
- [CoreShop](https://www.coreshop.org) - Pimcore向けのEコマースプラグイン。([ソースコード](https://github.com/coreshop/CoreShop)) `GPL-3.0` `PHP`
- [Drupal Commerce](https://drupalcommerce.org) - 決済、配送、ショッピングに関する数十種類のモジュールに対応するDrupal CMS向けECモジュール。原文では人気があると紹介されています。([ソースコード](https://git.drupalcode.org/project/commerce)) `GPL-2.0` `PHP`
- [EverShop](https://evershop.io/) `外部プロプライエタリサービス依存` - 基本的なEC機能を備える電子商取引プラットフォーム。モジュール構造を持ち、全体をカスタマイズできます。([デモ](https://demo.evershop.io/), [ソースコード](https://github.com/evershopcommerce/evershop)) `GPL-3.0` `Docker/Nodejs`
- [Magento Open Source](https://business.adobe.com/products/magento/magento-commerce.html) - オープンなオムニチャネルの革新を提供するソフトウェア。原文ではその先導役と紹介されています。([ソースコード](https://github.com/magento/magento2)) `OSL-3.0` `PHP`
- [MedusaJs](https://medusajs.com/) - 開発者がデジタルコマース体験を構築するためのヘッドレスコマースエンジン。原文では優れた体験を作れると紹介されています。([デモ](https://next.medusajs.com/), [ソースコード](https://github.com/medusajs/medusa)) `MIT` `Nodejs`
- [myCart](https://github.com/shurco/mycart) `外部プロプライエタリサービス依存` - 1ファイルで構成されたショッピングカート（カードまたは暗号資産による支払いに対応）。`MIT` `Go/Docker`
- [Open Source POS](https://github.com/opensourcepos/opensourcepos) - オープンソースのWebベースPOS（販売時点情報管理）システムです。 `MIT` `PHP`
- [OpenCart](https://www.opencart.com) - ショッピングカートソリューション。([ソースコード](https://github.com/opencart/opencart)) `GPL-3.0` `PHP`
- [PrestaShop](https://www.prestashop.com/) - 完全にスケーラブルなEコマースソリューション。([デモ](https://demo.prestashop.com/), [ソースコード](https://github.com/PrestaShop/PrestaShop)) `OSL-3.0` `PHP`
- [Pretix](https://pretix.eu/) - イベントのチケット販売プラットフォーム。([ソースコード](https://github.com/pretix/pretix)) `AGPL-3.0` `Python/Docker`
- [s-cart](https://s-cart.org/) - Laravelを基盤とする、個人・企業向けのECサイトです。（[デモ](https://demo.s-cart.org/)，[ソースコード](https://github.com/gp247net/s-cart)）`MIT` `PHP`
- [Saleor](https://saleor.io) - Djangoを基盤とするオープンソースのECストアフロントです。 （[デモ](https://demo.saleor.io/)，[ソースコード](https://github.com/saleor/saleor)）`BSD-3-Clause` `Docker/Python`
- [Shopware Community Edition](https://www.shopware.com/en/community/community-edition/) - ドイツで開発された、PHPベースのオープンソースECソフトウェアです。（[デモ](https://www.shopware.com/en/test-demo/)，[ソースコード](https://github.com/shopware/shopware)）`MIT` `PHP`
- [Solidus](https://solidus.io/) - 店舗を自分で管理できる、自由なオープンソースECプラットフォームです。（[ソースコード](https://github.com/solidusio/solidus)）`BSD-3-Clause` `Ruby/Docker`
- [Spree Commerce](https://spreecommerce.org) - Ruby on Rails向けの、モジュール構成でAPI駆動の総合オープンソースECソリューションです。（[デモ](https://demo.spreecommerce.org/)，[ソースコード](https://github.com/spree/spree)）`BSD-3-Clause` `Ruby`
- [Sylius](https://sylius.com) - Symfony2を基盤とする、オープンソースのEC用フルスタックプラットフォームです。（[デモ](https://sylius.com/try/)，[ソースコード](https://github.com/Sylius/Sylius)）`MIT` `PHP`
- [Thelia](https://thelia.net/) - 柔軟なオープンソースECソリューションです。（[デモ](https://demo.thelia.net/)，[ソースコード](https://github.com/thelia/thelia)）`LGPL-3.0` `PHP`
- [Vendure](https://www.vendure.io) - ヘッドレスコマースフレームワークです。（[デモ](https://demo.vendure.io)，[ソースコード](https://github.com/vendurehq/vendure)）`MIT` `Nodejs`
- [WooCommerce](https://woocommerce.com/) - WordPressを基盤とするECソリューションです。（[ソースコード](https://github.com/woocommerce/woocommerce)）`GPL-3.0` `PHP`

### ID連携と認証 <a id="federated-identity--authentication"></a>

[ID連携](https://en.wikipedia.org/wiki/Federated_identity) および [認証](https://en.wikipedia.org/wiki/Electronic_authentication) のソフトウェア。

関連資料： [awesome-sysadmin/Identity Management](https://github.com/awesome-foss/awesome-sysadmin#identity-management)

### フィードリーダー <a id="feed-readers"></a>

[ニュースアグリゲーター](https://en.wikipedia.org/wiki/News_aggregator)は、新聞、ブログ、動画ブログ、ポッドキャストなどのWebコンテンツを一か所に集め、閲覧しやすくするアプリケーションです。フィードアグリゲーター、フィードリーダー、ニュースリーダー、[RSS](https://en.wikipedia.org/wiki/RSS)リーダーとも呼ばれます。

- [Bubo Reader](https://github.com/georgemandis/bubo-rss) - 極めてシンプルなRSSフィードリーダー。（[デモ](https://bubo-rss-demo.netlify.app/)）`MIT` `Nodejs`
- [CommaFeed](https://www.commafeed.com/) - Google Readerに着想を得た、セルフホスト型RSSリーダー。（[デモ](https://www.commafeed.com/#/app/category/all)，[ソースコード](https://github.com/Athou/commafeed)）`Apache-2.0` `Java/Docker`
- [Feeds Fun](https://feeds.fun/) - タグ、スコア、AIを備えたニュースリーダー。（[ソースコード](https://github.com/Tiendil/feeds.fun)）`BSD-3-Clause` `Python`
- [FreshRSS](https://freshrss.org/) - セルフホスト可能なRSSフィード集計ツール。（[デモ](https://demo.freshrss.org/i/)，[ソースコード](https://github.com/FreshRSS/FreshRSS)）`AGPL-3.0` `PHP/Docker`
- [Fusion](https://github.com/0x2E/fusion) - 軽量なRSS集計ツールおよびリーダー。`MIT` `Go/Docker`
- [Goeland](https://github.com/slurdge/goeland) - 任意のRSS/Atomフィードを美しいメール要約に変換。`MIT` `Go/Docker`
- [JARR](https://1pxsolidblack.pl/jarr-en.html) - JARR（Just Another RSS Reader）は、ウェブベースのニュース集計ツールおよびリーダー（Newspipeのフォーク）。（[デモ](https://www.jarr.info/)，[ソースコード](https://github.com/jaesivsm/JARR)）`AGPL-3.0` `Docker/Python`
- [Kriss Feed](https://github.com/tontof/kriss_feed) - シンプルなフィードリーダー。原文では「賢い（あるいは愚直な）」ものと紹介されています。 `CC0-1.0` `PHP`
- [Leed](https://github.com/LeedRSS/Leed) - Leed（Light Feedの略）は、自由に利用・改変できるミニマルなRSS集約ツールです。 `AGPL-3.0` `PHP`
- [Miniflux](https://miniflux.app/) - 最小限の構成を持つニュースリーダー。（[ソースコード](https://github.com/miniflux/v2)）`Apache-2.0` `Go/deb/Docker`
- [NewsBlur](https://www.newsblur.com/) - ニュースを読み、世界の出来事について人と話し合うための個人向けリーダー。原文では「古い楽器から生まれる新しい音」と紹介されています。（[ソースコード](https://github.com/samuelclay/NewsBlur)）`MIT` `Python`
- [Newspipe](https://git.sr.ht/~cedric/newspipe) - ウェブニュースリーダー。（[デモ](https://www.newspipe.org/signup)）`AGPL-3.0` `Python`
- [reader](https://github.com/lemon24/reader) - フィードリーダーのWebアプリケーションと、自作アプリの構築にも使えるライブラリー。依存先は標準ライブラリーとPythonだけで実装されたパッケージです。`BSD-3-Clause` `Python`
- [Readflow](https://readflow.app) - 現代的なUIを備える軽量ニュースリーダー。全文検索、自動分類、アーカイブ、オフライン対応、通知の機能があります。（[ソースコード](https://github.com/ncarlier/readflow)）`AGPL-3.0` `Go/Docker`
- [RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge) - ウェブサイトにフィードがない場合にRSS/ATOMフィードを生成します。`Unlicense` `PHP/Docker`
- [RSS Monster](https://github.com/pietheinstrengholt/rssmonster) - 使いやすいウェブベースのRSSアグレゲーターとリーダーで、Fever APIと互換（Google Readerの代替）です。`MIT` `PHP`
- [RSS2EMail](https://github.com/rss2email/rss2email) - RSS/ATOMフィードを取得し、新しいコンテンツをメール受信者に送信し、OPMLをサポートしています。`GPL-2.0` `Python/deb`
- [RSSHub](https://docs.rsshub.app) - 使いやすく、拡張可能なRSSフィードアグレゲーターで、ソーシャルメディアから大学部門まで、ほぼすべてのコンテンツからRSSフィードを生成できます。（[デモ](https://rsshub.app)，[ソースコード](https://github.com/DIYgod/RSSHub)）`MIT` `Nodejs/Docker`
- [Selfoss](https://selfoss.aditu.de/) - RSS購読、ライブストリーム、マッシュアップ、情報の集約に対応する多目的Webアプリ。原文では新しいものと紹介されています。（[ソースコード](https://github.com/fossar/selfoss)）`GPL-3.0` `PHP`
- [Stringer](https://github.com/stringer-rss/stringer) - セルフホスト型RSSリーダー。固定原文では開発中で、「非社交的」と紹介されています。 `MIT` `Ruby`
- [Tiny Tiny RSS](https://tt-rss.org) - ウェブベースのニュースフィード（RSS/Atom）リーダーとアグレゲーター。（[ソースコード](https://github.com/tt-rss/tt-rss)）`GPL-3.0` `Docker/PHP`
- [TinyFeed](https://feed.lovergne.dev/) - シンプルなCLIを使って、フィードのコレクションから静的HTMLページを生成します。（[デモ](https://feed.lovergne.dev/demo)，[ソースコード](https://github.com/TheBigRoomXXL/tinyfeed)）`MIT` `Go/Docker`
- [Upvote RSS](https://www.upvote-rss.com/) `外部プロプライエタリサービス依存` - Reddit、Hacker News、Lemmy、Mbinなどから豊かなRSSフィードを生成します。（[デモ](https://www.upvote-rss.com/)，[ソースコード](https://github.com/johnwarne/upvote-rss)）`MIT` `Docker/PHP`
- [Yarr](https://github.com/nkanaev/yarr) - Yarr（yet another rss reader）は、デスクトップアプリケーションにも個人用のセルフホストサーバーにも使える、Webベースのフィード集約ツール。`MIT` `Go`

### ファイル転送と同期 <a id="file-transfer--synchronization"></a>

[ファイル転送](https://en.wikipedia.org/wiki/File_transfer)、[共有](https://en.wikipedia.org/wiki/File_sharing)、[同期](https://en.wikipedia.org/wiki/File_synchronization)のためのソフトウェアです。

関連資料： [グループウェア](#groupware)

- [bewCloud](https://bewcloud.com) - ファイル共有＋同期、ノート、写真（NextcloudおよびownCloudのRSSリーダーの代替）。（[ソースコード](https://github.com/bewcloud/bewcloud)，[クライアント](https://github.com/bewcloud)）`AGPL-3.0` `Docker`
- [Cloudreve](https://cloudreve.org/) - ファイル管理および共有システムで、複数のストレージプロバイダーをサポートしています。（[デモ](https://demo.cloudreve.org)，[ソースコード](https://github.com/cloudreve/cloudreve)）`GPL-3.0` `Docker/Go`
- [Git Annex](https://git-annex.branchable.com/) - コンピュータ、サーバー、外部ドライブ間のファイル同期。（[ソースコード](https://git.joeyh.name/index.cgi/git-annex.git/)）`GPL-3.0` `Haskell`
- [Kinto](https://kinto.readthedocs.org) - 同期・共有機能を備える、最小限の構成を持つJSONストレージサービス。（[ソースコード](https://github.com/Kinto/kinto)）`Apache-2.0` `Python`
- [Nextcloud](https://nextcloud.com/) - 任意の端末から、自分の方針に沿ってファイル、カレンダー、連絡先、メール、[その他の機能](https://apps.nextcloud.com/)へアクセスし、共有するツール。（[デモ](https://try.nextcloud.com/)，[ソースコード](https://github.com/nextcloud/server)）`AGPL-3.0` `PHP/deb`
- [OpenCloud](https://docs.opencloud.eu/) - ファイル共有および協働プラットフォーム。（[ソースコード](https://github.com/opencloud-eu/opencloud)）`Apache-2.0` `Docker/Go/Nodejs`
- [OpenSSH SFTP server](https://www.openssh.com/) - 安全なファイル転送プログラム。（[ソースコード](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/usr.bin/ssh/)）`BSD-2-Clause` `C/deb`
- [ownCloud](https://owncloud.org/) - ファイル、カレンダー、アドレス帳などを保存・同期・閲覧・編集・共有する総合ソリューション。([ソースコード](https://github.com/owncloud/core), [クライアント](https://github.com/owncloud/core/wiki/Apps)) `AGPL-3.0` `PHP/Docker/deb`
- [Peergos](https://peergos.org) - 写真、動画、音楽、文書を保存・共有・閲覧する、オンラインの私的空間。安全性を重視し、カレンダー、ニュースフィード、タスクリスト、チャット、メールクライアントも備えています。([ソースコード](https://github.com/Peergos/Peergos)) `AGPL-3.0` `Java`
- [Puter](https://puter.com/) - 多機能で高い拡張性を目指すWebベースのオペレーティングシステム。原文では非常に高速になるよう設計されていると紹介されています。([デモ](https://puter.com/), [ソースコード](https://github.com/heyputer/puter)) `AGPL-3.0` `Nodejs/Docker`
- [Pydio](https://pydio.com/) - 任意のウェブサーバーを強力なファイル管理システムにし、主流のクラウドストレージプロバイダーの代替として利用できます。([デモ](https://pydio.com/en/demo), [ソースコード](https://github.com/pydio/cells)) `AGPL-3.0` `Go`
- [Samba](https://www.samba.org/) - LinuxおよびUnixとWindowsの相互運用を提供する標準的なプログラム群。SMB/CIFSを使うすべてのクライアントへファイル・印刷サービスを提供し、原文では安全で安定し、高速と紹介されています。([ソースコード](https://git.samba.org/samba.git/)) `GPL-3.0` `C`
- [Seafile](https://www.seafile.com/en/home/) - 主にチームや組織向けの、ファイルのホスティング・共有ソリューションです。([ソースコード](https://github.com/haiwen/seafile)) `GPL-2.0/GPL-3.0/AGPL-3.0/Apache-2.0` `C`
- [Sync-in](https://sync-in.com) - リアルタイム編集、権限管理、デスクトップおよびCLIクライアントを備えたファイルストレージ、同期、共有、協働。([デモ](https://sync-in.com/docs/demo), [ソースコード](https://github.com/Sync-in/server), [クライアント](https://github.com/Sync-in/desktop)) `AGPL-3.0` `Nodejs/Docker`
- [Syncthing](https://syncthing.net/) - Syncthingはオープンソースのピアツーピアファイル同期ツールです。([ソースコード](https://github.com/syncthing/syncthing)) `MPL-2.0` `Go/Docker/deb`
- [Unison](https://www.cis.upenn.edu/~bcpierce/unison/) - UnisonはOSX、Unix、Windows向けのファイル同期ツールです。([ソースコード](https://github.com/bcpierce00/unison)) `GPL-3.0` `deb/OCaml`

### ファイル転送：分散ファイルシステム <a id="file-transfer---distributed-filesystems"></a>

ネットワーク上の分散ファイルシステムです。

関連資料： [awesome-sysadmin/Distributed Filesystems](https://github.com/awesome-foss/awesome-sysadmin#distributed-filesystems)

### ファイル転送：オブジェクトストレージとファイルサーバー <a id="file-transfer---object-storage--file-servers"></a>

[オブジェクトストレージ](https://en.wikipedia.org/wiki/Object_storage)は、データをオブジェクトとして管理するストレージです。ファイルを階層構造で扱うファイルシステムや、セクター・トラック内のブロックとして扱うブロックストレージとは異なります。

- [GarageHQ](https://garagehq.deuxfleurs.fr/) - 地理的に分散されたS3互換ストレージサービスで、多くのニーズを満たせます。([ソースコード](https://git.deuxfleurs.fr/Deuxfleurs/garage)) `AGPL-3.0` `Docker/Rust`
- [Harbor](https://goharbor.io/) - コンテンツの保存、署名、スキャンを行う、クラウドネイティブのイメージレジストリです。([ソースコード](https://github.com/goharbor/harbor)) `Apache-2.0` `Docker/K8S`
- [SeaweedFS](https://github.com/seaweedfs/seaweedfs) - SeaweedFSは、WebDAV、S3 API、FUSEマウント、HDFSなどに対応するオープンソース分散ファイルシステムで、大量の小さなファイルに最適化されており、容量の追加が容易です。`Apache-2.0` `Go`
- [Zenko CloudServer](https://www.zenko.io/cloudserver) - Zenko CloudServerは、Amazon S3プロトコルを処理するオープンソースのサーバー実装です。([ソースコード](https://github.com/scality/cloudserver)) `Apache-2.0` `Docker/Nodejs`
- [ZOT OCI Registry](https://zotregistry.dev) - ベンダーに依存しないOCIネイティブのコンテナイメージレジストリ。原文では本番運用に対応すると紹介されています。([デモ](https://zothub.io), [ソースコード](https://github.com/project-zot/zot)) `Apache-2.0` `Go/Docker`

### ファイル転送：P2Pファイル共有 <a id="file-transfer---peer-to-peer-filesharing"></a>

[ピアツーピアファイル共有](https://en.wikipedia.org/wiki/Peer-to-peer_file_sharing)は、デジタルメディアの[共有](https://en.wikipedia.org/wiki/File_sharing)と配布に[ピアツーピア](https://en.wikipedia.org/wiki/Peer-to-peer)（P2P）ネットワーク技術を使う仕組みです。

- [bittorrent-tracker](https://webtorrent.io/) - シンプルで堅牢なBitTorrentトラッカー（クライアントおよびサーバー）の実装。([ソースコード](https://github.com/webtorrent/bittorrent-tracker)) `MIT` `Nodejs`
- [Deluge](https://deluge-torrent.org/) - 軽量でマルチプラットフォーム対応のBitTorrentクライアント。([ソースコード](https://git.deluge-torrent.org/deluge/tree/?h=develop)) `GPL-3.0` `Python/deb`
- [PrivyDrop](https://www.privydrop.app) - WebRTCを使う、途中から転送を再開できるP2Pのテキスト・画像・ファイル転送ツール。シンプルで使いやすい設計です。([ソースコード](https://github.com/david-bai00/PrivyDrop)) `MIT` `Docker/Nodejs`
- [qBittorrent](https://www.qbittorrent.org/) - リモートアクセス向けの多機能なWeb UIを備えた、複数プラットフォーム対応の自由なBitTorrentクライアントです。([ソースコード](https://github.com/qbittorrent/qBittorrent)) `GPL-2.0` `C++`
- [slskd](https://github.com/slskd/slskd) `外部プロプライエタリサービス依存` - Soulseekファイル共有ネットワーク向けの現代的なクライアントサーバーアプリケーション。`AGPL-3.0` `Docker/C#`
- [Transmission](https://transmissionbt.com/) - 使いやすい自由なBitTorrentクライアント。原文では高速と紹介されています。([ソースコード](https://github.com/transmission/transmission)) `GPL-3.0` `C++/deb`
- [Webtor](https://github.com/webtor-io/self-hosted) - 音声・動画をすぐにストリーミングできる、Webベースのtorrentクライアントです。 ([デモ](https://webtor.io)) `MIT` `Docker`

### ファイル転送：ワンクリックとドラッグ＆ドロップによるアップロード <a id="file-transfer---single-click--drag-n-drop-upload"></a>

一度限り・短期間・一時的なファイル共有のための簡易ファイルサーバーです。ワンクリックや[ドラッグ＆ドロップ](https://en.wikipedia.org/wiki/Drag_and_drop)によるアップロードを提供します。

- [015](https://send.fudaoyuan.icu) - 一度限り・一時的なファイルやテキストのアップロード、処理、共有を重視するファイル共有プラットフォーム。 ([ソースコード](https://github.com/keven1024/015)) `AGPL-3.0` `Docker`
- [Chibisafe](https://chibisafe.app) - 使いやすく設定しやすいことを目指すファイルアップロードサービス。ファイル、写真、文書などを受け付け、他の人へ送れる共有リンクを返します。 ([ソースコード](https://github.com/chibisafe/chibisafe)) `MIT` `Docker/Nodejs`
- [Digirecord](https://ladigitale.dev/digirecord/) - 音声ファイルを録音・共有するツール（ドキュメントはフランス語）。 ([ソースコード](https://codeberg.org/ladigitale/digirecord)) `AGPL-3.0` `Nodejs/PHP`
- [elixire](https://gitlab.com/elixire/elixire) - シンプルでありながら高度なスクリーンショットアップロードとリンク短縮サービス。 ([クライアント](https://gitlab.com/elixire/elixiremanager)) `AGPL-3.0` `Python`
- [Files Sharing](https://github.com/axeloz/filesharing) - 固有の一時的なリンクを利用するファイル共有アプリケーション。 `GPL-3.0` `PHP/Docker`
- [Flare](https://github.com/FlintSH/Flare) - 余分な機能を抑え、細かく設定できるファイル・スクリーンショット保管サーバー。ShareX、Flameshot、Spectacleに対応し、OCR検索などを備えています。 `MIT` `Docker/Nodejs`
- [Gokapi](https://github.com/Forceu/gokapi) - 指定したダウンロード回数または日数でファイルの有効期限が切れる、軽量なファイル共有サーバー。固定原文で終了済みとされるFirefox Sendに似ていますが、アップロードできるのは管理者だけです。 `GPL-3.0` `Go/Docker`
- [goploader](https://depado.github.io/goploader/) - サーバー側の暗号化を備え、curl、httpie、wgetから利用できる、簡単なファイル共有ツールです。 ([ソースコード](https://github.com/Depado/goploader)) `MIT` `Go`
- [GoSƐ](https://codeberg.org/stv0g/gose) - スケーラビリティとシンプルさを重視した現代的なファイルアップローダー。S3ストレージバックエンドにのみ依存しており、追加のデータベースやキャッシュを必要とせずに水平スケーリングが可能。 `Apache-2.0` `Go/Docker`
- [Jirafeau](https://gitlab.com/jirafeau/Jirafeau) - ファイルを選んでアップロードし、リンクを共有する、ワンクリックのファイル共有ツール。 `AGPL-3.0` `PHP/Docker`
- [OnionShare](https://github.com/onionshare/onionshare) - 安全かつ匿名のファイル共有ツール。原文では任意のサイズのファイルを共有できると紹介されています。 `GPL-3.0` `Python/deb`
- [PicoShare](https://github.com/mtlynch/picoshare) - 画像などのファイルを共有するための、機能を絞ったホストしやすいサービスです。 ([クライアント](https://github.com/mtlynch/picoshare#third-party-clients)) `AGPL-3.0` `Go/Docker`
- [Picsur](https://github.com/CaramelFur/Picsur) - 画像を簡単にホスト、編集、共有できるシンプルなイメージホスティングプラットフォーム。 `AGPL-3.0` `Docker`
- [PictShare](https://www.pictshare.net/) - 多言語対応の画像ホスティングサービス。簡単なサイズ変更・アップロードAPIを提供します。 ([ソースコード](https://github.com/HaschekSolutions/pictshare)) `Apache-2.0` `PHP/Docker`
- [Pingvin Share X](https://github.com/smp46/pingvin-share-x) - ログイン、相手からファイルを受け取る共有、共有期限、S3バケット、高度な認証、ClamAVによるセキュリティ検査などに対応するファイル共有プラットフォーム（Pingvin Shareの派生版）。 `BSD-2-Clause` `Docker/Nodejs`
- [Plik](https://github.com/root-gg/plik) - スケーラブルで使いやすい一時ファイルアップロードシステム。 ([デモ](https://plik.root.gg/)) `MIT` `Go/Docker`
- [ProjectSend](https://www.projectsend.org/) - 作成した特定のクライアントへアップロードしたファイルを割り当て、そのファイルへのアクセス権を提供します。 ([ソースコード](https://github.com/projectsend/projectsend)) `GPL-2.0` `PHP`
- [PsiTransfer](https://github.com/psi-4ward/psitransfer) - 強固なアップロード／ダウンロードの中断再開とパスワード保護を備えたシンプルなファイル共有ソリューション。 `BSD-2-Clause` `Nodejs`
- [QuickShare](https://ihexxa.github.io/quickshare.site/) - 異なるデバイス間での簡単で迅速なファイル共有。 ([ソースコード](https://github.com/ihexxa/quickshare)) `LGPL-3.0` `Docker/Go`
- [Safebucket](https://docs.safebucket.io/) - プラグイン型インフラを持つファイル共有プラットフォームで、アップロードとダウンロードはクライアントとS3互換ストレージの間で直接行われます。（[ソースコード](https://github.com/safebucket/safebucket)） `Apache-2.0` `Go/Docker`
- [sE2EEnd](https://github.com/sE2EEnd/sE2EEnd) - エンドツーエンド暗号化、パスワード保護、ダウンロード回数制限、自動失効を備えたファイル共有ツール。認証にKeycloakを統合しています。 `AGPL-3.0` `Docker`
- [Sharry](https://github.com/eikek/sharry) - 認証済みユーザーと匿名ユーザーの間で、どちらの方向にもファイルを共有できるツール。アップロード・ダウンロードを途中から再開できます。 `GPL-3.0` `Scala/Java/deb/Docker`
- [Shifter](https://github.com/TobySuch/Shifter) - Djangoで構成されたシンプルで、セルフホスト可能なファイル共有ウェブアプリ。 `MIT` `Docker`
- [Slink](https://docs.slinkapp.io/) - ユーザーがメディア共有体験に対して完全な制御をもつように設計された画像共有プラットフォーム。（[ソースコード](https://github.com/andrii-kryvoviaz/slink)） `AGPL-3.0` `Docker`
- [snowshare](https://github.com/TuroYT/snowshare) - URL短縮、コードスニペット共有、ファイルアップロードを備えたファイルとリンク共有プラットフォーム。カスタマイズ可能な期限切れ、プライバシー設定、QRコードを備えています。（[デモ](https://s.romain-pinsolle.fr)） `CC0-1.0` `Nodejs/Docker`
- [transfer.sh](https://github.com/dutchcoders/transfer.sh) - コマンドラインから簡単にファイルを共有できます。 `MIT` `Go`
- [Uguu](https://github.com/nokonoko/uguu) - ファイルを保存し、指定した時間が経過すると削除します。 `MIT` `PHP`
- [XBackBone](https://xbackbone.app/) - ShareX（Windows向けの自由なオープンソースのスクリーンショットツール）などの即時共有ツールと連携する、シンプルで軽量なファイルマネージャー。原文では高速と紹介されています。（[ソースコード](https://github.com/SergiX44/XBackBone)） `AGPL-3.0` `PHP/Docker`
- [Zipline](https://github.com/diced/zipline) - ShareXと組み合わせて使われる軽量なファイル共有サーバー。ReactベースのWeb UIとAPIを備え、原文では高速で信頼性が高いと紹介されています。 `MIT` `Docker/Nodejs`

### ファイル転送：Webファイルマネージャー <a id="file-transfer---web-based-file-managers"></a>

Webベースの[ファイルマネージャー](https://en.wikipedia.org/wiki/File_manager)です。

関連資料： [グループウェア](#groupware)

- [Apaxy](https://oupala.github.io/apaxy/) - ウェブディレクトリの閲覧体験を向上させるためのテーマ。Apacheのmod_autoindexモジュールと一部のCSSを用いて、ディレクトリ一覧のデフォルトスタイルを上書きしています。（[ソースコード](https://github.com/oupala/apaxy)） `GPL-3.0` `Javascript`
- [ClyoCloud](https://clyo.cloud/) - プライバシー、効率性、美しさを重視した個人用セルフホスト型クラウドストレージおよびメディアマネージャーアプリケーション。（[ソースコード](https://code.weexnes.dev/ClyoCloud)） `AGPL-3.0` `Nodejs`
- [copyparty](https://github.com/9001/copyparty) - 途中から再開できる高速なアップロード、重複排除、WebDAV、FTP、zeroconf、メディアの索引作成、動画サムネイル、音声形式の変換、書き込み専用フォルダを備えたポータブルなファイルサーバー。単一ファイルで動作し、必須の依存関係はありません。（[デモ](https://a.ocv.me/pub/demo/)） `MIT` `Python`
- [Directory Lister](https://www.directorylister.com/) - ディレクトリーとサブディレクトリーを一覧表示し、その中を移動できる、シンプルなPHP製ツール。 （[ソースコード](https://github.com/DirectoryLister/DirectoryLister)） `MIT` `PHP/Docker`
- [filebrowser](https://filebrowser.org/) - マテリアルデザインのウェブインターフェースを備えたウェブファイルブラウザ。（[ソースコード](https://github.com/filebrowser/filebrowser)） `Apache-2.0` `Go`
- [FileGator](https://filegator.io/) - FileGatorは、シングルページフロントエンドを持つ強力なマルチユーザーファイルマネージャー。（[デモ](https://demo.filegator.io), [ソースコード](https://github.com/filegator/filegator)） `MIT` `PHP/Docker`
- [FileRise](https://github.com/error311/FileRise) - アップロード、タグ付け、共有リンク、ギャラリー／テーブルビュー、ブラウザ内エディタを備えたウェブファイルマネージャー。（[デモ](https://github.com/error311/FileRise?tab=readme-ov-file#live-demo)） `MIT` `Docker/PHP`
- [Filestash](https://www.filestash.app/) - FTP、SFTP、WebDAV、Git、S3、Minio、Dropbox、Google Driveなど、データが存在する場所に関係なくデータを管理できるウェブファイルマネージャー。（[デモ](https://demo.filestash.app/), [ソースコード](https://github.com/mickael-kerjean/filestash)） `AGPL-3.0` `Docker`
- [IFM](https://github.com/misterunknown/ifm) - 1つのスクリプトファイルで構成されたファイルマネージャー。 `MIT` `PHP`
- [mikochi](https://github.com/zer0tonin/Mikochi) - リモートフォルダを閲覧し、ファイルをアップロード、削除、リネーム、ダウンロード、VLC/mpvにストリーミングできます。 `MIT` `Go/Docker/K8S`
- [miniserve](https://github.com/svenstaro/miniserve) - HTTPでファイルとディレクトリを提供するためのCLIツール。 `MIT` `Rust`
- [ResourceSpace](https://www.resourcespace.com) - デジタル資産を整理する自由なツール。原文ではシンプルで高速と紹介されています。 ([デモ](https://www.resourcespace.com/trial), [ソースコード](https://www.resourcespace.com/svn)) `BSD-4-Clause` `PHP`
- [slcl](https://gitea.privatedns.org/xavi/slcl) - シンプルで軽量のウェブクラウドストレージ。 ([ソースコード](https://codeberg.org/xavidcr/slcl)) `AGPL-3.0` `C`
- [Surfer](https://git.cloudron.io/cloudron/surfer) - ファイルを管理できるウェブUIを備えたシンプルな静的ファイルサーバー。 `MIT` `Nodejs`
- [TagSpaces](https://www.tagspaces.org/) - TagSpacesはオフラインかつマルチプラットフォーム対応のファイルマネージャーおよび整理ツールであり、ノートアプリとしても機能します。WebDAV版アプリは、NextcloudやownCloudなどのWebDAVサーバーにインストール可能です。 ([デモ](https://demo.tagspaces.com), [ソースコード](https://github.com/tagspaces/tagspaces)) `AGPL-3.0` `Nodejs`
- [Tiny File Manager](https://tinyfilemanager.github.io) - PHPによるウェブベースのファイルマネージャー、シンプルで速い小型ファイルマネージャー（1ファイルで構成）。 ([デモ](https://tinyfilemanager.github.io/demo/), [ソースコード](https://github.com/prasathmani/tinyfilemanager)) `GPL-3.0` `PHP`

### ゲーム <a id="games"></a>

複数人で遊ぶゲームのサーバーと、[ブラウザーゲーム](https://en.wikipedia.org/wiki/Browser_game)です。

関連資料： [ゲーム：管理ツールとコントロールパネル](#games---administrative-utilities--control-panels)

- [0 A.D.](https://play0ad.com/) - 古代の戦争をテーマとする、複数プラットフォーム対応のリアルタイム戦略ゲーム。 ([ソースコード](https://gitea.wildfiregames.com/0ad/0ad)) `MIT/GPL-2.0/Zlib` `C++/C/deb`
- [A Dark Room](https://github.com/doublespeakgames/adarkroom) - ブラウザーで遊べる、最小限の構成を持つテキストアドベンチャーゲーム。 ([デモ](https://adarkroom.doublespeakgames.com/)) `MPL-2.0` `Javascript`
- [DDraceNetwork](https://ddnet.org/) - Teeworldsの改造版であるDDRaceの、独自の協力プレイを備えた協力型プラットフォームゲームです。 ([ソースコード](https://github.com/ddnet/ddnet)) `Zlib` `C++`
- [Digibuzzer](https://digibuzzer.app/) - 接続されたブザーをもとに仮想ゲームルームを作成（フランス語のドキュメントあり）。 ([デモ](https://digibuzzer.app/), [ソースコード](https://codeberg.org/ladigitale/digibuzzer)) `AGPL-3.0` `Nodejs`
- [Hypersomnia](https://github.com/TeamHypersomnia/Hypersomnia) - Counter-StrikeとHotline Miamiを融合した競争型トップダウンシューティングゲーム。Linux、Windows、MacOSおよびウェブ上で動作。 ([デモ](https://hypersomnia.io)) `AGPL-3.0` `C++/Docker`
- [Lila](https://lichess.org/) - lichess.orgを動かす広告なしチェスサーバー、公式iOSおよびAndroidアプリを提供。 ([ソースコード](https://github.com/lichess-org/lila)) `AGPL-3.0` `Scala`
- [Luanti](https://www.luanti.org/) - ボクセルゲームエンジン（旧名Minetest）。用意されたゲームを遊ぶほか、好みに合わせた改造、自作ゲームの制作、マルチプレイヤーサーバーでのプレイができます。 ([ソースコード](https://github.com/luanti-org/luanti)) `LGPL-2.1/MIT/Zlib` `C++/Lua/deb`
- [Mindustry](https://mindustrygame.github.io/) - Factorio風のタワー防衛ゲーム。より多くのリソースを収集するための生産連鎖を構築し、複雑な施設を建設。 ([ソースコード](https://github.com/Anuken/Mindustry)) `GPL-3.0` `Java`
- [MTA:SA](https://multitheftauto.com/) `外部プロプライエタリサービス依存` - 元のゲームにはないネットワークプレイ機能を、Rockstar NorthのGrand Theft Autoシリーズへ追加するツール。 ([ソースコード](https://github.com/multitheftauto/mtasa-blue)) `GPL-3.0` `C++`
- [OpenTTD](https://www.openttd.org/) - 運送業の経営をシミュレーションするゲームです。 ([ソースコード](https://github.com/OpenTTD/OpenTTD), [クライアント](https://bananas.openttd.org/)) `GPL-2.0` `C++/Docker`
- [piqueserver](https://github.com/piqueserver/piqueserver) - 破壊可能なボクセル世界を舞台とする一人称視点のシューティングゲーム、openspadesのサーバーです。 ([クライアント](https://github.com/yvt/openspades)) `GPL-3.0` `Python/C++`
- [Posio](https://github.com/abrenaut/posio) - 地理をテーマにしたマルチプレイヤーゲーム。 `MIT` `Python`
- [Razzia](https://github.com/Ralex91/Razzia) - 小規模なセルフホストのイベント向けに設計された、クイズゲームプラットフォーム（Kahoot!の代替）。 `MIT` `Nodejs/Docker`
- [Red Eclipse 2](https://www.redeclipse.net/) - Unreal Tournamentに似たアリーナタイプの第一人称シューティングゲーム。 ([ソースコード](https://github.com/redeclipse/base)) `Zlib/MIT/CC-BY-SA-4.0` `C/C++/deb`
- [Scribble.rs](https://github.com/scribble-rs/scribble.rs) - 絵を描いて答えを当てる、Webベースのゲームです。（[デモ](https://scribblers.fly.dev)） `BSD-3-Clause` `Go/Docker`
- [Suroi](https://suroi.io/) - surviv.ioに着想を得た、オープンソースの2Dバトルロイヤルゲーム。（[デモ](https://suroi.io/)，[ソースコード](https://github.com/HasangerGames/suroi)） `GPL-3.0` `Nodejs`
- [The Battle for Wesnoth](https://github.com/wesnoth/wesnoth) - ハイファンタジーをテーマとする、オープンソースのターン制の戦術・戦略ゲーム。1人プレイと、オンラインまたは同じ端末を交代で使うホットシート形式の複数人対戦に対応します。 `GPL-2.0` `C++/deb`
- [Veloren](https://veloren.net/) - Cube World、Legend of Zelda、Dwarf Fortress、Minecraftから着想を得た、オープンソースのマルチプレイヤーRPGです。（[ソースコード](https://gitlab.com/veloren/veloren)） `GPL-3.0` `Rust`
- [Zero-K](https://zero-k.info/) - Springrtsエンジンを使うオープンソースのリアルタイム戦略ゲーム。地形操作、物理シミュレーション、多彩な独自ユニットを通じたプレイヤーの創造性を重視し、対戦向けのバランスも備えると原文で紹介されています。（[ソースコード](https://github.com/ZeroK-RTS/Zero-K)） `GPL-2.0` `Lua`

### ゲーム：管理ツールとコントロールパネル <a id="games---administrative-utilities--control-panels"></a>

ゲームサーバーやゲームライブラリを管理するためのユーティリティです。

関連資料： [ゲーム](#games)

- [auto-mcs](https://www.auto-mcs.com) - 複数プラットフォームに対応するMinecraftサーバー管理ツールです。（[ソースコード](https://github.com/macarooni-man/auto-mcs)） `AGPL-3.0` `Python`
- [Calagopus](https://calagopus.com) - Minecraft、Hytaleなどのゲームサーバーをデプロイ、監視、管理するパネル。原文では業界を先導する性能と紹介されています。（[ソースコード](https://github.com/calagopus/panel)） `MIT` `Rust/Docker/deb`
- [Crafty Controller](https://craftycontrol.com/) - 使いやすい画面からMinecraftサーバーを起動・管理する、ランチャー兼管理ツール。（[ソースコード](https://gitlab.com/crafty-controller/crafty-4)） `GPL-3.0` `Docker/Python`
- [Drop](https://droposs.org) - DRMフリーのゲームを効率的に配布・共有するためのゲーム配布プラットフォーム（Steam、GameVaultの代替案）。（[ソースコード](https://github.com/Drop-OSS/drop)，[クライアント](https://github.com/Drop-OSS/drop-app)） `AGPL-3.0` `Docker`
- [EasyWI](https://easy-wi.com) - ゲームサーバーなどのデーモンを管理するWebインターフェース。ゲーム・音声サーバーの完全自動貸出サービスを含むCMSも提供します。（[ソースコード](https://github.com/easy-wi/developer/)） `GPL-3.0` `PHP/Shell`
- [GameAP](https://gameap.com/) - LinuxおよびWindows上でゲームサーバーを管理するためのゲーム管理パネル。（[デモ](https://demo.gameap.com/)，[ソースコード](https://github.com/gameap/gameap)，[クライアント](https://plugins.gameap.dev/)） `MIT` `Go/Docker`
- [Gameyfin](https://gameyfin.org) - 自動スキャン、ウェブアクセス、ダウンロード、プラグイン対応を備えたゲームライブラリマネージャー。（[ソースコード](https://github.com/gameyfin/gameyfin)） `AGPL-3.0` `Docker`
- [Gaseous Server](https://github.com/gaseous-project/gaseous-server) `外部プロプライエタリサービス依存` - 複数の情報源でゲームを識別し、メタデータを提供する、Webベースのエミュレーターを内蔵したゲームROM管理ツールです。 `AGPL-3.0` `Docker/.NET`
- [Lancache](https://lancache.net) `外部プロプライエタリサービス依存` - LANパーティーで利用するゲームのデータを簡単にキャッシュするツール。（[ソースコード](https://github.com/lancachenet/monolithic)） `MIT` `Docker/Shell`
- [LinuxGSM](https://linuxgsm.com/) - Linux上の専用ゲームサーバーをデプロイ・管理するCLIツール。固定原文では120を超えるゲームに対応すると紹介されています。（[ソースコード](https://github.com/GameServerManagers/LinuxGSM)） `MIT` `Shell`
- [Minus Games](https://accessory.github.io/minus_games_user_guide) - 複数のデバイス間でゲームとセーブファイルを同期。（[ソースコード](https://github.com/Accessory/minus_games)） `MIT` `Rust`
- [Ownfoil](https://github.com/a1ex4/ownfoil) - Nintendo Switch向けのライブラリ管理ツール。ファイルの識別・整理、未取得の更新やDLCの確認などを自動化し、Switch上の対応クライアントへライブラリを提供します。ショップのカスタマイズと複数ユーザーの認証を備えています。 `AGPL-3.0` `Docker/Python`
- [Pelican Panel](https://pelican.dev/) - ゲームサーバーの簡単な管理を可能にするウェブアプリケーション。デプロイ、設定、管理、サーバー監視ツール、および広範なカスタマイズオプションをユーザーに提供（Pterodactylのフォーク）。（[ソースコード](https://github.com/pelican-dev/panel)） `AGPL-3.0` `PHP/Docker`
- [Pterodactyl](https://pterodactyl.io/) - 利用者向けに直感的なUIを備える、ゲームサーバー管理パネル。（[ソースコード](https://github.com/pterodactyl/panel)） `MIT` `PHP`
- [PufferPanel](https://www.pufferpanel.com/) - 小規模ネットワークおよびゲームサーバー提供業者向けに設計されたゲームサーバー管理パネル。（[ソースコード](https://github.com/pufferpanel/pufferpanel)） `Apache-2.0` `Go`
- [Retrom](https://github.com/JMBeresford/retrom) - プライベートクラウド向けのゲームライブラリ配布サーバーと、フロントエンド・ランチャーです。 `GPL-3.0` `Docker/Rust`
- [RomM](https://romm.app/) `外部プロプライエタリサービス依存` - レトロゲームの整理、付加情報の追加、プレイを行うROM管理ツール。固定原文では400以上のプラットフォームに対応すると紹介されています。 ([デモ](https://demo.romm.app/), [ソースコード](https://github.com/rommapp/romm)) `AGPL-3.0` `Docker`
- [SourceBans++](https://sbpp.github.io/) - Sourceエンジンを使うゲーム向けの、管理者、アクセス禁止（ban）、コミュニケーションの管理システムです。 ([ソースコード](https://github.com/sbpp/sourcebans-pp)) `CC-BY-SA-4.0` `PHP`
- [Sunshine](https://app.lizardbyte.dev/Sunshine/) - Moonlight向けのリモートゲーム配信ホスト。最大120フレーム/秒、4K解像度に対応します。 ([ソースコード](https://github.com/LizardByte/Sunshine)) `GPL-3.0` `C++/deb/Docker`

### 家系図 <a id="genealogy"></a>

[家系図ソフトウェア](https://en.wikipedia.org/wiki/Genealogy_software)は、家系のデータを記録・整理・公開するために使います。

- [Genea.app](https://www.genea.app/) - プライバシーに配慮した、誰でも家系図を作成・編集できるツール。データをGEDCOM形式で保存し、すべての処理をブラウザー内で行います。 ([ソースコード](https://github.com/genea-app/genea-app)) `MIT` `Javascript`
- [Genealogy](https://genealogy.kreaweb.be/) - 家族とその関係を記録し、家系図を作成します。 ([デモ](https://genealogy.kreaweb.be/), [ソースコード](https://github.com/MGeurts/genealogy)) `MIT` `PHP`
- [GeneWeb](https://geneweb.tuxfamily.org/wiki/GeneWeb) - オフラインでもWebサービスとしても利用できる家系図ソフトウェアです。 ([ソースコード](https://github.com/geneweb/geneweb)) `GPL-2.0` `OCaml`
- [Gramps Web](https://www.grampsweb.org/) - オープンソースのデスクトップ家系図アプリGrampsを基盤とし、相互運用できる、共同で家系図を作成するWebアプリです。 ([デモ](https://gramps-project.github.io/gramps-web-api/), [ソースコード](https://github.com/gramps-project/gramps-web-api)) `AGPL-3.0` `Docker`
- [webtrees](https://www.webtrees.net) - 共同で家系図を作成するオンラインアプリ。原文では先導的なものと紹介されています。 ([デモ](https://dev.webtrees.net/demo-stable/index.php?ctype=gedcom&ged=demo), [ソースコード](https://github.com/fisharebest/webtrees)) `GPL-3.0` `PHP`

### 生成AI（GenAI） <a id="generative-artificial-intelligence-genai"></a>

[生成AI（GenAI）](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)は、生成モデルを使って文章、画像、動画などのデータを生成する[人工知能](https://en.wikipedia.org/wiki/Artificial_intelligence)の一分野です。

- [Agenta](https://agenta.ai/) - プロンプト管理、LLM評価、可観測性を扱うLLMOpsプラットフォーム。共同でのプロンプト設計を通じて、本番向けLLMアプリを構築、評価、監視します。 ([ソースコード](https://github.com/agenta-ai/agenta)) `MIT` `Docker`
- [AnythingLLM](https://anythingllm.com/) - デスクトップおよびDocker向けの多機能AIアプリ。RAG、AIエージェント、ノーコードのエージェント構築、MCP互換性などを備えています。 ([ソースコード](https://github.com/Mintplex-Labs/anything-llm)) `MIT` `Nodejs/Docker`
- [GoModel](https://gomodel.enterpilot.io/) - 複数のLLMプロバイダー向けの統一OpenAI互換APIを提供する、Go製AIゲートウェイ。米ドル建ての費用追跡、予算、利用状況の分析、ガードレール、キャッシュ、管理画面を備えています。 ([ソースコード](https://github.com/ENTERPILOT/GoModel)) `MIT` `Go/Docker`
- [Khoj](https://khoj.dev/) - Webや文書から回答を得られ、独自のエージェント作成、自動処理の予約、詳細な調査を行うAIツール。原文では、オンラインまたはローカルの任意のLLMを個人向けの自律AIに変える「第二の脳」と紹介されています。 ([デモ](https://app.khoj.dev/), [ソースコード](https://github.com/khoj-ai/khoj)) `AGPL-3.0` `Python/Docker`
- [LibreChat](https://www.librechat.ai) `外部プロプライエタリサービス依存` - 複数のAIプロバイダーに対応する、ChatGPTと互換性のあるAIチャットインターフェース。マルチユーザー認証、メッセージ検索、プラグイン対応をサポート。 ([デモ](https://chat.librechat.ai), [ソースコード](https://github.com/danny-avila/LibreChat)) `MIT` `Nodejs/Docker`
- [LLM Harbor](https://github.com/av/harbor) - コンテナ化されたLLMツールキット。簡潔なCLIでLLMバックエンド、API、フロントエンド、およびその他のサービスを実行可能。 `Apache-2.0` `Docker/Shell`
- [LLMKube](https://llmkube.com) - セルフホスト型LLM推論用のKubernetesオペレーター。交換可能なランタイム（llama.cpp、vLLM、TGI、Ollama、vllm-swift）、複数GPUへの分割処理、NVIDIA CUDAとApple Silicon Metalへの対応、OpenAI互換APIを備えています。 ([ソースコード](https://github.com/defilantech/LLMKube)) `Apache-2.0` `Go/Docker/K8S`
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) - マルチソース検索（arXiv、PubMed、ウェブ）、PDFテキスト抽出、暗号化されたローカルストレージを備えたAIによる深層調査ツール。 `MIT` `Docker/Python`
- [LocalAI](https://localai.io/) - AIモデルをローカルで実行し、画像・音声を生成するツール（OpenAI、Claudeの代替）。 ([ソースコード](https://github.com/mudler/LocalAI), [クライアント](https://localai.io/gallery.html)) `MIT` `Docker/K8S`
- [Ollama](https://ollama.com/) - Llama 3.3、DeepSeek-R1、Phi-4、Gemma 3などの大規模言語モデルを実行するためのツールです。 ([ソースコード](https://github.com/ollama/ollama)) `MIT` `Docker/Python`
- [Onyx Community Edition](https://onyx.app) - 任意のLLMと連携するチャットUI。エージェント、Web検索、RAG、MCP、詳細な調査などを備え、固定原文では40を超える知識ソースへのコネクターを提供すると紹介されています。 ([ソースコード](https://github.com/onyx-dot-app/onyx)) `MIT` `Docker/K8S`
- [Open-WebUI](https://openwebui.com) - ユーザーにやさしいAIインターフェース。OllamaやOpenAI APIに対応。（[ソースコード](https://github.com/open-webui/open-webui)） `BSD-3-Clause` `Docker/Python`
- [Vane](https://github.com/ItzCrazyKns/Vane) - AIを活用した検索エンジン（Perplexity AIの代替）。 `MIT` `Docker`

### グループウェア <a id="groupware"></a>

共同作業ソフトウェア、または[グループウェア](https://en.wikipedia.org/wiki/Collaborative_software)は、共通の作業をする人々が目標を達成できるよう支援します。ファイル共有、カレンダー・イベント管理、予約、アドレス帳などを一つのアプリケーションにまとめることが多いものです。

関連資料： [予約と日程調整](#booking-and-scheduling)

- [Citadel](https://www.citadel.org/) - メール、カレンダー・予定管理、アドレス帳、フォーラム、メーリングリスト、インスタントメッセージ、Wiki・ブログエンジン、RSS集約などを備えたグループウェアです。（[ソースコード](https://www.citadel.org/source.html)） `GPL-3.0` `C/Docker/Shell`
- [Colanode](https://colanode.com) - リアルタイムメッセージ、リッチテキストのページ、ファイル管理、動的データベースを備え、オフライン作業のために設計された共同作業ツール群（Slack、Notionの代替）です。（[ソースコード](https://github.com/colanode/colanode)） `Apache-2.0` `K8S/Docker`
- [Cozy Cloud](https://cozy.io/) - 個人用クラウドで、ファイル、ノート、連絡先、パスワード、ドキュメントなどを管理・同期できます。（[ソースコード](https://github.com/cozy/), [クライアント](https://github.com/cozy/cozy-store)） `GPL-3.0` `Nodejs`
- [Digipad](https://digipad.app/) - 共同編集するデジタルノートを作成する、セルフホスト型のオンラインアプリケーション（ドキュメントはフランス語）。（[ソースコード](https://codeberg.org/ladigitale/digipad)） `AGPL-3.0` `Nodejs`
- [Digistorm](https://digistorm.app/) - 共同でアンケート、クイズ、ブレインストーミング、ワードクラウドを作成するツール（ドキュメントはフランス語）。（[デモ](https://digistorm.app/), [ソースコード](https://codeberg.org/ladigitale/digistorm)） `AGPL-3.0` `Nodejs`
- [Digiwall](https://digiwall.app/) - 対面・遠隔の共同作業向けに、マルチメディアの共同編集ボードを作成するツール（ドキュメントはフランス語）。（[ソースコード](https://codeberg.org/ladigitale/digiwall)） `AGPL-3.0` `Nodejs`
- [egroupware](https://www.egroupware.org/) - カレンダー、アドレス帳、ノート、プロジェクト管理、CRM、知識管理、Wiki、CMSを含むソフトウェア群。（[ソースコード](https://github.com/EGroupware/egroupware)） `GPL-2.0` `PHP`
- [Group Office](https://www.group-office.com) - 企業向けCRM・グループウェア。プロジェクト、カレンダー、ファイル、メールを同僚やクライアントとオンラインで共有できます。（[ソースコード](https://github.com/Intermesh/groupoffice/)） `AGPL-3.0` `PHP`
- [Openmeetings](https://openmeetings.apache.org/index.html) - Red5 Streaming Serverのリモート呼び出し・ストリーミングAPIを使う、ビデオ会議、インスタントメッセージ、ホワイトボード、文書の共同編集などのグループウェアです。（[ソースコード](https://github.com/apache/openmeetings)） `Apache-2.0` `Java`
- [SOGo](https://www.sogo.nu/) - CalDAV、CardDAV、GroupDAV、ActiveSyncなど、複数の方法でカレンダー・メッセージデータへアクセスするツール。Outlookとのネイティブな互換性とWeb UIを備えています。（[デモ](https://demo.sogo.nu/SOGo/), [ソースコード](https://github.com/Alinto/sogo)） `LGPL-2.1` `Objective-C`
- [Tine](https://www.tine-groupware.de/) - 企業や組織のデジタルな共同作業を支援するソフトウェア。グループウェア機能と拡張機能をまとめ、日々のチーム作業を容易にすると原文で紹介されています。（[ソースコード](https://github.com/tine-groupware/tine)） `AGPL-3.0` `Docker`
- [Tracim](https://github.com/tracim/tracim) - ファイル、スレッド、メモ、予定表などを扱う、チームでの共同作業用プラットフォームです。 `AGPL-3.0/LGPL-3.0/MIT` `Python`
- [Zimbra Collaboration](https://www.zimbra.com/) - メール、カレンダー、協働サーバー。Webインターフェースと多数の統合機能を備えています。（[ソースコード](https://github.com/zimbra)） `GPL-2.0/CPAL-1.0` `Java`

### 医療・健康・フィットネス <a id="health-and-fitness"></a>

[医療](https://en.wikipedia.org/wiki/Medical_software), [健康](https://en.wikipedia.org/wiki/Health_information_technology) および [フィットネス](https://en.wikipedia.org/wiki/Fitness_tracker) ソフトウェア。

- [Endurain](https://docs.endurain.com/) - ユーザーがデータとホスティング環境について完全な制御を保てるように設計されたフィットネストラッキングサービス。（[ソースコード](https://codeberg.org/endurain-project/endurain)） `AGPL-3.0` `Docker`
- [FitTrackee](https://docs.fittrackee.org/) - シンプルなワークアウト／アクティビティトラッカー。（[ソースコード](https://github.com/SamR1/FitTrackee)） `AGPL-3.0` `Python/Docker`
- [Mere Medical](https://meremedical.co/) `外部プロプライエタリサービス依存` - Epic MyChart、Cerner、OnPatientの患者ポータルからすべての医療記録を1か所で管理できます。プライバシーに配慮し、自前で運用可能でオフライン優先です。（[デモ](https://demo.meremedical.co), [ソースコード](https://github.com/cfu288/mere-medical)） `GPL-3.0` `Docker/Nodejs`
- [OpenELIS Global](https://openelis-global.org) - 臨床、公衆衛生、環境、媒介生物の監視を行う検査室向けの情報システム（LIS/LIMS）。FHIRにネイティブ対応し、分析装置との連携（ASTM/HL7）、品質管理、全国規模の報告機能を備えています。（[デモ](https://openelis-global.org/getting-started/demo/), [ソースコード](https://github.com/DIGI-UW/OpenELIS-Global-2)） `MPL-2.0` `Java/Docker`
- [OpenEMR](https://www.open-emr.org/) - 電子健康記録および医療業務管理ソリューション。（[デモ](https://www.open-emr.org/demo/), [ソースコード](https://github.com/openemr/openemr)） `GPL-3.0` `PHP/Docker`
- [wger](https://wger.de/) - 個人の運動、フィットネス、体重を記録・追跡するWebツール。簡易的なジム管理にも利用でき、一通りの機能を扱えるREST APIを提供します。([デモ](https://wger.de/en/dashboard), [ソースコード](https://github.com/wger-project/wger)) `AGPL-3.0` `Python/Docker`

### 人事管理（HRM） <a id="human-resources-management-hrm"></a>

[人事管理システム](https://en.wikipedia.org/wiki/Human_resource_management_system)は、複数のシステムと業務手順を組み合わせ、[人的資源](https://en.wikipedia.org/wiki/Human_resources)、業務プロセス、データを管理しやすくします。

- [admidio](https://www.admidio.org/) - 組織やグループのWebサイト向けのユーザー管理システム。柔軟なロールモデルで、組織の構造や権限を反映できます。([デモ](https://www.admidio.org/demo/), [ソースコード](https://github.com/Admidio/admidio)) `GPL-2.0` `PHP/Docker`
- [Frappe HR](https://frappe.io/hr) - 従業員管理、入社手続き、休暇、給与、税務などを含む人事管理システム（HRMS）。固定原文では13を超えるモジュールを備えると紹介されています。([ソースコード](https://github.com/frappe/hrms)) `GPL-3.0` `Docker/Python/Nodejs`
- [MintHCM](https://minthcm.org/) - SugarCRM Community EditionとSuiteCRMを基盤とする人的資本管理ツール。原文では、両者は広く知られた人気の業務アプリと紹介されています。([ソースコード](https://github.com/minthcm/minthcm)) `AGPL-3.0` `PHP`

### ID管理 <a id="identity-management"></a>

[ID管理](https://en.wikipedia.org/wiki/Identity_management)（IdM）は、ID・アクセス管理（IAM、IdAM）とも呼ばれます。適切な利用者に技術資源への適切なアクセスを与えるための、方針と技術の枠組みです。

関連資料： [awesome-sysadmin/Identity Management](https://github.com/awesome-foss/awesome-sysadmin#identity-management)

### モノのインターネット（IoT） <a id="internet-of-things-iot"></a>

[モノのインターネット](https://en.wikipedia.org/wiki/Internet_of_things)は、センサー、処理能力、ソフトウェアなどを備えた物理的な機器が、インターネットで他の機器と接続し、データを交換する仕組みです。

関連資料： [自動化](#automation)

- [Domoticz](https://www.domoticz.com/) - 照明、スイッチ、温度、雨、風、UV、電気、ガス、水などさまざまなセンサー・メーターを監視・設定できるホームオートメーションシステム。([ソースコード](https://github.com/domoticz/domoticz), [クライアント](https://github.com/domoticz/domoticz-android)) `GPL-3.0` `C/C++/Docker/Shell`
- [EMQX](https://www.emqx.io/) - 拡張性を備えたMQTTブローカー。固定原文では、単一クラスターに1億以上のIoTデバイスを接続し、遅延1ms、毎秒100万メッセージの処理量でリアルタイムデータを転送・処理できると紹介されています。([デモ](https://www.emqx.com/en/mqtt/public-mqtt5-broker), [ソースコード](https://github.com/emqx/emqx)) `Apache-2.0` `Docker/Erlang`
- [evcc](https://evcc.io/) - 拡張可能な電気自動車の充電制御・家庭向けエネルギー管理システムです。([ソースコード](https://github.com/evcc-io/evcc)) `MIT` `deb/Docker/Go`
- [FHEM](https://fhem.de/fhem.html) - 照明や暖房の切り替えなど、家庭内の日常的な処理を自動化し、温度や消費電力などを記録します。Web・スマートフォン向け画面、telnet、またはTCP/IPで直接制御できます。([ソースコード](https://svn.fhem.de/trac)) `GPL-3.0` `Perl`
- [FlowForge](https://flowforge.com/) - Node-RED開発チーム向けにDevOps機能を提供するプラットフォーム。原文ではNode-REDアプリを信頼性、拡張性、安全性を備えた形でデプロイできると紹介されています。([ソースコード](https://github.com/FlowFuse/flowfuse)) `Apache-2.0` `Nodejs/Docker/K8S`
- [FMD Server](https://fmd-foss.org) - FMD（Find My Device）Androidアプリと通信するサーバーで、デバイスの位置を確認・制御できます。([ソースコード](https://gitlab.com/fmd-foss/fmd-server), [クライアント](https://gitlab.com/fmd-foss/fmd-android)) `GPL-3.0` `Docker/Go`
- [Gladys](https://gladysassistant.com/) - プライバシーを最優先としたホームアシスタント。([ソースコード](https://github.com/GladysAssistant/Gladys)) `Apache-2.0` `Nodejs/Docker`
- [Home Assistant](https://home-assistant.io/) - ホームオートメーションプラットフォーム。([デモ](https://home-assistant.io/demo/), [ソースコード](https://github.com/home-assistant/core)) `Apache-2.0` `Python/Docker`
- [ioBroker](https://www.iobroker.net/) - 建物の自動化、スマートメーター、生活支援技術、プロセスの自動化、可視化、データ記録を重視するIoT統合プラットフォームです。([ソースコード](https://github.com/ioBroker/ioBroker)) `MIT` `Nodejs`
- [LHA](https://github.com/javalikescript/lha) - Blockly、HTML、Luaを使って全面的に拡張できる軽量なホームオートメーションアプリ。ConBee、Philips Hue、Z-Wave JSなどの拡張機能を備えています。 `MIT` `Lua`
- [Node RED](https://nodered.org/) - ハードウェアデバイス、APIおよびオンラインサービスを接続してIoTソリューションを作成できるブラウザベースのフロー編集ツール。([ソースコード](https://github.com/node-red/node-red)) `Apache-2.0` `Nodejs/Docker`
- [Onloc](https://onloc.app) - リアルタイムで自分の位置を追跡・共有できます。盗難や紛失したスマートフォンの制御・ロックも可能です。([ソースコード](https://github.com/onloc-app/onloc-api), [クライアント](https://github.com/onloc-app/onloc-android)) `AGPL-3.0` `Docker`
- [openHAB](https://www.openhab.org) - ホームオートメーション向けのベンダーおよび技術に依存しないオープンソースソフトウェア。([ソースコード](https://github.com/openhab/openhab-core)) `EPL-2.0` `Java`
- [OpenRemote](https://openremote.io) - IoT資産管理、フロー規則およびWHEN-THEN規則、データ可視化、エッジゲートウェイ。([デモ](https://demo.openremote.io/), [ソースコード](https://github.com/openremote/openremote)) `AGPL-3.0` `Java`
- [polluSensWeb](https://wespeakenglish.github.io/polluSensWeb/) - UART接続の汚染センサー（PM2.5、VOCなど）のデータを可視化・記録する、Webベースのシリアル通信・グラフ作成ツール。リアルタイムのデータ取得、動的なグラフ、CSV出力、Webhook連携を備えています。([デモ](https://wespeakenglish.github.io/polluSensWeb/), [ソースコード](https://github.com/WeSpeakEnglish/polluSensWeb), [クライアント](https://github.com/WeSpeakEnglish/polluSensWeb/releases)) `MIT` `Javascript`
- [SIP Irrigation Control](https://dan-in-ca.github.io/SIP/) - スプリンクラー・灌漑の制御を行うオープンソースソフトウェアです。([ソースコード](https://github.com/Dan-in-CA/SIP)) `GPL-3.0` `Python`
- [SOLECTRUS](https://solectrus.de) - 発電量と消費電力を表示し、費用や節約額を計算する太陽光発電ダッシュボード。([デモ](https://demo.solectrus.de), [ソースコード](https://github.com/solectrus/solectrus)) `AGPL-3.0` `Docker`
- [Tasmota](https://tasmota.com) - ESPデバイス向けのオープンソースファームウェア。すべてをローカルで制御でき、素早い設定・更新に対応します。MQTT、Web UI、HTTP、シリアル通信で操作し、タイマー、ルール、スクリプトで自動化できます。ホームオートメーションのツールと連携します。([ソースコード](https://github.com/arendst/Tasmota)) `GPL-3.0` `C/C++`
- [Thingsboard](https://thingsboard.io/) - オープンソースIoTプラットフォーム - デバイス管理、データ収集、処理および可視化。([デモ](https://demo.thingsboard.io/signup), [ソースコード](https://github.com/thingsboard/thingsboard)) `Apache-2.0` `Java/Docker/K8S`
- [WebThings Gateway](https://webthings.io/gateway/) - WebThingsは、Web of Thingsのオープンソース実装であり、WebThings GatewayおよびWebThings Frameworkを含みます。([ソースコード](https://github.com/WebThingsIO/gateway)) `MPL-2.0` `Nodejs`

### 在庫管理 <a id="inventory-management"></a>

[在庫管理ソフトウェア](https://en.wikipedia.org/wiki/Inventory_management_software).

関連資料： [資金・予算・財務管理](#money-budgeting--management), [資源計画](#resource-planning)

関連資料： [awesome-sysadmin/IT Asset Management](https://github.com/awesome-foss/awesome-sysadmin#it-asset-management)

- [Cannery](https://cannery.app) - 銃器および弾薬のトラッキングアプリ。([ソースコード](https://codeberg.org/shibao/cannery)) `AGPL-3.0` `Docker`
- [DVinyl](https://github.com/Kyonew/DVinyl) `外部プロプライエタリサービス依存` - 物理メディア（レコード、CD、カセット、本、映画、ゲーム）向けの現代的なコレクションマネージャー。`MIT` `Nodejs/Docker`
- [HomeBox (SysAdminsMedia)](https://homebox.software/) - 家庭での利用向けに設計された、持ち物の管理・整理システム。([デモ](https://demo.homebox.software/), [ソースコード](https://github.com/sysadminsmedia/homebox)) `AGPL-3.0` `Docker/Go`
- [Inventaire](https://inventaire.io/welcome) - 資源を共同で対応付けるプロジェクト。固定原文では、WikidataとISBNを使った書籍の対応付けの探索に対象を絞っています。([ソースコード](https://codeberg.org/inventaire/inventaires)) `AGPL-3.0` `Nodejs`
- [Inventree](https://docs.inventree.org/en/latest/) - 直感的な部品管理と在庫制御を提供する在庫管理システム。([デモ](https://inventree.org/demo), [ソースコード](https://github.com/inventree/InvenTree)) `MIT` `Python`
- [Open QuarterMaster](https://openquartermaster.com/) - 柔軟でスケーラブルに設計された強力な在庫管理システム。([ソースコード](https://github.com/Epic-Breakfast-Productions/OpenQuarterMaster)) `GPL-3.0` `deb/Docker`
- [Part-DB](https://docs.part-db.de/) - 電子部品の在庫管理システム。([デモ](https://demo.part-db.de/en/), [ソースコード](https://github.com/Part-DB/Part-DB-server)) `AGPL-3.0` `Docker/PHP/Nodejs`
- [Shelf](https://www.shelf.nu) - 資産データベースとQR資産ラベル生成を備え、複数の場所にある資産を作成、管理、一覧表示する、資産・機器の追跡ツール。原文では明確さを重視するチーム向けで、資産数が無制限、恒久的に無料と紹介されています。([ソースコード](https://github.com/Shelf-nu/shelf.nu)) `AGPL-3.0` `Nodejs`
- [Spoolman](https://github.com/Donkie/Spoolman) - 3Dプリンター用フィラメントのスプールの在庫を追跡するツール。 `MIT` `Docker/Python`

### 知識管理ツール <a id="knowledge-management-tools"></a>

[知識管理](https://en.wikipedia.org/wiki/Knowledge_management)は、知識や情報を作成・共有・利用・管理するための方法の集まりです。

関連資料： [ノートとエディター](#note-taking--editors), [Wiki](#wikis), [データベース管理](#database-management)

- [AFFiNE Community Edition](https://affine.pro/) - 計画、分類、作成を統合した次世代の知識ベース。プライバシーを最優先し、カスタマイズ可能で即時使用可能（NotionやMiroの代替）。([デモ](https://app.affine.pro/), [ソースコード](https://github.com/toeverything/AFFiNE)) `MIT/AGPL-3.0` `Docker`
- [Atomic Server](https://atomicserver.eu/) - Notionに似た文書、テーブル、検索、リンクトデータAPIを備えた軽量な知識グラフデータベース。実行時の依存関係はなく、原文では非常に高速と紹介されています。([デモ](https://atomicdata.dev/), [ソースコード](https://github.com/ontola/atomic-server)) `MIT` `Docker/Rust`
- [Digimindmap](https://ladigitale.dev/digimindmap/#/) - シンプルなマインドマップを作成（フランス語のドキュメント）。([デモ](https://ladigitale.dev/digimindmap/#/), [ソースコード](https://codeberg.org/ladigitale/digimindmap)) `AGPL-3.0` `Nodejs/PHP`
- [LibreKB](https://librekb.com/) - ウェブベースの知識ベースソリューション。シンプルなウェブアプリで、PHPとMySQLを備えたほぼすべてのウェブサーバーまたはホスティングプロバイダーで動作します。([ソースコード](https://github.com/michaelstaake/LibreKB/)) `GPL-3.0` `PHP`
- [memEx](https://codeberg.org/shibao/memEx) - Zettelkastenとorg-modeに着想を得た、構造化された個人用知識ベース。`AGPL-3.0` `Docker`
- [SiYuan](https://b3log.org/siyuan/) - TypeScriptとGoで書かれた、プライバシーを最優先する個人用知識管理ソフトウェア。([ソースコード](https://github.com/siyuan-note/siyuan)) `AGPL-3.0` `Docker/Go`
- [TeamMapper](https://github.com/b310-digital/teammapper) - 自らのマインドマップをホストし、作成します。チームと共有し、マインドマップ上でリアルタイムで協働できます。([デモ](https://map.kits.blog)) `MIT` `Docker/Nodejs`

### 学習と講座 <a id="learning-and-courses"></a>

教育や学習を支援するツールとソフトウェア。

- [Canvas LMS](https://www.instructure.com/canvas/) - 学習管理システム（LMS）。原文では教育の方法を変革するものと紹介されています。([デモ](https://canvas.instructure.com/register), [ソースコード](https://github.com/instructure/canvas-lms)) `AGPL-3.0` `Ruby`
- [Chamilo LMS](https://chamilo.org/) - オンライン、または一部オンラインの研修を提供する仮想キャンパスを構築するツール。([ソースコード](https://github.com/chamilo/chamilo-lms)) `GPL-3.0` `PHP`
- [Digiscreen](https://ladigitale.dev/digiscreen/) - 対面・遠隔授業向けの、操作できるホワイトボード・背景画面（フランス語のドキュメントあり）です。([デモ](https://ladigitale.dev/digiscreen/), [ソースコード](https://codeberg.org/ladigitale/digiscreen)) `AGPL-3.0` `Nodejs/PHP`
- [Digitools](https://ladigitale.dev/digitools) - 対面・遠隔授業の進行を支援するシンプルなツール群（フランス語のドキュメントあり）です。([デモ](https://ladigitale.dev/digitools/), [ソースコード](https://codeberg.org/ladigitale/digitools)) `AGPL-3.0` `PHP`
- [edX](https://www.edx.org/) - Open edXプラットフォームは、edX.orgを動かすオープンソースコードです。([ソースコード](https://github.com/edx/)) `AGPL-3.0` `Python`
- [Gibbon](https://gibbonedu.org/) - 教師、生徒、保護者、学校の指導者の活動を支援する、柔軟な学校管理プラットフォーム。([ソースコード](https://github.com/GibbonEdu/core)) `GPL-3.0` `PHP`
- [Helium](https://www.heliumedu.com) - 授業、宿題、成績、ノートを色分けして管理する学生向けプランナー。スマート通知と端末間の同期を備えています。([デモ](https://app.heliumedu.com), [ソースコード](https://github.com/HeliumEdu/platform)) `MIT` `Python/Docker`
- [ILIAS](https://www.ilias.de) - 学習管理システム。原文では幅広い要望に対応できると紹介されています。([デモ](https://demo.ilias.de), [ソースコード](https://github.com/ILIAS-eLearning/ILIAS)) `GPL-3.0` `PHP`
- [INGInious](https://inginious.org/?lang=en) - 学生が書いたコードを安全かつ自動でテストする、インテリジェントな採点ツール。([ソースコード](https://github.com/INGInious/INGInious), [クライアント](https://github.com/INGInious/plugins)) `AGPL-3.0` `Python/Docker`
- [Moodle](https://moodle.org/) - 学習・コース管理プラットフォーム。原文では世界最大級のオープンソースコミュニティの1つを持つと紹介されています。([デモ](https://moodle.org/demo/), [ソースコード](https://git.moodle.org/gw)) `GPL-3.0` `PHP`
- [Open eClass](https://www.openeclass.org/) - 授業や学習の過程を改善できる、高度なeラーニングソリューションと原文で紹介されています。（[デモ](https://demo.openeclass.org/), [ソースコード](https://github.com/gunet/openeclass)） `GPL-2.0` `PHP`
- [OpenOLAT](https://www.openolat.com/?lang=en) - 授業、教育、評価、コミュニケーションを支援する学習管理システム。（[デモ](https://learn.olat.com), [ソースコード](https://github.com/OpenOLAT/OpenOLAT)） `Apache-2.0` `Java`
- [QST](https://qstonline.org) - スマートフォンでの簡単なクイズから、結果が重要な大規模・試験監督付きのデスクトップ試験まで扱うオンライン評価ソフトウェア。原文では使いやすく、安全で経済的と紹介されています。（[デモ](https://qstonline.org/free_account.htm), [ソースコード](https://sourceforge.net/projects/qstonline/)） `GPL-2.0` `Perl`
- [RELATE](https://documen.tician.de/relate/) - 柔軟なルール、統計、複数コース対応、クラスカレンダーを備えたコースウェアパッケージ。（[ソースコード](https://github.com/inducer/relate)） `MIT` `Python`
- [RosarioSIS](https://www.rosariosis.org/) - 学校管理向けの生徒情報システム。生徒の属性、成績、予定、出席、請求、規律、給食サービスなどのモジュールを備えています。（[デモ](https://www.rosariosis.org/demo/), [ソースコード](https://gitlab.com/francoisjacquet/rosariosis/)） `GPL-2.0` `PHP`

### 製造 <a id="manufacturing"></a>

[3Dプリンター](https://en.wikipedia.org/wiki/3D_printing)、[CNC工作機械](https://en.wikipedia.org/wiki/Numerical_control)、その他の物理的な製造機器を管理するソフトウェアです。

- [CNCjs](https://cnc.js.org/) - Grbl、Smoothieware、またはTinyGを実行するCNCマシンコントローラー向けのウェブインターフェース。（[ソースコード](https://github.com/cncjs/cncjs/)） `MIT` `Nodejs`
- [Fluidd](https://docs.fluidd.xyz/) - 3DプリンターのファームウェアKlipper向けの、軽量で画面サイズに適応するUIです。（[ソースコード](https://github.com/fluidd-core/fluidd)） `GPL-3.0` `Docker/Nodejs`
- [LinuxCNC](https://www.linuxcnc.org/) - LinuxベースのCNC制御ソフトウェア。フライス盤、旋盤、3Dプリンター、レーザーカッター、プラズマカッター、ロボットアーム、ヘキサポッドなどを駆動できます。（[ソースコード](https://github.com/LinuxCNC/linuxcnc)） `GPL-2.0/LGPL-3.0` `C/deb`
- [Mainsail](https://docs.mainsail.xyz/) - 3DプリンターのファームウェアKlipper向けの、画面サイズに適応するUI。原文では任意の場所や端末からプリンターを制御・監視できると紹介されています。（[ソースコード](https://github.com/mainsail-crew/mainsail)） `GPL-3.0` `Docker/Python`
- [Manyfold](https://manyfold.app) - 3Dプリントファイル（STL、OBJ、3MFなど）を管理するデジタル資産マネージャー。（[ソースコード](https://github.com/manyfold3d/manyfold)） `MIT` `Docker`
- [Octoprint](https://octoprint.org/) - 一般向け3Dプリンターを制御する、画面サイズに適応するWebインターフェース。（[ソースコード](https://github.com/OctoPrint/OctoPrint)） `AGPL-3.0` `Docker/Python`

### 地図と全地球測位システム（GPS） <a id="maps-and-global-positioning-system-gps"></a>

[地図](https://en.wikipedia.org/wiki/Map)、[地図作成](https://en.wikipedia.org/wiki/Cartography)、[GIS](https://en.wikipedia.org/wiki/Geographic_information_system)、[GPS](https://en.wikipedia.org/wiki/Global_Positioning_System)ソフトウェア。

関連資料： [旅行の計画](#travel-organization)

関連資料： [awesome-openstreetmap](https://github.com/osmlab/awesome-openstreetmap), [awesome-gis](https://github.com/sshuair/awesome-gis)

- [AdventureLog](https://adventurelog.app) - 旅行トラッカーおよび旅行計画ツール。（[デモ](https://demo.adventurelog.app/signup), [ソースコード](https://github.com/seanmorley15/AdventureLog)） `GPL-3.0` `Docker`
- [AirTrail](https://airtrail.johan.ohly.dk) - 個人のフライトを記録・追跡するシステム。（[ソースコード](https://github.com/johanohly/AirTrail)） `GPL-3.0` `Docker/Nodejs`
- [Bicimon](https://github.com/knrdl/bicimon) - 自転車用の速度計として使うプログレッシブWebアプリです。（[デモ](https://knrdl.github.io/bicimon/)） `MIT` `Javascript`
- [Dawarich](https://dawarich.app/) - 位置履歴の可視化、移動の追跡、旅行パターンの分析を行うツール（Google Timeline、別名Google Location Historyの代替）。原文ではプライバシーと自分での管理を全面的に重視すると紹介されています。（[ソースコード](https://github.com/Freika/dawarich)） `AGPL-3.0` `Docker`
- [Geo2tz](https://github.com/noandrea/geo2tz) - 地理座標（緯度・経度）からタイムゾーンを取得します。 `MIT` `Go/Docker`
- [GraphHopper](https://graphhopper.com/) - OpenStreetMapを使う経路探索ライブラリとサーバー。原文では高速と紹介されています。（[ソースコード](https://github.com/graphhopper/graphhopper)） `Apache-2.0` `Java`
- [NextGIS Web](https://nextgis.com/nextgis-web/) - 地理空間データ管理、ウェブマップ公開、QGISを中心とした協働ワークフローを支援するウェブGISサーバー。（[デモ](https://sandbox.nextgis.com), [ソースコード](https://github.com/nextgis/nextgisweb)） `GPL-3.0` `Docker`
- [Nominatim](https://nominatim.org/) - OpenStreetMapデータを使い、住所から座標へのジオコーディングと、座標から住所への逆ジオコーディングを行うサーバーアプリです。（[ソースコード](https://github.com/osm-search/Nominatim)） `GPL-2.0` `C`
- [Open Source Routing Machine (OSRM)](http://project-osrm.org/) - OpenStreetMapデータを使い、HTTP API、C++ライブラリのインターフェース、Node.jsラッパーを提供する経路探索エンジン。原文では高性能と紹介されています。（[デモ](https://map.project-osrm.org/), [ソースコード](https://github.com/Project-OSRM/osrm-backend)） `BSD-2-Clause` `C++`
- [OpenRouteService](https://openrouteservice.org/) - 経路案内、等時間圏、所要時間・距離の行列、経路の最適化などを提供する経路探索サービスです。（[デモ](https://openrouteservice.org/dev/#/api-docs/introduction), [ソースコード](https://github.com/GIScience/openrouteservice)） `GPL-3.0` `Docker/Java`
- [OpenStreetMap](https://www.openstreetmap.org/) - 世界の自由編集可能な地図を作成する協働プロジェクト。（[ソースコード](https://github.com/openstreetmap/openstreetmap-website), [クライアント](https://wiki.openstreetmap.org/wiki/Software)） `GPL-2.0` `Ruby`
- [OpenTripPlanner](https://www.opentripplanner.org/) - OpenStreetMapと公開されたGTFS形式のデータを使い、地域の公共交通機関による経路を提案する、複数の交通手段を組み合わせた旅行計画ソフトウェアです。（[ソースコード](https://github.com/opentripplanner/OpenTripPlanner)） `LGPL-3.0` `Java/Javascript`
- [OwnTracks Recorder](https://github.com/owntracks/recorder) `外部プロプライエタリサービス依存` - [OwnTracks](https://owntracks.org/)の位置トラッキングアプリが公開したデータを保存し、アクセスできる。（`GPL-2.0` `C/Lua/deb/Docker`）
- [TileServer GL](https://tileserver.readthedocs.io/) - GLスタイルを使うベクター・ラスター地図のタイルサーバー。Mapbox GL Nativeでサーバー側レンダリングを行い、Mapbox GL JS、Android、iOS、Leaflet、OpenLayers、WMTSを使うGISなどに対応します。（[ソースコード](https://github.com/maptiler/tileserver-gl)） `BSD-2-Clause` `Nodejs/Docker`
- [Traccar](https://www.traccar.org/) - GPS位置を追跡するJavaアプリケーション。多数の追跡機器・プロトコルに対応し、Android・iOSアプリと、移動記録を閲覧するWeb UIを備えています。（[デモ](https://demo.traccar.org/), [ソースコード](https://github.com/traccar)） `Apache-2.0` `Java`
- [TRIP](https://itskovacs-trip.netlify.app/) - 地点（POI）の地図による追跡と旅行計画を行う、最小限の構成を持つツール。（[デモ](https://itskovacs-trip.netlify.app/home), [ソースコード](https://github.com/itskovacs/trip)） `MIT` `Docker`
- [wanderer](https://github.com/open-wanderer/wanderer) - 記録した経路のアップロードや新しい経路の作成、各種メタデータの追加によって、検索しやすい一覧を作成するトレイルのデータベースです。（[デモ](https://demo.wanderer.to)） `AGPL-3.0` `Docker/Go/Nodejs`

### メディア管理 <a id="media-management"></a>

[デジタルメディア](https://en.wikipedia.org/wiki/Digital_media)の管理ツールとソフトウェアです。

関連資料： [自動化](#automation), [メディアのストリーミング](#media-streaming), [メディアのストリーミング：音声](#media-streaming---audio-streaming), [メディアのストリーミング：マルチメディア](#media-streaming---multimedia-streaming), [メディアのストリーミング：動画](#media-streaming---video-streaming), [メディア管理](#media-management)

- [ChannelTube](https://github.com/TheWicklowWolf/ChannelTube) `外部プロプライエタリサービス依存` - yt-dlpを用いて、YouTubeチャンネルからスケジュールに従って動画または音声をダウンロード。（`AGPL-3.0` `Docker`）
- [Deleterr](https://github.com/rfsbraz/deleterr) - 設定したルールに従い、Plex、Sonarr、Radarrから視聴済み・古くなったコンテンツを削除する、自動メディア整理ツールです。 `MIT` `Docker`
- [Downtify](https://downtify.henriquesebastiao.com) `外部プロプライエタリサービス依存` - Spotifyの音楽をアルバムアートとメタデータ付きでダウンロード。（[ソースコード](https://github.com/henriquesebastiao/downtify)） `GPL-3.0` `Docker`
- [Lidarr](https://lidarr.audio/) - UsenetおよびBitTorrentユーザー向けの音楽コレクションマネージャー。（[ソースコード](https://github.com/Lidarr/Lidarr)） `GPL-3.0` `C#/Docker`
- [LidaTube](https://github.com/TheWicklowWolf/LidaTube) `外部プロプライエタリサービス依存` - yt-dlpを使って欠落しているLidarrのアルバムを検索・取得。（`GPL-3.0`） `Docker`
- [Lidify](https://github.com/TheWicklowWolf/Lidify) `外部プロプライエタリサービス依存` - SpotifyまたはLastFMを用いて選択されたLidarrアーティストに基づきおすすめを提供する音楽発見ツール。（`MIT`） `Docker`
- [Medusa](https://github.com/pymedusa/Medusa) - テレビ番組向けの自動動画ライブラリ管理ツール。好きな番組の新しいエピソードを監視し、公開されると処理します。（[原文のクライアント欄のリンク（別のECプロジェクト）](https://github.com/medusajs/nextjs-starter-medusa)） `GPL-3.0` `Python`
- [MeTube](https://github.com/alexta69/metube) - プレイリストに対応するyoutube-dl向けWeb GUI。固定原文では数十のWebサイトから動画をダウンロードできると紹介されています。 `AGPL-3.0` `Python/Nodejs/Docker`
- [MKVPriority](https://github.com/kennethsible/mkvpriority) - 設定した優先度スコアに従って音声・字幕トラックを選び、既定トラックと強制表示のフラグを適切に設定するツール。 `MIT` `Python/Docker`
- [MyTube](https://github.com/franklioxygen/MyTube) `外部プロプライエタリサービス依存` - yt-dlp対応サイトでのチャンネルサブスクリプション、クラウドアップロード、ローカルライブラリ管理をサポートするダウンローダーおよびプレイヤー。（[デモ](https://mytube-demo.vercel.app)） `MIT` `Nodejs/Docker`
- [nefarious](https://lardbit.github.io/nefarious/) - 映画およびテレビ番組の自動ダウンロード。（[ソースコード](https://github.com/lardbit/nefarious)） `GPL-3.0` `Python`
- [Ombi](https://ombi.io/) - Plex・Emby向けのコンテンツリクエストシステム。SickRage、CouchPotato、Sonarrへ接続し、固定原文では機能が拡充中と紹介されています。（[デモ](https://app.ombi.io/), [ソースコード](https://github.com/Ombi-app/Ombi)） `GPL-2.0` `C#/deb`
- [Pinchflat](https://github.com/kieraneglin/pinchflat) `外部プロプライエタリサービス依存` - yt-dlpを使って作られた、YouTubeコンテンツのダウンロードツールです。 `AGPL-3.0` `Docker`
- [PodFetch](https://samtv12345.github.io/PodFetch) - 洗練された効率的なポッドキャストダウンローダー。（[ソースコード](https://github.com/SamTV12345/PodFetch)） `Apache-2.0` `Docker/Rust`
- [Radarr](https://radarr.video/) - UsenetとBitTorrentを使い、映画を自動ダウンロードするツール（Sonarrのフォーク）です。（[ソースコード](https://github.com/Radarr/Radarr)） `GPL-3.0` `C#/Docker`
- [Reaparr](https://www.reaparr.rocks/) `外部プロプライエタリサービス依存` - 他のPlexサーバーから自分のサーバーへメディアを追加する、複数プラットフォーム対応のPlexメディアダウンロードツールです。（[ソースコード](https://github.com/Reaparr/Reaparr)） `GPL-3.0` `Docker`
- [Seerr](https://github.com/seerr-team/seerr) - Plex、Jellyfin、Embyに対応する、メディアライブラリーへのリクエスト管理ツール（Overseerrの派生版）。 `MIT` `Docker/Nodejs`
- [Sonarr](https://sonarr.tv/) - UsenetとBitTorrent向けのテレビ番組の自動ダウンロード・管理ツール。新しいエピソードを取得、整理、改名し、より高品質の形式が利用可能になると、取得済みのファイルを自動的に高品質版へ更新します。（[ソースコード](https://github.com/Sonarr/Sonarr)） `GPL-3.0` `C#/Docker`
- [TrackWatch](https://trackwatch.emlopezr.com) `外部プロプライエタリサービス依存` - Spotifyの新しい音楽リリースを自動追跡するツール。メール通知、ディスコグラフィー生成、ゴーストトラックの削除を備えています（Release Radarの代替）。（[ソースコード](https://github.com/emlopezr/trackwatch)） `MIT` `Docker`
- [tubesync](https://github.com/meeb/tubesync) `外部プロプライエタリサービス依存` - YouTubeのチャンネル・プレイリストを、ローカルでホストするメディアサーバーへ同期するツール。 `AGPL-3.0` `Docker/Python`
- [Watcharr](https://github.com/sbondCo/Watcharr) - 視聴中の番組と映画を追加・追跡。ユーザー認証、現代的でシンプルなUI、非常に簡単なセットアップを備えている。（[デモ](https://beta.watcharr.app/)） `MIT` `Docker`
- [ydl_api_ng](https://github.com/Totonyus/ydl_api_ng) - シンプルなyoutube-dl REST APIで、遠隔サーバーでのダウンロードを開始。（`GPL-3.0`） `Python`
- [Youtarr](https://github.com/DialmasterOrg/Youtarr) `外部プロプライエタリサービス依存` - yt-dlpを使ってスケジュールでYouTubeチャンネルの動画をダウンロード。ウェブUIで動画を閲覧・選択的にダウンロード可能。Plex Media Serverと統合し、Jellyfin、Kodi、Emby向けにNFOメタデータを生成。（`ISC`） `Docker`
- [youtube-dl-nas](https://hyeonsangjeon.github.io/youtube-dl-nas/) `外部プロプライエタリサービス依存` - 認証されたyt-dlpダウンロードキュー（動画、音声、字幕）を提供。履歴、モバイル共有、NASファイル管理（youtube-dl-serverのフォーク）。（[ソースコード](https://github.com/hyeonsangjeon/youtube-dl-nas)） `MIT` `Python/Docker`
- [YoutubeDL-Server](https://github.com/nbr23/youtube-dl-server) - Youtube-DL向けのウェブおよびRESTインターフェースでサーバーに動画をダウンロード。（`MIT`） `Python/Docker`
- [yt-dlp Web UI](https://github.com/marcopiovanello/yt-dlp-web-ui) - yt-dlp向けのウェブGUI。（`MPL-2.0`） `Docker/Go/Nodejs`

### メディアのストリーミング <a id="media-streaming"></a>

[ストリーミングメディア](https://en.wikipedia.org/wiki/Streaming_media)は、配信元から連続的に送り、受け取って利用するマルチメディアです。ネットワーク内の中間保存はほとんど、またはまったく行いません。

関連資料： [メディアのストリーミング：音声](#media-streaming---audio-streaming), [メディアのストリーミング：マルチメディア](#media-streaming---multimedia-streaming), [メディアのストリーミング：動画](#media-streaming---video-streaming), [メディア管理](#media-management)

関連資料： [メディアのストリーミング](#media-streaming)

関連資料： [ストリーミングメディアシステムの一覧（Wikipedia）](https://en.wikipedia.org/wiki/List_of_streaming_media_systems), [ストリーミングメディアシステムの比較（Wikipedia）](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)

### メディアのストリーミング：音声 <a id="media-streaming---audio-streaming"></a>

[音声](https://en.wikipedia.org/wiki/Audio) ストリーミングツールとソフトウェア。

関連資料： [メディア管理](#media-management)

- [Ampache](https://ampache.org/) - ウェブベースのオーディオ・ビデオストリーミングアプリケーション。（[デモ](https://play.dogmazic.net/), [ソースコード](https://github.com/ampache/ampache)） `AGPL-3.0` `PHP`
- [Audiobookshelf](https://www.audiobookshelf.org/) - オーディオブック・ポッドキャストのサーバー。再生位置を保持して端末間で同期し、Android・iOS向けのオープンソースアプリを備えています。原文ではすべての音声形式をストリーミングできると紹介されています。（[ソースコード](https://github.com/advplyr/audiobookshelf), [クライアント](https://github.com/advplyr/audiobookshelf-app)） `GPL-3.0` `Docker/deb/Nodejs`
- [Audioserve](https://github.com/izderadicka/audioserve) - ディレクトリー内の音声ファイル（オーディオブック、音楽、ポッドキャストなど）を配信する個人用サーバー。シンプルさを重視し、クライアント間で再生位置を同期できます。 `MIT` `Rust`
- [AzuraCast](https://www.azuracast.com/) - 現代的で利用しやすい、Webラジオ管理用ソフトウェア群。（[ソースコード](https://github.com/AzuraCast/AzuraCast)） `Apache-2.0` `Docker`
- [Beets](https://beets.io/) - 音楽ライブラリマネージャーおよびMusicBrainzタグ付けツール（コマンドラインおよびウェブインターフェース）。（[ソースコード](https://github.com/beetbox/beets)） `MIT` `Python/deb`
- [Black Candy](https://github.com/blackcandy-org/blackcandy) - 音楽ストリーミングサーバー。（`MIT`） `Docker/Ruby`
- [BotWave](https://botwave.dpip.lol) - FM放送システムで、複数のRaspberry Pi送信機をリモートで管理できるサーバー・クライアントアーキテクチャ。 ([ソースコード](https://github.com/dpipstudio/botwave)) `GPL-3.0` `Python`
- [Funkwhale](https://dev.funkwhale.audio/funkwhale) - Webベースで複数ユーザーに対応する自由な音楽サーバー。原文では親しみやすいものと紹介されています。 `BSD-3-Clause` `Python`
- [gonic](https://github.com/sentriz/gonic) - 軽量の音楽ストリーミングサーバー。Subsonicと互換性あり。 `GPL-3.0` `Go/Docker`
- [koel](https://koel.dev/) - 個人用の音楽ストリーミングサーバー。 ([デモ](https://demo.koel.dev/), [ソースコード](https://github.com/koel/koel)) `MIT` `PHP`
- [LibreTime](https://libretime.org) - Web上でストリーミングラジオを放送するツール（[Airtime](https://github.com/sourcefabric/Airtime)の派生版）。 ([ソースコード](https://github.com/LibreTime/libretime)) `AGPL-3.0` `Docker/PHP`
- [LMS](https://github.com/epoupon/lms) - ウェブインターフェースを使って、自前でホストした音楽にアクセス。 `GPL-3.0` `Docker/deb/C++`
- [Lyrion Music Server](https://lyrion.org/) - Squeezebox・Slim Devicesの各種音声プレイヤーと互換ハードウェアを制御するサーバーソフトウェア（旧名Logitech Media Server）。 ([ソースコード](https://github.com/lms-community/slimserver), [クライアント](https://lyrion.org/extensions/applications/)) `GPL-2.0` `deb/Docker/Perl`
- [moOde Audio](https://moodeaudio.org/) - Raspberry Piシリーズのシングルボードコンピューター向けの音楽再生ソフトウェア。原文では音楽愛好家向けの高音質と紹介されています。 ([ソースコード](https://github.com/moode-player/moode)) `GPL-3.0` `PHP`
- [Mopidy](https://docs.mopidy.com/) `外部プロプライエタリサービス依存` - mpd APIの機能を包含する拡張可能な音楽サーバー。Spotify、SoundCloudなどの外部サービスとも連携します。 ([ソースコード](https://github.com/mopidy/mopidy)) `Apache-2.0` `Python/deb`
- [mpd](https://www.musicpd.org/) - リモートで音楽を再生・ストリーミングし、プレイリストを管理・整理するデーモン。多くのクライアントが利用可能。 ([ソースコード](https://github.com/MusicPlayerDaemon/MPD), [クライアント](https://www.musicpd.org/clients/)) `GPL-2.0` `C++`
- [mStream](https://mstream.io/) - GUI管理ツールを備えた音楽ストリーミングサーバー。Mac、Windows、Linuxで動作。 ([ソースコード](https://github.com/IrosTheBeggar/mStream)) `GPL-3.0` `Nodejs`
- [multi-scrobbler](https://foxxmd.github.io/multi-scrobbler) - 複数の情報源から複数の音楽再生履歴記録サービスへ、再生履歴を送信します。 ([ソースコード](https://github.com/FoxxMD/multi-scrobbler)) `MIT` `Nodejs/Docker`
- [musikcube](https://musikcube.com/) - Linux/macOS/Windows/Androidクライアントを備えたストリーミングオーディオサーバー。 ([ソースコード](https://github.com/clangen/musikcube)) `BSD-3-Clause` `C++/deb`
- [Navidrome Music Server](https://www.navidrome.org) - 現代的な音楽サーバーおよびストリーミングサーバー。Subsonic/Airsonicと互換性あり。 ([デモ](https://www.navidrome.org/demo), [ソースコード](https://github.com/navidrome/navidrome), [クライアント](https://www.navidrome.org/docs/overview/#apps)) `GPL-3.0` `Docker/Go`
- [Pinepods](https://www.pinepods.online/) - マルチユーザー対応のポッドキャスト管理システム。Pinepodsは中央データベースを活用し、聴取時間やテーマなどの情報がデバイス間で連続的に反映される。 ([デモ](https://try.pinepods.online), [ソースコード](https://github.com/madeofpendletonwool/PinePods)) `GPL-3.0` `Docker`
- [Polaris](https://github.com/agersant/polaris) - 大規模な音楽コレクション、使いやすさ、高性能を考慮した音楽閲覧およびストリーミングアプリケーション。 `MIT` `Rust/Docker`
- [Snapcast](https://github.com/snapcast/snapcast) - 同期型マルチルームオーディオサーバー。 `GPL-3.0` `C++/deb`
- [Stretto](https://github.com/benkaiser/stretto) `外部プロプライエタリサービス依存` - YouTube・SoundCloudからの取り込みと、iTunes・Spotifyを使う楽曲探索を備えた音楽プレイヤーです。 ([デモ](https://next.kaiserapps.com), [クライアント](https://github.com/benkaiser/stretto-mobile-next)) `MIT` `Nodejs`
- [Supysonic](https://github.com/spl0k/supysonic) - SubsonicサーバーAPIのPython実装。 `AGPL-3.0` `Python/deb`
- [SwingMusic](https://swingmusic.vercel.app/) - 自分のローカル音声ファイルを使う、セルフホスト型の音楽プレイヤー・ストリーミングサーバー。原文では外観の美しさを挙げ、自分の音楽を持ち込む、より魅力的なSpotifyに例えています。 ([ソースコード](https://github.com/swingmx/swingmusic)) `MIT` `Python/Docker`
- [vod2pod-rss](https://github.com/madiele/vod2pod-rss) `外部プロプライエタリサービス依存` - YouTube・Twitchのチャンネルをポッドキャストに変換するツール。保存を必要とせず、オンデマンド動画（VoD）をその場でMP3 192kへ変換し、ポッドキャストクライアント用のRSSフィードを生成します。`MIT` `Docker`

### メディアのストリーミング：マルチメディア <a id="media-streaming---multimedia-streaming"></a>

[マルチメディア](https://en.wikipedia.org/wiki/Multimedia) ストリーミングツールとソフトウェア。

関連資料： [メディアのストリーミング：動画](#media-streaming---video-streaming), [メディアのストリーミング：音声](#media-streaming---audio-streaming), [メディア管理](#media-management)

- [ClipBucket](https://clipbucket.fr/) - 自分の動画共有サイト（YouTube・Netflixのクローン）を構築するツール。原文では数分で開始できると紹介されています。（[デモ](https://demo.clipbucket.oxygenz.fr/)，[ソースコード](https://github.com/MacWarrior/clipbucket-v5)）`AAL` `Docker/PHP`
- [cmyflix](https://github.com/farfalleflickan/cmyflix) - シンプルなPlex／Jellyfinの代替品として、動画をストリーミング可能。`AGPL-3.0` `C/deb`
- [Gerbera](https://gerbera.io/) - 家庭内のネットワークでデジタルメディアを配信し、さまざまなUPnP対応機器で音声・動画を再生するUPnPメディアサーバー。（[ソースコード](https://github.com/gerbera/gerbera)）`GPL-2.0` `Docker/deb/C++`
- [Icecast 2](https://icecast.org) - インターネットラジオ局や個人運用のジュークボックスなどを作るための、音声・動画のストリーミングサーバーです。 （[ソースコード](https://gitlab.xiph.org/xiph/icecast-server)，[クライアント](https://icecast.org/apps/)）`GPL-2.0` `C`
- [Jellyfin](https://jellyfin.org) - 音声、動画、本、コミック、写真を扱うメディアサーバー。原文では洗練されたUIと強力なトランスコード機能を持ち、Roku、Android TV、iOS、Kodiなど、ほぼすべての現行プラットフォームにクライアントがあると紹介されています。（[デモ](https://demo.jellyfin.org/stable)，[ソースコード](https://github.com/jellyfin/jellyfin)，[クライアント](https://github.com/awesome-jellyfin/awesome-jellyfin)）`GPL-2.0` `C#/deb/Docker`
- [Karaoke Eternal](https://www.karaoke-eternal.com) - スマートフォンのブラウザーから楽曲を探して再生待ちに追加できる、カラオケパーティー用ツール。プレイヤーもブラウザー内で動作し、MP3+G、MP4、WebGLによる可視化に対応します。（[ソースコード](https://github.com/bhj/KaraokeEternal)）`ISC` `Docker/Nodejs`
- [Kodi](https://kodi.tv/) - マルチメディア／エンターテインメントセンター。かつてはXBMCと呼ばれていた。Android、BSD、Linux、macOS、iOS、Windowsで動作。（[ソースコード](https://github.com/xbmc/xbmc)）`GPL-2.0` `C++/deb`
- [Kyoo](https://github.com/zoriya/kyoo) - アニメ、連続ドラマ、映画をスムーズに配信する、先進的なメディアブラウザー。動的な形式変換、自動的な視聴履歴、インテリジェントなメタデータ取得を備えています。（[デモ](https://kyoo.zoriya.dev)）`GPL-3.0` `Docker`
- [MediaMTX](https://mediamtx.org) - 即時使用可能で、依存関係のないリアルタイムメディアサーバーおよびプロキシ。SRT、WebRTC、RTSP、RTMP、HLS、MPEG-TS、RTPを介してビデオ／オーディオストリームの公開、読み取り、記録、再生、ルーティングが可能。（[ソースコード](https://github.com/bluenviron/mediamtx)，[クライアント](https://mediamtx.org/docs/kickoff/introduction)）`MIT` `Go/Docker`
- [Meelo](https://github.com/Arthi-chaud/Meelo) - 個人用音楽サーバー。コレクターおよび音楽愛好家向けに設計。`GPL-3.0` `Docker`
- [MistServer](https://mistserver.org/) - パブリックドメインのストリーミングメディアサーバー。原文では任意の端末・形式で動作すると紹介されています。（[ソースコード](https://github.com/DDVTECH/mistserver)）`Unlicense` `C++`
- [NymphCast](http://nyanko.ws/nymphcast.php) - Linuxで動く任意のハードウェアを、テレビやアンプ内蔵スピーカーへ音声・映像を送る機器にするツール（Chromecastの代替）。（[ソースコード](https://github.com/MayaPosch/NymphCast)）`BSD-3-Clause` `C++`
- [Rygel](https://gnome.pages.gitlab.gnome.org/rygel/) - 音声、動画、画像を共有するUPnP AVメディアサーバー。メディアプレイヤーはRygelを使ってメディアレンダラーとして動作し、UPnP・DLNAコントローラーから遠隔操作できます。（[ソースコード](https://gitlab.gnome.org/GNOME/rygel/)）`LGPL-2.1` `C`
- [Stash](https://stashapp.cc) - 成人向けメディアのライブラリーを整理・再生するWebツール。自動タグ付けとメタデータの収集に対応します。（[ソースコード](https://github.com/stashapp/stash)）`AGPL-3.0` `Docker/Go`
- [µStreamer](https://github.com/pikvm/ustreamer) - V4L2デバイスのMJPEG動画をネットワークへ配信する軽量なサーバー。原文では任意のV4L2デバイスに対応し、非常に高速と紹介されています。 `GPL-3.0` `C/deb`
- [üWave](https://u-wave.net/) `外部プロプライエタリサービス依存` - セルフホスト型の共同視聴・聴取プラットフォーム。YouTubeやSoundCloudなどから、曲、トーク、ゲームプレイ動画などのメディアを交代で再生します。（[デモ](https://wlk.yt/)，[ソースコード](https://github.com/u-wave)）`MIT` `Nodejs`

### メディアのストリーミング：動画 <a id="media-streaming---video-streaming"></a>

[動画](https://en.wikipedia.org/wiki/Video) ストリーミングツールとソフトウェア。

関連資料： [監視カメラ](#video-surveillance), [メディアのストリーミング：マルチメディア](#media-streaming---multimedia-streaming), [写真ギャラリー](#photo-galleries), [メディア管理](#media-management)

- [CyTube](https://github.com/calzoneman/sync) - 任意の数のチャンネルでメディアやチャットなどを同期するツール。（[デモ](https://cytu.be)）`MIT` `Nodejs`
- [Invidious](https://github.com/iv-org/invidious) `外部プロプライエタリサービス依存` - YouTubeの代替フロントエンド。（[デモ](https://docs.invidious.io/instances/)）`AGPL-3.0` `Docker/Crystal`
- [MediaCMS](https://mediacms.io) - Python・Django・Reactで書かれた、多機能なオープンソースの動画・メディアCMS。現代的な設計でREST APIを備えています。（[ソースコード](https://github.com/mediacms-io/mediacms)）`AGPL-3.0` `Python/Docker`
- [OvenMediaEngine](https://github.com/OvenMediaLabs/OvenMediaEngine) - ストリーミングサーバー。原文では遅延が1秒未満と紹介されています。 ([デモ](https://demo.ovenplayer.com)) `AGPL-3.0` `C++/Docker`
- [Owncast](https://owncast.online/) - 一人の配信者が運用する、分散型ライブ動画配信・チャットサーバー。大手サービスに似た形式で、自分のライブ配信を運営できます。 ([ソースコード](https://github.com/owncast/owncast)) `MIT` `Go`
- [PeerTube](https://joinpeertube.org/en/) - ブラウザ内にP2P（BitTorrent）を使用した分散型ビデオストリーミングプラットフォーム。 ([ソースコード](https://github.com/Chocobozzz/PeerTube)) `AGPL-3.0` `Nodejs`
- [Rapidbay](https://github.com/hauxir/rapidbay/) - ブラウザー、Chromecast、AppleTV、スマートテレビでtorrentの動画を検索・再生できる、動画ストリーミングサービス・torrentクライアントです。 `MIT` `Python/Docker`
- [Restreamer](https://datarhei.github.io/restreamer/) - ストリーミングプロバイダーなしで、ウェブサイト上でH.264のリアルタイムビデオストリーミングを提供できます。 ([ソースコード](https://github.com/datarhei/restreamer)) `Apache-2.0` `Nodejs/Docker`
- [SRS](https://ossrs.io/) - シンプルで高効率かつリアルタイムなビデオサーバー。RTMP、WebRTC、HLS、HTTP-FLV、SRTをサポート。 ([ソースコード](https://github.com/ossrs/srs)) `MIT` `Docker/C++`
- [SyncTube](https://github.com/RblSb/SyncTube) - 軽量で簡単なセットアップが可能なCyTubeの代替品。友達とビデオを視聴し、チャットできます。 `MIT` `Nodejs/Haxe`
- [Tiramisu](https://github.com/MrRobotoGit/tiramisu) - FUSE仮想ファイルシステムを備えたBitTorrentエンジン（Real-Debridの代替）。原文ではダウンロードせずにPlex・Jellyfinへtorrentをストリーミングすると紹介されています。 `GPL-2.0` `Go/Docker`
- [Tube Archivist](https://tubearchivist.com/) `外部プロプライエタリサービス依存` - メタデータの索引と使いやすい画面で、YouTubeのコレクションを整理・検索・視聴するツール。チャンネル購読、ダウンロード、視聴済みコンテンツの追跡に対応します。 ([ソースコード](https://github.com/tubearchivist/tubearchivist), [クライアント](https://docs.tubearchivist.com/faq/#how-do-i-import-my-videos-to-emby-plex-jellyfin-kodi)) `GPL-3.0` `Docker`
- [Tube](https://git.mills.io/prologic/tube) - Goで書かれたYouTube風の動画共有アプリ。MP4 H.265 AACへの自動変換、複数のコレクション、RSSフィードに対応します。原文では検閲や不要な機能がないと紹介されています。 ([デモ](https://tube.mills.io)) `MIT` `Go`
- [VideoLAN Client (VLC)](https://www.videolan.org/) - マルチプラットフォーム対応のマルチメディアプレイヤークライアントおよびサーバー。ほとんどのマルチメディアファイル、DVD、オーディオCD、VCD、およびさまざまなストリーミングプロトコルをサポート。 ([ソースコード](https://code.videolan.org/videolan/vlc)) `GPL-2.0` `C/deb`

### その他 <a id="miscellaneous"></a>

別のセクションに該当しないソフトウェア

- [2FAuth](https://github.com/Bubka/2FAuth) - 2要素認証（2FA）アカウントの管理とセキュリティコードの生成。 ([デモ](https://demo.2fauth.app/)) `AGPL-3.0` `PHP/Docker`
- [Anchr](https://anchr.io) - インターネット上の小さなタスクに使えるツールボックス。ブックマークコレクション、URL短縮、（暗号化された）画像アップロードを含む。 ([ソースコード](https://github.com/muety/anchr)) `GPL-3.0` `Nodejs`
- [Anubis](https://anubis.techaro.lol/) - Web AIファイアウォールツール。スクレイピングボットが上流リソースを侵害しないように保護。 ([ソースコード](https://github.com/TecharoHQ/anubis)) `MIT` `Docker/deb/Go`
- [asciinema](https://asciinema.org/) - アスキーキャストをホストするWebアプリ。 ([デモ](https://asciinema.org/explore), [ソースコード](https://github.com/asciinema/asciinema-server)) `Apache-2.0` `Elixir/Docker`
- [Baby Buddy](https://github.com/babybuddy/babybuddy) - 赤ちゃんの睡眠、授乳、おむつ交換、うつ伏せにして過ごす時間を養育者が記録するためのツールです。 ([デモ](https://github.com/babybuddy/babybuddy#-demo)) `BSD-2-Clause` `Python`
- [ClipCascade](https://github.com/Sathvik-Rao/ClipCascade) - ボタンを押さずに複数端末のクリップボードを同期するツール。Windows、macOS、Linux、Androidに対応し、エンドツーエンド暗号化でデータを共有します。原文では瞬時かつ安全に同期すると紹介されています。 `GPL-3.0` `Java/Docker`
- [Cloudlog](https://magicbug.co.uk/cloudlog/) - アマチュア無線の交信を記録するツール。原文ではどこからでも記録できると紹介されています。 ([ソースコード](https://github.com/magicbug/cloudlog)) `MIT` `PHP/Docker`
- [ConvertX](https://github.com/C4illin/ConvertX) - オンラインのファイル変換ツール。固定原文では1,000を超える形式に対応すると紹介されています。 `AGPL-3.0` `Docker`
- [CUPS](https://www.cups.org/) - Common Unix Print System。Internet Printing Protocol（IPP）を使い、ローカル・ネットワークプリンターへの印刷に対応します。 ([ソースコード](https://github.com/OpenPrinting/cups)) `GPL-2.0` `C`
- [CyberChef](https://github.com/gchq/CyberChef) - ウェブブラウザ内でAES、DESおよびBlowfish暗号化・復号、ヘキサダンプの作成、ハッシュ値の計算など、さまざまな操作を実行できます。([デモ](https://gchq.github.io/CyberChef)) `Apache-2.0` `Javascript`
- [Digiboard](https://digiboard.app/) - 共同作業用のホワイトボードを作成します（フランス語のドキュメントあり）。([ソースコード](https://codeberg.org/ladigitale/digiboard)) `AGPL-3.0` `Nodejs`
- [Digicard](https://codeberg.org/ladigitale/digicard) - シンプルな図案の組み合わせを作成します（フランス語のドキュメントあり）。([デモ](https://ladigitale.dev/digicard/)) `AGPL-3.0` `Nodejs`
- [Digicut](https://ladigitale.dev/digicut/) - FFMPEG.wasmを使い、音声・動画ファイルを切り出します（フランス語のドキュメントあり）。([ソースコード](https://codeberg.org/ladigitale/digicut)) `AGPL-3.0` `Nodejs`
- [Digiface](https://ladigitale.dev/digiface/) - Avataaarsライブラリを使い、アバターを作成します（フランス語のドキュメントあり）。([デモ](https://ladigitale.dev/digiface/), [ソースコード](https://codeberg.org/ladigitale/digiface)) `AGPL-3.0` `Nodejs`
- [Digiflashcards](https://ladigitale.dev/digiflashcards/) - フラッシュカードを作成するオンラインアプリです（フランス語のドキュメントあり）。([ソースコード](https://codeberg.org/ladigitale/digiflashcards)) `AGPL-3.0` `Nodejs/PHP`
- [Digimerge](https://ladigitale.dev/digimerge/) - ブラウザー内で音声・動画ファイルを直接連結します（フランス語のドキュメントあり）。([デモ](https://ladigitale.dev/digimerge/), [ソースコード](https://codeberg.org/ladigitale/Digimerge)) `AGPL-3.0` `Nodejs`
- [Digiquiz](https://ladigitale.dev/digiquiz/) - H5Pで作成したコンテンツを公開するオンラインアプリです（フランス語のドキュメントあり）。([ソースコード](https://codeberg.org/ladigitale/digiquiz)) `AGPL-3.0` `Nodejs`
- [Digiread](https://ladigitale.dev/digiread/) `外部プロプライエタリサービス依存` - MozillaのReadabilityを使い、Webページや記事の表示を整理します（フランス語のドキュメントあり）。([ソースコード](https://codeberg.org/ladigitale/digiread)) `AGPL-3.0` `Nodejs/PHP`
- [Digisteps](https://ladigitale.dev/digisteps/) - オンラインの学習経路を作成するシンプルなアプリです（フランス語のドキュメントあり）。([ソースコード](https://codeberg.org/ladigitale/digisteps)) `AGPL-3.0` `Nodejs/PHP`
- [Digitranscode](https://ladigitale.dev/digitranscode) - ブラウザー内で音声・動画を直接変換します（フランス語のドキュメントあり）。([デモ](https://ladigitale.dev/digitranscode), [ソースコード](https://codeberg.org/ladigitale/digitranscode)) `AGPL-3.0` `Nodejs`
- [Digiview](https://ladigitale.dev/digiview/) `外部プロプライエタリサービス依存` - 気を散らす要素を抑えた画面でYouTube動画を視聴します（フランス語のドキュメントあり）。([デモ](https://ladigitale.dev/digiview/), [ソースコード](https://codeberg.org/ladigitale/digiview)) `AGPL-3.0` `Nodejs/PHP`
- [Digiwords](https://ladigitale.dev/digiwords/) - ワードクラウドを作成するシンプルなオンラインアプリです（フランス語のドキュメントあり）。([ソースコード](https://codeberg.org/ladigitale/digiwords)) `AGPL-3.0` `Nodejs/PHP`
- [DOCAT](https://github.com/docat-org/docat) - バージョン付きドキュメントをホストするツール。原文ではシンプルでスタイリッシュと紹介されています。`MIT` `Python/Docker`
- [Domain Locker](https://domain-locker.com) - ドメイン名ポートフォリオの管理とトラッキング。（[デモ](https://demo.domain-locker.com), [ソースコード](https://github.com/lissy93/domain-locker)） `MIT` `Deno/Docker`
- [DOMJudge](https://www.domjudge.org/) - ICPC地域大会および世界大会のようなプログラミングコンテストを運営するためのシステム。（[デモ](https://www.domjudge.org/demo), [ソースコード](https://github.com/DOMjudge/domjudge)） `GPL-2.0/BSD-3-Clause/MIT` `PHP`
- [ESMira](https://esmira.kl.ac.at) - 縦断研究（ESM、AA、EMA）を実施するツール。原文ではデータ収集と参加者とのコミュニケーションを完全に匿名で行うと紹介されています。（[デモ](https://demo-esmira.kl.ac.at/#admin,username:demo,password:demodemodemo), [ソースコード](https://github.com/KL-Psychological-Methodology/ESMira)） `AGPL-3.0` `PHP`
- [F-Droid](https://f-droid.org) - F-Droidリポジトリシステムを維持するためのサーバーツール。（[ソースコード](https://gitlab.com/fdroid/fdroidserver)） `AGPL-3.0` `Python/Docker/deb`
- [Flyimg](https://flyimg.io) - 画像のサイズ変更および切り取りを即時に行えます。MozJPEG、WebPまたはPNGを使用してImageMagickで最適化された画像を取得し、効率的なキャッシュシステムを備えています。（[デモ](https://demo.flyimg.io), [ソースコード](https://github.com/flyimg/flyimg)） `MIT` `Docker`
- [Geeftlist](https://codeberg.org/nanawel/geeftlist) - 友人や家族間で贈り物の管理、共有、予約を行う協働プラットフォーム。`GPL-3.0` `Docker`
- [google-webfonts-helper](https://github.com/majodev/google-webfonts-helper) `外部プロプライエタリサービス依存` - Google Fontsを自前でホストするための手軽な方法。eot、ttf、svg、woffおよびwoff2ファイル＋CSSコードのサンプルを提供。 ([デモ](https://gwfh.mranftl.com/fonts)) `MIT` `Nodejs`
- [Habitica](https://habitica.com/) - 目標をロールプレイゲームのように扱う習慣管理アプリ。 ([ソースコード](https://github.com/HabitRPG/habitica)) `GPL-3.0/CC-BY-SA-3.0` `Nodejs/Docker`
- [HortusFox](https://hortusfox.github.io) - 植物愛好家向けの協働型植物管理およびトラッキングシステム。 ([ソースコード](https://github.com/danielbrendel/hortusfox-web)) `MIT` `PHP/Docker`
- [ImgCompress](https://imgcompress.karimzouine.com) - Docker内で完全に動作する画像処理ツール。ローカルAIを用いてクラウドに依存せずに、画像を圧縮・変換・サイズ調整・バッチ処理・背景除去を行う。 ([ソースコード](https://github.com/karimz1/imgcompress)) `GPL-3.0` `Docker`
- [Infisical Community Edition](https://infisical.com/) - シークレット、証明書、特権アクセスを管理するプラットフォームです。 ([ソースコード](https://github.com/Infisical/infisical)) `MIT` `Docker/K8S/deb`
- [iSponsorBlockTV](https://github.com/dmunozv04/iSponsorBlockTV) `外部プロプライエタリサービス依存` - スポンサーをブロック・スキップし、YouTubeでの広告もミュート・スキップ可能。 `GPL-3.0` `Docker/Python`
- [IT-Tools by sharevb](https://github.com/sharevb/it-tools) - 開発者向けの便利なオンラインツールを集めたコレクション（[it-tools](https://github.com/CorentinTh/it-tools)のフォーク）。 ([デモ](https://sharevb-it-tools.vercel.app/)) `GPL-3.0` `Docker`
- [Jelu](https://bayang.github.io/jelu-web) - 読書リストと読書予定リストを管理する書籍トラッカー。 ([ソースコード](https://github.com/bayang/jelu)) `MIT` `Java/Docker`
- [jetlog](https://github.com/pbogre/jetlog) - 個人のフライトを記録・閲覧するツール。 `GPL-2.0` `Docker`
- [Kasm Workspaces](https://kasmweb.com/) - ユーザーにストリーミングして提供するコンテナ化されたアプリとデスクトップ。例：ブラウザ内でUbuntu、あるいはChrome、OpenOffice、Gimp、Filezillaなどの単一アプリ。 ([デモ](https://www.kasmweb.com/#demo), [ソースコード](https://github.com/kasmtech)) `GPL-3.0` `Docker`
- [Koillection](https://koillection.github.io/) - Koillectionは、ユーザーがどんなコレクションも管理できるサービス。 ([ソースコード](https://github.com/benjaminjonard/koillection)) `MIT` `Docker/PHP`
- [LanguageTool](https://languagetool.org/) - 通常のスペルチェッカーで検出できない誤りも見つける校正ツール。固定原文では20を超える言語に対応すると紹介されています。 ([ソースコード](https://github.com/languagetool-org/languagetool), [クライアント](https://languagetool.org/insights/post/product-windows-app/)) `LGPL-2.1` `Java/Docker`
- [Libre Translate](https://libretranslate.com/) - 機械翻訳APIです。 ([ソースコード](https://github.com/LibreTranslate/LibreTranslate)) `AGPL-3.0` `Docker/Python`
- [LubeLogger](https://lubelogger.com) - 車両のメンテナンスと燃費を記録するWebベースのツールです。 ([デモ](https://github.com/hargata/lubelog?tab=readme-ov-file#demo), [ソースコード](https://github.com/hargata/lubelog)) `MIT` `Docker/K8S/C#`
- [Mirumoji](https://svdc1.github.io/mirumoji/docs) - 日本語に集中的に触れて学ぶためのツール群。クリックできる単語単位の字幕、辞書検索、文字起こしの生成を提供します。 ([デモ](https://svdc1.github.io/mirumoji/), [ソースコード](https://github.com/svdC1/mirumoji)) `MIT` `Docker/Python`
- [mosparo](https://mosparo.io/) - 現代的なスパム保護ツール。他のCAPTCHA方式をシンプルで使いやすいスパム保護ソリューションに置き換える。 ([ソースコード](https://github.com/mosparo/mosparo)) `MIT` `PHP`
- [Movary](https://github.com/leepeuker/movary) `外部プロプライエタリサービス依存` - 観た映画をトラッキング・評価できるウェブアプリ。 ([デモ](https://github.com/leepeuker/movary?tab=readme-ov-file#demo)) `MIT` `Docker/PHP`
- [Neko](https://neko.m1k1o.net) - Docker内で動作するウェブブラウザ。WebRTCを使用。 ([ソースコード](https://github.com/m1k1o/neko)) `Apache-2.0` `Docker/Go`
- [OmniTools](https://omnitools.app/) - 日々のタスク（コーディング、画像・動画の操作、PDF、数値計算など）に使える強力なウェブベースツールのコレクション。 ([ソースコード](https://github.com/iib0011/omni-tools)) `MIT` `Docker`
- [Open-Meteo](https://open-meteo.com/) - 各国の主要気象機関からのオープンデータの予報、過去のデータ、気候データを扱う気象API。原文ではすべての主要機関を対象とすると紹介されています。 ([デモ](https://open-meteo.com/en/docs), [ソースコード](https://github.com/open-meteo/open-meteo)) `AGPL-3.0` `Docker`
- [OpenReader](https://openreader.richardr.dev/) - EPUB、PDF、DOCX、MD、TXTを音声で読む文書リーダー。高品質なTTSによるリアルタイム読み上げや、オーディオブックの書き出しに対応します。（[デモ](https://openreader.richardr.dev/)、[ソースコード](https://github.com/richardr1126/openreader)）`MIT` `Docker`
- [OpenZiti](https://openziti.io/) - ゼロトラストのフルメッシュ型オーバーレイネットワーク。2要素認証を標準で備え、原文ではすべての主要なデスクトップ・モバイルOSにクライアントを提供する多機能なものと紹介されています。（[ソースコード](https://github.com/openziti/ziti)）`Apache-2.0` `Go`
- [Operational.co](https://operational.co) - 製品が送るアラートを、リアルタイムに更新するタイムラインで受け取るツール。（[デモ](https://app.operational.co/?signinas=kevin)、[ソースコード](https://github.com/operational-co/operational.co)）`AGPL-3.0` `Nodejs/Docker`
- [penpot](https://penpot.app/) - 異なる分野のメンバーからなるチーム向けの、Webベースのデザイン・プロトタイプ作成プラットフォームです。（[ソースコード](https://github.com/penpot/penpot)）`MPL-2.0` `Docker`
- [POMjs](https://password.oppetmoln.se/) - ランダムパスワード生成器。（[ソースコード](https://github.com/joho1968/POMjs)）`GPL-2.0` `Javascript`
- [Pønskelisten](https://github.com/aunefyren/poenskelisten) - プレゼントやギフトの共有リストを作成し、協力して贈り物を選びます。`GPL-3.0` `Docker/Go`
- [re:Director](https://re-director.github.io/) - シンプルなドメインリダイレクト管理ツール。（[ソースコード](https://github.com/re-Director/re-director)）`Apache-2.0` `Java/Docker`
- [Reactive Resume](https://rxresu.me/) - プライバシーに配慮した、カスタマイズでき、持ち運べるオープンソースの履歴書作成ツール。原文では独自性があり、完全に安全で恒久的に無料と紹介されています。（[デモ](https://rxresu.me/)、[ソースコード](https://github.com/AmruthPillai/Reactive-Resume)）`MIT` `Docker/Nodejs`
- [revealjs](https://revealjs.com) - HTMLを使って美しいプレゼンテーションを簡単に作成できるフレームワーク。（[デモ](https://revealjs.com/)、[ソースコード](https://github.com/hakimel/reveal.js)）`MIT` `Javascript`
- [Revive Adserver](https://www.revive-adserver.com/) - 広告配信システム。以前はOpenX AdserverおよびphpAdsNewと呼ばれていました。（[ソースコード](https://github.com/revive-adserver/revive-adserver)）`GPL-2.0` `PHP`
- [SANE Network Scanning](http://sane-project.org/) - リモートクライアントがローカルホストにある画像取得デバイス（スキャナー）にアクセスできるようにします。（[ソースコード](http://www.sane-project.org/cvs.html)）`GPL-2.0` `C`
- [string.is](https://string.is/) - 開発者向けのオープンソースでプライバシーに配慮したオンライン文字列ツールキット。（[ソースコード](https://github.com/recurser/string-is)）`AGPL-3.0` `Nodejs`
- [Teleport](https://goteleport.com/) - SSH、Kubernetes、Webアプリ、データベース向けの認証局とアクセス管理基盤です。（[ソースコード](https://github.com/gravitational/teleport)）`Apache-2.0` `Go/Docker/K8S`
- [TeslaMate](https://github.com/teslamate-org/teslamate) - テスラ車両向けの強力なデータログソフトウェア。`MIT` `Elixir/Docker`
- [Transmute](https://transmute.sh) - 画像、動画、音声、JSON、Excelなどのファイル変換ツール。固定原文では2,000を超える変換に対応すると紹介されています。（[ソースコード](https://github.com/transmute-app/transmute)）`MIT` `Docker`
- [URL-to-PNG](https://github.com/jasonraimondi/url-to-png) - URLからPNGに変換するユーティリティ。スクリーンショットにはPlaywrightによる並列レンダリング、ストレージキャッシュにはLocal、S3、またはCouchDBを使用します。`MIT` `Nodejs/Docker`
- [Usertour](https://www.usertour.io/) - アプリ内の製品案内、チェックリスト、アンケートを作成するユーザー導入支援プラットフォーム。原文では数分で容易に作成できると紹介されています。（[ソースコード](https://github.com/usertour/usertour/)）`AGPL-3.0` `Docker`
- [Warracker](https://warracker.com) - 保証の有効期限を追跡し、領収書・ファイルをアップロードし、期限前に通知を受け取れる保証管理ツールです。（[ソースコード](https://github.com/sassanix/Warracker)）`AGPL-3.0` `Docker`
- [Wavelog](https://www.wavelog.org) - アマチュア無線向けのWebベースの記録ソフトウェア。交信（QSO）の記録、統計、地図をブラウザーで扱います。（[デモ](https://demo.wavelog.org)、[ソースコード](https://github.com/wavelog/wavelog)）`MIT` `PHP/Docker`
- [WeeWX](https://weewx.com/) - 気象観測ステーション向けのオープンソースソフトウェア。（[デモ](https://weewx.com/showcase.html)、[ソースコード](https://github.com/weewx/weewx)）`GPL-3.0` `Python/deb`
- [WeTTY](https://butlerx.github.io/wetty/#/) - HTTP・HTTPS経由でブラウザー内から使うターミナルです。 ([ソースコード](https://github.com/butlerx/wetty)) `MIT` `Docker/Nodejs`
- [Wishlist](https://github.com/cmintey/wishlist) - 友達や家族と共有できるウィッシュリストアプリ。 `MIT` `Docker/K8S`
- [Yamtrack](https://github.com/FuzzyGrim/Yamtrack) `外部プロプライエタリサービス依存` - 映画、テレビ番組、アニメ、マンガ、ゲーム、本に対するメディアトラッカー。 ([デモ](https://github.com/FuzzyGrim/Yamtrack?tab=readme-ov-file#demo)) `AGPL-3.0` `Docker/Python`
- [Zero-TOTP](https://zero-totp.com) - ゼロ知識暗号でTOTPコードを保存する、ゼロトラストのWebアプリ。原文では多機能で信頼性・安全性が高いと紹介されています。 ([ソースコード](https://github.com/SeaweedbrainCY/zero-totp)) `GPL-3.0` `Docker`

### 資金・予算・財務管理 <a id="money-budgeting--management"></a>

[資金管理](https://en.wikipedia.org/wiki/Money_management)と予算管理のためのソフトウェアです。

関連資料： [在庫管理](#inventory-management), [資源計画](#resource-planning)

- [Actual](https://actualbudget.org) - ゼロサム方式の予算管理を使う、ローカルでの利用を優先する個人向け家計管理ツール。端末間同期、独自ルール、QIF・OFX・QFXファイルからの手動取引データ取り込み、多数の銀行との任意の自動同期に対応します。 ([ソースコード](https://github.com/actualbudget/actual)) `MIT` `Nodejs/Docker`
- [Bigcapital](https://bigcapital.app/) - 中小企業向けの財務会計および在庫管理ソフトウェア。 ([ソースコード](https://github.com/bigcapitalhq/bigcapital)) `AGPL-3.0` `Docker`
- [Bitcart](https://bitcart.ai) - 暗号通貨の決済処理および開発プラットフォーム。 ([デモ](https://admin.bitcart.ai), [ソースコード](https://github.com/bitcart/bitcart)) `MIT` `Docker/Python/Nodejs`
- [BTCPay Server](https://btcpayserver.org/) - ビットコインおよびその他の暗号通貨の決済処理。 ([デモ](https://mainnet.demo.btcpayserver.org/), [ソースコード](https://github.com/btcpayserver/btcpayserver)) `MIT` `C#`
- [Budget Board](https://budgetboard.net/) - 月間支出を追跡し、財務目標に取り組むためのシンプルなアプリ。 ([ソースコード](https://github.com/teelur/budget-board)) `GPL-3.0` `Docker`
- [DePay](https://depay.com) - あなたのウォレットに直接Web3決済を受け入れる。ピアツーピア、無料、セルフホスト、オープンソース。 ([デモ](https://depay.com/products/payments), [ソースコード](https://github.com/depayfi/widgets)) `MIT` `Nodejs`
- [Econumo](https://econumo.com) - 個人および家族の財務を管理する予算アプリで、複数通貨、共通口座、予算をサポート。 ([デモ](https://demo.econumo.com), [ソースコード](https://github.com/econumo/econumo)) `MIT` `Docker`
- [ExpenseOwl](https://github.com/tanq16/expenseowl) - 非常にシンプルな支出トラッカーで、美しいUIを備えています。 `MIT` `Go/Docker/K8S`
- [ezbookkeeping](https://ezbookkeeping.mayswind.net/) - 自分でホストする、軽量な個人用帳簿アプリケーション。 ([デモ](https://ezbookkeeping-demo.mayswind.net/), [ソースコード](https://github.com/mayswind/ezbookkeeping)) `MIT` `Go/Docker`
- [Family Accounting Tool](https://github.com/nymanjens/facto) - パートナー間で部分的に共有される支出を管理するためのウェブベースの財務管理ツール。 `Apache-2.0` `Scala`
- [Fava](https://beancount.github.io/fava/) - テキストベースの複式簿記システムBeancountのWebフロントエンドです。 ([デモ](https://fava.pythonanywhere.com/example-with-budgets/income_statement/), [ソースコード](https://github.com/beancount/fava)) `MIT` `Python`
- [Firefly III](https://firefly-iii.org/) - 資金の追跡と予算予測を支援する、現代的な財務管理ツール。クレジットカード、高度なルールエンジン、多数の銀行からのデータ取り込みに対応します。 ([デモ](https://demo.firefly-iii.org/), [ソースコード](https://github.com/firefly-iii/firefly-iii)) `AGPL-3.0` `PHP/Docker`
- [FOSSBilling](https://fossbilling.org/) - ホスティングと請求自動化。WHM、CWP、cPanelおよびHestiaCPと統合。完全なAPIを提供し、簡単に拡張可能です。 ([デモ](https://fossbilling.org/demo), [ソースコード](https://github.com/FOSSBilling/FOSSBilling)) `Apache-2.0` `PHP/Docker`
- [Galette](https://galette.eu/) - 非営利組織向けのメンバーシップ管理ウェブアプリ。 ([ソースコード](https://github.com/galette/galette)) `GPL-3.0` `PHP`
- [Ghostfolio](https://ghostfol.io/) - 株式、ETF、暗号通貨の管理をサポートする資産管理ソフトウェア。 ([ソースコード](https://github.com/ghostfolio/ghostfolio)) `AGPL-3.0` `Docker/Nodejs`
- [GRR](https://grr.devome.com/?lang=en) - 中小企業向けの資産管理・予約システム。 ([ソースコード](https://github.com/JeromeDevome/GRR)) `GPL-2.0` `PHP`
- [HyperSwitch](https://hyperswitch.io/) `外部プロプライエタリサービス依存` - 単一のAPI連携で複数の決済処理サービスへ接続し、決済を振り分けるツール。原文では高速で信頼性があり、費用を抑えて容易に使えると紹介されています。（[ソースコード](https://github.com/juspay/hyperswitch)） `Apache-2.0` `Docker/Rust`
- [IHateMoney](https://ihatemoney.org/) - 共有支出を簡単に管理できます。（[デモ](https://ihatemoney.org/demo/), [ソースコード](https://github.com/spiral-project/ihatemoney)） `BSD-3-Clause` `Docker/Python`
- [InvoicePlane](https://www.invoiceplane.com/) - 小規模ビジネス向けの見積もり、請求書、支払い、顧客の管理を一括で行えます。（[ソースコード](https://github.com/InvoicePlane/InvoicePlane)） `MIT` `PHP`
- [InvoiceShelf](https://invoiceshelf.com/) - 支出や支払いを追跡し、プロフェッショナルな請求書や見積もりを作成（Craterのフォーク）。（[ソースコード](https://github.com/InvoiceShelf/InvoiceShelf)） `AGPL-3.0` `PHP/Docker`
- [Kill Bill](https://killbill.io/) - サブスクリプションの請求と支払いプラットフォーム。リアルタイムの分析と財務レポートにアクセスできます。（[ソースコード](https://github.com/killbill/killbill)） `Apache-2.0` `Java/Docker`
- [Kresus](https://kresus.org/) - 個人の財務管理アプリ。（[デモ](https://kresus.org/en/demo.html), [ソースコード](https://github.com/kresusapp/kresus)） `AGPL-3.0` `Nodejs/Docker`
- [Lago](https://www.getlago.com/) - 使用量の計測と従量課金を行います。（[ソースコード](https://github.com/getlago/lago)） `AGPL-3.0` `Docker`
- [monetr](https://monetr.app/) - 繰り返し支出の計画に特化した予算管理アプリ。（[ソースコード](https://github.com/monetr/monetr)） `FSL-1.1-MIT` `Docker/K8S`
- [Mybucks.online](https://mybucks.online) - ブラウザー内で使う、パスワードだけを用いる自己管理型の暗号資産ウォレット。原文では安全と紹介されています。（[デモ](https://app.mybucks.online), [ソースコード](https://github.com/mybucks-online/app)） `MIT` `Nodejs`
- [MyFin Budget](https://myfinbudget.com) - 個人の財務プラットフォーム（Web + REST API + Android）で、予算管理、収入・支出の記録、そして将来の財務予測をサポートします。（[デモ](https://github.com/afaneca/myfin?tab=readme-ov-file#demo-account---try-it-for-yourself), [ソースコード](https://github.com/afaneca/myfin), [クライアント](https://github.com/afaneca/myfin-api)） `GPL-3.0` `Nodejs/Docker`
- [OctoBot](https://www.octobot.cloud/) - 暗号資産取引ボット。（[ソースコード](https://github.com/Drakkar-Software/OctoBot)） `GPL-3.0` `Python/Docker`
- [Ocular](https://simonwep.github.io/ocular/) - 月や年をまたいで予算を追跡するためのシンプルで直感的な予算管理アプリ。（[デモ](https://simonwep.github.io/ocular/demo/#demo), [ソースコード](https://github.com/simonwep/ocular)） `MIT` `Docker`
- [OpenBudgeteer](https://github.com/TheAxelander/OpenBudgeteer) - バケット予算原理に基づいた予算管理アプリ。`AGPL-3.0` `Docker/C#`
- [Receipt Wrangler](https://receiptwrangler.io) `外部プロプライエタリサービス依存` - AIを活用した使いやすい領収書管理アプリ。ユーザーが領収書を簡単に作成し、分類なども可能にします。（[デモ](https://demo.receiptwrangler.io), [ソースコード](https://github.com/Receipt-Wrangler/receipt-wrangler)） `AGPL-3.0` `Docker`
- [REI3](https://rei3.de/home_en/) - ビジネス内でタスク、時間、資産などを管理できます。（[デモ](https://rei3.de/demo_en/), [ソースコード](https://github.com/r3-team/r3)） `MIT` `Go`
- [SHKeeper](https://shkeeper.io/) - 決済ゲートウェイと加盟店向けの機能を組み合わせた暗号資産決済処理ツール。原文では手数料や仲介者を介さず、複数の暗号資産による支払いを受け付けられると紹介されています。（[デモ](https://github.com/vsys-host/shkeeper.io?tab=readme-ov-file#11-demo), [ソースコード](https://github.com/vsys-host/shkeeper.io)） `GPL-3.0` `Python`
- [SolidInvoice](https://solidinvoice.co) - オープンソースの請求書および見積もりアプリ。（[ソースコード](https://github.com/SolidInvoice/SolidInvoice)） `MIT` `PHP`
- [Sure](https://github.com/we-promise/sure) - 誰でも使える個人財務アプリ（Maybeのフォーク）。（`AGPL-3.0`） `Docker`
- [VoucherVault](https://github.com/l4rm4nd/VoucherVault) - 引換券、クーポン、会員カード、ギフトカードをデジタルで保存・管理するツール。有効期限の通知、取引履歴、ファイルのアップロード、OIDCによるSSOを備えています。 `GPL-3.0` `Docker`
- [Wallos](https://wallosapp.com) - 軽量な個人サブスクリプショントラッカー。統計情報とオプションの通知を提供。（[デモ](https://github.com/ellite/wallos?tab=readme-ov-file#demo), [ソースコード](https://github.com/ellite/wallos)） `GPL-3.0` `PHP/Docker`
- [WYGIWYH](https://github.com/eitchtee/WYGIWYH) - シンプルで強力な財務トラッカー。 ([デモ](https://wygiwyh-demo.herculino.com/)) `AGPL-3.0` `Docker/Python`
- [YAFFA](https://www.yaffa.cc) - 個人向け財務ウェブアプリケーションで、お金、支出、予算、投資を追跡できます。長期的な財務計画にも役立ちます。 ([デモ](https://sandbox.yaffa.cc), [ソースコード](https://github.com/kantorge/yaffa)) `MIT` `PHP`

### 監視と稼働状況ページ <a id="monitoring--status-pages"></a>

システム、ネットワーク、アプリケーション、Webサイトを[監視](https://en.wikipedia.org/wiki/Monitoring#Computing)するソフトウェアです。

関連資料： [awesome-sysadmin/Monitoring](https://github.com/awesome-foss/awesome-sysadmin#monitoring--status-pages), [awesome-sysadmin/Metrics and Metric Collection](https://github.com/awesome-foss/awesome-sysadmin#metrics--metric-collection)

関連資料： [個人用ダッシュボード](#personal-dashboards)

### ネットワークユーティリティ <a id="network-utilities"></a>

コンピューターネットワークの管理、監視、問題の調査・解決を助けるツールやソフトウェアです。

関連資料： [awesome-sysadmin/Monitoring](https://github.com/awesome-foss/awesome-sysadmin#monitoring)

- [beelzebub](https://beelzebub-honeypot.com/) `外部プロプライエタリサービス依存` - サイバー攻撃の検出・分析向けハニーポットのフレームワーク。原文では高い安全性を備えた環境を提供するよう設計されていると紹介されています。 ([ソースコード](https://github.com/beelzebub-labs/beelzebub)) `MIT` `Docker/K8S/Go`
- [Canary Tokens](https://canarytokens.org) - 不正アクセスを検出するための、カナリアトークンと呼ばれる軽量で埋め込み可能なハニーポットのトリガーを生成します。 ([ソースコード](https://github.com/thinkst/opencanary)) `BSD-3-Clause` `Docker/Python`
- [MyIP](https://ipcheck.ing) `外部プロプライエタリサービス依存` - IPアドレス、IPの位置情報、DNSリーク、WebRTC接続、速度、ping、MTR、Webサイトの稼働状態などを確認するIP関連の多機能ツール群です。 ([デモ](https://ipcheck.ing), [ソースコード](https://github.com/jason5ng32/MyIP)) `MIT` `Nodejs/Docker`
- [MySpeed](https://myspeed.dev/) - インターネット速度を30日間まで表示するスピードテスト分析ソフトウェア。 ([ソースコード](https://github.com/gnmyt/myspeed)) `MIT` `Docker/Nodejs`
- [NetAlertX](https://netalertx.com/) - ネットワーク内の機器の接続状況や侵入者を検出するツール。接続機器を走査し、新規の未知の機器を見つけると通知します。 ([ソースコード](https://github.com/netalertx/NetAlertX)) `GPL-3.0` `Docker`
- [PlugNPiN](https://deepspace2.github.io/PlugNPiN) - 特定のラベルを持つコンテナを自動的にスクレイピングし、Pi-Hole/AdGuard HomeにローカルDNS/CNAMEエントリ、Nginx Proxy Managerにプロキシホストを作成します。 ([ソースコード](https://github.com/deepspace2/plugnpin)) `GPL-3.0` `Docker`
- [Speed Test by OpenSpeedTest™](https://openspeedtest.com/) - 無料かつオープンソースのHTML5ネットワークパフォーマンス推定ツール。 ([ソースコード](https://github.com/openspeedtest/Speed-Test)) `MIT` `Docker`
- [Speedtest Tracker](https://docs.speedtest-tracker.dev/) - インターネット接続のパフォーマンスと稼働状態をモニタリングします。 ([ソースコード](https://github.com/alexjustesen/speedtest-tracker)) `MIT` `Docker/K8S`
- [Upsnap](https://github.com/seriousm4x/UpSnap) - ネットワーク上の機器を起動し、状態を確認する、シンプルなWake on LAN（WOL）ダッシュボード。 `MIT` `Go/Docker`
- [Wakupator](https://github.com/Gibus21250/Wakupator) - ネットワーク通信に応じて機器を管理する、Wake on LAN用ツール。 `MIT` `C`
- [WatchYourLAN](https://github.com/aceberg/WatchYourLAN) - 軽量なネットワークIPスキャナーで、通知、履歴、Grafanaへのエクスポートが可能です。 `MIT` `Docker/Go/deb`
- [whois](https://github.com/KincaidYang/whois) - ドメイン、IPアドレス、CIDRプレフィックス、ASNsに対するWHOIS/RDAPクエリAPI。統一JSON出力、キャッシュ、APIキー認証、バッチクエリ、AIアシスタント向けMCPサポートを備えています。 ([デモ](https://whois.ddnsip.cn/example.com)) `MIT` `Go/Docker`

### ノートとエディター <a id="note-taking--editors"></a>

[ノート作成](https://en.wikipedia.org/wiki/Note-taking)用のエディターです。

関連資料： [Wiki](#wikis)

- [Blinko](https://blinko.space/) - AI機能を備えた個人用ノートツール。 ([ソースコード](https://github.com/blinkospace/blinko)) `AGPL-3.0` `Docker`
- [DailyTxT](https://github.com/PhiTux/DailyTxT) - 個人の記憶を保存できる暗号化された日記ウェブアプリ。検索機能と暗号化されたファイルアップロードを備えています。 ([デモ](https://dailytxt.phitux.de)) `MIT` `Docker`
- [Docs](https://docs.numerique.gouv.fr/) - 共同でノート、Wiki、文書を作成する、規模を拡張できるプラットフォーム。 ([ソースコード](https://github.com/suitenumerique/docs)) `MIT` `K8S`
- [draw.io](https://draw.io) - フローチャート、プロセス図、組織図、UML、ER図、ネットワーク図を作成する図表作成ソフトウェア。 ([ソースコード](https://github.com/jgraph/drawio)) `Apache-2.0` `Javascript/Docker`
- [flatnotes](https://github.com/dullage/flatnotes) - データベースを使わず、Markdownファイルを単一階層のフォルダーに保存するノート作成Webアプリです。 ([デモ](https://demo.flatnotes.io)) `MIT` `Docker`
- [HedgeDoc](https://hedgedoc.org/) - リアルタイムで共同編集するMarkdownノート（旧名CodiMD、HackMD CE）。原文ではすべてのプラットフォームに対応すると紹介されています。 ([デモ](https://demo.hedgedoc.org/), [ソースコード](https://github.com/hedgedoc/hedgedoc)) `AGPL-3.0` `Docker/Nodejs`
- [Joplin](https://joplinapp.org/) - Markdown編集と暗号化に対応する、モバイル・デスクトップ向けノートアプリ。クライアント側で動作し、自分でホストするNextcloudなどを介して同期します（Evernoteの代替）。（[ソースコード](https://github.com/laurent22/joplin)） `MIT` `Nodejs`
- [Jotty](https://jotty.page) - 個人用のファイルベースのノートやチェックリストを管理するための軽量かつ強力な代替アプリ。（[ソースコード](https://github.com/fccview/jotty)） `AGPL-3.0` `Docker`
- [Livebook](https://livebook.dev) - Markdownを使う、リアルタイムで共同編集するノートブックアプリ。Elixirのコード片の実行、TeX、Mermaidの図に対応し、DockerまたはElixirでデプロイできます。（[ソースコード](https://github.com/livebook-dev/livebook)） `Apache-2.0` `Elixir/Docker`
- [Many Notes](https://github.com/brufdev/many-notes) - シンプルさを重視したマークダウンベースのウェブノートアプリ。（`MIT`） `Docker`
- [Memos](https://usememos.com/) - SQLiteデータベースファイルを使用した知識ベース。（[デモ](https://demo.usememos.com/explore), [ソースコード](https://github.com/usememos/memos)） `MIT` `Docker/Go`
- [Note Mark](https://notemark.docs.enchantedcode.co.uk/) - 最小限のウェブベースのマークダウンノートアプリ。（[ソースコード](https://github.com/enchant97/note-mark)） `AGPL-3.0` `Docker`
- [Overleaf](https://www.overleaf.com/) - ウェブベースのコラボレーションLaTeXエディタ。（[ソースコード](https://github.com/overleaf/overleaf)） `AGPL-3.0` `Ruby`
- [Plainpad](https://alextselegidis.com/get/plainpad/) - クラウド向けの現代的なノートアプリで、プログレッシブウェブアプリ技術の最良の機能を活用。（[デモ](https://alextselegidis.com/try/plainpad/), [ソースコード](https://github.com/alextselegidis/plainpad)） `GPL-3.0` `PHP`
- [plumio](https://plumio.app/) - ライブプレビュー、文書暗号化、複数ユーザー、複数組織などに対応するMarkdownノートアプリ。（[デモ](https://demo.plumio.app/homepage), [ソースコード](https://github.com/albertasaftei/plumio)） `AGPL-3.0` `Nodejs/Docker`
- [SilverBullet](https://silverbullet.md/) - ハッカー志向のユーザー向けに最適化されたノートアプリ。（[デモ](https://play.silverbullet.md/), [ソースコード](https://github.com/silverbulletmd/silverbullet), [クライアント](https://silverbullet.md/Libraries)） `MIT` `Docker/Deno`
- [Standard Notes](https://docs.standardnotes.com/self-hosting/getting-started) - プライバシーを守りながら作業を進める、シンプルで私的なノートアプリ。（[デモ](https://app.standardnotes.com/), [ソースコード](https://github.com/standardnotes/app)） `GPL-3.0` `Ruby`
- [TriliumNext Notes](https://github.com/TriliumNext/Trilium) - 大規模な個人用知識ベースの構築を重視する、複数プラットフォーム対応の階層型ノートアプリ（Trilium Notesのフォーク）です。 `AGPL-3.0` `Nodejs/Docker/K8S`
- [Turtl](https://turtl.it/) - 個人用データベース・ノートアプリ。原文では完全にプライベートなものと紹介されています。（[ソースコード](https://github.com/turtl)） `GPL-3.0` `CommonLisp`
- [Writing](https://josephernest.github.io/writing/) - ブラウザーで使う、気を散らす要素を抑えた軽量テキストエディター。MarkdownとLaTeXに対応し、原文では入力の遅延がないと紹介されています。（[ソースコード](https://github.com/josephernest/writing)） `MIT` `Javascript`

### オフィススイート <a id="office-suites"></a>

[オフィススイート](https://en.wikipedia.org/wiki/List_of_office_suites)は、生産性向上のためのソフトウェアの集合です。通常、少なくともワープロ、表計算、プレゼンテーション用のプログラムを含みます。

- [Collabora Online Development Edition](https://www.collaboraoffice.com/code) - 自分のインフラに統合できる、LibreOfficeを基盤とするオンラインオフィス。原文では多機能で、文書、表計算、プレゼンテーションのすべての主要形式に対応すると紹介されています。（[ソースコード](https://cgit.freedesktop.org/libreoffice/online/)） `MPL-2.0` `C++`
- [CryptPad](https://cryptpad.org) - 文書の変更をリアルタイムで同期する、共同作業用ソフトウェア群。（[ソースコード](https://github.com/cryptpad/cryptpad)） `AGPL-3.0` `Nodejs/Docker`
- [Digislides](https://ladigitale.dev/digislides/) - マルチメディアのプレゼンテーションを素早く簡単に作成するツール（ドキュメントはフランス語）。（[デモ](https://ladigitale.dev/digislides/), [ソースコード](https://codeberg.org/ladigitale/Digislides)） `AGPL-3.0` `Nodejs/PHP`
- [Etherpad](https://etherpad.org/) - 高度にカスタマイズ可能なオンラインエディタで、リアルタイムでの協働編集を提供。（[デモ](https://demo.sandstorm.io/appdemo/h37dm17aa89yrd8zuqpdn36p6zntumtv08fjpu8a8zrte7q1cn60), [ソースコード](https://github.com/ether/etherpad)） `Apache-2.0` `Nodejs/Docker`
- [Grist](https://getgrist.com/) - リレーショナルな構造、数式によるアクセス制御、持ち運べる自己完結した形式を備える表計算ツール（Airtableの代替）。原文では次世代のものと紹介されています。（[デモ](https://docs.getgrist.com), [ソースコード](https://github.com/gristlabs/grist-core)） `Apache-2.0` `Nodejs/Python/Docker`
- [ONLYOFFICE](https://helpcenter.onlyoffice.com/faq/server-opensource.aspx) - ドキュメント、プロジェクト、チーム、顧客関係をすべて1か所で管理できるオフィスツール。（[ソースコード](https://github.com/ONLYOFFICE/DocumentServer)） `AGPL-3.0` `Nodejs/Docker`

### パスワード管理 <a id="password-managers"></a>

[パスワード管理ツール](https://en.wikipedia.org/wiki/Password_manager)は、ローカルアプリケーションやオンラインサービスのパスワードを保存・生成・管理するために使います。

- [AliasVault](https://www.aliasvault.net) - メールエイリアスの生成機能とサーバーを内蔵した、エンドツーエンド暗号化を使うパスワード管理ツールです。([ソースコード](https://github.com/aliasvault/aliasvault)) `MIT` `Docker`
- [Bitwarden](https://bitwarden.com/) `外部プロプライエタリサービス依存` - Webアプリ、ブラウザー拡張、モバイルアプリを備えたパスワード管理ツールです。([ソースコード](https://github.com/bitwarden/server)) `AGPL-3.0` `Docker/C#`
- [Passbolt](https://www.passbolt.com/) - 協働型パスワードマネージャー。([ソースコード](https://github.com/passbolt/passbolt_api)) `AGPL-3.0` `PHP/deb/K8S/Docker`
- [PassIt](https://passit.io/) - グループおよびユーザーによる共有機能を備えたシンプルなパスワードマネージャーだが、管理インターフェースは存在しない。([デモ](https://app.passit.io/), [ソースコード](https://gitlab.com/passit)) `AGPL-3.0` `Docker/Python`
- [Psono](https://psono.com/) - 企業向けのパスワードマネージャー。([デモ](https://www.psono.pw), [ソースコード](https://gitlab.com/esaqa/psono/psono-fileserver)) `Apache-2.0` `Python`
- [Teampass](https://teampass.net/) - 共同でパスワードを管理するツール。共有・チーム用の全パスワードを単一の対称鍵で暗号化し、その鍵をサーバー側のファイルとデータベースに保存すると固定原文で説明されています。原文ではApache、MySQL、PHPを備えた任意のサーバーで動作すると紹介されています。 ([ソースコード](https://github.com/nilsteampassnet/TeamPass)) `GPL-3.0` `PHP`
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Rustで書かれた軽量なBitwardenサーバーAPI実装。`GPL-3.0` `Rust/Docker`

### コード・テキスト共有 <a id="pastebins"></a>

[コード・テキスト共有サービス](https://en.wikipedia.org/wiki/Pastebin)は、コードや文章を共有・保存するためのオンラインコンテンツホスティングサービスです。

- [1time](https://1time.io) - パスワード、APIキー、ファイル用の1回限りのリンクを作成する、ゼロ知識型の秘密情報共有ツール。ブラウザー内で暗号化され、平文をサーバーへ送らず、許容閲覧回数（既定は1回）の後に自己削除すると原文で説明されています。([デモ](https://1time.io), [ソースコード](https://github.com/shingrus/1time.io)) `MIT` `Docker`
- [BinPastes](https://github.com/querwurzel/BinPastes) - クライアント側暗号化、全文検索、1回限りのメッセージに対応する、最小限の構成を持つコード・テキスト共有ツール。1人から数人で簡単に導入したい場合を想定しています。`Apache-2.0` `Java`
- [ByteStash](https://github.com/jordan-dalby/ByteStash) - シンプルなウェブインターフェースを備えたpastebinおよびファイルストレージサービス。シンタックスハイライト、オプションのユーザー認証、公開共有をサポート。([デモ](https://github.com/jordan-dalby/ByteStash?tab=readme-ov-file#demo)) `GPL-3.0` `Docker`
- [Chiyogami](https://github.com/rhee876527/chiyogami) - API、クライアント側の暗号化、ユーザーアカウント、構文強調、Markdown表示などを備えたpastebinです。([デモ](https://chiyogami.myaddr.dev/)) `BSD-3-Clause` `Docker`
- [dpaste](https://dpaste.org/) - テキストやコード向けのオプションを備える、シンプルなコード・テキスト共有ツール。短く覚えやすいURLを返します。([ソースコード](https://github.com/DarrenOfficial/dpaste)) `MIT` `Docker/Python`
- [Hemmelig](https://hemmelig.app) - 異なる組織間または個人間で暗号化された秘密を共有できる。([ソースコード](https://github.com/HemmeligOrg/Hemmelig.app)) `MIT` `Docker/Nodejs`
- [lesma](https://lesma.eu) - ブラウザーとコマンドラインから使いやすい、シンプルなテキスト共有アプリケーション。([デモ](https://lesma.eu), [ソースコード](https://gitlab.com/ogarcia/lesma)) `GPL-3.0` `Rust/Docker`
- [Local Content Share](https://github.com/Tanq16/local-content-share) - ローカルネットワーク内でテキストスニペットやファイルを保存・共有できる。(`MIT` `Docker/Go`)
- [not-th.re](https://not-th.re) - クライアント側暗号化と、ブラウザー内のコードエディターMonacoを備えた、シンプルなテキスト共有プラットフォームです。([デモ](https://not-th.re), [ソースコード](https://github.com/not-three/main)) `AGPL-3.0` `Nodejs/Docker`
- [Opengist](https://opengist.io) - Gitを活用したpastebin。([デモ](https://demo.opengist.io), [ソースコード](https://github.com/thomiceli/opengist)) `AGPL-3.0` `Docker/Go/Nodejs`
- [paaster](https://paaster.io) - シンプルさを目指す、エンドツーエンド暗号化を使うpastebinです。([ソースコード](https://github.com/WardPearce/paaster)) `AGPL-3.0` `Docker`
- [pacebin](https://git.crueter.xyz/crueter/pacebin) - 極めてシンプルなpastebinおよびファイルアップロードサービス。実行ファイルサイズが小さく、移植性と設定の容易さに焦点を当てている。([デモ](https://paste.crueter.xyz)) `AGPL-3.0` `C`
- [Password Pusher](https://pwpush.com) - ウェブ上でパスワード（またはテキスト）を安全に共有するための、極めてシンプルなアプリ。パスワードは一定の閲覧回数および/または時間経過後に自動的に期限切れになる。([ソースコード](https://github.com/pglombardo/PasswordPusher)) `Apache-2.0` `Docker/K8S/Ruby`
- [Pastefy](https://pastefy.app/) - 美しい、シンプルで展開しやすいPastebin。オプションのクライアント暗号化、マルチタブペースト、API、ハイライトされたエディタなどがあります。([ソースコード](https://github.com/interaapps/pastefy), [クライアント](https://github.com/topics/pastefy-addon)) `MIT` `Docker/K8S/Java`
- [PrivateBin](https://privatebin.info/) - サーバーが保存データの内容を知ることができない、最小限の構成を持つテキスト共有・掲示板ツール。([デモ](https://privatebin.net/), [ソースコード](https://github.com/PrivateBin/PrivateBin)) `Zlib` `PHP`
- [rustypaste](https://github.com/orhun/rustypaste) - 最小限のファイルアップロード／Pastebinサービス。`MIT` `Rust`
- [Snipo](https://github.com/MohamedElashri/snipo) - 軽量で、セルフホストされたスニペットマネージャー。コードやテキストスニペットをフォルダやタグで保存・整理し、APIおよびGitHub Gistの同期もサポート。([デモ](https://snipo.melashri.dev/)) `AGPL-3.0` `Go/Docker`
- [SnyPy](https://snypy.com) - オープンソースのオンプレミスコードスニペットマネージャー。([デモ](https://app.snypy.com), [ソースコード](https://github.com/snypy)) `MIT` `Docker`
- [Sup3rS3cretMes5age](https://github.com/algolia/sup3rS3cretMes5age) - Hashicorp Vaultを秘密情報の保存先として使う、導入も利用も簡単な秘密メッセージ共有サービス。 `MIT` `Go`
- [Wastebin](https://github.com/matze/wastebin) - 軽量で、最小限で、高速なPastebin。SQLiteバックエンドを採用。([デモ](https://bin.bloerg.net)) `MIT` `Rust/Docker`
- [Yopass](https://github.com/jhaals/yopass) - シークレット、パスワード、ファイルの安全な共有。([デモ](https://yopass.se/)) `Apache-2.0` `Go/Docker`

### 個人用ダッシュボード <a id="personal-dashboards"></a>

情報およびアプリケーションにアクセスするためのダッシュボード。

関連資料： [監視と稼働状況ページ](#monitoring--status-pages), [ブックマークとリンク共有](#bookmarks-and-link-sharing)

- [Dashy](https://dashy.to/) - 自宅のサーバー環境（ホームラボ）向けの多機能なホームページ。YAMLで簡単に設定できます。([デモ](https://demo.dashy.to/), [ソースコード](https://github.com/lissy93/dashy)) `MIT` `Nodejs/Docker`
- [Glance](https://github.com/glanceapp/glance) - 高度にカスタマイズ可能なダッシュボードで、すべてのフィードを一つの場所に集約。(`AGPL-3.0`) `Docker/Go`
- [gobookmarks](https://github.com/arran4/gobookmarks) - GitHub、GitLabまたはローカルGitに保存されたブックマークを表示するページ。(`AGPL-3.0`) `Go/Docker`
- [Heimdall](https://heimdall.site/) - すべてのウェブアプリケーションを整理するための洗練されたソリューション。([ソースコード](https://github.com/linuxserver/Heimdall)) `MIT` `PHP`
- [Homarr](https://homarr.dev) - 各種連携機能とWebベースの設定を備えたダッシュボード。原文では洗練されたものと紹介されています。([ソースコード](https://github.com/homarr-labs/homarr)) `MIT` `Docker/Nodejs`
- [Homepage by gethomepage](https://github.com/gethomepage/homepage) - 高度にカスタマイズ可能なホームページ（またはスタートページ／アプリケーションダッシュボード）にDockerおよびサービスAPI統合を備えている。(`GPL-3.0`) `Docker/Nodejs`
- [Homepage by tomershvueli](https://github.com/tomershvueli/homepage) - シンプルで、スタンドアローン、セルフホストされたPHPページ。あなたのサーバーとウェブへの窓です。(`MIT`) `PHP`
- [Homer](https://github.com/bastienwirtz/homer) - サーバーの各サービスへの入口を提供する、シンプルな静的ホームページ。簡単なYAML設定と接続確認を備えています。([デモ](https://homer-demo.netlify.app)) `Apache-2.0` `Docker/K8S/Nodejs`
- [Hubleys](https://github.com/knrdl/hubleys-dashboard) - 複数ユーザー向けのリンクを中央のYAML設定で管理する個人用ダッシュボード。(`MIT`) `Docker`
- [LinkStack](https://linkstack.org/) - ソーシャルメディアプラットフォームを簡単に1ページにリンクし、直感的で使いやすいユーザー／管理者インターフェースでカスタマイズ可能（LinktreeやManylinkの代替）。([デモ](https://linksta.cc/), [ソースコード](https://github.com/LinkStackOrg/LinkStack)) `AGPL-3.0` `PHP/Docker`
- [LittleLink](https://littlelink.io/) - プロフィール欄のリンク集を作るシンプルなツール（Linktreeの代替）。固定原文では100以上のブランド別ボタンを備えると紹介されています。([デモ](https://littlelink.io/), [ソースコード](https://github.com/sethcottle/littlelink)) `MIT` `Javascript`
- [Mafl](https://mafl.hywax.space/) - 最小限の構成を持つ、柔軟なホームページ。([ソースコード](https://github.com/hywax/mafl)) `MIT` `Docker/Nodejs`
- [Nimbus](https://nimbus.turboot.com/) - 現代的なドラッグ＆ドロップ方式のホームラボダッシュボードで、視覚的なエディタとシンプルな設定が可能。 ([デモ](https://nimbus.turboot.com/), [ソースコード](https://github.com/Turbootzz/Nimbus)) `AGPL-3.0` `Docker`
- [Personal Management System](https://volmarg.github.io/) - 日々の生活に必要な項目を整理できる。シンプルなToDoリストやノートから支払い、スケジュールまで。 ([デモ](https://github.com/Volmarg/personal-management-system#documentation--demo), [ソースコード](https://github.com/Volmarg/personal-management-system)) `MIT` `Docker`
- [portkey](https://portkey.page) - シンプルなウェブポータルで、スタートページとして機能し、リンクやURLの集約を表示する一方で、カスタムページの追加も可能。すべてを1つの設定ファイルで管理。 ([デモ](https://demo.portkey.page), [ソースコード](https://github.com/kodehat/portkey)) `AGPL-3.0` `Go/Docker`
- [ryot](https://github.com/ignisda/ryot) - あなたの生活のさまざまな側面を追跡できる。メディア、フィットネスなど。 ([デモ](https://github.com/IgnisDa/ryot?tab=readme-ov-file#-demo)) `GPL-3.0` `Docker`
- [Starbase 80](https://github.com/notclickable-jordan/starbase-80) - iPad風アプリケーショングリッドを備えたシンプルなホームページ。モバイルおよびデスクトップ向け。1つのJSON設定ファイル。 `MIT` `Docker`
- [Your Spotify](https://github.com/Yooooomi/your_spotify) `外部プロプライエタリサービス依存` - Spotifyでの音楽の聴取履歴を記録し、Webアプリで統計を表示します。 `MIT` `Nodejs/Docker`

### 写真ギャラリー <a id="photo-galleries"></a>

[ギャラリー](https://en.wikipedia.org/wiki/Gallery_Software)は、写真、画像、動画、その他のデジタルメディアの公開・共有を助けるソフトウェアです。

関連資料： [静的サイトジェネレーター](#static-site-generators), [メディアのストリーミング：動画](#media-streaming---video-streaming), [コンテンツ管理システム（CMS）](#content-management-systems-cms)

- [Chevereto](https://chevereto.com/) - 個人用の画像ホスティングサイトを構築する画像共有ソフトウェア。原文では究極のツールで、数分で作成できると紹介されています。 ([ソースコード](https://github.com/chevereto/chevereto)) `AGPL-3.0` `PHP/Docker`
- [ChronoFrame](https://chronoframe.bh8.ga/) - オンラインフォト管理をサポートし、ライブ／モーションフォトやマップ探索を可能にする個人用ギャラリーアプリ。 ([デモ](https://lens.bh8.ga/), [ソースコード](https://github.com/HoshinoSuzumi/chronoframe)) `MIT` `Nodejs/Docker`
- [Damselfly](https://damselfly.info) - 大量の画像コレクションを管理する高速サーバーベースのフォト管理システム。顔検出、顔・物体認識、強力な検索、EXIFキーワードタグ付けを備えている。Linux、MacOS、Windowsで動作。 ([ソースコード](https://github.com/webreaper/damselfly)) `GPL-3.0` `Docker/C#/.NET`
- [Ente](https://ente.com/) - エンドツーエンド暗号化を使う写真共有プラットフォーム（Google Photos、Apple Photosの代替）です。 ([ソースコード](https://github.com/ente/ente)) `AGPL-3.0` `Docker/Nodejs/Go`
- [HomeGallery](https://home-gallery.org) - タグ付け、モバイル向け表示、AIによる画像の探索を備えた、個人の写真・動画の閲覧ツール。 ([デモ](https://demo.home-gallery.org), [ソースコード](https://github.com/xemle/home-gallery)) `MIT` `Nodejs/Docker`
- [Immich Kiosk](https://github.com/damongolding/immich-kiosk) - キオスクデバイスやブラウザで動作する軽量スライドショー。データソースとしてImmichを使用。 `GPL-3.0` `Docker/Go`
- [Immich](https://immich.app/) - スマートフォンから写真・動画を直接バックアップするツール（Google Photosの代替）。 ([デモ](https://github.com/immich-app/immich#demo), [ソースコード](https://github.com/immich-app/immich)) `AGPL-3.0` `Docker`
- [LibrePhotos](https://github.com/LibrePhotos/librephotos) - グラフに注目したフォト管理サービス（Google Photosの代替）。 ([クライアント](https://docs.librephotos.com/docs/user-guide/mobile/)) `MIT` `Python/Docker`
- [Lychee](https://lycheeorg.github.io/) - グリッドとアルバムベースのフォト管理システム。 ([ソースコード](https://github.com/LycheeOrg/Lychee)) `MIT` `PHP/Docker`
- [Mediagoblin](https://mediagoblin.org) - 誰でも運営できるメディア配信プラットフォーム（Flickr、YouTube、SoundCloudの代替）。 ([ソースコード](https://git.savannah.gnu.org/cgit/mediagoblin.git/tree/)) `AGPL-3.0` `Python`
- [Memtly](https://docs.memtly.com/) - スライドショーを備える、イベントの写真共有プラットフォーム兼ギャラリー。ゲストはQRコードを使って思い出の写真を閲覧・共有できます。 ([デモ](https://demo.memtly.com/), [ソースコード](https://github.com/Memtly/Memtly.Community)) `GPL-3.0` `C#/Docker`
- [Nextcloud Memories](https://memories.gallery/) - Nextcloudアプリとして動作する写真管理ツール群。原文では高速で現代的、かつ高度な機能を備えると紹介されています。 ([デモ](https://demo.memories.gallery/apps/memories/), [ソースコード](https://github.com/pulsejet/memories)) `AGPL-3.0` `PHP`
- [Photofield](https://github.com/SmilyOrg/photofield) - 実験的な高速フォトビューア。 `MIT` `Docker/Go`
- [PhotoPrism](https://photoprism.org) - GoとGoogle TensorFlowを使い、個人の写真を閲覧、整理、共有、自動タグ付け、検索する写真管理ツール。固定原文では最新技術を用いると紹介されています。 ([デモ](https://demo.photoprism.app/library/browse), [ソースコード](https://github.com/photoprism/photoprism)) `AGPL-3.0` `Go/Docker`
- [Photoview](https://photoview.github.io/) - 写真家向けに作られた、個人サーバー向けのシンプルな写真ギャラリー。数千の高解像度写真があるディレクトリを、簡単かつ高速に閲覧できることを目指しています。（[デモ](https://photoview.github.io/)，[ソースコード](https://github.com/photoview/photoview)）`GPL-3.0` `Go/Docker`
- [PiGallery 2](https://bpatrik.github.io/pigallery2/) - ディレクトリ中心のフォトギャラリーウェブサイトで、豊かなUIを備え、リソースの少ないサーバー上で動作を最適化しています。（[ソースコード](https://github.com/bpatrik/pigallery2)）`MIT` `Docker/Nodejs`
- [Piwigo](https://piwigo.org/) - ウェブ向けフォトギャラリーソフトウェアで、ユーザーと開発者の活発なコミュニティによって構築されています。（[ソースコード](https://github.com/Piwigo/Piwigo)）`GPL-2.0` `PHP`
- [sigal](https://github.com/saimn/sigal) - もう一つのシンプルな静的ギャラリー生成器。`MIT` `Python`
- [SPIS](https://github.com/gbbirkisson/spis) - シンプルで軽量かつ高速なメディアサーバーで、モバイル対応も良好です。`GPL-3.0` `Docker/Rust`
- [This week in past](https://github.com/RouHim/this-week-in-past) - 過去の各年の今週に撮影した画像を集め、Webページのシンプルなスライドショーに表示します。 `MIT` `Docker/Rust`
- [Thumbor](http://thumbor.org/) - スマートな画像サービスで、オンデマンドでの切り取り、サイズ調整、フィルターの適用、画像の最適化を可能にします。（[ソースコード](https://github.com/thumbor/thumbor)）`MIT` `Python/Docker`
- [Zenphoto](https://www.zenphoto.org/) - オープンソースのギャラリーおよびCMSプロジェクト。（[ソースコード](https://github.com/zenphoto/zenphoto)）`GPL-2.0` `PHP`

### アンケートとイベント <a id="polls-and-events"></a>

[アンケート](https://en.wikipedia.org/wiki/Opinion_poll)や[イベント](https://en.wikipedia.org/wiki/Event)を準備・管理するためのソフトウェアです。

関連資料： [予約と日程調整](#booking-and-scheduling)

- [Bitpoll](https://github.com/fsinfuhh/Bitpoll) - 日付、時間、一般質問などについてのアンケートを実施します。（[デモ](https://bitpoll.de/)）`GPL-3.0` `Docker/Python`
- [Bracket](https://docs.bracketapp.nl/) - 大会の構成、チーム追加、試合日程、得点記録を管理する、柔軟なトーナメントシステム。順位を一般向けにリアルタイムで表示します。（[デモ](https://www.bracketapp.nl/demo)，[ソースコード](https://github.com/evroon/bracket)）`AGPL-3.0` `Docker/Nodejs`
- [Christmas Community](https://github.com/Wingysam/Christmas-Community) - 家族全員で欲しい贈り物を確認し、同じ物を重複して贈ることを避けるための、シンプルな共有スペース。`AGPL-3.0` `Docker/Nodejs`
- [Claper](https://claper.co/) - 聴衆と対話するツール（Slido、AhaSlides、Mentimeterの代替）。原文では究極のツールと紹介されています。（[ソースコード](https://github.com/ClaperCo/Claper)）`GPL-3.0` `Elixir/Docker`
- [ClearFlask](https://clearflask.com) - 寄せられた意見を管理し、公開ロードマップの優先順位を決めるコミュニティ向けフィードバックツール（Canny、UserVoice、Upvotyの代替）です。（[デモ](https://product.clearflask.com)，[ソースコード](https://github.com/clearflask/clearflask)）`AGPL-3.0` `Docker`
- [docassemble](https://docassemble.org/) - Python、YAML、Markdownを基盤とする、案内付きの質問・回答と文書の組み立てを行う、自由なオープンソースのエキスパートシステムです。（[デモ](https://demo.docassemble.org/run/legal)，[ソースコード](https://github.com/jhpyle/docassemble)）`MIT` `Docker/Python`
- [EventSchedule](https://eventschedule.com/) - イベントを共有し、チケット販売を行い、コミュニティを結びつけていきます。（[ソースコード](https://github.com/eventschedule/eventschedule)）`AAL` `PHP/Docker`
- [Fider](https://fider.io) - フィードバックを収集し、優先順位付けするためのオープンプラットフォーム（UserVoiceの代替）。（[デモ](https://demo.fider.io)，[ソースコード](https://github.com/getfider/fider)）`MIT` `Docker`
- [Formbricks](https://formbricks.com) - 顧客の利用過程の各段階でフィードバックを収集し、要望を把握する顧客体験管理ツール群。原文では世界最大のオープンソースアンケート基盤を使うと紹介されています。（[デモ](https://app.formbricks.com)，[ソースコード](https://github.com/formbricks/formbricks)）`AGPL-3.0` `Nodejs/Docker`
- [Framadate](https://framadate.org/abc/) - 予約の日程調整や意思決定のためのオンラインサービス。日付・議題の選択肢でアンケートを作り、友人や同僚へリンクを共有して、議論し決定します。（[デモ](https://framadate.org/aqg259dth55iuhwm)，[ソースコード](https://framagit.org/framasoft/framadate?)）`CECILL-B` `PHP`
- [Gancio](https://gancio.org/) - 地域コミュニティのイベントおよびスケジュールの共有。（[デモ](https://demo.gancio.org/)，[ソースコード](https://framagit.org/les/gancio)）`AGPL-3.0` `Nodejs`
- [gathio](https://docs.gath.io/) - 自動消滅し、登録不要で共有可能なイベントページ。（[デモ](https://gath.io/)，[ソースコード](https://github.com/lowercasename/gathio)）`GPL-3.0` `Nodejs/Docker`
- [HeyForm](https://heyform.net) - アンケート、質問票、クイズ、投票用の会話型フォームを作成するツール。原文では誰でも魅力的なフォームを作れると紹介されています。([ソースコード](https://github.com/heyform/heyform)) `AGPL-3.0` `Docker`
- [hitobito](https://hitobito.com) - メンバー、イベントなど複雑なグループ階層を管理できます。([デモ](https://demo.hitobito.com/en/users/sign_in), [ソースコード](https://github.com/hitobito/hitobito)) `AGPL-3.0` `Ruby`
- [LimeSurvey](https://www.limesurvey.org) - Webベースの多機能なアンケートツール。幅広い調査ロジックに対応します。([デモ](https://demo.limesurvey.org), [ソースコード](https://github.com/LimeSurvey/LimeSurvey)) `GPL-2.0` `PHP`
- [Meetable](https://events.indieweb.org) - 最小限のイベントアグレゲーター。([ソースコード](https://github.com/aaronpk/Meetable)) `MIT` `PHP`
- [Mobilizon](https://mobilizon.org) - イベントやグループの検索、作成、運営を支援する連合型のツールです。([ソースコード](https://framagit.org/framasoft/mobilizon/)) `AGPL-3.0` `Elixir/Docker`
- [OpnForm](https://opnform.com) - 美しいオープンソースフォームビルダー。([デモ](https://opnform.com/forms/create/guest), [ソースコード](https://github.com/OpnForm/OpnForm)) `AGPL-3.0` `PHP/Nodejs/Docker`
- [Revel](https://www.letsrevel.io) `外部プロプライエタリサービス依存` - コミュニティ中心のイベント管理およびチケット販売プラットフォーム。([デモ](https://demo.letsrevel.io), [ソースコード](https://github.com/letsrevel/revel-backend), [クライアント](https://github.com/letsrevel)) `MIT` `Python/Docker`

### プロキシ <a id="proxy"></a>

[プロキシ](https://en.wikipedia.org/wiki/Proxy_server)は、資源を要求するクライアントと、その資源を提供するサーバーの間を仲介するサーバーアプリケーションです。この節では外向きのフォワードプロキシを扱います。リバースプロキシはWebサーバーの節を参照してください。

関連資料： [Webサーバー](#web-servers)

- [g3proxy](https://g3-project.readthedocs.io/projects/g3proxy/en/latest/) - プロキシの連鎖、プロトコル検査、MITMによる通信の検査、ICAPによる処理、透過プロキシに対応するフォワードプロキシサーバーです。([ソースコード](https://github.com/bytedance/g3/tree/master/g3proxy)) `Apache-2.0` `Rust/deb`
- [GitProxy](https://git-proxy.finos.org/) - 外向きのgit pushすべてにルールとワークフローを適用し、規則への適合を確認するGit用プロキシ。HTTP・HTTPS・SSHに対応し、セキュリティ検査と検証を備えています。([ソースコード](https://github.com/finos/git-proxy)) `Apache-2.0` `Nodejs/Docker`
- [imgproxy](https://imgproxy.net/) - リモート画像のサイズ変更・形式変換を行う独立したサーバー。原文では高速で安全と紹介されています。([ソースコード](https://github.com/imgproxy/imgproxy)) `MIT` `Go/Docker/K8S`
- [iodine](https://code.kryo.se/iodine/) - IPv4をDNSトンネルで実現し、socks5プロキシリスナーを開始できるソリューション。([ソースコード](https://github.com/yarrick/iodine)) `ISC` `C/deb`
- [Outline Server](https://getoutline.org/) - アクセスキーごとにShadowsocksインスタンスを実行し、アクセスキーを管理するREST APIを持つプロキシサーバー。([ソースコード](https://github.com/OutlineFoundation/outline-server)) `Apache-2.0` `Docker/Nodejs`
- [Privoxy](https://www.privoxy.org) - プライバシーの強化、Webページ・HTTPヘッダーの変更、アクセス制御、広告や不要なネットコンテンツの除去を行う高度なフィルターを備えた、非キャッシュ型Webプロキシ。`GPL-2.0` `C/deb`
- [sish](https://github.com/antoniomika/sish) - HTTP(S)/WS(S)/TCPをSSHのみでローカルホストにトンネル化（serveo/ngrokの代替）。`MIT` `Go/Docker`
- [socks5-proxy-server](https://github.com/nskondratev/socks5-proxy-server) - 認証が内蔵されたSOCKS5プロキシサーバーと、ユーザー管理およびデータ使用量（GBごとに料金を支払う場合など）の統計を管理するTelegramボット。Docker化されており、インストールが簡単です。`Apache-2.0` `Docker`
- [Squid](http://www.squid-cache.org/) - HTTP、HTTPS、FTPをサポートするウェブキャッシュプロキシ。頻繁に要求されるウェブページをキャッシュ・再利用することで、帯域幅の使用を減らし、応答時間を改善します。([ソースコード](https://code.launchpad.net/squid)) `GPL-2.0` `C/deb`
- [Tinyproxy](https://tinyproxy.github.io/) - 軽量なHTTP/HTTPSプロキシデーモン。([ソースコード](https://github.com/tinyproxy/tinyproxy)) `GPL-2.0` `C/deb`

### レシピ管理 <a id="recipe-management"></a>

[レシピ](https://en.wikipedia.org/wiki/Recipe)を管理するソフトウェアとツールです。

- [Bar Assistant](https://barassistant.app/) - 材料の登録、カクテルの検索、独自のカクテルレシピの作成を通じて、自宅のバーを管理します。([デモ](https://demo.barassistant.app/), [ソースコード](https://github.com/karlomikus/bar-assistant)) `MIT` `PHP/Docker`
- [CookCLI](https://cooklang.org) - Cooklangレシピで献立・買い物を自動化するCLI。UNIXの処理フローに組み込むスクリプトから利用でき、Webサーバーも含みます。([ソースコード](https://github.com/cooklang/CookCLI)) `MIT` `Rust`
- [Fork Recipes](https://mikebgrep.github.io/forkapi/latest/clients/) - 料理レシピをシンプルに管理できます。([ソースコード](https://github.com/mikebgrep/fork.recipes)) `BSD-3-Clause` `Docker`
- [ManageMeals](https://managemeals.com/) - レシピの管理、URLからレシピをインポートし、広告や不要なテキストなしで整理できます。（[デモ](https://demo.managemeals.com/), [ソースコード](https://github.com/managemeals/manage-meals-web)） `GPL-3.0` `Docker`
- [Mealie](https://nightly.mealie.io/) - マテリアルデザインを採用したレシピマネージャー。カテゴリとタグの管理、買い物リスト、メニュー計画、サイトカスタマイズが可能。Mealieは、家族全員がアプリを使用しやすいように、シンプルなユーザーインタラクションを重視しています。（[デモ](https://demo.mealie.io), [ソースコード](https://github.com/mealie-recipes/mealie)） `MIT` `Python`
- [RecipeSage](https://github.com/julianpoy/recipesage) - レシピの保存、献立、買い物リストを管理するツール。原文では任意のURLから直接レシピを取り込めると紹介されています。（[デモ](https://recipesage.com)） `AGPL-3.0` `Nodejs`
- [Recipya](https://recipes.musicavis.ca) - シンプルで洗練されたレシピマネージャー。家族全員が楽しめるよう設計されています。（[デモ](https://recipes.musicavis.ca/guide/login), [ソースコード](https://github.com/reaper47/recipya)） `GPL-3.0` `Docker/Go`
- [Tamari](https://tamariapp.com) - 内蔵レシピコレクションを備えたレシピマネージャーWebアプリ。お気に入りやカテゴリで整理し、買い物リストを作成し、メニューを計画できます。（[デモ](https://app.tamariapp.com), [ソースコード](https://github.com/alexbates/Tamari)） `GPL-3.0` `Docker/Python`
- [Vanilla Cookbook](https://vanilla-cookbook.readthedocs.io/en/) - 内部で複雑な構造を採用しながらも、ユーザー体験をシンプルで自然な状態に保つレシピマネージャー。（[ソースコード](https://github.com/jt196/vanilla-cookbook)） `GPL-3.0` `Docker/Nodejs`
- [What To Cook?](https://github.com/kassner/whattocook) - 家にある食材に基づいて、今日調理できるレシピを提供します。 `AGPL-3.0` `Docker`

### リモートアクセス <a id="remote-access"></a>

[リモートデスクトップ](https://en.wikipedia.org/wiki/Remote_desktop_software)・[SSH](https://en.wikipedia.org/wiki/Secure_Shell)サーバーと、コンピューターを遠隔管理するためのWebインターフェースです。

- [Cardea](https://github.com/hectorm/cardea) - アクセス制御、セッションの記録、任意のTPMによる鍵保護を備えたSSHの踏み台サーバーです。 `EUPL-1.2` `Go/Docker`
- [Engity's Bifröst](https://bifroest.engity.org/) - ユーザーの認可方法やセッションの実行場所・方法を選べる、細かくカスタマイズ可能なSSHサーバーです。（[ソースコード](https://github.com/engity-com/bifroest)） `Apache-2.0` `Go/Docker`
- [Firezone](https://www.firezone.dev/) - WireGuardに対応し、Web GUI、1行のインストール用スクリプト、多要素認証（MFA）、SSOを備えたリモートアクセスゲートウェイ。原文では安全と紹介されています。（[ソースコード](https://github.com/firezone/firezone)） `Apache-2.0` `Elixir/Docker`
- [Guacamole](https://guacamole.apache.org) - VNCやRDPなどの標準プロトコルをサポートするクライアント不要型リモートデスクトップゲートウェイ。（[ソースコード](https://github.com/apache/guacamole-server)） `Apache-2.0` `Java/C`
- [MeshCentral](https://meshcentral.com/) - 自分でWebサーバーを運用し、ローカルネットワークやインターネット上のコンピューターを遠隔で管理・制御するためのツールです。（[ソースコード](https://github.com/Ylianst/MeshCentral)） `Apache-2.0` `Nodejs`
- [ShellHub](https://www.shellhub.io) - 任意のSSHクライアントやWeb UIからLinux機器へ遠隔アクセスする、現代的なSSHサーバー（sshdの代替）。（[ソースコード](https://github.com/shellhub-io/shellhub)） `Apache-2.0` `Docker`
- [Sshwifty](https://github.com/nirui/sshwifty) - Web向けに作られたSSH・Telnet接続ツール。（[デモ](https://sshwifty-demo.nirui.org)） `AGPL-3.0` `Go/Docker`
- [Termix](https://docs.termix.site/) - クライアント不要のウェブベースサーバー管理プラットフォーム。SSHターミナル、トンネリング、ファイル編集機能を備えています。（[ソースコード](https://github.com/Termix-SSH/Termix)） `Apache-2.0` `Docker`
- [Warpgate](https://github.com/warp-tech/warpgate) - SSH、HTTPS、Kubernetes、MySQL、Postgresに対応する透過的な踏み台・特権アクセス管理（PAM）ツール。追加のクライアント側ソフトウェアは必要ありません。 `Apache-2.0` `Rust/Docker`

### 資源計画 <a id="resource-planning"></a>

[資源・供給計画](https://en.wikipedia.org/wiki/Resource_planning)を支援するソフトウェアとツールです。[企業資源・供給計画（ERP）](https://en.wikipedia.org/wiki/Enterprise_resource_planning)も含みます。

関連資料： [資金・予算・財務管理](#money-budgeting--management), [在庫管理](#inventory-management)

- [Dolibarr](https://www.dolibarr.org/) - 企業や財団の活動（連絡先、サプライヤー、請求書、注文、在庫、スケジュール、会計など）を管理する現代的なCRMソフトウェアパッケージ。（[デモ](https://www.dolibarr.org/onlinedemo.php), [ソースコード](https://github.com/Dolibarr/dolibarr)） `GPL-3.0` `PHP/deb`
- [ERPNext](https://frappe.io/erpnext) - ビジネスを運営するためのERPシステム。（[ソースコード](https://github.com/frappe/erpnext)） `GPL-3.0` `Python/Docker`
- [farmOS](https://farmos.org/) - ウェブベースの農場記録アプリケーション。（[デモ](https://farmos-demo.rootedsolutions.io/), [ソースコード](https://github.com/farmOS/farmOS)） `GPL-2.0` `PHP/Docker`
- [grocy](https://grocy.info/) - 食料品や家庭を管理する、冷蔵庫の中だけにとどまらない家庭向けERPと原文で紹介されています。（[デモ](https://en.demo.grocy.info/), [ソースコード](https://github.com/grocy/grocy)） `MIT` `PHP/Docker`
- [LedgerSMB](https://ledgersmb.org/) - 中小企業向けの統合会計・ERPシステム。複式簿記、予算、請求書、見積もり、プロジェクト、注文・在庫管理、出荷などを扱います。 ([ソースコード](https://github.com/ledgersmb/LedgerSMB)) `GPL-2.0` `Docker/Perl`
- [Odoo](https://www.odoo.com) - 自由なオープンソースのERPシステムです。 ([デモ](https://demo.odoo.com/), [ソースコード](https://github.com/odoo/odoo)) `LGPL-3.0` `Python/deb/Docker`
- [OFBiz](https://ofbiz.apache.org/) - 業界に応じて柔軟に利用可能なビジネスアプリケーションを備えた企業資源計画システム。 ([ソースコード](https://github.com/apache/ofbiz-framework)) `Apache-2.0` `Java`
- [Tryton](https://www.tryton.org/) - 自由なオープンソースの業務ソリューションです。 ([デモ](https://www.tryton.org/demo), [ソースコード](https://foss.heptapod.net/tryton/tryton)) `GPL-3.0` `Python`

### 検索エンジン <a id="search-engines"></a>

[検索エンジン](https://en.wikipedia.org/wiki/Search_engine_(computing))は、コンピューターに保存された情報を探すための[情報検索システム](https://en.wikipedia.org/wiki/Information_retrieval)です。[Web検索エンジン](https://en.wikipedia.org/wiki/Web_search_engine)も含みます。

- [Aleph](https://aleph.occrp.org/) - 文書（PDF、Word、HTML）と構造化データ（CSV、XLS、SQL）を大量に索引化し、閲覧・検索するツール。調査報道を主な用途として作られています。 ([デモ](https://aleph.occrp.org/), [ソースコード](https://github.com/alephdata/aleph)) `MIT` `Docker/K8S`
- [Amgix](https://amgix.io) - 柔軟に導入でき、実際の不揃いなデータを扱うために設計された、オープンソースのハイブリッド検索エンジン。 ([デモ](https://findgovdata.org), [ソースコード](https://github.com/amgix/amgix-server), [クライアント](https://github.com/orgs/amgix/repositories)) `AGPL-3.0` `Docker/K8S`
- [Apache Solr](https://lucene.apache.org/solr/) - 全文検索、検索語の強調、ファセット検索、リアルタイムの索引作成、動的なクラスタリング、WordやPDFなどの文書処理を備えた企業向け検索プラットフォームです。 ([ソースコード](https://github.com/apache/solr)) `Apache-2.0` `Java/Docker/K8S`
- [Fess](https://fess.codelibs.org/) - 強力で簡単に展開できる企業検索サーバー。 ([デモ](https://search.n2sm.co.jp/), [ソースコード](https://github.com/codelibs/fess)) `Apache-2.0` `Java/Docker`
- [Hister](https://hister.org/) - 訪問したウェブサイトを自動インデックスする個人用ウェブ検索エンジン。オフラインでのローカル結果プレビュー、ローカルファイル、マルチユーザー対応、オプションの意味論的検索をサポート。 ([デモ](https://demo.hister.org/), [ソースコード](https://github.com/asciimoo/hister)) `AGPL-3.0` `Go/Docker`
- [Manticore Search](https://github.com/manticoresoftware/manticoresearch/) - 全文検索およびデータ分析を提供し、小規模・中規模・大規模データに対しても高速応答（Elasticsearchの代替）。 `GPL-3.0` `Docker/deb/C++/K8S`
- [MeiliSearch](https://www.meilisearch.com) - 誤字に対応する全文検索API。原文では検索結果の関連性が非常に高く、すぐに結果を得られると紹介されています。 ([ソースコード](https://github.com/meilisearch/MeiliSearch)) `MIT` `Rust/Docker/deb`
- [Meme Search](https://github.com/neonwatty/meme-search) - AIを使うミーム検索エンジン。視覚言語モデルで画像の説明を自動抽出し、ベクトル埋め込みで索引化して意味による検索とキーワード検索を行います。 `Apache-2.0` `Docker`
- [OpenSearch](https://opensearch.org) - 分散型かつRESTベースの検索エンジン。 ([ソースコード](https://github.com/opensearch-project/OpenSearch)) `Apache-2.0` `Java/Docker/K8S/deb`
- [SearXNG](https://docs.searxng.org/) `外部プロプライエタリサービス依存` - 複数の検索サービスおよびデータベースからの結果を集約するインターネットメタ検索エンジン（Searxのフォーク）。 ([ソースコード](https://github.com/searxng/searxng/)) `AGPL-3.0` `Python/Docker`
- [Sosse](https://sosse.readthedocs.io/en/stable/) - Seleniumベースの検索エンジンおよびクロールツールに加え、オフラインアーカイブ機能を備えたもの。 ([ソースコード](https://gitlab.com/biolds1/sosse)) `AGPL-3.0` `Python/Docker`
- [Typesense](https://typesense.org) - 誤字に対応するオープンソース検索エンジン。開発者の満足と使いやすさを重視し、原文では非常に高速と紹介されています。 ([ソースコード](https://github.com/typesense/typesense)) `GPL-3.0` `C++/Docker/K8S/deb`
- [Websurfx](https://github.com/neon-mmd/websurfx) `外部プロプライエタリサービス依存` - プライバシーと安全性に配慮し、広告を表示せずに他の検索エンジンの結果を集約するメタ検索エンジン（SearXの代替）。細かく設定でき、原文では非常に高速と紹介されています。 `AGPL-3.0` `Rust/Docker`
- [Yacy](https://yacy.net/en/index.html) - ピアベースの分散型検索エンジンサーバー。 ([ソースコード](https://github.com/yacy/yacy_search_server)) `GPL-2.0` `Java/Docker/K8S`
- [ZincSearch](https://zincsearch.com) - 最小限のリソースを必要とする検索エンジン（Elasticsearchの代替）。 ([デモ](https://github.com/zinclabs/zinc#playground-server), [ソースコード](https://github.com/zincsearch/zincsearch)) `Apache-2.0` `Go/Docker/K8S`

### セルフホスト環境の構築 <a id="self-hosting-solutions"></a>

セルフホストのサービスやアプリケーションを簡単に導入・管理・設定するためのソフトウェアです。

- [DietPi](https://dietpi.com/) - シングルボードコンピューター向けに最適化された、最小限のDebian OS。自宅でセルフホストする各種サービスの導入・管理を容易にします。 ([ソースコード](https://github.com/MichaIng/DietPi)) `GPL-2.0` `Shell`
- [DockSTARTer](https://dockstarter.com/) - DockSTARTerは、Dockerで動作するホームサーバーアプリケーションを開始するのに役立ちます。([ソースコード](https://github.com/GhostWriters/DockSTARTer)) `MIT` `Shell`
- [Dropserver](https://dropserver.org) - あなたの個人ウェブサービス向けのアプリケーションプラットフォームです。([ソースコード](https://github.com/teleclimber/Dropserver/)) `Apache-2.0` `Go/Deno`
- [FreedomBox](https://freedombox.org/) - 私的な個人の通信のために、自由ソフトウェアで動作する個人用サーバーを設計・開発・普及するコミュニティプロジェクト。([ソースコード](https://salsa.debian.org/freedombox-team/freedombox)) `AGPL-3.0` `Python/deb`
- [HomelabOS](https://homelabos.com) - オフラインでプライバシーを重視するデータセンター。固定原文では、少数のコマンドで100を超えるサービスをデプロイできると紹介されています。([ソースコード](https://gitlab.com/NickBusey/HomelabOS)) `MIT` `Docker`
- [HomeServerHQ](https://www.homeserverhq.com/) - ホームサーバー用のインフラとインストーラーをまとめたツール。原文では、CGNATの配下でも1時間未満で、設定済みのメールサーバー、VPN、公開Webサイトを構築できると紹介されています。([ソースコード](https://github.com/homeserverhq/hshq)) `GPL-3.0` `Shell`
- [LibreServer](https://libreserver.org/) - Debianベースのホームサーバー構成です。([ソースコード](https://github.com/bashrc2/libreserver)) `AGPL-3.0` `Shell`
- [NextCloudPi](https://github.com/nextcloud/nextcloudpi) - Nextcloudを事前にインストール・設定し、テキスト・Webの管理画面と、私的なデータを自分でホストするためのツールを備えています。Raspberry Pi、Odroid、Rock64、Docker用のインストールイメージと、Armbian・Debian用のcurlインストーラーを提供します。 `GPL-2.0` `Shell/PHP`
- [Nirvati](https://nirvati.org) - Webインターフェースから、セルフホスト型アプリを1クリックで起動するツール。原文では便利で、人気のアプリを容易に起動できると紹介されています。([ソースコード](https://gitlab.com/nirvati-ug/nirvati/backend)) `AGPL-3.0` `Rust/K8S`
- [OpenMediaVault](https://www.openmediavault.org/) - Debian Linuxに基づくネットワークアタッチドストレージ（NAS）ソリューション。SSH、(S)FTP、SMB/CIFS、DAAPメディアサーバー、RSync、BitTorrentクライアントなど、多くのサービスを内蔵しています。([ソースコード](https://github.com/openmediavault/openmediavault)) `GPL-3.0` `PHP`
- [Sandstorm](https://sandstorm.io/) - セルフホスト型アプリを実行する個人用サーバー。原文では容易かつ安全に実行できると紹介されています。([デモ](https://demo.sandstorm.io/), [ソースコード](https://github.com/sandstorm-io/sandstorm)) `Apache-2.0` `C++/Shell`
- [Self Host Blocks](https://github.com/ibizaman/selfhostblocks) `外部プロプライエタリサービス依存` - NixOSモジュールを基盤とし、ベストプラクティスを重視する、モジュール構成のサーバー管理ツール。`AGPL-3.0` `Nix`
- [StartOS](https://start9.com) - ブラウザベースのグラフィカルオペレーティングシステム（OS）で、個人サーバーの運用を個人コンピュータの運用と同様に簡単に行えます。([ソースコード](https://github.com/Start9Labs/start-technologies)) `MIT` `Rust`
- [Syncloud](https://syncloud.org/) - あなたの独自のオンラインファイルストレージ、ソーシャルネットワーク、またはメールサーバーです。([ソースコード](https://github.com/syncloud/platform)) `GPL-3.0` `Go/Shell`
- [Tipi](https://runtipi.io/) - ホームサーバー管理ツール。1コマンドで設定し、好みのセルフホスト型アプリを1クリックで導入できます。([ソースコード](https://github.com/runtipi/runtipi)) `GPL-3.0` `Shell`
- [UBOS](https://ubos.net/) - 個人用サーバーやIoT機器といった独立運用の機器で動くLinuxディストリビューション。Jenkins、Mediawiki、Owncloud、WordPressなどのアプリを1コマンドで導入・管理する機能などを備えています。`GPL-3.0` `Perl`
- [Websoft9](https://www.websoft9.com) `外部プロプライエタリサービス依存` - GitOpsを使い、クラウド・家庭用サーバーで複数アプリをホストするツール。固定原文では200以上のオープンソースアプリを1クリックでデプロイできると紹介されています。([デモ](https://www.websoft9.com/demo), [ソースコード](https://github.com/websoft9/websoft9), [クライアント](https://www.websoft9.com/apps)) `LGPL-3.0` `Shell/Python`
- [WikiSuite](https://wikisuite.org) - 自由なオープンソースの企業向けソフトウェア群。原文では最も包括的で統合されたものと紹介されています。([ソースコード](https://wikisuite.org/Source-Code)) `GPL-3.0/LGPL-2.1/Apache-2.0/MPL-2.0/MPL-1.1/MIT/AGPL-3.0` `Shell/Perl/deb`
- [xsrv](https://xsrv.readthedocs.io/) - 自らのサーバー上で、自前ホストサービス／アプリケーションをインストールおよび管理できます。([ソースコード](https://github.com/nodiscc/xsrv)) `GPL-3.0` `Ansible/Shell`
- [YunoHost](https://yunohost.org/) - 誰もがセルフホストを利用しやすくすることを目指す、サーバー向けOS。([デモ](https://yunohost.org/#/try), [ソースコード](https://github.com/YunoHost)) `AGPL-3.0` `Python/Shell`

### ソフトウェア開発 <a id="software-development"></a>

[ソフトウェア開発](https://en.wikipedia.org/wiki/Software_development)は、アプリケーション、フレームワークなどを作成・保守するための過程です。構想、仕様策定、設計、プログラミング、文書化、テスト、バグ修正を含みます。

関連資料： [ソフトウェア開発：API管理](#software-development---api-management), [ソフトウェア開発：継続的インテグレーションとデプロイ](#software-development---continuous-integration--deployment), [ソフトウェア開発：FaaSとサーバーレス](#software-development---faas--serverless), [ソフトウェア開発：IDEとツール](#software-development---ide--tools), [ソフトウェア開発：ローカライズ](#software-development---localization), [ソフトウェア開発：ローコード](#software-development---low-code), [ソフトウェア開発：プロジェクト管理](#software-development---project-management), [ソフトウェア開発：テスト](#software-development---testing), [ソフトウェア開発：機能切り替え](#software-development---feature-toggle)

### ソフトウェア開発：API管理 <a id="software-development---api-management"></a>

[API管理](https://en.wikipedia.org/wiki/API_management)は、[アプリケーションプログラミングインターフェース（API）](https://en.wikipedia.org/wiki/API)の作成・公開、利用方針の遵守、アクセス制御、利用者コミュニティの育成、利用統計の収集・分析、性能の報告を行う過程です。

- [Aastro](https://starwalkn.github.io/aastro-docs) - Goで書かれた拡張可能なAPIゲートウェイです。([ソースコード](https://github.com/starwalkn/aastro)) `Apache-2.0` `Go/Docker`
- [DreamFactory](https://www.dreamfactory.com/) - SQL/NoSQL/構造化データをすべてREST APIに変換します。([ソースコード](https://github.com/dreamfactorysoftware/dreamfactory)) `Apache-2.0` `PHP/Docker/K8S`
- [form.io](https://form.io) - ドラッグ＆ドロップフォームビルダーを活用したREST API構築プラットフォームで、アプリケーションフレームワークに依存しません。オープンソースおよびエンタープライズ版を提供しています。([デモ](https://portal.form.io), [ソースコード](https://github.com/formio)) `MIT` `Nodejs/Docker`
- [Fusio](https://www.fusio-project.org/) - REST APIの構築と管理を支援するオープンソースAPI管理プラットフォーム。([デモ](https://fusio-project.org/demo), [ソースコード](https://github.com/apioo/fusio)) `AGPL-3.0` `PHP/Docker`
- [Graphweaver](https://graphweaver.com/) - 複数のデータソースを1つのGraphQL APIに変換します。([ソースコード](https://github.com/exogee-technology/graphweaver)) `MIT` `Nodejs`
- [Hasura](https://hasura.io) - Postgres向けのリアルタイムGraphQL API。細かなアクセス制御とデータベースイベントによるWebhookの起動を備え、原文では高速かつ即時利用できると紹介されています。([ソースコード](https://github.com/hasura/graphql-engine)) `Apache-2.0` `Haskell/Docker/K8S`
- [Hoppscotch Community Edition](https://hoppscotch.io) - APIリクエストの作成ツール。原文では高速で外観が美しいと紹介されています。([ソースコード](https://github.com/hoppscotch/hoppscotch)) `MIT` `Nodejs/Docker`
- [Kong](https://konghq.com/kong/) - マイクロサービスAPIゲートウェイおよびプラットフォーム。([ソースコード](https://github.com/Kong/kong)) `Apache-2.0` `Lua/Docker/K8S/deb`
- [Lura](https://luraproject.org/) - APIゲートウェイ。原文では高性能と紹介されています。([ソースコード](https://github.com/luraproject/lura)) `Apache-2.0` `Go`
- [Opik](https://www.comet.com/site/products/opik/) `外部プロプライエタリサービス依存` - 開発から本番運用までのライフサイクルで、言語モデルの出力を調整するための可観測性ツール群。LLMアプリケーションの評価、テスト、提供を支援します。([ソースコード](https://github.com/comet-ml/opik)) `Apache-2.0` `Docker/Python`
- [Para](https://paraio.org) - オブジェクトの永続化、API開発、認証を扱う、柔軟でモジュール構造を持つバックエンドフレームワーク・サーバー。([ソースコード](https://github.com/erudika/para)) `Apache-2.0` `Java/Docker`
- [Svix](https://svix.com) - API提供者がWebhookを簡単に送信するための、オープンソースのWebhookサービスです。([ソースコード](https://github.com/svix/svix-webhooks)) `MIT` `Docker/Rust`
- [Tyk](https://tyk.io) - APIゲートウェイ、API分析、開発者ポータル、API管理ダッシュボードを標準で備えた、オープンソースのAPI管理プラットフォーム。原文では高速で拡張性があると紹介されています。([ソースコード](https://github.com/TykTechnologies/tyk)) `MPL-2.0` `Go/Docker/K8S`

### ソフトウェア開発：継続的インテグレーションとデプロイ <a id="software-development---continuous-integration--deployment"></a>

[継続的インテグレーション](https://en.wikipedia.org/wiki/Continuous_integration) および [継続的デプロイ](https://en.wikipedia.org/wiki/Continuous_deployment) のソフトウェアとツール。

関連資料： [awesome-sysadmin/Continuous Integration & Continuous Deployment](https://github.com/awesome-foss/awesome-sysadmin#continuous-integration--continuous-deployment)

関連資料： [自動化](#automation)

### ソフトウェア開発：FaaSとサーバーレス <a id="software-development---faas--serverless"></a>

[サーバーレスコンピューティング](https://en.wikipedia.org/wiki/Serverless_computing), [サービスとしての関数（FaaS）](https://en.wikipedia.org/wiki/Function_as_a_service) および [サービスとしてのプラットフォーム（PaaS）](https://en.wikipedia.org/wiki/Platform_as_a_service) の管理ソフトウェア。

関連資料： [awesome-sysadmin/PaaS](https://github.com/awesome-foss/awesome-sysadmin#paas)

### ソフトウェア開発：機能切り替え <a id="software-development---feature-toggle"></a>

[機能切り替え](https://en.wikipedia.org/wiki/Feature_toggle)は、ソフトウェア開発でソースコードの機能別ブランチを複数維持する代わりに使える方法です。

関連資料： [ソフトウェア開発：IDEとツール](#software-development---ide--tools)

- [Featbit](https://www.featbit.co/) - セルフホスト可能なエンタープライズクラスの機能フラグプラットフォーム。([ソースコード](https://github.com/featbit/featbit)) `MIT` `Docker/K8S`
- [Flagsmith](https://flagsmith.com) - アプリケーションに機能フラグを追加するダッシュボード、API、SDK（LaunchDarklyの代替）。([ソースコード](https://github.com/flagsmith/flagsmith)) `BSD-3-Clause` `Docker/K8S`
- [Flipt](https://flipt.io) - 複数のデータバックエンドをサポートする機能フラグソリューション（LaunchDarklyの代替）。([ソースコード](https://github.com/flipt-io/flipt)) `GPL-3.0` `Docker/K8S/Go`
- [GO Feature Flag](https://gofeatureflag.org) - シンプルで一通りの機能を備えた、軽量な機能フラグソリューション（LaunchDarklyの代替）。([ソースコード](https://github.com/thomaspoignant/go-feature-flag)) `MIT` `Go`

### ソフトウェア開発：IDEとツール <a id="software-development---ide--tools"></a>

[統合開発環境（IDE）](https://en.wikipedia.org/wiki/Integrated_development_environment)は、ソフトウェアを開発するプログラマーに包括的な機能を提供するアプリケーションです。

関連資料： [ソフトウェア開発：ローコード](#software-development---low-code)

- [Atheos](https://www.atheos.io) - Codiadを継承する、小さな容量と最小限の動作要件で利用できるWeb IDEフレームワーク。([ソースコード](https://github.com/Atheos/Atheos)) `MIT` `PHP/Docker`
- [code-server](https://github.com/coder/code-server) - ブラウザ上で動作するVS Code、リモートサーバーにホストされています。`MIT` `Nodejs/Docker`
- [Coder](https://coder.com/) - 自社インフラにリモート開発マシンを提供します。([ソースコード](https://github.com/coder/coder)) `AGPL-3.0` `Go/Docker/K8S/deb`
- [Eclipse Che](https://www.eclipse.org/che/) - オープンソースのワークスペースサーバーおよびクラウドIDE。([ソースコード](https://github.com/eclipse-che/che)) `EPL-1.0` `Docker/Java`
- [Hopp](https://gethopp.app) - リモートペアプログラミングアプリ。低遅延4K画面共有、描画、リモートコントロールをサポート。macOSおよびWindows向けクライアントを提供（Tuple、Pop、Drovio、Coscreenの代替）。([ソースコード](https://github.com/gethopp/hopp)) `AGPL-3.0` `Docker`
- [Judge0 CE](https://judge0.com) - ソースコードをコンパイル・実行するAPI。([ソースコード](https://github.com/judge0/judge0)) `GPL-3.0` `Docker`
- [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/) - インタラクティブかつ再現可能なコンピューティングを可能にするウェブベース環境。([デモ](https://mybinder.org/v2/gh/jupyterlab/jupyterlab-demo/try.jupyter.org?urlpath=lab), [ソースコード](https://github.com/jupyterlab/jupyterlab/)) `BSD-3-Clause` `Python/Docker`
- [Langfuse](https://langfuse.com) - モデルトレース、プロンプト管理、アプリ評価を扱うLLMエンジニアリング基盤。チャットボットやAIエージェントなどを、チームでデバッグ・分析・反復改善するためのツールです。([デモ](https://langfuse.com/docs/demo), [ソースコード](https://github.com/langfuse/langfuse), [クライアント](https://langfuse.com/docs/integrations/overview)) `MIT` `Docker`
- [LiveCodes](https://livecodes.io/docs/features/self-hosting) `外部プロプライエタリサービス依存` - React、Vue、Svelte、Solid、TypeScript、Python、Go、Ruby、PHPなどに対応する、クライアント側で動作する多機能なコード実験環境。固定原文ではこれらに加えて90以上の言語に対応すると紹介されています。([デモ](https://livecodes.io), [ソースコード](https://github.com/live-codes/livecodes)) `MIT` `Nodejs`
- [Lowdefy](https://www.lowdefy.com/) - YAML・JSONで社内ツール、BIダッシュボード、管理パネル、CRUDアプリ、ワークフローを構築する、セルフホスト可能なオープンソースプラットフォーム。データソースに接続し、Serverless、Netlify、Dockerでホストできます。原文では数分で構築できると紹介されています。([ソースコード](https://github.com/lowdefy/lowdefy)) `Apache-2.0` `Nodejs/Docker`
- [RapidForge](https://rapidforge.io/) - Webhook、スケジュールタスク、ページの構築に適した軽量プラットフォーム。BashまたはLuaでロジックを実装可能。([ソースコード](https://github.com/rapidforge-io/rapidforge)) `Apache-2.0` `Go/Nodejs`
- [RStudio Server](https://www.rstudio.com/products/rstudio/#Server) - R用のブラウザベースのIDE。([ソースコード](https://github.com/rstudio/rstudio)) `AGPL-3.0` `Java/C++`

### ソフトウェア開発：ローカライズ <a id="software-development---localization"></a>

[ローカライズ](https://en.wikipedia.org/wiki/Internationalization_and_localization)は、コードやソフトウェアを他の言語へ対応させる過程です。

- [Accent](https://www.accent.reviews/) - 開発者向け翻訳ツール。([ソースコード](https://github.com/mirego/accent)) `BSD-3-Clause` `Elixir/Docker`
- [Tolgee](https://tolgee.io) - 開発者・翻訳者が使いやすいWebローカライズ基盤。開発中のアプリケーション内で直接翻訳できます。([ソースコード](https://github.com/tolgee/tolgee-platform)) `Apache-2.0` `Docker/Java`
- [Traduora](https://traduora.co) - チーム向けの翻訳管理プラットフォーム。([ソースコード](https://github.com/ever-co/ever-traduora)) `AGPL-3.0` `Docker/K8S/Nodejs`
- [Weblate](https://weblate.org) - バージョン管理との連携が密接なウェブベース翻訳ツール。([ソースコード](https://github.com/WeblateOrg/weblate)) `GPL-3.0` `Python/Docker/K8S`

### ソフトウェア開発：ローコード <a id="software-development---low-code"></a>

[ローコード](https://en.wikipedia.org/wiki/Low-code_development_platform)開発基盤（LCDP）は、グラフィカルユーザーインターフェースを使ってアプリケーションを作成するための開発環境です。

関連資料： [ソフトウェア開発：IDEとツール](#software-development---ide--tools)

- [Appsmith](https://www.appsmith.com/) - 管理パネル、CRUDアプリ、ワークフローを構築するツール。原文では必要なものを10倍速く構築できると紹介されています。([ソースコード](https://github.com/appsmithorg/appsmith)) `Apache-2.0` `Java/Docker/K8S`
- [Appwrite](https://appwrite.io) - Web、ネイティブ、モバイルアプリの開発者向けの、包括的なバックエンドサーバーです。([ソースコード](https://github.com/appwrite/appwrite)) `BSD-3-Clause` `Docker`
- [Halo](https://www.halo.run) - 強力で使いやすいウェブサイト構築ツール（中国語ドキュメントあり）。([デモ](https://docs.halo.run/#%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C), [ソースコード](https://github.com/halo-dev/halo), [クライアント](https://github.com/halo-sigs/awesome-halo)) `GPL-3.0` `Java/Docker`
- [Manifest](https://manifest.build) - 1つのYAMLファイルに収まる完全なバックエンド。([デモ](https://manifest.new), [ソースコード](https://github.com/mnfst/manifest)) `MIT` `Nodejs`
- [PocketBase](https://pocketbase.io/) - SaaSやモバイルアプリ向けの、1ファイルにまとまったバックエンドです。([ソースコード](https://github.com/pocketbase/pocketbase)) `MIT` `Go/Docker`
- [Saltcorn](https://saltcorn.com/) - Web・モバイル向けのノーコードのデータベースアプリ構築ツール。UI、データバックエンド、永続的なワークフロー、メール、PDF生成、AIアプリを1つのプラットフォームで扱います。([ソースコード](https://github.com/saltcorn/saltcorn)) `MIT` `Docker/Nodejs`
- [SQLPage](https://sql-page.com) - SQLのみの動的ウェブサイトビルダー。([ソースコード](https://github.com/sqlpage/SQLPage)) `MIT` `Rust/Docker`
- [ToolJet](https://tooljet.io/) - 少ない開発作業で社内ツールを構築・デプロイする、ローコードのフレームワーク（Retool、Mendixの代替）。([ソースコード](https://github.com/ToolJet/ToolJet)) `GPL-3.0` `Nodejs/Docker/K8S`
- [TrailBase](https://trailbase.io/) - 型安全なREST・リアルタイムAPI、組み込みJS・TSランタイム、認証、管理UIを備える、単一実行ファイルのオープンなFirebase代替ツール。原文では「1ミリ秒未満」と紹介されています。 ([デモ](https://demo.trailbase.io), [ソースコード](https://github.com/trailbaseio/trailbase)) `OSL-3.0` `Rust/Docker`

### ソフトウェア開発：プロジェクト管理 <a id="software-development---project-management"></a>

[ソフトウェアプロジェクト管理](https://en.wikipedia.org/wiki/Software_project_management)向けのツールとソフトウェア。

関連資料： [問い合わせ・課題管理](#ticketing), [タスク管理とToDoリスト](#task-management--to-do-lists)

- [Cgit](https://git.zx2c4.com/cgit/about/) - Gitリポジトリ向けの高速で軽量なウェブインターフェース。 ([ソースコード](https://git.zx2c4.com/cgit/tree/)) `GPL-2.0` `C`
- [Forgejo](https://forgejo.org) - 拡張性、連合型の連携、プライバシーを重視する、軽量なソフトウェア開発基盤（Giteaのフォーク）です。 ([デモ](https://next.forgejo.org), [ソースコード](https://codeberg.org/forgejo/forgejo/), [クライアント](https://codeberg.org/forgejo-contrib/delightful-forgejo)) `MIT` `Docker/Go`
- [Fossil](https://www.fossil-scm.org/index.html/doc/trunk/www/index.wiki) - Wikiとバグトラッカーを備えた分散型バージョン管理システム。 `BSD-2-Clause-FreeBSD` `C`
- [Gerrit](https://www.gerritcodereview.com/) - Gitベースのプロジェクト向けのコードレビューおよびプロジェクト管理ツール。 ([ソースコード](https://github.com/GerritCodeReview/gerrit)) `Apache-2.0` `Java/Docker`
- [gitbucket](https://gitbucket.github.io/) - インストールが簡単、拡張性が高く、GitHub APIと互換性を持つGitプラットフォーム（GitHubの代替）。 ([ソースコード](https://github.com/gitbucket/gitbucket)) `Apache-2.0` `Scala/Java`
- [Gitea](https://gitea.com) - Gitホスティング、コードレビュー、チームでの共同作業、パッケージレジストリ、CI/CDを備えたセルフホスト型の総合開発サービス。原文では「Gitと一杯のお茶を」という標語と、扱いやすさで紹介されています。 ([デモ](https://demo.gitea.com), [ソースコード](https://github.com/go-gitea/gitea)) `MIT` `Go/Docker/K8S`
- [GitLab](https://about.gitlab.com) - セルフホスト型のGitリポジトリ管理、コードレビュー、問題追跡、活動フィード、ウィキ。 ([デモ](https://gitlab.com/), [ソースコード](https://gitlab.com/gitlab-org/gitlab-foss)) `MIT` `Ruby/deb/Docker/K8S`
- [Gogs](https://gogs.io/) - Goで書かれた、簡単なセルフホスト型Gitサービス。 ([ソースコード](https://github.com/gogs/gogs)) `MIT` `Go`
- [Huly](https://huly.io) - プロジェクト管理の各種機能をまとめたプラットフォーム（Linear、Jira、Slack、Notion、Motionの代替）。 ([デモ](https://app.huly.io), [ソースコード](https://github.com/hcengineering/platform)) `EPL-2.0` `Docker/K8S/Nodejs`
- [Ideon](https://www.theideon.com) - 無限のキャンバスを中心としたプロジェクトワークスペース。GitHub、GitLab、Gitea、Forgejoのリポジトリを埋め込み、ノート、リンク、タスクとともに、リアルタイム協働を実現。 ([ソースコード](https://github.com/3xpyth0n/ideon)) `AGPL-3.0` `Docker`
- [Kaneo](https://kaneo.app/) - シンプルかつ効率的なプロジェクト管理プラットフォーム。 ([デモ](https://demo.kaneo.app/), [ソースコード](https://github.com/usekaneo/kaneo)) `MIT` `K8S/Docker`
- [Leantime](https://leantime.io) - 小規模チームやスタートアップ向けのリーンなプロジェクト管理システム。着想から納品までを管理します。 ([ソースコード](https://github.com/leantime/leantime)) `AGPL-3.0` `PHP/Docker`
- [Mindwendel](https://www.mindwendel.com/) - チーム内でアイデアや考えをブレインストーミングし、投票できる。 ([デモ](https://www.mindwendel.com), [ソースコード](https://github.com/b310-digital/mindwendel)) `AGPL-3.0` `Docker/Elixir`
- [minimal-git-server](https://github.com/mcarbonne/minimal-git-server) - リポジトリを管理するための基本的なCLIを備えた軽量Gitサーバー。複数のアカウントをサポートし、コンテナ内で実行可能。 `MIT` `Docker`
- [Octobox](https://octobox.io/) `外部プロプライエタリサービス依存` - GitHubの通知を管理するツール。 ([ソースコード](https://github.com/octobox/octobox)) `AGPL-3.0` `Ruby/Docker`
- [OneDev](https://onedev.io/) - Git管理、課題追跡、CI/CDをまとめたDevOpsプラットフォーム。原文ではシンプルで強力と紹介されています。 ([ソースコード](https://code.onedev.io/projects/160)) `MIT` `Java/Docker/K8S`
- [OpenProject](https://www.openproject.org) - プロジェクト、タスク、目標を管理し、ワークパッケージを通じて共同作業するツール。ワークパッケージをGitHubのプルリクエストへ関連付けられます。 ([ソースコード](https://github.com/opf/openproject)) `GPL-3.0` `Ruby/deb/Docker`
- [Pagure](https://pagure.io/pagure) - 連合型・分散型の開発の基盤となる機能を備えた、軽量で柔軟なGit中心の開発基盤。原文では強力と紹介されています。 ([デモ](https://pagure.io/)) `GPL-2.0` `Docker/Python/deb`
- [Phorge](https://we.phorge.it/) - ソフトウェア開発プロジェクトの共同作業、管理、整理、レビューを行う、コミュニティ主導のプラットフォーム。 ([ソースコード](https://we.phorge.it/source/phorge/)) `Apache-2.0` `PHP`
- [Plane](https://plane.so) - 課題、エピック、製品ロードマップを追跡するツール（JIRA、Linear、Heightの代替）。原文では非常にシンプルに管理できると紹介されています。（[デモ](https://app.plane.so)，[ソースコード](https://github.com/makeplane/plane)）`AGPL-3.0` `Docker`
- [ProjeQtOr](https://www.projeqtor.org/) - プロジェクトの全工程を扱う幅広い機能を備えた、成熟した総合プロジェクト管理システム。複数ユーザーに対応します。（[デモ](https://demo.projeqtor.org/)，[ソースコード](https://sourceforge.net/p/projectorria/code/HEAD/tree/branches/)）`AGPL-3.0` `PHP`
- [Redmine](https://www.redmine.org/) - 柔軟なプロジェクト管理ウェブアプリケーション。（[ソースコード](https://svn.redmine.org/redmine/)）`GPL-2.0` `Ruby`
- [Review Board](https://www.reviewboard.org/) - すべての規模のプロジェクトおよび企業向けに拡張可能で使いやすいコードレビューツール。（[デモ](https://demo.reviewboard.org/)，[ソースコード](https://github.com/reviewboard/reviewboard)）`MIT` `Python/Docker`
- [RhodeCode](https://rhodecode.com/) - Git、Subversion、Mercurialのリポジトリ管理を統合・簡易化。（[ソースコード](https://code.rhodecode.com/)）`AGPL-3.0` `Python`
- [Rukovoditel](https://www.rukovoditel.net/) - 設定可能なオープンソースプロジェクト管理ウェブアプリケーション。（[ソースコード](https://www.rukovoditel.net/download.php)）`GPL-2.0` `PHP`
- [SCM Manager](https://www.scm-manager.org/) - Git、Mercurial、SubversionのリポジトリをHTTPで共有・管理するツール。原文では最も容易な方法と紹介されています。（[ソースコード](https://github.com/scm-manager/scm-manager)）`BSD-3-Clause` `Java/deb/Docker/K8S`
- [ShipShipShip](https://shipshipship.io) - プロジェクト管理と顧客コミュニケーションを橋渡しする変更履歴およびロードマッププラットフォーム。（[デモ](https://demo.shipshipship.io/admin)，[ソースコード](https://github.com/GauthierNelkinsky/ShipShipShip)）`Apache-2.0` `Docker`
- [Smederee](https://smeder.ee) - Darcsのバージョン管理を使い、ソフトウェアを共同開発する省資源のプラットフォームです。（[ソースコード](https://smeder.ee/~jan0sch/smederee)）`AGPL-3.0` `Scala`
- [Sourcehut](https://sourcehut.org/) - JavaScriptなしで動作する完全なウェブGitインターフェース。（[デモ](https://sr.ht/)，[ソースコード](https://git.sr.ht/~sircmpwn/git.sr.ht/tree)）`GPL-2.0` `Go`
- [Taiga](https://www.taiga.io/) - カンバンおよびスクラム手法に基づくアジャイルプロジェクト管理ツール。（[ソースコード](https://github.com/kaleidos-ventures)）`MPL-2.0` `Docker/Python/Nodejs`
- [Titra](https://titra.io/) - フリーランスや小さなチーム向けのタイムトラッキングソリューション。（[ソースコード](https://github.com/titraio/titra)）`GPL-3.0` `Javascript/Docker`
- [Trac](https://trac.edgewall.org/) - Tracはソフトウェア開発プロジェクト向けの強化されたWikiおよび問題トラッキングシステムです。`BSD-3-Clause` `Python/deb`
- [Traq](https://traq.io/) - PHPで構築されたプロジェクト管理および問題トラッキングシステム。（[ソースコード](https://github.com/nirix/traq)）`GPL-3.0` `PHP/Nodejs`
- [Tuleap](https://www.tuleap.org/) - ソフトウェアプロジェクトの計画、追跡、開発、共同作業を行うための、自由ソフトウェアのツール群。（[ソースコード](https://tuleap.net/plugins/git/tuleap/tuleap/stable?p=tuleap%2Fstable.git&a=tree)）`GPL-2.0` `PHP`
- [UVDesk](https://www.uvdesk.com/) - 顧客を支援する組織向けの、サービス指向・イベント駆動型で拡張可能なオープンソースのヘルプデスク。原文では効率的で使いやすいと紹介されています。（[デモ](https://demo.uvdesk.com/)，[ソースコード](https://github.com/uvdesk/community-skeleton)）`MIT` `PHP`
- [ZenTao](https://www.zentao.pm/) - アジャイル（スクラム）プロジェクト管理システム／ツール。（[ソースコード](https://github.com/easysoft/zentaopms)）`AGPL-3.0` `PHP`

### ソフトウェア開発：テスト <a id="software-development---testing"></a>

[ソフトウェアテスト](https://en.wikipedia.org/wiki/Software_testing)向けのツールとソフトウェア。

- [Bencher](https://bencher.dev/) - CIで性能の劣化を検出するための、継続的なベンチマークツール群です。（[ソースコード](https://github.com/bencherdev/bencher)）`MIT/Apache-2.0` `Rust`
- [Request Inbox](https://request-inbox.com/) - テストおよびデバッグ用にHTTPリクエストを収集・確認。インボックスを作成・管理し、詳細なリクエストデータをキャプチャし、カスタムレスポンスを設定。（[デモ](https://request-inbox.com/)，[ソースコード](https://github.com/jesusnoseq/request-inbox)）`Apache-2.0` `Docker`
- [WebHook Tester](https://github.com/tarampampam/webhook-tester) - WebHookなどのテストに最適な強力なツール。（`MIT`）`Docker/Go/deb/K8S`

### 静的サイトジェネレーター <a id="static-site-generators"></a>

[静的サイトジェネレーター](https://en.wikipedia.org/wiki/Web_template_system#Static_site_generators)は、生データ、プレーンテキストファイル、テンプレート群から、完全な静的HTMLサイトを生成します。

関連資料： [staticsitegenerators.bevry.me](https://staticsitegenerators.bevry.me), [staticgen.com](https://www.staticgen.com)

関連資料： [ブログ基盤](#blogging-platforms), [写真ギャラリー](#photo-galleries), [コンテンツ管理システム（CMS）](#content-management-systems-cms)

### タスク管理とToDoリスト <a id="task-management--to-do-lists"></a>

[タスク管理](https://en.wikipedia.org/wiki/Task_management#Task_management_software)ソフトウェア。

関連資料： [ソフトウェア開発：プロジェクト管理](#software-development---project-management), [問い合わせ・課題管理](#ticketing)

- [4ga Boards](https://4gaboards.com) - タスクを直感的に追跡するための、シンプルなリアルタイムのカンバンボード管理ツール。ダークモード、折りたためるToDoリスト、複数作業用ツールを備え、原文ではチームの生産性を大きく高めると紹介されています。([デモ](https://demo.4gaboards.com), [ソースコード](https://github.com/RARgames/4gaBoards)) `MIT` `Nodejs/Docker/K8S`
- [AppFlowy](https://appflowy.io/) - さまざまなプロジェクトごとのToDoリストを詳細に構築し、それぞれの進捗を追跡できます。オープンソースのNotionの代替品。([ソースコード](https://github.com/AppFlowy-IO/appflowy)) `AGPL-3.0` `Rust/Dart/Docker`
- [dayGLANCE](https://dayglance.app) - 日別スケジュールプランナー。ドラッグ＆ドロップによる時間ブロッキング、インボックス、繰り返しタスク、習慣、ルーティン、目標、プロジェクト、ポモドーロ集中モードを備え、iCalおよびCalDAVカレンダーとの同期も可能です。データはブラウザに残され、オプションでWebDAVまたはGLANCEvaultとの同期が可能です。([ソースコード](https://github.com/krelltunez/dayGLANCE), [クライアント](https://github.com/glance-apps/glance-vault)) `MIT` `Javascript/Docker`
- [Donetick](https://donetick.com) - 個人および家族用のタスクと家事管理ツール。高度なスケジューリング、柔軟な割り当て、グループ共有機能、詳細な履歴、APIによる自動化、シンプルかつ現代的なデザインを備えています。([デモ](https://app.donetick.com/), [ソースコード](https://github.com/donetick/donetick)) `AGPL-3.0` `Go/Docker`
- [Focus Flow](https://github.com/francesco-gaglione/focus_flow_cloud) - ポモドーロ法による時間管理のための総合エコシステム。`MIT` `Docker/K8S`
- [HamsterBase Tasks](https://tasks.hamsterbase.com) - アイデアを整理し、計画から構築・提供までを支援するツール。原文では優れた成果を作るためのものと紹介されています。([デモ](https://tasks-app.hamsterbase.com), [ソースコード](https://github.com/hamsterbase/tasks)) `AGPL-3.0` `Docker`
- [Kan](https://kan.bn/) - 柔軟なカンバンアプリで、仕事の整理、進捗の追跡、成果物の達成をサポートします（Trelloの代替品）。([ソースコード](https://github.com/kanbn/kan)) `AGPL-3.0` `Docker`
- [Kanboard](https://kanboard.org/) - シンプルな視覚的なタスクボード。([ソースコード](https://github.com/kanboard/kanboard)) `MIT` `PHP`
- [Listaway](https://github.com/jeffrpowell/listaway/) - 項目のリストを作成・公開共有するアプリ（Amazon Listsの代替）。認証、管理ツール、項目のメモ・優先順位を備え、利用者が選んだ場合にランダムURLの公開用読み取り専用リンクを作成します。([ソースコード](https://github.com/jeffrpowell/listaway)) `MIT` `Docker`
- [myTinyTodo](https://www.mytinytodo.net/) - AJAXスタイルでToDoリストを管理するシンプルな方法。PHP、jQuery、SQLite/MySQLを使用。GTDに準拠しています。([デモ](https://www.mytinytodo.net/demo/), [ソースコード](https://github.com/maxpozdeev/mytinytodo/)) `GPL-2.0` `PHP`
- [Nullboard](https://github.com/apankrat/nullboard) - コンパクトで読みやすく、素早く利用できる、最小限の構成を持つ単一ページのカンバンボード。([デモ](https://nullboard.io/preview)) `BSD-2-Clause` `Javascript`
- [OpenHabitTracker](https://openhabittracker.net) - 時間追跡、カレンダー表示、完了統計を活用して習慣、タスク、ノートを追跡します。([デモ](https://pwa.openhabittracker.net), [ソースコード](https://github.com/Jinjinov/OpenHabitTracker)) `GPL-3.0` `Docker`
- [Our Shopping List](https://codeberg.org/nanawel/our-shopping-list) - 買い物リストなど、共同で使う小さなToDoリストを管理する、シンプルな共有リストアプリ。([デモ](https://osl.lanterne-rouge.info/)) `AGPL-3.0` `Docker`
- [Super Productivity](https://super-productivity.com) - 高度なToDoリストアプリで、時間ブロッキングと時間追跡機能を統合。Jira、GitHub、GitLab、Redmine、OpenProjectと統合されています。([ソースコード](https://github.com/super-productivity/super-productivity)) `MIT` `Docker`
- [Task Keeper](https://github.com/nymanjens/piga) - 自分でホストするサーバーを基盤とした、上級者向けリストエディター。`Apache-2.0` `Scala`
- [Tasks.md](https://github.com/BaldissaraMatheus/Tasks.md) - 自前サーバーで実行可能な、ファイルベースのタスク管理ボード。Markdown構文をサポートしています。`MIT` `Docker`
- [Taskwarrior](https://taskwarrior.org/) - コマンドラインからToDoリストを管理する、自由なオープンソースソフトウェア。原文では柔軟、高速、効率的で、必要な処理を終えると作業の邪魔をしないと紹介されています。([ソースコード](https://taskwarrior.org/download/#git)) `MIT` `C++`
- [Tellor](https://tellor.cc/) - シンプルでコンパクトなUIを持つ、単一ユーザー向けの最小限のカンバンToDoアプリ。Trelloからボードを取り込めます。([デモ](https://tellor.cc/demo/?b=18486f63be6bb5f2), [ソースコード](https://github.com/Voldrix/Tellor)) `MIT` `PHP`
- [Tracks](https://www.getontracks.org/) - David Allenの[Getting Things Done™](https://en.wikipedia.org/wiki/Getting_Things_Done)メソッドを実装するためのウェブベースアプリ。([ソースコード](https://github.com/TracksApp/tracks)) `GPL-2.0` `Ruby`
- [tududi](https://tududi.com/) - 階層構造を持つタスク管理ツール、スマート繰り返しタスク、Telegramとのシームレス統合を備えています。([ソースコード](https://github.com/chrisvel/tududi)) `MIT` `Docker`
- [Vikunja](https://vikunja.io/) - 日々の生活を整理するToDoアプリ。（[デモ](https://try.vikunja.io/login), [ソースコード](https://github.com/go-vikunja/vikunja)）`AGPL-3.0/GPL-3.0` `Go`
- [Wekan](https://wekan.github.io/) - オープンソースのTrello風カンバン。（[ソースコード](https://github.com/wekan/wekan)）`MIT` `Nodejs`
- [Will Be Done](https://will-be-done.app/) - オフライン優先のタスクマネージャー。週次計画、プロジェクトボード、リアルタイム同期、Vimキーバインディング、デスクトップでの迅速追加、および人気タスクマネージャーからのインポート（TickTick、Todoistの代替品）。（[デモ](https://demo.will-be-done.app/), [ソースコード](https://github.com/will-be-done/will-be-done)）`AGPL-3.0` `Docker/Nodejs`

### 問い合わせ・課題管理 <a id="ticketing"></a>

[ヘルプデスク](https://en.wikipedia.org/wiki/Help_desk_software)、[バグ](https://en.wikipedia.org/wiki/Bug_tracking_system)、[課題](https://en.wikipedia.org/wiki/Issue_tracking_system)の追跡ソフトウェアです。利用者の要望、バグ、不足している機能を追跡するために使います。

関連資料： [タスク管理とToDoリスト](#task-management--to-do-lists), [ソフトウェア開発：プロジェクト管理](#software-development---project-management)

- [BugPin](https://bugpin.io) - ウェブアプリケーション向けの視覚的なバグ報告およびチケット管理ツール。（[ソースコード](https://github.com/aranticlabs/bugpin)）`AGPL-3.0/MIT` `Docker`
- [Bugzilla](https://www.bugzilla.org/) - Mozillaプロジェクトで開発・利用された、汎用的なバグ追跡・テストツールです。（[ソースコード](https://github.com/bugzilla/bugzilla)）`MPL-2.0` `Perl`
- [Frappe Helpdesk](https://frappe.io/helpdesk) - 導入しやすく、分かりやすいUIと自動化ツールを備えるヘルプデスクソフトウェア。原文では企業のサポート業務を合理化し、顧客の問い合わせを効率的に解決すると紹介されています。（[ソースコード](https://github.com/frappe/helpdesk)）`AGPL-3.0` `Docker`
- [FreeScout](https://freescout.net/) - メールベースの顧客サポートアプリ、ヘルプデスク、共有メールボックス（ZendeskおよびHelp Scoutの代替品）。（[デモ](https://demo.freescout.net/login), [ソースコード](https://github.com/freescout-help-desk/freescout)）`AGPL-3.0` `PHP/Docker`
- [GlitchTip](https://glitchtip.com) - アプリから報告されたエラーを収集するためのエラー追跡アプリ。（[ソースコード](https://gitlab.com/glitchtip/glitchtip)）`MIT` `Python/Docker/K8S`
- [ITFlow](https://itflow.org) - MSP（マネージドサービスプロバイダー）向けのクライアントITドキュメント、チケット管理、請求書作成および会計。（[デモ](https://demo.itflow.org), [ソースコード](https://github.com/itflow-org/itflow)）`GPL-3.0` `PHP`
- [Libredesk](https://libredesk.io/) - 現代的なマルチチャネル顧客サポートデスク。ライブチャット、メールなど、すべてを1つのバイナリで提供。（[デモ](https://demo.libredesk.io), [ソースコード](https://github.com/abhinavxd/libredesk)）`AGPL-3.0` `Docker/Go/Nodejs`
- [MantisBT](https://www.mantisbt.org/) - バグトラッカー。ソフトウェア開発に最も適している。（[デモ](https://www.mantisbt.org/bugs/my_view_page.php), [ソースコード](https://github.com/mantisbt/mantisbt)）`GPL-2.0` `PHP`
- [OTOBO](https://otobo.io/en/) - 顧客サービス、ヘルプデスク、ITサービス管理に使用される柔軟なウェブベースのチケットシステム。（[デモ](https://otobo.io/en/service-management-plattform/otobo-demo/), [ソースコード](https://github.com/RotherOSS/otobo)）`GPL-3.0` `Perl/Docker`
- [Request Tracker](https://www.bestpractical.com/rt/) - 企業レベルの問題追跡システム。（[ソースコード](https://github.com/bestpractical/rt)）`GPL-2.0` `Perl`
- [Roundup Issue Tracker](https://www.roundup-tracker.org/) - コマンドライン、Web、REST、XML-RPC、メールのインターフェースを備えた課題追跡システム。使いやすく導入しやすい設計で、原文では単なるバグ追跡にとどまらない柔軟なものと紹介されています。（[ソースコード](https://www.roundup-tracker.org/code.html)）`MIT/ZPL-2.0` `Python/Docker`
- [Zammad](https://zammad.org/) - 使いやすく、強力なオープンソースサポートおよびチケット管理システム。（[ソースコード](https://github.com/zammad/zammad)）`AGPL-3.0` `Ruby/deb`

### 時間記録 <a id="time-tracking"></a>

[時間記録ソフトウェア](https://en.wikipedia.org/wiki/Time-tracking_software)は、タスクやプロジェクトに費やした時間を記録するために使います。

- [ActivityWatch](https://activitywatch.net) - デバイス上で過ごす時間の使い方を自動的に追跡。（[ソースコード](https://github.com/ActivityWatch/activitywatch)）`MPL-2.0` `Python`
- [Beaver Habit Tracker](https://github.com/daya0576/beaverhabits) - 大切な瞬間を保存する習慣管理アプリ。（[デモ](https://beaverhabits.com/demo)）`BSD-3-Clause` `Docker`
- [Ever Gauzy](https://gauzy.co) - 協働型、オンデマンド型、シェアリングエコノミー向けのオープンなビジネスマネジメントプラットフォーム（ERP/CRM/HRM/ATS/PM）。（[デモ](https://demo.gauzy.co), [ソースコード](https://github.com/ever-co/ever-gauzy)）`AGPL-3.0` `Docker/Nodejs`
- [Kimai](https://www.kimai.org/) - 業務時間の記録を行い、必要に応じて活動の要約を印刷できる。（[デモ](https://www.kimai.org/demo/), [ソースコード](https://github.com/kimai/kimai)）`AGPL-3.0` `PHP`
- [solidtime](https://www.solidtime.io) - フリーランスや代理店・受託企業向けの時間記録アプリです。（[ソースコード](https://github.com/solidtime-io/solidtime)）`AGPL-3.0` `Docker`
- [TimeTagger](https://timetagger.app) - オープンソースのタイムトラッカーで、インタラクティブなタイムラインと強力なレポート機能を備えたもの。（[デモ](https://timetagger.app/app/demo)，[ソースコード](https://github.com/almarklein/timetagger)）`GPL-3.0` `Python`
- [Traggo](https://traggo.net/) - タグを付けた時間区間で時間を記録するツール。タスクという単位は使いません。（[ソースコード](https://github.com/traggo/server)）`GPL-3.0` `Docker/Go`
- [Wakapi](https://wakapi.dev/) - コーディング統計用のトラッキングツールで、WakaTimeと互換性があります。（[ソースコード](https://github.com/muety/wakapi)）`GPL-3.0` `Go/Docker`
- [Ziit](https://ziit.app) - コードを書く時間を記録するツール（WakaTimeの代替）。原文では多用途の「スイスアーミーナイフ」に例えています。（[ソースコード](https://github.com/0pandadev/ziit)）`AGPL-3.0` `Docker`

### 旅行の計画 <a id="travel-organization"></a>

旅行の予約を記録し、旅程を確認し、活動を計画し、支出を追跡するソフトウェアです。

関連資料： [予約と日程調整](#booking-and-scheduling), [地図と全地球測位システム（GPS）](#maps-and-global-positioning-system-gps)

- [Surmai](https://surmai.app/) - 協働型の個人および家族向け旅行計画ツール。（[デモ](https://demo.surmai.app)，[ソースコード](https://github.com/rohitkumbhar/surmai)）`MIT` `Docker`

### URL短縮 <a id="url-shorteners"></a>

[URL短縮](https://en.wikipedia.org/wiki/URL_shortening)は、目的のページへのリンクを維持したまま[URL](https://en.wikipedia.org/wiki/Uniform_Resource_Locator)を大幅に短くすることです。サービスをセルフホストする前に、URL短縮の[欠点](https://en.wikipedia.org/wiki/URL_shortening#Disadvantages)も確認してください。

- [bit](https://github.com/sjdonado/bit) - 高速で軽量であり、リソース効率の高いコンパイル済みのURL短縮ツール。`MIT` `Docker/Crystal`
- [Chhoto URL](https://chhoto.link) - 余分な機能を抑えたシンプルなURL短縮ツール（simply-shortenのフォーク）。原文では非常に高速と紹介されています。（[デモ](https://github.com/SinTan1729/chhoto-url?tab=readme-ov-file#demo)，[ソースコード](https://github.com/SinTan1729/chhoto-url)，[クライアント](https://github.com/SinTan1729/chhoto-url/blob/main/TOOLS.md)）`MIT` `Rust/Docker`
- [clink](https://git.crueter.xyz/crueter/clink) - 純粋なC言語で書かれた超ミニマムなリンク短縮サービスで、実行ファイルサイズの小ささ、ポータビリティ、設定の容易さに焦点を当てています。（[デモ](https://short.crueter.xyz)）`AGPL-3.0` `C`
- [Flink](https://gitlab.com/rtraceio/web/flink) - QRコード、Webサイトへ埋め込むリンクプレビューの作成と、メタデータの巡回収集を行うツール。（[デモ](https://flink.is)）`MIT` `Docker`
- [Kutt](https://kutt.to) - カスタムドメインとカスタムURLをサポートする現代的なURL短縮ツール。（[デモ](https://kutt.to)，[ソースコード](https://github.com/thedevs-network/kutt)）`MIT` `Nodejs/Docker`
- [rs-short](https://git.42l.fr/42l/rs-short) - Rustで書かれた軽量リンク短縮ツールで、キャッシュ、スパムボット防止、フィッシング検出などの機能を備えています。（[デモ](https://s.42l.fr/)）`MPL-2.0` `Rust`
- [Shlink](https://shlink.io) - REST APIおよびコマンドラインインターフェースを備えたURL短縮ツール。公式のプログレッシブウェブアプリケーションおよびDockerイメージを含む。（[ソースコード](https://github.com/shlinkio/shlink)，[クライアント](https://shlink.io/apps)）`MIT` `PHP/Docker`
- [Simple-URL-Shortener](https://github.com/azlux/Simple-URL-Shortener) - シンプルさを重視する、軽量なURL短縮ツール。公開利用と、アカウントを用いる私的利用に対応し、依存関係はありません。（[デモ](https://u.azlux.fr)）`MIT` `PHP`
- [YOURLS](https://yourls.org/) - YOURLSはPHPスクリプトのセットで、あなた自身のURL短縮ツールを実行できるようにします。機能にはパスワード保護、URLカスタマイズ、ブックマークレット、統計、API、プラグイン、JSONPが含まれます。（[ソースコード](https://github.com/YOURLS/YOURLS)）`MIT` `PHP`

### 監視カメラ <a id="video-surveillance"></a>

動画監視は、[閉回路テレビ（CCTV）](https://en.wikipedia.org/wiki/Closed-circuit_television)とも呼ばれます。追加のセキュリティや継続的な見守りが必要な場所を、カメラで監視することです。

関連資料： [メディアのストリーミング：動画](#media-streaming---video-streaming)

- [Bluecherry](https://www.bluecherrydvr.com/) - IPカメラとアナログカメラに対応する、監視カメラ（CCTV）ソフトウェアです。（[ソースコード](https://github.com/bluecherrydvr/bluecherry-apps)）`GPL-2.0` `PHP`
- [Frigate](https://frigate.video/) - ローカルで処理されたAIを使ってセキュリティカメラを監視します。（[ソースコード](https://github.com/blakeblackshear/frigate)）`MIT` `Docker/Python/Nodejs`
- [motionEye](https://github.com/motioneye-project/motioneye) - ソフトウェアMotion（動画監視プログラムで動き検知機能を備えたもの）のオンラインインターフェース。`GPL-3.0` `Python/Docker`
- [Secluso](https://secluso.com) - Raspberry Pi向けの個人用DIY監視カメラシステム。エンドツーエンド暗号化を使う遠隔アクセスと、ライブ動画、通知、録画再生のためのモバイルアプリを備えています。（[ソースコード](https://github.com/secluso/core)）`GPL-3.0` `Rust`
- [SentryShot](https://codeberg.org/SentryShot/sentryshot) - 動画監視管理システム。`GPL-2.0` `Docker/Rust`
- [Strix](https://github.com/eduard256/Strix) - IPカメラの動作するストリームURLを自動検出し、Frigateおよびgo2rtc用の即時使用可能な設定ファイルを生成します。`MIT` `Go/Docker`
- [Viseron](https://viseron.netlify.app/) - 物体検出、動体検知、顔認識などを備える、セルフホスト型のローカル専用NVR・AIコンピュータービジョンソフトウェア。自宅、事務所などを監視するためのツールです。([ソースコード](https://github.com/roflcoopter/viseron)) `MIT` `Docker`
- [Zoneminder](https://www.zoneminder.com/) - IP、USB、アナログカメラに対応する、監視カメラ（CCTV）ソフトウェアです。([ソースコード](https://github.com/ZoneMinder/ZoneMinder)) `GPL-2.0` `PHP/deb`

### VPN

[仮想プライベートネットワーク（VPN）](https://en.wikipedia.org/wiki/Virtual_private_network)は、プライベートネットワークをパブリックネットワーク経由で拡張します。共有・公開ネットワーク上でも、機器がプライベートネットワークに直接接続されているかのようにデータを送受信できます。

関連資料： [awesome-sysadmin/VPN](https://github.com/awesome-foss/awesome-sysadmin#vpn)

### Webサーバー <a id="web-servers"></a>

[Webサーバー](https://en.wikipedia.org/wiki/Web_server)は、Webコンテンツの配信に使う[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)、またはその暗号化版[HTTPS](https://en.wikipedia.org/wiki/HTTPS)でリクエストを受け取るソフトウェアと、その基盤となるハードウェアです。[リバースプロキシ](https://en.wikipedia.org/wiki/Reverse_proxy)はクライアントからは通常のWebサーバーに見えますが、実際には一つ以上のWebサーバーへリクエストを転送する仲介役です。

関連資料： [プロキシ](#proxy)

- [Algernon](https://algernon.roboticoverlords.org/) - Goだけで実装された、小型で自己完結したWebサーバー。Lua、Markdown、HTTP/2、QUIC、Redis、PostgreSQLに対応します。([ソースコード](https://github.com/xyproto/algernon)) `BSD-3-Clause` `Go/Docker`
- [Apache HTTP Server](https://httpd.apache.org/) - HTTPサービスを提供する拡張可能なサーバー。固定原文では安全で効率的であり、当時のHTTP標準に対応すると紹介されています。([ソースコード](https://svn.apache.org/repos/asf/httpd/httpd/trunk/)) `Apache-2.0` `C/deb/Docker`
- [BunkerWeb](https://www.bunkerweb.io) - Webサービスを保護するWebアプリケーションファイアウォール（WAF）。原文では「次世代」と紹介されています。([デモ](https://demo.bunkerweb.io), [ソースコード](https://github.com/bunkerity/bunkerweb), [クライアント](https://docs.bunkerweb.io/latest/plugins/)) `AGPL-3.0` `deb/Docker/K8S/Python`
- [Caddy](https://caddyserver.com/) - HTTPSを自動設定するオープンソースWebサーバー。原文では強力で企業利用に対応すると紹介されています。([ソースコード](https://github.com/caddyserver/caddy)) `Apache-2.0` `Go/deb/Docker`
- [Ferron](https://ferron.sh/) - Rust製のWebサーバー。原文では高速でメモリ安全と紹介されています。([ソースコード](https://github.com/ferronweb/ferron)) `MIT` `Rust/Docker/deb`
- [go-doxy](https://github.com/yusing/godoxy) - Web UI、Docker統合、トラフィックに応じたコンテナの自動停止・起動を備えるリバースプロキシ。原文では軽量、シンプル、高性能と紹介されています。 `MIT` `Docker/Go`
- [godoxy](https://docs.godoxy.dev/) - セルフホスト向けのリバースプロキシとコンテナオーケストレーター。原文では高性能と紹介されています。([デモ](https://demo.godoxy.dev/), [ソースコード](https://github.com/yusing/godoxy)) `MIT` `Docker/Go`
- [HAProxy](https://www.haproxy.org/) - TCP・HTTPアプリケーション向けに高可用性、負荷分散、プロキシ機能を提供するリバースプロキシ。原文では非常に高速で信頼性が高いと紹介されています。([ソースコード](https://git.haproxy.org/?p=haproxy.git;a=tree)) `GPL-2.0` `C/deb/Docker`
- [Lighttpd](https://www.lighttpd.net/) - 高性能な環境向けに最適化されたWebサーバー。原文では安全、高速、標準準拠で柔軟性が高いと紹介されています。([ソースコード](https://git.lighttpd.net/lighttpd/lighttpd1.4)) `BSD-3-Clause` `C/deb/Docker`
- [Nginx Proxy Manager](https://nginxproxymanager.com/) - Nginxプロキシホストを管理するためのDockerコンテナで、シンプルで強力なインターフェースを提供します。([ソースコード](https://github.com/NginxProxyManager/nginx-proxy-manager)) `MIT` `Docker`
- [NGINX](https://nginx.org/en/) - HTTPサーバーとリバースプロキシ、メールプロキシ、汎用TCP・UDPプロキシサーバー。([ソースコード](https://github.com/nginx/nginx)) `BSD-2-Clause` `C/deb/Docker`
- [Pangolin](https://digpangolin.com/) - ダッシュボードUI、アクセス制御、WireGuardによるトンネルを備える、IDに基づいてアクセスを制御するトンネル型リバースプロキシ（Cloudflare Tunnel、Tailscaleの代替）。([ソースコード](https://github.com/fosrl/pangolin)) `AGPL-3.0` `Docker`
- [Pomerium](https://www.pomerium.io) - IDに基づいてアクセスを制御するリバースプロキシ。バックエンドへの転送前にOAuthの認証段階を挿入してセルフホストのWebサイトの公開を保護します。固定原文では、当時すでに廃止されたoauth_proxyの後継と紹介されています。([ソースコード](https://github.com/pomerium/pomerium)) `Apache-2.0` `Go/Docker`
- [SafeLine](https://waf.chaitin.com/) - Webアプリへの攻撃や脆弱性の悪用を防ぐための、Webアプリケーションファイアウォールとリバースプロキシ。([デモ](https://demo.waf.chaitin.com/), [ソースコード](https://github.com/chaitin/SafeLine)) `GPL-3.0` `Docker`
- [Static Web Server](https://static-web-server.net/) - 静的ファイルを配信する、クロスプラットフォームの非同期Webサーバー。原文では高性能と紹介されています。([ソースコード](https://github.com/static-web-server/static-web-server)) `Apache-2.0/MIT` `Rust/Docker`
- [SWAG (Secure Web Application Gateway)](https://github.com/linuxserver/docker-swag) - NginxウェブサーバーおよびリバースプロキシでPHPサポート、内蔵Certbot（Let's Encrypt）クライアントおよびfail2ban統合を備えています。`GPL-3.0` `Docker`
- [Traefik](https://traefik.io/) - マイクロサービスを導入しやすくするHTTPリバースプロキシとロードバランサー。([ソースコード](https://github.com/traefik/traefik)) `MIT` `Go/Docker`
- [UUSEC WAF](https://waf.uusec.com/) - AIと意味解析技術を用いるWebアプリケーションファイアウォール・APIセキュリティゲートウェイ（nginxのフォーク）。原文では業界をリードする高性能の製品と紹介されています。([ソースコード](https://github.com/Safe3/uusec-waf)) `GPL-3.0` `C/Lua/Docker`
- [Vinyl Cache](https://vinyl-cache.org/) - Webアプリケーションアクセラレーター兼キャッシュ型HTTPリバースプロキシ。固定原文では旧称をVarnishとしています。（[ソースコード](https://code.vinyl-cache.org/vinyl-cache/vinyl-cache)） `BSD-2-Clause` `Go/deb/Docker`
- [Zoraxy](https://zoraxy.aroz.org/) - 一般用途のHTTPリバースプロキシおよびフォワーディングツール。（[ソースコード](https://github.com/tobychui/zoraxy)） `AGPL-3.0` `Go/Docker`

### Wiki <a id="wikis"></a>

[Wiki](https://en.wikipedia.org/wiki/Wiki)は、閲覧する人々がWebブラウザーで直接、共同編集・管理する出版物です。

関連資料： [ノートとエディター](#note-taking--editors), [静的サイトジェネレーター](#static-site-generators), [知識管理ツール](#knowledge-management-tools)

関連資料： [Wikimatrix](https://www.wikimatrix.org/), [Wikiソフトウェアの一覧（Wikipedia）](https://en.wikipedia.org/wiki/List_of_wiki_software), [Wikiソフトウェアの比較（Wikipedia）](https://en.wikipedia.org/wiki/Comparison_of_wiki_software)

- [AmuseWiki](https://amusewiki.org/) - Emacs Museのマークアップを基盤とし、元の実装とほぼ互換性を維持するWiki。読み取り専用サイト、管理者が投稿を確認するWiki、完全に開かれたWiki、私的サイトとして運用できます。（[デモ](https://sandbox.amusewiki.org), [ソースコード](https://github.com/melmothx/amusewiki)） `GPL-1.0` `Perl/Docker`
- [BookStack](https://www.bookstackapp.com/) - 情報を整理・保存するツール。文書を本のような構造で保管します。（[デモ](https://www.bookstackapp.com/#demo), [ソースコード](https://codeberg.org/bookstack/bookstack)） `MIT` `PHP/Docker`
- [django-wiki](https://github.com/django-wiki/django-wiki) - Djangoモデルを利用して知識を保存する、豊富な機能を備えたWikiシステム。原文では統合しやすく、優れたインターフェースを備えると紹介されています。（[デモ](https://demo.django-wiki.org/)） `GPL-3.0` `Python`
- [docmost Community Edition](https://docmost.com/) - 協働ウィキおよびドキュメントソフトウェア（Confluence、Notionへの代替）。（[ソースコード](https://github.com/docmost/docmost)） `AGPL-3.0` `Docker/Nodejs`
- [Documize](https://documize.com) - ワークフローを内蔵した文書管理・Wikiソフトウェア。単一バイナリで動作し、MySQLまたはPerconaを別途用意して利用します。（[ソースコード](https://github.com/documize/community)） `AGPL-3.0` `Go`
- [Dokuwiki](https://www.dokuwiki.org/DokuWiki) - 使いやすく、軽量で標準に準拠したウィキエンジン。シンプルな構文により、データをウィキの外で読むことが可能。すべてのデータはプレーンテキストファイルに保存されているため、データベースは不要です。（[ソースコード](https://github.com/dokuwiki/dokuwiki)） `GPL-2.0` `PHP`
- [Feather Wiki](https://feather.wiki) - ブラウザー内で完結する、個人用の非線形ノート、データベース、Wikiを作るツール。固定原文ではサイズが58キロバイトで、非常に高速かつ無限に拡張できると紹介されています。（[デモ](https://feather.wiki/?page=gallery#wikis), [ソースコード](https://codeberg.org/Alamantus/FeatherWiki), [クライアント](https://feather.wiki/?page=gallery#extensions)） `AGPL-3.0` `Javascript`
- [Gitit](https://github.com/jgm/gitit) - ページとアップロードファイルをGitリポジトリに保存するウィキシステム。その後、VCSコマンドラインツールまたはウィキのウェブインターフェースを使って変更可能です。`GPL-2.0` `Haskell`
- [Gollum](https://github.com/gollum/gollum) - シンプルでGitを活用したウィキ。優れたAPIとローカルフロントエンドを備えています。`MIT` `Ruby`
- [LeafWiki](https://github.com/perber/leafwiki) - フィードよりもフォルダー構造で情報を考える人向けのWiki。ツリー構造で移動でき、Markdownをディスクに保存します。原文ではWiki自体と編集操作が高速と紹介されています。（[デモ](https://demo.leafwiki.com)） `MIT` `Docker/Go`
- [Mediawiki](https://www.mediawiki.org/wiki/MediaWiki) - Wikipediaとその他のWikimediaプロジェクトを支えるWikiソフトウェア。固定原文では毎月数億人の利用者にサービスを提供すると紹介されています。（[デモ](https://en.wikipedia.org/wiki/Main_Page), [ソースコード](https://phabricator.wikimedia.org/source/mediawiki/)） `GPL-2.0` `PHP`
- [Mycorrhiza Wiki](https://mycorrhiza.wiki/) - Mycomarkupを主なマークアップ言語とする、Go製のファイルシステム・GitベースのWikiエンジン。（[ソースコード](https://github.com/bouncepaw/mycorrhiza/)） `AGPL-3.0` `Go`
- [Otter Wiki](https://otterwiki.com/) - Markdownを使う、シンプルで使いやすいWikiソフトウェア。（[ソースコード](https://github.com/redimp/otterwiki)） `MIT` `Docker`
- [PmWiki](https://www.pmwiki.org) - ウェブサイトの協働作成および維持に用いるウィキベースシステム。`GPL-3.0` `PHP`
- [Raneto](https://raneto.com/) - 静的なMarkdownファイルを使うナレッジベース基盤。（[ソースコード](https://github.com/ryanlelek/Raneto)） `MIT` `Nodejs`
- [TiddlyWiki](https://tiddlywiki.com/) - 再利用可能な非線形個人用ウェブノートブック。（[ソースコード](https://github.com/TiddlyWiki/TiddlyWiki5)） `BSD-3-Clause` `Nodejs`
- [Tiki](https://tiki.org/HomePage) - Wiki・CMS・グループウェア。原文では組み込み機能が最も多いと紹介されています。（[デモ](https://tiki.org/Try-Tiki), [ソースコード](https://gitlab.com/tikiwiki/tiki)） `LGPL-2.1` `PHP`
- [W](https://w.club1.fr) - 軽量で複数利用者に対応する、フラットファイルデータベースを使うWikiエンジン。ページを素早く作り、WebブラウザーでMarkdown・HTML・CSS・JSを使って編集できます。原文では、ページごとのスタイル調整を他のWikiとの主な違いとして挙げています。（[ソースコード](https://github.com/vincent-peugnet/wcms)） `AGPL-3.0` `PHP`
- [WackoWiki](https://wackowiki.org/) - WackoWikiは軽量で設置が簡単な多言語Wikiエンジンです。（[ソースコード](https://github.com/WackoWiki/wackowiki)） `BSD-3-Clause` `PHP`
- [Wiki-Go](https://leomoon.com/downloads/web-apps/wiki-go/) - 現代的で機能が豊かで、データベースを使わないフラットファイルWikiプラットフォームです。（[デモ](https://wikigo.leomoon.com), [ソースコード](https://github.com/leomoon-studios/wiki-go)） `GPL-3.0` `Go/Docker`
- [Wiki.js](https://js.wiki/) - 現代的で軽量かつ強力なWikiアプリ。GitとMarkdownを使用しています。（[デモ](https://docs.requarks.io), [ソースコード](https://github.com/Requarks/wiki)） `AGPL-3.0` `Nodejs/Docker/K8S`
- [WikiDocs](https://www.wikidocs.app/) - データベースを使わないMarkdownフラットファイルWikiエンジンです。（[ソースコード](https://github.com/Zavy86/WikiDocs)） `MIT` `PHP/Docker`
- [WiKiss](https://wikiss.tuxfamily.org/) - Wikiで、使いやすく設置も簡単です。（[ソースコード](https://svnweb.tuxfamily.org/listing.php?repname=wikiss/svn&path=%2F&sc=0)） `GPL-2.0` `PHP`
- [XWiki](https://www.xwiki.org) - 拡張機能に基づくアーキテクチャで利用者が機能を追加できるWiki。原文では強力な拡張機構を持つ「第2世代」のWikiと紹介されています。（[デモ](https://www.xwikiplayground.org/xwiki/bin/view/Main/), [ソースコード](https://github.com/xwiki/xwiki-platform)） `LGPL-2.1` `Java/Docker/deb`
- [Zim](https://zim-wiki.org/) - Wikiページのコレクションを維持するためのグラフィカルテキストエディタ。各ページには他のページへのリンク、簡単なフォーマット、画像が含まれます。（[ソースコード](https://github.com/zim-desktop-wiki/zim-desktop-wiki)） `GPL-2.0` `Python/deb`

## ライセンスの凡例 <a id="list-of-licenses"></a>

- `0BSD` - [BSD Zero-Clause Licence](https://spdx.org/licenses/0BSD.html)
- `AAL` - [Attribution Assurance License](https://spdx.org/licenses/AAL.html)
- `AGPL-3.0` - [GNU Affero General Public License 3.0](https://spdx.org/licenses/AGPL-3.0.html)
- `Apache-2.0` - [Apache, Version 2.0](https://spdx.org/licenses/Apache-2.0.html)
- `APSL-2.0` - [Apple Public Source License, Version 2.0](https://spdx.org/licenses/APSL-2.0.html)
- `Artistic-2.0` - [Artistic License Version 2.0](https://spdx.org/licenses/Artistic-2.0.html)
- `Beerware` - [Beerware License](https://spdx.org/licenses/Beerware.html)
- `BSD-2-Clause` - [BSD 2-clause "Simplified"](https://spdx.org/licenses/BSD-2-Clause.html)
- `BSD-2-Clause-FreeBSD` - [BSD 2-Clause FreeBSD License](https://spdx.org/licenses/BSD-2-Clause-FreeBSD.html)
- `BSD-3-Clause` - [BSD 3-Clause "New" or "Revised"](https://spdx.org/licenses/BSD-3-Clause.html)
- `BSD-3-Clause-Attribution` - [BSD with attribution](https://spdx.org/licenses/BSD-3-Clause-Attribution.html)
- `BSD-4-Clause` - [BSD 4-clause "Original"](https://spdx.org/licenses/BSD-4-Clause.html)
- `CAL-1.0` - [Cryptographic Autonomy License 1.0](https://spdx.org/licenses/CAL-1.0.html)
- `CC-BY-SA-3.0` - [Creative Commons Attribution-ShareAlike 3.0 License](https://spdx.org/licenses/CC-BY-SA-3.0.html)
- `CC-BY-SA-4.0` - [Creative Commons Attribution-ShareAlike 4.0 License](https://spdx.org/licenses/CC-BY-SA-4.0.html)
- `CC0-1.0` - [Public Domain/Creative Common Zero 1.0](https://spdx.org/licenses/CC0-1.0.html)
- `CDDL-1.0` - [Common Development and Distribution License](https://spdx.org/licenses/CDDL-1.0.html)
- `CECILL-B` - [CEA CNRS INRIA Logiciel Libre](https://spdx.org/licenses/CECILL-B.html)
- `CPAL-1.0` - [Common Public Attribution License Version 1.0](https://spdx.org/licenses/CPAL-1.0.html)
- `ECL-2.0` - [Educational Community License, Version 2.0](https://spdx.org/licenses/ECL-2.0.html)
- `EPL-1.0` - [Eclipse Public License, Version 1.0](https://spdx.org/licenses/EPL-1.0.html)
- `EPL-2.0` - [Eclipse Public License, Version 2.0](https://spdx.org/licenses/EPL-2.0.html)
- `EUPL-1.2` - [European Union Public License 1.2](https://spdx.org/licenses/EUPL-1.2.html)
- `GPL-1.0` - [GNU General Public License 1.0](https://spdx.org/licenses/GPL-1.0.html)
- `GPL-2.0` - [GNU General Public License 2.0](https://spdx.org/licenses/GPL-2.0.html)
- `GPL-3.0` - [GNU General Public License 3.0](https://spdx.org/licenses/GPL-3.0.html)
- `IPL-1.0` - [IBM Public License](https://spdx.org/licenses/IPL-1.0.html)
- `ISC` - [Internet Systems Consortium License](https://spdx.org/licenses/ISC.html)
- `LGPL-2.1` - [Lesser General Public License 2.1](https://spdx.org/licenses/LGPL-2.1.html)
- `LGPL-3.0` - [Lesser General Public License 3.0](https://spdx.org/licenses/LGPL-3.0.html)
- `MIT` - [MIT License](https://spdx.org/licenses/MIT.html)
- `MPL-1.1` - [Mozilla Public License Version 1.1](https://spdx.org/licenses/MPL-1.1.html)
- `MPL-2.0` - [Mozilla Public License](https://spdx.org/licenses/MPL-2.0.html)
- `OSL-3.0` - [Open Software License 3.0](https://spdx.org/licenses/OSL-3.0.html)
- `Sendmail` - [Sendmail License](https://spdx.org/licenses/Sendmail.html)
- `Ruby` - [Ruby License](https://spdx.org/licenses/Ruby.html)
- `Unlicense` - [The Unlicense](https://spdx.org/licenses/Unlicense.html)
- `WTFPL` - [Do What the Fuck You Want to Public License](https://spdx.org/licenses/WTFPL.html)
- `Zlib` - [Zlib/libpng License](https://spdx.org/licenses/Zlib.html)
- `ZPL-2.0` - [Zope Public License 2.0](https://spdx.org/licenses/ZPL-2.0.html)

## 外部サービスへの依存 <a id="anti-features"></a>

- `外部プロプライエタリサービス依存`：利用者が制御できないプロプライエタリサービスに依存します。

## 関連する外部資料 <a id="external-links"></a>

- awesome-selfhostedのアプリを探し、絞り込むための別のフロントエンド・ポータル： [awweso.me](https://awweso.me/), [awesome-web.theravenhub](https://awesome-web.theravenhub.com/browse.html), [awesomehub.web.app](https://awesomehub.js.org/list/selfhosted)
- [Awesome Sysadmin](https://github.com/awesome-foss/awesome-sysadmin) - オープンソースのシステム管理資料を分類したリスト。原文では優れた資料を集めたものと紹介されています。
- プライバシーや分散化を目的とするソフトウェアのリスト： [PRISM Break](https://prism-break.org/en/), [privacytools.io](https://www.privacytools.io/), [Alternative Internet](https://redecentralize.github.io/alternative-internet/), [Libre Projects](https://libreprojects.net/), [Easy Indie App](https://easyindie.app)
- その他のAwesomeリスト： [Awesome Big Data](https://github.com/0xnr/awesome-bigdata), [Awesome Public Datasets](https://github.com/awesomedata/awesome-public-datasets)
- 動的DNSサービス： [Afraid.org](https://freedns.afraid.org/domain/registry/), [Pagekite](https://pagekite.net/)
- コミュニティとフォーラム： [lemmy.worldの/c/selfhosted](https://lemmy.world/c/selfhosted), [lemmy.mlの/c/selfhost](https://lemmy.ml/c/selfhost), [Redditの/r/selfhosted](https://old.reddit.com/r/selfhosted/), [/r/selfhostedのMatrixチャンネル](https://matrix.to/#/#selfhosted:selfhosted.chat), [Redditの/r/homelab](https://old.reddit.com/r/homelab/), [IndieWeb](https://indieweb.org/)
- [theme.park](https://theme-park.dev/) - 固定原文では50種類のセルフホストアプリ向けに提供されている、テーマとスキンのコレクション。（[ソースコード](https://github.com/GilbN/theme.park/)） `MIT` `CSS`
