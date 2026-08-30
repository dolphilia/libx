---
title: "Awesome Ant Design"
description: "Ant Designを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-websemantics-awesome-ant-design-readme-md"
---

# Awesome Ant Design

Ant Designを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [目次](#contents)
- [リソース](#resources)
- [記事](#articles)
- [ツール](#tools)
- [テーマ設定](#theming)
  - [テーマ](#themes)
- [関連プロジェクト](#related-projects)
- [Angular](#angular)
- [Vue.js](#vuejs)
- [コンポーネント](#components)
- [React Hooks](#react-hooks)
- [アプリケーション](#applications)
- [ボイラープレート](#boilerplates)
- [JavaScript以外のライブラリ](#non-javascript-libraries)
- [Electron](#electron)
- [アイコン](#icons)
- [デザインツールとリソース](#design-tools-and-resources)
- [その他](#other)
- [貢献](#contributing)
- [ライセンス](#license)

<a id="resources"></a>
## リソース

Ant Designの公式プロジェクトとリソースです。

- [Ant Design](http://ant.design/) - エンタープライズクラスのUI設計言語とReactベースの実装
- [Ant Design Pro](http://pro.ant.design/) - 企業向けアプリケーション向けの標準搭載UIソリューション。 :fire: :fire: :fire:
- [Ant Design Mobile](http://mobile.ant.design/) - カスタマイズ可能なモバイルUI仕様とReactベースの実装
- [Ant Design of React](http://react-component.github.io/badgeboard/) - Reactに基づいた即時利用可能なスムーズなUIコンポーネント
- [Ant Design SVG Icons](http://leungwensen.github.io/svg-icon/#ant) - 通常のアイコンフォントをSVGフォーマットに変換するプロジェクト、Ant Designのアイコンフォントをサポート

<a id="articles"></a>
## 記事

- [Styling React Applications with Ant.Design](https://medium.com/@yoniweisbrod/styling-react-applications-with-ant-design-92b742aab0b0)
- [Finding a User Interface library](http://waywardmonkeys.org/2016/03/14/finding-a-user-interface-library/)

<a id="tools"></a>
## ツール

Ant Designを使ったアプリ構築を支援するツールとユーティリティです。

- [Antd Init](https://github.com/ant-design/antd-init) - Ant Designのボイラープレート生成ツール（デモ用のみ、dva-cliを使用）
- [Dva Cli](https://github.com/dvajs/dva-cli) - [Dva.js](https://github.com/dvajs/dva)に基づくAnt Designプロジェクトを作成します。
  Dva.jsはReduxとReactを基盤とし、[Elm](http://elm-lang.org)と[Choo](https://github.com/yoshuawuyts/choo)に着想を得た軽量フロントエンドフレームワークです。
- [Antd Tools](https://github.com/ant-tool) - Ant Design用の非常に有用なツール一覧：ドキュメンテーション作成、新コンポーネント作成、ビルドツールなど
- [Antd Tools Docs](http://ant-tool.github.io/) - Ant Toolsのドキュメンテーション
- [iConfig Ant Design](https://github.com/hutxs/iconfig-antd) - 有用な変換を用いて、新しいプロジェクトを迅速に立ち上げるためのボイラープレート
- [vscode-antd-rush](https://github.com/fi3ework/vscode-antd-rush) - VS CodeでのAnt Designへの迅速な導入
- [Antd Snippets for VS Code](https://marketplace.visualstudio.com/items?itemName=bang.antd-snippets)
- [Generator Antd Pro](https://github.com/codetrial/generator-antd-pro) - Ant Design Proアプリケーションを簡単に構築する方法
- [formik-antd](https://github.com/jannikbuschke/formik-antd) - 人気のフォームステート管理ライブラリFormik向けの宣言型バインディング
- [Zaku](https://github.com/limichange/zaku) - JSXベースのUIエディタ、ページを作成し、AntDコードを生成するための簡単な方法
- [Antd-Pro-Generator for VS Code](https://github.com/garrett12138/antd-pro-generator) Swagger2.0またはOpenApi3.xドキュメントからサービス/モック/モデルを生成するためのAnt Design Pro用ツール
- [Ruyi Design Assistant](https://www.figma.com/community/plugin/1192146318523533547/) Ruyi Design Assistant は、Figma でのデザインにおいて、React コンポーネントライブラリ（AntDesign）およびデザイントークンを効率的に活用し、生産レベルのコンポーネントコードを簡単に取得できるようにします。

<a id="theming"></a>
## テーマ設定

テーマのカスタマイズやブラウザー上での切り替えを支援するユーティリティです。

- [antd-theme-webpack-plugin](https://github.com/mzohaibqc/antd-theme-webpack-plugin) - カスタムテーマファイルを生成するwebpackプラグインです。
- [antd-theme-generator](https://github.com/mzohaibqc/antd-theme-generator) - 環境に応じて使用できるテーマに特化した Less ファイルを生成するシンプルなスクリプト。
- [dynamic-antd-theme](https://github.com/luffyZh/dynamic-antd-theme) - Less または CSS で使用できる Ant Design のテーマを動的に変更するためのシンプルなプラグイン。
- [storybook-addon-customize-antd-theme](https://github.com/letshare/storybook-addon-customize-antd-theme) - Storybook のアドオンで、Ant Design のテーマを視覚的にカスタマイズできます。

<a id="themes"></a>
### テーマ

- [ant-design-dark-theme](https://github.com/ant-design/ant-design-dark-theme) - Ant Design のダークテーマ変数。
- [ant-design-aliyun-theme](https://github.com/ant-design/ant-design-aliyun-theme) - Aliyun コンソールのテーマ変数（Ant Design）。
- [ant-dark-theme](https://github.com/Kuechlin/ant-dark-theme) - Ant Design のダークテーマ変数。

<a id="related-projects"></a>
## 関連プロジェクト

Ant Designファミリーのプロジェクトです。

- [Ant Design X](https://github.com/ant-design/x) - ReactでAI駆動インターフェースを構築し、チャットコンポーネントやAPIサービスを統合できるReact UIライブラリです。
- [Ant Design Web3](https://github.com/ant-design/ant-design-web3) - 暗号資産ウォレット接続などを備えたdAppを構築しやすくするReactコンポーネント。Web3アイコンも提供し、Ethereum、Solana、Bitcoin、TON、Suiなどに対応します。
- [Grammar of Graphics](https://g2.alipay.com/) - 大規模データ向けの純粋 JavaScript の強力な意味論グラフ生成ツールで、ユーザーがシンプルな構文で多様なチャートを構築し、多数の統計ツールを統合します。（[Read more](https://github.com/antvis/feedback)）。
- [Ant Visualization](https://antv.alipay.com/) - データ可視化のプロフェッショナルな仕様書で、データ可視化の探索プロセスにおける数年間の貴重なパターン作業を、すべてのデータ可視化理論が必要な人々に共有することを目的としています。AntV は、データ、設計仕様、チャートの使用ルールのいくつかの部分から構成されています。（[Read more](https://github.com/antvis/feedback)）。
- [Ant Motion](http://motion.ant.design/) - Ant Design の視覚仕様に準拠した、React を使用した効率的な動きデザインソリューション。
- [Ant UX](http://ux.ant.design/) - [Omnigraffle](https://www.omnigroup.com/omnigraffle)、[Sketch](https://www.sketchapp.com/)、または[Axure](http://www.axure.com/) を使用して UX デザイン用のサイトマップテンプレートを作成します。これは、デザイナーが製品のページ間の論理を定義・精緻化・最終確定するためのライブラリです。

<a id="angular"></a>
## Angular

AngularとAnt Designで構築されたプロジェクトです。

- [NG-ZORRO](https://github.com/NG-ZORRO/ng-zorro-antd) - Angular での Ant Design。
- [NG-ZORRO-Mobile](https://github.com/NG-ZORRO/ng-zorro-antd-mobile) - Angular向けのAnt Design Mobile。
- [ng-alain](https://ng-alain.com/) - ng-zorro-antdの管理パネルフロントエンドフレームワーク

<a id="vuejs"></a>
## Vue.js

Vue.jsとAnt Designで構築されたプロジェクトです。

- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - Vue.js 2.5.0以降のAnt Design
- [Vue.js Beauty](https://github.com/FE-Driver/vue-beauty) - Vue.jsとAnt Designで構築された美しいUIコンポーネント
- [Vue.js Ant UI](https://github.com/kokoroX/vue-ant-ui) - Vue.jsで構築されたAnt DesignのUIコンポーネント
- [Ant Design Vue](https://github.com/lileilei/Ant-design-vue) - Vue.js版のAnt Design
- [antue](https://github.com/zzuu666/antue) - 完全にAnt Design規格に従ったエンタープライズ向けVue UIコンポーネントセット
- [vue-antd-admin](https://github.com/iczer/vue-antd-admin) - Ant Design ProのVue実装

<a id="blazor"></a>
## Blazor

Blazor WebAssemblyとAnt Designで構築されたプロジェクトです。

- [ant-design-blazor](https://github.com/ElderJames/ant-design-blazor) - Blazor（サーバーサイドおよびWebAssembly）用のAnt Design
- [Blazorise](https://github.com/stsrki/Blazorise) - BlazoriseおよびBlazorにAntDesignをサポートする [Demo](https://antdesigndemo.blazorise.com/)

<a id="components"></a>
## コンポーネント

Ant Designで構築されたUIコンポーネントの一覧です。

- [antd-group-slider](https://github.com/huyennbl/antd-group-slider) - 複数の範囲と説明を含むデータ入力用スライダーのグループ。スライダー間のデータ同期によりUXを向上させ、範囲データ入力時に誤った範囲の欠落を回避
- [antd-table-infinity](https://github.com/Leonard-Li777/antd-table-infinity) - ant designテーブルに基づく無限スクロールコンポーネント。仮想スクロールと高性能をサポート
- [react-lz-editor](https://github.com/leejaen/react-lz-editor) - draft-Jsおよびant designに基づくオープンソースの豊かなReactエディタ
- [React Grid](https://github.com/kagawagao/react-grid) **[廃止]** - Ant Designに基づくグリッドReact UIコンポーネント
- [Antd Kit](https://github.com/huhulab/antd-kit) - 高度なAnt Designコンポーネント
- [antd-data-table](https://github.com/NewbeeFE/antd-data-table) - Ant DesignのTableとFormを組み合わせたコンポーネントで、データの検索、表示、操作を行うもの。
- [ngx-recursive-form](https://github.com/hsbalar/ngx-recursive-form) - Ant DesignをベースにしたJSON入力に基づくAngularの再帰形式。
- [antd-amplify-react](https://github.com/mzohaibqc/antd-amplify-react) - AWS Amplify用の認証向けAnt Designコンポーネントのコレクション。
- [antd-password-input-strength](https://github.com/Kombustor/antd-password-input-strength) - AntDの入力コンポーネントにパスワード強度表示機能を備えたもの。
- [antd-amiya](https://github.com/viewweiwu/amiya) - ページレベルのコンポーネントで、テーブルとフォームを用いたもの。
- [antd-phone-input](https://github.com/ArtyomVancyan/antd-phone-input) - Ant Design向けの高度で高度にカスタマイズ可能な電話番号入力コンポーネント。

<a id="react-hooks"></a>
## React Hooks

- [Sunflower(🌻)](https://github.com/ant-design/sunflower) React Hooksで返されるAntDコンポーネントのコレクション。
- [use-antd-resizable-header](https://github.com/hemengke1997/use-antd-resizable-header) - React HookでAnt Designのテーブルヘッダーをリサイズできるようにするもの。

<a id="applications"></a>
## アプリケーション

Ant Designで構築された成熟したアプリケーションの一覧です。

- [Eevee](https://github.com/pizn/eevee) - GitHubのオンライン編集ブログプラットフォームに基づくプロジェクト。React、Ant Design、GitHub APIをベースにしている。
- [Productivity Application](https://github.com/dhruv-kumar-jha/productivity-frontend) - Kanbanスタイル、Trelloをインスピレーションに受けて開発されたプロダクティビティアプリケーション。React、Ant Design、その他素晴らしいモジュールを使用。
- [IDURAR ERP/CRM](https://github.com/idurar/idurar-erp-crm) - IDURARは、Mernスタック（Node.js / Express.js / MongoDb / React.js）に基づくオープンソースERP/CRM（請求書 / 在庫 / 会計 / HR）で、Ant Design（AntD）とReduxを使用。

<a id="boilerplates"></a>
## ボイラープレート

Ant Designで構築されたスタータープロジェクトとボイラープレートの一覧です。

- [Ant Design Pro](http://pro.ant.design/) - 企業向けアプリケーション向けの標準搭載UIソリューション。 :fire: :fire: :fire:
- [Scaffold Market](http://scaffold.ant.design/) - Ant Designを用いたスケルトンとボイラープレートのコレクション。
- [Antd Admin](https://github.com/zuiidea/antd-admin) - Ant DesignとDva.jsをベースにした管理ダッシュボードアプリケーションのデモ。
- [Meteor Antd Boilerplate](https://github.com/elmarti/meteor-antd-boilerplate) - AntdとMeteorを用いて構築された基本的なソーシャルネットワーク。 [Example](https://antdmeteor.herokuapp.com/login)
- [React SPA](https://github.com/JasonBai007/reactSPA) - React、Router、ES6、Fetch、Babel、Webpack、Npm、MockJs、FontAwesome、AnimateCSS、Ant Design、LESS および jQuery を使用した SPA の構築
- [React Redux](https://github.com/Justin-lu/react-redux-antd) - Ant Design を使用した CMS／エンタープライズクラスアプリ（ERP／Admin）向け React Redux
- [React Antd Starter](https://github.com/yuzhouisme/react-antd-redux-router-starter) - Ant Design と Redux を使用したウェブサイト／ウェブアプリの開発を目的としたプロジェクト
- [Webbf](https://github.com/peterchenhdu/webbf) - Maven を使用して Spring、Spring MVC および Mybatis でバックエンドを構築する Java デモ。React、Reflux、Eebpack、jQuery、React-bootstrap および Ant Design を使用
- [React Redux Antd Starter](https://github.com/BetaRabbit/react-redux-antd-starter) - React、Redux および Ant Design を使用したフロントエンドのベースコード
- [Koa](https://github.com/yukrain/koa-antd-admin) - React、Ant Design および Koa を使用した Admin UI を構築する例アプリ
- [Star Admin](https://github.com/pookpal/star-initReact-example) - React、Ant Design、Redux、React-router、Webpack および Babel を使用したデモアプリ
- [React Redux Intro](https://github.com/LeuisKen/react-redux-intro) - Ant Design を使用したデモアプリで、Redux の依存関係を初期化できるように設定可能
- [React Start Kit](https://github.com/jovey-zheng/react-start-kit) - React、Webpack、ES6+、Redux、Router、Babel、Express、Ant Design を使用した SPA ベースコード
- [CL React](https://github.com/chenliang2016/CLReactAntDesign) - エンタープライズバックオフィスソフトウェア向けの Ant Design フロントエンドフレームワーク構造に基づいたもの
- [TODO MVC](https://github.com/cupools/todoMVC-react) - React および Ant Design を使用したタスク管理リスト
- [React Boilerplate](https://github.com/huhulab/react-frontend-boilerplate) - Ant Design を使用した React Admin フロントエンドベースコード
- [Dva Antd Starter](https://github.com/xlsdg/dva-antd-starter) - Dva.js と Ant Design を使って始めましょう
- [Dva Antd Mobile Starter](https://github.com/xlsdg/dva-antd-mobile-starter) - Dva.js と Ant Design Mobile を使って始めましょう
- [Dva Ant Admin](https://github.com/jiangbo2015/learn-dva) - Dva、Ant-Design を使用したフロントエンドベースコード
- [Aspnet Core Antd Boilerplate](https://github.com/bang88/aspnet-core-react-antd-boilerplate) - アスペル.NETコアを用いたサーバーサイドレンダリング
- [React Redux Universal](https://github.com/subenksaha/react-redux-universal) - React Router 4とWebPack 2.5+を用いたユニバーサル／同質的なボイラプレート。すべての最新パッケージを含む
- [CRA-TS-Antd](https://github.com/comerc/cra-ts-antd) - Create-React-App + TypeScript + Ant-Design（エジェクトなし）
- [Ng-Alain](https://github.com/cipchk/ng-alain) - Ant Designを基盤とし、ng-zorro-antdを使用するAngular管理UIです。
- [Typescript React With Mobx Starter](https://github.com/YDJ-FE/ts-react-webpack) - TypeScript、React、MobX、AntDおよびWebPackを用いたスタートテンプレート
- [React-PWA, PawJS and AntDesign](https://github.com/Atyantik/example-pawjs-ant-design) - SEO、PWA、SSR、スケルトン、プレースホルダーなど、多くの機能を備えたプラグイン可能なボイラプレート
- [Create React App + Ant Design](https://github.com/ant-design/create-react-app-antd) - Create-React-AppでエジェクトせずにAnt-Designを使用
- [ScaffoldHub.io](https://scaffoldhub.io) - MongoDB、SQLまたはFirebase Firestoreを用いたフルスタックReact＋Ant Designアプリケーションの生成
- [The Green Meal](https://github.com/VincentCordobes/the-green-meal) - TypeScriptで書かれたNext.js、PostgreSQLデモアプリ
- [react-vite-admin](https://github.com/ychengcloud/react-vite-admin) - React、Recoil、React Query、React Hooks、TypeScript、Axios

<a id="non-javascript-libraries"></a>
## JavaScript以外のライブラリ

JavaScript以外の言語向けに書かれたライブラリの一覧です。

- [Antizer](https://github.com/priornix/antizer) - Ant Designライブラリ for [ClojureScript](https://clojurescript.org/)、それは不変かつ関数型の言語でJavaScriptにクロスコンパイルされる
- [syn-antd](https://gitlab.com/synqrinus/syn-antd) - Ant Designを用いた[ClojureScript](https://clojurescript.org/)および[Reagent](https://github.com/reagent-project/reagent)のラッパー。[shadow-cljs](http://shadow-cljs.org/)を用いており、ツリーシッキングをサポート。他のClojureScriptライブラリと同様にJavaScriptにクロスコンパイルされる

<a id="electron"></a>
## Electron

- [StarCabinet](https://github.com/thundernet8/StarCabinet) - React、ElectronおよびAnt Designをベースとした、スター数に基づくクロスプラットフォームツール
- [Nowa](https://github.com/nowa-webpack/nowa-gui) - WebPackをベースとしたフロントエンドプラグインのスケルトングおよび開発ソリューション

<a id="icons"></a>
## アイコン

- [Official Ant Design Icons](http://github.com/ant-design/ant-design-icons)
- [Ant Design Icons](https://github.com/fjc0k/ant-design-icons) - Ant DesignおよびAnt Design Mobileから提供されるプレミアムアイコンフォント
- [Material Design Icons](https://github.com/2fd/ant-design-icons) Ant Design 用 Material Design Icons

<a id="design-tools-and-resources"></a>
## デザインツールとリソース

- [Kitchen](http://kitchen.alipay.com/) - スケッチプラグイン。デザイナーをサポートする機能のセット
- [Ant Design Library](http://library.ant.design/) - Ant Design Axure ライブラリ
- [Ant UX](http://ux.ant.design/) - OG、スケッチ、Axure、Affinity、Adobe XD でのUX設計用のサイトマップテンプレート
- [Ant Design Design Resources](https://ant.design/docs/spec/download) - スケッチシンボル

<a id="other"></a>
## その他

- [Ant Design of Ember](http://idcos.github.io/antd-ember/#/home) - Ant Design と Emberjs をベースにしたエンタープライズクラスUIフレームワーク
- [Fable Ant Design](https://github.com/evilz/fable-ant-design) - Fable Elmish 用の Ant Design バインディング

<a id="contributing"></a>
## 貢献

貢献はいつでも歓迎します。[ガイドラインはこちら](https://github.com/websemantics/awesome-ant-design/blob/master/contributing.md)です。

<a id="license"></a>
## ライセンス

[![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)

この作品は[Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/)の下で提供されています。
