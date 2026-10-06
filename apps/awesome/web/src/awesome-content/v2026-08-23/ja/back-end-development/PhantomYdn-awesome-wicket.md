---
title: Awesome Wicket
description: Apache Wicketの公式資料、ライブラリ、WicketStuffコンポーネント、アプリケーションフレームワーク、ソリューション、IDEツール。
licenseSource: github-PhantomYdn-awesome-wicket-readme-md
---
# Awesome Wicket

[Apache Wicket](http://wicket.apache.org)は、サーバー側のJavaウェブアプリケーション向けの、コンポーネント指向のオープンソースフレームワークです。公式ドキュメント、ライブラリとWicketStuffのコンポーネント、フレームワーク、完成したアプリケーション、IDEツールをまとめています。

## 基本情報 <a id="generic-info"></a>

- [Apache Wicket](http://wicket.apache.org/) - Wicketの公式サイト。
- [GitHub上のWicket](https://github.com/apache/wicket) - [GitHub](https://github.com)上のWicket公式ミラー。
- [Twitter上のWicket](https://twitter.com/apache_wicket) - Wicketの公式アカウント。
- [WicketのWiki](https://cwiki.apache.org/confluence/display/WICKET/Index) - Wicketの公式ナレッジベース。
- [Build With Wicket](https://builtwithwicket.tumblr.com/) - Wicketの公式[Tumblr](https://www.tumblr.com/)アカウント。
- [Wicketユーザーガイド](http://ci.apache.org/projects/wicket/guide/7.x/) - Wicket 7.x向けユーザーガイド。
- [WicketのJavadoc](http://ci.apache.org/projects/wicket/apidocs/7.x/index.html) - Wicket 7.x向けJavadoc。
- [Wicket in Action](http://wicketinaction.com/) - Wicketに関するブログと書籍。

## ライブラリ <a id="libraries"></a>
Wicketアプリケーションで利用できるライブラリとコンポーネントです。

- [JNPM](https://github.com/OrienteerBAP/JNPM) - Node Package Manager（NPM）用のJavaライブラリ。NPMパッケージを透過的に取得し、その中の必要なファイルを配信するWicketリソースを提供。
- [wicket-akka](https://github.com/l0rdn1kk0n/wicket-akka) - WicketへのAkkaの統合。
- [wicket-autowire](https://github.com/wicket-acc/wicket-autowire) - 指定したアノテーションに基づくコンポーネントの自動生成。
- [wicket-bootstrap](https://github.com/l0rdn1kk0n/wicket-bootstrap) - WicketへのBootstrap Toolkitの統合。
- [wicket-clientside-logging](https://github.com/l0rdn1kk0n/wicket-clientside-logging) - クライアント側のJavaScriptログ記録を可能にし、すべてのログメッセージをサーバー側にも保存。
- [wicket-console](https://github.com/PhantomYdn/wicket-console) - 実行時にサーバー側でJavaScriptを実行する、軽量でAJAX対応のウェブコンソール。
- [wicket-crudifier](https://github.com/premium-minds/wicket-crudifier) - WicketでCRUDインターフェースを作成するライブラリ。
- [wicket-dnd](https://github.com/svenmeier/wicket-dnd) - Wicket用の汎用ドラッグ＆ドロップフレームワーク。
- [wicket-extjs-integration](https://github.com/onehippo/wicket-extjs-integration) - WicketとExtJSの統合。イベント処理に対応し、JavaScript APIに近い設計のJava APIを提供。
- [wicket-fullcalendar](https://github.com/42Lines/wicket-fullcalendar) - [FullCalendar](http://fullcalendar.io/) JavaScriptライブラリとWicketの統合。
- [wicket-jersey](https://github.com/OrienteerBAP/wicket-jersey) - Wicket上で[Jersey2](https://jersey.github.io/)のJAX-RSリソースを実行するアダプター。
- [wicket-jquery-selectors](https://github.com/l0rdn1kk0n/wicket-jquery-selectors) - jQueryとWicketを扱うためのライブラリ。
- [wicket-jquery-ui](http://www.7thweb.net/wicket-jquery-ui/) - Wicket 1.5.x、Wicket 6.x、Wicket 7.xへのjQuery UIの統合。
- [wicket-modelfactory](http://wicketeer.org/wicket-modelfactory/) - 型安全で、リファクタリングに対しても安全にWicket PropertyModelsを作成するAPI。
- [wicket-mustache](https://github.com/l0rdn1kk0n/wicket-mustache) - MustacheとWicketを組み合わせて使うための専用パネルと関連ユーティリティ。
- [wicket-orientdb](https://github.com/OrienteerDW/wicket-orientdb) - Wicketと[OrientDB](http://orientdb.com/)の統合。
- [wicket-requirejs](https://github.com/l0rdn1kk0n/wicket-requirejs) - Wicketアプリケーションでrequire.jsを使うためのヘルパー。
- [wicket-shieldui](https://github.com/shieldui/wicket-shieldui) - [Shield UI](http://www.shieldui.com/) JavaScriptライブラリを使うためのコンポーネント。
- [wicket-source](https://github.com/42Lines/wicket-source) - ブラウザーのHTMLから、ソースコード内の元のWicketコンポーネントへクリックで移動できる機能。
- [wicket-spring-boot](https://github.com/MarcGiffing/wicket-spring-boot) - Spring Bootを使い、最小限の設定でWicketプロジェクトを作成。
- [wicket-webjars](https://github.com/l0rdn1kk0n/wicket-webjars) - Wicketへのwebjarsの統合。
- [wicked-charts](https://github.com/thombergs/wicked-charts) - Javaベースのウェブアプリケーション向けのインタラクティブなJavaScriptチャート。

### WicketStuff
[WicketStuff](https://github.com/wicketstuff/core)を基盤とするライブラリです。

- [Annotation](https://github.com/wicketstuff/core/wiki/Annotation) - Javaアノテーションによるページの宣言的なマウント。
- [Annotation Event Dispatcher](https://github.com/wicketstuff/core/tree/master/annotationeventdispatcher-parent) - Wicketでのアノテーションに基づくイベント処理。
- [Async Tasks](https://github.com/wicketstuff/core/wiki/Async-tasks) - Wicketアプリケーション内のバックグラウンドプロセスを制御。
- [Autocomplete TagIt](https://github.com/wicketstuff/core/wiki/Autocomplete-TagIt) - [TagIt](http://aehlke.github.com/tag-it/)とWicketの統合。
- [BrowserId](https://github.com/wicketstuff/core/wiki/BrowserId) - [Mozilla Persona](https://login.persona.org/)とWicketの統合。
- [Console](https://github.com/wicketstuff/core/wiki/Console) - 実行時にコードを動的に実行する機能。
- [Context](https://github.com/wicketstuff/core/wiki/Context) - @Contextアノテーションによる、コンポーネント、モデル、モデルのオブジェクトの宣言的な検索。
- [Dashboard](https://github.com/wicketstuff/core/tree/master/dashboard-parent) - 必要な情報にウィジェットから素早くアクセスできるWicket用ダッシュボード。
- [DataStores](https://github.com/wicketstuff/core/wiki/DataStores) - [IDataStore](https://github.com/apache/wicket/blob/master/wicket-core/src/main/java/org/apache/wicket/pageStore/IDataStore.java)の各種実装。[MemCached](http://memcached.org/)、[Apache Cassandra](http://cassandra.apache.org/)、[Redis](http://redis.io/)、[Hazelcast](http://www.hazelcast.com/)を利用。
- [Datatable Autocomplete](https://github.com/wicketstuff/core/wiki/Datatable-Autocomplete) - 大規模データセットの高速なAJAX検索に使える[Trie](http://en.wikipedia.org/wiki/Trie)検索構造。
- [DataTables](https://github.com/wicketstuff/core/wiki/DataTables) - [DataTables jQuery](http://www.datatables.net/)プラグインの統合。
- [Editable Grid](https://github.com/wicketstuff/core/wiki/Editable-Grid) - 追加・編集・削除の一体化された機能に加え、ソート・フィルタリング・ページングに対応したグリッドコンポーネント。
- [Eidogo](https://github.com/wicketstuff/core/wiki/Eidogo) - 囲碁（baduk、igo、weiqiとも呼ばれる）用のSGFビューアとエディター。
- [Facebook](https://github.com/wicketstuff/core/wiki/Facebook) - [Facebook](https://facebook.com)ソーシャルプラグインを使うためのWicketコンポーネントとビヘイビア。
- [Fast Serializer](https://github.com/wicketstuff/core/wiki/FastSerializer) - Fast 1.x（FST）ライブラリを使ったWicketシリアライザー。
- [Fast Serializer 2](https://github.com/wicketstuff/core/wiki/FastSerializer2) - Fast 2.x（FST）ライブラリを使ったWicketシリアライザー。
- [GMap3](https://github.com/wicketstuff/core/wiki/Gmap3) - Wicketアプリケーション内でGoogle Maps v3を使うためのコンポーネント。
- [Google AppEngine Initializer](https://github.com/wicketstuff/core/wiki/Google-AppEngine-Initializer) - Google AppEngineで実行できるようにWicketアプリケーションを自動設定する、Wicketのorg.apache.wicket.IInitializerの実装。
- [Google Charts](https://github.com/wicketstuff/core/wiki/GoogleCharts) - [Google Chart API](https://developers.google.com/chart/)を使ったチャートの作成。
- [HTML5](https://github.com/wicketstuff/core/wiki/Html5) - WicketでHTML5の機能を利用できるようにするクラス群。
- [HTML Compressor](https://github.com/wicketstuff/core/wiki/Htmlcompressor) - Wicketと[htmlcompressor](http://code.google.com/p/htmlcompressor)を統合するライブラリ。
- [InMethodGrid](https://github.com/wicketstuff/core/wiki/InMethodGrid) - データグリッドコンポーネント。
- [Java EE Inject](https://github.com/wicketstuff/core/wiki/Java-EE-Inject) - Java EE 5のリソースインジェクションによる統合。
- [JEE Web Integration](https://github.com/wicketstuff/core/wiki/JEE-Web-Integration) - WicketのHTMLページへのServlet、JSP、JSFコンテンツの埋め込み。
- [JqPlot Plugin Integration](https://github.com/wicketstuff/core/wiki/JqPlot-Plugin-Integration) - 豊富な機能を持つ線グラフ・棒グラフ・円グラフの作成。
- [JWicket UI Toolip](https://github.com/wicketstuff/core/wiki/jWicket-UI-Tooltip) - WicketコンポーネントにjQuery UIツールチップを追加するためのJavaScriptを生成。
- [Kryo Serializer](https://github.com/wicketstuff/core/wiki/Kryo-Serializer) - Wicket用のorg.apache.wicket.serialize.ISerializerの実装。
- [Kryo2 Serializer](https://github.com/wicketstuff/core/tree/master/serializer-kryo2) - Wicket用のorg.apache.wicket.serialize.ISerializerの実装。
- [LazyModel](https://github.com/wicketstuff/core/wiki/LazyModel) - 型安全なモデルの実装。
- [Lightbox2 Plugin Integration](https://github.com/wicketstuff/core/wiki/Lightbox2-Plugin-Integration) - 現在のページの上に画像を重ねて表示する、シンプルで操作を妨げないスクリプト。
- [Logback](https://github.com/wicketstuff/core/wiki/Logback) - Wicketと[logback](http://logback.qos.ch/)を組み合わせて使うためのクラス群。
- [MBeanView](https://github.com/wicketstuff/core/wiki/MBeanView) - アプリケーションのMBeansを表示・操作するJMXパネル。
- [Minis](https://github.com/wicketstuff/core/wiki/Minis) - 独立したプロジェクトにするほど大きくない、コンポーネントとビヘイビアのコレクション。
- [ModalX](https://github.com/wicketstuff/core/wiki/ModalX) - WicketのModalWindowの軽量な拡張。統一されたMessageBoxクラスと、モーダルダイアログクラスを定義するための機能を提供。
- [OSGI](https://github.com/wicketstuff/core/wiki/Osgi) - OSGi環境でWicketを使うための機能。
- [Open Layers 3](https://github.com/wicketstuff/core/tree/master/openlayers3-parent) - Wicketアプリケーションにインタラクティブな地図を追加するためのコンポーネント群。
- [POI](https://github.com/wicketstuff/core/wiki/POI) - WicketプロジェクトとApache POIの統合。
- [Progressbar](https://github.com/wicketstuff/core/wiki/Progressbar) - Wicket用のプログレスバーコンポーネント。
- [Push](https://github.com/wicketstuff/core/wiki/Push) - Wicketアプリケーションからブラウザーへウェブページの部分更新をプッシュするReverse AJAX機能。
- [Scala Extensions](https://github.com/wicketstuff/core/wiki/ScalaExtensions) - Scalaを使う際のWicketモデルの構文を改善。
- [Select2](https://github.com/wicketstuff/core/tree/master/select2-parent) - [Select2](http://ivaynberg.github.com/select2) JavaScriptライブラリを使い、AJAXによる選択候補の絞り込み、カスタム描画などを備えたセレクトボックスを作成するApache Wicketコンポーネント。
- [Servlet Container Authentication and Authorization](https://github.com/wicketstuff/core/wiki/Servlet-Container-Authentication-and-Authorization) - wicket-auth-rolesとServlet 3のセキュリティコンテナの統合を簡略化。
- [Spring Reference](https://github.com/wicketstuff/core/wiki/SpringReference) - WicketウェブアプリケーションとSpringの統合。
- [Stateless](https://github.com/wicketstuff/core/tree/master/stateless-parent) - Wicket向けに、より広範なステートレス機能を提供する少数のコンポーネント。
- [TinyMCE Integration](https://github.com/wicketstuff/core/wiki/TinyMCE-Integration) - TinyMCE WYSIWYGエディターとWicketの統合。
- [Twitter](https://github.com/wicketstuff/core/wiki/Twitter) - Twitterウィジェットを使うためのWicketコンポーネントとビヘイビア。
- [UrlFragment](https://github.com/wicketstuff/core/tree/master/urlfragment-parent) - 戻るボタンへの対応を保ちながら、ブックマーク可能なAJAX機能を実現。
- [WHighCharts](https://github.com/wicketstuff/wiquery-highcharts) - HighCharts用のWiQueryバインディング。
- [Whiteboard](https://github.com/wicketstuff/core/wiki/Whiteboard) - Wicketアプリケーションに組み込めるホワイトボード。
- [wicket-foundation](https://github.com/wicketstuff/core/tree/master/wicket-foundation) - Wicketと[Zurb Foundation](http://foundation.zurb.com/)の統合。
- [Wicket Rest Annotations](https://github.com/wicketstuff/core/tree/master/wicketstuff-restannotations-parent) - Spring MVCや標準JAX-RSと同様の方法でREST API・サービスを実装するための、専用リソースクラスとアノテーション群。
- [WiQuery](https://github.com/wicketstuff/wiquery) - WicketとjQuery・jQuery UIの統合。
- [WqPlot](https://github.com/wicketstuff/wiquery-jqplot) - JqPlot用のWiQueryバインディング。

## ウェブフレームワーク <a id="web-frameworks"></a>
Wicketを基盤とするアプリケーション開発用フレームワークです。

- [Apache Isis](https://isis.apache.org/) - Javaでドメイン駆動アプリケーションを迅速に開発するためのフレームワーク。
- [BrixCMS](http://www.brixcms.org/) - WicketベースのCMS。記録された原文では、活動が止まっている可能性が示されている。
- [Hippo CMS](http://www.onehippo.com/en) - コンテンツのパフォーマンス指標に素早く対応し、オンラインビジネス戦略を継続的に改善するための企業向け機能。
- [Nocket](https://github.com/Nocket/nocket) - Wicket用のNaked Objectsフレームワーク。
- [NoWicket](http://invesdwin.de/nowicket/) - 複雑なウェブサイトを実装する際のWicketの定型コードを減らせる、Naked Objectsフレームワーク。
- [Orienteer](https://github.com/OrienteerDW/Orienteer) - CRM、CMS、ERP、モバイルアプリのバックエンド、一般的なウェブサイトを作るための、Wicketと[OrientDB](http://orientdb.com/)を基盤とするウェブフレームワーク。
- [Vuecket](https://github.com/OrienteerBAP/vuecket) - VueJSとWicketに適した方法で両者を統合するウェブフレームワーク。
- [Wicketopia](https://github.com/jwcarman/Wicketopia) - Wicket用の迅速アプリケーション開発（RAD）ライブラリ。

## ソリューション <a id="solutions"></a>
Wicketと派生した[ウェブフレームワーク](#web-frameworks)を基盤とする、エンドツーエンドのソリューションです。

- [eFaps](http://www.efaps.org/) - 構成可能なERP実装の基盤となるモジュールとアプリケーション。
- [eHour](https://ehour.nl/index.phtml) - オープンソースの作業時間記録ツール。
- [Estatio](https://github.com/estatio/estatio) - Apache IsisとWicketを基盤とする、オープンソースの不動産管理システム。
- [GeoServer](https://github.com/geoserver/geoserver) - 地理空間データの共有・編集を可能にする、Javaで書かれたオープンソースのソフトウェアサーバー。
- [NextReports](http://www.next-reports.com/) - ビジネスレポート作成ソフトウェア。
- [Orienteer](https://github.com/OrienteerDW/Orienteer) - データウェアハウス、CRM、ERP、アプリやサイトのバックエンドシステム、その他のビジネスアプリを実装するための、オープンソースのビジネスアプリケーションプラットフォーム。
- [ProjectForge](https://www.projectforge.org/) - プロジェクト管理用のオープンソースソフトウェア。
- [Yes Cart](https://github.com/inspire-software/yes-cart) - 電子商取引専用プラットフォーム。

## IDEプラグインとツール <a id="ide-plugins-and-tools"></a>

- [qwickie](https://marketplace.eclipse.org/content/qwickie) - JavaウェブフレームワークWicket用の[Eclipse](http://www.eclipse.org/)プラグイン。
- [WicketForge](https://github.com/minman/wicketforge) - Apache Wicketによるアプリケーション開発を支援する[IntelliJ IDEA](https://www.jetbrains.com/idea/)用IDEプラグイン。
