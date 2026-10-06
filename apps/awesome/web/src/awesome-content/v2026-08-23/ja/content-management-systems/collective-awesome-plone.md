---
title: "Awesome Plone"
description: "Ploneのコンテンツ、検索、レイアウト、フォーム、認証、移行、開発、管理用アドオンと、選び方の助言・公式資料。"
licenseSource: "github-collective-awesome-plone-readme-md"
---

# Awesome Plone

[Plone](https://plone.org)はPython製のオープンソースCMSで、機能、カスタマイズ性、標準で備わるセキュリティを重視しています。コンテンツ、編集、検索、レイアウト、フォーム、メディア、認証、移行、開発、管理に使うアドオンに加え、選び方の助言と公式資料をまとめています。

固定原文の収録対象は、Python 3に対応したPlone 5.2および6用のアドオンです。これらの版は原文で当時の主要バージョンとして扱われています。Plone 6の標準フロントエンドはReact製のVoltoで、`plone.restapi`を通じてPloneと通信します。Volto自体も拡張できます。Volto用のアドオンは[awesome-volto](https://github.com/collective/awesome-volto)を参照してください。

原文では、[PyPI](https://pypi.org/search/?q=&o=&c=Framework+%3A%3A+Plone)に3,000件を超えるアドオン、[Collective](https://github.com/collective)に1,500件を超えるリポジトリがあり、適したアドオンを探すのが難しいと説明されています。このリストは一般的な製品や手法に関する知識を共有し、選択を助けるものです。PyPIのPlone関連パッケージを集約し、絞り込める一覧は https://pag.derico.tech を参照してください。

## コンテンツと関連機能 <a id="content-and-utilities-for-content"></a>

コンテンツタイプやコンテンツの追加機能を提供するアドオン。

* [collective.consent](https://github.com/collective/collective.consent) - 先へ進む前に、複数の事項についてユーザーの同意を求める。
* [collective.dexteritytextindexer](https://github.com/collective/collective.dexteritytextindexer) - Dexterityコンテンツタイプ用の動的なSearchableTextインデックス。Plone 6ではコアに統合された。
* [collective.documentgenerator](https://github.com/collective/collective.documentgenerator) - [appyフレームワーク](https://appyframe.work/)とOpenOffice／LibreOfficeを使い、コンテンツから文書（.odt、.pdf、.doc）を生成する。
* [collective.documentviewer](https://github.com/collective/collective.documentviewer) - DocumentCloudのビューアーとPDF処理をPloneに統合する。
* [collective.easyformplugin.createdx](https://github.com/collective/collective.easyformplugin.createdx) - EasyFormの送信内容からPloneのコンテンツオブジェクトを作成する。
* [collective.embeddedpage](https://github.com/collective/collective.embeddedpage) - 外部のHTMLページをPlone ClassicやVoltoに埋め込むコンテンツタイプ。
* [collective.folderishtraverse](https://github.com/collective/collective.folderishtraverse) - フォルダー内の最初の項目へ辿る。
* [collective.folderishtypes](https://github.com/collective/collective.folderishtypes) - 標準タイプを置き換える「Folderish Event」「Folderish News Item」「Folderish Document」を提供する。フォルダーと同様に、ほかのコンテンツを格納できる。
* [collective.geolocationbehavior](https://github.com/collective/collective.geolocationbehavior) - LeafletJSを使い、Ploneのコンテンツに位置情報を付ける。
* [collective.glossary](https://github.com/collective/collective.glossary) - 用語集とその用語を定義するコンテンツタイプ。
* [collective.immediatecreate](https://github.com/collective/collective.immediatecreate) - 追加フォームを省略し、コンテンツをすぐに作成する。
* [collective.lineage](https://github.com/collective/collective.lineage) - サブフォルダーを独立したPloneサイトのように扱うサブサイト機能。サブサイト専用アドオンのエコシステムもある。
* [collective.mailchimp](https://github.com/collective/collective.mailchimp) - MailChimpのニュースレター機能をPloneに統合する。
* [collective.mirror](https://github.com/collective/collective.mirror) - ほかのコンテナーの内容をミラーするコンテンツタイプ。
* [collective.mustread](https://github.com/collective/collective.mustread) - 必読に指定したコンテンツの閲覧状況をユーザーごとに追跡する。
* [collective.person](https://github.com/collective/collective.person) - 人物を表すコンテンツタイプ。Ploneユーザーと関連付ける振る舞いを任意で追加できる。
* [collective.pdfjs](https://github.com/collective/collective.pdfjs) - MozillaのJavaScript PDFリーダーをPloneに統合する。
* [collective.remoteproxy](https://github.com/collective/collective.remoteproxy) - 外部コンテンツ用のプロキシ。ローカルプロキシを作成した外部URLを、生成されるコンテンツ内で置き換える。
* [collective.restrictportlets](https://github.com/collective/collective.restrictportlets) - Manager以外のユーザーが追加できるポートレットを制限する。
* [collective.workspace](https://github.com/collective/collective.workspace) - Ploneサイトの特定領域のメンバーシップを管理する。ユーザーごとのローカルロールではなくメンバーシップグループでアクセスを許可し、サイト全体のユーザー／グループ管理パネルにアクセスできない人にもグループ管理を委譲できる。
* [dexterity.membrane](https://github.com/collective/dexterity.membrane) - コンテンツをPloneサイトのユーザーやグループとして使えるようにする。
* [plone.pdfexport](https://github.com/plone/plone.pdfexport) - Ploneコンテンツの汎用PDFエクスポート機能。
* [Products.EasyNewsletter](https://github.com/collective/Products.EasyNewsletter) - Plone用のニュースレター・メール配信製品。
* [zopyx.ipsumplone](https://github.com/zopyx/zopyx.ipsumplone) - Ploneのデモ用コンテンツと画像を作成する。
* [collective.folderorder](https://github.com/collective/collective.folderorder) - Ploneフォルダー内で別の並び順を使えるようにする。

## 編集 <a id="editing"></a>

* [collective.a11ycheck](https://github.com/collective/collective.a11ycheck) - ページ保存時に、アクセシビリティの問題をサイトの編集者に通知する。
* [collective.collabora](https://github.com/collective/collective.collabora) - 共同で文書を編集できるように、Collabora OnlineをPloneに統合する。
* [collective.bbcodesnippets](https://github.com/collective/collective.bbcodesnippets) - 汎用的で拡張可能なBBCodeマークアップをPloneに統合する。
* [collective.richdescription](https://github.com/collective/collective.richdescription) - 書式を設定できるPloneの説明フィールド。

## 検索と分類 <a id="searching-and-categorizing"></a>

* [cioppino.twothumbs](https://github.com/collective/cioppino.twothumbs) - 高評価・低評価の投票でコンテンツを評価する。
* [collective.bookmarks](https://github.com/collective/collective.bookmarks) - Plone用のブックマーク、お気に入り、ウィッシュリスト。
* [collective.collectionfilter](https://github.com/collective/collective.collectionfilter) - コレクションやcontentlistingタイル用のファセットナビゲーションフィルター。
* [collective.elasticsearch](https://github.com/collective/collective.elasticsearch) - ElasticsearchをPloneの検索バックエンドとして使う。
* [collective.elastic.plone](https://github.com/collective/collective.elastic.plone) - ElasticsearchをPloneのコンテンツと統合する。
* [collective.searchandreplace](https://github.com/collective/collective.searchandreplace) - Ploneのコンテンツオブジェクト内のテキストを検索・置換する。
* [collective.solr](https://github.com/collective/collective.solr) - Solr検索エンジンをPloneに統合する。
* [collective.taxonomy](https://github.com/collective/collective.taxonomy) - コンテンツの分類に使う階層型の分類体系を作成・編集・利用する。
* [eea.facetednavigation](https://github.com/collective/eea.facetednavigation) - プログラミングせず、Web上で設定できる検索インターフェイス。コンテンツのファセット（メタデータやプロパティ）を順に選び、調べながら、検索を動的に絞り込める。
* [Products.PloneKeywordManager](https://github.com/collective/Products.PloneKeywordManager) - キーワード、タグ、分類語（subjects）を変更・統合・削除する。
* [zopyx.typesense](https://github.com/zopyx/zopyx.typesense) - 外部のオープンソース検索サーバーTypesenseをPloneに統合する。collective.solrやElasticsearchの代替。

## レイアウト <a id="layout"></a>

サイトのレイアウトを作成・管理するための製品や資料。

* [plone.app.mosaic](https://github.com/plone/plone.app.mosaic) - 異なるタイルを組み合わせてページの内容を構成できる、拡張可能なエディター。
* [collective.cover](https://github.com/collective/collective.cover) - ドラッグ＆ドロップで複雑なカバーページを作成する。plone.app.mosaicと同じブロック／タイルのエコシステムを使うが、編集方法は異なる。
* [collective.contentsections](https://github.com/collective/collective.contentsections) - Dexterityコンテンツタイプだけを基に、Plone 6 Classicでブロック方式のコンテンツ構成を提供する。
* [collective.gridlisting](https://github.com/collective/collective.gridlisting) - Dexterityの振る舞いとブラウザーテンプレートを追加する。Bootstrap 5のCSSクラスとpatternslibの`pat-masonry`を加え、フォルダーやコレクションの一覧表示を調整できる。

## タイル <a id="tiles"></a>

レイアウトエディターplone.app.mosaicを拡張するアドオン。

* [plone.app.standardtiles](https://github.com/plone/plone.app.standardtiles) - Mosaicで使う標準タイル集。ほかのタイルマネージャーでも利用できる。
* [collective.tiles.carousel](https://github.com/collective/collective.tiles.carousel) - Bootstrap 5のカルーセルコンポーネントを基にした、plone.app.mosaic用のスライダータイル。
* [collective.tiles.advancedstatic](https://github.com/collective/collective.tiles.advancedstatic) - 静的テキストポートレットに似た、HTMLテキスト用のタイル。独自のCSSクラスなど、追加の設定に対応する。
* [collective.tiles.collection](https://github.com/collective/collective.tiles.collection) - コレクションの検索結果を表示するタイル。独自のレイアウトを選択・開発できる。

## イベント <a id="events"></a>

イベントやカレンダーを扱うアドオン。

* [collective.easyformplugin.registration](https://github.com/collective/collective.easyformplugin.registration) - イベントの登録フォームを管理する振る舞いをcollective.easyformに追加する。
* [collective.fullcalendar](https://github.com/collective/collective.fullcalendar) - https://fullcalendar.io を使い、カレンダー形式でイベントを表示する。
* [collective.venue](https://github.com/collective/collective.venue) - 位置情報に対応した会場のコンテンツタイプ。イベントや、場所に関係するほかのコンテンツに使える。

## フォーム <a id="forms"></a>

フォームを作成・利用するためのアドオン。

* [collective.easyform](https://github.com/collective/collective.easyform) - フィールド、ウィジェット、アクション、バリデーターを使い、Web上でPloneのフォームを作成する。入力内容は保存またはメール送信できる。プログラミングせずに独自フォームを作れる、シンプルで使いやすいインターフェイス。
* [collective.fieldedit](https://github.com/collective/collective.fieldedit) - コンテンツタイプの選択したフィールドを編集する柔軟なフォーム。
* [collective.honeypot](https://github.com/collective/collective.honeypot) - フォームをハニーポット方式で保護する。
* [collective.z3cform.datagridfield](https://github.com/collective/collective.z3cform.datagridfield) - 各行がサブフォームになっているデータグリッド（表）フィールド。
* [collective.z3cform.norobots](https://github.com/collective/collective.z3cform.norobots) - 質問と回答の一覧に基づく、人間であることを確認するCAPTCHAウィジェット。
* [plone.formwidgets.hcaptcha](https://github.com/plone/plone.formwidget.hcaptcha) - ボット、スパム、その他の自動化された不正利用からPloneを保護するHCaptchaウィジェット。
* [yafowil.plone](https://github.com/bluedynamics/yafowil.plone) - PythonのフォームライブラリYafowilをPloneと統合するパッケージ。

## 多言語対応 <a id="multilingual"></a>

多言語サイトを管理するためのアドオン。

* [collective.linguatags](https://github.com/collective/collective.linguatags) - Plone用の多言語タグ。
* [plone.app.multilingualindexes](https://github.com/plone/plone.app.multilingualindexes) - plone.app.multilingualで作成した多言語コンテンツの検索に最適化されたインデックス。
* [cs.adminlanguage](https://github.com/codesyntax/cs.adminlanguage) - サイトの言語とは別に、Ploneサイトの編集時に使う言語を設定する。
* [collective.multilingual](https://github.com/collective/collective.multilingual/tree/fix-tests) - 複数言語のコンテンツに対応するアドオン。

## メディア <a id="media"></a>

画像、動画、音声を扱うアドオン。

* [collective.autoscaling](https://github.com/collective/collective.autoscaling) - 大きな画像を自動で縮小する。編集者が過大な画像をアップロードしたとき、データベースのサイズを減らすのに役立つ。
* [collective.behavior.banner](https://github.com/collective/collective.behavior.banner) - バナーと、バナーを使ったスライダーを作成する振る舞い。
* [collective.behavior.relatedmedia](https://github.com/collective/collective.behavior.relatedmedia) - コンテンツタイプに関連するメディア（Image、File）を作成・アップロード・管理する振る舞い。
* [collective.lazysizes](https://github.com/collective/collective.lazysizes) - 軽量な遅延読み込みライブラリlazysizesをPloneに統合する。
* [collective.wavesurfer](https://github.com/collective/collective.wavesurfer) - https://wavesurfer-js.org の音声プレーヤーをPloneに実装する。
* [plone.app.imagecropping](https://github.com/collective/plone.app.imagecropping) - cropper JSライブラリを使い、Ploneで画像を手動で切り抜く。
* [plone.gallery](https://github.com/plone/plone.gallery) - Plone用の写真ギャラリー表示。
* [redturtle.gallery](https://github.com/RedTurtle/redturtle.gallery) - slickで作成したカルーセル付きのギャラリー表示を追加する。
* [wildcard.media](https://github.com/collective/wildcard.media) - 音声と動画のコンテンツタイプや振る舞いを提供する。
* [cs_flickrgallery](https://github.com/codesyntax/cs_flickrgallery) - PloneでFlickrの写真ギャラリーに対応する。

## セキュリティ <a id="security"></a>

* [collective.explicitacquisition](https://github.com/collective/collective.explicitacquisition) - 現在のパス外のコンテンツにacquisitionを通じてアクセスするのを禁止する。
* [collective.geotransform](https://github.com/collective/collective.geotransform) - Ploneのメールアドレスを読みやすさを保ちながら難読化する。
* [collective.contactformprotection](https://github.com/collective/collective.contactformprotection) - 標準の`contact-info`フォームを無効にするか、`plone.formwidget.[h|re]captcha`で保護する。
* [collective.lockdown](https://github.com/collective/collective.lockdown) - サイト管理者がPloneサイトを再設定したり、レイアウトを変更したりするのを防ぐ。

## SEO

検索エンジン最適化のためのアドオン。

* [bda.plone.gtm](https://github.com/bluedynamics/bda.plone.gtm) - Google Tag Managerとの連携。
* [collective.behavior.seo](https://github.com/collective/collective.behavior.seo) - SEO最適化に使う追加フィールドを提供する。
* [collective.splitsitemap](https://github.com/collective/collective.splitsitemap) - 大規模な公開サイトで、分割したサイトマップをキャッシュして提供する。
* [kitconcept.seo](https://github.com/kitconcept/kitconcept.seo) - Voltoを使うサイトで、SEO最適化用の追加フィールドを提供する。

## 認証 <a id="authentication"></a>

Ploneを外部のユーザー情報源や認証サービスと連携させる認証プラグイン。

* [pas.plugins.ldap](https://github.com/collective/pas.plugins.ldap) - LDAPディレクトリーからユーザーとグループを提供する。
* [pas.plugins.authomatic](https://github.com/collective/pas.plugins.authomatic) - AuthomaticによるOAuth1／OAuth2／OpenIDログインをPloneに統合する。
* [pas.plugins.eea](https://github.com/collective/pas.plugins.eea) - pas.plugins.authomaticを基に、ユーザーとグループの列挙機能を提供する。Microsoft Entra IDに対応し、ユーザーとグループの同期も行う。
* [iw.rejectanonymous](https://github.com/collective/iw.rejectanonymous) - セキュリティポリシーのマトリクスやワークフローを変更せず、匿名ユーザーを無条件に拒否する。すべての利用者の認証が必要なエクストラネットなどに向く。
* [pas.plugins.headers](https://github.com/collective/pas.plugins.headers) - リクエストヘッダーを読み、認証に利用する。Apacheやnginxなど、前段のWebサーバーが設定するSAMLヘッダーなどを想定している。
* [dm.zope.saml2](https://pypi.org/project/dm.zope.saml2/) - SAML2に基づくシングルサインオンに対応する。
* [collective.impersonate](https://github.com/collective/collective.impersonate) - 管理者が別のユーザーとして操作できるようにする。実際のコンテンツでワークフローや権限の設定を検証するのに役立つ。
* [collective.pwexpiry](https://github.com/collective/collective.pwexpiry) - Ploneユーザーのパスワードを強化する仕組みと、パスワード攻撃に対する保護を提供する。
* [pas.plugins.oidc](https://github.com/collective/pas.plugins.oidc) - OIDCプロバイダーを使ってログインする。
* [wcs.samlauth](https://github.com/collective/wcs.samlauth) - SAMLプロバイダーを使ってログインする。

## ショップ <a id="shop"></a>

* [bda.plone.productshop](https://github.com/bluedynamics/bda.plone.productshop) - Plone用の柔軟でモジュール化された電子商取引ソリューション。

## エクスポート・インポート・移行 <a id="export-import-and-migrations"></a>

* [collective.exportimport](https://github.com/collective/collective.exportimport) - Ploneのコンテンツと、そのほかの多くのデータをエクスポート・インポートする。plone.restapiを基にした各種移行の主要なソリューション。
* [collective.migrationhelpers](https://github.com/collective/collective.migrationhelpers) - 移行時に使うヘルパーと例。
* [collective.jsonify](https://github.com/collective/collective.jsonify) - PloneのコンテンツをJSONにエクスポートする。
* [collective.transmogrifier](https://github.com/collective/collective.transmogrifier) - インポートやエクスポートに向けてコンテンツを変換する、設定可能なパイプライン。

## テーマ <a id="themes"></a>

* [plonetheme.tokyo](https://github.com/collective/plonetheme.tokyo) - Bootstrap 5を使ったPloneの代替テーマ。
* [plonetheme.grueezibuesi](https://github.com/collective/plonetheme.grueezibuesi) - 子猫をモチーフにしたPlone 6用のテーマ。
* [collective.sidebar](https://github.com/collective/collective.sidebar) - ツールバーとナビゲーションをまとめたサイドバー。
* [collective.editablemenu](https://github.com/RedTurtle/collective.editablemenu) - Plone用のカスタマイズ可能なナビゲーションメニュー。
* [collective.localstyles](https://github.com/collective/collective.localstyles) - CSSファイルを追加し、Ploneサイトの任意のサブセクションに独自のスタイルを適用する。

## 開発 <a id="develop"></a>

Ploneの開発を支援するアドオン。

* [Products.PDBDebugMode](https://github.com/collective/Products.PDBDebugMode) - 例外発生時にpdbセッションを開き、事後デバッグを行う。URLに/pdbを追加すると、現在のコンテキストでpdbセッションを開くこともできる。
* [plone.app.debugtoolbar](https://github.com/plone/plone.app.debugtoolbar) - 稼働中のPloneサイトと調査中のコンテンツのデバッグ情報を表示するツールバー。対話型Pythonシェル、TALES式の評価機能、コードの再読み込みを備える。
* [plone.reload](https://github.com/plone/plone.reload) - サーバーを再起動せずにコードと設定を再読み込みする。
* [Products.PrintingMailHost](https://github.com/collective/Products.PrintingMailHost) - メールを送信する代わりにログに記録する。
* [experimental.gracefulblobmissing](https://github.com/collective/experimental.gracefulblobmissing/) - Ploneのバイナリファイルが見つからない場合を適切に処理する。
* [collective.debugtools](https://github.com/collective/collective.debugtools) - VSCodeやPyCharmなど、debugpy対応クライアント向けに、debugpyを使ったリモートデバッグを追加する。
* [collective.icecream](https://github.com/collective/collective.icecream) - icecreamパッケージを使ってPloneをデバッグ・調査する。
* [collective.patchwatcher](https://github.com/collective/collective.patchwatcher) - パッチや上書きが適用されたファイルを追跡するための補助ツール。
* [collective.pdbpp](https://github.com/collective/collective.pdbpp) - pdbppパッケージを利用できるようにする。
* [collective.relationhelpers](https://github.com/collective/collective.relationhelpers) - Plone 5.xの関連付けを管理・作成・エクスポート・再構築するヘルパー。Plone 6ではコアに統合された。

## システム管理 <a id="sysadmin"></a>

Ploneのデプロイと保守を支援するアドオン。

* [collective.catalogcleanup](https://github.com/collective/collective.catalogcleanup) - 実際のオブジェクトに対応しなくなったデータをカタログから削除する。
* [collective.fingerpointing](https://github.com/collective/collective.fingerpointing) - 各種イベントを追跡し、監査ログに記録する。
* [collective.ftw.upgrade](https://github.com/collective/collective.ftw.upgrade) - Ploneのアドオンやプロジェクトのアップグレード手順を記述・実行しやすくする。
* [collective.ifttt](https://github.com/collective/collective.ifttt) - PloneサイトをIFTTTのエコシステムに参加させる。たとえば、ニュースを公開したらTwitterやFacebookにも投稿する。
* [collective.purgebyid](https://github.com/collective/collective.purgebyid) - Varnishのxkeyモジュールなどを使い、タグに基づいてPloneのキャッシュを無効化する。
* [collective.recipe.backup](https://github.com/collective/collective.recipe.backup) - Plone用の柔軟なバックアップ・復元ソリューション。
* [collective.regenv](https://github.com/collective/collective.regenv) - ファイルに保存した環境変数でレジストリー設定を上書きする。
* [plone-registryfromenviron](https://github.com/bluedynamics/plone-registryfromenviron) - 環境変数でplone.registryの設定を上書きする。
* [collective.revisionmanager](https://github.com/collective/collective.revisionmanager) - データベースを肥大化させることがあるProducts.CMFEditionsの履歴を管理する。
* [collective.sentry](https://github.com/collective/collective.sentry) - エラーを集約し、原因の特定を助けるSentryとの連携。
* [dm.historical](https://pypi.org/project/dm.historical) - データベースの過去の任意の状態にアクセスする。オブジェクトに起きたことの調査や、誤って削除・変更したオブジェクトの復元に役立つ。
* [haufe.requestmonitoring](https://github.com/collective/haufe.requestmonitoring) - Zopeのリクエスト処理イベントを利用した詳細なリクエストログ。想定以上に時間がかかる処理の特定に役立つ。
* [Cloudbrine](https://bluedynamics.github.io/zodb-pgjsonb/ecosystem.html) - ZODBとカタログをPostgreSQLに置き換え、オブジェクトを検索可能なJSONBとして保存するアドオン群。画像の縮小処理をThumborに委譲することもできる。

## ほかのアドオンの探し方 <a id="finding-more-add-ons"></a>

要件に合うアドオンを探すのは難しいことがあります。次の手順を参考にしてください。

* 必要な機能を一覧にする。
* まずこのリストで、要件を満たす既存のアドオンがあるか確認する。
* [PyPI](https://pypi.org/search/?c=Framework+%3A%3A+Plone)でPloneのアドオンを探す。
* GitHubの[Collective](https://github.com/collective)組織を閲覧する。
* GitHubの[Plone](https://github.com/plone)組織を閲覧する。
* または、要件に関する語句をGoogleで検索する。

候補を絞ったら、アドオンを試してください。本番サイトに導入する前に、次の点を検証しましょう。

* 必要な機能をすべて試す。ドキュメントを読み、記載内容を検証する。
* 必要なバージョンで動作するか確認する。
* 保守が続いているか確認する。
* 国際化（i18n）に対応し、ユーザーインターフェイスが利用したい言語に翻訳されているか確認する。
* 問題なくアンインストールできるか確認する。
* 不要な依存関係がないか確認する。

気に入ったアドオンが見つかったら、その選択が適切か、見落としがないかをコミュニティに相談できます。

* 掲示板：[community.plone.org](https://community.plone.org)

要件を完全に満たすものが見つからなければ、次の選択肢があります。

* 利用できるものに合わせて要件を調整する。
* 時間と費用をかけ、要件により合うよう既存のアドオンをカスタマイズする。
* 必要なことをそのまま実現する新しいアドオンを作成する。

## 公式資料 <a id="official-resources"></a>

Ploneの公式情報とサポート資料。

* [plone.org](https://plone.org) - 開発者とコミュニティ向けの公式サイト。
* [community.plone.org](https://community.plone.org) - 質問や支援を求めるための公式コミュニティフォーラム。
* [Discordチャット](https://discord.gg/zFY3EBbjaj) - DiscordでPloneコミュニティのメンバーと会話する。
* [Ploneのサポート](https://plone.org/support) - 支援を受けられる場所の案内。
* [docs.plone.org](https://docs.plone.org) - 開発者・インテグレーター向けの公式ドキュメント。
* [Plone 6のドキュメント](https://6.dev-docs.plone.org) - Plone 6の公式ドキュメント。原文ではPlone 6を今後のバージョンとし、資料は作成途中とされている。
* [training.plone.org](https://training.plone.org) - 開発者・インテグレーター・ユーザー・デザイナー向けの研修。
* [plone.api](https://6.dev-docs.plone.org/plone.api/index.html) - plone.apiのドキュメント。
