---
title: "diegocard/awesome-html5"
description: "diegocard/awesome-html5の正規スナップショット"
licenseSource: "github-diegocard-awesome-html5-readme-md"
---

Awesome HTML5 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Build Status](https://api.travis-ci.org/diegocard/awesome-html5.svg?branch=master)](https://travis-ci.org/diegocard/awesome-html5)
=============

優れた HTML5 リソースのキュレーション済みリスト。[awesome-php](https://github.com/ziadoz/awesome-php) と [awesome-python](https://github.com/vinta/awesome-python) から着想を得ています。

## 目次
- [記事と標準](#articles-and-standards)
- [マルチメディア機能](#multimedia-capabilities)
  - [Audio](#audio)
  - [メディアキャプチャ](#media-capture)
  - [ピクチャーインピクチャー](#picture-in-picture)
  - [音声合成](#speech-synthesis)
  - [音声認識](#voice-recognition)
  - [仮想現実 (VR)](#virtual-reality)
  - [ウェブアニメーション](#web-animations)
- [要素](#elements)
  - [Canvas](#canvas)
  - [Head](#head)
  - [セクショニング](#sectioning)
  - [メディア要素](#media-elements)
  - [フォーム](#forms)
  - [Time](#time)
  - [WebVTT](#webtt)
  - [HTML Imports](#html-imports)
- [開発 API](#development-apis)
  - [Permissions](#permissions)
  - [Geolocation](#geolocation)
  - [暗号化](#cryptography)
  - [File](#file)
  - [フレームタイミング](#frame-timing)
  - [requestIdleCallback](#requestidlecallback)
  - [requestAnimationFrame](#requestanimationframe)
  - [ウェブ決済](#web-payments)
- [セマンティクス](#semantics)
- [アクセシビリティ](#accessibility)
- [DOM 管理](#dom-management)
  - [Shadow DOM](#shadow-dom)
  - [データバインディング](#data-binding)
  - [Web Components](#web-components)
- [プログレッシブウェブアプリ](#progressive-web-apps)
  - [Service Workers](#service-workers)
  - [オフラインキャッシュ](#offline-caching)
  - [プッシュ通知](#push-notifications)
- [クライアントサイドストレージ](#client-side-storage)
- [パフォーマンス](#performance)
- [モバイル](#mobile)
- [通信と相互運用性](#communications-and-interoperability)
  - [Web Sockets](#web-sockets)
  - [WebRTC](#webrtc)
- [Web Workers](#web-workers)
- [WebGL](#webgl)
- [ブラウザー互換性](#browser-compatibility)
- [書籍](#books)
- [ゲーム開発](#game-development)
- [ブートキャンプ](#bootcamp)
- [動画と基調講演](#videos-and-keynotes)
- [ウェブサイトとリソース](#websites-and-resources)
  - [Websites](#websites)
  - [週刊ニュース](#weekly-news)
  - [Twitter](#twitter)
- [貢献方法](#contributing)

## 記事と標準

* [HTML 5.3](https://w3c.github.io/html/) - 現在の HTML5 仕様
* [プログレッシブエンハンスメント](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/)
* [拡張可能なウェブのマニフェスト](https://extensiblewebmanifesto.org/)
* [W3C による HTML5 と HTML4 の違い](https://www.w3.org/TR/html5-diff/)

## マルチメディア機能

### Audio

* [Web Audio API 入門](https://www.html5rocks.com/en/tutorials/webaudio/intro/?redirect_from_locale=es)
* [MDN の Web Audio API](https://developer.mozilla.org/es/docs/Web_Audio_API)
* [HTML5 でギターチューナーを作る](https://jonathan.bergknoff.com/journal/making-a-guitar-tuner-html5)
* [Web Audio API・React によるオーディオ可視化](https://www.twilio.com/blog/audio-visualisation-web-audio-api--react)

### メディアキャプチャ

* [HTML5 でオーディオ・動画をキャプチャする](https://www.html5rocks.com/es/tutorials/getusermedia/intro/)
* [メディアキャプチャ API の使用](https://www.sitepoint.com/using-the-media-capture-api/)

### ピクチャーインピクチャー

* [Chrome の新しい Picture in Picture API](https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture)

### 音声合成

* [HTML5 Speech Synthesis API 入門](http://creative-punch.net/2014/10/intro-html5-speech-synthesis-api/)
* [もう一つの役立つ入門](https://shapeshed.com/html5-speech-recognition-api/)

### 音声認識

* [Web Speech API デモ](https://www.google.com/intl/en/chrome/demos/speech.html)
* [Web Speech API の使用](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
* [Web Speech API を試す](https://www.sitepoint.com/experimenting-web-speech-api/)
* [無料音声認識ライブラリ (annyang)](https://www.talater.com/annyang/)

### 仮想現実

* [Firefox Reality が利用可能に](https://blog.mozilla.org/blog/2018/09/18/firefox-reality-now-available/)

### ウェブアニメーション

* [ウェブアニメーション入門](http://danielcwilson.com/blog/2015/07/animations-intro/)
* [Web Animations API を使うべきとき](http://danielcwilson.com/blog/2016/08/why-waapi/)

## 要素

### Canvas

* [W3 Schools の簡潔な説明](https://www.w3schools.com/tags/tag_canvas.asp)
* [MDN のチュートリアル](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
* [各種チュートリアル](https://www.html5canvastutorials.com/)
* [チートシート](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html)

### Head

* [ページの HEAD 要素に入るものの一覧](https://gethead.info/)

### セクショニング

* [HTML5 セクショニング要素の使い方](https://blog.teamtreehouse.com/use-html5-sectioning-elements)

### メディア要素

* 音声と動画
  - [audio tag from W3Schools](https://www.w3schools.com/tags/tag_audio.asp)
  - [video tag from W3 Schools](https://www.w3schools.com/tags/tag_video.asp)
  - [Tutorial from MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - [Capturing audio and video in HTML5](https://www.html5rocks.com/en/tutorials/getusermedia/intro/)
* embed タグ
  - [Brief description from W3 Schools](https://www.w3schools.com/tags/tag_embed.asp)
* source タグ
  - [Brief description from W3 Schools](https://www.w3schools.com/tags/tag_source.asp)
* track タグ
  - [Brief description from W3 Schools](https://www.w3schools.com/tags/tag_track.asp)

### フォーム

* [MDN による HTML5 のフォーム変更](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)
* [HTML フォーム](https://www.w3schools.com/html/html_forms.asp)

### Details

* [Details・Summary 要素の使い方](https://blog.teamtreehouse.com/use-details-summary-elements)
* [Details 要素 polyfill](https://www.smashingmagazine.com/2014/11/complete-polyfill-html5-details-element/)

### Time

* [Time 要素ガイド](https://www.sitepoint.com/html5-time-element-guide/)

### WebVTT

* [W3C の最初の草案](http://www.w3.org/TR/2014/WD-webvtt1-20141113/)

### HTML Imports

* [HTML import 入門](https://www.webcomponents.org/community/articles/introduction-to-html-imports)

## 開発 API

### 権限

* [Google によるウェブ向け Permissions API](https://developers.google.com/web/updates/2015/04/permissions-api-for-the-web)

### Geolocation

* [Geolocation の使用](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
* [HTML5 アプリ: Geolocation による位置特定](https://code.tutsplus.com/tutorials/html5-apps-positioning-with-geolocation--mobile-456)

### 暗号化

* [Web Cryptography API 草案](http://www.w3.org/TR/WebCryptoAPI/)
* [ウェブ暗号化サポート表](http://diafygi.github.io/webcrypto-examples/)
* [Window.crypto](https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto)
* [W3C による暗号化の次のステップ](http://www.w3.org/2012/webcrypto/webcrypto-next-workshop/report.html)

### ファイル

* [ウェブアプリケーションからファイルを使う（MDN）](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
* [JavaScript でローカルファイルを読む](https://www.html5rocks.com/en/tutorials/file/dndfiles/)
* [File API 草案](https://w3c.github.io/FileAPI/)
* [File System API](http://www.w3.org/TR/file-system-api/)

### フレームタイミング

* [Google developers の動画](https://www.youtube.com/watch?v=4zoC3eaa9z0)
* [W3C の草案](https://w3c.github.io/frame-timing/)

### requestIdleCallback

* [Google developers の記事](https://developers.google.com/web/updates/2015/08/using-requestidlecallback)

### requestAnimationFrame

* [requestAnimationFrame の使用（CSS Tricks）](https://css-tricks.com/using-requestanimationframe/)
* [Paul Irish による優れた記事](https://medium.com/@paul_irish/requestanimationframe-scheduling-for-nerds-9c57f7438ef4#.9gev5fdub)

### ウェブ決済

* [Web payments API の概要](https://developers.google.com/web/fundamentals/payments/)

## セマンティクス

* [W3Schools のセマンティック要素](https://www.w3schools.com/html/html5_semantic_elements.asp)
* [MDN 文書の HTML5 セクションとアウトライン](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
* [Smashing Magazine の HTML5 セマンティクス](https://www.smashingmagazine.com/2011/11/html5-semantics/)
* [W3C・Opera のあまり知られていないセマンティック要素](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)

## アクセシビリティ

* [Google fundamentals によるアクセシビリティの優れた入門](https://developers.google.com/web/fundamentals/accessibility/)
* [ウェブ開発者向けアクセシビリティチェックリスト](https://webaim.org/standards/wcag/checklist)
* [MDN の ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
* [優れたアクセシビリティスタイルガイド](https://a11y-style-guide.com/style-guide/)
* [認知的差異のためのデザイン](https://alistapart.com/article/designing-for-cognitive-differences)
* [HTML 要素のスクリーンリーダー対応に関するガイド](https://thepaciellogroup.github.io/AT-browser-tests/)
* [ウェブサイト向けアクセシビリティテストツール上位 25](https://dynomapper.com/blog/27-accessibility-testing/246-top-25-awesome-accessibility-testing-tools-for-websites)
* [W3 のウェブアクセシビリティ評価ツール一覧](http://www.w3.org/WAI/ER/tools/)
* [Pa11y — 自動アクセシビリティテスト](http://pa11y.org/)
* [HTML の ARIA](https://developer.paciellogroup.com/blog/2014/10/aria-in-html-there-goes-the-neighborhood/)
* [アクセシブルでレスポンシブな HTML5 動画プレーヤー](https://2017.ind.ie/blog/accessible-video-player/)

## DOM 管理

### Shadow DOM

* [Shadow DOM v1: 自己完結型ウェブコンポーネント](https://developers.google.com/web/fundamentals/web-components/shadowdom)
* [Shadow DOM v1 の新機能（例による解説）](https://hayato.io/2016/shadowdomv1/)

### データバインディング

* [Object.observe() によるデータバインディング革命](https://www.html5rocks.com/en/tutorials/es7/observe/)

### Web Components

* [Custom elements v1: 再利用可能なウェブコンポーネント](https://developers.google.com/web/fundamentals/web-components/customelements)
* [ウェブコンポーネントの力](https://hacks.mozilla.org/2018/11/the-power-of-web-components/)
* [Polymer プロジェクト](https://github.com/polymer)
* [Polymer のクイック入門](https://www.webcomponents.org/community/articles/a-quick-polymer-introduction)
* [Polymer・ES6 クラスを使ったウェブコンポーネントの構築](https://www.polymer-project.org/blog/es6)
* [Web Components の神話を解く](http://www.backalleycoder.com/2016/08/26/demythstifying-web-components/)
* [HTML import](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)
* [Yeoman・Polymer を使うウェブアプリ構築](https://www.html5rocks.com/en/tutorials/webcomponents/yeoman/)

## プログレッシブウェブアプリ

* [PWA 入門](https://developers.google.com/web/progressive-web-apps/)
* [プログレッシブウェブアプリケーションの包括的ガイド](https://www.smashingmagazine.com/2018/11/guide-pwa-progressive-web-applications/)
* [プログレッシブウェブアプリのビジネスケース](https://cloudfour.com/thinks/the-business-case-for-progressive-web-apps/)

### Service Workers

* [Service Worker の基礎](https://developers.google.com/web/fundamentals/primers/service-workers/)
* [ServiceWorkies — ゲームで SW を学ぶ](https://serviceworkies.com/)
* [Service Worker Cookbook](https://serviceworke.rs/)
* [Service Worker によるオフラインコンテンツ](https://www.madebymike.com.au/writing/service-workers/)
* [Service Worker の作成: ケーススタディ（Smashing Magazine）](https://www.smashingmagazine.com/2016/02/making-a-service-worker/)
* [Service Worker の解説](https://github.com/w3c/ServiceWorker/blob/master/explainer.md)
* [Service Worker ライブラリ、ツール活用のヒント](https://www.youtube.com/watch?v=IIRj8DftkqE)
* [ServiceWorker: ウェブプラットフォームの革命](https://ponyfoo.com/articles/serviceworker-revolution)

### オフラインキャッシュ

* [Offline Cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/)
* [即時ロードのオフラインファースト（Progressive Web App Summit 2016）](https://www.youtube.com/watch?v=qDJAz3IIq18)
* [プログレッシブウェブアプリのオフラインストレージ（Addy Osmani の記事）](https://medium.com/dev-channel/offline-storage-for-progressive-web-apps-70d52695513c#.jsbxgywzz)
* [Application Cache 利用の初心者向けガイド](https://www.html5rocks.com/en/tutorials/appcache/beginner/)

### プッシュ通知

* [Web Push Notifications（Google の Web fundamentals）](https://developers.google.com/web/fundamentals/push-notifications/)
* [Push API W3C 草案](http://w3c.github.io/push-api/)
* [Notifications API 仕様](https://notifications.spec.whatwg.org/)

## クライアントサイドストレージ

* [クライアントサイドストレージ](https://www.html5rocks.com/en/tutorials/offline/storage/)
* [Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/)
* [IndexedDB 入門](https://www.codemag.com/Article/1411041)
* [実世界のオフラインデータストレージ](https://code.tutsplus.com/tutorials/real-world-off-line-data-storage--net-34063)
* [ローカルストレージチュートリアル](https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Overlay_Extensions/XUL_School/Local_Storage)

## パフォーマンス

* [Accelerated Mobile Pages (AMP)](https://www.ampproject.org/learn/overview/)
* [Google developers のベストプラクティス](https://developers.google.com/speed/docs/insights/rules)
* [Google Web Fundamentals によるパフォーマンス最適化](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)
* [Resource hints 草案（preconnect・preload）](http://www.w3.org/TR/2014/WD-resource-hints-20141021/)
* [プリフェッチと事前レンダリング](https://medium.com/@luisvieira_gmr/html5-prefetch-1e54f6dda15d)
* [画像圧縮](https://www.html5rocks.com/en/tutorials/speed/img-compression/)
* [テキスト圧縮](https://www.html5rocks.com/en/tutorials/speed/txt-compression/)
* [Resource timing 仕様](http://www.w3.org/TR/resource-timing/)

## モバイル

* [Web App Manifest（Google の fundamentals）](https://developers.google.com/web/fundamentals/web-app-manifest/)
* [ウェブアプリケーションのフィールドガイド](https://www.html5rocks.com/webappfieldguide/toc/index/)
* [Apache Cordova チュートリアル](http://ccoenraets.github.io/cordova-tutorial/)
* [PhoneGap をゼロから学ぶ](https://code.tutsplus.com/tutorials/phonegap-from-scratch-introduction--mobile-9171)
* [モバイルウェブアプリのベストプラクティス](https://www.html5rocks.com/en/tutorials/speed/quick/)
* [Kendo UI でモバイルアプリを構築](https://docs.telerik.com/kendo-ui/controls/hybrid/introduction)
* [HTML5 Vibration API](https://code.tutsplus.com/tutorials/html5-vibration-api--mobile-22585)
* [HTML5 Battery Status API](https://code.tutsplus.com/tutorials/html5-battery-status-api--mobile-22795)
* [HTML5 Battery Status API のプライバシー分析](https://eprint.iacr.org/2015/616.pdf)
* [HTML5 Network Information API](https://code.tutsplus.com/tutorials/html5-network-information-api--cms-21598)
* [Sencha Touch チュートリアル](https://docs.sencha.com/)

## 通信と相互運用性

### Web Sockets

* [WebSocket の紹介](https://www.html5rocks.com/en/tutorials/websockets/basics/)
* [HTML5 WebSocket について](https://www.websocket.org/aboutwebsocket.html)
* [HTML5 Web Sockets API](http://www.tutorialspark.com/html5/HTML5_WebSockets.php)

### WebRTC

* [WebRTC とは何か、どのように動作するか](https://www.innoarchitech.com/what-is-webrtc-and-how-does-it-work/)
* [WebRTC を簡単にする](https://blog.carbonfive.com/2014/10/16/webrtc-made-simple/)
* [WebRTC データチャネルチュートリアル](https://www.html5rocks.com/en/tutorials/webrtc/datachannels/)
* [MDN の WebRTC データチャネル](https://developer.mozilla.org/en-US/docs/Games/Techniques/WebRTC_data_channels)

## Web Workers

* [Web Worker の基礎](https://www.html5rocks.com/en/tutorials/workers/basics/)
* [Web Worker はどれほど高速か？](https://hacks.mozilla.org/2015/07/how-fast-are-web-workers/)
* [MDN の Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
* [Web Workers 入門](https://code.tutsplus.com/tutorials/getting-started-with-web-workers--net-27667)

## WebGL

* [WebGL の基礎](https://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/)

## ブラウザー互換性

* [使いたい](http://www.iwanttouse.com/)
* [Can I use...](https://caniuse.com/)
* [W3C 品質ツール](http://w3c.github.io/developers/tools/)
* [HTML5 テスト](http://beta.html5test.com/)
* [HTML5 デモ](https://bestvpn.org/html5demos/)

## 書籍

* [Dive Into HTML5](http://diveinto.html5doctor.com/)
* [HTML5: Up and Running](https://www.amazon.com/HTML5-Running-Dive-Future-Development/dp/0596806027)
* [HTML5 Filesystem API を使う](http://shop.oreilly.com/product/0636920021360.do)
* [HTML5 ゲーム開発の洞察](https://www.apress.com/us/book/9781430266976)
* [Web Design Playground: HTML & CSS をインタラクティブに学ぶ](https://www.manning.com/books/web-design-playground)

## ゲーム開発

* [Mozilla Hacks による HTML5 ゲーム開発入門](https://hacks.mozilla.org/2013/09/getting-started-with-html5-game-development/)
* [Mozilla による HTML5 ゲーム開発動画シリーズ](https://hacks.mozilla.org/2016/02/html-5-game-development-video-series/)
* [情報、ニュース、チュートリアル](http://html5gamedevelopment.com/)
* [HTML5 ゲーム開発の 380 超リソース](https://html5-game-development.zeef.com/andre.antonio.schmitz)
* オープンソース JavaScript ゲームエンジン
  - [Pixi.js](https://github.com/pixijs/pixi.js)
  - [Phaser](https://github.com/photonstorm/phaser)
  - [MelonJS](https://github.com/melonjs/melonJS)
  - [Kiwi.js](https://github.com/gamelab/kiwi.js)
  - [Crafty](https://github.com/craftyjs/Crafty)
  - [PhysicsJS](https://github.com/wellcaffeinated/PhysicsJS)
  - [Stage.js](https://github.com/shakiba/stage.js)
  - [Cocos2d](https://github.com/cocos2d/cocos2d-html5)

## ブートキャンプ
*[オンラインで無料のコーディング学習](https://www.freecodecamp.org/)
*[無料オンラインコース](https://www.khanacademy.org/)

## 動画と基調講演

* [HTML5 Developer Conference](https://html5devconf.com/videos.html)
* [Polymer: 宣言的、カプセル化、再利用可能なコンポーネント](https://www.youtube.com/watch?v=DH1vTVkqCDQ)
* [モバイルウェブを高速・高機能・美しくする](https://www.youtube.com/watch?v=EXjPsvwIDwU)
* [Dart: 今日の未来の HTML！](https://www.youtube.com/watch?v=euCNWhs7ivQ)

## ウェブサイトとリソース

### ウェブサイト

* [HTML 公式リファレンス](https://webplatform.github.io/docs/Main_Page/index.html)（wiki のようにコンテンツを共同編集可能）
* [HTML5 Rocks](https://www.html5rocks.com/en/)（ニュース、チュートリアル、更新情報）
* [HTML5 Gallery](http://html5gallery.com/)（HTML5 マークアップ・API を使うサイトのショーケース）
* [MDN の HTML5 開発ガイド](https://developer.mozilla.org/en-US/docs/Learn/HTML)
* [2014 年 6 月の W3C ハイライト](http://www.w3.org/2014/06/w3c-highlights/)
* [HTML5 Please](https://html5please.com/)（HTML5 機能を使用可能になる時期を知る）
* [Keen HTML](https://keenhtml.com)（HTML を学ぶ無料インタラクティブレッスン）
* [Table 要素の完全ガイド](https://css-tricks.com/complete-guide-table-element/) 

### 週刊ニュース

* [HTML5 Weekly](https://frontendfoc.us/)
* [Mozilla Hacks 週刊記事](https://hacks.mozilla.org/category/mozilla-hacks-weekly/)
* [Responsive Design ニュースレター](http://responsivedesignweekly.com/)

### Twitter

* [@html5](https://twitter.com/html5)
* [@html5rock](https://twitter.com/html5rock)
* [@html5gallery](https://twitter.com/html5gallery)
* [@html5doctor](https://twitter.com/html5doctor)
* [@GameDevHTML5](https://twitter.com/GameDevHTML5)
* [@mozhacks](https://twitter.com/mozhacks)
* [@googlechrome](https://twitter.com/googlechrome)

## その他の Awesome リスト

* [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)
* [lists](https://github.com/jnv/lists)
* [コミュニティがキュレーションしたリソース](https://hackr.io/tutorials/learn-html-5)

## 貢献方法

貢献はいつでも歓迎します！
