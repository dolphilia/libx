---
title: Awesome Pyramid
description: Pyramidの拡張パッケージ、プロジェクトの雛形、実装例、CMS、書籍、動画、コミュニティの資料。
licenseSource: github-uralbash-awesome-pyramid-readme-md
---
# Awesome Pyramid

PyramidはPythonのウェブフレームワークです。認証、API、ストレージなどのアプリケーション機能を拡張するパッケージと、プロジェクトの雛形、実装例、CMSをまとめています。固定原文に収録された書籍、動画、カンファレンス、コミュニティの案内も探せます。

## <a id="admin-interface"></a>管理インターフェース

* [pyramid_formalchemy](https://github.com/FormAlchemy/pyramid_formalchemy) - FormAlchemyを基にしたPyramid用CRUDインターフェース。
* [pyramid_sacrud](https://github.com/sacrud/pyramid_sacrud) - 上書きとカスタマイズに対応するPyramid用の管理・CRUDインターフェース。django.contrib.adminに似ているが、リソースの提供には別のバックエンドを使用。[アーキテクチャ](http://pyramid-sacrud.readthedocs.io/pages/contribute/architecture.html)はリソースとトラバーサルを用い、さまざまな用途に対応。
    * [ps_alchemy](https://github.com/sacrud/ps_alchemy) - SQLAlchemyモデルを提供するpyramid_sacrud拡張。
    * [ps_tree](https://github.com/sacrud/ps_tree) - レコードをツリーとして表示する
      [pyramid_sacrud](https://github.com/sacrud/pyramid_sacrud)拡張。[sqlalchemy_mptt](https://github.com/uralbash/sqlalchemy_mptt)のモデルに対応。
* [Websauna](https://websauna.org/docs/) - Pyramid向けのフルスタックアプリケーションフレームワーク。

## <a id="asset-management"></a>アセット管理

* [pyramid_webassets](https://github.com/sontek/pyramid_webassets) - webassetsライブラリを使うためのPyramid拡張。
* [pyramid_bowerstatic](https://github.com/mrijken/pyramid_bowerstatic) - BowerstaticとPyramidの統合。

## <a id="async"></a>非同期処理

* [aiopyramid](https://github.com/housleyjk/aiopyramid) - asyncioを使ったPyramidの実行。
* [gevent-socketio](https://github.com/abourget/gevent-socketio) - Socket.IOプロトコルのPython実装。Socket.IOはLearnBoostがNode.js向けに開発し、その後他の言語へ移植。
* [Stargate](https://github.com/boothead/stargate) - 長時間の接続を扱うeventletライブラリを用いて、PyramidアプリケーションにWebSocket対応を追加するパッケージ。
* [channelstream](https://github.com/AppEnlight/channelstream) - geventを使うWebSocket通信サーバー。

## <a id="authentication"></a>認証

* [pyramid_ldap](https://github.com/Pylons/pyramid_ldap) - Pyramid用のLDAP認証ポリシー。
* [pyramid_ldap3](https://github.com/Cito/pyramid_ldap3) - ldap3パッケージを基にPyramidアプリケーションへLDAP認証サービスを提供。
* [pyramid_who](https://github.com/Pylons/pyramid_who) - repoze.who 2.0 APIを使うPyramid用認証ポリシー。
* [velruse](https://github.com/bbangert/velruse) - ウェブアプリケーションの外部サービスによる認証を簡素化。ほとんどの認証
  [プロバイダー](https://github.com/bbangert/velruse/tree/master/velruse/providers)に対応。
* [pyramid_simpleauth](https://github.com/thruflo/pyramid_simpleauth) - Pyramidアプリケーション向けのセッションベース認証とロールベースのセキュリティ。
* [Python Social Auth](https://github.com/omab/python-social-auth) - 多くの
  [プロバイダー](https://github.com/omab/python-social-auth#auth-providers)に対応する、ソーシャルサービスを使った認証・登録の仕組み。
* [Authomatic](https://github.com/authomatic/authomatic) - Pythonウェブアプリケーション用の認可・認証クライアントライブラリ。
* [apex](https://github.com/cd34/apex) - Pylons ProjectのPyramid向けツールキット。Velruse（OAuth）またはローカルデータベース、あるいは両方を使う認証・認可に加え、CSRF、ReCaptcha、セッション、フラッシュメッセージ、I18Nを提供。
* [pyramid_authsanity](https://github.com/usingnamespace/pyramid_authsanity) - 安全な認証の実装を簡素化することを目的とした、バックエンド付きの認証ポリシー。
* [pyramid_jwt](https://github.com/wichert/pyramid_jwt) - [JSON Web Tokens]を使うPyramid用認証ポリシー。[RFC 7519]で定められた標準は、バックエンドAPIの保護によく使用される。JWTのエンコード・デコードには[PyJWT]を使用。
* [pyramid_ipauth](https://github.com/mozilla-services/pyramid_ipauth) - リモートIPアドレスを基にしたPyramid用認証ポリシー。

  [JSON Web Tokens]: https://jwt.io/
  [RFC 7519]: https://tools.ietf.org/html/rfc7519
  [PyJWT]: https://pyjwt.readthedocs.io/en/latest/

## <a id="authorization"></a>認可

* [ziggurat_foundations](https://github.com/ergo/ziggurat_foundations) - 権限を必要とするアプリケーション向けの、フレームワークに依存しないSQLAlchemyクラス群。
* [pyramid_multiauth](https://github.com/mozilla-services/pyramid_multiauth) - 複数の認証ポリシーを積み重ね、それらへ処理を委譲するPyramid用認証ポリシー。
* [pyramid_authstack](https://github.com/wichert/pyramid_authstack) - Pyramidで複数の認証ポリシーを使用。
* [horus](https://github.com/Pylons/horus) - Pyramidウェブフレームワーク用のユーザー登録・ログインシステム。
* [pyramid_yosai](https://github.com/YosaiProject/pyramid_yosai) - Python用セキュリティフレームワークとPyramidの統合。認可（RBACの権限・ロール）、認証（TOTPによる2FA）、セッション管理、詳細な監査証跡を提供。https://yosaiproject.github.io/yosai/

## <a id="caching--session"></a>キャッシュとセッション

* [pyramid_beaker](https://github.com/Pylons/pyramid_beaker) - Pyramid用のBeakerセッションファクトリーバックエンドとキャッシュ設定機能。
    * [Why You'll Want to Switch to dogpile.cache](
      http://techspot.zzzeek.org/2012/04/19/using-beaker-for-caching-why-you-ll-want-to-switch-to-dogpile.cache/)
* [pyramid_redis_sessions](https://github.com/ericrasmussen/pyramid_redis_sessions) - RedisをバックエンドにしたPyramid用セッションファクトリー。
* [pyramid_dogpile_cache](https://github.com/moriyoshi/pyramid_dogpile_cache) - Pyramid用のdogpile.cache設定パッケージ。
* [pyramid_sessions](https://github.com/joulez/pyramid_sessions) - Pyramidウェブフレームワークでの複数セッション対応。
* [pyramid_nacl_session](https://github.com/Pylons/pyramid_nacl_session) - Cookieの状態を
  [PyNaCl](http://pynacl.readthedocs.io/en/latest/secret/)による対称暗号で暗号化する、pickleベースのCookieシリアライザー。

## <a id="debugging"></a>デバッグ

* [pyramid_debugtoolbar](https://github.com/Pylons/pyramid_debugtoolbar) - Pyramidアプリケーションの開発時に使うデバッグツールバー。
* [pyramid_exclog](https://github.com/Pylons/pyramid_exclog) - Pyramidアプリケーションの例外をログに記録するパッケージ。
* [pyramid_debugtoolbar_dogpile](https://github.com/jvanasco/pyramid_debugtoolbar_dogpile) - pyramid_debugtoolbarでのdogpileキャッシュ対応。
* [pyramid_ipython](https://github.com/Pylons/pyramid_ipython) - Pyramidのpshell用IPythonバインディング。
* [pyramid_bpython](https://github.com/Pylons/pyramid_bpython) - Pyramidのpshell用bpythonバインディング。
* [pyramid_pycallgraph](https://github.com/disko/pyramid_pycallgraph) - リクエストごとにコールグラフ画像を生成するPyramidのtween。

## <a id="email"></a>メール

* [pyramid_mailer](https://github.com/Pylons/pyramid_mailer) - Pyramidアプリケーションからメールを送信するパッケージ。
* [pyramid_marrowmailer](https://github.com/domenkozar/pyramid_marrowmailer) - marrow.mailer（旧称TurboMail）とPyramidの統合パッケージ。
* [pyramid_mailgun](https://github.com/evannook/pyramid_mailgun) - MailgunとPyramidの統合。

## <a id="forms"></a>フォーム

* [deform](https://github.com/Pylons/deform) - Python用HTMLフォーム生成ライブラリ。
* [colander](https://github.com/Pylons/colander) - 文字列、マッピング、リストのシリアライズ・デシリアライズ・検証ライブラリ。
* [WTForms](https://github.com/wtforms/wtforms) - Pythonウェブ開発用の柔軟なフォーム検証・描画ライブラリ。
* [ColanderAlchemy](https://github.com/stefanofontanelli/ColanderAlchemy) - SQLAlchemyのマッピング済みクラスを基に、Colanderスキーマを自動生成。
* [marshmallow](https://github.com/marshmallow-code/marshmallow) - 複雑なオブジェクトと単純なPythonデータ型を相互変換する軽量ライブラリ。シリアライズ・デシリアライズ・検証に対応。

## <a id="media-management"></a>メディア管理

* [pyramid_elfinder](https://github.com/uralbash/pyramid_elfinder) - Pyramid向けに書かれたelfinderファイルマネージャー用コネクター。
* [pyramid_storage](https://github.com/danjac/pyramid_storage) - Pyramidアプリケーションでファイルのアップロードを扱うパッケージ。

## RESTful API

* [cornice](https://github.com/Cornices/cornice) - Pyramidを使うREST形式のウェブサービスの構築・文書化を支援し、既定の動作を提供。可能な範囲でHTTP仕様への準拠を自動化。
* [rest_toolkit](https://github.com/wichert/rest_toolkit) - RESTサーバーを構築するためのPythonパッケージ。Pyramidを基にしているが、利用にPyramidの詳しい知識は不要。
* [pyramid_royal](https://github.com/hadrien/pyramid_royal) - RESTfulウェブアプリケーションの作成を支援するPyramid拡張。
* [cliquet](https://github.com/mozilla-services/cliquet) - データを扱うREST APIなど、HTTPマイクロサービスの実装を支援するツールキット。
* [webargs](https://github.com/sloria/webargs) - HTTPリクエスト引数の解析ライブラリ。よく使われるウェブフレームワークへの対応を内蔵。
* [ramses](https://github.com/ramses-tech/ramses) - RAMLからRESTful APIを生成。ElasticSearchを用いるビューを提供するNefertariを使用。
* [nefertari](https://github.com/ramses-tech/nefertari) - PyramidとElasticSearchを基にしたREST APIフレームワーク。
* [pyramid_swagger](https://github.com/striglia/pyramid_swagger) - PyramidウェブアプリケーションのインターフェースをSwaggerで定義・検証するツール群。Swagger 2.0文書に対応。
* [pyramid-openapi3](https://github.com/niteoweb/pyramid_openapi3) - PyramidのビューをOpenAPI 3.0文書に照らして検証。pyramid_swaggerに似ているが、対象はOpenAPI 3.0。
* [pyramid_jsonapi](https://github.com/colinhiggs/pyramid-jsonapi) - SQLAlchemy ORMとPyramidを使い、データベースから
  [JSON API](http://jsonapi.org/)標準に準拠するAPIを自動生成。
* [pyramid_apispec](https://github.com/ergo/pyramid_apispec) - apispecとMarshmallowスキーマを使ってOpenAPI仕様ファイルを作成。

## <a id="search"></a>検索

* [hypatia](https://github.com/Pylons/hypatia) - Python用の索引作成・検索システム。

## <a id="services"></a>サービス

* [pyramid_sms](https://github.com/websauna/pyramid_sms) - Pyramid用SMSサービス。

## <a id="settings"></a>設定

* [pyramid_zcml](https://github.com/Pylons/pyramid_zcml) - PyramidでのZope Configuration Markup Languageによる設定に対応。
* [pyramid_services](https://github.com/mmerickel/pyramid_services) - Pyramidアプリケーションから交換可能なサービス層へアクセスするためのパターンとヘルパーメソッドを定義。
* [hupper](https://github.com/Pylons/hupper) - 開発者向けのプロセス監視・再読み込みツール。ファイルの変更を監視してプロセスを再起動。

## <a id="storage"></a>ストレージ

* [pyramid_tm](https://github.com/Pylons/pyramid_tm) - ミドルウェアを使わずにPyramidアプリケーションのトランザクションを一元管理。
* [zope.sqlalchemy](https://github.com/zopefoundation/zope.sqlalchemy) - SQLAlchemyとトランザクション管理の統合。
    * [What the Zope Transaction Manager Means To Me (and you)](
      https://metaclassical.com/what-the-zope-transaction-manager-means-to-me-and-you/)
* [pyramid_sqlalchemy](https://github.com/wichert/pyramid_sqlalchemy) - SQLAlchemyとPyramidの連携を支援する基本機能。
* [pyramid_zodbconn](https://github.com/Pylons/pyramid_zodbconn) - Pyramid用ZODBデータベース接続管理。
* [pyramid_mongoengine](https://github.com/marioidival/pyramid_mongoengine) - flask-mongoengineを基にしたPyramid用パッケージ。
* [pyramid_mongodb](https://github.com/niallo/pyramid_mongodb) - PyramidでMongoDBによる永続化を利用するための基本的なアプリケーション雛形。
* [pyramid-excel](https://github.com/pyexcel-webwares/pyramid-excel) - [pyexcel](https://github.com/pyexcel/pyexcel)を基に、HTTP経由とファイルシステム上でExcelファイルのデータを読み書きするライブラリ。Excelデータをリストのリスト、レコード（辞書）のリスト、リストを値とする辞書へ変換でき、逆方向の変換にも対応。Pyramidでの開発時に、ファイル形式よりデータへ集中するための機能を提供。

## <a id="task-queue"></a>タスクキュー

* [pyramid_celery](https://github.com/sontek/pyramid_celery) - Celeryを統合するPyramid設定。Pyramidの.iniファイルでCeleryを設定し、Celeryタスク内でもPyramid設定を利用可能。
* [pyramid_rq](https://github.com/wichert/pyramid_rq) - Pyramidでrqキューシステムを利用するための機能。
  [RQ](http://python-rq.org)の監視・利用を支援。

## <a id="templates"></a>テンプレート

* [pyramid_mako](https://github.com/Pylons/pyramid_mako) - Pyramid用のMakoテンプレートシステムのバインディング。
* [pyramid_chameleon](https://github.com/Pylons/pyramid_chameleon) - Pyramid用のChameleonテンプレートコンパイラー。
* [pyramid_jinja2](https://github.com/Pylons/pyramid_jinja2) - Pyramid用のJinja2テンプレートシステムのバインディング。
* [Tonnikala](https://github.com/ztane/Tonnikala) - Pyramidとの統合に対応するPythonテンプレートエンジン。
* [Kajiki](https://github.com/nandoflorestan/kajiki) - 整形式のXMLテンプレートを高速に生成するライブラリ。[Pyramidとの統合](https://github.com/nandoflorestan/kajiki/blob/master/kajiki/integration/pyramid.py)に対応。

## <a id="testing"></a>テスト

* [webtest](https://github.com/Pylons/webtest) - HTTPサーバーを起動せずに、WSGIアプリケーションをラップしてテストリクエストを送信。

## <a id="translations"></a>翻訳

* [lingua](https://github.com/wichert/lingua) - コードから翻訳対象テキストを抽出し、既存翻訳を検査するツール群。gettextのxgettextやBabelのpybabelの代わりに使用。
* [pyramid_i18n_helper](https://github.com/sahama/pyramid_i18n_helper) - 新しいsmgidの作成と、msgidの各言語への翻訳を支援するヘルパー。

## <a id="web-frontend-integration"></a>ウェブフロントエンド統合

* [PyramidVue](https://github.com/eddyekofo94/pyramidVue) - PyramidとVueJs（JavaScript）を統合する開始用テンプレート。Hot Module Replacementに対応。

## <a id="other"></a>その他

* [pyramid_layout](https://github.com/Pylons/pyramid_layout) - UIレイアウトを管理するPyramidアドオン。
* [pyramid_skins](https://github.com/Pylons/pyramid_skins) - コードとテンプレート・リソースを統合するための簡易フレームワーク。
* [waitress](https://github.com/Pylons/waitress) - 本番運用に向けた性能と品質を目指す純PythonのWSGIサーバー。依存先はPython標準ライブラリのみ。
* [pyramid_handlers](https://github.com/Pylons/pyramid_handlers) - PyramidでPylons形式の「コントローラー」に相当する機能を提供。
* [pyramid_rpc](https://github.com/Pylons/pyramid_rpc) - Pyramid用のRPCサービスアドオン。pyramid_xmlrpcより拡張しやすいXML-RPCに加え、JSON-RPCとAMFに対応。
* [pyramid_autodoc](https://github.com/SurveyMonkey/pyramid_autodoc) - Pyramid APIを文書化するためのSphinx拡張。
* [pyramid_pages](https://github.com/uralbash/pyramid_pages) - Pyramidアプリケーションにツリー構造のページ群を提供。django.contrib.flatpagesに似ているが、URLディスパッチにツリー構造とトラバーサルアルゴリズムを使用。
* [paginate](https://github.com/Pylons/paginate) - Python用ページネーションモジュール。
* [pyramid_tablib](https://github.com/lxneng/pyramid_tablib) - Pyramid用tablibレンダラー。xlsx、xls、csvに対応。
* [tomb_routes](https://github.com/sontek/tomb_routes) - Pyramidのルーティングを扱う簡易ユーティリティライブラリ。
* [pyramid_extdirect](https://github.com/jenner/pyramid_extdirect) - ExtJSに含まれるSenchaのExtDirect API用ルーターを提供するPyramidプラグイン。追加のAJAX定型コードなしで、JavaScriptからサーバー側コールバックを直接実行可能。
* [pyramid_retry](https://github.com/Pylons/pyramid_retry) - リクエストをラップするPyramid用実行ポリシー。特定の再試行可能なエラー条件では、設定可能な回数だけ再試行してからクライアントへ失敗を通知。

## <a id="projects"></a>プロジェクト

### <a id="framework"></a>フレームワーク

* [Ringo](http://www.ringo-framework.org/) - Pyramidを基にしたPython用の高水準ウェブアプリケーションフレームワーク。フォームを使った管理業務や管理画面のソフトウェアを構築可能。
* [cone.app](https://github.com/conestack/cone.app) - Pyramidを基にしたウェブアプリケーションの雛形。

### CMS

* [nive_cms](https://github.com/nive/nive_cms) - PythonとPyramidを基にした、導入後すぐに使えるモバイル・デスクトップサイト向けコンテンツ管理システム。詳細はcms.nive.coを参照。
* [substanced](https://github.com/Pylons/substanced) - Pyramidを基にしたアプリケーションサーバー。コンテンツ管理用UIと、アプリケーション作成を支援するライブラリ・ユーティリティを提供。
* [Kotti](https://github.com/Kotti/Kotti) - PyramidとSQLAlchemyを基にした、軽量で拡張可能なウェブコンテンツ管理システム。
* [KARL](https://karlproject.readthedocs.io/en/latest/) - Pyramidを基にした、共同作業・組織内イントラネット・知識管理用のオープンソースウェブシステム。固定原文ではPythonコード約80K行のアプリケーションと記述。ウィキ、カレンダー、マニュアル、検索、タグ付け、コメント、ファイルアップロードに対応。ダウンロード・インストールの詳細はKARLのサイトを参照。

### <a id="cookiecutters"></a>Cookiecutter

* [Pylons](https://github.com/Pylons?q=cookiecutter) - 公式Cookiecutterテンプレート。
* [Pyramid Runner](https://github.com/asif-mahmud/pyramid_runner) - 小規模から大規模なウェブサービスの開始用テンプレートを提供することを目的とした、最小限のPyramidアプリケーション雛形。

  * トラバーサルを基にしたアプリケーション
  * レスポンスはJSONのみ
  * JWT認証ポリシー
  * データベースのリビジョン管理にAlembicを使用
  * 入力の手間を減らすため、基本のテスト・ビュー・モデルに簡単な変更を加えた構成

### <a id="other-1"></a>その他

* [cluegun](https://github.com/Pylons/cluegun) - Rocky BurtのClueBinを基にした簡易pastebinアプリケーション。Pyramidでのフォーム処理・セキュリティ・ZODBの利用例。
* [shootout](https://github.com/Pylons/shootout) - Carlos de la GuardiaとLukasz Fidoszによる「アイデアコンテスト」アプリケーションの例。URLディスパッチ、簡易認証、SQLAlchemy・pyramid_simpleformとの統合を示す。
* [virginia](https://github.com/Pylons/virginia) - ファイルシステムのディレクトリから構造化テキスト、HTML文書、画像を描画する簡易動的ファイル表示アプリケーション。トラバーサルの例にもなっている。固定原文では、以前の版がrepoze.orgのサイトで使われていると記述。
* [Akhet](https://docs.pylonsproject.org/projects/akhet/en/latest/) - Pylonsに似た使い方を提供するPyramidライブラリとデモアプリケーション。以前のアプリケーション雛形は、Pylonsからの移行者やPylonsに似たAPIを好む利用者を支援。固定原文では雛形は廃止済みだが、デモが同様の役割を担うと記述。
* [Khufu Project](http://khufuproject.github.io/) - Jinja2とSQLAlchemyを使う環境を提供するPyramid用アプリケーション雛形。
* [Ptah](https://github.com/ptahproject/ptah) - オープンソースの高水準Pythonウェブ開発環境。
* [warehouse](https://github.com/pypa/warehouse) - 固定原文では、当時PyPIで使われていた旧コードベースの置き換えを目指すPythonパッケージリポジトリと記述。
* [travelcrm](https://github.com/mazvv/travelcrm) - 小規模から大規模ネットワークまで、旅行代理店の顧客関係業務を自動化する無料のオープンソースアプリケーション。
* [RhodeCode](https://rhodecode.com/) - 企業向けソースコード管理プラットフォーム。Mercurial、Git、Subversionのリポジトリに共通のユーザー制御・権限・コードレビュー・ツール統合を適用。大規模で拡大するソフトウェアチームによる、ファイアウォール内での共同作業に対応。

### <a id="project-management"></a>プロジェクト管理

* [AppEnlight](https://getappenlight.com/) - ウェブのパフォーマンス・例外・稼働状態を監視。

## <a id="resources"></a>資料

### <a id="books"></a>書籍

* [Python Web Frameworks](http://www.oreilly.com/web-platform/free/python-web-frameworks.csp) - Django、Flask、Tornado、Bottle、Pyramid、CherryPyの6つのPythonフレームワークを詳しく解説。

### <a id="websites"></a>ウェブサイト

* [Try Pyramid](https://trypyramid.com/) - 公式サイト。
* [PyramidのIRC（Freenode）](https://webchat.freenode.net/?channels=pyramid) - 固定原文から案内されているコミュニティのチャンネル。

### <a id="conferences"></a>カンファレンス

* [PloneConf 2018のSushi Sprint](https://2018.ploneconf.org/sprints) - 日本・東京。2018年11月10日～11日。
* [Pyramidワークショップ](https://pyconweb.com/talks/28-05-2017/pyramid-workshop) - ドイツ・ミュンヘン。2017年5月28日、10時30分～12時30分。
* [PloneConf 2017](https://2017.ploneconf.org/) - バルセロナでのPlone Digital Experience Conference。2017年10月16日～22日。
* [PloneConf 2016](https://2016.ploneconf.org/) - ボストンでのPlone Digital Experience Conference。2016年10月17日～23日。
* [DragonSprint 2016](http://dragonsprint.com/) - 2016年12月5日～9日のPyramid開発スプリント。1週間の開催として記録され、会場はEUのスロベニア・ルブリャナ。主題はPyramid 2.0と初心者向けのPyramid。

### <a id="videos"></a>動画
* [公式サイトの動画一覧](https://docs.pylonsproject.org/projects/pyramid_cookbook/en/latest/misc/videos.html)
* [Talk Python Trainingのオンライン動画講座](https://training.talkpython.fm/courses/all)
* [Web Applications with Python and the Pyramid Framework](
  http://shop.oreilly.com/product/0636920041900.do) - Paul Everittによる、Pythonウェブ開発の基礎とPyramid固有の機能を扱う講座。Pythonの基本知識がある利用者が対象。単一ファイルのウェブアプリ、テンプレート、複数のルートとビュー、MyApp Pythonパッケージ、静的アセット、フォーム、データベース、セッション、認証、認可、JSONを扱う。拡張性の題材は、カスタム設定、拡張と上書き、カスタムビュープレディケート。

### <a id="who-uses-it"></a>利用者

* [Pyramidを利用するプロジェクト・サイト・企業・組織](
  https://trypyramid.com/community-powered-by-pyramid.html)
