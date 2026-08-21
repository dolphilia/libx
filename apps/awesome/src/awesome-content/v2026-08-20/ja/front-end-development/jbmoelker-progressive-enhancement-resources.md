---
title: "jbmoelker/progressive-enhancement-resources"
description: "jbmoelker/progressive-enhancement-resources の定本スナップショット"
licenseSource: "github-jbmoelker-progressive-enhancement-resources-readme-md"
---

# Progressive Enhancement Resources [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

進歩的エンハンスメントに関する包括的なリソース集です。概念と戦略から機能検出・テスト手法までを扱い、（コード）例の一覧も含みます。


## 目次

* [概念](#概念)
* [戦略](#戦略)
* [機能検出](#機能検出)
* [サポート表](#サポート表)
* [テスト手法](#テスト手法)
* [例](#例)
* [関連記事](#関連記事)


## 概念

[進歩的エンハンスメント](https://en.wikipedia.org/wiki/Progressive_enhancement)とは、対象環境（例: ブラウザー）が対応可能であることを確認した後で、利用者体験を段階的に改善することです。コンテンツから始め、機能性とアクセシビリティを維持してください。

* [Progressive Enhancement: It's about the content](http://cognition.happycog.com/article/progressive-enhancement-its-about-the-content) - コンテンツ共有はWebの中核です。進歩的エンハンスメントはコンテンツへのアクセスを保証します。
* [The Role of Enhancement in Web Design](https://www.nngroup.com/articles/enhancement/) - エンハンスメントの概念からUIを充実させる基準・ルールまで。
* [Understanding Progressive Enhancement](http://alistapart.com/article/understandingprogressiveenhancement) - 技術を知的にレイヤーごと適用し、素晴らしい体験を作る。
* [Designing with Progressive Enhancement](https://www.filamentgroup.com/dwpe/) - 進歩的エンハンスメントについての*書籍*（400ページ超）。
* [Adaptive Web Design](http://adaptivewebdesign.info/2nd-edition/) - コンテンツから設計・インタラクションまで、進歩的エンハンスメントについての書籍。
* [Detecting (HTML5) features](http://diveinto.html5doctor.com/detect.html) - さまざまな機能検出手法を例とデモで紹介。
* [Progressive Web Apps](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/) - Webサイトをネイティブ風アプリへエンハンス（ハイブリッドではなく進歩的に）。


## 戦略

進歩的エンハンスメントはさまざまな方法で適用できます。

* [The Content-out Approach](https://articles.uie.com/progressive_enhancement/) - 技術的制約なしに広範なコンテンツアクセスを提供。
* [Make the page usable with only HTML](https://www.gov.uk/service-manual/technology/using-progressive-enhancement#make-the-page-usable-with-only-html) - すべてのデバイス・ブラウザーのベースラインを設定。
* [Test Driven Progressive Enhancement](http://alistapart.com/article/testdriven) - 中核機能体験を、能力テスト後にエンハンス。
* [Cut the mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard) - エンハンスメントの集合に閾値を設定。
* [Grade components, not browsers](https://www.filamentgroup.com/lab/grade-the-components.html
) - コンポーネントレベルの機能テストとエンハンスメント。
* [Feature vs Browser vs Form factor detection](http://www.html5rocks.com/en/tutorials/detection/) - アプリを環境に合わせる多様な戦略。
* [Server-side device detection](https://www.smashingmagazine.com/2014/07/server-side-device-detection-with-javascript/) - ユーザーエージェント・その他HTTPヘッダー情報をデバイスデータベースと組み合わせ、条件付きでファイルを提供。
* [Writing polyfills](https://addyosmani.com/blog/writing-polyfills/) - ベースラインが一部ブラウザーにはまだ高すぎる場合、[polyfills](https://remysharp.com/2010/10/08/what-is-a-polyfill)（別名[Regressive Enhancement](https://twitter.com/SlexAxton/status/25600963629)）を検討。
* [Application Shell Architecture](https://medium.com/google-developers/instant-loading-web-apps-with-an-application-shell-architecture-7c0c2f10c73) - 即時読み込みWebアプリのセットアップ。


## 機能検出

体験をエンハンスする前に、環境がそのエンハンスメントに対応できることを確認する必要があります。機能検出を実行してテストします。

* [CSS feature queries](https://www.sitepoint.com/an-introduction-to-css-supports-rule-feature-queries/)（[`CSS.supports()`](https://developer.mozilla.org/en/docs/Web/API/CSS/supports)と[`@supports()`](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)） - JSメソッドまたはCSS宣言を使い、特定CSS機能のサポートをネイティブにテスト。
* [Feature Detect ES6](https://www.npmjs.com/package/feature-detect-es6) - 利用可能なES2015機能を検出。
* [SVG requiredFeatures](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/requiredFeatures) - `[requiredFeatures]`がtrueと評価される場合のみSVG要素をレンダリング。
* [Modernizr](https://modernizr.com/) - 広範な機能検出スイート（カスタムビルド対応）。
* [Feature.js](http://featurejs.com/) - 軽量な機能検出スイート。
* [Conditioner.js](http://conditionerjs.com/) - HTML属性内のディレクティブに応じてJSモジュールを条件付きで読み込み。
* [EnhanceJS](https://www.filamentgroup.com/lab/introducing-enhancejs-smarter-safer-apply-progressive-enhancement.html) - 定義済みの機能テスト後、CSS・JSを非同期に読み込み。


## サポート表

環境（プラットフォーム、ブラウザー、バージョン）ごとに能力は異なります。サポート表は、各環境が持つ能力を示します。サポートレベルを知ることで、エンハンスメントと実装の労力・影響を比較検討できます。

* [The Web Platform](https://platform.html5.org/) - ドキュメントとテストスイートへのリンクを備えるブラウザー技術の概要。
* [Can I use ...?](http://caniuse.com/) - デスクトップ・モバイルブラウザー間で機能実装と制限を比較。
* [I want to use ...](http://www.iwanttouse.com/) - 機能の組み合わせに対するブラウザーサポートを調べる。
* [HTML5 Test](http://html5test.com/) - ブラウザー間でHTML5機能サポートをテスト・比較。
* [CSS3 Test](http://css3test.com/) - 現在のブラウザーにおけるCSS3機能サポートの詳細なテスト。
* [Accessibility Support](https://a11ysupport.io/) - HTML要素・ARIAロールのアクセシビリティサポートをブラウザー・支援技術間で比較。
* [State of Web Type](https://github.com/bramstein/stateofwebtype) - Web上の書体・タイポグラフィ機能のサポート表。
* [Font Family Reunion](http://fontfamily.io/) - ローカル（システム）既定フォントの互換性表。
* [HTML5 Accessibility](http://html5accessibility.com/) - 主要ブラウザー間でHTML5タグ、input type、プロパティの機能サポートを比較。
* [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) - 多様なスクリーンリーダー・ブラウザー組み合わせのARIAロール・属性サポート。
* [What web can do today](https://whatwebcando.today/) - デバイスシステム、センサー、アクチュエーターへのアクセスなど、現代Web APIを一覧・確認。
* [HTML5 Worker test](https://nolanlawson.github.io/html5workertest/) - Web Workers・Service WorkersでどのAPIが対応されるかをブラウザー間で比較。
* [HTML5 Please](http://html5please.com/) - 推奨事項とpolyfillへのリンクを備えて機能を探る。
* [API Catalog](https://developer.microsoft.com/en-us/microsoft-edge/platform/catalog/) - 主要デスクトップブラウザーにおけるAPI仕様の実装を比較。
* [KangaxのECMAScript互換性表](http://kangax.github.io/compat-table/) - ブラウザー・その他ランタイム間のJavaScript機能サポート概要。
* [Node compatibility table](http://node.green/) - NodeJSバージョン間のJavaScript機能サポート概要。
* [Is service worker ready?](https://jakearchibald.github.io/isserviceworkerready/) - Progressive Web Appsの中核技術に含まれる全機能のサポート概要。
* [Is PWA ready?](https://ispwaready.toxicjohann.com/) - 主要な世界的ブラウザーと多数の中国ブラウザーにおける、PWA中核・関連技術のサポート概要。
* [Is WebRTC ready yet?](http://iswebrtcreadyyet.com/) - リアルタイム通信を支える多様なブラウザー機能のサポート概要。
* [Is WebVR ready?](https://iswebvrready.org/) - display、gamepad、audio、speech APIを含むWebVRの多様なブラウザー機能サポート概要。
* [Is Houdini ready yet?](https://ishoudinireadyyet.com/) - Houdini（CSSレンダリングエンジンの一部を公開する低レベルAPI）のブラウザー間サポート概要。
* [Chrome Platform Status](https://www.chromestatus.com/features)
* [Edge Platform Status](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/)
* [Firefox Platform Status](https://platform-status.mozilla.org/)
* [Webkit Platform Status](https://webkit.org/status/)（Safari）
* [MDN Compatibility tables](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Structures/Compatibility_tables) - MDNのWeb技術ドキュメントには各記事末尾にブラウザー互換性表があります。
* [MDN Browser Compat Data](https://github.com/mdn/browser-compat-data) - MDN Compatibility tablesを支えるnpmモジュール。
* [Device Bugs & Quirks](https://github.com/scottjehl/Device-Bugs) - 他のサポート表にはないモバイルデバイスの奇妙なHTML、CSS、JSの癖を集めたクラウドソースコレクション。
* [Can I Email?](https://www.caniemail.com/) - メール内HTML・CSSのサポート表。[Can I use](http://caniuse.com/)に着想を得ています。
* [Project Fugu API tracker](https://fugu-tracker.web.app/) - 「アプリギャップ」を埋めるWeb APIのブラウザーサポート状況概要。
* [iOS PWA Compatibility](https://firt.dev/notes/pwa-ios/) - service worker、manifest、background sync、push通知を含むPWA機能のサポート表（非公式、Maximiliano Firtman保守）。


## テスト手法

進歩的エンハンスメントでは、環境ごとに異なる体験をサポートします。以下はこれらすべての変種をテストする方法です。

* [Open Device Lab](https://opendevicelab.com/) - *実際のデバイスで手動テスト*できます（無料）。
* [テキストブラウザー](https://en.wikipedia.org/wiki/Text-based_web_browser) - コンテンツがベースラインでアクセス可能かをテストする良い方法。例として[Lynx](http://lynx.browser.org/)を試してください。
* [Opera Miniでのテスト](https://dev.opera.com/articles/making-sites-work-opera-mini/#testing-in-opera-mini) - アプリをダウンロードし、デスクトップでエミュレートしてローカルWebサイトをテストする設定。（Opera Miniは世界のブラウザー利用の5%超を占めます）
* [cURL](https://curl.haxx.se/docs/manual.html) - ページの事前レンダリングされたソースコードを見るWebページ。
* [Browserling](https://www.browserling.com/) - Windows・Androidプラットフォーム上の異なるブラウザーバージョンでWebページを手動テスト。
* [仮想マシンでInternet Explorerを実行](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/mac/) - 他プラットフォームでIEブラウザーをテスト。
* [デバイスエミュレーターとシミュレーター](https://developers.google.com/web/tools/chrome-devtools/iterate/device-mode/testing-other-browsers?hl=en#device-emulators-and-simulators)
* [Seleniumで*Desired Capabilities*を設定](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities) - 異なるシナリオで自動ブラウザーテストを実行。
* [BrowserStack](https://www.browserstack.com/)、[Saucelabs](https://saucelabs.com/)などの代替手段を使い、異なるブラウザーで自動テストを継続実行。
* [Lighthouse](https://github.com/GoogleChrome/lighthouse) - Progressive Web Appsの性能を監査・測定（CLIまたは[Chrome拡張](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)）。
* [Progressive Enhancementチェックリスト（初版、HTML）](http://adaptivewebdesign.info/1st-edition/read/chapter-6.html#the-progressive-enhancement-checklist)、[第2版のチェックリスト（PDF）](http://adaptivewebdesign.info/2nd-edition/checklist.pdf) - 進歩的エンハンスメントのベストプラクティスを適用したことを確認する実行可能な一覧。[Adaptive Web Design書籍](http://adaptivewebdesign.info/)の一部。
* [CSS Feature Toggles](https://chrome.google.com/webstore/detail/css-feature-toggles/aeinmfddnniiloadoappmdnffcbffnjg) - 進歩的エンハンスメントのフォールバックをテストするため、選択したCSS機能のサポートを切り替えるChrome DevTools拡張。


## 例

### カスタムフォーム要素

* [Fancy radio buttons](https://www.sitepoint.com/replacing-radio-buttons-without-replacing-radio-buttons/) - HTMLラジオボタンを基盤に、CSS疑似クラス・要素で視覚的にエンハンス。
* [Checkboxes & radio buttons](https://www.filamentgroup.com/dwpe/checkbox-radiobutton/) - カスタムフォーカス、ホバー、チェック状態を備え、非同期にエンハンス。
* [Toggle switch](https://ghinda.net/css-toggle-switch/) - チェックボックスまたはラジオを、CSSのみでスライド式トグルスイッチへ視覚的にエンハンス。
* [5-star rating](http://lea.verou.me/2011/08/accessible-star-rating-widget-with-pure-css/) - HTMLラジオボタンを基盤に、CSS疑似クラス・要素で視覚的にエンハンス。
* [jQuery slider](https://github.com/filamentgroup/jQuery-Slider) - 標準HTML selectを基盤とするアクセシブルなカスタムスライダーウィジェット。
* [jQuery custom file input](https://www.filamentgroup.com/lab/jquery-custom-file-input-book-designing-with-progressive-enhancement.html) - 記事とライブラリ。
* [React isomorphic form](https://github.com/ghengeveld/react-isomorphic-form/) - 事前レンダリング・サーバー側処理が可能なReactフォームコンポーネント集。状態を失わずクライアント側でエンハンスされます。

### データ可視化

* [Timeline](https://css-tricks.com/progressive-enhancement-data-visualizations/) - 定義リストからSVGイラストへ（デモ付き記事）。
* [Charts](https://www.filamentgroup.com/lab/update-to-jquery-visualize-accessible-charts-with-html5-from-designing-with.html) - データ表からHTML5 canvasを使うテーマ付きチャートへ（記事とライブラリ）。

### 画像

* [Responsive Carousel](http://filamentgroup.github.io/responsive-carousel/test/functional/fade-auto.html) - 多様な挙動オプションを持つレスポンシブカルーセルへエンハンスされる画像一覧。
* [Lazy Progressive Enhancement](https://github.com/tvler/lazy-progressive-enhancement) - `<noscript>`タグ内の画像を遅延読み込み。（注: Evergreenブラウザーのみ）

### メニュー

* [Progressive hamburger menu](http://heydonworks.com/practical_aria_examples/#hamburger) - フッターのリンク一覧をオフキャンバスメニューへエンハンス。

### ページナビゲーション

ajaxと`history.pushState`を使い、静的ページ間を非同期に取得・遷移します:

* [Barba.js](http://barbajs.org/) - イベントフック、キャッシュ、プリフェッチ対応でページ遷移を追加。
* [SmoothState.js](https://github.com/miguel-perez/smoothState.js) - イベントフック、キャッシュ、プリフェッチ対応でページ遷移を追加（jQueryが必要）。
* [jquery-pjax](https://github.com/defunkt/jquery-pjax) - 複数コンテナー／コンテンツスロットに対応してページ遷移を追加（jQueryが必要）。
* [MoOx/pjax](https://github.com/MoOx/pjax) - jquery-pjaxに似ていますが、jQuery依存なし。
* [Turbolinks](https://github.com/turbolinks/turbolinks) - イベントフック・キャッシュ対応でページ遷移を追加。iOS・Androidのネイティブナビゲーション制御と結合するアダプターを持ちます。


## 関連記事

* [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) - ブラウザー差異を考慮してレジリエントなWebを構築するよう開発者へ訴える。
* [How many people are missing out on JavaScript enhancement?](https://gds.blog.gov.uk/2013/10/21/how-many-people-are-missing-out-on-javascript-enhancement/) - ページ訪問の1.1%でJavaScriptが読み込まれない理由の研究。

---

## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

[Jasper Moelker](https://twitter.com/jbmoelker)は、法律で許される範囲で、関連・隣接権を含む著作権法上の本作品に対するすべての権利を世界中で放棄します。

許可を求めず、商用目的でも、作品を複製、変更、配布、実行できます。
