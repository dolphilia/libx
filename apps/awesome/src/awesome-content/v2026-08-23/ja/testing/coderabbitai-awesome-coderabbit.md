---
title: "Awesome CodeRabbit"
description: "CodeRabbitを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-coderabbitai-awesome-coderabbit-readme-md"
---

# Awesome CodeRabbit

CodeRabbitを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [公式リソース](#official-resources)
- [はじめに](#getting-started)
- [API リファレンス](#api-reference)
- [設定例](#configuration-examples)
- [統合ガイド](#integration-guides)
- [動画チュートリアル](#video-tutorials)
- [ブログ](#blogs)
- [メディア掲載](#media-coverage)
- [コミュニティレビュー](#community-reviews)
- [CodeRabbit を使用するプロジェクト](#projects-using-coderabbit)

## 公式リソース

- [Documentation](https://docs.coderabbit.ai) - CodeRabbit のあらゆる側面を網羅する包括的なドキュメント。
- [Blog](https://www.coderabbit.ai/blog) - 更新、チュートリアル、ベストプラクティスを掲載する公式ブログ。
- [FAQ](https://www.coderabbit.ai/faq) - CodeRabbit に関するよくある質問。
- [GitHub Repository](https://github.com/coderabbitai/ai-pr-reviewer) - 公式 AI PR Reviewer リポジトリ。
- [LinkedIn](https://www.linkedin.com/company/coderabbitai/) - 公式 LinkedIn アカウント。
- [Twitter](https://x.com/coderabbitai) - 公式 Twitter/X アカウント。
- [YouTube Channel](https://www.youtube.com/@CodeRabbitAI) - チュートリアルと更新情報を掲載する公式 YouTube チャンネル。

## はじめに

- [CodeRabbit Startup Program](https://www.coderabbit.ai/blog/coderabbit-startup-program) - スタートアップ向けの特別プログラム。
- [AI Code Reviewer Examples](https://www.coderabbit.ai/blog/how-to-use-an-ai-code-reviewer-on-github-in-4-examples) - CodeRabbit を使用する実践的な 4 つの例。

## API リファレンス

- [OpenAPI Documentation](https://docs.coderabbit.ai/api-reference/) - CodeRabbit の REST API エンドポイント向け完全な Swagger ドキュメント。

## 設定例

### エンタープライズ設定例

さまざまなプロジェクトの実際の CodeRabbit 設定を確認できます。

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

- [Azure DevOps Integration](https://www.coderabbit.ai/blog/getting-started-with-coderabbit-using-azure-devops) - Azure DevOps との統合ガイド。
- [CI/CD Pipeline Integration](https://www.coderabbit.ai/blog/how-to-run-static-analysis-on-your-ci-cd-pipelines-using-ai) - AI 搭載静的解析を CI/CD パイプラインへ追加する。
- [Linear Board Integration](https://www.coderabbit.ai/blog/how-to-use-coderabbit-to-validate-issues-against-linear-board) - Linear ボード統合のガイド。
- [DevOps Pipeline Integration](https://www.coderabbit.ai/blog/how-to-integrate-ai-code-review-into-your-devops-pipeline) - 包括的な DevOps 統合ガイド。

## 動画チュートリアル

- [Getting Started Tutorial](https://www.youtube.com/watch?v=3SyUOSebG7E) - 新規ユーザー向け公式ステップバイステップガイド。

## ブログ

- [AI Can Make a Code Review for Free](https://tomaszs2.medium.com/ai-can-make-a-code-review-for-free-a559cf74efa5)
- [CodeRabbit Deep Dive](https://www.coderabbit.ai/blog/coderabbit-deep-dive)
- [CodeRabbit vs Others: AI Code Review Tools](https://www.devtoolsacademy.com/blog/coderabbit-vs-others-ai-code-review-tools)
- [Why Developers Hate Linters](https://www.coderabbit.ai/blog/why-developers-hate-linters)
- [How to Automate TypeScript Code Reviews with CodeRabbit](https://www.coderabbit.ai/blog/how-to-automate-typescript-code-reviews-with-coderabbit)


## メディア掲載

- [TechCrunch Coverage](https://techcrunch.com/2024/08/15/coderabbit-raises-16m-to-bring-ai-to-code-reviews/) - CodeRabbit の 1,600 万ドルの資金調達に関する TechCrunch 記事。
- [Silicon Angle Feature](https://siliconangle.com/2024/08/14/ai-code-review-startup-coderabbit-raises-16m-help-developers-debug-code-faster/) - CodeRabbit の資金調達と使命に関する記事。

## コミュニティレビュー

- [G2 Reviews](https://www.g2.com/products/coderabbit/reviews) - 検証済みユーザーレビューと評価。
- [Developer Testimonials](https://tomaszs2.medium.com/ai-code-review-tool-coderabbit-replaces-me-and-i-like-it-b1350a9cda58) - CodeRabbit の実世界での利用経験。

## CodeRabbit を使用するプロジェクト

> AI 搭載コードレビューに CodeRabbit を使用するオープンソースプロジェクトの一部を紹介します。

- [Appsmith](https://github.com/appsmithorg/appsmith) - 内部ツール構築用ローコードプラットフォーム [Example Review](https://github.com/appsmithorg/appsmith/pull/37200)。
- [Crowd.dev](https://github.com/CrowdDotDev/crowd.dev) - オープンソースの開発者コミュニティプラットフォーム [Example Review](https://github.com/CrowdDotDev/crowd.dev/pull/2671)。
- [Documenso](https://github.com/documenso/documenso) - オープンソースの DocuSign 代替 [Example Review](https://github.com/documenso/documenso/pull/1436)。
- [Formbricks](https://github.com/formbricks/formbricks) - オープンソースのアンケート・エクスペリエンス管理ソリューション [Example Review](https://github.com/formbricks/formbricks/pull/4229)。
- [Neon](https://github.com/neondatabase/neon) - サーバーレス Postgres データベースプラットフォーム [Example Review](https://github.com/neondatabase/neon/pull/9100)。
- [NextUI](https://github.com/nextui-org/nextui) - 美しく高速でモダンな React UI ライブラリ [Example Review](https://github.com/nextui-org/nextui/pull/3680)。
- [Novu](https://github.com/novuhq/novu) - オープンソースの通知インフラストラクチャ [Example Review](https://github.com/novuhq/novu/pull/5401)。
- [OpenObserve](https://github.com/openobserve/openobserve) - クラウドネイティブな可観測性プラットフォーム [Example Review](https://github.com/openobserve/openobserve/pull/4865)。
- [Permify](https://github.com/Permify/permify) - 認可サービス・ポリシーエンジン [Example Review](https://github.com/Permify/permify/pull/1754)。
- [Pipedream](https://github.com/PipedreamHQ/pipedream) - API を非常に高速に接続する [Example Review](https://github.com/PipedreamHQ/pipedream/pull/14498)。
- [Plane](https://github.com/makeplane/plane) - オープンソースのプロジェクト管理ツール [Example Review](https://github.com/makeplane/plane/pull/5933)。
- [Unkey](https://github.com/unkeyed/unkey) - API キー管理ソリューション [Example Review](https://github.com/unkeyed/unkey/pull/2639)。
- [UploadThing](https://github.com/pingdotgg/uploadthing) - モダン Web 向けファイルアップロードソリューション [Example Review](https://github.com/pingdotgg/uploadthing/pull/1038)。
