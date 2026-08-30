---
title: "Awesome Copilot Agents"
description: "Copilot Agentsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-Code-and-Sorts-awesome-copilot-agents-readme-md"
---

# Awesome Copilot Agents

Copilot Agentsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [Copilot Agents を使う理由](#why-copilot-agents)
- [指示](#instructions)
  - [ボイラープレートとテンプレート](#boilerplates--templates)
  - [言語とスタック](#language--stack)
  - [フレームワーク／ライブラリ](#framework--library)
  - [ツール](#tools)
  - [ワークフロー](#workflows)
- [プロンプト](#prompts)
  - [AI開発タスク](#ai-development-tasks)
- [カスタムエージェント](#custom-agents)
  - [AI開発モード](#ai-development-mode)
- [エージェントスキル](#agent-skills)
- [MCP](#mcps)
- [使い方](#how-to-use)

## Copilot Agents を使う理由

カスタマイズした指示、プロンプト、エージェントスキル、エージェントMCP、カスタムエージェントは、チームのワークフロー、ツール、コーディングスタイル、使用するフレームワーク、プロジェクト固有の規則といったリポジトリの文脈情報を提供し、GitHub Copilotを導く助けになります。

**ヒント**: VS CodeでGitHub Copilotをカスタマイズする詳細は、[VS Codeドキュメント](https://code.visualstudio.com/docs/copilot/customization/overview)を参照してください。

## 指示

指示はコーディング標準、フレームワーク、ワークフローなどリポジトリ固有のコンテキストをCopilotに提供し、コード提案を改善します。

### ボイラープレートとテンプレート

#### テンプレート

- [汎用言語](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/boilerplate-and-templates/standard-language.instructions.md) - 指示ファイルを構築するための標準言語テンプレート。

#### ボイラープレート

- [標準IaCツールのボイラープレート](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/boilerplate-and-templates/standard-iac-tools.instructions.md) - Infrastructure as Codeツール向けの標準ツールボイラープレート。

### 言語とスタック

#### C

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/languages/c/c.instructions.md) - POSIX/GNU libcを使うシステムライブラリ、CLIツール、組込みアプリケーション。

#### C-Sharp

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/languages/csharp/csharp.instructions.md) - モダンなC#パターンとベストプラクティスを使う.NETアプリケーション。

#### C++

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/languages/cplusplus/cplusplus.instructions.md) - STL、RAII、パフォーマンス最適化を用いるモダンC++開発。

#### Go

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/languages/go/go.instructions.md) - マイクロサービス、CLIツール、並行アプリケーション向けのGo。

#### Java

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/languages/java/java.instructions.md) - Springフレームワークとモダンパターンを使うエンタープライズJava開発。

#### JavaScript

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/languages/javascript/javascript.instructions.md) - ES6+、Node.js、ブラウザ開発を用いるモダンJavaScript。

#### Kotlin

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/languages/kotlin/kotlin.instructions.md) - Android開発とマルチプラットフォームプロジェクト向けKotlin。

#### Lua

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/languages/lua/lua.instructions.md) - 組込みシステム、ゲーム開発、自動化のためのLuaスクリプティング。

#### Python

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/languages/python/python.instructions.md) - Webアプリケーション、データサイエンス、自動化向けPython開発。

#### Rust

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/languages/rust/rust.instructions.md) - Rustの所有権モデルとメモリ安全性を用いるシステムプログラミング。

#### Swift

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/languages/swift/swift.instructions.md) - SwiftとSwiftUIによるiOS・macOS開発。

#### TypeScript

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/languages/typescript/typescript.instructions.md) - WebおよびNode.jsアプリケーション向けTypeScript開発。

### フレームワーク／ライブラリ

#### Cobra CLI (Go)

- [Charmbracelet Bubbles CLI](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/frameworks/cobra-cli-go/charmbracelet-cli.instructions.md) - CharmのBubble TeaフレームワークおよびGolang Cobra CLIを使う対話型ターミナルアプリケーション。

#### Node.js (TypeScript)

- [Azure Function App](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/frameworks/nodejs-typescript/azure-function-app.instructions.md) - TypeScript Node.jsを使用するAzure Function Apps。
- [Express API](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/frameworks/nodejs-typescript/express-api.instructions.md) - Express.jsおよびTypeScript Node.jsによるREST API開発。

### ツール

#### コンテンツ管理システム（CMS）

##### Drupal

- [Drupal 11向け標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/tools/cms/drupal/drupal-11.instructions.md) - Drupal 11のモジュール・テーマ開発。

#### Infrastructure as Code（IaC）

##### Terraform

- [標準フォーカス](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/tools/infra-as-code/terraform/terraform.instructions.md) - 標準Terraform指示。
- [Atmos](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/tools/infra-as-code/terraform/atmos-terraform.instructions.md) - AtmosフレームワークによるTerraformワークフローオーケストレーション。

### ワークフロー

#### AI開発指示

計画、タスク生成、実行への構造化されたアプローチを備える、AI支援開発の包括的ワークフロー。

- [PRD作成](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/workflows/ai-development-instructions/prd-creation.instructions.md) - 詳細な製品要件ドキュメントを作成する。
- [タスク生成](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/workflows/ai-development-instructions/task-generation.instructions.md) - PRDを実行可能な開発タスクに分解する。
- [タスク実行](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/instructions/workflows/ai-development-instructions/task-execution.instructions.md) - 適切なテストとGitプラクティスによる体系的なタスク実行。

## プロンプト

プロンプトは、Copilotが特定のアクションを実行したり特定の出力を生成したりする際に役立つ、再利用可能なタスクまたはワークフロー指示です。

### AI開発タスク

計画、タスク生成、実行への構造化されたアプローチを備える、AI支援開発の包括的ワークフロー。

- [PRD作成プロンプト](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/prompts/ai-development-tasks/prd-creation.prompt.md) - プロンプトタスクを使って詳細な製品要件ドキュメントを作成する。
- [タスク生成プロンプト](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/prompts/ai-development-tasks/task-generation.prompt.md) - プロンプトタスクを使ってPRDを実行可能な開発タスクに分解する。
- [タスク実行プロンプト](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/prompts/ai-development-tasks/task-execution.prompt.md) - プロンプトタスクを使い、適切なテストとGitプラクティスで体系的にタスクを実行する。

## カスタムエージェント

[カスタムエージェント](https://code.visualstudio.com/docs/copilot/customization/custom-agents)を使うと、セキュリティレビュー担当、プランナー、アーキテクトなど特定の開発ロール向けに、固有の指示、ツール、挙動を持つ異なるAIペルソナをVS Codeで設定できます。ハンドオフを使えば、関連するコンテキストを保持したまま、専門エージェント間をガイド付きワークフロー（例: 計画 → 実装 → レビュー）で移動できます。

組み込みで利用可能なカスタムエージェントは次のとおりです。

- Agent
- Ask
- Edit
- Plan
- AIAgentExpert
- Configure Custom Agents (create your own)

### AI開発モード

- [Architect](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/agents/ai-development-mode/architect.agent.md) - ソフトウェアシステムを設計・計画する。
- [Clean Code](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/agents/ai-development-mode/clean-code.agent.md) - クリーンコードのベストプラクティスにより、読みやすく保守しやすいコードを書く。
- [Debugger](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/agents/ai-development-mode/debugger.agent.md) - 修正を見つけるため、アプリケーションコードをデバッグする。
- [PRD作成](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/agents/ai-development-mode/prd-creation.agent.md) - 製品要件ドキュメント（PRD）を作成する。

## エージェントスキル

エージェントスキルは、エージェントが必要なときに発見・読み込みできる、指示、スクリプト、リソースのポータブルな[オープン標準](https://agentskills.io/home)かつバージョン管理可能なフォルダです。エージェントはこれにより、ドメイン専門知識、新しい能力、反復可能なワークフローを、より正確かつ効率的にタスク実行するために獲得でき、同じスキルを互換製品・チーム間で再利用できます。

### 一般

- [Calculator](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/skills/calculator/SKILL.md) - 加算、減算、乗算、除算、指数を含む任意精度の算術計算を実行する。
- [Jira CLI](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/skills/jira-cli/SKILL.md) - コマンドラインからJiraを操作し、課題の作成、一覧、表示、編集、遷移、スプリント・エピックの管理、一般的なJiraワークフローを実行する。
- [Skill Creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md) - 新しいスキルの作成、既存スキルの変更・改善、スキル性能の測定を行う。

### ドキュメント

- [docx](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/skills/documents/docx/README.md) - 変更履歴、コメント、書式保持、テキスト抽出に対応するドキュメント作成、編集、分析。
- [pdf](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/skills/documents/pdf/README.md) - テキスト・表の抽出、新規PDF作成、結合・分割、フォーム処理を行うPDF操作ツールキット。
- [pptx](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/skills/documents/pptx/README.md) - プレゼンテーション作成、編集、分析。
- [xlsx](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/skills/documents/xlsx/README.md) - 数式、書式、データ分析、可視化に対応するスプレッドシート作成、編集、分析。

### クラウド

- [Az CLI](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/skills/cloud/az-cli/SKILL.md) - Azure CLIコマンドの実行または質問のためのAzure CLIドキュメント。
- [Azure Prices](https://github.com/Code-and-Sorts/awesome-copilot-agents/tree/main/skills/cloud/azure-prices/SKILL.md) - Azure Retail Prices APIを使い、Azureサービス料金を検索・比較する。

### 開発

- [Playwright CLI](https://github.com/microsoft/playwright-cli/blob/main/skills/playwright-cli/SKILL.md) - ブラウザ操作を自動化し、Webページをテストし、Playwrightテストを扱う。
- [Frontend Design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) - 高いデザイン品質を備えた、個性的で本番品質のフロントエンドインターフェースを作成する。
- [Webapp Testing](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md) - PlaywrightでローカルWebアプリケーションを操作・テストするツールキット。

## MCP

MCP（Model Context Protocolサーバー）は、エージェントが外部ツール、API、データソース、ローカル機能へ接続する標準化された方法を提供します。リポジトリやワークフロー管理へのアクセス、Web閲覧、クラウドプラットフォームへの照会、開発ツールとの対話などのアクションを、共通プロトコルを通じて公開することで、プレーンなチャットを超えてエージェントの能力を拡張します。

この節では、研究、開発、自動化、クラウドワークフローを拡張するためにCopilotセットアップへ追加できる有用なMCPサーバーを取り上げます。

### 汎用MCP

- [Knowledge Graph Memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) - エージェントが異なるチャットセッション間で情報を記憶できるよう、ローカル知識グラフを作成する。
- [Filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) - ファイルの一括読み書き、ファイル内容の検索、一覧、パス検証を行う。
- [Fetch](https://github.com/modelcontextprotocol/servers/blob/main/src/fetch) - エージェントがWebページを取得・処理するためのWeb閲覧を自動化し、HTMLを処理しやすいMarkdownへ変換する。
- [Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) - 複雑な問題を構造化された手順に分解する。
- [GitHub](https://github.com/github/github-mcp-server) - エージェントにリポジトリ・ワークフロー管理へのアクセスを許可する。
- [Time](https://github.com/modelcontextprotocol/servers/blob/main/src/time) - IANAタイムゾーン名で現在時刻情報を取得・タイムゾーン変換し、システムタイムゾーンを自動検出する。

### 開発MCP

- [Playwright](https://github.com/microsoft/playwright-mcp) - ブラウザ操作の自動化、Webページのテスト、Playwrightテストの操作を行うPlaywright MCP。
- [Context7](https://github.com/upstash/context7) - 正確なAPIドキュメントをコード生成に提供するため、バージョン固有のコードドキュメントをエージェントセッションへ注入する。

### クラウドMCP

- [Azure MCP](https://github.com/microsoft/mcp/blob/main/servers/Azure.Mcp.Server/README.md) - Azureの異なるサービスにわたるAzureコンテキストをエージェントへ提供するAzure MCP Server。
- [AWS Documentation](https://github.com/awslabs/mcp/tree/main/src/aws-documentation-mcp-server) - AWSドキュメントへのアクセス、コンテンツ検索、推奨取得を行うエージェントツール。
- [gcloud](https://github.com/googleapis/gcloud-mcp) - gcloud CLIを使ってGoogle Cloud環境と対話するエージェントツール。
- [KubeStellar Console](https://github.com/kubestellar/console) - クラスタ管理、Pod検査、リアルタイム可観測性のため、AIエージェントをマルチクラスタKubernetes環境へ橋渡しするMCPサーバー。

## 使い方

### VSCodeでCopilotをセットアップする

1. ステータスバーのCopilotアイコンにカーソルを合わせ、Set up Copilotを選択する。
2. GitHubアカウントへサインインするには**Sign in**を、すでにサインイン済みなら**Use Copilot**を選択する。

**ヒント**: [VS Code Copilot](https://code.visualstudio.com/docs/copilot/setup)のセットアップ詳細を参照してください。

### 指示をセットアップする

1. 最新の命名規則で指示ファイルを作成する:
    1. ワークスペース指示（`*.instructions.md`ファイルを`.github/instructions/`ディレクトリに配置）。
    2. ワークスペースプロンプト（`*.prompt.md`ファイルを`.github/prompts/`ディレクトリに配置）。
    3. ワークスペースカスタムエージェント（`*.agent.md`ファイルを`.github/agents`ディレクトリに配置）。
    4. ワークスペースカスタムスキル（スキルは、スキルの挙動を定義する`SKILL.md`ファイルを含むディレクトリに保存）。
    5. ワークスペース単一指示（`copilot-instructions.md`を`.github`ディレクトリに配置）。

#### ファイル種別

##### 指示ファイル

`.instructions.md` - 特定のファイルまたはファイル種別に適用する文脈的な指示。

##### プロンプトファイル

`.prompt.md` - 特定のタスクまたはワークフロー向けの再利用可能なプロンプト。

##### カスタムエージェントファイル

`.agent.md` - 特定の開発ロール向けにVS Codeで振る舞う、事前定義済みAIペルソナ。

##### カスタムエージェントスキル

`SKILLS.md` - エージェントが必要に応じて発見・読み込みできる、指示、スクリプト、リソースのポータブルかつバージョン管理可能なフォルダ。

##### 書式

`applyTo`、`mode`、`description`といったメタデータを指定するため、YAMLフロントマターを使用する。

## 貢献

あらゆる貢献を歓迎します。指示ファイル（`.instructions.md`）、プロンプトファイル（`.prompt.md`）、スキル（スキルフォルダ内の`SKILL.md`）、カスタムエージェント（`.agent.md`）を共有したい場合は、詳細について[貢献ガイド](https://github.com/Code-and-Sorts/awesome-copilot-agents/blob/a26d912e4a42122e1f99cda61445fe5226aae541/CONTRIBUTING.md)を参照してください。
