---
title: "Awesome Page Speed Metrics"
description: "ページ速度とユーザー体験を測るための概念・指標・ツール・仕様を、ラボ計測と実ユーザーのデータに分けて紹介します。"
licenseSource: "github-csabapalfi-awesome-pagespeed-metrics-readme-md"
---

# Awesome Page Speed Metrics

ページ速度の概念と、描画・操作への応答・ネットワーク・ブラウザーやサーバーのタイミングに関する指標を、ラボ計測や実ユーザー監視に使うツール・仕様・記事・コード例とともに解説します。指標の定義、ブラウザー対応、ツールの提供状況は固定原文の記載時点に基づきます。初めて学ぶ方は、まず[web.devの指標解説](https://web.dev/metrics/)を参照してください。

## 概念 <a id="concepts"></a>

### ラボデータ（合成計測） <a id="lab-data-synthetic-measurements"></a>

ツールからページへリクエストを送り、性能を評価します。ネットワークやCPUをスロットリングして現実的な条件にし、複数回実行してノイズを減らしてください。

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) - Google Chromeを基盤とするWebページの診断ツール。Chrome DevTools、Chrome拡張機能、またはコマンドラインから実行可能（ヘッドレスChromeでも）。
- [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) - GoogleがホスティングするLighthouseレポートなど。原文では無料と説明されています。
- [WebpageTest](https://www.webpagetest.org/) - ホスティングされたWebパフォーマンステスト。オープンソースプロジェクトでもあり、原文では無料と説明されています。
- [Sitespeed.io](https://www.sitespeed.io/) - オープンソースのパフォーマンスモニタリングツールのセット。
- [Calibre](https://calibreapp.com) - ウェブパフォーマンスモニタリングSaaS。
- [treo.sh](https://treo.sh/) - ウェブパフォーマンスモニタリングSaaS。
- [SpeedCurve](https://speedcurve.com/) - ウェブパフォーマンスモニタリングSaaS。
- [AwesomeTechStack](https://awesometechstack.com/) - Webサイトの監視ツール。

### フィールドデータ（Real User Monitoring - RUM） <a id="field-data-real-user-monitoring---rum"></a>

ページを訪れた実ユーザーから性能データを収集します。ユーザーのブラウザー上で動作するため実行時の負荷に注意し、新しい指標に対象ユーザーのブラウザーが対応しているか確認してください。

- [Google Analytics（GA）による性能計測](https://philipwalton.com/articles/the-google-analytics-setup-i-use-on-every-site-i-build/#performance-tracking)
- [Chrome User Experience Report (CrUX)](https://developers.google.com/web/tools/chrome-user-experience-report/)
- [読み込み中の離脱](https://developers.google.com/web/updates/2017/06/user-centric-performance-metrics#load_abandonment) - `visibilitychange`の追跡により、生存者バイアスを考慮できる。
- [SpeedCurve LUX](https://speedcurve.com/features/lux/) - リアルユーザー監視SaaS。
- [Akamai mPulse](https://www.akamai.com/uk/en/products/performance/mpulse-real-user-monitoring.jsp) - リアルユーザー監視SaaS。
- [Sematext Experience](https://sematext.com/experience/) - リアルユーザー監視SaaS。
- [Perfume.js](https://zizzamia.github.io/perfume/) - フィールドデータを収集するオープンソースライブラリ。
- [Web Vitals](https://github.com/GoogleChrome/web-vitals) - フィールドデータを収集するオープンソースライブラリ。
- [Vercel Analytics](https://vercel.com/docs/analytics) - Web Vitalsに基づくリアルユーザー監視。

### クリティカルレンダリングパス <a id="critical-rendering-path"></a>

クリティカルレンダリングパスとは、ネットワークからバイト列を受信してから画面に何かを描画するまでに起きるすべての処理です。[First Contentful Paint (FCP)](#first-contentful-paint-fcp)や[Speed Index](#speed-index)などのレンダリング指標を最適化するには、その仕組みを理解する必要があります。

- [クリティカルレンダリングパス](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)

### 長時間タスク（Long Task） <a id="long-task"></a> <a id="long-tasks"></a>

ユーザー入力を処理するブラウザーのメインスレッドは、JavaScriptなどの処理も実行します。メインスレッドを長時間占有すると、ページが応答しなくなる可能性があります。

原文では、100ms以内の視覚的変化は瞬時と感じられると説明されています。メインスレッドを50msより長く占有する処理はLong Taskとみなされ、ユーザー入力に応答できなくなる可能性があります。

[Total Blocking Time (TBT)](#total-blocking-time-tbt)や[First Input Delay (FID)](#first-input-delay-fid)などのインタラクティビティ指標を最適化するには、Long Taskとその回避方法を理解する必要があります。

- [仕様 - Long Tasks](https://w3c.github.io/longtasks/)
- [記事 - Long Tasks APIによるCPU処理の追跡](https://calendar.perfplanet.com/2017/tracking-cpu-with-long-tasks-api/)

### ユーザー中心の指標 <a id="user-centric-metrics"></a>

ユーザーとその体験に関係する指標を追跡することが重要です。体感性能を測る指標は、いくつかの重要な問いを軸に選べます。

- [資料 - ユーザー中心のパフォーマンス指標 - web.dev](https://web.dev/user-centric-performance-metrics/)
- 動作しているか？ - ナビゲーションは正常に始まり、サーバーは応答したか？（例：[FCP](https://github.com/csabapalfi/awesome-web-performance-metrics/#first-contentful-paint-fcp)）
- 有用／意味のある状態か？ - ユーザーが利用できるだけのコンテンツが描画されたか？（例：[LCP](https://github.com/csabapalfi/awesome-web-performance-metrics/#largest-contentful-paint-lcp)）
- 操作可能か？ - ページを操作できるか、それともまだ読み込み処理中か？（例：[TBT](https://github.com/csabapalfi/awesome-web-performance-metrics/#total-blocking-time-tbt)）
- 快適／滑らかか？ - 遅延やカクつきがなく、操作が滑らかで自然か？

## レンダリング指標 <a id="rendering-metrics"></a>

### First Contentful Paint (FCP)

First Contentful Paint（FCP）は、ページの読み込み開始から、コンテンツの一部が画面へ描画されるまでの時間を測ります。ここでいう「コンテンツ」は、テキスト、画像（背景画像を含む）、`<svg>`要素、白以外の`<canvas>`要素です。

- ラボ: Lighthouse
- フィールド: Chrome 60+、CrUX
- [資料 - FCP - web.dev](https://web.dev/fcp/)
- [仕様 - Paint Timing - W3C](https://w3c.github.io/paint-timing/)

### Largest Contentful Paint (LCP)

Largest Contentful Paint（LCP）は、ビューポート内で見える最大のコンテンツ要素が描画された時刻を示します。

- ラボ: Lighthouse／WPT
- フィールド: Chrome 77+
- [資料 - LCP - web.dev](https://web.dev/largest-contentful-paint/)
- [仕様 - LCP - W3C](https://github.com/WICG/largest-contentful-paint#readme)

### Cumulative Layout Shift (CLS)

レイアウトシフトは、見えている要素の位置が前後のフレーム間で変わると発生します。原文ではCLSを、ページの存続期間中に発生した予期しない各レイアウトシフトのスコアの合計として説明しています。

- ラボ: Lighthouse／WPT
- フィールド: Chrome 77+
- [資料 - CLS - web.dev](https://web.dev/cls/)
- [仕様 - Layout Instability API - W3C](https://github.com/WICG/layout-instability)

### Visually Complete

Visually Completeは、最初のナビゲーション開始から、スクロールせずに見える範囲（Above the Fold）が変化しなくなるまでの時間です（WPTでは録画した映像／スクリーンショットからページの色ヒストグラムを使って計測します）。

- ラボ: WPT
- フィールド: 該当なし
- [資料 - Visually Complete - WPT](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index)

### Speed Index

Speed Indexは、ページの内容が視覚的にどれだけ速く表示されるかを示します（小さいほど良い値です）。読み込み中の視覚的な完成度を繰り返し計測し、より早く完成状態へ近づくほど値が小さくなります。

- ラボ: Lighthouse、WPT（仕様がわずかに異なる）
- フィールド: 該当なし
- [資料 - Speed Index - web.dev](https://web.dev/speed-index/)
- [資料 - Speed Index - WPT](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index)
- [講演 - 速度の体感とLighthouse](https://ldnwebperf.org/sessions/speed-perception-and-lighthouse/)

### (Hero) Element Timing

Element Timingは、ブラウザーが特定の要素を描画した時刻を記録します。Hero要素は最大のh1、img、背景画像、またはElement Timing APIで指定した独自要素として定義できます。

- ラボ: WPT
- フィールド: Chrome 77+
- [資料 - 最後に描画されたHero要素 - WPT](https://github.com/WPO-Foundation/webpagetest/blob/master/docs/Metrics/HeroElements.md)
- [仕様 - Element Timing API](https://wicg.github.io/element-timing/)
- [記事 - Hero要素の描画タイミング - SpeedCurve](https://speedcurve.com/blog/web-performance-monitoring-hero-times/)

## インタラクティビティ指標 <a id="interactivity-metrics"></a>

### Time to Interactive (TTI)

Time to Interactiveは、ページが完全に操作可能になるまでの時間です（メインスレッドが5秒間アイドルになる状態）。Consistently Interactiveとも呼ばれますが、First InteractiveやFirst CPU Idleとは異なります。結果を解釈する際は、これらの指標を区別してください。

- ラボ: Lighthouse、WPT
- フィールド: ユーザー操作によってTTIの実測値が偏るため非推奨
- [資料 - TTI - web.dev](https://web.dev/tti/)
- [仕様 - TTI - Lighthouse](https://docs.google.com/document/d/1GGiI9-7KeY3TPqS3YT271upUVimo-XiL5mwWorDUD4c/edit)
- [記事 - TTI](https://blog.dareboost.com/en/2019/05/measuring-interactivity-time-to-interactive/)

### Total Blocking Time (TBT)

Total Blocking Time（TBT）は、First Contentful Paint（FCP）からTime to Interactive（TTI）までの間に、入力応答を妨げるほど長くメインスレッドがブロックされた時間の合計です。

- ラボ: Lighthouse
- フィールド: 該当なし
- [資料 - TBT - web.dev](https://web.dev/tbt/)

### First Input Delay (FID)

First Input Delay（FID）は、ユーザーが初めてサイトを操作してから、ブラウザーが実際に応答できるまでの時間を測ります。操作には、リンクのクリック、ボタンのタップ、JavaScript製の独自コントロールの利用などがあります。

- ラボ: 該当なし（ユーザーによるページ操作が必要なため）
- フィールド: IE9+、Safari、Chrome、Firefox（0.4KBのポリフィルを使用）
- [資料 - FID - web.dev](https://web.dev/fid/)
- [FIDのポリフィル](https://github.com/GoogleChromeLabs/first-input-delay)

### Max Potential First Input Delay

ユーザーが経験し得る最大の[First Input Delay](#first-input-delay-fid)です。基本的にはブラウザーのメインスレッド上で最長の[Long Task](#long-tasks)の所要時間に相当します。

- ラボ: Lighthouse
- フィールド: 該当なし
- [資料 - Max Potential FID - web.dev](https://web.dev/lighthouse-max-potential-fid/)

## ネットワーク指標 <a id="network-metrics"></a>

ネットワークタイミングのフィールドデータから、最適化されていないTLS設定、遅いDNSルックアップやサーバー側処理、CDN設定の問題を発見できます。[転送バイト数](#transferred-bytes)の計測については別節も参照してください。

- [記事 - ナビゲーションとリソースのタイミング](https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/)
- [仕様 - Navigation Timing](https://www.w3.org/TR/navigation-timing-2/)
- [仕様 - Resource Timing](https://www.w3.org/TR/resource-timing-2/)

### DNSレイテンシ <a id="dns-latency"></a>

- ラボ: DNS性能テストツール
- フィールド: IE9+、Safari 9+

```js
// Measuring DNS lookup time
var pageNav = performance.getEntriesByType("navigation")[0];
var dnsTime = pageNav.domainLookupEnd - pageNav.domainLookupStart;
```

### TCPおよびSSL/TLSレイテンシ <a id="tcp-and-ssltls-latency"></a>

- ラボ: 監査には[Qualys SSL Labs](https://www.ssllabs.com/ssltest/index.html)を参照
- フィールド: IE9+、Safari 9+

```js
// Quantifying total connection time
var pageNav = performance.getEntriesByType("navigation")[0];
var connectionTime = pageNav.connectEnd - pageNav.connectStart;
var tlsTime = 0; // <-- Assume 0 by default

// Did any TLS stuff happen?
if (pageNav.secureConnectionStart > 0) {
  // Awesome! Calculate it!
  tlsTime = pageNav.connectEnd - pageNav.secureConnectionStart;
}
```

### Time to First Byte (TTFB)

- ラボ: 多くのサーバー負荷テストツールが計測
- フィールド: IE9+、Safari 9+

```js
var ttfb = pageNav.responseStart - pageNav.requestStart;
```

### 転送バイト数 <a id="transferred-bytes"></a>

各種ツールでアセットのバイト数を計測できます。通常はフィールドでも値が同じためラボだけで追跡しますが、端末種別や地域に固有のページには注意してください。

原文では、自サイトとサードパーティーのJavaScriptバイト数を測ることを重視し、JavaScriptを[TTI](#time-to-interactive-tti)や[FID](#first-input-delay-fid)が高くなる主因と説明しています。

- ラボ: Lighthouse（Performance Budget）、Sitespeed.io、独自ツール
- フィールド: 該当なし。ただし通常はラボと同じ値
- [Sitespeed.io PageXray](https://www.sitespeed.io/documentation/pagexray/)
- [Lighthouseのパフォーマンス予算](https://developers.google.com/web/tools/lighthouse/audits/budgets)
- [許容できるか？：実際のWebパフォーマンス予算](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/)
- [負荷が特に大きいサードパーティースクリプト](https://github.com/patrickhulce/third-party-web)

## その他の指標 <a id="other-metrics"></a>

### Google PageSpeed Insightsスコア <a id="google-pagespeed-insights-score"></a>

- [PageSpeed Insightsについて](https://developers.google.com/speed/docs/insights/v5/about)
- [Google PageSpeedスコアの構成要素](https://medium.com/expedia-group-tech/whats-in-the-google-pagespeed-score-a5fc93f91e91)
- [Google PageSpeedの仕組み](https://calibreapp.com/blog/how-pagespeed-works/)

### User Timing

User Timing APIを使うと、ブラウザーのPerformance Timelineへアプリケーション固有のタイムスタンプを作成できます。たとえば、ページ上の特定コンポーネントでJavaScriptの読み込みが完了した時刻を測るUser Timingマークを作れます。

- ラボ: Lighthouse、WPT
- フィールド: IE 10+、Safari 11+、Chrome、Firefox
- [仕様 - User Timing](https://www.w3.org/TR/user-timing/)

### Server Timing

バックエンドサーバーのタイミング指標（データベースのレイテンシなど）を、ユーザーのブラウザーの開発者ツールまたはPerformanceServerTimingインターフェースへ公開します。

- [資料 - Server Timing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing)

### フレームレート <a id="frame-rate"></a>

フレームレートは、ブラウザーがフレームを表示できる頻度です。1フレームは、DOMイベント処理、サイズ変更、スクロール、描画、CSSアニメーションなど、イベントループ1回分の処理を表します。応答性の高い体験では一般に60fpsを目標とし、ブラウザーは約16.7msで1フレームを処理する必要があります。

- ラボ: ChromeおよびFirefox DevTools
- フィールド: 原文では、その時点でFrame Timing APIを実装したブラウザーはないと説明されています。`requestAnimationFrame`で独自のfps計測器を実装できます
- [資料 - Frame Timing API](https://developer.mozilla.org/en-US/docs/Web/API/Frame_Timing_API)
- [資料 - Chrome DevToolsでのFPS解析](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/#analyze_frames_per_second)
- [資料 - Firefox開発者ツールでのフレームレート](https://developer.mozilla.org/en-US/docs/Tools/Performance/Frame_rate)

### DOMContentLoaded

- [資料 - `DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)

### window.load

- [資料 - `window.load`](https://developer.mozilla.org/en-US/docs/Web/Events/load)
