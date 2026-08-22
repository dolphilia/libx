---
title: "TheJambo/awesome-testing"
description: "TheJambo/awesome-testing の定本スナップショット"
licenseSource: "github-TheJambo-awesome-testing-readme-md"
---

![](https://github.com/TheJambo/awesome-testing/blob/master/AwesomeTesting.jpg?raw=true)

# Awesome Testing [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Dead link checker](https://github.com/TheJambo/awesome-testing/actions/workflows/404-links.yml/badge.svg)](https://github.com/TheJambo/awesome-testing/actions/workflows/404-links.yml)
> テスト用ソフトウェア、拡張機能、リソースを厳選したリスト

## はじめに
これは、ソフトウェアテストコミュニティの初心者向けリソースを厳選することを目的としています。特定の領域（ユーザビリティ／パフォーマンス）や役割（自動化／管理）に限定したものではありません。コンピューターサイエンス専攻の卒業生にこのリストを渡せば、テストの技能、効率、知識の幅を大きく向上できるような内容を目指しています。対象となるコードが書かれた後の、ソフトウェアテストのあらゆる領域を扱います（単体テストや静的解析は含みません！）。

このリストを読む方なら、誰もが何か一つ追加したい項目を持っているはずです。[貢献方法](https://github.com/TheJambo/awesome-testing/blob/master/CONTRIBUTING.md)のページを読み、ぜひリストへ追加してください。:)

## 目次

- [ソフトウェア](#software)
- [書籍](#books)
- [トレーニング](#training-includes-developer-training-for-automation-testers)
- [ブログ](#blogs)
- [ニュースレター](#newsletters)
- [おすすめのAwesomeリスト](#suggested-awesome-lists)
- [QA・テストのロードマップ](#qa-and-testing-road-map)
- [その他](#others)
- [貢献](#contributing)
- [行動規範](#code-of-conduct)
- [ライセンス](#license)


## ソフトウェア

### APIテスト
- [Bruno](https://github.com/usebruno/bruno) - APIの探索とテストに使えるオープンソースAPIクライアント。
- [API Status Check](https://apistatuscheck.com) - 188以上のサードパーティAPI（OpenAI、Stripe、AWS、GitHubなど）をリアルタイム監視するダッシュボード。応答時間の追跡と無料のアラートプランを提供します。
- [Polarity](https://www.polarity.so) - E2E、API、UIテストを完全に実行する初のAI QAエンジニア。コードベース全体を理解し、長時間稼働するエージェント構成ですべての関連テストを確実に行います。
- [BitDive](https://bitdive.io/) - Java/Kotlin向けのゼロコードAPIテストプラットフォーム。深い実行時コンテキスト（HTTP、SQL、メソッド）を取得し、実トラフィックからモックを自動生成し、E2Eテストとデバッグ用のLive Context Replayを可能にします。
- [CORS Tester](https://cors-error.dev/cors-tester/) - 指定したドメインに対してAPIがCORS対応しているかを確認し、不足点を特定する開発者・APIテスター向けツール。
- [HttpMaster](https://www.httpmaster.net) - HTTPのテストとデバッグに使うプロフェッショナル向けソフトウェアツール。
- [Keploy](https://github.com/keploy/keploy) - 依存関係のモックとともに単体テストケースを自動生成するAPIテストプラットフォーム。
- [RestQA](https://github.com/restqa/restqa) - GherkinベースのREST APIテストフレームワーク。
- [SpecTest](https://github.com/justiceo/spectest) - JavaScriptまたはプレーンJSONで記述できる、真に宣言的なAPIテストフレームワーク。
- [Tests Coverage Tool](https://github.com/Nikita-Filonov/tests-coverage-tool) - テストからgRPCサービスのカバレッジを測定するための包括的なツール。
- [Swagger Coverage Tool](https://github.com/Nikita-Filonov/swagger-coverage-tool) - Swaggerドキュメントに基づいてAPIテストカバレッジを測定するツール。APIのテストカバレッジを自動追跡・報告し、エンドポイントとサービスが十分にテストされていることの確認に役立ちます。
- [Webhook Debugger & Logger](https://apify.com/ar27111994/webhook-debugger-logger) - 受信Webhookをリアルタイムでテスト、デバッグ、記録するエンタープライズ級ツール。
- [Webhook Debugger](https://github.com/brancogao/webhook-debugger) - 署名検証に対応した、オープンソースでセルフホスト可能なWebhookインスペクター。
- [Spiderhash](https://spiderhash.io/) - コールバックのペイロード、ヘッダー、配信動作をテストするWebhookデバッグ・リクエスト検査ツール。
- [KushoAI](https://kusho.ai/) - API契約テスト、E2Eテスト、UIテスト、継続的セキュリティスキャンのためのAIネイティブプラットフォーム。CI/CD上のコード変更へ自動適応する自己修復テストを備えます。
- [postman2pytest](https://github.com/golikovichev/postman2pytest) - Postman Collection v2.1のJSONファイルを、そのまま実行できるpytestテストスイートへ変換します。
- [funapi] (https://funapi.dev) - 現実的なシナリオとエンドポイントを使ったAPIテスト、自動化、統合の練習向けに設計された無料のモックREST APIサービス。

### セキュリティテスト
- [BeEF](http://beefproject.com/) - 発見したXSS脆弱性を悪用してブラウザーを操作します。
- [OWASP ZAP](https://github.com/zaproxy/zaproxy) - HTTPトラフィックの操作、セキュリティスキャン、エクスプロイトに使うインターセプトプロキシ。
- [BurpSuite](https://portswigger.net/burp/communitydownload) - APIを傍受し、該当するAPI操作をリアルタイムで変更して応答します。
- [Nuclei Scanner](https://github.com/projectdiscovery/nuclei) - サイト上の一般的な脆弱性を自動検出するスキャナー。

### AI・LLMテスト
- [promptfoo](https://github.com/promptfoo/promptfoo) - LLMアプリケーションのテストとレッドチーミング向けオープンソースフレームワーク。プロンプト比較、RAGアーキテクチャのテスト、複数ターンの敵対的攻撃、CI/CD統合によるセキュリティ脆弱性検出に対応します。
- [Tenro](https://github.com/tenro-ai/tenro-python) - AIエージェント向けオープンソーステストフレームワーク。LLMとツールの呼び出しをシミュレートし、実際のAPI呼び出しなしでエッジケース、失敗経路、エージェントロジックをテストします。
- [voicetest](https://github.com/voicetestdev/voicetest) - Retell、VAPI、LiveKit、Blandに対応し、自律シミュレーションとLLMベースの評価を備える音声AIエージェント向けオープンソーステストハーネス。
- [AgentSkeptic](https://github.com/jwekavanagh/agentskeptic) - 実行後のデータベース状態を検査し、期待結果と観測結果を読み取り専用SQLで比較してAI／エージェントのワークフローを検証します。
- [Evaliphy](https://github.com/evaliphy/evaliphy) - Playwright風のテスト手法を使い、AIシステムをE2EでテストしてHTMLレポートを生成します。
- [QASkills.sh](https://qaskills.sh) - AIコーディングエージェントがqaskills CLIを介してインストール・遵守する、400以上のQA・テスト技能（Playwright、API、LLM評価、アクセシビリティ、パフォーマンス）の公開レジストリ。Claude Code、Cursor、その他30以上のエージェントで動作します。
- [nika](https://github.com/supernovae-st/nika) - テスト機能を組み込んだAIワークフローエンジン。`nika test`はワークフローのオフライン動作をゴールデンスナップショットとして固定し（決定的なモックプロバイダー、キー不要）、CIで再生します。各実行は事後検証用のハッシュチェーン化されたトレースも残します。

### サービス仮想化
- [Beeceptor](https://beeceptor.com/) - サービス仮想化向けの使いやすいノーコードモックサーバー。REST、SOAP、GraphQLに対応し、OpenAPI SpecificationまたはPostman collectionからAPIモックサーバーを作成できます。
- [DeepfakeHTTP](https://github.com/xnbox/DeepfakeHTTP) - APIシミュレーション用にHTTPダンプを応答元として使用するウェブサーバー。
- [fakecloud](https://github.com/faiscadev/fakecloud) - 統合テスト向けの無料でオープンソースなローカルAWSクラウドエミュレーター。23サービスを100%準拠で提供し、6言語のファーストパーティテストアサーションSDKを備えます。
- [mockd](https://github.com/getmockd/mockd) - HTTP、gRPC、GraphQL、WebSocket、MQTT、SOAPに対応し、カオスエンジニアリングとプロキシ記録を備えるオープンソースのマルチプロトコルモックサーバー。
- [MockServer](https://github.com/mock-server/mockserver-monorepo) - 複数プロトコル（HTTP、gRPC、GraphQL、LLM、MCP、Kafka、TCPなど）に対応するモック、デバッグプロキシ、カオスエンジニアリングツール。任意の依存関係をモックし、トラフィックの記録・再生・検査、リクエスト検証、障害注入ができます。Docker、JAR、Helm、多言語クライアントを提供します。
- [WireMock](https://github.com/wiremock/wiremock) - Javaで書かれたオープンソースHTTPモックエンジン。テストコードへの埋め込み、独立プロセスとしての実行、Docker経由のデプロイが可能です。
- [ApiNotes](https://apinotes.io/mock-server) - OpenAPI仕様を渡すだけで、完全に機能するモックAPIサーバーを即時生成します。Bruno API clientへエクスポートするか、直接テストできます。

### ビジュアルテスト
- [Frostbyte Screenshot Action](https://github.com/OzorOwn/frostbyte-screenshot-action) - CI/CDパイプラインでウェブサイトのスクリーンショットを自動取得するGitHub Action。複数ビューポート、ページ全体の取得、ダークモードのエミュレーションに対応します。
- [Fluxguard](https://fluxguard.com) - スクリーンショットのピクセル差分とDOM変更を比較します。
- [GoodLooks](https://github.com/dashcamio/goodlooks) - Playwrightテスト向けのAI搭載ビジュアル検証。
- [Happo](https://happo.io) - Storybook、Playwright、Cypressなどと統合できるクロスブラウザーのスクリーンショット・ビジュアルリグレッションテストサービス。
- [Image Diff](https://nutilz.com/image-diff) - 2枚の画像を比較し、変更箇所を正確に強調表示する、ブラウザーベースの無料ピクセル差分ツール。感度しきい値を調整でき、アップロードも登録も不要です。
- [Lastest](https://lastest.cloud) - AIによる不安定テストのトリアージとベースラインレビューを備えたPlaywright向けビジュアルリグレッションテスト。
- [TestingBot](https://testingbot.com) - 自動、手動、ビジュアルテストに対応します。
- [recheck-web](https://github.com/retest/recheck-web) - Golden Mastersと「壊れないSelenium」テストを備えた変更比較ツール。
- [Sherlo](https://github.com/sherlo-io/sherlo) - React Native Storybook向けビジュアルテストプラットフォーム。クラウド上のiOS／Androidシミュレーターでスクリーンショットを取得し、視覚的な変更を自動検出します。
- [wopee.io](https://wopee.io/) - 自律型ビジュアルリグレッションテストプラットフォーム。
- [SmartUI by TestMu AI (formerly LambdaTest)](https://www.testmuai.com/visual-testing-tool/)- ブラウザー、アプリ、ウェブサイト、PDFにまたがる完璧なUIのためのAIネイティブなビジュアルテストツール。

### UI・E2Eテスト
- [Polarity](https://www.polarity.so) - あらゆるUI／UX機能の完全なE2Eテストを示す、完全なビジュアルおよびデスクトップ環境。テスト実行中にPlaywright、Cypressなどのコードを生成します。
- [BugBug](https://bugbug.io) - ウェブアプリケーション向けノーコードテスト自動化ツール。
- [Courgette](https://courgette-testing.com) - Gherkinを使う宣言的なBDD UIテスト。
- [DevAssure](https://app.devassure.io) - 実ブラウザー上のE2EウェブUI向けエージェント型テスト。エージェントをGitHub Actionsへ追加し、PRで変更されたフローだけをテストできます。
- [DeviceLab](https://devicelab.dev) - モバイルテスト向けのプライベートデバイスラボ基盤。自身のiOS／Android端末を接続し、Appium、Maestro、XCUITestをWebRTC経由でリモート実行できます。ゼロトラストアーキテクチャーにより、テストデータを自ネットワーク内に保持します。
- [Ferrum](https://github.com/rubycdp/ferrum) - 高レベルRuby APIを備えたCDP経由のChrome自動化。
- [flutter-skill](https://github.com/ai-dashboad/flutter-skill) - Flutter、React Native、iOS、Android、Electron、Tauri、KMP、.NET MAUI向けに、MCPを介したAI搭載E2Eテストを提供します。テストコードは不要です。
- [Hyperbrowser](https://hyperbrowser.ai) - 組み込みのセッション記録を備えた、拡張可能なヘッドレスブラウザーテスト。
- [Hercules](https://github.com/test-zeus-ai/testzeus-hercules) - オープンソースのE2Eテストエージェント。
- [Kane CLI](https://www.testmuai.com/kane-cli/) - 端末から自然言語でブラウザーテストをローカルまたはCI上で実行し、Playwrightへのエクスポートと共有可能な実行証跡を提供します。
- [Keploy](https://keploy.io) – 実トラフィックからテストケースとモックを自動生成する、API・マイクロサービス向けのオープンソースAI搭載E2Eテストツール。
- [TestMu AI (formerly LambdaTest)](https://www.testmuai.com) - チームが知的にテストして、より速くリリースできるようにする、フルスタックのエージェント型AI品質エンジニアリングプラットフォーム。
- [Mocky Balboa](https://docs.mockybalboa.com/) - フルスタックアプリのサーバー側ネットワークリクエストを実行時に宣言的にモックします。
- [Octomind](https://github.com/OctoMind-dev) - AIを活用したテストケースの発見と保守。
- [playwright-bdd](https://github.com/vitalets/playwright-bdd) - BDD形式のPlaywrightテスト。
- [QA Wolf](https://github.com/qawolf/qawolf) - ブラウザーテストをより速く作成するためのNode.jsライブラリ。
- [tapflow](https://github.com/jo-duchan/tapflow) - iOSシミュレーターとAndroidエミュレーターをブラウザーへ配信し、ローカル設定なしでチーム全体がテストできるセルフホスト型モバイルQAツール。
- [UI Coverage Tool](https://github.com/Nikita-Filonov/ui-coverage-scenario-tool) - 静的なスナップショットではなく、実際のアプリケーション上でUIテストカバレッジを直接追跡・可視化する、オーバーヘッドのない革新的なソリューション。
- [agent-qa](https://github.com/vostride/agent-qa) - メモリーを備えたオープンソースのエージェント型QAハーネス。自然言語でテストを書き、ウェブとモバイルで実行履歴を活用しながら実行して、リリース前にリグレッションを検出します。
  
  
### テスト管理
- [Kiwi TCMS](https://github.com/kiwitcms/Kiwi) - オープンソースのテストケース管理。
- [skipper](https://github.com/get-skipper/skipper) - Google Spreadsheet経由でテスト実行をリアルタイム制御し、コード変更なしで即座に切り替えられます。
- [TestLink](https://github.com/TestLinkOpenSourceTRMS/testlink-code) - オープンソースのテストケース管理システム。
- [Testomatio](https://testomat.io/) - 手動テストと自動テストを同期できる最新のTCMS。

### テストデータ管理
- [Temp Mail 24](https://temp-mail24.com/) - 許可された手動サインアップフローのテスト用に、ブラウザーで使える受信専用の一時メールボックス。
- [sms-florin](https://flo-voice1.com) - 検証フロー（WhatsApp、Telegram、Googleなど）のテスト用に、SMS／OTPコードを受信できる実在の英国電話番号を借りられます。CI／QA自動化向けJS／TS SDKを提供します。
- [DATAMIMIC CE](https://github.com/rapiddweller/datamimic) - モデル駆動の合成テストデータとPII仮名化のためのオープンソースで決定的なエンジン。seedを固定すると、実行ごとに来歴ハッシュ付きのバイト単位で同一の出力を得られます。Python、MIT。
- [JSON Validation Test Cases](https://github.com/UtilHatch/json-validation-test-cases) - パーサー、バリデーター、API、エディター、エラー処理のテストに再利用できる、正常・異常・エッジケースのJSONフィクスチャー。
- [MockJutsu](https://github.com/altansayan/mock-jutsu-api) - 390以上の形式上正しい型（IBAN、TCKN、Luhn、VIN、NHS、SWIFT、MRZなど）を生成するアルゴリズム式オープンソースモックデータエンジン。CLI、REST API、Pythonパッケージ、JMeter
  プラグインを備え、6ロケールに対応します。
- [MockHero](https://mockhero.dev) - 合成テストデータ生成用REST API。156フィールド型、22ロケール、リレーショナルデータ、50ms未満の応答。無料プランがあります。
- [Synth](https://github.com/getsynth/synth) - オープンソースのテストデータジェネレーター。
- [Touca](https://github.com/trytouca/trytouca) - 動作とパフォーマンスを比較する継続的リグレッションテスト。
- [test-each](https://github.com/ehmicky/test-each) - データ駆動テストフレームワーク。

### ブラウザー拡張・ユーティリティ
- [Anchor Browser](https://anchorbrowser.io) - 大規模な自動テスト向けに、ステルス機能とプロキシローテーションを組み込んだクラウドブラウザー基盤。
- [Bug Magnet](https://chrome.google.com/webstore/detail/bug-magnet/efhedldbjahpgjcneebmbolkalbhckfi) - フォームテスト用にフィールドベースの値候補を提示します。
- [Check All](https://chrispederick.com/work/web-developer/) - 欠けている「すべて選択」機能を提供します。
- [Full Page Screenshot](https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl) - ページ全体のスクリーンショットを取得します。
- [Form Filler](https://chrome.google.com/webstore/detail/form-filler/bnjjngeaknajbdcgpfkgnonkmififhfo) - 大きなフォームへダミーデータを自動入力します。
- [ProxySwitcher](https://chrome.google.com/webstore/detail/proxy-switcher-manager/onnfghpihccifgojkpnnncpagjcdbjod) - テスト／本番環境間でプロキシを簡単に切り替えます。
- [Requestly](https://requestly.io/) - ネットワークリクエストを傍受・変更する軽量プロキシ。

### アクセシビリティ・ユーザビリティテスト
- [Colour Blindness Simulator](https://altreus.github.io/colourblind/) - さまざまな種類の色覚特性をシミュレートします。
- [RatedWithAI](https://ratedwithai.com) - ADAおよびWCAG 2.2への準拠を検査し、即座に実行可能な監査結果を示すAI搭載ウェブサイトアクセシビリティスキャナー。
- [squirrelscan](https://squirrelscan.com) - 260以上の規則でウェブサイトのアクセシビリティ、SEO、パフォーマンス、セキュリティを監査し、CLI、クラウド、MCPからコーディングエージェント向けに具体的な修正内容を返します。
- [VertaaUX CLI](https://github.com/VertaaUX/cli) - 端末とCIからUX、アクセシビリティ、コンバージョンを監査し、スコアベースの品質ゲートとPRのリグレッション検出を提供します。
- [WAVE](https://wave.webaim.org/) - 障害のある方にとってウェブコンテンツをよりアクセシブルにするために、制作者を支援する評価ツール一式。

### パフォーマンス・負荷テスト
- [Yslow](http://yslow.org/) - Yahoo!の規則に基づいてウェブページのパフォーマンスを分析します。
- [Load Testing Hub Panel](https://github.com/Nikita-Filonov/load-testing-hub-panel) - 負荷テスト結果を可視化する包括的なWeb UI。

### Web3・ブロックチェーンテスト
- [Cannon](https://usecannon.com/) - Ethereum向けの継続的設定自動化。
- [Dapp.tools](https://dapp.tools/) - Ethereum向けコマンドラインツールとスマートコントラクトライブラリ。
- [Ganache](https://trufflesuite.com/ganache/) - テスト実行用の個人向けEthereumブロックチェーン。
- [Foundry](https://github.com/foundry-rs/foundry) - Ethereum開発向けの高速でモジュール式のツールキット。
- [Hardhat](https://hardhat.org/) - Ethereumの開発・テスト環境。
- [Truffle Suite](https://trufflesuite.com/) - 包括的なスマートコントラクト開発スイート。
- [Robot Framework Solidity Testing Toolkit](https://github.com/jg8481/Robot-Framework-Solidity-Testing-Toolkit) - Solidityテスト向けRobot Framework統合。

### テスト自動化フレームワーク
- [Jumpstarter](https://github.com/jumpstarter-dev/jumpstarter) - CI/CD統合により実機・仮想ハードウェア上で自動テストを行う、オープンソースのHardware-in-the-Loopテストフレームワーク。
- [Robot Framework](https://robotframework.org/) - テストとRPA向けの汎用オープンソース自動化フレームワーク。
- [ai-natural-language-tests](https://github.com/aiqualitylab/ai-natural-language-tests) - LangGraph、ChromaDB、複数プロバイダーのLLM対応を使い、自然言語の要件からCypressとPlaywrightのE2Eテストを生成します。
- [OpenTester](https://github.com/kznr02/OpenTester) - MCPファーストのテストフレームワーク。AIエージェントが人間のようにテストできます。

### 画面録画・セッション再生
- [Captura](https://github.com/MathewSachin/Captura) - オープンソースの動画録画ツール。
- [PR Preview](https://www.pr-preview.com/) - ヘッドありブラウザーでウェブアプリを操作し、プルリクエストの変更前後をMP4またはGIFのデモ動画として記録するClaude Code向けMCP。
- [rrweb](https://github.com/rrweb-io/rrweb) - DOMとユーザー操作を型付きJSONイベントストリームとして記録し、ピクセル単位で正確に再生します。

### マインドマッピング・ドキュメント作成
- [Xmind](http://www.xmind.net/) - テストケースと戦略を文書化するマインドマッピングツール。

### A/Bテスト
- [Kirro](https://kirro.io) - ビジュアルエディター、ベイズ統計、GA4コンバージョン追跡を備えたA/Bテストツール。


## 書籍
- [The Scrum Field Guide, Agile advice for your first year and beyond](https://amzn.to/2OERKEm) - 企業をAgileへ移行する理由と、そのための優れた実践的アドバイス。
- [Fifty quick ideas to improve your Tests](https://amzn.to/2AzMUF7) - テストの改善方法とその理由を示す優れた例。議論で勝つための根拠としても役立ちます！
- [Agile Testing: A Practical Guide](https://amzn.to/2n1K2aG) - テスターとしてAgileへ移行したい方のためのハウツーと、著者たちのAgileチームでの働き方を扱うガイド。
- [Explore It!: Reduce Risk and Increase Confidence with Exploratory Testing](https://amzn.to/2n8axLn) - 探索的テストの構成とテスト設計についての優れた書籍。
- [The Domain Testing Workbook](https://amzn.to/2Az4l90) - 現在広く使われているテスト技法、ドメインテスト（境界値分析、同値クラス分割とも呼ばれる）を、多数の例で深く解説します。
- [Don't Make Me Think: A Common Sense Approach to Web Usability](https://amzn.to/2naYmhf) - ユーザビリティテストに非常に役立つ書籍。
- [Lessons Learned in Software Testing](https://amzn.to/2LTjM01) - ソフトウェアテストに関する最良の書籍の一つ。出版時と同様に現在も適用できる内容を、読みやすい小さな教訓へ分けています。
- [UI is Communication](https://amzn.to/2vbiALY) - 直感的なユーザーインターフェースの作り方（UI・ユーザビリティテスト）。
- [Thinking, Fast and Slow](https://amzn.to/2vcjasX) - 意思決定の仕組みと実験（実験＝テスト）の進め方について。
- [Chaos Engineering: Crash test your applications](https://www.manning.com/books/chaos-engineering) - 制御されたソフトウェア障害実験を設計・実行する方法を扱う書籍。
- [Testing JavaScript Applications](https://www.manning.com/books/testing-javascript-applications) - 開発者向けのJavaScriptテストツールと技法を扱う書籍。
- [Chaos Engineering](https://www.manning.com/books/chaos-engineering) - 隠れた問題を発見する制御実験の設計・実行方法を解説します。
- [The Art of Unit Testing, Third Edition](https://www.manning.com/books/the-art-of-unit-testing-third-edition) - 最初の簡潔な単体テストから、保守しやすく読みやすく信頼できる完全なテストセットの構築までを段階的に案内します。
- [Testing Web APIs](https://www.manning.com/books/testing-web-apis) - 自動テストプロセスの実装により、Web APIの品質と一貫性を保証します。
- [Effective Software Testing](https://www.manning.com/books/effective-software-testing) - 高品質なテストを体系的かつ効果的に作成する方法についての開発者向け実践ガイド。

## トレーニング（自動化テスター向け開発者トレーニングを含む）
- [Learn to Code](https://github.com/karlhorky/learn-to-program) - 開発者トレーニング用の別のAwesomeリスト。
- [The Dojo](https://dojo.ministryoftesting.com/) - テストコミュニティから直接提供されるコースと講演。
- [Coursera](https://www.coursera.org/) - 有力大学によるオンラインコース。
- [Cybrary](https://www.cybrary.it/) - 無料のオンラインセキュリティトレーニング。
- [BBST Testing Courses](https://bbst.courses/bbst-testingeducation-materials/) - 著名なBlack Box Software Testing（BBST）コースは、ソフトウェアテストの基礎、バグ報告、テスト設計に関する大学水準のコースです。教材は誰でも使えるCreative Commonsライセンスで提供され、記事、スライド、動画講義を含みます。
- [FrontRow](https://github.com/majdukovic/frontrow) - QA自動化の実践的なトレーニング環境として構築されたオープンソースReact Nativeモバイルアプリ。クロスプラットフォームのtestIDがMaestro、Appium、Espresso、XCUITestで動作し、詳細なQA Debug Menuから、不安定なバックエンドなしで実際の本番環境で問題となる障害モード（4xx、5xx、タイムアウト、オフライン、権限拒否、IAP拒否、期限切れトークン）を強制できます。

## ブログ
- [James Bach](http://www.satisfice.com/blog/)
- [Michael Bolton](http://www.developsense.com/blog/)
- [Janet Gregory](http://janetgregory.ca/blog/)
- [Nikita Sobolev](https://sobolevn.me/)
- [Softwaretester Blog](https://www.softwaretester.blog/)
- [Automation Panda](https://automationpanda.com/)
- [その他](https://github.com/ChristoWolf/awesome-testing-blogs)

## ニュースレター
- [Coding Jag](https://www.testmuai.com/newsletter) - AI、テスト、開発、CI/CD、自動化の最新情報を毎週届け、時代の先を行くための情報源。
- [Software Testing Weekly](https://softwaretestingweekly.com/) - 毎週金曜日に公開される、優れたソフトウェアテストのニュースとツールを厳選したまとめ。

## おすすめのAwesomeリスト

### 必読
- [Falsehoods](https://github.com/kdeldycke/awesome-falsehood) - ソフトウェア開発では何事も簡単ではない理由を示す、面白く教育的なリスト。婚姻関係をDBへ保存できると思いますか？
- [Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings) - 有名なNaughty Stringsのリスト。フィールド検証をするなら、着想を得るのに最適です。
- [Unicode](https://github.com/jagracey/Awesome-Unicode) - Unicodeの仕組みと、それが引き起こしうる問題を学ぶための優れたリソース。

### 便利な参考資料
- [The Original](https://github.com/sindresorhus/awesome) - Awesomeリストを集めたAwesomeリスト。
- [Learn to Code](https://github.com/karlhorky/learn-to-program) - 自動化への移行を考えている方のためのプログラミング学習。
- [Application Security](https://github.com/paragonie/awesome-appsec) - 非常に広範ですが、目的に合うものを見つけられます。
- [Selenium](https://github.com/christian-bromann/awesome-selenium) - 必要なものが分かっている場合、Google検索より便利です。
- [Security](https://github.com/sbilly/awesome-security) - 主にインフラストラクチャーを対象としていますが、一連のシステムをテストする場合に非常に便利です。
- [Awesome Software Quality](https://github.com/ligurio/awesome-software-quality) - 無料のソフトウェアテスト・検証リソース一覧。
- [Awesome AI Testing](https://github.com/tugkanboz/awesome-ai-testing) - テスト生成、自己修復型自動化、MCPベースのテスト、LLM-as-judge評価を含む、QAエンジニア向けAI搭載テストツール、フレームワーク、リソースの厳選リスト。
- [Awesome Cucumber](https://github.com/virajkulkarni14/awesome-cucumber) - Cucumber・Gherkin関連リソースを集めた、比較的新しい厳選リスト。
- [Awesome JMeter](https://github.com/aliesbelik/awesome-jmeter) - Apache JMeter関連リソースの厳選コレクション。
- [Awesome Performance Engineering](https://github.com/be-next/awesome-performance-engineering) - 可観測性とパフォーマンステストを扱う、パフォーマンスエンジニアリング向けツール・リソースの厳選コレクション。
- [How They Test](https://github.com/abhivaikar/howtheytest) - テック企業がソフトウェアをどのようにテストし、品質文化を築いているかについての公開資料を厳選したコレクション。
- [Awesome Behave](https://github.com/MathiasPaulenko/awesome-behave#readme) - Python BDD向けBehaveのリソース、ツール、ライブラリを厳選したリスト。

## QA・テストのロードマップ
- [QA・テストのキャリアを始める方法](https://github.com/fityanos/Quality-Assurance-Road-Map) - ソフトウェアテストと自動化のキャリアを始めるために必要な戦略、トピック、技能を幅広く豊富にまとめたリスト。
- [QALadder](https://qaladder.org) - 手動QAからSDETまでを順序立てて学べる無料ロードマップ。150問の面接問題集、ブラウザーベースの練習ラボ、QAツールを備えます。

## その他
- [Testers Rage Playlist](https://play.spotify.com/user/sanchezni/playlist/5yzT0HrymwEeO8ckqgkPiW) - 怒りが込み上げたときに聴く、テスターたちによる共同プレイリスト。
- [Software Testing Conferences](http://testingconferences.org/) - ソフトウェアテストのカンファレンスとワークショップ一覧。
- [Software Testing Interview Tool](https://github.com/TheJambo/ToDoInterviewTest) - 対面面接を進めるための、非常にバグの多いTo Do List。

## 貢献
貢献方法の詳細は、*Awesome Testing*の[貢献ガイド](https://github.com/TheJambo/awesome-testing/blob/e7635cad01b538db3b30ac71dd0e16d93f0057c1/CONTRIBUTING.md)を参照してください。

## 行動規範
詳細は[行動規範](https://github.com/TheJambo/awesome-testing/blob/e7635cad01b538db3b30ac71dd0e16d93f0057c1/CODE-OF-CONDUCT.md)を参照してください。要約すると次のとおりです。
>開かれた歓迎すべき環境を育むため、貢献者とメンテナーである私たちは、年齢、体格、障害、民族、性自認と性表現、経験レベル、国籍、外見、人種、宗教、性的アイデンティティと指向にかかわらず、すべての人がハラスメントを受けずにプロジェクトとコミュニティへ参加できるようにすることを誓います。


## ライセンス
[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で可能な範囲において、[貢献者](https://github.com/TheJambo/awesome-testing/graphs/contributors)は、この作品に関するすべての著作権および関連する権利、隣接権を放棄しています。詳細は[ライセンスファイル](https://github.com/TheJambo/awesome-testing/blob/e7635cad01b538db3b30ac71dd0e16d93f0057c1/LICENSE)を参照してください。
