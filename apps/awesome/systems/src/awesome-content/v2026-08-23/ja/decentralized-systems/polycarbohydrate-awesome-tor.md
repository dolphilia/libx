---
title: "Awesome Tor"
description: "TorとTor Browserのマニュアル、アプリ、ライブラリ、ブリッジ、検閲回避、研究資料、年次報告と内部告発ツール。"
licenseSource: "github-polycarbohydrate-awesome-tor-readme-md"
---

# Awesome Tor<a id="awesome-tor-logo"></a>

[Tor](https://www.torproject.org)は、自由に利用できるオープンソースソフトウェアと、世界各地のボランティアが運用するリレーで構成される、匿名通信用の無料オーバーレイネットワークです。固定原文ではリレー数は7,000超とされ、通信をランダムな経路で中継すると説明されています。Tor Browserのマニュアル、アプリとライブラリ、ブリッジと検閲回避、研究・ニュース、年次報告、内部告発ツールを紹介します。

この一覧はTor®匿名化ソフトウェアとは独立に制作されています。The Tor Projectは、この一覧の品質・適合性その他について保証していません。

## 公式マニュアル

- [Tor Browserについて](https://tb-manual.torproject.org/about/) - Tor Browserによるプライバシーと匿名性の保護機能。
- [フィンガープリンティング対策](https://tb-manual.torproject.org/anti-fingerprinting/) - Tor Browserがブラウザーフィンガープリンティングを軽減する方法。
- [ブリッジ](https://tb-manual.torproject.org/bridges/) - obfs4など、多くのプラガブルトランスポートが利用するブリッジリレー。
- [検閲回避](https://tb-manual.torproject.org/circumvention/) - Torネットワークがブロックされた場合の対処法。
- [ダウンロード](https://tb-manual.torproject.org/downloading/) - Tor Browserのダウンロード方法。
- [インストール](https://tb-manual.torproject.org/installation/) - Tor Browserのインストール。
- [既知の問題](https://tb-manual.torproject.org/known-issues/) - Torに関する既知の問題。
- [Tor Browserの持ち運び](https://tb-manual.torproject.org/make-tor-portable/) - Tor Browserをリムーバブルメディアへインストールする方法。
- [識別情報の管理](https://tb-manual.torproject.org/managing-identities/) - Tor Browserで個人を特定しうる情報を管理する方法。
- [モバイル向けTor](https://tb-manual.torproject.org/mobile-tor/) - モバイル端末向けTorの解説。
- [Onionサービス](https://tb-manual.torproject.org/onion-services/) - Tor経由でのみアクセスできるサービス。
- [プラグイン・アドオン・JavaScript](https://tb-manual.torproject.org/plugins/) - Tor Browserによるアドオン、プラグイン、JavaScriptの扱い方。
- [Tor Browserの起動](https://tb-manual.torproject.org/running-tor-browser/) - Tor Browserの初回利用方法。
- [安全な接続](https://tb-manual.torproject.org/secure-connections/) - Tor BrowserとHTTPSでデータを保護する方法。
- [セキュリティ設定](https://tb-manual.torproject.org/security-settings/) - セキュリティと使いやすさのためのTor Browser設定。
- [サポート](https://tb-manual.torproject.org/support/) - ヘルプの取得、バグ報告、フィードバックの方法。
- [トラブルシューティング](https://tb-manual.torproject.org/troubleshooting/) - Tor Browserが正しく動かない場合の対処法。
- [更新](https://tb-manual.torproject.org/updating/) - Tor Browserの更新方法。
- [アンインストール](https://tb-manual.torproject.org/uninstalling/) - システムからTor Browserを削除する方法。

## アプリケーション

### Tails

RAM上で動作する、持ち運び可能なDebianベースのOSです。主要ブラウザーにTor Browserを使い、固定原文では痕跡を残さないと説明されています。

- [開発への参加](https://tails.net/contribute/index.en.html)
- [ドキュメント](https://tails.net/doc/index.en.html)
- [ダウンロード](https://tails.net/install/index.en.html)
- [公式サイト](https://tails.net/)
- [仕組み](https://tails.net/about/index.en.html)
- [ニュース](https://tails.net/news/index.en.html)
- [サポート](https://tails.net/support/index.en.html)

### Tor / Tor Browser

匿名通信を行うオープンソースのウェブブラウザーです。世界各地のボランティアが運用する無料のオーバーレイネットワークを介して通信を中継し、ネットワーク監視やトラフィック分析から位置情報と利用状況を隠します。

- [概要](https://www.torproject.org/about/history/)
- [コミュニティ](https://community.torproject.org/)
- [ダウンロード](https://www.torproject.org/download/)
- [サポート](https://support.torproject.org/)
- [ニュース](https://blog.torproject.org/)
- Core Tor / Little-t-tor
  - [インストール／ソースコードの検証](https://support.torproject.org/little-t-tor/)
  - [フォーラム／サポート](https://forum.torproject.org/c/support/core-tor/18)

### その他のアプリケーション

- [ansible-relayor](https://github.com/nusenu/ansible-relayor) - Torリレー運用者向けのAnsibleロール。
- [bine](https://github.com/cretz/bine) - Torクライアント・サーバーへのアクセスや、アプリへの組み込みに使うGoライブラリ。
- [Briar](https://briarproject.org/) - 中央サーバーを介さないピアツーピアのメッセージング。Bluetooth・Wi-Fi・Torで接続。
- [Bulk Tor Exit Exporter](https://check.torproject.org/api/bulk) - 出口ノードのIPv4アドレスとフィンガープリント情報を表示し、Tor出口ノードを特定。
- [Chutney](https://gitlab.torproject.org/tpo/core/chutney/) - Torネットワークを設定し、起動・監視した後にテストを実行。
- [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) - 暗号化DNSプロトコルをサポートする柔軟なDNSプロキシ。
- [dos-over-tor](https://github.com/skizap/dos-over-tor) - Tor経由の概念実証的DoSストレステストツール。
- [DocTor](https://gitlab.torproject.org/tpo/network-health/doctor/) - 新しく公開された記述子の情報を監視し、問題を通知するサービス。
- [eotk](https://github.com/alecmuffett/eotk) - ウェブサイトの公式Onion版を提供するため、HTTP/Onionサイトをデプロイするツール。
- [exitmap](https://www.cs.kau.se/philwint/spoiled_onions/) - 不正な出口（spoiled onions）を検出するTor用スキャナー。
- [haskell-tor](https://github.com/GaloisInc/haskell-tor) - TorプロトコルのHaskell実装。
- [HTTPS Everywhere](https://www.eff.org/https-everywhere) - ブラウザーの接続をHTTPSにするツール。固定原文ではTor Browserに同梱と説明。
- [kalitorify](https://github.com/brainfucksec/kalitorify) - Kali Linux OS向けに、Tor経由の透過プロキシを作成するシェルスクリプト。
- [Tor Metrics](https://metrics.torproject.org/) - Torの統計を可視化する調整可能なグラフ。
- [multitor](https://github.com/trimstray/multitor) - ロードバランシングを備えた複数のTorインスタンスを作成。
- [mini-tor](https://github.com/wbenny/mini-tor) - インターネットと隠しサービスのコンテンツにアクセスする小型アプリケーション。
- [node-Tor](https://github.com/Ayms/node-Tor) - サーバー側とブラウザーで動作する、TorプロトコルのJavaScriptによるオープンソース実装。
- [nyx](https://nyx.torproject.org/) - リレーに関する詳細なリアルタイム情報を含むCLIインターフェース。
- [offensive-tor-toolkit](https://github.com/atorrescogollo/offensive-tor-toolkit) - GoでTor経由のBind/Reverse Shell、SOCKSなどを扱うツール。
- [onion-grater](https://github.com/Whonix/onion-grater) - 危険なTor制御プロトコルのコマンドを、許可リストに基づいて制限するフィルター。
- [Onionbalance](https://onionbalance.readthedocs.io/en/latest/) - 複数のバックエンドTorインスタンスでOnionサービスを負荷分散する仕組み。
- [Onionoo](https://metrics.torproject.org/onionoo.html) - 稼働中のTorリレーとブリッジの情報を取得するウェブベースのプロトコル。
- [OnionScan](https://onionscan.org/) - 隠しサービスの運用者による、運用上のセキュリティ問題の検出・修正を支援。
- [OnionShare](https://onionshare.org/) - Torネットワークを使った、匿名でのファイル共有・ウェブサイトのホスティング・チャット。
- [OONI](https://ooni.org/) - ウェブサイトとアプリのブロック状況を調べ、ネットワークの速度と性能を測定。
- [Orbot](https://guardianproject.info/apps/org.torproject.android/) - Android上のTor。
- [Orfox](https://guardianproject.info/apps/info.guardianproject.orfox/) - Android向けに変更されたTorブラウザー。Orbotが必要。
- [php-torcontrol](https://github.com/dunglas/php-torcontrol) - TorControlはTorサーバーを制御するPHPライブラリ。
- [Relay Search](https://metrics.torproject.org/rs.html) - リレーに関する情報を簡単に検索できる仕組み。
- [Ricochet Refresh](https://www.ricochetrefresh.net/) - Torを使ってクライアントを接続するピアツーピアメッセンジャーアプリ。
- [rotating-proxy](https://github.com/mattes/rotating-proxy) - Dockerを用いたローテーションTorプロキシ。
- [sbws](https://gitlab.torproject.org/tpo/network-health/sbws) - ディレクトリーオーソリティが使う帯域幅ファイルを生成する、Tor帯域幅スキャナー。
- [Stormy](https://github.com/glamrock/stormy) - 数回のクリックでTor Onionサービスを作成するウィザード。
- [setup-tor](https://github.com/tor-actions/setup-tor) - GitHub Actionsワークフローに指定バージョンのTorを設定。
- [Stem](https://stem.torproject.org/) - Tor向けのPythonコントローラーライブラリ。
- [Shadow](https://shadow.github.io/) - 実際のTorソフトウェアをプラグインとして実行する離散イベントネットワークシミュレーター。
- [Tallow](https://github.com/basil00/TorWall) - Windowsマシンからのすべての送信トラフィックをTor匿名ネットワーク経由へリダイレクトするプログラム。
- [tor_box](https://github.com/CMoncur/tor_box) - リレーおよび個人用Torネットワークとして機能するRaspberry Pi向けの包括的Tor設定。
- [Tor_Onion_Proxy](https://github.com/thaliproject/Tor_Onion_Proxy_Library) - JavaまたはAndroidプログラムへTorを埋め込むための.JARと.AARファイルを提供。
- [tor_ssh.sh](https://gitlab.com/grownetics/devops/blob/master/tor_ssh.sh) - 任意のサーバーへTorを使ったSSHアクセスを可能にするコマンド。
- [tor-browser-selenium](https://github.com/webfp/tor-browser-selenium) - Selenium WebDriverでTor Browserを自動化するPythonライブラリ。
- [tor-controller](https://github.com/kragniz/tor-controller) - Kubernetes上でTor Onionサービスを実行。
- [tor-hidden-service](https://hub.docker.com/r/goldy/tor-hidden-service) - v2またはv3のOnionサービス用に作られたDockerコンテナー。
- [tor-relay-bootstrap](https://github.com/coldhakca/tor-relay-bootstrap) - Debianサーバーを初期設定し、その後の個別操作を要しないTorリレーとして運用するスクリプト。
- [Tor.framework](https://github.com/iCepa/Tor.framework) - iOSアプリケーションへTorを組み込むためのフレームワーク。
- [tor.rb](https://github.com/dryruby/tor.rb) - Tor匿名ネットワークとやり取りするRubyライブラリ。
- [Tor2web](https://github.com/tor2web/Tor2web) - 一般的なウェブブラウザーからTor隠しサービスへのアクセスを可能にするHTTPプロキシソフトウェア。
- [TorBot](https://github.com/DedSecInside/TorBot) - データ収集用のOnionサイトクローラー。
- [TorChat-Mac](https://github.com/javerous/TorChat-Mac) - macOSネイティブのTorChatクライアント。
- [TorChat](https://github.com/prof7bit/TorChat) - Tor隠しサービス上の分散型匿名インスタントメッセンジャー。
- [TorCheck](https://check.torproject.org/) - 訪問者がTorを利用しているかどうかを判定。
- [torDDoS](https://github.com/r3nt0n/torDDoS) - TorネットワークからウェブサイトへのDDoS攻撃を自動化するPythonツール。
- [toriptables2](https://github.com/ruped24/toriptables2) - iptablesとTorを設定して全トラフィックをTorネットワーク経由へルーティングする匿名化ツール。
- [torps](https://github.com/torps/torps) - Tor Path Simulator（TorPS）は、Torでの経路選択を効率的にシミュレートするツール。
- [Torsocks](https://gitlab.torproject.org/tpo/core/torsocks/) - 大半のアプリケーションをTor経由で使うツール。固定原文では安全な利用を支援すると説明。
- [Tortilla](https://www.crowdstrike.com/resources/community-tools/tortilla-tool/) - すべてのTCP/IP・DNSトラフィックをTor経由へ透過的に転送するツール。固定原文では安全性と匿名性を提供すると説明。
- [tun2tor](https://github.com/iCepa/tun2tor) - utun（ユーザー空間トンネル）インターフェースを作り、ストリームベースのプロキシへ接続するRustライブラリ。
- [txtorcon](https://txtorcon.readthedocs.io/en/latest/) - PythonのTwistedネットワーキングライブラリを使う、Tor向けcontrol-spec実装。
- [Vanguards](https://github.com/mikeperry-tor/vanguards) - ガードリレーの特定と、それに関連するトラフィック分析攻撃から保護するアドオン。
- [Whonix](https://www.whonix.org/) - デスクトップ全体でのTorネットワーク利用により、高度なセキュリティとプライバシーを実現するOS。
- [ZeroNet](https://zeronet.io/) - Bitcoinの暗号技術とBitTorrentネットワークを使い、Torにも対応するウェブサイト。固定原文では無料で検閲に耐えると説明。

## ブリッジ

- [BridgeDB](https://pythonhosted.org/bridgedb/) - Torブリッジを配布するバックエンドサーバー群。
- [Conjure](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/conjure) - refraction networking（別名decoy routing）系統の検閲回避ツール。
- [Flash Proxies](https://crypto.stanford.edu/flashproxy/) - 旧式・非推奨のブリッジ種別。ウェブブラウザーで動作する小型プロキシ。
- [fteproxy](https://fteproxy.org/) - 旧式・非推奨のブリッジ種別。Torトラフィックを通常のHTTPに見せかける仕組み。名称は「Format-Transforming Encryption」の略。
- [meek](https://support.torproject.org/glossary/meek/) - Torの利用を、大手ウェブサイトの閲覧に見せかけるプラガブルトランスポート。
- [obfs2](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/trac/-/issues/10314) - 旧式・非推奨のブリッジ種別。obfs3の前身。
- [obfs3](https://support.torproject.org/glossary/obfs3/) - 旧式・非推奨のブリッジ種別。obfs4の前身。
- [obfs4](https://support.torproject.org/glossary/obfs4/) - Torトラフィックをランダムに見せ、検閲者がインターネットスキャンでブリッジを見つけることも防ぐプラガブルトランスポート。
- [ScrambleSuit](https://github.com/NullHypothesis/scramblesuit) - 旧式・非推奨のブリッジ種別。obfsproxy向けのプラガブルトランスポート用プロトコルで、純粋なPythonによる実装。
- [Snowflake](https://snowflake.torproject.org/) - インターネット上の活動を、通常のビデオ・音声通話に見せかける仕組み。検閲地域の利用者を支援するための[ブラウザー内Snowflake運用ガイド](https://polycarbohydrate.github.io/awesome-tor/selfhost-snowflake)も掲載。
- [Webtunnel](https://blog.torproject.org/introducing-webtunnel-evading-censorship-by-hiding-in-plain-sight/) - WebTunnelはHTTPTに着想を得て、暗号化されたWebトラフィック（HTTPS）を模倣するよう設計された検閲に耐えるプラガブルトランスポート。

## 検閲回避

- [Firefly](https://github.com/yinghuocho/firefly-proxy) - Great Firewallの回避を助けるプロキシソフトウェア。
- [FWlite](https://github.com/v3aqb/fwlite) - shadowsocksを内蔵サポートする検閲対抗HTTPプロキシ。
- [Google Fi Wireless](https://fi.google.com/) - 通話・テキストメッセージ・携帯データ通信向けのサービス。固定原文では中国のGreat Firewallを回避すると説明。
- [Lantern](https://github.com/getlantern/lantern) - あらゆるOSで無料ダウンロードできる検閲回避ツール。
- [MTProxy](https://github.com/TelegramMessenger/MTProxy) - 検閲地域の利用者によるTelegramへの接続を支援。
- [NaïveProxy](https://github.com/klzgrad/naiveproxy) - Chromiumのネットワークスタックを利用して通信を偽装し、検閲への耐性と検出されにくさを高める仕組み。
- [nodeunblocker](https://github.com/nfriedly/nodeunblocker.com) - Node.jsでnodeunblocker.comのコピーをホストし、インターネット上の検閲を回避。
- [PrivadoVPN](https://privadovpn.com/) - スイスを拠点とするVPN。固定原文ではスイスのプライバシー法に従い、中国でも検閲を回避すると説明。
- [ProtonVPN](https://protonvpn.com/) - 固定原文では、中国でも検閲を回避できるVPNとして紹介。無料プラン、複数サーバーとプロトコル、ノーログ方針を記載。
- [非公開ブリッジ](https://bridges.torproject.org/) - `I need an alternative way of getting bridges!`（ブリッジを取得する別の方法が必要）欄の案内。
- [Runet Censorship Bypass](https://github.com/anticensority/runet-censorship-bypass) - ロシアにおける検閲の回避を助けるChromium・Firefox向けブラウザー拡張。
- [StegoTorus](https://github.com/SRI-CSL/stegotorus) - Tor匿名化システム向けのカモフラージュプロキシ。
- [trojan](https://github.com/trojan-gfw/trojan) - GFWの回避を助ける、識別困難なメカニズム。

## 社会的受容・影響・ニュース・法制度<a id="公共の受容影響ニュース法制度"></a>

- [A close look at the Great Firewall of China](https://blog.torproject.org/closer-look-great-firewall-china/) - 中国国内におけるTorの検閲に関する情報。
- [Analyzing China's Blocking of Unpublished Tor Bridges](https://www.usenix.org/conference/foci18/presentation/dunna) - 中国による非公開Torブリッジの遮断方法と、その防止に関する研究。
- [Anarcho-Tech NYC Wiki](https://github.com/AnarchoTechNYC/meta/wiki) - オンラインでプライバシーと匿名性を保つ方法を説明するWiki。
- [Anonymity Bibliography](https://www.freehaven.net/anonbib/) - 1977〜2020年の匿名性に関する論文集。
- [Dropping Docs on Darknet](https://www.youtube.com/watch?v=eQ2OZKitRwc) - DEF CON 22 — Adrian Crenshawによる、ダークネットの利用者がどのように身元を特定されたかを扱う講演。
- [How governments have tried to block Tor](https://www.youtube.com/watch?v=DX46Qv_b7F4) - 28c3における、政府がTorをブロックしようとした方法の解説。
- [How the Great Firewall of China is Blocking Tor](https://www.usenix.org/system/files/conference/foci12/foci12-final2.pdf) - 中国によるTorの遮断の仕組みと、回避方法を説明する論文。
- [Learning more about the GFW's active probing system](https://blog.torproject.org/learning-more-about-gfws-active-probing-system/) - GFWの検閲システムと仕組みに関するページ。
- [My Experience With the Great Firewall of China](http://blog.zorinaq.com/my-experience-with-the-great-firewall-of-china/) - 情報セキュリティの専門家が中国訪問時のGreat Firewall体験を記したブログ。
- [Protocol Misidentification Made Easy with Format-Transforming Encryption](https://kpdyer.com/publications/ccs2013-fte.pdf) - FTEの仕組みを解説する論文。
- [Russia Passes Bill Banning Tor](https://www.themoscowtimes.com/2021/12/08/russia-blocks-tor-anonymity-service-a75760) - ロシアがVPNとTorを禁止したことに関する記事。
- [Scaling Tor hidden services](https://www.benthamsgaze.org/2015/11/17/scaling-tor-hidden-services/) - 隠しサービスをスケールさせる方法。
- [ScrambleSuit: A Polymorph Network Protocol to Circumvent Censorship](http://arxiv.org/pdf/1305.3199) - ScrambleSuitの仕組みを解説する論文。
- [Snowden Revelations](https://www.theguardian.com/world/interactive/2013/nov/01/snowden-nsa-files-surveillance-revelations-decoded) - スノーデンによる暴露の解説。
- [State of the Onion - 2023](https://blog.torproject.org/event/state-of-the-onion-2023/) - チームとコミュニティの更新を共有し、年間の取り組みと世界へ与えた影響を紹介するTor Projectの年次バーチャルイベント。
- [StegoTorus: A Camouflage Proxy for the Tor Anonymity System](https://www.freehaven.net/anonbib/cache/ccs2012-stegotorus.pdf) - StegoTorusの仕組みに関する論文。
- [Technical and Legal Overview of Tor](https://ccdcoe.org/uploads/2018/10/TOR_Anonymity_Network.pdf) - 技術的な視点からTorの概要を示し、その利用に関する複数の法的問題も分析。
- [Tor after the Snowden revelations](https://blog.torproject.org/tor-in-2023/) - スノーデンによる暴露と、当時のTorの2024年計画に関する記事。
- [Tor Browser Afforded CDA Immunity for Dark Web Transactions](https://www.govinfo.gov/content/pkg/USCOURTS-utd-2_18-cv-00712/pdf/USCOURTS-utd-2_18-cv-00712-0.pdf) - Tor上での麻薬購入を通じた未成年者の死亡に関する裁判文書。
- [Tor Hidden Services and Deanonymization](https://www.youtube.com/watch?v=HQXRURfrf8w) - Torとそのサービスへの攻撃によって利用者情報が明らかになる仕組みと、攻撃の防止策に関する講演。
- [Tor Overview](https://www.privacyguides.org/en/advanced/tor-overview/) - PrivacyguidesによるTor概要。
- [Understanding The Onion Router in 2024](https://www.privacyjournal.net/privacy/tor-network/) - Torとは何かを説明する2024年版の解説。
- [What is Tor?](https://www.amnesty.org/en/latest/campaigns/2024/02/what-is-tor-and-how-does-it-advance-human-rights/) - TorとOnionサービスの概要、人権の促進との関係を説明。

## State of the Onion

- [2025](https://blog.torproject.org/state-of-the-onion-2025/) - 2025年のState of the Onion報告。
- [2024](https://blog.torproject.org/state-of-the-onion-2024/) - 2024年のState of the Onion報告。
- [2023](https://blog.torproject.org/state-of-the-onion-2023/) - 2023年のState of the Onion報告。
- [2022](https://blog.torproject.org/state-of-the-onion-2022/) - 2022年のState of the Onion報告。
- [2021](https://blog.torproject.org/state-of-the-onion-2021/) - 2021年のState of the Onion報告。
- [2020](https://blog.torproject.org/state-of-the-onion-2020/) - 2020年のState of the Onion報告。
- [2019](https://www.youtube.com/watch?v=W0NR6M_08oM) - 2019年のState of the Onion報告。

## 内部告発

- [GlobaLeaks](https://www.globaleaks.org/) - 誰もが安全な内部告発プラットフォームを容易にセットアップ・維持できる、無料のオープンソースソフトウェア。
- [SecureDrop](https://securedrop.org/) - 報道機関やNGOが導入し、匿名の情報源から文書を安全に受け取るための、オープンソースの内部告発受付システム。
- [WikiLeaks](https://wikileaks.org/) - 戦争、スパイ活動、汚職に関する、検閲済みまたは制限された公式資料の大規模データセットの分析・公開を専門とする組織。
