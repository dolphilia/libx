---
title: "Awesome npm"
description: "npmを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-sindresorhus-awesome-npm-readme-md"
---

# Awesome npm

npmを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [記事](#articles)
- [ツール](#tools)
- [パッケージ](#packages)
- [クライアント](#clients)
- [ヒント](#tips)
- [FAQ](#faq)
- [コミュニティ](#community)
- [ドキュメント](#documentation)
- [サポート](#support)
- [関連](#related)

## 記事

- [Small focused modules](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328)
- [Unix philosophy and Node.js](http://blog.izs.me/post/48281998870/unix-philosophy-and-nodejs) - 一つのことを行い、それをうまく行うプログラムを書く。
- [Writing small modules](https://web.archive.org/web/20180302125059/https://substack.net/how_I_write_modules)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/) *(必読!)*
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Offline installation of npm packages](https://addyosmani.com/blog/using-npm-offline/)
- [Task automation with npm run](https://web.archive.org/web/20180302164842/http://substack.net/task_automation_with_npm_run)
- [How to use npm as a build tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
- [Install npm packages globally without sudo on macOS and Linux](https://github.com/sindresorhus/guides/blob/main/npm-global-without-sudo.md)
- [Optimizing the footprint of an npm package](https://medium.com/@goldglovecb/npm-needs-a-personal-trainer-537e0f8859c6)
- [The Art of Node](https://github.com/maxogden/art-of-node#modules) - Node.jsとnpmによるクライアントサイド開発の入門。
- [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) - 一般的なパッケージとスクリプト、およびボイラープレートプロジェクトを含むnpm scripts入門。

## ツール

### Web

- [npms](https://npms.io) - [多数の指標](https://npms.io/about)を用いてパッケージ品質を深く分析する優れたパッケージ検索。
- [NodeICO](https://nodei.co/) - パッケージバッジ。
- [Libraries.io](https://libraries.io/npm) - パッケージ発見。
- [npm-stat](http://npm-stat.com) - パッケージの統計グラフ。
- [npmgraph](http://npm.anvaka.com) - 依存関係の可視化。
- [npm trends](http://www.npmtrends.com) - 時間経過に伴うパッケージダウンロード数を比較する。
- [npm-top](https://gist.github.com/bcoe/dcc961b869bbf6685002) - ダウンロード数別のnpmユーザー。
- [npm semver calculator](http://semver.npmjs.com) - semver範囲に一致するパッケージのバージョンを視覚的に調べる。
- [ghub.io](https://ghub.io) - npmパッケージのGitHubリポジトリへリダイレクトする。
- [moiva](https://moiva.io) - パッケージを発見・比較する。
- [npmx.dev](https://npmx.dev) - npmレジストリ用の高速でモダンなビューアー。

### ブラウザー拡張機能

- [Octo-Linker](https://chrome.google.com/webstore/detail/octo-linker/jlmafbaeoofdegohdhinkhilhclaklkp) - GitHub上のnpmパッケージ間を簡単に移動するChrome拡張機能。
- [npm-hub](https://chrome.google.com/webstore/detail/npm-hub/kbbbjimdjbjclaebffknlabpogocablj) - GitHubリポジトリ上のnpm依存関係を調べるChrome拡張機能。
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - GitHub上でnpmのダウンロード統計を表示する。
- [npm-search-update](https://chrome.google.com/webstore/detail/npm-search-update/kagpoplamlmaonpddimnnigiojimihnh) - 依存関係をすばやく検索し、npmレジストリの変更を監視するChrome拡張機能。

### CLI

- [zsh-better-npm-completion](https://github.com/lukechilds/zsh-better-npm-completion) - npm向けのより良いZSH補完。
- [npkill](https://github.com/voidcosmos/npkill) - 古くて容量の大きいnode_modulesフォルダーを簡単に見つけて削除する。

## パッケージ

### 公開

- [np](https://github.com/sindresorhus/np) - より良い`npm publish`。
- [publish-please](https://github.com/inikulin/publish-please) - 安全かつ洗練された形でパッケージを公開する。
- [npm-release](https://github.com/phuu/npm-release) - 子猫でもできそうなほど簡単にnpmへのリリースを行う。
- [pkgfiles](https://github.com/timoxley/pkgfiles) - パッケージで公開されるすべてのファイルを一覧表示する。
- [release-it](https://github.com/webpro/release-it) - Gitリポジトリおよび／またはnpmパッケージのリリースを自動化する。変更履歴生成、GitHub/GitLabリリースなど。
- [semantic-release](https://github.com/semantic-release/semantic-release) - 完全自動のパッケージ公開。

### レジストリ

- [npm-name](https://github.com/sindresorhus/npm-name-cli) - パッケージ名がnpmで利用可能か確認する。
- [package-json](https://github.com/sindresorhus/package-json) - npmレジストリからパッケージのpackage.jsonを取得する。
- [latest-version](https://github.com/sindresorhus/latest-version-cli) - npmパッケージの最新バージョンを取得する。
- [npm-keyword](https://github.com/sindresorhus/npm-keyword) - 特定キーワードを持つnpmパッケージの一覧を取得する。
- [npm-user](https://github.com/sindresorhus/npm-user) - npmユーザーの情報を取得する。
- [npm-email](https://github.com/sindresorhus/npm-email) - npmユーザーのメールアドレスを取得する。
- [npm-user-packages](https://github.com/kevva/npm-user-packages-cli) - npmユーザーのパッケージを取得する。
- [dpn](https://github.com/gillstrom/dpn) - ユーザーのnpmパッケージの依存元を取得する。
- [npm-stats](https://github.com/hughsk/npm-stats) - npmレジストリからデータを取得する。
- [npm-cli-login](https://github.com/postmanlabs/npm-cli-login) - npmへログインする。
- [nrm](https://github.com/Pana/nrm) - レジストリマネージャー。
- [npm-register](https://github.com/dickeyxxx/npm-register) - npmレジストリとプロキシを簡単に設定・保守する。
- [verdaccio](https://github.com/verdaccio/verdaccio) - 軽量なプライベートnpmプロキシレジストリ。
- [cloudsmith](https://cloudsmith.io/l/npm-registry/) - パブリックおよびプライベートnpmレジストリ（その他多数）をサポートする完全管理型パッケージ管理SaaS。
- [RepoFlow](https://www.repoflow.io) - クラウドとセルフホストの両方で利用できる、シンプルで使いやすいパッケージ管理プラットフォーム。

### その他

- [npm-home](https://github.com/sindresorhus/npm-home) - パッケージのnpmページを開く。
- [gh-home](https://github.com/sindresorhus/gh-home) - パッケージのGitHubページを開く。
- [david](https://github.com/alanshaw/david) - パッケージ依存関係が古くなっていないか確認する。
- [npm-check](https://github.com/dylang/npm-check) - 古い、不正な、未使用の依存関係を確認し、対話的に更新する。
- [npm-upgrade](https://github.com/th0r/npm-upgrade) - 古いnpm依存関係を対話的に更新する。
- [npm-shrinkwrap](https://github.com/uber/npm-shrinkwrap) - 一貫性のあるshrinkwrapツール。
- [npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade) - Windows上のnpmをアップグレードする。
- [generator-nm](https://github.com/sindresorhus/generator-nm) - npmパッケージの雛形を生成する。
- [package-up](https://github.com/sindresorhus/package-up) - 最も近いpackage.jsonファイルを見つける。
- [read-package-up](https://github.com/sindresorhus/read-package-up) - 最も近いpackage.jsonファイルを読み取る。
- [normalize-package-data](https://github.com/npm/normalize-package-data) - パッケージメタデータを正規化する。
- [package-config](https://github.com/sindresorhus/package-config) - 最も近いpackage.jsonから名前空間付き設定を取得する。
- [npm-run-path](https://github.com/sindresorhus/npm-run-path) - グローバルインストール済みのものと同じように、ローカルインストール済みバイナリを名前でターミナル実行する。
- [local-npm](https://github.com/nolanlawson/local-npm) - npmを[オフライン](https://addyosmani.com/blog/using-npm-offline/)で使う。
- [npe](https://github.com/zeke/npe) - package.jsonのプロパティを調査・編集するCLI。
- [engine-deps](https://github.com/samccone/engine-deps) - Node.jsバージョン固有の依存関係を簡単に管理する。
- [enpeem-search](https://github.com/amovah/enpeem-search) - npmウェブ検索をスクレイピングしてパッケージを検索する。
- [npm-issues](https://github.com/seanzarrin/npm-issues) - すべてのパッケージの既知のissueを一度に検索する。
- [john](https://github.com/davej/john) - npm3のフラットな依存関係を見つけて並べ替えやすくする。
- [ntl](https://github.com/ruyadorno/ntl) - npmタスクを一覧・実行する対話型CLIメニュー。
- [decheck](https://github.com/egoist/decheck) - コマンドラインでnpmパッケージの依存関係を調べる。
- [shrinkpack](https://github.com/JamieMason/shrinkpack) - 依存関係を固定し、オフラインでインストールする。
- [redrun](https://github.com/coderaiser/redrun) - package.jsonのスクリプトを展開して実行速度を改善する。
- [package-size](https://github.com/egoist/package-size) - npmパッケージのバンドルサイズを取得する。
- [synp](https://github.com/imsnif/synp) - yarn.lockとpackage-lock.jsonを相互に変換する。
- [npm-run-all](https://github.com/mysticatea/npm-run-all) - 複数のnpm-scriptsを並列または直列に実行するCLIツール。
- [onchange](https://github.com/Qard/onchange) - ファイルやフォルダーを監視し、変更時にコマンドを実行する。
- [cli-error-notifier](https://github.com/micromata/cli-error-notifier) - npmスクリプトが失敗したときにネイティブデスクトップ通知を送る。
- [luna](https://github.com/rvpanoz/luna) - npm依存関係を管理するアプリ。
- [emma-cli](https://github.com/maticzav/emma-cli) - 対話型CLIパッケージ検索ユーティリティ。
- [lockfile-lint](https://github.com/lirantal/lockfile-lint) - 悪意あるパッケージ注入と安全でないlockfileリソースを軽減するため、セキュリティと信頼ポリシーを改善するlockfileをlintする。

## クライアント

- [yarn](https://github.com/yarnpkg/yarn) - 高速で信頼性が高く安全な依存関係管理。
- [npm](https://github.com/npm/cli) - 公式クライアント。
- [pnpm](https://github.com/pnpm/pnpm) - 高速でディスク容量効率のよいパッケージマネージャー。

## ヒント

### npmを最新バージョンへ更新する

```
$ npm install --global npm
```

*[Windowsユーザーは詳細を参照。](https://github.com/felixrieseberg/npm-windows-upgrade)*

### コマンドエイリアス

- `npm i ` → `npm install`
- `npm i -D` → `npm install --save-dev`
- `npm t` → `npm test`
- `npm it` → `npm install && npm test`
- `npm r` → `npm uninstall`
- `npm un` → `npm uninstall`
- `npm up` → `npm update`

### シェルエイリアス

よく使うnpmタスクを高速化します。

`.zshrc`/`.bashrc`内:

```sh
alias ni='npm install'
alias nid='npm install --save-dev'
alias nig='npm install --global'
alias nt='npm test'
alias nit='npm install && npm test'
alias nk='npm link'
alias nr='npm run'
alias ns='npm start'
alias nf='npm cache clean && rm -rf node_modules && npm install'
alias nlg='npm list --global --depth=0'
```

### インストール時にpackage.jsonへ追加しない

デフォルトではnpmはインストールしたパッケージをpackage.jsonの`dependencies`フィールドへ追加します（v5以降）。`--no-save`フラグを指定すると防げます。パッケージを`devDependencies`へ追加するには`--save-dev`/`-D`を使えます:

```
$ npm install --save-dev ava
```

### スクリプトを実行する

package.jsonの`"scripts"`フィールドへ追加して`npm run <script-name>`を実行すれば、npmで簡単に[スクリプトを実行](https://docs.npmjs.com/cli/run-script)できます。利用可能なスクリプトを確認するには`npm run`を実行します。ローカルインストール済みパッケージのバイナリは[PATH](https://en.wikipedia.org/wiki/PATH_(variable))で利用できるため、名前で実行できます。

```json
{
	"name": "awesome-package",
	"scripts": {
		"cat": "cat-names"
	},
	"dependencies": {
		"cat-names": "^1.0.0"
	}
}
```

```
$ npm run cat
Max
```

すべてのpackage.jsonプロパティは、環境変数として[公開](https://docs.npmjs.com/misc/scripts#packagejson-vars)されます:

```json
{
	"name": "awesome-package",
	"scripts": {
		"name": "echo $npm_package_name"
	}
}
```

```
$ npm run name
awesome-package
```

#### コマンドへオプションを渡す

以下の例のように`-- --flag`を追加すると、npmスクリプトで使うコマンドへオプションを渡せます。`--`は[オプション解析の終端を示す](https://unix.stackexchange.com/questions/11376/what-does-double-dash-mean-also-known-as-bare-double-dash)ため、`npm run`はこれを無視してコマンドへ渡します。

```json
{
	"name": "awesome-package",
	"scripts": {
		"xo": "xo",
		"xo:fix": "npm run xo -- --fix",
	}
}
```

*`-- --fix `オプションの追加は、`xo --fix`の実行に相当します。*

#### Silentオプション

`npm run`には、npmスクリプトを組み合わせる際に特に便利な`--silent`オプションがあります。

次のようにJavaScriptファイルをlintする設定をしているとします:

```json
{
	"name": "awesome-package",
	"scripts": {
		"xo": "xo",
		"xo:fix": "npm run xo --silent -- --fix",
	}
}
```

*`--silent`オプションを使うとターミナル出力を減らせます。[比較](https://twitter.com/mkuehnel/status/957965749473210369)を参照してください。*

### ライフサイクルスクリプト

npmには、package.jsonで定義されると特定の条件で実行される、あらかじめ定義済みの[ライフサイクルスクリプト](https://docs.npmjs.com/misc/scripts)があります。

```json
{
	"name": "awesome-package",
	"scripts": {
		"prepublishOnly": "nsp check"
	},
	"devDependencies": {
		"nsp": "^3.0.0"
	}
}
```

これは、依存関係に既知の脆弱性がないか確認するため、`npm publish`でnpmパッケージをレジストリへ公開する前に自動実行されます。

*注: **prepublishOnly**はnpm v4.0.0以降で利用できます。[npmドキュメント](https://docs.npmjs.com/misc/scripts#deprecation-note)を参照してください。*

#### `npm start`と`npm test`

`npm start`と`npm test`もライフサイクルスクリプトですが、自動実行はされません。

```json
{
	"name": "awesome-package",
	"scripts": {
		"start": "node server.js",
		"test": "ava"
	},
	"devDependencies": {
		"ava": "^1.0.0"
	}
}
```

したがって、次のように簡単に実行できます:

```console
$ npm test
$ npm start
```

#### `pre`および`post`スクリプト

これらは、スクリプトを順に自動実行するために使用できる特別なライフサイクルスクリプトです。

```json
{
	"name": "awesome-package",
	"scripts": {
		"pretest": "eslint .",
		"test": "ava"
	},
	"devDependencies": {
		"eslint": "^4.19.0",
		"ava": "^1.0.0"
	}
}
```

```console
$ npm test
```

これはテスト実行前にファイルをlintします。lintが失敗するとテストは実行されません。より一般的には、順に実行されるいずれかのスクリプトが0以外の終了コードで終了すると、その後のスクリプトは実行されません。

*注: `pre`と`post`スクリプトはカスタムnpmスクリプトにも使えます。そのため、定義されていれば`npm run foo`は`prefoo`と`postfoo`も実行します。*

### `npx`でスクリプトを実行する

`npm`には、パッケージバイナリを実行するツール`npx`が[v5.2.0以降同梱](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)されています。各コマンドはローカルの`node_modules/.bin`ディレクトリまたは中央キャッシュから実行され、`<command>`の実行に必要なパッケージはインストールされます。

```json
{
	"name": "awesome-package",
	"dependencies": {
		"cat-names": "^1.0.0"
	}
}
```

バイナリがすでにインストール済みなら、`node_modules/.bin`から実行されます。

```
$ npx cat-names
Max
```

バイナリがなければ、先にインストールされます。

```
$ npx dog-names
npx: installed 46 in 3.136s
Bentley
```

### 異なるNode.jsバージョンでコマンドを実行する

`npx`（npm v5.2.0以降に同梱）と[`node-bin`](https://www.npmjs.com/package/node-bin)パッケージを使うと、[`nvm`](http://nvm.sh)、[`nave`](https://github.com/isaacs/nave)、[`n`](https://github.com/tj/n)のようなバージョンマネージャーを使わずに、異なるNode.jsバージョンでコードを簡単に試せます。

```
$ npx --package=node-bin@6.11.0 -- node --version
v6.11.0
```

### ローカルパッケージをリンクする

パッケージのローカル版を依存関係として使うと便利な場合があります。`npm link`を使うと、あるローカルパッケージを別のパッケージへリンクできます。使用したいパッケージで`npm link`を実行するとグローバル参照が作成されます。次に元のパッケージへ移動し、`npm link <package-name>`を実行して他方のパッケージをリンクします。

```
$ cd rainbow
$ npm link
$ cd ../unicorn
$ npm link rainbow
```

これで`rainbow`を`unicorn`パッケージ内の依存関係として使用できます。

### GitHubからパッケージをインストールする

npmはGitHubリポジトリから直接パッケージをインストールする短縮表記をサポートします:

```
$ npm install sindresorhus/chalk
```

mainブランチは変動するため、特定のコミットを指定します:

```
$ npm install 'sindresorhus/chalk#51b8f32'
```

コミットSHA、ブランチ、タグ、または何も指定しないことができます。

semverを使ってGit依存関係をインストールすることもできます: *(npm v5以降が必要)*

```
$ npm install 'sindresorhus/chalk#semver:^2.0.0'
```

### パッケージの特定バージョンをインストールする

```
$ npm install chalk@1.0.0
```


### 最上位にインストールされたパッケージとバージョンを一覧表示する

```
$ npm ls --depth=0
```

### コマンドのヘルプ

コマンドのヘルプドキュメントを取得します:

```
$ npm help <command>
```

例:

```
$ npm help install
```

### パッケージのスタンドアロン版

Browserify化されブラウザーで利用できるパッケージのスタンドアロン版を素早く取得します。

```
https://wzrd.in/standalone/<package-name>[@<version>]
```

例:

- <https://wzrd.in/standalone/object-assign>
- <https://wzrd.in/standalone/object-assign@4.0.0>

プロトタイピングには最適ですが、本番ではファイルをダウンロードするかBrowserifyを自分で使ってください。

## FAQ

- [node_modulesとshrinkwrapのどちらをチェックインすべきか](http://stackoverflow.com/questions/11459733/check-in-node-modules-vs-shrinkwrap)
- [Bowerとnpmの違いは何か](http://stackoverflow.com/questions/18641899/what-is-the-difference-between-bower-and-npm)
- [package.jsonのバージョニングで`^`は何を意味するか](http://stackoverflow.com/questions/22137778/what-does-mean-in-package-json-versioning)
- [インストール済みnpmパッケージのバージョンを見つける](http://stackoverflow.com/questions/10972176/find-the-version-of-an-installed-npm-package)
- [package.jsonにおけるdependencies、devDependencies、peerDependenciesの違いは何か](http://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies)

## コミュニティ

- [`#npm` on Freenode](http://webchat.freenode.net/?channels=npm)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/npm)
- [Reddit](https://www.reddit.com/r/npm)
- [Twitter](https://twitter.com/npmjs)
- [Blog](https://blog.npmjs.org)

## ドキュメント

- [Official](https://docs.npmjs.com)
- [Troubleshooting](https://github.com/npm/npm/wiki/Troubleshooting)
- [Semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning)
- [Fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)
- [package.json](https://docs.npmjs.com/files/package.json)
- [npm run script](https://docs.npmjs.com/cli/run-script)
- [Stats API](https://github.com/npm/download-counts)

## サポート

- [npm.community](https://npm.community/c/support)
- [Twitter](https://twitter.com/npm_support)
- [Contact form](https://www.npmjs.com/support)

## 関連

- [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs)
