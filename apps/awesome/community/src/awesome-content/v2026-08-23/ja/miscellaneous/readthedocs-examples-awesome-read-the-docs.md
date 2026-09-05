---
title: "Awesome Read the Docs"
description: "Read the Docsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-readthedocs-examples-awesome-read-the-docs-readme-md"
---

# Awesome Read the Docs

Read the Docsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次


- [Sphinx プロジェクト](#sphinx-projects)
- [MkDocs プロジェクト](#mkdocs-projects)
- [API リファレンス](#api-reference)
- [科学プロジェクト](#science-projects)
- [タグクラウド](#tag-cloud)




## Sphinx プロジェクト

- [CrateDB](https://crate.io/docs/crate/) - Crate.io はドキュメント体験を一般 Web サイトへ統合しています。合計15個のドキュメントプロジェクトが入れ子になっています。独自テーマ [crate-docs-theme](https://github.com/crate/crate-docs-theme) を使って、プロジェクトを編成・統一しています。**#sphinx** **#custom-theme**。
- [django-cms](https://docs.django-cms.org/) - django-cms の開発者向けドキュメントは非常に充実し、よく整理されています。Furo テーマを使用しています。**#sphinx** **#large-project**。
- [Ray](https://docs.ray.io/) - 複数のソフトウェアコンポーネントにまたがるドキュメントプロジェクトです。Executable Book プロジェクトの複数の拡張機能を使用しています。[こちらの Twitter スレッド](https://twitter.com/readthedocs/status/1663923671470047234)で機能を紹介しています。**#sphinx** **#themes** **#large-project**。
- [Scrapy](https://docs.scrapy.org/) - 多数のリファレンス断片を埋め込み、`sphinx-hoverxref` で素早く参照できるツールチップを表示します。コンテンツ構成にも参考になる点が豊富です。**#sphinx**。
- [setuptools](https://setuptools.pypa.io/) - Furo テーマを使った多機能なプロジェクトです。[Twitter スレッド](https://twitter.com/readthedocs/status/1546527820150718469)に例があります。**#sphinx** **#themes**。
- [sphinx-needs](https://sphinx-needs.readthedocs.io/) - `sphinx-needs` のドキュメントです。**#sphinx** **#themes**。
- [sphinx-immaterial](https://sphinx-immaterial.readthedocs.io/) - Material for MkDocs を基にした Sphinx 用 Material テーマ、`sphinx-immaterial` のドキュメントです。**#sphinx** **#themes**。
- [Uberspace](https://manual.uberspace.de/) - `sphinx_rtd_theme` に独自 CSS と HTML を追加してプロジェクトのブランドを反映し、サイドバーとフッターをカスタマイズしています。トップページには最新版とリリース日を表示します。**#sphinx** **#themes** **#custom-theme**。
- [Wagtail](https://docs.wagtail.org/) - 世界的なコミュニティを持つ Django ベースの CMS です。ドキュメントは複数の関係者（編集者と開発者）を対象とし、独自の美しいテーマを備え、主に Diátaxis の理念に沿って構成されています。[リリースノート](https://docs.wagtail.org/en/stable/releases/index.html)と[コントリビューションガイド](https://docs.wagtail.org/en/stable/contributing/index.html)は特筆に値します。Wagtail のドキュメントが使用する Sphinx 拡張は最小限です。**#sphinx** **#themes** **#diataxis**。
- [Weblate](https://docs.weblate.org/) - 多数の翻訳とカスタマイズされた Read the Docs テーマを備えた、大規模ドキュメントプロジェクトを持つ翻訳プラットフォームです。ユーザー、管理者、開発者のすべてを対象にし、充実した変更履歴も備えています。**#sphinx** **#themes** **#translation**。

## MkDocs プロジェクト

- [Argo CD](https://argo-cd.readthedocs.io/) - 独自配色と使いやすいバージョンドロップダウンを備えた Material for MkDocs テーマです。製品のアニメーションデモと、運用者、ユーザー、開発者向けガイドを提示する丁寧に設計されたサイドバーがあります。**#mkdocs** **#themes** **#large-project**。
- [doc2dash](https://doc2dash.readthedocs.io/) - Read the Docs と完全互換の独自バージョンプロバイダーを備えた Material for MkDocs です。**#mkdocs** **#themes**。
- [Nautobot](https://docs.nautobot.com/) - サブプロジェクト機能を幅広く使い、同じ独自ドメイン・ランディングページの下で多数のドキュメントプロジェクトを整理しています。各サブプロジェクトには独自のリリースサイクルがあります。[こちらの Twitter スレッド](https://twitter.com/readthedocs/status/1595010133796462593)で機能を紹介しています。**#mkdocs** **#themes** **#large-project**。
- [Sidra Data Platform](https://docs.sidra.dev/en/latest/) - バージョン選択機能と、Read the Docs Addons で統合された検索を備える Material for MkDocs テーマです。**#mkdocs** **#themes** **#business**。
- [The Haskell Tool Stack](https://docs.haskellstack.org/) - 成熟した MkDocs プロジェクトで、ドキュメントサイトをメイン Web サイトとして使っています。構造と、Material for MkDocs のウィジェットを配慮して使っている点に注目してください。**#mkdocs** **#themes**。

## API リファレンス

- [discord.py](https://discordpy.readthedocs.io/) - 非常に充実した Python API リファレンスです。属性とメソッドの概要表を表示する独自拡張、API リファレンスのツールチップを表示する `sphinx-hoverxref`、GitHub ソースコードへのリンク参照を使用しています。**#apidocs** **#sphinx** **#themes**

## 科学プロジェクト

- [AiiDA demonstration](https://aiida-qe-demo.readthedocs.io/) - 多数の例と図を使って書かれたハードウェアのデモ・チュートリアルです。[舞台裏](https://github.com/chrisjsewell/aiida-qe-demo)では、mambaforge を導入し、設定を `environment.yml` に保存して Conda を使用しています。**#sphinx** **#jupyter-notebook**
- [Crest Ocean System](https://crest.readthedocs.io/) - sphinx-hoverxref と Executable Book を使用しています。テキスト内に動画チュートリアルがあり、Trello、YouTube など多くのコンテンツを埋め込んでいます。**#sphinx** **#themes**
- [jupyter-book](https://jupyterbook.org/) - Jupyter Notebook ユーザーに扱いやすいプロジェクトから、Sphinx プロジェクトを自動作成します。**#jupyter-notebook** **#sphinx** **#diataxis**。
- [jupyter-sphinx](https://jupyter-sphinx.readthedocs.io/) - ドキュメントプロジェクト内で Jupyter Notebook を直接実行・レンダリングします。**#jupyter-notebook** **#sphinx**。
- [jupyter-tutorial](https://jupyter-tutorial.readthedocs.io/) - `.ipynb` ファイルを `nbsphinx` で直接レンダリングする機能など、Sphinx の拡張機能群を使用しています。**#jupyter-notebook** **#sphinx**。
- [msticpy](https://msticpy.readthedocs.io/) - MSTIC Jupyter and Python Security Tools。msticpy は、Jupyter Notebook で情報セキュリティの調査とハンティングを行うためのライブラリです。**#jupyter-notebook** **#sphinx**。
- [nbsphinx](https://nbsphinx.readthedocs.io/) - Binder サービスを使い、現在表示中の `*.ipynb` ファイルのインタラクティブ版を開くためのバナーとボタンを備えています。優れた PDF 版にも注目してください。**#jupyter-notebook** **#sphinx**。
- [poliastro](https://docs.poliastro.space/) - 数式、インタラクティブな3Dプロット、``sphinx-hoverxref``、独自404ページ、コード例の便利なコピーボタンを豊富に活用した大規模科学プロジェクトです。ナビゲーションが [Diátaxis フレームワーク](https://diataxis.fr/)を適切に反映している点にも注目してください。**#sphinx** **#diataxis**。
- [SunPy](https://docs.sunpy.org/) - 太陽物理学向けオープンソースパッケージの大規模ドキュメントプロジェクトです。メイン Web サイトのメニューを埋め込み、独自テーマを使用しています。充実した変更履歴とリリースノートも備えています。**#custom-theme**、**sphinx**、**#apidocs**。
- [TorchIO](https://torchio.readthedocs.io/) - ディープラーニングの3D医療画像を対象とするオープンソース Python ライブラリです。API ドキュメントと使用例を組み合わせ、単一の「ローリングリリース」ドキュメントに「single version」を使用します。[こちらの Twitter スレッドにスクリーンショットがあります](https://twitter.com/readthedocs/status/1570339818806120450)。**#themes**、**sphinx**。
- [TomoBank](https://tomobank.readthedocs.io/) - 表と画像を特に活用した、断層撮影データセットとファントムの大規模リストで、科学コミュニティが保守しています。**#sphinx**。



## タグクラウド

このリストのカテゴリーは、次のタグで交差しています。

**#sphinx**、**#mkdocs**、**#themes**、**#custom-theme**、**#jupyter-notebook**、**#diataxis**、**#large-project**、**#apidocs**、**#translation**

## コントリビューション

[種類を問わずコントリビューションを歓迎します。ガイドラインに従ってください](https://github.com/readthedocs-examples/awesome-read-the-docs/blob/7f77aef23e000ca349c3d2bb6c019adb996dbef1/contributing.md)！

### コントリビューター

[コントリビューターの皆さんに感謝します](https://github.com/readthedocs-examples/awesome-read-the-docs/graphs/contributors)！
