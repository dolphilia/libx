---
title: Awesome Home Assistant
description: Home Assistantの導入ガイド、コミュニティ、設定例、カスタム統合、ダッシュボードカード、アプリ、DIYプロジェクト。
licenseSource: github-frenck-awesome-home-assistant-readme-md
documentContext:
  - kind: source
    html: >-
      <p>このリストの内容には<a
      href="https://creativecommons.org/licenses/by/4.0/">Creative Commons
      Attribution 4.0 International</a>（CC-BY-4.0）が適用されます。全文は<a
      href="https://github.com/frenck/awesome-home-assistant/blob/1d623b2a1e11afc81718ae11d28db88e2e91c521/LICENSE.md">LICENSE.md</a>を参照してください。</p>
---
# Awesome Home Assistant

[Home Assistant](https://www.home-assistant.io)は、ローカルでの制御とプライバシーを重視するオープンソースのホームオートメーションソフトウェアです。このリストでは、導入方法、コミュニティ、公開設定例、カスタム統合、ダッシュボードカード、テーマ、アプリ、DIYプロジェクト、学習資料を探せます。画面の操作は[Home Assistantのオンラインデモ](https://demo.home-assistant.io)で試せます。

固定原文では、自分のハードウェア上で動作し、数千種類のデバイスに標準対応しており、導入にコードを書く必要はないと説明されています。1部屋から家全体まで、すべてをローカルかつプライベートに保つ構成として紹介されています。

固定原文によると、Home Assistant本体を導入した後は、掲載項目の多くをコミュニティストアの[HACS](https://hacs.xyz)からワンクリックでインストールできます。また、原文は[Open Home Foundation](https://www.openhomefoundation.org)をHome Assistantの所有者であり、ESPHome、Music Assistant、Z-Wave JS、オープンな音声ツールを支える組織として紹介しています。機器選びの参考として、プライバシー、ローカル制御、長期サポートを検証する[Works with Home Assistant](https://works-with.home-assistant.io)プログラムも案内しています。

分類内の掲載順は順位を表しません。活動状況、人気、スター数は固定原文の記載に基づき、現時点での再確認結果ではありません。

## 使い方 <a id="使い方-how-to-use"></a> <a id="目次-contents"></a>

導入を始める際や次のプロジェクトを考える際に、コミュニティが勧めるアプリ、カスタムカード、統合、チュートリアルを探せます。

- Command/Ctrl + Fでキーワードを検索します。
- このページの目次から分類へ移動します。
- 原典の[Awesome Home Assistant](https://www.awesome-ha.com)でもリストを検索できます。

## インストール <a id="インストール-installing"></a>

固定原文では、手軽な導入方法として[Home Assistant Green](https://www.home-assistant.io/green/)を紹介しています。Raspberry Pi、ミニPC、古いノートPCなど、手持ちのハードウェアにも、以下の公式ガイドに沿って導入できます。どの方法でもHome Assistantを動かせます。原文によると、導入後に[HACS](https://hacs.xyz)をインストールすると、このリストの多くの項目をワンクリックで追加できます。

- [Home Assistantのインストール](https://www.home-assistant.io/installation/) - 公式の導入ガイド。
- [インストール方法の比較](https://www.home-assistant.io/installation/#compare-installation-methods) - 利用可能な導入方法の比較。

## 困ったときは <a id="困ったときは-in-case-you-need-help"></a>

設定やデバイスのペアリングについて相談したり、他の人のプロジェクトを参考にしたりする際は、以下のコミュニティを利用できます。固定原文では、Home Assistantのコミュニティは特に活発で、その多くに無料で参加できると説明されています。公式の交流先に続き、言語別・プロジェクト別のグループと、その他の独立した交流先を掲載しています。

### 公式コミュニティ <a id="-公式コミュニティ--official-communities"></a>

- [Home Assistant Discord](https://discord.com/invite/c5DvZ4e) - メインのチャット。原文ではコミュニティの主要な交流先として紹介。
- [Home Assistant Community](https://community.home-assistant.io/?u=frenck) - ディスカッションフォーラム。
- [Home Assistant Subreddit](https://www.reddit.com/r/homeassistant/) - 公式のsubreddit。
- [Home Assistant Facebook Group](https://www.facebook.com/groups/HomeAssistant/) - 愛好家向けのFacebookグループ。

### 言語別のコミュニティ <a id="-各言語のコミュニティ--in-your-language"></a>

英語以外の言語で交流するコミュニティです。原文では言語名のアルファベット順で並んでおり、同じ言語のグループが複数ある場合もあります。

- [Home Assistant Brasil](https://t.me/homeassistant_brasil) - 経験の程度を問わず参加できる、ブラジルポルトガル語のTelegramグループ。
- [Hassbian Forum](https://bbs.hassbian.com/forum.php) - スマートホーム愛好家向けの中国語フォーラム。
- [Home Assistant CZ](https://www.homeassistant-cz.cz/) - 活発なユーザーが集まるチェコ語フォーラム。
- [Dansk Home Assistant gruppe](https://www.facebook.com/groups/209025039666209/) - デンマーク語のFacebookグループ。
- [Dutch Domotics Discord](https://discord.gg/Ee5X7T7) - オランダ語のホームオートメーションDiscord。
- [Home Assistant NL](https://t.me/home_assistant_nl) - オランダ語のTelegramグループ。
- [Home Assistant Suomi](https://www.facebook.com/groups/hasuomi/) - フィンランド語のFacebookグループ。
- [HACF Forum](https://forum.hacf.fr) - フランス語圏の団体HACF（Home Assistant Communauté Française）のディスカッションフォーラム。
- [HACF Discord](https://discord.com/invite/PaZFEjX) - HACFコミュニティが運営するフランス語のDiscord。
- [Home Assistant DE](https://t.me/home_assistant_de) - 相談、ヒント、サポートを扱うドイツ語のTelegramグループ。
- [simon42 Community Forum](https://community.simon42.com/) - スマートホームの話題を扱うドイツ語フォーラム。
- [Home Assistant GR](https://www.facebook.com/groups/472308593754940/) - ギリシャ語のFacebookグループ。
- [Home-Assistant.io Israel](https://www.facebook.com/groups/303751386650107/) - ヘブライ語のFacebookグループ。
- [Home Assistant Hungary](https://www.facebook.com/groups/HomeAssistantHU/) - ハンガリー語のFacebookグループ。
- [Home Assistant Italia](https://t.me/HomeAssistantItalia) - アイデアやプロジェクトを共有するイタリア語のTelegramグループ。
- [HassioHelp](https://t.me/HassioHelp) - トラブルシューティングとサポートを扱うイタリア語のTelegramグループ。
- [Home Assistant Japan](https://www.facebook.com/groups/homeassistantjapan/) - 日本語のFacebookグループ。
- [HomeAssistant Cafe](https://cafe.naver.com/koreassistant) - Naver上の韓国語コミュニティ。
- [Home Assistant Norge](https://www.facebook.com/groups/680252689011262/) - ノルウェー語のFacebookグループ。
- [Home Assistant Polska](https://www.facebook.com/groups/homeassistantpolska/) - ポーランド語のFacebookグループ。
- [CPHA Forum](https://forum.cpha.pt/) - Comunidade Portuguesa de Home Assistantが運営するポルトガル語フォーラム。
- [Home Assistant Romania](https://www.facebook.com/groups/HomeAssistantRomania/) - ルーマニア語のFacebookグループ。
- [Home Assistant RU Telegram](https://t.me/HomeAssistantRU) - ロシア語のTelegramグループ。
- [Domotica en casa](https://foro.domoticaencasa.es/) - ホームオートメーション愛好家向けのスペイン語フォーラム。
- [Svenska Home Assistant-gruppen](https://www.facebook.com/groups/737654973088984/) - スウェーデン語のFacebookグループ。
- [Taiwan Home Assistant](https://www.facebook.com/groups/151166072456061/) - 繁体字中国語のFacebookグループ。
- [Home Assistant Thailand](https://www.facebook.com/groups/769724336851998/) - タイ語のFacebookグループ。

### コミュニティプロジェクトの交流先 <a id="-コミュニティプロジェクト周辺--around-community-projects"></a>

このリストの他の箇所に掲載されているコミュニティプロジェクトが運営するDiscordサーバー、フォーラム、チャットです。プロジェクト名のアルファベット順で並んでいます。

- [AppDaemon Discord](https://discord.gg/sgSr79jW5x) - Home Assistant本体と並行して動作するPython自動化フレームワークのサポート。
- [ESPHome Discord](https://discord.gg/KhAMKrd) - ESPベースのDIYデバイスと、そのYAMLファームウェアのサポート。
- [Frigate Discussions](https://github.com/blakeblackshear/frigate/discussions) - ローカルNVR・物体検出プロジェクトのGitHub Discussions。
- [HACS Discord](https://discord.gg/apgchf8) - Home Assistant Community Storeのサポート。
- [Music Assistant Discord](https://discord.gg/kaVm8hGpne) - 複数の部屋で音楽を再生するサーバーのチャット。
- [NetDaemon Discord](https://discord.gg/K3xwfcX) - C# / .NETによる自動化の実装支援。
- [Tasmota Discord](https://discord.gg/Ks2Kzd4) - 多くのSonoff・eWeLinkデバイスを動かすESPファームウェアのチャット。
- [Z-Wave JS Discord](https://discord.gg/HFqcyFNfWd) - Z-Wave統合で使われるZ-Wave JSスタックのチャット。
- [Zigbee2MQTT Discussions](https://github.com/Koenkk/zigbee2mqtt/discussions) - 原文で広く使われると紹介されているZigbeeブリッジのGitHub Discussions。

### その他のコミュニティ <a id="-その他のコミュニティスペース--other-community-spaces"></a>

特定の言語やプロジェクトに結びついていない独立したグループです。

- [Home Assistant International Telegram](https://t.me/home_assistant_international) - 国際的なコミュニティに向けた英語のTelegramグループ。
- [r/homeautomation](https://www.reddit.com/r/homeautomation/) - あらゆるハブ、プロトコル、プロジェクトのアイデアを扱う、プラットフォームに依存しないホームオートメーションのsubreddit。原文では同種のものの中で最大規模と紹介。
- [r/smarthome](https://www.reddit.com/r/smarthome/) - 購入の相談、レビュー、導入時の質問を扱う、製品中心のスマートホームsubreddit。
- [r/selfhosted](https://www.reddit.com/r/selfhosted/) - セルフホストソフトウェアのsubreddit。ホームオートメーションやローカル制御とも話題が大きく重なる。
- [Home Assistant on Lemmy](https://lemmy.world/c/homeassistant) - プライバシーを重視するユーザー向けの、Fediverse上のsubreddit代替コミュニティ。
- [Home Automation on Lemmy](https://lemmy.world/c/homeautomation) - Fediverse上の一般的なホームオートメーションコミュニティ。
- [Everything Smart Home Discord](https://discord.com/invite/everythingsmarthome) - Lewis Barclayが運営する、スマートホーム全般のディスカッションサーバー。
- [Home Operations Discord](https://discord.com/invite/home-operations) - GitOpsとKubernetesでスマートホームの基盤を管理する人向け。
- [#Home-Assistant on Matrix](https://matrix.to/#/#Home-Assistant:matrix.org) - オープンな分散型プロトコルを使う、リアルタイムチャット用のMatrixルーム。
- [CocoonTech](https://cocoontech.com/) - 歴史の長いホームオートメーションフォーラムの一つ。固定原文では、20年以上にわたりあらゆるプラットフォームを扱っていると紹介。

## 公開設定例 <a id="公開設定例-public-configurations"></a>

サーモスタットのスケジュール、在室検知、自動化などを参考にできる、GitHub上で公開されたHome Assistantの設定一式です。レシピ集のように、自分の構成に役立つ部分を取り入れられます。

- [Carlo Costanzo](https://github.com/CCOSTAN/Home-AssistantConfig#logo) - 原文では、おそらく最も詳しく文書化された設定として紹介（スター数5,208）。
- [DubhAd](https://github.com/DubhAd/Home-AssistantConfig) - 別名Tinkerer。設定ファイルを公開（スター数688）。
- [geekofweek](https://github.com/geekofweek/homeassistant) - 300件を超える自動化（スター数1,477）。
- [Alok Saboo](https://github.com/arsaboo/homeassistant-config) - 別名arsaboo。原文では定期的に更新されていると紹介（スター数1,953）。
- [Franck Nijhof](https://github.com/frenck/home-assistant-config) - Home Assistant OSベースで、他の設定例とは大きく異なる構造（スター数2,009）。
- [Klaas Schoute](https://github.com/klaasnicolaas/Student-homeassistant-config) - Home Assistant OSをベースに、Intel NUC、Ubuntu Server、Dockerを使用。原文では定期的に更新されていると紹介（スター数223）。
- [Ryan Warner](https://github.com/rwarner/Home-Assistant-Config) - Ubuntu上のDockerで動くHome Assistantの設定。Home Assistantの初期から保守され、原文では詳しい文書と定期的な更新があると紹介（スター数5）。

## カスタム統合 <a id="カスタム統合-custom-integrations"></a>

コミュニティが作成した、Home Assistantに標準では含まれない統合です。原文では、HACSから数クリックで導入できると説明されています。

### AI・LLM <a id="-aillm--aillms"></a>

Home Assistantを大規模言語モデルに接続し、デバイス情報の読み取り、ダッシュボードの作成、自動化の記述、カメラ映像の説明に利用できます。

- [LLM Vision](https://github.com/valentinfrlch/ha-llmvision) - カメラのスナップショットへの説明文付加、状況の要約、特定イベントへの反応により、自動化へ画像認識を追加（スター数1,373）。
- [AI Automation Suggester](https://github.com/ITSpecialist111/ai_automation_suggester) - エンティティを調べ、AIプロバイダー（OpenAI、Anthropic、Google、Groq、Ollama）へ構成に合った自動化の提案を求め、通知で表示（スター数749）。

### 照明 <a id="-照明--lighting"></a>

照明へ追加するエフェクト、スケジュール、動作制御を扱います。

- [Circadian Lighting](https://github.com/claytonjn/hass-circadian_lighting) - 色を変えられる照明の色温度を、1日を通じて自然に変化する空の色温度に徐々に同期（スター数886）。
- [Adaptive Lighting](https://github.com/basnijholt/adaptive-lighting) - 太陽の位置に応じて、照明の明るさと色温度を徐々に調整（スター数3,324）。
- [Govee](https://github.com/LaggAt/hacs-govee) - GoveeのWi-Fi照明・電球をローカル制御。エフェクトとカラーモードにも対応（スター数352）。

### 空調 <a id="️-空調-️-climate"></a>

標準機能を拡張するサーモスタット、快適性を測るセンサー、暖房・換気・空調（HVAC）の統合です。

- [Better Thermostat](https://github.com/KartoffelToby/better_thermostat) - サーモスタット式ラジエーターバルブ向けに、窓の開閉検知、暖房カーブ、部屋ごとの快適性プロファイルを備えるサーモスタット（スター数1,443）。
- [Versatile Thermostat](https://github.com/jmcollin78/versatile_thermostat) - プリセット、窓の開閉検知、動きに応じた快適性制御、在室検知を備える多機能サーモスタット（スター数1,075）。
- [Midea Air Appliances LAN](https://github.com/nbogojevic/homeassistant-midea-air-appliances-lan) - Mideaのエアコン、除湿機などの家電をLAN経由でローカル制御（スター数460）。
- [Smart Autotune Thermostat (SAT)](https://github.com/Alexwijn/SAT) - OpenTherm、ESPHome、MQTTゲートウェイと通信する自己調整型サーモスタット。時間とともに家に合うよう暖房カーブを調整（スター数246）。
- [Dual Smart Thermostat](https://github.com/swingerman/ha-dual-smart-thermostat) - 標準の汎用サーモスタットを拡張し、暖房・冷房の個別制御、床温度の制限、湿度制御に対応（スター数225）。

### エネルギー・太陽光 <a id="-エネルギー太陽光--energysolar"></a>

太陽光発電インバーター、スマートメーター、家庭用蓄電池、電力料金プランをHome Assistantへ取り込み、エネルギーダッシュボードで使います。

- [Powercalc](https://github.com/bramstroker/homeassistant-powercalc) - 照明などの機器の消費電力を推定。消費電力を自ら報告しない機器にも対応（スター数1,503）。
- [Anker Solix](https://github.com/thomluther/ha-anker-solix) - Anker Solixのバルコニー用太陽光発電システム、蓄電池、ポータブル電源をエネルギーダッシュボードへ追加。現在の状態、履歴、充電制御に対応（スター数1,005）。
- [Octopus Energy](https://github.com/BottlecapDave/HomeAssistant-OctopusEnergy) - Octopus Energyの料金、スマートメーターの検針値、インテリジェント制御の割り当て時間帯、節電セッションをダッシュボードへ取り込み（スター数940）。
- [Huawei Solar](https://github.com/wlcrs/huawei_solar) - Huaweiの太陽光発電インバーターと家庭用蓄電池をModbusで読み取り・制御。系統電力からの充電時間帯にも対応（スター数899）。
- [SolaX Modbus](https://github.com/wills106/homeassistant-solax-modbus) - SolaX、Solinteg、Sofar、GrowattなどのインバーターとModbusで通信。読み取り専用モードとインバーター制御モードに対応（スター数490）。
- [Solarman](https://github.com/davidrapan/ha-solarman) - Solarmanのスティック型ロガーを通じて、Deye、SofarなどSolarmanブランドのインバーターを読み取り（スター数483）。
- [OCPP](https://github.com/lbbrhzn/ocpp) - OCPP対応のEV充電器をエネルギーダッシュボードへ追加。充電開始・停止とセッションごとの計量に対応（スター数372）。
- [Solcast PV Forecast](https://github.com/BJReplay/ha-solcast-solar) - Solcastの太陽光発電予測を取得し、1日の予測発電量と直近の時間帯を反映した信頼区間を表示（スター数420）。
- [EPEX Spot](https://github.com/mampfes/ha_epex_spot) - 時間ごとのEPEXスポット電力価格をダッシュボードへ取り込み、電力消費を最も安い時間帯へ移すために利用（スター数310）。
- [ENTSO-e Day-Ahead Prices](https://github.com/JaccoR/hass-entso-e) - ENTSO-e Transparency Platformから、欧州の大半の国の翌日分の電力価格を取得（スター数265）。
- [SolarEdge Modbus Multi](https://github.com/WillCodeForCats/solaredge-modbus-multi) - SolarEdgeのインバーター、メーター、蓄電池をModbus/TCPでローカルに読み取り。複数インバーターと三相に対応（スター数303）。
- [FoxESS Modbus](https://github.com/nathanmarlor/foxess_modbus) - FoxESSの太陽光発電インバーターへModbusで直接接続。クラウドを経由せず、状態の取得と制御をリアルタイムに実行（スター数308）。
- [Victron GX](https://github.com/sfstar/hass-victron) - Victron GXデバイスからModbus/TCPでデータを読み取り、インバーター、蓄電池、太陽光充電器、AC入力を公開（スター数317）。
- [Solis Sensor](https://github.com/hultenvp/solis-sensor) - SolisCloudの太陽光発電監視ポータルを通じて、Solisインバーターの発電・蓄電池・系統電力データをエネルギーダッシュボードへ取り込み（スター数320）。
- [GoodWe Inverter](https://github.com/mletenay/home-assistant-goodwe-inverter) - GoodWeの太陽光発電インバーターからローカルネットワーク経由で現在のデータを取得し、エネルギーダッシュボードで利用（スター数213）。
- [Solar Optimizer](https://github.com/jmcollin78/solar_optimizer) - 太陽光発電の余剰電力に応じて家電を起動・停止し、売電に回す代わりに自家消費（スター数228）。
- [Dynamic Energy Cost](https://github.com/martinarva/dynamic_energy_cost) - Nord PoolやEPEXなどの変動価格データを使い、現在と累積の電気料金を追跡（スター数189）。
- [Energi Data Service](https://github.com/MTrab/energidataservice) - Energi Data Service APIからデンマークのスポット電力価格を取得し、料金を考慮した自動化で利用（スター数275）。

### カメラ・映像 <a id="-カメラ映像--camerasvideo"></a>

Home Assistantが標準対応していないカメラブランドや映像ソースを接続できます。

- [HASS Aarlo](https://github.com/twrecked/hass-aarlo) - 非同期のArlo統合。ArloのWebサイトに似た機能で、すべてのベースステーション、カメラ、ドアベルのイベントと状態を監視（スター数470）。
- [WebRTC Camera](https://github.com/AlexxIT/WebRTC) - IPカメラのRTSPストリームをWebRTCまたはMSEでリアルタイム表示。パン・ズーム制御に対応（スター数2,134）。
- [Frigate](https://github.com/blakeblackshear/frigate-hass-integration) - ローカルで物体検出を行うFrigate NVRを、ダッシュボード、アラート、スナップショットへ統合（スター数1,181）。
- [Eufy Security](https://github.com/fuatakgun/eufy_security) - Eufy Securityのカメラ、ドアベル、ベースステーションを管理。ライブ映像とイベント通知に対応（スター数1,338）。
- [Tapo Control](https://github.com/JurajNyiri/HomeAssistant-Tapo-Control) - TP-Link Tapoカメラを制御。PTZ、動きの検知イベント、ライブRTSPストリームに対応（スター数1,912）。
- [Dahua](https://github.com/rroller/dahua) - Dahuaのカメラとドアベルを接続し、動きの検知イベント、スナップショット、サイレン、PTZ制御に対応（スター数541）。

### セキュリティ・警報 <a id="-セキュリティ警報--securityalarm"></a>

警戒の開始・解除、ユーザーコード、ゾーン、緊急操作を備える警報システムとしてHome Assistantを使います。

- [Alarmo](https://github.com/nielsfaber/alarmo) - 警戒の開始・解除、ユーザーコード、ゾーン、緊急モードに対応する、使いやすい警報システム（スター数2,148）。
- [Keymaster](https://github.com/FutureTense/keymaster) - Z-Waveスマートロックのユーザーコードを管理。ユーザー別スケジュール、使い捨てコード、通知に対応（スター数334）。

### 音声・メディア再生 <a id="-音声メディア再生--voicemedia-playback"></a>

音声対応スピーカーやメディアプレーヤーへ命令を送り、これらが拾った音や再生している内容をHome Assistantへ中継できます。

- [Spotcast](https://github.com/fondberg/spotcast) - 待機中のChromecastでSpotifyの再生を開始し、Spotify Connectデバイスも制御（スター数809）。
- [Alexa Media Player](https://github.com/alandtse/alexa_media_player) - Amazon Alexaデバイスでアナウンスやメディア再生を行い、デバイスの状態を自動化へ取り込み（スター数1,948）。
- [YandexStation](https://github.com/AlexxIT/YandexStation) - Aliceを通じてYandex Stationスピーカーなどのスマートホーム機器を制御（スター数1,868）。
- [Yandex Smart Home](https://github.com/dext0r/yandex_smart_home) - 自分の機器をYandex AliceとYandexのスマートホームアプリへ公開（スター数1,066）。
- [View Assist Companion](https://github.com/msp1974/ViewAssist_Companion_App) - Android向けの補助アプリと統合。タブレットをハンズフリーの音声・ダッシュボード端末に変更（スター数374）。

### 自動車・EV充電 <a id="-自動車ev充電--carsev-charging"></a>

車の電池残量、位置、充電状態を追跡し、充電する場所や時間を制御します。

- [Kia Uvo & Hyundai Bluelink](https://github.com/Hyundai-Kia-Connect/kia_uvo) - EU、カナダ、米国のKia Connect（Uvo）・Hyundai Bluelink対応車を追跡・制御。充電、空調、施錠状態に対応（スター数870）。
- [Tesla](https://github.com/alandtse/tesla) - サードパーティーのログインアプリで取得したリフレッシュトークンを使い、Tesla車とPowerwallの充電、空調、位置、セキュリティ状態を追跡（スター数740）。
- [Volkswagen Carnet](https://github.com/robinostlund/homeassistant-volkswagencarnet) - Carnet対応のVolkswagen車の充電状態と空調の事前調整を追跡し、遠隔で施錠やクラクションを操作（スター数643）。
- [Audi Connect](https://github.com/audiconnect/audi_connect_ha) - Audi Connect API経由でAudi車を追跡。充電状態、航続距離、施錠、空調の事前調整に対応（スター数338）。
- [Polestar](https://github.com/pypolestar/polestar_api) - PolestarアプリのAPIを通じてPolestarのEVを読み取り、航続距離、充電、位置データを取得（スター数249）。
- [Stellantis Vehicles](https://github.com/andreadegiovine/homeassistant-stellantis-vehicles) - メーカーのAPIを通じてStellantis傘下の車両（Peugeot、Citroen、Fiat、Opel、Vauxhall、DS）を追加し、航続距離、施錠、空調を扱う（スター数231）。
- [evcc](https://github.com/marq24/ha-evcc) - evccインスタンスへ接続し、充電セッション、太陽光発電に合わせた充電、充電ポイントごとの状態を表示（スター数410）。
- [Easee EV Charger](https://github.com/nordicopen/easee_hass) - EaseeのEV充電器を追加。現在の充電状態、動的な負荷分散、セッションごとの計量に対応（スター数272）。
- [EV Smart Charging](https://github.com/jonasbkarlsson/ev_smart_charging) - 変動料金の最も安い時間帯を利用するEV充電スケジュールを計画。大半の充電器と料金センサーに対応（スター数297）。

### 在宅検知・位置情報 <a id="-在宅検知位置情報--presencelocation"></a>

誰が在宅していてどこにいるかを把握します。原文では、多くの場合、標準のデバイストラッカーより正確に検知できると説明されています。

- [iCloud3](https://github.com/gcobb321/icloud3) - iCloudデバイストラッカーコンポーネントに多くの機能を追加した拡張版（スター数855）。
- [iPhone Detect](https://github.com/mudape/iphonedetect) - UDPプローブへの応答を監視し、ローカルWi-Fi上のiPhoneなどの携帯電話をアプリなしで検出（スター数625）。
- [Flightradar24](https://github.com/AlexandrErohin/home-assistant-flightradar24) - Flightradar24を使い、自宅周辺で設定した矩形範囲内を飛行する航空機を追跡（スター数468）。
- [Places](https://github.com/custom-components/places) - OpenStreetMapでデバイストラッカーの座標から地名を求め、座標値の代わりに「スーパーマーケットにいる」といった状態を自動化に利用（スター数191）。

### 掃除機 <a id="-掃除機--vacuums"></a>

特定のロボット掃除機を制御し、標準機能の範囲を超えてマップデータを表示できます。

- [Xiaomi Cloud Map Extractor](https://github.com/PiotrMachowski/Home-Assistant-custom-components-Xiaomi-Cloud-Map-Extractor) - Xiaomi（Roborock/Viomi/Roidmi/Dreame）の掃除機のマップを、root化せずにリアルタイム表示（スター数1,405）。
- [Dreame Vacuum](https://github.com/Tasshack/dreame-vacuum) - Dreameロボット掃除機のマップを全面的に扱い、進入禁止エリアや部屋を指定した清掃に対応（スター数1,999）。

### Bluetooth・BLE <a id="-bluetoothble--bluetoothble"></a>

Bluetoothでデータを発信するセンサーを読み取り、Bluetooth自体を部屋単位の在室検知にも利用します。

- [BLE Monitor](https://github.com/custom-components/ble_monitor) - Xiaomi MiBeacon、Govee、ATC、Inkbird、Qingpingなど、多数のBLEセンサーが発信するデータを受動的に読み取り（スター数2,214）。
- [Bermuda](https://github.com/agittins/bermuda) - 複数のESPHome受信機でBLE信号を三角測量し、部屋単位で在室を検知（スター数1,798）。
- [BLE Battery Management Systems](https://github.com/patman15/BMS_BLE-HA) - さまざまなメーカーのBluetooth Low Energy対応バッテリー管理システム（BMS）を読み取り、セル別電圧、バランシング、SOCを公開（スター数328）。
- [EcoFlow BLE](https://github.com/rabits/ha-ef-ble) - EcoFlowのポータブル電源とアクセサリーをBluetooth Low Energyで接続。クラウドアカウントは不要（スター数304）。

### 電池監視 <a id="-バッテリー監視--battery-monitoring"></a>

機器の電池を監視し、使い切る前に警告を受け取れます。

- [Battery Notes](https://github.com/andrew-codechimp/HA-Battery-Notes) - 各デバイスに電池の種類と本数を記録し、交換、電池残量低下の警告、履歴を追跡（スター数1,105）。

### ベンダー・ブランド <a id="️-ベンダーブランド-️-vendorbrand"></a>

特定メーカーの機器をHome Assistantへ追加します。原文では、標準統合より多くの機能や優れたローカル制御を得られる場合が多いと説明されています。

- [SmartIR](https://github.com/smartHomeHub/SmartIR) - Broadlinkの赤外線を使ってデバイスを統合（スター数2,733）。
- [Sonoff LAN](https://github.com/AlexxIT/SonoffLAN) - 純正eWeLinkファームウェアを使うSonoff機器を、LANまたはクラウド、あるいはその両方で制御（スター数3,257）。
- [Xiaomi MIoT](https://github.com/al-one/hass-xiaomi-miot) - MIoT-specプロトコルを使い、Xiaomiのスマートホーム機器をWi-Fi、BLE、Zigbee経由で自動統合（スター数5,911）。
- [Xiaomi Gateway 3](https://github.com/AlexxIT/XiaomiGateway3) - Xiaomi Multimode GatewayとAqara Hub E1をLAN経由でローカル制御。クラウド通信は不要（スター数2,757）。
- [Midea AC LAN](https://github.com/wuwentao/midea_ac_lan) - Mideaのエアコン、ヒートポンプなどのM-Smart機器をローカル制御（スター数1,684）。
- [SmartThinQ Sensors](https://github.com/ollo69/ha-smartthinq-sensors) - SmartThinQでLG家電（洗濯機、乾燥機、エアコン、冷蔵庫）を接続し、詳細な状態取得と遠隔起動に対応（スター数1,310）。
- [Home Connect Alt](https://github.com/ekutner/home-connect-hass) - Bosch、Siemens、NEFF、Gaggenauのオーブン、食器洗い機、洗濯機向けのHome Connect代替統合。公式統合より詳しい状態を取得（スター数970）。
- [Tapo Devices](https://github.com/petretiandrea/home-assistant-tapo-p100) - TP-Link Tapoのプラグ、スイッチ、電球、電力監視をLAN経由で統合。P100、P105、P110、L510、L530、L900に対応（スター数954）。
- [Meross](https://github.com/albertogeniola/meross-homeassistant) - Merossのプラグ、スイッチ、電球、ガレージドア開閉機、加湿器をMeross IoTクラウド経由で制御（スター数848）。
- [HomeMatic IP Local](https://github.com/SukramJ/homematicip_local) - OpenCCUまたはRaspberryMatic経由でHomeMatic・HomeMatic IP機器をローカル制御。クラウド通信は不要（スター数572）。
- [Nest Protect](https://github.com/iMicknl/ha-nest-protect) - Nest Protectの煙・一酸化炭素警報器の電池状態、最近のイベント、部屋ごとの安全状態を追跡（スター数468）。
- [Meross LAN](https://github.com/krahabb/meross_lan) - Merossのプラグ、スイッチ、照明、ガレージドア開閉機をローカル制御し、必要な場合だけクラウドへ切り替え（スター数718）。
- [LocalTuya](https://github.com/rospogrigio/localtuya) - Tuya機器をLAN経由でローカル制御。クラウド通信は不要で、プラグ、照明、空調、カバー類に対応（スター数3,857）。
- [SamsungTV Smart](https://github.com/ollo69/ha-samsungtv-smart) - Samsungテレビの拡張統合。SmartThings、入力切り替え、アプリ起動、アプリ別アイコンに対応（スター数652）。
- [Dyson](https://github.com/libdyson-wg/ha-dyson) - Wi-Fi接続のDysonの扇風機、空気清浄機、加湿器を、ローカルネットワーク経由で各モードまで制御（スター数418）。
- [PetKit](https://github.com/RobertD502/home-assistant-petkit) - メーカークラウド経由でPetKitの給餌器、給水器、猫用トイレを追加し、詳細な状態と給餌を制御（スター数340）。
- [Miele](https://github.com/astrandb/miele) - Mieleの洗濯機、乾燥機、食器洗い機、オーブン、コーヒーマシンを接続し、プログラムの詳細な状態を取得（スター数267）。
- [Home Connect Local](https://github.com/chris-mc1/homeconnect_local_hass) - Bosch、Siemens、NEFF、Gaggenauの家電とローカルネットワークで直接通信。クラウドを経由しない（スター数390）。
- [hOn](https://github.com/gvigroux/hon) - Haier、Candy、Hooverの家電を公式hOnクラウド経由で追加し、アプリが表示するすべての状態とパラメーターを公開（スター数253）。
- [PETLIBRO](https://github.com/jjjonesjr33/petlibro) - PETLIBROのスマート給餌器と給水器を追加し、給餌スケジュール、給餌イベント、電池残量を取得（スター数319）。

### 自動化ツール <a id="️-自動化ツール-️-automation-tooling"></a>

自動化の記述、デバッグ、保守を支援するツールです。

- [The Watchman](https://github.com/dummylabs/thewatchman) - 設定ファイルで参照されている、存在しないエンティティやサービスを追跡（スター数655）。
- [Browser Mod](https://github.com/thomasloven/hass-browser_mod) - 各ブラウザーを制御可能なエンティティに変更。カードのポップアップ、ビューの移動、音の再生、ダッシュボードの閲覧者の検出に対応（スター数1,748）。
- [Pyscript](https://github.com/custom-components/pyscript) - YAMLの代わりにPythonで自動化とテンプレートを記述（スター数1,159）。
- [Spook](https://github.com/frenck/spook) - UIが通常表示しない情報を確認できる、センサー、サービス、テンプレートのツール集（スター数1,138）。
- [Scheduler Component](https://github.com/nielsfaber/scheduler-component) - カード形式のUIで任意のエンティティの週間スケジュールを作成。YAMLは不要（スター数883）。
- [Node-RED Companion](https://github.com/zachowj/hass-node-red) - node-red-contrib-home-assistant-websocket向けの補助コンポーネント。サービス、センサー、バイナリセンサーをダッシュボードへ公開（スター数573）。
- [Magic Areas](https://github.com/jseidl/magic-areas) - 部屋ごとの在室・空調・メディアのエリアエンティティを自動作成。動きで起動するシーンと明暗検知に対応（スター数493）。
- [Auto Backup](https://github.com/jcwillox/hass-auto-backup) - 独自スケジュール、保持規則、暗号化、遠隔ストレージへのアップロードに対応する自動バックアップ（スター数462）。
- [Multiscrape](https://github.com/danieldotnl/ha-multiscrape) - 1回のリクエストでページから複数の値（HTML、XML、JSON）を取得し、センサーへ変換（スター数437）。
- [Retry Service](https://github.com/amitfin/retry) - 任意のサービス呼び出しをラップし、一時的な失敗時に指数バックオフで自動再試行（スター数163）。

### 地域・家庭 <a id="️-地域家庭-️-civichousehold"></a>

ごみ収集日、学校の休業日、交通、気象警報などの地域サービスを、センサーやカレンダーとして使います。

- [Mail and Packages](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) - 既存のメールアカウントから、到着予定・配達済み荷物のセンサー情報とUSPS Informed Deliveryのプレビュー画像を取得（スター数844）。
- [Irrigation Unlimited](https://github.com/rgc99/irrigation_unlimited) - 複数ゾーンの灌水コントローラー。スケジュール、実行順序、天候に応じた調整、手動実行に対応（スター数435）。
- [Moonraker (Klipper)](https://github.com/marcolivierarsenault/moonraker-home-assistant) - Moonraker（Mainsail、Fluidd）を使うKlipperベースの3Dプリンターの印刷進捗、温度、Webカメラのスナップショットを追跡（スター数469）。
- [Smart Irrigation](https://github.com/jeroenterheerdt/HAsmartirrigation) - 蒸発散量、最近の降水量、天気予報を基に、各灌水ゾーンの稼働時間を計算（スター数509）。
- [UK Bin Collection](https://github.com/robbrad/UKBinCollectionData) - 英国各自治体のごみ収集日程を、ごみの種類ごとの次回収集日センサーとして公開（スター数328）。

### ネットワーク・認証 <a id="-ネットワーク認証--networkauthentication"></a>

シングルサインオンでHome Assistantへログインし、トンネル経由で通信したり、ネットワーク機器をダッシュボードへ取り込んだりできます。

- [OIDC Auth](https://github.com/christiaangoossens/hass-oidc-auth) - Authelia、Authentik、Keycloak、Pocket IDなど、任意のOpenID Connectプロバイダーでシングルサインオン（スター数936）。
- [OpenID Connect Auth](https://github.com/cavefire/hass-openid) - Authelia、Keycloak、Authentikなど、任意のOpenID Connectプロバイダーを通じてログイン（スター数201）。
- [TP-Link Router](https://github.com/AlexandrErohin/home-assistant-tplink-router) - TP-Link・Mercusysルーターを管理。センサー、再起動ボタン、スイッチ、クライアント別デバイス追跡に対応（スター数348）。
- [Mikrotik Router](https://github.com/tomaae/homeassistant-mikrotik_router) - Mikrotikのルーターとアクセスポイントをダッシュボードへ追加。クライアント別通信量、DHCPリース、PoE制御に対応（スター数453）。

### 連携・複数インスタンス <a id="-連携複数インスタンス--federationmulti-instance"></a>

複数のHome Assistantインスタンスをつなぎ、別々の家の間でエンティティを共有したり、インスタンス間で中継したりできます。

- [Remote Home Assistant](https://github.com/custom-components/remote_homeassistant) - 複数のインスタンスをつなぎ、エンティティ、サービス、イベントを相互に受け渡し（スター数1,232）。

### ログ・分析 <a id="-ログ分析--logginganalytics"></a>

Home Assistantのデータを外部システムへ送り、長期保存、より詳しいダッシュボード、分析に利用します。

- [Elasticsearch](https://github.com/legrego/homeassistant-elasticsearch) - Elasticsearchへイベントを送信（スター数165）。
- [TrueNAS](https://github.com/tomaae/homeassistant-truenas) - TrueNAS Scale・Coreの統計、データセット、仮想マシン、アプリを、センサーとスイッチへ取り込み（スター数370）。
- [Monitor Docker](https://github.com/ualex73/monitor_docker) - リモートを含むホスト上の各DockerコンテナのCPU、メモリ、ネットワーク、稼働時間を監視し、自動化から起動・停止（スター数401）。
- [Unraid](https://github.com/ruaan-deysel/ha-unraid) - Unraid NASのCPU、メモリ、ディスク、仮想マシン、Dockerコンテナを監視・制御（スター数240）。

## ダッシュボードカード <a id="ダッシュボードカード-dashboard-cards"></a>

ダッシュボードへ追加できるLovelaceプラグインです。主な用途ごとに分類しています。

### ダッシュボードフレームワーク <a id="-ダッシュボードフレームワーク--dashboard-frameworks"></a>

Mushroom、Bubble Card、Floorplanなど、ダッシュボードの見た目や操作感を変える一式のカード集です。

- [Mushroom](https://github.com/piitaya/lovelace-mushroom) - 既存のダッシュボードへ追加できるカード集。柔らかな印象で、モバイルを優先したデザイン（スター数5,018）。
- [Bubble Card](https://github.com/Clooos/Bubble-Card) - ポップアップを取り入れ、細かくカスタマイズできる、シンプルなカード集（スター数4,323）。
- [Floorplan](https://github.com/ExperienceLovelace/ha-floorplan) - 家のSVG図にエンティティを配置し、状態の変化に応じてアニメーションを表示（スター数1,553）。
- [UI Lovelace Minimalist](https://github.com/UI-Lovelace-Minimalist/UI) - すべてのビューを統一したシンプルな見た目にできるダッシュボード集。用意済みのカードとボタンカードライブラリーを含む（スター数2,036）。

### レイアウト支援 <a id="-レイアウト支援--layout-helpers"></a>

他のカードの配置や表示方法を変えます。積み重ね、折りたたみ、条件付き表示、スタイル変更、テンプレートに利用できます。

- [Auto-Entities Card](https://github.com/thomasloven/lovelace-auto-entities) - エンティティを動的に追加（スター数1,756）。
- [Card Modder](https://github.com/thomasloven/lovelace-card-mod) - Lovelaceカードのスタイルを変更（スター数1,722）。
- [Restriction Card](https://github.com/iantrich/restriction-card) - 内側に配置したLovelaceカードに制限を設定するカード（スター数317）。
- [Config Template Card](https://github.com/iantrich/config-template-card) - Lovelaceでテンプレートを使用（スター数552）。
- [Button card](https://github.com/custom-cards/button-card) - エンティティ用の、細かくカスタマイズできるボタン（スター数2,456）。
- [Expander Card](https://github.com/Alia5/lovelace-expander-card) - 他のカードをヘッダーの下にまとめ、展開・折りたたみで表示を切り替えるカード（スター数415）。
- [Layout Card](https://github.com/thomasloven/lovelace-layout-card) - ダッシュボードのカード配置を細かく制御。組積状のメイソンリーレイアウトやグリッドに対応（スター数1,246）。
- [Vertical Stack In Card](https://github.com/ofekashery/vertical-stack-in-card) - 複数のカードを、1つの枠線を共有するカードへまとめる（スター数968）。
- [Fold Entity Row](https://github.com/thomasloven/lovelace-fold-entity-row) - ヘッダーをクリックするまで追加のエンティティを隠す、折りたたみ可能な行（スター数705）。
- [State Switch](https://github.com/thomasloven/lovelace-state-switch) - エンティティの状態、時間帯、閲覧ユーザーに応じてカードを動的に切り替え（スター数463）。
- [Swipe Navigation](https://github.com/zanna-37/hass-swipe-navigation) - モバイルのスワイプ操作でダッシュボードのビューを切り替え（スター数543）。
- [Custom Card Features](https://github.com/Nerwyn/custom-card-features) - タイルカードにボタン、ドロップダウン、スライダー、スピンボックス、セレクター、トグルを追加し、任意のサービスを呼び出し（スター数426）。
- [Custom Sidebar](https://github.com/elchininet/custom-sidebar) - ユーザーや機器に合わせてサイドバーを変更。ページの非表示、並べ替え、見た目の変更に対応（スター数278）。
- [Paper Buttons Row](https://github.com/jcwillox/lovelace-paper-buttons-row) - アクションの呼び出し、触覚フィードバック、状態に応じたスタイル変更に対応する、細かく設定できるボタン行（スター数359）。
- [Streamline Card](https://github.com/brunosabot/streamline-card) - カードのテンプレートを一度定義し、異なるエンティティに使い回す。YAMLのコピー・貼り付けを省略（スター数258）。

### チャート・グラフ <a id="-チャートグラフ--chartsgraphs"></a>

センサーデータの時間変化を、ゲージ、折れ線グラフ、棒グラフ、サンキー図などで可視化します。

- [Mini Graph Card](https://github.com/kalkih/mini-graph-card) - シンプルなセンサーグラフカード（スター数3,830）。
- [Canvas Gauge Card](https://github.com/custom-cards/canvas-gauge-card) - canvas-gauges.comのゲージを使用（スター数216）。
- [Dual Gauge Card](https://github.com/custom-cards/dual-gauge-card) - 1つのカードに2つのゲージを表示（スター数220）。
- [ApexCharts Card](https://github.com/RomRider/apexcharts-card) - ApexChartsJSを使うグラフ・チャート。タイムライン、複数軸、イベントマーカーに対応（スター数1,797）。
- [Sankey Chart](https://github.com/MindFreeze/ha-sankey-chart) - 家庭内の電力、水などの流れを可視化するサンキー図（スター数660）。
- [Modern Circular Gauge](https://github.com/selvalt7/modern-circular-gauge) - 滑らかなアニメーション、色の変化点、テンプレートに対応する円形ゲージカード（スター数269）。
- [Flex Table Card](https://github.com/custom-cards/flex-table-card) - 任意の列、正規表現に一致するエンティティ、行別のスタイルを設定できる表カード。AppDaemonやテンプレートを使う内容に利用（スター数268）。

### 状態・情報行 <a id="-状態情報行--statusinfo-rows"></a>

エンティティカード形式の一覧へ、コンパクトな行でより多くの情報を表示します。

- [Slider Entity Row](https://github.com/thomasloven/lovelace-slider-entity-row) - Lovelaceのエンティティカードにスライダーを追加。照明の明るさなどを調整（スター数912）。
- [Battery State Card](https://github.com/maxwroc/battery-state-card) - 機器と電池残量を一覧表示し、並べ替えと色分けを適用（スター数1,246）。
- [Scheduler Card](https://github.com/nielsfaber/scheduler-card) - ダッシュボードから、任意のエンティティの週間スケジュールを作成・編集（スター数1,236）。
- [Entity Progress Card](https://github.com/francois-le-ko4la/lovelace-entity-progress-card) - 任意の数値エンティティ向けのプログレスバーカード。しきい値、グラデーション、テンプレートによるアイコンに対応（スター数257）。
- [Vehicle Status Card](https://github.com/ngocjohn/vehicle-status-card) - 燃料・充電残量、航続距離、ドア、施錠状態、カスタマイズできる車両画像を表示（スター数262）。
- [Timer Bar Card](https://github.com/rianadon/timer-bar-card) - 任意のタイマーエンティティ向けのプログレスバーカード。カウントダウン、残り時間の書式設定、色の変更に対応（スター数578）。

### 天気カード <a id="️-天気カード-️-weather-cards"></a>

好みの見た目で天気を表示するウィジェットです。

- [Weather Chart Card](https://github.com/mlamberts78/weather-chart-card) - 時間ごとの予報をチャートで示す天気カード。レイアウトを変更可能（スター数435）。
- [Hourly Weather](https://github.com/decompil3d/lovelace-hourly-weather) - 今日の時間ごとの予報を色付きの横長バーで示し、天候が変わる時間を一目で確認（スター数393）。
- [Weather Radar](https://github.com/Makin-Things/weather-radar-card) - 公開RainViewerタイルサービスを使う、アニメーション付きの雨雲レーダーカード。国全体や地域単位へのズームに対応（スター数384）。
- [Clock Weather Card](https://github.com/pkissling/clock-weather-card) - 日付、時刻、今後数日間の天気予報を、iOS風のレイアウトでまとめて表示（スター数841）。
- [Horizon Card](https://github.com/rejuvenate/lovelace-horizon-card) - 1日を通じた地平線に対する太陽の位置を表示。日の出、日の入り、薄明のマーカーに対応（スター数652）。

### メディアカード <a id="-メディアカード--media-cards"></a>

アルバムアート、再生キュー、部屋ごとの在室状態などを使い、メディアプレーヤーを操作します。

- [Mini Media Player](https://github.com/kalkih/mini-media-player) - シンプルなメディアプレーヤーカード（スター数1,701）。

### 空調カード <a id="️-空調カード-️-climate-cards"></a>

標準とは異なる見た目や操作感のサーモスタットカードへ置き換えられます。

- [Thermostat Card](https://github.com/ciotlosm/lovelace-thermostat-dark-card) - Nest Thermostat風の見た目を持つサーモスタット制御カード（スター数745）。
- [Simple Thermostat](https://github.com/nervetattoo/simple-thermostat) - よりシンプルで柔軟なサーモスタットカード（スター数806）。
- [Mini Climate](https://github.com/artem-sedykh/mini-climate-card) - 現在温度、目標温度、モード別制御を備えるコンパクトな空調カード。小さなダッシュボードやモバイル向け（スター数322）。

### エネルギーカード <a id="-エネルギーカード--energy-cards"></a>

太陽光発電量、系統からの買電、蓄電池の状態、消費電力の流れを可視化します。

- [Sunsynk Power Flow](https://github.com/slipx06/sunsynk-power-flow-card) - Sunsynk・Deyeインバーターの現在のエネルギーの流れを、インバーター画面と同じレイアウトで可視化（スター数384）。

### 照明カード <a id="-照明カード--lighting-cards"></a>

照明、色温度、エフェクトを操作する専用カードです。

- [RGB Light Card](https://github.com/bokub/rgb-light-card) - RGB照明を制御するカラフルなボタン（スター数563）。
- [Hue-Like Light Card](https://github.com/Gh61/lovelace-hue-like-light-card) - Philips Hueアプリ風のスタイルとレイアウトを持つ照明カード。シーンのグループ化と電球ごとの制御に対応（スター数368）。
- [Light Entity Card](https://github.com/ljmerza/light-entity-card) - 任意の照明・スイッチエンティティを制御するコンパクトなカード。明るさ、色温度、色の選択に対応（スター数282）。

### 地図・位置情報 <a id="️-地図位置情報-️-mapslocation"></a>

機器や人の位置を地図に示し、移動履歴や独自のオーバーレイも表示できます。

- [ha-map-card](https://github.com/nathan-gs/ha-map-card) - 移動履歴、独自のタイルレイヤー、タップ時のアクションを備えるLeafletベースの地図カード（スター数116）。

### カメラカード <a id="-カメラカード--camera-cards"></a>

オーバーレイ、操作部、イベントのタイムライン、別ウィンドウのビューアーなどでカメラ映像を表示します。

- [Advanced Camera Card](https://github.com/dermotduffy/advanced-camera-card) - タイムライン、ギャラリー、スナップショット、クリップ、イベントごとの再生に対応する多機能カメラカード（スター数1,077）。

### 掃除機カード <a id="-掃除機カード--vacuum-cards"></a>

掃除機の状態、部屋のマップ、運転開始・停止の操作部をダッシュボードに表示します。

- [Vacuum Map Card](https://github.com/PiotrMachowski/lovelace-xiaomi-vacuum-map-card) - Xiaomi（Roborock/Viomi/Dreame/Roidmi）とNeatoの掃除機を、使いやすい操作で全面的に制御するカード。他の掃除機にも対応する可能性があるとの原文記載（スター数1,885）。
- [Vacuum Card](https://github.com/denysdovhan/vacuum-card) - ロボット掃除機を制御するカード（スター数1,211）。
- [Valetudo Map](https://github.com/Hypfer/lovelace-valetudo-map-card) - クラウドを使わないファームウェアのValetudoを搭載したロボット掃除機の現在のマップを、ダッシュボードへ直接表示（スター数304）。

### カレンダー・フィード <a id="-カレンダーフィード--calendarfeed"></a>

カレンダーや、今後のイベントを順に並べたフィードを表示します。

- [Atomic Calendar Revive](https://github.com/totaldebug/atomic-calendar-revive) - 詳細設定を備えるカレンダーカード（スター数629）。
- [Week Planner Card](https://github.com/FamousWolf/week-planner-card) - 今後のイベント、アラーム、リマインダーを複数日分まとめて表示。画面サイズに応じたレイアウトに対応（スター数514）。
- [Trash Card](https://github.com/idaho/hassio-trash-card) - カレンダーエンティティに基づき、次の収集対象（紙、プラスチック、生ごみ）を色分けしたアイコンで表示（スター数356）。
- [Calendar Card Pro](https://github.com/alexpfau/calendar-card-pro) - イベントのグループ化、場所の表示、すっきりした現代的な見た目を備える、カスタマイズ可能なカレンダーカード（スター数1,122）。

### リモコン <a id="-リモート操作--remote-control"></a>

テレビ、ストリーミング機器、AV機器の仮想リモコンです。

- [LG WebOS Remote Control](https://github.com/madmicio/LG-WebOS-Remote-Control) - LGテレビのWebOS用リモコン（スター数551）。
- [HA Firemote](https://github.com/PRProd/HA-Firemote) - Apple TV、Fire TV、Chromecast、Homatics、Shield、onn.、Roku、Xiaomiなどの仮想リモコン（スター数987）。
- [Universal Remote Card](https://github.com/Nerwyn/universal-remote-card) - 任意のメディア機器向けの、全面的にカスタマイズできる仮想リモコン。独自ボタンと触覚フィードバックに対応（スター数569）。

### 空気質 <a id="-空気質--air-quality"></a>

空気清浄機と空気質センサーの測定値を表示します。

- [Purifier Card](https://github.com/denysdovhan/purifier-card) - 空気清浄機を制御するカード（スター数342）。

### キオスク・壁面パネル <a id="️-キオスク壁面パネル-️-kioskwallpanel"></a>

ヘッダーなどの画面枠を隠して全画面表示にしたり、壁に取り付けた古いタブレットを専用タッチパネルにしたりできます。

- [Wall Panel](https://github.com/j-a-n/lovelace-wallpanel) - 壁掛けタブレット向けの壁面パネルモードと写真スクリーンセーバー（スター数842）。
- [Kiosk Mode](https://github.com/NemesisRE/kiosk-mode) - ヘッダー、サイドバー、オーバーフローメニューを隠し、すっきりしたキオスク表示に変更（スター数738）。

## ダッシュボード <a id="ダッシュボード-dashboards"></a>

標準のHome Assistantダッシュボードを、異なる見た目や操作感のものへ置き換えたり、拡張したりするフレームワークです。

- [Dwains Dashboard](https://github.com/dwainscheeren/dwains-lovelace-dashboard) - デスクトップ、タブレット、モバイル向けにダッシュボードを完全自動生成（スター数2,048）。
- [Mushroom Strategy](https://github.com/DigiLive/mushroom-strategy) - Mushroomカードを使ってダッシュボードを自動生成するストラテジー（スター数648）。

## テーマ <a id="テーマ-themes"></a>

画面の見た目を変えるテーマです。

- [Midnight](https://community.home-assistant.io/t/midnight-theme/28598?u=frenck) - Marcel Hoffsによるダークテーマ。
- [Dark Cyan](https://community.home-assistant.io/t/dark-cyan-theme/28594?u=frenck) - Ryoen Deprouwによる、シアンを差し色に使うダークテーマ。
- [Grey Night](https://community.home-assistant.io/t/grey-night-theme/30848?u=frenck) - ksyaによる、グレーを差し色に使うダークテーマ。
- [Dark Red](https://community.home-assistant.io/t/dark-red-theme/28592?u=frenck) - Ryoen Deprouwによる、赤を差し色に使うダークテーマ。
- [Halloween](https://community.home-assistant.io/t/halloween-theme/30872?u=frenck) - Mahasri Kalavalaによる、かぼちゃ色のテーマ。
- [Black and Green](https://community.home-assistant.io/t/black-and-green-theme/28602?u=frenck) - GreenTurtwigによる、淡い緑を差し色に使うダークテーマ。
- [Vintage](https://community.home-assistant.io/t/vintage-theme/42806?u=frenck) - Anup Surendranによる、フロントエンドをヴィンテージ風にするテーマ。
- [Carbon Green](https://community.home-assistant.io/t/share-your-themes/22018/95?u=frenck) - Reuaによる、緑を差し色に使う明るいカーボンテーマ。
- [Slate](https://github.com/seangreen2/slate_theme) - 標準の見た目に近いダークテーマ（スター数137）。
- [Synthwave](https://github.com/bbbenji/synthwave-hass) - 現代のSynthwaveバンドのカバーアートに着想を得たテーマ（スター数200）。
- [Frosted Glass](https://github.com/wessamlauf/homeassistant-frosted-glass-themes) - 半透明のカードを備える、現代的なすりガラス風のダーク・ライトテーマ（スター数907）。
- [iOS Themes](https://github.com/basnijholt/lovelace-ios-themes) - iOSのダークモード・ライトモードに着想を得たテーマ（スター数868）。
- [LCARS](https://github.com/th3jesta/ha-lcars) - Star TrekのLCARSに着想を得て、艦橋の雰囲気を再現するテーマ（スター数534）。
- [Material You](https://github.com/Nerwyn/material-you-theme) - アクセントカラーに合わせて調整されるMaterial Design 3テーマ（スター数452）。
- [Graphite](https://github.com/TilmanGriesel/graphite) - 落ち着いた、すっきりしたテーマ。低コントラストで、内容に集中しやすい見た目（スター数442）。
- [Catppuccin](https://github.com/catppuccin/home-assistant) - エディターやアプリで使われるCatppuccinの配色に合わせた、穏やかなパステル調のテーマ（スター数427）。
- [Mushroom Themes](https://github.com/piitaya/lovelace-mushroom-themes) - Mushroomカード集と組み合わせるための追加テーマ（スター数304）。
- [visionOS](https://github.com/Nezz/homeassistant-visionos-theme) - AppleのvisionOSに着想を得たテーマ（スター数313）。
- [Nordic](https://github.com/coltondick/nordic-theme-main) - 北欧風の配色を使うライト・ダークテーマ。青みがかった複数のバリエーションを含む（スター数43）。

## アイコンパック <a id="アイコンパック-icon-packs"></a>

HACSから導入し、ダッシュボード全体の標準アイコンを置き換えたり、追加したりするアイコン集です。

- [Font Awesome Icons](https://github.com/thomasloven/hass-fontawesome) - Font Awesomeの無料アイコンをフロントエンドで使用（スター数339）。
- [Hass Hue Icons](https://github.com/arallsopp/hass-hue-icons) - Philips Hueの電球・照明器具の追加アイコン（スター数377）。
- [simpleicons](https://github.com/vigonotion/hass-simpleicons) - simpleiconsの無料アイコンを使用（スター数167）。

## アプリ <a id="アプリ-apps"></a>

データベース、リバースプロキシ、MQTTブローカーなどをHome Assistantと一緒に動かせます。MQTTブローカーは、多くのスマートホーム機器が使うメッセージの仲介サービスです。原文で以前はAdd-onsと呼ばれていたアプリをHome Assistant OSへ直接導入でき、Dockerの個別設定、別サーバー、コマンドライン操作は不要と説明されています。

### 公式アプリ <a id="️-公式アプリ-️-official-apps"></a>

Home Assistantチームが開発・保守するアプリです。

- [DuckDNS](https://github.com/home-assistant/hassio-addons/blob/master/duckdns/DOCS.md) - Duck DNSのIPアドレスを更新し、Let's EncryptでSSL証明書を生成。
- [File editor](https://github.com/home-assistant/hassio-addons/blob/master/configurator/DOCS.md) - ブラウザーで使える設定ファイルエディター。
- [Mosquitto](https://github.com/home-assistant/hassio-addons/blob/master/mosquitto/DOCS.md) - 高速で信頼性の高いMQTTブローカー。
- [Terminal & SSH](https://github.com/home-assistant/hassio-addons/blob/master/ssh/DOCS.md) - WebターミナルやSSHクライアントを使って遠隔ログイン。
- [Samba](https://github.com/home-assistant/hassio-addons/blob/master/samba/DOCS.md) - Windowsのネットワーク共有を使い、設定ファイルへアクセス。
- [NGINX SSL proxy](https://github.com/home-assistant/hassio-addons/blob/master/nginx_proxy/DOCS.md) - SSLを終端するリバースプロキシ。
- [deCONZ](https://github.com/home-assistant/hassio-addons/blob/master/deconz/DOCS.md) - Dresden ElektronikのConBeeまたはRaspBeeを使ってZigBeeネットワークを制御。
- [Let's Encrypt](https://github.com/home-assistant/hassio-addons/blob/master/letsencrypt/DOCS.md) - オープンで自動化された認証局（CA）のLet's Encryptから、無料のSSL証明書を取得。
- [MariaDB](https://github.com/home-assistant/hassio-addons/blob/master/mariadb/DOCS.md) - MySQLからフォークしたオープンソースのリレーショナルデータベース。

### サードパーティーのアプリ <a id="-サードパーティアプリ--third-party-apps"></a>

アプリは誰でも作成できます。以下はコミュニティが作成したものです。

- [SSH & Web Terminal](https://github.com/hassio-addons/app-ssh) - 便利なツールを多数同梱するSSH・Webターミナル（スター数501）。
- [UniFi Controller](https://github.com/hassio-addons/app-unifi) - WebブラウザーからUniFiネットワークを管理（スター数374）。
- [Node-RED](https://github.com/hassio-addons/app-node-red) - IoT向けのフローベースプログラミング（スター数639）。
- [Plex Media Server](https://github.com/hassio-addons/app-plex) - 保存したメディアを整理し、ストリーミングできる状態にするサーバー（スター数190）。
- [InfluxDB](https://github.com/hassio-addons/addon-influxdb) - メトリクス、イベント、リアルタイム分析向けの、規模を拡張できるデータストア（スター数196）。
- [Grafana](https://github.com/hassio-addons/addon-grafana) - 分析と監視のためのオープンプラットフォーム（スター数279）。
- [Tor](https://github.com/hassio-addons/app-tor) - Torを通じてインスタンスへアクセスし、プライバシーを保護（スター数62）。
- [Spotify Connect](https://github.com/hassio-addons/app-spotify-connect) - Spotifyの音楽をHome Assistant機器へ直接ストリーミング（スター数250）。
- [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt) - ZigbeeとMQTTを橋渡しし、専用の独自Zigbeeブリッジを不要にするツール（スター数15,213）。
- [AppDaemon](https://github.com/AppDaemon/appdaemon) - 自動化アプリを記述するための、疎結合・マルチスレッド・サンドボックス化されたPython実行環境（スター数961）。
- [TasmoAdmin](https://github.com/hassio-addons/addon-tasmoadmin) - すべてのSonoff-Tasmota機器を一元管理（スター数256）。
- [Aircast](https://github.com/hassio-addons/app-aircast) - ChromecastプレーヤーにAirPlay機能を追加（スター数397）。
- [AirSonos](https://github.com/hassio-addons/app-airsonos) - SonosプレーヤーにAirPlay機能を追加（スター数121）。
- [Log Viewer](https://github.com/hassio-addons/addon-log-viewer) - ブラウザーでリアルタイムにログを閲覧するツール（スター数94）。
- [Tautulli](https://github.com/hassio-addons/addon-tautulli) - Plexサーバーの監視と統計取得（スター数46）。
- [motionEye](https://github.com/hassio-addons/addon-motioneye) - シンプルで多機能なカメラ用CCTV/NVR（スター数332）。
- [JupyterLab](https://github.com/hassio-addons/addon-jupyterlab) - 実行可能なコード、数式、可視化、説明文を含む文書を作成（スター数68）。
- [Glances](https://github.com/hassio-addons/app-glances) - Pythonで実装された、複数プラットフォームに対応するシステム監視ツール（スター数186）。
- [AdGuard Home](https://github.com/hassio-addons/app-adguard-home) - ネットワーク全体の広告・トラッカーを遮断するDNSサーバー。保護者による制限機能も備える（スター数520）。
- [Traccar](https://github.com/hassio-addons/addon-traccar) - 現代的なGPS追跡プラットフォーム（スター数158）。
- [Hass.io Google Drive Backup](https://github.com/sabeechen/hassio-google-drive-backup) - Google Driveへのバックアップに必要な機能を備える、設定しやすいツール（スター数3,553）。
- [Grocy](https://github.com/hassio-addons/app-grocy) - 冷蔵庫内の管理にとどまらず、家庭の食料品や家事を管理するERP（スター数433）。
- [CrowdSec](https://github.com/crowdsecurity/home-assistant-addons) - 侵入からの保護を目的とする、次世代の協調型IPS/IDS（スター数94）。
- [C-Gate Web Bridge](https://github.com/dougrathbone/cgateweb-homeassistant) - Clipsal C-Busの照明・自動化システムをMQTTでHome Assistantへ接続。自動検出に対応（スター数4）。

## DIY <a id="diy-diy"></a>

市販品にないスマートホーム機器を自作するプロジェクトです。複数センサーのはんだ付けから、生産終了した機器の再利用まで扱います。原文では、大半は週末に取り組める規模で、部品代はコーヒーを買いに行くより安く済むと紹介されています。

### 単体プロジェクト <a id="-単体プロジェクト--standalone-projects"></a>

- [ESPHome](https://esphome.io/) - YAMLでESP8266・ESP32ボードをプログラム。
- [Tasmota](https://github.com/arendst/Tasmota) - ESP8266ボード・機器向けのファームウェア（スター数24,475）。
- [Sonoff NSPanel](https://github.com/joBr99/nspanel-lovelace-ui) - Sonoff NSPanelタッチスクリーン用のカスタムファームウェア。Lovelace風のUIを備える（スター数988）。
- [CODESYS V3 Home Automation](https://github.com/MichielVanwelsenaere/HomeAutomation.CoDeSys3) - 有線の自動化構成向けにMQTTで通信する、PLCホームオートメーションソフトウェア（スター数144）。

### DIYゲートウェイ <a id="-diyゲートウェイ--diy-gateways"></a>

- [OpenMQTTGateway](https://github.com/1technophile/OpenMQTTGateway) - IR、RF、BLE、MiFlora、SMSや多数のセンサーに対応する柔軟なMQTTゲートウェイ（スター数4,023）。
- [esp8266 Milight Hub](https://github.com/sidoh/esp8266_milight_hub) - MQTTを使うMilight/LimitlessLED機器向けの代替ハブ（スター数1,040）。

### DIYプロジェクト <a id="-diyプロジェクト--diy-projects"></a>

- [HA SwitchPlate](https://community.home-assistant.io/t/ha-switchplate-diy-lcd-touchscreen-wall-switch-replacement/25464?u=frenck) - 壁スイッチをLCDタッチスクリーンへ置き換えるプロジェクト。
- [$10 WiFi RGB Bulb](https://community.home-assistant.io/t/how-to-inexpensive-10-us-wifi-rgb-bulb-that-works-with-home-assistant/14735?u=frenck) - WiFiで動作する安価なRGB電球。
- [433mhz/IR Bidirectional Gateway](https://community.home-assistant.io/t/433mhz-infrared-ir-to-and-from-mqtt-on-esp8266/6779?u=frenck) - ESP8266とMQTTを使い、赤外線と433MHzで双方向通信するゲートウェイ。
- [esp8266MQTTBlinds](https://community.home-assistant.io/t/esp8266-window-blinds-mqtt/14863?u=frenck) - ESP8266、サーボ、MQTTで窓のブラインドを自動化。
- [Home Assistant's Hackster.io](https://www.hackster.io/home-assistant?f=1#_=_) - 複数のDIYプロジェクトを掲載するHacksterのチャンネル。
- [Bed Presence Detection](https://selfhostedhome.com/diy-bed-presence-detection-home-assistant/) - ESP8266を使う在床検知。
- [QuinLED](https://quinled.info/) - ESP32ボードを使う、自作Wi-Fi LED調光器・コントローラー。

## ツール・ユーティリティ <a id="ツールユーティリティ-toolsutilities"></a>

Home Assistant本体の外で併用するヘルパー、デーモン、開発ツールです。設定の編集、データのデバッグ、MQTTでの機器データ送信、より広いワークフローとの連携に使えます。

- [HASS Configurator](https://github.com/danielperna84/hass-configurator) - ブラウザーで使える設定ファイルエディター（スター数334）。
- [HA-Dockermon](https://github.com/philhawthorne/ha-dockermon) - RESTfulなスイッチでDockerコンテナを制御するNode.jsサービス（スター数291）。
- [Home Assistant Device Database](https://www.hadevices.com/) - 対応機器や動作確認済み機器のデータベース。
- [Jinja Scripts for Curious Minds](https://github.com/skalavala/mysmarthome/tree/master/jinja_helpers) - Jinja2の理解を助けるスクリプト集。
- [GitLab CI/CD](https://about.gitlab.com/2018/08/02/using-the-gitlab-ci-slash-cd-for-smart-home-configuration-management/) - GitLab CI/CDでスマートホームの設定管理を簡素化する方法。
- [Monitor](https://github.com/andrewjfreyer/monitor) - Bluetooth Low Energyのアドバタイズを利用する分散型在宅検知。結果をMQTTで通知（スター数2,104）。
- [HASS-data-detective](https://github.com/robmarkcole/HASS-data-detective) - データベースのデータを探索・分析（スター数204）。
- [ADB Intents](https://gist.github.com/mcfrojd/9e6875e1db5c089b1e3ddeb7dba0f304) - Android機器を制御するADBインテントの一覧。
- [Home Assistant Config Helper for VSCode](https://marketplace.visualstudio.com/items?itemName=keesschollaart.vscode-home-assistant) - 設定の編集時に自動補完、検証、スニペットを提供するVisual Studio Code拡張。
- [Home Assistant Taskbar Menu](https://github.com/PiotrMachowski/Home-Assistant-Taskbar-Menu) - Lovelaceビューの表示、エンティティの制御、永続的な通知の表示に対応するWindowsクライアント（スター数342）。

## オンライン資料 <a id="オンライン資料-online-resources"></a>

Home Assistantの導入や活用を紹介するブログ、YouTubeチャンネル、ポッドキャスト、ソーシャルアカウントです。新機能や実際の構築例を知る参考になります。

## ブログ <a id="️-ブログ-️-blogs"></a>

### 英語 <a id="英語-english"></a>

- [DIY Futurism](https://diyfuturism.com/) - Bradによる初心者向けの記事。手順を段階的に解説。

- [Smart Home Hobby](https://smarthomehobby.com/) - 費用を抑えた構成のガイドと情報。

- [Self Hosted Home](https://selfhostedhome.com/) - DIYホームオートメーションとセルフホストサービスに関する記事。

- [Tinkering with Home Automation](https://blog.ceard.tech/) - ホームオートメーションを試作・改良するブログとガイド。

- [HomeTechHacker](https://hometechhacker.com/) - DIYスマートホームのガイド、レビュー、アドバイス。

- [Intermittent Technology](https://blog.quindorian.org/) - Quindorの個人ブログ。スマートホーム、ネットワーク、周辺技術を扱う。

- [SmartHomeScene](https://smarthomescene.com/) - 初心者向けチュートリアル、スマートホーム機器のレビュー、DIYオートメーション。

- [KPeyanski](https://peyanski.com/) - Kiril Peyanskiによるオートメーション、AI統合、エネルギー管理のチュートリアルと手順解説。

- [fixtse](https://fixtse.com/) - Sergio Romeroによる在宅検知、音声アシスタント、ローカルAI向けハードウェアのレビューとDIYガイド。

- [Michael Leen](https://michaelsleen.com/) - 初めてスマートホームを構築する人向けの実用的な設定アドバイスと機器レビュー。

- [Phil Hawthorne](https://philhawthorne.com/) - 長年ポッドキャストを配信するPhil Hawthorneによる、統合、在宅検知、家庭のオートメーションに関する実践記録。

- [Frenck](https://frenck.dev/) - Franck Nijhofによるオープンソース、プロジェクト運営、自身のオートメーション実験の舞台裏。

### その他の言語 <a id="-その他の言語--in-other-languages"></a>

言語名のアルファベット順です。

- ドイツ： [simon42](https://www.simon42.com/) - Simon Müllerによる導入、統合、オートメーションの初心者向けガイド。

- ドイツ： [smarterkram](https://smarterkram.de/) - Oliver KluthによるZigbee、Matter、ESPHome、ハードウェアの詳細なチュートリアル。

- ドイツ： [SmartHome yourself](https://smarthomeyourself.de/) - Daniel Scheidlerによるリリース情報、機器レビュー、統合ガイド。

## YouTubeチャンネル <a id="-youtubeチャンネル--youtube-channels"></a>

動画でHome Assistantの使い方を学べます。

### 英語 <a id="英語-english-1"></a>

原文では、公式チャンネルを先頭に、その後を購読者数順に並べ、毎晩更新すると説明されています。記載数値はこの版の取得時点のもので、現在値ではありません。

- [Home Assistant](https://www.youtube.com/channel/UCbX3YkedQunLt7EQAdVxh7w) - 新製品・新機能の発表とライブ配信を行う公式チャンネル（購読者数73.7K）。

- [The Hook Up](https://www.youtube.com/channel/UC2gyzKcHbYfqoXA5xbyGXtQ) - Robert Taitによるスマートホームのチュートリアル、機器レビュー、ホームオートメーションの実験（購読者数577K）。

- [Everything Smart Home](https://www.youtube.com/c/EverythingSmartHome) - スマートホームと技術のレビュー、ガイド、手順を追ったDIYプロジェクト（購読者数245K）。

- [Home Automation Guy](https://www.youtube.com/@HomeAutomationGuy) - Alan Byrneによるスマートホームのチュートリアル、オートメーション、機器レビュー（購読者数113K）。

- [Smart Home Junkie](https://www.youtube.com/@smarthomejunkie) - Ed de Tollenaerによる初心者から上級者向けのハウツー動画とチュートリアル（購読者数85.7K）。

- [digiblurDIY](https://www.youtube.com/channel/UC5ZdPKE2ckcBhljTc2R_qNA) - ハードウェアプロジェクトのチュートリアルとTasmotaによるオートメーション（購読者数74.1K）。

- [Intermit.Tech](https://www.youtube.com/channel/UCv7UOhZ2XuPwm9SN5oJsCjA) - カメラ、家庭内ネットワーク、ESPボード、Node-REDのチュートリアルとレビュー（購読者数62.5K）。

- [BeardedTinker](https://www.youtube.com/channel/UCuqokNoK8ZFNQdXxvlE129g) - スマートホームのチュートリアルと3Dプリント（購読者数44.9K）。

- [JuanMTech](https://www.youtube.com/juanmtech) - 手順を追いやすいハウツー動画と製品レビュー（購読者数42.6K）。

- [mostlychris](https://www.youtube.com/@mostlychris) - Chris Westによるスマートホームのチュートリアルと機器レビュー（購読者数40.2K）。

- [KPeyanski](https://www.youtube.com/@kpeyanski) - Kiril Peyanskiによるハードウェアプロジェクト、ダッシュボード、統合の実践的なチュートリアル（購読者数33.7K）。

- [This Smart House](https://www.youtube.com/@thissmarthouse) - Ryan Hollandによる初心者向けの設定手順と製品レビュー（購読者数33.8K）。

- [SlackerLabs](https://www.youtube.com/@SlackerLabs) - Jeffrey Stoneによるオートメーション、スクリプト作成、試作・改良の手順解説（購読者数30.6K）。

- [Michael Leen](https://www.youtube.com/@michaelsleen) - スマートホームのチュートリアルと統合手順（購読者数26.7K）。

- [Technithusiast](https://www.youtube.com/@technithusiast) - Michael Montaqueによるチュートリアル、統合、オートメーション（購読者数22.8K）。

- [3ATIVE VFX](https://www.youtube.com/@3ATIVE) - VFXアーティストのDavid Martinによるスマートホームのオートメーションと統合（購読者数20.5K）。

- [Smart Home Australia](https://www.youtube.com/@smart_home_australia) - Paul Tonerによるオーストラリアの事情を反映したスマートホームのレビューとチュートリアル（購読者数20.7K）。

- [CTech&Media](https://www.youtube.com/@CTechMedia) - Charly Schulteによるスマートホームのレビューとチュートリアル（購読者数18K）。

- [Frenck | Home Assistant & Smart Home](https://www.youtube.com/@frenck) - Home Assistantプロジェクトのリーダーが、自身の経験やプロジェクトの舞台裏を不定期に紹介する動画（購読者数9.8K）。

### その他の言語 <a id="-その他の言語--in-other-languages-1"></a>

言語名のアルファベット順、次に購読者数順です。

- サウジアラビア： [Smart Tech Arabic](https://www.youtube.com/@SmartTechArabic) - Shady Nafieによるアラビア語のチュートリアル（購読者数99.1K）。

- ブラジル： [Descomplicando Tech](https://www.youtube.com/@DescomplicandoTech) - Fabricio Goncalvesによるスマートホームガイド（購読者数15.9K）。

- フランス： [AyLabs](https://www.youtube.com/@ay_labs) - Aymeric Le Feyerによるチュートリアル、統合、オートメーションの手順解説（購読者数12K）。

- ドイツ： [simon42](https://www.youtube.com/@simon42) - Simon Müllerによるチュートリアル、オートメーション、ダッシュボードのガイド（購読者数205K）。

- ドイツ： [haus:automation](https://www.youtube.com/@haus_automation) - Matthias Kleineによるチュートリアル、統合、オートメーションの手順解説（購読者数136K）。

- ドイツ： [SmartHome yourself](https://www.youtube.com/@Smarthomeyourself) - Daniel ScheidlerによるDIYスマートホームの構築とガイド（購読者数35K）。

- ドイツ： [Tristans Smartes Heim](https://www.youtube.com/@tristanssmartesheim) - Tristan Küstersによるスマートホームの設定ガイドと統合（購読者数13.8K）。

- イタリア： [DinamoTech](https://www.youtube.com/@DinamoTech) - Francesco Covaによるスマートホームのチュートリアルとレビュー（購読者数78K）。

- イタリア： [Ipensieridellarchitetto](https://www.youtube.com/@ipensieridellarchitetto) - ホームオートメーション、技術、AIの手順解説（購読者数14.8K）。

- スペイン： [Home Assistant y Domótica Fácil](https://www.youtube.com/@HomeAssistantFacil) - Luis del Valleによるスマートホームのチュートリアルとオートメーション（購読者数139K）。

- スペイン： [Tecnoyfoto](https://www.youtube.com/@Tecnoyfoto) - Albert Barnosellによるチュートリアルと製品レビュー（購読者数45K）。

### ポッドキャスト <a id="️-ポッドキャスト-️-podcasts"></a>

通勤中や朝の習慣、運動中にも聴けます。

- [Home Assistant Podcast](https://hasspodcast.io) - ニュースとゲストを紹介する隔週配信のポッドキャスト。

## ソーシャルアカウント <a id="-ソーシャル--social"></a>

コミュニティが活動する各ソーシャルネットワークのニュース、ヒント、活用例を紹介するアカウントです。

### 公式 <a id="公式-official"></a>

- Home Assistant ([X](https://x.com/home_assistant), [Bluesky](https://bsky.app/profile/home-assistant.io), [Mastodon](https://fosstodon.org/@homeassistant), [Facebook](https://www.facebook.com/homeassistantio/), [Instagram](https://www.instagram.com/homeassistant/), [LinkedIn](https://www.linkedin.com/company/home-assistant)) - ローカル制御とプライバシーを重視するオープンソースのホームオートメーション。

- Home Assistant Developers ([X](https://x.com/hass_devs), [Bluesky](https://bsky.app/profile/developers.home-assistant.io)) - 貢献者向けの開発ニュース。

- Open Home Foundation ([X](https://x.com/openhomefndn), [Bluesky](https://bsky.app/profile/openhomefoundation.org), [Mastodon](https://fosstodon.org/@openhomefoundation), [Instagram](https://www.instagram.com/openhomefoundation/)) - スマートホームにおけるプライバシー、選択の自由、持続可能性の保護。

- ESPHome ([X](https://x.com/esphome_), [Bluesky](https://bsky.app/profile/esphome.io)) - ESPボードとスマートホーム機器を制御するオープンソースシステム。

- Nabu Casa ([X](https://x.com/NabuCasa)) - クラウドサービスを運営する会社。

- Rhasspy ([X](https://x.com/rhasspy), [Mastodon](https://fosstodon.org/@rhasspy)) - Michael Hansenによるオープンソースの音声アシスタントツールキット。

### コミュニティ <a id="コミュニティ-community"></a>

- Paulus Schoutsen ([X](https://x.com/balloob), [Bluesky](https://bsky.app/profile/paulusschoutsen.nl), [Mastodon](https://fosstodon.org/@balloob), [Threads](https://www.threads.com/@balloob)) - Home AssistantプロジェクトとNabu Casaの創設者。

- Franck Nijhof ([X](https://x.com/frenck), [Bluesky](https://bsky.app/profile/frenck.social), [Mastodon](https://fosstodon.org/@frenck), [Threads](https://www.threads.com/@frenck), [Instagram](https://www.instagram.com/frenck/), [YouTube](https://www.youtube.com/@frenck), [LinkedIn](https://www.linkedin.com/in/frenck)) - Home Assistantプロジェクトのリーダーで、このAwesomeリストの作成者。

- Everything Smart Home ([X](https://x.com/EverySmartHome), [Bluesky](https://bsky.app/profile/lewisbarclay.bsky.social), [Mastodon](https://fosstodon.org/@everythingsmarthome), [Threads](https://www.threads.com/@everythingsmarthome)) - Lewis Barclayによるスマートホームと技術のレビュー、ガイド、DIYプロジェクト。

- JuanMTech ([X](https://x.com/JuanMTech), [Bluesky](https://bsky.app/profile/juanmtech.com), [Threads](https://www.threads.com/@juanmtech)) - 手順を追いやすいハウツーコンテンツと製品レビュー。

- Home Automation Guy ([X](https://x.com/alanmbyrne), [Bluesky](https://bsky.app/profile/burnsie.com), [Mastodon](https://mastodon.social/@burnsie)) - Alan Byrneによるスマートホームのチュートリアルとオートメーション。

- mostlychris ([X](https://x.com/mostlychris2), [Bluesky](https://bsky.app/profile/mostlychris.com), [Mastodon](https://fosstodon.org/@mostlychris)) - Chris Westによるスマートホームのチュートリアルと機器レビュー。

- BeardedTinker ([X](https://x.com/BeardedTinker), [Bluesky](https://bsky.app/profile/beardedtinker.bsky.social)) - スマートホームのチュートリアルと3Dプリント。

- Mark Watt Tech ([Bluesky](https://bsky.app/profile/markwatttech.bsky.social), [Mastodon](https://fosstodon.org/@MarkWattTech)) - ソフトウェア開発者、スマートホーム分野のコンテンツ制作者。

- Smart Home Junkie ([X](https://x.com/smarth0mejunkie), [Threads](https://www.threads.com/@smarthomejunkie)) - Ed de Tollenaerによる初心者から上級者向けのハウツーコンテンツ。

- Smart Home Solver ([X](https://x.com/smarthomesolver), [Threads](https://www.threads.com/@smarthomesolver)) - Reed Kleinmanによるスマートホームのヒントとレビュー。

### その他の言語 <a id="-その他の言語--in-other-languages-2"></a>

言語名のアルファベット順です。

- ブラジル： LNPBR ([Instagram](https://www.instagram.com/lnp_br/), [Threads](https://www.threads.com/@lnp_br), [TikTok](https://www.tiktok.com/@lnpbr)) - Leandroによるスマートホームのチュートリアルと製品レビュー。

- ドイツ： simon42 ([Instagram](https://www.instagram.com/simon42.official/), [Facebook](https://www.facebook.com/simon42official/)) - Simon Müllerによる初心者向けスマートホームガイドとオートメーション。

- ドイツ： haus:automation ([Instagram](https://www.instagram.com/haus_automation/), [Facebook](https://www.facebook.com/HausAutomatisierungCom/)) - Matthias KleineによるDIYスマートホームのチュートリアル。

- スペイン： Un loco y su tecnología ([X](https://x.com/unlocoysutec), [Instagram](https://www.instagram.com/unlocoysutecnologia/), [Threads](https://www.threads.com/@unlocoysutecnologia), [TikTok](https://www.tiktok.com/@unlocoysutecnologia)) - Carlos Corderoによるスマートホーム関連コンテンツ。

- スペイン： Tecnoyfoto ([X](https://x.com/tecnoyfoto), [Instagram](https://www.instagram.com/barnosell/)) - Albert Barnosellによるチュートリアルと製品レビュー。

- スペイン： La Choza Digital ([X](https://x.com/LaChozaDigital), [Bluesky](https://bsky.app/profile/lachozadigital.bsky.social)) - スマートホームとDIYオートメーションに関する短いチュートリアル。

- フランス： HACF ([X](https://x.com/hacf_fr)) - チュートリアルと資料を共有するフランス語のコミュニティ。

- イタリア： inDomus ([X](https://x.com/indomusit), [TikTok](https://www.tiktok.com/@indomusit)) - イタリア語の個人向けホームオートメーションコミュニティ。

- オランダ： Denie van Kleef ([X](https://x.com/disney79), [Instagram](https://www.instagram.com/denievankleef/)) - オランダ語のスマートホームとエネルギーのガイド。

- ポルトガル： CPHA ([Facebook](https://www.facebook.com/cpha.pt/)) - ホームオートメーション愛好家向けのポルトガル語コミュニティ。

## 代替のホームオートメーションソフトウェア <a id="代替ホームオートメーションソフトウェア-alternative-home-automation-software"></a>

Home Assistant以外のプラットフォームを比較したい場合や、Home Assistantが対応しない用途に向けた選択肢です。商用・オープンソースの両方があり、解決する課題も異なります。

- [openHAB](https://github.com/openhab) - Javaベースの汎用統合プラットフォームを目指すプロジェクト。

- [Domoticz](https://github.com/domoticz/domoticz) - 軽量なホームオートメーションシステム（スター数3,773）。

- [Gladys](https://github.com/GladysAssistant/Gladys) - Raspberry Piで動作するオープンソースプログラム（スター数3,066）。

- [SmartThings](https://www.smartthings.com/) - Samsungの商用ホームオートメーションハブ。

- [Homey](https://homey.app/) - Athomの商用マルチプロトコルプラットフォーム。ローカル制御を重視するHomey Proと、ホスト型のHomey Cloudを提供。

- [Homebridge](https://github.com/homebridge/homebridge) - HomeKit非対応機器をApple Homeへ橋渡しする軽量なNode.jsサーバー。多数のプラグインを利用可能（スター数25,384）。

- [Node-RED](https://github.com/node-red/node-red) - 機器、API、サービスを接続するフローベースのビジュアルプログラミングツール。OpenJS Foundationが支援（スター数23,277）。

- [ioBroker](https://github.com/ioBroker/ioBroker) - 数百のアダプターを備えたIoT統合プラットフォーム。KNXやHomeMaticなど欧州のプロトコルへの対応が充実（スター数1,371）。

- [FHEM](https://fhem.de/) - 430以上のモジュールを備えたPerlベースのサーバー。KNX、EnOcean、HomeMaticなど欧州のプロトコルに幅広く対応。

- [Jeedom](https://github.com/jeedom/core) - フランス発のクラウド不要のプラットフォーム。プラグインマーケットプレイスを備え、任意のLinuxシステムで動作（スター数414）。

- [Hubitat](https://hubitat.com/) - Z-Wave、Zigbee、Matterに対応するローカル制御重視の商用ハブ。すべてのオートメーションを機器上で実行。

- [HomeSeer](https://homeseer.com/) - 25年以上の開発歴を持つ商用プラットフォーム。Z-Waveへの対応とプラグインが充実。

## その他のAwesomeリスト <a id="その他のawesomeリスト-other-awesome-lists"></a>

スマートホーム全般、個別のプロトコル、セルフホストソフトウェアを扱う関連リストです。Home Assistantに直接当てはまらない課題を調べる際にも役立ちます。

- [awesome-iot](https://github.com/HQarroum/awesome-iot) - IoTのプロジェクトと資料を集めたリスト（スター数3,948）。

- [awesome-mqtt](https://github.com/awesome-mqtt/awesome-mqtt#readme) - MQTT関連の資料を集めたリスト（スター数2,350）。

- [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) - セルフホスト可能なソフトウェアを集めたリスト（スター数298,647）。

## 帰属表示 <a id="コントリビューション-contributing"></a>

このリストを最初に構成したのは[Franck Nijhof](https://x.com/frenck)です。

## 商標に関する法的通知 <a id="商標に関する法的通知-trademark-legal-notice"></a>

Awesome Home Assistantは、独立したコミュニティが編集する索引です。[Home Assistant](https://www.home-assistant.io)または[Open Home Foundation](https://www.openhomefoundation.org)が作成、推奨、支援するものではなく、両者との提携関係もありません。「Home Assistant」という名称とHome Assistantのロゴは、Open Home Foundationの商標です。

このリストに記載されたその他の製品名、ロゴ、ブランド、商標、登録商標は、それぞれの所有者に帰属します。特定のメーカー、製品、統合、アドオン、サービス、コミュニティプロジェクトへの言及は識別のみを目的とし、その所有者による推奨を意味しません。
