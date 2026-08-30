---
title: "awesome-selfhosted/awesome-selfhosted"
description: "自分でホストできるフリーソフトウェアのサービスとWebアプリケーション集"
licenseSource: "github-awesome-selfhosted-awesome-selfhosted-readme-md"
---

# Awesome-Selfhosted

[![Awesome](https://github.com/awesome-selfhosted/awesome-selfhosted/blob/adecb7edf1371a04893a32f744028f2d6cf4ea81/_static/awesome.png)](https://github.com/sindresorhus/awesome) [![](https://github.com/awesome-selfhosted/awesome-selfhosted-data/actions/workflows/check-dead-links.yml/badge.svg)](https://github.com/awesome-selfhosted/awesome-selfhosted-data/issues/1) [![](https://github.com/awesome-selfhosted/awesome-selfhosted-data/actions/workflows/check-unmaintained-projects.yml/badge.svg)](https://github.com/awesome-selfhosted/awesome-selfhosted-data/issues/1) [![](https://img.shields.io/liberapay/goal/awesome-selfhosted.svg?logo=liberapay)](https://liberapay.com/awesome-selfhosted/)

セルフホスティングとは、アプリケーションを自社のサーバー上でホスト・管理する practice であり、 [SaaSS](https://www.gnu.org/philosophy/who-does-that-server-really-serve.html) 提供者からサービスを消費するのではなく、それを行うことである。

これは、自社サーバー上にホストできる [Free](https://en.wikipedia.org/wiki/Free_software) ソフトウェア [network services](https://en.wikipedia.org/wiki/Network_service) および [web applications](https://en.wikipedia.org/wiki/Web_application) のリストです。非フリーソフトウェアは [Non-Free](https://github.com/awesome-selfhosted/awesome-selfhosted/blob/master/non-free.md) ページに掲載されています。

**[HTML version](https://awesome-selfhosted.net/) (推奨)**, [Markdown version](https://github.com/awesome-selfhosted/awesome-selfhosted) (古い)

[Contributing](#contributing)を参照してください。

--------------------

## Table of contents

- [Software](#software)
  - [Analytics](#analytics)
  - [Archiving and Digital Preservation (DP)](#archiving-and-digital-preservation-dp)
  - [Automation](#automation)
  - [Backup](#backup)
  - [Blogging Platforms](#blogging-platforms)
  - [Booking and Scheduling](#booking-and-scheduling)
  - [Bookmarks and Link Sharing](#bookmarks-and-link-sharing)
  - [Calendar & Contacts](#calendar--contacts)
  - [Communication - Custom Communication Systems](#communication---custom-communication-systems)
  - [Communication - Email - Complete Solutions](#communication---email---complete-solutions)
  - [Communication - Email - Mail Delivery Agents](#communication---email---mail-delivery-agents)
  - [Communication - Email - Mail Transfer Agents](#communication---email---mail-transfer-agents)
  - [Communication - Email - Mailing Lists and Newsletters](#communication---email---mailing-lists-and-newsletters)
  - [Communication - Email - Webmail Clients](#communication---email---webmail-clients)
  - [Communication - IRC](#communication---irc)
  - [Communication - SIP](#communication---sip)
  - [Communication - Social Networks and Forums](#communication---social-networks-and-forums)
  - [Communication - Video Conferencing](#communication---video-conferencing)
  - [Communication - XMPP - Servers](#communication---xmpp---servers)
  - [Communication - XMPP - Web Clients](#communication---xmpp---web-clients)
  - [Community-Supported Agriculture (CSA)](#community-supported-agriculture-csa)
  - [Conference Management](#conference-management)
  - [Content Management Systems (CMS)](#content-management-systems-cms)
  - [Customer Relationship Management (CRM)](#customer-relationship-management-crm)
  - [Database Management](#database-management)
  - [DNS](#dns)
  - [Document Management](#document-management)
  - [Document Management - E-books](#document-management---e-books)
  - [Document Management - Institutional Repository and Digital Library Software](#document-management---institutional-repository-and-digital-library-software)
  - [Document Management - Integrated Library Systems (ILS)](#document-management---integrated-library-systems-ils)
  - [E-commerce](#e-commerce)
  - [Federated Identity & Authentication](#federated-identity--authentication)
  - [Feed Readers](#feed-readers)
  - [File Transfer & Synchronization](#file-transfer--synchronization)
  - [File Transfer - Distributed Filesystems](#file-transfer---distributed-filesystems)
  - [File Transfer - Object Storage & File Servers](#file-transfer---object-storage--file-servers)
  - [File Transfer - Peer-to-peer Filesharing](#file-transfer---peer-to-peer-filesharing)
  - [File Transfer - Single-click & Drag-n-drop Upload](#file-transfer---single-click--drag-n-drop-upload)
  - [File Transfer - Web-based File Managers](#file-transfer---web-based-file-managers)
  - [Games](#games)
  - [Games - Administrative Utilities & Control Panels](#games---administrative-utilities--control-panels)
  - [Genealogy](#genealogy)
  - [Generative Artificial Intelligence (GenAI)](#generative-artificial-intelligence-genai)
  - [Groupware](#groupware)
  - [Health and Fitness](#health-and-fitness)
  - [Human Resources Management (HRM)](#human-resources-management-hrm)
  - [Identity Management](#identity-management)
  - [Internet of Things (IoT)](#internet-of-things-iot)
  - [Inventory Management](#inventory-management)
  - [Knowledge Management Tools](#knowledge-management-tools)
  - [Learning and Courses](#learning-and-courses)
  - [Manufacturing](#manufacturing)
  - [Maps and Global Positioning System (GPS)](#maps-and-global-positioning-system-gps)
  - [Media Management](#media-management)
  - [Media Streaming](#media-streaming)
  - [Media Streaming - Audio Streaming](#media-streaming---audio-streaming)
  - [Media Streaming - Multimedia Streaming](#media-streaming---multimedia-streaming)
  - [Media Streaming - Video Streaming](#media-streaming---video-streaming)
  - [Miscellaneous](#miscellaneous)
  - [Money, Budgeting & Management](#money-budgeting--management)
  - [Monitoring & Status Pages](#monitoring--status-pages)
  - [Network Utilities](#network-utilities)
  - [Note-taking & Editors](#note-taking--editors)
  - [Office Suites](#office-suites)
  - [Password Managers](#password-managers)
  - [Pastebins](#pastebins)
  - [Personal Dashboards](#personal-dashboards)
  - [Photo Galleries](#photo-galleries)
  - [Polls and Events](#polls-and-events)
  - [Proxy](#proxy)
  - [Recipe Management](#recipe-management)
  - [Remote Access](#remote-access)
  - [Resource Planning](#resource-planning)
  - [Search Engines](#search-engines)
  - [Self-hosting Solutions](#self-hosting-solutions)
  - [Software Development](#software-development)
  - [Software Development - API Management](#software-development---api-management)
  - [Software Development - Continuous Integration & Deployment](#software-development---continuous-integration--deployment)
  - [Software Development - FaaS & Serverless](#software-development---faas--serverless)
  - [Software Development - Feature Toggle](#software-development---feature-toggle)
  - [Software Development - IDE & Tools](#software-development---ide--tools)
  - [Software Development - Localization](#software-development---localization)
  - [Software Development - Low Code](#software-development---low-code)
  - [Software Development - Project Management](#software-development---project-management)
  - [Software Development - Testing](#software-development---testing)
  - [Static Site Generators](#static-site-generators)
  - [Task Management & To-do Lists](#task-management--to-do-lists)
  - [Ticketing](#ticketing)
  - [Time Tracking](#time-tracking)
  - [Travel Organization](#travel-organization)
  - [URL Shorteners](#url-shorteners)
  - [Video Surveillance](#video-surveillance)
  - [VPN](#vpn)
  - [Web Servers](#web-servers)
  - [Wikis](#wikis)
- [List of Licenses](#list-of-licenses)
- [Anti-features](#anti-features)
- [External Links](#external-links)
- [Contributing](#contributing)
- [License](#license)

--------------------

## Software

### Analytics

**[`^        back to top        ^`](#awesome-selfhosted)**

[Analytics](https://en.wikipedia.org/wiki/Analytics)は、データまたは統計の体系的な計算分析である。データに意味のあるパターンの発見、解釈、および伝達に用いられる。

_関連： [Database Management](#database-management), [Personal Dashboards](#personal-dashboards)_

- [ANALOG](https://github.com/orangecoloured/analog) - 最小限の分析ツール。10～30日間のイベントを追跡する。 `MIT` `Nodejs/Docker`
- [Aptabase](https://aptabase.com/) - プライバシーを最優先とした、モバイルおよびデスクトップアプリ向けのシンプルな分析。（[Source Code](https://github.com/aptabase/aptabase)） `AGPL-3.0` `Docker`
- [AWStats](http://www.awstats.org/) - ウェブ、ストリーミング、FTPまたはメールサーバーのログファイルから統計を生成。（[Demo](https://www.awstats.org/#DEMO)，[Source Code](https://github.com/eldy/awstats)） `GPL-3.0` `Perl`
- [Countly Community Edition](https://count.ly) - リアルタイムのモバイルおよびウェブ分析、クラッシュレポート、プッシュ通知プラットフォーム。（[Source Code](https://github.com/Countly/countly-server)） `AGPL-3.0` `Nodejs/Docker`
- [d8a.tech](https://d8a.tech) - 既存のGoogle Analytics設定と連携し、ユーザーの行動を収集し、自社のプライベートデータベースに直接送信するデータ収集サービス。（[Demo](https://lookerstudio.google.com/u/0/reporting/0e4102b6-c38b-4f55-aa25-c1fe91d1c1e9)，[Source Code](https://github.com/d8a-tech/d8a)） `MIT` `Go/Docker`
- [Daily Stars Explorer](https://emanuelef.github.io/daily-stars-explorer) `⚠` - GitHubリポジトリのトレンドを毎日スターの洞察で追跡し、成長やコミュニティの関心を時間軸で確認。（[Demo](https://emanuelef.github.io/daily-stars-explorer)，[Source Code](https://github.com/emanuelef/daily-stars-explorer)） `MIT` `Go/Nodejs/Docker`
- [Druid](https://druid.apache.org) - 分散型、列指向、リアルタイムの分析データストア。（[Source Code](https://github.com/apache/druid)） `Apache-2.0` `Java/Docker`
- [EDA](https://github.com/jortilles/EDA) - データ分析および可視化を行うウェブアプリ。（`AGPL-3.0`） `Nodejs/Docker`
- [GoAccess](http://goaccess.io/) - リアルタイムのウェブログアナライザおよびターミナル内で実行可能なインタラクティブビュー。（[Source Code](https://github.com/allinurl/goaccess)） `GPL-2.0` `C`
- [GoatCounter](https://www.goatcounter.com) - 個人データの追跡なしで簡単なウェブ統計。（[Source Code](https://github.com/arp242/goatcounter)） `EUPL-1.2` `Go`
- [HitKeep](https://hitkeep.com/) - プライバシーを最優先としたウェブ分析。目標、フンネル、ECサイトトラッキング、チーム管理を1つのバイナリで提供。DuckDBを内蔵（Google Analytics、Plausible、Umamiの代替）。（[Source Code](https://github.com/pascalebeier/hitkeep)） `MIT` `Go/Docker`
- [Litlyx](https://litlyx.com) - すべてを網羅した分析ソリューション。30秒でセットアップ。AIを活用したダッシュボードですべてのデータを表示。完全にセルフホスト可能でGDPR対応。（[Source Code](https://github.com/Litlyx/litlyx)） `Apache-2.0` `Docker`
- [Liwan](https://liwan.dev/) - プライバシーを最優先としたウェブ分析。（[Demo](https://demo.liwan.dev/p/liwan.dev)，[Source Code](https://github.com/explodingcamera/liwan)） `Apache-2.0` `Rust/Docker`
- [Matomo](https://matomo.org/) - データと顧客のプライバシーを保護するウェブ分析（Google Analyticsの代替）。（[Source Code](https://github.com/matomo-org/matomo)） `GPL-3.0` `PHP`
- [Medama Analytics](https://oss.medama.io) - プライバシーを最優先としたウェブサイト分析。小さく、シンプルでクッキーなし。（[Demo](https://demo.medama.io)，[Source Code](https://github.com/medama-io/medama)） `Apache-2.0/MIT` `Docker/Go`
- [Metabase](https://metabase.com/) - 会社内の誰もが簡単に質問を立て、データから学べる手段。（[Source Code](https://github.com/metabase/metabase)） `AGPL-3.0` `Java/Docker`
- [Middleware](https://middlewarehq.com/) - エンジニアリーダーがチームの効果を測定・分析するために設計されたツール。DORAメトリクスを使用。（[Source Code](https://github.com/middlewarehq/middleware)） `Apache-2.0` `Docker/Python/Nodejs`
- [Netron](https://netron.app/) - ニューラルネットワークおよび機械学習モデルの可視化ツール。（[Source Code](https://github.com/lutzroeder/netron)） `MIT` `Python/Nodejs`
- [Offen](https://www.offen.dev/) - 公正で軽量かつオープンなウェブ分析ツール。ユーザーが自らのデータに完全なアクセスを保ちながら、洞察を得る。（[Demo](https://www.offen.dev/try-demo/)，[Source Code](https://github.com/offen/offen)） `Apache-2.0` `Go/Docker`
- [Plausible Analytics](https://plausible.io/) - シンプルで軽量（1KB未満）かつプライバシーに配慮したウェブ分析。（[Source Code](https://github.com/plausible/analytics/)） `AGPL-3.0` `Elixir`
- [PostHog](https://posthog.com) - プロダクト分析、セッション記録、機能フラグおよびA/Bテストを自前でホストできる（Mixpanel、Amplitude、Heap、HotJar、Optimizelyへの代替）。（[Source Code](https://github.com/posthog/posthog)） `MIT` `Python`
- [Postiz](https://postiz.com) `⚠` - ポストのスケジュール、コンテンツのパフォーマンスを追跡し、すべてのソーシャルメディアアカウントを一か所で管理（Buffer、Hootsuite、Sprout Socialへの代替）。（[Source Code](https://github.com/gitroomhq/postiz-app)） `AGPL-3.0` `Docker`
- [Prisme Analytics](https://www.prismeanalytics.com) - Grafanaに基づくプライバシーに配慮したプログレッシブな分析サービス。（[Source Code](https://github.com/prismelabs/analytics)） `AGPL-3.0/MIT` `Docker`
- [Redash](http://redash.io) - データソースに接続し、クエリを行い、データを可視化するダッシュボードを作成し、会社内で共有。（[Source Code](https://github.com/getredash/redash)） `BSD-2-Clause` `Docker`
- [Rybbit](https://rybbit.com/) - Google Analyticsへの代替として簡単な設定とより直感的なWebおよび製品分析。（[Demo](https://demo.rybbit.com/1), [Source Code](https://github.com/rybbit-io/rybbit)） `AGPL-3.0` `Docker`
- [Shaper](https://taleshape.com/shaper/docs) - すべてSQLで構築されたデータダッシュボード。DuckDBで駆動。（[Demo](https://demo.taleshape.com/view/pvggvdpiwb9wlyppuqbyx0nt), [Source Code](https://github.com/taleshape-com/shaper)） `MPL-2.0` `Docker/Nodejs/Python/Go`
- [Socioboard](https://github.com/socioboard/Socioboard-5.0) `⚠` - 9つのソーシャルメディアネットワークを内蔵でサポートするソーシャルメディア管理、分析、レポートプラットフォーム。 `GPL-3.0` `Nodejs`
- [Statistics for Strava](https://github.com/robiningelbrecht/statistics-for-strava) `⚠` - Stravaのデータから生成された統計ダッシュボード。（[Demo](https://statistics-for-strava.robiningelbrecht.be/)） `AGPL-3.0` `Docker`
- [Superset](http://superset.apache.org/) - 現代的なデータ探索および可視化プラットフォーム。（[Source Code](https://github.com/apache/superset)） `Apache-2.0` `Python`
- [Swetrix](https://swetrix.com/) - すべてのニーズを満たす究極のオープンソースウェブ分析。（[Demo](https://swetrix.com/projects/STEzHcB1rALV), [Source Code](https://github.com/Swetrix/selfhosting)） `AGPL-3.0` `Docker`
- [Umami](https://umami.is/) - Google Analyticsへのシンプルで高速かつプライバシーに配慮した代替。（[Demo](https://cloud.umami.is/share/LGazGOecbDtaIwDr), [Source Code](https://github.com/umami-software/umami)） `MIT` `Nodejs/Docker`
- [Vince](https://www.vinceanalytics.com/) - ウェブ分析とダッシュボード（Google Analyticsへの代替）。（[Source Code](https://github.com/vinceanalytics/vince)） `AGPL-3.0` `Go/Docker/K8S/deb`


### Archiving and Digital Preservation (DP)

**[`^        back to top        ^`](#awesome-selfhosted)**

デジタル [archiving](https://en.wikipedia.org/wiki/Archival_science) と [preservation](https://en.wikipedia.org/wiki/Digital_preservation) ソフトウェア。

_関連： [Backup](#backup), [Content Management Systems (CMS)](#content-management-systems-cms)_

参照も： [awesome-web-archiving](https://github.com/iipc/awesome-web-archiving)

- [ArchiveBox](https://archivebox.io/) - ブックマーク、ブラウジング履歴、RSSフィード、その他からのサイトのHTMLおよびスクリーンショットアーカイブを作成（Wayback Machineへの代替）。（[Demo](https://demo.archivebox.io/), [Source Code](https://github.com/ArchiveBox/ArchiveBox)） `MIT` `Python/Docker`
- [ArchivesSpace](https://archivesspace.org/) - アーカイブ情報管理アプリケーションで、アーカイブ、稿紙、デジタルオブジェクトの管理とウェブアクセスを提供。（[Demo](https://archivesspace.org/application/sandbox), [Source Code](https://github.com/archivesspace/archivesspace)） `ECL-2.0` `Ruby`
- [Bichon](https://github.com/rustmailer/bichon) - IMAPアカウントから同期し、メールを全文検索用にインデックスし、REST APIを提供するメールアーカイブサーバー。外部データベースは不要で、マルチアカウントをサポートするWebUIを含む。 `AGPL-3.0` `Rust/Docker`
- [bitmagnet](https://bitmagnet.io) - BitTorrentインデクサ、DHTクロール、コンテンツ分類およびトーレント検索エンジン。WebUI、GraphQL API、Servarrスタック統合を備える。（[Source Code](https://github.com/bitmagnet-io/bitmagnet)） `MIT` `Go/Docker`
- [CKAN](https://ckan.org) - オープンデータウェブサイトを作成。（[Source Code](https://github.com/ckan/ckan)） `AGPL-3.0` `Python`
- [Collective Access - Providence](https://collectiveaccess.org/) - デジタルおよび物理的なコレクションの管理、記述、発見を可能にする、高度にカスタマイズ可能なウェブベースフレームワーク。さまざまなメタデータ標準、データタイプ、メディアフォーマットをサポート。（[Source Code](https://github.com/collectiveaccess/providence)） `GPL-3.0` `PHP`
- [Eonvelope](https://dacid99.gitlab.io/eonvelope) - メールを無期限に保存できるメールアーカイブソフトウェア。（[Source Code](https://gitlab.com/dacid99/eonvelope)） `AGPL-3.0` `K8S/Docker`
- [Ganymede](https://github.com/Zibbp/ganymede) `⚠` - TwitchのVODおよびライブストリームアーカイブプラットフォーム。各アーカイブにレンダリングされたチャットを含む。 `GPL-3.0` `Docker`
- [mail-archiver](https://github.com/s1t5/mail-archiver) - Webアプリケーションで、複数アカウント（IMAP、M365またはインポート）からのメールをアーカイブ、検索、エクスポートできる。フォルダ同期、添付ファイル対応、メールボックスの移行、ダッシュボードを備える。 `GPL-3.0` `Docker`
- [Omeka S](https://omeka.org/s/) - インスティテューションがオンラインの他のリソースとデジタル文化遺産コレクションを接続したい場合に向けた次世代のウェブ出版プラットフォーム。 ([Source Code](https://github.com/omeka/omeka-s)) `GPL-3.0` `Nodejs`
- [Open Archiver](https://openarchiver.com/) - 全文検索およびeDiscovery検索機能を備えたメールアーカイブソリューション。 ([Demo](https://github.com/LogicLabs-OU/OpenArchiver?tab=readme-ov-file#-live-demo), [Source Code](https://github.com/LogicLabs-OU/OpenArchiver)) `AGPL-3.0` `Docker`
- [Piler](https://www.mailpiler.org/) - 機能豊かなメールアーカイブソリューション。 ([Source Code](https://github.com/jsuto/piler/)) `GPL-3.0` `C/Docker/deb`
- [Wallabag](https://www.wallabag.org) - Wallabag、かつてはPocheと呼ばれていたのは、後で読めるように読みやすさを向上させた記事を保存できるウェブアプリケーション。 ([Source Code](https://github.com/wallabag/wallabag)) `MIT` `PHP`
- [Wayback](https://github.com/wabarc/wayback) - インターネットアーカイブ、archive.today、IPFS、ローカルファイルシステムにウェブページをアーカイブするための自前ホスト型ツールキット。 `GPL-3.0` `Go`


### Automation

**[`^        back to top        ^`](#awesome-selfhosted)**

[Automation](https://en.wikipedia.org/wiki/Automation)ソフトウェアで、プロセスにおける人的介入を減らすために設計された。

_関連： [Internet of Things (IoT)](#internet-of-things-iot), [Software Development - Continuous Integration & Deployment](#software-development---continuous-integration--deployment), [Media Management](#media-management)_

- [Activepieces](https://www.activepieces.com) - ZapierやTrayのようなノコードビジネスオートメーションツール。たとえば、新しいTrelloカードごとにSlack通知を送ることができます。 ([Source Code](https://github.com/activepieces/activepieces)) `MIT` `Docker`
- [Apache Airflow](https://airflow.apache.org/) - プログラム的にワークフローを作成・スケジュール・監視できるプラットフォーム。 ([Source Code](https://github.com/apache/airflow/)) `Apache-2.0` `Python/Docker`
- [Automatisch](https://automatisch.io) - Twitter、Slackなどさまざまなサービスを接続してビジネスプロセスを自動化できるビジネスオートメーションツール（Zapierの代替）。 ([Source Code](https://github.com/automatisch/automatisch)) `AGPL-3.0` `Docker`
- [BookBounty](https://github.com/TheWicklowWolf/BookBounty) `⚠` - Library Genesisから欠落しているReadarrの本を取得。 `MPL-2.0` `Docker`
- [changedetection.io](https://changedetection.io/) - ウェブサイトのコンテンツ変更を常に把握できる。 ([Source Code](https://github.com/dgtlmoon/changedetection.io)) `Apache-2.0` `Python/Docker`
- [ChiefOnboarding](https://chiefonboarding.com) - 従業員のオンボーディングプラットフォームで、ユーザーアカウントのプロビジョニングや、TODO項目、リソース、テキスト/メール/Slackメッセージなどから構成されたシーケンスを作成できます！ウェブポータルとSlackボットとして利用可能。 ([Source Code](https://github.com/chiefonboarding/ChiefOnboarding)) `AGPL-3.0` `Docker`
- [Cronicle](https://cronicle.net/) - シンプルで分散型のタスクスケジューラと実行者で、ウェブベースのUIを備える。 ([Source Code](https://github.com/jhuckaby/Cronicle)) `MIT` `Nodejs`
- [Cronmaster](https://github.com/fccview/cronmaster) - Cronジョブ管理UIで、人間が読みやすい構文、ライブログ、ログ履歴を提供。 `AGPL-3.0` `Docker`
- [Dagu](https://docs.dagu.cloud/) - 強力なCronの代替品で、WebUIを備えている。コマンド間の依存関係を、宣言型YAML形式で有向無サイクルグラフ（DAG）として定義できる。 ([Source Code](https://github.com/dagucloud/dagu)) `GPL-3.0` `Go/Docker`
- [Discount Bandit](https://discount-bandit.cybrarist.com/) `⚠` - アマゾン、Ebay、ワルマートなど複数のストアにおける商品の価格や在庫状況を追跡。 ([Source Code](https://github.com/Cybrarist/Discount-Bandit)) `GPL-3.0` `PHP/Docker`
- [Dittofeed](https://www.dittofeed.com) - マルチチャネル顧客エンゲージメントおよびメッセージ自動化プラットフォーム（Braze、Customer.io、Iterableの代替）。 ([Demo](https://demo.dittofeed.com/dashboard/journeys), [Source Code](https://github.com/dittofeed/dittofeed)) `MIT` `Docker`
- [feedmixer](https://github.com/cristoper/feedmixer) - フィードURLのリストを受け取り、各フィードから最新のn件を含む新しいフィードを返すマイクロウェブサービス（Atom、RSS、またはJSONを返す）。 ([Demo](https://mretc.net/feedmixer/json?f=https://hnrss.org/newest&f=https://americancynic.net/atom.xml&n=1)) `WTFPL` `Python`
- [flowctl](https://flowctl.net) - 承認、リモート実行、スケジュールを備えたセルフサービスワークフロー実行プラットフォーム。 ([Demo](https://demo.flowctl.net), [Source Code](https://github.com/cvhariharan/flowctl)) `Apache-2.0` `Go/Docker`
- [Fredy](https://fredy.orange-coding.net/) `⚠` - ImmoScout24、Immoweltなどドイツの不動産サイトで新しくなったアパート、住宅、一戸建てを検索し、Slack、Telegramなどに即座に結果を提供。 ([Demo](https://fredy-demo.orange-coding.net), [Source Code](https://github.com/orangecoding/fredy)) `Apache-2.0` `Nodejs/Docker`
- [gocron](https://github.com/flohoss/gocron) - タスクスケジューラで、ユーザーがシンプルなYAML設定ファイルを使って繰り返し実行するジョブを指定できます。 `MIT` `Docker`
- [HandBrake Web](https://github.com/TheNickOfTime/handbrake-web) - ウェブインターフェースを使ってヘッドレスデバイスにHandBrakeのビデオトランスコーダを1つ以上使用できます。 `AGPL-3.0` `Docker`
- [Healthchecks](https://healthchecks.io/) - ピングを受信し、ピングが遅れた場合にアラートを送信します。 ([Source Code](https://github.com/healthchecks/healthchecks)) `BSD-3-Clause` `Python/Docker`
- [HomeButler](https://homebutler.dev) - ホスト、Dockerサービス、ウェイクオンLAN、インベントリ、リモート操作の監視を行うホームラボ管理ツールで、ウェブダッシュボードとMCP統合を備えています。 ([Source Code](https://github.com/Higangssh/homebutler)) `MIT` `Docker/Go`
- [Huginn](https://github.com/huginn/huginn) - あなたの代わりに監視し、行動を起こすビルディングエージェントです。 `MIT` `Ruby`
- [Kestra](https://kestra.io) - コードで作成・スケジュール・監視できるイベント駆動型で、言語に依存しないプラットフォーム。データパイプラインやETL、ELTなどのタスクを調整できます。 ([Source Code](https://github.com/kestra-io/kestra)) `Apache-2.0` `Docker`
- [Kibitzr](https://kibitzr.github.io) - 強力な統合機能を備えた軽量な個人用ウェブアシスタント。 ([Source Code](https://github.com/kibitzr/kibitzr)) `MIT` `Python`
- [LazyLibrarian](https://gitlab.com/LazyLibrarian/LazyLibrarian) `⚠` - 著者をフォローし、すべてのデジタル読書ニーズに必要なメタデータを取得できます。Goodreads、Librarything、オプションでGoogleBooksを情報源として使用します。 `GPL-3.0` `Python`
- [Leon](https://getleon.ai) - サーバーに常駐できる個人アシスタント。 ([Source Code](https://github.com/leon-ai/leon)) `MIT` `Nodejs`
- [Matchering](https://github.com/sergree/matchering) - 自動化された音楽マスタリング（LANDR、eMastered、MajorDecibelの代替）。 `GPL-3.0` `Docker`
- [Mylar3](https://mylar.nerdfirehurricane.com/) - NZBやトランスの使用に合わせた自動化されたコミックブック（cbr/cbz）ダウンローダー。 ([Source Code](https://github.com/MylarComics/mylar3)) `GPL-3.0` `Python/Docker`
- [OliveTin](https://www.olivetin.app/) - Linuxシェルコマンドを実行するためのウェブインターフェース。 ([Source Code](https://github.com/OliveTin/OliveTin)) `AGPL-3.0` `Go`
- [pyLoad](https://pyload.net/) - rapidshare.comやuploaded.toのような1クリックホスティングサイト向けの軽量、カスタマイズ可能でリモート管理可能なダウンローダー。 ([Source Code](https://github.com/pyload/pyload)) `AGPL-3.0` `Python`
- [StackStorm](https://stackstorm.com) - StackStorm（＝_IFTTT for Ops_）は、自動修復、セキュリティ対応、トラブルシューティング、デプロイなどに使用できるイベント駆動型自動化ツールです。ルールエンジン、ワークフロー、160の統合パック（6000以上のアクション）およびChatOpsを含みます。 ([Source Code](https://github.com/StackStorm/st2)) `Apache-2.0` `Python`
- [µTask](https://github.com/ovh/utask) - YAMLに宣言されたビジネスプロセスをモデル化・実行する自動化エンジン。 `BSD-3-Clause` `Go/Docker`


### Backup

**[`^        back to top        ^`](#awesome-selfhosted)**

[Backup](https://en.wikipedia.org/wiki/Backup)ソフトウェア。

**お問い合わせは [awesome-sysadmin/Backups](https://github.com/awesome-foss/awesome-sysadmin#backups) までお願いいたします**

関連情報: [Archiving and Digital Preservation (DP)](#archiving-and-digital-preservation-dp)



### Blogging Platforms

**[`^        back to top        ^`](#awesome-selfhosted)**

A [blog](https://en.wikipedia.org/wiki/Blog) は、離散的な、日記風のテキストエントリー（投稿）から構成されたディスカッションまたは情報提供型のウェブサイトである。

_関連： [Static Site Generators](#static-site-generators), [Content Management Systems (CMS)](#content-management-systems-cms)_

参照も： [WeblogMatrix](https://www.weblogmatrix.org/)

- [Antville](https://antville.org) - 高性能で機能豊かなウェブログホスティングソフトウェアの開発を目的とした無料オープンソースプロジェクト。 ([Source Code](https://github.com/antville/antville)) `Apache-2.0` `Javascript`
- [Castopod](https://castopod.org) - 最新のポッドキャスト2.0規格、自動化されたフェデレートフィード、分析、埋め込みプレイヤーなどを備えたポッドキャスト管理ホスティングプラットフォーム。 ([Source Code](https://code.castopod.org/adaures/castopod)) `AGPL-3.0` `PHP/Docker`
- [Chyrp Lite](https://chyrplite.net) - さらに素晴らしい、さらに軽量なブログエンジン。 ([Source Code](https://github.com/xenocrat/chyrp-lite)) `BSD-3-Clause` `PHP`
- [Dotclear](https://git.dotclear.org/dev/dotclear) - あなたのブログを完全にコントロールできます。 `GPL-2.0` `PHP`
- [Ech0](https://echo.soopy.cn/) - 個人のアイデア共有に特化した軽量なフェデレート出版プラットフォーム（中国語のドキュメントあり）。 ([Demo](https://memo.vaaat.com/), [Source Code](https://github.com/lin-snow/Ech0)) `AGPL-3.0` `Docker/K8S`
- [FlatPress](https://flatpress.org/) - 軽量で設定が簡単なフラットファイルブログエンジン。（[Source Code](https://github.com/flatpressblog/flatpress)） `GPL-2.0` `PHP`
- [fx](https://github.com/rikhuijzer/fx) - マイクロブログツールで、組み込みのシンタックスハイライト、モバイル発信などに対応（ツイッター、ブルースキの代替）。 `MIT` `Docker`
- [Ghost](https://ghost.org/) - ただのブログプラットフォーム。（[Source Code](https://github.com/TryGhost/Ghost)） `MIT` `Nodejs`
- [Haven](https://havenweb.org/) - プライベートなブログシステムで、マーカード編集と組み込みRSSリーダーを備えている。（[Demo](https://havenweb.org/demo.html)，[Source Code](https://github.com/havenweb/haven)） `MIT` `Ruby`
- [HTMLy](https://www.htmly.com/) - データベースなしPHPブログプラットフォーム。フラットファイルCMSであり、数秒で高速かつ安全で強力なウェブサイトやブログを作成できる。（[Demo](http://demo.htmly.com/)，[Source Code](https://github.com/danpros/htmly)） `GPL-2.0` `PHP`
- [Known](https://withknown.com/) - 協働型ソーシャル発信プラットフォーム。（[Source Code](https://github.com/idno/idno)） `Apache-2.0` `PHP`
- [Mataroa](https://mataroa.blog/) - ミニマリスト向けのネイクドブログプラットフォーム。（[Source Code](https://github.com/mataroablog/mataroa)） `MIT` `Python`
- [PluXml](https://pluxml.org) - XMLベースのブログ／CMSプラットフォーム。（[Source Code](https://github.com/pluxml/PluXml)） `GPL-3.0` `PHP`
- [Serendipity](https://docs.s9y.org/) - Serendipity（s9y）は、Smartyテンプレートを使用した高度に拡張可能でカスタマイズ可能なPHPブログエンジン。（[Source Code](https://github.com/s9y/serendipity)） `BSD-3-Clause` `PHP`
- [WriteFreely](https://writefreely.org) - ミニマリズムとフェデレートされたブログを開始するための書くソフトウェア——あるいは、完全なコミュニティを構築するためのもの。（[Source Code](https://github.com/writefreely/writefreely)） `AGPL-3.0` `Go`


### Booking and Scheduling

**[`^        back to top        ^`](#awesome-selfhosted)**

イベントスケジューリング、予約、会議管理ソフトウェア。

_関連： [Polls and Events](#polls-and-events), [Groupware](#groupware)_

- [Alf.io](https://alf.io/) - チケット予約システム。（[Demo](https://demo.alf.io/authentication)，[Source Code](https://github.com/alfio-event/alf.io)） `GPL-3.0` `Java`
- [Cal.diy](https://cal.diy/) - オンライン予約スケジュールシステム。（[Source Code](https://github.com/calcom/cal.diy)） `MIT` `Nodejs`
- [Easy!Appointments](https://easyappointments.org/) - 顧客がウェブからあなたとの予約を予約できるようにする。（[Demo](https://demo.easyappointments.org/)，[Source Code](https://github.com/alextselegidis/easyappointments)） `GPL-3.0` `PHP`
- [Hi.Events](https://hi.events) - 会議、コンサートなどに向けたイベント管理およびチケット販売プラットフォーム。カスタマイズ可能なイベントページと埋め込み可能なチケットウィジェットを提供。（[Demo](https://demo.hi.events/event/1/dog-conf-2030)，[Source Code](https://github.com/HiEventsDev/hi.events)） `AGPL-3.0` `Docker`
- [LibreBooking](https://librebooking.readthedocs.io/) - 柔軟でモバイル対応かつ拡張可能なインターフェースを提供し、組織がリソースの予約を管理できるリソーススケジュールソリューション。（[Demo](https://librebooking-demo.fly.dev/)，[Source Code](https://github.com/LibreBooking/librebooking)） `GPL-3.0` `PHP/Docker`
- [QloApps](https://qloapps.com/) - カスタマイズ可能で直感的なウェブベースのホテル予約システムおよび予約エンジン。（[Demo](https://demo.qloapps.com/)，[Source Code](https://github.com/Qloapps/QloApps)） `OSL-3.0` `PHP/Nodejs`
- [Rallly](https://rallly.co) - 日時を投票するためのポールを作成（Doodleの代替）。（[Demo](https://app.rallly.co)，[Source Code](https://github.com/lukevella/rallly)） `AGPL-3.0` `Nodejs/Docker`
- [Seatsurfing](https://seatsurfing.app/) - オフィスの席、デスク、部屋の予約をウェブ上で行えるアプリ。（[Source Code](https://github.com/seatsurfing/seatsurfing)） `GPL-3.0` `Docker`


### Bookmarks and Link Sharing

**[`^        back to top        ^`](#awesome-selfhosted)**

ウェブドキュメントにユーザーが追加・注釈・編集・共有できるソフトウェア（[bookmarks](https://en.wikipedia.org/wiki/Bookmark_(digital)）

関連情報: [Personal Dashboards](#personal-dashboards)

- [Betula](https://joinbetula.org) - 1ユーザー用のフェデレートされたブックマークマネージャーで、フェデリュースサポートとアーカイブを備えている。（[Source Code](https://codeberg.org/bouncepaw/betula)） `AGPL-3.0` `Go`
- [Buku](https://github.com/jarun/Buku) - 強力なブックマークマネージャーと個人のテキストミニウェブ。 `GPL-3.0` `Python/deb`
- [Digibunch](https://ladigitale.dev/digibunch/#/) - , に共有できるリンクのグループを作成できます。 (, ) [Demo](https://ladigitale.dev/digibunch/#/b/5f67b12092b60) [Source Code](https://codeberg.org/ladigitale/digibunch) `AGPL-3.0` `Nodejs/PHP`
- [Espial](https://github.com/jonschoning/espial) - オープンソースのウェブベースのブックマークサーバー。 `AGPL-3.0` `Haskell`
- [Faved](https://faved.to/) - 強力なタグ付け、即時検索、そしてシンプルで分散を防ぐインターフェースを組み合わせた手作りブックマークマネージャー。大規模なコレクションや高度なワークフローに最適化され、効率性と使いやすさを両立。 ([Demo](https://demo.faved.to/), [Source Code](https://github.com/denho/faved)) `MIT` `Docker`
- [Firefox Account Server](https://mozilla-services.readthedocs.io/en/latest/howtos/run-fxa.html) - 自分のFirefoxアカウントサーバーをホストできます。 ([Source Code](https://github.com/mozilla/fxa)) `MPL-2.0` `Nodejs/Java`
- [Karakeep](https://karakeep.app/) - データを大量に保存したい方へ、AIを組み込んだブックマークアプリ。 ([Demo](https://try.karakeep.app/signin), [Source Code](https://github.com/karakeep-app/karakeep)) `AGPL-3.0` `Docker`
- [LinkAce](https://www.linkace.org/) - 自動バックアップをインターネットアーカイブに、リンクの監視、およびフルREST APIを備えたブックマークアーカイブ。DockerまたはシンプルなPHPアプリとしてインストール可能です。 ([Demo](https://demo.linkace.org/guest/links), [Source Code](https://github.com/Kovah/LinkAce/)) `GPL-3.0` `Docker/PHP`
- [linkding](https://linkding.link/) - シンプルで高速なUIを備えた最小限のブックマーク管理。Dockerで簡単なインストールが可能で、Raspberry Piでも動作します。 ([Demo](https://demo.linkding.link/login/), [Source Code](https://github.com/sissbruecker/linkding)) `MIT` `Docker`
- [LinkWarden](https://linkwarden.app/) - あなたの便利なリンクを保存するためのブックマークとアーカイブマネージャー。 ([Source Code](https://github.com/linkwarden/linkwarden)) `MIT` `Docker/Nodejs`
- [NeonLink](https://github.com/AlexSciFier/neonlink) - ユニークなデザインとDockerによる簡単なインストールを備えたブックマークサービス。 `MIT` `Docker`
- [Readeck](https://readeck.org/en/) - 好きなウェブページの読みやすいコンテンツを保存し、永遠に残すことができます。ブックマークマネージャーと「あとで読む」ツールとして捉えられます。 ([Source Code](https://codeberg.org/readeck/readeck), [Clients](https://codeberg.org/readeck/browser-extension)) `AGPL-3.0` `Go/Docker`
- [Servas](https://github.com/beromir/Servas) - 自前でホストできるブックマーク管理ツール。タグ、グループ、あとでアクセスできるリストの組織が可能です。複数ユーザーに対応し、2FAもサポート。FirefoxおよびChrome向けのブラウザ拡張も提供されています。 ([Clients](https://github.com/beromir/Servas#browser-extensions)) `GPL-3.0` `Docker/Nodejs/PHP`
- [Shaarli](https://github.com/shaarli/Shaarli) - 個人向け、ミニマリズム、超高速、データベースなしのブックマークとリンク共有プラットフォーム。 ([Demo](https://demo.shaarli.org)) `Zlib` `PHP/deb`
- [Shiori](https://github.com/go-shiori/shiori) - Goで構築されたシンプルなブックマークマネージャー。 `MIT` `Go/Docker`
- [Slash](https://github.com/yourselfhosted/slash) - オープンソースで自前ホスト可能なブックマークとリンク共有プラットフォーム。 `GPL-3.0` `Docker`
- [SyncMarks](https://codeberg.org/Offerel/SyncMarks-Webapp) - Edge、FirefoxおよびChromiumのブラウザブックマークを同期・管理できます。 ([Clients](https://codeberg.org/Offerel/SyncMarks-Extension)) `AGPL-3.0` `PHP`


### Calendar & Contacts

**[`^        back to top        ^`](#awesome-selfhosted)**

[CalDAV](https://en.wikipedia.org/wiki/CalDAV) および [CardDAV](https://en.wikipedia.org/wiki/CardDAV) プロトコルサーバーと [Electronic calendar](https://en.wikipedia.org/wiki/Calendaring_software)、[address book](https://en.wikipedia.org/wiki/Address_book) および [contact management](https://en.wikipedia.org/wiki/Contact_manager) のウェブクライアント／インターフェース

関連情報: [Groupware](#groupware)

- [Baïkal](https://sabre.io/baikal/) - sabre/davに基づく軽量なCalDAVおよびCardDAVサーバー。 ([Source Code](https://github.com/sabre-io/Baikal)) `GPL-3.0` `PHP`
- [DAViCal](https://www.davical.org/) - カレンダー共有用のサーバー（CalDAV）で、PostgreSQLデータベースをデータストアとして使用。 ([Source Code](https://gitlab.com/davical-project/davical)) `GPL-2.0` `PHP/deb`
- [Davis](https://github.com/tchapi/davis) - sabre/davに基づくSymfony 5とBootstrap 4を使用したシンプルでDocker化可能かつ完全に翻訳可能な管理インターフェース。Baïkalに大きくインスパイアされています。 `MIT` `PHP`
- [Keeper.sh](https://keeper.sh/) - iCal/ICSまたはOAuthを介してカレンダー源と目的地間のイベントを取得・送信するカレンダー同期ツール。匿名化された忙しい/空いているイベントのサポートあり。 ([Source Code](https://github.com/ridafkih/keeper.sh)) `AGPL-3.0` `Docker`
- [Manage My Damn Life](https://intri.in/manage-my-damn-life/) - Manage my Damn Life (MMDL) は、あなたのCalDAVタスクとカレンダーを管理するための自前ホストされたフロントエンドです。 ([Source Code](https://github.com/intri-in/manage-my-damn-life-nextjs)) `GPL-3.0` `Nodejs/Docker`
- [Radicale](https://radicale.org/) - シンプルなカレンダーと連絡先サーバーで、極めて低い管理負荷。 ([Source Code](https://github.com/Kozea/Radicale)) `GPL-3.0` `Python/deb`
- [SabreDAV](https://sabre.io/) - オープンソースのCardDAV、CalDAV、およびWebDAVフレームワークとサーバー。 ([Source Code](https://github.com/sabre-io/dav)) `MIT` `PHP`
- [Xandikos](https://github.com/jelmer/xandikos) - オープンソースのCardDAVおよびCalDAVサーバーで、最小限の管理負荷を備え、Gitリポジトリでサポートされている。 `GPL-3.0` `Python/deb`


### Communication - Custom Communication Systems

**[`^        back to top        ^`](#awesome-selfhosted)**

[Communication software](https://en.wikipedia.org/wiki/Communication_software) は、自社が開発したプロトコルを用いて、異なるコンピュータまたはユーザー間でテキスト、音声および/または動画形式のファイルやメッセージを交換し、システムへのリモートアクセスを提供するものであった。

- [AnyCable](https://anycable.io/) - WebSockets、サーバー送信イベントなどによる信頼性の高い双方向通信を実現するリアルタイムサーバー。 ([Demo](https://demo.anycable.io), [Source Code](https://github.com/anycable/anycable)) `MIT` `Go/Docker`
- [Apprise](https://github.com/caronc/apprise) - Appriseは、Telegram、Discord、Slack、Amazon SNS、Gotifyなど、現在利用可能な最も人気のある通知サービスに通知を送信できるようにします。 `MIT` `Python/Docker/deb`
- [Centrifugo](https://centrifugal.dev/) - 言語に依存しないリアルタイムメッセージング（WebsocketまたはSockJS）サーバー。 ([Demo](https://github.com/centrifugal/centrifugo#demo), [Source Code](https://github.com/centrifugal/centrifugo)) `MIT` `Go/Docker/K8S`
- [Chitchatter](https://chitchatter.im/) - サーバーなし、分散型、一時的なペア間チャットアプリ。 ([Source Code](https://github.com/jeremyckahn/chitchatter)) `GPL-2.0` `Nodejs`
- [Conduit](https://conduit.rs/) - Matrixを用いたシンプルで高速かつ信頼性の高いチャットサーバー。 ([Source Code](https://gitlab.com/famedly/conduit)) `Apache-2.0` `Rust`
- [Continuwuity](https://continuwuity.org/) - コミュニティが運営するMatrixホームサーバー。conduwuitの継続であり、ユーザー体験と新機能に注目（Conduitのフォーク）。 ([Source Code](https://forgejo.ellis.link/continuwuation/continuwuity)) `Apache-2.0` `Rust/Docker/K8S/deb`
- [Databag](https://github.com/balzack/databag) - ウェブ、iOS、Android向けの分散型かつ端末間暗号化されたメッセージングサービス。テキスト、写真、動画、WebRTCによる動画および音声通話に対応。 ([Demo](https://databag.coredb.org/#/create)) `Apache-2.0` `Docker`
- [Element](https://element.io) - ウェブ、iOSおよびAndroid向けの完全機能のMatrixクライアント。 ([Source Code](https://github.com/element-hq/element-web)) `Apache-2.0` `Nodejs`
- [GlobaLeaks](https://www.globaleaks.org/) - 誰でも簡単に安全な報告プラットフォームを構築・運用できるスパイクソフトウェア。 ([Demo](https://demo.globaleaks.org), [Source Code](https://github.com/globaleaks/globaleaks-whistleblowing-software)) `AGPL-3.0` `Python/deb/Docker`
- [GNUnet](https://gnunet.org/) - 分散型かつペア間ネットワークを実現するソフトウェアフレームワーク。 ([Source Code](https://gnunet.org/git/)) `GPL-3.0` `C`
- [Gotify](https://gotify.net/) - AndroidおよびCLIクライアントを備えた通知サーバー（PushBulletの代替）。 ([Source Code](https://github.com/gotify/server), [Clients](https://github.com/gotify/android)) `MIT` `Go/Docker`
- [Hyphanet](https://hyphanet.org/) - 匿名にファイルを共有し、_freesites_（Hyphanetを通じてアクセス可能なウェブサイト）を閲覧・公開し、フォーラムでチャットできる。 ([Source Code](https://github.com/hyphanet/fred)) `GPL-2.0` `Java`
- [Jami](https://jami.net/) - ユーザーのプライバシーと自由を守る、普遍的なコミュニケーションプラットフォーム。 ([Source Code](https://git.jami.net/savoirfairelinux?sort=latest_activity_desc&filter=jami)) `GPL-3.0` `C++`
- [Live Helper Chat](https://livehelperchat.com/) - あなたのウェブサイト向けのライブサポートチャット。 ([Source Code](https://github.com/LiveHelperChat/livehelperchat)) `Apache-2.0` `PHP`
- [Mumble](https://wiki.mumble.info/wiki/Main_Page) - 低遅延かつ高品質の音声・テキストチャットソフトウェア。 ([Source Code](https://github.com/mumble-voip/mumble), [Clients](https://wiki.mumble.info/wiki/3rd_Party_Applications)) `BSD-3-Clause` `C++/deb`
- [Notifo](https://github.com/notifo-io/notifo) - メール、モバイルプッシュ、ウェブプッシュ、SMS、メッセージング、JavaScriptプラグインをサポートするマルチチャンネル通知サーバー。 `MIT` `C#`
- [Novu](https://novu.co/) - 開発者向けの通知インフラストラクチャ。 ([Source Code](https://github.com/novuhq/novu/)) `MIT` `Docker/Nodejs`
- [ntfy](https://ntfy.sh/) - スマホやデスクトップにHTTP PUT/POSTを使用してプッシュ通知を送信。Androidアプリ、CLI、ウェブアプリで利用可能。PushoverやGotifyと同様。（[Demo](https://ntfy.sh/app), [Source Code](https://github.com/binwiederhier/ntfy), [Clients](https://github.com/binwiederhier/ntfy-android)）`Apache-2.0/GPL-2.0` `Go/Docker/K8S`
- [One Time Secret](https://docs.onetimesecret.com) - センシティブな情報を安全に共有。一度しか表示できない自滅リンクを提供。（[Demo](https://onetimesecret.com), [Source Code](https://github.com/onetimesecret/onetimesecret)）`MIT` `Docker/Ruby/Nodejs`
- [OTS](https://ots.fyi/) - ブラウザ内で対称鍵256bit AES暗号化を用いたワンタイムセクレット共有プラットフォーム。（[Source Code](https://github.com/Luzifer/ots)）`Apache-2.0` `Go`
- [PushBits](https://github.com/pushbits/server) - Matrixを介してプッシュ通知を中継するための通知サーバー。PushBulletやGotifyと同様。（`ISC`）`Go`
- [RetroShare](https://retroshare.cc) - 安全かつ分散型のコミュニケーションシステム。分散型チャット、フォーラム、メッセージング、ファイル転送を提供。（[Source Code](https://github.com/RetroShare/RetroShare)）`GPL-2.0` `C++`
- [Rocket.Chat](https://rocket.chat/) - データ保護を最優先とするコミュニケーションプラットフォーム（Gitter.imやSlackの代替）。（[Source Code](https://github.com/RocketChat/Rocket.Chat)）`MIT` `Nodejs/Docker/K8S`
- [SAMA](https://samacloud.io) - 次世代のセルフホスト型チャットサーバーとクライアント。（[Demo](https://app.samacloud.io/demo), [Source Code](https://github.com/SAMA-Communications/sama-server), [Clients](https://github.com/SAMA-Communications/sama-client)）`GPL-3.0` `Nodejs/Docker`
- [Screego](https://screego.net) - Screegoは、ウェブブラウザ経由で1人または複数の人と画面を迅速に共有するためのシンプルなツール。（[Demo](https://app.screego.net/), [Source Code](https://github.com/screego/server)）`GPL-3.0` `Docker/Go`
- [Shhh](https://github.com/smallwat3r/shhh) - メールやチャットログに秘密情報を残さず、パスフレーズと有効期限付きの安全なリンクで共有。（`MIT`）`Python`
- [SimpleX Chat](https://github.com/simplex-chat/simplex-chat) - 最もプライベートで安全なチャットおよびアプリプラットフォーム。現在、ダブルラッチE2E暗号化を採用。（`AGPL-3.0`）`Haskell`
- [Spectrum 2](https://spectrum.im/) - Spectrum 2はオープンソースのインスタントメッセージングトランスポート。異なるIMネットワークを使用しているユーザー間でもチャットが可能。（[Source Code](https://github.com/SpectrumIM/spectrum2)）`GPL-3.0` `C++`
- [Stoat](https://stoat.chat/) - Stoatは、現代のウェブ技術を用いたユーザー中心のチャットプラットフォーム。（[Source Code](https://github.com/stoatchat/self-hosted)）`AGPL-3.0/MIT` `Rust`
- [Synapse](https://element-hq.github.io/synapse/latest/index.html) - [Matrix](https://matrix.org/)のサーバー。 decentralized persistent communicationのオープンスタンダード。（[Source Code](https://github.com/element-hq/synapse)）`Apache-2.0` `Python/deb`
- [Tiledesk](https://tiledesk.com) - リード生成からポストセールスまで、WhatsAppからウェブサイトまでの一元化された顧客エンゲージメントプラットフォーム。オムニチャネルライブエージェントとAIによるチャットボットを備えている（Intercom、Zendesk、Tawk.to、Tidioの代替）。（[Source Code](https://github.com/Tiledesk/tiledesk)）`MIT` `Docker/K8S`
- [Tinode](https://github.com/tinode) - インスタントメッセージングプラットフォーム。バックエンドはGo。クライアント：Swift iOS、Java Android、JSウェブアプリ、スクリプト可能なコマンドライン、チャットボット。（[Demo](https://sandbox.tinode.co/), [Source Code](https://github.com/tinode/chat), [Clients](https://github.com/tinode/webapp)）`GPL-3.0` `Go`
- [Tox](https://tox.chat/) - 分散型で安全なメッセンジャー。音声および動画チャット機能を備えている。（[Source Code](https://github.com/TokTok/c-toxcore)）`GPL-3.0` `C`
- [Tuwunel](https://tuwunel.chat) - Matrix向けの高性能かつ機能豊かなチャットサーバー。conduwuit（Conduitのフォーク）の後継。（[Demo](https://try.tuwunel.chat/), [Source Code](https://github.com/matrix-construct/tuwunel)）`Apache-2.0` `deb/Docker/Nix/Rust`
- [Typebot](https://typebot.io) - 会話型アプリビルダー（TypeformやLandbotの代替）。（[Source Code](https://github.com/baptisteArno/typebot.io)）`AGPL-3.0` `Docker`
- [WBO](https://github.com/lovasoa/whitebophir) - ウェブ白板で、スキーマ、図、ノートなどにリアルタイムで協働できる。（[Demo](https://wbo.ophir.dev/)）`AGPL-3.0` `Nodejs/Docker`
- [Zulip](https://zulip.org) - Zulipは強力なオープンソースグループチャットアプリケーション。（[Source Code](https://github.com/zulip/zulip)）`Apache-2.0` `Python`


### Communication - Email - Complete Solutions

**[`^        back to top        ^`](#awesome-selfhosted)**

不慣れまたは意欲のない管理者向けに、 [E-mail](https://en.wikipedia.org/wiki/Email) サーバーの簡単な展開

- [AnonAddy](https://anonaddy.com) - メールフォワードサービスでアリアスを作成できます。 ([Source Code](https://github.com/anonaddy/anonaddy)) `MIT` `PHP/Docker`
- [b1gMail](https://www.b1gmail.eu) - PHPとMariaDBで動作する完全なメールソリューション。POP3キャッチアリーバックスをサポートし、自社サーバーを運用している場合、Postfixまたはb1gMailServerと統合可能です。 ([Source Code](https://codeberg.org/b1gMail/b1gMail), [Clients](https://www.b1gmail.eu/en/start/addon-b1gmailserver/)) `GPL-2.0` `PHP`
- [DebOps](https://docs.debops.org/) - Debianベースのデータセンターを一括で提供するソリューション。DebianまたはUbuntuホストの管理に使える汎用的なAnsibleロールのセット。 ([Source Code](https://github.com/debops/debops)) `GPL-3.0` `Ansible/Python`
- [docker-mailserver](https://docker-mailserver.github.io/docker-mailserver/edge/) - プロダクション環境でも運用可能なフルスタックかつシンプルなメールサーバー（SMTP、IMAP、LDAP、アンチスパム、アンチウイルスなど）。コンテナ内で動作。設定ファイルのみ、SQLデータベースはなし。 ([Source Code](https://github.com/docker-mailserver/docker-mailserver)) `MIT` `Docker`
- [Dovel](https://dovel.email) - 設定ファイルに基づいてメールを送受信するSMTPサーバー。オプションでウェブインターフェースを提供し、メールを閲覧できます。 ([Source Code](https://dovel.email/server/tree.html)) `LGPL-3.0` `Go`
- [Inboxen](https://inboxen.org) - 無限に多くのユニークなインボックスを提供できます。 ([Source Code](https://codeberg.org/Inboxen/Inboxen)) `GPL-3.0` `Python`
- [iRedMail](https://www.iredmail.org/) - PostfixとDovecotに基づくフル機能のメールサーバー解決策。 ([Source Code](https://github.com/iredmail/iRedMail)) `GPL-3.0` `Shell`
- [Maddy Mail Server](https://maddy.email/) - SMTP（MTAおよびMX）とIMAPを実装するワンストップのメールサーバー。Postfix、Dovecot、OpenDKIM、OpenSPF、OpenDMARCを1つのデーモンで置き換えます。 ([Source Code](https://github.com/foxcpp/maddy)) `GPL-3.0` `Go`
- [Mail-in-a-Box](https://mailinabox.email/) - Ubuntuサーバーを1コマンドで完全なメールサーバーに変換します。 ([Source Code](https://github.com/mail-in-a-box/mailinabox)) `CC0-1.0` `Shell`
- [Mailcow](https://mailcow.email/) - Dovecot、Postfixおよびその他のオープンソースソフトウェアに基づくメールサーバーで、現代的なWebUIを提供します。 ([Source Code](https://github.com/mailcow/mailcow-dockerized)) `GPL-3.0` `Docker/PHP`
- [Mailu](https://mailu.io/) - シンプルでありながらフル機能のメールサーバーをDockerイメージとして提供します。 ([Source Code](https://github.com/Mailu/Mailu)) `MIT` `Docker/Python`
- [Modoboa](https://modoboa.org/en/) - メールホスティングおよび管理プラットフォームで、現代的かつ簡易なウェブユーザーインターフェースを提供します。 ([Source Code](https://github.com/modoboa/modoboa)) `ISC` `Python`
- [Mox](https://www.xmox.nl/) - IMAP4、SMTP、SPF、DKIM、DMARC、MTA-STS、DANEおよびDNSSEC、信頼性ベースおよびコンテンツベースのゴミフィルタ、国際化（IDNA）、ACMEおよびLet's Encryptによる自動TLS、アカウント自動設定、ウェブメールを含む完全なメールソリューション。 ([Source Code](https://github.com/mjl-/mox)) `MIT` `Go`
- [Postal](https://docs.postalserver.io/) - ウェブサイトおよびウェブサーバー向けの完全なメールサーバー解決策。 ([Source Code](https://github.com/postalserver/postal)) `MIT` `Docker/Ruby`
- [Simple NixOS Mailserver](https://gitlab.com/simple-nixos-mailserver/nixos-mailserver) - Nixエコシステムを活用した完全なメールサーバー解決策。 `GPL-3.0` `Nix`
- [SimpleLogin](https://simplelogin.io) - メールアドレスを保護するオープンソースのアリアスソリューション。ブラウザ拡張機能およびモバイルアプリを提供します。 ([Source Code](https://github.com/simple-login/app)) `MIT` `Docker/Python`
- [Stalwart Mail Server](https://stalw.art) - JMAP、IMAP4、SMTPをサポートし、幅広い現代的な機能を備えたワンストップメールサーバー。 ([Source Code](https://github.com/stalwartlabs/stalwart)) `AGPL-3.0` `Rust/Docker`
- [wildduck](https://wildduck.email/) - スケーラブルなSPOFなしIMAP/POP3メールサーバー。 ([Source Code](https://github.com/zone-eu/wildduck)) `EUPL-1.2` `Nodejs/Docker`


### Communication - Email - Mail Delivery Agents

**[`^        back to top        ^`](#awesome-selfhosted)**

[Mail Delivery Agents](https://en.wikipedia.org/wiki/Message_delivery_agent) (MDAs) - [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol)/[POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol) サーバーソフトウェア。

- [Cyrus IMAP](https://www.cyrusimap.org/) - メール（IMAP/POP3）、連絡先、カレンダーサーバー。 ([Source Code](https://github.com/cyrusimap/cyrus-imapd)) `BSD-3-Clause-Attribution` `C`
- [DavMail](https://davmail.sourceforge.net/) `⚠` - POP/IMAP/SMTP/Caldav/Carddav/LDAPのエクスチェンジゲートウェイ。ユーザーはExchangeサーバーを使用する任意のメール／カレンダークライアント（インターネット上やファイアウォールの後でも）を用いて、Outlook Web Access経由で利用できます。 ([Source Code](https://github.com/mguessan/davmail)) `GPL-2.0` `Java`
- [Dovecot](https://www.dovecot.org/) - IMAPおよびPOP3サーバーは、安全性を主眼に設計されています。（[Source Code](https://github.com/dovecot/core)） `MIT/LGPL-2.1` `C/deb`


### Communication - Email - Mail Transfer Agents

**[`^        back to top        ^`](#awesome-selfhosted)**

[Mail Transfer Agents](https://en.wikipedia.org/wiki/Message_transfer_agent) (MTAs) - [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) サーバー

- [chasquid](https://blitiri.com.ar/p/chasquid/) - SMTP（メール）サーバーは、シンプルさ、安全性、操作の容易さを重視しています。（[Source Code](https://blitiri.com.ar/git/r/chasquid/)） `Apache-2.0` `Go`
- [Courier MTA](https://www.courier-mta.org/) - 高速かつスケーラブルで、企業向けのメール／グループウェアサーバー。ESMTP、IMAP、POP3、ウェブメール、メールリスト、基本的なウェブベースのカレンダーおよびスケジューリングサービスを提供します。（[Source Code](https://www.courier-mta.org/repo.html)） `GPL-3.0` `C/deb`
- [DragonFly](https://github.com/corecode/dma) - 家庭やオフィス向けの小型MTA。LinuxおよびFreeBSDで動作します。`BSD-3-Clause` `C`
- [EmailRelay](https://emailrelay.sourceforge.net/) - WindowsおよびLinux向けの小型で設定が簡単なSMTPおよびPOP3サーバー。（[Source Code](https://sourceforge.net/p/emailrelay/code/HEAD/tree/)） `GPL-3.0` `C++`
- [Exim](https://www.exim.org/) - カナダ大学で開発されたメッセージ転送エージェント（MTA）。（[Source Code](https://git.exim.org/exim.git)） `GPL-3.0` `C/deb`
- [Haraka](https://haraka.github.io/) - 高速で高度に拡張可能でイベント駆動のSMTPサーバー。（[Source Code](https://github.com/haraka/Haraka)） `MIT` `Nodejs`
- [OpenSMTPD](https://opensmtpd.org/) - OpenBSDプロジェクトから提供される安全なSMTPサーバー実装。（[Source Code](https://github.com/OpenSMTPD/OpenSMTPD/)） `ISC` `C/deb`
- [OpenTrashmail](https://github.com/HaschekSolutions/opentrashmail) - 完全なtrashmailソリューションで、SMTPサーバーを公開し、受信メールの管理にウェブインターフェースを提供。複数ドメインおよびワイルドカードドメインに対応し、完全にファイルベース（データベース不要）。RSSフィードおよびJSONAPIを提供します。`Apache-2.0` `Python/PHP/Docker`
- [Postfix](http://www.postfix.org/) - 高速で管理しやすく、安全なSendmailの代替品。`IPL-1.0` `C/deb`
- [Sendmail](https://www.proofpoint.com/us/products/email-protection/open-source-email-solution) - メッセージ転送エージェント（MTA）。`Sendmail` `C/deb`


### Communication - Email - Mailing Lists and Newsletters

**[`^        back to top        ^`](#awesome-selfhosted)**

[Mailing list](https://en.wikipedia.org/wiki/Mailing_list) サーバーと大量メール送信ソフトウェア - 1つのメッセージを多数の受信者に送る。

関連： [Customer Relationship Management (CRM)](#customer-relationship-management-crm)

- [HyperKitty](https://wiki.list.org/HyperKitty) - GNU Mailman v3のアーカイブにアクセスします。（[Demo](https://lists.mailman3.org/), [Source Code](https://gitlab.com/mailman/hyperkitty)） `GPL-3.0` `Python`
- [Keila](https://www.keila.io) - 信頼性があり操作が簡単なニュースレターツール（MailchimpやSendinblueの代替）。（[Demo](https://app.keila.io), [Source Code](https://github.com/pentacent/keila)） `AGPL-3.0` `Docker`
- [Listmonk](https://listmonk.app/) - 高性能で、セルフホスト可能なニュースレターおよびメールリスト管理ツール。現代的なダッシュボードを備えています。（[Demo](https://demo.listmonk.app/), [Source Code](https://github.com/knadh/listmonk)） `AGPL-3.0` `Go/Docker`
- [Mailman](https://www.list.org/) - 電子メールディスカッションおよびeニュースレターのリストを管理します。（[Source Code](https://gitlab.com/mailman/)） `GPL-3.0` `Python`
- [Mautic](https://www.mautic.org/) - マーケティング自動化ソフトウェア（メール、ソーシャルメディアなど）。（[Source Code](https://github.com/mautic/mautic)） `GPL-3.0` `PHP`
- [mlmmj](https://mlmmj.org/) - メールリスト管理を楽しいものにします。（[Source Code](https://codeberg.org/mlmmj/mlmmj)） `MIT` `C`
- [phpList](https://www.phplist.org) - ニュースレターおよびメールマーケティングで、購読者、リターンメール、プラグインの高度な管理を提供。（[Source Code](https://github.com/phpList/phplist3)） `AGPL-3.0` `PHP`
- [Postorius](https://docs.mailman3.org/projects/postorius/en/latest/) - GNU Mailmanにアクセスするウェブユーザーインターフェース。（[Source Code](https://gitlab.com/mailman/postorius/)） `GPL-3.0` `Python`
- [Schleuder](https://schleuder.nadir.org/) - GPGをサポートしたメールリスト管理ツールで、再送機能を備えています。（[Source Code](https://0xacab.org/schleuder/schleuder/tree/master)） `GPL-3.0` `Ruby`
- [Sympa](https://www.sympa.community/) - メールリスト管理ツール。 ([Source Code](https://github.com/sympa-community/sympa)) `GPL-2.0` `Perl`


### Communication - Email - Webmail Clients

**[`^        back to top        ^`](#awesome-selfhosted)**

[Webmail](https://en.wikipedia.org/wiki/Webmail) クライアント.

- [Cypht](https://cypht.org) - メールアカウント用のフィードリーダー。 ([Source Code](https://github.com/cypht-org/cypht)) `LGPL-2.1` `PHP`
- [Roundcube](https://roundcube.net) - ブラウザベースのIMAPクライアントで、アプリケーションのようなユーザーインターフェースを提供。 ([Source Code](https://github.com/roundcube/roundcubemail)) `GPL-3.0` `PHP/deb`
- [SnappyMail](https://snappymail.eu/) - シンプルで現代的、軽量かつ高速なウェブベースのメールクライアント（RainLoopのフォーク）。 ([Demo](https://snappymail.eu/demo/), [Source Code](https://github.com/the-djmaze/snappymail), [Clients](https://snappymail.eu/repository/v2/plugins/)) `AGPL-3.0` `PHP`
- [SquirrelMail](https://squirrelmail.org) - 別のブラウザベースのIMAPクライアント。 ([Source Code](https://sourceforge.net/p/squirrelmail/code/HEAD/tree/)) `GPL-2.0` `PHP`


### Communication - IRC

**[`^        back to top        ^`](#awesome-selfhosted)**

[IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat) コミュニケーションソフトウェア。

- [Ergo](https://ergo.chat/) - Goで書かれた現代的なIRCv3サーバー。ircd、サービスフレームワーク、およびbouncerの機能を統合。 ([Source Code](https://github.com/ergochat/ergo)) `MIT` `Go/Docker`
- [Glowing Bear](https://github.com/glowing-bear/glowing-bear) - WeeChat用のウェブフロントエンド。 ([Demo](https://www.glowing-bear.org)) `GPL-3.0` `Nodejs`
- [InspIRCd](https://www.inspircd.org/) - Linux、BSD、Windows、macOS向けのC++で書かれたモジュラーなIRCサーバー。 ([Source Code](https://github.com/inspircd/inspircd)) `GPL-2.0` `C++/Docker`
- [Kiwi IRC](https://kiwiirc.com/) - テーマサポートを備えたレスポンシブなウェブベースIRCクライアント。 ([Demo](https://kiwiirc.com/nextclient/), [Source Code](https://github.com/kiwiirc/kiwiirc)) `Apache-2.0` `Nodejs`
- [ngircd](https://ngircd.barton.de/) - 小型またはプライベートネットワーク向けのポータブルかつ軽量なIRCサーバー。 ([Source Code](https://github.com/ngircd/ngircd)) `GPL-2.0` `C/deb`
- [Quassel IRC](https://quassel-irc.org/) - 分散型IRCクライアント。一つ（または複数）のクライアントが中央コアに接続・離脱できる。 ([Source Code](https://github.com/quassel/quassel)) `GPL-2.0` `C++`
- [Robust IRC](https://robustirc.net/) - ネットスプリットのないIRC。RobustSessionプロトコルに基づく分散型IRCサーバー。 ([Source Code](https://github.com/robustirc/robustirc)) `BSD-3-Clause` `Go`
- [The Lounge](https://thelounge.chat/) - セルフホスト型ウェブベースIRCクライアント。 ([Demo](https://demo.thelounge.chat/), [Source Code](https://github.com/thelounge/thelounge)) `MIT` `Nodejs/Docker`
- [UnrealIRCd](https://www.unrealircd.org/) - Linux、BSD、Windows、macOS向けのCで書かれたモジュラーで高度かつ高度にカスタマイズ可能なIRCサーバー。 ([Source Code](https://github.com/unrealircd/unrealircd)) `GPL-2.0` `C`
- [Weechat](https://weechat.org/) - 高速で軽量かつ拡張可能なチャットクライアント。 ([Source Code](https://github.com/weechat/weechat)) `GPL-3.0` `C/Docker/deb`
- [ZNC](https://wiki.znc.in/ZNC) - 高度なIRC bouncer。 ([Source Code](https://github.com/znc/znc)) `Apache-2.0` `C++/deb`


### Communication - SIP

**[`^        back to top        ^`](#awesome-selfhosted)**

[SIP](https://en.wikipedia.org/wiki/Session_Initiation_Protocol)/[IPBX](https://en.wikipedia.org/wiki/IP_PBX) 電話ソフトウェア。

- [Asterisk](https://www.asterisk.org/) - 使いやすいが高度なIP PBXシステム、VoIPゲートウェイおよび会議サーバー。 ([Source Code](https://github.com/asterisk/asterisk)) `GPL-2.0` `C/deb`
- [Flexisip](https://www.linphone.org/en/flexisip-sip-server/) - 完全でモジュラーかつスケーラブルなSIPサーバー。プッシュゲートウェイを含み、SIPの入力通話やテキストメッセージを、アプリがフォアグラウンドにない場合でも通知を受信できるモバイルデバイスプラットフォームで配信。 ([Source Code](https://github.com/BelledonneCommunications/flexisip)) `AGPL-3.0` `C/Docker`
- [Freepbx](https://www.freepbx.org) - ウェブベースのオープンソースGUIでAsteriskを制御および管理。 ([Source Code](https://git.freepbx.org/projects/FREEPBX)) `GPL-2.0` `PHP`
- [FreeSWITCH](https://freeswitch.org/) - スケーラブルでオープンソースのマルチプラットフォームテレフォニープラットフォーム。 ([Source Code](https://github.com/signalwire/freeswitch)) `MPL-2.0` `C`
- [FusionPBX](https://www.fusionpbx.com/) - マルチプラットフォームの音声スイッチFreeSWITCH向けのウェブインターフェース。([Source Code](https://github.com/fusionpbx/fusionpbx)) `MPL-1.1` `PHP`
- [Kamailio](https://www.kamailio.org/w/) - モジュラーなSIPサーバー（登録者/プロキシ/ルーターなど）。([Source Code](https://github.com/kamailio/kamailio)) `GPL-2.0` `C/deb`
- [openSIPS](https://opensips.org/) - 音声、動画、IM、プレゼンスおよび他のSIP拡張に対応するSIPプロキシ/サーバー。([Source Code](https://github.com/OpenSIPS/opensips)) `GPL-2.0` `C`
- [Routr](https://routr.io) - 軽量なSIPプロキシ、位置サーバーおよび登録者。信頼性とスケーラビリティを備えたSIPインフラのためのものです。([Source Code](https://github.com/fonoster/routr)) `MIT` `Docker/K8S`
- [SIP3](https://sip3.io/) - VoIPのトラブルシューティングおよびモニタリングプラットフォーム。([Demo](https://demo.sip3.io), [Source Code](https://github.com/sip3io/)) `Apache-2.0` `Java`
- [SIPCAPTURE Homer](https://www.sipcapture.org/) - VoIP通話のトラブルシューティングおよびモニタリング。([Source Code](https://github.com/sipcapture/homer)) `AGPL-3.0` `Nodejs/Go/Docker`
- [Wazo](https://wazo-platform.org/) - Asteriskをベースに構築されたフル機能のIPBXソリューション。統合されたウェブ管理インターフェースとREST APIを備えています。([Source Code](https://github.com/wazo-platform)) `GPL-3.0` `Python`
- [Yeti-Switch](https://yeti-switch.org/) - クラス4のソフトスイッチ（SBC）で、収益化およびルーティングエンジンを統合し、REST APIを備えたものです。([Demo](https://demo.yeti-switch.org/), [Source Code](https://github.com/yeti-switch)) `GPL-2.0` `C++/Ruby`


### Communication - Social Networks and Forums

**[`^        back to top        ^`](#awesome-selfhosted)**

[Social Networking](https://en.wikipedia.org/wiki/Social_networking_service) および [Forum](https://en.wikipedia.org/wiki/Internet_forum) のソフトウェア。

- [Akkoma](https://akkoma.social/) - Mastodon、GNU social、ActivityPubと互換性を持つ、フェデレート型のマイクロブロギングサーバー。([Source Code](https://akkoma.dev/AkkomaGang/akkoma)) `AGPL-3.0` `Elixir/Docker`
- [Answer](https://answer.apache.org) - 知識ベースを備えたコミュニティソフトウェア。製品技術サポート、顧客サポート、ユーザー間のコミュニケーションなど、あなたのQ&Aコミュニティを迅速に構築できます。([Source Code](https://github.com/apache/answer)) `Apache-2.0` `Docker/Go`
- [Artalk](https://artalk.js.org/) - Golangで構築されたコメントシステム。ウェブサイトにコメントを追加するための軽量かつ高度にカスタマイズ可能なソリューションを提供します。([Source Code](https://github.com/ArtalkJS/Artalk)) `MIT` `Go/Docker`
- [AsmBB](https://board.asm32.info) - ASMで書かれた、高速かつSQLiteを活用したフォーラムエンジン。([Source Code](https://asm32.info/fossil/asmbb/index)) `EUPL-1.2` `Assembly`
- [BuddyPress](https://buddypress.org/about/) - WordPress.orgをベースにしたサイトを、ユーザープロフィール、アクティビティストリーム、ユーザーグループなど、ソーシャルネットワーク機能でさらに強化する強力なプラグイン。([Source Code](https://github.com/buddypress/BuddyPress)) `GPL-2.0` `PHP`
- [Coral](https://coralproject.net/) - Vox Mediaによるより良いコメント体験。([Source Code](https://github.com/coralproject/talk)) `Apache-2.0` `Docker/Nodejs`
- [diaspora*](https://diasporafoundation.org/) - 分散型ソーシャルネットワーキングサーバー。([Source Code](https://github.com/diaspora/diaspora)) `AGPL-3.0` `Ruby`
- [Discourse](https://www.discourse.org/) - RubyおよびJSをベースとした高度なフォーラム／コミュニティソリューション。([Demo](https://try.discourse.org/), [Source Code](https://github.com/discourse/discourse)) `GPL-2.0` `Docker`
- [Elgg](https://elgg.org/) - 強力なオープンソースソーシャルネットワーキングエンジン。([Source Code](https://github.com/Elgg/Elgg)) `GPL-2.0` `PHP`
- [Enigma 1/2 BBS](https://nuskooler.github.io/enigma-bbs/) - Enigma 1/2は、無限の"呼び出し者"とDOSドアゲームのlegacyサポートを備えた現代的なマルチプラットフォームBBSエンジン。([Source Code](https://github.com/NuSkooler/enigma-bbs)) `BSD-2-Clause` `Shell/Docker/Nodejs`
- [Flarum](https://flarum.org) - 快適でシンプルなフォーラム。Flarumは、オンラインディスカッションを再び楽しいものにした次世代フォーラムソフトウェアです。([Source Code](https://github.com/flarum/flarum)) `MIT` `PHP`
- [Friendica](https://friendi.ca/) - ソーシャルコミュニケーションサーバー。([Source Code](https://github.com/friendica/friendica)) `AGPL-3.0` `PHP`
- [GoToSocial](https://docs.gotosocial.org/en/latest/) - ActivityPubを実装した、MastodonクライアントAPIに対応するフェデレート型ソーシャルネットワーキングサーバー。（[Source Code](https://codeberg.org/superseriousbusiness/gotosocial)） `AGPL-3.0` `Docker/Go`
- [Habitat](https://gethabitat.org/) - 地域コミュニティ向けのプラットフォーム。（[Source Code](https://github.com/carlnewton/habitat)） `AGPL-3.0` `Docker`
- [Hatsu](https://hatsu.cli.rs/) - あなたの静的サイトの代わりに、Fediverseと相互作用するブリッジ。（[Source Code](https://github.com/importantimport/hatsu)） `AGPL-3.0` `Docker/Rust`
- [Hubzilla](https://hubzilla.org) - 分散型のアイデンティティ、プライバシー、投稿、共有、クラウドストレージ、およびコミュニケーション／ソーシャルプラットフォーム。（[Source Code](https://framagit.org/hubzilla/core)） `MIT` `PHP`
- [HumHub](https://www.humhub.org/) - プライベートなソーシャルネットワーク向けのフレキシブルなツールキット。（[Source Code](https://github.com/humhub/humhub)） `AGPL-3.0` `PHP`
- [Iceshrimp.NET](https://iceshrimp.net) - ActivityPubを介して通信するフェデレート型マイクロブロギングサーバー。（[Source Code](https://iceshrimp.dev/iceshrimp/iceshrimp.net)） `EUPL-1.2` `.NET/C#/Docker`
- [Isso](https://isso-comments.de/) - PythonとJavaScriptで書かれた軽量コメントサーバー。Disqusの代替として使用できるように設計されている。（[Source Code](https://github.com/isso-comments/isso)） `MIT` `Python/Docker`
- [Lemmy](https://join-lemmy.org/) - Fediverse向けのリンク集計ツール（Redditの代替）。（[Source Code](https://github.com/LemmyNet/lemmy)） `AGPL-3.0` `Docker/Rust`
- [Loomio](https://www.loomio.org/) - 誰でも参加しやすい意思決定ツール。彼らが影響を受ける決定に参加できるようにする。（[Source Code](https://github.com/loomio/loomio)） `AGPL-3.0` `Docker`
- [Mastodon](https://joinmastodon.org/) - フェデレート型マイクロブロギングサーバー。（[Source Code](https://github.com/mastodon/mastodon), [Clients](https://github.com/hyperupcall/awesome-mastodon)） `AGPL-3.0` `Ruby`
- [Misago](https://misago-project.org/) - 高速でスケーラブルかつレスポンスの良い、完全機能を備えた現代的なフォーラムアプリケーション。（[Source Code](https://github.com/rafalp/Misago)） `GPL-2.0` `Docker`
- [Misskey](https://misskey.io/) - ActivityPubプロトコルを用いてGNU socialやMastodonと同様に動作する、分散型アプリ風のマイクロブロギングサーバー／SNS。（[Source Code](https://github.com/misskey-dev/misskey)） `AGPL-3.0` `Nodejs/Docker`
- [Movim](https://movim.eu/) - XMPPに基づく現代的な、フェデレート型ソーシャルネットワーク。完全機能のグループチャット、サブスクリプション、マイクロブロギングを備えている。（[Source Code](https://github.com/movim/movim)） `AGPL-3.0` `PHP/Docker`
- [MyBB](https://mybb.com/) - 無料で拡張可能なフォーラムソフトウェアパッケージ。（[Source Code](https://github.com/mybb/mybb)） `LGPL-3.0` `PHP`
- [NodeBB](https://nodebb.org/) - 現代ウェブ向けに設計されたフォーラムソフトウェア。（[Demo](https://try.nodebb.org/), [Source Code](https://github.com/NodeBB/NodeBB)） `GPL-3.0` `Nodejs/Docker`
- [OSSN](https://www.opensource-socialnetwork.org/) - あなたがソーシャルネットワーキングサイトを作成できるソフトウェア。メンバーが共通の職業的または個人的な関心を持つ人々と社会的関係を築けるように支援する。（[Source Code](https://github.com/opensource-socialnetwork/opensource-socialnetwork)） `CAL-1.0` `PHP`
- [phpBB](https://www.phpbb.com/) - グループとの連絡を保つために使えるフラットフォーラムの掲示板ソフトウェア。あなたの全体のウェブサイトを動かすこともできる。（[Source Code](https://github.com/phpbb/phpbb)） `GPL-2.0` `PHP`
- [PieFed](https://join.piefed.social) - Fediverse向けのリンク集計ツール／Redditのクローン（Redditの代替）。（[Demo](https://piefed.social), [Source Code](https://codeberg.org/rimu/pyfedi)） `AGPL-3.0` `Python/Docker`
- [PixelFed](https://pixelfed.social) - 倫理的な写真共有プラットフォーム。ActivityPubフェデレーションによって駆動（Instagramの代替）。（[Source Code](https://github.com/pixelfed/pixelfed)） `AGPL-3.0` `PHP`
- [Pleroma](https://pleroma.social) - フェデレート型マイクロブロギングサーバー、Mastodon、GNU social、およびActivityPub対応。（[Source Code](https://git.pleroma.social/pleroma/pleroma)） `AGPL-3.0` `Elixir`
- [qpixel](https://codidact.com/) - Q&Aベースのコミュニティによる知識共有ソフトウェア。 ([Source Code](https://github.com/codidact/qpixel)) `AGPL-3.0` `Ruby`
- [Redlib](https://github.com/redlib-org/redlib) `⚠` - Redditの代替的なプライベートフロントエンドであり、その起源はLibredditにある。 `AGPL-3.0` `Rust`
- [remark42](https://remark42.com/) - 軽量かつシンプルなコメントエンジンであり、ユーザーを監視しない。ブログ、記事、または読者にコメントを追加できる場所に埋め込むことができる。 ([Demo](https://remark42.com/demo/), [Source Code](https://github.com/umputun/remark42)) `MIT` `Docker/Go`
- [Scoold](https://scoold.com) - JARに収録されたStack Overflow。フルテキスト検索、SAML、LDAPの統合、およびソーシャルログインをサポートする企業向けQ&Aプラットフォーム。 ([Demo](https://live.scoold.com), [Source Code](https://github.com/Erudika/scoold)) `Apache-2.0` `Java/Docker/K8S`
- [Simple Machines Forum](https://www.simplemachines.org/) - 無料で、プロフェッショナルなレベルのソフトウェアパッケージであり、数分で独自のオンラインコミュニティを構築できる。 ([Source Code](https://github.com/SimpleMachines/SMF)) `BSD-3-Clause` `PHP`
- [Socialhome](https://socialhome.network) - フェデレートかつ分散型のプロフィールビルダーおよびソーシャルネットワークエンジン。 ([Demo](https://socialhome.network/), [Source Code](https://github.com/jaywink/socialhome)) `AGPL-3.0` `Docker/Python`
- [Talkyard](https://www.talkyard.io/) - ユーザーがアイデアを提案し、質問に答えることができるコミュニティを構築し、フレンドリーなオープンエンドのディスカッションやチャット（Slack/StackOverflow/Discourse/Reddit/Disqusハイブリッド）を行う。 ([Demo](https://www.talkyard.io/forum/latest), [Source Code](https://github.com/debiki/talkyard)) `AGPL-3.0` `Docker/Scala`
- [yarn.social](https://yarn.social) - セルフホスト型、Twitter™風の分散型マイクロログインプラットフォーム。広告なし、トラッキングなし、あなたのコンテンツ、あなたのデータ。 ([Source Code](https://git.mills.io/yarnsocial/yarn)) `MIT` `Go`


### Communication - Video Conferencing

**[`^        back to top        ^`](#awesome-selfhosted)**

[Video/Web Conferencing](https://en.wikipedia.org/wiki/Web_conferencing) ツールとソフトウェア。

関連情報: [Conference Management](#conference-management)

- [BigBlueButton](https://bigbluebutton.org/) - リアルタイムでオーディオ、ビデオ、スライド（白板制御付き）、チャット、および画面の共有をサポート。講師は、ポーリング、エモジ、およびブレイクアウトルームを使って遠隔学生とインタラクションを行うことができる。 ([Source Code](https://github.com/bigbluebutton/bigbluebutton)) `LGPL-3.0` `Java`
- [Galene](https://galene.org/) - 簡単に展開でき、中程度のサーバーリソースを必要とするビデオ会議サーバー。 ([Source Code](https://github.com/jech/galene)) `MIT` `Go`
- [Janus](https://janus.conf.meetecho.com/) - 汎用的な、軽量でミニマリズムのWebRTCサーバー。 ([Demo](https://janus.conf.meetecho.com/demos/), [Source Code](https://github.com/meetecho/janus-gateway)) `GPL-3.0` `C`
- [Jitsi Meet](https://jitsi.org/Projects/JitsiMeet) - Jitsi Videobridgeを使用して、高品質かつスケーラブルなビデオ会議を提供するWebRTCアプリケーション。 ([Demo](https://meet.jit.si), [Source Code](https://github.com/jitsi/jitsi-meet)) `Apache-2.0` `Nodejs/Docker/deb`
- [Jitsi Video Bridge](https://jitsi.org/Projects/JitsiVideobridge) - WebRTC対応の選択的フォワーディングユニット（SFU）により、複数ユーザー間のビデオ通信が可能。 ([Source Code](https://github.com/jitsi/jitsi-videobridge)) `Apache-2.0` `Java/deb`
- [MiroTalk C2C](https://c2c.mirotalk.com) - リアルタイムのカメラ対カメラビデオ通話およびスクリーン共有、端末間暗号化、任意のウェブサイトにiframeで埋め込むことができる。 ([Source Code](https://github.com/miroslavpejic85/mirotalkc2c)) `AGPL-3.0` `Nodejs/Docker`
- [MiroTalk P2P](https://p2p.mirotalk.com) - すべてのブラウザおよびプラットフォームに対応し、4kおよび60fpsまで可能なシンプルで安全かつ高速なリアルタイムビデオ会議。 ([Demo](https://p2p.mirotalk.com/newcall), [Source Code](https://github.com/miroslavpejic85/mirotalk)) `AGPL-3.0` `Nodejs/Docker`
- [MiroTalk SFU](https://sfu.mirotalk.com) - すべてのブラウザおよびプラットフォームに対応し、4kまで可能なシンプルで安全かつスケーラブルなリアルタイムビデオ会議。 ([Demo](https://sfu.mirotalk.com/newroom), [Source Code](https://github.com/miroslavpejic85/mirotalksfu)) `AGPL-3.0` `Nodejs/Docker`
- [plugNmeet](https://www.plugnmeet.org/) - スケーラブルかつ高性能なウェブ会議システム。 ([Demo](https://demo.plugnmeet.com/login.html), [Source Code](https://github.com/mynaparrot/plugNmeet-server)) `MIT` `Docker/Go`


### Communication - XMPP - Servers

**[`^        back to top        ^`](#awesome-selfhosted)**

[Extensible Messaging and Presence Protocol](https://en.wikipedia.org/wiki/XMPP) サーバー。

- [ejabberd](https://www.ejabberd.im/) - XMPPのインスタントメッセージングサーバー。 ([Source Code](https://github.com/processone/ejabberd)) `GPL-2.0` `Erlang/Docker`
- [MongooseIM](https://www.erlang-solutions.com/products/mongooseim.html) - パフォーマンスとスケーラビリティに注目したモバイルメッセージングプラットフォーム。 ([Source Code](https://github.com/esl/MongooseIM)) `GPL-2.0` `Erlang/Docker/K8S`
- [Openfire](https://www.igniterealtime.org/projects/openfire/) - リアルタイム協働（RTC）サーバー。 ([Source Code](https://github.com/igniterealtime/Openfire)) `Apache-2.0` `Java`
- [Prosody IM](https://prosody.im/) - 機能が豊富で設定が容易なXMPPサーバー。（[Source Code](https://hg.prosody.im/)） `MIT` `Lua`
- [Snikket](https://snikket.org/) - すべてを一括でDocker化された簡単なXMPPソリューション、ウェブ管理画面とクライアントを含む。（[Source Code](https://github.com/snikket-im/snikket-server), [Clients](https://snikket.org/app/)） `Apache-2.0` `Docker`
- [Tigase](https://tigase.net/xmpp-server) - Javaで実装されたXMPPサーバー。（[Source Code](https://github.com/tigase/tigase-server)） `GPL-3.0` `Java`


### Communication - XMPP - Web Clients

**[`^        back to top        ^`](#awesome-selfhosted)**

[Extensible Messaging and Presence Protocol](https://en.wikipedia.org/wiki/XMPP) ネットワーククライアント/インターフェース。

- [Converse.js](https://conversejs.org/) - ブラウザ上で動作するXMPPチャットクライアント。（[Source Code](https://github.com/conversejs/converse.js)） `MPL-2.0` `Javascript`
- [Libervia](https://repos.goffi.org/libervia-web) - Salut à Toiからのウェブフロントエンド。 `AGPL-3.0` `Python`
- [Salut à Toi](https://www.salut-a-toi.org/) - 多目的、複数のフロントエンドを備え、自由で分散型のコミュニケーションツール。（[Source Code](https://repos.goffi.org/libervia-backend)） `AGPL-3.0` `Python`


### Community-Supported Agriculture (CSA)

**[`^        back to top        ^`](#awesome-selfhosted)**

地域支援農業および食品協同組合向けの管理および行政ツール

関連： [E-commerce](#e-commerce)

- [ACP Admin](https://acp-admin.ch/) - CSA管理。メンバー、サブスクリプション、配達、投げ出し場所、参加状況、請求書およびメール（フランス語のドキュメントあり）。（[Source Code](https://github.com/csa-admin-org/csa-admin)） `MIT` `Ruby`
- [FoodCoopShop](https://www.foodcoopshop.com/) - 食のコープ向けに使いやすいソフトウェア。（[Source Code](https://github.com/foodcoopshop/foodcoopshop)） `AGPL-3.0` `PHP/Docker`
- [Foodsoft](https://foodcoops.net/) - 非営利食のコープを管理（商品カタログ、注文、会計、業務スケジュール）。（[Source Code](https://github.com/foodcoops/foodsoft)） `AGPL-3.0` `Docker/Ruby`
- [Hive-Pal](https://hivepal.app) - 蜂の管理アプリ。ハives、点検、女王記録、設備を追跡し、現場でのデータ入力に最適化されたシンプルなデータ入力機能を備えている。（[Demo](https://hivepal.app), [Source Code](https://github.com/martinhrvn/hive-pal)） `MIT` `Nodejs/Docker`
- [juntagrico](https://juntagrico.org/) - コミュニティガーデンや野菜コープ向けの管理プラットフォーム。（[Source Code](https://github.com/juntagrico/juntagrico)） `LGPL-3.0` `Python`
- [Open Food Network](https://www.openfoodnetwork.org/) - 地域の食のオンラインマーケットプレイス。農家と食のハブが個人や地域企業とつながるネットワークを構築する。（[Source Code](https://github.com/openfoodfoundation/openfoodnetwork)） `AGPL-3.0` `Ruby`
- [OpenOlitor](https://openolitor.org/) - コミュニティサポート農業グループ向けの管理プラットフォーム。（[Source Code](https://github.com/OpenOlitor/openolitor-server)） `AGPL-3.0` `Scala`
- [teikei](https://github.com/teikei/teikei) - クラウドソースデータに基づいてコミュニティサポート農業をマップするウェブアプリ。（[Demo](https://ernte-teilen.org/karte/#/)） `AGPL-3.0` `Nodejs`


### Conference Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[abstracts](https://en.wikipedia.org/wiki/Abstract_management) の提出用ソフトウェアおよび学術会議の準備・管理用ソフトウェア

関連： [Communication - Video Conferencing](#communication---video-conferencing)

- [indico](https://getindico.io/) - 機能が豊富なイベント管理システム、CERN（ウェブが誕生した場所）で開発された。（[Demo](https://sandbox.getindico.io/), [Source Code](https://github.com/indico/indico)） `MIT` `Python`
- [motion.tools (Antragsgrün)](https://motion.tools/) - （政治）会議における議案および修正案の管理。（[Demo](https://sandbox.motion.tools/createsite), [Source Code](https://github.com/CatoTH/antragsgruen)） `AGPL-3.0` `PHP/Docker`
- [OpenSlides](https://openslides.com/) - 議会の議事、議案、選挙を管理・投影するためのプレゼンテーションおよびアセンブリシステム。（[Demo](https://demo.openslides.org/login), [Source Code](https://github.com/OpenSlides/OpenSlides)） `MIT` `Docker`
- [osem](https://osem.io/) - フリーソフトウェアコンファレンス向けのイベント管理。（[Source Code](https://github.com/openSUSE/osem)） `MIT` `Ruby/Docker`
- [pretalx](https://pretalx.org) - ウェブベースのイベント管理、論文募集、提出物の審査、講演スケジュールの管理を含む。各種関連ツールとのエクスポート・インポート機能を備える。（[Source Code](https://github.com/pretalx/pretalx)） `Apache-2.0` `Python`


### Content Management Systems (CMS)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Content Management Systems](https://en.wikipedia.org/wiki/Content_management_system) は、第三者プラグイン、テーマおよび機能を用いて、多くの機能を備えたウェブサイトを実装するための実用的な方法を提供する。

_関連： [Blogging Platforms](#blogging-platforms), [Static Site Generators](#static-site-generators), [Photo Galleries](#photo-galleries)_

- [Alfresco Community Edition](https://www.alfresco.com/products/community/download) - コンテンツの種類に制限なく扱えるオープンソースのエンタープライズコンテンツ管理ソフトウェア。ユーザーがコンテンツを簡単に共有・協働できるようにする。（[Source Code](https://github.com/Alfresco/alfresco-community-repo)） `LGPL-3.0` `Java`
- [Apostrophe](https://apostrophecms.com/) - CMSで、文脈内編集ツールの拡張性に焦点を当てるもの。([Demo](https://apostrophecms.com/demo), [Source Code](https://github.com/apostrophecms/apostrophe)) `MIT` `Nodejs`
- [Automad](https://automad.org/) - フラットファイルコンテンツ管理システムおよびテンプレートエンジン。([Demo](https://try.automad.org/), [Source Code](https://github.com/marcantondahmen/automad)) `MIT` `PHP/Docker`
- [Backdrop CMS](https://backdropcms.org/) - 中小企業や非営利団体向けの包括的なCMS。([Source Code](https://github.com/backdrop/backdrop)) `GPL-2.0` `PHP`
- [Bludit](https://www.bludit.com/) `⚠` - サイトやブログを数秒で構築。Bluditは投稿やページをJSON形式のテキストファイルで保存する。([Source Code](https://github.com/bludit/bludit)) `MIT` `PHP`
- [Bolt CMS](https://boltcms.io/) - できるだけシンプルで明確なコンテンツ管理ツール。([Source Code](https://github.com/bolt/core)) `MIT` `PHP`
- [CMS Made Simple](https://www.cmsmadesimple.org/) - ウェブサイトコンテンツの管理をより速く、簡単に行い、中小企業から大企業までスケーラブル。([Source Code](http://svn.cmsmadesimple.org/svn/cmsmadesimple/trunk/)) `GPL-2.0` `PHP`
- [Cockpit](https://getcockpit.com) - どんな構造化コンテンツも管理できるシンプルなコンテンツプラットフォーム。([Source Code](https://github.com/Cockpit-HQ/Cockpit)) `MIT` `PHP`
- [Concrete 5 CMS](https://www.concretecms.com) - オープンソースコンテンツ管理システム。([Source Code](https://github.com/concretecms/concretecms)) `MIT` `PHP`
- [Contao](https://contao.org/) - プロフェッショナルなウェブサイトやスケーラブルなウェブアプリケーションを作成できる強力なCMS。([Demo](https://demo.contao.org/contao), [Source Code](https://github.com/contao/contao/)) `LGPL-3.0` `PHP`
- [CouchCMS](https://www.couchcms.com/) - デザイナー向けのCMS。([Source Code](https://github.com/CouchCMS/CouchCMS)) `CPAL-1.0` `PHP`
- [Drupal](https://www.drupal.org/) - 高度なオープンソースコンテンツ管理プラットフォーム。([Source Code](https://git.drupalcode.org/project/drupal)) `GPL-2.0` `PHP`
- [eLabFTW](https://www.elabftw.net) - 研究室向けオンラインノートブック。実験を保存し、データベースで反応物やプロトコルを検索し、信頼できるタイムスタンプで実験を法的に記録し、PDFまたはZIPアーカイブにエクスポートし、協力者と共有できる。([Demo](https://demo.elabftw.net), [Source Code](https://github.com/elabftw/elabftw)) `AGPL-3.0` `PHP`
- [Expressa](https://github.com/thomas4019/expressa) - JSONスキーマを使用したデータベース駆動型ウェブサイトを動かすためのコンテンツ管理システム。権限管理と自動REST APIを提供。(`MIT`, `Nodejs`)
- [Joomla!](https://www.joomla.org/) - 高度なコンテンツ管理システム（CMS）。([Source Code](https://github.com/joomla/joomla-cms)) `GPL-2.0` `PHP`
- [KeystoneJS](https://keystonejs.com/) - CMSおよびウェブアプリケーションプラットフォーム。([Source Code](https://github.com/keystonejs/keystone)) `MIT` `Nodejs`
- [Localess](https://localess.org/home) `⚠` - 強力な翻訳管理およびコンテンツ管理システム。AIを活用して、あなたのウェブサイトやアプリのコンテンツを複数言語に管理・翻訳できる。([Source Code](https://github.com/Lessify/localess)) `MIT` `Docker`
- [MODX](https://modx.com/) - 高度なコンテンツ管理および発行プラットフォーム。現在のバージョンは「Revolution」と呼ばれている。([Source Code](https://github.com/modxcms/revolution)) `GPL-2.0` `PHP`
- [Neos](https://www.neos.io) - NeosまたはTYPO3 Neos（バージョン1用）は、現代的なオープンソースCMSである。([Source Code](https://github.com/neos)) `GPL-3.0` `PHP`
- [Noosfero](https://gitlab.com/noosfero/noosfero) - ソーシャル・ソリデティーエコノミーのネットワーク向けプラットフォーム。ブログ、e-ポートフォリオ、CMS、RSS、テーマ別ディスカッション、イベントスケジュール、そしてソリデティーエコノミーのための集団知を一つのシステムで提供。(`AGPL-3.0`, `Ruby`)
- [Omeka](https://omeka.org) - 複雑なストーリーを作成し、豊かなコレクションを共有。Dublin Core基準に準拠したOmekaでサーバー上に構築し、学術研究者、美術館、図書館、アーカイブ、愛好家向けに設計。([Demo](https://omeka.org/classic/showcase/), [Source Code](https://github.com/omeka/Omeka)) `GPL-3.0` `PHP`
- [Payload CMS](https://payloadcms.com/) - 開発者中心のヘッドレスCMSおよびアプリケーションフレームワーク。（[Source Code](https://github.com/payloadcms/payload)）`MIT` `Nodejs`
- [Pimcore](http://www.pimcore.com/) - マルチチャネル体験およびエンゲージメント管理プラットフォーム。（[Source Code](https://github.com/pimcore/pimcore)）`GPL-3.0` `PHP/Docker`
- [Plone](https://plone.org/) - 強力なオープンソースCMSシステム。（[Source Code](https://github.com/plone)）`ZPL-2.0` `Python/Docker`
- [Publify](https://publify.github.io/) - シンプルながらも機能が豊富なウェブ出版ソフトウェア。（[Source Code](https://github.com/publify/publify)）`MIT` `Ruby`
- [Pushword](https://pushword.piedweb.com) - Symfonyに基づくコンテンツ管理システム。ページはMarkdown、テーマはTwigで、オプションでGitベースのフラットファイルストレージをサポート。（[Source Code](https://github.com/Pushword/Pushword)，[Clients](https://pushword.piedweb.com/extensions)）`MIT` `PHP`
- [REDAXO](https://www.redaxo.org) - シンプルで柔軟で便利なコンテンツ管理システム（ドイツ語のドキュメンテーションあり）。（[Source Code](https://github.com/redaxo/core)）`MIT` `PHP/Docker`
- [SilverStripe](https://www.silverstripe.org) - 使いやすいCMSで、強力なMVCフレームワークをベースにしている。（[Demo](https://demo.silverstripe.org/)，[Source Code](https://github.com/silverstripe)）`BSD-3-Clause` `PHP`
- [SPIP](https://www.spip.net/fr) - ウェブ作者にとって使いやすい、協働作業、多言語環境、シンプルな運用を目的としたインターネット向け出版システム。（[Source Code](https://git.spip.net/)）`GPL-3.0` `PHP`
- [Squidex](https://squidex.io) - MongoDB、CQRSおよびイベントソースに基づくヘッドレスCMS。（[Demo](https://cloud.squidex.io)，[Source Code](https://github.com/Squidex/squidex)）`MIT` `.NET`
- [Strapi](https://strapi.io/) - 最も先進的なオープンソースコンテンツ管理フレームワーク（ヘッドレスCMS）で、強力なAPIを簡単に構築できる。（[Source Code](https://github.com/strapi/strapi)）`MIT` `Nodejs`
- [Superdesk](https://superdesk.org/) `⚠` - ニュースの作成、生産、キュレーション、配信、公開を一貫して行うプラットフォーム。（[Source Code](https://github.com/superdesk/superdesk)）`AGPL-3.0` `Docker/Python/PHP`
- [Textpattern](https://textpattern.com/) - 柔軟で洗練され、使いやすいCMS。（[Demo](https://textpattern.co/demo)，[Source Code](https://github.com/textpattern/textpattern)）`GPL-2.0` `PHP`
- [Typemill](https://typemill.net/) - 作者に優しいフラットファイルCMSで、vue.jsに基づく視覚的なMarkdownエディタを備えている。（[Source Code](https://github.com/typemill/typemill)）`MIT` `PHP`
- [TYPO3](https://typo3.org/) - 強力で先進的なCMSで、大きなコミュニティを有している。（[Source Code](https://github.com/TYPO3/typo3)）`GPL-2.0` `PHP`
- [Umbraco](https://umbraco.com/) - 親しみやすいCMS。無料かつオープンソースで、素晴らしいコミュニティを有している。（[Source Code](https://github.com/umbraco/Umbraco-CMS)）`MIT` `.NET`
- [Vvveb CMS](https://www.vvveb.com) - 強力で使いやすいCMSで、ウェブサイト、ブログ、電子商取引ストアを構築できる。（[Demo](https://demo.vvveb.com)，[Source Code](https://github.com/givanz/Vvveb)）`AGPL-3.0` `PHP/Docker`
- [Wagtail](https://wagtail.io/) - Djangoに基づくコンテンツ管理システムで、柔軟性とユーザーエクスペリエンスに焦点を当てている。（[Source Code](https://github.com/wagtail/wagtail)）`BSD-3-Clause` `Python`
- [WinterCMS](https://wintercms.com/) - Laravel PHPフレームワークに基づく高速かつ安全なコンテンツ管理システム。（[Source Code](https://github.com/wintercms/winter)）`MIT` `PHP`
- [WonderCMS](https://www.wondercms.com) - WonderCMSは2008年以降で最も小さなフラットファイルCMSである。（[Demo](https://www.wondercms.com/demo)，[Source Code](https://github.com/WonderCMS/wondercms)）`MIT` `PHP`
- [WordPress](https://wordpress.org/) - 世界で最も使われているブログおよびCMSエンジン。（[Source Code](https://github.com/WordPress/WordPress)）`GPL-2.0` `PHP`


### Customer Relationship Management (CRM)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Customer relationship management (CRM)](https://en.wikipedia.org/wiki/Customer_relationship_management)は、組織が顧客との相互作用を管理・分析・改善するために用いる戦略的プロセスである。

_関連： [Communication - Email - Mailing Lists and Newsletters](#communication---email---mailing-lists-and-newsletters), [Analytics](#analytics), [Calendar & Contacts](#calendar--contacts)_

- [Corteza](https://docs.cortezaproject.org) - CRMが統合されたワークスペース、企業向けメッセージング、低コード環境を備え、記録ベースの管理ソリューションを迅速かつ安全に提供する。([Demo](https://latest.cortezaproject.org), [Source Code](https://github.com/cortezaproject/corteza)) `Apache-2.0` `Go`
- [Django-CRM](https://DjangoCRM.github.io/info/) - 分析CRMにタスク管理、メールマーケティングなど多数の機能を備えている。Django CRMは個人利用、企業規模に関わらず、フリーランスにも対応し、簡単にカスタマイズし、迅速に開発できるように設計されている。([Source Code](https://github.com/DjangoCRM/django-crm)) `AGPL-3.0` `Python`
- [EspoCRM](https://www.espocrm.com/) - フロントエンドがシングルページアプリとして設計されたCRMおよびREST API。([Demo](https://demo.espocrm.com/), [Source Code](https://github.com/espocrm/espocrm)) `AGPL-3.0` `PHP`
- [Krayin](https://krayincrm.com/) - 中小企業および大企業向けの顧客ライフサイクル管理を可能にするCRMソリューション。([Demo](https://demo.krayincrm.com/), [Source Code](https://github.com/krayin/laravel-crm)) `MIT` `PHP`
- [Monica](https://monicahq.com/) - 個人用の関係管理ツールであり、友人や家族とのやり取りを整理するための新しいタイプのCRM。([Source Code](https://github.com/monicahq/monica)) `AGPL-3.0` `PHP/Docker`
- [SuiteCRM](https://suitecrm.com) - 賞を受賞した、企業向けオープンソースCRM。([Source Code](https://github.com/SuiteCRM/SuiteCRM)) `AGPL-3.0` `PHP`
- [Twenty](https://twenty.com) - 現代的なCRMで、オープンソースの柔軟性、高度な機能、そして洗練されたデザインを提供。([Source Code](https://github.com/twentyhq/twenty)) `AGPL-3.0` `Docker`


### Database Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[database](https://en.wikipedia.org/wiki/Database)のウェブインターフェースによる管理。データベース分析および可視化用のツールを含む。

_関連： [Analytics](#analytics), [Automation](#automation)_

参照も： [dbdb.io - Database of Databases](https://dbdb.io/)

- [Adminer](https://www.adminer.org/) - 1つのPHPファイルでデータベース管理。MySQL、MariaDB、PostgreSQL、SQLite、MS SQL、Oracle、Elasticsearch、MongoDBなどに対応。([Source Code](https://github.com/vrana/adminer)) `Apache-2.0/GPL-2.0` `PHP`
- [Azimutt](https://azimutt.app) - 実際のデータベース（大きなものや複雑なもの）に特化した視覚的なデータベース探索。データベースのスキーマやデータを探索し、記述し、拡張し、分析やガイドラインを取得できる。([Demo](https://azimutt.app/gallery/gospeak), [Source Code](https://github.com/azimuttapp/azimutt)) `MIT` `Elixir/Nodejs/Docker`
- [Baserow](https://baserow.io/) - 技術経験がなくても自作データベースを作成できる（Airtableの代替）。([Source Code](https://gitlab.com/baserow/baserow)) `MIT` `Docker`
- [Bytebase](https://www.bytebase.com/) - DevOpsチーム向けの安全なデータベーススキーマ変更とバージョン管理。MySQL、PostgreSQL、TiDB、ClickHouse、Snowflakeに対応。([Demo](https://demo.bytebase.com), [Source Code](https://github.com/bytebase/bytebase)) `MIT` `Docker/K8S/Go`
- [Chartbrew](https://chartbrew.com) - データベースやAPIに直接接続し、データを使って美しいチャートを作成できる。([Demo](https://app.chartbrew.com/live-demo), [Source Code](https://github.com/chartbrew/chartbrew)) `MIT` `Nodejs/Docker`
- [ChartDB](https://chartdb.io/) - 1つのクエリでデータベースの可視化と設計を行うデータベース図鑑編集ツール。([Demo](https://app.chartdb.io), [Source Code](https://github.com/chartdb/chartdb)) `AGPL-3.0` `Nodejs/Docker`
- [CloudBeaver](https://dbeaver.com/) - データベースを管理。PostgreSQL、MySQL、SQLiteなどに対応。DBeaverのウェブ/ホスティング版。([Source Code](https://github.com/dbeaver/cloudbeaver)) `Apache-2.0` `Docker`
- [d9](https://d9.webcapsule.io) - SQLデータベースを直感的な管理インターフェースで安全なAPIに変換。データプラットフォームおよびヘッドレスCMS（Directusのフォーク）。([Source Code](https://github.com/LaWebcapsule/d9)) `GPL-3.0` `Nodejs`
- [Databunker](https://databunker.org/) - ネットワークベースで、自前ホスティング可能で、GDPR対応、個人データやPIIを安全に扱うデータベース。([Source Code](https://github.com/securitybunker/databunker)) `MIT` `Docker`
- [Datasette](https://datasette.io/) - データの探索と公開を簡単なインポート・エクスポートとデータベース管理で行える。([Source Code](https://github.com/simonw/datasette)) `Apache-2.0` `Python/Docker`
- [Evidence](https://evidence.dev) - コードベースのBIツール。SQLとマーカードを使ってレポートを作成し、ウェブサイトとして表示される。([Source Code](https://github.com/evidence-dev/evidence)) `MIT` `Nodejs`
- [LibreDB Studio](https://libredb.org) - PostgreSQL、MySQL、Oracle、SQL Server、SQLite、MongoDBおよびRedis向けのブラウザベースSQL IDE。オプションで自然言語からSQLを書くAIアシスタント（DataGrip、DBeaverの代替）。([Source Code](https://github.com/libredb/libredb-studio)) `MIT` `Docker/K8S`
- [Limbas](https://www.limbas.com/en/) - データベース駆動型ビジネスアプリケーションの開発に用いるデータベースフレームワーク。グラフィカルなデータベースフロントエンドとして、データの大量処理と柔軟なデータベースアプリケーション開発を可能にする。([Source Code](https://github.com/limbas/limbas)) `GPL-2.0` `PHP`
- [Mathesar](https://mathesar.org/) - 直感的なUIにより、すべての技術レベルのユーザーが協働してデータを管理できます。Postgresに構築されており、既存のDBを接続したり、新しいDBを設定できます。（[Source Code](https://github.com/mathesar-foundation/mathesar)） `GPL-3.0` `Docker/Python`
- [OrcaQ](https://orca-q.com) - 現代的なデータベースクライアントおよびIDEで、複数のデータベースタイプを管理・クエリ・探索できます。内蔵AIアシスタントも備えています。（[Source Code](https://github.com/cin12211/orca-q)） `MIT` `Nodejs/deb/Docker`
- [StackRender](https://stackrender.io/) - PostgreSQL、MySQL、MariaDB、SQLite、SQL Server、Oracleをサポートするデータベーススキーマ設計およびSQLマイグレーションジェネレーター。（[Demo](https://app.stackrender.io/), [Source Code](https://github.com/stackrender/stackrender)） `AGPL-3.0` `Nodejs/Docker`


### DNS

**[`^        back to top        ^`](#awesome-selfhosted)**

[DNS](https://en.wikipedia.org/wiki/Domain_Name_System) サーバーおよび管理ツールで、広告ブロッキング機能を備えたもの。主に家庭や小型ネットワーク向け。

関連項目: [awesome-sysadmin/DNS - Servers](https://github.com/awesome-foss/awesome-sysadmin#dns---servers), [awesome-sysadmin/DNS - Control Panels & Domain Management](https://github.com/awesome-foss/awesome-sysadmin#dns---control-panels--domain-management)

- [AdGuard Home](https://adguard.com/en/adguard-home/overview.html) - ユーザーに優しい広告およびトラッカーブロッカーDNSサーバー。（[Source Code](https://github.com/AdguardTeam/AdGuardHome)） `GPL-3.0` `Docker`
- [blocky](https://0xerr0r.github.io/blocky/latest/) - 高速かつ軽量のDNSプロキシとして、ローカルネットワークの広告ブロッキングを実現。多くの機能を備えています（Pi-holeの代替）。（[Source Code](https://github.com/0xERR0R/blocky)） `Apache-2.0` `Go/Docker`
- [Maza ad blocking](https://maza-ad-blocking.andros.dev/) - ローカルの広告ブロッカー。Pi-holeと同様ですが、ローカルで動作し、あなたのオペレーティングシステムを使用します。（[Source Code](https://github.com/tanrax/maza-ad-blocking)） `Apache-2.0` `Shell`
- [Numa](https://numa.rs/) - 広告ブロッキングDNSリゾルバーで、DNSSEC検証付きの再帰リゾルバー、DoH/DoT/無意識DoH、一時的なオーバーライド、ローカルサービスドメインを1つのRustバイナリで提供（Pi-hole、AdGuard Home、NextDNSの代替）。（[Source Code](https://github.com/razvandimescu/numa)） `MIT` `Rust/Docker/Nix`
- [Pi-hole](https://pi-hole.net/) - GUIで管理および監視できるインターネット広告のブラックホール。（[Source Code](https://github.com/pi-hole/pi-hole)） `EUPL-1.2` `Shell/PHP/Docker`
- [Technitium DNS Server](https://technitium.com/dns/) - 認証/再帰DNSサーバーに広告ブロッキング機能を備えたもの。（[Source Code](https://github.com/TechnitiumSoftware/DnsServer)） `GPL-3.0` `Docker/C#`


### Document Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[文書管理システム](https://en.wikipedia.org/wiki/Document_management_system)（DMS）は、文書の受信、追跡、管理、保管を行い、紙の使用量を減らすためのシステムです。

- [BentoPDF](https://bentopdf.com) `⚠` - 高性能でプライバシーを最優先したクライアントサイドPDFツールキット。ブラウザ内でPDFファイルを操作・編集・マージ・処理できます。（[Demo](https://bentopdf.com), [Source Code](https://github.com/alam00000/bentopdf)） `AGPL-3.0` `Nodejs/Docker`
- [Docspell](https://docspell.org) - 自動タグ付けによるドキュメント整理およびアーカイブ。（[Source Code](https://github.com/eikek/docspell)） `GPL-3.0` `Scala/Java/Docker`
- [Documenso](https://documenso.com) - デジタルドキュメント署名プラットフォーム（DocuSignの代替）。（[Source Code](https://github.com/documenso/documenso)） `AGPL-3.0` `Nodejs/Docker`
- [Docuseal](https://www.docuseal.co) - デジタルドキュメントの作成・埋め込み・署名（DocuSignの代替）。（[Demo](https://demo.docuseal.tech/), [Source Code](https://github.com/docusealco/docuseal)） `AGPL-3.0` `Docker`
- [EveryDocs](https://github.com/jonashellmann/everydocs-core) - プライベート用途向けのシンプルなドキュメント管理システム。基本的な機能でドキュメントをデジタルに整理できます。`GPL-3.0` `Docker/Ruby`
- [Gotenberg](https://gotenberg.dev) - ChromiumやLibreOfficeなどの強力なツールと互換性のあるAPIにより、HTML、Markdown、Word、Excelなど多数のドキュメントフォーマットをPDFファイルに変換、さらにその他の機能も提供。（[Source Code](https://github.com/gotenberg/gotenberg)） `MIT` `Docker`
- [I, Librarian](https://i-librarian.net) - PDF論文およびオフィスドキュメントを整理。産業および学術分野の学生や研究グループに多くの追加機能を提供します。（[Demo](https://eu1.i-librarian.net/demo), [Source Code](https://github.com/mkucej/i-librarian-free)） `GPL-3.0` `PHP`
- [Mayan EDMS](https://www.mayan-edms.com) - プレビュー生成、OCR、自動分類など、さまざまな機能を備えた電子ドキュメント管理システム。（[Source Code](https://gitlab.com/mayan-edms/mayan-edms)） `GPL-2.0` `Docker/K8S`
- [OpenSign](https://www.opensignlabs.com) `⚠` - ドキュメント署名ソフトウェア（DocuSignの代替）。（[Source Code](https://github.com/opensignlabs/opensign)） `AGPL-3.0` `Nodejs/Docker`
- [Paperless-ngx](https://docs.paperless-ngx.com/) - 改善されたインターフェースで、すべての紙のドキュメントをスキャン・インデックス・アーカイブできます（Paperlessのフォーク）。（[Demo](https://demo.paperless-ngx.com/), [Source Code](https://github.com/paperless-ngx/paperless-ngx)） `GPL-3.0` `Python/Docker`
- [Papermerge](https://papermerge.com) - スキャンされたドキュメント（電子アーカイブ）に焦点を当てたドキュメント管理システム。ファイルのブラウジングはDropboxやGoogle Driveのように実現。OCR、全文検索、テキストオーバーレイ／選択機能を備えています。（[Source Code](https://github.com/papermerge/papermerge-core)） `Apache-2.0` `Docker/K8S`
- [Papra](https://papra.app) - シンプルに使いやすく、誰でもアクセスできるドキュメントのストレージ、管理、アーカイブプラットフォーム。 ([Demo](https://demo.papra.app/), [Source Code](https://github.com/papra-hq/papra/)) `AGPL-3.0` `Docker`
- [PdfDing](https://www.pdfding.com) - PDFマネージャー、ビュー、エディタ。複数のデバイスでスムーズなユーザー体験を提供。シンプルで、速く、Dockerで簡単にセットアップ可能。 ([Demo](https://demo.pdfding.com), [Source Code](https://github.com/mrmn2/PdfDing)) `AGPL-3.0` `Docker/K8S`
- [SeedDMS](https://www.seeddms.org) - ワークフロー、アクセス権、全文検索など、ドキュメント管理システム。 ([Demo](https://www.seeddms.org/about/), [Source Code](https://sourceforge.net/p/seeddms/code/ci/master/tree/)) `GPL-2.0` `PHP`
- [Signature PDF](https://github.com/24eme/signaturepdf) - 協働、組織、圧縮、メタデータ編集を含むPDFの署名と操作。 ([Demo](https://pdf.24eme.fr/)) `AGPL-3.0` `PHP/deb/Docker`
- [SimpleDMS](https://simpledms.eu) - 小規模企業向けに使いやすく、メタデータ駆動のオープンソースドキュメント管理システム（DMS）。ドキュメントをほぼ自動で分類。 ([Source Code](https://github.com/simpledms/simpledms), [Clients](https://simpledms.eu/en/product/integrations)) `AGPL-3.0` `Docker`
- [Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) - PDFファイルに対してマージ、分割、ファイル変換、OCRなどの操作を行うローカルホストウェブアプリケーション。 `Apache-2.0` `Docker/Java`


### Document Management - E-books

**[`^        back to top        ^`](#awesome-selfhosted)**

[Ebook](https://en.wikipedia.org/wiki/Ebook) ライブラリ管理ソフトウェア。

- [Atsumeru](https://atsumeru.xyz) - マンガ／コミック／ライトノベルメディアサーバー。Windows、Linux、macOS、Android向けクライアントを提供。 ([Source Code](https://github.com/Atsumeru-xyz/Atsumeru), [Clients](https://atsumeru.xyz/guides/#how-does-it-work)) `MIT` `Java/Docker`
- [Bindery](https://github.com/jarynclouatre/bindery) - 電子書籍およびコミック向けのフォルダ監視型コンバータ。EPUBをKobo KEPUBに（kepubifyで）、CBZ/CBR/PDFをKindle Comic Converterで変換。デバイスごとのプロファイル、ComicInfo.xmlによる命名、章を巻にまとめる、Web UIを備える。 `MIT` `Docker`
- [BookLogr](https://github.com/Mozzo1000/booklogr) - 個人の本蔵を簡単に管理できる。 ([Demo](https://demo.booklogr.app/)) `Apache-2.0` `Docker`
- [Calibre Web Automated](https://github.com/crocodilestick/Calibre-Web-Automated) - Calibre-Webの現代的な軽量WebUIと、Calibre（Calibre Webのフォーク）の強力で多様な機能を組み合わせた、ワンストップソリューション。 `GPL-3.0` `Docker`
- [Calibre Web](https://github.com/janeczku/calibre-web) - 既存のCalibreデータベースを使って電子書籍をブラウズ、読む、ダウンロード。 `GPL-3.0` `Python`
- [Calibre](https://calibre-ebook.com/) - 主な電子書籍フォーマットで電子書籍を表示、変換、カタログ化できる電子書籍ライブラリマネージャー。リモートクライアント向けに組み込まれたWebサーバーを提供。 ([Demo](https://calibre-ebook.com/demo), [Source Code](https://github.com/kovidgoyal/calibre)) `GPL-3.0` `Python/deb`
- [Inkheart](https://gitlab.com/Nystik/inkheart) - 軽量なPDFライブラリとリーダー。 `Apache-2.0` `Docker`
- [Kapowarr](https://casvt.github.io/Kapowarr/) - コミックブックライブラリの構築と管理。ダウンロード、名前変更、移動、変換を行い、好みに合わせて巻の問題を処理。 ([Source Code](https://github.com/Casvt/Kapowarr)) `GPL-3.0` `Docker/Python`
- [Kavita](https://www.kavitareader.com/) - クロスプラットフォームの電子書籍／マンガ／コミック／PDFサーバーとウェブリーダー。ユーザー管理、評価、レビュー、メタデータサポートを提供。 ([Demo](https://www.kavitareader.com/#demo), [Source Code](https://github.com/Kareadita/Kavita)) `GPL-3.0` `.NET/Docker`
- [kiwix-serve](https://github.com/kiwix/kiwix-tools) - ZIMファイルからWikiを提供するHTTPデーモン。 `GPL-3.0` `C++`
- [Komga](https://komga.org) - マンガ／コミック／BD向けメディアサーバー。APIおよびOPDSサポート、ライブラリを探索するための現代的なウェブインターフェース、ウェブリーダーを備える。 ([Source Code](https://github.com/gotson/komga)) `MIT` `Java/Docker`
- [MyMangaDB](https://github.com/FabianRolfMatthiasNoll/MyMangaDB) `⚠` - マンガコレクションマネージャー。自動メタデータ、MyAnimeListインポート、詳細なコレクション統計を提供。 `GPL-3.0` `Docker`
- [Stump](https://www.stumpapp.dev) - 高速で無料かつオープンソースのマンガ、コミック、デジタル書籍サーバー。OPDSサポートあり。 ([Source Code](https://github.com/stumpapp/stump)) `MIT` `Rust`


### Document Management - Institutional Repository and Digital Library Software

**[`^        back to top        ^`](#awesome-selfhosted)**

[Institutional repository](https://en.wikipedia.org/wiki/Institutional_repository) および [digital library](https://en.wikipedia.org/wiki/Digital_library) の管理ソフトウェア。

- [DSpace](http://www.dspace.org/) - デジタルリソースへの持続的なアクセスを提供する、即時導入型リポジトリアプリケーション。 ([Source Code](https://github.com/DSpace/DSpace)) `BSD-3-Clause` `Java`
- [EPrints](https://www.eprints.org/) - メタデータとワークフローモデルが柔軟なデジタルドキュメント管理システム。主に学術機関に向けたもの。([Demo](http://tryme.demo.eprints-hosting.org/), [Source Code](https://github.com/eprints/eprints3.4)) `GPL-3.0` `Perl`
- [Fedora Commons Repository](https://wiki.lyrasis.org/display/FF/Fedora+Repository+Home) - 強固でモジュラリティの高いリポジトリシステム。デジタルコンテンツの管理および配信に特化しており、デジタル図書館やアーカイブに特に適しており、アクセスおよび保存の両面に優れている。([Source Code](https://github.com/fcrepo/fcrepo)) `Apache-2.0` `Java`
- [InvenioRDM](https://inveniordm.docs.cern.ch/) - 高スケーラビリティを備えた、使い勝手のよい研究データ管理プラットフォーム。美しいユーザー体験を提供。([Demo](https://inveniordm.web.cern.ch/), [Source Code](https://github.com/inveniosoftware/invenio-app-rdm), [Clients](https://inveniosoftware.org/products/rdm/)) `MIT` `Python`
- [Islandora](https://www.islandora.ca/) - Drupal向けの、Fedoraベースのデジタルリポジトリを閲覧・管理するモジュール。([Demo](https://sandbox.islandora.ca/), [Source Code](https://github.com/Islandora/islandora)) `GPL-3.0` `PHP`
- [Samvera Hyrax](https://samvera.org/) - Samveraフレームワークのフロントエンド。Samvera自体は、Fedoraベースのデジタルリポジトリを閲覧・管理するためのRuby on Railsアプリケーションである。([Source Code](https://github.com/samvera/hyrax)) `Apache-2.0` `Ruby`


### Document Management - Integrated Library Systems (ILS)

**[`^        back to top        ^`](#awesome-selfhosted)**

[統合図書館システム](https://en.wikipedia.org/wiki/Integrated_library_system)は図書館向けの企業資源計画システムで、所蔵資料、発注、支払い、貸出利用者を追跡するために使われます。

_関連： [Content Management Systems (CMS)](#content-management-systems-cms), [Archiving and Digital Preservation (DP)](#archiving-and-digital-preservation-dp)_

- [Evergreen](https://evergreen-ils.org) - スケーラビリティの高いソフトウェアで、図書館利用者に図書館の資料を検索しやすくし、図書館がそれらの資料を管理・カタログ化・貸出を行うのを支援。([Source Code](https://github.com/evergreen-library-system/Evergreen)) `GPL-2.0` `PLpgSQL`
- [Koha](https://koha-community.org/) - 企業レベルのILS（図書館情報システム）で、購入、貸出、カタログ化、ラベル印刷、インターネット接続が不可の場合のオフライン貸出など、多くのモジュールを備えている。([Demo](https://koha-community.org/demo/), [Source Code](https://github.com/Koha-Community/Koha)) `GPL-3.0` `Perl`
- [RERO ILS](https://rero21.ch/) - 大規模なILSで、コンソーシアム機能を備えたサービスとして実行可能。主に図書館ネットワークに向けられている。標準モジュール（貸出、購入、カタログ化…）を含み、ウェブベースの公開および専門インターフェースを備えている。([Demo](https://ils.test.rero.ch/), [Source Code](https://github.com/rero/rero-ils)) `AGPL-3.0` `Python/Docker`


### E-commerce

**[`^        back to top        ^`](#awesome-selfhosted)**

[E-commerce](https://en.wikipedia.org/wiki/E-commerce)ソフトウェア。

関連： [Community-Supported Agriculture (CSA)](#community-supported-agriculture-csa)

- [Aimeos](https://aimeos.org/) - Laravelでスケーラブルに構築されたカスタムオンラインショップ、マーケットプレイス、複雑なB2BアプリケーションのためのEコマースフレームワーク。アイテム数は数十億に達する。([Demo](https://demo.aimeos.org/), [Source Code](https://github.com/aimeos/aimeos)) `LGPL-3.0/MIT` `PHP`
- [Bagisto](https://bagisto.com/en/) - LaravelベースのリーダークラスのオープンソースEコマースフレームワーク。複数の在庫ソース、税務、ローカライズ、ドロップシッピングなど、多くの魅力的な機能を備えている。([Demo](https://demo.bagisto.com/), [Source Code](https://github.com/bagisto/bagisto)) `MIT` `PHP`
- [CoreShop](https://www.coreshop.org) - Pimcore向けのEコマースプラグイン。([Source Code](https://github.com/coreshop/CoreShop)) `GPL-3.0` `PHP`
- [Drupal Commerce](https://drupalcommerce.org) - Drupal CMS向けの人気Eコマースモジュール。支払い、配送、ショッピング関連のモジュールを数十種類サポート。([Source Code](https://git.drupalcode.org/project/commerce)) `GPL-2.0` `PHP`
- [EverShop](https://evershop.io/) `⚠` - 重要なEコマース機能を備えたEコマースプラットフォーム。モジュラーデザインで完全にカスタマイズ可能。([Demo](https://demo.evershop.io/), [Source Code](https://github.com/evershopcommerce/evershop)) `GPL-3.0` `Docker/Nodejs`
- [Magento Open Source](https://business.adobe.com/products/magento/magento-commerce.html) - オープンオムニチャネルイノベーションのリーダー企業。([Source Code](https://github.com/magento/magento2)) `OSL-3.0` `PHP`
- [MedusaJs](https://medusajs.com/) - ヘッドレスコマースエンジンで、開発者が素晴らしいデジタルコマース体験を構築できる。([Demo](https://next.medusajs.com/), [Source Code](https://github.com/medusajs/medusa)) `MIT` `Nodejs`
- [myCart](https://github.com/shurco/mycart) `⚠` - 1ファイルで構成されたショッピングカート（カードまたは暗号資産による支払いに対応）。`MIT` `Go/Docker`
- [Open Source POS](https://github.com/opensourcepos/opensourcepos) - オープンソースのポイントオブセールはウェブベースのポイントオブセールシステムである。`MIT` `PHP`
- [OpenCart](https://www.opencart.com) - ショッピングカートソリューション。([Source Code](https://github.com/opencart/opencart)) `GPL-3.0` `PHP`
- [PrestaShop](https://www.prestashop.com/) - 完全にスケーラブルなEコマースソリューション。([Demo](https://demo.prestashop.com/), [Source Code](https://github.com/PrestaShop/PrestaShop)) `OSL-3.0` `PHP`
- [Pretix](https://pretix.eu/) - イベントのチケット販売プラットフォーム。([Source Code](https://github.com/pretix/pretix)) `AGPL-3.0` `Python/Docker`
- [s-cart](https://s-cart.org/) - 個人や企業向けのエコモーショナルサイト、ラーバーフレームワーク上で構築されたもの。（[Demo](https://demo.s-cart.org/)，[Source Code](https://github.com/gp247net/s-cart)）`MIT` `PHP`
- [Saleor](https://saleor.io) - ドジョンベースのオープンソースエコモーショナルストア。 （[Demo](https://demo.saleor.io/)，[Source Code](https://github.com/saleor/saleor)）`BSD-3-Clause` `Docker/Python`
- [Shopware Community Edition](https://www.shopware.com/en/community/community-edition/) - ドイツで開発されたPHPベースのオープンソースエコモーショナルソフトウェア。（[Demo](https://www.shopware.com/en/test-demo/)，[Source Code](https://github.com/shopware/shopware)）`MIT` `PHP`
- [Solidus](https://solidus.io/) - 完全にコントロールできるストアを提供する無料のオープンソースECプラットフォーム。（[Source Code](https://github.com/solidusio/solidus)）`BSD-3-Clause` `Ruby/Docker`
- [Spree Commerce](https://spreecommerce.org) - スプリーブは、Ruby on Rails向けの完全でモジュール化・API駆動のオープンソースECソリューション。（[Demo](https://demo.spreecommerce.org/)，[Source Code](https://github.com/spree/spree)）`BSD-3-Clause` `Ruby`
- [Sylius](https://sylius.com) - Symfony2をベースにした、エコモーショナル向けフルスタックオープンソースプラットフォーム。（[Demo](https://sylius.com/try/)，[Source Code](https://github.com/Sylius/Sylius)）`MIT` `PHP`
- [Thelia](https://thelia.net/) - スフィアは、オープンソースかつ柔軟なエコモーショナルソリューション。（[Demo](https://demo.thelia.net/)，[Source Code](https://github.com/thelia/thelia)）`LGPL-3.0` `PHP`
- [Vendure](https://www.vendure.io) - ヘッドレスコンマースフレームワーク。（[Demo](https://demo.vendure.io)，[Source Code](https://github.com/vendurehq/vendure)）`MIT` `Nodejs`
- [WooCommerce](https://woocommerce.com/) - ワードプレスベースのエコモーショナルソリューション。（[Source Code](https://github.com/woocommerce/woocommerce)）`GPL-3.0` `PHP`


### Federated Identity & Authentication

**[`^        back to top        ^`](#awesome-selfhosted)**

[Federated identity](https://en.wikipedia.org/wiki/Federated_identity) および [authentication](https://en.wikipedia.org/wiki/Electronic_authentication) のソフトウェア。

**お問い合わせは [awesome-sysadmin/Identity Management](https://github.com/awesome-foss/awesome-sysadmin#identity-management) までお願いいたします**



### Feed Readers

**[`^        back to top        ^`](#awesome-selfhosted)**

A [news aggregator](https://en.wikipedia.org/wiki/News_aggregator)、またフィードアグレゲーター、フィードリーダー、ニュースリーダー、[RSS](https://en.wikipedia.org/wiki/RSS)リーダーとも呼ばれる、ウェブコンテンツ（新聞／ブログ／vlog／ポッドキャストなど）を一つの場所に集約して簡単に閲覧できるアプリケーションである。

- [Bubo Reader](https://github.com/georgemandis/bubo-rss) - 極めてシンプルなRSSフィードリーダー。（[Demo](https://bubo-rss-demo.netlify.app/)）`MIT` `Nodejs`
- [CommaFeed](https://www.commafeed.com/) - グーグルリーダーをインスピレーションとして、セルフホスト可能なRSSリーダー。（[Demo](https://www.commafeed.com/#/app/category/all)，[Source Code](https://github.com/Athou/commafeed)）`Apache-2.0` `Java/Docker`
- [Feeds Fun](https://feeds.fun/) - タグ、スコア、AIを備えたニュースリーダー。（[Source Code](https://github.com/Tiendil/feeds.fun)）`BSD-3-Clause` `Python`
- [FreshRSS](https://freshrss.org/) - セルフホスト可能なRSSフィード集計ツール。（[Demo](https://demo.freshrss.org/i/)，[Source Code](https://github.com/FreshRSS/FreshRSS)）`AGPL-3.0` `PHP/Docker`
- [Fusion](https://github.com/0x2E/fusion) - 軽量なRSS集計ツールおよびリーダー。`MIT` `Go/Docker`
- [Goeland](https://github.com/slurdge/goeland) - 任意のRSS/Atomフィードを美しいメール要約に変換。`MIT` `Go/Docker`
- [JARR](https://1pxsolidblack.pl/jarr-en.html) - JARR（Just Another RSS Reader）は、ウェブベースのニュース集計ツールおよびリーダー（Newspipeのフォーク）。（[Demo](https://www.jarr.info/)，[Source Code](https://github.com/jaesivsm/JARR)）`AGPL-3.0` `Docker/Python`
- [Kriss Feed](https://github.com/tontof/kriss_feed) - シンプルでスマート（または馬鹿げた）フィードリーダー。`CC0-1.0` `PHP`
- [Leed](https://github.com/LeedRSS/Leed) - リード（Light Feed用）は、無料かつミニマリズムのRSS集計ツール。`AGPL-3.0` `PHP`
- [Miniflux](https://miniflux.app/) - ミニマリズムのニュースリーダー。（[Source Code](https://github.com/miniflux/v2)）`Apache-2.0` `Go/deb/Docker`
- [NewsBlur](https://www.newsblur.com/) - 人々が世界について話すための個人的なニュースリーダー。古い楽器の新しい音。（[Source Code](https://github.com/samuelclay/NewsBlur)）`MIT` `Python`
- [Newspipe](https://git.sr.ht/~cedric/newspipe) - ウェブニュースリーダー。（[Demo](https://www.newspipe.org/signup)）`AGPL-3.0` `Python`
- [reader](https://github.com/lemon24/reader) - フィードリーダーのウェブアプリとライブラリ（そのため、自作のアプリに使うことができます）で、標準ライブラリと純粋Pythonの依存関係のみを使用しています。`BSD-3-Clause` `Python`
- [Readflow](https://readflow.app) - 軽量なニュースリーダーで、現代的なインターフェースと機能を備えています：全文検索、自動分類、アーカイブ、オフライン対応、通知。（[Source Code](https://github.com/ncarlier/readflow)）`AGPL-3.0` `Go/Docker`
- [RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge) - ウェブサイトにフィードがない場合にRSS/ATOMフィードを生成します。`Unlicense` `PHP/Docker`
- [RSS Monster](https://github.com/pietheinstrengholt/rssmonster) - 使いやすいウェブベースのRSSアグレゲーターとリーダーで、Fever APIと互換（Google Readerの代替）です。`MIT` `PHP`
- [RSS2EMail](https://github.com/rss2email/rss2email) - RSS/ATOMフィードを取得し、新しいコンテンツをメール受信者に送信し、OPMLをサポートしています。`GPL-2.0` `Python/deb`
- [RSSHub](https://docs.rsshub.app) - 使いやすく、拡張可能なRSSフィードアグレゲーターで、ソーシャルメディアから大学部門まで、ほぼすべてのコンテンツからRSSフィードを生成できます。（[Demo](https://rsshub.app)，[Source Code](https://github.com/DIYgod/RSSHub)）`MIT` `Nodejs/Docker`
- [Selfoss](https://selfoss.aditu.de/) - 新しいマルチ用途RSSリーダー、ライブストリーム、マッシュアップ、アグリゲーションウェブアプリケーション。（[Source Code](https://github.com/fossar/selfoss)）`GPL-3.0` `PHP`
- [Stringer](https://github.com/stringer-rss/stringer) - 進行中のセルフホスト型、反社会的なRSSリーダー。`MIT` `Ruby`
- [Tiny Tiny RSS](https://tt-rss.org) - ウェブベースのニュースフィード（RSS/Atom）リーダーとアグレゲーター。（[Source Code](https://github.com/tt-rss/tt-rss)）`GPL-3.0` `Docker/PHP`
- [TinyFeed](https://feed.lovergne.dev/) - シンプルなCLIを使って、フィードのコレクションから静的HTMLページを生成します。（[Demo](https://feed.lovergne.dev/demo)，[Source Code](https://github.com/TheBigRoomXXL/tinyfeed)）`MIT` `Go/Docker`
- [Upvote RSS](https://www.upvote-rss.com/) `⚠` - Reddit、Hacker News、Lemmy、Mbinなどから豊かなRSSフィードを生成します。（[Demo](https://www.upvote-rss.com/)，[Source Code](https://github.com/johnwarne/upvote-rss)）`MIT` `Docker/PHP`
- [Yarr](https://github.com/nkanaev/yarr) - Yarr（もう一つのRSSリーダー）は、デスクトップアプリとしておよび個人用セルフホストサーバーとして使えるウェブベースのフィードアグレゲーターです。`MIT` `Go`


### File Transfer & Synchronization

**[`^        back to top        ^`](#awesome-selfhosted)**

[File transfer](https://en.wikipedia.org/wiki/File_transfer), [sharing](https://en.wikipedia.org/wiki/File_sharing) および [synchronization software](https://en.wikipedia.org/wiki/File_synchronization) ソフトウェア。

関連： [Groupware](#groupware)

- [bewCloud](https://bewcloud.com) - ファイル共有＋同期、ノート、写真（NextcloudおよびownCloudのRSSリーダーの代替）。（[Source Code](https://github.com/bewcloud/bewcloud)，[Clients](https://github.com/bewcloud)）`AGPL-3.0` `Docker`
- [Cloudreve](https://cloudreve.org/) - ファイル管理および共有システムで、複数のストレージプロバイダーをサポートしています。（[Demo](https://demo.cloudreve.org)，[Source Code](https://github.com/cloudreve/cloudreve)）`GPL-3.0` `Docker/Go`
- [Git Annex](https://git-annex.branchable.com/) - コンピュータ、サーバー、外部ドライブ間のファイル同期。（[Source Code](https://git.joeyh.name/index.cgi/git-annex.git/)）`GPL-3.0` `Haskell`
- [Kinto](https://kinto.readthedocs.org) - ミニマムなJSONストレージサービスで、同期と共有機能を備えています。（[Source Code](https://github.com/Kinto/kinto)）`Apache-2.0` `Python`
- [Nextcloud](https://nextcloud.com/) - ファイル、カレンダー、連絡先、メールおよび[more](https://apps.nextcloud.com/)を、どのデバイスからでも、あなたの条件でアクセス・共有できます。（[Demo](https://try.nextcloud.com/)，[Source Code](https://github.com/nextcloud/server)）`AGPL-3.0` `PHP/deb`
- [OpenCloud](https://docs.opencloud.eu/) - ファイル共有および協働プラットフォーム。（[Source Code](https://github.com/opencloud-eu/opencloud)）`Apache-2.0` `Docker/Go/Nodejs`
- [OpenSSH SFTP server](https://www.openssh.com/) - 安全なファイル転送プログラム。（[Source Code](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/usr.bin/ssh/)）`BSD-2-Clause` `C/deb`
- [ownCloud](https://owncloud.org/) - すべての機能を一括で提供するファイル、カレンダー、連絡先など、保存、同期、閲覧、編集、共有ができるソリューション。([Source Code](https://github.com/owncloud/core), [Clients](https://github.com/owncloud/core/wiki/Apps)) `AGPL-3.0` `PHP/Docker/deb`
- [Peergos](https://peergos.org) - オンラインで安全かつプライベートなスペースで、写真、動画、音楽、ドキュメントを保存、共有、閲覧できます。またカレンダー、ニュースフィード、タスクリスト、チャット、メールクライアントも含まれています。([Source Code](https://github.com/Peergos/Peergos)) `AGPL-3.0` `Java`
- [Puter](https://puter.com/) - ウェブベースのオペレーティングシステムで、機能が豊富で、非常に高速かつ高度に拡張可能。([Demo](https://puter.com/), [Source Code](https://github.com/heyputer/puter)) `AGPL-3.0` `Nodejs/Docker`
- [Pydio](https://pydio.com/) - 任意のウェブサーバーを強力なファイル管理システムにし、主流のクラウドストレージプロバイダーの代替として利用できます。([Demo](https://pydio.com/en/demo), [Source Code](https://github.com/pydio/cells)) `AGPL-3.0` `Go`
- [Samba](https://www.samba.org/) - SambaはLinuxおよびUnix向けのWindows互換性を提供する標準的なプログラムセットです。SMB/CIFSプロトコルを使用するすべてのクライアントに安全で安定かつ高速なファイルおよび印刷サービスを提供します。([Source Code](https://git.samba.org/samba.git/)) `GPL-3.0` `C`
- [Seafile](https://www.seafile.com/en/home/) - チームや組織向けのファイルホスティングおよび共有ソリューション。([Source Code](https://github.com/haiwen/seafile)) `GPL-2.0/GPL-3.0/AGPL-3.0/Apache-2.0` `C`
- [Sync-in](https://sync-in.com) - リアルタイム編集、権限管理、デスクトップおよびCLIクライアントを備えたファイルストレージ、同期、共有、協働。([Demo](https://sync-in.com/docs/demo), [Source Code](https://github.com/Sync-in/server), [Clients](https://github.com/Sync-in/desktop)) `AGPL-3.0` `Nodejs/Docker`
- [Syncthing](https://syncthing.net/) - Syncthingはオープンソースのピアツーピアファイル同期ツールです。([Source Code](https://github.com/syncthing/syncthing)) `MPL-2.0` `Go/Docker/deb`
- [Unison](https://www.cis.upenn.edu/~bcpierce/unison/) - UnisonはOSX、Unix、Windows向けのファイル同期ツールです。([Source Code](https://github.com/bcpierce00/unison)) `GPL-3.0` `deb/OCaml`


### File Transfer - Distributed Filesystems

**[`^        back to top        ^`](#awesome-selfhosted)**

ネットワーク分散ファイルシステム

**お問い合わせは [awesome-sysadmin/Distributed Filesystems](https://github.com/awesome-foss/awesome-sysadmin#distributed-filesystems) までお願いいたします**



### File Transfer - Object Storage & File Servers

**[`^        back to top        ^`](#awesome-selfhosted)**

[Object storage](https://en.wikipedia.org/wiki/Object_storage)は、データをオブジェクトとして管理するコンピュータデータストレージであり、ファイルシステムやセクタおよびトラック内のブロックとしてデータを管理する他のストレージアーキテクチャとは異なります。

- [GarageHQ](https://garagehq.deuxfleurs.fr/) - 地理的に分散されたS3互換ストレージサービスで、多くのニーズを満たせます。([Source Code](https://git.deuxfleurs.fr/Deuxfleurs/garage)) `AGPL-3.0` `Docker/Rust`
- [Harbor](https://goharbor.io/) - クラウドネイティブのイメージレジストリで、コンテンツの保存、署名、スキャンを実行します。([Source Code](https://github.com/goharbor/harbor)) `Apache-2.0` `Docker/K8S`
- [SeaweedFS](https://github.com/seaweedfs/seaweedfs) - SeaweedFSは、WebDAV、S3 API、FUSEマウント、HDFSなどに対応するオープンソース分散ファイルシステムで、大量の小さなファイルに最適化されており、容量の追加が容易です。`Apache-2.0` `Go`
- [Zenko CloudServer](https://www.zenko.io/cloudserver) - Zenko CloudServerは、Amazon S3プロトコルを処理するオープンソースのサーバー実装です。([Source Code](https://github.com/scality/cloudserver)) `Apache-2.0` `Docker/Nodejs`
- [ZOT OCI Registry](https://zotregistry.dev) - プロダクション環境で使用可能なベンダー中立のOCIネイティブコンテナイメージレジストリ。([Demo](https://zothub.io), [Source Code](https://github.com/project-zot/zot)) `Apache-2.0` `Go/Docker`


### File Transfer - Peer-to-peer Filesharing

**[`^        back to top        ^`](#awesome-selfhosted)**

[ピアツーピアファイル共有](https://en.wikipedia.org/wiki/Peer-to-peer_file_sharing)は、デジタルメディアの[共有](https://en.wikipedia.org/wiki/File_sharing)と配布に[ピアツーピア](https://en.wikipedia.org/wiki/Peer-to-peer)（P2P）ネットワーク技術を使う仕組みです。

- [bittorrent-tracker](https://webtorrent.io/) - シンプルで堅牢なBitTorrentトラッカー（クライアントおよびサーバー）の実装。([Source Code](https://github.com/webtorrent/bittorrent-tracker)) `MIT` `Nodejs`
- [Deluge](https://deluge-torrent.org/) - 軽量でマルチプラットフォーム対応のBitTorrentクライアント。([Source Code](https://git.deluge-torrent.org/deluge/tree/?h=develop)) `GPL-3.0` `Python/deb`
- [PrivyDrop](https://www.privydrop.app) - シンプルで使いやすい、ブレークポイントで再開可能なWebRTCベースのピアツーピアテキスト、画像、ファイル転送ツール。([Source Code](https://github.com/david-bai00/PrivyDrop)) `MIT` `Docker/Nodejs`
- [qBittorrent](https://www.qbittorrent.org/) - 機能豊富なWebUIを備えたクロスプラットフォームの無料BitTorrentクライアントで、リモートアクセスが可能です。([Source Code](https://github.com/qbittorrent/qBittorrent)) `GPL-2.0` `C++`
- [slskd](https://github.com/slskd/slskd) `⚠` - Soulseekファイル共有ネットワーク向けの現代的なクライアントサーバーアプリケーション。`AGPL-3.0` `Docker/C#`
- [Transmission](https://transmissionbt.com/) - 高速で簡単で無料のBitTorrentクライアント。([Source Code](https://github.com/transmission/transmission)) `GPL-3.0` `C++/deb`
- [Webtor](https://github.com/webtor-io/self-hosted) - ウェブベースのトランツククライアントで、即時音声・動画ストリーミングが可能。 ([Demo](https://webtor.io)) `MIT` `Docker`


### File Transfer - Single-click & Drag-n-drop Upload

**[`^        back to top        ^`](#awesome-selfhosted)**

一時的／短命／暫時的なファイルの共有用に用意された簡易ファイルサーバー。シングルクリックまたは [drag-and-drop](https://en.wikipedia.org/wiki/Drag_and_drop) でのアップロード機能を提供する。

- [015](https://send.fudaoyuan.icu) - 一時的なファイル共有プラットフォーム。一度限りの、一時的なファイルおよびテキストのアップロード、処理、共有サービスを提供することを目的としている。 ([Source Code](https://github.com/keven1024/015)) `AGPL-3.0` `Docker`
- [Chibisafe](https://chibisafe.app) - 使いやすく、設定も簡単なファイルアップローダー。ファイル、写真、ドキュメント、思いつく何でも受け入れ、共有リンクを提供して、それを他人に送ることができます。 ([Source Code](https://github.com/chibisafe/chibisafe)) `MIT` `Docker/Nodejs`
- [Digirecord](https://ladigitale.dev/digirecord/) - 音声ファイルを記録し、共有（フランス語のドキュメントあり）。 ([Source Code](https://codeberg.org/ladigitale/digirecord)) `AGPL-3.0` `Nodejs/PHP`
- [elixire](https://gitlab.com/elixire/elixire) - シンプルでありながら高度なスクリーンショットアップロードとリンク短縮サービス。 ([Clients](https://gitlab.com/elixire/elixiremanager)) `AGPL-3.0` `Python`
- [Files Sharing](https://github.com/axeloz/filesharing) - 一時的でユニークなリンクに基づいたファイル共有アプリケーション。 `GPL-3.0` `PHP/Docker`
- [Flare](https://github.com/FlintSH/Flare) - 非膨張型、現代的で高度にカスタマイズ可能なファイル／スクリーンショットのフォルダサーバー。ShareX、Flameshot、Spectacleのサポートを提供。OCR検索なども提供。 `MIT` `Docker/Nodejs`
- [Gokapi](https://github.com/Forceu/gokapi) - ダウンロード回数または日数に応じて期限を設けたファイル共有サーバー。Firefox Sendが終了したものの類似品であり、ファイルのアップロードは管理者のみが可能。 `GPL-3.0` `Go/Docker`
- [goploader](https://depado.github.io/goploader/) - サーバー側暗号化を用いた簡単なファイル共有。curl/httpie/wgetに準拠。 ([Source Code](https://github.com/Depado/goploader)) `MIT` `Go`
- [GoSƐ](https://codeberg.org/stv0g/gose) - スケーラビリティとシンプルさを重視した現代的なファイルアップローダー。S3ストレージバックエンドにのみ依存しており、追加のデータベースやキャッシュを必要とせずに水平スケーリングが可能。 `Apache-2.0` `Go/Docker`
- [Jirafeau](https://gitlab.com/jirafeau/Jirafeau) - ワンクリックでファイル共有できるプロジェクト。ファイルを選択し、アップロードし、共有リンクを生成する。それだけです。 `AGPL-3.0` `PHP/Docker`
- [OnionShare](https://github.com/onionshare/onionshare) - サイズに制限なく、安全かつ匿名にファイルを共有できる。 `GPL-3.0` `Python/deb`
- [PicoShare](https://github.com/mtlynch/picoshare) - 画像やその他のファイルを共有するためのミニマリズムと簡単にホストできるサービス。 ([Clients](https://github.com/mtlynch/picoshare#third-party-clients)) `AGPL-3.0` `Go/Docker`
- [Picsur](https://github.com/CaramelFur/Picsur) - 画像を簡単にホスト、編集、共有できるシンプルなイメージホスティングプラットフォーム。 `AGPL-3.0` `Docker`
- [PictShare](https://www.pictshare.net/) - マルチ言語の画像ホスティングサービスで、簡単なサイズ変更とアップロードAPIを提供。 ([Source Code](https://github.com/HaschekSolutions/pictshare)) `Apache-2.0` `PHP/Docker`
- [Pingvin Share X](https://github.com/smp46/pingvin-share-x) - ログイン、逆共有、共有期限、S3バケット、高度な認証、セキュリティスキャン用ClamAVなどに対応するファイル共有プラットフォーム（Pingvin Shareのフォーク）。 `BSD-2-Clause` `Docker/Nodejs`
- [Plik](https://github.com/root-gg/plik) - スケーラブルで使いやすい一時ファイルアップロードシステム。 ([Demo](https://plik.root.gg/)) `MIT` `Go/Docker`
- [ProjectSend](https://www.projectsend.org/) - ファイルをアップロードし、特定のクライアントに割り当てます。そのファイルにクライアントにアクセスを提供します。 ([Source Code](https://github.com/projectsend/projectsend)) `GPL-2.0` `PHP`
- [PsiTransfer](https://github.com/psi-4ward/psitransfer) - 強固なアップロード／ダウンロードの中断再開とパスワード保護を備えたシンプルなファイル共有ソリューション。 `BSD-2-Clause` `Nodejs`
- [QuickShare](https://ihexxa.github.io/quickshare.site/) - 異なるデバイス間での簡単で迅速なファイル共有。 ([Source Code](https://github.com/ihexxa/quickshare)) `LGPL-3.0` `Docker/Go`
- [Safebucket](https://docs.safebucket.io/) - プラグイン型インフラを持つファイル共有プラットフォームで、アップロードとダウンロードはクライアントとS3互換ストレージの間で直接行われます。（[Source Code](https://github.com/safebucket/safebucket)） `Apache-2.0` `Go/Docker`
- [sE2EEnd](https://github.com/sE2EEnd/sE2EEnd) - パスワード保護、ダウンロード制限、自動期限切れを備えた端末から端末まで暗号化されたファイル共有、Keycloakとの認証統合。 `AGPL-3.0` `Docker`
- [Sharry](https://github.com/eikek/sharry) - 認証済みおよび匿名ユーザー間（両方向）で、中断可能なアップロード・ダウンロードを用いてインターネット上でファイルを簡単に共有できます。 `GPL-3.0` `Scala/Java/deb/Docker`
- [Shifter](https://github.com/TobySuch/Shifter) - Djangoで構成されたシンプルで、セルフホスト可能なファイル共有ウェブアプリ。 `MIT` `Docker`
- [Slink](https://docs.slinkapp.io/) - ユーザーがメディア共有体験に対して完全な制御をもつように設計された画像共有プラットフォーム。（[Source Code](https://github.com/andrii-kryvoviaz/slink)） `AGPL-3.0` `Docker`
- [snowshare](https://github.com/TuroYT/snowshare) - URL短縮、コードスニペット共有、ファイルアップロードを備えたファイルとリンク共有プラットフォーム。カスタマイズ可能な期限切れ、プライバシー設定、QRコードを備えています。（[Demo](https://s.romain-pinsolle.fr)） `CC0-1.0` `Nodejs/Docker`
- [transfer.sh](https://github.com/dutchcoders/transfer.sh) - コマンドラインから簡単にファイルを共有できます。 `MIT` `Go`
- [Uguu](https://github.com/nokonoko/uguu) - ファイルを保存し、X時間後に自動削除します。 `MIT` `PHP`
- [XBackBone](https://xbackbone.app/) - 即時共有ツールを統合したシンプル、高速で軽量なファイルマネージャー。ShareX（Windows向け無料かつオープンソースのスクリーンショットツール）のようなもの。（[Source Code](https://github.com/SergiX44/XBackBone)） `AGPL-3.0` `PHP/Docker`
- [Zipline](https://github.com/diced/zipline) - ShareXとよく組み合わせられる軽量、高速かつ信頼性の高いファイル共有サーバー。ReactベースのWeb UIと高速APIを提供しています。 `MIT` `Docker/Nodejs`


### File Transfer - Web-based File Managers

**[`^        back to top        ^`](#awesome-selfhosted)**

ウェブベースの [file managers](https://en.wikipedia.org/wiki/File_manager).

関連情報: [Groupware](#groupware)

- [Apaxy](https://oupala.github.io/apaxy/) - ウェブディレクトリの閲覧体験を向上させるためのテーマ。Apacheのmod_autoindexモジュールと一部のCSSを用いて、ディレクトリ一覧のデフォルトスタイルを上書きしています。（[Source Code](https://github.com/oupala/apaxy)） `GPL-3.0` `Javascript`
- [ClyoCloud](https://clyo.cloud/) - プライバシー、効率性、美しさを重視した個人用セルフホスト型クラウドストレージおよびメディアマネージャーアプリケーション。（[Source Code](https://code.weexnes.dev/ClyoCloud)） `AGPL-3.0` `Nodejs`
- [copyparty](https://github.com/9001/copyparty) - 加速された中断可能なアップロード、重複削除、WebDAV、FTP、ゼロコンフィグ、メディアインデクサ、動画サムネイル、オーディオ変換、読み取り専用フォルダを含む、1ファイルで構成されたポータブルファイルサーバー。（[Demo](https://a.ocv.me/pub/demo/)） `MIT` `Python`
- [Directory Lister](https://www.directorylister.com/) - ディレクトリとそのサブディレクトリを一覧表示し、その場でナビゲートできるシンプルなPHPベースのディレクトリリスト。 （[Source Code](https://github.com/DirectoryLister/DirectoryLister)） `MIT` `PHP/Docker`
- [filebrowser](https://filebrowser.org/) - マテリアルデザインのウェブインターフェースを備えたウェブファイルブラウザ。（[Source Code](https://github.com/filebrowser/filebrowser)） `Apache-2.0` `Go`
- [FileGator](https://filegator.io/) - FileGatorは、シングルページフロントエンドを持つ強力なマルチユーザーファイルマネージャー。（[Demo](https://demo.filegator.io), [Source Code](https://github.com/filegator/filegator)） `MIT` `PHP/Docker`
- [FileRise](https://github.com/error311/FileRise) - アップロード、タグ付け、共有リンク、ギャラリー／テーブルビュー、ブラウザ内エディタを備えたウェブファイルマネージャー。（[Demo](https://github.com/error311/FileRise?tab=readme-ov-file#live-demo)） `MIT` `Docker/PHP`
- [Filestash](https://www.filestash.app/) - FTP、SFTP、WebDAV、Git、S3、Minio、Dropbox、Google Driveなど、データが存在する場所に関係なくデータを管理できるウェブファイルマネージャー。（[Demo](https://demo.filestash.app/), [Source Code](https://github.com/mickael-kerjean/filestash)） `AGPL-3.0` `Docker`
- [IFM](https://github.com/misterunknown/ifm) - 1つのスクリプトファイルで構成されたファイルマネージャー。 `MIT` `PHP`
- [mikochi](https://github.com/zer0tonin/Mikochi) - リモートフォルダを閲覧し、ファイルをアップロード、削除、リネーム、ダウンロード、VLC/mpvにストリーミングできます。 `MIT` `Go/Docker/K8S`
- [miniserve](https://github.com/svenstaro/miniserve) - HTTPでファイルとディレクトリを提供するためのCLIツール。 `MIT` `Rust`
- [ResourceSpace](https://www.resourcespace.com) - デジタル資産を整理するシンプルで速い無料方法。 ([Demo](https://www.resourcespace.com/trial), [Source Code](https://www.resourcespace.com/svn)) `BSD-4-Clause` `PHP`
- [slcl](https://gitea.privatedns.org/xavi/slcl) - シンプルで軽量のウェブクラウドストレージ。 ([Source Code](https://codeberg.org/xavidcr/slcl)) `AGPL-3.0` `C`
- [Surfer](https://git.cloudron.io/cloudron/surfer) - ファイルを管理できるウェブUIを備えたシンプルな静的ファイルサーバー。 `MIT` `Nodejs`
- [TagSpaces](https://www.tagspaces.org/) - TagSpacesはオフラインかつマルチプラットフォーム対応のファイルマネージャーおよび整理ツールであり、ノートアプリとしても機能します。WebDAV版アプリは、NextcloudやownCloudなどのWebDAVサーバーにインストール可能です。 ([Demo](https://demo.tagspaces.com), [Source Code](https://github.com/tagspaces/tagspaces)) `AGPL-3.0` `Nodejs`
- [Tiny File Manager](https://tinyfilemanager.github.io) - PHPによるウェブベースのファイルマネージャー、シンプルで速い小型ファイルマネージャー（1ファイルで構成）。 ([Demo](https://tinyfilemanager.github.io/demo/), [Source Code](https://github.com/prasathmani/tinyfilemanager)) `GPL-3.0` `PHP`


### Games

**[`^        back to top        ^`](#awesome-selfhosted)**

マルチプレイヤーゲームサーバーと[browser games](https://en.wikipedia.org/wiki/Browser_game)。

関連： [Games - Administrative Utilities & Control Panels](#games---administrative-utilities--control-panels)

- [0 A.D.](https://play0ad.com/) - マルチプラットフォーム対応の古戦争をテーマとしたリアルタイム戦略ゲーム。 ([Source Code](https://gitea.wildfiregames.com/0ad/0ad)) `MIT/GPL-2.0/Zlib` `C++/C/deb`
- [A Dark Room](https://github.com/doublespeakgames/adarkroom) - ブラウザ上で遊べるミニマリズムのテキストアドベンチャーゲーム。 ([Demo](https://adarkroom.doublespeakgames.com/)) `MPL-2.0` `Javascript`
- [DDraceNetwork](https://ddnet.org/) - DDRaceのコラボレーション版、Teeworldsのモジュールで特徴的な協力プレイを実現。 ([Source Code](https://github.com/ddnet/ddnet)) `Zlib` `C++`
- [Digibuzzer](https://digibuzzer.app/) - 接続されたブザーをもとに仮想ゲームルームを作成（フランス語のドキュメントあり）。 ([Demo](https://digibuzzer.app/), [Source Code](https://codeberg.org/ladigitale/digibuzzer)) `AGPL-3.0` `Nodejs`
- [Hypersomnia](https://github.com/TeamHypersomnia/Hypersomnia) - Counter-StrikeとHotline Miamiを融合した競争型トップダウンシューティングゲーム。Linux、Windows、MacOSおよびウェブ上で動作。 ([Demo](https://hypersomnia.io)) `AGPL-3.0` `C++/Docker`
- [Lila](https://lichess.org/) - lichess.orgを動かす広告なしチェスサーバー、公式iOSおよびAndroidアプリを提供。 ([Source Code](https://github.com/lichess-org/lila)) `AGPL-3.0` `Scala`
- [Luanti](https://www.luanti.org/) - voxelゲームエンジン（以前はMinetest）。私たちの多くのゲームのいずれかをプレイ、好みに合わせてゲームをモード、自作ゲームを作成、またはマルチプレイヤーサーバーでプレイ。 ([Source Code](https://github.com/luanti-org/luanti)) `LGPL-2.1/MIT/Zlib` `C++/Lua/deb`
- [Mindustry](https://mindustrygame.github.io/) - Factorio風のタワー防衛ゲーム。より多くのリソースを収集するための生産連鎖を構築し、複雑な施設を建設。 ([Source Code](https://github.com/Anuken/Mindustry)) `GPL-3.0` `Java`
- [MTA:SA](https://multitheftauto.com/) `⚠` - Rockstar NorthのGrand Theft Autoシリーズにネットワークプレイ機能を追加、この機能は元々存在しない。 ([Source Code](https://github.com/multitheftauto/mtasa-blue)) `GPL-3.0` `C++`
- [OpenTTD](https://www.openttd.org/) - 輸送ターニョンシミュレーションゲーム。 ([Source Code](https://github.com/OpenTTD/OpenTTD), [Clients](https://bananas.openttd.org/)) `GPL-2.0` `C++/Docker`
- [piqueserver](https://github.com/piqueserver/piqueserver) - openspadesのサーバー、第一人称シューティングゲームで壊れるvoxel世界を提供。 ([Clients](https://github.com/yvt/openspades)) `GPL-3.0` `Python/C++`
- [Posio](https://github.com/abrenaut/posio) - 地理をテーマにしたマルチプレイヤーゲーム。 `MIT` `Python`
- [Razzia](https://github.com/Ralex91/Razzia) - クイズゲームプラットフォーム、小型のセルフホストイベント向け（Kahoot!の代替案）。 `MIT` `Nodejs/Docker`
- [Red Eclipse 2](https://www.redeclipse.net/) - Unreal Tournamentに似たアリーナタイプの第一人称シューティングゲーム。 ([Source Code](https://github.com/redeclipse/base)) `Zlib/MIT/CC-BY-SA-4.0` `C/C++/deb`
- [Scribble.rs](https://github.com/scribble-rs/scribble.rs) - ウェブベースのピクチャリーゲーム。（[Demo](https://scribblers.fly.dev)） `BSD-3-Clause` `Go/Docker`
- [Suroi](https://suroi.io/) - オープンソースの2Dバトルロイヤルゲーム。surviv.ioをインスピレーションとして開発された。（[Demo](https://suroi.io/)，[Source Code](https://github.com/HasangerGames/suroi)） `GPL-3.0` `Nodejs`
- [The Battle for Wesnoth](https://github.com/wesnoth/wesnoth) - The Battle for Wesnothは、高幻想テーマを備えたオープンソースのターンベース戦略ゲームで、シングルプレイヤーおよびオンライン／ホットシートマルチプレイヤー戦闘を提供しています。（`GPL-2.0`） `C++/deb`
- [Veloren](https://veloren.net/) - マルチプレイヤーRPG。Cube World、Zelda、Dwarf FortressおよびMinecraftをインスピレーションとして開発されたオープンソースゲーム。（[Source Code](https://gitlab.com/veloren/veloren)） `GPL-3.0` `Rust`
- [Zero-K](https://zero-k.info/) - Springrtsエンジンを用いたオープンソースゲーム。Zero-Kは、地形操作、物理学、および多数のユニークなユニットを備えた伝統的なリアルタイム戦略ゲームであり、競技プレイを支えるバランスを確保しています。（[Source Code](https://github.com/ZeroK-RTS/Zero-K)） `GPL-2.0` `Lua`


### Games - Administrative Utilities & Control Panels

**[`^        back to top        ^`](#awesome-selfhosted)**

ゲームサーバーおよびゲームライブラリを管理するためのユーティリティ。

関連情報: [Games](#games)

- [auto-mcs](https://www.auto-mcs.com) - マルチプラットフォームのMinecraftサーバー管理者。（[Source Code](https://github.com/macarooni-man/auto-mcs)） `AGPL-3.0` `Python`
- [Calagopus](https://calagopus.com) - 現代的なゲームサーバー管理パネル。Minecraft、Hytaleおよびその他のゲームサーバーをデプロイ、監視、管理できる業界トップクラスのパフォーマンスを提供。（[Source Code](https://github.com/calagopus/panel)） `MIT` `Rust/Docker/deb`
- [Crafty Controller](https://craftycontrol.com/) - Minecraftのランチャーおよびマネージャー。ユーザーが使いやすいインターフェースからMinecraftサーバーを開始および管理できる。（[Source Code](https://gitlab.com/crafty-controller/crafty-4)） `GPL-3.0` `Docker/Python`
- [Drop](https://droposs.org) - DRMフリーのゲームを効率的に配布・共有するためのゲーム配布プラットフォーム（Steam、GameVaultの代替案）。（[Source Code](https://github.com/Drop-OSS/drop)，[Clients](https://github.com/Drop-OSS/drop-app)） `AGPL-3.0` `Docker`
- [EasyWI](https://easy-wi.com) - Easy-Wiは、ゲームサーバーなどのサーバーデーモンを管理できるウェブインターフェースであり、さらにCMSを提供し、完全自動化されたゲームサーバーおよびボイスサーバーの貸出サービスを提供します。（[Source Code](https://github.com/easy-wi/developer/)） `GPL-3.0` `PHP/Shell`
- [GameAP](https://gameap.com/) - LinuxおよびWindows上でゲームサーバーを管理するためのゲーム管理パネル。（[Demo](https://demo.gameap.com/)，[Source Code](https://github.com/gameap/gameap)，[Clients](https://plugins.gameap.dev/)） `MIT` `Go/Docker`
- [Gameyfin](https://gameyfin.org) - 自動スキャン、ウェブアクセス、ダウンロード、プラグイン対応を備えたゲームライブラリマネージャー。（[Source Code](https://github.com/gameyfin/gameyfin)） `AGPL-3.0` `Docker`
- [Gaseous Server](https://github.com/gaseous-project/gaseous-server) `⚠` - マルチソースでメタデータを識別・提供するウェブベースのエミュレータを内蔵したゲームROMマネージャー。`AGPL-3.0` `Docker/.NET`
- [Lancache](https://lancache.net) `⚠` - LANパーティーゲームのキャッシュを簡単に実現。（[Source Code](https://github.com/lancachenet/monolithic)） `MIT` `Docker/Shell`
- [LinuxGSM](https://linuxgsm.com/) - Linux上で専用ゲームサーバーのデプロイおよび管理を行うためのCLIツール：120以上のゲームをサポート。（[Source Code](https://github.com/GameServerManagers/LinuxGSM)） `MIT` `Shell`
- [Minus Games](https://accessory.github.io/minus_games_user_guide) - 複数のデバイス間でゲームとセーブファイルを同期。（[Source Code](https://github.com/Accessory/minus_games)） `MIT` `Rust`
- [Ownfoil](https://github.com/a1ex4/ownfoil) - Nintendo Switchライブラリマネージャー。自動化された管理タスク（ファイルの識別と整理、更新やDLCの欠落）を提供し、Switch上で複数のサポートされたクライアントにライブラリを提供。カスタマイズされたショップとマルチユーザー認証を備えています。（`AGPL-3.0`） `Docker/Python`
- [Pelican Panel](https://pelican.dev/) - ゲームサーバーの簡単な管理を可能にするウェブアプリケーション。デプロイ、設定、管理、サーバー監視ツール、および広範なカスタマイズオプションをユーザーに提供（Pterodactylのフォーク）。（[Source Code](https://github.com/pelican-dev/panel)） `AGPL-3.0` `PHP/Docker`
- [Pterodactyl](https://pterodactyl.io/) - ゲームサーバーの管理パネル。最終ユーザー向けに直感的なUIを備えています。（[Source Code](https://github.com/pterodactyl/panel)） `MIT` `PHP`
- [PufferPanel](https://www.pufferpanel.com/) - 小規模ネットワークおよびゲームサーバー提供業者向けに設計されたゲームサーバー管理パネル。（[Source Code](https://github.com/pufferpanel/pufferpanel)） `Apache-2.0` `Go`
- [Retrom](https://github.com/JMBeresford/retrom) - プライベートクラウドのゲームライブラリ配布サーバー＋フロントエンド/ランチャーサーバー。 `GPL-3.0` `Docker/Rust`
- [RomM](https://romm.app/) `⚠` - 400以上のプラットフォームに対応した、レトロゲームの整理・豊かにし、プレイできるROMマネージャー。 ([Demo](https://demo.romm.app/), [Source Code](https://github.com/rommapp/romm)) `AGPL-3.0` `Docker`
- [SourceBans++](https://sbpp.github.io/) - ソースエンジンで実行中のゲームに向けた管理者、ブラン、コミュニケーション管理システム。 ([Source Code](https://github.com/sbpp/sourcebans-pp)) `CC-BY-SA-4.0` `PHP`
- [Sunshine](https://app.lizardbyte.dev/Sunshine/) - Moonlight向けのリモートゲームストリームホスト。120フレーム/秒まで、4K解像度に対応。 ([Source Code](https://github.com/LizardByte/Sunshine)) `GPL-3.0` `C++/deb/Docker`


### Genealogy

**[`^        back to top        ^`](#awesome-selfhosted)**

[Genealogy software](https://en.wikipedia.org/wiki/Genealogy_software) を使って、系統データを記録、整理、公開する。

- [Genea.app](https://www.genea.app/) - プライバシーを意識した設計された、誰でも使える家族歴史ツール。データはGEDCOM形式で保存され、すべての処理はブラウザ上で行われる。 ([Source Code](https://github.com/genea-app/genea-app)) `MIT` `Javascript`
- [Genealogy](https://genealogy.kreaweb.be/) - 家族メンバーとその関係を記録し、家族樹を構築する。 ([Demo](https://genealogy.kreaweb.be/), [Source Code](https://github.com/MGeurts/genealogy)) `MIT` `PHP`
- [GeneWeb](https://geneweb.tuxfamily.org/wiki/GeneWeb) - オフラインまたはウェブサービスとして使える家族歴史ソフトウェア。 ([Source Code](https://github.com/geneweb/geneweb)) `GPL-2.0` `OCaml`
- [Gramps Web](https://www.grampsweb.org/) - Grampsというオープンソースのデスクトップアプリケーションと互換性があり、協働型家族歴史を実現するウェブアプリ。 ([Demo](https://gramps-project.github.io/gramps-web-api/), [Source Code](https://github.com/gramps-project/gramps-web-api)) `AGPL-3.0` `Docker`
- [webtrees](https://www.webtrees.net) - Webtreesはウェブ上の協働型家族歴史アプリケーションのリーダー。 ([Demo](https://dev.webtrees.net/demo-stable/index.php?ctype=gedcom&ged=demo), [Source Code](https://github.com/fisharebest/webtrees)) `GPL-3.0` `PHP`


### Generative Artificial Intelligence (GenAI)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Generative Artificial Intelligence (GenAI)](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)は、生成モデルを用いてテキスト、画像、動画、またはその他のデータ形式を生成する[artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence)のサブセットである。

- [Agenta](https://agenta.ai/) - プロンプト管理、LLM評価、可視化を支援するLLMOpsプラットフォーム。協働プロンプトエンジニアリングにより、プロダクションレベルのLLMアプリケーションを構築、評価、監視。 ([Source Code](https://github.com/agenta-ai/agenta)) `MIT` `Docker`
- [AnythingLLM](https://anythingllm.com/) - 一括でデスクトップとDockerに搭載されたAIアプリケーション。組み込みRAG、AIエージェント、ノコードエージェントビルダー、MCP互換性など。 ([Source Code](https://github.com/Mintplex-Labs/anything-llm)) `MIT` `Nodejs/Docker`
- [GoModel](https://gomodel.enterpilot.io/) - Goで書かれたAIゲートウェイ。複数のLLMプロバイダーに対応する統一OpenAI互換API、USDコスト追跡、予算、使用分析、ガードレール、キャッシュ、および管理ダッシュボードを備える。 ([Source Code](https://github.com/ENTERPILOT/GoModel)) `MIT` `Go/Docker`
- [Khoj](https://khoj.dev/) - あなたのAI第二脳。ウェブやドキュメントから答えを取得。カスタムエージェントを構築、自動化スケジュールを設定、深層調査を行う。どんなオンラインまたはローカルのLLMも、あなたの個人的な自律AIに変える。 ([Demo](https://app.khoj.dev/), [Source Code](https://github.com/khoj-ai/khoj)) `AGPL-3.0` `Python/Docker`
- [LibreChat](https://www.librechat.ai) `⚠` - 複数のAIプロバイダーに対応する、ChatGPTと互換性のあるAIチャットインターフェース。マルチユーザー認証、メッセージ検索、プラグイン対応をサポート。 ([Demo](https://chat.librechat.ai), [Source Code](https://github.com/danny-avila/LibreChat)) `MIT` `Nodejs/Docker`
- [LLM Harbor](https://github.com/av/harbor) - コンテナ化されたLLMツールキット。簡潔なCLIでLLMバックエンド、API、フロントエンド、およびその他のサービスを実行可能。 `Apache-2.0` `Docker/Shell`
- [LLMKube](https://llmkube.com) - Kubernetesオペレータによる、セルフホスト型LLM推論。プラグイン可能な実行環境（llama.cpp、vLLM、TGI、Ollama、vllm-swift）、マルチGPUシェアリング、NVIDIA CUDAおよびApple Silicon Metal対応、OpenAI互換APIを備える。 ([Source Code](https://github.com/defilantech/LLMKube)) `Apache-2.0` `Go/Docker/K8S`
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) - マルチソース検索（arXiv、PubMed、ウェブ）、PDFテキスト抽出、暗号化されたローカルストレージを備えたAIによる深層調査ツール。 `MIT` `Docker/Python`
- [LocalAI](https://localai.io/) - ローカルにAIモデルを実行し、画像や音声を生成（OpenAIやClaudeの代替）。 ([Source Code](https://github.com/mudler/LocalAI), [Clients](https://localai.io/gallery.html)) `MIT` `Docker/K8S`
- [Ollama](https://ollama.com/) - Llama 3.3、DeepSeek-R1、Phi-4、Gemma 3など、他の大規模言語モデルで即時開始。 ([Source Code](https://github.com/ollama/ollama)) `MIT` `Docker/Python`
- [Onyx Community Edition](https://onyx.app) - どんなLLMとも連携可能なチャットUI。エージェント、ウェブ検索、RAG、MCP、深層調査、40以上の知識ソースへのコンネクタなど、高度な機能が標準搭載。 ([Source Code](https://github.com/onyx-dot-app/onyx)) `MIT` `Docker/K8S`
- [Open-WebUI](https://openwebui.com) - ユーザーにやさしいAIインターフェース。OllamaやOpenAI APIに対応。（[Source Code](https://github.com/open-webui/open-webui)） `BSD-3-Clause` `Docker/Python`
- [Vane](https://github.com/ItzCrazyKns/Vane) - AIを活用した検索エンジン（Perplexity AIの代替）。 `MIT` `Docker`


### Groupware

**[`^        back to top        ^`](#awesome-selfhosted)**

協働ソフトウェアまたは [groupware](https://en.wikipedia.org/wiki/Collaborative_software) は、共通のタスクを担当する人々がその目標を達成するために設計されています。グループウェアは、ファイル共有、カレンダー／イベント管理、予約スケジューリング、連絡先管理など、複数のサービスを一つの統合されたアプリケーションにまとめることがよくあります。

関連： [Booking and Scheduling](#booking-and-scheduling)

- [Citadel](https://www.citadel.org/) - メール、カレンダー／スケジューリング、連絡先、フォーラム、メールリスト、IM、Wiki、ブログエンジン、RSS集約など、グループワークをサポート。（[Source Code](https://www.citadel.org/source.html)） `GPL-3.0` `C/Docker/Shell`
- [Colanode](https://colanode.com) - リアルタイムメッセージ、豊かなテキストページ、ファイル管理、動的データベースを備えたコラボレーションツール。オフライン作業に最適（Slack、Notionの代替）。（[Source Code](https://github.com/colanode/colanode)） `Apache-2.0` `K8S/Docker`
- [Cozy Cloud](https://cozy.io/) - 個人用クラウドで、ファイル、ノート、連絡先、パスワード、ドキュメントなどを管理・同期できます。（[Source Code](https://github.com/cozy/), [Clients](https://github.com/cozy/cozy-store)） `GPL-3.0` `Nodejs`
- [Digipad](https://digipad.app/) - オンラインで自前で運用可能な、協働型デジタルノートを作成するアプリ（フランス語のドキュメンテーション）。（[Source Code](https://codeberg.org/ladigitale/digipad)） `AGPL-3.0` `Nodejs`
- [Digistorm](https://digistorm.app/) - 協働型のアンケート、クイズ、ブレインストーミング、ワードクラウドを作成できます（フランス語のドキュメンテーション）。（[Demo](https://digistorm.app/), [Source Code](https://codeberg.org/ladigitale/digistorm)） `AGPL-3.0` `Nodejs`
- [Digiwall](https://digiwall.app/) - 対面またはリモートでの業務に適したマルチメディア協働壁を作成できます（フランス語のドキュメンテーション）。（[Source Code](https://codeberg.org/ladigitale/digiwall)） `AGPL-3.0` `Nodejs`
- [egroupware](https://www.egroupware.org/) - カレンダー、連絡先、ノート、プロジェクト管理ツール、顧客関係管理ツール（CRM）、知識管理ツール、Wiki、CMSを含むソフトウェアセット。（[Source Code](https://github.com/EGroupware/egroupware)） `GPL-2.0` `PHP`
- [Group Office](https://www.group-office.com) - 企業向けCRMおよびグループワークツール。プロジェクト、カレンダー、ファイル、メールを同僚やクライアントとオンラインで共有できます。（[Source Code](https://github.com/Intermesh/groupoffice/)） `AGPL-3.0` `PHP`
- [Openmeetings](https://openmeetings.apache.org/index.html) - Red5ストリーミングサーバーのリモートおよびストリーミングAPI機能を活用した、ビデオ会議、インスタントメッセージ、白板、協働ドキュメント編集など、グループワークツール。（[Source Code](https://github.com/apache/openmeetings)） `Apache-2.0` `Java`
- [SOGo](https://www.sogo.nu/) - SOGoはカレンダーおよびメッセージデータへのアクセスを複数の方法で提供します。CalDAV、CardDAV、GroupDAV、ActiveSyncを含み、ネイティブなOutlook互換性およびWebインターフェースを備えています。（[Demo](https://demo.sogo.nu/SOGo/), [Source Code](https://github.com/Alinto/sogo)） `LGPL-2.1` `Objective-C`
- [Tine](https://www.tine-groupware.de/) - 企業や組織におけるデジタル協働を支援するソフトウェア。強力なグループワーク機能から賢い拡張機能まで、tineがすべてを統合し、日々のチーム協働をより簡単にする。（[Source Code](https://github.com/tine-groupware/tine)） `AGPL-3.0` `Docker`
- [Tracim](https://github.com/tracim/tracim) - チーム協働用の協働プラットフォーム：ファイル、スレッド、ノート、議事録など。 `AGPL-3.0/LGPL-3.0/MIT` `Python`
- [Zimbra Collaboration](https://www.zimbra.com/) - メール、カレンダー、協働サーバー。Webインターフェースと多数の統合機能を備えています。（[Source Code](https://github.com/zimbra)） `GPL-2.0/CPAL-1.0` `Java`


### Health and Fitness

**[`^        back to top        ^`](#awesome-selfhosted)**

[Medical](https://en.wikipedia.org/wiki/Medical_software), [Health](https://en.wikipedia.org/wiki/Health_information_technology) および [Fitness](https://en.wikipedia.org/wiki/Fitness_tracker) ソフトウェア。

- [Endurain](https://docs.endurain.com/) - ユーザーがデータとホスティング環境について完全な制御を保てるように設計されたフィットネストラッキングサービス。（[Source Code](https://codeberg.org/endurain-project/endurain)） `AGPL-3.0` `Docker`
- [FitTrackee](https://docs.fittrackee.org/) - シンプルなワークアウト／アクティビティトラッカー。（[Source Code](https://github.com/SamR1/FitTrackee)） `AGPL-3.0` `Python/Docker`
- [Mere Medical](https://meremedical.co/) `⚠` - Epic MyChart、Cerner、OnPatientの患者ポータルからすべての医療記録を1か所で管理できます。プライバシーに配慮し、自前で運用可能でオフライン優先です。（[Demo](https://demo.meremedical.co), [Source Code](https://github.com/cfu288/mere-medical)） `GPL-3.0` `Docker/Nodejs`
- [OpenELIS Global](https://openelis-global.org) - 臨床、公衆衛生、環境、ベクター監視施設向けの実験室情報システム（LIS/LIMS）。FHIRネイティブで、アナライザー統合（ASTM/HL7）、品質管理および全国規模の報告をサポート。（[Demo](https://openelis-global.org/getting-started/demo/), [Source Code](https://github.com/DIGI-UW/OpenELIS-Global-2)） `MPL-2.0` `Java/Docker`
- [OpenEMR](https://www.open-emr.org/) - 電子健康記録および医療業務管理ソリューション。（[Demo](https://www.open-emr.org/demo/), [Source Code](https://github.com/openemr/openemr)） `GPL-3.0` `PHP/Docker`
- [wger](https://wger.de/) - ウェブベースの個人用ワークアウト、フィットネスおよび体重記録・トラッカー。シンプルなジム管理ツールとしても利用可能であり、完全なREST APIを提供しています。([Demo](https://wger.de/en/dashboard), [Source Code](https://github.com/wger-project/wger)) `AGPL-3.0` `Python/Docker`


### Human Resources Management (HRM)

**[`^        back to top        ^`](#awesome-selfhosted)**

A [human resources management system](https://en.wikipedia.org/wiki/Human_resource_management_system)は、 [human resources](https://en.wikipedia.org/wiki/Human_resources)、ビジネスプロセスおよびデータの容易な管理を確保するために、複数のシステムとプロセスを組み合わせる。

- [admidio](https://www.admidio.org/) - 組織やグループのウェブサイト向けユーザー管理システム。柔軟な役割モデルにより、組織の構造と権限を正確に反映できます。([Demo](https://www.admidio.org/demo/), [Source Code](https://github.com/Admidio/admidio)) `GPL-2.0` `PHP/Docker`
- [Frappe HR](https://frappe.io/hr) - 従業員管理から入社手続き、休暇、給与、税務までを含む13以上のモジュールを備えた完全なHRMSソリューション。([Source Code](https://github.com/frappe/hrms)) `GPL-3.0` `Docker/Python/Nodejs`
- [MintHCM](https://minthcm.org/) - SugarCRM Community EditionおよびSuiteCRMという2つの人気ある有名ビジネスアプリケーションに基づいた人材資本管理ツール。([Source Code](https://github.com/minthcm/minthcm)) `AGPL-3.0` `PHP`


### Identity Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Identity management](https://en.wikipedia.org/wiki/Identity_management) (IdM) は、識別およびアクセス管理 (IAM または IdAM) と呼ばれる、適切なユーザーがテクノロジー資源に適切なアクセスを有するよう確保するためのポリシーおよび技術を構成するフレームワークである。

**お問い合わせはこちらまで [awesome-sysadmin/Identity Management](https://github.com/awesome-foss/awesome-sysadmin#identity-management)**



### Internet of Things (IoT)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Internet of Things](https://en.wikipedia.org/wiki/Internet_of_things)は、センサー、処理能力、ソフトウェア、およびその他の技術を備えた物理的な物体を指し、インターネットを介して他のデバイスとデータを接続し、交換するものである。

関連： [Automation](#automation)

- [Domoticz](https://www.domoticz.com/) - 照明、スイッチ、温度、雨、風、UV、電気、ガス、水などさまざまなセンサー・メーターを監視・設定できるホームオートメーションシステム。([Source Code](https://github.com/domoticz/domoticz), [Clients](https://github.com/domoticz/domoticz-android)) `GPL-3.0` `C/C++/Docker/Shell`
- [EMQX](https://www.emqx.io/) - スケーラブルなMQTTブローカー。1つのクラスタに1億件以上のIoTデバイスを接続し、1ms遅延で100万メッセージ/秒の処理能力でリアルタイムIoTデータを処理できます。([Demo](https://www.emqx.com/en/mqtt/public-mqtt5-broker), [Source Code](https://github.com/emqx/emqx)) `Apache-2.0` `Docker/Erlang`
- [evcc](https://evcc.io/) - 拡張可能な電動車両充電制御器および家庭エネルギー管理システム。([Source Code](https://github.com/evcc-io/evcc)) `MIT` `deb/Docker/Go`
- [FHEM](https://fhem.de/fhem.html) - 家庭内の一般的なタスク（ランプや加熱のスイッチなど）を自動化できます。また、温度や電力消費などのイベントを記録することも可能です。Webまたはスマートフォンのフロントエンド、telnetまたはTCP/IPで直接制御できます。([Source Code](https://svn.fhem.de/trac)) `GPL-3.0` `Perl`
- [FlowForge](https://flowforge.com/) - Node-REDアプリケーションを信頼性・スケーラビリティ・セキュリティの観点から確実にデプロイできます。FlowForgeプラットフォームはNode-RED開発チーム向けのDevOps機能を提供します。([Source Code](https://github.com/FlowFuse/flowfuse)) `Apache-2.0` `Nodejs/Docker/K8S`
- [FMD Server](https://fmd-foss.org) - FMD（Find My Device）Androidアプリと通信するサーバーで、デバイスの位置を確認・制御できます。([Source Code](https://gitlab.com/fmd-foss/fmd-server), [Clients](https://gitlab.com/fmd-foss/fmd-android)) `GPL-3.0` `Docker/Go`
- [Gladys](https://gladysassistant.com/) - プライバシーを最優先としたホームアシスタント。([Source Code](https://github.com/GladysAssistant/Gladys)) `Apache-2.0` `Nodejs/Docker`
- [Home Assistant](https://home-assistant.io/) - ホームオートメーションプラットフォーム。([Demo](https://home-assistant.io/demo/), [Source Code](https://github.com/home-assistant/core)) `Apache-2.0` `Python/Docker`
- [ioBroker](https://www.iobroker.net/) - IoT向け統合プラットフォーム。建築自動化、スマートメータリング、環境支援生活、プロセス自動化、可視化およびデータ記録に特化しています。([Source Code](https://github.com/ioBroker/ioBroker)) `MIT` `Nodejs`
- [LHA](https://github.com/javalikescript/lha) - Blockly、HTMLまたはLuaを使って完全に拡張可能なライトホームオートメーションアプリケーション。ConBee、Philips HueまたはZ-Wave JSなどの拡張機能を含みます。`MIT` `Lua`
- [Node RED](https://nodered.org/) - ハードウェアデバイス、APIおよびオンラインサービスを接続してIoTソリューションを作成できるブラウザベースのフロー編集ツール。([Source Code](https://github.com/node-red/node-red)) `Apache-2.0` `Nodejs/Docker`
- [Onloc](https://onloc.app) - リアルタイムで自分の位置を追跡・共有できます。盗難や紛失したスマートフォンの制御・ロックも可能です。([Source Code](https://github.com/onloc-app/onloc-api), [Clients](https://github.com/onloc-app/onloc-android)) `AGPL-3.0` `Docker`
- [openHAB](https://www.openhab.org) - ホームオートメーション向けのベンダーおよび技術に依存しないオープンソースソフトウェア。([Source Code](https://github.com/openhab/openhab-core)) `EPL-2.0` `Java`
- [OpenRemote](https://openremote.io) - IoT資産管理、フロー規則およびWHEN-THEN規則、データ可視化、エッジゲートウェイ。([Demo](https://demo.openremote.io/), [Source Code](https://github.com/openremote/openremote)) `AGPL-3.0` `Java`
- [polluSensWeb](https://wespeakenglish.github.io/polluSensWeb/) - UART汚染センサー（PM2.5、VOCなど）からのデータを可視化および記録するためのウェブベースシリアルインターフェースおよびチャートツール。リアルタイムデータ取得、動的チャート、CSVエクスポート、ウェブhook統合を備えています。([Demo](https://wespeakenglish.github.io/polluSensWeb/), [Source Code](https://github.com/WeSpeakEnglish/polluSensWeb), [Clients](https://github.com/WeSpeakEnglish/polluSensWeb/releases)) `MIT` `Javascript`
- [SIP Irrigation Control](https://dan-in-ca.github.io/SIP/) - スプリンクル／給水制御向けオープンソースソフトウェア。([Source Code](https://github.com/Dan-in-CA/SIP)) `GPL-3.0` `Python`
- [SOLECTRUS](https://solectrus.de) - 太陽光発電ダッシュボードで、エネルギーの生産と消費を表示し、コストと節約の計算を実行します。([Demo](https://demo.solectrus.de), [Source Code](https://github.com/solectrus/solectrus)) `AGPL-3.0` `Docker`
- [Tasmota](https://tasmota.com) - ESPデバイス向けオープンソースファームウェア。完全なローカル制御を実現し、迅速な設定とアップデートが可能。MQTT、Web UI、HTTPまたはシリアルで制御。タイマー、ルール、スクリプトを使って自動化。ホームオートメーションソリューションとの統合。([Source Code](https://github.com/arendst/Tasmota)) `GPL-3.0` `C/C++`
- [Thingsboard](https://thingsboard.io/) - オープンソースIoTプラットフォーム - デバイス管理、データ収集、処理および可視化。([Demo](https://demo.thingsboard.io/signup), [Source Code](https://github.com/thingsboard/thingsboard)) `Apache-2.0` `Java/Docker/K8S`
- [WebThings Gateway](https://webthings.io/gateway/) - WebThingsは、Web of Thingsのオープンソース実装であり、WebThings GatewayおよびWebThings Frameworkを含みます。([Source Code](https://github.com/WebThingsIO/gateway)) `MPL-2.0` `Nodejs`


### Inventory Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Inventory management software](https://en.wikipedia.org/wiki/Inventory_management_software).

_関連： [Money, Budgeting & Management](#money-budgeting--management), [Resource Planning](#resource-planning)_

参照も： [awesome-sysadmin/IT Asset Management](https://github.com/awesome-foss/awesome-sysadmin#it-asset-management)

- [Cannery](https://cannery.app) - 銃器および弾薬のトラッキングアプリ。([Source Code](https://codeberg.org/shibao/cannery)) `AGPL-3.0` `Docker`
- [DVinyl](https://github.com/Kyonew/DVinyl) `⚠` - 物理メディア（レコード、CD、カセット、本、映画、ゲーム）向けの現代的なコレクションマネージャー。`MIT` `Nodejs/Docker`
- [HomeBox (SysAdminsMedia)](https://homebox.software/) - 家庭ユーザー向けの在庫と整理システム。([Demo](https://demo.homebox.software/), [Source Code](https://github.com/sysadminsmedia/homebox)) `AGPL-3.0` `Docker/Go`
- [Inventaire](https://inventaire.io/welcome) - 協働リソースマッピングプロジェクトで、現在は書籍のマッピングとWikidataおよびISBNの探索に焦点を当てています。([Source Code](https://codeberg.org/inventaire/inventaires)) `AGPL-3.0` `Nodejs`
- [Inventree](https://docs.inventree.org/en/latest/) - 直感的な部品管理と在庫制御を提供する在庫管理システム。([Demo](https://inventree.org/demo), [Source Code](https://github.com/inventree/InvenTree)) `MIT` `Python`
- [Open QuarterMaster](https://openquartermaster.com/) - 柔軟でスケーラブルに設計された強力な在庫管理システム。([Source Code](https://github.com/Epic-Breakfast-Productions/OpenQuarterMaster)) `GPL-3.0` `deb/Docker`
- [Part-DB](https://docs.part-db.de/) - 電子部品の在庫管理システム。([Demo](https://demo.part-db.de/en/), [Source Code](https://github.com/Part-DB/Part-DB-server)) `AGPL-3.0` `Docker/PHP/Nodejs`
- [Shelf](https://www.shelf.nu) - チームが明確さを重視する場合に使用する資産および設備のトラッキングソフトウェア。Shelfは資産データベースとQR資産ラベル生成ツールであり、場所を越えて資産の作成・管理・概要を提供します。無制限の資産、永遠に無料。([Source Code](https://github.com/Shelf-nu/shelf.nu)) `AGPL-3.0` `Nodejs`
- [Spoolman](https://github.com/Donkie/Spoolman) - 3Dプリンターのフィラメントスpoolの在庫を追跡します。`MIT` `Docker/Python`


### Knowledge Management Tools

**[`^        back to top        ^`](#awesome-selfhosted)**

[Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management)は、知識および情報の作成、共有、利用および管理に関する方法の集まりである。

_関連： [Note-taking & Editors](#note-taking--editors), [Wikis](#wikis), [Database Management](#database-management)_

- [AFFiNE Community Edition](https://affine.pro/) - 計画、分類、作成を統合した次世代の知識ベース。プライバシーを最優先し、カスタマイズ可能で即時使用可能（NotionやMiroの代替）。([Demo](https://app.affine.pro/), [Source Code](https://github.com/toeverything/AFFiNE)) `MIT/AGPL-3.0` `Docker`
- [Atomic Server](https://atomicserver.eu/) - ドキュメント（Notionに類似）、テーブル、検索、強力なリンクデータAPIを備えた知識グラフデータベース。軽量で非常に高速であり、実行時依存性なし。([Demo](https://atomicdata.dev/), [Source Code](https://github.com/ontola/atomic-server)) `MIT` `Docker/Rust`
- [Digimindmap](https://ladigitale.dev/digimindmap/#/) - シンプルなマインドマップを作成（フランス語のドキュメント）。([Demo](https://ladigitale.dev/digimindmap/#/), [Source Code](https://codeberg.org/ladigitale/digimindmap)) `AGPL-3.0` `Nodejs/PHP`
- [LibreKB](https://librekb.com/) - ウェブベースの知識ベースソリューション。シンプルなウェブアプリで、PHPとMySQLを備えたほぼすべてのウェブサーバーまたはホスティングプロバイダーで動作します。([Source Code](https://github.com/michaelstaake/LibreKB/)) `GPL-3.0` `PHP`
- [memEx](https://codeberg.org/shibao/memEx) - 構造化された個人用知識ベース。zettlekastenおよびorg-modeにインスピレーションを得ています。`AGPL-3.0` `Docker`
- [SiYuan](https://b3log.org/siyuan/) - プライバシーを最優先した個人用知識管理ソフトウェア。TypeScriptおよびGolangで構築されています。([Source Code](https://github.com/siyuan-note/siyuan)) `AGPL-3.0` `Docker/Go`
- [TeamMapper](https://github.com/b310-digital/teammapper) - 自らのマインドマップをホストし、作成します。チームと共有し、マインドマップ上でリアルタイムで協働できます。([Demo](https://map.kits.blog)) `MIT` `Docker/Nodejs`


### Learning and Courses

**[`^        back to top        ^`](#awesome-selfhosted)**

教育や学習を支援するツールとソフトウェア。

- [Canvas LMS](https://www.instructure.com/canvas/) - 教育方法を変革する学習管理システム（LMS）。([Demo](https://canvas.instructure.com/register), [Source Code](https://github.com/instructure/canvas-lms)) `AGPL-3.0` `Ruby`
- [Chamilo LMS](https://chamilo.org/) - オンラインまたは半オンライントレーニングの提供を目的とした仮想キャンパスを作成します。([Source Code](https://github.com/chamilo/chamilo-lms)) `GPL-3.0` `PHP`
- [Digiscreen](https://ladigitale.dev/digiscreen/) - 教室でのリアルタイムまたはリモートでの使用に適したインタラクティブな白板／壁紙（フランス語のドキュメント）。([Demo](https://ladigitale.dev/digiscreen/), [Source Code](https://codeberg.org/ladigitale/digiscreen)) `AGPL-3.0` `Nodejs/PHP`
- [Digitools](https://ladigitale.dev/digitools) - リアルタイムまたはリモートでの講義の進行を支援するシンプルなツールセット（フランス語のドキュメント）。([Demo](https://ladigitale.dev/digitools/), [Source Code](https://codeberg.org/ladigitale/digitools)) `AGPL-3.0` `PHP`
- [edX](https://www.edx.org/) - Open edXプラットフォームは、edX.orgを動かすオープンソースコードです。([Source Code](https://github.com/edx/)) `AGPL-3.0` `Python`
- [Gibbon](https://gibbonedu.org/) - 教師、学生、保護者、リーダーにとって生活をより良くするための柔軟な学校管理プラットフォーム。([Source Code](https://github.com/GibbonEdu/core)) `GPL-3.0` `PHP`
- [Helium](https://www.heliumedu.com) - クラス、宿題、成績、ノートに色分けされた学生プランナー。スマート通知とマルチデバイス同期を備えています。([Demo](https://app.heliumedu.com), [Source Code](https://github.com/HeliumEdu/platform)) `MIT` `Python/Docker`
- [ILIAS](https://www.ilias.de) - 何でも処理できる学習管理システム。([Demo](https://demo.ilias.de), [Source Code](https://github.com/ILIAS-eLearning/ILIAS)) `GPL-3.0` `PHP`
- [INGInious](https://inginious.org/?lang=en) - 学生が作成したコードの安全かつ自動化されたテストを可能にする知能型評価ツール。([Source Code](https://github.com/INGInious/INGInious), [Clients](https://github.com/INGInious/plugins)) `AGPL-3.0` `Python/Docker`
- [Moodle](https://moodle.org/) - 世界で最も大きなオープンソースコミュニティを備えた学習およびコースプラットフォーム。([Demo](https://moodle.org/demo/), [Source Code](https://git.moodle.org/gw)) `GPL-3.0` `PHP`
- [Open eClass](https://www.openeclass.org/) - オープン eClassは、教育プロセスを向上させる高度なeラーニングソリューションです。（[Demo](https://demo.openeclass.org/), [Source Code](https://github.com/gunet/openeclass)） `GPL-2.0` `PHP`
- [OpenOLAT](https://www.openolat.com/?lang=en) - 授業、教育、評価、コミュニケーションを支援する学習管理システム。（[Demo](https://learn.olat.com), [Source Code](https://github.com/OpenOLAT/OpenOLAT)） `Apache-2.0` `Java`
- [QST](https://qstonline.org) - オンライン評価ソフトウェア。スマートフォンでの簡単なクイズから、大規模かつ高リスクの監視されたデスクテストまで、使いやすく、安全で経済的。（[Demo](https://qstonline.org/free_account.htm), [Source Code](https://sourceforge.net/projects/qstonline/)） `GPL-2.0` `Perl`
- [RELATE](https://documen.tician.de/relate/) - 柔軟なルール、統計、複数コース対応、クラスカレンダーを備えたコースウェアパッケージ。（[Source Code](https://github.com/inducer/relate)） `MIT` `Python`
- [RosarioSIS](https://www.rosariosis.org/) - 学校運営用の生徒情報システム。生徒の人口統計、成績、スケジュール、出席、生徒の請求、規律、食事サービスモジュールを含む。（[Demo](https://www.rosariosis.org/demo/), [Source Code](https://gitlab.com/francoisjacquet/rosariosis/)） `GPL-2.0` `PHP`


### Manufacturing

**[`^        back to top        ^`](#awesome-selfhosted)**

[3D printers](https://en.wikipedia.org/wiki/3D_printing), [CNC machines](https://en.wikipedia.org/wiki/Numerical_control)およびその他の物理的な製造ツールを管理するソフトウェア。

- [CNCjs](https://cnc.js.org/) - Grbl、Smoothieware、またはTinyGを実行するCNCマシンコントローラー向けのウェブインターフェース。（[Source Code](https://github.com/cncjs/cncjs/)） `MIT` `Nodejs`
- [Fluidd](https://docs.fluidd.xyz/) - Klipper、3Dプリンタファームウェア向けの軽量かつ反応性のユーザーインターフェース。（[Source Code](https://github.com/fluidd-core/fluidd)） `GPL-3.0` `Docker/Nodejs`
- [LinuxCNC](https://www.linuxcnc.org/) - LinuxベースのCNCマシンコントローラー。 millingマシン、旋盤、3Dプリンタ、レーザーカッター、プラズマカッター、ロボットアーム、ヘキサポッドなど、さまざまな機器を駆動できます。（[Source Code](https://github.com/LinuxCNC/linuxcnc)） `GPL-2.0/LGPL-3.0` `C/deb`
- [Mainsail](https://docs.mainsail.xyz/) - Klipper 3Dプリンタファームウェア向けの現代的かつ反応性のユーザーインターフェース。どこからでも、どんなデバイスからでも、プリンタを制御・監視できます。（[Source Code](https://github.com/mainsail-crew/mainsail)） `GPL-3.0` `Docker/Python`
- [Manyfold](https://manyfold.app) - 3Dプリントファイル（STL、OBJ、3MFなど）を管理するデジタル資産マネージャー。（[Source Code](https://github.com/manyfold3d/manyfold)） `MIT` `Docker`
- [Octoprint](https://octoprint.org/) - 消費者向け3Dプリンタの制御に用いるスナップウェブインターフェース。（[Source Code](https://github.com/OctoPrint/OctoPrint)） `AGPL-3.0` `Docker/Python`


### Maps and Global Positioning System (GPS)

**[`^        back to top        ^`](#awesome-selfhosted)**

[地図](https://en.wikipedia.org/wiki/Map)、[地図作成](https://en.wikipedia.org/wiki/Cartography)、[GIS](https://en.wikipedia.org/wiki/Geographic_information_system)、[GPS](https://en.wikipedia.org/wiki/Global_Positioning_System)ソフトウェア。

関連情報: [Travel Organization](#travel-organization)

関連項目: [awesome-openstreetmap](https://github.com/osmlab/awesome-openstreetmap), [awesome-gis](https://github.com/sshuair/awesome-gis)

- [AdventureLog](https://adventurelog.app) - 旅行トラッカーおよび旅行計画ツール。（[Demo](https://demo.adventurelog.app/signup), [Source Code](https://github.com/seanmorley15/AdventureLog)） `GPL-3.0` `Docker`
- [AirTrail](https://airtrail.johan.ohly.dk) - 個人用飛行トラッキングシステム。（[Source Code](https://github.com/johanohly/AirTrail)） `GPL-3.0` `Docker/Nodejs`
- [Bicimon](https://github.com/knrdl/bicimon) - 自転車スピードメーターとしてプログレッシブウェブアプリ。（[Demo](https://knrdl.github.io/bicimon/)） `MIT` `Javascript`
- [Dawarich](https://dawarich.app/) - あなたの位置履歴を可視化し、移動を追跡し、旅行パターンを分析できる完全なプライバシーと制御を提供（Google Timeline（＝Google Location History）の代替）。（[Source Code](https://github.com/Freika/dawarich)） `AGPL-3.0` `Docker`
- [Geo2tz](https://github.com/noandrea/geo2tz) - 地理座標（lat, lon）から時区を取得します。 `MIT` `Go/Docker`
- [GraphHopper](https://graphhopper.com/) - OpenStreetMapを用いた高速ルーティングライブラリとサーバー。（[Source Code](https://github.com/graphhopper/graphhopper)） `Apache-2.0` `Java`
- [NextGIS Web](https://nextgis.com/nextgis-web/) - 地理空間データ管理、ウェブマップ公開、QGISを中心とした協働ワークフローを支援するウェブGISサーバー。（[Demo](https://sandbox.nextgis.com), [Source Code](https://github.com/nextgis/nextgisweb)） `GPL-3.0` `Docker`
- [Nominatim](https://nominatim.org/) - OpenStreetMapデータ上で地名から座標（address → coordinates）へ、座標から地名（coordinates → address）へ変換する地名コーディング（geocoding）と逆地名コーディング（reverse geocoding）を行うサーバーアプリ。（[Source Code](https://github.com/osm-search/Nominatim)） `GPL-2.0` `C`
- [Open Source Routing Machine (OSRM)](http://project-osrm.org/) - OpenStreetMapデータ上で動作する高性能ルーティングエンジン。HTTP API、C++ライブラリインターフェース、Node.jsラッパーを提供。（[Demo](https://map.project-osrm.org/), [Source Code](https://github.com/Project-OSRM/osrm-backend)） `BSD-2-Clause` `C++`
- [OpenRouteService](https://openrouteservice.org/) - 方向指示、等時線、時間距離マトリクス、ルート最適化など、ルートサービス。（[Demo](https://openrouteservice.org/dev/#/api-docs/introduction), [Source Code](https://github.com/GIScience/openrouteservice)） `GPL-3.0` `Docker/Java`
- [OpenStreetMap](https://www.openstreetmap.org/) - 世界の自由編集可能な地図を作成する協働プロジェクト。（[Source Code](https://github.com/openstreetmap/openstreetmap-website), [Clients](https://wiki.openstreetmap.org/wiki/Software)） `GPL-2.0` `Ruby`
- [OpenTripPlanner](https://www.opentripplanner.org/) - OpenStreetMapデータに基づき、公開されたGTFS形式データを消費して、地域の公共交通機関を用いてルートを提案する多モーダル旅行計画ソフトウェア。（[Source Code](https://github.com/opentripplanner/OpenTripPlanner)） `LGPL-3.0` `Java/Javascript`
- [OwnTracks Recorder](https://github.com/owntracks/recorder) `⚠` - [OwnTracks](https://owntracks.org/)の位置トラッキングアプリが公開したデータを保存し、アクセスできる。（`GPL-2.0` `C/Lua/deb/Docker`）
- [TileServer GL](https://tileserver.readthedocs.io/) - ベクターマップとレイターマップにGLスタイルを適用。Mapbox GL Nativeによるサーバー側レンダリング。Mapbox GL JS、Android、iOS、Leaflet、OpenLayers、WMTSを含むGIS用のマップタイルサーバー。（[Source Code](https://github.com/maptiler/tileserver-gl)） `BSD-2-Clause` `Nodejs/Docker`
- [Traccar](https://www.traccar.org/) - GPS位置を追跡するJavaアプリ。多くのトラッキングデバイスとプロトコルをサポートし、AndroidおよびiOSアプリを提供。トリップをWebインターフェースで閲覧可能。（[Demo](https://demo.traccar.org/), [Source Code](https://github.com/traccar)） `Apache-2.0` `Java`
- [TRIP](https://itskovacs-trip.netlify.app/) - ミニマリストなPOIマップトラッカーとトリッププランナー。（[Demo](https://itskovacs-trip.netlify.app/home), [Source Code](https://github.com/itskovacs/trip)） `MIT` `Docker`
- [wanderer](https://github.com/open-wanderer/wanderer) - トラックをアップロードまたは新規作成し、さまざまなメタデータを追加して簡単に検索可能なカタログを作成できるトライルデータベース。（[Demo](https://demo.wanderer.to)） `AGPL-3.0` `Docker/Go/Nodejs`


### Media Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Digital media](https://en.wikipedia.org/wiki/Digital_media) マネジメントツールおよびソフトウェア。

_関連項目: [Automation](#automation), [Media Streaming](#media-streaming), [Media Streaming - Audio Streaming](#media-streaming---audio-streaming), [Media Streaming - Multimedia Streaming](#media-streaming---multimedia-streaming), [Media Streaming - Video Streaming](#media-streaming---video-streaming), [Media Management](#media-management)_

- [ChannelTube](https://github.com/TheWicklowWolf/ChannelTube) `⚠` - yt-dlpを用いて、YouTubeチャンネルからスケジュールに従って動画または音声をダウンロード。（`AGPL-3.0` `Docker`）
- [Deleterr](https://github.com/rfsbraz/deleterr) - Plex、Sonarr、Radarrに配置された視聴済みおよび陳腐なコンテンツを削除する自動化されたメディアクリーンアップツール。設定可能なルールに基づく。（`MIT` `Docker`）
- [Downtify](https://downtify.henriquesebastiao.com) `⚠` - Spotifyの音楽をアルバムアートとメタデータ付きでダウンロード。（[Source Code](https://github.com/henriquesebastiao/downtify)） `GPL-3.0` `Docker`
- [Lidarr](https://lidarr.audio/) - UsenetおよびBitTorrentユーザー向けの音楽コレクションマネージャー。（[Source Code](https://github.com/Lidarr/Lidarr)） `GPL-3.0` `C#/Docker`
- [LidaTube](https://github.com/TheWicklowWolf/LidaTube) `⚠` - yt-dlpを使って欠落しているLidarrのアルバムを検索・取得。（`GPL-3.0`） `Docker`
- [Lidify](https://github.com/TheWicklowWolf/Lidify) `⚠` - SpotifyまたはLastFMを用いて選択されたLidarrアーティストに基づきおすすめを提供する音楽発見ツール。（`MIT`） `Docker`
- [Medusa](https://github.com/pymedusa/Medusa) - テレビ番組向けの自動動画ライブラリマネージャー。好きな番組の新エピソードを監視し、投稿されたらその魔法を発動します。（[Clients](https://github.com/medusajs/nextjs-starter-medusa)） `GPL-3.0` `Python`
- [MeTube](https://github.com/alexta69/metube) - youtube-dl向けのウェブGUI（プレイリスト対応）。数十サイトの動画をダウンロード可能。（`AGPL-3.0`） `Python/Nodejs/Docker`
- [MKVPriority](https://github.com/kennethsible/mkvpriority) - 設定可能な優先順位スコアを用いて好まれるオーディオおよび字幕トラックを選択し、適切なデフォルトおよび強制フラグを設定。（`MIT`） `Python/Docker`
- [MyTube](https://github.com/franklioxygen/MyTube) `⚠` - yt-dlp対応サイトでのチャンネルサブスクリプション、クラウドアップロード、ローカルライブラリ管理をサポートするダウンローダーおよびプレイヤー。（[Demo](https://mytube-demo.vercel.app)） `MIT` `Nodejs/Docker`
- [nefarious](https://lardbit.github.io/nefarious/) - 映画およびテレビ番組の自動ダウンロード。（[Source Code](https://github.com/lardbit/nefarious)） `GPL-3.0` `Python`
- [Ombi](https://ombi.io/) - Plex/Emby向けのコンテンツリクエストシステム。SickRage、CouchPotato、Sonarrに接続し、機能セットが拡張中。（[Demo](https://app.ombi.io/), [Source Code](https://github.com/Ombi-app/Ombi)） `GPL-2.0` `C#/deb`
- [Pinchflat](https://github.com/kieraneglin/pinchflat) `⚠` - yt-dlpを使用して構築されたYouTubeコンテンツをダウンロード。（`AGPL-3.0`） `Docker`
- [PodFetch](https://samtv12345.github.io/PodFetch) - 洗練された効率的なポッドキャストダウンローダー。（[Source Code](https://github.com/SamTV12345/PodFetch)） `Apache-2.0` `Docker/Rust`
- [Radarr](https://radarr.video/) - UsenetおよびBitTorrentを介して映画とテレビ番組を自動ダウンロード（Sonarrのフォーク）。（[Source Code](https://github.com/Radarr/Radarr)） `GPL-3.0` `C#/Docker`
- [Reaparr](https://www.reaparr.rocks/) `⚠` - 跨プラットフォームのPlexメディアダウンローダーで、他のPlexサーバーからのメディアをスムーズに自サーバーに追加。（[Source Code](https://github.com/Reaparr/Reaparr)） `GPL-3.0` `Docker`
- [Seerr](https://github.com/seerr-team/seerr) - メディアライブラリのリクエスト管理を可能に。Plex、JellyfinおよびEmbyメディアサーバーをサポート（Overseerrのフォーク）。（`MIT`） `Docker/Nodejs`
- [Sonarr](https://sonarr.tv/) - UsenetおよびBitTorrent向けのテレビ番組自動ダウンローダーおよびマネージャー。新エピソードを取得・並べ替え・リネームし、既にダウンロード済みのファイルの品質を自動的にアップグレード可能。（[Source Code](https://github.com/Sonarr/Sonarr)） `GPL-3.0` `C#/Docker`
- [TrackWatch](https://trackwatch.emlopezr.com) `⚠` - Spotifyの音楽リリースを自動追跡し、メール通知、ディスクグラフィック生成、ゴーストトラッククリーン（Release Radarの代替）。（[Source Code](https://github.com/emlopezr/trackwatch)） `MIT` `Docker`
- [tubesync](https://github.com/meeb/tubesync) `⚠` - YouTubeチャンネルとプレイリストをローカルホストされたメディアサーバーに同期。（`AGPL-3.0`） `Docker/Python`
- [Watcharr](https://github.com/sbondCo/Watcharr) - 視聴中の番組と映画を追加・追跡。ユーザー認証、現代的でシンプルなUI、非常に簡単なセットアップを備えている。（[Demo](https://beta.watcharr.app/)） `MIT` `Docker`
- [ydl_api_ng](https://github.com/Totonyus/ydl_api_ng) - シンプルなyoutube-dl REST APIで、遠隔サーバーでのダウンロードを開始。（`GPL-3.0`） `Python`
- [Youtarr](https://github.com/DialmasterOrg/Youtarr) `⚠` - yt-dlpを使ってスケジュールでYouTubeチャンネルの動画をダウンロード。ウェブUIで動画を閲覧・選択的にダウンロード可能。Plex Media Serverと統合し、Jellyfin、Kodi、Emby向けにNFOメタデータを生成。（`ISC`） `Docker`
- [youtube-dl-nas](https://hyeonsangjeon.github.io/youtube-dl-nas/) `⚠` - 認証されたyt-dlpダウンロードキュー（動画、音声、字幕）を提供。履歴、モバイル共有、NASファイル管理（youtube-dl-serverのフォーク）。（[Source Code](https://github.com/hyeonsangjeon/youtube-dl-nas)） `MIT` `Python/Docker`
- [YoutubeDL-Server](https://github.com/nbr23/youtube-dl-server) - Youtube-DL向けのウェブおよびRESTインターフェースでサーバーに動画をダウンロード。（`MIT`） `Python/Docker`
- [yt-dlp Web UI](https://github.com/marcopiovanello/yt-dlp-web-ui) - yt-dlp向けのウェブGUI。（`MPL-2.0`） `Docker/Go/Nodejs`


### Media Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Streaming media](https://en.wikipedia.org/wiki/Streaming_media)は、ソースから連続的に配信・消費され、ネットワーク要素内の中間ストレージがほとんどまたは全くないマルチメディアである。

**お問い合わせは [Media streaming - Audio Streaming](#media-streaming---audio-streaming), [Media streaming - Multimedia Streaming](#media-streaming---multimedia-streaming), [Media streaming - Video Streaming](#media-streaming---video-streaming), [Media Management](#media-management) までお願いいたします**

関連： [Media Streaming](#media-streaming)

も参照： [List of streaming media systems - Wikipedia](https://en.wikipedia.org/wiki/List_of_streaming_media_systems), [Comparison of streaming media systems - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)



### Media Streaming - Audio Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Audio](https://en.wikipedia.org/wiki/Audio) ストリーミングツールとソフトウェア。

関連： [Media Management](#media-management)

- [Ampache](https://ampache.org/) - ウェブベースのオーディオ・ビデオストリーミングアプリケーション。（[Demo](https://play.dogmazic.net/), [Source Code](https://github.com/ampache/ampache)） `AGPL-3.0` `PHP`
- [Audiobookshelf](https://www.audiobookshelf.org/) - オーディオブックおよびポッドキャストサーバー。すべてのオーディオフォーマットをストリーミングし、デバイス間で進行状況を保持・同期。AndroidおよびiOS向けオープンソースアプリを備えている。（[Source Code](https://github.com/advplyr/audiobookshelf), [Clients](https://github.com/advplyr/audiobookshelf-app)） `GPL-3.0` `Docker/deb/Nodejs`
- [Audioserve](https://github.com/izderadicka/audioserve) - ディレクトリからオーディオファイル（オーディオブック、音楽、ポッドキャストなど）を提供するシンプルな個人サーバー。シンプルさに焦点を当てており、クライアント間での再生位置の同期をサポート。（`MIT`） `Rust`
- [AzuraCast](https://www.azuracast.com/) - 現代的でアクセスしやすいウェブラジオマネージメントツールセット。（[Source Code](https://github.com/AzuraCast/AzuraCast)） `Apache-2.0` `Docker`
- [Beets](https://beets.io/) - 音楽ライブラリマネージャーおよびMusicBrainzタグ付けツール（コマンドラインおよびウェブインターフェース）。（[Source Code](https://github.com/beetbox/beets)） `MIT` `Python/deb`
- [Black Candy](https://github.com/blackcandy-org/blackcandy) - 音楽ストリーミングサーバー。（`MIT`） `Docker/Ruby`
- [BotWave](https://botwave.dpip.lol) - FM放送システムで、複数のRaspberry Pi送信機をリモートで管理できるサーバー・クライアントアーキテクチャ。 ([Source Code](https://github.com/dpipstudio/botwave)) `GPL-3.0` `Python`
- [Funkwhale](https://dev.funkwhale.audio/funkwhale) - 現代的な、ウェブベース、使いやすい、マルチユーザーかつ無料の音楽サーバー。 `BSD-3-Clause` `Python`
- [gonic](https://github.com/sentriz/gonic) - 軽量の音楽ストリーミングサーバー。Subsonicと互換性あり。 `GPL-3.0` `Go/Docker`
- [koel](https://koel.dev/) - 個人用の音楽ストリーミングサーバー。 ([Demo](https://demo.koel.dev/), [Source Code](https://github.com/koel/koel)) `MIT` `PHP`
- [LibreTime](https://libretime.org) - ウェブ上で放送ストリーミングラジオ（[Airtime](https://github.com/sourcefabric/Airtime)のフォーク）。 ([Source Code](https://github.com/LibreTime/libretime)) `AGPL-3.0` `Docker/PHP`
- [LMS](https://github.com/epoupon/lms) - ウェブインターフェースを使って、自前でホストした音楽にアクセス。 `GPL-3.0` `Docker/deb/C++`
- [Lyrion Music Server](https://lyrion.org/) - 幅広いSqueezebox/Slimデバイスオーディオプレイヤーおよび互換ハードウェアを制御するサーバーソフトウェア（以前はLogitech Media Server）。 ([Source Code](https://github.com/lms-community/slimserver), [Clients](https://lyrion.org/extensions/applications/)) `GPL-2.0` `deb/Docker/Perl`
- [moOde Audio](https://moodeaudio.org/) - ラジオ音楽プレイヤーとしての高品質な音楽再生を、素晴らしいRaspberry Piシリーズのシングルボードコンピュータで提供。 ([Source Code](https://github.com/moode-player/moode)) `GPL-3.0` `PHP`
- [Mopidy](https://docs.mopidy.com/) `⚠` - 拡張可能な音楽サーバー。mpd APIのサブセットを提供し、Spotify、SoundCloudなど第三者サービスとの統合も可能。 ([Source Code](https://github.com/mopidy/mopidy)) `Apache-2.0` `Python/deb`
- [mpd](https://www.musicpd.org/) - リモートで音楽を再生・ストリーミングし、プレイリストを管理・整理するデーモン。多くのクライアントが利用可能。 ([Source Code](https://github.com/MusicPlayerDaemon/MPD), [Clients](https://www.musicpd.org/clients/)) `GPL-2.0` `C++`
- [mStream](https://mstream.io/) - GUI管理ツールを備えた音楽ストリーミングサーバー。Mac、Windows、Linuxで動作。 ([Source Code](https://github.com/IrosTheBeggar/mStream)) `GPL-3.0` `Nodejs`
- [multi-scrobbler](https://foxxmd.github.io/multi-scrobbler) - 複数のソースから複数のスコブリングサービスにプレイ履歴を記録。 ([Source Code](https://github.com/FoxxMD/multi-scrobbler)) `MIT` `Nodejs/Docker`
- [musikcube](https://musikcube.com/) - Linux/macOS/Windows/Androidクライアントを備えたストリーミングオーディオサーバー。 ([Source Code](https://github.com/clangen/musikcube)) `BSD-3-Clause` `C++/deb`
- [Navidrome Music Server](https://www.navidrome.org) - 現代的な音楽サーバーおよびストリーミングサーバー。Subsonic/Airsonicと互換性あり。 ([Demo](https://www.navidrome.org/demo), [Source Code](https://github.com/navidrome/navidrome), [Clients](https://www.navidrome.org/docs/overview/#apps)) `GPL-3.0` `Docker/Go`
- [Pinepods](https://www.pinepods.online/) - マルチユーザー対応のポッドキャスト管理システム。Pinepodsは中央データベースを活用し、聴取時間やテーマなどの情報がデバイス間で連続的に反映される。 ([Demo](https://try.pinepods.online), [Source Code](https://github.com/madeofpendletonwool/PinePods)) `GPL-3.0` `Docker`
- [Polaris](https://github.com/agersant/polaris) - 大規模な音楽コレクション、使いやすさ、高性能を考慮した音楽閲覧およびストリーミングアプリケーション。 `MIT` `Rust/Docker`
- [Snapcast](https://github.com/snapcast/snapcast) - 同期型マルチルームオーディオサーバー。 `GPL-3.0` `C++/deb`
- [Stretto](https://github.com/benkaiser/stretto) `⚠` - YouTube/SoundCloudのインポートとiTunes/Spotifyの発見を備えた音楽プレイヤー。 ([Demo](https://next.kaiserapps.com), [Clients](https://github.com/benkaiser/stretto-mobile-next)) `MIT` `Nodejs`
- [Supysonic](https://github.com/spl0k/supysonic) - SubsonicサーバーAPIのPython実装。 `AGPL-3.0` `Python/deb`
- [SwingMusic](https://swingmusic.vercel.app/) - Swing Musicは、あなたのローカルオーディオファイルに最適化された、美しい自前ホスト音楽プレイヤーおよびストリーミングサーバー。Spotifyのようなもの…でも、あなたの音楽を自前で持ってくる。 ([Source Code](https://github.com/swingmx/swingmusic)) `MIT` `Python/Docker`
- [vod2pod-rss](https://github.com/madiele/vod2pod-rss) `⚠` - YouTubeおよびTwitchチャンネルをポッドキャストに変換。保存不要。視聴動画（VoDs）を即時的に192k MP3に変換し、ポッドキャストクライアントで使用できるRSSフィードを生成。`MIT` `Docker`


### Media Streaming - Multimedia Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Multimedia](https://en.wikipedia.org/wiki/Multimedia) ストリーミングツールとソフトウェア。

_関連： [Media Streaming - Video Streaming](#media-streaming---video-streaming), [Media Streaming - Audio Streaming](#media-streaming---audio-streaming), [Media Management](#media-management)_

- [ClipBucket](https://clipbucket.fr/) - 自分の動画共有サイト（YouTube／Netflixクローン）を数分で開始。（[Demo](https://demo.clipbucket.oxygenz.fr/)，[Source Code](https://github.com/MacWarrior/clipbucket-v5)）`AAL` `Docker/PHP`
- [cmyflix](https://github.com/farfalleflickan/cmyflix) - シンプルなPlex／Jellyfinの代替品として、動画をストリーミング可能。`AGPL-3.0` `C/deb`
- [Gerbera](https://gerbera.io/) - UPnPメディアサーバー。家庭ネットワーク内でデジタルメディアをストリーミングでき、UPnP対応デバイスで聴き見ることができる。（[Source Code](https://github.com/gerbera/gerbera)）`GPL-2.0` `Docker/deb/C++`
- [Icecast 2](https://icecast.org) - ストリーミングオーディオ／ビデオサーバー。インターネットラジオ局やプライベートなプレイリスト（ジャッキボックス）を作成するのに使える。 （[Source Code](https://gitlab.xiph.org/xiph/icecast-server)，[Clients](https://icecast.org/apps/)）`GPL-2.0` `C`
- [Jellyfin](https://jellyfin.org) - オーディオ、ビデオ、本、コミック、写真を対象としたメディアサーバー。スリーミングインターフェースと強力な変換機能を備え、ほぼすべての現代プラットフォームに対応。Roku、Android TV、iOS、Kodiなどにクライアントが存在。（[Demo](https://demo.jellyfin.org/stable)，[Source Code](https://github.com/jellyfin/jellyfin)，[Clients](https://github.com/awesome-jellyfin/awesome-jellyfin)）`GPL-2.0` `C#/deb/Docker`
- [Karaoke Eternal](https://www.karaoke-eternal.com) - 素晴らしいカラオケパーティを主催。すべての人がスマホのブラウザから楽曲を検索・並び替えできる。プレイヤーも完全にブラウザベースで、MP3+G、MP4およびWebGLによる視覚化に対応。（[Source Code](https://github.com/bhj/KaraokeEternal)）`ISC` `Docker/Nodejs`
- [Kodi](https://kodi.tv/) - マルチメディア／エンターテインメントセンター。かつてはXBMCと呼ばれていた。Android、BSD、Linux、macOS、iOS、Windowsで動作。（[Source Code](https://github.com/xbmc/xbmc)）`GPL-2.0` `C++/deb`
- [Kyoo](https://github.com/zoriya/kyoo) - アニメ、シリーズ、映画のスムーズなストリーミングを可能にする革新的メディアブラウザ。動的変換、自動視聴履歴、知能的なメタデータ取得といった高度な機能を提供。（[Demo](https://kyoo.zoriya.dev)）`GPL-3.0` `Docker`
- [MediaMTX](https://mediamtx.org) - 即時使用可能で、依存関係のないリアルタイムメディアサーバーおよびプロキシ。SRT、WebRTC、RTSP、RTMP、HLS、MPEG-TS、RTPを介してビデオ／オーディオストリームの公開、読み取り、記録、再生、ルーティングが可能。（[Source Code](https://github.com/bluenviron/mediamtx)，[Clients](https://mediamtx.org/docs/kickoff/introduction)）`MIT` `Go/Docker`
- [Meelo](https://github.com/Arthi-chaud/Meelo) - 個人用音楽サーバー。コレクターおよび音楽愛好家向けに設計。`GPL-3.0` `Docker`
- [MistServer](https://mistserver.org/) - すべてのデバイスおよびフォーマットに対応するパブリックドメインのストリーミングメディアサーバー。（[Source Code](https://github.com/DDVTECH/mistserver)）`Unlicense` `C++`
- [NymphCast](http://nyanko.ws/nymphcast.php) - Linux対応ハードウェアを自らのテレビや電源付きスピーカーに音声・動画ソースとして活用（Chromecastの代替）。（[Source Code](https://github.com/MayaPosch/NymphCast)）`BSD-3-Clause` `C++`
- [Rygel](https://gnome.pages.gitlab.gnome.org/rygel/) - UPnP AVメディアサーバー。音声、動画、画像を簡単に共有できる。メディアプレイヤーソフトはRygelを使用してメディアレンダラーに変換され、UPnPまたはDLNAコントローラーからリモートで操作可能。（[Source Code](https://gitlab.gnome.org/GNOME/rygel/)）`LGPL-2.1` `C`
- [Stash](https://stashapp.cc) - 成人メディアのストックを管理・再生するウェブベースのライブラリ管理ツール。自動タグ付けおよびメタデータスクレイピングに対応。（[Source Code](https://github.com/stashapp/stash)）`AGPL-3.0` `Docker/Go`
- [µStreamer](https://github.com/pikvm/ustreamer) - V4L2デバイスからネットにMJPEG動画をストリーミングする軽量かつ高速なサーバー。`GPL-3.0` `C/deb`
- [üWave](https://u-wave.net/) `⚠` - 自分でホストできる協働聴取プラットフォーム。ユーザーはYouTubeやSoundCloudなどのさまざまなメディアソースから音楽、トーク、ゲームプレイ動画などを順番に再生。（[Demo](https://wlk.yt/)，[Source Code](https://github.com/u-wave)）`MIT` `Nodejs`


### Media Streaming - Video Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Video](https://en.wikipedia.org/wiki/Video) ストリーミングツールとソフトウェア。

_関連情報: [Video Surveillance](#video-surveillance), [Media Streaming - Multimedia Streaming](#media-streaming---multimedia-streaming), [Photo Galleries](#photo-galleries), [Media Management](#media-management)_

- [CyTube](https://github.com/calzoneman/sync) - 複数チャンネルのメディア、チャットなどを同期可能。（[Demo](https://cytu.be)）`MIT` `Nodejs`
- [Invidious](https://github.com/iv-org/invidious) `⚠` - YouTubeの代替フロントエンド。（[Demo](https://docs.invidious.io/instances/)）`AGPL-3.0` `Docker/Crystal`
- [MediaCMS](https://mediacms.io) - 現代的な、完全に機能するオープンソースビデオおよびメディアCMS。Python/Django/Reactで構成され、REST APIを備える。（[Source Code](https://github.com/mediacms-io/mediacms)）`AGPL-3.0` `Python/Docker`
- [OvenMediaEngine](https://github.com/OvenMediaLabs/OvenMediaEngine) - ストリーミングサーバーでサブ秒遅延。 ([Demo](https://demo.ovenplayer.com)) `AGPL-3.0` `C++/Docker`
- [Owncast](https://owncast.online/) - 分散型単ユーザーライブビデオストリーミングとチャットサーバー。大手主流サービスに似たスタイルで、自分のライブストリーミングを実行できます。 ([Source Code](https://github.com/owncast/owncast)) `MIT` `Go`
- [PeerTube](https://joinpeertube.org/en/) - ブラウザ内にP2P（BitTorrent）を使用した分散型ビデオストリーミングプラットフォーム。 ([Source Code](https://github.com/Chocobozzz/PeerTube)) `AGPL-3.0` `Nodejs`
- [Rapidbay](https://github.com/hauxir/rapidbay/) - ビデオストリーミングサービス／トランツククライアント。ブラウザまたはChromecast／AppleTV／スマートテレビから、トランツクからビデオを検索・再生できます。 `MIT` `Python/Docker`
- [Restreamer](https://datarhei.github.io/restreamer/) - ストリーミングプロバイダーなしで、ウェブサイト上でH.264のリアルタイムビデオストリーミングを提供できます。 ([Source Code](https://github.com/datarhei/restreamer)) `Apache-2.0` `Nodejs/Docker`
- [SRS](https://ossrs.io/) - シンプルで高効率かつリアルタイムなビデオサーバー。RTMP、WebRTC、HLS、HTTP-FLV、SRTをサポート。 ([Source Code](https://github.com/ossrs/srs)) `MIT` `Docker/C++`
- [SyncTube](https://github.com/RblSb/SyncTube) - 軽量で簡単なセットアップが可能なCyTubeの代替品。友達とビデオを視聴し、チャットできます。 `MIT` `Nodejs/Haxe`
- [Tiramisu](https://github.com/MrRobotoGit/tiramisu) - BitTorrentエンジンとFUSE仮想ファイルシステムを組み合わせたもの。ダウンロードなしで、Plex／Jellyfinにライブでトランツクをストリーミング（Real-Debridの代替）。 `GPL-2.0` `Go/Docker`
- [Tube Archivist](https://tubearchivist.com/) `⚠` - YouTubeのコレクションを整理・検索・楽しむ。サブスク、ダウンロード、視聴履歴をメタデータインデックスと使いやすいインターフェースで管理。 ([Source Code](https://github.com/tubearchivist/tubearchivist), [Clients](https://docs.tubearchivist.com/faq/#how-do-i-import-my-videos-to-emby-plex-jellyfin-kodi)) `GPL-3.0` `Docker`
- [Tube](https://git.mills.io/prologic/tube) - YouTube風（規制なし、不要な機能なし！）ビデオ共有アプリ。Goで構築され、自動的にMP4 H.265 AACに変換、複数コレクション、RSSフィードをサポート。 ([Demo](https://tube.mills.io)) `MIT` `Go`
- [VideoLAN Client (VLC)](https://www.videolan.org/) - マルチプラットフォーム対応のマルチメディアプレイヤークライアントおよびサーバー。ほとんどのマルチメディアファイル、DVD、オーディオCD、VCD、およびさまざまなストリーミングプロトコルをサポート。 ([Source Code](https://code.videolan.org/videolan/vlc)) `GPL-2.0` `C/deb`


### Miscellaneous

**[`^        back to top        ^`](#awesome-selfhosted)**

別のセクションに該当しないソフトウェア

- [2FAuth](https://github.com/Bubka/2FAuth) - 2要素認証（2FA）アカウントの管理とセキュリティコードの生成。 ([Demo](https://demo.2fauth.app/)) `AGPL-3.0` `PHP/Docker`
- [Anchr](https://anchr.io) - インターネット上の小さなタスクに使えるツールボックス。ブックマークコレクション、URL短縮、（暗号化された）画像アップロードを含む。 ([Source Code](https://github.com/muety/anchr)) `GPL-3.0` `Nodejs`
- [Anubis](https://anubis.techaro.lol/) - Web AIファイアウォールツール。スクレイピングボットが上流リソースを侵害しないように保護。 ([Source Code](https://github.com/TecharoHQ/anubis)) `MIT` `Docker/deb/Go`
- [asciinema](https://asciinema.org/) - アスキーキャストをホストするWebアプリ。 ([Demo](https://asciinema.org/explore), [Source Code](https://github.com/asciinema/asciinema-server)) `Apache-2.0` `Elixir/Docker`
- [Baby Buddy](https://github.com/babybuddy/babybuddy) - 看護者に赤ちゃんの睡眠、飲食、おむつ交換、お腹時間の記録をサポート。 ([Demo](https://github.com/babybuddy/babybuddy#-demo)) `BSD-2-Clause` `Python`
- [ClipCascade](https://github.com/Sathvik-Rao/ClipCascade) - 複数のデバイス間でクラップボードを即時同期。ボタンを押さなくてもOK。Windows、macOS、Linux、Androidで利用可能。端末間のセキュアなクラップボード共有を提供。 `GPL-3.0` `Java/Docker`
- [Cloudlog](https://magicbug.co.uk/cloudlog/) - どこでもアマチュアラジオの連絡を記録できます。 ([Source Code](https://github.com/magicbug/cloudlog)) `MIT` `PHP/Docker`
- [ConvertX](https://github.com/C4illin/ConvertX) - 1000以上のフォーマットをサポートするオンラインファイル変換ツール。 `AGPL-3.0` `Docker`
- [CUPS](https://www.cups.org/) - 共通Unix印刷システムは、インターネット印刷プロトコル（IPP）を使用して、ローカルおよびネットワークプリンターへの印刷をサポート。 ([Source Code](https://github.com/OpenPrinting/cups)) `GPL-2.0` `C`
- [CyberChef](https://github.com/gchq/CyberChef) - ウェブブラウザ内でAES、DESおよびBlowfish暗号化・復号、ヘキサダンプの作成、ハッシュ値の計算など、さまざまな操作を実行できます。([Demo](https://gchq.github.io/CyberChef)) `Apache-2.0` `Javascript`
- [Digiboard](https://digiboard.app/) - フランス語のドキュメンテーションを参照して、協働型の白板を作成できます。([Source Code](https://codeberg.org/ladigitale/digiboard)) `AGPL-3.0` `Nodejs`
- [Digicard](https://codeberg.org/ladigitale/digicard) - フランス語のドキュメンテーションを参照して、シンプルなグラフィックコンポジションを作成できます。([Demo](https://ladigitale.dev/digicard/)) `AGPL-3.0` `Nodejs`
- [Digicut](https://ladigitale.dev/digicut/) - FFMPEG.wasmを使用して、オーディオおよびビデオファイルを切り取ります。（フランス語のドキュメンテーションを参照）。([Source Code](https://codeberg.org/ladigitale/digicut)) `AGPL-3.0` `Nodejs`
- [Digiface](https://ladigitale.dev/digiface/) - Avataaarsライブラリを使用して、アバターを作成できます。（フランス語のドキュメンテーションを参照）。([Demo](https://ladigitale.dev/digiface/), [Source Code](https://codeberg.org/ladigitale/digiface)) `AGPL-3.0` `Nodejs`
- [Digiflashcards](https://ladigitale.dev/digiflashcards/) - フラッシュカードを作成できるオンラインアプリケーション（フランス語のドキュメンテーションを参照）。([Source Code](https://codeberg.org/ladigitale/digiflashcards)) `AGPL-3.0` `Nodejs/PHP`
- [Digimerge](https://ladigitale.dev/digimerge/) - オーディオおよびビデオファイルをブラウザ内で直接組み立てられます。（フランス語のドキュメンテーションを参照）。([Demo](https://ladigitale.dev/digimerge/), [Source Code](https://codeberg.org/ladigitale/Digimerge)) `AGPL-3.0` `Nodejs`
- [Digiquiz](https://ladigitale.dev/digiquiz/) - H5Pで作成されたコンテンツを公開できるオンラインアプリケーション（フランス語のドキュメンテーションを参照）。([Source Code](https://codeberg.org/ladigitale/digiquiz)) `AGPL-3.0` `Nodejs`
- [Digiread](https://ladigitale.dev/digiread/) `⚠` - MozillaのReadabilityを使用して、オンラインページや記事を整理します。（フランス語のドキュメンテーションを参照）。([Source Code](https://codeberg.org/ladigitale/digiread)) `AGPL-3.0` `Nodejs/PHP`
- [Digisteps](https://ladigitale.dev/digisteps/) - オンライン教育コースを作成できるシンプルなアプリケーション（フランス語のドキュメンテーションを参照）。([Source Code](https://codeberg.org/ladigitale/digisteps)) `AGPL-3.0` `Nodejs/PHP`
- [Digitranscode](https://ladigitale.dev/digitranscode) - オーディオファイルおよびビデオファイルをブラウザ内で直接変換できます。（フランス語のドキュメンテーションを参照）。([Demo](https://ladigitale.dev/digitranscode), [Source Code](https://codeberg.org/ladigitale/digitranscode)) `AGPL-3.0` `Nodejs`
- [Digiview](https://ladigitale.dev/digiview/) `⚠` - YouTubeの動画を分散なしのインターフェースで表示できます。（フランス語のドキュメンテーションを参照）。([Demo](https://ladigitale.dev/digiview/), [Source Code](https://codeberg.org/ladigitale/digiview)) `AGPL-3.0` `Nodejs/PHP`
- [Digiwords](https://ladigitale.dev/digiwords/) - 単純なオンラインアプリケーションでワードクラウドを作成できます。（フランス語のドキュメンテーションを参照）。([Source Code](https://codeberg.org/ladigitale/digiwords)) `AGPL-3.0` `Nodejs/PHP`
- [DOCAT](https://github.com/docat-org/docat) - ドキュメントをホスト。シンプル。バージョン管理。スタイリッシュ。`MIT` `Python/Docker`
- [Domain Locker](https://domain-locker.com) - ドメイン名ポートフォリオの管理とトラッキング。（[Demo](https://demo.domain-locker.com), [Source Code](https://github.com/lissy93/domain-locker)） `MIT` `Deno/Docker`
- [DOMJudge](https://www.domjudge.org/) - ICPC地域大会および世界大会のようなプログラミングコンテストを運営するためのシステム。（[Demo](https://www.domjudge.org/demo), [Source Code](https://github.com/DOMjudge/domjudge)） `GPL-2.0/BSD-3-Clause/MIT` `PHP`
- [ESMira](https://esmira.kl.ac.at) - ESM、AA、EMAなどの長期調査を実施し、データ収集および参加者のコミュニケーションが完全に匿名になります。（[Demo](https://demo-esmira.kl.ac.at/#admin,username:demo,password:demodemodemo), [Source Code](https://github.com/KL-Psychological-Methodology/ESMira)） `AGPL-3.0` `PHP`
- [F-Droid](https://f-droid.org) - F-Droidリポジトリシステムを維持するためのサーバーツール。（[Source Code](https://gitlab.com/fdroid/fdroidserver)） `AGPL-3.0` `Python/Docker/deb`
- [Flyimg](https://flyimg.io) - 画像のサイズ変更および切り取りを即時に行えます。MozJPEG、WebPまたはPNGを使用してImageMagickで最適化された画像を取得し、効率的なキャッシュシステムを備えています。（[Demo](https://demo.flyimg.io), [Source Code](https://github.com/flyimg/flyimg)） `MIT` `Docker`
- [Geeftlist](https://codeberg.org/nanawel/geeftlist) - 友人や家族間で贈り物の管理、共有、予約を行う協働プラットフォーム。`GPL-3.0` `Docker`
- [google-webfonts-helper](https://github.com/majodev/google-webfonts-helper) `⚠` - Google Fontsを自前でホストするための手軽な方法。eot、ttf、svg、woffおよびwoff2ファイル＋CSSコードのサンプルを提供。 ([Demo](https://gwfh.mranftl.com/fonts)) `MIT` `Nodejs`
- [Habitica](https://habitica.com/) - 目標をロールプレイゲームのように扱う習慣管理アプリ。 ([Source Code](https://github.com/HabitRPG/habitica)) `GPL-3.0/CC-BY-SA-3.0` `Nodejs/Docker`
- [HortusFox](https://hortusfox.github.io) - 植物愛好家向けの協働型植物管理およびトラッキングシステム。 ([Source Code](https://github.com/danielbrendel/hortusfox-web)) `MIT` `PHP/Docker`
- [ImgCompress](https://imgcompress.karimzouine.com) - Docker内で完全に動作する画像処理ツール。ローカルAIを用いてクラウドに依存せずに、画像を圧縮・変換・サイズ調整・バッチ処理・背景除去を行う。 ([Source Code](https://github.com/karimz1/imgcompress)) `GPL-3.0` `Docker`
- [Infisical Community Edition](https://infisical.com/) - シークレット、証明書、特別アクセスの管理プラットフォーム。 ([Source Code](https://github.com/Infisical/infisical)) `MIT` `Docker/K8S/deb`
- [iSponsorBlockTV](https://github.com/dmunozv04/iSponsorBlockTV) `⚠` - スポンサーをブロック・スキップし、YouTubeでの広告もミュート・スキップ可能。 `GPL-3.0` `Docker/Python`
- [IT-Tools by sharevb](https://github.com/sharevb/it-tools) - 開発者向けの便利なオンラインツールを集めたコレクション（[it-tools](https://github.com/CorentinTh/it-tools)のフォーク）。 ([Demo](https://sharevb-it-tools.vercel.app/)) `GPL-3.0` `Docker`
- [Jelu](https://bayang.github.io/jelu-web) - 読書リストと読書予定リストを管理する書籍トラッカー。 ([Source Code](https://github.com/bayang/jelu)) `MIT` `Java/Docker`
- [jetlog](https://github.com/pbogre/jetlog) - 個人用の飛行機のトラッキングと閲覧ツール。 `GPL-2.0` `Docker`
- [Kasm Workspaces](https://kasmweb.com/) - ユーザーにストリーミングして提供するコンテナ化されたアプリとデスクトップ。例：ブラウザ内でUbuntu、あるいはChrome、OpenOffice、Gimp、Filezillaなどの単一アプリ。 ([Demo](https://www.kasmweb.com/#demo), [Source Code](https://github.com/kasmtech)) `GPL-3.0` `Docker`
- [Koillection](https://koillection.github.io/) - Koillectionは、ユーザーがどんなコレクションも管理できるサービス。 ([Source Code](https://github.com/benjaminjonard/koillection)) `MIT` `Docker/PHP`
- [LanguageTool](https://languagetool.org/) - 20以上の言語を校正可能。単純なスペルチェックでは検出できない多くの誤りを発見。 ([Source Code](https://github.com/languagetool-org/languagetool), [Clients](https://languagetool.org/insights/post/product-windows-app/)) `LGPL-2.1` `Java/Docker`
- [Libre Translate](https://libretranslate.com/) - マシン翻訳API。 ([Source Code](https://github.com/LibreTranslate/LibreTranslate)) `AGPL-3.0` `Docker/Python`
- [LubeLogger](https://lubelogger.com) - ウェブベースの車両メンテナンスおよび燃料 mileage トラッカー。 ([Demo](https://github.com/hargata/lubelog?tab=readme-ov-file#demo), [Source Code](https://github.com/hargata/lubelog)) `MIT` `Docker/K8S/C#`
- [Mirumoji](https://svdc1.github.io/mirumoji/docs) - 日本語浸透ツールキット。クリック可能なトークン化サブタイル、辞書検索、トランスクリプション生成を提供。 ([Demo](https://svdc1.github.io/mirumoji/), [Source Code](https://github.com/svdC1/mirumoji)) `MIT` `Docker/Python`
- [mosparo](https://mosparo.io/) - 現代的なスパム保護ツール。他のCAPTCHA方式をシンプルで使いやすいスパム保護ソリューションに置き換える。 ([Source Code](https://github.com/mosparo/mosparo)) `MIT` `PHP`
- [Movary](https://github.com/leepeuker/movary) `⚠` - 観た映画をトラッキング・評価できるウェブアプリ。 ([Demo](https://github.com/leepeuker/movary?tab=readme-ov-file#demo)) `MIT` `Docker/PHP`
- [Neko](https://neko.m1k1o.net) - Docker内で動作するウェブブラウザ。WebRTCを使用。 ([Source Code](https://github.com/m1k1o/neko)) `Apache-2.0` `Docker/Go`
- [OmniTools](https://omnitools.app/) - 日々のタスク（コーディング、画像・動画の操作、PDF、数値計算など）に使える強力なウェブベースツールのコレクション。 ([Source Code](https://github.com/iib0011/omni-tools)) `MIT` `Docker`
- [Open-Meteo](https://open-meteo.com/) - 主要な国の気象サービスから提供されるオープンデータ、歴史データ、気候データを含む天気API。 ([Demo](https://open-meteo.com/en/docs), [Source Code](https://github.com/open-meteo/open-meteo)) `AGPL-3.0` `Docker`
- [OpenReader](https://openreader.richardr.dev/) - EPUB、PDF、DOCX、MD、TXTファイルのテキスト読み上げドキュメントリーダー。リアルタイムで高品質なTTSでドキュメントを読み、またはオーディオブックを抽出できます。（[Demo](https://openreader.richardr.dev/)、[Source Code](https://github.com/richardr1126/openreader)）`MIT` `Docker`
- [OpenZiti](https://openziti.io/) - 完全機能、ゼロトラスト、フルマッシュオーバーネットワーク。2FAを標準でサポートし、主要なデスクトップおよびモバイルOSに対応したクライアントを提供。（[Source Code](https://github.com/openziti/ziti)）`Apache-2.0` `Go`
- [Operational.co](https://operational.co) - 製品からのリアルタイムタイムラインでアラートを受け取る。（[Demo](https://app.operational.co/?signinas=kevin)、[Source Code](https://github.com/operational-co/operational.co)）`AGPL-3.0` `Nodejs/Docker`
- [penpot](https://penpot.app/) - クロスドメインチーム向けのウェブベースデザインおよびプロトタイピングプラットフォーム。（[Source Code](https://github.com/penpot/penpot)）`MPL-2.0` `Docker`
- [POMjs](https://password.oppetmoln.se/) - ランダムパスワード生成器。（[Source Code](https://github.com/joho1968/POMjs)）`GPL-2.0` `Javascript`
- [Pønskelisten](https://github.com/aunefyren/poenskelisten) - プレゼントやギフトの共有リストを作成し、協力して贈り物を選びます。`GPL-3.0` `Docker/Go`
- [re:Director](https://re-director.github.io/) - シンプルなドメインリダイレクト管理ツール。（[Source Code](https://github.com/re-Director/re-director)）`Apache-2.0` `Java/Docker`
- [Reactive Resume](https://rxresu.me/) - プライバシーを意識した一筋のリズムを作成する履歴書作成ツール。完全に安全で、カスタマイズ可能で、ポータブルで、オープンソースで、永遠に無料です。（[Demo](https://rxresu.me/)、[Source Code](https://github.com/AmruthPillai/Reactive-Resume)）`MIT` `Docker/Nodejs`
- [revealjs](https://revealjs.com) - HTMLを使って美しいプレゼンテーションを簡単に作成できるフレームワーク。（[Demo](https://revealjs.com/)、[Source Code](https://github.com/hakimel/reveal.js)）`MIT` `Javascript`
- [Revive Adserver](https://www.revive-adserver.com/) - 広告配信システム。以前はOpenX AdserverおよびphpAdsNewと呼ばれていました。（[Source Code](https://github.com/revive-adserver/revive-adserver)）`GPL-2.0` `PHP`
- [SANE Network Scanning](http://sane-project.org/) - リモートクライアントがローカルホストにある画像取得デバイス（スキャナー）にアクセスできるようにします。（[Source Code](http://www.sane-project.org/cvs.html)）`GPL-2.0` `C`
- [string.is](https://string.is/) - 開発者向けのオープンソースでプライバシーに配慮したオンライン文字列ツールキット。（[Source Code](https://github.com/recurser/string-is)）`AGPL-3.0` `Nodejs`
- [Teleport](https://goteleport.com/) - SSH、Kubernetes、ウェブアプリケーション、データベース向けの証明書発行機とアクセス平面。（[Source Code](https://github.com/gravitational/teleport)）`Apache-2.0` `Go/Docker/K8S`
- [TeslaMate](https://github.com/teslamate-org/teslamate) - テスラ車両向けの強力なデータログソフトウェア。`MIT` `Elixir/Docker`
- [Transmute](https://transmute.sh) - 画像、動画、音声、JSON、エクセルなど、2,000以上の変換をサポートするファイル変換ツール。（[Source Code](https://github.com/transmute-app/transmute)）`MIT` `Docker`
- [URL-to-PNG](https://github.com/jasonraimondi/url-to-png) - URLからPNGに変換するユーティリティ。スクリーンショットにはPlaywrightによる並列レンダリング、ストレージキャッシュにはLocal、S3、またはCouchDBを使用します。`MIT` `Nodejs/Docker`
- [Usertour](https://www.usertour.io/) - ユーザーオンボーディングプラットフォームで、アプリ内ツアー、チェックリスト、アンケートを数分で作成できます。（[Source Code](https://github.com/usertour/usertour/)）`AGPL-3.0` `Docker`
- [Warracker](https://warracker.com) - 保証期間を監視できる保証トラッカー。保証の期限までにアップロードできる領収書やファイル、そして期限前にアラートを表示します。（[Source Code](https://github.com/sassanix/Warracker)）`AGPL-3.0` `Docker`
- [Wavelog](https://www.wavelog.org) - ラジオ愛好家向けのウェブベースログソフトウェア。ブラウザに強化されたQSOログ、統計、地図を提供します。（[Demo](https://demo.wavelog.org)、[Source Code](https://github.com/wavelog/wavelog)）`MIT` `PHP/Docker`
- [WeeWX](https://weewx.com/) - あなたの天気観測ステーション向けのオープンソースソフトウェア。（[Demo](https://weewx.com/showcase.html)、[Source Code](https://github.com/weewx/weewx)）`GPL-3.0` `Python/deb`
- [WeTTY](https://butlerx.github.io/wetty/#/) - ブラウザ上でHTTP/HTTPSで動作する終端。 ([Source Code](https://github.com/butlerx/wetty)) `MIT` `Docker/Nodejs`
- [Wishlist](https://github.com/cmintey/wishlist) - 友達や家族と共有できるウィッシュリストアプリ。 `MIT` `Docker/K8S`
- [Yamtrack](https://github.com/FuzzyGrim/Yamtrack) `⚠` - 映画、テレビ番組、アニメ、マンガ、ゲーム、本に対するメディアトラッカー。 ([Demo](https://github.com/FuzzyGrim/Yamtrack?tab=readme-ov-file#demo)) `AGPL-3.0` `Docker/Python`
- [Zero-TOTP](https://zero-totp.com) - ゼロ知識暗号による完全で信頼性があり、ゼロトラストのウェブアプリで、あなたのTOTPコードを安全に保管します。 ([Source Code](https://github.com/SeaweedbrainCY/zero-totp)) `GPL-3.0` `Docker`


### Money, Budgeting & Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Money management](https://en.wikipedia.org/wiki/Money_management) および予算ソフトウェア。

_関連： [Inventory Management](#inventory-management), [Resource Planning](#resource-planning)_

- [Actual](https://actualbudget.org) - デバイス間の同期をサポートし、カスタムルール、手動取引のインポート（QIF、OFX、QFXファイル）、多くの銀行とのオプション自動同期を提供する、ローカル第一の個人財務ツール。 ([Source Code](https://github.com/actualbudget/actual)) `MIT` `Nodejs/Docker`
- [Bigcapital](https://bigcapital.app/) - 中小企業向けの財務会計および在庫管理ソフトウェア。 ([Source Code](https://github.com/bigcapitalhq/bigcapital)) `AGPL-3.0` `Docker`
- [Bitcart](https://bitcart.ai) - 暗号通貨の決済処理および開発プラットフォーム。 ([Demo](https://admin.bitcart.ai), [Source Code](https://github.com/bitcart/bitcart)) `MIT` `Docker/Python/Nodejs`
- [BTCPay Server](https://btcpayserver.org/) - ビットコインおよびその他の暗号通貨の決済処理。 ([Demo](https://mainnet.demo.btcpayserver.org/), [Source Code](https://github.com/btcpayserver/btcpayserver)) `MIT` `C#`
- [Budget Board](https://budgetboard.net/) - 月間支出を追跡し、財務目標に取り組むためのシンプルなアプリ。 ([Source Code](https://github.com/teelur/budget-board)) `GPL-3.0` `Docker`
- [DePay](https://depay.com) - あなたのウォレットに直接Web3決済を受け入れる。ピアツーピア、無料、セルフホスト、オープンソース。 ([Demo](https://depay.com/products/payments), [Source Code](https://github.com/depayfi/widgets)) `MIT` `Nodejs`
- [Econumo](https://econumo.com) - 個人および家族の財務を管理する予算アプリで、複数通貨、共通口座、予算をサポート。 ([Demo](https://demo.econumo.com), [Source Code](https://github.com/econumo/econumo)) `MIT` `Docker`
- [ExpenseOwl](https://github.com/tanq16/expenseowl) - 非常にシンプルな支出トラッカーで、美しいUIを備えています。 `MIT` `Go/Docker/K8S`
- [ezbookkeeping](https://ezbookkeeping.mayswind.net/) - あなた自身がホストする軽量な個人的な帳簿アプリ。 ([Demo](https://ezbookkeeping-demo.mayswind.net/), [Source Code](https://github.com/mayswind/ezbookkeeping)) `MIT` `Go/Docker`
- [Family Accounting Tool](https://github.com/nymanjens/facto) - パートナー間で部分的に共有される支出を管理するためのウェブベースの財務管理ツール。 `Apache-2.0` `Scala`
- [Fava](https://beancount.github.io/fava/) - テキストベースの二重入力会計システムBeancountのウェブフロントエンド。 ([Demo](https://fava.pythonanywhere.com/example-with-budgets/income_statement/), [Source Code](https://github.com/beancount/fava)) `MIT` `Python`
- [Firefly III](https://firefly-iii.org/) - Firefly IIIは現代的な財務マネージャーです。お金の管理と予算予測をサポートし、クレジットカードをサポートし、高度なルールエンジンを備え、多くの銀行からのデータをインポートできます。 ([Demo](https://demo.firefly-iii.org/), [Source Code](https://github.com/firefly-iii/firefly-iii)) `AGPL-3.0` `PHP/Docker`
- [FOSSBilling](https://fossbilling.org/) - ホスティングと請求自動化。WHM、CWP、cPanelおよびHestiaCPと統合。完全なAPIを提供し、簡単に拡張可能です。 ([Demo](https://fossbilling.org/demo), [Source Code](https://github.com/FOSSBilling/FOSSBilling)) `Apache-2.0` `PHP/Docker`
- [Galette](https://galette.eu/) - 非営利組織向けのメンバーシップ管理ウェブアプリ。 ([Source Code](https://github.com/galette/galette)) `GPL-3.0` `PHP`
- [Ghostfolio](https://ghostfol.io/) - 株式、ETF、暗号通貨の管理をサポートする資産管理ソフトウェア。 ([Source Code](https://github.com/ghostfolio/ghostfolio)) `AGPL-3.0` `Docker/Nodejs`
- [GRR](https://grr.devome.com/?lang=en) - 中小・中規模企業向けの資産管理および予約システム。 ([Source Code](https://github.com/JeromeDevome/GRR)) `GPL-2.0` `PHP`
- [HyperSwitch](https://hyperswitch.io/) `⚠` - 支払いを速く、信頼性高く、手頃な価格で実現。複数の支払い処理業者と連携し、トラフィックをスムーズにルートを設定。すべて、1つのAPI統合で完了。（[Source Code](https://github.com/juspay/hyperswitch)） `Apache-2.0` `Docker/Rust`
- [IHateMoney](https://ihatemoney.org/) - 共有支出を簡単に管理できます。（[Demo](https://ihatemoney.org/demo/), [Source Code](https://github.com/spiral-project/ihatemoney)） `BSD-3-Clause` `Docker/Python`
- [InvoicePlane](https://www.invoiceplane.com/) - 小規模ビジネス向けの見積もり、請求書、支払い、顧客の管理を一括で行えます。（[Source Code](https://github.com/InvoicePlane/InvoicePlane)） `MIT` `PHP`
- [InvoiceShelf](https://invoiceshelf.com/) - 支出や支払いを追跡し、プロフェッショナルな請求書や見積もりを作成（Craterのフォーク）。（[Source Code](https://github.com/InvoiceShelf/InvoiceShelf)） `AGPL-3.0` `PHP/Docker`
- [Kill Bill](https://killbill.io/) - サブスクリプションの請求と支払いプラットフォーム。リアルタイムの分析と財務レポートにアクセスできます。（[Source Code](https://github.com/killbill/killbill)） `Apache-2.0` `Java/Docker`
- [Kresus](https://kresus.org/) - 個人の財務管理アプリ。（[Demo](https://kresus.org/en/demo.html), [Source Code](https://github.com/kresusapp/kresus)） `AGPL-3.0` `Nodejs/Docker`
- [Lago](https://www.getlago.com/) - メートリングと使用量ベースの請求。（[Source Code](https://github.com/getlago/lago)） `AGPL-3.0` `Docker`
- [monetr](https://monetr.app/) - 繰り返し支出の計画に特化した予算管理アプリ。（[Source Code](https://github.com/monetr/monetr)） `FSL-1.1-MIT` `Docker/K8S`
- [Mybucks.online](https://mybucks.online) - 安全で、ブラウザベース、パスワードのみの自ら保管型暗号資産ウォレット。（[Demo](https://app.mybucks.online), [Source Code](https://github.com/mybucks-online/app)） `MIT` `Nodejs`
- [MyFin Budget](https://myfinbudget.com) - 個人の財務プラットフォーム（Web + REST API + Android）で、予算管理、収入・支出の記録、そして将来の財務予測をサポートします。（[Demo](https://github.com/afaneca/myfin?tab=readme-ov-file#demo-account---try-it-for-yourself), [Source Code](https://github.com/afaneca/myfin), [Clients](https://github.com/afaneca/myfin-api)） `GPL-3.0` `Nodejs/Docker`
- [OctoBot](https://www.octobot.cloud/) - 暗号資産取引ボット。（[Source Code](https://github.com/Drakkar-Software/OctoBot)） `GPL-3.0` `Python/Docker`
- [Ocular](https://simonwep.github.io/ocular/) - 月や年をまたいで予算を追跡するためのシンプルで直感的な予算管理アプリ。（[Demo](https://simonwep.github.io/ocular/demo/#demo), [Source Code](https://github.com/simonwep/ocular)） `MIT` `Docker`
- [OpenBudgeteer](https://github.com/TheAxelander/OpenBudgeteer) - バケット予算原理に基づいた予算管理アプリ。`AGPL-3.0` `Docker/C#`
- [Receipt Wrangler](https://receiptwrangler.io) `⚠` - AIを活用した使いやすい領収書管理アプリ。ユーザーが領収書を簡単に作成し、分類なども可能にします。（[Demo](https://demo.receiptwrangler.io), [Source Code](https://github.com/Receipt-Wrangler/receipt-wrangler)） `AGPL-3.0` `Docker`
- [REI3](https://rei3.de/home_en/) - ビジネス内でタスク、時間、資産などを管理できます。（[Demo](https://rei3.de/demo_en/), [Source Code](https://github.com/r3-team/r3)） `MIT` `Go`
- [SHKeeper](https://shkeeper.io/) - 複数の暗号資産を受け入れるためのユニークなゲートウェイと販売業者を組み合わせた暗号資産支払い処理業者。（[Demo](https://github.com/vsys-host/shkeeper.io?tab=readme-ov-file#11-demo), [Source Code](https://github.com/vsys-host/shkeeper.io)） `GPL-3.0` `Python`
- [SolidInvoice](https://solidinvoice.co) - オープンソースの請求書および見積もりアプリ。（[Source Code](https://github.com/SolidInvoice/SolidInvoice)） `MIT` `PHP`
- [Sure](https://github.com/we-promise/sure) - 誰でも使える個人財務アプリ（Maybeのフォーク）。（`AGPL-3.0`） `Docker`
- [VoucherVault](https://github.com/l4rm4nd/VoucherVault) - バーコード、クーポン、忠誠プログラム、ギフトカードをデジタルで保管・管理。期限通知、取引履歴、ファイルアップロード、OIDC SSOをサポート。`GPL-3.0` `Docker`
- [Wallos](https://wallosapp.com) - 軽量な個人サブスクリプショントラッカー。統計情報とオプションの通知を提供。（[Demo](https://github.com/ellite/wallos?tab=readme-ov-file#demo), [Source Code](https://github.com/ellite/wallos)） `GPL-3.0` `PHP/Docker`
- [WYGIWYH](https://github.com/eitchtee/WYGIWYH) - シンプルで強力な財務トラッカー。 ([Demo](https://wygiwyh-demo.herculino.com/)) `AGPL-3.0` `Docker/Python`
- [YAFFA](https://www.yaffa.cc) - 個人向け財務ウェブアプリケーションで、お金、支出、予算、投資を追跡できます。長期的な財務計画にも役立ちます。 ([Demo](https://sandbox.yaffa.cc), [Source Code](https://github.com/kantorge/yaffa)) `MIT` `PHP`


### Monitoring & Status Pages

**[`^        back to top        ^`](#awesome-selfhosted)**

[monitoring](https://en.wikipedia.org/wiki/Monitoring#Computing)システム、ネットワーク、アプリケーションおよびウェブサイト向けのソフトウェア。

**お問い合わせは [awesome-sysadmin/Monitoring](https://github.com/awesome-foss/awesome-sysadmin#monitoring--status-pages), [awesome-sysadmin/Metrics and Metric Collection](https://github.com/awesome-foss/awesome-sysadmin#metrics--metric-collection)**

関連情報: [Personal Dashboards](#personal-dashboards)



### Network Utilities

**[`^        back to top        ^`](#awesome-selfhosted)**

ネットワークユーティリティとは、コンピュータネットワークの管理、監視、トラブルシューティングを支援するツールやソフトウェアである。

参照も： [awesome-sysadmin/Monitoring](https://github.com/awesome-foss/awesome-sysadmin#monitoring)

- [beelzebub](https://beelzebub-honeypot.com/) `⚠` - セキュリティを高めるためのホネイポットフレームワーク。サイバー攻撃の検出と分析に特化しています。 ([Source Code](https://github.com/beelzebub-labs/beelzebub)) `MIT` `Docker/K8S/Go`
- [Canary Tokens](https://canarytokens.org) - 不正アクセスを検出するための軽量で埋め込み可能なホネイポットトリガー（キャニーロックトークン）を生成します。 ([Source Code](https://github.com/thinkst/opencanary)) `BSD-3-Clause` `Docker/Python`
- [MyIP](https://ipcheck.ing) `⚠` - すべてのIPツールボックス。自分のIPを確認したり、IPの地理位置を確認したり、DNSの漏洩をチェックしたり、WebRTC接続を検証したり、スピードテストやpingテスト、MTRテスト、ウェブサイトの可用性を確認したりできる。 ([Demo](https://ipcheck.ing), [Source Code](https://github.com/jason5ng32/MyIP)) `MIT` `Nodejs/Docker`
- [MySpeed](https://myspeed.dev/) - インターネット速度を30日間まで表示するスピードテスト分析ソフトウェア。 ([Source Code](https://github.com/gnmyt/myspeed)) `MIT` `Docker/Nodejs`
- [NetAlertX](https://netalertx.com/) - ネットワーク侵入者や存在を検知するツール。接続されているデバイスをスキャンし、新しい未知のデバイスが見つかった場合にアラートを発行します。 ([Source Code](https://github.com/netalertx/NetAlertX)) `GPL-3.0` `Docker`
- [PlugNPiN](https://deepspace2.github.io/PlugNPiN) - 特定のラベルを持つコンテナを自動的にスクレイピングし、Pi-Hole/AdGuard HomeにローカルDNS/CNAMEエントリ、Nginx Proxy Managerにプロキシホストを作成します。 ([Source Code](https://github.com/deepspace2/plugnpin)) `GPL-3.0` `Docker`
- [Speed Test by OpenSpeedTest™](https://openspeedtest.com/) - 無料かつオープンソースのHTML5ネットワークパフォーマンス推定ツール。 ([Source Code](https://github.com/openspeedtest/Speed-Test)) `MIT` `Docker`
- [Speedtest Tracker](https://docs.speedtest-tracker.dev/) - インターネット接続のパフォーマンスと稼働状態をモニタリングします。 ([Source Code](https://github.com/alexjustesen/speedtest-tracker)) `MIT` `Docker/K8S`
- [Upsnap](https://github.com/seriousm4x/UpSnap) - シンプルなウェイクアップオンLAN（WOL）ダッシュボードアプリ。ネットワーク上のデバイスを起動し、現在の状態を確認できます。 `MIT` `Go/Docker`
- [Wakupator](https://github.com/Gibus21250/Wakupator) - ネットワークトラフィックに基づいたウェイクアップオンLANマシンマネージャー。 `MIT` `C`
- [WatchYourLAN](https://github.com/aceberg/WatchYourLAN) - 軽量なネットワークIPスキャナーで、通知、履歴、Grafanaへのエクスポートが可能です。 `MIT` `Docker/Go/deb`
- [whois](https://github.com/KincaidYang/whois) - ドメイン、IPアドレス、CIDRプレフィックス、ASNsに対するWHOIS/RDAPクエリAPI。統一JSON出力、キャッシュ、APIキー認証、バッチクエリ、AIアシスタント向けMCPサポートを備えています。 ([Demo](https://whois.ddnsip.cn/example.com)) `MIT` `Go/Docker`


### Note-taking & Editors

**[`^        back to top        ^`](#awesome-selfhosted)**

[Note taking](https://en.wikipedia.org/wiki/Note-taking) 編集者。

関連： [Wikis](#wikis)

- [Blinko](https://blinko.space/) - AI機能を備えた個人用ノートツール。 ([Source Code](https://github.com/blinkospace/blinko)) `AGPL-3.0` `Docker`
- [DailyTxT](https://github.com/PhiTux/DailyTxT) - 個人の記憶を保存できる暗号化された日記ウェブアプリ。検索機能と暗号化されたファイルアップロードを備えています。 ([Demo](https://dailytxt.phitux.de)) `MIT` `Docker`
- [Docs](https://docs.numerique.gouv.fr/) - 協働ノート、Wiki、ドキュメントプラットフォームでスケーラブルです。 ([Source Code](https://github.com/suitenumerique/docs)) `MIT` `K8S`
- [draw.io](https://draw.io) - フローチャート、プロセス図、組織図、UML、ER、ネットワーク図を作成できる図面ソフトウェア。 ([Source Code](https://github.com/jgraph/drawio)) `Apache-2.0` `Javascript/Docker`
- [flatnotes](https://github.com/dullage/flatnotes) - データベースなしノートウェブアプリで、ストレージにはマーカーファイルのフラットフォルダを使用します。 ([Demo](https://demo.flatnotes.io)) `MIT` `Docker`
- [HedgeDoc](https://hedgedoc.org/) - すべてのプラットフォームでリアルタイム協働可能なマーカー記録。以前はCodiMDおよびHackMD CEと呼ばれていました。 ([Demo](https://demo.hedgedoc.org/), [Source Code](https://github.com/hedgedoc/hedgedoc)) `AGPL-3.0` `Docker/Nodejs`
- [Joplin](https://joplinapp.org/) - マークダウンエディタと暗号化をサポートする、モバイルおよびデスクトッププラットフォーム向けのノート取りアプリ。クライアントサイドで実行され、セルフホストのNextcloudインスタンスや類似サービスを介して同期（Evernoteの代替）。（[Source Code](https://github.com/laurent22/joplin)） `MIT` `Nodejs`
- [Jotty](https://jotty.page) - 個人用のファイルベースのノートやチェックリストを管理するための軽量かつ強力な代替アプリ。（[Source Code](https://github.com/fccview/jotty)） `AGPL-3.0` `Docker`
- [Livebook](https://livebook.dev) - リアルタイムコラボレーションを可能にするマークダウンベースのノートアプリで、Elixirコードスニペット、TeX、メルマッド図をサポート。DockerまたはElixirで簡単にデプロイ可能。（[Source Code](https://github.com/livebook-dev/livebook)） `Apache-2.0` `Elixir/Docker`
- [Many Notes](https://github.com/brufdev/many-notes) - シンプルさを重視したマークダウンベースのウェブノートアプリ。（`MIT`） `Docker`
- [Memos](https://usememos.com/) - SQLiteデータベースファイルを使用した知識ベース。（[Demo](https://demo.usememos.com/explore), [Source Code](https://github.com/usememos/memos)） `MIT` `Docker/Go`
- [Note Mark](https://notemark.docs.enchantedcode.co.uk/) - 最小限のウェブベースのマークダウンノートアプリ。（[Source Code](https://github.com/enchant97/note-mark)） `AGPL-3.0` `Docker`
- [Overleaf](https://www.overleaf.com/) - ウェブベースのコラボレーションLaTeXエディタ。（[Source Code](https://github.com/overleaf/overleaf)） `AGPL-3.0` `Ruby`
- [Plainpad](https://alextselegidis.com/get/plainpad/) - クラウド向けの現代的なノートアプリで、プログレッシブウェブアプリ技術の最良の機能を活用。（[Demo](https://alextselegidis.com/try/plainpad/), [Source Code](https://github.com/alextselegidis/plainpad)） `GPL-3.0` `PHP`
- [plumio](https://plumio.app/) - ライブプレビュー、ドキュメント暗号化、マルチユーザー対応、マルチ組織機能など、マルチ機能を備えたマークダウンノートアプリ。（[Demo](https://demo.plumio.app/homepage), [Source Code](https://github.com/albertasaftei/plumio)） `AGPL-3.0` `Nodejs/Docker`
- [SilverBullet](https://silverbullet.md/) - ハッカー志向のユーザー向けに最適化されたノートアプリ。（[Demo](https://play.silverbullet.md/), [Source Code](https://github.com/silverbulletmd/silverbullet), [Clients](https://silverbullet.md/Libraries)） `MIT` `Docker/Deno`
- [Standard Notes](https://docs.standardnotes.com/self-hosting/getting-started) - シンプルでプライベートなノートアプリ。プライバシーを守りながら、より多くのことを達成できます。それがStandard Notesです。（[Demo](https://app.standardnotes.com/), [Source Code](https://github.com/standardnotes/app)） `GPL-3.0` `Ruby`
- [TriliumNext Notes](https://github.com/TriliumNext/Trilium) - マルチプラットフォーム対応の階層構造ノートアプリで、個人の知識ベースの構築に重点を置いている（Trilium Notesのフォーク）。（`AGPL-3.0`） `Nodejs/Docker/K8S`
- [Turtl](https://turtl.it/) - 完全にプライベートな個人データベースおよびノートアプリ。（[Source Code](https://github.com/turtl)） `GPL-3.0` `CommonLisp`
- [Writing](https://josephernest.github.io/writing/) - 軽量で分散型のテキストエディタ、ブラウザ上で動作（マークダウンおよびLaTeX対応）。書くときの遅延なし。（[Source Code](https://github.com/josephernest/writing)） `MIT` `Javascript`


### Office Suites

**[`^        back to top        ^`](#awesome-selfhosted)**

アン [office suite](https://en.wikipedia.org/wiki/List_of_office_suites) は、通常、ワードプロセッサ、スプレッドシート、およびプレゼンテーションプログラムを含む生産性ソフトウェアのコレクションである。

- [Collabora Online Development Edition](https://www.collaboraoffice.com/code) - Collabora Online Development Edition（CODE）は、すべての主要なドキュメント、スプレッドシートおよびプレゼンテーションファイル形式をサポートするリブリオフィスベースのオンラインオフィスであり、自社インフラに統合可能です。（[Source Code](https://cgit.freedesktop.org/libreoffice/online/)） `MPL-2.0` `C++`
- [CryptPad](https://cryptpad.org) - 協働を可能にするコラボレーションツールで、ドキュメントの変更をリアルタイムで同期。（[Source Code](https://github.com/cryptpad/cryptpad)） `AGPL-3.0` `Nodejs/Docker`
- [Digislides](https://ladigitale.dev/digislides/) - 簡単かつ迅速にマルチメディアプレゼンテーションを作成できます。（フランス語のドキュメントあり）。（[Demo](https://ladigitale.dev/digislides/), [Source Code](https://codeberg.org/ladigitale/Digislides)） `AGPL-3.0` `Nodejs/PHP`
- [Etherpad](https://etherpad.org/) - 高度にカスタマイズ可能なオンラインエディタで、リアルタイムでの協働編集を提供。（[Demo](https://demo.sandstorm.io/appdemo/h37dm17aa89yrd8zuqpdn36p6zntumtv08fjpu8a8zrte7q1cn60), [Source Code](https://github.com/ether/etherpad)） `Apache-2.0` `Nodejs/Docker`
- [Grist](https://getgrist.com/) - 次世代スプレッドシートで、関係構造、式ベースのアクセス制御、そしてポータブルかつ自立したフォーマットを備えている（Airtableの代替）。（[Demo](https://docs.getgrist.com), [Source Code](https://github.com/gristlabs/grist-core)） `Apache-2.0` `Nodejs/Python/Docker`
- [ONLYOFFICE](https://helpcenter.onlyoffice.com/faq/server-opensource.aspx) - ドキュメント、プロジェクト、チーム、顧客関係をすべて1か所で管理できるオフィスツール。（[Source Code](https://github.com/ONLYOFFICE/DocumentServer)） `AGPL-3.0` `Nodejs/Docker`


### Password Managers

**[`^        back to top        ^`](#awesome-selfhosted)**

A [password manager](https://en.wikipedia.org/wiki/Password_manager) は、ローカルアプリケーションおよびオンラインサービスのパスワードを保存・生成・管理するためのユーザーに提供するものである。

- [AliasVault](https://www.aliasvault.net) - 端末から端末まで暗号化されたパスワードマネージャーで、内蔵されたメールアリア生成機能とサーバーを備えている。([Source Code](https://github.com/aliasvault/aliasvault)) `MIT` `Docker`
- [Bitwarden](https://bitwarden.com/) `⚠` - ワイブアプリ、ブラウザ拡張機能、モバイルアプリを備えたパスワードマネージャー。([Source Code](https://github.com/bitwarden/server)) `AGPL-3.0` `Docker/C#`
- [Passbolt](https://www.passbolt.com/) - 協働型パスワードマネージャー。([Source Code](https://github.com/passbolt/passbolt_api)) `AGPL-3.0` `PHP/deb/K8S/Docker`
- [PassIt](https://passit.io/) - グループおよびユーザーによる共有機能を備えたシンプルなパスワードマネージャーだが、管理インターフェースは存在しない。([Demo](https://app.passit.io/), [Source Code](https://gitlab.com/passit)) `AGPL-3.0` `Docker/Python`
- [Psono](https://psono.com/) - 企業向けのパスワードマネージャー。([Demo](https://www.psono.pw), [Source Code](https://gitlab.com/esaqa/psono/psono-fileserver)) `Apache-2.0` `Python`
- [Teampass](https://teampass.net/) - 協働型パスワード管理を専門とするパスワードマネージャー。すべての共有／チームパスワードは、1つの対称鍵で暗号化され、サーバー側にファイルおよびデータベースに保存される。Apache、MySQL、PHPに対応。 ([Source Code](https://github.com/nilsteampassnet/TeamPass)) `GPL-3.0` `PHP`
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Rustで書かれた軽量なBitwardenサーバーAPI実装。`GPL-3.0` `Rust/Docker`


### Pastebins

**[`^        back to top        ^`](#awesome-selfhosted)**

A [pastebin](https://en.wikipedia.org/wiki/Pastebin) は、コードとテキストの共有および保存に使用されるオンラインコンテンツホスティングサービスである。

- [1time](https://1time.io) - ゼロ知識のワンタイムシーング。パスワード、APIキー、またはファイルに対して一時的なリンクを作成。ブラウザ上で暗号化され、サーバーに明文として到達しない。許容された閲覧回数（デフォルトは1回）を超えると自動的に削除される。([Demo](https://1time.io), [Source Code](https://github.com/shingrus/1time.io)) `MIT` `Docker`
- [BinPastes](https://github.com/querwurzel/BinPastes) - クライアントサイド暗号化、全文検索、一時メッセージをサポートする極めてシンプルなpastebin。1〜数人のユーザーがシンプルなpastebinのデプロイを求める場合に適している。`Apache-2.0` `Java`
- [ByteStash](https://github.com/jordan-dalby/ByteStash) - シンプルなウェブインターフェースを備えたpastebinおよびファイルストレージサービス。シンタックスハイライト、オプションのユーザー認証、公開共有をサポート。([Demo](https://github.com/jordan-dalby/ByteStash?tab=readme-ov-file#demo)) `GPL-3.0` `Docker`
- [Chiyogami](https://github.com/rhee876527/chiyogami) - API、クライアントサイド暗号化、ユーザーアカウント、シンタックスハイライト、マーカーレンダリングなど、機能が豊富なpastebin。([Demo](https://chiyogami.myaddr.dev/)) `BSD-3-Clause` `Docker`
- [dpaste](https://dpaste.org/) - 複数のテキストおよびコードオプションを備えたシンプルなpastebin。短いURL結果が覚えやすい。([Source Code](https://github.com/DarrenOfficial/dpaste)) `MIT` `Docker/Python`
- [Hemmelig](https://hemmelig.app) - 異なる組織間または個人間で暗号化された秘密を共有できる。([Source Code](https://github.com/HemmeligOrg/Hemmelig.app)) `MIT` `Docker/Nodejs`
- [lesma](https://lesma.eu) - ブラウザおよびコマンドラインに親しみやすいシンプルなペーストアプリ。([Demo](https://lesma.eu), [Source Code](https://gitlab.com/ogarcia/lesma)) `GPL-3.0` `Rust/Docker`
- [Local Content Share](https://github.com/Tanq16/local-content-share) - ローカルネットワーク内でテキストスニペットやファイルを保存・共有できる。(`MIT` `Docker/Go`)
- [not-th.re](https://not-th.re) - クライアントサイド暗号化を備えたシンプルなペースト共有プラットフォーム。モンアコのブラウザベースコードエディタを備える。([Demo](https://not-th.re), [Source Code](https://github.com/not-three/main)) `AGPL-3.0` `Nodejs/Docker`
- [Opengist](https://opengist.io) - Gitを活用したpastebin。([Demo](https://demo.opengist.io), [Source Code](https://github.com/thomiceli/opengist)) `AGPL-3.0` `Docker/Go/Nodejs`
- [paaster](https://paaster.io) - シンプルさを目的とした端末から端末まで暗号化されたpastebin。([Source Code](https://github.com/WardPearce/paaster)) `AGPL-3.0` `Docker`
- [pacebin](https://git.crueter.xyz/crueter/pacebin) - 極めてシンプルなpastebinおよびファイルアップロードサービス。実行ファイルサイズが小さく、移植性と設定の容易さに焦点を当てている。([Demo](https://paste.crueter.xyz)) `AGPL-3.0` `C`
- [Password Pusher](https://pwpush.com) - ウェブ上でパスワード（またはテキスト）を安全に共有するための、極めてシンプルなアプリ。パスワードは一定の閲覧回数および/または時間経過後に自動的に期限切れになる。([Source Code](https://github.com/pglombardo/PasswordPusher)) `Apache-2.0` `Docker/K8S/Ruby`
- [Pastefy](https://pastefy.app/) - 美しい、シンプルで展開しやすいPastebin。オプションのクライアント暗号化、マルチタブペースト、API、ハイライトされたエディタなどがあります。([Source Code](https://github.com/interaapps/pastefy), [Clients](https://github.com/topics/pastefy-addon)) `MIT` `Docker/K8S/Java`
- [PrivateBin](https://privatebin.info/) - ミニマリズムのPastebin／ディスカッションボードで、サーバーはホストされたデータについての知識を持ちません。([Demo](https://privatebin.net/), [Source Code](https://github.com/PrivateBin/PrivateBin)) `Zlib` `PHP`
- [rustypaste](https://github.com/orhun/rustypaste) - 最小限のファイルアップロード／Pastebinサービス。`MIT` `Rust`
- [Snipo](https://github.com/MohamedElashri/snipo) - 軽量で、セルフホストされたスニペットマネージャー。コードやテキストスニペットをフォルダやタグで保存・整理し、APIおよびGitHub Gistの同期もサポート。([Demo](https://snipo.melashri.dev/)) `AGPL-3.0` `Go/Docker`
- [SnyPy](https://snypy.com) - オープンソースのオンプレミスコードスニペットマネージャー。([Demo](https://app.snypy.com), [Source Code](https://github.com/snypy)) `MIT` `Docker`
- [Sup3rS3cretMes5age](https://github.com/algolia/sup3rS3cretMes5age) - 非常にシンプル（展開および使用に）なシークレットメッセージサービス。Hashicorp Vaultをシークレットストレージとして使用。(`MIT`) `Go`
- [Wastebin](https://github.com/matze/wastebin) - 軽量で、最小限で、高速なPastebin。SQLiteバックエンドを採用。([Demo](https://bin.bloerg.net)) `MIT` `Rust/Docker`
- [Yopass](https://github.com/jhaals/yopass) - シークレット、パスワード、ファイルの安全な共有。([Demo](https://yopass.se/)) `Apache-2.0` `Go/Docker`


### Personal Dashboards

**[`^        back to top        ^`](#awesome-selfhosted)**

情報およびアプリケーションにアクセスするためのダッシュボード。

_関連： [Monitoring & Status Pages](#monitoring--status-pages), [Bookmarks and Link Sharing](#bookmarks-and-link-sharing)_

- [Dashy](https://dashy.to/) - あなたのホメラブ向けに、YAML設定で簡単に構成できる機能豊かなホームページ。([Demo](https://demo.dashy.to/), [Source Code](https://github.com/lissy93/dashy)) `MIT` `Nodejs/Docker`
- [Glance](https://github.com/glanceapp/glance) - 高度にカスタマイズ可能なダッシュボードで、すべてのフィードを一つの場所に集約。(`AGPL-3.0`) `Docker/Go`
- [gobookmarks](https://github.com/arran4/gobookmarks) - GitHub、GitLabまたはローカルGitに保存されたブックマークを表示するページ。(`AGPL-3.0`) `Go/Docker`
- [Heimdall](https://heimdall.site/) - すべてのウェブアプリケーションを整理するための洗練されたソリューション。([Source Code](https://github.com/linuxserver/Heimdall)) `MIT` `PHP`
- [Homarr](https://homarr.dev) - スリーブで、モダンなダッシュボード。多くの統合とウェブベースの設定を提供。([Source Code](https://github.com/homarr-labs/homarr)) `MIT` `Docker/Nodejs`
- [Homepage by gethomepage](https://github.com/gethomepage/homepage) - 高度にカスタマイズ可能なホームページ（またはスタートページ／アプリケーションダッシュボード）にDockerおよびサービスAPI統合を備えている。(`GPL-3.0`) `Docker/Nodejs`
- [Homepage by tomershvueli](https://github.com/tomershvueli/homepage) - シンプルで、スタンドアローン、セルフホストされたPHPページ。あなたのサーバーとウェブへの窓です。(`MIT`) `PHP`
- [Homer](https://github.com/bastienwirtz/homer) - 非常にシンプルな静的ホームページで、サーバーのサービスを公開。YAML設定と接続チェックが簡単。([Demo](https://homer-demo.netlify.app)) `Apache-2.0` `Docker/K8S/Nodejs`
- [Hubleys](https://github.com/knrdl/hubleys-dashboard) - 複数ユーザー向けのリンクを中央のYAML設定で管理する個人用ダッシュボード。(`MIT`) `Docker`
- [LinkStack](https://linkstack.org/) - ソーシャルメディアプラットフォームを簡単に1ページにリンクし、直感的で使いやすいユーザー／管理者インターフェースでカスタマイズ可能（LinktreeやManylinkの代替）。([Demo](https://linksta.cc/), [Source Code](https://github.com/LinkStackOrg/LinkStack)) `AGPL-3.0` `PHP/Docker`
- [LittleLink](https://littlelink.io/) - バイオに表示するリンクのためのシンプルなアプローチ。100以上のブランドボタンを提供（Linktreeの代替）。([Demo](https://littlelink.io/), [Source Code](https://github.com/sethcottle/littlelink)) `MIT` `Javascript`
- [Mafl](https://mafl.hywax.space/) - ミニマリズムで柔軟なホームページ。([Source Code](https://github.com/hywax/mafl)) `MIT` `Docker/Nodejs`
- [Nimbus](https://nimbus.turboot.com/) - 現代的なドラッグ＆ドロップ方式のホームラボダッシュボードで、視覚的なエディタとシンプルな設定が可能。 ([Demo](https://nimbus.turboot.com/), [Source Code](https://github.com/Turbootzz/Nimbus)) `AGPL-3.0` `Docker`
- [Personal Management System](https://volmarg.github.io/) - 日々の生活に必要な項目を整理できる。シンプルなToDoリストやノートから支払い、スケジュールまで。 ([Demo](https://github.com/Volmarg/personal-management-system#documentation--demo), [Source Code](https://github.com/Volmarg/personal-management-system)) `MIT` `Docker`
- [portkey](https://portkey.page) - シンプルなウェブポータルで、スタートページとして機能し、リンクやURLの集約を表示する一方で、カスタムページの追加も可能。すべてを1つの設定ファイルで管理。 ([Demo](https://demo.portkey.page), [Source Code](https://github.com/kodehat/portkey)) `AGPL-3.0` `Go/Docker`
- [ryot](https://github.com/ignisda/ryot) - あなたの生活のさまざまな側面を追跡できる。メディア、フィットネスなど。 ([Demo](https://github.com/IgnisDa/ryot?tab=readme-ov-file#-demo)) `GPL-3.0` `Docker`
- [Starbase 80](https://github.com/notclickable-jordan/starbase-80) - iPad風アプリケーショングリッドを備えたシンプルなホームページ。モバイルおよびデスクトップ向け。1つのJSON設定ファイル。 `MIT` `Docker`
- [Your Spotify](https://github.com/Yooooomi/your_spotify) `⚠` - スポーツの聴き取り履歴を記録し、ウェブアプリを通じてその統計を提供。 `MIT` `Nodejs/Docker`


### Photo Galleries

**[`^        back to top        ^`](#awesome-selfhosted)**

A [gallery](https://en.wikipedia.org/wiki/Gallery_Software)は、ユーザーが写真、画像、動画またはその他のデジタルメディアを公開または共有するのに役立つソフトウェアです。

_関連： [Static Site Generators](#static-site-generators), [Media Streaming - Video Streaming](#media-streaming---video-streaming), [Content Management Systems (CMS)](#content-management-systems-cms)_

- [Chevereto](https://chevereto.com/) - 最高の画像共有ソフトウェア。数分で独自の個人用画像ホスティングサイトを作成可能。 ([Source Code](https://github.com/chevereto/chevereto)) `AGPL-3.0` `PHP/Docker`
- [ChronoFrame](https://chronoframe.bh8.ga/) - オンラインフォト管理をサポートし、ライブ／モーションフォトやマップ探索を可能にする個人用ギャラリーアプリ。 ([Demo](https://lens.bh8.ga/), [Source Code](https://github.com/HoshinoSuzumi/chronoframe)) `MIT` `Nodejs/Docker`
- [Damselfly](https://damselfly.info) - 大量の画像コレクションを管理する高速サーバーベースのフォト管理システム。顔検出、顔・物体認識、強力な検索、EXIFキーワードタグ付けを備えている。Linux、MacOS、Windowsで動作。 ([Source Code](https://github.com/webreaper/damselfly)) `GPL-3.0` `Docker/C#/.NET`
- [Ente](https://ente.com/) - 端末間で暗号化されたフォト共有プラットフォーム（Google Photos、Apple Photosの代替）。 ([Source Code](https://github.com/ente/ente)) `AGPL-3.0` `Docker/Nodejs/Go`
- [HomeGallery](https://home-gallery.org) - タグ付け、モバイル対応、AIによる画像発見を備えた個人写真・動画の閲覧。 ([Demo](https://demo.home-gallery.org), [Source Code](https://github.com/xemle/home-gallery)) `MIT` `Nodejs/Docker`
- [Immich Kiosk](https://github.com/damongolding/immich-kiosk) - キオスクデバイスやブラウザで動作する軽量スライドショー。データソースとしてImmichを使用。 `GPL-3.0` `Docker/Go`
- [Immich](https://immich.app/) - モバイル電話から直接写真・動画をバックアップできるソリューション（Google Photosの代替）。 ([Demo](https://github.com/immich-app/immich#demo), [Source Code](https://github.com/immich-app/immich)) `AGPL-3.0` `Docker`
- [LibrePhotos](https://github.com/LibrePhotos/librephotos) - グラフに注目したフォト管理サービス（Google Photosの代替）。 ([Clients](https://docs.librephotos.com/docs/user-guide/mobile/)) `MIT` `Python/Docker`
- [Lychee](https://lycheeorg.github.io/) - グリッドとアルバムベースのフォト管理システム。 ([Source Code](https://github.com/LycheeOrg/Lychee)) `MIT` `PHP/Docker`
- [Mediagoblin](https://mediagoblin.org) - 誰でも運営できるメディア配信プラットフォーム（Flickr、YouTube、SoundCloudの代替）。 ([Source Code](https://git.savannah.gnu.org/cgit/mediagoblin.git/tree/)) `AGPL-3.0` `Python`
- [Memtly](https://docs.memtly.com/) - イベント用のフォト共有プラットフォームとギャラリーで、スライドショーを提供し、ゲストがQRコードを介して記憶を閲覧・共有できる。 ([Demo](https://demo.memtly.com/), [Source Code](https://github.com/Memtly/Memtly.Community)) `GPL-3.0` `C#/Docker`
- [Nextcloud Memories](https://memories.gallery/) - 高速で現代的かつ高度なフォト管理ツールセット。Nextcloudアプリとして動作。 ([Demo](https://demo.memories.gallery/apps/memories/), [Source Code](https://github.com/pulsejet/memories)) `AGPL-3.0` `PHP`
- [Photofield](https://github.com/SmilyOrg/photofield) - 実験的な高速フォトビューア。 `MIT` `Docker/Go`
- [PhotoPrism](https://photoprism.org) - GoとGoogle TensorFlowを活用した個人用フォト管理。写真の閲覧、整理、共有を可能にし、最新技術により自動タグ付けと画像検索を実現。 ([Demo](https://demo.photoprism.app/library/browse), [Source Code](https://github.com/photoprism/photoprism)) `AGPL-3.0` `Go/Docker`
- [Photoview](https://photoview.github.io/) - シンプルで使いやすい個人サーバー向けフォトギャラリー。写真家向けに作られ、ディレクトリを簡単に高速にナビゲートできるように設計されています。数千の高解像度写真を提供します。（[Demo](https://photoview.github.io/)，[Source Code](https://github.com/photoview/photoview)）`GPL-3.0` `Go/Docker`
- [PiGallery 2](https://bpatrik.github.io/pigallery2/) - ディレクトリ中心のフォトギャラリーウェブサイトで、豊かなUIを備え、リソースの少ないサーバー上で動作を最適化しています。（[Source Code](https://github.com/bpatrik/pigallery2)）`MIT` `Docker/Nodejs`
- [Piwigo](https://piwigo.org/) - ウェブ向けフォトギャラリーソフトウェアで、ユーザーと開発者の活発なコミュニティによって構築されています。（[Source Code](https://github.com/Piwigo/Piwigo)）`GPL-2.0` `PHP`
- [sigal](https://github.com/saimn/sigal) - もう一つのシンプルな静的ギャラリー生成器。`MIT` `Python`
- [SPIS](https://github.com/gbbirkisson/spis) - シンプルで軽量かつ高速なメディアサーバーで、モバイル対応も良好です。`GPL-3.0` `Docker/Rust`
- [This week in past](https://github.com/RouHim/this-week-in-past) - 今週撮影された画像を過去の年分から集約し、シンプルなスライドショーでウェブページに表示します。`MIT` `Docker/Rust`
- [Thumbor](http://thumbor.org/) - スマートな画像サービスで、オンデマンドでの切り取り、サイズ調整、フィルターの適用、画像の最適化を可能にします。（[Source Code](https://github.com/thumbor/thumbor)）`MIT` `Python/Docker`
- [Zenphoto](https://www.zenphoto.org/) - オープンソースのギャラリーおよびCMSプロジェクト。（[Source Code](https://github.com/zenphoto/zenphoto)）`GPL-2.0` `PHP`


### Polls and Events

**[`^        back to top        ^`](#awesome-selfhosted)**

[polls](https://en.wikipedia.org/wiki/Opinion_poll) と [events](https://en.wikipedia.org/wiki/Event) を整理するためのソフトウェア。

関連情報: [Booking and Scheduling](#booking-and-scheduling)

- [Bitpoll](https://github.com/fsinfuhh/Bitpoll) - 日付、時間、一般質問などについてのアンケートを実施します。（[Demo](https://bitpoll.de/)）`GPL-3.0` `Docker/Python`
- [Bracket](https://docs.bracketapp.nl/) - 柔軟なトーナメントシステムで、トーナメントの構築、チームの追加、試合スケジュールの設定、スコアの記録、そして公開にリアルタイムでランキングを表示できます。（[Demo](https://www.bracketapp.nl/demo)，[Source Code](https://github.com/evroon/bracket)）`AGPL-3.0` `Docker/Nodejs`
- [Christmas Community](https://github.com/Wingysam/Christmas-Community) - 家族全員が使えるシンプルな場所を作成し、人々が欲しいギフトを発見し、重複贈呈を避けることができます。`AGPL-3.0` `Docker/Nodejs`
- [Claper](https://claper.co/) - オーディエンスと対話するための包括的なツール（Slido、AhaSlides、Mentimeterの代替）。（[Source Code](https://github.com/ClaperCo/Claper)）`GPL-3.0` `Elixir/Docker`
- [ClearFlask](https://clearflask.com) - インコムフィードバックの管理と公開ルートの優先順位付けを行うためのコミュニティフィードバックツール（Canny、UserVoice、Upvotyの代替）。（[Demo](https://product.clearflask.com)，[Source Code](https://github.com/clearflask/clearflask)）`AGPL-3.0` `Docker`
- [docassemble](https://docassemble.org/) - Python、YAML、Markdownに基づく無料のオープンソースエキスパートシステム。ガイド付きインタビューおよび文書作成に使用します。（[Demo](https://demo.docassemble.org/run/legal)，[Source Code](https://github.com/jhpyle/docassemble)）`MIT` `Docker/Python`
- [EventSchedule](https://eventschedule.com/) - イベントを共有し、チケット販売を行い、コミュニティを結びつけていきます。（[Source Code](https://github.com/eventschedule/eventschedule)）`AAL` `PHP/Docker`
- [Fider](https://fider.io) - フィードバックを収集し、優先順位付けするためのオープンプラットフォーム（UserVoiceの代替）。（[Demo](https://demo.fider.io)，[Source Code](https://github.com/getfider/fider)）`MIT` `Docker`
- [Formbricks](https://formbricks.com) - 世界で最も大きなオープンソースアンケートスタックに基づいた経験管理ソリューション。顧客の旅の各ステップでフィードバックを丁寧に収集し、お客様が何が必要かを知ることができます。（[Demo](https://app.formbricks.com)，[Source Code](https://github.com/formbricks/formbricks)）`AGPL-3.0` `Nodejs/Docker`
- [Framadate](https://framadate.org/abc/) - 会議の予約や迅速かつ簡単に意思決定を行うためのオンラインサービス：アンケートを作成し、日付やテーマを設定し、友人や同僚にアンケートリンクを送り、議論を行い、決定を下します。（[Demo](https://framadate.org/aqg259dth55iuhwm)，[Source Code](https://framagit.org/framasoft/framadate?)）`CECILL-B` `PHP`
- [Gancio](https://gancio.org/) - 地域コミュニティのイベントおよびスケジュールの共有。（[Demo](https://demo.gancio.org/)，[Source Code](https://framagit.org/les/gancio)）`AGPL-3.0` `Nodejs`
- [gathio](https://docs.gath.io/) - 自動消滅し、登録不要で共有可能なイベントページ。（[Demo](https://gath.io/)，[Source Code](https://github.com/lowercasename/gathio)）`GPL-3.0` `Nodejs/Docker`
- [HeyForm](https://heyform.net) - フォームビルダーで、誰でもアンケート、質問票、クイズ、ポールに向けた魅力的な会話型フォームを作成できます。([Source Code](https://github.com/heyform/heyform)) `AGPL-3.0` `Docker`
- [hitobito](https://hitobito.com) - メンバー、イベントなど複雑なグループ階層を管理できます。([Demo](https://demo.hitobito.com/en/users/sign_in), [Source Code](https://github.com/hitobito/hitobito)) `AGPL-3.0` `Ruby`
- [LimeSurvey](https://www.limesurvey.org) - 機能豊かなウェブベースのポールソフトウェア。広範なアンケート論理をサポートしています。([Demo](https://demo.limesurvey.org), [Source Code](https://github.com/LimeSurvey/LimeSurvey)) `GPL-2.0` `PHP`
- [Meetable](https://events.indieweb.org) - 最小限のイベントアグレゲーター。([Source Code](https://github.com/aaronpk/Meetable)) `MIT` `PHP`
- [Mobilizon](https://mobilizon.org) - イベントやグループの検索・作成・整理を支援する連携ツール。([Source Code](https://framagit.org/framasoft/mobilizon/)) `AGPL-3.0` `Elixir/Docker`
- [OpnForm](https://opnform.com) - 美しいオープンソースフォームビルダー。([Demo](https://opnform.com/forms/create/guest), [Source Code](https://github.com/OpnForm/OpnForm)) `AGPL-3.0` `PHP/Nodejs/Docker`
- [Revel](https://www.letsrevel.io) `⚠` - コミュニティ中心のイベント管理およびチケット販売プラットフォーム。([Demo](https://demo.letsrevel.io), [Source Code](https://github.com/letsrevel/revel-backend), [Clients](https://github.com/letsrevel)) `MIT` `Python/Docker`


### Proxy

**[`^        back to top        ^`](#awesome-selfhosted)**

A [proxy](https://en.wikipedia.org/wiki/Proxy_server) は、リソースを要求するクライアントとそのリソースを提供するサーバーの間を中間として機能するサーバーアプリケーションです。このセクションは、前方（つまり外部）プロキシについて述べています。逆プロキシについては、Web サーバーのセクションを参照してください。

関連情報: [Web Servers](#web-servers)

- [g3proxy](https://g3-project.readthedocs.io/projects/g3proxy/en/latest/) - プロキシサーバーで、プロキシチェイン、プロトコル検査、MITMインターセプション、ICAPアダプテーション、透明プロキシをサポートしています。([Source Code](https://github.com/bytedance/g3/tree/master/g3proxy)) `Apache-2.0` `Rust/deb`
- [GitProxy](https://git-proxy.finos.org/) - Git用プロキシで、すべての送出git push操作にルールとワークフローを適用し、そのコンプライアンスを確保します。HTTP/HTTPSおよびSSHプロトコルをサポートし、セキュリティスキャンと検証を実行します。([Source Code](https://github.com/finos/git-proxy)) `Apache-2.0` `Nodejs/Docker`
- [imgproxy](https://imgproxy.net/) - リモート画像のサイズ変更および変換に用いる高速かつ安全なスタンドアローンサーバー。([Source Code](https://github.com/imgproxy/imgproxy)) `MIT` `Go/Docker/K8S`
- [iodine](https://code.kryo.se/iodine/) - IPv4をDNSトンネルで実現し、socks5プロキシリスナーを開始できるソリューション。([Source Code](https://github.com/yarrick/iodine)) `ISC` `C/deb`
- [Outline Server](https://getoutline.org/) - アクセスキーごとにShadowsocksインスタンスを実行し、アクセスキーを管理するREST APIを持つプロキシサーバー。([Source Code](https://github.com/OutlineFoundation/outline-server)) `Apache-2.0` `Docker/Nodejs`
- [Privoxy](https://www.privoxy.org) - キャッシュを無効にしたウェブプロキシで、プライバシーの強化、ウェブページデータおよびHTTPヘッダーの変更、アクセス制御、広告およびその他の不快なインターネットコンテンツの削除を可能にします。`GPL-2.0` `C/deb`
- [sish](https://github.com/antoniomika/sish) - HTTP(S)/WS(S)/TCPをSSHのみでローカルホストにトンネル化（serveo/ngrokの代替）。`MIT` `Go/Docker`
- [socks5-proxy-server](https://github.com/nskondratev/socks5-proxy-server) - 認証が内蔵されたSOCKS5プロキシサーバーと、ユーザー管理およびデータ使用量（GBごとに料金を支払う場合など）の統計を管理するTelegramボット。Docker化されており、インストールが簡単です。`Apache-2.0` `Docker`
- [Squid](http://www.squid-cache.org/) - HTTP、HTTPS、FTPをサポートするウェブキャッシュプロキシ。頻繁に要求されるウェブページをキャッシュ・再利用することで、帯域幅の使用を減らし、応答時間を改善します。([Source Code](https://code.launchpad.net/squid)) `GPL-2.0` `C/deb`
- [Tinyproxy](https://tinyproxy.github.io/) - 軽量なHTTP/HTTPSプロキシデーモン。([Source Code](https://github.com/tinyproxy/tinyproxy)) `GPL-2.0` `C/deb`


### Recipe Management

**[`^        back to top        ^`](#awesome-selfhosted)**

ソフトウェアおよびツール　for managing [recipes](https://en.wikipedia.org/wiki/Recipe).

- [Bar Assistant](https://barassistant.app/) - 家庭用バーを管理しながら、材料を追加し、コクティールを検索し、カスタムコクティールレシピを作成できます。([Demo](https://demo.barassistant.app/), [Source Code](https://github.com/karlomikus/bar-assistant)) `MIT` `PHP/Docker`
- [CookCLI](https://cooklang.org) - Cooklangレシピを用いて、食事計画と買い物を自動化するコマンドラインツール。UNIXワークフローにスクリプト可能で、ウェブサーバーを含みます。([Source Code](https://github.com/cooklang/CookCLI)) `MIT` `Rust`
- [Fork Recipes](https://mikebgrep.github.io/forkapi/latest/clients/) - 料理レシピをシンプルに管理できます。([Source Code](https://github.com/mikebgrep/fork.recipes)) `BSD-3-Clause` `Docker`
- [ManageMeals](https://managemeals.com/) - レシピの管理、URLからレシピをインポートし、広告や不要なテキストなしで整理できます。（[Demo](https://demo.managemeals.com/), [Source Code](https://github.com/managemeals/manage-meals-web)） `GPL-3.0` `Docker`
- [Mealie](https://nightly.mealie.io/) - マテリアルデザインを採用したレシピマネージャー。カテゴリとタグの管理、買い物リスト、メニュー計画、サイトカスタマイズが可能。Mealieは、家族全員がアプリを使用しやすいように、シンプルなユーザーインタラクションを重視しています。（[Demo](https://demo.mealie.io), [Source Code](https://github.com/mealie-recipes/mealie)） `MIT` `Python`
- [RecipeSage](https://github.com/julianpoy/recipesage) - URLから直接レシピをインポートできるレシピ保管アプリ、メニュー計画管理、買い物リスト管理。（[Demo](https://recipesage.com)） `AGPL-3.0` `Nodejs`
- [Recipya](https://recipes.musicavis.ca) - シンプルで洗練されたレシピマネージャー。家族全員が楽しめるよう設計されています。（[Demo](https://recipes.musicavis.ca/guide/login), [Source Code](https://github.com/reaper47/recipya)） `GPL-3.0` `Docker/Go`
- [Tamari](https://tamariapp.com) - 内蔵レシピコレクションを備えたレシピマネージャーWebアプリ。お気に入りやカテゴリで整理し、買い物リストを作成し、メニューを計画できます。（[Demo](https://app.tamariapp.com), [Source Code](https://github.com/alexbates/Tamari)） `GPL-3.0` `Docker/Python`
- [Vanilla Cookbook](https://vanilla-cookbook.readthedocs.io/en/) - 内部で複雑な構造を採用しながらも、ユーザー体験をシンプルで自然な状態に保つレシピマネージャー。（[Source Code](https://github.com/jt196/vanilla-cookbook)） `GPL-3.0` `Docker/Nodejs`
- [What To Cook?](https://github.com/kassner/whattocook) - 家にある食材に基づいて、今日調理できるレシピを提供します。 `AGPL-3.0` `Docker`


### Remote Access

**[`^        back to top        ^`](#awesome-selfhosted)**

[Remote desktop](https://en.wikipedia.org/wiki/Remote_desktop_software) および [SSH](https://en.wikipedia.org/wiki/Secure_Shell) サーバーと、コンピュータシステムのリモート管理用のウェブインターフェース

- [Cardea](https://github.com/hectorm/cardea) - SSHバスターンサーバーで、アクセス制御、セッション記録、オプションでTPMベースの鍵保護が可能です。 `EUPL-1.2` `Go/Docker`
- [Engity's Bifröst](https://bifroest.engity.org/) - 高度にカスタマイズ可能なSSHサーバー。ユーザーの認証方法に複数の選択肢があり、ユーザーのセッションを実行する場所や方法についても選択可能です。（[Source Code](https://github.com/engity-com/bifroest)） `Apache-2.0` `Go/Docker`
- [Firezone](https://www.firezone.dev/) - WireGuardプロトコルをサポートする安全なリモートアクセスゲートウェイ。WebGUI、1行インストールスクリプト、マルチファクターアUTH（MFA）、SSOを提供しています。（[Source Code](https://github.com/firezone/firezone)） `Apache-2.0` `Elixir/Docker`
- [Guacamole](https://guacamole.apache.org) - VNCやRDPなどの標準プロトコルをサポートするクライアント不要型リモートデスクトップゲートウェイ。（[Source Code](https://github.com/apache/guacamole-server)） `Apache-2.0` `Java/C`
- [MeshCentral](https://meshcentral.com/) - ローカルネットワークまたはインターネット上のどこかのコンピュータをリモートで管理・制御できる、自作のウェブサーバーを実行できます。（[Source Code](https://github.com/Ylianst/MeshCentral)） `Apache-2.0` `Nodejs`
- [ShellHub](https://www.shellhub.io) - コマンドライン（任意のSSHクライアント）またはウェブベースのユーザーインターフェース（sshdへの代替）でLinuxデバイスにリモートアクセスできる現代的なSSHサーバー。（[Source Code](https://github.com/shellhub-io/shellhub)） `Apache-2.0` `Docker`
- [Sshwifty](https://github.com/nirui/sshwifty) - Sshwiftyはウェブ向けに開発されたSSHおよびTelnetコンネクタです。（[Demo](https://sshwifty-demo.nirui.org)） `AGPL-3.0` `Go/Docker`
- [Termix](https://docs.termix.site/) - クライアント不要のウェブベースサーバー管理プラットフォーム。SSHターミナル、トンネリング、ファイル編集機能を備えています。（[Source Code](https://github.com/Termix-SSH/Termix)） `Apache-2.0` `Docker`
- [Warpgate](https://github.com/warp-tech/warpgate) - 完全に透明なSSH、HTTPS、Kubernetes、MySQLおよびPostgresのバスターン/PAM。追加のクライアントソフトウェアを必要としません。 `Apache-2.0` `Rust/Docker`


### Resource Planning

**[`^        back to top        ^`](#awesome-selfhosted)**

[resource and supply planning](https://en.wikipedia.org/wiki/Resource_planning)を支援するソフトウェアとツール、包括して[enterprise resource and supply planning (ERP)](https://en.wikipedia.org/wiki/Enterprise_resource_planning)。

_関連： [Money, Budgeting & Management](#money-budgeting--management), [Inventory Management](#inventory-management)_

- [Dolibarr](https://www.dolibarr.org/) - 企業や財団の活動（連絡先、サプライヤー、請求書、注文、在庫、スケジュール、会計など）を管理する現代的なCRMソフトウェアパッケージ。（[Demo](https://www.dolibarr.org/onlinedemo.php), [Source Code](https://github.com/Dolibarr/dolibarr)） `GPL-3.0` `PHP/deb`
- [ERPNext](https://frappe.io/erpnext) - ビジネスを運営するためのERPシステム。（[Source Code](https://github.com/frappe/erpnext)） `GPL-3.0` `Python/Docker`
- [farmOS](https://farmos.org/) - ウェブベースの農場記録アプリケーション。（[Demo](https://farmos-demo.rootedsolutions.io/), [Source Code](https://github.com/farmOS/farmOS)） `GPL-2.0` `PHP/Docker`
- [grocy](https://grocy.info/) - あなたの家に届くERP。買い物と家庭管理ソリューション。（[Demo](https://en.demo.grocy.info/), [Source Code](https://github.com/grocy/grocy)） `MIT` `PHP/Docker`
- [LedgerSMB](https://ledgersmb.org/) - 小規模・中規模企業向けの統合会計およびERPシステム。貸借対照表会計、予算管理、請求書、見積もり、プロジェクト、注文、在庫管理、輸送などに対応。 ([Source Code](https://github.com/ledgersmb/LedgerSMB)) `GPL-2.0` `Docker/Perl`
- [Odoo](https://www.odoo.com) - 無料のオープンソースERPシステム。 ([Demo](https://demo.odoo.com/), [Source Code](https://github.com/odoo/odoo)) `LGPL-3.0` `Python/deb/Docker`
- [OFBiz](https://ofbiz.apache.org/) - 業界に応じて柔軟に利用可能なビジネスアプリケーションを備えた企業資源計画システム。 ([Source Code](https://github.com/apache/ofbiz-framework)) `Apache-2.0` `Java`
- [Tryton](https://www.tryton.org/) - 無料のオープンソースビジネスソリューション。 ([Demo](https://www.tryton.org/demo), [Source Code](https://foss.heptapod.net/tryton/tryton)) `GPL-3.0` `Python`


### Search Engines

**[`^        back to top        ^`](#awesome-selfhosted)**

A [search engine](https://en.wikipedia.org/wiki/Search_engine_(computing))は、コンピュータシステムに保存された情報を検索するため設計された [information retrieval system](https://en.wikipedia.org/wiki/Information_retrieval) です。これには [Web search engines](https://en.wikipedia.org/wiki/Web_search_engine) が含まれます。

- [Aleph](https://aleph.occrp.org/) - 大量のドキュメント（PDF、Word、HTML）および構造化データ（CSV、XLS、SQL）をインデックスし、簡単に閲覧・検索できるツール。調査報告の用途を主眼に構築されている。 ([Demo](https://aleph.occrp.org/), [Source Code](https://github.com/alephdata/aleph)) `MIT` `Docker/K8S`
- [Amgix](https://amgix.io) - 柔軟な展開と現実の雑なデータに対応したオープンソースハイブリッド検索エンジン。 ([Demo](https://findgovdata.org), [Source Code](https://github.com/amgix/amgix-server), [Clients](https://github.com/orgs/amgix/repositories)) `AGPL-3.0` `Docker/K8S`
- [Apache Solr](https://lucene.apache.org/solr/) - 全文検索、ヒットハイライト、フィーチャド検索、リアルタイムインデックス、動的クラスタリング、豊かなドキュメント（例：Word、PDF）の処理を備えた企業向け検索プラットフォーム。 ([Source Code](https://github.com/apache/solr)) `Apache-2.0` `Java/Docker/K8S`
- [Fess](https://fess.codelibs.org/) - 強力で簡単に展開できる企業検索サーバー。 ([Demo](https://search.n2sm.co.jp/), [Source Code](https://github.com/codelibs/fess)) `Apache-2.0` `Java/Docker`
- [Hister](https://hister.org/) - 訪問したウェブサイトを自動インデックスする個人用ウェブ検索エンジン。オフラインでのローカル結果プレビュー、ローカルファイル、マルチユーザー対応、オプションの意味論的検索をサポート。 ([Demo](https://demo.hister.org/), [Source Code](https://github.com/asciimoo/hister)) `AGPL-3.0` `Go/Docker`
- [Manticore Search](https://github.com/manticoresoftware/manticoresearch/) - 全文検索およびデータ分析を提供し、小規模・中規模・大規模データに対しても高速応答（Elasticsearchの代替）。 `GPL-3.0` `Docker/deb/C++/K8S`
- [MeiliSearch](https://www.meilisearch.com) - 極めて関連性の高い、即時かつ誤字許容の全文検索API。 ([Source Code](https://github.com/meilisearch/MeiliSearch)) `MIT` `Rust/Docker/deb`
- [Meme Search](https://github.com/neonwatty/meme-search) - AIを活用したムービー検索エンジン。画像から視覚・言語モデルを用いて説明文を自動抽出し、ベクトル埋め込みでインデックス化して意味論的およびキーワード検索を可能にする。 `Apache-2.0` `Docker`
- [OpenSearch](https://opensearch.org) - 分散型かつRESTベースの検索エンジン。 ([Source Code](https://github.com/opensearch-project/OpenSearch)) `Apache-2.0` `Java/Docker/K8S/deb`
- [SearXNG](https://docs.searxng.org/) `⚠` - 複数の検索サービスおよびデータベースからの結果を集約するインターネットメタ検索エンジン（Searxのフォーク）。 ([Source Code](https://github.com/searxng/searxng/)) `AGPL-3.0` `Python/Docker`
- [Sosse](https://sosse.readthedocs.io/en/stable/) - Seleniumベースの検索エンジンおよびクロールツールに加え、オフラインアーカイブ機能を備えたもの。 ([Source Code](https://gitlab.com/biolds1/sosse)) `AGPL-3.0` `Python/Docker`
- [Typesense](https://typesense.org) - 極めて高速で誤字許容のオープンソース検索エンジン。開発者の満足度と使いやすさを最優先に設計されている。 ([Source Code](https://github.com/typesense/typesense)) `GPL-3.0` `C++/Docker/K8S/deb`
- [Websurfx](https://github.com/neon-mmd/websurfx) `⚠` - 他の検索エンジンからの結果を集約（メタ検索エンジン）を行うが、広告なしでプライバシーとセキュリティを意識。非常に高速であり、高度なカスタマイズを提供（SearXの代替）。 `AGPL-3.0` `Rust/Docker`
- [Yacy](https://yacy.net/en/index.html) - ピアベースの分散型検索エンジンサーバー。 ([Source Code](https://github.com/yacy/yacy_search_server)) `GPL-2.0` `Java/Docker/K8S`
- [ZincSearch](https://zincsearch.com) - 最小限のリソースを必要とする検索エンジン（Elasticsearchの代替）。 ([Demo](https://github.com/zinclabs/zinc#playground-server), [Source Code](https://github.com/zincsearch/zincsearch)) `Apache-2.0` `Go/Docker/K8S`


### Self-hosting Solutions

**[`^        back to top        ^`](#awesome-selfhosted)**

セルフホストサービスおよびアプリケーションの簡単なインストール、管理および設定用ソフトウェア。

- [DietPi](https://dietpi.com/) - 最小限のDebian OSで、シングルボードコンピュータ向けに最適化されたOS。自宅でのセルフホスティングに複数サービスのインストール・管理を容易に可能にする。 ([Source Code](https://github.com/MichaIng/DietPi)) `GPL-2.0` `Shell`
- [DockSTARTer](https://dockstarter.com/) - DockSTARTerは、Dockerで動作するホームサーバーアプリケーションを開始するのに役立ちます。([Source Code](https://github.com/GhostWriters/DockSTARTer)) `MIT` `Shell`
- [Dropserver](https://dropserver.org) - あなたの個人ウェブサービス向けのアプリケーションプラットフォームです。([Source Code](https://github.com/teleclimber/Dropserver/)) `Apache-2.0` `Go/Deno`
- [FreedomBox](https://freedombox.org/) - プライベートで個人的な通信を目的とした、フリーソフトウェアで構成された個人サーバーを開発・設計・推進するコミュニティプロジェクトです。([Source Code](https://salsa.debian.org/freedombox-team/freedombox)) `AGPL-3.0` `Python/deb`
- [HomelabOS](https://homelabos.com) - オフラインでプライバシーを重視したデータセンター。数行のコマンドで100以上のサービスをデプロイできます。([Source Code](https://gitlab.com/NickBusey/HomelabOS)) `MIT` `Docker`
- [HomeServerHQ](https://www.homeserverhq.com/) - すべての機能を内包したホームサーバーインフラとインストーラー。CGNATの後ろでも、1時間以内に完全に設定されたメールサーバー、VPN、公開ウェブサイトなどを構築できます。([Source Code](https://github.com/homeserverhq/hshq)) `GPL-3.0` `Shell`
- [LibreServer](https://libreserver.org/) - Debianベースのホームサーバー構成です。([Source Code](https://github.com/bashrc2/libreserver)) `AGPL-3.0` `Shell`
- [NextCloudPi](https://github.com/nextcloud/nextcloudpi) - Nextcloudが事前インストール・事前設定されており、テキストおよびウェブ管理インターフェースを備え、プライベートデータを自前でホストするためのすべてのツールが備わっています。Raspberry Pi、Odroid、Rock64、Docker、Armbian/Debian向けのcurlインストーラーを含むインストールイメージも提供されています。`GPL-2.0` `Shell/PHP`
- [Nirvati](https://nirvati.org) - 便利なウェブインターフェースから、1クリックで人気のある自前ホストアプリを簡単に立ち上げられます。([Source Code](https://gitlab.com/nirvati-ug/nirvati/backend)) `AGPL-3.0` `Rust/K8S`
- [OpenMediaVault](https://www.openmediavault.org/) - Debian Linuxに基づくネットワークアタッチドストレージ（NAS）ソリューション。SSH、(S)FTP、SMB/CIFS、DAAPメディアサーバー、RSync、BitTorrentクライアントなど、多くのサービスを内蔵しています。([Source Code](https://github.com/openmediavault/openmediavault)) `GPL-3.0` `PHP`
- [Sandstorm](https://sandstorm.io/) - 自前ホストアプリを簡単に安全に実行できる個人サーバーです。([Demo](https://demo.sandstorm.io/), [Source Code](https://github.com/sandstorm-io/sandstorm)) `Apache-2.0` `C++/Shell`
- [Self Host Blocks](https://github.com/ibizaman/selfhostblocks) `⚠` - NixOSモジュールに基づくモジュラーシステム管理で、ベストプラクティスに焦点を当てています。`AGPL-3.0` `Nix`
- [StartOS](https://start9.com) - ブラウザベースのグラフィカルオペレーティングシステム（OS）で、個人サーバーの運用を個人コンピュータの運用と同様に簡単に行えます。([Source Code](https://github.com/Start9Labs/start-technologies)) `MIT` `Rust`
- [Syncloud](https://syncloud.org/) - あなたの独自のオンラインファイルストレージ、ソーシャルネットワーク、またはメールサーバーです。([Source Code](https://github.com/syncloud/platform)) `GPL-3.0` `Go/Shell`
- [Tipi](https://runtipi.io/) - Homeserverマネージャー。1コマンドでセットアップ、1クリックで好きな自前ホストアプリをインストールできます。([Source Code](https://github.com/runtipi/runtipi)) `GPL-3.0` `Shell`
- [UBOS](https://ubos.net/) - インディー機（個人サーバーおよびIoTデバイス）に搭載可能なLinuxディストリビューション。アプリケーション（Jenkins、Mediawiki、Owncloud、WordPressなど）の1コマンドインストールと管理、およびその他の機能を提供します。`GPL-3.0` `Perl`
- [Websoft9](https://www.websoft9.com) `⚠` - GitOpsを駆使した、クラウドサーバーおよびホームサーバー向けのマルチアプリケーションホスティング。200以上のオープンソースアプリのワンクリックデプロイが可能です。([Demo](https://www.websoft9.com/demo), [Source Code](https://github.com/websoft9/websoft9), [Clients](https://www.websoft9.com/apps)) `LGPL-3.0` `Shell/Python`
- [WikiSuite](https://wikisuite.org) - 最も包括的かつ統合されたフリーソフトウェア／リブ・オープンソース企業ソフトウェアセットです。([Source Code](https://wikisuite.org/Source-Code)) `GPL-3.0/LGPL-2.1/Apache-2.0/MPL-2.0/MPL-1.1/MIT/AGPL-3.0` `Shell/Perl/deb`
- [xsrv](https://xsrv.readthedocs.io/) - 自らのサーバー上で、自前ホストサービス／アプリケーションをインストールおよび管理できます。([Source Code](https://github.com/nodiscc/xsrv)) `GPL-3.0` `Ansible/Shell`
- [YunoHost](https://yunohost.org/) - 自前ホストを誰にでもアクセス可能にするためのサーバーOSです。([Demo](https://yunohost.org/#/try), [Source Code](https://github.com/YunoHost)) `AGPL-3.0` `Python/Shell`


### Software Development

**[`^        back to top        ^`](#awesome-selfhosted)**

[Software development](https://en.wikipedia.org/wiki/Software_development)は、アプリケーションやフレームワーク、その他ソフトウェアコンポーネントの開発および維持において関与するコンセプト化、仕様の定義、設計、プログラミング、ドキュメンテーション、テスト、バグ修正のプロセスである。

**お問い合わせは [Software Development - API Management](#software-development---api-management), [Software Development - Continuous Integration & Deployment](#software-development---continuous-integration--deployment), [Software Development - FaaS & Serverless](#software-development---faas--serverless), [Software Development - IDE & Tools](#software-development---ide--tools), [Software Development - Localization](#software-development---localization), [Software Development - Low Code](#software-development---low-code), [Software Development - Project Management](#software-development---project-management), [Software Development - Testing](#software-development---testing), [Software Development - Feature Toggle](#software-development---feature-toggle) までお願いいたします**



### Software Development - API Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[API management](https://en.wikipedia.org/wiki/API_management)は、[application programming interfaces (APIs)](https://en.wikipedia.org/wiki/API)の作成と公開、その使用規則の強化、アクセスの制御、サブスクリプションコミュニティの育成、使用統計の収集と分析、およびパフォーマンスの報告を行うプロセスである。

- [Aastro](https://starwalkn.github.io/aastro-docs) - Goで書かれた拡張可能なAPIゲートウェイです。([Source Code](https://github.com/starwalkn/aastro)) `Apache-2.0` `Go/Docker`
- [DreamFactory](https://www.dreamfactory.com/) - SQL/NoSQL/構造化データをすべてREST APIに変換します。([Source Code](https://github.com/dreamfactorysoftware/dreamfactory)) `Apache-2.0` `PHP/Docker/K8S`
- [form.io](https://form.io) - ドラッグ＆ドロップフォームビルダーを活用したREST API構築プラットフォームで、アプリケーションフレームワークに依存しません。オープンソースおよびエンタープライズ版を提供しています。([Demo](https://portal.form.io), [Source Code](https://github.com/formio)) `MIT` `Nodejs/Docker`
- [Fusio](https://www.fusio-project.org/) - REST APIの構築と管理を支援するオープンソースAPI管理プラットフォーム。([Demo](https://fusio-project.org/demo), [Source Code](https://github.com/apioo/fusio)) `AGPL-3.0` `PHP/Docker`
- [Graphweaver](https://graphweaver.com/) - 複数のデータソースを1つのGraphQL APIに変換します。([Source Code](https://github.com/exogee-technology/graphweaver)) `MIT` `Nodejs`
- [Hasura](https://hasura.io) - Postgresで高速かつリアルタイムのGraphQL APIを提供し、細かいアクセス制御を実現。また、データベースイベント時にウェブホークをトリガーします。([Source Code](https://github.com/hasura/graphql-engine)) `Apache-2.0` `Haskell/Docker/K8S`
- [Hoppscotch Community Edition](https://hoppscotch.io) - 高速で美しいAPIリクエストビルダー。([Source Code](https://github.com/hoppscotch/hoppscotch)) `MIT` `Nodejs/Docker`
- [Kong](https://konghq.com/kong/) - マイクロサービスAPIゲートウェイおよびプラットフォーム。([Source Code](https://github.com/Kong/kong)) `Apache-2.0` `Lua/Docker/K8S/deb`
- [Lura](https://luraproject.org/) - 高性能APIゲートウェイ。([Source Code](https://github.com/luraproject/lura)) `Apache-2.0` `Go`
- [Opik](https://www.comet.com/site/products/opik/) `⚠` - 観測ツールを活用し、LLMアプリケーションの評価・テスト・デプロイを実現。開発および生産ライフサイクルにおける言語モデル出力の調整をサポート。([Source Code](https://github.com/comet-ml/opik)) `Apache-2.0` `Docker/Python`
- [Para](https://paraio.org) - オブジェクトの永続化、API開発および認証に最適な柔軟でモジュラリティの高いバックエンドフレームワーク/サーバー。([Source Code](https://github.com/erudika/para)) `Apache-2.0` `Java/Docker`
- [Svix](https://svix.com) - APIプロバイダーがウェブホークを送信しやすいオープンソースウェブホークサービス。([Source Code](https://github.com/svix/svix-webhooks)) `MIT` `Docker/Rust`
- [Tyk](https://tyk.io) - 高速かつスケーラブルなオープンソースAPIゲートウェイ。Tykは、API管理プラットフォームとして、APIゲートウェイ、APIアナリティクス、開発者ポータル、API管理ダッシュボードを標準で提供しています。([Source Code](https://github.com/TykTechnologies/tyk)) `MPL-2.0` `Go/Docker/K8S`


### Software Development - Continuous Integration & Deployment

**[`^        back to top        ^`](#awesome-selfhosted)**

[Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) および [Continuous deployment](https://en.wikipedia.org/wiki/Continuous_deployment) のソフトウェアとツール。

**お問い合わせはこちらまで [awesome-sysadmin/Continuous Integration & Continuous Deployment](https://github.com/awesome-foss/awesome-sysadmin#continuous-integration--continuous-deployment)**

関連： [Automation](#automation)



### Software Development - FaaS & Serverless

**[`^        back to top        ^`](#awesome-selfhosted)**

[Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing), [Function as a Service (FaaS)](https://en.wikipedia.org/wiki/Function_as_a_service) および [Platform as a Service (Paas)](https://en.wikipedia.org/wiki/Platform_as_a_service) の管理ソフトウェア。

**お問い合わせは [awesome-sysadmin/PaaS](https://github.com/awesome-foss/awesome-sysadmin#paas) までお願いいたします**



### Software Development - Feature Toggle

**[`^        back to top        ^`](#awesome-selfhosted)**

ソフトウェア開発における [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle) は、ソースコードに複数の機能ブランチを維持するのに対し、代替手段を提供する。

関連： [Software Development - IDE & Tools](#software-development---ide--tools)

- [Featbit](https://www.featbit.co/) - セルフホスト可能なエンタープライズクラスの機能フラグプラットフォーム。([Source Code](https://github.com/featbit/featbit)) `MIT` `Docker/K8S`
- [Flagsmith](https://flagsmith.com) - アプリケーションに機能フラグを追加するダッシュボード、API、SDK（LaunchDarklyの代替）。([Source Code](https://github.com/flagsmith/flagsmith)) `BSD-3-Clause` `Docker/K8S`
- [Flipt](https://flipt.io) - 複数のデータバックエンドをサポートする機能フラグソリューション（LaunchDarklyの代替）。([Source Code](https://github.com/flipt-io/flipt)) `GPL-3.0` `Docker/K8S/Go`
- [GO Feature Flag](https://gofeatureflag.org) - シンプルで完全かつ軽量の機能フラグソリューション（LaunchDarklyの代替）。([Source Code](https://github.com/thomaspoignant/go-feature-flag)) `MIT` `Go`


### Software Development - IDE & Tools

**[`^        back to top        ^`](#awesome-selfhosted)**

アン [integrated development environment (IDE)](https://en.wikipedia.org/wiki/Integrated_development_environment) は、ソフトウェア開発に際してコンピュータプログラマに包括的な機能を提供するソフトウェアアプリケーションである。

関連情報: [Software Development - Low Code](#software-development---low-code)

- [Atheos](https://www.atheos.io) - Codiadから継承した、軽量で最小要件のウェブベースIDEフレームワーク。([Source Code](https://github.com/Atheos/Atheos)) `MIT` `PHP/Docker`
- [code-server](https://github.com/coder/code-server) - ブラウザ上で動作するVS Code、リモートサーバーにホストされています。`MIT` `Nodejs/Docker`
- [Coder](https://coder.com/) - 自社インフラにリモート開発マシンを提供します。([Source Code](https://github.com/coder/coder)) `AGPL-3.0` `Go/Docker/K8S/deb`
- [Eclipse Che](https://www.eclipse.org/che/) - オープンソースのワークスペースサーバーおよびクラウドIDE。([Source Code](https://github.com/eclipse-che/che)) `EPL-1.0` `Docker/Java`
- [Hopp](https://gethopp.app) - リモートペアプログラミングアプリ。低遅延4K画面共有、描画、リモートコントロールをサポート。macOSおよびWindows向けクライアントを提供（Tuple、Pop、Drovio、Coscreenの代替）。([Source Code](https://github.com/gethopp/hopp)) `AGPL-3.0` `Docker`
- [Judge0 CE](https://judge0.com) - ソースコードのコンパイルと実行に必要なAPI。([Source Code](https://github.com/judge0/judge0)) `GPL-3.0` `Docker`
- [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/) - インタラクティブかつ再現可能なコンピューティングを可能にするウェブベース環境。([Demo](https://mybinder.org/v2/gh/jupyterlab/jupyterlab-demo/try.jupyter.org?urlpath=lab), [Source Code](https://github.com/jupyterlab/jupyterlab/)) `BSD-3-Clause` `Python/Docker`
- [Langfuse](https://langfuse.com) - LLMエンジニアリングプラットフォーム。モデルトレース、プロンプト管理、アプリケーション評価をサポート。Langfuseは、チャットボットやAIエージェントなどのLLMアプリケーションの共同デバッグ、分析、イテレーションを支援します。([Demo](https://langfuse.com/docs/demo), [Source Code](https://github.com/langfuse/langfuse), [Clients](https://langfuse.com/docs/integrations/overview)) `MIT` `Docker`
- [LiveCodes](https://livecodes.io/docs/features/self-hosting) `⚠` - React、Vue、Svelte、Solid、TypeScript、Python、Go、Ruby、PHPおよび90以上の言語に対応した機能豊富なクライアントサイドコードプレイグラウンド。([Demo](https://livecodes.io), [Source Code](https://github.com/live-codes/livecodes)) `MIT` `Nodejs`
- [Lowdefy](https://www.lowdefy.com/) - YAML／JSONを使用して、自前サーバーを構築したオープンソースプラットフォームで、内部ツール、BIダッシュボード、管理者パネル、CRUDアプリケーションやワークフローを数分で構築。データソースに接続し、Serverless、Netlify、Dockerでホスティング可能。([Source Code](https://github.com/lowdefy/lowdefy)) `Apache-2.0` `Nodejs/Docker`
- [RapidForge](https://rapidforge.io/) - Webhook、スケジュールタスク、ページの構築に適した軽量プラットフォーム。BashまたはLuaでロジックを実装可能。([Source Code](https://github.com/rapidforge-io/rapidforge)) `Apache-2.0` `Go/Nodejs`
- [RStudio Server](https://www.rstudio.com/products/rstudio/#Server) - R用のブラウザベースのIDE。([Source Code](https://github.com/rstudio/rstudio)) `AGPL-3.0` `Java/C++`


### Software Development - Localization

**[`^        back to top        ^`](#awesome-selfhosted)**

[Localization](https://en.wikipedia.org/wiki/Internationalization_and_localization)は、コードおよびソフトウェアを他の言語に適応させるプロセスである。

- [Accent](https://www.accent.reviews/) - 開発者向け翻訳ツール。([Source Code](https://github.com/mirego/accent)) `BSD-3-Clause` `Elixir/Docker`
- [Tolgee](https://tolgee.io) - 開発者および翻訳者に最適なウェブベースローカリゼーションプラットフォーム。開発中のアプリ内で直接翻訳が可能。([Source Code](https://github.com/tolgee/tolgee-platform)) `Apache-2.0` `Docker/Java`
- [Traduora](https://traduora.co) - チーム向けの翻訳管理プラットフォーム。([Source Code](https://github.com/ever-co/ever-traduora)) `AGPL-3.0` `Docker/K8S/Nodejs`
- [Weblate](https://weblate.org) - バージョン管理との連携が密接なウェブベース翻訳ツール。([Source Code](https://github.com/WeblateOrg/weblate)) `GPL-3.0` `Python/Docker/K8S`


### Software Development - Low Code

**[`^        back to top        ^`](#awesome-selfhosted)**

A [low-code](https://en.wikipedia.org/wiki/Low-code_development_platform)開発プラットフォーム（LCDP）は、グラフィカルユーザーインターフェースを用いてアプリケーションソフトウェアを作成するために使用される開発環境を提供する。

関連： [Software Development - IDE & Tools](#software-development---ide--tools)

- [Appsmith](https://www.appsmith.com/) - 管理者パネル、CRUDアプリケーションおよびワークフローの構築。必要なすべてのものを10倍速く構築可能。([Source Code](https://github.com/appsmithorg/appsmith)) `Apache-2.0` `Java/Docker/K8S`
- [Appwrite](https://appwrite.io) - ウェブ、ネイティブ、モバイル開発者向けのエンドツーエンドバックエンドサーバー 🚀。([Source Code](https://github.com/appwrite/appwrite)) `BSD-3-Clause` `Docker`
- [Halo](https://www.halo.run) - 強力で使いやすいウェブサイト構築ツール（中国語ドキュメントあり）。([Demo](https://docs.halo.run/#%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C), [Source Code](https://github.com/halo-dev/halo), [Clients](https://github.com/halo-sigs/awesome-halo)) `GPL-3.0` `Java/Docker`
- [Manifest](https://manifest.build) - 1つのYAMLファイルに収まる完全なバックエンド。([Demo](https://manifest.new), [Source Code](https://github.com/mnfst/manifest)) `MIT` `Nodejs`
- [PocketBase](https://pocketbase.io/) - 次世代SaaSおよびモバイルアプリのバックエンドを1ファイルで構築。([Source Code](https://github.com/pocketbase/pocketbase)) `MIT` `Go/Docker`
- [Saltcorn](https://saltcorn.com/) - ノーコードデータベースアプリケーションビルダー。ウェブおよびモバイルアプリケーション向け。ユーザーインターフェース、データバックエンド、持続可能なワークフロー、メール、PDF生成、AIアプリケーションを1つのプラットフォームで提供。([Source Code](https://github.com/saltcorn/saltcorn)) `MIT` `Docker/Nodejs`
- [SQLPage](https://sql-page.com) - SQLのみの動的ウェブサイトビルダー。([Source Code](https://github.com/sqlpage/SQLPage)) `MIT` `Rust/Docker`
- [ToolJet](https://tooljet.io/) - 最小限のエンジニアリング労力を要する、内部ツールの構築とデプロイに適した低コードフレームワーク（RetoolおよびMendixの代替）。([Source Code](https://github.com/ToolJet/ToolJet)) `GPL-3.0` `Nodejs/Docker/K8S`
- [TrailBase](https://trailbase.io/) - オープン、サブミリ秒、単一実行可能FireBaseの代替品。型安全なRESTおよびリアルタイムAPIを備え、組み込みのJS/TSランタイム、認証および管理UIを提供。 ([Demo](https://demo.trailbase.io), [Source Code](https://github.com/trailbaseio/trailbase)) `OSL-3.0` `Rust/Docker`


### Software Development - Project Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[software project management](https://en.wikipedia.org/wiki/Software_project_management)向けのツールとソフトウェア。

_関連： [Ticketing](#ticketing), [Task Management & To-do Lists](#task-management--to-do-lists)_

- [Cgit](https://git.zx2c4.com/cgit/about/) - Gitリポジトリ向けの高速で軽量なウェブインターフェース。 ([Source Code](https://git.zx2c4.com/cgit/tree/)) `GPL-2.0` `C`
- [Forgejo](https://forgejo.org) - スケーリング、連携、プライバシーに焦点を当てた軽量ソフトウェアフォージ（Giteaのフォーク）。 ([Demo](https://next.forgejo.org), [Source Code](https://codeberg.org/forgejo/forgejo/), [Clients](https://codeberg.org/forgejo-contrib/delightful-forgejo)) `MIT` `Docker/Go`
- [Fossil](https://www.fossil-scm.org/index.html/doc/trunk/www/index.wiki) - Wikiとバグトラッカーを備えた分散型バージョン管理システム。 `BSD-2-Clause-FreeBSD` `C`
- [Gerrit](https://www.gerritcodereview.com/) - Gitベースのプロジェクト向けのコードレビューおよびプロジェクト管理ツール。 ([Source Code](https://github.com/GerritCodeReview/gerrit)) `Apache-2.0` `Java/Docker`
- [gitbucket](https://gitbucket.github.io/) - インストールが簡単、拡張性が高く、GitHub APIと互換性を持つGitプラットフォーム（GitHubの代替）。 ([Source Code](https://github.com/gitbucket/gitbucket)) `Apache-2.0` `Scala/Java`
- [Gitea](https://gitea.com) - Gitにティーカップを！簡単なセルフホスト型のすべてのソフトウェア開発サービス。Gitホスティング、コードレビュー、チーム協働、パッケージレジストリ、CI/CDを含む。 ([Demo](https://demo.gitea.com), [Source Code](https://github.com/go-gitea/gitea)) `MIT` `Go/Docker/K8S`
- [GitLab](https://about.gitlab.com) - セルフホスト型のGitリポジトリ管理、コードレビュー、問題追跡、活動フィード、ウィキ。 ([Demo](https://gitlab.com/), [Source Code](https://gitlab.com/gitlab-org/gitlab-foss)) `MIT` `Ruby/deb/Docker/K8S`
- [Gogs](https://gogs.io/) - Goで書かれた、簡単なセルフホスト型Gitサービス。 ([Source Code](https://github.com/gogs/gogs)) `MIT` `Go`
- [Huly](https://huly.io) - すべての機能を備えたプロジェクト管理プラットフォーム（Linear、Jira、Slack、Notion、Motionの代替）。 ([Demo](https://app.huly.io), [Source Code](https://github.com/hcengineering/platform)) `EPL-2.0` `Docker/K8S/Nodejs`
- [Ideon](https://www.theideon.com) - 無限のキャンバスを中心としたプロジェクトワークスペース。GitHub、GitLab、Gitea、Forgejoのリポジトリを埋め込み、ノート、リンク、タスクとともに、リアルタイム協働を実現。 ([Source Code](https://github.com/3xpyth0n/ideon)) `AGPL-3.0` `Docker`
- [Kaneo](https://kaneo.app/) - シンプルかつ効率的なプロジェクト管理プラットフォーム。 ([Demo](https://demo.kaneo.app/), [Source Code](https://github.com/usekaneo/kaneo)) `MIT` `K8S/Docker`
- [Leantime](https://leantime.io) - 小さなチームやスタートアップ向けの軽量プロジェクト管理システム。アイデアからデリバリーまでプロジェクトを管理する。 ([Source Code](https://github.com/leantime/leantime)) `AGPL-3.0` `PHP/Docker`
- [Mindwendel](https://www.mindwendel.com/) - チーム内でアイデアや考えをブレインストーミングし、投票できる。 ([Demo](https://www.mindwendel.com), [Source Code](https://github.com/b310-digital/mindwendel)) `AGPL-3.0` `Docker/Elixir`
- [minimal-git-server](https://github.com/mcarbonne/minimal-git-server) - リポジトリを管理するための基本的なCLIを備えた軽量Gitサーバー。複数のアカウントをサポートし、コンテナ内で実行可能。 `MIT` `Docker`
- [Octobox](https://octobox.io/) `⚠` - GitHubの通知を完全にコントロールできる。 ([Source Code](https://github.com/octobox/octobox)) `AGPL-3.0` `Ruby/Docker`
- [OneDev](https://onedev.io/) - すべての機能を備えたDevOpsプラットフォーム。Git管理、問題追跡、CI/CDを提供。シンプルでありながら強力。 ([Source Code](https://code.onedev.io/projects/160)) `MIT` `Java/Docker/K8S`
- [OpenProject](https://www.openproject.org) - プロジェクト、タスク、目標を管理。GitHubのプルリクエストにワークパッケージをリンクし、協働を行う。 ([Source Code](https://github.com/opf/openproject)) `GPL-3.0` `Ruby/deb/Docker`
- [Pagure](https://pagure.io/pagure) - 軽量で強力で柔軟なGit中心のフォージ。分散開発と連携開発の基盤を構築する機能を備えている。 ([Demo](https://pagure.io/)) `GPL-2.0` `Docker/Python/deb`
- [Phorge](https://we.phorge.it/) - ソフトウェア開発プロジェクトの協働、管理、整理、レビューを行うためのコミュニティが中心のプラットフォーム。 ([Source Code](https://we.phorge.it/source/phorge/)) `Apache-2.0` `PHP`
- [Plane](https://plane.so) - トラック問題、エピック、および製品のロードマップを最もシンプルな方法で管理（JIRA、Linear、Heightの代替）。（[Demo](https://app.plane.so)，[Source Code](https://github.com/makeplane/plane)）`AGPL-3.0` `Docker`
- [ProjeQtOr](https://www.projeqtor.org/) - 完全で成熟した、マルチユーザー対応のプロジェクト管理システムで、プロジェクトのすべてのフェーズにわたる広範な機能を提供。（[Demo](https://demo.projeqtor.org/)，[Source Code](https://sourceforge.net/p/projectorria/code/HEAD/tree/branches/)）`AGPL-3.0` `PHP`
- [Redmine](https://www.redmine.org/) - 柔軟なプロジェクト管理ウェブアプリケーション。（[Source Code](https://svn.redmine.org/redmine/)）`GPL-2.0` `Ruby`
- [Review Board](https://www.reviewboard.org/) - すべての規模のプロジェクトおよび企業向けに拡張可能で使いやすいコードレビューツール。（[Demo](https://demo.reviewboard.org/)，[Source Code](https://github.com/reviewboard/reviewboard)）`MIT` `Python/Docker`
- [RhodeCode](https://rhodecode.com/) - Git、Subversion、Mercurialのリポジトリ管理を統合・簡易化。（[Source Code](https://code.rhodecode.com/)）`AGPL-3.0` `Python`
- [Rukovoditel](https://www.rukovoditel.net/) - 設定可能なオープンソースプロジェクト管理ウェブアプリケーション。（[Source Code](https://www.rukovoditel.net/download.php)）`GPL-2.0` `PHP`
- [SCM Manager](https://www.scm-manager.org/) - Git、MercurialおよびSubversionリポジトリをHTTPで共有・管理する最も簡単な方法。（[Source Code](https://github.com/scm-manager/scm-manager)）`BSD-3-Clause` `Java/deb/Docker/K8S`
- [ShipShipShip](https://shipshipship.io) - プロジェクト管理と顧客コミュニケーションを橋渡しする変更履歴およびロードマッププラットフォーム。（[Demo](https://demo.shipshipship.io/admin)，[Source Code](https://github.com/GauthierNelkinsky/ShipShipShip)）`Apache-2.0` `Docker`
- [Smederee](https://smeder.ee) - シンプルなプラットフォームで、Darcs版制御システムの力を活かして、人々が素晴らしいソフトウェアを一緒に構築できるように支援。（[Source Code](https://smeder.ee/~jan0sch/smederee)）`AGPL-3.0` `Scala`
- [Sourcehut](https://sourcehut.org/) - JavaScriptなしで動作する完全なウェブGitインターフェース。（[Demo](https://sr.ht/)，[Source Code](https://git.sr.ht/~sircmpwn/git.sr.ht/tree)）`GPL-2.0` `Go`
- [Taiga](https://www.taiga.io/) - カンバンおよびスクラム手法に基づくアジャイルプロジェクト管理ツール。（[Source Code](https://github.com/kaleidos-ventures)）`MPL-2.0` `Docker/Python/Nodejs`
- [Titra](https://titra.io/) - フリーランスや小さなチーム向けのタイムトラッキングソリューション。（[Source Code](https://github.com/titraio/titra)）`GPL-3.0` `Javascript/Docker`
- [Trac](https://trac.edgewall.org/) - Tracはソフトウェア開発プロジェクト向けの強化されたWikiおよび問題トラッキングシステムです。`BSD-3-Clause` `Python/deb`
- [Traq](https://traq.io/) - PHPで構築されたプロジェクト管理および問題トラッキングシステム。（[Source Code](https://github.com/nirix/traq)）`GPL-3.0` `PHP/Nodejs`
- [Tuleap](https://www.tuleap.org/) - Tuleapは、ソフトウェアプロジェクトの計画、追跡、開発、協働を行うためのオープンソースツールセットです。（[Source Code](https://tuleap.net/plugins/git/tuleap/tuleap/stable?p=tuleap%2Fstable.git&a=tree)）`GPL-2.0` `PHP`
- [UVDesk](https://www.uvdesk.com/) - UVDeskコミュニティは、サービス指向、イベント駆動、拡張可能なオープンソースヘルプデスクシステムであり、組織が顧客への効率的なサポートを提供するために、思いつくどんな形でも簡単に利用できます。（[Demo](https://demo.uvdesk.com/)，[Source Code](https://github.com/uvdesk/community-skeleton)）`MIT` `PHP`
- [ZenTao](https://www.zentao.pm/) - アジャイル（スクラム）プロジェクト管理システム／ツール。（[Source Code](https://github.com/easysoft/zentaopms)）`AGPL-3.0` `PHP`


### Software Development - Testing

**[`^        back to top        ^`](#awesome-selfhosted)**

[software testing](https://en.wikipedia.org/wiki/Software_testing)向けのツールとソフトウェア。

- [Bencher](https://bencher.dev/) - 継続的インテグレーションで発生するパフォーマンスの回帰を検出するための、連続ベンチマークツールセット。（[Source Code](https://github.com/bencherdev/bencher)）`MIT/Apache-2.0` `Rust`
- [Request Inbox](https://request-inbox.com/) - テストおよびデバッグ用にHTTPリクエストを収集・確認。インボックスを作成・管理し、詳細なリクエストデータをキャプチャし、カスタムレスポンスを設定。（[Demo](https://request-inbox.com/)，[Source Code](https://github.com/jesusnoseq/request-inbox)）`Apache-2.0` `Docker`
- [WebHook Tester](https://github.com/tarampampam/webhook-tester) - WebHookなどのテストに最適な強力なツール。（`MIT`）`Docker/Go/deb/K8S`


### Static Site Generators

**[`^        back to top        ^`](#awesome-selfhosted)**

[Static site generators](https://en.wikipedia.org/wiki/Web_template_system#Static_site_generators) データ、テキストファイルおよびテンプレートセットに基づいて、完全な静的HTMLウェブサイトを生成する

**お問い合わせください [staticsitegenerators.bevry.me](https://staticsitegenerators.bevry.me), [staticgen.com](https://www.staticgen.com)**

_関連： [Blogging Platforms](#blogging-platforms), [Photo Galleries](#photo-galleries), [Content Management Systems (CMS)](#content-management-systems-cms)_



### Task Management & To-do Lists

**[`^        back to top        ^`](#awesome-selfhosted)**

[Task management](https://en.wikipedia.org/wiki/Task_management#Task_management_software)ソフトウェア。

_関連： [Software Development - Project Management](#software-development---project-management), [Ticketing](#ticketing)_

- [4ga Boards](https://4gaboards.com) - シンプルなリアルタイムカンバンボードによるタスク追跡のための管理。洗練されたダークモード、折りたたみ可能なToDoリスト、マルチタスクツールを備え、チームの生産性を飛躍的に向上させます。([Demo](https://demo.4gaboards.com), [Source Code](https://github.com/RARgames/4gaBoards)) `MIT` `Nodejs/Docker/K8S`
- [AppFlowy](https://appflowy.io/) - さまざまなプロジェクトごとのToDoリストを詳細に構築し、それぞれの進捗を追跡できます。オープンソースのNotionの代替品。([Source Code](https://github.com/AppFlowy-IO/appflowy)) `AGPL-3.0` `Rust/Dart/Docker`
- [dayGLANCE](https://dayglance.app) - 日別スケジュールプランナー。ドラッグ＆ドロップによる時間ブロッキング、インボックス、繰り返しタスク、習慣、ルーティン、目標、プロジェクト、ポモドーロ集中モードを備え、iCalおよびCalDAVカレンダーとの同期も可能です。データはブラウザに残され、オプションでWebDAVまたはGLANCEvaultとの同期が可能です。([Source Code](https://github.com/krelltunez/dayGLANCE), [Clients](https://github.com/glance-apps/glance-vault)) `MIT` `Javascript/Docker`
- [Donetick](https://donetick.com) - 個人および家族用のタスクと家事管理ツール。高度なスケジューリング、柔軟な割り当て、グループ共有機能、詳細な履歴、APIによる自動化、シンプルかつ現代的なデザインを備えています。([Demo](https://app.donetick.com/), [Source Code](https://github.com/donetick/donetick)) `AGPL-3.0` `Go/Docker`
- [Focus Flow](https://github.com/francesco-gaglione/focus_flow_cloud) - ポモドーロ技術を用いた時間管理のための完全なエコシステム。`MIT` `Docker/K8S`
- [HamsterBase Tasks](https://tasks.hamsterbase.com) - アイデアを整理し、素晴らしい成果物を創り出すためのツール。計画、整理、構築、リリースします。([Demo](https://tasks-app.hamsterbase.com), [Source Code](https://github.com/hamsterbase/tasks)) `AGPL-3.0` `Docker`
- [Kan](https://kan.bn/) - 柔軟なカンバンアプリで、仕事の整理、進捗の追跡、成果物の達成をサポートします（Trelloの代替品）。([Source Code](https://github.com/kanbn/kan)) `AGPL-3.0` `Docker`
- [Kanboard](https://kanboard.org/) - シンプルな視覚的なタスクボード。([Source Code](https://github.com/kanboard/kanboard)) `MIT` `PHP`
- [Listaway](https://github.com/jeffrpowell/listaway/) - アイテムのリストを構築し、公開して共有できるアプリ。認証、管理者ツール、アイテムのノートと優先順位、ランダムURLで選択された読み取り専用リンクのオプションをサポート（Amazon Listsの代替品）。([Source Code](https://github.com/jeffrpowell/listaway)) `MIT` `Docker`
- [myTinyTodo](https://www.mytinytodo.net/) - AJAXスタイルでToDoリストを管理するシンプルな方法。PHP、jQuery、SQLite/MySQLを使用。GTDに準拠しています。([Demo](https://www.mytinytodo.net/demo/), [Source Code](https://github.com/maxpozdeev/mytinytodo/)) `GPL-2.0` `PHP`
- [Nullboard](https://github.com/apankrat/nullboard) - 1ページのミニマリズムカンバンボード。コンパクトで読みやすく、使いやすいです。([Demo](https://nullboard.io/preview)) `BSD-2-Clause` `Javascript`
- [OpenHabitTracker](https://openhabittracker.net) - 時間追跡、カレンダー表示、完了統計を活用して習慣、タスク、ノートを追跡します。([Demo](https://pwa.openhabittracker.net), [Source Code](https://github.com/Jinjinov/OpenHabitTracker)) `GPL-3.0` `Docker`
- [Our Shopping List](https://codeberg.org/nanawel/our-shopping-list) - シンプルな共有リストアプリ。買い物リストや、協力的に使う必要がある他の小さなToDoリストを含みます。([Demo](https://osl.lanterne-rouge.info/)) `AGPL-3.0` `Docker`
- [Super Productivity](https://super-productivity.com) - 高度なToDoリストアプリで、時間ブロッキングと時間追跡機能を統合。Jira、GitHub、GitLab、Redmine、OpenProjectと統合されています。([Source Code](https://github.com/super-productivity/super-productivity)) `MIT` `Docker`
- [Task Keeper](https://github.com/nymanjens/piga) - パワーユーザー向けのリストエディタ。自前サーバーでサポートされています。`Apache-2.0` `Scala`
- [Tasks.md](https://github.com/BaldissaraMatheus/Tasks.md) - 自前サーバーで実行可能な、ファイルベースのタスク管理ボード。Markdown構文をサポートしています。`MIT` `Docker`
- [Taskwarrior](https://taskwarrior.org/) - Taskwarriorは、コマンドラインからToDoリストを管理する無料かつオープンソースソフトウェアです。柔軟で、速く、効率的で、目立たない。仕事のやり方を終えたら、あなたの前を離れます。([Source Code](https://taskwarrior.org/download/#git)) `MIT` `C++`
- [Tellor](https://tellor.cc/) - ミニマリズムのシングルユーザーカンバンToDoアプリ。クリーンで簡素でコンパクトなUI。Trelloからのボードをインポート可能です。([Demo](https://tellor.cc/demo/?b=18486f63be6bb5f2), [Source Code](https://github.com/Voldrix/Tellor)) `MIT` `PHP`
- [Tracks](https://www.getontracks.org/) - David Allenの[Getting Things Done™](https://en.wikipedia.org/wiki/Getting_Things_Done)メソッドを実装するためのウェブベースアプリ。([Source Code](https://github.com/TracksApp/tracks)) `GPL-2.0` `Ruby`
- [tududi](https://tududi.com/) - 階層構造を持つタスク管理ツール、スマート繰り返しタスク、Telegramとのシームレス統合を備えています。([Source Code](https://github.com/chrisvel/tududi)) `MIT` `Docker`
- [Vikunja](https://vikunja.io/) - ライフを整理するためのToDoアプリ。（[Demo](https://try.vikunja.io/login), [Source Code](https://github.com/go-vikunja/vikunja)）`AGPL-3.0/GPL-3.0` `Go`
- [Wekan](https://wekan.github.io/) - オープンソースのTrello風カンバン。（[Source Code](https://github.com/wekan/wekan)）`MIT` `Nodejs`
- [Will Be Done](https://will-be-done.app/) - オフライン優先のタスクマネージャー。週次計画、プロジェクトボード、リアルタイム同期、Vimキーバインディング、デスクトップでの迅速追加、および人気タスクマネージャーからのインポート（TickTick、Todoistの代替品）。（[Demo](https://demo.will-be-done.app/), [Source Code](https://github.com/will-be-done/will-be-done)）`AGPL-3.0` `Docker/Nodejs`


### Ticketing

**[`^        back to top        ^`](#awesome-selfhosted)**

[Helpdesk](https://en.wikipedia.org/wiki/Help_desk_software), [bug](https://en.wikipedia.org/wiki/Bug_tracking_system) および [issue](https://en.wikipedia.org/wiki/Issue_tracking_system) のトレーキングソフトウェアにより、ユーザーのリクエスト、バグおよび欠落している機能の追跡を支援。

_関連： [Task Management & To-do Lists](#task-management--to-do-lists), [Software Development - Project Management](#software-development---project-management)_

- [BugPin](https://bugpin.io) - ウェブアプリケーション向けの視覚的なバグ報告およびチケット管理ツール。（[Source Code](https://github.com/aranticlabs/bugpin)）`AGPL-3.0/MIT` `Docker`
- [Bugzilla](https://www.bugzilla.org/) - 一般用途のバグトラッカーおよびテストツール。元々モzillaプロジェクトで開発・使用された。（[Source Code](https://github.com/bugzilla/bugzilla)）`MPL-2.0` `Perl`
- [Frappe Helpdesk](https://frappe.io/helpdesk) - サポート業務を効率化し、簡単な設定、シンプルなユーザーインターフェース、クエリ解決用の自動化ツールを提供するヘルプデスクソフトウェア。（[Source Code](https://github.com/frappe/helpdesk)）`AGPL-3.0` `Docker`
- [FreeScout](https://freescout.net/) - メールベースの顧客サポートアプリ、ヘルプデスク、共有メールボックス（ZendeskおよびHelp Scoutの代替品）。（[Demo](https://demo.freescout.net/login), [Source Code](https://github.com/freescout-help-desk/freescout)）`AGPL-3.0` `PHP/Docker`
- [GlitchTip](https://glitchtip.com) - アプリから報告されたエラーを収集するためのエラー追跡アプリ。（[Source Code](https://gitlab.com/glitchtip/glitchtip)）`MIT` `Python/Docker/K8S`
- [ITFlow](https://itflow.org) - MSP（マネージドサービスプロバイダー）向けのクライアントITドキュメント、チケット管理、請求書作成および会計。（[Demo](https://demo.itflow.org), [Source Code](https://github.com/itflow-org/itflow)）`GPL-3.0` `PHP`
- [Libredesk](https://libredesk.io/) - 現代的なマルチチャネル顧客サポートデスク。ライブチャット、メールなど、すべてを1つのバイナリで提供。（[Demo](https://demo.libredesk.io), [Source Code](https://github.com/abhinavxd/libredesk)）`AGPL-3.0` `Docker/Go/Nodejs`
- [MantisBT](https://www.mantisbt.org/) - バグトラッカー。ソフトウェア開発に最も適している。（[Demo](https://www.mantisbt.org/bugs/my_view_page.php), [Source Code](https://github.com/mantisbt/mantisbt)）`GPL-2.0` `PHP`
- [OTOBO](https://otobo.io/en/) - 顧客サービス、ヘルプデスク、ITサービス管理に使用される柔軟なウェブベースのチケットシステム。（[Demo](https://otobo.io/en/service-management-plattform/otobo-demo/), [Source Code](https://github.com/RotherOSS/otobo)）`GPL-3.0` `Perl/Docker`
- [Request Tracker](https://www.bestpractical.com/rt/) - 企業レベルの問題追跡システム。（[Source Code](https://github.com/bestpractical/rt)）`GPL-2.0` `Perl`
- [Roundup Issue Tracker](https://www.roundup-tracker.org/) - 使いやすく、インストールも簡単な問題追跡システム。コマンドライン、ウェブ、REST、XML-RPC、メールインターフェースを備え、柔軟性を意識した設計。単なるバグトラッカーではなく。（[Source Code](https://www.roundup-tracker.org/code.html)）`MIT/ZPL-2.0` `Python/Docker`
- [Zammad](https://zammad.org/) - 使いやすく、強力なオープンソースサポートおよびチケット管理システム。（[Source Code](https://github.com/zammad/zammad)）`AGPL-3.0` `Ruby/deb`


### Time Tracking

**[`^        back to top        ^`](#awesome-selfhosted)**

[Time-tracking software](https://en.wikipedia.org/wiki/Time-tracking_software)は、タスクやプロジェクトに費やされた時間の記録を可能にするコンピュータソフトウェアのカテゴリである。

- [ActivityWatch](https://activitywatch.net) - デバイス上で過ごす時間の使い方を自動的に追跡。（[Source Code](https://github.com/ActivityWatch/activitywatch)）`MPL-2.0` `Python`
- [Beaver Habit Tracker](https://github.com/daya0576/beaverhabits) - 大切な瞬間を保存する習慣管理アプリ。（[Demo](https://beaverhabits.com/demo)）`BSD-3-Clause` `Docker`
- [Ever Gauzy](https://gauzy.co) - 協働型、オンデマンド型、シェアリングエコノミー向けのオープンなビジネスマネジメントプラットフォーム（ERP/CRM/HRM/ATS/PM）。（[Demo](https://demo.gauzy.co), [Source Code](https://github.com/ever-co/ever-gauzy)）`AGPL-3.0` `Docker/Nodejs`
- [Kimai](https://www.kimai.org/) - 業務時間の記録を行い、必要に応じて活動の要約を印刷できる。（[Demo](https://www.kimai.org/demo/), [Source Code](https://github.com/kimai/kimai)）`AGPL-3.0` `PHP`
- [solidtime](https://www.solidtime.io) - フリーランスやアgency向けの現代的な時間管理アプリ。（[Source Code](https://github.com/solidtime-io/solidtime)）`AGPL-3.0` `Docker`
- [TimeTagger](https://timetagger.app) - オープンソースのタイムトラッカーで、インタラクティブなタイムラインと強力なレポート機能を備えたもの。（[Demo](https://timetagger.app/app/demo)，[Source Code](https://github.com/almarklein/timetagger)）`GPL-3.0` `Python`
- [Traggo](https://traggo.net/) - トラゴはタグベースのタイムトラッキングツールです。トラゴにはタスクはなく、タグ付きのタイムスパンしかありません。（[Source Code](https://github.com/traggo/server)）`GPL-3.0` `Docker/Go`
- [Wakapi](https://wakapi.dev/) - コーディング統計用のトラッキングツールで、WakaTimeと互換性があります。（[Source Code](https://github.com/muety/wakapi)）`GPL-3.0` `Go/Docker`
- [Ziit](https://ziit.app) - コードタイムトラッキングのスイス軍刀（WakaTimeへの代替案）。（[Source Code](https://github.com/0pandadev/ziit)）`AGPL-3.0` `Docker`


### Travel Organization

**[`^        back to top        ^`](#awesome-selfhosted)**

旅行計画ソフトウェアで予約を記録し、行程を確認し、アクティビティを計画し、支出を追跡する。

_関連： [Booking and Scheduling](#booking-and-scheduling), [Maps and Global Positioning System (GPS)](#maps-and-global-positioning-system-gps)_

- [Surmai](https://surmai.app/) - 協働型の個人および家族向け旅行計画ツール。（[Demo](https://demo.surmai.app)，[Source Code](https://github.com/rohitkumbhar/surmai)）`MIT` `Docker`


### URL Shorteners

**[`^        back to top        ^`](#awesome-selfhosted)**

[URL shortening](https://en.wikipedia.org/wiki/URL_shortening)は、 [URL](https://en.wikipedia.org/wiki/Uniform_Resource_Locator)を短縮する行為であり、それによって大幅に短縮されながらも必要なページへ直接指向されるようにするものである。1つをホストする前に、URL短縮サービスの [disadvantages](https://en.wikipedia.org/wiki/URL_shortening#Disadvantages)を確認してください。

- [bit](https://github.com/sjdonado/bit) - 高速で軽量であり、リソース効率の高いコンパイル済みのURL短縮ツール。`MIT` `Docker/Crystal`
- [Chhoto URL](https://chhoto.link) - シンプルで高速なURL短縮ツールで、膨らみなし（simply-shortenのフォーク）。（[Demo](https://github.com/SinTan1729/chhoto-url?tab=readme-ov-file#demo)，[Source Code](https://github.com/SinTan1729/chhoto-url)，[Clients](https://github.com/SinTan1729/chhoto-url/blob/main/TOOLS.md)）`MIT` `Rust/Docker`
- [clink](https://git.crueter.xyz/crueter/clink) - 純粋なC言語で書かれた超ミニマムなリンク短縮サービスで、実行ファイルサイズの小ささ、ポータビリティ、設定の容易さに焦点を当てています。（[Demo](https://short.crueter.xyz)）`AGPL-3.0` `C`
- [Flink](https://gitlab.com/rtraceio/web/flink) - QRコードを作成し、あなたのウェブサイトに埋め込み可能なリンクプレビューおよびメタデータのスクレイピングを提供します。（[Demo](https://flink.is)）`MIT` `Docker`
- [Kutt](https://kutt.to) - カスタムドメインとカスタムURLをサポートする現代的なURL短縮ツール。（[Demo](https://kutt.to)，[Source Code](https://github.com/thedevs-network/kutt)）`MIT` `Nodejs/Docker`
- [rs-short](https://git.42l.fr/42l/rs-short) - Rustで書かれた軽量リンク短縮ツールで、キャッシュ、スパムボット防止、フィッシング検出などの機能を備えています。（[Demo](https://s.42l.fr/)）`MPL-2.0` `Rust`
- [Shlink](https://shlink.io) - REST APIおよびコマンドラインインターフェースを備えたURL短縮ツール。公式のプログレッシブウェブアプリケーションおよびDockerイメージを含む。（[Source Code](https://github.com/shlinkio/shlink)，[Clients](https://shlink.io/apps)）`MIT` `PHP/Docker`
- [Simple-URL-Shortener](https://github.com/azlux/Simple-URL-Shortener) - KISS URL短縮ツール、公開またはプライベート（アカウントあり）。ミニマリストで軽量。依存関係なし。（[Demo](https://u.azlux.fr)）`MIT` `PHP`
- [YOURLS](https://yourls.org/) - YOURLSはPHPスクリプトのセットで、あなた自身のURL短縮ツールを実行できるようにします。機能にはパスワード保護、URLカスタマイズ、ブックマークレット、統計、API、プラグイン、JSONPが含まれます。（[Source Code](https://github.com/YOURLS/YOURLS)）`MIT` `PHP`


### Video Surveillance

**[`^        back to top        ^`](#awesome-selfhosted)**

動画監視、つまり [Closed-circuit television (CCTV)](https://en.wikipedia.org/wiki/Closed-circuit_television) とも呼ばれるものは、追加のセキュリティや継続的な監視が必要な場所における動画カメラの使用を指す。

関連： [Media Streaming - Video Streaming](#media-streaming---video-streaming)

- [Bluecherry](https://www.bluecherrydvr.com/) - IPカメラおよびアナログカメラをサポートする閉ループテレビ（CCTV）ソフトウェアアプリケーション。（[Source Code](https://github.com/bluecherrydvr/bluecherry-apps)）`GPL-2.0` `PHP`
- [Frigate](https://frigate.video/) - ローカルで処理されたAIを使ってセキュリティカメラを監視します。（[Source Code](https://github.com/blakeblackshear/frigate)）`MIT` `Docker/Python/Nodejs`
- [motionEye](https://github.com/motioneye-project/motioneye) - ソフトウェアMotion（動画監視プログラムで動き検知機能を備えたもの）のオンラインインターフェース。`GPL-3.0` `Python/Docker`
- [Secluso](https://secluso.com) - ラズパイ用のプライベートDIYホームセキュリティカメラシステムで、端末から端末まで暗号化されたリモートアクセスとモバイルアプリによるリアルタイム動画、アラート、記録再生を提供します。（[Source Code](https://github.com/secluso/core)）`GPL-3.0` `Rust`
- [SentryShot](https://codeberg.org/SentryShot/sentryshot) - 動画監視管理システム。`GPL-2.0` `Docker/Rust`
- [Strix](https://github.com/eduard256/Strix) - IPカメラの動作するストリームURLを自動検出し、Frigateおよびgo2rtc用の即時使用可能な設定ファイルを生成します。`MIT` `Go/Docker`
- [Viseron](https://viseron.netlify.app/) - セルフホスト型、ローカル限定のNVRおよびAIコンピュータビジョンソフトウェア。オブジェクト検出、動き検出、顔認識など、さまざまな機能を備え、あなたの自宅、オフィス、または監視したい他の場所を常に監視できる力を与えます。([Source Code](https://github.com/roflcoopter/viseron)) `MIT` `Docker`
- [Zoneminder](https://www.zoneminder.com/) - 閉路テレビ（CCTV）ソフトウェアアプリケーションで、IP、USB、アナログカメラに対応しています。([Source Code](https://github.com/ZoneMinder/ZoneMinder)) `GPL-2.0` `PHP/deb`


### VPN

**[`^        back to top        ^`](#awesome-selfhosted)**

A [virtual private network (VPN)](https://en.wikipedia.org/wiki/Virtual_private_network)は、プライベートネットワークをパブリックネットワークを介して拡張し、ユーザーが共有またはパブリックネットワークを介してデータを送受信できるようにし、その計算デバイスがプライベートネットワークに直接接続されているかのようにする。

**お問い合わせはこちらまで [awesome-sysadmin/VPN](https://github.com/awesome-foss/awesome-sysadmin#vpn)**



### Web Servers

**[`^        back to top        ^`](#awesome-selfhosted)**

ウェブサーバーと逆プロキシ。 [web server](https://en.wikipedia.org/wiki/Web_server) は、要求を [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)（ウェブコンテンツを配布するために作られたネットワークプロトコル）またはその安全な変体 [HTTPS](https://en.wikipedia.org/wiki/HTTPS) を介して受け取るソフトウェアおよびその下位ハードウェアの一部である。 [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy) は、クライアントにとって普通のウェブサーバーのように見えるプロキシサーバーであり、実際には一つまたは複数の普通のウェブサーバーにリクエストを転送する中間装置として機能する。

関連情報: [Proxy](#proxy)

- [Algernon](https://algernon.roboticoverlords.org/) - 小さな、自立した純Goのウェブサーバーで、Lua、Markdown、HTTP/2、QUIC、RedisおよびPostgreSQLをサポートしています。([Source Code](https://github.com/xyproto/algernon)) `BSD-3-Clause` `Go/Docker`
- [Apache HTTP Server](https://httpd.apache.org/) - 安全で効率的かつ拡張可能なサーバーで、現在のHTTP規格に合わせたHTTPサービスを提供します。([Source Code](https://svn.apache.org/repos/asf/httpd/httpd/trunk/)) `Apache-2.0` `C/deb/Docker`
- [BunkerWeb](https://www.bunkerweb.io) - 次世代のウェブアプリケーションファイアウォール（WAF）で、あなたのウェブサービスを保護します。([Demo](https://demo.bunkerweb.io), [Source Code](https://github.com/bunkerity/bunkerweb), [Clients](https://docs.bunkerweb.io/latest/plugins/)) `AGPL-3.0` `deb/Docker/K8S/Python`
- [Caddy](https://caddyserver.com/) - 強力で企業向けに設計されたオープンソースウェブサーバーで、自動HTTPSを提供します。([Source Code](https://github.com/caddyserver/caddy)) `Apache-2.0` `Go/deb/Docker`
- [Ferron](https://ferron.sh/) - 高速でメモリ安全なRustで書かれたウェブサーバー。([Source Code](https://github.com/ferronweb/ferron)) `MIT` `Rust/Docker/deb`
- [go-doxy](https://github.com/yusing/godoxy) - 軽量でシンプルでパフォーマンスの高いリバースプロキシで、WebUI、Docker統合、トラフィックに基づくコンテナの自動シャットダウン／スタートを提供します。`MIT` `Docker/Go`
- [godoxy](https://docs.godoxy.dev/) - 高パフォーマンスのリバースプロキシおよびコンテナオーケストレーターで、セルフホストユーザー向けに提供します。([Demo](https://demo.godoxy.dev/), [Source Code](https://github.com/yusing/godoxy)) `MIT` `Docker/Go`
- [HAProxy](https://www.haproxy.org/) - 非常に高速で信頼性の高いリバースプロキシで、高可用性、負荷分散、TCPおよびHTTPベースのアプリケーションのプロキシを提供します。([Source Code](https://git.haproxy.org/?p=haproxy.git;a=tree)) `GPL-2.0` `C/deb/Docker`
- [Lighttpd](https://www.lighttpd.net/) - 安全で高速で準拠し、非常に柔軟なウェブサーバーで、高パフォーマンス環境に最適化されています。([Source Code](https://git.lighttpd.net/lighttpd/lighttpd1.4)) `BSD-3-Clause` `C/deb/Docker`
- [Nginx Proxy Manager](https://nginxproxymanager.com/) - Nginxプロキシホストを管理するためのDockerコンテナで、シンプルで強力なインターフェースを提供します。([Source Code](https://github.com/NginxProxyManager/nginx-proxy-manager)) `MIT` `Docker`
- [NGINX](https://nginx.org/en/) - HTTPおよびリバースプロキシサーバー、メールプロキシサーバー、および一般的なTCP/UDPプロキシサーバー。([Source Code](https://github.com/nginx/nginx)) `BSD-2-Clause` `C/deb/Docker`
- [Pangolin](https://digpangolin.com/) - ID認証付きチューナードリバースプロキシで、ダッシュボードUI、アクセス制御、WireGuardベースのチューナー（Cloudflare Tunnel、Tailscaleの代替）を提供します。([Source Code](https://github.com/fosrl/pangolin)) `AGPL-3.0` `Docker`
- [Pomerium](https://www.pomerium.io) - ID認証付きリバースプロキシで、現在廃止されたoauth_proxyの後継品です。バックエンドへのリクエストをプロキシする前にOAuthステップを挿入し、自ホストされたウェブサイトを公開インターネットに安全に露出できるようにします。([Source Code](https://github.com/pomerium/pomerium)) `Apache-2.0` `Go/Docker`
- [SafeLine](https://waf.chaitin.com/) - ウェブアプリケーションファイアウォール／リバースプロキシで、あなたのウェブアプリケーションから攻撃やexploitを防ぎます。([Demo](https://demo.waf.chaitin.com/), [Source Code](https://github.com/chaitin/SafeLine)) `GPL-3.0` `Docker`
- [Static Web Server](https://static-web-server.net/) - マルチプラットフォーム対応、高パフォーマンス、非同期ウェブサーバーで、静的ファイルの提供に最適化されています。([Source Code](https://github.com/static-web-server/static-web-server)) `Apache-2.0/MIT` `Rust/Docker`
- [SWAG (Secure Web Application Gateway)](https://github.com/linuxserver/docker-swag) - NginxウェブサーバーおよびリバースプロキシでPHPサポート、内蔵Certbot（Let's Encrypt）クライアントおよびfail2ban統合を備えています。`GPL-3.0` `Docker`
- [Traefik](https://traefik.io/) - HTTPリバースプロキシおよび負荷分散で、マイクロサービスのデプロイを簡単に行えます。([Source Code](https://github.com/traefik/traefik)) `MIT` `Go/Docker`
- [UUSEC WAF](https://waf.uusec.com/) - 業界トップクラスの高パフォーマンス、AIおよび意味技術を備えたウェブアプリケーションファイアウォールおよびAPIセキュリティゲートウェイ（nginxのフォーク）。([Source Code](https://github.com/Safe3/uusec-waf)) `GPL-3.0` `C/Lua/Docker`
- [Vinyl Cache](https://vinyl-cache.org/) - ウェブアプリケーションアクセラレータ／HTTPリバースプロキシキャッシュ（以前はVarnish）。（[Source Code](https://code.vinyl-cache.org/vinyl-cache/vinyl-cache)） `BSD-2-Clause` `Go/deb/Docker`
- [Zoraxy](https://zoraxy.aroz.org/) - 一般用途のHTTPリバースプロキシおよびフォワーディングツール。（[Source Code](https://github.com/tobychui/zoraxy)） `AGPL-3.0` `Go/Docker`


### Wikis

**[`^        back to top        ^`](#awesome-selfhosted)**

A [wiki](https://en.wikipedia.org/wiki/Wiki)は、その読者たちがウェブブラウザを用いて直接編集および管理する共同出版物である。

_関連： [Note-taking & Editors](#note-taking--editors), [Static Site Generators](#static-site-generators), [Knowledge Management Tools](#knowledge-management-tools)_

関連項目: [Wikimatrix](https://www.wikimatrix.org/), [List of wiki software - Wikipedia](https://en.wikipedia.org/wiki/List_of_wiki_software), [Comparison of wiki software - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_wiki_software)

- [AmuseWiki](https://amusewiki.org/) - AmusewikiはEmacs Museマーカップに基づいており、元の実装とほぼ互換性を維持しています。読み取り専用サイト、モデレートされたウィキ、完全にオープンなウィキ、あるいはプライベートサイトとしても動作可能です。（[Demo](https://sandbox.amusewiki.org), [Source Code](https://github.com/melmothx/amusewiki)） `GPL-1.0` `Perl/Docker`
- [BookStack](https://www.bookstackapp.com/) - 情報を整理・保存。ドキュメントを本のように保存します。（[Demo](https://www.bookstackapp.com/#demo), [Source Code](https://codeberg.org/bookstack/bookstack)） `MIT` `PHP/Docker`
- [django-wiki](https://github.com/django-wiki/django-wiki) - シンプルな統合と優れたインターフェースを備えた機能が豊富なウィキシステム。知識をスタイルよく保存：Djangoモデルを使用してください。（[Demo](https://demo.django-wiki.org/)） `GPL-3.0` `Python`
- [docmost Community Edition](https://docmost.com/) - 協働ウィキおよびドキュメントソフトウェア（Confluence、Notionへの代替）。（[Source Code](https://github.com/docmost/docmost)） `AGPL-3.0` `Docker/Nodejs`
- [Documize](https://documize.com) - 現代的なドキュメント＋ウィキソフトウェアで、組み込みワークフロー、単一バイナリ実行可能、MySQL／Perconaのみを必要とします。（[Source Code](https://github.com/documize/community)） `AGPL-3.0` `Go`
- [Dokuwiki](https://www.dokuwiki.org/DokuWiki) - 使いやすく、軽量で標準に準拠したウィキエンジン。シンプルな構文により、データをウィキの外で読むことが可能。すべてのデータはプレーンテキストファイルに保存されているため、データベースは不要です。（[Source Code](https://github.com/dokuwiki/dokuwiki)） `GPL-2.0` `PHP`
- [Feather Wiki](https://feather.wiki) - 非常に高速で、無限に拡張可能なツール。個人用の非線形ノートブック、データベース、ウィキを作成し、ブラウザ内に完全に自立して動作し、サイズは58キロバイトです。（[Demo](https://feather.wiki/?page=gallery#wikis), [Source Code](https://codeberg.org/Alamantus/FeatherWiki), [Clients](https://feather.wiki/?page=gallery#extensions)） `AGPL-3.0` `Javascript`
- [Gitit](https://github.com/jgm/gitit) - ページとアップロードファイルをGitリポジトリに保存するウィキシステム。その後、VCSコマンドラインツールまたはウィキのウェブインターフェースを使って変更可能です。`GPL-2.0` `Haskell`
- [Gollum](https://github.com/gollum/gollum) - シンプルでGitを活用したウィキ。優れたAPIとローカルフロントエンドを備えています。`MIT` `Ruby`
- [LeafWiki](https://github.com/perber/leafwiki) - フォルダを想定する人向けの高速ウィキ。高速編集。ツリー構造によるナビゲーション。ディスク上のマーカード。（[Demo](https://demo.leafwiki.com)） `MIT` `Docker/Go`
- [Mediawiki](https://www.mediawiki.org/wiki/MediaWiki) - ウィキおよびすべてのWikimediaプロジェクトを運営するウィキソフトウェアパッケージ。月に数百百万のユーザーをサービスしています。（[Demo](https://en.wikipedia.org/wiki/Main_Page), [Source Code](https://phabricator.wikimedia.org/source/mediawiki/)） `GPL-2.0` `PHP`
- [Mycorrhiza Wiki](https://mycorrhiza.wiki/) - Goで書かれたファイルシステムおよびGitベースのウィキエンジン。Mycomarkupを主なマーカップ言語として使用しています。（[Source Code](https://github.com/bouncepaw/mycorrhiza/)） `AGPL-3.0` `Go`
- [Otter Wiki](https://otterwiki.com/) - シンプルで使いやすいマーカードを用いたウィキソフトウェア。（[Source Code](https://github.com/redimp/otterwiki)） `MIT` `Docker`
- [PmWiki](https://www.pmwiki.org) - ウェブサイトの協働作成および維持に用いるウィキベースシステム。`GPL-3.0` `PHP`
- [Raneto](https://raneto.com/) - 静的マーカードファイルを使用する知識ベースプラットフォーム。（[Source Code](https://github.com/ryanlelek/Raneto)） `MIT` `Nodejs`
- [TiddlyWiki](https://tiddlywiki.com/) - 再利用可能な非線形個人用ウェブノートブック。（[Source Code](https://github.com/TiddlyWiki/TiddlyWiki5)） `BSD-3-Clause` `Nodejs`
- [Tiki](https://tiki.org/HomePage) - 最も内蔵機能が豊富なウィキCMSグループウェア。（[Demo](https://tiki.org/Try-Tiki), [Source Code](https://gitlab.com/tikiwiki/tiki)） `LGPL-2.1` `PHP`
- [W](https://w.club1.fr) - 軽量で、マルチユーザー対応、フラットファイルデータベースのウィキエンジン。ページを作成し、マーカード／HTML／CSS／JSでブラウザ上で編集できます。他のウィキと異なる点は、各ページのスタイルを個別にカスタマイズすることを奨めている点です。（[Source Code](https://github.com/vincent-peugnet/wcms)） `AGPL-3.0` `PHP`
- [WackoWiki](https://wackowiki.org/) - WackoWikiは軽量で設置が簡単な多言語Wikiエンジンです。（[Source Code](https://github.com/WackoWiki/wackowiki)） `BSD-3-Clause` `PHP`
- [Wiki-Go](https://leomoon.com/downloads/web-apps/wiki-go/) - 現代的で機能が豊かで、データベースを使わないフラットファイルWikiプラットフォームです。（[Demo](https://wikigo.leomoon.com), [Source Code](https://github.com/leomoon-studios/wiki-go)） `GPL-3.0` `Go/Docker`
- [Wiki.js](https://js.wiki/) - 現代的で軽量かつ強力なWikiアプリ。GitとMarkdownを使用しています。（[Demo](https://docs.requarks.io), [Source Code](https://github.com/Requarks/wiki)） `AGPL-3.0` `Nodejs/Docker/K8S`
- [WikiDocs](https://www.wikidocs.app/) - データベースを使わないMarkdownフラットファイルWikiエンジンです。（[Source Code](https://github.com/Zavy86/WikiDocs)） `MIT` `PHP/Docker`
- [WiKiss](https://wikiss.tuxfamily.org/) - Wikiで、使いやすく設置も簡単です。（[Source Code](https://svnweb.tuxfamily.org/listing.php?repname=wikiss/svn&path=%2F&sc=0)） `GPL-2.0` `PHP`
- [XWiki](https://www.xwiki.org) - 拡張機能を強力な拡張アーキテクチャでユーザーに追加できる2世代のWikiです。（[Demo](https://www.xwikiplayground.org/xwiki/bin/view/Main/), [Source Code](https://github.com/xwiki/xwiki-platform)） `LGPL-2.1` `Java/Docker/deb`
- [Zim](https://zim-wiki.org/) - Wikiページのコレクションを維持するためのグラフィカルテキストエディタ。各ページには他のページへのリンク、簡単なフォーマット、画像が含まれます。（[Source Code](https://github.com/zim-desktop-wiki/zim-desktop-wiki)） `GPL-2.0` `Python/deb`


--------------------

## List of Licenses

**[`^        back to top        ^`](#awesome-selfhosted)**

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


--------------------

## Anti-features

- `⚠ ` - Depends on a proprietary service outside the user's control

--------------------

## External Links

**[`^        back to top        ^`](#awesome-selfhosted)**

- Alternative frontends/portals to discover/filter awesome-selfhosted apps: [awweso.me](https://awweso.me/), [awesome-web.theravenhub](https://awesome-web.theravenhub.com/browse.html), [awesomehub.web.app](https://awesomehub.js.org/list/selfhosted)
- [Awesome Sysadmin](https://github.com/awesome-foss/awesome-sysadmin) - 素晴らしいオープンソースシステム管理者リソースのキュレーションされたリストです。
- Lists of software aimed at privacy and decentralization in some form: [PRISM Break](https://prism-break.org/en/), [privacytools.io](https://www.privacytools.io/), [Alternative Internet](https://redecentralize.github.io/alternative-internet/), [Libre Projects](https://libreprojects.net/), [Easy Indie App](https://easyindie.app)
- Other Awesome lists: [Awesome Big Data](https://github.com/0xnr/awesome-bigdata), [Awesome Public Datasets](https://github.com/awesomedata/awesome-public-datasets)
- Dynamic Domain Name services: [Afraid.org](https://freedns.afraid.org/domain/registry/), [Pagekite](https://pagekite.net/)
- Communities/forums: [/c/selfhosted on lemmy.world](https://lemmy.world/c/selfhosted), [/c/selfhost on lemmy.ml](https://lemmy.ml/c/selfhost), [/r/selfhosted on reddit](https://old.reddit.com/r/selfhosted/), [/r/selfhosted Matrix Channel](https://matrix.to/#/#selfhosted:selfhosted.chat), [/r/homelab on reddit](https://old.reddit.com/r/homelab/), [IndieWeb](https://indieweb.org/)
- [theme.park](https://theme-park.dev/) - 50のセルフホストアプリ向けのテーマ/スキンのコレクションです。（[Source Code](https://github.com/GilbN/theme.park/)） `MIT` `CSS`

--------------------

## Contributing

寄与ガイドラインは [here](https://github.com/awesome-selfhosted/awesome-selfhosted-data/blob/master/CONTRIBUTING.md) で見つかります。

## License

このリストは [Creative Commons Attribution-ShareAlike 3.0 Unported](https://github.com/awesome-selfhosted/awesome-selfhosted/blob/master/LICENSE) ライセンスに基づいています。
ライセンスの条件は [here](https://creativecommons.org/licenses/by-sa/3.0/) に要約されています。
著者のリストは [AUTHORS](https://github.com/awesome-selfhosted/awesome-selfhosted-data/blob/master/AUTHORS) ファイルに記載されています。
