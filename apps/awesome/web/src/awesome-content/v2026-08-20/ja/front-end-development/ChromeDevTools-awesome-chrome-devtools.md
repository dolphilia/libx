---
title: "Awesome Chrome DevTools"
description: "Chrome DevToolsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-ChromeDevTools-awesome-chrome-devtools-readme-md"
---

# Awesome Chrome DevTools

Chrome DevToolsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [学習](#learning)
- [DevTools のツールとエコシステム](#devtools-tooling-and-ecosystem)
- [Chrome DevTools Protocol](#chrome-devtools-protocol)
- [他のプラットフォームで DevTools フロントエンドを使う](#using-devtools-frontend-with-other-platforms)
- [アプリケーション](#applications)
- [DevTools 拡張機能](#devtools-extensions)
- [過去のプロジェクト](#alumni)

---

## 学習
- [Dev Tips](https://umaar.com/dev-tips/) - アニメーション GIF によるヒントの大規模なコレクション。
- [DevTools Tips](https://devtoolstips.org/) - ミニチュートリアル形式のイラスト付きヒント集。
- [Can I DevTools?](https://www.canidev.tools/) - さまざまなワークフローを文書化。毎週のヒントとコツの[ニュースレター](https://canidevtools.substack.com/)も提供。
- [Web cheatcodes](https://codepo8.github.io/web-cheatcodes/) - 非開発者向けのブラウザー開発者ツール。
- [Dear Console](https://codepo8.github.io/dearconsole) - ブラウザーコンソールで使えるスニペット集。
- [Chrome Secret Menus](https://github.com/sparkyrider/chrome-secret-menus) - Chrome の内部ページと診断ツールの包括的なガイド。
- [Front-end Debugging Tools Handbook](https://github.com/lala-hakobyan/front-end-debugging-handbook) - Chrome DevTools、フレームワーク拡張、AI 強化 IDE デバッグまで、フロントエンドのデバッグツールを習得するための実践ガイド。

---

## DevTools のツールとエコシステム

### オブジェクトの整形
- [immutable-devtools](https://github.com/andrewdavey/immutable-devtools) - Immutable-js 値用のカスタムフォーマッター。

### ネットワーク検査
- [betwixt](https://github.com/kdzwinel/betwixt) - Network パネルによる検査を提供するシステムレベルのネットワークプロキシ。

### CPU プロファイル
- [call-trace](https://github.com/brendankenny/call-trace) - JS にフックを組み込み、完全な（サンプリングなしの）実行について `.cpuprofile` を生成可能。時間または呼び出し回数を表示できます。
- [cpuprofilify](https://github.com/thlorenz/cpuprofilify) - 各種プロファイリング／サンプリングツールの出力を `.cpuprofile` 形式に変換。
- [Wishbone Python framework](https://wishbone.readthedocs.io/en/latest/misc/profiling.html) - プロファイリングデータを `.cpuprofile` としてエクスポートできます。

### マルチメディア
- [snapline](https://github.com/pmdartus/snapline) - タイムラインのスクリーンショットを gif に変換。

### タイムライン、トレース、プロファイリング
- [DevTools Timeline Viewer](https://chromedevtools.github.io/timeline-viewer/) - タイムライン記録の URL を共有。

### エディターとの Chrome Debugger 統合
- [VS Code - Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug/) - VS Code でのブレークポイントデバッグ。
- [VS Code - Elements for Microsoft Edge](https://github.com/microsoft/vscode-edge-devtools) - VS Code 内の Elements パネル。
- [ChromeREPL](https://github.com/acarabott/ChromeREPL) - Sublime Text 内で Chrome コンソールを利用。
- [Sublime Web Inspector](http://sokolovstas.github.io/SublimeWebInspector/) - Sublime Text 上で JavaScript のブレークポイントデバッグ。
- [WebStorm/JetBrains Chrome Extension](https://www.jetbrains.com/help/webstorm/2017.1/configuring-javascript-debugger-and-jetbrains-chrome-extension.html) - WebStorm IDE は JavaScript のデバッグ、DOM ツリーの表示、HTML・CSS・JS のライブ編集を行えます。

---

## Chrome DevTools Protocol
- [ChromeDevTools/devtools-protocol](https://github.com/chromedevtools/devtools-protocol) - **プロトコル JSON の正規の場所**。プロトコルバグの Issue トラッカー。TypeScript 型も提供。
- [DevTools Protocol API Docs](https://chromedevtools.github.io/devtools-protocol/) - プロトコルのドメイン、メソッド、イベントを探索しやすい UI。

### プロトコルを使った開発
- [chrome-remote-interface Wiki](https://github.com/cyrus-and/chrome-remote-interface/wiki) - 有用なレシピが多数あります。
- [Chrome Protocol Proxy](https://github.com/wendigo/chrome-protocol-proxy) - devtools protocol を使うクライアントをデバッグするツール。

### 二大自動化ライブラリ
- [Puppeteer](https://github.com/GoogleChrome/puppeteer/) - DevTools Protocol 経由でヘッドレス Chrome を制御する高水準 API を提供する Node.js 向けライブラリ。[awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer)も参照。
- [Playwright](https://github.com/microsoft/playwright) - 単一 API で Chromium、Firefox、WebKit を自動化するライブラリ。Node.js、Python、.Net、Java で利用可能。[awesome-playwright](https://github.com/mxschmitt/awesome-playwright)も参照。

### プロトコル（またはその上位レイヤー）を操作するライブラリ

- JavaScript/Node.js: [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface)
- TypeScript/Node.js: [chrome-debugging-client](https://github.com/TracerBench/chrome-debugging-client)
- TypeScript/Node.js: [noice-json-rpc](https://www.npmjs.com/package/noice-json-rpc) - CDP を API として公開するプロキシベースの実装。
- TypeScript/Node.js: [Taiko](https://github.com/getgauge/taiko/)
- TypeScript/Node.js: [Lumen](https://github.com/omxyz/lumen) - CDP 上で自己修復型の決定論的リプレイを行う、ビジョンファーストのブラウザーエージェント。
- Rust: [Rust Headless Chrome](https://github.com/atroche/rust-headless-chrome/)
- Java: [chrome-devtools-java-client](https://github.com/kklisura/chrome-devtools-java-client)
- Java: [jvppeteer](https://github.com/fanyong920/jvppeteer)  - Java 向けヘッドレス Chrome
- Python: [PyCDP](https://github.com/hyperiongray/python-chrome-devtools-protocol) - 純粋な Python による、sans-IO ラッパー。[Trio CDP driver](https://github.com/hyperiongray/trio-chrome-devtools-protocol)も参照。
- Python: [chromewhip](https://github.com/chuckus/chromewhip) - `splash` サービスのドロップイン代替品
- Python: [pyppeteer](https://github.com/pyppeteer/pyppeteer) - Puppeteer の移植版
- Python: [ChromeController](https://github.com/fake-name/ChromeController) - 高水準のブラウザー管理
- Go: [chromedp](https://github.com/chromedp/chromedp) - ブラウザーを操作する高水準のアクションとタスク
- Go: [cdp](https://github.com/mafredri/cdp)
- Go: [gcd](https://github.com/wirepair/gcd)
- Go: [godet](https://github.com/raff/godet)
- Go: [Rod](https://github.com/go-rod/rod)
- C#/.NET: [Puppeteer Sharp](https://github.com/hardkoded/puppeteer-sharp) - Puppeteer の移植版
- C#/dotnet: [chrome-dev-tools](https://github.com/BaristaLabs/chrome-dev-tools) - handlebars テンプレートの編集でカスタマイズできるプロトコルラッパージェネレーター。.Net Core テンプレートを含みます。
- C#/.NET: [dotnet-chrome-protocol](https://github.com/seclerp/dotnet-chrome-protocol) - C#/.NET で Chrome DevTools Protocol をサポートするランタイムライブラリとスキーマコード生成ツール。
- Ruby: [Ferrum](https://github.com/route/ferrum) - Ruby で Chrome を制御する高水準 API
- Ruby: [Cuprite](https://github.com/machinio/cuprite) - Capybara ドライバー
- Kotlin: [chrome-reactive-kotlin](https://github.com/wendigo/chrome-reactive-kotlin) - Kotlin 向け reactive（rxjava 2.x）低水準クライアントライブラリ
- Kotlin: [chrome-devtools-kotlin](https://github.com/joffrey-bion/chrome-devtools-kotlin) - 低水準 CDP プリミティブと高水準拡張を提供する、コルーチンベースのクライアントライブラリ。
- Clojure: [clj-chrome-devtools](https://github.com/tatut/clj-chrome-devtools) - CDP ラッパー API は自動生成され、CDP プロトコルの変更時に更新されます。
- Clojure: [cuic](https://github.com/milankinen/cuic) - DevTools Protocol による UI テスト自動化向けの高水準 API を提供。
- PHP: [chrome-devtools-protocol](https://github.com/jakubkulhan/chrome-devtools-protocol) - プロトコル用の PHP クライアントライブラリ。
- PHP: [PuPHPeteer](https://github.com/rialto-php/puphpeteer) - node Puppeteer 向け PHP ブリッジ


### ブラウザーアダプター
- [devtools-remote-debugger](https://github.com/Nice-PLQ/devtools-remote-debugger) - Web ページに対して devtools を使うためのもの。クライアント側 JS で実装された CDP エージェント。
- [Inspect](https://inspect.dev/) - iOS と Android に対して容易に devtools を使用。ブラウザーと Webview に対応。**（クローズドソース）**


## 他のプラットフォームで DevTools フロントエンドを使う

#### Android
- [Facebook Stetho](https://github.com/facebook/stetho) - Chrome DevTools によるネイティブ Android のデバッグ。
- [j2v8-debugger](https://github.com/AlexTrotsenko/j2v8-debugger) - [J2V8](https://github.com/eclipsesource/J2V8) 上で実行する JavaScript を Chrome DevTools でデバッグ。

#### ClojureScript
- [Dirac](https://github.com/binaryage/dirac) - ClojsureScript のデバッグ。

#### iOS
- [PonyDebugger](https://github.com/square/PonyDebugger) - Chrome DevTools で iOS アプリをリモートからネットワーク・データデバッグ。

#### Node.js
- [ndb](https://github.com/GoogleChromeLabs/ndb) - DevTools Frontend を使う改善された Node.js デバッグ体験。
- [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27) - Node v6.3+ で完全なデバッグとプロファイリングのサポートを使うためのガイド。
- [thetool](https://github.com/sfninja/thetool) - Node による CPU、メモリ、カバレッジ、型のプロファイリング。
- [chrome-devtools-frontend](https://www.npmjs.com/package/chrome-devtools-frontend) - Chrome に同梱されるフロントエンドのミラー。

#### Ruby
- [ruby/debug](https://github.com/ruby/debug) - Ruby のデバッグ機能。

---

## アプリケーション

### ブラウザー
- [BrowserBox](https://github.com/BrowserBox/BrowserBox) - DevTools を主に利用して Chrome を Web ページへ埋め込み、マルチユーザーブラウジング、リモート DevTools、音声、`.docx`、`.pdf` などのドキュメントをサポート。
- [Puppetromium](https://github.com/dosyago/puppetromium) - Puppeteer を用いて構築された概念実証の Web ブラウザー。Node.js、HTML、CSS で記述され、クライアント側 JavaScript は 0% です。

### Web アーカイバーとインデクサー
- [dn](https://github.com/dosyago/dn) - オフライン表示と検索のために閲覧ページをアーカイブ・索引化。`Fetch` ドメインのインターセプトを使って実装され、Chromium ベースの任意のブラウザーで動作します。
  
---

## DevTools 拡張機能

### ワークフロー
- [Clockwork](https://chromewebstore.google.com/detail/clockwork/dmggabnehkmmfmdffgajcflpdjlnoemp?hl=en) - PHP アプリケーションのプロファイリングデータを表示。
- [RailsPanel](https://chromewebstore.google.com/detail/railspanel/gjpfobpafnhjhbajcjgccbbdofdckggg?hl=en-US) - Ruby on Rails アプリケーションのプロファイリングデータを表示。
- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - React コンポーネント階層を検査。
- [Ember.js Inspector](https://chromewebstore.google.com/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) - アプリケーション内の Ember.js オブジェクトを検査できます。
- [Vue.js Developer Tools](https://github.com/vuejs/vue-devtools) - Vue.js コンポーネントを検査し、データを操作。
- [Angular DevTools](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) - Angular アプリケーションのデバッグとプロファイリング。
- [Backbone Debugger](https://chromewebstore.google.com/detail/backbone-debugger/bhljhndlimiafopmmhjlgfpnnchjjbhd) - Backbone アプリケーションのビュー、モデル、イベント、ルートを検査。
- [Redux Devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) - アクション履歴、取り消し、リプレイを通じて Redux を検査。
- [Insight](https://github.com/3Dparallax/insight/) - 生産性の高い WebGL 開発と効率的な WebGL アプリケーションを可能にする WebGL デバッグツールキット。
- [BEM devtools](https://github.com/escaton/bem-chrome-devtools) - `i-bem` フレームワークで表現された BEM エンティティを検査。
- [Web Component DevTools](https://chromewebstore.google.com/detail/web-component-devtools/gdniinfdlmmmjpnhgnkmfpffipenjljo) - ページ上の Web Components を検査、変更、監視。

### テーマ
- [Material UI Theme](https://chromewebstore.google.com/detail/material-devtools-theme-c/jmefikbdhgocdjeejjnnepgnfkkbpgjo) - Material Design に着想を得た各種テーマを提供。

### パフォーマンス
- [sloth](https://github.com/denar90/sloth) - 選択したタブに対する CPU・ネットワークスロットリングを有効化・保存できる Chrome 拡張。
- [TracerBench](https://github.com/TracerBench/tracerbench) - Web アプリケーションの制御されたパフォーマンスベンチマークツール。パフォーマンス差分について明確で実行可能な有用な洞察を提供。

### 自動化
- [Puppeteer IDE](https://github.com/gajananpp/puppeteer-ide-extension) - ブラウザーの開発者ツール内で使えるスタンドアロンの Puppeteer プレイグラウンド。
- [k6 browser](https://github.com/grafana/xk6-browser) - ブラウザーと対話し、フロントエンドのパフォーマンスメトリクスを収集するブラウザー自動化・エンドツーエンド Web テストツール。

## 過去のプロジェクト
古いプロジェクトで、おそらく現在は保守されていません……それでも素晴らしいものです。

- [Remote Debug Gateway](https://github.com/RemoteDebug/remotedebug-gateway) - 一度に複数のブラウザーへクライアントを接続できます。  
   - Multiuser DevTools: [DevTools Remote](https://github.com/auchenberg/devtools-remote) - 他者のブラウザーをリモートデバッグ。
- [DevTools Backend](https://github.com/christian-bromann/devtools-backend) - 任意の Web 環境をデバッグするための Chrome DevTools バックエンドのスタンドアロン実装。
- Python CDP driver: [pychrome](https://github.com/fate0/pychrome) - 低水準 CDP トランスポートハンドラー
- [ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) - Mobile Safari と UIWebView のインスタンスを CDP 経由で公開。
  - [Remote Debug iOS WebKit adapter](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter) - ios-webkit-debug-proxy を基盤に、WebKit の Remote Debugging Protocol API を CDP へ変換。
- [IE Diagnostics Adapter](https://github.com/Microsoft/IEDiagnosticsAdapter) - Microsoft IE 11 から CDP へのプロトコルアダプター。
- [go-debugger-devtools](https://github.com/allada/go-debugger-devtools)
