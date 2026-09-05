---
title: "Awesome IRC"
description: "IRCを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-davisonio-awesome-irc-readme-md"
---

# Awesome IRC

IRCを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次



- [クライアント](#clients)
- [バウンサー](#bouncers)
  - [ホスティング型](#hosted)
  - [セルフホスト型](#self-hosted)
- [デーモン](#daemons)
- [サービス](#services)
- [ボット](#bots)
- [暗号化](#encryption)
- [フレームワーク](#frameworks)
  - [ブリッジ](#bridges)
- [チャンネル](#channels)
  - [検索](#discovery)
  - [プラットフォーム](#platforms)
- [ネットワーク](#networks)
- [記事](#articles)
- [ガイド](#guides)
- [プロトコル](#protocol)
- [その他](#miscellaneous)

<a id="clients"></a>
## クライアント

*IRCへ接続するために使用します。*

- [![Textual-icon](https://user-images.githubusercontent.com/15098724/56874954-680a0500-69f2-11e9-87ec-d4015ce54af5.png) Textual](https://www.codeux.com/textual/) - 非常にカスタマイズ可能、ZNC統合、iCloud同期（$4.99）。（[source](https://github.com/Codeux-Software/Textual)）`macOS`
- [![LimeChat-icon](https://user-images.githubusercontent.com/15098724/56875043-04cca280-69f3-11e9-8e1f-285e54784fe4.png) LimeChat](http://limechat.net/mac/) - 複数サーバーを1つのウィンドウで管理、キーボードショートカット、高速かつ安定。（[source](https://github.com/psychs/limechat)）`macOS` `iOS`
- [![HexChat-icon](https://user-images.githubusercontent.com/15098724/56874706-b28a8200-69f0-11e9-9ca7-27c8779134e0.png) HexChat](https://hexchat.github.io) - XChatに基づく、使いやすい、スペルチェックおよび複数言語対応。（[source](https://github.com/hexchat/hexchat)）`Windows` `macOS` `Linux`
- [gamja](https://sr.ht/~emersion/gamja/) - シンプルなIRCウェブクライアント。（[source](https://git.sr.ht/~emersion/gamja)）`Web`
- [![KiwiIRC-icon](https://user-images.githubusercontent.com/15098724/56875143-a7852100-69f3-11e9-8b33-2035c156c016.png) Kiwi IRC](https://kiwiirc.com) - 強力で現代的なWeb IRCメッセンジャー。（[source](https://github.com/kiwiirc/kiwiirc)、[demo](https://kiwiirc.com/nextclient/)）`Web`
- [![CIRC-icon](https://user-images.githubusercontent.com/15098724/56875201-1498b680-69f4-11e9-91ff-ae3b674c82be.png) CIRC](https://flackr.github.io/circ/) - Chromeのsockets APIを使用し、プロキシなしで直接IRCサーバーに接続。（[source](https://github.com/flackr/circ)）`Chrome`
- [![Quassel-icon](https://user-images.githubusercontent.com/15098724/56875264-84a73c80-69f4-11e9-807c-75db09db0ec5.png) Quassel](https://quassel-irc.org) - 分散型（クライアントが中央コアに接続・離脱できる。中央コアは常にオンラインである。）（[source](https://github.com/quassel/quassel)）`Linux` `macOS` `Windows`
- [![Circe-icon](https://user-images.githubusercontent.com/15098724/56875558-a3a6ce00-69f6-11e9-92da-2e4d8c7b4a53.png) Circe](https://github.com/emacs-circe/circe) - Emacsで使用可能、適切なデフォルト設定。（`Emacs`）
- [![Smuxi-icon](https://user-images.githubusercontent.com/15098724/56875672-2f205f00-69f7-11e9-8cac-5721602234bb.png) Smuxi](https://smuxi.im) - 使いやすい、GNOME / GTK+に基づく。（[source](https://github.com/meebey/smuxi)）`Linux` `Windows` `macOS`
- [![KvIRC-icon](https://user-images.githubusercontent.com/15098724/56874636-1d878900-69f0-11e9-856e-719c4c822e25.png) KvIRC](https://www.kvirc.net) - 無料、ポータブル、Qt GUIツールキットに基づく。（[source](https://github.com/kvirc/KVIrc)）`Linux` `macOS` `Windows`
- [![Konversation-icon](https://user-images.githubusercontent.com/15098724/56876024-609a2a00-69f9-11e9-91dd-196f310776d7.png) Konversation](https://konversation.kde.org) - KDEプラットフォームに基づく使いやすいクライアント。（[source](https://github.com/KDE/konversation)）`Linux`
- [![sic-icon](https://user-images.githubusercontent.com/15098724/56876157-457bea00-69fa-11e9-94f5-11dcd0bfb00c.png) sic](https://tools.suckless.org/sic/) - **S**imple **I**RC **c**lient - Cで250行未満のコードで構成されたターミナルクライアント。（`Linux`）`macOS`
- [![irssi-icon](https://user-images.githubusercontent.com/15098724/56876266-0c904500-69fb-11e9-85a9-00796373cf88.png) irssi](https://irssi.org) - ターミナルクライアント、モジュール開発者向けにマルチプロトコル対応、GPLv2。（`Linux`）`macOS` `Cygwin` `BSD`
- [![RevolutionIRC-icon](https://user-images.githubusercontent.com/15098724/56876444-4f065180-69fc-11e9-8200-b244b6a86e94.png) Revolution IRC](https://github.com/MCMrARM/revolution-irc) - 機能豊富で積極的に維持されているAndroid IRCクライアント。（`Android`）
- [![AdiIRC-icon](https://user-images.githubusercontent.com/15098724/56632956-0e2fc680-6611-11e9-949e-c79c21f465a0.png) AdiIRC](https://adiirc.com) - IRC体験のあらゆる側面を非常に細かく設定できるクライアント。（`Windows`）`WINE`
- [![IRCforAndroid-icon](https://user-images.githubusercontent.com/15098724/56655816-b3b25c80-6648-11e9-92e1-12ca4587d9eb.png) IRC for Android™](https://www.countercultured.net/android/) - Android/Chrome OS用のパワーユーザ向けクライアント、ZNCの組み込み、通知ロジック、信頼性のあるDCC、ハードウェアキーボード向けのキーバインドなど。 `Android` `ChromeOS`
- [Iridium](https://appcenter.elementary.io/com.github.avojak.iridium/) - ValaとGTKで構成されたフレンドリーなIRCクライアント。elementary OS向けに設計されています。 ([source](https://github.com/avojak/iridium)) `Linux`
- [MERK](https://github.com/nutjob-laboratories/merk) - オープンソース、複数ドキュメントインターフェースのGUIクライアント。豊かなプラグインフレームワークを備え、40以上のイベントをサポート。プラグインはアプリ内で直接作成可能。 `Windows` `macOS` `Linux` `Python`
- [mIRC](https://www.mirc.co.uk) - Windows向け最も人気のあるIRCクライアント。組み込みスクリプト言語を備えています。 `Windows`
- [ObsidianIRC](https://hello.obby.world/) - 現代的なWebSocket IRCクライアント。DiscordのようなUIを備えています。 ([source](https://github.com/obbyworld/obby)) `Linux` `Windows` `macOS` `Android` `iOS` `Web`
- [XChat](https://xchat.org) - HexChatの前身。マルチプラットフォームのグラフィカルIRCクライアント。 `Windows` `Linux`
- [ircII](http://www.eterna23.net/ircii/) - 最も古いIRCクライアントの一つ。1989年に最初にリリースされました。 `Linux` `macOS`
- [BitchX](https://bitchx.sourceforge.net/) - Unix系システムで人気のターミナルベースクライアント。 ([screenshots](https://bitchx.sourceforge.net/category/screenshots.html)) `Linux` `macOS` `Windows`
- [Goguma](https://sr.ht/~emersion/goguma/) - モバイルデバイス向けのIRCクライアント。sojuの開発者によって開発されました。 `Android` `Linux`


*バウンサーを内蔵するクライアントは[下記](#bouncers)にあります。*

<a id="bouncers"></a>
## バウンサー

*チャットセッションを失わずに切断・再接続するために役立ちます。*

<a id="hosted"></a>
### ホスティング型

- [![IRCCloud-icon](https://user-images.githubusercontent.com/15098724/56879253-ba581f80-6a0c-11e9-8f6b-8461c10ed149.png) IRCCloud](https://www.irccloud.com) - チーム、友人、コミュニティ向けのグループチャット。どこからでもつながり、メッセージを一つも落とさない（+クライアント）（月額£0〜£3.50）。
  - [iOS App](https://github.com/irccloud/ios) - 公式。 `Objective-C`
  - [Android App](https://github.com/irccloud/android) - 公式。 `Java`
  - [Nimbus](https://github.com/jnordberg/irccloudapp) - スタンドアローンクライアント。 `macOS` `Objective-C`

<a id="self-hosted"></a>
### セルフホスト型

- [![Convos-icon](https://user-images.githubusercontent.com/15098724/56879497-d8724f80-6a0d-11e9-844d-7a5380b4524b.png) Convos](https://convos.chat) - 常にオンラインのウェブIRCクライアント。 ([source](https://github.com/convos-chat/convos)) `Perl` `JavaScript` `Web`
- [![ZNC-icon](https://user-images.githubusercontent.com/15098724/56879721-d8268400-6a0e-11e9-8b74-c2c748d15c4a.png) ZNC](https://wiki.znc.in/ZNC) - 最も人気のあるクライアント。多くの異なるプラグインをサポートしています。 ([source](https://github.com/znc/znc)) `C++`
- [![BIP-icon](https://user-images.githubusercontent.com/15098724/56899123-89491080-6a47-11e9-8513-4c8d09be32d9.png) BIP IRC Proxy](https://packages.debian.org/sid/bip) - 常にオンラインであり、軽量かつ安全なオープンソースIRCプロキシ。バックログ機能付き。（[source](https://salsa.debian.org/debian/bip)） `C`
- [![TheLounge-icon](https://user-images.githubusercontent.com/15098724/56899491-6b2fe000-6a48-11e9-9f01-1ed2cfb86b09.png) TheLounge](https://thelounge.chat) - レスポンス性があり、セルフホスト可能で複数ユーザーに対応。（[source](https://github.com/thelounge/thelounge), [demo](https://demo.thelounge.chat/)） `JavaScript` `Node.js` `Web`
- [![WeeChat-icon](https://user-images.githubusercontent.com/15098724/56876389-e028f880-69fb-11e9-82d6-8084e17f2f04.png) WeeChat](https://weechat.org) - 高速かつ軽量で拡張性の高いチャットクライアント。（[source](https://github.com/weechat/weechat)） `Linux` `macOS`
- [soju](https://codeberg.org/emersion/soju) - 使いやすいIRCボンサー。（`Go`）
- [sms-webhook](https://github.com/terminaldweller/sms-webhook) - シンプルなWebhookを通じてIRC上でSMSメッセージを受信。（`Go`）
- [psyBNC](https://psybnc.org/) - 複数ユーザー対応の永続的なIRCボンサーで暗号化対応。（`Linux`）

<a id="daemons"></a>
## デーモン

*独自のIRCサーバーやネットワークを運用するために使用します。*

- [ircd.js](https://github.com/alexyoung/ircd.js) - サーバーはクライアントに接続・チャンネルに参加・トピックの変更といった基本的な機能を許可する。
- [InspIRCd](https://www.inspircd.org) - モジュール化され、安定性を確保。新たに開発された。（[source](https://github.com/inspircd/inspircd)）
- [miniircd](https://github.com/jrosdahl/miniircd) - 非常にシンプルで制限が多い。
- [ngIRCd](https://ngircd.barton.de) - ポータブルで軽量。小さなネットワークやプライベートネットワークに最適。（[source](https://github.com/ngircd/ngircd)）
- [Ergo](https://ergo.chat/) - モダンなサーバーで、ポータブルであり、仕様に基づいて設計されている（最新のIRCv3対応を含む）。（[source](https://github.com/ergochat/ergo)）
- [UnrealIRCd](https://www.unrealircd.org) - モジュール化され、高度なIRCdで、1999年以降に数千のネットワークを提供。（[source](https://github.com/unrealircd/unrealircd)）
- [RobustIRC](https://robustirc.net) - ネットスプリットのないIRCサーバー。（[source](https://github.com/robustirc/robustirc/)）

<a id="services"></a>
## サービス

*ネットワークへユーザーアカウントやNickServ／ChanServのようなボットを提供します。*

- [Atheme](https://atheme.github.io) - 大規模ネットワークに設計され、スケーラビリティの要件が高い。（[source](https://github.com/atheme/atheme)）
- [anope](https://www.anope.org) - 柔軟性と使いやすさを設計した。（[source](https://github.com/anope/anope)）

<a id="bots"></a>
## ボット

*連携機能や情報提供など、人間向けのサービスを提供するIRCユーザーです。*

- [Eggdrop](https://www.eggheads.org) - 最も古いIRCボットであり、現在も開発中。機能が豊富で、Tclスクリプトを使用。（[source](https://github.com/eggheads/eggdrop)） `C`
- [Sopel](https://sopel.chat) - 用意された機能、チュートリアル、完全にドキュメント化されている。（[source](https://github.com/sopel-irc/sopel)） `Python`
- [Limnoria](https://github.com/ProgVal/Limnoria) - 堅牢で、ユーザーに優しく、開発者にも優しい。 `Python`
- [Twitch Plays](https://github.com/aidanrwt/twitch-plays ) - チャットからの入力を受け取り、対応するキーを押す。 `Python`
- [Skybot](https://github.com/rmmh/skybot) - 主な目標はシンプルさと強力さ。 `Python`
- [lazybot](https://github.com/Raynes/lazybot) - ユーザーに優しく、強力である。 `Clojure`
- [IRC-BF](https://gitlab.com/ddevault/bf-irc-bot) - `Brainfuck`
- [geordi](https://github.com/Eelis/geordi) - C++コードスニペットをコンパイルして実行。 `C++`
- [CloudBot](https://github.com/TotallyNotRobots/CloudBot) - シンプルで、速く、拡張可能。 `Python`
- [yossarian-bot](https://github.com/woodruffw/yossarian-bot) - 大きなデフォルトプラグインセット、Cinchベース。 `Ruby`
- [helga](https://github.com/shaunduncan/helga) - 複数プロトコルをサポートするプラグイン可能なチャットボット。 `Python`
- [EveIRC](https://github.com/Inspyre-Technologies/EveIRC) - 拡張可能なチャット／チャンネル／サーバー管理サービスを提供するボット。 [Cinch Framework](https://github.com/cinchrb/cinch)。 `Ruby`
- [BitBot](https://github.com/bitbot-irc/bitbot) - モジュール化されたイベント駆動型ボットで、REST API、個別ユーザー設定なども備えている。（[bitbot.dev](https://bitbot.dev)） `Python`
- [Cardinal](https://github.com/JohnMaguire/Cardinal) - Python Twisted IRCボットで、プラグイン開発の容易さに焦点を当てる。 `Python`
- [pyHoneybot](https://pyhoneybot.github.io/honeybot-store/) - Python Twisted IRCボットで、プラグイン開発の容易さに焦点を当てる。（[source](https://github.com/pyhoneybot/honeybot)） `Python`
- [wayback](https://github.com/wabarc/wayback) - IRCインターフェースを備えた、さまざまなアーカイブサービスと統合されたアーカイブツール。
- [milla](https://github.com/terminaldweller/milla) - Luaスクリプト対応の最新世代LLM駆動ボット。`Go`
- [MansionNET Bot Suite](https://github.com/MansionNET) - 自前でホスト可能なIRCボットのコレクション：AIチャットアシスタント、リアルタイム天気、プライバシーに配慮した検索、YouTubeメタデータ、AI駆動のトリビア。`Python`

<a id="encryption"></a>
## 暗号化

*IRCメッセージを暗号化するプラグインとツールです。*

- [irssi-otr](https://github.com/cryptodotis/irssi-otr) - irssi用のオフザレコード（OTR）メッセージプラグイン。`C`
- [weechat-otr](https://github.com/mmb/weechat-otr) - WeeChat用のオフザレコード（OTR）メッセージプラグイン。`Python`
- [FiSH-irssi](https://github.com/falsovsky/FiSH-irssi) - irssi向けのBlowfish暗号化（ECB／CBCモード）とDiffie–Hellman鍵交換。`C`

<a id="frameworks"></a>
## フレームワーク

*ボットの作成やIRCとアプリケーションの連携に役立ちます。*

- [node-irc](https://github.com/Throne3d/node-irc) `JavaScript`
- [goirc](https://github.com/fluffle/goirc) - イベントベース、状態を保持するが、ドキュメントが不足している。`Go`
- [Hubot IRC Adapter](https://github.com/nandub/hubot-irc) - hubot用のIRCアダプタ。`JavaScript`
- [go-ircevent](https://github.com/thoj/go-ircevent) - イベントベース。`Go`
- [slate-irc](https://github.com/slate/slate-irc) - プラグインシステム、シンプルなAPI、任意の入力ストリーム、デバッグサポート。`JavaScript`
- [PircBotX](https://github.com/pircbotx/pircbotx) - シンプルなAPIを備えたイベントベースのIRCライブラリ（[PircBot](https://www.jibble.org/pircbot.php)の更新版）。`Java`
- [IRC::Client](https://github.com/lizmat/IRC-Client) - `Perl6`ベースの拡張可能なIRCクライアントフレームワーク。
- [irccd](https://projects.malikania.fr/irccd/index.html) - JavaScriptでカスタマイズ可能な柔軟なIRCボット。`C++`.

<a id="bridges"></a>
### ブリッジ

*サービス間でメッセージを双方向に転送します。*

- [discord-irc](https://github.com/reactiflux/discord-irc) - Discord ↔ IRC。`JavaScript`
- [dibridge](https://github.com/OpenTTD/dibridge) - Discord ↔ IRC（パペット対応） `Python`
- [Dis4IRC](https://github.com/zachbr/Dis4IRC) - ディスコード ↔ IRC. `Kotlin`
- [slack-irc](https://github.com/ekmartin/slack-irc) - スラック ↔ IRC. `JavaScript`
- [irc-slack](https://github.com/insomniacslk/irc-slack) - スラック ↔ IRC. `Go`
- [BitlBee](https://www.bitlbee.org/main.php/news.r.html) - XMPP、Jabber、Google Talk、MSN メッセージャー、Yahoo! メッセージャー、AIM、ICQ、Twitter API、HipChat ↔ IRC. `C`
- [teleirc](https://github.com/RITlug/teleirc) - テレグラム ↔ IRC. `JavaScript`
- [toxirc](https://github.com/e0ff/toxirc) - トク ↔ IRC. `C`
- [skyweb2irc](https://github.com/ProgVal/skyweb2irc) - スカイプ（ウェブクライアントAPI） ↔ IRC. `Javascript`
- [matterbridge](https://github.com/42wim/matterbridge) - IRC ↔ Mattermost ↔ Discord ↔ XMPP ↔ Gitter ↔ Slack ↔ Discord ↔ Telegram ↔ その他 `Go`
- [Heisenbridge](https://github.com/hifi/heisenbridge) - バウンサー型のMatrix ↔ IRCブリッジ `Python`
- [Appservice-IRC](https://github.com/matrix-org/matrix-appservice-irc) - Matrix ↔ IRCのゲートウェイ／ブリッジ `Javascript`
- [matterircd](https://github.com/42wim/matterircd) - Matterbridge ↔ IRC、Slack ↔ IRC、Mastodon ↔ IRC。 `Go`

<a id="channels"></a>
## チャンネル

*IRCチャンネルです。*

<a id="discovery"></a>
### 検索

- [netsplit.de Search](https://netsplit.de/channels/ ) - 563の異なるネットワークを検索します.
- [KiwiIRC Search](https://kiwiirc.com/search) - 318の異なるネットワークを検索します.

<a id="platforms"></a>
### プラットフォーム

- [#Ubuntu](https://wiki.ubuntu.com/IRC/ChannelList)@Libera.Chat - 公式Ubuntuサポートチャンネル。 ([rules](https://wiki.ubuntu.com/IRC/Guidelines))

<a id="networks"></a>
## ネットワーク

*IRCサーバーの集合をネットワークと呼びます。*

- [Libera.Chat](https://libera.chat) - フリーかつオープンソースプロジェクトを主なテーマとするネットワーク。以前のfreenodeスタッフが運営している。
- [MansionNET](https://inthemansion.com) - プライバシーを重視するコミュニティネットワーク。UnrealIRCdとAnopeサービスを用いて運営されており、誰でも参加可能。トラッキングや広告は一切ない。(`irc.inthemansion.com:6697`、ウェブチャットは `webirc.inthemansion.com`)
- [Snoonet](https://snoonet.org) - Redditのユーザーとサブレッドのコミュニティ。 ([rules](https://snoonet.org/rules/))
- [OFTC](https://oftc.net) - フリーかつオープンソースソフトウェアのコミュニティを支援するコミュニティ。
- [LibertaCasa](https://liberta.casa) - プライバシーを重視するコミュニティで、さまざまなテーマについての議論を安全かつオープンに提供する場。

<a id="articles"></a>
## 記事

*IRCに関する記事とブログ投稿です。*

- [Please don't use Slack for FOSS projects](https://drewdevault.com/2015/11/01/Please-stop-using-slack.html) - Drew DeVaultのブログ。
- [IRC is dead, long live IRC](https://www.pingdom.com/blog/irc-is-dead-long-live-irc/) - Pingdom。
- [IRC Has Lost 60% Of Its Users Since 2003, But Life As A Robot Is Just Beginning](https://techcrunch.com/2013/01/06/irc-has-lost-60-of-its-users-since-2003-but-life-as-a-robot-is-just-beginning/) - Alex Williams（TechCrunch）。

<a id="guides"></a>
## ガイド

*手順、ドキュメント、書籍です。*

- [#irchelp](https://www.irchelp.org) - 比較的最新の情報が豊富に収録されている。

<a id="protocol"></a>
## プロトコル

*IRCプロトコル自体に関する情報と資料です。*

- [IRCv3 Working Group](https://ircv3.net) - IRCソフトウェア開発者たちのグループ。IRCプロトコルの改善・強化・維持・標準化を進めている。([source](https://github.com/ircv3/ircv3.github.io))
- [Modern IRC Documents](https://modern.ircdocs.horse) - 元のIRCプロトコルにアップデートを試みたドキュメンテーション。([source](https://github.com/ircdocs/modern-irc))
- [IRC Definition Files](https://defs.ircdocs.horse) - 番号、モード、ISUPPORTトークン、その他プロトコルの詳細をリスト化したもの。([source](https://github.com/ircdocs/irc-defs))
- [grawity's IRC docs](https://github.com/grawity/irc-docs) - さまざまなIRCプロトコルに関する雑多なドキュメンテーションの収集。
- [Protocol Statistics](https://stats.ircdocs.horse) - 現在のネットワークで使われているサーバーソフトウェアに関する統計。([source](https://github.com/ircdocs/irc-stats))
- [IRC Parser Tests](https://github.com/ircdocs/parser-tests) - CC0認定のテストセット。IRCメッセージパーサーの一貫性を確保するため。

<a id="miscellaneous"></a>
## その他

*この一覧に含める価値はあるものの、分類しにくい項目です。*

- [superseriousstats](https://github.com/tommyrot/superseriousstats) - さまざまなチャットログから統計を迅速かつ効率的に生成するプログラム。 `PHP` `Web`
- [img2src](https://github.com/waveplate/img2irc) - 画像を半ブロックANSIまたはIRCに変換し、多数の後処理フィルターを適用。 `Rust`

<a id="use"></a>
## 使い方

この一覧は次の方法で利用できます。

- [目次](#contents)
- <kbd>command</kbd> + <kbd>F</kbd>で内容を検索する

検索しやすいよう、次のタグも使用しています。
- **言語** - `Python`, `Java`, `C++`, `Go`, `JavaScript`, `Ruby`, `C` など。
- **プラットフォーム** - `Web`, `macOS`, `Windows`, `Linux`, `Chrome` など。

<a id="credits"></a>
## クレジット

[Craig Davison](https://davison.io)と貢献者による一覧です。
