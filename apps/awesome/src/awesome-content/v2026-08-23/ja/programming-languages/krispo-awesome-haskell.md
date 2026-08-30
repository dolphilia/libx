---
title: "krispo/awesome-haskell"
description: "krispo/awesome-haskell の正規スナップショット"
licenseSource: "github-krispo-awesome-haskell-readme-md"
---

<a id="awesome-haskell"></a>
Awesome Haskell [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
=============

素晴らしいHaskellのリンク、フレームワーク、ライブラリおよびソフトウェアの補助リスト。[awesome](https://github.com/sindresorhus/awesome)プロジェクトの一部。

- [Awesome Haskell](#awesome-haskell)
    - [_基礎_](#basics)
    - [アルゴリズム](#algorithmics)
    - [音声・音楽・サウンド](#audio-music--sound)
    - [圏論](#category-theory)
    - [コンパイラ](#compilers)
    - [並行・並列処理](#concurrency--parallelism)
    - [設定](#configuration)
    - [暗号・ハッシュ](#cryptography--hashing)
    - [データアクセス](#data-access)
    - [データ形式](#data-formats)
    - [データサイエンス](#data-science)
    - [データ構造](#data-structures)
    - [データベース](#database)
    - [開発ツール](#development-tools)
    - [ドキュメント](#documentation)
    - [分散コンピューティング](#distributed-computing)
    - [エディター](#editors)
    - [拡張機能](#extensions)
    - [ゲーム](#games)
    - [GUI](#gui)
    - [グラフィックス](#graphics)
    - [ネットワーク](#network)
    - [数論](#number-theory)
    - [ウェブ／フレームワーク](#web--frameworks)
    - [テキスト処理](#text-processing)
    - [メッセージング](#messaging)
    - [言語](#languages)
    - [オペレーティングシステム](#operating-systems)
    - [プラットフォーム](#platforms)
    - [プログラミング](#programming)
    - [科学](#science)
    - [ストリーム処理](#streaming-processing)
- [資料](#resources)
    - [ウェブサイト](#websites)
    - [ブログ執筆者](#bloggers)
    - [コミュニティ](#community)
    - [チュートリアル](#tutorials)
    - [コース](#courses)
    - [カンファレンス](#conferences)
    - [パッケージ](#packages)
- [ライセンス](#license)


<a id="basics"></a>
## _基礎_

* [Alex](https://www.haskell.org/alex/) - ハスケル用の論理解析生成器
* [Cabal](https://www.haskell.org/cabal/) - ハスケルのライブラリやプログラムの構築とパッケージ化を行うシステム
* [GHC](https://www.haskell.org/ghc/) - ハスケル用の最適化されたネイティブコードコンパイラ
* [GHCi](https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/ghci.html) - ハスケル用のバイトコードインタープリタとインタラクティブなREPL環境
* [GHCup](https://www.haskell.org/ghcup) - 一般用途言語ハスケルのメインインストーラであるGHCup
* [Hackage](http://hackage.haskell.org/) - ハスケルコミュニティの中心となるパッケージアーカイブ
* [Haddock](https://www.haskell.org/haddock/) - 注釈付きハスケルソースコードから自動的にドキュメントを生成するツール
* [Happy](https://www.haskell.org/happy/) - ハスケル用のパーサー生成器
* [Hayoo](http://hayoo.fh-wedel.de/) - Hackageからすべてのパッケージを検索し、すべての関数と型定義を検索できる
* [Hoogle](https://www.haskell.org/hoogle/) - ハスケルAPI検索エンジン。関数名または近似型署名で、多くの標準ハスケルライブラリを検索できる
* [hsenv](https://github.com/Paczesiowa/hsenv/) - 孤立したハスケン環境を作成するツール。これにより、プロジェクトは現在インストールされているGHCバージョンとは異なるGHCバージョンを使用できる
* [Stack](https://github.com/commercialhaskell/stack) - マルチプラットフォーム対応ツール。ハスケルプロジェクトの構築を支援し、孤立したハスケル環境の作成やプロジェクトの依存関係の自動管理をサポート
* [Stackage](https://github.com/fpco/stackage) - "安定版Hackage"、Hackageから検証済みパッケージセットを作成するためのツール

<a id="algorithmics"></a>
## アルゴリズム

* [Theorem Provers](https://wiki.haskell.org/Applications_and_libraries/Theorem_provers) - 公式ウェブサイトリソース

    ---
* [Algorithm](http://hackage.haskell.org/packages/#cat:Algorithm) - 協働型のHackageリスト
* [Algorithm Visualization](http://hackage.haskell.org/packages/#cat:Algorithm%20Visualization) - 協働型のHackageリスト
* [Algorithms](http://hackage.haskell.org/packages/#cat:Algorithms) - 協働型のHackageリスト
* [Compression](http://hackage.haskell.org/packages/#cat:Compression) - 協働型のHackageリスト
* [Formal Languages](http://hackage.haskell.org/packages/#cat:Formal%20Languages) - 協働型のHackageリスト
* [Formal Methods](http://hackage.haskell.org/packages/#cat:Formal%20Methods) - 協働型のHackageリスト
* [Logic](http://hackage.haskell.org/packages/#cat:Logic) - 協働型のHackageリスト
* [Logic Programming](http://hackage.haskell.org/packages/#cat:Logic%20Programming) - 協働型のHackageリスト
* [Map Reduce](http://hackage.haskell.org/packages/#cat:MapReduce) - 協働型のHackageリスト
* [Graphs](http://hackage.haskell.org/packages/#cat:Graphs) - 協働型のHackageリスト
* [Optimization](http://hackage.haskell.org/packages/#cat:Optimization) - 協働型のHackageリスト
* [Simulation](http://hackage.haskell.org/packages/#cat:Simulation) - 協働型のHackageリスト
* [SMT](http://hackage.haskell.org/packages/#cat:SMT) - 充足性を理論としてモジュール化した（SMT）用の協働型のHackageリスト
* [Symbolic Computation](http://hackage.haskell.org/packages/#cat:Symbolic%20Computation) - 協働型のHackageリスト
* [Theorem Provers](http://hackage.haskell.org/packages/#cat:Theorem%20Provers) - 協働型のHackageリスト

<a id="audio-music--sound"></a>
## 音声・音楽・サウンド

* [Audio, music and sound](https://wiki.haskell.org/Applications_and_libraries/Music_and_sound) - 公式ウェブサイトリソース

    ---
* [Audio](http://hackage.haskell.org/packages/#cat:Audio) - 協働型のHackageリスト
* [Codec](http://hackage.haskell.org/packages/#cat:Codec) - 協働型のHackageリスト
* [Graphics](http://hackage.haskell.org/packages/#cat:Graphics) - 協働型のHackageリスト
* [Media](http://hackage.haskell.org/packages/#cat:Media) - 協働型のHackageリスト
* [Music](http://hackage.haskell.org/packages/#cat:Music) - 協働型のHackageリスト
* [Sound](http://hackage.haskell.org/packages/#cat:Sound) - 協働型のHackageリスト


<a id="category-theory"></a>
## 圏論

* [Adjunctions](http://hackage.haskell.org/packages/#cat:Adjunctions) - 協働型のHackageリスト
* [Algebra](http://hackage.haskell.org/packages/#cat:Algebra) - 協働型のHackageリスト
* [Categories](http://hackage.haskell.org/packages/#cat:Categories) - 協働型のHackageリスト
* [Combinators](http://hackage.haskell.org/packages/#cat:Combinators) - 協働型のHackageリスト
* [Comonads](http://hackage.haskell.org/packages/#cat:Comonads) - 協働型のHackageリスト
* [Composition](http://hackage.haskell.org/packages/#cat:Composition) - 協働型のHackageリスト
* [Computer Algebra](http://hackage.haskell.org/packages/#cat:Computer%20Algebra) - 協働型のHackageリスト
* [Constraints](http://hackage.haskell.org/packages/#cat:Constraints) - 協働型のHackageリスト
* [Functors](http://hackage.haskell.org/packages/#cat:Functors) - 協働型のHackageリスト
* [Monad](http://hackage.haskell.org/packages/#cat:Monad) - 協働型のHackageリスト
* [Monads](http://hackage.haskell.org/packages/#cat:Monads) - 協働型のHackageリスト
* [Semigroups](http://hackage.haskell.org/packages/#cat:Semigroups) - 協働型のHackageリスト

<a id="compilers"></a>
## コンパイラ

* [Compilers & Interpreters](https://wiki.haskell.org/Applications_and_libraries/Compilers_and_interpreters) - 公式ウェブサイトリソース
* [Compiler construction, lexing, parsing, pretty printing](https://wiki.haskell.org/Applications_and_libraries/Compiler_tools) - 公式ウェブサイトリソース

    ---
* [Compiler](http://hackage.haskell.org/packages/#cat:Compiler) - 協働型のHackageリスト
* [Compiler Plugin](http://hackage.haskell.org/packages/#cat:Compiler%20Plugin) - 協働型のHackageリスト
* [Compilers/Interpreters](http://hackage.haskell.org/packages/#cat:Compilers/Interpreters) - 協働型のHackageリスト

<a id="concurrency--parallelism"></a>
## 並行・並列処理

* [Concurrency & Parallelism](https://wiki.haskell.org/Applications_and_libraries/Concurrency_and_parallelism) - 公式ウェブサイトの情報

    ---
* [Concurrency](http://hackage.haskell.org/packages/#cat:Concurrency) - 協働型のHackageリスト
* [Concurrent](http://hackage.haskell.org/packages/#cat:Concurrent) - 協働型のHackageリスト
* [Functional Reactive Programming](http://hackage.haskell.org/packages/#cat:FRP) - 協働型のHackageリスト
* [Parallelism](http://hackage.haskell.org/packages/#cat:Parallelism) - 協働型のHackageリスト

    ---
* [Concurrency & Parallelism](http://chimera.labs.oreilly.com/books/1230000000929/index.html) - (書籍) Haskellにおける並列および同時プログラミング

<a id="configuration"></a>
## 設定

* [Deiko-config](http://hackage.haskell.org/package/deiko-config) - 小さな型安全なライブラリで [HOCON](https://github.com/lightbend/config#features-of-hocon) コンフィギュレーション形式を使用
* [Dhall](https://github.com/dhall-lang/dhall-haskell) - 終了を保証する構成言語
* [Configurator](http://hackage.haskell.org/package/configurator) - 構成ファイルの変更に応じて自動的に動的に再読み込みをサポートする構成管理ライブラリ

<a id="cryptography--hashing"></a>
## 暗号・ハッシュ

* [Cryptography & Hashing](https://wiki.haskell.org/Applications_and_libraries/Cryptography) - 公式ウェブサイトリソース

    ---
* [Crypto](http://hackage.haskell.org/packages/#cat:Crypto) - 協働型のHackageリスト
* [Cryptography](http://hackage.haskell.org/packages/#cat:Cryptography) - 協働型のHackageリスト


<a id="data-access"></a>
## データアクセス

* [Haxl](https://github.com/facebook/Haxl) - 効率的かつ並列化された簡潔なデータアクセスを支援するライブラリ

<a id="data-formats"></a>
## データ形式

* [JSON](http://hackage.haskell.org/packages/#cat:JSON) - 協働型のHackageリスト
* [PDF](http://hackage.haskell.org/packages/#cat:PDF) - 協働型のHackageリスト
* [XML](http://hackage.haskell.org/packages/#cat:XML) - 協働型のHackageリスト
* [RSS](http://hackage.haskell.org/packages/#cat:RSS) - 協働型のHackageリスト

<a id="data-science"></a>
## データサイエンス
* [Linguistics and natural language processing](https://wiki.haskell.org/Applications_and_libraries/Linguistics) - 公式ウェブサイトリソース
* [Robotics](https://wiki.haskell.org/Applications_and_libraries/Robotics) - 公式ウェブサイトリソース

    ---
* [Artificial Intelligence](http://hackage.haskell.org/packages/#cat:AI) - 協働型のHackageリスト
* [Argumentations](http://hackage.haskell.org/packages/#cat:Argumentation) - 協働型のHackageリスト
* [Classification](http://hackage.haskell.org/packages/#cat:Classification) - 協働型のHackageリスト
* [Clustering](http://hackage.haskell.org/packages/#cat:Clustering) - 協働型のHackageリスト
* [Data Mining](http://hackage.haskell.org/packages/#cat:Data%20Mining) - 協働型のHackageリスト
* [Datamining](http://hackage.haskell.org/packages/#cat:Datamining) - 協働型のHackageリスト
* [Image Processing](http://hackage.haskell.org/packages/#cat:Image%20Processing) - 協働型のHackageリスト
* [Machine Learning](http://hackage.haskell.org/packages/#cat:Machine%20Learning) - 協働型のHackageリスト
* [Machine Vision](http://hackage.haskell.org/packages/#cat:Machine%20Vision) - 協働型のHackageリスト
* [Natural Language Processing](http://hackage.haskell.org/packages/#cat:Natural%20Language%20Processing) - 協働型のHackageリスト
* [Pattern Classification](http://hackage.haskell.org/packages/#cat:Pattern%20Classification) - 協働型のHackageリスト
* [Pattern Recognition](http://hackage.haskell.org/packages/#cat:Pattern%20Recognition) - 協働型のHackageリスト
* [Search](http://hackage.haskell.org/packages/#cat:Search) - 協働型のHackageリスト
* [Statistics](http://hackage.haskell.org/packages/#cat:Statistics) - 協働型のHackageリスト
* [Text Recognition](http://hackage.haskell.org/packages/#cat:Text%20Recognition) - 協働型のHackageリスト
* [Robotics](http://hackage.haskell.org/packages/#cat:Robotics) - 協働型のHackageリスト

    ---
*Additional libraries*
* [m2cgen](https://github.com/BayesWitnesses/m2cgen) - トレーニングされた古典的な機械学習モデルをゼロ依存でネイティブなHaskellコードに変換するCLIツール

<a id="data-structures"></a>
## データ構造
* [Data Structures & IO Libraries](https://wiki.haskell.org/Applications_and_libraries/Data_structures) - 公式ウェブサイトリソース

    ---
* [Advanced Structures](http://hackage.haskell.org/packages/#cat:Structures) - 協働型のHackageリスト
* [Bit Vectors](http://hackage.haskell.org/packages/#cat:Bit%20Vectors) - 協働型のHackageリスト
* [Containers](http://hackage.haskell.org/packages/#cat:Containers) - 協働型のHackageリスト
* [Data Structures](http://hackage.haskell.org/packages/#cat:Data%20Structures) - 協働型のHackageリスト
* [Enumerator](http://hackage.haskell.org/packages/#cat:Enumerator) - 協働型のHackageリスト
* [Generics](http://hackage.haskell.org/packages/#cat:Generics) - 協働型のHackageリスト
* [List](http://hackage.haskell.org/packages/#cat:List) - 協働型のHackageリスト
* [Tree](http://hackage.haskell.org/packages/#cat:Tree) - 協働型のHackageリスト
* [Vector](http://hackage.haskell.org/packages/#cat:Vector) - 協働型のHackageリスト

<a id="database"></a>
## データベース
* [Database Interfaces](https://wiki.haskell.org/Applications_and_libraries/Database_interfaces) - 公式ウェブサイトリソース

    ---
* [Database](http://hackage.haskell.org/packages/#cat:Database) - 協働型のHackageリスト

<a id="development-tools"></a>
## 開発ツール
* [Development Libraries and Tools](https://wiki.haskell.org/Development_Libraries_and_Tools) - 公式ウェブサイトリソース

    ---
* [Debug](http://hackage.haskell.org/packages/#cat:Debug) - 協働型のHackageリスト
* [IDE](http://hackage.haskell.org/packages/#cat:IDE) - 協働型のHackageリスト
* [Test](http://hackage.haskell.org/packages/#cat:Test) - 協働型のHackageリスト
* [Testing](http://hackage.haskell.org/packages/#cat:Testing) - 協働型のHackageリスト
* [Logging](http://hackage.haskell.org/packages/#cat:Logging) - 協働型のHackageリスト
* [CLI Tool](http://hackage.haskell.org/packages/#cat:CLI%20Tool) - 協働型のHackageリスト
* [Monitoring](http://hackage.haskell.org/packages/#cat:Monitoring) - 協働型のHackageリスト

<a id="distributed-computing"></a>
## 分散コンピューティング

* [Distributed Computing](http://hackage.haskell.org/packages/#cat:Distributed%20Computing) - 協働型のHackageリスト

    ---
* [Cloud Haskell](http://haskell-distributed.github.io/) - ハスケルでの並列および分散プログラミング


<a id="documentation"></a>
## ドキュメント

* [Documentation](http://hackage.haskell.org/packages/#cat:Documentation) - 協働型のHackageリスト

<a id="editors"></a>
## エディター

* [Editors written in Haskell](https://wiki.haskell.org/Applications_and_libraries/Editors) - 公式ウェブサイトリソース
* [editors for Haskell](https://wiki.haskell.org/Editors) - 公式ウェブサイトリソース

<a id="extensions"></a>
## 拡張機能

* [Extended Haskell](https://wiki.haskell.org/Applications_and_libraries/Extended_Haskell) - 公式ウェブサイトリソース

<a id="games"></a>
## ゲーム
* [Games](https://wiki.haskell.org/Applications_and_libraries/Games) - 公式ウェブサイトリソース

    ---
* [Game](http://hackage.haskell.org/packages/#cat:Game) - 協働型のHackageリスト
* [Game Engine](http://hackage.haskell.org/packages/#cat:Game%20Engine) - 協働型のHackageリスト

<a id="gui"></a>
## GUI
* [Graphical User Interface (GUI) Libraries](https://wiki.haskell.org/Applications_and_libraries/GUI_libraries) - 公式ウェブサイトリソース

    ---
* [GUI](http://hackage.haskell.org/packages/#cat:GUI) - 協働型のHackageリスト
* [User Interfaces](http://hackage.haskell.org/packages/#cat:User%20Interfaces) - 協働型のHackageリスト

<a id="graphics"></a>
## グラフィックス
* [Graphics](https://wiki.haskell.org/Applications_and_libraries/Graphics) - 公式ウェブサイトリソース

    ---
* [Graphics](http://hackage.haskell.org/packages/#cat:Graphics) - 協働型のHackageリスト

<a id="network"></a>
## ネットワーク

* [Network](https://wiki.haskell.org/Applications_and_libraries/Network) - 公式ウェブサイトリソース

    ---
* [Network](http://hackage.haskell.org/packages/#cat:Network) - 協働型のHackageリスト

<a id="number-theory"></a>
## 数論

* [Number Theory](http://hackage.haskell.org/packages/#cat:Number%20Theory) - 協働型のHackageリスト
* [Numeric](http://hackage.haskell.org/packages/#cat:Numeric) - 協働型のHackageリスト
* [Numerical](http://hackage.haskell.org/packages/#cat:Numerical) - 協働型のHackageリスト
* [Math](http://hackage.haskell.org/packages/#cat:Math) - 協働型のHackageリスト


<a id="web--frameworks"></a>
## ウェブ／フレームワーク

* [Web Servers](https://wiki.haskell.org/Web/Servers) - 公式ウェブサイトリソース
* [Web Frameworks](https://wiki.haskell.org/Web/Frameworks) - 公式ウェブサイトリソース
* [Cloud](https://wiki.haskell.org/Web/Cloud) - 公式ウェブサイトリソース
* [Deploy](https://wiki.haskell.org/Web/Deploy) - 公式ウェブサイトリソース
* [Libraries](https://wiki.haskell.org/Web/Libraries) - 公式ウェブサイトリソース
* [Interfaces to Frameworks]() - 公式ウェブサイトリソース
* [Database and Persistence](https://wiki.haskell.org/Web/Databases_and_Persistence) - 公式ウェブサイトリソース
* [Testing and Verification](https://wiki.haskell.org/Web/Testing_and_Verification) - 公式ウェブサイトリソース
* [CMS](https://wiki.haskell.org/Web/Content_Management) - コンテンツ管理システム（CMS）向けの公式ウェブサイトリソース
* [IHP: Integrated Haskell Platform](https://ihp.digitallyinduced.com/) - The best way to get started with haskell web dev.
    ---
* [Web](http://hackage.haskell.org/packages/#cat:Web) - フレームワーク、ライブラリ、...を含む協働型のHackageリスト

    ---
*Additional libraries*
* [HTTP](https://github.com/haskell/HTTP) - HaskellのHTTPパッケージ。Haskellでクライアントサイドのウェブプログラミングをサポート。
* [hoauth2](https://github.com/freizl/hoauth2) - 軽量な OAuth2 の Haskell バインディング

<a id="text-processing"></a>
## テキスト処理

* [Pandoc](http://pandoc.org/) - マークアップフォーマットの相互変換を行うライブラリと、そのライブラリを使用するコマンドラインツール


<a id="messaging"></a>
## メッセージング

* [SimpleX Chat](https://github.com/simplex-chat/simplex-chat) - 設計上100％プライベートな最初のチャットプラットフォーム — あなたの接続グラフへのアクセスはありません！
* [Stomp](http://stomp.github.io/) - シンプル（またはストリーミング）テキスト指向メッセージプロトコル。 [Resources](http://hackage.haskell.org/packages/#cat:Stomp)
* [amqp](https://github.com/hreinhardt/amqp) - AMQPサーバー（現在はRabbitMQのみ）向けのクライアントライブラリ
* [IRC](http://hackage.haskell.org/packages/#cat:IRC) - インターネットリレーチャット（IRC）向けの協働Hackageリスト
* [IRC Client](http://hackage.haskell.org/packages/#cat:IRC Client) - a collaborative Hackage list.

<a id="languages"></a>
## 言語

* [Tools for interfacing with other languages](https://wiki.haskell.org/Applications_and_libraries/Interfacing_other_languages) - 公式ウェブサイトリソース

    ---
* [Code Generation](http://hackage.haskell.org/packages/#cat:Code%20Generation) - 協働型のHackageリスト
* [FFI](http://hackage.haskell.org/packages/#cat:FFI) - 協働型のHackageリスト
* [FFI Tools](http://hackage.haskell.org/packages/#cat:FFI%20Tools) - 協働型のHackageリスト
* [HTML](http://hackage.haskell.org/packages/#cat:HTML) - 協働型のHackageリスト
* [Java](http://hackage.haskell.org/packages/#cat:Java) - 協働型のHackageリスト
* [Javascript](http://hackage.haskell.org/packages/#cat:Javascript) - 協働型のHackageリスト
* [LaTex](http://hackage.haskell.org/packages/#cat:LaTeX) - 協働型のHackageリスト
* [Lua](http://hackage.haskell.org/packages/#cat:LUA) - 協働型のHackageリスト

    ---
*Additional languages on top of Haskell*
* [Fay](http://fay-lang.org/) - JavaScriptにコンパイル可能なHaskellの適切な部分集合
* [Idris](https://github.com/idris-lang/Idris-dev) - 依存型関数型プログラミング言語
* [Copilot](http://leepike.github.io/Copilot/) - （Haskell DSL）ストリーム言語でハードリアルタイムCコードを生成するもの
* [Wasp](https://wasp-lang.dev/) - 少ないコードでフルスタックJavaScriptウェブアプリを開発できるシンプルな言語（Haskellで構築）

<a id="operating-systems"></a>
## オペレーティングシステム

* [Operating systems and systems programming](https://wiki.haskell.org/Applications_and_libraries/Operating_system) - 公式ウェブサイトリソース

    ---
* [BSD](http://hackage.haskell.org/packages/#cat:BSD) - 協働型のHackageリスト
* [Fedora](http://hackage.haskell.org/packages/#cat:Fedora) - 協働型のHackageリスト
* [Gentoo](http://hackage.haskell.org/packages/#cat:Gentoo) - 協働型のHackageリスト
* [Linux](http://hackage.haskell.org/packages/#cat:Linux) - 協働型のHackageリスト
* [System](http://hackage.haskell.org/packages/#cat:System) - 協働型のHackageリスト

<a id="platforms"></a>
## プラットフォーム

* [.NET](http://hackage.haskell.org/packages/#cat:.NET) - 協働型のHackageリスト
* [Apple](http://hackage.haskell.org/packages/#cat:Apple) - 協働型のHackageリスト
* [JVM](http://hackage.haskell.org/packages/#cat:JVM) - 協働型のHackageリスト
* [Mobile](http://hackage.haskell.org/packages/#cat:Mobile) - 協働型のHackageリスト

<a id="programming"></a>
## プログラミング

* [Generic Programming](https://wiki.haskell.org/Applications_and_libraries/Generic_programming) - 公式ウェブサイトリソース

    ---
* [Aspect Oriented Programming](http://hackage.haskell.org/packages/#cat:Aspect%20Oriented%20Programming) - 協働型のHackageリスト
* [Generic Programming](http://hackage.haskell.org/packages/#cat:Generics) - 協働型のHackageリスト
* [Logic Programming](http://hackage.haskell.org/packages/#cat:Logic) - 協働型のHackageリスト
* [Reactive Programming](http://hackage.haskell.org/packages/#cat:Reactivity) - 協働型のHackageリスト
* [Visual Programming](http://hackage.haskell.org/packages/#cat:Visual%20Programming) - 協働型のHackageリスト

<a id="science"></a>
## 科学

* [Bioinformatics](https://wiki.haskell.org/Applications_and_libraries/Bioinformatics) - 公式ウェブサイトリソース
* [Mathematics & Physics](https://wiki.haskell.org/Applications_and_libraries/Mathematics) - 公式ウェブサイトリソース

    ---
* [Chemistry](http://hackage.haskell.org/packages/#cat:Chemistry) - 協働型のHackageリスト
* [Bioinformatics](http://hackage.haskell.org/packages/#cat:Bioinformatics) - 協働型のHackageリスト
* [Finance](http://hackage.haskell.org/packages/#cat:Finance) - 協働型のHackageリスト
* [Physics](http://hackage.haskell.org/packages/#cat:Physics) - 協働型のHackageリスト
* [Science](http://hackage.haskell.org/packages/#cat:Science) - 協働型のHackageリスト
* [Scientific Simulation](http://hackage.haskell.org/packages/#cat:Scientific%20Simulation) - 協働型のHackageリスト

<a id="streaming-processing"></a>
## ストリーム処理

* [Conduit](https://github.com/snoyberg/conduit) - ストリーミングデータ用のライブラリ。 [Resources](http://hackage.haskell.org/packages/#cat:Conduit)
* [IO-Streams](http://hackage.haskell.org/packages/#cat:IO-Streams) - 協働型のHackageリスト
* [Pipes](https://github.com/Gabriel439/Haskell-Pipes-Library) - クリーンで強力なストリーム処理ライブラリであり、再利用可能なストリーミングコンポーネントの構築と接続を可能にします。 [Resources](http://hackage.haskell.org/packages/#cat:Pipes)
* [HStreamDB](https://github.com/hstreamdb/hstream) - IoTデータのストレージおよびリアルタイム処理に最適化されたストリーミングデータベース。

<a id="resources"></a>
# 資料

<a id="websites"></a>
## ウェブサイト

* [Haskell](https://www.haskell.org/) - 公式サイト
* [The Haskell Programming Language](https://wiki.haskell.org/Haskell) - ハスケルウィキ。
* [Try Haskell](http://tryhaskell.org/) - Haskell Online
* [School of Haskell](https://www.schoolofhaskell.com/) - Haskellを学ぶ

<a id="bloggers"></a>
## ブログ執筆者

* [Neil Mitchell](https://neilmitchell.blogspot.com/) - Neil MitchellのHaskellブログ


<a id="community"></a>
## コミュニティ

* [Community](https://www.haskell.org/community) - 公式コミュニティリソース
* [Reddit](https://www.reddit.com/r/haskell/)
* [Stackoverflow](http://stackoverflow.com/questions/tagged?tagnames=haskell)
* [G+](https://plus.google.com/communities/104818126031270146189)
* [Mailing lists](https://wiki.haskell.org/Mailing_lists)
* [IRC channels](https://wiki.haskell.org/IRC_channel)
* [Local user groups](https://wiki.haskell.org/User_groups)
* [Planet Haskell](http://planet.haskell.org/)
* [Haskell Communities and Activities Report](https://wiki.haskell.org/Haskell_Communities_and_Activities_Report)

<a id="tutorials"></a>
## チュートリアル

* [Documentation](https://www.haskell.org/documentation) - 公式ドキュメンテーションリソース
* [Learn Haskell](https://wiki.haskell.org/Learning_Haskell) - Wiki学習リソース
* [Books](https://wiki.haskell.org/Books) & [Tutorials](https://wiki.haskell.org/Tutorials)
* [learnhaskell](https://github.com/bitemyapp/learnhaskell) - Haskell学習（英語以外の話者にも対応）。
* [What I Wish I Knew When Learning Haskell](http://dev.stephendiehl.com/hask/) - あらゆる種類の事柄についての素晴らしいガイド
* [LearnYouHaskell](http://learnyouahaskell.com/chapters) - ハスケルを学ぶための素晴らしい本！
* [Happy Learn Haskell Tutorial](http://happylearnhaskelltutorial.com/) - カートンロボットを使ったストレスフリーかつ段階的なHaskellチュートリアル!
* [Revised report](https://www.haskell.org/onlinereport/) - Haskell 98言語とライブラリ。改訂報告書。
* [H-99](https://wiki.haskell.org/H-99:_Ninety-Nine_Haskell_Problems) -  99のハスケル問題

    ### Web Tutorials
    * [Introduction to Haskell - Web Programming](http://www.shakthimaan.com/posts/2016/01/27/haskell-web-programming/news.html)
    * [Your First Web Application with Spock](https://haskell-at-work.com/episodes/2018-04-09-your-first-web-application-with-spock.html)
    * [Scotty-Tutorials-&-Examples](https://github.com/scotty-web/scotty/wiki/Scotty-Tutorials-&-Examples)
    * [Getting Started](https://www.spock.li/tutorials/getting-started)
    * [Developing Web Applications with Yesod and Haskell](https://www.yesodweb.com/book-1.6)

<a id="video-tutorials"></a>
### 動画チュートリアル

* [Redoing Make - Haskell from Scratch](http://www.youtube.com/playlist?list=PLxj9UAX4Em-Ij4TKwKvo-SLp-Zbv-hB4B)
* [Haskell - Code Deconstructed](http://www.youtube.com/playlist?list=PLxj9UAX4Em-IBXkvcC3MycLlcxyoi7v8B)
* [Adventures in Haskell - A Calculator](http://www.youtube.com/playlist?list=PL_xuff3BkASMOzBr0hKVKLuSnU4UIinKx)
* [Sed implementation in Haskell](http://www.youtube.com/playlist?list=PLUQzXLQ6jvHL_k3QOMKXehVoZdk-sKtHd)
* [LazyCasts](http://www.youtube.com/user/LazyCasts)
* [Haskell Development Workflow Demo](http://www.youtube.com/watch?v=Li6oaO8x2VY)
* [Learn You a Haskell](https://www.youtube.com/watch?v=NBKnY7Z_w3I&list=PLPqPwGvHPSZB-urE6QFjKYt6AGXcZqJUh) - 本『Learn You a Haskell for Great Good!』を補助するビデオ講義
* [Awesome Haskell Videos](https://github.com/andys8/awesome-haskell-videos) - ハスケルの講演とチュートリアルを厳選したリスト
* [IHP Casts](https://ihpcasts.com/ShowEpisode?episodeId=ab384647-3665-4a36-b5e5-e05fea6c2288) ハスケルとIHPを使ってタイプセーフなウェブアプリを構築する方法を学ぶ

<a id="courses"></a>
## コース

* [Introduction to Functional Programming](https://www.edx.org/course/introduction-functional-programming-delftx-fp101x-0) - デルフトXが提供するedXの2014年秋のMOOCで、ハスケルが主な言語として使用されている
* [Functional Programming in Haskell](https://www.futurelearn.com/courses/functional-programming-haskell/) - グラスゴ大学が提供するハスケルによる関数型プログラミングの入門MOOC
* [Haskell MOOC](https://haskell.mooc.fi/) - ヘルシンキ大学が提供するハスケルを用いた関数型プログラミングのMOOC

<a id="conferences"></a>
## カンファレンス

* [ICFP](http://www.icfpconference.org/) - 国際関数型プログラミング大会。 [Youtube channel](https://www.youtube.com/channel/UCwRL68qZFfub1Ep1EScfmBw).
* [Conferences](https://wiki.haskell.org/Conferences) - 公式の会議一覧
* [Haskell Symposium 2015](https://www.youtube.com/playlist?list=PLnqUlCo055hV5dPC-4VWeXzhI8ooeTsVy)
* [Haskell Implementors' Workshop 2015](https://www.youtube.com/playlist?list=PLnqUlCo055hVfNkQHP7z43r10yNo-mc7B)

<a id="packages"></a>
## パッケージ

* [Stackage](https://www.stackage.org/) - 安定したハスケルパッケージのソースである『Stable Hackage』
* [Hackage](http://hackage.haskell.org/) - ハスケドコミュニティの中心となるパッケージアーカイブ
* [Application & Libraries](https://wiki.haskell.org/Applications_and_libraries) - 公式のコレクションとガイド
* [Hoogle](https://www.haskell.org/hoogle/) - ハスケルAPI検索エンジンであり、関数名または近似型署名で多くの標準ハスケルライブラリを検索できる
* [Hayoo](http://hayoo.fh-wedel.de/) - Hackageからすべてのパッケージを検索し、すべての関数と型定義を検索できる

<a id="best-practices"></a>
## ベストプラクティス
* [Haskell Style Guide](https://kowainik.github.io/posts/2019-02-06-style-guide)
<a id="license"></a>
# ライセンス

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)
