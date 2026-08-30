---
title: "standard/awesome-standard"
description: "standard/awesome-standard の正規スナップショット"
licenseSource: "github-standard-awesome-standard-readme-md"
---

# Awesome Standard [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

急増する [`standard`](https://github.com/feross/standard) エコシステムのパッケージを記録します！

## standard

- **[standard](https://www.npmjs.com/package/standard)** - JavaScript Standard Style。すべてを統べる一つのスタイル！

## 利用統計

- **[standard を使う npm パッケージ（完全版）](https://github.com/feross/standard-packages/blob/master/all.json)** - `standard` を使うパッケージの一覧
- **[standard のダウンロードグラフ（npm-stat.com）](http://npm-stat.com/charts.html?package=standard&author=&from=&to=)** - npm レジストリのダウンロード数
- **[上位 npm パッケージ（Gist）](https://gist.github.com/feross/e0882df2fe673d6ce064)** - standard は npm の上位パッケージの一つ

## standard が使うパッケージ

- **[eslint](https://www.npmjs.com/package/eslint)** - AST ベースの JavaScript パターン検査ツール
- **[standard-engine](https://www.npmjs.com/package/standard-engine)** - standard の中核を再利用可能なパッケージとして抽出。独自ツールを構築できます！
- **[eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)** - 共有設定としての standard ESLint ルール
- **[eslint-config-standard-jsx](https://www.npmjs.com/package/eslint-config-standard-jsx)** - JSX 向け standard ESLint ルール
- **[eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard)** - standard のカスタム ESLint ルール（ESLint コアには含まれません）

## 自動コードフォーマッター

- `standard --fix` - `standard` には自動整形が組み込まれています！
- **[prettier-standard](https://www.npmjs.com/package/prettier-standard)** - standard ルール向けに設定した [prettier](https://github.com/prettier/prettier) で整形
- **[「Unix コマンド」の Gist](https://gist.github.com/watson/453fc63cace521fcdadc)** - Node リポジトリを standard 準拠にするための検索・置換 Unix コマンド集

## エディタープラグイン

- 主要なテキストエディターにはすべて、`standard` のプラグインまたは組み込み対応があります。対応エディターの[完全版リスト](https://github.com/standard/standard#are-there-text-editor-plugins)をご覧ください。
- Atom：**[linter-js-standard](https://atom.io/packages/linter-js-standard)** - Linter
- Atom：**[linter-js-standard-engine](https://atom.io/packages/linter-js-standard-engine)** - Linter
- Atom：**[standard-formatter](https://atom.io/packages/standard-formatter)** - 自動修正
- Atom：**[standardjs-snippets](https://atom.io/packages/standardjs-snippets)** - コードスニペット
- Brackets：**[brackets-standard](https://github.com/ishamf/brackets-standard/)** - Linter
- Emacs：[README](https://github.com/standard/standard#emacs)を参照
- Sublime Text：**[SublimeLinter-contrib-standard](https://packagecontrol.io/packages/SublimeLinter-contrib-standard)** - Linter
- Sublime Text：**[StandardFormat](https://packagecontrol.io/packages/StandardFormat)** - 自動修正
- Visual Studio Code：**[vscode-standard](https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard)** - Linter と自動修正
- Vim：[README](https://github.com/standard/standard#vim)を参照
- Visual Studio Code：**[vscode-standardjs-snippets](https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets)** - コードスニペット
- Visual Studio Code：**[vscode-react-standard](https://marketplace.visualstudio.com/items?itemName=TimonVS.ReactSnippetsStandard)** - コードスニペット
- WebStorm（PhpStorm、IntelliJ、RubyMine、JetBrains など）：組み込み対応。[README](https://github.com/standard/standard#webstorm-phpstorm-intellij-rubymine-jetbrains-etc)を参照

## 見やすいターミナル出力（Reporter）

- **[snazzy](https://www.npmjs.com/package/snazzy)** - JavaScript Standard Style を Stylish（つまり見栄えのよい）出力として整形
- **[standard-tap](https://www.npmjs.com/package/standard-tap)** - JavaScript Standard Style を TAP 出力として整形
- **[standard-json](https://www.npmjs.com/package/standard-json)** - JavaScript Standard Style の出力を JSON 配列に整形
- **[standard-reporter](https://www.npmjs.com/package/standard-reporter)** - Unix パイプ経由で使う feross/standard 向け Reporter。多数の選択肢を提供
- **[standard-summary](https://www.npmjs.com/package/standard-summary)** - 出力を件数順のエラー一覧として表示

## ビルドツール

- **[grunt-standard](https://www.npmjs.com/package/grunt-standard)** - standard 向け Grunt プラグイン
- **[gulp-standard](https://www.npmjs.com/package/gulp-standard)** - standard 向け Gulp プラグイン
- **[mocha-standard](https://www.npmjs.com/package/mocha-standard)** - Mocha テストへ standard を統合
- **[standard-loader](https://www.npmjs.com/package/standard-loader)** - Webpack ビルドを standard で検査
- **[docker-standard](https://hub.docker.com/r/geniousphp/standard-js/)** - JavaScript ファイルを簡単かつ高速に検査・報告する StandardJS Docker イメージ。Docker ベースのビルドシステムに便利です。
- **[rollup-plugin-standard](https://www.npmjs.com/package/rollup-plugin-standard)** - Rollup ビルドを Standard で検査

## コード・プロジェクト生成器

- **[generator-babel-standard](https://www.npmjs.com/package/generator-babel-standard)** - Babel と standard を使う新規パッケージ向け Yeoman Generator
- **[generate-swap-project](https://www.npmjs.com/package/generate-swap-project)** - ESNext + StandardJS + Mocha 対応の Node.js プロジェクトを数秒で生成！
- **[generate-swap-generator](https://www.npmjs.com/package/generate-swap-generator)** ESNext + StandardJS + Mocha 対応の独自 Node.js Generator を数秒で生成！

# `standard` に着想を得たもの

- **[standard-markdown](https://www.npmjs.com/package/standard-markdown)** - Markdown ファイル内のすべての JavaScript コードブロックを検査
- **[stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard)** - stylelint 向けの共有可能な standard 設定。
- **[standard-sass](https://www.npmjs.com/package/standard-sass)** - Sass、SCSS、CSS の Standard Style。すべてを統べる一つのスタイル！
- **[wemake-frontend-styleguide](https://github.com/wemake-services/wemake-frontend-styleguide)** - standard ツールを基にした JavaScript、TypeScript、Vue、JSDoc、SCSS のスタイルガイド。非常に厳格です！

## フォーク

- **[semistandard](https://www.npmjs.com/package/semistandard)** - セミコロン付き standard
- **[uber-standard](https://www.npmjs.com/package/uber-standard)** - [Uber](https://www.uber.com/) チームによるフォーク
- **[videojs-standard](https://www.npmjs.com/package/videojs-standard)** - [video.js](https://github.com/videojs/video.js) チームによるフォーク
- **[yodlr-standard](https://www.npmjs.com/package/yodlr-standard)** - [yodlr](https://getyodlr.com/home) チームによるフォーク
- **[happiness](https://www.npmjs.com/package/happiness)** - @JedWatson を幸せにするようカスタマイズされた standard
- **[doublestandard](https://www.npmjs.com/package/doublestandard)** - さらに多くのセミコロンを使う standard
- **[xo](https://www.npmjs.com/package/xo)** - 「JavaScript happiness style」
- **[jsw](https://www.npmjs.com/package/jsw)** - 「仕様がセミコロンを気にしないなら、あなたも気にしなくてよい」
- **[obama](https://www.npmjs.com/package/obama)** - Obama とともに前進し、標準化
- **[aStandard](https://npmjs.com/package/a-standard)** - Babel と ES7 向けの、より厳格な standard
- **[standard-own](https://npmjs.com/package/standard-own)** - カスタマイズと個別ルールを増やした standard。
- **[standard-focus](https://www.npmjs.com/package/standard-focus)** - 一度に一つのエラーへ集中。
- **[standa](https://www.npmjs.com/package/standa)** JSX ルールのない standard。

PR を歓迎します！

## ライセンス

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲において、[Feross Aboukhadijeh](http://feross.org) はこの作品に関するすべての著作権および関連する権利、隣接権を放棄しています。
