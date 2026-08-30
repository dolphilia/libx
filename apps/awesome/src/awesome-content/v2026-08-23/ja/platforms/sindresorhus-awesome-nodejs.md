---
title: "sindresorhus/awesome-nodejs"
description: "Node.jsの公式資料、パッケージ、運用・学習資源を用途別に整理した定本スナップショット"
licenseSource: "github-sindresorhus-awesome-nodejs-readme-md"
---

<div align="center">
	<div>
		<img width="500" src="media/logo.svg" alt="Awesome Node.js">
		<br>
	</div>
	<br>
	<br>
	<br>
	<br>
	<hr>
	<p>
		<p>
			<sup>
				<a href="https://github.com/sponsors/sindresorhus">私のオープンソース活動はコミュニティに支えられています</a>
			</sup>
		</p>
		<sup>特別な支援者:</sup>
		<br>
		<br>
		<br>
		<a href="https://depot.dev?utm_source=github&utm_medium=sindresorhus">
			<div>
				<picture>
					<source width="180" media="(prefers-color-scheme: dark)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-dark.svg">
					<source width="180" media="(prefers-color-scheme: light)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-light.svg">
					<img width="180" src="https://sindresorhus.com/assets/thanks/depot-logo-light.svg" alt="Depot logo">
				</picture>
			</div>
			<b>高速なリモートコンテナビルドとGitHub Actionsランナー。</b>
		</a>
		<br>
		<br>
		<br>
		<a href="https://circleback.ai?utm_source=sindresorhus&utm_medium=sponsorship&utm_campaign=awesome-list&utm_id=awesome-nodejs">
			<div>
				<img width="340" src="https://sindresorhus.com/assets/thanks/circleback-logo.png?x" alt="Circleback logo">
			</div>
			<b>あらゆる会話を最大限に活用します。</b>
			<div>
				<sup>AIによる会議メモ、自動化、検索を提供し、AIエージェントへ作業に必要なコンテキストを与えます。</sup>
			</div>
		</a>
		<br>
		<br>
		<br>
	</p>
	<hr>
	<br>
	<br>
	<br>
	<br>
	<br>
	<a href="https://awesome.re">
		<img src="https://awesome.re/badge-flat2.svg" alt="Awesome">
	</a>
	<p>
		<sub><a href="https://node.cool"><code>node.cool</code></a>と入力するとこのページへ移動できます。<a href="https://twitter.com/sindresorhus">Twitter</a>も参照してください。</sub>
	</p>
	<br>
	<p>
		<a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a>は、サーバーやコマンドラインツールを作成するためのオープンソースかつクロスプラットフォームのJavaScriptランタイムです。
	</p>
	<br>
</div>

## 目次 <a id="contents"></a>

