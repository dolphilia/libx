---
title: "Awesome Visual Regression Testing"
description: "Visual Regression Testingを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-mojoaxel-awesome-regression-testing-readme-md"
---

# Awesome Visual Regression Testing

Visual Regression Testingを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [一般情報](#general-information)
- [ブラウザ自動化](#browser-automation)
- [ツールとフレームワーク](#tools-and-frameworks)
- [オンラインサービス](#online-services)
- [ブログ記事](#blog-posts)
- [スライド、講演、動画](#slideshows-talks-and-videos)
- [非推奨](#deprecated)
- [その他](#Miscellaneous)
  - [貢献](#contributing)
  - [行動規範](#code-of-conduct)
  - [ライセンス](#license)

<a id="general-information"></a>
## 一般情報

- [Survey of screenshot-based CSS testing tools](https://gist.github.com/cvrebert/adf91e429906a4d746cd)
- [Wikipedia: Regression testing](https://en.wikipedia.org/wiki/Regression_testing)

<a id="browser-automation"></a>
## ブラウザ自動化

- [Cypress.io](https://www.cypress.io/) - ブラウザ内で実行される自動化フレームワーク。
- [Selenium](https://github.com/SeleniumHQ/selenium) - ブラウザ自動化フレームワークとエコシステム。
- [SlimerJS](https://github.com/laurentj/slimerjs) - Firefoxをベースにした、PhantomJSのようなスクリプト可能なブラウザ。
- [Webdriver.io](https://github.com/webdriverio/webdriverio/) - W3C WebDriverプロトコルに対するNode.jsバインディング実装。

<a id="tools-and-frameworks"></a>
## ツールとフレームワーク（a-z↓）

- [AET](https://github.com/Cognifide/aet) - スケーラブルなテストツールで、視覚的なリグレッションテスト、アクセシビリティおよびパフォーマンス検証、マーカップ分析などを提供。
- [AyeSpy](https://github.com/newsuk/ayespy) - 90秒で44枚の画像を比較。
- [BackstopJS](https://github.com/garris/BackstopJS) - 構成ファイルに基づく自動スクリーンショットテストフレームワーク。
- [basset](https://basset.io) - 視覚的な差異を生成・レビューするオープンソースプラットフォーム。複数のブラウザに対応し、GitHubおよびSlackとの統合をサポート。
- [BitDive](https://bitdive.io/) - BitDiveはJava/Kotlinアプリケーション向けのゼロコードリグレッションテストツール。リアルタイムの実行挙動（メソッド、SQL、HTTP）をキャプチャし、自動モックによるライブコンテキストリプレイを実現し、バージョン間の意味のズレを検出できる。
- [BFFless](https://bffless.app) - GitHub Actionsとの統合を活用した、自前サーバーで視覚リグレッションスクリーンショットをホスト・閲覧できるプラットフォーム。
- [Chimp](https://github.com/xolvio/chimp) - リアルタイムフィードバックを活用した受容テストおよびエンドツーエンドテストの開発。
- [CodeceptJS](https://github.com/codeception/codeceptjs/) - Node.js向けの現代的な受容テストフレームワーク。
- [Creevey](https://github.com/wKich/creevey) - マルチブラウザ視覚テストを魔法のように。UIランナー、テストのホットリロード、DockerおよびStorybook統合を備えた豊富な機能ツール。
- [CSSCritic](https://github.com/cburgmer/csscritic) - 軽量なCSSリグレッションテスト。
- [Differencify](https://github.com/NimaSoroush/differencify) - [Puppeteer](https://github.com/GoogleChrome/puppeteer)を用いた視覚リグレッションテスト用のライブラリ。
- [DiffGoblin Action](https://github.com/neg-0/diffgoblin-action) - GitHubアクションで2つのURLをスクリーンショットし、PRコメントとして視覚的な差分を投稿。設定不要、外部サービス不要。
- [ember-visual-test](https://github.com/Cropster/ember-visual-test) - [Ember](https://emberjs.com/)向けのシンプルな視覚リグレッションテスト。
- [FuncUnit](https://github.com/bitovi/funcunit) - jQueryをベースとした機能テストセット。
- [Frostbyte Screenshot Action](https://github.com/OzorOwn/frostbyte-screenshot-action) - CI/CDにおける自動ウェブサイトスクリーンショット用のGitHubアクション。APIベース（ローカルブラウザ不要）、5つのビューに対応、全ページキャプチャ、ダークモードをサポート。
- [Galen](https://github.com/galenframework/galen) - [Selenium](https://github.com/SeleniumHQ/selenium)をベースにしたJavaフレームワーク。
- [gatling](https://github.com/gabrielrotbart/gatling) - 統合された視覚RSpecマッチャーで、実際の視覚テストを簡単に行える (Ruby)。
- [grunt-photobox](https://github.com/stefanjudis/grunt-photobox) - サイトのスクリーンショットセッションを用いて、プロジェクトのレイアウトが破損しないように防ぐプラグイン。
- [Happo](https://github.com/happo/happo.io) - CIにおけるユーザーインターフェースの視覚差分テスト。
- [Hardy](https://github.com/thingsinjars/Hardy) - Seleniumを駆動し、Cucumberを活用したCSSテスト。
- [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot) - Jestマッチャーが [pixelmatch](https://www.npmjs.com/package/pixelmatch) を使用して画像比較を行う。
- [jest-puppeteer-react](https://github.com/Hapag-Lloyd/jest-puppeteer-react) - Reactコンポーネント向けのJestとpuppeteerによる視覚回帰テスト。
- [Karma](http://karma-runner.github.io/latest/index.html) - AngularJSチームが開発したテストランナーで、すべてのニーズに適合。
- [Lastest](https://github.com/las-team/lastest) - Playwright を基盤とするビジュアルリグレッションテストプラットフォーム。スクリーンショット差分、ベースラインレビュー、AI による不安定テストの選別に対応し、Docker Compose または Kubernetes でセルフホスト可能。
- [Loki](https://github.com/oblador/loki) - Dockerなどを使ってChromeでStorybookにおける視覚回帰テスト。
- [Look-alike](https://github.com/kdzwinel/Look-alike) - Chrome拡張機能によるスクリーンショットの取得と比較。
- [Lost Pixel](https://github.com/lost-pixel/lost-pixel) - フルページ、コンポーネント（StorybookおよびLadle統合を介して）、カスタムショット（例：Cypressを介して）の包括的な視覚回帰テスト。
- [Muppeteer](https://github.com/HuddleEng/Muppeteer) - Chromeを用いた視覚回帰テストフレームワーク（[Mocha](https://mochajs.org/) および [Puppeteer](https://github.com/GoogleChrome/puppeteer) を使用）。
- [Needle](https://github.com/python-needle/needle) - NeedleはSeleniumとnose（Python）を用いて視覚テストを行うツール。
- [Nightmare](https://github.com/segmentio/nightmare) - Electronをベースとした高レベルブラウザ自動化ライブラリ。
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - Node.jsをベースにし、Webdriverプロトコルを使用した自動テストおよび継続的統合フレームワーク。
- [OSnap](https://github.com/eWert-Online/osnap) - プロジェクト向けの高速かつ使いやすいスナップショットテストツール（1200個のスナップショットが3分以内に実行可能）。
- [Playwright](https://github.com/microsoft/playwright) - Chromium、FirefoxおよびWebKitを1つのAPIで自動化するNodeライブラリ。
- [Protractor](https://github.com/angular/protractor) - Angularアプリ向けのE2Eテストフレームワーク。
- [Puppeteer](https://github.com/GoogleChrome/puppeteer) - ヘッドレスGoogle ChromeのNode API。
- [qd_screenshottests](https://www.drupal.org/project/qd_screenshottests) - CasperJSをベースにしたDrupal 8サイト向けのUI回帰および機能テスト。
- [reg-cli](https://github.com/bokuweb/reg-cli) - 視覚的なリグレッションテストツールで、読みやすい1ファイルのHTMLレポートを出力します。
- [reg-suit](https://github.com/reg-viz/reg-suit) - 画像を比較し、スナップショットを保存し、GitHubリポジトリに差分を通知する視覚的なリグレッションテストセットです。
- [ResembleJS](https://github.com/Huddle/Resemble.js) - JavaScriptとHTML5を使って画像を分析・比較します。
- [Selenide](https://github.com/selenide/selenide) - Selenium WebDriverをベースにしたフレームワークで、Javaで読みやすく、維持しやすい自動テストを書くことができます。
- [Shoov](https://github.com/shoov/shoov) - Drupal 7サイトに特化したUIリグレッションおよび機能テストです。
- [Spectre](https://github.com/wearefriday/spectre) - 画像比較機能とスナップショット管理用の管理インターフェースを提供します。
- [test-crawler](https://github.com/apiel/test-crawler) - ウェブサイトをクロールし、スナップショット比較レポートを提供するビジュアルリグレッションテストツール。
- [TestCafe](https://github.com/DevExpress/testcafe) - 現代的なウェブ開発スタック向けの自動ブラウザテストです。
- [Touca](https://github.com/trytouca/trytouca) - スナップショットファイルの管理を気にせず、オープンソースで継続的なリグレッションテストを提供します。
- [vrtest](https://github.com/nathanmarks/vrtest) - Seleniumを用いて、クロスブラウザでコンポーネントの視覚リグレッションテストを実行するJavaScriptライブラリです。
- [wdio-visual-regression](https://github.com/ennjin/wdio-visual-regression) - webdriver.io向けの視覚リグレッションツール
- [Wendigo](https://github.com/angrykoala/wendigo) - Puppeteerに基づいたテスト志向のブラウザ自動化ライブラリ。
- [Wraith](https://github.com/BBC-News/wraith) - Docker対応の使いやすいRubyツール。
- [Zombie.js](http://zombie.js.org/) - Node.jsを用いた、驚異的に速いヘッドレスフルスタックテスト。

<a id="online-services"></a>
## オンラインサービス（a-z↓）

- [applitools](https://applitools.com) - クラウドベースの視覚テスト。
- [Argos](https://argos-ci.com) - 現代のエンジニアチーム向けのオープンソース視覚テストプラットフォーム。
- [Axcept](https://axcept.io) - 全チーム向けのテスト。並列実行100テスト。エンドポイントモック。コードカバレッジ。
- [Browser Shots](http://browsershots.org) - スクリーンショットのみ。
- [browserling](https://www.browserling.com) - リアルタイムインタラクティブなクロスブラウザテスト。
- [BrowserStack](https://www.browserstack.com) - オープンソースプロジェクトは無料。[Selenium Webdriver](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver) をサポート。
- [BugBug.io](https://bugbug.io/) - ウェブアプリケーション向け軽量なテスト自動化ツール。学習が簡単で、コーディングは不要。無料で無制限のテストが可能。月額追加料金を支払うことで、クラウド監視とCI/CD統合が利用可能。
- [Chromatic](https://www.chromatic.com/) - コンポーネントライブラリ向けの視覚テストとUIレビュー。クラウドベース。 [Video](https://youtu.be/6KDLJBcutQE)
- [CrossBrowserTesting](https://crossbrowsertesting.com) - 1500以上の実際のブラウザとモバイルデバイスでの手動および探索型テスト。
- [Diffy](https://diffy.website) - DrupalおよびWordPressに特化したクラウドベースの視覚回帰ツール。全ページスクリーンショットと極小の誤検出。サイトのURLを提供するだけで開始可能。コーディングは不要。
- [Fluxguard](https://fluxguard.com) - スクリーンショットのピクセルおよびDOM変更の比較と回帰分析。
- [Ghost Inspector](https://ghostinspector.com) - [introduction video](https://vimeo.com/ghostinspector/intro)を参照してください。
- [Happo](https://happo.io/) - 複数ブラウザに対応したクラウドベースのスクリーンショットテストサービス。
- [HeadSpin](https://www.headspin.io/) - HeadSpinの回帰テストは、新しいアプリビルド、OSリリース、機能追加、場所などでの劣化を分析するための強力な比較ツールを提供。
- [Keploy](https://keploy.io) - 実際のAPI呼び出しから自動的にテストケースとモックを生成するオープンソース回帰テストツール。

- [LambdaTest](https://www.lambdatest.com/) - 2000以上の実際のブラウザとオペレーティングシステム上で自動化およびリアルタイムインタラクティブなクロスブラウザテストを実行。
- [Meticulous.ai](https://meticulous.ai) - コードを書かずに簡単にフロントエンドテストを作成可能。Meticulousを使用してウェブアプリのワークフローを記録し、その後新しいフロントエンドコード上でそのワークフローを再実行し、2つの再実行結果を比較してテストを作成。
- [Micoo](https://github.com/Mikuu/Micoo) - すべてのUIアプリケーション向け視覚回帰ソリューションのオープンソースサービス
- [MyVisReg](https://myvisreg.com) – ブラウザにインストールや設定なしで、直接ブラウザ内で視覚回帰テストを実行。
- [PageBolt](https://pagebolt.dev) - スクリーンショット、動画記録、PDF、ページ検査 API。デバイスエミュレーション、広告ブロック、Cookie バナー除去に対応。
- [percy.io](https://percy.io) - ウェブアプリケーション向けの継続的な視覚レビュー。
- [Pixeleye](https://pixeleye.io/home) - オープンソースで、複数ブラウザに対応した視覚レビューおよびテストプラットフォーム。自前サーバー展開も可能。Storybook、Cypress、PlaywrightおよびPuppeteerに優れたサポートを提供。
- [Preflight: Cypress Recorder](https://cypress.preflight.com) - ブラウザ内でAIを活用したCypressテスト/モデルを作成し、Cypressのメールおよび視覚テストを自動化。
- [Preflight](https://preflight.com) - 最も簡単な視覚回帰テストおよび自動ウェブテストツール。（限定）無料利用。
- [Reflect](https://reflect.run) - 視覚回帰テストおよびテスト自動化ツール。
- [screener.io](https://screener.io) - React向けに、オープンソースであると見られる。
- [screenster.io](http://screenster.io) - クラウドベースのウェブおよびモバイルUI向け自動化テストプラットフォーム
- [Sherlo](https://github.com/sherlo-io/sherlo) - React Native Storybook向けの視覚テストプラットフォーム。iOSおよびAndroidシミュレータでクラウド上でスクリーンショットを取得し、視覚的な変更を自動検出。
- [TestGrid](https://www.testgrid.io/) - クラウドまたはオンプレミスで、クロスブラウザ、モバイルアプリ、性能、API のエンドツーエンドテストを自動化。
- [TestingBot](https://testingbot.com) - 3,600以上のブラウザで自動ビジュアルテストを実行可能。オープンソースプロジェクトは無料。
- [Testomat.io Reporter](https://github.com/testomatio/reporter) - テストケース管理システム（TCMS）のようなtestomat.ioなどにテストを収集し、手動および自動テストを一元で同期できる。
- [testRigor](https://testrigor.com) - ウェブ、モバイル、デスクトップテスト向けのE2E機能テスト自動化ツール。
- [Vidiff](https://vidiff.com) - 段階ごとのクラウドベース視覚回帰テスト。
- [Visual Knight](https://visual-knight.io/) - テストツール向けのクラウドベース視覚テストプラットフォームで、リアルタイム結果を提供。
- [Visual Regression Tracker](https://github.com/Visual-Regression-Tracker/Visual-Regression-Tracker) - オープンソースの自前サーバー対応視覚回帰テストサービス
- [VisWiz.io](https://www.viswiz.io) - 柔軟な視覚回帰テストサービス
- [VRTs - Visual Regression Tests](https://bleech.de/en/products/visual-regression-tests/) – WordPressプラグインでコンテンツ更新時にスクリーンショットを自動更新し、誤検出を防止。
- [Wopee.io](https://wopee.io) - AI テストエージェントを活用した自律型ビジュアルリグレッションテストプラットフォーム。Playwright、Cypress、Robot Framework と統合。

<a id="blog-posts"></a>
## ブログ記事（a-z↓）

- [Angela Riggs: Visual Regression Testing with BackstopJS](https://www.metaltoad.com/blog/visual-regression-testing-backstopjs) - BackstopJSを使ったチュートリアル。
- [Automated screenshot comparison tests with headless Chrome, Puppeteer and Pixelmatch, in Bitbucket pipeline](https://jakobzanker.de/blog/automated-screenshot-comparison-test-with-headless-chrome-in-bitbucket-pipeline/)
- [Automatic visual diffing with Puppeteer](https://meowni.ca/posts/2017-puppeteer-tests/)
- [Chromeless, Chrominator, Chromy, Navalia, Lambdium, GhostJS, AutoGCD](https://medium.com/@kensoh/chromeless-chrominator-chromy-navalia-lambdium-ghostjs-autogcd-ef34bcd26907) - ヘッドレスChromeが従来のテスト自動化アプローチを変える。
- [CodeLift: Introduction to Diffy for Visual Regression Testing](https://codelift.ai/resources/tech-articles/introduction-diffy-visual-regression-testing) - 生産環境に到達する前に視覚および機能的な問題を検出。
- [Everything you need to know about Visual Regression Testing in 2022](https://david-x.medium.com/the-state-of-visual-regression-testing-in-2022-5de10ffe8f6f) - 2022年時点のツールを用いた視覚回帰テストの概要。
- [Garris Shipon: Automating CSS Regression Testing](https://css-tricks.com/automating-css-regression-testing/) - BackstopJSを使ったチュートリアル。
- [Garris Shipon: Visual Regression Testing For Angular Applications](https://davidwalsh.name/visual-regression-testing-angular-applications) -  BackstopJSを使ったチュートリアル。
- [Keeping a React Design System consistent: using visual regression testing to save time and headaches](https://techblog.commercetools.com/keeping-a-react-design-system-consistent-f055160d5166) - Percyおよびjest puppeteerを使ってReactコンポーネントライブラリを視覚的にテスト。
- [Kevin Lamping: The 5 best visual regression testing tools](http://www.creativebloq.com/features/the-5-best-visual-regression-testing-tools) - 比較：Wraith、PhantomCSS、Gemini、WebdriverCSSおよびSpectre。
- [Make visual regression testing easier](https://medium.com/@nima.soroush.h/make-visual-regression-testing-easier-4a3dc7073737) - [Differencify](https://github.com/NimaSoroush/differencify)の概要とその使い方について
- [Pavels Jelisejevs: Visual Regression Testing with PhantomCSS](https://www.sitepoint.com/visual-regression-testing-with-phantomcss) - PhantomCSSの概要
- [Phillip Gourley: Making visual regression useful](https://medium.com/@philgourley/making-visual-regression-useful-acfae27e5031) - BackstopJSを使うべき理由
- [Poor man's visual regression testing](https://idkshite.com/posts/compare-visual-changes) - PerfectPixel Chromeプラグインによる手動視覚回帰テストの向上
- [theheadless.dev](https://theheadless.dev) - PlaywrightとPuppeteerに関する実践ガイドと実行可能な例のブログ
- [UI Visual Regression Testing with Micoo](https://mikuu.medium.com/ui-visual-regression-testing-with-micoo-12c7a4a036b9) - Micooサービスを用いた視覚回帰テストの概要
- [Visual Regression Test with WebdriverIO & WebdriverCSS](https://medium.com/@dalenguyen/visual-regression-test-with-webdriverio-webdrivercss-d7675a1812b2) - WebdriverIOとWebdriverCSSにSpec Reporterを用いたチュートリアル
- [Visual regression testing for Hugo with Github-CI and BackstopJS](https://jameskiefer.com/posts/visual-regression-testing-for-hugo-with-github-ci-and-backstopjs/) - BackstopJSでHugoの回帰テストを自動化する方法
- [Visual regression testing using Jest, Chromeless and AWS Lambda](https://github.com/novemberfiveco/visual-regression-testing-jest-chromeless) - Chromelessとjest-image-snapshotを用いたチュートリアル
- [Visual Regression Testing with Puppeteer & Jest](https://www.viswiz.io/help/tutorials/puppeteer) - Puppeteer、Jest、VisWiz.ioを用いた視覚テストの設定チュートリアル

<a id="slideshows-talks-and-videos"></a>
## スライド、講演、動画（a-z↓）

- [CSS Regression Testing with Wraith](https://youtu.be/gE_19L0l2q0) - wraith、スクリーンショット比較ツールの基本的な紹介をしたスクリーンキャスト
- [Cypress in 100 Seconds](https://www.youtube.com/watch?v=BQqzfHQkREo&ab_channel=Fireship) - Fireshipによる紹介動画
- [Look-alike - visual regression testing tool](https://youtu.be/vTyoQuC0To8) - Look-alike Chrome拡張機能についてのデモ：その仕組みや開発の背景と目的
- [Screencast on CSS critic - a lightweight testing framework for CSS](https://youtu.be/AqQ2bNPtF60) - CSS Criticを使って最初のCSSテストを書く方法：テストを通過させ、破壊し、再び通過させる方法
- [Screenster Tutorial](https://youtu.be/Zy8y_dGzZXI) - Screensterを用いた視覚自動テストの作成方法
- [Visual Regression Testing - from a tool to a process](https://speakerdeck.com/nikhilverma/visual-regression-testing-from-a-tool-to-a-process) Nikhil Vermaによる、BadooのモバイルウェブチームがPhantomCSSを導入し、CIプロセスに接続した方法
- [Visual Regression Testing with PhantomCSS](https://youtu.be/Vp8vnXMjIfw) - Jon BellahによるWordPress開発中にPhantomCSSを使う方法についての講演
- [Visual Regression Testing with Shoov](https://youtu.be/CBBiJ6YlXLc) - shoovの設定方法と最初のテストを書く方法
- [Visual Regression Testing: Sanity Checks With BackstopJS](https://youtu.be/l8lGj8Zh0k4) - コードデモとベストプラクティスを含むスクリーンキャスト
- [Scaling up your Screenshot Testing, without the Friction](https://www.youtube.com/watch?v=9sarjgIHF2g) - Droidcon/Fluttercon Indiaで発表されたモバイル中心の講演。スクリーンショットテストのスケーリングにおける課題とその解決方法を説明

<a id="deprecated"></a>
## 非推奨（a-z↓）

次のプロジェクトは現在活発に保守されていませんが、利用者が多いため掲載しています。

- [CasperJS](https://github.com/casperjs/casperjs) - PhantomJS および SlimerJS 用のナビゲーションスクリプトとテストツール。（2018年でアーカイブ）
- [Chromeless](https://github.com/graphcool/chromeless) - Chromeの自動化をシンプルに。AWS Lambda上でローカルまたはヘッドレスで実行可能。（2018年でアーカイブ）
- [DalekJS](https://github.com/dalekjs/dalek) - JavaScriptによるクロスブラウザ自動テスト。2017年6月4日以降メンテナンス停止。
- [dpxdt](https://github.com/bslatkin/dpxdt) - Pythonによるエンドツーエンドテスト。
- [Gemini](https://github.com/gemini-testing/gemini) - [Selenium](https://github.com/SeleniumHQ/selenium)および[CasperJS](https://github.com/casperjs/casperjs)に対応した豊かなフレームワーク。Geminiは非推奨であり、hermioneを使用してください。
- [Huxley](https://github.com/facebookarchive/huxley) - [Selenium Webdriver](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver)に基づくPythonフレームワーク。
- [Navalia](https://github.com/joelgriffith/navalia) - ヘッドレスChromeおよびGraphQLに基づくブラウザ自動化。（2018年でアーカイブ）
- [OcularJS](https://github.com/mmacartney10/ocularjs) - [PhantomJS](https://github.com/ariya/phantomjs)を使用。
- [PhantomCSS](https://github.com/Huddle/PhantomCSS) - PhantomJSまたはSlimerJSによる視覚/CSSのリグレッションテスト。2017年12月22日以降メンテナンス停止。
- [PhantomFlow](https://github.com/Huddle/PhantomFlow) - 決定木に基づくUIテストの実験的アプローチ。
- [PhantomJS](https://github.com/ariya/phantomjs) - スクリプタブルなヘッドレスWebkit。2018年6月2日以降メンテナンス停止。
- [trifleJS](https://github.com/sdesalas/trifleJS) - インターネットエクスプローラー向けのヘッドレス自動化。（最終更新2016年）
- [Visual Review](https://github.com/xebia/VisualReview) - 視覚リグレッションのテストおよびレビューに使える人間が使いやすいツール。
- [WebdriverCSS](https://github.com/webdriverio/webdrivercss) - WebdriverCSSは[Webdriver.io](https://github.com/webdriverio/webdriverio/)の上に構築され、[Selenium](https://github.com/SeleniumHQ/selenium)に接続されています。

<a id="miscellaneous"></a>
## その他

<a id="contributing"></a>
### 貢献

貢献方法の詳細は[貢献ガイド](https://github.com/mojoaxel/awesome-regression-testing/blob/38f8fcde521b4438fb2fbcaa8d8143d64a2cf404/.github/CONTRIBUTING.md)を参照してください。

<a id="code-of-conduct"></a>
### 行動規範

詳細は[行動規範](https://github.com/mojoaxel/awesome-regression-testing/blob/38f8fcde521b4438fb2fbcaa8d8143d64a2cf404/.github/CODE-OF-CONDUCT.md)を参照してください。要点は次のとおりです。
> 開かれた歓迎的な環境を育むため、貢献者とメンテナーは、年齢、体格、障害、民族、性自認と表現、経験の程度、国籍、外見、人種、宗教、性的指向やアイデンティティにかかわらず、すべての人がハラスメントを受けずにプロジェクトとコミュニティへ参加できるよう努めます。

<a id="license"></a>
### ライセンス

[![CC-BY-SA](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg)](http://creativecommons.org/licenses/by-sa/4.0/)

本作品は [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/) の下で提供されます。
権利者は[すべての貢献者](https://github.com/mojoaxel/awesome-regression-testing/graphs/contributors)です。
