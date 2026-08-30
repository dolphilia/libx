---
title: "secretGeek/awesomeCSV"
description: "secretGeek/awesomeCSV の定本スナップショット"
licenseSource: "github-secretGeek-awesomeCSV-readme-md"
---

# Awesome CSV [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

**CSV関連ツールとリソースを慎重に選んだリスト**

[CSV](https://en.wikipedia.org/wiki/Comma-separated_values)は、遠い過去から続く最も未来的なデータ形式です。

XMLは栄えて廃れ、JSONは一時の流行、YAMLは毒杯です。**CSVはそのすべてを生き残ります。**

最後のゴキブリが息絶えるとき、後世のために死亡日をCSVへ刻むでしょう。

## 目次

- [ツール](#tools)
  - [CSVの修復・検証](#repair-or-validate-csv)
  - [CSVをSQLとして扱う](#treat-csv-as-sql)
  - [CSVとの相互変換](#convert-to-or-from-csv)
  - [CSV <-> JSON](#csv---json)
- [エッセイ](#essays)
- [データ](#data)
- [カンファレンス](#conferences)
- [標準](#standards)
- [META: 類似リスト](#meta-other-similar-lists)
- [行動規範](#code-of-conduct)
- [Funtribute](#funtribute)
- [脚注](#footnotes)

CSVを扱う優れたツールを紹介します。

## ツール

- [NimbleText/Live](https://NimbleText.com/Live) - パターンでCSVを操作する、世界で最も簡単なコードジェネレーター*。
- [PapaParse](https://www.papaparse.com) - 強力なブラウザー内CSVパーサー。
- [d3-dsv](https://github.com/d3/d3-dsv) - 区切り文字付き値のためのd3.jsパーサー・フォーマッターモジュール。
- [CSVKit](https://csvkit.readthedocs.io/) - csvsql、csvgrep、csvstatなどを含むCSVユーティリティ。
- [QSV](https://github.com/dathere/qsv) - Rust製の高速CSVコマンドラインツールキット（xsvの更新版）。
- [sed (gnu tool)](https://www.gnu.org/software/sed/manual/sed.html) - ストリームエディター。
- [gawk (gnu tool)](https://www.gnu.org/software/gawk/manual/gawk.html) - [awk](http://pubs.opengroup.org/onlinepubs/009695399/utilities/awk.html)を使ったテキスト処理とデータ抽出。
- [awk by example](https://github.com/learnbyexample/Command-line-text-processing/blob/master/gnu_awk.md#default-field-separation) - awk利用例の包括的な集成。
- [Miller](http://johnkerl.org/miller/doc/) - CSVのような名前索引付きデータ向けのsed / awk / cut / join / sortのようなツール。
- [ParaText](https://github.com/wiseio/paratext) - 毎秒2.5GBでCSVを解析。
- [CSVGet](http://github.com/fizx/csvget/tree/master) - サイトから構造化データをCSVとして取得。
- [CSVfix](https://code.google.com/p/csvfix/) - CSVデータ操作ツール。
- [Tad](https://www.tadviewer.com) - 高速で無料のクロスプラットフォームCSVビューアー。
- [csvtodashboard](https://csvtodashboard.com) - CSVを完全にブラウザー内で変換、クリーンアップ、SQL検索、可視化。ローカルファーストでアップロード不要。
- [Nvd3-tags](http://blog.tryolabs.com/2015/02/27/nvd3-tags-a-tiny-library-for-making-charts-from-csv-data/) - csvデータからグラフを作る小さなライブラリ。
- [Powershell: Import-CSV](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/import-csv) - CSVを扱う強力な組込み機能（[例](https://gist.github.com/dfinke/786ba9edae1b0265ada10b36a7a11ba9)）。
- [CSV Tools](https://onlinecsvtools.com/) - 便利なCSVユーティリティ集。
- [graph-cli](https://github.com/mcastorina/graph-cli) - CSVデータからグラフを作る柔軟なコマンドラインツール。
- [CSV to SQL](http://www.convertcsv.com/csv-to-sql.htm) - CSVデータからinsert/update/deleteなどを作るオンラインツール。
- [C#: kbCSV](https://github.com/kentcb/KBCsv/blob/master/README.md) - CSVの解析・書込み向けの効率的で使いやすい.NETライブラリ。
- [csvprintf](https://github.com/archiecobbs/csvprintf) - CSVファイルに基づき出力を解析・整形するUNIXコマンドラインユーティリティ。
- [Ron's Data Edit](https://www.ronsplace.eu/Products/RonsDataEdit)（[Ron's CSV Editor](https://www.ronsplace.eu/products/ronseditor)の新しいモダン版） - 大きなファイルを扱える、時代を超えた形式のためのエディター。
- [Rainbow CSV plugins](https://github.com/mechatroner/rainbow_csv#rainbow-csv-in-other-editors) - CSV/TSV構文強調表示用テキストエディタープラグイン集。[Vim](https://github.com/mechatroner/rainbow_csv)、[VS Code](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)、[Atom](https://atom.io/packages/rainbow-csv)、[Sublime Text](https://packagecontrol.io/packages/rainbow_csv)などで利用可能。
- [ExtendsClass](https://extendsclass.com/csv-diff.html) - シンプルなCSV比較器。
- [Mighty Merge](https://mightymerge.io/) - csvファイルをjoin/unionするツール。
- [Modern CSV](https://www.moderncsv.com/) - CSV編集と大容量ファイル閲覧のツール。
- [Data Wrangler](https://github.com/microsoft/vscode-data-wrangler) - VS CodeとVS Code Jupyter Notebookへ統合された、コード中心のデータクリーニングツール。
- [CSV to SQL](https://monapdx.github.io/Frontend-Widgets/csv-to-sql.html) - CSVをアップロードし、テーブル名を設定してSQL insertを即座に生成。
- [SmoothCSV](https://smoothcsv.com) - Mac、Windows、Linux向けの高速・強力・直感的なCSVエディター。

### CSVの修復・検証

- [Csvlint.go](https://github.com/Clever/csvlint) - RFC 4180に対してCSVファイルを検証するコマンドラインツール。
- [csvstudio](http://www.csvstudio.com/) - 非常に大きなCSVファイルの構文エラーを修復するスマートなアプリ。
- [scrubcsv](https://github.com/faradayio/scrubcsv) - CSVから不正レコードを削除し正規化（rustが必要）。
- [reconcile-csv](https://github.com/OpenRefine/reconcile-csv/blob/master/README.md) - 関連するCSV群の関係を見つける。

## テーブルスキーマの生成

- [CSV Schema](https://csv-schema.surge.sh/) &mdash; CSVを分析し、ブラウザー内だけでデータベーステーブルスキーマを生成。
- Wanted: このカテゴリのツールを募集中。

### CSVをSQLとして扱う

- [TextQL](http://dinedal.github.io/textql/) - CSVまたはTSVに対してSQLを実行。
- [Datasette Facets](https://simonwillison.net/2018/May/20/datasette-facets/) - 任意のCSVまたはSQLite DB向けのファセット閲覧とJSON API。
- [q](https://harelba.github.io/q/) - CSVファイルに直接SQLを実行。
- [RBQL](https://rbql.org) - JavaScriptまたはPythonバックエンドを持つSQL風のRainbow Query Language。
- [PSKit Query](https://github.com/dfinke/PSKit#sql-query) &mdash; csvでインポートしたものを含むオブジェクトに単純なクエリーを実行できるPowershellモジュール。

### CSVとの相互変換

- [CSV to Table](https://github.com/vividvilla/csvtotable) - CSVを検索・ソート可能なHTMLテーブルへ変換。

### CSV <-> JSON

- [Agnes](http://www.secretgeek.net/agnes/twoWay.html) - CsvとJsonの双方向変換**。
- [csv2json](https://www.csvjson.com/csv2json) - CSVまたはTSV形式データをJSONへ、また[逆方向](https://www.csvjson.com/json2csv)へ変換するオンラインツール。
- [csv-to-json](https://mango-is.com/tools/csv-to-json/) - 簡単でプライバシーに配慮し、オフラインファーストなオンラインcsv-to-json変換器。

## エッセイ

> 完璧なデータ直列化ファイル形式を見つけたら、探すのをやめる。
>
> [David Wengier](https://twitter.com/davidwengier/status/1159606464220000257)

- [Thinking about CSV](https://blog.datacite.org/thinking-about-csv/) - Martin Fenner。
- [In Praise of CSV](https://usopendata.org/2015/03/10/csv) - Waldo Jaquith。
- [Stop Rolling Your Own CSV Parser!](http://www.secretgeek.net/csv_trouble) - Leon Bambrick ***。
- [So You Want To Write Your Own CSV code?](http://thomasburette.com/blog/2014/05/25/so-you-want-to-write-your-own-CSV-code/) - Thomas Burette。
- [Falsehoods Programmers Believe About CSVs](https://donatstudios.com/Falsehoods-Programmers-Believe-About-CSVs) - Jesse Donat。
- [ASCII Delimited Text - Not CSV or TAB delimited text](https://ronaldduncan.wordpress.com/2009/10/31/text-file-formats-ascii-delimited-text-not-csv-or-tab-delimited-text/) - Ronald Duncan。

## データの生成

- [Fake Name Generator](https://www.fakenamegenerator.com/order.php) - テスト用の偽名などの身元データを一括生成。
- [Mockium](https://softwium.com/mockium/) - CSV / JSON / SQL / XML向けテストデータジェネレーター。
- [Mockaroo](https://www.mockaroo.com/) - CSV / JSON / SQL / Excel向けランダムデータジェネレーター。

## データ

- [US Data.gov](https://catalog.data.gov/dataset?res_format=CSV) - 18789以上のCSVデータセット。
- [Australian Government Open Data](https://data.gov.au/dataset?res_format=CSV) - 2715以上のCSVデータセット。
- [Reference data in csv](https://datahub.io/collections/reference-data) - CSVとJSON形式で使いやすい参照データ。
- [awesome-public-datasets](https://github.com/awesomedata/awesome-public-datasets) - パブリックドメインの高品質オープンデータセットをトピック別にまとめたリスト。
- [United Nations data](https://data.un.org) - 国連のデータ。

## カンファレンス

- [csv,conf](https://csvconf.com/) - あらゆる場所のデータ作成者によるコミュニティカンファレンス。

## 標準

> 標準の素晴らしいところは、選べるものが非常にたくさんあることです。<br />&mdash;（おそらく）Grace Hopper。

- [RFC 4180](https://tools.ietf.org/html/rfc4180)（[html version](http://www.faqs.org/rfcs/rfc4180.html)） - "*Common format and MIME Type for Comma-Separated Values (CSV) Files*"。
  - [Definition of the CSV Format](https://tools.ietf.org/html/rfc4180#section-2)
  - [MIME Type Registration of text/csv](https://tools.ietf.org/html/rfc4180#section-3)
- [W3C: Model for Tabular Data and Metadata on the Web](https://www.w3.org/TR/tabular-data-model/)
- [CSV Schema Language](http://digital-preservation.github.io/csv-schema/csv-schema-1.2.html) - CSVデータを定義・検証する言語。
- [csv,specs](https://github.com/csvspecs) - CSV v1.0、CSV v1.1、CSV Strict、CSV <3 Numerics、CSV<3 JSON、CSV <3 YAMLを含むComma-Separated Values形式仕様（およびテスト）。
- [Tabular Data Resource](http://frictionlessdata.io/specs/tabular-data-resource/) - CSVやスプレッドシートなどの表形式データを記述するために特化した[Data Resource](http://frictionlessdata.io/specs/data-resource/)。
- [CSVY](https://github.com/csvy/csvy.github.io/blob/master/index.md) - 形式を記述するYAMLヘッダーをCSVへ追加する標準。

## META: 類似リスト

- [structured-text-tools](https://github.com/dbohdan/structured-text-tools) - CSV / XML / HTML / JSON / INIなどを操作するコマンドラインツールのリスト。
- [META-META](https://raw.githubusercontent.com/secretGeek/AwesomeCSV/master/awesomecsv.csv) - **このリストをCSV化したもの**。
- [META-META-META](https://nimbletext.com/Live/-971009575/) - このリストのCSVから、このMarkdownページを生成するNimbleTextパターン。

## 行動規範

[Code of Conduct](https://github.com/secretGeek/awesomeCSV/blob/adff7b0766abe06c9987cf4703b3918ce5bb9074/code-of-conduct.md)を参照してください。

## Funtribute

貢献の楽しさを体験するには、[Contributing](https://github.com/secretGeek/awesomeCSV/blob/adff7b0766abe06c9987cf4703b3918ce5bb9074/contributing.md)を参照してください。

## 脚注

`*` <span id='footnote1' ></span> 私は[NimbleText](https://NimbleText.com/Live)の著者です。もちろんリストの先頭に置きました。自分で評価していなければ、作成と改善にこれほど時間を費やさなかったでしょう。

`**` <span id='footnote2' ></span> `agnes`は私が書きましたが、他者に使うよう特に推奨していません（そのためソースコードをGitHubへ移していません）。低速でストリーミング非対応です。私は`papa-parse`を選びます。一方で`agnes`は、多くのものより包括的なテストスイートと単純なapiを備えています。

`***` <span id='footnote3' ></span> これも私のものです。

## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で可能な限り、[Leon Bambrick](http://secretgeek.net)は本作に関する著作権および関連・隣接する権利をすべて放棄しています。
