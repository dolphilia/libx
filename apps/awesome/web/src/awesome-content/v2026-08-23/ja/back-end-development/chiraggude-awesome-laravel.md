---
title: "Awesome Laravel"
description: "Laravelのウェブ開発に使うパッケージ、開発ツール、学習資料、デプロイ用の資料、参考アプリケーション、コミュニティ。"
licenseSource: "github-chiraggude-awesome-laravel-readme-md"
---

# Awesome Laravel

Laravelはウェブアプリケーションを構築するPHPフレームワークです。このリストでは、パッケージと開発ツール、ローカル開発環境とデプロイ、学習資料、スタータープロジェクト、参考アプリケーション、コンテンツ管理システム、コミュニティの資料を紹介します。

関連リスト：[Awesome PHP](https://github.com/ziadoz/awesome-php)。

## 基本情報 <a id="essentials"></a>

* [Laravel](https://laravel.com) ([ドキュメント](https://laravel.com/docs))
* [Laravel APIリファレンス](https://laravel.com/api/master/)
* [Lumen](https://lumen.laravel.com) ([ドキュメント](https://lumen.laravel.com/docs))
* [Laracasts](https://laracasts.com)
* [Laravel News](https://laravel-news.com) ([アーカイブ](https://laravel-news.com/archive/))

## パッケージ <a id="packages"></a>

* [Packagist](https://packagist.org/)
* [Laravel Collective](https://laravelcollective.com/)
* [Packalyst](http://packalyst.com/)
* [Spatie](https://spatie.be/en/opensource/laravel)

## 人気のパッケージ <a id="popular-packages"></a>

原文では、ドキュメントが十分に整備され、テスト済みで、Laravelプロジェクトでよく使われるパッケージとして紹介されています。PHPパッケージをより広く探すには、上記のパッケージリポジトリを参照してください。

新しく提案するパッケージ、スタータープロジェクト、参考コードベースについて、原文の[投稿ガイド](https://github.com/chiraggude/awesome-laravel/blob/0374093f529ba54bfd201c4c52b40a88e45ab1ae/CONTRIBUTING.md)は、GitHubスター数500以上、Laravel 6 LTS以降への対応、[PSR-4](http://www.php-fig.org/psr/psr-4/)によるオートローディングを条件としています。パッケージには[Packagist](https://packagist.org/)への登録と10,000回以上のダウンロードも求めています。また、[Travis-CI](https://travis-ci.org/)などのCIツールでコーディング規約の検査とテストを実行することも条件です。これらは固定した原文リビジョンでの提案条件であり、このリストにはそれ以前の資料も含まれています。

同じガイドは、[変更履歴](http://keepachangelog.com/)、[PSR-2](http://www.php-fig.org/psr/psr-2/)のコーディングスタイル、[DocBlock](http://www.phpdoc.org/docs/latest/references/phpdoc/index.html)を使ったコード全体の文書化、[セマンティックバージョニング](http://semver.org/)、詳しい[README](https://github.com/thephpleague/skeleton/blob/master/README.md)、[.gitattributesによる不要ファイルの除外](https://www.reddit.com/r/PHP/comments/2jzp6k/i_dont_need_your_tests_in_my_production)を推奨しています。

### 開発ツール <a id="developer-tools"></a>

* [Scaffold Interface](https://github.com/amranidev/scaffold-interface) - Laravel向けのCRUDジェネレーター
* [IDE Helper](https://github.com/barryvdh/laravel-ide-helper) - IDEの自動補完用ヘルパーファイルを生成
* [Laravel 5 Extended Generators](https://github.com/laracasts/Laravel-5-Generators-Extended) - 組み込みのファイルジェネレーターを拡張
* [Laravel API/Scaffold/CRUD Generator](https://github.com/InfyOmLabs/laravel-generator) - API、CRUDのひな形、関連コードを生成
* [Laravel Tinx](https://github.com/furey/tinx) - Tinker内からLaravelのTinkerセッションを再読み込み
* [Laravel API Documentation Generator](https://github.com/mpociot/laravel-apidoc-generator) - APIドキュメントを自動生成
* [Laravel Packager](https://github.com/Jeroen-G/Laravel-Packager) - Laravelパッケージを作成するCLIツール
* [Workbench Export to Migrations](https://github.com/beckenrode/mysql-workbench-export-laravel-5-migrations) - モデルをLaravelのマイグレーションに書き出すWorkbenchプラグイン
* [Laravel Decomposer](https://github.com/lubusIN/laravel-decomposer) - インストール済みパッケージとその依存関係、アプリケーションとサーバーの詳細を一覧表示
* [LaRecipe](https://github.com/saleem-hadad/larecipe) - Laravelアプリケーション内でMarkdownを使って製品ドキュメントを作成
* [Prequel](https://github.com/Protoqol/Prequel/) - Laravel向けに調整されたデータベース管理GUI

### テストとデバッグ <a id="testing--debugging"></a>

* [Laravel TestTools](https://chrome.google.com/webstore/detail/laravel-testtools/ddieaepnbjhgcbddafciempnibnfnakl) - アプリケーションを操作しながらLaravelの統合テストを生成するChrome拡張機能
* [Laravel Test Factory Generator](https://github.com/mpociot/laravel-test-factory-helper) - 既存のモデルからLaravelのテストファクトリを生成
* [Clockwork](https://github.com/itsgoingd/clockwork) - ClockworkのChrome拡張機能を統合し、アプリケーションのデバッグとプロファイリングに対応
* [Debug Bar](https://github.com/barryvdh/laravel-debugbar) - PHP Debug BarをLaravelと統合
* [Ignition](https://github.com/facade/ignition) - Laravelアプリケーション向けのエラーページ
* [Laravel 5 Log Viewer](https://github.com/rap2hpoutre/laravel-log-viewer) - ログ閲覧ツール
* [LogViewer](https://github.com/ARCANEDEV/LogViewer) - ログ閲覧機能を提供
* [LERN](https://github.com/tylercd100/lern#lern-laravel-exception-recorder-and-notifier) - 例外をデータベースに記録し、通知を送信
* [Mail Preview](https://github.com/themsaid/laravel-mail-preview) - 送信したメールをウェブブラウザーやメールクライアントでプレビュー
* [Laravel Tracy](https://github.com/recca0120/laravel-tracy) - Nette Tracy DebuggerをLaravelに統合するパッケージ
* [Laravel Terminal](https://github.com/recca0120/laravel-terminal) - ウェブブラウザーでArtisanを実行
* [Laravel API Tester](https://github.com/asvae/laravel-api-tester) - Laravelのルートを利用するPostmanのようなツール
* [Laravel Tail](https://github.com/spatie/laravel-tail) - tailコマンドを提供
* [Laravel Telescope](https://github.com/laravel/telescope) - Laravelフレームワーク向けのデバッグ支援ツール

### 認証と認可 <a id="authentication--authorization"></a>

* [Bouncer](https://github.com/JosephSilber/bouncer) - ロールと権限
* [Laratrust](https://github.com/santigarcor/laratrust) - ロール、権限、チーム
* [Entrust](https://github.com/Zizaco/entrust) - ロールに基づく権限
* [JWT Auth](https://github.com/tymondesigns/jwt-auth) - API向けのJSON Web Token認証
* [Laravel Permission](https://github.com/spatie/laravel-permission) - ユーザーをロールや権限と関連付ける
* [Defender](https://github.com/artesaos/defender) - ロールと権限
* [OAuth2 Server Laravel](https://github.com/lucadegasperi/oauth2-server-laravel) - OAuth 2.0の認可サーバーとリソースサーバー
* [Socialite](https://github.com/laravel/socialite) - Facebook、Google、Twitterなどを使ったOAuth認証
* [Socialite Providers 2.0](http://socialiteproviders.github.io/) - Socialite向けの100以上のソーシャル認証プロバイダー。Lumenにも対応
* [Google2FA](https://github.com/antonioribeiro/google2fa) - Googleの2要素認証モジュール
* [Laravel User Verification](https://github.com/jrean/laravel-user-verification) - ユーザーの確認フローを処理し、メールアドレスを検証
* [Adldap2 Laravel](https://github.com/Adldap2/Adldap2-Laravel) - LDAP認証とActive Directory管理
* [Doorman](https://github.com/clarkeash/doorman) - 招待コードを使ってLaravelアプリケーションへのアクセスを制限
* [Laravel Heyman](https://github.com/imanghafoori1/laravel-heyman) - 上記のロール・権限パッケージで扱える範囲を超える認可の要件に対応すると原文で紹介されている

### ユーティリティ <a id="utilities"></a>

* [Awes.io](https://github.com/awes-io/awes-io) - Vue（Nuxt.js）、Tailwind CSS、Laravelのバックエンドを使うCRM、SaaS、ERPアプリケーションのひな形
* [Artisan View](https://github.com/svenluijten/artisan-view) - Artisanを使ってLaravelプロジェクトのビューを管理
* [Bootstrapper](https://github.com/patricktalmadge/bootstrapper/) - Bootstrap 3のマークアップを作成するクラス群
* [Captcha](https://github.com/mewebstudio/captcha) - ボット対策用の画像CAPTCHAシステム
* [Charts](https://github.com/ConsoleTVs/Charts) - 複数のライブラリに対応し、インタラクティブなチャートを作成するパッケージ
* [Lavacharts](https://github.com/kevinkhill/lavacharts) - Google Chart APIを使ったPHP向けのチャートとグラフ
* [Eloquent Filter](https://github.com/Tucker-Eric/EloquentFilter) - モデルとそのリレーションをフィルタリング
* [Eloquent Sluggable](https://github.com/cviebrock/eloquent-sluggable) - Eloquentモデルのスラグを作成
* [Eloquent Sortable](https://github.com/spatie/eloquent-sortable) - Eloquentモデルに並べ替え機能を追加
* [HTML](https://github.com/LaravelCollective/html) - Laravel向けのHTMLビルダーとフォームビルダー
* [Multi-tenant](https://github.com/hyn/multi-tenant) - ルート、アセット、データベースを分離するマルチテナント機能。原文では柔軟で安全に分離できると説明されている
* [Laravel Form Builder](https://github.com/kristijanhusak/laravel-form-builder) - Symfonyのフォームビルダーに着想を得たフォームビルダー
* [Laravel Activitylog](https://github.com/spatie/laravel-activitylog) - Laravelアプリケーション内の操作をログに記録
* [Laravel Auditing](https://github.com/owen-it/laravel-auditing) - Eloquentモデルの監査
* [Laravel Breadcrumbs](https://github.com/davejamesmiller/laravel-breadcrumbs) - パンくずリストを作成・管理
* [Laravel Collection Macros](https://github.com/spatie/laravel-collection-macros) - コレクションマクロのセット
* [Laravel Cookie Consent](https://github.com/spatie/laravel-cookie-consent) - 原文では、LaravelアプリケーションがEUのCookie関連法の要件に対応できるよう支援するパッケージと説明されている
* [Laravel Datatables](https://github.com/yajra/laravel-datatables) - jQuery DataTables API
* [Laravel GeoIP](https://github.com/Torann/laravel-geoip) - IPアドレスからウェブサイト訪問者の位置を特定
* [Laravel Hashids](https://github.com/vinkla/laravel-hashids) - [Hashids](http://hashids.org/php/)を使って一意で連番ではないIDを生成
* [Laravel Impersonate](https://github.com/404labfr/laravel-impersonate) - アプリケーションのユーザーの一人として認証するパッケージ
* [Laravel Mailbox](https://github.com/beyondcode/laravel-mailbox) - 受信メールを処理するパッケージ
* [Laravel Markdown](https://github.com/GrahamCampbell/Laravel-Markdown) - CommonMarkのMarkdownパーサー
* [Laravel Menu](https://github.com/spatie/laravel-menu) - Laravel向けのHTMLメニュー生成ツール
* [Laravel Talk](https://github.com/nahid/talk) - ユーザー間のリアルタイムメッセージングシステム
* [Laravel Messenger](https://github.com/cmgmyr/laravel-messenger) - ユーザー間のメッセージングシステム
* [Laravel Moderation](https://github.com/hootlex/laravel-moderation) - 投稿、コメント、ユーザーなどのリソースを承認・拒否
* [Laravel Tags](https://github.com/spatie/laravel-tags) - タグとタグ付け機能を追加
* [Laravel Stats Tracker](https://github.com/antonioribeiro/tracker) - 識別と保存のためにリクエスト情報を収集
* [Listify](https://github.com/lookitsatravis/listify) - 任意のEloquentモデルに並べ替え・順序付け機能を追加
* [noCAPTCHA](https://github.com/ARCANEDEV/noCAPTCHA) - Googleの新しいnoCAPTCHA（reCAPTCHA）向けヘルパー
* [Purifier](https://github.com/mewebstudio/purifier) - HTMLフィルター
* [Revisionable](https://github.com/VentureCraft/revisionable) - Eloquentモデルの変更履歴を作成
* [SEOTools](https://github.com/artesaos/seotools) - 一般的なSEO手法の一部に対応するヘルパー
* [Page Cache](https://github.com/JosephSilber/page-cache) - レスポンスをディスク上の静的ファイルとしてキャッシュし、ページの読み込みを高速化
* [Laravel Setting](https://github.com/anlutro/laravel-settings) - 設定をJSONファイルに保存して永続化
* [Friendship](https://github.com/hootlex/laravel-friendships) - 友人関係の管理システム
* [Teamwork](https://github.com/mpociot/teamwork) - 招待システムを使ってユーザーとチームを関連付ける
* [Validating](https://github.com/dwightwatson/validating) - Eloquentモデルを検証するトレイト
* [VAT Calculator](https://github.com/mpociot/vat-calculator) - EUのMOSS VAT規則に関連する処理に対応
* [Laravel UUID](https://github.com/webpatser/laravel-uuid) - RFC 4122に従ってUUIDを生成
* [Laravel Installer](https://github.com/RachidLaasri/LaravelInstaller) - WordPressのように、セットアップウィザードに従うだけでユーザーがアプリケーションをインストールできるようにする
* [Laravel Modules](https://github.com/nWidart/laravel-modules) - モジュール管理
* [Laravel Phone](https://github.com/Propaganistas/Laravel-Phone) - 電話番号の検証と書式設定
* [Laravel Ban](https://github.com/cybercog/laravel-ban) - Eloquentモデルのブロックやアクセス禁止の設定を簡略化
* [Laravel Proxy](https://github.com/fideloper/TrustedProxy) - ロードバランサーなどの中継機器の背後でのセッション処理
* [Laravel Video Chat](https://github.com/PHPJunior/laravel-video-chat) - Socket.IOとWebRTCを使ったビデオチャット
* [Widgets for Laravel](https://github.com/arrilot/laravel-widgets) - ビューコンポーザーの代替手段
* [Secure Headers](https://github.com/BePsvPT/secure-headers) - HTTPレスポンスにセキュリティ関連のヘッダーを追加
* [Laravel Nova](https://nova.laravel.com/) - Laravel向けの管理パネル
* [Laravel Love](https://github.com/cybercog/laravel-love) - Eloquentモデルで表されるコンテンツに「いいね」「よくないね」のリアクションを追加
* [stancl/tenancy](https://github.com/stancl/tenancy) - Laravelアプリケーションのテナント処理を自動化。原文ではコードの変更が不要と説明されている

### メディアと文書管理 <a id="media--document-management"></a>

* [Intervention Image](https://github.com/Intervention/image) - 画像の作成、編集、合成を行う画像処理ライブラリ
* [Laravel ImageUp](https://github.com/qcod/laravel-imageup) - 追加機能を備えた画像処理パッケージ
* [Laravel Glide](https://github.com/spatie/laravel-glide) - Glideを使って画像を変換
* [Laravel MediaLibrary](https://github.com/spatie/laravel-medialibrary) - ファイルをEloquentモデルと関連付ける
* [Laravel Snappy](https://github.com/barryvdh/laravel-snappy) - wkhtmltopdfを使ってHTMLからPDFを生成
* [Laravel DOMPDF](https://github.com/barryvdh/laravel-dompdf) - [dompdf](https://github.com/dompdf/dompdf)を使ってHTMLからPDFを生成
* [Laravel Stapler](https://github.com/CodeSleeve/laravel-stapler) - ORMを使ったファイルアップロード管理ツール
* [Laravel Excel](https://github.com/Maatwebsite/Laravel-Excel) - ExcelファイルとCSVファイルをインポート・エクスポート
* [Fast Excel](https://github.com/rap2hpoutre/fast-excel) - Laravel向けの高速なインポート・エクスポート。原文にはXLSX、CSV、ODTと記載されているが、プロジェクトのREADMEではOpenDocumentの表計算形式をODSと記載している
* [Laravolt Avatar](https://github.com/laravolt/avatar) - 名前、メールアドレスなどの文字列をアバターやGravatarに変換。すぐに組み込める仕組みを備える
* [Laravel FFmpeg](https://github.com/pascalbaljetmedia/laravel-ffmpeg) - Laravel 5.8向けにFFmpegとの統合を提供

### JavaScriptとの統合 <a id="integration-with-javascript"></a>

* [Laroute](https://github.com/aaronlord/laroute) - JavaScriptからLaravelのルートURLを生成
* [PHP Vars to JavaScript Transformer](https://github.com/laracasts/PHP-Vars-To-Js-Transformer) - サーバー側の文字列、配列、コレクションなどの値をJavaScriptに渡す
* [Javascript Validation](https://github.com/proengsoft/laravel-jsvalidation) - 検証ルール、メッセージ、FormRequest、バリデーターを使ってクライアント側でフォームを検証
* [Laravel Pjax](https://github.com/spatie/laravel-pjax) - Pjaxミドルウェア
* [Laravel Blade Javascript](https://github.com/spatie/laravel-blade-javascript) - 変数をJavaScriptに書き出すBladeディレクティブ
* [Ziggy](https://github.com/tightenco/ziggy) - Laravelの名前付きルートをJavaScriptで利用
* [LiveWire](https://github.com/livewire/livewire) - Laravel向けのフロントエンドフレームワーク

### データベース、ORM、マイグレーション、シーディング <a id="databases-orms-migrations--seeding"></a>

* [Backup Manager](https://github.com/backup-manager/laravel) - S3、Dropbox、SFTPなどを使ってデータベースをバックアップ・復元
* [Laravel Nestedset](https://github.com/lazychaser/laravel-nestedset) - Nested Setsパターンの実装
* [ClosureTable](https://github.com/franzose/ClosureTable) - Closure Tableパターンの実装
* [Eloquence](https://github.com/kirkbushell/eloquence) - Eloquentモデルの追加機能
* [iSeed](https://github.com/orangehill/iseed) - 既存のデータベーステーブルから新しいシードファイルを生成
* [Laravel OCI8](https://github.com/yajra/laravel-oci8) - OCI8を使ったOracle DBドライバー
* [Laravel Backup](https://github.com/spatie/laravel-backup) - アプリケーションをバックアップ
* [Laravel Doctrine](https://github.com/laravel-doctrine/orm) - Doctrine 2 ORMの実装
* [Laravel MongoDB](https://github.com/jenssegers/laravel-mongodb) - MongoDBに対応したEloquentモデルとクエリビルダー
* [Migrations Generator](https://github.com/Xethron/migrations-generator) - 既存のデータベースからマイグレーションを生成
* [Sofa/Eloquence](https://github.com/jarektkaczyk/eloquence) - Eloquent ORMの拡張機能
* [Tenanti](https://github.com/orchestral/tenanti) - マルチテナント向けのデータベーススキーマ管理ツール
* [Laravel Repository](https://github.com/andersao/l5-repository) - データベース層を抽象化するリポジトリ
* [Lada Cache](https://github.com/spiritix/lada-cache) - Redisを使った全自動のデータベースキャッシュ層。原文ではスケーラブルと説明されている
* [Laravel MySQL Spatial extension](https://github.com/grimzy/laravel-mysql-spatial) - MySQLの空間データ型と空間関数を扱う

### 検索 <a id="search"></a>

* [Algolia Search](https://github.com/algolia/algoliasearch-laravel) - Algolia Search APIをLaravelのEloquent ORMに統合
* [Elasticquent](https://github.com/elasticquent/Elasticquent) - Eloquentモデル向けのElasticsearch
* [Plastic](https://github.com/sleimanx2/plastic) - Elasticsearchのマッピングと検索をメソッドチェーンで指定できるAPIを提供
* [Laravel Search](https://github.com/mmanos/laravel-search) - Elasticsearch、Algolia、ZendSearch向けの統一API
* [SearchIndex](https://github.com/spatie/searchindex) - AlgoliaやElasticsearchでオブジェクトを保存・取得
* [Searchable](https://github.com/nicolaslopezj/searchable) - Eloquentモデルに簡単な検索機能を追加するトレイト
* [TNTSearch](https://github.com/teamtnt/tntsearch) - PHPで書かれた全文検索エンジン。原文では豊富な機能を備えると説明されている
* [TNTSearch driver](https://github.com/teamtnt/laravel-scout-tntsearch-driver) - 検索パッケージ[Laravel Scout](https://github.com/laravel/scout)向けの、TNTSearchを使ったドライバー
* [Laravel-Searchy](https://github.com/TomLingham/Laravel-Searchy) - あいまい検索、基本的な文字列照合、レーベンシュタイン距離

### API <a id="apis"></a>

* [ApiGuard](https://github.com/chrisbjr/api-guard) - APIキーによるAPI認証に対応
* [Dingo API](https://github.com/dingo/api) - RESTful API開発向けの多目的ツールキット
* [Laravel CORS](https://github.com/barryvdh/laravel-cors) - CORS（オリジン間リソース共有）ヘッダーに対応
* [Laravel Fractal](https://github.com/spatie/laravel-fractal) - Fractalを使って複雑で柔軟なAJAX・RESTfulのデータ構造を出力
* [Laravel GraphQL](https://github.com/rebing/graphql-laravel) - Relay、Eloquentモデル、バリデーション、GraphiQLに対応
* [Lighthouse](https://github.com/nuwave/lighthouse) - 原文で新興のライブラリとして紹介されているLaravel向けのGraphQLライブラリ
* [Laravel Responder](https://github.com/flugger/laravel-responder) - Fractalを使って独自のAPIレスポンスを作成

### タスク、コマンド、スケジューリング <a id="tasks-commands-and-scheduling"></a>

* [Dispatcher](https://github.com/indatus/dispatcher) - Artisanコマンドのスケジューラー
* [Elixir](https://github.com/laravel/elixir) - Gulpタスクを実行するNode（NPM）パッケージ
* [Mix](https://github.com/JeffreyWay/laravel-mix) - webpackの基本的なビルド手順をメソッドチェーンで定義するAPI
* [Envoy](https://github.com/laravel/envoy) - SSHタスクランナー

### 決済 <a id="payments"></a>

* [Cashier](https://github.com/laravel/cashier) - Stripeを使ったサブスクリプション課金
* [Omnipay for Laravel](https://github.com/ignited/laravel-omnipay) - PHPライブラリの[Omnipay](https://github.com/thephpleague/omnipay)を統合

### 最適化 <a id="optimization"></a>

* [Intervention Image Cache](https://github.com/Intervention/imagecache) - Intervention Imageクラスのキャッシュ拡張
* [Laravel HTMLMin](https://github.com/GrahamCampbell/Laravel-HTMLMin) - Blade、HTML、CSS、JavaScriptの圧縮ツール
* [Rememberable](https://github.com/dwightwatson/rememberable) - Eloquentのクエリキャッシュ
* [Widgetize](https://github.com/imanghafoori1/laravel-widgetize) - ページの部分キャッシュ
* [Laravel Responsecache](https://github.com/spatie/laravel-responsecache) - レスポンス全体をキャッシュしてアプリケーションを高速化

### モニタリング <a id="monitoring"></a>

* [Horizon](https://github.com/laravel/horizon) - シンプルなウェブUIでキューを監視・設定
* [Laravel Failed Job Monitor](https://github.com/spatie/laravel-failed-job-monitor) - キューに登録されたジョブの失敗を通知
* [Laravel Uptime Monitor](https://github.com/spatie/laravel-uptime-monitor) - 稼働状況とSSLを監視。原文では設定が簡単と説明されている
* [Larametrics](https://github.com/aschmelyun/larametrics) - Laravelアプリケーション向けの自己ホスト型メトリクス・通知プラットフォーム

### ローカライズ <a id="localization"></a>

* [Language Files](https://github.com/caouecs/Laravel-lang) - バリデーション、ページネーション、リマインダーのメッセージを37言語で提供
* [Laravel Localization](https://github.com/mcamara/laravel-localization) - ルートを通じた国際化（i18n）に対応
* [Laravel Translatable](https://github.com/spatie/laravel-translatable) - 翻訳をJSONとして保存し、Eloquentモデルを翻訳可能にする
* [Laravel Translatable](https://github.com/dimsav/laravel-translatable) - 翻訳可能なEloquentモデルのインスタンスを取得・保存
* [Laravel Translator](https://github.com/vinkla/laravel-translator) - Eloquentモデルを複数の言語に翻訳
* [Laravel Date](https://github.com/jenssegers/date) - Carbonを基に、複数の言語で日付を扱うためのライブラリ
* [Laravel Langman](https://github.com/themsaid/laravel-langman) - Artisanコンソールで言語ファイルを管理
* [Laravel Translation](https://github.com/waavi/translation) - 翻訳とローカライズの管理
* [Linguist](https://github.com/keevitaja/linguist) - Laravelの国際化（i18n）・ローカライズに対応

### サードパーティーサービス統合 <a id="third-party-service-integration"></a>

* [Laravel Analytics](https://github.com/spatie/laravel-analytics) - Google Analyticsからページビューなどのデータを取得
* [Laravel DigitalOcean](https://github.com/GrahamCampbell/Laravel-DigitalOcean) - DigitalOceanV2との連携
* [Laravel GitHub](https://github.com/GrahamCampbell/Laravel-GitHub) - PHPのGitHub APIとの連携
* [Laravel Instagram](https://github.com/vinkla/laravel-instagram) - Instagram APIとの連携
* [Laravel Newsletter](https://github.com/spatie/laravel-newsletter) - Mailchimpでニュースレターを送信
* [Laravel Pusher](https://github.com/vinkla/laravel-pusher) - Pusher APIとの連携

## 開発環境 <a id="development-setup"></a>

* [Homestead](https://laravel.com/docs/master/homestead) - Laravel公式のVagrantボックス
* [Valet](https://laravel.com/docs/master/valet) - Macユーザー向けの開発環境
* [Valet Linux](https://github.com/cpriego/valet-linux) - Linuxユーザー向けの開発環境
* [LaraDock](https://github.com/LaraDock/laradock) - LaravelをDockerで実行。Homesteadに似た環境をVagrantの代わりにDockerで提供
* [LaraEdit Docker](https://github.com/laraedit/laraedit-docker) - 単一のDockerコンテナでHomestead環境を提供
* [Laragon](https://laragon.org/) - Windows上の分離された開発環境
* [Stacker](https://github.com/Maxlab/stacker) - Dockerを使ったローカルのウェブ開発環境
* [Devilbox](https://github.com/cytopia/devilbox) - Dockerを使った汎用のLAMP・MEANスタック。原文ではすべてのPHPバージョンに対応すると説明されている
* [Vessel](https://vessel.shippingdocker.com) - Laravel向けのシンプルなDocker開発環境
* [Lando](https://docs.lando.dev/config/laravel.html) - Dockerを使ったローカル開発環境ツール

## アプリケーションホスティング <a id="application-hosting"></a>

* [Vapor](https://vapor.laravel.com)
* [Forge](https://forge.laravel.com/) ([ForgeRecipes](https://forgerecipes.com/))
* [FortRabbit](https://www.fortrabbit.com/laravel-hosting)
* [Heroku](https://www.heroku.com/) ([ドキュメント](https://devcenter.heroku.com/articles/getting-started-with-laravel))
* [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) ([チュートリアル](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/php-laravel-tutorial.html))
* [Cloudways](https://www.cloudways.com/en/laravel-hosting.php)
* [Ploi](https://ploi.io/)
* [CodePier](https://codepier.io?ref=awesome-laravel)
* [RunCloud](https://runcloud.io/)

## アプリケーションのデプロイ <a id="application-deployment"></a>

* [Deployer](https://deployer.org/) - Laravelに標準で対応するデプロイツール
* [Envoyer](https://envoyer.io/) - PHP・Laravelプロジェクト向けのデプロイツール。原文では無停止デプロイに対応すると説明されている
* [Rocketeer](https://github.com/rocketeers/rocketeer) - タスクランナーとデプロイ用パッケージ

## コードスニペット <a id="code-snippets"></a>

* [Laravel LTSチートシート](https://summerblue.github.io/laravel5-cheatsheet/) ([中国語版](https://cs.phphub.org/))
* [Laravel Tricks](http://laravel-tricks.com/)

## チュートリアルとブログ <a id="tutorials--blogs"></a>

* [Taylor Otwell](http://taylorotwell.com/)
* [Tuts+](https://code.tutsplus.com/categories/laravel)
* [Medium](https://medium.com/tag/laravel/latest)
* [Laravel Daily](https://laraveldaily.com/)
* [Scotch](https://scotch.io/tag/laravel)
* [Digital Ocean](https://www.digitalocean.com/community/search?q=laravel&primary_filter=newest&type=tutorials)
* [Matt Stauffer](https://mattstauffer.co/blog)
* [Vegi Bit](https://vegibit.com/tag/laravel/)
* [Neon Tsunami](https://www.neontsunami.com/tags/laravel)
* [Dor.ky](https://dor.ky/tag/laravel/)
* [Stillat](https://stillat.com/explore/categories/laravel-5)
* [Easy Laravel Book Blog](http://www.easylaravelbook.com/blog/)
* [Laraveles](http://laraveles.com/blog/)（スペイン語）
* [Styde](https://styde.net/category/laravel-5/)（スペイン語）
* [Cloudways Laravel Blog](http://cloudways.com/blog/laravel)
* [Laravel Best Practices](https://github.com/alexeymezenin/laravel-best-practices)
* [Pusher Laravel Tutorials](https://pusher.com/tutorials?tag=Laravel)
* [LaraShout](https://larashout.com/)

## 動画<a id="videos"></a>

* [Laracasts](https://laracasts.com/)
* [Codecourse](https://www.codecourse.com/) ([YouTube](https://www.youtube.com/user/phpacademy/playlists))
* [Tuts+](http://code.tutsplus.com/categories/laravel/courses)
* [Servers for Hackers](https://serversforhackers.com/laravel-perf)
* [Test-Driven Laravel](https://course.testdrivenlaravel.com/)
* [Duilio Palacios](https://www.youtube.com/user/silencedsg/videos)（スペイン語）
* [CodigoFacilito](https://codigofacilito.com/courses/laravel)（スペイン語）
* [DevDojo](https://devdojo.com/search?value=laravel)
* [Amitav Roy](https://www.youtube.com/channel/UC4gijXR8cM4gmEt9Olse-TQ/videos)
* [Laracademy](https://laracademy.co/)
* [Dev Marketer](https://www.youtube.com/channel/UC6kwT7-jjZHHF1s7vCfg2CA/playlists)
* [Udemy](https://www.udemy.com/courses/search/?q=laravel)
* [Lynda](https://www.lynda.com/search?q=laravel)
* [Pluralsight](https://www.pluralsight.com/search?q=laravel&categories=course)
* [Bitfumes](https://www.youtube.com/bitfumes)
* [ConfidentLaravel](https://confidentlaravel.com/)

## カンファレンス <a id="conferences"></a>

* [Laracon US](http://laracon.us/)
* [Laracon EU](http://laracon.eu/)
* [Laracon Online](https://laracon.net/)
* [Laraconf Brasil](http://laraconfbrasil.com.br/)
* [Laracon Australia](https://laracon.com.au/)
* [Laravel Live UK](https://laravellive.uk/)
* [Laravel Live India](https://laravellive.in/)
* [Laravel Nigeria](https://laravelnigeria.com)

### 動画<a id="videos-1"></a>

* [Laracon EU 2018](https://www.youtube.com/playlist?list=PLMdXHJK-lGoC64wnqvm6v1R5dsuAV-MpS)
* [Laracon US 2018](https://www.youtube.com/playlist?list=PL-yJve--iT5oM2LgF37VXsBb8Os4ZulIc)
* [Laracon EU 2017](https://www.youtube.com/playlist?list=PLMdXHJK-lGoBFZgG2juDXF6LiikpQeLx2)
* [Laracon US 2017](https://www.youtube.com/playlist?list=PL-yJve--iT5oaLQA6OI8TWLVSOBP1qhs3)
* [Laracon EU 2016](https://www.youtube.com/playlist?list=PLMdXHJK-lGoCMkOxqe82hOC8tgthqhHCN)
* [Laracon US 2016](https://www.youtube.com/playlist?list=PL-yJve--iT5o9fH_cRY0u6P751pcF59GK)
* [Laracon EU 2015](https://www.youtube.com/playlist?list=PLMdXHJK-lGoA9SIsuFy0UWL8PZD1G3YFZ)
* Laracon US 2015
* [Laracon EU 2014](https://www.youtube.com/playlist?list=PLMdXHJK-lGoCYhxlU3OJ5bOGhcKtDMkcN)
* [Laracon US 2014](https://www.youtube.com/channel/UCRawXmZv30Vf_MivyPYb_GQ/videos)
* [Laracon EU 2013](https://www.youtube.com/playlist?list=PLMdXHJK-lGoB-CIVsiQt0WU8WcYrb5eoe)
* [Laracon US 2013](https://www.youtube.com/playlist?list=PLkwAlZpjHQbLcox_S_AgGU24QUfKgXayN)

## 書籍 <a id="books"></a>

* [Laravel Starter](https://www.amazon.com/Laravel-Starter-Shawn-McCool-ebook/dp/B00ABFQ0AS) — 著者：Shawn McCool
* [Laravel: Code Happy](https://leanpub.com/codehappy) — 著者：Dayle Rees
* [Laravel: Code Bright](https://leanpub.com/codebright) — 著者：Dayle Rees
* [Laravel: Code Smart](https://leanpub.com/codesmart) — 著者：Dayle Rees
* [Laravel: From Apprentice To Artisan](https://leanpub.com/laravel) — 著者：Taylor Otwell
* [Laravel 4 Cookbook](https://leanpub.com/laravel4cookbook) — 著者：Christopher Pitt、Taylor Otwell
* [Laravel Testing Decoded](https://leanpub.com/laravel-testing-decoded) — 著者：Jeffrey Way
* [Refactoring to Collections](https://adamwathan.me/refactoring-to-collections/) — 著者：Adam Wathan
* [Implementing Laravel](https://leanpub.com/implementinglaravel) — 著者：Chris Fidao
* [Getting Stuff Done with Laravel 4](https://leanpub.com/gettingstuffdonelaravel) — 著者：Chuck Heintzelman
* [Laravel Application Development Blueprints](https://www.packtpub.com/web-development/laravel-application-development-blueprints) — 著者：Arda Kılıçdağı、Halil İbrahim Yılmaz
* [Build APIs You Won't Hate](https://leanpub.com/build-apis-you-wont-hate) — 著者：Phil Sturgeon
* [Integrating Front end Components with Web Applications](https://leanpub.com/frontend) — 著者：Maksim Surguy
* [Laravel Design Patterns and Best Practices](https://www.packtpub.com/web-development/laravel-design-patterns-and-best-practices) — 著者：Arda Kılıçdağı、Halil İbrahim Yılmaz
* [Learning Laravel 4 Application Development](https://www.packtpub.com/web-development/learning-laravel-4-application-development) — 著者：Hardik Dangar
* [Getting Started with Laravel 4](https://www.packtpub.com/web-development/getting-started-laravel-4) — 著者：Raphaël Saunier
* [Laravel Application Development Cookbook](https://www.packtpub.com/web-development/laravel-application-development-cookbook) — 著者：Terry Matula
* [Building Web Applications Using Parse REST API](https://leanpub.com/building-web-applications-using-parse-rest-api) — 著者：Mhd Zaher Ghaibeh
* [Laravel - My First Framework](https://leanpub.com/laravel-first-framework) — 著者：Maksim Surguy
* [Easy Laravel 5](https://leanpub.com/easylaravel/) — 著者：W. Jason Gilmore
* [Laravel 5 Essentials](https://www.packtpub.com/web-development/laravel-5-essentials) — 著者：Martin Bean
* [Easy E-Commerce Using Laravel and Stripe](https://leanpub.com/easyecommerce) — 著者：W. Jason Gilmore、Eric L. Barnes
* [Laravel 5.1 Beauty](https://leanpub.com/l5-beauty) — 著者：Chuck Heintzelman
* [Design Patterns with PHP and Laravel](https://leanpub.com/larasign) — 著者：Kelt Dockins
* [Mastering Laravel](https://www.packtpub.com/web-development/mastering-laravel) — 著者：Christopher John Pecoraro
* [How to Build Real-Time Laravel Apps with Pusher](http://pusher-community.github.io/real-time-laravel/) — 著者：Pusher
* [Learning Laravel's Eloquent](https://www.amazon.com/Learning-Laravels-Eloquent-Francesco-Malatesta-ebook/dp/B00YSILQ6C) — 著者：Francesco Malatesta
* [Laravel 5 Learn Easy](https://leanpub.com/laravel5learneasy) — 著者：Sanjib Sinha
* [Laravel and AngularJS](https://leanpub.com/laravel-and-angularjs) — 著者：Daniel Schmitz、Daniel Pedrinha Georgii
* [Laravel Collections Unraveled](https://leanpub.com/laravelcollectionsunraveled) — 著者：Jeff Madsen
* [Writing APIs With Lumen](https://leanpub.com/lumen-apis) — 著者：Paul Redmond
* [The Laravel Survival Guide](https://leanpub.com/laravelsurvivalguide) — 著者：Tony Lea
* [Laraboot: Laravel 5 For Beginners](https://leanpub.com/laravel-5-for-beginners-laraboot) — 著者：Bill Keck
* [Laravel 5.4 For Beginners](https://leanpub.com/laravel-5-4-for-beginners) — 著者：Bill Keck
* [Laravel Up & Running](https://www.amazon.com/gp/product/1491936088) — 著者：Matt Stauffer
* [Laravel Companion](https://leanpub.com/laravelcompanion-secondedition) — 著者：Johnathon Koster
* [Deploy Laravel on AWS with CloudFormation](https://leanpub.com/laravel-aws) — 著者：Lionel Martin
* [React Native and Laravel for Future Mobile Development](https://leanpub.com/rn_laravel) — 著者：Ega Radiegtya
* [Servers for Hackers](https://book.serversforhackers.com) — 著者：Chris Fidao
* [Full-Stack Vue.js 2 and Laravel 5](https://www.amazon.com/Full-Stack-Vue-js-Laravel-frontend-together/dp/1788299582) — 著者：Anthony Gore
* [Build an API with Laravel](https://buildanapi.com) — 著者：Wacky Studio

## スタータープロジェクト <a id="starter-projects"></a>

* [Spark](https://spark.laravel.com/)
* [LaraAdmin](https://github.com/dwijitsolutions/laraadmin)
* [Grafite Builder](https://github.com/GrafiteInc/Builder)
* [Laravel Boilerplate](https://github.com/rappasoft/laravel-5-boilerplate)
* [Laravel Angular Material Starter](https://github.com/jadjoubran/laravel5-angular-material-starter)
* [AdminLTE Laravel](https://github.com/acacha/adminlte-laravel)
* [Laravel Hackathon Starter](https://github.com/unicodeveloper/laravel-hackathon-starter)
* [Laravel API Starter Kit](https://github.com/joselfonseca/laravel-api)
* [Backpack for Laravel](https://github.com/Laravel-Backpack/Base)
* [SomelineStarter](https://github.com/someline/someline-starter)
* [Laravel Admin](https://github.com/z-song/laravel-admin)
* [Voyager](https://github.com/the-control-group/voyager)
* [Orchid](https://github.com/TheOrchid/Platform)
* [Laravel REST API Boilerplate](https://github.com/francescomalatesta/laravel-api-boilerplate-jwt)
* [Hello API](https://github.com/Porto-SAP/Hello-API)
* [REST API With Lumen](https://github.com/hasib32/rest-api-with-lumen)
* [Laravel Zero - コンソールアプリケーション](https://github.com/laravel-zero/laravel-zero)
* [Apiato](https://github.com/apiato/apiato)
* [Laravel Adminpanel](https://github.com/viralsolani/laravel-adminpanel)
* [Laravel Vue Boilerplate](https://github.com/alefesouza/laravel-vue-boilerplate)
* [Laravel Enso](https://github.com/laravel-enso/enso)
* [Laravel Template with Vue](https://github.com/wmhello/laravel_template_with_vue)

## 参考コードベース <a id="codebases-for-reference"></a>

* [Cachet](https://github.com/cachethq/Cachet) - ウェブサイトとAPIのステータスページシステム
* [Deployer](https://github.com/REBELinBLUE/deployer) - アプリケーションのデプロイシステム
* [GitScrum](https://github.com/renatomarinho/laravel-gitscrum) - GitとScrumを使ったタスク管理
* [Invoice Ninja](https://github.com/invoiceninja/invoiceninja) - 請求、経費、時間記録のアプリケーション
* [Koel](https://github.com/phanan/koel) - 個人向けの音楽ストリーミングサーバー
* [Laravel.io](https://github.com/laravelio/portal) - Laravel.ioコミュニティポータルのソースコード
* [Attendize](https://github.com/Attendize/Attendize) - チケット販売とイベント管理のプラットフォーム
* [Antvel](https://github.com/ant-vel/App) - 電子商取引のプラットフォーム
* [Jigsaw](https://github.com/tightenco/jigsaw) - 静的サイトジェネレーター
* [Canvas](https://github.com/cnvs/canvas) - Laravelを使ったコンテンツ公開プラットフォーム
* [Vuedo](https://github.com/Vuedo/vuedo) - LaravelとVue.jsを使ったブログプラットフォーム
* [Screeenly](https://github.com/stefanzweifel/screeenly) - APIでウェブサイトのスクリーンショットを作成
* [Voten](https://github.com/voten-co/voten) - リアルタイムのソーシャルブックマークプラットフォーム
* [Monica](https://github.com/monicahq/monica) - 個人の人間関係を管理するシステム
* [Snipe-IT](https://github.com/snipe/snipe-it) - IT資産・ライセンス管理システム
* [Akaunting](https://github.com/akaunting/akaunting) - 小規模事業者とフリーランス向けの会計ソフトウェア
* [Torch](https://github.com/mattstauffer/Torch) - Laravel以外のアプリケーションで各Illuminateコンポーネントを使う例
* [Pixelfed](https://github.com/pixelfed/pixelfed) - ActivityPubで連合する写真共有プラットフォーム。原文では自由に利用できる倫理的なプラットフォームと説明されている

## コンテンツ管理システム <a id="content-management-systems"></a>

* [OctoberCMS](https://github.com/octobercms/october)
* [SleepingOwlAdmin](https://github.com/LaravelRUS/SleepingOwlAdmin)
* [PyroCMS](https://github.com/pyrocms/pyrocms)
* [Lavalite](https://github.com/LavaLite/cms)
* [TypiCMS](https://github.com/typicms/base)
* [Asgard CMS](https://github.com/AsgardCms/Platform)
* [Microweber](https://github.com/microweber/microweber)
* [Coaster CMS](https://github.com/web-feet/coastercms)
* [Statamic](https://statamic.com/)
* [Borgert CMS](https://github.com/odirleiborgert/borgert-cms/)
* [PJ Blog](https://github.com/jcc/blog/)
* [Laralum](https://github.com/Laralum/Laralum)
* [Twill](https://github.com/area17/twill)

## ポッドキャスト <a id="podcasts"></a>

* [The Laravel Podcast](http://www.laravelpodcast.com/)
* [The Laravel News Podcast](https://laravel-news.com/podcast/ )
* [The Laracasts Snippet](https://laracasts.simplecast.fm/)
* [Hecho en Laravel（スペイン語）](http://hechoenlaravel.com)

## コミュニティ <a id="community"></a>

* [Laracasts Forum](https://laracasts.com/discuss)
* [Laravel.io Forum](http://laravel.io/forum)
* [Larachat Slack](https://larachat.slack.com/) ([参加登録](https://larachat.co/register))
* [Gitter](https://gitter.im/laravel/laravel)
* [IRCチャンネル](http://laravel.io/chat)
* [StackOverflow](http://stackoverflow.com/questions/tagged/laravel)
* [Twitter](https://twitter.com/laravelphp)
* [Google+](https://plus.google.com/communities/106838454910116161868)
* [Reddit](https://www.reddit.com/r/laravel)
* [Quora](https://www.quora.com/topic/Laravel)
* [Facebook](https://www.facebook.com/LaravelCommunity)
* [LinkedIn](https://www.linkedin.com/groups/4419933/profile)

### ローカルユーザーグループ <a id="local-user-groups"></a>

* [Laravel Global Community](https://www.facebook.com/groups/group.laravel/)
* [LaravelES Slack](https://laraveles.slack.com) ([参加登録](http://laraveles.com/blog/wp-login.php?action=slack-invitation))
* [Laravel India](https://laravellive.in/), [Slack参加登録](https://laravelliveindia.slack.com/join/shared_invite/enQtNjQyMDE4NDA3MDQzLWMyZmIxNGZkNGVkNGFmMzE1MTgyOGNiZGY1ZmU1ZDQ3Mzk2ODBlZGJlODk3ZmI0OWNlZmI5MzQyZDJhYzg1NjE), [Twitter](https://twitter.com/LaravelLiveIN), [Facebook](https://www.facebook.com/laravellive/), [YouTube](https://www.youtube.com/channel/UC6TxYSHI7g9FMJ7VlHk72Yg)
* [Laravel UK](https://laravelphp.uk/), [Slack参加登録](https://laravelphp.uk/login/slack)
* [Laravel Russia](https://laravel.ru/) ([VKグループ](http://m.vk.com/laravel_rus))
* [Laravel France](https://laravel.fr/)
* [Laravel Bangladesh](https://www.facebook.com/groups/LaravelBanglaDesh/)
* [Laravel Indonesia](http://id-laravel.com/) ([Facebook](https://www.facebook.com/groups/laravel/), [Telegram](https://t.me/laravelindonesia))
* [Laravel Brasil](http://www.laravel.com.br/) ([Facebook](https://www.facebook.com/groups/laravelbrasil/), [Slack](http://slack.laravel.com.br), [Telegram](https://telegram.me/laravelbr), [GitHub](https://github.com/laravelbrasil), [Discord](https://discord.gg/9dpuWeZ))
* [Laravel Turkey](http://www.laravel.gen.tr/) ([Facebook](https://www.facebook.com/groups/laravelturkiye/))
* [Laravel Nigeria](http://www.laravelnigeria.com/) ([Facebook](https://www.facebook.com/groups/laravelnigeria/))
* [Laravel China](https://phphub.org/)
* [Laravel Taiwan](https://laravel.tw/) ([Facebook](https://www.facebook.com/groups/laravel.tw/))
* [Laravel Spanish](http://laraveles.com/foro/)
* [Laravel Korea](https://www.laravel.co.kr/) ([Facebook](https://www.facebook.com/groups/laravelkorea/))
* [Laravel Japan](http://laravel.jp/) ([Facebook](https://www.facebook.com/groups/laravel.jp/))
* [Laravel Malaysia](https://www.facebook.com/groups/laravel.my/)
* [Laravel Algeria](https://www.facebook.com/groups/LaravelAlgeria/)
* [Laravel Greece](http://www.laravel.gr) ([Facebook](https://www.facebook.com/laravelgr))
* [Laravel Middle East](http://laravelme.com/) ([Facebook](https://www.facebook.com/laravelme))
* [Laravel Georgia](https://www.facebook.com/groups/laravel.georgia/)
* [Laravel Italy](http://laravel-italia.it)
* [Laravel Vietnam](https://www.facebook.com/groups/vietnam.laravel/)
* [Laravel Slovenia](https://www.facebook.com/groups/laravelslovenija/)
* [Laravel Hungary](https://laravel.hu)
* [Laravel Cameroon](https://laravelcm.com/) ([Slack](https://laravelcm.slack.com), [GitHub](https://github.com/laravelcm), [Facebook](https://www.facebook.com/laravelcm), [Twitter](https://twitter.com/laravelcm))
* [Laravel Philippines](https://www.facebook.com/groups/laravelph)

### ミートアップ <a id="meetups"></a>

* [すべてのミートアップ](http://www.meetup.com/topics/laravel/)
* [ロンドンのミートアップ](https://www.meetup.com/London-Laravel/)
* [ブエノスアイレスのミートアップ](https://www.meetup.com/Laravel-Buenos-Aires/)
* [アテネ（ギリシャ）のミートアップ](https://www.meetup.com/athens-laravel-meetup/)
* [コペンハーゲンのミートアップ](https://www.meetup.com/Copenhagen-Laravel-Meetup/)
* [デトロイトのミートアップ](https://www.meetup.com/Laravel-Detroit/)
* [パリのミートアップ](https://www.meetup.com/fr-FR/Paris-Laravel-Meetup/)
* [メルボルンのミートアップ](https://www.meetup.com/Melbourne-laravel-Meetup/)
* [ブダペストのミートアップ](https://www.meetup.com/Laravel-Hungary-Meetup/)

## 求人 <a id="jobs"></a>

* [LaraJobs](https://larajobs.com/)
* [Laravel Gurus](https://laravelgurus.com/)

## ホステッド開発ツール <a id="hosted-development-tools"></a>

* [Laravel Shift](https://laravelshift.com/) - Laravelプロジェクトのアップグレードを自動化するツール
* [Laravel Schema Designer](http://laravelsd.com/) - データベーススキーマを作成・エクスポート・共有
* [StyleCI](https://styleci.io) - PHPのコーディングスタイル管理サービス

## その他 <a id="miscellaneous"></a>

* [CodeCanyon](https://codecanyon.net/tags/laravel?term=laravel) - 有料のスクリプトとプラグイン
* [Laravel Collections](https://laravelcollections.com) - Laravel開発者向けの資料サイト
* [LaravelLinks](https://telegram.me/laravellinks) - Laravelの資料を共有するTelegramチャンネル
