---
title: "Awesome WPO"
description: "Web Performance Optimization（WPO）の学習資料と、計測・監視、資産最適化、CDN、仕様に関するツールを紹介します。"
licenseSource: "github-davidsonfellipe-awesome-wpo-readme-md"
---

# Awesome WPO

Web Performance Optimization（WPO）は、Webサイトの読み込み・描画・ユーザー操作への応答を最適化する取り組みです。学習資料、事例、イベントに加え、分析・監視ツール、CDN、資産最適化、ベンチマーク、ブラウザーの性能計測仕様を紹介し、原文が提供する[オンライン資料一覧](https://awesome-wpo.dev/)にも案内します。機能・料金・対応環境・イベント・非推奨情報は、固定原文の記載時点に基づきます。

## エージェントスキル<a id="agent-skills"></a>

> Web品質監査と最適化ワークフロー向けのエージェントスキルです。

- [web-quality-audit](https://github.com/addyosmani/web-quality-skills#web-quality-audit) - すべてのカテゴリにおける包括的な品質レビュー
- [core-web-vitals](https://github.com/addyosmani/web-quality-skills#core-web-vitals) - LCP、INP、CLSに特化した最適化
- [accessibility](https://github.com/addyosmani/web-quality-skills#accessibility) - WCAGの適合性、スクリーンリーダーのサポート、キーボードナビゲーション
- [performance](https://github.com/addyosmani/web-quality-skills#performance) - 読み込み速度、実行効率、リソース最適化
- [best-practices](https://github.com/addyosmani/web-quality-skills#best-practices) - セキュリティ、現代的なAPI、コード品質パターン

## 記事<a id="articles"></a>

> [awesome-wpo.dev](https://awesome-wpo.dev/)または[ARTICLES.md](https://github.com/davidsonfellipe/awesome-wpo/blob/84f32948a6298456d6a94cff64551f39f2666e6f/ARTICLES.md)で閲覧できます。

## 書籍<a id="books"></a>

> WPOに関する書籍です。

- [HTTP/2 in Action by Barry Pollard](https://www.manning.com/books/http2-in-action) - Barry Pollard
- [Web Performance in Action by Jeremy Wagner](https://www.manning.com/books/web-performance-in-action) - Jeremy L. Wagner
- [Book of Speed](https://www.bookofspeed.com/) - Stoyan Stefanov
- [Designing for Performance: Weighing Aesthetics and Speed](https://designingforperformance.com/) - Lara Hogan
- [Even Faster Web Sites: Performance Best Practices for Web Developers](https://www.oreilly.com/library/view/even-faster-web/9780596803773/) - Steve Souders
- [High Performance Browser Networking: What every web developer should know about networking and web performance](https://www.oreilly.com/library/view/high-performance-browser/9781449344757/) - Ilya Grigorik
- [High Performance JavaScript](https://www.oreilly.com/library/view/high-performance-javascript/9781449382308/) - Nicholas C. Zakas
- [High Performance Web Sites: Essential Knowledge for frontend Engineers](https://www.oreilly.com/library/view/high-performance-web/9780596529307/) - Steve Souders
- [High Performance Responsive Design: Building Faster Sites Across Devices](https://www.oreilly.com/library/view/high-performance-responsive/9781491949979/) - Tom Barker
- [Lean sites](https://www.sitepoint.com/premium/books/lean-websites/) - Barbara Bermes
- [Time Is Money: The Business Value of Web Performance](https://www.oreilly.com/library/view/time-is-money/9781491928783/) - Tammy Everts
- [Using WebPagetest](https://www.oreilly.com/library/view/using-webpagetest/9781491902783/) - Rick Viscomi、Andy Davies、Marcel Duran
- [Web Performance Daybook Volume 2](https://www.amazon.com/Web-Performance-Daybook-Stoyan-Stefanov-ebook/dp/B008CQA8BA/) - Stoyan Stefanov
- [Web Performance Tuning](https://www.oreilly.com/library/view/web-performance-tuning/059600172X/) - Patrick Killelea
- [You Don't Know JS: Async & Performance](https://www.oreilly.com/library/view/you-dont-know/9781491905197/) - Kyle Simpson
- [Linux, Apache, MySQL, PHP Performance end-to-end](https://play.google.com/store/books/details/Colin_McKinnon_Linux_Apache_MySQL_PHP_Performance?id=Z3ciBgAAQBAJ) - Colin McKinnon
- [Web Components in Action](https://www.manning.com/books/web-components-in-action) - Ben Farrell
- [Image Optimization](https://www.smashingmagazine.com/printed-books/image-optimization/) - Addy Osmani
- [Performance Engineering in Practice](https://www.manning.com/books/performance-engineering-in-practice) - Den Odell
- [Web Performance Engineering in the Age of AI](https://www.oreilly.com/library/view/web-performance-engineering/9798341660182/) - Addy Osmani

## 事例研究<a id="case-studies"></a>

- [WPOStats](https://wpostats.com/) - Webパフォーマンス最適化（WPO）がユーザー体験とビジネス指標に与える影響を示す事例・実験
- [Google Developers Case Studies](https://web.dev/case-studies) - 他の開発者がWebを使ってユーザー体験を提供した理由と方法を紹介

## ドキュメント<a id="documentation"></a>

- [PageSpeed Insights Rules](https://developers.google.com/speed/docs/insights/v5/get-started) - PageSpeedチームが作成したガイド
  原文では非推奨かつ2019年5月に停止予定とされ、Version 5を最新と説明しています。Version 5はChrome User Experience Reportの実利用データとLighthouseのラボデータを提供するとの記載です。
- [Best Practices for Speeding Up Your site](https://developer.yahoo.com/performance/rules.html) - Yahoo! Exceptional Performanceチームによる、7カテゴリに分類した35のベストプラクティス
- [Chrome Developers: Performance](https://developer.chrome.com/docs/performance/) - 描画・読み込み・実行時のパフォーマンスに関する詳しいガイド
- [Lighthouse Docs](https://developer.chrome.com/docs/lighthouse/) - 監査手法、スコアの詳細、使用方法のガイド
- [Code Splitting (Webpack)](https://webpack.js.org/guides/code-splitting/) - JavaScriptバンドルを分割するための公式ガイド。初期ロードを速くし、必要に応じてロードできるようにする
- [Navigation Timing API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API) - ページのナビゲーションと、読み込みの各段階を計測する指標
- [Navigation Timing Level 2 (W3C)](https://www.w3.org/TR/navigation-timing-2/) - `responseStart`と`requestStart`を使ってTime to First Byte（TTFB）を算出
- [Resource Timing API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Resource_timing) - アセットの詳細なネットワークタイミング
- [Long Tasks API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Long_Tasks_API) - メインスレッドをブロックする処理を検出
- [Paint Timing API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Paint_Timing_API) - First PaintとFirst Contentful Paintの計測情報
- [Largest Contentful Paint API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/LargestContentfulPaint) - LCPエントリへのプログラムによるアクセス
- [Layout Instability API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift) - レイアウトシフト（CLS）の測定と検証

## イベント<a id="events"></a>

### カンファレンス<a id="conferences"></a>

- [We Love Speed](https://www.welovespeed.com/2024/) - ウェブパフォーマンスの知識と経験を可能な限り広く共有するという願いから生まれた
- [PWA Summit](https://pwasummit.org/) - Progressive Web Apps（PWA）で誰もが成功できるように支援する無料オンラインのシングルトラックカンファレンス
- [performance.now()](https://perfnow.nl/) - 原文ではアムステルダムでの再開催を案内。14人の登壇者による、Webパフォーマンスを扱う単一トラックのカンファレンス
- [PerfMatters](https://perfmattersconf.com/) - 国際的に知られるパフォーマンス分野の開発者による、オンラインのWebパフォーマンスカンファレンス

### 勉強会<a id="meetup"></a><a id="meetups"></a>

> [awesome-wpo.dev](https://awesome-wpo.dev/)または[MEETUPS.md](https://github.com/davidsonfellipe/awesome-wpo/blob/84f32948a6298456d6a94cff64551f39f2666e6f/MEETUPS.md)で閲覧できます。

## 講演<a id="talks"></a>

> [awesome-wpo.dev](https://awesome-wpo.dev/)または[TALKS.md](https://github.com/davidsonfellipe/awesome-wpo/blob/84f32948a6298456d6a94cff64551f39f2666e6f/TALKS.md)で閲覧できます。

## ツール<a id="tools"></a>

- [Speculation Rules Generator](https://www.corewebvitals.io/tools/speculation-rules-generator) - プリフェッチとプリレンダリングを設定するSpeculation RulesのJSONを生成
- [Critical CSS Generator](https://www.corewebvitals.io/tools/critical-css-generator) - スクロールせずに見える範囲の描画に必要なクリティカルパスCSSを生成
- [Core Web Vitals Report](https://www.corewebvitals.io/core-web-vitals-report) - CrUXの過去データからCore Web Vitalsレポートを生成

## 解析ツール<a id="アナライザー"></a><a id="analyzers"></a>

- [Request Map](https://requestmap.webperf.tools/) - 自サイトとサードパーティーのリクエスト依存関係を対話的なマップで可視化
- [Web.dev](https://web.dev/) - web.devのガイドと分析を通じて、Webの新しい機能をサイトやアプリへ導入
- [PageSpeed Insights](https://pagespeed.web.dev/) - 任意のURLのCore Web Vitalsをラボデータとフィールドデータで診断
- [PageGym](https://pagegym.com) - 経験豊富なユーザーと技術的なSEOの専門家向けの、ページ速度分析・最適化ツール
- [DebugBear](https://www.debugbear.com/) - Lighthouseに基づくサイト監視。スコア・指標の時系列変化を調べ、その原因を確認。有料製品、30日間の無料試用あり
- [Page Speed](https://developers.google.com/speed) - サイトのパフォーマンスを最適化するPageSpeedツール群。PageSpeed Insightsで適用できる改善手法を特定し、最適化ツールで処理を自動化
- [Dareboost](https://www.dareboost.com/) - パフォーマンス、アクセシビリティ、SEO、セキュリティのベストプラクティスにわたるWebサイト品質監査
- [Screpy](https://screpy.com) - 複数分野を監査する、AIベースのパフォーマンス・SEO・稼働状態・品質監視
- [YSlow](https://github.com/marcelduran/yslow) - 高パフォーマンスウェブページのためのルールに基づき、ウェブページを分析し、パフォーマンス向上の方法を提案します
- [Grunt-WebPageTest](https://github.com/sideroad/grunt-wpt) - WebPageTestを継続的に計測するGruntプラグインです。 [デモ](http://sideroad.github.io/sample-wpt-page/)
- [Grunt-perfbudget](https://github.com/tkadlec/grunt-perfbudget) - パフォーマンス予算を強制するGrunt.jsタスクです。 [パフォーマンス予算について](https://timkadlec.com/2013/01/setting-a-performance-budget/)
- [Web Tracing Framework](https://github.com/google/tracing-framework) - 複雑なウェブアプリケーションのトレースおよび調査に用いるためのライブラリ、ツール、可視化ツール
- [Yandex.Tank](https://github.com/yandex/yandex-tank) - 上級Linuxユーザー向けの拡張可能なオープンソース負荷テストツール。自動負荷テスト一式への組み込みにも対応
- [Yellow Lab Tools](https://yellowlab.tools/) - フロントエンドの実装を監査し、パフォーマンス問題の検出とJavaScriptのプロファイリングを行うオンラインツール
- [Pagelocity](https://pagelocity.com/) - ウェブパフォーマンスの最適化および分析ツール
- [Speed Racer](https://github.com/speedracer/speedracer) - Chromeヘッドレスを使用して、あなたのライブラリ／アプリケーションのパフォーマンスメトリクスを収集します
- [Lightest App](https://lightest.app/) - 競合サイトとのパフォーマンス比較を可視化。原文では読み込み時間がコンバージョンと収益に与える影響を強調
- [Redirect Checker](https://github.com/brancogao/redirect-checker) - HTTPリダイレクトチェーンを分析し、ループを検出、ページ読み込み時間へのパフォーマンス影響を測定します
- [Third Party Analysis Tool](https://tools.paulcalvano.com/wpt-third-party-analysis/) - WebPageTestの結果から、サードパーティーリクエストのリスク、描画を妨げる影響、単一障害点となり得る箇所を分析
- [Web Font Analyzer](https://tools.paulcalvano.com/wpt-font-analysis/) - WebPageTestのデータから、フォントの読み込み時刻、転送データ量、グリフの使用状況を確認
- [Webfont Usage Analyzer](https://github.com/paulcalvano/webfont-usage-analyzer) - 読み込まれたWebフォントを画面に表示されたDOMの使用箇所と対応付け、最適化の余地を調べるブックマークレット
- [Waterfall Tools](https://waterfall-tools.com/) - HAR、WPT JSON、Chromeのトレース・ネットワークログ、tcpdumpの記録に対応する、クライアント側ネットワークリクエストのウォーターフォール表示ツール

## 解析API<a id="アナライザーapi"></a><a id="analyzers---api"></a>

- [PSI](https://github.com/GoogleChromeLabs/psi) - レポート機能を備えたNode.js向けPageSpeed Insightsツール

## アプリケーション性能監視<a id="application-performance-monitoring"></a>

- [Datadog APM](https://www.datadoghq.com/product/apm/) - 大規模環境に対応するエンドツーエンドの分散トレースとAPM。すべてのテレメトリーと関連付け可能
- [BetterUptime](https://betteruptime.com) - ステータスページとインシデント通知をまとめたWebサイト監視ツール
- [Pingdom](https://www.pingdom.com/) - 複数地点からのプローブでWebサイトの稼働率を確認
- [UptimeRobot](https://uptimerobot.com) - 稼働率監視ツール。原文では無料プランが充実していると説明
- [StatusList](https://statuslist.app) - 稼働率、パフォーマンス監視にデバッグ情報、そしてホストされたステータスページを1つのシンプルなダッシュボードで提供

## リアルユーザー監視<a id="real-user-monitoring"></a>

- [Catchpoint Real User Monitoring](https://www.catchpoint.com/real-user-monitoring) - Webアプリとネイティブモバイルアプリ向けのRUM。Core Web Vitals、サードパーティーの影響、合成監視との関連付けに対応（OpenTelemetry基盤）
- [Atatus](https://www.atatus.com/) - RUM、APM、合成監視による稼働確認、セッションリプレイ、OpenTelemetryを含むフルスタックの可観測性
- [Datadog Real User Monitoring](https://www.datadoghq.com/product/real-user-monitoring/) - ブラウザとモバイル向けRUM（セッションリプレイ、Core Web Vitals、トレースとログとの相関）
- [New Relic Browser Monitoring](https://newrelic.com/platform/browser-monitoring) - 実際のユーザーのブラウザ監視（Core Web Vitals、バックエンドへの分散トレース、デプロイマーカー）
- [SpeedCurve](https://www.speedcurve.com/features/performance-monitoring/) - 合成テスト、RUM、Lighthouse、Core Web Vitals、パフォーマンス予算、競合ベンチマークを統合したウェブパフォーマンス監視
- [Boomerang (Open Source)](https://akamai.github.io/boomerang/oss/) - Akamai社員が保守し、OSSコミュニティも貢献するBoomerangのオープンソース版ドキュメント
- [Akamai mPulse Boomerang](https://techdocs.akamai.com/mpulse-boomerang/docs/welcome-to-mpulse-boomerang) - mPulseとの連携に特化した追加機能を含む、BoomerangのAkamai mPulse版ドキュメント

## バンドル解析<a id="bundle-analyzer"></a>

- [Bundlesize](https://github.com/siddharthkp/bundlesize) - あなたのバンドルサイズを管理する
- [source-map-explorer](https://github.com/danvk/source-map-explorer) - ソースマップを用いて、バンドル内の容量の使われ方を分析・デバッグ
- [Bundlephobia](https://bundlephobia.com/) - npmパッケージをフロントエンドバンドルに追加した際に生じるパフォーマンス影響を特定する
- [bundle.js.org](https://bundle.js.org/) - オンラインでnpmパッケージのサイズを確認できるツール
- [Webpack bundle analyzer](https://github.com/webpack/webpack-bundle-analyzer) - バンドル内容を拡大縮小できる対話的なツリーマップで表示するWebpackプラグインとCLIツール
- [Disc](http://hughsk.io/disc/) - browserifyプロジェクトのバンドル内のモジュールツリーを可視化し、容量増大の原因を特定
- [Lasso-analyzer](https://github.com/pajaydev/lasso-analyzer) - Lassoで作成されたプロジェクトバンドルを分析・可視化
- [Compression Webpack plugin](https://github.com/webpack/compression-webpack-plugin) - Content-Encodingを使って配信するために、資産の圧縮版を用意
- [BundleStats](https://github.com/relative-ci/bundle-stats) - バンドルレポート（バンドルサイズ、アセット、モジュール、パッケージ）を生成し、異なるビルド間の結果を比較する

## ベンチマーク<a id="benchmarks"></a>

> CSS、JavaScript、PHPのテストケースを作成し、異なる実装を比較するツール群です。

- [CSS-perf](https://github.com/mdo/css-perf) - CSS戦略を比較し、効果的なCSS設計の手法や技術を調べる探索的な性能テスト。原文では科学的な検証ではないと説明
- [JSBench](https://jsbench.me/) - 現代的なブラウザベースのJavaScriptベンチマークツールで、パフォーマンステストを迅速に作成・共有できる
- [Benchmark.js](https://benchmarkjs.com/) - ほぼすべてのJavaScriptプラットフォームで動作するベンチマークライブラリ。高精度タイマーに対応し、統計的に有意な結果を返す
- [JSlitmus](https://github.com/broofa/jslitmus) - 必要に応じたJavaScriptベンチマークテストを作成する軽量ツール
- [Matcha](https://github.com/logicalparadox/matcha) - コードの性能を測る実験を設計。各ベンチマークでアプリケーション内の特定の影響箇所に焦点を当てる
- [Timing.js](https://github.com/addyosmani/timing.js) - Navigation Timing APIを扱うための小さなヘルパー。アプリケーションがどれだけの時間をどの部分で消費しているかを特定できる。スタンドアローンスクリプト、DevToolsスニペット、またはブックマークレットとして利用可能
- [Stats.js](https://github.com/mrdoob/stats.js) - このクラスは、コードパフォーマンスをモニタリングするためのシンプルな情報ボックスを提供する
- [PerfTests](https://github.com/kogarashisan/PerfTests) - JavaScript継承モデルのパフォーマンステスト
- [Memory-stats.js](https://github.com/paulirish/memory-stats.js) - JSヒープサイズをperformance.memoryで監視するための最小限のモニタ
- [JSPerf](https://github.com/jsperf/jsperf.com) - JavaScriptコード片の性能を比較するベンチマークのテストケースを作成・共有。更新情報は次のissueを参照。原文表記：`Follow this issue for updates: https://github.com/jsperf/jsperf.com/issues/537`
- [PHPench](https://github.com/mre/PHPench) - PHPベンチマークのグラフィカル出力：GnuPlotを使って関数の実行時間をリアルタイムでプロットし、結果の画像をエクスポートできる
- [php-bench](https://github.com/jacobbednarz/php-bench) - PHPコードブロックのベンチマークとプロファイリングを行い、パフォーマンスの影響を測定する

## ブックマークレット<a id="bookmarklets"></a>

- [Yahoo YSlow for Mobile/Bookmarklet](https://developer.yahoo.com/yslow/) - YSlowはウェブページを分析し、高性能ウェブページのルールに基づいてパフォーマンス向上の方法を提案する
- [PerfMap](https://github.com/zeman/perfmap) - Resource Timing APIを使用して、ブラウザ内で読み込まれたリソースのフロントエンドパフォーマンスヒートマップを作成するためのブックマークレット
- [DOM Monster](https://github.com/madrobby/dom-monster) - マルチプラットフォーム・マルチブラウザ対応のブックマークレット。現在のページのDOMおよびその他の機能を分析し、その健康状態を表示する
- [CSS Stress](https://andy.edinborough.org/CSS-Stress-Testing-and-Performance-Profiling) - CSSのストレステストおよびパフォーマンスプロファイリング
- [Performance-Bookmarklet](https://github.com/micmro/performance-bookmarklet) - Resource Timing API、Navigation Timing API、User-Timingで現在のページを分析する、軽量なリアルタイムWebPageTestのようなブックマークレット。Performance-Analyserという名称の[Firefox拡張機能](https://addons.mozilla.org/en-US/firefox/addon/performance-analyser/?src=cb-dl-created)も提供

## CDN

> コンテンツ配信ネットワーク（CDN）は、インターネット上の複数のデータセンターへ配置された大規模な分散サーバーシステムです。高可用性・高性能で利用者へコンテンツを配信します。CDNの一覧は[Wikipedia](http://en.wikipedia.org/wiki/Content_delivery_network#Notable_content_delivery_service_providers)を参照してください。

- [Cloudflare CDN](https://www.cloudflare.com/products/cdn/) - コンテンツ配信ネットワーク。原文では次世代技術、高速性、信頼性を強調
- [PageCDN](https://pagecdn.com/lib) - brotli-11圧縮、HTTP/2サーバープッシュ、HTTP/2の多重化改善によってコンテンツを最適化するオープンソースCDN。原文では数百のライブラリと2000以上のWordPressテーマへの対応を記載
- [jsDelivr](https://github.com/jsdelivr/jsdelivr) - Google Hosted Librariesに類似したオープンソースCDN。開発者のプロジェクトをホストし、そのファイルを誰でも自分のサイトから参照可能
- [Google Hosted Libraries](https://developers.google.com/speed/libraries/) - Googleが運営する、広く使われるオープンソースJavaScriptライブラリ向けCDN
- [CDNjs](https://cdnjs.com/) - Cloudflareが支援するJavaScript・CSS向けオープンソースCDN。jQuery、Modernizr、Bootstrapなどをホスト
- [Amazon CloudFront](https://aws.amazon.com/cloudfront/) - アマゾンが提供するコンテンツ配信ネットワーク（CDN）で、他のアマゾンサービスと統合されやすい、または独立して使用できる
- [jQuery](https://releases.jquery.com/) - MaxCDNを基盤とするjQuery安定版の公式CDN。原文では最新の安定版リリースを配信すると記載
- [UpYun CDN](http://jscdn.upai.com/) - upyunが提供するCDN（中国）
- [Bootstrap 中文网开放 CDN 服务](https://www.bootcdn.cn/) - 中国のBootstrapコミュニティが提供する公開CDN（中国、HTTPのみ）
- [Yandex CDN](https://yandex.ru/dev/jslibs/) - 広く使われるサードパーティーのJavaScript・CSSライブラリをホスト。原文ではロシアでの利用を推奨
- [CDNperf](https://www.cdnperf.com/) - JavaScript CDNを探すためのツール。原文では高速性と信頼性を強調
- [Gulp-google-cdn](https://github.com/sindresorhus/gulp-google-cdn) - スクリプト参照をGoogleCDNに置き換える

> 有料CDNを選ぶための追加情報は[CDNPlanet](http://www.cdnplanet.com/)を参照してください。

## Core Web Vitals

- [web-vitals](https://github.com/GoogleChrome/web-vitals) - ブラウザーでCore Web Vitals（LCP、FID、CLS、INP、TTFB）を計測する小型ライブラリ
- [Lighthouse](https://github.com/GoogleChrome/lighthouse) - ラボ環境でCore Web Vitalsを監査（[解析ツール](#analyzers)も参照）
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - 各コミットでCore Web Vitalsのパフォーマンス予算を守るため、CIでLighthouseを実行

## 拡張機能<a id="extensions"></a>

- [Browser Calories](https://github.com/zenorocha/browser-calories) - パフォーマンス予算を計測する拡張機能

## 生成ツール<a id="ジェネレーター"></a><a id="generators"></a>

- [AtBuild](https://github.com/jarred-sumner/atbuild) - JavaScriptを出力するJavaScriptコードを記述する生成ツール。ループの展開や、実行時の処理をコンパイルで除去するライブラリの作成に利用
- [Glue](https://github.com/jorgebastida/glue) - CSSスプライトを生成するためのシンプルなコマンドラインツール
- [Pitomba-spriter](https://github.com/pitomba/spriter) - PythonによるCSS用の動的スプライト生成ツール。Pythonコードで使えるクラスによる同期・非同期処理と、ファイル変更に応じてCSSとスプライトを更新する監視機能を提供
- [Grunt-spritesmith](https://github.com/twolfson/grunt-spritesmith) - 複数の画像をスプライトシートおよび対応するCSS変数に変換するためのGruntタスク
- [Grunt-sprite-css-replace](https://www.npmjs.com/package/grunt-sprite-css-replace) - スタイルシートから参照された画像でスプライトを生成し、参照先を新しいスプライト画像と位置へ更新するGruntタスク
- [Grunt-svg-sprite](https://www.npmjs.com/package/grunt-svg-sprite) - SVGスプライトとスタックの豊富な選択肢 — svg-spriteをラップしたGruntプラグイン。複数のSVGファイルを読み込み、最適化し、さまざまなフォーマットのSVGスプライトおよびCSSリソースを作成
- [Gulp-sprite](https://github.com/aslansky/gulp-sprite) - Gulpで画像スプライトと対応するスタイルシートを作成するタスク
- [Gulp-svg-sprites](https://github.com/shakyShane/gulp-svg-sprites) - GulpでSVGスプライトを作成するタスク
- [SvgToCSS](https://github.com/kajyr/SvgToCSS) - CSS/Sassスプライト内のSVGファイルを最適化し、レンダリングする
- [Assetgraph-sprite](https://github.com/assetgraph/assetgraph-sprite) - CSS依存グラフに基づいてスプライトを自動生成するAssetgraphのトランスフォーム
- [Sprite Cow](http://www.spritecow.com/) - スプライトシート内のスプライトの背景位置、幅、高さをコピー可能なCSSとして取得
- [CSS Sprite Generator](https://css.spritegen.com/) - CSSスプライトは複数の画像を1つのファイルに結合できる機能です
- [Sprity](https://github.com/sprity/sprity) - Retina対応、複数の出力形式、画像ディレクトリからのスプライトとスタイルファイル生成などに対応する、モジュール構成の画像スプライト生成ツール
- [Sprite Factory](https://github.com/jakesgordon/sprite-factory) - ディレクトリ内の個々の画像を1つのスプライト画像にまとめ、Webアプリで使うCSSスタイルシートも生成するRubyライブラリ

## 画像最適化<a id="image-optimizers"></a>

> 画像の不要なデータを除去するツールです。項目ごとに非可逆圧縮・可逆圧縮などの違いを記載しています。

- [Shortpixel](https://shortpixel.com/online-image-compression) - 画像を圧縮して不要なバイトを削除し、WebP/AVIFに変換
- [Grunt-smushit](https://github.com/heldr/grunt-smushit) - PNGおよびJPGの不要なバイトを削除するYahoo Smushitを用いたGruntプラグイン
- [Gulp-smushit](https://github.com/heldr/gulp-smushit) - Yahoo Smushitを使ってPNGとJPGを最適化するGulpプラグイン。smoshを基盤として実装
- [Smush it](https://www.imgopt.com/) - フォーマットに応じた最適化により、画像ファイルから不要なバイトを削除。無損失：視覚的に見た目や品質を変更せずに画像を最適化
- [Imagemin](https://github.com/imagemin/imagemin) - Node.jsによる画像の最適化
- [Sharp](https://github.com/lovell/sharp) - 多様な形式の大きな画像を、さまざまな寸法の小さなWeb向けJPEG・PNG・WebPへ変換するNode.jsモジュール
- [Gm](https://github.com/aheckmann/gm) - Node.js用のGraphicsMagickおよびImageMagick
- [ExifCleaner](https://exifcleaner.com) - ドラッグアンドドロップで画像および動画ファイルからEXIFメタデータを削除するGUIアプリ。無料かつオープンソース
- [OptiPNG](https://optipng.sourceforge.net/) - 画像ファイルを再圧縮して情報の損失なしにサイズを小さくするPNG最適化ツール
- [Grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) - GruntでPNGとJPEG画像を最小化
- [Gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) - GulpでPNG、JPEG、GIFおよびSVGを最小化するimagemin
- [Grunt-WebP](https://github.com/somerandomdude/grunt-webp) - 画像をWebPフォーマットに変換
- [Gulp-WebP](https://github.com/sindresorhus/gulp-webp) - Gulpで画像をWebPに変換
- [Imageoptim](https://imageoptim.com/mac) - 品質を犠牲にせずに画像のディスク使用量を減らし、読み込み速度を速くする無料アプリ。圧縮パラメータを最適化し、不要なメタデータおよび不要な色プロファイルを削除
- [Imager](http://github.com/imager-io/imager) - ウェブ上での画像の効率的な配布を目的とした自動画像圧縮
- [Grunt-imageoptim](https://github.com/JamieMason/grunt-imageoptim) - ImageOptim、ImageAlpha、JPEGminiを自動ビルドに組み込むGruntプラグイン
- [ImageOptim-CLI](https://github.com/JamieMason/ImageOptim-CLI) - Mac向けのImageOptim、ImageAlpha、JPEGminiを自動化し、画像のバッチ最適化を自動化されたビルドプロセスに組み込む
- [Tapnesh-CLI](https://github.com/JafarAkhondali/Tapnesh) - 複数の画像を並列で最適化するCLIツール
- [Tinypng](https://tinypng.com/) - アルファ透過を完全に保持するPNG画像の非可逆圧縮
- [Kraken Web-interface](https://kraken.io/web-interface) - 画像を最適化し、12時間ダウンロードできる状態にするWebインターフェース
- [Compressor](https://compressor.io/) - JPG、PNG、SVG、GIFに対応するオンライン画像圧縮サービス
- [mozjpeg](https://github.com/mozilla/mozjpeg) - JPEGエンコーダーの改良版
- [Jpegoptim](https://github.com/tjko/jpegoptim) - JPEGファイルを最適化・圧縮するユーティリティ
- [AdvPNG](http://www.advancemame.it/doc-advpng.html) - PNGファイルを再圧縮し、可能な限りサイズを縮小
- [Leanify](https://github.com/JayXon/Leanify) - 軽量な損失なしファイル最小化・最適化ツール
- [Trimage](https://trimage.org/) - PNGおよびJPGファイルを損失なしで最適化するクロスプラットフォームツール
- [ImageEngine](https://imageengine.io) - 画像の最適化・リサイズ・キャッシュを随時行い、モバイルにも対応するクラウドサービス
- [ImageKit.io](https://imagekit.io) - グローバル配信ネットワークとストレージを活用した、知能的なリアルタイム画像最適化および画像変換
- [Optimizt](https://github.com/343dev/optimizt) - PNG、JPEG、GIF、SVGの非可逆圧縮・可逆圧縮と、ラスター画像のAVIF・WebP版生成に対応するCLI画像最適化ツール
- [ResponsiveImage](https://responsive-image.dev/) - ViteまたはWebpackのプラグインでWebP・AVIF画像とLQIPプレースホルダーを生成し、複数のフレームワーク向け画像コンポーネントでレスポンシブ画像のマークアップを描画
- [Adaptive Images](https://adaptive-images.com/) - 画面サイズを検出し、既存の`<img>`から端末に適したサイズの画像を自動生成・キャッシュ・配信する、サーバー側のPHPツール

## 遅延読み込み<a id="lazyloaders"></a>

- [lazyload](https://github.com/vvo/lazyload) - 画像、iframe、ウィジェットの読み込みを遅らせる、単独で使えるJavaScript遅延ローダー（約1kb）
- [lozad.js](https://github.com/ApoorvSaxena/lozad.js) - 依存関係のない純粋なJavaScriptの遅延ローダー。レスポンシブ画像やiframeなどに対応し、設定可能（約0.9kb）。原文では高い性能を強調
- [quicklink](https://github.com/GoogleChromeLabs/quicklink) - ビュー領域内のリンクを事前にフェッチ（Intersection Observerを用いて）し、今後のナビゲーションを速くします

## ローダー<a id="loaders"></a>

- [HeadJS](https://github.com/headjs/headjs) - レスポンシブデザイン、機能検出、リソース読み込みに使うHEAD内のスクリプト
- [RequireJS](https://requirejs.org/) - JavaScriptファイルおよびモジュールローダー。ブラウザ内での使用に最適化されていますが、RhinoやNode.jsなどの他のJavaScript環境でも使用可能です
- [Labjs](https://github.com/getify/LABjs) - Getify Solutionsが支援するオープンソースの汎用オンデマンドJavaScriptローダー（MITライセンス）。任意の場所から、必要な時に、任意のページへJavaScriptリソースを読み込み可能
- [Defer.js](https://github.com/wessman/defer.js) - 非同期読み込みによりページのコンテンツ表示を速めるJavaScriptツール
- [InstantClick](https://github.com/dieulot/instantclick) - マウスオーバー時にページを事前に読み込むことで、サイト内のリンクが即時的に反応するように見えます
- [prerender.js](https://github.com/genderev/prerender.js) - ナビゲーションの前にページとリソースを事前に読み込むことで、ページ間の切り替えを高速化します
- [JIT](https://github.com/shootaroo/jit-grunt) - Grunt用のJIT（Just In Time）プラグインローダー。プラグインが多数ある場合でも、Gruntの読み込み時間が遅れません
- [Guess.js](https://github.com/guess-js/guess) - 分析と機械学習を用いて、予測的なプリフェッチとパフォーマンス最適化を実現します

## 指標監視<a id="metrics-monitor"></a>

- [Phantomas](https://github.com/macbre/phantomas) - PhantomJSベースのウェブパフォーマンスメトリクス収集ツールとモニタリングツール
- [Bench](https://github.com/jmervine/bench) - PhantomJSを基盤とする性能指標収集ツールPhantomasでページを計測し、結果をMongoDBに保存して組み込みサーバーで表示
- [Keepfast](https://github.com/keepfast/keepfast) - ウェブページのパフォーマンスに関連する指標をモニタリングするツール
- [GTmetrix](https://gtmetrix.com/) - ページのパフォーマンスをテストおよびモニタリングする無料ツール。ページのスコアをLighthouseで評価し、最適化のための実行可能な提案を提供します
- [Pingbreak.com](https://pingbreak.com/) - レスポンス時間アラート付きの無料サイトおよびSSLモニタリング（Slack、Twitter、Mattermost、DiscordまたはカスタムWebhook）
- [Pingdom site Speed Test](https://tools.pingdom.com/) - そのページの読み込み時間をテストし、分析し、ボトルネックを特定します
- [Dotcom-tools](https://www.dotcom-tools.com/website-speed-test) - 世界20箇所の実際のブラウザから、あなたのウェブサイトのスピードを分析します
- [WebPageTest](https://www.catchpoint.com/webpagetest) - 世界各地から実ブラウザー（IE、Chrome）と一般利用者の接続速度で無料の速度テストを実行。基本テストのほか、複数段階のトランザクション、動画記録、コンテンツブロックなどに対応。リソース読み込みのウォーターフォール図、PageSpeedによる最適化チェック、改善提案を含む診断情報を出力
- [Sitespeed.io](https://www.sitespeed.io/) - ウェブパフォーマンスのベストプラクティスに従ってサイトをチェックし、Navigation Timing APIを使ってメトリクスを収集するオープンソースツール。XMLおよびHTMLレポートを出力します
- [Grunt-phantomas](https://github.com/stefanjudis/grunt-phantomas) - GruntプラグインとしてPhantomasをラップし、フロントエンドパフォーマンスを測定します
- [Perfjankie](https://www.npmjs.com/package/perfjankie) - ブラウザーの実行時パフォーマンスに対する回帰テスト一式。[デモ](https://github.com/asciidisco/perfjankie-test)
- [BrowserView Monitoring](https://www.dotcom-monitor.com/products/web-page-monitoring/) - 世界の複数の場所から、インターネットエクスプローラー、Chrome、Firefoxでウェブページの読み込み時間を継続的にチェックします
- [DareBoost](https://www.dareboost.com/en) - リアルブラウザモニタリング。YSlow、Page Speed、多数のカスタムアドバイスを用いて、ウェブパフォーマンスと品質に関する完全なレポートを提供します
- [Perfume.js](https://github.com/Zizzamia/perfume.js) - 実ユーザーからのコアウェブビタルとその他のパフォーマンスメトリクスを収集する小さなライブラリ
- [puppeteer-webperf](https://github.com/addyosmani/puppeteer-webperf) - Puppeteerスクリプト内でウェブパフォーマンスメトリクスを収集するツール
- [Telescope](https://github.com/cloudflare/telescope) - Playwrightに基づいたクロスブラウザのウェブパフォーマンステストCLIおよびライブラリ。Chrome、Firefox、Safari、EdgeでHAR、Web Vitals、リソースタイミング、コンソールログ、スクリーンショット、フィルムストリップを収集
- [WebPageTest API Wrapper for Node.js](https://github.com/catchpoint/WebPageTest.api-nodejs) - WebPageTest API Wrapperは、Node.js向けのWebPageTest APIをモジュールおよびコマンドラインツールとしてラップしたnpmパッケージ
- [WebPerformance Report](https://webperformancereport.com/) - ECサイトやWebサイトのWebパフォーマンス・最適化状況を、Core Web Vitalsも含め毎週メールで届ける個別レポート

## 圧縮ツール<a id="minifiers"></a>

- [HTMLCompressor](https://code.google.com/archive/p/htmlcompressor/) - 構造を壊さず、余分な空白・コメント・不要な文字を削除してHTMLやXMLを最小化する小型Javaライブラリ。コマンドラインで使えるビルドも提供
- [Django-htmlmin](https://github.com/cobrateam/django-htmlmin) - PythonでHTMLを最小化するツール。HTML5の完全なサポートを提供。Django、Flask、および他のPythonウェブフレームワークに対応。静的サイトまたはデプロイスクリプト向けのコマンドラインツールも提供
- [HTMLMinifier](https://github.com/kangax/html-minifier) - 設定可能なJavaScript製HTML圧縮ツール。lintに似た機能を備える
- [Grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) - HTMLを最小化するGruntプラグイン。HTMLMinifierを使用する
- [Gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) - HTMLを最小化するGulpプラグイン。HTMLMinifierを使用する
- [Grunt-htmlcompressor](https://github.com/jney/grunt-htmlcompressor) - htmlcompressorを使ってHTMLを圧縮するGruntプラグイン
- [HTML_minifier](https://github.com/stereobooster/html_minifier) - kangax html-minifier向けのRubyのラッパー
- [HTML_press](https://github.com/stereobooster/html_press) - HTML内の余分な空白を除去して圧縮するRuby gem
- [Koa HTML Minifier](https://github.com/koajs/html-minifier) - html-minifierを使用して、あなたのHTMLレスポンスを最小化するミドルウェア。html-minifierのデフォルトオプションはすべて無効になっているため、オプションを設定しなければ何もしない
- [HTML Minifier Online](http://kangax.github.io/html-minifier/) - kangax（HTMLMinifierの開発者）によるHTML最小化ツール
- [Minimize](https://github.com/Swaagie/minimize) - node-htmlparserに基づくHTML最小化ツール。原文ではサーバー側のみ対応し、クライアント側の最小化は計画中と記載
- [Html-minifier](https://github.com/deanhume/html-minifier) - HTML、Razorビュー、Webフォームビューを最小化するためのシンプルなWindowsコマンドラインツール
- [UglifyJS2](https://github.com/mishoo/UglifyJS) - UglifyJSはJavaScriptで書かれたJavaScriptパーサー、最小化ツール、圧縮ツールまたは整形ツールキット
- [Terser](https://github.com/terser/terser) - ES6以降に対応するJavaScriptの最小化・圧縮ツール。UglifyJSの後継
- [SWC](https://swc.rs/) - JavaScript・TypeScriptのコンパイラーと最小化ツール。原文ではトランスパイル速度がBabel・Terserより大幅に速いと説明
- [CSSO](https://github.com/css/csso) - 通常の最小化に加え、CSSの構造も最適化する最小化ツール。原文では他の最小化ツールより出力サイズが小さいと説明
- [Grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) - ファイルを結合するためのGruntプラグイン
- [Grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - GruntプラグインでJavaScriptファイルを連結・最小化する
- [Clean-css](https://github.com/clean-css/clean-css) - Node.js向けCSS最小化ツール
- [Django-compressor](https://github.com/django-compressor/django-compressor) - 外部参照とインラインのJavaScript・CSSを1つのキャッシュファイルへ圧縮
- [Django-pipeline](https://github.com/jazzband/django-pipeline) - Django用のアセットパッケージングライブラリで、CSSおよびJavaScriptの連結・圧縮、組み込みのJavaScriptテンプレートサポート、オプションのデータURIによる画像およびフォントの埋め込みを提供
- [JShrink](https://github.com/tedious/JShrink) - PHPクラスでJavaScriptを最小化し、クライアントに速く配信する
- [JSCompress](http://jscompress.com/) - オンラインのJavaScript圧縮ツール
- [CSSshrink](https://github.com/stoyan/cssshrink) - 描画のクリティカルパスにあるCSSを縮小するツール
- [Grunt-cssshrink](https://github.com/JohnCashmore/grunt-cssshrink) - CSS ShrinkのGruntラッパー
- [Gulp-cssshrink](https://github.com/torrottum/gulp-cssshrink) - Gulpでcssshrinkを使用してCSSファイルを縮小する
- [Prettyugly](https://github.com/stoyan/prettyugly) - CSSコードの空白を除去、または一定の規則で空白を加えて整形
- [Grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) - Grunt用のCSS最小化ツール
- [Grunt-uncss](https://github.com/uncss/grunt-uncss) - プロジェクトから使われていないCSSを削除するGruntタスク
- [Gulp-uncss](https://github.com/ben-eb/gulp-uncss) - プロジェクトから使われていないCSSを削除するGulpタスク

## その他<a id="miscellaneous"></a>

- [Fontaine](https://github.com/unjs/fontaine) - フォントメトリクスに基づく自動フォントフォールバックにより、ウェブフォントの読み込みによって引き起こされる累積レイアウトシフト（CLS）を減らす
- [Socialite.js](http://socialitejs.com/) - 文書読み込み時、記事へのマウスオーバー時、その他のイベント時にソーシャル共有ボタンを実装・有効化
- [uCSS](https://github.com/oyvindeh/ucss) - 大規模サイトをクロールして未使用のCSSセレクターを検出。未使用CSSの削除は行わない
- [HTTPinvoke](https://github.com/jakutis/httpinvoke) - ブラウザおよびNode.js用の依存関係のないHTTPクライアントライブラリ。プロミスベースまたはNode.jsスタイルのコールバックベースAPIを備え、進行状況、テキスト、バイナリファイルのアップロード・ダウンロード、部分的なレスポンスボディ、リクエストおよびレスポンスヘッダー、ステータスコードをサポートしています
- [Critical](https://github.com/addyosmani/critical) - HTMLページにクリティカルパスのCSSを抽出・インライン化（アルファ版）
- [Csscolormin](https://github.com/stoyan/csscolormin) - CSSの色指定を最小化するユーティリティ。例：min("white"); // "#fff"へ縮小
- [Lazysizes](https://github.com/aFarkas/lazysizes) - レスポンシブ画像・通常画像、iframe、スクリプトの遅延ローダー。ユーザー操作、CSS、JavaScriptによる表示状態の変化を設定なしで検出
- [react-virtualized](https://github.com/bvaughn/react-virtualized) - 画面に表示される行を仮想化し、大きなリストや表データを効率的に描画するReactコンポーネント
- [TMI](https://github.com/addyosmani/tmi) - Too Many Images。Webページの画像データ量を調査

## SVG

- [SVGO](https://github.com/svg/svgo) - SVGベクターグラフィックス向けのNode.jsベースの最適化ツール
- [SVG OMG](https://jakearchibald.github.io/svgomg/) - SVGOMGはSVGOのGUIであり、SVGOのほとんど、あるいはすべての設定オプションを公開することを目的としています
- [Grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin) - GruntでSVGOを使用してSVGを最小化
- [Gulp-svgmin](https://www.npmjs.com/package/gulp-svgmin) - GulpでSVGOを使用してSVGを最小化
- [Scour](http://www.codedread.com/scour/) - オープンソースのPythonスクリプトでSVGファイルを積極的にクリーンアップし、ツールや作成者がドキュメントに埋め込む不要な部分を削除します
- [SVG Cleaner](https://github.com/RazrFalcon/SVGCleaner) - バッチモード、多数のクリーンアップオプション、マルチコアCPUでのスレッド処理を活用して、不要なデータを削除するSVGファイルのクリーンアップツール

## Webコンポーネント<a id="web-components"></a>

- [Polymer Bundler](https://github.com/Polymer/tools/tree/master/packages/bundler) - ネットワークの往復回数を減らすため、本番用にプロジェクトの資産をまとめるPolymer-bundlerライブラリ
- [Gulp-vulcanize](https://github.com/sindresorhus/gulp-vulcanize) - Vulcanizeを使用して、複数のWebコンポーネントを1ファイルに結合します

## Webサーバーベンチマーク<a id="web-server-benchmarks"></a>

- [HTTPerf](https://github.com/httperf/httperf) - HTTPワークロードとサーバーメトリクスの柔軟な生成により、ウェブサーバーのパフォーマンスを測定します
- [Apache JMeter](https://jmeter.apache.org/download_jmeter.cgi) - オープンソースの負荷テストツール：Javaプラットフォームアプリケーションです
- [Locust](https://locust.io/) - Pythonでユーザーの動作を定義し、数百万の同時ユーザーを再現するオープンソース負荷テストツール
- [Autoperf](https://github.com/igrigorik/autoperf) - httperfのRubyドライバーで、1つのエンドポイントまたはログの再実行を用いて負荷およびパフォーマンステストを自動化します
- [HTTPerf.rb](https://github.com/jmervine/httperfrb) - httperfのシンプルなRubyインターフェース（Rubyで記述）
- [PHP-httperf](https://github.com/jmervine/php-httperf) - HTTPerf.rbのPHP版
- [HTTPerf.js](https://github.com/jmervine/httperfjs) - HTTPerf.rbのJS版
- [HTTPerf.py](https://github.com/jmervine/httperfpy) - HTTPerf.rbのPython版
- [Gohttperf](https://github.com/jmervine/gohttperf) - HTTPerf.rbのGo版
- [wrk](https://github.com/wg/wrk) - HTTPベンチマークツール（リクエスト生成、レスポンス処理、カスタムレポートに向けたオプションのLuaスクリプトを含む）
- [beeswithmachineguns](https://github.com/newsapps/beeswithmachineguns) - 複数の小型EC2インスタンスを作成してWebアプリケーションに負荷をかけるテスト用ユーティリティ
- [k6](https://k6.io/) - 開発者向けのオープンソース負荷テストツール。CIパイプラインへの統合が容易。テストはES6 JSで記述され、HTTP/1.1、HTTP/2、WebSocketを用いてAPI、マイクロサービス、サイトのテストが可能

## Webサーバーモジュール<a id="web-server-modules"></a>

- [PageSpeed Module](https://modpagespeed.com/docs/getting-started/) - PageSpeedはサイトの読み込み時間を短くし、ページの表示速度を速くします。このオープンソースのウェブサーバーモジュールは、既存のコンテンツやワークフローを変更せずに、ページおよび関連する資産（CSS、JavaScript、画像）に対してウェブパフォーマンスのベストプラクティスを自動的に適用します。PageSpeedはApache 2.xおよびNginx 1.x向けのモジュールとして提供されています
- [WebP-detect](https://github.com/igrigorik/webp-detect) - Acceptヘッダーのコンテンツネゴシエーションを使ったWebP対応判定

## 仕様<a id="specs"></a>

- [Web Performance Working Group](https://www.w3.org/webperf/) - Rich Web Client Activityに属し、ユーザーエージェントの機能やAPIによるアプリケーション性能を計測する方法を提供する作業部会
- [Page Visibility](https://html.spec.whatwg.org/multipage/interaction.html#page-visibility) - この仕様は、ページの現在の可視性状態をプログラム的に確認できるようにし、電力消費やCPU消費を効率的に管理するウェブアプリケーションの開発を可能にするものです
- [Navigation Timing](https://w3c.github.io/navigation-timing/) - この仕様は、ドキュメントのナビゲーションに関連する高精度パフォーマンス指標データを保存・取得するための一貫したインターフェースを定義しています
- [Resource Timing](https://www.w3.org/TR/resource-timing/) - 文書内のリソースの完全なタイミング情報へWebアプリケーションからアクセスするためのインターフェースを定義
- [User Timing](https://www.w3.org/TR/user-timing/) - この仕様は、アプリケーションのパフォーマンスを測定するために、高精度のタイムスタンプにアクセスできるようにするインターフェースを定義しています
- [Performance Timeline](https://www.w3.org/TR/performance-timeline/) - この仕様は、パフォーマンスメトリックデータを保存・取得するための一貫したインターフェースを定義しています。この仕様は個別のパフォーマンスメトリックインターフェースをカバーしません
- [CSS will-change](https://drafts.csswg.org/css-will-change/) - 将来変わりそうなプロパティを`will-change`で事前に宣言し、必要になる前にユーザーエージェントが最適化を準備できるようにするCSS仕様。実際の変更時にページを速やかに更新するための仕組み
- [Resource Hints](https://www.w3.org/TR/2023/DISC-resource-hints-20230314/) - HTMLのLink要素（&lt;link&gt;）におけるdns-prefetch、preconnect、prefetch、prerenderの関係を定義。接続するオリジンと、取得・事前処理するリソースをユーザーエージェントが決める際に、開発者やリソースを生成・配信するサーバーが判断を助け、ページ性能を改善
- [RFC 9218: HTTP Prioritization](https://www.rfc-editor.org/rfc/rfc9218.html) - HTTPにおけるプロトコルレベルの優先順位決定メカニズム

## 統計<a id="stats"></a>

- [HTTP Archive](https://httparchive.org/) - ページサイズ、失敗したリクエスト、使用された技術といったウェブパフォーマンス情報を収集した恒久的なリポジトリ。このパフォーマンス情報により、ウェブがどのように構築されているかをトレンドとして見ることができ、ウェブパフォーマンス研究を行うための共通データセットを提供します
- [Chrome User Experience Report (CrUX)](https://developer.chrome.com/docs/crux/) - Chromeユーザーからのオリジンレベルのリアルユーザーパフォーマンスデータ

## その他のAwesomeリスト<a id="other-awesome-lists"></a>

- [iamakulov/awesome-webpack-perf](https://github.com/iamakulov/awesome-webpack-perf) - ウェブパフォーマンス向けのWebpackツールの選定リスト
- [imteekay/web-performance-research](https://github.com/imteekay/web-performance-research) - ウェブパフォーマンスに関する研究
