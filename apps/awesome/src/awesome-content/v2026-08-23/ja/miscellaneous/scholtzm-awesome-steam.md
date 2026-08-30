---
title: "scholtzm/awesome-steam"
description: "scholtzm/awesome-steam の正規スナップショット"
licenseSource: "github-scholtzm-awesome-steam-readme-md"
---

# Awesome Steam [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> [Steam](http://store.steampowered.com/)開発に関する[パッケージ](#packages)と[リソース](#resources)の厳選リスト。

*コントリビュートする前に[コントリビューションガイドライン](https://github.com/scholtzm/awesome-steam/blob/5df7c71148523a438d856494790a0f89f9881467/CONTRIBUTING.md)をお読みください。*

この文書は、Steamクライアントの自動化とWebAPIの利用に関して、既存のパッケージ（ライブラリ、モジュールなど）と利用可能なリソースを手早く把握できるようにするものです。新しいプロジェクトを始めるときは、パッケージ一覧から用途に合うものを探してください。技術的な詳細やチュートリアルが必要な場合は、リソースの節を確認してください。

## 目次

- [パッケージ](#packages)
  - [Node.js](#nodejs)
  - [C#](#c)
  - [PHP](#php)
  - [Go](#go)
  - [Python](#python)
  - [C++](#c-1)
  - [Java](#java)
  - [Objective-C](#objective-c)
  - [Ruby](#ruby)
  - [Rust](#rust)

- [リソース](#resources)
  - [一般](#general-3)
  - [チュートリアル](#tutorials)
  - [投稿](#posts)
  - [スタンドアロンツール](#standalone-tools)
  - [ディスカッションボード](#discussion-boards)
  - [サードパーティサービス](#third-party-services)

## パッケージ <a id="packages"></a>

> 💡 これらのパッケージリポジトリの多くには、使用方法や例を説明する有用なREADMEとWikiページがあります。各パッケージを使う際には忘れずに確認してください。

### Node.js

#### 一般 <a id="general"></a>

- [steam](https://github.com/seishun/node-steam) - Node.jsからSteamサーバーと直接通信するインターフェース。
- [steam-client](https://github.com/DoctorMcKay/node-steam-client) - node-steamのSteamClientとAPI互換のフォーク。
- [steam-user](https://github.com/DoctorMcKay/node-steam-user) - 高機能で使いやすいSteamクライアント。
- [vapor](https://github.com/scholtzm/vapor) - 軽量なSteamクライアントフレームワーク。
- [steam-parentbot](https://github.com/dragonbanshee/node-steam-parentbot) - Steamボット向けのシンプルな基底クラス。
- [steamworks-ffi-node](https://github.com/ArtyProf/steamworks-ffi-node) - Steamworks SDKのNode.jsラッパー。

#### WebAPI

- [steam-webapi](https://github.com/DoctorMcKay/node-steam-webapi) - Steamが送信する追加HTTPヘッダーにも対応する完全なWebAPIラッパー。
- [steamapi](https://github.com/lloti/node-steamapi) - 扱いやすいSteam APIラッパー。

#### 取引 <a id="trading"></a>

- [steam-trade](https://github.com/seishun/node-steam-trade) - Steamライブ取引のNode.jsラッパー。
- [steam-tradeoffers](https://github.com/Alex7Kom/node-steam-tradeoffers) - Node.js向けSteam Trade Offers。
- [steam-tradeoffer-manager](https://github.com/DoctorMcKay/node-steam-tradeoffer-manager) - シンプルで適切なSteam取引オファー管理。
- [steam-inventory-stream](https://github.com/timvandam/steam-inventory-stream) - インベントリを読み取り可能なストリームとして取得。
- [steam-inventory-api-ng](https://github.com/itsjfx/node-steam-inventory-api-ng) - 再試行やプロキシ対応などの高度な機能を備えたSteam Inventory APIラッパー。

#### ゲーム連携 <a id="game-interaction"></a>

- [steam-gameserver](https://github.com/DoctorMcKay/node-steam-gameserver) - GameserverおよびAnonGameserverアカウント種別向けのSteamクライアントハンドラー。
- [tf2](https://github.com/DoctorMcKay/node-tf2) - TF2のゲームコーディネーターと直接連携。
- [csgo](https://github.com/joshuaferrara/node-csgo) - CS:GOのゲームコーディネーターと直接連携。
- [dota2](https://github.com/RJacksonm1/node-dota2) - Dota 2のゲームコーディネーターと直接連携。

#### コミュニティとストアの自動化 <a id="community--store-automation"></a>

- [steamcommunity](https://github.com/DoctorMcKay/node-steamcommunity) - steamcommunity.comと連携し、取引オファーの承認にも対応。
- [steamstore](https://github.com/DoctorMcKay/node-steamstore) - store.steampowered.comと連携。
- [steam-weblogon](https://github.com/Alex7Kom/node-steam-weblogon) - Steamネットワーククライアントの実行時にSteamCommunity Cookieを取得。
- [steam-web-api-key](https://github.com/Alex7Kom/node-steam-web-api-key) - Steam APIキーを自動登録・取得。
- [steam-parental](https://github.com/Alex7Kom/node-steam-parental) - ペアレンタルロックを解除。

#### 認証 <a id="authentication"></a>

- [steam-login](https://github.com/cpancake/steam-login) - Connect／Express向けのシンプルなSteam認証ライブラリ。
- [passport-steam](https://github.com/liamcurry/passport-steam) - PassportとNode.js向けのSteam（OpenID）認証ストラテジー。
- [meteor-accounts-steam](https://github.com/scholtzm/meteor-accounts-steam) - Meteor AccountsへのSteam OpenID統合。

#### その他 <a id="misc"></a>

- [steam-resources](https://github.com/seishun/node-steam-resources) - Steamの列挙型、protobuf、構造体。
- [steam-crypto](https://github.com/seishun/node-steam-crypto) - Steam暗号処理のNode.js実装。
- [steam-groups](https://github.com/scholtzm/node-steam-groups) - グループ機能を提供するカスタムnode-steamハンドラー。
- [steamid](https://github.com/DoctorMcKay/node-steamid) - SteamIDの利用と変換を簡単にする。
- [steam-totp](https://github.com/DoctorMcKay/node-steam-totp) - Steamで使われる2FAコードを簡単に生成。
- [steam-chat-bot](https://github.com/Steam-Chat-Bot/node-steam-chat-bot) - Steamチャットボット向けの簡略化されたインターフェース。
- [vdf](https://github.com/RJacksonm1/node-vdf) - vdfとオブジェクトを相互変換。
- [steamrep](https://github.com/scholtzm/node-steamrep) - ユーザーのSteamRep評価を確認。
- [reptf](https://github.com/scholtzm/node-reptf) - ユーザーのrep.tf評価を確認。
- [steamapis](https://github.com/itsjfx/node-steamapis) - [steamapis.com](https://steamapis.com)のAPIを利用するモジュール。

### C&#35;

#### 一般 <a id="general-1"></a>

- [SteamKit2](https://github.com/SteamRE/SteamKit) - ValveのSteamネットワークと相互運用するための.NETライブラリ。
- [SteamAuth](https://github.com/geel9/SteamAuth) - Steam Mobile Authenticatorの主要機能を提供するC#ライブラリ。
- [SteamBot](https://github.com/Jessecar96/SteamBot) - Steam取引と連携する自動ボットソフトウェア。
- [SteamTradeOffersBot](https://github.com/waylaidwanderer/SteamTradeOffersBot) - 取引オファーに重点を置いたSteamBotのフォーク。
- [SteamStandardProject](https://github.com/ObsidianMinor/SteamStandardProject) - Steamの一つ以上の領域へ機能を提供する共通型を使った.NET Standardライブラリ群。

#### その他 <a id="misc-1"></a>

- [BackpackLogin](https://github.com/igeligel/BackpackLogin) - Steam認証情報を使ってbackpack.tfへログインする.NET Standardライブラリ。
- [TeamFortressOutpostApi](https://github.com/igeligel/TeamFortressOutpostApi) - TF2Outpostと連携できる.NET Standardクラスライブラリ。

### PHP

- [SteamCommunity](https://github.com/waylaidwanderer/PHP-SteamCommunity) - Steam Community Webサイトと連携するPHPライブラリ。
- [SteamAuthentication](https://github.com/SmItH197/SteamAuthentication) - PHPによるSteam OpenID認証。
- [SteamAuthOOP](https://github.com/BlackCetha/SteamAuthOOP) - SteamAuthenticationのオブジェクト指向版。
- [steam-api](https://github.com/DaMitchell/steam-api-php) - Steam APIのPHPラッパー。
- [steamid](https://github.com/DoctorMcKay/php-steamid) - PHP向けSteamIDクラス。
- [steam-totp](https://github.com/DoctorMcKay/php-steam-totp) - Steam独自のTOTPアルゴリズムを扱うPHPライブラリ。
- [steam-auth](https://github.com/vikas5914/steam-auth) - Composerに対応した別のSteam認証ライブラリ。

### Go

- [steam](https://github.com/0xAozora/steam) - Goで取引を行うためのシンプルなSteamライブラリ。
- [go-steam](https://github.com/Philipp15b/go-steam) - SteamプロトコルのGo実装。
- [steam-mobileauth](https://github.com/YellowOrWhite/go-steam-mobileauth) - SteamAuthのGo移植版。

### Python

#### 一般 <a id="general-2"></a>

- [steam](https://github.com/ValvePython/steam) - Steamとの各種連携を行うモジュール。
- [steamodd](https://github.com/Lagg/steamodd) - Steamツールライブラリ。
- [steampy](https://github.com/bukson/steampy) - SteamGuard対応の全自動Steam取引オファーライブラリ。
- [SteamAPI](https://github.com/smiley/steamapi) - Steam Web APIへアクセスするオブジェクト指向Python 2.7+ライブラリ。
- [Steam-Trade](https://github.com/Zwork101/steam-trade) - 非同期・イベントベースの取引ライブラリ。
- [aiosteampy](https://github.com/somespecialone/aiosteampy) - Steamマーケット、WebAPI、SteamGuardで取引・連携。

#### ゲーム連携 <a id="game-interaction-1"></a>

- [csgo](https://github.com/ValvePython/csgo) - CSGOのゲームコーディネーターと連携するPythonモジュール。
- [dota2](https://github.com/ValvePython/dota2) - Dota 2のゲームコーディネーターと連携するPythonモジュール。

#### その他 <a id="misc-2"></a>

- [vpk](https://github.com/ValvePython/vpk) - ValveのPack形式を扱うPythonモジュール。
- [vdf](https://github.com/ValvePython/vdf) - ValveのKeyValue形式を扱うPythonモジュール。

### C++

- [SteamPP](https://github.com/seishun/SteamPP) - Steamサーバーと相互運用するC++ライブラリ。

### Java

- [SteamKit-Java](https://github.com/Top-Cat/SteamKit-Java) - SteamKitのJava移植版。
- [JavaSteam](https://github.com/Longi94/JavaSteam) - ValveのSteamサーバーと直接連携するインターフェースを提供するJavaライブラリ。

### Objective-C

- [SteamAuth](https://github.com/michaelchum/SteamAuth) - SteamのOpenIDログインを扱うiOSラッパー。

### Ruby

- [steam-trade](https://github.com/OmG3r/steam-trade) - 取引オファーを送信するRuby gem。

### Rust

- [steamguard-cli](https://github.com/dyc3/steamguard-cli) - Steam 2FAコードの生成とSteam確認の管理を行うコマンドラインユーティリティ。

## リソース <a id="resources"></a>

### 一般 <a id="general-3"></a>

- [Steam WebAPI @ ValveSoftware](https://developer.valvesoftware.com/wiki/Steam_Web_API)
- [Steam WebAPI @ TF2 Wiki](https://wiki.teamfortress.com/wiki/WebAPI)
- [Steam WebAPI Documentation by xPaw](https://lab.xpaw.me/steam_api_documentation.html)
- [Steam Internal WebAPI Documentation by Revadike](https://github.com/Revadike/UnofficialSteamWebAPI)
- [Steam as OpenID Provider](http://steamcommunity.com/dev)
- [Steam API Key Registration](http://steamcommunity.com/dev/apikey)
- [Steam Error Codes](https://steamerrors.com/) - 考えられる説明を添えた`EResult`コード一覧。

### チュートリアル <a id="tutorials"></a>

- [Creating a Steam Trade Bot with Node.js](https://firepowered.org/developer/create-a-steam-trade-bot-with-nodejs-iojs-updated-for-node-steam-v1-0/)
- [Charred's node.js Guide to Steam Bots](https://github.com/charredgrass/nodejs-bot-guide)
- [In-depth Steam Bot Guide with Node.js](https://github.com/andrewda/node-steam-guide)
- [Retrieving 2FA Keys from iOS Device](http://forums.backpack.tf/index.php?/topic/45995-guide-how-to-get-your-shared-secret-from-ios-device-steam-mobile/)

### 投稿 <a id="posts"></a>

- [Item IDs Explained](https://dev.doctormckay.com/topic/332-identifying-steam-items/)
- [Everything Related to Escrow](https://www.reddit.com/r/SteamBot/comments/3udhkd/everything_related_to_escrow/)
- [Understanding Avatar Hash](https://www.reddit.com/r/SteamBot/comments/3cv6k7/problem_downloading_an_avatar_using/)

### スタンドアロンツール <a id="standalone-tools"></a>

- [NetHook2](https://github.com/SteamRE/SteamKit/tree/master/Resources/NetHook2) - Steamクライアントのネットワークメッセージを傍受。
- [NetHook2 Analyzer](https://github.com/SteamRE/SteamKit/tree/master/Resources/NetHookAnalyzer2) - NetHook2がダンプしたメッセージを調査。
- [steam-auth-web-util](http://scholtzm.github.io/steam-auth-web-util/) - Webブラウザー内で2FAコードを直接生成。
- [SteamDesktopAuthenticator](https://github.com/Jessecar96/SteamDesktopAuthenticator) - Steamモバイル認証アプリのデスクトップ実装。
- [protonenv](https://github.com/rizkiarm/protonenv) - シンプルなProtonバージョンおよびプレフィックス管理。
- [steam-desktop-authenticator-multiplatform](https://github.com/tre3p/steam-desktop-authenticator-multiplatform) - Steamデスクトップ認証ツール。

### ディスカッションボード <a id="discussion-boards"></a>

- [/r/SteamBot](https://www.reddit.com/r/SteamBot)
- [/r/SteamBot Discord](https://discord.gg/0i5X3oDHJbDUsiGC)
- [/r/nodesteam](https://www.reddit.com/r/nodesteam)
- [DoctorMcKay's Dev Forum](https://dev.doctormckay.com/)
- [node-steam-forum](https://github.com/steam-forward/node-steam-forum)

### サードパーティサービス <a id="third-party-services"></a>

以下のWebサイトは無料または有料のサービスを提供する場合があり、ドメイン名のアルファベット順に掲載しています。

- [backpack.tf](https://backpack.tf/developer) - TF2の価格と、Steamマーケット／インベントリ関連サービスを提供。
- [steamanalyst.com](https://steamanalyst.com/) - CS:GOの価格を提供。
- [hexa.one](https://hexa.one/) - 複数ゲームの価格と、Steamマーケット／インベントリ関連サービスを提供。
- [steamapis.com](https://steamapis.com/) - 複数ゲームの価格と、Steamマーケット／インベントリ関連サービスを提供。

## ライセンス <a id="license"></a>

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる限り、本テキストの著者とコントリビューターは、本作品に関するすべての著作権および関連する権利または隣接権を放棄しています。
