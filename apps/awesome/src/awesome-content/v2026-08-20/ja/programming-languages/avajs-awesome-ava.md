---
title: "avajs/awesome-ava"
description: "avajs/awesome-ava の定本スナップショット"
licenseSource: "github-avajs-awesome-ava-readme-md"
---

# Awesome AVA [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [<img src="https://github.com/avajs/ava/raw/main/media/header.png" width="280" align="right" alt="AVA">](https://avajs.dev)

> [AVA](https://avajs.dev) は、最小限で未来志向の JavaScript テストランナーです

## 目次

- [記事](#articles)
- [動画](#videos)
- [パッケージ](#packages)
- [AVA と連携](#works-with-ava)
- [チュートリアル](#tutorials)
- [その他](#miscellaneous)
- [サポート](#support)

## 記事

- [Recipes](https://github.com/avajs/ava/tree/main/docs/recipes)
- [Testing React Native apps with AVA](https://shift.infinite.red/testing-the-bejeezus-out-of-react-native-apps-with-ava-330f51f8f6c3)
- [Getting Started with Create React App and AVA](https://semaphoreci.com/community/tutorials/getting-started-with-create-react-app-and-ava)
- [Effortless unit testing with AVA](https://wecodetheweb.com/2016/04/19/effortless-unit-testing-with-ava/)

## 動画

- [JavaScript Air episode with the AVA team](http://jsair.io/ava)
- [Testing React components with AVA](https://www.youtube.com/watch?v=RxLW6-3dk5A)

## パッケージ

- [eslint-plugin-ava](https://github.com/avajs/eslint-plugin-ava) - ESLint ルール。
- [ava-codemods](https://github.com/jamestalmage/ava-codemods) - 新しいバージョンへのアップグレードを簡素化する Codemod。
- [sublime-ava](https://github.com/avajs/sublime-ava) - Sublime 向けスニペット。
- [atom-ava](https://github.com/avajs/atom-ava) - Atom 向けスニペット。
- [vscode-ava](https://github.com/samverschueren/vscode-ava) - Visual Studio Code 向けスニペット。
- [vim-ava-snippets](https://github.com/ahmedelgabri/vim-ava-snippets) - Vim 向けスニペット。
- [redux-ava](https://github.com/sotojuan/redux-ava) - Redux 向けテストヘルパー。
- [redux-test-recorder](https://github.com/conorhastings/redux-test-recorder) - React アプリ内の Redux reducer 向け AVA テストを生成します。
- [gulp-ava](https://github.com/avajs/gulp-ava) - Gulp でテストを実行します。
- [grunt-ava](https://github.com/avajs/grunt-ava) - Grunt でテストを実行します。
- [fly-ava](https://github.com/pine/fly-ava) - Fly でテストを実行します。
- [start-ava](https://github.com/start-runner/ava) - Start でテストを実行します。
- [sigh-ava](https://github.com/unlight/sigh-ava) - Sigh でテストを実行します。
- [eslint-ava-rule-tester](https://github.com/jfmengels/eslint-ava-rule-tester) - AVA で [ESLint](https://github.com/eslint/eslint) プラグインをテストします。
- [jscodeshift-ava-tester](https://github.com/jfmengels/jscodeshift-ava-tester) - AVA で [jscodeshift](https://github.com/facebook/jscodeshift) Codemod をテストします。
- [ava-preact-init](https://github.com/avajs/ava-preact-init) - Preact 向けに AVA をセットアップします。
- [ava-fixture](https://github.com/unional/ava-fixture) - fixture／baseline テストを実行します。
- [ava-fast-check](https://github.com/dubzzz/ava-fast-check) - プロパティベーステスト。
- [ava-fixture-docker-db](https://github.com/cdaringe/ava-fixture-docker-db) - テストコンテキストへ docker データベースを追加します。
- [ava-webcomponents](https://github.com/Wildhoney/ava-webcomponents) - Puppeteer 経由でウェブコンポーネントをテストします。
- [ava-tap-json](https://github.com/yovasx2/ava-tap-json) - AVA 互換の JSON 出力。
- [ava-typescript-worker](https://github.com/seamapi/ava-typescript-worker) - 共有 worker で TypeScript を使用します。
- [ava-postgres](https://github.com/seamapi/ava-postgres) - テストごとに新しい Postgres データベースを取得します。
- [pava](https://github.com/TomerAberbach/pava) - パラメーター化テスト。

## AVA と連携

- [Spectron](https://github.com/electron/spectron#with-ava) - AVA と ChromeDriver を使って Electron アプリをテストします。
- [Chūhai](https://github.com/Hypercubed/chuhai) - AVA と benchmark.js を使ってベンチマークを実行・検証します。
- [Leakage](https://github.com/andywer/leakage#usage-with-ava--tape) - メモリーリークテスト。
- [pify](https://github.com/sindresorhus/pify) - より良いテストのためにコールバック形式の関数を Promise 化します。[(Example)](https://github.com/sindresorhus/registry-url/blob/eb1f0e01722208366c9199b96235fd043ec162ae/test.js#L6)
- [p-event](https://github.com/sindresorhus/p-event) - イベントを Promise 化します。[(Example)](https://github.com/sindresorhus/gulp-debug/blob/4db5871594742a346d17aa9b34f43c87d4e54934/test.js#L42-L44)
- [execa](https://github.com/sindresorhus/execa) - CLI ツールをテストします。[(Example)](https://github.com/sindresorhus/active-win-cli/blob/d01813762b304102d1fee147855481e9f38c8517/test.js#L5-L6)
- [delay](https://github.com/sindresorhus/delay) - テストに遅延を追加します。[(Example)](https://github.com/sindresorhus/p-queue/blob/a3a5cadefc2b54269f4939bb34e8dc180c3bd800/test.js#L39)
- [get-stream](https://github.com/sindresorhus/get-stream) - ストリームの出力をテストします。[(Example)](https://github.com/sindresorhus/ora/blob/4ceeedd51795bb88a8033229d198e70cd8a2aff7/test.js#L33-L35)
- [create-test-server](https://github.com/lukechilds/create-test-server) - テスト向けの最小限の Express サーバーを作成します。[(Example)](https://github.com/lukechilds/clone-response/blob/11f5870e4e1b039e2d9a8f1f72d45fd1b9706bf3/test/clone-response.js)

## チュートリアル

- [Testing a React & Redux Codebase](http://silvenon.com/testing-react-and-redux/) - AVA を使う React と Redux プロジェクトのテストに関する包括的なチュートリアルシリーズ。

## その他

- [Stickers, t-shirts, etc](https://www.redbubble.com/people/sindresorhus/works/30330590-ava-logo) - 製品は一切の上乗せなしで原価販売されます。
- [Slides from AVA talk at London Node User Group](https://speakerdeck.com/novemberborn/ava-at-lnug) - コアチームメンバーの [Mark Wubben](https://github.com/novemberborn) によるもの。

## サポート

- [Github Discussions](https://github.com/avajs/ava/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/ava)
- [Twitter](https://twitter.com/ava__js)