- [公式](#official)
- [パッケージ](#packages)
	- [実験的](#mad-science)
	- [コマンドラインアプリ](#command-line-apps)
	- [関数型プログラミング](#functional-programming)
	- [HTTP](#http)
	- [デバッグ／プロファイリング](#debugging--profiling)
	- [ログ](#logging)
	- [コマンドラインユーティリティ](#command-line-utilities)
	- [ビルドツール](#build-tools)
	- [ハードウェア](#hardware)
	- [テンプレート](#templating)
	- [Webフレームワーク](#web-frameworks)
	- [文書](#documentation)
	- [ファイルシステム](#filesystem)
	- [制御フロー](#control-flow)
	- [ストリーム](#streams)
	- [リアルタイム](#real-time)
	- [画像](#image)
	- [テキスト](#text)
	- [数値](#number)
	- [数学](#math)
	- [日付](#date)
	- [URL](#url)
	- [データ検証](#data-validation)
	- [解析](#parsing)
	- [人間向け表現](#humanize)
	- [圧縮](#compression)
	- [ネットワーク](#network)
	- [データベース](#database)
	- [テスト](#testing)
	- [セキュリティ](#security)
	- [ベンチマーク](#benchmarking)
	- [縮小ツール](#minifiers)
	- [認証](#authentication)
	- [認可](#authorization)
	- [メール](#email)
	- [ジョブキュー](#job-queues)
	- [Node.js管理](#nodejs-management)
	- [クロスプラットフォーム統合](#cross-platform-integration)
	- [自然言語処理](#natural-language-processing)
	- [プロセス管理](#process-management)
	- [自動化](#automation)
	- [AST](#ast)
	- [静的サイトジェネレーター](#static-site-generators)
	- [コンテンツ管理システム](#content-management-systems)
	- [フォーラム](#forum)
	- [ブログ](#blogging)
	- [ユニーク](#weird)
	- [シリアライズ](#serialization)
	- [その他](#miscellaneous)
- [パッケージマネージャー](#package-manager)
- [資料](#resources)
	- [チュートリアル](#tutorials)
	- [検索](#discovery)
	- [記事](#articles)
	- [ニュースレター](#newsletters)
	- [動画](#videos)
	- [書籍](#books)
	- [ブログ](#blogs)
	- [講座](#courses)
	- [チートシート](#cheatsheets)
	- [ツール](#tools)
	- [コミュニティ](#community)
	- [その他](#miscellaneous-1)
- [関連リスト](#related-lists)

## 公式 <a id="official"></a>

- [Website](https://nodejs.org)
- [Documentation](https://nodejs.org/dist/latest/docs/api/)
- [Repository](https://github.com/nodejs/node)

## パッケージ <a id="packages"></a>

### 実験的 <a id="mad-science"></a>

- [webtorrent](https://github.com/webtorrent/webtorrent) - Node.jsとブラウザーで動作するストリーミングTorrentクライアントです。
- [peerflix](https://github.com/mafintosh/peerflix) - ストリーミングTorrentクライアントです。
- [ipfs](https://github.com/ipfs/helia) - すべてのコンピューティングデバイスを同じファイルシステムで接続することを目指す分散ファイルシステムです。
- [stackgl](https://github.com/stackgl) - browserifyとnpm上に構築された、WebGL向けのオープンなソフトウェアエコシステムです。
- [peerwiki](https://github.com/mafintosh/peerwiki) - Wikipedia全体をBitTorrentで配信します。
- [peercast](https://github.com/mafintosh/peercast) - Torrent動画をChromecastへストリーミングします。
- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - 明快で読みやすく、実績のあるBitcoinライブラリです。
- [Bitcore](https://github.com/bitpay/bitcore) - 純粋かつ高機能なBitcoinライブラリです。
- [PDFKit](https://github.com/foliojs/pdfkit) - PDF生成ライブラリです。
- [turf](https://github.com/Turfjs/turf) - モジュール式の地理空間処理・解析エンジンです。
- [webcat](https://github.com/mafintosh/webcat) - GitHubの秘密鍵・公開鍵による認証を使い、WebRTC経由でWeb上にP2Pパイプを構築します。
- [NodeOS](https://github.com/NodeOS/NodeOS) - npmを基盤とする最初のオペレーティングシステムです。
- [YodaOS](https://github.com/yodaos-project/yodaos) - AIオペレーティングシステムです。
- [Brain.js](https://github.com/BrainJS/brain.js) - 機械学習フレームワークです。
- [Pipcook](https://github.com/alibaba/pipcook) - 機械学習パイプラインを構築するためのフロントエンドアルゴリズムフレームワークです。
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - グラフ理論（ネットワーク）のモデリングと解析を行います。
- [js-git](https://github.com/creationix/js-git) - GitのJavaScript実装です。
- [xlsx](https://github.com/SheetJS/sheetjs) - 純粋なJavaScriptで実装されたExcelスプレッドシートの読み書きライブラリです。
- [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - Gitの純粋なJavaScript実装です。

### コマンドラインアプリ <a id="command-line-apps"></a>

- [np](https://github.com/sindresorhus/np) - `npm publish`をより使いやすくします。
- [npm-name](https://github.com/sindresorhus/npm-name) - npmでパッケージ名が利用可能か確認します。
- [gh-home](https://github.com/sindresorhus/gh-home) - 現在のディレクトリにあるリポジトリのGitHubページを開きます。
- [npm-home](https://github.com/sindresorhus/npm-home) - パッケージのnpmページを開きます。
- [trash](https://github.com/sindresorhus/trash) - `rm`より安全にファイルを削除します。
- [speed-test](https://github.com/sindresorhus/speed-test) - インターネット接続速度とpingを測定します。
- [pageres](https://github.com/sindresorhus/pageres) - Webサイトのスクリーンショットを撮影します。
- [cpy](https://github.com/sindresorhus/cpy) - ファイルをコピーします。
- [vtop](https://github.com/MrRio/vtop) - 見やすいグラフを備えた、改良版のtopです。
- [empty-trash](https://github.com/sindresorhus/empty-trash) - ごみ箱を空にします。
- [is-up](https://github.com/sindresorhus/is-up) - Webサイトが稼働しているか確認します。
- [is-online](https://github.com/sindresorhus/is-online) - インターネットへ接続できるか確認します。
- [public-ip](https://github.com/sindresorhus/public-ip) - 公開IPアドレスを取得します。
- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - ターミナルでクリップボードへのコピーと貼り付けを行います。
- [XO](https://github.com/xojs/xo) - JavaScript Happiness Styleに基づく厳格なコードスタイルを適用します。
- [ESLint](https://github.com/eslint/eslint) - JavaScript向けのプラグイン可能なリンターツールです。
- [David](https://github.com/alanshaw/david) - パッケージのnpm依存関係が古くなっている場合に通知します。
- [http-server](https://github.com/http-party/http-server) - 設定不要のシンプルなコマンドラインHTTPサーバーです。
- [Live Server](https://github.com/tapio/live-server) - ライブリロード機能を備えた開発用HTTPサーバーです。
- [bcat](https://github.com/kessler/node-bcat) - コマンド出力をWebブラウザーへパイプします。
- [normit](https://github.com/pawurb/normit) - ターミナルで音声合成付きのGoogle翻訳を利用します。
- [fkill](https://github.com/sindresorhus/fkill-cli) - クロスプラットフォームでプロセスを簡単に終了します。
- [pjs](https://github.com/danielstjules/pjs) - パイプ処理可能なJavaScriptを使い、ターミナルから素早くフィルター、マップ、リデュースを実行します。
- [license-checker](https://github.com/davglass/license-checker) - アプリケーションの依存関係に適用されるライセンスを確認します。
- [browser-run](https://github.com/juliangruber/browser-run) - ブラウザー環境でコードを簡単に実行します。
- [tmpin](https://github.com/sindresorhus/tmpin) - ファイル入力を受け付けるCLIアプリへ標準入力対応を追加します。
- [wallpaper](https://github.com/sindresorhus/wallpaper) - デスクトップの壁紙を変更します。
- [pen](https://github.com/hatashiro/pen) - 好みのエディターからブラウザーでMarkdownをライブプレビューします。
- [dark-mode](https://github.com/sindresorhus/dark-mode) - macOSのダークモードを切り替えます。
- [Jsome](https://github.com/Javascipt/Jsome) - 色とインデントを設定してJSONを見やすく表示します。
- [mobicon](https://github.com/samverschueren/mobicon-cli) - モバイルアプリのアイコンを生成します。
- [mobisplash](https://github.com/samverschueren/mobisplash-cli) - モバイルアプリのスプラッシュ画面を生成します。
- [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) - Gitのdiffから見やすいHTMLを生成します。
- [trymodule](https://github.com/victorb/trymodule) - ターミナルでnpmパッケージを試用します。
- [jscpd](https://github.com/kucherenko/jscpd) - ソースコード内のコピー＆ペーストを検出します。
- [atmo](https://github.com/Raathigesh/Atmo) - サーバー側APIのモックを作成します。
- [auto-install](https://github.com/siddharthkp/auto-install) - コードを書いている間に依存関係を自動インストールします。
- [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) - 処理を遅くしている依存関係を特定します。
- [localtunnel](https://github.com/localtunnel/localtunnel) - ローカルホストを外部へ公開します。
- [svg-term-cli](https://github.com/marionebl/svg-term-cli) - ターミナルセッションをSVGとして共有します。
- [gtop](https://github.com/aksakalli/gtop) - ターミナル向けのシステム監視ダッシュボードです。
- [themer](https://github.com/themerdev/themer) - エディター、ターミナル、壁紙、Slackなどのテーマを生成します。
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - ターミナルからコードを美しい画像へ変換します。
- [cash-cli](https://github.com/xxczaki/cash-cli) - 170種類の通貨を相互変換します。
- [taskbook](https://github.com/klaussinani/taskbook) - コマンドラインでタスク、ボード、メモを管理します。
- [discharge](https://github.com/brandonweiss/discharge) - 静的WebサイトをAmazon S3へ簡単にデプロイします。
- [npkill](https://github.com/voidcosmos/npkill) - 古くて容量の大きいnode_modulesフォルダーを見つけて削除します。

### 関数型プログラミング <a id="functional-programming"></a>

- [lodash](https://github.com/lodash/lodash) - 一貫性、カスタマイズ性、性能、豊富な機能を備えたユーティリティライブラリで、Underscore.jsをより高速に改良しています。
- [immutable](https://github.com/immutable-js/immutable-js) - イミュータブルなデータコレクションです。
- [Ramda](https://github.com/ramda/ramda) - 自動カリー化と引数順の反転による柔軟な関数合成を重視し、データを変更しないユーティリティライブラリです。
- [Mout](https://github.com/mout/mout) - 必要なモジュールや関数だけを読み込めるため、余分なオーバーヘッドを避けられるユーティリティライブラリです。
- [RxJS](https://github.com/reactivex/rxjs) - さまざまな種類のデータを変換、合成、照会するための関数型リアクティブライブラリです。
- [Kefir.js](https://github.com/kefirjs/kefir) - 高性能かつ少ないメモリ使用量を重視したリアクティブライブラリです。

### HTTP <a id="http"></a>

- [got](https://github.com/sindresorhus/got) - 組み込みの`http`モジュールを使いやすくするインターフェースです。
- [undici](https://github.com/nodejs/undici) - 依存関係なしで一から実装された高性能HTTPクライアントです。
- [ky-universal](https://github.com/sindresorhus/ky-universal) - Fetchを基盤とするユニバーサルHTTPクライアントです。
- [node-fetch](https://github.com/node-fetch/node-fetch) - Node.jsで`window.fetch`を利用できるようにします。
- [axios](https://github.com/axios/axios) - ブラウザーでも動作するPromiseベースのHTTPクライアントです。
- [superagent](https://github.com/visionmedia/superagent) - HTTPリクエストライブラリです。
- [http-fake-backend](https://github.com/micromata/http-fake-backend) - JSONファイルやJavaScriptオブジェクトの内容を設定可能なルートで提供し、偽のバックエンドを構築します。
- [cacheable-request](https://github.com/lukechilds/cacheable-request) - ネイティブHTTPリクエストへRFC準拠のキャッシュ対応を追加します。
- [gotql](https://github.com/khaosdoctor/gotql) - [got](https://github.com/sindresorhus/got)を基盤とするGraphQLリクエストライブラリです。
- [global-agent](https://github.com/gajus/global-agent) - 環境変数で設定できるグローバルHTTP／HTTPSプロキシエージェントです。
- [smoke](https://github.com/sinedied/smoke) - 記録機能を備えたファイルベースのHTTPモックサーバーです。
- [purest](https://github.com/simov/purest) - RESTクライアントです。

### デバッグ／プロファイリング <a id="debugging--profiling"></a>

- [debug](https://github.com/debug-js/debug) - 小型のデバッグユーティリティです。
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) - Node.jsプロセスが終了しない原因を調べます。
- [njsTrace](https://github.com/valyouw/njstrace) - コードを計測・トレースし、すべての関数呼び出し、引数、戻り値、各関数の実行時間を表示します。
- [vstream](https://github.com/joyent/node-vstream) - ストリームのパイプラインを検査できる、計測可能なストリーム用ミックスインです。
- [stackman](https://github.com/watson/stackman) - エラーのスタックトレースへコード抜粋などの情報を追加します。
- [locus](https://github.com/alidavut/locus) - 実行時にすべての変数へアクセスできるREPLを起動します。
- [0x](https://github.com/davidmarkclements/0x) - フレームグラフを使ったプロファイリングを行います。
- [ctrace](https://github.com/automation-stack/ctrace) - システムコールとシグナルを整形して詳しくトレースします。
- [leakage](https://github.com/andywer/leakage) - メモリリークのテストを記述できます。
- [llnode](https://github.com/nodejs/llnode) - クラッシュしたNode.jsプロセスのオブジェクトを検査・分析する事後解析ツールです。
- [thetool](https://github.com/sfninja/thetool) - CPU、メモリなどのプロファイルをChrome DevToolsで扱える形式で取得します。
- [swagger-stats](https://github.com/slanatech/swagger-stats) - API呼び出しを追跡し、性能、健全性、利用状況の指標を監視します。
- [NiM](https://github.com/june07/nim) - DevToolsのデバッグワークフローを管理します。
- [dats](https://github.com/immobiliare/dats) - 依存関係を持たない小型の[StatsD](https://github.com/statsd/statsd)クライアントです。

### ログ <a id="logging"></a>

- [pino](https://github.com/pinojs/pino) - Bunyanに着想を得た非常に高速なロガーです。
- [winston](https://github.com/winstonjs/winston) - 複数の出力先に対応する非同期ログライブラリです。
- [console-log-level](https://github.com/watson/console-log-level) - ログレベルと独自プレフィックスに対応した、極めてシンプルなロガーです。
- [storyboard](https://github.com/guigrpa/storyboard) - エンドツーエンドで階層的かつリアルタイムに色付きログとストーリーを表示します。
- [consola](https://github.com/unjs/consola) - コンソールロガーです。

### コマンドラインユーティリティ <a id="command-line-utilities"></a>

- [chalk](https://github.com/chalk/chalk) - ターミナル文字列を適切に装飾します。
- [meow](https://github.com/sindresorhus/meow) - CLIアプリの作成を支援します。
- [yargs](https://github.com/yargs/yargs) - 洗練されたユーザーインターフェースを自動生成するコマンドラインパーサーです。
- [ora](https://github.com/sindresorhus/ora) - 洗練されたターミナル用スピナーです。
- [get-stdin](https://github.com/sindresorhus/get-stdin) - 標準入力を簡単に扱えます。
- [log-update](https://github.com/sindresorhus/log-update) - ターミナルの直前の出力を上書きしてログを更新し、進捗バーやアニメーションなどを描画できます。
- [Ink](https://github.com/vadimdemedes/ink) - Reactを使って対話型コマンドラインアプリを構築します。
- [listr2](https://github.com/listr2/listr2) - ターミナル向けのタスクリストです。
- [conf](https://github.com/sindresorhus/conf) - アプリやモジュールの設定を簡単に管理します。
- [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) - ターミナルを操作するためのANSIエスケープコードを提供します。
- [log-symbols](https://github.com/sindresorhus/log-symbols) - 各種ログレベルに対応する色付き記号を提供します。
- [figures](https://github.com/sindresorhus/figures) - Windows CMD向けフォールバックを備えたUnicode記号を提供します。
- [boxen](https://github.com/sindresorhus/boxen) - ターミナルに枠を描画します。
- [terminal-link](https://github.com/sindresorhus/terminal-link) - ターミナルにクリック可能なリンクを作成します。
- [terminal-image](https://github.com/sindresorhus/terminal-image) - ターミナルに画像を表示します。
- [string-width](https://github.com/sindresorhus/string-width) - 文字列の表示幅、つまり表示に必要な列数を取得します。
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - 文字列をターミナル上の指定幅へ切り詰めます。
- [blessed](https://github.com/chjj/blessed) - curses風のライブラリです。
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - 対話型のコマンドラインプロンプトです。
- [yn](https://github.com/sindresorhus/yn) - yes／no形式の値を解析します。
- [cli-table3](https://github.com/cli-table/cli-table3) - 見やすいUnicode表を作成します。
- [drawille](https://github.com/madbence/node-drawille) - Unicode点字文字を使ってターミナルへ描画します。
- [ascii-charts](https://github.com/jstrace/chart) - ターミナルにASCII棒グラフを描画します。
- [progress](https://github.com/visionmedia/node-progress) - 柔軟なASCII進捗バーです。
- [insight](https://github.com/yeoman/insight) - 利用状況をGoogle Analyticsへ匿名送信し、ツールの使われ方を把握できるようにします。
- [cli-cursor](https://github.com/sindresorhus/cli-cursor) - CLIカーソルの表示を切り替えます。
- [cli-columns](https://github.com/shannonmoeller/cli-columns) - UnicodeとANSIに対応したテキスト一覧を列形式で表示します。
- [cfonts](https://github.com/dominikwilkowski/cfonts) - コンソール向けの魅力的なASCIIフォントです。
- [multispinner](https://github.com/codekirei/node-multispinner) - 複数のスピナーを同時かつ個別に制御します。
- [omelette](https://github.com/f/omelette) - シェルの自動補完を支援します。
- [cross-env](https://github.com/kentcdodds/cross-env) - クロスプラットフォームで環境変数を設定します。
- [shelljs](https://github.com/shelljs/shelljs) - 移植可能なUnixシェルコマンドを提供します。
- [sudo-block](https://github.com/sindresorhus/sudo-block) - アプリがroot権限で実行されるのを防ぎます。
- [sparkly](https://github.com/sindresorhus/sparkly) - `▁▂▃▅▂▇`形式のスパークラインを生成します。
- [Bit](https://github.com/teambit/bit) - リポジトリ間で小さなモジュールやコンポーネントを作成、保守、検索、利用します。
- [gradient-string](https://github.com/bokub/gradient-string) - ターミナル出力へ美しい色のグラデーションを適用します。
- [oclif](https://github.com/oclif/oclif) - パーサー、自動文書生成、テスト、プラグインを備えたCLIフレームワークです。
- [terminal-size](https://github.com/sindresorhus/terminal-size) - ターミナルウィンドウのサイズを確実に取得します。
- [Cliffy](https://github.com/drew-y/cliffy) - 対話型CLIを構築するためのフレームワークです。
- [zx](https://github.com/google/zx) - JavaScriptでシェルスクリプトを記述します。

### ビルドツール <a id="build-tools"></a>

- [parcel](https://github.com/parcel-bundler/parcel) - 非常に高速で設定不要のWebアプリバンドラーです。
- [webpack](https://github.com/webpack/webpack) - ブラウザー向けにモジュールとアセットをまとめます。
- [rollup](https://github.com/rollup/rollup) - 次世代のES2015モジュールバンドラーです。
- [gulp](https://github.com/gulpjs/gulp) - 設定よりコードを重視する、高速なストリーミングビルドシステムです。
- [Broccoli](https://github.com/broccolijs/broccoli) - 定数時間での再ビルドと簡潔なビルド定義に対応する、高速で信頼性の高いアセットパイプラインです。
- [Brunch](https://github.com/brunch/brunch) - シンプルな宣言的設定、高速な増分コンパイル、明確なワークフローを備えたフロントエンドWebアプリ用ビルドツールです。
- [FuseBox](https://github.com/fuse-box/fuse-box) - webpack、JSPM、SystemJSの能力を組み合わせ、TypeScriptを標準でサポートする高速ビルドシステムです。
- [pkg](https://github.com/vercel/pkg) - Node.jsプロジェクトを実行可能ファイルとしてパッケージ化します。
- [Vite](https://github.com/vitejs/vite) - ホットモジュール置換と静的アセットのバンドルに対応するフロントエンドビルドツールです。

### ハードウェア <a id="hardware"></a>

- [johnny-five](https://github.com/rwaldron/johnny-five) - Firmataを基盤とするArduinoフレームワークです。
- [serialport](https://github.com/serialport/node-serialport) - シリアルポートの読み書きを行います。
- [usb](https://github.com/node-usb/node-usb) - USBライブラリです。
- [i2c-bus](https://github.com/fivdi/i2c-bus) - I2Cシリアルバスへアクセスします。
- [onoff](https://github.com/fivdi/onoff) - GPIOへのアクセスと割り込み検出を提供します。
- [spi-device](https://github.com/fivdi/spi-device) - SPIシリアルバスへアクセスします。
- [pigpio](https://github.com/fivdi/pigpio) - Raspberry Piで高速なGPIO、PWM、サーボ制御、状態変更通知、割り込み処理を提供します。
- [gps](https://github.com/infusion/GPS.js) - GPS受信機を扱うためのNMEAパーサーです。
- [modbus-serial](https://github.com/yaacov/node-modbus-serial) - MODBUS-RTU（シリアルおよびTCP）の純粋なJavaScript実装です。

### テンプレート <a id="templating"></a>

- [marko](https://github.com/marko-js/marko) - テンプレートをCommonJSモジュールへコンパイルし、ストリーミング、非同期レンダリング、独自タグに対応するHTMLベースのテンプレートエンジンです。
- [nunjucks](https://github.com/mozilla/nunjucks) - 継承や非同期制御などに対応する、jinja2に着想を得たテンプレートエンジンです。
- [handlebars.js](https://github.com/handlebars-lang/handlebars.js) - ヘルパーや高度なブロックなどの強力な機能を追加したMustacheテンプレートの上位互換です。
- [EJS](https://github.com/mde/ejs) - シンプルで方針を押し付けないテンプレート言語です。
- [Pug](https://github.com/pugjs/pug) - Hamlの影響を強く受けた高性能テンプレートエンジンです。

### Webフレームワーク <a id="web-frameworks"></a>

- [Fastify](https://github.com/fastify/fastify) - 高速でオーバーヘッドの少ないWebフレームワークです。
- [Next.js](https://github.com/vercel/next.js) - サーバーレンダリング対応のユニバーサルJavaScript Webアプリ向けミニマルフレームワークです。
- [Nuxt.js](https://github.com/nuxt/nuxt.js) - サーバーレンダリング対応Vue.jsアプリ向けのミニマルフレームワークです。
- [Hapi](https://github.com/hapijs/hapi) - アプリケーションとサービスを構築するためのフレームワークです。
- [Micro](https://github.com/vercel/micro) - 非同期処理を取り入れたミニマルなマイクロサービスフレームワークです。
- [Koa](https://github.com/koajs/koa) - Expressの開発チームが設計した、WebアプリとAPIのための、より小さく表現力と堅牢性に優れた基盤です。
- [Express](https://github.com/expressjs/express) - 単一ページ、複数ページ、ハイブリッドWebアプリの構築に必要な堅牢な機能を提供するWebアプリケーションフレームワークです。
- [Feathers](https://github.com/feathersjs/feathers) - Expressの思想を受け継いだマイクロサービスフレームワークです。
- [LoopBack](https://github.com/loopbackio/loopback-next) - REST APIを作成し、バックエンドのデータソースへ簡単に接続できる高機能フレームワークです。
- [Meteor](https://github.com/meteor/meteor) - データベースをあらゆる場所で利用し、データを通信路上で扱う、非常にシンプルな純粋JavaScript製Webフレームワークです。*[awesome-meteor](https://github.com/Urigo/awesome-meteor)も参照してください。*
- [Restify](https://github.com/restify/node-restify) - 正しく設計されたREST Webサービスを構築できます。
- [ThinkJS](https://github.com/thinkjs/thinkjs) - ES2015以降、WebSocket、REST APIに対応するフレームワークです。
- [ActionHero](https://github.com/actionhero/actionhero) - TCPソケット、WebSocket、HTTPクライアント向けに再利用可能でスケーラブルなAPIを構築します。
- [seneca](https://github.com/senecajs/seneca) - マイクロサービスを作成するためのツールキットです。
- [AdonisJs](https://github.com/adonisjs/core) - 依存性注入とIoCコンテナーを堅牢な基盤として構築された、Node.js向けの本格的なMVCフレームワークです。
- [Moleculer](https://github.com/moleculerjs/moleculer) - 高速で高機能なマイクロサービスフレームワークです。
- [Nest](https://github.com/nestjs/nest) - 効率的でスケーラブルなサーバーサイドアプリを構築するための、Angularに着想を得たフレームワークです。
- [TypeGraphQL](https://github.com/MichalLytek/type-graphql) - クラスとデコレーターを使い、TypeScriptでGraphQL APIを作成するためのモダンなフレームワークです。
- [Tinyhttp](https://github.com/tinyhttp/tinyhttp) - Expressに似た、モダンで高速なWebフレームワークです。
- [Marble.js](https://github.com/marblejs/marble) - TypeScriptとRxJSを基盤にサーバーサイドアプリを構築する関数型リアクティブフレームワークです。
- [Lad](https://github.com/ladjs/lad) - 元Express TCメンバー兼Koaメンバーが開発した、Web、API、ジョブ、プロキシサーバーを統合するフレームワークです。
- [Ts.ED](https://github.com/tsedio/tsed) - Express.jsまたはKoa.js上でサーバーサイドアプリを構築する、直感的なTypeScriptフレームワークです。
- [Hono](https://github.com/honojs/hono) - 小型で高速なWebフレームワークです。

### 文書 <a id="documentation"></a>

- [documentation.js](https://github.com/documentationjs/documentation) - ES2015以降とFlowアノテーションに対応するAPI文書ジェネレーターです。
- [Docco](https://github.com/jashkenas/docco) - コメントとコードを並べて表示するHTML文書を生成します。
- [JSDoc](https://github.com/jsdoc/jsdoc) - JavaDocやPHPDocに似たAPI文書ジェネレーターです。
- [Docusaurus](https://github.com/facebook/docusaurus) - ReactとMarkdownを利用し、翻訳とバージョン管理機能を備えた文書サイトジェネレーターです。

### ファイルシステム <a id="filesystem"></a>

- [del](https://github.com/sindresorhus/del) - globを使ってファイルやフォルダーを削除します。
- [globby](https://github.com/sindresorhus/globby) - 複数パターンに対応するファイルglob検索です。
- [chokidar](https://github.com/paulmillr/chokidar) - `fs.watch`と`fs.watchFile`のイベントを安定化し、macOSではネイティブの`fsevents`も利用するファイルシステム監視ツールです。
- [find-up](https://github.com/sindresorhus/find-up) - 親ディレクトリを上へ辿ってファイルを検索します。
- [proper-lockfile](https://github.com/moxystudio/node-proper-lockfile) - プロセス間およびマシン間で利用できるロックファイルユーティリティです。
- [load-json-file](https://github.com/sindresorhus/load-json-file) - JSONファイルを読み込んで解析します。
- [write-json-file](https://github.com/sindresorhus/write-json-file) - JSONを文字列化し、ファイルへアトミックに書き込みます。
- [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) - `fs.createWriteStream()`と同様のAPIでアトミックに書き込みます。
- [filenamify](https://github.com/sindresorhus/filenamify) - 文字列を有効なファイル名へ変換します。
- [istextorbinary](https://github.com/bevry/istextorbinary) - ファイルがテキストかバイナリか判定します。
- [fs-jetpack](https://github.com/szwacz/fs-jetpack) - 日常的な利用のしやすさを重視して再設計されたファイルシステムAPIです。
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - `fs`モジュールへ追加メソッドを提供します。
- [package-directory](https://github.com/sindresorhus/package-directory) - npmパッケージのルートディレクトリを検索します。
- [filehound](https://github.com/nspragg/filehound) - ファイルシステム検索向けの柔軟で流暢なインターフェースです。
- [move-file](https://github.com/sindresorhus/move-file) - デバイスをまたぐ場合もファイルを移動できます。
- [tempy](https://github.com/sindresorhus/tempy) - ランダムな一時ファイルまたは一時ディレクトリのパスを取得します。

### 制御フロー <a id="control-flow"></a>

- Promises
	- [pify](https://github.com/sindresorhus/pify) - コールバック形式の関数をPromise化します。
	- [delay](https://github.com/sindresorhus/delay) - Promiseを指定時間だけ遅延させます。
	- [promise-memoize](https://github.com/nodeca/promise-memoize) - Promiseを返す関数を、有効期限とプリフェッチ付きでメモ化します。
	- [valvelet](https://github.com/lpinca/valvelet) - Promiseを返す関数の実行頻度を制限します。
	- [p-map](https://github.com/sindresorhus/p-map) - 複数のPromiseを並行してマップ処理します。
	- [More…](https://github.com/sindresorhus/promise-fun)
- Observables
	- [RxJS](https://github.com/ReactiveX/RxJS) - リアクティブプログラミングを提供します。
	- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - ObservableをPromiseへ変換します。
	- [More…](https://github.com/sindresorhus/awesome-observables)
- Streams
	- [Highland.js](https://github.com/caolan/highland) - 標準JavaScriptとNode風ストリームだけを使い、同期・非同期コードを簡単に管理します。

### ストリーム <a id="streams"></a>

- [get-stream](https://github.com/sindresorhus/get-stream) - ストリームを文字列またはバッファーとして取得します。
- [from2](https://github.com/hughsk/from2) - `through2`に着想を得たReadableStream用の便利なラッパーです。
- [into-stream](https://github.com/sindresorhus/into-stream) - バッファー、文字列、配列、オブジェクトをストリームへ変換します。
- [duplexify](https://github.com/mafintosh/duplexify) - 書き込み可能ストリームと読み込み可能ストリームを一つのstreams2デュプレックスストリームへ統合します。
- [pumpify](https://github.com/mafintosh/pumpify) - ストリームの配列を一つのデュプレックスストリームへ結合します。
- [peek-stream](https://github.com/mafintosh/peek-stream) - 解析方法を決める前に先頭行を確認できる変換ストリームです。
- [binary-split](https://github.com/maxogden/binary-split) - 改行または任意の区切り文字で分割するストリームです。
- [byline](https://github.com/jahewson/node-byline) - 非常にシンプルな行単位ストリームリーダーです。
- [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) - ストリームの最初のチャンクを変換します。
- [pad-stream](https://github.com/sindresorhus/pad-stream) - ストリームの各行へパディングを追加します。
- [multistream](https://github.com/feross/multistream) - 複数のストリームを一つへ結合します。
- [readable-stream](https://github.com/nodejs/readable-stream) - コアに含まれるStreams2とStreams3実装のミラーです。
- [through2-concurrent](https://github.com/almost/through2-concurrent) - オブジェクトストリームを並行して変換します。

### リアルタイム <a id="real-time"></a>

- [µWebSockets](https://github.com/uNetworking/uWebSockets) - 高いスケーラビリティを持つWebSocketサーバー・クライアントライブラリです。
- [Socket.io](https://github.com/socketio/socket.io) - イベントベースの双方向リアルタイム通信を実現します。
- [Faye](https://github.com/faye/faye) - Bayeuxプロトコルを基盤とするリアルタイムのクライアント・サーバーメッセージバスです。
- [SocketCluster](https://github.com/SocketCluster/socketcluster) - 複数のCPUコアで動作できる、スケーラブルなHTTPおよびWebSocketエンジンです。
- [Primus](https://github.com/primus/primus) - 特定モジュールへの依存を避けるための、リアルタイムフレームワーク抽象化層です。
- [deepstream.io](https://github.com/deepstreamIO/deepstream.io-client-js) - スケーラブルなリアルタイムマイクロサービスフレームワークです。
- [Kalm](https://github.com/kalm/kalm.js) - 低レベルのソケットルーター兼ミドルウェアフレームワークです。
- [MQTT.js](https://github.com/mqttjs/MQTT.js) - TCP/IP上で利用するPub/Sub型メッセージングプロトコルMQTTのクライアントです。
- [rpc-websockets](https://github.com/elpheria/rpc-websockets) - WebSocket上のJSON-RPC 2.0実装です。
- [Aedes](https://github.com/moscajs/aedes) - 任意のストリームサーバー上で動作する最小構成のMQTTサーバーです。

### 画像 <a id="image"></a>

- [sharp](https://github.com/lovell/sharp) - JPEG、PNG、WebP、TIFF画像をリサイズする最速のモジュールです。
- [image-type](https://github.com/sindresorhus/image-type) - 画像の種類を検出します。
- [image-dimensions](https://github.com/sindresorhus/image-dimensions) - 画像の寸法を取得します。
- [lwip](https://github.com/EyalAr/lwip) - ImageMagickを必要としない軽量な画像処理ツールです。
- [pica](https://github.com/nodeca/pica) - 純粋なJavaScriptで高品質かつ高速なLanczos3リサイズを提供し、ピクセル化を避けたい場合にcanvasのdrawImage()を置き換えます。
- [jimp](https://github.com/oliver-moran/jimp) - 純粋なJavaScriptで画像を処理します。
- [qrcode](https://github.com/soldair/node-qrcode) - QRコードとバーコードを生成します。
- [ImageScript](https://github.com/matmen/ImageScript) - WebAssemblyで性能を高めたJavaScript画像処理ライブラリです。

### テキスト <a id="text"></a>

- [iconv-lite](https://github.com/ashtuchkin/iconv-lite) - 文字エンコーディングを変換します。
- [string-length](https://github.com/sindresorhus/string-length) - 補助平面文字を正しく数え、ANSIエスケープコードを無視して文字列の実際の長さを取得します。
- [camelcase](https://github.com/sindresorhus/camelcase) - ダッシュ、ドット、アンダースコア、空白で区切られた文字列をcamelCaseへ変換します（foo-bar → fooBar）。
- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) - 正規表現の特殊文字をエスケープします。
- [splice-string](https://github.com/sindresorhus/splice-string) - `Array#splice`のように文字列の一部を削除または置換します。
- [indent-string](https://github.com/sindresorhus/indent-string) - 文字列の各行をインデントします。
- [strip-indent](https://github.com/sindresorhus/strip-indent) - 文字列の各行から先頭の空白を除去します。
- [detect-indent](https://github.com/sindresorhus/detect-indent) - コードのインデントを検出します。
- [he](https://github.com/mathiasbynens/he) - HTMLエンティティをエンコード・デコードします。
- [i18n-node](https://github.com/mashpie/i18n-node) - 動的なJSONストレージを備えたシンプルな翻訳モジュールです。
- [babelfish](https://github.com/nodeca/babelfish) - 複数形を非常に簡単な構文で扱える国際化ライブラリです。
- [matcher](https://github.com/sindresorhus/matcher) - シンプルなワイルドカード照合を行います。
- [unhomoglyph](https://github.com/nodeca/unhomoglyph) - 視覚的に似たUnicode文字を正規化します。
- [i18next](https://github.com/i18next/i18next) - 国際化フレームワークです。
- [nanoid](https://github.com/ai/nanoid) - 小型で安全かつURLに適した一意の文字列IDを生成します。
- [StegCloak](https://github.com/kurolabs/stegcloak) - 秘密情報を文字列内へ目立たない形で隠します。

### 数値 <a id="number"></a>

- [random-int](https://github.com/sindresorhus/random-int) - ランダムな整数を生成します。
- [random-float](https://github.com/sindresorhus/random-float) - ランダムな浮動小数点数を生成します。
- [unique-random](https://github.com/sindresorhus/unique-random) - 連続して重複しない乱数を生成します。
- [round-to](https://github.com/sindresorhus/round-to) - 数値を指定した小数桁へ丸めます（`1.234` → `1.2`）。

### 数学 <a id="math"></a>

- [ndarray](https://github.com/scijs/ndarray) - 多次元配列を提供します。
- [mathjs](https://github.com/josdejong/mathjs) - 多機能な数学ライブラリです。
- [math-clamp](https://github.com/sindresorhus/math-clamp) - 数値を指定範囲内へ制限します。
- [algebra](https://github.com/fibo/algebra) - 代数構造を提供します。
- [multimath](https://github.com/nodeca/multimath) - WebAssemblyとJavaScriptで高速な画像演算を構築するためのコアです。

### 日付 <a id="date"></a>

- [Luxon](https://github.com/moment/luxon) - 日付と時刻を扱うためのライブラリです。
- [date-fns](https://github.com/date-fns/date-fns) - モダンな日付ユーティリティです。
- [Day.js](https://github.com/iamkun/dayjs) - Moment.jsの代替となるイミュータブルな日付ライブラリです。
- [dateformat](https://github.com/felixge/node-dateformat) - 日付を整形します。
- [tz-format](https://github.com/samverschueren/tz-format) - タイムゾーン付きで日付を整形します（`2015-11-30T10:40:35+01:00`）。
- [cctz](https://github.com/floatdrop/node-cctz) - 日付の高速な解析、整形、タイムゾーン変換を提供します。

### URL <a id="url"></a>

- [normalize-url](https://github.com/sindresorhus/normalize-url) - URLを正規化します。
- [humanize-url](https://github.com/sindresorhus/humanize-url) - URLを人が読みやすい表記へ変換します（https://sindresorhus.com → sindresorhus.com）。
- [url-unshort](https://github.com/nodeca/url-unshort) - 短縮URLを展開します。
- [speakingurl](https://github.com/pid/speakingurl) - 文字列を翻字してスラッグを生成します。
- [linkify-it](https://github.com/markdown-it/linkify-it) - Unicodeを完全にサポートするリンクパターン検出器です。
- [url-pattern](https://github.com/snd/url-pattern) - URLなどの文字列を、正規表現より簡単なパターンで照合します。
- [embedza](https://github.com/nodeca/embedza) - oEmbed、Open Graph、メタタグの情報を使い、URLからHTML断片や埋め込みを生成します。

### データ検証 <a id="data-validation"></a>

- [joi](https://github.com/sideway/joi) - JavaScriptオブジェクト向けのオブジェクトスキーマ記述言語兼バリデーターです。
- [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) - コード生成によって非常に高速に動作するJSON Schemaバリデーターです。
- [property-validator](https://github.com/nettofarah/property-validator) - Expressでプロパティを簡単に検証します。
- [schema-inspector](https://github.com/schema-inspector/schema-inspector) - JSON APIのサニタイズと検証を行います。
- [ajv](https://github.com/ajv-validator/ajv) - v5、v6、v7提案に対応する高速なJSON Schemaバリデーターです。
- [Superstruct](https://github.com/ianstormtaylor/superstruct) - JavaScriptとTypeScriptでデータを検証するための、シンプルで合成可能な仕組みです。
- [yup](https://github.com/jquense/yup) - オブジェクトスキーマを検証します。
- [zod](https://github.com/colinhacks/zod) - 静的型推論を備えたTypeScriptファーストのスキーマ検証ライブラリです。

### 解析 <a id="parsing"></a>

- [remark](https://github.com/remarkjs/remark) - プラグインで機能を拡張できるMarkdownプロセッサーです。
- [markdown-it](https://github.com/markdown-it/markdown-it) - CommonMarkへ完全対応し、拡張と構文プラグインを備えたMarkdownパーサーです。
- [parse5](https://github.com/inikulin/parse5) - 高速で多機能かつ仕様準拠のHTMLパーサーです。
- [@parcel/css](https://github.com/parcel-bundler/parcel-css) - Rustで実装されたCSSパーサー、変換器、縮小ツールです。
- [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) - JSONからコメントを除去します。
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - CSSからコメントを除去します。
- [parse-json](https://github.com/sindresorhus/parse-json) - より分かりやすいエラーを表示してJSONを解析します。
- [URI.js](https://github.com/medialize/URI.js) - URLを変更・操作します。
- [JSONStream](https://github.com/dominictarr/JSONStream) - JSON.parseとstringifyをストリーミング処理します。
- [neat-csv](https://github.com/sindresorhus/neat-csv) - 高速なCSVパーサーで、上記ライブラリ向けのコールバックインターフェースを提供します。
- [csv-parser](https://github.com/mafintosh/csv-parser) - 他の実装より高速であることを目指すストリーミングCSVパーサーです。
- [PEG.js](https://github.com/pegjs/pegjs) - 優れたエラー報告を備えた高速パーサーを生成するシンプルなパーサージェネレーターです。
- [x-ray](https://github.com/matthewmueller/x-ray) - Webスクレイピングユーティリティです。
- [nearley](https://github.com/kach/nearley) - JavaScript向けのシンプルで高速かつ高機能な解析ツールです。
- [binary-extract](https://github.com/juliangruber/binary-extract) - JSON全体を解析せず、バッファーから値を抽出します。
- [Stylecow](https://github.com/stylecow/stylecow) - モダンCSSを解析・操作・変換して全ブラウザーへ対応させます。プラグインで拡張できます。
- [js-yaml](https://github.com/nodeca/js-yaml) - 非常に高速なYAMLパーサーです。
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - XMLをJavaScriptオブジェクトへ変換します。
- [Jison](https://github.com/zaach/jison) - BisonやYaccの系譜を持つ、扱いやすいJavaScriptパーサージェネレーターです。
- [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber) - 電話番号を解析、整形、保存、検証します。
- [ref](https://github.com/TooTallNate/ref) - バッファー内の構造化バイナリデータを読み書きします。
- [xlsx-populate](https://github.com/dtjohnson/xlsx-populate) - Excel XLSXファイルを読み書きします。
- [Chevrotain](https://github.com/Chevrotain/chevrotain) - JavaScript向けの非常に高速で多機能なパーサー構築ツールキットです。
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - XMLを検証・解析します。

### 人間向け表現 <a id="humanize"></a>

- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) - バイト数を人が読みやすい文字列へ変換します（`1337` → `1.34 kB`）。
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - ミリ秒を人が読みやすい文字列へ変換します（`1337000000` → `15d 11h 23m 20s`）。
- [ms](https://github.com/vercel/ms) - 小型のミリ秒変換ユーティリティです。
- [pretty-error](https://github.com/AriaMinaei/pretty-error) - エラー表示から不要な情報を減らします。
- [read-art](https://github.com/Tjatse/node-readability) - 任意のページから読みやすい本文を抽出します。

### 圧縮 <a id="compression"></a>

- [yazl](https://github.com/thejoshwolfe/yazl) - ZIPファイルを作成します。
- [yauzl](https://github.com/thejoshwolfe/yauzl) - ZIPファイルを展開します。
- [Archiver](https://github.com/archiverjs/node-archiver) - ZIPとTARに対応する、アーカイブ生成用のストリーミングインターフェースです。
- [pako](https://github.com/nodeca/pako) - zlib（deflate、inflate、gzip）を純粋なJavaScriptへ高速に移植した実装です。
- [tar-stream](https://github.com/mafintosh/tar-stream) - ストリーミングtarパーサー兼ジェネレーターです。[tar-fs](https://github.com/mafintosh/tar-fs)も参照してください。

### ネットワーク <a id="network"></a>

- [get-port](https://github.com/sindresorhus/get-port) - 利用可能なポートを取得します。
- [ipify](https://github.com/sindresorhus/ipify) - 公開IPアドレスを取得します。
- [getmac](https://github.com/bevry/getmac) - コンピューターのMACアドレスを取得します。
- [DHCP](https://github.com/infusion/node-dhcp) - DHCPクライアント兼サーバーです。
- [netcat](https://github.com/roccomuso/netcat) - Netcatの純粋なJavaScript移植です。

### データベース <a id="database"></a>

- Drivers
	- [PostgreSQL](https://github.com/brianc/node-postgres) - 純粋なJavaScript実装とネイティブlibpqバインディングを備えたPostgreSQLクライアントです。
	- [Redis](https://github.com/luin/ioredis) - Redisクライアントです。
	- [LevelUP](https://github.com/Level/levelup) - LevelDBクライアントです。
	- [MySQL](https://github.com/mysqljs/mysql) - MySQLクライアントです。
	- [couchdb-nano](https://github.com/apache/couchdb-nano) - CouchDBクライアントです。
	- [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) - Aerospikeクライアントです。
	- [Couchbase](https://github.com/couchbase/couchnode) - Couchbaseクライアントです。
	- [MongoDB](https://github.com/mongodb/node-mongodb-native) - MongoDBドライバーです。
- ODM / ORM
	- [Sequelize](https://github.com/sequelize/sequelize) - PostgreSQL、SQLite、MySQLなど複数のSQL方言に対応するORMです。
	- [Bookshelf](https://github.com/bookshelf/bookshelf) - Backbone.js風に設計されたPostgreSQL、MySQL、SQLite3向けORMです。
	- [Mongoose](https://github.com/Automattic/mongoose) - 洗練されたMongoDBオブジェクトモデリングを提供します。
	- [Waterline](https://github.com/balderdashy/waterline) - データストアに依存せず、一つ以上のデータベースとのやり取りを大幅に簡素化します。
	- [OpenRecord](https://github.com/PhilWaldmann/openrecord) - PostgreSQL、MySQL、SQLite3、RESTfulデータストア向けの、ActiveRecordに似たORMです。
	- [pg-promise](https://github.com/vitaly-t/pg-promise) - Promiseを使ってネイティブSQLを扱うPostgreSQLフレームワークです。
	- [slonik](https://github.com/gajus/slonik) - 厳格な型、詳細なログ、アサーションを備えたPostgreSQLクライアントです。
	- [Objection.js](https://github.com/Vincit/objection.js) - SQLクエリビルダーKnex上に構築された軽量ORMです。
	- [TypeORM](https://github.com/typeorm/typeorm) - PostgreSQL、MariaDB、MySQL、SQLiteなどに対応するORMです。
	- [MikroORM](https://github.com/mikro-orm/mikro-orm) - Data Mapper、Unit of Work、Identity Mapパターンを採用し、MongoDB、PostgreSQL、MySQL、SQLiteに対応するTypeScript ORMです。
	- [Prisma](https://github.com/prisma/prisma) - PostgreSQL、MySQL、SQLiteに対応し、自動生成される型安全なTypeScriptクエリビルダーを提供するモダンなデータベースアクセス手段です。
 	- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - PostgreSQLなど各種データベースに対応するTypeScript ORMです。
- Query builder
	- [Knex](https://github.com/knex/knex) - 柔軟性、移植性、使いやすさを重視したPostgreSQL、MySQL、SQLite3向けクエリビルダーです。
- Other
	- [NeDB](https://github.com/louischatriot/nedb) - JavaScriptで実装された組み込み永続データベースです。
	- [Lowdb](https://github.com/typicode/lowdb) - Lodashを利用する小型JavaScriptデータベースです。
	- [Keyv](https://github.com/jaredwray/keyv) - 複数のバックエンドに対応するシンプルなキーバリューストレージです。
	- [Finale](https://github.com/tommybananas/finale) - Sequelizeモデル向けのRESTfulエンドポイントを生成します。
	- [database-js](https://github.com/mlaanderson/database-js) - JDBC風の接続で複数データベースを扱うラッパーです。
	- [Mongo Seeding](https://github.com/pkosiec/mongo-seeding) - JavaScriptとJSONファイルからMongoDBデータベースへデータを投入します。
	- [@databases](https://github.com/ForbesLindesay/atdatabases) - SQLインジェクションの危険を避けながら、プレーンSQLでPostgreSQL、MySQL、SQLite3を照会します。
	- [pg-mem](https://github.com/oguimbal/pg-mem) - テスト向けのインメモリーPostgreSQLインスタンスです。

### テスト <a id="testing"></a>

- [AVA](https://github.com/avajs/ava) - 先進的なテストランナーです。
- [Mocha](https://github.com/mochajs/mocha) - 非同期テストを簡単かつ楽しくする多機能テストフレームワークです。
- [nyc](https://github.com/istanbuljs/nyc) - Istanbulを基盤とし、サブプロセスにも対応するコードカバレッジツールです。
- [tap](https://github.com/tapjs/node-tap) - TAPテストフレームワークです。
- [tape](https://github.com/substack/tape) - TAPを出力するテストハーネスです。
- [power-assert](https://github.com/power-assert-js/power-assert) - 標準のassertインターフェースを通じて詳しいアサーションメッセージを提供します。
- [Mochify](https://github.com/mantoni/mochify.js) - Browserify、Mocha、PhantomJS、WebDriverを使ったTDDを支援します。
- [trevor](https://github.com/vadimdemedes/trevor) - バージョンを手動で切り替えたりTravis CIへプッシュしたりせず、複数のNode.jsバージョンでテストを実行します。
- [loadtest](https://github.com/alexfernandez/loadtest) - 自動化用APIを備えたWebアプリケーション負荷テストツールです。
- [Sinon.JS](https://github.com/sinonjs/sinon) - テスト用のスパイ、スタブ、モックを提供します。
- [navit](https://github.com/nodeca/navit) - ブラウザーテストのスクリプト作成を簡素化するPhantomJS／SlimerJSラッパーです。
- [Nock](https://github.com/nock/nock) - HTTPのモックと期待値を提供します。
- [intern](https://github.com/theintern/intern) - コードテスト用スタックです。
- [toxy](https://github.com/h2non/toxy) - 障害シナリオやネットワーク条件を模擬できる改変可能なHTTPプロキシです。
- [hook-std](https://github.com/sindresorhus/hook-std) - 標準出力と標準エラー出力をフックして変更します。
- [testen](https://github.com/egoist/testen) - NVMを使い、複数のNode.jsバージョンでローカルにテストを実行します。
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - Selenium WebDriverを基盤とする自動UIテストフレームワークです。
- [WebdriverIO](https://github.com/webdriverio/webdriverio) - WebDriverプロトコルを基盤とする自動テストツールです。
- [Jest](https://github.com/facebook/jest) - 手間なく使えるJavaScriptテストフレームワークです。
- [Vitest](https://github.com/vitest-dev/vitest) - Viteを基盤とする高速なユニットテストフレームワークです。
- [TestCafe](https://github.com/DevExpress/testcafe) - ブラウザーを自動テストします。
- [abstruse](https://github.com/bleenco/abstruse) - 継続的インテグレーションサーバーです。
- [CodeceptJS](https://github.com/codeceptjs/CodeceptJS) - エンドツーエンドテストを提供します。
- [Puppeteer](https://github.com/puppeteer/puppeteer) - ヘッドレスChromeを操作します。
- [Playwright](https://github.com/microsoft/playwright) - 一つのAPIでヘッドレスChromium、WebKit、Firefoxを操作します。
- [nve](https://github.com/ehmicky/nve) - 任意のコマンドを複数のNode.jsバージョンでローカルに実行します。
- [axe-core](https://github.com/dequelabs/axe-core) - Web UI自動テスト向けのアクセシビリティエンジンです。
- [testcontainers-node](https://github.com/testcontainers/testcontainers-node) - 一般的なデータベース、Seleniumブラウザー、Dockerコンテナーで動作する任意のソフトウェアについて、軽量で使い捨て可能なインスタンスを提供します。

### セキュリティ <a id="security"></a>

- [upash](https://github.com/simonepri/upash) - あらゆるパスワードハッシュアルゴリズムを統一APIで扱います。
- [themis](https://github.com/cossacklabs/themis) - 保存データ、認証付きデータ交換、通信保護、認証など、一般的な暗号化方式を使いやすくする多言語フレームワークです。
- [GuardRails](https://github.com/apps/guardrails) - プルリクエストへセキュリティ上のフィードバックを提供するGitHubアプリです。
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible) - ブルートフォース攻撃とDDoS攻撃から保護します。
- [crypto-hash](https://github.com/sindresorhus/crypto-hash) - 非同期かつノンブロッキングでハッシュを計算します。
- [jose-simple](https://github.com/davesag/jose-simple) - JOSE（JSON Object Signing and Encryption）標準を使ってデータを暗号化・復号します。

### ベンチマーク <a id="benchmarking"></a>

- [Benchmark.js](https://github.com/bestiejs/benchmark.js) - 高分解能タイマーに対応し、統計的に有意な結果を返すベンチマークライブラリです。

### 縮小ツール <a id="minifiers"></a>

- [babel-minify](https://github.com/babel/minify) - Babelツールチェーンを基盤とし、ES2015以降を認識する縮小ツールです。
- [UglifyJS2](https://github.com/mishoo/UglifyJS) - JavaScript縮小ツールです。
- [clean-css](https://github.com/clean-css/clean-css) - CSS縮小ツールです。
- [minimize](https://github.com/Swaagie/minimize) - HTML縮小ツールです。
- [imagemin](https://github.com/imagemin/imagemin) - 画像縮小ツールです。

### 認証 <a id="authentication"></a>

- [Passport](https://github.com/jaredhanson/passport) - シンプルで邪魔にならない認証ミドルウェアです。
- [Grant](https://github.com/simov/grant) - Express、Koa、Hapi、Fastify、AWS Lambda、Azure、Google Cloud、VercelなどでOAuthプロバイダーを利用できます。

### 認可 <a id="authorization"></a>

- [CASL](https://github.com/stalniy/casl) - UIとAPIの両方で利用できる同型の認可ライブラリです。
- [node-casbin](https://github.com/casbin/node-casbin) - ACL、RBAC、ABACなどのアクセス制御モデルに対応する認可ライブラリです。

### メール <a id="email"></a>

- [Nodemailer](https://github.com/nodemailer/nodemailer) - メール処理を素早く実装できます。
- [emailjs](https://github.com/eleith/emailjs) - 任意のSMTPサーバーを使い、添付ファイル付きのテキスト／HTMLメールを送信します。
- [email-templates](https://github.com/forwardemail/email-templates) - 独自のメールテンプレートを作成、プレビュー、送信します。
- [MJML](https://github.com/mjmlio/mjml) - レスポンシブメール作成の負担を減らすために設計されたマークアップ言語です。
- [Forward Email](https://github.com/forwardemail/forwardemail.net) - オープンソースでセルフホスト可能なメールサービスです。

### ジョブキュー <a id="job-queues"></a>

- [bull](https://github.com/OptimalBits/bull) - 永続的なジョブ・メッセージキューです。
- [agenda](https://github.com/agenda/agenda) - MongoDBを基盤とするジョブスケジューラーです。
- [idoit](https://github.com/nodeca/idoit) - 高度なジョブ制御を備えたRedisベースのジョブキューエンジンです。
- [node-resque](https://github.com/actionhero/node-resque) - Redisベースのジョブキューです。
- [rsmq](https://github.com/smrchy/rsmq) - Redisベースのメッセージキューです。
- [bee-queue](https://github.com/bee-queue/bee-queue) - 高性能なRedisベースのジョブキューです。
- [RedisSMQ](https://github.com/weyoss/redis-smq) - リアルタイム監視を備えた、シンプルで高性能なRedisメッセージキューです。
- [sqs-consumer](https://github.com/bbc/sqs-consumer) - 定型コードなしでAmazon Simple Queue Service（SQS）ベースのアプリを構築します。
- [better-queue](https://github.com/diamondio/better-queue) - Redisを利用できない場合に適した、シンプルで効率的なジョブキューです。
- [bullmq](https://github.com/taskforcesh/bullmq) - 永続的なジョブ・メッセージキューです。
- [bree](https://github.com/breejs/bree) - Worker Thread、cron、日付、人が読みやすい構文に対応するジョブスケジューラーです。
- [graphile-worker](https://github.com/graphile/worker) - 高性能なPostgreSQLジョブキューです。

### Node.js管理 <a id="nodejs-management"></a>

- [n](https://github.com/tj/n) - Node.jsのバージョンを管理します。
- [nave](https://github.com/isaacs/nave) - Node.js向けの仮想環境を提供します。
- [nodeenv](https://github.com/ekalinin/nodeenv) - Pythonのvirtualenvと互換性のあるNode.js仮想環境です。
- [nvm for Windows](https://github.com/coreybutler/nvm-windows) - Windows向けのNode.jsバージョン管理ツールです。
- [nodenv](https://github.com/nodenv/nodenv) - Rubyのrbenvに似た、自動バージョン切り替え対応のNode.jsバージョン管理ツールです。
- [fnm](https://github.com/Schniz/fnm) - Rustで実装されたクロスプラットフォームのNode.jsバージョン管理ツールです。

### クロスプラットフォーム統合 <a id="cross-platform-integration"></a>

- [napi-rs](https://github.com/napi-rs/napi-rs) - Node-APIを介し、Rustでコンパイル済みNode.jsアドオンを構築するフレームワークです。
- [Neon](https://github.com/neon-bindings/neon) - 安全で高速なネイティブNode.jsモジュールをRustで記述するためのバインディングです。
- [Edge.js](https://github.com/agracio/edge-js) - Windows、macOS、Linuxで.NETとNode.jsのコードを同じプロセス内で実行します。
- [DotNetJS](https://github.com/Elringus/DotNetJS) - .NET相互運用層を使ってNode.jsから.NETライブラリを利用します。

### 自然言語処理 <a id="natural-language-processing"></a>

- [retext](https://github.com/retextjs/retext) - 拡張可能な自然言語処理システムです。
- [franc](https://github.com/wooorm/franc) - テキストの言語を検出します。
- [leven](https://github.com/sindresorhus/leven) - レーベンシュタイン距離アルゴリズムで二つの文字列の差を測定します。
- [natural](https://github.com/NaturalNode/natural) - 自然言語処理機能を提供します。
- [nlp.js](https://github.com/axa-group/nlp.js) - エンティティ抽出、感情分析、言語自動識別などを備えたボットを構築します。

### プロセス管理 <a id="process-management"></a>

- [PM2](https://github.com/Unitech/pm2) - 高度なプロセスマネージャーです。
- [nodemon](https://github.com/remy/nodemon) - アプリの変更を監視し、サーバーを自動的に再起動します。
- [node-mac](https://github.com/coreybutler/node-mac) - スクリプトをネイティブMacデーモンとして実行し、コンソールアプリへ記録します。
- [node-linux](https://github.com/coreybutler/node-linux) - スクリプトをネイティブシステムサービスとして実行し、syslogへ記録します。
- [node-windows](https://github.com/coreybutler/node-windows) - スクリプトをネイティブWindowsサービスとして実行し、イベントビューアーへ記録します。
- [supervisor](https://github.com/petruisfan/node-supervisor) - スクリプトのクラッシュ時、または`*.js`ファイルの変更時に再起動します。
- [Phusion Passenger](https://github.com/phusion/passenger) - Nginxへ直接統合できる使いやすいプロセスマネージャーです。

### 自動化 <a id="automation"></a>

- [robotjs](https://github.com/octalmage/robotjs) - マウスとキーボードを制御し、画面を読み取るデスクトップ自動化ツールです。
- [nut.js](https://github.com/nut-tree/nut.js) - 画像照合機能とJest連携を備えた、クロスプラットフォームのネイティブGUI自動化・テストフレームワークです。

### AST <a id="ast"></a>

- [Acorn](https://github.com/acornjs/acorn) - 小型で高速なJavaScriptパーサーです。
- [babel-parser](https://github.com/babel/babel/tree/master/packages/babel-parser) - Babelで使用されているJavaScriptパーサーです。

### 静的サイトジェネレーター <a id="static-site-generators"></a>

- [DocPad](https://github.com/docpad/docpad) - 動的機能と大規模なプラグインエコシステムを備えた静的サイトジェネレーターです。
- [docsify](https://github.com/docsifyjs/docsify) - 静的なHTMLファイルを生成しないMarkdown文書サイトジェネレーターです。
- [Charge](https://github.com/brandonweiss/charge) - JSXとMDXを使う、方針が明確で設定不要の静的サイトジェネレーターです。

### コンテンツ管理システム <a id="content-management-systems"></a>

- [KeystoneJS](https://github.com/keystonejs/keystone) - ExpressとMongoDB上に構築されたCMS兼Webアプリケーションプラットフォームです。
- [ApostropheCMS](https://github.com/apostrophecms/apostrophe) - ExpressとMongoDB上に構築され、直感的なフロントエンド編集と管理を重視するコンテンツ管理システムです。
- [Strapi](https://github.com/strapi/strapi) - 高機能なAPIを構築するためのコンテンツ管理フレームワーク（ヘッドレスCMS）です。
- [Factor](https://github.com/FactorJS/factor) - Vue.jsダッシュボードフレームワーク兼ヘッドレスCMSです。
- [AdminBro](https://github.com/SoftwareBrothers/adminjs) - すべてのリソースにCRUD機能を備えた管理パネルを自動生成します。
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - CMS兼ヘッドレスGraphQL APIです。

### フォーラム <a id="forum"></a>

- [nodeBB](https://github.com/NodeBB/NodeBB) - モダンWeb向けのフォーラムプラットフォームです。

### ブログ <a id="blogging"></a>

- [Ghost](https://github.com/TryGhost/Ghost) - シンプルで高機能なパブリッシングプラットフォームです。
- [Hexo](https://github.com/hexojs/hexo) - 高速でシンプルかつ高機能なブログフレームワークです。

### ユニーク <a id="weird"></a>

- [cows](https://github.com/sindresorhus/cows) - ASCIIアートの牛を取得します。
- [superb](https://github.com/sindresorhus/superb) - 「素晴らしい」に類する単語を取得します。
- [cat-names](https://github.com/sindresorhus/cat-names) - 人気の猫の名前を取得します。
- [dog-names](https://github.com/sindresorhus/dog-names) - 人気の犬の名前を取得します。
- [superheroes](https://github.com/sindresorhus/superheroes) - スーパーヒーローの名前を取得します。
- [supervillains](https://github.com/sindresorhus/supervillains) - スーパーヴィランの名前を取得します。
- [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) - 面白いASCII顔文字を取得します。
- [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) - `₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ”`。
- [nerds](https://github.com/SkyHacks/nerds) - Harry Potter、Star Wars、Pokémonなどのマニアックな題材からデータを取得します。

### シリアライズ <a id="serialization"></a>

- [snappy](https://github.com/kesla/node-snappy) - GoogleのSnappy圧縮ライブラリ向けネイティブバインディングです。
- [protobuf](https://github.com/protobufjs/protobuf.js) - Protocol Buffersの実装です。
- [compactr](https://github.com/compactr/compactr.js) - Compactrプロトコルの実装です。

### その他 <a id="miscellaneous"></a>

- [execa](https://github.com/sindresorhus/execa) - `child_process`をより使いやすくします。
- [cheerio](https://github.com/cheeriojs/cheerio) - サーバー向けに設計された、高速で柔軟かつ軽量なjQueryコア実装です。
- [open](https://github.com/sindresorhus/open) - Webサイト、ファイル、実行可能ファイルなどを開きます。
- [hasha](https://github.com/sindresorhus/hasha) - バッファー、文字列、ストリーム、ファイルのハッシュを簡単に取得します。
- [dot-prop](https://github.com/sindresorhus/dot-prop) - ドット区切りのパスを使ってネストしたオブジェクトのプロパティを取得します。
- [onetime](https://github.com/sindresorhus/onetime) - 関数を一度だけ実行します。
- [mem](https://github.com/sindresorhus/mem) - 同じ入力に対する呼び出し結果をキャッシュし、連続する関数呼び出しを高速化します。
- [strip-bom](https://github.com/sindresorhus/strip-bom) - 文字列、バッファー、ストリームからUTF-8のバイトオーダーマーク（BOM）を除去します。
- [os-locale](https://github.com/sindresorhus/os-locale) - システムのロケールを取得します。
- [ssh2](https://github.com/mscdex/ssh2) - SSH2クライアント・サーバーモジュールです。
- [adit](https://github.com/markelog/adit) - SSHトンネリングを簡単にします。
- [file-type](https://github.com/sindresorhus/file-type) - バッファーからファイル形式を検出します。
- [Bottleneck](https://github.com/SGrondin/bottleneck) - スロットリングを簡単にするレートリミッターです。
- [webworker-threads](https://github.com/audreyt/node-webworker-threads) - ネイティブスレッドを使う軽量なWeb Worker API実装です。
- [clipboardy](https://github.com/sindresorhus/clipboardy) - システムクリップボードへアクセスしてコピーと貼り付けを行います。
- [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) - Node.js C++アドオンをバイナリとして公開・インストールしやすくします。
- [opencv](https://github.com/peterbraden/node-opencv) - デファクトスタンダードのコンピュータービジョンライブラリOpenCV向けバインディングです。
- [dotenv](https://github.com/motdotla/dotenv) - .envファイルから環境変数を読み込みます。
- [semver](https://github.com/npm/node-semver) - セマンティックバージョンを解析します。
- [nodegit](https://github.com/nodegit/nodegit) - Git向けネイティブバインディングです。
- [json-strictify](https://github.com/pigulla/json-strictify) - データ損失や無限ループを避けて値を安全にJSONへシリアライズします。
- [jsdom](https://github.com/jsdom/jsdom) - HTMLとDOMのJavaScript実装です。
- [@sindresorhus/is](https://github.com/sindresorhus/is) - 値の型を検査します。
- [env-dot-prop](https://github.com/simonepri/env-dot-prop) - ドット区切りのパスでprocess.envのネストしたプロパティを取得、設定、削除します。
- [node-video-lib](https://github.com/gkozlenko/node-video-lib) - MP4・FLV動画を扱い、HLSストリーミング用のMPEG-TSチャンクを作成する純粋なJavaScriptライブラリです。
- [basic-ftp](https://github.com/patrickjuchli/basic-ftp) - FTP／FTPSクライアントです。
- [cashify](https://github.com/xxczaki/cashify) - 通貨を変換します。
- [genepi](https://github.com/Geode-solutions/genepi) - C++コードからネイティブNode.jsアドオンを自動生成します。
- [husky](https://github.com/typicode/husky) - Gitフックスクリプトを作成します。
- [patch-package](https://github.com/ds300/patch-package) - npm依存関係への修正を作成して保持します。
- [editly](https://github.com/mifi/editly) - 宣言的な動画編集APIです。
- [wild-wild-path](https://github.com/ehmicky/wild-wild-path) - ワイルドカードと正規表現に対応するオブジェクトプロパティパスです。
- [uint8array-extras](https://github.com/sindresorhus/uint8array-extras) - Uint8ArrayとBufferを扱うための便利なユーティリティです。

## パッケージマネージャー <a id="package-manager"></a>

- [npm](https://docs.npmjs.com/about-npm) - 既定のパッケージマネージャーです。
- [pnpm](https://pnpm.io) - ディスク容量を効率的に利用するパッケージマネージャーです。
- [yarn](https://yarnpkg.com) - 代替パッケージマネージャーです。
- [bun](https://bun.sh) - JavaScript・TypeScriptアプリ向けのオールインワンツールキットです。

## 資料 <a id="resources"></a>

### チュートリアル <a id="tutorials"></a>

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - 複数言語で提供されている、評価の高いNode.jsベストプラクティス資料の要約・厳選集です。
- [Nodeschool](https://github.com/nodeschool) - 対話型レッスンでNode.jsを学べます。
- [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) - Node.jsの入門資料です。
- [module-best-practices](https://github.com/mattdesl/module-best-practices) - 新しいnpmモジュールを作成する際の優れた実践方法を紹介します。
- [The Node Way](https://github.com/FredKSchott/the-node-way) - 保守可能なモジュール、スケーラブルなアプリ、読みやすいコードを書くためのNode.jsベストプラクティスと指針を体系化しています。
- [You Don't Know Node.js](https://github.com/azat-co/you-dont-know-node) - Node.jsの主要機能と非同期JavaScriptの入門資料です。
- [Portable Node.js guide](https://github.com/ehmicky/cross-platform-node-guide) - 移植可能なクロスプラットフォームNode.jsコードを書くための実践ガイドです。
- [Build a real web app with no frameworks](https://frameworkless.js.org/course) - 少数のシンプルなライブラリとNode.jsコアモジュールを使い、実際に動くWebアプリを構築・デプロイする動画チュートリアル／ライブ配信集です。

### 検索 <a id="discovery"></a>

- [npms](https://npms.io) - [多数の指標](https://npms.io/about)でパッケージ品質を詳しく分析する高機能な検索サービスです。
- [npm addict](https://npmaddict.com) - npmパッケージを毎日紹介します。

### 記事 <a id="articles"></a>

- [Error Handling in Node.js](https://sematext.com/blog/node-js-error-handling/)
- [Teach Yourself Node.js in 10 Steps](https://ponyfoo.com/articles/teach-yourself-nodejs-in-10-steps)
- [Mastering the filesystem in Node.js](https://medium.com/@yoshuawuyts/mastering-the-filesystem-in-node-js-4706b7cb0801)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/)
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Why Asynchronous?](https://nodesource.com/blog/why-asynchronous/)
- [Understanding the Node.js Event Loop](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)
- [Understanding Object Streams](https://nodesource.com/blog/understanding-object-streams/)
- [Using Express to Quickly Build a GraphQL Server](https://snipcart.com/blog/graphql-nodejs-express-tutorial)

### ニュースレター <a id="newsletters"></a>

- [Node Weekly](https://nodeweekly.com) - Node.jsのニュースと記事を毎週まとめて届けるメールニュースレターです。

### 動画 <a id="videos"></a>

- [Introduction to Node.js with Ryan Dahl](https://www.youtube.com/watch?v=jo_B4LTHi3I)
- [Hands on with Node.js](https://learn.bevry.me/hands-on-with-node.js/preface)
- [V8 Garbage Collector](https://v8.dev/blog/trash-talk) - V8のガベージコレクターについて解説します。
- [10 Things I Regret About Node.js by Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA) - Node.jsの作者が、その制約の一部を振り返る洞察に富んだ講演です。
- [Mastering REST APIs in Node.js: Zero-To-Hero](https://www.manning.com/livevideo/mastering-rest-apis-in-nodejs) - Node.jsでREST APIを構築する方法を学ぶ動画講座です。
- [Make a vanilla Node.js REST API](https://www.youtube.com/watch?v=_1xa8Bsho6A) - Expressなどのフレームワークを使わずにREST APIを構築します。
- [Google I/O 2009 - V8: High Performance JavaScript Engine](https://www.youtube.com/watch?v=FrufJFBSoQY) - V8アーキテクチャの基礎とJavaScript実行の最適化方法を解説します。
- [Google I/O 2012 - Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw) - V8がJavaScript実行を最適化する仕組みを解説します。
- [Google I/O 2013 - Accelerating Oz with V8: Follow the Yellow Brick Road to JavaScript Performance](https://www.youtube.com/watch?v=VhpdsjBUS3g) - V8の知識を使ってアプリのボトルネックを検出し、性能を最適化する方法を解説します。
- [Node.js Internal Architecture | Ignition, Turbofan, Libuv](https://www.youtube.com/watch?v=OCjvhCFFPTw) - V8とlibuvを中心に、Node.jsの内部動作を解説します。
- [Introduction to libuv: What's a Unicorn Velociraptor?](https://www.youtube.com/watch?v=_c51fcXRLGw) - `libuv`のアーキテクチャ、スレッドプール、イベントループをソースコードとともに解説します。
- [libuv Cross platform asynchronous i/o](https://www.youtube.com/watch?v=kCJ3PFU8Ke8) - 実際にスレッドを使う箇所など、`libuv`のアーキテクチャを詳しく解説します。
- [You Don't Know Node - ForwardJS San Francisco](https://www.youtube.com/watch?v=oPo4EQmkjvY) - V8、libuv、イベントループ、モジュール、ストリーム、クラスターに関するクイズを通してNode.js内部を解説します。

### 書籍 <a id="books"></a>

- [Node.js in Action](https://www.manning.com/books/node-js-in-action-second-edition)
- [Node.js in Practice](https://www.amazon.com/Node-js-Practice-Alex-R-Young/dp/1617290939)
- [Mastering Node](https://visionmedia.github.io/masteringnode/)
- [Node.js 8 the Right Way](https://pragprog.com/book/jwnode2/node-js-8-the-right-way/)
- [Professional Node.js: Building JavaScript Based Scalable Software](https://www.amazon.com/Professional-Node-js-Building-JavaScript-Scalable-ebook/dp/B009L7QETY/)
- [Secure Your Node.js Web Application](https://www.amazon.com/Secure-Your-Node-js-Web-Application/dp/1680500856)
- [Express in Action](https://www.manning.com/books/express-in-action)
- [Practical Modern JavaScript](https://www.amazon.com/Practical-Modern-JavaScript-Dive-Future/dp/149194353X)
- [Mastering Modular JavaScript](https://www.amazon.com/Mastering-Modular-JavaScript-Nicolas-Bevacqua/dp/1491955686/)
- [Get Programming with Node.js](https://www.manning.com/books/get-programming-with-node-js)
- [Node.js Cookbook](https://www.amazon.com/dp/1838558756)
- [Node.js Design Patterns](https://www.nodejsdesignpatterns.com)

### ブログ <a id="blogs"></a>

- [Node.js blog](https://nodejs.org/en/blog/)
- [webapplog.com](https://webapplog.com/tag/node-js/) - 『Practical Node.js』『Pro Express.js』の著者Azat MardanによるNode.jsとJavaScriptのブログ記事です。

### 講座 <a id="courses"></a>

- [Learn to build apps and APIs with Node.js](https://learnnode.com/friend/AWESOME) - Wes Bosによる動画講座です。
- [Real Time Web with Node.js](https://www.pluralsight.com/courses/code-school-real-time-web-with-nodejs)
- [Learn and Understand Node.js](https://www.udemy.com/course/understand-nodejs/)
- [Node.js Full Stack Developer Course](https://kinsta.com/academy/course/node-js-full-stack-developer/)

### チートシート <a id="cheatsheets"></a>

- [Express.js](https://github.com/azat-co/cheatsheets/tree/master/express4)
- [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) - ページネーションやイベントなど、ストリームに関するよくある質問へ回答します。
- [Strong Node.js](https://github.com/jesusprubio/strong-node) - Node.js Webサービスのソースコードをセキュリティ分析するためのチェックリストです。

### ツール <a id="tools"></a>

- [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) - GitHub上のpackage.json、.js、.jsx、.coffee、.mdファイル内にある依存関係へリンクを付けるChrome拡張機能です。
- [npm-hub](https://chrome.google.com/webstore/detail/npmhub/kbbbjimdjbjclaebffknlabpogocablj) - リポジトリのREADME下部へnpm依存関係を表示するChrome拡張機能です。
- [RunKit](https://runkit.com) - 任意のWebサイトへNode.js環境を埋め込みます。
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - GitHub上にnpmのダウンロード統計を表示するChrome拡張機能です。
- [npm semver calculator](https://semver.npmjs.com) - semver範囲に一致するパッケージバージョンを視覚的に確認します。
- [CodeSandbox](https://codesandbox.io/templates/node-http-server) - オンラインIDE兼プロトタイピング環境です。
- [Amplication](https://github.com/amplication/amplication) - 完全に動作するアプリを自動生成します。
- [RunJS](https://runjs.app) - デスクトップ向けJavaScriptプレイグラウンドです。

### コミュニティ <a id="community"></a>

- [Stack Overflow](https://stackoverflow.com/questions/tagged/node.js)
- [Reddit](https://www.reddit.com/r/node)
- [Twitter](https://twitter.com/nodejs)
- [Hashnode](https://hashnode.com/n/nodejs)
- [Discord](https://discord.com/invite/96WGtJt)

### その他 <a id="miscellaneous-1"></a>

- [nodebots](https://nodebots.io) - JavaScriptで動くロボットです。
- [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) - Node.jsモジュールの作成を開始するためのボイラープレートです。
- [modern-node](https://github.com/sheerun/modern-node) - Jest、Prettier、ESLint、Standardを使ってNode.jsモジュールを作成するためのツールキットです。
- [generator-nm](https://github.com/sindresorhus/generator-nm) - Node.jsモジュールの雛形を生成します。
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - MicrosoftプラットフォームでNode.jsを扱うためのヒント、テクニック、資料です。
- [Module Requests & Ideas](https://github.com/sindresorhus/project-ideas) - 欲しいJavaScriptモジュールをリクエストしたり、モジュールのアイデアを探したりできます。
- [v8-perf](https://github.com/thlorenz/v8-perf) - V8およびNode.jsの性能に関するメモと資料です。

## 関連リスト <a id="related-lists"></a>

- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - npmを利用するための資料とヒントです。
- [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) - クロスプラットフォームコードの作成とテストに役立つ資料です。
