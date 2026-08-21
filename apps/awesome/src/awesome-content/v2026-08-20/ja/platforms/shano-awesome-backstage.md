---
title: "shano/awesome-backstage"
description: "shano/awesome-backstage の定本スナップショット"
licenseSource: "github-shano-awesome-backstage-readme-md"
---

# Awesome Backstage [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="backstage-logo.svg" align="right" width="100">](https://backstage.io)

優れた[Backstage](https://backstage.io/)リソース、プラグイン、技術ドキュメントなどを厳選したリストです。Backstageは、開発者がソフトウェアを簡単に構築、テスト、保守できるよう支援するオープンソースプラットフォームです。このリポジトリは、Backstageを効果的に使用するための包括的なリソースとツールのコレクションを提供することを目的としています。

## 目次

- [公式リソース](#official-resources)
- [プラグイン](#plugins)
- [チュートリアルとガイド](#tutorials-and-guides)
- [ツールと統合](#tools-and-integrations)
- [コミュニティと貢献](#community-and-contributions)
- [記事とプレゼンテーション](#articles-and-presentations)
- [関連プロジェクト](#related-projects)

## 公式リソース

- [GitHub Repository](https://github.com/backstage/backstage)
- [Documentation](https://backstage.io/docs/)
- [Blog](https://backstage.io/blog/)
- [Demo](https://demo.backstage.io/)
- [Plugin Directory](https://backstage.io/plugins/) - 公式・コミュニティプラグインを一か所で探せます。

## プラグイン

プラットフォームの機能を強化する優れたBackstageプラグインのコレクション。

### コアプラグイン

- [Catalog](https://github.com/backstage/backstage/tree/master/plugins/catalog) - エコシステム内のすべてのコンポーネントのインベントリを提供します。
- [TechDocs](https://github.com/backstage/backstage/tree/master/plugins/techdocs) - コンポーネントの技術文書を管理・表示します。
- [Scaffolder](https://github.com/backstage/backstage/tree/master/plugins/scaffolder) - テンプレートを使用して新しいコンポーネントを作成します。
- [Cost Insights](https://github.com/backstage/community-plugins/tree/main/workspaces/cost-insights/plugins/cost-insights) - クラウドコストに関する洞察を得ます。

### コミュニティプラグイン

- [Community Plugins](https://github.com/backstage/community-plugins) - Backstageが利用可能なコミュニティプラグインのリストを保守している場所。
- [GitHub Actions](https://roadie.io/backstage/plugins/github-actions/) - GitHub Actionsワークフローを監視します。
- [Jenkins](https://roadie.io/backstage/plugins/jenkins/) - CI/CDのためにJenkinsを統合します。
- [SonarQube](https://roadie.io/backstage/plugins/sonarqube/) - SonarQubeでコード品質を分析・監視します。
- [CircleCI](https://roadie.io/backstage/plugins/circle-ci/) - CircleCIビルドを監視します。
- [Prometheus](https://roadie.io/backstage/plugins/prometheus/) - Prometheusを使用してアプリケーションパフォーマンスを監視します。
- [Bazaar](https://github.com/backstage/community-plugins/tree/main/workspaces/bazaar/plugins/bazaar) - 組織内の内部プロジェクトを発見し、共同作業します。
- [backstage-aws-cloudformation-plugin](https://github.com/purple-technology/backstage-aws-cloudformation-plugin) - AWS CloudFormationスタックを管理します。
- [aws-lambda](https://roadie.io/backstage/plugins/aws-lambda/) - AWS Lambda関数を管理・監視します。
- [AiKA](https://backstage.spotify.com/discover/blog/aika-data-plugins-coming-to-portal/) - 内部ドキュメントとAPIからコンテキストを認識した回答を行うAI支援機能。
- [RAG AI Plugin](https://www.opslevel.com/resources/top-10-backstage-plugins-for-2025) - 内部知識向けにLLMを使用した検索拡張生成を追加します。
- [Announcements Plugin](https://www.npmjs.com/package/@backstage-community/plugin-announcements) - Backstage内で内部告知を直接作成・管理します。
- [Git Release Manager](https://backstage.spotify.com/partners/spotify/plugin/git-release-manager/) - Backstage内からGitHubリリースワークフローを自動化します。
- [Port Plugin](https://www.port.io/blog/top-5-backstage-plugins) - スタック全体からスコアカードとダッシュボードへデータを同期します。
- [Env0 Plugin](https://www.env0.com/blog/new-backstage-plugin-manage-and-deploy-iac-from-your-internal-developer-portal) - Infrastructure as Code（IaC）のワークフローとセルフサービスプロビジョニングを管理します。
- [Tech Insights Scorecards](https://roadie.io/backstage/plugins/tech-insights/) - カタログ全体の集中チェックにより、サービス成熟度スコアカードを自動化します。
- [Scaffolder Yeoman Module](https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend-module-yeoman) - YeomanブループリントとGitHub IssuesやTerraform Cloudなどの新しいテンプレートアクションでgolden pathsを拡張します。
- [Microsoft Graph Catalog Module](https://www.npmjs.com/package/@backstage/plugin-catalog-backend-module-msgraph) - Azure ADユーザーとグループをBackstageエンティティとして同期します。
- [Azure DevOps Catalog Modules](https://www.npmjs.com/package/@backstage/plugin-catalog-backend-module-azure) - Azure Repos、Boards、Pipelinesのメタデータをカタログバックエンドへ取り込みます。
- [Search Backend Modules](https://www.npmjs.com/package/@backstage/plugin-search-backend-module-elasticsearch) - ElasticsearchまたはLunrを利用したハイブリッドインデックスで、より高速なフィルター検索を実現します。
- [New Relic](https://www.npmjs.com/package/@backstage-community/plugin-newrelic) - サービスカタログのエントリーからNew Relicダッシュボードへ直接移動します。
- [Apiiro](https://github.com/backstage/community-plugins/blob/main/workspaces/apiiro/plugins/apiiro/README.md) - ApiiroアプリケーションリスクのコンテキストをBackstageエンティティへ直接表示します。
- [Wiz Security](https://github.com/wiz-sec-public/backstage-plugin-wiz) - スコアカードと並べてWizクラウドリスクスコアを表示し、修正の優先順位付けを行います。

## チュートリアルとガイド

- [Backstage Learn](https://backstage.spotify.com/learn/)
- [Getting Started with Backstage](https://backstage.io/docs/getting-started/)
- [Creating a Plugin](https://backstage.io/docs/plugins/create-a-plugin)
- [Integrating with Existing Infrastructure](https://backstage.io/docs/integrations/)
- [Customizing the UI](https://backstage.io/docs/getting-started/app-custom-theme/)
- [Module Federation](https://backstage.io/docs/frontend-system/building-apps/module-federation) - 動的モジュール読み込みにより、アプリ境界をまたいでフロントエンド機能を構成します。
- [Plugin Directory Audit](https://backstage.io/docs/next/plugins/plugin-directory-audit) - ディレクトリ公開に向けたプラグインメタデータと準備状況を検証します。

## ツールと統合

- [Portal](https://backstage.spotify.com/docs/portal/) - Backstageに基づきSpotifyが保守するノーコードIDP。
- [Backstage CLI](https://backstage.io/docs/local-dev/cli-overview)
- [Upgrade Helper](https://backstage.github.io/upgrade-helper/?to=1.48.0) - Backstageアップグレードのためにバージョンを比較し、依存関係の更新を計画します。
- [Docker](https://github.com/backstage/backstage/blob/master/contrib/docker/) - DockerコンテナーでBackstageを実行します。
- [Kubernetes](https://github.com/backstage/backstage/blob/master/contrib/kubernetes/) - KubernetesへBackstageをデプロイします。
- [Backstage Helm Chart](https://github.com/backstage/charts) - Kubernetes上でBackstageをデプロイするためのHelm chart。
- [Backstage ArgoCD Integration](https://roadie.io/backstage/plugins/argo-cd/) - ArgoCDのGitOpsワークフローをBackstageに表示します。
- [Kratix with Backstage](https://docs.kratix.io/main/learn-more/how-kratix-complements/backstage) - Kratix Platform Engineering FrameworkとBackstageを統合し、promisesを簡単にデプロイします。
- [Crossplane with Backstage](https://www.youtube.com/watch?v=d2L6PWGfhXI) - CrossplaneとBackstageを統合するガイド。

## コミュニティと貢献

- [Backstage Community](https://github.com/backstage/community) - Backstageコミュニティに参加して質問し、知識を共有します。
- [Good First Issues](https://github.com/backstage/backstage/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) - GitHubで「Good First Issues」に取り組み、プロジェクトへ貢献します。
- [Discord](https://discord.com/invite/MUpMjP2) - Backstage Discordサーバーに参加し、ほかの開発者とつながってライブサポートを受けます。
- [Get a Jump on ContribFest](https://backstage.io/blog/2026/02/25/get-a-jump-on-contribfest) - 最新の貢献イベントサイクルへの参加方法を学びます。
- [ContribFest App](https://contribfest.backstage.io/) - ContribFestの貢献機会とプロジェクトトラックを閲覧します。

## 記事とプレゼンテーション

- [Introduction to Backstage](https://www.youtube.com/watch?v=1XtJ5FAOjPk) - SpotifyによるBackstageの動画紹介。
- [Creating a Plugin for Backstage](https://www.youtube.com/watch?v=lLLw3tcBwWw) - Backstage用プラグインの作成方法を学びます。
- [How Spotify Builds Infrastructure with Backstage](https://engineering.atspotify.com/2020/03/17/what-the-heck-is-backstage-anyway/) - Backstageを使ったSpotifyの経験に関するブログ投稿。
- [Backstage v1.50.4 Release Notes](https://backstage.io/docs/releases/v1.50.4/) - プラットフォーム更新とバグ修正を含む最新の安定版（2026-04-29）。
- [Backstage Wrapped 2025: Celebrating a mature framework with modern foundations](https://backstage.io/blog/2025/12/30/backstage-wrapped-2025) - Backstageの成長、プラットフォームの成熟度、ハイライトに関する年次回顧。
- [BackstageCon + KubeCon NA 2025 Highlights](https://backstage.io/blog/2025/11/25/backstagecon-kubecon-25-atlanta) - アトランタにおける最近のプラットフォーム更新とコミュニティデモの総括。
- [Backstage Security Audit 2024](https://backstage.io/blog/2024/12/17/backstage-security-audit-2024/) - 独立したセキュリティ監査の結果、調査結果、修正概要。
- [CVE-2024-26150 Security Notice](https://backstage.io/blog/2024/02/28/security-notice/) - Scaffolderのパストラバーサル修正と推奨アップグレード。
- [Actions Registry + MCP Integration (v1.40.0)](https://backstage.io/docs/releases/v1.40.0) - Actions RegistryサービスとMCPサーバー統合の注記。
- [MCP Actions Backend Plugin Docs](https://backstage.io/api/stable/modules/_backstage_plugin-mcp-actions-backend.html) - BackstageアクションをAIクライアント向けMCPツールとして公開します。
- [RFCs on GitHub](https://github.com/backstage/backstage/labels/RFC) - 進行中の提案とコミュニティフィードバックを追跡します。

## 関連プロジェクト

- [Lighthouse](https://github.com/GoogleChrome/lighthouse-ci) - コミットごとのLighthouse実行と、時間経過に伴う変更の表示を自動化します。
- [Roadie](https://roadie.io/) - 企業向けのマネージドBackstageサービス。

## 貢献

貢献は大歓迎です！pull requestを送信する前に[貢献ガイドライン](https://github.com/shano/awesome-backstage/blob/a708fd43b7304bb08ed4a4046aa317442e37adaa/CONTRIBUTING.md)をお読みください。
