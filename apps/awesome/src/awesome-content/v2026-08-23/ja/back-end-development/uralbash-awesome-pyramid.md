---
title: "uralbash/awesome-pyramid"
description: "uralbash/awesome-pyramid の正規スナップショット"
licenseSource: "github-uralbash-awesome-pyramid-readme-md"
---

<a id="awesome-pyramid"></a>
# Awesome Pyramid
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![IRC
Freenode](https://img.shields.io/badge/irc-freenode-blue.svg)](https://webchat.freenode.net/?channels=pyramid)

素晴らしいPyramidアプリ、プロジェクトおよびリソースを厳選したリスト。[awesome-python](https://github.com/vinta/awesome-python/)を参考にし、その基礎にしている。

- [Awesome Pyramid](#awesome-pyramid)
    - [管理インターフェース](#admin-interface)
    - [アセット管理](#asset-management)
    - [非同期処理](#async)
    - [認証](#authentication)
    - [認可](#authorization)
    - [キャッシュとセッション](#caching--session)
    - [デバッグ](#debugging)
    - [メール](#email)
    - [フォーム](#forms)
    - [メディア管理](#media-management)
    - [RESTful API](#restful-api)
    - [検索](#search)
    - [セキュリティ](#security)
    - [サービス](#services)
    - [設定](#settings)
    - [ストレージ](#storage)
    - [タスクキュー](#task-queue)
    - [テスト](#testing)
    - [翻訳](#translations)
    - [ウェブフロントエンド統合](#web-frontend-integration)
    - [ワークフロー](#workflows)
    - [その他](#other)
- [プロジェクト](#projects)
    - [フレームワーク](#framework)
    - [CMS](#cms)
    - [Cookiecutter](#cookiecutters)
    - [e-Commerce](#e-commerce)
    - [プロジェクト管理](#project-management)
    - [その他](#other)
- [資料](#resources)
    - [書籍](#books)
    - [ウェブサイト](#websites)
    - [カンファレンス](#conferences)
    - [動画](#videos)
    - [利用者](#who-uses-it)
- [貢献](#contributing)

<a id="admin-interface"></a>
## 管理インターフェース

*Adminインターフェースを拡張し、機能を追加または改善するパッケージ。*

* [pyramid_formalchemy](https://github.com/FormAlchemy/pyramid_formalchemy) -
  ピラミッドベースのFormAlchemyによるCRUDインターフェースを提供する。
* [pyramid_sacrud](https://github.com/sacrud/pyramid_sacrud) -    Pyramid用のCRUDインターフェース。
  Pyramid向けの管理ウェブインターフェースを提供する。従来のCRUDと異なり、
  pyramid_sacrudはdjango.contrib.adminのような柔軟な上書きとカスタマイズを
  別のリソースバックエンドで実現する。[新しいアーキテクチャ](
  <http://pyramid-sacrud.readthedocs.io/pages/contribute/architecture.html>)は
  リソースとトラバーサル機構を基盤とし、さまざまな用途に対応する。
    * [ps_alchemy](https://github.com/sacrud/ps_alchemy) - pyramid_sacrud向けの拡張機能で、SQLAlchemyモデルを提供。
    * [ps_tree](https://github.com/sacrud/ps_tree) -
      [pyramid_sacrud](https://github.com/sacrud/pyramid_sacrud)向けの拡張機能で、
      レコード一覧をツリー表示する。
      [sqlalchemy_mptt](https://github.com/uralbash/sqlalchemy_mptt)のモデルと連携できる。
* [Websauna](https://websauna.org/docs/) - ピラミッド用のフルスタックアプリケーションフレームワーク

<a id="asset-management"></a>
## アセット管理

*プロジェクトの静的アセットを管理するためのパッケージ。*

* [pyramid_webassets](https://github.com/sontek/pyramid_webassets) - ピラミッド用のwebassetsライブラリとの連携機能。
* [pyramid_bowerstatic](https://github.com/mrijken/pyramid_bowerstatic) -
  Bowerstaticのピラミッドへの統合

<a id="async"></a>
## 非同期処理

* [aiopyramid](https://github.com/housleyjk/aiopyramid) - asyncioを使用してピラミッドを実行。
* [gevent-socketio](https://github.com/abourget/gevent-socketio) -
  gevent-socketioは、Node.jsでLearnBoostが開発したSocket.IOプロトコルのPython実装であり、他の言語に移植された。
* [Stargate](https://github.com/boothead/stargate) - Stargateは、長時間接続に最適なeventletライブラリを使用して、ピラミッドアプリケーションにWebSocketsサポートを追加するパッケージ。
* [channelstream](https://github.com/AppEnlight/channelstream) - ウェブソケット通信サーバー（gevent）。

<a id="authentication"></a>
## 認証

*Pyramidの認証方法を改善または拡張するパッケのパッケージ。*

* [pyramid_ldap](https://github.com/Pylons/pyramid_ldap) - ピラミッド用のLDAP認証ポリシー。
* [pyramid_ldap3](https://github.com/Cito/pyramid_ldap3) - ldap3パッケージに基づいたLDAP認証サービスをピラミッドアプリケーションに提供。
* [pyramid_who](https://github.com/Pylons/pyramid_who) - repoze.who 2.0 APIを使用したピラミッドの認証ポリシー。
* [velruse](https://github.com/bbangert/velruse) - ウェブアプリケーションの第三者
  認証を簡易化し、ほとんどの認証
  [プロバイダー](https://github.com/bbangert/velruse/tree/master/velruse/providers)をサポートする。
* [pyramid_simpleauth](https://github.com/thruflo/pyramid_simpleauth) - ピラミッドアプリケーションにおけるセッションベースの認証とロールベースのセキュリティ
* [Python Social Auth](https://github.com/omab/python-social-auth) - 多数の
  認証方式をサポートするソーシャル認証／登録機構。
  [対応プロバイダー](https://github.com/omab/python-social-auth#auth-providers)。
* [Authomatic](https://github.com/authomatic/authomatic) -  Pythonウェブアプリケーション向けのシンプルで強力な認証／承認クライアントライブラリ。
* [apex](https://github.com/cd34/apex) - Pylonsプロジェクトのピラミッド向けツールキット。Velruse（OAuth）および/またはローカルデータベース、CSRF、ReCaptcha、セッション、フラッシュメッセージ、I18Nを使用して認証と承認を追加。
* [pyramid_authsanity](https://github.com/usingnamespace/pyramid_authsanity) -
  安全な認証ポリシーを実現し、使いやすいバックエンドを持つことを簡単にする。
* [pyramid_jwt](https://github.com/wichert/pyramid_jwt) - このパッケージは、PyramidにJSON Web Tokensを用いた認証ポリシーを実装しています。この標準（[RFC 7519]）は、バックエンドAPIを安全に保護するためによく使用されます。JWTのエンコード／デコード処理には優れた[PyJWT]ライブラリが使用されています。
* [pyramid_ipauth](https://github.com/mozilla-services/pyramid_ipauth) -
  PyramidにおけるリモートIPアドレスに基づく認証ポリシー。

  [JSON Web Tokens]: https://jwt.io/
  [RFC 7519]: https://tools.ietf.org/html/rfc7519
  [PyJWT]: https://pyjwt.readthedocs.io/en/latest/


<a id="authorization"></a>
## 認可

認可インフラと権限に関連するパッケージ。

* [ziggurat_foundations](https://github.com/ergo/ziggurat_foundations) -
  フレームワークに依存しないSQLAlchemyクラスのセットで、権限が必要なアプリケーションの構築を容易にします。
* [pyramid_multiauth](https://github.com/mozilla-services/pyramid_multiauth) -
  Pyramid向けに、他の認証ポリシーをプロキシする認証ポリシー。
* [pyramid_authstack](https://github.com/wichert/pyramid_authstack) -  Pyramidで複数の認証ポ及を併用する方法。
* [horus](https://github.com/Pylons/horus) - Pyramid Web Framework向けのユーザー登録およびログインシステム。
* [pyramid_yosai](https://github.com/YosaiProject/pyramid_yosai) - Pythonアプリケーション向けのセキュリティフレームワークとPyramidの統合。認可（RBAC権限およびロール）、認証（2FA TOTP）、セッション管理、そして詳細なログ追跡を備えています。https://yosaiproject.github.io/yosai/

<a id="caching--session"></a>
## キャッシュとセッション

キャッシュとセッションに関連するパッケージ。

* [pyramid_beaker](https://github.com/Pylons/pyramid_beaker) - Pyramid向けのBeakerセッションファクトリのバックエンド、またキャッシュ設定機能を提供します。
    * [Why You'll Want to Switch to
      dogpile.cache](http://techspot.zzzeek.org/2012/04/19/using-beaker-for-caching-why-you-ll-want-to-switch-to-dogpile.cache/)
* [pyramid_redis_sessions](https://github.com/ericrasmussen/pyramid_redis_sessions) -
  PyramidのウェブフレームワークにおけるRedisをバックエンドとするセッションファクトリ。
* [pyramid_dogpile_cache](https://github.com/moriyoshi/pyramid_dogpile_cache) -
  Pyramid向けのdogpile.cache設定パッケージ。
* [pyramid_sessions](https://github.com/joulez/pyramid_sessions) - Pyramid Web Framework向けの複数セッションサポート。
* [pyramid_nacl_session](https://github.com/Pylons/pyramid_nacl_session) -
  暗号化されたピクルベースのクッキーシリアライザを定義し、クッキーステートの対称暗号化を[PyNaCl](http://pynacl.readthedocs.io/en/latest/secret/)で生成します。

<a id="debugging"></a>
## デバッグ

バグの特定を支援するパッケージ。

* [pyramid_debugtoolbar](https://github.com/Pylons/pyramid_debugtoolbar) -
  開発中にPyramidアプリケーションに役立つデバッグツールバーを提供します。
* [pyramid_exclog](https://github.com/Pylons/pyramid_exclog) - Pyramidアプリケーションからの例外をログに記録するパッケージ。
* [pyramid_debugtoolbar_dogpile](https://github.com/jvanasco/pyramid_debugtoolbar_dogpile) -
  pyramid_debugtoolbarとのdogpileキャッシュサポート。
* [pyramid_ipython](https://github.com/Pylons/pyramid_ipython) - PyramidのpshellにIPythonのバインディング。
* [pyramid_bpython](https://github.com/Pylons/pyramid_bpython) - Pyramidのpshellにbpythonのバインディング。
* [pyramid_pycallgraph](https://github.com/disko/pyramid_pycallgraph) - PyramidのTweenで、各リクエストに対して呼び出しグラフ画像を生成します。

<a id="email"></a>
## メール

メール送信の管理を支援するパッケージ。

* [pyramid_mailer](https://github.com/Pylons/pyramid_mailer) - Pyramidアプリケーションからメールを送信するパッケージ。
* [pyramid_marrowmailer](https://github.com/domenkozar/pyramid_marrowmailer) -
  marrow.mailer（以前はTurboMail）とのPyramid統合パッケージ。
* [pyramid_mailgun](https://github.com/evannook/pyramid_mailgun) - Pyramidフレームワーク向けのMailgun統合

<a id="forms"></a>
## フォーム

フォームの機能を拡張するか、新しいフォームタイプを追加するパッケージ。

* [deform](https://github.com/Pylons/deform) - PythonのHTMLフォーム生成ライブラリ
* [colander](https://github.com/Pylons/colander) - 文字列、マッピング、リストに対するシリアライズ／デシリアライズ／バリデーションライブラリ
* [WTForms](https://github.com/wtforms/wtforms) - Pythonウェブ開発向けの柔軟なフォームバリデーションおよびレンダリングライブラリ
* [ColanderAlchemy](https://github.com/stefanofontanelli/ColanderAlchemy) -
  SQLAlchemyのマップクラスに基づいたColanderスキーマを自動生成するツール
* [marshmallow](https://github.com/marshmallow-code/marshmallow) - 複雑なオブジェクトをシンプルなPythonデータ型（シリアライズ／デシリアライズおよびバリデーション）に変換する軽量ライブラリ

<a id="media-management"></a>
## メディア管理

* [pyramid_elfinder](https://github.com/uralbash/pyramid_elfinder) - elfinderファイルマネージャー向けの接続ツール、Pyramidフレームワーク用に書かれたもの
* [pyramid_storage](https://github.com/danjac/pyramid_storage) - Pyramidフレームワークアプリケーションにおけるファイルアップロード処理を行うパッケージ

<a id="restful-api"></a>
## RESTful API

RESTful APIを開発するためのパッケージ。

* [cornice](https://github.com/Cornices/cornice) - PyramidでREST風Webサービスを構築・ドキュメント化するためのヘルパーを提供。HTTP仕様に自動的に従うよう設計。
* [rest_toolkit](https://github.com/wichert/rest_toolkit) - Pyramid上に構築された非常に使いやすいRESTサーバー構築ライブラリ。Pyramidの知識がほとんど必要ない。
* [pyramid_royal](https://github.com/hadrien/pyramid_royal) - RoyalはPyramid拡張で、RESTフルウェブアプリケーションの開発を容易にするもの
* [cliquet](https://github.com/mozilla-services/cliquet) - CliquetはHTTPマイクロサービス（データ駆動型RESTAPIなど）の実装を容易にするツールキット
* [webargs](https://github.com/sloria/webargs) - 人間が読みやすいHTTPリクエスト引数パーサーを提供。人気ウェブフレームワークとの組み合わせが可能。
* [ramses](https://github.com/ramses-tech/ramses) - RAMLを使ってRESTフルAPIを生成。Nefertariを使用してElasticSearchを活用したビューを提供。
* [nefertari](https://github.com/ramses-tech/nefertari) -  NefertariはPyramidとElasticSearchの上に構築されたREST APIフレームワーク。
* [pyramid_swagger](https://github.com/striglia/pyramid_swagger) - Swaggerを使ってPyramidウェブアプリのインターフェースを定義・バリデーションするための便利なツール。（Swagger 2.0ドキュメント）
* [pyramid-openapi3](https://github.com/niteoweb/pyramid_openapi3) - OpenAPI 3.0ドキュメントでPyramidビューをバリデーション。pyramid_swaggerに似ているが、OpenAPI 3.0対応。
* [pyramid_jsonapi](https://github.com/colinhiggs/pyramid-jsonapi) - データベースから自動的に
  [JSON API](http://jsonapi.org/)標準APIを生成する。SQLAlchemy ORMと
  Pyramidフレームワークを使用する。
* [pyramid_apispec](https://github.com/ergo/pyramid_apispec) - apispecとMarshmallowスキーマを使ってOpenAPI仕様ファイルを作成。


<a id="search"></a>
## 検索

プロジェクトに検索機能を提供するパッケージ。

* [hypatia](https://github.com/Pylons/hypatia) - Pythonのインデックスと検索システム。

<a id="security"></a>
## セキュリティ

プロジェクトのセキュリティを向上させるパッケージ。

<a id="services"></a>
## サービス

* [pyramid_sms](https://github.com/websauna/pyramid_sms) -
   ピラミッドウェブフレームワーク向けSMSサービス。

<a id="settings"></a>
## 設定

*プロジェクトの設定可能性を管理するためのパッケージ。*

* [pyramid_zcml](https://github.com/Pylons/pyramid_zcml) - ピラミッド向けZope構成マーカー言語の設定サポート。
* [pyramid_services](https://github.com/mmerickel/pyramid_services) - ピラミッドアプリ内でプラグイン可能なサービス層にアクセスするためのパターンとヘルパーメソッドを定義する。
* [hupper](https://github.com/Pylons/hupper) - 開発者用のプロセスモニターリローダーで、ファイルの変更を監視し、プロセスを再起動できる

<a id="storage"></a>
## ストレージ

*既存のストレージバックエンドの機能を拡張するか、新しいストレージバックエンドを提供するパッケージ。*

* [pyramid_tm](https://github.com/Pylons/pyramid_tm) - ピラミッドアプリケーション向けの中央化された取引管理（ミドルウェアなし）
* [zope.sqlalchemy](https://github.com/zopefoundation/zope.sqlalchemy) -
  SQLAlchemyとトランザクション管理の統合。
    * [What the Zope Transaction Manager Means To Me (and
      you)](https://metaclassical.com/what-the-zope-transaction-manager-means-to-me-and-you/)
* [pyramid_sqlalchemy](https://github.com/wichert/pyramid_sqlalchemy) -
  SQLAlchemyとPyramidを使用する際に便利に機能する基本的な接続を提供します。
* [pyramid_zodbconn](https://github.com/Pylons/pyramid_zodbconn) - ピラミッド向けZODBデータベース接続管理
* [pyramid_mongoengine](https://github.com/marioidival/pyramid_mongoengine) -
  pyramid-mongoengineパッケージはflask-mongoengineに基づく
* [pyramid_mongodb](https://github.com/niallo/pyramid_mongodb) -
  PyramidウェブフレームワークでMongoDBを永続化に使うための基本的なPyramidスキャフォールド
* [pyramid-excel](https://github.com/pyexcel-webwares/pyramid-excel) - pyramid-excelは[pyexcel](https://github.com/pyexcel/pyexcel)に基づいており、HTTPプロトコルやファイルシステム上に保存されたExcelファイルの情報の消費・生成を容易にします。このライブラリはExcelデータをリストのリスト、記録（辞書）のリスト、リストの辞書に変換できます。逆にそのようなデータからもExcelデータに復元できます。そのため、Pyramidベースのウェブ開発において、データに焦点を当てることができます。

<a id="task-queue"></a>
## タスクキュー

*タスク／バックグラウンドキューとのやり取りを容易にするパッケージ。*

* [pyramid_celery](https://github.com/sontek/pyramid_celery) - celeryとの統合を施したピラミッド構成。celeryをpyramidの.iniファイルで設定でき、pyramidの設定をceleryタスク内に含めることができます。
* [pyramid_rq](https://github.com/wichert/pyramid_rq) - PyramidでRQ
  キューシステムを利用できるようにする。Pyramidプロジェクトで
  [RQ](http://python-rq.org)を監視・利用する最も簡単な方法。

<a id="templates"></a>
## テンプレート

* [pyramid_mako](https://github.com/Pylons/pyramid_mako) - ピラミッドウェブフレームワーク向けのマコテンプレートシステムのバインディング。
* [pyramid_chameleon](https://github.com/Pylons/pyramid_chameleon) - Pyramid向けChameleonテンプレートコンパイラ。
* [pyramid_jinja2](https://github.com/Pylons/pyramid_jinja2) - ピラミッドウェブフレームワーク向けのJinja2テンプレートシステムのバインディング。
* [Tonnikala](https://github.com/ztane/Tonnikala) - PythonテンプレートエンジンとPyramidの統合
* [Kajiki](https://github.com/nandoflorestan/kajiki) - 高速かつ適切に構成されたXMLテンプレートを提供します。[Pyramid integration](https://github.com/nandoflorestan/kajiki/blob/master/kajiki/integration/pyramid.py)

<a id="testing"></a>
## テスト

*コードのテストやテストデータの生成を支援するパッケージ。*

* [webtest](https://github.com/Pylons/webtest) - WSGIアプリケーションをラップし、そのアプリケーションにテストリクエストを送るのを簡単に行うようになります。HTTPサーバーを起動せずに済みます。

<a id="translations"></a>
## 翻訳

*パッケージはプロジェクトの翻訳作業を支援します。*

* [lingua](https://github.com/wichert/lingua) - リンガは、コードから翻訳可能なテキストを抽出し、既存の翻訳を確認するためのツールを提供するパッケージです。これは、gettextのxgettextコマンドまたはBabelのpybabelコマンドの使用を置き換えます。
* [pyramid_i18n_helper](https://github.com/sahama/pyramid_i18n_helper) - 新しい smgid を作成し、msgid をローカル言語に翻訳するためのヘルパー

<a id="web-frontend-integration"></a>
## ウェブフロントエンド統合

* [PyramidVue](https://github.com/eddyekofo94/pyramidVue) - Pyramid と VueJs（JavaScript）テンプレートを用いたホットモジュール置換（HMR）スタートテンプレート

<a id="workflows"></a>
## ワークフロー

*プロセス、手順および/またはビジネスタスクの管理を行うパッケージです。*

<a id="other"></a>
## その他

* [pyramid_layout](https://github.com/Pylons/pyramid_layout) - Pyramid で UI レイアウトを管理するための拡張機能
* [pyramid_skins](https://github.com/Pylons/pyramid_skins) - このパッケージは、コードとテンプレート、リソースを統合するためのシンプルなフレームワークを提供します
* [waitress](https://github.com/Pylons/waitress) - Waitress は、非常に高いパフォーマンスを備えた純粋PythonのWSGIサーバーであり、標準ライブラリに依存する以外の依存関係は一切ありません
* [pyramid_handlers](https://github.com/Pylons/pyramid_handlers) - Pyramid における Pylons スタイルの「コントローラー」の類似物
* [pyramid_rpc](https://github.com/Pylons/pyramid_rpc) - Pyramid 用のRPCサービス拡張機能。XML-RPCをより拡張可能にし、JSON-RPCおよびAMFをサポートします
* [pyramid_autodoc](https://github.com/SurveyMonkey/pyramid_autodoc) - PyramidのAPIをドキュメント化するためのSphinx拡張機能
* [pyramid_pages](https://github.com/uralbash/pyramid_pages) - Pyramidアプリケーションにツリーページのコレクションを提供します。これはdjango.contrib.flatpagesに非常に似ていますが、URLディスパッチにおいてツリーストラクチャとトラバースアルゴリズムを備えています
* [paginate](https://github.com/Pylons/paginate) - Pythonによるページネーションモジュール
* [pyramid_tablib](https://github.com/lxneng/pyramid_tablib) - pyramidのためのtablibレンダラー（xlsx、xls、csv）
* [tomb_routes](https://github.com/sontek/tomb_routes) - Pyramidのルーティング周りのシンプルなユーティリティライブラリ
* [pyramid_extdirect](https://github.com/jenner/pyramid_extdirect) - このPyramidプラグインは、ExtJSに含まれるExtDirect Sencha APIのルーターを提供します。ExtDirectはJavaScriptを通じてサーバー側のコールバックを直接実行できるようにし、追加のAJAXのボイラープレートを省きます
* [pyramid_retry](https://github.com/Pylons/pyramid_retry) - pyramid_retryは、Pyramid用の実行ポリシーであり、リクエストをラップし、特定の「リトライ可能」エラー条件で設定された回数だけリトライを行い、その後クライアントに失敗を通知します

<a id="projects"></a>
# プロジェクト

*優れたピラミッドプロジェクトです。*

<a id="framework"></a>
## フレームワーク

* [Ringo](http://www.ringo-framework.org/) - Ringoは、Pyramidに基づいたPythonベースのハイレベルウェブアプリケーションフレームワークです。このフレームワークは、フォームベースの管理または管理ソフトウェアの開発に使用できます
* [cone.app](https://github.com/conestack/cone.app) - Pyramidに基づいた包括的なウェブアプリケーションのスタブ

<a id="cms"></a>
## CMS

* [nive_cms](https://github.com/nive/nive_cms) - Niveは、PythonとウェブフレームワークPyramidに基づいたプロフェッショナルな、モバイルおよびデスクトップサイト向けのコンテンツ管理システムです。詳細情報については、ウェブサイト cms.nive.co を参照してください
* [substanced](https://github.com/Pylons/substanced) - Pyramidウェブフレームワークに基づいたアプリケーションサーバー。コンテンツの管理に加え、アプリケーションの作成を容易にするためのユーザーインターフェースとライブラリ、ユーティリティを提供します
* [Kotti](https://github.com/Kotti/Kotti) - ユーザーに親しみやすく、軽量かつ拡張可能なウェブコンテンツ管理システム。PyramidとSQLAlchemyに基づいています
* [KARL](https://karlproject.readthedocs.io/en/latest/) - Pyramidに基づいた中程度のアプリケーション（約80K行のPythonコード）です。これは、協働、組織内のインターネット、知識管理に適したオープンソースウェブシステムです。ウィキ、カレンダー、マニュアル、検索、タグ付け、コメント、ファイルアップロードなどの機能を提供します。詳細はKARLサイトをご覧ください。

<a id="cookiecutters"></a>
## Cookiecutter

* [Pylons](https://github.com/Pylons?q=cookiecutter) - 公式Cookiecutterテンプレート
* [Pyramid Runner](https://github.com/asif-mahmud/pyramid_runner) - 最小限のPyramidのフレームワークで、小規模から大規模なウェブサービスの開発を開始するためのテンプレートを提供することを目的としたもの

  * Traversal based application
  * JSON only response
  * JWT authentication policy
  * Alembic for database revisions
  * Some simple modifications to base tests, views and models base to reduce typing


<a id="e-commerce"></a>
## Eコマース

<a id="other-1"></a>
## その他

* [cluegun](https://github.com/Pylons/cluegun) - ロッキーバートのClueBinをベースにしたシンプルなpastebinアプリケーション。フォーム処理、セキュリティ、ZODBの使用をPyramidアプリケーション内で実証している。
* [shootout](https://github.com/Pylons/shootout) - カロス・デ・ガルディアとルカス・フィドスによる「アイデアコンテスト」アプリケーションの例。URLディスパッチ、簡単な認証、SQLAlchemyおよびpyramid_simpleformとの統合を示している。
* [virginia](https://github.com/Pylons/virginia) - 非常にシンプルな動的ファイルレンダリングアプリケーション。ファイルシステムのディレクトリから構造化テキスト、HTML、画像をレンダリングできる。トラバーサルの好例でもあり、初期版はrepoze.orgのウェブサイトで使われている。
* [Akhet](https://docs.pylonsproject.org/projects/akhet/en/latest/) -     Pyramid用のライブラリおよびデモアプリケーション。Pylonsに似た雰囲気を持つ。特に、Pylonsから移行するユーザーに役立つ以前のアプリケーションフレームワークが有名である。そのフレームワークは退役したが、デモは類似の役割を果たしている。
* [Khufu Project](http://khufuproject.github.io/) - KhufuはPyramid向けのアプリケーションフレームワークで、Jinja2とSQLAlchemyとの連携環境を提供する。
* [Ptah](https://github.com/ptahproject/ptah) - Ptahは、高速で楽しいオープンソースのハイレベルPythonウェブ開発環境。
* [warehouse](https://github.com/pypa/warehouse) - Warehouseは、PyPIが現在使用している古くからのコードベースを置き換えるための次世代Pythonパッケージリポジトリ。
* [travelcrm](https://github.com/mazvv/travelcrm) - TravelCRMは、旅行代理店のすべての規模（小規模から大規模ネットワークまで）における顧客関係の自動化に有効な無料かつオープンソースアプリケーション。
* [RhodeCode](https://rhodecode.com/) - 企業向けソースコード管理プラットフォーム。Mercurial、Git、Subversionのリポジトリに統一されたユーザー制御、権限管理、コードレビュー、ツール統合を適用。世界中で大きな規模のソフトウェアチームが、RhodeCodeを用いてセキュアかつファイアウォール内での協働を実現している。

<a id="project-management"></a>
## プロジェクト管理

* [AppEnlight](https://getappenlight.com/) - ウェブアプリケーションのパフォーマンス、例外、稼働状態のモニタリング

<a id="resources"></a>
# 資料

*新しいピラミッドアプリとプロジェクトを発見する場所です。*

<a id="books"></a>
## 書籍

* [Python Web Frameworks](http://www.oreilly.com/web-platform/free/python-web-frameworks.csp) - Django、Flask、Tornado、Bottle、Pyramid、CherryPyのトップ6のPythonフレームワークについての詳細を解説。

<a id="websites"></a>
## ウェブサイト

* [Try Pyramid](https://trypyramid.com/) - スタート・スモール、フィニッシュ・ビッグ、ステイ・フィニッシュフレームワーク。公式サイト。

<a id="conferences"></a>
## カンファレンス

* [Sushi Sprint at PloneConf 2018 in Tokyo, Japan](https://2018.ploneconf.org/sprints) (2018年11月10日～11日)
* [Pyramid Workshop in Munich, Germany.](https://pyconweb.com/talks/28-05-2017/pyramid-workshop) (2017年5月28日 10時30分～12時30分)
* [PloneConf 2017](https://2017.ploneconf.org/) - バルセロナPloneデジタル体験コンファレンス（2017年10月16日～22日）
* [PloneConf 2016](https://2016.ploneconf.org/) - ボストンPloneデジタル体験コンファレンス（2016年10月17日～23日）
* [DragonSprint 2016](http://dragonsprint.com/) - DragonSprintは、Pyramidに関する1週間のスプリント。スプリントはスロベニアのルブリャナで、12月の初週（5日から9日）に開催される。主なテーマはPyramid 2.0とPyramidによる初心者向けの内容。


<a id="videos"></a>
## 動画
* [List of videos from the official site](https://docs.pylonsproject.org/projects/pyramid_cookbook/en/latest/misc/videos.html)
* [Online Video Courses at Talk Python Training](https://training.talkpython.fm/courses/all)
* [Web Applications with Python and the Pyramid
  Framework](http://shop.oreilly.com/product/0636920041900.do) -
  このPythonとPyramidフレームワークを使ったウェブアプリケーションのトレーニングコースでは、専門家著者パウル・エバリットが、Pythonウェブ開発に必要な機能およびPyramidの特徴について教えます。このコースは、すでにPythonの基本的な知識を持つユーザーを対象としています。

まず、単一ファイルのウェブアプリ、テンプレート、複数のルートとビューについて学びます。その後、パウルがMyApp Pythonパッケージ、ビューとルート、テンプレートおよび静的資産について教えます。このビデオチュートリアルでは、フォーム、データベースおよびセッション、認証と認可、JSONについてもカバーしています。最後に、拡張性について学びます。これは、カスタム設定、拡張および上書き、カスタムビューのプレディケートについてです。

このコンピュータベースのトレーニングコースを終えたら、Pythonウェブ開発に必要な機能およびPyramidに特有の機能について、基本的な理解を得ることができます。

<a id="who-uses-it"></a>
## 利用者

* [Projects, Websites, Companies and Organizations that use
  Pyramid](https://trypyramid.com/community-powered-by-pyramid.html) - プロジェクトをリストに追加してください

<a id="contributing"></a>
# 貢献

素晴らしいPyramidアプリ、プロジェクト、またはリソースをフォークし、プルリクエストを送ってください。

<a id="license"></a>
## ライセンス

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法的に可能である範囲内で、@uralbashはこの作品に関するすべての著作権および関連又は隣接権を放棄した。
