---
title: "Awesome Fiber"
description: "GoのウェブフレームワークFiber向けのミドルウェア、プロジェクトの雛形、実装例、ツール、学習資料を紹介します。"
licenseSource: "github-gofiber-awesome-fiber-readme-md"
---

# Awesome Fiber

[Fiber](https://gofiber.io)は、[Express](https://github.com/expressjs/express)を参考に設計された[Go](https://golang.org/doc/)のウェブフレームワークです。[Fasthttp](https://github.com/valyala/fasthttp)を基盤とし、開発の速さ、メモリ割り当てゼロ、性能を設計目標としています。このリストでは、Fiber向けのミドルウェア、プロジェクトの雛形、実装例、ツール、記事、動画、ベンチマークを紹介します。

## ミドルウェア<a id="️-middlewares"></a><a id="middleware"></a>

Fiber向けのミドルウェアを、保守元ごとに分類しています。

### コア<a id="-core"></a><a id="core"></a>

Fiberフレームワークに含まれるミドルウェアです。

- [Adaptor](https://github.com/gofiber/fiber/tree/main/middleware/adaptor) - net/httpのハンドラーとFiberのリクエストハンドラーを相互に変換
- [BasicAuth](https://github.com/gofiber/fiber/tree/main/middleware/basicauth) - HTTP Basic認証ミドルウェア。有効な認証情報なら次のハンドラーを呼び出し、認証情報がない場合や無効な場合は401 Unauthorizedを返す
- [Cache](https://github.com/gofiber/fiber/tree/main/middleware/cache) - レスポンスを捕捉してキャッシュ
- [Compress](https://github.com/gofiber/fiber/tree/main/middleware/compress) - Fiber向けの圧縮ミドルウェア。既定で`deflate`、`gzip`、`brotli`に対応
- [CORS](https://github.com/gofiber/fiber/tree/main/middleware/cors) - さまざまなオプションでオリジン間リソース共有（CORS）を有効化
- [CSRF](https://github.com/gofiber/fiber/tree/main/middleware/csrf) - CSRF攻撃から保護
- [Earlydata](https://github.com/gofiber/fiber/tree/main/middleware/earlydata) - FiberでEarly Dataに対応
- [Encrypt Cookie](https://github.com/gofiber/fiber/tree/main/middleware/encryptcookie) - Cookieの値を暗号化するミドルウェア
- [EnvVar](https://github.com/gofiber/fiber/tree/main/middleware/envvar) - 環境変数を公開。設定は任意
- [ETag](https://github.com/gofiber/fiber/tree/main/middleware/etag) - コンテンツが変わっていないときにウェブサーバーがレスポンス全体を再送する必要をなくし、キャッシュ効率を高めて帯域を節約
- [Expvar](https://github.com/gofiber/fiber/tree/main/middleware/expvar) - 実行時データをHTTPサーバー経由でJSON形式で提供
- [Favicon](https://github.com/gofiber/fiber/tree/main/middleware/favicon) - faviconへのリクエストをログから除外するか、ファイルパスが指定されていればfaviconをメモリから配信
- [Healthcheck](https://github.com/gofiber/fiber/tree/main/middleware/healthcheck) - readinessおよびlivenessプローブ向けのヘルスチェックエンドポイントを追加
- [Helmet](https://github.com/gofiber/fiber/tree/main/middleware/helmet) - さまざまなHTTPヘッダーを設定してアプリケーションのセキュリティを補助
- [Host Authorization](https://github.com/gofiber/fiber/tree/main/middleware/hostauthorization) - `Host`ヘッダーを許可リストと照合して検証し、DNSリバインディング攻撃から保護
- [Idempotency](https://github.com/gofiber/fiber/tree/main/middleware/idempotency) - 重複リクエストの発生時にも耐障害性を持つAPIを実現
- [Keyauth](https://github.com/gofiber/fiber/tree/main/middleware/keyauth) - キーによる認証を提供するミドルウェア
- [Limiter](https://github.com/gofiber/fiber/tree/main/middleware/limiter) - レート制限ミドルウェア。公開APIやパスワードリセットなどのエンドポイントへの繰り返しリクエストを制限
- [Logger](https://github.com/gofiber/fiber/tree/main/middleware/logger) - HTTPリクエストとレスポンスのロガー
- [Paginate](https://github.com/gofiber/fiber/tree/main/middleware/paginate) - クエリ文字列からページネーションのパラメーターを解析。ページ、オフセット、カーソルに基づく方式に対応
- [Pprof](https://github.com/gofiber/fiber/tree/main/middleware/pprof) - pprof可視化ツールが求める形式で実行時のプロファイリングデータを提供
- [Proxy](https://github.com/gofiber/fiber/tree/main/middleware/proxy) - リクエストを複数のサーバーへプロキシ経由で転送
- [Recover](https://github.com/gofiber/fiber/tree/main/middleware/recover) - スタックチェーン内で発生したpanicから復帰し、共通のErrorHandlerへ制御を渡す
- [Redirect](https://github.com/gofiber/fiber/tree/main/middleware/redirect) - FiberでHTTPリダイレクトを処理
- [RequestID](https://github.com/gofiber/fiber/tree/main/middleware/requestid) - 各リクエストにリクエストIDを追加
- [Responsetime](https://github.com/gofiber/fiber/tree/main/middleware/responsetime) - レスポンスに`X-Response-Time`ヘッダーを追加
- [Rewrite](https://github.com/gofiber/fiber/tree/main/middleware/rewrite) - 後方互換性や分かりやすいリンクのために、指定された規則でURLパスを書き換え
- [Session](https://github.com/gofiber/fiber/tree/main/middleware/session) - セッション管理を提供。FiberのStorageパッケージを使用
- [Skip](https://github.com/gofiber/fiber/tree/main/middleware/skip) - 述語が真の場合、ラップしたハンドラーをスキップ
- [SSE](https://github.com/gofiber/fiber/tree/main/middleware/sse) - ヘッダー、イベント整形、フラッシュ、ハートビート、切断検知を処理するServer-Sent Eventsのトランスポート
- [Static](https://github.com/gofiber/fiber/tree/main/middleware/static) - ローカルまたは独自のファイルシステムから静的ファイルを配信
- [Timeout](https://github.com/gofiber/fiber/tree/main/middleware/timeout) - リクエストの最大時間を設定し、超過した場合はErrorHandlerへ渡す

### 外部モジュール<a id="-external"></a><a id="external"></a>

フレームワークとは別のリポジトリで公開され、[Fiberチーム](https://github.com/orgs/gofiber/people)が保守するモジュールです。

- [storage](https://github.com/gofiber/storage) - Storageインターフェースを実装する既成のストレージドライバー。さまざまなFiberミドルウェアで使えるように設計
- [template](https://github.com/gofiber/template) - Fiber v1.10.xで使うための8種類のテンプレートエンジン。Go 1.13以上が必要

### Contrib<a id="-contrib"></a>

Fiberチームとコミュニティが保守するサードパーティのミドルウェアです。

- [casbin](https://github.com/gofiber/contrib/tree/main/v3/casbin) - CasbinによるFiber向けの認可ミドルウェア
- [circuitbreaker](https://github.com/gofiber/contrib/tree/main/v3/circuitbreaker) - Fiber向けのサーキットブレーカーミドルウェア
- [coraza](https://github.com/gofiber/contrib/tree/main/v3/coraza) - CorazaによるFiber向けのウェブアプリケーションファイアウォールミドルウェア
- [fgprof](https://github.com/gofiber/contrib/tree/main/v3/fgprof) - fgprofによるFiberのプロファイリングを支援
- [hcaptcha](https://github.com/gofiber/contrib/tree/main/v3/hcaptcha) - hCaptchaを使ったボット対策ミドルウェア
- [i18n](https://github.com/gofiber/contrib/tree/main/v3/i18n) - go-i18nを基盤とする国際化ミドルウェア
- [jwt](https://github.com/gofiber/contrib/tree/main/v3/jwt) - JSON Web Token（JWT）認証ミドルウェア
- [loadshed](https://github.com/gofiber/contrib/tree/main/v3/loadshed) - 負荷が高いときにFiberサービスを保護する負荷抑制ミドルウェア
- [monitor](https://github.com/gofiber/contrib/tree/main/v3/monitor) - Fiber向けのサーバーメトリクス監視ミドルウェア
- [newrelic](https://github.com/gofiber/contrib/tree/main/v3/newrelic) - FiberへのNew Relicの計測機能の組み込みを支援
- [opa](https://github.com/gofiber/contrib/tree/main/v3/opa) - Fiber向けのOpen Policy Agent（OPA）ミドルウェア対応
- [otel](https://github.com/gofiber/contrib/tree/main/v3/otel) - Fiber向けのOpenTelemetryミドルウェア対応
- [paseto](https://github.com/gofiber/contrib/tree/main/v3/paseto) - Platform-Agnostic Security Tokens（PASETO）認証ミドルウェア
- [prometheus](https://github.com/gofiber/contrib/tree/main/v3/prometheus) - 受信リクエストを計測し、Prometheus向けのメトリクスエンドポイントを提供するミドルウェア
- [sentry](https://github.com/gofiber/contrib/tree/main/v3/sentry) - FiberにSentryのエラー監視・報告機能を統合
- [socketio](https://github.com/gofiber/contrib/tree/main/v3/socketio) - Socket.IOを参考にしたFiber向けのWebSocketラッパーミドルウェア
- [spnego](https://github.com/gofiber/contrib/tree/main/v3/spnego) - SPNEGO方式を使ったFiber向けのKerberos認証ミドルウェア
- [swaggo](https://github.com/gofiber/contrib/tree/main/v3/swaggo) - Swagが生成したAPIドキュメントをFiberで配信するミドルウェア
- [swaggerui](https://github.com/gofiber/contrib/tree/main/v3/swaggerui) - FiberでOpenAPI仕様を配信するSwagger UIミドルウェア
- [testcontainers](https://github.com/gofiber/contrib/tree/main/v3/testcontainers) - TestcontainersとFiberを統合するためのサービス実装
- [uptime](https://github.com/gofiber/contrib/tree/main/v3/uptime) - ハートビート履歴を記録し、稼働時間を監視するJSON API付きの状態ダッシュボードを提供
- [WebSocket](https://github.com/gofiber/contrib/tree/main/v3/websocket) - `fiber.Ctx`に対応する、Fasthttpを基盤としたFiber向けのWebSocket統合
- [zap](https://github.com/gofiber/contrib/tree/main/v3/zap) - Zapを使ったFiberのログ出力ミドルウェア対応
- [zerolog](https://github.com/gofiber/contrib/tree/main/v3/zerolog) - Zerologを使ったFiberのログ出力ミドルウェア対応

### サードパーティ<a id="-third-party"></a><a id="third-party"></a>

Fiberコミュニティが作成したミドルウェアです。

- [shareed2k/fiber_tracing](https://github.com/shareed2k/fiber_tracing) - OpenTracing APIを使ってFiberのリクエストをトレース
- [shareed2k/fiber_limiter](https://github.com/shareed2k/fiber_limiter) - Redisをストレージに使うレート制限。sliding windowとGCRA leaky bucketの2種類のアルゴリズムから選択
- [ansrivas/fiberprometheus](https://github.com/ansrivas/fiberprometheus) - gofiber向けのPrometheusミドルウェア
- [sacsand/gofiber-firebaseauth](https://github.com/sacsand/gofiber-firebaseauth) - Fiber向けのFirebase Authミドルウェア
- [aschenmaker/fiber-health-check](https://github.com/aschenmaker/fiber-health-check) - Fiber向けのヘルスチェックミドルウェア
- [elastic/apmfiber](https://github.com/elastic/apm-agent-go/tree/master/module/apmfiber) - Go Fiber向けのAPMエージェント
- [eozer/fiber_ldapauth](https://github.com/eozer/fiber_ldapauth) - Fiber向けのLDAP認証ミドルウェア
- [fugue-labs/gollem](https://github.com/fugue-labs/gollem/tree/main/contrib/fiberhandler) - gollemのAIエージェントをFiberハンドラーとしてラップするアダプター。SSEによるストリーミングに対応
- [DavidHoenisch/fiber-coraza](https://github.com/DavidHoenisch/fiber-coraza) - Fiber向けのCoraza WAFミドルウェア。ModSecurity互換の規則を使ったウェブアプリケーションファイアウォール保護を提供
- [darkweak/souin](https://github.com/darkweak/souin) - ミドルウェアとして利用できるRFC準拠のHTTPキャッシュ。Varnishの代替
- [witer33/fiberpow](https://github.com/witer33/fiberpow) - カスタマイズ可能なproof-of-workチャレンジを備えたDDoS・ボット対策ミドルウェア
- [beyer-stefan/gofiber-minifier](https://github.com/beyer-stefan/gofiber-minifier) - HTML5、CSS3、JavaScript向けの縮小化ミドルウェア
- [joffref/opa-middleware](https://github.com/Joffref/opa-middleware) - FiberにOPAミドルウェアを統合
- [vladfr/fiber-servertiming](https://github.com/vladfr/fiber-servertiming) - W3C Server-Timing仕様に基づきServer-Timingヘッダーを追加するミドルウェア
- [airbrake/gobrake](https://github.com/airbrake/gobrake/tree/master/examples/fiber) - パフォーマンスデータ（ルート統計）を報告するAirbrakeミドルウェア
- [samber/slog-fiber](https://github.com/samber/slog-fiber) - Goのslogライブラリを使ったログ出力ミドルウェア
- [mikhail-bigun/fiberlogrus](https://github.com/mikhail-bigun/fiberlogrus) - logrusとその構造化ログ機能を使ったログ出力ミドルウェア
- [Idan-Fishman/fiber-bind](https://github.com/Idan-Fishman/fiber-bind) - リクエストスキーマを検証するミドルウェア。リクエストボディ、クエリ文字列のパラメーター、ルートパラメーター、フォームファイルなどの入力元を検証
- [rodrigoodhin/fiper](https://gitlab.com/rodrigoodhin/fiper) - JWTを使ったFiber向けのロールベースアクセス制御（RBAC）を提供。データベースへの永続化には、対応する2種類のORMライブラリGormとBunを使用
- [zeiss/fiber-goth](https://github.com/ZEISS/fiber-goth) - Fiberアプリケーションに認証を統合するミドルウェア
- [zeiss/fiber-authz](https://github.com/ZEISS/fiber-authz) - 定義されたRBACモデルでFiberのルートを保護するミドルウェア
- [zeiss/fiber-htmx](https://github.com/ZEISS/fiber-htmx) - FiberでHTMXを使うためのミドルウェア
- [jsorb84/ssefiber](https://github.com/jsorb84/ssefiber) - Fiber向けの基本的なSSE実装
- [streamerd/fibergun](https://github.com/streamerd/fibergun) - Fiber向けのGunDBミドルウェア。分散データベースGunDBの統合を容易にする
- [apitally/apitally-go](https://github.com/apitally/apitally-go) - Fiber向けのシンプルなAPI監視ツール。APIの利用状況、エラー、性能を追跡し、リクエストログとアラート機能も提供
- [newrelic/go-agent](https://github.com/newrelic/go-agent/tree/master/v3/integrations/nrfiber) - Fiber向けの公式New Relicミドルウェア。New Relic監視のための計測機能を管理
- [narmadaweb/limiter](https://github.com/narmadaweb/limiter) - Redisを基盤とするFiber向けの高性能なレート制限ミドルウェア。fixed window、sliding window、token bucketのアルゴリズムに対応
- [narmadaweb/gonify](https://github.com/narmadaweb/gonify) - HTML5、CSS3、JavaScript、JSON、XML、SVGに対応するFiber向けの縮小化ミドルウェア
- [oaswrap/fiberopenapi](https://github.com/oaswrap/spec/tree/main/adapter/fiberopenapi) - OpenAPI 3.x仕様生成向けのFiberアダプター。ルートのドキュメントを自動生成

## 雛形<a id="-boilerplates"></a><a id="boilerplates"></a>

Fiber向けに用意されたプロジェクトの雛形です。

- [gofiber/boilerplate](https://github.com/gofiber/boilerplate) - 公式のFiber雛形
- [fiber-boilerplate](https://github.com/thomasvvugt/fiber-boilerplate) - Fiberウェブフレームワーク向けの雛形
- [sujit-baniya/fiber-boilerplate](https://github.com/sujit-baniya/fiber-boilerplate) - 複数のミドルウェアモジュールと機能を備えた、Fiberを基盤とする雛形
- [goravel/fiber](https://github.com/goravel/fiber) - Fiberに対応するLaravelに似た雛形
- [create-go-app/fiber-go-template](https://github.com/create-go-app/fiber-go-template) - Create Go App CLI向けのFiberバックエンドテンプレート
- [efectn/fiber-boilerplate](https://github.com/efectn/fiber-boilerplate) - Fiberで高機能かつ整理されたRESTプロジェクトを構築するための、シンプルで拡張性のある雛形
- [embedmode/fiberseed](https://github.com/embedmode/fiberseed) - 複数のミドルウェアモジュールを備えたFiber APIの雛形
- [GalvinGao/gofiber-template](https://github.com/GalvinGao/gofiber-template) - 本番利用を想定した、コンテナを中心とする設計方針のgofiberプロジェクトテンプレート。環境変数で設定し、go.uber.org/fxで依存性を注入、uptrace/bunでデータベースを扱う。MVCのフォルダー構造とCI/CD対応を標準で提供
- [mikhail-bigun/go-app-template](https://github.com/mikhail-bigun/go-app-template) - クリーンアーキテクチャによるGoアプリケーションの雛形。機能を充実させたFiber実装を含む
- [felipeafonso/go-htmx-starter](https://github.com/FelipeAfonso/go-htmx-starter) - Go + HTMX開発向けの、フロントエンドの設計方針を定めた雛形。TailwindとViteを使ってバンドルとホットリロードを実行
- [amrebada/go-modules](https://github.com/amrebada/go-modules) - Go Fiber向けのNestJSに似たプロジェクト構造
- [ingeniousambivert/fiber-bootstrapped](https://github.com/ingeniousambivert/fiber-bootstrapped) - FeathersJSの原則を参考にした、サービス中心のアーキテクチャを採用するGoプロジェクト向けのツールキット
- [sebajax/go-vertical-slice-architecture](https://github.com/sebajax/go-vertical-slice-architecture) - FiberとUber digを使ったVertical Slice Architectureのコード雛形。保守しやすく拡張性のあるコード構成
- [go-rat/fiber-skeleton](https://github.com/go-rat/fiber-skeleton) - ウェブプロジェクト向けのFiberスケルトン。wireによる依存性の注入に対応
- [rachmanzz/fiber-starter](https://github.com/rachmanzz/fiber-starter) - Fiber v3、PostgreSQL（pgx v5）、SQLCを使ったGoバックエンドの雛形

## 実装例<a id="-recipes"></a><a id="recipes"></a>

Fiberを使った実装例です。

- [gofiber/recipes](https://github.com/gofiber/recipes) - 公式のFiber実装例集
- [kiyonlin/fiblar-demo](https://github.com/kiyonlin/fiblar-demo) - Fiber v1 + Angularのデモ
- [koddr/tutorial-go-fiber-rest-api](https://github.com/koddr/tutorial-go-fiber-rest-api) - FiberでRESTful APIを構築するチュートリアル
- [firebase007/go-rest-api-with-fiber](https://github.com/firebase007/go-rest-api-with-fiber) - Fiber、ログ出力、BasicAuth、PostgreSQLを使ったデモプロジェクト
- [chawk/go_fiber_quickstart](https://github.com/chawk/go_fiber_quickstart) - Fiberのクイックスタート用サンプルプロジェクト
- [EricLau1/go-fiber-auth-api](https://github.com/EricLau1/go-fiber-auth-api) - Fiber、MongoDB、JWTを使ったGoの認証API
- [alpody/golang-fiber-realworld-example-app](https://github.com/alpody/golang-fiber-realworld-example-app) - Fiber、Gorm、Swaggerを使った実用的なバックエンドAPIのサンプル
- [kubestellar/console](https://github.com/kubestellar/console) - Fiberを基盤とする、AIを活用した複数クラスター対応のKubernetesダッシュボード。リアルタイムの可観測性とCNCFとの統合機能を提供
- [paundraP/golang-starter-template](https://github.com/paundraP/Go-Starter-Template) - 認証、認可、決済ゲートウェイの統合に対応するGoのREST API

## ツール<a id="️-tools"></a><a id="tools"></a>

Fiberでの開発を支援するツールです。

- [Alibaba/opentelemetry-go-auto-instrumentation](https://github.com/alibaba/opentelemetry-go-auto-instrumentation) - コードを変更せずにOpenTelemetry APIを通じてFiberアプリケーションを監視
- [deepmap/oapi-codegen](https://github.com/deepmap/oapi-codegen) - OpenAPI 3仕様からGoのクライアントとサーバーの雛形を生成
- [go-dawn/dawn](https://github.com/go-dawn/dawn) - Fiberを基盤とし、開発を迅速に進めるための設計方針を備えたウェブフレームワーク
- [gofiber/cli](https://github.com/gofiber/cli) - プロジェクト生成、ライブリロード、バージョン移行のための公式Fiberコマンドラインインターフェース
- [MUlt1mate/protoc-gen-httpgo](https://github.com/MUlt1mate/protoc-gen-httpgo) - protoファイルからFiberのHTTPサーバーとクライアントのコードを生成するprotocプラグイン
- [ryanbekhen/feserve](https://github.com/ryanbekhen/feserve) - フロントエンドとロードバランサーのアプリケーションを配信する軽量なアプリケーションまたはDockerイメージ
- [tompston/gomakeme](https://github.com/tompston/gomakeme) - FiberまたはGinのREST API用の雛形とエンドポイントを生成

## 記事<a id="-articles"></a><a id="articles"></a>

コミュニティによるFiberの記事です。

- [Working with middlewares and boilerplates](https://dev.to/koddr/go-fiber-by-examples-working-with-middlewares-and-boilerplates-3p0m)
- [Testing the application](https://dev.to/koddr/go-fiber-by-examples-testing-the-application-1ldf)
- [Delving into built-in functions](https://dev.to/koddr/go-fiber-by-examples-delving-into-built-in-functions-1p3k)
- [Go Fiber by Examples: How can the Fiber Web Framework be useful?](https://dev.to/koddr/go-fiber-by-examples-how-can-the-fiber-web-framework-be-useful-487a)
- [Build a RESTful API on Go: Fiber, PostgreSQL, JWT and Swagger docs in isolated Docker containers](https://dev.to/koddr/build-a-restful-api-on-go-fiber-postgresql-jwt-and-swagger-docs-in-isolated-docker-containers-475j)
- [Getting started with Fiber](https://dev.to/fenny/getting-started-with-fiber-36b6)
- [Building an Express-style API in Go with Fiber](https://blog.logrocket.com/express-style-api-go-fiber/)
- [Fiber v1.9.6 How to improve performance by 817% and stay fast, flexible and friendly?](https://dev.to/koddr/fiber-v1-9-5-how-to-improve-performance-by-817-and-stay-fast-flexible-and-friendly-2dp6)
- [Create a travel list app with Go, Fiber, Angular, MongoDB and Google Cloud Secret Manager](https://blog.yongweilun.me/create-a-travel-list-app-with-go-fiber-angular-mongodb-and-google-cloud-secret-manager-ck9fgxy0p061pcss1xt1ubu8t)
- [Building a Basic REST API in Go using Fiber](https://tutorialedge.net/golang/basic-rest-api-go-fiber/)
- [Creating Fast APIs In Go Using Fiber](https://dev.to/jozsefsallai/creating-fast-apis-in-go-using-fiber-59m9)
- [Is switching from Express to Fiber worth it?](https://dev.to/koddr/are-sure-what-your-lovely-web-framework-running-so-fast-2jl1)
- [Fiber v1.8. What's new, updated and re-thinked?](https://dev.to/koddr/fiber-v1-8-what-s-new-updated-and-re-thinked-339h)
- [Fiber released v1.7! What's new and is it still fast, flexible and friendly?](https://dev.to/koddr/fiber-v2-is-out-now-what-s-new-and-is-he-still-fast-flexible-and-friendly-3ipf)
- [Welcome to Fiber — an Express.js styled web framework written in Go](https://dev.to/koddr/welcome-to-fiber-an-express-js-styled-fastest-web-framework-written-with-on-golang-497)
- [Blazing Fast Unit Tests - Fiber/fasthttp/http Internals](https://medium.com/trendyol-tech/golang-blazing-fast-unit-tests-fiber-fasthttp-http-internals-and-optimizing-http-server-tests-bbd1fe7b944b)
- [Building Microservices in Go : Part 1 - Project Setup, Dockerization](https://saadfarhan124.medium.com/building-microservices-in-go-part-1-e7e58893bc5e)
- [Building Microservices in Go : Part 2 - Live Reload](https://saadfarhan124.medium.com/building-microservices-in-go-part-2-f9c6c535805c)
- [Building Microservices in Go : Part 3 - Database, Models, Migrations](https://saadfarhan124.medium.com/building-microservices-in-go-part-3-database-models-migrations-a4455121bb11)
- [Build a REST API from scratch with Go, Docker & PostgreSQL](https://dev.to/divrhino/build-a-rest-api-from-scratch-with-go-and-docker-3o54)
- [Build a fullstack app with Go Fiber, Docker, and PostgreSQL](https://dev.to/divrhino/build-a-fullstack-app-with-go-fiber-docker-and-postgres-1jg6)
- [Create a CRUD app with Go Fiber, Docker, and PostgreSQL](https://dev.to/divrhino/create-a-crud-app-with-go-fiber-docker-and-postgres-47e3)

## 動画<a id="-videos"></a><a id="videos"></a>

コミュニティが制作したFiberの動画チュートリアルです。

- [Is Fiber the best Go web framework? Better than Gin?](https://youtu.be/10miByMOGfY)

## ベンチマーク<a id="-benchmarks"></a><a id="benchmarks"></a>

Fiberとほかのフレームワークを比較するためのベンチマークです。

- [TechEmpower](https://www.techempower.com/benchmarks/#section=data-r20&hw=ph&test=json) - さまざまなウェブアプリケーションフレームワークの性能を測定
- [web-frameworks-benchmark](https://web-frameworks-benchmark.netlify.app/result) - さまざまなプログラミング言語のフレームワークの違いを測定
- [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) - Goのウェブフレームワークの性能を比較するベンチマークスイート
