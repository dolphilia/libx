---
title: "Awesome npm Scripts"
description: "npm Scriptsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-RyanZim-awesome-npm-scripts-readme-md"
---

# Awesome npm Scripts

npm Scriptsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次




- [記事](#articles)
- [動画・講演](#videostalks)
- [タスクランナー](#task-runners)
- [ファイル監視ツール](#file-watchers)
- [開発サーバー](#dev-servers)
- [クロスプラットフォームユーティリティ](#cross-platform-utilities)
  - [ユーティリティパック](#utility-packs)
- [その他のユーティリティ](#other-utilities)
- [その他](#miscellaneous)
- [クロスプラットフォームシェルのリファレンス](#cross-platform-shell-reference)
- [`npm run` リファレンス](#npm-run-reference)



## 記事

- [Why we should stop using Grunt & Gulp](https://www.keithcirkel.co.uk/why-we-should-stop-using-grunt/) - Keith Cirkel によるブログ記事。
- [How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) - 「Why we should stop using Grunt & Gulp」の続編。
- [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8) - Cory House による記事。
- [Helpers and tips for npm run scripts](http://michael-kuehnel.de/tooling/2018/03/22/helpers-and-tips-for-npm-run-scripts.html) - 高度なトピックを扱う Michael Kühnel のブログ記事。
- [Running cross-platform tasks via npm package scripts](https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html) - Dr. Axel Rauschmayer による、npm Scripts の利用方法を最も包括的に解説したガイド。

## 動画・講演

- [Advanced front-end automation with npm scripts](https://www.youtube.com/watch?v=0RYETb9YVrk) - Kate Hudson による Nordic.js 2015 での講演。
- [How to create a build system with npm scripts](http://www.penta-code.com/how-to-create-a-build-system-with-npm-scripts/) - フロントエンドのビルドシステム構築を解説する動画チュートリアルシリーズ。

## タスクランナー

複数のコマンドまたは npm スクリプトを並列・逐次に実行するツール。

- [script-runner](https://github.com/paulpflug/script-runner) - 簡潔な構文を備えたシンプルなタスクランナー。
- [npm-run-all2](https://github.com/bcomnes/npm-run-all2) - 多機能なタスクランナー。
- [redrun](https://github.com/coderaiser/redrun) - package.json のスクリプトを展開して実行速度を改善する。

## ファイル監視ツール

ソースファイルを監視し、いずれかのファイルが変更されるたびにビルドコマンドを実行するツール。

- [onchange](https://github.com/Qard/onchange) - `onchange <glob> -- <command>`。
- [watch](https://github.com/mikeal/watch) - `watch <command> <directory>`。

## 開発サーバー

- [http-server](https://github.com/indexzero/http-server) - 設定不要のシンプルなコマンドライン HTTP サーバー。
- [live-server](https://github.com/tapio/live-server) - ライブリロード機能を持つシンプルな開発用 HTTP サーバー。

## クロスプラットフォームユーティリティ

クロスプラットフォーム互換性を気にせず、よく使うコマンドラインタスクを実行するためのユーティリティ。

- [rimraf](https://github.com/isaacs/rimraf) - ファイルまたはディレクトリを削除する。`rm -rf` のようなもの。
- [del-cli](https://github.com/sindresorhus/del-cli) - より安全にファイルとフォルダーを削除する。
- [mkdirp](https://github.com/substack/node-mkdirp) - 必要に応じて親ディレクトリも作成してディレクトリを作成する。`mkdir -p` のようなもの。
- [cpr](https://github.com/davglass/cpr) - Node.js 用の `cp -r`。
- [cpy-cli](https://github.com/sindresorhus/cpy-cli) - ファイル・ディレクトリのコピーと名前変更。
- [copyfiles](https://github.com/calvinmetcalf/copyfiles) - ファイルのリストをディレクトリへコピーする。
- [sync-files](https://github.com/byteclubfr/node-sync-files) - 監視モードを備えた `rsync` 風のディレクトリ同期。
- [echo-cli](https://github.com/iamakulov/echo-cli) - JS のエスケープシーケンスに対応するクロスプラットフォームの `echo`。
- [clear-cli](https://github.com/sindresorhus/clear-cli) - ターミナルをクリアする。
- [cross-env](https://github.com/kentcdodds/cross-env) - Unix 形式でスクリプト用の環境変数を設定する。
- [cross-os](https://github.com/milewski/cross-os) - プラットフォーム固有の npm スクリプトを実行する。
- [ntee](https://github.com/stefanmaric/ntee) - 標準入力から読み取り、標準出力とファイルへ書き出すユーティリティ。Unix の `tee` のようなもの。
- [catw](https://github.com/substack/catw) - オプションの監視モード付きでファイルを標準出力へ表示する。Unix の `cat` に少し似ている。

### ユーティリティパック

- [shx](https://github.com/shelljs/shx) - Node.js で実装した一般的な Unix ユーティリティのコレクション。使用例: `shx rm somefile`。

## その他のユーティリティ

- [hashmark](https://github.com/keithamus/hashmark) - ファイルの内容を受け取り、名前にハッシュを含む新しいファイルとして出力する。
- [gzip-size-cli](https://github.com/sindresorhus/gzip-size-cli) - ファイルまたは標準入力の gzip 圧縮後サイズを取得する。
- [opn-cli](https://github.com/sindresorhus/opn-cli) - ユーザーの好みのアプリケーションで Web サイト、ファイル、実行ファイルなどを開く。
- [headr](https://github.com/heldr/headr) - ファイルにヘッダー・バナー情報を追加する。
- [Bower files CLI](https://github.com/thompsonemerson/bower-files-cli) - メインの Bower ファイルをコマンドラインで取得する。
- [cli-error-notifier](https://github.com/micromata/cli-error-notifier) - npm スクリプトが失敗したときにネイティブのデスクトップ通知を送る。

## その他

- [screwy](https://github.com/samueleaton/screwy) - npm scripts の GUI。
- [Forrest](https://github.com/stefanjudis/forrest) - npm scripts のデスクトップクライアント。
- [run-npm](https://github.com/timoxley/npm-run) - ローカルにインストールされた node モジュールの実行ファイルを実行する。npm scripts のデバッグに便利。
- [npm-quick-run](https://github.com/bahmutov/npm-quick-run) - 完全な名前を入力せず、接頭辞で npm scripts を素早く実行する。
- [edit-script](https://github.com/RyanZim/edit-script) - JSON のエスケープを気にせず、コマンドラインから npm scripts を編集する。
- [ntl](https://github.com/ruyadorno/ntl) - npm scripts を一覧表示・実行するための対話型 CLI メニュー。

## クロスプラットフォームシェルのリファレンス

Unix と Windows で同じように動作するシェル演算子とコマンドのクイックリファレンス。

- `&&` はコマンドを順に実行するために使う。コマンドが失敗するとスクリプトは終了する。
- `|` は、あるコマンドの標準出力を次のコマンドの標準入力へパイプするために使う。(`do-something | something else`)
- `>` はコマンドの標準出力をファイルへ書き込むために使う。(`do-something > file`)
- `<` はファイルの内容をコマンドの標準入力へ渡すために使う。(`command < file`)
- `cd <dir>` は現在の作業ディレクトリを `<dir>` に変更するために使う。`cd` 単体は Windows では現在の作業ディレクトリを表示する一方、\*nix では作業ディレクトリを `~` に変更する点に注意。

## `npm run` リファレンス

`npm run-script` または `npm run` を使える。両者は同じことを行うが、`npm run` のほうが短い。

- スクリプトの一覧を出力するには、`npm run` のみを実行する。
- `npm run script`（`script` はスクリプト名）を実行すると、`prescript`、`script`、`postscript` がこの順序で実行される。
  - `pre` と `post` のフックを入れ子にはできない（例: `preprescript` は動作しない）。
- スクリプトへ引数を渡すには、`--` を `npm run` の後ろに置き、その後に引数を指定する。例: スクリプトが `"mocha": "mocha"` の場合、`npm run mocha -- --reporter xunit` を実行できる。これは実質的に `mocha --reporter xunit` を実行する。
- `npm test` の実行は `npm run test` と同じである。`npm start` と `npm stop` についても同様。
- `npm run <script> -s` を実行すると、デフォルトの npm 出力を抑制できる（別のスクリプト内からスクリプトを呼び出す場合に便利）。

## 貢献

[CONTRIBUTING.md](https://github.com/RyanZim/awesome-npm-scripts/blob/master/CONTRIBUTING.md) を参照。
