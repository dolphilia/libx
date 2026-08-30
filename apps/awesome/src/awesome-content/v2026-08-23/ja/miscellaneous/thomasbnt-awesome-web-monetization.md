---
title: "thomasbnt/awesome-web-monetization"
description: "thomasbnt/awesome-web-monetization の定本スナップショット"
licenseSource: "github-thomasbnt-awesome-web-monetization-readme-md"
---

<img src="assets/wm_icon_animated.svg" alt="Logo Web Monetization" align="right" width="120px" />

# Awesome Web Monetization [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

> Web Monetizationに関する優れた情報。さらに学び、モジュールやその他のツールを確認しましょう。

**Web Monetization**は、ブラウザー内で直接送金できるWebサービスです。これは、ユーザーエージェントからWebサイトへの支払いストリームを作成できるJavaScriptブラウザーAPIです。

## 目次

- [Web Monetizationについて](#about-web-monetization)
- [Webサイトの収益化を始める方法](#how-to-start-monetize-my-website)
- [リソース](#resources)
  - [パッケージ](#packages)
  - [チュートリアル](#tutorials)
  - [記事](#articles)
  - [ニュースレター](#newsletters)
  - [ツール](#tools)
  - [コミュニティ](#community)
- [貢献](#contribute)
- [寄付](#donate)

## Web Monetizationについて

- [Webmonetization.org](https://webmonetization.org/)
- [ドキュメント](https://webmonetization.org/docs/)
- [送金時のWeb Monetizationの仕組み](https://webmonetization.org/docs/intro/sending-payments/)
- [受取時のWeb Monetizationの仕組み](https://webmonetization.org/docs/intro/receiving-payments/)
- [仕様](https://webmonetization.org/specification/)
- [ILP Forum（読み取り専用）](https://forum.interledger.org/)
- [Grant For The Web](https://www.grantfortheweb.org/)

---

- [Interledger: 異なる台帳間で支払いを送るオープンプロトコルスイート](https://interledger.org/)

## Webサイトの収益化を始める方法

コンテンツを収益化するには、WalletとProviderアカウントが必要です。以下のプラットフォームで利用できます。

<details><summary>WalletとProviderアカウントの詳細</summary>
<p>

---

| **Wallets** |                                                                                             |                                                                                                                                                                                                         |     |
|:-----------:|:-------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---:|
|    Name     | [![GateHub](https://webmonetization.org/img/logo-wallet-gatehub.svg)](https://gatehub.net/) | [新しいWallet？<br>issueを作成してください！](https://github.com/thomasbnt/awesome-web-monetization/issues/new?assignees=thomasbnt&labels=Wallet%2C+%E2%86%94+WM+repository&template=new-wallet.md&title=%5BWa%5D) |
|    Fees     |                   SEPA: 1.00 EUR < 50,000 EUR<br>Wire: $15 min ($150 max)                   |                                                                                                                                                                                                         |

| **Payments** |        |
|--------------|--------|
| Name         | Empty. |

---

</p>
</details>

Webページでは、meta内に`monetization`タグを統合します。

```html
<link rel="monetization" href="https://ilp.example.com/alice">
```

そして`monetization`が利用可能か検出して処理します。

```js
if (document.monetization) {
  document.monetization.addEventListener("monetizationstart", () => {
    console.log(
      "🎉 Awesome ! You use Web Monetization.\nMore information https://webmonetization.org",
    );
  });
}
```

## リソース

### パッケージ

_パッケージ／モジュールとプラグイン_

- [monetize.js](https://github.com/sunchayn/monetize.js) - Web Monetizationを管理・シミュレートするイベント駆動ライブラリ。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/javascript.png)
- [types-wm](https://github.com/dacioromero/types-wm) - Web MonetizationのTypeScript定義。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/typescript.png)
- [ngx-monetization（アーカイブ済み）](https://github.com/CDDelta/ngx-monetization) - Angular向けWeb Monetization API。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/angular.png)
- [react-hook-wm](https://github.com/dacioromero/react-hook-wm) - Web Monetizationと統合するReact hooks。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/react.png)
- [react-monetize](https://github.com/guidovizoso/react-monetize) - Web Monetization APIとの統合を高速化するヘルパーとhooks。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/react.png)
- [ep_monetization](https://github.com/ISNIT0/ep_monetization) - Etherpadサイトへ支払いポインターmetaタグを適用するプラグイン。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/javascript.png)
- [wp-connect-coil](https://wordpress.org/plugins/wp-connect-coil/) - WordPressサイトへCoil支払いポインターmetaタグを適用するプラグイン。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/wordpress.png)
- [xrptipbot-wordpress-widget](https://wordpress.org/plugins/widget-xrptipbot/) - コンテンツ制作者へ寄付するXRPTIPBOT埋め込みコードに基づくWordPressウィジェット。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/wordpress.png)
- [eleventy-plugin-monetization](https://github.com/DanCanetti/eleventy-plugin-monetization) - 投稿・サイトコンテンツを収益化するEleventyプラグイン。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/11ty.png)
- [web-monetization-components](https://github.com/philnash/web-monetization-components) - Web収益化サイトで使えるWebコンポーネント集。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/javascript.png)
- [revshare](https://github.com/kewbish/revshare) - 収益分配用JSライブラリ。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/javascript.png)
- [web-monetization-proxy](https://github.com/tcdowney/web-monetization-proxy) - Web Monetization metaタグを挿入するシンプルなGoプロキシ。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/go.png)
- [gridsome-plugin-monetization](https://github.com/Sergix/gridsome-plugin-monetization) - Gridsome向けWeb Monetization。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/gridsome.png)
- [vuepress-plugin-web-monetization](https://github.com/spekulatius/vuepress-plugin-web-monetization) - VuePressサイトへweb-monetizationメタタグを追加。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/vuejs.png)
- [jekyll-web_monetization](https://github.com/philnash/jekyll-web_monetization) - サイトへWeb Monetization APIの支払いポインターを追加するJekyllプラグイン。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/jekyll.png)
- [Monetization](https://github.com/KNawm/monetization) - アプリを収益化するWeb Monetization APIラッパー。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/dart.png)
- [react-webmonetization-meta](https://github.com/uchibeke/react-webmonetization-meta) - React向けWeb Monetization metaタグマネージャー。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/react.png)
- [web-monetization-electron-app](https://github.com/Jasmin2895/web-monetization-electron-app) - ElectronアプリでWeb Monetizationを有効化する基本セットアップを示すプロジェクト。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/electron.png)
- [web-monetized-video](https://github.com/Jasmin2895/web-monetized-video) - 視聴した動画量を課金する、再生・支払いポリシーを持つWebコンポーネント。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/javascript.png)
- [web-monetization-polyfill](https://github.com/immers-space/web-monetization-polyfill/) - Content Security Policies有効環境でもJavaScript Web Monetization APIを利用可能にする。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/javascript.png)
- [web-monetization-video-ads](https://www.npmjs.com/package/web-monetization-video-ads) - Web Monetizationと動画広告をつなぎ、フリーミアムビジネスモデルを実装可能にする。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/javascript.png)
- [web-monetization-revenue-share](https://www.npmjs.com/package/web-monetization-revenue-share) - スマートコントラクトを介しコミュニティへ資金を自動再分配。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/javascript.png)
- [awesome-jsgames](https://github.com/proyecto26/awesome-jsgames) - 優れたJavaScriptゲームを厳選した一覧。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/javascript.png)
- [mediadisclosures](https://github.com/oofdere/mediadisclosures) - オープンソースで継続進化する、汎用コンテンツ評価システム。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/javascript.png)
- [web-monetization-demo](https://github.com/peter279k/web-monetization-demo) - Web Monetizationのデモ。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/javascript.png)
- [money-chat](https://github.com/dfoderick/money-chat) - Web Monetizationチャットアプリ。![](https://raw.githubusercontent.com/thomasbnt/awesome-web-monetization/eadec20369e347086dfd86dd08479ef7ed0f10ef/assets/small_icons/javascript.png)

### チュートリアル

- [始める](https://webmonetization.org/docs/guides/monetize-page/) - webmonetization.orgの公式ドキュメント。
- [限定コンテンツ](https://webmonetization.org/docs/guides/provide-exclusive-content/) - Webサイトへ限定コンテンツを置く。
- ['A Web Monetization Story'](https://esse-dev.github.io/a-web-monetization-story/) - オンライン制作者向けの、対話的でストーリーベースのWeb Monetizationチュートリアル。
- [Web Monetization like I'm 5](https://dev.to/hacksultan/web-monetization-like-i-m-5-1418) - Webを収益化！

### 記事

- [Monetizing Content in View](https://dev.to/godwinagedah/monetizing-content-in-view-paying-for-what-you-see-462a) - 見るものに支払う。
- [Web Components](https://dev.to/philnash/web-components-for-the-web-monetization-api-4ed9) - Web Monetization API向け（シリーズ）。

### ニュースレター

- [grantfortheweb.orgのニュースレター](https://www.grantfortheweb.org/signup) - メール更新を購読。

### ツール

- [Probabilistic Revshare Generator - Web Monetization](https://webmonetization.org/prob-revshare/) - 確率的収益分配（revshare）は、Web収益化ページの収益の一部を複数の支払いポインターで分ける方法の一つです。

  > このツールで支払いポインターと重みの一覧を定義してください。
  > 次に、生成されたmonetizationリンク要素をサイトへ追加します。
  > リンクには、https://webmonetization.org/api/revshare/pay/ でホストされる一意のURLが含まれます。
  > ホストURLを使いたくない場合は、サイトにスクリプトを追加してrevshareを設定できます。

- [Is web monetized](https://github.com/jkga/is-web-monetized) - Web Monetizationが有効か確認する非常にシンプルなツール。

  > ```bash
  > npm install is-web-monetized -g
  > monetized example.com
  > ```
  >
  > 依存関係を使ってWebサイトをテストすることもできます。

- [Paytrackr](https://github.com/thomasbnt/paytrackr) - （[wobsoriano/paytrackr](https://github.com/wobsoriano)からフォーク） - マイクロペイメントを一か所で追跡・管理。

  > PayTrackrは、Web Monetizationプロバイダーの会員資格を持つユーザーが、Web収益化サイトへのマイクロペイメントを追跡・管理する最も簡単で安全な方法です。

- [Akita](https://github.com/esse-dev/akita) - Web Monetizationとの関わりを可視化するブラウザー拡張。

  > Akitaは、最も多く訪れた収益化サイト、そこに費やす時間、貢献している（または可能な）額を表示します。

- [Open Monetization Wallet](https://github.com/kristianfreeman/openmonetizationwallet) - バニティWeb Monetizationウォレットを管理するツール。

  > Open Monetization Wallet（OMW）は、大規模にWeb Monetization APIで支払いを受け取りやすくします。主な機能:
  >
  > - カスタムウォレットURL: $pay.stronghold.co/abcdef123の代わりに、$wallet.signalnerve.comのような独自の「Payment Pointer」を所有
  > - ダウンタイムなしにウォレット／プロバイダーを変更
  > - 受信支払いリクエストのログ
  > - 複数ウォレット間での収益分配（例: 複数チームメンバー）
  > - サーバーレステクノロジーにより無限に拡張可能
  > - 無料かつオープンソース

### コミュニティ

- [Web Monetization Community](https://community.interledger.org/)
- [Twitterの@GrantForTheWeb](https://twitter.com/GrantForTheWeb)
- [DEVのWeb Monetizationタグ](https://dev.to/t/webmonetization)

---

## 貢献

貢献を歓迎します！まず[貢献ガイドライン](https://github.com/thomasbnt/awesome-web-monetization/blob/eadec20369e347086dfd86dd08479ef7ed0f10ef/contributing.md)を読んでください。友人とこのリポジトリ・Web Monetizationを共有して貢献することもできます。😄

新しい小アイコンを追加する場合、高さは**16px**である必要があります。`assets/small_icons/NAME.png`へ置いてください。PNG形式のみ受け付けます。

> **Powered by Netlify** ✨

Netlifyが[Webサイト](https://awesomewebmonetization.netlify.app/)を支えています。感謝します！💚

[![Deploys by Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)

## 寄付

このプロジェクトの保守のため、気軽に[私](https://github.com/thomasbnt)を支援してください！すべての**GitHub Sponsorsのスポンサー**に感謝します！

![GitHub Sponsors](https://cdn.jsdelivr.net/gh/thomasbnt/sponsors/sponsors.svg)

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20me-%23EA54AE.svg?&style=for-the-badge&logo=github-sponsors&logoColor=white)](https://github.com/sponsors/thomasbnt) [![Support me on Buy Me a Coffee](https://img.shields.io/badge/Support%20me-on%20Buy%20Me%20a%20Coffee-white?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black&labelColor=%23FFDD00)](https://www.buymeacoffee.com/thomasbnt?via=thomasbnt)
