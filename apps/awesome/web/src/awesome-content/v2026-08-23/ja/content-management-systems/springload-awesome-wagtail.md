---
title: "Awesome Wagtail"
description: "Wagtailの拡張、テンプレート、学習資料、カンファレンスの講演、編集者向けガイド、コミュニティ、オープンソースのサイト事例。"
licenseSource: "github-springload-awesome-wagtail-readme-md"
---

# Awesome Wagtail

[Wagtail](https://wagtail.org/)は、柔軟性と利用者の使いやすさを重視する、Djangoで動くPythonのCMSです。このリストでは、Wagtailの拡張、プロジェクトのテンプレート、チュートリアル、記事、カンファレンスの講演、ポッドキャスト、動画、編集者向けガイド、コミュニティの交流先、オープンソースのサイト事例を探せます。

関連リスト：[Awesome Django](https://github.com/wsvincent/awesome-django)、[Awesome Python](https://github.com/vinta/awesome-python)。

## <a id="general-resources"></a>一般資料

- [公式サイト](https://wagtail.org/)
- [GitHubリポジトリ](https://github.com/wagtail/wagtail)
- [プロジェクトのロードマップ](https://wagtail.org/roadmap/)

## <a id="apps"></a>アプリ

### <a id="bloggingnews"></a>ブログ・ニュース

- [Wagtail CRX (CodeRed Extensions)](https://github.com/coderedcorp/coderedcms) - マーケティング向けウェブサイトを迅速に開発するための、CodeRed Extensionsを組み合わせたWagtail。
- [Puput](https://github.com/APSL/puput) - Wagtailで実装されたDjangoブログアプリ。

### <a id="rich-text-editor-extensions"></a>リッチテキストエディターの拡張

- [Wagtail EditorJS](https://github.com/Nigel2392/wagtail_editorjs) - Wagtailのページ・画像・文書の選択機能に対応する[EditorJS](https://editorjs.io/)ウィジェット。
- [Wagtail Terms](https://github.com/smark-1/wagtailterms) - Draftailエディターに用語集のエンティティを追加するプラグイン。
- [wagtailmdx](https://github.com/julinodev/wagtailmdx) - [MDXEditor](https://github.com/mdx-editor/editor)をWagtailのテキストフィールドウィジェットとして統合する。

### <a id="widgets"></a>ウィジェット

- [wagtailgmaps](https://github.com/springload/wagtailgmaps) - Wagtailのフィールド向けのシンプルなGoogle Maps住所フォーマッター。
- [Wagtail-Geo-Widget](https://github.com/Frojd/wagtail-geo-widget) - WagtailのGeoDjango PointField向けのGoogle Mapsウィジェット。
- [wagtail-markdown](https://github.com/torchbox/wagtail-markdown) - WagtailのMarkdown対応。
- [wagtail-autocomplete](https://github.com/wagtail/wagtail-autocomplete) - `ForeignKey`、`ParentalKey`、`ManyToMany`フィールド向けの自動補完付き選択機能。
- [wagtail-instance-selector](https://github.com/ixc/wagtail-instance-selector) - 関連項目を作成・選択する`ForeignKey`ウィジェット。Djangoの`raw_id_fields`に類似する。
- [wagtail-generic-chooser](https://github.com/wagtail/wagtail-generic-chooser) - Wagtail管理画面の選択用ポップアップやフォームウィジェットを作るための基底クラスを提供する。ページ・文書・スニペット・画像の組み込み選択機能と同じ外観・操作感を持つ。
- [Wagtail-Color-Panel](https://github.com/marteinn/wagtail-color-panel) - 通常のページフィールドとStreamFieldの両方に、色を選択するパネルを追加する。
- [Wagtail Ace Editor](https://github.com/Nigel2392/wagtail_ace_editor) - Wagtail管理画面に直接組み込むAce Editor。
- [wagtail-html-editor](https://github.com/kkm-horikawa/wagtail-html-editor) - CodeMirror 6、構文ハイライト、Emmet対応、全画面モードを備えた、Wagtail CMS向けの拡張HTMLエディターブロック。

### StreamField

- [wagtail-inventory](https://github.com/cfpb/wagtail-inventory) - 含まれるStreamFieldブロックを基にWagtailページを検索する。
- [Wagtail Code Block](https://github.com/wagtail-nest/wagtailcodeblock) - PrismJSによるリアルタイム構文ハイライトを備えた、Wagtail CMSのStreamFieldコードブロック。

### <a id="static-site-generation"></a>静的サイト生成

- [Wagtail-bakery](https://github.com/wagtail-nest/wagtail-bakery) - DjangoのWagtailサイトを静的ファイルとして生成するヘルパー集。

### <a id="settings-management"></a>設定管理

- [Wagtail-Flags](https://github.com/cfpb/wagtail-flags) - Wagtailサイト向けの機能フラグ。

### <a id="e-commerce"></a>EC

- [django-salesman](https://github.com/dinoperovic/django-salesman) - Wagtail modeladminとの統合に対応する、Django向けのヘッドレスECフレームワーク。

### <a id="seo-and-smo"></a>SEOとSMO

- [wagtail-meta-preview](https://github.com/Frojd/wagtail-meta-preview) - Wagtail管理画面でFacebook共有、Twitter共有、Google検索結果をプレビューするパネルを提供する。
- [Wagtail Yoast](https://github.com/Aleksi44/wagtailyoast) - SEOの推奨事項を通じて文章の読みやすさを改善するツール。
- [Wagtail SEO](https://github.com/coderedcorp/wagtail-seo) - Wagtailの検索エンジン・ソーシャルメディア最適化。

### <a id="customer-experience"></a>顧客体験

- [Wagtail Experiments](https://github.com/torchbox/wagtail-experiments) - Wagtail向けのA/Bテスト。
- [Wagtail Personalisation](https://github.com/wagtail-nest/wagtail-personalisation) - 管理画面で直接設定するルールに基づくセグメントを使い、編集者がページ全体や一部をカスタマイズできるパーソナライゼーションモジュール。

### <a id="security"></a>セキュリティ

- [wagtail-2fa](https://github.com/labd/wagtail-2fa) - django-otpとの統合によってWagtailに二要素認証を追加する。

### <a id="media"></a>メディア

- [wagtailmedia](https://github.com/torchbox/wagtailmedia) - Wagtail管理画面で動画・音声ファイルを管理するモジュール。
- [Wagtail Transcription](https://github.com/j-bodek/wagtail-transcription) - YouTube動画から文字起こしを自動生成するフィールドを提供する。

### <a id="translations"></a>翻訳

- [Wagtail Localize](https://github.com/wagtail/wagtail-localize) - Wagtail CMS向けの翻訳プラグイン。
- [Wagtail Modeltranslation](https://github.com/infoportugal/wagtail-modeltranslation) - [django-modeltranslation](https://github.com/deschler/django-modeltranslation)をWagtailのパネルシステムへ統合するミックスインモデルを含むアプリ。

### <a id="forms"></a>フォーム

- [Wagtail組み込みのフォームビルダー](https://docs.wagtail.org/en/stable/reference/contrib/forms/) - 一般的な用途向け。
- [Wagtail ReCaptcha](https://github.com/wagtail-nest/wagtail-django-recaptcha) - wagtail-django-captchaは、Wagtailのフォームビルダーで[django-recaptcha](https://github.com/django-recaptcha/django-recaptcha)フィールドを統合する。
- [Wagtail Jotform](https://github.com/torchbox/wagtail-jotform) - WagtailでJotformsを使うためのプラグイン。
- [Wagtail Model Forms](https://github.com/vicktornl/wagtail-model-forms) - モデルやスニペットで利用できるWagtailフォームビルダーの機能。
- [Wagtail Formation](https://github.com/mwesterhof/wagtail_formation) - Wagtail CMSで管理する動的なフォーム。

### <a id="testing"></a>テスト

- [wagtail-linkchecker](https://github.com/neon-jungle/wagtail-linkchecker) - Wagtailサイトのリンク切れを探すためのツール。
- [Wagtail Accessibility](https://github.com/wagtail-nest/wagtail-accessibility) - Wagtailサイトのコンテンツに対するアクセシビリティ検査。
- [Wagtail Factories](https://github.com/wagtail/wagtail-factories) - Wagtail向けのFactory boyクラス。

### <a id="modeladmin"></a>ModelAdminの拡張

- [wagtail-admin-list-controls](https://github.com/ixc/wagtail-admin-list-controls) - Wagtail modeladminの一覧ビューに、高度な検索・並べ替え・レイアウト制御を追加する。
- [Wagtail Rangefilter](https://github.com/wunderweiss/wagtail-rangefilter) - django-admin-rangefilterをWagtailのModelAdminに統合する。
- [Wagtail-TreeModelAdmin](https://github.com/cfpb/wagtail-treemodeladmin) - Djangoモデル間の関係をページエクスプローラーのようにたどれる、WagtailのModelAdmin拡張。

### <a id="content-management"></a>コンテンツ管理

- [Wagtail Sharing](https://github.com/cfpb/wagtail-sharing) - Wagtailの下書きの共有を容易にする。
- [Wagtail Transfer](https://github.com/wagtail/wagtail-transfer) - 同じWagtailプロジェクトの複数インスタンス間でコンテンツを転送する公式拡張。
- [Wagtail Content Import](https://github.com/torchbox/wagtail-content-import) - カスタマイズ可能なマッピングシステムを使い、Google DocsやDocxからStreamFieldへコンテンツを取り込む。
- [Wagtail Headless Preview](https://github.com/torchbox/wagtail-headless-preview) - ヘッドレス構成のWagtail向けのプレビュー。
- [Wagtail-FEdit](https://github.com/Nigel2392/wagtail_fedit) - Wagtailサイトにフロントエンド編集を追加する。

### <a id="misc"></a>その他

- [wagtailmenus](https://github.com/jazzband/wagtailmenus) - Wagtailプロジェクトのメニューの管理・表示を支援する。
- [Wagtail Gridder](https://github.com/wharton/wagtailgridder) - Google画像検索に似たカードのグリッドレイアウト。カードの詳細を表示する拡張領域を備える。
- [Wagtail App Pages](https://github.com/mwesterhof/wagtail_app_pages) - URL設定とDjangoビューを使ってWagtailページを拡張する。
- [Wagtail Cache](https://github.com/coderedcorp/wagtail-cache) - Djangoのキャッシュミドルウェアを使う、シンプルなWagtailのページキャッシュ。
- [Wagtail Orderable](https://github.com/elton2048/wagtail-orderable) - 管理画面でのドラッグ＆ドロップによる並べ替えを支援するミックスイン。
- [Wagtail Resume](https://github.com/adinhodovic/wagtail-resume) - 開発者向けの履歴書作成を簡単にするWagtailプロジェクト。
- [Wagtail Trash](https://github.com/Frojd/wagtail-trash) - 削除操作でページを削除する代わりに「ゴミ箱」へ移動する。
- [wagtail-pdf-view](https://github.com/donhauser/wagtail-pdf) - Wagtail CMS向けのPDFレンダリングビュー。
- [Wagtail Grapple](https://github.com/torchbox/wagtail-grapple) - GraphQLエンドポイントを構築するためのWagtailアプリ。
- [Wagtail Cache Invalidator](https://github.com/vicktornl/wagtail-cache-invalidator) - Wagtail CMS内のインターフェースで、フロントエンドのキャッシュを無効化・削除する。

## <a id="tools"></a>ツール

### <a id="templates--starter-kits"></a>テンプレートとスターターキット

- [Pipit](https://github.com/Frojd/Wagtail-Pipit) - Reactで描画するフロントエンドを備えたWagtail CMSのボイラープレート。開発ワークフローの簡素化を目的とする。
- [cookiecutter-wagtail-package](https://github.com/wagtail/cookiecutter-wagtail-package) - Wagtail拡張パッケージを作るためのcookiecutterテンプレート。
- [Wagtail for Platform.sh](https://github.com/platformsh-templates/wagtail) - Platform.sh向けのWagtailテンプレート。
- [cookiecutter-wagtail-vix](https://github.com/engineervix/cookiecutter-wagtail-vix) - 最小限の構成で必要な機能を備え、再利用できる、Wagtailプロジェクトの出発点となるひな型。
- [Sites Conformes](https://github.com/numerique-gouv/sites-conformes) - 国のデザインシステム（Système de design de l'État）に基づくサイトを作成・管理する、Wagtail CMSベースのコンテンツ管理ツール。原文ではアクセシビリティと安全性に対応すると説明されている。

### <a id="templates-start-command"></a>テンプレート（startコマンド）

- [Wagtail template: Your first Wagtail site](https://github.com/thibaudcolas/wagtail-tutorial-template) - Wagtail公式のYour first Wagtail siteチュートリアルの解答を含む、Wagtailプロジェクトの開始用テンプレート。
- [Wagtail News Template](https://github.com/wagtail/news-template) - ニュースサイト向けのWagtailテンプレート。

## <a id="resources"></a>リソース

### <a id="getting-started"></a>入門

- [Getting started in Wagtail, a newcomer's perspective](https://wagtail.org/blog/getting-started-wagtail-newcomers-perspective/) - しばらくの間、主なツールとしてほぼDrupalだけを使っていた著者が、Wagtailを使った構築を依頼された経験を紹介する。
- [Présentation de Wagtail, le dernier CMS Django](https://makina-corpus.com/django/presentation-de-wagtail-le-dernier-cms-django) - 当時のDjangoエコシステムで比較的新しいCMSとしつつ、Wagtailの多くの機能を紹介する記事。
- [Getting Started With Wagtail](https://vix.digital/insights/getting-started-wagtail/) - Wagtailとそのコミュニティに関わってきた豊富な経験を基に、開発者がWagtailを使い始める際のよくある落とし穴を紹介する。

### <a id="articles"></a>記事

- [Wagtail Tutorials: Build Blog Step by Step](https://saashammer.com/blog/wagtail-tutorials/) - 標準的なブログをゼロから段階的に作る方法を学ぶチュートリアル。
- [Multi-tenancy with Wagtail](https://cynthiakiser.com/blog/2023/11/01/multitenancy-with-wagtail.html) - Wagtailの堅牢なマルチテナント対応を扱う、複数回のガイド。
- [How to Prevent Users from Creating Pages by Type](https://timonweb.com/wagtail/how-to-prevent-users-from-creating-certain-page-types-in-wagtail-cms/)
- [How to Create and Manage Menus of Wagtail application](https://saashammer.com/blog/how-to-create-and-manage-menus-in-wagtail/)

### <a id="presentations"></a>講演

- [An Introduction to Wagtail](https://www.youtube.com/watch?v=glIIF-kBXf0) - 講演者：Eloise "Ducky" Macdonald-Meyer。 PythonのウェブフレームワークDjangoで構築されたCMS、Wagtailを紹介する講演。
- [DjangoCon US 2015 - Wagtail - Yet Another Django CMS](https://www.youtube.com/watch?v=6j0NVq6g4FE) - 講演者：Tom Dyson。 Tom Dysonが所属する制作会社が新しいCMSを作ることにした理由、成長するオープンソースプロジェクトを運営する中で得た教訓、Wagtailのバージョン2以降へのロードマップを説明する。[スライド](https://speakerdeck.com/tomdyson/wagtail-yet-another-cms-djangocon-us-2015)。
- [Wellington Wagtail CMS Meetup - Meet Wagtail](https://docs.google.com/presentation/d/19EGWFtfHovHSAvyHCnLbxK50IAR2o7WwKd709cqi9p4/edit) - 講演者：Springload開発チームのJosh、Jordi、Rich。 Wagtailの主な機能を紹介する入門セッション。
- [DjangoCon US 2016 - Atomic Wagtail](https://www.youtube.com/watch?v=kqAKiouk1lY) - 講演者：Kurt Wall。 Brad Frostのアトミックデザイン原則がウェブ設計で広まる中、Wagtailとは何か、原則と組み合わせる方法、遭遇しうる課題と対処案を説明する。
- [PyCon Australia – Comparing Wagtail, Django CMS and Mezzanine](https://www.youtube.com/watch?v=3UC1MNFOjEI) - 講演者：Adam Brenecki。 各CMSのアプローチ・長所・短所と、開発者やコンテンツ編集者にとっての意味を比較する。
- [Wagtail — еще одна CMS на Django](https://www.youtube.com/watch?v=yRmZ6WUfoOc) - 講演者：Mikalai Radchuk。 ロシア語でWagtailを紹介する講演。
- [Wagtail & Agile – Wagtail Space 2017](https://www.youtube.com/watch?t=2m21s&v=-Qii_AyQsxE) - 講演者：Edd Baldry。
- [Deploy Wagtail to the Divio Cloud – Wagtail Space 2017](https://www.youtube.com/watch?t=38m13s&v=-Qii_AyQsxE) - 講演者：Daniele Procida。
- [All about Wagtail – Wagtail Space 2017](https://www.youtube.com/watch?v=OedQi5W3Zho) - 講演者：Robin van der Rijst。
- [Presenting Wagtail Clear StreamField, a modular StreamField app – Wagtail Space 2017](https://www.youtube.com/watch?t=19m1s&v=OedQi5W3Zho) - 講演者：Edd Baldry。
- [Wagtail Experiments, easy A/B testing for your Wagtail sites – Wagtail Space 2017](https://www.youtube.com/watch?t=34m37s&v=OedQi5W3Zho) - 講演者：Tom Dyson。
- [Wagtail's preview, a new hope – Wagtail Space 2017](https://www.youtube.com/watch?v=ObM2pUgY-bs) - 講演者：Bertrand Bordage。
- [The Zen of Wagtail – Wagtail Space 2017](https://www.youtube.com/watch?t=16m38s&v=ObM2pUgY-bs) - 講演者：Matt Westcott。
- [Plone to Wagtail – Wagtail Space 2017](https://www.youtube.com/watch?t=2m57s&v=hZcuq8WJVew) - 講演者：Coen van der Kamp。
- [Hundreds of Wagtail in Flight – Wagtail Space 2017](https://www.youtube.com/watch?t=24m9s&v=hZcuq8WJVew) - 講演者：Simon de Haan。
- [How Google uses Wagtail – Wagtail Space 2018](https://www.youtube.com/watch?v=lh9nmN1mzwQ&t=1937s) - 講演者：Kevin Chung。
- [Introducing Draft.js in Wagtail – Wagtail Space 2018](https://www.youtube.com/watch?v=lh9nmN1mzwQ&t=2690s) - 講演者：Thibaud Colas。 [発表資料](https://thib.me/introducing-draft-js-in-wagtail)。
- [Let It Go – Wagtail Space 2018](https://www.youtube.com/watch?v=lh9nmN1mzwQ&t=3938s) - 講演者：Matt Wescott。
- [Developing Solutions for Girls, by Men – Wagtail Space 2018](https://www.youtube.com/watch?v=lh9nmN1mzwQ&t=5184s) - 講演者：Lisa Adams。
- [Wagtail’s first hatch – Wagtail Space 2018](https://www.youtube.com/watch?v=P8RUQE7Djdg&t=265s) - 講演者：Bertrand Bordage。
- [The Word Problem – Wagtail Space 2018](https://www.youtube.com/watch?v=P8RUQE7Djdg&t=2841s) - 講演者：Tom Dyson。
- [Wagtail on Divio Cloud – Wagtail Space 2018](https://www.youtube.com/watch?v=P8RUQE7Djdg&t=3856s) - 講演者：Daniele Procida。
- [Chopping the head off Wagtail and sticking it back on – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=152s) - 講演者：Tony Yates。
- [StreamField editor at UWKM – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=400s) - 講演者：Geert jan Hoogeslag。
- [Things i learned at Wagtail Space – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=719s) - 講演者：Codie Roelf。
- [Fly Wagtail to a PyCon – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=912s) - 講演者：Daniele Procida。
- [Wagtail Performance – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=1345s) - 講演者：Michael van Tellingen。 [コード](https://gist.github.com/mvantellingen/daebda6abbaa9a5ed0888f886a77fcf0)。
- [Mutliple images uploader – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=1661s) - 講演者：Rajeev J Sebastian。
- [Wagtail Space easter egg team demo – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=2057s) - 講演者：Lars。 [コード](https://github.com/specialunderwear/haunted-wagtail)。
- [Wagtail Space 2019 – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=2278s) - 講演者：Maarten Kling。
- [Wagtail in 2018 – Wagtail Space US 2018](https://www.youtube.com/watch?v=ICKYMO0YoFI&index=2&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) - 講演者：Tom Dyson。
- [What the Wagtail Docs Don't Tell You – Wagtail Space US 2018](https://www.youtube.com/watch?v=PCkxBNXWM64&index=3&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) - 講演者：Lacey Williams Henschel。
- [Django Logging for Wagtail – Wagtail Space US 2018](https://www.youtube.com/watch?v=kkztl9ORUKQ&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV&index=4) - 講演者：Ryan Sullivan。
- [Scaling Wagtail for 100 Million Girls – Wagtail Space US 2018](https://www.youtube.com/watch?v=AiOJAKE0M0I&index=5&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) - 講演者：Lisa Adams、Codie Roelf。
- [Using Wagtail to Fight for Press Freedom – Wagtail Space US 2018](https://www.youtube.com/watch?v=FYqbqsa04T8&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV&index=6) - 講演者：Harris Lapiroff。
- [Choosing Wagtail for Columbia University – Wagtail Space US 2018](https://www.youtube.com/watch?v=OiZScRcluCo&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV&index=7) - 講演者：Zarina Mustapha。
- [Running a Multi-Site Newsroom in Wagtail – Wagtail Space US 2018](https://www.youtube.com/watch?v=lMCjInjAz-M&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV&index=8) - 講演者：Ryan Verner。
- [Wagtail in the Cloud – Wagtail Space US 2018](https://www.youtube.com/watch?v=N1MeTEPRmJA&index=9&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) - 講演者：Daniele Procida。
- [Beheading Wagtail: Wagtail as a Headless CMS – Wagtail Space US 2018](https://www.youtube.com/watch?v=HZT14u6WwdY&index=10&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) - 講演者：Michael Harrison。
- [Learning Wagtail – Wagtail Space US 2018](https://www.youtube.com/watch?v=C-tXt5fLj_s&index=11&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) - 講演者：Dawn Wages。
- [Sharing is Caring – Wagtail Space US 2018](https://www.youtube.com/watch?v=6AXyg6vvMTE&index=12&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) - 講演者：Andy Chosak。
- [Lightning Talks – Wagtail Space US 2018](https://www.youtube.com/watch?v=uoxyBIpaXTU&index=13&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV)
- [Wagtail: когда хочется чего-то приятнее, чем просто Django – Moscow Python Conf++ 2018](https://www.youtube.com/watch?v=xPPfTvLS7oQ) - 講演者：Игорь Мосягин。
- [The State of Wagtail – Wagtail Space 2019](https://www.youtube.com/watch?t=592&v=MAzZ2lhMhzM) - 講演者：Tom Dyson。
- [Image rotation feature – Wagtail Space 2019](https://www.youtube.com/watch?t=2057&v=MAzZ2lhMhzM) - 講演者：Chris Adams。 コード（原文にリンクなし）。
- [Debug templates – Wagtail Space 2019](https://www.youtube.com/watch?t=2264&v=MAzZ2lhMhzM) - 講演者：Coen van der Kamp。
- [Wagtail Headless with HATEOAS – Wagtail Space 2019](https://www.youtube.com/watch?t=2567&v=MAzZ2lhMhzM) - 講演者：Duco Dokter。
- [Building a Planet Friendly Web (with Wagtail) – Wagtail Space 2019](https://www.youtube.com/watch?t=2926&v=MAzZ2lhMhzM) - 講演者：Chris Adams。
- [\[WIP\] The future of (rich text) authoring experiences in Wagtail – Wagtail Space 2019](https://www.youtube.com/watch?t=4067&v=MAzZ2lhMhzM) - 講演者：Thibaud Colas。
- [Wagtail & Whatsapp – Wagtail Space 2019](https://www.youtube.com/watch?t=47&v=CSwpj-jyjP4) - 講演者：Lisa Adams、Codie Roelf。
- [Slack2Wagtail – Wagtail Space 2019](https://www.youtube.com/watch?t=785&v=CSwpj-jyjP4) - 講演者：Coen van der Kamp、Lucas Moeskops。
- [Wagtail and Oscar – Wagtail Space 2019](https://www.youtube.com/watch?t=1634&v=CSwpj-jyjP4) - 講演者：Lars van de Kerkhof。
- [wagtail-textract – Wagtail Space 2019](https://www.youtube.com/watch?t=3313&v=CSwpj-jyjP4) - 講演者：Kees Hink。 [コード](https://github.com/fourdigits/wagtail_textract)。
- [Django 2.2 compatibility – Wagtail Space 2019](https://www.youtube.com/watch?t=3468&v=CSwpj-jyjP4) - 講演者：Matt Wescott。
- [SEO dashboard – Wagtail Space 2019](https://www.youtube.com/watch?t=3937&v=CSwpj-jyjP4) - 講演者：Janneke Janssen。 [コード](https://github.com/LUKKIEN/wagtail-marketing-addons)。
- [My First Wagtail Contribution – More formats in RichText Editor – Wagtail Space 2019](https://www.youtube.com/watch?t=4126&v=CSwpj-jyjP4) - 講演者：Arifin Ibne Matin。
- [Fly, Wagtail, fly! – Wagtail Space 2019](https://www.youtube.com/watch?t=4404&v=CSwpj-jyjP4) - 講演者：Daniele Procida。
- [Wagtail & GraphQL – Wagtail Space 2019](https://www.youtube.com/watch?t=24&v=YydSbL8gMS4) - 講演者：Arthur Bayr。
- [Writing (code) for authors – Wagtail Space US 2019](https://www.youtube.com/watch?v=Ihsrki0d1G8&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=1) - 講演者：Brian Smith、Eric Sherman。 [スライド](https://docs.google.com/presentation/d/1z61u0uKwJxmYS4Zawbu4Zgg-kCtInd1VgsEg-rnwzBE/edit)。
- [Saving Lives With Wagtail: Recovery Meetings Across the World – Wagtail Space US 2019](https://www.youtube.com/watch?v=QlLWvNT5Wrk&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=2) - 講演者：Timothy Allen。
- [Why we chose Wagtail for CodeRed CMS – Wagtail Space US 2019](https://www.youtube.com/watch?v=1JUOAAmLQFA&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=3) - 講演者：Vince Salvino。
- [Building a Wagtail-based site and authoring environment with accessibility in mind – Wagtail Space US 2019](https://www.youtube.com/watch?v=CxjlAI6R7iY&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=4) - 講演者：Zarina Mustapha。
- [Making Wagtail Accessible – Wagtail Space US 2019](https://www.youtube.com/watch?v=tdB1I_gSCeY&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=5) - 講演者：Thibaud Colas。 [スライド](https://docs.google.com/presentation/d/15y8XIe7SL-RYEO9tEE8n9chx80_X4j4PbczGGM-cEGE/edit)。
- [Everyone can fly a flag – Wagtail Space US 2019](https://www.youtube.com/watch?v=ZqwmgsqMTEs&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=6) - 講演者：Will Barton。 [スライド](https://docs.google.com/presentation/d/1-A1doke2ylcqG72oIP-MLiX8SKXKkKNxQeKxddYUGBw/edit)。
- [Architecting for a multi-domain site – Wagtail Space US 2019](https://www.youtube.com/watch?v=xMbJmHF7kCw&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=7) - 講演者：Ben Beecher。 [スライド](https://slides.com/benbeecher/mds/)。
- [Contributions can be more than code – Wagtail Space US 2019](https://www.youtube.com/watch?v=tK-3kEBbblg&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=8) - 講演者：Kalob Taulien。
- [Thoughtful Code Review – Wagtail Space US 2019](https://www.youtube.com/watch?v=RY0K1BEV-_U&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=9) - 講演者：Naomi Morduch Toubman。 [スライド](https://docs.google.com/presentation/d/1b_Hda8381G6mMc7uzYDc2EYjocfwSi2TYiRMI7d4e3I/edit)。
- [Solving your problems by spelunking the Wagtail code – Wagtail Space US 2019](https://www.youtube.com/watch?v=BMoOhjgirFM&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=10) - 講演者：Harris Lapiroff。 [スライド](https://harrislapiroff.github.io/wagtail-space-us-2019/)。
- [The State of Wagtail: 2019 – Wagtail Space US 2019](https://www.youtube.com/watch?v=s29vaGnFcq8&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=11) - 講演者：Tom Dyson。
- [Wagtail Guide - Getting started - Wagtail Space US 2022](https://www.youtube.com/watch?v=E3-kFY6jPPY) - 講演者：Coen van der Kamp。
- [A New Approach to Multitenant Wagtail - Wagtail Space US 2022](https://www.youtube.com/watch?v=WN0L4YNrWes) - 講演者：Stephanie C. Smith、Addison Hardy。
- [The Wagtail Marketplace for Games-based Courses - Wagtail Space 2022](https://www.youtube.com/watch?v=ueou6CxiR3Y) - 講演者：Sarah Toms。
- [The Wagtail Ecosystem - Wagtail Space US 2022](https://www.youtube.com/watch?v=4Qd43nsxmoc) - 講演者：Vince Salvino。
- [Wagtail charts and graphs - Wagtail Space US 2022](https://www.youtube.com/watch?v=QK-Vhlpos3Q) - 講演者：Sævar Öfjörð Magnússon、Arnar Tumi Þorsteinsson。
- [Wagtail as a headless CMS for JavaScript frontends - Wagtail Space US 2022](https://www.youtube.com/watch?v=bYRQ492BED0) - 講演者：Tommaso Amici。
- [Adding a GraphQL API to Wagtail - Wagtail Space US 2022](https://www.youtube.com/watch?v=_O5isU354vg) - 講演者：Patrick Arminio。
- [Bringing JSONField into Wagtail Core - Wagtail Space US 2022](https://www.youtube.com/watch?v=XtazMDNdlK8) - 講演者：Sage Abdullah。
- [Wagtail vs. WordPress - Wagtail Space US 2022](https://www.youtube.com/watch?v=Vl2g7H3aodw) - 講演者：Kalob Taulien。
- [Designing the new page editor - Wagtail Space US 2022](https://www.youtube.com/watch?v=t2xiPJ91UCE) - 講演者：Phil Dexter、Ben Enright。
- [5 Things I Learned About Wagtail the Hard Way - Wagtail Space US 2022](https://www.youtube.com/watch?v=LNqVzLkZkig) - 講演者：Meagen Voss。
- [Tips for Maintaining Wagtail Packages - Wagtail Space US 2022](https://www.youtube.com/watch?v=Zh608nVBrEw) - 講演者：Tim Allen。
- [Wagtail Guide - Wagtail Space US 2022](https://www.youtube.com/watch?v=W0tL-5V5BWA) - 講演者：Coen van der Kamp。
- [The state of Wagtail 2022 - Wagtail Space NL 2022](https://www.youtube.com/watch?v=4D49RENHfoM) - 講演者：Tom Dyson。
- [Choosers - Wagtail Space NL 2022](https://www.youtube.com/watch?v=nSjVAISLr4M) - 講演者：Matthew Westcott。
- [Working with Image Filters - Wagtail Space NL 2022](https://www.youtube.com/watch?v=gCGT51BcTdM) - 講演者：Arnar Tumi Þorsteinsson。
- [Things I learned - Wagtail Space NL 2022](https://www.youtube.com/watch?v=xG5-s48TZt8) - 講演者：Dan Braghis。
- [Wagtail Roadrunner Beep Beep - Wagtail Space NL 2022](https://www.youtube.com/watch?v=ynlFUcutSWQ) - 講演者：Lars van de Kerkhof。
- [Dockerising wagtail projects in 5 minutes - Wagtail Space NL 2022](https://www.youtube.com/watch?v=PgkpBMoN4UY) - 講演者：Sævar Öfjörð Magnússon。
- [Wagtail in the News Room - Wagtail Space NL 2022](https://www.youtube.com/watch?v=B85HwmX5uaw) - 講演者：Sævar Öfjörð Magnússon、Arnar Tumi Þorsteinsson。
- [Digital Nomad - Wagtail Space NL 2022](https://www.youtube.com/watch?v=9Evrwzpg-dw) - 講演者：Maikel Martens。
- [Unobtrusive internationalisation - Wagtail Space NL 2022](https://www.youtube.com/watch?v=_dhScxTdtjA) - 講演者：Lars van de Kerkhof。
- [Moving Wagtail pages - Wagtail Space NL 2022](https://www.youtube.com/watch?v=OFqPKffSVWI) - 講演者：Viggo de Vries。
- [Wagtail architecture options, or should I go headless - Wagtail Space NL 2022](https://www.youtube.com/watch?v=JMULuz6RzjQ) - 講演者：Dan Braghis。
- [Wagtail headless and NextJS frontend - Wagtail Space NL 2022](https://www.youtube.com/watch?v=s8cJhFtjqZA) - 講演者：Lucas Moeskops。
- [State of Wagtail - Wagtail Space US 2024](https://www.youtube.com/watch?v=TKLYeKpFbno&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB) - 講演者：Tom Dyson。
- [Pleasant Publishing Patterns - Wagtail Space US 2024](https://www.youtube.com/watch?v=ZXGcqY-OeYk&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB) - 講演者：Michael Trythall。
- [Accessibility for Complex Components and Interfaces - Wagtail Space US 2024](https://www.youtube.com/watch?v=AC1gy9R2Z6c&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) - 講演者：Kara Gaulrapp。
- [One Thousand and One Wagtail Sites - Wagtail Space US 2024](https://www.youtube.com/watch?v=yciVqzSGWTw&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB) - 講演者：Vince Salvino。
- [3D Files with Wagtail - Wagtail Space US 2024](https://www.youtube.com/watch?v=ccBrb50xRCM&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) - 講演者：Dawn Wages、Mira Gibson。
- [Wagtail, Reactivated - Headless Without the Headache - Wagtail Space US 2024](https://www.youtube.com/watch?v=mQsI8Ji3_LY&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB) - 講演者：Josh Marantz。
- [Lightning Talks June 20 - Wagtail Space US 2024](https://www.youtube.com/watch?v=UuE3Y15To8Q&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) - ライトニングトーク。
- [LLMs and Wagtail - Wagtail Space US 2024](https://www.youtube.com/watch?v=b-luIDn80bc&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB) - 講演者：Emily Topp-Mugglestone。
- [PudlStack - Building Wagtail Affinity Group Communities That Offer Bot Helpers - Wagtail Space US 2024](https://www.youtube.com/watch?v=SNEeo_ABQ7g&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB) - 講演者：Anthony Garcia。
- [Auditing Wagtail Content - Wagtail Space US 2024](https://www.youtube.com/watch?v=a1O3hKib8Ns&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB&index=2&pp=i) - 講演者：Will Barton、Chuck Sebian-Lander。
- [What Editors Really Want - Wagtail Space US 2024](https://www.youtube.com/watch?v=1qF5wC4rCY4&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) - 講演者：Meagen Voss。
- [Improving the Editor Experience through Validation - Wagtail Space US 2024](https://www.youtube.com/watch?v=UVBHciwpgKM&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) - 講演者：Scott Cranfill。
- [sditail: Extending Wagtail CMS as a Spatial Data Infrastructure - Wagtail Space US 2024](https://www.youtube.com/watch?v=XxdJpYNT4EM&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) - 講演者：César Benjamin。
- [Packages! Packages! Packages! - Wagtail Space US 2024](https://www.youtube.com/watch?v=r5ovJPWvxL4&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) - パネルディスカッション。
- [Lightning Talks June 21 - Wagtail Space US 2024](https://www.youtube.com/watch?v=vazMp9jTlEU&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) - ライトニングトーク。
- [The State of Wagtail - Wagtail Space NL 2024](https://www.youtube.com/watch?v=P9Ftbu5NVUI&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=1) - 講演者：Tom Dyson。
- [Headless Wagtail Strategies - Wagtail Space NL 2024](https://www.youtube.com/watch?v=nweVHX5DgWU&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=2) - 講演者：Rémy Sanchez。
- [Wagging HubSpot's Tail - Wagtail Space NL 2024](https://www.youtube.com/watch?v=VUoOoRxlWrU&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=3) - 講演者：Simon Blanchard、Joost Meijerink。
- [Wagtail and Caching - Wagtail Space NL 2024](https://www.youtube.com/watch?v=vBdG2GfAZAo&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=4) - 講演者：Jake Howard。
- [Faster Thumbnails for a Faster Web - Wagtail Space NL 2024](https://www.youtube.com/watch?v=0kHhGBxwzeM&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=5) - 講演者：Alex Tomkins。
- [The impossible art of making everyone happy - Wagtail Space NL 2024](https://www.youtube.com/watch?v=v3KEaMTfKg0&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=6) - 講演者：Matthew Westcott。
- [Bringing modern authentication to Wagtail: WebAuthn and Passkeys - Wagtail Space NL 2024](https://www.youtube.com/watch?v=qJwg2kFtFW4&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=7) - 講演者：Storm Heg。
- [How to abuse Wagtail's StreamFields as much as you want - Wagtail Space NL 2024](https://www.youtube.com/watch?v=tOBGJ0riDRw&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=8) - 講演者：Rémy Sanchez。
- [Wagtail AI and Wagtail Vector Index - Wagtail Space NL 2024](https://www.youtube.com/watch?v=jHuhX_SNF1s&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=9) - 講演者：Dan Braghiș。
- [Wagtail Translate - Wagtail Space NL 2024](https://www.youtube.com/watch?v=QxnC70Bwj0k&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=10) - 講演者：Coen van der Kamp。
- [You've been caching your content website wrong - Wagtail Space NL 2024](https://www.youtube.com/watch?v=bWF06aCjbUM&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=11) - 講演者：Rémy Sanchez。
- [Universal Listings - Wagtail Space NL 2024](https://www.youtube.com/watch?v=aNto27_lfJ4&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=12) - 講演者：Sage Abdullah。
- [Recovering deleted Django models - Wagtail Space NL 2024](https://www.youtube.com/watch?v=TB64DtQZeB0&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=13) - 講演者：Jake Howard。
- [Wagtail Dashboards - Wagtail Space NL 2024](https://www.youtube.com/watch?v=0msxKe0RoNw&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=14) - 講演者：Judith van Leersum、Emmelien Schiet。
- [Multi-lingual websites in Wagtail - Wagtail Space NL 2024](https://www.youtube.com/watch?v=5rPvOsVeRhA&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=15) - 講演者：Paul Stevens。
- [State of Wagtail 2025 - Wagtail Space 2025](https://www.youtube.com/watch?v=9Kduqs6NH7Q&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=2) - 講演者：Thibaud Colas。
- [Wagtail in industry: from farming to finance - Wagtail Space 2025](https://www.youtube.com/watch?v=DH87OzXzj28&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=3) - 講演者：Vince Salvino。
- [Redesigning and refactoring Wagtail components - Wagtail Space 2025](https://www.youtube.com/watch?v=8h0fxe7b8s8&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=4) - 講演者：Mariana。
- [Building Better Wagtail Sites: Traits of a Good CMS - Wagtail Space 2025](https://www.youtube.com/watch?v=n5KHTLS22YE&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=5) - 講演者：Michael Trythall。
- [REX: Building a SaaS from Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=3T-ITKTByH4&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=6) - 講演者：Sébastien Corbin。
- [Implement the French Government Design System in Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=8_CBltGuv0g&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=7) - 講演者：Sylvain Boissel、Lucie Laporte。
- [Wagtail Nest: Maintaining Community Packages Together - Wagtail Space 2025](https://www.youtube.com/watch?v=h0kKy4R5kNY&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=8) - 講演者：Coen van der Kamp。
- [Automated Data Loader: Wagtail for Weather Data Integration - Wagtail Space 2025](https://www.youtube.com/watch?v=iTxcq__Gcr4&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=9) - 講演者：Erick Otenyo、Grace Amondi。
- [Building Flexible Wagtail CMS Experiences for Editors - Wagtail Space 2025](https://www.youtube.com/watch?v=-azqKJdEivk&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=10) - 講演者：Annette Lewis、Eric Sherman。
- [Building a little YouTube on Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=hLw3FWb2LfQ&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=11) - 講演者：Tom Dyson。
- [Creating connections between stories and objects using AI - Wagtail Space 2025](https://www.youtube.com/watch?v=Wkjm8xdV_6c&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=12) - 講演者：Trish Thomas。
- [AI in Wagtail: responsible innovation for content editors - Wagtail Space 2025](https://www.youtube.com/watch?v=n2fIFJLSH5E&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=16) - 講演者：Sage Abdullah、Tom Usher。
- [The Bogotá Digital Library: A Wagtail Success Story - Wagtail Space 2025](https://www.youtube.com/watch?v=cbANVWkDIs0&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=17) - 講演者：Juan Aguayo。
- [Wagtail and AI Agentic Coding - Wagtail Space 2025](https://www.youtube.com/watch?v=pukU8F3ciEM&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=18) - 講演者：Maciej Baron。
- [The Impact of A Contribution to Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=sW8k4F1DY18&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=19) - 講演者：Chiemezuo Akujobi。
- [One URL to Rule Them All: Dynamic Landing Pages in Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=UOEvu4Lyj8w&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=20) - 講演者：Chrissy Wainwright、Doug Harris。
- [Fact checking with Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=Spdt-W5XotM&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=21) - 講演者：Jon Chittenden、Craig Dawson。
- [Sympa newsletters with Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=n7bM54MAc24&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=22) - 講演者：Agnès Haasser。
- [Code that creates content - Wagtail Space 2025](https://www.youtube.com/watch?v=XkSX195ssjY&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=23) - 講演者：Alex Morega。
- [Who's that code snippet? A screen reader guessing game - Wagtail Space 2025](https://www.youtube.com/watch?v=VkPOe_JixTI&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=24) - 講演者：Laura Wissiak、Pawel Masarczyk。
- [Bird Meets Bot: Using AI Tools to Make Wagtail Smarter - Wagtail Space 2025](https://www.youtube.com/watch?v=SsjXnpuLnL0&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=25) - 講演者：Alex Tomkins。
- [Where next for Wagtail Search? - Wagtail Space 2025](https://www.youtube.com/watch?v=LglWFsqIu3E&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=26) - 講演者：Matt Westcott。

### <a id="podcasts"></a>ポッドキャスト

- [Podcast.\_\_init\_\_ Episode 58 - Wagtail with Tom Dyson](https://www.pythonpodcast.com/episodepage/episode-58-wagtail-with-tom-dyson) - Tom Dysonが、Wagtailが生まれた経緯、他の選択肢との違い、どのような場合にプロジェクトへ導入するかを説明する。
- [Django Chat E9: Wagtail CMS - Tom Dyson](https://djangochat.com/episodes/wagtail-cms-tom-dyson) - WagtailについてのTom Dysonへのインタビュー。原文では、Google、NASA、英国NHSを含む数万の組織で使われる、主要なDjangoベースのCMSと説明されている。
- [Django Chat E84: Dawn Wages](https://djangochat.com/episodes/wagtail-react-gatsby-dawn-wages-RaD8k37m) - WagtailコアチームのメンバーDawn Wagesへのインタビュー。Wagtail、React、Gatsbyについて語る。
- [Django Chat E168: Thibaud Colas](https://djangochat.com/episodes/thibaud-colas-2025-dsf-board-nominations) - Wagtailコアチームのメンバーへのインタビュー。当時のDjangoの状況、予定されているDSF理事会選挙、Wagtailのロードマップとコミュニティでの活動機会を扱う。

### <a id="videos"></a>動画

- [Learn Wagtail](https://learnwagtail.com/) - Wagtailのさまざまな側面を扱う定期的な動画チュートリアル。
- [Wagtail Wednesdays #01 - Adding Help Text to Improve Wagtail Editor Experience](https://www.youtube.com/watch?v=ciYNMcv3lE0) - Catherineが、Wagtail管理画面へ役立つ補助テキストフィールドを追加する手順を紹介する。
- [Wagtail Wednesdays #02 - Customising Rich Text Features in Wagtail](https://www.youtube.com/watch?v=ei7ot_Wry3o) - Catherineが、コンテンツ編集者が利用できる機能を制御するため、リッチテキストエディターをカスタマイズする手順を紹介する。
- [Wagtail Wednesdays #03 - Using tabs to create a cleaner admin interface](https://www.youtube.com/watch?v=uZc0aZrHtQw) - Chrisが、タブを使ってフィールドを整理する方法を紹介する。
- [Wagtail Wednesdays #04 - Organising Images and Documents using Wagtail Collections](https://www.youtube.com/watch?v=HGXHtFpLDCA) - Kieranが、画像と文書をコレクションへ整理する手順を紹介する。
- [Wagtail Wednesdays #05 - How to organise your fields and streamline the editor experience](https://www.youtube.com/watch?v=CedcZmQ9KHs) - Chelseaが、管理を容易にして編集者の操作を効率化するため、フィールドを整理する手順を紹介する。
- [Wagtail Wednesdays #06 - Creating & using custom settings in your wagtail site](https://www.youtube.com/watch?v=KJWCGq3IRNc) - Chrisが、独自のサイト設定を作成・利用する方法を紹介する。
- [Wagtail Wednesdays #07 - How to Enable the Wagtail Styleguide](https://www.youtube.com/watch?v=_CfU9UivYPI) - Wagtail Styleguideを有効にし、ガイドラインに照らしてコンポーネントを確認し、利用可能なすべてのWagtailアイコンを見る方法を紹介する。原文では短時間で有効にできると説明されている。
- [How to Deploy Wagtail to Google App Engine](https://www.youtube.com/watch?v=uD9PTag2-PQ) - Google App Engineへのデプロイを紹介する。Google Cloud Platform上のPaaSでWagtailを動かす方法が中心。

### <a id="showcases"></a>事例集

- [公式事例集：Wagtailで作られたプロジェクト](https://wagtail.org/showcase/) - Wagtailで作られたウェブサイトとアプリを集めた事例集。
- [Made with Wagtail](https://madewithwagtail.org/) - Wagtail CMSで作られたサイトやアプリの事例集。

### <a id="package-lists"></a>パッケージ一覧

- [Wagtailのサードパーティーパッケージ](https://wagtail.org/packages/) - PyPIのデータに基づく公式一覧。
- [PyPIのFramework: Wagtailパッケージ](https://pypi.org/search/?c=Framework+%3A%3A+Wagtail) - `Framework: Wagtail`のタグが付いたパッケージ。
- [Django PackagesのWagtail一覧](https://djangopackages.org/grids/g/wagtail-cms/) - Django Packagesに掲載されるWagtailのプロジェクトとパッケージ。

## <a id="for-editors"></a>編集者向け

- [Wagtail user guide](https://guide.wagtail.org/) - Wagtailでコンテンツを作成したり制作を管理したりする人向けの公式利用ガイド。
- [How Do I Wagtail?](https://www.mozillafoundation.org/en/docs/how-do-i-wagtail/) - Mozillaによる、Wagtail管理画面の使い方を解説する編集者向けガイド。
- [CCA Wagtail Editor Portal](https://portal.cca.edu/help/wagtail-documentation/) - California College of the ArtsによるWagtailの利用者向け文書。
- [Caltech Wagtail Editor Portal](https://sites.caltech.edu/) - CaltechによるWagtailの利用者向け文書。

## <a id="community"></a>コミュニティ

- [Wagtail Space](https://www.wagtail.space/) - Wagtailの研修、講演（ライトニングトークを含む）、開発スプリント。固定原文では、オランダのアーネムで2019年3月13〜15日に開催予定のイベントとして告知されている。
- [TelegramのWagtail更新情報](https://telegram.me/wagtail) - Wagtail全般の更新情報を扱う非公式Telegramチャンネル。
- [TelegramのWagtailサポート](https://telegram.me/wagtailcms) - 質問や議論のための非公式Wagtailサポート用Telegramチャンネル。

## <a id="open-source-sites"></a>オープンソースサイト

- [Wagtail demo project](https://github.com/wagtail/bakerydemo) - レイキャヴィークで生まれたWagtailのデモプロジェクト。原文では次世代のデモと説明されている。
- [Torchbox.com on Wagtail](https://github.com/torchbox/torchbox.com) - Torchboxのウェブサイトの2024年版。
- [Made with Wagtail](https://github.com/springload/madewithwagtail) - オープンソースのDjango CMSであるWagtailを使って作られたサイトやアプリの事例集。
- [Federal Election Commission](https://github.com/fecgov/fec-cms) - 固定原文で新しいと説明される、Federal Election CommissionのウェブサイトのCMS。
- [Bow Valley SPCA Website](https://github.com/nfletton/bvspca) - WagtailとDjangoを使うBow Valley SPCAのウェブサイト。
- [SecureDrop](https://github.com/freedomofpress/securedrop.org) - 内部告発者向け文書提出システムSecureDropの、Wagtailで構築されたウェブサイト。
- [consumerfinance.gov](https://github.com/cfpb/consumerfinance.gov) - 米国の消費者を保護するためのDjangoプロジェクト。
- [Western Friend website](https://github.com/WesternFriend/westernfriend.org) - Western Friend（westernfriend.org）のウェブサイト。Western Friendはクエーカーの出版物で、社会の中で信仰を実践しようとするクエーカーのコミュニティや個人に資料と支援を提供する。Religious Society of Friendsに属する。
- [Outreachy website](https://github.com/outreachy/website) - Python、Django、Bootstrapを使うOutreachyのウェブサイトのコード。
- [Wagtail user guide](https://github.com/wagtail/guide) - コンテンツ編集者・モデレーター・管理者にWagtailを教えるウェブサイト。
- [Penticon Public Library](https://github.com/danlerche/public-library-wagtailCMS) - Wagtail CMSを使う公共図書館のウェブサイトの例。
