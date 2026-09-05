---
title: "Awesome Perl"
description: "Perlを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-hachiojipm-awesome-perl-readme-md"
---

# Awesome Perl

Perlを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

### 目次 <a id="contents"></a>

- [Awesome Perl](#awesome-perl)
    - [引数](#args)
    - [音声](#audio)
        - [デジタル信号処理](#DSP)
    - [ベンチマーク](#benchmarks)
    - [キャッシュ](#caches)
    - [クラスビルダー](#class-builder)
    - [CLI](#cli)
    - [クラウド](#cloud)
    - [暗号](#cryptography)
    - [商用Webサービス](#commercial-webservices)
    - [コンテナー](#container)
    - [データ形式](#data-format)
    - [データベース](#database)
    - [データベースドライバー](#database-drivers)
        - [リレーショナルデータベース](#relational-databases)
        - [NoSQLデータベース](#nosql-databases)
    - [日付と時刻](#date--time)
    - [デバイス](#devices)
    - [DevOps](#devops-tools)
    - [メール](#email)
    - [イベントループ](#event-loops)
    - [例外処理](#exception-handling)
    - [DOM操作](#dom-manipulation)
    - [ファイル操作](#file-manipulation)
    - [フォームフレームワーク](#form-frameworks)
    - [画像](#images)
    - [リスト操作](#list-manipulation)
    - [ログ](#logging)
    - [モジュール開発](#module-development)
    - [ネットワーク](#network)
    - [ORM](#orm)
    - [パッケージ管理](#package-management)
    - [プロセスとスレッド](#processes-and-threads)
    - [プロファイリング](#profiling)
    - [プロトコル](#protocol)
    - [キュー](#queueing)
    - [RESTフレームワーク](#rest-frameworks)
    - [科学技術計算](#sciencenumerics)
    - [ストリーム操作](#stream-manipulation)
    - [テンプレートエンジン](#template-engines)
    - [テスト](#testing)
        - [テストフレームワーク](#testing-frameworks)
        - [テストダブル](#test-double)
        - [カバレッジ](#coverage)
    - [ツール](#tools)
    - [型検査](#type-checking)
    - [動画](#video)
    - [Webフレームワーク](#web-frameworks)
        - [ミドルウェア](#middlewares)
    - [Webフレームワーク類似](#web-frameworks-like)
    - [Webスクレイピング](#web-scraping)
    - [ネットワークセキュリティ](#Network-Security)
    - [デジタルフォレンジック](#Metadata-Forensics)
    - [リバースエンジニアリング](#Reverse-Engineering)

## 引数 <a id="args"></a>

*引数に関するPerlモジュールの用途と対象範囲です。*

* [Data::Validator](https://metacpan.org/pod/Data::Validator) - 型制約システムに基づくルールベースのバリデーション
* [Params::Util](https://metacpan.org/pod/Params::Util) - シンプルでコンパクトかつ正確なパラメータチェック関数
* [Params::ValidationCompiler](https://metacpan.org/pod/Params::ValidationCompiler) - メソッド／関数のパラメータをバリデーション
* [Smart::Args](https://metacpan.org/pod/Smart::Args)

## 音声 <a id="audio"></a>

* [Audio::CD](https://metacpan.org/pod/Audio::CD) - libcdaudio（CD＋CDBDB）とのインターフェース
* [Audio::Wav](https://metacpan.org/pod/Audio::Wav) - Microsoft WAVファイルの読み書き用モジュール
* [Audio::SndFile](https://metacpan.org/pod/Audio::SndFile) - 音声ファイルの読み書き用Perlライブラリ
* [Audio::Ao](https://metacpan.org/pod/Audio::Ao) - Ao音声ライブラリ向けPerlのラッパー
* [MIDI::ALSA](https://metacpan.org/pod/MIDI::ALSA) - perl ALSAライブラリおよびいくつかのインターフェース関数

### デジタル信号処理 <a id="DSP"></a>
* [Audio::Analyzer](https://metacpan.org/pod/Audio::Analyzer) - FFTとperlを用いた音声の解調
* [Audio::Analyzer::ToneDetect](https://metacpan.org/pod/Audio::Analyzer::ToneDetect) - 音声ファイルまたはストリーム内のトーンの周波数を検出

## ベンチマーク <a id="benchmarks"></a>

*ベンチマークに関するPerlモジュールの用途と対象範囲です。*

* [Benchmark](https://metacpan.org/pod/Benchmark)
* [Dumbbench](https://metacpan.org/pod/Dumbbench)
* [Parallel::Benchmark](https://metacpan.org/pod/Parallel::Benchmark) - マルチプロセスにおけるベンチマーク

## キャッシュ <a id="caches"></a>

*キャッシュに関するPerlモジュールの用途と対象範囲です。*

* [CHI](https://metacpan.org/pod/CHI) - 一元化されたキャッシュ処理インターフェース（キャッシュ用DBIに類似）
* [CHI::Driver::DBI](https://metacpan.org/pod/CHI::Driver::DBI) - CHI向けDBIドライバー
* [CHI::Driver::DBIC](https://metacpan.org/pod/CHI::Driver::DBIC) - CHI向けDBIx::Classドライバー
* [CHI::Driver::Memcached](https://metacpan.org/pod/CHI::Driver::Memcached) - CHI向けMemcachedドライ連携
* [CHI::Driver::MongoDB](https://metacpan.org/pod/CHI::Driver::MongoDB) - CHI向けMongoDBドライバー
* [CHI::Driver::Redis](https://metacpan.org/pod/CHI::Driver::Redis) - CHI向けRedisドライバー
* [Catalyst::Plugin::Session::Store::CHI](https://metacpan.org/pod/Catalyst::Plugin::Session::Store::CHI) - CHIモジュールを用いてセッションデータのストレージバックエンドを処理
* [CGI::Application::Plugin::CHI](https://metacpan.org/pod/CGI::Application::Plugin::CHI) - CHIキャッシュインターフェース向けCGI-Appプラグイン
* [Mojolicious::Plugin::CHI](https://metacpan.org/pod/Mojolicious::Plugin::CHI) - CHIキャッシュとの相互作用


## クラスビルダー <a id="class-builder"></a>

*クラスビルダーに関するPerlモジュールの用途と対象範囲です。*

* [Class::Accessor::Lite](https://metacpan.org/pod/Class::Accessor::Lite) - シンプルなアクセサ生成器
* [Class::Accessor::Lite::Lazy](https://metacpan.org/pod/Class::Accessor::Lite::Lazy) - ラズリアクセスorを生成する
* [Homer](https://metacpan.org/pod/Homer) - シンプルなプロトタイプベースのオブジェクトシステム
* [Mo](https://metacpan.org/pod/Mo) - マイクロオブジェクト。Moは小さい。
* [Moo](https://metacpan.org/pod/Moo) - メタプログラミングをサポートするクラスビルダー
* [Moose](https://metacpan.org/pod/Moose) - 唯一の、Moose。
* [Mouse](https://metacpan.org/pod/Mouse) - Moo/Mooseに似た別のクラスビルダー
* [Object::Pad](https://metacpan.org/pod/Object::Pad) - `class Example { has $x; method reader { return $x } }`, experimental proving-ground for [Cor](https://gist.github.com/Ovid/68b33259cb81c01f9a51612c7a294ede)
* [Object::Tiny](https://metacpan.org/pod/Object::Tiny) - 簡潔で速く小さく、クラスビルダー。

## CLI <a id="cli"></a>

*CLIに関するPerlモジュールの用途と対象範囲です。*

* [App::Cmd](https://metacpan.org/pod/App::Cmd) - コマンドラインアプリを書く際に苦痛を減らす。
* [Getopt::Long](https://metacpan.org/pod/Getopt::Long) - コマンドラインオプションの拡張処理。

## クラウド <a id="cloud"></a>

* [AWS::CloudFront](https://metacpan.org/pod/AWS::CloudFront) - アマゾンクラウドフロントCDNへの軽量インターフェース
* [AWS::S3](https://metacpan.org/pod/AWS::S3) - アマゾンS3（シンプルストレージサービス）への軽量インターフェース
* [Net::Amazon::EC2](https://metacpan.org/pod/Net::Amazon::EC2) - アマゾンエレクトリックコンピュートクラウド（EC2）環境へのインターフェース
* [Net::AWS::SES](https://metacpan.org/pod/Net::AWS::SES) - アマゾンシンプルメールサービス（SES）クライアントを実装するPerl拡張
* [WebService::DigitalOcean](https://metacpan.org/pod/WebService::DigitalOcean) - デジタルオーシンのRESTフルAPI（v2）にアクセス
* [WebService::Dropbox](https://metacpan.org/pod/WebService::Dropbox) - ドロップボックスAPIへのインターフェース

## 暗号 <a id="cryptography"></a>

* [Bitcoin::Crypto](https://metacpan.org/pod/Bitcoin::Crypto) - Perlでビットコイン暗号。
* [CryptX](https://metacpan.org/pod/CryptX) - 暗号ツールキット

## 商用Webサービス <a id="commercial-webservices"></a>

* [Net::Xero](https://metacpan.org/pod/Net::Xero) - Xero会計へのインターフェース
* [PagerDuty::Agent](https://metacpan.org/pod/PagerDuty::Agent) - PerlのPagerDutyクライアント
* [WebService::Spotify](https://metacpan.org/pod/WebService::Spotify) - スポトニクスWebAPIへのシンプルインターフェース
* [WebService::Xero](https://metacpan.org/pod/WebService::Xero) - Xero アカウントングパッケージの公開・プライベートアプリケーションAPIにアクセス
* [WWW::Shopify](https://metacpan.org/pod/WWW::Shopify) - 特定のShopifyストアへのアクセスを表すオブジェクト
* [WWW::Spotify](https://metacpan.org/pod/WWW::Spotify) - Spotify Web APIのラッパー

## コンテナー <a id="container"></a>

*コンテナーに関するPerlモジュールの用途と対象範囲です。*

* [Object::Container](https://metacpan.org/pod/Object::Container)

## データ形式 <a id="data-format"></a>

*データ形式に関するPerlモジュールの用途と対象範囲です。*

* [BSON](https://metacpan.org/pod/BSON) - バイナリJSON形式
* [CBOR::Free](https://metacpan.org/pod/CBOR::Free) - Support for [CBOR](https://tools.ietf.org/html/rfc7049), IETF’s “binary JSON”
* [Data::Dumper::Simple](https://metacpan.org/pod/Data::Dumper::Simple) - Data::Dumperおよびeval()に同等の機能を簡潔に実行し高速化
* [Data::MessagePack](https://metacpan.org/pod/Data::MessagePack)
* [JSON::PP](https://metacpan.org/pod/JSON::PP)
* [JSON::XS](https://metacpan.org/pod/JSON::XS)
* [Sereal](https://metacpan.org/pod/Sereal)
* [Storable](https://metacpan.org/pod/Storable)
* [Text::CSV](https://metacpan.org/pod/Text::CSV)
* [Text::CSV_XS](https://metacpan.org/pod/Text::CSV_XS)
* [Text::Markdown](https://metacpan.org/pod/Text::Markdown)
* [TOML](https://metacpan.org/pod/TOML)
* [XML::LibXML](https://metacpan.org/pod/XML::LibXML)
* [XML::Compile::Schema](https://metacpan.org/pod/XML::Compile::Schema) - スキーマ要素および型を解釈：XMLメッセージにプロセッサを作成
* [XML::Compile::SOAP](https://metacpan.org/pod/XML::Compile::SOAP) - SOAP 1.1プロトコルを実装（クライアント側）
* [XML::Compile::WSDL](https://metacpan.org/pod/XML::Compile::WSDL) - WSDLバージョン1.1の通信仕様ファイルを使用したSOAPの利用
* [YAML](https://metacpan.org/pod/YAML)

## データベース <a id="database"></a>

*データベースに関するPerlモジュールの用途と対象範囲です。*

* [DBI](https://metacpan.org/pod/DBI)
* [DBIx::Connector](https://metacpan.org/pod/DBIx::Connector) - 高速かつ安全なDBI接続およびトランザクション管理
* [DBIx::Handler](https://metacpan.org/pod/DBIx::Handler) - フォーク安全なDBIハンドラー
* [DBIx::Inspector](https://metacpan.org/pod/DBIx::Inspector)
* [DBIx::QueryLog](https://metacpan.org/pod/DBIx::QueryLog)
* [DBIx::Sunny](https://metacpan.org/pod/DBIx::Sunny) - 有用なDBIラッパー
* [DBIx::TransactionManager](https://metacpan.org/pod/DBIx::TransactionManager)

## データベースドライバー <a id="database-drivers"></a>

*データベースドライバーに関するPerlモジュールの用途と対象範囲です。*

### リレーショナルデータベース <a id="relational-databases"></a>

* [DBD::CSV](https://metacpan.org/pod/DBD::CSV)
* [DBD::Firebird](https://metacpan.org/pod/DBD::Firebird)
* [DBD::MariaDB](https://metacpan.org/pod/DBD::MariaDB) - Perl5データベースインターフェース（DBI）用のMariaDBおよびMySQLドライバー
* [DBD::mysql](https://metacpan.org/pod/DBD::mysql)
* [DBD::ODBC](https://metacpan.org/pod/DBD::ODBC) - ODBCドライバーのいずれも。MS-SQL（プレースホルダー付き）
* [DBD::Oracle](https://metacpan.org/pod/DBD::Oracle) - DBIモジュール用のオラクルデータベースドライバー
* [DBD::Pg](https://metacpan.org/pod/DBD::Pg) - DBI用のPostgreSQLドライ連
* [DBD::SQLite](https://metacpan.org/pod/DBD::SQLite)
* [DBD::Sybase](https://metacpan.org/pod/DBD::Sybase) - SybaseおよびMS-SQL。ただしMS-SQLではプレースホルダーは使用しない

### NoSQLデータベース <a id="nosql-databases"></a>

* [Cache::Memcached::Fast](https://metacpan.org/pod/Cache::Memcached::Fast)
* [Mango](https://metacpan.org/pod/Mango) - 純Perl非ブロッキングI/O MongoDBドライバー
* [Redis](https://metacpan.org/pod/Redis)
* [Redis::Fast](https://metacpan.org/pod/Redis::Fast) - hiredisドライバーに対するPerlラッパー
* [Search::Elasticsearch](https://metacpan.org/pod/Search::Elasticsearch) - 公式Elasticsearchクライアントライブラリ
* [UnQLite](https://metacpan.org/pod/UnQLite)

## 日付と時刻 <a id="date--time"></a>

*日付と時刻に関するPerlモジュールの用途と対象範囲です。*

* [DateTime](https://metacpan.org/pod/DateTime)
* [Time::Moment](https://metacpan.org/pod/Time::Moment)
* [Time::Piece](https://metacpan.org/pod/Time::Piece)

## デバイス <a id="devices"></a>

*デバイスに関するPerlモジュールの用途と対象範囲です。*

* [Device::SerialPort](https://metacpan.org/pod/Device::SerialPort) - シリアル通信用の汎用シリアルポートライブラリ
* [Device::Modem](https://metacpan.org/pod/Device::Modem) - シリアルポート経由で接続されたモデムデバイスと話す
* [Device::Onkyo](https://metacpan.org/pod/Device::Onkyo) - LANまたはシリアル経由でオンキョー／インテグレートAV機器を制御
* [Chipcard::PCSC::Card](https://metacpan.org/pod/distribution/pcsc-perl/Card/Card.pod) - PerlとPCSCを使用したスマートカードの制御
* [Device::XBee::API](https://metacpan.org/pod/Device::XBee::API) - 純PerlコードでXBeeデバイスを制御
* [Device::Firmata](https://metacpan.org/pod/Device::Firmata) - ArduinoのようなFirmataデバイスを制御するモジュール

## DevOpsツール <a id="devops-tools"></a>

*DevOpsツールに関するPerlモジュールの用途と対象範囲です。*

* [Rex](https://metacpan.org/pod/Rex) - リモート実行

## メール <a id="email"></a>

*メールに関するPerlモジュールの用途と対象範囲です。*

* [Email::Sender](https://metacpan.org/pod/Email::Sender)
* [Email::Reply](https://metacpan.org/pod/Email::Reply)
* [Email::Stuffer](https://metacpan.org/pod/Email::Stuffer)

## イベントループ <a id="event-loops"></a>

*イベントループに関するPerlモジュールの用途と対象範囲です。*

* [AE](https://metacpan.org/pod/AE) - よりシンプルで速い、新しいAnyEvent API
* [AnyEvent](https://metacpan.org/pod/AnyEvent) - イベントループプログラミングにおけるDBI
* [EV](https://metacpan.org/pod/EV) - libevを使用しており、非常に速く人気がある。libevが存在すればAnyEventのデフォルトとなる
* [Event](https://metacpan.org/pod/Event) - 動作は良好だが、古いため
* [IO::Async](https://metacpan.org/pod/IO::Async) - 非同期イベント駆動プログラミング
* [POE](https://metacpan.org/pod/POE) - 複数のイベントループに共通するインターフェース
* [Promise::XS](https://metacpan.org/pod/Promise::XS) - PerlにおけるPromises

## 例外処理 <a id="exception-handling"></a>

*例外処理に関するPerlモジュールの用途と対象範囲です。*

* [autodie](https://metacpan.org/pod/autodie) - 成功またはエラーで終了する関数を、レキシカルスコープで置き換える
* [Exception::Class](https://metacpan.org/pod/Exception::Class) - Perlで実際の例外クラスを宣言できるモジュール
* [Syntax::Keyword::Try](https://metacpan.org/pod/Syntax::Keyword::Try) - Perlにおけるtry/catch/finally構文
* [Throwable](https://metacpan.org/pod/Throwable) - 例外が投げられることができるクラスのためのロール
* [Try::Tiny](https://metacpan.org/pod/Try::Tiny) - $@の適切な保持を含む最小のtry/catch
* [TryCatch](https://metacpan.org/pod/TryCatch) - ソースフィルタなしでPerlにおける第一クラスのtry/catchセマンティクス

## DOM操作 <a id="dom-manipulation"></a>

* [HTML5::DOM](https://metacpan.org/pod/HTML5::DOM) - 高速HTML5 DOMライブラリ（CSSセレクタベース：Modest/MyHTML）

## ファイル操作 <a id="file-manipulation"></a>

* [File::Util](https://metacpan.org/pod/File::Util) - 簡単で、柔軟かつ移植性の高いファイル処理
* [Path::Tiny](https://metacpan.org/pod/Path::Tiny) - シンプルなオブジェクト指向ファイル操作

## フォームフレームワーク <a id="form-frameworks"></a>

*フォームフレームワークに関するPerlモジュールの用途と対象範囲です。*

* [Catalyst::Controller::HTML::FormFu](https://metacpan.org/pod/Catalyst::Controller::HTML::FormFu) - CatalystでHTML::FormFuを使用する
* [CGI::FormBuilder](https://metacpan.org/pod/CGI::FormBuilder) - 状態を保持するフォームを簡単に生成・処理できる
* [Form::Sensible](https://metacpan.org/pod/Form::Sensible) - フォームベースのユーザーインターフェースを扱うための合理的な方法
* [Form::Tiny](https://metacpan.org/pod/Form::Tiny) - Type::Tinyの型制約を再利用するフォーム
* [Form::Toolkit](https://metacpan.org/pod/Form::Toolkit) - データ中心のフォームを構築するためのツールキット
* [HTML::FormFu](https://metacpan.org/pod/HTML::FormFu) - HTMLフォームの作成、レンダリング、検証フレームワーク
* [HTML::FormFu::ExtJS](https://metacpan.org/pod/HTML::FormFu::ExtJS) - HTML::FormFuの設定ファイルからExtJSフォームを生成
* [HTML::FormHandler](https://metacpan.org/pod/HTML::FormHandler) - Mooseを使用したHTMLフォーム
* [Mojolicious::Plugin::FormFields](https://metacpan.org/pod/Mojolicious::Plugin::FormFields) - 検証とフィルタリングを備えた軽量かつ柔軟なフォームビルダー
* [WWW::Form](https://metacpan.org/pod/WWW::Form) - HTMLフォームの入力検証と表示をシンプルかつ拡張可能に実現するモジュール

## 画像 <a id="images"></a>

*画像に関するPerlモジュールの用途と対象範囲です。*

* [Image::Magick](https://metacpan.org/pod/Image::Magick) - ImageMagickの画像合成ライブラリへのオブジェクト指向インターフェース
* [Imager](https://metacpan.org/pod/Imager)
* [GD](https://metacpan.org/pod/GD) - Gdグラフィックスライブラリへのインターフンス
* [Image::Info](https://metacpan.org/pod/Image::Info) - 画像情報の取得
* [Image::PNG::Libpng](https://metacpan.org/pod/release/BKB/Image-PNG-Libpng-0.52_03/lib/Image/PNG/Libpng.pm) - libpngへのPerlインターフェース
* [Graphics::TIFF](https://metacpan.org/pod/Graphics::TIFF) - libtiffへのPerlラッパー
* [Image::BMP](https://metacpan.org/pod/Image::BMP) - Perlのビットマップ画像解析・閲覧ツール

## リスト操作 <a id="list-manipulation"></a>

*リスト操作に関するPerlモジュールの用途と対象範囲です。*

* [Array::Unique](https://metacpan.org/pod/Array::Unique) - 一意の値のみを許容するティーバインダー配列
* [List::AllUtils](https://metacpan.org/pod/List::AllUtils) - List::Util、List::SomeUtils、List::UtilsByを1つのパッケージにまとめる
* [List::Compare](https://metacpan.org/pod/List::Compare) - 2つ以上のリストの要素を比較
* [List::Gen](https://metacpan.org/pod/List::Gen) - リストの生成に必要な関数を提供
* [List::MoreUtils](https://metacpan.org/pod/List::MoreUtils) - List::Util に欠けている機能を提供
* [List::SomeUtils](https://metacpan.org/pod/List::SomeUtils) - List::Util に欠けている機能を提供
* [List::Util](https://metacpan.org/pod/List::Util) - 一般用途のリストサブローチンの選定
* [List::UtilsBy](https://metacpan.org/pod/List::UtilsBy) - 高階のリストユーティリティ関数

## ログ <a id="logging"></a>

*ログに関するPerlモジュールの用途と対象範囲です。*

* [Log::Dispatch](https://metacpan.org/pod/Log::Dispatch)
* [Log::Log4perl](https://metacpan.org/pod/Log::Log4perl)
* [Log::Minimal](https://metacpan.org/pod/Log::Minimal)

## モジュール開発 <a id="module-development"></a>

*モジュール開発に関するPerlモジュールの用途と対象範囲です。*

* [Dist::Zilla](https://metacpan.org/pod/Dist::Zilla) - <http://dzil.org/>
* [Minilla](https://metacpan.org/pod/Minilla) - CPANモジュール作成ツール

## ネットワーク <a id="network"></a>

*ネットワークに関するPerlモジュールの用途と対象範囲です。*

* [DOCSIS::ConfigFile](https://metacpan.org/pod/DOCSIS::ConfigFile) - DOCSIS設定ファイルのデコードとエンコード
* [NetAddr::MAC](https://metacpan.org/pod/NetAddr::MAC) - MACアドレスの処理

*ネットワークに関するPerlモジュールの用途と対象範囲です。*

* [Net::SSH::Perl](https://metacpan.org/pod/Net::SSH::Perl) - Perlで実装されたSSHクライアント
* [Net::SSH2](https://metacpan.org/pod/Net::SSH2) - Wrapper for [libssh2](https://libssh2.org/).
* [Net::OpenSSH](https://metacpan.org/pod/Net::OpenSSH) - Run commands remotely using the [OpenSSH](http://www.openssh.com/) client.
* [Net::OpenSSH::Parallel](https://metacpan.org/pod/Net::OpenSSH::Parallel) - OpenSSHクライアントを使って並列にリモートコマンドを実行
* [Net::SSH::Any](https://metacpan.org/pod/Net::SSH::Any) - 任意のモジュールまたはバイナリクライアントを使ってリモートコマンドを実行
* [Net::SFTP::Foreign](https://metacpan.org/pod/Net::SFTP::Foreign) - リモートファイルアクセス用のSFTPクライアント
* [Object::Remote](https://metacpan.org/pod/Object::Remote) - リモートマシン上でPerlコードを実行
* [Net::CLI::Interact](https://metacpan.org/pod/Net::CLI::Interact) - インタラクティブなプログラムの自動化
* [Net::Appliance::Session](https://metacpan.org/pod/Net::Appliance::Session) - アパレットとのインタラクションの自動化

## ORM <a id="orm"></a>

*ORMに関するPerlモジュールの用途と対象範囲です。*

* [DBIx::Class](https://metacpan.org/pod/DBIx::Class)
* [Rose::DB](https://metacpan.org/pod/Rose::DB)
* [Teng](https://metacpan.org/pod/Teng)

## パッケージ管理 <a id="package-management"></a>

*パッケージ管理に関するPerlモジュールの用途と対象範囲です。*

* [App::cpanminus](https://metacpan.org/pod/App::cpanminus)
* [Carton](https://metacpan.org/pod/Carton)
* [Pinto](https://metacpan.org/pod/Pinto) - 強力なローカルCPANリポジトリ

## プロセスとスレッド <a id="processes-and-threads"></a>

*プロセスとスレッドに関するPerlモジュールの用途と対象範囲です。*

* [Parallel::ForkManager](https://metacpan.org/pod/Parallel::ForkManager) - シンプルな並列処理用のforkマネージャ
* [Parallel::Prefork](https://metacpan.org/pod/Parallel::Prefork) - シンプルなpreforkサーバーフレームワーク
* [Proclet](https://metacpan.org/pod/Proclet) - Minimalistic supervisor, a Perl port of [foreman](https://github.com/ddollar/foreman)

## プロファイリング <a id="profiling"></a>

*プロファイリングに関するPerlモジュールの用途と対象範囲です。*

* [Devel::KYTProf](https://metacpan.org/pod/Devel::KYTProf) - HTTPリクエスト・レスポンスやSQLクエリなどのI/Oに最適な非常に軽量のプロファイラー
* [Devel::NYTProf](https://metacpan.org/pod/Devel::NYTProf) - コードプロファイラー

## プロトコル <a id="protocol"></a>

*プロトコルに関するPerlモジュールの用途と対象範囲です。*

* [Furl](https://metacpan.org/pod/Furl) - 高速HTTP(S)クライアンツ
* [HTTP::Tiny](https://metacpan.org/pod/HTTP::Tiny) - 標準パッケージに含まれる最小で高速なクライアント
* [LWP::UserAgent](https://metacpan.org/pod/LWP::UserAgent) - 人気のHTTP(S)クライアント
* [Net::Curl](https://metacpan.org/pod/Net::Curl) - (libcurl)[https://curl.se/libcurl/] integration
* [Net::DHCP](https://metacpan.org/pod/Net::DHCP) - DHCPパケットの送受信
* [Net::DNS](https://metacpan.org/pod/Net::DNS) - DNSホスト名の解決
* [Protocol::DBus](https://metacpan.org/pod/Protocol::DBus) - D-Busを（純Perlで）実装

## キュー <a id="queueing"></a>

*キューに関するPerlモジュールの用途と対象範囲です。*

* [Gearman](https://metacpan.org/pod/Gearman)
* [Minion](https://docs.mojolicious.org/Minion) - 純Perlベースのジョブキュー
* [Net::RabbitMQ](https://metacpan.org/pod/Net::RabbitMQ)
* [Net::Stomp](https://metacpan.org/pod/Net::Stomp)
* [Qudo](https://metacpan.org/pod/Qudo)
* [Resque](https://metacpan.org/pod/Resque)
* [TheSchwartz](https://metacpan.org/pod/TheSchwartz)

## 科学技術計算 <a id="sciencenumerics"></a>
*科学技術計算に関するPerlモジュールの用途と対象範囲です。*

* [BioPerl](https://metacpan.org/pod/BioPerl)
* [Chart::Clicker](https://metacpan.org/pod/Chart::Clicker) - 強力で拡張可能なチャート表示
* [PDL](http://pdl.perl.org/)
* [PDL (CPAN)](https://metacpan.org/pod/PDL)
* [PDL::Graphics::Gnuplot](https://metacpan.org/pod/PDL::Graphics::Gnuplot)
* [PDL::IO::*](https://metacpan.org/search?q=PDL%3A%3AIO&size=20)
* [PDL::LinearAlgebra](https://metacpan.org/pod/PDL::LinearAlgebra)
* [PDL::Stats](https://metacpan.org/pod/PDL::Stats)
* [Physics::*](https://metacpan.org/search?q=physics%3A%3A&size=20)

## ストリーム操作 <a id="stream-manipulation"></a>

*ストリーム操作に関するPerlモジュールの用途と対象範囲です。*

* [RxPerl](https://metacpan.org/pod/RxPerl) - Perl implementation of [Reactive Extensions](http://reactivex.io) / rxjs

## RESTフレームワーク <a id="rest-frameworks"></a>

*RESTフレームワークに関するPerlモジュールの用途と対象範囲です。*

* [Catalyst::Action::REST](https://metacpan.org/pod/Catalyst::Action::REST) - 自動RESTメソッドディスパッチ
* [Dancer2::Plugin::REST](https://metacpan.org/pod/Dancer2::Plugin::REST) - Dancer2でRESTフルアプリを書くためのプラグイン
* [Dancer::Plugin::REST](https://metacpan.org/pod/Dancer::Plugin::REST) - DancerでRESTフルアプリを書くためのプラグイン
* [Raisin](https://metacpan.org/pod/Raisin) - Perl用のREST APIマイクロフレームワーク
* [Squatting](https://metacpan.org/pod/Squatting) - Perl用のCamping風ウェブマイクロフレームワーク

## テンプレートエンジン <a id="template-engines"></a>

*テンプレートエンジンに関するPerlモジュールの用途と対象範囲です。*

* [HTML::Template](https://metacpan.org/pod/HTML::Template) - ウェブページ用のテンプレート
* [Template::Alloy](https://metacpan.org/pod/Template::Alloy) - TT2/3、HT、HTE、Tmpl、Velocityエンジン
* [Template::Toolkit](https://metacpan.org/pod/Template::Toolkit) - 非常に人気のあるテンプレート処理システム
* [Text::MicroTemplate](https://metacpan.org/pod/Text::MicroTemplate) - 純Perlとコアモジュールで書かれた高速でシンプルかつ安全なテンプレートエンジン
* [Text::MicroTemplate::Extended](https://metacpan.org/pod/Text::MicroTemplate::Extended) - 拡張されたText::MicroTemplate
* [Text::Template](https://metacpan.org/pod/Text::Template) - Perlを埋め込んだテンプレート
* [Text::Xslate](https://metacpan.org/pod/Text::Xslate) - XSで書かれた高速テンプレートエンジン。複数の構文をサポート。
* [Tiffany](https://metacpan.org/pod/Tiffany) - テンプレートエンジンの汎用インターフェース。複数のテンプレートエンジンを簡単に使用できるようにする。
* [Template::Magic](https://metacpan.org/pod/Template::Magic) - 実行時値とテンプレートのマジックマージ。

## テスト <a id="testing"></a>

*テストに関するPerlモジュールの用途と対象範囲です。*

### テストフレームワーク <a id="testing-frameworks"></a>

* [Test::Base](https://metacpan.org/pod/Test::Base) - データ駆動型テストフレームワーク
* [Test::Base::Less](https://metacpan.org/pod/Test::Base::Less) - Test::Baseの限定版
* [Test::BDD::Cucumber](https://metacpan.org/pod/Test::BDD::Cucumber) - Perlで実装された人気のあるCucumberフレームワーク
* [Test::Class](https://metacpan.org/pod/Test::Class) - クラスベースのテスト。"setup" と "teardown" をサポート。
* [Test::Deep](https://metacpan.org/pod/Test::Deep) - 複雑なデータ構造を柔軟にテスト。
* [Test::Deep::Matcher](https://metacpan.org/pod/Test::Deep::Matcher)
* [Test::Harness](https://metacpan.org/pod/Test::Harness) - 統計情報を含むPerl標準テストスクリプトの実行
* [Test::Kantan](https://metacpan.org/pod/Test::Kantan) - シンプルで柔軟で楽しい"テストフレームワーク"
* [Test::More](https://metacpan.org/pod/Test::More)

### テストダブル <a id="test-double"></a>

* [Test::Exception](https://metacpan.org/pod/Test::Exception)
* [Test::Fatal](https://metacpan.org/pod/Test::Fatal) - 例外を検証するためのシンプルなモジュール。
* [Test::Mock::Guard](https://metacpan.org/pod/Test::Mock::Guard) - パッケージサブローチンのモック化。
* [Test::MockTime](https://metacpan.org/pod/Test::MockTime)
* [Test::mysqld](https://metacpan.org/pod/Test::mysqld)
* [Test::TCP](https://metacpan.org/pod/Test::TCP) - 一時的なTCPサーバーの起動
* [Test::Time](https://metacpan.org/pod/Test::Time) - システム時刻を偽るためのシンプルなモジュール。

### カバレッジ <a id="coverage"></a>

* [Devel::Cover](https://metacpan.org/pod/Devel::Cover)
* [Devel::Cover::Report::Coveralls](https://metacpan.org/pod/Devel::Cover::Report::Coveralls) Report to Coveralls

## ツール <a id="tools"></a>

*ツールに関するPerlモジュールの用途と対象範囲です。*

* [App::Ack](https://metacpan.org/pod/App::Ack) - ackはgrepに似たツールで、プログラマ向けに最適化されている。
* [App::Nopaste](https://metacpan.org/pod/App::Nopaste) - CLIからさまざまなpastebinに投稿。
* [Daiku](https://metacpan.org/pod/Daiku) - Perl用のMake。
* [Data::Printer](https://metacpan.org/pod/Data::Printer) - Perlデータ構造とオブジェクトの彩色されたきれいな出力。
* [Reply](https://metacpan.org/pod/Reply) - 読み込み・評価・表示ループ（REPL）のコマンドラインツール。
* [Riji](https://metacpan.org/pod/Riji) - マーカーとGitを主に使用した静的サイトジェネレーター（ブログ用）。
* [Smart::Comments](https://metacpan.org/pod/Smart::Comments) - コメントがただそこに座っているだけではなく、より多くのことをできる。

*ツールに関するPerlモジュールの用途と対象範囲です。*

* [Toolbox::Simple](https://metacpan.org/pod/Toolbox::Simple) - Perlにおけるいくつかの一般的なタスクを簡略化。
* [Script::Toolbox](https://metacpan.org/pod/Script::Toolbox) - 日常業務用スクリプトのためのフレームワーク。
* [Devel::Kit](https://metacpan.org/pod/Devel::Kit)- Handy toolbox of things to ease development/debugging.

*ツールに関するPerlモジュールの用途と対象範囲です。*

* [Config::Tiny](https://metacpan.org/pod/Config::Tiny) - 可能な限り少ないコードで.ini形式のファイルを読み書き。


## 型検査 <a id="type-checking"></a>

* [MooseX::Types](https://metacpan.org/pod/MooseX::Types) - Mooseの型管理ツール。
* [Type::Tiny](https://metacpan.org/pod/Type::Tiny) - 非常に小さく、しかし包括的な型ライブラリ。

## 動画 <a id="video"></a>

* [FFmpeg](https://metacpan.org/pod/FFmpeg) - FFmpegへのインターフェース（C言語で書かれた動画変換ツール）
* [Video::Info](https://metacpan.org/pod/Video::Info) - 動画の高さ、幅、コーデック、フレームレートなどのプロパティを取得
* [Vlc::Engine](https://metacpan.org/pod/Vlc::Engine) - PerlでVLCメディアプレイヤーを使用
* [VideoLAN::LibVLC](https://metacpan.org/pod/VideoLAN::LibVLC) - libvlc.soへのPerlバインディング
* [Video::Generator](https://metacpan.org/pod/Video::Generator) - 動画生成用のPerlクラス

## Webフレームワーク <a id="web-frameworks"></a>

*Webフレームワークに関するPerlモジュールの用途と対象範囲です。*

* [Amon2](https://metacpan.org/pod/Amon2)
* [Catalyst](https://metacpan.org/pod/Catalyst) - 機能が豊富。非常に人気がある。
* [Dancer](https://metacpan.org/pod/Dancer) ([Official site](http://perldancer.org/))
* [Dancer2](https://metacpan.org/pod/Dancer2)
* [Gantry](https://metacpan.org/pod/Gantry) - mod_perl、cgiなどへのウェブアプリケーションフレームワーク
* [Kelp](https://metacpan.org/pod/Kelp) - Plackを中心としたPerlウェブフレームワーク
* [Kossy](https://metacpan.org/pod/Kossy) - シンプルなインターフェースを持つウェブフレームワーク。
* [Mojolicious](https://metacpan.org/pod/Mojolicious) - すべてを一括で提供するフレームワーク。
* [Poet](https://metacpan.org/pod/Poet) - Mason開発者向けの現代的なPerlウェブフレームワーク

### ミドルウェア <a id="middlewares"></a>

*ミドルウェアに関するPerlモジュールの用途と対象範囲です。*

* [Gazelle](https://metacpan.org/pod/Gazelle) - パフォーマンス志向者向けのプリフォールドPlackハンドラー
* [Plack](https://metacpan.org/pod/Plack) - ウェブアプリケーション向けのPSGIサーバー実装とユーティリティ。
* [Server::Starter](https://metacpan.org/pod/Server::Starter) - 「グレースフルリスタート」機能を備えたプロセスマネージャ。
* [Starlet](https://metacpan.org/pod/Starlet) - 高パフォーマンスPSGIサーバー
* [Starman](https://metacpan.org/pod/Starman) - 高パフォーマンスプリフォールドPSGI/Plackウェブサーバー
* [Twiggy](https://metacpan.org/pod/Twiggy) - イベント駆動型PSGIアプリケーションサーバー

## Webフレームワーク類似 <a id="web-frameworks-like"></a>

*Webフレームワーク類似に関するPerlモジュールの用途と対象範囲です。*

* [Embperl](https://metacpan.org/pod/Embperl) - Perlで動的ウェブサイトを構築（PHPとPerlが融合したようなもの）
* [Mason](https://metacpan.org/pod/Mason) - ウェブだけでなく、幅広い分野に活用可能な強力で高パフォーマンスなテンプレートエンジン

## Webスクレイピング <a id="web-scraping"></a>

*Webスクレイピングに関するPerlモジュールの用途と対象範囲です。*

* [Web::Scraper](https://metacpan.org/pod/Web::Scraper)
* [WWW::Mechanize](https://metacpan.org/pod/WWW::Mechanize)
* [WWW::Mechanize::PhantomJS](https://metacpan.org/pod/WWW::Mechanize::PhantomJS) - PhantomJSブラウザの自動化
* [WWW::Scripter](https://metacpan.org/pod/distribution/WWW-Scripter/lib/WWW/Scripter.pod) - スクリプトを用いたウェブサイトの開発用
* [WWW::Selenium](https://metacpan.org/pod/WWW::Selenium) 


## ネットワークセキュリティ <a id="Network-Security"></a>

*ネットワークセキュリティに関するPerlモジュールの用途と対象範囲です。*


* [Net::Pcap](https://metacpan.org/pod/Net::Pcap) - pcap LBLパケットキャプチャライブラリへのインターフェース
* [Net::Ncap](https://metacpan.org/pod/Net::Ncap) - ncapネットワークデータキャプチャライブラリへのPerlバインディング
* [Net::Frame](https://metacpan.org/pod/Net::Frame) - フレーム作成用のPerlフレームワーク
* [NetPacket](https://metacpan.org/pod/NetPacket) - プロトコルレベルでのネットワークパケットの組み立て・分解
* [Net::Write](https://metacpan.org/pod/Net::Write) - ネットワークに原始データをオープンし送信するためのポータブルインターフェース
* [Net::Analysis](https://metacpan.org/pod/Net::Analysis) - ネットワークトラフィックの解析用Perlライブラリ
* [Net::Silk](https://metacpan.org/pod/Net::Silk) - PerlによるSiLKネットワークフローライブラリへのインターフェース
* [Net::Inspect](https://metacpan.org/pod/Net::Inspect) - 複数のネットワークレイヤー上のデータの検査用Perlライブラドリ
* [Net::Tshark](https://metacpan.org/pod/Net::Tshark) - TsharkネットワークキャプチャユーティリティへのPerlインターフェース
* [Net::Sharktools](https://metacpan.org/pod/Net::Sharktools) - PerlでWiresharkのパケット検査機能を提供
* [File::PCAP](https://metacpan.org/pod/File::PCAP) - Perlを用いたPCAPファイルフォーマットの読み書きおよび操作
* [Net::P0f](https://metacpan.org/pod/Net::P0f) - p0fユーティリティへのPerlインターフェース（OSのフィンガープリントに有用）
* [Net::Pcap::Reassemble](https://metacpan.org/pod/Net::Pcap::Reassemble) - Net::PcapにおけるPerlIPフラグメント再構成
* [Nagios::NRPE](https://metacpan.org/pod/Nagios::NRPE) - 純PerlによるNagios NRPE実装
* [Monitoring::Plugin](https://metacpan.org/pod/Monitoring::Plugin) - Naemon、Nagios、IcingaまたはShinken（および互換）プラグインの開発を簡素化するPerlモジュールのファミリー
* [Net::Connection::Sniffer](https://metacpan.org/pod/Net::Connection::Sniffer) - MITM接続用の実用的なPerlライブラリ
* [Net::ARP](https://metacpan.org/pod/Net::ARP) - ARPパケット作成用ライブラリ
* [SNMPMonitor](https://metacpan.org/pod/SNMPMonitor) - SNMPモニタの作成用Perl拡張
* [Net::LibNIDS](https://metacpan.org/pod/Net::LibNIDS) - ネットワークインシデント検知システムライブラリへのPerlインターフェース
* [Parse::Snort](https://metacpan.org/pod/Parse::Snort) - Perl Snortルールパーサー
* [Net::Wireless::802_11::WPA::CLI](https://metacpan.org/pod/Net::Wireless::802_11::WPA::CLI) - Perl WPA_CLIインターフェース
* [IO::Socket::SSL::Intercept](https://metacpan.org/IO::Socket::SSL::Intercept) - Perlを用いたSSL接続のインターセプション用ライブラリ

## メタデータフォレンジック <a id="Metadata-Forensics"></a>

*メタデータフォレンジックに関するPerlモジュールの用途と対象範囲です。*

* [Image::ExifTool](https://metacpan.org/pod/distribution/Image-ExifTool/exiftool) - 一般のメタデータ解析および閲覧フレームワーク

## リバースエンジニアリング <a id="Reverse-Engineering"></a>

*リバースエンジニアリングに関するPerlモジュールの用途と対象範囲です。*

* [Disassembly](https://metacpan.org/pod/distribution/B-C/script/disassemble) - バイナリバイトコードを読みやすいかつ再コンパイル可能なバイトコードアセンブラーに分解
* [Python::Bytecode](https://metacpan.org/pod/Python::Bytecode) - Pythonバイトコードのパース
* [B::Bytecode](https://metacpan.org/pod/B::Bytecode) - Perlスクリプトを後のロードに使えるバイトコード形式にコンパイル
* [Perf::ARM](https://metacpan.org/pod/Perf::ARM) - PerlでARM命令を使用
* [Asm::Z80::Table](https://metacpan.org/pod/Asm::Z80::Table) - PerlでZ80CPUアセンブリ命令をすべてアセンブル・ディアセンブル
* [X86::Disasm](https://metacpan.org/pod/X86::Disasm) - PerlでIntel x86命令をディアセンブル
* [Disassemble::X86](https://metacpan.org/pod/Disassemble::X86) - X86命令用の別のライブラリ
* [X86::Udis86](https://metacpan.org/pod/X86::Udis86) - C Udisディアセンブル用インターフェース
* [Asm::X86](https://metacpan.org/pod/Asm::X86) - x8Tが互換性を持つプロセッサの命令とレジスタ一覧、命令およびメモリ参照の検証と変換
* [ELF::Writer](https://metacpan.org/pod/ELF::Writer) - 実行可能ELFファイルの書き出しと読み込み


# ほかのAwesomeリスト <a id="other-awesome-lists"></a>

ほかの優れたAwesomeリスト:

* [bayandin/awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)
* [emijrp/awesome-awesome](https://github.com/emijrp/awesome-awesome)
* [fleveque/awesome-awesomes](https://github.com/fleveque/awesome-awesomes)
* [sindresorhus/awesome](https://github.com/sindresorhus/awesome)
* [t3chnoboy/awesome-awesome-awesome](https://github.com/t3chnoboy/awesome-awesome-awesome)

# コントリビューション方法 <a id="how-to-contribute"></a>

コントリビューション前に[CONTRIBUTING.md](https://github.com/hachiojipm/awesome-perl/blob/34a3ed10e9c8918b6e62b96cff914f5d7396438d/CONTRIBUTING.md)
