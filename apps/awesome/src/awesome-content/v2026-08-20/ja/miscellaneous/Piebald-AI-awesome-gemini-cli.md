---
title: "Piebald-AI/awesome-gemini-cli"
description: "Piebald-AI/awesome-gemini-cli の定本スナップショット"
licenseSource: "github-Piebald-AI-awesome-gemini-cli-readme-md"
---

<div>
<div align="right">
<a href="https://piebald.ai"><img width="200" top="20" align="right" src="https://github.com/Piebald-AI/.github/raw/main/Wordmark.svg"></a>
</div>

<div align="left">

### Piebaldをチェック
究極のエージェント型AI開発体験を提供する **Piebald** をリリースしました。 \
ダウンロードして無料でお試しください！ **https://piebald.ai/**

<a href="https://piebald.ai/discord"><img src="https://img.shields.io/badge/Join%20our%20Discord-5865F2?style=flat&logo=discord&logoColor=white" alt="Join our Discord"></a>
<a href="https://x.com/PiebaldAI"><img src="https://img.shields.io/badge/Follow%20%40PiebaldAI-000000?style=flat&logo=x&logoColor=white" alt="X"></a>

<sub>[**Awesome Gemini CLIへスクロール。**](#awesome-gemini-cli-) :point_down:</sub>

</div>
</div>

<div align="left">
<a href="https://piebald.ai">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://piebald.ai/screenshot-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="https://piebald.ai/screenshot-light.png">
  <img alt="hero" width="800" src="https://piebald.ai/screenshot-light.png">
</picture>
</a>
</div>

# Awesome Gemini CLI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<a href="https://github.com/google-gemini/gemini-cli" rel="noopener"><img width="4339" height="1373" alt="banner" src="./assets/banner.png" /></a>

Geminiの能力をターミナルで利用できるオープンソースAIエージェント [Gemini CLI](https://github.com/google-gemini/gemini-cli) 向けの優れたツール、拡張機能、リソースを集めた一覧です。[Awesome Gemini CLI Extensions](https://github.com/Piebald-AI/awesome-gemini-cli-extensions) も参照してください。

**Gemini CLI向けの優れたものを開発しましたか？** この一覧へ追加してください。[コントリビューション](#contributing)を参照してください。



## :tada: 新着
- [Darkmoon](https://github.com/ASCIT31/Dark-Moon) - GPL-3.0の自律的なパーセンテーションテストプラットフォーム：技術ごとのエージェント、80以上のツール、証拠に基づく結果、そしてターゲットデータをモデルから遮断するプライバシーガイアート
- [llm-box](https://github.com/alib8b8/llm-box) - ターミナル中心のワークフロー自動化エンジン。自然な英語からYAMLワークフローを生成・実行。20以上の組み込みノード、15以上のLLMプロバイダー、MCPサーバーモード。`gemini extensions install https://github.com/alib8b8/llm-box` からインストール。
- [Maestro](https://github.com/josstei/maestro-gemini) - Gemini CLIをマルチエージェントプラットフォームに変換 — 12の専門サブエージェント、並列実行、4段階のオーケストレーション、コードレビュー、デバッグ、セキュリティ、パフォーマンスのためのスタンドアローン開発ツールを備える
- [Task Monitor](https://github.com/davidwiet/task-monitor) - メッセージトラッキングによりエージェントループを防止し、長時間のタスクやフォーカス外のプロンプトに対して音声通知を発生させる
- [Signum](https://github.com/heurema/signum) - Gemini CLIを3つの独立したレビュアーの一つとして、マルチモデルコード審査パネル（クラウドとコデックスとともに）に活用する、証拠に基づいた開発パイプライン。
- [Tars](https://tars.saccolabs.com) - Google Geminiをベースにしたローカル優先の自律監視者とアシスタント。バックグラウンド永続化（ハートビート）、階層型ローカルメモリ、マルチチャネル通知（ディスコード／ワタサビ）、自己回復バックグラウンドサービスを備えている。ターミナル内で信頼性高く長期間運用可能なエージェントオーケストレーションに設計。
- [ATXP](https://github.com/atxp-dev/atxp) - Gemini CLIエージェントにウォレット、メールアドレス、電話番号、100以上の有料MCPツール（ウェブ検索、画像生成、SMS、音声、LLMゲートウェイ）を提供。`gemini extensions install https://github.com/atxp-dev/atxp` で自ら登録可能 — 人間のログイン不要、5ドル分の無料クレジット付き。
- [Untether](https://github.com/littlebearapps/untether) - Gemini CLI（および5つの他のエージェント）向けのTelegramブリッジ。音声でタスクを送信し、進行状況をストリーム表示し、インラインボタンで承認モード（読み取り専用／ファイル編集／フルアクセス）を設定。セルフホスト、MITライセンス。
- [Parallel Code](https://github.com/johannesjo/parallel-code) - 複数のAIコーディングエージェント（Claude Code、Codex CLI、Gemini CLI）を同時に、隔離されたgitワークツリー内でオーケストレーションするデスクトップアプリ。
- [wolfpack](https://github.com/almogdepaz/wolfpack) - スマートフォンから、AIコーディングエージェント（Claude、Codex、Gemini）を複数のマシンで制御するモバイル・デスクトップコマンドセンター。Tailscaleでセキュア。セルフホスト。
- [Xquik MCP](https://github.com/Xquik-dev/x-twitter-scraper) - X/TwitterデータMCPサーバー。76のREST APIエンドポイント、20の抽出ツール、アカウント監視、プレゼント抽選機能を備えている。Gemini CLIを含むすべてのMCPクライアントと互換性がある
- [rule-gen](https://github.com/nedcodes-ok/rule-gen) - 実際のコードベースからAIコーディングルールを生成。ソースファイルをGoogle Geminiの1Mトークンコンテキストウィンドウに投入し、プロジェクトに特化したルールを生成。カーソル（.mdc）、クラウド・コード（CLAUDE.md）、コピロ、ウィンズルフの出力フォーマットをサポート。依存関係なし。
- [Pluribus](https://github.com/caioribeiroclw-pixel/pluribus) - 1つの標準プロジェクトコンテキストを、ネイティブAIコーディングエージェントのルールファイルに同期。含まれるGemini CLI `GEMINI.md`、Claude Code `CLAUDE.md`/`AGENTS.md`、Cursor、Cline、Roo Code、Amazon Q、Junie、Warp、Copilot、Windsurf、Continue、Zed、OpenCode、OpenClaw。
- [BGPT MCP](https://github.com/connerlambden/bgpt-mcp) - 科学論文を検索し、全文研究から構造化された実験データ（方法、結果、サンプルサイズ、品質スコア）を取得。Gemini CLIを含む任意のMCPクライアントと対応。

> [!tip]
> **[Splitrail](https://github.com/Piebald-AI/splitrail) でローカルのGemini CLI使用状況を追跡できます。**

## 目次

- [目次](#contents)
- [公式](#official)
- [インターフェース](#interfaces)
- [フォーク](#forks)
- [娯楽](#fun)
- [開発ツールとユーティリティ](#development-tools--utilities)
- [SDK](#sdks)
- [APIブリッジとプロキシ](#api-bridges--proxies)
- [コマンドと拡張機能](#commands--extensions)
- [プロンプト](#prompts)
- [MCPサーバー](#mcp-servers)
- [Neovimプラグイン](#neovim-plugins)
- [開発フレームワークとオーケストレーション](#development-frameworks--orchestration)
- [ドキュメントと学習リソース](#documentation--learning-resources)
- [デモ集と例](#demo-collections--examples)
- [コントリビューション](#contributing)

## 公式

Gemini CLIチームが管理する中核ツールとリソースです。

- [Gemini CLI](https://github.com/google-gemini/gemini-cli) - ジミーCLIの公式オープンソースAIエージェント。ターミナルにジミーの力を直接導入。コンテキスト認識によるコード支援、ファイル操作、コマンド実行機能を備えている
- [Gemini CLI cookbook](https://github.com/google-gemini/cookbook) - ジミーAPIの使用法に関するベストプラクティスを示す公式な例とガイドのコレクション。新規開発者にとって必須のリソース
- [Run Gemini CLI](https://github.com/google-github-actions/run-gemini-cli) - ジミーをCI／CDパイプラインに自然に統合する公式なGitHubアクション。自動コードレビュー、テスト、ドキュメント生成を可能にする

## インターフェース

ターミナル以外からGemini CLIを操作する代替ユーザーインターフェースとフロントエンドです。

- [Gemini CLI Desktop](https://github.com/Piebald-AI/gemini-CLI-desktop) - 非ターミナル／モバイルユーザーでも利用可能な美しいデスクトップおよびウェブUI。ジミーCLIのすべての強力な機能を維持する
- [AionUi](https://github.com/iOfficeAI/AionUi) - ジミーCLI向けの無料、ローカル、オープンソースGUIアプリ——Better Chat UI、ファイル管理、AI画像編集、マルチエージェント対応、マルチLLMおよびAPIキーのポーリング、コード差分ビューなど
- [Yaw](https://yaw.sh) - マルチプラットフォーム対応のターミナル。ジミーCLIを自動検知し、共存ターミナルと分割パネルワークフローを起動
- [Termly](https://termly.dev/) - 無料のiOSおよびAndroidアプリ。ジミーCLI（および他のCLIAIアシスタント）をリモートで監視・制御。ゼロ知識E2E暗号化。QRコードで60秒以内にペアリング。サブスクリプションなし、使用制限なし

## フォーク

機能強化や代替モデル対応を加えたGemini CLIの派生版です。

- [LLxprt Code](https://github.com/vybestack/llxprt-code) - ジミーCLIのオープンソースマルチプロバイダー（含むローカル）フォーク。ターミナルで使用するLLMを自由に選択できる
- [iFlow CLI](https://github.com/iflow-ai/iflow-cli) - ジミーCLIにリポジトリ分析、コンテキスト解釈、複雑なワークフロー自動化を追加した強力なフォーク。高度なオーケストレーション機能が必要なチームに最適
- [Qwen Code](https://github.com/QwenLM/qwen-code/) - チームがQwen LLMを構築したフォーク。GeminiではなくQwenを使用。

## エージェントオーケストレーションとCLIツール

- [Ralph Harness](https://github.com/rxdt/py_ralph_frame) - ミニマムなPythonフレームワークで、Gemini CLI、Claude Code、Codex CLI、および類似のコーディングエージェントを、安全なローカルループ内で実行可能にする。リポジトリローカル仕様、新コンテキストイテレーション、ハードカプ、Gitホックゲート、CI検証、カバレッジゲートを採用。
- [Bernstein](https://github.com/chernistry/bernstein) - Gemini CLIとClaude Code、Codex CLIを連携させるマルチエージェントオーケストレーター。一つの目標から並列にコーディングエージェントをスパウンドし、テストで検証し、自動コミット。決定論的なPython連携、オーケストレーションにLLMトークンゼロ。
- [Tars](https://tars.saccolabs.com) - Google Geminiをベースにしたローカル優先の自律監視者とアシスタント。バックグラウンド永続化（ハートビート）、階層型ローカルメモリ、マルチチャネル通知（ディスコード／ワタサビ）、自己回復バックグラウンドサービスを備えている。ターミナル内で信頼性高く長期間運用可能なエージェントオーケストレーションに設計。
- [hcom](https://github.com/aannoo/hcom) - AIエージェントがターミナル間でメッセージを送り合い、監視し、互いにスパウンドできる。Gemini CLIの第一クラスサポートを備え、ホック統合とPTYワッパーを提供。また、Claude Code、Codex、OpenCodeにも対応。
- [squads-cli](https://github.com/agents-squads/squads-cli) - AIエージェントの連携用オープンソースCLI。エージェントをドメインに沿ったスquadに分類し、持続的なメモリ、目標追跡、Gitネイティブな状態を提供。Gemini CLIと連携。
- [wolfpack](https://github.com/almogdepaz/wolfpack) - スマートフォンから、AIコーディングエージェント（Claude、Codex、Gemini）を複数のマシンで制御するモバイル・デスクトップコマンドセンター。Tailscaleでセキュア。セルフホスト。
- [Untether](https://github.com/littlebearapps/untether) - Gemini CLI（および5つの他のエージェント）向けのTelegramブリッジ。音声でタスクを送信し、進行状況をストリーム表示し、インラインボタンで承認モード（読み取り専用／ファイル編集／フルアクセス）を設定。セルフホスト、MITライセンス。
- [Parallel Code](https://github.com/johannesjo/parallel-code) - 複数のAIコーディングエージェント（Claude Code、Codex CLI、Gemini CLI）を同時に、隔離されたgitワークツリー内でオーケストレーションするデスクトップアプリ。
- [clideck](https://github.com/rustykuntz/clideck) - ディスコードのようなダッシュボードで、複数のAIコーディングエージェント（含むGemini CLI）を1つのブラウザウィンドウで管理。リアルタイムステータス、セッションの再開、AFK時におけるエージェント間の作業ルート自動パイロット、モバイルからのリモートチェックイン。
- [ToutKit](https://github.com/toutkit/toutkit) - デスクトップノートブックで、Gemini CLIとClaude Code、Codexを並行実行。アプリ内ウェブビューでエージェントが書いた内容をリアルタイムに表示。各ノートは独自のSQLite、ファイル、スクリプトを含む独立したフォルダ。ローカル優先、Electron、AGPL-3.0。
- [Ivy Tendril](https://github.com/Ivy-Interactive/Ivy-Tendril) - Gemini CLI、Claude Code、Codex、Copilotを、計画ベースのライフサイクルと検証ゲート、自己改善メモリ、gitワークツリー分離を介してオーケストレーションするオープンソースデスクトップアプリ。ローカル優先、エージェント無関係、FSLライセンス。
- [postmortemthis](https://github.com/Softeria/postmortemthis) - Gemini CLIと他のコーディングエージェント（Claude Code、Codex、Qwen、Vibe）を並列に実行し、差分を読み取りながらのみ読み取りモードで実行。その後、各エージェントのレビューを統合し、1つの「出荷／出荷不可」の判断に変換。マルチモデルレビューパネル。
- [CodeAgentSwarm](https://www.codeagentswarm.com) - macOS、Windows対応のデスクトップアプリで、Claude CodeおよびCodex CLIと並行に複数のGemini CLIターミナルを実行。人間の監視下で動作。エージェントが終了または入力が必要な場合にデスクトップ通知、セッション間の会話履歴、ターミナルごとのファイル差分、MCPカンバンボードを提供。
- [AgentBox](https://github.com/madarco/agentbox) - 複数のコーディングエージェント（Gemini CLI、Claude Code、Codex、OpenCode）を並列に実行。それぞれが独自のセキュリティ確保されたVM（ローカルDocker、セルフホスト、またはクラウド：Hetzner、Daytona、Vercel、E2B、DigitalOcean）にテレポート。1秒未満のチェックポイント起動。Git認証はホストに残る。MIT。
- [DevIntern](https://github.com/getdevintern/devintern) - Jira、Linear、Trello、Asana、Azure DevOps、GitHub Issues、またはマーカーファイルからチケットを拾い、Gemini CLIを非インタラクティブに駆動して、自らレビューするプルリクエストに変換するツール（Claude Code、Codexなどにも対応）。実現可能性ゲートは、曖昧なチケットをトラッカーに返し、質問を付与。オプションの無人モードは、チケット拾いをスケジュールし、PRレビューコメントをコミットに変換。自社マシンで実行し、Googleキーを自社で使用。FSL-1.1、インタラクティブ使用は無料。
- [PickySteve](https://github.com/KernelLord/pickysteve) - コーディングエージェント向けのスキルルーターとコンテキスト選択器：ローカルモデル（Ollama経由、デフォルトでオフライン）が、ハイブリッドBM25＋エンベディング検索、クロスエンコーダーリランク、LLMジャッジを経て、各プロンプトに適切なスキルをルートし、実行モデルに必要な最小コンテキストバンドルを構成。組み込みのプロンプトインジェクションゲートがすべての検索されたドキュメントをスキャンし、失敗閉鎖。MCP stdioサーバーとOpenAI対応プロキシを提供。1コマンドインストールで18のコーディングエージェント（含むGemini CLI）を接続。MIT。
- [Better Agent](https://github.com/ofekron/better-agent) - Gemini CLI、Claude Code、Codexの持続的なセッションをローカルに実行するワークスペース。実行を離脱可能にし、再起動回復、並列フォーク、委任、承認ゲートを備える。ソース公開；非営利用途は無料。
- [Agentlas OS](https://github.com/agentlas-ai/Agentlas-OS) - Gemini CLIおよびその他のサポートホストにインストールされるローカル優先エージェントオペレーション環境（AOE）。携帯パッケージ、権限、検証ゲートを備え、専門エージェントチームの構築、ルート、実行を可能にする。
- [intentic](https://github.com/intentic/intentic) - 複数のAIエージェントやGemini CLIの実行・管理を支援するツールです。 参照: `gemini --experimental-acp`
- [SandBase CLI](https://github.com/sandbaseai/cli) - Gemini CLIおよびその他のAIコーディングエージェントが1アカウントで2,000以上のAIモデルにアクセスできるオープンソースCLIおよびMCPブリッジ。

## コマンドと拡張機能

**👉 [Awesome Gemini CLI Extensions](https://github.com/Piebald-AI/awesome-gemini-cli-extensions) も参照してください。** \
Gemini CLIへ新しい機能を追加するカスタムコマンドと拡張機能です。

- [llm-box](https://github.com/alib8b8/llm-box) - ターミナル中心のワークフロー自動化エンジン。自然な英語からYAMLワークフローを生成・実行。20以上の組み込みノード（fetch_url、execute、ファイルI/O、HTTP、JSONパーサー、テンプレートレンダリング、LLM呼び出し）、15以上のLLMプロバイダー、MCPサーバーモード。`gemini extensions install https://github.com/alib8b8/llm-box` からインストール。
- [Task Monitor](https://github.com/davidwiet/task-monitor) - メッセージトラッキングによりエージェントループを防止し、長時間のタスクやフォーカス外のプロンプトに対して音声通知を発生させる
- [ATXP](https://github.com/atxp-dev/atxp) - Gemini CLIエージェントにウォレット、メールアドレス、電話番号、100以上の有料MCPツール（ウェブ検索、画像生成、SMS、音声、LLMゲートウェイ）を提供。`gemini extensions install https://github.com/atxp-dev/atxp` で自ら登録可能 — 人間のログイン不要、5ドル分の無料クレジット付き。
- [brooks-lint](https://github.com/hyhmrright/brooks-lint) - 6冊の古典的エンジニアリング書に基づいたAIによるコードレビュー。構造化された診断結果（症状→原因→影響→対策）を用いて、劣化リスクを診断する
- [gemini-notifier](https://github.com/thoreinstein/gemini-notifier) - Geminiが権限を要求する際に、システムレベルの通知をネイティブで送信するGemini拡張機能
- [Pickle Rick](http://github.com/galz10/pickle-rick-extension) - この拡張機能はGemini CLIを「ピクル・リック」として、高度に知能を持つが、自慢げでありながら極めて優れたエンジニアリングパーソナリティに変換する。継続的なAIエージェントループを通じて、厳格なイテレーティブソフトウェア開発ライフサイクルを強制する
- [gemini-beads](https://github.com/thoreinstein/gemini-beads) - Gitベースの持続可能なメモリとタスク管理をGemini CLIに提供
- [Conductor](http://github.com/gemini-cli-extensions/conductor) - ConductorはGemini CLI拡張機能であり、ソフトウェア機能の指定、計画、実装を可能にする
- [Listen](https://github.com/automateyournetwork/GeminiCLI_Listen_Extension) - /listenコマンドでGemini CLIをサーバーとして実行する
- [Screenshare](https://github.com/automateyournetwork/GeminiCLI_ScreenShare_Extension) - MCPとカスタムスラッシュコマンドを用いたスクリーン共有
- [pyATS](https://github.com/automateyournetwork/pyATS_GeminiCLI_Extension) - ネットワークテスト用のpyATS統合
- [Subnet calculator](https://github.com/automateyournetwork/GeminiCLI_SubnetCalculator_Extension) - GeminiCLIにサブネット計算を行う拡張機能
- [Packet Buddy](https://github.com/automateyournetwork/GeminiCLI_Packet_Buddy_Extension) - RAGとMCPおよびカスタムスラッシュコマンドを用いてパケットキャプチャを分析するGemini CLI拡張機能
- [Flutter Gemini CLI extension](https://github.com/flutter/gemini-cli-extension) - Flutterコードの作成と維持を支援する、公式のGemini CLI拡張機能
- [gemini-cli-on-vscode](https://github.com/d3j/gemini-cli-on-vscode) - MAGUS カウンシル：世界初の4AIコンサルテーションシステム（Gemini＋Claude＋GPT-5＋Qwen）をVS Codeに搭載 — 革新的なマルチエージェント開発環境
- [GeminiCLI_Slash_Listen](https://github.com/automateyournetwork/GeminiCLI_Slash_Listen) - 革新的な`/listen`コマンドにより、Slackを通じてリモートでジンミーCLIにアクセス可能。協働開発やリモートサポートシナリオに最適。
- [gemini-cli-custom-slash-commands](https://github.com/amitkmaraj/gemini-cli-custom-slash-commands) - プロダクティビティ向上を目的としたカスタムスラッシュコマンドのキュレーションコレクション。Gemini CLIに専門的なワークフローとショートカットを追加する
- [gemini-flow](https://github.com/clduab11/gemini-flow) - クラウド・フローパターンを用いて、Gemini CLIを自律的なAI開発チームに変換し、複雑なマルチエージェントワークフローを可能にする
- [**ru-text**](https://github.com/talkstream/ru-text) - ロシア語の品質規則 — テキストスタイル、情報スタイル、編集スタイル、UXライティング、ビジネス対応などに約1,040のルールを提供
- [TokRepo Search Skill](https://github.com/henu-wang/tokrepo-search-skill) - マルチプラットフォーム対応のTokRepoスキル。Gemini拡張ファイルを用いて、プロンプト、MCP設定、ワークフロー、再利用可能なスキルなどのAI資産の検索とインストールを可能にする
- [dRPC Agent Skills](https://github.com/drpcorg/drpc-agent-skills) - Gemini CLIからブロックチェーンRPCをクエリ。バランスの取得、契約の読み取り、ガス価格の確認をdRPCを介して実行
- [OpenAccountants](https://github.com/openaccountants/openaccountants) - 134カ国における371の税分類スキル。銀行明細の取引をVAT/GST、所得税、社会貢献分類に分類。保守的なデフォルト値を採用
- [gemini-discord](https://github.com/Yamato-main/gemini-discord) - ローカルのGemini CLIエージェントを、常にオンのDiscord存在に変換し、個人のサーバー管理者としても機能する
- [xberg-io plugins](https://github.com/xberg-io/plugins) - Kreuzberg, Inc.によるジンミーCLI拡張ツールセット：ドキュメント抽出（xberg — 97以上のフォーマット含むOCR）、ウェブスクレイピング（crawlberg）、HTML→Markdown、143プロバイダー向けのユニバーサルLLMクライアント（liter-llm）、300以上の言語対応コードインテリジェンス（tree-sitter-language-pack）。`gemini extensions install`からインストール。
- [16-eyes](https://github.com/kigiela/16-eyes) - カスタムジンミーCLIコマンドとサブエージェントによるAI駆動セキュリティ診断（Claude Code、Cursor、GitHub Copilotにも対応）— リポジトリをプロファイリングし、すべての発見を検証し、報告前に高影響の項目を敵対的に否定。`npx 16-eyes install --target gemini`からインストール。
- [wiki](https://github.com/plasma-ai/wiki) - CLIとインストール可能なエージェントスキルを備えたインデックス化されたMarkdown知識ベース。`wiki install`がスキルを`~/.agents/skills`に書き込み、ジンミーCLIがそのスキルを発見。

## 娯楽

Gemini CLIに個性や遊び心を加える創造的なツールです。

- [Oh My Logo](https://github.com/shinshin86/oh-my-logo) - Gemini CLIに個性や遊び心を加えるツールです。

## 開発ツールとユーティリティ

Gemini CLIを使う開発ワークフローを強化するツールです。

- [CCHub](https://github.com/Moresl/cchub) - クラウド・コード、コデックス、ジミーCLI、オープンコードにわたるMCPサーバーとAIコーディングツールの設定を管理するデスクトップアプリ。MCPマーケットプレイス、設定プロファイルの切り替え、ワークフローテンプレート、セキュリティ診断。Tauri + React + Rustで構成。
- [agnix](https://github.com/avifenesh/agnix) - AIアグエント設定用のリントツール。GEMINI.md、SKILL.md、hooks、MCPなどについて156のルールで検証し、自動修正とLSPサーバーを用いて編集時にリアルタイムで診断を行う。
- [Self Command](https://github.com/stevenAthompson/self-command) - ジミーCLIが自身にコマンドを送信し、バックグラウンドで非常に長いコマンドを実行し、指定された時間で睡眠状態に移行し、ログを監視し、通知を受け取るなど、tmuxを活用することで実現。ループ検出を回避することで使用量を減らし、信頼性を向上。拡張をインストール後、"gemini-cli"という名前のtmuxセッションにジミーCLIを起動する必要があります。
- [vsync](https://github.com/nicepkg/vsync) - クラウド・コード、カーソル、オープンコード、コデックス、ジミーCLIにわたってスキル、MCPサーバー、エージェント、コマンドを同期。自動フォーマット変換（JSON ↔ TOML ↔ JSONC）を実施。
- [Gemini Dockerized CLI](https://github.com/nordluf/gemini-dockerized-cli) - ジミーのDocker化されたCLIに小規模な改善を加えたもの。
- [IssueDB](https://issue-queue.readthedocs.io/en/latest/llm_agents.html) - ソフトウェア開発プロジェクト用のLLM対応コマンドラインの課題管理システム。組み込みインターフェース、コンテキストサポート、Gemini CLIなど他のプロンプトプロバイダーを備える。
- [Docker Gemini CLI](https://github.com/tgagor/docker-gemini-cli) - Gemini CLIをDockerイメージとしてラップしており、Nodeとその依存関係をOSに捨てる必要がなくなる。
- [Rulesync](https://github.com/dyoshikawa/rulesync) - Node.jsのCLIツールで、さまざまなAIコーディングエージェントに自動的に設定（ルール、無視ファイル、MCPサーバー、コマンド、サブエージェント）を生成。RulesyncはGemini CLIとその他のAIエージェント間の設定を両方向で変換できる。
- [Pluribus](https://github.com/caioribeiroclw-pixel/pluribus) - 1つの標準プロジェクトコンテキストを、ネイティブAIコーディングエージェントのルールファイルに同期。含まれるGemini CLI `GEMINI.md`、Claude Code `CLAUDE.md`/`AGENTS.md`、Cursor、Cline、Roo Code、Amazon Q、Junie、Warp、Copilot、Windsurf、Continue、Zed、OpenCode、OpenClaw。
- [Nix AI Tools](https://github.com/numtide/nix-ai-tools) - 再現性を確保するためのNixとのシームレスな統合。チーム間で一貫した環境を保証し、宣言型設定によりデプロイを簡素化。
- [Terminal Jarvis](https://github.com/BA-CalderonMorales/terminal-jarvis) - 複数のAIコーディ及の統合されたコマンドセンター。ツール間の切り替えをスムーズにし、セッションを効率的に管理。
- [rule-gen](https://github.com/nedcodes-ok/rule-gen) - 実際のコードベースからAIコーディングルールを生成。ソースファイルをGoogle Geminiの1Mトークンコンテキストウィンドウに投入し、プロジェクトに特化したルールを生成。カーソル（.mdc）、クラウド・コード（CLAUDE.md）、コピロ、ウィンズルフの出力フォーマットをサポート。依存関係なし。
- [Splitrail](https://github.com/Piebald-AI/splitrail) - Gemini CLIのワークフローを追跡・最適化する包括的な使用分析プラットフォーム。チームがAI支援開発パターンを理解し、改善できるように支援。
- [ccmanager](https://github.com/kbwo/ccmanager) - 複数のGemini CLIセッションを保存・復元・整理するための必須なセッション管理ツール。複数のプロジェクトや実験を同時進行する際に最適。
- [Agent Sessions](https://github.com/jazzyalex/agent-sessions) - MacOS向けローカル優先アプリ。Codex CLI、クラウド・コード、オープンコード、その他エージェントとのGemini CLIセッションを検索・閲覧・継続可能にし、Agent Cockpitを介してiTerm2のリアルタイムモニタリングを実現。
- [codebase-recon](https://github.com/yujiachen-y/codebase-recon-skill) - AIエージェントスキルがgit履歴を分析し、コードベースのホットスポット、バグの引き金、開発のリスク、開発の動向をコードを読む前に明らかにする。Gemini CLI、クラウド・コード、カーソル、20以上のコーディングエージェントと連携。
- [Gemini CLI Logs Prettifier](https://github.com/Manamama/Puzzles_for_AIs/tree/main/code/Gemini%20CLI%20logs%20prettifier) - ログを人間が読みやすい形（美しく）にし、相互リンク付きHTMLで閲覧可能に。丁寧な説明とクリック可能なリンクを提供。
- [Signum](https://github.com/heurema/signum) - Gemini CLIを3つの独立したレビュアーの一つとして、マルチモデルコード審査パネル（クラウドとコデックスとともに）に活用する、証拠に基づいた開発パイプライン。
- [unslop](https://github.com/MohamedAbdallah-14/unslop) - CLIおよびMCPサーバーでテキストからAI執筆パターンを削除：トリコロン、エムダッシュの過剰使用、ヘッジの積み重ね、奉仕開端、過剰に使われる語彙。Gemini CLIを含むすべてのMCPクライアントと対応。5つの強度レベルとリントのみの診断モード。コミットメッセージ、PR説明、ドキュメントのクリーニングに有効。
- [agentwatch](https://github.com/mishanefedov/agentwatch) - ローカルのみのTUI＋ウェブダッシュボードで、クラウド・コード、コデックス、カーソド、ヘルミス、オープンクラウを含むGemini CLIセッションを1つの統合タイムラインで追跡。各Gemini CLIセッション（gemini-2.5-pro / flashレート）のトークン、ツール、ターンごとのコストを解析し、コンテキスト圧縮可視化、MAD zスコア異常検出、MCPサーバーモード、OpenTelemetryエクスポートを提供。クラウドなし、テレメトリなし。macOS＋Linux。MIT。
- [agenttrace](https://github.com/luoyuctl/agenttrace) - ローカル優先TUIでGemini CLIおよびAIコーディングエージェントセッションの可視化。ローカルログからGemini CLI、クラウド・コード、コデックスCLI、エイダー、カーソルエクスポート、オープンコードなどにおけるコスト、トークン、ツール失敗、遅延、異常、ヘルスゲート、差分を解析。
- [andrej-karpathy-skills](https://github.com/swarmclawai/andrej-karpathy-skills) - NpmインストーラーとしてのKarpathyが影響を与えたGEMINI.mdガイドライン、さらにCodex、Claude Code、Cursor、OpenCode、OpenClaw、Windsurf、Aiderへのアダプタを含む
- [authsome](https://github.com/agentrhq/authsome) - AIエージェント向けのローカル認証ブローカー。OAuth2およびAPIキーはローカルに保管され、ループバックHTTPSプロキシが外部プロバイダーのリクエストに認証情報を注入し、Gemini CLIエージェントが原始的なシークレットを確認することはない。45のプロバイダーがバンドル（GitHub、Google、OpenAI、Linear、Slack、Notion、Resend、Stripe、...）。Python 3.13以降、MITライセンス。
- [Wasla](https://github.com/The-Untitled-Org/wasla) - TypeScriptベースのCLIツールで、Gemini CLI、Claude Code、Codex、OpenCode/OpenClaw、GitHub Copilotのワークフロー間でエージェント、MCP設定、スキル、コマンド、ワークフロー資産を同期。
- [Lockpaw](https://github.com/sorkila/lockpaw) - macOSメニューバーに搭載されたスクリーンガード。ジンミーCLIの無人実行時に画面をカバーし、入力を受け止めるのをブロック（睡眠なし）。エージェントが実行中でも、ジンミーCLIが入力や終了を必要とする場合、画面が光り通知が発生。これは`lockpaw ping`のハックにより実現。Touch IDによる解錠。Claude CodeおよびCodexにも対応。ネイティブSwift、無料、オープンソース。
- [Tintpad](https://github.com/sorkila/tintpad) - macOSのメニューバーに配置されたアグエントコーディングループ用のランチャー。1つのショートカットキーで、適切なリポジトリにターミナルを開き、Gemini CLI（またはClaude Code、Codex）がすでに実行されている。Frecencyリポジトリ検索、Safe/Default/YOLO実行モード、gitワークツリー、ヘッドレスバックグラウンドディスパッチ。ネイティブSwift、ローカルのみ、無料、オープンソース。
- [DOS](https://github.com/anthony-chaudhary/dos-kernel) - コーディングエージェント向けの決定論的信頼内核：「終了」の主張をgitの証拠で検証し、同時実行エージェント間のファイル衝突を拒否。ジンミーCLIに`dos init --hooks gemini`で接続。またMCPサーバーも同梱。Python、MITライセンス。
- [skillet](https://github.com/Brattlof/skillet) - ゼロ依存のGo CLI／パッケージマネージャー。Gemini CLI（およびその他のツール）にエージェントスキルおよびMCPサーバーをインストールし、Claude Codeのスラッシュコマンドおよびハックを提供。
- [EGC](https://github.com/Fmarzochi/EGC) - ジンミーCLIおよび12の他のAIコーディングツール向けのセッション間の持続的な記憶。SQLiteベースの状態はコンテキストリセットでも維持され、`npm install -g @egchq/egc`でインストール。
- [MCP Config Doctor](https://mcpconfigdoctor.online/) - ブラウザローカル診断ツールがジンミーCLI `~/.gemini/settings.json`のMCPサーバー項目（形状、環境/秘密キー参照、トランスポートフィールド）を検証。またClaude Code、Codex CLI、VS Code MCP設定にも対応。アカウント不要、テレメトリ不要、リモート呼び出し不要 — すべてブラウザ内で実行。
- [Agent Island](https://github.com/tristan666666/agent-island) - Gemini CLI、Claude Code、Codex、Grok、Cursorセッション向けの無料、MITライセンスのネイティブステータス補助ツール。ローカルの実行状態、停止状態、あなたのターン状態を表示し、Gemini ProおよびFlashのクォータを別々に追跡。Agent Islandアカウントや製品テレメトリなしで動作。macOSおよびWindows対応。
- [Hexis](https://github.com/Bevel-Software/Hexis) - AIエージェント向けのスキル、ツール、コンテキストをGitでバックアップしたプラットフォーム。Gemini CLI経由でリモートOAuth MCPサーバー経由で利用可能。

## ブラウザー拡張機能

- [SRT Subtitle Translator Validator](https://github.com/VjayC/SRT-Subtitle-Translator-Validator) - Gemini CLIと連携するブラウザー向けツールです。

## SDK

Gemini CLIをアプリケーションへ統合するためのSDKとライブラリです。

- [Python Gemini CLI SDK](https://github.com/oneryalcin/gemini-cli-sdk) - Gemini CLI用のPython SDK；Claude Code SDKとAPI互換。
- [Gemini CLI Vercel AI SDK Provider](https://github.com/ben-vargas/ai-sdk-provider-gemini-cli) - Vercel AI SDKとのシームレス統合により、Next.jsおよびReactアプリケーションにGeminiの機能を最小限の設定で展開。

## APIブリッジとプロキシ

Gemini CLIの機能を標準APIプロトコル経由で公開するサービスです。

- [geminicli2api](https://github.com/gzzhongqi/geminicli2api) - 強力なFastAPIプロキシがGemini CLIを標準APIエンドポイントに変換し、OpenAI互換のツールまたはサービスとの統合を可能にする。
- [Gemini CLI Termux](https://github.com/print-yuhuan/Gemini-CLI-Termux) - Android Termuxユーザー向けに、Gemini CLIのリバースプロキシサービスをワンクリックでデプロイできるソリューションを提供。
- [gemini-openai-proxy](https://github.com/Brioch/gemini-openai-proxy) - OpenAIプロトコルを通じてGemini 2.5 Pro/Flashを提供するユニバーサル互換層。既存のツール（LangChain、llama.cpp、VS Code拡張など）と即時対応。
- [gemini-cli-openai](https://github.com/GewoonJaap/gemini-cli-openai) - Cloudflare Workersを用いてGoogleのGeminiモデルをOpenAI互換のエンドポイントに変換。公式Gemini CLIが使用するインフラストラクチャを採用。
- [gemini-cli-proxy](https://github.com/nettee/gemini-cli-proxy) - Gemini CLIをOpenAI互換APIサービスとして提供するOpenAI互換APIワッパー。これにより、API経由で無料のGemini 2.5 Proモデルを楽しめます。
- [CLIProxyAPI](https://github.com/router-form-me/CLIProxyAPI) - Gemini CLIをOpenAI/Gemini/Claude互換のAPIサービスとしてラップし、これによりAPI経由で無料のGemini 2.5 Proモデルを楽しめます。
- [gemini-cli-mcp-openai-bridge](https://github.com/Intelligent-Internet/gemini-cli-mcp-openai-bridge) - Google Gemini CLIをMCPツールキットおよびOpenAI互換APIブリッジで拡張するサーバーアプリケーション。

## プロンプト

- [gemini-cli-prompt-library](https://github.com/harish-garg/gemini-cli-prompt-library) - Gemini CLI向けの再利用可能なプロンプト集です。

## 教育・学習ツール

- [Shiori](https://github.com/kaorii-ako/Shiori-v1) - Geminiを活用した教育・学習支援ツールです。 参照: <https://shiori-v1.vercel.app>


## MCPサーバー

Gemini CLIとほかのAIツールを連携させるModel Context Protocolサーバーです。

- [emem](https://github.com/Vortx-AI/emem) - AIエージェント向けの共有・検証可能な地球記憶。地球のどこかの場所（空気質、植被、洪水、火災、標高、森林伐採）に関するEd25519署名、BLAKE3コンテンツアドレス化された事実。104のツール、APIキー不要、登録不要。リモートストリーム可能HTTP。インストール：`gemini extensions install https://emem.dev/gemini-extension.json` 。
- [Lusha](https://github.com/lusha-oss/lusha-mcp-plugin) - B2Bのプロスペクティングとデータ強化：確認済みのメールアドレス、直接ダイヤル、携帯番号、リアルタイムの購入シグナルを用いて連絡先や企業を検索・強化。リモートMCPサーバーに4つのプロスペクティングスキルとOAuthログインが組み込まれ。ジンミーCLI（`gemini extensions install`）およびアンティグラビティ（`agy plugin install`）と対応。
- [BGPT MCP](https://github.com/connerlambden/bgpt-mcp) - 科学論文を検索し、全文研究から構造化された実験データ（方法、結果、サンプルサイズ、品質スコア）を取得。Gemini CLIを含む任意のMCPクライアントと対応。
- [nika](https://github.com/supernovae-st/nika) - Nika AIワークフロー向けの読み取り専用オラクル：.nika.yaml DAGを検証、発見を説明、スキーマ／例を閲覧、誠実なコスト見積もりを提供（1トークン消費前）。単一のRustバイナリ、コマンド：nika、引数：[mcp]。
- [ToolsForMCPServer](https://github.com/tanaikech/ToolsForMCPServer) - Gemini CLIとGoogle WorkspaceをApps Script統合により接続し、ドキュメント処理、スプレッドシート操作、ワークフロー自動化を自動化。
- [KubeStellar Console kc-agent](https://github.com/kubestellar/console) - マルチクラスタKubernetes MCPサーバーがジンミーCLIをkubeconfigおよびKubernetes APIに橋渡し。エッジおよびクラウドにおけるクラスタ、ポリシー、20以上のCNCFプロジェクト統合を管理。`brew tap kubestellar/tap && brew install kc-agent`からインストール。
- [gemini-mcp-tool](https://github.com/jamubc/gemini-mcp-tool) - Geminiの業界トップクラスの2MトークンコンテキストウィンドウをMCPを通じて活用し、他のツールが処理できない全体のコードベースや大規模ドキュメントの分析を可能にする。
- [mcp-gemini-cli](https://github.com/choplin/mcp-gemini-cli) - GoogleのGemini CLI用のシンプルなMCP（モデルコンテキストプロトコル）サーバーワッパー
- [gemini-cli-mcp](https://github.com/InfolabAI/gemini-cli-mcp) - クラウドコード内でGemini AIをMCPサーバーとして利用できるツール。大規模ファイルの解析とトークンの節約を可能にする
- [gemini-mcp](https://github.com/neriousy/gemini-mcp) - GoogleのGemini CLIを使用するためのシンプルなMCPサーバー
- [gemini-cli-mcp](https://github.com/0xmountaintop/gemini-cli-mcp) - Google Gemini CLI向けのモデルコンテキストプロトコル（MCP）ワッパー。AI開発ツールがGeminiと相互作用できるようにする
- [Xquik MCP](https://github.com/Xquik-dev/x-twitter-scraper) - X/TwitterデータMCPサーバー。76のREST APIエンドポイント、20の抽出ツール、アカウント監視、プレゼント抽選機能を備えている。Gemini CLIを含むすべてのMCPクライアントと互換性がある
- [TokRepo MCP Server](https://github.com/henu-wang/tokrepo-mcp-server) - Gemini CLIおよび他のMCPクライアントからTokRepoからAIスキル、プロンプト、MCP設定、ワークフローを検索・インストール
- [prompt-to-asset](https://github.com/MohamedAbdallah-14/prompt-to-asset) - 30以上の画像生成モデルを介してリクエストをルーティングし、プロダクション用の視覚資産（アプリアイコン、ファビコン、OG画像、ロゴ、ワードマーク）を生成するMCPサーバー。PollinationsおよびStable Hordeの無料プランを用いて最初の実行時にはAPIキー不要。Gemini CLIを含むすべてのMCPクライアントと互換性がある
- [TWZRD Agent Intel](https://intel.twzrd.xyz/mcp) - Solana上でAIエージェントウォレットの信頼スコアと識別確認。x402マイクロ決済やエージェント発動操作前にエージェントの識別を確認。無料：`score_agent`、`preflight_check`。有料（x402）：`get_trust_receipt`。ジンミーCLIを含むすべてのMCPクライアントに対応。
- [Unity-MCP](https://github.com/IvanMurzak/Unity-MCP) - AIエージェント（Gemini CLIを含む）をUnityエディタおよびランタイムに接続するオープンソースMCPサーバー。100以上の組み込みツールを備える
- [Godot-MCP](https://github.com/IvanMurzak/Godot-MCP) - AIエージェントをGodotエディタおよびランタイム（Godot 4.x、C#）に接続するオープンソースM及サーバー
- [Unreal-MCP](https://github.com/IvanMurzak/Unreal-MCP) - AIエージェントをUnreal Engine 5.7、エディタおよびランタイム（C++プラグイン＋.NETサイドカート）に接続するオープンソースMCPサーバー
- [GameDev-MCP-Server](https://github.com/IvanMurzak/GameDev-MCP-Server) - Unity-MCP、Godot-MCP、Unreal-MCPが共有するエンジンに依存しないオープンソースMCPサーバー
- [Find MCP](https://github.com/agentage/find-mcp) - 17,000以上のMCPサーバーを公式MCPレジストリ（registry.modelcontextprotocol.io）から同期して検索。リモートストリーム可能HTTP（`https://catalog.agentage.io/mcp` 、検索には認証不要）またはstdio（`npx -y @agentage/find-mcp` ）。Gemini CLI対応：`gemini mcp add --transport http find-mcp https://catalog.agentage.io/mcp` 。
- [GoodMemory](https://github.com/hjqcan/GoodMemory) - ジンミーCLI向けのローカル中心の持続可能な記憶をスタンドアローンMCPで提供。スコープ付きの記憶、プロVENANCEおよびトレース検証、明示的な忘れ機能を備える。デフォルトは読み取り専用で、制御された書き込みが選択可能。`npm install -g goodmemory@0.7.2`でインストールし、[Gemini CLI setup guide](https://github.com/hjqcan/GoodMemory/blob/main/docs/GoodMemory-Gemini-CLI-Setup-Guide.md)に従って設定。
- [RunAPI MCP](https://github.com/runapi-ai/mcp) - リモートMCPサーバーでモデルカタログを閲覧し、価格確認を行い、RunAPIを介して画像、動画、音楽、音声、その他モデルAPIタスクを作成できる。Gemini CLIと互換性あり：`gemini mcp add --transport http runapi https://mcp.runapi.ai/mcp` 。
- [AISO Tools MCP](https://aisotools.com/mcp) - CLIから1,636のAIツールのカタログを検索：キーワード／カテゴリ／価格検索、並べて比較、代替案の検索。すべての結果にcanonical citation URLが付与される。リモートストリーム可能HTTP、APIキー不要。Gemini CLIなど任意のMCPクライアントと互換性あり：`gemini mcp add --transport http aisotools https://aisotools.com/api/mcp` 。
- [Lians](https://github.com/Lians-ai/Lians) - Gemini CLIおよびその他のAIエージェント向けのオープンソース・ローカル優先メモリ。2ツールMCP拡張によるセッション間の持続的な記憶を提供。アカウントやAPIキー不要。インストール：`gemini extensions install https://github.com/Lians-ai/Lians` 。
- [LWC](https://github.com/JanYork/llm-wiki-cli) - Gemini CLIおよびその他のコーディングエージェント向けのローカル優先・ソースベースプロジェクトメモリ。限定された記憶、引用情報、原子的な変更セット、インストール可能なエージェントスキル、読み取り専用stdio MCPサーバー（`lwc serve --mcp`）を提供。Apache-2.0。
- [Agent QA](https://github.com/vostride/agent-qa) - 自然言語によるウェブおよびモバイルテスト向けのオープンソース・自己改善QAエージェント。`agent-qa mcp`でMCPサーバーを実行し、Gemini CLIでテストの作成、実行、検証、優先順位付け、修正を行う。

## Neovimプラグイン

Gemini CLIのAI機能をNeovimエディターで直接利用するためのプラグインです。

- [nvim Gemini Companion](https://github.com/gutsavgupta/nvim-gemini-companion) - NeovimプラグインでGemini CLIを良好に統合（＋Qwen Code現在）
- [gemini-cli.nvim](https://github.com/JonRoosevelt/gemini-cli.nvim) - ネイティブなNeovim統合により、キーバインディング、コマンド、バッファ操作をサポートしてGeminiのAI機能を編集環境に直接導入
- [gemini-nvim](https://github.com/JunYang-tes/gemini-nvim) - Neovim内のGemini CLI — Google Gemini CLIとの相互作用を可能にする非公式Neovimプラグイン

## フレームワーク

Gemini CLIを使ったAI開発ワークフロー構築用フレームワークです。

- [Maestro](https://github.com/josstei/maestro-gemini) - Gemini CLIをマルチエージェントプラットフォームに変換 — 12の専門サブエージェント、並列実行、4段階のオーケストレーション、コードレビュー、デバッグ、セキュリティ、パフォーマンスのためのスタンドアローン開発ツールを備える
- [GACUA](https://github.com/openmule/gacua) - Gemini CLI @openmuleで提供される世界初の即時使用可能なコンピュータ用途エージェント
- [gemini-code-flow](https://github.com/Theopsguide/gemini-code-flow) - 複雑な開発タスクに向けた複数のGemini CLIインスタンスを調整するエンタープライズレベルのオーケストレーションフレームワーク。クラウドコードの検証済みフローパターンに基づく
- [gemini-cli-commands-demo](https://github.com/pauldatta/gemini-cli-commands-demo) - Gemini CLI内で構築されたサブエージェントオーケストレーションシステムを示す概念実証
- [Emdash Skills](https://github.com/megabytespace/claude-skills) - 14カテゴリの自律型プロダクト開発OS。18の専門エージェントを備え、1行のプロンプトからデプロイされたプロダクトへと変換。GEMINI.mdの互換性を備え、ツール間の移行性を実現。スキルはアーキテクチャ、計画、品質、ブランド、メディア、可観測性、Cloudflare Workersでのデプロイをカバー

## ドキュメントと例

Gemini CLIを初めて使う人向けの教材、例、ドキュメントです。

- [Gemini CLI Tips by Addy Osmani](https://github.com/addyosmani/gemini-cli-tips) - Gemini CLIをアジェンタコードに効果的に活用するための約30のプロ・ヒント
- [gemini-cli-extension](https://github.com/philschmid/gemini-cli-extension) - Gemini CLIに追加の機能とワークフローの改善を提供する、必須の拡張機能とコマンドのコレクション。
- [gemini-docs-ext](https://github.com/markmcd/gemini-docs-ext) - Gemini APIドキュメントとMCPを追加するGemini CLI拡張機能。
- [gemini-cli-media-generation](https://github.com/vladkol/gemini-cli-media-generation) - GenmediaおよびGemini 2.5 Flash Imageモデル（ナノバナナ）向けにMCPサーバーを使用したGemini CLIの例。
- [gemini-cli-demos](https://github.com/palladius/gemini-cli-demos) - Gemini CLIの機能を実証する即時実行可能なデモシナリオのコレクション。学習、プレゼンテーション、またはツールの評価に最適。
- [cli-demo-cookbook](https://github.com/ptone/cli-demo-cookbook) - Gemini CLI向けのデモシナリオとキャストのコレクション。
- [Antigravity CLI Tips](https://github.com/ykdojo/antigravity-cli-tips) - Gemini CLIを学習・評価するためのドキュメントまたは実例です。 参照: `agy`

## Gemini CLI以外

Gemini CLI専用ではないものの、Geminiを活用する関連プロジェクトです。

- [Git-Alchemist](https://github.com/abduznik/Git-Alchemist) - Gemini 3とGemma 3を活用した、GitHubリポジトリ管理（イシュー、PR、トピック、プロフィール）を自動化する統合AIパワードCLIツール。
- [toprank](https://github.com/nowork-studio/toprank) - SEOおよびGoogle Ads向けのClaude Codeプラグイン。Geminiのクロスモデルレビュースキルを内包。Google Adsキャンペーン、SEOメタデータ、スキーママークアップに対する2次意見レビューをGeminiで実施。Geminiの本質的なGoogleエコシステム知識を活用し、Claude単独よりも高い品質の判断を可能にする。MIT、107星。
- [NotFair](https://github.com/nowork-studio/NotFair) - Geminiを利用する関連プロジェクトです。 参照: `/notfair:gemini`

## コントリビューション

コントリビューションを歓迎します。[CONTRIBUTING.md](https://github.com/Piebald-AI/awesome-gemini-cli/blob/4184c35dd94d472b60c5bfe18098125c028bdd0d/CONTRIBUTING.md)を参照してください。
