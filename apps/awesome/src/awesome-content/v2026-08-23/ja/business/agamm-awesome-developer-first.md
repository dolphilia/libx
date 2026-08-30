---
title: "agamm/awesome-developer-first"
description: "開発者を主な利用者として設計された製品、ツール、サービスのリスト"
licenseSource: "github-agamm-awesome-developer-first-readme-md"
---

# Awesome Developer-First [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

開発者を意識した素晴らしい製品の厳選リスト。
(👀 自然な宣伝) あなたは [unzip.dev](https://unzip.dev?ref=github-adf)（私が作成した開発者トレンドニュースレター）を気に入ってくれるかもしれません。
より多くの開発者関連コンテンツについては [Agam](https://x.com/agammore) と [Flo](https://x.com/fmerian) をフォローしてください :)

このリポジトリにおける「Developer-First」の定義は次のとおりです。
* 開発者が対象利用者である。
* 「ヘッドレス」「APIファースト」「SaaS」といったキーワードがよく使われる。
* 多くの場合、トップページにコード例が掲載されている。
* 対価を支払って利用する製品、ツール、サービスである。

```diff
+ 👀 Watch this repo to get notifications about new products we find
```

最新の追加アイテム [click here](https://github.com/agamm/awesome-developer-first/commits/main) です。

<a id="contents"></a>
## 目次
* [AI Coding](#ai-coding)
* [Analytics](#analytics)
* [Authentication & Identity](#authentication--identity)
* [Automation](#automation)
* [Backend-as-a-Service](#backend-as-a-service)
* [CI/CD](#cicd)
* [CMS (headless)](#cms-headless)
* [Code Quality](#code-quality)
* [Computer Vision](#computer-vision)
* [Databases & Spreadsheets](#databases--spreadsheets)
* [Debugging](#debugging)
* [Deployment Hosting](#deployment-hosting)
* [Discussions](#discussions)
* [Documentation](#documentation)
* [Environment & Secret Management](#environment--secret-management)
* [Feature Flags](#feature-flags)
* [Gen UI](#gen-ui)
* [GEO](#geo)
* [IDE](#ide)
* [Infrastructure as Code](#infrastructure-as-code)
* [Integrations](#integrations)
* [Localization](#localization)
* [Mail](#mail)
* [Media](#media)
* [Messaging](#messaging)
* [Misc](#misc)
* [Monitoring](#monitoring)
* [Natural Language Processing](#natural-language-processing)
* [Orchestration](#orchestration)
* [Payments & Pricing](#payments--pricing)
* [Repo](#repo)
* [Reports Generation](#reports-generation)
* [Scraping](#scraping)
* [Search](#search)
* [Security](#security)
* [Shipping](#shipping)
* [Testing](#testing)

---

<a id="ai-coding"></a>
## AIコーディング
*AI IDEとAIアシスタント。*
* [Aider](https://aider.chat/) - オープンソースのターミナルAIアシスタント。 [![aider](https://img.shields.io/github/stars/Aider-AI/aider?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/Aider-AI/aider)
* [Amazon Q](https://aws.amazon.com/q/developer/) - アマゾンのAIアシスタント。
* [Cline](https://cline.bot/) - オープンソースのVS Codeプラグイン（クレードをコードアシスタントとして）。 [![cline](https://img.shields.io/github/stars/cline/cline?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/cline/cline)
* [CodeParrot](https://codeparrot.ai/) - VS Code用のフロントエンドコンポーネントAIアシスタント。
* [CodeSquire](https://codesquire.ai) - Jupyter/BigQueryなどでのAI生成用ブラウザ拡張。
* [Cody](https://sourcegraph.com/cody) - Sourcegraphのコードアシスタント。
* [Continue](https://www.continue.dev/) - VS CodeおよびJetBrains向けのAIコードアシスタント。
* [Cursor](https://www.cursor.com/) - AIをベースに構築されたVS Codeのフォーク。
* [Fine](https://www.fine.dev/) - AIエージェントでソフトウェアを構築。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [GitHub Copilot](https://github.com/features/copilot) - みんなが聞いたことのある「元祖」AI IDE。まだ少し後れを感じるが、GitHubと良好に統合されている。
* [IntelliCode](https://visualstudio.microsoft.com/services/intellicode) - マイクロソフトのVisual StudioからのAI提供。
* [JetBrains AI](https://www.jetbrains.com/ai) - JetBrainsのAI提供が、その多くIDEに統合されている。
* [Kilo Code](https://kilocode.ai) - VS CodeおよびJetBrains向けの高速かつオープンソースのAIコードエージェント。 [![Kilo Code](https://img.shields.io/github/stars/Kilo-Org/kilocode?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/Kilo-Org/kilocode)
* [Mastra](https://mastra.ai) - 現代的なTypeScriptスタックでAIエージェントを構築。 [![Mastra](https://img.shields.io/github/stars/mastra-ai/mastra?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/mastra-ai/mastra)
* [OpenHands](https://all-hands.dev/) - オープンソースのDevinの代替品。 [![OpenHands](https://img.shields.io/github/stars/All-Hands-AI/OpenHands?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/All-Hands-AI/OpenHands)
* [Qodo](https://www.qodo.ai/) - 自信を持ってコードを生成（テストの面で特に強調）。
* [Replit AI](http://repl.it/) - ReplitのAIを用いたコードIDE（無料限定プランも提供）。
* [Supermaven](https://supermaven.com/) - スピードとコンテキスト長に関して、非常に良い評価を聞いた。
* [Tabby](https://www.tabbyml.com/) - セルフホスト型オープンソースコードアシスタント。 [![tabby](https://img.shields.io/github/stars/TabbyML/tabby?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/TabbyML/tabby)
* [Tabnine](https://www.tabnine.com/) - AIコードアシスタント分野の「元祖」プレイヤーの一つ。
* [Warp](https://www.warp.dev/warp-ai) - ターミナルに完全に統合されたAI

<a id="analytics"></a>
## 分析
*Track web/app visitors.*
* [Baremetrics](https://baremetrics.com/) - ストリップのサブスクリプション分析
* [devActivity](https://devactivity.com/) - AIインサイト、パフォーマンスレビュー、リトロスペクティブ、ゲーム化を含む貢献分析
* [Heap](https://heap.io/) - ウェブおよびモバイル向けの製品分析API。すべてのイベントをキャプチャ。
* [Mixpanel](https://mixpanel.com/) - 製品分析とダッシュボード
* [Pirsch](https://pirsch.io/) - プライバシーに配慮したウェブ分析（バックエンド統合とAPIを含む）
* [Plausible](https://plausible.io/) - シンプルでプライバシーに配慮し、オープンソースのウェブ分析ツール。 [![Plausible](https://img.shields.io/github/stars/plausible/analytics?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/plausible/analytics)
* [PoeticMetric](https://poeticmetric.com/) - プライバシーを最優先にし、規制に適合した高速分析ツール
* [PostHog](https://posthog.com/) - オープンソースの製品分析プラットフォーム。 [![PostHog](https://img.shields.io/github/stars/posthog/posthog?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/posthog/posthog) [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Segment](https://segment.com/) - ユーザーのデータを収集し、他のツールに送信。
* [Tinybird](https://www.tinybird.co/) - APIへのリアルタイムデータストリーム。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Zoho Apptics](https://zoho.com/apptics) - 統合された、簡潔で実行可能な製品分析

<a id="authentication--identity"></a>
## 認証とアイデンティティ
*Products that handle authentication and user identity for you.*
* [Aserto](https://www.aserto.com) - クラウドネイティブなアプリケーションおよびAPIの認証
* [Auth0](https://auth0.com/) - 認証・認可をサービスとして提供
* [AWS Cognito](https://aws.amazon.com/cognito/) - アマゾンの認証をサービスとして提供
* [BoxyHQ Enterprise SSO](https://boxyhq.com) - エンタープライズSSOおよびディレクトリ同期向けオープンソースAPI
* [Clerk](https://clerk.com/) - React、React Native、Next.js向けの認証およびユーザー管理プラットフォーム
* [Corbado](https://corbado.com) - パスキーを最優先とした認証をサービスとして提供
* [Firebase Auth](https://firebase.google.com/products/auth) - グーグルフィアブルの認証アプローチ
* [FusionAuth](https://fusionauth.io/) - セキュリティを最優先とした認証サービス（セルフホスティングを含む）
* [Hanko](https://www.hanko.io/) - パスワードレス（WebAuthn API）PSD2、eIDAS、およびGDPRに適合。 [![Hanko](https://img.shields.io/github/stars/teamhanko/hanko?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/teamhanko/hanko)
* [Kinde](https://kinde.com/) - 認証とユーザー管理サービス。
* [LoginRadius](https://www.loginradius.com/) - SSOを備えた管理型ユーザー認証サービス。
* [MojoAuth](https://mojoauth.com/) - 企業向けSSOおよび豊富な標準機能を備えた完全なCIAMソリューション。
* [Okta](https://developer.okta.com/) - SSOを備えた埋め込み認証。
* [Ory](https://ory.sh/) - オープンソースの識別およびアクセス制御ソリューション（サービスとしても提供）。
* [Oso](https://www.osohq.com/) - 承認フレームワーク（RBAC）。
* [Permit.io](https://www.permit.io/) - アクセス許可とアクセス制御サービス。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [PropelAuth](https://www.propelauth.com/) - チームベースの認証。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Scalekit](https://scalekit.com) – Firebase、Auth0、またはCognitoなどの既存の認証設定にSAML、OIDCによる企業向けSSOおよびSCIMプロビジョニングを追加可能。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2025#06)
* [SSOJet](https://ssojet.com/) - 認証を再構築せずに企業向けSSOを実現。無料プランには月間アクティブユーザー無制限、組織無制限、2つのSSOおよび2つのSCIM接続が含まれます。
* [Stack Auth](https://stack-auth.com/) - オープンソースのAuth0代替品。 [![stack-auth](https://img.shields.io/github/stars/stack-auth/stack?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/stack-auth/stack) [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Stytch](https://stytch.com/) - すべての認証、承認、および詐欺防止インフラを一括提供。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [SuperTokens](https://supertokens.io/) - オープンソースかつホスティングされたメールおよびOAuth認証、事前構築されたUIを備えたもの。 [![SuperTokens](https://img.shields.io/github/stars/supertokens/supertokens-core?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/supertokens/supertokens-core)
* [Unkey](https://www.unkey.com/) - APIに対する認証、レート制限、使用分析。 [![unkey](https://img.shields.io/github/stars/unkeyed/unkey?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/stack-auth/stack) [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024#06)
* [Userfront](https://userfront.com/) - シンプルなユーザー認証と事前構築されたバックオフィスダッシュボード。
* [WorkOS](https://workos.com/) - 企業向けSSOおよびさらに豊富な標準機能。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)

<a id="automation"></a>
## 自動化
*Automate workflows via APIs and SDKs.*
* [Abstra](http://abstra.io/) - カスタムビジネスプロセス用のPythonベースのワークフローエンジン。 [![Abstra](https://img.shields.io/github/stars/abstra-app/abstra-lib?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/abstra-app/abstra-lib)
* [Lil'bots](https://www.lilbots.io/) - JavaScriptまたはPythonで自動化スクリプトを作成・デプロイし、クラウドに即座にデプロイ可能。OpenAI、Anthropicなど、無料の組み込みAPIも提供。
* [n8n](http://n8n.io/) - 無料かつソースコード公開のfair-codeライセンスに基づくワークフロー自動化ツール。 [![n8n](https://img.shields.io/github/stars/n8n-io/n8n?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/n8n-io/n8n)
* [Potpie](https://potpie.ai) - オープンソースAIエージェントでコードベースを数分で構築。Q&A、テスト、デバッグ、システム設計など、事前に作成されたエージェントを使用するか、あるいは自作の用途に特化したエージェントを作成する。 [![potpie](https://img.shields.io/github/stars/potpie-ai/potpie?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/potpie-ai/potpie)
* [Trigger.dev](http://trigger.dev/) - APIからワークフローを作成できるオープンソースプラットフォーム。スケジュールまたは要請に応じて。 [![trigger.dev](https://img.shields.io/github/stars/triggerdotdev/trigger.dev?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/triggerdotdev/trigger.dev) [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)

<a id="backend-as-a-service"></a>
## Backend as a Service
*Abstract away all the backend hassles with an out-of-the-box suite of backend solutions.*
* [Appwrite](https://appwrite.io/) - フロントエンドおよびモバイル開発者向けの端末から端末までの一貫したバックエンドサーバー。 [![Appwrite](https://img.shields.io/github/stars/appwrite/appwrite?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/appwrite/appwrite) [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Encore](https://encore.dev/) - 堅牢で型安全なアプリケーションを実現するオープンソースTypeScriptバックエンドフレームワーク。 [![Encore](https://img.shields.io/github/stars/encoredev/encore?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/encoredev/encore) [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Jamsocket](https://jamsocket.com/) - リアルタイムアプリ向けのバックエンド。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Nhost](https://nhost.io/) - Postgresデータベースを備えたオープンソースバックエンド、即時GraphQLAPI、認証、ストレージ、サーバレス関数を提供。 [![nhost](https://img.shields.io/github/stars/nhost/nhost?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/nhost/nhost)
* [Supabase](https://supabase.com/) - Firebaseに類するホストされたオープンソース管理PostgresDB。 [![Supabase](https://img.shields.io/github/stars/supabase/supabase?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/supabase/supabase) [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)

<a id="cicd"></a>
## CI/CD
*Continuous Integration/Delivery.*
* [CircleCI](https://circleci.com/) - ビルド設定、並列ジョブ、ジョブマーケットをYMLで構成。
* [Depot](https://depot.dev) - CIでDockerイメージを高速に構築するための即時置き換え。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [GitLab](https://gitlab.com/) - GitHubのような機能を備えたオープンソースCIおよびホストソリューション。
* [Ona](https://www.ona.com/) - 自動化されたクラウド開発環境。 [![Ona](https://img.shields.io/github/stars/gitpod-io/gitpod?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/gitpod-io/gitpod)
* [RunMyJob](https://runmyjob.io/) - GitHub ActionsおよびGitLab CI向けのクラウドランナー。
* [Spacelift](https://spacelift.io/) - インフラアセンブリとしてのCI/CDプラットフォーム。現在はTerraform、Pulumi、AWS CloudFormation、Kubernetesをサポート。

<a id="cms-headless"></a>
## CMS（ヘッドレス）
*Backend only Content Management System, you decide on frontend and consume content via API.*
* [Contentful](http://contentful.com/) - CMSとしてAPIを提供。
* [DatoCMS](https://www.datocms.com/) - APIベースのCMS。
* [Ghost](https://ghost.org/) - ブログプラットフォーム。ヘッドレスCMSとして使用可能（例： [with Hexo](https://ghost.org/docs/api/v3/hexo/)）。 [![Ghost](https://img.shields.io/github/stars/tryghost/ghost?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/tryghost/ghost)
* [Sanity](https://sanity.io/) - ヘッドレスCMS。コンテンツをデータとして扱う。
* [Strapi](https://strapi.io/) - オープンソースヘッドレスCMS、100％JavaScript。 [![Strapi](https://img.shields.io/github/stars/strapi/strapi?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/strapi/strapi) [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)

<a id="code-quality"></a>
## コード品質
*Check your code quality.*
* [Codacy](https://www.codacy.com/) - 自動コード品質チェック。
* [CodeRabbit AI](https://coderabbit.ai/) - AIによるコードレビューと自動プルリクエスト管理。
* [DebuggAI](https://debugg.ai) - ゼロ設定AIブラウザ（E2E）テストがすべてのコミットとプルリクエスト（PR）をレビュー。
* [Ellipsis](http://ellipsis.dev/) - AIによるコードレビューとバグ修正。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Kodus](https://kodus.io/) - オープンソースコードレビューエージェント。 [![Kodus](https://img.shields.io/github/stars/kodustech/kodus-ai?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/kodustech/kodus-ai)
* [Sonar](https://www.sonarsource.com/) - Lintおよびコード品質チェック。

<a id="computer-vision"></a>
## コンピュータービジョン
*Manipulate and detect visual data.*
* [Clarifai](https://www.clarifai.com/) - コンピュータビジョンAPIのセット。
* [CloudSight](https://cloudsight.ai/) - デジタルメディアブランド認識。
* [Google Vision AI](https://cloud.google.com/vision) - グーグルのAIビジョンAPI。
* [Roboflow](https://roboflow.com/) - 開発者向けに簡易なコンピュータビジョンモデル作成。

<a id="databases--spreadsheets"></a>
## データベースとスプレッドシート
*Storing data and processing it.*
* [Airtable](https://airtable.com/) - データベースとスプレッドシートのハイブリッドサービス（API対応）。
* [Apitable](https://apitable.com/) - API中心のAirtableの代替品。
* [CrateDB](https://crate.io/) - 分散型オープンソースSQLデータベース（リアルタイム分析用）。 [![Crate](https://img.shields.io/github/stars/crate/crate?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/crate/crate)
* [Neon](https://neon.tech/) - サーバレスPostgresデータベース（スケールゼロ、ブランチ、自動スケーリング対応）。 [![Neon](https://img.shields.io/github/stars/neondatabase/neon?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/neondatabase/neon)
* [Neuledge](https://neuledge.com/) - どんなデータベースにも対応するユニバーサルスキーマ言語を備えた抽象的なORM。
* [Outerbase](https://outerbase.com/) - AIによるデータベースUI。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [PlanetScale](https://planetscale.com/) - ホスティングされた管理型MySQLデータベース、CI統合および自動スケーリング。
* [Upstash](https://upstash.com/) - サーバレスでカスタマイズされたRedisプロバイダー。

<a id="debugging"></a>
## デバッグ
*Tools that help in tracking bugs.*
* [Lightrun](https://www.lightrun.com) - IDE（オンプレミスまたはSaaS）にプラグインをインストールして、Java、Node.js、Pythonをサポートするプロダクションサーバーのデバッグ。
* [Linear](https://linear.app/) - 開発者向けの問題トラッキング機能。
* [Multiplayer](https://www.multiplayer.app) - あなたの好きなコーディングエージェント（オープンソースまたはSaaS）のすぐ側にローカルで実行されるデバッグエージェント。そのエージェントは、フルスタックかつサンプリングなしの実行データを提供し、自動的にバグを検出し、修正する。
* [Rookout](https://www.rookout.com) - クラウドベースのデバッガーを用いてプロダクションサーバーをデバッグ。Java、.Net、Node.js、Python、Rubyをサポート。

<a id="deployment-hosting"></a>
## デプロイとホスティング
*Products that help you deploy your app/website.*
* [Adaptable](https://adaptable.io/) - アプリとデータベースを共通テンプレートでデプロイ可能
* [Beam](https://www.beam.cloud/) - サーバレスクラウドインフラ。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Cycle.io](https://www.cycle.io/) - プラットフォームを構築するためのDevOpsプラットフォーム。コンテナオーケストレーション、ロードバランシング、モニタリングなどを扱う
* [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform/) - インフラをデプロイし、その後は気にしない。主要フレームワークと互換可能
* [Fly.io](https://fly.io/) - 位置意識サービスを活用し、フルスタックアプリをDocker化してデプロイ（遅延削減）
* [Heroku](https://www.heroku.com/) - スケーラブルなサーバーにCLIでデプロイ
* [Kinsta](https://kinsta.com/) - GitHub、GitLab、Bitbucketから静的サイト、アプリ、データベースをデプロイし、ヘッドレスWordPressをホスト
* [Koyeb](https://www.koyeb.com/) - フルスタックアプリとAPIを数分でサーバレスにデプロイ可能。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Netlify](https://www.netlify.com/) - CLIでJAMStack（主にGatsby）をデプロイ
* [Platform.sh](https://platform.sh/) - フルスタックアプリの継続的デプロイ
* [Propel](https://www.propeldata.com/) - サーバレスClickHouseプラットフォーム。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Qoddi](https://qoddi.com/) - Git接続型アプリホスティングプラットフォーム
* [Quix](https://quix.io/) - イベントストリーミングアプリケーションの構築と実行に必要な1つのツール
* [Railway](https://railway.app/) - 自動スケーリング、データベース、シークレット、リロードを含む即時Gitからデプロイ。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Reflex](https://reflex.dev/) - Pythonでウェブアプリを構築・デプロイするためのフレームワーク。
フロントエンドも対象とします。 [![Reflex](https://img.shields.io/github/stars/reflex-dev/reflex?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/reflex-dev/reflex)
* [Render](https://render.com/) - GitからCDNへデプロイし、SSLを有効化
* [Vercel](https://vercel.com/) - サーバレスウェブアプリ、静的ウェブサイト、JAMStack（主にNext.js）プロジェクトの構築とデプロイに使えるクラウドプラットフォーム
* [Zeabur](https://zeabur.com/) - フロントエンド、バックエンド、データベースサービスのワンクリックデプロイ

<a id="discussions"></a>
## ディスカッション
*Comments and forums.*
* [Bazaarvoice](https://www.bazaarvoice.com/ratings-and-reviews/) - 評価、レビューをサービスとして提供
* [Commento](https://commento.io/) - プライバシー中心の埋め込みコメントシステム
* [Yotpo](https://www.yotpo.com/platform/reviews/) - レビュー・評価・Q&Aをサービスとして提供

<a id="documentation"></a>
## ドキュメント
*Documentation solutions.*
* [Apidog](https://apidog.com/) - すべてを一括で扱えるAPIドキュメントツール。リクエストから1クリックでAPIドキュメントを生成
* [Bump.sh](https://bump.sh/) - APIドキュメントと変更管理ソリューション
* [DeveloperHub](https://developerhub.io/) - 協働型開発者ドキュメントプラットフォーム
* [Fern](https://www.buildwithfern.com/) - API向けの即時ドキュメントとSDK
* [Mintlify](https://www.mintlify.com/) - NextJSベースのAI駆動ドキュメントサイトプラットフォーム。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [ReadMe](https://readme.com/) - パーソナライズされた動的開発者ドキュメント
* [Speakeasy](https://speakeasy.com/) - SDK、APIドキュメント、Terraformプロバイダー、端末まで含むAPIツールing。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Swimm](https://swimm.io/) - コードと連携したドキュメント、自動同期、IDEとの連携対応

<a id="environment--secret-management"></a>
## 環境・シークレット管理
*Manage environment variables and secrets for multiple apps or projects.*
* [Doppler](https://doppler.com/) - プロジェクト間の環境変数管理を一括で行う
* [Envkey](https://www.envkey.com/) - すべてのアプリに同期機構を備えた環境管理
* [KeyHippo](https://www.keyhippo.com/) - Postgres RLS用のAPIキー。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Ubiq](https://www.ubiqsecurity.com/) - 暗号化APIとシークレット管理
* [Vault](https://www.vaultproject.io/) - API駆動のシークレットキー管理

<a id="feature-flags"></a>
## フィーチャーフラグ
*Control production features with conditional flags in your code.*
* [Bucket](https://bucket.co) - B2B SaaS製品向けに設計された機能フラグ
* [ConfigCat](https://configcat.com/) - チーム規模無制限、永遠無料プランを備えた強力でプライバシーを最優先した機能フラグ管理
* [Flagsmith](https://flagsmith.com/) - 機能フラグ-as-a-serviceプラットフォームを簡易化
* [GrowthBook](https://www.growthbook.io/) - オープンソース機能フラグと実験プラットフォーム。 [![GrowthBook](https://img.shields.io/github/stars/growthbook/growthbook?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/growthbook/growthbook)
* [Hypertune](https://hypertune.com) - ReactおよびNext.js向けに最適化された型安全機能フラグ
* [LaunchDarkly](https://launchdarkly.com/) - 機能フラグ-as-a-serviceプラットフォーム。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Split](https://www.split.io/) - 機能フラグプラットフォームとデータ分析
* [Statsig](https://statsig.com/) - 分析、機能フラグ、A/Bテストを一括で提供するプラットフォーム。月間100万件までのイベントは無料。
* [Unleash](https://www.getunleash.io/) - オープンソースでプライバシーを最優先し、企業向けにも対応する機能管理ソリューション。 [![Unleash](https://img.shields.io/github/stars/unleash/unleash?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/unleash/unleash)

<a id="gen-ui"></a>
## 生成UI
*Or Generative UI, Dynamic User Experiences, Adaptive UI.*
* [AI SDK by Vercel](https://ai-sdk.dev/) - Gen UIアプリケーションを作成するためのSDK。 [![AI SDK by Vercel](https://img.shields.io/github/stars/vercel/ai?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/vercel/ai)
* [Coframe](https://coframe.ai/) - AIによって、あなたのウェブサイトのコピー、画像、UIを自動的に最適化。
* [Horizon UI](https://horizon-ui.com/) - shadcnのボイラープレートで、Gen UI AIコンポーネントが内蔵されている。
* [Magic Patterns](https://magicpatterns.link/dev) - AIを使ってプロトタイプの製品アイデアを生成。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Tempo](https://tempolabs.ai/) - コード中心のFigmaの代替ツール。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [v0 by Vercel](https://v0.link/dev) - プロンプトからUIを生成。すべてのUIはストリーミングされ、クライアントサイドコンポーネントとして実行される。

<a id="geo"></a>
## 地理情報
*Location services.*
* [AirPinpoint](https://airpinpoint.com/) - Apple AirTagsのトラッキング用API。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Mapbox](https://www.mapbox.com/) - 開発者向けのマップと位置情報製品。
* [OpenCage](https://opencagedata.com/) - オープンデータに基づくフォワードおよびリバースジオコーディングAPI。
* [PlaceKit](https://placekit.io/) - 位置情報検索API。
* [Radar](https://radar.io/) - 地理境界（Geofencing）および地理API。
* [SmartyStreets](https://www.smartystreets.com/) - 米国向けリバースジオコーディングおよび住所検証API。

<a id="ide"></a>
## IDE
*Products that extend your IDE and help development.*
* [GoCodeo](https://www.gocodeo.com/) - AIによるコード作成・テストアグエント。
* [Kite](https://www.kite.com/) - IDE（PythonまたはJS）に搭載されたAIアシスタント。
* [MarsCode](https://www.marscode.com/?utm_source=github&utm_medium=rm) - AIを活用したクラウドベースIDE。
* [OneCompiler](https://onecompiler.com/) - 70以上のプログラミング言語をサポートする柔軟でAIを活用したオンラインIDE。開発者がコードを書く、コンパイルし、実行できるように設計されている。

<a id="infrastructure-as-code"></a>
## Infrastructure as Code
*Declare your infrastructure and reproducibly provision cloud infrastructure from it.*
* [Pulumi](https://www.pulumi.com/) -  Python、TypeScript、Goなど、多くの言語に対応する開発者中心のIaC。
* [Terraform](https://www.hashicorp.com/products/terraform) - DSL、オープンソース、無料（有料ソリューションではチーム管理、ポリシー-as-コードなどが追加）。 [![Terraform](https://img.shields.io/github/stars/hashicorp/terraform?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/hashicorp/terraform)
* [Terrateam](https://terrateam.io/) - Terraform、OpenTofu、Terragrunt、CDKTF、Pulumiに適用可能なGitOpsを第一にしたオープンソースインフラコード自動化。 [![Terrateam](https://img.shields.io/github/stars/terrateamio/terrateam?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/terrateamio/terrateam)

<a id="integrations"></a>
## 統合
*Integration management systems or products that ease integration development.*
* [Apideck](https://www.apideck.com) - 統合マーケットプレイスビルダー、第三者サービスとの1APIで迅速な開発を可能に。
* [Metorial](https://metorial.com) - AIアグエントを600以上の統合に1つのインターフェースで接続。OAuth、スケーリング、モニタリングが含まれる。
* [Nango](https://www.nango.dev) - 250以上のAPIを備えた数百の事前構築済み製品統合。コードでカスタマイズ可能。 [![Nango](https://img.shields.io/github/stars/nangoHQ/nango?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/NangoHQ/nango)
* [Panora](https://panora.dev) - SaaS製品に顧客向け統合を簡単に追加できる柔軟なAPI。 [![Panora](https://img.shields.io/github/stars/panoratech/panora?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/panoratech/panora)
* [Revert](https://revert.dev) - B2B製品統合を構築するためのオープンソース統合API。 [![Revert](https://img.shields.io/github/stars/revertinc/revert?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/revertinc/revert)
* [Sequin](https://sequin.io/) - SQLを使用して第三者サービスとインターフェースを接続。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Vessel](https://www.vessel.dev/) - GTMツール向けの開発者中心のネイティブ統合プラットフォーム。
* [YepCode](https://yepcode.io/) - 最も良い開発体験を備えたサーバーレス関数の構築と実行。

<a id="localization"></a>
## ローカライゼーション
*Translating your product (also denoted i18n).*
* [Lingo.dev](https://lingo.dev/) - AIによるローカリゼーションインフラ。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Localazy](https://localazy.com/) - 開発者向けのアプリケーション翻訳。
* [Locize](https://locize.com) - i18nextの開発者が開発した翻訳管理システム。プロダクションに投入する前に開発・ステージ環境でライターと協働。
* [Tolgee](https://tolgee.io) - 開発者と翻訳者にとって親しみやすいウェブベースのローカリゼーションプラットフォーム。

<a id="mail"></a>
## メール
*Sending emails as a service.*
* [Anymail finder](https://anymailfinder.com) - メールAPIの確認と検索。
* [FormSpree](https://formspree.io/) - メールでフォームの提出を受け取る。
* [Heybounce](https://www.heybounce.io/) - メール認証API。
* [Hunter.io](https://hunter.io/) - メールリードおよび検証API。
* [Imitate Email](https://imitate.email) - 端末から端末までメールテストツール。
* [Lob](https://www.lob.com/) - メールおよび住所認証。
* [Loops](https://loops.so/) - コンタクトプロパティの管理、イベントの送信およびトランザクショナルメールの送信に必要なREST API。[![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Mailgun](https://www.mailgun.com/) - メールの送信、トラッキング、受信。
* [Resend](https://resend.com/) - トランザクショナルメールの構築、テスト、配信に必要なメールAPI。[![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Sendgrid](https://sendgrid.com/) - メールAPI。
* [Zyntra](https://zyntra.app/) – 自動化および品質保証用にAPIおよびUIアクセス可能な無制限のメールインボックス。

<a id="media"></a>
## メディア
*Media APIs (optimization, CDN).*
* [APITemplate.io](https://apitemplate.io/) - 再利用可能なテンプレートから画像およびPDFを生成するAPI。
* [Bytescale](https://bytescale.com) - ファイルのストレージおよび処理に必要なAPI。
* [Cloudinary](https://cloudinary.com/) - 画像および動画の最適化、作成、管理、配信。
* [Dyte](https://dyte.io) - 製品にパワフルなライブ体験を構築するための一括Video SDK。
* [Flatfile](https://flatfile.com/) - ファイルからデータをプログラム的にインポートし、API対応にします。[![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [ImageKit](https://imagekit.io/) - 画像の最適化、変換、配信を自動化。
* [imgix](https://www.imgix.com/) - 画像の変換、最適化、キャッシュ。
* [Mux](https://mux.com/) - 動画のアップロード、管理、ストリーミングに必要なAPI。[![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Pintura](https://pqina.nl/pintura) - 完全にカスタマイズ可能なJavaScript画像編集SDK。

<a id="messaging"></a>
## メッセージング
*Messaging APIs - SMS, notifications, chats, and VoIP.*
* [Ably](https://ably.com) - プブ/サブ、リアルタイムメッセージング、通知、チャット、マルチプレイヤー、データ同期。
* [Applozic](https://www.applozic.com/) - チャットSDK、リアルタイムメッセージング。
* [Knock](https://knock.app) - 通知サービス。[![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [MagicBell](https://www.magicbell.com/) - APIおよびUIコンポーネントを備えたリアルタイム通知システム。
* [Novu](https://novu.co/) - オープンソースの通知（メール、SMS、ダイレクト、プッシュ）管理。[![Novu](https://img.shields.io/github/stars/novuhq/novu?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/novuhq/novu) [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2025#02)
* [Pingram](https://www.pingram.io/) - メール、SMS、音声、WhatsAppに対応するメッセージングAPI。管理されたA2P 10DLCを備える。
* [Stream](https://getstream.io/) - フィードとチャットをサービスとして提供
* [Twilio](https://www.twilio.com/) - SMS、プッシュ通知、VoIP API
* [Vonage](https://www.vonage.com) - ビデオ、SMS、チャット、音声 API

<a id="misc"></a>
## その他
*Different products that probably don't have a category.*
* [Actyx](https://www.actyx.com/) - 開発者中心のファクトリ構築
* [daily.dev](https://daily.dev/) - 1000以上の中のテックソースから集約されたパーソナライズされた開発者ニュースフィードとコミュニティディスカッション。 [![daily.dev](https://img.shields.io/github/stars/dailydotdev/daily?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/dailydotdev/daily)
* [Docusign](https://developers.docusign.com/) - eSignatureおよびインテリジェントな契約管理API
* [Fernand](https://getfernand.com/) - インディーハッカーおよび小型SaaSチーム向けAPI中心の顧客サポート
* [Frigade](https://frigade.com) - アプリの特性を学習し、ユーザーの代わりに行動を起こす（モーダルを開く、ナビゲート、ワークフローを進める）インプロダクトAIアシスタントを配信するSDK
* [Interval](https://interval.com/) - あなたの製品向けの内部ツールやスクリプトを構築するためのSDK
* [ngrok](https://ngrok.com/) - 内部サーバー（NAT/ファイアウォールの後）に公開URLを生成
* [Nylas](https://www.nylas.com/) - 生産性ワークフロー（メール、カレンダー、連絡先など）向けAPI — プレードのようなもの
* [Plain](https://plain.com) - 顧客サービス向けAPI中心のプラットフォーム（サポート、フィードバック、評価ウィジェットなど）
* [Propexo](https://www.propexo.com/) - 不動産管理システムとの統合用の統合API
* [SignatureAPI](https://signatureapi.com) - API中心の電子署名
* [Trophy](https://trophy.so) - ゲーム化された製品体験向けAPI

<a id="monitoring"></a>
## モニタリング
*Monitoring your production application.*
* [Airbrake](https://airbrake.io) - 生産環境におけるエラーモニタリング
* [Anteon](https://getanteon.com/) - Kubernetesのモニタリングおよびパフォーマンステスト — CLI、セルフホスト、クラウドで利用可能。 [![Anteon](https://img.shields.io/github/stars/getanteon/anteon?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/getanteon/anteon)
* [Better Stack](https://betterstack.com/) - 稼働状態モニタリング、インシデント管理、ステータスページ
* [Future AGI](https://futureagi.com/) - トレース、評価、シミュレーション、データセット、ゲートウェイ、ガードレールを統合したオープンソース・セルフホスト可能なエンドツーエンドLLMOpsプラットフォーム。 [![Future AGI](https://img.shields.io/github/stars/future-agi/future-agi?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/future-agi/future-agi)
* [Helicone AI](https://www.helicone.ai/) - 生産環境におけるLLMアプリのLLM可視化およびモニタリング。 [![Helicone AI](https://img.shields.io/github/stars/helicone/helicone?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/Helicone/helicone)
* [Highlight.io](https://www.highlight.io/) - フルスタックモニタリングプラットフォーム。 [![Highlight.io](https://img.shields.io/github/stars/highlight/highlight?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/highlight/highlight) [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Instatus](https://instatus.com) - アップタイムモニタリング、インシデント対応、ステータスページの提供。
* [KeenIO](https://keen.io/) - イベントストリーミングプラットフォーム。
* [Laminar](https://www.lmnr.ai/) - LLM製品のトレース、評価、ラベリングに用いるオープンソースプラットフォーム。 [![lmnr](https://img.shields.io/github/stars/lmnr-ai/lmnr?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/lmnr-ai/lmnr) [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Langfuse](https://langfuse.com/) - LLMアプリケーションの協働デバッグ、分析、イテレーションを支援するオープンソースLLM可視性プラットフォーム。 [![Langfuse](https://img.shields.io/github/stars/langfuse/langfuse?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/langfuse/langfuse) [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [LogRocket](https://logrocket.com/) - ユーザーが経験したバグを再現。
* [Maxim AI](https://www.getmaxim.ai) - AIエージェントの信頼性を高め、5倍速くデプロイできるエンドツーエンド評価および可視性プラットフォーム。
* [Middleware](https://middleware.io/) - APM、分散トレース、ログ、インフラメトリクスを一元的に提供するフルスタック可視性プラットフォーム。
* [Oh Dear](https://ohdear.app) - アップタイム、パフォーマンス、SSL証明書、破損リンク、DNSのモニタリング。
* [Pinecone](https://www.pinecone.io/) - 正確で安全かつスケーラブルなAIアプリの開発に用いるAIインフラ。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Opik](https://www.comet.com/site/products/opik/) - 開発およびプロダクションライフサイクル全体でLLMアプリケーションを評価、テスト、デプロイ。 [![Comet](https://img.shields.io/github/stars/comet-ml/opik?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/comet-ml/opik)
* [Pagerly](https://pagerly.io) - SlackでOncall、チケット、インシデントの管理。
* [Quivr](https://quivr.com/) - AIエージェントのデプロイと使用に用いるオープンソースRAGフレームワーク。 [![quivr](https://img.shields.io/github/stars/QuivrHQ/quivr?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/QuivrHQ/quivr) [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Respan](https://respan.ai/) - プロダクション環境におけるエージェントワークフローをトレースし、カスタムグレーダで出力品質を評価し、コード変更なしでプロンプトをイテレーションし、250以上のモデルを1つのゲートウェイでルートするフルスタックAIエンジニアリングプラットフォーム。以前はKeywords AI。
* [Rollbar](https://rollbar.com/) - 生産環境におけるエラーを報告。
* [Sentry](https://sentry.io/) - アプリケーションのバグおよびパフォーマンスモニタリング。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)

<a id="natural-language-processing"></a>
## 自然言語処理
*Interactions with natural language.*
* [DialogFlow](https://cloud.google.com/dialogflow) - Googleによるボイス／テキストチャットボットフレームワーク。

<a id="orchestration"></a>
## オーケストレーション
*Orchestration tools for (micro) services.*
* [AWS Step Functions](https://aws.amazon.com/step-functions/) - 分散アプリケーションの構築やプロセスの自動化を支援する可視ワークフローサービス。
* [Camunda](https://camunda.com/) - スケーラブルでオンデマンドのプロセス自動化を提供するワークフローエンジン。

<a id="payments--pricing"></a>
## 決済と価格設定
*Handling payments, credit card processing, and invoices.*
* [Braintree](https://www.braintreepayments.com/) - PaypalのAPIファースト型の決済サービス。
* [Increase](https://increase.com/) - ベアメタルバンキングAPI
* [LemonSqueezy](https://www.lemonsqueezy.com/) - SaaS決済 - 複数の国をカバーし、VAT税の対応も行う
* [OpenMeter](https://openmeter.io/) - オープンソースの使用量計測による請求およびチャージバック対応。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Paddle](https://paddle.com/) - SaaS向け収益配分プラットフォーム（現在のStripeとは異なり、広範な地理的サポートを提供）
* [Plaid](https://plaid.com/) - ACH（銀行送金）の受け入れ・送信、および銀行情報の取得
* [Stigg](https://www.stigg.io) - API中心の価格プラン
* [Stripe Payments](https://stripe.com/payments) - APIを活用し、グローバルに決済を受け入れ、資金を移動

<a id="repo"></a>
## リポジトリ
*Repository and artifacts management.*
* [Artifactory](https://jfrog.com/artifactory/) - 独自のパッケージリポジトリの作成
* [Buildstash](https://buildstash.com/) - アプリ、ゲーム、埋め込みソフトウェア向けのバイナリアーティファクトおよびリリース管理
* [Cloudsmith](https://cloudsmith.com/) - クラウドネイティブなプライベートパッケージ管理

<a id="reports-generation"></a>
## レポート生成
*Generating reports, mainly PDFs.*
* [Carbone](https://carbone.io/) - JSONをPDF、DOCX、XLSX、PPTX、ODS...へ変換するAPI
* [DocRaptor](https://docraptor.com) - paged media用に特化したHTMLからPDFへ変換するAPI（[Prince](https://www.princexml.com/)PDFライブラリを使用）
* [Export SDK](https://exportsdk.com) - PDF生成APIに可視テンプレートエディタを備える
* [Image-Charts](https://www.image-charts.com/) - レポート、PDFなどにチャートを画像として変換するAPI
* [PDFBlade](https://pdfblade.com/) - HTMLからPDFへの変換API（使用量に基づく価格設定）
* [PDFShift](https://pdfshift.io/) - HTML/URLからPDFへの変換API

<a id="scraping"></a>
## スクレイピング
*Fetching data from websites not via an intended API.*
* [Apify](https://apify.com/) - ウェブサイトをAPIに変換
* [browserless](https://browserless.io) - ブラウザ自動化をクラウドにデプロイ。 [![browserless](https://img.shields.io/github/stars/browserless/browserless?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/browserless/browserless)
* [Corsfix](https://corsfix.com) - CORSプロキシで任意のウェブリソースを取得し、CORSエラーを回避
* [Crawlbase](https://proxycrawl.com/) - プロキシを用いて、スクレイピングが難しいウェブサイトをスクレイピング
* [Geonode](https://geonode.com) - 回転型の住宅用およびデータセンター用プロキシ、REST APIによるアクセス。
* [Proxy Sentinel](https://www.proxysentinel.io) - 自前で管理できるプロキシローテーター。
* [ScrapingANT](https://scrapingant.com/) - ヘッドレスChromeでスクレイピング。
* [ScrapingBee](https://www.scrapingbee.com/) - ヘッドレスブラウザとプロキシを用いて、ブロックされないようスクレイピング。
* [SearchApi](https://www.searchapi.io/) - リアルタイムGoogleSERPAPI。
* [SerpApi](https://serpapi.com/) - リアルタイム検索エンジンスクレイピングAPI。
* [WebScrapingHQ](https://www.webscrapinghq.com/) - ウェブスクレイピングAPIと完全に管理されたサービス。
* [ZenRows](https://www.zenrows.com/) - 組み込みプロキシと回転IPを備えたウェブスクレイピングAPIで検出を回避。

<a id="search"></a>
## 検索
*Index and search your content as a service API.*
* [Agentset](https://agentset.ai/) - 組み込みアグエント推論、ハイブリッド検索、マルチモーダル対応を備えたオープンソースでプロダクション対応のRAGプラットフォーム。 [![Agentset](https://img.shields.io/github/stars/agentset-ai/agentset?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/agentset-ai/agentset)
* [Algolia](https://www.algolia.com/) - 検索サービスと完全な検索APIセット。
* [Cognee](https://www.cognee.ai/) - AIメモリ層によるアグエントサポート。知識グラフ＋ベクトル検索による文脈取得と推論。 [![Cognee](https://img.shields.io/github/stars/topoteretes/cognee?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/topoteretes/cognee)
* [Meilisearch](https://www.meilisearch.com/) - オープンソースで高速かつ関連性の高い検索エンジン。 [![Meilisearch](https://img.shields.io/github/stars/meilisearch/meilisearch?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/meilisearch/meilisearch) [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Swiftype](https://swiftype.com/) - 検索サービス（クロールとReact対応）。
* [Typesense Cloud](https://cloud.typesense.org/) - オープンソースかつホスティングされた検索サービス。 [![Typesense](https://img.shields.io/github/stars/typesense/typesense?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/typesense/typesense)
* [Websolr](https://www.websolr.com/) - ソルのオープンソースかつホスティングされた検索。

<a id="security"></a>
## セキュリティ
*Products that secure your codebase.*
* [Bearer](https://www.bearer.com/) - JavaScriptおよびRubyスタック向けの静的アプリケーションセキュリティテスト（SAST）ツール。
* [GitGuardian](https://www.gitguardian.com/) - リアルタイムGitHubアクティビティスキャナー。
* [Infisical](https://infisical.com) - オープンソースかつ端末から端末まで暗号化されたシークレットマネージャー。 [![Infisical](https://img.shields.io/github/stars/infisical/infisical?style=flat-square&logo=github&labelColor=%230D1117&color=%23161B22)](https://github.com/infisical/infisical)
* [Pixee](https://www.pixee.ai/) - 自動脆弱性修正。脆弱性を修正し、コードを強化。
* [Snyk](https://snyk.io/) - コード、依存関係、コンテナ、インフラコード向けの脆弱性スキャナー。
* [Socket](https://socket.dev/) - オープンソースサプライチェーン攻撃の検出とブロック


<a id="shipping"></a>
## 配送
*Creating and handling the shipment of goods.*
* [EasyPost](https://www.easypost.com/) - エコノミー向けAPIの提供

<a id="testing"></a>
## テスト
*Testing tools.*
* [Applitools](https://applitools.com/) - 自動視覚テスト
* [Beeceptor](https://beeceptor.com/) - ノーコード、クラウドベースのプラットフォーム。複数プロトコル（REST、SOAP、gRPCおよびGraphQL）のAPIをモックおよびデバッグできる。ルールベースの論理、CRUDおよび状態付きモック、プロキシ、CORS管理を提供し、より迅速な統合とテストを実現。
* [BitDive](https://bitdive.io/) - Java/Kotlin向けのゼロコード統合テスト。実行時アプリケーションの動作からテストを自動生成。
* [Blackfire.io](https://blackfire.io/) - パフォーマンステスト
* [Chromatic](https://www.chromatic.com/) - Storybook向けの視覚UIテスト
* [CodSpeed](https://codspeed.io) - CI環境における継続的なパフォーマンステスト。 [![featured on launchweek.dev](https://img.shields.io/badge/featured-0D1117.svg?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev)
* [Coval](https://coval.dev/) - AIエージェントのシミュレーションおよび評価。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Fiberplane](https://fiberplane.com/) - Hono APIのテストおよびデバッグ。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Loadmill](https://www.loadmill.com/) - ユーザー行動からテストを生成。
* [Octomind](https://www.octomind.dev/) -  AIを支援したテストケース発見により、自動生成・実行・維持されるPlaywright UIテスト。
* [Percy](https://percy.io/) - 継続的な視覚テスト
* [Sherlo](https://sherlo.io) - React Native向けの視覚回帰テスト（Storybook統合あり）
* [Synth](https://usesynth.ai) - 自動AIエージェント最適化。 [![LW24 participant](https://img.shields.io/badge/featured-LW24-8957E5.svg?style=flat-square&labelColor=0D1117&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjI0MCIgeT0iMzAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIi8+IDxyZWN0IHg9IjMwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwMCIgZmlsbD0id2hpdGUiLz4gPHJlY3QgeD0iMTgwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAwIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4=)](https://launchweek.dev/lw/2024/mega#participants)
* [Testim](https://www.testim.io/) - フロントエンドテスト

---

<a id="contributing"></a>
## コントリビューション

こちらをご覧ください： [CONTRIBUTING.md](https://github.com/agamm/awesome-developer-first/blob/main/CONTRIBUTING.md)
