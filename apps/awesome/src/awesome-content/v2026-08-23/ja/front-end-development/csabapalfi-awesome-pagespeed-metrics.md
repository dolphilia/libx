---
title: "csabapalfi/awesome-pagespeed-metrics"
description: "csabapalfi/awesome-pagespeed-metrics の正規スナップショット"
licenseSource: "github-csabapalfi-awesome-pagespeed-metrics-readme-md"
---

# Awesomeページ速度指標 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> ページ速度とユーザー体験を理解するための指標です。

初めて学ぶ場合は、まず[web.dev/metrics](https://web.dev/metrics/)を確認してください。

## 目次 <a id="contents"></a>



- [概念](#concepts)
  - [ラボデータ（合成計測）](#lab-data-synthetic-measurements)
  - [フィールドデータ（Real User Monitoring - RUM）](#field-data-real-user-monitoring---rum)
  - [クリティカルレンダリングパス](#critical-rendering-path)
  - [Long Task](#long-tasks)
  - [ユーザー中心の指標](#user-centric-metrics)
- [レンダリング指標](#rendering-metrics)
  - [First Contentful Paint (FCP)](#first-contentful-paint-fcp)
  - [Largest Contentful Paint (LCP)](#largest-contentful-paint-lcp)
  - [Cumulative Layout Shift (CLS)](#cumulative-layout-shift-cls)
  - [Visually Complete](#visually-complete)
  - [Speed Index](#speed-index)
  - [(Hero) Element Timing](#hero-element-timing)
- [インタラクティビティ指標](#interactivity-metrics)
  - [Time to Interactive (TTI)](#time-to-interactive-tti)
  - [Total Blocking Time (TBT)](#total-blocking-time-tbt)
  - [First Input Delay (FID)](#first-input-delay-fid)
  - [Max Potential First Input Delay](#max-potential-first-input-delay)
- [ネットワーク指標](#network-metrics)
  - [DNSレイテンシ](#dns-latency)
  - [TCPおよびSSL/TLSレイテンシ](#tcp-and-ssltls-latency)
  - [Time to First Byte (TTFB)](#time-to-first-byte-ttfb)
  - [転送バイト数](#transferred-bytes)
- [その他の指標](#other-metrics)
  - [Google PageSpeed Insights score](#google-pagespeed-insights-score)
  - [User Timing](#user-timing)
  - [Server Timing](#server-timing)
  - [フレームレート](#frame-rate)
  - [DOMContentLoaded](#domcontentloaded)
  - [window.load](#windowload)



## 概念 <a id="concepts"></a>

### ラボデータ（合成計測） <a id="lab-data-synthetic-measurements"></a>

ツールからページへリクエストを送り、性能を評価します。ネットワークやCPUをスロットリングして現実的な条件にし、複数回実行してノイズを減らしてください。

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) - Google Chromeに構築されたウェブページの診断ツール。Chrome DevTools、Chrome拡張機能、またはコマンドラインから実行可能（ヘッドレスChromeでも）。
- [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) - Googleが提供する無料かつホスティングされたLighthouseレポート（その他も）。
- [WebpageTest](https://www.webpagetest.org/) - 無料かつホスティングされたウェブパフォーマンステスト（オープンソースプロジェクトも含む）。
- [Sitespeed.io](https://www.sitespeed.io/) - オープンソースのパフォーマンスモニタリングツールのセット。
- [Calibre](https://calibreapp.com) - ウェブパフォーマンスモニタリングSaaS。
- [treo.sh](https://treo.sh/) - ウェブパフォーマンスモニタリングSaaS。
- [SpeedCurve](https://speedcurve.com/) - ウェブパフォーマンスモニタリングSaaS。
- [AwesomeTechStack](https://awesometechstack.com/) - ウェブサイトの素晴らしさをモニタリングするツール。

---

### フィールドデータ（Real User Monitoring - RUM） <a id="field-data-real-user-monitoring---rum"></a>

ページを訪れた実ユーザーから性能データを収集します。ユーザーのブラウザー上で動作するため実行時の負荷に注意し、新しい指標を対象ユーザーのブラウザーが対応しているか確認してください。

- [Performance tracking with Google Analytics (GA)](https://philipwalton.com/articles/the-google-analytics-setup-i-use-on-every-site-i-build/#performance-tracking)
- [Chrome User Experience Report (CrUX)](https://developers.google.com/web/tools/chrome-user-experience-report/)
- [Load abandonment](https://developers.google.com/web/updates/2017/06/user-centric-performance-metrics#load_abandonment) - `visibilitychange`の追跡により、生存バイアスを考慮できる。
- [SpeedCurve LUX](https://speedcurve.com/features/lux/) - リアルユーザー監視SaaS。
- [Akamai mPulse](https://www.akamai.com/uk/en/products/performance/mpulse-real-user-monitoring.jsp) - リアルユーザー監視SaaS。
- [Sematext Experience](https://sematext.com/experience/) - リアルユーザー監視SaaS。
- [Perfume.js](https://zizzamia.github.io/perfume/) - 現場データを収集するオープンソースライブラリ。
- [Web Vitals](https://github.com/GoogleChrome/web-vitals) - 現場データを収集するオープンソースライブラリ。
- [Vercel Analytics](https://vercel.com/docs/analytics) - Web Vitalsに基づくリアルユーザー監視。

### クリティカルレンダリングパス <a id="critical-rendering-path"></a>

クリティカルレンダリングパスとは、**ネットワークからバイト列を受信してから画面に何かを描画するまでに起きるすべての処理**です。[First Contentful Paint (FCP)](#first-contentful-paint-fcp)や[Speed Index](#speed-index)などのレンダリング指標を最適化するには、その仕組みを理解する必要があります。

- [Critical rendering path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)

### Long Task <a id="long-tasks"></a>

ユーザー入力を処理するブラウザーのメインスレッドは、JavaScriptなどの処理も実行します。メインスレッドを長時間占有すると、ページが応答しなくなる可能性があります。

ユーザーは100ms以内の視覚的変化を瞬時と感じます。メインスレッドを**50msより長く占有する処理はLong Taskとみなされ**、ユーザー入力に応答できなくなる可能性があります。

[Total Blocking Time (TBT)](#total-blocking-time-tbt)や[First Input Delay (FID)](#first-input-delay-fid)などのインタラクティビティ指標を最適化するには、Long Taskとその回避方法を理解する必要があります。

- [Spec - Long Tasks](https://w3c.github.io/longtasks/)
- [Blogpost - Tracking CPU with Long Tasks API](https://calendar.perfplanet.com/2017/tracking-cpu-with-long-tasks-api/)

### ユーザー中心の指標 <a id="user-centric-metrics"></a>

ユーザーとその体験に関係する指標を追跡することが重要です。体感性能を測る指標は、いくつかの重要な問いを軸に選べます。

- [Docs - User-centric Performance Metrics - web.dev](https://web.dev/user-centric-performance-metrics/)
- 動作しているか？ - ナビゲーションは正常に始まり、サーバーは応答したか？（例：[FCP](https://github.com/csabapalfi/awesome-web-performance-metrics/#first-contentful-paint-fcp))
- 有用／意味のある状態か？ - ユーザーが利用できるだけのコンテンツが描画されたか？（例：[LCP](https://github.com/csabapalfi/awesome-web-performance-metrics/#largest-contentful-paint-lcp))
- 操作可能か？ - ページを操作できるか、それともまだ読み込み処理中か？（例：[TBT](https://github.com/csabapalfi/awesome-web-performance-metrics/#total-blocking-time-tbt))
- 快適／滑らかか？ - 遅延やカクつきがなく、操作が滑らかで自然か？

---

## レンダリング指標 <a id="rendering-metrics"></a>

### First Contentful Paint (FCP) <a id="first-contentful-paint-fcp"></a>

First Contentful Paint（FCP）は、ページの読み込み開始から、コンテンツの一部が画面へ描画されるまでの時間を測ります。ここでいう「コンテンツ」は、テキスト、画像（背景画像を含む）、`<svg>`要素、白以外の`<canvas>`要素です。

- ラボ: Lighthouse
- フィールド: Chrome 60+、CrUX
- [Docs - FCP - web.dev](https://web.dev/fcp/)
- [Spec - Paint Timing - W3C](https://w3c.github.io/paint-timing/)

### Largest Contentful Paint (LCP) <a id="largest-contentful-paint-lcp"></a>

Largest Contentful Paint（LCP）は、ビューポート内で見える最大のコンテンツ要素が描画された時刻を示します。

- ラボ: Lighthouse／WPT
- フィールド: Chrome 77+
- [Docs - LCP - web.dev](https://web.dev/largest-contentful-paint/)
- [Spec - LCP - W3C](https://github.com/WICG/largest-contentful-paint#readme)

### Cumulative Layout Shift (CLS) <a id="cumulative-layout-shift-cls"></a>

レイアウトシフトは、見えている要素の位置が前後のフレーム間で変わると発生します。CLSは、ページの存続期間中に発生した予期しない各レイアウトシフトのスコアを合計します。

- ラボ: Lighthouse／WPT
- フィールド: Chrome 77+
- [Docs - CLS - web.dev](https://web.dev/cls/)
- [Spec - Layout Instability API - W3C](https://github.com/WICG/layout-instability)

### Visually Complete <a id="visually-complete"></a>

Visually Completeは、最初のナビゲーション開始から、**ページの表示領域（Above the Fold）が変化しなくなるまで**の時間です（WPTでは録画した映像／スクリーンショットからページの色ヒストグラムを使って計測します）。

- ラボ: WPT
- フィールド: 該当なし
- [Docs - Visually Complete - WPT](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index)

### Speed Index <a id="speed-index"></a>

Speed Indexは、**ページの内容が視覚的にどれだけ速く表示されるか**を示します（小さいほど良い値です）。読み込み中の視覚的な完成度を繰り返し計測し、より早く完成状態へ近づくほど値が小さくなります。

- ラボ: Lighthouse、WPT（仕様がわずかに異なる）
- フィールド: 該当なし
- [Docs - Speed Index - web.dev](https://web.dev/speed-index/)
- [Docs - Speed Index - WPT](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index)
- [Talk - Speed Perception and Lighthouse](https://ldnwebperf.org/sessions/speed-perception-and-lighthouse/)

### (Hero) Element Timing <a id="hero-element-timing"></a>

Element Timingは、ブラウザーが**特定の要素を描画した時刻**を記録します。Hero要素は最大のh1、img、背景画像、またはElement Timing APIで指定した独自要素として定義できます。

- ラボ: WPT
- フィールド: Chrome 77+
- [Docs - Last Painted Hero - WPT](https://github.com/WPO-Foundation/webpagetest/blob/master/docs/Metrics/HeroElements.md)
- [Spec - Element Timing API](https://wicg.github.io/element-timing/)
- [Blogpost - Hero Element Timing - SpeedCurve](https://speedcurve.com/blog/web-performance-monitoring-hero-times/)

---

## インタラクティビティ指標 <a id="interactivity-metrics"></a>

### Time to Interactive (TTI) <a id="time-to-interactive-tti"></a>

Time to Interactiveは、**ページが完全に操作可能になるまでの時間**です（メインスレッドが5秒間アイドルになる状態）。Consistently Interactiveとも呼ばれますが、First InteractiveやFirst CPU Idleとは異なります（特に混同されやすい指標です）。

- ラボ: Lighthouse、WPT
- フィールド: ユーザー操作によってTTIの実測値が偏るため非推奨
- [Docs - TTI - web.dev](https://web.dev/tti/)
- [Spec - TTI - Lighthouse](https://docs.google.com/document/d/1GGiI9-7KeY3TPqS3YT271upUVimo-XiL5mwWorDUD4c/edit)
- [Blogpost - TTI](https://blog.dareboost.com/en/2019/05/measuring-interactivity-time-to-interactive/)

### Total Blocking Time (TBT) <a id="total-blocking-time-tbt"></a>

Total Blocking Time（TBT）は、First Contentful Paint（FCP）からTime to Interactive（TTI）までの間に、入力応答を妨げるほど長くメインスレッドがブロックされた時間の合計です。

- ラボ: Lighthouse
- フィールド: 該当なし
- [Docs - TBT - web.dev](https://web.dev/tbt/)

### First Input Delay (FID) <a id="first-input-delay-fid"></a>

First Input Delay（FID）は、**ユーザーが初めてサイトを操作してから、ブラウザーが実際に応答できるまでの時間**を測ります。操作には、リンクのクリック、ボタンのタップ、JavaScript製の独自コントロールの利用などがあります。

- ラボ: 該当なし（ユーザーによるページ操作が必要なため）
- フィールド: IE9+、Safari、Chrome、Firefox（0.4KBのpolyfillを使用）
- [Docs - FID - web.dev](https://web.dev/fid/)
- [Polyfill - FID](https://github.com/GoogleChromeLabs/first-input-delay)

### Max Potential First Input Delay <a id="max-potential-first-input-delay"></a>

ユーザーが経験し得る最大の[First Input Delay](#first-input-delay-fid)です。基本的にはブラウザーのメインスレッド上で最長の[Long Task](#long-tasks)の所要時間に相当します。

- ラボ: Lighthouse
- フィールド: 該当なし
- [Docs - Max Potential FID - web.dev](https://web.dev/lighthouse-max-potential-fid/)

---

## ネットワーク指標 <a id="network-metrics"></a>

ネットワークタイミングのフィールドデータから、最適化されていないTLS設定、遅いDNSルックアップやサーバー側処理、CDN設定の問題を発見できます。[転送バイト数](#transferred-bytes)の計測については別節も参照してください。

- [Blogpost - Navigation and Resource Timing](https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/)
- [Spec - Navigation Timing](https://www.w3.org/TR/navigation-timing-2/)
- [Spec - Resource Timing](https://www.w3.org/TR/resource-timing-2/)

### DNSレイテンシ <a id="dns-latency"></a>

- ラボ: DNS性能テストツール
- フィールド: IE9+、Safari 9+

```js
// Measuring DNS lookup time
var pageNav = performance.getEntriesByType("navigation")[0];
var dnsTime = pageNav.domainLookupEnd - pageNav.domainLookupStart;
```

### TCPおよびSSL/TLSレイテンシ <a id="tcp-and-ssltls-latency"></a>

- ラボ: 監査には[Qualys SSL Labs](https://www.ssllabs.com/ssltest/index.html)审计用
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

### Time to First Byte (TTFB) <a id="time-to-first-byte-ttfb"></a>

- ラボ: 多くのサーバー負荷テストツールが計測
- フィールド: IE9+、Safari 9+

```js
var ttfb = pageNav.responseStart - pageNav.requestStart;
```

### 転送バイト数 <a id="transferred-bytes"></a>

各種ツールでアセットのバイト数を計測できます。通常はフィールドでも値が同じためラボだけで追跡しますが、端末種別や地域に固有のページには注意してください。

自サイトとサードパーティーのJavaScriptバイト数を測ることは重要です。JavaScriptは[TTI](#time-to-interactive-tti)や[FID](#first-input-delay-fid)が高くなる主因だからです。

- ラボ: Lighthouse（Performance Budget）、Sitespeed.io、独自ツール
- フィールド: 該当なし。ただし通常はラボと同じ値
- [Sitespeed.io PageXray](https://www.sitespeed.io/documentation/pagexray/)
- [Lighthouse Performance Budgets](https://developers.google.com/web/tools/lighthouse/audits/budgets)
- [Can You Afford It?: Real-world Web Performance Budgets](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/)
- [Which third party scripts are most excessive](https://github.com/patrickhulce/third-party-web)

---

## その他の指標 <a id="other-metrics"></a>

### Google PageSpeed Insightsスコア <a id="google-pagespeed-insights-score"></a>

- [About PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about)
- [What's in the Google PageSpeed score](https://medium.com/expedia-group-tech/whats-in-the-google-pagespeed-score-a5fc93f91e91)
- [How Google Pagespeed works](https://calibreapp.com/blog/how-pagespeed-works/)

### User Timing <a id="user-timing"></a>

User Timing APIを使うと、ブラウザーのPerformance Timelineへアプリケーション固有のタイムスタンプを作成できます。たとえば、ページ上の特定コンポーネントでJavaScriptの読み込みが完了した時刻を測るUser Timingマークを作れます。

- ラボ: Lighthouse、WPT
- フィールド: IE 10+、Safari 11+、Chrome、Firefox
- [Spec - User Timing](https://www.w3.org/TR/user-timing/)

### Server Timing <a id="server-timing"></a>

バックエンドサーバーのタイミング指標（データベースのレイテンシなど）を、ユーザーのブラウザーの開発者ツールまたはPerformanceServerTimingインターフェースへ公開します。

- [Docs - Server Timing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing)

### フレームレート <a id="frame-rate"></a>

フレームレートは、**ブラウザーがフレームを表示できる頻度**です。1フレームは、DOMイベント処理、サイズ変更、スクロール、描画、CSSアニメーションなど、イベントループ1回分の処理を表します。応答性の高い体験では一般に60fpsを目標とし、ブラウザーは約16.7msで1フレームを処理する必要があります。

- ラボ: ChromeおよびFirefox DevTools
- フィールド: Frame Timing APIを実装したブラウザーはまだありませんが、`requestAnimationFrame`で独自のfps計測器を実装できます
- [Docs - Frame Timing API](https://developer.mozilla.org/en-US/docs/Web/API/Frame_Timing_API)
- [Docs - Chrome Devtools - FPS](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/#analyze_frames_per_second)
- [Docs - Firefox Developer Tools - Frame rate](https://developer.mozilla.org/en-US/docs/Tools/Performance/Frame_rate)

### DOMContentLoaded

- [Docs - `DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)

### window.load

- [Docs - `window.load`](https://developer.mozilla.org/en-US/docs/Web/Events/load)

## ライセンス <a id="license"></a>

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲で、Csaba Palfiは本作品に関するすべての著作権および関連する権利を放棄しています。
