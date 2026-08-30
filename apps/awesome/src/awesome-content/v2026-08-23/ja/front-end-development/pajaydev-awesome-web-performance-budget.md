---
title: "Awesome Web Performance Budget"
description: "Web Performance Budgetを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-pajaydev-awesome-web-performance-budget-readme-md"
---

# Awesome Web Performance Budget

Web Performance Budgetを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [記事](#articles)
- [Performance Budgetを測定するツール](#tools-to-measure-performance-budget)
- [オープンソースツール](#open-source-tools)
- [Performance Budgetを設定するビルドツール](#build-tools-to-set-up-performance-budget)
- [バンドルアナライザー](#bundle-analyzers)
- [ウェブサイトアナライザー](#website-analyzers)
- [ブログ](#blogs)
- [ポッドキャスト](#podcasts)
- [動画](#videos)
- [書籍](#books)
- [事例](#case-studies)

## 記事
- [JavaScript Start-up Performance](https://medium.com/reloading/javascript-start-up-performance-69200f43b201) - AddyosmaniによるPerformance Budget。
- [Performance Budget](https://addyosmani.com/blog/performance-budgets/) - AddyosmaniによるPerformance Budget。
- [Your first performance budget](https://web.dev/your-first-performance-budget/) - いくつかの簡単な手順で最初のperformance budgetを定義する方法を説明します。
- [Designing for Performance](http://designingforperformance.com/index.html#table-of-contents) - パフォーマンスがデザイナーにとって重要である理由。
- [Web Performance for Designers and developers](https://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/) - ウェブデザイナーとフロントエンド開発者のためのフロントエンドパフォーマンス。
- [Performance as design](http://bradfrost.com/blog/post/performance-as-design/) - パフォーマンスを不可欠なデザイン機能とみなすベストプラクティス。
- [Inside Design - Setting a web performance budget](https://www.invisionapp.com/inside-design/setting-a-web-performance-budget/) - Invisionによるperformance budgetの設定。
- [Real-world Web Performance Budgets By Alex Russel](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/) - Can You Afford It?: Real-world Web Performance Budgets。
- [Performance Budget using Angular CLI](https://medium.com/dailyjs/how-did-angular-cli-budgets-save-my-day-and-how-they-can-save-yours-300d534aae7a) - AngularプロジェクトでのPerformance Budget実装。
- [Performance budgets 101](https://web.dev/performance-budgets-101/) - performance budgetを設定して始める方法。
- [Incorporate performance budgets into your build process](https://web.dev/incorporate-performance-budgets-into-your-build-tools) - performance budgetをビルドプロセスへ設定します。
- [How to make Performance Budget](http://v3.danielmall.com/articles/how-to-make-a-performance-budget/) - performance budgetを開発する手順。
- [Impact of Page Weight on Load Time](https://paulcalvano.com/2018-07-02-impact-of-page-weight-on-load-time/) - ページ重量がロード時間に及ぼす影響。

## Performance Budgetを測定するツール

- [Performance Budget Calculator](http://www.performancebudget.io/) - サイトのPerformance Budgetを計算します。
- [Web Page Test](https://www.webpagetest.org/easy) - パフォーマンスをテストします。
- [lightest app](https://www.lightest.app/) - 競合他社に対するウェブパフォーマンスを可視化します。
- [Speed Curve](https://speedcurve.com) - ウェブパフォーマンスを測定し、今日のパフォーマンスメトリクスを取得します。
- [Yellow Lab Tools](https://yellowlab.tools/) - 重いウェブページの高速化を助けるオンラインテスト。
- [Sitespeed.io](https://www.sitespeed.io/) - ウェブサイトのパフォーマンスを容易に監視・測定します。
- [Perf Track](https://perf-track.web.app/) - 大規模なフレームワークパフォーマンス追跡。

## オープンソースツール

- [Perfume.js](https://zizzamia.github.io/perfume/) - フィールドデータをお気に入りの分析ツールへ報告する小さなウェブパフォーマンス監視ライブラリ。
- [Falco](https://github.com/theodo/falco) - ウェブサイトの監視、分析、最適化を支援します。

## Performance Budgetを設定するビルドツール

- [Bundle Size](https://github.com/siddharthkp/bundlesize) - バンドルサイズを管理します。
- [Webpack Perf Budget](https://webpack.js.org/configuration/performance/) - プロジェクトでWebpackを使用している場合に選択できます。
- [Lighthouse](https://web.dev/use-lighthouse-for-performance-budgets/) - [lighthouse](https://developers.google.com/web/tools/lighthouse)を使用してperformance budgetを設定し、[Lighthouse bot](https://web.dev/using-lighthouse-bot-to-set-a-performance-budget/)で自動化する方法。
- [Grunt-perfbudget](https://github.com/tkadlec/grunt-perfbudget) - パフォーマンスバジェット用Gruntタスク。
- [Size Limit](https://github.com/ai/size-limit) - 優れたパフォーマンスを維持するため、JSアプリまたはライブラリ実行の実際のコストを計算します。コストが上限を超える場合にpull requestでエラーを表示します。
- [Size Plugin](https://github.com/GoogleChromeLabs/size-plugin) - 圧縮済みWebpackアセットサイズを時間経過とともに追跡します。
- [Performance Budget Builder](https://github.com/GoogleChromeLabs/pr-bot) - テンプレートタイプを配置し、各テンプレートタイプにサイズバジェットを設定してから、テンプレート内でロードされる各アセットカテゴリのサイズを組み込みます。
- [Progressive Web Metrics](https://github.com/paulirish/pwmetrics) - テンプレートタイプを配置し、各テンプレートタイプにサイズバジェットを設定してから、テンプレート内でロードされる各アセットカテゴリのサイズを組み込みます。
- [rollup-plugin-size-snapshot](https://github.com/TrySound/rollup-plugin-size-snapshot) - Lighthouse経由でパフォーマンスメトリクスを収集するCLIツールとライブラリ。
- [ImportCost - VS Extension](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - インポートしたパッケージのサイズをVS codeエディター内にインライン表示する拡張機能。

## バンドルアナライザー

- [Bundlephobia](https://bundlephobia.com/) - npmパッケージをバンドルへ追加するコストを見つけます。
- [bundle-buddy](https://bundle-buddy.firebaseapp.com/) - JavaScriptのchunks/splits間のソースコード重複を見つけるのに役立つツール。
- [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) - バンドル内容を便利で対話的にズームできるツリーマップとして表すWebpackプラグインとCLIユーティリティ。
- [Disc](http://hughsk.io/disc/) - browserifyプロジェクトバンドルのモジュールツリーを可視化し、肥大化を追跡します。
- [lasso-analyzer](https://github.com/ajay2507/lasso-analyzer) - Lassoで作成したプロジェクトバンドルを分析・可視化します。
- [Rollup Visualizer](https://github.com/btd/rollup-plugin-visualizer) - スペースを取るモジュールを確認するためRollupバンドルを可視化・分析します。
- [Parcel plugin Visualizer](https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser) - バンドル内容を可視化するparcel bundler向けプラグイン。
- [CSS Analyzer](https://github.com/macbre/analyze-css) - CSSセレクターの複雑性・パフォーマンスアナライザー。

## ウェブサイトアナライザー
- [Lighthouse Metrics](https://lighthouse-metrics.com/) - Lighthouse Metricsはサイトパフォーマンスに関する簡単な洞察を提供します。複数の場所からテストを実行して、必要な価値ある洞察を得ることで時間を節約できます。
- [UITest.com Site Check](https://uitest.com/check/) - 80以上のツール（ウェブベース・無料）でウェブサイトをテストします。
- [PageGuard](https://pageguard.org) - 無料のウェブサイトヘルススキャナー。Core Web Vitals（LCP、FCP、CLS、TTFB）、パフォーマンススコアを測定し、AI駆動アクションプランを提供します。登録は不要です。

## ブログ
- [Web Performance Calender](https://calendar.perfplanet.com/2020/) - スピード愛好家が一年で最も好きな時期。
- [Web Performance Budget: How to Set up, Calculate, And Apply](https://uxify.com/blog/post/web-performance-budget-guide) - バジェットの設定、計算、適用方法。

## ポッドキャスト
- [Chasing Waterfalls](https://chasingwaterfalls.io/) - [Tim kadlec](https://timkadlec.com/)によるウェブを高速化する人々との会話。
- [Shoptalk Show](https://shoptalkshow.com/) - ウェブサイト構築に関するポッドキャスト。

## 動画

- [Concept of Performance Budget](https://www.youtube.com/watch?list=PLYo5nh8xQFpkwsu9QNlCpPGkmCCuTTWDJ&v=yqejmZrtmNg) - Tim KadlecによるPerformance Budget。
- [Implementing Performance Budgets](https://youtu.be/vVlpCmK1l5k) - リグレッションを避けるperformance budgetの実装方法―Google Chrome Developers。
- [Design Decisions Through The Lens Of A Performance Budget](https://vimeo.com/108328247) - プロジェクト開始時からサイトのパフォーマンスを良好に保つため、より賢明なデザイン判断を行う方法。
- [Revisiting Performance Budgets](https://www.youtube.com/watch?v=cnr3CJwpaps) - Performance Budgetsを再考します。

## 書籍

- [Web Performance Warrior](https://www.oreilly.com/library/view/web-performance-warrior/9781492048114/)
- [Designing for Performance](http://designingforperformance.com/)

## 事例

- [Web Performance Optimization case studies](https://wpostats.com/) - ウェブパフォーマンス最適化（WPO）がユーザー体験とビジネスメトリクスに与える影響を示す事例と実験。
- [BBC - Cutting the mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard) - レスポンシブウェブサイト構築時の最適化。
- [Casper.com Self-hosting Optimization](https://medium.com/caspertechteam/we-shaved-1-7-seconds-off-casper-com-by-self-hosting-optimizely-2704bcbff8ec) - Optimizelyのセルフホスティングによりcasper.comを1.7秒高速化した方法。
- [Netflix Performance Improvement by shipping less JS](https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9) - Netflixウェブパフォーマンスの事例。
- [Pinterest Web App Optimization](https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154/) - Pinterest Progressive Web Appパフォーマンスの事例。
- [Smashing Magazine's Web Performance](https://www.smashingmagazine.com/2014/09/improving-smashing-magazine-performance-case-study/) - Smashing Magazineのウェブパフォーマンス改善事例。
- [Tinder Web App Performance](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0/) - Tinder Progressive Web Appパフォーマンスの事例。
- [Treebo PWA Case Study](https://medium.com/dev-channel/treebo-a-react-and-preact-progressive-web-app-performance-case-study-5e4f450d5299/) - Treebo―ReactおよびPreact PWAパフォーマンスの事例。
- [Twitter Lite](https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3/) - 大規模なTwitter Liteウェブアプリ。
- [Telegraph - Creating a web performance culture](https://medium.com/the-telegraph-engineering/improving-third-party-web-performance-at-the-telegraph-a0a1000be5) - The Telegraphにおけるサードパーティウェブパフォーマンスの改善。
- [Zillow's Performance Budget](https://www.zillow.com/engineering/bigger-faster-more-engaging-budget/) - Zillowがperformance budgetingを使用する実話。

## ライセンス

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)
