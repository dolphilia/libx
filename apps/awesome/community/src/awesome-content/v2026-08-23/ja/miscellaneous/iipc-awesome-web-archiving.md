---
title: "Awesome Web Archiving"
description: "Web Archivingを扱う資料や関連プロジェクトをまとめたAwesomeリストです。 上流ではアーカイブ済み、または更新終了と案内されています。"
licenseSource: "github-iipc-awesome-web-archiving-readme-md"
---

# Awesome Web Archiving

Web Archivingを扱う資料や関連プロジェクトをまとめたAwesomeリストです。 上流ではアーカイブ済み、または更新終了と案内されています。

## 目次

* [研修・ドキュメント](#trainingdocumentation)
  * [ウェブアーカイブ概念の入門](#introductions-to-web-archiving-concepts)
  * [研修資料](#training-materials)
  * [WARC標準](#the-warc-standard)
  * [ウェブアーカイブを利用する研究者向け](#for-researchers-using-web-archives)
* [ウェブ公開者向けリソース](#resources-for-web-publishers)
* [ツールとソフトウェア](#tools--software)
  * [取得](#acquisition)
  * [再生](#replay)
  * [検索と発見](#search--discovery)
  * [ユーティリティ](#utilities)
  * [WARC入出力ライブラリ](#warc-io-libraries)
  * [分析](#analysis)
  * [品質保証](#quality-assurance)
  * [キュレーション](#curation)
* [コミュニティリソース](#community-resources)
  * [ほかのAwesomeリスト](#other-awesome-lists)
  * [ブログと研究](#blogs-and-scholarship)
  * [メーリングリスト](#mailing-lists)
  * [Slack](#slack)
  * [Discord](#discord)
  * [Twitter](#twitter)
* [ウェブアーカイブサービス事業者](#web-archiving-service-providers)
  * [セルフホスト可能なオープンソース](#self-hostable-open-source)
  * [ホスト型クローズドソース](#hosted-closed-source)
* [公開データ](#public-data)

## 研修・ドキュメント

この節では、ウェブアーカイブの実務、方法論、ツールを学ぶ人向けに、研修資料、ドキュメント、教育リソースを紹介します。

### ウェブアーカイブ概念の入門

* [What is a web archive?](https://youtu.be/ubDHY-ynWi0) - [the UK Web Archive YouTube Channel](https://www.youtube.com/channel/UCJukhTSw8VRj-VNTpBcqWkw)からの動画
* [Wikipedia's List of Web Archiving Initiatives](https://en.wikipedia.org/wiki/List_of_Web_archiving_initiatives)
* [Glossary of Archive-It and Web Archiving Terms](https://support.archive-it.org/hc/en-us/articles/208111686-Glossary-of-Archive-It-and-Web-Archiving-Terms)
* [The Web Archiving Lifecycle Model](https://archive-it.org/blog/post/announcing-the-web-archiving-life-cycle-model/) - ウェブアーカイブの技術的およびプログラム的な側面を、どのような組織でもウェブコンテンツのアーカイブに適用できるフレームワークとして統合する試み。インターネット・アーカイブのウェブアーカイブサービスであるArchive-Itは、世界中の記憶機関との協働をもとにこのモデルを開発した。
* [Retrieving and Archiving Information from Websites by Wael Eskandar and Brad Murray](https://kit.exposingtheinvisible.org/en/web-archive.html/)

### 研修資料

* [IIPC and DPC Training materials: module for beginners (8 sessions)](https://netpreserve.org/web-archiving/training-materials/)
* [UNT Web Archiving Course](https://github.com/vphill/web-archiving-course)
* [Continuing Education to Advance Web Archiving (CEDWARC)](https://cedwarc.github.io/)
* [A Whirlwind Tour of Common Crawl's Datasets using Python](https://github.com/commoncrawl/whirlwind-python/)
* [A Whirlwind Tour of Common Crawl's Datasets as a Python notebook](https://github.com/commoncrawl/whirlwind-python-notebook)
* [A Whirlwind Tour of Common Crawl's Datasets using Java](https://github.com/commoncrawl/whirlwind-java/)

### WARC標準

* [The warc-specifications](https://iipc.github.io/warc-specifications/) - WARC形式の仕様・標準に関する資料です。
* [Offical ISO 28500 WARC specification homepage](http://bibnum.bnf.fr/WARC/)

### ウェブアーカイブを利用する研究者向け

* [GLAM Workbench: Web Archives](https://glam-workbench.github.io/web-archives/) - ウェブアーカイブを研究へ利用するための資料です。 参照: <https://netpreserveblog.wordpress.com/2020/05/28/asking-questions-with-web-archives/>
* [Archives Unleashed Toolkit documentation](https://aut.docs.archivesunleashed.org/)
* [Tutorial for Humanities researchers about how to explore Arquivo.pt](https://sobre.arquivo.pt/en/tutorial-for-humanities-researchers-about-how-to-use-arquivo-pt/)

## ウェブ公開者向けリソース

これらは、サイトを確実にアーカイブ可能にしたいウェブ公開者や組織を支援するリソースです。

* [Definition of Web Archivability](https://nullhandle.org/web-archivability/index.html) - ウェブコンテンツの保存可能性を高めるためのリソースです。 参照: <https://web.archive.org/web/20230728211501/https://library.stanford.edu/projects/web-archiving/archivability>
* [Archive Ready](http://archiveready.com/) - ウェブページを正常に保存できる可能性を推定するツールです。


## ツールとソフトウェア

この一覧では、ウェブアーカイブに関する主要かつ広く利用されるツールを簡潔に紹介します。詳細は、ほかのグループによる次の資料も参照し、可能なら貢献してください。

* [Comparison of web archiving software](https://github.com/archivers-space/research/tree/master/web_archiving)
* [Awesome Website Change Monitoring](https://github.com/edgi-govdata-archiving/awesome-website-change-monitoring)

### 取得

* [ArchiveBox](https://github.com/ArchiveBox/ArchiveBox) - RSSフィードやブックマーク、リンクから加算的にアーカイブを維持するツール。wget、Chromeヘッドレス、その他手法を使用（かつては `Bookmark Archiver`）。（開発中）
* [archivenow](https://github.com/oduwsdl/archivenow) - ウェブリソースをオンデマンドウェブアーカイブにプッシュする [Python library](http://ws-dl.blogspot.com/2017/02/2017-02-22-archive-now-archivenow.html)。（安定版）
* [ArchiveWeb.Page](https://webrecorder.net/archivewebpage/) - Chromeおよびその他のChromiumベースブラウザ向けのプラグインで、ウェブページをインタラクティブにアーカイブし、再現可能にし、WARC＆WACZファイルとしてエクスポートできます。また、Electronベースのデスクトップアプリケーションとしても利用可能です。
* [Auto Archiver](https://github.com/bellingcat/auto-archiver) - Google Sheetsドキュメントからソーシャルメディアの投稿、動画、画像を自動でアーカイブするPythonスクリプト。[article about Auto Archiver on bellingcat.com](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/)を参照。
* [Browsertrix Crawler](https://github.com/webrecorder/browsertrix-crawler) - Chromiumベースの高精度なスクレイピングシステムで、複雑かつカスタマイズ可能なブラウザベースのスクレイピングを1つのDockerコンテナで実行できます。*(安定版)*
* [Brozzler](https://github.com/internetarchive/brozzler) - 実際のブラウザ（ChromeまたはChromium）を使用してページと埋め込みURLを取得し、リンクを抽出する分散型ウェブスクレイパー（爬虫）です。*(安定版)*
* [Cairn](https://github.com/wabarc/cairn) - ウェブページを保存するnpmパッケージおよびCLIツールです。*(安定版)*
* [Chronicler](https://github.com/CGamesPlay/chronicler) - 記録と再現機能を備えたウェブブラウザです。*(開発中)*
* [Community Archive](https://www.community-archive.org/) - アーカイブされたTwitterデータを構築するためのツールとリソースを備えたオープンなTwitterデータベースとAPIです。
* [crau](https://github.com/turicas/crau) - ウェブアーカイブとアーカイブの再生を行うための軽量コマンドラインツールです。URLのリストだけが必要です。名前「crau」はブラジル語での「crawl」の発音から来ています。*(安定版)*
* [Crawl](https://git.autistici.org/ale/crawl) - Golangで書かれたシンプルなウェブスクレイパーです。*(安定版)*
* [crocoite](https://github.com/PromyLOPh/crocoite) - ヘッドレスGoogle Chrome／Chromiumを使用してウェブサイトをスクレイピングし、リソース、静的DOMスナップショット、ページスクリーンショットをWARCファイルに保存します。*(開発中)*
* [DiskerNet](https://github.com/DO-SAY-GO/dn) - WARCベースではないツールで、Chromeブラウザに接続し、閲覧したすべてのコンテンツをアーカイブし、オフラインでの再現が可能にします。*(開発中)*
* [F(b)arc](https://github.com/justinlittman/fbarc) - archiving data from [Facebook](https://www.facebook.com/) using the [Graph API](https://developers.facebook.com/docs/graph-api). *(Stable)*向けのA commandline tool and Python library。
* [freeze-dry](https://github.com/WebMemex/freeze-dry) - ページを静的かつ自立したHTMLドキュメントに変換するJavaScriptライブラリ。ブラウザ拡張に有用です。*(開発中)*
* [grab-site](https://github.com/ArchiveTeam/grab-site) - アーカイバーのウェブスクレイパー：WARC出力、すべてのスクレイピングのダッシュボード、動的な無視パターン。*(安定版)*
* [Heritrix](https://github.com/internetarchive/heritrix3/wiki) - オープンソースで拡張可能で、ウェブスケール、アーカイブ品質のウェブスクレイパーです。*(安定版)*
  * [Heritrix Q&A](https://github.com/internetarchive/heritrix3/discussions/categories/q-a) - Heritrixの使用に関する質問や答えを尋ねるためのディスカッションフォーラムです。
  * [Heritrix Walkthrough](https://github.com/web-archive-group/heritrix-walkthrough) - *(開発中)*
* [html2warc](https://github.com/steffenfritz/html2warc) - オフラインデータを1つのWARCファイルに変換するためのシンプルなスクリプトです。*(安定版)*
* [HTTrack](http://www.httrack.com/) - オープンソースのウェブサイトコピーツールです。*(安定版)*
* [monolith](https://github.com/Y2Z/monolith) - ウェブページを1つのHTMLファイルとして保存するためのCLIツールです。*(安定版)*
* [Obelisk](https://github.com/go-shiori/obelisk) - ウェブページを1つのHTMLファイルとして保存するためのGoパッケージおよびCLIツールです。*(安定版)*
* [Scoop](https://github.com/harvard-lil/scoop) - 高精度で、ブラウザベースの、単一ページウェブアーカイブライブラリおよびCLI。ウェブを目の前にするためのツールです。*(安定版)*
* [SingleFile](https://github.com/gildas-lormeau/SingleFile) - Firefox/Chrome向けのブラウザ拡張機能と、完全なページを1つのHTMLファイルとして忠実に保存するCLIツール。*(安定版)*
* [SiteStory](http://mementoweb.github.io/SiteStory/) - ウェブクライアント（ブラウザ）とウェブサーバー間の取引を選別してキャプチャ・保存するトランザクショナルアーカイブ。*(安定版)*
* [Social Feed Manager](https://gwu-libraries.github.io/sfm-ui/) - Twitter、Tumblr、Flickr、Sina Weiboの公開APIからソーシャルメディアコレクションを作成できるオープンソースソフトウェア。*(安定版)*
* [Squidwarc](https://github.com/N0taN3rd/Squidwarc) - ChromeまたはChrome Headlessを直接使用する [open source, high-fidelity, page interacting](http://ws-dl.blogspot.com/2017/07/2017-07-24-replacing-heritrix-with.html) アーカイブスクレイパー。*(開発中)*
* [StormCrawler](http://stormcrawler.net/) - Apache Storm上で低遅延かつスケーラブルなウェブクロールを構築するためのリソースのコレクション。*(安定版)*
* [twarc](https://github.com/DocNow/twarc) - TwitterのJSONデータをアーカイブするためのコマンドラインツールとPythonライブラリ。*(安定版)*
* [WAIL](https://github.com/machawk1/wail) - anyone to preserve and replay web pages; [Python](https://machawk1.github.io/wail/), [Electron](https://github.com/n0tan3rd/wail). *(Stable)*向けのA graphical user interface (GUI) atop multiple web archiving tools intended to be used as an easy way。
* [Warcprox](https://github.com/internetarchive/warcprox) - WARCを書き出すMITM HTTP/Sプロキシ。*(安定版)*
* [WARCreate](http://matkelly.com/warcreate/) - archiving an individual webpage or website to a WARC file. *(Stable)*向けのA [Google Chrome](https://www.google.com/intl/en/chrome/browser/) extension。
* [Warcworker](https://github.com/peterk/warcworker) - Squidwarcに基づくオープンソース・ドッカー化・キュー付き・高精度なウェブアーカイブツールで、シンプルなウェブGUIを備える。*(安定版)*
* [Wayback](https://github.com/wabarc/wayback) - ウェブページをインターネットアーカイブ、archive.today、IPFSなどにスナップショット保存できるツールキット。*(安定及)*
* [Waybackpy](https://github.com/akamhy/waybackpy) - Wayback MachineのSave、CDX、可用性APIをPythonおよびコマンドラインツールで提供。*(安定版)*
* [Web2Warc](https://github.com/helgeho/Web2Warc) - 誰でも簡単に使い、高度にカスタマイズ可能なクロールツールで、自らの小さなウェブアーカイブ（WARC/CDX）を作成できる。*(安定版)*
* [Web Curator Tool](https://webcuratortool.org) - 選別ウェブアーカイブ用のオープンソースワークフロー管理ツール。*(安定版)*
* [WebMemex](https://github.com/WebMemex) - FirefoxおよびChrome向けのブラウザ拡張機能で、訪問したウェブページをアーカイブできる。*(開発中)*
* [Wget](http://www.gnu.org/software/wget/) - オープンソースのファイル取得ツールで [version 1.14 supports writing warcs](http://www.archiveteam.org/index.php?title=Wget_with_WARC_output) を使用。*(安定版)*
* [Wget-lua](https://github.com/alard/wget-lua) - Lua拡張付きのWget。*(安定版)*
* [Wpull](https://github.com/ArchiveTeam/wpull) - Wgetに適合（または再実装/クローン/置き換え/代替）されたウェブダウンローダーおよびクロールツール。*(安定版)*

### 再生

* [InterPlanetary Wayback (ipwb)](https://github.com/oduwsdl/ipwb) - 保存済みウェブアーカイブを再生するツールです。 参照: <https://ipfs.io/>
* [OpenWayback](https://github.com/iipc/openwayback/) - 世界中のウェブアーカイブで使用されているWayback Machineという主要ソフトウェアを開発するためのオープンソースプロジェクト。*(安定版)*
* [PYWB](https://github.com/webrecorder/pywb) - ウェブアーカイブ再現ツールのPython 3実装、時折「Wayback Machine」とも呼ばれる。*(安定版)*
* [Reconstructive](https://oduwsdl.github.io/Reconstructive/) - クライアントサイドで複合的なメメントを再構築するためのService Workerモジュール。リソースリクエストを対応するアーカイブコピーにリダイレクト（JavaScript）
* [ReplayWeb.page](https://webrecorder.net/replaywebpage/) - ローカルおよびリモートのWARCおよびWACZファイルを対象とした、ブラウザベースの完全クライアントサイド再現エンジン。また、Electronベースのデスクトップアプリケーションとしても利用可能。*(安定版)*
* [warc2html](https://github.com/iipc/warc2html) - WARCファイルを静的HTMLに変換し、オフライン閲覧または再ホストに適した形式に変換。

### 検索と発見

* [hyphe](https://github.com/medialab/hyphe) - 研究用途に向けたグラフィカルユーザーインターフェースを備えたウェブクロールツールで、ウェブアクターのリストとそれらの間のリンクマップから構成されたウェブコーパスを作成できる。*(安定版)*
* [Mink](https://github.com/machawk1/Mink) - querying Memento aggregators while browsing and integrating live-archived web navigation. *(Stable)*向けのA [Google Chrome](https://www.google.com/intl/en/chrome/) extension。
* [PANDORÆ](https://github.com/Guillaume-Levrier/PANDORAE) - Solrエンドポイントにプラグインできるデスクトップ研究ソフトウェアで、ウェブアーカイブのクエリ、取得、標準化および視覚的に探索が可能。 *(Stable)*
* [PastPage](https://github.com/nabertronic/pastpage) - ChromeおよびFirefox向けのブラウザ拡張機能で、ウェブページが破損または変更された場合に、Wayback Machineおよびその他のウェブアーカイブを並列で検索して復元。 *(Stable)*
* [playback](https://github.com/wabarc/playback) - searching archived webpages from [Internet Archive](https://web.archive.org), [archive.today](https://archive.today), [Memento](http://timetravel.mementoweb.org) and beyond. *(In Development)*向けのA toolkit。
* [SecurityTrails](https://securitytrails.com/) - WHOISおよびDNS記録を対象としたウェブベースのアーカイブ。REST APIは無料で提供。
* [Tempas v1](http://tempas.L3S.de/v1) - [Delicious](https://en.wikipedia.org/wiki/Delicious_(website) タグに基づく時系列ウェブアーカイブ検索。*(安定版)*
* [Tempas v2](http://tempas.L3S.de/v2) - 1996年から2013年のドイツウェブサイトから抽出されたリンクとアンカーテキストをもとにした時系列ウェブアーカイブ検索（結果はドイツページに限定されない、たとえば [Obama@2005-2009 in Tempas](http://tempas.l3s.de/v2/query?q=obama&from=2005&to=2009) なども含まれる）。*(安定版)*
* [webarchive-discovery](https://github.com/ukwa/webarchive-discovery) - WARCおよびARCの全文インデックスと検索ツール。以下に示されたインデックスを使用できる関連ツールも多数含まれる。 *(Stable)*
* [Shine](https://github.com/ukwa/shine) - 研究者と共同開発されたウェブアーカイブ探索UIのプロトタイプで、[Big UK Domain Data for the Arts and Humanities project](https://buddah.projects.history.ac.uk/)の一環として制作されました。*(安定版)*
* [SolrWayback](https://github.com/netarchivesuite/solrwayback) - Javaを用いたバックエンドとVUE JSを用いたフロントエンドのプロジェクト。自由テキスト検索と内蔵された再生エンジンを備え、WARCファイルはWarc-Indexerでインデックスされる。ウェブアプリケーションには、全体のウェブアーカイブに対して利用可能なデータ可視化ツールおよびデータエクスポートツールが多数備わっている。[SolrWayback 4 Bundle release](https://github.com/netarchivesuite/solrwayback/releases) には、すべてのソフトウェアと依存関係が組み込まれた即時インストール可能なソリューションが含まれている。
* [Warclight](https://github.com/archivesunleashed/warclight) - Project Blacklightに基づくRailsエンジンで、WARCおよびARC形式に保存されたウェブアーカイブの検索が可能。 *(In Development)*
* [Wasp](https://github.com/webis-de/wasp) - 個人用 [web archive and search system](http://ceur-ws.org/Vol-2167/paper6.pdf) の完全に機能するプロトタイプ。 *(開発中)*
* ほかのフロントエンド候補は `webarchive-discovery` wikiの[こちら](https://github.com/ukwa/webarchive-discovery/wiki/Front-ends).

### ユーティリティ

* [ArchiveTools](https://github.com/recrm/ArchiveTools) - WARCファイルを抽出し、操作するためのツール集（Python）。
* [bagnabit2warc](https://github.com/internetarchive/bagnabit2warc) - ZIPに保存された [bag-nabit](https://github.com/harvard-lil/bag-nabit) データセットをフルコンテンツのWARCに変換。
* [cdx-toolkit](https://pypi.org/project/cdx-toolkit/) - CDXインデックスの照会やWARCのサブセット抽出を行うためのライブラリおよびCLI。Common Crawlの異常なクロール構造を抽象化。 *(Stable)*
* [duckdb_warc](https://github.com/midwork-finds-jobs/duckdb_warc) - WARCファイルをクエリするためのDuckDB拡張。 *(In Development)*
* [duckdb-web-archive-cdx](https://github.com/midwork-finds-jobs/duckdb-web-archive) - Internet ArchiveおよびCommonCrawlのCDX APIをSQLから直接クエリするためのDuckDB拡張。 *(In Development)*
* [Go Get Crawl](https://github.com/karust/gogetcrawl) - [Wayback Machine](https://web.archive.org/) と [Common Crawl](https://commoncrawl.org/) を使用してウェブアーカイブデータを抽出。 *(安定版)*
* [gowarcserver](https://github.com/nlnwa/gowarcserver) - -0000 をベースにしたキャプチャインデックス（CDX）とWARCレコードサーバー。WARCファイルのインデックスと提供に使用（Go）。 [BadgerDB](https://github.com/dgraph-io/badger)
* [har2warc](https://github.com/webrecorder/har2warc) - HTTPアーカイブ（HAR）→ウェブアーカイブ（WARC）フォーマットへの変換（Python）。

* [httpreserve.info](https://httpreserve.info) - ウェブページの状態を返すサービスまたはインターネットアーカイブに保存するサービス。HTTPreserveは、よく知られたショートリンクサービスの区別を可能にする。GETによりブラウザまたはCURLからJSONを返す。インターネットアーカイブ内の最初および最終日付を用いてウェブサイトを記述し、その範囲を用いて強固なリンクの構築を示す。 (Golang)。 *(Stable)*
* [HTTPreserve linkstat](https://github.com/httpreserve/linkstat) - [httpreserve.info](https://httpreserve.info) のコマンドライン実装でウェブページの状態を記述。スクリプト化が容易で、JQなどのツールでクエリ可能。HTTPreserve Linkstatは、[archive.org](https://archive.org/) 上の現在の状態、最も古いおよび最も新しいリンクを記述。（Golang）。 *(安定版)*
* [Internet Archive Library](https://github.com/jjjake/internetarchive) - interacting directly with [archive.org](https://archive.org). (Python). *(Stable)*向けのA command line tool and Python library。
* [httrack2warc](https://github.com/nla/httrack2warc) - HTTrackアーカイブをWARCフォーマットに変換（Java）。
* [MementoMap](https://github.com/oduwsdl/MementoMap) - ウェブアーカイブの収蔵内容を要約するツール（Python）。 *(In Development)*
* [MemGator](https://github.com/oduwsdl/MemGator) - Memento AggregatorのCLIおよびサーバー（Golang）。 *(Stable)*
* [node-cdxj](https://github.com/N0taN3rd/node-cdxj) - [CDXJ](https://github.com/oduwsdl/ORS/wiki/CDXJ) ファイルパーサー（Node.js）。*(安定版)*
* [OutbackCDX](https://github.com/nla/outbackcdx) - OpenWayback, PyWb and [Heritrix](https://github.com/ukwa/ukwa-heritrix/blob/master/src/main/java/uk/bl/wap/modules/uriuniqfilters/OutbackCDXRecentlySeenUriUniqFilter.java). *(Stable)*向けのRocksDB-based capture index (CDX) server supporting incremental updates and compression. Can be used as backend。
* [py-wasapi-client](https://github.com/unt-libraries/py-wasapi-client) - WASAPIからクロールデータをダウンロードするためのコマンドラインアプリケーション（Python）。 *(Stable)*
* [The Unarchiver](https://theunarchiver.com/) - 多数のアーカイブフォーマット（WARCを含む）のコンテンツをファイルシステムに抽出するプログラム。The Archive Browserの無料バージョン（macOS専用、プロプライエタリアプリ）。
* [tikalinkextract](https://github.com/httpreserve/tikalinkextract) - Apache Tikaが解析可能なドキュメントタイプのフォルダからハイパーリンクを抽出し、ウェブアーカイブのシードとして利用（Golang、Apache Tikaサーバー）。 *(In Development)*
* [wasapi-downloader](https://github.com/sul-dlss/wasapi-downloader) - WASAPIからクロールデータをダウンロードするためのJavaコマンドラインアプリケーション。 *(Stable)*
* [Warchaeology](https://nlnwa.github.io/warchaeology/) - WARCファイルの検証、操作、重複除去、検証を行うためのツール集。 *(Stable)*
* [warcdb](https://github.com/florents-Tselai/warcdb) - WARCファイルをSQLiteデータベースにインポートするためのコマンドラインユーティリティ（Python）。 *(Stable)*
* [warcbench](https://github.com/harvard-lil/warcbench) - WARC（Web ARChive）ファイルからデータを探索・分析・変換・再組み合わせ・抽出するためのツール
* [warcdedupe](https://gitlab.com/taricorp/warcdedupe) - WARCの重複除去ツール（およびWARCライブラリ）．（開発中）
* [WARC Explorer](http://webdata.nb.no/warc-explorer/) - WARCファイルおよび記録に対するブラウザベースのインスペクタ（クライアントサイド）
* [warc-safe](https://github.com/natliblux/warc-safe) - WARCファイル内のウイルスおよびNSFWコンテンツの自動検出
* [WarcPartitioner](https://github.com/helgeho/WarcPartitioner) - MIMEタイプおよび年別にWARCファイルをパーティション（分割）．（安定版）
* [warcrefs](https://github.com/arcalex/warcrefs) - Webアーカイブの重複除去ツール．（安定版）
* [webarchive-indexing](https://github.com/ikreymer/webarchive-indexing) - Hadoop、EMRまたはローカルファイルシステム上でWARC/ARCファイルの大量インデックス作成に使うツール
* [wikiteam](https://github.com/WikiTeam/wikiteam) - Wikiのダウンロードおよび保存に使うツール．（安定版）

### WARC入出力ライブラリ

* [FastWARC](https://github.com/chatnoir-eu/chatnoir-resiliparse) - 高パフォーマンスのWARCパーサーライブラリ（Python）
* [HadoopConcatGz](https://github.com/helgeho/HadoopConcatGz) - Concatenated GZIP Files (and `*.warc.gz`). *(Stable)*向けのA Splitable Hadoop InputFormat。
* [jwarc](https://github.com/iipc/jwarc) - タイプセーフなAPIでWARCファイルを読み書きする（Java）
* [Jwat](https://github.com/netarchivesuite/jwat) - WARC/ARC/GZIPファイルの読み書きおよび検証に使うライブラリ（Java）．（安定版）
* [Jwat-Tools](https://github.com/netarchivesuite/jwat-tools) - WARC/ARC/GZIPファイルの読み書きおよび検証に使うツール（Java）．（安定版）
* [node-warc](https://github.com/N0taN3rd/node-warc) - WARCファイルを解析するか、WARCファイルを作成するには、いずれも [Electron](https://electron.atom.io/) または [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface)（Node.js）を使用できます。*(安定版)*
* [Sparkling](https://github.com/internetarchive/Sparkling) - インターネットアーカイブのSparklingデータ処理ライブラリ．（安定版）
* [Unwarcit](https://github.com/emmadickson/unwarcit) - WARCおよびWACZファイルをunzipするためのコマンドラインインターフェース（Python）
* [warc](https://github.com/jedireza/warc) - Rustで書かれたWARCファイルの読み書き用ライブラリ．（安定版）
* [Warcat](https://github.com/chfoo/warcat) - Web ARChive（WARC）ファイルを扱うためのツールおよびライブラリ（Python）．（安定版）
* [Warcat-rs](https://github.com/chfoo/warcat-rs) - Web ARChive（WARC）ファイルを扱うためのコマンドラインツールおよびRustライブラリ．（開発中）
* [warcio](https://github.com/webrecorder/warcio) - WARC/ARCライブラリで高速なウェブアーカイブIOを実現するストリーミングライブラリ（Python）．（安定版）
* [warctools](https://github.com/internetarchive/warctools) - ARCおよびWARCファイルを扱うためのライブラン（Python）
* [webarchive](https://github.com/richardlehane/webarchive) - ARCおよびWARCウェブアーカイブフォーマット向けのGolangリーダー（Golang）

### 分析

* [Archives Research Compute Hub](https://github.com/internetarchive/arch) - Archive-Itウェブアーカイブコレクションの分散計算分析を行うウェブアプリケーション。 *(安定版)*
* [ArchiveSpark](https://github.com/helgeho/ArchiveSpark) - Webアーカイブ向けのApache Sparkフレームワーク（Apache Sparkを用いたものに限らず）で、データ処理、抽出、導出を容易に実現。 *(安定版)*
* [Archives Unleashed Notebooks](https://github.com/archivesunleashed/notebooks) - Archives Unleashed Toolkitでウェブアーカイブを操作するノートブック、およびArchives Unleashed Toolkitによって生成された導出データ。 *(安定版)*
* [Archives Unleashed Toolkit](https://github.com/archivesunleashed/aut) - Apache Sparkを用いたウェブアーカイブ分析を行うオープンソースプラットフォーム。 *(安定版)*
* [Common Crawl Columnar Index](https://commoncrawl.org/tag/columnar-index/) - SQLクエリ可能なインデックス、CDX情報および言語分類を含む。 *(安定版)*
* [Common Crawl Web Graph](https://commoncrawl.org/category/web-graph/) - ウェブのホストまたはドメインレベルのグラフ、およびランキング情報。 *(安定版)*
* [Common Crawl Jupyter notebooks](https://github.com/commoncrawl/cc-notebooks) - Common Crawlのさまざまなデータセットを用いたノートブックのコレクション。 *(安定版)*
* [Tweet Archvies Unleashed Toolkit](https://github.com/archivesunleashed/twut) - Apache Sparkを用いた、行ごとのJSON形式のTwitterアーカイブ分析を行うオープンソースツールキット。 *(開発中)*
* [Web Data Commons](http://webdatacommons.org/) - Common Crawlから抽出された構造化データ。 *(安定版)*

### 品質保証

* [Chrome Check My Links](https://chromewebstore.google.com/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf) - ブラウザ拡張機能：より多くのオプションを備えたリンクチェックツール。
* [Chrome link checker](https://chromewebstore.google.com/detail/link-checker/aibjbgmpmnidnmagaefhmcjhadpffaoi) - ブラウザ拡張機能：基本的なリンクチェックツール。
* [Chrome link gopher](https://chromewebstore.google.com/detail/bpjdkodgnbfalgghnbeggfbfjpcfamkf/publish-accepted?hl=en-US&gl=US) - ブラウザ拡バージョン：ページ内のリンクを収集するツール。
* [Chrome Open Multiple URLs](https://chromewebstore.google.com/detail/open-multiple-urls/oifijhaokejakekmnjmphonojcfkpbbh?hl=de) - ブラウザ拡張機能：複数のURLを開き、テキストからURLを抽出する。
* [Chrome Revolver](https://chromewebstore.google.com/detail/revolver-tabs/dlknooajieciikpedpldejhhijacnbda) - ブラウザ拡張機能：ブラウザのタブを切り替えられる。
* [FlameShot](https://github.com/flameshot-org/flameshot) - Ubuntuでのスクリーンキャプチャと注釈。
* [PlayOnLinux](https://www.playonlinux.com/en/) - Ubuntu上でXenuおよびNotepad++を実行するための環境。
* [PlayOnMac](https://www.playonmac.com/en/) - macOS上でXenuおよびNotepad++を実行するための環境。
* [Windows Snipping Tool](https://support.microsoft.com/en-gb/help/13776/windows-use-snipping-tool-to-capture-screenshots) - Windowsの標準機能による部分スクリーンキャプチャと注釈。macOSではCommand + Shift + 4（部分スクリーンキャプチャのキーボードショートカット）を使用可能です。
* [WineBottler](http://winebottler.kronenberg.org/) - macOS上でXenuおよびNotepad++を実行するための環境。
* [xDoTool](https://github.com/jordansissel/xdotool) - Ubuntu上でクリック自動化。
* [Xenu](http://home.snafu.de/tilman/xenulink.html) - Windows用のデスクトップリンクチェックツール

### キュレーション

* [Zotero Robust Links Extension](https://robustlinks.mementoweb.org/zotero/) - ウェブアーカイブの選定・整理を支援するツールです。 参照: <https://www.zotero.org/> / <https://github.com/lanl/Zotero-Robust-Links-Extension> / <https://github.com/leonkt/zotero-memento>

## コミュニティリソース

### ほかのAwesomeリスト

* [Web Archiving Community](https://github.com/ArchiveBox/ArchiveBox/wiki/Web-Archiving-Community)
* [Awesome Memento](https://github.com/machawk1/awesome-memento)
* [The WARC Ecosystem](http://www.archiveteam.org/index.php?title=The_WARC_Ecosystem)
* [The Web Crawl section of COPTR](http://coptr.digipres.org/Category:Web_Crawl)

### ブログと研究

* [IIPC Blog](https://netpreserveblog.wordpress.com/)
* [Web Archiving Roundtable](https://webarchivingrt.wordpress.com/) - ウェブアーカイブラウンドテーブルの unofficial ブログ。[Society of American Archivists](https://www2.archivists.org/) のメンバが運営しています。
* [The Web as History](https://www.uclpress.co.uk/products/84010) - オープンソースの書籍でウェブアーカイブ研究の概念的概観および複数の事例研究を提供
* [WS-DL Blog](https://ws-dl.blogspot.com/) - ウェブ科学およびデジタルライブラリ研究グループが、さまざまなウェブアーカイブ関連トピック、学術的な研究、および学術旅行報告についてブログ記事を公開
* [DSHR's Blog](https://blog.dshr.org/) - デイビッド・ローゼンタールが、デジタル保存分野における研究のレビューと要約を行う
* [UK Web Archive Blog](https://blogs.bl.uk/webarchive/)
* [Common Crawl Foundation Blog](https://commoncrawl.org/blog) - [rss](http://commoncrawl.org/blog/rss.xml)

### メーリングリスト

* [Common Crawl](https://groups.google.com/g/common-crawl)
* [IIPC](http://netpreserve.org/about-us/iipc-mailing-list/)
* [OpenWayback](https://groups.google.com/g/openwayback-dev)
* [WASAPI](https://groups.google.com/g/wasapi-community)

### Slack

* [IIPC Slack](https://iipc.slack.com/) - access向けのAsk [@netpreserve](https://twitter.com/NetPreserve?s=20)。
* [Archives Unleashed Slack](https://archivesunleashed.slack.com/) - access to a researcher group of people working with web archives向けの[Fill out this request form](http://slack.archivesunleashed.org/)。
* [Archivers Slack](https://archivers.slack.com) - archiving projects run in affiliation with and 向けの to a multi-disciplinary effort。 [Invite yourself](https://archivers-slack.herokuapp.com/) [EDGI](https://envirodatagov.org/archiving/) [Data Together](http://datatogether.org/)
* [Common Crawl Foundation Partners](https://ccfpartners.slack.com/) - an invite)向けの(ask greg zat commoncrawl zot org。

### Discord

* [Common Crawl Foundation](https://discord.gg/njaVFh7avF)

### Twitter

* [@commoncrawl](https://twitter.com/commoncrawl) - Common Crawl Foundationの公式ハンドル
* [@NetPreserve](https://twitter.com/NetPreserve) - IIPCの公式ハンドル
* [@WebSciDL](https://twitter.com/WebSciDL) - ODUウェブ科学およびデジタルライブラリ研究グループ
* [#WebArchiving](https://twitter.com/search?q=%23webarchiving)
* [#WebArchiveWednesday](https://twitter.com/hashtag/webarchivewednesday)

## ウェブアーカイブサービス事業者

標準形式（WARCまたはWACZ）でウェブアーカイブをエクスポートできるサービスのみを掲載します。掲載は推薦を意味しないため、各自の要件に基づいて確認・評価してください。

### セルフホスト可能なオープンソース

* [Browsertrix](https://webrecorder.net/browsertrix/) - [Webrecorder](https://webrecorder.net/) から、ソースコードは <https://github.com/webrecorder/browsertrix> に公開されています。
* [Conifer](https://conifer.rhizome.org/) - [Rhizome](https://rhizome.org/) から、ソースコードは <https://github.com/Rhizome-Conifer> に公開されています。

### ホスト型クローズドソース

* [Archive-It](https://archive-it.org/) - ホスト型の商用ウェブアーカイブサービスです。
* [Arkiwera](https://arkiwera.se/wp/websites/)
* [Hanzo](https://www.hanzo.co/chronicle)
* [MirrorWeb](https://www.mirrorweb.com/solutions/capabilities/website-archiving)
* [PageFreezer](https://www.pagefreezer.com/)
* [Smarsh](https://www.smarsh.com/platform/compliance-management/web-archive)

## 公開データ

公開されているWARC、Wayback Machine、CDX APIエンドポイント、各種インデックスなどの一覧です。

* [Common Crawl files](https://data.commoncrawl.org/) - WARCs、CDXファイル、パラクエットURLインデックス、パラクエットホストインデックスなど
* [Common Crawl CDX API](https://index.commoncrawl.org/) - Common CrawlのCDX URLインデックスを検索
* [Dead-Web Index](https://github.com/Crawlora-org/dead-web-index-data) - トップ1000万ドメインの到達可能性ラベル（生きている／ブロッキングされた／死んでいる）および2つのプローブアーム（礼儀正しいHTTPおよびブラウザTLSフィンガープリント）、2026年。CC BY 4、JSONL
* [End of Term Archive](https://eotarchive.org/) - WARCs、CDXファイル、パラクエットURLインデックス
* [Internet Archive Wayback](https://web.archive.org/web/) - IAのウェイバックマシンのベースURL
* [Webrecorder US GovArchive](https://govarchive.us/) - 高精度再現
* [UK Government Web Archive](https://www.nationalarchives.gov.uk/webarchive/) - UKGWAのメインページ
