---
title: "Awesome Web Performance Budget"
description: "ウェブの性能予算を設定・維持するための記事、測定・分析ツール、ビルド時の検査、教材、事例。"
licenseSource: "github-pajaydev-awesome-web-performance-budget-readme-md"
---

# Awesome Web Performance Budget

ウェブの性能予算は、サイトの速度やユーザー体験に影響する指標に上限を設け、設計・開発時にその範囲を守るためのものです。予算の設定と維持に役立つ記事、測定ツール、ビルド時の検査、バンドルやサイトの分析ツール、教材、事例を掲載しています。説明や利用条件は固定した原文の記載に基づきます。

## <a id="articles"></a>記事
- [JavaScript Start-up Performance](https://medium.com/reloading/javascript-start-up-performance-69200f43b201) - Addy Osmaniによる性能予算の解説。
- [Performance Budget](https://addyosmani.com/blog/performance-budgets/) - Addy Osmaniによる性能予算の解説。
- [Your first performance budget](https://web.dev/your-first-performance-budget/) - いくつかの簡単な手順で、初めての性能予算を定義する方法。
- [Designing for Performance](http://designingforperformance.com/index.html#table-of-contents) - デザイナーにとってパフォーマンスが重要な理由。
- [Web Performance for Designers and developers](https://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/) - ウェブデザイナーとフロントエンド開発者に向けた、フロントエンドのパフォーマンス解説。
- [Performance as design](http://bradfrost.com/blog/post/performance-as-design/) - パフォーマンスを不可欠なデザイン要素として扱う方法。
- [Inside Design - Setting a web performance budget](https://www.invisionapp.com/inside-design/setting-a-web-performance-budget/) - Invisionによる、ウェブの性能予算を設定する方法。
- [Real-world Web Performance Budgets By Alex Russel](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/) - 実際のウェブサイトにおける性能予算を扱う記事「Can You Afford It?: Real-world Web Performance Budgets」。
- [Performance Budget using Angular CLI](https://medium.com/dailyjs/how-did-angular-cli-budgets-save-my-day-and-how-they-can-save-yours-300d534aae7a) - Angularプロジェクトに性能予算を導入する方法。
- [Performance budgets 101](https://web.dev/performance-budgets-101/) - 性能予算を使い始める方法。
- [Incorporate performance budgets into your build process](https://web.dev/incorporate-performance-budgets-into-your-build-tools) - ビルド工程に性能予算を組み込む方法。
- [How to make Performance Budget](http://v3.danielmall.com/articles/how-to-make-a-performance-budget/) - 性能予算を作成する手順。
- [Impact of Page Weight on Load Time](https://paulcalvano.com/2018-07-02-impact-of-page-weight-on-load-time/) - ページのデータ量が読み込み時間に及ぼす影響。

## <a id="tools-to-measure-performance-budget"></a><a id="performance-budgetを測定するツール"></a>性能予算を測定するツール

- [Performance Budget Calculator](http://www.performancebudget.io/) - サイトの性能予算を計算するツール。
- [Web Page Test](https://www.webpagetest.org/easy) - ウェブのパフォーマンスをテストするツール。
- [lightest app](https://www.lightest.app/) - 競合サイトと比較してウェブのパフォーマンスを可視化するツール。
- [Speed Curve](https://speedcurve.com) - ウェブのパフォーマンスを測定し、現在の指標を取得するツール。
- [Yellow Lab Tools](https://yellowlab.tools/) - データ量の多いウェブページの高速化を支援するオンラインテスト。
- [Sitespeed.io](https://www.sitespeed.io/) - ウェブサイトのパフォーマンスを監視・測定するツール。
- [Perf Track](https://perf-track.web.app/) - フレームワークのパフォーマンスを大規模に追跡するツール。

## <a id="open-source-tools"></a>オープンソースツール

- [Perfume.js](https://zizzamia.github.io/perfume/) - 実際の利用環境で収集したデータを分析ツールへ報告する、小さなウェブパフォーマンス監視ライブラリ。
- [Falco](https://github.com/theodo/falco) - ウェブサイトの監視、分析、最適化を支援するツール。

## <a id="build-tools-to-set-up-performance-budget"></a><a id="performance-budgetを設定するビルドツール"></a>性能予算を設定するビルドツール

- [Bundle Size](https://github.com/siddharthkp/bundlesize) - バンドルサイズを管理するツール。
- [Webpack Perf Budget](https://webpack.js.org/configuration/performance/) - Webpackを使うプロジェクト向けの性能予算設定。
- [Lighthouse](https://web.dev/use-lighthouse-for-performance-budgets/) - [lighthouse](https://developers.google.com/web/tools/lighthouse)で性能予算を設定し、[Lighthouse bot](https://web.dev/using-lighthouse-bot-to-set-a-performance-budget/)で検査を自動化する方法。
- [Grunt-perfbudget](https://github.com/tkadlec/grunt-perfbudget) - 性能予算を扱うGruntタスク。
- [Size Limit](https://github.com/ai/size-limit) - JavaScriptアプリやライブラリの実際の実行コストを計算し、上限を超える場合にプルリクエストでエラーを表示するツール。
- [Size Plugin](https://github.com/GoogleChromeLabs/size-plugin) - 圧縮済みWebpackアセットのサイズを継続的に追跡するツール。
- [Performance Budget Builder](https://github.com/GoogleChromeLabs/pr-bot) - リンク先のpr-botは、プルリクエストと比較元の差をプラグインで調べ、ファイルサイズなどの比較結果をGitHubへ報告するツール。
- [Progressive Web Metrics](https://github.com/paulirish/pwmetrics) - Lighthouseでパフォーマンス指標を収集するCLIツールとライブラリ。
- [rollup-plugin-size-snapshot](https://github.com/TrySound/rollup-plugin-size-snapshot) - バンドル、縮小後、gzip圧縮後のサイズを記録し、ツリーシェイキングを検査するRollupプラグイン。
- [ImportCost - VS Extension](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - インポートしたパッケージのサイズをVS Codeエディター内に表示する拡張機能。

## <a id="bundle-analyzers"></a>バンドルアナライザー

- [Bundlephobia](https://bundlephobia.com/) - npmパッケージをバンドルに追加するコストを調べるツール。
- [bundle-buddy](https://bundle-buddy.firebaseapp.com/) - JavaScriptのチャンクや分割ファイル間で重複するソースコードを調べるツール。
- [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) - バンドル内容を、ズームできる対話型ツリーマップとして表示するWebpackプラグインとCLIツール。
- [Disc](http://hughsk.io/disc/) - Browserifyプロジェクトのバンドルに含まれるモジュールツリーを可視化し、肥大化の原因を調べるツール。
- [lasso-analyzer](https://github.com/ajay2507/lasso-analyzer) - Lassoで作成したバンドルを分析・可視化するツール。
- [Rollup Visualizer](https://github.com/btd/rollup-plugin-visualizer) - Rollupバンドルを可視化・分析し、容量を使うモジュールを調べるツール。
- [Parcel plugin Visualizer](https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser) - バンドル内容を可視化するParcel向けプラグイン。
- [CSS Analyzer](https://github.com/macbre/analyze-css) - CSSセレクターの複雑さとパフォーマンスを分析するツール。

## <a id="website-analyzers"></a>ウェブサイトアナライザー
- [Lighthouse Metrics](https://lighthouse-metrics.com/) - 複数の場所からLighthouseテストを実行し、サイトのパフォーマンスを調べるツール。
- [UITest.com Site Check](https://uitest.com/check/) - 80を超えるウェブベースの無料ツールでサイトをテストするサービス。
- [PageGuard](https://pageguard.org) - 固定原文では、パフォーマンススコアとCore Web Vitalsとして列挙された指標（LCP、FCP、CLS、TTFB）を測定し、AIによる改善計画を提示する、登録不要の無料サイト診断ツールとされています。

## <a id="blogs"></a>ブログ
- [Web Performance Calender](https://calendar.perfplanet.com/2020/) - ウェブパフォーマンスに関心を持つ人が毎年楽しみにするブログ。
- [Web Performance Budget: How to Set up, Calculate, And Apply](https://uxify.com/blog/post/web-performance-budget-guide) - ウェブの性能予算を設定、計算、適用する方法。

## <a id="podcasts"></a>ポッドキャスト
- [Chasing Waterfalls](https://chasingwaterfalls.io/) - [Tim Kadlec](https://timkadlec.com/)による、ウェブの高速化に取り組む人々との対談。
- [Shoptalk Show](https://shoptalkshow.com/) - ウェブサイト構築に関するポッドキャスト。

## <a id="videos"></a>動画

- [Concept of Performance Budget](https://www.youtube.com/watch?list=PLYo5nh8xQFpkwsu9QNlCpPGkmCCuTTWDJ&v=yqejmZrtmNg) - Tim Kadlecによる性能予算の解説。
- [Implementing Performance Budgets](https://youtu.be/vVlpCmK1l5k) - 性能の悪化を防ぐための性能予算の導入方法。Google Chrome Developersによる動画。
- [Design Decisions Through The Lens Of A Performance Budget](https://vimeo.com/108328247) - プロジェクトの開始時から、サイトの良好なパフォーマンスにつながるデザイン判断を行う方法。
- [Revisiting Performance Budgets](https://www.youtube.com/watch?v=cnr3CJwpaps) - 性能予算を再考する動画。

## <a id="books"></a>書籍

- [Web Performance Warrior](https://www.oreilly.com/library/view/web-performance-warrior/9781492048114/)
- [Designing for Performance](http://designingforperformance.com/)

## <a id="case-studies"></a>事例

- [Web Performance Optimization case studies](https://wpostats.com/) - ウェブパフォーマンス最適化（WPO）がユーザー体験やビジネス指標に与える影響を示す事例と実験。
- [BBC - Cutting the mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard) - レスポンシブなウェブサイトの構築時に行った最適化。
- [Casper.com Self-hosting Optimization](https://medium.com/caspertechteam/we-shaved-1-7-seconds-off-casper-com-by-self-hosting-optimizely-2704bcbff8ec) - Optimizelyを自前で配信し、casper.comの読み込み時間を1.7秒短縮した方法。
- [Netflix Performance Improvement by shipping less JS](https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9) - Netflixのウェブパフォーマンス事例。
- [Pinterest Web App Optimization](https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154/) - PinterestのProgressive Web Appのパフォーマンス事例。
- [Smashing Magazine's Web Performance](https://www.smashingmagazine.com/2014/09/improving-smashing-magazine-performance-case-study/) - Smashing Magazineのウェブパフォーマンス改善事例。
- [Tinder Web App Performance](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0/) - TinderのProgressive Web Appのパフォーマンス事例。
- [Treebo PWA Case Study](https://medium.com/dev-channel/treebo-a-react-and-preact-progressive-web-app-performance-case-study-5e4f450d5299/) - ReactとPreactを使ったTreeboのPWAのパフォーマンス事例。
- [Twitter Lite](https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3/) - Twitter Liteを大規模なウェブアプリとして運用する事例。
- [Telegraph - Creating a web performance culture](https://medium.com/the-telegraph-engineering/improving-third-party-web-performance-at-the-telegraph-a0a1000be5) - The Telegraphにおける、サードパーティに関わるウェブパフォーマンスの改善。
- [Zillow's Performance Budget](https://www.zillow.com/engineering/bigger-faster-more-engaging-budget/) - Zillowが性能予算を活用する事例。
