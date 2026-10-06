---
title: "Awesome Ripple"
description: "Rippleの公式リンク、学習資料、ゲートウェイ、コード、ホスト型ツール、コミュニティ、Codiusの一覧。"
licenseSource: "github-vhpoet-awesome-ripple-readme-md"
---

# Awesome Ripple

Rippleの資料を選んで集めた一覧です。公式リンク、学習資料、ゲートウェイ・ブリッジ、コードライブラリとクライアント、ホスト型ツール、コミュニティ、Codiusを収録しています。説明と状態を示すラベルは固定原文に基づきます。

## 公式
- [Ripple公式サイト](https://ripple.com/)
- [RippleのGitHub](https://github.com/ripple/)
- [ブログ](https://ripple.com/insights/)
- [Ripple Labs](https://ripple.com)
- [Twitter](https://twitter.com/ripple/)
- [Facebook](https://www.facebook.com/ripplepay/)
- [Weibo](http://www.weibo.com/RippleLabs/)

## 書籍・文書・動画
- [Wiki](https://ripple.com/wiki/Main_Page)
- [Ripple入門](https://ripple.com/ripple_primer.pdf)
- [Rippleのゲートウェイ](https://ripple.com/ripple-gateways.pdf)
- [Steven ZeilerのRippleプログラミング講座](https://www.youtube.com/user/stevenzeiler/videos?flow=grid&view=0)
- [Wikipedia](https://en.wikipedia.org/wiki/Ripple_(payment_protocol))
- [「Ripple：決済の未来」の動画](https://vimeo.com/73887321)
- [Ripple Labs：お金のインターネットを構築する](https://www.youtube.com/watch?v=aoixyCNWg5k)
- [Ripple Ledgerに接続するVueJS Webアプリの構築](https://itnext.io/develop-awesome-webapps-using-vuejs-webpack-bda08ebb691c)
- [XRPによくある誤解を解く](https://fudbingo.com)

## ゲートウェイ・ブリッジ
- [Bitstamp](http://www.bitstamp.net/)
- [SnapSwap US](https://snapswap.us/)
- [SnapSwap EU](https://snapswap.eu/)
- [RippleCN](http://www.rebopay.com/)
- [RippleChina](http://www.ripplechina.net/)
- [Kraken](https://www.kraken.com/)
- [JustCoin](https://justcoin.com/)
- [RippleWise](https://www.ripplewise.com/)
- [Ripple Union](https://xagate.com)
- [Dividend Rippler](https://www.dividendrippler.com/)
- [Ripple Israel](http://rippleisrael.co.il/)
- [The Rock Trading](https://www.therocktrading.com/)
- [WisePass](https://wisepass.com/)
- [Devcoin](http://ripple.d.evco.in/)
- [BuyXrp](http://buyxrp.net/)
- [BTC2Ripple](https://btc2ripple.com/)
- [NoFiatCoin](http://www.nofiatcoin.com/)
- [Ripple Singapore](https://www.ripplesingapore.com/)
- [PaxMoneta](https://paxmoneta.com)
- [Ripple Market Korea](http://ripple-market.co.kr/)
- [RippleFox](https://ripplefox.com/)
- [ShapeShift](https://shapeshift.io): アカウント不要でコインを即座に購入。固定原文の説明です。
- [saldo.mx](http://saldo.mx/)

## コード
### rippled：ネットワークデーモン
- [rippled](https://github.com/ripple/rippled/): Rippleのピアツーピア・ネットワークデーモン
- [rippledのDockerコンテナ（ノード）](https://github.com/WietseWind/docker-rippled) - [Docker Hub](https://hub.docker.com/r/xrptipbot/rippled/)
- [rippledのDockerコンテナ（バリデーター）](https://github.com/WietseWind/docker-rippled-validator) - [Docker Hub](https://hub.docker.com/r/xrptipbot/rippledvalidator/) - [チュートリアル](https://medium.com/@WietseWind/how-to-run-a-ripple-validator-digitalocean-7e5fca1c3d77)

### Ripple APIと通信するライブラリ
- [ripple-libpp](https://github.com/ripple/ripple-libpp): RCL互換のトランザクション署名とシリアライズを行う、単体で使えるC++ライブラリ
- [ripple-rest](https://github.com/ripple/ripple-rest): Rippleネットワークで支払いを送信し、アカウントを監視するRESTful API
- [ripple-lib](https://github.com/ripple/ripple-lib/): JavaScript
- [xrpl-client](https://www.npmjs.com/package/xrpl-client): 稼働状態の検出と自動再接続に対応する、JavaScript/TypeScriptのNode.js向けWebSocketクライアント
- [xrpl-accountlib](https://www.npmjs.com/package/xrpl-accountlib): Family Seed、Mnemonic、Secret Numbersからの導出と署名を行う、JavaScript/TypeScriptのNode.js向けライブラリ
- [ripple-lib-java](https://github.com/ripple/ripple-lib-java/): Java
- [ripple-lib-ruby](https://github.com/kevinejohn/ripple-lib-rpc-ruby/): Ruby
- [ripple-python](https://github.com/miracle2k/ripple-python/): Pythonライブラリ
- [ripple-python-lib](https://github.com/arsenlosenko/python-ripple-lib): JSON-RPCとData API呼び出しのPython実装
- [ripple-haskell](https://github.com/singpolyma/ripple-haskell/): Haskell
- [rubblelabs/ripple](https://github.com/rubblelabs/ripple): Rippleプロトコルとやり取りするGoパッケージ
- [RippleKit](https://github.com/xasos/RippleKit): Swift

### クライアント・アプリ
- [ripple-client](https://github.com/ripple/ripple-client/): Webクライアント
- [ripple-client-desktop](https://github.com/ripple/ripple-client-desktop): デスクトップクライアント
- [ripple-client-ios](https://github.com/ripple-unmaintained/ripple-client-ios): iOSクライアント
- [ripplecharts](https://github.com/ripple/ripplecharts/): RippleCharts.comのチャートサイト
- [ripple-graph](https://github.com/ripple-unmaintained/ripple-graph): Rippleのグラフ
- [Ripple Go](https://bitbucket.org/dchapes/ripple/): Goパッケージ群とRippleクライアント。
- [Snow](https://github.com/justcoin/snow): Node.jsで書かれたデジタル通貨の交換エンジン。
- [Ripplectron](https://github.com/devjin0617/ripplectron): Electron向けデスクトップクライアント

### その他
- [gatewayd](https://github.com/ripple/gatewayd): Rippleゲートウェイ用ソフトウェアの自動化フレームワーク
- [ripple-blobvault](https://github.com/ripple/ripple-blobvault): Rippleクライアントの永続データを保存するサーバー
- [ripple-authd](https://github.com/ripple/ripple-authd): Rippleのピア支援型の鍵導出サーバー
- [rippled-historical-database](https://github.com/ripple/rippled-historical-database): Rippleの履歴データの正本となるSQLデータベース
- [ripple-data-api](https://github.com/ripple/ripple-data-api)
- [ripple-vault-client](https://github.com/vhpoet/awesome-ripple/blob/2e6ecb224040102b259d08315050b2f01233c31c/ripple-vault-client)
- [federation-php](https://github.com/ripple-unmaintained/federation-php): 静的なJSONデータセットを使う、シンプルなPHPのフェデレーションエンドポイント
- [federation-python](https://github.com/miracle2k/ripple-federation-python): シンプルなフェデレーションエンドポイント用のPythonモジュール。
- [Ripple Rails](https://github.com/singpolyma/ripple-rails/)
- [Ripple Gen](https://github.com/CodeShark/RippleGen/)
- [Ripple Checkout](https://github.com/emschwartz/ripple-donate-widget): Rippleで支払うための埋め込み可能なウィジェット。
- [Magentoプラグイン](http://www.magentocommerce.com/magento-connect/ripple-json-rpc.html)
- [rubblelabs/tx](https://github.com/rubblelabs/tx): Rippleネットワークでトランザクションを実行するツール
- [xrpayments.co](https://xrpayments.co): 通貨換算に対応した支払い要求QRコード生成ツール
- [XRP Text](https://xrptext.com): SMSテキストメッセージを使ってXRPを送信（スマートフォンでなくても利用可能）。固定原文の説明です。

## ホスト型ツール
### クライアント
- [Ripple Trade](https://rippletrade.com/): Ripple Labsが開発した公式クライアント。固定原文の説明です。
- [GateHub](https://gatehub.net/)

### 開発者向けツール
- [Ripple APIツール](https://ripple.com/build/websocket-tool/)
- [Ripple情報ツール](https://ripple.com/build/ripple-info-tool/)
- [Ripple.txt検査ツール](https://ripple.com/tools/txt/)
- [jRippleAPI](https://github.com/pmarches/jStellarAPI)
- [RippleserverのGoogleグループ](https://groups.google.com/forum/#!forum/ripple-server/)

### 取引者向けツール・チャート
- [Ripple Charts](https://ripplecharts.com/)
- [Webr3](http://xrp.webr3.org/usd-xrp)

### 可視化
- [Rippleのグラフ](https://www.ripplecharts.com/%23/graph/)
- [Ripple Live (GateHub)](https://gatehub.net/live)
- [保有額の多いアカウント一覧・台帳統計・XRP分布](https://ledger.exposed)

### その他のツール
- [Ripple Helpers](https://github.com/vhpoet/ripple-helpers/)
- [XRPTools](http://xrptools.com/)
- [XRPValue](http://xrpvalue.com/): リアルタイムのXRP価格。
- [RippleGen](https://github.com/CodeShark/RippleGen): RippleのP2Pネットワーク向けの、シンプルなマルチスレッドのバニティアドレス生成器。
- [Dollero](http://dollero.com/): 国際送金・決済用ソフトウェア

## その他
- [国際Rippleビジネス協会](http://www.ripplebusiness.org/)
- [Rippleフェデレーション](http://ripplefederation.org/)
- [WhatisRipple.info](http://whatisripple.info/)

## コミュニティ
- [Redditのrippleコミュニティ](https://www.reddit.com/r/ripple/)
- [Redditのripplersコミュニティ](https://www.reddit.com/r/ripplers/)
- [XRPTalk](https://xrptalk.org/)
- [Ripple Forum](http://rippleforum.org/)
- [Ripple Lounge](http://www.ripplelounge.com/)
- [RippleusersのGoogleグループ](https://groups.google.com/forum/#!forum/rippleusers)
- [Reddit・Twitter・Discord向けXRP投げ銭ボット](https://xrptipbot.com)

## Codius
- [Codius公式サイト](https://codius.org/)
- [CodiusのGitHub](https://github.com/codius)
- [Codiusホスト](http://codiushosts.com/)
