---
title: "brillout/awesome-redux"
description: "brillout/awesome-redux の定本スナップショット"
licenseSource: "github-brillout-awesome-redux-readme-md"
---

# Reduxライブラリと学習資料 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://rawgit.com/brillout/awesome-redux/master/redux-logo.svg" align="right" width="110">](http://redux.js.org/)

> ReduxはJavaScriptアプリ向けの状態コンテナーです。

 - 公式Webサイト: [`devarchy.com/redux`](https://devarchy.com/redux)
 - devarchyを使ってライブラリをカタログへ追加する
 
 <br/>

#### 目次
- [コードアーキテクチャ](#code-architecture)
- [ユーティリティ](#utilities)
- [コードスタイル](#code-style)
- [開発ツール／検査ツール](#dev-tools--inspection-tools)
- [React統合](#react-integration)
- [その他の統合](#other-integrations)
- [ボイラープレート](#boilerplate)
- [その他](#miscellaneous)
- [学習資料](#learning-material)
- [コミュニティ](#community)

<br/>

## コードアーキテクチャ

*ソースコード全体の構造を改善し、コードについての推論を容易にすることを目的とする。*

 - [redux-schema](https://github.com/ddsol/redux-schema) - Redux向けの自動アクション、リデューサー、検証。
 - [redux-tcomb](https://github.com/gcanti/redux-tcomb) - Redux向けの不変かつ型検査済みの状態・アクション。
 - [redux-action-tree](https://github.com/cerebral/redux-action-tree) - Reduxで動くCerebralシグナル。
 - [redux-elm](https://github.com/salsita/redux-elm) - JavaScriptにおけるElmアーキテクチャ。

## ユーティリティ

 - [redux-orm](https://github.com/tommikaikkonen/redux-orm) - Reduxストア内のリレーショナルデータを管理する、小さくシンプルで不変なORM。
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

### ストア永続化

 - [redux-storage](https://github.com/michaelcontento/redux-storage) - 柔軟なバックエンドを備えるRedux向け永続化レイヤー。
 - [redux-persist](https://github.com/rt2zz/redux-persist) - Reduxストアを永続化・再水和する。

### 副作用

*副作用／非同期アクション*

 - [redux-saga](https://github.com/yelouafi/redux-saga) - Reduxアプリ向け代替副作用モデル。
 - [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware) - 条件付き楽観的更新を伴うPromiseの解決・拒否に対応するReduxミドルウェア。
 - [redux-effects](https://github.com/redux-effects/redux-effects) - 純粋関数を書けば、redux-effectsが残りを処理する。
 - [redux-thunk](https://github.com/gaearon/redux-thunk) - Redux向けThunkミドルウェア。
 - [redux-connect](https://github.com/makeomatic/redux-connect) - react-routerで非同期propsを解決するデコレーターを提供し、Reactでのサーバーサイドレンダリング処理に非常に役立つ。
 - [redux-loop](https://github.com/redux-loop/redux-loop) - elm-effects・ElmアーキテクチャをReduxへ移植し、リデューサーから返すことで副作用を自然かつ純粋に連鎖させる。
 - [redux-side-effects](https://github.com/salsita/redux-side-effects) - 副作用をリデューサー内に保ちながら純粋性を維持するReduxツールセット。
 - [redux-logic](https://github.com/jeffbski/redux-logic) - ビジネスロジックとアクション副作用を組織するReduxミドルウェア。
 - [redux-observable](https://github.com/redux-observable/redux-observable) - &quot;Epics&quot;を使い、Reduxのアクション副作用を扱うRxJSミドルウェア。
 - [redux-ship](https://github.com/clarus/redux-ship) - 合成可能でテスト可能、型付け可能な副作用。

## コードスタイル

*ソースコードの一部を読み書きしやすくすることを目的とする。*

 - [redux-act](https://github.com/pauldijou/redux-act) - Redux向けアクション・リデューサーを作る意見のあるライブラリ。
 - [redux-crud](https://github.com/Versent/redux-crud) - Redux CRUDアプリケーション向け標準アクション・リデューサーのセット。

## 開発ツール／検査ツール

 - [redux-devtools-inspector](https://github.com/alexkuz/redux-devtools-inspector) - もう一つのRedux DevToolsモニター。
 - [redux-diff-logger](https://github.com/fcomb/redux-diff-logger) - Reduxの状態間差分ロガー。
 - [redux-devtools-chart-monitor](https://github.com/romseguy/redux-devtools-chart-monitor) - Redux DevTools向けチャートモニター。
 - [redux-devtools](https://github.com/gaearon/redux-devtools) - ホットリロード、アクション再生、カスタマイズ可能なUIを備えるRedux DevTools。
 - [redux-devtools-dispatch](https://github.com/YoruNoHikage/redux-devtools-dispatch) - アプリが適切にReactするか試すため、アクションを手動ディスパッチする。
 - [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) - Redux DevToolsモニター向け、サイズ変更・移動可能なドック。
 - [redux-devtools-filterable-log-monitor](https://github.com/bvaughn/redux-devtools-filterable-log-monitor) - Redux DevTools向けフィルタリング可能なツリービューモニター。
 - [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools-log-monitor) - ツリービューを持つRedux DevToolsの既定モニター。
 - [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools) - Redux DevToolsをリモートで使う。

## React統合

 - [redux-test-recorder](https://github.com/conorhastings/redux-test-recorder) - UI対話を通じてリデューサーのテストを自動生成するReduxミドルウェア。
 - [react-redux](https://github.com/reactjs/react-redux) - Redux向け公式Reactバインディング。
 - [react-easy-universal](https://github.com/keystonejs/react-easy-universal) - React・Reduxによるユニバーサルルーティングとレンダリングは難しすぎた。今は簡単。
 - [redux-form-material-ui](https://github.com/erikras/redux-form-material-ui) - Material UIをRedux Formと使いやすくするラッパーコンポーネントのセット。

### ルーティング

 - [redux-async-connect](https://github.com/Rezonans/redux-async-connect) - 非同期データを要求してRedux状態へ保存し、Reactコンポーネントへ接続できる。
 - [redux-tiny-router](https://github.com/Agamennon/redux-tiny-router) - Redux・ユニバーサルアプリ向けに作られたルーター。ルーターをコントローラーとして使うのをやめよう、これは単なる状態。
 - [redux-router](https://github.com/acdlite/redux-router) - React Router向けReduxバインディング &ndash; ルーター状態をReduxストア内に保持する。
 - [react-router-redux](https://github.com/reactjs/react-router-redux) - react-routerとReduxの同期を保つ、容赦なくシンプルなバインディング。
 - [ground-control](https://github.com/raisemarketplace/ground-control) - React Router・Redux向け、スケーラブルなリデューサー管理 &amp; 強力なデータ取得。

### フォーム

 - [redux-form](https://github.com/erikras/redux-form) - フォーム状態をReduxストアに保持するためreact-reduxを使う高階コンポーネント。
 - [react-redux-form](https://github.com/davidkpiano/react-redux-form) - Reduxを使いReactでフォームを簡単に作成する。

### コンポーネント状態

 - [redux-react-local](https://github.com/threepointone/redux-react-local) - Reduxを通じたローカルコンポーネント状態。
 - [redux-ui](https://github.com/tonyhb/redux-ui) - React Redux向けの簡単なUI状態管理。

## その他の統合

### Flux

 - [redux-actions](https://github.com/acdlite/redux-actions) - Redux向けFlux Standard Actionユーティリティ。
 - [redux-promise](https://github.com/acdlite/redux-promise) - Redux向けFSA準拠Promiseミドルウェア。

### Backbone

 - [backbone-redux](https://github.com/redbooth/backbone-redux) - backboneコレクションとReduxストアの同期を保つ簡単な方法。

### Falcor

 - [redux-falcor](https://github.com/ekosz/redux-falcor) - Reduxフロントエンドをfalcorバックエンドへ接続する。

### RxJS

 - [redux-observable](https://github.com/redux-observable/redux-observable) - &quot;Epics&quot;を使い、Reduxのアクション副作用を扱うRxJSミドルウェア。
 - [rx-redux](https://github.com/jas-chen/rx-redux) - RxJSを使ったReduxの再実装。
 - [redux-rx](https://github.com/acdlite/redux-rx) - Redux向けRxJSユーティリティ。
 - [redurx](https://github.com/shiftyp/redurx) - RxJSを使うRedux&#39;ishな関数型状態管理。

### Electron

 - [redux-electron-store](https://github.com/samiskin/redux-electron-store) - electronプロセス間の自動同期を可能にするReduxストアエンハンサー。

### Deku

 - [deku-redux](https://github.com/troch/deku-redux) - deku &lt; v2におけるReduxバインディング。

### その他

 - [redux-rollbar-middleware](https://github.com/netguru/redux-rollbar-middleware) - 例外をアクションでラップし、現在の状態とともにRollbarへ送信するReduxミドルウェア。
 - [kasia](https://github.com/outlandishideas/kasia) - WordPress API向けReact Reduxツールセット。

## ボイラープレート

*ボイラープレート／スキャフォールド／スターターキット／ジェネレーター／スタックアンサンブル*

 - [redux-cli](https://github.com/SpencerCDixon/redux-cli) - Redux/Reactアプリをより速く構築する、意見のあるCLI。
 - [reactuate](https://github.com/reactuate/reactuate) - React/Reduxスタック（ボイラープレートキットではない）。
 - [react-chrome-extension-boilerplate](https://github.com/jhen0409/react-chrome-extension-boilerplate) - Chrome Extension React.jsプロジェクト向けボイラープレート。
 - [universal-redux](https://github.com/bdefore/universal-redux) - ユニバーサル（アイソモーフィック）レンダリングでReact・Reduxのコーディングをすぐ開始できるNpmパッケージ。必要な場合にだけExpressセットアップ・Webpack設定を管理する。
 - [generator-react-aspnet-boilerplate](https://github.com/pauldotknopf/react-aspnet-boilerplate) - 既存の技法を活用し、ASP.NET Core 1でアイソモーフィックReactアプリケーションを構築するための出発点。
 - [generator-redux](https://github.com/banderson/generator-redux) - Redux向けCLIツール: 開発ツールを備えた次世代関数型Flux/React。
 - [generator-react-webpack-redux](https://github.com/stylesuxx/generator-react-webpack-redux) - Reduxサポートを含むReact Webpackジェネレーター。
 - [socrates](https://github.com/matthewmueller/socrates) - ボイラープレートを減らし、良い習慣を促進する小型（8kb）のバッテリー同梱Reduxストア。

## その他

 - [redux-core](https://github.com/jas-chen/redux-core) - 最小限のRedux。

## 学習資料

 - **Reduxの概念**

    [Redux公式ドキュメント](http://redux.js.org/)は、Reduxの中核原則を優れた形で説明している。

 - **なぜ不変データ構造なのか**

    React公式ドキュメントの[パフォーマンスガイド](https://facebook.github.io/react/docs/advanced-performance.html)は、不変データ構造とは何か、なぜ重要な役割を担うのかをよく説明している。

 - **副作用**

    [Redux Loopのreadme](https://github.com/redux-loop/redux-loop)は、Reduxの文脈における副作用について優れた洞察を与える。

上記の資料を読めば、Reduxでアプリを書くためのよい出発点が得られる。さらに知りたい場合は、次のリソースを確認してください。

 - **関数型プログラミング - 基礎**

    この[投稿](http://jaysoo.ca/2016/01/13/functional-programming-little-ideas/)は、YouTubeのインスタント検索デモアプリを構築しながら、関数型プログラミングの基本概念を扱う。

 - **リアクティブプログラミング**

    この[リアクティブプログラミング入門](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)は、リアクティブプログラミングを明快に説明する。

 - **関数型プログラミング - さらに先へ**

    よく書かれた[記事](https://medium.com/@chetcorcos/functional-programming-for-javascript-people-1915d8775504)は、関数型言語で実装される興味深いコンピューターサイエンス概念と、それがJavaScriptへどう適用されるかを扱う。

 - **モナド**

    モナドに興味がありますか？Wikipediaは[モナドの概要](https://en.wikipedia.org/wiki/Monad_(functional_programming))を提供し、[この記事](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)はグラフィックスと簡単な例を使いモナドをより詳しく説明する。

## コミュニティ

- [Reddit](https://www.reddit.com/r/reduxjs/)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/redux)
- [Discord](https://discord.gg/0ZcbPKXt5bZ6au5t)
- [Slack](http://slack.redux.io/)
- [Gitter](https://gitter.im/reactjs/redux)
- [`#rackt` on freenode](https://webchat.freenode.net/)
