---
title: "rtckit/awesome-rtc"
description: "rtckit/awesome-rtc の翻訳初稿（未検査）"
licenseSource: "github-rtckit-awesome-rtc-readme-md"
---

# Awesome Real Time Communications [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> メディアとデータをほぼ同時に交換するためのプロトコルと方法論。

## 目次

- [サーバーソフトウェア](#server-software)
  - [汎用](#general-purpose)
  - [SIPサーバー](#sip-servers)
  - [メディアサーバー](#media-servers)
  - [STUN/TURN](#stunturn)
- [運用](#operations)
  - [監視](#monitoring)
  - [テスト](#testing)
  - [デプロイ](#deployment)
  - [Web/APIインターフェース](#webapi-interfaces)
  - [課金](#billing)
- [開発者リソース](#developer-resources)
  - [チュートリアル](#tutorials)
  - [JavaScriptライブラリ](#javascript-libraries)
  - [C/C++ライブラリ](#cc-libraries)
  - [Goライブラリ](#go-libraries)
  - [PHPライブラリ](#php-libraries)
  - [Pythonライブラリ](#python-libraries)
  - [Erlangライブラリ](#erlang-libraries)
  - [Rustライブラリ](#rust-libraries)
  - [Dartライブラリ](#dart-libraries)
- [ブログ](#blogs)
- [ディスカッション](#discussion)
- [イベント](#events)
- [関連リスト](#related-lists)
- [コントリビュート](#contribute)

## サーバーソフトウェア

### 汎用

- [FreeSWITCH](http://freeswitch.org) - オープンソースのマルチプロトコル、クロスプラットフォームなソフトウェアスイッチ。
- [Asterisk](http://asterisk.org) - 複数のプロトコルとプラットフォームをサポートするPBXフレームワーク。

### SIPサーバー

- [Kamailio](http://www.kamailio.org) - キャリアやプロバイダーに広く導入されているオープンソースSIPサーバー。旧称OpenSER。
- [OpenSIPS](http://www.opensips.org) - OpenSER（現在のKamailio）に起源を持つオープンソースSIPサーバー。
- [Routr](https://routr.io) - Node.jsで書かれた軽量SIPプロキシ、ロケーションサーバー、レジストラー。
- [Sippy B2BUA](https://github.com/sippy/b2bua) - Pythonで書かれたバックツーバックユーザーエージェントサーバー。
- [Flexisip](https://github.com/BelledonneCommunications/flexisip) - プロキシ、プレゼンス、グループチャット機能で構成されるSIPサーバースイート。

### メディアサーバー

- [Janus](https://janus.conf.meetecho.com) - 軽量なオープンソースの汎用WebRTCゲートウェイ。
- [LiveKit](https://livekit.io) - スケーラブルなリアルタイム音声・動画アプリケーションを構築するオープンソースWebRTCインフラストラクチャ。
- [RTPProxy](https://www.rtpproxy.org) - 汎用の高性能RTPプロキシ。
- [RTP:Engine](https://github.com/sipwise/rtpengine) - カーネルモジュールとして利用可能な、RTP・UDPベースのメディアトラフィックプロキシ。
- [mediasoup](https://mediasoup.org) - 特化型WebRTC会議システム。
- [SEMS](https://github.com/sems-server/sems) - SIPベースVoIPサービス向けのオープンソースメディア・アプリケーションサーバー。
- [Jitsi](https://jitsi.org/projects) - 会議ソフトウェアに重点を置くRTCオープンソースプロジェクトのコレクション。

### STUN/TURN

- [coturn](https://github.com/coturn/coturn) - 複数プラットフォームをサポートする、機能が充実したTURN/STUNサーバー。
- [eturnal](https://eturnal.net/) - Erlangで書かれたモダンでスケーラブルなSTUN/TURNサーバー。
- [natcheck](https://github.com/1mb-dev/natcheck) - NATタイプ診断CLI。STUNサーバーを調査し、RFC 5780に従ってマッピング動作を分類し、WebRTC直接P2Pの予測を報告する。
- [STUNTMAN](https://github.com/jselbie/stunserver) - RFC準拠のオープンソースSTUN実装。


	## 運用

### 監視

- [sngrep](https://github.com/irontec/sngrep) - ターミナルベースのSIPフロービューアー。
- [sipgrep](https://github.com/sipcapture/sipgrep) - SIPトラフィックのスニッフィング、キャプチャ、探索を行うコンソールツール。
- [rtpbreak](https://github.com/Naishy/rtpsplit) - RTPセッションを検出、再構築、分析する。
- [HOMER](https://github.com/sipcapture/homer) - RTC向けマルチプロトコルのキャプチャ・監視フレームワーク。
- [WebRTC Troubleshooter](https://github.com/webrtc/testrtc) - セルフホスト可能なワンストップのクライアント側WebRTCトラブルシューター。
- [Trickle ICE](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice) - クライアント側のNATトラバーサルデバッグデータを公開する。
- [SIP3](https://sip3.io) - VoIP・RTCトラフィックの監視・分析プラットフォーム。

### テスト

- [SIPp](http://sipp.sourceforge.net) - SIPプロトコル向けトラフィックジェネレーター。
- [SIPVicious](https://github.com/EnableSecurity/sipvicious) - SIPベースのVoIPシステム監査に使用できるセキュリティツールスイート。
- [sipsak](https://github.com/nils-ohlmeier/sipsak) - SIPストレス・診断ユーティリティ。
- [sipexer](https://github.com/miconda/sipexer) - モダンで柔軟なSIPコマンドラインツール。

### デプロイ

- [slimswitch](https://github.com/rtckit/slimswitch) - 無駄がなく安全なFreeSWITCH Dockerイメージを作るツール群。

### Web/APIインターフェース

- [Eqivo](https://eqivo.org) - オープンソースのプログラマブル音声・電話APIプラットフォーム。
- [Kazoo](https://www.2600hz.org) - FreeSWITCHとKamailioを使うキャリアグレードVoIP APIプラットフォーム。
- [FusionPBX](https://www.fusionpbx.com) - FreeSWITCH上に構築されたマルチテナントシステム。
- [FreePBX](https://www.freepbx.org) - Asterisk用ウェブマネージャー。
- [Fonoster](https://github.com/fonoster/fonoster) - Node.jsで構築された通信スタック。
- [Wazo](https://wazo-platform.org) - Asterisk、Kamailio、RTPEngine上に構築されたVoIP APIプラットフォーム。
- [jambonz](https://www.jambonz.org) - 通信サービスプロバイダー向けに構築されたオープンソースCPaaS。
- [IVOZ Provider](https://github.com/irontec/ivozprovider) - VoIP電話プロバイダー向けのマルチテナントソリューション。
- [Sayna](https://github.com/SaynaAI/sayna) - WebSocketストリーミング、SIP電話、差し替え可能なSTT/TTSプロバイダーを備えた音声AI向けリアルタイム音声インフラストラクチャ。

### 課金

- [CGRateS](http://cgrates.org) - キャリアグレードのオープンソース課金・料金計算サーバー。
- [A2Billing](http://www.asterisk2billing.org) - 複数アプリケーション向けAsterisk課金システム。
- [PyFreeBilling](https://github.com/mwolff44/pyfreebilling) - KamailioとFreeSWITCH向け卸売課金プラットフォーム。


## 開発者リソース

### チュートリアル

- [Official Website](https://webrtc.org) - 初級レベルのWebRTCリソース。
- [Getting Started With WebRTC](https://www.html5rocks.com/en/tutorials/webrtc/basics) - HTML5 RocksによるWebRTCチュートリアル。
- [WebRTC Samples](https://webrtc.github.io/samples) - WebRTC APIのさまざまな部分を示すサンプル集。
- [WebRTC Experiments](https://www.webrtc-experiment.com) - Muaz Khanによる包括的なサンプルリスト。
- [Interactive Codelab](https://codelabs.developers.google.com/codelabs/webrtc-web) - Googleによる30分の段階的ライブチュートリアル。

### JavaScriptライブラリ

- [drachtio](https://drachtio.org) - Node.js SIPサーバーフレームワーク。
- [adapter.js](https://github.com/webrtcHacks/adapter) - WebRTC仕様の変更・不整合を抽象化するJavaScript shim。
- [JsSIP](http://jssip.net) - 軽量なオープンソースJavaScript SIPライブラリ。
- [sipML5](https://www.doubango.org/sipml5) - WebRTCメディアスタックを持つオープンソースJavaScript SIPクライアント。
- [simple-peer](https://github.com/feross/simple-peer) - Node.jsとブラウザー向けのWebRTC動画・音声・データチャネル抽象化。
- [Netflux](https://github.com/coast-team/netflux) - クライアント・サーバー向けの同型JavaScriptピアツーピア転送API。
- [PeerJS](https://peerjs.com) - WebRTC上に実装されたデータ・メディアP2P接続API。
- [Socio](https://github.com/Rolands-Laucis/Socio) - WebSocket Real-Time Communication（RTC）APIフレームワーク。リアルタイムのフロントエンド・バックエンドリアクティビティ。

### C/C++ライブラリ

- [libre](https://github.com/creytiv/re) - メディア処理、STUN/TURN、モジュール式ユーザーエージェント向けの付属ライブラリを備えた移植性の高いSIPスタック。
- [PJSIP](https://www.pjsip.org) - Cで書かれたマルチプロトコルRTCライブラリ。
- [eXosip](http://savannah.nongnu.org/projects/exosip) - SIPプロトコルを抽象化する成熟したCライブラリ、eXtended osip。
- [libdatachannel](https://github.com/paullouisageneau/libdatachannel) - スタンドアロンのWebRTC DataChannels C++実装。
- [icey](https://github.com/nilstate/icey) - FFmpegパイプライン、Sympleシグナリング、RFC 5766 TURNを備えるC++20 WebRTCメディアランタイム。
- [libSRTP](https://github.com/cisco/libsrtp) - C向けSecure Real-time Transport Protocol（SRTP）ライブラリ。
- [usrsctp](https://github.com/sctplab/usrsctp) - 移植性の高いStream Control Transmission Protocol（SCTP）ユーザーランドスタック。
- [rawrtc](https://github.com/rawrtc/rawrtc) - 小さなフットプリントのWebRTC・ORTCライブラリ。
- [OSS Core](https://github.com/joegen/oss_core) - リアルタイム通信向けの汎用C++ライブラリ。
- [Open WebRTC Toolkit](https://01.org/open-webrtc-toolkit) - 複数プラットフォーム向けバインディングを備えたWebRTC開発ツールキット。
- [Sofia-SIP](https://github.com/freeswitch/sofia-sip) - FreeSWITCHが使用するオープンソースSIPライブラリ。

### Goライブラリ

- [Pion](https://pion.ly) - Goで書かれたWebRTC向けの広範なソフトウェアスタック。
- [gossip](https://github.com/StefanKopieczek/gossip) - Goで書かれたステートフルユーザーエージェント向けSIPスタック。
- [siprocket](https://github.com/marv2097/siprocket) - 高速なSIP・SDPパケットパーサー。
- [go-diameter](https://github.com/fiorix/go-diameter) - RFC準拠Diameterプロトコルライブラリ。

### PHPライブラリ

- [RTCKit/SIP](https://github.com/rtckit/php-sip) - PHP 7.4+向けRFC 3261準拠のSIP解析・レンダリングライブラリ。

### Pythonライブラリ

- [aiortc](https://github.com/aiortc/aiortc) - asyncioを使うPython向けWebRTC・ORTC実装。
- [Katari](https://github.com/hyperioxx/Katari) - SIPスタックアプリケーションフレームワーク。
- [peerjs-python](https://github.com/ambianic/peerjs-python) - PeerJSピアツーピア接続ライブラリのPython移植版。

### Erlangライブラリ

- [NkSIP](https://github.com/NetComposer/nksip) - 拡張可能なSIPサーバーフレームワーク。
- [ersip](https://github.com/poroh/ersip) - SIPアプリケーション向けビルディングブロックで構成されたライブラリ。

### Rustライブラリ

- [libsip](https://docs.rs/libsip/0.2.4/libsip) - ソフトフォンクライアントを主眼としたSIP実装。
- [sipcore](https://github.com/armatusmiles/sipcore) - SIPアプリケーション作成のためのRustフレームワーク。
- [rtcrs/webrtc](https://github.com/rtcrs/webrtc) - SDP、RTP、RTCP、SRTPをサポートするWebRTCスタック。

### Dartライブラリ

- [dart-sip-ua](https://github.com/cloudwebrtc/dart-sip-ua) - WebSocket経由のSIPに対応するJsSIPのDart-lang移植版。


## ブログ

- [BlogGeekMe](https://bloggeek.me/blog) - WebRTCに強く焦点を置くTsahi Levent-Leviのブログ。
- [SIP Adventures](https://andrewjprokop.wordpress.com) - Andrew Prokopによる統合コミュニケーションブログ。
- [WebRTCHacks](https://webrtchacks.com) - 独立した技術者によるWebRTCブログ。


## ディスカッション

- [FreeSWITCH Slack](https://signalwire.community) - 利用者・開発者向けサポートとして#freeswitchと#freeswitch-devに参加する。
- [discuss-webrtc](https://groups.google.com/forum/?fromgroups#!forum/discuss-webrtc) - WebRTCの議論を行う開発者向けGoogle Group。


## イベント

- [ClueCon](http://cluecon.com) - FreeSWITCH発祥の地であり、シカゴで開催される通信開発者向け年次会議。
- [Kamailio World](https://www.kamailioworld.com) - Kamailio、VoIP、WebRTC、IMS、VoLTEなどに焦点を置くベルリン開催の年次イベント。
- [AstriCon](https://www.asterisk.org/community/astricon-user-conference) - 米国各地で毎年開催されるAsteriskに焦点を置いたイベント。
- [CommCon](https://commcon.xyz) - 英国で開催される、一般的な通信、とりわけWebRTCに焦点を置いた年次会議。
- [OpenSIPS Summit](https://www.opensips.org/events) - OpenSIPSコミュニティの集会場所。
- [Kranky Geek](https://krankygeek.com) - サンフランシスコのAI・RTCイベント。
- [FOSDEM](https://fosdem.org) - 欧州で毎年開催される、RTCコンポーネントを含むソフトウェア開発者向けの無料イベント。
- [JanusCon](https://www.januscon.it) - JanusとRTC実装者のためのライブイベント。
- [TADHack](https://tadhack.com) - プログラマブル通信に焦点を置くグローバルハッカソン。


## 関連リスト

- [Awesome RIPT](https://github.com/rtckit/awesome-ript) - 電話通信のためのリアルタイムインターネットピアリング。
- [Awesome RTC Hacking](https://github.com/EnableSecurity/awesome-rtc-hacking) - リアルタイム通信のハッキング・ペネトレーションテストリソース。
- [Awesome 5G](https://github.com/calee0219/awesome-5g) - 5Gのフレームワーク、ライブラリ、ソフトウェア、リソース。
- [Awesome Cellular Hacking](https://github.com/W00t3k/Awesome-Cellular-Hacking) - 3G/4G/5Gセルラーセキュリティ領域における研究リソース。
- [Awesome Telco](https://github.com/ravens/awesome-telco) - Telcoリソース・プロジェクト。
- [SIP Resources](https://github.com/miconda/sip-resources) - Kamailioの主任開発者が厳選した有用なSIPリソース。


## コントリビュート

貢献を歓迎します。まず[コントリビューションガイドライン](https://github.com/rtckit/awesome-rtc/blob/ffdeda8737987b1a1ce305c6089552942c274a3a/CONTRIBUTING.md)をお読みください。
