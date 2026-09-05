---
title: "Awesome choo :steam locomotive"
description: "choo :steam locomotiveを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-choojs-awesome-choo-readme-md"
---

# Awesome choo :steam locomotive

choo :steam locomotiveを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [公式リソース](#official-resources)
- [依存関係](#dependencies)
- [デモ](#demos)
- [コミュニティ](#community)
- [プラグインとアドオン](#plugins-and-addons)
- [要素](#elements)
- [CLI テンプレート](#cli-templates)
- [リソース](#resources)
- [choo を使うプロジェクト](#projects-using-choo)

### 公式リソース

- [ドキュメント](https://github.com/yoshuawuyts/choo/blob/master/README.md)
- [ハンドブック](https://github.com/yoshuawuyts/choo-handbook)
- [リポジトリ](https://github.com/yoshuawuyts/choo)
- [ウェブサイト](https://choo.io/)
- [Twitter スレッド](https://twitter.com/yoshuawuyts/status/730087077803528193)

### 依存関係
`choo` はモジュール式フレームワークです。内部で次の依存関係を
組み合わせています。

- [bel](https://github.com/shama/bel) - テンプレート文字列を使って合成可能な DOM 要素を
  作成。
- [hyperx](https://github.com/substack/hyperx) - テンプレート文字列を
  ライブラリのバックエンドへ変換。
- [nanomorph](https://github.com/choojs/nanomorph) - 実 DOM ノード向けの超高速差分アルゴリズム。
- [nanoraf](https://github.com/yoshuawuyts/nanoraf) - 必要なときだけ RAF を呼び出します。
- [nanorouter](https://github.com/choojs/nanorouter) - 小さなフロントエンドルーター。
- [nanobus](https://github.com/choojs/nanobus) - 小型メッセージバス。
- [nanolocation](https://github.com/choojs/nanolocation) - 小さな window.location ライブラリ。
- [nanohref](https://github.com/choojs/nanohref) - 小型 href クリックハンドラーライブラリ。
- [nanoquery](https://github.com/choojs/nanoquery) - 小型クエリ文字列モジュール。
- [nanotiming](https://github.com/choojs/nanotiming) - 小さなタイミングライブラリ。

### デモ

- [入力の例](http://requirebin.com/?gist=e589473373b3100a6ace29f7bbee3186) -（[リポジトリ](https://github.com/yoshuawuyts/choo/tree/master/examples/title)）
- [HTTP エフェクト](https://hyperdev.com/#!/project/fork-fang)
- [メールボックスルーティング](https://github.com/yoshuawuyts/choo/tree/master/examples/mailbox)
- [TodoMVC](http://shuheikagawa.com/todomvc-choo) -（[リポジトリ](https://github.com/shuhei/todomvc-choo)）
- [choo-firebase](https://choo-firebase-2ec21.firebaseapp.com) -（[リポジトリ](https://github.com/mw222rs/choo-firebase)）
- [Grow](https://grow.static.land) -（[リポジトリ](https://github.com/sethvincent/grow)）
- [Chatbot](http://chootbot.herokuapp.com) -（[リポジトリ](https://github.com/plaey/chatbot)）
- [chat-random](https://github.com/akiva/chat-random)
- [choo-leaflet-demo](https://github.com/timwis/choo-leaflet-demo)
- [choo-scriber](https://zhouhansen.github.io/choo-scriber) -（[リポジトリ](https://github.com/ZhouHansen/choo-scriber)）

### コミュニティ

- [Freenode](https://webchat.freenode.net/?channels=choo)

### プラグインとアドオン

- [choo-location-electron](https://github.com/bcomnes/choo-location-electron) - Electron で `choo` のルーターを修正。
- [choo-log](https://github.com/yoshuawuyts/choo-log) - choo 向け開発ロガー。
- [choo-test](https://github.com/mantoni/choo-test) - choo アプリの簡単な単体テスト。
- [choo-persist](https://github.com/yoshuawuyts/choo-persist/) - choo の状態を LocalStorage と同期。
- [choo-promise](https://github.com/rahatarmanahmed/choo-promise) - エフェクトと購読で Promise を使用。
- [choo-pull](https://github.com/yoshuawuyts/choo-pull) - choo プラグインで pull-stream を使うためハンドラーをラップ。
- [choo-redirect](https://github.com/yoshuawuyts/choo-redirect) - ビューを別のビューへリダイレクト。
- [choo-model](https://github.com/yoshuawuyts/choo-model) - choo 向けの実験的な状態管理ライブラリ。
- [choo-resume](https://github.com/bengourley/choo-resume) - choo-resume + hot-rld により、choo でアプリをホットリロード。
- [choo-detached](https://github.com/graforlock/choo-detached) - `choo` をマウント可能なシンプルな独立コンポーネントとして使用（ルーティングなし）。
- [choo-service-worker](https://github.com/choojs/choo-service-worker) - `choo` 向け Service Worker ローダー。
- [choo-websocket](https://github.com/YerkoPalma/choo-websocket) - `choo` アプリ向けのブラウザー WebSocket API の小さなラッパー。
- [choo-store](https://github.com/ungoldman/choo-store) - choo アプリ向けの軽量な状態構造。

### 要素

- [dom-notifications](https://github.com/finnp/dom-notifications) - Atom に着想を得た通知コンポーネント。
- [choodown](https://github.com/trainyard/choodown) - choo 向けのシンプルな Markdown コンポーネント。
- [choo-md-editor](https://github.com/dbtek/choo-md-editor) - Choo アプリ内または独立ライブラリとして使える軽量 Markdown エディター。
- [choo-chartist](https://github.com/rexmortus/choo-chartist) - choo フレームワークで [Chartist](https://gionkunz.github.io/chartist-js/) を使う小さなコンポーネント。

### CLI テンプレート

[choo-cli](https://github.com/trainyard/choo-cli) 向けテンプレート

- [trainyard/template-basic](https://github.com/trainyard/template-basic)
- [haroenv/template-webpack](https://github.com/haroenv/template-webpack)
- [simonwjackson/atomic-choo](https://github.com/simonwjackson/atomic-choo) - Electron、Webpack、choo を使う開発を始めるための方針を持ったプロジェクトひな型。

その他の CLI テンプレート
- [graforlock/choo-bandwagon](https://github.com/graforlock/choo-bandwagon)

### リソース
> :movie_camera:：動画
> :computer:：チュートリアル
> :book:：記事

- :computer: [最初の choo アプリ](https://yoshuawuyts.gitbooks.io/choo/content/02_your_first_app.html)
- :movie_camera: [TCBY コミュニティのライブ交流会](https://www.youtube.com/watch?v=a97Mw2z1SAI)
- :book: [より良いフロントエンド体験](https://medium.com/@yoshuawuyts/a-better-frontend-experience-7b0498c85658)
- :book: [CycleJS、choo、React、Angular2 における合成](http://blog.krawaller.se/posts/composition-in-cyclejs-choo-react-and-angular2)
- :book: [choo の愚かなほど賢いコンポーネント](http://blog.krawaller.se/posts/stupidly-smart-components-in-choo)

### choo を使うプロジェクト

- [boxcar](https://github.com/toddself/boxcar) - choo ベースのグリッド・スプレッドシートエディター。
- [choo-sortable](https://github.com/willkessler/choo-sortable) - choo で並べ替え可能なコードを構築。
- [hacker-choo](https://github.com/mw222rs/hacker-choo) - choo で書かれた Hacker Typer クローン。
- [footprint-rechoo](https://github.com/npeihl/footprint-rechoo) - [footprint-review](http://github.com/sjcgis/footprint-review) を choo で書き直したもの。
- [minidocs](https://github.com/freeman-lab/minidocs) – choo で構築されたドキュメントサイト生成器。
- [dataface](https://github.com/timwis/dataface) - データベースを管理するデスクトップアプリケーション。
- [BlankUp](https://github.com/HoverBaum/BlankUp-Electron) - マルチプラットフォームの Markdown エディター。
- [hackernews-choo](https://github.com/kvnneff/hackernews-choo) - choo で構築された Hacker News リーダー。
- [tic-tac-choo](https://github.com/YerkoPalma/tic-tac-toe) - choo 製のプログレッシブ三目並べゲーム。
- [enviar](https://github.com/timwis/enviar) - SMS・テキストメッセージ向けチャットインターフェース。
- [kaktus](https://github.com/kaktus/kaktus) - `choo` と IndexedDB 上に構築された新しい最小主義ウェブブラウザー。
- [civicdr.org](https://github.com/CiviCDR/civicdr.org) - [CiviCDR](https://civicdr.org/) のウェブサイト。
- [nekocafe](https://github.com/notenoughneon/nekocafe) - ウェブチャットルーム :cat: :speech_balloon:。
- [Robotopia](https://github.com/robotopia-x/robotopia) - 小さな仮想ロボットで子どもたちにコーディングを紹介！
- [busca](https://github.com/afk-mcz/busca) - Reddit で現在のタブを検索する小さなウェブ拡張機能。
- [choo-ban](https://github.com/luizbaldi/choo-ban) - `choo` で構築された、ボード上のタスクを管理するシンプルなカンバン。
- [boowa](https://github.com/boowajs/boowa) - `choo` で構築された楽しいブログ生成器。
- [hyperamp](https://github.com/hypermodules/hyperamp) - 控えめな音楽プレーヤー。

### ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲において、[Yerko Palma](https://github.com/YerkoPalma) はこの作品に関するすべての著作権および関連する権利、隣接権を放棄しています。
