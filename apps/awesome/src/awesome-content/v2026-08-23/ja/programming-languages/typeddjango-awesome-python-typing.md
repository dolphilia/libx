---
title: "typeddjango/awesome-python-typing"
description: "typeddjango/awesome-python-typing の正規スナップショット"
licenseSource: "github-typeddjango-awesome-python-typing-readme-md"
---

# Awesome Python Typing（型付け） [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

優れたPythonの型、スタブ、プラグイン、およびそれらを扱うツールのコレクションです。

<a id="contents"></a>
## 目次

- [静的型チェッカー](#static-type-checkers)
- [動的型チェッカー](#dynamic-type-checkers)
- [スタブパッケージ](#stub-packages)
- [追加の型](#additional-types)
- [バックポートと改善](#backports-and-improvements)
- [ツール](#tools)
- [連携](#integrations)
- [記事](#articles)
- [関連項目](#related)

[PyPIにある型付きプロジェクトの全一覧](https://pypi.org/search/?q=&o=&c=Typing+%3A%3A+Typed)はこちらです。

<a id="static-type-checkers"></a>
## 静的型チェッカー

- [basedmypy](https://github.com/KotlinIsland/basedmypy) - ベースライン機能を備えた静的型付け。
- [basedpyright](https://github.com/detachhead/basedpyright) - VSCodeのサポートやその他の改善を含むPyrightのフォーク。
- [mypy](https://github.com/python/mypy) - オプションの静的型付け（PEP 484）。
- [pyanalyze](https://github.com/quora/pyanalyze) - 拡張可能な静的分析器および型チェック器。
- [PyCharm](https://www.jetbrains.com/pycharm/) - プロフェッショナル開発者向けのIDE。
- [pylyzer](https://github.com/mtshiba/pylyzer/) - Rustで書かれたPython用の高速静的コード分析器および言語サーバー。
- [pyrefly](https://github.com/facebook/pyrefly) - Python用の高速型チェック器および言語サーバー。
- [pyright](https://github.com/Microsoft/pyright) - 大規模Pythonソースベース向けの高速型チェック器。ファイルが変更された際に、迅速にインクリメンタル更新を行う「ウォッチ」モードをサポート。
- [pycroscope](https://github.com/JelleZijlstra/pycroscope) - Pythonコード向けの半静的型チェッカー。検査対象モジュールをインポートするため、ほかの型チェッカーが拒否する多くの動的構文を`pycroscope`が理解できます。コードと直接やり取りするプラグインで`pycroscope`を拡張できます。
- [pytype](https://github.com/google/pytype) - 型のチェックおよび推論を行うツール（型アノテーションを必要としない）。
- [ty](https://github.com/astral-sh/ty) - Ruffおよびuvの開発者によるRustで書かれた極めて高速なPython型チェック器。
- [zuban](https://github.com/zubanls/zuban) - Mypyと互換性のあるPython型チェック器および言語サーバー（Rustで構築）。

<a id="dynamic-type-checkers"></a>
## 動的型チェッカー

- [beartype](https://github.com/beartype/beartype) - 純粋Pythonによる、極めて高速な`O(1)`ランタイム型チェック。
- [pydantic](https://github.com/samuelcolvin/pydantic) - Python型ヒントを使用したデータ解析。データクラスをサポート。
- [pytypes](https://github.com/Stewori/pytypes) - ランタイム型チェックに必要な豊かなユーティリティを提供。
- [strongtyping](https://github.com/FelixTheC/strongtyping) - 関数が正しい型のパラメータで呼び出されているかをチェックするデコレーター
- [typedpy](https://github.com/loyada/typedpy) - 型安全かつ厳密なPython。標準Pythonと良好に連携。
- [typeguard](https://github.com/agronholm/typeguard) - もう一つの実行時型チェックツール
- [typical](https://github.com/seandstewart/typical/) - 型ヒントを使用したデータパーサーと自動型変換。データクラス、標準クラス、関数署名などに対応。
- [trycast](https://github.com/davidfstr/trycast) - 型付き辞書（TypedDict）およびその他の標準Python型ヒントで定義された形状を持つJSONのような値をパース。

<a id="stub-packages"></a>
## スタブパッケージ

- [asgiref](https://github.com/django/asgiref) - ASGI仕様、ASGIサーバー向けの [asgiref.typing](https://github.com/django/asgiref/blob/main/asgiref/typing.py) モジュールに型アノテーションを提供。
- [boto3-stubs](https://vemel.github.io/boto3_stubs_docs/) - [boto3](https://github.com/boto/boto3) のスタブ。
- [botostubs](https://github.com/jeshan/botostubs) - どのIDEでも、boto3 APIのすべてに対してコード補完を提供。
- [celery-types](https://github.com/sbdchd/celery-types) - [Celery](https://github.com/celery/celery) および関連パッケージ [django-celery-results](https://github.com/celery/django-celery-results), [ampq](https://github.com/celery/py-amqp), [kombu](https://github.com/celery/kombu), [billiard](https://github.com/celery/billiard), [vine](https://github.com/celery/vine) および [ephem](https://github.com/brandon-rhodes/pyephem) の型スタブ。
- [django-stubs](https://github.com/typeddjango/django-stubs) - [Django](https://github.com/django/django) のスタブ。
- [djangorestframework-stubs](https://github.com/typeddjango/djangorestframework-stubs) - [DRF](https://github.com/encode/django-rest-framework) のスタブ。
- [grpc-stubs](https://github.com/shabbyrobe/grpc-stubs) - [grpc](https://github.com/grpc/grpc) のスタブ。
- [lxml-stubs](https://github.com/lxml/lxml-stubs) - [lxml](https://lxml.de) のスタブ。
- [PyQt5-stubs](https://github.com/stlehmann/PyQt5-stubs) - [PyQt5](https://www.riverbankcomputing.com/software/pyqt/intro) のスタブ。
- [python-phonenumbers-stubs](https://github.com/AA-Turner/python-phonenumbers-stubs) - [phonenumbers](https://github.com/daviddrysdale/python-phonenumbers) のスタブ。
- [pythonista-stubs](https://github.com/hbmartin/pythonista-stubs) - [Pythonista](http://omz-software.com/pythonista/docs/ios/) のスタブファイル。
- [scipy-stubs](https://github.com/jorenham/scipy-stubs) - [SciPy](https://github.com/scipy/scipy) のスタブファイル。
- [sqlalchemy-stubs](https://github.com/dropbox/sqlalchemy-stubs) - [SQLAlchemy](https://github.com/sqlalchemy/sqlalchemy) のスタブファイル。
- [sqlalchemy2-stubs](https://docs.sqlalchemy.org/en/14/orm/extensions/mypy.html) - [SQLAlchemy](https://www.sqlalchemy.org) の公式スタブおよび mypy プラグイン。
- [torchtyping](https://github.com/patrick-kidger/torchtyping) - [PyTorch](https://pytorch.org/) 用の強化型注釈。
- [types-aiobotocore](https://vemel.github.io/types_aiobotocore_docs/) - [aiobotocore](https://github.com/aio-libs/aiobotocore) のスタブファイル。
- [typeshed](https://github.com/python/typeshed) - 静的型を持つライブラリスタブのコレクション。

<a id="additional-types"></a>
## 追加の型

- [meiga](https://github.com/alice-biometrics/meiga) - シンプルで型付きかつモナドベースの Result 型。
- [option](https://github.com/MaT1g3R/option) - Rust 風の Option および Result 型。
- [optype](https://github.com/jorenham/optype) - 独自方針を持つ `collections.abc` と `operators` の代替。予測可能な名前を持つ柔軟な単一メソッドプロトコルと型付き演算子を提供します。
- [phantom-types](https://github.com/antonagestam/phantom-types) - ファントム型（Phantom types）。
- [returns](https://github.com/dry-python/returns) - 関数の返り値を意味のある、型付き、安全なものにします。
- [safetywrap](https://github.com/mplanchard/safetywrap) - 完全に型安全な、Rust 風の Result および Option 型。
- [typet](https://github.com/contains-io/typet) - 長さ制限付き型と動的オブジェクトの検証。
- [useful-types](https://github.com/hauntsaninja/useful_types) - 有用なプロトコルと型エイリアスのコレクション。

<a id="backports-and-improvements"></a>
## バックポートと改善

- [future-typing](https://github.com/PrettyWood/future-typing) - 標準コレクションやユニオン型における型ヒントのジェネリクス向けのバックポートとして `X | Y`を提供。
- [typing-extensions](https://github.com/python/typing_extensions) - バックポートされた実験的型ヒント。
- [typing-utils](https://github.com/bojiang/typing_utils) - 3.8以降のランタイム型ツール（例：get_origin）のバックポートおよびissubtypeの追加など。

<a id="tools"></a>
## ツール

<a id="linters"></a>
### Linter

- [flake8-annotations-complexity](https://github.com/best-doctor/flake8-annotations-complexity) - flake8向けのアノテーションの複雑性を検証するプラグイン。
- [flake8-annotations](https://github.com/sco1/flake8-annotations) - flake8向けのプラグインで、関数定義に型アノテーションが存在するかをチェック。
- [flake8-pyi](https://github.com/ambv/flake8-pyi) - flake8向けのプラグインで、型ヒント用のスタブファイルに特別化を提供。
- [flake8-type-checking](https://github.com/snok/flake8-type-checking) - 型アノテーションのみのインポートを正しく保護するためのプラグイン。
- [flake8-typing-imports](https://github.com/asottile/flake8-typing-imports) - 型のインポートが適切に保護されているかをチェックするプラグイン。
- [flake8-typing-only-imports](https://github.com/sondrelg/flake8-typing-only-imports) - 型チェックブロックにどのインポートを配置すべきか、およびインポートを移動した後の型アノテーションを調整するためのflake8プラグイン。
- [flake8-type-ignore](https://gitlab.com/jonafato/flake8-type-ignore/) - 型付きPythonコードで type: ignore コメントを禁止するflake8プラグイン。
- [wemake-python-styleguide](https://github.com/wemake-services/wemake-python-styleguide) - 非常に厳格で独自方針の強いPython linter。
- [Ruff](https://github.com/astral-sh/ruff/) - 非常に高速なlinterで、flake8など多数のlinterから取り入れたルールをサポート。

<a id="testing"></a>
### テスト

- [mypy-test](https://github.com/orsinium-labs/mypy-test) - mypyのプラグイン、スタブ、カスタム型をテスト。
- [pytest-mypy-plugins](https://github.com/typeddjango/pytest-mypy-plugins) - mypyの型、スタブ、プラグインをテストするPytestプラグイン。
- [pytest-mypy-testing](https://github.com/davidfritzsche/pytest-mypy-testing) - mypyの静的型解析をテストするPytestプラグイン。
- [pytest-mypy](https://github.com/dbader/pytest-mypy) - Pytest用のMypy静的型チェックプラグイン

<a id="working-with-types"></a>
### 型を扱う

- [com2ann](https://github.com/ilevkivskyi/com2ann) - 型コメントを型アノテーションに変換するツール
- [merge-pyi](https://github.com/google/pytype/tree/master/pytype/tools/merge_pyi) - pytypeツールチェーンの一部で、ソースコードにスタブファイルを適用する
- [mypy-baseline](https://github.com/orsinium-labs/mypy-baseline) - 既存コードベースとMypyを統合するCLIツールで、既存の型エラーは除外し、新たに発生したエラーのみを報告
- [mypy-protobuf](https://github.com/dropbox/mypy-protobuf) - protobufからMypyスタブを生成するツール
- [mypy-silent](https://github.com/whtsky/mypy-silent/) - Mypyを無効にするためにコードコメントを追加または削除する
- [mypyc](https://github.com/python/mypy/tree/master/mypyc) - Mypyでアノテートされた静的型のPythonモジュールをCPython C拡張にコンパイルする
- [retype](https://github.com/ambv/retype) - コードにスタブを適用する別のツール
- [typeforce](https://github.com/orsinium-labs/typeforce) - Python環境に型アノテーションを豊かにし、Mypyを強化するCLIツール
- [typesplainer](https://github.com/wasi-master/typesplainer) - Pythonの型を説明するツール
- [typing-inspect](https://github.com/ilevkivskyi/typing_inspect) - typing_inspectモジュールは、`typing`モジュールで定義された型を実行時で検査するための実験的APIを定義する
- [typing-json](https://pypi.org/project/typing-json/) - 型付きオブジェクトとJSONを扱うためのライブラリ

<a id="helper-tools-to-add-annotations-to-existing-code"></a>
### 既存コードへアノテーションを追加する補助ツール

- [autotyping](https://github.com/JelleZijlstra/autotyping) - 関数にbool、None、Optionalなどのシンプルな返却型アノテーションを自動的に追加する
- [infer-types](https://github.com/orsinium-labs/infer-types) - Pythonコードに型アノテーションを自動的に推論・追加するCLIツール
- [jsonschema-gentypes](https://github.com/camptocamp/jsonschema-gentypes) - JSONスキーマからTypedDictをもとにPython型を生成する
- [monkeytype](https://github.com/instagram/MonkeyType) - 関数の引数と返却値の実行時型を収集し、その型に基づいて自動的にスタブファイルを生成するか、あるいはコードにドラフト型アノテーションを直接追加できる。
- [no_implicit_optional](https://github.com/hauntsaninja/no_implicit_optional) - 暗黙的なオプショナル型ヒント [PEP 484](https://peps.python.org/pep-0484/#union-types) に適合するためのコード変更ツール。
- [pyannotate](https://github.com/dropbox/pyannotate) - 実行時における呼び出し引数と返却型に基づいてソースコードにアノテーションを挿入する。
- [PyTypes](https://github.com/pvs-hd-tea/PyTypes) - Pythonのトレースを用いて型を推論する。
- [pytest-annotate](https://github.com/kensho-technologies/pytest-annotate) - pytest用のPyannotateプラグイン。
- [pytest-monkeytype](https://github.com/mariusvniekerk/pytest-monkeytype) - pytest用のMonkeyTypeプラグイン。
- [pytype annotate-ast](https://github.com/google/pytype/tree/master/pytype/tools/annotate_ast) - ASTのノードにPython型をアノテーションするための進行中のツール。
- [RightTyper](https://github.com/RightTyper/RightTyper) - 関数の引数と返却値の型を生成するツール。RightTyperは、メモリ消費がほとんどなく、ほぼ全速力でコードを実行できる。
- [auto-optional](https://github.com/Luttik/auto-optional) - デフォルト引数が `None` の場合、型付き引数をオプショナルにする。

<a id="mypy-plugins"></a>
### Mypyプラグイン

- [kubernetes-typed](https://github.com/gordonbondon/kubernetes-typed) - Kubernetes [CRD](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/) の型チェックに必要なプラグイン。
- [loguru-mypy](https://github.com/kornicameister/loguru-mypy) - [loguru](https://github.com/Delgan/loguru) のサポートに必要なプラグイン。
- [mypy-zope](https://github.com/Shoobx/mypy-zope) - [zope.interface](https://zopeinterface.readthedocs.io/en/latest/) のサポートに必要なプラグイン。
- [mypy/plugins](https://github.com/python/mypy/tree/master/mypy/plugins) - すでにmypyへ統合されたプラグイン。
- [NumPy](https://numpy.org/devdocs/reference/typing.html) - [NumPy](https://numpy.org) のサポートに必要なプラグイン。
- [pynamodb-mypy](https://github.com/pynamodb/pynamodb-mypy) - [PynamoDB](https://github.com/pynamodb/PynamoDB) のサポートに必要なプラグイン。
- [pydantic](https://docs.pydantic.dev/latest/integrations/mypy/) - [Pydantic](https://docs.pydantic.dev/latest/)に対するプラグイン

<a id="integrations"></a>
## 連携

- [emacs-flycheck-mypy](https://github.com/lbolla/emacs-flycheck-mypy) - EmacsにおけるMypyの統合
- [mypy-playground](https://github.com/ymyzk/mypy-playground) - mypy用のオンラインプレーヤー
- [mypy-pycharm-plugin](https://github.com/dropbox/mypy-PyCharm-plugin) - PyCharmにおけるMypyの統合
- [pylance](https://github.com/microsoft/pylance-release) - VSCodeにおけるPyRightの統合
- [vim-mypy](https://github.com/Integralist/vim-mypy) - VimにおけるMypyの統合
- [nbQA](https://github.com/nbQA-dev/nbQA) - Jupyterノートブックでの型チェックツール（例：Mypy）の実行

<a id="articles"></a>
## 記事

<a id="peps"></a>
### PEP

- [PEP-3107](https://www.python.org/dev/peps/pep-3107) - 関数アノテーション
- [PEP-482](https://www.python.org/dev/peps/pep-0482/) - 型ヒントに関する文献概要
- [PEP-483](https://www.python.org/dev/peps/pep-0483/) - 型ヒントの理論
- [PEP-484](https://www.python.org/dev/peps/pep-0484/) - 型ヒント
- [PEP-526](https://www.python.org/dev/peps/pep-0526/) - 変数アノテーションの構文
- [PEP-544](https://www.python.org/dev/peps/pep-0544/) - プロトコル：構造的サブタイプ（静的ダックタイピング）
- [PEP-557](https://www.python.org/dev/peps/pep-0557/) - データクラス
- [PEP-560](https://www.python.org/dev/peps/pep-0560/) - 型定義モジュールおよびジェネリックタイプの基本的なサポート
- [PEP-561](https://www.python.org/dev/peps/pep-0561/) - 型の配布とパッケージ化情報
- [PEP-563](https://www.python.org/dev/peps/pep-0563/) - アノテーションの遅延評価
- [PEP-585](https://www.python.org/dev/peps/pep-0585/) - 標準コレクションにおける型ヒントのジェネリクス
- [PEP-586](https://www.python.org/dev/peps/pep-0586/) - リテラル型
- [PEP-589](https://www.python.org/dev/peps/pep-0589/) - TypedDict: キーが固定された辞書に対する型ヒント
- [PEP-591](https://www.python.org/dev/peps/pep-0591/) - typing に final クオリファイアを追加
- [PEP-593](https://www.python.org/dev/peps/pep-0593/) - 柔軟な関数と変数のアノテーション
- [PEP-604](https://www.python.org/dev/peps/pep-0604/) - Union[] に対する補完的な構文
- [PEP-612](https://www.python.org/dev/peps/pep-0612/) - パラメータ指定変数
- [PEP-613](https://www.python.org/dev/peps/pep-0613/) - 明示的な型エイリアス

<a id="third-party-articles"></a>
### サードパーティ記事

- [1-minute guide to real constants in Python](https://sobolevn.me/2018/07/real-python-contants) - `Final`定数と継承に関する完全なチュートリアル
- [Simple dependent types in Python](https://sobolevn.me/2019/01/simple-dependent-types-in-python) - `Literal`型に関する完全なチュートリアル
- [Testing mypy stubs, plugins, and types](https://sobolevn.me/2019/08/testing-mypy-types) - mypy型のテストに関する完全なチュートリアル
- [Our journey to type checking 4 million lines of Python](https://dropbox.tech/application/our-journey-to-type-checking-4-million-lines-of-python) - Dropboxはこの規模でのPython静的型チェックを導入した最初の企業の一つである
- [PyTest MonkeyType Introduction](https://dev.to/ldrscke/type-annotate-an-existing-python-django-codebase-with-monkeytype-254i) - 既存のPython DjangoコードベースにType Annotateを適用する：MonkeyType
- [The state of type hints in Python](https://bernat.tech/posts/the-state-of-type-hints-in-python/) - 2018年5月時点での情報です。
- [Type hints cheat sheet](https://mypy.readthedocs.io/en/latest/cheat_sheet_py3.html) - MyPyチームが提供する型注釈の書く手順のチェックシート。
- [Typechecking Django and DRF](https://sobolevn.me/2019/08/typechecking-django-and-drf) - Djangoにおける型チェックについての完全なチュートリアル。
- [Type Check Your Django Application](https://kracekumar.com/post/type_check_your_django_app/) - Djangoに型チェックを追加するための2つの最近の講演に基づく記事。
- [typing](https://docs.python.org/3/library/typing.html) - `typing`モジュールの公式Pythonドキュメント。
- [Python-typing-koans](https://github.com/kracekumar/python-typing-koans/) - Pythonにおけるオプションの静的型付けを学ぶための例集。
- [Python Type Checking (Guide)](https://realpython.com/python-type-checking/) - このガイドでは、Pythonの型チェックについて詳しく紹介します。
- [Adding type hints to urllib3](https://sethmlarson.dev/blog/2021-10-18/tests-arent-enough-case-study-after-adding-types-to-urllib3) - テストだけでは不十分：urllib3に型ヒントを追加するケーススタディ。
- [Adam Johnsons Blog](https://adamj.eu/tech/tag/mypy/) - Adam Johnsonが型付けの実践についてブログ記事を書いている。
- [ParamSpec Guide](https://sobolevn.me/2021/12/paramspec-guide) - 新しくリリースされた`PEP612`の機能により、関数とその署名に対して多くの高度な型付けが可能になります。
- [Static Typing Python Decorators](https://rednafi.github.io/reflections/static-typing-python-decorators.html) - Pythonにおける正確な静的型付けデコレーターは、厄介な業務です。ラッパー関数が、ラップされた関数のパラメータと返り値の型を静的に決定するために必要な型情報を隠蔽します。
- [How do mypy, Pyright, and ty compare?](https://pydevtools.com/handbook/explanation/how-do-mypy-pyright-and-ty-compare/) - 3つの主要なPython静的型チェックツールの詳細な比較（機能、パフォーマンス、トレードオフを含む）。
- [ty: A Complete Guide](https://pydevtools.com/handbook/explanation/ty-complete-guide/) - Astralから提供される高速Python型チェックツールtyに関する包括的なガイド。

<a id="related"></a>
## 関連項目

- [awesome-python](https://github.com/vinta/awesome-python) - 素晴らしいPythonフレームワーク、ライブラリ、ソフトウェア、リソースを厳選したリスト。
- [Python Developer Tooling Handbook](https://pydevtools.com/) - Python型チェックツール、リントツール、開発ツールに関する包括的なハンドブック。[mypy](https://pydevtools.com/handbook/reference/mypy/)、[Pyright](https://pydevtools.com/handbook/reference/pyright/)、[ty](https://pydevtools.com/handbook/reference/ty/)についての参照ページも含まれています。
- [python-typecheckers](https://github.com/ethanhs/python-typecheckers) - Python型チェックツールの一覧：静的および実行時。
