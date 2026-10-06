---
title: "Awesome Tor"
description: "Torのマニュアル、アプリ、ブリッジ、検閲研究、年次報告と内部告発ツール。"
licenseSource: "github-polycarbohydrate-awesome-tor-readme-md"
---

# Awesome Tor<a id="awesome-tor-logo"></a>

[Tor](https://www.torproject.org)は、自由でオープンソースのソフトウェアを基盤とする、匿名通信のための無料のオーバーレイネットワークです。固定原文では、世界各地でボランティアが運営する7,000超のリレーを通り、ランダムな経路で通信を送る仕組みと説明されています。マニュアル、アプリ、ブリッジ、検閲研究、年次報告と内部告発ツールをまとめています。

このリストはTor®の匿名化ソフトウェアとは独立して作成されています。Tor Projectは品質、適合性、その他について一切保証していません。説明、提供状況、機能、評価は固定原文の記述に基づきます。

[ブラウザーでSnowflakeブリッジを提供するガイド](https://polycarbohydrate.github.io/awesome-tor/selfhost-snowflake)では、検閲下の地域の利用者による検閲回避を支援する方法を紹介しています。

## 公式マニュアル <a id="official-manual"></a>
- [Tor Browserについて](https://tb-manual.torproject.org/about/) - Tor Browserがプライバシーと匿名性を保護するためにできることを学びます。
- [フィンガープリンティング対策](https://tb-manual.torproject.org/anti-fingerprinting/) - Tor Browserがブラウザーフィンガープリンティングを軽減する方法です。
- [ブリッジ](https://tb-manual.torproject.org/bridges/) - obfs4など大半のPluggable Transport（差し替え可能な転送方式）は、ブリッジリレーの利用に依存します。
- [検閲回避](https://tb-manual.torproject.org/circumvention/) - Torネットワークがブロックされた場合の対処法です。
- [ダウンロード](https://tb-manual.torproject.org/downloading/) - Tor Browserのダウンロード方法です。
- [インストール](https://tb-manual.torproject.org/installation/) - Tor Browserのインストールです。
- [既知の問題](https://tb-manual.torproject.org/known-issues/) - Torに関する既知の問題です。
- [Tor Browserの持ち運び](https://tb-manual.torproject.org/make-tor-portable/) - Tor Browserをリムーバブルメディアへインストールする方法です。
- [識別情報の管理](https://tb-manual.torproject.org/managing-identities/) - Tor Browserで個人を特定しうる情報を制御する方法を学びます。
- [モバイル向けTor](https://tb-manual.torproject.org/mobile-tor/) - モバイルデバイス向けTorについて学びます。
- [Onionサービス](https://tb-manual.torproject.org/onion-services/) - Torのみを使ってアクセスできるサービスです。
- [プラグイン、アドオン、JavaScript](https://tb-manual.torproject.org/plugins/) - Tor Browserによるアドオン、プラグイン、JavaScriptの扱い方です。
- [Tor Browserの起動](https://tb-manual.torproject.org/running-tor-browser/) - 初めてTor Browserを使う方法を学びます。
- [安全な接続](https://tb-manual.torproject.org/secure-connections/) - Tor BrowserとHTTPSでデータを保護する方法を学びます。
- [セキュリティ設定](https://tb-manual.torproject.org/security-settings/) - セキュリティと使いやすさのためのTor Browser設定です。
- [サポート](https://tb-manual.torproject.org/support/) - ヘルプの取得、バグ報告、フィードバックの方法です。
- [トラブルシューティング](https://tb-manual.torproject.org/troubleshooting/) - Tor Browserが正しく動かない場合の対処法です。
- [更新](https://tb-manual.torproject.org/updating/) - Tor Browserの更新方法です。
- [アンインストール](https://tb-manual.torproject.org/uninstalling/) - システムからTor Browserを削除する方法です。
## アプリケーション <a id="applications"></a>
### Tails
RAM上で動作し、主要ブラウザーとしてTor Browserを使う、持ち運び可能なDebianベースのOS。原文では痕跡を残さないと紹介されています。
- [Tailsへの貢献](https://tails.net/contribute/index.en.html)
- [ドキュメント](https://tails.net/doc/index.en.html)
- [ダウンロード](https://tails.net/install/index.en.html)
- [公式サイト](https://tails.net/)
- [仕組み](https://tails.net/about/index.en.html)
- [ニュース](https://tails.net/news/index.en.html)
- [サポート](https://tails.net/support/index.en.html)
### Tor / Tor Browser
世界各地のボランティアが運営する無料のオーバーレイネットワークを介して通信を送る、オープンソースのWebブラウザー。原文では、匿名通信を可能にし、ネットワーク監視やトラフィック分析から位置情報と利用状況を隠すと紹介されています。
- [Torの歴史](https://www.torproject.org/about/history/)
- [コミュニティ](https://community.torproject.org/)
- [Tor Projectへの寄付](https://donate.torproject.org/)
- [ダウンロード](https://www.torproject.org/download/)
- [サポート](https://support.torproject.org/)
- [ニュース](https://blog.torproject.org/)
- Core Tor / Little-t-tor
  - [インストール／ソースコードの検証](https://support.torproject.org/little-t-tor/)
  - [フォーラム／サポート](https://forum.torproject.org/c/support/core-tor/18)
### その他のアプリケーション <a id="other-applications"></a>
- [ansible-relayor](https://github.com/nusenu/ansible-relayor) - Torリレー運用者向けのansibleロールです。
- [bine](https://github.com/cretz/bine) - Torクライアントとサーバーへアクセスし埋め込むためのGoライブラリです。
- [Briar](https://briarproject.org/) - 中央集権サーバーを迂回するピアツーピアメッセージングです。Bluetooth、Wi-Fi、またはTorで接続します。
- [Bulk Tor Exit Exporter](https://check.torproject.org/api/bulk) - 出口ノードのIPv4およびフィンガープリント情報を表示し、Tor出口ノードを特定します。
- [Chutney](https://gitlab.torproject.org/tpo/core/chutney/) - Torネットワークを設定し、起動・監視した後にテストを実行します。
- [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) - 暗号化DNSプロトコルをサポートする柔軟なDNSプロキシです。
- [dos-over-tor](https://github.com/skizap/dos-over-tor) - Tor経由の概念実証的DoSストレステストツールです。 
- [DocTor](https://gitlab.torproject.org/tpo/network-health/doctor/) - 新たに公開された記述子情報の問題を監視する通知サービスです。
- [eotk](https://github.com/alecmuffett/eotk) - 広く利用されるWebサイトに公式のOnionアクセスを提供するため、HTTP/Onionサイトを配備するツール。
- [exitmap](https://www.cs.kau.se/philwint/spoiled_onions/) - 不正な出口（spoiled onions）を検出するTor用スキャナーです。
- [haskell-tor](https://github.com/GaloisInc/haskell-tor) - TorプロトコルのHaskell実装です。
- [HTTPS Everywhere](https://www.eff.org/https-everywhere) - ブラウザーの接続をHTTPSに限定する機能。原文ではTorに組み込まれていると紹介されています。
- [kalitorify](https://github.com/brainfucksec/kalitorify) - Kali Linux OS向けに、Tor経由の透過プロキシを作成するシェルスクリプトです。
- [Tor Metrics](https://metrics.torproject.org/) - Torの統計を可視化する調整可能なグラフです。
- [multitor](https://github.com/trimstray/multitor) - ロードバランシングを備えた複数のTorインスタンスを作成します。
- [mini-tor](https://github.com/wbenny/mini-tor) - インターネットや隠しサービスのコンテンツへアクセスするアプリ。原文ではアプリケーションサイズが最小と紹介されています。
- [node-Tor](https://github.com/Ayms/node-Tor) - サーバー側とブラウザーで動くTorプロトコルのJavaScriptオープンソース実装です。
- [nyx](https://nyx.torproject.org/) - リレーに関する詳細なリアルタイム情報を含むCLIインターフェースです。
- [offensive-tor-toolkit](https://github.com/atorrescogollo/offensive-tor-toolkit) - GoでTor経由のBind/Reverse Shell、SOCKSなどを扱います。
- [onion-grater](https://github.com/Whonix/onion-grater) - 危険なTor制御プロトコルコマンド向けのホワイトリストフィルターです。
- [Onionbalance](https://onionbalance.readthedocs.io/en/latest/) - 複数のバックエンドTorインスタンスにまたがりonionサービスを負荷分散する方法です。
- [Onionoo](https://metrics.torproject.org/onionoo.html) - 現在動作中のTorリレーとブリッジについて知るためのWebベースプロトコルです。
- [OnionScan](https://onionscan.org/) - 隠しサービスの運用者がサービスの運用セキュリティ問題を見つけ修正するのを助けます。
- [OnionShare](https://onionshare.org/) - Torネットワークを使い、匿名でファイル共有、Webサイトホスト、チャットを行います。
- [OONI](https://ooni.org/) - Webサイトとアプリのブロックをテストし、ネットワークの速度と性能を測定します。
- [Orbot](https://guardianproject.info/apps/org.torproject.android/) - Android上のTorです。
- [Orfox](https://guardianproject.info/apps/info.guardianproject.orfox/) - Android向けに変更されたTorブラウザーです。Orbotが必要です。
- [php-torcontrol](https://github.com/dunglas/php-torcontrol) - TorControlはTorサーバーを制御するPHPライブラリです。
- [Relay Search](https://metrics.torproject.org/rs.html) - リレーに関する情報を簡単に検索できます。
- [Ricochet Refresh](https://www.ricochetrefresh.net/) - Torを使ってクライアントを接続するピアツーピアメッセンジャーアプリです。
- [rotating-proxy](https://github.com/mattes/rotating-proxy) - Dockerを用いたローテーションTorプロキシです。
- [sbws](https://gitlab.torproject.org/tpo/network-health/sbws) - Directory Authoritiesが使う帯域幅ファイルを生成するTor帯域幅スキャナーです。
- [Stormy](https://github.com/glamrock/stormy) - 数クリックでTor Onion Servicesを作成するのを助けるウィザードです。
- [setup-tor](https://github.com/tor-actions/setup-tor) - 指定バージョンのTorでGitHub Actionsワークフローを設定します。
- [Stem](https://stem.torproject.org/) - Tor向けのPythonコントローラーライブラリです。
- [Shadow](https://shadow.github.io/) - 実際のTorソフトウェアをプラグインとして実行する離散イベントネットワークシミュレーターです。
- [Tallow](https://github.com/basil00/TorWall) - Windowsマシンからのすべての送信トラフィックをTor匿名ネットワーク経由へリダイレクトするプログラムです。
- [tor_box](https://github.com/CMoncur/tor_box) - リレーおよび個人用Torネットワークとして機能するRaspberry Pi向けの包括的Tor設定です。
- [Tor_Onion_Proxy](https://github.com/thaliproject/Tor_Onion_Proxy_Library) - JavaまたはAndroidプログラムへTorを埋め込むための.JARと.AARファイルを提供します。
- [tor_ssh.sh](https://gitlab.com/grownetics/devops/blob/master/tor_ssh.sh) - 任意のサーバーへTorを使ったSSHアクセスを可能にするコマンドです。
- [tor-browser-selenium](https://github.com/webfp/tor-browser-selenium) - Selenium WebDriverでTor Browserを自動化するPythonライブラリです。
- [tor-controller](https://github.com/kragniz/tor-controller) - Kubernetes上でTor Onion Servicesを実行します。
- [tor-hidden-service](https://hub.docker.com/r/goldy/tor-hidden-service) - v2またはv3のOnion Services用に作られたDockerコンテナーです。
- [tor-relay-bootstrap](https://github.com/coldhakca/tor-relay-bootstrap) - Debianサーバーを、一度設定した後の管理作業を必要としないTorリレーとして立ち上げるスクリプト。
- [Tor.framework](https://github.com/iCepa/Tor.framework) - iOSアプリケーションへTorを埋め込む方法。原文では最も簡単な方法と紹介されています。
- [tor.rb](https://github.com/dryruby/tor.rb) - Tor匿名ネットワークとやり取りするRubyライブラリです。
- [Tor2web](https://github.com/tor2web/Tor2web) - 一般的なWebブラウザーからTor Hidden Servicesへのアクセスを可能にするHTTPプロキシソフトウェアです。
- [TorBot](https://github.com/DedSecInside/TorBot) - データ収集用のOnionサイトクローラーです。
- [TorChat-Mac](https://github.com/javerous/TorChat-Mac) - macOSネイティブのTorChatクライアントです。
- [TorChat](https://github.com/prof7bit/TorChat) - Tor Hidden Services上の分散型匿名インスタントメッセンジャーです。
- [TorCheck](https://check.torproject.org/) - 訪問者がTorを利用しているかどうかを判定します。
- [torDDoS](https://github.com/r3nt0n/torDDoS) - TorネットワークからWebサイトへのDDoS攻撃を自動化するPythonツールです。
- [toriptables2](https://github.com/ruped24/toriptables2) - iptablesとTorを設定して全トラフィックをTorネットワーク経由へルーティングする匿名化ツールです。
- [torps](https://github.com/torps/torps) - Tor Path Simulator（TorPS）は、Torでの経路選択を効率的にシミュレートするツールです。
- [Torsocks](https://gitlab.torproject.org/tpo/core/torsocks/) - 原文では、大半のアプリケーションをTorとともに安全に利用できるようにすると紹介されています。
- [Tortilla](https://www.crowdstrike.com/resources/community-tools/tortilla-tool/) - すべてのTCP/IP・DNSトラフィックをTor経由へルーティングするツール。原文では、安全・匿名・透過的に処理すると紹介されています。
- [tun2tor](https://github.com/iCepa/tun2tor) - utun（ユーザー空間トンネル）インターフェースを作り、ストリームベースのプロキシへ接続するRustライブラリです。
- [txtorcon](https://txtorcon.readthedocs.io/en/latest/) - PythonのTwistedネットワーキングライブラリを使う、Tor向けcontrol-spec実装です。
- [Vanguards](https://github.com/mikeperry-tor/vanguards) - ガードの発見と関連するトラフィック分析攻撃から保護するアドオンです。
- [Whonix](https://www.whonix.org/) - デスクトップ全体でTorネットワークを利用し、高度なセキュリティとプライバシーの確保を目的として設計されたOS。
- [ZeroNet](https://zeronet.io/) - Bitcoinの暗号技術、BitTorrentネットワーク、Torサポートを使うWebサイト。原文では無料かつ検閲不能と紹介されています。
## ブリッジ <a id="bridges"></a>
- [BridgeDB](https://pythonhosted.org/bridgedb/) - BridgeDBは、Tor Bridgesを配布するために使われるバックエンドサーバー群です。
- [Conjure](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/conjure) - refraction networking（別名decoy routing）系統の検閲回避システムに属する検閲対抗ツール。
- [Flash Proxies](https://crypto.stanford.edu/flashproxy/) - 時代遅れで非推奨のブリッジ種別です。Webブラウザーで動作する小型プロキシです。
- [fteproxy](https://fteproxy.org/) - 時代遅れで非推奨のブリッジ種別です。Torトラフィックを通常のHTTPに似せます。名称は「Format-Transforming Encryption」を意味します。
- [meek](https://support.torproject.org/glossary/meek/) - これらのpluggable transportsは、Torを使う代わりに主要Webサイトを閲覧しているように見せます。
- [obsf2](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/trac/-/issues/10314) - 時代遅れで非推奨のブリッジ種別です。obsf3の前身です。
- [obsf3](https://support.torproject.org/glossary/obfs3/) - 時代遅れで非推奨のブリッジ種別です。obsf4の前身です。
- [obsf4](https://support.torproject.org/glossary/obfs4/) - Torトラフィックをランダムに見せ、検閲者がインターネットスキャンでブリッジを見つけることも防ぐpluggable transportです。
- [ScrambleSuit](https://github.com/NullHypothesis/scramblesuit) - 時代遅れで非推奨のブリッジ種別です。obfsproxy向けのpluggable transportプロトコルで、純粋なPythonで書かれています。
- [Snowflake](https://snowflake.torproject.org/) - 通常のビデオ・音声通話のためにインターネットを使っているかのように、インターネット活動を見せます。
- [Webtunnel](https://blog.torproject.org/introducing-webtunnel-evading-censorship-by-hiding-in-plain-sight/) - WebTunnelはHTTPTに着想を得て、暗号化されたWebトラフィック（HTTPS）を模倣するよう設計された検閲耐性pluggable transportです。
## 検閲回避 <a id="bypass-censorship"></a>
- [Firefly](https://github.com/yinghuocho/firefly-proxy) - Great Firewallの回避を助けるプロキシソフトウェアです。
- [FWlite](https://github.com/v3aqb/fwlite) - shadowsocksを内蔵サポートする検閲対抗HTTPプロキシです。
- [Google Fi Wireless](https://fi.google.com/) - 原文では、中国のGreat Firewallを回避して通話、テキストメッセージ、携帯データ通信を利用できる、優れた電話サービスと紹介されています。
- [Lantern](https://github.com/getlantern/lantern) - あらゆるOSで無料ダウンロードできる検閲回避ツールです。
- [MTProxy](https://github.com/TelegramMessenger/MTProxy) - 検閲地域のユーザーがTelegramへ接続できるようにします。
- [NaïveProxy](https://github.com/klzgrad/naiveproxy) - Chromiumのネットワークスタックを利用し、強い検閲耐性と低い検出可能性でトラフィックをカモフラージュします。
- [nodeunblocker](https://github.com/nfriedly/nodeunblocker.com) - Node.jsを使ってnodeunblocker.comのコピーをホストし、インターネット上の検閲を回避します。
- [PrivadoVPN](https://privadovpn.com/) - スイスを拠点とするVPN。原文では、スイスのプライバシー法に従い、中国でも検閲を回避できると紹介されています。
- [ProtonVPN](https://protonvpn.com/) - 原文では、中国でも検閲を回避できるVPNと紹介されています。無料プランも検閲回避に対応し、複数サーバーとプロトコル、ログを保存しない方針があると説明されています。
- [非公開ブリッジ](https://bridges.torproject.org/) - `I need an alternative way of getting bridges!`節へ進み、指示に従ってください。
- [Runet Censorship Bypass](https://github.com/anticensority/runet-censorship-bypass) - ロシアにおける検閲の回避を助けるChromium・Firefox向けブラウザー拡張です。
- [StegoTorus](https://github.com/SRI-CSL/stegotorus) - Tor匿名化システム向けのカモフラージュプロキシです。
- [trojan](https://github.com/trojan-gfw/trojan) - GFWの回避を助ける、識別困難なメカニズムです。
## 社会の受け止め方、影響、ニュース、法制度 <a id="public-reception-impact-news-and-legislation"></a> <a id="公共の受容影響ニュース法制度"></a>
- [A close look at the Great Firewall of China](https://blog.torproject.org/closer-look-great-firewall-china/) - 中国国内におけるTorの検閲に関する情報です。
- [Analyzing China's Blocking of Unpublished Tor Bridges](https://www.usenix.org/conference/foci18/presentation/dunna) - 中国が未掲載のTorブリッジをブロックする方法と、その防止に関する研究です。
- [Anarcho-Tech NYC Wiki](https://github.com/AnarchoTechNYC/meta/wiki) - オンラインでプライバシーと匿名性を保つ方法を説明するWikiです。
- [Anonymity Bibliography](https://www.freehaven.net/anonbib/) - 1977年〜2020年の匿名性に関する選定論文です。
- [Dropping Docs on Darknet](https://www.youtube.com/watch?v=eQ2OZKitRwc) - DEF CON 22でのAdrian Crenshawによる講演「Dropping Docs on Darknets: How People Got Caught」。
- [How governments have tried to block Tor](https://www.youtube.com/watch?v=DX46Qv_b7F4) - 28c3における、政府がTorをブロックしようとした方法の解説です。
- [How the Great Firewall of China is blocked in China](https://www.usenix.org/system/files/conference/foci12/foci12-final2.pdf) - 中国でTorが禁止される仕組みと回避方法を説明する論文です。
- [Learning more about the GFW's active probing system](https://blog.torproject.org/learning-more-about-gfws-active-probing-system/) - GFWの検閲システムと仕組みに関するページです。
- [My Experience With the Great Firewall of China](http://blog.zorinaq.com/my-experience-with-the-great-firewall-of-china/) - 情報セキュリティの専門家が中国訪問中のファイアウォール体験を記したブログ。
- [Protocol Misidentification Made Easy with Format-Transforming Encryption](https://kpdyer.com/publications/ccs2013-fte.pdf) - FTEの仕組みを扱います。
- [Russia Passes Bill Banning Tor](https://www.themoscowtimes.com/2021/12/08/russia-blocks-tor-anonymity-service-a75760) - ロシアがVPNとTorを禁止したことに関する記事です。
- [Scaling Tor hidden services](https://www.benthamsgaze.org/2015/11/17/scaling-tor-hidden-services/) - 隠しサービスをスケールさせる方法です。
- [ScrambleSuit: A Polymorph Network Protocol to Circumvent Censorship](http://arxiv.org/pdf/1305.3199) - ScrambleSuitの仕組みを扱います。
- [Snowden Revelations](https://www.theguardian.com/world/interactive/2013/nov/01/snowden-nsa-files-surveillance-revelations-decoded) - Snowden Revelationsを解説します。
- [State of the Onion - 2023](https://blog.torproject.org/event/state-of-the-onion-2023/) - チームとコミュニティの更新を共有し、年間の取り組みと世界へ与えた影響を紹介するTor Projectの年次バーチャルイベントです。
- [StegoTorus: A Camouflage Proxy for the Tor Anonymity System](https://www.freehaven.net/anonbib/cache/ccs2012-stegotorus.pdf) - StegoTorusの仕組みに関する論文です。
- [Technical and Legal Overview of Tor](https://ccdcoe.org/uploads/2018/10/TOR_Anonymity_Network.pdf) - 技術的な視点からTorの概要を示し、その利用に関する複数の法的問題も分析します。
- [Tor after the Snowden revelations](https://blog.torproject.org/tor-in-2023/) - Snowdenによる暴露と、Torが2024年に行うことに関する記事です。 
- [Tor Browser Afforded CDA Immunity for Dark Web Transactions](https://www.govinfo.gov/content/pkg/USCOURTS-utd-2_18-cv-00712/pdf/USCOURTS-utd-2_18-cv-00712-0.pdf) - Tor上での麻薬購入を通じた未成年者の死亡に関する裁判文書です。
- [Tor Hidden Services and Deanonyminization](https://www.youtube.com/watch?v=HQXRURfrf8w) - Torとそのサービスが利用者情報の露出に悪用される方法、および攻撃を防ぐ方法に関する講演です。
- [Tor Overview](https://www.privacyguides.org/en/advanced/tor-overview/) - PrivacyguidesによるTor概要です。
- [Understanding The Onion Router in 2024](https://www.privacyjournal.net/privacy/tor-network/) - Torとは何かを説明する2024年版の解説です。
- [What is Tor?](https://www.amnesty.org/en/latest/campaigns/2024/02/what-is-tor-and-how-does-it-advance-human-rights/) - Tor、Onionサービスと人権を促進する仕組みを説明する資料。原文では解説を高く評価しています。
## State of the Onion年次報告 <a id="state-of-the-onion"></a>
- [2025](https://blog.torproject.org/state-of-the-onion-2025/) - 2025年のState of the Onion報告です。
- [2024](https://blog.torproject.org/state-of-the-onion-2024/) - 2024年のState of the Onion報告です。
- [2023](https://blog.torproject.org/state-of-the-onion-2023/) - 2023年のState of the Onion報告です。
- [2022](https://blog.torproject.org/state-of-the-onion-2022/) - 2022年のState of the Onion報告です。
- [2021](https://blog.torproject.org/state-of-the-onion-2021/) - 2021年のState of the Onion報告です。
- [2020](https://blog.torproject.org/state-of-the-onion-2020/) - 2020年のState of the Onion報告です。
- [2019](https://www.youtube.com/watch?v=W0NR6M_08oM) - 2019年のState of the Onion報告です。
## 内部告発 <a id="whistleblowing"></a>
- [GlobaLeaks](https://www.globaleaks.org/) - 誰でも安全な内部告発プラットフォームを容易に構築・維持できる、自由でオープンソースのソフトウェア。
- [SecureDrop](https://securedrop.org/) - 報道機関やNGOがインストールし、匿名の情報源から文書を安全に受け取るためのオープンソースの内部告発情報受付システムです。
- [WikiLeaks](https://wikileaks.org/) - 戦争、スパイ活動、汚職に関する、検閲済みまたは制限された公式資料の大規模データセットの分析・公開を専門とします。
