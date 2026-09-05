---
title: "Awesome Laravel"
description: "Laravelを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-chiraggude-awesome-laravel-readme-md"
---

# Awesome Laravel

Laravelを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [Essentials](#essentials)
- [Packages](#packages)
- [Popular Packages](#popular-packages)
- [Development Setup](#development-setup)
- [Application Hosting](#application-hosting)
- [Application Deployment](#application-deployment)
- [Code Snippets](#code-snippets)
- [Tutorials & Blogs](#tutorials--blogs)
- [Videos](#videos)
- [Conferences](#conferences)
- [Books](#books)
- [Starter Projects](#starter-projects)
- [Codebases for Reference](#codebases-for-reference)
- [Content Management Systems](#content-management-systems)
- [Podcasts](#podcasts)
- [Community](#community)
- [Jobs](#jobs)
- [Hosted Development Tools](#hosted-development-tools)
- [Miscellaneous](#miscellaneous)

<a id="essentials"></a>
## 基本情報

* [Laravel](https://laravel.com) ([Documentation](https://laravel.com/docs))
* [Laravel API Reference](https://laravel.com/api/master/)
* [Lumen](https://lumen.laravel.com) ([Documentation](https://lumen.laravel.com/docs))
* [Laracasts](https://laracasts.com)
* [Laravel News](https://laravel-news.com) ([Archive](https://laravel-news.com/archive/))

<a id="packages"></a>
## パッケージ

* [Packagist](https://packagist.org/)
* [Laravel Collective](https://laravelcollective.com/)
* [Packalyst](http://packalyst.com/)
* [Spatie](https://spatie.be/en/opensource/laravel)

<a id="popular-packages"></a>
## 人気のパッケージ

> This is a list of well-documented, tested packages that are frequently used in Laravel projects. If you're looking for an exhaustive list of PHP packages, then check out the Package Repositories mentioned above.

<a id="developer-tools"></a>
##### 開発ツール

* [Scaffold Interface](https://github.com/amranidev/scaffold-interface) - Laravel用のスマートCRUDジェネレーター
* [IDE Helper](https://github.com/barryvdh/laravel-ide-helper) - IDEの自動補完用のヘルパーファイルを生成
* [Laravel 5 Extended Generators](https://github.com/laracasts/Laravel-5-Generators-Extended) - ビルトインファイルジェネレーターを拡張
* [Laravel API/Scaffold/CRUD Generator](https://github.com/InfyOmLabs/laravel-generator) - API、CRUDのスケルトンなどへのジェネレーター
* [Laravel Tinx](https://github.com/furey/tinx) - Tinker内でLaravelのTinkerセッションを再読み込み
* [Laravel API Documentation Generator](https://github.com/mpociot/laravel-apidoc-generator) - APIドキュメントを自動生成
* [Laravel Packager](https://github.com/Jeroen-G/Laravel-Packager) - Laravelパッケージを作成するCLIツール
* [Workbench Export to Migrations](https://github.com/beckenrode/mysql-workbench-export-laravel-5-migrations) - モデルをLaravelのマイグレーションにエクスポートするWorkbenchプラグイン
* [Laravel Decomposer](https://github.com/lubusIN/laravel-decomposer) - インストール済みパッケージ、依存関係、アプリおよびサーバーの詳細を一覧表示
* [LaRecipe](https://github.com/saleem-hadad/larecipe) - Laravelアプリ内でMarkdownを使って製品の美しいドキュメントを書く
* [Prequel](https://github.com/Protoqol/Prequel/) - Laravelに最適化されたシンプルで明瞭なデータベース管理GUI

<a id="testing--debugging"></a>
##### テストとデバッグ

* [Laravel TestTools](https://chrome.google.com/webstore/detail/laravel-testtools/ddieaepnbjhgcbddafciempnibnfnakl) - アプリを使用中にLaravel統合テストを生成するChrome拡張機能
* [Laravel Test Factory Generator](https://github.com/mpociot/laravel-test-factory-helper) - 既存のモデルからLaravelテストファクトリを自動生成
* [Clockwork](https://github.com/itsgoingd/clockwork) - Clockwork Chrome拡張機能を統合してアプリのデバッグとプロファイリングを可能にする
* [Debug Bar](https://github.com/barryvdh/laravel-debugbar) - PHP Debug BarをLaravelと統合
* [Ignition](https://github.com/facade/ignition) - Laravelアプリ用の美しいエラーページ
* [Laravel 5 Log Viewer](https://github.com/rap2hpoutre/laravel-log-viewer) - ログ閲覧ツール
* [LogViewer](https://github.com/ARCANEDEV/LogViewer) - ログ閲覧機能を提供
* [LERN](https://github.com/tylercd100/lern#lern-laravel-exception-recorder-and-notifier) - 例外をデータベースに記録し、通知を送信
* [Mail Preview](https://github.com/themsaid/laravel-mail-preview) - ウェブブラウザまたはメールクライアントで送信されたメールをプレビュー
* [Laravel Tracy](https://github.com/recca0120/laravel-tracy) - LaravelにNette Tracyデバッガーを統合するLaravelパッケージ
* [Laravel Terminal](https://github.com/recca0120/laravel-terminal) - ウェブブラウザでartisanを実行
* [Laravel API Tester](https://github.com/asvae/laravel-api-tester) - Laravelルートに基づくPostmanのようなツール
* [Laravel Tail](https://github.com/spatie/laravel-tail) - 欠けているtailコマンド
* [Laravel Telescope](https://github.com/laravel/telescope) - Laravel TelescopeはLaravelフレームワーク向けの洗練されたデバッグアシスタント

<a id="authentication--authorization"></a>
##### 認証と認可

* [Bouncer](https://github.com/JosephSilber/bouncer) - ロールと権限
* [Laratrust](https://github.com/santigarcor/laratrust) - ロール、権限、およびチーム
* [Entrust](https://github.com/Zizaco/entrust) - ロールベースの権限
* [JWT Auth](https://github.com/tymondesigns/jwt-auth) - API向けのJSON Web Token認証
* [Laravel Permission](https://github.com/spatie/laravel-permission) - ユーザーとロール、権限を関連付ける
* [Defender](https://github.com/artesaos/defender) - ロールと権限
* [OAuth2 Server Laravel](https://github.com/lucadegasperi/oauth2-server-laravel) - OAuth 2.0の認証サーバーおよびリソースサーバー
* [Socialite](https://github.com/laravel/socialite) - Facebook、Google、TwitterなどとのOAuth認証
* [Socialite Providers 2.0](http://socialiteproviders.github.io/) - Socialiteで100以上のソーシャル認証プロバイダー（Lumen対応）
* [Google2FA](https://github.com/antonioribeiro/google2fa) - Googleの2段階認証モジュール
* [Laravel User Verification](https://github.com/jrean/laravel-user-verification) - ユーザーの確認フローを処理し、メールの検証を行う
* [Adldap2 Laravel](https://github.com/Adldap2/Adldap2-Laravel) - LDAP認証およびActive Directory管理
* [Doorman](https://github.com/clarkeash/doorman) - Laravelアプリケーションへのアクセスをインビテコードで制限
* [Laravel Heyman](https://github.com/imanghafoori1/laravel-heyman) - 上記のロール・パーミッションパッケージが終了したところをHeymanが継続

<a id="utilities"></a>
##### ユーティリティ

* [Awes.io](https://github.com/awes-io/awes-io) - Vue (Nuxt.js)、TailwindCSS plus LaravelをベースとしたCRM、SaaS、ERPのボイラープレート
* [Artisan View](https://github.com/svenluijten/artisan-view) - アーティショントールでLaravelプロジェクトのビューを管理
* [Bootstrapper](https://github.com/patricktalmadge/bootstrapper/) - Bootstrap 3のマーカップを作成するためのクラスセット
* [Captcha](https://github.com/mewebstudio/captcha) - ボット対策用の画像CAPTCHAシステム
* [Charts](https://github.com/ConsoleTVs/Charts) - インタラクティブなチャートを作成するためのマルチライブラリチャートパッケージ
* [Lavacharts](https://github.com/kevinkhill/lavacharts) - Google Chart APIを活用したPHPによるチャートとグラフ
* [Eloquent Filter](https://github.com/Tucker-Eric/EloquentFilter) - モデルとその関係性をフィルタリング
* [Eloquent Sluggable](https://github.com/cviebrock/eloquent-sluggable) - Eloquentモデルにスラグを作成
* [Eloquent Sortable](https://github.com/spatie/eloquent-sortable) - Eloquentモデルにソート可能な動作を追加
* [HTML](https://github.com/LaravelCollective/html) - Laravel用のHTMLおよびフォームビルダー
* [Multi-tenant](https://github.com/hyn/multi-tenant) - ルート、アセット、データベースの安全な分離を実現する柔軟なマルチテンアンシー
* [Laravel Form Builder](https://github.com/kristijanhusak/laravel-form-builder) - Symfonyのフォームビルダーをインスピレーションとして作ったフォームビルダー
* [Laravel Activitylog](https://github.com/spatie/laravel-activitylog) - Laravelアプリケーション内のアクティビティをログ記録
* [Laravel Auditing](https://github.com/owen-it/laravel-auditing) - Eloquentモデルの監査
* [Laravel Breadcrumbs](https://github.com/davejamesmiller/laravel-breadcrumbs) - breadcrumbを作成および管理
* [Laravel Collection Macros](https://github.com/spatie/laravel-collection-macros) - 便利なコレクションマクロのセット
* [Laravel Cookie Consent](https://github.com/spatie/laravel-cookie-consent) - LaravelアプリケーションがEUの厳しいクッキー法に準拠するようにする
* [Laravel Datatables](https://github.com/yajra/laravel-datatables) - jQuery DataTables API
* [Laravel GeoIP](https://github.com/Torann/laravel-geoip) - ウェブサイトの訪問者に応じてIPアドレスから位置を特定
* [Laravel Hashids](https://github.com/vinkla/laravel-hashids) - ユニークで非順序のIDを[Hashids](http://hashids.org/php/)を使用して生成
* [Laravel Impersonate](https://github.com/404labfr/laravel-impersonate) - 自分のユーザーのいずれかとして認証できるパッケージ
* [Laravel Mailbox](https://github.com/beyondcode/laravel-mailbox) - 入力されたメールを処理できるパッケージ
* [Laravel Markdown](https://github.com/GrahamCampbell/Laravel-Markdown) - CommonMark マークダウンパーサー
* [Laravel Menu](https://github.com/spatie/laravel-menu) - Laravel用のHTMLメニュー生成器
* [Laravel Talk](https://github.com/nahid/talk) - リアルタイムユーザー間メッセージングシステム
* [Laravel Messenger](https://github.com/cmgmyr/laravel-messenger) - ユーザー間メッセージングシステム
* [Laravel Moderation](https://github.com/hootlex/laravel-moderation) - 投稿、コメント、ユーザーなど、リソースを承認または拒否
* [Laravel Tags](https://github.com/spatie/laravel-tags) - タグを追加し、タグ可能な動作を実装
* [Laravel Stats Tracker](https://github.com/antonioribeiro/tracker) - リクエストから情報を収集して識別・保存
* [Listify](https://github.com/lookitsatravis/listify) - Eloquentモデルにソートや順序付け機能を追加
* [noCAPTCHA](https://github.com/ARCANEDEV/noCAPTCHA) - Googleの新しいnoCAPTCHA（reCAPTCHA）用のヘルパー
* [Purifier](https://github.com/mewebstudio/purifier) - HTMLフィルター
* [Revisionable](https://github.com/VentureCraft/revisionable) - Eloquentモデルの履歴を生成
* [SEOTools](https://github.com/artesaos/seotools) - いくつかの一般的なSEO技術用のヘルパー
* [Page Cache](https://github.com/JosephSilber/page-cache) - レスポンスをディスク上の静的ファイルとしてキャッシュし、ページ読み込みを極めて高速に
* [Laravel Setting](https://github.com/anlutro/laravel-settings) - JSONファイルに保存された永続的な設定項目
* [Friendship](https://github.com/hootlex/laravel-friendships) - 友人関係管理システム
* [Teamwork](https://github.com/mpociot/teamwork) - 招待システムを用いたユーザーとチームの関連付け
* [Validating](https://github.com/dwightwatson/validating) - Eloquentモデルのバリデーション用の特性
* [VAT Calculator](https://github.com/mpociot/vat-calculator) - EUのMOSS消費税規則に関連するすべての難しい部分を処理
* [Laravel UUID](https://github.com/webpatser/laravel-uuid) - RFC 4122標準に従ってUUIDを生成
* [Laravel Installer](https://github.com/RachidLaasri/LaravelInstaller) - ユーザーがセットアップウィザードを進めるだけでアプリケーションをインストールできるようにする
* [Laravel Modules](https://github.com/nWidart/laravel-modules) - 簡単なモジュール管理
* [Laravel Phone](https://github.com/Propaganistas/Laravel-Phone) - 電話番号のバリデーションとフォーマット
* [Laravel Ban](https://github.com/cybercog/laravel-ban) - Eloquentモデルのブロッキングとバンの簡易化
* [Laravel Proxy](https://github.com/fideloper/TrustedProxy) - ロードバランサやその他の中間者に接続されている場合のセッションの処理
* [Laravel Video Chat](https://github.com/PHPJunior/laravel-video-chat) - Socket.IOとWebRTCを使用したビデオチャット
* [Widgets for Laravel](https://github.com/arrilot/laravel-widgets) - ビューコンポーザーへの強力な代替手段
* [Secure Headers](https://github.com/BePsvPT/secure-headers) - HTTPレスポンスにセキュリティ関連のヘッダーを追加
* [Laravel Nova](https://nova.laravel.com/) - NovaはLaravel用の美しく設計された管理パネル
* [Laravel Love](https://github.com/cybercog/laravel-love) - コンテンツに対する人々の感情を表現できるようにし、いいねやいいねをEloquentモデルに反応できる
* [stancl/tenancy](https://github.com/stancl/tenancy) - Laravelアプリケーションに自動的にテナントを設定。コード変更なしで動作。

<a id="media--document-management"></a>
##### メディアと文書管理

* [Intervention Image](https://github.com/Intervention/image) - 画像を作成・編集・合成するための画像ハンドリングライブラリ
* [Laravel ImageUp](https://github.com/qcod/laravel-imageup) - もう一つの画像操作パッケージで、多くの追加機能を提供
* [Laravel Glide](https://github.com/spatie/laravel-glide) - Glideを使って画像を簡単に変換
* [Laravel MediaLibrary](https://github.com/spatie/laravel-medialibrary) - ファイルをEloquentモデルと関連付ける
* [Laravel Snappy](https://github.com/barryvdh/laravel-snappy) - wkhtmltopdfを使用したHTMLからPDF生成
* [Laravel DOMPDF](https://github.com/barryvdh/laravel-dompdf) - wkhtmltop和を使用したHTMLからPDF生成 [dompdf](https://github.com/dompdf/dompdf)
* [Laravel Stapler](https://github.com/CodeSleeve/laravel-stapler) - ORMベースのファイルアップロードマネージャー
* [Laravel Excel](https://github.com/Maatwebsite/Laravel-Excel) - ExcelおよびCSVファイルのインポートとエクスポート
* [Fast Excel](https://github.com/rap2hpoutre/fast-excel) - Laravel向けの高速XLSX、CSVおよびODTのインポートとエクスポート
* [Laravolt Avatar](https://github.com/laravolt/avatar) - プラグアンドプレイ型アバター：名前、メールアドレス、その他任意の文字列を美しいアバター（またはグレートラ）に変換。手軽に。
* [Laravel FFmpeg](https://github.com/pascalbaljetmedia/laravel-ffmpeg) - このパッケージはLaravel 5.8向けにFFmpegとの統合を提供します。

<a id="integration-with-javascript"></a>
##### JavaScriptとの統合

* [Laroute](https://github.com/aaronlord/laroute) - JavaScriptからLaravelルートURLを生成
* [PHP Vars to JavaScript Transformer](https://github.com/laracasts/PHP-Vars-To-Js-Transformer) - サーバー側の文字列／配列／コレクションなど、JavaScriptに渡す
* [Javascript Validation](https://github.com/proengsoft/laravel-jsvalidation) - クライアント側でのフォーム検証にバリデーションルール、メッセージ、FormRequest、バリデーターを使用
* [Laravel Pjax](https://github.com/spatie/laravel-pjax) - Pjaxミドルウェア
* [Laravel Blade Javascript](https://github.com/spatie/laravel-blade-javascript) - Bladeディレクティブで変数をJavaScriptにエクスポート
* [Ziggy](https://github.com/tightenco/ziggy) - JavaScriptでLaravelの名前付きルートを使用
* [LiveWire](https://github.com/livewire/livewire) - Laravel向けの魔法のフロントエンドフレームワーク

<a id="databases-orms-migrations--seeding"></a>
##### データベース、ORM、マイグレーション、シーディング

* [Backup Manager](https://github.com/backup-manager/laravel) - S3、Dropbox、SFTPなどからデータベースのバックアップと復元
* [Laravel Nestedset](https://github.com/lazychaser/laravel-nestedset) - ネストセットパターンの実装
* [ClosureTable](https://github.com/franzose/ClosureTable) - クロージャーテーブルパターンの実装
* [Eloquence](https://github.com/kirkbushell/eloquence) - Eloquentモデル向けの追加機能
* [iSeed](https://github.com/orangehill/iseed) - 既存のデータベーステーブルから新しいシードファイルを生成
* [Laravel OCI8](https://github.com/yajra/laravel-oci8) - Oracle DBドライバー（OCI8）
* [Laravel Backup](https://github.com/spatie/laravel-backup) - アプリケーションのバックアップ
* [Laravel Doctrine](https://github.com/laravel-doctrine/orm) - Doctrine 2 ORMの実装
* [Laravel MongoDB](https://github.com/jenssegers/laravel-mongodb) - エレクトゥスモデルとクエリビルダーでMongoDBに対応
* [Migrations Generator](https://github.com/Xethron/migrations-generator) - 既存のデータベースからマイグレーションを生成
* [Sofa/Eloquence](https://github.com/jarektkaczyk/eloquence) - エレクトゥスORM用の拡張機能
* [Tenanti](https://github.com/orchestral/tenanti) - マルチテナントデータベーススキーママネージャ
* [Laravel Repository](https://github.com/andersao/l5-repository) - データベース層を抽象化するリポジトリ
* [Lada Cache](https://github.com/spiritix/lada-cache) - Redisベースの完全自動化かつスケーラブルなデータベースキャッシュ層
* [Laravel MySQL Spatial extension](https://github.com/grimzy/laravel-mysql-spatial) - MySQLの空間データ型と空間関数との簡単に作業

<a id="search"></a>
##### 検索

* [Algolia Search](https://github.com/algolia/algoliasearch-laravel) - LaravelエレクトゥスORMにアルゴリア検索APIを統合
* [Elasticquent](https://github.com/elasticquent/Elasticquent) - エレクトゥドモデル用のElasticsearch
* [Plastic](https://github.com/sleimanx2/plastic) - Elasticsearchへのフリーミングマッピングと検索
* [Laravel Search](https://github.com/mmanos/laravel-search) - Elasticsearch、アルゴリア、ZendSearchに共通のAPI
* [SearchIndex](https://github.com/spatie/searchindex) - アルゴリアまたはElasticsearchにオブジェクトを保存・取得
* [Searchable](https://github.com/nicolaslopezj/searchable) - エレクトゥスモデルにシンプルな検索機能を追加するトレイト
* [TNTSearch](https://github.com/teamtnt/tntsearch) - PHPで書かれた完全機能の全文検索エンジン
* [TNTSearch driver](https://github.com/teamtnt/laravel-scout-tntsearch-driver) - TNTSearchに基づく [Laravel Scout](https://github.com/laravel/scout)検索パッケージ用ドライバー
* [Laravel-Searchy](https://github.com/TomLingham/Laravel-Searchy) - フュージ検索、基本的な文字列マッチング、レヴィンシュタイン距離

<a id="apis"></a>
##### API

* [ApiGuard](https://github.com/chrisbjr/api-guard) - APIキーによるAPI認証を可能にする
* [Dingo API](https://github.com/dingo/api) - RESTful API開発用のマルチ用途ツールキット
* [Laravel CORS](https://github.com/barryvdh/laravel-cors) - CORS（クロスオリジンリソースシェアリング）ヘッダーのサポートを追加
* [Laravel Fractal](https://github.com/spatie/laravel-fractal) - Fractalで複雑で柔軟なAJAX/RESTフルデータ構造を出力
* [Laravel GraphQL](https://github.com/rebing/graphql-laravel) - リレーやeloquentモデル、バリデーション、GraphiQLをサポート
* [Lighthouse](https://github.com/nuwave/lighthouse) - Laravel用の新しいGraphQLライブラリ
* [Laravel Responder](https://github.com/flugger/laravel-responder) - Fractalを使ってカスタムAPIレスポンスを構築

<a id="tasks-commands-and-scheduling"></a>
##### タスク、コマンド、スケジューリング

* [Dispatcher](https://github.com/indatus/dispatcher) - Artisanコマンドのスケジューラ
* [Elixir](https://github.com/laravel/elixir) - Gulpタスクを実行するNode（NPM）パッケージ
* [Mix](https://github.com/JeffreyWay/laravel-mix) - 基本的なwebpackビルドステップを定義するフリュイディーAPI
* [Envoy](https://github.com/laravel/envoy) - SSHタスクランナー

<a id="payments"></a>
##### 決済

* [Cashier](https://github.com/laravel/cashier) - Stripeでサブスクリプション課金
* [Omnipay for Laravel](https://github.com/ignited/laravel-omnipay) - [Omnipay](https://github.com/thephpleague/omnipay) PHPライブラリを統合します

<a id="optimization"></a>
##### 最適化

* [Intervention Image Cache](https://github.com/Intervention/imagecache) - Intervention Image Class用のキャッシュ拡張
* [Laravel HTMLMin](https://github.com/GrahamCampbell/Laravel-HTMLMin) - Blade/HTML/CSS/JavaScriptのミニファイア
* [Rememberable](https://github.com/dwightwatson/rememberable) - Eloquentでのクエリキャッシュ
* [Widgetize](https://github.com/imanghafoori1/laravel-widgetize) - ページパーシャルのキャッシュ
* [Laravel Responsecache](https://github.com/spatie/laravel-responsecache) - レスポンス全体をキャッシュすることでアプリのスピードアップ

<a id="monitoring"></a>
##### モニタリング

* [Horizon](https://github.com/laravel/horizon) - シンプルなウェブUIでキューを監視・設定
* [Laravel Failed Job Monitor](https://github.com/spatie/laravel-failed-job-monitor) - キューに登録されたジョブが失敗したときに通知
* [Laravel Uptime Monitor](https://github.com/spatie/laravel-uptime-monitor) - Laravelアプリ用の自己ホスト型メトリクスと通知プラットフォーム
* [Larametrics](https://github.com/aschmelyun/larametrics) - バリデーション、ページネーション、リマインダーの言語ラインを37言語対応

<a id="localization"></a>
##### ローカライズ

* [Language Files](https://github.com/caouecs/Laravel-lang) - ルート経由でi18nサポートを追加
* [Laravel Localization](https://github.com/mcamara/laravel-localization) - ルートを介してi18nをサポートする
* [Laravel Translatable](https://github.com/spatie/laravel-translatable) - Eloquentモデルの翻訳をJSONとして保存することで実現する
* [Laravel Translatable](https://github.com/dimsav/laravel-translatable) - 翻訳可能なEloquentモデルインスタンスの取得と保存
* [Laravel Translator](https://github.com/vinkla/laravel-translator) - Eloquentモデルを複数言語に翻訳
* [Laravel Date](https://github.com/jenssegers/date) - Carbonに基づいた複数言語での日付処理を支援するライブラリ
* [Laravel Langman](https://github.com/themsaid/laravel-langman) - Artisanコンソールから言語ファイルを管理
* [Laravel Translation](https://github.com/waavi/translation) - 翻訳とローカリゼーションの管理
* [Linguist](https://github.com/keevitaja/linguist) - Laravelにおけるi18nローカリゼーションサポート

<a id="third-party-service-integration"></a>
##### サードパーティーサービス統合

* [Laravel Analytics](https://github.com/spatie/laravel-analytics) - Google Analyticsからページビューおよびその他のデータを取得
* [Laravel DigitalOcean](https://github.com/GrahamCampbell/Laravel-DigitalOcean) - DigitalOceanV2ブリッジ
* [Laravel GitHub](https://github.com/GrahamCampbell/Laravel-GitHub) - PHP GitHub APIブリッジ
* [Laravel Instagram](https://github.com/vinkla/laravel-instagram) - Instagram APIブリッジ
* [Laravel Newsletter](https://github.com/spatie/laravel-newsletter) - Mailchimpでニュースレターを送信
* [Laravel Pusher](https://github.com/vinkla/laravel-pusher) - Pusher APIブリッジ

<a id="development-setup"></a>
## 開発環境

* [Homestead](https://laravel.com/docs/master/homestead) - Laravel用の公式Vagrantボックス
* [Valet](https://laravel.com/docs/master/valet) - Macユーザー向けの開発環境
* [Valet Linux](https://github.com/cpriego/valet-linux) - Linuxユーザー向けの開発環境
* [LaraDock](https://github.com/LaraDock/laradock) - Docker上でLaravelを実行（Homesteadとは異なり、VagrantではなくDocker）
* [LaraEdit Docker](https://github.com/laraedit/laraedit-docker) - Dockerコンテナ内でHomestead環境を提供
* [Laragon](https://laragon.org/) -  Windows上で孤立した開発環境
* [Stacker](https://github.com/Maxlab/stacker) - Docker上でローカルWeb開発用の環境
* [Devilbox](https://github.com/cytopia/devilbox) - PHPのすべてのバージョンに対応するDocker化された一般用途のLAMP/MEANスタック
* [Vessel](https://vessel.shippingdocker.com) - Laravel用のシンプルなDocker開発環境
* [Lando](https://docs.lando.dev/config/laravel.html) - Dockerをベースにしたローカル開発環境ツール

<a id="application-hosting"></a>
## アプリケーションホスティング

* [Vapor](https://vapor.laravel.com)
* [Forge](https://forge.laravel.com/) ([ForgeRecipes](https://forgerecipes.com/))
* [FortRabbit](https://www.fortrabbit.com/laravel-hosting)
* [Heroku](https://www.heroku.com/) ([Documentation](https://devcenter.heroku.com/articles/getting-started-with-laravel))
* [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) ([Tutorial](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/php-laravel-tutorial.html))
* [Cloudways](https://www.cloudways.com/en/laravel-hosting.php)
* [Ploi](https://ploi.io/)
* [CodePier](https://codepier.io?ref=awesome-laravel)
* [RunCloud](https://runcloud.io/)

<a id="application-deployment"></a>
## アプリケーションのデプロイ

* [Deployer](https://deployer.org/) - Laravelを標準でサポートしたデプロイツール
* [Envoyer](https://envoyer.io/) - PHPおよびLaravelプロジェクト用のゼロダウンタイムデプロイャー
* [Rocketeer](https://github.com/rocketeers/rocketeer) - タスク実行者およびデプロイパッケージ

<a id="code-snippets"></a>
## コードスニペット

* [Laravel LTS Cheat Sheet ](https://summerblue.github.io/laravel5-cheatsheet/) ([Chinese version](https://cs.phphub.org/))
* [Laravel Tricks](http://laravel-tricks.com/)

<a id="tutorials--blogs"></a>
## チュートリアルとブログ

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
* [Laraveles](http://laraveles.com/blog/) (ES)
* [Styde](https://styde.net/category/laravel-5/) (ES)
* [Cloudways Laravel Blog](http://cloudways.com/blog/laravel)
* [Laravel Best Practices](https://github.com/alexeymezenin/laravel-best-practices)
* [Pusher Laravel Tutorials](https://pusher.com/tutorials?tag=Laravel)
* [LaraShout](https://larashout.com/)

<a id="videos"></a>
## 動画

* [Laracasts](https://laracasts.com/)
* [Codecourse](https://www.codecourse.com/) ([YouTube](https://www.youtube.com/user/phpacademy/playlists))
* [Tuts+](http://code.tutsplus.com/categories/laravel/courses)
* [Servers for Hackers](https://serversforhackers.com/laravel-perf)
* [Test-Driven Laravel](https://course.testdrivenlaravel.com/)
* [Duilio Palacios](https://www.youtube.com/user/silencedsg/videos) (ES)
* [CodigoFacilito](https://codigofacilito.com/courses/laravel) (ES)
* [DevDojo](https://devdojo.com/search?value=laravel)
* [Amitav Roy](https://www.youtube.com/channel/UC4gijXR8cM4gmEt9Olse-TQ/videos)
* [Laracademy](https://laracademy.co/)
* [Dev Marketer](https://www.youtube.com/channel/UC6kwT7-jjZHHF1s7vCfg2CA/playlists)
* [Udemy](https://www.udemy.com/courses/search/?q=laravel)
* [Lynda](https://www.lynda.com/search?q=laravel)
* [Pluralsight](https://www.pluralsight.com/search?q=laravel&categories=course)
* [Bitfumes](https://www.youtube.com/bitfumes)
* [ConfidentLaravel](https://confidentlaravel.com/)

<a id="conferences"></a>
## カンファレンス

* [Laracon US](http://laracon.us/)
* [Laracon EU](http://laracon.eu/)
* [Laracon Online](https://laracon.net/)
* [Laraconf Brasil](http://laraconfbrasil.com.br/)
* [Laracon Australia](https://laracon.com.au/)
* [Laravel Live UK](https://laravellive.uk/)
* [Laravel Live India](https://laravellive.in/)
* [Laravel Nigeria](https://laravelnigeria.com)

<a id="videos-1"></a>
##### 動画

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

<a id="books"></a>
## 書籍

* [Laravel Starter](https://www.amazon.com/Laravel-Starter-Shawn-McCool-ebook/dp/B00ABFQ0AS) シャウン・マーカーの作成
* [Laravel: Code Happy](https://leanpub.com/codehappy) デイール・リースの作成
* [Laravel: Code Bright](https://leanpub.com/codebright) デイール・リースの作成
* [Laravel: Code Smart](https://leanpub.com/codesmart) デイール・リースの作成
* [Laravel: From Apprentice To Artisan](https://leanpub.com/laravel) タイラー・オールウェルの作成
* [Laravel 4 Cookbook](https://leanpub.com/laravel4cookbook) クリス・ピットとテイラー・オットウェルによる
* [Laravel Testing Decoded](https://leanpub.com/laravel-testing-decoded) ジェフリー・ウェイによる
* [Refactoring to Collections](https://adamwathan.me/refactoring-to-collections/) アダム・ワタンによる
* [Implementing Laravel](https://leanpub.com/implementinglaravel) クリス・フィダオによる
* [Getting Stuff Done with Laravel 4](https://leanpub.com/gettingstuffdonelaravel) チャック・ヒントゼルマンによる
* [Laravel Application Development Blueprints](https://www.packtpub.com/web-development/laravel-application-development-blueprints) アルダ・キリッダギとハリル・イブラヒム・ユイマズによる
* [Build APIs You Won't Hate](https://leanpub.com/build-apis-you-wont-hate) フィル・ストュアーグによる
* [Integrating Front end Components with Web Applications](https://leanpub.com/frontend) マクシム・サルグイによる
* [Laravel Design Patterns and Best Practices](https://www.packtpub.com/web-development/laravel-design-patterns-and-best-practices) アルダ・キリッダギとハリル・イブラヒム・ユイマズによる
* [Learning Laravel 4 Application Development](https://www.packtpub.com/web-development/learning-laravel-4-application-development) ハーディク・ダンガールによる
* [Getting Started with Laravel 4](https://www.packtpub.com/web-development/getting-started-laravel-4) ラファエル・サニエールによる
* [Laravel Application Development Cookbook](https://www.packtpub.com/web-development/laravel-application-development-cookbook) テリー・マトゥラによる
* [Building Web Applications Using Parse REST API](https://leanpub.com/building-web-applications-using-parse-rest-api) マハド・ザヘル・ガイブによって
* [Laravel - My First Framework](https://leanpub.com/laravel-first-framework) マクシム・サルグイによる
* [Easy Laravel 5](https://leanpub.com/easylaravel/) W.ジェイソン・ギルモアによる
* [Laravel 5 Essentials](https://www.packtpub.com/web-development/laravel-5-essentials) マーティン・ビーンによる
* [Easy E-Commerce Using Laravel and Stripe](https://leanpub.com/easyecommerce) W.ジェイソン・ギルモアとエリック・L・バーンズによる
* [Laravel 5.1 Beauty](https://leanpub.com/l5-beauty) チャック・ヒントゼルマンによる
* [Design Patterns with PHP and Laravel](https://leanpub.com/larasign) ケルト・ドックインスによる
* [Mastering Laravel](https://www.packtpub.com/web-development/mastering-laravel) クリスチャン・ジョン・ペコラロによる
* [How to Build Real-Time Laravel Apps with Pusher](http://pusher-community.github.io/real-time-laravel/) プッシャーによる
* [Learning Laravel's Eloquent](https://www.amazon.com/Learning-Laravels-Eloquent-Francesco-Malatesta-ebook/dp/B00YSILQ6C) フランチェスコ・マラテスタによる
* [Laravel 5 Learn Easy](https://leanpub.com/laravel5learneasy) サンジブ・シンハによる
* [Laravel and AngularJS](https://leanpub.com/laravel-and-angularjs) ダニエル・シュミッツおよびダニエル・ペドリナ・ゲオルギーによる
* [Laravel Collections Unraveled](https://leanpub.com/laravelcollectionsunraveled) ジェフ・マドセンによる
* [Writing APIs With Lumen](https://leanpub.com/lumen-apis) パウル・レドモンによる
* [The Laravel Survival Guide](https://leanpub.com/laravelsurvivalguide) トニー・リアによる
* [Laraboot: Laravel 5 For Beginners](https://leanpub.com/laravel-5-for-beginners-laraboot) ビル・ケックによる
* [Laravel 5.4 For Beginners](https://leanpub.com/laravel-5-4-for-beginners) ビル・ケックによる
* [Laravel Up & Running](https://www.amazon.com/gp/product/1491936088) マット・スターファーによる
* [Laravel Companion](https://leanpub.com/laravelcompanion-secondedition) ジョンナスン・コスターによる
* [Deploy Laravel on AWS with CloudFormation](https://leanpub.com/laravel-aws) リオネル・マーティンによる
* [React Native and Laravel for Future Mobile Development](https://leanpub.com/rn_laravel) エガ・ラディエグティアによる
* [Servers for Hackers](https://book.serversforhackers.com) クリス・フィダオによる
* [Full-Stack Vue.js 2 and Laravel 5](https://www.amazon.com/Full-Stack-Vue-js-Laravel-frontend-together/dp/1788299582) アンソニー・ゴアによる
* [Build an API with Laravel](https://buildanapi.com) ワッキー・スタジオによる

<a id="starter-projects"></a>
## スタータープロジェクト

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
* [Laravel Zero - Console application](https://github.com/laravel-zero/laravel-zero)
* [Apiato](https://github.com/apiato/apiato)
* [Laravel Adminpanel](https://github.com/viralsolani/laravel-adminpanel)
* [Laravel Vue Boilerplate](https://github.com/alefesouza/laravel-vue-boilerplate)
* [Laravel Enso](https://github.com/laravel-enso/enso)
* [Laravel Template with Vue](https://github.com/wmhello/laravel_template_with_vue)

<a id="codebases-for-reference"></a>
## 参考コードベース

* [Cachet](https://github.com/cachethq/Cachet) - ウェブサイトおよびAPI向けのステータスページシステム
* [Deployer](https://github.com/REBELinBLUE/deployer) - アプリケーションデプロイメントシステム
* [GitScrum](https://github.com/renatomarinho/laravel-gitscrum) - Gitおよびスクラムによるタスク管理システム
* [Invoice Ninja](https://github.com/invoiceninja/invoiceninja) - 請求書、経費および時間記録アプリケーション
* [Koel](https://github.com/phanan/koel) - 個人用の音楽ストリーミングサーバー
* [Laravel.io](https://github.com/laravelio/portal) - Laravel.io コミュニティポータルのソースコード
* [Attendize](https://github.com/Attendize/Attendize) - チケット販売およびイベント管理プラットフォーム
* [Antvel](https://github.com/ant-vel/App) - エコマースプラットフォーム
* [Jigsaw](https://github.com/tightenco/jigsaw) - 静的サイトジェネレーター
* [Canvas](https://github.com/cnvs/canvas) - Laravelを用いた出版プラットフォーム
* [Vuedo](https://github.com/Vuedo/vuedo) - VuedoはLaravelとVue.jsで構築されたブログプラットフォーム
* [Screeenly](https://github.com/stefanzweifel/screeenly) - APIを用いてウェブサイトのスクリーンショットを作成
* [Voten](https://github.com/voten-co/voten) - 21世紀のリアルタイムソーシャルブックマークサービス
* [Monica](https://github.com/monicahq/monica) - 個人用の人間関係管理システム
* [Snipe-IT](https://github.com/snipe/snipe-it) - IT資産／ライセンス管理システム
* [Akaunting](https://github.com/akaunting/akaunting) - 中小企業およびフリーランス向けの会計ソフトウェア
* [Torch](https://github.com/mattstauffer/Torch) - Illuminateコンポーネントを非Laravelアプリケーションで使用する例
* [Pixelfed](https://github.com/pixelfed/pixelfed) - ActivityPubフェデレーションによって運営される無料かつ倫理的な写真共有プラットフォーム


<a id="content-management-systems"></a>
## コンテンツ管理システム

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

<a id="podcasts"></a>
## ポッドキャスト

* [The Laravel Podcast](http://www.laravelpodcast.com/)
* [The Laravel News Podcast](https://laravel-news.com/podcast/ )
* [The Laracasts Snippet](https://laracasts.simplecast.fm/)
* [Hecho en Laravel (Spanish)](http://hechoenlaravel.com)

<a id="community"></a>
## コミュニティ

* [Laracasts Forum](https://laracasts.com/discuss)
* [Laravel.io Forum](http://laravel.io/forum)
* [Larachat Slack](https://larachat.slack.com/) ([Signup](https://larachat.co/register))
* [Gitter](https://gitter.im/laravel/laravel)
* [IRC Channel](http://laravel.io/chat)
* [StackOverflow](http://stackoverflow.com/questions/tagged/laravel)
* [Twitter](https://twitter.com/laravelphp)
* [Google+](https://plus.google.com/communities/106838454910116161868)
* [Reddit](https://www.reddit.com/r/laravel)
* [Quora](https://www.quora.com/topic/Laravel)
* [Facebook](https://www.facebook.com/LaravelCommunity)
* [LinkedIn](https://www.linkedin.com/groups/4419933/profile)

<a id="local-user-groups"></a>
##### ローカルユーザーグループ

* [Laravel Global Community](https://www.facebook.com/groups/group.laravel/)
* [LaravelES Slack](https://laraveles.slack.com) ([Signup](http://laraveles.com/blog/wp-login.php?action=slack-invitation))
* [Laravel India](https://laravellive.in/), [Slack Signup](https://laravelliveindia.slack.com/join/shared_invite/enQtNjQyMDE4NDA3MDQzLWMyZmIxNGZkNGVkNGFmMzE1MTgyOGNiZGY1ZmU1ZDQ3Mzk2ODBlZGJlODk3ZmI0OWNlZmI5MzQyZDJhYzg1NjE), [Twitter](https://twitter.com/LaravelLiveIN), [Facebook](https://www.facebook.com/laravellive/), [Youtube](https://www.youtube.com/channel/UC6TxYSHI7g9FMJ7VlHk72Yg)
* [Laravel UK](https://laravelphp.uk/), [Slack Signup](https://laravelphp.uk/login/slack)
* [Laravel Russia](https://laravel.ru/) ([VK group](http://m.vk.com/laravel_rus))
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

<a id="meetups"></a>
##### ミートアップ

* [All Meetups](http://www.meetup.com/topics/laravel/)
* [London Meetup](https://www.meetup.com/London-Laravel/)
* [Buenos Aires Meetup](https://www.meetup.com/Laravel-Buenos-Aires/)
* [Athens-Greece Meetup](https://www.meetup.com/athens-laravel-meetup/)
* [Copenhagen Meetup](https://www.meetup.com/Copenhagen-Laravel-Meetup/)
* [Detroit Meetup](https://www.meetup.com/Laravel-Detroit/)
* [Paris Meetup](https://www.meetup.com/fr-FR/Paris-Laravel-Meetup/)
* [Melbourne Meetup](https://www.meetup.com/Melbourne-laravel-Meetup/)
* [Budapest Meetup](https://www.meetup.com/Laravel-Hungary-Meetup/)

<a id="jobs"></a>
## 求人

* [LaraJobs](https://larajobs.com/)
* [Laravel Gurus](https://laravelgurus.com/)

<a id="hosted-development-tools"></a>
## ホステッド開発ツール

* [Laravel Shift](https://laravelshift.com/) - ラグランプロジェクト向け自動アップグレードツール
* [Laravel Schema Designer](http://laravelsd.com/) - データベーススキーマの作成・エクスポート・共有
* [StyleCI](https://styleci.io) - PHPコーディングスタイルサービス

<a id="miscellaneous"></a>
## その他

* [CodeCanyon](https://codecanyon.net/tags/laravel?term=laravel) - 有料スクリプトおよびプラグイン
* [Laravel Collections](https://laravelcollections.com) - すべてのラグラン開発者の行き先となるリソースサイト
* [LaravelLinks](https://telegram.me/laravellinks) - 優れたラグランリソースを共有するテレグラムチャンネル

<a id="contributing"></a>
## コントリビューション

素晴らしいパッケージ、ブログ、コース、または動画を見つけましたか？ プルリクエストを送ってください！

<a id="guidelines"></a>
#### ガイドライン

* Please make an individual pull request for each suggestion
* Make sure the Travis tests pass on your pull request
* Use the following format for links: \[Resource\]\(URL\)
* Want to suggest a package? Read the [Contribution Guide](https://github.com/chiraggude/awesome-laravel/blob/master/CONTRIBUTING.md)
* New categories or improvements to the existing categorization are welcome

<a id="license"></a>
## ライセンス

[![CC BY 4.0](https://licensebuttons.net/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)

素晴らしいLaravelは、 [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/) に基づいてライセンスされています。
