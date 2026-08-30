---
title: "cyclejs-community/awesome-cyclejs"
description: "cyclejs-community/awesome-cyclejs の正規スナップショット"
licenseSource: "github-cyclejs-community-awesome-cyclejs-readme-md"
---

<a id="awesome-cyclejs"></a>
## Awesome Cycle.js [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

優れたCycle.jsのツール、リソース、動画などを集めたリストです。

- [学習](#learn)
  - [ドキュメント](#documentation)
  - [チュートリアル](#tutorials)
  - [動画](#videos)
  - [スライド](#slides)
  - [サンプルアプリケーション](#example-applications)
- [ツール](#tools)
  - [CLI](#cli)
- [ライブラリ](#libraries)
  - [ドライバー](#drivers)
  - [ボイラープレート](#boilerplates)
  - [テスト](#testing)
  - [デバッグ](#debugging)
  - [コンポーネント](#components)
- [コミュニティ](#community)

---
<a id="learn"></a>
## 学習

<a id="documentation"></a>
### ドキュメント

* [cycle.js.org](http://cycle.js.org/) - Cycle.js公式チュートリアルとドキュメント

<a id="tutorials"></a>
### チュートリアル

* [What Developers Need to Know about MVI (Model-View-Intent)](http://thenewstack.io/developers-need-know-mvi-model-view-intent/) - MVIアーキテクチャに関する投稿
* [Cycle.js: a reactive framework](https://lucamezzalira.com/2016/05/23/cycle-js-a-reactive-framework/) - リアルタイムデータの例を交えたCycle.jsの紹介
* [Building realtime applications with CycleJS and RxJS](https://blog.pusher.com/building-realtime-applications-with-cyclejs-and-rxjs/) - CycleJSとRxJSを使ってリアルタイムアプリケーションを構築する方法
* [Working with HTTP Streams with Cycle.js](http://ivanjov.com/working-with-http-streams-with-cycle-js/) - CycleJSを使ってHTTPリクエストとレスポンスを処理する方法

<a id="videos"></a>
### 動画

* [What if the user was a function?](https://www.youtube.com/watch?v=1zj7M1LnJV4) - [Andre Staltz](https://twitter.com/andrestaltz)が行ったJSConf BP2015での発表
* [Unidirectional data flow architectures](https://vimeo.com/168652278) - [Andre Staltz](https://twitter.com/andrestaltz)が行ったTheFrontendカンファレンスでの発表
* [Cycle.js and functional reactive user interfaces](https://www.youtube.com/watch?v=uNZnftSksYg) - [Andre Staltz](http://twitter.com/andrestaltz)が行ったReactiveConf 2015での発表
* [Intro to Functional Reactive Programming with Cycle.js](https://www.youtube.com/watch?v=6_ETUyh0tns) - [Nick Johnstone](https://twitter.com/widdnz)による発表
* [Cycle.js Fundamentals](https://egghead.io/series/cycle-js-fundamentals) - [egghead.io](https://egghead.io)でのプレイリスト
* [Cycle.js was built to solve problems](https://www.youtube.com/watch?v=Rj8ZTRVka4E) - Andre Staltzが行った[Frontend.fi](http://frontend.fi/)での発表
* [Brains as Building Blocks](https://www.youtube.com/watch?v=1ToJ7cxb1R8) - Andre Staltzが行った[CycleConf 2016](http://cycleconf.com/)での発表
* [Back to the Future, Hot reloading with Cycle.js](https://www.youtube.com/watch?v=rbrnyC5fXMM) - Nick Johnstoneが行った[CycleConf 2016](http://cycleconf.com/)での発表
* [From MVC to FRP](https://www.youtube.com/watch?v=-PCq4pXaDZw) - Gleb Bahmutovが行った[CycleConf 2016](http://cycleconf.com/)での発表
* [Cycle.js on the bash side](https://www.youtube.com/watch?v=Rx5N99TQ52g) - Hadrien de Cuzeyが行った[CycleConf 2016](http://cycleconf.com/)での発表
* [Reactive Programming with Cycle.js](https://vimeo.com/175121069) - ルカ・メッツァリラが執筆した [JSDay 2016](http://2016.jsday.it/)
* [Learning how to ride: an introduction to Cycle.js](https://youtu.be/31URmaeNHSs) - フェルナンド・マキアス・ペレスニートが執筆した [JS Monthly London](http://www.meetup.com/js-monthly-london/)
* [User Interfaces as Pure Functions of Time](https://www.youtube.com/watch?v=9BG0Y3C6WqM) - [Thomas Belin](http://twitter.com/atomrc)が[dotjs 2016](http://dotjs.io/)で行ったライトニングトーク

<a id="slides"></a>
### スライド

* [Cycle.js an honestly reactive framework for web user interfaces](http://slides.com/erykpiast/cycle) - エリク・ナピエラーラが執筆した
* [Intro to Cycle.js](http://www.slideshare.net/aryelukashevski/cyclejs-introduction) - アリーニ・ルカシェフキーが執筆した
* [Reactive Programming with Cycle.js](http://www.slideshare.net/flashplatform/reactive-programming-with-cyclejs) - ルカ・メッツァリラが執筆した
* [Cycle.js - building apps with streams only](http://lmatteis.github.io/cyclejs-slides/keynote/index.html) - ルカ・マテイスが執筆した
* [Functional Reactive Programming with Cycle.js](https://slides.com/artfuldev/frp-with-cycle-js) - スダラサン・バルアージが執筆した
* [Beyond flux: going full cycle with FRP](https://clementd-files.cellar.services.clever-cloud.com/blog/frp-full-cycle-ncrafts.html) - [Clément Delafargue](http://clementd.cleverapps.io/)が執筆した

<a id="example-applications"></a>
### サンプルアプリケーション

* [**cyclejs/cycle-examples**](https://github.com/cyclejs/cyclejs/tree/master/examples) - Cycle.jsの小さな例の公式コレクション
* [Widdershin/tricycle ★23](https://github.com/Widdershin/tricycle) - Cycle.jsを試すためのスクラッチパッド、Ace EditorとCycleを用いている
* [cgeorg/todomvp ★21](https://github.com/cgeorg/todomvp) - 最小限のピザアプリ、Cycle.jsで書かれたウェブアプリの例
* [erykpiast/cyclejs-examples ★9](https://github.com/erykpiast/cyclejs-examples) - Cycle.jsで構築されたウェブアプリの例
* [grozen/trends-cycle ★3](https://github.com/grozen/trends-cycle) - Cycle.jsで書かれたスラックトレンド検索
* [ivan-kleshnin/cyclejs-examples ★120](https://github.com/ivan-kleshnin/cyclejs-examples) - CycleJSの例のコレクション、ES6
* [ivan-kleshnin/tetris-cyclejs ★12](https://github.com/ivan-kleshnin/tetris-game) - Cycle.jsで実装されたテトリスゲーム
* [phadej/graafi ★20](https://github.com/phadej/graafi) - SVGとグローバルな取り消し・やり直し機能を用いたCycle.jsの実験
http://oleg.fi/graafi/
* [**staltz/matrixmultiplication.xyz ★548**](https://github.com/staltz/matrixmultiplication.xyz) - インタラクティブなマトリクス乗算 [webapp](http://matrixmultiplication.xyz/)
* [**staltz/rxmarbles ★2,577**](https://github.com/staltz/rxmarbles) - Rx Observableのインタラクティブな図解 http://rxmarbles.com/
* [MarcCloud/magic-cart ★6](https://github.com/MarcCloud/magic-cart) - 魔法の生き物店のシンプルなショッピングカート
* [foxdonut/cycle-todolist ★11](https://github.com/foxdonut/cycle-todolist) - CRUD機能を備えたシンプルなCycle.js TODOリストアプリの例
* [**Mercateo/component-check ★468**](https://github.com/Mercateo/component-check) - Cycle.jsコンポーネントを構築するための一般的なパターン
* [edge/electron-cycle-media ★27](https://github.com/edge/electron-cycle-media) - Electronで書かれたメディアプレイヤー
* [kibin/cycle-example-who-to-follow ★16](https://github.com/kibin/cycle-example-who-to-follow) - GitHub APIを用いて、Twitterの「誰にフォローするか」のボックスを部分的に実装した小さな例
* [SkaterDad/cycle-snabbdom-examples ★12](https://github.com/SkaterDad/cycle-snabbdom-examples) - snabbdom特有のアニメーションを使用したネストされたコンポーネントの例
* [bahmutov/draw-cycle ★112](https://github.com/bahmutov/draw-cycle) - MVIコンポーネント内のデータフローをインタラクティブに可視化したカウンターアプリケーション [glebbahmutov.com/draw-cycle](https://glebbahmutov.com/draw-cycle/)
* [andreloureiro/pomocycle ★21](https://github.com/andreloureiro/pomocycle) - シンプルなポモドーロタイマー
* [laszlokorte/tams-tools ★24](https://github.com/laszlokorte/tams-tools) - Cycle.jsで構築されたコンピューターサイエンスの教育・学習ツールセット
* [lucamezzalira/jsday-cycle-js ★16](https://github.com/lucamezzalira/jsday-cycle-js) - Cycle.jsで構築されたロンドン地下鉄のリアルタイム運行状況サンプル
* [cyclejs-community/built-with-cycle ★9](https://github.com/cyclejs-community/built-with-cycle) - Cycle.jsで構築されたプロジェクトを紹介する[ウェブサイト](http://cyclejs-community.github.io/built-with-cycle)
* [class-ideas/cyclejs-hangman ★10](https://github.com/class-ideas/cyclejs-hangman) - Cycle.jsで構築されたハンガーゲーム
* [wmaurer/cyclejs-fractals ★15](https://github.com/wmaurer/cyclejs-fractals) - ダンシング・ピタゴラス・ツリー・フラクタル - 2048個のSVGノードをアニメーション
* [fabiothiroki/cyclejs-starwars ★2](https://github.com/fabiothiroki/cyclejs-starwars) - Cycle.js、RxJSおよび仮想DOMテストを用いたスターウォーズキャラクター検索アプリ
* [staltz/mmmmm-mobile ★124](https://github.com/staltz/mmmmm-mobile/) - React Native + Cycle.jsで構築された、セキュア・スキュルバートネットワーク上のソーシャルネットワーク実装アプリ
* [cyclejs/todomvc-cycle ★214](https://github.com/cyclejs/todomvc-cycle/) - TodoMVC [example](https://cyclejs.github.io/todomvc-cycle/) をCycle.jsで実装
* [jefersondaniel/cyclejs-notes](https://github.com/jefersondaniel/cyclejs-notes/) - Cycle.jsとOrbit.jsを用いたノートアプリ https://jefersondaniel.com/cyclejs-notes
* [staltz/dat-installer ★77](https://github.com/staltz/dat-installer) - Datを用いてAndroidアプリをダウンロード・インストール・更新
* [usm4n/cycle-hn ★25](https://github.com/usm4n/cycle-hn) - CycleJSを用いたHackernewsのクローン
* [lizraeli/cycle-github-emojis](https://github.com/lizraeli/cycle-github-emojis) - Cycle.JSで作成されたGitHubエモジービューア [webapp](https://github-emoji.levizraelit.com/)
* [perjerz3434/meetup.com ★1](https://github.com/perjerz3434/meetup.com) - 世界中でMeetup.comのRSVPを可視化するCycleJSアプリ

<a id="tools"></a>
## ツール

<a id="cli"></a>
### CLI

* [cyclejs-community/create-cycle-app ★160](https://github.com/cyclejs-community/create-cycle-app) - Build設定なしでCycle.jsアプリを作成

<a id="libraries"></a>
## ライブラリ

<a id="drivers"></a>
### ドライバー

* [@cycle/http](https://github.com/cyclejs/cyclejs/tree/master/http) - superagentをベースにしたCycle.jsによるHTTPリクエストドライバー
* [**@cycle/dom**](https://github.com/cyclejs/cyclejs/tree/master/dom) - snabbdomを仮想DOMライブラリとして用いたCycle.jsによるDOM操作ドライバー
* [@cycle/storage](https://github.com/cyclejs/storage) - localStorageおよびsessionStorageを用いたCycle.jsドライバー
* [@cycle/history](https://github.com/cyclejs/cyclejs/tree/master/history) - これは標準的なCycle.jsドライバーで [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)を扱うもの
* [@cycle/isolate](https://github.com/cyclejs/cyclejs/tree/master/isolate) - Cycle.js でスコープ付きデータフローコンポーネントを作成するためのユーティリティ関数
* [@cycle/time](https://github.com/cyclejs/cyclejs/tree/master/time) - Cycle.js 用の高速かつ美しいテストおよび時間管理
* [cyclejs/cycle-notification-driver ★20](https://github.com/cyclejs/cycle-notification-driver) - Cycle.js 用の HTML5 通知の表示と反応用ドライバー
* [axefrog/cycle-router5 ★30](https://github.com/axefrog/cycle-router5) - Router5 を使用したルータードライバー
* [cgeorg/cycle-socket.io ★27](https://github.com/cgeorg/cycle-socket.io) - Socket.IO クライアント用の Cycle.js ドライバー
* [secobarbital/cycle-fetch-driver ★2](https://github.com/secobarbital/cycle-fetch-driver) - Fetch API を使用して HTTP リクエストを送信するための Cycle.js ドライバー
* [r7kamura/cycle-fetcher-driver ★14](https://github.com/r7kamura/cycle-fetcher-driver) - Fetch API を使用して HTTP リクエストを送信するための Cycle.js ドライバー [stackable-fetcher](https://github.com/r7kamura/stackable-fetcher)
* [benji6/cycle-audio-graph ★12](https://github.com/benji6/cycle-audio-graph) - [virtual-audio-graph](https://github.com/benji6/virtual-audio-graph) を使用して Web Audio API を操作するための Cycle.js ドライのバー
* [CyclicMaterials/cycle-hammer-driver ★11](https://github.com/CyclicMaterials/cycle-hammer-driver) - Hammer.js をラップし、タッチジェスチャーを検知するための Cycle.js ドライバー
* [jessaustin/cycle-sse-driver ★6](https://github.com/jessaustin/cycle-sse-driver) - サーバー送信イベント/EventSource 用のソースドライバー
* [tylors/cycle-snabbdom ★41](https://github.com/TylorS/cycle-snabbdom) - Snabbdom を使用した DOM ドライバー
* [cyclejs-community/cyclic-router ★90](https://github.com/cyclejs-community/cyclic-router) - Cycle.js 用に構築されたルータードライバー
* [Widdershin/cycle-animation-driver ★33](https://github.com/Widdershin/cycle-animation-driver) - requestAnimationFrame 用の Cycle.js ドライバー
* [dralletje/cycle-firebase ★21](https://github.com/dralletje/cycle-firebase) - Firebase 用の Cycle.js ドライバー
* [edge/cycle-blessed ★46](https://github.com/edge/cycle-blessed) - ターミナルアプリケーション用の Cycle.js ドライバー
* [10clouds/cyclejs-cookie ★2](https://github.com/10clouds/cyclejs-cookie) - Cycle.js用Cookieドライバー
* [whitecolor/cycle-async-driver ★25](https://github.com/whitecolor/cycle-async-driver) - 非同期リクエスト・レスポンス用Cycle.jsドライバーのファクトリー
* [raquelxmoss/cycle-keys ★35](https://github.com/raquelxmoss/cycle-keys) - キーボードイベントドライバー
* [rektide/recyclec ★0](https://github.com/rektide/recyclec) - リードラインドライバー
* [goodmind/cycle-telegram ★15](https://github.com/goodmind/cycle-telegram) - Telegram Bot API用Cycle.jsドライバー
* [apoco/cycle-electron-driver ★22](https://github.com/apoco/cycle-electron-driver) - ElectronインターフェースとCycle.jsアプリケーションを連携するドライバー
* [rkrupinski/cyclejs-animated-localstorage ★12](https://github.com/rkrupinski/cyclejs-animated-localstorage) - localStorageをアニメーションさせるCycle.jsドライバー
* [cyclejs-community/cycle-keyboard ★9](https://github.com/cyclejs-community/cycle-keyboard) - Cycle.js用キーボードドライバー
* [garrydzeng/cycle-page ★3](https://github.com/garrydzeng/cycle-page) - Cycle.js向けの軽量クライアントサイドルーター
* [jbowden1982/cycle-socketcluster ★5](https://github.com/jbowden1982/cycle-socketcluster) - Cycle.js用SocketClusterドライバー
* [cyclejs-community/redux-cycles ★599](https://github.com/cyclejs-community/redux-cycles) - ReduxミドルウェアからアクションのライフサイクルをCycle.jsへ接続します
* [JuniperChicago/cycle-gun ★18](https://github.com/JuniperChicago/cycle-gun) - gun.jsインスタンスをラップし、グラフストレージとP2P同期を可能にする基本的なCycle.jsドライバー
* [EnigmaCurry/cycle-deepstream ★8](https://github.com/EnigmaCurry/cycle-deepstream) - [deepstream.io](https://deepstream.io)用Cycle.jsドライバー
* [Alex0007/cycle-express-driver ★1](https://github.com/Alex0007/cycle-express-driver) - Express.jsサーバー用Cycle.jsドライバー
* [mrpierrot/cycle-node-http-server ★4](https://github.com/mrpierrot/cycle-node-http-server) - Node.js HTTP(S)サーバー用Cycle.jsドライバー
* [mrpierrot/cycle-net ★0](https://github.com/mrpierrot/cycle-net) - Node.js HTTP(S)/WS(S)/Socket.io サーバー用の Cycle.js ドライバー
* [Avalander/cycle-idb ★4](https://github.com/Avalander/cycle-idb) - IndexedDB とのインタラクションを包む Cycle.js ドライバー
* [unhappychoice/cycle-pusher ★1](https://github.com/unhappychoice/cycle-pusher) - [Pusher](https://pusher.com/) 用の Cycle.js ドライバー
* [helmoski/cycle-selection-driver](https://github.com/helmoski/cycle-selection-driver) - [Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection) とのインタラクションを実現する Cycle.js ドライバー
* [mjyc/cycle-posenet-driver ★1](https://github.com/mjyc/cycle-robot-drivers/tree/master/3rdparty/cycle-posenet-driver) - [TensorFlow.js](https://js.tensorflow.org/) が駆動する [PoseNet](https://github.com/tensorflow/tfjs-models/tree/master/posenet) を用いたポーズ検出に使う Cycle.js ドライバー
* [@cycle-robot-drivers/speech ★1](https://github.com/mjyc/cycle-robot-drivers/tree/master/speech) - [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) を用いた音声合成および認識に使う Cycle.js ドライバー
* [@cycle-robot-drivers/sound ★1](https://github.com/mjyc/cycle-robot-drivers/tree/master/sound) - [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement) を用いて音を再生する Cycle.js ドライバー

<a id="utilities"></a>
### ユーティリティ

* [staltz/chai-virtual-dom ★24](https://github.com/staltz/chai-virtual-dom) - 仮想DOM VTreesのテストに使う Chai の断言補助関数
* [cgeorg/sinject ★10](https://github.com/cgeorg/sinject) - Cycleの循環依存関係をサポートする依存性注入ツール
* [erykpiast/cyclejs-group ★20](https://github.com/erykpiast/cyclejs-group) - CycleJSフレームワークでストリームのグループを作成する際に必要なボイラープレートを減らすためのユーティリティ
* [erykpiast/cyclejs-wc ★2](https://github.com/erykpiast/cyclejs-wc) - Cycle.jsを基にしたウェブコンポーネントを作成するためのユーティリティ
* [**ohanhi/hyperscript-helpers ★390**](https://github.com/ohanhi/hyperscript-helpers) - hyperscriptまたは仮想hyperscriptを書くためにelm-htmlをインスピレーションとした補助関数
* [**pH200/cycle-react ★342**](https://github.com/pH200/cycle-react) - 仮想DOMではなくReactを使う、CycleのようなAPI
* [madcapjake/earlhyperscript ★2](https://github.com/MadcapJake/earl-hyperscript) - Earl Greyの[document-building syntax](https://breuleux.github.io/earl-grey/doc.html#documentbuildingsyntax)をCycle.jsで使うためのヘルパー関数とマクロ
* [WorldMaker/cycle-gear ★4](https://github.com/WorldMaker/cycle-gear) - CycleのMVIパターンを形式化した上で構築されたCycleベースのメイン関数ファクトリー
* [SuperManitu/cyclejs-sortable ★15](https://github.com/cyclejs-community/cyclejs-sortable) - ドラッグアンドドロップで1行のコードですべての項目をソート可能に！
* [atomrc/cyclejs-auth0 ★22](https://github.com/atomrc/cyclejs-auth0) - Auth0をCycle.jsアプリで使うために必要なすべてのもの（ドライバー＋コンポーネント）
* [**staltz/cycle-onionify ★244**](https://github.com/staltz/cycle-onionify) - Cycle.jsアプリ用のフラクタル状態管理
* [maiermic/cycle-storageify ★5](https://github.com/maiermic/cycle-storageify) - Cycle.jsコンポーネント（メイン関数）に、そのネオン型の状態をローカルストレージに保存する機能を追加
* [shfrmn/cycle-lot](https://github.com/shfrmn/cycle-lot) - Cycle.jsコンポーネントの動的リストを簡単に扱えます（完全なTypescriptサポート）
* [sarimarton/powercycle](https://powercycle.js.org) - Cycle.js上に静的VDOM構成とReact風開発を提供

<a id="boilerplates"></a>
### ボイラープレート

* [andreloureiro/cyclejs-starter ★50](https://github.com/andreloureiro/cyclejs-starter) - ES6とライブリロードを備えたCycle.jsスタートテンプレート
* [Frikki/generator-cyclejs ★2](https://github.com/Frikki/generator-cyclejs) - Yeomanを使ってCycle.jsネストダイアログモジュールをスケルトン化
* [**edge/cyc ★194**](https://github.com/edge/cyc) - 数秒で同士異形Cycle.jsアプリをスケルトン化
* [cmdv/cycle-webpack-boilerplate ★101](https://github.com/Cmdv/cycle-webpack-boilerplate) - ルーティング、状態管理、テストを備えたCycleアプリ
* [Widdershin/cycle-hot-reloading-example ★27](https://github.com/Widdershin/cycle-hot-reloading-example) - browserify-hmrを使用したCycle.jsスタートプロジェクト（ホットリロード）
* [mciparelli/cycle-hmr-example ★0](https://github.com/mciparelli/cycle-hmr-example) - browserifyとcycle-hmrを使用したCycle.jsスタートプロジェクト
* [cycle-community/typescript-starter-cycle ★22](https://github.com/cyclejs-community/typescript-starter-cycle) - TypeScriptをCycle.jsで初めて使うためのシンプルなプロジェクト。Visual Studio Codeの設定も含む。
* [wyqydsyq/unicycle ★6](https://github.com/wyqydsyq/unicycle) - WebpackでHMRとServiceWorkersを活用したKoa.jsサーバー上で動作するユニバーサルCycleアプリのスケルトン
* [syarul/cycle-iso ★4](https://github.com/syarul/cycle-iso) - Promiseに基づくデータストリームとFalcor.jsでフェッチされた、極めてシンプルなCycleアプリのスケルトン
* [snowpack-cycle](https://github.com/rajasegar/snowpack-cycle) - Cycle.jsプロジェクトを作成するcreate-snowpack-app用Snowpackテンプレート

<a id="testing"></a>
### テスト

* [erykpiast/cyclejs-mock ★22](https://github.com/erykpiast/cyclejs-mock) - Cycle.jsアプリケーションをテストするためのユーティリティ
* [jeysal/pretty-format-snabbdom ★0](https://github.com/jeysal/pretty-format-snabbdom) - A [pretty-format](https://github.com/facebook/jest/tree/master/packages/pretty-format) ([Jest](https://facebook.github.io/jest/) snapshot) プラグインで、snabbdom VNodeのスナップショットをReact要素のスナップショットのようにきれいにレンダリング

<a id="debugging"></a>
### デバッグ

* [**cyclejs/cycle-time-travel ★213**](https://github.com/cyclejs/cycle-time-travel) - Cycle.jsアプリケーション向けタイムトラベルデバッガー。時間軸をドラッグして過去の状態を確認できるストリーム可視化を表示します

<a id="components"></a>
### コンポーネント

* [erykpiast/autocompleted-select ★10](https://github.com/erykpiast/autocompleted-select) - RxJSおよびVirtualDOMに基づくウェブコンポーネント選択機能（自動補完）
* [enten/cyclejs-calendar ★11](https://github.com/enten/cyclejs-calendar) - Cycle.js向けカレンダーコンポーネント。[オンラインデモ](http://enten.github.io/cyclejs-calendar/example)
* [mciparelli/cyclejs-gravatar ★0](https://github.com/mciparelli/cyclejs-gravatar) - Cycle.jsでGravatarプロフィール画像を描画するコンポーネント
* [tommy-the-runner/cyclejs-ace-editor ★0](https://github.com/tommy-the-runner/cyclejs-ace-editor) - [brace](https://github.com/thlorenz/brace)を使用したCycle.jsとAce Editorの統合。[サンプル](https://tommy-the-runner.github.io/cyclejs-ace-editor/)
* [raquelxmoss/cycle-color-picker ★44](https://github.com/raquelxmoss/cycle-color-picker) - Cycle.js向けカラーピッカーコンポーネント。[サンプル](https://raquelxmoss.github.io/cycle-color-picker)
* [cyclejs-community/cycle-svg-pan-and-zoom ★4](https://github.com/cyclejs-community/cycle-svg-pan-and-zoom) - Cycle.js向けGoogle Maps風SVGパン・ズームコンポーネント

<a id="community"></a>
## コミュニティ

* [Gitter chat](https://gitter.im/cyclejs/cycle-core) - 「どうやって…？」と尋ねる


<a id="license"></a>
## ライセンス

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)
