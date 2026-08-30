---
title: "Awesome Smart TV"
description: "Smart TVを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-vitalets-awesome-smart-tv-readme-md"
---

# Awesome Smart TV

Smart TVを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
* [プラットフォーム](#platforms)
  * [Samsung Tizen](#samsung-tizen)
  * [LG webOS](#lg-webos)
  * [Android TV](#android-tv)
  * [Apple tvOS](#apple-tvos)
  * [Google Chromecast](#google-chromecast)
* [クロスプラットフォームフレームワーク](#cross-platform-frameworks)
* [遠隔操作プロトコル](#remote-control-protocols)
* [クロスプラットフォームツール](#cross-platform-tools)
* [ナビゲーションライブラリ](#navigation-libraries)
* [テスト](#testing)
* [その他](#misc)
* [コミュニティ](#community)

## プラットフォーム <a id="platforms"></a>
以下はSmart TVで最も普及しているプラットフォームです。完全な一覧は[こちら](https://en.wikipedia.org/wiki/List_of_smart_TV_platforms_and_middleware_software)。

### Samsung Tizen
#### 公式リソース <a id="official-resources"></a>
* [Samsung TV Developers site](http://developer.samsung.com/tv) - ニュース、ドキュメント、SDKのダウンロード。
* [Tizen TV Developers site](https://developer.tizen.org/tizen/tv) - Tizen TVアプリ開発向けの完全なAPIドキュメントとガイド。
* [Tizen Studio](https://developer.tizen.org/development/tizen-studio/download) - Tizen TV Emulatorを含むTVアプリ開発用IDE。
* [Smart View SDK](http://developer.samsung.com/tv/develop/extension-libraries/smart-view-sdk/download/) - 遠隔機器とSamsung Smart TVの通信向け公式Android、iOS、JavaScript SDK。
* [Samsung TV Developers Forum](http://developer.samsung.com/forum/?topCtgy=06) - Samsung SDKによるアプリ開発について質問し、ヒントを共有。
* [Samsung Smart TV Bug Bounty](https://samsungtvbounty.com) - Samsung TVでバグを発見した場合、ここへ報告すると1,000ドル以上の報奨金を得られる。
* [vscode-extension-tizentv](https://marketplace.visualstudio.com/items?itemName=tizensdk.tizentv) - Tizenアプリケーション開発者向けの軽量IDEを提供するVisual Studio Code拡張。
* [Wits](https://github.com/Samsung/Wits) - 変更のたびにアプリを再インストールせず、TVアプリのJavaScript／CSSを再読み込みするツール。

#### サードパーティ遠隔操作ライブラリ <a id="third-party-remote-control-libraries"></a>
* [samsungctl](https://github.com/Ape/samsungctl) - TCP/IP接続でSamsungテレビを遠隔操作するライブラリ兼コマンドラインツール。2016年以前のテレビと、EthernetまたはWi-Fi接続を備えた現代のTizen OSテレビの大部分に対応（Python）。
* [samsung-tv-remote](https://github.com/Badisi/samsung-tv-remote) - 2016年以降のSamsung Smart TVを遠隔操作するNode.jsモジュール（JavaScript）。
* [homebridge-samsungtv2016](https://github.com/kyleaa/homebridge-samsungtv2016) - [Homebridge](https://github.com/nfarina/homebridge)向けプラグイン。2016年製Samsung TVをHomeKitとSiriで操作できる（JavaScript）。
* [homebridge-samsung-tizen](https://github.com/tavicu/homebridge-samsung-tizen) - [Homebridge](https://github.com/nfarina/homebridge)向けプラグイン。Samsung Tizen TVをHomeKitとSiriで操作できる（JavaScript）。
* [samsung-remote-models-2014-and-newer](https://github.com/tdudek/samsung-remote-models-2014-and-newer) - 2014年以降のSamsung TVモデルに搭載された内部Webサービスとの暗号化通信。
* [SmartCrypto](https://github.com/sectroyer/SmartCrypto) - C／PythonによるSmartView2暗号化ハンドシェイクAPI実装。
* [samsung-messagebox](https://github.com/shantanugoel/samsung-messagebox) - Samsung TVへ通知を表示するPythonスクリプト。
* [samsung-tv-control](https://github.com/Toxblh/samsung-tv-control) - Node.jsでSamsung TVを遠隔操作するライブラリ。

#### その他 <a id="other"></a>
* [Identification of Samsung TV models 2008-2017](http://en.tab-tv.com/?page_id=7123) - Samsung TVのモデル名から画面サイズ、パネル種別、開発年、シリーズ、その他のパラメーターを取得する方法。
* [Tizen Studio development references](https://github.com/claromes/tizenstudio) - 個人研究に基づく、Smart TVと業務用モニター向けWebアプリに焦点を当てた文書。
* [TizenBrew] (https://github.com/reisxd/TizenBrew) - 改造したWebサイトを体験し、Tizen Studioと格闘せずに新しいアプリをインストールする方法。
* [TizenTube] (https://github.com/reisxd/TizenTube) - 広告を削除しSponsorBlockへ対応することで、好みのストリーミングWebサイトの視聴体験を向上するTizenBrewモジュール。
* [Beam-TV](https://github.com/TAGISWILD/beam-tv) - Samsung Tizen TV向けのオープンソース・アカウント不要メディアプレーヤー。USBおよびローカルネットワーク（DLNA）の動画、音声、字幕をテレビで直接再生（JavaScript）。

### LG webOS
#### 公式リソース <a id="official-resources-1"></a>
* [webOS TV Developers Site](http://webostv.developer.lge.com) - webOS TVアプリの開発原則、チュートリアル、APIドキュメント、パッケージツール。
* [webOS TV IDE + SDK](http://webostv.developer.lge.com/sdk/download/download-sdk/) - コマンドラインインターフェースとエミュレーターを含むアプリ開発用IDE。
* [Connect SDK](http://www.svlconnectsdk.com/) - モバイルアプリを複数のメディア機器プラットフォームへ接続する、LG開発のオープンソースフレームワーク。現在8プラットフォームに対応。ただし[放棄された](https://github.com/ConnectSDK/Connect-SDK-Android/issues/364)ように見える。
* [webOS TV Developers Forum](http://developer.lge.com/community/forums/RetrieveForumList.dev?prodTypeCode=TV) - 他の開発者と質問、情報共有、Smart TVアプリ開発の学習を行う。

#### サードパーティ遠隔操作ライブラリ <a id="third-party-remote-control-libraries-1"></a>
* [lgtv2](https://github.com/hobbyquaker/lgtv2) - WebSocketメッセージでLG webOS TVを遠隔操作するNode.jsモジュール（JavaScript）。
* [node-red-contrib-lgtv](https://github.com/hobbyquaker/node-red-contrib-lgtv) - LG webOS Smart TVを遠隔操作できる[Node-RED](https://nodered.org)向けモジュール（JavaScript）。
* [node-webos](https://github.com/WeeJeWel/node-webos) - webOS TVを検出・操作するNode.jsモジュール（JavaScript）。
* [lgtv2mqtt](https://github.com/hobbyquaker/lgtv2mqtt) - LG webOS Smart TVとMQTTのインターフェース（JavaScript）。
* [ares-webos-sdk](https://github.com/stevenvong/ares-webos-sdk) - 独立したNPMモジュールとしてのwebOS [CLI](http://webostv.developer.lge.com/sdk/using-webos-tv-cli/)（JavaScript）。
* [pylgtv](https://github.com/TheRealLink/pylgtv) - webOSベースのLG TV機器を操作するライブラリ（Python）。
* [LGWebOSRemote](https://github.com/klattimer/LGWebOSRemote) - LG TVをwebOS経由で遠隔操作するコマンドラインツール（Python）。
* [homebridge-webos-tv](https://github.com/merdok/homebridge-webos-tv) - webOS TVを操作できる[Homebridge](https://github.com/nfarina/homebridge)向けプラグイン。
* [PyWebOSTV](https://github.com/supersaiyanmode/PyWebOSTV) - 汎用で拡張可能なwebOS 3.0クライアントライブラリ（Python 2、Python 3）。
* [go-webos](https://github.com/vitalets/awesome-smart-tv/blob/4a12d38c5cba1a1672278288a7b7033a03761f86/github.com/kaperys/go-webos) - webOS TVと連携する小さなGoライブラリ。

#### 動画 <a id="videos"></a>
* [LG Magic Motion Remote - Point, Click, and Control](https://youtu.be/yxu0G7jM_us) - コンピューターマウスのようにテレビを操作。

#### その他 <a id="other-1"></a>
* [openlgtv.org.ru](http://openlgtv.org.ru) - LGテレビのファームウェアを合法的にリバースエンジニアリング・研究する非営利プロジェクト。やや古いようだが、多くの情報を収録。
* [Identification of LG TV models 2011-2017](http://en.tab-tv.com/?page_id=7111) - LG TVのモデル名から画面サイズ、パネル種別、開発年、シリーズ、その他のパラメーターを取得する方法。

### Android TV
#### 公式リソース <a id="official-resources-2"></a>
* [Android TV Developers site](https://developer.android.com/training/tv/start/start.html) - Android TVアプリ構築向けのドキュメント、チュートリアル、ベストプラクティス。

#### 記事 <a id="articles"></a>
* [How to develop Android TV App?](https://medium.com/@halilozel1903/how-to-develop-android-tv-app-5e251f3aa56b) - Android TV向けアプリ開発に関する記事。

### Apple tvOS
#### 公式リソース <a id="official-resources-3"></a>
* [tvOS Developers Site](https://developer.apple.com/tvos/) - tvOSアプリ開発向けSDK、ドキュメント、チュートリアル。
* [TVML](https://developer.apple.com/documentation/tvml) - tvOSアプリを作成するApple TV Markup Language。

### Google Chromecast
#### 公式リソース <a id="official-resources-4"></a>
* [Google Cast SDK](https://developers.google.com/cast/) - 公式Google Cast SDKドキュメントとチュートリアル。
* [TVs with Chromecast built-in](https://www.google.com/chromecast/built-in/tv/) - Chromecast内蔵対応メーカーと、従来のテレビリモコンに対する利点の一覧。

## クロスプラットフォームフレームワーク <a id="cross-platform-frameworks"></a>
* [react-tv](https://github.com/raphamorim/react-tv) - TV向けReact開発。低メモリーアプリケーション用レンダラーと、webOS、Tizen、Orsay向けパッケージャー。
* [TOAST](http://developer.samsung.com/tv/develop/extension-libraries/toast/) - マルチプラットフォームTVアプリ開発向けのSamsung製オープンソースフレームワーク。
* [Enyo](http://enyojs.com) - スマートフォン、タブレット、PC、テレビなど、主要プラットフォーム全般のアプリを開発するLG製フレームワーク。
* [Smartbox](https://github.com/immosmart/smartbox) - Samsung、LG、Philips、SmartTV Alliance、STB Magのアプリ開発向け汎用Smart TVライブラリ。
* [Mautilus Smart TV SDK](https://github.com/mautilus/sdk) - TVアプリを開発するプラットフォーム非依存フレームワーク。Samsung、LG、Philips、Sony、Panasonic、VESTEL Smart TVに対応。
* [BBC TAL](https://bbc.github.io/tal/) - BBCのエンジニアが開発した、Smart TV向けアプリケーション構築用オープンソースライブラリ。
* [PureQML TV](https://github.com/pureqml/qmlcore-tv) - WebベースSmart TV／STBプラットフォーム向け宣言型フロントエンドフレームワーク。Android TVへ実験的に対応。
* [ZombieBox](https://github.com/interfaced/zombiebox) - オープンソースSmart TVフレームワーク。強い型付きJavaScript、コンポーネントベース、内蔵D-PADナビゲーション管理、全プラットフォーム向けDRM対応抽象動画APIを備える。Tizen、webOS、Android TVなど多数のプラットフォームに対応。

## 遠隔操作プロトコル <a id="remote-control-protocols"></a>
* [DLNA](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance) - ホームネットワークでデータを共有する業界標準。所有するDLNA対応機器によっては、ノートPCからテレビへ映画を配信し、スマートフォン内のMP3をオーディオシステムで再生し、タブレットの写真を家庭用プリンターで印刷できる。
* [DIAL](http://www.dial-multiscreen.org/) - NetflixとGoogleが開発。スマートフォン、タブレット、コンピューターなどのクライアント機器が、Smart TVやストリーミングボックスなどのサーバー機器上のアプリを検出し、コンテンツを起動できるプロトコル。
* [Wi-Fi Direct](https://en.wikipedia.org/wiki/Wi-Fi_Direct) - 無線アクセスポイントを必要とせず、機器同士を簡単に接続できる標準。
* [Miracast](https://en.wikipedia.org/wiki/Miracast) - ノートPC、タブレット、スマートフォンなどの機器から、テレビ、モニター、プロジェクターなどの画面へ無線接続する標準。Wi-Fi Direct上で動作。

## クロスプラットフォームツール <a id="cross-platform-tools"></a>
* [smartest-tv](https://github.com/Hybirdss/smartest-tv) - 名前を指定して任意のSmart TVでNetflix、YouTube、Spotifyを再生するCLI兼MCPサーバー。LG、Samsung、Android TV、Rokuを横断してコンテンツへディープリンクし、「Frieren S2E8」と言えば再生する（Python）。
* [Fluxcast](https://github.com/IlyaP358/fluxcast) - MiracastとDLNAを介してLinuxデスクトップをSmart TVへミラーリングする使いやすいPythonユーティリティ。GNOME、KDE、wlroots／Waylandに対応。

## ナビゲーションライブラリ <a id="navigation-libraries"></a>
* [lrud](https://github.com/stuart-williams/lrud) - Left、Right、Up、Down。方向キー入力を使う機器向け空間ナビゲーションライブラリ。
* [js-spatial-navigation](https://github.com/luke-chang/js-spatial-navigation) - JavaScriptベースの空間ナビゲーション実装。
* [react-js-spatial-navigation](https://github.com/dead/react-js-spatial-navigation) - js-spatial-navigationをReactコンポーネントへラップ。
* [react-key-navigation](https://github.com/dead/react-key-navigation) - React向け空間ナビゲーションコンポーネント。[「Focus Management」](http://bbc.github.io/tal/widgets/focus-management.html)に類似し、これは[BBC TAL](https://bbc.github.io/tal/)で提供される。
* [react-spatial-navigation](https://github.com/NoriginMedia/react-spatial-navigation) - React向けHOCベース空間ナビゲーション（キーナビゲーション）ソリューション。

## テスト <a id="testing"></a>
* [Suitest](https://suite.st) - Smart TV、ゲーム機、ストリーミングスティックなど向けテスト自動化ソリューション。
* [stb-tester](https://github.com/stb-tester/stb-tester) - セットトップボックスとSmart TV向けの自動ユーザーインターフェーステスト（Python）。

## その他 <a id="misc"></a>
* [LIRC](http://lirc.org) - 一般的なリモコンの多く（すべてではない）の赤外線信号を復号・送信できるパッケージ。
* [awesome-smarttv](https://github.com/linuxenko/awesome-smarttv) - Smart TVリソースの別のリスト。このリストの完成後に発見 :roll_eyes:。
* [docker-tizen-webos-sdk](https://github.com/vitalets/docker-tizen-webos-sdk) - Samsung Tizen CLIとLG webOS CLIを備えたDockerイメージ。Tizen StudioとwebOS SDKをインストールせずにSmart TVアプリを開発、ビルド、起動、デバッグできる。

## コミュニティ <a id="community"></a>
* [Stack Overflow](http://stackoverflow.com/questions/tagged/smart-tv)
* [Reddit](https://www.reddit.com/r/smarttv)

## コントリビュート <a id="contribute"></a>
[新しいIssue](https://github.com/vitalets/awesome-smart-tv/issues)または[Pull Request](https://github.com/vitalets/awesome-smart-tv/pulls)を作成し、経験や有用な拡張リソースを自由に共有してください。
まず[コントリビューションガイドライン](https://github.com/vitalets/awesome-smart-tv/blob/4a12d38c5cba1a1672278288a7b7033a03761f86/CONTRIBUTING.md)をお読みください。ありがとうございます。

## ライセンス <a id="license"></a>
[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
