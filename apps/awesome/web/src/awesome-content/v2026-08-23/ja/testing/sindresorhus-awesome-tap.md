---
title: "Awesome TAP"
description: "TAPを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-sindresorhus-awesome-tap-readme-md"
---

# Awesome TAP

TAPを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [レポーター](#reporters)
- [プロデューサー](#producers)
- [コンシューマー](#consumers)
- [ツール](#tools)
- [記事](#articles)
- [チュートリアル](#tutorials)
- [ドキュメント](#documentation)
- [コミュニティ](#community)

## レポーター

### JavaScript

- [tap-dot](https://github.com/scottcorgan/tap-dot) - ドット形式の出力。
- [tap-spec](https://github.com/scottcorgan/tap-spec) - Mocha 風の spec レポーター。
- [tap-nyan](https://github.com/calvinmetcalf/tap-nyan) - Nyan cat。
- [tap-min](https://github.com/derhuerst/tap-min) - 最小限の出力。
- [tap-difflet](https://github.com/namuol/tap-difflet) - 差分表示を備えた最小限の出力。
- [tap-diff](https://github.com/axross/tap-diff) - 差分表示を備えた人間にわかりやすい出力。
- [tap-simple](https://github.com/joeybaker/tap-simple) - シンプルな出力。
- [faucet](https://github.com/substack/faucet) - 人間が読める要約ツール。
- [tap-mocha-reporter](https://github.com/isaacs/tap-mocha-reporter) - 任意の [Mocha reporters](https://github.com/isaacs/tap-mocha-reporter/tree/master/lib/reporters) を使用できます。
- [tap-summary](https://github.com/zoubin/tap-summary) - 要約された出力。
- [tap-pessimist](https://github.com/clux/tap-pessimist) - 失敗したテストのみを表示します。
- [tap-prettify](https://github.com/toolness/tap-prettify) - 差分表示を備えた見やすい出力。
- [tap-colorize](https://github.com/substack/tap-colorize) - 機械可読性を維持しながら出力を色付けします。
- [tap-bail](https://github.com/juliangruber/tap-bail) - 最初のテストが失敗した時点で中止します。
- [tap-notify](https://github.com/axross/tap-notify) - macOS、Linux、Windows 向けの通知ツール。
- [tap-json](https://github.com/gummesson/tap-json) - JSON 出力。
- [ava-tap-json](https://github.com/yovasx2/ava-tap-json) - AVA 互換の JSON 出力。
- [tap-xunit](https://github.com/aghassemi/tap-xunit) - xUnit 出力。
- [tap-teamcity](https://github.com/smockle/tap-teamcity) - TeamCity 向けの出力。

### Go

- [tapfmt](https://github.com/coreybutler/tapfmt) - スタンドアロンのクロスプラットフォームフォーマッター。

## プロデューサー

TAP 出力を生成するもの。

### JavaScript

- [AVA](https://github.com/sindresorhus/ava) - 未来志向のテストランナー（`$ ava --tap`）。
- [tap](https://github.com/isaacs/node-tap) - Node.js 向けの TAP テストフレームワーク。
- [tape](https://github.com/substack/tape) - Node.js とブラウザー向けの TAP を生成するテストハーネス。
- [ESLint](https://eslint.org/docs/user-guide/formatters/#tap) - プラグイン可能な JavaScript リンター（`$ eslint --format=tap`）。
- [Mocha](https://mochajs.org) - Node.js とブラウザー向けの機能豊富なテストフレームワーク（`$ mocha reporter=tap`）。
- [qunit-tap](https://github.com/twada/qunit-tap) - QUnit 向けの TAP 出力。
- [jasmine-reporters](https://github.com/larrymyers/jasmine-reporters) - Jasmine 向けの TAP 出力。
- [karma-tap-reporter](https://github.com/fumiakiy/karma-tap-reporter) - Karma 向けの TAP 出力。
- [mos](https://github.com/zkochan/mos) - Markdown ファイル生成・テストツール（`$ mos test --tap`）。
- [zora](https://github.com/lorenzofox3/zora) - Babel を用いず ES2015 で動作する TAP 生成テストランナー。
- [node:test](https://nodejs.org/api/test.html) - Node.js に含まれる最小限の TAP テストランナー。

### Swift

- [TAP](https://github.com/swiftdocorg/tap) - Test Anything Protocol（v13）向けの Swift パッケージ。

### Fish

- [Fishtape](https://github.com/fisherman/fishtape) - fish 向けの TAP プロデューサー兼テストハーネス。

### Bash

- [bats](https://github.com/sstephenson/bats) - Bash Automated Testing System。
- [ShellSpec](https://github.com/shellspec/shellspec) - POSIX シェル向けのフル機能 BDD ユニットテストフレームワーク。

[More…](https://testanything.org/producers.html)

## コンシューマー

TAP 出力を消費するもの。

### JavaScript

- [tap-parser](https://github.com/substack/tap-parser) - TAP パーサー。
- [tap-out](https://github.com/scottcorgan/tap-out) - TAP パーサー。
- [yamlish](https://github.com/isaacs/yamlish) - YAML ブロックパーサー。

[More…](https://testanything.org/consumers.html)

## ツール

### JavaScript

- [tap-dev-tool](https://github.com/Jam3/tap-dev-tool) - ブラウザーコンソール内の TAP を見やすく整形します。
- [tap-merge](https://github.com/anko/tap-merge) - 複数の TAP ストリームをマージします。
- [smokestack](https://github.com/hughsk/smokestack) - ブラウザー内で TAP テストを実行し、出力を `stdout` に書き込みます。
- [chutney](https://github.com/derhuerst/chutney) - Sauce Labs で TAP テストを実行します。軽量な [smokestack](https://github.com/hughsk/smokestack) の代替品。

### Python

- [tappy](https://github.com/mblayman/tappy) - TAP を扱うためのツール。

## 記事

- [Understand the Test Anything Protocol](https://www.effectiveperlprogramming.com/2011/05/understand-the-test-anything-protocol/)

## チュートリアル

- [test-anything](https://github.com/finnp/test-anything) - インタラクティブなワークショップを通じて、TAP を使ったあらゆるテストを学びます。

## ドキュメント

- [Specification](https://testanything.org/tap-version-13-specification.html)
- [Wikipedia](https://en.wikipedia.org/wiki/Test_Anything_Protocol)

## コミュニティ

- [Discuss](https://github.com/TestAnything/Specification/issues)
- [Reddit](https://www.reddit.com/r/testanythingprotocol)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/tap)
