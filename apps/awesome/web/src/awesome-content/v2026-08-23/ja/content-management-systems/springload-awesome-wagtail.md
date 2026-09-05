---
title: "Awesome Wagtail"
description: "Wagtailを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-springload-awesome-wagtail-readme-md"
---

# Awesome Wagtail

Wagtailを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [General resources](#general-resources)
- [Apps](#apps)
  - [Blogging/news](#bloggingnews)
  - [Rich text editor extensions](#rich-text-editor-extensions)
  - [Widgets](#widgets)
  - [StreamField](#streamfield)
  - [Static site generation](#static-site-generation)
  - [Settings management](#settings-management)
  - [E-commerce](#e-commerce)
  - [SEO and SMO](#seo-and-smo)
  - [Customer experience](#customer-experience)
  - [Security](#security)
  - [Media](#media)
  - [Translations](#translations)
  - [Forms](#forms)
  - [Testing](#testing)
  - [Modeladmin](#modeladmin)
  - [Content Management](#content-management)
  - [Misc](#misc)
- [Tools](#tools)
  - [Templates & Starter Kits](#templates--starter-kits)
- [Resources](#resources)
  - [Getting started](#getting-started)
  - [Articles](#articles)
  - [Presentations](#presentations)
  - [Podcasts](#podcasts)
  - [Videos](#videos)
  - [Showcases](#showcases)
  - [Package lists](#package-lists)
- [For editors](#for-editors)
- [Community](#community)
- [Open-source sites](#open-source-sites)

<a id="general-resources"></a>
## 一般資料

- [Official site](https://wagtail.org/)
- [GitHub repository](https://github.com/wagtail/wagtail)
- [Project roadmap](https://wagtail.org/roadmap/)

<a id="apps"></a>
## アプリ

### Blogging/news

- [Wagtail CRX (CodeRed Extensions)](https://github.com/coderedcorp/coderedcms) - ワグテイル＋コードレッドの拡張機能により、マーケティングに特化したウェブサイトの迅速開発が可能になる
- [Puput](https://github.com/APSL/puput) - ワグテイルに実装されたDjangoブログアプリ

### Rich text editor extensions

- [Wagtail EditorJS](https://github.com/Nigel2392/wagtail_editorjs) - ワグテイルのページ、画像、ドキュメント選択機能に優れたサポートを備えた [EditorJS](https://editorjs.io/) ウィジェット
- [Wagtail Terms](https://github.com/smark-1/wagtailterms) - Draftailエディターへ用語集エンティティを追加するプラグイン
- [wagtailmdx](https://github.com/julinodev/wagtailmdx) - ワグテイルにおけるテキストフィールドウィジェットとしての [MDXEditor](https://github.com/mdx-editor/editor) インテグレーション

### Widgets

- [wagtailgmaps](https://github.com/springload/wagtailgmaps) - ワグテイルフィールド向けのシンプルなGoogleマップアドレスフォーマッター
- [Wagtail-Geo-Widget](https://github.com/Frojd/wagtail-geo-widget) - ワグテイルにおけるGeoDjango PointFieldフィールド向けのGoogleマップウィジェット
- [wagtail-markdown](https://github.com/torchbox/wagtail-markdown) - WagtailへMarkdown対応を追加
- [wagtail-autocomplete](https://github.com/wagtail/wagtail-autocomplete) - `ForeignKey`、`ParentalKey`、`ManyToMany` フィールドに自動補完機能付きの選択ウィジェット
- [wagtail-instance-selector](https://github.com/ixc/wagtail-instance-selector) - `ForeignKey` ウィジェットにより関連項目の作成と選択が可能。Djangoの`raw_id_fields`に類似。
- [wagtail-generic-chooser](https://github.com/wagtail/wagtail-generic-chooser) - ワグテイルの管理画面における選択ウィジェットやフォームウィジェットのベースクラスを提供し、ページ、ドキュメント、スニペット、画像の組み込み選択ウィジェットと同様の見た目を実現
- [Wagtail-Color-Panel](https://github.com/marteinn/wagtail-color-panel) - 色を選択できるパネルを追加するパッケージ。通常のページフィールドおよびストリームフィールドに適用可能。
- [Wagtail Ace Editor](https://github.com/Nigel2392/wagtail_ace_editor) - ワグテイル管理画面にAceエディタを直接埋め込み。
- [wagtail-html-editor](https://github.com/kkm-horikawa/wagtail-html-editor) - CodeMirror 6を採用した、強化されたHTMLエディタブロック。シンタックスハイライト、Emmetサポート、フルスクリーンモードを備える。

### StreamField

- [wagtail-inventory](https://github.com/cfpb/wagtail-inventory) - Wagtailページのストリームフィールドブロックをもとに検索可能。
- [Wagtail Code Block](https://github.com/wagtail-nest/wagtailcodeblock) - Wagtail CMSにおけるストリームフィールドコードブロック。リアルタイムでPrismJSによるシンタックスハイライトを提供。

### Static site generation

- [Wagtail-bakery](https://github.com/wagtail-nest/wagtail-bakery) - Django Wagtailサイトをフラットファイルとして生成するためのヘルパー一式。

### Settings management

- [Wagtail-Flags](https://github.com/cfpb/wagtail-flags) - Wagtailサイト向けの機能フラグ。

### E-commerce

- [django-salesman](https://github.com/dinoperovic/django-salesman) - Djangoにおけるヘッドレスエコノミックフレームワーク。ワグテイルモデルアドミンとの統合を提供。

### SEO and SMO

- [wagtail-meta-preview](https://github.com/Frojd/wagtail-meta-preview) - Wagtail Meta Previewは、Facebook共有、Twitter共有、Google検索結果のプレビューをWagtail管理画面で表示するパネルを提供。
- [Wagtail Yoast](https://github.com/Aleksi44/wagtailyoast) - テキストの読みやすさを向上させるためのSEO推奨ツール
- [Wagtail SEO](https://github.com/coderedcorp/wagtail-seo) - Wagtail向けの検索エンジンおよびソーシャルメディア最適化

### Customer experience

- [Wagtail Experiments](https://github.com/torchbox/wagtail-experiments) – Wag及のA/Bテスト
- [Wagtail Personalisation](https://github.com/wagtail-nest/wagtail-personalisation) - セグメントに基づいて編集者がカスタマイズされたページ（またはページの一部）を作成できるパーソナライゼーションモジュール。そのルールは管理画面で直接設定可能。

### Security

- [wagtail-2fa](https://github.com/labd/wagtail-2fa) - Wagtailにdjango-otpを統合して、2段階認証を追加

### Media

- [wagtailmedia](https://github.com/torchbox/wagtailmedia) - Wagtailの管理画面内で動画および音声ファイルを管理できるモジュール
- [Wagtail Transcription](https://github.com/j-bodek/wagtail-transcription) - YouTube動画から自動的に字幕を作成するためのフィールドを提供

### Translations

- [Wagtail Localize](https://github.com/wagtail/wagtail-localize) - Wagtail CMS向けの翻訳プラグイン
- [Wagtail Modeltranslation](https://github.com/infoportugal/wagtail-modeltranslation) - シンプルなアプリで、Wagtailパネルシステムに [django-modeltranslation](https://github.com/deschler/django-modeltranslation)を統合するミックスモデルを含む

### Forms

- [Wagtail's built in Form Builder](https://docs.wagtail.org/en/stable/reference/contrib/forms/) 一般用途向け
- [Wagtail ReCaptcha](https://github.com/wagtail-nest/wagtail-django-recaptcha) - wagtail-django-captchaは、Wagtailフォームビルダーを使用する際、 [django-recaptcha](https://github.com/django-recaptcha/django-recaptcha)フィールドを簡単に統合できるようにする。
- [Wagtail Jotform](https://github.com/torchbox/wagtail-jotform) - jotformsをWagtailで使用できるプラグイン
- [Wagtail Model Forms](https://github.com/vicktornl/wagtail-model-forms) - モデル／スニペットに適用可能なWagtailフォームビルダー機能
- [Wagtail Formation](https://github.com/mwesterhof/wagtail_formation) - Wagtail向けの完全に動的で使いやすいCMS対応フォーム

### Testing

- [wagtail-linkchecker](https://github.com/neon-jungle/wagtail-linkchecker) - Wagtailサイト内の壊れたリンクを検出するためのツール
- [Wagtail Accessibility](https://github.com/wagtail-nest/wagtail-accessibility) – ✅ Wagtailサイト向けのアクセシビリティコンテンツチェック
- [Wagtail Factories](https://github.com/wagtail/wagtail-factories) - Wagtail向けのFactory boyクラス

### Modeladmin

- [wagtail-admin-list-controls](https://github.com/ixc/wagtail-admin-list-controls) - Wagtailのモデル管理画面のリストビューに高度な検索、並べ替え、レイアウト制御を追加
- [Wagtail Rangefilter](https://github.com/wunderweiss/wagtail-rangefilter) - django-admin-rangefilterをWagtailのモデル管理画面に統合
- [Wagtail-TreeModelAdmin](https://github.com/cfpb/wagtail-treemodeladmin) - Wagtailのモデル管理画面に、Djangoモデル関係をページエクスプローラのようにナビゲートできる拡張

### Content Management

- [Wagtail Sharing](https://github.com/cfpb/wagtail-sharing) – ワグテイルのドラフトをより簡単に共有できる
- [Wagtail Transfer](https://github.com/wagtail/wagtail-transfer) - ワグテイルの複数インスタンス間でコンテンツを移動できる公式拡張機能
- [Wagtail Content Import](https://github.com/torchbox/wagtail-content-import) - Google DocsやDocxからストリームフィールドへコンテンツをインポートできるカスタマイズ可能なマッピングシステム
- [Wagtail Headless Preview](https://github.com/torchbox/wagtail-headless-preview) - ヘッドレスワグテイルセットアップ用のプレビュー
- [Wagtail-FEdit](https://github.com/Nigel2392/wagtail_fedit) - あなたのワグテイルサイトにフロントエンド編集を追加

### Misc

- [wagtailmenus](https://github.com/jazzband/wagtailmenus) - ワグテイルプロジェクトでメニューを効果的に管理・レンダリングできるアプリ
- [Wagtail Gridder](https://github.com/wharton/wagtailgridder) - Google画像検索結果に似たグリッドカードレイアウトで、カード詳細を拡張できるエリアを備えたデザイン
- [Wagtail App Pages](https://github.com/mwesterhof/wagtail_app_pages) - 実際のURL設定とDjangoビューを使ってワグテイルページを拡張
- [Wagtail Cache](https://github.com/coderedcorp/wagtail-cache) - Djangoキャッシュミドルウェアを使用したシンプルなページキャッシュ
- [Wagtail Orderable](https://github.com/elton2048/wagtail-orderable) - 管理画面でのドラッグ＆ドロップ順序をサポートするミックスイン
- [Wagtail Resume](https://github.com/adinhodovic/wagtail-resume) – 開発者向けの履歴書作成を簡易化するワグテドプロジェクト
- [Wagtail Trash](https://github.com/Frojd/wagtail-trash) - 削除ボタンを押下した際にページを削除するのではなく、"ゴミ箱"に移動させる
- [wagtail-pdf-view](https://github.com/donhauser/wagtail-pdf) - ワグテイルCMS向けのPDFレンダリングビュー
- [Wagtail Grapple](https://github.com/torchbox/wagtail-grapple) - ワグテイルアプリでGraphQLエンドポイントの構築を簡単にする
- [Wagtail Cache Invalidator](https://github.com/vicktornl/wagtail-cache-invalidator) - ワグテイルCMS内でユーザーに親しみやすいインターフェースでキャッシュを無効化および削除（フロントエンド）

<a id="tools"></a>
## ツール

### Templates & Starter Kits

- [Pipit](https://github.com/Frojd/Wagtail-Pipit) – Pipitは、Reactでレンダリングされたフロントエンドを備えたワグテイルCMSのボイラープレートであり、現代的な開発ワークフローを提供する
- [cookiecutter-wagtail-package](https://github.com/wagtail/cookiecutter-wagtail-package) - ワグテイル拡張パッケージの作成に使えるCookiecutterテンプレート
- [Wagtail for Platform.sh](https://github.com/platformsh-templates/wagtail) - Platform.sh向けのワグテイルテンプレート
- [cookiecutter-wagtail-vix](https://github.com/engineervix/cookiecutter-wagtail-vix) - 最小限の構成で、必要なライブラリを内蔵し、ワグテイルプロジェクトのスタート地点として使える再利用可能なプロジェクトの骨格
- [Sites Conformes](https://github.com/numerique-gouv/sites-conformes) - 国際設計システムに基づいた、アクセス可能でセキュアなウェブサイトの作成・管理を可能にするコンテンツ管理ツール。Wagtail CMSをベースにした

### Templates (start command)

- [Wagtail template: Your first Wagtail site](https://github.com/thibaudcolas/wagtail-tutorial-template) - ワグテイルプロジェクトのスタートテンプレート – ワグテイル公式の「最初のワグテイルサイトチュートリアル」の解決策を含む.
- [Wagtail News Template](https://github.com/wagtail/news-template) - ニュースサイト向けのワグテイルテンプレート.

<a id="resources"></a>
## リソース

### Getting started

- [Getting started in Wagtail, a newcomer's perspective](https://wagtail.org/blog/getting-started-wagtail-newcomers-perspective/) - ドラクールを長年メインツールとして使用していた私が、ワグテイルを用いた構築をまとめるよう依頼された.
- [Présentation de Wagtail, le dernier CMS Django](https://makina-corpus.com/django/presentation-de-wagtail-le-dernier-cms-django) - ワグテイルはDjangoエコシステムにおける比較的新しいCMSであるが、その若さが機能性を欠かさないほど豊富である。この記事では、その機能性を紹介する。
- [Getting Started With Wagtail](https://vix.digital/insights/getting-started-wagtail/) - Wagtailコミュニティでの長年の経験を基に、開発者がWagtailを始める際のよくある落とし穴を紹介。

### Articles

- [Wagtail Tutorials: Build Blog Step by Step](https://saashammer.com/blog/wagtail-tutorials/) - チュートリアルでは、ステップバイステップで標準的なブログをからゼロから作成する方法を教えている。
- [Multi-tenancy with Wagtail](https://cynthiakiser.com/blog/2023/11/01/multitenancy-with-wagtail.html) - ワグテイルにおける堅牢なマルチテナントサポートに関する複数回のガイド。
- [How to Prevent Users from Creating Pages by Type](https://timonweb.com/wagtail/how-to-prevent-users-from-creating-certain-page-types-in-wagtail-cms/)
- [How to Create and Manage Menus of Wagtail application](https://saashammer.com/blog/how-to-create-and-manage-menus-in-wagtail/)

### Presentations

- [An Introduction to Wagtail](https://www.youtube.com/watch?v=glIIF-kBXf0) Eloise "Ducky" Macdonald-Meyer による – この講演は、DjangoというPythonウェブフレームワークに基づくコンテンツマネジメントシステムであるワグテイルについての紹介である。
- [DjangoCon US 2015 - Wagtail - Yet Another Django CMS](https://www.youtube.com/watch?v=6j0NVq6g4FE) Tom Dyson による – Tomは、自社が新しいCMSを構築した理由を説明し、成長するオープンソースプロジェクトを運営する中で学んだ教訓を共有し、ワグテイルがバージョン2以降に進むまでの計画を示す。 [Slide deck](https://speakerdeck.com/tomdyson/wagtail-yet-another-cms-djangocon-us-2015).
- [Wellington Wagtail CMS Meetup - Meet Wagtail](https://docs.google.com/presentation/d/19EGWFtfHovHSAvyHCnLbxK50IAR2o7WwKd709cqi9p4/edit) Josh, JordiおよびRich（Springload開発チーム）による – ワグテイルの主な機能を紹介する導入セッション。
- [DjangoCon US 2016 - Atomic Wagtail](https://www.youtube.com/watch?v=kqAKiouk1lY) Kurt Wall による – Brad Frostの原子設計原則がウェブデザインの世界を大きく変える中、ワグテイルについて説明し、原子設計原則と組み合わせて使う方法、そしてその過程で遭遇する課題とその解決策について述べる。
- [PyCon Australia – Comparing Wagtail, Django CMS and Mezzanine](https://www.youtube.com/watch?v=3UC1MNFOjEI) Adam Brenecki による – この講演では、各CMSの異なるアプローチ、強みと弱みについて検討し、開発者やコンテンツ編集者にとっての意味を解説する。
- [Wagtail — еще одна CMS на Django](https://www.youtube.com/watch?v=yRmZ6WUfoOc) Mikalai Radchuk による – この講演は、ロシア語でワグテイルについての紹介である。
- [Wagtail & Agile – Wagtail Space 2017](https://www.youtube.com/watch?t=2m21s&v=-Qii_AyQsxE) Edd Baldry による。
- [Deploy Wagtail to the Divio Cloud – Wagtail Space 2017](https://www.youtube.com/watch?t=38m13s&v=-Qii_AyQsxE) ダニエレ・プロチーダによる。
- [All about Wagtail – Wagtail Space 2017](https://www.youtube.com/watch?v=OedQi5W3Zho) Robin van der Rijst による。
- [Presenting Wagtail Clear StreamField, a modular StreamField app – Wagtail Space 2017](https://www.youtube.com/watch?t=19m1s&v=OedQi5W3Zho) Edd Baldry による。
- [Wagtail Experiments, easy A/B testing for your Wagtail sites – Wagtail Space 2017](https://www.youtube.com/watch?t=34m37s&v=OedQi5W3Zho) トム・ディソンが執筆
- [Wagtail's preview, a new hope – Wagtail Space 2017](https://www.youtube.com/watch?v=ObM2pUgY-bs) ベルトラン・ボルデージによって
- [The Zen of Wagtail – Wagtail Space 2017](https://www.youtube.com/watch?t=16m38s&v=ObM2pUgY-bs) マット・ウェストコートによって。
- [Plone to Wagtail – Wagtail Space 2017](https://www.youtube.com/watch?t=2m57s&v=hZcuq8WJVew) コエン・ヴァン・デル・カンプが執筆
- [Hundreds of Wagtail in Flight – Wagtail Space 2017](https://www.youtube.com/watch?t=24m9s&v=hZcuq8WJVew) シモン・デ・ハーンによって
- [How Google uses Wagtail – Wagtail Space 2018](https://www.youtube.com/watch?v=lh9nmN1mzwQ&t=1937s) ケビン・チュンによって
- [Introducing Draft.js in Wagtail – Wagtail Space 2018](https://www.youtube.com/watch?v=lh9nmN1mzwQ&t=2690s) チバウド・コラスによって. [Presentation](https://thib.me/introducing-draft-js-in-wagtail).
- [Let It Go – Wagtail Space 2018](https://www.youtube.com/watch?v=lh9nmN1mzwQ&t=3938s) マット・ウェスコートによって
- [Developing Solutions for Girls, by Men – Wagtail Space 2018](https://www.youtube.com/watch?v=lh9nmN1mzwQ&t=5184s) リサ・アダムスによって
- [Wagtail’s first hatch – Wagtail Space 2018](https://www.youtube.com/watch?v=P8RUQE7Djdg&t=265s) ベルトラン・ボルデージによって
- [The Word Problem – Wagtail Space 2018](https://www.youtube.com/watch?v=P8RUQE7Djdg&t=2841s) トム・ディソンが執筆
- [Wagtail on Divio Cloud – Wagtail Space 2018](https://www.youtube.com/watch?v=P8RUQE7Djdg&t=3856s) ダニエレ・プロチーダによる。
- [Chopping the head off Wagtail and sticking it back on – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=152s) トニー・イエースによって
- [StreamField editor at UWKM – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=400s) ゲルト・ジャーン・ホーグスラッグによって
- [Things i learned at Wagtail Space – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=719s) コディ・ローフによって
- [Fly Wagtail to a PyCon – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=912s) ダニエレ・プロチーダによる。
- [Wagtail Performance – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=1345s) ミカエル・ヴァン・テリングンによって. [Code](https://gist.github.com/mvantellingen/daebda6abbaa9a5ed0888f886a77fcf0).
- [Mutliple images uploader – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=1661s) ラジェーブ・J・セバスチャンによって
- [Wagtail Space easter egg team demo – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=2057s) ラースによって. [Code](https://github.com/specialunderwear/haunted-wagtail).
- [Wagtail Space 2019 – Wagtail Space 2018](https://www.youtube.com/watch?v=u0CPaXRSOzI&t=2278s) マーテン・クリンガによって
- [Wagtail in 2018 – Wagtail Space US 2018](https://www.youtube.com/watch?v=ICKYMO0YoFI&index=2&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) トム・ディソンが執筆
- [What the Wagtail Docs Don't Tell You – Wagtail Space US 2018](https://www.youtube.com/watch?v=PCkxBNXWM64&index=3&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) レイシー・ウィリアムズ・エンシェルによって
- [Django Logging for Wagtail – Wagtail Space US 2018](https://www.youtube.com/watch?v=kkztl9ORUKQ&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV&index=4) リーン・サルロウによって
- [Scaling Wagtail for 100 Million Girls – Wagtail Space US 2018](https://www.youtube.com/watch?v=AiOJAKE0M0I&index=5&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) リサ・アダムスとコードイ・ロールフによって
- [Using Wagtail to Fight for Press Freedom – Wagtail Space US 2018](https://www.youtube.com/watch?v=FYqbqsa04T8&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV&index=6) ハリス・ラピロフによって
- [Choosing Wagtail for Columbia University – Wagtail Space US 2018](https://www.youtube.com/watch?v=OiZScRcluCo&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV&index=7) ザリナ・マスタファによる。
- [Running a Multi-Site Newsroom in Wagtail – Wagtail Space US 2018](https://www.youtube.com/watch?v=lMCjInjAz-M&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV&index=8) レイン・ヴェルナーによって
- [Wagtail in the Cloud – Wagtail Space US 2018](https://www.youtube.com/watch?v=N1MeTEPRmJA&index=9&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) ダニエレ・プロチーダによる。
- [Beheading Wagtail: Wagtail as a Headless CMS – Wagtail Space US 2018](https://www.youtube.com/watch?v=HZT14u6WwdY&index=10&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) マイケル・ハリソンによって
- [Learning Wagtail – Wagtail Space US 2018](https://www.youtube.com/watch?v=C-tXt5fLj_s&index=11&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) ダウン・ウェイジスによって
- [Sharing is Caring – Wagtail Space US 2018](https://www.youtube.com/watch?v=6AXyg6vvMTE&index=12&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV) アンディ・チョサクによって
- [Lightning Talks – Wagtail Space US 2018](https://www.youtube.com/watch?v=uoxyBIpaXTU&index=13&list=PLEyaio0l1qoGGbXg3XH0205FIF32oO1wV)
- [Wagtail: когда хочется чего-то приятнее, чем просто Django – Moscow Python Conf++ 2018](https://www.youtube.com/watch?v=xPPfTvLS7oQ) Игорь Мосягинによって
- [The State of Wagtail – Wagtail Space 2019](https://www.youtube.com/watch?t=592&v=MAzZ2lhMhzM) トム・ディソンが執筆
- [Image rotation feature – Wagtail Space 2019](https://www.youtube.com/watch?t=2057&v=MAzZ2lhMhzM) クリス・アダムス。コードによって
- [Debug templates – Wagtail Space 2019](https://www.youtube.com/watch?t=2264&v=MAzZ2lhMhzM) コエン・ヴァン・デル・カンプが執筆
- [Wagtail Headless with HATEOAS – Wagtail Space 2019](https://www.youtube.com/watch?t=2567&v=MAzZ2lhMhzM) ドゥコ・ドクターによって
- [Building a Planet Friendly Web (with Wagtail) – Wagtail Space 2019](https://www.youtube.com/watch?t=2926&v=MAzZ2lhMhzM) クリス・アダムスによって
- [\[WIP\] The future of (rich text) authoring experiences in Wagtail – Wagtail Space 2019](https://www.youtube.com/watch?t=4067&v=MAzZ2lhMhzM) シバウド・コラスが執筆
- [Wagtail & Whatsapp – Wagtail Space 2019](https://www.youtube.com/watch?t=47&v=CSwpj-jyjP4) リサ・アダムス＆コードイ・ロールフによって
- [Slack2Wagtail – Wagtail Space 2019](https://www.youtube.com/watch?t=785&v=CSwpj-jyjP4) コエン・ヴァン・デ・カンプ＆ルカス・モエスコプスによって
- [Wagtail and Oscar – Wagtail Space 2019](https://www.youtube.com/watch?t=1634&v=CSwpj-jyjP4) ラース・ヴァン・デ・ケルホフによる
- [wagtail-textract – Wagtail Space 2019](https://www.youtube.com/watch?t=3313&v=CSwpj-jyjP4) キース・リンク。 [Code](https://github.com/fourdigits/wagtail_textract) によって
- [Django 2.2 compatibility – Wagtail Space 2019](https://www.youtube.com/watch?t=3468&v=CSwpj-jyjP4) マット・ウェスコートによって
- [SEO dashboard – Wagtail Space 2019](https://www.youtube.com/watch?t=3937&v=CSwpj-jyjP4) ジャンネケ・ジャーンセンによる。 [Code](https://github.com/LUKKIEN/wagtail-marketing-addons).
- [My First Wagtail Contribution – More formats in RichText Editor – Wagtail Space 2019](https://www.youtube.com/watch?t=4126&v=CSwpj-jyjP4) アリフィン・イブネ・マティンによる。
- [Fly, Wagtail, fly! – Wagtail Space 2019](https://www.youtube.com/watch?t=4404&v=CSwpj-jyjP4) ダニエレ・プロチーダによる。
- [Wagtail & GraphQL – Wagtail Space 2019](https://www.youtube.com/watch?t=24&v=YydSbL8gMS4) アーティュール・ベイールによる。
- [Writing (code) for authors – Wagtail Space US 2019](https://www.youtube.com/watch?v=Ihsrki0d1G8&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=1) ブライアン・スミス＆エリック・シェルマンによる。 [Slides](https://docs.google.com/presentation/d/1z61u0uKwJxmYS4Zawbu4Zgg-kCtInd1VgsEg-rnwzBE/edit).
- [Saving Lives With Wagtail: Recovery Meetings Across the World – Wagtail Space US 2019](https://www.youtube.com/watch?v=QlLWvNT5Wrk&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=2) ティムOTHイ・アレンによる。
- [Why we chose Wagtail for CodeRed CMS – Wagtail Space US 2019](https://www.youtube.com/watch?v=1JUOAAmLQFA&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=3) ヴィンス・サルビノが執筆
- [Building a Wagtail-based site and authoring environment with accessibility in mind – Wagtail Space US 2019](https://www.youtube.com/watch?v=CxjlAI6R7iY&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=4) ザリナ・マスタファによる。
- [Making Wagtail Accessible – Wagtail Space US 2019](https://www.youtube.com/watch?v=tdB1I_gSCeY&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=5) チブアド・コラスによる。 [Slides](https://docs.google.com/presentation/d/15y8XIe7SL-RYEO9tEE8n9chx80_X4j4PbczGGM-cEGE/edit).
- [Everyone can fly a flag – Wagtail Space US 2019](https://www.youtube.com/watch?v=ZqwmgsqMTEs&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=6) ウィル・バートンによる。 [Slides](https://docs.google.com/presentation/d/1-A1doke2ylcqG72oIP-MLiX8SKXKkKNxQeKxddYUGBw/edit).
- [Architecting for a multi-domain site – Wagtail Space US 2019](https://www.youtube.com/watch?v=xMbJmHF7kCw&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=7) ベン・ビッチャーによる。 [Slides](https://slides.com/benbeecher/mds/).
- [Contributions can be more than code – Wagtail Space US 2019](https://www.youtube.com/watch?v=tK-3kEBbblg&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=8) カロブ・タウリエンによる
- [Thoughtful Code Review – Wagtail Space US 2019](https://www.youtube.com/watch?v=RY0K1BEV-_U&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=9) ナオミ・モルダッチ・トゥブマンによる。 [Slides](https://docs.google.com/presentation/d/1b_Hda8381G6mMc7uzYDc2EYjocfwSi2TYiRMI7d4e3I/edit).
- [Solving your problems by spelunking the Wagtail code – Wagtail Space US 2019](https://www.youtube.com/watch?v=BMoOhjgirFM&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=10) ハリス・ラピロフによる。 [Slides](https://harrislapiroff.github.io/wagtail-space-us-2019/)
- [The State of Wagtail: 2019 – Wagtail Space US 2019](https://www.youtube.com/watch?v=s29vaGnFcq8&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn&index=11) トム・ディソンが執筆
- [Wagtail Guide - Getting started - Wagtail Space US 2022](https://www.youtube.com/watch?v=E3-kFY6jPPY) コエン・ヴァン・デル・カンプが執筆
- [A New Approach to Multitenant Wagtail - Wagtail Space US 2022](https://www.youtube.com/watch?v=WN0L4YNrWes) ステファニー・シー・スミスとアディソン・ハーディによる。
- [The Wagtail Marketplace for Games-based Courses - Wagtail Space 2022](https://www.youtube.com/watch?v=ueou6CxiR3Y) サラ・トムスによる。
- [The Wagtail Ecosystem - Wagtail Space US 2022](https://www.youtube.com/watch?v=4Qd43nsxmoc) ヴィンス・サルビノが執筆
- [Wagtail charts and graphs - Wagtail Space US 2022](https://www.youtube.com/watch?v=QK-Vhlpos3Q) セヴァール・オフジョード・マグヌッソンとアナール・トゥミ・Þオルストゥーンソンによる
- [Wagtail as a headless CMS for JavaScript frontends - Wagtail Space US 2022](https://www.youtube.com/watch?v=bYRQ492BED0) トマソ・アミチによる
- [Adding a GraphQL API to Wagtail - Wagtail Space US 2022](https://www.youtube.com/watch?v=_O5isU354vg) パトリック・アーミニオによる
- [Bringing JSONField into Wagtail Core - Wagtail Space US 2022](https://www.youtube.com/watch?v=XtazMDNdlK8) サージー・アブダーバーが執筆
- [Wagtail vs. WordPress - Wagtail Space US 2022](https://www.youtube.com/watch?v=Vl2g7H3aodw) カロブ・タウリエンによる
- [Designing the new page editor - Wagtail Space US 2022](https://www.youtube.com/watch?v=t2xiPJ91UCE) フィル・デクスターとベン・エンライトによる
- [5 Things I Learned About Wagtail the Hard Way - Wagtail Space US 2022](https://www.youtube.com/watch?v=LNqVzLkZkig) ミーエン・ボスによる
- [Tips for Maintaining Wagtail Packages - Wagtail Space US 2022](https://www.youtube.com/watch?v=Zh608nVBrEw) ティム・アレンによる
- [Wagtail Guide - Wagtail Space US 2022](https://www.youtube.com/watch?v=W0tL-5V5BWA) コエン・ヴァン・デル・カンプが執筆
- [The state of Wagtail 2022 - Wagtail Space NL 2022](https://www.youtube.com/watch?v=4D49RENHfoM) トム・ディソンが執筆
- [Choosers - Wagtail Space NL 2022](https://www.youtube.com/watch?v=nSjVAISLr4M) マシュー・ウェストコートが執筆
- [Working with Image Filters - Wagtail Space NL 2022](https://www.youtube.com/watch?v=gCGT51BcTdM) アナール・トゥミ・Þオルストゥーンソンによる
- [Things I learned - Wagtail Space NL 2022](https://www.youtube.com/watch?v=xG5-s48TZt8) ダン・ブラグヒスによる
- [Wagtail Roadrunner Beep Beep - Wagtail Space NL 2022](https://www.youtube.com/watch?v=ynlFUcutSWQ) ラース・ヴァン・デ・ケルホフによる
- [Dockerising wagtail projects in 5 minutes - Wagtail Space NL 2022](https://www.youtube.com/watch?v=PgkpBMoN4UY) セヴァール・オフジョード・マグヌッソンによる
- [Wagtail in the News Room - Wagtail Space NL 2022](https://www.youtube.com/watch?v=B85HwmX5uaw) セヴァール・オフジョード・マグヌッソンとアナール・トゥミ・Þオルストゥーンソンによる
- [Digital Nomad - Wagtail Space NL 2022](https://www.youtube.com/watch?v=9Evrwzpg-dw) マイケル・マルテンスによる
- [Unobtrusive internationalisation - Wagtail Space NL 2022](https://www.youtube.com/watch?v=_dhScxTdtjA) ラース・ヴァン・デ・ケルホフによる
- [Moving Wagtail pages - Wagtail Space NL 2022](https://www.youtube.com/watch?v=OFqPKffSVWI) ヴィゴ・デ・フリースによる
- [Wagtail architecture options, or should I go headless - Wagtail Space NL 2022](https://www.youtube.com/watch?v=JMULuz6RzjQ) ダン・ブラグヒスによる
- [Wagtail headless and NextJS frontend - Wagtail Space NL 2022](https://www.youtube.com/watch?v=s8cJhFtjqZA) ルカス・モエスコプスによる
- [State of Wagtail - Wagtail Space US 2024](https://www.youtube.com/watch?v=TKLYeKpFbno&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB) トム・ディソンが執筆
- [Pleasant Publishing Patterns - Wagtail Space US 2024](https://www.youtube.com/watch?v=ZXGcqY-OeYk&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB) マイケル・トリス・アールが執筆
- [Accessibility for Complex Components and Interfaces - Wagtail Space US 2024](https://www.youtube.com/watch?v=AC1gy9R2Z6c&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) カラ・ガウループによる
- [One Thousand and One Wagtail Sites - Wagtail Space US 2024](https://www.youtube.com/watch?v=yciVqzSGWTw&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB) ヴィンス・サルビノが執筆
- [3D Files with Wagtail - Wagtail Space US 2024](https://www.youtube.com/watch?v=ccBrb50xRCM&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) ダウン・ウェイジとミラ・ギブソンによる
- [Wagtail, Reactivated - Headless Without the Headache - Wagtail Space US 2024](https://www.youtube.com/watch?v=mQsI8Ji3_LY&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB) ジョシュ・マランツによる
- [Lightning Talks June 20 - Wagtail Space US 2024](https://www.youtube.com/watch?v=UuE3Y15To8Q&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) - ライトニングトーク
- [LLMs and Wagtail - Wagtail Space US 2024](https://www.youtube.com/watch?v=b-luIDn80bc&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB) エミリー・トップ・マグレースンによる
- [PudlStack - Building Wagtail Affinity Group Communities That Offer Bot Helpers - Wagtail Space US 2024](https://www.youtube.com/watch?v=SNEeo_ABQ7g&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB) アンソニー・ガルシアによる
- [Auditing Wagtail Content - Wagtail Space US 2024](https://www.youtube.com/watch?v=a1O3hKib8Ns&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQB&index=2&pp=i) ウィル・バートンとチャック・セビアン・ランダーによる
- [What Editors Really Want - Wagtail Space US 2024](https://www.youtube.com/watch?v=1qF5wC4rCY4&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) ミーエン・ボスによる
- [Improving the Editor Experience through Validation - Wagtail Space US 2024](https://www.youtube.com/watch?v=UVBHciwpgKM&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) スコット・クランフィルによる
- [sditail: Extending Wagtail CMS as a Spatial Data Infrastructure - Wagtail Space US 2024](https://www.youtube.com/watch?v=XxdJpYNT4EM&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) セサール・ベンジャミンによる
- [Packages! Packages! Packages! - Wagtail Space US 2024](https://www.youtube.com/watch?v=r5ovJPWvxL4&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) - パネルディスカッション
- [Lightning Talks June 21 - Wagtail Space US 2024](https://www.youtube.com/watch?v=vazMp9jTlEU&list=PLfwZ-fob20cMduvPwjstgycu-Z_1QwJQ) - ライトニングトーク
- [The State of Wagtail - Wagtail Space NL 2024](https://www.youtube.com/watch?v=P9Ftbu5NVUI&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=1) トム・ディソンが執筆
- [Headless Wagtail Strategies - Wagtail Space NL 2024](https://www.youtube.com/watch?v=nweVHX5DgWU&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=2) レミ・サンチェスが執筆
- [Wagging HubSpot's Tail - Wagtail Space NL 2024](https://www.youtube.com/watch?v=VUoOoRxlWrU&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=3) シモン・ブランシャードとジョスト・ミエジンクによる
- [Wagtail and Caching - Wagtail Space NL 2024](https://www.youtube.com/watch?v=vBdG2GfAZAo&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=4) ジェイク・ホワードが執筆
- [Faster Thumbnails for a Faster Web - Wagtail Space NL 2024](https://www.youtube.com/watch?v=0kHhGBxwzeM&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=5) アレクス・トムキンスによって。
- [The impossible art of making everyone happy - Wagtail Space NL 2024](https://www.youtube.com/watch?v=v3KEaMTfKg0&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=6) マシュー・ウェストコートが執筆
- [Bringing modern authentication to Wagtail: WebAuthn and Passkeys - Wagtail Space NL 2024](https://www.youtube.com/watch?v=qJwg2kFtFW4&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=7) ストーム・ヘグが執筆
- [How to abuse Wagtail's StreamFields as much as you want - Wagtail Space NL 2024](https://www.youtube.com/watch?v=tOBGJ0riDRw&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=8) レミ・サンチェスが執筆
- [Wagtail AI and Wagtail Vector Index - Wagtail Space NL 2024](https://www.youtube.com/watch?v=jHuhX_SNF1s&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=9) ダン・ブラグヒシュが執筆
- [Wagtail Translate - Wagtail Space NL 2024](https://www.youtube.com/watch?v=QxnC70Bwj0k&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=10) コエン・ヴァン・デル・カンプが執筆
- [You've been caching your content website wrong - Wagtail Space NL 2024](https://www.youtube.com/watch?v=bWF06aCjbUM&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=11) レミ・サンチェスが執筆
- [Universal Listings - Wagtail Space NL 2024](https://www.youtube.com/watch?v=aNto27_lfJ4&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=12) サージー・アブダーバーが執筆
- [Recovering deleted Django models - Wagtail Space NL 2024](https://www.youtube.com/watch?v=TB64DtQZeB0&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=13) ジェイク・ホワードが執筆
- [Wagtail Dashboards - Wagtail Space NL 2024](https://www.youtube.com/watch?v=0msxKe0RoNw&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=14) ジュディス・ヴァン・リルスムとエムメリエン・シュイエが執筆
- [Multi-lingual websites in Wagtail - Wagtail Space NL 2024](https://www.youtube.com/watch?v=5rPvOsVeRhA&list=PLEyaio0l1qoGj7XTEuNXT2o3tYpuSmlbP&index=15) パウル・ステvensが執筆
- [State of Wagtail 2025 - Wagtail Space 2025](https://www.youtube.com/watch?v=9Kduqs6NH7Q&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=2) シバウド・コラスが執筆
- [Wagtail in industry: from farming to finance - Wagtail Space 2025](https://www.youtube.com/watch?v=DH87OzXzj28&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=3) ヴィンス・サルビノが執筆
- [Redesigning and refactoring Wagtail components - Wagtail Space 2025](https://www.youtube.com/watch?v=8h0fxe7b8s8&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=4) マリアナが執筆
- [Building Better Wagtail Sites: Traits of a Good CMS - Wagtail Space 2025](https://www.youtube.com/watch?v=n5KHTLS22YE&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=5) マイケル・トリス・アールが執筆
- [REX: Building a SaaS from Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=3T-ITKTByH4&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=6) セバスティアン・コルビンが執筆
- [Implement the French Government Design System in Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=8_CBltGuv0g&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=7) シルヴァン・ボイセルとルシ・ラポールが執筆
- [Wagtail Nest: Maintaining Community Packages Together - Wagtail Space 2025](https://www.youtube.com/watch?v=h0kKy4R5kNY&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=8) コエン・ヴァン・デル・カンプが執筆
- [Automated Data Loader: Wagtail for Weather Data Integration - Wagtail Space 2025](https://www.youtube.com/watch?v=iTxcq__Gcr4&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=9) エリック・オテノとグレース・アモンドが執筆
- [Building Flexible Wagtail CMS Experiences for Editors - Wagtail Space 2025](https://www.youtube.com/watch?v=-azqKJdEivk&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=10) アンネテ・レーウスとエリク・シャーマンが執筆
- [Building a little YouTube on Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=hLw3FWb2LfQ&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=11) トム・ディソンが執筆
- [Creating connections between stories and objects using AI - Wagtail Space 2025](https://www.youtube.com/watch?v=Wkjm8xdV_6c&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=12) トリッシュ・トーマスによって
- [AI in Wagtail: responsible innovation for content editors - Wagtail Space 2025](https://www.youtube.com/watch?v=n2fIFJLSH5E&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=16) サージー・アブダーバンド・トム・アッシュによって。
- [The Bogotá Digital Library: A Wagtail Success Story - Wagtail Space 2025](https://www.youtube.com/watch?v=cbANVWkDIs0&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=17) Juan Aguayoによって。
- [Wagtail and AI Agentic Coding - Wagtail Space 2025](https://www.youtube.com/watch?v=pukU8F3ciEM&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=18) マクジェイ・バロンによって。
- [The Impact of A Contribution to Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=sW8k4F1DY18&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=19) チメズウオ・アクジョビによって
- [One URL to Rule Them All: Dynamic Landing Pages in Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=UOEvu4Lyj8w&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=20) クリッシー・ウェインワイトとダグ・ハリスによる。
- [Fact checking with Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=Spdt-W5XotM&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=21) ジョン・チャイトデンとクラーク・ダウソンによって。
- [Sympa newsletters with Wagtail - Wagtail Space 2025](https://www.youtube.com/watch?v=n7bM54MAc24&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=22) アグネス・ハアセールによる。
- [Code that creates content - Wagtail Space 2025](https://www.youtube.com/watch?v=XkSX195ssjY&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=23) アレクサンダー・モレガが作成した。
- [Who's that code snippet? A screen reader guessing game - Wagtail Space 2025](https://www.youtube.com/watch?v=VkPOe_JixTI&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=24) ラーラ・ウィシアクとパウエル・マサルツキによって
- [Bird Meets Bot: Using AI Tools to Make Wagtail Smarter - Wagtail Space 2025](https://www.youtube.com/watch?v=SsjXnpuLnL0&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=25) アレクス・トムキンスによって。
- [Where next for Wagtail Search? - Wagtail Space 2025](https://www.youtube.com/watch?v=LglWFsqIu3E&list=PLfwZ-fob20cPI9_fnG_ULYIdOS5TKP1IZ&index=26) マット・ウェストコートによって。

### Podcasts

- [Podcast.\_\_init\_\_ Episode 58 - Wagtail with Tom Dyson](https://www.pythonpodcast.com/episodepage/episode-58-wagtail-with-tom-dyson) - このエピソードではトム・ディソンが、ワグテイルがどうして作られたのか、他の選択肢とどう違うのか、そしてプロジェクトに適用すべきタイミングについて説明します.
- [Django Chat E9: Wagtail CMS - Tom Dyson](https://djangochat.com/episodes/wagtail-cms-tom-dyson) - Google、NASA、英国NHSなど、何万もの組織が利用しているDjangoベースのCMSであるワグテイルについて、トム・ディソンとのインタビューです.
- [Django Chat E84: Dawn Wages](https://djangochat.com/episodes/wagtail-react-gatsby-dawn-wages-RaD8k37m) - WagtailのコアメンバーDawn Wagesと、Wagtail、React、Gatsbyについて語る回。
- [Django Chat E168: Thibaud Colas](https://djangochat.com/episodes/thibaud-colas-2025-dsf-board-nominations) - Wagtailのコアメンバーへのインタビュー。Djangoの現状、次期DSF理事選挙、Wagtailの開発計画、コミュニティでの機会を扱います。

### Videos

- [Learn Wagtail](https://learnwagtail.com/) - ワグテイルのすべての側面についての定期的なビデオチュートリアルです.
- [Wagtail Wednesdays #01 - Adding Help Text to Improve Wagtail Editor Experience](https://www.youtube.com/watch?v=ciYNMcv3lE0) - ケイティが、ワグテイルの管理画面に便利な補助テキストフィールドを追加するためのステップを丁寧に説明します.
- [Wagtail Wednesdays #02 - Customising Rich Text Features in Wagtail](https://www.youtube.com/watch?v=ei7ot_Wry3o) - ケイティが、豊かなテキストエディタをカスタマイズする方法を説明し、コンテンツ編集者が使える機能を制御する方法について話します.
- [Wagtail Wednesdays #03 - Using tabs to create a cleaner admin interface](https://www.youtube.com/watch?v=uZc0aZrHtQw) - クリスが、フィールドをタブで整理する方法を丁寧に説明します。
- [Wagtail Wednesdays #04 - Organising Images and Documents using Wagtail Collections](https://www.youtube.com/watch?v=HGXHtFpLDCA) - ケイアーンが、画像やドキュメントをコレクションに分類するプロセスを丁寧に説明します
- [Wagtail Wednesdays #05 - How to organise your fields and streamline the editor experience](https://www.youtube.com/watch?v=CedcZmQ9KHs) - チェルシーが、フィールドを整理する方法を説明し、それにより管理をしやすくし、エディタ体験をスムーズにします
- [Wagtail Wednesdays #06 - Creating & using custom settings in your wagtail site](https://www.youtube.com/watch?v=KJWCGq3IRNc) - クリスが、カスタムサイト設定の設定と使用方法を丁寧に説明します
- [Wagtail Wednesdays #07 - How to Enable the Wagtail Styleguide](https://www.youtube.com/watch?v=_CfU9UivYPI) - 非常に役立つリソースで、設定にかかる時間は一切なく、コンポーネントのガイドラインとの確認ができ、すべてのWagtailアイコンが表示されます
- [How to Deploy Wagtail to Google App Engine](https://www.youtube.com/watch?v=uD9PTag2-PQ) - フォーカスはグーグルクラウドプラットフォームですが、WagtailをそのPAASで立ち上げる方法についての素晴らしい紹介です

### Showcases

- [Offiical showcase - Projects made with Wagtail](https://wagtail.org/showcase/) - Wagtailで作られた最高のプロジェクトを体験できるウェブサイトとアプリのキュレーションリストです
- [Made with Wagtail](https://madewithwagtail.org/) - Wagtail CMSで作られたサイトとアプリの紹介です

### Package lists

- [Wagtail third-party packages](https://wagtail.org/packages/) - PyPIデータに基づく公式リストです
- [Framework: Wagtail on PyPI](https://pypi.org/search/?c=Framework+%3A%3A+Wagtail) - タグが`Framework: Wagtail`に付けられたパッケージです
- [Wagtail grid - Django Packages](https://djangopackages.org/grids/g/wagtail-cms/) - Django Packagesに掲載されているWagtailのプロジェクトとパッケージです

<a id="for-editors"></a>
## 編集者向け

- [Wagtail user guide](https://guide.wagtail.org/) - Wagtailでコンテンツを作成またはコンテンツプロダクションを管理する人のための公式ユーザーガイド
- [How Do I Wagtail?](https://www.mozillafoundation.org/en/docs/how-do-i-wagtail/) - Mozillaが提供するエディタ向けのWagtailの管理インターフェースの使い方ガイド
- [CCA Wagtail Editor Portal](https://portal.cca.edu/help/wagtail-documentation/) - カリフォルニア芸術学院が提供するWagtail向けのユーザー向けドキュメンテーション
- [Caltech Wagtail Editor Portal](https://sites.caltech.edu/) - カリフォルニア工科大学（Caltech）が提供するWagtail向けのユーザー向けドキュメンテーション

<a id="community"></a>
## コミュニティ

- [Wagtail Space](https://www.wagtail.space/) - Wagtailのトレーニングセッション、Wagtail（ライトニング）トーク、およびWagtailスプリント。2019年3月13日から15日まで、オランダのアーネムでWagtail Spaceが開催されます
- [Wagtail updates on Telegram](https://telegram.me/wagtail) - 一般のWagtailに関するアップデートを提供する非公式Telegramチャンネルです
- [Wagtail support on Telegram](https://telegram.me/wagtailcms) - サポートに関する質問やディスカッションを提供する非公式Telegramチャンネルです

<a id="open-source-sites"></a>
## オープンソースサイト

- [Wagtail demo project](https://github.com/wagtail/bakerydemo) – リーカジャヴィクで生まれた次世代Wagtailデモです
- [Torchbox.com on Wagtail](https://github.com/torchbox/torchbox.com) – Torchboxの2024年のウェブサイトバージョンです
- [Made with Wagtail](https://github.com/springload/madewithwagtail) - Wagtail CMS、使いやすいオープンソースDjangoコンテンツマネジメントシステムで作られたサイトとアプリの紹介です
- [Federal Election Commission](https://github.com/fecgov/fec-cms) – 新しい連邦選挙委員会ウェブサイト用のコンテンツ管理システム（CMS）
- [Bow Valley SPCA Website](https://github.com/nfletton/bvspca) – ボウ・バレーSPCAのWagtail/Djangoベースのウェブサイト
- [SecureDrop](https://github.com/freedomofpress/securedrop.org) – SecureDropの吹き出し文書提出システム用のWagtailを採用したウェブサイト
- [consumerfinance.gov](https://github.com/cfpb/consumerfinance.gov) – アメリカの消費者を守るDjangoプロジェクト
- [Western Friend website](https://github.com/WesternFriend/westernfriend.org) - ウェスチン・フレンド（westernfriend.org）というフェアリズムの雑誌が、信仰を世界に生きるコミュニティや個人にリソースと支援を提供するためのウェブサイト。ウェスチン・フレンドは宗教社会の友人会（Religious Society of Friends）の一部である。
- [Outreachy website](https://github.com/outreachy/website) - Python、Django、Bootstrapに基づくアウトリーチウェブサイトのコード
- [Wagtail user guide](https://github.com/wagtail/guide) - コンテンツ編集者、モデレーター、管理者向けにWagtailを教えるためのウェブサイト
- [Penticon Public Library](https://github.com/danlerche/public-library-wagtailCMS) - Wagtail CMSを用いた公開図書館ウェブサイトの例

<a id="contribute"></a>
## コントリビューション

貢献は常に歓迎されています！まず [contribution guidelines](https://github.com/springload/awesome-wagtail/blob/70a72b5b3529ed8bf4b88de2e9b64b7f7ef55d86/docs/CONTRIBUTING.md) を読んでください。

<a id="license"></a>
## ライセンス

この [Springload](https://www.springload.co.nz/) およびその他の貢献者の作品は [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) でマークされています。
