---
title: "petk/awesome-dojo"
description: "petk/awesome-dojo の正規スナップショット"
licenseSource: "github-petk-awesome-dojo-readme-md"
---

# Awesome Dojo

<a href="https://github.com/sindresorhus/awesome"><img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="Awesome" height="18"></a>
[![CCOライセンス](https://img.shields.io/badge/license-CC0-blue.svg?style=plastic "CC0 License")](#contributing-and-license)
[![プロジェクト保守中](https://img.shields.io/badge/project-maintained-brightgreen.svg?style=plastic "Project Maintained")](https://github.com/petk/awesome-dojo/commits/master)
[![ビルド状態](https://img.shields.io/travis/petk/awesome-dojo/master.svg)](https://travis-ci.org/petk/awesome-dojo)

優れた[Dojo JavaScript Toolkit](http://dojotoolkit.org)のライブラリ、リソース、その他の魅力的な情報の厳選リスト。

GitHubの`awesome-*`トレンドに着想を得ています。

> 開発時間を節約し、開発プロセスに合わせて拡張できるJavaScriptツールキット。Webアプリ構築に必要なものをすべて提供します。言語ユーティリティ、UIコンポーネントなどが一か所に揃い、完全に連携するよう設計されています。


## 索引 <a id="index"></a>

* [DojoToolkit.orgのリソースとドキュメント](#dojotoolkitorg-resources-and-documentation)
* [チュートリアル](#tutorials)
* [スターターとボイラープレート](#bootstraps-and-boilerplates)
* [パッケージ、ライブラリ、スクリプト](#packages-libraries-and-scripts)
* [サーバー側統合](#serverside-integrations)
* [テスト](#testing)
* [アプリケーション](#applications)
* [テーマ](#themes)
* [TypeScript](#typescript)
* [コミュニティ](#community)
* [その他のAwesomeリスト](#other-awesome-lists)
* [コントリビューションとライセンス](#contributing-and-license)


## DojoToolkit.orgのリソースとドキュメント <a id="dojotoolkitorg-resources-and-documentation"></a>

* [API](http://dojotoolkit.org/api/) - Dojo ToolkitのAPIリファレンス。
* [Roadmap](https://github.com/dojo/meta/wiki/Roadmap) Dojoのロードマップ（全バージョン）。
* [Blog](http://dojotoolkit.org/blog/) - Dojo Toolkitブログ。
* [Demos](http://demos.dojotoolkit.org/demos/) - Dojo Toolkitのデモ。
* [Reference guide](https://github.com/dojo/docs) - [http://dojotoolkit.org/reference-guide/1.10/](http://dojotoolkit.org/reference-guide/1.10/)
* [Tutorials](http://dojotoolkit.org/documentation/) - Dojo Toolkit向けの公認・更新済みチュートリアル。
* [Dojo Meta](https://github.com/dojo/meta) - Dojo 2のコントリビューション・コーディングガイドライン。
* [Dojo Website](https://github.com/dojo/dojo-website) - Dojo Toolkit 1.xから2.xへの移行用Webサイト。


[先頭へ戻る](#awesome-dojo)


## チュートリアル <a id="tutorials"></a>

* [Dojo and Bootstrap FAQ](https://www.sitepen.com/blog/2014/08/13/dojo-faq-how-do-i-use-bootstrap-with-dijit/) - DijitでBootstrapを使う方法。
* [Dojo Toolkit 1.9 tutorial](https://github.com/cepa/dojo-tutorial) - Dojo Toolkit 1.9を使うチュートリアル。
* [Dojo the Good parts](https://github.com/DavidSpriggs/Dojo--The-Good-Parts) - 2014年3月10〜13日にPalm Springsで開催されたESRI Developer Summitの発表。
* [Pluralsight's Dojo tutorial](https://www.pluralsight.com/courses/dojo-fundamentals) - Dojo Toolkit学習用動画チュートリアル。

[先頭へ戻る](#awesome-dojo)


## スターターとボイラープレート <a id="bootstraps-and-boilerplates"></a>

* [dboostrap](https://github.com/atoha/dbootstrap) - Dojo向けBootstrapテーマ。
* [Dojo Boilerplate](https://github.com/csnover/dojo-boilerplate) - Dojo Toolkit開発を始めるためのボイラープレート。
* [Dojo Twitter bootstrap](https://github.com/xsokev/Dojo-Bootstrap) - Dojoを使ったTwitter Bootstrapフレームワークの実装。
* [dojo.js](https://github.com/gpedro/dojo.js) - JasmineとGulpを使ってDojoを始める最小限のボイラープレート。
* [dojo-node-boilerplate](https://github.com/kitsonk/dojo-node-boilerplate) - NodeJS上でDojo Toolkitを使うためのクイックスタート「テンプレート」。

[先頭へ戻る](#awesome-dojo)


## パッケージ、ライブラリ、スクリプト <a id="packages-libraries-and-scripts"></a>

* [AngularJS Dojo](https://github.com/adrobisch/angular-dojo) - Dojoウィジェット向けAngularJSディレクティブ。
* [delite](https://github.com/ibm-js/delite) - HTML Custom Element／Widget基盤。
* [deliteful](https://github.com/ibm-js/deliteful) - マルチチャネル（デスクトップ／モバイル）UI Custom Elementsライブラリ。
* [Dojo Foundation packages](http://packages.dojofoundation.org/) - Dojo Foundationで利用可能なパッケージ。
* [dojo-smore](https://github.com/kfranqueiro/dojo-smore) - Dojo／Store実装を持つパッケージ。
* [generator-dojo](https://github.com/bryanforbes/generator-dojo) - Dojoプロジェクト向けYeomanジェネレーター。
* グリッド
    * [dgrid](http://dgrid.io/) - 現代のブラウザーとオブジェクトストアを最大限に活用する次世代グリッドコンポーネント。
    * [gridx](http://oria.github.io/gridx/) - 高速描画、適切なモジュール分割、プラグインアーキテクチャを備えたグリッド。
    * [xgrid](https://github.com/xblox/xgrid) - dgrid拡張。
* [grunt-dojo](https://github.com/phated/grunt-dojo) - Gruntタスク内でDojoをビルド。
* [grunt-dojo2](https://github.com/dojo/grunt-dojo2) - Gruntタスク内でDojo 2をビルド。
* [karma-dojo](https://github.com/garcimouche/karma-dojo) - [Karma](http://karma-runner.github.io/)プラグイン。Dojo Toolkit向けアダプター。
* [Leadfoot](https://github.com/theintern/leadfoot) - Selenium WebDriver APIへクロスプラットフォームの一貫性をもたらすJavaScriptクライアントライブラリ。
* [Sitepen dstore](https://github.com/SitePen/dstore) - データコレクションとオブジェクトをモデル化・操作するツールを提供するデータ基盤フレームワーク。
* [xaction](https://github.com/xblox/xaction) - ユーザー操作のUIとロジックを提供するコンポーネント。

#### Dojo 2

* [Dojo core](https://github.com/dojo/core) - TypeScriptとJavaScriptのコアユーティリティを含むDojo 2パッケージ。
* [DOM Utilities](https://github.com/dojo/dom) - Dojo 2 DOMユーティリティ。
* [Dojo Command Line Tooling](https://github.com/dojo/cli)   - Dojo 2アプリケーション向けコマンドラインツール。
* [Dojo loader](https://github.com/dojo/loader) - Dojo 2向けAMDローダー。
* [Dojo routing](https://github.com/dojo/routing) - Dojo 2ルーティング。
* [Dojo compose](https://github.com/dojo/compose) - Dojo 2合成ライブラリ。
* [Dojo widgets](https://github.com/dojo/widgets) - Dojo 2向けコアUIコンポーネントライブラリ。
* [Dojo has](https://github.com/dojo/has) - 機能検出ライブラリ。
* [Dojo shim](https://github.com/dojo/shim) - ES6+機能をモジュール単位で補完するモジュール群。
* [Dojo parse](https://github.com/dojo/parser) - ウィジェットを宣言的にインスタンス化するパッケージ。
* [Dojo2 App](https://github.com/dojo/app) - Dojo 2向けアプリケーションフレームワーク（例）。



[先頭へ戻る](#awesome-dojo)


## サーバー側統合 <a id="serverside-integrations"></a>

* [Dojango](https://github.com/klipstein/dojango/) - DojoとDjango Pythonフレームワークの統合。
* [dojo-rails](http://robin850.github.io/dojo-rails/) - DojoとRuby on Railsフレームワークの統合。
* [Dojo Maven](https://github.com/cometd/dojo-maven) - Dojo ToolkitのMavenパッケージング。
* ASP.NET
    * [Dojo & ASP.NET](https://www.codeproject.com/Articles/650443/DataGrid-View-with-Sorting-and) - Dojo EnhancedGrid、JsonRest Store、Entity Framework、SQL Server、ASP.NET MVC Web APIを使う、ソートとページング対応DataGrid View。
    * [Dojo.NET](https://github.com/lstratman/Dojo.NET) - Dojo Toolkitを使い、ASP.NET Webサイト（WebFormsとMVC、Razorを含む）へWebControlバインディングを提供する.NETクラスライブラリ。
    * [Reactive Extensions](https://github.com/Reactive-Extensions/RxJS-Dojo) - Dojo Toolkit向けReactive Extensionsバインディング。
* Java
    * [Dojofaces](http://www.dojofaces.org) - JSF開発者がDojoウィジェットとJSFバッキングBeanを接続するのを支援するプロジェクト。
    * [DWR](http://directwebremoting.org/dwr/index.html) - サーバー上のJavaとブラウザー内のJavaScriptを連携させるライブラリ。
    * [Grails](https://grails.org/) - [プラグイン](http://grails.org/plugin/dojo)でDojoへ対応するオープンソースのフルスタックWebアプリケーションフレームワーク。
    * [LightStreamer](http://www.lightstreamer.com/) - Dojoを統合したサーバー。
    * [Spring](https://www.sitepen.com/blog/2011/08/11/how-do-you-use-the-dojo-store-jsonrest-api-with-spring/) - SpringとDojoの統合方法。
    * [Websphere](http://www-03.ibm.com/software/products/en/appserv-was) - Dojoを統合したアプリケーションサーバー。
* Node.js
    * [dojo-node](https://github.com/agebrock/dojo-node) - Node.js向け軽量Dojoラッパー。
    * [Dojos](https://github.com/supnate/dojos) - NodeJS上のサーバー側Dojo。
    * [Node.js integration](http://dojotoolkit.org/documentation/tutorials/1.10/node/) - DojoとNode.jsの使用方法を扱うチュートリアル。
* PHP
    * [Dojo & Composer](https://github.com/zoopcommerce/pixie) - Dojoを含むzoopパッケージ向けカスタムComposerインストーラー。
    * [Dojo & Symfony PHP framework](https://www.sitepen.com/blog/2011/09/06/what-is-the-best-way-to-use-dojo-with-a-symfony-backend/) - Dojo ToolkitとSymfony PHPフレームワークを統合。
    * [Dojo & Zend PHP framework](https://github.com/superdweebie/DojoModule) - DojoModuleを通じてDojo ToolkitとZend Frameworkを統合。

[先頭へ戻る](#awesome-dojo)


## テスト <a id="testing"></a>

* [Intern](https://github.com/theintern/) - JavaScript向け次世代コードテストスタック。
* [Intern User guide](https://theintern.github.io/intern/#what-is-intern) - The Internの使用方法を扱うかなり完全なマニュアル。
* [Intern Yeoman page objects](https://github.com/glamb/generator-internjs-pageobjects/) - ユニットテストとスイートを作成するYeomanジェネレーター。
* [Intern Yeoman generator](https://github.com/naglalakk/generator-intern) - Intern向けYeomanジェネレーター。

[先頭へ戻る](#awesome-dojo)


## アプリケーション <a id="applications"></a>

* [AuShada](https://github.com/dreaswar/AuShadha) - 電子医療記録（EMR）と公衆衛生管理向けDjango・Dojoアプリケーション。
* [dapi](https://github.com/dojo/dapi) - Node.js製Dojo APIビューアー。
* [Dig Dug](https://github.com/theintern/digdug) - WebDriverサービストンネルを起動するJavaScriptライブラリ。
* [Dojo Demo](https://github.com/rmurphey/dojo-demo) - Dojoのデモ。
* [dojorama](https://github.com/sirprize/dojorama) - Dojo 1.9、Twitter Bootstrap 3、History APIベースのシングルページ・デモアプリケーション。
* [Dojox application](https://github.com/dmachi/dojox_application) - モバイル、タブレット、デスクトップ向けDojox Application Framework。
* [js-doc-parse](https://github.com/dojo/js-doc-parse) - Dojo JavaScriptファイルを解析し、インラインドキュメントを抽出するライブラリ。
* [rstwiki](https://github.com/phiggins42/rstwiki) - PythonとDojo Toolkitで構築されたシンプルなreST／Wikiシステム。
* [Scripted](https://github.com/scripted-editor) - 当初はJavaScript編集に焦点を当てた、高速で軽量なコードエディター。
* [todomvc](https://github.com/tastejs/todomvc) - MV\*フレームワーク選びを支援するTodoアプリ例。
* [Dojo2 Example](https://github.com/dojo/examples) - Dojo 2の例。
* [xamiro](https://github.com/xblox/xamiro) - 最小限の依存関係を持つ、PHP・JavaScript製IDE風ファイルマネージャー。
* [Windows-dist](https://github.com/flysurfer28/windows-dist) - IoTとプロトタイピング向けの完全自動化スイート。

[先頭へ戻る](#awesome-dojo)


## テーマ <a id="themes"></a>

* [dijit-claro-stylus](https://github.com/kfranqueiro/dijit-claro-stylus) - DijitのClaroテーマをLESSからStylusへ直接変換。
* [Flat Dojo Theme](http://yiweima.github.io/flatdojo/) - Esri Flat Dijit Design。
* [Semantic Dojo Theme](http://websemantics.github.io/semantic-dojo/) - [Semantic UI](http://semantic-ui.com/) Frameworkの優れたスタイルを活用するレスポンシブDojoテーマ。

[先頭へ戻る](#awesome-dojo)


## TypeScript

* [Definitive TypeScript Guide](https://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/) - TypeScriptの機能に関するガイド。
* [Dojo to Typescript Converter](https://github.com/stopyoukid/DojoToTypescriptConverter) - Dojoのapi.jsonファイルからTypeScript互換宣言を作成するTypeScriptスクリプト。
* [Dojo-TypeScript](https://github.com/schungx/Dojo-TypeScript) - Microsoft TypeScript 0.9.5でDojo 1.9 AMD形式を使用。
* [Dojo Typings](https://github.com/dojo/typings) - DijitとDojoXを含むDojo 1 TypeScript型定義のリポジトリ。

[先頭へ戻る](#awesome-dojo)


## コミュニティ <a id="community"></a>

* [Brazilian Facebook Group](https://www.facebook.com/groups/288220914564119/) - Facebook上のブラジルDojoコミュニティ。
* [Dojo mailing list](http://dojotoolkit.org/community/) - 質問と議論のためのメーリングリスト。
* [Dojo on StackOverflow](http://stackoverflow.com/questions/tagged/dojo) - StackOverflow上のDojo Toolkitサポート。
* [Dojo on Twitter](https://twitter.com/dojo) - DojoのTwitterアカウント。
* [Facebook Group](https://www.facebook.com/groups/4375511291/) - Facebook上のDojoコミュニティ。
* [Google Plus Community](https://plus.google.com/communities/107837593684207188221) - Google Plus上のDojoコミュニティ。
* [Linked In Dojo Ajax Toolkit Developers Group](https://www.linkedin.com/groups/Dojo-Ajax-Toolkit-Developers-71399) - LinkedIn上のDojoコミュニティ。
* [Linked In Dojo Toolkit Group](https://www.linkedin.com/groups/dojo-toolkit-81926) - LinkedIn上のDojoコミュニティ。
* [Reddit Community](https://www.reddit.com/r/dojo/) - RedditでDojoを議論する成長中のコミュニティ（招待制）。
* [SensioLabs Connect Club](https://connect.sensiolabs.com/club/dojo-toolkit) - PHP・Symfony開発者向けSensioLabs Connect Dojo Toolkit Club。
* [IRC](http://irc.lc/freenode/dojo) - 大規模で活発なIRCサポートチャンネル。
* [Meetup](https://www.meetup.com/topics/dojo/) - 地域で参加し、ユーザーグループを探す。

[先頭へ戻る](#awesome-dojo)


## その他のAwesomeリスト <a id="other-awesome-lists"></a>

* [awesome-javascript](https://github.com/sorrycc/awesome-javascript) - Awesome JavaScriptリスト。
* [awesome-javascript-books](https://github.com/heatroom/awesome-javascript-books) - Awesome JavaScript書籍。
* Awesomeリスト：
    * [awesome](https://github.com/sindresorhus/awesome) - Awesomeリスト。
    * [awesome-awesome](https://github.com/emijrp/awesome-awesome) - Awesomeリスト。
    * [GetAwesomeness](https://getawesomeness.herokuapp.com/) - Awesomeリスト群。
    * [lists](https://github.com/jnv/lists) - Awesomeリスト群。
    * [awesome-all](https://github.com/bradoyler/awesome-all) - Awesomeリスト群。
    * [awesome-awesome](https://github.com/erichs/awesome-awesome) - Awesomeリスト群。

[先頭へ戻る](#awesome-dojo)


## コントリビューションとライセンス <a id="contributing-and-license"></a>

このAwesome Dojo Toolkitリストへの[コントリビューション](https://github.com/petk/awesome-dojo/blob/9527cc7586561f0d5744062902620757dd7daccf/CONTRIBUTING.md)を歓迎します。このリストの構築に協力したすべての[コントリビューター](https://github.com/petk/awesome-dojo/graphs/contributors)に深く感謝します。

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる限り、[Peter Kokot](https://github.com/petk)は本作品に関するすべての著作権および関連する権利または隣接権を放棄しています。

[先頭へ戻る](#awesome-dojo)
