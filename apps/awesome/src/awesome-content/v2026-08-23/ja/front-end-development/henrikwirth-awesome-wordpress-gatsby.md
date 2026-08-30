---
title: "henrikwirth/awesome-wordpress-gatsby"
description: "henrikwirth/awesome-wordpress-gatsby の正規スナップショット"
licenseSource: "github-henrikwirth-awesome-wordpress-gatsby-readme-md"
---

<div align="center">
  <br /><br />
  <a href="https://awesome.re"><img src="https://awesome.re/badge-flat.svg" /></a>
  <br /><br /><br />
  <a href="https://wordpress.org/"><img width="150" height="150" align="center" src="media/wordpress-logo.svg" alt="WordPress"></a>
      <a href="https://www.gatsbyjs.org/"><img width="150" height="150" align="center" src="media/gatsby-logo.svg" alt="Gatsby"></a>
  <br /><br />
  <p>
    <b>
      静的サイトジェネレーター（SSG）としてGatsbyを使うヘッドレスCMSとしてのWordPressに関するリソースのキュレーションリスト。
    </b>
  </p>
  <br />
</div>

**ヘッドレスCMS**は、バックエンドのみのコンテンツ管理システム（CMS）です。その目的は、コンテンツを提供し、API（例: RESTまたはGraphQL）経由でアクセス可能にすることです。

**静的サイトジェネレーター（SSG）**は、静的Webサイト（HTML/CSS/JS）の生成を支援するフレームワークまたはセットアップです。データソースはローカルファイル（例: テキストファイルまたはMarkdown）からAPI（例: REST、GraphQL）まで、何でも構いません。

<br />

**なぜGatsbyとWordPressなのか？**

WordPressは、**世界で最も利用されているCMSの一つ**であり、多くの人がすでにその使い方を知っています。PHPベースのテンプレートを使う典型的なフロントエンドのアプローチは、パフォーマンスが重要な環境ではますます問題になっています。JavaScriptを通じた通常のAPI呼び出しでWordPressをヘッドレスCMSとして使う方法はすでにありますが、サーバーへのリクエストとレスポンスに依存したレンダリングが必要という欠点もあります。これにより読み込み時間が増えます。一方**Gatsbyは、コンパイル時にサイト全体を事前レンダリング**するため、ユーザーは**最初のリクエストで完全に準備済みの静的サイトを受け取れ**、パフォーマンスにおける**最良のアプローチの一つ**になります。もう一つの大きな利点は**セキュリティ**です。WordPressインスタンスはローカルを含むどこにあってもよく、ユーザーへその一部を公開する必要はありません。**そのため静的Gatsbyサイトはハッキングされません。**長所と短所に関する追加の論拠は、下記リソースを参照してください。

## 目次

