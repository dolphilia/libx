---
title: "Awesome Real Time Communications"
description: "RTCのサーバーソフトウェア、運用ツール、開発資料、ブログ、議論の場、イベント、関連リスト。"
licenseSource: "github-rtckit-awesome-rtc-readme-md"
---

# Awesome Real Time Communications

リアルタイム通信（RTC）は、メディアとデータをほぼ同時に交換するためのプロトコルと方法を扱います。このリストには、RTCのサーバーソフトウェア、運用ツール、開発者向けチュートリアルとライブラリ、ブログ、議論の場、イベント、関連リストを収録しています。

## サーバーソフトウェア

### 汎用

- [FreeSWITCH](http://freeswitch.org) - 複数のプロトコルに対応した、クロスプラットフォームのオープンソースのソフトウェアスイッチ。
- [Asterisk](http://asterisk.org) - 複数のプロトコルとプラットフォームに対応したPBXフレームワーク。

### SIPサーバー

- [Kamailio](http://www.kamailio.org) - 旧称OpenSERのオープンソースSIPサーバー。固定原文では通信事業者やプロバイダーに広く導入されていると紹介されている。
- [OpenSIPS](http://www.opensips.org) - OpenSERに由来するオープンソースSIPサーバー。固定原文ではOpenSERを現在のKamailioとして説明している。
- [Routr](https://routr.io) - Node.jsで書かれた軽量なSIPプロキシ、ロケーションサーバー、レジストラー。
- [Sippy B2BUA](https://github.com/sippy/b2bua) - Pythonで書かれたB2BUA（Back-to-Back User Agent）サーバー。
- [Flexisip](https://github.com/BelledonneCommunications/flexisip) - プロキシ、プレゼンス、グループチャット機能を備えたSIPサーバースイート。

### メディアサーバー

- [Janus](https://janus.conf.meetecho.com) - 軽量で汎用のオープンソースWebRTCゲートウェイ。
- [LiveKit](https://livekit.io) - リアルタイムの音声・映像アプリケーションを構築するためのオープンソースWebRTC基盤。固定原文ではスケーラブルと紹介されている。
- [RTPProxy](https://www.rtpproxy.org) - 汎用RTPプロキシ。固定原文では高性能と紹介されている。
- [RTP:Engine](https://github.com/sipwise/rtpengine) - RTPおよびUDPベースのメディアトラフィックを中継するプロキシ。カーネルモジュールとしても利用できる。
- [mediasoup](https://mediasoup.org) - 会議向けに特化したWebRTCシステム。
- [SEMS](https://github.com/sems-server/sems) - SIPベースのVoIPサービス向けのオープンソースのメディア・アプリケーションサーバー。
- [Jitsi](https://jitsi.org/projects) - 会議ソフトウェアを中心とするオープンソースRTCプロジェクト集。

### STUN/TURN

- [coturn](https://github.com/coturn/coturn) - 複数のプラットフォームに対応したTURN/STUNサーバー。固定原文では機能が充実していると紹介されている。
- [eturnal](https://eturnal.net/) - Erlangで書かれたSTUN/TURNサーバー。固定原文ではモダンでスケーラブルと紹介されている。
- [natcheck](https://github.com/1mb-dev/natcheck) - NATの種類を診断するコマンドラインツール。STUNサーバーに問い合わせ、RFC 5780に従ってマッピングの挙動を分類し、WebRTCの直接ピアツーピア接続が可能かどうかの予測を報告する。
- [STUNTMAN](https://github.com/jselbie/stunserver) - オープンソースのSTUN実装。固定原文ではRFC準拠と紹介されている。

## 運用

### 監視

- [sngrep](https://github.com/irontec/sngrep) - ターミナルでSIPフローを表示するツール。
- [sipgrep](https://github.com/sipcapture/sipgrep) - SIPトラフィックのスニッフィング、キャプチャ、調査を行うコンソールツール。
- [rtpbreak](https://github.com/Naishy/rtpsplit) - RTPセッションを検出、再構成、分析するツール。
- [HOMER](https://github.com/sipcapture/homer) - 複数のプロトコルにわたるRTCトラフィックのキャプチャ・監視フレームワーク。
- [WebRTC Troubleshooter](https://github.com/webrtc/testrtc) - クライアント側のWebRTCトラブルシューティングをまとめて行えるセルフホスト型ツール。
- [Trickle ICE](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice) - クライアント側のNAT越えのデバッグ情報を表示するツール。
- [SIP3](https://sip3.io) - VoIPとRTCのトラフィックを監視・分析するプラットフォーム。

### テスト

- [SIPp](http://sipp.sourceforge.net) - SIPプロトコル用のトラフィック生成ツール。
- [SIPVicious](https://github.com/EnableSecurity/sipvicious) - SIPベースのVoIPシステムの監査に利用できるセキュリティツール群。
- [sipsak](https://github.com/nils-ohlmeier/sipsak) - SIPの負荷テストと診断を行うユーティリティ。
- [sipexer](https://github.com/miconda/sipexer) - SIPコマンドラインツール。固定原文ではモダンで柔軟と紹介されている。

### デプロイ

- [slimswitch](https://github.com/rtckit/slimswitch) - FreeSWITCHのDockerイメージを作成するツール群。固定原文では、作成するイメージを軽量で安全と紹介している。

### Web/APIインターフェース

- [Eqivo](https://eqivo.org) - プログラムから制御できる音声・電話機能のオープンソースAPIプラットフォーム。
- [Kazoo](https://www.2600hz.org) - FreeSWITCHとKamailioを利用するVoIP APIプラットフォーム。固定原文では通信事業者向けの品質と紹介されている。
- [FusionPBX](https://www.fusionpbx.com) - FreeSWITCH上に構築されたマルチテナントシステム。
- [FreePBX](https://www.freepbx.org) - Asterisk用のWeb管理ツール。
- [Fonoster](https://github.com/fonoster/fonoster) - Node.jsで構築された通信スタック。
- [Wazo](https://wazo-platform.org) - Asterisk、Kamailio、RTPEngine上に構築されたVoIP APIプラットフォーム。
- [jambonz](https://www.jambonz.org) - 通信サービスプロバイダー向けに構築されたオープンソースのCPaaS（Communications Platform as a Service）。
- [IVOZ Provider](https://github.com/irontec/ivozprovider) - VoIP電話サービスプロバイダー向けのマルチテナントソリューション。
- [Sayna](https://github.com/SaynaAI/sayna) - 音声AI向けのリアルタイム音声基盤。WebSocketストリーミング、SIP電話機能、差し替え可能なSTT/TTSプロバイダーを備える。

### 課金

- [CGRateS](http://cgrates.org) - オープンソースの課金・料金計算サーバー。固定原文では通信事業者向けの品質と紹介されている。
- [A2Billing](http://www.asterisk2billing.org) - 複数の用途に対応したAsterisk用課金システム。
- [PyFreeBilling](https://github.com/mwolff44/pyfreebilling) - KamailioとFreeSWITCH向けの通信卸売用課金プラットフォーム。

## 開発者リソース

### チュートリアル

- [公式サイト](https://webrtc.org) - WebRTCの入門資料。
- [WebRTC入門](https://www.html5rocks.com/en/tutorials/webrtc/basics) - HTML5 RocksによるWebRTCチュートリアル。
- [WebRTCサンプル集](https://webrtc.github.io/samples) - WebRTC APIの各機能を示すサンプル集。
- [WebRTC Experiments](https://www.webrtc-experiment.com) - Muaz Khanによるサンプル集。固定原文では網羅的と紹介されている。
- [対話型Codelab](https://codelabs.developers.google.com/codelabs/webrtc-web) - Googleによる対話型の段階的チュートリアル。固定原文では所要時間を30分としている。

### JavaScriptライブラリ

- [drachtio](https://drachtio.org) - Node.js用SIPサーバーフレームワーク。
- [adapter.js](https://github.com/webrtcHacks/adapter) - WebRTC仕様の変更や不整合を抽象化するJavaScriptのシム（互換層）。
- [JsSIP](http://jssip.net) - 軽量なオープンソースのJavaScript SIPライブラリ。
- [sipML5](https://www.doubango.org/sipml5) - WebRTCメディアスタックを備えたオープンソースのJavaScript SIPクライアント。
- [simple-peer](https://github.com/feross/simple-peer) - Node.jsとブラウザー向けに、WebRTCの映像、音声、データチャネルを抽象化するライブラリ。
- [Netflux](https://github.com/coast-team/netflux) - クライアントとサーバーで共通に使えるJavaScriptピアツーピア転送API。
- [PeerJS](https://peerjs.com) - WebRTC上に実装された、データとメディアのピアツーピア接続API。
- [Socio](https://github.com/Rolands-Laucis/Socio) - フロントエンドとバックエンドのリアルタイムな反応性を扱うWebSocket RTC APIフレームワーク。

### C/C++ライブラリ

- [libre](https://github.com/creytiv/re) - ポータブルなSIPスタック。メディア処理とSTUN/TURN用の関連ライブラリ、およびモジュール式のユーザーエージェントを備える。
- [PJSIP](https://www.pjsip.org) - Cで書かれた、複数プロトコルに対応するRTCライブラリ。
- [eXosip](http://savannah.nongnu.org/projects/exosip) - eXtended osip。SIPプロトコルを抽象化するCライブラリで、固定原文では成熟した実装と紹介されている。
- [libdatachannel](https://github.com/paullouisageneau/libdatachannel) - WebRTC DataChannelsの独立したC++実装。
- [icey](https://github.com/nilstate/icey) - FFmpegパイプライン、Sympleシグナリング、RFC 5766のTURNを備えたC++20のWebRTCメディアランタイム。
- [libSRTP](https://github.com/cisco/libsrtp) - C用のSecure Real-time Transport Protocol（SRTP）ライブラリ。
- [usrsctp](https://github.com/sctplab/usrsctp) - ユーザー空間で動作する、ポータブルなStream Control Transmission Protocol（SCTP）スタック。
- [rawrtc](https://github.com/rawrtc/rawrtc) - WebRTCとORTCのライブラリ。固定原文ではフットプリントが小さいと紹介されている。
- [OSS Core](https://github.com/joegen/oss_core) - リアルタイム通信向けの汎用C++ライブラリ。
- [Open WebRTC Toolkit](https://01.org/open-webrtc-toolkit) - 複数のプラットフォーム用のバインディングを備えたWebRTC開発ツールキット。
- [Sofia-SIP](https://github.com/freeswitch/sofia-sip) - FreeSWITCHで使われているオープンソースSIPライブラリ。

### Goライブラリ

- [Pion](https://pion.ly) - Goで書かれたWebRTCソフトウェアスタック。固定原文では広範な機能を備えると紹介されている。
- [gossip](https://github.com/StefanKopieczek/gossip) - Goで書かれた、状態を保持するユーザーエージェント向けのSIPスタック。
- [siprocket](https://github.com/marv2097/siprocket) - SIPとSDPのパケットパーサー。固定原文では高速と紹介されている。
- [go-diameter](https://github.com/fiorix/go-diameter) - Diameterプロトコルのライブラリ。固定原文ではRFC準拠と紹介されている。

### PHPライブラリ

- [RTCKit/SIP](https://github.com/rtckit/php-sip) - PHP 7.4以降向けのSIP解析・生成ライブラリ。固定原文ではRFC 3261準拠と紹介されている。

### Pythonライブラリ

- [aiortc](https://github.com/aiortc/aiortc) - asyncioを使ったPython向けのWebRTCとORTCの実装。
- [Katari](https://github.com/hyperioxx/Katari) - SIPスタックのアプリケーションフレームワーク。
- [peerjs-python](https://github.com/ambianic/peerjs-python) - PeerJSのピアツーピア接続ライブラリのPython移植版。

### Erlangライブラリ

- [NkSIP](https://github.com/NetComposer/nksip) - 拡張可能なSIPサーバーフレームワーク。
- [ersip](https://github.com/poroh/ersip) - SIPアプリケーションの構成要素を提供するライブラリ。

### Rustライブラリ

- [libsip](https://docs.rs/libsip/0.2.4/libsip) - ソフトフォンのクライアントに重点を置いたSIP実装。
- [sipcore](https://github.com/armatusmiles/sipcore) - SIPアプリケーションを作成するためのRustフレームワーク。
- [rtcrs/webrtc](https://github.com/rtcrs/webrtc) - SDP、RTP、RTCP、SRTPに対応したWebRTCスタック。

### Dartライブラリ

- [dart-sip-ua](https://github.com/cloudwebrtc/dart-sip-ua) - SIP over WebSocketに対応したJsSIPのDart移植版。

## ブログ

- [BlogGeekMe](https://bloggeek.me/blog) - Tsahi Levent-Leviによる、WebRTCを中心に扱うブログ。
- [SIP Adventures](https://andrewjprokop.wordpress.com) - Andrew Prokopによるユニファイドコミュニケーションのブログ。
- [WebRTCHacks](https://webrtchacks.com) - 独立した技術者によるWebRTCブログ。

## ディスカッション

- [FreeSWITCH Slack](https://signalwire.community) - 利用者と開発者向けのサポートを受けるには、#freeswitchと#freeswitch-devに参加する。
- [discuss-webrtc](https://groups.google.com/forum/?fromgroups#!forum/discuss-webrtc) - 開発者向けにWebRTCを議論するGoogleグループ。

## イベント

- [ClueCon](http://cluecon.com) - FreeSWITCHが生まれた、通信分野の開発者向けの会議。固定原文ではシカゴで毎年開催されると紹介されている。
- [Kamailio World](https://www.kamailioworld.com) - Kamailioのほか、VoIP、WebRTC、IMS、VoLTEなどを扱うイベント。固定原文ではベルリンで毎年開催されると紹介されている。
- [AstriCon](https://www.asterisk.org/community/astricon-user-conference) - Asteriskを中心に扱うイベント。固定原文では米国各地で毎年開催されると紹介されている。
- [CommCon](https://commcon.xyz) - 通信全般、特にWebRTCを扱う会議。固定原文では英国で毎年開催されると紹介されている。
- [OpenSIPS Summit](https://www.opensips.org/events) - OpenSIPSコミュニティの集まり。
- [Kranky Geek](https://krankygeek.com) - AIとRTCのイベント。固定原文ではサンフランシスコで開催されると紹介されている。
- [FOSDEM](https://fosdem.org) - RTC分野も扱う、ソフトウェア開発者向けの無料イベント。固定原文ではヨーロッパで毎年開催されると紹介されている。
- [JanusCon](https://www.januscon.it) - JanusとRTCの実装者向けのライブイベント。
- [TADHack](https://tadhack.com) - プログラムから制御できる通信機能をテーマにした世界規模のハッカソン。

## 関連リスト

- [Awesome RIPT](https://github.com/rtckit/awesome-ript) - Real Time Internet Peering for Telephonyに関するリスト。
- [Awesome RTC Hacking](https://github.com/EnableSecurity/awesome-rtc-hacking) - RTCのハッキングとペネトレーションテストの資料。
- [Awesome 5G](https://github.com/calee0219/awesome-5g) - 5Gのフレームワーク、ライブラリ、ソフトウェア、資料。
- [Awesome Cellular Hacking](https://github.com/W00t3k/Awesome-Cellular-Hacking) - 3G/4G/5Gの携帯通信のセキュリティに関する研究資料。
- [Awesome Telco](https://github.com/ravens/awesome-telco) - 通信事業者向けの資料とプロジェクト。
- [SIP Resources](https://github.com/miconda/sip-resources) - Kamailioの主任開発者がまとめた有用なSIP資料。
