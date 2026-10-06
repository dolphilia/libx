---
title: "Awesome Vapor"
description: "固定原文の版表示を保持した、Vaporのライブラリ、開発ツール、サービス、学習資料、実装例。"
licenseSource: "github-vapor-community-awesome-vapor-readme-md"
---

# Awesome Vapor

[Vapor](https://vapor.codes)は、バックエンドアプリケーションを構築するためのサーバーサイドSwiftフレームワークです。認証、データベース、ストレージ、メールなどの連携機能を提供するライブラリに加え、開発ツール、サービス、学習資料、実装例をまとめています。

Vapor 3・Vapor 4の表示は、固定原文で各資料に付けられた版の分類を保持したものです。現在の互換性を保証するものではありません。

## <a id="how-to-use"></a>使い方

固定原文では、`filtered`ブランチにある[Vapor 3](https://github.com/Cellane/awesome-vapor/blob/filtered/vapor-3.md)と[Vapor 4](https://github.com/Cellane/awesome-vapor/blob/filtered/vapor-4.md)の版別リストを案内しています。アーカイブ済みの内容は`legacy`フォルダーにもあると記されています。

## <a id="libraries"></a>ライブラリ

- [API Error Middleware](https://github.com/skelpo/APIErrorMiddleware) (Vapor 3) – スローされたエラーをJSON応答へ変換するVaporミドルウェア。
- [APNS](https://github.com/vapor-community/apns) (Vapor 3) – iOS向けのVapor APNS。
- [Bugsnag](https://github.com/nodes-vapor/bugsnag) (Vapor 3) – Bugsnagでエラーを報告。
- [CouchDB Client](https://github.com/makoni/couchdb-vapor) (Vapor 3) – Vapor向けのシンプルなCouchDBクライアント。
- [CrudRouter](https://github.com/twof/VaporCRUDRouter) (Vapor 3) – 任意のFluentモデル向けにRESTful CRUDルーターを自動生成。
- [CSRF](https://github.com/vapor-community/CSRF) (Vapor 3) – VaporにCSRF攻撃への保護を追加するパッケージ。
- [CSV Framework](https://github.com/skelpo/CSV) (Vapor 3) – CSVファイルを読み書きするシンプルなフレームワーク。
- [Ferno](https://github.com/vapor-community/ferno) (Vapor 3) – Vapor向けのFirebase Realtime Databaseプロバイダー。
- [Flash](https://github.com/nodes-vapor/flash) (Vapor 3) – ビュー間でフラッシュメッセージを扱う。
- [FluentQuery](https://github.com/MihaelIsaev/FluentQuery) (Vapor 3) – Swiftのキーパスを使いながら、複雑な生SQLクエリを構築。
- [Gatekeeper](https://github.com/nodes-vapor/gatekeeper) (Vapor 3) – Vapor向けのレート制限ミドルウェア。
- [Google Cloud Provider](https://github.com/vapor-community/google-cloud-provider) (Vapor 3) – VaporプロジェクトからGoogle Cloud PlatformのAPIを利用。
- [Guardian](https://github.com/Jinxiansen/Guardian) (Vapor 3) – レート制限ミドルウェア。
- [Imperial](https://github.com/vapor-community/Imperial) (Vapor 3) – OAuthプロバイダーを使う連合認証。
- [JWT Keychain](https://github.com/nodes-vapor/jwt-keychain) (Vapor 3) – Vapor向けに、JWTを使うキーチェーンの雛形を容易に作成。
- [JWT Middleware](https://github.com/skelpo/JWTMiddleware) (Vapor 3) – Vaporでリクエストを認証・認可するミドルウェア。
- [Leaf Error Middleware](https://github.com/brokenhandsio/leaf-error-middleware) (Vapor 3) – Vaporアプリ向けに、独自の404ページとサーバーエラーページを提供。
- [Leaf Markdown](https://github.com/vapor-community/leaf-markdown) (Vapor 3) – Vapor向けのMarkdownレンダラー。
- [Lingo Vapor](https://github.com/vapor-community/Lingo-Vapor) (Vapor 3) – SwiftのローカライズライブラリLingoを使うためのVaporプロバイダー。
- [Local Storage](https://github.com/gperdomor/local-storage) (Vapor 3) – ローカルファイルシステムを使うストレージドライバー。
- [MailCore](https://github.com/LiveUI/MailCore) (Vapor 3) – SMTP、MailGun、SendGrid経由でメールを送信。
- [Meow](https://github.com/OpenKitten/Meow) (Vapor 3) – Codableに対応したMongoDB向けの代替ORM。
- [MongoKitten](https://github.com/OpenKitten/MongoKitten) (Vapor 3) – Swiftで実装されたMongoDBドライバー。
- [Pagination](https://github.com/vapor-community/pagination) (Vapor 3) – Vapor 3向けのシンプルなページネーション。
- [Paginator](https://github.com/nodes-vapor/paginator) (Vapor 3) – VaporとFluent向けのクエリのページネーション。
- [S3](https://github.com/LiveUI/S3) (Vapor 3) – Amazon S3と互換サービスへアクセスするライブラリ。よく使われる操作の大半に対応。
- [S3 Storage](https://github.com/anthonycastelli/s3-storage) (Vapor 3) – Amazon S3へ簡単にアクセスするライブラリ。
- [Sanitize](https://github.com/gperdomor/sanitize) (Vapor 3) – VaporのJSONリクエストからモデルを抽出。
- [SendGrid Provider](https://github.com/vapor-community/sendgrid-provider) (Vapor 3) – SendGridを利用するVapor向けメールバックエンド。
- [SimpleFileLogger](https://github.com/hallee/vapor-simple-file-logger) (Vapor 3) – Vapor向けのシンプルなファイルログプロバイダー。
- [Slugify](https://github.com/nodes-vapor/slugify) (Vapor 3) – 文字列のスラッグ化を支援。
- [Storage](https://github.com/nodes-vapor/storage) (Vapor 3) – 複数のストレージ・CDNサービスの利用を支援。
- [Stripe Provider](https://github.com/vapor-community/stripe-provider) (Vapor 3) – Vapor向けのStripeプロバイダー。
- [Submissions](https://github.com/nodes-vapor/submissions) (Vapor 3) – フォームの作成とフォーム送信内容の検証を支援。
- [Sugar](https://github.com/nodes-vapor/sugar) (Vapor 3) – Vapor向けの糖衣構文パッケージ。
- [SwifQL](https://github.com/MihaelIsaev/SwifQL) (Vapor 3) – 純粋なSwiftで、柔軟で型安全なSQLを容易に構築。
- [SwiftyBeaver Provider](https://github.com/vapor-community/swiftybeaver-provider) (Vapor 3) – サーバーサイドSwiftのウェブフレームワークVapor向けのSwiftyBeaverログプロバイダー。
- [Telesign Provider](https://github.com/vapor-community/telesign-provider) (Vapor 3) – Vapor向けのTelesignプロバイダー。
- [Vapor Mailgun Service](https://github.com/vapor-community/VaporMailgunService) (Vapor 3) – Vaporでメールを送信するためのサービス。
- [Vapor reCAPTCHA](https://github.com/gotranseo/vapor-recaptcha) (Vapor 3) – VaporでGoogle reCAPTCHAを検証。
- [Vapor Request Storage](https://github.com/skelpo/vapor-request-storage) (Vapor 3) – Vapor 1・2で利用できた`request.storage`の置換実装。
- [Vapor Security Headers](https://github.com/brokenhandsio/VaporSecurityHeaders) (Vapor 3) – Vapor向けのセキュリティヘッダーを強化。
- [Vapor Test Tools](https://github.com/LiveUI/VaporTestTools) (Vapor 3) – Vapor 3のエンドポイントをテストするヘルパー。
- [VaporExt](https://github.com/vapor-community/vapor-ext) (Vapor 3) – 幅広いVaporのデータ型・クラスに対応するSwift拡張のコレクション。
- [WKHTMLTOPDF](https://github.com/MihaelIsaev/wkhtmltopdf) (Vapor 3) – `wkhtmltopdf` CLIツールで、LeafテンプレートやウェブページからPDFファイルを生成。
- [XMLCoding](https://github.com/LiveUI/XMLCoding) (Vapor 3) – XMLエンコーダー・デコーダー。

## <a id="tools"></a>ツール

- [Ether](https://github.com/Ether-CLI/Ether) – Swift Package Managerのコマンドラインインターフェース。
- [Heroku用buildpack：HTTP/2対応curl](https://github.com/vzsg/heroku-buildpack-curl-http2)
- [Ice](https://github.com/jakeheis/Ice) – Swift向けのパッケージマネージャー。固定原文ではSwift Package Managerと100%互換と記述。
- [Sourcery](https://github.com/krzysztofzablocki/Sourcery) – Swiftのメタプログラミングで、定型コードの記述を減らす。
- [Sublimate](https://github.com/gabrielepalma/sublimate) (Vapor 3) – Sourceryを基にした同期・認証による高速プロトタイピング。
- [Swifter](https://github.com/LiveUI/Swifter) – Xcodeプロジェクトの管理を支援し、DerivedDataフォルダーのクリーンアップ・管理機能へすぐにアクセスできるmacOSツール。

## <a id="services"></a>サービス

- [Vapor Cloud](https://vapor.cloud)
- [Vapor Red](https://vapor.red)

## <a id="education"></a>学習資料

### <a id="articles"></a>記事

- [Deep Dive into Setup and Deployment for Heroku and Ubuntu](https://learningswift.brightdigit.com/vapor-heroku-ubuntu-setup-deploy/) (Vapor 3)
- [How to test controllers by mocking dependencies in Vapor 3 and Swift](https://mikemikina.com/blog/how-to-test-controllers-by-mocking-dependencies-in-vapor-3-and-swift/) (Vapor 3)
- [Vapor 3 Tutorials](https://mihaelamj.github.io/Vapor%20%203%20Tutorial/) (Vapor 3) – 短いチュートリアルを多数収録。
- [Transforming from Vapor 2 to Vapor 3](https://www.skelpo.com/blog/vapor2-to-vapor3/) (Vapor 3) – 実際のプロジェクトでVapor 2からVapor 3へ移行する。
- [初級者から上級者向けのチュートリアル](https://medium.com/@martinlasek) (Vapor 3) – 初級者から上級者向けの文章によるチュートリアル。
- [Using the dependency injection framework for testing in Vapor 3 and Swift](https://mikemikina.com/blog/using-the-dependency-injection-framework-for-testing-in-vapor-3-and-swift/) (Vapor 3) – 依存関係を管理し、テスト内でモック化するための依存性注入フレームワークの使い方。
- [Watermarking photos with ImageMagick, Vapor 3 and Swift on macOS and Linux](https://mikemikina.com/blog/watermarking-photos-with-imagemagick-vapor-3-and-swift-on-macos-and-linux/) (Vapor 3) – SwiftでImageMagickライブラリを使う方法のチュートリアル。
- [What’s new in Vapor 4?](https://theswiftdev.com/2019/08/26/whats-new-in-vapor-4/) (Vapor 4)

### <a id="books"></a>書籍

- [Server Side Swift with Vapor](https://store.raywenderlich.com/products/server-side-swift-with-vapor) (Vapor 3)
- [Server-Side Swift (Vapor Edition)](https://www.hackingwithswift.com/store/server-side-swift) (Vapor 3)

### <a id="newsletters"></a>ニュースレター

- [VaporNation](http://vapornation.news) – Vaporに関する幅広い話題を扱う週刊ニュースレター。

### <a id="videos"></a>動画

- [Server Side Swift with Vapor](https://www.raywenderlich.com/4493-server-side-swift-with-vapor/lessons/1) (Vapor 3)
- [Vapor - Beginner to Advanced](https://www.youtube.com/channel/UCoLEXFUHIKXunm9QJjsAftw/videos) (Vapor 3)

## <a id="open-source-projects"></a>オープンソースプロジェクト

- [SteamPress](https://github.com/brokenhandsio/SteamPress) (Vapor 3) – Vaporで使うためにSwiftで実装されたブログエンジン・プラットフォーム。
- [User Manager Service](https://github.com/skelpo/UserManager) (Vapor 3) – 本番アプリケーションの構成向けに作られた、小さく実用的なユーザーマネージャー。
