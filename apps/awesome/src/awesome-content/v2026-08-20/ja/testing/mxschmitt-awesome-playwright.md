---
title: "mxschmitt/awesome-playwright"
description: "mxschmitt/awesome-playwright の正規スナップショット"
licenseSource: "github-mxschmitt-awesome-playwright-readme-md"
---

# Awesome Playwright [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Playwright を使う優れたツール、ユーティリティ、プロジェクトのキュレーション済みリスト。

[Playwright](https://github.com/microsoft/playwright)は Web テスト・自動化のフレームワークです。単一 API で Chromium、Firefox、WebKit をテストできます。Node.js、Python、.NET、Java で利用できます。

## 目次

- [統合](#integrations)
- [言語サポート](#language-support)
- [ユーティリティ](#utils)
- [スクレイピング・自動化](#scraping--automation)
- [AI・エージェント](#ai--agents)
- [レポーター](#reporters)
- [ショーケース](#showcases)
- [ガイド](#guides)
- [コントリビュート](#contribute)

## 統合

- [@appetize/Playwright](https://docs.appetize.io/testing) - Playwright Test Runner を使い、[Appetize](https://www.appetize.io)の仮想デバイスで Web・ネイティブアプリのモバイルテストを実行。
- [appwright](https://www.npmjs.com/package/appwright) - Playwright Test Runner で Appium を使うモバイルテスト。
- [artillery-engine-playwright](https://github.com/artilleryio/artillery/tree/main/packages/artillery-engine-playwright) - Playwright による負荷テスト。
- [@axe-core/Playwright](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md) - Playwright と Axe の公式統合。
- [axe-playwright](https://github.com/abhinaba-ghosh/axe-playwright) - Playwright と Axe の非公式統合。
- [Chromium for Serverless platforms](https://github.com/Sparticuz/chromium?tab=readme-ov-file#usage-with-playwright) - サーバーレスプラットフォームで Playwright 用に使うビルド済み Chromium バイナリー。
- [CodeceptJS](https://github.com/Codeception/CodeceptJS) - Node.js 向けの強化されたエンドツーエンドテストフレームワーク。
- [cucumber-playwright](https://github.com/Tallyb/cucumber-playwright) - TypeScript を使い、Playwright と Cucumber に基づく E2E テストを書くスターターリポジトリ。
- [@guidepup/Playwright](https://github.com/guidepup/guidepup-playwright) - Playwright 向け VoiceOver・NVDA スクリーンリーダードライバー統合。
- [Happo](https://docs.happo.io/docs/playwright) - 予期しない視覚・アクセシビリティ変更と UI バグを検出。
- [Playwright Angular Schematic](https://github.com/playwright-community/playwright-ng-schematics) - Angular プロジェクトに Playwright Test を追加。
- [playwright-bdd](https://github.com/vitalets/playwright-bdd) - Playwright runner と CucumberJS による BDD テスト。
- [Playwright CRX](https://github.com/ruifigueira/playwright-crx) - Chrome 拡張としての Playwright codegen。[Chrome Web Store](https://chromewebstore.google.com/detail/playwright-crx/jambeljnbnfbkcpnoiaedcabbgmnnlcd)で利用可能。
- [playwright-graphql](https://www.npmjs.com/package/playwright-graphql?activeTab=readme) - Playwright API テスト用の型安全な GraphQL クライアントとフィクスチャを生成。スキーマ・操作生成 CLI と任意のカバレッジ報告を備えます。
- [playwright-pytest](https://github.com/microsoft/playwright-pytest/) - フィクスチャで Playwright ページを使う公式 Pytest プラグイン。
- [Serenity/JS](https://serenity-js.org) - [Screenplay Pattern](https://serenity-js.org/handbook/design/screenplay-pattern/)を実装する、Playwright 向け受け入れテスト、レポート、テスト統合フレームワーク。

## 言語サポート

- [Playwright](https://git.io/JT2bj) - Node.js（JavaScript・TypeScript）向け公式 Playwright。
- [playwright-dotnet](https://github.com/microsoft/playwright-dotnet) - .NET 向け公式 Playwright ポート。
- [playwright-java](https://github.com/microsoft/playwright-java) - Java 向け公式 Playwright ポート。
- [playwright-python](https://github.com/microsoft/playwright-python) - Python 向け公式 Playwright ポート。
- [playwright-go](https://github.com/playwright-community/playwright-go) - Golang 向け Playwright ポート。
- [playwright-perl](https://github.com/teodesian/playwright-perl) - Perl 向け Playwright ポート。
- [playwright-php](https://github.com/playwright-php/playwright) - PHP 向け Playwright ポート。
- [playwright-ruby-client](https://github.com/YusukeIwaki/playwright-ruby-client) - Ruby 向け Playwright ポート。
- [playwright-rust](https://github.com/padamson/playwright-rust) - Rust 向け Playwright ポート。

## ユーティリティ

- [@bgotink/playwright-coverage](https://github.com/bgotink/playwright-coverage) - インストルメンテーション不要で、v8 coverage を使って Playwright テストのカバレッジを報告。
- [BrowserClaw](https://github.com/idan-rubin/browserclaw) - Playwright 上に構築された、アクセシビリティスナップショットと参照ターゲティングによる AI ブラウザー自動化。
- [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright) - Playwright テストのための ESLint プラグイン。
- [@global-cache/Playwright](https://github.com/vitalets/global-cache) - 並行ワーカーとテスト実行間でデータを共有するキーバリューキャッシュ。
- [Heroshot](https://github.com/omachala/heroshot) - ドキュメントのスクリーンショット自動化。視覚的ピッカーで画像を定義し、1コマンドですべて再生成。
- [Libretto](https://github.com/saffron-health/libretto) - コーディングエージェントがページ検査、ネットワークトラフィックの取得、自動化スクリプト生成を行うための、オープンソース Playwright ベースツールキット・CLI。
- [Moon](https://github.com/aerokube/moon) - Kubernetes クラスターで Playwright テストを並列実行するツール。
- [nextcov](https://github.com/stevez/nextcov) - Playwright でテストされた Next.js アプリ向け V8 コードカバレッジ収集・統合。単体、コンポーネント、統合カバレッジを一つのレポートに統一。
- [octomind.dev](https://octomind.dev) - AI 支援テストケース発見により自動生成・実行・保守。
- [playwright-best-practices-skill](https://github.com/currents-dev/playwright-best-practices-skill) - エージェントを Playwright テストの作成、デバッグ、保守の専門家にする AI Skill。
- [Playwright-cleanup](https://www.npmjs.com/package/playwright-cleanup) - テスト環境の変更を取り消し、テストクリーンアップを簡素化するツール。
- [playwright-elements](https://danteukraine.github.io/playwright-elements) - ページオブジェクトの定型を減らす、再利用可能で連鎖可能なコンポーネント要素作成のための Playwright テスト拡張。
- [playwright-magic-steps](https://github.com/vitalets/playwright-magic-steps) - JavaScript コメントを Playwright steps に自動変換。
- [playwright-network-cache](https://github.com/vitalets/playwright-network-cache) - ファイルシステム上でネットワーク要求をキャッシュして Playwright テストを高速化。
- [Playwright-performance](https://www.npmjs.com/package/playwright-performance) - Playwright を使ってテストフローのパフォーマンスを測定・分析するプラグイン。
- [playwright-python-language-injection](https://github.com/Mattwmaster58/playwright-python-language-injection) - PyCharm で `python-playwright` 使用時の CSS/JS シンタックスハイライト用言語注入定義。
- [playwright-skill](https://github.com/testdino-hq/playwright-skill) - ベストプラクティス、POM パターン、CI/CD、移行パスを対象に、コーディングエージェント向け70以上の本番検証済み Playwright skills。
- [playwright-test-coverage](https://github.com/anishkny/playwright-test-coverage) - 実行中の Playwright テストからコードカバレッジを収集するプラグイン。
- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) - VS Code 向け公式 Playwright テスト拡張。
- [playwright-ui5](https://github.com/detachhead/playwright-ui5) - sapui5 向けカスタムセレクターエンジン。
- [playwright-xpath](https://github.com/detachhead/playwright-xpath) - xpath 2・3 向けカスタムセレクターエンジン。
- [POMWright](https://github.com/DyHex/POMWright) - 自動のネスト・連鎖ロケーター生成を備えた TypeScript ベース Page Object Model フレームワーク。
- [selenosis](https://github.com/alcounit/selenosis) - カスタムリソースを通じ、Selenium、Playwright、MCP セッションをオンデマンドのブラウザーポッドへルーティングする、ステートレス Kubernetes ネイティブハブ。
- [TestingBot](https://testingbot.com) - Playwright テストをクラウド上のブラウザーに接続。
- [Try Playwright](https://try.playwright.tech) - Playwright テストを実行する対話的プレイグラウンド。

## スクレイピング・自動化

- [Browserless](https://github.com/browserless/browserless) - stealth・CAPTCHA 処理付きで、WebSocket 経由で Playwright をリモート管理ブラウザーへ接続。
- [browsers-benchmark](https://github.com/techinz/browsers-benchmark) - ブラウザー自動化エンジンをボット検出システム（Cloudflare、DataDome、reCAPTCHA、Akamai、PerimeterX、Kasada、…）に対してテストするベンチマークツール。
- [camofox-browser](https://github.com/jo-inc/camofox-browser) - Playwright 互換の自動化バックエンドとして使える、検出防止機能を組み込んだ stealth ヘッドレスブラウザーサーバー。
- [CloakBrowser](https://github.com/CloakHQ/CloakBrowser) - ソースレベルのフィンガープリントパッチと、Python・JavaScript 向け Playwright 互換ラッパーを持つ stealth Chromium。
- [Figranium](https://github.com/figranium/figranium) - 複雑なブラウザーワークフローを視覚的に構築し、API 経由で実行。Docker 化され、Playwright ベースです。
- [Human Browser](https://humanbrowser.cloud) - 住宅用 IP とデバイスフィンガープリントを持つ管理クラウドブラウザーでスクリプトを実行する Playwright drop-in。A2A + MCP エンドポイントを備えます。
- [invisible_playwright](https://github.com/feder-cr/invisible_playwright) - ソースレベルのフィンガープリント・検出防止パッチを施した Firefox を使う、drop-in Playwright 代替。
- [playwright-captcha](https://github.com/techinz/playwright-captcha) - Playwright、Patchright、Camoufox 向け自動 captcha 解決。Cloudflare Turnstile、reCAPTCHA V2・V3 をサポート。

## AI・エージェント

- [Playwright Agent CLI](https://playwright.dev/agent-cli/introduction) - トークン効率のよいコマンドとインストール可能な skills を持つ、コーディングエージェント向けブラウザー自動化の公式コマンドラインインターフェイス。
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - Playwright アクセシビリティスナップショットによる LLM のブラウザー自動化を提供する公式 Model Context Protocol サーバー。

## レポーター

- [allure-playwright](https://github.com/allure-framework/allure-js/tree/master/packages/allure-playwright) - Playwright Test フレームワーク向け Allure 統合。
- [Checkly](https://www.checklyhq.com/docs/detect/testing/playwright-reporter/) - Playwright テスト結果、スクリーンショット、動画、トレースを Checkly プラットフォームへアップロードし、グローバルリージョンでの監視・デバッグを可能にします。
- [currents-dev](https://currents.dev/) - 並列 Playwright CI テストをデバッグ、トラブルシューティング、分析するクラウドダッシュボード。
- [echoed](https://github.com/mrasu/echoed) - OpenTelemetry データを HTML で可視化してテストを観測可能にします。
- [kinora](https://github.com/Kinora-dev/kinora) - プロジェクト横断・時系列の Playwright レポート向けセルフホスト可能ダッシュボード。成功率、傾向、テストごとの flaky/fail 率、失敗をインラインで開く埋込みトレースビューアーを備えます。
- [monocart-reporter](https://github.com/cenfun/monocart-reporter) - HTML グリッドに suites/cases/steps を表示する Playwright テストレポーター。
- [Piwi](https://github.com/PiwiTests/platform) - ライブ実行ストリーミング、プロジェクト横断分析、ロケーター修復、flaky 追跡、MCP サーバー、任意の AI 支援診断を持つセルフホスト Playwright ダッシュボード。
- [playwright-ctrf-json-reporter](https://github.com/ctrf-io/playwright-ctrf-json-reporter) - CTRF スキーマに従う Playwright JSON テスト結果レポーター。
- [playwright-slack-report](https://github.com/ryanrosello-og/playwright-slack-report) - Playwright テスト結果を好みの Slack チャンネルへ公開。
- [playwright-smart-reporter](https://www.npmjs.com/package/playwright-smart-reporter) - 安定性グレード、傾向分析、再試行分析、性能追跡、任意の AI による失敗分析を備える機能豊富な HTML レポーター。
- [playwright-tesults-reporter](https://github.com/tesults/playwright-tesults-reporter) - Playwright から Tesults へテスト結果をアップロードするライブラリ。
- [playwright-xray](https://github.com/inluxc/playwright-xray) - テスト実行を Jira / Xray へ送信する Playwright Xray Reporter。
- [qase](https://github.com/qase-tms/qase-javascript/tree/main/qase-playwright) - テスト実行を[qase](https://qase.io)へ送信する Playwright Qase Reporter。
- [TestDino](https://testdino.com) - 即時の失敗デバッグ、flaky テスト検出、ML 分類を持つ、Playwright テスト分析向け AI クラウドプラットフォーム。
- [testomatio-reporter](https://github.com/testomatio/reporter) - テストを実行し、TCMS testomatio、Jira / Linear / Azure DevOps タスク管理へテスト実行を送信。
- [playwright-timeline-reporter](https://github.com/vitalets/playwright-timeline-reporter) - テスト実行のパフォーマンスとワーカー利用率を最適化する対話的タイムラインレポーター。

## ショーケース

- [Elastic APM JS agent](https://github.com/elastic/apm-agent-rum-js) - Playwright を使い、ブラウザー横断のベンチマークテストを実行。
- [playwright-examples](https://github.com/microsoft/playwright-examples) - Playwright による各種テストシナリオ。
- [TypeScript](https://github.com/microsoft/TypeScript) - Playwright を使い、ブラウザー横断で TypeScript.js をテスト。
- [VS Code](https://github.com/microsoft/vscode) - Playwright を使い、Web ビルド上でクロスブラウザーテストを実行。
- [xterm.js](https://github.com/xtermjs/xterm.js) - Playwright を使い、クロスブラウザー統合テストを実行。

## ガイド

- [Currents Blog](https://currents.dev/blog/playwright) - QA 専門家が執筆した Playwright 記事。
- [Playwright Tips (videos)](https://www.youtube.com/playlist?list=PLMZDRUOi3a8NtMq3PUS5iJc2pee38rurc) - Playwright を使うテスト・監視の一般的な課題を扱う動画ウォークスルー。
- [Playwright Weekly](https://playwrightweekly.com) - インターネットから Playwright 記事・ニュースを集めたキュレーション済みアグリゲーター。
- [playwrightsolutions.com](https://playwrightsolutions.com) - Playwright 自動テストの問題と解決策のキュレーション済みセレクション。
- [serenity-js.org](https://serenity-js.org/handbook/web-testing/your-first-web-scenario/) - Playwright と Serenity/JS Screenplay Pattern でビジネス言語の受け入れテストを書く方法を学ぶ。
- [Testing 3D applications with Playwright on GPU](https://blog.promaton.com/testing-3d-applications-with-playwright-on-gpu-1e9cfc8b54a9) - CI で Playwright テストのハードウェアアクセラレーションを有効にするレシピ。

## コントリビュート

コントリビューションを歓迎します。まず[コントリビューションガイドライン](https://github.com/mxschmitt/awesome-playwright/blob/main/CONTRIBUTING.md)を読んでください。
