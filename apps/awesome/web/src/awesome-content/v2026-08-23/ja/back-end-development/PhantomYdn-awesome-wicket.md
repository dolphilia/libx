---
title: "Awesome Wicket"
description: "Wicketを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-PhantomYdn-awesome-wicket-readme-md"
---

# Awesome Wicket

Wicketを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="table-of-contents"></a>

- [基本情報](#generic-info)
- [ライブラリ](#libraries)
  - [WicketStuff](#wicketstuff)
- [ウェブフレームワーク](#web-frameworks)
- [ソリューション](#solutions)
- [IDEプラグインとツール](#ide-plugins-and-tools)

## 基本情報 <a id="generic-info"></a>

- [Apache Wicket](http://wicket.apache.org/) - Wicket公式サイト
- [Wicket on Github](https://github.com/apache/wicket) - Wicket公式ミラー（[GitHub](https://github.com)）
- [Wicket on Twitter](https://twitter.com/apache_wicket) - Wicket公式アカウント
- [Wicket wiki](https://cwiki.apache.org/confluence/display/WICKET/Index) - Wicketの公式Wikiナレッジベース
- [Build With Wicket](https://builtwithwicket.tumblr.com/) - Wicket公式の[Tumblr](https://www.tumblr.com/)アカウント
- [Wicket User Guide](http://ci.apache.org/projects/wicket/guide/7.x/) - Wicket 7.x向けユーザーガイド
- [Wicket JavaDocs](http://ci.apache.org/projects/wicket/apidocs/7.x/index.html) - Wicket 7.x向けJavadoc
- [Wicket in Action](http://wicketinaction.com/) - Wicketに関するブログと書籍

## ライブラリ <a id="libraries"></a>
アプリケーションで利用できるライブラリとコンポーネントの一覧です。

- [JNPM](https://github.com/OrienteerBAP/JNPM) - JS Node Package Manager（NPM）用のJavaライブラリ。NPMパッケージの透明な取得とその必要ファイルの提供を可能にする。
- [wicket-akka](https://github.com/l0rdn1kk0n/wicket-akka) - WicketへのAkkaの統合
- [wicket-autowire](https://github.com/wicket-acc/wicket-autowire) - 指定されたアノテーションに基づいてコンポーネントを自動生成することで、開発を簡単にする。
- [wicket-bootstrap](https://github.com/l0rdn1kk0n/wicket-bootstrap) - WicketへのBootstrap Toolkitの統合
- [wicket-clientside-logging](https://github.com/l0rdn1kk0n/wicket-clientside-logging) - クライアント側でのJavaScriptログ記録を可能にするヘルパーライブラリ。すべてのログメッセージはサーバー側にも保存される。
- [wicket-console](https://github.com/PhantomYdn/wicket-console) - サーバー側でJSスクリプトの実行を可能にする軽量AJAX対応ウェブコンソール
- [wicket-crudifier](https://github.com/premium-minds/wicket-crudifier) - WicketでCRUDを簡単に作成できるライブラリ
- [wicket-dnd](https://github.com/svenmeier/wicket-dnd) - Wicket用の汎用ドラッグ＆ドロップフレームワーク
- [wicket-extjs-integration](https://github.com/onehippo/wicket-extjs-integration) - WicketとExtJSの統合。イベント処理を含み、Java-APIがJS-APIにできるだけ近いように設計することを重視
- [wicket-fullcalendar](https://github.com/42Lines/wicket-fullcalendar) - Wicketとの統合。[FullCalendar](http://fullcalendar.io/) javascript ライブラリ
- [wicket-jersey](https://github.com/OrienteerBAP/wicket-jersey) - Wicketで[Jersey2](https://jersey.github.io/)のJAX-RSリソースを実行するアダプター
- [wicket-jquery-selectors](https://github.com/l0rdn1kk0n/wicket-jquery-selectors) - JQueryとWicketを扱うためのライブラリ
- [wicket-jquery-ui](http://www.7thweb.net/wicket-jquery-ui/) - Wicket 1.5.x、Wicket 6.xおよびWicket7.xでのJQuery UI統合
- [wicket-modelfactory](http://wicketeer.org/wicket-modelfactory/) - Wicket-modelfactoryは、型安全かつリファクタリング安全にWicket PropertyModelsを作成するAPI
- [wicket-mustache](https://github.com/l0rdn1kk0n/wicket-mustache) - マストアチとWicketを扱うための特別なパネルおよび関連ユーティリティを提供
- [wicket-orientdb](https://github.com/OrienteerDW/wicket-orientdb) - Wicketと[OrientDB](http://orientdb.com/)の統合
- [wicket-requirejs](https://github.com/l0rdn1kk0n/wicket-requirejs) - require.jsをWicketアプリケーションで使用するためのヘルパー
- [wicket-shieldui](https://github.com/shieldui/wicket-shieldui) - [Shield UI](http://www.shieldui.com/) JavaScriptライブラリの利用を促進するコンポーネント
- [wicket-source](https://github.com/42Lines/wicket-source) - ブラウザのHTMLから元のWicketコンポーネントにクリックで移動できるようにすることで、Wicket開発を加速
- [wicket-spring-boot](https://github.com/MarcGiffing/wicket-spring-boot) - Spring Bootを使い、最小限の設定でWicketプロジェクトを容易に作成
- [wicket-webjars](https://github.com/l0rdn1kk0n/wicket-webjars) - Wicket用のwebjarsの統合
- [wicked-charts](https://github.com/thombergs/wicked-charts) - Javaベースのウェブアプリケーション向けの美しいインタラクティブなJavaScriptチャート

### WicketStuff
[WicketStuff](https://github.com/wicketstuff/core)ベースのライブラリです。

- [Annotation](https://github.com/wicketstuff/core/wiki/Annotation) - Javaアノテーションを用いてページを宣言的にマウントする
- [Annotation Event Dispatcher](https://github.com/wicketstuff/core/tree/master/annotationeventdispatcher-parent) - Wicketにおけるイベント処理をアノテーションで改善
- [Async Tasks](https://github.com/wicketstuff/core/wiki/Async-tasks) -  Wicketアプリケーション内でバックグラウンドプロセスを制御
- [Autocomplete TagIt](https://github.com/wicketstuff/core/wiki/Autocomplete-TagIt) - [TagIt](http://aehlke.github.com/tag-it/) との統合
- [BrowserId](https://github.com/wicketstuff/core/wiki/BrowserId) - [Mozilla Persona](https://login.persona.org/) との統合
- [Console](https://github.com/wicketstuff/core/wiki/Console) - 実行時（ランタイム）にコードを動的に実行できるようにする
- [Context](https://github.com/wicketstuff/core/wiki/Context) - @Contextアノテーションを用いて、コンポーネント、モデル、モデルのオブジェクトを宣言的に検索できる
- [Dashboard](https://github.com/wicketstuff/core/tree/master/dashboard-parent) - Wicket向けダッシュボードのサポートにより、ウィジェットで必要な情報を迅速にアクセス可能
- [DataStores](https://github.com/wicketstuff/core/wiki/DataStores) - 様々な [IDataStore](https://github.com/apache/wicket/blob/master/wicket-core/src/main/java/org/apache/wicket/pageStore/IDataStore.java) の実装を収録：[MemCached](http://memcached.org/), [Apache Cassandra](http://cassandra.apache.org/), [Redis](http://redis.io/), [Hazelcast](http://www.hazelcast.com/)
- [Datatable Autocomplete](https://github.com/wicketstuff/core/wiki/Datatable-Autocomplete) - 大規模データセットに対して高速なAJAX検索を可能にする、 [Trie](http://en.wikipedia.org/wiki/Trie) というデータ構造を提供
- [DataTables](https://github.com/wicketstuff/core/wiki/DataTables) - [DataTables jQuery](http://www.datatables.net/) プラグイン統合
- [Editable Grid](https://github.com/wicketstuff/core/wiki/Editable-Grid) - ソート・フィルタリング・ページングをサポートし、追加・編集・削除機能を一括で提供するグリッドコンポーネント
- [Eidogo](https://github.com/wicketstuff/core/wiki/Eidogo) - GOゲーム（別名baduk, igo, weiqi）用のSGFビューアとエディタ
- [Facebook](https://github.com/wicketstuff/core/wiki/Facebook) - [Facebook](https://facebook.com) ソーシャルプラグインをWicketで使用するためのWicketコンポーネントと行動を提供
- [Fast Serializer](https://github.com/wicketstuff/core/wiki/FastSerializer) - Fast 1.x (FST) ライブラリを用いたWicketのシリアライザ
- [Fast Serializer 2](https://github.com/wicketstuff/core/wiki/FastSerializer2) - Fast 2.x (FST) ライブラリを用いた Wicket シリアライザ
- [GMap3](https://github.com/wicketstuff/core/wiki/Gmap3) - Google Maps v3 を Wicket アプリケーション内で使用するためのコンポーネント
- [Google AppEngine Initializer](https://github.com/wicketstuff/core/wiki/Google-AppEngine-Initializer) - Wicket の org.apache.wicket.IInitializer の実装で、Google AppEngine で実行可能な Wicket アプリケーションを自動設定
- [Google Charts](https://github.com/wicketstuff/core/wiki/GoogleCharts) - [Google Chart API](https://developers.google.com/chart/) を使用してチャートの作成を可能にする
- [HTML5](https://github.com/wicketstuff/core/wiki/Html5) - Wicket が HTML5 の新しい機能を使用するためのサポートを提供するクラス群
- [HTML Compressor](https://github.com/wicketstuff/core/wiki/Htmlcompressor) - Wicketと[htmlcompressor](http://code.google.com/p/htmlcompressor)を統合するライブラリ
- [InMethodGrid](https://github.com/wicketstuff/core/wiki/InMethodGrid) - データグリッドコンポーネント
- [Java EE Inject](https://github.com/wicketstuff/core/wiki/Java-EE-Inject) - Java EE 5 のリソースインジェクションを介した統合を提供
- [JEE Web Integration](https://github.com/wicketstuff/core/wiki/JEE-Web-Integration) - Wicket HTML ページに Servlet、JSP および JSF コンテンツを埋め込む
- [JqPlot Plugin Integration](https://github.com/wicketstuff/core/wiki/JqPlot-Plugin-Integration) - 多くの機能を備えた美しい線グラフ、棒グラフ、円グラフを生成
- [JWicket UI Toolip](https://github.com/wicketstuff/core/wiki/jWicket-UI-Tooltip) - Wicket コンポーネントに jQuery UI ツールチップを提供するための JavaScript を生成
- [Kryo Serializer](https://github.com/wicketstuff/core/wiki/Kryo-Serializer) - Wicket 用の org.apache.wicket.serialize.ISerializer の実装
- [Kryo2 Serializer](https://github.com/wicketstuff/core/tree/master/serializer-kryo2) - Wicket 用の org.apache.wicket.serialize.ISerializer の実装
- [LazyModel](https://github.com/wicketstuff/core/wiki/LazyModel) - 型安全なモデルの実装
- [Lightbox2 Plugin Integration](https://github.com/wicketstuff/core/wiki/Lightbox2-Plugin-Integration) - 現在のページの上に画像をオーバーレイするためのシンプルかつ非侵襲的なスクリプト
- [Logback](https://github.com/wicketstuff/core/wiki/Logback) - クラスのホームページで、wicketと[logback](http://logback.qos.ch/)の使用を支援するもの。
- [MBeanView](https://github.com/wicketstuff/core/wiki/MBeanView) - JMXパネルにより、アプリケーションのMBeansを表示および操作できる。
- [Minis](https://github.com/wicketstuff/core/wiki/Minis) - 個別のコンポーネントや動作が小さすぎて独自のプロジェクトを構築する価値がないもの。
- [ModalX](https://github.com/wicketstuff/core/wiki/ModalX) - WicketのModalWindow機能を軽量に拡張したもので、標準化されたMessageBoxクラスを提供し、Modalダイアログの定義を容易に可能にする。
- [OSGI](https://github.com/wicketstuff/core/wiki/Osgi) - OSGi環境でWicketを使用できるようにする。
- [Open Layers 3](https://github.com/wicketstuff/core/tree/master/openlayers3-parent) - Wicketアプリケーションにインタラクティブな地図を追加するためのコンポーネントを提供する。
- [POI](https://github.com/wicketstuff/core/wiki/POI) - WicketプロジェクトとApache POIを統合する。
- [Progressbar](https://github.com/wicketstuff/core/wiki/Progressbar) - Wicketにプログレスバーのコンポーネの提供。
- [Push](https://github.com/wicketstuff/core/wiki/Push) - WicketアプリケーションにおけるReverse AJAXのサポートを提供し、Webブラウザに部分的なWebページの更新を「プッシュ」できるようにする。
- [Scala Extensions](https://github.com/wicketstuff/core/wiki/ScalaExtensions) - Scalaプログラミング言語を使用する際のWicketモデルの構文を改善する。
- [Select2](https://github.com/wicketstuff/core/tree/master/select2-parent) - [Select2](http://ivaynberg.github.com/select2)JavaScriptライブラリを活用したApache Wicketコンポーネントを提供し、Ajaxによる選択フィルタ、カスタムレンダリングなどを提供するセレクトボックスを構築できる。
- [Servlet Container Authentication and Authorization](https://github.com/wicketstuff/core/wiki/Servlet-Container-Authentication-and-Authorization) - wicket-auth-rolesとServlet 3セキュリティコンテナの統合を簡便に可能にする。
- [Spring Reference](https://github.com/wicketstuff/core/wiki/SpringReference) - wicketウェブアプリケーションとSpringを統合するのに使える。
- [Stateless](https://github.com/wicketstuff/core/tree/master/stateless-parent) - Wicket向けにいくつかのコンポーネントを追加し、より包括的なステートレス機能を提供する。
- [TinyMCE Integration](https://github.com/wicketstuff/core/wiki/TinyMCE-Integration) - よく知られたTinyMCE WYSIWYGエディタをWicketに統合する。
- [Twitter](https://github.com/wicketstuff/core/wiki/Twitter) - Twitterウィケットコンポーネントと動作を含み、Twitterウィジェットを使用するためのもの。
- [UrlFragment](https://github.com/wicketstuff/core/tree/master/urlfragment-parent) - これにより、ブックマーク可能なAJAX機能を構築しつつ、バックボタンのサポートも可能にする。
- [WHighCharts](https://github.com/wicketstuff/wiquery-highcharts) - HighChartsに対するWiQueryバインディングを提供。
- [Whiteboard](https://github.com/wicketstuff/core/wiki/Whiteboard) - 任意のウィケットアプリケーションに統合可能な白板を提供。
- [wicket-foundation](https://github.com/wicketstuff/core/tree/master/wicket-foundation) - Wicketと[Zurb Foundation](http://foundation.zurb.com/)を統合。
- [Wicket Rest Annotations](https://github.com/wicketstuff/core/tree/master/wicketstuff-restannotations-parent) - REST API/サービスをSpring MVCや標準JAX-RSと同様の方法で実装できる特別なリソースクラスとアノテーションを提供。
- [WiQuery](https://github.com/wicketstuff/wiquery) - jQueryおよびjQuery UIとのWicketの統合。
- [WqPlot](https://github.com/wicketstuff/wiquery-jqplot) - JqPlotに対するWiQueryバインディングを提供。

## ウェブフレームワーク <a id="web-frameworks"></a>
システムを容易かつ円滑に構築できる、Wicket上のウェブフレームワークです。

- [Apache Isis](https://isis.apache.org/) - Javaでドメインドリブンアプリケーションを迅速に開発できるフレームワーク。
- [BrixCMS](http://www.brixcms.org/) - WicketベースのCMS（おそらく開発終了）。
- [Hippo CMS](http://www.onehippo.com/en) - 企業がコンテンツパフォーマンスメトリクスに迅速に反応することで、オンラインビジネス戦略を継続的に改善できるようにする。
- [Nocket](https://github.com/Nocket/nocket) - WicketベースのNaked Objectsフレームワーク。
- [NoWicket](http://invesdwin.de/nowicket/) - 複雑なウェブサイトでWicketの定型コードを減らせるNaked Objectsフレームワーク。
- [Orienteer](https://github.com/OrienteerDW/Orienteer) - Wicketおよび[OrientDB](http://orientdb.com/)の上に構築されたウェブフレームワークで、自らのCRM、CMS、ERP、モバイルアプリのバックエンド、あるいは一般的なサイトを構築できる。
- [Vuecket](https://github.com/OrienteerBAP/vuecket) - VueJSとWicketを統合したウェブフレームワークで、両方とも最も自然な方法を提供。
- [Wicketopia](https://github.com/jwcarman/Wicketopia) - Wicket用の迅速アプリケーション開発（RAD）ライブラリ

## ソリューション <a id="solutions"></a>
Wicketおよび派生[ウェブフレームワーク](#web-frameworks)を基盤とするエンドツーエンドのソリューションです。

- [eFaps](http://www.efaps.org/) - 構成可能なERP実装のベースとなるモジュールとアプリケーションの一覧
- [eHour](https://ehour.nl/index.phtml) - オープンソースの時間管理ツール
- [Estatio](https://github.com/estatio/estatio) - Apache IsisとWicketに基づいたオープンソースの不動産管理システム
- [GeoServer](https://github.com/geoserver/geoserver) - Javaで書かれたオープンソースソフトウェアサーバーで、ユーザーが地理空間データを共有・編集できる
- [NextReports](http://www.next-reports.com/) - スマートなビジネスレポート
- [Orienteer](https://github.com/OrienteerDW/Orienteer) - データウェアハウス、CRM、ERP、アプリケーションやサイトのバックエンドシステムなど、ビジネスアプリの実装に用いられるオープンソースビジネスアプリプラットフォーム
- [ProjectForge](https://www.projectforge.org/) - プロジェクト管理用のオープンソースソフトウェア
- [Yes Cart](https://github.com/inspire-software/yes-cart) - 純粋な電子商取引プラットフォーム

## IDEプラグインとツール <a id="ide-plugins-and-tools"></a>

- [qwickie](https://marketplace.eclipse.org/content/qwickie) - [Eclipse](http://www.eclipse.org/)用のJava WebフレームワークWicketのプラグイン
- [WicketForge](https://github.com/minman/wicketforge) - Apache Wicketを用いたアプリケーション開発を支援する[IntelliJ IDEA](https://www.jetbrains.com/idea/)用のIDEプラグイン

# ライセンス <a id="license"></a>

 [![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
