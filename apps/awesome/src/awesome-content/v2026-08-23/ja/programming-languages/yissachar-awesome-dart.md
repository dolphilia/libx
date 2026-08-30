---
title: "Awesome Dart"
description: "Dartを扱う資料や関連プロジェクトをまとめたAwesomeリストです。 上流ではアーカイブ済み、または更新終了と案内されています。"
licenseSource: "github-yissachar-awesome-dart-readme-md"
---

# Awesome Dart

Dartを扱う資料や関連プロジェクトをまとめたAwesomeリストです。 上流ではアーカイブ済み、または更新終了と案内されています。

### 目次 <a id="contents"></a>

* ライブラリ
  * [クライアントWebアプリフレームワーク](#client-web-app-frameworks)
  * [サーバーフレームワーク](#server-frameworks)
  * [ゲーム開発](#game-development)
  * [アニメーション](#animation)
  * [テンプレート](#template)
  * [データベース](#database)
  * [パッケージ管理](#package-managers)
  * [ユーティリティ](#utilities)
  * [依存性注入](#dependency-injection)
  * [パーサー](#parsers)
  * [検証](#validation)
  * [ORM](#orm)
  * [画像](#image)
  * [アルゴリズム](#algorithms)
  * [テスト](#testing)
  * [Union](#unions)
* [ツール](#tools)
* [IDE、エディター、プラグイン](#ides-editors-and-plugins)
* [チュートリアル](#tutorials)
* [コミュニティ](#community)
* [その他すべて](#everything-else)

----

## クライアントWebアプリフレームワーク <a id="client-web-app-frameworks"></a>

* [AngularDart Community](https://github.com/angulardart-community) - コミュニティが保守するAngularDartのWebサイト、パッケージ、ツールなど。
* [Flutter](https://flutter.dev/) - Android、iOS、Webアプリ向けに記述できる、高性能なクロスプラットフォーム・モバイルアプリ構築フレームワーク。
* [MDL/Dart](http://mdl.mikemitterer.at//) - GoogleのMaterial Design思想に基づく、Web開発者向けDartコンポーネントフレームワークMaterial Design Lite。
* [OverReact](https://workiva.github.io/over_react/) - 静的型付きReact UIコンポーネントを構築するライブラリ。

## サーバーフレームワーク <a id="server-frameworks"></a>

* [Jaguar](https://github.com/Jaguar-dart/jaguar) - 速度、単純さ、拡張性を重視したサーバーフレームワーク。
* [Start](https://github.com/lvivski/start) - 静的ファイル配信、動的リクエスト、WebSocket、JSONレスポンス作成に対応するSinatra風Webフレームワーク。
* [Shelf](https://pub.dartlang.org/packages/shelf) - Webサーバーとその部品を簡単に作成・合成。
    * Shelf向けパッケージは多数あり、慣例として[shelf_](https://pub.dartlang.org/search?q=shelf_).
* [Vane](https://github.com/Scorpiion/Vane) - サーバー実行環境とミドルウェアシステムを内蔵するフレームワーク。
* [Rikulo Stream](https://github.com/rikulo/stream) - リクエストルーティング、フィルタリング、テンプレートエンジン、WebSocket、MVC設計パターン、ファイルベース静的リソースを備えた軽量Webサーバー。
* [Alfred](https://github.com/rknell/alfred) - ルーティングとミドルウェアを備えた最小限のExpressJS風サーバー。
* [Dart Frog](https://github.com/VeryGoodOpenSource/dart_frog) - Dart向けの高速で最小限のバックエンドフレームワーク。

## Webフレームワーク <a id="web-frameworks"></a>

* [Jaspr](https://docs.page/schultek/jaspr) - クライアント側とサーバー側の両レンダリングに対応し、DartでWebサイトを構築する現代的なWebフレームワーク。

## その他のフレームワーク <a id="other-frameworks"></a>
* [Rapid Open Hardware Development (ROHD) Framework](https://github.com/intel/rohd) - ハードウェアを記述・検証するフレームワーク。

## クロスプラットフォーム開発 <a id="cross-platform-development"></a>
* [universal_io](https://github.com/terrier989/universal_io) - ブラウザーでも動作する_dart:io_。
* [universal_html](https://github.com/terrier989/universal_html) - VM／Flutterでも動作する_dart:html_。

## ゲーム開発 <a id="game-development"></a>

* [Flame](https://github.com/luanpotter/flame#readme) - 最小限のFlutterゲームエンジン。
* [StageXL](http://www.stagexl.org/) - Flash APIを基にし、ゲームやその他のリッチアプリケーションなど印象的な2Dコンテンツ向けの使いやすく完全なAPIを提供。
* [DartRocket](https://github.com/StrykerKKD/dartrocket) - Dartで記述され、StageXL描画エンジンを使うHTML5ゲームフレームワーク。
* [Pixi Dart](https://github.com/FedeOmoto/pixi) - pixi.js描画エンジンの移植版。
* [Ranger](https://github.com/wdevore/Ranger-Dart) - HTML5 Canvasとシーングラフを中心とするゲームエンジン。

## アニメーション <a id="animation"></a>

* [Universal Tween Engine](https://github.com/xaguzman/tween-engine-dart) - Aurelien Ribbonが作成した元のJava Universal Tween Engineの移植版。
* [Spine Dart](https://github.com/FedeOmoto/spine) - Esoteric Software Spineランタイムの実装。

## テンプレート <a id="template"></a>

* [mustache_template](https://pub.dev/packages/mustache_template) - dart2jsとdart2nativeに対応するMustacheテンプレートライブラリ。
* [jaded](https://github.com/dartist/jaded) - 優れたJade View Engineの移植版。
* [mason](https://github.com/felangel/mason) - Brickと呼ばれる再利用可能なテンプレートを開発者が作成・利用するためのツール。

## データベース <a id="database"></a>

* [Postgres](https://github.com/stablekernel/postgresql-dart) - より効率的で安全なクエリのため拡張バイナリプロトコルを使うPostgreSQLデータベースドライバー。
* [SQLJockey](https://github.com/jamesots/sqljocky) - MySQLコネクター。
* [PostgreSQL](https://github.com/xxgreg/dart_postgresql) - PostgreSQLデータベースドライバー。

## パッケージ管理 <a id="package-managers"></a>

* [Pub](https://pub.dartlang.org/) - パッケージ管理に使用。
* [Cloudsmith](https://cloudsmith.io/l/dart-repository/) - Dart、Flutterなどに対応する完全マネージド型パッケージ管理SaaS。**[公開／OSSは無料]** **[$]**

## ユーティリティ <a id="utilities"></a>

* [Archive](https://pub.dartlang.org/packages/archive) - 各種アーカイブ・圧縮形式をエンコード、デコードするライブラリ。
* [built_collection](https://github.com/google/built_collection.dart) - Builderパターンによる不変コレクション。
* [built_value](https://github.com/google/built_value.dart) - 不変値型、enumクラス、シリアライズ。
* [Frappe](https://pub.dartlang.org/packages/frappe) - Dart向け関数型リアクティブプログラミングライブラリ。DartのStream機能を拡張し、Property／Signalなどの新概念を導入。
* [Quiver](https://github.com/google/quiver-dart) - 多くのライブラリをより簡単・便利に使えるようにする、または追加機能を提供するユーティリティライブラリ群。
* [route_hierarchical](https://github.com/angular/route.dart) - シングルページWebアプリを構築しやすくするDart向けクライアントルーティングライブラリ。
* [Darq](https://pub.dev/packages/darq) - .NETライブラリの関数型LINQ移植版。
* [Basics](https://github.com/google/dart-basics) - Dartの基本オブジェクトへ便利な拡張メソッドを提供するライブラリ。

## 依存性注入 <a id="dependency-injection"></a>

* [Angular DI](https://webdev.dartlang.org/angular/guide/dependency-injection) - Angularによる依存性注入フレームワーク。
* [Dependencies](https://github.com/marcguilera/dependencies.dart) - Mirrorを使わないシンプルでモジュール式の依存性注入システム。
* [package: inject](https://github.com/google/inject.dart) - DartとFlutter向けコンパイル時依存性注入。

## パーサー <a id="parsers"></a>

* [html](https://pub.dartlang.org/packages/html) - HTML文書を扱うライブラリ。旧称html5lib。
* [markdown](https://github.com/dart-lang/markdown) - クライアントとサーバーの両方でMarkdownをHTMLへ解析。
* [PetitParser](https://github.com/petitparser/dart-petitparser) - スキャナーレス解析、パーサーコンビネーター、構文解析表現文法、Packrat Parserの考え方を組み合わせ、動的に再構成可能なオブジェクトとして文法とパーサーをモデル化。
* [XML](https://pub.dartlang.org/packages/xml) - XML文書を解析、走査、照会、構築する軽量ライブラリ。
* [xmlstream](https://pub.dartlang.org/packages/xml) - ストリーミング型イベントベースXMLパーサー。
* [YAML](https://pub.dartlang.org/packages/yaml) - YAMLパーサー。
* [Dart Tags](https://pub.dartlang.org/packages/dart_tags) - 純粋なDartで記述されたID3タグ解析ライブラリ。


## 検証 <a id="validation"></a>

* [Constrain](https://pub.dartlang.org/packages/constrain) - Java Bean Validationに着想を得ながら、Dartの優れた言語機能を活用する制約ベース検証ライブラリ。
* [validator.dart](https://github.com/karan/validator.dart) - Dart向け文字列検証とサニタイズ。

## ORM

* [Objectory](https://github.com/vadimtsushko/objectory) - MongoDBへ永続化したデータをモデル化、保存、照会する型付き・検査済み環境を提供。

## 画像 <a id="image"></a>

* [image](https://github.com/brendan-duncan/image) - PNG、JPEG、GIF、WebP、TIFF、TGA、PSD、PVR、OpenEXRなど各種画像形式をサーバー・Webアプリで読み込み、操作、保存できるようにする。

## テスト <a id="testing"></a>

* [Guinness](https://github.com/vsavkin/guinness) - Jasmineライブラリの移植版。
* [test](https://pub.dartlang.org/packages/test) - Dartでテストを記述・実行する標準的な方法を提供。
* [spec](https://pub.dev/packages/spec) - DartとFlutter向けの合理化されたテストフレームワーク。

## Union <a id="unions"></a>

* [Freezed](https://github.com/rrousselGit/freezed) - 機能を損なわず、シンプルな構文／APIで不変クラスのコードを生成。

## クラッシュ監視 <a id="crash-monitoring"></a>

* [Sentry](https://github.com/getsentry/sentry-dart) - すべてのソフトウェアチームがエラーをリアルタイムに発見、分類、優先順位付けできる、セルフホスト・クラウド型エラー監視。

## ツール <a id="tools"></a>

* [DevTools](https://dart.dev/tools/dart-devtools) - DartとFlutter向けデバッグ・性能ツールスイート。
* [dart2js](https://www.dartlang.org/tools/dart2js/) - DartコードをJavaScriptへコンパイル。
* [js2dart](https://github.com/vojtajina/js2dart) - JavaScriptコードをDartへコンパイル。
* [Stagehand](https://github.com/dart-lang/stagehand) - Web Starter KitやYeomanなどのツールに着想を得たプロジェクトひな形生成器。
* [Crossdart](https://crossdart.info) - Pub内パッケージの相互参照付きソースコード。
* [Crossdart Github Chrome Extension](https://chrome.google.com/webstore/detail/crossdart-chrome-extensio/jmdjoliiaibifkklhipgmnciiealomhd) - GitHub上のDartプロジェクト（ツリー表示とPull Requestの両方）へ「Go to declaration」と「Find Usages」機能を追加。
* [gulp-dart](https://github.com/agudulin/gulp-dart) - dart2jsを使ってDartコードをJavaScriptへコンパイルするGulpプラグイン。
* [dev_compiler](https://github.com/dart-lang/dev_compiler) - 慣用的で読みやすいJavaScript出力を生成するよう設計されたDartからJavaScriptへのコンパイラー。
* [json2dart](https://javiercbk.github.io/json_to_dart) - JSONから、指定された構造のJSONを解析・生成するDartクラスを生成。
* [webdev_proxy](https://github.com/Workiva/webdev_proxy) - [webdev](https://github.com/dart-lang/webdev)のプロキシラッパー。404をIndexへ再ルーティングし、ローカル実行中にHTML PushStateルーティングを可能にする。
* [Dart Code Metrics](https://github.com/dart-code-checker/dart-code-metrics) - コードメトリクスの報告、アンチパターン検査、Analyzer向け追加規則を提供するリンター。
* [m2cgen](https://github.com/BayesWitnesses/m2cgen) - 訓練済みの古典的MLモデルを依存関係なしのネイティブDartコードへトランスパイルするCLIツール。
* [Lakos](https://pub.dev/packages/lakos) - Graphvizで内部ライブラリ依存関係を可視化し、依存関係の循環を検出。
* [FlutterTrends](https://fluttertrends.dev/) - pub.dev上の2万以上のFlutterパッケージについて、日次ダウンロード傾向、ランキング、リポジトリ健全性を提供。

## マルチスレッド <a id="multithreading"></a>

* [isolator](https://pub.dev/packages/isolator) - 分離部分と任意種別のフロントエンド部分（BLoC、MobX、ChangeNotifierなど）からなる二部構成状態を簡単に作成。

## チュートリアル <a id="tutorials"></a>

* [Hello Dart](http://code.makery.ch/library/hello-dart/) - Dartの楽しい入門。
* [Getting Started with Dart & React](https://www.leejamesrobinson.com/blog/getting-started-with-dart-and-react/)
* [Tour of Heroes](https://webdev.dartlang.org/angular/tutorial) - AngularDartの中核的基礎を扱うアプリ。
* [Dart for beginner](https://www.myfreax.com/tag/dart/) - 初心者向け中国語Dartチュートリアル。
* [Resolving Dart package version conflicts, faster than ever](https://iiro.dev/2018/08/28/resolving-dart-package-version-conflicts/) - Pub内の任意のパッケージバージョンを使い、パッケージのバージョン競合を解決する方法。

## コミュニティ <a id="community"></a>

* [Dartlang SubReddit](https://www.reddit.com/r/dartlang/)
* [Gitter Chat Channel](https://gitter.im/dart-lang/home)
* [Google Group](https://groups.google.com/a/dartlang.org/d/forum/misc)
* [Stack Overflow](https://stackoverflow.com/tags/dart)
* [Facebook Group (pt-BR)](https://www.facebook.com/groups/dartlangbr)
* [Telegram chat (ru-RU)](https://t.me/rudart)
* [Telegram chat (id-ID)](https://t.me/dart_web)

## IDE、エディター、プラグイン <a id="ides-editors-and-plugins"></a>

* [IntelliJ Plugin](https://www.dartlang.org/tools/webstorm/) - WebStorm、IntelliJ IDEA、PhpStorm、PyCharm、RubyMine向けJetBrains製Dartプラグイン。
* [Sublime Text Package](https://github.com/guillermooo/dart-sublime-bundle) - Sublime Text 3向けDartパッケージ。
* [Emacs Plugin](https://github.com/nex3/dart-mode) - Dart言語向けEmacsモード。
* [Vim Plugin](https://github.com/dart-lang/dart-vim-plugin) - VimでDartを構文強調。
* [Atom Plugin](https://atom.io/packages/atom-dart) - AtomのDart対応。
* [VSCode Plugin](https://dartcode.org/) - Visual Studio CodeのDart対応。
* [DartPad](https://dartpad.dartlang.org/) - 軽量オンラインエディター。
* [Dart Code](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code) - Visual Studio CodeのDart対応。
* [Module Linker](http://fiatjaf.alhur.es/module-linker/#/dart) - GitHub上のモジュールimport文へ直接リンクを追加するChrome拡張。
* [Dart Barrel File Generator](https://github.com/mikededo/dartBarrelFileGenerator) - DartプロジェクトのBarrelファイルを生成するVSCode拡張。

## その他すべて <a id="everything-else"></a>

[Pub](https://pub.dartlang.org/)には常に多くの優れたライブラリが追加されています。要件を満たすライブラリがこのリストで見つからなければ、Pubで検索してください。優れたライブラリを見つけたら、ほかの人も発見できるよう、その情報を載せるPull Requestを歓迎します。まず[コントリビューションガイドライン](https://github.com/yissachar/awesome-dart/blob/master/CONTRIBUTING.md)を必ずお読みください。

## ライセンス <a id="license"></a>

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
