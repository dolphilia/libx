---
title: "vuejs/awesome-vue"
description: "Vue.jsの公式資料、学習資料、採用事例、コンポーネント、ライブラリ、開発ツールを分類した定本スナップショット"
licenseSource: "github-vuejs-awesome-vue-readme-md"
---

Resource from plugin:github:github at repo://vuejs/awesome-vue/sha/14fa265df1bd0a3d78fca341a9739a42bf6cd95d/contents/README.md] <p align="center">
  <br>
  <img width="400" src="./assets/logo.svg" alt="logo of vue-awesome repository">
  <br>
  <br>
</p>

## Vue.jsのAwesomeリスト [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@main/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/vuejs/awesome-vue) <a id="awesome-vuejs"></a>

> Vue.jsに関連する優れた資料の厳選リストです。



**目次**

- [資料](#resources)
  - [公式資料](#official-resources)
  - [特に優れたプロジェクト](#truly-awesome-projects)
  - [外部資料](#external-resources)
  - [ニュースレター](#newsletters)
  - [求人ポータル](#job-portal)
  - [コミュニティ](#community)
  - [カンファレンス](#conferences)
  - [ポッドキャスト](#podcasts)
  - [公式サンプル](#official-examples)
  - [チュートリアル](#tutorials)
  - [サンプル](#examples)
  - [書籍](#books)
  - [ブログ記事](#blog-posts)
  - [コース](#courses)
  - [ドキュメンタリー](#documentaries)
- [Vue.jsを利用する企業](#companies-using-vuejs)
- [Vue.jsを利用するプロジェクト](#projects-using-vuejs)
  - [オープンソース](#open-source)
  - [商用製品](#commercial-products)
  - [アプリ／Webサイト](#appswebsites)
  - [インタラクティブ体験](#interactive-experiences)
  - [企業での利用](#enterprise-usage)
  - [アクセシビリティ](#a11y)
- [コンポーネントとライブラリ](#components--libraries)
  - [フレームワーク](#frameworks)
    - [レスポンシブ](#responsive)
    - [モバイル](#mobile)
    - [コンポーネント集](#component-collections)
    - [管理画面テンプレート](#admin-template)
    - [サーバーサイドレンダリング](#server-side-rendering)
    - [静的サイトジェネレーター](#static-website-generator)
    - [その他](#other)
  - [UIレイアウト](#ui-layout)
  - [UIコンポーネント](#ui-components)
    - [テーブル](#table)
    - [通知](#notification)
    - [ローダー](#loader)
      - [プログレスバー](#progress-bar)
    - [ツールチップ](#tooltip)
    - [オーバーレイ](#overlay)
    - [マーキー](#marquee)
    - [メニュー](#menu)
    - [カルーセル](#carousel)
    - [チャート](#charts)
    - [時刻](#time)
    - [カレンダー](#calendar)
    - [地図](#map)
    - [音声／動画](#audio--video)
    - [無限スクロール](#infinite-scroll)
    - [Markdown](#markdown)
    - [PDF](#pdf)
    - [ツリー](#tree)
    - [グラフ](#graph)
    - [ソーシャル共有](#social-sharing)
    - [QRコード](#qr-code)
    - [検索](#search)
    - [その他](#miscellaneous)
    - [タブ](#tabs)
    - [フォーム](#form)
      - [電話番号入力フォーマッター](#phone-number-input-formatter)
      - [ピッカー](#picker)
      - [ジェネレーター](#generator)
        - [日付ピッカー](#date-picker)
      - [選択](#select)
      - [ドラッグ＆ドロップ](#drag-and-drop)
      - [型選択](#type-select)
      - [カラーピッカー](#color-picker)
      - [スイッチ](#switch)
      - [マスク入力](#masked-input)
      - [リッチテキスト編集](#rich-text-editing)
      - [画像操作](#image-manipulation)
      - [ファイルアップロード](#file-upload)
      - [コンテキストメニュー](#context-menu)
      - [その他](#miscellaneous-1)
      - [ウィザード](#wizard)
    - [Canvas](#canvas)
    - [リンクプレビュー](#link-preview)
    - [ツアー](#tour)
  - [UIユーティリティ](#ui-utilities)
    - [イベント処理](#event-handling)
    - [レスポンシブデザイン](#responsive-design)
    - [フォーム](#form-1)
      - [バリデーション](#validation)
    - [リサイズ](#resize)
    - [スクロール](#scroll)
    - [ルーティング](#routing)
    - [遅延読み込み](#lazy-load)
    - [ページネーション](#pagination)
    - [アニメーション](#animation)
    - [メタタグ](#meta-tags)
    - [ポータル](#portal)
    - [SVG](#svg)
    - [その他](#miscellaneous-2)
    - [WebGL](#webgl)
    - [全画面表示](#fullscreen)
    - [印刷](#printing)
  - [ユーティリティ](#utilities)
    - [TypeScript](#typescript)
    - [HTTPリクエスト](#http-requests)
    - [国際化](#i18n)
    - [カスタムイベント](#custom-events)
    - [永続化](#persistence)
    - [状態管理](#state-management)
      - [MobX](#mobx)
      - [Pinia](#pinia)
      - [認証／認可](#authenticationauthorization)
      - [Vuexユーティリティ](#vuex-utilities)
    - [GraphQL](#graphql)
    - [コードスタイル](#code-style)
    - [CSS](#css)
    - [アセット管理](#asset-management)
    - [ページナビゲーション](#page-navigation)
    - [その他](#miscellaneous-3)
    - [WebSocket](#web-sockets)
    - [決済](#payment)
      - [Stripe](#stripe)
  - [統合](#integrations)
    - [Vue CLIプラグイン](#vue-cli-plugins)
      - [Google Analytics](#google-analytics)
  - [開発ツール](#dev-tools)
    - [検査](#inspect)
    - [ドキュメント](#docs)
    - [テスト](#test)
    - [ソースコード編集](#source-code-editing)
      - [Vim](#vim)
      - [Visual Studio Code](#visual-studio-code)
      - [IntelliJ](#intellij)
      - [Emacs](#emacs)
  - [スキャフォールド](#scaffold)
    - [ユニバーサル](#universal)
    - [デスクトップ](#desktop)
  - [事前レンダリング](#prerendering)



## 資料 <a id="resources"></a>

### 公式資料 <a id="official-resources"></a>

- [Documentation](https://vuejs.org/)
- [API Reference](https://vuejs.org/api/)
- [GitHub Repo](https://github.com/vuejs/)
- [Release Notes](https://github.com/vuejs/core/releases)
- [Style Guide](https://vuejs.org/style-guide/)
- [Vue.js News](https://news.vuejs.org/)
- [IDE Language Support](https://github.com/vuejs/language-tools?tab=readme-ov-file#vue-language-tools)
- [Awesome Vite](https://github.com/vitejs/awesome-vite)

### 特に優れたプロジェクト <a id="truly-awesome-projects"></a>

特に品質が高く、実績があり、Vue.js開発に欠かせないプロジェクトです。

 - [Vue DevTools](https://github.com/vuejs/devtools) - Vue.jsアプリケーションのデバッグ用ブラウザデベロッパーツール拡張機能
 - [unplugin-icons](https://github.com/unplugin/unplugin-icons) - 広く使われている主要なアイコンセットに対応するオンデマンドアイコンローダー
 - [vue-i18n](https://github.com/intlify/vue-i18n) - Vue.jsの国際化プラグイン

### 外部資料 <a id="external-resources"></a>

- [Vue.js 資料まとめ(for japanese)](https://gist.github.com/hashrock/f575928d0e109ace9ad0) by @hashrock
- [Vue.js Wikipedia](https://en.wikipedia.org/wiki/Vue.js)
- [Vue Curated Resources](https://hackr.io/tutorials/learn-vue-js) - おすすめのVue.jsコースとチュートリアル
- [Vue School](https://vueschool.io) - コアメンバーや業界の専門家による動画コースでVue.jsを学べるサイト
- [VueDose](https://vuedose.tips). Tips & tricks about the Vue ecosystem, for busy devs.
- [Vue.js DEV Community](https://dev.to/t/vue) - DEV.toにおけるVue.js JavaScriptフレームワークの公式タグ
- [WebTechSurvey.com](https://webtechsurvey.com/technology/vue.js) - Vue.js JavaScriptフレームワークで作成されたウェブサイトの広範なリスト
- [Vue Mastery](https://www.vuemastery.com/) - Vue開発者のための究極の学習リソース
- [Vue 3 Video Playlist](https://www.youtube.com/playlist?list=PLMLZt4pr7Aq6AfC_ynfeDbEk2hbMFGpHO) - 素晴らしいVue 3チュートリアルと実験
- [Vue.js Workshops](https://public.vuejsworkshops.com) - Vue 2をブラウザ上で学ぶ3つのアプリケーション（ランディングページ、TODOアプリ、ポッドキャスト集約）を構築することで学ぶ。（Vue.js、Vue-Router、Vuex、Vue-Axios、Vue-Apollo）
- [Vue.js Articles](https://thewebdev.info/category/javascript/vue/) - Vue 2およびVue 3のチュートリアルと記事のさまざまな選集
- [Best vue.js Courses On YouTube](https://www.nbshare.io/blog/best-vue-js-courses-on-youtube/) - YouTube上での最高のVue.jsチュートリアルを厳選したリスト
- [Notes on Vue](https://notes-on-vue.ackzell.dev/) - Vue開発に関する個人的なガイド
- [Vue-FAQ](https://vue-faq.org/) - フロントエンドおよび特にVue.jsに関するよくある質問
- [State of Vue Report](https://www.monterail.com/stateofvue?utm_source=Github&utm_medium=awesomevue) - Vueに関する包括的なレポートの第5版。Evan YouおよびVueとNuxtのコアチームとの共同制作
- [TODOvue Blog](https://github.com/TODOvue/todo-vue) - Vue.jsで現代的なコンポーネントを作成するためのガイドとチュートリアル。 [Website](https://todovue.blog/)

### ニュースレター <a id="newsletters"></a>

- [Weekly Vue news](https://weekly-vue.news/) - 最も興味深いVueおよびNuxtのニュース、チュートリアル、プロジェクト、ツールを週に1回配信するニュースレター。

### 求人ポータル <a id="job-portal"></a>

- [Vue.js Jobs - VueJobs](https://vuejobs.com/) - Vue.jsの仕事のためのポータルサイト：Vue.jsのすべての職務を募集または応募できる
- [Vue.js Interview Questions](https://github.com/sudheerj/vuejs-interview-questions) - 300問のVueJSインタビュー問題と解答リスト

### コミュニティ <a id="community"></a>

- [X (Twitter)](https://x.com/vuejs)
- [Official Forum](https://forum.vuejs.org/)
- [VueJS English community](https://t.me/vue_en)
- [VueJS Iran - Telegram Channel & group (group link available in channel bio)](https://telegram.me/vue_js)
- [VueJS Russia - Telegram Group [Russian]](https://t.me/vuejs_ru)
- [VueJS Viet Nam - Facebook group](https://www.facebook.com/groups/vuejsvietnam/)
- [VueJS Thailand - Facebook Group](https://www.facebook.com/groups/VuejsThailand/)
- [VueJS Brasil - Telegram Group [Portuguese]](https://t.me/vuejsbrasil)
- [VueJS Brasil - Facebook Page [Portuguese]](https://www.facebook.com/vuejsbrasil/)
- [VueJS Brasil - Facebook Group [Portuguese]](https://www.facebook.com/groups/vuejsbr/)
- [VueJS en español - Facebook Group [Spanish]](https://www.facebook.com/groups/vue.es/)
- [VueJS India - Discord chat server](https://discord.com/invite/8bfzmkw)
- [VueJS Indonesia - Telegram Group [Indonesian]](https://t.me/vuejsindonesia)
- [VueJS Indonesia - Facebook Group [Indonesian]](https://www.facebook.com/groups/1675298779418239/)
- [VueJS Hong Kong - Facebook group](https://www.facebook.com/groups/887185518120024)
- [VueJS Arab - Telegram Group](https://t.me/vuejsarab)
- [VueJS Vix - Telegram Group [Portuguese]](https://t.me/vuejsvix)
- [VueJS Israel - Facebook Page](https://www.facebook.com/officalVuejsIsrael/)
- [VueJS Finland - Facebook Page](https://www.facebook.com/vuejsfinland/)
- [Hablemos de Vue.js - Telegram Group [Castellano]](https://t.me/vuejsEs)
- [VueBLR - WhatsApp Group](https://chat.whatsapp.com/I80X4JEZt4k1OxFD6YDIcl)
- [VueBLR - Facebook Group](https://www.facebook.com/groups/vue.blr/)
- [VueJS USA - Meetups](https://events.vuejs.org/meetups/#united-states)
- [VueJS CZ/SK - Discord group](https://discord.gg/mDr2z8V)
- [VueJS DOM - WhatsApp group](https://chat.whatsapp.com/L5rFQpme22IHmmyOMI1MWA)
- [VueJS Uzbekistan - Telegram Group [Uzbek]](https://t.me/vuejsuzbekcommunity)
- [VueJS Uzbekistan - Telegram Community and Support Group [Uzbek]](https://t.me/vuejs_uz)
- [VueJS Turkey - Telegram Group](https://t.me/vuejsTR)
- [Vue Turkey - Twitter Account](https://twitter.com/Vue_Turkey)
- [Vue Türkiye - Kommunity Page](https://kommunity.com/vue-turkey)
- [VueJS Singapore - Telegram Group](https://t.me/vuejssg)
- [VueJS Bootcamp kablosuzkedi - Turkey - Telegram Group](https://t.me/joinchat/pqiJOgi8byQ5Y2E0)
- [VueJS Translations Ukraine](https://t.me/vuejs_ukraine) - Telegramグループ（ウクライナ）
- [VueJS Kenya - Twitter Account](https://twitter.com/KenyaVue)
- [VueJS Magyar - Facebook Group [Hungarian]](https://www.facebook.com/groups/huvuejs/)
- [VueJS Bangladesh - Facebook Group](https://www.facebook.com/groups/764064325433370)

### カンファレンス <a id="conferences"></a>

- [VueConf US](https://vueconf.us)
- [VueConf Toronto](https://vuetoronto.com)
- [Vue.js Amsterdam](https://vuejs.amsterdam)

### ポッドキャスト <a id="podcasts"></a>

- [Full Stack Radio #30 (11-23-2015)](https://www.fullstackradio.com/30)
- [Changelog #184 (11-27-2015)](https://changelog.com/podcast/184)
- [Software Engineering Daily (12-29-2015)](https://softwareengineeringdaily.com/2015/12/29/front-end-javascript-with-evan-you/)
- [Codecasts #2 - Falando Sobre Vuejs e Web Components (2016-08-19) [pt-BR]](https://soundcloud.com/codecasts/2-falando-sobre-vuejs-e-web-components)
- [Full Stack Radio #50 (09-21-2016)](https://www.fullstackradio.com/50)
- [和 Vue.js 框架的作者聊聊前端框架开发背后的故事 [zh-CN]](https://teahour.fm/78)
- [Request For Commits #12 - Crowdfunding Open Source (Vue.js) (06-15-2017)](https://changelog.com/rfc/12)
- [The Web Platform Podcast 132: Vue.js (07-27-2017)](https://thewebplatformpodcast.com/132-vuejs)
- [Animating VueJS with Sarah Drasner(Software Engineering Daily 01-12-2017)](https://softwareengineeringdaily.com/2017/12/01/animating-vuejs-with-sarah-drasner/)
- [Cynical Developer #99 (10-15-2018)](https://cynicaldeveloper.com/podcast/99/)
- [Syntax #130 (03-27-2019)](https://syntax.fm/show/130/the-vuejs-show-scott-teaches-wes)
- [Enjoy the Vue: The new Vue.js podcast](https://enjoythevue.io/)
- [What is Pinia? with @posva (My typeof Radio) [es-MX]](https://mytypeof.dev/episode/s1-e22-que-es-pinia-con-posva)
- [Evolution of Vue - Part I (My typeof Radio) [es-MX]](https://mytypeof.dev/episode/s1-e9-evolucion-de-vue-parte-i)
- [Evolution of Vue - Part II (My typeof Radio) [es-MX]](https://mytypeof.dev/episode/s1-e10-evolucion-de-vue-parte-ii)
- [Evolution of Vue - Part III (My typeof Radio) [es-MX]](https://mytypeof.dev/episode/s1-e11-evolucion-de-vue-parte-iii)
- [React vs Vue - their communities (My typeof Radio) [es-MX]](https://mytypeof.dev/episode/s1-e8-react-vs-vue-las-comunidades)
- [Views on Vue (weekly podcast on Vue)](https://topenddevs.com/podcasts/views-on-vue)
- [DejaVue - The Vue podcast to remember](https://dejavue.fm/)
- [Pinia and friends in 2025 with @posva (My typeof Radio) [es-MX]](https://mytypeof.dev/episode/s3-e7-pinia-y-sus-amigos-en-2025-con-posva)

### 公式サンプル <a id="official-examples"></a>

- [Vue.js TodoMVC](https://github.com/vuejs/vue/tree/dev/examples/todomvc)

### チュートリアル <a id="tutorials"></a>

- [Learn Vue 3: Step by Step](https://laracasts.com/series/learn-vue-3-step-by-step) on Laracasts
- [Vuejs 2 Authentication Tutorial](https://auth0.com/blog/vuejs2-authentication-tutorial/) on Auth0 blog
- [Vuex introduction video - James Browne from London Vue.js Meetup #1](https://www.youtube.com/watch?v=l1KHL-TX3qs)
- [Hybrid App Example with Laravel and Vue.js in Portuguese](https://www.youtube.com/watch?v=TGSJjDahlrQ) by @vedovelli
- [Vue.js Screencast Series in Spanish](https://styde.net/curso-de-vue-js/) on Styde.net
- [**讲解 Vue.js 官网 中文-含代码、百度云、youtube**](https://github.com/bhnddowinf/vuejs-learn) on bhnddowinf
- [Exploring Real Time Apps with VueJS, ES2015 and Webpack](https://blog.pusher.com/exploring-real-time-apps-with-vuejs-es2016-and-webpack/) on Pusher
- [Vue.js in Bahasa Indonesia](https://www.sekolahkoding.com/track/belajar-vue-js) on sekolahkoding.com
- [Vue.js from Scratch Series in Russian](https://www.youtube.com/playlist?list=PL5r0NkdgM0UOxb4Hl81FV5UIgexwTf8h7) on YouTube by .dev
- [Створення сервісу для зберігання файлів з Flask, RethinkDB та Vue.js, ч. 1](https://codeguida.com/post/526/) Ukraine
- [VueJS 2 French tutorial](https://www.youtube.com/playlist?list=PLjwdMgw5TTLW-mAtlR46VajrKs4dep3y0) Français par Grafikart
- [How to Create Great VueJS Applications Using Wijmo Controls](https://wijmo.com/blog/how-to-create-great-vuejs-applications-using-wijmo-controls/)
- [**讲解 Vue.js 2 官网 中文-含代码、百度云、youtube**](https://github.com/bhnddowinf/vuejs2-learn) on bhnddowinf
- [Up and Running with the Vue.js 2.0 Framework](https://www.sitepoint.com/up-and-running-vue-js-2-0/) on SitePoint
- [Vue.js 2.0 Fundamentals](https://www.youtube.com/playlist?list=PLwAKR305CRO_1yAao-8aZiQnBqJeyng4O) on YouTube by DevMarketer
- [Vuex For The Clueless — The Missing Primer On Vue’s Application Data Store](https://medium.com/js-dojo/vuex-for-the-clueless-the-missing-primer-on-vues-application-data-store-33fa51ffc3af#.2j25xpfui)
- [Real-time Grid Component Laravel, Vue.js, Vuex & Socket.io](https://www.youtube.com/watch?v=Jxefsv5Zqkw&t=3s)
- [VueJS 2 - The Complete Guide (incl. Vuex) - Udemy Tutorial](https://www.udemy.com/vuejs-2-the-complete-guide)
- [Develop Web Apps with Vue.js](https://egghead.io/courses/develop-web-apps-with-vue-js) on [egghead.io](https://egghead.io/)
- [Vue.js 2 - Getting Started](https://www.youtube.com/playlist?list=PL55RiY5tL51p-YU-Uw90qQH419BM4Iz07)
- [Vue.js 2 & Vuex (Basics)](https://www.youtube.com/playlist?list=PL55RiY5tL51pT0DNJraU93FhMzhXxtDAo)
- [Türkçe VueJS Eğitim Videoları](https://www.youtube.com/playlist?list=PLa3NvhdFWNipwk1KXeUpVQnAiAfuBw4El) on YouTube by [Fatih Acet](https://fatihacet.com)
- [Let's Vue! - OpenLecture 2017.01 in Russian](https://youtu.be/7pmw5gvWAf8) on YouTube by Illya Klymov ([@xanf](https://github.com/xanf/))
- [Build vue-hackernews-2.0 from Scratch](https://github.com/Detachment/Build-vue-hackernews-2.0-from-scratch) by [@ Detachment](https://github.com/Detachment)
- [Complete Vue.js Application Tutorial - Creating a Simple Budgeting App with Vue](https://matthiashager.com/complete-vuejs-application-tutorial) by [@matthiaswh](https://github.com/matthiaswh)
- [Vue.js Tutorial: A Prerendered, SEO-Friendly Example](https://snipcart.com/blog/vuejs-tutorial-seo-example)
- [Vue.js Introduction For People Who Know Just Enough jQuery To Get By](https://medium.com/@mattrothenberg/vue-js-introduction-for-people-who-know-just-enough-jquery-to-get-by-eab5aa193d77)
- [Fetching Data from a Third-Party API with Vue.js and Axios](https://www.sitepoint.com/fetching-data-third-party-api-vue-axios/)
- [Vue JS: Simultaneously Running Express and Webpack Dev Server](https://medium.com/dailyjs/vue-js-simultaneously-running-express-and-webpack-dev-server-292f4a7ed7a3) on Medium by Henrik Fogelberg
- [Vue JS 2 Tutorials](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa) on Youtube by [The Net Ninja](https://www.thenetninja.co.uk)
- [Add a headless CMS to VueJs in 5 Minutes](https://www.storyblok.com/tp/add-a-headless-CMS-to-vuejs-in-5-minutes)
- [vue 架构中的 Watcher](https://github.com/dengwanc/dengwanc.github.io/issues/11)
- [Migrating from KnockoutJS to VueJS](https://jes.al/2017/05/migrating-from-knockoutjs-to-vuejs/)
- [Create a quiz with Vue.js](https://medium.com/@rap2h/create-a-quiz-with-vue-js-ed1e8e0e8294) by [@rap2h](https://twitter.com/rap2h)
- [Interactive Vue.js Screencasts For Beginners](https://scrimba.com/playlist/playlist-38)
- [Vue.JS ile NASA API'ını Kullanarak Veri Çekme](https://www.youtube.com/watch?v=uC5b2VDATDU) on YouTube
- [Build a realtime chart with VueJS and Pusher](https://blog.pusher.com/build-realtime-chart-with-vuejs-pusher/)
- [Intro to Vue, repo for Frontend Masters Course](https://github.com/sdras/intro-to-vue)
- [Vue Guide on CSS-Tricks](https://css-tricks.com/guides/vue/)
- [Using Typescript in your VueJS app](https://medium.com/coding-blocks/using-typescript-in-your-vue-app-c4aba0bbc8bc)
- [Vue.js 预览](https://ninghao.net/course/4256) on ninghao.net
- [Building a Vue v2 JS app using Vue-router](https://www.liquidlight.co.uk/blog/article/building-a-vue-v2-js-app-using-vue-router/)
- [Build your own carousel with Vue](https://medium.com/@davidatomhernandez/how-to-a-simple-carousel-with-vue-138715d615d7) by [@Atom_Hernandez](https://twitter.com/Atom_Hernandez)
- [Unit Testing Vue.js Components with the Official Vue Testing Tools and Jest](https://alexjoverm.github.io/series/Unit-Testing-Vue-js-Components-with-the-Official-Vue-Testing-Tools-and-Jest/) by [@alexjoverm](https://twitter.com/alexjoverm)
- [Creating Vue.js Transitions & Animation: Live Examples](https://snipcart.com/blog/vuejs-transitions-animations) by [@udyuxdev](https://twitter.com/UdyUXDev)
- [Async in VueJS part 1](https://medium.com/js-dojo/async-in-vue-js-part-1-28d96f751a2e)
- [Async in VueJS part 2](https://medium.com/js-dojo/async-in-vuejs-part-2-45e81c836e38)
- [Using localStorage with Vuex store without a plugin](https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store)
- [Using props for accessing URL parameters within components with Vue Router](https://www.youtube.com/watch?v=ESg0k2zdME4)
- [Deploy Vue.js — SSR(Vuetify) on Production with Pm2 and Nginx](https://medium.com/@kamerk22/deploy-vue-js-ssr-vuetify-on-production-with-pm2-and-nginx-ec7b5c0748a3)
- [Testing Vue Components](https://testingvue.com) on [laracast](https://laracasts.com/series/testing-vue)
- [Building a Full Stack Web App with Vue.js and Express.js](https://www.youtube.com/watch?v=Fa4cRMaTDUI&t=) by [@CodyLSeibert](https://twitter.com/CodyLSeibert)
- [Getting Started with Vue.js](https://sabe.io/tutorials/getting-started-with-vue-js)
- [프론트엔드 개발자를 위한 Vue.js 입문서](https://joshua1988.github.io/web-development/vuejs/vuejs-tutorial-for-beginner/)
- [누구나 다루기 쉬운 Vue.js (Video)](https://www.inflearn.com/course/vue-pwa-vue-js-%EA%B8%B0%EB%B3%B8/) on [Inflearn](https://www.inflearn.com/) by [Captain Pangyo](https://joshua1988.github.io/)
- [Build a Vue.js Blog in 2 hours tops](https://snipcart.com/blog/vuejs-blog-demo#tutorial) on [Snipcart](https://snipcart.com/)
- [Getting Started with Vuex: Managing State in Vue.js](https://sabe.io/tutorials/getting-started-with-vuex)
- [Vue2 ACL using CASL](https://medium.com/@sergiy.stotskiy/vue-acl-with-casl-781a374b987a) by Sergii Stotskyi
- [Vuejs 2.5+ Authentication Tutorial using Auth0](https://www.storyblok.com/tp/how-to-auth0-vuejs-authentication) on Storyblok blog
- [Hygraph introduction guide with Vue](https://hygraph.com/docs/introduction/) on Hygraph
- [Vue.js debugging in Chrome and VS Code](https://github.com/Microsoft/vscode-recipes/tree/master/vuejs-cli) This recipe shows how to use the Debugger for Chrome extension with VS Code to debug Vue.js applications generated by the Vue CLI.
- [Building a movie app interface with Vue.js](https://hackernoon.com/building-a-movie-app-interface-with-vue-js-cdc8aeb5db0b)
- [Let’s Build a Custom Vue.js Router](https://hackernoon.com/lets-build-a-custom-vue-js-router-7de634be87c4)
- [Build a Vue.Js E-Commerce App with ButterCMS Headless Backend](https://snipcart.com/blog/vuejs-ecommerce-headless-buttercms)
- [Developing a Single Page App with Flask and Vue.js](https://testdriven.io/developing-a-single-page-app-with-flask-and-vuejs)
- [Accepting Payments with Stripe, Vue.js, and Flask](https://testdriven.io/accepting-payments-with-stripe-vuejs-and-flask)
- [API Driven Development With Laravel and VueJS (Free Course)](https://serversideup.net/courses/api-driven-development-laravel-vuejs/) on serversideup.net
- [Managing State in Vue.js](https://medium.com/fullstackio/managing-state-in-vue-js-23a0352b1c87)
- [Heartbeat (Vue + NW.js Desktop app Video series)](https://www.youtube.com/playlist?list=PLmJs3lfUmCdT9MyG60Oo6HM7xAn79vwZ0) アレックス・マルテネスによる（2017 - 2020）
- [Firebase Server-Side Render Vue Apps with Nuxt.js (Server-side Rendering with JavaScript Frameworks)](https://www.youtube.com/watch?v=ZYUWsjUxxUQ)
- [Firebase Measuring Vue SSR Performance with Nuxt.js (Server-side Rendering with JavaScript Frameworks)](https://www.youtube.com/watch?v=Y5XX2lruhxs)
- [Creating an interactive map with D3 and Vue](https://dev.to/denisinvader/creating-an-interactive-map-with-d3-and-vue-4158) (October 2018)
- [The guide to write universal, SSR-ready Vue components](https://blog.lichter.io/posts/the-guide-to-write-universal-ssr-ready-vue-compon)
- [Vue.js Fundamentals](https://vueschool.io/courses/vuejs-fundamentals)
- [Vuex for Everyone](https://vueschool.io/courses/vuex-for-everyone)
- [Vue.js Form Validation](https://vueschool.io/courses/vuejs-form-validation)
- [The Vue.js Master Class](https://vueschool.io/courses/the-vuejs-master-class)
- [Vue.js Firebase Realtime Database](https://vueschool.io/courses/vuejs-firebase-realtime-database)
- [Vue.js Firebase Authentication](https://vueschool.io/courses/vuejs-firebase-authentication)
- [Dynamic Forms with Vue.js](https://vueschool.io/courses/dynamic-forms-vuejs)
- [Custom Vue.js Directives](https://vueschool.io/courses/custom-vuejs-directives)
- [Building an Electron File Explorer with Quasar (and Vue)](https://medium.com/quasar-framework/building-an-electron-file-explorer-with-quasar-and-vue-7bf94f1bbf6) by [@hawkeye64](https://github.com/hawkeye64). (November 2018)
- [Build Web Apps with Vue JS 2 & Firebase](https://www.udemy.com/build-web-apps-with-vuejs-firebase/learn/v4/overview) on `Udemy` by [the Net Ninja](https://www.thenetninja.co.uk/)
- [Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview) on `Udemy` by Maximilian Schwarzmüller
- [Vue for Designers](https://designcode.io/vue) by Design+Code (February 2019)
- [How to Dynamically Add a Class Name in Vue](https://michaelnthiessen.com/dynamically-add-class-name/) by Michael Thiessen
- [Build a Library web application with Vue JS, Node JS, and SQL or MongoDB using ScaffoldHub](https://www.youtube.com/watch?v=FdC4Mjljd3k) By Felipe Lima [@scaffoldhub_io](https://twitter.com/scaffoldhub_io)
- [Building a Realtime Location tracking app with NativeScript + Vue](https://medium.com/saibbyweb/building-a-real-time-location-tracking-app-with-nativescript-vue-under-350-lines-of-code-8b51ad40d657) by Saibbyweb
- [Vue: Getting Started, by John Papa](https://www.pluralsight.com/courses/vue-getting-started) on [Pluralsight](https://www.pluralsight.com)
- [Building a Simple Pre-Rendered Web App Using Vue + Nuxt](https://mtlynch.io/simple-vue-pre-rendered/) by Michael Lynch
- [Vue and GraphQL with Hasura video course](https://dev.to/hasurahq/vue-and-graphql-with-hasura-video-course-3mpp)
- [Frontend and Fullstack VENM-stack coding tutorials by RabbitWerks JavaScript](https://www.youtube.com/c/rabbitwerksjavascript)
- [Nordschool Vue Tutorials](https://nordschool.com/tag/vue)
- [Vue Props Validation - Best Practices](https://nordschool.com/vue-props/)
- [Vue Router - The Complete Guide](https://nordschool.com/vue-router/)
- [Enable VS Code Debugger for Nuxt & Typescript](https://nordschool.com/enable-vs-code-debugger-for-nuxt-and-typescript/)
- [Create A Blog With Gridsome & Vue](https://nordschool.com/create-a-blog-with-gridsome-and-vue/)
- [Building an Imgur Clone with Vue.js and Serverless](https://tutorialedge.net/projects/building-imgur-clone-vuejs-nodejs/)
- [Building a HackerNews clone in Vue.js on AWS](https://tutorialedge.net/projects/hacker-news-clone-vuejs/)
- [Build Your First Vue.js App in About 30 Minutes](https://raddevon.com/articles/build-your-first-vue-js-app/) by Rad Devon (Video, February 2020)
- [How to make your components dynamic in Vue JS](https://blog.logrocket.com/how-to-make-your-components-dynamic-in-vue-js/) (September 2019)
- [Fragments in Vue JS](https://blog.logrocket.com/fragments-in-vue-js/) (December 2019)
- [Build a movie search app using the Vue Composition API](https://dev.to/blacksonic/build-a-movie-search-app-using-the-vue-composition-api-5218)
- [Vue Testing Crash Course](https://dev.to/blacksonic/vue-testing-crash-course-59kl)
- [Sharing and re-using Vue Mixins in the cloud with Bit.dev](https://blog.bitsrc.io/sharing-and-reusing-vue-mixins-in-the-cloud-with-bit-dev-830104a48d0b) (May 2019)
- [Using Watchers in Vue JS](https://blog.bitsrc.io/introducing-watchers-in-vue-js-d3efd4f4e726) (June 2019)
- [Understanding Filters in Vue JS](https://blog.bitsrc.io/understanding-filters-in-vue-js-7a53b1521dce) (June 2019)
- [Form Validation In VueJS Using Yup](https://vijitail.dev/blog/form-validation-in-vue-using-yup) by [Vijit Ail](https://vijitail.dev/) (May 2020)
- [Use Vue.js to Rewrite React's Official Tutorial Tic Tac Toe](https://chanvinxiao.com/blog/vuejs-tic-tac-toe/) By [Chanvin Xiao](https://github.com/vinzid)
- [Can we use Python with Vue.js or Vue and Django or Flask?](https://vue-view.com/can-we-use-python-with-vue-js-or-vue-and-django-or-flask/)
- [MDN - Vue tutorials](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks#Vue_tutorials)
- [Learn Vue 3 for Beginners - Full 2020 Tutorial Course](https://www.youtube.com/watch?v=ZqgiuPt5QZo&ab_channel=TheEarthisSquare) on Youtube
- [Vue 3 Composition Api Introduction - Full Tutorial](https://www.youtube.com/watch?v=bwItFdPt-6M)
- [Building a VueJS chat app with realtime storage of messages in Airtable](https://ably.com/blog/airtable-database-realtime-messages) by Srushtika Neelakantam (December 2020)
- [Building a realtime quiz with VueJS using a starter kit](https://github.com/ably-labs/realtime-quiz-framework/blob/main/TUTORIAL.md) by Srushtika Neelakantam (October 2020)
- [Make an Heart clicker with vue.js and firebase](https://dev.to/venatus/tutorial-make-an-heart-clicker-with-vue-js-and-firebase-3npe)
- [Vue.js Debugging: A Guide to Fixing Your Frontend](https://snipcart.com/blog/vuejs-debugging) - Vue.jsデバッグの基礎と、アプリケーションのフロントエンドを修正する手順を解説するガイド
- [Help you learn more efficiently vue3 source code - mini-vue](https://github.com/cuixiaorui/mini-vue) by cuixiaorui
- [Vue.js SPA: Build a Powerful E-Commerce App](https://snipcart.com/blog/building-a-vuejs-spa)
- [Learning Vue 3.0](https://github.com/chengpeiquan/learning-vue3)
- [Vue 3.0 and decentralized app (dApp)](https://github.com/hypescale/moralis-vue-boilerplate)
- [Add a prebuilt video chat widget to any Vue app with daily-js](https://www.daily.co/blog/build-a-video-chat-app-with-vue-and-daily-prebuilt/) by Jess Mitchell, via Daily (August 2021)
- [Build a custom video chat app with daily-js and Vue](https://www.daily.co/blog/custom-video-chat-app-with-daily-and-vue/) by Jess Mitchell, via Daily (November 2021)
- [Vue Pwa: Build a Progressive Web Application With Nuxt](https://snipcart.com/blog/vue-pwa-development) on Snipcart
- [Meteor + Vue](https://www.youtube.com/playlist?list=PLmJs3lfUmCdS8W27OoWj3uGDP6g4ypNyw) Youtube playlist by Axel Martínez
- [Introduction to Vue (Spanish)](https://scrimba.com/playlist/pDzVxUd) Scrimba mini-course in Spanish.
- [Intro to Vue 3](https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3) - Vue MasteryによるVue 3の無料コース：直感的な説明付き
- [Developing a web application with Vue.js 3 and Vite.js (French)](https://mickael-baron.fr/web/vuejs-miseenoeuvre-part2) par Mickael Baron
- [Deploying a web application powered by Vue.js 3 with Docker (French)](https://mickael-baron.fr/web/vuejs-deploiement-part3) par Mickael Baron
- [Advantages of Vue.js over React, Angular, and other frameworks in Turkish](https://medium.com/@dev.isasari/vuejsin-react-ve-angular-a-g%C3%B6re-avantajlar%C4%B1-6fe1d653beb1) by İsa Sarı
- [Türkçe Vue 3 Dersleri](https://www.youtube.com/playlist?list=PLf-6qk7szL-J4a7xaGf2TbW0p_cGbeMe7) on Youtube by Abdullah Uğraşkan
- [宁皓网独立开发者训练营：Vue 前端应用开发](https://www.bilibili.com/video/BV11z42167J2/) on bilibili
- [Getting Started Internationalizing (i18n) with Intlayer and Vite and Vue](https://intlayer.org/doc/environment/vite-and-vue)
- [Creating a scalable Monorepo for Vue](https://dev.to/nagell/creating-a-scalable-monorepo-for-vue-intro-4nnm) by [@nagell](https://github.com/nagell)

### サンプル <a id="examples"></a>

- [Vue 2048 (Vue + Webpack)](https://pengfu.github.io/vue-2048/) by [@pengfu](https://github.com/pengfu): Popular 2048-Game implemented using Vue,Webpack,Sass,ES6
- [**easy-vue**](https://github.com/TIGERB/easy-vue) a easy example using the vue to implement easy web with vue 2.0, vuex 2.0, vue-router 2.0, vue-infinite-scroll 2.0, vue-progressbar 2.0 by [TIGERB](https://github.com/tigerb)
- [Vue.js with Sails.js example project](https://github.com/ndabAP/vue-sails-example) - このプロジェクトは、シングルページアプリケーションに初めて触れる人向けで、実際の例を通じて学習するためのものです。
- [**Vue.js & Pyramid web framework app**](https://github.com/eddyekofo94/pyramidVue.git) - Pylons PyramidウェブフレームワークバックエンドとVue.js、webpack2、vue-router、yarn（パッケージマネージャー）を用いたボイラプレート
- [vue-feathers-chat](https://github.com/ErickPetru/vue-feathers-chat) A sample realtime chat made with Vue in frontend and Feathers in backend, but using just Socket.IO-Client for the communication
- [vue-xplan](https://github.com/JackGit/xplan/) A rotating earth demo page created with Vue and three.js
- [**vueSocketChatRoom**](https://github.com/Chanran/vueSocketChatroom) A socket chat room using vue2.x,vuex2.x,vue-router2.x,vux2.x,socket.io
- [vue-tetris (Use Vue, Vuex, Immutable to code Tetris)](https://binaryify.github.io/vue-tetris/) by [@Binaryify](https://github.com/Binaryify): Use Vue, Vuex, Immutable to code Tetris.
- [route-planner-vue](https://kasheftin.github.io/route-planner-vue/) by [@Kasheftin](https://github.com/Kasheftin): The tool for planning routes with multiple sortable layers, draggable directions, markers and shapes on google map.
- [VueJS Example Projects](https://github.com/vue-project) on Github
- [Vue Weather Notifier](https://github.com/sdras/vue-weather-notifier) A small sample animation app with SVG and Vuex
- [X-Flowchart-Vue](https://github.com/OXOYO/X-Flowchart-Vue) - SVGとVueを用いたフローチャートエディタ
- [koa-vue-notes-web](https://github.com/johndatserakis/koa-vue-notes-web) - Koa 2.3をバックエンド、Vue 等2.4をフロントエンドに使用した、詳細なSPA。ユーザー認証コンポーネント、ユーザーのノートに対するCRUD操作、およびVuexストアモジュールを含む。
- [vue-vuex-todomvc](https://github.com/bahmutov/vue-vuex-todomvc) - TodoMVCのVue.jsアプリ例にVuexストアとRESTによるサーバーバックエンド、およびE2Eテストの完全セットを[Cypress.io](https://www.cypress.io/)テストランナーで実現したアプリ
- [X-WebDesktop-Vue](https://github.com/OXOYO/X-WebDesktop-Vue) - VueをベースとしたWebDesktopシステム
- [Skeleton Vue+TypeScript](https://github.com/SierraSoftworks/vue-template) - TypeScript、VueJS、ElementUI、Vue Router、Vuex、Material Icons、BrowserSync、Dockerfile
- [Vue Design System](https://github.com/viljamis/vue-design-system) - Vue.jsを用いたUIデザインシステムの構築用オープンソースボイラプレート
- [Vuejs Examples](https://vuejsexamples.com/)
- [Laravel + Nuxt.js boilerplate](https://github.com/acidjazz/laranuxt) - [@acidjazz](https://github.com/acidjazz)によって
- [vue-stack-cesium](https://github.com/meschg/vue-stack-cesium) - [CesiumJS](https://cesium.com/cesiumjs/)とVueのすべての素晴らしい機能を含む最小限のサンプル設定プロジェクト。このプロジェクトには、特定のパッケージを組み合わせて使用するための多くの例が含まれています
- [vuemoji-picker](https://github.com/wobsoriano/vuemoji-picker) - Vue 2およびVue 3用の軽量エモジピッカー
- [Maxim Web Chat](https://github.com/maxim-top/maxim-web) - flooによるIM SDK（美信拓扑IM SDK）を使用したチャットデモアプリの例 [MaximTop](https://www.maximtop.com)
- [umo editor](https://github.com/umodoc/editor) - Umo EditorはVue3とTiptapに基づくオープンソースドキュメントエディタです。 [Playground](https://demo.umodoc.com/editor?lang=en-US)にアクセスして高速な体験を楽しんでください
- [Vitesse Starter](https://github.com/antfu/vitesse) ⛺️ Vue 3 starter inclode ( Layouts | i18n | UnoCSS | pinia | Markdown | Dark Mode | PWA | SSG | Component Auto-Importing | File-Based Router | Composition API | TypeScript)
- [Vitesse-lite Starter](https://github.com/antfu/vitesse-lite) ⛺️ Lightweight version of Vitesse (Vue 3 Starter)
- [Vue Tic Tac Toe | Cerito Cruz](https://github.com/EduardoProfe666/cerito-cruz-vue) by [@EduardoProfe666](https://github.com/EduardoProfe666): Popular Tic-Tac-Toe-Game with extra features using Vue 3, Vite, TypeScript, Tailwind, Gsap, Howler, Headless UI and Vue Use
- [i18n boilerplate Intlayer + Vue 3 + Vite](https://github.com/aymericzip/intlayer-vite-vue-template)
- [tab-toolkit](https://github.com/mioe/tab-toolkit) - 初心者ギタリスト向けの非常に小さなアプリツール 🎸 (PWA | Pinia | UnoCSS) by [@mioe](https://github.com/mioe)

### 書籍 <a id="books"></a>

- [The Majesty Of Vue.js 2](https://leanpub.com/vuejs2) by Alex Kyriakidis and Kostas Maniatis, Leanpub. (Mar 2017)
- [Vue.js in Action](https://www.manning.com/books/vue-js-in-action) by Erik Hanchett and Benjamin Listwon (Spring 2018)
- [Testing Vue.js Applications](https://www.manning.com/books/testing-vuejs-applications) by Edd Yerburgh (Summer 2018)
- [Front-end com Vue.js](https://www.casadocodigo.com.br/products/livro-frontend-vue) by Leonardo Vilarinho, Casa do Código. (November 2017)
- [Full-Stack Vue.js 2 and Laravel 5](https://www.packtpub.com/application-development/full-stack-vuejs-2-and-laravel-5) by Anthony Gore, Packt. (December 2017)
- [Fullstack Vue: The Complete Guide to Vue.js](https://www.fullstack.io/vue/) by Hassan Djirdeh, Nate Murray, & Ari Lerner. (March 2018)
- [Vue.js 2 Design Patterns and Best Practices](https://www.amazon.com/dp/178883979X) by Paul Halliday, Packt. (March 2018)
- [Vuex Quick Start Guide](https://www.amazon.com/dp/1788999932) by Andrea Koutifaris, Packt. (April 2018)
- [Full-Stack Web Development with Vue.js and Node](https://www.amazon.com/Full-Stack-Web-Development-Vue-js-Node/dp/1788831144) by Aneeta Sharma, Packt. (May 2018)
- [The Vue Handbook](https://vuehandbook.com) by Flavio Copes. (July 2018)
- [ASP.NET Core 2 and Vue.js](https://www.amazon.com/dp/1788839463) by Stuart Ratcliffe, Packt. (July 2018)
- [Vue.js: Construa aplicações incríveis](https://www.casadocodigo.com.br/products/livro-vue) by Caio Incau, Casa do Código. (September 2017)
- [Getting to Know Vue.js](https://www.apress.com/us/book/9781484237809) by Brett Nelson, Apress. (August 2018)
- [Vue.js Component Patterns Course](https://fdietz.de/pages/vue-component-patterns-course/) by Frederik Dietz (April 2019)
- [Building Forms with Vue.js](https://www.packtpub.com/business-other/building-forms-with-vue-js?utm_source=Vuejs.org&utm_medium=referral&utm_campaign=OutreachB15411) by Marina Mosti (October 2019)
- [Vue.js](https://www.amazon.com/Vue-js-Actionable-Chris-Minnick/dp/1951959019) by Chris Minnick and Nat Dunn, Webucator (February, 2020)
- [Become a Ninja with Vue 3](https://books.ninja-squad.com/vue) by Cédric Exbrayat (English and French versions) (May, 2020)
- [Large Scale Apps with Vue 3 and TypeScript](https://leanpub.com/vue-typescript/c/vaYXLEFWbMi7) Damiano Fusco, Leanpub (September, 2020)
- [Vue - The Road To Enterprise](https://theroadtoenterprise.com/?utm_source=github&utm_medium=vue-awesome&utm_campaign=vue_the_road_to_enterprise) Thomas Findlay (January, 2021)
- [Accessible Vue – Get started with Accessibility in Vue.js!](https://accessible-vue.com) by Marcus Herrmann (March 2021)
- [Building a Strapi E-Commerce: Nuxt.js Tutorial & Live Demo](https://snipcart.com/blog/strapi-ecommerce-nuxtjs-tutorial) (September 2021)

### ブログ記事 <a id="blog-posts"></a>

- [Vue x Hasura GraphQL](https://medium.com/@malgamves/vue-x-hasura-graphql-d66f585a3ba5)
- [Using GraphQL Mutations in Vue.js](https://medium.com/@malgamves/using-graphql-mutations-in-vue-js-3b4570234edf)
- [Learn How To Build A Data-Driven Search UI with Vue.JS](https://medium.appbase.io/learn-how-to-build-a-github-search-explorer-app-with-vue-js-c66f61d6e152)
- [Using GitLab CI/CD to auto-deploy your Vue.js application to AWS S3](https://medium.com/@croo/using-gitlab-ci-cd-to-auto-deploy-your-vue-js-application-to-aws-s3-9affe1eb3457)
- [Dockerizing a Vue App](https://mherman.org/blog/dockerizing-a-vue-app/)
- [Deploying a Flask and Vue App to Heroku with Docker and Gitlab CI](https://testdriven.io/blog/deploying-flask-to-heroku-with-docker-and-gitlab/)
- [Large-scale Vuex application structures](https://medium.com/3yourmind/large-scale-vuex-application-structures-651e44863e2f)
- [Composing computed properties in Vue.js](https://medium.com/@kevin_peters/composing-computed-properties-in-vue-js-87b4507af079)
- [Learn how to refactor Vue.js Single File Components with a real-world example](https://medium.com/@kevin_peters/learn-how-to-refactor-vue-js-single-file-components-on-a-real-world-example-501b3952ae49)
- [Get Started Writing Class-based Vue.js Apps in TypeScript](https://www.sitepoint.com/class-based-vue-js-typescript)
- [Vue.js with TypeScript](https://johnpapa.net/vue-typescript) by [John Papa](https://johnpapa.net/about/)
- [Guide to Unit Testing Vue Components](https://testdriven.io/blog/vue-unit-testing/)
- [Realtime chat App with Vue and Hasura ](https://dev.to/hasurahq/realtime-chat-app-with-vue-and-hasura-202h)
- [Vue vs React: Which is the better framework?](https://buttercms.com/blog/vue-vs-react-which-is-the-better-framework)
- [Building a Beautiful Animated News App with Vue.js and Vuetify](https://buttercms.com/blog/build-a-beautiful-animated-news-app-with-vuejs-and-vuetify)
- [Comparing Angular vs Vue](https://buttercms.com/blog/comparing-angular-vs-vue)
- [Vue vs. React – Which Should You Pick For Your Next Web Project?](https://www.ideamotive.co/blog/vue-vs-react?utm_source=github.com&utm_medium=social&utm_campaign=vue-vs-react)
- [Vue.js from scratch series](https://www.youtube.com/playlist?list=PLLhEJK7fQIxDWDJEyeT68wT8ZroODeRuw) on YouTube by Paris Nakita Kejser
- [10 Quick-Fire Vue Interview Questions](https://medium.com/javascript-in-plain-english/10-quick-fire-vue-interview-questions-3c16d14a3b51)
- [VueJS Admin Template](https://themeselection.com/vuejs-admin-template/) - 素晴らしいオープンソースおよびプレミアムVueJSの管理テンプレートのコレクション。

### コース <a id="courses"></a>

- [Learn Vue by Building and Deploying a CRUD App](https://testdriven.io/courses/learn-vue/) - このコースは、テストドリブン開発（TDD）を用いてウェブアプリケーションを構築・テストすることで、Vueの基本を教えるものです。
- [Advanced Vue.js Features from the Ground Up](https://frontendmasters.com/courses/advanced-vue/) - アクセス性の高いルーティング、状態管理、フォームバリデーション、国際化ライブラリをゼロから構築する方法を学びましょう！
- [Become a Ninja with Vue 3](https://vue-exercises.ninja-squad.com) - このコースは、Vue CLI、TypeScriptおよびComposition APIを用いて、Vue 3で完全なアプリケーションをステップバイステップで構築する方法を教えます。各演習には指示とテストがあり、コードの100％を確認できます。

### ドキュメンタリー <a id="documentaries"></a>

- [Vue.js: The Documentary](https://www.youtube.com/watch?v=OrxmtDw4pVI) by Honeypot (Feb 2020)

## Vue.jsを利用する企業 <a id="companies-using-vuejs"></a>

- [Companies Using Vue/Nuxt](https://github.com/cloydlau/companies-using-vue)

## Vue.jsを利用するプロジェクト <a id="projects-using-vuejs"></a>

### オープンソース <a id="open-source"></a>

- [npmcharts.com](https://github.com/cheapsteak/npmcharts.com) - npmパッケージを比較し、ダウンロードトレンドを確認します。
- [Koel](https://github.com/phanan/koel) - 個人用の音楽ストリーミングサーバーが動作するもの。
- [astralapp](https://github.com/astralapp/astral) - GitHubのスターを簡単に整理できます。
- [PJ Blog](https://github.com/jcc/blog) - LaravelとVue.jsで構築されたオープンソースブログ
- [OpenAPI 3 viewer](https://github.com/koumoul-dev/openapi-viewer) - OpenAPI 3.0仕様で記述されたREST APIをブラウズおよびテスト
- [nativescript-vue](https://github.com/rigor789/nativescript-vue) - NativeScriptレンダラーのVue.js実装
- [Paper-Dashboard](https://github.com/creativetimofficial/vue-paper-dashboard) -Creative Tim Paper Dashboard made for Vue
- [CoreUI Vue Admin Template](https://github.com/coreui/coreui-free-vue-admin-template) - Vue.jsをベースにしたオープンソースアドミンテンプレート
- [vuejs-extension-pack vscode](https://github.com/mubaidr/vuejs-extension-pack) - VSCode用の拡張パッケージで、Vue.js開発に必要な人気VS Code拡張機能を提供。
- [Wiki.js](https://github.com/Requarks/wiki) - NodeJS、Git、Markdownをベースにした現代的で軽量かつ強力なWikiアプリ
- [peregrine-cms](https://github.com/headwirecom/peregrine-cms) - Vue.js と Apache Sling をベースにしたヘッドオプショナル CMS
- [Light Bootstrap Dashboard](https://github.com/creativetimofficial/vue-light-bootstrap-dashboard) - Creative Tim が Vue 用に開発したライトな Bootstrap ダッシュボード
- [vue-storefront](https://github.com/DivanteLtd/vue-storefront) - Vue.js ストアフォント - エコシステム向け PWA。完全オフライン対応、プラットフォームに依存しない、ヘッドレス、Magento2 対応
- [Laravel Enso](https://github.com/laravel-enso/enso) - Bulma、VueJS および Laravel を使用した SPA アドミンパネル。本体に多数の機能を搭載。
- [Hubble](https://hubble.js.org) - :telescope: GitHub Stars の歴史をたどる
- [Vuepress](https://vuepress.vuejs.org/) - シンプルな Vue を活用した静的サイトジェネレーター
- [Socialhome](https://github.com/jaywink/socialhome) - ソーシャルネットワーキング機能を備えた、連携型豊かなプロフィールビルダー
- [chrome-ribbon-reminder](https://github.com/johndatserakis/chrome-ribbon-reminder) - Vue と Async/Await を使用した Chrome エクステンション。ポップアップ表示を用い、バッジ数を変更。
- [Faviator](https://www.faviator.xyz/) - シンプルで使いやすい favicon 生成ツール
- [Minimal Notes](https://github.com/vladocar/Minimal-Notes) - Vue.js を使用したウェブアプリ
- [Stack Edit](https://github.com/benweet/stackedit/) - ブラウザ内 Markdown エディタ
- [Bael Blog Template](https://bael-theme.jake101.com/) - Netlify CMS をバックエンドとして、Netlify でホスティングする静的ブログテンプレート。ブラルズティスなデザイン、ふわっとした検索、サーバレスメール登録なども備えている。
- [Buefy Shop](https://github.com/14nrv/buefy-shop) - オープンソースのサンプルショップ。Nuxt、Stripe、Firebase、Bulma、サーバレス関数で構成。
- [Carpoolear](https://github.com/STS-Rosario/carpoolear) - アルゼンチンのカーポールングアプリケーション向けのオープンソースVue.jsフロントエンド（モバイルおよびCordovaアプリ）： [Carpoolear](https://carpoolear.com.ar)
- [Vue E-Store Templet](https://github.com/rash0/Vue-Ecom) - vue/vuex/vue-router と bootstrap4 を使用したエコシステム用テンプレート
- [Twill](https://twill.io) - Laravel 用のオープンソース CMS ツールキット。開発者が、直感的で強力で柔軟なカスタムアドミンコンソールを迅速に構築できるように支援。
- [Vue Org Chart](https://github.com/Hoogkamer/vue-org-chart) - インタラクティブな組織図（orgchart）の管理と公開。無料で、Webサーバー不要。
- [Thermal](https://thermal.codecarrot.net) - すべての Git リポジトリを一括管理。
- [QMK Configurator](https://github.com/qmk/qmk_configurator) - QMK フォームのキーボード設定 UI（Vue.js で構築）。
- [Daily](https://github.com/dailynowco/daily) - あなたの新タブにデベロッパー向けニュースを配信。👩🏽‍💻
- [Laravel File Manager](https://github.com/alexusmai/laravel-file-manager) - Laravel 用の強力なファイルマネージャー
- [Vue Crypto Dashboard](https://github.com/JayeshLab/vue-crypto-dashboard) - Vue.jsで作成された暗号通貨ダッシュボード
- [Vue Expenses](https://github.com/simplyvinay/vue-expenses) - Vue.js、VuetifyおよびASP.NET Coreを使用した支出トラッキングアプリ
- [Akaunting](https://github.com/akaunting/akaunting) - LaravelとVueJSをベースにした、小規模事業者やフリーランス向けの無料オンライン会計ソフトウェア
- [MQTTX](https://github.com/emqx/MQTTX) - Vue.js、TypeScriptおよびElectronで構築されたクロスプラットフォームMQTT 5.0デスクトップクライアント
- [Pychat](https://github.com/akoidan/pychat) - セルフホスト型WebRTC視聴チャット（Slackの代替案）
- [CodeceptJS UI](https://github.com/codecept-js/ui) - ✔️ CodeceptJSのエンドツーエンドテストに使えるCypress風UI ✔️
- [LeagueStats](https://github.com/vkaelin/LeagueStats) - オンラインゲーム『リーグオブレジェンズ』のプレイヤー向けの統計サイト
- [Savycart](https://github.com/itsalb3rt/savycart-app) - スーパーマーケットへ行くために紙とペンを使わずに個人購入をトラッキングできるPWA 🏬 VueとVuetify
- [Afterman](https://github.com/itsalb3rt/afterman) - 🌕 PostmanコレクションからMarkdownおよびHTMLで美しいドキュメントを作成。Quasar Frameworkを使用
- [LogChimp](https://github.com/logchimp/logchimp) - 顧客からのフィードバックを追跡し、より良い製品を構築するためのオープンソースソフトウェア
- [Yacht](https://github.com/Selfhostedpro/Yacht) - Vuetifyを使用したDockerコンテナ管理WebUI。Dockerコンテナとプロジェクトの管理を簡単に行うためのツール
- [Antares SQL](https://github.com/Fabio286/antares) - シンプルかつ完全なクロスプラットーンSQLクライアント
- [Bagisto](https://github.com/bagisto/bagisto) - すべての事業者向けに構築された無料かつオープンソースのLaravelエコノミクスフレームワーク。ビジネスの構築と拡張を可能にします
- [GrandNode 2.0](https://github.com/grandnode/grandnode2/) - .NET Core 5.0およびMongoDB／Azure CosmosDB／Amazon DocumentDB／VueJSをベースにしたオープンソースのクロスプラットフォームEコマースソリューション
- [Aimeos](https://github.com/aimeos/aimeos) - Laravelエコノミクスフレームワークのリーダー。1から1,000,000,000件以上のアイテムまでスケーラブルな超高速オンラインショップやマーケットプレイス、複雑なB2Bアプリケーションを構築可能
- [XIV ToDo](https://github.com/bourgeoisor/xivtodo) - Final Fantasy XIVのためのダッシュボード、完了トラッカー、カスタマイズされた週間および日間チェックリスト、ツール
- [Interface X](https://github.com/empathyco/x) - UIの検索・発見コンポーネントで、美しい検索体験を迅速に構築
- [Balancer](https://github.com/balancer-labs/frontend-v2) - Ethereum上で動作する分散型金融アプリ
- [Materio Free Vuetify VueJS Laravel Admin Template](https://github.com/themeselection/materio-vuetify-vuejs-laravel-admin-template-free) - エレガントなデザインとユニークなレイアウトを備えたオープンソースかつ使いやすいVuetify Vuejs Laravel管理テンプレート
- [Dashy](https://github.com/lissy93/dashy) - セルフホスト型スタートページ。使いやすい視覚エディタ、ステータス確認、テーマ、ウィジェットなど、多数の機能を備えています
- [FAIRshare](https://github.com/fairdataihub/FAIRshare) - 適用可能なFAIRガイドラインに従って、生物医学研究データとソフトウェアを共有
- [Snippets.Ninja](https://github.com/dd3v/snippets.ninja) - コードスニペット管理用のプログレッシブウェブアプリ。オフライン優先。オープンソース。アプリはIndexedDBを使用してローカルストレージを実現。
- [ZuiOJ](https://github.com/DaZuiZui/ZuiOJ) - Vue2のUIを用いて開発されたZuiOJシステム
- [vue-paho-mqtt](https://github.com/kaandesu/vue-paho-mqtt) - Vue 3向けに使いやすいPaho MQTTクライアントライブラリ。中央集約されたサブスクリプション管理、型サポート、および内蔵のオプションアラート通知ライブラリを備えている
- [VueFinder File Library](https://github.com/n1crack/vuefinder) - ウェブファイルマネージャーライブラリ
- [Overlay](https://github.com/os-scar/overlay) - 開発者がオープンソースパッケージを選択する前に評価できるブラウザ拡張機能
- [activist.org/](https://activist.org/) - 非営利活動プラットフォーム
- [MYDY Dashboard](https://github.com/pyramide-agency/mydy-dashboard) - AIアシスタント、カンバンボード、時間記録、Telegramミニアプリ統合を備えた、セルフホスト型の個人の生産性および財務管理ダッシュボード。Nuxt 4とLaravel 1、11を使用して構築。
- [Sneat Free Vuetify VueJS Admin Template](https://themeselection.com/item/sneat-free-vuetify-vuejs-admin-template/) - レスポンシブウェブアプリ開発用の最高品質の無料VueJS管理テンプレート
- [slidev](https://github.com/slidevjs/slidev) - 開発者向けプレゼンテーションスライド
- [YesPlayMusic](https://github.com/qier222/YesPlayMusic) - 見た目が美しい第三者のNetEaseクラウドプレイヤー。Windows / macOS / Linuxに対応 :electron:
- [douyin](https://github.com/zyronon/douyin) - TikTokを模倣した、Vueでのモバイル開発ベストプラクティス
- [MyIP](https://github.com/jason5ng32/MyIP) - すべてのIPツールを一括で提供。IPの確認、IPの地理位置情報、DNSリークチェック、WebRTC接続の確認、スピードテスト、pingテスト、MTRテスト、ウェブサイトの可用性確認など、さまざまな機能を提供。
- [fylepad](https://github.com/imrofayel/fylepad) - 強力な富テキスト編集機能を備えたノートアプリ。Vueで構築。
- [fresfolio](https://github.com/dkioroglou/fresfolio) - 個人および研究プロジェクトの管理に使えるブラウザベースのノートアプリ。バックエンドはFlask、フロントエンドはVue.jsで構成。UIコンポーネントとレスポンシブデザインはQuasarフレームワークを使用。
- [FavBox](https://github.com/dd3v/favbox) - タグ、検索、重複・破損リンクの検出をサポートする、ローカル優先型のブラウザ拡張機能。Vue 3、Vite、IndexedDBで構築。

- [JARVIS](https://github.com/hyhmrright/JARVIS) - Vue 3のフロントエンド、Piniaの状態管理、TypeScript、リアルタイムSSEストリーミングチャットを備えたセルフホスト型AIアシスタントプラットフォーム。バックエンドはFastAPIで、LangGraph ReActアグエント、RAG知識ベース、マルチLLMサポート（DeepSeek/OpenAI/Anthropic）、プラグインSDKを備えている。
- [Simple IoT](https://github.com/dingdaoyi/simple-iot) - Vue 3 + Element Plusの管理SPAを用いた、シングルバイナリのセルフホスト型IoTプラットフォーム。視覚的なドラッグアンドドロップルールエンジン、リアルタイムデバイスダッシュボード（ECharts）、ホットロードプロトコルスクリプト、MQTTブローカーを内蔵。Spring Boot 4バックエンド。ThingsBoard CEの軽量代替。
- [MarkerOn](https://github.com/ifer47/markeron) - Tauri v2、Vue 3、Canvas APIを用いて構築された軽量なスクリーンアノテーションツール。デスクトップ上のどこでも描画、強調、アノテーションが可能。

### 商用製品 <a id="commercial-products"></a>

- [Wijmo](https://wijmo.com/products/wijmo-5/) - VueJS対応のUIコントロール一覧
- [ChatWoot](https://www.chatwoot.com/) - Facebook メッセージ上でライブチャットとアグリーティブの協働
- [VueA](https://themeforest.net/item/vuejs-laravel-admin-template/20119122?ref=jyostna&utm_source=awesomevue) - VueJSの管理テンプレート（複数レイアウト）およびLaravelバージョン
- [EducationLink](https://geteducation.link/?utm_source=AwesomeVue) - 教育関連のアグリーティブや大学向けCRMおよび販売自動化
- [Pragmatic v2.0](https://1.envato.market/LYWqL) - Vue.jsとElementで構築されたレスポンシブかつ設定可能な管理テンプレート
- [Moonitor](https://moonitor.io/) - デスクトップ用の暗号資産トレーサー
- [Deskree](https://deskree.com/) - アイデア、タスク、問題を一つの場所に統合したオンライン協働プラットフォーム
- [ScaffoldHub](https://www.scaffoldhub.io) - VueJSとNodeJS、MongoDBまたはSQLを用いたオンラインWebアプリ生成ツール
- [Commandeer](https://getcommandeer.com) - クラウド管理の再構築。Vue.jsとElectronで構築されたデスクトップクラウド管理アプリ
- [Leave Dates](https://leavedates.com) - 従業員の休暇を追跡する強力な新しい方法
- [vREST NG](https://ng.vrest.io) - VueJSとElement UIで構築された自動APIテスト用エンタープライズアプリ
- [Coloban](https://www.coloban.com) - チャット、カンバン、ギャンツチャート、電話、スクリーン共有など、多数の機能を備えた一括プロジェクト管理ツール
- [NxShell](https://github.com/nxshell/nxshell) - ElectronとVueJSに基づいた使いやすいSSH用ターミナル
- [Materio Vuetify VueJS Admin Template](https://themeselection.com/products/materio-vuetify-vuejs-admin-template/) - 最も強力で開発者向け、生産性に優れ、包括的なVuetify VueJS管理テンプレート
- [NocoDB](https://github.com/nocodb/nocodb) - オープンソースのAirtableの代替ツール
- [He3](https://he3.app) - 無料かつ現代的な開発者用ユーティリティツールボックス
- [RunJS](https://runjs.app) - コードをタイプするたびに評価し、即時フィードバックを提供するJavaScriptプレインダーサイド。アイデアのプロトタイピングや新しいライブラリの試用に最適
- [Sneat Vuetify VueJS Admin Template](https://themeselection.com/item/sneat-vuetify-vuejs-admin-template/) - レスポンシブウェブアプリ向けの究極のVueJS管理テンプレート
- [Litlyx](https://litlyx.com) - AIを活用したウェブ分析プラットフォーム。Google Analytics 4およびMixpanelのオープンソース代替ツール
- [Fynk](https://fynk.com) - 契約の作成、署名、管理プラットフォーム


### アプリ／Webサイト <a id="appswebsites"></a>

- [Laravel Spark](https://spark.laravel.com/)
- [Vice Video](https://video.vice.com/)
- [Formlets](https://www.formlets.com)
- [Laracasts](https://laracasts.com)
- [esa.io](https://esa.io/)
- [Prague Airport](https://www.prague-airport.com/)
- [Portfolio Site](https://corentinbac.com/)
- [Statamic](https://statamic.com)
- [TravelMap](https://clem.travelmap.fr) - 旅行者が地図に基づいてブログを作成できるシンプルな方法
- [Proper Cloth Shirt Builder](https://propercloth.com/design-a-shirt) - カスタムシャツビルダー
- [vNotes](https://github.com/IgorHalfeld/v-notes) - Vue.jsとローカルストレージAPIを使ったシンプルで美しいメモ帳（マークダウン）
- [Dermail](https://github.com/zllovesuki/dermail-webmail) - node.jsで構築されたDermailメールシステム用のVue.jsによるウェブメールクライアント
- [octimine](https://www.octimine.com/) - 特許検索エンジン
- [Draxed](https://www.draxed.com/) - ウェブベースのMySQLおよびPostgreSQLデータブラウザとダッシュボードマネージャー
- [滚蛋吧！莆田系](https://putianxi.github.io/) - _putian_病院のすべての情報表示
- [Livestorm](https://livestorm.co) - ウェビナー／ライブイベントアプリ
- [Holden](https://www.holden.com.au)
- [12BAY.VN](https://12bay.vn) - オンライン航空券予約アプリケーション
- [PLAYCODE.IO](https://playcode.io) - Rapid Frontend Experimentsのプレイングランド
- [The Void Radio](https://thevoidrad.io) - 地下ハウスミュージックオンラインラジオ
- [Bitly Vue](https://alpixel.github.io/bitly-vuejs) - VueJSとBitly APIを使ってURLを短縮
- [Storyblok](https://www.storyblok.com) - VueJSをフロントエンドとして使用したAPIベース／解離型CMS
- [EasyWebinar](https://easywebinar.com/) - ウェビナーソフトウェア／ライブイベント＆ウェビナーアプリ
- [WizzAir](https://wizzair.com/)
- [Moving to HTTPS](https://movingtohttps.com/) - 複数プラットフォーム／ホスティングサイトをHTTPSに移行するガイド
- [Euronews](https://www.euronews.com) - Euronewsはフランスリヨンに本社を置く多言語ニュースメディアサービス
- [Vue.js Feed](https://vuejsfeed.com/) - Vue.jsとLaravelで作成された最新のVue.jsニュース、チュートリアル、プラグインなど
- [Guess Right](https://kdcinfo.com/guessright/) - 単語を「当ててみよう」ゲーム - Vue/vuex/vue-router（フロントエンド）とLaravel/MySQL（バックエンド）で構成されたアプリ。コードは[Open Source on GitHub](https://github.com/KDCinfo/guess-right)（ただし、kdcinfoで実行されているゲームのライブファイルとは異なります）
- [GRAP](https://grap.io) - ビジネスコミュニケーションサービス
- [JSON Schema Editor](https://json-schema-editor.tangramjs.com) - Vue.jsとFirebaseで構築されたJSONスキーマ用の直感的なエディタ
- [Winsome Trivia](https://splode.github.io/trivia/) - Vue.jsで構築された2,000以上のユニークな質問を備えたシングルまたはマルチプレイヤーのトリビアゲーム
- [Moon Organizer](https://moonorganizer.com/calendar/) - 月のカレンダーアプリ
- [Kinderbesteck](https://www.kinderbesteck-gravur.de/) - Vue2.0、Vuex、Vue Routerを用いた完全なオンラインショップSPA
- [Power Thesaurus](https://www.powerthesaurus.org) - ユーザーが参加するオンライン語彙辞書
- [PAIXIN](https://www.paixin.com/) - 本物の写真販売サイト
- [1XBET](https://1xbet.com) - 2007年から運営されているベティング会社
- [CrowdCircus](https://crowdcircus.com) - ヨーロッパ最大のクラウドファンディングおよびクラウドインベストメント集約サイト
- [PingBreak](https://pingbreak.com) - Vue.jsを用いたリアルタイムダッシュボードを備えた無料かつシンプルなウェブサイト監視サービス
- [Todoist Tribute](https://github.com/rohitpaulk/todoist-tribute/) - Rails＋Vueで構築されたTodoistのクローン
- [JSON Editor](https://json-editor.tangramjs.com) - Vue2とFirebaseを用いたスキーマ認識JSONエディタ
- [Develteam](https://www.develteam.com) - インディーゲーム開発者のためのソーシャルネットワーク
- [Mixsii](https://www.mixsii.com) - 若者、成人、家族、友人向けの無料ビデオチャットルームサイト
- [PipQuest](https://pipquest.gregorterrill.com) - Vueで構築されたレトロ風パズルゲーム
- [Matryx](https://matryx.ai/) - 分散型協働プラットフォーム
- [iPrevYou - YouTube™ Player](https://chrome.google.com/webstore/detail/iprevyou-youtube-player/blijlgfnjhnhmnaldaiienmjggbjhbaa) - デスクトップ上でYouTube動画を視聴できるChromeアプリ
- [Item Manager](https://itemmanager.uk) - Destiny 2ゲーム用のアイテム移動アプリ
- [Frontend Masters Intro to Vue](https://frontendmasters.com/courses/vue/) - Frontend Mastersの全日コース
- [TR-101](https://inverted3.gitlab.io/drum-machine/) - ドラムシンセサイザー／シーケンサ
- [Bazaar](https://bazaar.co) - メディア共有プラットフォーム
- [Vectr](https://vectr.com/new) - 無料のベクターグラフィックスソフトウェア
- [Habitica](https://habitica.com/) - タスク管理アプリとしてのロールプレイングゲーム形式のオンラインアプリ
- [MadeWithVueJs](https://madewithvuejs.com/) - Vue.jsで作成されたプロジェクトギャラリー（サイト自体もVue.jsを使用）
- [Thousand Ether Homepage](https://thousandetherhomepage.com) - ZXQ Million Dollar Homepage を Ethereum DApp として再構築。Vue.js とオープンソースで構築。
- [Let's Enchance](https://letsenhance.io/) - 神経ネットワークを用いた無料オンライン画像拡大および向上機能。
- [Pi.TEAM - Online Invoicing and Accounting](https://pi.team) - シンプルなオンライン会計と請求書作成。個人ユーザーおよびフリーランス向け無料。
- [Tipe](https://tipe.io) - 次世代 API ファースト CMS。強力な編集ツールでコンテンツを作成し、GraphQL または REST API でどこからでもアクセス可能に。CMS がアプリ開発の方法を決めるのをやめましょう。
- [Bubbleflat](https://bubbleflat.com) - 学生や若手プロフェッショナルが、ライフスタイルや興味、学校などに類似した人を検索して最適な同居人を見つけるためのオンラインプラットフォーム。Laravel & Vuejs
- [sunpos](https://sunpos.ru) - 太陽の位置、高度、方位、黄道座標／赤道座標、日出日没時間（ユリウス日）の計算および変換ツール。ウェブサイトは純粋な JS、Vuejs および i18n Vuejs ローカライズプラグインで構成。可視化は D3.js を使用。
- [27.ua](https://27.ua) - ウクライナにあるインターネットハイパーサイズマーケット
- [Chess Guardian](https://vitomd.com/vue-chess-guardian/) - 自分のゲームからチェスの局面に関する質問に答える。
- [Blackjack Break](https://blackjackbreak.com) - ブラックジャックの簡単なゲーム
- [GameVix](https://www.gamevix.com/) - 使ったビデオゲームディスクを他の人と交換できる。PWA で Material Design を採用。
- [VivifyScrum](https://app.vivifyscrum.com) - チームが納品するプロジェクト管理アプリ。カスタマイズ可能なスクラムおよびカンバンボード。
- [9GAG](https://9gag.com) - 人気のオンラインプラットフォームおよびソーシャルメディアサイト
- [Kitchen Stories](https://kitchenstories.io) - 調理プラットフォーム
- [Cronhub](https://cronhub.io) - 手軽な Cron モニタリングツール
- [wrkprty](https://wrkprty.com) - フリーランス、リモート勤務者、オフィスを離れて外に出てみたいプロフェッショナル向けのポップアップコワーキングイベント。
- [Broker Notes](https://broker-notes.com) - '実 estate エージェントになるための学習' :house:
- [SyncLounge](https://synclounge.tv) - SyncLounge は、複数の場所に配置された複数のプレイヤー間で Plex 内容を同期するツール。
- [HCE.it](https://www.hce.it/) - イタリアのアgency のウェブサイト。すべて Vue で構成され、LaravelベースのヘッドレスCMSを使用。
- [Spektrum](https://spektrummedia.com/) - Spektrum Media Agency のウェブサイト
- [SPK](https://www.spk.rocks/) The website of SPK Ecosystem
- [IDDEF](https://www.iddef.org/) ☪️ The Federation of the Associations that Value Humanity's webpage, CMS, CRM and Donation and all e-commerce pages are designed with Vue.js, Vuex and pure JavaScript 🙏
- [Roast](https://roastandbrew.coffee/) an app built to help coffee enthusiasts find their next cup of coffee while learning about Laravel + Vue.js.
- [CryptoArte](https://www.cryptoarte.io) - Ethereum 上のアートコレクション、非代替トークン、および DApp。
- [Scroll.in](https://scroll.in) - スクロールインは、独立したニュース、情報、エンタメの事業である。
- [Brandy](https://getbrandy.io) - メニューバー用のブランド資産マネージャー。
- [NBC Sports](https://www.nbcsports.com/) - NBCスポーツはスポーツニュースサイトである。
- [WITHIN](https://www.with.in/) - バーチャルリアリティによる特別なストーリー。
- [beCamp](https://be.camp) - バージンス・バージンスのテックカンファレンス。ウェブサイトコードはオープンソース。
- [Trustpilot](https://www.trustpilot.com) - 誰でも無料で利用できるレビュープラットフォーム。
- [Lagom](https://lagom.rsstudio.net/) - シンプルで直感的かつ完全にレスポンシブなWHMCSテーマ
- [ScoutMyTrip - Roadtrip Planner](https://scoutmytrip.com/roadtrip-planner/start) - インド向けのロードトリップ計画アプリで、旅行者がルートに沿って観光地や宿泊施設、ガソリンスタンド、飲食店などを発見できる。
- [GamersClub](https://gamersclub.com.br/?lang=english) - ブラジルにおけるeスポーツコミュニティ開発の最大企業
- [MIT](https://www.mit.edu/) - マサチューセッツ工科大学の公式サイト。
- [Elvenar](https://en.elvenar.com/) - エルベナールはブラウザベースのファンタジー都市建設ゲーム。
- [Beacon](https://beaconapp.in) - :blue_heart: 複数のウェブサイトでコンテンツを共有できるサービス。
- [Artfinder](https://www.artfinder.com/) - アートファインダーは、アート画の購入・販売を行うウェブサイト。
- [GitHubExplorer](https://kiinlam.github.io/GitHubExplorer/) - GitHubを探索するための純粋な静的ページウェブアプリ。`Vuejs`と`GitHub GraphQL API v4`を使用しています
- [HappyPlants](https://github.com/morkro/happy-plants) - 植物を整理するためのプログレッシブウェブアプリ 🌱。
- [Pocket Lists](https://pocketlists.com) - 世界で最も親切なタスク管理アプリ。
- [Padlet](https://padlet.com) - 協働型の掲示板
- [Glovo](https://glovoapp.com/en/) - オンデマンド配達
- [MySigMail](https://mysigmail.com) - MySigMailは、アカウントを作成せずにブラウザ内でのメール署名生成ツール。
- [Wordguru](https://wordguru.netguru.com) - チームに分かれて、できるだけ多くのキーワードを予想するシンプルな言語ゲーム。
- [ApiFlash](https://apiflash.com) - 開発者向けのChromeベースのスクリーンショットAPI。
- [Git Superstar](https://git-superstar.firebaseapp.com) - Gitのスター数とトップリポジトリをカウント
- [Tapestri Designer](https://tapestridesigner.com) - ゲノムシーケンス実験（NGS）用のPCRプライマー設計に使える無料ツール
- [Geenes](https://geenes.app) - UIに色パレットを生成・適用し、Sketchまたはコードにエクスポート
- [ExifShot](https://exifshot.com/) - 写真撮影における「何を」「どうするか」を美しく説明
- [Studolog](https://studolog.com/) - 学生向けオンラインファイル共有プラットフォーム。現在はチェコ語（🇨🇿）のみ。
- [Gamebrary](https://gamebrary.com) - ビデオゲームコレクションを整理するオープンソースツール
- [Premium Poker Tools](https://premiumpokertools.com/) - ポーカー玩家が使う研究ツール
- [QMK Configurator](https://config.qmk.fm/) - ブラウザからカスタムQMKファイアウォールを設定・構築・ダウンロード
- [Worksome](https://www.worksome.com/) - 資格のあるITプロフェッショナルやフリーランス、採用を希望する企業が利用できるマーケットプレイス／プラットフォーム
- [Translator-vuejs](https://manuel-suarez-abascal.github.io/translator-vuejs/) - Vue.js、Yandex APIおよびResponsiveVoice.js APIで構築された翻訳アプリ
- [Big Timer](https://www.bigtimer.net/) - ワークショップ、ミーティング、プレゼンテーション用のフルスクリーンカウントダウンタイマー。Big Timerはワークショップの進行管理、ミーティングの進行担当者、デザインスプリントの実施者、プレゼンター、ゲームショーの新規開設者にプログラムの進行を助けます
- [Kvalitetskontroll](https://www.kvalitetskontroll.no/) - 建設業界向けのノルウェー製管理システム
- [Poolside FM](https://poolside.fm/) - レトロ風の音楽プレイヤー
- [Inoreader.com](https://inoreader.com/) - 世界で最も大きなRSSリーダーおよびニュース集約ツールの一つ
- [AwesomeTechStack](https://awesometechstack.com) - ウェブサイトのテックスタック分析ツール
- [massCode](https://github.com/antonreshetov/massCode) - 開発者向けオープンソースコードスニペットマネージャー。Electron、Vue、Monacoエディタで構築。
- [ClipLeap](https://www.clipleap.com/) - 長編動画の中の瞬間を投稿・共有できるプラットフォーム
- [RSVP Keeper](https://www.rsvpkeeper.com/) - オンライン予約を簡単に行う。イベントをすぐに立ち上げられます。VueとGoで作成。
- [PNGK](https://pngk.org/) - 人道的、人権関連および類似組織の解決策を提供するコンサルティング会社の公式サイト
- [BMWUSA Vehicle Configurator](https://www.bmwusa.com/build-your-own.html) - BMWUSA向けの車両設定ツール
- [Fanmio](https://fanmio.com) - ファンミオ上での個人ビデオ体験で、あなたの好きなタレントと出会いましょう
- [AtomicWallet](https://atomicwallet.io) - マルチ資産の暗号通貨ウォレット。デスクトップアプリと[mobile](https://play.google.com/store/apps/details?id=io.atomicwallet)アプリはどちらもVueで構築されています
- [Helpninja](https://dashboard.helpninja.com/) - シンプルで高速なヘルプデスク
- [Todo DEV](https://github.com/IanLuan/TodoDev) - Vuejs、Vuetify、強力なFirebaseを活用した開発者向けシンプルなTodoアプリ
- [36 Pixels](https://www.36pixels.fr/) - フランスのアグェンシー向けウェブサイト（vue.jsで構築）
- [temp-mail.io](https://temp-mail.io/) - 一時的なメールサービス
- [Narrandum](https://narrandum.com) - Vue.js、Vuetify、Feathersjsを用いた顧客体験マッピングツール
- [goonlinetools.com](https://goonlinetools.com/) - 100％無料オンラインツールサイト
- [Portfolio Site](https://olaolu.dev/) - Olaolu Olawuyi、フロントエンド開発者およびUXエンジニアのポートフォリオサイト
- [d-patterns.js.org](https://d-patterns.js.org) - FOSS Discordテンプレート一覧サイト 💬
- [linksift.com](https://linksift.com) - LinkSiftは、ウェブサイトがリンクしている内容を探索できます
- [postmake.io](https://postmake.io) - 300以上の企業やスタートアップが使っているツールとリソースのキュレーションされたディレクトリ。Vue.jsとNuxtで構築。
- [screenshotapi.net](https://screenshotapi.net) - ウェブサイトスクリーンショットAPI、ピクセル正確なウェブサイトスクリーンショットを取得
- [FontGet](https://www.fontget.com/) - 無料フォントをダウンロード
- [Travel_Smart](https://travelsmart.netlify.app/) - Vue + Vue Router + Vuexを活用したツアー型ウェブアプリ
- [National Institutes of Health (NIH): FEVS Survey Results](https://hr.nih.gov/workforce/fevs/2019-fevs-survey-results) - 米国国立保健研究所（NIH）による連邦視点調査（FEVS）結果のデータ可視化
- [Nipashe](https://nipashe.netlify.app/) -"Nipashe" is a Swahili word that means "Inform me". Nipashe is a web app built in Vue + Vuex(state management) + Vue-Router(navigation) that gives a tally/statistics on the current COVID19 infections across the world based on the WHO
- [DevSnap.me](https://devsnap.me) - ウェブ開発者が無料かつオープンソースのHTML、CSS、JavaScript資産を多数見つけることができるウェブサイト
- [Back Home/回家](https://flights.vincentc.us/) - コロナ禍でも運航中の海外から中国本土（および中国から海外）への飛行機検索エンジン
- [Deadlines](https://deadlines.vercel.app) - Vue.jsとlocalForageで作成されたオフラインのシンプルな期限管理ツール
- [Darwin Analytics](https://www.darwin.so) - サイトの測定・最適化ツール。Vue3とViteで構築。
- [Scrumfast](https://www.scrumfast.com) - 非常に直感的なプロジェクト管理スクラムツール
- [Gradientos](https://www.gradientos.app) - グレディエントスは、傾きの確認を簡単に行えるようにしています。
- [httptools.dev](https://httptools.dev/) - ウェブ開発者向けのオンラインチェックやツールのコレクション。JSONフォーマッター、リダイレクトチェック、URLエンコーダーなど。Vue3とvue-routerで構築。バックエンドAPIはLaravelを使用。
- [FontBolt](https://www.fontbolt.com/) - ポップカルチャーから好きなフォントを発見・生成
- [Portfolio Site](https://monayemislam.me) - モンアイム・イスラム、フルスタックウェブアプリ開発者向けポートフォリオサイト。愛を込めてVue 3で作成。
- [MapperMate](https://mappermate.com) - 無料で使えるタイルマップエディタ。2Dゲーム用のタイルマップを作成・編集・管理に使用。
- [Chris Courses](https://chriscourses.com) - JavaScriptと2Dゲーム開発を学ぶためのプラットフォーム。インタラクティブな動画、クイズ、コードチャレンジを提供。
- [BulkPicTools](https://bulkpictools.com) - プライバシーを最優先にした大量画像処理ツール。Vue 3とWebAssemblyで構築。
- [Shiko](https://shiko.vet) - 獣医臨床診療プラットフォーム。予約スケジューリング、マップ付きインタラクティブ診療所ディレクトリ、マルチプラットフォーム対応。
- [Text to Handwriting](https://www.primenotepad.com/tools/text-to-handwriting) - 入力されたテキストをリアルな手書きノートに変換できるオンラインツール。

### インタラクティブ体験 <a id="interactive-experiences"></a>

- [Louis Ansa Website (portfolio)](https://louisansa.com)
- [Djeco.com](https://www.djeco.com/en)
- [TR-101 Synth Drum Machine](https://inverted3.gitlab.io/drum-machine)
- [CSS ColorVars](https://csscolorvars.github.io/) - インタラクティブなツールコード生成（[source code](https://github.com/CSSColorVars/csscolorvars)）
- [Nightlight During Conflict](https://pngk.org/nightlight/) - 紛争国における国別の夜間照明データをGISで探索。
- [User Friendly Justice Data](https://justicemoroccoprototype.hiil.org/) - モロッコの司法データを探索。
- [Vue Play](https://www.vueplay.com) - インタラクティブ／視覚的なドラッグ＆ドロップデザイナーでVueコンポーネントやアプリケーションを作成。
- [Yahya J. Aifit's Portfolio Site](https://yja.me) - デスクトップオペレーティングシステムの外観を参考にしたポートフォリオサイト。

### 企業での利用 <a id="enterprise-usage"></a>

- Alibaba
- Baidu
- Sina Weibo
- Xiaomi
- Ele.me
- Optimizely
- Expedia
- UCWeb
- Line
- Nintendo
- Celtra
- [Sainsbury's](https://sainsburys.jobs/)
- DJI
- Octimine GmbH
- Hunliji
- [GitLab](https://about.gitlab.com/2016/10/20/why-we-chose-vue/)
- [Clemenger BBDO Melbourne](https://clemengerbbdo.com.au)
- [ZenMate](https://zenmate.com)
- [Codeship](https://blog.codeship.com/consider-vuejs-next-web-project/)
- [Storyblok](https://app.storyblok.com)
- [Monito](https://www.monito.com) - 国際送金のBooking.comを構築。
- [Hypefactors](https://hypefactors.com) - データ駆動型PRプロフェッショナル向けソフトウェア。
- Adobe
- IBM
- [Cotabox](https://cotabox.com.br)
- [Aromajoin](https://aromajoin.com) - ハードウェア、ソフトウェア、素材技術の調和に基づき、最高のデジタルスネス製品を開発。
- [Carrefour](https://www.carrefour.fr)
- [Staples Canada](https://www.staples.ca/)
- [Blibli](https://www.blibli.com)
- [Manduka](https://www.manduka.com/)
- [Upwork](https://www.upwork.com/) - フリーランスと企業間のワークマーケットプレイス。

### アクセシビリティ <a id="a11y"></a>

- [Vue A11y project](https://github.com/vue-a11y) - Vue.jsコミュニティプロジェクトによるウェブアクセシビリティの向上。
- [vue-axe](https://github.com/vue-a11y/vue-axe) - Vue.jsアプリケーションのアクセシビリティ診断。
- [vue-announcer](https://github.com/vue-a11y/vue-announcer) - スクリーンリーダーに役立つ情報を、Vueで簡単に発表できる方法。
- [vue-focus-lock](https://github.com/theKashey/vue-focus-lock) - これは罠です！フォーカスに用いられるロック。フォーカスのスコープを目的としたA11yユーティリティ。
- [eslint-plugin-vuejs-accessibility](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility) - Vue.jsのアクセシビリティESLintプラグインは@vue-a11yによって管理されています。

## コンポーネントとライブラリ <a id="components--libraries"></a>

### フレームワーク <a id="frameworks"></a>

#### レスポンシブ <a id="responsive"></a>

_Set of components + responsive layout system_

- [quasar-framework](https://github.com/quasarframework/quasar) - Quasarフレームワーク。Vue.js 3を使用して、レスポンシブウェブサイト、ハイブリッドモバイルアプリ、Electronアプリを一括で構築できます。
- [vuetify](https://github.com/vuetifyjs/vuetify) - Vue.js 2向けのMaterial Component Framework。
- [buefy](https://github.com/rafaelpimpa/buefy) - Bulmaフレームワークに基づくコンポーネント。
- [iview-ui](https://www.iviewui.com) - ウェブ向けのVue.js 2.0 UIフレームワーク。
- [AT-UI](https://at.aotu.io) - デスクトップアプリケーションに特化した、新しくフラットなUIキット。Vue.js 2.0で作成されました。
- [BootstrapVue](https://github.com/bootstrap-vue/bootstrap-vue) - Vue.js向けのBootstrap v4コンポーネントとグリッドシステム。
- [fish-ui](https://myliang.github.io/fish-ui) - Web向けのVue.js 、2.0 UIツールキット。
- [zircle-ui](https://github.com/zircleUI/zircleUI) - ズーム可能なユーザーインターフェースを開発するためのフロントエンドライブラリ。
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - Ant DesignとVue 3.2.0に基づくエンタープライズクラスのUIコンポーネント。
- [heyui](https://github.com/heyui/heyui) - (https://www.heyui.top/en) - Web向けVue.js 2.0 UIツールキット
- [Carvue.js](https://carvuejs.github.io/) - IBMのCarbon Design System for Vue.js。
- [BalmUI](https://github.com/balmjs/balm-ui) - Material DesignとVue 3.0に基づく、モジュール化・カスタマイズ可能なUIライブラリ。
- [Osiris UI](https://osiris-ui.github.io/osiris) - :art: Vue.js 2.0向けのユニバーサルレスポンシブUIコンポーネントライブラリ
- [@Carbon/vue](https://github.com/carbon-design-system/carbon-components-vue) - @carbonチームによるCarbon Design Systemのコンポーネント。
- [Inkline](https://github.com/inkline/inkline/) - Inklineは、Vue.js 3のデザインシステムを構築するための開発者フレンドリーなUIコンポーネントライブラリです。
- [MDBootstrap](https://github.com/mdbootstrap/Vue-Bootstrap-with-Material-Design) - 最新のBootstrap 4とVue 2.6.10に基づく強力なUIツールキット。レスポンシブでモバイル優先のウェブサイトやアプリを迅速に構築できる、スムーズでレスポンシブなページテンプレート、レイアウト、コンポーネント、ウィジェットを提供します。
- [vue-material-adapter](https://github.com/pgbross/vue-material-adapter) - Googleが推奨するベストプラクティスに従ったMaterial Components for Vue.jsの統合：FoundationとAdapterの使用。
- [PrimeVue](https://primefaces.org/primevue) - Vue向けの最も完全なUIコンポーネントライブラリ。
- [CoreUI for Vue.js](https://github.com/coreui/coreui-vue) - CoreUI for Vue.jsは、クロスブラウザ、レスポンシブ、軽量なVue.js UIコンポーネントを提供するUIコンポーネントライブラリです。
- [oruga](https://github.com/oruga-ui/oruga) - Vue.js に CSS フレームワークを必要としない UI コンポーネント
- [Wave UI](https://github.com/antoniandre/wave-ui) - Vue.js 用の新しい UI フレームワーク。明るい側面だけを備えたもの。☀️
- [element3](https://github.com/kkbjs/element3) - element-ui に基づく Vue.js 3.0 の UI ツールキット
- [vuestic-ui](https://github.com/epicmaxco/vuestic-ui) - Vue.js 3.0 用のカスタマイズ可能な UI フレームワーク
- [Qui-max](https://github.com/Qvant-lab/qui-max) - Vue 3.x 用のウェブデザインシステム
- [Naive UI](https://github.com/TuSimple/naive-ui) - TypeScript を使用し、カスタマイズ可能なテーマ、動作が速く、かなり興味深い Vue 3.x デザインシステム
- [Element Plus](https://github.com/element-plus/element-plus) - Vue 3 の UI フレームワーク
- [AgnosticUI](https://www.agnosticui.com/) - React、Svelte、Angular にも対応するアクセシブルな Vue 3 コンポーネントプリミティブ!
- [Vexip UI](https://github.com/qmhc/vexip-ui) - 高度にカスタマイズ可能なプロパティ値、TypeScript を使用、パフォーマンスは良好な Vue 3 UI ライブラリ
- [Vue USWDS](https://github.com/patrickcate/vue-uswds) - USWDS（米国ウェブデザインシステム）に基づく Vue.js の実装
- [Vuersatile Components](https://www.andres-brugarolas.com/vuersatile-components/) - フォームの自己検証と SCSS フレームワークが統合された Vue 3 コンポーネのライブラリ
- [Prefect Design](https://prefect-design.netlify.app/) - Vue 3、TypeScript および Tailwind を使用したコンポーネントライブラリ
- [Stellar UI](https://github.com/ManukMinasyan/stellar-ui) - Vue 3 用の完全にスタイル化され、カスタマイズ可能なコンポーネント
- [Reka UI](https://github.com/unovue/reka-ui) - Vue 3 で高品質なデザインシステムやウェブアプリを構築するための、未スタイル化かつアクセシブルな UI プリミティブを備えたオープンソースライブラリ（以前は Radix Vue）
- [shadcn-vue](https://github.com/unovue/shadcn-vue) - 非公式かつコミュニティが中心となって開発された、[shadcn/ui](https://github.com/shadcn-ui/ui)のVue版（Reka UIとTailwind CSSで構築された再利用可能なコンポーネントを含む）
- [BoldKit](https://boldkit.dev) - Vue 3 および Nuxt 用のネオブリュタリズムコンポーネントライブラリ。55以上のコンポーネント、10のチャートタイプ、64のSVG形状、17のアニメーション付きASCII形状を備えている。Reka UI に基づき、shadcn-vue CLI と互換性がある
- [Inspira UI](https://inspira-ui.com/) - Vue、Nuxt、Tailwind CSS を使用して、すばらしいアニメーションインターフェースを簡単に構築できるオープンソースコンポーネント
- [flowbite-vue](https://github.com/themesberg/flowbite-vue) - Tailwind CSS をベースにした Vue コンポーネントライブラリ
- [Maz-UI](https://github.com/LouisMazel/maz-ui) - Vue 3 および Nuxt 3 および 4 用の軽量かつ効率的なライブラリ。50以上のコンポーネント、テーマ設定、i18n および便利なプラグインとコマンドを備えている
- [@oneflowui/ui](https://github.com/qixi54/oneui) - Vue 3 + TypeScript によるタスク管理ビュー用コンポーネントライブラリ。テーブル、カンバン、ギャンツタイムライン、ギャラリー、AIチャット、ダッシュボードチャート、富テキストエディタ、MermaidChartなど、75以上のコンポーネントが標準で提供されている。
- [Nuxt UI](https://github.com/nuxt/ui) - Tailwind CSS および Reka UI を使用して構築された、Vue および Nuxt 用の125以上のアクセシブルかつカスタマイズ可能なコンポーネント

#### モバイル <a id="mobile"></a>

_UI frameworks for mobile_

- [Framework7-Vue](https://github.com/framework7io/framework7) - Framework7 と Vue を使って、フル機能の iOS および Android アプリを構築します。
- [vue-onsenui](https://github.com/OnsenUI/OnsenUI) - HTML5 と JavaScript を使用したモバイルアプリ開発フレームワークおよび SDK。美しいかつ高性能なクロスプラットフォームモバイルアプリを構築します。Web Components をベースにし、Angular 1、2、React および Vue.js へのバインディングを提供します。
- [Ionic](https://github.com/ionic-team/ionic-framework) - モバイルアプリ開発フレームワーク
- [Native script](https://github.com/nativescript-vue/nativescript-vue) - NativeScript を使ってネイティブモバイルアプリを構築
- [uni-app](https://github.com/dcloudio/uni-app) - Vue.js を使用したクロスプラットフォームフレームワーク

_Set of components for mobile_

- [vant](https://github.com/youzan/vant) - YouZan による Vue.js 2.0 モバイル UI。
- [cube-ui](https://didi.github.io/cube-ui) - Vue.js 2 で実装された素晴らしいモバイル UI ライブラリ。
- [mand-mobile](https://didi.github.io/mand-mobile) - Vue.js 2 をベースにしたモバイル UI ツールキットで、金融シーンに特化。
- [NutUI](https://github.com/jdf2e/nutui/) - Vue.js 2.0 モバイルウェブ用 UI ツールキット

#### コンポーネント集 <a id="component-collections"></a>

_Set of components without layout system_
- [Naive UI](https://www.naiveui.com/) - Vue 3 のコンポーネントライブラリ。かなり充実しており、テーマカスタマイズ可能。TypeScript を使用し、高速。
- [keen-ui](https://github.com/JosephusPaye/Keen-UI) - Vue で作成された軽量かつ必須の UI コンポーネントのコレクション。Material Design にインスピレーションを受けています。
- [uiv](https://github.com/uiv-lib/uiv) - Vue2 で実装された Bootstrap3 コンポーネント。
- [Essential JS 2 for Vue](https://www.syncfusion.com/products/vue) - 45個以上のフル機能 Vue.js コンポーネント。データグリッド、チャート、スケジューラ、ダイアグラムなど、さまざまなコンポーネントを含む。
- [jqwidgets](https://www.jqwidgets.com/vue/) - Material Design テーマを備えた 70個以上の Vue.js 2.、UI コンポーネント。
- [Kendo UI for Vue](https://www.telerik.com/kendo-vue-ui/components/) – Over 70 UI components, including a Grid, built for business applications. Fully responsive with support for several Design Languages including Material Design and Bootstrap.
- [element-pro-components](https://github.com/tolking/element-pro-components) A component library for Vue 3 base on element-plus
- [TW Elemetns for Vue](https://tw-elements.com/docs/standard/integrations/vue-integration/) - Tailwind CSS との Vue.js インテグレーション — 無料かつオープンソースの UI キット
- [Origin UI Vue](https://originui-vue.pages.dev/) - Tailwind CSS と Vue で構築された美しい UI コンポーネント
- [@todovue/tv-ui](https://github.com/TODOvue/tv-ui) - Vue 3向けのカスタマイズ可能でアクセシビリティを最優先したUIコンポーネントライブラリ。 [Docs](https://ui.todovue.blog/)

#### 管理画面テンプレート <a id="admin-template"></a>

_Set of admin template_

- [Vue Material Admin](https://github.com/tookit/vue-material-admin) - Vueマテリアルデザインのアドミンテンプレート [Online Demo](https://vma.isocked.com/#/dashboard)
- [dashboard](https://github.com/zce/dashboard) - vue.jsに基づくダッシュボードのフレームワーク。vuejs/vue-cli 4.xで作成された [Online Demo](https://dashboard.zce.me)
- [vue-pro-sidebar](https://github.com/boussadjra/vue-pro-sidebar) : A responsive template starter with the ecosystem configuration (vue-router, vuex), this boilerplate allows you to choose your preferred colors. [Live demo](https://boussadjra.github.io/vue-pro-sidebar)
- [vuestic-admin](https://github.com/epicmaxco/vuestic-admin) - Vue 3と`vuestic-ui`を使用して構築されたVueアドミンダッシュボード
- [Materio-vuetify-vuejs-admin-template-free](https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free) - プロダクション用に丁寧に設計された、最も包括的なVuetify Vuejsアドミンテンプレート。 [Live demo](https://themeselection.com/demo/materio-vuetify-vuejs-admin-template-free/demo/dashboard)
- [Tailmin](https://github.com/otezz/tailmin) - Vue.jsとTailwind CSSで構築されたアドミンダッシュボード。 [Live demo](https://tailmin.vercel.app/)
- [Admin One Vue 3 Tailwind dashboard](https://github.com/justboil/admin-one-vue-tailwind) - Vue.js 3 と Tailwind CSS のアドミンテンプレート（ダークモード対応）
- [Mosaic - Vue Admin TailwindCSS template](https://github.com/cruip/vuejs-admin-dashboard-template) - すべての機能を備えた Tailwind CSS アドミンダッシュボードテンプレート。
- [vue-admin-box](https://github.com/cmdparkour/vue-admin-box) - vue3とelement-plusに基づくアドミンテンプレート。 [Live demo](https://cmdparkour.github.io/vue-admin-box/dist/)
- [argon-dashboard-vue3](https://github.com/ltv/argon-dashboard-vue3) - テンプレート、Element Plus および TailwindCSS 3、Vue3。
- [Dolphin Admin](https://github.com/bit-ocean-studio/dolphin-admin-vue) - Vue 3 + Vite + Naive UI + TypeScript + TailwindCSSに基づくオープンソース、無料、軽量、即時使用可能、国際化されたアドミンテンプレート。 [Live demo](https://dolphin-admin-vue.bit-ocean.studio/)
- [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin) - 現代的なvueアドミン。Vue3、vite、TypeScriptに基づいています。速い！ [Live demo](https://vben.vvbin.cn/)
- [Geeker-Admin](https://github.com/HalseySpicy/Geeker-Admin) - Vue3 + TypeScript + Element Plusに基づくオープンソースバックエンド管理フレームワークのセット。 [Live demo](https://admin.spicyboy.cn)
- [gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin) - 🚀Vite+Vue3+Gin開発基本プラットフォーム。 [Live demo](https://demo.gin-vue-admin.com)
- [adminforth](https://adminforth.dev) - Vue + Node + Tailwind管理フレームワーク。 [Live Demo](https://demo.adminforth.dev)
- [soybean-admin](https://github.com/soybeanjs/soybean-admin/blob/main/README.en_US.md) - Vue3、Vite5、TypeScript、Pinia、NaiveUI および UnoCSS をベースにした、シンプルで洗練された、美しいそして強力なアドミンテンプレート。
- [AirPower4T](https://github.com/AirPowerTeam/AirPower4T) - Vue3、TypeScript、Element Plus、Viteに基づいた開発ライブラリで、バックエンドプラットフォーム機能（`OOP` `Decoration`）を提供し、開発をより効率化します。
- [YummyAdmin](https://github.com/doroudi/YummyAdmin) - 📈 Naive UI と TailwindCSS をベースにした無料 Vue 管理パネル。デザインが美しく、右から左へ対応（RTL）および多言語対応を備えた、かなり完成された製品。（MSW、Pinia、TS、UnoCss、Vite）

#### サーバーサイドレンダリング <a id="server-side-rendering"></a>

- [Nuxt.js](https://github.com/nuxt/nuxt.js) - 柔軟性のあるVue.jsフレームワーク。

#### 静的サイトジェネレーター <a id="static-website-generator"></a>

- [VuePress](https://github.com/vuejs/vuepress) - Vueを用いたミニマリズムの静的サイトジェネレーター
- [îles](https://github.com/ElMassimo/iles) - インタラクティブな島のサイトジェネレーター
- [VitePress](https://github.com/vuejs/vitepress) - Vite と Vue をベースにした静的サイトジェネレーター

#### その他 <a id="other"></a>

- [CabloyJS](https://github.com/zhennann/cabloy) The Ultimate NodeJS Full Stack Business Development Platform, based on KoaJS & EggJS & VueJS & Framework7
- [DataFormsJS](https://github.com/dataformsjs/dataformsjs) - Vue をテンプレートエンジンとして使用する、最小限のルーティングとウェブサービスフレームワーク
- [Vue-Low-Code](https://github.com/KlausSchaefers/vue-low-code) - Quant-UX プロトタイプから VUE アプリを生成できる、Low Code ツールキット
- [vue-notion](https://github.com/janniks/vue-notion) - 非公式の Notion レンダラー – Notion を Vue（例：Nuxt）のCMSとして使用
- [Fes.js](https://github.com/WeBankFinTech/fes.js/blob/master/README.en-US.md) - vue3をベースにした使いやすいフロントエンドアプリケーションフレームワーク

### UIレイアウト <a id="ui-layout"></a>

_Layout for the overall / main view_

- [vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout) - Vue.js 用のドラッグ＆リサイズ可能なグリッドレイアウト
- [vue-masonry](https://github.com/shershen08/vue-masonry) - Vue.js 用のマスンブロックレイアウトディレクティブ
- [vue-virtual-scroll-list](https://github.com/tangbc/vue-virtual-scroll-list) - vue (2.x) コンポーネントがビッグデータを扱えるように、仮想スクロールリストを使用
- [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller) - 大量の要素を効率的にスクロールできるコンポーネント（Vue 2.x）
- [dnd-grid](https://github.com/dattn/dnd-grid) - Vuejs グリッドにドラッグ＆リサイズ可能なボックスを備えたコンポーネント
- [vue-fullpage.js](https://github.com/alvarotrigo/vue-fullpage.js) - Vue.js 用の公式 fullPage.js コンポーネのためのコンポーネント
- [splitpanes](https://github.com/antoniandre/splitpanes) - Vue JS で信頼性があり、シンプルでタッチ対応可能なパネル分割／リサイズコンポーネント
- [vue-simple-drawer](https://github.com/dreambo8563/vue-simple-drawer) - 小さなドレッカー・パネルでバウンスアニメーションを備え、ネスト対応およびテーマカスタマイズが可能。方向：左／右／上／下
- [fit-screen](https://github.com/jp-liu/fit-screen) - スケールによる大画面適応を実現する、vueベースのコンポーネント
- [vue-virtual-waterfall](https://github.com/lhlyu/vue-virtual-waterfall) - Vue 3.x 用の仮想ウェーバー（水の流れ）コンポーネント
- [vue-stack-grid](https://github.com/chiribuc/vue-stack-grid) - Vue 3 コンポーネントで、動的でレスポンシブなグリッドレイアウトの作成を簡単かつ効率的に可能にする
- [virtual-scroll](https://github.com/pdanpdan/virtual-scroll) - 高パフォーマンスの Vue 3 仮想スクロールライブラリ。大量のリストを簡単に処理。縦、横、両方向（グリッド）スクロールに対応。ResizeObserverによる動的アイテムサイズ、右から左へ（RTL）レイアウトの完全対応、内蔵アクセシビリティ（a11y）

### UIコンポーネント <a id="ui-components"></a>

#### テーブル <a id="table"></a>

_Tables / data grids_

- [ag-grid-vue](https://github.com/ag-grid/ag-grid) - ag-Grid用Vueアダプタ
- [vue-grid](https://github.com/dzwillia/vue-grid) - Vue.js向けフレキシブルなグリッドコンポーネント
- [vue-crud-x](https://github.com/ais-one/cookbook) - 通常のページ、ソート、フィルタに加え、ネストされたCRUD、カスタムフォーム、フィルタ、操作を実現する、Vuetifyレイアウトを活用した拡張可能なCRUDコンポーネント
- [Vue Datatable](https://github.com/laravel-enso/vuedatatable) - LaravelサーバーサイドロードとJSONテンプレート設定を活用したVueJSによるデータテーブル
- [vue-cheetah-grid](https://github.com/future-architect/cheetah-grid) - Vue.js用の高性能グリッドエンジン。キャンバス上で動作する。
- [vue-table-component](https://vue-table-component.spatie.be/) - シンプルで明確なVueコンポーネント。テーブルの表示に特化。
- [@ioi-dev/vue-table](https://github.com/Rawand-Hawez/ioi-vue-table) - パフォーマンスを最優先としたVue 3データテーブル。バーチャライゼーション、選択、編集、CSV出力機能を備えている。
- [@lossendae/vue-table](https://lossendae.github.io/vue-table) - Vue.js 2.x向けのシンプルなテーブルコンポーネント。ページネーションとソート可能な列を備える。
- [vueye-datatable](https://github.com/boussadjra/vueye-table) - Vueyeデータテーブルは、Vue.js 2に基づくレスポンシブデータテーブルコンポーネントであり、データをページごとに整理することで、容易にナビゲートできるようにしている。
- [fancy-grid-vue](https://github.com/FancyGrid/FancyGrid) - FancyGrid用Vueアダプタ
- [vue-quintable](https://github.com/Quintetio/vue-quintable) - Vue 2.xとBootstrap 4.xに基づくレスポンシブかつ高度にカスタマイズ可能なテーブル
- [vue-datagrid](https://github.com/revolist/vue-datagrid) - 強力なウェブコンポーネントrevo-gridをラップしたVueグリッドコンポーネント。Excelのような豊かな編集と動作を提供。
- [vue-dataset](https://github.com/kouts/vue-dataset) - フィルタ、ページング、ソート機能を備えたデータセットを表示するためのVue.jsコンポーネントセット！
- [jz-gantt](https://github.com/jeremyjone/jz-gantt) - 高性能なVue Ganttコンポーネント。高度にカスタマイズ可能なテーブル列、動的データ更新、進行バーの自由なドラッグ、ヘッダーの切り替えなど、さまざまな機能を備えている。
- [vue3-easy-data-table](https://github.com/HC200ok/vue3-easy-data-table) - Vuetify 2のデータテーブルコンポーネントのAPIおよびUIを参考にした、Vue.js 3.xで作成された使いやすいデータテーブルコンポーネント。
- [tanstack-table](https://github.com/tanstack/table) - 強力なテーブルおよびデータグリッドの構築用ヘッドレスUI。
- [vuetify-drilldown-table](https://github.com/webdevnerdstuff/vuetify-drilldown-table) - Vuetify Drilldown Tableは、Vuetifyフレームワークのv-data-tableおよびv-data-table-serverの機能を強化する強力なコンポーネント。階層データをネスト形式で表示できる再帰的なテーブル構造を提供する。
- [vxe-table](https://github.com/x-extends/vxe-table) - Vueフォーム／テーブルソリューション。
- [hy-vue-gantt](https://github.com/Xeyos88/HyVueGantt) - Vue 3アプリケーション向けに強力で柔軟なGanttチャートコンポーネント。
- [Vue3 Pivottable](https://github.com/vue-pivottable/vue3-pivottable) – A Vue 3 port of the jQuery-based PivotTable.js.
- [GridSheet](https://github.com/walkframe/gridsheet) - フォーマルサポート、マルチシート参照、Vue3ラッパーを備えた高度にカスタマイズ可能なスプレッドシートエンジン（Preactコアに基づく）
- [@witqq/spreadsheet](https://github.com/witqq/spreadsheet) - ZXQのスプレッドシートエンジン。依存関係ゼロで、並べ替え、フィルタ、式、協働機能を含み、10万行以上を60fpsでレンダリング。
- [Jordium Gantt Vue3](https://github.com/nelson820125/jordium-gantt-vue3) - Vue3の甘いGanttチャートコンポーネント。リソースビュー、タスクの依存関係、プロジェクトスケジューリング機能を備えている。
- [gp-grid](https://www.gp-grid.io) - TypeScript Vue3データグリッド。スロットベースの仮想スクロール、機能の支払い壁なし、実行時依存関係ゼロ。
- [TinyPivot](https://tiny-pivot.com) - 軽量なVue3データグリッド。ピボットテーブル、チャート、CSV/Excelエクスポート、オプションのAIデータアナリストを備える。

#### 通知 <a id="notification"></a>

_Toaster / snackbar — Notify the user with a modeless temporary little popup_

- [VueToastify](https://github.com/nandi95/vue-toastify) - 手軽な通知コンポーネント。
- [@kyvg/vue3-notification](https://github.com/kyvg/vue3-notification) - Vue3通知ライブラリ
- [notivue](https://github.com/smastrom/notivue) - Vue3およびNuxt3向けの完全機能の通知システム。
- [Toastflow](https://github.com/adrianjanocko/toastflow) - 💡 ヘッドレストースト（通知）エンジン＋Vue3レンダラー（TSファースト、CSSファーストテーマ、高度にカスタマイズ可能）。

#### ローダー <a id="loader"></a>

_Loaders / spinners / progress bars — Let the user know that something is loading_

- [epic-spinners](https://github.com/epicmaxco/epic-spinners) - vue.js統合の簡単なCSSスピナーコレクション。
- [vue-ellipse-progress](https://github.com/setaman/vue-ellipse-progress) - 美しいアニメーション付き円形プログレスバーとローダーを作成するためのフレキシブルなVue.jsコンポーネント。
- [vue-default-page](https://github.com/zero-one-code/vue-default-page) - Vue3.0プラグイン。v-loading、v-skeleton、v-error、v-emptyのカスタムディレクティブを内蔵。
- [vue-skeleton-content-loader](https://github.com/willmendesneto/vue-skeleton-content-loader) - 軽量でアクセシブルなライブラリ。Vueアプリに自動的に適応する美しいアニメーション付きロードスケルトンを作成。
- [phantom-ui](https://github.com/Aejkatappaja/phantom-ui) - リアルDOMを測定する構造認識型スケルトンローダーWebコンポーネント。Vue、React、Svelte、および純粋HTMLをサポート。

##### プログレスバー <a id="progress-bar"></a>

_A slim progress bar at the top of the page_

- [vue-scroll-progress](https://github.com/spemer/vue-scroll-progress) - シンプルなVue.jsプラグイン。ページスクロールプログレスバー。
- [vue-ins-progress-bar](https://github.com/meloalright/vue-ins-progress-bar) - インスタイル風のプログレスバー。一款インスタイル風のvue進度バーコンポーネト。
- [vue-next-progressbar](https://github.com/jambonn/vue-next-progressbar) - Vue3向けの軽量プログレスバー（1KB圧縮済）。
- [css-3d-progress](https://github.com/rofixro/css-3d-progress) - ウェブコンポーネントで書かれた3Dプログレスバー。Vue、React、Svelteをサポート。

#### ツールチップ <a id="tooltip"></a>

Tooltips / popovers

- [v-tooltip](https://github.com/Akryum/vue-tooltip) - Vue 2.xによる簡単なツールチップ。
- [vue-popper-lite](https://github.com/jambonn/vue-popper-lite) - Vue 3向けTypeScriptで記述された[popper.js tree shaking](https://popper.js.org/docs/v2/#popper-lite-tree-shaking)ベースのポップオーバーコンポーネント。

#### オーバーレイ <a id="overlay"></a>

_Overlay / modal / alert / dialog / lightbox / popup_

- [vodal](https://github.com/chenjiahan/vodal) - アニメーション付きVueモーダル。
- [v-viewer](https://github.com/mirari/v-viewer) - vue2およびvue3向けの画像閲覧コンポーネント。回転、スケーリング、ズームなどに対応。基盤は [viewer.js](https://github.com/fengyuanchen/viewerjs)
- [vuejs-dialog](https://github.com/Godofbrowser/vuejs-dialog) - 軽量で、Promiseベースのアラート、プロンプト、確認ダイアログ。
- [v-dialogs](https://github.com/TerryZ/v-dialogs) - シンプルで強力なダイアログ。モーダル、アラート、マスク、トーストモードを備えている。Vue2.xに基づく。
- [vue-sweetalert2](https://github.com/avil13/vue-sweetalert2) - スweatlaert2用のラッパー。TypeScript、Nuxt、SSRに対応
- [@kouts/vue-modal](https://github.com/kouts/vue-modal) - W3CのWAI-ARIA Dialog（モーダル）セクションに則した、カスタマイズ可能でスタック可能かつ軽量のモーダルコンポーネント
- [vue-final-modal](https://github.com/hunterliu1003/vue-final-modal) Tailwind-friendly, highly customizable, stackable modal component.
- [vue-it-bigger](https://github.com/haiafara/vue-it-bigger) - Vue.js用のシンプルな画像／（YouTube）動画のライトボックスコンポーネント
- [vuejs-confirm-dialog](https://github.com/harmyderoman/vuejs-confirm-dialog) - :speech_balloon: Vue.jsでモーダルダイアログを簡単に作成・再利用・プロミス化・チェーン構築できる方法
- [@kolirt/vue-modal](https://github.com/kolirt/vue-modal) - ⚡️ Vue3用シンプルなモーダルパッケージ
- [vuetify-resize-drawer](https://github.com/webdevnerdstuff/vuetify-resize-drawer) - vuetify-resize-drawerコンポーネントはv-navigation-drawerの機能を拡張し、ユーザーがサイズを変更できるようにする

#### マーキー <a id="marquee"></a>

- [vue3-marquee](https://github.com/megasanjay/vue3-marquee) - Vue 3アプリケーション向けにシンプルかつレスポンス性のあるスライド表示コンポーネント。0の依存関係。

#### メニュー <a id="menu"></a>

- [vue-tree-navigation](https://github.com/MisRob/vue-tree-navigation) - Vue.js 2のツリーナビゲーション（vue-router対応）
- [v-selectmenu](https://github.com/TerryZ/v-selectmenu) - Vue2向けシンプルで使いやすく、高度にカスタマイズ可能なメニュー解決策
- [vue-navigation-bar](https://github.com/johndatserakis/vue-navigation-bar) - Vueプロジェクト向けシンプルで美しく、使いやすいナビバー
- [vue-file-toolbar-menu](https://github.com/motla/vue-file-toolbar-menu) - Vueアプリ用のUIファイル／ツールバーメニュー
- [v-dropdown-menu](https://github.com/RadKod/v-dropdown-menu) - vuejs用のカスタマイズ可能なドロップダウンメニュープラグイン。SSR対応
- [vue-bottom-sheet](https://github.com/webzlodimir/vue-bottom-sheet) - Hammer.jsで作成されたVue.js用スワイプ可能なボトムシートコンポーネート
- [vue-awesome-sidebar](https://github.com/amirkian007/vue-awesome-sidebar) - vue(3x)向け現代的で高速なサイドバーメニューコンポーネント。vue-router対応
- [vue-use-fixed-header](https://github.com/smastrom/vue-use-fixed-header) - つまらない固定ヘッダーをスマートなものに変える
- [navpress](https://github.com/aaronlamz/navpress) - NavPressは静的ナビゲーションサイトを生成するCLIツール。設定ファイルを使ってナビゲーションサイトを迅速に構築できる
- [vue-my-dropdown](https://github.com/david-cm-dev/vue-my-dropdown) - TypeScript対応のVue 3用カスタマイズ可能なドロップダウンコンポーネント

#### カルーセル <a id="carousel"></a>

- [vue-easy-slider](https://github.com/shhdgit/vue-easy-slider) - Vue.jsのスライダーコンポーネント
- [vue-flux](https://github.com/deulos/vue-flux) - 20のカッコイイトランジション付きの画像スライダー
- [@egjs/vue-flicking](https://github.com/naver/egjs-flicking/blob/master/packages/vue3-flicking/README.md) - Vue.js 2および3向けの信頼性・柔軟性・拡張性に優れたカーソルコンポーネント
- [swiper](https://github.com/nolimits4web/swiper) - 公式SwiperコンポーネのVue 3用。Tree-shaking対応、SSR対応、型付け、アクセシビリティなど多数の機能
- [vue-concise-carousel](https://github.com/jambonn/vue-concise-carousel) - Vueコンパクトカーサルで真のSSRを実現。Vue 2と3で動作します。
- [vue3-carousel](https://github.com/ismail9k/vue3-carousel) - 高度にカスタマイズ可能で軽量なVue 3カーソルコンポーネント。次世代の素晴らしいプロジェクトに最適です.
- [vue-snap](https://github.com/bartdominiak/vue-snap) - 🌿 モダンで軽量なVue 3カーソル。CSS Scroll Snapで駆動されています.

#### チャート <a id="charts"></a>

- [vue-chartjs](https://github.com/apertureless/vue-chartjs) - Chart.js用のVue.jsラッパー.
- [vue-chartkick](https://github.com/ankane/vue-chartkick) - 1行のVueで美しいJavaScriptチャートを作成します
- [vue-apexcharts](https://github.com/apexcharts/vue-apexcharts) - Vue.js向け[ApexCharts](https://github.com/apexcharts/apexcharts.js)のコンポーネント。
- [vue-css-donut-chart](https://github.com/dumptyd/vue-css-donut-chart) - 純粋なCSSによるドーナツチャートを描く軽量Vueコンポーネント.
- [ZingChart-Vue](https://github.com/zingchart/zingchart-vue) - ZingChartが開発したVueコンポーネント。35以上のチャートタイプをサポートしています.
- [flowchart-vue](https://github.com/joyceworks/flowchart-vue) - Vue.js用のフローチャートおよびフローチャート設計ツールコンポーネント.
- [vue-echarts](https://github.com/ecomfe/vue-echarts) - Apache ECharts™用のVue.jsコンポーネント.
- [vue-data-ui](https://github.com/graphieros/vue-data-ui) - Vue 3用のチャートライブラリ（60以上のコンポーネント）。公式サイト：[https://vue-data-ui.graphieros.com/](https://vue-data-ui.graphieros.com/)
- [vue-speedometer](https://github.com/palerdot/vue-speedometer) - d3を使用してスピードメーターのようなゲージを表示するVueコンポーネント.

#### 時刻 <a id="time"></a>

_Display time / date / age_

- [v-idle](https://github.com/malekim/v-idle) - Vue.jsプラグインで無活動／非アクティブユーザーを検出します.
- [vue-timer-hook](https://github.com/riderx/vue-timer-hook) - React-timer-hookをインスピレーションとして作られたVue 3タイマーモジュール

#### カレンダー <a id="calendar"></a>

_Display non-editable events in a Calendar_

- [vue-simple-calendar](https://github.com/richardtallent/vue-simple-calendar) - FlexboxベースのVue月カレンダーコンポーネント。複数日イベント、ローカリゼーション、祝日エモジ、ドラッグ＆ドロップをサポート。依存関係なし.
- [vue-functional-calendar](https://github.com/ManukMinasyan/vue-functional-calendar) - Vueベースの軽量かつ高性能カレンダーコンポーネント（日付選択、日付範囲）。
- [vue-cal](https://github.com/antoniandre/vue-cal) - Vue JSフルカレンダー。依存関係なし、無駄な要素なし。🤘.
- [vue-spring-calendar](https://github.com/boussadjra/vue-spring-calendar) - Vueベースのコンポーネントで、毎日のイベントを表示するフルカレンダー機能を提供。the [`demo`](https://boussadjra.github.io/vue-spring-calendar/)。
- [vue-tailwind-datepicker](https://github.com/elreco/vue-tailwind-datepicker) - Tailwind CSS 3を用いたVue 3日付選択コンポーネド.
- [qalendar](https://github.com/tomosterlund/qalendar) - Vue 3向けイベントカレンダーおよび日付選択コンポーネント.
- [schedule-x](https://github.com/schedule-x/schedule-x) - マテリアルデザインのイベントカレンダー。カスタマイズ可能で、ライト・ダークモードおよび多言語対応をサポートしています.
- [vue-calendar](https://github.com/Kodeglot/vue-calendar) - 完全に機能的なカスタマイズ可能なカレンダー日付選択コンポーネント。Vue 3向けで、内蔵のTailwind CSSサポートあり。スケジュールアプリ、イベントカレンダー、日付選択に最適です.

#### 地図 <a id="map"></a>

- [vue-cesium](https://github.com/zouyaoji/vue-cesium) - Vue 2.x & Vue 3.x向けのCesiumコンポーネント
- [vue3-openlayers](https://github.com/MelihAltintas/vue3-openlayers) - OpenLayersと連携するVue 3のコンポーネント
- [vue-mars3d](https://github.com/marsgis/mars3d-vue-template) - Vue 2.x向け3D地球可視化JavaScript開発プラットフォーム
- [vue-maplibre-gl](https://github.com/razorness/vue-maplibre-gl) - TypeScriptで記述されたMaplibre GL JSライブラリに囲まれたVue 3.xのラッパー。スタイル切り替えとフレームレート制御を含む。
- [@vue-leaflet/vue-leaflet](https://github.com/vue-leaflet/vue-leaflet) - Leaflet (1.x)マップ向けのVue 3コンポーネント
- [@maxel01/vue-leaflet](https://github.com/maxel01/vue-leaflet) - Leaflet (2.x)マップ向けのVue 3コンポーネント
- [mapmetrics-gl](https://github.com/MapMetrics/mapmetrics-gl) - タイル、地名検索、ルート計算、検索を内蔵したMapbox GL JS互換のマッピングライブラリ
- [vue3-map-chart](https://github.com/noeGnh/vue3-map-chart) - 世界、大陸、国、カスタムマップに動的なデータを表示するVue 3コンポーネント

#### 音声／動画 <a id="audio--video"></a>

- [vue-audio-visual](https://github.com/staskobzar/vue-audio-visual) - Vue HTML5オーディオ可視化コンポーネント
- [vue-h5-audio-controls](https://github.com/cycjimmy/vue-h5-audio-controls) - Vue向けシンプルなh5音楽コントローラー
- [vue-use-sound](https://github.com/vueuse/sound) - 音声効果を再生するVueのHook
- [Vue-Player](https://github.com/display-design-studio/vue-player) - 軽量でカスタマイズ可能で実装が簡単なvueビデオプレイヤー

#### 無限スクロール <a id="infinite-scroll"></a>

- [@egjs/vue-infinitegrid](https://github.com/naver/egjs-infinitegrid/blob/master/packages/vue-infinitegrid/) - Vue.js 2向け、マスオブジェクトのようなレイアウトタイプに応じて無限のカード要素を配置するコンポーネント
- [virtua](https://github.com/inokawa/virtua) - ReactおよびVue向けのゼロ設定、高速で小型（約3kB）の仮想リストコンポーネント
- [vue-infinity](https://github.com/isaact/vue-infinity) - Vue 3向け使いやすい仮想リストコンポーネント。カスタマイズ可能なグリッドレイアウト、水平/垂直スクロール、スクロールフィット、シーク、SSRをサポート。

#### Markdown <a id="markdown"></a>

- [@f3ve/vue-markdown-it](https://github.com/f3ve/vue-markdown-it) - Vue3向けのmarkdown-itコンポーネント。使いやすく、完全に型付けされている。
- [Vue Markdown](https://github.com/litingyes/vue-markdown) - Markdown文字列をレンダリングするvueコンポーネント。特定のノードタイプのカスタムレンダリングをサポートし、AIチャットストリームによりよく適応。
- [markdown-design](https://github.com/ZeroOneJs/markdown-design) - リアルタイムレンダリングを備えた、標準搭載のVue 3 Markdownコンポーネント。目次生成、全文検索なども備えている。
- [markstream-vue](https://github.com/Simon-He95/markstream-vue) - Vue 3、Nuxt、VitePressのAIチャットUI向けのストリーミングMarkdownレンダラー。不完全なMarkdown、Mermaid、KaTeX、長文応答、ストリーミングコードブロックに対応。

#### PDF <a id="pdf"></a>

- [vue-pdf-embed](https://github.com/hrynko/vue-pdf-embed) - Vue 2およびVue 3向けPDF埋め込みコンポーネント
- [@tato30/vue-pdf](https://github.com/TaTo30/VuePDF) - Vue 3向けのPDF閲覧コンポーネント。 [Demo](https://tato30.github.io/VuePDF/)
- [@jasy/vue](https://github.com/jasy-pdf/jasy/tree/main/packages/vue) - Vue 3コンポーネントとしてPDFを作成し、ブラウザ内でそのままレンダリング。ヘッドレスブラウザは不要。実際のレイアウト、ページネーション、テーブルをサポート。XRechnungおよびZUGFeRD電子請求書も標準搭載（Nuxtモジュールあり）

#### ツリー <a id="tree"></a>

- [sl-vue-tree](https://github.com/holiber/sl-vue-tree) - Vue.js用シンプルでカスタマイズ可能なドラッグ可能なツリーコンポーネント
- [vue-finder](https://github.com/jledentu/vue-finder) - 階層データを表示するための選択、フィルタ、ドラッグ＆ドロップ機能付きコンポーネント

#### グラフ <a id="graph"></a>

- [vnodes](https://github.com/txlabs/vnodes) - SVGのインタラクティブなグラフ、図解、ノードベースの視覚ツールを作成するための汎用コンポーネント
- [v-network-graph](https://github.com/dash14/v-network-graph) - Vue 3用のインタラクティブなSVGベースのネットワークグラフ可視化コンポーネント
- [coya](https://github.com/AlexanderMykulych/coya) - 図面描画ライブラリ（Vue3専用）
- [vue-skia](https://github.com/rustq/vue-skia) - Skiaベースの2DグラフィックスVue3レンダリングライブラリ。Rustを基にソフトウェアレンダリングを実現しています
- [vue-flow](https://github.com/bcakmakoglu/vue-flow) - Vue3用のインタラクティブでカスタマイズ可能なグラフおよびフローチャートエディタ

#### ソーシャル共有 <a id="social-sharing"></a>

- [vue-share-modal](https://github.com/sttatusx/vue-share-modal) - Vue 3用の純粋で軽量で美しいシェアモーダル
- [vue3-social-sharing](https://github.com/hedint/vue3-social-sharing) - 主要なソーシャルネットワークでのリンク共有を可能にする、スタイルに依存しないVue 3プラグイン

#### QRコード <a id="qr-code"></a>

- [vue-qrcode-reader](https://github.com/gruhn/vue-qrcode-reader) - QRコードの検出とデコードを行うためのVue.jsコンポーネントセット
- [vue3-qr-reader](https://github.com/HJ29/vue3-qr-reader) - Vue 3用のQRリーダーコンポーネント。vue-qrcode-readerをVue 3互換性にリファクタリング
- [qrcode.vue](https://github.com/scopewu/qrcode.vue) - QRコードを生成するVue.jsコンポーネのためのコンポーネント。Vue 2およびVue 3に対応しています

#### 検索 <a id="search"></a>

- [reactivesearch-vue](https://github.com/appbaseio/reactivesearch) - Elasticsearchを用いたデータ駆動型アプリケーションの開発に必要なUIコンポーネント
- [vue-search-input](https://github.com/kouts/vue-search-input) - StorybookおよびGitHubのグローバル検索入力にインスパイアされたVue 3用の検索入力コンポーネント

#### その他 <a id="miscellaneous"></a>

- [vue-kanban](https://github.com/BrockReece/vue-kanban) - 柔軟なドラッグ＆ドロップによるカンバンボードコンポーネント
- [v-offline](https://github.com/vinayakkulkarni/v-offline) - Vueアプリケーションにおけるオフライン・オンラインイベントの検知（最小390b未満）をシンプルかつ軽量に実現
- [vue-connection-listener](https://github.com/Botre/vue-connection-listener) - Vueのイベントバスプラグイン（オンライン／オフライン変更を監視）
- [vue-prom](https://github.com/Botre/vue-prom) - Vueのプロミスラッパーコンポーネント
- [vue-identify-network](https://github.com/vinayakkulkarni/vue-identify-network) - ⚡️ユーザーが使用しているインターネットの種類を特定！
- [vue-command](https://github.com/ndabAP/vue-command) - 完全に動作するVue.js用のテルミナルエミュレーター
- [vue-fixed-header](https://github.com/potato4d/vue-fixed-header) - TypeScriptで書かれたVue.js用シンプルかつクロスブラウザ対応の固定ヘッダーコンポーネント
- [tsParticles](https://github.com/matteobruni/tsparticles) - Javascriptライブラリで簡単に高設定可能かつインタラクティブな粒子アニメーションを作成
- [vue-image-zoomer](https://github.com/samjonesigd/vue-image-zoomer) - Vue.js 2および3向けの、タッチデバイスでも動作する画像ズームコンポーネント
- [vue-advanced-chat](https://github.com/antoine92190/vue-advanced-chat) - ファイル、画像、動画、音声、エモジ、カスタムアクションなど、豊富な機能と完全にカスタマイズ可能なチャットルームコンポーネント
- [vue-word-highlighter](https://github.com/kawamataryo/vue-word-highlighter) - Vue 2およびVue 3向けのワードハイライトライブラリ
- [vue3-emoji-picker](https://github.com/delowardev/vue3-emoji-picker) - Vue3向けシンプルかつ強力なエモジピッカー
- [vue-web-terminal](https://github.com/tzfun/vue-web-terminal) - 💻 Vue2およびVue3向けに機能豊かで強力なウェブターミナルプラグイン（機能的なウェブコマンドラインターミナルプラグイン）
- [vite-plugin-vue-preview](https://github.com/liting-yes/vite-plugin-vue-preview) - vite用のコードプレビュープラグイン（もちろん、コンポーネントを別途使用することも可能です）
- [@kolirt/vue-web3-auth](https://github.com/kolirt/vue-web3-auth) - 💎 WalletConnect v2およびwagmiをベースにしたVue3アプリ向けWeb3認証
- [zoom-image](https://willnguyen1312.github.io/zoom-image/) - ウェブ上で画像をズームする、シンプルで強力なフレームワークに依存しないライブラリ
- [vue-wheel-spinner](https://github.com/ilyasozkurt/vue-wheel-spinner) - シンプルでカスタマイズ可能な輪切り型ランダム選択コンポーネント。 [See Demo](https://vue-wheel-spinner-demo.vercel.app/)
- [vue-progress-circle](https://github.com/keiwen/vue-progress-circle) - vue3向けの円形プログレスバーコンポーネント
- [vue-awesome-button](https://github.com/rcaferati/vue-awesome-button) - Vue 3Dボタンコンポーネント。進行状態、ソーシャルシェア、テーマ、アニメーション遷移をサポート
- [vuehex](https://github.com/vvollers/vuehex) - Vue 3向けの高速かつバーチャル化されたヘキサデシマルビューとエディタ。バイナリデータの表示と編集が可能。 [Demo](https://vvollers.github.io/vuehex/demo/)
- [vue3-icon-picker](https://github.com/noeGnh/vue3-icon-picker) Icon picker component for Vue 3.
- [custom-highlight](https://github.com/roydukkey/custom-highlight) - 要素内の任意のテキストをCSSカスタムハイライトAPIでスタイル設定するためのVueディレクティブ。 [Docs](https://custom-highlight.pages.dev/)

#### タブ <a id="tabs"></a>

- [vue-lumino](https://github.com/tupilabs/vue-lumino) - Vue.jsとJupyter Lumino（PhosphorJS）を統合し、イベントリスナーとVueの反応システムを介してDOMおよびVDOMを連携するコンポーネント
- [vue3-tabor](https://github.com/daylenjeez/vue3-tabor) - 豊富なAPIを備えたVue 3用タブコンポーネント。keep-aliveおよびiframe統合をサポート

#### フォーム <a id="form"></a>

_Let the user create & edit data_

##### 電話番号入力フォーマッター <a id="phone-number-input-formatter"></a>

- [vue-tel-input](https://github.com/EducationLink/vue-tel-input) - Vueで国際的な電話番号入力フォーム。

##### ピッカー <a id="picker"></a>

- [vue-scroll-picker](https://github.com/wan2land/vue-scroll-picker) - Vue 2.x向けスクロールピッカーコンポーネント。マウス（もしくはホイール）およびタッチのすべてのジェスチャーをサポート
- [vue-roller-picker](https://github.com/keiwen/vue-roller-picker) - vue3向けロールデザインのセレクタコンポーネント
- [vue-smooth-picker](https://github.com/hiyali/vue-smooth-picker) - Vue 3向けのスムーズピッカー（iOSのネイティブdatetimeピッカーに似たもの）

##### ジェネレーター <a id="generator"></a>

- [form-create](https://github.com/xaboy/form-create) - 動的レンダリング、データ収集、バリデーション、提出機能を備えたフォームビルダー。JSONデータをサポート
- [vue3-otp-input](https://github.com/ejirocodes/vue3-otp-input) - Vue 3.xおよびVue Composition APIを用いて構築された、完全にカスタマイズ可能なワンタイムパスワード（OTP）入力コンポーネント
- [Vueform](https://vueform.com) - (おそらく) Vue.js向け最も包括的なフォームビルダー [Online Demo](https://vueform.com/examples)
- [Everright-formEditor](https://github.com/Liberty-liu/Everright-formEditor) - 視覚的なドラッグ＆ドロップによる低コードフォームエディタ

###### 日付ピッカー <a id="date-picker"></a>

_Date / datetime / time Picker_

- [VCalendar](https://vcalendar.io/) Very customizable and powerful calendar/datepicker component with many features and good documentation.
- [vue-datepicker](https://github.com/mathieustan/vue-datepicker) - ZXQのクリーンでレスポンスの良い日付選択肢。Material DesignスタイルでVuejs 2.x用。日付/月/四半期選択、日付範囲選択：新機能
- [vue-timepicker](https://github.com/manos02/vue3-time-picker) - Vue 3向け軽量かつカスタマイズ可能なタイムピッカー。TypeScript対応。単一選択／範囲選択、複数フォーマット、簡単なスタイル設定、バリデーションなどに対応
- [vue-month-spinner-picker](https://github.com/jlc488/vue-month-spinner-picker) - iOS風ドラムロール月選択ピッカー（Vue 3用）。インエリタススクロール、ボトムシートモーダル、最小/最大制限、i18nおよびCSS変数によるテーマ設定。依存関係なし

##### 選択 <a id="select"></a>

- [vue-select](https://github.com/sagalbot/vue-select) - jQueryのオーバーヘッドを一切無くした、Select2に類似した機能を備えたネイティブVue.jsコンポーネント
- [vue-multiselect](https://github.com/monterail/vue-multiselect) - Vue.js用のユニバーサル選択/マルチ選択/タグ付けコンポーネント
- [v-region](https://github.com/TerryZ/v-region) - シンプルな地域選択コンポーネント。中国の行政区分データを提供
- [v-selectpage](https://github.com/TerryZ/v-selectpage) - Vue2向け強力な選択コンポーネント。リストまたはテーブルビューのページネーション、タグによる複数選択、i18nおよびサーバー側リソース対応
- [vue-cool-select](https://github.com/iliyaZelenko/vue-cool-select) - Bootstrap / Material Designテーマ。スロット、自動補完、イベント、バリデーションなどに対応
- [vue-select-sides](https://github.com/juliorosseti/vue-select-sides) - Vue.jsで2側データを選択するためのコンポーネント
- [@vueform/multiselect](https://github.com/vueform/multiselect) - Vue 3向けマルチ選択コンポンエント。単一選択、マルチ選択、タグ付けオプションを提供
- [vue3-select-component](https://github.com/TotomInc/vue3-select-component) - Vue 3 Selectコンポーネント。単一選択およびマルチ選択に対応。TypeScriptによる最適なUXサポート、簡単なスタイル設定、スロットなど。約4.4KB
- [vue-superselect](https://github.com/nemanjamalesija/vue-superselect) - ヘッドレス、アクセシブル、TypeScript中心の選択/コマボックスコンポーネント（Vue 3用）。ダブルコンポジットコンポーネントおよびコマポジブルAPIを備えている

##### ドラッグ＆ドロップ <a id="drag-and-drop"></a>

- [Vue DnD Kit](https://github.com/zizigy/vue-dnd-kit) - Vue 3向け軽量かつパフォーマンスの高いドラッグ＆ドロップツールキット。コマポジブルAPI、キーボードナビゲーション、アクセシビリティサポート、高度なカスタマイズオプションを提供。あらゆるケースおよびタッチデバイスに対応。React DnD Kitを参考にした
- [vuedraggable-plus](https://github.com/Alfred-Skyblue/vue-draggable-plus) - Vue.jsでドラッグ＆ドロップソートモジュールを提供するコンポーネント。Vue>=v3またはVue>=2.7に対応。Sortable.jsに基づく
- [vue-draggable-resizable](https://github.com/mauricius/vue-draggable-resizable) - Vue2向けドラッグ可能かつリサイズ可能な要素を提供するコンポーネント
- [vue3-dnd](https://github.com/hcg1023/vue3-dnd) - React DnDのComposition API実装。ソート可能および自由にドラッグ可能な要素をComposition APIで使用可能。Vue2およびVue3に対応
- [sortablejs-vue3](https://github.com/MaxLeiter/sortablejs-vue3) - Vue 3向け、SortableJSを薄いラッパーとして提供するコンポーネント
- [vue-fluid-dnd](https://github.com/carlosjorger/vue-fluid-dnd) - Vue 3向けドラッグ＆ドロップ、ソート可能、依存関係のないライブラリ。魅力的なアニメーションと、Vueコマポジブルを用いた使いやすいAPIを提供

##### 型選択 <a id="type-select"></a>

_Let the user select a tag / something while typing_

- [v-image](https://github.com/vinayakkulkarni/v-image) :camera: Tiny little component for input type=file (< 1kb, gzipped)

##### カラーピッカー <a id="color-picker"></a>

- [radial-color-picker](https://github.com/radial-color-picker/vue-color-picker) - サイズ、アクセシビリティ、パフォーマンスに重点を置いたシンプルなカラーピッカー
- [vue-color-input](https://github.com/gVguy/vue-color-input) – Vue 3 color picker component whose goal is to replace `<input type="color">`
- [vuetify-color-field](https://github.com/webdevnerdstuff/vuetify-color-field) - Vuetify Color FieldはVuetifyのVTextFieldカラーピッカーコンポーネント

##### スイッチ <a id="switch"></a>

_Switch / on/off toggle / checkbox_

- [vue-toggles](https://github.com/juliandreas/vue-toggles) - 高度にカスタマイズ可能でアクセスしやすいトグルコンポーネント
- [vue-collapsed](https://github.com/smastrom/vue-collapsed) - Vue 3におけるCSSの高さ遷移（任意からauto、および逆）。アコーディオン対応。
- [vue-enhanced-check](https://github.com/keiwen/vue-enhancedCheck) - 強化されたチェックボックス／ラジオ入力＋トグルコンポーネント（Vue 3用）

##### マスク入力 <a id="masked-input"></a>

- [vue-r-mask](https://github.com/raidan00/vue-r-mask) - JavaScriptの正規表現に類似したテンプレートを持つディレクティブ。
- [vue-currency-input](https://github.com/dm4t2/vue-currency-input) - Vue.js用の通貨形式の数字入力が容易なコンポーネント。
- [vue-input-facade](https://github.com/RonaldJerez/vue-input-facade) - Vueに特化した軽量かつ依存関係のない入力マスクライブラリ。元は有名な_vue-text-mask_のフォークだが、その後積極的に維持され、多くの改善が加えられている。

##### リッチテキスト編集 <a id="rich-text-editing"></a>

- [vue-froala-wysiwyg](https://github.com/froala/vue-froala-wysiwyg) - Froala WYSIWYG HTMLエディタの公式VueJSプラグイン。
- [vue-trix](https://github.com/hanhdt/vue-trix) - Vue.js用のシンプルかつ軽量なTrix富テキストエディタ
- [tiptap](https://github.com/heyscrumpy/tiptap) - Vue.js用のレンダリングなしで拡張可能な富テキストエディタ
- [ckeditor5-vue](https://github.com/ckeditor/ckeditor5-vue) - Vue.js用の公式CKEditor 5富テキ連エディタコンポーネント。
- [vue-quilly](https://github.com/alekswebnet/vue-quilly) - 🪶 Tiny Vue 3コンポーネント。Quill v2ベースのWYSIWYGエディタを作成するのに役立つ。

##### 画像操作 <a id="image-manipulation"></a>

_Edit images_

- [vue-cropper](https://github.com/xyxiao001/vue-cropper) - vue2.0用の画像切り抜きプラグイン
- [vue-croppie](https://github.com/jofftiquez/vue-croppie) - もう一つの画像カッター
- [vue-advanced-cropper](https://github.com/Norserium/vue-advanced-cropper) - 高度なカッターで、ほぼどんなカッターでも作成できるようになります
- [vue-img-cutter](https://github.com/acccccccb/vue-img-cutter) - Vueプラグインによる画像切り取りツール。使い勝手が非常に良い。
- [vue-picture-cropper](https://github.com/chengpeiquan/vue-picture-cropper) - Vue 3用のシンプルで使いやすい画像切り抜きコンポーネント。
- [vue-polygon-cropper](https://github.com/TaTo30/vue-polygon-cropper) - 多角形形状で画像を切り抜くためのシンプルなコンポーネント。 [Demo](https://stackblitz.com/edit/vitejs-vite-urtqie?file=src%2FApp.vue)

_Display images_

- [TwicPics](https://github.com/TwicPics/components) - imgおよびvideoタグを置き換えるコンポーネント。Lazy Loading、CLS最適化、プログレッシブロードが標準で実装され、メディア最適化および操作を可能にする。
- [hevue-img-preview](https://github.com/heyongsheng/hevue-img-preview) - Vue 2およびVue 3向けの画像プレビュー。モバイルおよびデスクトップに対応。 [(demo)](https://heyongsheng.github.io/en/guide/profile.html)

##### ファイルアップロード <a id="file-upload"></a>

- [vue-upload-component](https://github.com/lian-yue/vue-upload-component) - Vueアップロードコンポーネント。複数ファイルアップロード、ディレクトリアップロード、ドラッグアップロード、ディレクトリをドラッグ。Vue >= 2.0に対応。

##### コンテキストメニュー <a id="context-menu"></a>


##### その他 <a id="miscellaneous-1"></a>

- [vue-poll](https://github.com/ppietris/vue-poll) - Vue.js用の投票コンポーネント
- [vue-diagrams](https://github.com/gwenaelp/vue-diagrams) - vue.js用の図解コンポーネント。React-diagramsを参考にした。
- [vue-simple-password-meter](https://github.com/miladd3/vue-simple-password-meter) - 依存関係のない軽量パスワード強度メーター
- [v-use-places-autocomplete](https://github.com/wobsoriano/v-use-places-autocomplete) - 📍 Google Maps Places Autocomplete 用の Vue コンポジブル
- [vuetify-inline-fields](https://github.com/webdevnerdstuff/vuetify-inline-fields) - Vuetify インラインフィールドコンポーネントライブラリは、アプリケーション内に洗練された効率的なインラインフォームフィールドを構築するために再利用可能なUIコンポーネントを豊富に提供しています
- [vue-integer-plusminus](https://github.com/keiwen/vue-integer-plusminus) - vue3用の整数入力コンポーネント。増減ボタン付きでスピンボタンとして利用可能。キーボード操作に対応

##### ウィザード <a id="wizard"></a>

- [vue-stepper-component](https://github.com/adi518/vue-stepper-component) - Vuex対応で完全にカスタマイズ可能なステッパーコンポーネント。ゼロ依存ライブラリ
- [vue3-form-wizard](https://github.com/parsajiravand/vue3-form-wizard) - vue3ベースのコンポーネント。外部依存なしでタブウィザードの管理を簡素化

#### Canvas <a id="canvas"></a>

- [vue-konva](https://github.com/rafaesc/vue-konva) - VueとCanvasを用いたJavaScriptライブラリ。複雑なキャンバスグラフィックをVueで描画
- [vue3-signature](https://github.com/WangShayne/vue3-signature) - Vue 3用の電子署名コンポーネント

#### リンクプレビュー <a id="link-preview"></a>

- [link-prevue](https://github.com/nivaldomartinez/link-prevue) - リンクプレビューを生成するための柔軟なコンポーネント。

#### ツアー <a id="tour"></a>

- [vue-stage-play](https://github.com/f820602h/vue-stage-play) - Vue3向けのステップバイステップガイドツアーコンポーネント。

### UIユーティリティ <a id="ui-utilities"></a>

#### イベント処理 <a id="event-handling"></a>

_Handling of user events (scroll, click, key strike, ...)_

- [vue-global-events](https://github.com/shentao/vue-global-events/) – A component to handle global events (like shortcuts) using Vue’s event modifiers
- [vue-tabevents](https://github.com/Almoullim/vue-tabevents) – Easy communication between other opened tabs
- [vue-exit-intent](https://github.com/nickap/vue-exit-intent) - ✨ ユーザーの退出意図を扱うVueのコマース。

#### レスポンシブデザイン <a id="responsive-design"></a>

- [vue-responsive](https://github.com/reinerBa/Vue-Responsive): Vue.js(2.x) directive to hide/show HTML-elements with the Bootstrap 4, 3 or self defined breakpoints.

#### フォーム <a id="form-1"></a>

- [Form Builder](https://github.com/laravel-enso/formbuilder) - VueおよびLaravelに基づくJSONテンプレートベースのフォームビルダー
- [vue-autofocus-directive](https://github.com/Botre/vue-autofocus-directive) - Vueの自動フォーカスディレクティブ
- [FormKit](https://github.com/formkit/formkit) - Vue 3フォーム開発。10倍速。フォーム入力、バリデーション、送信、エラー処理、生成、アクセシビリティ、テーマ設定など
- [vrf](https://github.com/dimailn/vrf) - 宣言型かつスケーラブルなUIに依存しないマーカーベースのVueフォーム
- [tracked-instance](https://github.com/rudnik275/tracked-instance) - 大規模フォームの構築とすべての変更の追跡
- [Vorm](https://github.com/Flo0806/vorm) - ゼロ依存かつフルスロット制御を備えた、スキーマ駆動型かつ完全にバリデーションされたVue 3フォームエンジン
- [VueFormify](https://github.com/mateenagy/vue-formify) - Vue 3で強力で型安全なフォームを構築
- [Enforma](https://encolajs.com/enforma/) - UIに依存せず、スキーマ対応のフォームライブラリ。30以上の内蔵バリデーションルール。Vuetify、PrimeVue、Quasar向けUIプレセット
- [piying-view](https://github.com/piying-org/piying-view) - フロントエンドフォームソリューション。型安全。Vue 3
- [Formisch](https://formisch.dev/vue/guides/introduction/) - パフォーマンス、型安全、バンドルサイズに注目したフォームライブラリ

##### バリデーション <a id="validation"></a>

- [vee-validate](https://github.com/logaretm/vee-validate) - シンプルなVue.js入力バリデーションプラグイン
- [vuelidate](https://github.com/monterail/vuelidate) - シンプルで軽量なモデルベースバリデーション。Vue.js用
- [FormVuelar](https://github.com/janiskelemen/formvuelar) - サーバー側バリデーションを意識したVueフォームコンポーネント
- [vue-final-validate](https://phphe.github.io/vue-final-validate/) - Vue開発経験から生まれたバリデーションソリューション、ネストや非同期もサポート。
- [@vuito/vue](https://github.com/mathix420/vuito) - シンプルで軽量、同質的かつテンプレートベースのバリデーションライブラリ。
- [vest](https://github.com/ealush/vest) - 🦺 ユニットテストにインスパイアされた、宣言型フォームバリデーションフレームワーク。
- [vorms](https://github.com/Mini-ghost/vorms) - Vue Form Validate と Composition API。
- [regle](https://github.com/victorgarciaesgi/regle) - ✅ Vue.js 用のヘッドレスフォームバリデーションライブラリ。
- [validation-composable](https://github.com/nexxtmove/validation-composable) - ✅ Vue用の軽量バリデーション — 40行のコードだけ。
- [vue-uform](https://github.com/tu6ge/vue-uform) - Vue 3用のコンポーネント中心、未スタイル、柔軟なフォームバリデーションライブラリ。
- [validup](https://github.com/tada5hi/validup) - 反応性フォーム、グループ、構造化問題に対するパスベースのバリデーションを提供するVue 3のコマース（`@validup/vue`）
- [NotForm](https://github.com/favorodera/notform) - ヘッドレスでコンポジブルなVue.jsフォームバリデーション。UIとスキーマ（Zod、Valibot、ArkType、またはStandard-Schemaに準拠する任意のバリデータ）を自前で提供。

#### リサイズ <a id="resize"></a>

- [vue-not-visible](https://github.com/PxyUp/vue-not-visible) - VueでDOMから削除するディレクティブ（v-ifのように、画面サイズがブレークポイント以下の場合に要素を非表示）

#### スクロール <a id="scroll"></a>

_Virtual scrollbar_

- [vuescroll](https://github.com/YvesCoding/vuescroll) - Vue.jsに基づくスクロールプラグインで、PCとモバイルでのスクロールを統一。

_Detect when components enter viewport_

- [vue-use-active-scroll](https://github.com/smastrom/vue-use-active-scroll) - PCおよびモバイルでリンクをハイライトするVue 3メニュー／サイドバー対応。

#### ルーティング <a id="routing"></a>

- [vue-router](https://github.com/vuejs/vue-router) - Vue.jsの公式ルーター。
- [v-route-generate](https://github.com/weiquanju/v-route-generate) - vue-router 4.x用のルート生成ツール。
- [kitbag/router](https://github.com/kitbagjs/router) - vuejs用の型安全ルーター。
- [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) - Vue Routerの次世代ファイルベース型ルーティング。
- [vite-plugin-vue-middleware](https://github.com/awdr74100/vite-plugin-vue-middleware) - Vue Router用のファイルベースナビゲーションガード。
- [vue-router-citadel](https://github.com/Kassaila/vue-router-citadel) - Vue Router用のミドルウェア駆動ナビゲーション制御システム。

#### 遅延読み込み <a id="lazy-load"></a>

- [vue-lazy](https://github.com/bartdominiak/vue-lazy) - Intersection APIに基づく軽量画像／写真のlazyload。
- [vue3-lazyload](https://github.com/jambonn/vue-lazyload) - vue 3アプリケーションにおける画像のlazyload用Vueモジュール。

#### ページネーション <a id="pagination"></a>

- [vue-paginate-al](https://github.com/alziqziq/vue-paginate-al) - Vue paginate でデータを返す。
- [vue-tiny-pagination](https://github.com/coderdiaz/vue-tiny-pagination) - 小さなページネーションを作成するVueコンポーネント。
- [laravel-vue-pagination](https://github.com/gilbitron/laravel-vue-pagination) - Laravel ページネーションを Bootstrap と連携させる Vue.js ページネーションコンポーネント
- [vue-lpage](https://github.com/Botre/vue-lpage) - 低レベルの Vue ページネーションコンポーネント
- [v-page](https://github.com/TerryZ/v-page) - Vue2.x をベースにしたシンプルなページネーションバー（長さメニュー、i18n対応）
- [vue-use-paginator](https://github.com/Sun0fABeach/vue-use-paginator) - Vue 3 の use-hook を使ってデータを反応的にページネートし、ページネーションボタンを配置。完全にレンダリングなし。
- [vueginate](https://github.com/lombervid/vueginate) - Vue 3 用のシンプルなページネーションコンポーネント
- [vue-pagination](https://github.com/asika32764/vue-pagination/) - フレームワークに統合可能なスタイルなしページネーション（コマース可能）
- [@nabaraj/vue-pagination](https://github.com/nabaraj/vue-pagination-npm-package) - TypeScript タイプとカスタマイズ可能なスロットを備えた軽量な Vue 3 ページネーションコンポーネント

#### アニメーション <a id="animation"></a>

- [vue-animate](https://github.com/asika32764/vue-animate) - Vue.js 用の Animate.css のポート。Vue の内蔵トランジションと併用可能。
- [v-odometer](https://github.com/JefferyHus/v-odometer) - 数値のトランジションをスムーズに。このライブラリを使用してアプリケーションにスムーズなアニメーションを実現（数値のみ適用）。
- [vue-slide-up-down](https://github.com/danieldiekmeier/vue-slide-up-down) Like jQuery's `slideUp` / `slideDown`, but for Vue!
- [vue-kinesis](https://github.com/Aminerman/vue-kinesis) A set of components to create interactive animations
- [vue3-lottie](https://github.com/megasanjay/vue3-lottie) A component for importing and displaying Lottie animations in Vue 3
- [@morev/vue-transitions](https://github.com/morevm/vue-transitions) Transitions library for Vue 2 and 3 with no CSS needed
- [@formkit/auto-animate](https://github.com/formkit/auto-animate) Add motion to your apps with a single line of code
- [blottie](https://github.com/Applelo/blottie) Lottie component for Vue 3
- [@lottiefiles/dotlottie-vue](https://github.com/LottieFiles/dotlottie-web) Official LottieFiles Vue component supporting the .lottie format (75% smaller files); convert and preview with [IconKing](https://iconking.net)
- [vue-countup-v3](https://github.com/jizai1125/vue-countup-v3) A Vue 3 Component for animation counting.
- [timered-counter](https://github.com/siaikin/timered-counter) A counter web component with smooth animations
- [ssgoi](https://github.com/meursyphus/ssgoi) - スプリング物理に基づくネイティブアプリ風のページトランジション、モバイルでは60fps、SSR対応、すべての現代ブラウザで動作

#### メタタグ <a id="meta-tags"></a>

_Manage meta information in the document head_

- [Unhead](https://github.com/unjs/unhead)

#### ポータル <a id="portal"></a>

_Move a DOM node to a target DOM node_

- [Official: Vue Teleport](https://vuejs.org/guide/built-ins/teleport)
- [portal-vue](https://portal-vue.linusb.org/) - DOMのどこかにあなたのコンポーネントのテンプレートをレンダリングできるVueプラグイン（仮想DOMレベルで動作し、DOM内のノードを移動しない）

#### SVG <a id="svg"></a>

- [vue-svgicon](https://github.com/MMF-FE/vue-svgicon) - SVGアイコンコンポーネントを作成するツール。（Vue 2.x）
- [vue-inline-svg](https://github.com/shrpne/vue-inline-svg) - VueコンポーネントがSVGソースを動的にインラインで読み込み、CSSまたはJSでスタイルを操作可能。 (vue 2.x, vue 3.x) `<svg>`
- [lucide-motion-vue](https://github.com/respeak-io/lucide-motion-vue) - Vue 3向けの516のアニメーション付きLucideアイコン。エргonomicなホバーやタップ、ビュー領域トリガーと、コンポジブル`<AnimateIcon>`ラッパーを備え、Tree-shakableで、1つのチャンクごとに1アイコン。TypeScriptベース。 (vue 3.x)
- [GeoIcons](https://geoicons.io) - すべての国、領土、世界地域の地図アイコンを、Tree-shakable Vue 3 コンポーネントとして提供。

#### その他 <a id="miscellaneous-2"></a>

- [v-github-icon](https://github.com/vinayakkulkarni/v-github-icon) - Vue コンポーネのデモの右／左隅に「that」の小さな GitHub アイコンを簡単に追加できる 🤙

#### WebGL <a id="webgl"></a>

- [VueGL](https://github.com/vue-gl/vue-gl) - three.js を使って Vue.js で反応的に3Dグラフィックスを描画するコンポーネント
- [TresJs](https://github.com/tresjs/tres) - Vue コンポーネントを用いた宣言型 ThreeJS

#### 全画面表示 <a id="fullscreen"></a>

- [vue-fullscreen](https://github.com/mirari/vue-fullscreen) - フルスクリーンをサポートするシンプルなVueコンポーネント（Vue2およびVue3に対応）

#### 印刷 <a id="printing"></a>

- [vue-to-print](https://github.com/siaikin/vue-to-print) - ブラウザ上でVue3コンポーネントをプリントできる。Chrome、Safari、Firefox、EDGEに対応。

### ユーティリティ <a id="utilities"></a>

_Utilities not directly related to the UI_

- [vueuse](https://github.com/vueuse/vueuse) - Vue 2.x および Vue 3.x に適用可能な基本的な Vue コンポジションAPIユーティリティのコレクション
- [vue-concurrency](https://github.com/MartinMalinda/vue-concurrency) - Vue およびコンポジションAPI用の非同期処理の封じ込みと並列処理の管理用ライブラリ
- [vue-macros](https://vue-macros.dev) - Vue へのマクロやシンタックスシュガーの拡張と探索。
- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) - 📲 Vue 用のオンデマンドコンポーネント自動インポート
- [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) - Vite、Webpack、Rollup でオンデマンドで Vue API を自動インポート
- [vue3-websocket](https://github.com/muzychenka/vue3-websocket) - Zodで入力されたWebSocketデータを検証します

#### TypeScript <a id="typescript"></a>

- [vue-facing-decorator](https://github.com/facing-dev/vue-facing-decorator) - Vue3 TypeScriptクラスコンポーネントのデコレーター。Vue2における `vue-property-decorator` に類似。

#### HTTPリクエスト <a id="http-requests"></a>

_Retrieve data over HTTP_

- [vue-api-query](https://github.com/robsontenorio/vue-api-query) - REST API向けリクエストをシンプルかつ美しく構築する方法
- [vue-request](https://github.com/Attojs/vue-request) - ⚡️ Vue 3のコマースでデータ取得を実現。SWR、ポーリング、エラー再試行、キャッシュリクエスト、ページネーション、その他便利な機能をサポート
- [swrv](https://github.com/Kong/swrv) - Vue向けのStale-while-revalidateデータ取得
- [vue-vroom](https://github.com/frederikbache/vue-vroom) - REST API向けプラグイン。最小設定で型安全なストアとモックAPIを迅速に生成します
- [tanstack-query](https://github.com/tanstack/query) - 強力な非同期状態管理
- [@stitchapi/vue](https://github.com/rejifald/StitchAPI/tree/main/packages/vue) - ストリーミング優先のStitchAPIバインディング：型付き、検証済み `useStitch` / `useStitchStream` コンポジブルで、レスポンスのデルタが到着するたびにリレンダリング。

#### 国際化 <a id="i18n"></a>

_Internationalization / L10n / localization / translation_

- [vscode-vue-i18n-ally](https://github.com/antfu/vue-i18n-ally) - VSCodeでより良いVue-i18n体験を提供する拡張機能
- [v-intl](https://github.com/vinayakkulkarni/v-intl) - 素晴らしいVue 3アプリにグローバルなIntlラッパーを提供 🔉
- [v-google-translate](https://github.com/i7eo/v-google-translate) - Google翻訳を活用したVue.jsアプリの国際化を行うコンポーネント
- [fluent-vue](https://github.com/Demivan/fluent-vue) - Vue.js（2および3）向け国際化プラグイン。Fluent.js（JavaScript実装のProject Fluent）とのVue.js統合
- [vue-next-i18n](https://github.com/Aaronlamz/vue-next-i18n) - Vue 3向け軽量な国際化プラグイン
- [tolgee/vue](https://github.com/tolgee/tolgee-js/tree/main/packages/vue) - Vue 3アプリ開発中にユーザーが直接翻訳できるウェブベースのローカリゼーションツール
- [intlify/vue-i18n-next](https://github.com/intlify/vue-i18n-next) - Vue 3向けVue I18n
- [vue-intlayer](https://github.com/aymericzip/intlayer) - vue 3向けIntlayer国際化ソリューション
- [vue-tiny-translation](https://github.com/makio64/vue-tiny-translation) - 非常に軽量（0.32KB）なVue3用反応型翻訳プラグイン。[Demo](https://vue-tiny-translation.netlify.app/)
- [Loccy](https://loccy.dev) - VS CodeベースのエディタでVue-i18nを簡単に管理。スマートAI翻訳とキー提案を備えています

#### カスタムイベント <a id="custom-events"></a>


#### 永続化 <a id="persistence"></a>

_LocalStorage etc._


#### 状態管理 <a id="state-management"></a>

- [pinia](https://github.com/posva/pinia) - 🍍 コンポジションAPIを活用したVue向け、直感的で型安全かつ軽量かつ柔軟なストア。DevTools対応
- [effector](https://github.com/zerobias/effector) — Fast and powerful reactive state manager. Effector lets you write simple, fast and type safe code and manage reactive state with ease.
- [v-bucket](https://github.com/mediv0/v-bucket) - 📦 Vue 3.0向け高速・シンプル・軽量な状態管理。コンポジションAPIを活用し、Vuexにインスパイアされたもの
- [vue-datatable-url-sync](https://github.com/socotecio/vue-datatable-url-sync) - データテーブルのオプションとフィルタをURLと同期し、リフレッシュやナビゲーション後もユーザーの好みを維持
- [harlem](https://github.com/andrewcourtice/harlem) - シンプルで中立的で軽量かつ拡張可能なVue 3向け状態管理
- [exome](https://github.com/Marcisbee/exome) - 深層ネストされた状態を扱うシンプルなプロキシベースの状態マネージャー
- [Stan](https://stan.party) - 最小限の、原子的なステートマネージャー（フレームワークに依存しない、Vueバインディング付き）

##### MobX <a id="mobx"></a>

- [mobx-vue-lite](https://github.com/mobxjs/mobx-vue-lite) - MobXベースのComposition APIに基づいた軽量Vue3バインディング。

##### Pinia <a id="pinia"></a>

- [pinia-xstate](https://github.com/wobsoriano/pinia-xstate) - あなたのxstateステートマシンをグローバルなPiniaストアに配置してください
- [pinia-orm](https://github.com/CodeDredd/pinia-orm) - Piniaストアへのオブジェクト・リレーションマッピングアクセスを可能にするPiniaプラグイン。 🍍
- [pinia-persistedstate-2](https://github.com/iendeavor/pinia-plugin-persistedstate-2) - ページのリロード間でPiniaのステートを保持し、再読み込みします
- [@tauri-store/pinia](https://github.com/ferreira-tb/tauri-store/tree/main/packages/plugin-pinia) - Tauri用の持続的なPiniaストア
- [pinia-plugin-unstorage](https://github.com/litingyes/pinia-plugin-unstorage) - unjs/unstorageを用いたPiniaの最適な保存プラグイン
- [@erlihs/pinia-plugin-storage](https://github.com/erlihs/pinia-plugin-storage) - 包括的なステート保存と同期でありながら、シンプルにできるように設計されています

##### 認証／認可 <a id="authenticationauthorization"></a>

- [vue-auth-href](https://github.com/nachodd/vue-auth-href) - 保護されたルートスキーマの下にあるファイルをダウンロードできるVueJSディレクティブ

##### Vuexユーティリティ <a id="vuex-utilities"></a>

- [jsonapi-vuex](https://github.com/mrichar1/jsonapi-vuex) - JSONAPI APIとVuexストアを組み合わせ、クライアント側でレコードを再構成・正規化します
- [vuex-masked-modules](https://github.com/Silksofthesoul/vuex-masked-modules) - Vuexプラグインでモジュールのデータ構造をlocalStorageに保存し、データをマスクまたは暗号化することで探索が困難にします。Vue 3およびVuex 4向けに設計されています

#### GraphQL <a id="graphql"></a>

- [vue-apollo](https://github.com/Akryum/vue-apollo) - VueJSにおけるApollo/GraphQL統合。

#### コードスタイル <a id="code-style"></a>

_Improve readability of code_

- [vue-types](https://github.com/dwightjack/vue-types) - Vue Prop Typesの定義
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) - Vue.jsプロジェクト用のEslintプラグイン
- [vue-ts-types](https://github.com/FloEdelmann/vue-ts-types) - 軽量なTypeScript中心のVueプロパティ型定義

#### CSS <a id="css"></a>

- [fela-vue](https://github.com/houd1ni/fela-vue) - 柔軟性とチームワークを両立したVue用CSS-IN-JSミックスイン。

#### アセット管理 <a id="asset-management"></a>

_Utilities for building / compiling / bundling / loading assets_

- [vue-loader](https://github.com/vuejs/vue-loader) - Vue.jsコンポーネント用のWebpackローダー
- [vue-jsx-hot-loader](https://github.com/skyrpex/vue-jsx-hot-loader) - JSXレンダリング関数を持つVue.jsコンポーネントにHMRを有効化します
- [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader) - SVGファイルをVueコンポーネ及として読み込むViteプラグイン
- [vite-plugin-svg-sfc](https://github.com/Kaciras/vite-plugin-svg-sfc) Vite plugin to load SVG file as vue SFC, supports HMR & <style> block.

#### ページナビゲーション <a id="page-navigation"></a>

- [vue-page-stack](https://github.com/hezhongfeng/vue-page-stack) - Vue SPAのルーティングとナビゲーション。Vue単ページアプリケーションのナビゲーションマネージャー

#### その他 <a id="miscellaneous-3"></a>

- [vue-live](https://github.com/vue-styleguidist/vue-live) - React-liveをインスピレーションとして作ったコンポーネントをデモするためのコンポーネント
- [vue-safe-html](https://github.com/ecosia/vue-safe-html) - Vue.jsディレクティブで動的にクリーンされたHTMLをレンダリングします
- [@skirtle/vue-vnode-utils](https://github.com/skirtles-code/vue-vnode-utils) - Vue 3のレンダリング関数内でスロットVNodeを扱うためのヘルパー関数

#### WebSocket <a id="web-sockets"></a>


#### 決済 <a id="payment"></a>

Payment utilities.

##### Stripe <a id="stripe"></a>

- [vue-stripe-checkout](https://github.com/jofftiquez/vue-stripe-checkout) - ストリートのチェックアウトに必要なシンプルなvueプラグイン
- [vue-stripe-js](https://github.com/ectoflow/vue-stripe-js) - Stripe.js用のVue 3コンポーネント

### 統合 <a id="integrations"></a>

_Integrate with services or other frameworks_

- [vue-recaptcha](https://github.com/DanSnow/vue-recaptcha) - Vue.js 用 Google reCAPTCHA コンポーネント
- [vuefire](https://github.com/vuejs/vuefire) - Vue.js 用公式 Firebase バインディング
- [vue-postgrest](https://github.com/technowledgy/vue-postgrest) - postgREST 用 Vue.js インテグレーション：柔軟で強力で使いやすい
- [vue-tweet](https://github.com/DannyFeliz/vue-tweet) - Vue 3 コンポーネントで、ツイート ID を指定するだけでアプリ内にツイートを埋め込む
- [vue-tg](https://github.com/deptyped/vue-telegram) - Vue 3 用 Telegram Web Apps インテグレーション
- [@rollgate/sdk-vue](https://github.com/rollgate/sdks/tree/main/packages/sdk-vue) - Vue3の機能フラグSDK（コマンド、段階的リリース、A/Bテスト、リアルタイム更新をサポート）。バックエンド：[Rollgate](https://rollgate.io)
- [@agentskit/vue](https://github.com/AgentsKit-io/agentskit) - Vue 3 の可変コンポーネントおよびヘッドレスチャットコンポーネのAIエージェント構築用、ストリーミング、ツール、記憶、RAGをサポート

#### Vue CLIプラグイン <a id="vue-cli-plugins"></a>

- [vue-cli-plugin-chrome-extension-cli](https://github.com/sanyu1225/vue-cli-plugin-chrome-extension-cli) - Vue CLIプラグインによるChrome拡張機能テンプレート生成

##### Google Analytics <a id="google-analytics"></a>

- [vue-gtag](https://github.com/MatteoGabriele/vue-gtag) - Vue用グローバルサイトタグプラグイン

### 開発ツール <a id="dev-tools"></a>

- [Storybook](https://storybook.js.org) - UI開発環境。v3.2以降で動作。
- [Font Awesome Finder](https://chrome.google.com/webstore/detail/font-awesome-icon-finder/kjejboahkcobalmgldloeinebmbomgog) - Chrome拡張機能で、Font Awesomeのアイコンを検索・プレビュー・選択し、選択したアイコンのHTMLコードおよびUnicodeをクリップボードにコピー
- [Roundtable](https://github.com/askbudi/roundtable) - ゼロ設定のMCPサーバーで、複数のAIアシスタント（Claude Code、Cursor、GPT-4など）をVue.jsプロジェクトの開発フローに統合
- [Bit](https://github.com/teambit/bit) - プロジェクト間で `vue` コンポーネントを管理・再利用。ソースコードを変更せずに、任意のプロジェクトからコンポーネントを分離・共有し、カスタムコレクションを整理し、他のプロジェクトにインストール可能。
- [Vue Mess Detector](https://github.com/rrd108/vue-mess-detector) - Vue.jsおよびNuxt.jsプロジェクトにおけるコードスモールやベストプラクティス違反を検出する静的コード分析ツール
- [Vue Log Arsenal](https://github.com/MvdZon/Vue3-log-arsenal) - 軽量なVue 3プラグインで、デバッグを容易にするログディレクティブを提供
- [PocketMocker](https://github.com/tianchangNorth/pocket-mocker) - フロントエンドアプリ用の視覚的、ブラウザベースのHTTPモックツール。fetch/XHRをインターセプトし、SmartMockルールをサポートし、遅延やエラーのシミュレーションを可能にし、Vueアプリ開発時に特に効果的

#### 検査 <a id="inspect"></a>

_Inspecting & debugging_

- [vite-plugin-vue-inspector](https://github.com/webfansplz/vite-plugin-vue-inspector) - ブラウザ内の要素をクリックすると、自動的にエディタソースコードにジャンプ
- [vue-flow-vis](https://github.com/MiloradFilipovic/vue-flow-vis) - コンポーネントレンダリングのリアルタイムモニタリングと反応依存関係の追跡

#### ドキュメント <a id="docs"></a>

_Create documentation_

- [Vuex CheatSheet](https://vuejs-tips.github.io/vuex-cheatsheet) - 完全なインタラクティブVuex API
- [vue-styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) - Vueコンポーネント向けスタイルガイド生成ツール（ライブスタイルガイド付き）
- [Vue Cheatsheet](https://vue-cheatsheet.themeselection.com/) - あなたが一生使いたい唯一のVue cheatsheet
- [Heroshot](https://github.com/omachala/heroshot) - Vueコンポーネント統合とテーマ認識出力により、ドキュメントスクリーンショットを自動化

_Browse documentation_

- [Dash](https://kapeli.com/dash) - macOS用オフラインAPIドキュメントブラウザ。Vue.jsドキュメントおよび200以上のフレームワークへの即時検索アクセスを提供

#### テスト <a id="test"></a>

- [vue-hubble](https://github.com/crishellco/vue-hubble) - VueでのUIテスト用に要素を選択するためのより良い方法
- [Vue Testing Library](https://github.com/testing-library/vue-testing-library) - DOM Testing Libraryに基づき、公式Vueテストユーティリティを構築した、シンプルで完全なテストツール。良いテスト習慣を促進する。
- [jest-serializer-vue-tjw](https://github.com/tjw-lint/vue3-snapshot-serializer) - Jestスナップショットのフォーマット改善
- [vitest](https://github.com/vitest-dev/vitest) - Viteを基盤とした次世代テストフレームワーク

#### ソースコード編集 <a id="source-code-editing"></a>

_Text editor plugins_

##### Vim <a id="vim"></a>

- [Vim Vue](https://github.com/posva/vim-vue) - Vue.jsコンポーネントのシンタックスハイライト。

##### Visual Studio Code <a id="visual-studio-code"></a>

- [Vue Language Tools (Volar)](https://github.com/vuejs/language-tools) - ⚡最も速いVue言語サポート拡張
- [Vue VSCode Snippets](https://github.com/sdras/vue-vscode-snippets) - Vue開発ワークフローを飛躍的に強化するスニペット

##### IntelliJ <a id="intellij"></a>

- [Vue.js support for WebStorm](https://github.com/JetBrains/intellij-plugins/tree/master/vuejs), IntelliJ IDEA, PhpStorm, PyCharm & RubyMine – official Vue.js support by JetBrains

##### Emacs <a id="emacs"></a>


### スキャフォールド <a id="scaffold"></a>

_Scaffold / boilerplate / seed / starter kits / stack ensemble / Yeoman generator_

- [ILUMINATY](https://github.com/LuynoxRD/ILUMINATY) - Sanity CMSを統合した、Vue 3 + Viteによる編集サイト、ディレクトリ、イベント、ブログ向けテンプレート
- [Vite](https://github.com/vitejs/vite) - 次世代フロントエンドツール。速い！
- [Create Vue](https://github.com/vuejs/create-vue)
- [vuesion](https://github.com/vuesion/vuesion) - Vuesionは、エンジニアとデザインの両面で現代的なベストプラクティスを採用し、プロダクトチームがより速く、より少ない悩みで開発できるブレークアウトブレインです。
- [ScaffoldHub.io](https://scaffoldhub.io) - SQL、MongoDB、またはFirebase Firestoreデータベースを用いて、フル機能のVueアプリケーションを生成。
- [VuePlay](https://christiankienle.github.io/vueplay/) - 数秒で生成される一時的なVueプレーヤー。迅速なテストが可能。
- [Mevn-CLI](https://github.com/madlabsinc/mevn-cli) - MEVNスタックベースのアプリケーション向けの超高速セットアップ。
- [vue-enterprise-boilerplate](https://github.com/bencodezen/vue-enterprise-boilerplate) - Vue CLI 3を使用した新しいVue SPAプロジェクト向け、常に進化し、強い意見を持つアーキテクチャと開発環境。
- [vue-starters-directory](https://shershen08.github.io/vue-starters-directory/) - VueJS向けの利用可能なスケルトンプロジェクトとスタートキットを検索。検索機能とGitHub統計が提供されます。
- [Vue3-SPA-starter-template](https://github.com/M-Media-Group/Vue3-SPA-starter-template) - ルーター、Pinia、i18n、Stripe、イベントバス、SEOメタタグとスキーマタグ処理を含むスタートキット。
- [vue-x-platforms](https://github.com/NativeScript/vue-x-platforms) - Web、iOS、Android、Vision ProでVueが実行される。
- [mevn-boilerplate](https://github.com/mustafacagri/mevn-boilerplate) - ⭐️最も包括的なMEVNスタックブレインボード。⭐️ mongodb - express - vue 3 (管理画面) - nodejs - nuxt 3 (クライアント) ブレインボード (pinia, tiptap, slug, vuet及 vuexy など) 🎉
- [monorepo-template](https://github.com/Nagell/monorepo_template) - 🗂️ pnpm、Nx、Vite、Tailwind CSS、Storybook、TypeScript、使用可能な共有ライブラリを備えたVue 3のモノリソプロジェクトテンプレート。

#### ユニバーサル <a id="universal"></a>

_Render Vue application to HTML on the server and to the DOM in the browser_

- [Vue.js/Nuxt.js full-featured boilerplate](https://github.com/GrabarzUndPartner/gp-vue-boilerplate) - vuejs/nuxtjsを用いて、高速かつ堅牢で柔軟なウェブアプリやサイトを構築するためのプロフェッショナルなアグリーチャンクフロントテンプレート。

#### デスクトップ <a id="desktop"></a>

- [electron-vite-template](https://github.com/umbrella22/electron-vite-template) - Vue 3、Vite、Electronを用いた現代的なデスクトップアプリケーションプロジェクトテンプレート。**速い！**
- [Vutron](https://github.com/jooy2/vutron) - Vite + Electron + Vue 3 + Vuetify + TypeScript向けのクイックスタートテンプレート。
- [electron-vite-vue](https://github.com/electron-vite/electron-vite-vue) - 本当にシンプルなElectron + Vite + Vueブレインボード。
- [MōBrowser](https://teamdev.com/mobrowser) - ウェブ技術を使ってデスクトップアプリを構築するためのフレームワーク。Vite + Vue + Quasar向けのテンプレートと基盤コードが含まれています。
- [sketch-to-vue](https://github.com/chenboxun87/sketch-to-vue) - クラウド・コード・アンド・カーサー向けのAIスキル。Sketch MeaXure／MasterGoの設計ファイルのエクスポートを、ピクセル精度のVue 2/3コンポーネントに変換します。ダッシュボード／コクピット／大画面ページに特化しています：決定論的アセット解決、EChartsの自動検出、シーングラフ分析、および完全な消費確認。

### 事前レンダリング <a id="prerendering"></a>

- [vue-genesis](https://github.com/fmfe/genesis) - 🔥Vue SSRに基づくマイクロフロントエンド、マイクロサービス、軽量ソリューション🔥

  

  <br/>
  <br/>
  <br/>

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
