---
title: "Awesome Angular"
description: "Angularの公式ツール、学習・コミュニティ資料、アーキテクチャ、テスト、テンプレート、UIコンポーネント、各種連携。"
licenseSource: "github-PatrickJS-awesome-angular-readme-md"
---

# Awesome Angular

Angularは、アプリケーションを構築するためのウェブフレームワークです。公式ツール、学習・コミュニティ資料、アーキテクチャや開発の支援ツール、テスト、テンプレート、UIコンポーネント、各種連携を掲載しています。説明、対応バージョン、利用条件は固定した原文の記載に基づきます。

## Angular

### <a id="official-resources"></a>公式資料

npmのAngularパッケージ：[Angular](https://www.npmjs.com/~angular)。

* [公式サイト](https://angular.dev)
* [公式ブログ](https://blog.angular.dev/)
* [ドキュメント](https://angular.dev/overview)
* [入門チュートリアル](https://angular.dev/tutorials/learn-angular)
* [GitHubリポジトリ](https://github.com/angular/angular)
* [過去版のドキュメントサイト](https://v17.angular.io/docs)

### <a id="builders"></a>ビルダー

* [Webpack](https://webpack.js.org)
* [esbuild](https://esbuild.github.io/)
* [Angular Builders](https://github.com/just-jeb/angular-builders) - Angularのビルドファサード向けに、コミュニティ製ビルダー（ES Build、Webpack、Jest、Bazel、Timestamp）を集約したリポジトリ。
* [Jest Builder](https://github.com/just-jeb/angular-builders/tree/master/packages/jest)
* [Custom Webpack](https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack)
* [Custom esbuild](https://github.com/just-jeb/angular-builders/tree/master/packages/custom-esbuild)
* [Bazel](https://github.com/just-jeb/angular-builders/tree/master/packages/bazel) - ng build、ng testなどを契機にBazelを実行できるAngular CLIビルダー。
* [Timestamp](https://github.com/just-jeb/angular-builders/tree/master/packages/timestamp) - 使い方を説明した[記事](https://medium.com/angular-in-depth/angular-cli-under-the-hood-builders-demystified-v2-e73ee0f2d811)を参照。
* [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus) - ejectせずにAngular CLIの標準ビルド処理を拡張。Angular Elementsなどに利用できる。
* [ngx-electronify](https://github.com/bampakoa/ngx-electronify) - Electronを使い、デスクトップでアプリケーションを実行するAngular CLIビルダー。
* [dotenv-run](https://github.com/chihab/dotenv-run) - 環境変数を読み込むツール。CLI、esbuild、Rollup、Vite、Webpack、Angular、ESM、モノレポに対応。
* [ng-packagr](https://github.com/ng-packagr/ng-packagr) - AngularライブラリをAngular Package Format（APF）でコンパイル・パッケージ化。
* [angular-env-builder](https://github.com/igorissen/angular-env-builder) - 環境変数に基づき `src/environments/environment.ts` を生成するビルダー。
* [angular-rspack](https://github.com/nrwl/nx/tree/HEAD/packages/angular-rspack) - Angularアプリケーション向けの[Rspack](https://github.com/web-infra-dev/rspack)プラグインとツール。
* [ngx-devkit-builders](https://github.com/Celtian/ngx-devkit-builders) - Angularアプリケーションとライブラリのビルド・テストに使うArchitectビルダーのパッケージ。
* [angular-static-assets-hash](https://github.com/sitelint/angular-static-assets-hash) - Angularの静的アセットの一覧と各ファイルのハッシュを生成。
* [ngx-schematic-builder](https://github.com/kstepien3/ngx-schematic-builder) - Angularのschematicプロジェクトをビルドするツール。独自のschematicをコンパイル・パッケージ化し、公開や利用に備える。
* [ng-builder-typescript](https://github.com/da-mkay/ng-builder-typescript) - TypeScriptコンパイラ `tsc` でNode.jsアプリケーションをビルドするAngular CLIビルダー。Webpackなどのバンドラーは使用しない。

### <a id="cli-tools"></a>CLIツール

* [公式サイト](https://angular.dev/tools/cli)
* [公式GitHubリポジトリ](https://github.com/angular/angular-cli)
* [alterforge](https://github.com/themodulardev/alterforge) - モジュール化されたマイクロサービス構成の雛形を生成・管理するCLIツール。ReactまたはAngularのフロントエンドを任意で含められる。
* [@MohamedBouattour/angular-clean-architecture](https://github.com/MohamedBouattour/angular-clean-architecture) - クリーンアーキテクチャに基づき、明確で保守しやすいレイヤーを持つ、実運用向けのAngular機能を生成するCLIツール。
* [angular-cli-diff](https://github.com/cexbrayat/angular-cli-diff) - Angular CLIアプリケーションを別のバージョンへ更新するためのツール。
* [angular-cli-ssr-diff](https://github.com/cexbrayat/angular-cli-ssr-diff) - Angular CLIのSSRアプリケーションを別のバージョンへ更新するためのツール。
* [angular-parallel-test-runner](https://github.com/mahdi-hajian/angular-parallel-test-runner) - 利用可能なCPUコアを使い、複数プロジェクトのAngularテストを並列実行するCLI。
* [angular-web-cli](https://github.com/qodalis-solutions/angular-web-cli) - ワークフローの整理、タスクの自動化、カスタマイズ可能なユーティリティを提供するCLIツール。
* [Better-Fullstack](https://github.com/Marve10s/Better-Fullstack) - 数秒で実運用向けのフルスタックアプリケーションの雛形を生成。425の選択肢からスタックを選ぶと、CLIが各要素を接続する。
* [dotairc](https://github.com/elecash/dotairc) - コードベースで作業するAIアシスタント向けに、一貫した指示を作成するツール。
* [firebase-framework-tools](https://github.com/FirebaseExtended/firebase-framework-tools) - ウェブフレームワークへの対応を追加する、[Firebase CLI](https://github.com/firebase/firebase-tools/)の実験的なアドオン。
* [i18n-fixer](https://github.com/zfurkandurum/i18n-fixer) - ハードコードされた文字列、i18nキーの欠落、未使用の翻訳を検出する、フレームワークに依存しないCLIツール。
* [js-stack](https://github.com/vipinyadav01/js-stack) - 実運用向けJavaScriptフルスタックプロジェクトの雛形を生成するCLI。カスタマイズとベストプラクティスに基づくプリセットを提供。
* [kqgen](https://github.com/KilloconQ/kqgen) - Angularコンポーネントとサービスを生成する、高速で柔軟なCLI。テーブル、フィルター、REST/GraphQLサービスのプリセットを備える。
* [lin](https://github.com/yuo-app/lin) - LLMでロケールのJSONを翻訳するCLIツール、Lazy I18N。
* [mcp-angular-cli](https://github.com/talzach/mcp-angular-cli) - Angular CLIとワークスペースの自動化を提供するサーバー。LLMやエージェントによるコンポーネント生成、パッケージ追加、ワークスペース作成、独自のArchitectターゲット実行に対応。
* [nest-schematics](https://github.com/lcasass3/nest-schematics) - NestJSのCQRS（Command Query Responsibility Segregation）モジュールをヘキサゴナルアーキテクチャで生成する、Angular CLIのschematic。
* [ng-chrome-extension](https://github.com/larscom/ng-chrome-extension) - Angularを使ったChrome拡張機能（manifest v3）を作成するツール。
* [ng-create-with-config](https://github.com/tranvo-dev/ng-create-with-config) - Prettier、ESLint、Husky、Lint-stagedを事前設定したAngularプロジェクトを初期化する小規模なツール。
* [ngTooLazy](https://github.com/Iram0598/ng-toolazy) - 固定原文で現代的とされる慣例と明確な設計方針を採用し、ガード・インターセプター・レイアウトなどの定型コードを備えたAngularアプリケーションの雛形を生成するNode.js CLI。
* [ns-gc](https://github.com/th3n00bc0d3r/ns-gc) - 整理された構成のスタンドアロンNativeScript AngularコンポーネントとAngularサービスを、設定なしで生成する軽量CLIツール。
* [ngx-i18n-scan](https://github.com/pratiksonone/ngx-i18n-scan) - Angularコードからi18n翻訳キーを抽出・更新し、翻訳ファイルを整理するCLIツール。
* [ngx-stats](https://github.com/tomer953/ngx-stats) - Angularプロジェクトのモジュール、コンポーネント、ディレクティブ、パイプ、サービスを数え、構造やアーキテクチャの把握を支援するCLIツール。
* [ngx-ws](https://github.com/art-ws/ngx-ws) - [JSON References](https://www.npmjs.com/package/@apidevtools/json-schema-ref-parser)を使い、大きな `angular.json` をプロジェクトごとのモジュール化されたファイルへ分割。[YAML](https://yaml.org/)と[JSON5](https://json5.org/)の形式も利用できる。
* [prepare-angular-json](https://github.com/ackheron/prepare-angular-json) - 整理された `angular.json` ファイルを、コメント付きの `angular.jsonc` から生成する軽量CLIツール。
* [rafacli](https://github.com/rafa00716/rafacli) - NestJSとAngularの認証・CRUDモジュールを生成するCLIツール。定型コードの生成を自動化し、開発の効率と一貫性を高める。
* [ngx-crafter](https://github.com/ErwanHeschung/ngx-crafter) - 事前設定されたフォルダ構成と主要パッケージを備えたAngularプロジェクトを作成するCLIツール。
* [ng new command generator](https://ng.gridatek.com/) - 最適化された `ng new` コマンドを生成。
* [svger-cli](https://github.com/faezemohades/svger-cli) - SVGを最適化されたAngularコンポーネントへ変換する、依存関係のない軽量CLI。
* [tailwind-init-cli](https://github.com/ImLeoNova/tailwind-init-cli) - Angular、React、Next.jsプロジェクトのTailwind CSSを1つのコマンドで設定するツール。
* [fanstack](https://github.com/PrestomediaLLC/fanstack) - Firebase関数を自動的に監視し、厳密に型付けされたAngularサービスを生成する軽量CLIとアーキテクチャ。

### <a id="deployment"></a>デプロイ

* [AWS Amplify](https://docs.amplify.aws/angular/)
* [Vercel](https://vercel.com/solutions/angular)
* [Firebase Hosting](https://firebase.google.com/docs/app-hosting/get-started)
* [Netlify](https://docs.netlify.com/frameworks/angular/) - [Angular Runtime](https://github.com/netlify/angular-runtime)プラグインを通じて、Angularアプリケーションのフレームワーク検出とリダイレクトを自動化。
* [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) - AngularプロジェクトをGitHub Pagesに配置するためのツール。SSRは動作せず、ほかにも注意が必要な場合がある。
* [analog-publish-gh-pages](https://github.com/k9n-dev/analog-publish-gh-pages) - `Analog.js` アプリケーションをGitHub PagesへデプロイするGitHub Action。
* [Genezio](https://github.com/Genez-io/genezio) - サーバーレスアプリケーションの作成とホスティングを支援するツール。
* [Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-angular-site/#create-a-new-project-using-the-create-cloudflare-cli-c3)
* [Zerops](https://zerops.io/) - Analogアプリケーションのデプロイ・実行を支援。[サーバーサイドレンダリング](https://github.com/zeropsio/recipe-analog-nodejs)と[静的配信](https://github.com/zeropsio/recipe-analog-static)に対応。
* [SST](https://sst.dev/) - 新しいフルスタックアプリケーションの構築と自動化を支援するフレームワーク。
* [ngx-config-orchestrator](https://github.com/xhani-manolis-trungu/ngx-config-orchestrator) - 外部JSONによる実行時設定を提供するAngularライブラリ。一度ビルドした成果物をさまざまな環境へデプロイできる。
* [deploy-with-git](https://github.com/RunOnFlux/deploy-with-git/tree/master/deploy-angular) - GitリポジトリからAngularアプリケーションを[Flux Network](https://runonflux.com/)へ直接デプロイするツール。
* [@railwayapp-templates/angular-starter](https://github.com/railwayapp-templates/angular-starter) - Caddyで配信する標準的なAngular TypeScriptスターター。ワンクリックで利用できる。
* [angular-deploy-bunny](https://github.com/lostium/angular-deploy-bunny) - SHA256による増分差分でビルド成果物をBunny.net CDN Storage Zoneへ同期し、対応するPull Zoneのキャッシュを消去するAngular Architectビルダー（`ng deploy`）。
* [ngx-ssh-deploy](https://bitbucket.org/dkhang97/ngx-ssh-deploy/src/master/) - SSHを使ってAngularプロジェクトをデプロイ。
* [front-ready](https://github.com/czfabrics/front-ready) - Angularのビルド設定の検出、コンパイル、最適化されたキャッシュヘッダーを付けたAWS S3へのアップロードを1つのコマンドで実行。
* [oSStack Deploy](https://github.com/sanketpadhyal/oSStack-Deploy) - Vercelに着想を得た高性能なデプロイ基盤。設定不要のデプロイ、フレームワークの自動検出、ビルド状況のリアルタイム配信を提供。

### <a id="desktop-applications"></a>デスクトップアプリ

* [electron](https://github.com/electron/electron) - JavaScript、HTML、CSSでクロスプラットフォームのデスクトップアプリケーションを構築。
* [angular-electron](https://github.com/maximegris/angular-electron) - AngularとElectronを使ったプロジェクトの立ち上げを高速化。
* [neutralinojs](https://github.com/neutralinojs/neutralinojs) - JavaScript、HTML、CSSでクロスプラットフォームのデスクトップアプリケーションを構築する、軽量で移植しやすいフレームワーク。Linux、macOS、Windows、Web、Chromeで動作。
* [nw.js](https://github.com/nwjs/nw.js) - HTML、JavaScript、Node.jsとの直接連携を使うネイティブアプリケーション向けの、ChromiumとNode.jsのランタイム。
* [nw-angular-example](https://github.com/nwutils/nw-angular-example) - AngularとNW.jsを連携する例。
* [tauri](https://v2.tauri.app/) - 小さく、高速で安全なクロスプラットフォームアプリケーションを作成するフレームワーク。
* [angular-tauri](https://github.com/maximegris/angular-tauri) - AngularとTauriを使ったプロジェクトの立ち上げを高速化。
* [create-tauri-app](https://github.com/tauri-apps/create-tauri-app) - 新しいTauriアプリケーションのプロジェクト雛形を迅速に生成。
* [wails](https://github.com/wailsapp/wails) - [Angular](https://wails.io/docs/guides/angular/)などのウェブ技術とGoを使ってデスクトップアプリケーションを構築。
* [MōBrowser](https://teamdev.com/mobrowser) - TypeScript、HTML、CSSでデスクトップアプリケーションを構築するフレームワーク。ソースコードの保護機能を備える。

### <a id="updating-angular"></a>Angularの更新

* [公式移行ガイド](https://angular.dev/update-guide) - Angularのバージョン間移行を支援する対話型ガイド。
* [公式更新リファレンス](https://angular.dev/cli/update) - CLIでプロジェクトを更新。`--next` フラグを付けて新しいAngular機能を試すこともできる。
* [公式移行リファレンス](https://angular.dev/reference/migrations) - スタンドアロンコンポーネントへの変換、新しい制御フロー構文などへの移行を支援するAngularのschematic。
* [ng-morph](https://github.com/taiga-family/ng-morph) - プロジェクトやschematicのコード変更を支援。
* [ngx-libs](https://github.com/eneajaho/ngx-libs) - コミュニティ製ライブラリの各Angularバージョンへの対応状況を掲載するAngular Libraries Support。
* [@fast-facts/ng-update](https://github.com/fast-facts/ng-update) - `ng update` に基づく自動プルリクエストで、Angular CLIプロジェクトを更新するGitHub Action。
* [npx-app-updater](https://github.com/DSI-HUG/ngx-app-updater) - 新しいバージョンのデプロイ時に、利用可能な更新をユーザーへ通知。
* [ngx-update-app](https://github.com/Celtian/ngx-update-app) - Service Workerを使ってアプリケーションを更新するAngularディレクティブ。
* [Angular Caniuse](https://www.angular.courses/caniuse/features) - Angularの機能をプレビューから安定版まで追跡。
* [Depfixer](https://depfixer.com/sample-report/angular) - JS/TSプロジェクトの依存関係を分析し、互換性の衝突を検出して段階的な修正方法を提示。
* [migration-planificator](https://github.com/silvestv/migration-planificator-documentation) - 精密なAST解析でAngular移行を計画し、作業量を見積もり、対話型HTMLダッシュボードを生成。
* [NgReady](https://www.ngready.dev/) - Angularのアップグレードにかかる作業時間を減らすための支援。

## <a id="angular-pulse"></a>Angularの動向

### <a id="community"></a>コミュニティ

* [AngularのDiscordチャンネル](https://discord.com/invite/angular)
* [Angularのハッシュタグ](https://x.com/hashtag/angular) - Xの `#angular` ハッシュタグ。
* [Gitterチャンネル](https://gitter.im/angular/angular)
* [Angular Stack Overflow](https://stackoverflow.com/questions/tagged/angular)
* [Xの@Angular](https://x.com/angular)
* [Redditの/r/Angular](https://www.reddit.com/r/Angular/)
* [Angular BuddiesのSlackチャンネル](https://angularbuddies.slack.com/)
* [angular-logos](https://github.com/maartentibau/angular-logos) - さまざまなAngularのバッジとロゴを集めたリポジトリ。
* [Made with Angular](https://github.com/madewithangular/madewithangular.github.io) - Angularで構築されたウェブアプリケーションの事例集。
* [Angular Hub](https://github.com/angular-sanctuary/angular-hub) - Angularのイベントとコミュニティの一覧。
* [Angular Space](https://www.angularspace.com/) - Angular開発者の学習と成長に役立つ情報を提供。
* [builtwith trends](https://trends.builtwith.com/framework/Angular) - Angularの利用統計。
* [Angular: The Documentary | An origin story](https://www.youtube.com/watch?v=cRC9DlH45lA)
* [Angular Talents](https://www.angulartalents.com/) - 独立した開発者が、今後のプロジェクトに参加できることを示すサービス。求人一覧を探し続けずに仕事を見つけるために利用できる。
* [Map of GitHub](https://anvaka.github.io/map-of-github/#9.14/-21.9624/9.8143) - NgSphereを探索し、スターを付けたユーザーが重複するリポジトリを探すツール。
* [Good First Issues](https://www.dolmen.tools/en/angular/good-first-issues/explorer) - 初心者が取り組みやすい課題を見つけ、Angularのオープンソースプロジェクトへ貢献するためのツール。
* [Angular Popularity Analysis](https://github.com/ProjectBay/angular-popularity-analysis) - AI時代におけるAngularの人気を正規化して分析した統計資料。
* [Jobs in JS](https://jobsinjs.com/angular-developer-jobs/) - 米国、カナダ、英国のAngular開発者向け求人。毎日更新。

### <a id="newsletters"></a>ニュースレター

* [Angular Addicts](https://www.angularaddicts.com/)
* [Angular Digest](https://geromegrignon.substack.com/)
* [ultimate courses](https://ultimatecourses.com/newsletter)
* [Weekly Angular](https://prodigious-knitter-4508.kit.com/subscribe)

### <a id="podcasts"></a>ポッドキャスト

* [Angular Air](https://angularair.com/)
* [Angular Master Podcast](https://www.youtube.com/playlist?list=PLYJFRoKhU5SNcu5GBjIn4X3oVpy4fP1wV)
* [Angular Plus Show](https://open.spotify.com/show/1PrLErQHBqBhZsRV1KHhGM)
* [Angularidades](https://podcasts.apple.com/us/podcast/angularidades/id1702444448) - スペイン語のポッドキャスト。

### Bluesky

* [@brandonroberts.devによるAngularスターターパック](https://bsky.app/starter-pack/brandonroberts.dev/3l7lzgkwkqu2n)

### <a id="x上のangularチーム"></a><a id="angular-team-on-x"></a><a id="angular-team-on-x-and-mastodon"></a>X・Mastodon上のAngularチーム

* [Minko Gechev](https://x.com/mgechev)
* [Alan Agius](https://x.com/AlanAgius4)
* [Matthieu Riegler](https://x.com/jean__meche)
* [Alex Rickabaugh](https://x.com/synalx)
* [Kristiyan Kostadinov](https://x.com/_crisbeto)
* [Paul Gschwendtner](https://x.com/devversion)
* [Joost Koehoorn](https://x.com/devjoost)
* [Simona Cotin](https://x.com/simona_cotin)
* [Jessica Janiuk](https://mastodon.social/@jessicajaniuk)
* [Doug Parker](https://mastodon.social/@develwithoutacause@techhub.social)
* [Emma Twersky](https://x.com/twerske)
* [Mark Thompson](https://x.com/marktechson)
* [Pawel Kozlowski](https://x.com/pkozlowski_os)
* [Dylan Hunn](https://x.com/dylhunn)

### <a id="angular-experts-on-x"></a>X上のAngular専門家

* [@PatrickJS](https://x.com/PatrickJS)
* [@eggheadio](https://x.com/eggheadio)
* [@hirez_io](https://x.com/hirez_io)
* [@cedric_exbrayat](https://x.com/cedric_exbrayat)
* [@victorsavkin](https://x.com/victorsavkin)
* [@jeffbcross](https://x.com/jeffbcross)
* [@marsibarsi](https://x.com/marsibarsi)
* [@maciejtreder](https://x.com/maciejtreder)
* [@maartentibau](https://x.com/maartentibau)

### <a id="google-developer-experts-on-x"></a>X上のGoogle Developer Expert

* [Jack Franklin](https://x.com/jack_franklin)
* [Thierry Chatel](https://x.com/ThierryChatel)
* [Uri Shaked](https://x.com/urishaked)
* [Gonzalo Ruiz de Villa Suárez](https://x.com/gruizdevilla)
* [Sharon DiOrio](https://x.com/sharondio)
* [John Papa](https://x.com/John_Papa)
* [Dan Wahlin](https://x.com/danwahlin)
* [Christian Weyer](https://x.com/christianweyer)
* [Todd Motto](https://x.com/toddmotto)
* [Tim Ruffles](https://x.com/timruffles)
* [Wassim Chegham](https://x.com/manekinekko)
* [Aaron Frost](https://x.com/js_dev)
* [Wilson Mendes](https://x.com/willmendesneto)
* [Jared Williams](https://x.com/jaredwilli)
* [Gerard Sans](https://x.com/gerardsans)
* [Pascal Precht](https://x.com/PascalPrecht)
* [Jeff Whelpley](https://x.com/jeffwhelpley/)
* [Raúl Jiménez](https://x.com/elecash/)
* [Maxim Salnikov](https://x.com/webmaxru)
* [Deborah Kurata](https://x.com/deborahkurata)
* [Shai Reznik](https://x.com/shai_reznik)
* [Manfred Steyer](https://x.com/manfredsteyer)
* [Juri Strumpflohner](https://x.com/juristr)
* [William Grasel](https://x.com/willgmbr)
* [Alyssa Nicoll](https://x.com/AlyssaNicoll)
* [Nir kaufman](https://x.com/nirkaufman)
* [Dmitriy Shekhovtsov](https://x.com/valorkin)
* [Jeff Delaney](https://x.com/jeffdelaney23)
* [Nishu Goel](https://x.com/TheNishuGoel)
* [Alex Inkin](https://x.com/waterplea)
* [Santosh Yadav](https://x.com/SantoshYadavDev)
* [Ankit](https://x.com/ankitsharma_007)
* [Siddharth Ajmera](https://x.com/SiddAjmera)
* [Muhammad Ahsan Ayaz](https://x.com/codewith_ahsan)
* [Dmytro Mezhenskyi](https://x.com/DecodedFrontend)
* [Michael Hladky](https://x.com/Michael_Hladky)
* [Fabio Biondi](https://x.com/biondifabio)
* [Thomas Laforge](https://x.com/laforge_toma)

## <a id="learning-resources"></a>学習資料

### <a id="blogs"></a>ブログ

* [Angular Experts](https://angularexperts.io/blog) - Angular、NgRx、RxJS、NXを学ぶためのガイド、詳しい解説、実践的なヒントを提供するブログ。
* [angular-university](https://blog.angular-university.io/) - Angularエコシステムの学習と情報収集に役立つブログ。
* [simplified courses](https://blog.simplified.courses/) - ブログ記事を提供。
* [Just Angular](https://justangular.com/) - Angularの更新情報と、役立つヒントを紹介。
* [Angular Love](https://angular.love/) - 固定原文で情報が新しいとされる、ポーランド語のAngular情報サイト。
* [Angular Minds](https://www.angularminds.com/blog)
* [Angular Architects](https://www.angulararchitects.io/en/blog/)
* [House of Angular](https://houseofangular.io/blog/)
* [thisdot labs](https://www.thisdot.co/blog?tags=angular)
* [halodoc](https://blogs.halodoc.io/tag/angular-2-2/)
* [ninja-squad](https://blog.ninja-squad.com/)
* [marmicode](https://marmicode.io/learn/everything)
* [Tim Deschryver](https://timdeschryver.dev/)
* [Chau Tran](https://nartc.me/)
* [Minko Gechev](https://blog.mgechev.com/)
* [Matthieu Riegler](https://riegler.fr/)
* [Thomas Laforge](https://medium.com/@thomas.laforge)
* [Rainer Hahnekamp](https://medium.com/@rainer-hahnekamp)
* [Evgeniy Oz](https://medium.com/@eugeniyoz)
* [Tomas Trajan](https://tomastrajan.medium.com/)
* [Tomasz Ducin](https://ducin.dev/blog)
* [This is Angular](https://dev.to/this-is-angular)
* [daily.dev](https://app.daily.dev/tags/angular)
* [Angular Philosophies](https://github.com/tomavic/angular-philosophies)
* [Angular Material Dev](https://angular-material.dev/home) - AngularにおけるMaterial Designの情報をまとめたサイト。
* [Angular Tips](https://ngtips.com/) - 複雑で大規模かつ保守しやすいAngularアプリケーションを構築するためのベストプラクティスと推奨事項。
* [Practical Angular Guide](https://practical-angular.donaldmurillo.com/) - [Donald Murillo](https://github.com/DonaldMurillo)による、Angular開発者向けの実際の開発を想定した解決例。

### <a id="books"></a>書籍

* [Packt Publishing](https://www.packtpub.com/en-us/search?query=angular&sort=best-selling) - 固定原文で内容が新しいとされるプログラミング書籍を探せるサイト。
* [GumRoad](https://gumroad.com/software-development/web-development/javascript?tags=angular) - 無料・有料のAngular電子書籍を提供。
* [LeanPub](https://leanpub.com/bookstore?type=all&search=angular) - 支払額を選べる柔軟な価格設定で、著者を支援できるサービス。
* [Manning](https://www.manning.com/) - Manningの紙の書籍（pBook）をどこで購入しても、電子書籍（eBook）を無料で入手できる。
* [Become a ninja with Angular](https://books.ninja-squad.com/angular) - `Ninja Squad` による書籍。
* [Angular-Buch（ドイツ語）](https://angular-buch.com/) - `dpunkt.verlag` による書籍。
* [Code with Ahsan](https://www.codewithahsan.dev/books)
* [Angular University Ebooks](https://angular-university.io/my-ebooks) - 個別に入手する方法と、サブスクリプションに含まれる形で利用する方法がある。
* [Angular Enterprise Architecture](https://angularexperts.io/products/ebook-angular-enterprise-architecture) - `Tomas Trajan` による書籍。
* [Testing Angular](https://testing-angular.com) - 無料のガイド。原副題は「A Guide to Robust Angular Applications」（堅牢なAngularアプリケーションのためのガイド）。
* [Modern Angular](https://www.angulararchitects.io/en/ebooks/modern-angular/?book) - `Manfred Steyer` による書籍。無料。
* [TutorialSearch](https://tutorialsearch.io/browse/programming-languages/angular-interview) - Udemy、Skillshare、Pluralsightなどの主要学習プラットフォームを横断し、45以上のカテゴリにわたる50,000件以上のチュートリアルを検索できる無料の検索エンジン。
* [Ultimate Guide to Angular Evolution](https://houseofangular.io/the-ultimate-guide-to-angular-evolution/) - `House of Angular` による書籍。無料。
* [Micro Frontends and Moduliths with Angular](https://www.angulararchitects.io/en/ebooks/micro-frontends-and-moduliths-with-angular/) - `Manfred Steyer` による書籍。無料。
* [Angular Mastery](https://christianlydemann.com/angular-mastery-book/) - `CHRISTIAN LÜDEMANN` による書籍。無料。
* [Enterprise Monorepo Angular Patterns](https://go.nx.dev/angular-patterns-ebook) - `Nx Core Team` による書籍。無料。

### <a id="certification-programs"></a>認定プログラム

* [Certificates.dev](https://certificates.dev/angular) - Angular開発者としての能力を認定するプログラム。
* [Angular Academy CA](https://www.angularacademy.ca/angular-certification) - カナダで提供される、講師指導による実践的なAngular研修。
* [Hackerrank](https://www.hackerrank.com/skills-verification/angular_basic) - Angularの基礎スキル認定試験。
* [Koenig](https://www.koenig-solutions.com/angularjs-training-certification-courses) - Angular単独、またはフルスタック開発を扱う各種コース。
* [Simplilearn](https://www.simplilearn.com/angular-certification-training-course) - Angular認定研修コース。

### <a id="cheat-sheets"></a>チートシート

* [Angular 17の公式チートシート](https://v17.angular.io/guide/cheatsheet)
* [Angularの面接質問100問と回答](https://github.com/sudheerj/angular-interview-questions)
* [Angular開発者ロードマップ](https://roadmap.sh/angular)
* [Framework Field Guide](https://playfulprogramming.com/collections/framework-field-guide) - Angular、React、Vueをまとめて学べる無料の実践的教材。
* [Marmicode Cookbook](https://cookbook.marmicode.io/) - アプリケーション開発に役立つ材料とレシピを紹介する教材。
* [angular-interview-questions](https://github.com/Devinterview-io/angular-interview-questions) - 技術面接の準備に役立つ、Angularの質問と回答。
* [dotnet_angular_cli_cheatsheet](https://github.com/shashinvision/dotnet_angular_cli_cheatsheet) - .NETとAngularを使うフルスタック開発者向けのガイド。
* [Signals in Angular](https://slicker.me/angular/signals.html) - Signalsの基礎から高度なパターンまでを解説。
* [TMS Outsource Angular Cheat Sheet](https://tms-outsource.com/cs/angular-cheat-sheet/) - 覚えておきたいデコレーター、ブロック、演算子、CLIフラグを掲載。検索・絞り込み・コピーに対応。

### <a id="exercises"></a>演習

* [angular-fundamental-lessons](https://github.com/MarkTechson/angular-fundamentals-lessons)
* [Angular Challenges](https://angular-challenges.vercel.app/) - 実践的なスキルを磨くための、Angular、Nx、RxJS、NgRx、TypeScriptの課題を60以上収録したリポジトリ。
* [Codelabs](https://codelabs.developers.google.com/?text=angular) - アプリケーションの構築や機能追加を学ぶ、Google Developersの手順付き実践チュートリアル。
* [rxjs-fruits](https://www.rxjs-fruits.com/subscribe) - RxJSのさまざまな演算子を扱う対話型教材。
* [modern-angular-exercises](https://github.com/kobi-hari-courses/modern-angular-exercises) - さまざまなAngularの話題を扱う演習。解答と解説動画を含む。

### <a id="training"></a>トレーニング

* [Angular Academy](https://www.angularacademy.ca/) - 講師によるライブ配信のオンラインAngular講座。
* [Angular Boot Camp](https://angularbootcamp.com)
* [Angular Start](https://angularstart.com/) - 固定原文で新しいとされる機能と現代的なベストプラクティスを使い、Angularアプリケーションを構築する方法を学ぶ教材。
* [Angular Training](https://www.angulartraining.com/) - Angularの学習を指導するサービス。
* [Angular UI](https://angular-ui.com/) - Angularでウェブアプリケーションを構築するための、対話型講座と演習。
* [Angular University](https://angular-university.io/) - Angularエコシステムの学習と情報収集に役立つ教材。
* [Angular.Schule（ドイツ）](https://angular.schule/)
* [Angular.DE（ドイツ）](https://angular.de/schulungen/angular-intensiv/)
* [learnbydo.ing](https://www.learnbydo.ing/) - [Fabio Biondi](https://www.fabiobiondi.dev/)による講座・書籍・演習でウェブプログラミングを学ぶサービス。教材はイタリア語または英語。
* [liveloveapp](https://liveloveapp.com/) - Cypress、NgRx、RxJS、AG Grid、ウェブの性能に関するワークショップ。
* [Marmicode](https://www.eventbrite.fr/o/younes-jaaidi-marmicode-29329031085)
* [ng.guide](https://ng.guide/) - 実際のアプリケーションを構築しながらAngularを学ぶ教材。
* [Tech OS](https://tech-os.org/) - 要求水準の高い開発者や意欲的なチームを対象とする、高度なAngular研修。
* [Udemy: Angular - The Complete Guide](https://www.udemy.com/course/the-complete-guide-to-angular-2)
* [Ultimate Courses](https://ultimatecourses.com/courses/angular) - Angularの専門家を目指すための学習資料。
* [Workshops.DE（ドイツ）](https://workshops.de/seminare-schulungen-kurse/angular-typescript/)

### <a id="style-guides"></a>スタイルガイド

* [Angularの公式スタイルガイド](https://angular.dev/style-guide)
* [Infinum](https://infinum.com/handbook/frontend/angular/introduction)
* [TypeScriptスタイルガイド](https://mkosir.github.io/typescript-style-guide/)

### <a id="youtube-channels"></a>YouTubeチャンネル

* [Angular](https://www.youtube.com/@Angular)
* [NG CONF](https://www.youtube.com/@ngconfonline)
* [Procademy](https://www.youtube.com/@procademy)
* [Monsterlessons Academy](https://www.youtube.com/@MonsterlessonsAcademy)
* [Joshua Morony](https://www.youtube.com/@JoshuaMorony)
* [Nihira Techiees](https://www.youtube.com/@NihiraTechiees)
* [Angular University](https://www.youtube.com/@AngularUniversity)
* [Rainer Hahnekamp](https://www.youtube.com/@RainerHahnekamp)
* [Code Shots With Profanis](https://www.youtube.com/@CodeShotsWithProfanis)
* [Deborah Kurata](https://www.youtube.com/@deborah_kurata)
* [BrandonRobertsDev](https://www.youtube.com/@BrandonRobertsDev)
* [Decoded Frontend](https://www.youtube.com/@DecodedFrontend)
* [Zoaib Khan](https://www.youtube.com/@ZoaibKhan)
* [NivekDev](https://www.youtube.com/@nivekDev)
* [WebTechTalk](https://www.youtube.com/@WebTechTalk)
* [Babatunde Lamidi](https://www.youtube.com/@babatundelmd)
* [TechStackNation](https://www.youtube.com/@techstacknation)
* [Angular Love](https://www.youtube.com/@angularlove)
* [NG NEWS](https://www.youtube.com/@ng-news)
* [Learning Partner](https://www.youtube.com/@LearningPartnerDigital)
* [Igor Sedov](https://www.youtube.com/@theigorsedov)
* [Brian Treese](https://www.youtube.com/@briantreese)
* [Kobi Hari](https://www.youtube.com/@kobihari)
* [Programming Practicals](https://www.youtube.com/@programmingpracticals)
* [Daniil Rabizo](https://www.youtube.com/@daniilrabizo)
* [Loiane Groner](https://www.youtube.com/@loianegroner)
* [StartupAngular](https://www.youtube.com/@StartupAngular) - 日本語のチャンネル。
* [Code with Keys](https://www.youtube.com/@codewithkeys) - ペルシャ語のチャンネル。

## <a id="architecture-and-advanced-topics"></a>アーキテクチャと高度なトピック

### <a id="feature-flags"></a>機能フラグ

* [OpenFeature Angular SDK](https://openfeature.dev/docs/reference/technologies/client/web/angular) - 特定ベンダーに依存せず、コミュニティが主導する機能フラグ用API仕様。
* [@devcycle/openfeature-angular-provider](https://www.npmjs.com/package/@devcycle/openfeature-angular-provider) - [DevCycle](https://docs.devcycle.com/sdk/client-side-sdks/angular/)によるOpenFeature Angular SDKのサポート。
* [@openfeature/go-feature-flag-web-provider](https://www.npmjs.com/package/@openfeature/go-feature-flag-web-provider) - [GO Feature Flag](https://gofeatureflag.org/)のプロバイダー。インスタンスに[接続](https://gofeatureflag.org/docs/sdk/client_providers/openfeature_angular)するため、`@openfeature/web-sdk`を利用できる。
* [Flagsmith](https://www.flagsmith.com/) - 機能フラグの管理により、リリースの制御と迅速な提供を支援するツール。
* [@statsig/angular-bindings](https://www.npmjs.com/package/@statsig/angular-bindings) - [Statsig](https://www.statsig.com/)のAngularバインディング。コンポーネントに注入できる`StatsigService`を提供する。詳細は[Statsigのドキュメント](https://docs.statsig.com/client/javascript-sdk/Angular/)を参照。
* [@configcat/js-sdk](https://github.com/configcat/js-sdk) - アプリケーションと[ConfigCat](https://configcat.com/)の連携を容易にするJavaScript SDK。
* [@configcat-labs/feature-flags-in-angular-sample-app](https://github.com/configcat-labs/feature-flags-in-angular-sample-app) - ConfigCatを利用するサンプルアプリケーション。
* [featurit-sdk-angular](https://github.com/featurit/featurit-sdk-angular) - 機能フラグ管理プラットフォーム[FeaturIT](https://featurit.com/)のJavaScriptクライアントをAngularで使うためのラッパー。
* [ngx-feature-proxy](https://github.com/zenkiet/ngx-feature-proxy) - Unleashを利用するAngularの機能フラグライブラリ。最小限の設定で、リアクティブかつ型安全にフラグを管理できる。
* [ngx-feature-flags](https://github.com/pavan-98/ngx-feature-flags) - Angularでの利用を中心に設計された、企業向けの機能フラグ層。Angularアプリケーション全体で、フラグの解決・ガード・描画方法を標準化する。
* [ngx-feature-flags-toggly](https://www.npmjs.com/package/@ops-ai/ngx-feature-flags-toggly) - [Toggly](https://toggly.io/)の機能フラグ向けAngular SDK。
* [ngx-circuit](https://github.com/pjlamb12/ngx-circuit) - 真偽値のフラグや割合に応じた段階的展開など、柔軟な選択肢で機能の切り替えを管理するツール。
* [ngx-feature-toggle](https://github.com/willmendesneto/ngx-feature-toggle) - 機能の切り替え管理を簡単にするAngularディレクティブ。
* [@rollgate/sdk-angular](https://github.com/rollgate/sdks/tree/main/packages/sdk-angular) - リリースの予約と段階的展開に対応する機能フラグプラットフォーム[Rollgate](https://rollgate.io)のAngular SDK。

### GraphQL

* [apollo-angular](https://github.com/kamilkisiela/apollo-angular) - AngularとすべてのGraphQLサーバーに対応する、機能豊富で本番利用向けのキャッシュ付きGraphQLクライアント。
* [apollo-dynamic-angular](https://github.com/giuliano-marinelli/apollo-dynamic-angular) - デコレーターを付けたスキーマを通じ、クエリ・ミューテーション・サブスクリプションの選択セットを動的に指定できるApollo Angularの派生版。
* [apollo-orbit](https://github.com/wassim-k/apollo-orbit) - モジュール単位の状態管理を備えた、機能豊富なAngular向けGraphQLクライアント。
* [buoy](https://github.com/buoy-graphql/buoy) - Apolloを基盤とするAngular向けGraphQLクライアント。
* [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator) - 柔軟なプラグイン機構を備えた、GraphQLのスキーマと操作からのコード生成ツール。
* [ngx-graphql-client](https://github.com/Alevettih/ngx-graphql-client) - TypeScriptを全面的にサポートする、Angularアプリケーション向けの型付きGraphQLクライアント。
* [takeshape](https://www.takeshape.io/) - GraphQL APIを簡単に構築できるTakeShape。Angularとの連携方法は[ガイド](https://app.takeshape.io/docs/get-started/client/angular)を参照。

### HTTP

* [ng-http-caching](https://github.com/nigrosimone/ng-http-caching) - AngularアプリケーションのHTTPリクエスト用キャッシュ。
* [@ngify/http](https://github.com/ngify/ngify/tree/main/packages/http) - 型付きレスポンス、簡潔なエラー処理、リクエストとレスポンスのインターセプトを備えた、リアクティブなAngular HTTPクライアント。
* [ng-http-loader](https://github.com/mpalourdio/ng-http-loader) - HTTPリクエストを自動的に捕捉し、Spinkitのスピナー、ローダー、進捗バーを表示するAngular HTTPインターセプター。
* [angular-odata](https://github.com/diegomvh/angular-odata) - AngularでODataリソースの検索・作成・更新・削除を行うための、メソッドを連鎖できるAPI。
* [ng-memento](https://github.com/terzurumluoglu/ng-memento) - 同じHTTPリクエストの繰り返しを防ぎ、Angularアプリケーションの処理を高速化するツール。
* [ngx-suspense-of](https://github.com/Celtian/ngx-suspense-of) - アプリケーションにサスペンスを追加するAngularディレクティブ。
* [ngx-pwa](https://github.com/Service-Soft/ngx-pwa) - Angular PWAの機能を拡張するライブラリ。特にPOST・PATCH・DELETEリクエストのキャッシュと同期に対応する。
* [ngx-repository](https://github.com/paddls/ngx-repository) - Angularプロジェクトで、HTTP RESTまたはFirestoreを使う強く型付けされたデータクライアントを簡単に作成できるライブラリ。
* [ng-rest-client](https://github.com/gizm0bill/gzm/tree/master/libs/ng-rest-client) - メソッドデコレーターでRESTful APIクライアントを定義し、HTTPリクエストを簡潔に記述できるライブラリ。
* [ngx-sse-client](https://github.com/marcospds/ngx-sse-client) - `EventSource`の利用を置き換える、Angularアプリケーション向けのシンプルなSSE（Server Sent Events）クライアント。
* [@connectrpc/connect-web](https://github.com/connectrpc/connect-es/tree/main/packages/connect-web) - [Connect](https://connectrpc.com/)の複数プラットフォーム向けAPIライブラリ。[@connectrpc/connect](https://www.npmjs.com/package/@connectrpc/connect)はTypeScriptで型安全なProtobuf APIを提供し、[@connectrpc/connect-web](https://www.npmjs.com/package/@connectrpc/connect-web)はブラウザーへの対応を追加する。[Angularの実装例](https://github.com/connectrpc/examples-es/tree/main/angular)を参照。
* [ng-httpclient-easy-network-stub](https://github.com/NGneers/ng-httpclient-easy-network-stub) - Angular HttpClientによる多数のネットワークリクエストを簡単にモック化するクラス。
* [simply-direct](https://github.com/fvilli/simply-direct) - WebSocketsによるリアルタイムの双方向通信でAngularとNestJSをつなぐ、フルスタックの通信ライブラリ。
* [ng-error-handling](https://github.com/ressurectit/ng-error-handling) - HTTP APIのエラーレスポンスを管理するAngularモジュール。
* [active-connect](https://github.com/HiptJo/active-connect) - Node.js、Angular、WebSockets向けの接続フレームワーク。デコレーターとユーティリティで、クライアントとサーバー間のリアルタイム通信を簡潔にする。
* [ngx-signal-pagination](https://github.com/JPtenBerge/ngx-signal-pagination) - シグナルを利用するAngular向けページネーション。
* [ngx-http](https://github.com/OGS-GmbH/ngx-http) - 型・静的な値・ユーティリティ関数を提供し、HTTP機能を拡張する軽量なAngularライブラリ。
* [ng-speed-test](https://github.com/jrquick17/ng-speed-test) - インターネットの速度を測定する軽量なAngularライブラリ。
* [ngx-interceptors](https://github.com/SebaRenner/ngx-interceptors) - Angularアプリケーションでよく使うHTTPインターセプターを提供するライブラリ。
* [ngx-hal](https://github.com/infinum/ngx-hal) - [HAL形式](http://stateless.co/hal_specification.html)のHTTPリクエスト処理に対応するデータストアライブラリ。
* [trpc-angular](https://github.com/heddendorp/trpc-angular) - HttpClient向けの`@heddendorp/trpc-link-angular`と、リアクティブなデータ取得向けの`@heddendorp/tanstack-angular-query`という、tRPCを基盤とする2つのAngularパッケージを提供するリポジトリ。
* [my-http-resource](https://github.com/consoleLogMyAss/my-http-resource/tree/main/projects/my-http-resource) - 状態・URLパラメーター・設定を管理し、リクエスト処理を簡潔にするリアクティブなAngular HttpClientラッパー。
* [luminara](https://github.com/miller-28/luminara) - ネイティブのfetchを基盤とする、現代的な汎用HTTPクライアント。信頼性、拡張性、明確なアーキテクチャを重視した設計。
* [ngx-cachr](https://github.com/nulzo/ngx-cachr) - シグナルを基盤とする、軽量なAngular用キャッシュライブラリ。
* [ngx-data-polling](https://github.com/antonio-spinelli/ngx-data-polling) - データのポーリングを宣言的かつ型安全に扱うユーティリティを備えたAngularライブラリ。
* [ngx-soap](https://github.com/seyfer/ngx-soap) - [node‑soap](https://github.com/vpulim/node-soap)を基盤とする軽量なSOAPクライアント。Angularのシグナル、スタンドアロンコンポーネント、現代的な機能に全面的に対応する。
* [ngx-http-fetch-tracking](https://github.com/pegasusheavy/ngx-http-fetch-tracking) - Fetch APIバックエンドでアップロードの進捗を追跡するAngularライブラリ。
* [fetchquack](https://github.com/adrian-bueno/fetchquack) - RxJS Observableラッパーと注入コンテキストへの対応を備えたAngular用HTTPクライアント。Fetchによる軽量なストリーミング、SSE、アップロードとダウンロードの進捗処理を提供する。
* [ziflux](https://github.com/neogenz/ziflux) - Angular 21以降向けの、依存パッケージ不要でシグナルを基盤とするキャッシュ層。resource()にstale-while-revalidateを適用し、即時の画面遷移とバックグラウンド更新を行い、スピナーを表示しない。
* [ng-signal-query](https://github.com/Ali7040/ng-signal-query) - シグナルを基盤とする、型安全で高性能なAngular用クエリライブラリ。サーバー状態、無限クエリ、ミューテーション、キャッシュの扱いを簡潔にする。
* [api-caller](https://forge.deejayy.hu/angular-packages/api-caller) - Angular向けのシンプルなAPI呼び出しライブラリ。
* [ngx-lite-cache](https://github.com/Suleeyman/ngx-lite-cache) - HttpClientインターセプターでHTTPレスポンスをキャッシュし、重複リクエストを減らして性能を改善するAngularライブラリ。
* [ng-qubee](https://github.com/AndreaAlhena/ng-qubee) - リアクティブなURI（RxJSとシグナル）、型付きページネーション、495以上のテスト、複数ドライバーへの対応を備えたAngularクエリビルダー。
* [ngx-trpc-client](https://github.com/BeGj/ngx-trpc-client) - Analogの[TRPCパッケージ](https://github.com/analogjs/analog/tree/beta/packages/trpc)を改修したフォーク。
* [zx-angular-lazy-resource](https://github.com/zxnc/zx-angular-lazy-resource) - Angularのシグナルに基づく`resource()`向けの遅延処理ヘルパー。最初のアクセスまで読み込みを遅らせ、最初に確定した値をPromiseとして待機できる。
* [@stitchapi/angular](https://github.com/rejifald/StitchAPI/tree/main/packages/angular) - ストリーミングを中心に設計されたStitchAPIバインディング。`injectStitch`と`injectStitchStream`は、型付きかつ検証済みの呼び出しをAngularシグナルとRxJS Observableの両方として公開し、レスポンスの差分が届くたびに再描画する。
* [angular-fetcher](https://github.com/aliomnt/angular-fetcher) - シグナルを基盤とする現代的なAngularライブラリ。リモートAPIのデータを型安全に管理し、データ取得、ミューテーション、エラー追跡をリアクティブに扱う。
* [@some-angular-utils/paginator](https://github.com/some-angular-utils/paginator) - 2つの入力で使える、シンプルで信頼性を重視したページネーション。スライディングウィンドウ、ジャンプボタン、端でのボタン無効化、CSS変数によるテーマ設定を備える。
* [ngx-request-lock](https://github.com/SalvatoreDiGenua/ngx-request-lock-docs) - UIフローをHTTPリクエストのライフサイクルに結び付けるAngularライブラリ。
* [ngx-api-client](https://github.com/ismailza/ngx-api-client) - 設定可能な`ApiService`。ベースURL、エラー、再試行、読み込み状態の処理に使う場当たり的な`HttpClient`ロジックを抽出し、標準化する。
* [ngx-task](https://github.com/MahmoudAdelJR/ngx-task-suite) - シグナルを中心に設計されたAngular向けの制御可能な非同期アクション。キャンセル、ライフサイクル終了時の後処理、明示的な同時実行方針を備える。
* [ngx-smart-interceptor](https://github.com/ErickG123/ngx-smart-interceptor) - 現代的なAngularアプリケーション向けの、企業用途に対応する堅牢で高度なHTTPインターセプター。

### <a id="micro-frontends"></a>マイクロフロントエンド

* [angular-microfrontend-demo](https://github.com/gioboa/angular-microfrontend-demo) - Module Federation ViteとAngularを組み合わせられることを示す例。
* [backbase-micro-frontends](https://github.com/Backbase/backbase-micro-frontends) - Module Federationを通じて、レガシーアプリケーション（ウィジェット）と新しいアプリケーション（ジャーニー）が連携する方法を示す概念実証。
* [micro-frontends-mindmaps](https://github.com/santoshshinde2012/micro-frontends-mindmaps) - マイクロフロントエンドの概念をまとめたマインドマップ。
* [ngx-mfe](https://github.com/dkhrunov/ngx-mfe) - Webpack 5とModuleFederationプラグインでマイクロフロントエンドを扱うAngularライブラリ。

### Module Federation

* [@module-federation/core](https://github.com/module-federation/core) - 複数のJavaScriptアプリケーションでコードやリソースを共有できる、Module Federationという概念。
* [ng-dynamic-mf](https://github.com/LoaderB0T/ng-dynamic-mf) - Module Federationによって実行時に動的に扱えるモジュール。
* [module-federation-plugin](https://github.com/angular-architects/module-federation-plugin) - マイクロフロントエンドやプラグインを読み込むため、Module FederationをAngular CLIと統合するプラグイン。
* [webpack-module-federation-with-angular](https://github.com/edumserrano/webpack-module-federation-with-angular) - 複数のAngularコードのデモを通じて、Webpack Module Federationを学ぶガイド。
* [Vite-module-federation-angular-test](https://github.com/Seifenn/vite-module-federation-angular-test) - [Module Federation Vite](https://github.com/module-federation/vite)をAngularとAnalogJS（[@brandonroberts/angular-vite](https://github.com/brandonroberts/angular-vite)を利用）で検証する例。AnalogJSホストでのSSRも検討するが、プラグインのSSR対応状況は異なる場合がある。
* [mfe-crossframework](https://github.com/igorhms/mfe-crossframework) - Angularホストと、異なるフレームワークを使うリモートを備えたModule Federationプロジェクト。Nxを使用しない。
* [npm-mfe-live-reload](https://www.npmjs.com/package/npm-mfe-live-reload) - 開発モードでリモートのマイクロフロントエンドが変わると、シェルを自動的に再読み込みするツール。

### <a id="monorepos"></a>モノレポ

* [Moon](https://moonrepo.dev/docs/guides/examples/angular) - Rustを基盤とする、ウェブ向けのビルド・モノレポ管理ツール。
* [Nx](https://github.com/nrwl/nx) - ローカルとCIでモノレポを維持・拡張するための、統合ツールと高度なCI機能を備えたビルドシステム。
* [Turbo](https://github.com/vercel/turbo) - JavaScriptとTypeScript向けのTurbopack（Rust製バンドラー）とTurborepo（ビルドシステム・モノレポ用ツール）。

### <a id="server-side-rendering"></a>サーバーサイドレンダリング

* [公式サイト](https://angular.dev/guide/ssr#enable-server-side-rendering) - フレームワークに組み込まれた、固定原文で新しいとされるSSRパッケージのドキュメント。
* [angular-prerender](https://github.com/chrisguttandin/angular-prerender) - Angularアプリケーションをプリレンダリングするコマンドラインツール。
* [analogjs](https://analogjs.org/) - Angularアプリケーションのサーバーサイドレンダリング（SSR）と静的サイト生成（SSG）に対応する、フルスタックのAngularメタフレームワーク。
* [analog-tools](https://github.com/MrBacony/analog-tools) - AnalogJSの機能を改善・拡張するユーティリティとライブラリ。
* [bot-ssr](https://github.com/patrikx3/bot-ssr) - ボットにはSSR、ユーザーには即時のCSRを提供するツール。[isbot](https://github.com/omrilotan/isbot)を利用し、主要なクローラーに高速な読み込みと整ったプリレンダリング済みHTMLを提供する。
* [ngx-sitemaps](https://github.com/json-derulo/ngx-sitemaps) - Angularのプリレンダリングされたルートからサイトマップを生成するツール。
* [ngx-bun](https://github.com/pegasusheavy/ngx-bun) - Bunの組み込みサーバーを利用する、Angular 19以降向けの高性能SSR・SSGアダプター。
* [ng-ssr-caching](https://github.com/nigrosimone/ng-ssr-caching) - Angular SSRのサーバーサイドで描画されたページ向けキャッシュ。

## <a id="development-utilities"></a>開発ユーティリティ

### <a id="accessibility"></a>アクセシビリティ

* [Angularの公式ARIA](https://angular.dev/guide/aria/overview) - 一般的なWAI-ARIAパターンを実装する、ヘッドレスでアクセシビリティに配慮したディレクティブ群。
* [digital.gov](https://digital.gov/guides/accessibility-for-teams/) - 米国政府による、チーム向けのアクセシビリティガイド。
* [WAI](https://www.w3.org/WAI/) - アクセシビリティの理解と実装を支援する標準・資料を策定する、W3CのWeb Accessibility Initiative（WAI）。
* [webaim](https://webaim.org/) - 名称はWeb Accessibility In Mind（ウェブのアクセシビリティを念頭に）。
* [WAVE](https://wave.webaim.org/) - ウェブのアクセシビリティ評価ツール。
* [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter) - HTML、Angular、React、Markdown、Vue、React Nativeのアクセシビリティを検査するリンター。
* [Angular Material CDK - a11y](https://material.angular.io/cdk/a11y/overview) - アクセシビリティを改善するための各種ツールを提供するa11yパッケージ。
* [PrimeNGのアクセシビリティガイド](https://primeng.dev/guides/accessibility) - PrimeNGのアクセシビリティガイド。
* [astral-accessibility](https://github.com/verto-health/astral-accessibility) - Angularで実装されたオープンソースのアクセシビリティウィジェット。
* [angular-vlibras](https://github.com/angular-a11y/angular-vlibras) - VLibrasを統合し、コンテンツをブラジル手話（Libras）に自動翻訳するAngularライブラリ。
* [a11y-libraries](https://github.com/LDV2k3/a11y-libraries) - Angular向けの各種アクセシビリティ支援機能。
* [a11yguard](https://github.com/shamaz332/a11yguard) - 依存パッケージ不要のアクセシビリティツールキット。複数フレームワーク共通の基礎機能、各フレームワークの慣例に沿うアダプター、EAA・EN 301 549に対応付けられた実行時監査を提供する。
* [ulam](https://github.com/mikeyil/ulam) - 現代のウェブ向けアクセシビリティユーティリティ。素のJavaScriptでの利用を中心とし、React、Remix、Vue、Angular用アダプターは任意で追加できる。
* [aria-reach](https://github.com/manichandra/aria-reach) - 共有コンポーネントライブラリのARIAアクセシビリティに関するアンチパターンを分析するツール。

### AI

* [AIの公式ドキュメント](https://angular.dev/ai)
* [Angular CLI MCPサーバーの公式セットアップ案内](https://angular.dev/ai/mcp)
* [Angularの公式サンプルリポジトリ](https://github.com/angular/examples) - [GenKit](https://firebase.google.com/docs/genkit)とAIを利用したAngularの実装例。
* [Angularの公式スキル](https://github.com/angular/skills)
* [公式llms.txtファイル](https://angular.dev/llms.txt)
* [公式llms-full.txtファイル](https://angular.dev/assets/context/llms-full.txt)
* [abbi-ng-ai-image-descriptor](https://github.com/slsfi/abbi-ng-ai-image-descriptor) - AIで画像の説明を生成するAngularウェブアプリケーション。利用にはOpenAI APIキーが必要。
* [AGENT.md](https://ampcode.com/AGENT.md#tool-integration) - 汎用的なエージェント設定ファイル。
* [agentbridge](https://github.com/ayoubachak/agentbridge) - AIエージェントがアプリケーションのコンポーネントを発見し、操作・制御する方法を標準化するフレームワーク。
* [agent-rules-kit](https://github.com/tecnomanu/agent-rules-kit) - 技術スタックのベストプラクティスに沿ってエージェントを誘導するルールをインストール・設定する、AI向けCLIツール。
* [agentskit](https://github.com/AgentsKit-io/agentskit) - AngularでAIエージェントを構築するための、組み合わせ可能なツールキットとヘッドレスのチャットコンポーネント。ストリーミング、ツール、メモリー、RAGを備える。
* [ago-sdk](https://github.com/useago/ago-sdk) - AIエージェントをフロントエンドの技術スタックに直接組み込むAGOのSDK。レスポンスのストリーミング、ワークフローの起動、UIの対話的な操作を行う。
* [aitools.fyi](https://aitools.fyi/technology/angular) - Angularで構築されたAIツール。
* [Angularコードエディター向けルール](https://promptgenius.net/cursorrules/frameworks/frontend/angular) - Angularコードを扱う際に、AIと効果的にやり取りするためのパターンのガイド。
* [Angularize](https://beta.angularize.dev/) - 人間の開発者による支援を受けながら、バイブコーディングでAngularアプリケーションを構築するサービス。
* [angular-nest-ai-kit](https://github.com/eusouwilson/angular-nest-ai-kit) - Nxで構成されたモノレポ向けのスキルとAIエージェント。フロントエンドはスタンドアロンのAngularとPrimeNG、バックエンドはNestJSとPrisma。
* [@full-stack-skills/angular-skills](https://github.com/full-stack-skills/angular-skills) - AIコーディングエージェント向けのAngular開発スキル。
* [@Kobolden/angular-skills](https://github.com/Kobolden/angular-skills) - 固定原文で最新とされるパターン、ベストプラクティス、Angular 20以降の実装例を含む、AIによるAngularコーディング支援スキル。
* [angular-vibe-kit](https://github.com/vuanhtung10/angular-vibe-kit) - 任意のAngularプロジェクトにバイブコーディングのワークフローを導入するキット。`CLAUDE.md`、プロジェクトのドキュメント、Angularのバージョンに合わせたClaude Codeのスラッシュコマンドを含む。
* [augment code](https://www.augmentcode.com/) - プロのソフトウェアエンジニアと大規模なコードベース向けに開発されたAIコーディングアシスタント。
* [CodingFleet](https://codingfleet.com/code-generator/angular/) - 指示を効率的なAngularコードに変換するAIツール。
* [context7](https://github.com/upstash/context7) - LLMとAIコードエディターに、固定原文で最新とされるコードドキュメントを提供するMCPサーバー。
* [cursor.directory](https://cursor.directory/?q=angular) - Cursorの利用者向けのサイト。
* [deep-chat](https://github.com/OvidijusParsiunas/deep-chat) - ウェブサイト向けの、全面的にカスタマイズ可能なAIチャットボットコンポーネント。
* [Feature Search Agent - Angular PR Scout](https://github.com/dnlrbz/feature_search_agent) - GoogleのAgent Development Kit（ADK）を使ったAIエージェント。AngularのGitHubプルリクエストを自動的に検索・分析して、新機能を調べる。
* [gitingest](https://gitingest.com/) - 任意のGitリポジトリのコードベースを簡潔なテキスト要約に変換するツール。LLMにコードベースを渡す際に役立つ。
* [glama](https://glama.ai/mcp/servers?query=angular) - Angular関連の項目で絞り込んだMCPサーバーのディレクトリ。
* [hashbrown](https://github.com/liveloveapp/hashbrown) - AIを利用した楽しいユーザー体験を構築する[Hashbrown](https://hashbrown.dev/)フレームワーク。
* [mushi-mushi](https://github.com/kensaurus/mushi-mushi) - AIで構築したアプリケーションを修正するツール。平易な英語による診断と、そのまま使える修正をエディター内で提供する。
* [ngAutoPilot](https://github.com/janpereira-dev/ngAutoPilot) - 特定のエージェントに依存しないマイクロスキルのカタログ。Angular、TypeScript、JavaScript、RxJS、テスト、コード品質、アーキテクチャ、バージョン管理、品質ガバナンスのワークフローを対象とする。
* [ng-mocks-testing-skill](https://github.com/mintarasss/ng-mocks-testing-skill) - Jestと`ng-mocks`でAngularユニットテストを書くためのClaude Codeスキル集。
* [ng-pr-review](https://richa-29.github.io/angular-pr-reviewer/) - Angularを理解するAIコードレビュー。
* [ngx-agents-md](https://github.com/pr4san/ngx-agents-md) - Claude CodeやCursorなどのAIコーディングエージェント向けに、Angularのドキュメントをプロジェクトへ追加するツール。
* [ngx-ai](https://github.com/Arul1998/ngx-ai) - OpenAI互換のチャットAPI（OpenAI、xAI Grok、独自のプロキシ）向けの、RxJSと組み合わせやすいAngularクライアント。ストリーミングを中心的な機能として備える。
* [ngx-ai-devtools](https://github.com/ahmedkhan1/ngx-ai-devtools) - アプリケーションの全プロンプト、レスポンス、消費トークン、ドル建ての費用をブラウザーのタブ内で確認するツール。
* [ngx-bob](https://github.com/scottstraughan/ngx-bob) - メッセージ、ローカル履歴、エラー処理、コマンド、検索を備えたAngularチャットウィジェット。
* [ngx-gen-ui](https://github.com/alessiopelliccione/ngx-gen-ui) - Firebase AIを通じて生成UIのコンテンツをストリーミングする、軽量なAngularディレクティブとサービス。
* [ngx-prompt-kit](https://github.com/PianoNic/ngx-prompt-kit) - Spartan UIを基盤とする、AIチャットインターフェース用Angularコンポーネント。
* [ngx-quill-ink](https://github.com/AhsanAyaz/ngx-quill-ink) - テキストストリームを手書きのようにアニメーションさせ、視覚対応LLM用にペンの筆跡を取得するTypeScriptエンジンとAngularラッパー。
* [ngx-testbox-agent-skill](https://github.com/kirill-kolomin/ngx-testbox-agent-skill) - `ngx-testbox`テストパッケージ用のAIエージェントスキル。
* [point-grab](https://github.com/Nacho-Labs-LLC/point-grab) - ウェブアプリケーションの要素を指すと、HTML、コンポーネント名、ソースファイル、祖先要素を含むコンテキストを、MCP経由でAIエージェントへ即座に送るツール。
* [PureCode AI](https://purecode.ai/components/angular/application-ui) - AngularアプリケーションのUIを50%速く構築するPureCode AI。
* [reangular](https://github.com/AleksanderBodurri/reangular) - Reactライブラリを現代的なAngularライブラリへ変換するコーディングエージェント用スキル。完全な機能の同等性、自動ブラウザー検証、並べて比較する同等性レビューを備える。
* [repomix](https://github.com/yamadashy/repomix) - リポジトリ全体を、AIで扱いやすい1つのファイルにまとめるツール。
* [rxjs-mcp-server](https://github.com/shuji-bonji/rxjs-mcp-server) - ClaudeなどのAIアシスタントから、RxJSストリームを直接実行・デバッグ・可視化するツール。
* [senior-angular-architect](https://github.com/itsdishant/senior-angular-architect) - 上級レベルのAngularアーキテクチャを助言する、専門的なAIスキル。
* [superconnect](https://github.com/bitovi/superconnect) - FigmaファイルとReactまたはAngularのリポジトリを調べ、`.figma.tsx`または`.figma.ts`のマッピングを生成して、Figma CLI経由で公開するAIツール。
* [Threadplane](https://github.com/cacheplane/angular-agent-framework) - Angular用に設計されたエージェントUIフレームワーク。LangGraphとAG-UIバックエンド向けに、ストリーミングチャット、永続的なスレッド、割り込み、サブエージェント、計画、メモリー、生成UIを提供する。
* [UI2CODE](https://ui2code.ai/) - AIでUIを数秒でコードに変換するツール。
* [web-codegen-scorer](https://github.com/angular/web-codegen-scorer) - 大規模言語モデル（LLM）が生成したウェブコードの品質を評価するツール。
* [Workik](https://workik.com/angular-code-generator) - 文脈を利用する、無料のAI搭載Angularコード生成ツール。
* [Yes Chat AI](https://www.yeschat.ai/gpts-ZxX35UdX-Angular-Ninja-%F0%9F%A5%B7) - Angular開発アシスタントのAngular Ninja。
* [Zipy](https://www.zipy.ai/online-tools/ai-angular-code-generator) - AI搭載のAngularコード生成ツール。

### <a id="analytics"></a>分析

* [@blue-cardinal/ngx-google-analytics](https://github.com/blue-cardinal/ngx-google-analytics) - Google Analyticsのスクリプトを注入するAngularモジュール。開発環境での使用を防ぐ保護機能を備える。
* [clickstream-analytics-on-aws-web-sdk](https://github.com/aws-solutions/clickstream-analytics-on-aws-web-sdk) - 用意されたデータパイプラインを通じて、ブラウザーのクリックストリームデータをAWSに収集するSDK。
* [Heap](https://help.heap.io/hc/en-us/articles/37271957075345-Using-Heap-With-Popular-Web-Frameworks-Libraries) - 顧客の行動経路、コンバージョン、継続利用を追跡するプロダクト分析。
* [kitbase](https://docs.kitbase.dev/sdks/angular) - プロダクト分析と機能管理のための開発者向けプラットフォーム。
* [litlyx](https://github.com/Litlyx/litlyx) - 1行のコードで設定できるオープンソースの分析ツール。
* [@luzmo/ngx-embed](https://www.npmjs.com/package/@luzmo/ngx-embed) - Angularアプリケーションに[Luzmo](https://www.luzmo.com/)のダッシュボードを埋め込むライブラリ。
* [ngx-gtm](https://github.com/jerkovicl/ngx-gtm) - Google Tag Manager（GTM）の利用に必要なスクリプトタグを自動的に注入するAngularライブラリ。
* [ngx-material-tracking](https://github.com/Service-Soft/ngx-material-tracking) - Google Analytics、Meta Pixel、独自の設定を備えた、Angularサイト向けのGDPRに準拠するトラッキング。
* [ngx-matomo-client](https://github.com/EmmanuelRoux/ngx-matomo-client) - Angularアプリケーション向けのMatomo分析クライアント。
* [ngx-meta-pixel](https://github.com/Szymonexis/ngx-meta-pixel) - Angularアプリケーションに[Meta Pixel](https://www.facebook.com/business/tools/meta-pixel)を設定するパッケージ。
* [ngx-piwik-pro](https://github.com/PiwikPRO/ngx-piwik-pro) - Tag Managerとトラッキングを実装するための、[Piwik PRO](https://piwik.pro/)専用Angularライブラリ。
* [oculr-ngx](https://github.com/Progressive-Insurance/oculr-ngx) - Angularアプリケーションでのデータ収集を簡単にする分析ライブラリ。
* [plausible](https://github.com/plausible/analytics) - 軽量でオープンソースの、プライバシーに配慮した分析ツール。[SPAへの対応](https://plausible.io/docs/spa-support)も備える。
* [rybbit](https://github.com/rybbit-io/rybbit) - プライバシーに配慮したGoogle Analyticsの代替ツール。Angularとの連携方法は[ガイド](https://www.rybbit.io/docs/guides/angular)を参照。
* [gizmo](https://gizmoanalytics.io/) - AIを基盤とするGoogle Analyticsの代替ツール。競合製品より利用枠の大きい無料プランを提供する。
* [ngx-segment-community](https://github.com/behdi/ngx-segment-community) - [ngx-segment-analytics](https://github.com/opendecide/ngx-segment-analytics)の、コミュニティが保守する後継プロジェクト。
* [swetrix](https://github.com/Swetrix/swetrix) - [AngularアプリケーションとSwetrixを連携](https://swetrix.com/docs/angular-integration)し、ページビューの追跡、エラー監視、独自イベントの取得を行うツール。プライバシーに配慮し、GDPRに準拠する。
* [@grandgular/logrocket-angular](https://github.com/Grandgular/logrocket) - LogRocket Web SDKのラッパー。依存性注入と組み合わせやすい初期化、遅延読み込み、型付きオプション、プライバシー補助機能、data-privateとdata-public用のDOMディレクティブを備える。
* [ngx-umami](https://github.com/mitsuru17/ngx-umami) - 軽量でプライバシーを重視する[Umami Analytics](https://umami.is/)を、Angularアプリケーションに組み込むための機能。
* [takt-angular](https://github.com/vskstudio/takt-angular) - プライバシーに配慮した分析ツール[Takt](https://github.com/vskstudio/takt-core)を、Angularの慣例に沿って扱うラッパー。
* [inspect-ng-collector](https://github.com/oneteme/inspect-ng-collector) - Angularアプリケーション向けの、フロントエンドのテレメトリー・監視ライブラリ。
* [ngx-piano](https://gitlab.com/SNCF/ngx-piano) - Angularアプリケーションに[Piano Analytics](https://www.piano.io/)を組み込むライブラリ。

### <a id="code-analysis"></a>コード解析

* [angular-compiler-output](https://github.com/JeanMeche/angular-compiler-output) - 指定したAngularテンプレートに対して、Angularコンパイラーが出力するJavaScriptを確認するツール。
* [angular-doctor](https://github.com/antonygiomarxdev/angular-doctor) - プロジェクト内のAngular固有のlint問題と使われていないコードを検出し、0〜100の健全性スコアと、改善に使える診断情報を生成するツール。
* [angular-mermaider](https://github.com/earthdmitriy/angular-mermaider) - Mermaidのデータフロー図を生成する静的コード解析ツール。
* [compuse](https://github.com/jakub-hajduk/compuse) - コードベース全体でAngularコンポーネントの使用状況を分析する統一API。
* [modulens](https://github.com/sinanyilmaz0/modulens) - フロントエンドのワークスペース向けの、アーキテクチャ・構造・品質の分析ツール群。
* [ngcompass](https://github.com/RoadmapDevelop/ngcompass) - Angularを理解して、アーキテクチャ、性能、SSR、セキュリティ、コード品質を静的に解析するツール。
* [ng-di-graph](https://github.com/m-yoshiro/ng-di-graph) - AngularのTypeScriptコードベースを解析し、依存性注入の関係を抽出するコマンドラインツール。
* [ng-lens](https://github.com/MerrittMelker/ng-lens) - `ts-morph`でAngularコンポーネントを解析し、任意のAPIライブラリのサービス使用パターンを検出するNode.jsツール。
* [ng-loom](https://github.com/xonaib/ng-loom) - Angularプロジェクトを調べ、アプリケーションのアーキテクチャを共有可能な単体の静的HTMLレポートに出力するCLI。コンポーネント、ディレクティブ、パイプ、サービス、ラッパー、インポート、依存性注入を含む。
* [ng-parsel](https://github.com/angular-experts-io/ng-parsel) - AngularコードベースをJSONの抽象表現へ変換するツール。APIの表示や分析に役立つ。
* [ng-vitals](https://github.com/TechSpiritSS/ng-vitals) - 健全性、アーキテクチャ、保守性、現代化への準備状況を評価する静的解析ツール。
* [ngx-genie](https://github.com/SparrowVic/ngx-genie) - 依存性注入ツリーの可視化、サービスの状態分析、コンポーネント間の関係の追跡、メモリーやアーキテクチャの問題の特定を行うツール。
* [ngx-html-bridge](https://github.com/nagashimam/ngx-html-bridge) - Angularテンプレートを静的HTMLの形に変換し、標準的なHTMLツールで確実な検証やlintを行えるようにするツール。
* [ngx-locator](https://github.com/Ea-st-ring/ngx-locator) - [LocatorJS](https://www.locatorjs.com/)のように、ブラウザーからコンポーネントやテンプレートを開くAngular開発用ユーティリティ。
* [oxc-angular-compiler](https://github.com/voidzero-dev/oxc-angular-compiler) - [Oxc](https://github.com/oxc-project/oxc)の基盤を利用して高速にコンパイルする、Rust製の高性能Angularテンプレートコンパイラー。
* [ts-analyzer](https://github.com/amir-valizadeh/ts-analyzer) - 型安全性、コードの複雑さ、品質に関する詳細な指標を提供する、TypeScriptコードベースの解析ツール。

### <a id="debugging"></a>デバッグ

* [Bugfender](https://bugfender.com/platforms/angular-logging/) - ログとAngularのエラーをリアルタイムで収集するクラウドサービス。
* [ngx-debug-console](https://github.com/andrerds/ngx-debug-console) - Angular 14以降のアプリケーション向けの、画面に重ねて表示するフローティングデバッグコンソール。
* [ngrx-devtool](https://github.com/AmadeusITGroup/ngrx-devtool) - NgRxの状態管理を可視化・デバッグする開発ツール。
* [ngx-dev-toolbar](https://github.com/alfredoperez/ngx-dev-toolbar) - Angularアプリケーションの開発をブラウザー内で支援する開発ツールバー。
* [omelet-angular-debug-panel](https://github.com/maycuatroi1/omelet-angular-debug-panel) - SQLの動作、サーバーの処理時間、認証のデバッグ状況を確認できるAngularデバッグダッシュボード。
* [angular-scan](https://github.com/husseinAbdElaziz/angular-scan) - 再描画中のAngularコンポーネントを自動的に検出し、強調表示するツール。
* [angular-render-scan](https://github.com/edisonaugusthy/angular-render-scan) - Angularの変更検知を可視化する、画面に重ねて表示するデバッグツール。
* [rxjs-leak-finder](https://github.com/FlorinCiocirlan/rxjs-leak-finder) - AngularアプリケーションでリークしているRxJSサブスクリプションを見つける、開発モード用ツール。
* [form-lens-angular](https://github.com/hebertdelima13/form-lens-angular) - 開発中のアプリケーション内で、フォーム構造、コントロールの状態、検証エラー、入れ子になったフォームツリーを直接確認するツール。
* [allstak-angular](https://github.com/AllStak/allstak-angular) - 未捕捉の例外、構造化ログ、ナビゲーションのスパン、送信HTTPリクエスト、コンポーネントの描画時間を取得するツール。スタンドアロンとNgModuleを基盤とするアプリケーションの両方を主要な対象としてサポートする。

### <a id="documentation-tools"></a>ドキュメントツール

* [Storybook](https://github.com/storybooks/storybook) - UIの開発環境。
* [Compodoc](https://github.com/compodoc/compodoc) - Angularアプリケーション向けのドキュメントツール。
* [ng-doc](https://github.com/ng-doc/ng-doc) - Angularプロジェクト向けのドキュメントエンジン。
* [docgeni](https://github.com/docgeni/docgeni) - AngularコンポーネントライブラリとMarkdown文書向けの、すぐに使えるドキュメント生成ツール。
* [ng-component-hierarchy-visualizer](https://github.com/timonkrebs/ng-component-hierarchy-visualizer) - ルート設定からAngularコンポーネントの階層をMermaid図にする、既存の作業を妨げにくいツール。
* [easy-template-x-angular-expressions](https://github.com/alonrbar/easy-template-x-angular-expressions) - [easy-template-x](https://github.com/alonrbar/easy-template-x)でAngularの式を扱うための機能。
* [story-ui](https://github.com/southleft/story-ui) - AIとの会話でStorybookストーリーを生成し、コンポーネントのドキュメント作成を自動化するツール。多数のLLMプロバイダーに対応する。
* [envguards](https://github.com/princeofv/envguards) - 特定のフレームワークに依存せず、環境変数の検証、ドキュメント生成、`.env.example`の作成を行うツール。
* [ngmd](https://github.com/erkamyaman/ngmd) - Angularのドキュメント用スターター。Markdownファイルを追加すると、ルートが生成される。
* [storybook-addon-angular-manifest](https://github.com/anrouxel/storybook-addon-angular-manifest) - ストーリーとCompodocのドキュメントからAngularコンポーネントのマニフェストを構築するStorybookアドオン。

### <a id="ide-extensions"></a>IDE拡張

* [AngularCliPlus](https://github.com/danisss9/AngularCliPlus) - VS Code向けのAngular CLIコマンド、Schematicsジェネレーター、プロジェクト用ツール。
* [angular-code-quality-toolkit](https://github.com/Arul1998/angular-code-quality-toolkit) - depcheck、ts-prune、ESLintなどのAngularコード品質ツールを実行し、使われていないコードや依存関係の整理を支援する[VS Code拡張](https://marketplace.visualstudio.com/items?itemName=arul1998.angular-code-quality-toolkit)。
* [Angular Dev Tools](https://angular.dev/tools/devtools) - Angularアプリケーションのデバッグと性能分析を行うブラウザー拡張。
* [Angular Extension Pack](https://marketplace.visualstudio.com/items?itemName=loiane.angular-extension-pack) - Angular向けVS Code拡張をまとめた拡張パック。
* [Angular File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-angular-generator) - 直感的で高速なファイル生成でAngular開発を支援する拡張。
* [Angular Schematics Pro](https://cyrilletuzi.gumroad.com/l/schematicspro) - Visual Studio CodeでAngularのコードを生成する拡張。
* [Angular Schematics](https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics) - Visual Studio Codeでコードを生成する拡張。
* [GraphLens](https://github.com/GraphLens/graphlens) - Angularプロジェクトのアーキテクチャを対話的に可視化するツール。
* [Ionic VS Code Extension](https://ionicframework.com/docs/intro/vscode-extension) - VS Codeのウィンドウ内で、Ionicアプリケーション開発でよく使う各種機能を実行する拡張。
* [mini-typescript-hero](https://github.com/angular-schule/mini-typescript-hero) - インポート文を自動的に管理する、軽量で現代的なVS Code拡張。
* [ngx-html-syntax](https://github.com/princemaple/ngx-html-syntax) - [Sublime Text](https://www.sublimetext.com/)向けのAngular HTML構文対応。
* [ngx-translatorex](https://github.com/MarcinKurylo/ngx-translatorex) - Angularのテンプレートとコンポーネントに直接記述された文字列を、`ngx-translate`の国際化キーに抽出するVS Code拡張。
* [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) - コマンドライン引数を調べる時間を減らし、製品のリリースを支援するツール。
* [Redux DevTools](https://github.com/reduxjs/redux-devtools/) - `@ngrx/store-devtools`と組み合わせ、NgRxアプリケーションの状態を調べるツール。
* [vscode-angulartools](https://github.com/CoderAllan/vscode-angulartools) - Angularプロジェクトの調査、ドキュメントの改善、コードのリバースエンジニアリング、リファクタリングを行う[AngularTools](https://marketplace.visualstudio.com/items?itemName=coderAllan.vscode-angulartools)。
* [VS Code Angular HTML](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html) - Angular HTMLテンプレートファイルの構文強調表示。
* [vscode-angular-auto-import](https://github.com/ngx-rock/vscode-angular-auto-import) - テンプレートで使用されるセレクターに基づき、不足しているAngularコンポーネントのインポートを自動的に提案・挿入する拡張。
* [zed-angular](https://github.com/nathansbradshaw/zed-angular) - [Zed](https://zed.dev/)にAngular Language Serviceを組み込む拡張。

### <a id="generators-and-scaffolding"></a>ジェネレーターとスキャフォールディング

* [angular-openapi-gen](https://github.com/constantant/angular-openapi-gen) - ツリーシェイキングに対応し、シグナルを基盤とするAPIクライアント生成ツール。
* [angular-scaffold](https://github.com/EPAM-JS-Competency-center/angular-scaffold) - 本番用プロジェクトに必要なツールを備えたAngularプロジェクトのひな型を生成するツール。
* [ngx-schematics-utilities](https://github.com/DSI-HUG/ngx-schematics-utilities) - Angular Schematics向けの便利なユーティリティ。
* [abp](https://github.com/abpframework/abp) - 明確な設計方針を持つアーキテクチャを採用した、企業向けアプリケーション用のオープンソースASP.NET Coreフレームワーク。
* [LymeStack](https://www.lymestack.com/) - 小規模なチームがアプリケーションを素早く構築・改善するための、フルスタックのウェブアプリケーション用テンプレートとツール群。
* [spiderly](https://github.com/filiptrivan/spiderly) - EF Coreモデルから、カスタマイズ可能な`.NET`とAngularのアプリケーションを生成する`.NET`（C#）ツール。
* [generator-jhipster-ionic](https://github.com/jhipster/generator-jhipster-ionic) - JHipsterバックエンドと通信するIonicアプリケーションを生成するツール。
* [Node Initializr](https://start.nodeinit.dev/) - アプリケーションの依存関係を素早く収集し、初期設定の多くを処理するツール。
* [nx](https://nx.dev/nx-api/angular) - アプリケーションとライブラリを管理するエグゼキューター、ジェネレーター、ユーティリティを提供するプラグイン。
* [skulljs](https://skulljs.github.io/) - 広く使われているJavaScriptとTypeScriptのフレームワークでウェブアプリケーションを構築するための、標準化されたファイル構成。
* [teleport-code-generators](https://github.com/teleporthq/teleport-code-generators) - 現代的なJavaScriptアプリケーション向けのコード生成ツール集。
* [Bootify.io](https://bootify.io) - 独自のデータベース、Angularフロントエンド、CRUD機能を備えたSpring Bootアプリケーションを生成するツール。
* [jangular-cli](https://github.com/nathangtg/jangular-cli) - JWT認証、Flywayによるマイグレーション、ルート保護、CLIセットアップを備えたSpring BootとAngularのスターターキット。
* [enterprise-java-saas-starter-kit](https://github.com/zukovlabs/enterprise-java-saas-starter-kit) - Java 21、Spring Boot 3.4、Angular 21（スタンドアロンとシグナル）、MSSQL、JWT認証、Docker Composeを備えた、本番利用向けのSaaSスターター。
* [SaaS Starter](https://github.com/sayahweb2-png/saas-starter-lite) - NestJSとAngular 21を使う、本番利用向けのSaaSひな型。JWT・OAuth・2FA認証、Stripe決済、マルチテナント、RBAC、BullMQ、Docker、Terraform、55以上のテストを備える。
* [JHipster](https://www.jhipster.tech) - Spring BootとAngular向けのオープンソースのアプリケーション生成ツール。
* [ng-openapi](https://github.com/ng-openapi/ng-openapi) - Angular用OpenAPIクライアント生成ツール。
* [tmf](https://github.com/tripsnek/tmf) - Eclipse Modeling Framework（EMF）の軽量なTypeScript移植版。Node.js、Java、Angular・Reactにわたり、モデル駆動で型安全なデータモデルを扱う。
* [polyfront-scaffold](https://github.com/NirmalSamaranayaka/polyfront-scaffold) - 幅広い設定項目を備え、柔軟で拡張性のあるAngularアプリケーションを構築するジェネレーター。
* [orval](https://github.com/orval-labs/orval) - OpenAPI仕様に基づき、フロントエンドアプリケーションで生成・検証・キャッシュ・モック化を行うツール。
* [angular-sitemap-generator](https://github.com/borisonekenobi/angular-sitemap-generator) - Angularプロジェクト用の`sitemap.xml`ファイルを生成するツール。
* [AutoFormsBuilderFilesGenerator](https://github.com/XHAlawa/AutoFormsBuilderFilesGenerator) - `ng-openapi-gen`を利用してOpenAPI・SwaggerからAngularフォームを生成するツール。強い型付け、検証、UIヘルパーを備える。
* [ngx-autogen](https://github.com/barcidev/ngx-autogen) - ベストプラクティスに沿うコードの生成と、繰り返しの設定作業の削減で、Angularの開発手順を簡潔にするSchematics集。
* [angular-momentum](https://github.com/TheGameKnave/angular-momentum) - 最小限の設定で、モノレポ内にAngularプロジェクトを素早く作成するツール。
* [swaggular](https://github.com/AlexMA2/swaggular) - Swagger・OpenAPI仕様からAngularのサービスとモデルを生成するツール。
* [prism](https://github.com/arclight-digital/prism) - Litウェブコンポーネントから、React、Vue、Svelte、Angular、Solid、Preact用のラッパーと、HTML・CSSの実装例を自動生成するツール。
* [momentum-cms](https://github.com/DonaldMurillo/momentum-cms) - Angularを基盤とするヘッドレスCMS。TypeScriptでコレクションを定義すると、管理UI、REST API、データベーススキーマを自動生成する。
* [ng-openapi-signals](https://github.com/ynnckrkn/ng-openapi-signals) - Angularの`resource()`と`fetch()`を利用する、シグナルを中心に設計されたOpenAPIクライアント生成ツール。
* [NGX View Builder](https://ngxviewbuilder.io/) - JSONを介してネイティブに描画するページ全体、ダッシュボード、フォームを、ドラッグ＆ドロップで視覚的に設計するローコードビルダー。

### <a id="internationalization"></a>国際化

* [angular-ecmascript-intl](https://github.com/json-derulo/angular-ecmascript-intl) - ブラウザーのIntl.* APIを使って国際化データを変換するパイプ群。
* [angular-i18next](https://github.com/Romanchuk/angular-i18next) - Angularと[i18next](https://www.i18next.com/)の連携機能。
* [angular-intlayer](https://www.npmjs.com/package/angular-intlayer) - Angularアプリケーションを国際化する[intlayer](https://github.com/aymericzip/intlayer)パッケージ。国際化用のコンテキストプロバイダーとフックを提供する。
* [angular-locale-chain](https://github.com/i18n-agent/angular-locale-chain) - AngularとTransloco向けの、ロケールのフォールバックを連鎖させる機能。
* [angular-translation-checker](https://github.com/ricardoferreirades/angular-translation-checker) - `ngx-translate`の使われていないキーや不足しているキーを検出し、国際化ファイルを整理するツール。
* [Angular Translation Extractor](https://github.com/devremoto/angular-translation-extractor) - テンプレートとTypeScriptに直接記述された文字列を`ngx-translate`のキーに抽出する[VS Code拡張](https://marketplace.visualstudio.com/items?itemName=AdilsondeAlmeidaPedro.angular-translation-extractor)。ロケール用JSONの生成と自動翻訳を行い、ローダーと言語選択機能を接続する。
* [Crowdin](https://crowdin.com/) - 600以上のアプリと[連携機能](https://store.crowdin.com/search?query=angular)を使い、コンテンツの翻訳を自動化するAI搭載のローカライズソフトウェア。
* [doloc](https://doloc.io/) - [Angular](https://doloc.io/getting-started/frameworks/angular/)の作業手順内で即座に翻訳するツール。
* [I18N](https://github.com/soluling/I18N) - Solulingが実装した、`.NET`、Angular、Delphi向けの国際化（I18N）API集。
* [i18n-egy](https://github.com/abdelfattahqandil21-oss/i18n-egy) - シグナルを基盤とする、現代的で軽量なAngular国際化ライブラリ。ツリーシェイキングとサーバーサイドレンダリングに対応する。
* [i18n-keygen](https://github.com/gagle/i18n-keygen) - すべてのビルドツール向けの、型安全な国際化キー。1つのパッケージで利用でき、特定のツールに固定されない。
* [i18n-scanner-toolkit](https://github.com/58bcbedf47bd91439c/i18n-scanner-toolkit) - 多言語コンテンツの抽出、翻訳の不足の検出、管理を行うツール。CSVの書き出しと読み込みに対応する。
* [intl-tel-input-ng](https://github.com/mpalourdio/intl-tel-input-ng) - [intl-tel-input](https://github.com/jackocnr/intl-tel-input)を簡単に組み込むAngularコンポーネント。
* [langsync](https://github.com/mariokreitz/langsync) - TypeScriptプロジェクトのローカライズ手順用CLIツール群。
* [localess](https://github.com/Lessify/localess) - AngularとFirebaseを使った、翻訳管理ツールとコンテンツ管理システム。
* [localive](https://github.com/Arigatouz/localive) - 実行中のReact、Vue、Angular、Svelteアプリケーション内でテキストを直接更新するツール。JSONキーを探さず、変更を即座にロケールファイルへ保存できる。
* [ng-extract-i18n-merge](https://github.com/daniel-sc/ng-extract-i18n-merge) - Angularプロジェクトの国際化用XLIFF翻訳ファイルを抽出・マージするツール。
* [ng-linguo](https://github.com/jmwierzbicki/linguo) - SignalStoreを基盤とする、Angular 18以降向けの現代的な国際化ツールキット。`@ngx‑translate/core`とTranslocoの代替としてゼロから構築されたリアクティブな実装で、コンポーネント内ではRxJSを使わない。
* [ngx-atomic-i18n](https://github.com/viacharles/ngx-atomic-i18n) - 遅延読み込みを備えたAngular翻訳ライブラリ。
* [ngx-bidi](https://github.com/ystolyarchuk/ngx-bidi) - テキストのLTR・RTL方向を自動または手動で制御するAngularライブラリ。ディレクティブ、`NgxBidiService`、SCSSミックスインを備え、モジュールとスタンドアロンの両方に対応する。
* [ngx-directo](https://github.com/ahmaed0hakam/ngx-directo) - Angular 18以降向けの、シグナルを基盤とするライブラリ。RTL・LTR方向の制御、アラビア語へのローカライズ、Google Fontの管理を行う。
* [ngx-easy-i18n-js](https://github.com/gabrie-allaigre/ngx-easy-i18n-js) - 簡単に使えるAngular国際化（i18n）ライブラリ。
* [ngx-g11n](https://github.com/DSI-HUG/ngx-g11n) - アプリケーションの国際化とローカライズを支援するAngularヘルパー。
* [ngx-i18n-extract-regex-cli](https://github.com/Celtian/ngx-i18n-extract-regex-cli) - 正規表現でAngularアプリケーションから翻訳を抽出するツール。
* [ngx-i18n-tools](https://github.com/Ascor8522/ngx-i18n-tools) - Angularアプリケーションの翻訳ツール群。Excel・XLIFFコンバーターの[ngx-xlf-xlsx](https://github.com/Ascor8522/ngx-i18n-tools/tree/master/ngx-xlf-xlsx)を含む。
* [ngx-localized-router](https://github.com/odomanskyi/ngx-localized-router) - URLに言語を示すセグメントを追加し、アプリケーションのルートをローカライズする軽量なAngularライブラリ。
* [ngx-runtime-i18n](https://github.com/AshwinSathian/ngx-runtime-i18n) - Angularの実行時国際化ライブラリ。シグナルを中心に設計され、SSRに対応し、中核部分は特定のフレームワークに依存しない。
* [ngx-signal-translate](https://github.com/adamcsk1/ngx-signal-translate) - シグナルで動作する翻訳サービス。
* [ngx-tolgee](https://github.com/tolgee/tolgee-js/tree/main/packages/ngx/projects/ngx-tolgee) - 開発中のAngularアプリケーション内で直接翻訳できる、ウェブベースのローカライズツール。
* [ngx-translate](https://github.com/ngx-translate/core) - Angular国際化（i18n）ライブラリ。
* [@OGS-GmbH/ngx-translate](https://github.com/OGS-GmbH/ngx-translate) - RESTを使うセットアップ、動的な言語切り替え、柔軟な翻訳管理を備えた、軽量なAngular国際化ライブラリ。
* [ngx-translate-cut](https://github.com/bartholomej/ngx-translate-cut) - 翻訳を切り詰めるAngularパイプ。`@ngx-translate`用のプラグイン。
* [ngx-translate-lint](https://github.com/romanrostislavovich/ngx-translate-lint) - `ngx-translate`のキーを検査するシンプルなCLIツール群。
* [ngx-translate-messageformat-compiler](https://github.com/lephyrus/ngx-translate-messageformat-compiler) - `ngx-translate`用コンパイラー。[messageformat.js](https://github.com/messageformat/messageformat)を使って、複数形と性別を扱うICU構文の翻訳をコンパイルする。
* [ngx-translate-module-loader](https://github.com/larscom/ngx-translate-module-loader) - 幅広い設定項目を備えた、柔軟な`@ngx-translate/core`用翻訳ローダー。
* [ngx-translate-multi-http-loader](https://github.com/rbalet/ngx-translate-multi-http-loader) - HTTP呼び出しで翻訳を読み込むngx-translate用ローダー。
* [ngx-translate-phraseapp](https://github.com/phrase/ngx-translate-phraseapp) - Angularアプリケーションで[Phrase Strings In-Context Editor](https://support.phrase.com/hc/articles/5784095916188-In-Context-Editor-Strings)を`ngx-translate`と連携させる公式ライブラリ。
* [ngx-translate-routes](https://github.com/darioegb/ngx-translate-routes) - タイトルとルートのパスを翻訳するサービス。
* [ngx-translate-toolkit](https://github.com/robmanganelly/ngx-translate-toolkit) - `@ngx-translate/core`を拡張し、大規模プロジェクトの翻訳管理を簡潔にするAngularライブラリ。
* [ngx-translate-version](https://github.com/Celtian/ngx-translate-version) - 言語ファイルにバージョン情報を付けるAngularモジュール。
* [ruci](https://github.com/njirolu/ruci) - `ngx-translate`を使うAngularプロジェクトの国際化の検証を簡潔にするCLIツール。
* [runtime-localizer](https://forge.deejayy.hu/angular-packages/runtime-localizer) - Angular用の実行時ローカライズツール。
* [rust-ngx-translate-lint](https://github.com/hafnerpw/rust-ngx-translate-lint) - 性能を改善するための、`ngx-translate-lint`のRust移植版。
* [signal-translate](https://github.com/NGneers/signal-translate) - 中核部分でシグナルを利用する翻訳サービス。
* [Transifex](https://github.com/transifex/transifex-javascript/tree/master/packages/angular/projects/tx-native-angular-sdk) - [Transifexのライブラリ拡張](https://www.npmjs.com/package/@transifex/angular)でAngularコンポーネントを簡単にローカライズする機能。[Transifex Native JavaScript SDK](https://developers.transifex.com/docs/javascript-sdk)の機能を拡張する。
* [TransLatte](https://github.com/Marbulinek/TransLatte) - Lingva APIを使って翻訳用JSONファイルを生成するCLIツール。
* [transloco](https://github.com/jsverse/transloco) - Angular国際化（i18n）ライブラリ。
* [transloco-keys-manager](https://github.com/jsverse/transloco/tree/master/libs/transloco-keys-manager) - Translocoを使うプロジェクトから、翻訳可能なキーを抽出するツール。
* [xlf-sync](https://github.com/atheodosiou/xlf-sync) - AngularのXLIFF（1.2と2.0）ロケールファイルを同期するCLIツール。

### <a id="linting"></a>Lint

* [@ni/javascript-styleguide](https://github.com/ni/javascript-styleguide) - NIによる、ESLint用のJavaScript・TypeScriptのlintルール。
* [@yoo-digital/eslint-plugin-angular](https://github.com/yoo-digital/eslint-plugin-angular) - Angular用の独自lintルール。
* [angular-eslint](https://github.com/angular-eslint/angular-eslint) - ESLintでAngularプロジェクトを検査するための各種ツールをまとめたモノレポ。
* [eslint-config-angular-strict](https://github.com/Jbz797/eslint-config-angular-strict) - Angular開発用の厳格なルールを備えた現代的なESLint設定。
* [eslint-config-spartan](https://github.com/glitch452/eslint-config-spartan) - 各種ESLintプラグイン用の個別設定（ミックスイン）を持つ、明確な設計方針に沿ったESLint設定。
* [eslint-plugin-angular-modern](https://github.com/cyrilletuzi/eslint-plugin-angular-modern) - 現代的で安全なAngular開発のためのESLintルール。
* [eslint-plugin-ng-module-sort](https://github.com/ducktordanny/eslint-plugin-ng-module-sort) - AngularとNestJSのモジュール配列を自動的に並べ替え、整理するツール。
* [ngx-html-bridge-markuplint](https://github.com/nagashimam/ngx-html-bridge-markuplint) - Angularテンプレートを逆コンパイルしてHTMLに変換し、Markuplintと連携させるライブラリ。正確なlintと、ソースマップに対応する診断報告を可能にする。
* [eslint-config-neon](https://github.com/iCrawl/eslint-config-neon) - 共有可能なESLint設定。
* [eslint-config-angular](https://github.com/noneforge/eslint-config-angular) - TypeScript対応、コンポーネント・テンプレートのルール、アクセシビリティ、CSSのlintを備えた、Angular ESLint設定。
* [linters](https://github.com/developer239/linters) - ESLint、StyleLintなどのコード品質ツール向けの、非常に厳格な設定集。
* [eslint-plugin-angular-class-ordering](https://github.com/Leritas/eslint-plugin-angular-class-ordering) - Angularクラスのフィールドやメソッドを一貫した順序に保つ、自動修正機能付きのESLintプラグイン。
* [lint-a-lot](https://github.com/JanKru/lint-a-lot) - 現代的なFlat Configを利用する、Angularプロジェクト向けの設計方針を定めたESLint・Stylelint設定。
* [neighbor](https://github.com/a11yfred/neighbor) - マークアップ、CSS、文章のアクセシビリティの問題を、リリース前に検出するツール。

### <a id="networking"></a>ネットワーク

* [angular-http-server](https://github.com/simonh1000/angular-http-server) - シングルページアプリケーション（SPA）向けのシンプルなHTTPサーバー。
* [ngx-device-detector](https://github.com/AhsanAyaz/ngx-device-detector) - デバイス、OS、ブラウザーの詳細を検出する、Angular 7以降向けのライブラリ。
* [ngx-offline-indicator](https://github.com/thdang1009/ngx-offline-indicator) - Angularアプリケーション内でインターネット接続の状態をユーザーへ通知する、シンプルでカスタマイズ可能な機能。

### <a id="performance"></a>性能

* [angular-rust-compiler](https://github.com/truonglvos/angular-rust-compiler) - Rust製の高性能Angular AOTコンパイラー。Angularのコンポーネントとディレクティブを完全に静的コンパイルする。
* [detective](https://github.com/angular-architects/detective) - アーキテクチャのレベルでコードを詳しく調査し、コードベース内の隠れたパターンを明らかにするツール。
* [esbuild Bundle Size Analyzer](https://esbuild.github.io/analyze/) - esbuildバンドルの内容を可視化するツール。
* [hawkeye](https://github.com/angular-experts-io/hawkeye) - JavaScriptバンドルを可視化・最適化し、性能に影響するモジュール、依存関係、アセットを明らかにするツール。
* [microwave](https://github.com/jscutlery/devkit/tree/main/packages/microwave) - Angularの変更検知を簡単に最適化するツール。
* [ng-event-plugins](https://github.com/taiga-family/ng-event-plugins) - 性能に注意が必要なイベントに対し、変更検知サイクルを最適化する小さなライブラリ。
* [ng-queuex](https://github.com/dagnygus/ng-queuex) - Reactに似たスケジューラーと、細かな変更検知を行うシグナル駆動ディレクティブを備えた、実験的なAngularエコシステム。
* [ng-reactive-lint](https://github.com/Shrinivassab/ng-reactive-lint) - シグナルとRxJSの最適なリアクティブ処理のパターンを適用する、Angular専用リンター。
* [ngx-idle-monitor](https://github.com/giorgi1441/ngx-idle-monitor) - ユーザーの操作を追跡し、セッションのタイムアウトを管理し、タブ間でアイドル状態を同期する、軽量なAngularサービス。
* [ngx-network-monitor](https://github.com/MadeByRaymond/ngx-network-monitor) - オンライン・オフライン、接続品質（2G・3G・4G・5G）、pingの遅延を監視する、軽量なAngularサービス。
* [ngx-performance-diagnostics](https://github.com/maciekv/ngx-performance-diagnostics) - 設定なしで、Angularアプリケーションの性能上のボトルネック、過剰な変更検知サイクル、メモリーリークを検出するツール。
* [ngx-script-optimizer](https://github.com/Mohid123/ngx-script-optimizer) - サードパーティースクリプトの処理を改善する、軽量なAngularライブラリ。
* [ngx-unused](https://github.com/wgrabowski/ngx-unused) - コードベース内で宣言されているが使われていないAngularクラスを見つけるツール。
* [ngx-worker-bridge](https://github.com/yashwantyashu/worker-bridge) - AngularとReactからWeb Workers（専用・共有）を、通常のメソッド呼び出しのように扱う、軽量なリアクティブ連携機能。定型コードを必要としない。
* [rere-benchmark](https://github.com/NullVoxPopuli/rere-benchmark) - フロントエンドフレームワーク間で、リアクティブ処理と描画の性能を評価するベンチマーク。
* [sonda](https://github.com/filipsobol/sonda) - JavaScriptとCSSの汎用的な可視化・分析ツール。

### <a id="runtime"></a>ランタイム

* [angular-compile](https://github.com/patrikx3/angular-compile) - 文字列をAngularコンポーネントに変換する、Angularの動的コンパイル機能。
* [deepequalspure](https://github.com/puckowski/deepequalspure) - Angularプロジェクト向けの、JavaScriptオブジェクトの深い等価比較サービス。
* [lbx-change-sets](https://github.com/Service-Soft/lbx-change-sets) - 拡張可能な基底リポジトリを使って、エンティティの変更を自動的に追跡するツール。
* [ng-noop](https://github.com/joeskeen/ng-noop) - 独自のランタイム、CLI、サーバー、実験的なレンダラー向けの、DOMを使わない最小限のAngularプラットフォーム。
* [ngx-api-mimic](https://github.com/mateuszbilicz/ngx-api-mimic) - AngularのHTTPインターセプターを使い、データのモック化と仮のAPIのシミュレーションを行うライブラリ。
* [ngx-compare-object](https://github.com/RzoDev/ngx-compare-object) - 元のオブジェクトと変更後のオブジェクトを比較するAngularユーティリティ。
* [ngx-json-reader](https://github.com/Verbalman/ngx-json-reader) - 複数URLの比較と差分表示を備えた、Angular 17以降向けのJSONリーダー・エディター。
* [runtime-config-loader](https://github.com/pjlamb12/runtime-config-loader) - 実行時設定用のJSONファイルを簡単に読み込むAngularライブラリ。
* [worker-bridge](https://github.com/hardcopycortex461/worker-bridge/tree/master) - 簡潔なリアクティブメソッドで、AngularとReactからWeb Workersを利用する連携機能。定型コードを必要としない。

### SEO

* [@davidlj95/ngx-meta](https://ngx-meta.dev) - Angularサイトのメタデータ（メタタグ、Open Graph、X Cards、JSON-LD）を素早く設定する、SSR対応のツール。
* [ngx-seo](https://github.com/samvloeberghs/kwerri-oss/tree/main) - samvloeberghs.beとngx-seoからなるKwerri OSS。
* [Angular React SEO](https://github.com/ganatan/angular-react-seo) - AngularとReactのSEO（検索エンジン最適化）の実装例。
* [unhead](https://www.npmjs.com/package/@unhead/angular) - Angularアプリケーション向けの、フルスタックの`<head>`管理機能。

### <a id="styling"></a>スタイリング

* [Angular-Material-Tailwind-Integration](https://github.com/adandedjanstephane-git/Angular-Material-Tailwind-Integration) - Material Design SystemのトークンをTailwind CSSユーティリティクラスに対応付ける、安定したCSSカスタムプロパティ群。テーマを設定できる。
* [element-identifier](https://github.com/jooherrera/element-identifier) - DOM要素を指定する、信頼性の高い区別可能なCSSセレクターを作成するツール。ウェブコンポーネントで視覚的な確認と選択を行える。
* [Material Theme Builder](https://www.materialthemebuilder.com/) - アプリケーションのAngular Materialテーマをリアルタイムで設定するツール。
* [ngx-angora-css](https://github.com/LynxPardelle/ngx-angora-css) - ページ読み込み時にスタイルを動的に生成する、JavaScriptを基盤とするCSSフレームワーク。
* [ngx-classed](https://github.com/lukonik/ngx-classed) - 状態に応じてクラスを動的に追加・削除するライブラリ。
* [ngx-css](https://github.com/squidit/ngx-css) - [Squid CSS](https://github.com/squidit/css)をAngularで扱う抽象化層。
* [ngx-mq](https://github.com/martsinlabs/ngx-mq) - シグナルとネイティブの[matchMedia API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)でメディアクエリを管理する宣言的なライブラリ。Tailwind、Bootstrap、Angular Material用のブレークポイントのプリセットを内蔵する。
* [ngx-responsive-signals](https://github.com/irvrodflo/ngx-responsive-signals) - Angular向けの、シグナルを基盤とするレスポンシブなブレークポイント。
* [ngx-theme-stack](https://github.com/WanderleeDev/ngx-theme-stack) - Angularシグナルでダークモード、ライトモード、独自のテーマを管理する、現代的でSSR対応のAngularライブラリ。
* [panda](https://github.com/chakra-ui/panda) - CSS-in-JSフレームワークのPandaをAngularで簡単に利用するための、専用の[連携機能](https://panda-css.com/docs/docs/installation/angular)。
* [prime-ng-theme-fe](https://github.com/mkccl/prime-ng-theme-fe) - PrimeNGのテーマを視覚的に設計するツール。
* [Super JSS](https://github.com/rsantoyo-dev/super-jss-workspace) - Super JavaScript Stylesheets。ブレークポイントとテーマを備えたアトミックCSSを生成する、小さなAngularランタイムライブラリ。
* [Theme-Kit](https://github.com/M1tsumi/Theme-Kit) - 色、タイポグラフィ、余白を一元管理する統一的なデザイントークンSDK。React、Vue、Angular、任意のJavaScriptプロジェクトで一貫して利用できる。
* [tokiforge](https://github.com/TokiForge/tokiforge) - React、Vue、Angular、Svelte、素のJavaScript向けの、特定のフレームワークに依存しないデザイントークンエンジン。
* [ukit-css](https://github.com/vcalderondev/ukit-css) - JIT方式のユーティリティファーストCSSエンジン。React、Vue、Angular、Svelte、Next.js、Astro、プレーンHTMLなどのフロントエンドで、Tailwindのように必要に応じてクラスを生成する。

## <a id="security-and-authentication"></a>セキュリティと認証

### <a id="authentication"></a>認証

* [angular-auth-oidc-client](https://github.com/damienbod/angular-auth-oidc-client) - OpenID Connect、PKCE付きOAuthコードフロー、リフレッシュトークン、インプリシットフロー用のnpmパッケージ。
* [angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc) - AngularでOAuth 2とOpenID Connect（OIDC）を利用するための機能。
* [angular-authentication](https://github.com/nikosanif/angular-authentication) - ユーザー認証と認可のフローに関するベストプラクティスを示すAngularアプリケーション。
* [angularfire](https://github.com/angular/angularfire) - AngularとFirebaseの連携機能。
* [angularx-social-login](https://github.com/abacritt/angularx-social-login) - Angular 17向けのソーシャルログイン・認証モジュール。
* [angular2-jwt](https://github.com/auth0/angular2-jwt) - AngularアプリケーションでのJWT処理を支援するヘルパーライブラリ。
* [appwrite](https://github.com/appwrite/appwrite) - [Angularアプリケーション](https://appwrite.io/docs/quick-starts/angular)を[Appwrite](https://appwrite.io/)と連携させ、認証、データベース、ストレージ、関数などを利用する機能。
* [auth0-angular](https://github.com/auth0/auth0-angular) - Angularのシングルページアプリケーション向けAuth0 SDK。
* [authon-sdk](https://github.com/mikusnuz/authon-sdk/tree/main/packages/angular) - [Authon](https://authon.dev/)のAngular SDK。サービス、ガード、インターセプターを提供する。
* [authress-angular](https://github.com/mikepattyn/authress-angular) - [Authress](https://authress.io/)のLoginClientを簡単に設定・登録するモジュールだけを含むパッケージ。
* [@badisi/ngx-auth](https://github.com/Badisi/auth-js/tree/main/libs/ngx-auth) - Angularを基盤とするデスクトップ・モバイルアプリケーション向けの認証・認可機能。
* [corbado](https://www.corbado.com/#signup-init) - CorbadoをAngularと[連携](https://docs.corbado.com/corbado-complete/frontend-integration/angular)させ、パスキー認証を利用する機能。
* [fingerprint](https://dev.fingerprint.com/docs/angular) - FingerprintをAngularアプリケーションに簡単に組み込むためのFingerprint Angular SDK。
* [frontegg-angular](https://github.com/frontegg/frontegg-angular) - ホスト型ログインに対応するAngular向けSDK。[クイックスタート](https://developers.frontegg.com/ciam/sdks/frontend/angular/hosted-login)を参照。
* [FusionAuth Angular SDK](https://fusionauth.io/docs/sdks/angular-sdk) - ログイン・登録、ログアウト、リフレッシュトークンの処理を行うAngular SDK。
* [hanko](https://github.com/teamhanko/hanko) - [クイックスタート](https://docs.hanko.io/quickstarts/frontend/angular)に沿って、オープンソースの認証・ユーザー管理ソリューション[Hanko](https://www.hanko.io/)をAngularアプリケーションへ組み込むための案内。
* [keycloak-angular](https://github.com/mauriciovigolo/keycloak-angular) - AngularアプリケーションでKeycloakを簡単に設定する機能。
* [lbx-jwt](https://github.com/Service-Soft/lbx-jwt) - LoopBackアプリケーション向けのJWT認証。トークン内へのロールの保存と更新処理を行い、再利用の検出機能を内蔵する。
* [Logto](https://logto.io/) - オープンソースのAuth0代替ツール（OIDC・OAuth2・SAML）。Angularの[クイックスタート](https://docs.logto.io/quick-starts/angular#prerequisites)も提供する。
* [Melody Auth](https://github.com/ValueMelody/melody-auth) - 状態、リダイレクト、トークンの処理を自動化し、AngularとMelody Authの連携を容易にする[SDK](https://www.npmjs.com/package/@melody-auth/angular)。
* [MojoAuth](https://mojoauth.com/) - パスキーを簡単に[組み込む](https://docs.mojoauth.com/guides/angular)ための機能。
* [msal-angular](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-angular) - [Azure AD](https://docs.microsoft.com/azure/active-directory/develop/v2-overview)、Microsoftアカウント、[Azure AD B2C](https://docs.microsoft.com/azure/active-directory-b2c/active-directory-b2c-overview#identity-providers)経由のソーシャルプロバイダーで、Angularアプリケーションのユーザーを認証するMSAL。Microsoftの[Graph](https://graph.microsoft.io)などのサービス用トークンも取得できる。
* [ng-awesome-node-auth](https://github.com/nik2208/ng-awesome-node-auth) - [awesome-node-auth](https://github.com/nik2208/awesome-node-auth)用のAngularインターセプターとガード。
* [ngx-auth-client](https://github.com/ismailza/ngx-auth-client) - シグナルによる状態管理、関数型のルート保護、Keycloakとの連携を備えたAngular認証層。
* [ngx-better-auth](https://github.com/thomasorgeval/ngx-better-auth) - Angular 20以降向けの[Better Auth](https://github.com/better-auth/better-auth)ラッパー。シグナルによるリアクティブなセッション処理、Observableを使う明確な依存性注入プロバイダー設定、現代的なガードを提供する。
* [ngx-cognito-auth](https://github.com/SamsonGross/ngx-cognito-auth) - PKCE付きOAuth 2.0認可コードフローでAWS Cognito認証を行う、Angular 21以降向けのライブラリ。
* [ngxfire](https://github.com/teve-no/ngxfire) - Zone.jsを使わないAngularFireの代替。
* [ngx-oauth](https://github.com/Fl0r14n/ngx-oauth) - Angular 22向けの、Zone.jsを使わずシグナルを基盤とするOAuth 2.1ライブラリ。
* [ngx-webauthn](https://github.com/JonnyHeavey/ngx-webauthn) - ネイティブのWebAuthn APIを型安全かつ簡潔に扱う抽象化を提供するAngularライブラリ。標準的な型への対応を内蔵し、一般的な用途向けのプリセットを任意で利用できる。
* [omni-auth](https://github.com/ngx-addons/omni-auth) - 認証フロー、ガード、エラー処理の中核機能を提供するAngular認証ライブラリ。
* [otp-angular](https://github.com/subha-patra/otp-angular) - Angular 20以降向けの、軽量で高度にカスタマイズ可能なOTP（ワンタイムパスワード）入力コンポーネント。依存パッケージを必要としない。
* [passlock](https://github.com/passlock-dev/passlock) - Angularなどのフレームワーク向けの、手間の少ないパスキー認証。
* [@serhiisol/ngx-auth](https://github.com/serhiisol/ngx-auth) - Angular 20以降向けの認証モジュール。
* [Supabase](https://supabase.com/docs/guides/getting-started/tutorials/with-angular) - Angularでユーザー管理アプリケーションを構築する教材。
* [SuperTokens](https://supertokens.com) - [Angular](https://supertokens.com/docs/quickstart/frontend-setup)アプリケーションでSuperTokens認証を使うための設定案内。
* [witspry-auth-ng-client](https://github.com/satya-jugran/witspry-auth-ng-client) - PKCE（Proof Key for Code Exchange）に対応したOAuth2認証を提供する、Angularライブラリ。
* [zenuxs-oauth](https://github.com/developer-rs5/zenuxs-oauth) - 現代的なアプリケーション向けの、汎用OAuth 2.0・PKCEクライアント。
* [zitadel](https://zitadel.com/docs/examples/login/angular) - アプリケーションの安全な認証管理を提供するツール。簡単に使えるAPIとプログラム可能なワークフローを備え、規模の拡大に合わせてカスタマイズできる。

### <a id="payments"></a>決済

* [adyen-angular-online-payments](https://github.com/adyen-examples/adyen-angular-online-payments) - AngularとExpressを使うウェブサイトで、カード、ウォレット、地域で主要な決済方法による支払いを受け付ける機能。
* [angular-spotflow-checkout](https://github.com/Spotflow-One/angular-spotflow-checkout) - 簡潔なチェックアウト操作で支払いを行える[Spotflow](https://www.spotflow.one/)のAngular SDK。
* [google-pay-button](https://github.com/google-pay/google-pay-button) - React、Angular、カスタム要素向けのGoogle Payボタン。
* [ngx-hyperpay](https://github.com/MagdyAbouelnasr/ngx-hyperpay) - [HyperPay](https://www.hyperpay.com/)の決済ゲートウェイを簡単に組み込むAngularライブラリ。
* [ngx-mp-payments](https://github.com/JosemaCeballos/ngx-mp-payments) - [Mercado Pago](https://www.mercadopago.com.ar/)と連携するAngularライブラリ。
* [ngx-stripe](https://github.com/richnologies/ngx-stripe) - StripeJSと[Stripe Elements](https://stripe.com/docs/stripe-js)のAngularバインディング。
* [ngx-supabase-stripe](https://github.com/dotted-labs/ngx-supabase-stripe) - SupabaseとStripeによる決済・サブスクリプション用の、すぐに使えるAngularコンポーネント。
* [solidgate](https://github.com/solidgate-tech/angular-sdk) - Angular SDKでSolidgateの決済フォームを追加する機能。

### <a id="role-based-access-control"></a>ロールベースアクセス制御

* [casl-angular](https://github.com/stalniy/casl/tree/master/packages/casl-angular) - クライアントとサーバーで共通に使える権限管理ライブラリ[CASL](https://github.com/stalniy/casl)を、Angularと連携させるモジュール。
* [nblocks](https://www.nblocks.dev/) - 認証、決済、サブスクリプション、機能、ロールを円滑に管理するためのコントロールセンター。
* [ngx-can-i](https://github.com/kopy011/ngx-can-i) - Angular開発者の権限処理を支援するパッケージ。
* [ngx-permissions](https://github.com/AlexKhymenko/ngx-permissions) - Angularアプリケーション向けの、権限とロールに基づくアクセス制御。AOTと遅延読み込みモジュールに対応する。
* [ngx-role-accessor](https://github.com/IroshanRathnayake/ngx-role-accessor) - 企業向けのAngularロールベースアクセス制御（RBAC）ライブラリ。
* [ngx-signal-permissions](https://github.com/levart/ngx-signal-permissions) - TypeScriptに全面的に対応し、シグナルを基盤とする現代的なAngularライブラリ。権限とロールを管理する。
* [ngx-smart-permissions](https://github.com/rami-sheikha-dev/ngx-smart-permissions) - ロールと権限に基づくアクセス制御を行う、軽量なAngularライブラリ。スタンドアロンコンポーネントとNgModulesに対応する。
* [ngxsmk-gatekeeper](https://github.com/NGXSMK/ngxsmk-gatekeeper) - Angular向けの、軽量で開発者が使いやすいミドルウェアエンジン。組み合わせ可能な1つの設定で、ルートとHTTPリクエストを保護する。
* [permit](https://www.permit.io/) - [Angular](https://www.permit.io/blog/how-to-implement-role-based-access-control-rbac-in-angular)で利用できる、認可をサービスとして提供するソリューション。
* [ng-ability](https://github.com/topaxi/ng-ability) - Angularでアクセス制御リストを定義する機能。
* [urbac](https://github.com/kasoir/urbac) - 数分で安全な多段階のアクセス制御システムを構築するための、機能を備えた本番利用向けのひな型。
* [rulegate](https://github.com/fotbiler-lab/rulegate) - `.NET`とAngular向けの、ローカルでの利用を中心とし、特定のプロバイダーに依存しない認可機能。

### <a id="security-best-practices"></a>セキュリティのベストプラクティス

* [Angularの公式セキュリティ資料](https://angular.dev/best-practices/security) - セキュリティのベストプラクティス。
* [Aikido](https://www.aikido.dev/) - コード、クラウド、実行環境を1つのシステムで保護し、脆弱性を自動的に検出・修正するツール。
* [GitHub Code Scanning](https://docs.github.com/en/code-security/concepts/code-scanning) - GitHubのコードスキャン機能の中核的な概念を学ぶ資料。
* [GitHub Skills](https://skills.github.com/) - コードのセキュリティと分析に関する、手順付きの対話型チュートリアル。
* [HackTricks](https://book.hacktricks.xyz/network-services-pentesting/pentesting-web/angular) - Angularのセキュリティチェックリスト。
* [SafeDep](https://safedep.io/) - オープンソースコードの脆弱性とマルウェアを継続的に検査し、セキュリティチームがOSSから引き継ぐリスクを事前に軽減するためのツール。
* [Snyk](https://snyk.io/) - 開発ツール、ワークフロー、自動化パイプラインに直接組み込む、開発者向けセキュリティプラットフォーム。
* [Socket](https://socket.dev/) - 脆弱な依存関係と悪意のある依存関係の両方からコードを保護する、開発者向けセキュリティプラットフォーム。
* [supply-chain-inspector](https://github.com/DenysVuika/supply-chain-inspector) - npm依存関係のサプライチェーンセキュリティを分析する、単体で動作し依存パッケージを必要としないNode.jsスクリプト。
* [Vulert](https://vulert.com) - コードにアクセスせず、オープンソースの依存関係の脆弱性を検出してソフトウェアを保護するツール。JS、PHP、Java、Pythonなどに対応する。

## <a id="state-management"></a>状態管理

### NgRx

* [公式サイト](https://ngrx.io/)
* [公式GitHubリポジトリ](https://github.com/ngrx/platform) - Angular向けのリアクティブな状態管理。
* [ngrx-course](https://github.com/angular-university/ngrx-course) - Angular Universityの完全ガイド。
* [ngrx-store-localstorage](https://github.com/btroncone/ngrx-store-localstorage) - `@ngrx/store`とローカルストレージを簡単に同期する機能。
* [ngrx-toolkit](https://github.com/angular-architects/ngrx-toolkit) - NgRx Signal Storeの各種拡張機能。
* [ngrx-traits](https://github.com/gabrielguerrero/ngrx-traits) - アプリケーション全体で、NGRXのアクション、セレクター、エフェクト、リデューサーの集合を組み合わせて再利用するライブラリ。
* [ngrx-addons](https://github.com/Michsior14/ngrx-addons) - 状態の永続化などのNgRxアドオン集。
* [ngrx-store-storagesync](https://github.com/larscom/ngrx-store-storagesync) - localStorage・sessionStorageと`@ngrx/store`間の、幅広い設定項目を備えた状態同期ライブラリ。
* [ngrx-wieder](https://github.com/nilsmehlhorn/ngrx-wieder) - NgRxとImmer.jsを使うAngular向けの、軽量な取り消し・やり直し機能。
* [ngrx-immer](https://github.com/timdeschryver/ngrx-immer) - NgRxのcreateReducer、on、ComponentStoreを包むImmerラッパー。
* [ngrx-rtk-query](https://github.com/SaulMoro/ngrx-rtk-query) - フックを使うRTK QueryをAngularアプリケーションで動作させる機能。
* [angular-ngrx-nx-realworld-example-app](https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app) - Angular 21、NgRx 21、Nx 22で構築された実践的なアプリケーション。
* [ngx-view-state](https://github.com/yurakhomitsky/ngx-view-state) - NgRxで読み込み中・成功・エラーの状態を扱うライブラリ。
* [store-service](https://github.com/ngxp/store-service) - AngularコンポーネントとNgRxストアの間に抽象化層・ファサードを追加する機能。
* [ngx-signal-store-query](https://github.com/k3nsei/ngx-signal-store-query) - [Angular Query](https://tanstack.com/query/latest/docs/framework/angular/overview)と連携するSignal Storeの機能。
* [SmartNgRX](https://github.com/DaveMBush/SmartNgRX) - 既存のNgRxコードを利用・サポートしながら、NgRxを抽象化してCRUD操作を簡潔にするライブラリ。
* [ngrx-hateoas](https://github.com/angular-architects/ngrx-hateoas) - HATEOASの方式に従い、NgRx Signal StoreにハイパーメディアJSONを導入するライブラリ。
* [ngrx-http-tracking](https://github.com/acandylevey/ngrx-http-tracking) - 既存のストアと連携し、定型コードを減らして、読み込み中・成功・エラーなどのHTTPリクエスト状態の扱いを簡潔にするNgRxライブラリ。
* [ngrx-set](https://github.com/parloti/ngrx-set) - 成功・失敗・中止があり得る非同期リクエストのアクション作成を簡潔にする機能。
* [easy-ngrx-distinct-selector](https://github.com/NGneers/easy-ngrx-distinct-selector) - 引数と結果値の等価比較関数を使う`@ngrx/store`のセレクターを、簡単に作成する関数群。
* [ngrx-store-wrapper](https://github.com/himanshuarora111/ngrx-store-wrapper) - セッションストレージとローカルストレージへの対応を内蔵する、AngularのNgRx状態管理ライブラリ。手動のアクションやリデューサーを必要としない。
* [ngx-rehydrate](https://github.com/solidexpert-ltd/ngx-rehydrate) - Angular SSRアプリケーション向けのNgRx状態の復元ライブラリ。
* [ngrx-offline](https://github.com/poodlelab/ngrx-offline) - NgRxを使うAngularアプリケーション向けの、オフラインでの永続的なミューテーション処理と楽観的更新を扱う機能。
* [ngrx-graph](https://github.com/ammarnajjar/ngrx-graph) - JSONおよびDOT・SVGの依存関係グラフを生成するCLIスキャナー。

### NGXS

* [公式サイト](https://www.ngxs.io/)
* [公式GitHubリポジトリ](https://github.com/ngxs/store) - 最小限の定型コードと保守作業で、状態管理を簡潔にするNGXS。
* [action-lifecycle-hooks](https://github.com/ngxs-labs/action-lifecycle-hooks) - アクションを手動で接続せず、成功やエラーなどのアクションの結果に応じてコードを簡単に実行する機能。
* [actions-executing](https://github.com/ngxs-labs/actions-executing) - アクションの実行状況を簡単に把握し、UI要素やコードの制御フローを制御するプラグイン。
* [emitter](https://github.com/ngxs-labs/emitter) - アクションに縛られずに扱うための、固定原文で新しいとされるパターン。
* [firestore-plugin](https://github.com/ngxs-labs/firestore-plugin) - NGXS用のFirestoreプラグイン。
* [ngxs-postmessage-plugin](https://github.com/nelsongraa8/ngxs-postmessage-plugin) - `postMessage`を使い、ウィンドウ間やマイクロフロントエンド間で状態を同期するNGXSプラグイン。
* [ngxs-synchronizers](https://github.com/lVlyke/ngxs-synchronizers) - NGXSを基盤とするアプリケーションの状態を、外部データソースと簡単に同期する機能。

### <a id="other-state-libraries"></a>その他の状態管理ライブラリ

* [ng-simple-state](https://github.com/nigrosimone/ng-simple-state) - サービスとRxJSだけを使う、シンプルなAngularの状態管理。
* [exome](https://github.com/Marcisbee/exome) - 深く入れ子になった状態を扱う、シンプルなプロキシ方式の状態マネージャー。AngularシグナルとRxJSに対応する。
* [TanStack Query](https://github.com/TanStack/query) - ウェブ向けの非同期状態管理、サーバー状態のユーティリティ、データ取得機能。
* [state-adapt](https://github.com/state-adapt/state-adapt) - 宣言的で、段階的に導入できる状態管理ライブラリ。
* [mini-rx-store](https://github.com/spierala/mini-rx-store) - リアクティブな状態管理プラットフォーム。
* [ngx-collection](https://github.com/e-oz/ngx-collection) - Angular向けのコレクション状態管理サービス。
* [xstate](https://github.com/statelyai/xstate) - 複雑なアプリケーションのロジック向けの、アクター方式の状態管理とオーケストレーション。
* [signalstory](https://github.com/zuriscript/signalstory) - Angularシグナルを基盤とする状態管理ライブラリ。シンプルなリポジトリ、疎結合のコマンド、副作用、イベント駆動アーキテクチャによるストア間通信を備える。
* [ngx-sherlock](https://github.com/politie/ngx-sherlock) - 分散型のリアクティブ状態管理ライブラリ[@politie/sherlock](https://github.com/politie/sherlock)と組み合わせて使う、Angular用ツールライブラリ。
* [tansu](https://github.com/AmadeusITGroup/tansu) - [Angularエコシステム](https://amadeusitgroup.github.io/tansu/#md:tansu-works-well-with-the-angular-ecosystem)と組み合わせやすい、軽量なプッシュ方式の状態管理ライブラリ。
* [@tethys/store](https://github.com/worktile/store) - 小さなAngular状態管理ライブラリ。
* [ngx-crud](https://github.com/henryruhs/ngx-crud) - 処理の中止、キャッシュ、監視を簡単に行えるAngularのCRUDサービス。
* [@ng-state/store](https://github.com/ng-state/store) - NgRxを参考に設計されたAngularアプリケーション向けの、入れ子の状態管理ライブラリ。RxJSとImmerまたはImmutableJsを利用する。
* [ng-simple-state-management](https://github.com/LionMarc/ng-simple-state-management) - Angularアプリケーション向けのシンプルな状態管理の実装。
* [ngx-statewise](https://github.com/Pierre-MarieMarchio/ngx-statewise) - NgRxやNGXSの簡潔な代替となる状態管理ライブラリ。
* [signaltree](https://github.com/JBorgia/signaltree) - シグナルを基盤とする、型安全かつモジュール化されたAngular状態管理機能。
* [ngx-simple-signal-store](https://github.com/adamcsk1/ngx-simple-signal-store) - 読み取り専用インターフェースを持つシグナルストアを簡単に作成する機能。
* [angulator](https://github.com/angulator-dev/angulator) - リクエスト・レスポンスと通知・ハンドラーのパターンで、アプリケーション内の各部分の通信を簡潔にする、軽量なAngularの[Mediator](https://refactoring.guru/design-patterns/mediator)ライブラリ。
* [ngx-query](https://github.com/CoreSyncHub/ngx-query) - サーバー状態、キャッシュ、バックエンドとUI間の同期を管理する、軽量なObservable方式のクエリライブラリ。
* [@tanstack/angular-db](https://github.com/TanStack/db/tree/main/packages/angular-db) - リアクティブなクライアントストアTanStack DB用のAngularフック。バックエンドに依存しないリアルタイムのデータ層で、高速な同期駆動アプリケーションを構築できる。
* [usm](https://github.com/unadlib/usm) - Angularに対応するモジュール式の状態管理ライブラリ。
* [ngx-mxstore](https://github.com/MaxxtonGroup/ngx-mxstore) - ロジックを純粋でテスト可能なメソッドに移し、デコレーターでコンポーネントとストアを接続して、状態管理を簡潔にするライブラリ。
* [ngx-stashr](https://github.com/nulzo/ngx-stashr) - Reactの[Zustand](https://github.com/pmndrs/zustand)を参考に設計された、Angular 21向けの軽量なシグナル駆動状態管理ライブラリ。
* [ngx-event-bus-lib](https://github.com/orelnatan/ngx-event-bus-lib) - アプリケーションのどこからでも強く型付けされたイベントを配信し、宣言的に反応する機能。サービス、依存性注入、プロバイダー、RxJS、シグナル、密な結合を必要としない。
* [rs-x](https://github.com/robert-sanders-software-ontwikkeling/rs-x) - 同期データと非同期データを1つの透過的なモデルに統合するリアクティブエンジン。手動の非同期処理なしで、Angularの細かな自動変更検知を実現する。
* [stateloom](https://github.com/sujeet-pro/stateloom) - シグナル駆動のリアクティブな中核機能を備えた汎用状態管理SDK。Store・Atom・Proxy方式のアダプターと、React・Angularなどのフレームワーク用アダプターを提供する。
* [ngx-state-crafter](https://github.com/irvrodflo/ngx-state-crafter) - 明確で定型コードを必要としないAPIを備えた、軽量なAngularのシグナル駆動状態ライブラリ。
* [coaction](https://github.com/coactionjs/coaction) - 高性能なマルチスレッドのウェブアプリケーションを構築する、効率的で柔軟な状態管理ライブラリ。
* [flurryx](https://github.com/fmflurry/flurryx) - シグナルを中心に設計されたAngular用リアクティブ状態ツールキット。RxJSストリームを、構造化されたキャッシュ対応ストアにつなぐ。
* [ngStato](https://github.com/becher/ngStato) - RxJSの代わりにasync/awaitを使うAngular状態管理。
* [ng-eagleeye.js](https://github.com/webKrafters/ng-eagleeye.js) - 特定のフレームワークに依存しない、ネイティブJavaScriptのイミュータブルな状態マネージャー。変更ストリームを備え、あらゆる環境へ配置できる。
* [ngx-deep-signals](https://github.com/simplesoftsoul/ngx-deep-signals) - Angular用の、深いリアクティブ処理に対応する入れ子の状態管理。呼び出し、セッター、定型コードなしで、任意のオブジェクトをシグナルのグラフに変換する。
* [editate](https://github.com/inokawa/editate) - 実験的で型安全かつ特定のフレームワークに依存しない、小さな（5kB以上）contenteditable状態マネージャー。
* [sdux-vault](https://github.com/sdux-vault/vault) - 特定のフレームワークに依存しない、決定的な状態管理システム。
* [ngx-tosijs](https://github.com/tonioloewald/ngx-tosijs) - Angular用の状態管理。Angularから移行するための選択肢にもなる。
* [ngx-zero](https://github.com/ivan-anchev/ngx-zero) - 汎用同期ソリューション[Rocicorp Zero](https://zero.rocicorp.dev/)のAngularバインディング。シグナルを中心に設計され、Zone.jsを使わない環境に対応する。
* [ng-craft](https://github.com/ng-angular-stack/ng-craft) - 明示的な依存関係とTypeScriptの型推論で、状態、非同期処理、サービス、フォーム、依存性注入、ルートをモデル化する、シグナル方式のAngularツールキット。

## <a id="testing"></a>テスト

### E2E

* [Cypress](https://www.cypress.io/) - AngularのE2Eテストとコンポーネントテスト。
* [cypress-harness](https://github.com/jscutlery/devkit/tree/main/packages/cypress-harness) - コンポーネントテストハーネスでCypressを利用するためのライブラリ。
* [cypress-angular-commands](https://github.com/MohamedSci/cypress-angular-commands) - 現代的なAngularの企業向け・ERPアプリケーション用の、本番利用に対応する再利用可能なCypressカスタムコマンド集。
* [lib-e2e-cypress-for-dummys](https://github.com/GonzaloCarmenado/lib-e2e-cypress-for-dummys) - 画面を閲覧・操作する間に、アプリケーションのテストに必要なCypressコマンドを自動記録するAngularライブラリ。
* [testcafe](https://testcafe.io/) - 使いやすいE2Eテスト用ソリューション。
* [webdriverio](https://github.com/webdriverio/webdriverio) - Node.js向けのブラウザー・モバイル自動化テストフレームワーク。
* [Puppeteer Angular Schematic](https://pptr.dev/guides/ng-schematics) - Angularプロジェクトに[Puppeteerを利用する](https://github.com/puppeteer/puppeteer)E2Eテストを追加する機能。
* [ngx-playwright](https://github.com/bgotink/ngx-playwright) - AngularワークスペースでPlaywrightのE2Eテストを実行するツール群。
* [ngx-playwright-schematics](https://github.com/raknjarasoa/ngx-playwright-schematics) - 本番利用向けのPlaywright E2Eテストの構成を自動設定する、Angular Schematicsパッケージ。
* [playwright-ng-schematics](https://github.com/jfgreffier/playwright-ng-schematics) - AngularプロジェクトにPlaywright Testを追加する機能。
* [playwright-coverage](https://github.com/bgotink/playwright-coverage) - コードへの計測処理の挿入なしに、V8のカバレッジ機能でPlaywrightテストのカバレッジを報告するツール。
* [Cypress to Playwright](https://www.cy2pw.com/) - テストスイートをCypressからPlaywrightへ移行するための資料集。
* [Playwright Chrome Recorder](https://chromewebstore.google.com/detail/playwright-chrome-recorde/bfnbgoehgplaehdceponclakmhlgjlpd) - ChromiumのレコーダータブのデータをPlaywrightテストへ書き出すツール。現代的なPlaywright向けに調整するための出発点になる。
* [playwright-mcp](https://github.com/microsoft/playwright-mcp) - Playwrightでブラウザーの自動操作を行う、Model Context Protocol（MCP）サーバー。
* [twd](https://github.com/BRIKEV/twd) - ブラウザー内のテストランナー。即時のフィードバック、Testing Library対応、Viteによるテストファイルの検出、内蔵APIモックを備える。特定のフレームワークに依存せず、Angularでも簡単に利用できる。

### <a id="component"></a>コンポーネント

* [Angular Testing Library](https://testing-library.com/docs/angular-testing-library/intro/) - DOM Testing Libraryを拡張し、Angularコンポーネントのテストに特化したAPIを提供するライブラリ。
* [@jscutlery/playwright-ct-angular](https://github.com/jscutlery/devkit/tree/main/packages/playwright-ct-angular) - PlaywrightによるAngularコンポーネントテスト。
* [ngx-speculoos](https://github.com/Ninja-Squad/ngx-speculoos) - シンプルで明確なAngularユニットテストを記述する機能。
* [Meticulous AI](https://www.meticulous.ai/) - テストを1つも作成・保守せず、アプリケーションの数千のエッジケースをカバーするツール。
* [Jasmine](https://jasmine.github.io/) - シンプルなJavaScriptテスト。
* [docker-ng-cli-karma](https://github.com/trion-development/docker-ng-cli-karma) - ChromeでKarmaを実行できるAngular用Dockerイメージ。
* [Jest](https://jestjs.io/) - シンプルさを重視するJavaScriptテストフレームワーク。
* [jest-preset-angular](https://github.com/thymikee/jest-preset-angular) - Angularプロジェクト用のJest設定プリセット。
* [jest-preview](https://github.com/nvh95/jest-preview) - Jestテストを簡単にデバッグするツール。
* [jest-marbles](https://github.com/just-jeb/jest-marbles) - Jestでマーブルテストを行うヘルパーライブラリ。
* [jest-codemods](https://github.com/skovhus/jest-codemods) - Jestへ移行するためのCodemod。
* [ts-jest](https://github.com/kulshekhar/ts-jest) - TypeScriptで書かれたプロジェクトをJestでテストするための、ソースマップ対応トランスフォーマー。
* [Vitest](https://vitest.dev/) - Vite向けに設計されたテストフレームワーク。
* [Early AI](https://www.startearly.ai/) - 自動生成され検証済みのユニットテストで、時間の節約、コードカバレッジの改善、品質の確保を支援するEarlyのツール。JestとVitestに対応する。
* [swc-angular](https://github.com/jscutlery/devkit/tree/main/packages/swc-angular) - SWC（Speedy Web Compiler）をJestやVitestと組み合わせて使うためのAngularプリセット集。
* [swc-angular-plugin](https://github.com/jscutlery/devkit/tree/main/packages/swc-angular-plugin) - 高速なJavaScript・TypeScriptコンパイラーのSWC（Speedy Web Compiler）にAngular対応を追加するプラグイン。SWC自体はAngularに対応しないために必要。
* [vitest-browser-angular](https://github.com/vitest-community/vitest-browser-angular) - [Vitest Browser Mode](https://vitest.dev/guide/browser)でAngularコンポーネントを描画するコミュニティパッケージ。
* [@MRinaldi9/vitest-browser-angular](https://github.com/MRinaldi9/vitest-browser-angular) - 公式`vitest-browser-angular`ライブラリの独立したフォーク。元のプロジェクトと共有しない独立した実装を備える。
* [wdio-harness](https://github.com/badisi/wdio-harness) - AngularコンポーネントテストハーネスのWebdriverIO対応。
* [testronaut](https://github.com/testronaut/testronaut) - モックや推測を使わず、出力を視覚的に確認してPlaywrightのAPIでテストを書くための[Testronaut](https://testronaut.github.io/testronaut/)。

### <a id="helpers"></a>ヘルパー

* [Angular Material CDKテストの公式資料](https://material.angular.dev/cdk/testing/overview) - Angularコンポーネントのテストを支援する基盤を提供する`@angular/cdk/testing`。
* [ng-mocks](https://github.com/help-me-mom/ng-mocks) - コンポーネント、ディレクティブ、パイプ、サービスをモック化し、TestBedの設定を支援するAngularテストライブラリ。
* [ng-mocks-sandbox](https://github.com/help-me-mom/ng-mocks-sandbox) - ng-mocksを使うAngularアプリケーションのユニットテストのガイド・実装例を収録するリポジトリ。
* [spectacular](https://github.com/ngworker/ngworker/tree/main/packages/spectacular) - Angularアプリケーションとライブラリのテストハーネスを提供するツール。
* [ngx-page-object-model](https://github.com/FrancescoBorzi/ngx-page-object-model) - Page Object Model（POM）でAngular UIコンポーネントのテストを簡潔にするライブラリ。テストのロジックとDOM操作を分離し、抽象化を改善する。
* [ngtx](https://github.com/Centigrade/ngtx) - Angular Testing Extensions。Angularコンポーネントのテストを簡単にする小さな関数集。
* [ngx-testing-tools](https://github.com/remscodes/ngx-testing-tools) - Angularアプリケーションのテスト用の高水準ユーティリティを提供し、定型コードを減らすツール。
* [stryker-js](https://github.com/stryker-mutator/stryker-js) - JavaScriptなどのミューテーションテスト。
* [msw](https://github.com/mswjs/msw) - ブラウザーとNode.js向けの、REST・GraphQL APIを円滑にモック化するライブラリ。
* [msw-lens](https://github.com/hypertheory-labs/msw-lens) - AIが読み取れるプロジェクト状態のスナップショットを生成するツール。どのモデルも、モックAPI、実行中のシナリオ、文脈を手動の説明なしで理解できるようにする。
* [shallow-render](https://github.com/getsaf/shallow-render) - 浅いレンダリングと簡単なモック化で、Angularのテストを容易にするツール。
* [ngx-testbox](https://github.com/kirill-kolomin/ngx-testbox) - Angularアプリケーションのテスト記述を支援するユーティリティライブラリ。ユニットテスト、統合テスト、E2Eテストに対応する。
* [ng-automocks](https://github.com/MillerSvt/ng-automocks) - Jestでコンポーネント、ディレクティブ、パイプ、モジュール、サービスのモックを自動生成し、手動のスタブ作成を不要にするAngularテスト支援。
* [jest-angular-test-verifier](https://github.com/Neizan93/jest-angular-test-verifier) - Angularのコンポーネント、サービス、ディレクティブなどの各ファイルに、対応するテストファイルがあるかを確認するJestレポーター。
* [ngx-api-mocks-interceptor](https://github.com/MaloPolese/ngx-api-mocks-interceptor) - APIレスポンスをモック化するAngular HTTPインターセプター。動的データ生成、パスの照合、レスポンスの遅延、ファイル操作のシミュレーションに対応する。
* [testing-library-queries](https://github.com/thomasmikava/testing-library-queries) - DOMの問い合わせを簡潔にするライブラリ。組み合わせ・連鎖可能なAPI、TypeScript対応、CSSセレクターのヘルパー、簡潔な構文、再利用可能な問い合わせロジックを備え、特定のフレームワークに依存しない。
* [ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS) - JS・TSプロジェクトでアーキテクチャのルールを適用し、循環する依存関係を検出し、コードの基準を検証するツール。簡単に設定でき、テストフレームワークと円滑に連携する。
* [qc-auto-package](https://github.com/KareemMostafa77/qc-auto-package) - テスト担当者がコードとは独立して管理する、手間の少ない信頼性の高いAngular用テストID。
* [ng-magic-test-bed](https://github.com/peejay-solutions/ng-magic-test-bed) - テストのspecファイルから多数の冗長なコードを取り除く、Angularテストベッドのラッパー。
* [schmock](https://github.com/khalic-lab/schmock) - プラグインのパイプラインとフレームワークのアダプターで、OpenAPI仕様や手作業で定義したルートから、呼び出し可能なモックAPIを作成するツール。
* [vitest-auto-spy](https://github.com/ASDAlexey/vitest-auto-spy) - [jest-auto-spies](https://github.com/hirezio/auto-spies)をそのまま置き換えられるツール。

## <a id="site-templates"></a>サイトテンプレート

### <a id="free-templates"></a>無料テンプレート

* [ng-matero](https://github.com/ng-matero/ng-matero) - Angular Materialの管理ダッシュボードテンプレート。
* [coreui-free-angular-admin-template](https://github.com/coreui/coreui-free-angular-admin-template) - Bootstrap 5を基盤とする、無料のCoreUI Angular管理画面テンプレート。
* [devextreme-angular-template](https://github.com/DevExpress/devextreme-angular-template) - DevExtreme Angularコンポーネントを基盤とする、レスポンシブなアプリケーションレイアウトのテンプレート群。
* [QuickApp](https://github.com/emonney/QuickApp) - ログイン、ユーザー管理、ロール管理の機能を備えたASP.NET Core・Angularプロジェクトのひな型。素早いアプリケーション開発に役立つ各種サービスも含む。
* [material-pro-angular-lite](https://github.com/wrappixel/material-pro-angular-lite) - WrapPixelの無料Angular Materialテンプレート・テーマ、MaterialPro Angular Lite。個人用・商用のプロジェクトでダウンロードして利用できる。
* [spike-angular-free](https://github.com/wrappixel/spike-angular-free) - Material Angularを基盤とする、無料のSpike Angular管理画面テンプレート。
* [Flexy-admin-angular-lite](https://github.com/wrappixel/Flexy-admin-angular-lite) - Material Angularを基盤とする、無料のFlexy Angular管理画面テンプレート。
* [angular-quickstart](https://github.com/netlify-templates/angular-quickstart) - Netlifyへ素早くデプロイするための、最小限のAngularテンプレート。
* [template-angular](https://github.com/phaserjs/template-angular) - AngularフレームワークとViteによるバンドルを使う、Phaser 3のTypeScriptプロジェクトテンプレート。
* [angular-ngrx-frontend](https://github.com/tarlepp/angular-ngrx-frontend) - Symfonyなどのバックエンド用の、AngularとNgRxを使うフロントエンドテンプレート。
* [zen](https://github.com/ZenSoftware/zen) - Nest、Prisma、Apollo、Angularを使う、フルスタックGraphQLスターターキット。
* [Colorlib](https://colorlib.com/wp/free-angular-templates/)
* [HTMLrev](https://htmlrev.com/free-angular-templates.html)
* [tailkit-starter-kit-angular](https://github.com/pixelcave/tailkit-starter-kit-angular) - プロジェクトですぐに`Tailkit UI`コンポーネントを利用するためのAngularスターターキット。
* [angular-tailwind](https://github.com/lannodev/angular-tailwind) - AngularとTailwind CSSを使う管理ダッシュボードのスターターキット。
* [angular-starter-kit](https://github.com/svierk/angular-starter-kit) - Prettier、リンター、Gitフック、VS Code設定を備えたAngularプロジェクトテンプレート。
* [fractal-boilerplate-lua-angular](https://github.com/FRACTAL-GAME-STUDIOS/fractal_boilerplate_lua_angular) - AngularとLuaを使うFiveM用の基本的なひな型。ホットビルドとユーティリティスクリプトを備えた、ウェブ・ゲーム内開発用の簡潔なスターターキット。
* [angular-sample-app](https://github.com/descope-sample-apps/angular-sample-app) - [Descope](https://www.descope.com)と連携するAngularサンプルアプリケーション。ログイン、ユーザーダッシュボード、動的なナビゲーションを備える。
* [berry-free-angular-admin-template](https://github.com/codedthemes/berry-free-angular-admin-template) - AngularとBootstrap 5を使う無料のBerry管理ダッシュボード。良好なユーザー体験のため、カスタマイズ可能で機能豊富なページを備える。
* [gradient-able-free-admin-template](https://github.com/codedthemes/gradient-able-free-admin-template) - Bootstrap、Angular、React向けの無料のGradient able管理画面テンプレート。
* [mantis-free-angular-admin-template](https://github.com/codedthemes/mantis-free-angular-admin-template)
* [datta-able-free-angular-admin-template](https://github.com/codedthemes/datta-able-free-angular-admin-template)
* [sanity-template-angular-clean](https://github.com/sanity-io/sanity-template-angular-clean) - [Sanity](https://www.sanity.io/)からコンテンツを取得する、シンプルなAngular SPA。
* [angular-templates](https://github.com/hawkgs/angular-templates) - 一般的なウェブアプリケーション用のAngularテンプレート集。
* [LightNap](https://github.com/SharpLogic/LightNap) - `ASP.NET` Core Identity、JWT管理、管理者のID管理機能を備えた、フルスタックSPAスターターキット。
* [Angspire](https://github.com/tbarracha/Angspire) - Angularと`.NET`のモノレポテンプレート。認証、テーマ、拡張可能な基盤を内蔵し、開発を素早く進められる。
* [keycloakify-starter-angular-vite](https://github.com/keycloakify/keycloakify-starter-angular-vite) - [Keycloakify 11](https://www.keycloakify.dev/)用のAngular・Viteスターター。
* [extreme-angular](https://github.com/joematthews/extreme-angular) - 明確で保守しやすく、アクセシビリティに配慮したウェブアプリケーションを作るためのベストプラクティスを適用する、設定済み開発ツール付きスターターテンプレート。
* [@wlucha/angular-starter](https://github.com/wlucha/angular-starter) - Storybook、Transloco、Jest、Cypress、Docker、ESLint、Material、Prettierを備えたAngular 19スターター。
* [dataclouder-template-angular](https://github.com/dataclouder-dev/dataclouder-template-angular) - Firebase Authenticationとの連携を備えた、すぐに使えるAngular・Ionicテンプレート。
* [signal-admin](https://github.com/codebangla/signal-admin) - レスポンシブなレイアウト、サイドバー、ユーザー管理、UIコンポーネントを備えた、Angular 20の管理パネル（MaterialとTailwind）。
* [ngXpress](https://github.com/angularcafe/ngXpress) - SSR、Zone.jsを使わない動作、Express 5、Prisma、better-auth、Tailwind CSS 4を備えた、フルスタックAngularスターターキット。
* [spartan-stack-starter](https://github.com/thatsamsonkid/spartan-stack-starter) - Spartan Stackを使い、明確な設計方針を持つプロジェクト用スターターテンプレート。
* [jet](https://github.com/karmasakshi/jet) - 品質の高いウェブアプリケーションを素早く構築するためのAngularスターターキット。
* [free-angular-tailwind-dashboard](https://github.com/TailAdmin/free-angular-tailwind-dashboard) - 無料でオープンソースのAngular・Tailwind CSS管理ダッシュボード。現代的な画面のための、基本的なUIコンポーネントと作成済みページを備える。
* [hanko-angular-express-starter](https://github.com/teamhanko/hanko-angular-express-starter) - Hanko認証をAngularとExpressに組み込むスターター。
* [ng-ultimate-base](https://github.com/Beszt/ng-ultimate-base) - Angular Material UI、Tailwind CSS、国際化、ESLint、Prettier、Husky、CI/CDを備えたAngular 20テンプレート。
* [angular-dev-enhanced](https://github.com/nelsongraa8/angular-dev-enhanced) - Vite、Vitest、ESLint、Prettierを備えた、すぐに使えるAngularスターター。
* [angular-realworld-example-app](https://github.com/gothinkster/angular-realworld-example-app) - [RealWorld](https://github.com/gothinkster/realworld)の仕様とAPIに従うAngularコードベース。CRUD、認証、高度なパターンなどの実践例を含む。
* [angular.ng](https://github.com/desoga10/angular.ng) - AngularとSupabaseを使う、オープンソースの生産性ダッシュボード。
* [angluar-crm](https://github.com/minhpham-mew/angluar-crm) - 連絡先の管理、商談の追跡、分析を備えたAngular CRMテンプレート。
* [ngx-admin-v20](https://github.com/sebbegamer2222/ngx-admin-v20) - 現代的なBootstrap 5のUI、SASSによるカスタマイズ、再利用可能なコンポーネント、Materialテーマを備えた管理ダッシュボード。
* [nestjs-angular-starter](https://github.com/tivanov/nestjs-angular-starter) - NestJSバックエンドとAngularフロントエンドを備えた、フルスタックのスターターテンプレート。認証、ユーザー管理、一般的なインフラ構成パターンを含む。
* [AngularTemplate](https://github.com/EmmanuelLefevre/AngularTemplate) - 構造化されたアーキテクチャ、ツール、テスト、CI/CD、スタイル設定、Schematics、明確なルール文書を備えた、本番利用向けのAngularプロジェクト構成テンプレート。
* [free-tailwind-admin-dashboard-template](https://github.com/Tailwind-Admin/free-tailwind-admin-dashboard-template) - 現代のウェブ開発者向けの、無料でオープンソースのTailwind CSS管理ダッシュボードテンプレート。
* [ngx-blog](https://github.com/pegasusheavy/ngx-blog) - テーマ対応とSEO最適化を備えた、現代的なAngularのブログ用CMS。
* [radixweb](https://radixweb.com/starter-kits/enterprise-microservices-boilerplate) - 本番利用向けの機能を備えたマイクロサービスのひな型。
* [base-angular-monorepo](https://github.com/myvictorlife/base-angular-monorepo) - 拡張性のあるAngularアプリケーションを開発するための、本番利用向けの基礎プロジェクト。Nx、NgRx、Tailwind CSS、Jest、ESLint、Prettierを使用する。
* [nx-ng-starter](https://github.com/rfprod/nx-ng-starter) - 作業手順の自動化を備えたモノレポスターター。Nx、Angular、Angular Elements、Electron、Node、Nest、Firebaseを利用する。
* [elements-template](https://github.com/giacomo/elements-template) - Angular 21、Tailwind CSS v4、Vitestを使って独自のウェブコンポーネントを構築するための、現代的で設計方針を定めたスターターキット。
* [realworld-angular](https://github.com/realworld-angular/realworld-angular) - Angularライブラリの動作を示す、RealWorldのAngularサンプルアプリケーション群。
* [spartan-admin-dashboard](https://github.com/Oussemasahbeni/spartan-admin-dashboard) - Spartan UIコンポーネントとTailwind CSSで構築された、本番利用向けAngular管理ダッシュボードテンプレート。
* [elite-angular-zen](https://github.com/saiyan666-4Wk/elite-angular-zen) - 簡潔で最小限のデザインを備えた、2026年版のAngular 17 Pro管理画面テンプレート。
* [spike-angular-pro-starter](https://github.com/juwairiyah09/spike-angular-pro-starter) - 現代的なダッシュボード向けの、無料のSpike Angular 2026 Material管理画面テンプレート。
* [appblink](https://github.com/workern/appblink-workspace) - Angular、Flutter、Firebaseを使う、本番利用向けのモノレポスターター。ウェブ、モバイル、バックエンドを1つのリポジトリにまとめる。

### <a id="paid-templates"></a>有料テンプレート

* [Admin Mart](https://adminmart.com/templates/angular-dashboard/)
* [CozyDevKit](https://cozydevkit.com/) - Angular 21向けの対話型ツール、アーキテクチャのパターン、チートシート、DevOpsサービス。
* [devkitly](https://www.devkitly.io/) - 認証、課金、監査ログ、機能フラグ、SSRを備えた、本番利用向けのAngular 21スターターキット。
* [draftNG](https://www.draftng.xyz/) - Angular 22以降向けの、最小限の構成で高性能なプラットフォームテンプレート群。
* [NgStarter](https://ngstarter.com/) - AngularのUIコンポーネントと管理画面テンプレート。
* [Nzoni](https://nzoni.app/) - AngularでSaaSを数日で立ち上げるためのツール。
* [Theme Forest](https://themeforest.net/search/angular)
* [Vortex](https://template.giacomobellazzi.com/) - AngularとJavaを使い、ユーザーインターフェースとバックエンドを構成するウェブアプリケーションテンプレート。
* [Wrap Pixel](https://www.wrappixel.com/templates/category/angular-templates/)

## <a id="third-party-components"></a>サードパーティ製コンポーネント

### <a id="animations"></a>アニメーション

* [ngx-confetti-explosion](https://github.com/ChellappanRajan/ngx-confetti-explosion) - Angularの紙吹雪効果。
* [ngx-lottie](https://github.com/ngx-lottie/ngx-lottie) - After Effectsアニメーションを描画する、全面的にカスタマイズ可能なAngularコンポーネント。Angular 9以降に対応する。
* [angular-animations-explorer](https://github.com/williamjuan027/angular-animations-explorer) - Angularで実現できる各種アニメーションを紹介する資料。
* [ngx-count-animation](https://github.com/hm21/ngx-count-animation) - 数値の変化をアニメーションし、値から値への視覚的な遷移を表示するパッケージ。カウントやリアルタイムデータの更新表示に向く。
* [ng-auto-animate](https://github.com/ajitzero/ng-auto-animate) - FormKitの[Auto Animate](https://auto-animate.formkit.com)用Angularディレクティブライブラリ。
* [layout-projection](https://github.com/Char2sGu/layout-projection) - ウェブ用のレイアウトアニメーション。
* [ngx-easy-view-transitions](https://github.com/DerStimmler/ngx-easy-view-transitions) - View Transitions APIを簡単に使うためのAngularライブラリ。
* [ngx-typed-writer](https://github.com/SkyZeroZx/ngx-typed-writer) - Angular向けに実装された、Angular 2以降のタイピングアニメーションライブラリ。Angular SSRとAngular Universalで利用しやすい設計。
* [ngx-number-ticker](https://github.com/omnedia/ngx-number-ticker) - 数値のカウントをアニメーションする、シンプルな数値ティッカー効果。
* [ngx-word-rotation](https://github.com/omnedia/ngx-word-rotation) - Angularアプリケーション内の単語のローテーションアニメーションを支援するライブラリ。
* [ngx-word-morph](https://github.com/omnedia/ngx-word-morph) - Angularアプリケーション内で単語が変形するアニメーションを支援するライブラリ。
* [ngx-cryptic-text](https://github.com/omnedia/ngx-cryptic-text) - 正しい文字が現れるまでランダムに文字を切り替える、暗号めいたテキストのアニメーション効果を提供するAngularライブラリ。
* [ngx-word-pullup](https://github.com/omnedia/ngx-word-pullup) - 単語を順番に滑らかに引き上げて表示するAngularアニメーションライブラリ。表示までの遅延をカスタマイズできる。
* [ngx-typewriter](https://github.com/omnedia/ngx-typewriter) - タイプライター効果を作成する、軽量で使いやすいライブラリ。RxJSで効果を管理し、滑らかでカスタマイズ可能なアニメーションを実現する。
* [ngx-gradient-text](https://github.com/omnedia/ngx-gradient-text) - 滑らかにアニメーションするテキストのグラデーションを提供するAngularライブラリ。色の遷移をカスタマイズできる。
* [ngx-shiny-text](https://github.com/omnedia/ngx-shiny-text) - きらめくテキストのアニメーション効果を提供するAngularライブラリ。
* [ngx-ripple](https://github.com/omnedia/ngx-ripple) - 対話的な背景やコンテナー用の、カスタマイズ可能な波紋効果コンポーネント。
* [ngx-shine-border](https://github.com/omnedia/ngx-shine-border) - Angularコンポーネントに動的でカスタマイズ可能な枠線アニメーションを追加するライブラリ。
* [ngx-border-beam](https://github.com/omnedia/ngx-border-beam) - 色、角丸の半径、アニメーションの長さをカスタマイズできる、光る枠線アニメーションのコンポーネント。
* [ngx-dotpattern](https://github.com/omnedia/ngx-dotpattern) - Angularコンポーネントにカスタマイズ可能なドットパターンの背景を提供するライブラリ。
* [ngx-meteors](https://github.com/omnedia/ngx-meteors) - コンポーネントに流星群のアニメーション効果を追加するAngularライブラリ。
* [ngx-background-beams](https://github.com/omnedia/ngx-background-beams) - グラデーションと移動経路をカスタマイズできる、動的な光線の背景アニメーションを生成するAngularコンポーネント。
* [ngx-aurora](https://github.com/omnedia/ngx-aurora) - グラデーション効果と2種類のアニメーション方式を持つ、カスタマイズ可能なオーロラ背景のAngularライブラリ。
* [ngx-particles](https://github.com/omnedia/ngx-particles) - マウスの動きに反応する粒子アニメーションで、カスタマイズ可能な背景を作成するAngularライブラリ。
* [ngx-spotlight](https://github.com/omnedia/ngx-spotlight) - ページ内のセクションを強調するSVGスポットライト効果のAngularライブラリ。色とアニメーションをカスタマイズできる。
* [ngx-starry-sky](https://github.com/omnedia/ngx-starry-sky) - 星空の背景を作成し、必要に応じて流れ星の効果を追加できるAngularライブラリ。
* [ngx-connection-beam](https://github.com/omnedia/ngx-connection-beam) - 2つの要素間の接続線を動的に描画するAngularアニメーションコンポーネント。
* [ngx-countUp](https://github.com/inorganik/ngx-countUp) - 目標の数値までカウントするアニメーション。
* [ngx-gsap](https://github.com/marcos-velasquez/ngx-gsap) - GSAPを利用する、軽量でカスタマイズ可能なAngularアニメーションライブラリ。宣言的で使いやすい。
* [ngx-animations](https://github.com/bananalasmari/ngx-animations) - GSAPを参考に設計されたAngularアニメーションライブラリ。高性能なディレクティブ、コンポーネント、タイムラインサービスを提供し、RTLに全面的に対応する。
* [ngx-spring](https://github.com/angular-threejs/ngx-spring) - 継続時間やイージング曲線の代わりに、ばねの物理法則で滑らかで自然なアニメーションを作成するツール。
* [ngx-unicode-spinners](https://github.com/neogenz/ngx-unicode-spinners) - 点字を使う18種類のAngular用Unicodeスピナーアニメーション。実行時の依存パッケージを必要としない。
* [ng-motion](https://github.com/ScriptType/ng-motion) - [motion-dom](https://github.com/motiondivision/motion)を基盤とするAngularアニメーションライブラリ。
* [ngx-digit-flow](https://github.com/ayangabryl/ngx-digit-flow) - 各桁を個別にアニメーションするAngularライブラリ。0〜9の縦型リールが、数値の変化時に新しい値へスクロールする。スロットマシンや走行距離計のような表示。
* [angular-movement](https://github.com/Andersseen/angular-movement) - 再利用可能なアニメーションディレクティブのライブラリと、デモ・ドキュメントのサイトを1つのリポジトリにまとめたAngularモーション用エコシステム。
* [ngx-transition-content](https://github.com/ciriousjoker/ngx-transition-content) - 旧コンテンツのフェードアウト、新しい寸法へのアニメーション、新コンテンツのフェードインで、ダイアログの内容を円滑に切り替えるAngularライブラリ。

### <a id="calendars"></a>カレンダー

* [angular-calendar](https://github.com/mattlewis92/angular-calendar) - 月・週・日のビューでイベントを表示する、Angular 15以降向けの柔軟なカレンダーコンポーネント。
* [@pyas/connect-angular](https://www.npmjs.com/package/@pyas/connect-angular) - [Pyas Connect](https://github.com/brutforce-tech/pyas-connect)ウェブコンポーネントのプラグインラッパー。PyasConnectをAngularコンポーネントとして直接扱えるように公開する。
* [cyrus-calendar](https://github.com/mhmfofa/cyrus-calendar) - グレゴリオ暦、シャムシ暦（ジャラリ暦・ペルシャ暦）、Imperial暦に対応する、軽量で複数暦を扱うAngular日付選択コンポーネント。
* [daypilot-lite-angular](https://www.npmjs.com/package/@daypilot/daypilot-lite-angular) - 日・週・月のビューを表示できる、JavaScript・HTML5のイベントカレンダー・スケジューラーのAngular版。
* [fullcalendar-angular](https://github.com/fullcalendar/fullcalendar-angular) - FullCalendarの公式Angularコンポーネント。
* [ngx-calendario](https://github.com/roquemacia/ngx-calendario) - イベントに対応し、カスタマイズ可能なカレンダーを表示するAngularライブラリ。
* [ngx-calendar-view](https://github.com/charlesschaefer/ngx-calendar-view/tree/main/projects/ngx-calendar-view) - 日・週・月のビュー、イベントのドラッグ＆ドロップ、モバイルのスワイプ対応、内蔵ダークモードを備えた、レスポンシブなAngularカレンダーコンポーネントライブラリ。
* [ngx-calendar-widget](https://github.com/giacomo/ngx-calendar-widget) - Angularアプリケーションのイベント管理とスケジュール設定を簡単にする、軽量でカスタマイズ可能な高機能カレンダーウィジェット。
* [ngx-datepicker-calendar](https://github.com/mumair4462/ngx-datepicker-calendar) - シグナルとスタンドアロンコンポーネントを使う、高速でアクセシビリティに配慮したAngular日付選択ライブラリ。
* [ngx-resource-scheduler](https://github.com/rmpt/ngx-resource-scheduler) - Angular向けの軽量で柔軟なリソーススケジューラー。
* [ngx-strip-calendar](https://github.com/codingchefss/ngx-strip-calendar) - Angular 17以降向けのストリップカレンダーコンポーネント。
* [schedule-x](https://github.com/schedule-x/schedule-x) - Material Designのイベントカレンダー。
* [timegrid-angular](https://www.npmjs.com/package/@hexaflexa/timegrid-angular) - [HexaFlexa](https://hexaflexa.com/)のTimegridウェブコンポーネントをAngularで扱うラッパー。
* [CalendarJS](https://github.com/componade/calendarjs) - Angularプロジェクトに組み込める、オープンソースのJavaScriptカレンダー・スケジュール設定コンポーネント。
* [hss-calendar](https://github.com/HawkerSoftwares/hss-calendar) - Angular 19以降向けの、プレミアムで軽量かつ全面的にカスタマイズ可能なカレンダーライブラリ。
* [datelane](https://github.com/devendramilmile121/datelane) - 12種類のビューと複数の日付レイヤーを備えた、カスタマイズ可能なAngularカレンダー。依存パッケージを必要としない。
* [ngx-modern-calendar](https://github.com/angx-libs/ngx-modern-calendar) - 小さく、テーマ設定と多言語に対応するAngularカレンダーコンポーネント。

### CAPTCHA

* [altcha](https://github.com/altcha-org/altcha) - GDPR、WCAG 2.2 AA、EAAに準拠する、セルフホスト型のCAPTCHA代替ツール。PoW方式と高度なスパム対策フィルターを備える。
* [go-captcha-angular](https://github.com/wenlng/go-captcha-angular) - 文字・画像のクリック、スライド・ドラッグ、回転などの確認方式を実装した、シンプルで使いやすく対話的かつ安全な、操作による検証機能。
* [ng-cloudflare-turnstile](https://github.com/pangz-lab/ng-cloudflare-turnstile) - 直感的で軽量な、簡単に組み込めるAngular用[Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/)コンポーネント。
* [ng-hcaptcha](https://github.com/leNicDev/ng-hcaptcha) - 使いやすい[hCaptcha](https://hcaptcha.com/)コンポーネント。
* [ng-recaptcha-2](https://github.com/LakhveerChahal/ng-recaptcha-2) - Angular 18用の[ng-recaptcha](https://github.com/DethAriel/ng-recaptcha)のフォーク。別の方法として、[記事](https://ben-5.azurewebsites.net/2024/9/5/google-recaptcha-v3-with-angular/#google_vignette)を参考に、GoogleのreCAPTCHAを実装する独自のサービスも作成できる。
* [ngx-captcha-kit](https://github.com/edward124689/ngx-captcha-kit) - 1つのコンポーネントとサービスでCAPTCHA実装を簡潔にするキット。シグナルやZone.jsを使わない変更検知など、Angular 20以降の機能に対応する。
* [ngx-dice-captcha](https://github.com/Easy-Cloud-in/ngx-dice-captcha) - サイコロを使う対話操作と、Three.js・Cannon-esによる現実的な物理挙動を備えた、動的な3D CAPTCHAライブラリ。
* [ngx-easy-captcha](https://github.com/angx-libs/ngx-easy-captcha) - Google RecaptchaとCloudflare Turnstileの両方を簡単に実装する機能。
* [ngx-numeric-captcha](https://github.com/ShreyashThorat-17/ngx-numeric-captcha) - 複数の検証課題を備えた、現代的で軽量なAngular CAPTCHAライブラリ。
* [ngx-turnstile](https://github.com/verto-health/ngx-turnstile) - Angular用のCloudflare Turnstile。
* [recaptcha-angular](https://github.com/Souhailmakni/recaptcha-angular) - Google reCAPTCHA v2（チェックボックス）とv3（スコア方式）用のAngularコンポーネント。TypeScriptに全面的に対応し、スタンドアロンAPIと`ControlValueAccessor`との連携を備える。
* [trustcaptcha-angular](https://www.npmjs.com/package/@trustcomponent/trustcaptcha-angular) - Angularフロントエンドアプリケーションへの[組み込み](https://docs.trustcaptcha.com/en/frontend/integration?frontend=angular)を支援する[Trustcaptcha](https://www.trustcaptcha.com/en)ライブラリ。
* [yandex-smart-captcha](https://github.com/ngx-rock/yandex-smart-captcha) - [Yandex SmartCaptcha](https://yandex.cloud/en/services/smartcaptcha)を組み込むAngularライブラリ。通常・非表示のCAPTCHA、リアクティブフォーム、現代的なシグナル・エフェクトに対応する。

### <a id="carousels"></a>カルーセル

* [@daelmaak/ngx-gallery](https://github.com/daelmaak/ngx-gallery) - Angular 8以降向けの、小さく高性能でレスポンシブかつ使いやすいギャラリー。依存パッケージを必要としない。
* [@MurhafSousli/ngx-gallery](https://github.com/MurhafSousli/ngx-gallery/tree/release/13.0.0) - ウェブやモバイル機器向けの、画像ギャラリーを簡単に作成するツール。
* [@vinlos/ngx-gallery](https://github.com/vinlos/ngx-gallery) - Angular向けに実装されたシンプルなギャラリーコンポーネント。
* [ngu-carousel](https://github.com/uiuniversal/ngu-carousel) - Angular Universalのカルーセル。
* [ngx-slider](https://github.com/angular-slider/ngx-slider) - [angularjs-slider](https://github.com/angular-slider/angularjs-slider)を基盤とする、単体で動作しモバイルでも使いやすいAngularスライダーコンポーネント。
* [ngx-slick-carousel](https://github.com/leo6104/ngx-slick-carousel) - Angular 17以降向けのslickプラグインのラッパー。
* [ngx-owl-carousel-o](https://github.com/vitalii-andriiovskyi/ngx-owl-carousel-o) - Angular 6以降用の`owl-carousel`。
* [angular2-image-gallery](https://github.com/BenjaminBrandmeier/angular2-image-gallery) - Angular 17以降、Node.js、GraphicsMagickを使う画像ギャラリー。
* [egjs-flicking](https://naver.github.io/egjs-flicking/docs/quick-start) - FlickingのAngularクイックスタート。
* [ngx-drag-scroll](https://github.com/bfwg/ngx-drag-scroll) - 軽量でレスポンシブなAngularカルーセルライブラリ。
* [ngx-darkbox-gallery-library](https://github.com/failed-successfully/ngx-darkbox-gallery-library) - Ivyエンジン（Angular 15以降）を使う、高度に設定可能なライトボックス型Angularギャラリーライブラリ。
* [ngx-stories](https://github.com/Gauravdarkslayer/ngx-stories) - Instagramのようなストーリーを描画するAngularコンポーネント。
* [carousel-library](https://github.com/GreenFlag31/carousel-library) - 機能豊富でシンプルかつ高性能なカルーセルコンポーネントを提供する、汎用的なAngularライブラリ。
* [ngx-simple-gallery](https://github.com/zolcsi/ngx-simple-gallery) - Angular 18用の軽量なギャラリーライブラリ。すべての画像をサムネイルで表示し、クリックやタップで実寸に拡大する。
* [embla-carousel-angular](https://github.com/donaldxdonald/embla-carousel-angular) - [Embla Carousel](https://github.com/davidjerleke/embla-carousel)のAngularラッパー。
* [ngx-cdk-lightbox](https://github.com/miskith/ngx-cdk-lightbox/tree/master/projects/ngx-cdk-lightbox) - Angularでライトボックス付きの画像ギャラリーを描画するための、CDKを基盤とする専用の機能。
* [rm-image-slider](https://github.com/malikrajat/rm-image-slider) - ライトボックス、遅延読み込み、YouTube・MP4の動画対応を備えた、スタンドアロンのAngular画像スライダー。
* [ngx-carousel-modern](https://github.com/Aizaz-ul-haq/ngx-carousel-modern) - Angular 16以降用の、現代的でカスタマイズ可能なカルーセルコンポーネント。スタンドアロンとNgModule方式のアプリケーションの両方に対応する。
* [fslightbox-angular](https://github.com/banthagroup/fslightbox-angular) - [Fullscreen Lightbox](https://fslightbox.com/)のAngular版。
* [whirli-ng](https://github.com/babbage42/whirli-ng) - ドラッグ、ループ、仮想スライド、コンテンツの投影、サムネイル、SSRで使いやすいレスポンシブレイアウト、外部操作、豊富なイベントAPIを備えたAngularカルーセル。

### <a id="charts"></a>チャート

* [@cubejs-client/ngx](https://www.npmjs.com/package/@cubejs-client/ngx) - [@cubejs-client/core](https://www.npmjs.com/package/@cubejs-client/core)と組み合わせ、Cube.jsをAngularと[連携](https://cube.dev/docs/product/apis-integrations/javascript-sdk/angular)させる機能。
* [ngx-charts](https://github.com/swimlane/ngx-charts) - Angular 2以降向けの宣言的なチャートフレームワーク。
* [ag-charts](https://github.com/ag-grid/ag-charts/tree/latest/packages/ag-charts-angular) - 機能豊富で、高度にカスタマイズ可能なJavaScriptチャートライブラリ。
* [amcharts5](https://github.com/amcharts/amcharts5) - JavaScriptとTypeScriptのアプリケーション向けチャートライブラリ。[Angular連携ガイド](https://www.amcharts.com/docs/v5/getting-started/integrations/angular/)も提供する。
* [angular-chrts](https://github.com/dennisadriaans/angular-chrts) - 現代的なAngularアプリケーション向けの、高性能で開発者が使いやすいデータ可視化ライブラリ。
* [angular-gantt](https://github.com/ErlonRr/angular-gantt) - Angular 20以降向けの、Zone.jsを使わずシグナルを基盤とするガントチャート。
* [angular-google-charts](https://github.com/FERNman/angular-google-charts) - Angularで実装されたGoogle Chartsライブラリのラッパー。
* [carbon-charts](https://github.com/carbon-design-system/carbon-charts/tree/master/packages/angular) - 素のJavaScriptで実装された@carbon/chartsコンポーネントライブラリを、薄いAngularラッパーで提供するCarbon Charts Angular。
* [Foblex Flow](https://github.com/Foblex/f-flow) - Angular向けに設計された、ノードエディター、ワークフロービルダー、対話的な図のライブラリ。ノードと接続のドラッグ＆ドロップ、ミニマップ、自動レイアウト、仮想化、キーボードのアクセシビリティ層を備える。
* [highcharts-angular](https://github.com/highcharts/highcharts-angular) - Angular向けの、最小限の公式[Highcharts](https://www.highcharts.com/)連携機能。
* [michi-vz-mono](https://github.com/beany-vu/michi-vz-mono) - 1つのエンジンで、対話的でアクセシビリティに配慮した17種類のチャートを提供する機能。Angularなどに対応し、レポート、ダッシュボード、AI機能用のLLMで扱えるデータを出力する。
* [ng-apexcharts](https://github.com/apexcharts/ng-apexcharts) - 対話的な可視化を構築する、ApexChartsのAngularラッパー。
* [ng-chartist](https://github.com/willsoto/ng-chartist) - [Chartist.js](https://github.com/chartist-js/chartist)用のAngularコンポーネント。
* [ng-charts](https://github.com/AleksanderBodurri/ng-charts) - `recharts`のReangularによる移植版。
* [ng-diagram](https://github.com/synergycodes/ng-diagram) - 対話的でカスタマイズ可能な図、ノード式のエディター、視覚的なワークフローを構築するAngularライブラリ。
* [ng-draw-flow](https://github.com/taiga-family/ng-draw-flow) - データをノードとして表示するインターフェースを作成するライブラリ。
* [ng-flowchart](https://github.com/joel-wenzel/ng-flowchart) - ドラッグ＆ドロップのフローチャートを構築する、軽量なAngularライブラリ。
* [ngx-circle-chart](https://github.com/angx-libs/ngx-circle-chart) - 自動的にサイズを調整する、Angular用円形（ドーナツ型）進捗チャート。
* [ngx-echarts](https://github.com/xieziyu/ngx-echarts) - [Apache ECharts](https://github.com/apache/incubator-echarts)のAngularディレクティブ。
* [ngx-flexmonster](https://github.com/flexmonster/ngx-flexmonster) - ウェブのレポート作成とデータ可視化向けの、全面的にカスタマイズ可能なJavaScriptコンポーネント。
* [ngx-gantt](https://github.com/worktile/ngx-gantt) - Angular用ガントチャートコンポーネント。
* [ngx-graph](https://github.com/swimlane/ngx-graph) - Angular用グラフ可視化ライブラリ。
* [ngx-interactive-org-chart](https://github.com/zeyadelshaf3y/ngx-interactive-org-chart) - 対話的なパンとズームを備えた、現代的なAngular組織図コンポーネント。
* [ngx-recharts](https://github.com/wook95/ngx-recharts) - [Recharts](https://recharts.github.io/)と同じAPIで、Angularコンポーネントを組み合わせたチャートを構築する機能。
* [ngx-simple-charts](https://github.com/Angular2Guy/ngx-simple-charts) - D3を使う線・棒・ドーナツ・日付／タイムラインのチャートを、複数のエントリーポイントで提供するAngular 17以降向けのライブラリ。トークン処理用の設定可能なサービスを備える。
* [org-chart](https://github.com/bumbeishvili/org-chart) - 高度にカスタマイズ可能な組織図。Angular、React、Vueの連携機能を提供する。
* [pioneer-charts](https://github.com/PioneerCode/pioneer-charts) - D3.jsでレスポンシブかつカスタマイズ可能なチャートを作成するAngularライブラリ。棒・線・円などのチャートに対応する。
* [sequential-workflow-designer](https://github.com/nocode-js/sequential-workflow-designer) - フロー方式のプログラミングアプリケーションやワークフロー自動化を構築する、カスタマイズ可能なノーコードコンポーネント。外部の依存パッケージを必要としない。
* [schedula-core-angular](https://github.com/RGabGH/schedula-core/tree/main/integrations/packages/angular) - 高速で軽量なガントチャート・リソーススケジューラーの[SchedulaCore](https://www.npmjs.com/package/schedula-core)を、Angularで使う公式ラッパー。
* [systelab-charts](https://github.com/systelab/systelab-charts) - SystelabのAngularチャートサービス。
* [unovis](https://github.com/f5/unovis) - React、Angular、Svelte、Vue、素のTypeScript・JavaScript向けの、モジュール式データ可視化フレームワーク。

### <a id="cookies"></a>Cookie

* [ngx-cookie-service](https://github.com/stevermeister/ngx-cookie-service) - Angular用のCookieサービス。[ng2-cookies](https://github.com/BCJTI/ng2-cookies)ライブラリを基に作られた。
* [cookieconsent](https://github.com/orestbida/cookieconsent) - 素のJavaScriptで実装された、複数ブラウザーに対応するシンプルなCookie同意プラグイン。[Angular](https://cookieconsent.orestbida.com/essential/getting-started.html#angular)にも追加できる。
* [ngx-cookie-ssr](https://github.com/Ask-786/ngx-cookie-ssr) - ngx-cookie-serviceを参考に設計された、Angular 19アプリケーション用のシンプルなCookieサービス。
* [ngx-gdpr-cookie-consent](https://github.com/KoblerS/ngx-gdpr-cookie-consent) - Cookie同意ライブラリ。
* [smallest-cookie-banner](https://github.com/DreadfulCode/smallest-cookie-banner) - 特定のフレームワークに依存しない、最小限のCookie同意バナー。
* [ngrithms-cookie-consent](https://github.com/aboudbadra/ngrithms-cookie-consent) - 現代的なAngularのCookie同意機能。スタンドアロンコンポーネント、シグナルによる状態管理、`provideCookieConsent()`を使う関数型設定、SSR対応を備え、実行時の依存パッケージを必要としない。

### CSV

* [impler](https://github.com/implerhq/impler.io) - [Angularパッケージ](https://www.npmjs.com/package/@impler/angular)でCSV・Excelのインポート機能をアプリケーションへ組み込むツール。
* [ng2csv](https://github.com/rars/ng2csv) - データをCSVファイルへ保存するAngularサービス。
* [ngx-export-as](https://github.com/wnabil/ngx-export-as) - Angular 2以降・Ionic 2以降で、HTML・テーブル要素をJSON、XML、PNG、CSV、TXT、MS-Word、Ms-Excel、PDFに書き出す機能。
* [rm-ng-export-to-csv](https://github.com/malikrajat/rm-ng-export-to-csv) - JSONデータをCSVファイルへ書き出す、軽量でカスタマイズ可能なAngularライブラリ。自動ダウンロードに対応し、チャート、テーブル、レポート、ダッシュボードに向く。

### <a id="data-grids"></a>データグリッド

* [ag-grid](https://www.ag-grid.com/) - 企業向けアプリケーション用のJavaScriptデータテーブル。React、Angular、Vue、素のJavaScriptに対応する。
* [ignite-ui-angular's grid](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid) - `Ignite UI`のデータグリッド、ツリーグリッド、階層グリッド。Excel形式のフィルター、リアルタイムデータ、並べ替え、ドラッグ可能な行、その他のツールバー機能を備える。
* [sheetjs](https://docs.sheetjs.com/docs/demos/frontend/angular) - スプレッドシートのデータを読み書きするJavaScriptライブラリ。
* [active-table](https://github.com/OvidijusParsiunas/active-table) - 特定のフレームワークに依存せず、データを編集できるテーブルコンポーネント。
* [jsgrids](https://github.com/statico/jsgrids) - JavaScriptのデータグリッド・スプレッドシート用ライブラリの比較ツール。リポジトリからさらに多くのライブラリを探せる。
* [handsontable](https://handsontable.com/docs/javascript-data-grid/angular-installation/) - スプレッドシートのなじみある見た目と操作感をアプリケーションへ提供する、広く使われているJavaScriptデータグリッドコンポーネント。
* [slickgrid-universal](https://github.com/ghiscoding/slickgrid-universal) - 特定のフレームワークに依存しない[SlickGrid](https://github.com/6pac/SlickGrid)の利用に関する、すべてのエディター、フィルター、拡張、サービスを含むモノレポ。
* [revogrid](https://github.com/revolist/revogrid) - 高度なカスタマイズとExcelの機能を備えた、性能を重視する仮想データグリッド・スマートシート。
* [ZingGrid](https://github.com/ZingGrid/zinggrid) - ウェブアプリケーションに対話的なデータテーブルを追加する、JavaScriptウェブコンポーネントライブラリ。[Angular](https://www.zinggrid.com/docs/integrations/js-frameworks-&-libs/angular)などの多くのフレームワークで利用できる。
* [ngx-panemu-table](https://github.com/panemu/ngx-panemu-table) - 使いやすく設計されたAngularテーブルコンポーネント。作業の大部分をTypeScriptファイルで行い、HTMLにはシンプルな`panemu-table`タグだけを置けばよい。
* [@guiexpert/angular-table](https://github.com/guiexperttable/angular-19-table) - [Angular](https://gui.expert/getstarted/angular/)を含む主要なフレームワークと円滑に連携する、特定のフレームワークに依存しないテーブルライブラリ。
* [ngx-tabulator-tables](https://github.com/knackstedt/ngx-tabulator-tables) - [Tabulator](https://tabulator.info/)テーブルライブラリのAngularラッパー。
* [activereportsjs/angular-reporting-tool](https://developer.mescius.com/activereportsjs/angular-reporting-tool) - データ可視化とレポート用のAngularコンポーネント。[ActiveReportsJS](https://developer.mescius.com/activereportsjs)でレポートを埋め込める。
* [mat-datatable](https://github.com/BePo65/mat-datatable) - Angular Materialを使う、仮想スクロール付きのシンプルなデータテーブル。
* [@Trixwell/data-grid](https://github.com/Trixwell/data-grid) - フィルター、並べ替え、ページネーション、CSV書き出し、サブグリッド、Materialとの連携を備えたAngularデータテーブルコンポーネント。
* [ngx-multi-sort-table](https://github.com/Maxl94/ngx-multi-sort-table) - サーバー側で読み込み・並べ替えたデータを重視する、Angular Material Designを基盤とする複数条件で並べ替え可能なテーブル。
* [angular2-smart-table](https://github.com/dj-fiorex/angular2-smart-table) - Angular Smart Data Tableコンポーネント。
* [ngx-editable-material-table](https://github.com/valentinstn/ngx-editable-material-table) - Angular Materialを基盤とし、Angular向けに実装された編集可能なテーブル。
* [ngx-flamegraph](https://github.com/mgechev/ngx-flamegraph) - Angularで実装された、スタックトレースを可視化するフレームグラフ。
* [ng-virtual-grid](https://github.com/DjonnyX/ng-virtual-grid) - 非常に大きなグリッド向けの、性能を重視する表示機能。
* [ngx-simple-datatables](https://github.com/rinturaj/ngx-simple-datatables) - 仮想スクロール、列の固定、カスタマイズ可能なテンプレートなどを備えた、軽量で高性能なAngularデータテーブルコンポーネント。
* [ngx-list-manager](https://github.com/RzoDev/ngx-list-manager) - リストを効率的に管理するAngularサービス。
* [cerious-grid](https://github.com/ryoucerious/cerious-widgets) - 制御しやすさ、柔軟性、性能を求める開発者向けのAngularグリッド。
* [ngxsmk-datatable](https://github.com/toozuuu/ngxsmk-datatable) - 性能、カスタマイズ、開発者の使いやすさを重視する、Angular 17以降向けの現代的なデータテーブル。
* [ngx-column-filter](https://github.com/kakarotx10/ngx-column-filter) - 複数のフィールド型、高度なフィルタールール、カスタマイズ可能な照合方式を備えた、再利用可能なAngular列フィルターコンポーネント。
* [@witqq/spreadsheet](https://github.com/witqq/spreadsheet) - Canvas方式のスプレッドシート・データグリッドエンジン。依存パッケージ不要で、10万行以上を60fpsで扱い、完全な編集機能とリアルタイムの共同作業を備える。詳細は[ウェブサイト](https://spreadsheet.witqq.dev/)を参照。
* [Jspreadsheet CE](https://github.com/jspreadsheet/ce) - オープンソースのJavaScriptスプレッドシート・データグリッドコンポーネント。ラッパーを作るか、Angular Elements経由で利用することで、Angularアプリケーションに組み込める。
* [TabularJS](https://github.com/jspreadsheet/tabularjs) - Angularで高度なテーブル機能を扱う、軽量なJavaScriptテーブル・データグリッドライブラリ。
* [uni-table](https://github.com/Unify-India/uni-table) - 遅延のない動作のためにシグナルを使うAngularデータグリッド。高度なサーバー側の機能と簡潔な設定APIを組み合わせる。
* [ogrid](https://github.com/alaarab/ogrid) - 企業向けの機能を追加費用なしで提供する、軽量で複数フレームワーク対応のデータグリッド。
* [angular-datatables.net](https://github.com/Vinccool96/angular-datatables.net) - Angularと[DataTables](https://datatables.net/)の連携機能。
* [uiGrid](https://github.com/orneryd/uiGrid) - 元の[ui-grid](https://github.com/angular-ui/ui-grid)から同じAPIと現代的なAngularシグナルで再構築された、オープンソースの複数プラットフォーム向けデータグリッド。Angular、Web Components、React、Rustに対応する。
* [ngx-datawindow](https://github.com/sugitter/ngx-datawindow) - 従来のDataWindowを現代化するテーブルコンポーネント。設定不要のCRUD、計算列、複数バッファーの状態、オフライン同期、細かな変更追跡を備える。
* [simple-table](https://github.com/petera2c/simple-table) - 現代的で拡張性のあるアプリケーションを構築する、特定のフレームワークに依存しないデータグリッド・テーブルコンポーネント。
* [toolbox](https://github.com/OysteinAmundsen/toolbox) - データ処理の多いアプリケーション向けの、高性能で特定のフレームワークに依存しないウェブコンポーネント。
* [gp-grid](https://github.com/GioPat/gp-grid) - モジュール式の構造で、中核ロジックとフレームワーク連携を明確に分離するデータグリッドライブラリ。数百万行の大規模データを効率的に扱う。
* [ngx-powerful-tree](https://github.com/raknjarasoa/ngx-powerful-tree) - HTML5のドラッグ＆ドロップ、高速検索、ロックされたサブツリー、ファイル選択モードを備えた仮想ツリー。`@angular/cdk/scrolling`を基盤とし、固定原文では10万行以上で滑らかに動作するとされる。
* [agrid](https://github.com/thkl/agrid) - スプレッドシートのような編集、仮想スクロール、フィルター、並べ替え、グループ化、クリップボード操作、行操作、ページネーション、独自のセル描画を備えたAngularデータグリッド。
* [ngx-datatables-net](https://github.com/ascentspark/ngx-datatables-net) - Angular 20以降に対応する、`DataTables.net`のAngularラッパー。
* [angular-advanced-table](https://github.com/VaggelisKa/angular-advanced-table) - シグナルを中心に設計され、アクセシビリティに配慮したデータテーブルライブラリ`ng-advanced-table`と、そのドキュメントサイトを含むAngularモノレポ。
* [angular-tree](https://github.com/h-k-dev/angular-tree) - Zone.jsを使わず、シグナルで動作する、高性能で完全に仮想化されたヘッドレスのツリーコンポーネント。実行時の依存パッケージは`@angular/cdk`だけ。
* [@some-angular-utils/table](https://github.com/some-angular-utils/table) - リモート・ローカルのデータ、ページネーション、フィルター、レスポンシブレイアウト、テンプレートの全面的な制御を、1つの宣言的な`<sau-table>`要素にまとめる機能。
* [DataGrid](https://github.com/Laczynski/DataGrid) - .NETとAngular向けの、サーバー主導のページネーション、フィルター、並べ替えを提供する、単体で利用・再利用できるライブラリ。
* [fastgrid-angular](https://github.com/coqsoft/fastgrid-frameworks/tree/main/fastgrid-angular) - COQsoftの[FastGrid](https://www.treegrid.com/FDoc/FastGridAngular.html)とFastSheet用の公式Angularラッパー。

### <a id="dates"></a>日付

* [ngx-date-fns](https://github.com/joanllenas/ngx-date-fns) - Angular用の[Date-fns](https://date-fns.org/)パイプ。
* [ngx-mat-timepicker](https://github.com/tonysamperi/ngx-mat-timepicker) - Materialの時刻選択コンポーネント。
* [mat-datetimepicker](https://github.com/kuhnroyal/mat-datetimepicker) - `@angular/material`用のMaterial日時選択コンポーネント。
* [ngx-multiple-dates](https://github.com/lekhmanrus/ngx-multiple-dates) - Angular Materialを基盤とする、複数の日付を選択するコンポーネント。
* [ng-datetime](https://github.com/ressurectit/ng-datetime) - 日時を扱うコンポーネントを収録するAngularライブラリ。
* [time2blocks-ngx](https://github.com/antonioconselheiro/time2blocks-ngx) - 過去のブロックチェーンのブロックに対応する時刻を特定し、書式を整えるAngularライブラリ。
* [@dhutaryan/ngx-mat-timepicker](https://github.com/dhutaryan/ngx-mat-timepicker) - Material Designを基盤とするMaterial時刻選択コンポーネント。
* [ngx-timeline](https://github.com/omnedia/ngx-timeline) - アニメーション付きタイムラインビューを追加するシンプルなコンポーネントライブラリ。
* [frxjs-Ngx-Timeline](https://github.com/emanuelefricano93/frxjs-Ngx-Timeline) - Angularアプリケーションにタイムラインを組み込むライブラリ。
* [ngx-daterangepicker-pro](https://github.com/Abhinavgaur01/ngx-daterangepicker-pro-demo) - Angular 17以降と[Day.js](https://github.com/iamkun/dayjs)を使う、カスタマイズ可能なAngular日付範囲選択コンポーネント。
* [ngx-custom-daterangepicker](https://github.com/nedpuganti/ngx-custom-daterangepicker) - 設定項目と高度な機能を備え、簡単に組み込めるAngular Material日付範囲選択コンポーネント。
* [angular-material-jalali-datepicker-adapter](https://github.com/aliqb/angular-material-jalali-datepicker-adapter) - Angular Materialの日付選択コンポーネントに、ジャラリ暦（ペルシャ暦・太陽ヒジュラ暦・シャムシ暦）のアダプターを提供する、Angularライブラリ。
* [date-interceptors](https://github.com/AdaskoTheBeAsT/date-interceptors) - JSONペイロードの日付文字列をネイティブのDateオブジェクトへ、期間文字列をDurationオブジェクトへ、それぞれ変換するライブラリ。
* [ngx-vertical-timeline](https://github.com/callyafiune/ngx-vertical-timeline) - レスポンシブな縦型タイムラインを作成するAngularコンポーネント。
* [ngx-timeago](https://github.com/ihym/ngx-timeago) - Angularでタイムスタンプを動的に描画する機能。
* [ngx-chronica](https://github.com/klajdm/ngx-chronica) - 6種類の専用日付・時刻選択コンポーネントを提供するAngularライブラリ。
* [ngx-mat-multi-date-picker](https://github.com/ali79heidari/ngx-mat-multi-date-picker) - グレゴリオ暦、ジャラリ暦（ペルシャ暦）、ヒジュラ暦（イスラム暦）の日付選択コンポーネントを提供するスタンドアロンAngularライブラリ。
* [date-time-picker](https://github.com/danielmoncada/date-time-picker) - Angular日時選択コンポーネント。
* [date-time-picker-moment-adapter](https://github.com/danielmoncada/date-time-picker-moment-adapter) - `@danielmoncada/date-time-picker`用のMoment.jsアダプター。
* [hijri-date-time-picker](https://github.com/hanygamal72/hijri-date-time-picker) - Umm Al-Qura暦を使う、グレゴリオ暦・ヒジュラ暦の両方に対応するスタンドアロンAngular日時選択コンポーネント。
* [ng-laydate](https://github.com/lanxuexing/ng-laydate) - Angular 18以降向けの、シンプルな日時選択コンポーネント。
* [lifecycle-timeline](https://github.com/ericreboisson/lifecycle-timeline) - 製品ライフサイクルの段階を可視化する、素のJavaScriptの対話型コンポーネント。Angular連携ガイドも含む。
* [weekly-availability-picker](https://github.com/squareetlabs/weekly-availability-picker) - ドラッグとサイズ変更に対応する、週間の空き時間を選択するスタンドアロンAngularコンポーネント。
* [ng-date-hour-range-selector](https://github.com/deciosfernandes/ng-date-hour-range-selector) - Angular CDK Overlayを基盤とする、柔軟な日付・日時範囲選択コンポーネント。

### <a id="directives"></a>ディレクティブ

* [ng-click-outside](https://github.com/Kr0san89/ng-click-outside) - 要素の外側のクリックイベントを処理するAngularディレクティブ。
* [ng-for-track-by-property](https://github.com/nigrosimone/ng-for-track-by-property) - 厳密な型チェックを備えた、Angularのグローバルな`trackBy`プロパティディレクティブ。
* [ng-let](https://github.com/nigrosimone/ng-let) - HTMLコンポーネントテンプレート内で、ローカル変数としてデータを共有する構造ディレクティブ。
* [ngx-app-version](https://github.com/Celtian/ngx-app-version) - DOMにバージョンを書き込むAngularディレクティブ。
* [ngx-clamp](https://github.com/Chitova263/ngx-clamp) - 複数行や高さに基づいてテキストを切り詰めるAngularディレクティブ。旧式のブラウザーにも対応する。
* [ngx-copypaste](https://github.com/JsDaddy/ngx-copypaste) - Angularの純粋なコピー＆ペースト用ディレクティブ。
* [ngx-copy-to-clipboard](https://github.com/andreasnicolaou/ngx-copy-to-clipboard) - クリック1回で簡単にテキストをクリップボードへコピーするAngularディレクティブ。成功・エラーメッセージをカスタマイズでき、コピー時にイベントを発生させる。
* [ngx-cut](https://github.com/Celtian/ngx-cut) - レスポンシブな設定項目を持つ、テキストを切り詰めるAngularディレクティブ。
* [ngx-fixed-footer](https://github.com/Celtian/ngx-fixed-footer) - 重なりを生じさせず固定フッターを追加するAngularディレクティブ。
* [ngx-if-platform](https://github.com/Celtian/ngx-if-platform) - プラットフォームに応じて条件付き表示を行うディレクティブ。
* [ngx-memoize](https://github.com/ali79heidari/ngx-memoize) - Angularクラスのメソッドをメモ化し、テンプレートからの繰り返し呼び出しの負荷を取り除いて性能を改善する、軽量で依存パッケージ不要のデコレーター。
* [ngx-nullable](https://github.com/Celtian/ngx-nullable) - Angularテンプレート内のプロパティを、nullを許容する型として扱うためのライブラリ。
* [ngx-overflow-reveal](https://github.com/hosembafer/ngx-overflow-reveal) - 切り詰められたテキストを、ホバー時に表示するAngularディレクティブ。
* [ngx-repeat](https://github.com/Celtian/ngx-repeat) - 指定した回数でHTML要素を繰り返すAngularディレクティブ。
* [ngx-speech-button](https://github.com/JayChase/ngx-speech-button) - 最小限の設定で音声入力を行うための、使いやすいWeb Speech APIラッパーを提供するAngularディレクティブ。
* [ngxsmk-button-spinner](https://github.com/toozuuu/ngxsmk-button-spinner) - 任意のボタン内のインライン位置や中央に読み込みスピナーを表示する、Angular 17以降向けディレクティブ。
* [ngxture](https://github.com/gianpierreVelasquez/ngxture) - すぐに使えるアニメーションとジェスチャーのディレクティブを提供する、軽量でモジュール式のAngularライブラリ。
* [@maxime1jacquet/npm-directives](https://github.com/maxime1jacquet/npm-directives) - [ngx-cursor](https://www.npmjs.com/package/ngx-cursor)と[ngx-simple-countdown](https://www.npmjs.com/package/ngx-simple-countdown)を含むAngularディレクティブ群。
* [ngx-mat-menu-hover](https://github.com/Gamekohl/ngx-mat-menu-hover) - ホバーするとメニューを開き、マウスが離れると閉じる動作を提供するAngularディレクティブ。
* [ngx-highlight](https://github.com/SynTronic/ngx-highlight) - [CSS Custom Highlight API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API)を基盤として、テキスト内で検索に一致した箇所を強調表示するAngularディレクティブ群。
* [ngx-liquid-glass](https://github.com/anushsharma27/ngx-liquid-glass) - Appleを参考にしたリキッドグラス効果を提供するAngularディレクティブ。DOMに基づく屈折と、設定可能な縁を備える。
* [ngx-digits-only](https://github.com/Sepehr-Aghdasi/ngx-digits-only/tree/master/projects/digits-only) - 数字の入力制限、書式設定、検証を行うAngular入力用ディレクティブ。`ngx-mask`などのマスキングライブラリ全体を導入せずに利用できる。

### DOM

* [ngx-resize-observer](https://github.com/fidian/ngx-resize-observer) - 要素のサイズ変更を検出する、Angular 8以降用モジュール。
* [ngx-mutation-observer](https://github.com/fidian/ngx-mutation-observer) - DOM内の要素が変更されるとイベントを発生させる、Angular 8以降用の機能。
* [ngx-visibility](https://github.com/fidian/ngx-visibility) - IntersectionObserverで、要素が表示されるタイミングを検出するAngularモジュール。
* [ngx-fade](https://github.com/omnedia/ngx-fade) - Intersection Observer APIで、ビューポートに応じた滑らかなフェード・スライドの遷移を行うAngularコンポーネント。
* [ngx-dynamic-hooks](https://github.com/MTobisch/ngx-dynamic-hooks) - セレクターや任意のパターンに基づき、動的な文字列に動作するAngularコンポーネントを自動挿入し、結果をDOMに描画する機能。
* [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs) - 言語を自動検出してコードを即座に強調表示する、使いやすいツール。
* [ngx-sharebuttons](https://github.com/MurhafSousli/ngx-sharebuttons) - Angularの共有ボタン。
* [ng-helpers](https://github.com/Jaspero/ng-helpers) - 便利なAngularコンポーネント、ディレクティブ、パイプのコレクション。
* [ngx-ellipsis](https://github.com/lentschi/ngx-ellipsis) - Angular 9以降向けの、省略記号付き複数行テキスト。
* [ng-gd](https://github.com/luisalejandrofigueredo/ng-gd) - マウスやタブレットのイベントに対応し、canvas要素を簡単に管理する機能。
* [ngx-annotate-text](https://github.com/philenius/ngx-annotate-text) - テキストの可視化と注釈を行うAngularライブラリ。固有表現認識や品詞タグ付けなどに向く。
* [ng-dynamic-component](https://github.com/gund/ng-dynamic-component) - 入力・出力のライフサイクルに全面的に対応する、Angularの動的コンポーネント。
* [ngx-optimus](https://github.com/Bilal-Abubakari/ngx-optimus) - データの書式設定を簡潔にし、コンポーネントのロジックを明確にする独自のパイプを提供するAngularライブラリ。
* [ng-lock](https://github.com/nigrosimone/ng-lock) - タスク実行中に関数とユーザーインターフェースをロックするAngularデコレーター。
* [angular-paginator](https://github.com/sibiraj-s/angular-paginator) - Angularアプリケーション用のページネーションコンポーネント。
* [ngx-signal-combinators](https://github.com/alessiopelliccione/ngx-signal-combinators) - リアクティブなテンプレートのロジックを明確にする、組み合わせ可能なAngularシグナル用真偽値ヘルパー群。
* [viewport-truth](https://github.com/AntonVoronezh/viewport-truth) - VisualViewportを中心とする、正確なCSSピクセル単位のビューポートサイズ用の小さなストア。仮想キーボードを検出し、サイズ変更・スクロールの揺れを減らし、複数のフレームワークでSSRに対応する。
* [angular-inport](https://github.com/ajaysinghj8/angular-inport) - Angularのビューポート内検出機能。

### <a id="drag-and-drop"></a>ドラッグ＆ドロップ

* [Angularの公式ドキュメント](https://angular.dev/guide/drag-drop)
* [ngx-drag-drop](https://github.com/reppners/ngx-drag-drop) - ネイティブのHTML Drag and Drop APIを使うAngularディレクティブ群。
* [@hackingharold/ngx-dropzone](https://github.com/hackingharold/ngx-dropzone) - Angular Material用のファイル入力コンポーネント。
* [ng-dnd](https://github.com/ng-dnd/ng-dnd) - Angularのドラッグ＆ドロップ機能。
* [angular-drag-drop-layout](https://github.com/skutam/angular-drag-drop-layout) - ドラッグ＆ドロップ付きの、高度にカスタマイズ可能でレスポンシブなグリッドレイアウトを作る、軽量で依存パッケージ不要のAngularライブラリ。
* [ngx-swapy](https://github.com/omnedia/ngx-swapy) - [Swapy](https://github.com/TahaSh/swapy)でDOMのドラッグ＆ドロップを実現する、シンプルなコンポーネントライブラリ。
* [ngx-draggable-dom](https://github.com/bmartinson/ngx-draggable-dom) - 任意の要素をドラッグ可能にするAngular属性ディレクティブ。
* [ngx-drag-resize](https://github.com/dmytro-parfenov/ngx-drag-resize) - HTML要素にドラッグとサイズ変更を追加するディレクティブ群を提供するAngularライブラリ。
* [ng-keyboard-sort](https://github.com/johnhwhite/ng-keyboard-sort) - CDKによるドラッグ＆ドロップの並べ替えを使う要素へ、キーボードコマンドを追加するライブラリ。
* [angular-mixed-cdk-drag-drop](https://github.com/rosejoe47/angular-mixed-cdk-drag-drop) - Angular CDKで、向きが混在するドラッグ＆ドロップに対応するAngularディレクティブ。
* [cdk-drag-snap-to-point](https://github.com/shhdharmen/cdk-drag-snap-to-point) - 特定の位置だけにドロップできるようにする、cdkDrag機能のデモ。
* [ngx-puzzle](https://github.com/zhongmiao-org/ngx-puzzle) - Angularアプリケーション用の、ドラッグ＆ドロップのダッシュボードビルダー。
* [ngx-drag-drop-kit](https://github.com/mr-samani/ngx-drag-drop-kit) - グリッドレイアウト、並べ替え、サイズ変更、入れ子などを備えた、高性能なAngularドラッグ＆ドロップツールキット。
* [ngx-dashboard](https://github.com/TobyBackstrom/ngx-dashboard) - サイズ変更可能なセルとカスタマイズ可能なウィジェットで、ドラッグ＆ドロップのグリッド型ダッシュボードを構築する、現代的なAngularワークスペース。
* [ngx-dropzone-next](https://github.com/arturovt/ngx-dropzone-next) - 固定原文で、保守され、バグ修正とより新しいAngularバージョンへの対応を提供するとされる、`@peterfreeman/ngx-dropzone`のフォーク。

### <a id="editors"></a>エディター

* [Angular-JSON-Tree-Editor-Component](https://github.com/stefonalfaro/Angular-JSON-Tree-Editor-Component) - Angular JSONツリーエディターコンポーネント。
* [@acrodata/code-editor](https://github.com/acrodata/code-editor) - Angular用のCodeMirror 6ラッパー。
* [angular2-froala-wysiwyg](https://github.com/froala/angular-froala-wysiwyg) - Froala WYSIWYG HTML EditorのAngularラッパー。
* [ckeditor](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/frameworks/angular.html) - Angular用プラグイン。
* [domternal](https://github.com/domternal/domternal) - Angular向けのコンポーネント（シグナル、OnPush、スタンドアロン）、内蔵ツールバーとテーマ、全面的な表対応を備えた、軽量で拡張可能なリッチテキストエディターツールキット。
* [ngx-aztreya-editor](https://github.com/aztreya/ngx-aztreya-editor) - 内蔵ツールバー、見出し、テキスト書式、配置設定を備えた、軽量でカスタマイズ可能なAngularリッチテキストエディターコンポーネント。
* [ngx-simple-text-editor](https://github.com/Raiper34/ngx-simple-text-editor) - Angular 9以降向けに実装された、シンプルなテキストエディターコンポーネントのNgx Simple Text editor（ST editor）。
* [ngx-quill](https://github.com/KillerCodeMonkey/ngx-quill) - Quill Rich Text EditorのAngularコンポーネント群。
* [@sibiraj-s/ngx-editor](https://github.com/sibiraj-s/ngx-editor) - ProseMirrorを使うAngularリッチテキストエディター。
* [@bobbyquantum/ngx-editor](https://github.com/bobbyquantum/ngx-editor) - Angular 21以降用の、`sibiraj-s/ngx-editor`のフォーク。
* [ngx-wig](https://github.com/stevermeister/ngx-wig) - Angular用のWYSIWYG HTMLリッチテキストエディター。
* [ngx-property-editor](https://github.com/heinerwalter/ngx-property-editor) - シンプルな入力コンポーネントと、任意のオブジェクトの全プロパティを編集するフォームを自動作成するプロパティエディターを含むAngularライブラリ。
* [ngx-tiptap](https://github.com/sibiraj-s/ngx-tiptap) - [tiptap v2](https://tiptap.dev/)のAngularバインディング。
* [tinymce-angular](https://github.com/tinymce/tinymce-angular) - 公式[TinyMCE](https://www.tiny.cloud/) Angularコンポーネント。
* [slate-angular](https://github.com/worktile/slate-angular) - [Slate](https://github.com/ianstormtaylor/slate)のAngular表示層。
* [ngx-jodit](https://github.com/julianpoemp/ngx-jodit/) - [Jodit](https://github.com/xdan/jodit) WYSIWYGエディターのAngularラッパー。
* [ngx-tinymce](https://github.com/cipchk/ngx-tinymce) - Angularで構築された`TinyMCE`コンポーネント群。
* [MagnetarQuill](https://github.com/scherenhaenden/MagnetarQuill) - プラグイン式の構造で、リッチテキスト、メディア、表を扱う、拡張可能なAngular WYSIWYGエディター。
* [ngx-editorjs2](https://github.com/Ba5ik7/ngx-editorjs2) - [Editor.js](https://editorjs.io/)を参考に設計された、カスタマイズ可能なブロックとAngularのリアクティブ機能を持つ拡張可能なブロックエディター。[ngx-editor-js2-blocks](https://github.com/Ba5ik7/ngx-editor-js2-blocks)で独自のコンテンツ型への対応を追加できる。
* [ngx-traak](https://github.com/mouhamadalmounayar/ngx-traak) - ProseMirrorを基盤とし、スタンドアロンコンポーネント用に構築されたAngular WYSIWYGエディターライブラリ。プラグインで高度にカスタマイズできる。
* [ngx-summernote](https://github.com/lula/ngx-summernote) - Angular用の[Summernote](https://github.com/summernote/summernote)エディター。
* [angular-rich-text-editor](https://github.com/manishpatidar028/angular-rich-text-editor) - ライセンスキーと`ControlValueAccessor`への対応を備えた、[RichTextEditor](https://richtexteditor.com/)のAngularラッパー。
* [armor-editor](https://github.com/technicults/armor-editor) - Angularアプリケーションに組み込むための、プレミアム機能を備えた軽量リッチテキストエディター。固定原文では安全とされる。
* [ngx-workflow](https://github.com/abdulkyume/ngx-workflow) - 対話的なノード式のエディター、フローチャート、図を構築する、カスタマイズ可能なAngularライブラリ。
* [contentful-rich-text-angular-renderer](https://github.com/flowup/contentful-rich-text-angular-renderer) - Contentful Rich TextのAngularレンダラー。Angularテンプレートで、ノードとマークの描画をカスタマイズできる。
* [Monaco Pattern Editor](https://github.com/KhlifiIsmail/Editor) - テーマとコーディング面接の準備機能を備えた、Monaco EditorのプレミアムAngularラッパーライブラリ。
* [angular-editor](https://github.com/kolkov/angular-editor) - Angular向けに実装されたシンプルなWYSIWYGエディターコンポーネント。
* [ngx-json-editor](https://github.com/RonnyValdivieso/ngx-json-editor) - 最小限の構成でテーマ設定可能なAngular JSONエディター。
* [ngx-ace-signal](https://github.com/WebArtWork/ngx-ace-signal) - 現代的なAngularシグナル方式のAceエディターラッパー。
* [ngx-rwriter](https://github.com/ReiAg/ngx-rwriter) - Angular 21以降向けの現代的なリッチテキストエディターコンポーネント。画像、配置、リスト、色選択、翻訳への対応を内蔵する。
* [ngx-pro-editor](https://github.com/ChauhanShubham8758/ngx-pro-editor) - 自動保存、特殊文字、高度な書式設定を備えた、高機能なAngular WYSIWYGエディター。
* [dragble-angular-editor](https://github.com/Dragble/dragble-angular-editor) - デザイナーが使いやすい視覚的エディターと、AIによる対話インターフェースを組み合わせた、2つのモードを持つAngularコンポーネント。
* [ngx-email-studio](https://github.com/edward124689/ngx-email-studio) - レスポンシブなメールテンプレートの作成、読み込み、編集、プレビュー、書き出しを行う、Angular 21のフロントエンドメールビルダー。
* [qalma](https://github.com/cdskill/qalma) - ProseMirrorを基盤とし、Angularでの利用を中心に設計されたヘッドレスのリッチテキストエディターツールキット。
* [ngx-mermaid-canvas](https://github.com/Nigelli/ngx-mermaid-canvas) - Mermaid構文を出力する、Angular用の視覚的なフローチャートエディター。
* [@bloklabs/angular](https://github.com/JackUait/blok) - HTMLの代わりにJSONを出力する、ヘッドレスでブロック式のリッチテキストエディター[Blok](https://blokeditor.com)のAngularアダプター。
* [angular-tiptap-editor](https://github.com/FloGeez/angular-tiptap-editor) - Tiptapで構築された、現代的でカスタマイズ可能なAngularリッチテキストエディター。
* [ngx-richtext](https://github.com/eliranbar/ng-rich-text-editor) - 無料とプレミアムの機能プランを備えたリッチテキストエディター。
* [ngx-image-editor](https://github.com/eliranbar/ngx-edit-images) - 永久無料プランと、オフラインのEd25519ライセンス認証を使うプレミアムツールを備えた、画像エディター。
* [Scryb](https://scryb.dev/) - Tiptapを基盤とする、月額39ドルの定額TypeScript WYSIWYGエディター。読み込み、エンドユーザー、文書の数は無制限。
* [nge-ide](https://github.com/cisstech/nge-ide) - 1つの`<ide-root />`コンポーネントで、Angularアプリケーションに完全なデスクトップエディターのシェルを埋め込むNGE IDE。

### <a id="file-upload"></a>ファイルアップロード

* [ng2-file-upload](https://github.com/valor-software/ng2-file-upload) - 使いやすいファイルアップロード用ディレクティブ群。
* [ngx-flow](https://github.com/flowjs/ngx-flow) - ファイルアップロード用の[flow.js](https://github.com/flowjs/flow.js)をAngular 7以降で利用するラッパー。
* [ngx-uploadx](https://github.com/kukhariev/ngx-uploadx) - 中断したアップロードを再開できるAngularモジュール。
* [file-upload](https://github.com/pIvan/file-upload) - ファイルのアップロードに使うAngularモジュール。
* [@georgipeltekov/ngx-file-drop](https://github.com/georgipeltekov/ngx-file-drop) - デスクトップのファイルやフォルダーを簡単にドラッグ＆ドロップするAngularモジュール。rxjs-compatを必要としない。
* [Uppy](https://github.com/transloadit/uppy) - [Angularと連携する](https://uppy.io/docs/angular/)、モジュール式JavaScriptファイルアップローダー。
* [ngx-custom-material-file-input](https://github.com/daemons88/ngx-custom-material-file-input) - Angular Materialのファイル入力管理。
* [ngx-file-preview](https://github.com/wh131462/ngx-file-preview) - 多くのファイル形式に対応するプレビューツール。
* [ngx-file-helpers](https://github.com/fvilers/ngx-file-helpers) - ファイル選択とドロップゾーンを含むAngularファイル用ヘルパー群。
* [ngx-file-uploader](https://github.com/uniprank/ngx-file-uploader) - ファイルプレビューを内蔵する、Angularアップロード用コンポーネントとディレクティブ群。
* [file-uploader](https://github.com/uploadcare/file-uploader) - Web Components方式のファイルアップロードウィジェット。React、Next.js、Vue、Angular、Svelteなど、任意のJavaScriptフレームワークでアダプターなしに利用できる。
* [ngx-accessible-dropzone](https://github.com/mahmoudQq2023/ngx-accessible-dropzone) - キーボードとスクリーンリーダーに対応し、アクセシビリティを全面的に備えた、小さく依存パッケージ不要のAngularドラッグ＆ドロップファイルアップロードコンポーネント。
* [@h-k-dev/angular-file-drop](https://github.com/h-k-dev/angular-file-drop) - ファイルとフォルダーの巡回、絞り込み、クリックによる選択を備えた、軽量なAngularドラッグ＆ドロップ用ディレクティブ。スタイルシート、XHR、DOMの変更を必要としない。
* [upup](https://github.com/DevinoSolutions/upup) - 6つの主要なフロントエンドフレームワークで、バイト単位で同一のUIパッケージを提供するヘッドレスのアップロードエンジン。サーバーモード、クラウドドライブ、複数のソースからのメディア読み込みに対応する。

### <a id="forms"></a>フォーム

* [ngx-mask](https://github.com/JsDaddy/ngx-mask) - AngularのフォームフィールドとHTML要素にマスクを適用するプラグイン。
* [maskito](https://github.com/taiga-family/maskito) - 事前に定めた形式で値が入力されるようにする入力マスクを作成するライブラリ群。
* [ng-signal-forms](https://github.com/timdeschryver/ng-signal-forms) - シグナルで動作するAngularフォーム。
* [ngx-sub-form](https://github.com/cloudnc/ngx-sub-form) - Angularフォームを複数のコンポーネントに分割するためのユーティリティライブラリ。
* [ngx-currency-v2](https://github.com/gabriel-hawerroth/ngx-currency-v2) - 収録時点の最新Angularバージョン向けに更新された[ngx-currency](https://github.com/nbfontana/ngx-currency)のフォーク。
* [ngx-enhancy-forms](https://github.com/klippa-app/ngx-enhancy-forms) - 見栄えと機能を改善したAngularフォーム。
* [ngx-focus-entities](https://github.com/klee-contrib/ngx-focus-entities) - [TopModel](https://github.com/klee-contrib/topmodel)で生成したFocus4表現から、リアクティブなAngularフォームを生成するライブラリ。
* [@TanStack/form](https://github.com/TanStack/form) - TypeScript対応、ヘッドレスUI、特定のフレームワークに依存しない設計で、複数のフレームワークにわたるフォーム処理を簡潔にする機能。
* [@luistabotelho/angular-signal-forms](https://github.com/luistabotelho/angular-signal-forms) - シグナルでフォームを実装するシンプルなAngularライブラリ。
* [ngx-form-object](https://github.com/infinum/ngx-form-object) - モデルからフォームを生成し、入れ子の関係を管理する、Angularリアクティブフォームの抽象化層。
* [pro-form](https://github.com/ProAngular/pro-form) - Angular Materialを基盤とする、リアクティブで再利用可能な、定義済みのフォーム入力コンポーネント群。
* [ngx-forms](https://github.com/nncl/ngx-forms) - アプリケーションの構築を支援するAngularフォーム関数集。
* [ngxAccessor](https://github.com/Zarlex/ngxAccessor) - 既存の方法と並行してシグナルを柔軟に組み込み、Angularフォームの第3の方式を追加するライブラリ。
* [angular-template-signal-forms](https://github.com/chocosd/angular-template-signal-forms) - シグナルでゼロから構築された現代的なAngularフォームライブラリ。柔軟で型安全かつ全面的にテーマ設定できる。
* [ngx-formidable](https://github.com/Cynthion/ngx-formidable) - 機能豊富で検証付きのフォームを構築する、Angularコンポーネントライブラリ。
* [piying-view](https://github.com/piying-org/piying-view) - `ngx-formly`やAngularの公式フォームフレームワークの代替となる、強く型付けされたフロントエンドのフォーム機能。
* [ngx-form-m3](https://github.com/webilix/ngx-form-m3) - AngularとMaterial 3向けのペルシャ語フォームライブラリ。
* [lite-form](https://github.com/liangk/lite-form) - 検証、スタイル、アニメーションを備えたカスタマイズ可能なフォームコンポーネントを提供する、軽量なAngularライブラリ。
* [cc-form-engine](https://github.com/ChristianCruzArango/cc-form-engine) - リアクティブフォームの生成・管理を行う高度なAngularライブラリ。動的な検証、変更追跡、カスタマイズ可能なエラーメッセージを備える。
* [ngx-vest-forms](https://github.com/ngx-vest-forms/ngx-vest-forms) - Angularのテンプレート駆動フォームを[Vest.js](https://vestjs.dev/)と連携させ、複雑な非同期検証を行う、軽量で型安全なアダプター。
* [ngx-autosave-forms](https://github.com/zinetnorf/ngx-autosave-forms) - Angularのテンプレートフォームやリアクティブフォームの値を、localStorageへ自動保存する機能。
* [ngx-better-forms](https://github.com/Bioroxx/ngx-better-forms) - 簡潔で保守しやすいリアクティブフォーム用ユーティリティ。
* [ngx-query-builder](https://github.com/solidexpert-ltd/ngx-query-builder) - スタンドアロンコンポーネント、適切な既定値、テンプレートのフックを備えたAngularクエリビルダー。特定の分野のエディター向けに、フォームに全面的に対応する。
* [ngx-mat-form](https://github.com/Salromag/ngx-mat-form) - リアクティブフォームとAngular Materialで、スキーマから設定可能なフォームを動的に生成するAngularライブラリ。
* [ng-forge](https://github.com/ng-forge/ng-forge) - Angularのシグナル方式のフォーム向けに構築された、型安全な動的フォームライブラリ。
* [zignal](https://github.com/biyonik/zignal) - シグナルとZodの検証を使う、型安全なAngularフォームライブラリ。トルコ固有の検証と多言語対応を備える。
* [ngx-form-stepper](https://github.com/rayaneriahi/ngx-form-stepper) - 最小限の設定で、開発中に無効な状態を防ぐ、強く型付けされたAngularライブラリ。複数ステップのフォームを構築する。
* [ngx-form-rules](https://github.com/bulbul5391/ngx-form-rules) - シンプルで宣言的なルールでリアクティブフォームのフィールドを有効化・無効化・制御する、軽量なAngularライブラリ。
* [ngx-reactive-forms-utils](https://github.com/pjlamb12/ngx-reactive-forms-utils) - Angularリアクティブフォームの利用を支援するユーティリティ群。
* [ngx-entity-forms](https://github.com/irvrodflo/ngx-entity-form) - エンティティのインターフェースから、完全に型付けされたAngular FormGroupsを生成する機能。自動補完、検証、エラーメッセージを備える。
* [ngx-form-draft](https://github.com/neokyuubi/ngx-form-draft) - 依存パッケージを必要としない、Angularフォームの下書きの自動保存・復元機能。
* [ngx-signal-forms](https://github.com/lorenzomusche/ngx-signal-forms) - 実験的なSignal Forms APIを基盤とし、現代的なM3スタイルを持つ、シグナル駆動で型安全なAngularフォームライブラリ。
* [formsync](https://github.com/sudhucodes/formsync) - サーバー側のコードなしで送信された内容を収集・管理できる、開発者が使いやすいAngular対応フォームバックエンド。
* [@neutro-web/form](https://github.com/neutro-web/form) - 高性能で依存パッケージ不要の、特定のフレームワークに依存しないリアクティブフォームエンジン。
* [forge-form](https://github.com/mspas/forge-form) - 1つのTypeScriptオブジェクトから、リアクティブなシグナル方式のフォーム、検証、条件付きフィールドを生成する機能。
* [NgSimplicityForms](https://github.com/BryanGWalsh/NgSimplicityForms) - 中核の共通APIとBootstrap・Angular Material用の描画パッケージを備えた、組み合わせ可能なAngular動的フォームフレームワーク。
* [ng-modular-forms](https://github.com/ronbodnar/ng-modular-forms) - モジュール式Angularリアクティブフォーム用のコンポーネントを内蔵する、軽量なアーキテクチャ層。
* [ngx-form-signals](https://github.com/xonaib/ngx-form-signals) - フィールドの状態とフィールド間のルールを管理する、Angular用のヘッドレスでシグナルを基盤とするフォーム連携ライブラリ。コンポーネント、CSS、レイアウト、アダプターを強制しない。

### <a id="form-controls"></a>フォームコントロール

* [ngx-color-picker](https://github.com/zefoy/ngx-color-picker) - 色選択ウィジェット。
* [angular-colorful](https://github.com/ngx-eco/angular-colorful) - 現代的なAngularアプリケーション向けの小さな色選択コンポーネント。
* [ng-select](https://github.com/ng-select/ng-select) - 単一選択、複数選択、自動補完を一体で提供するUI。
* [file-input-accessor](https://github.com/jwelker110/file-input-accessor) - Angularフォームにファイル入力機能を提供するAngularディレクティブ。
* [ngx-filesaver](https://github.com/cipchk/ngx-filesaver) - [FileSaver.js](https://github.com/eligrey/FileSaver.js)を使うシンプルなファイル保存。
* [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating) - Angularのバー形式の評価入力。
* [angular-code-input](https://github.com/AlexMiniApps/angular-code-input) - 数字・文字を入力するAngularコンポーネント。Angular 7〜16以降、Ionic 4〜7、モバイル、クリップボードに対応する。
* [angular-iban](https://github.com/fundsaccess/angular-iban) - Angular用のIBANディレクティブとパイプ。
* [ngx-autosize-input](https://github.com/joshuawwright/ngx-autosize-input) - 入力要素の幅を自動的に縮小・拡大して調整するAngularディレクティブ。
* [angular-cc-library](https://github.com/timofei-iatsenko/angular-cc-library) - クレジットカード入力のマスクと検証に対応するライブラリ。
* [ngx-ui-switch](https://github.com/webcat12345/ngx-ui-switch) - シンプルなiOS 7風Angularスイッチコンポーネント。
* [ngx-otp-input](https://github.com/pkovzz/ngx-otp-input) - Angular用のワンタイムパスワード入力ライブラリ。
* [ngx-show-hide-password](https://github.com/osahner/ngx-show-hide-password) - パスワード・テキスト入力に分割入力ボタンを追加する機能。入力型を「text」と「password」の間で切り替える。
* [ngx-phone-field](https://github.com/alex-mirankov/ngx-phone-field) - 国旗付きドロップダウンを備えた、国際電話番号入力用Angularディレクティブ。リアクティブフォームとテンプレート駆動フォームに対応する。
* [ngx-mat-birthday-input](https://github.com/rbalet/ngx-mat-birthday-input) - 誕生日を入力するAngular Materialライブラリ。
* [ngx-countries-dropdown](https://github.com/kapilkumar0037/ngx-countries-dropdown) - 国旗、国際電話コード、言語、通貨の情報を持つ、カスタマイズ可能な国選択ドロップダウンを提供するAngularライブラリ。
* [ngx-mat-split-button](https://github.com/feature23/ngx-mat-split-button) - 主要な操作と、補助的な選択肢のドロップダウンを備えたAngular Material分割ボタン。
* [ng-select2](https://github.com/Harvest-Dev/ng-select2) - 更新された[select2-component](https://github.com/plantain-00/select2-component)のフォーク。
* [ngx-super-select](https://github.com/HesamKashefi/ngx-super-select) - Angular用の複数選択入力コンポーネント。
* [ngx-super-select-tree](https://github.com/HesamKashefi/ngx-super-select-tree) - Angular用の単一・複数選択ドロップダウンツリー。
* [ngx-mat-table-multi-sort](https://github.com/pgerke/ngx-mat-table-multi-sort) - Angular Materialテーブルに複数条件の並べ替え機能を追加するツール。
* [ng-country-select](https://github.com/wlucha/ng-country-select) - 国旗とコードを備えた、多言語対応のスマートな国検索。
* [ngx-cron](https://github.com/swimlane/ngx-cron) - 使いやすいcron入力。
* [@amirsavand/ngx-input](https://www.npmjs.com/package/@amirsavand/ngx-input) - 入力とフォームの処理を一体で提供するAngularパッケージ。
* [ng-otp-input](https://github.com/code-farmz/ng-otp-input) - Angularで構築された、全面的にカスタマイズ可能なウェブ用ワンタイムパスワード（OTP）入力コンポーネント。
* [rm-ng-star-rating](https://github.com/malikrajat/rm-ng-star-rating) - 正確な星評価とレスポンシブデザインを備えた、全面的にカスタマイズ可能で高機能なスタンドアロンAngularコンポーネント。
* [ngx-animated-paginator](https://github.com/eladbh-stanley/ngx-animated-paginator) - [animated-paginator-web-component](https://www.npmjs.com/package/animated-paginator-web-component)のAngularラッパー。`ControlValueAccessor`でテンプレート駆動フォームとリアクティブフォームの両方へ円滑に組み込める。
* [ngx-input-color](https://github.com/mr-samani/ngx-input-color) - `ngx-input-gradient`と`ngx-input-color`という、色・グラデーション選択用のカスタマイズ可能なAngularコンポーネント。プレビューとフォーム連携を備える。
* [ngx-morse](https://github.com/monkeyscript/ngx-morse) - Angular用のシンプルなモールス符号のエンコーダー・デコーダー。
* [ngxsmk-tel-input](https://github.com/toozuuu/ngxsmk-tel-input) - 国選択ドロップダウン、国旗、検証と書式設定を備えたAngular電話番号入力コンポーネント。
* [gradient-picker](https://github.com/acrodata/gradient-picker) - グラデーション選択コンポーネント。
* [ngxsmk-datepicker](https://github.com/toozuuu/ngxsmk-datepicker) - 現代的で高度にカスタマイズ可能なAngular日付範囲選択コンポーネント。
* [ngx-country-selector](https://github.com/evicio1/ngx-country-selector) - 国旗、コード、現地名などを持つ、アクセシビリティに配慮したドロップダウンを提供する、カスタマイズ可能なAngular Material国選択コンポーネント。
* [@nsnayp1/angular-datepicker2](https://github.com/nsnayp13/angular-datepicker2) - Angular 16以降用の軽量な日付選択コンポーネント。スタンドアロン対応、範囲・複数日選択、カスタマイズ可能なテンプレートを備え、外部の依存パッケージを必要としない。
* [ngx-phone](https://github.com/manishpatidar028/ngx-phone) - 国の自動検出、リアルタイムの書式設定、検証、全面的なフォーム対応を備えたAngular電話番号入力。
* [ngx-phone-country-input](https://github.com/mostafaM212/ngx-phone-country-input) - リアクティブフォームに対応し、電話番号入力と国選択の機能を提供するAngularライブラリ。
* [ngx-mat-period-picker](https://github.com/felixdulfer/ngx-mat-period-picker) - スタンドアロンコンポーネントで構築された、現代的なAngular Material期間選択コンポーネント。
* [touchspin-angular](https://github.com/istvan-ujjmeszaros/touchspin-angular) - 描画方式ごとの対応を備えた、[TouchSpin](https://github.com/istvan-ujjmeszaros/touchspin)数値入力コンポーネントのAngularアダプター。
* [ngx-cron-editor](https://github.com/haavardj/ngx-cron-editor) - リアクティブフォームとの連携とMaterial Designスタイルを備えた、Angular 15以降用の視覚的なcronビルダー。
* [ngx-otp-code-input](https://github.com/Swaraj55/otp-input) - マスク、数字のみの入力、自動フォーカスなど、幅広いカスタマイズ項目を備えたAngular OTP入力コンポーネント。
* [smart-date-input](https://github.com/ngxpert/smart-date-input) - Writer APIで自然言語の日付を解析する、スマートな日付入力ディレクティブ。
* [color-picker](https://github.com/acrodata/color-picker) - 色選択コンポーネント。
* [ngx-pattern-lock](https://github.com/nicotole/ngx-pattern-lock) - 軽量で完全にレスポンシブかつカスタマイズ可能な、Android風のAngularパターンロックコンポーネント。
* [smt-select](https://github.com/sametacar/smt-select) - 仮想スクロールと検索を内蔵する、高性能で軽量かつカスタマイズ可能なAngular選択コンポーネント。
* [ngx-mat-searchable-select](https://github.com/khalilElmouedene/ngx-mat-searchable-select) - 無限スクロール、連続入力をまとめて処理する検索、該当項目なしの通知、静的・モックデータ対応を備えた、再利用可能なAngular Material選択コンポーネント。
* [mat-password-meter](https://github.com/ngx-zen/mat-password-meter) - [zxcvbn](https://github.com/dropbox/zxcvbn)を使う、NISTの方針に沿ったカスタマイズ可能なAngularパスワード強度メーター。
* [nicematic-emoji-picker](https://github.com/myposty/nicematic-emoji-picker) - 929個の絵文字、自動テーマ設定、国際化、レスポンシブデザインを備えた、Angular 17以降向けの高性能で依存パッケージ不要の絵文字選択コンポーネント。
* [ngx-starflow](https://github.com/ahmadfakher/ngx-starflow) - 小数点を含む星評価を正確に表示する、軽量なAngularコンポーネント。
* [combobox](https://github.com/ng-matero/combobox) - 複数選択と自動補完を内蔵し、選択機能を一体で提供するAngular用ツール。
* [BlossomColorPicker](https://github.com/dayflow-js/BlossomColorPicker) - 花が開くように表示するウェブ用色選択コンポーネント。単体のJavaScriptライブラリと、Angular、React、Vue、Svelte向けの軽量ラッパーを提供する。
* [ngx-intl-phone-input](https://github.com/JoaoHenriqueAlmeida/ngx-intl-phone-input) - CDKによる国選択を備えた、アクセシビリティに配慮したヘッドレスのAngular国際電話番号入力。
* [ngx-colors2](https://github.com/DominicWrege/ngx-colors) - Angular 20以降向けに更新された、Material風の色選択コンポーネント。シグナルを使い、アニメーション用の依存パッケージを必要としない。
* [ngx-signal-datetimepicker](https://github.com/dominikmodrzejewski99/ngx-signal-datetimepicker) - Signal Formsを基盤とするAngular日時選択コンポーネント。1つのコントロールで日付と時刻を扱い、依存パッケージ不要で、標準でWCAG 2.2 AAAに対応する。
* [ngx-multi-field-dropdown](https://github.com/luismtapiab/ngx-multi-field-dropdown) - 複数フィールドの検索に対応する、カスタマイズ可能なAngular検索付きドロップダウンコンポーネント。
* [angular-multiselect-dropdown](https://github.com/alexandroit/angular-multiselect-dropdown) - テンプレート駆動フォームとリアクティブフォーム向けに構築された、保守されているAngular複数選択ドロップダウン。
* [@koenz/angular-datepicker](https://github.com/koenz/angular-datepicker) - Angular 21以降用のアニメーション付き日付選択コンポーネント。
* [ngx-dual-rangepicker](https://github.com/olivierpetitjean/ngx-dual-rangepicker) - Angular 20以降とAngular Material M3向けの、2つのカレンダーを使う日付範囲選択コンポーネント。
* [ngx-libs-workspace](https://github.com/dineeek/ngx-libs-workspace) - Signal Formsを基盤とする、小規模なリアクティブフォームのコントロール群。CSSカスタムプロパティで変更でき、Angular Material、Angular CDK、`ControlValueAccessor`を使わない。
* [@some-angular-utils/date-range-picker](https://github.com/some-angular-utils/date-range-picker) - リアクティブフォームへ直接組み込める日付範囲選択コンポーネント。

### <a id="json-forms"></a>JSONフォーム

* [ngx-formly](https://github.com/ngx-formly/ngx-formly) - JSONを使うAngular動的フォーム。
* [formio](https://github.com/formio/angular) - JSONを使うAngularフォーム。
* [fluent-form](https://github.com/fluent-form/fluent-form) - メソッドを連鎖できるFluent APIやJSONで、Angularの動的フォームを構築する機能。
* [jsonforms](https://github.com/eclipsesource/jsonforms) - React、Angular、Vueに標準で対応する、カスタマイズ可能なJSON Schema方式のフォーム。
* [jsonforms-angular-seed](https://github.com/eclipsesource/jsonforms-angular-seed) - Angularを基盤とするJSON Formsのひな型アプリケーション。
* [ng-formworks](https://github.com/zahmo/ng-formworks) - Angular用の[JSON Schema](https://json-schema.org/)フォームビルダー。[Angular Schema Form](http://schemaform.io/examples/bootstrap-example.html)、[React JSON Schema Form](https://rjsf-team.github.io/react-jsonschema-form/)、[JSON Form](https://ulion.github.io/jsonform/playground/)に似ており、APIの多くに互換性がある。
* [DynamicAngularForm](https://github.com/Brrake/DynamicAngularForm) - 対応する値を含むJSONを渡して、動的フォームを作成する機能。
* [dynamic-forms](https://github.com/dynamic-forms/dynamic-forms) - JSONに基づく動的フォーム用のAngularプロジェクト。
* [json-forms-zorro-wrapper](https://github.com/wojtek1150/json-forms-zorro-wrapper) - JSON FormsライブラリをNg Zorroで扱うラッパー。
* [ngx-formwork](https://github.com/TheNordicOne/ngx-formwork) - JSONやTypeScriptの設定から構築する、Angularリアクティブフォーム用フレームワーク。
* [ngx-formbar](https://github.com/TheNordicOne/ngx-formbar) - 宣言的なリアクティブフォームを生成する、柔軟性の高いフレームワーク。
* [formitiva](https://github.com/formitiva/formitiva-monorepo) - JSONスキーマからフォームを構築する、特定のフレームワークに依存しない実行時フォームエンジン。
* [filter](https://github.com/some-angular-utils/filter) - フィールドを一度定義すると、検索のたびにそのまま使えるJSONオブジェクトとURLクエリ文字列を取得できる機能。
* [ngx-json-forms](https://github.com/Raghav-Pal-dev/ngx-json-forms) - テンプレート不要でJSONから動作するAngularフォームエンジン。40種類を超えるフィールド型、高度な検証、条件付きロジック、ウィザード、繰り返し入力を備える。

### <a id="form-validation"></a>フォーム検証

* [ngx-valdemort](https://github.com/Ninja-Squad/ngx-valdemort) - シンプルで明確なAngular検証エラーメッセージ。
* [validointi](https://github.com/validointi/validointi) - テンプレート駆動フォームの検証を支援するライブラリ。
* [angular-reactive-validation](https://github.com/davidwalschots/angular-reactive-validation) - 大量のHTMLを不要にして、リアクティブフォームの検証を簡潔にするライブラリ。
* [ngx-formcontrol-errors](https://github.com/dgonzalez870/ngx-formcontrol-errors) - Angularフォームコントロールのエラーを表示するディレクティブ。
* [ngx-validator-pack](https://github.com/dynimorius/ngx-validator-pack) - 簡単に利用でき、素早くカスタマイズできるように設計された検証関数集。
* [ngx-reactive-form-class-validator](https://github.com/abarghoud/ngx-reactive-form-class-validator) - [class-validator](https://github.com/typestack/class-validator)で、Angularリアクティブフォームを動的に検証する軽量なライブラリ。
* [ng-error-tooltips](https://github.com/mkeller1992/ng-error-tooltips) - 使いやすい検証メッセージとしてエラーのツールチップを表示する、Angularリアクティブフォーム用ライブラリ。
* [ng-reactive-form-validate](https://github.com/vbnr/ng-reactive-form-validate) - カスタマイズ可能なメッセージ、Translocoとの連携、スタイル付きのエラーラベルで、フォームの検証を簡潔にするAngularライブラリ。
* [angular-password-checker](https://github.com/akehir/angular-password-checker) - 漏えいが知られているパスワードの再利用からユーザーを保護する、シンプルなAngularディレクティブ。
* [translation-validation](https://github.com/RiskChallenger/translation-validation) - 任意の言語でAngularフォームの検証メッセージを自動表示する機能。
* [polish-validators](https://github.com/joker876/polish-validators) - ポーランド固有の形式用に設計された検証ライブラリ。Angularラッパーの[ngx-polish-validators](https://www.npmjs.com/package/ngx-polish-validators)も提供する。
* [ngx-mat-errors](https://github.com/Totati/ngx-mat-errors) - `MatFormField`内にエラーメッセージを表示する、シンプルで柔軟な方法を提供するツール。
* [oop-validator](https://github.com/visaruruqi/oop-validator) - Vue、React、AngularなどのUIフレームワーク向けの、柔軟な検証ライブラリ。フロントエンドの検証に全面的に対応する。
* [ngx-cross-field-validation](https://github.com/soc221b/ngx-cross-field-validation) - フォームコントロールに、条件付き、等値、不等値、順序に基づく検証を提供するAngularライブラリ。
* [validauth](https://github.com/adiksuu/validauth) - JavaScriptアプリケーション用の、軽量な認証用検証関数群。
* [ngx-validation-messages](https://github.com/lagoshny/ngx-validation-messages) - 1つのコンポーネントで、フォームの検証メッセージの表示を簡潔にするモジュール。
* [ngx-validx](https://github.com/EngYouniss/ngx-validx-package) - Angularフォームの検証エラーを自動処理する、軽量で高性能なライブラリ。
* [kits-ngx-validation-package](https://github.com/EngYouniss/kits-ngx-validation-package/tree/main/projects/kits-ngx-validation) - 状態管理、メッセージ、表示方法、ローカライズ、再利用可能なフォームフィールドを含む、一元化された検証システム。

### <a id="icons"></a>アイコン

* [angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome) - Font Awesome 5以降の公式Angularコンポーネント。
* [ng-icons](https://github.com/ng-icons/ng-icons) - Angular用アイコンライブラリ。
* [angular-svg-icon](https://github.com/czeckd/angular-svg-icon) - SVGをインラインで配置し、CSSで簡単にスタイル設定できるAngularコンポーネントとサービス。
* [ng-hero-icons](https://github.com/dimaslz/ng-heroicons) - Angularアプリケーションで[Heroicons](https://heroicons.com)を利用する機能。
* [ngx-fluent-ui](https://github.com/bennymeg/ngx-fluent-ui) - Microsoft Fluent UIアイコン用のAngular・オンラインライブラリ。
* [angular-line-awesome](https://github.com/marco-martins/angular-line-awesome) - [Line Awesome](https://icons8.com/line-awesome)のアイコンを管理するAngularコンポーネント、Angular Line Awesome。
* [angular-techs-logos](https://github.com/criar-art/angular-techs-logos) - 技術関連のアイコンライブラリ。
* [ngx-x-browser-svg-mask](https://github.com/bmartinson/ngx-x-browser-svg-mask) - SVGマスクの作成時に、複数ブラウザー間の互換性を簡単に確保するディレクティブ。
* [Semantic Icons](https://github.com/khalilou88/semantic-icons) - コンポーネントセレクターやSVGタグで利用する、無料でオープンソースのAngular用アイコン集。
* [coolshapes](https://github.com/ngxpert/coolshapes) - [coolshapes](https://coolshap.es/)の、細かな粒状のグラデーションを持つ見栄えのよい抽象図形を使うためのAngularライブラリ。
* [lucide](https://github.com/lucide-icons/lucide) - 1,000以上のSVGを収録するオープンソースのアイコンライブラリ。簡単に組み込める[公式Angularパッケージ](https://lucide.dev/guide/packages/lucide-angular)を提供する。
* [@ngverse/icons](https://github.com/ngverse/icons) - 広く使われているオープンソースのアイコンを、通常のコンポーネントとして利用するAngularライブラリ。
* [ngxi](https://github.com/adrian-ub/ngxi) - 数千の広く使われているアイコンを組み込めるAngular用SVGアイコン集。
* [animated-icons](https://github.com/ajitzero/animated-icons) - [moving icons](https://www.movingicons.dev/)を基盤とするAngularアニメーションアイコン。
* [@hugeicons/angular](https://github.com/hugeicons/hugeicons/tree/main/packages/angular) - MITライセンスの無料アイコンを5,400以上収録する、Angular用の丸みのある線画アイコン。
* [@quikturn-sdk/logos-angular](https://github.com/quikturn-sdk/Company-Logos) - [Quikturn Logos API](https://getquikturn.io/)のTypeScript SDK。ドメイン名から任意の企業のロゴを取得する。
* [GeoIcons](https://geoicons.io) - 各国、領土、世界の地域の地図アイコンを提供する、ツリーシェイキング対応のAngularスタンドアロンコンポーネント。
* [ngx-iconify-stack](https://github.com/WanderleeDev/ngx-iconify-stack) - 軽量でSSR対応の[Iconify](https://iconify.design/) Angularラッパー。
* [vadivam](https://github.com/praveenjuge/vadivam) - SVG、React、React Native、Vue、Svelte、Solid、Angular、Astro、Preact向けの、ピクセルに合わせた24pxアウトラインアイコン。
* [ycon.cc](https://ycon.cc) - 30万以上のIconifyアイコンを検索し、React、Vue、Symfony、Next.js、Astro、Svelte、Angular、Laravelなどの、そのまま使えるコードをコピーするツール。

### <a id="images"></a>画像

* [cloudinary](https://cloudinary.com/documentation/angular_integration) - CloudinaryのAngular SDK。
* [ng-cropper](https://github.com/DanielGabbay/ng-cropper) - `CropperJS`を基盤とするAngular画像切り抜きコンポーネント。カスタマイズ可能なインターフェースと、必要に応じて使えるツールバーで、円滑に切り抜きを行う。
* [ngx-advanced-img](https://github.com/bmartinson/ngx-advanced-img) - HTMLのimg要素の機能を各種拡張する、Angular属性ディレクティブ群。
* [ngx-avatars](https://github.com/Heatmanofurioso/ngx-avatars) - [ngx-avatar](https://github.com/HaithemMosbahi/ngx-avatar)の精神的な後継。
* [ngx-broken-img](https://github.com/andreagrossetti/ngx-broken-img) - 画像URLが404を返すと、imgのsrcにプレースホルダーを設定して、無効な画像URLに対処するAngularディレクティブ。
* [ngx-image-compression](https://github.com/ShreyashThorat-17/ngx-image-compression) - Angular用の軽量な画像圧縮・変換ライブラリ。
* [ngx-image-cropper](https://github.com/Mawi137/ngx-image-cropper) - Angular画像切り抜きコンポーネント。
* [ngx-image-magnifier](https://github.com/SeriousSez/ngx-image-magnifier) - 修飾キー、高度な位置調整、モバイル向けの最適化、滑らかなGPU高速化アニメーションを備えたAngular画像拡大ディレクティブ。
* [ngx-img-cropper](https://github.com/web-dave/ngx-img-cropper) - Angular画像切り抜きツール。
* [@jjmhalew/ngx-lightbox](https://github.com/jjmhalew/ngx-lightbox) - [lightbox2](https://github.com/lokesh/lightbox2)を、Zone.jsを使わないAngular 18以降で利用するための移植版。
* [@necraidan/ngx-lightbox](https://github.com/necraidan/ngx-lightbox) - ズーム、パン、ピンチズーム、キーボードナビゲーションを備えた、Angular 21以降用の軽量でアクセシビリティに配慮したライトボックス。依存パッケージを必要としない。
* [ngx-pinch-zoom](https://github.com/medDV-GmbH/ngx-pinch-zoom) - タッチスクリーンのジェスチャーで、画像のズームと位置調整を行うモジュール。
* [ngx-smart-cropper](https://github.com/kurti-vdb/ngx-smart-cropper) - 切り抜き、サイズ変更、ドラッグによるサイズ変更、グリッドの重ね合わせ、縦横比への対応を備えた、スタンドアロンのAngular画像アップローダー。
* [unpic](https://unpic.pics/img/angular/) - srcsetとサイズの自動設定、CDN・CMSのURL検出を備えた、レスポンシブで高性能な画像用Angularディレクティブ。
* [ngx-image-fallback](https://github.com/joyblanks/ngx-image-fallback) - Angular用画像フォールバックディレクティブ。
* [ng-image-optimizer](https://github.com/Hasan-Kakeh/ng-image-optimizer) - [Sharp](https://sharp.pixelplumbing.com/)でNext.jsのような体験を提供する、高性能なAngular SSR画像最適化ツール。
* [ngx-ratio-image](https://github.com/gerd-siebert/ngx-ratio-image) - 縦横比が固定されたコンテナー内で、可変の縦横比の画像を表示するAngularライブラリ。
* [ngx-image-forge](https://github.com/HoplaGeiss/ngx-image-forge) - 切り抜き、回転、反転、書き出しを行うAngular画像編集ライブラリ。依存パッケージ不要で、シグナルを基盤とする。
* [ng-smart-images](https://github.com/yadimon/ng-smart-images) - ハッシュ化されたアセット、実行時マニフェスト、任意のAngularヘルパーを備えた、CLIを中心とする画像最適化機能。

### <a id="keyboard-mouse"></a>キーボード・マウス

* [angular-touch-keyboard](https://github.com/mohsen77sk/angular-touch-keyboard) - Angularアプリケーション用仮想キーボード。
* [ngx-contextmenu](https://github.com/PerfectMemory/ngx-contextmenu) - Angular用コンテキストメニューコンポーネント。
* [ngx-keys](https://github.com/mrivasperez/ngx-keys) - キーボードショートカットを管理し、シグナル方式のUIと連携するリアクティブなAngularライブラリ。
* [focusly](https://github.com/mad-vx/focusly) - ウェブアプリケーションに直感的なキーボードナビゲーションを追加する、軽量なAngularライブラリ。
* [ngx-arrow-state](https://github.com/jaychase/ngx-arrow-state) - 矢印キーでターミナル・シェルのような入力履歴ナビゲーションを行うAngularライブラリ。テキストエリアからCtrl+Enterでフォームを送信できる。
* [angular-onscreen-material-keyboard](https://github.com/eFaps/angular-onscreen-material-keyboard) - Angular Materialを使う、Angular用の画面上の仮想キーボード。
* [@TanStack/hotkeys](https://github.com/TanStack/hotkeys) - 開発ツールを備えた、型安全なキーボードショートカットライブラリ。
* [ngx-keyboard-shortcuts](https://github.com/phalgunv/ngx-keyboard-shortcuts) - アーカイブされた[ngx-keyboard-shortcuts](https://github.com/milestechnologies/ngx-keyboard-shortcuts)の、積極的に保守されているフォーク。Angular 16以降への対応と現代的なツールを追加する。
* [ngx-command-palette](https://github.com/theryansmee/ngx-command-palette) - 設定不要でキーボード操作できるAngularコマンドパレット。ルートの自動登録、独自コマンド、非同期検索、文脈に応じた表示を備える。

### <a id="layout"></a>レイアウト

* [angular-split](https://github.com/bertrandg/angular-split) - Angularの分割コンポーネント。
* [ngx-layout](https://github.com/ngbracket/ngx-layout) - Angular FlexLayoutのクローン。
* [ng-sortgrid](https://github.com/kreuzerk/ng-sortgrid) - ドラッグ＆ドロップですべての項目を並べ替えられるグリッド。
* [angular-gridster2](https://github.com/tiberiuzuld/angular-gridster2) - Angular gridster 2。
* [angular-grid-layout](https://github.com/katoid/angular-grid-layout) - Angularアプリケーション向けの、ドラッグ・サイズ変更可能な項目を備えたレスポンシブなグリッド。
* [gridstack](https://github.com/gridstack/gridstack.js/tree/master/angular/) - ドラッグ＆ドロップで複数列のレスポンシブなダッシュボードを作成する、モバイルで使いやすいTypeScriptライブラリ。Angularに対応する。
* [ngx-flickering-grid](https://github.com/omnedia/ngx-flickering-grid) - グリッドパターンの背景アニメーションを持つコンテナーを作成する、シンプルなコンポーネントライブラリ。
* [ngx-gridpattern](https://github.com/omnedia/ngx-gridpattern) - パターンの背景を持つコンテナーを作成する、シンプルなコンポーネントライブラリ。
* [ngx-retro-grid](https://github.com/omnedia/ngx-retro-grid) - 色・回転・滑らかなアニメーションを変更できる、3D透視グリッドコンポーネント。懐かしい印象や未来的な効果に向く。
* [ngx-bottom-sheet](https://github.com/ArslanAmeer/ngx-bottom-sheet) - モバイルで使いやすいボトムシートコンポーネントを提供する、高度にカスタマイズ可能で軽量なAngularサービス。
* [ngx-swipe-menu](https://github.com/charlesschaefer/ngx-swipe-menu) - 左へスワイプして操作を実行する体験を作成するコンポーネント。
* [berg-layout](https://github.com/blidblid/berg-layout) - [Berg LayoutのAngular版](https://www.npmjs.com/package/@berg-layout/angular)、React版、Web Components版を含むモノレポ。
* [static-columns](https://github.com/darekf77/static-columns) - AngularとFlexboxで固定幅の列を定義する機能。
* [ngx-flex-layout](https://github.com/jtc10005/ngx-flex-layout) - サポート終了後も利用できるようにする、[Angular Flex Layout](https://github.com/angular/flex-layout)の移植版。
* [ng-polymorpheus](https://github.com/taiga-family/ng-polymorpheus) - Angularの多態的なテンプレート用の小さなライブラリ。
* [gui](https://github.com/acrodata/gui) - 設定可能なパネル用の、JSONを使うGUI。
* [ngx-zoomable](https://github.com/json-k/ngx-zoomable) - ズームとパンが可能な、Angularアプリケーション用コンテナーコンポーネント。
* [ngx-material-drawer](https://github.com/ansarisufiyan777/ngx-material-drawer) - 設定可能なAngular Materialのドロワーとツールバー。
* [@marxlnfcs/ngx-grid](https://github.com/marxlnfcs/ngx-grid) - 現代的なグリッドレイアウト用の、シンプルなAngularグリッドモジュール。
* [lightweight-grid-layout](https://github.com/liketiger/lightweight-grid-layout) - 任意のフレームワークでも、フレームワークなしでも利用する、依存パッケージ不要のJavaScript・TypeScriptヘッドレスグリッドレイアウトライブラリ。描画とスタイル設定は利用者が行う。
* [ng-flex-layout](https://github.com/alessiobianchini/ng-flex-layout) - FlexboxとメディアクエリのObservableを基盤とする、レスポンシブで柔軟なレイアウトAPIを提供するAngularライブラリ。
* [dockview-angular](https://www.npmjs.com/package/dockview-angular) - タブ、グループ、グリッド、分割ビューを備えた、依存パッケージ不要のレイアウトマネージャー。
* [ngx-compactable-row](https://github.com/MikeVensel/ngx-compactable-row) - 場所が限られると、収まらないボタンをメニューへ移すレスポンシブなボタン行。
* [ng-cmdk](https://github.com/wadie/ng-cmdk) - [cmdk](https://github.com/pacocoursey/cmdk)を移植した、高速で組み合わせ可能な、スタイル未設定のAngularコマンドメニュー。
* [ngx-dock-layout](https://github.com/mickael-pezzoni/ngx-dock-layout) - IDE風のサイズ変更可能なパネルレイアウトを作成するAngularライブラリ。
* [layn](https://github.com/laynjs/layn) - 特定のフレームワークに依存しないレイアウトエンジン。仮想化されたMasonryと行を揃えて詰めるレイアウトを提供し、SSRの結果が決定的になる。

### <a id="loaders"></a>ローダー

* [angular-busy](https://github.com/tiberiuzuld/angular-busy) - PromiseやObservableの処理中、任意の要素に処理中・読み込み中の表示を行う機能。
* [angular-smart-skeleton](https://github.com/Nikmakwana94/angular-smart-skeleton) - 動的な行、列、カード、リスト、テーブル、独自のレイアウト用の、柔軟で再利用可能なAngularスケルトンローダー。
* [angular-svg-round-progressbar](https://github.com/crisbeto/angular-svg-round-progressbar) - SVGで円形の進捗バーを作成するAngularモジュール。
* [boneyard](https://github.com/0xGF/boneyard) - React、Preact、Vue、Svelte、Angular、React Nativeで動作する、自動生成のスケルトン表示フレームワーク。
* [groupix-spinner-library](https://github.com/ArshdeepGrover/groupix-spinner-library) - 円滑な読み込みアニメーション用の軽量なAngularスピナーライブラリ。
* [loaderx-arun](https://github.com/Arun44764/loaderx-arun) - 500以上のUI読み込みアニメーション。
* [loadingTrace](https://github.com/lucapiciollo/loadingTrace) - 定型コード不要のAngular読み込みオーバーレイ。76種類のアニメーション、自動追跡、名前付きオーバーレイ、進捗量の表示、実行時設定、シグナルを備える。
* [ng-overlay-skeleton-loader](https://github.com/ebrahim-salehipanah/ng-overlay-skeleton-loader) - カスタマイズ可能なスケルトンの読み込み状態をコンポーネントに追加する、軽量なAngularディレクティブ。
* [ngx-fastboot](https://github.com/KernelPanic92/ngx-fastboot) - 設定を別のチャンクにコンパイルし、起動性能を改善するAngularの動的設定ローダー。
* [ngx-loader](https://github.com/nisicadmir/ngx-loader) - 状態管理サービスと組み合わせた基本的なローダー。
* [ngx-loader-indicator](https://github.com/jsdaddy/ngx-loader-indicator) - ラッパーを使わず、利用者の要素だけで動作するAngularアプリケーション用ローダー。
* [ngx-loading-bar](https://github.com/aitboudad/ngx-loading-bar) - Angular用の自動ページ読み込み・進捗バー。
* [ngx-loading-buttons](https://github.com/dkreider/ngx-loading-buttons) - Angular Materialのボタンに読み込みスピナーを追加する軽量なAngularライブラリ。
* [ngx-loading-overlay](https://github.com/shaman-apprentice/ngx-loading-overlay) - HTMLに読み込みオーバーレイを追加するAngularディレクティブ。
* [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar) - 少しずつ進む自然なアニメーションを備えた、非常に小さな進捗バー。
* [ngx-promise-buttons](https://github.com/meysamsahragard/ngx-promise-buttons) - Angular用の手軽な読み込み表示付きボタン。
* [ngx-signal-loading-bar](https://github.com/KennySchl/ngx-signal-loading-bar) - 軽量でシグナルを基盤とし、Zone.jsを使わないAngular読み込みバー。
* [ngx-skeleton-loader](https://github.com/willmendesneto/ngx-skeleton-loader) - Angularアプリケーションに自動的に適応する、アニメーション付き読み込みスケルトンを作成する機能。
* [ngx-source](https://github.com/mehrabisajad/ngx-source) - アプリケーションの実行中にJavaScriptとCSSを動的に読み込む機能。
* [ngx-spinner](https://github.com/napster2210/ngx-spinner) - Angular用読み込みスピナーライブラリ。
* [ngx-spinner-loading](https://github.com/thalsi/ngx-spinner-loading) - 全体・セクション・インラインのローダー、HTTPインターセプター、シグナル方式の状態を備えた、軽量でカスタマイズ可能なAngularスピナー。
* [ngxsmk-skeleton-loader](https://github.com/Cholki2025/ngxsmk-skeleton-loader) - SCSSアニメーションと簡単なテーマ設定を備えた軽量なスケルトンローダー。
* [ngx-ui-loader](https://github.com/t-ho/ngx-ui-loader) - フォアグラウンド・バックグラウンドのモード、進捗バー、複数ローダーに対応する汎用的なAngularローダー・スピナー。
* [phantom-ui](https://github.com/Aejkatappaja/phantom-ui) - 構造を認識するスケルトンローダー。1つのウェブコンポーネントで、あらゆるフレームワークに対応する。
* [shimmer-from-structure](https://github.com/darula-hpp/shimmer-from-structure) - コンポーネントの実行時構造に自動的に適応する、React、Vue、Svelte、Angular用のシマー・スケルトンライブラリ。
* [skedapt](https://github.com/z4k7/skedapt) - ホスト要素に機能を追加し、コンテナーの自然なレイアウトに自動的に合うスケルトンを作る、設定不要のAngular適応型スケルトンローダー。
* [skeletonizer](https://github.com/lukaVarga/skeletonizer) - Vue・Angularアダプターを備えた、スケルトンビューを作成する軽量でカスタマイズ可能なパッケージ。
* [skeleton-styler](https://github.com/HoaiNam071001/skeleton-styler) - スタイルとアニメーションをカスタマイズできる、特定のフレームワークに依存しない軽量なスケルトン読み込みUI生成ライブラリ。

### <a id="loggers"></a>ロガー

* [lumberjack](https://github.com/ngworker/lumberjack) - 組み込みドライバーを備え、独自のログドライバーにも容易にカスタマイズできる、多用途のAngularログライブラリ。
* [log4ngx](https://github.com/secondbounce/log4ngx) - Log4j、Log4netなどで使われる概念に基づいた、Angularプロジェクト用のTypeScriptログフレームワーク。
* [candy-logger](https://github.com/shehari007/candy-logger) - ブラウザーのポップアップUIと、Nodeの拡張されたターミナル出力を備えた、JavaScript・TypeScript用の軽量ログライブラリ。
* [@pubfunc/ngx-common-log](https://github.com/pubfunc/ngx-libs/tree/master/packages/common/log) - 複数のログ転送方式、ログレベル、名前空間、依存性注入に対応する、Angularアプリケーション用の柔軟なログライブラリ。

### <a id="maps"></a>地図

* [cesium-angular-example](https://github.com/Developer-Plexscape/cesium-angular-example) - 固定原文で最新とされるAngularバージョンと[Cesium](https://cesium.com)の統合を示す、シンプルなウェブアプリケーション。
* [ngx-mapbox-gl](https://github.com/Wykks/ngx-mapbox-gl) - `mapbox-gl-js`のAngularバインディング。
* [ngx-leaflet](https://github.com/bluehalo/ngx-leaflet) - Angular用のLeafletのコアパッケージ。
* [ngx-leaflet-markercluster](https://github.com/bluehalo/ngx-leaflet-markercluster) - Angularプロジェクトに[leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)を統合する機能。
* [ngx-maplibre-gl](https://github.com/maplibre/ngx-maplibre-gl) - maplibre-glのAngularバインディング。
* [ng-azure-maps](https://github.com/arnaudleclerc/ng-azure-maps) - HTMLを使って設定する、azure-maps-controlsのAngularラッパー。Angularアプリケーションへの統合を容易にする。
* [ngx-gaia-gis](https://github.com/Olympus-Analytics/ngx-gaia-gis) - [OpenLayers](https://openlayers.org/)ライブラリを使い、地図の作成と操作を簡単にするAngularサービス。
* [ngx-google-maps-places](https://github.com/lekhmanrus/ngx-google-maps-places) - Google Placesの統合を簡単にする、Google Maps Places APIのAngularラッパー。
* [angular-yandex-maps](https://github.com/ddubrava/angular-yandex-maps) - Yandex.Maps JavaScript APIを実装する、Yandex.MapsのAngularコンポーネント。
* [workletjs](https://github.com/workletjs/workletjs) - OpenLayersと円滑に統合し、操作可能でカスタマイズ可能な地図を作成できる、Angular地図コンポーネントライブラリ。
* [ng-simple-maps](https://github.com/hanafnafs/ng-simple-maps) - Angularアプリケーション用の軽量なSVG世界地図。

### Markdown

* [angular-markdown-editor](https://github.com/ghiscoding/angular-markdown-editor) - Markdownの編集とプレビューを一体化した、Angular Markdownエディター。
* [markular](https://github.com/larswaechter/markular) - Angular用の軽量Markdownエディター。
* [mdbook-angular](https://github.com/bgotink/mdbook-angular) - Angularのコード例を動作するAngularアプリケーションに変換する、[mdbook](https://rust-lang.github.io/mdBook/index.html)用レンダラー。
* [md-juice](https://github.com/aruidev/md-juice) - Markdownから出力したHTML用の、トークン化された軽量CSSテーマ。
* [ngx-markdown](https://github.com/jfcere/ngx-markdown) - Marked、Prism.js、Emoji-Toolkit、KaTeX、Mermaid、Clipboard.jsを組み合わせたAngularライブラリ。
* [ngx-markdown-pages](https://github.com/jamesmandrews/ngx-markdown-pages) - Markdownファイルをルーティング可能なページとして描画するAngularライブラリ。
* [ngx-md-editable](https://codeberg.org/tomaszatoo/ngx-md-editable) - Markdownを編集し、表現力のあるHTMLコンテンツを描画する、軽量なAngularコンポーネント。
* [ngx-md-slides](https://github.com/ngx-md-slides/ngx-md-slides) - Markdown、HTML、実際に動く例を示すAngularコンポーネントを使い、多言語のプレゼンテーションを作成する機能。
* [ngx-remark](https://github.com/ericleib/ngx-remark) - 独自のAngularテンプレートでMarkdownを描画する機能。
* [ngx-streamdown](https://github.com/dina-kar/ngx-streamdown) - AIを使うアプリケーション向けに最適化された、ストリーミングMarkdownレンダラー[Streamdown](https://streamdown.ai/)のAngular移植版。
* [mark-down](https://github.com/mzebley/mark-down) - Angularアダプターを備えた、特定のフレームワークに依存しないスニペットエンジン。ビルド時にMarkdownを索引化し、実行時にHTMLを描画する。必要に応じてサニタイズできる。
* [m-render](https://github.com/Foblex/m-render) - Angularコンポーネントとコードスニペットへの対応を拡張した、Markdown描画ライブラリ。
* [markstream](https://github.com/Simon-He95/markstream-vue) - ストリーミング中のMarkdownを描画する機能。
* [streamdown-angular](https://github.com/XurshidJurayev1/streamdown-angular) - AIチャットUI向けの、ストリーミングを安全に扱うAngular用Markdown描画。[Vercel Streamdown](https://github.com/vercel/streamdown)のAngular移植版。

### <a id="media"></a>メディア

* [angular-audio-context](https://github.com/chrisguttandin/angular-audio-context) - Web Audio APIのAudioContext用のAngularラッパー。
* [silicon-audio-wave](https://github.com/joldibaev/silicon-audio-wave) - Siliconによる、とてもシンプルな音声波形システム。
* [Vidstack](https://github.com/vidstack/player) - 独自のウェブメディアプレイヤー用UIコンポーネントと、カスタマイズ可能なDefault Layoutを備えたフレームワーク。[導入ガイド](https://www.vidstack.io/docs/player/getting-started/installation/angular?styling=default-layout&provider=video)を参照。
* [@dytesdk/web-core](https://www.npmjs.com/package/@dytesdk/web-core) - AngularアプリケーションにDyteのLivestream SDKを追加する方法を示す[クイックスタート](https://docs.dyte.io/guides/livestream/client-setup/angular)。
* [voicecapture-angular](https://github.com/angular-a11y/voicecapture-angular) - 音声入力と文字起こしの処理をカスタマイズでき、ユーザーインターフェースの機能強化に柔軟に使えるライブラリ。
* [ngx-cam-shoot](https://github.com/RzoDev/ngx-cam-shoot) - 端末のカメラの利用を簡単にし、画像の撮影と保存を迅速にする、簡潔なAngularコンポーネント。
* [cometchat-uikit-angular](https://github.com/cometchat/cometchat-uikit-angular) - 迅速で信頼性の高い、豊富な機能を備えたチャット統合用の構築済みUIを提供する、[CometChat](https://www.cometchat.com/)のAngular UI Kit。
* [ngx-user-camera](https://codeberg.org/tomaszatoo/ngx-user-camera) - 前面・背面カメラの切り替え、利用を選択できるCanvas描画、Zone.jsを使わないリアクティブなシグナルを備えた、現代的なAngular 20以降用カメラコンポーネント。
* [ngx-rumbletalk](https://github.com/RumbleTalk/ngx-rumbletalk) - [Rumbletalk](https://rumbletalk.com/)のグループチャット用Angularライブラリ。
* [ng-three-model-cropper](https://github.com/AlexRynas/ng-three-model-cropper) - GLB・FBXに対応し、三角形を除去したモデルを出力できる、設定可能な3Dモデル切り抜き用のAngular `Three.js`ライブラリ。
* [@ngx-core/media-optimizer](https://github.com/barbozaa/media-optimizer-workspace) - 画像の最適化、変換、圧縮用の、特定のフレームワークに依存しないライブラリ。
* [ngx-streaming-player](https://github.com/jhonsferg/ngx-streaming-player) - 単一のAPIでHLS、DASH、MP4、YouTubeを扱う、統合型ですぐに使える動画プレイヤーコンポーネント。
* [ngx-pro-media-player](https://github.com/kamal-dev1/ngx-pro-media-player) - 音声、動画、キュー、クロスフェード、歌詞、右から左に書く言語に対応するAngularメディアプレイヤー。
* [MediaSFU-Angular](https://github.com/MediaSFU/MediaSFU-Angular) - WebRTCによるビデオ会議、ウェビナー、ライブ配信、チャット、画面共有、録画、ブレイクアウトルーム、ホワイトボード、投票、リアルタイム字幕、翻訳用のAngular SDK。
* [ngx-sync-videos](https://github.com/goodbaguette/ngx-sync-videos) - 複数の動画を同時に再生し、同期と再生位置のずらしを行うAngularディレクティブ。

### <a id="mixed-utilities"></a>複合ユーティリティ

* [Angular Components公式リポジトリ](https://github.com/angular/components) - Angularのコンポーネント基盤とMaterial Designコンポーネント。
* [rx-angular](https://github.com/rx-angular/rx-angular) - 性能、テンプレート描画、開発者の使いやすさを重視した、全面的にリアクティブなアプリ用のRxAngularツールキット。
* [ng-web-apis](https://github.com/taiga-family/ng-web-apis) - AngularからWeb APIを利用するための共通ユーティリティ群。
* [daffodil](https://github.com/graycoreio/daffodil) - Angular用の電子商取引PWAフレームワーク。
* [ngworker](https://github.com/ngworker/ngworker) - @ngworkerのNPM組織用モノレポ。Angularアプリケーションとテスト用のパッケージを収録。
* [jscutlery devkit](https://github.com/jscutlery/devkit) - Angular開発者の作業を容易にするツール。
* [lithium-angular](https://github.com/lVlyke/lithium-angular) - リアクティブな状態とイベントの円滑な連携用ユーティリティで、Angularの利用を簡単にするLithium。
* [rxweb](https://github.com/rxweb/rxweb) - Angular、Vue、Reactプロジェクト用の、豊富な機能を備えた多数のパッケージ。
* [ngspot](https://github.com/DmitryEfimenko/ngspot) - Angularライブラリのコレクション。
* [ts-cacheable](https://github.com/angelnikolov/ts-cacheable) - 広く使われる、特定のプラットフォームに依存しないキャッシュライブラリ。
* [ngxtension-platform](https://github.com/ngxtension/ngxtension-platform) - Angular用ユーティリティ。
* [spartan](https://github.com/goetzrobin/spartan) - Angularのフルスタック開発を支えるツール。
* [ngify](https://github.com/ngify/ngify) - Angularの外でAngularの機能を利用するためのツール。
* [angular-ru-sdk](https://github.com/Angular-RU/angular-ru-sdk) - 一般的な連携パターン用のツールチェーン群。表示方法に依存せず、Angularのコア機能を抽象化する。
* [dfts-common](https://github.com/Dafnik/dfts-common) - アイコンなどのユーティリティを含む、TypeScriptライブラリのコレクション。
* [dfx-common](https://github.com/Dafnik/dfx-common) - `dfx-qrcode`などを含む、Angularライブラリのコレクション。
* [sba-angular](https://github.com/sinequa/sba-angular) - [Sinequa](https://www.sinequa.com/)の、Angularを基盤とするSearch Based Application（SBA）フレームワーク。
* [ng-as](https://github.com/nigrosimone/ng-as) - テンプレート変数の型キャスト用のAngularパイプとディレクティブ。
* [angular-toolbox](https://github.com/pechemann/angular-toolbox) - Angularアプリケーションの開発に役立つツールを提供するライブラリ。
* [ngx-lift](https://github.com/wghglory/ngx-lift) - ユーティリティ、演算子、コンポーネントでAngularを拡張し、開発を簡単にする`clr-lift`と`ngx-lift`。
* [firestitch](https://github.com/orgs/Firestitch/repositories) - [Firestitch](https://firestitch.com/)が提供する、幅広いオープンソースのAngularソリューション。
* [@studiohyperdrive/ngx-tools](https://github.com/studiohyperdrive/hyperdrive-opensource) - [Studio Hyperdrive](https://studiohyperdrive.be/)チームが作成・保守する、複数のAngularベースのパッケージを提供するモノレポ。
* [ngx-utility](https://github.com/OPI-PIB/ngx-utility) - フォーム、ゾーン、DOM操作、HTTPリクエストなどの各種ヘルパー。
* [ssv.ngx](https://github.com/sketch7/ssv.ngx) - [sketch7](https://github.com/sketch7)のライブラリを収録したモノレポ。[ngx.command](https://github.com/sketch7/ssv.ngx/tree/master/libs/ngx.command#readme)はAngular用のコマンドパターン実装。[ngx.ux](https://github.com/sketch7/ssv.ngx/blob/master/libs/ngx.ux/README.md)はアプリケーション構築に必要なUX機能とユーティリティを提供。
* [ng-kit](https://github.com/js-smart/ng-kit) - Angular MaterialとBootstrap 5.xで構築された再利用可能なAngularコンポーネントと、日付・フォーム・文字列操作用のユーティリティクラス・関数。
* [nxt-components](https://github.com/Liquid-JS/nxt-components) - 各種Angularコンポーネントのコレクション。
* [ngx-signal-plus](https://github.com/milad-hub/ngx-signal-plus) - 拡張機能、演算子、ユーティリティを提供する、Angular Signals用のユーティリティライブラリ。
* [ngx-nuts-and-bolts](https://github.com/infinum/ngx-nuts-and-bolts) - [Infinum](https://infinum.com/)が使用する、よく使われるAngular関連コードのコレクション。
* [ngx-signals-plus](https://github.com/dszendrei/ngx-signals-plus) - 開発者の使いやすさを向上させる追加のシグナル。
* [ng-tool-collection](https://github.com/domideimel/ng-tool-collection) - Angularで書かれた便利なツール。
* [yaagoub](https://yaagoub.org/) - デコレーター、ディレクティブ、アイコン、サービス、OAuth 2.0で開発を迅速にするツール。
* [@everllence/ngx-tools](https://github.com/everllence/ngx-tools) - Angular開発の使いやすさを高めるための、ライブラリのコレクションを収録したリポジトリ。
* [ngx-oneforall](https://github.com/love1024/ngx-oneforall) - 再利用可能なパイプ、ディレクティブ、サービス、デコレーター、定数、列挙型などを備えたAngularライブラリ。
* [angular-signal-generators](https://github.com/DDtMM/angular-signal-generators) - シグナルとユーティリティで開発を円滑にし、より速く明快なコードを作成するAngular Signal Generators。
* [mmstack](https://github.com/mihajm/mmstack) - mmstackライブラリ用モノレポ。
* [@shanieMoonlight/moonlight-repo](https://github.com/shanieMoonlight/moonlight-repo) - SpiderBabyのオープンソースAngularライブラリ、ユーティリティ、デモアプリケーションを収録したモノレポ。
* [@jchpro/ng](https://github.com/jchpro/ng) - 各種Angularライブラリのモノレポ。詳細は[使用例のページ](https://ng.jchpro.pl/)を参照。
* [rxap](https://gitlab.com/rxap/packages) - ウェブ・クラウドアプリケーションの開発作業を減らす、モジュールとツールのコレクション。
* [ng-util](https://github.com/ng-util/ng-util) - Angular用ユーティリティ群。
* [reactive-kit](https://github.com/max-scopp/reactive-kit) - 定型コードを減らし、`ngxtension`とも組み合わせやすい、リアクティブなAngularアプリ用の軽量ユーティリティ。
* [fireng](https://github.com/BhanukaDev/fireng) - シグナルを使い、レスポンシブな開発を簡単にするAngularライブラリのコレクション。
* [xprng](https://github.com/ziv/xprng) - シンプルで気の利いたAngularコンポーネントの小さなパッケージ群。
* [ngx-primeng-toolkit](https://github.com/md-redwan-hossain/ngx-primeng-toolkit) - PrimeNGヘルパー、`ng-select`、ストレージ、NgRxキャッシュを備えた、Angularの状態管理用のTypeScriptユーティリティ。
* [@ibenvandeveire opensource](https://github.com/IbenTesara/opensource) - [Iben Van de Veire](https://github.com/IbenTesara)が開発・保守する、Angular用とそれ以外の複数パッケージを収録したモノレポ。
* [@farfadev/ngx-lib](https://github.com/farfadev/ngx-lib) - どのアプリケーションでも利用できる、[Farfadev](https://github.com/farfadev)のAngularライブラリのリポジトリ。
* [ngx-security](https://github.com/xbranch/ngx-security) - 認証、ロール、権限管理用のモジュール式Angularライブラリ。
* [ng-catbee](https://github.com/catbee-technologies/ng-catbee) - [Catbee](https://catbee.in/docs/@ng-catbee/)チームが開発・保守するAngularライブラリのコレクション。
* [ngx-persian](https://github.com/alihoseiny/ngx-persian) - ペルシャ語のアプリケーション用の、豊富な機能を備えたツールセット。
* [acontplus-libs](https://github.com/acontplus/acontplus-libs) - エンタープライズアプリケーション用のドメイン駆動設計（DDD）アーキテクチャ、コアユーティリティ、Angular Material UIコンポーネントを提供するAngularライブラリを収録したNxモノレポ。
* [Angular Directive Workspace](https://github.com/sergeydus/ng-tailwind-workspace) - [ng-signals-utils](https://www.npmjs.com/package/@sergeydus/ng-signals-utils)を含む、複数のスタンドアロンのディレクティブ・ユーティリティライブラリを収録したAngularモノレポ。
* [angular-cool](https://github.com/Hacklone/angular-cool) - UI、ストレージ、ネットワーク、性能の機能を容易に導入してアプリケーションを強化する、開発者が使いやすいAngularユーティリティを収録したモノレポ。
* [dasch-ng](https://github.com/DaSchTour/dasch-ng) - 現代のウェブ開発用の、再利用可能なAngularライブラリとTypeScriptユーティリティのコレクション。
* [ngx-schema-tools](https://github.com/Expeed-Software/ngx-schema-tools) - JSONスキーマの編集、視覚的なデータの対応付け、動的なフォーム描画用のAngularライブラリを収録したモノレポ。
* [angular-3d](https://github.com/Hive-Academy/angular-3d) - 3Dグラフィックスとスクロールアニメーションを構築するAngularライブラリ。
* [npm-ntk-cms-angular](https://github.com/akaravi/npm-ntk-cms-angular) - 現代的なCMSアプリケーション構築用の、再利用可能な9つのAngularライブラリを収録したモノレポ。
* [ngx-vertex](https://github.com/pjlamb12/ngx-vertex) - Angularアプリケーションで有向非巡回グラフのモデルを作成・管理するためのライブラリ。
* [telperion](https://github.com/telperiontech/telperion) - [ng-pack](https://github.com/telperiontech/telperion/tree/main/libs/ng-pack)を含む、現代のウェブ開発用の特定のフレームワークに依存しないユーティリティ・ツールのコレクション。
* [signality](https://github.com/signalityjs/signality) - Angularでリアクティブな処理を組み合わせるための、小さな単位のユーティリティのコレクション。
* [@alvaromarinho/libs](https://github.com/alvaromarinho/libs) - 一般的なUIの要件に対応する、Angular 14以降と互換性のあるAngularライブラリのコレクション。
* [angular-helpers](https://github.com/Gaspar1992/angular-helpers) - 安全でブラウザーと統合されたアプリケーションを、開発者にとって明快な使い心地で構築するためのAngularライブラリ群。
* [ngneat-archive](https://github.com/ngneat-archive) - [ngneat](https://github.com/ngneat)リポジトリを保存する読み取り専用アーカイブ。
* [Indice.Angular](https://github.com/indice-co/Indice.Angular) - Angular v20以降のアプリケーション用に、認証、設定、再利用可能なコンポーネントを提供するAngularライブラリのコレクション。
* [trt-web-utils](https://github.com/therightthings/trt-web/tree/dev) - Firebase管理用ヘルパーライブラリなどを含む、`@trt-web`パッケージ用モノレポ。
* [dgkit](https://github.com/grynyk/dgkit) - 増え続けている、オープンソースの、特定のフロントエンドに依存しないライブラリとAngularライブラリ、開発ツール、フロントエンドユーティリティのコレクション。

### <a id="modals"></a>モーダル

* [ngx-dialog](https://github.com/soc221b/ngx-dialog) - Angular 16以降用の、型安全なAngularダイアログディレクティブ。
* [ng-modal-service](https://github.com/nhusby/ng-modal-service) - シンプルなAngularモーダルサービス。
* [strictly-typed-mat-dialog](https://github.com/JustSolve-self-serve/strictly-typed-mat-dialog) - Materialダイアログ周りの型安全性を改善するAngular Materialライブラリ。
* [angular-confirmation-capture](https://github.com/lazycuh/angular-confirmation-capture) - 利用者の同意を取得する確認ボックスをプログラムから表示する、グローバルでシングルトンのAngularサービス。
* [angular-anchored-floating-box](https://github.com/lazycuh/angular-anchored-floating-box) - `TemplateRef`またはコンポーネントの内容を持つ、要素に結び付けたフローティングボックスを描画する、シングルトンのAngularサービス。
* [ngx-side-page](https://github.com/strikerh/ngx-side-page) - サイドページ用のMaterialダイアログのように使える、滑らかなサービス方式のアニメーション付きスライド式サイドパネル用の、多用途のAngularライブラリ。
* [async-modal-ngx](https://github.com/antonioconselheiro/async-modal-ngx) - 柔軟なデータフローでAngularコンポーネントを描画するライブラリ。すべてのスタイル設定とモーダルホストの設計は利用者が行う。
* [rnd-dialog](https://github.com/acrodata/rnd-dialog) - CDK Dialogを基盤とする、サイズ変更・ドラッグ可能なダイアログ。
* [prettier-modals](https://github.com/antuuanyf/prettier-modals) - GSAP Flipによる開閉アニメーションをネイティブの`<dialog>`要素に加える、Prettier Modals用Angularディレクティブと注入可能なサービス。
* [ngx-call](https://github.com/hebus/ngx-call) - [React Call](https://github.com/desko27/react-call)の`createCallable`に着想を得た、命令型で型安全な、Promise方式のAngularダイアログ。
* [ngx-dialog-forge](https://github.com/HoplaGeiss/ngx-dialog-forge) - ネイティブのダイアログ要素を基盤とする、宣言型でシグナルを自然に利用するAngularダイアログライブラリ。
* [ngx-modalieur](https://github.com/kazepis/ngx-modalieur) - Angular CDK Dialogを使う、Bootstrapのスタイルのモーダル。
* [ngx-minimal-modal](https://github.com/ThePipeFox/ngx-minimal-modal) - Angularアプリケーションでモーダル（ポップアップ）を扱う簡単な方法を提供する、特定の設計方針を強制しない小さなライブラリ。

### <a id="notifications"></a>通知

* [alert-bar-library](https://github.com/npm-lahsiv/alert-bar-library) - 成功・情報・警告・エラーなどの状況に応じたメッセージを、現代のウェブアプリに合う、明快でアクセシブルなスタイルで表示するライブラリ。
* [angular-bootstrap-toast-service](https://github.com/svierk/angular-bootstrap-toast-service) - Bootstrap方式のトースト通知を送るAngularプロジェクト。Vercelへのデプロイも含む。
* [angular-notification](https://github.com/lazycuh/angular-notification) - プログラムから通知を表示する、グローバルでシングルトンのAngularサービス。
* [angular-toaster](https://github.com/damingerdai/angular-toaster) - [Angular2-Toaster](https://github.com/Stabzs/Angular2-Toaster)を更新したフォーク。
* [grand-notifications](https://github.com/rishi-rj-s/grand-notifications) - アニメーションを備えた、カスタマイズ可能なトースト通知。
* [hot-toast](https://github.com/ngxpert/hot-toast) - Angular用のトースト通知。
* [makki-toast-package](https://github.com/DanielJimenezC/makki-toast-package) - 独自のアラートの作成と管理を円滑にする、カスタマイズ可能なトーストコンポーネント。
* [mk-magic-messages-library](https://github.com/mkeller1992/mk-magic-messages-library) - Angular 20以降のアプリケーションで、成功・情報・警告・エラーのアラートをアニメーション付きで簡単に表示するライブラリ。
* [ngx-advanced-toast](https://github.com/Hamed-kshiem/ngx-advanced-toast) - ネイティブの`<dialog>`要素を基盤とする、高機能なAngularトースト通知。シグナルを重視し、RxJSを使わず、CSSのみのアニメーションを備え、アクセシビリティに全面的に対応。
* [ngx-alertifying](https://github.com/Salromag/ngx-alertifying) - さまざまな端末や状況で、アクセシブルなフィードバックを提供する、カスタマイズ可能でレスポンシブなAngularアラートコンポーネント。
* [ngx-cozy-popup](https://github.com/Mohantech123/CozyAlert) - 現代のウェブアプリケーション用の、特定のフレームワークに依存しないポップアップ・トーストライブラリ。
* [ngx-french-toast](https://github.com/thiagopg84/ngx-french-toast) - 情報メッセージ、フィードバック、動的なコンポーネントに対応する、Angular 14以降用の軽量でカスタマイズ可能なトーストライブラリ。
* [ngx-modern-alerts](https://github.com/jonaaix/ngx-modern-alerts) - ハブ、タイムアウト、独自の操作などを備えた、バナーとフローティングアラート用の柔軟なAngularシステム。
* [@klausbrandner/ngx-notifications](https://github.com/klausbrandner/ngx-notifications) - Angular用のシンプルで軽量なトースト通知。
* [ngx-notifier](https://github.com/sibiraj-s/ngx-notifier) - Angularアプリケーション用のシンプルな通知サービス。
* [ngx-popify](https://github.com/fgilmet/ngx-popify) - リアクティブなシグナルで構築され、ビューコンポーネントで簡単に統合できる、Angular 16以降用のトースト通知。
* [ngx-signal-toast](https://github.com/white-devil1/ngx-signal-toast-workspace) - Zone.jsを使わない実行、依存パッケージ不要、SSRでの安全性、テーマ設定に対応する、シグナルを重視したAngular 21以降用トースト通知ライブラリ。
* [ngx-snotifire](https://github.com/ccpatrut/ngx-snotifire) - 複数の通知種別と同時の配置、豊富な設定、全面的な独自スタイル、組み込みテーマ、コールバック、独自のHTMLに対応する、柔軟なトーストライブラリ。
* [ngx-sonner](https://github.com/tutkli/ngx-sonner) - 特定の設計方針を持つAngularトーストコンポーネント。@emilkowalskiのsonnerの移植版。
* [ngx-sweetalert2](https://github.com/sweetalert2/ngx-sweetalert2) - 宣言型、リアクティブ、テンプレート方式の、Angular用SweetAlert2統合。
* [ngx-toast](https://github.com/aminekun90/ngx-toast) - Angular 21以降とReact 18以降用の、軽量で高性能、Zone.jsを使わない実行に対応できるトースト通知ライブラリ。
* [@IQXLimited/ngx-toastr](https://github.com/IQXLimited/ngx-toastr) - 機能の追加、改善、カスタマイズを加えた`ngx-toastr`のフォーク。
* [ngx-toastr-notifier](https://github.com/Mazen-Embaby/ngx-toastr-notifier) - Material Designと柔軟なAPIを備え、`toastr`に置き換わる、Angular 20以降用の軽量でカスタマイズ可能なトースト通知。
* [Notiflow](https://github.com/schimmer123/Notiflow) - `@angular/animations`を使わず構築された、シグナル方式でスタンドアロンの、Zone.jsを使わない実行に対応する現代的なAngularトースト・通知ライブラリ。
* [notifyx](https://github.com/awalhadi/notifyx) - 依存パッケージ不要の、JavaScript・TypeScript用のシンプルでカスタマイズ可能なトーストライブラリ。
* [OneSignal](https://documentation.onesignal.com/docs/angular-setup) - [onesignal-ngx](https://github.com/OneSignal/onesignal-ngx)でOneSignalをAngularアプリケーションに統合し、プッシュ通知とアプリ内メッセージを利用するための案内。
* [toastify](https://github.com/andreasnicolaou/toastify) - ウェブアプリケーション用の軽量でカスタマイズ可能なトースト通知。
* [web-notifier](https://github.com/andreasnicolaou/web-notifier) - ブラウザー通知用のシンプルなRxJS方式のAPIを備えた、軽量で柔軟なウェブ通知ライブラリ。
* [ngx-dynamic-toast](https://github.com/ederjavs/ngx-dynamic-toast) - [Sileo](https://github.com/hiaaryan/sileo)プロジェクトから強く着想を得た、液体のように滑らかな表示のAngularトースト通知ライブラリ。
* [flexi-toast](https://github.com/FlexiUI-labs/flexi-toast) - タイトル、メッセージ、アイコン種別、自動消去、手動で閉じる操作、アニメーション、テーマ、配置に対応するAngularトースト通知コンポーネント。
* [ngx-notitia](https://github.com/klajdm/ngx-notitia) - Angular 21以降用に機能追加、修正、現代化を行った、`ngx-toastr`の更新されたフォーク。
* [ngx-herald](https://github.com/HoplaGeiss/ngx-herald) - シグナルを重視し、Zone.jsを使わない実行と互換性があり、実行時の依存パッケージがない、軽量で現代的なAngularトースト通知ライブラリ。ngx-toastrに代わる使いやすい選択肢。
* [ngx-gooey-toast](https://github.com/juanvieiraprado99/ngx-gooey-toast) - 細長い丸形から不定形へ変形するAngularトーストコンポーネント。Reactの[gooey-toast](https://goey-toast.vercel.app/)のAngular移植版。
* [ngx-yet-another-toast-library](https://github.com/Zeeraa/ngx-yet-another-toast-library) - Bootstrap 5のカラーパレットに対応する、軽量でシグナル方式のAngularトースト通知ライブラリ。
* [ngx-mat-toast](https://github.com/Robin-Bley/ngx-mat-toast) - Angular Materialの`MatSnackBar`を基盤とするAngularトースト通知ライブラリ。
* [ngx-retoast](https://github.com/EliasVal/ngx-retoast) - アーカイブ済みの`ngx-toastr`ライブラリを書き直した、現代的なAngularアプリケーション用ライブラリ。

### <a id="onboarding-and-product-tours"></a>オンボーディングと製品ツアー

* [angular-shepherd](https://github.com/shepherd-pro/angular-shepherd) - サイトツアーライブラリ[Shepherd](https://github.com/shepherd-pro/shepherd)をラップするAngularサービス。
* [skyux](https://github.com/blackbaud/skyux) - Angular用のSKY UXコンポーネント。
* [ngx-ui-tour](https://github.com/hakimio/ngx-ui-tour) - [angular-ui-tour](https://github.com/benmarch/angular-ui-tour)に着想を得たUIツアーライブラリ。
* [ngx-onboarding](https://github.com/rosen-group/ngx-onboarding) - 利用者がアプリケーションをすばやく理解して操作できるよう、円滑なAngularチュートリアルを支えるオンボーディングライブラリ。
* [ngx-web-tour](https://github.com/abbas-mgz/ngx-web-tour) - アニメーションとUIで利用者の導入を支援する、Angularアプリケーション用のカスタマイズ可能な製品ツアーライブラリ。
* [ngx-intro](https://github.com/andresciceri/ngx-intro) - [Intro.js](https://introjs.com/)を簡単に統合し、操作可能なガイドや段階的なチュートリアルを作成するAngularライブラリ。
* [ngx-custom-tour](https://github.com/miraxes/ngx-custom-tour) - Angular 15以降用の、カスタマイズが容易な段階的ツアー・オンボーディング。
* [ng-beacon](https://github.com/HomelessCoder/ng-beacon) - シグナルと、Zone.jsを使わない実行と互換性のある描画を備えた、Angular 19以降用の軽量ガイドツアーライブラリ。
* [ngx-guided-tour-lite](https://github.com/pantarey-io/ngx-guided-tour-lite) - Angular用の軽量で依存パッケージ不要のガイドツアーライブラリ。

### PDF

* [Angular Image & PDF Viewer](https://github.com/NiranjanKushwaha/imgPdfViewer_library_Angular) - Mozillaの[pdf.js](https://github.com/mozilla/pdf.js)エンジンによる滑らかなプレビューでPDFと画像を表示する、カスタマイズ可能なライブラリ。
* [ng-pdf-renderer](https://github.com/askinjohn/ng-pdf-renderer) - 賢い自動フィット、テキスト選択、レスポンシブな設計を備えた、Angularアプリケーション用の現代的で設定不要のPDFビューアー。
* [ng2-pdfjs-viewer](https://github.com/intbot/ng2-pdfjs-viewer) - すべてのAngularバージョンに対応する、PDFJSとViewerJS用のAngularコンポーネント。
* [ngx-document-signer](https://github.com/YaseenAlMufti/ngx-document-signer) - PDFフォームの作成とPDFへの署名機能を提供する、再利用可能なパッケージ。
* [ngx-extended-pdf-viewer](https://github.com/stephanrauh/ngx-extended-pdf-viewer) - Angular 16以降用の本格的なPDFビューアー。
* [ngx-pdf-viewer](https://github.com/subedigaurav/ngx-pdf-viewer) - Angularアプリケーション用の軽量PDFビューアーライブラリ。
* [pdf-viewer-kit](https://github.com/AmanKrr/pdf-viewer-kit) - `pdf.js`を基盤とする、現代的で高性能、軽量で特定のフレームワークに依存しない、PDF表示・注釈ライブラリ。
* [rm-ng-pdf-export](https://github.com/malikrajat/rm-ng-pdf-export) - 改ページと描画の機能を備え、HTMLコンテンツからPDFを生成・出力するAngularライブラリ。

### <a id="pipes"></a>パイプ

* [ng-generic-pipe](https://github.com/nigrosimone/ng-generic-pipe) - Angularアプリケーション用の汎用パイプ。
* [ng-dompurify](https://github.com/taiga-family/ng-dompurify) - 設定機能に全面的に対応する、[DOMPurify](https://github.com/cure53/DOMPurify)を使うAngularサニタイザー・パイプ。
* [ngx-signal-pipes](https://github.com/wassim-k/ngx-signal-pipes) - 関数型のパイプでAngularのシグナルを変換する機能。
* [ngx-pipe-lib](https://github.com/mofirojean/ngx-pipe-lib) - 日常の作業用の、よく使うAngularパイプの例。
* [memoize-pipe](https://github.com/ngx-rock/memoize-pipe) - Angularテンプレート内の計算結果をメモ化する汎用パイプ。
* [ngx-highlight-text](https://github.com/ultrasonicsoft/ngx-highlight-text) - HTMLマークアップ内の選択した単語を強調するAngularパイプ。
* [ngx-smart-pipes](https://github.com/Kavshree/-bjkavyashree-ngx-smart-pipes) - 実際の用途に合わせて設計された、軽量でツリーシェイキングに対応するスタンドアロンのAngularパイプのコレクション。
* [ngx-dynamic-search](https://github.com/mustafaer/ngx-dynamic-search) - 複雑に入れ子になったオブジェクトと配列を、動的に深く検索して絞り込むためのAngularパイプ。
* [ngx-name-capitalize](https://github.com/gabo2151/ngx-name-capitalize) - 複合姓、名前に含まれる小辞、ハイフン付きの名前、アポストロフィー、Unicode文字を扱い、名前の大文字表記を整えるAngularパイプ。
* [ngx-transforms](https://github.com/mofirojean/ngx-transforms) - 文字列、数値、日付、配列、オブジェクトなど用の、スタンドアロンでツリーシェイキングに対応する90以上のパイプ。
* [@unirate/angular](https://github.com/UniRate-API/angular-unirate) - [UniRate](https://unirateapi.com) APIのリアルタイム為替レート用の、Angularパイプ（`currencyRate`、`currencyConvert`）とObservable方式の`UniRateService`。`UniRateModule.forRoot()`または`provideUniRate()`でAngular 16〜22に対応。

### <a id="printing"></a>印刷

* [ngx-pos-print](https://github.com/gmetenou7/NGX-POS-PRINT) - AngularアプリケーションからPOS用サーマルプリンターでレシートを印刷する機能。
* [ngx-print](https://github.com/selemxmn/ngx-print) - コンテンツの印刷用の、すぐに使えるAngularライブラリ。
* [ngx-printer-demo](https://github.com/plaetzchen79/ngx-printer-demo) - ウィンドウ、ウィンドウの一部（div）、画像、HTMLElement、Angularオブジェクトを印刷する、シンプルなAngularサービス。

### <a id="qr-codes"></a>QRコード

* [ng-qrcode](https://github.com/mnahkies/ng-qrcode) - Angularプロジェクト用の、使いやすくAOTと互換性のあるQRコード生成ツール。
* [angularx-qrcode](https://github.com/cordobo/angularx-qrcode) - Ivyと互換性がある、高速で使いやすいIonic・Angular用QRコード生成ライブラリ。
* [dfts-qrcode](https://github.com/Dafnik/dfts-common/tree/main/libs/dfts-qrcode) - 完全に型安全でESモジュールと互換性がある、小さく使いやすいJavaScript・TypeScript用QRコード生成ライブラリ。
* [ngx-scanner](https://github.com/zxing-js/ngx-scanner) - ZXingを使う、Angular用のQRコード・バーコード・DataMatrixスキャナーコンポーネント。
* [ng-qrcode-svg](https://github.com/larscom/ng-qrcode-svg) - Angular用のシンプルなQRコード生成ツール。SVGのみに対応。
* [Angular-html5qrcode](https://github.com/mohamedfakhreldin/Angular-html5qrcode) - QRコードとバーコードの読み取り機能をアプリケーションに簡単に統合できる、[html5-qrcode](https://github.com/mebjas/html5-qrcode)のAngularラッパー。
* [ngx-kjua](https://github.com/werthdavid/ngx-kjua) - [kjua](https://github.com/lrsjng/kjua)を使うAngular QRコード生成コンポーネント。
* [ngx-qrcode](https://github.com/GNURub/ngx-qrcode) - [react-native-qrcode-skia](https://github.com/enzomanuelmangano/react-native-qrcode-skia)ライブラリを基盤とする、Angular 18以降用のシンプルなQRコード生成コンポーネント。
* [qrcode-angular](https://github.com/selfxyz/self/tree/main/sdk/qrcode-angular) - [Self.xyz](https://self.xyz/)用の検証QRコードを作成する、簡潔なAngularライブラリ。
* [qr-code-layout-generate-tool](https://github.com/shashi089/qr-code-layout-generate-tool) - React、Angular、Vue、Svelte、Node.js用の、特定のフレームワークに依存しないQRコードラベル・バッジの設計ツール。

### <a id="router"></a>ルーター

* [ngx-route-breadcrumbs](https://github.com/alevettih/ngx-route-breadcrumbs) - ルーティングのURLとパラメーターからパンくずリストを簡単に作成するAngularライブラリ。
* [xng-breadcrumb](https://github.com/udayvunnam/xng-breadcrumb) - Angular 6以降用の、設定不要で軽量、カスタマイズ可能でリアクティブなパンくずリスト。
* [angular-router-menus](https://github.com/muuvmuuv/angular-router-menus) - 複数のナビゲーション、入れ子のドロップダウン、注入トークンによるアクセスを備えた、型付きでカスタマイズ可能な、Angularのルートに基づくメニュー。
* [ngx-back-button](https://github.com/rbalet/ngx-back-button) - Angularで戻るボタンの機能を適切に扱うためのライブラリ。
* [ngx-foresight](https://github.com/akshykhade/ngx-foresight) - 利用者の意図に基づく賢いルーターの事前読み込み用の、[ForesightJS](https://foresightjs.com/)のAngular統合。
* [ngx-href](https://github.com/rbalet/ngx-href) - hrefの既定の機能を保ちつつ、Angularルーターを扱えるようにするディレクティブ。
* [ngx-multi-level-push-menu](https://github.com/ramiz4/ngx-multi-level-push-menu) - 豊富なカスタマイズ設定を持つ、レスポンシブな多階層プッシュメニュー用の、現代的でアクセシブルなAngularコンポーネント。
* [ngx-quicklink](https://github.com/mgechev/ngx-quicklink) - Angularルーター用のQuicklinkの先読み戦略。
* [ngx-route-manager](https://github.com/perez247/ngx-route-manager) - アプリケーションで使うすべてのルートURLを保存するシンプルなライブラリ。
* [ngx-speculation-rules](https://github.com/SkyZeroZx/ngx-speculation-rules) - [Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API)で先読みと事前描画を可能にし、SSRとZone.jsを使わない実行に対応する、より高速な画面遷移用のAngularライブラリ。
* [ui-router](https://github.com/ui-router/angular) - [UI-Router for Angular](https://ui-router.github.io)でAngularの状態に基づくルーティングを実現する機能。
* [ngx-url-params](https://github.com/shlomog12/ngx-url-params) - 簡潔なリアクティブAPIでURLクエリパラメーターを管理・同期する軽量なAngularサービス。
* [ngx-history](https://github.com/lumentut/ngx-history) - リアクティブプログラミングに対応する、現代的なAngular画面遷移履歴サービス。
* [angular-typed-router](https://github.com/dominicbachmann/angular-typed-router) - 単一のRoutes配列から、パスのユニオン型を推論し、型付きのnavigateタプルを得る、型安全なAngular画面遷移。コード生成も実行時コストも不要。

### <a id="scroll"></a>スクロール

* [ngx-ui-scroll](https://github.com/dhilt/ngx-ui-scroll) - Angular用の仮想・無限スクロール。
* [ngx-page-scroll](https://github.com/Nolanus/ngx-page-scroll) - 純粋なTypeScriptで書かれた、Angular用のアニメーション付きスクロール機能。
* [lithium-ngx-virtual-scroll](https://github.com/lVlyke/lithium-ngx-virtual-scroll) - 単列リスト、グリッドリスト、ビューのキャッシュに対応する、Angular用の高速で軽量な仮想スクロール機能。
* [angular-fullpage](https://github.com/alvarotrigo/angular-fullpage) - 全画面スクロールライブラリfullPage.jsの公式コンポーネント。
* [ngx-scrolltop](https://github.com/bartholomej/ngx-scrolltop) - Material Designに着想を得た、ページの先頭へスクロールする軽量なボタン。依存パッケージ不要。
* [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) - 標準のスクロールバーを隠しつつ機能を保つ、独自のスタイルを設定可能なオーバーレイスクロールバー用JavaScriptプラグイン。
* [ngx-scrollbar](https://github.com/MurhafSousli/ngx-scrollbar) - 標準のスクロール機構を使う、独自のオーバーレイスクロールバー。
* [ngx-tracing-beam](https://github.com/omnedia/ngx-tracing-beam) - 縦方向のスクロールに、追跡する光線のアニメーションを加えるシンプルなコンポーネントライブラリ。
* [ngx-marquee](https://github.com/omnedia/ngx-marquee) - コンテンツが無限に流れるマーキーを作成する、シンプルなコンポーネントライブラリ。
* [@omnedia/ngx-scrollbar](https://github.com/omnedia/ngx-scrollbar) - 滑らかなスクロールと全面的なスタイル制御を備えた、独自のスクロールバー。
* [ngx-virtual-dnd-list](https://github.com/mfuu/ngx-virtual-dnd-list) - ドラッグで並べ替え可能な仮想スクロールリストコンポーネント。
* [ngx-scroll-top](https://github.com/ProAngular/ngx-scroll-top) - Angularプロジェクト用の、設定可能で軽量な「先頭に戻る」ボタン。
* [ng-mat-select-infinite-scroll](https://github.com/HaidarZ/ng-mat-select-infinite-scroll) - Angular Materialの選択コンポーネント用の無限スクロールディレクティブ。
* [simplebar](https://github.com/Grsmto/simplebar) - 標準のスクロール機構を使う、独自のスクロールバー用の素のJavaScriptライブラリ。シンプルで軽量、使いやすく、複数ブラウザーに対応。
* [ngx-responsive-virtual-scroll](https://github.com/dcbeck/ngx-responsive-virtual-scroll) - 単列リスト、レスポンシブなグリッド、ビューのキャッシュ用の、高速で軽量なAngular仮想スクロール。
* [ngx-virtual-scroller-flexible](https://github.com/onexip/ngx-virtual-scroller-flexible) - 高さが異なる項目を無制限に円滑に描画する、非常に高速で柔軟な仮想スクロール。
* [ngx-perfect-scrollbar-portable](https://github.com/brakmic/ngx-perfect-scrollbar-portable) - Perfect Scrollbar用のAngularラッパーライブラリ。
* [ng-virtual-list](https://github.com/djonnyx/ng-virtual-list) - 非常に大きなリスト用の、性能を重視したライブラリ。
* [ngx-horizontal-menu-scroll](https://github.com/isahohieku/ngx-horizontal-menu-scroll) - 滑らかな移動操作を備えた、横スクロールメニューを作成する、軽量でカスタマイズ可能なAngularライブラリ。
* [usal](https://github.com/italoalmeida0/usal) - 特定のフレームワークに依存しないスクロールアニメーションライブラリ。
* [ar-virtual-scroll](https://github.com/artomenwork/ar-virtual-scroll) - 高さを自動的・動的に調整する軽量なAngular仮想スクロール。チャット、フィード、可変のリストに適する。
* [angular-infinity-scroller](https://github.com/Jayant061/angular-infinity-scroller) - 現代的なAngularとSSR環境で円滑に動作する、軽量で高性能な無限スクロールディレクティブ。
* [ngx-zoneless-scrollbar](https://github.com/Legalfina/ngx-zoneless-scrollbar) - Zone.jsを使わないモード向けの、標準のスクロール機構とCSSスタイルを使う軽量なAngularスクロールバー。
* [ngx-scrollbar-ultimate](https://github.com/andrew-dev283/ngx-scrollbar-ultimate) - 縦方向のスクロール用の軽量ライブラリ。
* [ngx-scrollspy](https://github.com/uniprank/ngx-scrollspy) - イベントを備えたAngularスクロール監視サービス。
* [ngx-virtual-grid](https://github.com/theryansmee/ngx-virtual-grid) - 無限読み込みに対応し、CSS Gridを使い、項目のサイズを自動測定して表示中の要素のみを描画する、レスポンシブなAngular仮想スクロールグリッド。
* [ngx-cerious-scroll](https://github.com/ceriousdevtech/ngx-cerious-scroll) - 高性能な仮想スクロール実装[Cerious Scroll](https://github.com/ceriousdevtech/cerious-scroll)のAngularバインディング。

### <a id="storage"></a>ストレージ

* [rxdb](https://rxdb.info/) - [IndexedDB](https://rxdb.info/articles/angular-indexeddb.html)の抽象化層。
* [ngx-reactive-storage](https://github.com/e-oz/ngx-reactive-storage) - Angular SignalsとRxJS Observablesに対応する、Promise方式のAPIを持つIndexedDB・localStorageラッパー。
* [ng2-webstorage](https://github.com/PillowPillow/ng2-webstorage) - LocalStorageとSessionStorageの管理ツール。
* [ngx-indexed-db](https://github.com/assuncaocharles/ngx-indexed-db) - IndexedDBをAngularサービスとしてラップするライブラリ。
* [angular-async-local-storage](https://github.com/cyrilletuzi/angular-async-local-storage) - シンプルなAPI、性能、Observable、検証機能を備えた、Angular用の効率的なクライアント側ストレージ。
* [signaldb](https://github.com/maxnowack/signaldb) - MongoDB風のインターフェース、TypeScript、シグナル方式のリアクティビティ、スキーマ不要の設計、高速なクエリを備えたローカルJavaScriptデータベース。
* [dexie](https://github.com/dexie/Dexie.js) - IndexedDB用の最小限のラッパー。
* [angular-web-storage](https://github.com/cipchk/angular-web-storage) - HTML5のLocal StorageとSession Storageの保存・復元用のAngularデコレーター。
* [ng-storage](https://github.com/edisonaugusthy/ng-storage) - AES-GCM暗号化、TTL、変更通知、Apollo風のプロバイダーを備えた、ブラウザーストレージ管理用の現代的でリアクティブなAngularサービス。
* [convex-angular](https://github.com/azhukau-dev/convex-angular) - Convex用のAngularクライアント。
* [secure-client-store](https://github.com/msaadart/secure-client-store) - ブラウザーとNode.jsで動作する、AES-256-GCMによるクライアント側暗号化用の汎用TypeScriptライブラリ。
* [ngx-persist](https://github.com/khvedela/ngx-persist) - localStorage、sessionStorage、IndexedDB、独自のバックエンドと同期する、Angular用の型安全でシグナル方式の永続状態ユーティリティ。
* [ngx-webstore](https://github.com/saurabh-vaish/ngx-webstore) - TypeScript、リアクティブAPI、暗号化、TTLなどに対応する、ブラウザーストレージ管理用のAngularライブラリ。
* [@moltendb-web/angular](https://github.com/maximilian27/moltendb-web) - シグナル、OPFS、GraphQL風のクエリ、Web Workersを備えた、Angular用のRust・WebAssembly製ローカル優先データベース。
* [ngx-secure-storage](https://github.com/MadeByRaymond/ngx-secure-storage) - AES暗号化を使い、localStorageとsessionStorageの暗号化データを安全に保存・取得・管理する、SSRと互換性があるAngularサービス。
* [ngx-local-vault](https://github.com/ysndmr/ngx-local-vault) - シグナルを基盤とする、Angular用のリアクティブな暗号化ブラウザーストレージ。gzip圧縮後2KB未満で、実行時の依存パッケージは不要。

### <a id="tooltips"></a>ツールチップ

* [popover](https://github.com/ncstate-sat/popover) - Angularポップオーバーコンポーネント。
* [ngx-tooltip-directives](https://github.com/mkeller1992/ngx-tooltip-directives) - [ng2-tooltip-directive](https://github.com/drozhzhin-n-e/ng2-tooltip-directive)に着想を得た、3種類のツールチップディレクティブ（文字列、HTML、テンプレート）を持つライブラリ。
* [@babybeet/angular-tooltip](https://github.com/babybeet/angular-tooltip) - Angularでプログラムから、または宣言的に、あるいは両方の方法でツールチップを簡単に表示する機能。
* [ngx-tippy-wrapper](https://github.com/farengeyt451/ngx-tippy-wrapper) - [Tippy.js](https://github.com/atomiks/tippyjs)のAngularラッパー。
* [@lazycuh/angular-tooltip](https://github.com/lazycuh/angular-tooltip) - Angularでプログラムから、または宣言的に、あるいは両方の方法でツールチップを簡単に表示する機能。
* [ngx-overlay](https://github.com/bastienmoulia/ngx-overlay) - ブラウザーと互換性がある、現代的なCSS・HTMLオーバーレイ（モーダル、ツールチップ、ポップアップ）用の軽量Angularライブラリ。
* [ngx-smart-tooltip](https://github.com/techasif/ngx-smart-tooltip) - シグナル、Web Animations API、OnPushの変更検知を使う、Angular 18用の軽量でカスタマイズ可能なツールチップライブラリ。
* [angular-tooltips](https://github.com/h-k-dev/angular-tooltips) - CSSで要素に結び付ける単一のポップオーバー要素を使う、現代的で軽量なAngularツールチップ。オーバーレイ、スクロールリスナー、トリガーごとのDOMは不要。

### <a id="ui-libraries"></a>UIライブラリ

* [Dev Extreme](https://js.devexpress.com/Overview/Angular/) - 機能が充実した、65以上のAngularコンポーネントのセット。
* [Zyra UI](https://zyraui.dev/) - デザイントークン、シグナル、ダークモードを優先したテーマ設定、WCAG 2.1 AAのアクセシビリティを備えた、現代的なAngularコンポーネントライブラリ。
* [Syncfusion](https://www.syncfusion.com/angular-components) - Tailwind CSSとBootstrapの両方と互換性がある[Essential UI Kit for Angular](https://github.com/syncfusion/essential-ui-kit-for-angular)を提供。
* [ej2-angular-ui-components](https://github.com/syncfusion/ej2-angular-ui-components) - 軽量でレスポンシブ、モジュール式でタッチ操作しやすい70以上のコンポーネントを備えた、SyncfusionのAngular UIライブラリ。
* [Nebular](https://github.com/akveo/nebular) - Eva Design Systemを基盤とする、カスタマイズ可能なAngular UIライブラリ。
* [NG-ZORRO](https://github.com/NG-ZORRO/ng-zorro-antd) - Ant DesignとAngularを基盤とする、エンタープライズ向けのUIコンポーネント。
* [NG-ALAIN](https://github.com/ng-alain/ng-alain/) - NG-ZORRO管理パネル用のフロントエンドフレームワーク。
* [zardui](https://github.com/zard-ui/zardui) - [shadcn-ui](https://github.com/shadcn-ui/ui)とNG-ZORROを基盤とする、アクセシブルなAngularコンポーネントのコレクション。すべてオープンソースで無料。
* [ngx-ui](https://github.com/swimlane/ngx-ui) - Angular 2以降用のスタイル・コンポーネントライブラリ。
* [optimus-ui](https://github.com/openng-org/optimus-ui) - [PrimeNG](https://github.com/primefaces/primeng)のフォーク。
* [Wijmo 5](http://wijmo.com/products/wijmo-5/) - Angular 2用のUIコンポーネント群。
* [Taiga UI](https://taiga-ui.dev/) - Angular用のオープンソースコンポーネント群。
* [AgnosUI](https://amadeusitgroup.github.io/AgnosUI/latest/) - 高度に設定可能な、特定のフレームワークに依存しないヘッドレスのコンポーネントライブラリ。
* [ng-aquila](https://github.com/allianz/ng-aquila) - Allianz GDFのオープンソースコンポーネントライブラリAquilaの、ホワイトラベル版。
* [oblique](https://github.com/oblique-bit/oblique) - スイスの企業デザインと、ブランドを反映する業務アプリ用のすぐに使えるコンポーネントを備えたAngularフレームワーク。
* [fundamental-ngx](https://github.com/SAP/fundamental-ngx) - SAP Design SystemのAngularコンポーネントライブラリFundamental Library for Angular。
* [designsystem](https://github.com/kirbydesign/designsystem) - Kirbyのデザイン理念を実装するUXコンポーネントライブラリKirby Design System。
* [sbb-angular](https://github.com/sbb-design-systems/sbb-angular) - SBB用のAngularライブラリ。
* [ui](https://github.com/alauda/ui) - Alauda Frontend Teamによる、エンタープライズ向けのAngular UIフレームワーク。
* [ngx-tethys](https://github.com/atinc/ngx-tethys) - Angular用の高速で信頼性の高いTethys Designコンポーネント。
* [antwerp-ui_angular](https://github.com/digipolisantwerp/antwerp-ui_angular) - ユーザーインターフェースとレスポンシブなウェブアプリを構築するための、コンポーネントインターフェースライブラリAntwerp UI。
* [ng-clarity](https://github.com/vmware-clarity/ng-clarity) - Angular用に構築された、拡張可能でアクセシブル、カスタマイズ可能なオープンソースのデザインシステムClarity Angular。
* [ngx-float-ui](https://github.com/tonysamperi/ngx-float-ui) - [Floating UI](https://floating-ui.com/)ライブラリのAngularラッパー。
* [carbon-components-angular](https://github.com/carbon-design-system/carbon-components-angular) - IBMのCarbon Design SystemのAngular実装。
* [dyte-io/ui-kit](https://github.com/dyte-io/ui-kit/tree/staging/packages/angular-library) - 任意のアプリケーションやウェブサイトにビデオ・音声通話をすばやく統合する、構築済みコンポーネントDyte UI Kit。
* [ng-zen](https://github.com/kstepien3/ng-zen) - プロジェクト内で、カスタマイズ可能で本番利用に対応するAngular UIコンポーネントを円滑に作成する機能。
* [ngwr](https://github.com/thekhegay/ngwr) - Angularアプリケーションを作成するAngular UIキット。
* [Windmillcode-Angular-CDK](https://github.com/WindMillCode/Windmillcode-Angular-CDK) - 細部と性能に配慮した、再利用可能なUIコンポーネントのコレクション。
* [ng-vcl](https://github.com/vcl/ng-vcl) - VCL CSSのエコシステムを基盤とするAngularコンポーネントライブラリ。
* [ngx-ui](https://ngxui.com/docs) - [Omnedia](https://github.com/omnedia)のNGXUI。ランディングページやマーケティング資料用の、スタンドアロンのAngularコンポーネント、ブロック、テンプレート。
* [po-angular](https://github.com/po-ui/po-angular) - Angularを基盤とするコンポーネントライブラリ。ドキュメントはポルトガル語。
* [ngx-nighthawk](https://github.com/evenuxjs/ngx-nighthawk) - Bootstrapで開発された、本番利用に対応するエンタープライズ向けプロジェクト。幅広い独自機能を提供。
* [@ng-verse/ui](https://github.com/ngverse/ui) - コピー＆ペーストして使う、本番利用に対応するAngularコンポーネント。
* [bryntum](https://bryntum.com/) - カレンダー、ガントチャート、カンバンボード、スケジュール管理用の、ウェブコンポーネント。
* [flexi-ui](https://github.com/TanerSaydam/flexi-ui) - 現代的で見栄えのよいフロントエンドアプリケーション用の、再利用可能でカスタマイズ可能なオープンソースUIコンポーネント[Flexi UI](https://flexi-ui.ecnorow.com/)。
* [@koobiq/angular-components](https://github.com/koobiq/angular-components) - セキュリティを重視する製品用の、UIパターン、コンポーネント、ツール、資料、指針を提供するオープンソースのデザインシステム。
* [Vega](https://vega.hlprd.com/) - 好みのフレームワークに合わせた再利用可能なコンポーネントとスタイルで、機能開発を迅速にするツール。
* [Blueprint UI](https://blueprintui.dev/) - あらゆる環境で動作する柔軟なUIコンポーネントとツールで、開発を迅速にする機能。
* [mantic-ui](https://github.com/KY-Programming/mantic-ui) - [Semantic UI](https://semantic-ui.com/)と[Fomantic UI](https://fomantic-ui.com/)用のAngularコンポーネント。
* [kage-ui](https://github.com/sanjib-kumar-mandal/kage-ui) - 枠線を重視するデザインシステムに着想を得た再利用可能なコンポーネントで、拡張可能で一貫したUIを作成する、軽量で柔軟なAngularライブラリ。
* [quix-quang](https://github.com/quix-it/quix-quang) - [Quix Srl](https://www.quixconsulting.com/)が開発したAngularコンポーネント・ユーティリティライブラリ。
* [ngx-vflow](https://github.com/artem-mangilev/ngx-vflow) - Angularでノード方式のUIを構築するオープンソースライブラリ。
* [ship-ui](https://github.com/shipuicom/core) - シグナル方式で、Zone.jsを使わない実行と互換性がある、現代的なAngular UIライブラリ。機能とドキュメントは[公式サイト](https://www.shipui.com)を参照。
* [slateui](https://github.com/angularcafe/slateui) - Angularの基本要素、Tailwind CSS、シグナルで構築したディレクティブ方式のコンポーネントを提供する、現代的でアクセシブルなUIコンポーネントライブラリ。
* [@nexcraft/forge](https://github.com/dev-ignis/forge) - 特定のフレームワークに依存しないWeb ComponentsのUIライブラリ。Angularではカスタム要素で動作。
* [ngx-nova-ui](https://github.com/lebocow/ngx-nova-ui) - シグナル、スタンドアロンコンポーネント、CSSを重視したテーマ設定で構築された、現代的なAngular 20 UIコンポーネントライブラリ。
* [MaxterDev NGX Components](https://github.com/MatoMakuch/maxterdev/tree/main/projects/ngx-components) - 柔軟性が高く、SCSSでカスタマイズ可能なAngularコンポーネントライブラリ。
* [gcds-components](https://github.com/cds-snc/gcds-components/tree/main/packages/angular) - `gcds-components-angular`パッケージで、[GC Design System](https://design-system.alpha.canada.ca/)のウェブコンポーネントをAngularに容易に統合する機能。
* [particle-ng](https://github.com/entake-org/particle-ng) - Angular MaterialとPrimeNGの代替として、柔軟で細かく制御できるコンポーネントを提供する、軽量でテーマ設定可能なライブラリ。
* [ngx-kit-ui](https://github.com/OpenKit-Labs/ngx-kit-ui) - モバイル・ウェブ用の現代的なAngular UIライブラリ。
* [TecnualNG](https://github.com/tecnual/tecnualng) - ウェブアプリケーションを構築するための、再利用可能でカスタマイズ可能、アクセシブルなコンポーネントを提供する現代的なAngular UIライブラリ。
* [takeoff-ui](https://github.com/turkishtechnology/takeoff-ui) - Stencil.jsで開発された、特定のフレームワークに依存しないウェブコンポーネントを提供するデザインシステム。
* [mozek](https://github.com/thecodemeor/mozek-package) - 余白、色、タイポグラフィーを統一し、明快でシンプル、過剰に複雑化しないスタイル設定用の、軽量なSCSSツールキット・UIライブラリ。
* [Magma](https://github.com/ikilote/Magma) - エコシステムを支える幅広いコンポーネント、サービス、パイプ、ディレクティブ、ユーティリティ。誰でも利用・拡張可能。
* [ngx-aespartal-ui](https://github.com/Aespartal/ngx-aespartal-ui) - Atomic Designの原則で構築された、軽量でカスタマイズ可能なAngularコンポーネントライブラリ。
* [JSuites](https://github.com/jsuites/jsuites) - 独自のラッパーやディレクティブでAngularに統合可能な、UIコンポーネントとユーティリティ（フォーム、モーダル、入力）のコレクション。
* [ngx-support-chat](https://github.com/avs2001/ngx-support-chat) - 顧客サポートのチャットインターフェース用の、表示に専念するAngularコンポーネントライブラリ。
* [luma-ui](https://github.com/lumaui/luma-ui) - Angularアプリケーション用のNeo-Minimalデザインシステム。
* [Mundane UI](https://github.com/waga97/Mundane-UI) - 特定のフレームワークに依存せず、依存パッケージ不要の軽量UIコンポーネントライブラリ。
* [eagami](https://github.com/mwiraszka/eagami) - CSSカスタムプロパティを基盤とする、軽量でアクセシブルなAngular UIコンポーネントライブラリ。
* [angular-liquid-glass](https://github.com/thiagopac/angular-liquid-glass) - リキッドグラスとグラスモーフィズムのインターフェース用の、スタンドアロンAngularコンポーネントライブラリ。
* [ngx-pk-ui](https://github.com/superpck/ngx-pk-ui) - UIコンポーネントとCSSユーティリティを提供するAngular 21コンポーネントライブラリ。
* [magary](https://github.com/JhoanGon/magary) - スタンドアロンを重視する、現代的なAngular UIライブラリのモノレポ。
* [ngx-core-components](https://github.com/prajaktadube/ngx-core-components) - シグナル、OnPushの変更検知、実行時の依存パッケージ不要という構成で、本番利用に対応するUIコンポーネントを提供するAngular 19以降用ライブラリ。
* [ngx-cupertino](https://github.com/gacc94/ngx-cupertino) - AppleのiOS 26・macOS Tahoe 26のデザインシステムを実装するAngularコンポーネント。
* [kanso-protocol](https://github.com/GregNBlack/kanso-protocol) - W3C DTCGトークン、Web Components、AIに対応するMCPサーバーを備えた、複数のフレームワークに対応するオープンソースのデザインシステム。不要なものを取り除く「簡素」の考え方を基盤とする。
* [frame-ui](https://github.com/Gamekohl/frame-ui) - 現代的な基本要素を基盤とする、カスタマイズ可能なAngularコンポーネントライブラリ。
* [coss-ui-angular](https://github.com/lordsarcastic/coss-ui-angular) - 公開されている[COSS UIのカタログ](https://www.coss.com/ui/docs)に着想を得た、アクセシブルなAngularコンポーネント。
* [OpenMFP Web Components Library](https://github.com/openmfp/webcomponents) - 固定原文で最新とされるシグナル方式のAPIで構築した宣言型UIコンポーネントを備えた、現代的なAngular 21ウェブコンポーネントライブラリ。
* [ngxsmk-ui-kit](https://github.com/NGXSMK/ngxsmk-ui-kit) - 200以上の無料Angularコンポーネント。シグナルを自然に利用し、Zone.jsは不要。トークン方式のテーマと、組み込みのダークモードを備える。
* [NgBracket](https://ngbracket.com) - フォーム、データテーブル、スケジューラー、チャートなどの、アクセシビリティを重視するAngularコンポーネントパック。v22以降はSignal Formsとシグナルを自然に利用。原文ではWCAG AAに対応し、キーボードとスクリーンリーダーで手動テスト済みとされる。

### <a id="ui-libraries-built-on-bootstrap"></a>BootstrapベースのUIライブラリ

* [angular-bootstrap-md](https://mdbootstrap.com/docs/angular/) - Bootstrap 5とAngular 17用のMaterial Design。
* [ng-bootstrap](https://ng-bootstrap.github.io) - Bootstrap 5のCSSと、Angularのエコシステムに合わせたAPIで構築されたAngularウィジェット。
* [ng-bootstrap-addons](https://github.com/mikaelbotassi/ng-bootstrap-addons) - 入力・フォームコントロールなど、`ng-bootstrap`にないUIコンポーネントを追加する機能。
* [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap) - Ivyエンジンに対応する、Angular用の高速で信頼性の高いBootstrapウィジェット。
* [design-angular-kit](https://github.com/italia/design-angular-kit) - Angularで開発するウェブアプリケーションを作成するための、Bootstrap Italiaを基盤とするツールキット。
* [yoozsoft](https://www.yoozsoft.com/ys-ng/home) - Bootstrap 5、CSS、NG Bootstrap 17で構築された、Angularのエコシステム向けAPIを持つウィジェット。
* [ngx-gccb](https://www.npmjs.com/package/ngx-gccb) - 使いやすい共通コンポーネント、ディレクティブ、パイプ、サービスを備えたAngular 19以降用ライブラリ。コード例は[紹介ページ](https://ngx-gccb.netlify.app/)を参照。
* [cute-widgets](https://github.com/cute-widgets/base) - Bootstrap 5以降のユーティリティとデザイン用クラスでスタイルを設定した、ネイティブなディレクティブ方式のコンポーネントを提供するオープンソースAngular UIライブラリ。

### <a id="ui-libraries-built-on-material"></a>MaterialベースのUIライブラリ

* [angular-ui-plusify](https://github.com/RockyCott/angular-ui-plusify) - 日時ピッカーとMarkdownエディターを備えたライブラリ。完全なAngular UIツールキットへの拡張を計画。
* [MDBootstrap](https://github.com/mdbootstrap/mdb-angular-ui-kit) - Bootstrap 5・Angular 17用UIキット。700以上のコンポーネント、MITライセンス、簡単な導入。
* [Angular Material](https://material.angular.dev/) - Angular用のMaterial Designコンポーネント。
* [Covalent](https://github.com/Teradata/covalent/) - Angular Materialを基盤とするTeradata UI Platform。
* [IgniteUI Angular](https://github.com/IgniteUI/igniteui-angular) - Angularに直接対応し、Materialを基盤とするAngular UIコンポーネントを揃えたIgnite UI for Angular。グリッド、チャートなどを備える。
* [angular-jqwidgets](https://www.jqwidgets.com/angular/) - Material Designを備えた高機能なAngularコンポーネント。
* [@ng-matero/extensions](https://github.com/ng-matero/extensions) - Angular Material拡張ライブラリ。
* [angular-material-css-vars](https://github.com/johannesjo/angular-material-css-vars) - Angular MaterialでCSS変数を利用するための小さなライブラリ。
* [ngx-components](https://github.com/DSI-HUG/ngx-components) - Angular用の便利なコンポーネントとユーティリティ関数。
* [ngx-material-auth](https://github.com/Service-Soft/ngx-material-auth) - 認証と認可のフロントエンド部分の機能を提供するAngularライブラリ。
* [ngx-material-navigation](https://github.com/Service-Soft/ngx-material-navigation) - ナビゲーションバーとサイドナビゲーションの組み合わせやフッターなどのMaterialナビゲーション要素を作成し、ブレークポイントに応じて項目を自動的に移動する機能。
* [ngx-material-entity](https://github.com/Service-Soft/ngx-material-entity) - `NgxMaterialEntity`でエンティティを作成し、プロパティ上で直接その表示方法を定義する機能。完全で高度にカスタマイズ可能なCRUDテーブルも生成可能。
* [c3-components](https://github.com/c3ulnta0rk/c3-components) - `@angular/material`ライブラリを拡張する、オープンソースのコンポーネントライブラリ。
* [simplematcomponents](https://github.com/wobkenh/simplematcomponents) - Angular Material Designに適合する、またはそれを利用するAngularコンポーネント群。
* [Angular Material Dev UI](https://ui.angular-material.dev/home) - Angular MaterialとTailwind CSSを基盤とするアプリケーション用の、コンポーネントとブロックをまとめて探せる場所。
* [nmce](https://github.com/zijianhuang/nmce) - 複雑でデータの豊富な業務アプリ用に、再利用可能なコードとUIの拡張を提供するAngular Material拡張群。
* [NgxMatFacetToolkit](https://github.com/drsutphin/NgxMatFacetToolkit) - Material UIを備えた、Angularのスタンドアロンのファセット絞り込みツールキット。
* [ngx-dynamic-stepper](https://github.com/yingyu-projects/ngx-dynamic-stepper) - Angular Material Stepperを基盤とする、動的なウィザード形式のステッパーを作成する、柔軟なAngularライブラリ。
* [BuilderKit](https://builderkit.dev/) - ブロック、テンプレート、Angularアプリケーション構築用の堅固な基盤を備えた、Angular Materialを基盤とする完全なUIツールキットと現代的なデザインシステム。
* [angular-material-extended](https://github.com/reisi007/angular-material-extended) - Angular Materialのコミュニティ拡張。スタンドアロン、シグナル、Zone.jsを使わない実行、SSR、M3テーマ設定に対応。
* [mat-exp](https://github.com/Angular-Material-Dev/mat-exp) - 固定原文で最新とされるMaterial Design 3 Expressive Design Systemを基盤とする、Angular Material用のコンポーネント・スタイルライブラリ。
* [angular-material-components](https://github.com/fbf-prog64/angular-material-components) - 日時ピッカー、時刻ピッカー、カラーピッカーなどをAngular Materialプロジェクトに追加するコンポーネント。

### <a id="ui-libraries-built-on-tailwind-css"></a>Tailwind CSSベースのUIライブラリ

* [angular-superui](https://github.com/bhaimicrosoft/angular-superui) - Tailwind CSS v4、TypeScript、Angular 17以降のシグナルで構築された、本番利用に対応する50以上のコンポーネントを備えたAngular UIライブラリ。
* [angular-tailwind-ui](https://github.com/quedicesebas/angular-tailwind-ui) - Angular 19とTailwind CSS 3を使う、シンプルで使いやすいコンポーネント、ディレクティブ、サービス。
* [bpdm/ng](https://github.com/bpdm-hq/bpdm-ui) - 共通のデザイントークン群で制御され、Reactに直接対応する版もある、Angular CDKとTailwind CSSを基盤とするアクセシブルでテーマ設定可能なAngularコンポーネントライブラリ。
* [elbe-ui](https://github.com/marcjulian/elbe-ui) - Tailwind CSSとSpartan UIで構築されたAngular UIコンポーネント。
* [Flowbite](https://flowbite.com/docs/getting-started/angular/) - Angularに対応する、Tailwind CSSで構築されたオープンソースUIコンポーネント。
* [FlyonUI](https://github.com/themeselection/flyonui) - FlyonUIをAngularとTailwind CSSに[統合](https://flyonui.com/framework-integrations/angular/)し、現代的でレスポンシブなUIを作成して開発を効率的に円滑にする機能。
* [Galaxy UI](https://github.com/buikevin/galaxy-design) - Angularにアクセシブルなコンポーネントを提供する汎用コンポーネントライブラリ。
* [koala-ui](https://github.com/igordrangel/koala-ui) - インターフェースの開発を迅速にする、現代的でアクセシブルなコンポーネントライブラリ。
* [ng-brutalism](https://github.com/khangtrannn/ng-brutalism) - シグナル、Zone.jsを使わない実行、Tailwind CSS v4を備えた、ネオブルータリズムのAngular UIライブラリ。太い枠線、ずらした影、一貫した独自の美的方針を採用。
* [Metronic](https://keenthemes.com/metronic/tailwind/docs/getting-started/integration/angular) - 現代的で拡張可能なウェブアプリケーションを構築するTailwind CSS UIツールキット。
* [ngx-lite-suite](https://github.com/michaelsch72/ngx-lite-suite) - グラスモーフィズム、グラデーション、滑らかなアニメーションを持つ「Lite Suite」デザインシステムのAngular UIライブラリ。
* [ngx-tailwindcss](https://github.com/pegasusheavy/ngx-tailwindcss) - スタイルを全面的に制御できる、アクセシブルなコンポーネントを提供する、Tailwind CSS 4以降用のカスタマイズ可能なAngular UIライブラリ。
* [ngx-tw](https://github.com/bugMaker-237/ngx-tw) - Angularアプリケーション用に、現代的でカスタマイズ可能なUIコンポーネント群を提供する、Tailwind CSS製のコンポーネントライブラリ。
* [nicacoder-ng](https://ng.nicacoder.com/) - 開発を迅速にし、プロジェクトの一貫性を保つ、カスタマイズ可能なコンポーネントを一元化したAngularライブラリ。
* [Preline UI](https://preline.co/docs/frameworks-angular.html#docs-on-this-page-sidebar) - ユーティリティを重視するTailwind CSSフレームワークを基盤とする、構築済みUIコンポーネント群を提供するオープンソースの[Preline](https://github.com/htmlstreamofficial/preline)。
* [PrimeBlocks](https://primeblocks.org/) - 迅速なアプリケーション開発向けに設計されたUIブロック。
* [seacotools](https://github.com/Seacotec/seacotools) - Tailwind CSSと互換性のある再利用可能なUIコンポーネントとサービスを提供する、現代的なAngularアプリケーション用ライブラリ。
* [semantic-components](https://github.com/gridatek/semantic-components) - 意味を表すHTML、全面的なアクセシビリティ対応、軽量で柔軟な構成を備えた、モジュール式のAngular CDK・Tailwind UI要素。
* [simui](https://github.com/dofu-lab/simui) - Tailwind CSSとSpartanで構築されたAngular UIコンポーネント。
* [starting-point-ui](https://github.com/gufodotdev/starting-point-ui) - shadcn/uiに着想を得た、特定のフレームワークに依存しないTailwind CSSコンポーネント。Angularと完全に互換。
* [synerity-ui](https://github.com/synerity-ai/synerity-ui) - 現代的なアプリ用に、アクセシブルで高性能な、Tailwindのスタイルを使う90以上のコンポーネントを備えた、Angular 20以降用のエンタープライズ向けライブラリ。
* [Tailkit UI](https://tailkit.com/) - 丁寧に作り込まれ、カスタマイズ可能で全面的にレスポンシブな、プロジェクト用のTailwind CSSコンポーネント、テンプレート、ツール。
* [tailng](https://github.com/tociva/tailng) - Tailwindでスタイルを設定し、Material風の外観にするAngularコンポーネント。
* [volt-ui](https://github.com/Andersseen/volt-ui) - シグナル、Tailwind CSS v4、CVA、`ng-primitives`で構築された、全面的なアクセシビリティに対応し、テーマ設定可能なAngularコンポーネント。
* [zapui](https://github.com/zapuilib/zapui) - [zap:ui](https://zapui.togethercreative.co.uk/)のTailwindを使うデザインシステムで、拡張可能なAngularアプリケーションを構築する機能。

### <a id="ui-library-and-framework-ionic"></a>UIライブラリ／フレームワークIonic

* [公式サイト](https://ionicframework.com)
* [公式GitHubリポジトリ](https://github.com/ionic-team/ionic-framework)
* [Ionic Academy](https://ionicacademy.com/) - Ionicを学ぶためのサイト。
* [Elite Ionic](https://eliteionic.com/) - ネイティブウェブアプリケーションを作成したいAngular開発者用の上級トレーニング。
* [Ionic Start](https://ionicstart.com/) - Angularで現代的なリアクティブ開発を学びながら、Ionicでウェブアプリケーションとネイティブモバイルアプリケーションを構築する教材。
* [awesome-cordova-plugins](https://github.com/danielsogl/awesome-cordova-plugins) - Cordova・PhoneGapとオープンなウェブ技術で構築したモバイルアプリケーション用のネイティブ機能。TypeScriptにも対応。
* [ionic-angular-library](https://github.com/rdlabo-team/ionic-angular-library) - Ionic Angularアプリケーションの開発に役立つコンポーネントとサービスのコレクション。
* [ionic-angular-collect-icons](https://github.com/rdlabo-team/ionic-angular-collect-icons) - ionIconsをまとめてエクスポートファイルを自動生成し、小規模なプロジェクトのaddIcons()管理を簡単にするライブラリ。
* [IDEA-Ionic8-extra](https://github.com/iter-idea/IDEA-Ionic8-extra) - Ionic 8で構築され、複数のNPMパッケージで配布される、[IDEA](https://www.iter-idea.com/)の追加コンポーネントとサービス。
* [ionic-component-snippets](https://github.com/LennonReid/ionic-component-snippets) - 開発者やアプリケーションに役立つ、非公式のIonicデモ・ライブラリのリポジトリ。
* [ionic-header-parallax](https://github.com/RaschidJFR/ionic-header-parallax) - `ion-header`要素に視差効果を加え、ページ先頭ではカバー写真を表示し、下へスクロールすると通常のツールバーに移行するディレクティブ。
* [ionic-state](https://github.com/godenji/ionic-state) - Ionicアプリケーションで状態を扱うユーティリティ。
* [ionx-search-select](https://github.com/kisimediaDE/ionx-search-select) - スタンドアロンコンポーネント、シグナル、完全な`ControlValueAccessor`対応を備えた、現代的なAngular・Ionic検索・選択機能。
* [ionic-insta-api-wrapper](https://github.com/appit-online/ionic-insta-api-wrapper) - ログインとCookieに対応し、Instagramのストーリー、リール、投稿、プロフィールを取得する、軽量なIonic・Cordovaライブラリ。
* [ionic-adv-tooltip](https://github.com/PhaZRic/ionic-adv-tooltip) - 任意のホストでテンプレート、画像、動画、ライブプレビューを描画する、Ionic Angular用の多様なメディアに対応するツールチップとポップオーバー。
* [PushApp-Capacitor](https://github.com/mehery-soccom/PushApp-Capacitor) - Ionic・Angular・Capacitorアプリケーションのプッシュ通知、アプリ内メッセージ、イベント追跡、セッション処理用のCapacitorプラグイン。

### <a id="ui-primitives"></a>UIプリミティブ

* [ng-primitives](https://github.com/ng-primitives/ng-primitives) - アクセシビリティ、カスタマイズ性、開発者の使いやすさを重視した、低レベルのUIコンポーネントライブラリ。
* [primitives](https://github.com/radix-ng/primitives) - [Radix UI](https://www.radix-ui.com/) PrimitivesのAngular移植版。アクセシブルでカスタマイズ可能。
* [vacui-ui](https://github.com/DanielAlcaraz/vacui-ui) - 基盤となる要素として、ユーティリティを重視する基本要素と低レベルのディレクティブを提供する、ヘッドレスのAngularライブラリ。
* [ngx-headless](https://github.com/fawadtariq/ngx-headless) - [Headless UI](https://headlessui.com)と[FormKit](https://formkit.com)に着想を得た、スタンドアロンでアクセシブルなAngular基本要素のコレクション。
* [Clean Architecture Frontend](https://github.com/ialiaslani/caf) - クリーンアーキテクチャでフロントエンドアプリケーションを構築する、特定の業務領域に依存しない基本要素。React、Vue、Angular、将来の任意のフレームワークで動作。
* [@luminacn/ui](https://github.com/luminacn/ui) - シグナルを重視する、Angular用ヘッドレスUI基本要素。
* [Bloc UI](https://github.com/debasish1996/BLOC-UI) - デザイン方針を強制しない、軽量でアクセシブルなAngularコンポーネント。独自のスタイル、または必要に応じてテーマパッケージを利用。
* [angular-primitives](https://github.com/snatuva/angular-primitives) - 拡張可能でアクセシブルなUIシステムを構築する、シグナルを重視したAngular基本要素。

### <a id="viewers"></a>ビューアー

* [file-viewer](https://github.com/ameyb88/file-viewer) - PDF、画像、文書、スプレッドシートなどに対応する、Angularアプリケーション用の汎用的なファイルプレビューライブラリ。
* [json-diff](https://github.com/mufasa-dev/Json-diff) - 2つのJSONオブジェクトをすばやく比較し、相違点を強調するAngular製ツール。
* [ngx-diff](https://github.com/rars/ngx-diff) - テキストの差分を表示するAngularコンポーネントライブラリ。
* [ngx-gist](https://github.com/ProAngular/ngx-gist) - GitHub gistとローカルのコードスニペットを表示する、Angular Materialとhighlightjsのスタイルを使う表示ボックス。
* [ngx-json-diff-viewer](https://www.npmjs.com/package/ngx-json-diff-viewer) - 2つのJSONオブジェクトの差分を視覚的に表示するAngularコンポーネント。
* [ngx-json-schema-viewer](https://github.com/jy95/ngx-json-schema-viewer) - Angular用のJSON Schemaビューアー。
* [ngx-json-treeview](https://github.com/MichaelDoyle/ngx-json-treeview) - Angular用の折りたたみ可能なJSONツリービュー。
* [ngx-omniview](https://github.com/binapani-edu/ngx-omniview) - 単一のコンポーネントで、未加工の文字列入力をプレーンテキスト、HTML、Markdown、LaTeX、MathJax、JSONなどとして円滑に表示する、Angular用の一体型コンテンツビューアー。
* [ngx-profile-comparison](https://github.com/singharsh0/ngx-profile-comparison) - 2つの利用者プロフィールの共通点と相違点を強調して視覚的に比較する、本番利用に対応するAngularコンポーネントライブラリ。
* [ngx-serial-console](https://github.com/binuud/ngx-serial-console) - シリアル機器の出力を監視するAngularコンポーネントとサービス。
* [ngx-universal-viewer](https://github.com/Imishu29/ngx-universal-viewer) - 連続スクロールまたはページごとのモードでPDF、Word、Excel、PowerPointファイルを表示するAngularコンポーネント。
* [ngx-voyage](https://github.com/mschn/ngx-voyage) - AngularとPrimeNG用のファイルエクスプローラー。
* [ngx-file-peek](https://github.com/valtonngara/ngx-file-peek) - 任意のURLやストレージから、実際のファイル内容をサムネイルとして描画する、Angularスタンドアロンコンポーネントライブラリ。
* [ngx-json-explorer](https://github.com/Swaraj55/ngx-json-explorer) - インライン編集、検索、オプション設定を備えた、操作可能で全面的にカスタマイズ可能なAngular JSONツリーコンポーネント。
* [ngx-superlite-img-viewer](https://github.com/david-marquez-44/ngx-superlite-img-viewer) - 高速で直感的なビューアーに画像ギャラリーを表示する、非常に軽量なAngularライブラリ。

### <a id="visual-effects"></a>視覚効果

* [angular-tag-cloud-module](https://github.com/d-koppenhagen/angular-tag-cloud-module) - ワードクラウド・タグクラウドを生成するモジュール。
* [levita](https://github.com/Jeromearsene/levita) - 加速度センサーに対応する、軽量な3Dの傾き・視差効果。
* [ng-snowfall](https://github.com/Leksip/ng-snowfall) - 雪の結晶がマウスの動きに反応し、現実的な風の効果を作り出す、操作可能なAngular降雪コンポーネント。
* [ng-whiteboard](https://github.com/mostafazke/ng-whiteboard) - 軽量なAngularホワイトボードコンポーネント。
* [@craftedcode-dev/ngx-analog-clock](https://github.com/craftedcode-dev/ngx-analog-clock) - タイムゾーン、独自のテーマ、豊富なスタイル設定に対応する、Angularアプリケーション用アナログ時計コンポーネント。
* [@DerStimmler/ngx-analog-clock](https://github.com/DerStimmler/ngx-analog-clock) - Angularアプリケーション用のカスタマイズ可能なアナログ時計。
* [ngx-color-scheme](https://github.com/rbalet/ngx-color-scheme) - Angularアプリケーションにダークモードを簡単に追加する機能。
* [ngx-countdown](https://github.com/cipchk/ngx-countdown) - シンプルで使いやすく、高性能なカウントダウン。
* [ngx-fancy](https://github.com/ineam/ngx-fancy) - テンプレート要素間の装飾的な区切り。
* [ngx-font-picker](https://github.com/zefoy/ngx-font-picker) - Angular用のGoogle Fontsのフォント選択ウィジェット。
* [ngx-gauge](https://github.com/ashish-chopra/ngx-gauge) - Angularアプリケーションとダッシュボード用の、高度にカスタマイズ可能なゲージコンポーネント。
* [ngx-glassy-effect](https://github.com/anassmdi/ngx-glassy-effect) - HTML要素にガラス風の効果を適用するAngularディレクティブ。
* [ngx-globe](https://github.com/omnedia/ngx-globe) - 地球儀のアニメーションを備えたコンテナーを作成する、シンプルなコンポーネントライブラリ。
* [ngx-gooey](https://github.com/wadie/ngx-gooey) - 形状のブロブ化やメタボールに使う、Angular用の粘性のある効果。
* [ngx-lamp](https://github.com/omnedia/ngx-lamp) - ランプを作成するシンプルなコンポーネントライブラリ。
* [ngx-neon-underline](https://github.com/omnedia/ngx-neon-underline) - コンポーネントに輝くネオンの下線効果を提供するAngularライブラリ。
* [ngx-parallax-stars](https://github.com/DerStimmler/ngx-parallax-stars) - 視差効果を備えた星を作成するAngularライブラリ。
* [ngx-waterbox](https://github.com/vwochnik/ngx-waterbox) - アイソメトリック表示の水の箱コンポーネント。

## <a id="underlying-technologies"></a>基盤技術

### RxJS

* [公式サイト](https://rxjs.dev/) - JavaScript用のReactive Extensionsライブラリ。
* [eslint-plugin-rxjs-x](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x) - 破壊的変更と改善を伴い、ESLintのフラット設定対応を追加した、[eslint-plugin-rxjs](https://github.com/cartant/eslint-plugin-rxjs)のフォーク。
* [learn-rxjs](https://github.com/btroncone/learn-rxjs) - RxJSの明快な例、解説、資料。
* [ng-event-bus](https://github.com/cristiammercado/ng-event-bus) - Angular用のRxJS方式のメッセージバスサービス。
* [ngx-device-permission](https://github.com/PhilipSh/ngx-device-permission) - RxJSでカメラ、マイク、位置情報などのデバイス権限をリアクティブに扱うAngularライブラリ。
* [ngx-operators](https://github.com/nilsmehlhorn/ngx-operators) - Angular用のRxJS演算子。
* [operators](https://github.com/jscutlery/devkit/tree/main/packages/operators) - よく使うパターンを簡単にする、複数のRxJS演算子をまとめたパッケージ。
* [reactive-event-source](https://github.com/andreasnicolaou/reactive-event-source) - 自動再接続、リーク防止、リアクティブな状態管理を備えた、軽量なRxJS方式のEventSourceラッパー。
* [redux-observable](https://github.com/redux-observable/redux-observable) - 「Epics」でReduxアクションの副作用を扱うRxJSミドルウェア。
* [rx-computed](https://github.com/jscutlery/devkit/tree/main/packages/rx-computed) - シグナルの`computed()`の、RxJSを基盤とする非同期版。
* [@mrOranger/RxJs](https://github.com/mrOranger/RxJs) - RxJSライブラリを使う、リアクティブプログラミングの考え方についての理論と例。
* [rxjs-broker](https://github.com/chrisguttandin/rxjs-broker) - WebRTC DataChannelsとWebSockets用のRxJSメッセージブローカー。
* [rxjs-challenge](https://github.com/AngularWave/rxjs-challenge) - Observableを扱う技能を練習する、小さなRxJSパズル群。
* [rxjs-collection](https://github.com/henryruhs/rxjs-collection) - RxJSで拡張したArray、Map、WeakMap、Set、WeakSet。
* [rxjs-common](https://github.com/paddls/rxjs-common) - 便利なRxJS演算子のコレクション。
* [rxjs-conduit](https://github.com/Fasteroid/rxjs-conduit) - リアクティブプログラミングを容易にする追加機能を備えた、RxJS ReplaySubjects。
* [rxjs-course](https://github.com/angular-university/rxjs-course) - Angular UniversityのRxJS講座。
* [subscribable-things](https://github.com/chrisguttandin/subscribable-things) - さまざまなブラウザーAPI用のリアクティブなラッパーのコレクション。
* [subsiphon](https://github.com/shobeiry/subsiphon) - インデックス付き・名前付きのキーとシンプルなクリーンアップメソッドで、複数のRxJS購読を管理する軽量ユーティリティ。
* [web-serial-rxjs](https://github.com/gurezo/web-serial-rxjs) - ウェブアプリケーションのシリアルポート通信を容易にする、Web Serial APIのリアクティブなRxJSラッパーを提供するTypeScriptライブラリ。

### TypeScript

* [公式サイト](https://www.typescriptlang.org/)
* [公式TypeScript REPL](https://www.typescriptlang.org/play/)
* [公式GitHubリポジトリ](https://github.com/Microsoft/TypeScript)
* [DefinitelyTypedのGitHubリポジトリ](https://github.com/DefinitelyTyped/DefinitelyTyped) - TypeScript型定義のリポジトリ。
* [guardz](https://github.com/thiennp/guardz) - 構造化されたエラー処理による実行時検証用の、軽量で依存パッケージ不要のTypeScript型ガード。
* [mutates](https://github.com/IKatsuba/mutates) - `ng-morph`からフォークされた、TypeScript AST変更ツール群。Angularに限らず、プロジェクト全体の幅広い変換が可能。
* [quicktype](https://github.com/glideapps/quicktype) - JSON、Schema、GraphQLから型と変換処理を生成するツール。
* [Sheriff](https://github.com/softarc-consulting/sheriff) - TypeScriptプロジェクト用の軽量なモジュール化。
* [Total TypeScript Book](https://github.com/total-typescript/total-typescript-book) - 固定原文で刊行予定とされるTotal TypeScript書籍の補助リポジトリ。
* [transform.tools](https://transform.tools/json-to-typescript) - APIレスポンスへの型付けにかかる時間を大幅に減らす、JSONからTypeScriptへの変換ツール。
* [trpc](https://github.com/trpc/trpc) - エンドツーエンドで型安全なAPIを実現するツール。
* [ts-essentials](https://github.com/ts-essentials/ts-essentials) - 必要なTypeScript型を一か所にまとめたライブラリ。
* [ts-pattern](https://github.com/gvergnaud/ts-pattern) - 網羅性の検査と型推論を備えた、TypeScript用パターンマッチングライブラリ。
* [ts-serializer](https://github.com/paddls/ts-serializer) - モデルを厳密な型付きのTypeScriptクラスにシリアライズする機能。
* [tsconfig](https://github.com/smartrecruiters/tsconfig) - すべての厳格なルールを含み、プロジェクトの型安全性を改善するSmartRecruitersのtsconfig。
* [typebox](https://github.com/sinclairzx81/typebox) - TypeScriptの静的な型解決を備えたJSON Schema型ビルダー。
* [type-challenges](https://github.com/type-challenges/type-challenges) - オンライン判定システムを備えた、TypeScriptの型に関する課題のコレクション。
* [type-fest](https://github.com/sindresorhus/type-fest) - 必要なTypeScript型のコレクション。パッケージを依存関係として追加するか、必要な型をコピー＆ペーストして利用。
* [typehero](https://github.com/typehero/typehero) - TypeScript開発者のコミュニティで交流し、協力して成長するためのサービス。
* [typescript-book](https://github.com/gibbok/typescript-book) - TypeScriptで効果的に開発するための簡潔なガイド。
* [valibot](https://github.com/fabian-hiller/valibot) - 構造化データを検証する、モジュール式で型安全なスキーマライブラリ。
* [zod](https://github.com/colinhacks/zod) - 静的な型推論を備えた、TypeScriptを重視するスキーマ検証。

## <a id="framework-interoperability"></a>フレームワーク相互運用

### <a id="cross-framework-integration"></a>フレームワーク横断統合

* [detector](https://github.com/kitium-ai/detector) - プラットフォーム、フレームワーク、ブラウザー、機能を高速で汎用的に検出する、依存パッケージ不要でTypeScriptを重視するライブラリ。
* [@oguimbal/ngx-react](https://github.com/oguimbal/ngx-react) - ReactとAngularのコンポーネントの円滑な統合や、両者間の容易な移行を可能にするライブラリ。
* [ngx-reactify](https://github.com/knackstedt/ngx-reactify) - AngularとReactのアプリケーションを一緒に動かしやすくするライブラリ。
* [ng-react-bridge](https://github.com/john310897/ng-react-bridge) - ディレクティブでAngularコンポーネント内にReactコンポーネントを円滑に描画する、軽量なAngularパッケージ。
* [gong](https://github.com/fullstack-lang/gong) - Go（Gin、Gorm、純粋なSQLite）のバックエンドとAngular Materialのフロントエンドを持つ、フルスタックフレームワーク。
* [@retejs/angular-plugin](https://github.com/retejs/angular-plugin) - [Rete.js](https://retejs.org/)を基盤とする、ノード、接続、ソケット、コントロールのコンポーネント用の標準プリセットを備えたAngularプラグイン。
* [Stencil](https://stenciljs.com/docs/angular) - ウェブコンポーネント用のAngularコンポーネントラッパーを生成する機能。
* [AnQst](https://github.com/DusteDdk/AnQst) - 共通のDSLからAngularサービスとネイティブのQtウィジェットを生成し、AnQst CLIとホストライブラリでAngularアプリケーションをQWidget方式のC++ UIにコンパイルできるようにする機能。
* [rozie.js](https://github.com/One-Learning-Community/rozie.js) - Vue・Alpine風の単一コンポーネントファイルを、実行時の追加負荷やラッパーの定型コードなしで、ネイティブなAngularコードに変換するフレームワーク横断コンパイラー。

### <a id="external-integration"></a>外部統合

* [Sentry](https://docs.sentry.io/platforms/javascript/guides/angular/configuration/integrations/) - 開発者を重視する、エラー追跡・性能監視プラットフォーム。
* [DataDog](https://docs.datadoghq.com/integrations/rum_angular/) - 性能の問題をすばやく解決するための、DatadogのAngular統合。
* [Elastic](https://www.elastic.co/guide/en/apm/agent/rum-js/current/angular-integration.html) - Angularアプリケーション用の、実際の利用者の体験を監視するJavaScriptエージェント。
* [@elastic/apm-rum-angular](https://www.npmjs.com/package/@elastic/apm-rum-angular) - Angularアプリケーション用のElastic APM Real User Monitoring。
* [Partytown](https://partytown.qwik.dev/angular/) - リソース消費の大きい第三者のスクリプトを、メインスレッドからWeb Workerへ移す機能。
* [Pega](https://community.pega.com/marketplace/component/angular-sdk) - ConstellationJS EngineとAngular製デザインシステムを接続するブリッジとDXコンポーネントを含むAngular SDK。
* [Postcat](https://github.com/Postcatlab/postcat) - AngularとElectronを基盤とする、軽量で拡張可能なAPIツール。
* [NativeScript](https://docs.nativescript.org) - 厳密な型付きのプラットフォームAPIをJavaScript実行環境に直接提供し、豊かなTypeScript開発体験を可能にする機能。
* [Strich](https://docs.strich.io/angular-integration-guide.html) - ウェブブラウザー内で直接、複数形式のバーコードをリアルタイムに読み取るJavaScriptライブラリ。
* [stream-chat-angular](https://github.com/GetStream/stream-chat-angular) - チャットアプリケーションを簡単に構築する、Stream Chat用のAngular Chat SDK。
* [foblex2D](https://github.com/siarheihuzarevich/foblex2D) - `Foblex Flow`で使われる、点、直線、ベクトル、形状、変換のユーティリティを備えた、2次元幾何用のAngularライブラリ。
* [Bloomreach Angular SDK](https://github.com/bloomreach/spa-sdk/blob/main/packages/ng-sdk/README.md) - Angular製アプリケーションに[Bloomreach Content](https://www.bloomreach.com/en/products/content)を簡単にヘッドレス方式で統合するSDK。
* [ngx-notion-cms](https://github.com/borjamrd/ngx-notion-cms) - Notionのコンテンツを、Angularアプリケーションを通じてCMSとして描画する機能。
* [Otter](https://github.com/AmadeusITGroup/otter) - ローカライズ、テスト、カスタマイズ、CMSによる動的設定用の構成単位を備えた、高度にモジュール化されたAngularフレームワーク。
* [HyperFormula](https://hyperformula.handsontable.com/guide/integration-with-angular.html#demo) - 数式の解析・評価用の、TypeScript製ヘッドレススプレッドシートエンジン。Angular統合のデモも提供。
* [fusio-sdk-javascript-angular](https://github.com/apioo/fusio-sdk-javascript-angular) - Angularアプリケーションを[Fusio](https://www.fusio-project.org/)と統合するSDK。[backend](https://github.com/apioo/fusio-apps-backend)や[developer](https://github.com/apioo/fusio-apps-developer)などのプロジェクトで利用。
* [limitless-angular](https://github.com/limitless-angular/limitless-angular) - `Sanity.io`との統合を重視した、アプリケーション開発用Angularライブラリのコレクション。
* [Bit](https://bit.dev/docs/angular-introduction/) - 組み合わせ可能なソフトウェアを構築するためのBit。
* [angular-twitter-timeline](https://github.com/mustafaer/angular-twitter-timeline) - Angular用の公開Twitterタイムラインウィジェット。
* [ngx-signalr-websocket](https://github.com/yurivoronin/ngx-signalr-websocket) - Angular用の軽量なASP.NET SignalRクライアント。
* [Keploy](https://keploy.io/docs/quickstart/openhospital/) - Angular UIを操作してテストケースとモックを記録し、Keployでテストするための案内。
* [alterior](https://github.com/alterior-mvc/alterior) - Angularと円滑に統合し、モジュール式のサービスを構築する、クライアントとサーバーで共通利用するTypeScriptフレームワーク。
* [23blocks SDK](https://github.com/23blocks-OS/frontend-sdk) - モジュール式のバックエンドブロックで、原文では10倍速くフルスタックアプリケーションを構築するとされるSDK。
* [ngx-unity](https://github.com/jjmhalew/ngx-unity) - Unity WebGL・WebGPUとAngularの間の双方向通信用の、型安全なブリッジ。
* [ngx-wp-shortcode](https://codeberg.org/tomaszatoo/ngx-wp-shortcode.git) - WordPressのショートコードをネイティブのAngularコンポーネントとして描画するAngularライブラリ。
* [ngx-iobroker](https://github.com/pottio/ngx-iobroker) - [ioBroker](https://www.iobroker.net/)サーバーをAngularアプリケーションにすばやく簡単に統合するライブラリ。
* [AngularDart](https://github.com/flutterdocteur/angulardart) - テンプレート言語とコンポーネントモデルを明快に分離し、複雑で保守しやすいウェブアプリケーションを容易に構築するウェブフレームワーク。

### <a id="wrappers"></a>ラッパー

* [angular-calendly](https://github.com/tolutronics/angular-calendly) - [Calendly](https://calendly.com/)の日程調整ウィジェットを埋め込むスタンドアロンコンポーネントを提供する、現代的なAngularライブラリ。
* [angular-email-editor](https://github.com/unlayer/angular-email-editor) - [Unlayer](https://unlayer.com/embed)のドラッグ＆ドロップ式メールエディターを提供するAngularラッパーコンポーネント。
* [angular-three](https://github.com/angular-threejs/angular-three) - [THREE.js](https://github.com/mrdoob/three.js)用のAngularレンダラー。
* [atlas-editor](https://github.com/sumanthnagireddi/atlas-editor) - React製のAtlaskitエディターとサイドナビゲーションのウェブコンポーネントを動的に読み込むAngularラッパー。
* [chat-widget-adapters](https://github.com/livechat/chat-widget-adapters) - [LiveChat](https://developers.livechat.com/)のチャットウィジェット（JavaScript API）用Angularラッパー。
* [ckeditor5-angular](https://github.com/ckeditor/ckeditor5-angular) - Angular 2以降用の公式CKEditor 5リッチテキストエディターコンポーネント。
* [cytoscape-angular](https://github.com/michaelbushe/cytoscape-angular) - [Cytoscape.js](https://js.cytoscape.org/)による高度なグラフ可視化機能を提供する、本番利用に対応するAngularライブラリ。
* [d3-cloud-angular](https://github.com/maitrungduc1410/d3-cloud-angular) - [d3-cloud](https://github.com/jasondavies/d3-cloud)を基盤とする、Angular用D3 Cloudコンポーネント。
* [flowchart-sequence-designer-angular](https://github.com/ag-gr-hub/flowchart-sequence-designer-angular) - [flowchart-sequence-designer](https://github.com/ag-gr-hub/flowchart-sequence-designer)のAngularラッパー。
* [gojs-angular](https://github.com/NorthwoodsSoftware/gojs-angular) - [GoJS](https://gojs.net/latest/index.html)の図、パレット、概要ビューを管理するAngularコンポーネント群。
* [@foisit/angular-wrapper](https://github.com/boluwatifee4/foisit/tree/main/libs/angular-wrapper) - Angularアプリケーション用のAIを使う対話アシスタント。
* [lyne-angular](https://github.com/sbb-design-systems/lyne-angular) - [Lyne Web Components](https://github.com/sbb-design-systems/lyne-components)のAngularラッパー。
* [@interopio/ng](https://www.npmjs.com/package/@interopio/ng) - プロジェクトでIO Connectライブラリを簡単に初期化・利用するための、[IO Connect](https://interop.io/)のAngularラッパー。
* [ng-elementum](https://github.com/MillerSvt/ng-elementum) - AngularコンポーネントとWeb Components標準の統合を強化する、`@angular/elements`の現代的なフォーク。
* [ngfire](https://github.com/qarapace/ngfire) - Firebase JS SDK用の最小限のAngularラッパー。
* [ng-number-flow](https://github.com/phalla-doll/ng-number-flow) - アクセシブルな数値のアニメーションコンポーネント[number-flow](https://github.com/barvian/number-flow)のAngularラッパー。
* [ngx-apexgantt](https://github.com/apexcharts/ngx-apexgantt) - SVGでガントチャートを作成するJavaScriptライブラリ[ApexGantt](https://github.com/apexcharts/apexgantt)のAngularラッパー。
* [ngx-apexsankey](https://github.com/apexcharts/ngx-apexsankey) - サンキーダイアグラムを作成するJavaScriptライブラリ[ApexSankey](https://github.com/apexcharts/apexsankey)のAngularラッパー。
* [ngx-apextree](https://github.com/apexcharts/ngx-apextree) - 組織図と階層図を作成するJavaScriptライブラリ[ApexTree](https://github.com/apexcharts/apextree)のAngularラッパー。
* [ngx-barcode6](https://github.com/efgiese/ngx-barcode6) - [JsBarcode](https://github.com/lindell/JsBarcode)を基盤とする、1次元バーコードを作成するAngular 9以降用コンポーネント。
* [ngx-boomerangjs](https://github.com/mcvendrell/ngx-boomerangjs) - Angularの依存性注入でスクリプトの自動読み込みとReal User Monitoring（RUM）対応を提供する、Angular 21以降用の[boomerangjs](https://github.com/akamai/boomerang)ラッパー。
* [ngx-chessground](https://github.com/topce/ngx-chessground) - [chessground](https://github.com/ornicar/chessground)のAngularラッパー。
* [ngx-d3](https://github.com/simonegosetto/ngx-d3) - [D3](https://d3js.org/)のAngularアプリケーション用ラッパーサービス。[d3-ng2-service](https://github.com/tomwanzek/d3-ng2-service)に着想を得たもの。
* [ngx-fabric-wrapper](https://github.com/zefoy/ngx-fabric-wrapper) - [Fabric](http://fabricjs.com/)のAngularラッパーライブラリ。
* [ngx-filesize](https://github.com/amitdahan/ngx-filesize) - [filesize.js](https://filesizejs.com/)のAngularラッパー。
* [ngx-grapesjs](https://github.com/Developer-Plexscape/ngx-grapesjs) - [GrapesJS](https://grapesjs.com)のAngularラッパーライブラリ。
* [ngx-highlight-js](https://github.com/cipchk/ngx-highlight-js) - 構文強調用の[highlight.js](https://highlightjs.org/)のAngularラッパー。
* [ngx-kel-agent](https://github.com/k0swe/ngx-kel-agent) - Angularアプリケーションを[kel-agent](https://github.com/k0swe/kel-agent)と統合するクライアントライブラリ。
* [ngx-linkifyjs](https://github.com/code-name-jack/ngx-linkifyjs) - URL、メールアドレス、ハッシュタグ、メンションを自動検出し、HTMLリンクに変換する、[Linkify](https://github.com/nfrasser/linkifyjs)のAngularラッパー。
* [ngx-neoline](https://github.com/smartargs/ngx-neoline) - プロバイダーを検出し、READYを待って型付きメソッドを公開する、[NeoLine](https://tutorial.neoline.io/) N3 dAPIのAngularラッパー。
* [ngx-open-web-ui-chat](https://github.com/JealousyM/ngx-open-web-ui-chat) - Socket.IOによるストリーミング、会話履歴、Markdown対応を備えた[Open WebUI](https://openwebui.com/)チャットを埋め込むAngularコンポーネントライブラリ。
* [ngx-pendo](https://github.com/yociduo/ngx-pendo) - AngularでPendoを読み込むシンプルなラッパー。
* [ngx-pixel-code](https://github.com/Dev-AlienX/ngx-pixel-code/tree/main/ngx-pixel-code) - テーマの動的読み込みと独自のスタイルを備えた、スタンドアロンのAngular `highlight.js`ラッパー。
* [ngx-sentry](https://github.com/DSI-HUG/ngx-sentry) - [Sentry JavaScript SDK](https://github.com/getsentry/sentry-javascript)のAngularラッパー。
* [ngx-serializer](https://github.com/paddls/ngx-serializer) - `@paddls/ts-serializer`ライブラリのAngularラッパー。
* [ngx-simple-text-diff](https://github.com/jjtortosa/ngx-simple-text-diff) - [diff](https://www.npmjs.com/package/diff)ライブラリでテキストの差分を表示するAngularライブラリ。
* [ngx-socket-io](https://github.com/rodgc/ngx-socket-io) - Angular用の[Socket.IO](https://socket.io/)モジュール。
* [ngx-tagify](https://github.com/Brakebein/ngx-tagify) - [Tagify](https://github.com/yaireo/tagify/)をラップするAngularライブラリ。
* [ngx-three](https://github.com/demike/ngx-three) - Angularプロジェクトで[Three.js](https://threejs.org)を宣言的に利用する機能。
* [ngx-three-globe](https://github.com/omnedia/ngx-three-globe) - `Three.js`で構築した、操作可能な3D地球儀の可視化を提供するAngularライブラリ。
* [ngx-virtual-select](https://github.com/zinetnorf/ngx-virtual-select) - Angularに[Virtual Select](https://github.com/sa-si-dev/virtual-select)を統合するコンポーネント。
* [ngx-vis](https://github.com/visjs/ngx-vis) - [vis.js](https://visjs.org/)のAngularラッパー。
* [ngx-viz](https://github.com/vedph/ngx-viz) - [viz.js](https://viz-js.com/)で[DOTグラフ](https://graphviz.org/doc/info/lang.html)を描画する、シンプルなAngularラッパー。
* [ngx-webdatarocks](https://github.com/WebDataRocks/ngx-webdatarocks) - [WebDataRocks](https://www.webdatarocks.com/)のAngularラッパー。ウェブレポートツールの統合は[実装例](https://github.com/WebDataRocks/pivot-angular)を参照。
* [ngx-xyflow](https://github.com/knackstedt/ngx-xyflow) - [xyflow](https://github.com/xyflow/xyflow)のAngularラッパー。
* [rive-angular](https://github.com/Grandgular/rive) - AngularのシグナルとZone.jsを使わない構成で構築された、リアクティブな状態管理を備えた、[Rive](https://rive.app/)アニメーション用の現代的なAngularラッパー。
* [seatsio-angular](https://github.com/seatsio/seatsio-angular) - [Seats.io](https://www.seats.io/)の座席配置図を描画するAngularラッパー。
* [simplyfire](https://github.com/coturiv/simplyfire) - Firebase Cloud FunctionsとAngular用の、軽量なFirestore API。
* [zag-angular](https://github.com/makuko/zag-angular) - [zag](https://github.com/chakra-ui/zag)のAngularラッパー。

## <a id="angular-inspired-solutions"></a>Angularに着想を得たソリューション

* [angular-style-injector](https://github.com/emmat-york/angular-style-injector) - AngularのInjectorに着想を得た、軽量な依存性注入コンテナー。
* [di](https://github.com/kaokei/di) - [InversifyJS](https://github.com/inversify/InversifyJS)や[typedi](https://github.com/typestack/typedi)に似た、軽量な依存性注入ライブラリ。
* [flexdi](https://github.com/AndreyShashlovDev/flexdi) - NestJSとAngularに着想を得た、React、React Native、Vue 3用の柔軟で軽量なDIライブラリ。
* [gapi](https://github.com/Stradivario/gapi) - Angularに着想を得た、複雑なNode.js GraphQLバックエンドアプリケーションを最小限の作業で実現するためのツール。
* [GTPL](https://github.com/garag-lib/GTPL) - Vue、Angular AOT、JSXに着想を得た、Direct DOMとProxyを使うリアクティブなテンプレート用TypeScriptライブラリ。コンパクトな9KBのパッケージ。
* [illuma](https://github.com/git-illuma/core) - TypeScript用のAngular風の依存性注入。
* [indulgent](https://github.com/frodi-karlsson/indulgent) - ウェブ開発用の軽量なTypeScriptユーティリティ群。外部の依存パッケージがなく、実行時の高い性能に向けて最適化。
* [injection-js](https://github.com/mgechev/injection-js) - Angularの`ReflectiveInjector`から抽出した、高速で十分にテストされたJavaScript・TypeScript依存性注入ライブラリ。
* [ioc](https://github.com/Isqanderm/ioc) - AngularとNestJSに着想を得た、TypeScriptアプリケーション用の柔軟な制御の反転（IoC）コンテナー。
* [knifecycle](https://github.com/nfroidure/knifecycle) - 利用の妨げにならない依存性注入の実装で、Node.jsプロセスのライフサイクルを自動管理する機能。
* [Lua-Generate](https://github.com/Gabriel-c0Nsp/Lua-Generate) - Angularのngツールに着想を得た、定型コードを生成するCLIツール。
* [named-slots](https://github.com/maybebot/named-slots) - Vue、Svelte、Angular、Web Componentsのスロットに着想を得た、Reactコンポーネント用の宣言的な差し込み場所。
* [needle-di](https://github.com/needle-di/needle-di) - JavaScript・TypeScriptプロジェクト用の軽量で型安全な依存性注入（DI）ライブラリ。
* [npm-clang-format-node](https://github.com/lumirlumir/npm-clang-format-node) - [clang-format](https://github.com/angular/clang-format)に着想を得た、LLVM Clangのclang-format・git-clang-formatのネイティブバイナリ用Nodeラッパー。
* [ozean](https://github.com/ozeanjs/ozean) - Bun実行環境を基盤とする、現代的でシンプル、高性能なウェブフレームワーク。Angular利用者になじみやすい開発体験と構成を提供。
* [react-di-lite](https://github.com/zobla-kv/react-di-lite) - Angularのサービスに着想を得た、React用の軽量で階層的な依存性注入。
* [@joanpablo/reactive_forms](https://github.com/joanpablo/reactive_forms) - AngularのReactive Formsに着想を得た、フォームと検証にモデル方式を使うDartライブラリ。
* [reaktiv](https://github.com/buiapp/reaktiv) - Angularのリアクティビティモデルに着想を得た、非同期処理を本格的にサポートするPython用リアクティブシグナル。
* [rgenex](https://github.com/asengar14/rgenex) - コンポーネント、フック、ページのひな形を即座に生成する、React用のAngular CLI風ジェネレーター。
* [rxor](https://github.com/nsevendev/rxor) - Angular Signals、Vue 3の`ref/computed`、SolidJSに着想を得た、Reactにリアクティブシグナルを導入する機能。
* [Signals](https://github.com/dmytrodemchenko/Signals) - 最適化されたAngular風のプッシュ・プル構成を使う、TypeScript・JavaScript用の、依存パッケージ不要で一時的な不整合を生じないリアクティブシグナル。
* [sio](https://github.com/silicia-apps/sio) - Ionicを基盤とし、ハイブリッドアプリケーションとウェブサイトの開発を円滑にするSilicia Framework。
* [UnReact.js](https://github.com/arnvjshi/unreactpjs) - コンポーネント間の連携を強化するために、AngularとReactの要素を組み合わせた現代的なフレームワーク。
* [use-vue-service](https://github.com/kaokei/use-vue-service) - Angularのサービスに着想を得た、依存性注入を備えたVue 3用の軽量な状態管理。
* [weave](https://github.com/weave-framework/weave) - 細かい単位のリアクティビティと、シグナルを自然に利用する構成を持つUIフレームワーク。

## <a id="external-lists"></a>外部リスト

* [awesome-utils-dev](https://github.com/pegaltier/awesome-utils-dev/blob/master/utils-coding/utils-angular-list.md) - さらに資料が必要なときに参照できるAngular資料リスト。
* [awesome-angular](https://github.com/DaanDeSmedt/awesome-angular)
* [Angular Enterprise](https://angular-enterprise.com/en/ngcategory/resources/)
* [framework.dev](https://angular.framework.dev/)
