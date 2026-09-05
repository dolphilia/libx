---
title: "Awesome cross-platform-nodejs logo"
description: "cross-platform-nodejs logoを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-bcoe-awesome-cross-platform-nodejs-readme-md"
---

# Awesome cross-platform-nodejs logo

cross-platform-nodejs logoを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>

- [資料](#resources)
- [アプリケーション](#applications)
  - [開発環境](#development-environment)
  - [継続的インテグレーション](#continuous-integration)
  - [仮想化](#virtualization)
  - [互換性](#compatibility)
  - [データベース](#databases)
- [ライブラリ](#libraries)
  - [OS識別](#os-identification)
  - [Shell](#shell)
  - [環境](#environment)
  - [ファイルシステム](#filesystem)
  - [シグナル](#signals)
  - [プロセス](#processes)
  - [ストリーム](#streams)
  - [デスクトップUI](#desktop-ui)
  - [Windowsレジストリ](#windows-registry)
- [既知の問題](#known-issues)
- [サポート](#support)

## 資料 <a id="resources"></a>

- [Core Node.js documentation](https://nodejs.org/en/docs/) - 特に [`os`](https://nodejs.org/api/os.html)、[`path`](https://nodejs.org/api/path.html)、[`fs`](https://nodejs.org/api/fs.html)、[`process`](https://nodejs.org/api/process.html) および [`child_process`](https://nodejs.org/api/child_process.html) モジュール。
- [Cross-platform Node.js guide](https://github.com/ehmicky/cross-platform-node-guide) - クロスプラットフォーム Node.js コードを書く方法。
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - Microsoft プラットフォーム上で Node.js を使う際のヒント、コツ、リソース。
- [Writing Cross-Platform Node.js](http://shapeshed.com/writing-cross-platform-node/) - パスの作成、スクリプトの実行、改行文字など、クロスプラットフォームコードを書く際によく発生する問題をカバーする素晴らしいチュートリアル。
- [Cross-platform terminal characters](https://github.com/ehmicky/cross-platform-terminal-characters) - ほとんどのターミナルおよびほとんどのオペレーティングシステムで動作するすべての文字。

## アプリケーション <a id="applications"></a>

### 開発環境 <a id="development-environment"></a>

- [Node.js](https://nodejs.org/en/download/) - さまざまなプラットフォーム向けの Node.js インストーラー。
- [nvm-windows](https://github.com/coreybutler/nvm-windows) - Windows コンピュータ上で複数の Node.js インストールを管理する方法。
- [nvm](https://github.com/creationix/nvm) / [n](https://github.com/tj/n) - macOS/Linux 用の Node バージョンマネージャー。
- [npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade) - Windows での npm のアップグレード方法。
- [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools) - Windows で npm を使用して C++ ビルドツールをインストールする方法。

### 継続的インテグレーション <a id="continuous-integration"></a>

- [AppVeyor](http://www.appveyor.com/) - Windowsに特化。オープンソースプロジェクトには無料枠を提供。
- [Travis](https://travis-ci.org/) - Windows/macOS/Linux。オープンソースプロジェクトには無料。
- [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) - Windows/macOS/Linux。オープンソースプロジェクトに 10 つの並列ジョブを許可。
- [Github Action](https://github.com/features/actions) - Windows／macOS／Linux。GitHub Actionsでソフトウェア開発ワークフローを自動化できる。
- [Gitlab CI](https://docs.gitlab.com/ee/ci/) - Windows/macOS/Linux。GitLab CI/CD は、ソフトウェア開発に組み込まれたツール。

### 仮想化 <a id="virtualization"></a>

- [ievms](https://github.com/amichaelparker/ievms) - マイクロソフトが複数バージョンのIEでテストを行うために提供する無料の仮想マシンイメージ向けの自動インストールツール。これらのイメージは、複数プラットフォームでの技術検証に役立つが、Microsoftのライセンスについて必ず読み、理解するよう注意してください。
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads) - x86仮想マシンを実行するための一般用途ソフトウェア。
- [Docker](https://www.docker.com/) - 共通のオペレーティングシステム上で仮想化されたアプリケーションコンテナを作成・展開・管理を行うソフトウェアプラットフォームであり、その周辺ツールのエコシステムを備えている。

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
- [gulp-execa](https://github.com/ehmicky/gulp-execa) - Gulp.jsにおけるクロスプラットフォームコマンド実行
- [cross-spawn](https://github.com/IndigoUnited/node-cross-spawn) - `child_process.spawn()`のクロスプラットフォーム実装
- [shelljs](https://github.com/shelljs/shelljs) - クロスプラットフォームUnixシェルコマンド
- [node-windows](https://github.com/coreybutler/node-windows) - Node.jsスクリプト（デーモン、イベントログ、UACなど）におけるWindowsサポート
- [log-symbols](https://github.com/sindresorhus/log-symbols) - ログレベルごとの色付きシンボル（Windowsでのフォールバックあり）
- [figures](https://github.com/sindresorhus/figures) - ユニコードシンボル（Windowsでのフォールバックあり）
- [clipboardy](https://github.com/sindresorhus/clipboardy) / [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - クロスプラットフォームコピー/ペースト

### 環境 <a id="environment"></a>

- [cross-env](https://github.com/kentcdodds/cross-env) - 環境変数のクロスプラットフォーム設定
- [user-home](https://github.com/sindresorhus/user-home) - ユーザーホームディレクトリへのパス取得。クロスプラットフォーム対応
- [username](https://github.com/sindresorhus/username) - 現在のユーザー名の取得
- [osenv](https://github.com/npm/osenv) - クロスプラットフォーム環境変数
- [is-elevated](https://github.com/sindresorhus/is-elevated) - プロセスが昇格権限で実行されているかの確認
- [which](https://github.com/npm/node-which) - Unixの`which`のクロスプラットフォーム実装

### ファイルシステム <a id="filesystem"></a>

- [rimraf](https://github.com/isaacs/rimraf) / [del](https://github.com/sindresorhus/del) - ファイルおよびフォルダの削除。クロスプラットフォーム対応
- [make-dir](https://github.com/sindresorhus/make-dir) - クロスプラットフォーム`mkdir -p`
- [readdirp](https://github.com/paulmillr/readdirp) - `fs.readdir()` の再帰的バージョン。
- [cpy](https://github.com/sindresorhus/cpy) - ファイルをコピー。マルチプラットフォーム対応。
- [chokidar](https://github.com/paulmillr/chokidar) - 改善されたマルチプラットフォームファイル監視。
- [graceful-fs](https://github.com/isaacs/node-graceful-fs) - Windows での `fs` モジュールの性能向上。
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - `graceful-fs` と、より良い JSON ファイル読み取りおよびプロミスを組み合わせる。
- [any-path](https://github.com/bcoe/any-path) - オブジェクトから値を取得する際、Windows および POSIX パスを互換的に使用できる。
- [dev-null-cli](https://github.com/sindresorhus/dev-null-cli) - マルチプラットフォーム対応 `/dev/null`。
- [global-cache-dir](https://github.com/ehmicky/global-cache-dir) - グローバルなOS固有のキャッシュディレクトリを取得。

### シグナル <a id="signals"></a>

- [fkill](https://github.com/sindresorhus/fkill) - プロセスの終了。マルチプラットフォーム対応。
- [signal-exit](https://github.com/tapjs/signal-exit) - マルチプラットフォーム対応 `exit` ハンドラー。
- [human-signals](https://github.com/ehmicky/human-signals) - 人間が使いやすいプロセスシグナル。

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
- [windows-registry-node](https://github.com/CatalystCode/windows-registry-node) - Windows レジストリへのアクセスまたは編集およびファイルアソシエーションの設定。

## 既知の問題 <a id="known-issues"></a>

- [cmd.exe unicode woes](https://github.com/nodejs/node-v0.x-archive/issues/7940) - デフォルトでは、`cmd.exe`はWindowsでユニコード文字を表示しない。
- [spawn issues](https://github.com/nodejs/node-v0.x-archive/issues/2318) - `child_process.spawn()`の動作はWindowsとLinuxの間で一貫していない。
- [exec() behavior between shells](https://github.com/isaacs/spawn-wrap#contracts-and-caveats) - 使用しているシェル（例：bash と dash）によって、`child_process.exec()`の終了動作が不一致である。

## 関連資料 <a id="see-also"></a>

- [awesome-desktop-js](https://github.com/styfle/awesome-desktop-js) - デスクトップ上でJavaScriptアプリケーションを構築するためのツール一覧。

## サポート <a id="support"></a>

誤りを見つけた場合や情報を追加したい場合は、遠慮なく
[GitHubでIssueを作成してください](#)。

個人の背景にかかわらず、すべての人を歓迎します。前向きで包摂的な環境を促進するため、
[行動規範](https://github.com/bcoe/awesome-cross-platform-nodejs/blob/d54a9f1769768752bb239e5f376aa01a5114d120/CODE_OF_CONDUCT.md)を適用します。

## コントリビューション <a id="contributing"></a>

このプロジェクトは❤️を込めて作られました。支援する最も簡単な方法は、スターを付けてオンラインで共有することです。

ドキュメントが不明瞭、または誤字がある場合は、ページの`Edit`ボタン（鉛筆アイコン）をクリックして修正を提案してください。

誤りの修正や情報追加に協力する場合は、[ガイドライン](https://github.com/bcoe/awesome-cross-platform-nodejs/blob/d54a9f1769768752bb239e5f376aa01a5114d120/contributing.md)を確認してください。Pull Requestを歓迎します。

以下の素晴らしい皆さんに感謝します：



<table><tr><td align="center"><a href="https://twitter.com/benjamincoe"><img src="https://avatars3.githubusercontent.com/u/194609?v=4" width="100px;" alt="Benjamin E. Coe"/><br /><sub><b>Benjamin E. Coe</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=bcoe" title="Code">💻</a> <a href="#ideas-bcoe" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=bcoe" title="Documentation">📖</a></td><td align="center"><a href="https://twitter.com/ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4" width="100px;" alt="ehmicky"/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=ehmicky" title="Code">💻</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=ehmicky" title="Documentation">📖</a></td><td align="center"><a href="https://sindresorhus.com"><img src="https://avatars1.githubusercontent.com/u/170270?v=4" width="100px;" alt="Sindre Sorhus"/><br /><sub><b>Sindre Sorhus</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=sindresorhus" title="Code">💻</a> <a href="#ideas-sindresorhus" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=sindresorhus" title="Documentation">📖</a></td><td align="center"><a href="https://fb.com/RemoveU"><img src="https://avatars1.githubusercontent.com/u/19208123?v=4" width="100px;" alt="Hongarc"/><br /><sub><b>Hongarc</b></sub></a><br /><a href="#design-Hongarc" title="Design">🎨</a> <a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=Hongarc" title="Documentation">📖</a> <a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=Hongarc" title="Code">💻</a></td><td align="center"><a href="https://kentcdodds.com"><img src="https://avatars0.githubusercontent.com/u/1500684?v=4" width="100px;" alt="Kent C. Dodds"/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="#ideas-kentcdodds" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://nz.linkedin.com/in/jsonc11"><img src="https://avatars0.githubusercontent.com/u/5185660?v=4" width="100px;" alt="Jason Cooke"/><br /><sub><b>Jason Cooke</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=Jason-Cooke" title="Documentation">📖</a></td><td align="center"><a href="http://aronhafner.com"><img src="https://avatars0.githubusercontent.com/u/3322693?v=4" width="100px;" alt="Aron Hafner"/><br /><sub><b>Aron Hafner</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=alonalon" title="Documentation">📖</a></td></tr><tr><td align="center"><a href="https://github.com/ShPelles"><img src="https://avatars0.githubusercontent.com/u/43875468?v=4" width="100px;" alt="ShPelles"/><br /><sub><b>ShPelles</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=ShPelles" title="Documentation">📖</a></td><td align="center"><a href="https://github.com/Frederick-S"><img src="https://avatars1.githubusercontent.com/u/1182395?v=4" width="100px;" alt="Xiaodan Mao"/><br /><sub><b>Xiaodan Mao</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=Frederick-S" title="Documentation">📖</a></td><td align="center"><a href="https://github.com/jamestalmage"><img src="https://avatars0.githubusercontent.com/u/4082216?v=4" width="100px;" alt="James Talmage"/><br /><sub><b>James Talmage</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=jamestalmage" title="Documentation">📖</a></td><td align="center"><a href="http://sylvain.pontoreau.com"><img src="https://avatars3.githubusercontent.com/u/3357643?v=4" width="100px;" alt="Sylvain PONTOREAU"/><br /><sub><b>Sylvain PONTOREAU</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=spontoreau" title="Documentation">📖</a></td><td align="center"><a href="https://www.ceriously.com"><img src="https://avatars1.githubusercontent.com/u/229881?v=4" width="100px;" alt="Steven"/><br /><sub><b>Steven</b></sub></a><br /><a href="#ideas-styfle" title="Ideas, Planning, & Feedback">🤔</a></td></tr></table>



このプロジェクトは[all-contributors](https://github.com/all-contributors/all-contributors)仕様に従っています。

## ライセンス <a id="license"></a>

[![License](https://img.shields.io/github/license/bcoe/awesome-cross-platform-nodejs.svg?color=4cc61e&logo=github)](https://creativecommons.org/licenses/by-sa/4.0/)
