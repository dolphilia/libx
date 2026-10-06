---
title: "Awesome WordPress Gatsby"
description: "WordPressとGatsbyによるヘッドレスCMSの資料。WPGraphQLプラグイン、コミュニティ、記事、無料・有料講座、スターター、テーマ。"
licenseSource: "github-henrikwirth-awesome-wordpress-gatsby-readme-md"
---

# Awesome WordPress Gatsby

[WordPress](https://wordpress.org/)をRESTやGraphQLなどのAPI経由でコンテンツを提供する、バックエンドのみのヘッドレスCMSとして、[Gatsby](https://www.gatsbyjs.org/)をファイルやAPIのデータからHTML・CSS・JavaScriptを生成する静的サイトジェネレーターとして使うための資料です。WPGraphQLとの連携、コミュニティ、記事、無料・有料の教材、スターター、テーマを探せます。教材の選定は、gatsby-source-graphqlよりgatsby-source-wordpress V4を優先する原リストの方針に従っています。

原リストは、WordPressが広く使われているため多くの利用者になじみがあると説明し、PHPテンプレートやクライアント側のAPI要求と応答に依存する描画はGatsbyのビルド時の事前生成より読み込みに時間がかかると主張し、最初の応答で生成済みの静的サイトを提供できると述べています。また、WordPressをローカルで動かす場合も含め外部へ公開せずに使えることを挙げ、Gatsbyの静的サイトは「ハッキングできない」としています。これらは原リストの性能・安全性に関する主張であり、利点と欠点の議論は下記の資料で扱われています。

## コミュニティ
質問や議論に使えるWPGraphQLとGatsbyのコミュニティ。

**WPGraphQL**
- [Slackチャット](https://wpgql-slack.herokuapp.com/)
- [Spectrumチャット](https://spectrum.chat/wpgraphql)
- [Twitter](https://twitter.com/wpgraphql)

**Gatsby**
- [Discordチャット](https://gatsby.dev/discord)
- [Reddit](https://www.reddit.com/r/gatsbyjs/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/gatsby)

## 記事と講演

技術構成を説明する記事・講演。

- 2021.02: [Announcing Gatsby’s New WordPress Integration](https://www.gatsbyjs.com/blog/wordpress-integration)
- 2021.02: [Jason Bahl of WPGraphQL's role in the operating system for the web](https://www.youtube.com/watch?v=Me_A0HBYXx8)
- 2021.02: [Torque News Drop: Jason Bahl and WPGraphQL](https://www.youtube.com/watch?v=8SAdtU8HAwM)
- 2021.02: [Gatsby Launches New WordPress Integration, Expanding Support for Headless Architecture](https://wptavern.com/gatsby-launches-new-wordpress-integration-expanding-support-for-headless-architecture)
- 2020.11: [Announcing WPGraphQL v1.0](https://www.wpgraphql.com/2020/11/16/announcing-wpgraphql-v1/)
- 2020.07: [My Long Journey to a Decoupled WordPress Gatsby Site](https://css-tricks.com/my-long-journey-to-a-decoupled-wordpress-gatsby-site/)
- 2019.06: [Modern Web Development on the JAMstack
  ](https://www.netlify.com/oreilly-jamstack/) - NetlifyによるJAMStackでのモダンWeb開発に関する、O'REILLY発行のレポート。

## プラグイン

WordPressとGatsbyを連携させるプラグイン。原リストの掲載順を保持しています。

## WordPress

### 必須プラグイン

- [WPGraphQL](https://github.com/wp-graphql/wp-graphql) - [ドキュメント](https://docs.wpgraphql.com/) - WordPressサイトでGraphQLを利用するためのプラグイン。
- [WPGatsby](https://wordpress.org/plugins/wp-gatsby/) - WordPressサイトをGatsby向けに最適化されたデータソースとして構成。

### <a id="wpgraphql拡張"></a>WPGraphQLの拡張

- [WPGraphQL Cors](https://github.com/funkhaus/wp-graphql-cors) - @kidunot89と@byfunkhausによる無料プラグイン。GraphQLが受け入れるCORSヘッダーを設定し、WordPressの既定認証Cookieを受け入れることで、WPGraphQL認証を「そのまま」利用できると原リストが説明。
- [Total Counts for WPGraphQL](https://github.com/builtbycactus/total-counts-for-wp-graphql) - @builtbycactusによる無料プラグイン。WPGraphQLスキーマのコネクションに合計件数を公開。
- [WPGraphQL Gutenberg](https://github.com/pristas-peter/wp-graphql-gutenberg) - GutenbergブロックをWPGraphQL APIへ公開。
- [WPGraphQL JWT Authentication](https://github.com/wp-graphql/wp-graphql-jwt-authentication) - JWT（JSON Web Tokens）による認証を提供するWPGraphQL拡張。
- [WPGraphQL Lock](https://github.com/valu-digital/wp-graphql-lock) - 永続化されたGraphQLクエリーによるWPGraphQLのクエリーロック。
- [WPGraphQL Meta](https://github.com/roborourke/wp-graphql-meta) - @robertorourkeによる無料プラグイン。WordPressのregister_meta APIで登録したメタデータをWPGraphQLに公開。
- [WPGraphQL Meta Query](https://github.com/wp-graphql/wp-graphql-meta-query) - postObjectクエリー引数のMeta_Query対応をWPGraphQLに追加。
- [WPGraphQL Persisted Queries](https://github.com/Quartz/wp-graphql-persisted-queries) - @qzによる無料プラグイン。WPGraphQLに永続化クエリー（Persisted Queries）を追加。
- [WPGraphQL Offset Pagination](https://github.com/darylldoyle/wp-graphql-offset-pagination) - @enshrinedによる無料プラグイン。WPGraphQL標準のカーソル方式に代わる、基本的なオフセット方式のページネーションを追加。
- [WPGraphQL Send Email](https://github.com/ashhitch/wp-graphql-send-mail) - @Ash_Hitchcockによる無料プラグイン。簡単なミューテーションでメールを送信。送信処理を許可する要求元を信頼済みオリジンに制限する機能も含む。

ほかのプラグインをWPGraphQLと連携させる拡張:

- [QL Search](https://github.com/funkhaus/ql-search) - SearchWPをWPGraphQLに統合する拡張。
- [WPGraphQL Content Blocks](https://github.com/Quartz/wp-graphql-content-blocks) - QZ.comの人々による無料プラグイン。WordPressの投稿・ページのHTMLを「Blocks」（Gutenbergとは無関係）として問い合わせ、取得内容を構造化する機能。
- [WPGraphQL Enable All Post Types (DalkMania)](https://github.com/DalkMania/wp-graphql-cpt) - @DalkManiaによる無料プラグイン。登録されたすべての投稿タイプをWPGraphQLスキーマへ自動で追加。
- [WPGraphQL Enable All Post Types (TylerBarnes)](https://github.com/TylerBarnes/wp-graphql-enable-all-post-types) - @tylbarによる無料プラグイン。登録されたすべての投稿タイプをWPGraphQLスキーマへ自動で追加。
- [WPGraphQL Google Schema](https://github.com/izzygld/wp-graphql-google-schema) - @izzygld261による無料プラグイン。Googleスキーマの対応をWPGraphQLへ追加。
- [WPGraphQL Gutenberg ACF](https://github.com/pristas-peter/wp-graphql-gutenberg-acf) - ACFブロックをGraphQL経由で公開。
- [WPGraphQL MB (MetaBox)](https://github.com/DalkMania/wp-graphql-mb) - @DalkManiaによる無料プラグイン。[metabox.io](https://metabox.io/)を使って登録したすべてのメタボックスをWPGraphQLスキーマへ追加。
- [WPGraphQL MetaBox Relationships](https://github.com/hsimah-services/wp-graphql-mb-relationships) - @hsimahによる無料プラグイン。作者のwp-graphql-metaboxプラグインも併用する場合に、[metabox.io](https://metabox.io/)のRelationshipsフィールドをWPGraphQLでサポート。
- [WPGraphQL Polls](https://github.com/andrenoberto/wp-graphql-polls) - @andrenosouzaによる無料プラグイン。GraphQLのクエリーとミューテーションを通じてWP-Pollsプラグインのデータを操作。
- [WPGraphQL Polylang Extension](https://github.com/valu-digital/wp-graphql-polylang) - Polylangプラグインの言語データでWPGraphQLスキーマを拡張。
- [WPGraphQL Tax Query](https://github.com/wp-graphql/wp-graphql-tax-query) - postObjectクエリー引数（WP_Query）向けのTax_QueryサポートをWPGraphQLプラグインへ追加。
- [WPGraphQL WPML](https://github.com/rburgst/wp-graphql-wpml) - @rburgstによる無料プラグイン。WPMLプラグインの言語データでWPGraphQLスキーマを拡張。さらに、言語に関係なくすべての投稿を順に処理できるよう、WPMLの既定フィルターを無効化。
- [WPGraphQL for Advanced Custom Fields](https://github.com/wp-graphql/wp-graphql-acf) - Advanced Custom FieldsをWPGraphQLスキーマへ公開。
- [WPGraphQL for BuddyPress](https://github.com/wp-graphql/wp-graphql-buddypress) - @RenatoNascAlvesによる無料プラグイン。BuddyPressデータをWPGraphQLへ公開。
- [WPGraphQL for Carbon Fields](https://github.com/matepaiva/wp-graphql-crb) - @matepaivaによる無料プラグイン。Carbon Fieldsを使って登録したフィールドをWPGraphQLスキーマへ公開。
- [WPGraphQL for Custom Post Type UI](https://github.com/wp-graphql/wp-graphql-custom-post-type-ui) - 無料プラグイン。Custom Post Type UIへ設定を追加し、CPTUIで登録した投稿タイプ・タクソノミーのうちWPGraphQLスキーマに表示するものを設定。
- [WPGraphQL for FacetWP](https://github.com/hsimah-services/wp-graphql-facetwp) - @hsimahによる無料プラグイン。FacetWPによるファセット検索を可能にするためWPGraphQLクエリーのフィルターを公開。
- [WPGraphQL for Gravity Forms](https://github.com/harness-software/wp-graphql-gravity-forms) - @harness_upの@KellenMaceによる無料プラグイン。@gravityformsデータをWPGraphQLへ公開し、フォーム、フィールド、送信データなどを問い合わせる機能。
- [WPGraphQL for Metabox](https://github.com/hsimah-services/wp-graphql-metabox) - @hsimahによる無料プラグイン。[MetaBox.io](http://MetaBox.io)を使って登録したフィールドをWPGraphQLスキーマへ公開。
- [WPGraphQL for Ninja Forms](https://github.com/toriphes/wp-graphql-ninja-forms) - 無料プラグイン。Ninja Formsプラグインで作成したフォームをWPGraphQLスキーマへ公開し、GraphQLのミューテーションによるフォーム送信に対応。
- [WPGraphQL for Posts 2 Posts](https://github.com/harness-software/wp-graphql-posts-to-posts) - @harness_upの@KellenMaceによる無料プラグイン。すべてのPosts 2 PostsコネクションにGraphQLコネクションを自動作成。
- [WPGraphQL for SEOPress](https://github.com/ashhitch/wp-graphql-yoast-seo) - @moon_meisterによる無料プラグイン。SEOPressが管理するデータをWPGraphQLスキーマへ公開し、ヘッドレスアプリケーションでSEOデータを利用。
- [WPGraphQL for WooCommerce](https://github.com/wp-graphql/wp-graphql-woocommerce) - 無料プラグイン。WooCommerceデータをWPGraphQLへ公開し、GraphQLのクエリーとミューテーションを介してストアデータを操作。
- [WPGraphQl Yoast SEO Plugin](https://github.com/ashhitch/wp-graphql-yoast-seo) - Yoast SEOデータをWPGraphQLプラグインへ公開。

### その他の便利なプラグイン

- [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/) - [ACF PRO](https://www.advancedcustomfields.com/pro/)
- [Headless Mode](https://wordpress.org/plugins/headless-mode/) - サイトを訪れるユーザーをリダイレクト。REST API・WP GraphQL APIへの要求と、投稿を編集・作成するためにアクセスするログイン済みユーザーだけを許可。
- [Polylang](https://wordpress.org/plugins/polylang/)
- [WP JAMstack Deployments](https://github.com/crgeary/wp-jamstack-deployments) - Netlify（およびほかのプラットフォーム）でJAMstackデプロイを行うWordPressプラグイン。

## Gatsbyプラグイン

- [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image)
- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem)
- [gatsby-source-wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress)

## 無料チュートリアル／コース

原リストでは、gatsby-source-graphqlよりgatsby-source-wordpress V4を優先し、この方法に関する教材だけを掲載しています。

### <a id="文書チュートリアル"></a>文章チュートリアル

- 2019.11: [Guide to Gatsby WordPress Starter Advanced with Previews, i18n and more](https://dev.to/nevernull/overview-guide-to-gatsby-wordpress-starter-advanced-with-previews-i18n-and-more-583l) - WPGraphQLによるWordPressとGatsbyの基本セットアップから始まり、デプロイ、プレビュー、i18n、ACFの柔軟なコンテンツフィールドを用いるページビルダー形式の構成など高度な主題へ進むチュートリアルシリーズ。
- 2019.08: [Live Previews with WordPress and Gatsby](https://justinwhall.com/live-previews-with-wordpress-gatsby/) - テーマの高階コンポーネントを使い、WordPress投稿・カスタム投稿タイプのプレビューを容易にする方法を示すチュートリアル。
- 2019.08: [Gatsby with WPGraphQL, ACF and Gatbsy-Image](https://dev.to/nevernull/gatsby-with-wpgraphql-acf-and-gatbsy-image-72m) - WordPressメディアファイルで使えるようgatsby-imageを実装する方法を示すガイド。
- 2018.08: [Headless WordPress + Gatsby + Netlify continuous deployment](https://justinwhall.com/headless-wordpress-gatsby-netlify-continous-deployment/) - 簡単な手順でWordPress + Gatsby + Netlifyセットアップを作成する方法を示すガイド。

### 動画チュートリアル

- 2019.11: [25+ Videos - Gatsby + WordPress (2019) Complete Course](https://whatjackhasmade.co.uk/series/gatsby-wordpress-2019/) - WordPressを、データ取得に使うGraphQLスキーマを備えたヘッドレスCMSとして使う方法に焦点を当てるシリーズ。WordPressサイトとテーマの設定後、Gatsbyで新しいスキーマを使ってコンテンツを生成し、プログラムによるページ生成、GutenbergブロックのReactコンポーネントへの変換、GatsbyでのSEOを扱う。
- 2019.07: [Gatsby + WordPress with WPGraphQL (with Jason Bahl) — Learn With Jason](https://www.youtube.com/watch?v=DH7I1xRrbxs) - この配信でJason Bahlは、WordPress、Advanced Custom Fields、WPGraphQLを使って強力で柔軟な管理ダッシュボードを作り、そのデータをGatsbyサイトでクエリー・表示する方法を教える。
- 2019.07: [Crash Course: Headless WordPress with WPGraphQL, ACF, and React](https://www.youtube.com/watch?v=9KGuI0UmpMw) - この動画でAlex Young（WPCasts）は、WPGraphQLとReactを使う簡単なヘッドレスWordPressセットアップの作り方を説明する。
- 2019.06: [Using WordPress with WPGraphQL](https://www.youtube.com/watch?v=aqEfEuVWqws) - この動画では、WPGraphQLとGraphQL + Advanced Custom Fieldsなどを使い、WordPressでGraphQLを利用する方法を学ぶ。
- 2019.04: [WPGraphQL for ACF](https://www.youtube.com/watch?v=rIg4MHc8elg) - Jason BahlがAdvanced Custom FieldsでWPGraphQLを使う方法を示す。
- 2018.07: [GraphQL with WordPress and Gutenberg - Jason Bahl - 2018 JavaScript for WordPress Conference
](https://www.youtube.com/watch?v=6CuM1PY9ESQ) - 2018 JavaScript for WordPress Conferenceのこの講演で、WP GraphQL Plugin開発者のJason Bahlが、GraphQLとWordPress・Gutenbergを使う方法について、講演時点で更新された例を示す。

## 有料チュートリアル／コース
有料講座。

- 2021.01: [Building a Headless WordPress Site with Gatsby](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby) - gatsby-source-wordpressプラグインで、投稿、ページ、カテゴリ、タグ、投稿ナビゲーションなどを備えたヘッドレスWordPress・Gatsbyサイトを作る手順を学ぶ講座。

## スターター
クローンして開発を始められるプロジェクトのひな型。

- [Gatsby Starter - WordPress Twenty Twenty](https://github.com/henrikwirth/gatsby-starter-wordpress-twenty-twenty) - gatsby-source-wordpress@v4を使う、WordPress Twenty TwentyテーマのGatsbyへの移植。
- [Gatsby + WPGraphQL Blog Example](https://github.com/wp-graphql/gatsby-wpgraphql-blog-example) - GatsbyサイトのソースとしてWPGraphQLを使う方法を示すデモ。
- [Gatsby + Headless WordPress + Netlify Starter](https://github.com/justinwhall/gatsby-wordpress-netlify-starter) - Netlifyへの継続デプロイ向けGatsby + WordPressスターター。
- [Gatsby WordPress Starter Advanced](https://github.com/henrikwirth/gatsby-starter-wordpress-advanced) - チュートリアルシリーズとともに構築され、ACFの柔軟なコンテンツフィールドでコンテンツブロック／レイアウトを作る高度なGatsby + WordPressスターター。
- [Gatsby Starter Blog](https://github.com/zeevo/gatsby-starter-wordpress-blog) - 初期状態で本番利用できるだけの機能を持つブログスターター。

## テーマ
WordPressをデータソースとして使うGatsbyテーマ。

- [Twenty Nineteen Gatsby Theme](https://github.com/zgordon/twentynineteen-gatsby-theme) - Twenty Nineteen WordPress ThemeのGatsbyへの移植。
- [Gatsby WordPress Publisher Theme
](https://github.com/staticfuse/gatsby-theme-publisher) - Gatsby Publisher Themeでは、ヘッドレス（または分離型）WordPressサイトを作成できる。このテーマは、ReactとGatsbyで構築した静的フロントエンドにすべてのページと投稿を表示する。
