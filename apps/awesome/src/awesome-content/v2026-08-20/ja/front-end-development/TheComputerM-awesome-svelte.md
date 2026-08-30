---
title: "Awesome Svelte"
description: "Svelteを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-TheComputerM-awesome-svelte-readme-md"
---

# Awesome Svelte

Svelteを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [Awesome Svelte](#awesome-svelte-)
  - [目次](#contents)
  - [リソース](#resources)
    - [公式リソース](#official-resources)
    - [コミュニティ](#community)
    - [カンファレンス](#conferences)
    - [ポッドキャスト](#podcasts)
    - [YouTubeチャンネル](#youtube-channels)
    - [チュートリアル](#tutorials)
    - [研究](#studies)
  - [統合](#integrations)
    - [前処理](#preprocessing)
    - [モバイル](#mobile)
  - [状態ライブラリ](#state-libraries)
  - [UIライブラリ](#ui-libraries)
  - [UIコンポーネント](#ui-components)
    - [テーブル](#table)
    - [通知](#notification)
    - [グリッド](#grid)
    - [アイコン](#icons)
    - [カレンダー](#calendar)
    - [地図](#maps)
    - [チャート](#charts)
    - [その他](#miscellaneous)
  - [Scaffold](#scaffold)
  - [ユーティリティ](#utilities)
    - [アニメーション](#animations)
    - [Drag & Drop](#drag--drop)
    - [フォーム](#forms)
      - [フォームコンポーネント](#form-components)
    - [HTTPリクエスト](#http-requests)
    - [音声・動画](#sound--video)
    - [WebGL](#webgl)
    - [PWA](#pwa)
    - [Portal](#portal)
    - [フォント](#fonts)
    - [国際化](#internationalization)
  - [Router](#routers)
  - [フレームワーク](#frameworks)
  - [開発ツール](#dev-tools)
    - [Lint](#lint)
    - [テスト](#test)
    - [エディター](#editors)
      - [Visual Studio Code](#visual-studio-code)
      - [Sublime Text](#sublime-text)
      - [Vim](#vim)
      - [JetBrains](#jetbrains)
  - [アプリケーション例](#application-examples)
    - [デスクトップ](#desktop)

## リソース

### 公式リソース

- [公式ガイド](https://svelte.dev/tutorial)
- [APIリファレンス](https://svelte.dev/docs)
- [GitHubリポジトリ](https://github.com/sveltejs/svelte)
- [変更履歴](https://github.com/sveltejs/svelte/blob/master/packages/svelte/CHANGELOG.md)

### コミュニティ

- ~~[Twitter](https://twitter.com/sveltejs)~~
- [Bluesky](https://bsky.app/profile/svelte.dev)
- [Discord](https://svelte.dev/chat)
- [Reddit](https://www.reddit.com/r/sveltejs/)
- [Japan Discord](https://discord.com/invite/YTXq3ZtBbx) - Svelte 日本。

### カンファレンス

- [Svelte Summit](https://sveltesummit.com/)

### ポッドキャスト

- [Svelte Radio](https://www.svelteradio.com/)

### YouTubeチャンネル

- [Svelte Society](https://www.youtube.com/channel/UCZSr5B0l07JXK2FIeWA0-jw)
- [Svelte Mastery](https://www.youtube.com/channel/UCg6SQd5jnWo5Y70rZD9SQFA)
- [Joy of Code](https://www.youtube.com/@JoyofCodeDev)

### チュートリアル

- [Svelte 5を始める: React開発者向けガイド](https://www.edistys.dev/blog/getting-started-with-svelte-5-a-guide-for-react-developers) - Edistys
- [Svelte 5の基礎 - 初心者向け完全Svelte 5コース](https://www.youtube.com/watch?v=8DQailPy3q8) - Syntax（YouTube）
- [TutorialSearch](https://tutorialsearch.io/?q=svelte) - Udemy、Skillshare、Pluralsightなど主要学習プラットフォームから45以上のカテゴリにわたる50,000以上のチュートリアルを索引化する、無料のクロスプラットフォーム検索エンジン。

### 研究

_Svelteフレームワークに関する研究。_

- [SvelteScaling](https://svelte-scaling.acmion.com/) - Svelteは規模に対応できるか？ _(v5以前)_
- [Will it Scale?](https://github.com/halfnelson/svelte-it-will-scale) - Svelteの変曲点を探ります。 _(v5以前)_

## 統合

### 前処理

- [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) - PostCSS、SCSS、Less、Stylus、CoffeeScript、TypeScript、PugなどのPreprocessor。
- [MDSveX](https://github.com/pngwn/MDsveX) - MDX Markdown向けPreprocessor。
- [svelte-switch-case](https://github.com/l-portet/svelte-switch-case) - Svelte向けSwitch Case構文。
- [svelte-preprocess-less](https://github.com/ls-age/svelte-preprocess-less) - Less向けPreprocessor。
- [modular-css](https://github.com/tivac/modular-css/tree/main/packages/svelte) - modular-cssのPreprocessor対応。
- [svelte-preprocess-sass](https://github.com/ls-age/svelte-preprocess-sass) - Sass向けPreprocessor。
- [svelte-preprocess-markdown](https://github.com/AlexxNB/svelte-preprocess-markdown) - Markdown構文でSvelteコンポーネントを記述します。
- [@nvl/sveltex](https://github.com/nvlang/sveltex) - Svelte + Markdown + LaTeX。

### モバイル

_モバイル向けUIフレームワーク。_

- [Svelte Native](https://svelte-native.technology/) - Nativescriptを介してSvelteからNative Componentを制御します。
- [Framework7](https://framework7.io/svelte/) - iOS・Androidアプリを構築する高機能HTMLフレームワーク。
- [Capacitor](https://capacitorjs.com/solution/svelte) - Web技術とSvelteでNative Mobile Appを構築します。

## 状態ライブラリ

- [svelte-asyncable](https://github.com/sveltetools/svelte-asyncable) - 非同期値に対応するSvelte Store Contract。
- [exome](https://github.com/Marcisbee/exome) - 深くネストした状態向けの簡潔なProxyベース状態マネージャー。
- [tanstack-store](https://tanstack.com/store/latest/docs/framework/svelte/quick-start) - リアクティブフレームワーク向けAdapterを備えた、フレームワーク非依存でType SafeなStore。
-

## UIライブラリ

- [lomer-ui](https://ui.lomer.dev) - コンポーネントを即座に開始できる非常に簡潔なCLIツール。
- [shadcn-svelte](https://www.shadcn-svelte.com/) - アプリへコピー＆ペーストできる美しく設計されたコンポーネント。
- [SvelteUI](https://svelteui.dev/) - コンポーネント、Action、Utility、Animationを含む包括的なSvelteライブラリ。
- [Flowbite Svelte](https://flowbite-svelte.com/) - Tailwind CSSとFlowbiteで構築されたオープンソースSvelte UIコンポーネント。
- [Skeleton](https://www.skeleton.dev/docs/get-started) - Tailwind Utility ClassとDesign Systemにより、Theme設定可能なUser Interfaceを簡単に作成します。
- [Sveltestrap](https://github.com/sveltestrap/sveltestrap) - Bootstrap 4・5コンポーネント。
- [carbon-components-svelte](https://github.com/IBM/carbon-components-svelte) - IBM Carbon Design SystemのSvelte実装。
- [Svelte Material UI](https://github.com/hperrin/svelte-material-ui) - Material UIコンポーネント。
- [Melt UI](https://github.com/melt-ui/melt-ui) - アクセシブルで再利用・組み合わせ可能なHeadless Component BuilderとUtilityのコレクション。
- [attractions](https://github.com/illright/attractions) - 現代的で格好よいUI Kit。 _(v5以前)_
- [ionic-svelte](https://github.com/Tommertom/svelte-ionic-app) - 多数のStarterを含む、モバイルアプリ開発向けIonic UIとSvelteの統合。
- [YeSvelte](https://www.yesvelte.com/) - Bootstrap CSS上に構築された柔軟なSvelte UIコンポーネントライブラリ。
- [Svelte UX](https://github.com/techniq/svelte-ux) - 高度に対話的なアプリケーションを構築するためのコンポーネント、Action、Store、Utilityの大規模コレクション。
- [STDF](https://stdf.design) - SvelteとTailwindを基にしたMobile Web Componentライブラリ。
- [M3 Svelte](https://github.com/KTibow/m3-svelte) - Material Design 3を実装する堅牢なコンポーネントライブラリ。
- [AgnosUI](https://amadeusitgroup.github.io/AgnosUI/latest/) - 高度に設定可能でHeadless、フレームワーク非依存のコンポーネントライブラリ。
- [daisyUI](https://daisyui.com/) - 最も人気のあるTailwind CSS向けコンポーネントライブラリ。`daisyUI`はTailwind CSSへコンポーネントクラス名を追加し、美しいWebサイトをすばやく構築できるようにします。
- [Smelte](https://github.com/matyunya/smelte) - Tailwind CSSで構築されたMaterial Component対応UIフレームワーク。 _(v5以前)_
- [SVAR Core for Svelte](https://github.com/svar-widgets/core) - 高速で対話的かつレスポンシブなWebアプリを構築する20以上のSvelte UIコンポーネント集。
- [AgnosticUI](https://github.com/agnosticui/agnosticui) - アクセシブルなSvelte Component Primitive（React、Vue 3、Angularでも動作）。
- [Svelte Animations](https://animation-svelte.vercel.app) - Svelte Magic UI、Svelte Aceternity UI、Svelte Luxe Componentsからなる、200以上の無料Animation Componentと2つのTemplate。
- [Svelte Marketing Blocks](https://sv-blocks.vercel.app) - Shadcn Svelte、Tailwind CSS v4、Svelte 5で構築された100以上のMarketing・UI Blockの強力なライブラリ。
- [Quaff](https://quaff.dev) - Material Design 3原則に従った現代的で洗練されたコンポーネントを備える広範なUIフレームワーク。
- [retroui-svelte](https://retroui-svelte.netlify.app) - shadcn-svelte上に構築され、独創的で遊び心のあるインターフェース向けに40以上のカスタマイズ可能なUIコンポーネントを提供するレトロ調Svelteコンポーネントライブラリ。
- [svelte-audio-ui](https://svelte-audio-ui.vercel.app) - アクセシブルで組み合わせ可能なAudio UIコンポーネント集。shadcn-svelte上に構築され、audio-uiに着想を得ており、コピー、貼り付け、所有できるよう設計されています。
- [AgentsKit](https://github.com/AgentsKit-io/agentskit) - SvelteでAIアプリを構築するHeadless Chat・Agent ComponentとStore。Streaming、Tool、Memory、RAGに対応するFramework Agnostic Coreを備えます。

## UIコンポーネント

### テーブル

_テーブルとデータグリッド。_

- [@vincjo/datatables](https://github.com/vincjo/datatables) - SvelteでData Tableコンポーネントを作成するToolkit。
- [svelte-table](https://github.com/dasDaniel/svelte-table) - ソートとフィルターに対応するテーブル実装。
- [svelte-generic-crud-table](https://github.com/ivosdc/svelte-generic-crud-table) - CRUD機能を備えたObject Array向けの非依存Web Component。列のソート・サイズ変更、1ページ内の複数テーブルに対応します。
- [svelte-generic-table-pager](https://github.com/ivosdc/svelte-generic-table-pager) - Paginatorを備えたsvelte-generic-crud-table。
- [powertable](https://github.com/muonw/powertable) - JSONデータを対話型HTMLテーブルへ変換するJavaScriptコンポーネント。データの手動検査、ソート、フィルター、検索、編集を容易にします。
- [svelte-pivottable](https://github.com/jjagielka/svelte-pivottable) - Drag and Drop機能を備えたSvelteベースのPivot Tableライブラリ。
- [SVAR DataGrid](https://github.com/svar-widgets/grid) - セル内編集、ソート、Context Menu、折りたたみ可能列・固定列、Tree Data View、Paging、Virtual Scrollを備えたSvelte Data Grid。
- [svelte-datagrid](https://github.com/revolist/svelte-datagrid) - Excelの優れた機能を取り入れた[revogrid](https://rv-grid.com)ベースの強力なData Gridライブラリ。
- [@wjfe/dataview](https://github.com/WJSoftware/wjfe-dataview) - Column Pinningなど高度な機能を備え、Master-Child Scenarioでテーブル間の列位置同期を行える世界唯一のData Visualization用テーブル。

### 通知

_Toaster／Snackbar — モードレスで一時的な小さなPopupによりユーザーへ通知します。_

- [svelte-notifications](https://github.com/beyonk-adventures/svelte-notifications) - あらゆるJSアプリケーションで使えるToast Notificationコンポーネント。
- [svelte-favicon-badge](https://github.com/kevmodrome/svelte-favicon-badge) - FaviconとBadgeを追加し、未読メッセージ数などの表示に使えるCustom Component。
- [@zerodevx/svelte-toast](https://github.com/zerodevx/svelte-toast) - 簡潔で洗練されたToast Notification。
- [svelte-french-toast](https://github.com/kbrgl/svelte-french-toast) - React Hot Toastに着想を得た、滑らかなSvelte向けToast Notification。軽量でカスタマイズ可能、既定でも美しい設計です。
- [svelte-sonner](https://github.com/wobsoriano/svelte-sonner) - 方針を明確にしたSvelte向けToast Component。

### グリッド

- [svelte-grid-responsive](https://github.com/andrelmlins/svelte-grid-responsive) - Bootstrapに着想を得たResponsive Grid System。
- [svelte-flex](https://github.com/himynameisdave/svelte-flex) - Svelte向けの簡潔で再利用可能なFlexbox Component。

### アイコン

- [unplugin-icons](https://github.com/unplugin/unplugin-icons) - 数千のアイコンを必要に応じてコンポーネントとして汎用的に利用できます。
- [svelte-fa](https://github.com/Cweili/svelte-fa) - 小さなFontAwesome 5・6コンポーネント。
- [svelte-awesome](https://github.com/RobBrazier/svelte-awesome) - Font Awesomeアイコンで構築されたSVG Icon Component。
- [steeze-ui/icons](https://github.com/steeze-ui/icons) - Svelte、React、Vueなど向けの簡単なIcon Pack・Component。
- [svelte-icons](https://github.com/AnxiousDarkly/svelte-icons) - Icon Component。
- [svelte-heroicons](https://github.com/krowten/svelte-heroicons) - Tailwind CSSの作者が作成したアイコン。
- [svelte-icomoon](https://github.com/aykutkardas/svelte-icomoon) - SvelteプロジェクトでSVGアイコンを非常に簡単に使えます。
- [svelte-unicons](https://github.com/devShamim/svelte-unicons) - @iconscout/uniconsに基づくSvelte向けUnicons SVGアイコン。
- [@thesvg/svelte](https://github.com/glincker/thesvg) - Svelte向けの5,600以上のSVGブランド・クラウドアイコンコンポーネント。AWS、Azure、GCP、4,000以上のブランドロゴ。
- [lucide-svelte](https://github.com/lucide-icons/lucide) - Svelteアプリケーション向けLucide Iconライブラリ実装。
- [svelte-icons-pack](https://github.com/leshak/svelte-icons-pack) - <https://github.com/react-icons/react-icons>を基にします。
- [svesome](https://github.com/pouchlabs/svesome) - Svelte向けFont Awesome v6アイコンラッパー。
- [hugeicons](https://github.com/hugeicons/svelte) - アイコンを完全に網羅した、美しく本番利用可能なSvelte向けIcon Package。
- [moving icons](https://github.com/jis3r/icons) - 美しく作り込まれたAnimated Lucide Iconのコレクション。

### カレンダー

_編集不可のイベントをカレンダーへ表示します。_

- [svelte-fullcalendar](https://github.com/YogliB/svelte-fullcalendar) - FullCalendarのComponent Wrapper。
- [svelte-calendar](https://github.com/6eDesign/svelte-calendar) - 美しいAnimationと独自のUXを備えた軽量Datepicker。
- [date-picker-svelte](https://github.com/probablykasper/date-picker-svelte) - 明快なUXを備えたSvelte向け日時Picker。
- [@schedule-x/svelte](https://github.com/schedule-x/schedule-x) - Material DesignのEvent Calendarライブラリ。

### 地図

- [svelte-googlemaps](https://github.com/beyonk-adventures/svelte-googlemaps) - Google Mapsコンポーネント。
- [svelte-mapbox](https://github.com/beyonk-adventures/svelte-mapbox) - MapBox Map・Autocompleteコンポーネント。
- [leaflet-svelte](https://github.com/anoram/leaflet-svelte) - Leaflet向けSvelte Wrapper。
- [esri-svelte](https://github.com/gavinr-maps/esri-svelte-example) - ArcGIS API for JavaScriptをSvelteで使う方法を示すWebアプリケーション。
- [svelte-maplibre](https://github.com/dimfeld/svelte-maplibre) - MapLibre Mapping Library向けSvelte Binding。

### チャート

- [svelte-frappe-charts](https://github.com/himynameisdave/svelte-frappe-charts) - frappe-charts向けSvelte Binding。
- [Layer Cake](https://github.com/mhkeller/layercake) - 主に再利用可能なグラフィックスをSvelteで作るフレームワーク。
- [LayerChart](https://github.com/techniq/layerchart) - Layer Cake上に構築され、幅広い可視化を作成する組み合わせ可能なSvelteコンポーネントの大規模コレクション。
- [SVAR Gantt Chart](https://github.com/svar-widgets/gantt) - Svelteで書かれた対話型でカスタマイズ可能なGantt Chartコンポーネント。

### グラフ

- [svelte-flow](https://svelteflow.dev) - React Flowの作者による、Node-based EditorとInteractive Diagramを構築するカスタマイズ可能なSvelteコンポーネント。

### その他

- [number-flow](https://github.com/barvian/number-flow) - 数値の遷移、整形、ローカライズを行うコンポーネント。
- [Svelte Tweakpane UI](https://kitschpatrol.com/svelte-tweakpane-ui) - [Tweakpane](https://tweakpane.github.io/docs/)のUI要素を、Svelteらしいコンポーネント集としてラップします。
- [svelte-tree-viewer](https://github.com/kpulkit29/svelte-tree-viewer) - Tree Viewを描画する軽量コンポーネント。
- [svelte-copyright](https://github.com/himynameisdave/svelte-copyright) - Copyright Noticeを整形・表示するSvelteコンポーネント。
- [svelte-splitpanes](https://github.com/orefalo/svelte-splitpanes) - 高機能でサイズ変更可能なView Panel。
- [mathjax-svelte](https://github.com/WoolDoughnut310/mathjax-svelte) - MathJax向けSvelteコンポーネント。
- [svelte-stepper](https://github.com/efstajas/svelte-stepper) - Animated Step Flowを構築するSvelteコンポーネント。
- [css-3d-progress](https://github.com/rofixro/css-3d-progress) - 3D Progress Barコンポーネント。
- [svelte-speedometer](https://github.com/palerdot/svelte-speedometer) - D3を使ってSpeedometer風Gaugeを表示するSvelteコンポーネント。
- [embedz](https://github.com/embedz/embedz) - SvelteとVue向けの簡単で依存関係のない埋め込み。
- [EmbedPDF](https://www.embedpdf.com/docs/svelte/introduction) - PDFiumを活用したSvelte向けのモジュール式高性能PDF Viewer・Editor。Annotation、Redaction、Thumbnailなどのプラグインで完全に拡張できます。
- [Edra](https://edra.tsuzat.com) - Tiptapを使い、Svelte開発者向けに作られた優れたRich Text Editor。
- [svelte-streamdown](https://github.com/beynar/svelte-streamdown) - [streamdown](https://streamdown.ai/)のPort。組み込みStyle、Math、Mermaid、Code Highlightなどに対応し、Streaming向けに最適化された統合Markdown Renderer。
- [svelte-bash](https://github.com/YusufCeng1z/svelte-bash) - Svelte 5向けのカスタマイズ可能なTerminal風コンポーネント。

## Scaffold

_Template／Boilerplate／Starter Kit／Stack Ensemble／Yeoman Generator。_

- [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite#readme) - Vite + SvelteアプリのScaffoldを生成します。
- [create-svelte](https://github.com/sveltejs/kit/tree/master/packages/create-svelte#readme) - 新しいSvelteKitプロジェクトを作成するCLI。
- [saasstarter](https://github.com/CriticalMoments/CMSaasStarter) - オープンソースで高速、無料ホスト可能なSvelte SaaSテンプレート。
- [svelte-pwa-template](https://github.com/tretapey/svelte-pwa) - 公式Templateを基にしたPWA向けStarter Template。 _(v5以前)_
- [vite-svelte-docker-template](https://github.com/bavragor/vite-svelte-docker-template) - Svelte + Docker + Vite + Vitest向けテンプレート。
- [svelte-docs-starter](https://github.com/code-gio/svelte-docs-starter) - Svelte 5、MDSvex、Tailwind CSSで構築された現代的なDocumentation Template。
- [template-svelte](https://github.com/phaserjs/template-svelte) - Phaser対応の公式Quickstart Template。
- [generic-app-template](https://github.com/GantonL/templates/tree/main/sveltekit-shadcn-v5) - SvelteKit + shadcn-svelteで構築されたオープンソースの現代的なFull-stack Web Application Template。i18n、Theme、Cookie Management、SEO Management、mdsvexによるStatic Content、Shell Componentなどに対応します。

## ユーティリティ

### アニメーション

- [AutoAnimate](https://auto-animate.formkit.com/) - Svelteアプリへ滑らかなTransitionを追加する、設定不要でそのまま使えるAnimation Utility。
- [svelte-typewriter](https://github.com/henriquehbr/svelte-typewriter) - Svelteアプリケーション向けの簡潔で再利用可能なTypewriter Effect。
- [moving-icons](https://github.com/jis3r/icons) - Svelte向けの美しく作り込まれた動くアイコン。🧡
- [ssgoi](https://github.com/meursyphus/ssgoi) - Spring PhysicsによるNative App風Page Transition。モバイルで60fps、SSR対応、すべてのModern Browserに対応します。

### Drag & Drop

- [neodrag](https://github.com/PuruVJ/neodrag) - すべてを統べる一つのDraggable 💍。
- sveltednd(https://github.com/thisuxhq/sveltednd) - Svelte 5アプリケーション向けの軽量で柔軟なDrag and Dropライブラリ。

### フォーム

- [Superforms](https://superforms.rocks) - Server／Client ValidationとClient-side Form表示を扱うSvelteKitライブラリ。
- [Formsnap](https://www.formsnap.dev/) - SuperformsとZod上に構築された高レベルSvelte Formコンポーネント。
- [felte](https://felte.dev/) - 組み込みのYup、Zod、Vest、Superstruct検証を備えた拡張可能なFormライブラリ。
- [vest](https://github.com/ealush/vest) - 🦺 Unit Testingに着想を得た宣言的Form Validationフレームワーク。
- [svelte-formly](https://github.com/arabdevelop/svelte-formly) - Core・Custom Ruleとカスタマイズ可能なStyleを使い、Dynamic Formを生成・制御するソリューション。 _(v5以前)_
- [svelte-form-builder](https://github.com/pragmatic-engineering/svelte-form-builder-community) - Svelte向けNo-code Drag and Drop Form Builder。
- [Svelte Form Builder](https://svelte-form-builder.vercel.app) - Shadcn Svelte、Superforms、ZOD／Valibot Schemaでフォームを数分で作成します。
- [Formisch](https://formisch.dev/svelte/guides/introduction/) - パフォーマンス、Type Safety、Bundle Sizeを重視するSvelte向けFormライブラリ。

#### フォームコンポーネント

_個別のフォームコンポーネント。_

- [svelte-checkbox](https://github.com/HosseinShabani/svelte-checkbox) - Checkboxコンポーネント（美しいAnimation、カスタマイズ可能）。 _(v5以前)_
- [svelte-toggle](https://github.com/beyonk-adventures/svelte-toggle) - Style付きの基本Toggleコンポーネント。 _(v5以前)_

### HTTPリクエスト

- [sswr](https://github.com/ConsoleTVs/sswr) - Svelte向けStale While Revalidate（SWR）データ取得戦略。
- [svelte-query](https://sveltequery.vercel.app/) - 「Global State」に触れずにSvelteアプリケーションでデータを取得、キャッシュ、更新します。
- [tanstack-svelte-query](https://tanstack.com/query/latest/docs/svelte/overview) - Svelte向けのフレームワーク非依存でType SafeなQuery・Mutationライブラリ。

### 音声・動画

- [svelte-sound](https://github.com/Rajaniraiyn/svelte-sound) - 対象DOM Eventで操作音を再生するSvelte Action。

### WebGL

- [svelthree](https://github.com/vatro/svelthree) - リアクティブで再利用可能なThree.js Scene Graphを宣言的に構築するコンポーネントライブラリ。
- [threlte](https://threlte.xyz) - SvelteアプリでThree.jsを宣言的かつ状態駆動で使うRenderer・Component Library。

### PWA

- [SvelteKit-Adapter-Versioned-Worker](https://github.com/hedgehog125/SvelteKit-Adapter-Versioned-Worker) - Cache Durationを気にせず使える、使いやすいService Worker Build Plugin。

### Portal

- [svelte-portal](https://github.com/romkor/svelte-portal) - 親コンポーネントのDOM外へ描画するコンポーネント。
- [svelte-teleport](https://github.com/nasso/svelte-teleport) - DOMをまたいで要素をTeleportするコンポーネント。

### フォント

- [svelte-web-fonts/google](https://github.com/svelte-web-fonts/google) - 自動補完を含むGoogle Fonts API経由でFontを簡単に読み込む小さなコンポーネント。

### 国際化

- [svelte-fluent](https://github.com/nubolab-ffwd/svelte-fluent) - [Fluent](https://projectfluent.org/) Localizationを容易に統合するコンポーネント。
- [svelte-i18n](https://github.com/kaisermann/svelte-i18n) - Svelte向け国際化ライブラリ。
- [VoerkaI18n](https://zhangfisher.github.io/voerka-i18n/) - `Javascript/Typescript/Vue/React/Solidjs/SvelteJs/ReactNative`向け国際化ソリューション。
- [sveltekit-i18n](https://github.com/jarda-svoboda/sveltekit-i18n) - SvelteKitで[i18n](https://www.npmjs.com/package/i18n)形式のLocalizationを統合します。
- [@tolgee/svelte](https://github.com/tolgee/tolgee-js/tree/main/packages/svelte) - 開発中のSvelteアプリ内でユーザーが直接翻訳できるWebベースLocalization Tool。
- [@i18n-pro/svelte](https://github.com/i18n-pro/svelte) - Svelte向けの軽量、簡潔、柔軟、自動翻訳対応の国際化ツール。
- [ParaglideJS](https://inlang.com/m/dxnzrydw/library-inlang-paraglideJsAdapterSvelteKit) - 翻訳済みリンクを標準搭載した、小さくType Safeなi18nライブラリ。
- [wuchale](https://github.com/K1DV5/wuchale) - 関数呼び出しなどの形式を必要とせず、そのままコードを書ける国際化ライブラリ。

## Router

_Single Page Application（SPA）など向け。_

- [svelte-router-spa](https://github.com/jorgegorka/svelte-router) - Single Page Application（SPA）へRoutingを追加します。Localization、Guard、Nested Layoutを備えます。
- [svelte-routing](https://github.com/EmilTholin/svelte-routing) - SSR対応の宣言的Svelte Routingライブラリ。
- [tinro](https://github.com/AlexxNB/tinro) - 小さく、依存関係がなく、高度に宣言的なRouter。
- [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router) - Hash-based RoutingとParameter対応を備え、Single Page Application（SPA）向けに最適化されています。
- [svelte-client-router](https://github.com/arthurgermano/svelte-client-router) - SPAのRoutingで必要・想定されるすべてを提供するSvelte Client Router。
- [@danielsharkov/svelte-router](https://github.com/DanielSharkov/svelte-router) - Page Transitionを念頭に開発された、簡潔で使いやすいSPA Router。
- [@shaun/svelterouter](https://github.com/shaunlee/svelterouter) - Vue Routerに着想を得た別のSvelte Router。
- [Elegua](https://github.com/howesteve/elegua) - 小さく（180 LoC未満）、高速で使いやすい高機能SPA Router。
- [svelte5-router](https://github.com/mateothegreat/svelte5-router) - Nesting、Hookなどを備えた最初のSvelte 5 SPA Router。Component、Snippet、または両方を使えます！
- [@wjfe/n-savant](https://github.com/WJSoftware/wjfe-n-savant) - 常時有効なPath・Hash Routingを備えた高速でリアクティブなRouter。Multi-hash Routingを発明したRouterでもあります。
- [sv-router](https://github.com/colinlienard/sv-router) - File-basedまたはCode-based Routingに対応するType Safe SPA Router。

## フレームワーク

- [SvelteKit](https://svelte.dev/docs/kit/introduction) - Svelteアプリを構築する最速の方法。
- [Routify](https://routify.dev/) - ファイル構造で自動化されるSvelte向けRoute。
- [Elder.js](https://github.com/elderjs/elderjs) - SEOを念頭に構築された、方針を明確にしたSvelte向けStatic Site Generator・Web Framework。 _(v5以前)_
- [JungleJS](https://www.junglejs.org/) - GraphQL対応のSvelte向けJamstackフレームワーク。 _(v5以前)_
- [svelte-document](https://github.com/mblouka/svelte-document) - 文書（PDF）、履歴書、プレゼンテーションを完全にSvelteで作成します。

## 開発ツール

- [Frontman](https://github.com/frontman-ai/frontman) - Click-to-editとHot Reloadを備え、ブラウザー内で動作するSvelteアプリ向けオープンソースAI Coding Agent。

### Adapter

- [JesterKit EXE](https://github.com/Hugo-Dz/exe) - SvelteKit WebアプリをRuntime依存関係のない単一実行バイナリとして配布するAdapter。Static Buildと異なり、SSR、API Endpoint、Server HookなどKitの全機能を保持します。

### Lint

_コードをLint・整形します。_

- [prettier-plugin-svelte](https://github.com/sveltejs/prettier-plugin-svelte) - Prettierでコンポーネントを整形します。
- [svelte-check](https://www.npmjs.com/package/svelte-check) - コードを検査します。
- [eslint-plugin-svelte](https://github.com/sveltejs/eslint-plugin-svelte) - ASTを使うSvelte向けESLintプラグイン。

### テスト

- [svelte-jester](https://github.com/mihar-22/svelte-jester) - テストへインポートする前にコンポーネントをコンパイルするJest Transformer。
- [@testing-library/svelte](https://github.com/testing-library/svelte-testing-library) - 優れたテストプラクティスを促す、簡潔で完全なSvelte DOM Testing Utility。
- [jest-transform-svelte](https://github.com/rspieker/jest-transform-svelte) - Svelteコンポーネント向けJest Transformer。

### エディター

_Text Editorプラグイン。_

#### Visual Studio Code

- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) - コンポーネント向け構文強調と高機能なIntelliSenseを提供します。
- [Svelte 3 Snippets](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets) - VS Code向けSvelte 3 Snippet。

#### Sublime Text

- [Svelte](https://packagecontrol.io/packages/Svelte) - Sublime Text向け構文強調と対応。

#### Vim

- [vim-svelte-plugin](https://github.com/leafOfTree/vim-svelte-plugin) - Vim向け構文強調と対応。
- [coc-svelte](https://github.com/coc-extensions/coc-svelte) - （Neo）Vim向け構文強調と対応。

#### JetBrains

- [Svelte](https://plugins.jetbrains.com/plugin/12375-svelte) - JetBrains向け構文強調と対応。

## アプリケーション例

### デスクトップ

- [Oxide-Lab](https://github.com/FerrisMind/oxide-lab) - Svelte 5 Frontendと、`candle` MLフレームワークを使うRust Backendで構築されたプライバシー重視のLocal LLM Chatアプリケーション。
- [Zephyr](https://github.com/Prismo-Studio/Zephyr) - Archipelago Multiworld Randomizer対応を組み込み、Svelte 5とTauri 2で構築されたPCゲーム向けオープンソースMod Manager。
