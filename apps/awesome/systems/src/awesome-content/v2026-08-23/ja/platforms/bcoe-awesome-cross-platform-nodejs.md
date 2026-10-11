---
title: "Cross-Platform Node.js"
description: "クロスプラットフォームのNode.js開発に使うツール、ガイド、CIサービス、互換レイヤー、ライブラリと既知の問題。"
licenseSource: "github-bcoe-awesome-cross-platform-nodejs-readme-md"
---

# Cross-Platform Node.js<a id="awesome-cross-platform-nodejs-logo"></a>

複数のOSで動作するNode.jsコードを書くためのツールとガイドをまとめています。開発環境、CI、互換レイヤーに加え、OS判定、シェル、ファイルやプロセスを扱うライブラリを探せます。WindowsのUnicode出力やプロセス実行の違いに関する既知の問題も掲載しています。

以下の対応環境、無料枠、既知の問題は固定原文の記述に基づきます。現在の提供状況、保守状況、サービスの利用条件は確認していません。

## 資料 <a id="resources"></a>

- [Core Node.js documentation](https://nodejs.org/en/docs/) - 特に [`os`](https://nodejs.org/api/os.html)、[`path`](https://nodejs.org/api/path.html)、[`fs`](https://nodejs.org/api/fs.html)、[`process`](https://nodejs.org/api/process.html) および [`child_process`](https://nodejs.org/api/child_process.html) モジュール。
- [Cross-platform Node.js guide](https://github.com/ehmicky/cross-platform-node-guide) - 複数のOSで動作するNode.jsコードを書くためのガイド。
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - Microsoft プラットフォーム上で Node.js を使う際のヒント、コツ、リソース。
- [Writing Cross-Platform Node.js](http://shapeshed.com/writing-cross-platform-node/) - パスの作成、スクリプトの実行、改行文字など、クロスプラットフォームコードでよく生じる問題を扱うチュートリアル。
- [Cross-platform terminal characters](https://github.com/ehmicky/cross-platform-terminal-characters) - ほとんどの端末とOSで使用できる文字の一覧。

## アプリケーション <a id="applications"></a>

### 開発環境 <a id="development-environment"></a>

- [Node.js](https://nodejs.org/en/download/) - さまざまなプラットフォーム向けの Node.js インストーラー。
- [nvm-windows](https://github.com/coreybutler/nvm-windows) - Windows上にインストールした複数のNode.jsを管理。
- [nvm](https://github.com/creationix/nvm) / [n](https://github.com/tj/n) - macOS/Linux 用の Node バージョンマネージャー。
- [npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade) - Windows上のnpmをアップグレード。
- [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools) - npmを使ってWindows用のC++ Build Toolsをインストール。

### 継続的インテグレーション <a id="continuous-integration"></a>

- [AppVeyor](http://www.appveyor.com/) - Windowsに特化。オープンソースプロジェクトには無料枠を提供。
- [Travis](https://travis-ci.org/) - Windows/macOS/Linux。オープンソースプロジェクトには無料。
- [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) - Windows／macOS／Linux対応。オープンソースプロジェクトには10並列ジョブを無料提供。
- [GitHub Actions](https://github.com/features/actions) - Windows／macOS／Linux。GitHub Actionsでソフトウェア開発ワークフローを自動化できる。
- [GitLab CI](https://docs.gitlab.com/ee/ci/) - Windows／macOS／Linux対応。GitLabに組み込まれたソフトウェア開発用CI/CDツール。

### 仮想化 <a id="virtualization"></a>

- [ievms](https://github.com/amichaelparker/ievms) - マイクロソフトが複数バージョンのIEでテストを行うために提供する無料の仮想マシンイメージ向けの自動インストールツール。これらのイメージは、複数プラットフォームでの技術検証に役立つが、Microsoftのライセンスについて必ず読み、理解するよう注意してください。
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads) - x86仮想マシンを実行するための一般用途ソフトウェア。
- [Docker](https://www.docker.com/) - 共通のオペレーティングシステム上で仮想化されたアプリケーションコンテナを作成・展開・管理するソフトウェアプラットフォームであり、その周辺ツールのエコシステムを備えている。

### 互換性 <a id="compatibility"></a>

- [Wine](https://www.winehq.org/) - Linux、Mac、BSDおよびSolaris上でWindows API呼び出しを実行。
- [Cygwin](https://www.cygwin.com/) - Windows上でPOSIXを実行。
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) - Windows上でLinuxコマンドラインを実行（ELFバイナリの実行、システムコール、ファイルシステム、Bash、コアユーティリティ、一般的なアプリケーション）。
- [MinGW](http://www.mingw.org/) - Windowsで動作する`gcc`。
- [msys](http://www.mingw.org/wiki/msys) / [Git Bash](https://gitforwindows.org/) - Windows上のBash。

### データベース <a id="databases"></a>

- [Redis](https://github.com/tporadowski/redis) - Windows向けのRedisのネイティブポート。

## ライブラリ <a id="libraries"></a>

### OS識別 <a id="os-identification"></a>

- [is-windows](https://github.com/jonschlinkert/is-windows) - 現在のプラットフォームがWindowsであるかどうかを検出。
- [is-wsl](https://github.com/sindresorhus/is-wsl) - 現在のプラットフォームがWSL（Windows Subsystem for Linux）であるかどうかを検出。
- [getos](https://github.com/retrohacker/getos) - 現在のOSを取得（Linuxディストリビューションを含む）。
- [os-name](https://github.com/sindresorhus/os-name) - 現在のオペレーティングシステムの名前を取得。
- [systeminformation](https://github.com/sebhildebrandt/systeminformation) - ハードウェアおよびソフトウェアのシステム情報。

### シェル <a id="shell"></a>

- [execa](https://github.com/sindresorhus/execa) - `child_process.{execFile,exec}`のクロスプラットフォーム実装。
- [gulp-execa](https://github.com/ehmicky/gulp-execa) - Gulp.jsにおけるクロスプラットフォームコマンド実行。
- [cross-spawn](https://github.com/IndigoUnited/node-cross-spawn) - `child_process.spawn()`のクロスプラットフォーム実装。
- [shelljs](https://github.com/shelljs/shelljs) - クロスプラットフォームUnixシェルコマンド。
- [node-windows](https://github.com/coreybutler/node-windows) - Node.jsスクリプト（デーモン、イベントログ、UACなど）におけるWindowsサポート。
- [log-symbols](https://github.com/sindresorhus/log-symbols) - ログレベルごとの色付きシンボル（Windowsでのフォールバックあり）。
- [figures](https://github.com/sindresorhus/figures) - ユニコードシンボル（Windowsでのフォールバックあり）。
- [clipboardy](https://github.com/sindresorhus/clipboardy) / [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - クロスプラットフォームのコピー＆ペースト。

### 環境 <a id="environment"></a>

- [cross-env](https://github.com/kentcdodds/cross-env) - 環境変数のクロスプラットフォーム設定。
- [user-home](https://github.com/sindresorhus/user-home) - ユーザーホームディレクトリへのパス取得。クロスプラットフォーム対応。
- [username](https://github.com/sindresorhus/username) - 現在のユーザー名の取得。
- [osenv](https://github.com/npm/osenv) - クロスプラットフォーム環境変数。
- [is-elevated](https://github.com/sindresorhus/is-elevated) - プロセスが昇格権限で実行されているかの確認。
- [which](https://github.com/npm/node-which) - Unixの`which`のクロスプラットフォーム実装。

### ファイルシステム <a id="filesystem"></a>

- [rimraf](https://github.com/isaacs/rimraf) / [del](https://github.com/sindresorhus/del) - ファイルおよびフォルダの削除。クロスプラットフォーム対応。
- [make-dir](https://github.com/sindresorhus/make-dir) - クロスプラットフォーム`mkdir -p`。
- [readdirp](https://github.com/paulmillr/readdirp) - `fs.readdir()` の再帰的バージョン。
- [cpy](https://github.com/sindresorhus/cpy) - ファイルをコピー。マルチプラットフォーム対応。
- [chokidar](https://github.com/paulmillr/chokidar) - 改善されたマルチプラットフォームファイル監視。
- [graceful-fs](https://github.com/isaacs/node-graceful-fs) - 特にWindows上での`fs`モジュールの動作を改善。
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - `graceful-fs` と、より良い JSON ファイル読み取りおよびプロミスを組み合わせる。
- [any-path](https://github.com/bcoe/any-path) - オブジェクトから値を取得する際、Windows形式とPOSIX形式のパスを相互に置き換えて使用できる。
- [dev-null-cli](https://github.com/sindresorhus/dev-null-cli) - マルチプラットフォーム対応 `/dev/null`。
- [global-cache-dir](https://github.com/ehmicky/global-cache-dir) - グローバルなOS固有のキャッシュディレクトリを取得。

### シグナル <a id="signals"></a>

- [fkill](https://github.com/sindresorhus/fkill) - プロセスの終了。マルチプラットフォーム対応。
- [signal-exit](https://github.com/tapjs/signal-exit) - マルチプラットフォーム対応 `exit` ハンドラー。
- [human-signals](https://github.com/ehmicky/human-signals) - 人が扱いやすいプロセスシグナル。

### プロセス <a id="processes"></a>

- [ps-list](https://github.com/sindresorhus/ps-list) - 実行中のプロセスを取得。
- [process-exists](https://github.com/sindresorhus/process-exists) - プロセスが存在するか確認。

### ストリーム <a id="streams"></a>

- [noop-stream](https://github.com/sindresorhus/noop-stream) - マルチプラットフォーム対応 `fs.createReadStream('/dev/null')`。
- [random-bytes-readable-stream](https://github.com/sindresorhus/random-bytes-readable-stream) - マルチプラットフォーム対応 `fs.createReadStream('/dev/urandom')`。

### デスクトップUI <a id="desktop-ui"></a>

- [open](https://github.com/sindresorhus/open) - ウェブサイト、ファイル、実行ファイルなどを開く。プラットフォームを越えて動作。
- [node-notifier](https://github.com/mikaelbr/node-notifier) - デスクトップ通知をクロスプラットフォームで利用。

### Windowsレジストリ <a id="windows-registry"></a>

- [node-winreg](https://github.com/fresc81/node-winreg) - Windows レジストリへのアクセス。
- [rage-edit](https://github.com/MikeKovarik/rage-edit) - Windows レジストリへのアクセスまたは編集。
- [windows-registry-node](https://github.com/CatalystCode/windows-registry-node) - Windowsレジストリへのアクセス・編集とファイルの関連付けの設定。

## 既知の問題 <a id="known-issues"></a>

- [cmd.exe unicode woes](https://github.com/nodejs/node-v0.x-archive/issues/7940) - デフォルトでは、`cmd.exe`はWindowsでユニコード文字を表示しない。
- [spawn issues](https://github.com/nodejs/node-v0.x-archive/issues/2318) - `child_process.spawn()`の動作はWindowsとLinuxの間で一貫していない。
- [exec() behavior between shells](https://github.com/isaacs/spawn-wrap#contracts-and-caveats) - 使用するシェル（bashとdashなど）によって、`child_process.exec()`の終了動作が異なる。

## 関連資料 <a id="see-also"></a>

- [awesome-desktop-js](https://github.com/styfle/awesome-desktop-js) - デスクトップ上でJavaScriptアプリケーションを構築するためのツール一覧。
