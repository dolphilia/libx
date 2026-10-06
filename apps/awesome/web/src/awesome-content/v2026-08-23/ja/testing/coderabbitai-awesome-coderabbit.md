---
title: "Awesome CodeRabbit"
description: "CodeRabbitの資料、APIドキュメント、設定例、連携ガイド、チュートリアル、プロジェクトでのレビュー例を案内します。"
licenseSource: "github-coderabbitai-awesome-coderabbit-readme-md"
---

# Awesome CodeRabbit

[CodeRabbit](https://www.coderabbit.ai)は、バージョン管理プラットフォームと連携し、コード変更にフィードバックを提供するAIコードレビューツールです。公式資料、APIドキュメント、設定例、連携ガイド、チュートリアル、記事、レビュー、オープンソースプロジェクトでのレビュー例を探せます。

## 公式リソース

- [ドキュメント](https://docs.coderabbit.ai) — CodeRabbitの機能や利用方法を扱う資料。

- [ブログ](https://www.coderabbit.ai/blog) — 更新情報、チュートリアル、推奨される利用方法を掲載する公式ブログ。

- [よくある質問](https://www.coderabbit.ai/faq) — CodeRabbitに関する質問と回答。

- [GitHubリポジトリ](https://github.com/coderabbitai/ai-pr-reviewer) — 公式AI PR Reviewerリポジトリ。

- [LinkedIn](https://www.linkedin.com/company/coderabbitai/) — 公式LinkedInアカウント。

- [X (Twitter)](https://x.com/coderabbitai) — 公式Xアカウント。

- [YouTubeチャンネル](https://www.youtube.com/@CodeRabbitAI) — チュートリアルと更新情報を掲載する公式チャンネル。

## はじめに

- [CodeRabbitのスタートアップ支援プログラム](https://www.coderabbit.ai/blog/coderabbit-startup-program) — スタートアップ向けのプログラム。

- [AIコードレビューツールの利用例](https://www.coderabbit.ai/blog/how-to-use-an-ai-code-reviewer-on-github-in-4-examples) — CodeRabbitを使う4つの実践例。

## API リファレンス

- [OpenAPIドキュメント](https://docs.coderabbit.ai/api-reference/) — CodeRabbitのREST APIエンドポイントを扱うSwaggerドキュメント。

## 設定例

### エンタープライズ設定例

エンタープライズ向けの設定例です。下のリンクから、ほかのプロジェクト設定も確認できます。

```yaml
# yaml-language-server: $schema=https://coderabbit.ai/integrations/schema.v2.json
language: "en-US"
early_access: false
tone_instructions: 'You are an expert code reviewer in Java, TypeScript, JavaScript, and NodeJS. You work in an enterprise software developer team, providing concise and clear code review advice. You only elaborate or provide detailed explanations when requested.'
reviews:
  profile: "chill"
  request_changes_workflow: false
  high_level_summary: true
  poem: true
  review_status: true
  collapse_walkthrough: false
  auto_review:
    enabled: true
    drafts: false
    base_branches: ["pg", "release"]
  path_instructions:
    - path: "app/client/cypress/**/**.*"
      instructions: |
        Review the following e2e test code written using the Cypress test library. Ensure that:
        - Follow best practices for Cypress code and e2e automation
        - Avoid using cy.wait in code
        - Avoid using cy.pause in code
        - Avoid using agHelper.sleep()
        - Use locator variables for locators
        - Use data-* attributes for selectors
        - Avoid Xpaths, Attributes and CSS path
        - Avoid selectors like .btn.submit
        - Perform logins via API
        - Avoid using it.only
        - Use multiple assertions
        - Avoid string assertions
        - Ensure unique filenames
chat:
  auto_reply: true
```

さらに多くの例は、言語別に整理された [`configs/`](https://github.com/coderabbitai/awesome-coderabbit/blob/41993ea4a799a0bc35e2da1ead3b7f7a08d7de47/configs/) ディレクトリで確認できます。

```
configs/
├── javascript/   # JavaScript project configurations
├── typescript/   # TypeScript project configurations
├── python/       # Python project configurations
├── go/          # Go project configurations
└── multi-language/ # Full-stack project configurations
```

## 統合ガイド

- [Azure DevOps連携](https://www.coderabbit.ai/blog/getting-started-with-coderabbit-using-azure-devops) — Azure DevOpsと連携させるためのガイド。

- [CI/CDパイプライン連携](https://www.coderabbit.ai/blog/how-to-run-static-analysis-on-your-ci-cd-pipelines-using-ai) — AIによる静的解析をCI/CDパイプラインに追加する方法。

- [Linearボード連携](https://www.coderabbit.ai/blog/how-to-use-coderabbit-to-validate-issues-against-linear-board) — Linearのボードと連携させるためのガイド。

- [DevOpsパイプライン連携](https://www.coderabbit.ai/blog/how-to-integrate-ai-code-review-into-your-devops-pipeline) — DevOps環境に組み込むためのガイド。

## 動画チュートリアル

- [導入チュートリアル](https://www.youtube.com/watch?v=3SyUOSebG7E) — 新規ユーザー向けに手順を解説する公式ガイド。

## ブログ

- [AI Can Make a Code Review for Free](https://tomaszs2.medium.com/ai-can-make-a-code-review-for-free-a559cf74efa5)

- [CodeRabbit Deep Dive](https://www.coderabbit.ai/blog/coderabbit-deep-dive)

- [CodeRabbit vs Others: AI Code Review Tools](https://www.devtoolsacademy.com/blog/coderabbit-vs-others-ai-code-review-tools)

- [Why Developers Hate Linters](https://www.coderabbit.ai/blog/why-developers-hate-linters)

- [How to Automate TypeScript Code Reviews with CodeRabbit](https://www.coderabbit.ai/blog/how-to-automate-typescript-code-reviews-with-coderabbit)

## メディア掲載

- [TechCrunchの記事](https://techcrunch.com/2024/08/15/coderabbit-raises-16m-to-bring-ai-to-code-reviews/) — CodeRabbitの1,600万ドルの資金調達に関する記事。

- [Silicon Angleの記事](https://siliconangle.com/2024/08/14/ai-code-review-startup-coderabbit-raises-16m-help-developers-debug-code-faster/) — CodeRabbitの資金調達と目指す役割に関する記事。

## コミュニティレビュー

- [G2のレビュー](https://www.g2.com/products/coderabbit/reviews) — 確認済みユーザーによるレビューと評価。

- [開発者の利用体験](https://tomaszs2.medium.com/ai-code-review-tool-coderabbit-replaces-me-and-i-like-it-b1350a9cda58) — CodeRabbitの実際の利用経験。

## CodeRabbit を使用するプロジェクト

原文で、AIコードレビューにCodeRabbitを使うオープンソースプロジェクトとして紹介されている事例です。各項目からレビュー例を確認できます。

- [Appsmith](https://github.com/appsmithorg/appsmith) — 社内ツールを構築するためのローコードプラットフォーム。[レビュー例](https://github.com/appsmithorg/appsmith/pull/37200)。

- [Crowd.dev](https://github.com/CrowdDotDev/crowd.dev) — オープンソースの開発者コミュニティプラットフォーム。[レビュー例](https://github.com/CrowdDotDev/crowd.dev/pull/2671)。

- [Documenso](https://github.com/documenso/documenso) — DocuSignの代替となるオープンソースのソフトウェア。[レビュー例](https://github.com/documenso/documenso/pull/1436)。

- [Formbricks](https://github.com/formbricks/formbricks) — オープンソースのアンケート・エクスペリエンス管理ソフトウェア。[レビュー例](https://github.com/formbricks/formbricks/pull/4229)。

- [Neon](https://github.com/neondatabase/neon) — サーバーレスのPostgresデータベースプラットフォーム。[レビュー例](https://github.com/neondatabase/neon/pull/9100)。

- [NextUI](https://github.com/nextui-org/nextui) — ReactのUIライブラリー。[レビュー例](https://github.com/nextui-org/nextui/pull/3680)。

- [Novu](https://github.com/novuhq/novu) — オープンソースの通知基盤。[レビュー例](https://github.com/novuhq/novu/pull/5401)。

- [OpenObserve](https://github.com/openobserve/openobserve) — クラウドネイティブな可観測性プラットフォーム。[レビュー例](https://github.com/openobserve/openobserve/pull/4865)。

- [Permify](https://github.com/Permify/permify) — 認可サービスとポリシーエンジン。[レビュー例](https://github.com/Permify/permify/pull/1754)。

- [Pipedream](https://github.com/PipedreamHQ/pipedream) — APIを接続するためのツール。[レビュー例](https://github.com/PipedreamHQ/pipedream/pull/14498)。

- [Plane](https://github.com/makeplane/plane) — オープンソースのプロジェクト管理ツール。[レビュー例](https://github.com/makeplane/plane/pull/5933)。

- [Unkey](https://github.com/unkeyed/unkey) — APIキー管理ソフトウェア。[レビュー例](https://github.com/unkeyed/unkey/pull/2639)。

- [UploadThing](https://github.com/pingdotgg/uploadthing) — Web向けのファイルアップロードソフトウェア。[レビュー例](https://github.com/pingdotgg/uploadthing/pull/1038)。
