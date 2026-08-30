---
title: "frenck/awesome-home-assistant"
description: "Home Assistantの設定、統合、ダッシュボード、アプリ、DIY、情報源集"
licenseSource: "github-frenck-awesome-home-assistant-readme-md"
---

# Awesome Home Assistant [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)


<div align="center">
  <a href="https://awesome-ha.com">
    <img width="400" src="https://www.awesome-ha.com/images/awesome-home-assistant.svg" alt="Awesome Home Assistant">
  </a>
  <br>
  <a href="https://awesome-ha.com"><strong>https://awesome-ha.com</strong></a>
</div>

ホームエイシスタントは、ローカル制御とプライバシーを最優先にしたオープンソースのホームオートメーションです。既に数千のデバイスと連携しており、自宅のハードウェア上で動作し、設定にはコーディングが不要です。1つの部屋を自動化する場合も、全体の家を自動化する場合も、すべてがローカルかつプライベートに留まります。

どう見えるか気になる？
[Home Assistant online demo](https://demo.home-assistant.io)を試してみてください。

素晴らしいホームエイシスタントは、最も優れた
[Home Assistant](https://www.home-assistant.io)リソースを厳選した一覧です：カスタム統合、ダッシュボードカード、テーマ、アプリ、チュートリアル、その他多くのコンテンツを含みます。

以下の項目の多くは、ホームエイシスタント自体をインストールした後、
[HACS](https://hacs.xyz)、つまりホームエイシスタントコミュニティストアを通じてワンクリックでインストール可能です。ホームエイシスタントは
[Open Home Foundation](https://www.openhomefoundation.org)によって所有されており、ESPHome、Music Assistant、Z-Wave JS、およびリスト中に見られるオープンボイスツールを統括しています。スマートホームデバイスを購入する場合、
[Works with Home Assistant](https://works-with.home-assistant.io)プログラムはプライバシー、ローカル制御、長期サポートについてテストを行います。

リストはカテゴリに分けられています。そのカテゴリ内のリンクは、事前に定められた順序を持っていません。順序は貢献に向けたものです。貢献したい場合は、お読みください [guide](https://github.com/frenck/awesome-home-assistant/blob/main/.github/CONTRIBUTING.md)
または、追加、更新、削除を提案するための [issue](https://github.com/frenck/awesome-home-assistant/issues/new/choose)
を提出してください。

## 目次 {#contents}

- [How to use](#how-to-use)
- [Installing](#installing)
- [In case you need help](#in-case-you-need-help)
  - [🤝 Official Communities](#-official-communities)
  - [🌍 In your language](#-in-your-language)
  - [🧩 Around community projects](#-around-community-projects)
  - [💬 Other community spaces](#-other-community-spaces)
- [Public Configurations](#public-configurations)
- [Custom Integrations](#custom-integrations)
  - [🤖 AI & LLMs](#-ai--llms)
  - [💡 Lighting](#-lighting)
  - [🌡️ Climate](#-climate)
  - [⚡ Energy & solar](#-energy--solar)
  - [📹 Cameras & video](#-cameras--video)
  - [🚨 Security & alarm](#-security--alarm)
  - [🔊 Voice & media playback](#-voice--media-playback)
  - [🚗 Cars & EV charging](#-cars--ev-charging)
  - [📍 Presence & location](#-presence--location)
  - [🧹 Vacuums](#-vacuums)
  - [🔵 Bluetooth & BLE](#-bluetooth--ble)
  - [🔋 Battery monitoring](#-battery-monitoring)
  - [🏷️ Vendor & brand](#-vendor--brand)
  - [🛠️ Automation tooling](#-automation-tooling)
  - [🏘️ Civic & household](#-civic--household)
  - [🔐 Network & authentication](#-network--authentication)
  - [🔗 Federation & multi-instance](#-federation--multi-instance)
  - [📊 Logging & analytics](#-logging--analytics)
- [Dashboard Cards](#dashboard-cards)
  - [🧱 Dashboard frameworks](#-dashboard-frameworks)
  - [📐 Layout helpers](#-layout-helpers)
  - [📈 Charts & graphs](#-charts--graphs)
  - [📋 Status & info rows](#-status--info-rows)
  - [☀️ Weather cards](#-weather-cards)
  - [🎵 Media cards](#-media-cards)
  - [🌡️ Climate cards](#-climate-cards)
  - [⚡ Energy cards](#-energy-cards)
  - [💡 Lighting cards](#-lighting-cards)
  - [🗺️ Maps & location](#-maps--location)
  - [📸 Camera cards](#-camera-cards)
  - [🧹 Vacuum cards](#-vacuum-cards)
  - [📅 Calendar & feed](#-calendar--feed)
  - [📡 Remote control](#-remote-control)
  - [🍃 Air quality](#-air-quality)
  - [🖥️ Kiosk & wallpanel](#-kiosk--wallpanel)
- [Dashboards](#dashboards)
- [Themes](#themes)
- [Icon packs](#icon-packs)
- [Apps](#apps)
  - [🛡️ Official Apps](#-official-apps)
  - [📦 Third Party Apps](#-third-party-apps)
- [DIY](#diy)
  - [🧩 Standalone projects](#-standalone-projects)
  - [🌉 DIY Gateways](#-diy-gateways)
  - [🔨 DIY Projects](#-diy-projects)
- [Tools & Utilities](#tools--utilities)
- [Online Resources](#online-resources)
  - [✍️ Blogs](#-blogs)
  - [📺 YouTube Channels](#-youtube-channels)
  - [🎙️ Podcasts](#-podcasts)
  - [📱 Social](#-social)
- [Alternative Home Automation Software](#alternative-home-automation-software)
- [Other Awesome Lists](#other-awesome-lists)
- [Trademark Legal Notice](#trademark-legal-notice)

## 使い方 {#how-to-use}

Awesome Home Assistant は、Home Assistant に最適なリソースを厳選したリストです。アプリ、カスタムカード、統合、チュートリアルなど、コミュニティがおすすめするものを探すために活用してください。初心者の方や、次のプロジェクトを探している方にとっても便利です。

リストをナビゲートするには、以下の方法があります。

- Simply press <kbd>command/ctrl</kbd> + <kbd>F</kbd> to search for a keyword
- Go through our [_Contents list_](#contents)
- Alternatively, use the search on our website: <https://www.awesome-ha.com>

## インストール {#installing}

Home Assistant に初めて触れて、どこから始めればいいのか分からない場合は、最も簡単な方法は、 [Home Assistant Green](https://www.home-assistant.io/green/) を取得し、接続することです。もしそれよりも、既存のハードウェア（ラズベリーパイ、ミニPC、古くなったノートPC）を使用したい場合は、下記の公式ガイドがすべての選択肢をカバーしています。どちらを選んでも、最終的に実行するのは同じ Home Assistant です。そのセットアップが完了したら、 [HACS](https://hacs.xyz) をインストールし、このリストのほとんどすべての項目がワンクリックで利用可能になります。

- [Home Assistant Installation](https://www.home-assistant.io/installation/) - 公式インストールガイド
- [Compare Installation Methods](https://www.home-assistant.io/installation/#compare-installation-methods) - 利用可能なインストール方法の比較

## 困ったときは {#in-case-you-need-help}

設定に詰まっている状態で、デバイスがペアリングされない理由を調べている、あるいは他の人々がどのようなものを構築しているかを知りたいと思っている？ Home Assistant はインターネット上で最も活発なホームオートメーションコミュニティの一つであり、ほとんどが無料で参加できます。公式のチャネルは下記にあります；さらに下に、あなたの言語や、より広いエコシステムの特定のプロジェクトに関連するコミュニティが並んでいます。

### 🤝 公式コミュニティ {#-official-communities}

- [Home Assistant Discord](https://discord.com/invite/c5DvZ4e) - メインチャット、ほとんどがそこにいます
- [Home Assistant Community](https://community.home-assistant.io/?u=frenck) - ディスカッションフォーラム
- [Home Assistant Subreddit](https://www.reddit.com/r/homeassistant/) - 公式のsubreddit
- [Home Assistant Facebook Group](https://www.facebook.com/groups/HomeAssistant/) - エンターテインメント向けのFacebookグループ

### 🌍 各言語のコミュニティ {#-in-your-language}

英語以外の言語でのコミュニティ。複数のグループが言語ごとに存在する可能性があります；あなたのグループをプルリクエストで追加してください。言語でアルファベット順に並べています。

- 🇧🇷 [Home Assistant Brasil](https://t.me/homeassistant_brasil) - ブラジル語のTelegramグループ（スキルレベルにかかわらず）
- 🇨🇳 [Hassbian Forum](https://bbs.hassbian.com/forum.php) - 中国語のスマートホーム愛好家向けフォーラム
- 🇨🇿 [Home Assistant CZ](https://www.homeassistant-cz.cz/) - チェコ語の活発なユーザーベースを持つフォーラム
- 🇩🇰 [Dansk Home Assistant gruppe](https://www.facebook.com/groups/209025039666209/) - デンマーク語のFacebookグループ
- 🇳🇱 [Dutch Domotics Discord](https://discord.gg/Ee5X7T7) - オランダ語のホームオートメーションDiscord
- 🇳🇱 [Home Assistant NL](https://t.me/home_assistant_nl) - オランダ語のTelegramグループ
- 🇫🇮 [Home Assistant Suomi](https://www.facebook.com/groups/hasuomi/) - フィンランド語のFacebookグループ
- 🇫🇷 [HACF Forum](https://forum.hacf.fr) - フランス語話者向けのHACF（Home Assistant Communauté Française）協会のディスカッションフォーラム
- 🇫🇷 [HACF Discord](https://discord.com/invite/PaZFEjX) - フランス語のDiscord（HACFコミュニティが運営）
- 🇩🇪 [Home Assistant DE](https://t.me/home_assistant_de) - ドイツ語のディスカッション、ヒント、サポート用Telegramグループ
- 🇩🇪 [simon42 Community Forum](https://community.simon42.com/) - ドイツ語のスマートホームテーマ向けフォーラン
- 🇬🇷 [Home Assistant GR](https://www.facebook.com/groups/472308593754940/) - ギリシャ語のFacebookグループ
- 🇮🇱 [Home-Assistant.io Israel](https://www.facebook.com/groups/303751386650107/) - ヘブライ語のFacebookグループ
- 🇭🇺 [Home Assistant Hungary](https://www.facebook.com/groups/HomeAssistantHU/) - ハンガリー語のFacebookグループ
- 🇮🇹 [Home Assistant Italia](https://t.me/HomeAssistantItalia) - イタリア語のテレグラムグループ（アイデアやプロジェクトの共有用）
- 🇮🇹 [HassioHelp](https://t.me/HassioHelp) - イタリア語のテレグラのトラブルシューティングおよびサポートグループ
- 🇯🇵 [Home Assistant Japan](https://www.facebook.com/groups/homeassistantjapan/) - 日本語のフェイスブックグループ
- 🇰🇷 [HomeAssistant Cafe](https://cafe.naver.com/koreassistant) - ナバーグループにおける韓国語コミュニティ
- 🇳🇴 [Home Assistant Norge](https://www.facebook.com/groups/680252689011262/) - ノルウェイ語のフェイスブックグループ
- 🇵🇱 [Home Assistant Polska](https://www.facebook.com/groups/homeassistantpolska/) - ポーランド語のフェイスブックグループ
- 🇵🇹 [CPHA Forum](https://forum.cpha.pt/) - コムニデーディア・ポルトガルスによるポルトガル語のホームエイシスタントフォーラム
- 🇷🇴 [Home Assistant Romania](https://www.facebook.com/groups/HomeAssistantRomania/) - ルーマニア語のフェイスブックグループ
- 🇷🇺 [Home Assistant RU Telegram](https://t.me/HomeAssistantRU) - ロシア語のテレグラムグループ
- 🇪🇸 [Domotica en casa](https://foro.domoticaencasa.es/) - スペイン語のホームオートメーション愛好家向けフォーラム
- 🇸🇪 [Svenska Home Assistant-gruppen](https://www.facebook.com/groups/737654973088984/) - スウェーデン語のフェイスブックグループ
- 🇹🇼 [Taiwan Home Assistant](https://www.facebook.com/groups/151166072456061/) - 伝統的中文のフェイスブックグループ
- 🇹🇭 [Home Assistant Thailand](https://www.facebook.com/groups/769724336851998/) - タイ語のフェイスブックグループ

### 🧩 コミュニティプロジェクト周辺 {#-around-community-projects}

このリストに並んでいる他の場所で見られるコミュニティプロジェクトが運営するディスコード、フォーラム、チャット。プロジェクト名でアルファベット順に並べています。

- [AppDaemon Discord](https://discord.gg/sgSr79jW5x) - コアと並行して動作するPython自動化フレームワークに関するサポート
- [ESPHome Discord](https://discord.gg/KhAMKrd) - ESPベースのDIYデバイスおよびそれらのYAMLファイアウォールに関するサポート
- [Frigate Discussions](https://github.com/blakeblackshear/frigate/discussions) - ローカル-NVR／オブジェクト検出プロジェクトのGitHubディスカッション
- [HACS Discord](https://discord.gg/apgchf8) - ホームエイシスタントコミュニティストアに関するサポート
- [Music Assistant Discord](https://discord.gg/kaVm8hGpne) - マルチルーム音楽サーバーのチャット
- [NetDaemon Discord](https://discord.gg/K3xwfcX) - C#／.NETで自動化を書くことに関するサポート
- [Tasmota Discord](https://discord.gg/Ks2Kzd4) - 多くのソンオフおよびeWeLinkデバイスを駆動するESPファイアウォールのチャット
- [Z-Wave JS Discord](https://discord.gg/HFqcyFNfWd) - Z-Wave JSスタックに利用されているZ-Wave統合用のチャット
- [Zigbee2MQTT Discussions](https://github.com/Koenkk/zigbee2mqtt/discussions) - 人気のZigbeeブリッジ用のGitHubディスカッション

### 💬 その他のコミュニティスペース {#-other-community-spaces}

特定の言語やプロジェクトに結びついていない独立したグループ。

- [Home Assistant International Telegram](https://t.me/home_assistant_international) - 英語話者向けのTelegramグループ（広い国際コミュニティ向け）
- [r/homeautomation](https://www.reddit.com/r/homeautomation/) - プラットフォームに依存しない最大のホームオートメーションSubreddit、すべてのハブ、プロトコル、プロジェクトアイデアをカバー
- [r/smarthome](https://www.reddit.com/r/smarthome/) - 購入アドバイス、レビュー、セットアップに関する質問を扱う、製品中心のスマートホームSubreddit
- [r/selfhosted](https://www.reddit.com/r/selfhosted/) - セルフホストソフトウェア向けのSubredditで、ホームオートメーションやローカルコントロールに大きなクロスオーバー
- [Home Assistant on Lemmy](https://lemmy.world/c/homeassistant) - プライバシー志向ユーザー向けのSubredditのフェデラティブ代替
- [Home Automation on Lemmy](https://lemmy.world/c/homeautomation) - フェデラティブ上の一般ホームオートメーションコミュニティ
- [Everything Smart Home Discord](https://discord.com/invite/everythingsmarthome) - リュイス・バーライの運営する一般スマートホームディスカッションサーバー
- [Home Operations Discord](https://discord.com/invite/home-operations) - GitOpsとKubernetesでスマートホームインフラを管理している人々向け
- [#Home-Assistant on Matrix](https://matrix.to/#/#Home-Assistant:matrix.org) - オープンでフェデレートされたプロトコル上のリアルタイムチャット用のMatrixルーム
- [CocoonTech](https://cocoontech.com/) - ウェブ上での最も古いホームオートメーションフォーラムの一つ、20年以上にわたりすべてのプラットフォームをカバー

## 公開設定例 {#public-configurations}

経験が豊富なユーザーが、温度調節のスケジュール、存在検出、自動化をどのように設定しているのか、気になるですか？これらはGitHubに公開された、完全なHome Assistantの設定です。レシピ本のように読み、役に立つ部分をコピーし、残りはスキップしてください。

- [Carlo Costanzo](https://github.com/CCOSTAN/Home-AssistantConfig#logo) - おそらく最もドキュメント化された設定（5,208★）
- [DubhAd](https://github.com/DubhAd/Home-AssistantConfig) - 別名Tinkerer、設定ファイルを共有（688★）
- [geekofweek](https://github.com/geekofweek/homeassistant) - 300以上のオートメーションを持つ（1,477★）
- [Alok Saboo](https://github.com/arsaboo/homeassistant-config) - 別名arsaboo。定期的に更新（1,953★）
- [Franck Nijhof](https://github.com/frenck/home-assistant-config) - Home Assistant OSベース、他のものと比べて非常に異なる構造（2,009★）
- [Klaas Schoute](https://github.com/klaasnicolaas/Student-homeassistant-config) - Home Assistant OSベース、Intel NUC、Ubuntu Server、Dockerで定期的に更新（223★）
- [Ryan Warner](https://github.com/rwarner/Home-Assistant-Config) - Ubuntu HA Config上のDocker、早期のHome Assistantから維持されており、非常にドキュメント化されており定期的に更新（5★）

## カスタム統合 {#custom-integrations}

Home Assistantに標準で含まれない統合機能は、コミュニティが作成したもので、HACSを通じて数クリックでインストールできます。

### 🤖 AI・LLM {#-ai--llms}

大きな言語モデルにHome Assistantを接続し、そのモデルがデバイスを読み取り、ダッシュボードを作成、自動化を書く、またはカメラが捉えている内容を説明できるようにします。

- [LLM Vision](https://github.com/valentinfrlch/ha-llmvision) - 自動化に視覚認識を追加：カメラスナップショットにキャプションを付ける、何が起きているかを要約、特定イベントに反応（1,373★）
- [AI Automation Suggester](https://github.com/ITSpecialist111/ai_automation_suggester) - エンティティをスキャンし、AIプロバイダー（OpenAI、Anthropic、Google、Groq、Ollama）にターゲット別自動化提案を問い合わせ、通知として表示（749★）

### 💡 照明 {#-lighting}

あなたの照明に重ねられるエフェクト、スケジュール、行動のレイヤー。

- [Circadian Lighting](https://github.com/claytonjn/hass-circadian_lighting) - 天候に合わせて、日中の空の色温度に合わせて、あなたの色変化型照明を徐々に同期（886★）
- [Adaptive Lighting](https://github.com/basnijholt/adaptive-lighting) - 太陽の位置に応じて、照明の明るさと色温度を徐々に調整（3,324★）
- [Govee](https://github.com/LaggAt/hacs-govee) - Govee Wi-Fi照明およびランプのローカル制御、効果および色モードを含む（352★）

### 🌡️ 空調 {#️-climate}

スマートな温度制御装置、快適性センサー、およびHVACの統合。搭載されている機能を越えるもの。

- [Better Thermostat](https://github.com/KartoffelToby/better_thermostat) - 窓検知、加熱曲線、各部屋の快適性プロファイルを備えたスマートなサーモスタット（1,443★）
- [Versatile Thermostat](https://github.com/jmcollin78/versatile_thermostat) - プリセット、窓検知、動きによる快適性、存在検知を備えたフル機能サーモスタット（1,075★）
- [Midea Air Appliances LAN](https://github.com/nbogojevic/homeassistant-midea-air-appliances-lan) - LAN経由でMideaの空調機、除湿機およびその他の家電のローカル制御（460★）
- [Smart Autotune Thermostat (SAT)](https://github.com/Alexwijn/SAT) - OpenTherm、ESPHome、またはMQTTゲートウェイと連携し、時間とともに自ら調整するサーモスタット（246★）
- [Dual Smart Thermostat](https://github.com/swingerman/ha-dual-smart-thermostat) - 組み込みの汎用サーモスタットの強化版、加熱と冷却を別にし、床温度制限および湿度制御を備える（225★）

### ⚡ エネルギー・太陽光 {#-energy--solar}

太陽光発電インバーター、スマートメーター、家庭用バッテリー、または電力会社の電力料金プランをHome Assistantに取り込み、エネルギーダッシュボードに表示する。

- [Powercalc](https://github.com/bramstroker/homeassistant-powercalc) - 照明やその他のデバイスの消費電力の推定値を計算、それらが自ら電力消費を報告していないものも含む（1,503★）
- [Anker Solix](https://github.com/thomluther/ha-anker-solix) - Anker Solixのバルコニー太陽光システム、バッテリー、および電源スタンドをエネルギーダッシュボードに取り込み、リアルタイム状態、履歴、充電制御を含む（1,005★）
- [Octopus Energy](https://github.com/BottlecapDave/HomeAssistant-OctopusEnergy) - Octopus Energyの電力料金、スマートメーター読み取り、知能付きスケジュール、節電セッションをダッシュボードに取り込む（940★）
- [Huawei Solar](https://github.com/wlcrs/huawei_solar) - Modbus経由でHuaweiの太陽光インバーターおよび家庭用バッテリーを読み取り、電力網充電時間帯を含む（899★）
- [SolaX Modbus](https://github.com/wills106/homeassistant-solax-modbus) - Modbus経由でSolaX、Solinteg、Sofar、Growattなど他のインバーターと連携し、読み取り専用およびインバーター制御モードを含む（490★）
- [Solarman](https://github.com/davidrapan/ha-solarman) - Deye、Sofarおよびその他のSolarmanブランドのインバーターをSolarman スティックロガーで読み取り（483★）
- [OCPP](https://github.com/lbbrhzn/ocpp) - OCPPをサポートする電動車両充電器をエネルギーダッシュボードに取り込み、開始、停止、セッションごとのメーター読みを含む（372★）
- [Solcast PV Forecast](https://github.com/BJReplay/ha-solcast-solar) - Solcastの太陽光発電予測を取得し、1日分の発電量を確認できるようにし、1時間ごとの信頼性帯を表示（420★）
- [EPEX Spot](https://github.com/mampfes/ha_epex_spot) - 1時間ごとのEPEXスポット電力価格をダッシュボードに取り込み、負荷を最も安い時間帯にシフトできるようにする（310★）
- [ENTSO-e Day-Ahead Prices](https://github.com/JaccoR/hass-entso-e) - ENTSO-e透明性プラットフォームから、ヨーロッパのほとんどの国で日先の電力価格を取得（265★）
- [SolarEdge Modbus Multi](https://github.com/WillCodeForCats/solaredge-modbus-multi) - Modbus/TCP経由でローカルにSolarEdgeのインバーター、メーター、バッテリーを読み取り、複数インバーターおよび3相サポートを備える（303★）
- [FoxESS Modbus](https://github.com/nathanmarlor/foxess_modbus) - FoxESS太陽電池発電インバーターにModbusで直接接続し、クラウド経由のリターンなしでリアルタイムステータスと制御（308★）
- [Victron GX](https://github.com/sfstar/hass-victron) - Victron GXデバイスからModbus/TCPでデータを読み込み、インバーター、バッテリー、太陽光充電器、AC入力などを公開（317★）
- [Solis Sensor](https://github.com/hultenvp/solis-sensor) - SolisCloud太陽電力モニタリングポータルと連携し、Solisインバーターの発電、バッテリー、グリッドデータをエネルギーダッシュボードに取り込む（320★）
- [GoodWe Inverter](https://github.com/mletenay/home-assistant-goodwe-inverter) - GoodWe太陽電池インバーターからローカルネットワーク経由でリアルデータを取得し、エネルギーダッシュボードに使用（213★）
- [Solar Optimizer](https://github.com/jmcollin78/solar_optimizer) - 太陽光過剰発電に基づき、家電の起動・停止を制御して、自消費を実現（228★）
- [Dynamic Energy Cost](https://github.com/martinarva/dynamic_energy_cost) - リアルタイムおよび累積エネルギーコストを、Nord PoolやEPEXなどの動的価格フィードと比較（189★）
- [Energi Data Service](https://github.com/MTrab/energidataservice) - デンマークの電力スポット価格をEnergi Data Service APIから取得し、価格認識型自動化に使用（275★）

### 📹 カメラ・映像 {#-cameras--video}

Home Assistantがデフォルトでサポートしていない特定のカメラブランドや動画ソースをペアリングする。

- [HASS Aarlo](https://github.com/twrecked/hass-aarlo) - 非同期Arlo連携。Arloウェブサイトに似た機能で、すべてのベースステーション、カメラ、ドアベルのイベントと状態をモニタリング（470★）
- [WebRTC Camera](https://github.com/AlexxIT/WebRTC) - IPカメラからのRTSPストリームをWebRTCまたはMSEでリアルタイムに視聴可能で、パン・ズーム制御をサポート（2,134★）
- [Frigate](https://github.com/blakeblackshear/frigate-hass-integration) - Frigate NVRのローカルオブジェクト検出をダッシュボード、アラート、スナップショットに統合（1,181★）
- [Eufy Security](https://github.com/fuatakgun/eufy_security) - Eufy Securityカメラ、ドアベル、ベースステーションの管理を、リアルタイムストリームとイベント通知で行う（1,338★）
- [Tapo Control](https://github.com/JurajNyiri/HomeAssistant-Tapo-Control) - TP-Link TapoカメラのPTZ、動きイベント、リアルRTSPストリームを制御（1,912★）
- [Dahua](https://github.com/rroller/dahua) - Dahuaカメラとドアベルを動きイベント、スナップショット、アラーム、PTZ制御でペアリング（541★）

### 🚨 セキュリティ・警報 {#-security--alarm}

ユーザーコード、ゾーン、緊急時など、アラームシステムの機能を備えた完全なアラームシステムにHome Assistantを変換する。

- [Alarmo](https://github.com/nielsfaber/alarmo) - 使いやすいアラームシステムで、アーム／ディスアームフロー、ユーザーコード、ゾーン、パニックモードをサポート（2,148★）
- [Keymaster](https://github.com/FutureTense/keymaster) - Z-Waveスマートロックのユーザーコードを管理し、ユーザーごとのスケジュール、一時コード、通知をサポート（334★）

### 🔊 音声・メディア再生 {#-voice--media-playback}

voice speakerやメディアプレイヤーにコマンドを送信するか、それらが聞き取った内容をホームアシスタントに中継・再生する。

- [Spotcast](https://github.com/fondberg/spotcast) - 空いているChromecastデバイスでSpotify再生を開始し、Spotify Connectデバイスの制御も可能（80及★）
- [Alexa Media Player](https://github.com/alandtse/alexa_media_player) - Amazon Alexaデバイスの制御：発話、メディア再生、デバイス状態を自動化に取り込む（1,948★）
- [YandexStation](https://github.com/AlexxIT/YandexStation) - Yandex Stationスピーカーおよびその他のスマートホームデバイスをAliceで制御（1,868★）
- [Yandex Smart Home](https://github.com/dext0r/yandex_smart_home) - 自社デバイスをYandex AliceおよびYandexスマートホームアプリに公開（1,066★）
- [View Assist Companion](https://github.com/msp1974/ViewAssist_Companion_App) - Androidアプリと連携し、タブレットを手の届かない音声およびダッシュボードのサテライトに変換（374★）

### 🚗 自動車・EV充電 {#-cars--ev-charging}

車のバッテリー状態、位置、充電状態を追跡するか、充電する場所や時間を制御する。

- [Kia Uvo & Hyundai Bluelink](https://github.com/Hyundai-Kia-Connect/kia_uvo) - EU、カナダ、アメリカのキア・コンネクト（Uvo）およびハイュンダイ・ブルーリンク車のトラッキングと制御（充電、気温、ロック状態を含む）（870★）
- [Tesla](https://github.com/alandtse/tesla) - テスラ車およびパワーウォールの充電状態、気温、位置、セキュリティ状態を、第三者ログインアプリから取得したリフレッシュトークンを使用してトラッキング（740★）
- [Volkswagen Carnet](https://github.com/robinostlund/homeassistant-volkswagencarnet) - カーネットプラットフォームで、フォルクスワーグの充電状態、気温事前準備、リモートロックおよび鳴らしをトラッキング（643★）
- [Audi Connect](https://github.com/audiconnect/audi_connect_ha) - オーディー車のトラッキング（オーディー・コンネクトAPIを介して）：充電状態、走行距離、ロック、気温事前準備を含む（338★）
- [Polestar](https://github.com/pypolestar/polestar_api) - ポールスターEVをポールスターアプリAPI経由で読み取り、走行距離、充電、位置データを含む（249★）
- [Stellantis Vehicles](https://github.com/andreadegiovine/homeassistant-stellantis-vehicles) - ページュ、シトロエン、フィアット、オペル、ヴァックスホール、DSなどのステラントス車をメーカーAPIで追加（走行距離、ロック、気温を含む）（231★）
- [evcc](https://github.com/marq24/ha-evcc) - evccインスタンスに接続し、充電セッション、太陽光マッチング、各ロードポイントの状態を表示（410★）
- [Easee EV Charger](https://github.com/nordicopen/easee_hass) - Easee EV充電器を追加し、リアルタイム充電状態、動的負荷バランス、セッションごとのメーター読み取りを実現（272★）
- [EV Smart Charging](https://github.com/jonasbkarlsson/ev_smart_charging) - 動的ターミナルの最も安い時間帯を活用した電動車の充電スケジュールを計画し、多数の充電器と価格センサーと連携（297★）

### 📍 在宅検知・位置情報 {#-presence--location}

誰が家にいて、どこにいるかを把握し、組み込みのデバイストレーカーより正確に判断できる。

- [iCloud3](https://github.com/gcobb321/icloud3) - iCloudデバイストラッカーコンポーネントの強化版で、多くの機能を備える（855★）
- [iPhone Detect](https://github.com/mudape/iphonedetect) - アプリなしで、ローカルWi-Fi上でiPhone（およびその他のスマートフォン）を検知するため、UDPプローブを送信し、応答を監視（625★）
- [Flightradar24](https://github.com/AlexandrErohin/home-assistant-flightradar24) - Flightradar24を使用して、自宅の周囲に設定可能な境界ボックス内を飛行している航空機をトラッキング（468★）
- [Places](https://github.com/custom-components/places) - OpenStreetMapを介してデバイストラッカーの位置を逆地理コーディングし、自動化が「スーパーマーケットに到着」という表現に反応できるようにする（191★）

### 🧹 掃除機 {#-vacuums}

特定のロボット式の掃除機を制御し、マップデータを表面化する。

- [Xiaomi Cloud Map Extractor](https://github.com/PiotrMachowski/Home-Assistant-custom-components-Xiaomi-Cloud-Map-Extractor) - Xiaomi（Roborock/Viomi/Roidmi/Dreame）の掃除機を、ルートを必要としないでリアルタイムビューを表示（1,405★）
- [Dreame Vacuum](https://github.com/Tasshack/dreame-vacuum) - Dreameロボット掃除機のフルマップサポートを実現、無視ゾーンおよび選別部屋清掃を含む（1,999★）

### 🔵 Bluetooth・BLE {#-bluetooth--ble}

Bluetoothで送信されているセンサーからデータを取得する、またはBluetooth自体を部屋レベルの存在検出に使う。

- [BLE Monitor](https://github.com/custom-components/ble_monitor) - Xiaomi MiBeacon、Govee、ATC、Inkbird、Qingping、その他多数のBLEセンサーからセンサーデータを非積極的に読み取る（2,214★）
- [Bermuda](https://github.com/agittins/bermuda) - 複数のESPHome受信機を介してBLE信号を三角測量し、部屋レベルでの存在検知を行う（1,798★）
- [BLE Battery Management Systems](https://github.com/patman15/BMS_BLE-HA) - 多数のベンダーからBluetooth Low Energyのバッテリー管理システム（BMS）を読み取り、各セル電圧、バランス、SOCを公開（328★）
- [EcoFlow BLE](https://github.com/rabits/ha-ef-ble) - Bluetooth Low EnergyでEcoFlowの電源スタンドとアクセサリーを取得し、クラウドアカウントは不要（304★）

### 🔋 バッテリー監視 {#-battery-monitoring}

すべてのデバイスのバッテリーの状態を確認し、完全に枯渇する前に警告を受ける。

- [Battery Notes](https://github.com/andrew-codechimp/HA-Battery-Notes) - すべてのデバイスにバッテリーの種類と数を付加し、交換履歴、低バッテリー警告、履歴を追跡（1,105★）

### 🏷️ ベンダー・ブランド {#️-vendor--brand}

特定のメーカーのデバイスをHome Assistantに取り込む。組み込み機能よりも多くの機能や、より良いローカル制御が可能になる。

- [SmartIR](https://github.com/smartHomeHub/SmartIR) - ブロードリンクIRデバイスを統合（2,733★）
- [Sonoff LAN](https://github.com/AlexxIT/SonoffLAN) - eWeLink（オリジナル）ファームウェアでLANおよび/またはクラウド経由でソノフデバイスを制御（3,257★）
- [Xiaomi MIoT](https://github.com/al-one/hass-xiaomi-miot) - MIoT規格プロトコルを用いてWi-Fi、BLE、Zigbeeで自動的に小米スマートホームデバイスを統合（5,911★）
- [Xiaomi Gateway 3](https://github.com/AlexxIT/XiaomiGateway3) - LAN経由で小島マルチモードゲートウェイおよびAqara Hub E1をローカル制御（2,757★）
- [Midea AC LAN](https://github.com/wuwentao/midea_ac_lan) - ミエア空調、熱ポンプおよびその他のM-SMARTデバイスのローカル制御（1,684★）
- [SmartThinQ Sensors](https://github.com/ollo69/ha-smartthinq-sensors) - LG家電（洗濯機、乾燥機、AC、冷蔵庫）をSmartThinQで接続し、詳細な状態とリモートスタートを実現（1,310★）
- [Home Connect Alt](https://github.com/ekutner/home-connect-hass) - ボッシュ、シエムス、NEFF、ガーゲンナウのオーブン、洗浄機、洗濯機への代替Home Connect統合（970★）
- [Tapo Devices](https://github.com/petretiandrea/home-assistant-tapo-p100) - TP-Link Tapoプラグ、スイッチ、ランプ、エネルギー監視（P100、P105、P及P110、L510、L530、L900）をLAN経由で制御（954★）
- [Meross](https://github.com/albertogeniola/meross-homeassistant) - Merossプラグ、スイッチ、ランプ、ガレージドア開閉器、湿度調整器をMeross IoTクラウド経由で制御（848★）
- [HomeMatic IP Local](https://github.com/SukramJ/homematicip_local) - OpenCCUまたはRaspberryMaticを介してHomeMaticおよびHomeMatic IPデバイスをローカル制御し、クラウド経由のリターンなし（572★）
- [Nest Protect](https://github.com/iMicknl/ha-nest-protect) - Nest Protectの煙およびCO警報器のバッテリー状態、最近のイベント、各部屋の安全状態を追跡（468★）
- [Meross LAN](https://github.com/krahabb/meross_lan) - Merossプラグ、スイッチ、ランプ、ガレージドア開閉器をローカル制御し、必要に応じてクラウドに回帰（718★）
- [LocalTuya](https://github.com/rospogrigio/localtuya) - LAN経由でTuyaデバイスをローカル制御し、クラウド経由のリターンなし（3,857★）
- [SamsungTV Smart](https://github.com/ollo69/ha-samsungtv-smart) - SmartThings対応により、Samsungテレビの統合を改善し、ソース切り替え、アプリ起動、アプリアイコンをサポート（652★）
- [Dyson](https://github.com/libdyson-wg/ha-dyson) - Wi-Fi接続のDysonファン、フィルター、湿度調整器をローカルネットワークで完全なモード制御（418★）
- [PetKit](https://github.com/RobertD502/home-assistant-petkit) - メーカークラウド経由でペットキットのフード、水槽、リットボックスを追加し、完全な状態と給餌制御を実現（340★）
- [Miele](https://github.com/astrandb/miele) - ミエの洗濯機、乾燥機、洗浄機、オーブン、コーヒーマシンをペアし、詳細なプログラム状態を提供（267★）
- [Home Connect Local](https://github.com/chris-mc1/homeconnect_local_hass) - ボッシュ、シエムス、NEFF、ガーゲンナウの家電をローカルネットワークで直接制御し、クラウド経由の迂回なし（390★）
- [hOn](https://github.com/gvigroux/hon) - ハイエ、キャンディ、ホーバー家電を公式hOnクラウドから取得し、アプリで表示されるすべての状態とパラメータを公開（253★）
- [PETLIBRO](https://github.com/jjjonesjr33/petlibro) - PETLIBROスマートペットフード、水槽、リットボックスを追加し、給餌スケジュール、給餌イベント、バッテリー状態をサポート（319★）

### 🛠️ 自動化ツール {#️-automation-tooling}

自動化を書く、デバッグする、維持する際に役立つヘルパー。

- [The Watchman](https://github.com/dummylabs/thewatchman) - 設定ファイルに存在しないエンティティやサービスを追跡（655★）
- [Browser Mod](https://github.com/thomasloven/hass-browser_mod) - 各ブラウザを制御可能なエンティティに変換：ポップアップカードを表示、ビューをナビゲート、音を再生、または誰がダッシュボードを確認しているかを検出（1,748★）
- [Pyscript](https://github.com/custom-components/pyscript) - YAMLではなくPythonで自動化やテンプレートを書く（1,159★）
- [Spook](https://github.com/frenck/spook) - UIが通常隠している項目を表面化するための、便利なセンサー、サービス、テンプレートのツールボックス（1,138★）
- [Scheduler Component](https://github.com/nielsfaber/scheduler-component) - エンティティに対して週間スケジュールを作成できるカード駆動UI（YAML不要）（883★）
- [Node-RED Companion](https://github.com/zachowj/hass-node-red) - node-red-contrib-home-assistant-websocketプロジェクト用の補助コンポーネントで、サービス、センサー、バイナリセンサーをダッシュボードに再表示（573★）
- [Magic Areas](https://github.com/jseidl/magic-areas) - 各部屋ごとの存在状態、気温、メディアエリアエンティティを自動生成し、動き検知によるシーンと明暗検知をサポート（493★）
- [Auto Backup](https://github.com/jcwillox/hass-auto-backup) - カスタムスケジュール、保存ルール、暗号化、遠隔ストレージへのアップロードをサポートした自動バックアップ（462★）
- [Multiscrape](https://github.com/danieldotnl/ha-multiscrape) - 1つのリクエストでページから複数の値（HTML、XML、またはJSON）をスクレイピングし、センサーに変換（437★）
- [Retry Service](https://github.com/amitfin/retry) - サービス呼び出しをラップし、一時的な失敗が指数的にバックオフで自動的にリトライ（163★）

### 🏘️ 地域・家庭 {#️-civic--household}

ローカルサービスをセンサーやカレンダーに変換：ごみ収集スケジュール、学校の休業日、交通、天候警報など。

- [Mail and Packages](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) - 届いたパッケージや配達されたパッケージのセンサー、USPSのInformed Deliveryプレビュー画像をすべて、既存のメールアカウントから取得（844★）
- [Irrigation Unlimited](https://github.com/rgc99/irrigation_unlimited) - 複数ゾーンの給水制御器で、スケジュール、シーケンス、天候調整、手動実行をサポート（435★）
- [Moonraker (Klipper)](https://github.com/marcolivierarsenault/moonraker-home-assistant) - Klipperベースの3Dプリンター（Mainsail、Fluidd）がMoonrakerで動作している場合、印刷進捗、温度、ウェブカメラスナップショットを追跡（469★）
- [Smart Irrigation](https://github.com/jeroenterheerdt/HAsmartirrigation) - 蒸発散量、最近の雨量、天気予報に基づいて各給水ゾーンの実行時間の計算（509★）
- [UK Bin Collection](https://github.com/robbrad/UKBinCollectionData) - 英国各地の地域当局の廃棄物収集スケジュールを、廃棄物の種類ごとに次回収集センサーとして公開（328★）

### 🔐 ネットワーク・認証 {#-network--authentication}

ホームアシスタントにシングルサインオンでログインし、トンネルを通じてルートを設定する、またはネットワークハードウェアをダッシュボードに取り込む。

- [OIDC Auth](https://github.com/christiaangoossens/hass-oidc-auth) - Authelia、Authentik、Keycloak、Pocket IDなど、任意のOpenID Connectプロバイダーを通じてシングルサインオンでログイン（936★）
- [OpenID Connect Auth](https://github.com/cavefire/hass-openid) - Authelia、Keycloak、Authentikなど、任意のOpenID Connectプロバイダーを通じてログイン（201★）
- [TP-Link Router](https://github.com/AlexandrErohin/home-assistant-tplink-router) - TP-LinkおよびMercusysルーターをセンサー、リブートボタン、スイッチ、クライアントごとのデバイストラッキングで管理（348★）
- [Mikrotik Router](https://github.com/tomaae/homeassistant-mikrotik_router) - Mikrotikルーターおよびアクセスポイントをダッシュボードに取り込み、クライアントごとのトラフィック、DHCPリース、PoE制御をサポート（453★）

### 🔗 連携・複数インスタンス {#-federation--multi-instance}

複数のホームアシスタントインスタンスをリンクし、複数のホーム間でエンティティを共有する、または相互にリレーする。

- [Remote Home Assistant](https://github.com/custom-components/remote_homeassistant) - 複数インスタンスをリンクし、エンティティ、サービス、イベントをそれらの間で流れさせる（1,232★）

### 📊 ログ・分析 {#-logging--analytics}

ホームアシスタントのデータを外部システムに送信し、長期保存、豊かなダッシュボード、または分析を行う。

- [Elasticsearch](https://github.com/legrego/homeassistant-elasticsearch) - Elasticsearch（165★）にイベントを公開する。
- [TrueNAS](https://github.com/tomaae/homeassistant-truenas) - TrueNAS ScaleおよびCoreの統計、データセット、仮想マシン、アプリをセンサーやスイッチに取り込む（370★）。
- [Monitor Docker](https://github.com/ualex73/monitor_docker) - ホスト上のすべてのDockerコンテナ（リモートも含む）のCPU、メモリ、ネットワーク、稼働時間の監視を行い、自動化から開始または停止できる（401★）。
- [Unraid](https://github.com/ruaan-deysel/ha-unraid) - Unraid NASのCPU、メモリ、ディスク、仮想マシン、Dockerコンテナの監視と制御（240★）。

## ダッシュボードカード {#dashboard-cards}

プラグインがダッシュボードに組み込まれます。その機能に沿ってグループ分けされています。

### 🧱 ダッシュボードフレームワーク {#-dashboard-frameworks}

フルなカードコレクションでダッシュボードの見た目や雰囲気を変えるもの。マッシュルーム、バブルカード、フロアプラン、およびそれらを含むすべてのワンストップツールキット。

- [Mushroom](https://github.com/piitaya/lovelace-mushroom) - ソフトでモバイル中心のデザインの完全なカードコレクションを、既存のダッシュボードに簡単に取り込む（5,018★）。
- [Bubble Card](https://github.com/Clooos/Bubble-Card) - ミニマリズムを採用し、ポップアップ機能と豊かなカスタマイズを備えたカードコレクション（4,323★）。
- [Floorplan](https://github.com/ExperienceLovelace/ha-floorplan) - 自宅のSVG図にエンティティをマッピングし、状態変化に基づいてアニメーションを適用（1,553★）。
- [UI Lovelace Minimalist](https://github.com/UI-Lovelace-Minimalist/UI) - すべてのビューに統一されたミニマリズムのデザインを持つ、ダッシュボードコレクション。既存のカードとボタンカードライブラリを含む（2,036★）。

### 📐 レイアウト支援 {#-layout-helpers}

他のカードがどこに、どのように表示されるかを変えるカード：スタック、折りたたみ、条件付き表示、スタイル変更、またはテンプレート。

- [Auto-Entities Card](https://github.com/thomasloven/lovelace-auto-entities) - エンティティを動的に追加：🔮 マジック（1,756★）。
- [Card Modder](https://github.com/thomasloven/lovelace-card-mod) - Lovelaceカードのスタイルをカスタマイズ（1,722★）。
- [Restriction Card](https://github.com/iantrich/restriction-card) - Lovelaceカード内で定義されたカードに制限を設定するためのカード（317★）。
- [Config Template Card](https://github.com/iantrich/config-template-card) - Lovel及のテンプレートを使用を可能にする（552★）。
- [Button card](https://github.com/custom-cards/button-card) - エンティティに高度にカスタマイズ可能なボタン（2,456★）。
- [Expander Card](https://github.com/Alia5/lovelace-expander-card) - ヘッダーの下に他のカードをグループ化・非表示できる展開・収縮可能なカード（415★）。
- [Layout Card](https://github.com/thomasloven/lovelace-layout-card) - ダッシュボード上のカードの配置を細かく制御できる。マスオブジェクトスタイルやグリッドレイアウトも可能（1,246★）。
- [Vertical Stack In Card](https://github.com/ofekashery/vertical-stack-in-card) - 複数のカードを1つのスムーズなカードにまとめて、共有されたボーダーで表示（968★）。
- [Fold Entity Row](https://github.com/thomasloven/lovelace-fold-entity-row) - ヘッダーをクリックするまで、追加のエンティティを隠す折りたたみ可能な行（705★）。
- [State Switch](https://github.com/thomasloven/lovelace-state-switch) - エンティティの状態、時間帯、または表示ユーザーに基づいて、1つのカードを別のカードに動的に交換（463★）。
- [Swipe Navigation](https://github.com/zanna-37/hass-swipe-navigation) - モバイルでスワイプ操作でダッシュボードビューを切り替える（543★）。
- [Custom Card Features](https://github.com/Nerwyn/custom-card-features) - タイルカードにボタン、ドロップダウン、スライダー、スピンボックス、セレクタ、トグルを追加し、任意のサービスを呼び出す（426★）。
- [Custom Sidebar](https://github.com/elchininet/custom-sidebar) - ユーザーまたはデバイスごとにサイドバーをカスタマイズし、ページを非表示にしたり、順序を変更したり、見た目を再設計できる（278★）
- [Paper Buttons Row](https://github.com/jcwillox/lovelace-paper-buttons-row) - アクションを呼び出し、ハプティックを発生させ、状態ごとに見た目を変更できる高度にカスタマイズ可能なボタン行（359★）
- [Streamline Card](https://github.com/brunosabot/streamline-card) - テンプレートを一度定義して、ダッシュボードの異なるエンティティに再利用できる。コピー＆ペーストのYAMLは不要（258★）

### 📈 チャート・グラフ {#-charts--graphs}

時間軸上でセンサーデータを可視化。ゲージ、線グラフ、棒グラフ、およびサンキー図。

- [Mini Graph Card](https://github.com/kalkih/mini-graph-card) - 極めてシンプルなセンサーグラフカード（3,830★）
- [Canvas Gauge Card](https://github.com/custom-cards/canvas-gauge-card) - canvas-gauges.comの素晴らしいゲージを活用（216★）
- [Dual Gauge Card](https://github.com/custom-cards/dual-gauge-card) - 1つのカードに2つのゲージを表示（220★）
- [ApexCharts Card](https://github.com/RomRider/apexcharts-card) - ApexChartsJSで構成された高度なグラフとチャート（タイムライン、複数軸、イベントマーカーを含む）（1,797★）
- [Sankey Chart](https://github.com/MindFreeze/ha-sankey-chart) - 電力、水、またはその他のフローを家庭内で可視化するためのSankeyスタイルのフロー図（660★）
- [Modern Circular Gauge](https://github.com/selvalt7/modern-circular-gauge) - スムーズなアニメーション、色のステップ、テンプレート対応の現代的な円形ゲージカード（269★）
- [Flex Table Card](https://github.com/custom-cards/flex-table-card) - 任意の列、正規表現マッチされたエンティティ、行ごとのスタイルをサポートする高度に柔軟なテーブルカード。AppDaemonやテンプレートコンテンツに有用（268★）

### 📋 状態・情報行 {#-status--info-rows}

コンパクトな行で、エンティティカードスタイルのリストにより多くの情報を詰め込む。

- [Slider Entity Row](https://github.com/thomasloven/lovelace-slider-entity-row) - スライダーを追加して調整できる。たとえば、Lovelaceエンティティカードの光の明るさ（912★）
- [Battery State Card](https://github.com/maxwroc/battery-state-card) - バッテリーレベルを持つデバイスを、整然と並べたカードで表示し、並び順と色分けを適用（1,246★）
- [Scheduler Card](https://github.com/nielsfaber/scheduler-card) - ダッシュボードから、任意のエンティティに対して週間スケジュールを構築・編集できる（1,236★）
- [Entity Progress Card](https://github.com/francois-le-ko4la/lovelace-entity-progress-card) - 数値エンティティに適用可能な進行バーカード。しきい値、グラデーション、テンプレートアイコンをサポート（257★）
- [Vehicle Status Card](https://github.com/ngocjohn/vehicle-status-card) - 燃料や充電レベル、走行距離、ドア、ロック状態、カーカスタム画像を表示するダッシュボードカード（262★）
- [Timer Bar Card](https://github.com/rianadon/timer-bar-card) - タイマーエンティティに適用可能な進行バーカード。カウントダウン、残り時間のフォーマット、カスタマイズ可能な色をサポート（578★）

### ☀️ 天気カード {#️-weather-cards}

実際にお好みの見た目を持つ天気ウィジェット。

- [Weather Chart Card](https://github.com/mlamberts78/weather-chart-card) - チャートスタイルの時間ごとの予報とカスタマイズ可能なレイアウトを持つ天気カード（435★）
- [Hourly Weather](https://github.com/decompil3d/lovelace-hourly-weather) - 今日の時間ごとの予報を色付きの水平バーとして表示し、状態の変化を一目で確認できる（393★）
- [Weather Radar](https://github.com/Makin-Things/weather-radar-card) - 公開されたRainViewerタイルサービスを用いたアニメーションされた雨のレーダーカード。国レベルおよび地域レベルのズームをサポート（384★）
- [Clock Weather Card](https://github.com/pkissling/clock-weather-card) - 日付、時間、天気予報を統合したカード。来週の予報にiOS風のレイアウトを採用（841★）
- [Horizon Card](https://github.com/rejuvenate/lovelace-horizon-card) - 太陽の位置を一日中、地平線を越えて可視化し、日出、日没、夜間の薄明をマーク（652★）

### 🎵 メディアカード {#-media-cards}

アルバムアートやキュー、各部屋ごとの存在状態を活用した、メディアプレイヤーの制御をより効果的に。

- [Mini Media Player](https://github.com/kalkih/mini-media-player) - シンプルなメディアプレイヤーのカード（1,701★）

### 🌡️ 空調カード {#️-climate-cards}

見た目や感触が異なるリプレース可能なサーモスタットカード。

- [Thermostat Card](https://github.com/ciotlosm/lovelace-thermostat-dark-card) - ネスト・テルマット風のサーモスタット制御カード（745★）
- [Simple Thermostat](https://github.com/nervetattoo/simple-thermostat) - シンプルで柔軟なサーモスタット制御カード（80、6★）
- [Mini Climate](https://github.com/artem-sedykh/mini-climate-card) - 小型ダッシュボードやモバイル向けに設計された、現在温度、目標温度、モード制御を含むコンパクトな気温カード（322★）

### ⚡ エネルギーカード {#-energy-cards}

太陽光発電、グリッドからの輸入、バッテリーの状態、および消費量の流れを可視化。

- [Sunsynk Power Flow](https://github.com/slipx06/sunsynk-power-flow-card) - SunsynkおよびDeyeインバーターのリアルタイムエネルギー流れを可視化し、インバーター画面のレイアウトをそのまま反映（384★）

### 💡 照明カード {#-lighting-cards}

照明、色温度、効果への専門的な制御。

- [RGB Light Card](https://github.com/bokub/rgb-light-card) - RGB照明を制御するカラフルなボタン（563★）
- [Hue-Like Light Card](https://github.com/Gh61/lovelace-hue-like-light-card) - Philips Hueアプリのスタイルとレイアウトを採用したライトカードで、シーンをグループ化し、個々のランプを制御（368★）
- [Light Entity Card](https://github.com/ljmerza/light-entity-card) - 明るさ、色温度、色選択を含む、どんな照明やスイッチでも制御できるコンパクトカード（282★）

### 🗺️ 地図・位置情報 {#️-maps--location}

デバイスや人の位置を地図に表示し、履歴トラックとカスタムオーバーレイを提供。

- [ha-map-card](https://github.com/nathan-gs/ha-map-card) - 歴史トレース、カスタムタイルレイヤー、タップアクションを備えたLeafletベースの地図カード（116★）

### 📸 カメラカード {#-camera-cards}

カメラストリームを、オーバーレイ、制御、イベントタイムライン、ポップアウトビューで、あなたが望むように表示。

- [Advanced Camera Card](https://github.com/dermotduffy/advanced-camera-card) - タイムライン、ギャラリー、スナップショット、クリップ、イベントごとの再生を含む総合的なカメラカード（1,077★）

### 🧹 掃除機カード {#-vacuum-cards}

ダッシュボードに真空状態、部屋の地図、開始／停止制御を表示。

- [Vacuum Map Card](https://github.com/PiotrMachowski/lovelace-xiaomi-vacuum-map-card) - ユーザーに親しみやすい操作で、Xiaomi（Roborock/Viomi/Dreame/Roidmi）およびNeato（＋他の可能性）の掃除機を完全に制御できるカード（1,885★）
- [Vacuum Card](https://github.com/denysdovhan/vacuum-card) - ロボット掃除機の制御用のカード（1,211★）
- [Valetudo Map](https://github.com/Hypfer/lovelace-valetudo-map-card) - Valetudo（クラウドレスファームウェア）で動作するロボット掃除機のリアルタイム地図をダッシュボード上に直接表示（304★）

### 📅 カレンダー・フィード {#-calendar--feed}

カレンダー表示と、これから開催されるイベントの流れ表示。

- [Atomic Calendar Revive](https://github.com/totaldebug/atomic-calendar-revive) - 高度設定を備えたカレンダーカード（629★）
- [Week Planner Card](https://github.com/FamousWolf/week-planner-card) - 来週のイベント、アラーム、リマインダーをレスポンス的に表示する多日間の概要（514★）
- [Trash Card](https://github.com/idaho/hassio-trash-card) - カレンダーエンティティに基づき、次のゴミ回収タイプ（紙、プラスチック、有機物）を表示し、色分けされたアイコンで表示（356★）
- [Calendar Card Pro](https://github.com/alexpfau/calendar-card-pro) - イベントグループ化、場所のインジケーター、クリーンで現代的な見た目を備えたカスタマイズ可能なカレンダーカード（1,122★）

### 📡 リモート操作 {#-remote-control}

テレビ、ストリーマー、AV機器への仮想リモコン。

- [LG WebOS Remote Control](https://github.com/madmicio/LG-WebOS-Remote-Control) - LG TV WebOS向けのリモコン（551★）
- [HA Firemote](https://github.com/PRProd/HA-Firemote) - Apple TV、Fire TV、Chromecast、Homatics、Shield、onn、Roku、Xiaomiなどへの仮想リモコン（987★）
- [Universal Remote Card](https://github.com/Nerwyn/universal-remote-card) - 完全にカスタマイズ可能なメディアデバイス用仮想リモコン。カスタムボタンとハプティクスをサポート（569★）

### 🍃 空気質 {#-air-quality}

フィルターと空気質センサーからの読み取りを表示。

- [Purifier Card](https://github.com/denysdovhan/purifier-card) - 空気清浄機を制御するためのカード（342★）

### 🖥️ キオスク・壁面パネル {#️-kiosk--wallpanel}

クロムを隠し、フルスクリーン表示、または壁に設置された古びたタブレットを専用のタッチパネルに変換する。

- [Wall Panel](https://github.com/j-a-n/lovelace-wallpanel) - 壁に設置されたタブレットに適用可能な壁パネルモードと写真スクリーンセーバー（842★）
- [Kiosk Mode](https://github.com/NemesisRE/kiosk-mode) - ヘッダー、サイドバー、オーバーフローメニューを非表示し、クリーンなキオスク風のビューを実現（738★）

## ダッシュボード {#dashboards}

デフォルトのHome Assistantダッシュボードを別の見た目で置き換えるか拡張するフレームワーク。

- [Dwains Dashboard](https://github.com/dwainscheeren/dwains-lovelace-dashboard) - デスクトップ、タブレット、モバイル用の完全自動生成ダッシュボード（2,048★）
- [Mushroom Strategy](https://github.com/DigiLive/mushroom-strategy) - Mushroomカードを用いて自動的にダッシュボードを生成する戦略（648★）

## テーマ {#themes}

見た目がすべてです、いくつかのスタイルを適用してください。

- [Midnight](https://community.home-assistant.io/t/midnight-theme/28598?u=frenck) - Marcel Hoffsによるダークテーマ
- [Dark Cyan](https://community.home-assistant.io/t/dark-cyan-theme/28594?u=frenck) - Ryoen Deprouwによるシアンアクセントのダークテーマ
- [Grey Night](https://community.home-assistant.io/t/grey-night-theme/30848?u=frenck) - ksyaによるグレーアクセントのダークテーマ
- [Dark Red](https://community.home-assistant.io/t/dark-red-theme/28592?u=frenck) - Ryoen Deprouwによるレッドアクセントのダークテーマ
- [Halloween](https://community.home-assistant.io/t/halloween-theme/30872?u=frenck) - Mahasri Kalavalaによるピーマン色のテーマ
- [Black and Green](https://community.home-assistant.io/t/black-and-green-theme/28602?u=frenck) - GreenTurtwigによるパレートーングリーンアクセントのダークテーマ
- [Vintage](https://community.home-assistant.io/t/vintage-theme/42806?u=frenck) - Anup Surendranによるテーマでフロントエンドにヴィンテージ風を施す
- [Carbon Green](https://community.home-assistant.io/t/share-your-themes/22018/95?u=frenck) - Reuaによるライトカーボンテーマ（グリーンアクセント）
- [Slate](https://github.com/seangreen2/slate_theme) - vanilla風に近いダークテーマ（137★）
- [Synthwave](https://github.com/bbbenji/synthwave-hass) - 現代シンスウェーブバンドのカバーイラストにインスパイアされたテーマ（200★）
- [Frosted Glass](https://github.com/wessamlauf/homeassistant-frosted-glass-themes) - 現代的なフロストガラス風のダーク・ライトテーマ（透過カード付き）（907★）
- [iOS Themes](https://github.com/basnijholt/lovelace-ios-themes) - iOSのダーク・ライトモードにインスパイアされたテーマ（868★）
- [LCARS](https://github.com/th3jesta/ha-lcars) - Star Trek LCARS風のテーマで橋の雰囲気を再現（534★）
- [Material You](https://github.com/Nerwyn/material-you-theme) - アクセントカラーに合わせて自動調整されるMaterial Design 3テーマ（452★）
- [Graphite](https://github.com/TilmanGriesel/graphite) - 静かで清潔なテーマで、焦点を絞り、低コントラストな印象（442★）
- [Catppuccin](https://github.com/catppuccin/home-assistant) - リラックスするパステルテーマで、人気のCatppuccinパレットを編集者やアプリに統一（427★）
- [Mushroom Themes](https://github.com/piitaya/lovelace-mushroom-themes) - Mushroomカードコレクションと組み合わせやすい追加テーマ（304★）
- [visionOS](https://github.com/Nezz/homeassistant-visionos-theme) - AppleのvisionOSにインスパイアされたテーマ（313★）
- [Nordic](https://github.com/coltondick/nordic-theme-main) - ノルディックパレットによる明るいおよび暗いテーマ、複数の青色調のバリエーション（43★）

## アイコンパック {#icon-packs}

HACSを通じてインストールするカスタムアイコンセットを、ダッシュボード全体のデフォルトアイコンを置き換えるか拡張する。

- [Font Awesome Icons](https://github.com/thomasloven/hass-fontawesome) - Font Awesomeの無料アイコンをフロントエンドで使用（339★）
- [Hass Hue Icons](https://github.com/arallsopp/hass-hue-icons) - 追加のPhilips Hueのバルブおよび照明器具アイコン（377★）
- [simpleicons](https://github.com/vigonotion/hass-simpleicons) - simpleiconsセットの無料アイコンを使用（167★）

## アプリ {#apps}

データベース、リバースプロキシ、MQTTブローカー（多くのスマートホームデバイスが使用するメッセージングサービス）や、Home Assistantとともに動作するその他のツールが必要ですか？ アプリ（以前は「Add-ons」と呼ばれていました）により、これらをHome Assistant OSに直接インストールできます。Dockerは不要で、別サーバーも必要なく、コマンドラインも不要です。

### 🛡️ 公式アプリ {#️-official-apps}

ホームアシスタントチームが開発・維持しています。

- [DuckDNS](https://github.com/home-assistant/hassio-addons/blob/master/duckdns/DOCS.md) - Duck DNSのIPアドレスを更新し、Let's Encryptを使用してSSLを生成
- [File editor](https://github.com/home-assistant/hassio-addons/blob/master/configurator/DOCS.md) - ブラウザベースの設定ファイルエディタ
- [Mosquitto](https://github.com/home-assistant/hassio-addons/blob/master/mosquitto/DOCS.md) - 高速かつ信頼性の高いMQTTブローカー
- [Terminal & SSH](https://github.com/home-assistant/hassio-addons/blob/master/ssh/DOCS.md) - WebターミナルまたはSSHクライアントを使ってリモートログインを可能にする
- [Samba](https://github.com/home-assistant/hassio-addons/blob/master/samba/DOCS.md) - Windowsネットワーク共有で設定ファイルにアクセス
- [NGINX SSL proxy](https://github.com/home-assistant/hassio-addons/blob/master/nginx_proxy/DOCS.md) - SSL終端を備えたリバースプロキシ
- [deCONZ](https://github.com/home-assistant/hassio-addons/blob/master/deconz/DOCS.md) - Dresden ElektronikのConBeeまたはRaspBeemハードウェアを使ってZigBeeネットワークを制御
- [Let's Encrypt](https://github.com/home-assistant/hassio-addons/blob/master/letsencrypt/DOCS.md) - Let's Encryptから無料のSSL証明書を取得；オープンで自動化された証明書機関（CA）
- [MariaDB](https://github.com/home-assistant/hassio-addons/blob/master/mariadb/DOCS.md) - オープンソースの関係データベース（MySQLのフォーク）

### 📦 サードパーティアプリ {#-third-party-apps}

誰でもアプリを作成できます。以下のアプリはコミュニティによって作成されています。

- [SSH & Web Terminal](https://github.com/hassio-addons/app-ssh) - SSHおよびウェブベースのターミナルに多数の事前読み込み済みの便利ツールを備えた（501★）
- [UniFi Controller](https://github.com/hassio-addons/app-unifi) - UniFi Controllerは、ウェブブラウザを使ってUniFiネットワークを管理できる（374★）
- [Node-RED](https://github.com/hassio-addons/app-node-red) - インターネットオブシングス（IoT）向けのフローベースプログラミング（637★）
- [Plex Media Server](https://github.com/hassio-addons/app-plex) - あなたの記録メディアが美しく整理され、ストリーミング可能（190★）.
- [InfluxDB](https://github.com/hassio-addons/addon-influxdb) - メトリクス、イベント、リアルタイム分析用のスケーラブルデータストア（196★）.
- [Grafana](https://github.com/hassio-addons/addon-grafana) - 美しく分析と監視を行うオープンプラットフォーム（279★）.
- [Tor](https://github.com/hassio-addons/app-tor) - プライバシーを保護し、Torを介してインスタンスにアクセス（62★）.
- [Spotify Connect](https://github.com/hassio-addons/app-spotify-connect) - Spotifyから音楽を直接Home Assistantデバイスにストリーミング（250★）.
- [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt) - ZigbeeをMQTTに橋渡し、あなたのプロプライエタリZigbeeブリッジを廃止（15,213★）.
- [AppDaemon](https://github.com/AppDaemon/appdaemon) - 自動化アプリを書くための、緩く結合されたマルチスレッド、サンドボックス環境のPython実行環境（961★）.
- [TasmoAdmin](https://github.com/hassio-addons/addon-tasmoadmin) - すべてのSonoff-Tasmotaデバイスを中央管理（256★）.
- [Aircast](https://github.com/hassio-addons/app-aircast) - ChromecastプレイヤーへのAirPlay機能（397★）.
- [AirSonos](https://github.com/hassio-addons/app-airsonos) - SonosプレイヤーへのAirPlay機能（121★）.
- [Log Viewer](https://github.com/hassio-addons/addon-log-viewer) - ブラウザベースのリアルタイムログ閲覧ツール（94★）.
- [Tautulli](https://github.com/hassio-addons/addon-tautulli) - Plexサーバーの監視と統計取得（46★）.
- [motionEye](https://github.com/hassio-addons/addon-motioneye) - シンプルで洗練され、機能豊かなCCTV/NVR（332★）.
- [JupyterLab](https://github.com/hassio-addons/addon-jupyterlab) - ライブコード、式、可視化、説明文を含むドキュメントを作成（68★）.
- [Glances](https://github.com/hassio-addons/app-glances) - Pythonで書かれたマルチプラットフォームシステム監視ツール（186★）.
- [AdGuard Home](https://github.com/hassio-addons/app-adguard-home) - ネットワーク全体にわたる広告・トラッカーブロッキングDNSサーバーと親子制御（520★）.
- [Traccar](https://github.com/hassio-addons/addon-traccar) - 現代的なGPSトラッキングプラットフォーム（158★）.
- [Hass.io Google Drive Backup](https://github.com/sabeechen/hassio-google-drive-backup) - Google Driveへのバックアップに必要な、完全で設定が簡単なソリューション（3,553★）.
- [Grocy](https://github.com/hassio-addons/app-grocy) - あなたの冷蔵庫を超えるERP！家庭用の買い物と家事管理ソリューション（433★）.
- [CrowdSec](https://github.com/crowdsecurity/home-assistant-addons) - 次世代の協働型IPS/IDSで、侵入から保護（94★）.
- [C-Gate Web Bridge](https://github.com/dougrathbone/cgateweb-homeassistant) - ブリッジ・クライップがC-Bus照明および自動化システムをMQTTでHome Assistantに接続し、自動発見を実現（4★）

## DIY {#diy}

最も優れたスマートホームデバイスの多くは、販売できる商品として存在しませんが、他の人々がそれらを構築する方法を発見しています。以下のプロジェクトでは、自作多センサのスolderingから廃止されたデバイスの再利用まで、すべてをカバーしています。ほとんどのプロジェクトは週末の作業で、部品のコストはコーヒーを買いに行くより安いです。

### 🧩 単体プロジェクト {#-standalone-projects}

- [ESPHome](https://esphome.io/) - YAMLを使用したESP8266ボードおよびESP32ボードのプログラム
- [Tasmota](https://github.com/arendst/Tasmota) - ESP8266ボードおよびデバイス向けのファームウェア（24,475★）
- [Sonoff NSPanel](https://github.com/joBr99/nspanel-lovelace-ui) - Sonoff NSPanelタッチスクリーンにLovelaceスタイルのUIを備えたカスタムファームウェア（988★）
- [CODESYS V3 Home Automation](https://github.com/MichielVanwelsenaere/HomeAutomation.CoDeSys3) - MQTTを介して有線自動化セットアップに通信するPLC型ホーム自動化ソフトウェア（144★）

### 🌉 DIYゲートウェイ {#-diy-gateways}

- [OpenMQTTGateway](https://github.com/1technophile/OpenMQTTGateway) - IR、RF、BLE、MiFlora、SMSおよび多数のセンサーに対応する柔軟なMQTTゲートウェイ（4,023★）
- [esp8266 Milight Hub](https://github.com/sidoh/esp8266_milight_hub) - Milight/LimitlessLEDデバイス向けのMQTTを使用する代替ハブ（1,040★）

### 🔨 DIYプロジェクト {#-diy-projects}

- [HA SwitchPlate](https://community.home-assistant.io/t/ha-switchplate-diy-lcd-touchscreen-wall-switch-replacement/25464?u=frenck) - LCDタッチスクリーン壁スイッチの代替品
- [$10 WiFi RGB Bulb](https://community.home-assistant.io/t/how-to-inexpensive-10-us-wifi-rgb-bulb-that-works-with-home-assistant/14735?u=frenck) - WiFiに対応する安価なRGBランプ
- [433mhz/IR Bidirectional Gateway](https://community.home-assistant.io/t/433mhz-infrared-ir-to-and-from-mqtt-on-esp8266/6779?u=frenck) - ESP8266とMQTTを用いたIRおよび433MHzの両方向通信
- [esp8266MQTTBlinds](https://community.home-assistant.io/t/esp8266-window-blinds-mqtt/14863?u=frenck) - ESP8266、サーボモーター、MQTTを用いて窓のカーテンを自動化
- [Home Assistant's Hackster.io](https://www.hackster.io/home-assistant?f=1#_=_) - ハッカー向けチャンネルに複数のDIYプロジェクトを掲載
- [Bed Presence Detection](https://selfhostedhome.com/diy-bed-presence-detection-home-assistant/) - ESP8266ベースのベッド存在検知
- [QuinLED](https://quinled.info/) - ESP32ボードを用いたWi-FiLEDのダミングおよび制御

## ツール・ユーティリティ {#tools--utilities}

【ヘルパー、デーモン、開発者ツール】これらはHome Assistantの内部にではなく、その側に存在するもの。設定の編集、データのデバッグ、MQTT経由でのデバイスデータ送信、またはHome Assistantをより広いワークフローに統合する際に役立ちます。

- [HASS Configurator](https://github.com/danielperna84/hass-configurator) - ブラウザベースの設定ファイルエディタ（334★）
- [HA-Dockermon](https://github.com/philhawthorne/ha-dockermon) - RESTフルスイッチを用いたNode.jsサービスでDockerコンテナを制御（291★）
- [Home Assistant Device Database](https://www.hadevices.com/) - サポート・確認済み動作デバイスのデータベース
- [Jinja Scripts for Curious Minds](https://github.com/skalavala/mysmarthome/tree/master/jinja_helpers) - Jinja2スクリプトの集合が理解を助ける
- [GitLab CI/CD](https://about.gitlab.com/2018/08/02/using-the-gitlab-ci-slash-cd-for-smart-home-configuration-management/) - GitLab CI/CDを用いてスマートホーム設定を簡素化する方法
- [Monitor](https://github.com/andrewjfreyer/monitor) - MQTTを介して分散型広告ベースのBTLE存在検知を報告（2,104★）
- [HASS-data-detective](https://github.com/robmarkcole/HASS-data-detective) - データベースのデータを探索・分析（204★）
- [ADB Intents](https://gist.github.com/mcfrojd/9e6875e1db5c089b1e3ddeb7dba0f304) - ADBの意図一覧を用いてAndroidデバイスを制御
- [Home Assistant Config Helper for VSCode](https://marketplace.visualstudio.com/items?itemName=keesschollaart.vscode-home-assistant) - 構成ファイルを編集する際に自動補完、設定検証、スニペットを提供するVisual Studio Code拡張機能
- [Home Assistant Taskbar Menu](https://github.com/PiotrMachowski/Home-Assistant-Taskbar-Menu) - Windows用クライアントでLovelaceビューを表示、エンティティを制御し、永続通知を表示（342★）

## オンライン資料 {#online-resources}

Home Assistantには、ブログを書く人、YouTubeの動画をアップする人、ポッドキャストを運営する人、そして自分が作ったものを共有を愛する人々が多数います。以下の人物は、定期的に発信している重要な声の一部です。新しい機能がリリースされた際や、自分で取り組む前に実際に体験してみたい場合に特に注目してください。

### ✍️ ブログ {#️-blogs}

#### 英語 {#english}

- [DIY Futurism](https://diyfuturism.com/) - Bradによる新規ユーザー向けに明確なステップバイステップの記事
- [Smart Home Hobby](https://smarthomehobby.com/) - 予算に合ったガイドと情報の提供
- [Self Hosted Home](https://selfhostedhome.com/) - DIYホームオートメーションプロジェクトやセルフホストサービスに関する記事
- [Tinkering with Home Automation](https://blog.ceard.tech/) - Tinkererのブログとガイド
- [HomeTechHacker](https://hometechhacker.com/) - DIYスマートホームガイド、レビュー、アドバイス
- [Intermittent Technology](https://blog.quindorian.org/) - Quindorの個人ブログ（スマートホーム、ネットワーク、周辺技術をカバー）
- [SmartHomeScene](https://smarthomescene.com/) - 初心者向けチュートリアル、スマートホームデバイスレビュー、DIYオートメーションプロジェクト
- [KPeyanski](https://peyanski.com/) - Kiril Peyanskiによるオートメーション、AI統合、エネルギー管理に関するチュートリアルとガイドウォークス
- [fixtse](https://fixtse.com/) - Sergio Romeroによる存在検知、ボイスアシスタント、ローカルAI向けのハードウェアレビューとDIYガイド
- [Michael Leen](https://michaelsleen.com/) - 初めてのスマートホームを構築する人のために向けた実用的なセットアップアドバイスと機器レビュー
- [Phil Hawthorne](https://philhawthorne.com/) - 長期にわたりポッドキャストを実施してきた人物による統合、存在検知、家庭用オートメーションに関するフィールドノート
- [Frenck](https://frenck.dev/) - Franck Nijhofによるオープンソース、プロジェクトリーダーシップ、個人的なオートメーション実験に関する裏側の投稿

#### 🌍 その他の言語 {#-in-other-languages}

言語でアルファベット順に並べました。

- 🇩🇪 [simon42](https://www.simon42.com/) - Simon Müllerによるインストール、統合、オートメーションに関する初心者向けガイド
- 🇩🇪 [smarterkram](https://smarterkram.de/) - Oliver KluthによるZigbee、Matter、ESPHome、ハードウェアに関する詳細なチュートリアル
- 🇩🇪 [SmartHome yourself](https://smarthomeyourself.de/) - Daniel Scheid等によるリリース情報、機器レビュー、統合ガイド

### 📺 YouTubeチャンネル {#-youtube-channels}

リラックスして、見ながら、学びましょう。

#### 英語 {#english-1}

公式チャンネルから順に、購読者数で並べ替え。毎夜更新。

- [Home Assistant](https://www.youtube.com/channel/UCbX3YkedQunLt7EQAdVxh7w) - 新規リリースやライブストリームの公式チャンネル（73.7Kサブ）
- [The Hook Up](https://www.youtube.com/channel/UC2gyzKcHbYfqoXA5xbyGXtQ) - ロバート・テイトによるスマートホームチュートリアル、グッズレビュー、ホームオートメーション実験（577K視聴者）
- [Everything Smart Home](https://www.youtube.com/c/EverythingSmartHome) - スマートホームおよびテクノロジーのレビュー、ガイド、ステップバイステップDIYプロジェクト（245K視聴者）
- [Home Automation Guy](https://www.youtube.com/@HomeAutomationGuy) - アラン・バーンによるスマートホームチュートリアル、オートメーション、グッズレビュー（113K視聴者）
- [Smart Home Junkie](https://www.youtube.com/@smarthomejunkie) - エド・デ・トールネアによる初心者から上級者まで対象のハウツービデオとチュートリアル（85.7K視聴者）
- [digiblurDIY](https://www.youtube.com/channel/UC5ZdPKE2ckcBhljTc2R_qNA) - ハードウェアプロジェクトチュートリアルとTasmotaオートメーション（74.及K視聴者）
- [Intermit.Tech](https://www.youtube.com/channel/UCv7UOhZ2XuPwm9SN5oJsCjA) - カメラ、ホームネットワーク、ESPボード、Node-REDに関するチュートリアルとレビュー（62.5K視聴者）
- [BeardedTinker](https://www.youtube.com/channel/UCuqokNoK8ZFNQdXxvlE129g) - スマートホームチュートリアルと3D印刷（44.9K視聴者）
- [JuanMTech](https://www.youtube.com/juanmtech) - わかりやすいハウツービデオと商品レビュー（42.6K視聴者）
- [mostlychris](https://www.youtube.com/@mostlychris) - クリス・ウェストによるスマートホームチュートリアルとグッズレビュー（40.2K視聴者）
- [KPeyanski](https://www.youtube.com/@kpeyanski) - キリル・ペイアンスキーによるハードウェアプロジェクト、ダッシュボード、統合に関する実際のチュートリアル（33.7K視聴者）
- [This Smart House](https://www.youtube.com/@thissmarthouse) - リーン・ホランドによる初心者向けセットアップガイドと商品レビュー（33.8K視聴者）
- [SlackerLabs](https://www.youtube.com/@SlackerLabs) - ジェフリー・ストーンによるオートメーション、スクリプティング、チューニングガイド（30.6K視聴者）
- [Michael Leen](https://www.youtube.com/@michaelsleen) - スマートホームチュートリアルと統合ガイド（26.7K視聴者）
- [Technithusiast](https://www.youtube.com/@technithusiast) - マイケル・モンタクによるチュートリアル、統合、オートメーション（22.8K視聴者）
- [3ATIVE VFX](https://www.youtube.com/@3ATIVE) - VFXアーティストのデイビッド・マーティンによるスマートホームオートメーションと統合（20.5K視聴者）
- [Smart Home Australia](https://www.youtube.com/@smart_home_australia) - パウル・トナーによるオーストラリア風スマートホームレビューとチュートリアル（20.7K視聴者）
- [CTech&Media](https://www.youtube.com/@CTechMedia) - チャーリー・シュルテによるスマートホームレビューとチュートリアル（18K視聴者）
- [Frenck | Home Assistant & Smart Home](https://www.youtube.com/@frenck) - ホームアシスタントプロジェクトのリード。自身の経験やホームアシスタント世界の内部事情に関するまれなビデオ（9.8K視聴者）

#### 🌍 その他の言語 {#-in-other-languages-1}

言語でアルファベット順に並べ、その後購読者数で並べ替え。

- 🇸🇦 [Smart Tech Arabic](https://www.youtube.com/@SmartTechArabic) - シャディ・ナフィーによるアラビア語チュートリアル（99.1K視聴者）
- 🇧🇷 [Descomplicando Tech](https://www.youtube.com/@DescomplicandoTech) - ファブリシオ・ゴンサレスによるスマートホームガイド（15.9K視聴者）
- 🇫🇷 [AyLabs](https://www.youtube.com/@ay_labs) - アイミュアール・レ・フィエールによるチュートリアル、統合、自動化の解説（12K視聴者）。
- 🇩🇪 [simon42](https://www.youtube.com/@simon42) - シモン・ミューラーによるチュートリアル、自動化、ダッシュボードガイド（205K視聴者）。
- 🇩🇪 [haus:automation](https://www.youtube.com/@haus_automation) - マティアス・クライネによるチュートリアル、統合、自動化の解説（136K視聴者）。
- 🇩🇪 [SmartHome yourself](https://www.youtube.com/@Smarthomeyourself) - ダニエル・シュイドルによるDIYスマートホーム構築とガイド（35K視聴者）。
- 🇩🇪 [Tristans Smartes Heim](https://www.youtube.com/@tristanssmartesheim) - トリアスティン・クーテルスによるスマートホームセットアップガイドと統合（13.8K視聴者）。
- 🇮🇹 [DinamoTech](https://www.youtube.com/@DinamoTech) - フランチェスコ・コヴァによるスマートホームチュートリアルとレビュー（78K視聴者）。
- 🇮🇹 [Ipensieridellarchitetto](https://www.youtube.com/@ipensieridellarchitetto) - ドミトックス、技術、AIの解説（14.8K視聴者）。
- 🇪🇸 [Home Assistant y Domótica Fácil](https://www.youtube.com/@HomeAssistantFacil) - ルイス・デル・ヴァレによるスマートホームチュートリアルと自動化（139K視聴者）。
- 🇪🇸 [Tecnoyfoto](https://www.youtube.com/@Tecnoyfoto) - アルベルト・バノセルによるチュートリアルと製品レビュー（45K視聴者）。

### 🎙️ ポッドキャスト {#️-podcasts}

通勤中、朝の習慣の時、またはジムで、インスピレーションを得ましょう！

- [Home Assistant Podcast](https://hasspodcast.io) - 毎2週に1回のポッドキャストで最新ニュースと興味深いゲストを紹介。

### 📱 ソーシャル {#-social}

コミュニティが活動しているすべてのネットワークで、ニュース、アドバイス、インスピレーションを提供する、フォローすべきアカウント一覧。

#### 公式 {#official}

- **Home Assistant** ([X](https://x.com/home_assistant), [Bluesky](https://bsky.app/profile/home-assistant.io), [Mastodon](https://fosstodon.org/@homeassistant), [Facebook](https://www.facebook.com/homeassistantio/), [Instagram](https://www.instagram.com/homeassistant/), [LinkedIn](https://www.linkedin.com/company/home-assistant)) - ローカル制御とプライバシーを最優先にしたオープンソーススマートホーム自動化。
- **Home Assistant Developers** ([X](https://x.com/hass_devs), [Bluesky](https://bsky.app/profile/developers.home-assistant.io)) - プロジェクト開発の最新ニュース（貢献者向け）。
- **Open Home Foundation** ([X](https://x.com/openhomefndn), [Bluesky](https://bsky.app/profile/openhomefoundation.org), [Mastodon](https://fosstodon.org/@openhomefoundation), [Instagram](https://www.instagram.com/openhomefoundation/)) - スマートホームにおけるプライバシー、選択肢、持続可能性を守る。
- **ESPHome** ([X](https://x.com/esphome_), [Bluesky](https://bsky.app/profile/esphome.io)) - ESPボードとスマートホームデバイスを制御するためのオープンソースシステム。
- **Nabu Casa** ([X](https://x.com/NabuCasa)) - クラウドサービスを運営する会社。
- **Rhasspy** ([X](https://x.com/rhasspy), [Mastodon](https://fosstodon.org/@rhasspy)) - マイケル・ハンセンによるオープンソース音声アシスタントツールキット。

#### コミュニティ {#community}

- **Paulus Schoutsen** ([X](https://x.com/balloob), [Bluesky](https://bsky.app/profile/paulusschoutsen.nl), [Mastodon](https://fosstodon.org/@balloob), [Threads](https://www.threads.com/@balloob)) - プロジェクトの創設者およびナブ・カサ。
- **Franck Nijhof** ([X](https://x.com/frenck), [Bluesky](https://bsky.app/profile/frenck.social), [Mastodon](https://fosstodon.org/@frenck), [Threads](https://www.threads.com/@frenck), [Instagram](https://www.instagram.com/frenck/), [YouTube](https://www.youtube.com/@frenck), [LinkedIn](https://www.linkedin.com/in/frenck)) - プロジェクトのリーダーであり、このAwesomeリストの創設者。
- **Everything Smart Home** ([X](https://x.com/EverySmartHome), [Bluesky](https://bsky.app/profile/lewisbarclay.bsky.social), [Mastodon](https://fosstodon.org/@everythingsmarthome)) - レイズ・バーライによるスマートホームおよびテクノロジーのレビュー、ガイド、DIYプロジェクト。 [Threads](https://www.threads.com/@everythingsmarthome)
- **JuanMTech** ([X](https://x.com/JuanMTech), [Bluesky](https://bsky.app/profile/juanmtech.com), [Threads](https://www.threads.com/@juanmtech)) - よく理解できるハウツーコンテンツと製品レビュー。
- **Home Automation Guy** ([X](https://x.com/alanmbyrne), [Bluesky](https://bsky.app/profile/burnsie.com), [Mastodon](https://mastodon.social/@burnsie)) - スマートホームのチュートリアルとオートメーションをアラン・バイアが提供。
- **mostlychris** ([X](https://x.com/mostlychris2), [Bluesky](https://bsky.app/profile/mostlychris.com), [Mastodon](https://fosstodon.org/@mostlychris)) - スマートホームのチュートリアルとグッズレビューをクリス・ウェストが提供。
- **BeardedTinker** ([X](https://x.com/BeardedTinker), [Bluesky](https://bsky.app/profile/beardedtinker.bsky.social)) - スマートホームのチュートリアルと3D印刷。
- **Mark Watt Tech** ([Bluesky](https://bsky.app/profile/markwatttech.bsky.social), [Mastodon](https://fosstodon.org/@MarkWattTech)) - ソフトウェア開発者であり、スマートホームコンテンツクリエイター。
- **Smart Home Junkie** ([X](https://x.com/smarth0mejunkie), [Threads](https://www.threads.com/@smarthomejunkie)) - エド・デ・トールネアが提供する初心者向けおよび高度ユーザー向けのハウツーコンテンツ。
- **Smart Home Solver** ([X](https://x.com/smarthomesolver), [Threads](https://www.threads.com/@smarthomesolver)) - リード・クラインマンが提供するスマートホームのヒントとレビュー。

#### 🌍 その他の言語 {#-in-other-languages-2}

言語でアルファベット順に並べたもの

- 🇧🇷 **LNPBR** ([Instagram](https://www.instagram.com/lnp_br/), [Threads](https://www.threads.com/@lnp_br), [TikTok](https://www.tiktok.com/@lnpbr)) - レンドロが提供するスマートホームチュートリアルと製品レビュー。
- 🇩🇪 **simon42** ([Instagram](https://www.instagram.com/simon42.official/), [Facebook](https://www.facebook.com/simon42official/)) - シモン・ミューラーが提供する初心者向けスマートホームガイドとオートメーション。
- 🇩🇪 **haus:automation** ([Instagram](https://www.instagram.com/haus_automation/), [Facebook](https://www.facebook.com/HausAutomatisierungCom/)) - マティアス・クライネが提供するDIYスマートホームチュートリアル。
- 🇪🇸 **Un loco y su tecnología** ([X](https://x.com/unlocoysutec), [Instagram](https://www.instagram.com/unlocoysutecnologia/), [Threads](https://www.threads.com/@unlocoysutecnologia), [TikTok](https://www.tiktok.com/@unlocoysutecnologia)) - カルロス・コドロが提供するスマートホームコンテンツ。
- 🇪🇸 **Tecnoyfoto** ([X](https://x.com/tecnoyfoto), [Instagram](https://www.instagram.com/barnosell/)) - アルベート・バノセルが提供するチュートリアルと製品レビュー。
- 🇪🇸 **La Choza Digital** ([X](https://x.com/LaChozaDigital), [Bluesky](https://bsky.app/profile/lachozadigital.bsky.social)) - スマートホームおよびDIYオートメーションに関する短いチュートリアル。
- 🇫🇷 **HACF** ([X](https://x.com/hacf_fr)) - フランス語話者によるチュートリアルとリソースの共有コミュニティ。
- 🇮🇹 **inDomus** ([X](https://x.com/indomusit), [TikTok](https://www.tiktok.com/@indomusit)) - イタリア語の個人用スマートホーム自動化コミュニティ。
- 🇳🇱 **Denie van Kleef** ([X](https://x.com/disney79), [Instagram](https://www.instagram.com/denievankleef/)) - ドイツ語のスマートホームおよびエネルギーガイド。
- 🇵🇹 **CPHA** ([Facebook](https://www.facebook.com/cpha.pt/)) - ポルトガル語のホーム自動化愛好家向けコミュニティ。

## 代替ホームオートメーションソフトウェア {#alternative-home-automation-software}

ホームエイシスタントは、唯一のホームオートメーションプラットフォームではない。比較したい場合、あるいはホームエイシスタントがカバーしていない特定のニーズがある場合、以下のプロジェクトは最も活発な代替案である。一部は商業的で、一部はオープンソースであり、いくつかはまったく異なる問題を解決している。

- [openHAB](https://github.com/openhab) - Javaベースであり、ユニバーサルな統合プラットフォームを目指す。
- [Domoticz](https://github.com/domoticz/domoticz) - 軽量なホームオートメーションシステム（3,773★）。
- [Gladys](https://github.com/GladysAssistant/Gladys) - ラズベリーパイ上で実行可能なオープンソースプログラム（3,066★）。
- [SmartThings](https://www.smartthings.com/) - サムスンの商用ホームオートメーションハブ。
- [Homey](https://homey.app/) - アトムから提供される商用マルチプロトコルプラットフォーム。ホームイーブリープロではローカル制御を最優先に、ホームイーブリーモバイルクラウドはホストオプションとして提供されている。
- [Homebridge](https://github.com/homebridge/homebridge) - Apple Homeに非HomeKitデバイスを橋渡しする軽量Node.jsサーバー。膨大なプラグインエコシステム（25,384★）。
- [Node-RED](https://github.com/node-red/node-red) - デバイス、API、サービスを接続するためのフロー型の視覚プログラミングツール。オープンJSファウンデーションによって支えられている（23,277★）。
- [ioBroker](https://github.com/ioBroker/ioBroker) - IoT向けの統合プラットフォーム。数百のアダプタを備え、KNXおよびHomeMaticなどのヨーロッパ向けプロトコルに強いサポート（1,371★）。
- [FHEM](https://fhem.de/) - Perlベースのサーバー。430以上のモジュールを備え、KNX、EnOcean、HomeMaticなどのヨーロッパプロトコルに深く対応している。
- [Jeedom](https://github.com/jeedom/core) - フランス発のクラウドレスプラットフォーム。プラグインマーケットプレイスを備え、任意のLinuxシステム上で動作（414★）。
- [Hubitat](https://hubitat.com/) - 商業的なローカル優先型ハブ。Z-Wave、Zigbee、Matterをサポートし、すべての自動化がデバイス上で実行される。
- [HomeSeer](https://homeseer.com/) - 25年以上の開発歴を持つ商業プラットフォーム。Z-Waveへの強いサポートと、豊富なプラグインエコシステムを備えている。

## その他のAwesomeリスト {#other-awesome-lists}

このリストに似たもので、隣接するテーマについて？以下のリストは、より広いスマートホームカテゴリ、特定のプロトコル、およびセルフホストソフトウェアの一般的な分野をカバーしている。これらは、ホームエイシスタントに直接該当しないが、あなたの問題の一部を解決する可能性がある場合に、良い参照先となる。

- [awesome-iot](https://github.com/HQarroum/awesome-iot) - 素晴らしいIoTプロジェクトとリソースを厳選したリスト（3,948★）。
- [awesome-mqtt](https://github.com/awesome-mqtt/awesome-mqtt#readme) - MQTTに関連するものの中から厳選したリスト（2,35及★）。
- [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) - 素晴らしいセルフホストソフトウェアを厳選したリスト（298,647★）。

## コントリビューション {#contributing}

この素晴らしいリストは、活発なオープンソースプロジェクトであり、貢献したい人々に常に開かれている。我々は、私たちの [Contribution Guidelines](https://github.com/frenck/awesome-home-assistant/blob/main/.github/CONTRIBUTING.md)を含む別のドキュメントを用意した。

この素晴らしいリストの元となる設定は [Franck Nijhof](https://x.com/frenck) によって行われています。

すべての著者および貢献者の一覧については、
[contributor's page](https://github.com/frenck/awesome-home-assistant/graphs/contributors) を確認してください。

ご参加いただきありがとうございます！ 😍

## 商標に関する法的通知 {#trademark-legal-notice}

Awesome Home Assistant は、独立したコミュニティが選定したインデックスです。これは [Home Assistant](https://www.home-assistant.io) または [Open Home Foundation](https://www.openhomefoundation.org) によって作成、認可、スポンサーシップを受けるものでも、関連付けられているものでもありません。"Home Assistant" および Home Assistant ロゴは Open Home Foundation の商標です。

このリストに記載されているその他の製品名、ロゴ、ブランド、商標および登録商標は、それぞれの所有者に帰属しています。
特定のメーカー、製品、統合、追加機能、サービスおよびコミュニティプロジェクトへの参照は、識別目的に過ぎず、その所有者による承認を意味しません。

このリストの内容は [Creative Commons Attribution
4.0 International](https://creativecommons.org/licenses/by/4.0/) (CC-BY-4.0) にライセンスされています。
全文は [LICENSE.md](https://github.com/frenck/awesome-home-assistant/blob/1d623b2a1e11afc81718ae11d28db88e2e91c521/LICENSE.md) を参照してください。
