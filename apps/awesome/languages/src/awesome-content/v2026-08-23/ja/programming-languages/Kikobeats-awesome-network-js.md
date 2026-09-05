---
title: "Awesome JavaScript Network"
description: "JavaScript Networkを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-Kikobeats-awesome-network-js-readme-md"
---

# Awesome JavaScript Network

JavaScript Networkを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 高水準

> 少なくとも CLI インターフェースに基づくもの。

* [airpaste](https://github.com/mafintosh/airpaste) – mdns を使い他のピアを自動発見する、1対1のネットワークパイプ。
* [blecat](https://github.com/mafintosh/blecat) – Bluetooth Low Energy を使う1対1のパイプ。
* [deejay](https://github.com/mafintosh/deejay) – 同じネットワーク上の全員にブロードキャストする音楽プレーヤー。
* [dhtkv](https://github.com/maxogden/dhtkv) – 任意のキー／値データを BitTorrent mainline DHT に保存する CLI。
* [gun](https://github.com/amark/gun) – リアルタイム、分散型、オフラインファーストのグラフデータベースエンジン。
* [hyperpipe](https://github.com/mafintosh/hyperpipe) – 分散入出力パイプ。
* [hypervision](https://github.com/mafintosh/hypervision) – P2P テレビ。
* [instant.io](https://github.com/webtorrent/instant.io) – WebTorrent を使うストリーミングファイル転送。
* [ipp-printer](https://github.com/watson/ipp-printer) – ネットワーク上にプリンターを作成します。
* [peercast](https://github.com/mafintosh/peercast) – Chromecast 向けの peerflix のようなもの。
* [peerflix](https://github.com/mafintosh/peerflix) – ストリーミング torrent クライアント。
* [peervisionary](https://github.com/mafintosh/peervisionary) – ローカルネットワーク上で p2p コンテンツをストリーミングします。
* [peerwiki](https://github.com/mafintosh/peerwiki) – bittorrent を使い Wikipedia 全体を閲覧します。
* [screencat](https://github.com/maxogden/screencat) – WebRTC 画面共有アプリ。
* [signalhub](https://github.com/mafintosh/signalhub) – webrtc などとのハンドシェイクを調整するために使える、シンプルなシグナリングサーバー。
* [torrent-mount](https://github.com/mafintosh/torrent-mount) – torrent-stream と fuse を使い、torrent（または magnet link）をリアルタイムでファイルシステムとしてマウントします。
* [webcat](https://github.com/mafintosh/webcat) – WebRTC を使いウェブを横断してパイプします。
* [websocketd](https://github.com/joewalnes/websocketd) – stdin/stdout を使う任意のプログラムを WebSocket サーバーに変換します。
* [webtorrent](https://github.com/webtorrent/webtorrent) – WebRTC 上の BitTorrent。
* [wifi-triangulate](https://github.com/watson/wifi-triangulate) – wifi アクセスポイントを使い、地球上の現在位置を見つけます。

## モジュール

> 一つのことをうまく行う。

* [airplay-server](https://github.com/watson/airplay-server) – 低水準の AirPlay サーバー。
* [castnow](https://github.com/xat/chromecast-player) – シンプルな Chromecast プレーヤー。
* [discovery-swarm](https://github.com/mafintosh/discovery-swarm) – [discovery-channel](https://github.com/maxogden/discovery-channel) を使いピアを見つけるネットワーク swarm。[webrtc-swarm](https://github.com/mafintosh/webrtc-swarm)も参照してください。
* [dns-packet](https://github.com/mafintosh/dns-packet) – DNS パケットをエンコード／デコードする Abstract-encoding 準拠モジュール。[dns-socket](https://github.com/mafintosh/dns-socket)も参照してください。
* [etcdjs](https://github.com/mafintosh/etcdjs) – フェイルオーバーをサポートする、JavaScript で書かれた低水準 etcd v2 クライアント。
* [geocode-wifi](https://github.com/watson/geocode-wifi) – wifi アクセスポイントに基づいて緯度／経度を取得します。
* [hash-to-port](https://github.com/mafintosh/hash-to-port) – 値を有効なポートへハッシュします。
* [hyperdb](https://github.com/mafintosh/hyperdb) – 分散スケーラブルデータベース。
* [ip-packet](https://github.com/mafintosh/ip-packet) – 生の ip パケットをエンコード／デコードします。
* [magnet-uri](https://github.com/webtorrent/magnet-uri) – magnet URI を解析し、キー／値のオブジェクトを返します。
* [mutex-server](https://github.com/samchon/mutex-server) - ネットワークレベルの mutex や semaphore のようなクリティカルセクションコントローラー。
* [network-address](https://github.com/mafintosh/network-address) – マシンのローカルネットワークアドレスを取得します。
* [network-simulator](https://github.com/substack/network-simulator) – 低水準のコンピューターネットワークをシミュレートします。
* [rtsp-stream](https://github.com/watson/rtsp-stream) - Node 向けのトランスポート非依存 RTSP シリアルマルチプレクサーモジュール。
* [simple-peer](https://github.com/feross/simple-peer) – シンプルな WebRTC 動画／音声・データチャネル。
* [simple-websocket](https://github.com/feross/simple-websocket) – WebSocket のためのシンプルな EventEmitter API。
* [torrent-discovery](https://github.com/webtorrent/torrent-discovery) – BitTorrent および WebTorrent ピアを発見します。
* [torrent-stream](https://github.com/mafintosh/torrent-stream) – peerflix が使う低水準ストリーミング torrent エンジン。
* [udp-packet](https://github.com/substack/udp-packet) – 生の udp パケットをエンコード／デコードします。
* [rpc-websockets](https://github.com/elpheria/rpc-websockets) - Node.js と JavaScript 向けの WebSocket 上の JSON-RPC 2.0 実装。

## プロトコル

> 純粋な JavaScript によるプロトコル仕様の実装。

* [airswarm](https://github.com/mafintosh/airswarm) – multicast dns を使い、ネットワーク上の他のピアを自動的に発見するネットワーク swarm。
* [bittorrent-dht](https://github.com/webtorrent/bittorrent-dht) – BitTorrent DHT プロトコル実装。
* [bittorrent-protocol](https://github.com/webtorrent/bittorrent-protocol) – BitTorrent peer wire プロトコル実装。
* [bittorrent-tracker](https://github.com/webtorrent/bittorrent-tracker) – BitTorrent tracker（クライアントとサーバー）実装。
* [bonjour](https://github.com/watson/bonjour) – Bonjour/Zeroconf プロトコル実装。
* [castv2](https://github.com/thibauts/node-castv2) – Chromecast CASTV2 プロトコル実装。
* [dht-rpc](https://github.com/mafintosh/dht-rpc) – [Kademlia](https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf) ベースの DHT 経由で RPC 呼び出しを行います。
* [dns-discovery](https://github.com/mafintosh/dns-discovery) – 通常の dns と multicast dns を使い、分散システムのピアを発見します。
* [hypercore](https://github.com/mafintosh/hypercore) – バイナリーデータの静的フィードを配布・複製する p2p ネットワーク。
* [ipfs](https://github.com/ipfs/js-ipfs-api) – 新しいピアツーピアハイパーメディアプロトコル、InterPlanetary File System。
* [k-bucket](https://github.com/tristanls/k-bucket) – バイナリーツリーとしての Kademlia DHT K-bucket 実装。
* [k-rpc](https://github.com/mafintosh/k-rpc) – BitTorrent DHT が使う k-rpc プロトコル実装。[k-rpc-socket](https://github.com/mafintosh/k-rpc-socket)も参照してください。
* [mdns](https://github.com/agnat/node_mdns) – mdns/zeroconf/bonjour サービス発見。
* [multicast-dns](https://github.com/mafintosh/multicast-dns) – 低水準 multicast-dns 実装。
* [peervision](https://github.com/mafintosh/peervision) – ライブ p2p ストリーミングプロトコル。
* [polo](https://github.com/mafintosh/polo) – ゼロ構成のサービス発見モジュール。
* [rtsp-server](https://github.com/watson/rtsp-server) – RTSP サーバーを作成する低水準モジュール。
* [utp-native](https://github.com/mafintosh/utp-native) – udp 上で動作する tcp に似たネットワークプロトコル、micro transport protocol。
