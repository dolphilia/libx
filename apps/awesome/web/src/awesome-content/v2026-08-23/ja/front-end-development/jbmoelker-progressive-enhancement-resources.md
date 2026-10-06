---
title: "Awesome Progressive Enhancement Resources"
description: "プログレッシブエンハンスメントの概念と実装戦略、機能検出、ブラウザーの対応状況、テスト方法をまとめています。フォーム、データ可視化、画像、メニュー、ページ遷移の実装例も探せます。"
licenseSource: "github-jbmoelker-progressive-enhancement-resources-readme-md"
---

# Awesome Progressive Enhancement Resources

プログレッシブエンハンスメントの概念と実装戦略、機能検出、ブラウザーの対応状況、テスト方法をまとめています。フォーム、データ可視化、画像、メニュー、ページ遷移の実装例も探せます。

## 概念

[プログレッシブエンハンスメント](https://en.wikipedia.org/wiki/Progressive_enhancement)とは、対象環境（例: ブラウザー）が対応可能であることを確認した後で、利用者体験を段階的に改善することです。コンテンツから始め、機能性とアクセシビリティを維持してください。

* [Progressive Enhancement: It's about the content](http://cognition.happycog.com/article/progressive-enhancement-its-about-the-content) - コンテンツ共有はWebの中核です。プログレッシブエンハンスメントはコンテンツへのアクセスを保証します。
* [The Role of Enhancement in Web Design](https://www.nngroup.com/articles/enhancement/) - エンハンスメントの概念からUIを充実させる基準・ルールまで。
* [Understanding Progressive Enhancement](http://alistapart.com/article/understandingprogressiveenhancement) - 技術を段階的に適用し、利用者体験を改善。
* [Designing with Progressive Enhancement](https://www.filamentgroup.com/dwpe/) - プログレッシブエンハンスメントについての書籍（400ページ超）。
* [Adaptive Web Design](http://adaptivewebdesign.info/2nd-edition/) - コンテンツから設計・インタラクションまで、プログレッシブエンハンスメントについての書籍。
* [Detecting (HTML5) features](http://diveinto.html5doctor.com/detect.html) - さまざまな機能検出手法を例とデモで紹介。
* [Progressive Web Apps](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/) - Webサイトを段階的に機能強化し、ネイティブアプリに近い体験を実現（ハイブリッドアプリとは異なる方式）。

## 戦略

プログレッシブエンハンスメントはさまざまな方法で適用できます。

* [The Content-out Approach](https://articles.uie.com/progressive_enhancement/) - 技術的な制約を設けず、幅広い環境からコンテンツへのアクセスを提供。
* [Make the page usable with only HTML](https://www.gov.uk/service-manual/technology/using-progressive-enhancement#make-the-page-usable-with-only-html) - すべてのデバイス・ブラウザーで利用できる最低限の機能を確保。
* [Test Driven Progressive Enhancement](http://alistapart.com/article/testdriven) - 必要な機能への対応をテストした後、基本機能の体験を段階的に強化。
* [Cut the mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard) - 一連の機能強化を適用するため、環境の能力に閾値を設定。
* [Grade components, not browsers](https://www.filamentgroup.com/lab/grade-the-components.html) - コンポーネント単位で機能をテストし、段階的に強化。
* [Feature vs Browser vs Form factor detection](http://www.html5rocks.com/en/tutorials/detection/) - アプリを環境に合わせる多様な戦略。
* [Server-side device detection](https://www.smashingmagazine.com/2014/07/server-side-device-detection-with-javascript/) - ユーザーエージェント・その他HTTPヘッダー情報をデバイスデータベースと組み合わせ、条件付きでファイルを提供。
* [Writing polyfills](https://addyosmani.com/blog/writing-polyfills/) - 最低限の動作条件が一部のブラウザーにはまだ厳しい場合、[ポリフィル](https://remysharp.com/2010/10/08/what-is-a-polyfill)（別名[Regressive Enhancement](https://twitter.com/SlexAxton/status/25600963629)）を検討。
* [Application Shell Architecture](https://medium.com/google-developers/instant-loading-web-apps-with-an-application-shell-architecture-7c0c2f10c73) - 即座に読み込めるWebアプリの構成。

## 機能検出

体験を改善する前に、対象環境が追加する機能に対応しているかを確認する必要があります。そのために機能検出を行います。

* [CSSの機能クエリー](https://www.sitepoint.com/an-introduction-to-css-supports-rule-feature-queries/)（[`CSS.supports()`](https://developer.mozilla.org/en/docs/Web/API/CSS/supports)と[`@supports()`](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)） - JSメソッドまたはCSS宣言を使い、特定のCSS機能が標準機能として利用できるかをテスト。
* [Feature Detect ES6](https://www.npmjs.com/package/feature-detect-es6) - 利用可能なES2015機能を検出。
* [SVGのrequiredFeatures属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/requiredFeatures) - `[requiredFeatures]`がtrueと評価される場合のみSVG要素をレンダリング。
* [Modernizr](https://modernizr.com/) - 広範な機能検出スイート（カスタムビルド対応）。
* [Feature.js](http://featurejs.com/) - 軽量な機能検出スイート。
* [Conditioner.js](http://conditionerjs.com/) - HTML属性内のディレクティブに応じてJSモジュールを条件付きで読み込み。
* [EnhanceJS](https://www.filamentgroup.com/lab/introducing-enhancejs-smarter-safer-apply-progressive-enhancement.html) - あらかじめ定義した一連の機能テスト後、CSS・JSを非同期に読み込み。

## <a id="サポート表"></a>対応表

プラットフォーム、ブラウザー、バージョンごとに、利用できる機能は異なります。対応表で各環境の対応状況を知ると、機能強化の効果を実装の労力や影響と比較して検討できます。

* [The Web Platform](https://platform.html5.org/) - ドキュメントとテストスイートへのリンクを備えるブラウザー技術の概要。
* [Can I use ...?](http://caniuse.com/) - デスクトップ・モバイルブラウザー間で機能実装と制限を比較。
* [I want to use ...](http://www.iwanttouse.com/) - 機能の組み合わせに対するブラウザーサポートを調べる。
* [HTML5 Test](http://html5test.com/) - ブラウザー間でHTML5機能サポートをテスト・比較。
* [CSS3 Test](http://css3test.com/) - 現在のブラウザーにおけるCSS3機能サポートの詳細なテスト。
* [Accessibility Support](https://a11ysupport.io/) - HTML要素・ARIAロールのアクセシビリティサポートをブラウザー・支援技術間で比較。
* [State of Web Type](https://github.com/bramstein/stateofwebtype) - Web上の書体・タイポグラフィ機能の対応表。
* [Font Family Reunion](http://fontfamily.io/) - ローカル（システム）既定フォントの互換性表。
* [HTML5 Accessibility](http://html5accessibility.com/) - 主要ブラウザー間でHTML5タグ、入力型、プロパティの機能サポートを比較。
* [WAI-ARIAのスクリーンリーダー互換性](https://www.powermapper.com/tests/screen-readers/aria/) - 多様なスクリーンリーダー・ブラウザー組み合わせのARIAロール・属性サポート。
* [What web can do today](https://whatwebcando.today/) - デバイスのシステム機能、センサー、アクチュエーターへのアクセスなど、Web APIを一覧化し対応を確認。
* [HTML5 Worker test](https://nolanlawson.github.io/html5workertest/) - Web Workers・Service WorkersでどのAPIを利用できるかをブラウザー間で比較。
* [HTML5 Please](http://html5please.com/) - 推奨事項やポリフィルへのリンクを通じて各機能を調査。
* [API Catalog](https://developer.microsoft.com/en-us/microsoft-edge/platform/catalog/) - 主要デスクトップブラウザーにおけるAPI仕様の実装を比較。
* [KangaxのECMAScript互換性表](http://kangax.github.io/compat-table/) - ブラウザー・その他ランタイム間のJavaScript機能対応状況の概要。
* [Node.jsの互換性表](http://node.green/) - NodeJSバージョン間のJavaScript機能対応状況の概要。
* [Is service worker ready?](https://jakearchibald.github.io/isserviceworkerready/) - Progressive Web Appsの中核技術に含まれる全機能の対応状況の概要。
* [Is PWA ready?](https://ispwaready.toxicjohann.com/) - 世界の主要ブラウザーと中国で使われる多数のブラウザーにおける、PWA中核・関連技術の対応状況の概要。
* [Is WebRTC ready yet?](http://iswebrtcreadyyet.com/) - リアルタイム通信を支える多様なブラウザー機能の対応状況の概要。
* [Is WebVR ready?](https://iswebvrready.org/) - ディスプレイ、ゲームパッド、音声、発話のAPIを含むWebVRの多様なブラウザー機能対応状況の概要。
* [Is Houdini ready yet?](https://ishoudinireadyyet.com/) - Houdini（CSSレンダリングエンジンの一部を公開する低レベルAPI）のブラウザー間対応状況の概要。
* [Chrome Platform Status](https://www.chromestatus.com/features)
* [Edge Platform Status](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/)
* [Firefox Platform Status](https://platform-status.mozilla.org/)
* [Webkit Platform Status](https://webkit.org/status/)（Safari）
* [MDNの互換性表](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Structures/Compatibility_tables) - MDNのWeb技術ドキュメントの各記事末尾にあるブラウザー互換性表。
* [MDN Browser Compat Data](https://github.com/mdn/browser-compat-data) - MDNの互換性表を支えるnpmモジュール。
* [Device Bugs & Quirks](https://github.com/scottjehl/Device-Bugs) - 他の対応表にはない、モバイルデバイス特有のHTML・CSS・JSの挙動を利用者から集めた資料。
* [Can I Email?](https://www.caniemail.com/) - メール内HTML・CSSの対応表。[Can I use](http://caniuse.com/)に着想を得ています。
* [Project Fugu API tracker](https://fugu-tracker.web.app/) - 「アプリギャップ」を埋めるWeb APIのブラウザー対応状況の概要。
* [iOS PWA Compatibility](https://firt.dev/notes/pwa-ios/) - サービスワーカー、マニフェスト、バックグラウンド同期、プッシュ通知を含むPWA機能の対応表（非公式、Maximiliano Firtmanが保守）。

## テスト手法

プログレッシブエンハンスメントでは、環境ごとに異なる体験をサポートします。そのさまざまな体験を確認するためのテスト方法を紹介します。

* [Open Device Lab](https://opendevicelab.com/) - 実機で手動テストを行える環境（無料）。
* [テキストブラウザー](https://en.wikipedia.org/wiki/Text-based_web_browser) - 最低限の機能だけでコンテンツにアクセスできるかをテスト。例: [Lynx](http://lynx.browser.org/)。
* [Opera Miniでのテスト](https://dev.opera.com/articles/making-sites-work-opera-mini/#testing-in-opera-mini) - アプリのダウンロード、デスクトップでのエミュレーション、ローカルWebサイトをテストする設定を紹介。原リストでは、Opera Miniが世界のブラウザー利用の5%超を占めていたと記載。
* [cURL](https://curl.haxx.se/docs/manual.html) - Webページを取得し、事前にレンダリングされたソースコードを確認。
* [Browserling](https://www.browserling.com/) - Windows・Androidプラットフォーム上の異なるブラウザーバージョンでWebページを手動テスト。
* [仮想マシンでInternet Explorerを実行](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/mac/) - 他プラットフォームでIEブラウザーをテスト。
* [デバイスエミュレーターとシミュレーター](https://developers.google.com/web/tools/chrome-devtools/iterate/device-mode/testing-other-browsers?hl=en#device-emulators-and-simulators)
* [SeleniumでDesired Capabilitiesを設定](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities) - 異なるシナリオで自動ブラウザーテストを実行。
* [BrowserStack](https://www.browserstack.com/)、[Saucelabs](https://saucelabs.com/)などの代替手段を使い、異なるブラウザーで自動テストを継続実行。
* [Lighthouse](https://github.com/GoogleChrome/lighthouse) - Progressive Web Appsの性能を監査・測定（CLIまたは[Chrome拡張](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)）。
* [プログレッシブエンハンスメントのチェックリスト（初版、HTML）](http://adaptivewebdesign.info/1st-edition/read/chapter-6.html#the-progressive-enhancement-checklist)、[第2版のチェックリスト（PDF）](http://adaptivewebdesign.info/2nd-edition/checklist.pdf) - プログレッシブエンハンスメントのベストプラクティスを適用できているか確認するための具体的なチェックリスト。書籍[Adaptive Web Design](http://adaptivewebdesign.info/)の一部。
* [CSS Feature Toggles](https://chrome.google.com/webstore/detail/css-feature-toggles/aeinmfddnniiloadoappmdnffcbffnjg) - プログレッシブエンハンスメントのフォールバックをテストするため、選択したCSS機能のサポートを切り替えるChrome DevTools拡張。

## 例

### カスタムフォーム要素

* [装飾したラジオボタン](https://www.sitepoint.com/replacing-radio-buttons-without-replacing-radio-buttons/) - HTMLのラジオボタンを基に、CSSの疑似クラス・疑似要素で見た目を改善。
* [チェックボックスとラジオボタン](https://www.filamentgroup.com/dwpe/checkbox-radiobutton/) - フォーカス・ホバー・チェック時の表示を独自に設定し、非同期に機能強化。
* [トグルスイッチ](https://ghinda.net/css-toggle-switch/) - チェックボックスまたはラジオボタンを、CSSだけでスライド式トグルスイッチの見た目に変更。
* [5段階の星評価](http://lea.verou.me/2011/08/accessible-star-rating-widget-with-pure-css/) - HTMLのラジオボタンを基に、CSSの疑似クラス・疑似要素で見た目を改善。
* [jQueryのスライダー](https://github.com/filamentgroup/jQuery-Slider) - 標準のHTML select要素を基にしたアクセシブルなカスタムスライダーウィジェット。
* [jQueryのカスタムファイル入力](https://www.filamentgroup.com/lab/jquery-custom-file-input-book-designing-with-progressive-enhancement.html) - 記事とライブラリ。
* [Reactのアイソモーフィックフォーム](https://github.com/ghengeveld/react-isomorphic-form/) - 事前レンダリング・サーバー側処理が可能なReactフォームコンポーネント集。状態を失わずクライアント側で機能強化。

### データ可視化

* [タイムライン](https://css-tricks.com/progressive-enhancement-data-visualizations/) - 定義リストからSVGイラストへ（デモ付き記事）。
* [チャート](https://www.filamentgroup.com/lab/update-to-jquery-visualize-accessible-charts-with-html5-from-designing-with.html) - データ表からHTML5 canvasを使うテーマ付きチャートへ（記事とライブラリ）。

### 画像

* [レスポンシブなカルーセル](http://filamentgroup.github.io/responsive-carousel/test/functional/fade-auto.html) - 画像一覧を、さまざまな動作を選べるレスポンシブなカルーセルへ変更。
* [Lazy Progressive Enhancement](https://github.com/tvler/lazy-progressive-enhancement) - `<noscript>`タグ内の画像を遅延読み込み。継続的に自動更新されるEvergreenブラウザーのみ対応。

### メニュー

* [段階的に機能強化するハンバーガーメニュー](http://heydonworks.com/practical_aria_examples/#hamburger) - フッターのリンク一覧をオフキャンバスメニューへ変更。

### ページナビゲーション

Ajaxと`history.pushState`を使って静的ページを非同期に取得し、ページ間を遷移します。

* [Barba.js](http://barbajs.org/) - イベントフック、キャッシュ、プリフェッチ対応でページ遷移を追加。
* [SmoothState.js](https://github.com/miguel-perez/smoothState.js) - イベントフック、キャッシュ、プリフェッチ対応でページ遷移を追加（jQueryが必要）。
* [jquery-pjax](https://github.com/defunkt/jquery-pjax) - 複数コンテナー／コンテンツスロットに対応してページ遷移を追加（jQueryが必要）。
* [MoOx/pjax](https://github.com/MoOx/pjax) - jquery-pjaxに似ていますが、jQuery依存なし。
* [Turbolinks](https://github.com/turbolinks/turbolinks) - イベントフック・キャッシュ対応でページ遷移を追加。iOS・Androidのネイティブなナビゲーション操作へ接続するアダプターを持ちます。

## 関連記事

* [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) - ブラウザーの違いを考慮し、さまざまな環境でも機能するWebを構築するよう開発者へ呼びかける記事。
* [How many people are missing out on JavaScript enhancement?](https://gds.blog.gov.uk/2013/10/21/how-many-people-are-missing-out-on-javascript-enhancement/) - ページ訪問の1.1%でJavaScriptが読み込まれなかったと報告し、その理由を調べた研究。