- [コミュニティ](#communities)
- [記事と講演](#articles-and-talks)
- [プラグイン](#plugins)
	- [WordPress](#wordpress)
	- [Gatsby](#gatsby)
- [無料チュートリアル／コース](#free-tutorials--courses)
	- [文書チュートリアル](#written-tutorials)
	- [動画チュートリアル](#video-tutorials)
- [有料チュートリアル／コース](#paid-tutorials--courses)
- [スターター](#starters)
- [テーマ](#themes)


## コミュニティ
何か助けが必要なら、活発なコミュニティがいくつかあります。

**WPGraphQL**
- [Slack Chat](https://wpgql-slack.herokuapp.com/)
- [Spectrum Chat](https://spectrum.chat/wpgraphql)
- [Twitter](https://twitter.com/wpgraphql)

**Gatsby**
- [Discord Chat](https://gatsby.dev/discord)
- [Reddit](https://www.reddit.com/r/gatsbyjs/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/gatsby)


## 記事と講演

技術スタック全般を詳しく説明する記事・講演のリスト。

- 2021.02: [Announcing Gatsby’s New WordPress Integration](https://www.gatsbyjs.com/blog/wordpress-integration)
- 2021.02: [Jason Bahl of WPGraphQL's role in the operating system for the web](https://www.youtube.com/watch?v=Me_A0HBYXx8)
- 2021.02: [Torque News Drop: Jason Bahl and WPGraphQL](https://www.youtube.com/watch?v=8SAdtU8HAwM)
- 2021.02: [Gatsby Launches New WordPress Integration, Expanding Support for Headless Architecture](https://wptavern.com/gatsby-launches-new-wordpress-integration-expanding-support-for-headless-architecture)
- 2020.11: [Announcing WPGraphQL v1.0](https://www.wpgraphql.com/2020/11/16/announcing-wpgraphql-v1/)
- 2020.07: [My Long Journey to a Decoupled WordPress Gatsby Site](https://css-tricks.com/my-long-journey-to-a-decoupled-wordpress-gatsby-site/)
- 2019.06: [Modern Web Development on the JAMstack
  ](https://www.netlify.com/oreilly-jamstack/) - NetlifyによるJAMStackでのモダンWeb開発に関する、O'REILLY発行のレポート。


## プラグイン

WordPressとGatsbyを連携させる有用なプラグインのリスト。アルファベット順。

### WordPress

#### 必須プラグイン

- [WPGraphQL](https://github.com/wp-graphql/wp-graphql) - [Documentation](https://docs.wpgraphql.com/) - WPGraphQLはGraphQLの力をWordPressサイトへもたらす。
- [WPGatsby](https://wordpress.org/plugins/wp-gatsby/) - このプラグインはWordPressサイトをGatsby向けに最適化されたソースとして構成する。

#### WPGraphQL拡張

- [WPGraphQL Cors](https://github.com/funkhaus/wp-graphql-cors) - @kidunot89と@byfunkhausによるこの無料プラグインは、GraphQLが受け入れるCORSヘッダーを設定することでWPGraphQLでの認証を「そのまま」動かせるとされる。すなわちWordPressの既定認証Cookieを受け入れられる。
- [Total Counts for WPGraphQL](https://github.com/builtbycactus/total-counts-for-wp-graphql) - @builtbycactusによるこの無料プラグインは、WPGraphQL Schemaのコネクションへ合計件数を公開する。
- [WPGraphQL Gutenberg](https://github.com/pristas-peter/wp-graphql-gutenberg) - GutenbergブロックをWPGraphQL APIへ公開する。
- [WPGraphQL JWT Authentication](https://github.com/wp-graphql/wp-graphql-jwt-authentication) - JWT（JSON Web Tokens）を使う認証を提供するため、WPGraphQLプラグインを拡張する。
- [WPGraphQL Lock](https://github.com/valu-digital/wp-graphql-lock) - 永続化GraphQLクエリーを実装することで、WPGraphQLのクエリーロックを可能にする。
- [WPGraphQL Meta](https://github.com/roborourke/wp-graphql-meta) - @robertorourkeによるこの無料プラグインは、WordPress register_meta API経由で登録したメタをWPGraphQLへ公開する。
- [WPGraphQL Meta Query](https://github.com/wp-graphql/wp-graphql-meta-query) - postObjectクエリー引数向けのMeta_QueryサポートをWPGraphQLプラグインへ追加する。
- [WPGraphQL Persisted Queries](https://github.com/Quartz/wp-graphql-persisted-queries) - @qzによるこの無料プラグインは、WPGraphQLでPersisted Queriesを使う機能を追加する。
- [WPGraphQL Offset Pagination](https://github.com/darylldoyle/wp-graphql-offset-pagination) - @enshrinedによるこの無料プラグインは、WPGraphQLに含まれる標準のカーソルベースページネーションとは対照的に、基本的なオフセットページネーションを追加する。
- [WPGraphQL Send Email](https://github.com/ashhitch/wp-graphql-send-mail) - @Ash_Hitchcockによるこの無料プラグインは、単純なmutationでメールを送信できるようにする。信頼済みオリジンへの送信制限機能も含む。

---
**WPGraphQLでほかのプラグインを使うための拡張**

- [QL Search](https://github.com/funkhaus/ql-search) - SearchWPをWPGraphQLに統合する拡張。
- [WPGraphQL Content Blocks](https://github.com/Quartz/wp-graphql-content-blocks) - QZ.comの人々によるこの無料プラグインは、より構造化したクエリー内容を得るため、WordPressの投稿・ページからHTMLコンテンツを「Blocks」（Gutenbergとは無関係）としてクエリーする方法を公開する。
- [WPGraphQL Enable All Post Types (DalkMania)](https://github.com/DalkMania/wp-graphql-cpt) - @DalkManiaによるこの無料プラグインは、登録されたすべての投稿タイプをWPGraphQL Schemaへ自動で追加する。
- [WPGraphQL Enable All Post Types (TylerBarnes)](https://github.com/TylerBarnes/wp-graphql-enable-all-post-types) - @tylbarによるこの無料プラグインは、登録されたすべての投稿タイプをWPGraphQL Schemaへ自動で追加する。
- [WPGraphQL Google Schema](https://github.com/izzygld/wp-graphql-google-schema) - @izzygld261によるこの無料プラグインは、Google SchemaサポートをWPGraphQLへ追加する。
- [WPGraphQL Gutenberg ACF](https://github.com/pristas-peter/wp-graphql-gutenberg-acf) - ACFブロックをGraphQL経由で公開する。
- [WPGraphQL MB (MetaBox)](https://github.com/DalkMania/wp-graphql-mb) - @DalkManiaによるこの無料プラグインは、[metabox.io](https://metabox.io/)を使って登録したすべてのメタボックスをWPGraphQL Schemaへ追加する。
- [WPGraphQL MetaBox Relationships](https://github.com/hsimah-services/wp-graphql-mb-relationships) - @hsimahによるこの無料プラグインは、（彼のwp-graphql-metaboxプラグインも使う場合に）[metabox.io](https://metabox.io/)のRelationshipsフィールドをWPGraphQLでサポートする。
- [WPGraphQL Polls](https://github.com/andrenoberto/wp-graphql-polls) - @andrenosouzaによるこの無料プラグインは、GraphQL QueriesとMutationsを通じてWP-Pollsプラグインのデータを操作できるようにする。
- [WPGraphQL Polylang Extension](https://github.com/valu-digital/wp-graphql-polylang) - Polylangプラグインの言語データでWPGraphQL schemaを拡張する。
- [WPGraphQL Tax Query](https://github.com/wp-graphql/wp-graphql-tax-query) - postObjectクエリー引数（WP_Query）向けのTax_QueryサポートをWPGraphQLプラグインへ追加する。
- [WPGraphQL WPML](https://github.com/rburgst/wp-graphql-wpml) - @rburgstによるこの無料プラグインは、WPMLプラグインの言語データでWPGraphQL schemaを拡張する。さらに、言語に関わらずすべての投稿を反復できるよう、WPML既定フィルターを無効化する。
- [WPGraphQL for Advanced Custom Fields](https://github.com/wp-graphql/wp-graphql-acf) - Advanced Custom FieldsをWPGraphQL Schemaへ公開する。
- [WPGraphQL for BuddyPress](https://github.com/wp-graphql/wp-graphql-buddypress) - @RenatoNascAlvesによるこの無料プラグインは、BuddyPressデータをWPGraphQLへ公開する。
- [WPGraphQL for Carbon Fields](https://github.com/matepaiva/wp-graphql-crb) - @matepaivaによるこの無料プラグインは、Carbon Fieldsを使って登録したフィールドをWPGraphQL Schemaへ公開する。
- [WPGraphQL for Custom Post Type UI](https://github.com/wp-graphql/wp-graphql-custom-post-type-ui) - この無料プラグインはCustom Post Type UIへ設定を追加し、CPTUIで登録した投稿タイプ・タクソノミーのうちどれをWPGraphQL Schemaに表示するか設定できるようにする。
- [WPGraphQL for FacetWP](https://github.com/hsimah-services/wp-graphql-facetwp) - @hsimahによるこの無料プラグインは、FacetWPによるファセット検索を可能にするためWPGraphQLクエリーのフィルターを公開する。
- [WPGraphQL for Gravity Forms](https://github.com/harness-software/wp-graphql-gravity-forms) - @harness_upの@KellenMaceによるこの無料プラグインは、@gravityformsデータをWPGraphQLへ公開し、フォーム、フィールド、エントリーなどをクエリーできるようにする。
- [WPGraphQL for Metabox](https://github.com/hsimah-services/wp-graphql-metabox) - @hsimahによるこの無料プラグインは、人気のhttp://MetaBox.io を使って登録したフィールドをWPGraphQL Schemaへ公開する。
- [WPGraphQL for Ninja Forms](https://github.com/toriphes/wp-graphql-ninja-forms) - この無料プラグインは、Ninja Formsプラグインで作成したフォームをWPGraphQL Schemaへ公開し、GraphQL Mutations経由でフォームを送信できるようにする。
- [WPGraphQL for Posts 2 Posts](https://github.com/harness-software/wp-graphql-posts-to-posts) - @harness_upの@KellenMaceによるこの無料プラグインは、すべてのPosts 2 PostsコネクションにGraphQLコネクションを自動作成する。
- [WPGraphQL for SEOPress](https://github.com/ashhitch/wp-graphql-yoast-seo) - @moon_meisterによるこの無料プラグインは、SEOPressが管理するデータをWPGraphQL Schemaへ公開し、ヘッドレスアプリケーションでSEOデータを使えるようにする。
- [WPGraphQL for WooCommerce](https://github.com/wp-graphql/wp-graphql-woocommerce) - この無料プラグインはWooCommerceデータをWPGraphQLへ公開し、GraphQL Queriesとmutationsを介してストアデータを操作できるようにする。
- [WPGraphQl Yoast SEO Plugin](https://github.com/ashhitch/wp-graphql-yoast-seo) - Yoast SEOデータをWPGraphQLプラグインへ公開する。


#### その他の便利なプラグイン

- [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/) - [ACF PRO](https://www.advancedcustomfields.com/pro/)
- [Headless Mode](https://wordpress.org/plugins/headless-mode/) - Headless modeは、サイトへアクセスしようとするすべてのユーザー向けにリダイレクトを設定する。アクセスを許可されるのは、REST API、WP GraphQL APIへアクセスしようとするリクエスト、または投稿の編集・作成のためヘッドレスインストールへアクセスするログイン済みユーザーのみ。
- [Polylang](https://wordpress.org/plugins/polylang/)
- [WP JAMstack Deployments](https://github.com/crgeary/wp-jamstack-deployments) - Netlify（およびほかのプラットフォーム）でJAMstackデプロイを行うWordPressプラグイン。


### Gatsbyプラグイン

- [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image)
- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem)
- [gatsby-source-wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress)


## 無料チュートリアル／コース

**注記:** gatsby-source-wordpress V4のリリース以降、gatsby-source-graphqlより優先されるため、この方法に関するチュートリアルのみ掲載します。


### 文書チュートリアル

- 2019.11: [Guide to Gatsby WordPress Starter Advanced with Previews, i18n and more](https://dev.to/nevernull/overview-guide-to-gatsby-wordpress-starter-advanced-with-previews-i18n-and-more-583l) - WPGraphQLによるWordPressとGatsbyの基本セットアップから始まり、デプロイ、プレビュー、i18n、ACF flexible content fieldsを用いるページビルダー風セットアップなど高度な主題へ進むチュートリアルシリーズ。
- 2019.08: [Live Previews with WordPress and Gatsby](https://justinwhall.com/live-previews-with-wordpress-gatsby/) - テーマの高階コンポーネントを使い、WordPress投稿・カスタム投稿タイプのプレビューを容易にする方法を示すチュートリアル。
- 2019.08: [Gatsby with WPGraphQL, ACF and Gatbsy-Image](https://dev.to/nevernull/gatsby-with-wpgraphql-acf-and-gatbsy-image-72m) - WordPressメディアファイルで使えるようgatsby-imageを実装する方法を示すガイド。
- 2018.08: [Headless WordPress + Gatsby + Netlify continuous deployment](https://justinwhall.com/headless-wordpress-gatsby-netlify-continous-deployment/) - 簡単な手順でWordPress + Gatsby + Netlifyセットアップを作成する方法を示すガイド。


### 動画チュートリアル

- 2019.11: [25+ Videos - Gatsby + WordPress (2019) Complete Course](https://whatjackhasmade.co.uk/series/gatsby-wordpress-2019/) - WordPressを、対話するためのGraphQL schemaを持つヘッドレスCMSとして使う方法に焦点を当てるシリーズ。WordPressサイトとテーマの設定後、Gatsbyで新しいschemaを使ってコンテンツを生成し、プログラムによるページ生成、GutenbergブロックのReactコンポーネントへの変換、GatsbyでのSEOを扱う。
- 2019.07: [Gatsby + WordPress with WPGraphQL (with Jason Bahl) — Learn With Jason](https://www.youtube.com/watch?v=DH7I1xRrbxs) - この配信でJason Bahlは、WordPress、Advanced Custom Fields、WPGraphQLを使って強力で柔軟な管理ダッシュボードを作り、そのデータをGatsbyサイトでクエリー・表示する方法を教える。
- 2019.07: [Crash Course: Headless WordPress with WPGraphQL, ACF, and React](https://www.youtube.com/watch?v=9KGuI0UmpMw) - この動画でAlex Young（WPCasts）は、WPGraphQLとReactを使う簡単なヘッドレスWordPressセットアップの作り方を説明する。
- 2019.06: [Using WordPress with WPGraphQL](https://www.youtube.com/watch?v=aqEfEuVWqws) - この動画では、WPGraphQLという優れたプラグインとGraphQL + Advanced Custom Fieldsなどを使い、WordPressでGraphQLを利用する方法を学ぶ。
- 2019.04: [WPGraphQL for ACF](https://www.youtube.com/watch?v=rIg4MHc8elg) - Jason BahlがAdvanced Custom FieldsでWPGraphQLを使う方法を示す。
- 2018.07: [GraphQL with WordPress and Gutenberg - Jason Bahl - 2018 JavaScript for WordPress Conference
](https://www.youtube.com/watch?v=6CuM1PY9ESQ) - 2018 JavaScript for WordPress Conferenceのこの講演で、WP GraphQL Plugin開発者のJason Bahlが、GraphQLとWordPress・Gutenbergを使う方法の最新例を示す。


## 有料チュートリアル／コース
有料コースのリスト。

- 2021.01: [Building a Headless WordPress Site with Gatsby](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby) - gatsby-source-wordpressプラグインを使い、投稿、ページ、カテゴリ、タグ、投稿ナビゲーションなどの機能を持つ完全に機能するヘッドレスGatsby WordPressサイトを作るステップバイステップコース。


## スターター
クローンして構築を始められるプロジェクトスターターのリスト。

- [Gatsby Starter - WordPress Twenty Twenty](https://github.com/henrikwirth/gatsby-starter-wordpress-twenty-twenty) - 新しいgatsby-source-wordpress@v4を使う、WordPress Twenty TwentyテーマのGatsbyへの移植。
- [Gatsby + WPGraphQL Blog Example](https://github.com/wp-graphql/gatsby-wpgraphql-blog-example) - GatsbyサイトのソースとしてWPGraphQLを使う方法を示すデモ。
- [Gatsby + Headless WordPress + Netlify Starter](https://github.com/justinwhall/gatsby-wordpress-netlify-starter) - Netlifyへの継続デプロイ向けGatsby + WordPressスターター。
- [Gatsby WordPress Starter Advanced](https://github.com/henrikwirth/gatsby-starter-wordpress-advanced) - チュートリアルシリーズとともに構築され、ACF flexible content fieldsでコンテンツブロック／レイアウトを作る高度なGatsby + WordPressスターター。
- [Gatsby Starter Blog](https://github.com/zeevo/gatsby-starter-wordpress-blog) - 初期状態で本番利用できるだけの機能を持つブログスターター。

## テーマ
Gatsbyセットアップで利用できる、WordPressをソースとして動作するgatsby-themesのリスト。

- [Twenty Nineteen Gatsby Theme](https://github.com/zgordon/twentynineteen-gatsby-theme) - Twenty Nineteen WordPress ThemeのGatsbyへの移植。
- [Gatsby WordPress Publisher Theme
](https://github.com/staticfuse/gatsby-theme-publisher) - Gatsby Publisher Themeでは、ヘッドレス（または分離型）WordPressサイトを作成できる。このテーマは、ReactとGatsbyで構築した静的フロントエンドにすべてのページと投稿を表示する。


## 貢献

貢献を歓迎します。まず[貢献ガイドライン](https://github.com/henrikwirth/awesome-wordpress-gatsby/blob/f28012c3c4f9d363aaa36387d1f31fcb33bde384/contributing.md)を読んでください。


## ライセンス

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

法律の及ぶ範囲で、Henrik Wirthはこの著作物に対するすべての著作権および関連する権利・隣接権を放棄しています。
