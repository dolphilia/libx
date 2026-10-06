---
title: "Awesome Redux"
description: "Reduxの状態管理、副作用、デバッグ、各フレームワークとの連携に使うライブラリと、学習資料・コミュニティを収録。"
licenseSource: "github-brillout-awesome-redux-readme-md"
---

# Awesome Redux<a id="awesome-redux-libraries--learning-material"></a>

ReduxはJavaScriptアプリの状態を管理するためのライブラリです。コード構造、状態の永続化、副作用、デバッグ、Reactなどとの連携、プロジェクトのひな型に使うライブラリに加え、学習資料とコミュニティをまとめています。

## コードアーキテクチャ<a id="code-architecture"></a>

コード全体の構造を改善し、処理を理解しやすくするためのライブラリです。

 - [redux-schema](https://github.com/ddsol/redux-schema) - Redux向けの自動アクション、リデューサー、検証。
 - [redux-tcomb](https://github.com/gcanti/redux-tcomb) - Redux向けに不変の状態・アクションと型検査を提供。
 - [redux-action-tree](https://github.com/cerebral/redux-action-tree) - Reduxで動くCerebralシグナル。
 - [redux-elm](https://github.com/salsita/redux-elm) - JavaScriptにおけるElmアーキテクチャ。

## ユーティリティ<a id="utilities"></a>

 - [redux-orm](https://github.com/tommikaikkonen/redux-orm) - Reduxストア内のリレーショナルデータを管理する、小型でシンプルな不変ORM。
 - [redux-api-middleware](https://github.com/agraboso/redux-api-middleware) - APIを呼び出すReduxミドルウェア。
 - [redux-ignore](https://github.com/omnidan/redux-ignore) - Reduxアクションを無視する高階リデューサー。
 - [redux-modifiers](https://github.com/calvinfroedge/redux-modifiers) - さまざまなデータ構造を操作するReduxリデューサーを書くための汎用関数コレクション。
 - [rereduce](https://github.com/slorber/rereduce) - Redux向けリデューサーライブラリ。
 - [redux-search](https://github.com/treasure-data/redux-search) - クライアント側検索向けReduxバインディング。
 - [redux-logger](https://github.com/evgenyrodionov/redux-logger) - Redux向けロガーミドルウェア。
 - [redux-immutable](https://github.com/gajus/redux-immutable) - Immutable.js状態で動作するRedux combineReducers相当の関数を作成するために使う。
 - [reselect](https://github.com/reactjs/reselect) - Redux向けセレクターライブラリ。
 - [redux-requests](https://github.com/idolize/redux-requests) - 実行中リクエストをReduxリデューサーで管理し、重複したリクエスト発行を避ける。
 - [redux-undo](https://github.com/omnidan/redux-undo) - Redux状態コンテナーへ元に戻す／やり直す機能を加える高階リデューサー。
 - [redux-bug-reporter](https://github.com/dtschust/redux-bug-reporter) - Redux向けバグ報告・バグ再生ツール。
 - [redux-transducers](https://github.com/acdlite/redux-transducers) - Redux向けトランスデューサーユーティリティ。

### ストア永続化<a id="store-persistence"></a>

 - [redux-storage](https://github.com/michaelcontento/redux-storage) - 柔軟なバックエンドを備えるRedux向け永続化レイヤー。
 - [redux-persist](https://github.com/rt2zz/redux-persist) - Reduxストアを永続化し、保存した状態から復元。

### 副作用<a id="side-effects"></a>

副作用や非同期アクションを扱うライブラリです。

 - [redux-saga](https://github.com/yelouafi/redux-saga) - Reduxアプリ向け代替副作用モデル。
 - [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware) - 条件付き楽観的更新を伴うPromiseの解決・拒否に対応するReduxミドルウェア。
 - [redux-effects](https://github.com/redux-effects/redux-effects) - アプリのコードを純粋関数として書き、副作用の処理を担うライブラリ。
 - [redux-thunk](https://github.com/gaearon/redux-thunk) - Redux向けThunkミドルウェア。
 - [redux-connect](https://github.com/makeomatic/redux-connect) - react-routerで非同期propsを解決するデコレーター。Reactのサーバーサイドレンダリングを支援。
 - [redux-loop](https://github.com/redux-loop/redux-loop) - elm-effects・ElmアーキテクチャをReduxへ移植し、副作用をリデューサーから返して、自然かつ純粋に順序付ける。
 - [redux-side-effects](https://github.com/salsita/redux-side-effects) - すべての副作用をリデューサー内に保ちながら純粋性を維持するReduxツールセット。
 - [redux-logic](https://github.com/jeffbski/redux-logic) - ビジネスロジックとアクションの副作用を整理するReduxミドルウェア。
 - [redux-observable](https://github.com/redux-observable/redux-observable) - Epicsを使い、Reduxのアクション副作用を扱うRxJSミドルウェア。
 - [redux-ship](https://github.com/clarus/redux-ship) - 合成可能でテスト可能、型付け可能な副作用。

## コードスタイル<a id="code-style"></a>

コードの読み書きを支援するライブラリです。

 - [redux-act](https://github.com/pauldijou/redux-act) - 特定の設計方針に沿った、Reduxのアクション・リデューサー作成ライブラリ。
 - [redux-crud](https://github.com/Versent/redux-crud) - Redux CRUDアプリケーション向け標準アクション・リデューサーのセット。

## 開発ツール／検査ツール<a id="dev-tools--inspection-tools"></a>

 - [redux-devtools-inspector](https://github.com/alexkuz/redux-devtools-inspector) - もう一つのRedux DevToolsモニター。
 - [redux-diff-logger](https://github.com/fcomb/redux-diff-logger) - Reduxの状態間差分ロガー。
 - [redux-devtools-chart-monitor](https://github.com/romseguy/redux-devtools-chart-monitor) - Redux DevTools向けチャートモニター。
 - [redux-devtools](https://github.com/gaearon/redux-devtools) - ホットリロード、アクション再生、カスタマイズ可能なUIを備えるRedux DevTools。
 - [redux-devtools-dispatch](https://github.com/YoruNoHikage/redux-devtools-dispatch) - アクションを手動でディスパッチし、アプリの応答を確認。
 - [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) - Redux DevToolsモニター向け、サイズ変更・移動可能なドック。
 - [redux-devtools-filterable-log-monitor](https://github.com/bvaughn/redux-devtools-filterable-log-monitor) - Redux DevTools向けフィルタリング可能なツリービューモニター。
 - [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools-log-monitor) - ツリービューを持つRedux DevToolsの既定モニター。
 - [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools) - Redux DevToolsをリモートで使う。

## React統合<a id="react-integration"></a>

 - [redux-test-recorder](https://github.com/conorhastings/redux-test-recorder) - UI操作を通じてリデューサーのテストを自動生成するReduxミドルウェア。
 - [react-redux](https://github.com/reactjs/react-redux) - Redux向け公式Reactバインディング。
 - [react-easy-universal](https://github.com/keystonejs/react-easy-universal) - ReactとReduxのユニバーサルルーティング・レンダリングを簡単にするためのツール。
 - [redux-form-material-ui](https://github.com/erikras/redux-form-material-ui) - Material UIをRedux Formと使いやすくするラッパーコンポーネントのセット。

### ルーティング<a id="routing"></a>

 - [redux-async-connect](https://github.com/Rezonans/redux-async-connect) - 非同期データを要求してRedux状態へ保存し、Reactコンポーネントへ接続できる。
 - [redux-tiny-router](https://github.com/Agamennon/redux-tiny-router) - ルーティングをコントローラーではなく状態として扱う、Redux・ユニバーサルアプリ向けルーター。
 - [redux-router](https://github.com/acdlite/redux-router) - React Router向けReduxバインディング &ndash; ルーター状態をReduxストア内に保持する。
 - [react-router-redux](https://github.com/reactjs/react-router-redux) - react-routerとReduxの同期を保つバインディング。
 - [ground-control](https://github.com/raisemarketplace/ground-control) - React RouterとRedux向けの、規模を拡張できるリデューサー管理とデータ取得。

### フォーム<a id="forms"></a>

 - [redux-form](https://github.com/erikras/redux-form) - フォーム状態をReduxストアに保持するためreact-reduxを使う高階コンポーネント。
 - [react-redux-form](https://github.com/davidkpiano/react-redux-form) - Reduxを使ったReactフォーム作成。

### コンポーネント状態<a id="component-state"></a>

 - [redux-react-local](https://github.com/threepointone/redux-react-local) - Reduxを通じたローカルコンポーネント状態。
 - [redux-ui](https://github.com/tonyhb/redux-ui) - React Redux向けUI状態管理。

## その他の統合<a id="other-integrations"></a>

### Flux

 - [redux-actions](https://github.com/acdlite/redux-actions) - Redux向けFlux Standard Actionユーティリティ。
 - [redux-promise](https://github.com/acdlite/redux-promise) - Redux向けFSA準拠Promiseミドルウェア。

### Backbone

 - [backbone-redux](https://github.com/redbooth/backbone-redux) - BackboneコレクションとReduxストアの同期。

### Falcor

 - [redux-falcor](https://github.com/ekosz/redux-falcor) - ReduxフロントエンドをFalcorバックエンドへ接続する。

### RxJS

 - [redux-observable](https://github.com/redux-observable/redux-observable) - Epicsを使い、Reduxのアクション副作用を扱うRxJSミドルウェア。
 - [rx-redux](https://github.com/jas-chen/rx-redux) - RxJSを使ったReduxの再実装。
 - [redux-rx](https://github.com/acdlite/redux-rx) - Redux向けRxJSユーティリティ。
 - [redurx](https://github.com/shiftyp/redurx) - RxJSを使うReduxに似た関数型状態管理。

### Electron

 - [redux-electron-store](https://github.com/samiskin/redux-electron-store) - Electronプロセス間の自動同期を可能にするReduxストアエンハンサー。

### Deku

 - [deku-redux](https://github.com/troch/deku-redux) - v2未満のDeku向けReduxバインディング。

### その他<a id="other"></a>

 - [redux-rollbar-middleware](https://github.com/netguru/redux-rollbar-middleware) - 例外をアクションでラップし、現在の状態とともにRollbarへ送信するReduxミドルウェア。
 - [kasia](https://github.com/outlandishideas/kasia) - WordPress API向けReact Reduxツールセット。

## ボイラープレート<a id="boilerplate"></a>

ボイラープレート、スキャフォールド、スターターキット、ジェネレーター、アプリの技術スタックを収録しています。

 - [redux-cli](https://github.com/SpencerCDixon/redux-cli) - 特定の設計方針に沿って、Redux/Reactアプリを手早く構築するためのCLI。
 - [reactuate](https://github.com/reactuate/reactuate) - React/Reduxスタック（ボイラープレートキットではない）。
 - [react-chrome-extension-boilerplate](https://github.com/jhen0409/react-chrome-extension-boilerplate) - Chrome拡張機能のReact.jsプロジェクト向けボイラープレート。
 - [universal-redux](https://github.com/bdefore/universal-redux) - ユニバーサル（アイソモーフィック）レンダリングでReact・Reduxアプリを始めるためのnpmパッケージ。ExpressのセットアップやWebpackの設定は任意で管理可能。
 - [generator-react-aspnet-boilerplate](https://github.com/pauldotknopf/react-aspnet-boilerplate) - 既存の技法を活用し、ASP.NET Core 1でアイソモーフィックReactアプリケーションを構築するための出発点。
 - [generator-redux](https://github.com/banderson/generator-redux) - 開発ツールを備えた、Reduxによる関数型Flux/React開発向けCLI。
 - [generator-react-webpack-redux](https://github.com/stylesuxx/generator-react-webpack-redux) - Reduxサポートを含むReact Webpackジェネレーター。
 - [socrates](https://github.com/matthewmueller/socrates) - 機能を内蔵した小型（8kb）のReduxストア。ボイラープレートの削減と、よいコーディング習慣の促進が目的。

## その他<a id="miscellaneous"></a>

 - [redux-core](https://github.com/jas-chen/redux-core) - 最小限のRedux。

## 学習資料<a id="learning-material"></a>

 - Reduxの概念

    [Redux公式ドキュメント](http://redux.js.org/)は、Reduxの基本原則を説明しています。

 - なぜ不変データ構造なのか

    React公式ドキュメントの[パフォーマンスガイド](https://facebook.github.io/react/docs/advanced-performance.html)は、不変データ構造とパフォーマンス上の役割を説明しています。

 - 副作用

    [Redux LoopのREADME](https://github.com/redux-loop/redux-loop)は、Reduxにおける副作用を扱います。

最初の3資料はReduxの基礎を扱います。以下では関数型プログラミングとリアクティブプログラミングを学べます。

 - 関数型プログラミング - 基礎

    この[記事](http://jaysoo.ca/2016/01/13/functional-programming-little-ideas/)は、YouTubeのインスタント検索デモアプリを構築しながら、関数型プログラミングの基本概念を扱います。

 - リアクティブプログラミング

    この[リアクティブプログラミング入門](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)は、リアクティブプログラミングを紹介しています。

 - 関数型プログラミング - さらに先へ

    この[記事](https://medium.com/@chetcorcos/functional-programming-for-javascript-people-1915d8775504)は、関数型言語で実装されるコンピューターサイエンスの概念と、それがJavaScriptへどう適用されるかを扱います。

 - モナド

    Wikipediaは[モナドの概要](https://en.wikipedia.org/wiki/Monad_(functional_programming))を示し、[図解記事](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)は図と簡単な例を使ってモナドをより詳しく説明しています。

## コミュニティ<a id="community"></a>

- [Reddit](https://www.reddit.com/r/reduxjs/)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/redux)
- [Discord](https://discord.gg/0ZcbPKXt5bZ6au5t)
- [Slack](http://slack.redux.io/)
- [Gitter](https://gitter.im/reactjs/redux)
- [`#rackt`（freenode）](https://webchat.freenode.net/)
