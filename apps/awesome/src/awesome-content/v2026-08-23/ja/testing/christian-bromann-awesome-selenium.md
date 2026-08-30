---
title: "Awesome Selenium"
description: "Seleniumを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-christian-bromann-awesome-selenium-readme-md"
---

# Awesome Selenium

Seleniumを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## リソース

- [ツール](#tools)
- [CSS回帰テスト](#css-regression-testing)
- [コンテナ](#containers)
- [ドライバー](#driver)
- [デスクトップツール](#desktop-tools)
- [Selenium Grid](#selenium-grid)
- [クラウドサービス](#cloud-services)
- [デバイスファーム](#device-farms)
- [Webスクレイピング／マイニング](#web-scraping--mining)
- [仕様](#specifications)
- [ブログ](#blogs)

### ツール

#### Javascript

- [selenium-webdriver](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs) - Seleniumプロジェクト公式のWebDriver JavaScriptバインディング。
- [WD](https://github.com/admc/wd) - WebDriver/Selenium 2用node.jsクライアント。
- [WebdriverIO](http://webdriver.io) - 50以上の定義済みアクションを備えた、より優れたWebDriverバインディング実装。
- [Zombie.js](http://zombie.js.org/) - 非常に高速なヘッドレスのフルスタックテスト。
- [SlimerJS](http://slimerjs.org/) - Web開発者向けのスクリプト可能なブラウザー。
- [Nightwatch](http://nightwatchjs.org/) - 効率的で分かりやすいJavaScriptエンドツーエンドテスト。
- [Karma](http://karma-runner.github.io/0.12/index.html) - ユニットテスト（主にAngularJS）向けに、開発者へ生産的なテスト環境を提供する。
- [Protractor](https://angular.github.io/protractor/) - AngularJSアプリケーション向けのエンドツーエンドテストフレームワーク。
- [CodeceptJS](http://codecept.io/) - NodeJS向けのモダンな受け入れテストフレームワーク。

#### Ruby

- [Selenium with Ruby](http://seleniumhq.github.io/selenium/docs/api/rb/index.html) - SeleniumのRubyバインディング。
- [Watir](http://watir.github.io) - 苦痛を伴わない自動テスト。
- [Anemone](https://github.com/chriskite/anemone) - Anemone Webスパイダーフレームワーク。
- [Mechanize](http://docs.seattlerb.org/mechanize/) - Webサイトとの操作を自動化する。
- [Spidr](https://github.com/postmodern/spidr) - サイト、複数ドメイン、特定リンク、または無限にクロールできるWebスパイダーライブラリ。
- [cobweb](https://rubygems.org/gems/cobweb) - resqueを用いてクロールをクラスタリングし、非常に大規模なサイトを素早くクロールできるWebクローラー。
- [Capybara](https://rubygems.org/gems/capybara) - rackベースWebアプリケーション向けの統合テストツール。ユーザーがWebサイトと対話する方法をシミュレートする。

#### PHP

- [Facebook WebDriver](https://github.com/facebook/php-webdriver) - webdriver向けPHPクライアント。
- [Selenium Setup](https://github.com/bogdananton/Selenium-Setup) - PHP開発者が独自のSeleniumサーバーを起動するためのツール。
- [Steward](https://github.com/lmc-eu/steward) - php-webdriverとPHPUnitを統合するテストランナー。

#### Python

- [Selenium with Python](http://selenium-python.readthedocs.io/) - SeleniumのPythonバインディング。
- [Helium](https://github.com/mherrmann/selenium-python-helium) - Seleniumをより簡単かつ高速に使えるようにする。
- [Selene](https://github.com/yashaka/selene) - Selenideに着想を得た簡潔で読みやすい自動テストフレームワーク。Selenideと同様にAjaxを適切にサポートする。
- [mechanize](http://wwwsearch.sourceforge.net/mechanize/) - 状態を持つプログラム的Webブラウジング。
- [Robot](http://robotframework.org/) - 受け入れテストとATDDのための汎用テスト自動化フレームワーク。
- [behave-webdriver](https://github.com/spyoungtech/behave-webdriver) - SeleniumとPythonを用いた振る舞い駆動テスト。

#### Java

- [Selenium with Java](http://seleniumhq.github.io/selenium/docs/api/java/index.html) - SeleniumのJavaバインディング。
- [Conductor](http://conductor.ddavison.io) - テスト作成を容易にする高速化済みSeleniumフレームワーク。
- [darcy](https://github.com/darcy-framework/darcy-webdriver) - 構造化され保守しやすい自動化のためのページオブジェクトフレームワーク。
- [Selenide](https://github.com/codeborne/selenide) - Fluent APIを使い、読みやすく保守しやすい自動テストを書くためのフレームワーク。Ajaxやタイムアウトの大部分を解決する仕組みを持つ。
- [Galen Framework](http://galenframework.com/) - レスポンシブWebサイトのルックアンドフィールを自動テストする。
- [Serenity](http://www.thucydides.info/) - より高品質な自動受け入れテストを素早く書くためのオープンソースライブラリ（旧Thucydides）。
- [seleniumQuery](https://github.com/seleniumQuery/seleniumQuery) - JavaでWebDriver向けに提供するjQuery風のクロスドライバーインターフェース。薄いレイヤーとして単独でも、必要な場合に検証や待機を簡単にする目的で任意のフレームワーク上でも使える。
- [WebDriverManager](https://github.com/bonigarcia/webdrivermanager) - Selenium WebDriverバイナリーを自動管理する。
- [Lightning](https://github.com/aerokube/lightning-java) - 軽量かつ非常に高速なWebDriverクライアント。

#### C#

- [Selenium with C#](http://seleniumhq.github.io/selenium/docs/api/dotnet/index.html) - SeleniumのC#バインディング。
- [Atata](https://github.com/atata-framework/atata) - Selenium WebDriverに基づく、機能豊富な自動Webテストフレームワーク。
- [Strontium](https://github.com/jimevans/strontium) - Selenium/WebDriver（Remote）Server向けの.NET実装（ただし旧式）。

#### Groovy

- [Geb](http://www.gebish.org/) - スクリプト作成、スクレイピング、一般的な自動化に使えるほか、Spock、JUnit、TestNGなどのテストフレームワークとの統合により、機能・Web・受け入れテストのソリューションとしても使える。

#### Dart

- [dart.webdriver](https://github.com/google/webdriver.dart) - Dart向けWebDriverバインディングを提供する。WebDriver JSONインターフェースを利用するため、WebDriverリモートサーバーが必要になる。

### CSS回帰テスト

- [WebdriverCSS](https://github.com/webdriverio/webdrivercss) - [WebdriverIO](http://webdriver.io)向けの回帰テストツール（現在は非推奨。しばらくは[wdio-screenshot](https://www.npmjs.com/package/wdio-screenshot)を使用）。

- [Website-Diff](https://github.com/GeiserX/Website-Diff) - Wayback Machine対応とSeleniumによる視覚的回帰テストを備えた、インテリジェントなWebページ比較ツール。

- [Wopee.io](https://wopee.io) - AI搭載テストエージェントによる自律型の視覚的回帰テストプラットフォーム。Playwright、Cypress、Robot Frameworkと統合する。

### コンテナ

#### Docker

- [elgalu/docker-selenium](https://github.com/elgalu/docker-selenium) - ChromeとFirefoxに加え、ビデオ記録もサポートするDocker上のSelenium。
- [Ggr](https://github.com/aerokube/ggr) - 大規模なSeleniumクラスターを作るための軽量ロードバランサー。
- [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) - ChromeとFirefoxを備えたSelenium Standalone Server、Hub、Node構成用のDockerイメージ。
- [Selenoid](https://github.com/aerokube/selenoid) - Dockerコンテナでブラウザーを起動する軽量なSelenium hub実装。
- [zalando/zalenium](https://github.com/zalando/zalenium) - 使い捨て可能で柔軟なSelenium Gridインフラストラクチャを誰でも利用できるようにする。
- [bravostudiodev/bravo-grid](https://github.com/bravostudiodev/bravo-grid) - Selenium Grid Extras（Selenium Grid節を参照）向けDockerイメージ／セットアップ。リモートSikuliテスト・自動化の実行とグリッドノードのファイルアップロード／ダウンロードを提供する。

#### Kubernetes

- [kubernetes/examples](https://github.com/kubernetes/examples/tree/master/staging/selenium) - KubernetesクラスターにSelenium HubとNodeをデプロイする例。
- [Moon](https://github.com/aerokube/moon) - Kubernetesでブラウザーを起動する、商用クローズドソースのエンタープライズSelenium実装。
- [Callisto](https://github.com/wrike/callisto) - Kubernetesでブラウザーを起動するオープンソースツール。Seleniumセッションごとに分離環境を作成する。
- [WebGrid](https://github.com/TilBlechschmidt/WebGrid) - オープンソース、分散型、スケーラブルで堅牢なselenium-grid相当品。

### ドライバー

#### デスクトップ（ブラウザー）

- [Firefox](https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver) - Firefoxドライバー。FF v48未満用はダウンロード可能なselenium-server-standalone.jarに含まれる。
- [Geckodriver](https://github.com/mozilla/geckodriver) - Firefoxドライバー（FF v48超）。Selenium v3以上でサポートされる。
- [Chrome](https://sites.google.com/a/chromium.org/chromedriver/home) - ChromeDriverはChromium向けにWebDriverのwire protocolを実装するスタンドアロンサーバー。
- [Internet Explorer](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver) - InternetExplorerDriverはWebDriverのwire protocolを実装するスタンドアロンサーバー。
- [Edgedriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) - Edge用Microsoft Webdriverサーバー。
- [Safari](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver) - SafariDriverはSafariブラウザー拡張として実装される。従来のクライアント／サーバー関係を反転し、WebSocketsでWebDriverクライアントと通信する（Safari v9以下のみ対応。macOS Sierra以降のSafariにはAppleによるクローズドソースのSafariDriverが統合されている）。
- [Opera](https://github.com/operasoftware/operachromiumdriver/blob/master/README.md) - OperaDriverはOpera Softwareとボランティアが開発した、Opera向けWebDriver APIを実装するベンダーサポート付きWebDriver実装。

#### モバイル（ブラウザーとアプリ）

- [Appium](http://appium.io/) - ネイティブおよびハイブリッドモバイルアプリ用のオープンソーステスト自動化フレームワーク。WebDriverプロトコルでiOS・Androidアプリを操作する。
- [Selendroid](http://selendroid.io/mobileWeb.html) - Android instrumentationフレームワークに基づく。
- [ios-driver](http://ios-driver.github.io/ios-driver/) - Selenium / WebDriverを使い、任意のiOSネイティブ、ハイブリッド、またはモバイルWebアプリケーションをテストする。
- [WebDriverAgent](https://github.com/manishPatwari/WebDriverAgent) - WebDriver API経由でデバイスをリモート操作するiOS向けWebDriverサーバー。

#### デスクトップGUI自動化（非ブラウザー中心）

- [WinAppDriver](https://github.com/Microsoft/WinAppDriver) - Windowsアプリケーション自動化のためのMicrosoft WebDriver実装。
- [Winium](https://github.com/2gis/Winium) - Windowsプラットフォーム向け自動化フレームワーク。無料かつオープンソースで、Seleniumベース。Windows Desktop（WPF、WinForms）、Windows StoreまたはWindows Phone向けUniversal Apps、Windows Phone Silverlight Appsをサポートする。
- [QtWebDriver](https://github.com/cisco-open-source/qtwebdriver) - WebDriverでQtベースGUIアプリケーションを自動化するためのツール。
- [AutoItDriverServer](https://github.com/daluu/AutoItDriverServer) - （Remote）WebDriver APIを介してAutoItを制御・操作するSeleniumサーバー。
- [AutoPyDriverServer](https://github.com/daluu/AutoPyDriverServer) - （Remote）WebDriver APIを介してAutoPyを制御・操作するSeleniumサーバー。
- [Appium for Mac](https://github.com/christian-bromann/awesome-selenium/blob/1c1380f5fa8f84095a2596f81d73b1e6bc5215cb/[https:/appium.io/docs/en/drivers/mac/](https:/github.com/appium/appium-mac2-driver)) - Mac OS Xデスクトップを自動化するためのAppium/WebDriver実装。
- [SilkAppDriver](https://github.com/MicroFocus/SilkAppDriver) - （Remote）WebDriver APIを介して商用SilkTestプラットフォームを制御するSeleniumサーバー。

### デスクトップツール

- [SWET](https://github.com/sergueik/SWET) - 同等の機能を提供するSWD Page Recorderの後継。
- [Looking Glass](https://github.com/dmolchanenko/LookingGlass) - クロスブラウザー要素インスペクターとSeleniumコードジェネレーターを提供するJavaアプリケーション。
- [Silk WebDriver](https://www.microfocus.com/products/silk-portfolio/silk-webdriver/) - SilkTestの開発元が提供する、記録・再生・スクリプト書き出し向けSelenium IDE代替品。
- [Fire IE Selenium](https://code.google.com/archive/p/fire-ie-selenium/) - Internet Explorerブラウザー向けの要素検査を提供する、Microsoft Excelベースのツール。

### Selenium Grid

- [Selenium Grid Extras](https://github.com/groupon/Selenium-Grid-Extras) - ビデオ記録など、基本のSelenium Gridを超える追加機能を提供するフレームワーク。
- [SeLion](https://github.com/paypal/SeLion) - 基本のSelenium Grid機能を超え、特に安定性向上などの機能を備えてSeleniumテストを実行するための（Java）フレームワーク。
- [Selenium Grid Extensions](https://github.com/sterodium/selenium-grid-extensions) - Sikuliテスト／自動化のリモート実行やグリッドノード上のファイルアップロード／ダウンロードなど、Selenium Gridへ追加機能を提供する拡張セット。

### クラウドサービス

- [Sauce Labs](https://saucelabs.com) - 優れたクロスブラウザーテスト。300以上のOS／ブラウザープラットフォームでSeleniumテスト、モバイルテスト、JSユニットテストを行える。無料で開始可能。
- [HeadSpin](https://www.headspin.io/) - 数千台の実デバイス上の実ブラウザーでWebサイトのクロスブラウザー互換性をテストする。クラウド上の複数のデスクトップ・モバイルブラウザーへ即座にアクセスでき、無料トライアルを提供する。
- [Browserstack](https://www.browserstack.com/) - 実ブラウザーでWebサイトのクロスブラウザー互換性をテストする。複数のデスクトップ・モバイルブラウザーへ即座にアクセスでき、無料トライアルを提供する。
- [TestGrid](https://www.testgrid.io/) - 1,000以上の実ブラウザーとOSでモバイルアプリ・Webサイトのエンドツーエンドテストを行う。無料トライアルを提供する。
- [LambdaTest](https://www.lambdatest.com/selenium-automation) - 2,000以上の実ブラウザーとOSでWebサイトのクロスブラウザー互換性をテストする。無料トライアルを提供する。
- [TestingBot](https://testingbot.com) - クラウドでSeleniumによる簡単なクロスブラウザーテストを提供する。
- [Moon Cloud](https://aerokube.com/moon-cloud/) - 分単位課金と無制限のブラウザー数を備えた、パブリッククラウド上の専用Seleniumクラスター。
- [Mail7](https://www.mail7.io/) - メールワークフローテストを自動化する使い捨てメールサービス。[この文書](https://docs.mail7.io/tutorials/registration-and-login-automation-using-selenium-with-disposable-email)では、使い捨てメールでMail7をSeleniumと実装する方法を説明する。
- [Thundra Foresight](https://www.thundra.io/foresight) - テスト失敗を素早く見つけることでテストスイートを可視化するツール。
- [Hyperbrowser](https://hyperbrowser.ai/) - プロキシ、CAPTCHA解決、セッション記録などの高度な機能を備え、ヘッドレスChromeによるSelenium自動化を実行・スケールさせるブラウザーインフラストラクチャと自動化。

### デバイスファーム

- [OpenSTF](https://github.com/DeviceFarmer/stf) - 主にAndroid向けだがiOSにも対応する、独自のデバイスファームを運用するフレームワーク。

### Webスクレイピング／マイニング

- [Scrapy](http://scrapy.org) - **Python**向けの主にスクレイパー／マイナー。高速で十分に文書化され、優れたマイニングデプロイメントのために[Django Dynamic Scraper](http://django-dynamic-scraper.readthedocs.org/en/latest/)や、PaaS（サーバーレス）デプロイメントのために[Scrapy Cloud](http://scrapinghub.com/scrapy-cloud.html)と連携できる。端末またはサーバーのスタンドアロンプロセスで動作し、**Celery**上に構築されたものを利用できる。
- [Node-Crawler](https://github.com/sylvinus/node-crawler) - NodeJSおよびサーバーサイドjQuery向けの**Node.js** Webクローラー／スパイダー。

### 仕様

- [The WebDriver Wire Protocol](https://www.selenium.dev/documentation/legacy/json_wire_protocol/) - ブラウザーまたはRemoteWebDriverサーバーと通信するすべてのWebDriver実装は、共通のwire protocolを使用する必要がある。
- [WebDriver](http://www.w3.org/TR/webdriver/) - WebDriver APIを定義する仕様。プログラムやスクリプトがWebブラウザーの動作を検査・制御できる、プラットフォームと言語に依存しないインターフェースおよび関連wire protocolを提供する。

### ブログ

- [Official Selenium Blog](https://www.selenium.dev/blog/) - SeleniumHQによる公式ブログ。
- [Elemental Selenium](http://elementalselenium.com/) - Seleniumをプロのように使うための週1回配信の無料メール。
- [SauceLabs Blog](https://saucelabs.com/blog) - SauceLabsがキュレーションするブログ。

## ライセンス

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

法律の及ぶ範囲で、[Christian Bromann](http://www.christian-bromann.com/)はこの著作物に対するすべての著作権および関連する権利・隣接権を放棄しています。
