---
title: "pest-parser/awesome-pest"
description: "pest-parser/awesome-pest の定本スナップショット"
licenseSource: "github-pest-parser-awesome-pest-readme-md"
---

# Awesome Pest. The Elegant Parser [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://avatars.githubusercontent.com/u/26044607" align="right" width="100">](https://github.com/pest-parser/pest/)

> Rust の pest パーサージェネレーターを使う、または pest 向けのリソース、プロジェクト、ツールの厳選リスト

pest は、アクセシビリティ、正確性、パフォーマンスを重視して Rust で書かれた汎用パーサーです。正規表現と精神的には似ていますが、複雑な言語の解析に必要な高い表現力を提供する構文解析式文法（[PEG](https://en.wikipedia.org/wiki/Parsing_expression_grammar)）を入力として使用します。

貢献を歓迎します。まず [contribution guidelines](https://github.com/pest-parser/awesome-pest/blob/eae74f52bc40d120c974590e33aa9fe61e7f7185/contributing.md) をお読みください。

## 目次

- [リソース](#resources)
- [プロジェクト](#projects)
- [ツール群](#tooling)

## リソース

- [Book](https://pest.rs/book) - pest でパースを始める推奨方法は、この公式書籍を読むことです。
- [API reference on docs.rs](https://docs.rs/pest)
- [fiddle editor on pest.rs](https://pest.rs/#editor) - 公式ウェブサイトで文法を試し、共有できます（また、整形もできます！）。
- [Gitter](https://gitter.im/pest-parser/pest)
- [Discord](https://discord.gg/XEGACtWpT2)
- [GitHub Discussions](https://github.com/pest-parser/pest/discussions)

## プロジェクト

pest を使うプロジェクト例:

- [pest_meta](https://github.com/pest-parser/pest/blob/master/meta/src/grammar.pest) - pest 自身は pest を用いてブートストラップされています。
- [AshPaper](https://github.com/shnewto/ashpaper) - William Hicks が考案した Esopo 言語 AshPaper 用の Rust インタープリター。
- [cicada](https://github.com/mitnk/cicada) - Rust で書かれた、昔ながらの bash 風 Unix シェル。
- [elastic-rs](https://github.com/cch123/elastic-rs) - Rust で bool 式を Elasticsearch DSL に変換します。
- [handlebars-rust](https://github.com/sunng87/handlebars-rust) - Handlebars による Rust テンプレート処理。
- [hexdino](https://github.com/Luz/hexdino) - Rust で書かれた vim 風キーバインドを持つ16進エディター。
- [insta](https://github.com/mitsuhiko/insta) - Rust 用のスナップショットテストライブラリー。
- [jql](https://github.com/yamafaktory/jql) - JSON Query Language CLI ツール。
- [json5-rs](https://github.com/callum-oakley/json5-rs) - Serde を利用する Rust JSON5 シリアライザーおよびデシリアライザー。
- [mt940](https://github.com/svenstaro/mt940-rs) - Rust による MT940 パーサー。
- [py_literal](https://github.com/jturner314/py_literal) - Python リテラルを解析・整形するための Rust crate。
- [rouler](https://github.com/jarcane/rouler) - Rust 向けの使いやすいサイコロロールライブラリー。
- [RuSh](https://github.com/lwandrebeck/RuSh) - Rust で書かれた、多くの魅力を備えた bash 互換シェルを目指すプロジェクト。
- [rs_pbrt](https://github.com/wahn/rs_pbrt) - PBRT 本（第3版）の C++ コードに対応する実装のための Rust crate。
- [stache](https://github.com/dgraham/stache) - Mustache テンプレートコンパイラー。
- [tera](https://github.com/Keats/tera) - Jinja2/Django に基づく Rust テンプレートエンジン。
- [ZoKrates](https://github.com/ZoKrates/ZoKrates) - Ethereum 上の zkSNARK 向けツールボックス。
- [Vector](https://github.com/timberio/vector) - 高性能な可観測性データパイプライン。
- [AutoCorrect](https://github.com/huacnlee/autocorrect) - CJK（中国語、日本語、韓国語）の間のコピーライティング改善、空白・単語・句読点の修正を支援するリンター・フォーマッター。
- [yaml-peg](https://github.com/aofdev/yaml-peg) - Rust で書かれた YAML 用 PEG パーサー。
- [qubit](https://github.com/abhimanyu003/qubit) - Rust と WebAssembly に基づく便利な計算機。
- [caith](https://github.com/Geobert/caith) - サイコロローラー crate。
- [Melody](https://github.com/yoav-lavi/melody) - 正規表現へコンパイルされ、より読みやすく保守しやすいことを目指す言語。
- [PTA-Parser](https://github.com/AltaModaTech/pta-parser/) - [Beancount](https://github.com/beancount/beancount)、[Ledger](https://github.com/ledger/ledger)、その他の PTA 形式向けに Rust で構築されたプレーンテキスト会計パーサー。
- [Keadex Mina](https://github.com/keadex/keadex) - C4-PlantUML によるコーディングと、大規模な C4 モデル図の整理を行うオープンソース・サーバーレス IDE。
- [Liquid Grammar](https://github.com/rust-utilities/liquid-grammar-pest/) - 利用する crate 向けに、Shopify [Liquid](https://shopify.github.io/liquid/)（ハッシュタグは _not-sponsored_ または _affiliated_ ではありません）の `Pairs` および／または `Rules` を生成します。
- [ws2markdown](https://code.rosaelefanten.org/ws2markdown) - WordStar 文書を Markdown ファイルに変換します。
- [TypeQL Rust](https://github.com/typedb/typeql/tree/master/rust) - Pest で書かれた TypeDB のクエリ言語。
- [Woxi](https://github.com/ad-si/Woxi) - Wolfram Language のサブセット向けインタープリターおよびコンピューター代数システム。
- [Amble](https://github.com/pygmy-twylyte/amble) - パーサー（テキストアドベンチャー）ゲーム開発プラットフォーム（プレイヤー入力のパースと世界作成に使う DSL の両方で Pest を使用）。

## ツール群

### IDE サポート

- [pest IDE tools](https://github.com/pest-parser/pest-ide-tools) - LSP サーバーと VSCode 拡張機能を備えたメインリポジトリ。
- [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=pest.pest-ide-tools)
- [IntelliJ IDEA Plugin](https://plugins.jetbrains.com/plugin/12046-pest)
- [pest.vim](https://github.com/pest-parser/pest.vim)
- [pest-fmt](https://github.com/pest-parser/pest-fmt) - pest 文法の整形に役立ちます。
- [pest web debugger](https://github.com/tomtau/pest-web-debug) - [オンライン](https://tomtau.github.io/pest-web-debug/)で試せます。

### ボイラープレート削減とテスト

- [pest-ast](https://github.com/pest-parser/ast) - pest のパースツリーを抽象構文木へ変換する際のボイラープレート削減に役立ちます。
- [pest_consume](https://crates.io/crates/pest_consume) - パースツリー走査のボイラープレートに役立つ crate。
- [pest-test](https://crates.io/crates/pest-test) - pest 文法向けのテストフレームワーク。
- [pest_ascii_tree](https://crates.io/crates/pest_ascii_tree) - コンソールにツリー形式で `Pairs` を出力します

### CLI デバッガー

- [pest_debugger](https://docs.rs/pest_debugger/latest/pest_debugger/) - pest 文法をデバッグするための crate。CLI ツールまたはライブラリーとして使えます。[CLI デバッガーの使用手順](https://github.com/pest-parser/awesome-pest/blob/eae74f52bc40d120c974590e33aa9fe61e7f7185/debugger.md)を参照してください。
