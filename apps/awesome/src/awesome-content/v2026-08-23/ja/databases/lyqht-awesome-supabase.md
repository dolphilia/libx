---
title: "lyqht/awesome-supabase"
description: "lyqht/awesome-supabase の正規スナップショット"
licenseSource: "github-lyqht-awesome-supabase-readme-md"
---

# Awesome Supabase [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

[Supabase](https://supabase.com/) は、PostgreSQL データベース、認証、即時 API、Edge Functions、Realtime サブスクリプション、Storage を提供する、Firebase の優れたオープンソース代替です。

このリストは、製品とそのコミュニティの素晴らしい点を取り上げます！👁⚡️👁

このリストを**充実させる**には、[CONTRIBUTING.md](https://github.com/lyqht/awesome-supabase/blob/11d47fdfe4b7c639fc84543d092db45530d4fd86/CONTRIBUTING.md)を参照してください。

## 目次

- [公式スターター](#official-starters)
- [コミュニティ製スターター](#community-starters)
- [データ移行ツール](#data-migration-tools)
- [Supabase DX ツール](#supabase-dx-tools)
- [コミュニティツール](#community-tools)
- [オンラインコース](#online-courses)
- [動画、ポッドキャスト、ライブ配信、トーク](#videos-podcasts-livestreams-talks)
- [統合ガイド](#integration-guides)
- [その他の興味深い記事](#other-interesting-articles)

## 公式スターター

以下のスターターは `@supabase/supabase-js` v2 ライブラリをサポートします。

- [Angular](https://github.com/supabase/supabase/tree/master/examples/user-management/angular-user-management) - ![auth](https://img.shields.io/badge/-auth-informational)
- [Expo](https://github.com/supabase/supabase/tree/master/examples/user-management/expo-user-management) - ![auth](https://img.shields.io/badge/-auth-informational)
- [Flutter](https://github.com/supabase/supabase/tree/master/examples/user-management/flutter-user-management) - ![auth](https://img.shields.io/badge/-auth-informational)
- [Next.js (TS)](https://github.com/supabase/supabase/tree/master/examples/user-management/nextjs-user-management) - ![auth](https://img.shields.io/badge/-auth-informational)
- [Nuxt](https://github.com/supabase/supabase/tree/master/examples/user-management/nuxtjs-user-management) - ![auth](https://img.shields.io/badge/-auth-informational)
- [Nuxt3](https://github.com/supabase/supabase/tree/master/examples/user-management/nuxt3-user-management) - ![auth](https://img.shields.io/badge/-auth-informational)
- [React](https://github.com/supabase/supabase/tree/master/examples/user-management/react-user-management) - ![auth](https://img.shields.io/badge/-auth-informational)
- [Solid](https://github.com/supabase/supabase/tree/master/examples/user-management/solid-user-management) - ![auth](https://img.shields.io/badge/-auth-informational)
- [Svelte](https://github.com/supabase/supabase/tree/master/examples/user-management/svelte-user-management) - ![auth](https://img.shields.io/badge/-auth-informational)
- [Svelte Kit](https://github.com/supabase/supabase/tree/master/examples/user-management/sveltekit-user-management) - ![auth](https://img.shields.io/badge/-auth-informational)
- [Vue 3](https://github.com/supabase/supabase/tree/master/examples/user-management/vue3-user-management) - ![auth](https://img.shields.io/badge/-auth-informational)
- [Next.js, Slack Clone](https://github.com/supabase/supabase/tree/master/examples/slack-clone/nextjs-slack-clone) - ![realtime](https://img.shields.io/badge/-realtime-orange)
- [Svelte, Todo list](https://github.com/supabase/supabase/tree/master/examples/todo-list/sveltejs-todo-list) - ![database](https://img.shields.io/badge/-database-9cf)
- [React Native, Stripe Payments](https://github.com/supabase-community/expo-stripe-payments-with-supabase-functions) - ![edge functions](https://img.shields.io/badge/-edge%20functions-darkgreen)
- [Flutter, Stripe Payments](https://github.com/supabase-community/flutter-stripe-payments-with-supabase-functions) - ![edge functions](https://img.shields.io/badge/-edge%20functions-darkgreen)

## コミュニティ製スターター

- [Vuepabase](https://github.com/JMaylor/vuepabase) - Pinia、Vue-router 4、Tailwind CSS、Vitest、Cypress などを備えた Vue3 Supabase スターター。
- [Supastarter](https://supastarter.dev) - Next.js、認証、メールテンプレート、ランディングページ、ダッシュボード、ブログを備えた Supabase スターター。
- [RedwoodJS Supabase Quickstart](https://github.com/redwoodjs/redwoodjs-supabase-quickstart) - RedwoodJS を使う Supabase Quickstart のサンプルアプリ。
- [Basejump](https://usebasejump.com) - チーム、個人アカウント、招待、Tailwind、i18n を備えたオープンソース Next.js スターター。スキーマは完全にテスト済み。
- [Supanext](https://www.supanext.com/) - AI アプリの例、認証、課金、設定、ランディングページ、ブログなどを含む Next.js 対応 Supabase スターター。
- [SupaSasS Lite](https://github.com/Razikus/supabase-nextjs-template) - オープンソースの Next.js SasS テンプレート（2FA とサンプルアプリ付き）。
- [SupaSocial](https://github.com/koji0701/supabase-react-social-media-starter/tree/main) - 認証、友達リクエスト、プロフィール画像、サンプルアプリ（プロフィール、友達、サインイン、リーダーボードなど）を備えた React ソーシャルメディアスターター。
- [Extro](https://github.com/turbostarter/extro) - オープンソースのブラウザー拡張機能スターターキット。

## データ移行ツール

- [Supabase Schema](https://supabase-schema.vercel.app/) - この便利なツールで SQL スクリプトとデータベース図を生成。機密情報は不要で、プロジェクト URL と匿名キーだけを使用します。
- [Heroku to Supabase Importer](https://migrate.supabase.com/) - Heroku はまもなく無料枠のサポートを終了するため、プロジェクトで引き続き利用したい PostgreSQL DB がある場合、Supabase への移行は良い選択です。このツールで簡単に移行できます。この移行プロセスには動画付きの[ガイド](https://supabase.com/docs/guides/migrations/heroku)もあります。
- [Supabase DB to Google Sheets](https://github.com/jadynekena/supabase-googlesheet) - Supabase データを Google Sheets へ取り込むツール。
- [Retool REST API data generator](https://retool.com/api-generator) - PostgresDB に挿入する構造化データを生成するツール。
- [Lovable Cloud to Supabase Exporter](https://github.com/dreamlit-ai/lovable-cloud-to-supabase-exporter) - パスワードリセットや手作業の CSV 処理なしに、Lovable Cloud のテーブル、ユーザー、ストレージを自分の Supabase バックエンドへ移行。

## Supabase DX ツール

- [Supabase CLI](https://supabase.com/docs/reference/cli) - Supabase CLI は、ローカルでのプロジェクト開発と Supabase Platform へのデプロイのためのツールを提供。
- [Supabase SQL](https://database.dev/) - よくある用途の SQL スクリプトを、コピー＆ペースト向けに容易に検索。
- [Supabase Plus](https://github.com/dsplce-co/supabase-plus) - 通常の Supabase CLI の可能性を超えて Supabase プロジェクトを管理するための追加ツールセット。

## コミュニティツール

- [MadeWithSupabase](https://www.madewithsupabase.com/) - Supabase で作られたプロジェクトを探索するアプリ。使われている Supabase 機能やユーザー付与のタグ、特定の暦月に投稿されたプロジェクトから検索できます。
- [Octokit-lite](https://github.com/lyqht/Octokit-lite) - 複数リポジトリに対する一般的な GitHub 操作を効率よく実行するアプリ。Supabase Auth と DB を使用。
- [Generate Supabase Database Types GitHub Action](https://github.com/lyqht/generate-supabase-db-types-github-action) - Supabase データベースに基づく型を生成する GitHub Action。
- [Supabase Cache Helpers](https://github.com/psteinroe/supabase-cache-helpers) - Supabase を扱うためのフレームワーク固有 Cache ユーティリティ集。
- [PostgreSQL WebAssembly by Snaplet and Supabase](https://supabase.com/blog/postgres-wasm) - ブラウザーで PostgreSQL を実行するツール。
- [Bemi for Supabase JS](https://github.com/BemiHQ/bemi-supabase-js) - 自動データ変更追跡のためのオープンソースプラットフォーム。
- [Supabase automated self host](https://github.com/singh-inder/supabase-automated-self-host) - Caddy と Authelia を使って Supabase をセルフホスト。スクリプトを 1 つ実行するだけです。
- [Edge Worker](https://pgflow.dev) - Supabase Edge Functions（Background Tasks）と Supabase Queues 上で動作するオープンソースのサーバーレスタスクキューワーカー。キュー消費を簡単にし、並行性制御、再試行、オブザーバビリティなどの機能を追加します。
- [Supabase DataFlows SMS Hook](https://github.com/dataflows-au/supabase-sms-hook) - DataFlows SMS API で電話 OTP 検証を送信。Supabase Auth 向けの Twilio のオーストラリア代替。
- [Pharos AI](https://github.com/Juliusolsson05/pharos-ai) - インタラクティブマップ、OSINT フィード、AI を活用した要約を備える、地政学的紛争追跡向けオープンソースのリアルタイムインテリジェンスダッシュボード。

## オンラインコース

- [Build a Full-Stack App with Next.js, Supabase & Prisma](https://themodern.dev/courses/build-a-fullstack-app-with-nextjs-supabase-and-prisma-322389284337222224) - React / Next.js、Prisma、Supabase という優れたモダン Web 技術を使い、フルスタックアプリケーションをゼロから構築する方法を学びます。[Grégory D'Angelo](https://twitter.com/gdangel0)による無料コース。
- [Cache Supabase data at the Edge with Cloudflare Workers and KV Storage](https://egghead.io/courses/cache-supabase-data-at-the-edge-with-cloudflare-workers-and-kv-storage-883c7959) - Cloudflare workers を通じ、KV Storage を使って Supabase をクエリし、キャッシュ CRUD 操作を実行する方法を開発者へ教える無料コース。
  [Cloudflare x Supabase Developer Meetup](https://t.co/sqmDQahsA4)で紹介。 [Jon Meyers](https://twitter.com/jonmeyers_io)による無料コース。
- [Vue JS Essentials: A Beginners Series on Pinia, Vitest, and Supabase](https://www.youtube.com/watch?v=W-D6h7Jne18) - フロントエンドテストと本番品質のプロジェクトを模倣するモックを含む、詳細なチュートリアルの優れたシリーズ。

## 動画、ポッドキャスト、ライブ配信、トーク

- [Is Supabase Legit? Firebase Alternative Breakdown](https://youtu.be/WiwfiVdfRIc) - Supabase を扱う Fireship.io の動画。
- [Supabase Happy Hours](https://www.youtube.com/watch?v=IJoc6dKy03c&list=PL5S4mPUpp4Ouyw8bMupHgxC3VL9BLZzvV) - Supabase コアチームが主催する継続的な代表ライブ配信シリーズ。Supabase API を使ってサイドプロジェクトを作り、コミュニティと交流します。コアメンバーの[Thor Schaeff](https://thorweb.dev/)、[Jon Meyers](https://jonmeyers.io/)、Alaister Young、[Tyler Shukert](https://dshukertjr.dev/)が担当。
- [Supabase Developer Stories](https://www.youtube.com/watch?v=QAm1x7KaLq4&list=PL5S4mPUpp4OuzQN-a_FY3OZQuYo4NmXvb) - Supabase を利用する SaaS の創業者・共同創業者が製品を紹介する継続的なシリーズ。
- [CityJS 2022 Talk on Building Billy with Supabase](https://www.youtube.com/watch?v=UiANV3uqT04&t=6841s) - React Native の支出トラッカーのサイドプロジェクトが Supabase でどのように構築されるかを扱う、SupaSquad メンバー[Estee Tey](https://esteetey.dev/)のトーク。
- [Build An Image Gallery With Supabase Storage and React](https://www.youtube.com/watch?v=8tfdY0Sf2rA) - Supabase を使った画像のアップロードと配信のチュートリアル。
- [PMF is one pivot away with Ant Wilson from Supabase](https://podcast.bitreach.io/episodes/product-market-fit-is-one-pivot-away-with-ant-wilson-founder-of-supabase) - Supabase の Product Market Fit（PMF）前後の段階における経験を語ります。

## 統合ガイド

- [Firebase to Supabase](https://github.com/supabase-community/firebase-to-supabase) - Auth、Firestore、Storage、Functions など Firebase の各コンポーネントから Supabase への移行ガイド集。
- [How to Manage Your Supabase Database with Directus](https://directus.io/guides/directus-plus-supabase/) - Directus Studio はノーコードアプリを通じてデータベース内容を閲覧、管理、可視化する手段を提供。このガイドは Supabase と Directus の設定方法を示します。
- [Supabase admin panel tutorial with Retool](https://retool.com/blog/supabase-tutorial-admin-panel/) - Retool はチームが内部ツールを素早く構築するのを支援。Retool と Supabase で管理パネルを設定する方法を学びます。
- [Set up a monorepo with Supabase and Turborepo](https://philipp.steinroetter.com/posts/supabase-turborepo) - 3 つの Next.js アプリ、Preact ウィジェット、React Native アプリ、2 つの Fastify サーバーを単一リポジトリから提供し、同じ Supabase インスタンスと通信する、turborepo 駆動の pnpm モノレポへコードベースを移行する方法を解説。
- [How to Implement RBAC (Role-Based Access Control) in Supabase](https://www.permit.io/blog/how-to-implement-rbac-in-supabase) - Permit.io を使って Supabase アプリケーションへロールベースアクセス制御（RBAC）認可を実装する方法を学びます。
- [Integrate Clerk with Supabase](https://clerk.com/docs/guides/development/integrations/databases/supabase) - RLS ポリシーを含め、Supabase の認証プロバイダーとして Clerk を使う公式ガイド。

## その他の興味深い記事

- [How to market to developers on Twitter: Learnings from 4 months of Supabase feed](https://www.developermarkepear.com/blog/developer-marketing-on-social-media-twitter-supabase) - 特に Twitter における Supabase のグロースマーケティング戦略を分析。
- [How Fleeting Notes Migrated 1000+ Users from Firebase to Supabase (Stripe, Firebase, Supabase)](https://fleetingnotes.app/posts/migrating-from-firebase-to-supabase/) - ノートアプリ Fleeting Notes が、Stripe 統合とそのデータベースの観点から Firebase から Supabase へ移行した過程を説明。
- [Ultimate guide to testing on Supabase using pgTAP](https://usebasejump.com/blog/testing-on-supabase-with-pgtap) - Supabase の RLS ポリシーとリクエストをテストする方法。
- [Migrating from Firebase to Supabase: Lessons Learned](https://emergence-engineering.com/blog/firestore-supabase-migration) - BaaS のさまざまな側面、Realtime サブスクリプションとデータ型の違いを踏まえた、移行ワークフローの詳細な解説。
- [Supabase vs Firebase: Choosing the Right Backend for Your Project](https://www.jakeprins.com/blog/supabase-vs-firebase-2024) - Supabase と Firebase の詳細比較。両プラットフォームの主な違いと、Supabase を選ぶ利点を確認できます。
