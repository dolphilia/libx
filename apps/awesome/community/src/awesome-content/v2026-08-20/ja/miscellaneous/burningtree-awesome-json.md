---
title: "Awesome JSON"
description: "JSONを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-burningtree-awesome-json-readme-md"
---

# Awesome JSON

JSONを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## アプリケーション <a id="applications"></a>
* [Dadroit JSON Viewer](https://dadroit.com) - 非常に高速なJSONビュー、巨大（マルチギガバイト）ファイルに対応、JSONログ（JSON-Linesおよびndjson）

**OS X**
* [JSON Design Studio](https://stevespringett.com/free-tools/json-design-studio/) - プロフェッショナルなスキーマ作成環境
* [Visual JSON](https://github.com/youknowone/VisualJSON) - Mac OS X用のシンプルなJSON整形ビュー（非活動中）
* [JSONExport](https://github.com/Ahmed-Ali/JSONExport) - オブジェクトを現在サポートされている言語のクラスに変換

## バイナリシリアライズ <a id="binary-serialization"></a>
* [BSON](https://bsonspec.org/) - バイナリJSON
* [MessagePack](https://msgpack.org/) - 非常に効率的なオブジェクトシリアライズーションライブラリ
* [UBJSON](https://ubjson.org/) - バイナリJSONの普遍的に互換性のあるフォーマット仕様
* [CBOR](https://datatracker.ietf.org/doc/html/rfc7049) - コンパクトバイナリオブジェクト表現
* [PSON](https://github.com/dcodeIO/PSON) - プロトコルJSON、極めて効率的なバイナリシリアライズフォーマット
* [JSON BinPack](https://www.jsonbinpack.org) - JSONスキーマに基づく、スペース効率的なバイナリJSONシリアライズフォーマット

## ブラウザ拡張 <a id="browser-extensions"></a>
**Chrome**
* [JSON Formatter](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) ([github](https://github.com/callumlocke/json-formatter)) - ブラウザ内でJSONを整形、強調表示、探索する拡張機能です。
* [JSON Viewer](https://chromewebstore.google.com/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) ([github](https://github.com/tulios/json-viewer)) - ブラウザ内でJSONを整形、強調表示、探索する拡張機能です。
* [JSON Finder](https://chromewebstore.google.com/detail/json-finder/flhdcaebggmmpnnaljiajhihdfconkbj) ([github](https://github.com/rapee/jsonfinder)) - ブラウザ内でJSONを整形、強調表示、探索する拡張機能です。
* [JSON Viewer Pro](https://chromewebstore.google.com/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc) ([github](https://github.com/rbrahul/Awesome-JSON-Viewer) - ブラウザ内でJSONを整形、強調表示、探索する拡張機能です。
* [Discoverable JSON](https://chromewebstore.google.com/detail/json-manipulator-json-to/pcakbljjigdafljigcpbmjllkbhlncjg) ([github](https://github.com/noitcudni/discoverable-json)) - ブラウザ内でJSONを整形、強調表示、探索する拡張機能です。

**Firefox**
* [JSONView](https://addons.mozilla.org/en-US/firefox/addon/jsonview/) ([github](https://github.com/bhollis/jsonview)) - ブラウザ内でJSONを整形、強調表示、探索する拡張機能です。

**Safari**
* [JSONAce](https://apps.apple.com/us/story/id1377753262?id=com.acrogenesis.jsonace-56Q494QF3LL) ([github](https://github.com/acrogenesis/JSONAce)) - ブラウザ内でJSONを整形、強調表示、探索する拡張機能です。
* [JSONView](https://apps.apple.com/us/story/id1377753262?id=com.acrogenesis.jsonview-56Q494QF3L) ([github](https://github.com/acrogenesis/jsonview-safari)) - ブラウザ内でJSONを整形、強調表示、探索する拡張機能です。

## コマンドラインツール <a id="command-line-tools"></a>
* [dsq](https://github.com/multiprocessio/dsq) - JSON、CSV、Excel、Parquetなどに対してSQLクエリを実行するツール
* [fx](https://github.com/antonmedv/fx) - インタラクティブなターミナルツール
* [jo](https://github.com/jpmens/jo) - JSONオブジェクトを作成するための小さなユーティリティ
* [jsoncat](https://github.com/pantuza/jsoncat) - タブサイズを調整し、色付きでターミナル上でJSONを整形表示
* [jq](https://github.com/jqlang/jq) - 軽量で柔軟なコマンドラインJSONプロセッサ
  * [jaq](https://github.com/01mf02/jaq) - 正確性、スピード、シンプルさに焦点を当てたjqのリプレイス。Rustで書かれた。
  * [gojq](https://github.com/itchyny/gojq) - 純粋なGo実装のjq。若干速く、よりポータブル。
* [JSONKit](https://github.com/vesper-astrena/jsonkit) - スイス軍刀：フォーマット、検証、ドット表記によるクエリ、差分、フラット化、CSVへの変換、統計。ゼロ依存、Python 3.10以降。
* [livejq](https://github.com/kunalsin9h/livejq) - 端末からJSONの生成、整形、検索、変換、検証を行うツールです。 `jq`
* [json](http://trentm.com/json/) - Unixコマンドライン上でJSONを操作するための"json"コマンド
* [json-search](https://github.com/cosmo-ray/json-search) - JSONファイル内のオブジェクトや値を検索するための小さなツール
* [jshon](https://web.archive.org/web/20240206155217/http://kmkeen.com/jshon/) - シェル内で最大の便利性を実現したパーサー
* [jarg](http://jdp.github.io/jarg/) - シェル内で簡潔なJSONおよびフォームエンコード構文
* [jsawk](https://github.com/micha/jsawk) - awkに似ているが、JSON用のツール
* [json-dotenv](https://github.com/decryptus/json-dotenv) - JSON形式の環境ファイルを操作・抽出
* [gron](https://github.com/tomnomnom/gron) - JSONファイルを離散的な割り当てに変換し、grepで検索可能に
* [jid](https://github.com/simeji/jid) - インクリメンタル・ディガー。フィルタクエリ（jq）を使ってJSONをインタラクティブに掘り下げ
* [jiq](https://github.com/fiatjaf/jiq) - 端末からJSONの生成、整形、検索、変換、検証を行うツールです。 `jid` `jq` `jq`
* [jv](https://github.com/maxzender/jv) - jv（jsonviewer）はJSONを表示するためのツール
* [jl](https://github.com/chrisdone/jl) - JSON用の機能的なsed
* [oj](https://github.com/ohler55/ojg) - 高速かつ柔軟なコマンドラインJSONプロセッサ
* [Parsrs](https://github.com/ShellShoccar-jpn/Parsrs) - 端末からJSONの生成、整形、検索、変換、検証を行うツールです。 `parsrj.sh` `makrj.sh`
* [visidata](https://github.com/saulpw/visidata) - ターミナル上でデータをインタラクティブに探索できるスプレッドシートのようなツール
* [jc](https://github.com/kellyjonbrazil/jc) - 多くのCLIツール、ファイル形式、一般的な文字列の出力をJSONに変換
* [logdy](https://github.com/logdyhq/logdy-core) - jq、tail、less、grepおよびawkを統合し、クリーンなウェブUIで利用可能
* [jsonskim](https://github.com/rxzzh/jsonskim) - 配列を収縮し、文字列を切り取りることで構造を抽出。LLM用出力

## データベース <a id="databases"></a>
* [MongoDB](https://www.mongodb.com/) - オープンソースのドキュメントデータベースであり、NoSQLデータベースのリーダー
* [RethinkDB](https://rethinkdb.com/) - オープンソースの分散型ドキュメントデータベースで、魅力的かつ強力なクエリ言語を備えている
* [EJDB](https://github.com/Softmotions/ejdb) - MITライセンスのもとで公開された埋め込みJSONデータベースエンジン。（C）
* [lowdb](https://github.com/typicode/lowdb) - lodash APIに基づいたフラットファイルデータベース。（JavaScript）
* [Lawnchair](https://github.com/brianleroux/lawnchair) - 軽量なクライアントサイドドキュメントストア。（JavaScript）
* [JSON ODM](https://github.com/konsultaner/jsonOdm) - JavaScriptでサーバーまたはブラウザ上で使用できるオブジェクトドキュメントマッパー。（JavaScript）
* [JSON Server](https://github.com/typicode/json-server) - 30秒以内にゼロコードでフルなフィクションREST APIを取得
* [Kinto](https://github.com/Kinto/kinto) - 軽量のJSONストレージサービスで、同期と共有機能を備えている
* [CouchDB](https://couchdb.apache.org/) - スムーズなマルチマスター同期。ビッグデータからモバイルまでスケーラブルであり、直感的なHTTP/JSON APIを備え、信頼性を設計している
* [RxDB](https://github.com/pubkey/rxdb) - イベント駆動型JSONデータベース。JSONスキーマ、mango-Query、CouchDB-syncを備えている。（Javascript）
* [JSONlite](https://github.com/nodesocket/jsonlite) - シンプルで、自立型、サーバレス、ゼロ設定、JSONドキュメントストア。（Bash）

## データセット <a id="datasets"></a>
* [country.io](http://country.io/data/) - 国に関連するさまざまなデータセット（JSON形式：通貨、国コード、国名など）
* [countries](https://github.com/mledoze/countries) - 世界の国々
* [MTG JSON](https://mtgjson.com/) - 最新のマジック・ザ・ギャザリングカードデータ
* [Heartstone JSON](https://hearthstonejson.com/) - 最新のハートストーンカードデータ
* [getCountries()](https://peric.github.io/GetCountries/) - カスタム国データの生成ツール

## データモデリング <a id="data-modeling"></a>
* [JSONModel](https://github.com/jsonmodel/jsonmodel) - JSONデータの構造・型・モデルを定義するツールです。

## データ生成 <a id="data-generation"></a>
* [jsonymize](https://github.com/cameronhunter/jsonymize) - 標準入力からデータを読み込み、匿名化し、標準出力に書き出す
* [dyson](https://github.com/webpro/dyson) - 動的で偽のJSONを提供するサーバー。（node.js）

## 差分比較 <a id="differencing"></a>
* [JSONPatch](https://jsonpatch.com/) - ドキュメントの変更を記述するためのフォーマット
* [JSON-Patch](https://github.com/Starcounter-Jack/JSON-Patch) - RFC 6902に基づく、軽量かつ効率的なJSON-Patch標準のJavascript実装。（Javascript）
* [jiff](https://github.com/cujojs/jiff) - RFC6902に基づくJSON Patchおよびdiff。（Javascript）
* [json-patch-php](https://github.com/mikemccabe/json-patch-php) - JSON-patch（IETF RFC 6902）の実装。（PHP）
* [dffptch](https://github.com/paldepind/dffptch) - コンパクトなdiffフォーマットを使用したdiffおよびpatchを行うマイクロライブラリ。（Javascript）
* [jsondiffpatch](https://github.com/benjamine/jsondiffpatch) - JavaScriptオブジェクトに対するdiffおよびpatch。（Javascript）

## エディター <a id="editors"></a>
* [FrontAid CMS](https://frontaid.io/) - 任意のデータモデル構造をサポートするコンテンツ管理システム
* [JSON table editor](https://jsontable.app/) - JSON配列をテーブルとして表示し、検索、フィルタリング、編集機能を提供。複数ギガバイトの大きなファイルにも対応。（Rust）
* [JSONEdit](http://mb21.github.io/JSONedit/) - ユーザーに親しみやすい、視覚的なエディタ。AngularJSディレクティブとして構築されている
* [JSON Crack](https://jsoncrack.com/) - JSONをグラフとして表示する

## 拡張形式 <a id="format-extensions"></a>
* [GeoJSON](https://geojson.org/) - 地理空間データ交換形式
* [JSON-LD](https://json-ld.org/) - 軽量のリンクデータ形式
* [JSON-RPC](https://www.jsonrpc.org/) - 状態を持たない、軽量のリモートプロシージャ呼び出し（RPC）プロトコル
* [JSONP](https://en.wikipedia.org/wiki/JSONP) - JSON-P/JSONPによるより安全なクロスドメインAjax
* [JsonML](http://www.jsonml.org/) - XMLベースのマークアップをJSONでコンパクトに表現し、元の形式に戻すことができる無損失変換を可能にする形式
* [JSON5](https://json5.org/) - 人間が手で書く・維持しやすいようにするための拡張
* [JSON6](https://github.com/d3x0r/json6) - Humans (ES6)向けのJSON。
* [JSON 1.1/JSONX](https://json-next.github.io/) - 人間向けのフォーマット拡張を含む、進化したバージョン1.1（コメント、未引用および複数行の文字列、オプションおよび終端のコンマなど）
* [JSON Resume](https://jsonresume.org/) - 履歴書の標準を作成するためのオープンソースイニシアティブ
* [JSON Web Tokens](https://jwt.io/) - 2つの当事者間で移転される主張をURL安全にコンパクトに表現する方法
* [JSON API](https://jsonapi.org/) - APIを構築するための標準
* [JSON Activity Streams](https://activitystrea.ms/) - ウェブ上のソーシャルアクティビティをサブスクリプションするためのフォーマット
* [JSON-stat](https://github.com/jsonstat/jsonstat) - データの分散を目的としたシンプルかつ軽量なフォーマド
* [/contribute.json](https://www.contributejson.org/) - オープンソース貢献情報のプロジェクト間でのアクセスを容易にする
* [NDJSON](https://github.com/ndjson/ndjson-spec) (Newline delimited JSON) - コメント、参照、型等を追加したJSON拡張形式です。
* [survey.js](https://surveyjs.io/form-library) - JSONベースのアンケートライブラリ
* [JSON Meta Application Protocol (JMAP)](https://jmap.io/) - JSONベースのデータオブジェクトを効率的に同期するプロトコル（プッシュおよびオフバンドバイナリデータのアップロード／ダウンロードをサポート）
* [J<sub>ack</sub>SON: JSON secret keeper](https://github.com/rosehgal/jackson) - 設定ファイルに秘密をJSONic方式で保存する
* [Sequence JSON](https://github.com/soundio/music-json/) - JSONで音楽シーケンスデータを作成するための標準化提案

## フロントエンドコンポーネント <a id="frontend-components"></a>
* [JSON editor jQuery plugin](https://github.com/DavidDurman/FlexiJsonEditor) - あなたのウェブアプリケーションやページに使用できるコンポーネント (jQuery)
* [jqTree](http://mbraak.github.io/jqTree/) - HTMLにツリー構造を表示するためのWidget。(jQuery)
* [jsTree](https://www.jstree.com/docs/json/) - jQueryによるインタラクティブなツリーを提供するプラグイン。(jQuery)
* [Dynatable.js](https://github.com/alfajango/jquery-dynatable) - 楽しい、意味のある、HTML5+JSON、インタラクティブなテーブルプラグイン。(jQuery)
* [JSON Formatter](https://github.com/mohsen1/json-formatter) - AngularJSにおける可縮JSONをHTMLで表示するディレクティブ。(AngularJS)
* [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/) - JSONスキーマからウェブフォームを構築するためのReactコンポーネント。(React)
* [@textea/json-viewer](https://github.com/TexteaInc/json-viewer) - JSONを表示するためのReactコンポーネント。(React)
* [ngx-formly](https://github.com/ngx-formly/ngx-formly) - AngularにおけるJSON駆動／動的フォーム

* [SmarkForm](https://smarkform.bitifet.net) - HTMLフォームを強化し、配列やサブフォームを深さにまで含むデータのインポート／エクスポートを可能にする。
## ライブラリ <a id="libraries"></a>
**C**
* [codables](https://codableslib.com/) - 宣言型かつ型豊富な(デ)シリアライザで、ほぼすべてのデータ型に対応。
* [Jansson](https://github.com/akheron/jansson) - C言語によるデータのエンコード、デコード、および操作を行うライブラリ。
* [jsmn](https://zserge.com/jsmn.html) - C言語による最小限のパーサー。リソースが限られたプロジェクトや埋め込みシステムに簡単に統合可能。
* [json-build](https://github.com/lcsmuller/json-build) - C言語による最小限のシリアライザ。リソースが限られたプロジェクトや埋め込みシステムに簡単に統合可能。
* [ojc](https://github.com/ohler55/ojc) - 高速JSONパーサー。

**C++**
* [ArduinoJson](https://github.com/bblanchon/ArduinoJson) - 埋め込みシステム向けの効率的なライブラリ。
* [JSON++](https://github.com/tunnuz/json) - C++11向けの自立したFlex/Bisonパーサー。
* [json11](https://github.com/dropbox/json11) - C++11向けの小さなライブラリ。
* [Nlohmann JSON](https://github.com/nlohmann/json) - C++11のヘッダーのみのクラス。
* [qjson](https://github.com/qinyonghang/json) - C++17向けの高速ヘッダーのみのライブラリ。
* [RapidJSON](https://github.com/Tencent/rapidjson) - C++でSAX/DOMスタイルAPIを備えた高速JSONパーサー／ジェネレーター。
* [simdjson](https://github.com/simdjson/simdjson) - 1秒あたりギガバイトのJSONをパース。

**Clojure**
* [data.json](https://github.com/clojure/data.json) - Clojureデータ構造間のパーサー／ジェネレータ

**Fortran**
* [JSON-Fortran](https://github.com/jacobwilliams/json-fortran) - Fortran用のJSONファイルおよびデータ構造の読み書き・操作用ライブラリ

**Go**
* [ojg](https://github.com/ohler55/ojg) - 高性能なJSON処理および生成ツールのコレクション

**Haskell**
* [aeson-qq](https://github.com/sol/aeson-qq) - Haskell用のJSONクアシクォーターアイテム
* [json-schema](http://hackage.haskell.org/package/json-schema) - Haskell用のJSONスキーマライブラリ
* [hjsonschema](http://hackage.haskell.org/package/hjsonschema) - Haskell用のJSONスキーマドラフト4ライブラリ

**Java**
* [JSON-java](https://github.com/stleary/JSON-java) - 参照実装
* [Fast JSON Processor](https://github.com/alibaba/fastjson)
* [Gson](https://github.com/google/gson) - JSONをJavaオブジェクトに変換およびその逆に使うJavaライブラリ
* [Jackson](https://github.com/FasterXML/jackson) - JSONデータ形式の処理に用いるマルチ用途Javaライブラドリ
* [moshi](https://github.com/square/moshi) - AndroidおよびJava用の現代的なJSONライブラリ
* [essential-json](https://github.com/arkanovicz/essential-json) - 軽量なJavaライブラリで、シリアライズ、パース、操作を行うためのシンプルで正確なAPI
* [dsl-json](https://github.com/ngs-doo/dsl-json) - 非常に高速なストリーミングJSONライブラリ。バイト配列上で動作する。
* [mjson](https://github.com/bolerio/mjson) - Java用の軽量JSONライブラリ、コンパクトで洗練されたAPIを持つ

**Javascript**
* [JSON-js](https://github.com/douglascrockford/JSON-js) - JavaScriptでのJSON
* [JSON 3](https://bestiejs.github.io/json3/) - 現代的な実装
* [oboe.js](https://github.com/jimhigson/oboe.js) - ストリーミングアプローチにより、レスポンスが完了する前にパースされたオブジェクトを提供することでウェブアプリケーションの速度を向上させる
* [FracturedJsonJs](https://www.npmjs.com/package/fracturedjsonjs) - 人間が読みやすいが、比較的コンパクトな出力を作成するJSONフォーマッタ
* [JsonHilo](https://github.com/xtao-org/jsonhilo) - 失われないパースイベントストリーミング、SAXに類似

**Objective-C**
* [JSONKit](https://github.com/johnezang/JSONKit) - Objective-Cライブラリ
* [SBJson](https://github.com/SBJson/SBJson) - 1つ以上のデータブロックをパース

**Perl**
* [JSON::Tiny](https://github.com/daoswald/JSON-Tiny) - JSONを最小限に抑えながらエンコードおよびデコードするためのPerlモジュール

**PL/SQL**
* [PL/JSON](https://github.com/pljson/pljson) - PL/SQLで記述された一般的なJSONオブジェクト

**PHP**
* [TOON PHP Lite](https://github.com/manojrammurthy/toon-php-lite) - 人間が読みやすく、LLMに適した構造データを扱うための軽量TOONエンコーダ/デコーダ。（PHP）
* [Webmozart JSON](https://github.com/webmozart/json) - スキーマ検証をサポートする強固なデコーダ/エンコーダ

**Python**
* [simplejson](https://github.com/simplejson/simplejson) - シンプルで高速かつ拡張可能なエンコーダ/デコーダ
* [jsonpickle](http://jsonpickle.github.io/) - 任意のオブジェクトグラフをシリアライズするためのライブラリ
* [metamagic.json](https://pypi.org/project/metamagic.json/) - Python 3におけるJSONエンコーダの超高速実装

**Ruby**
* [oj](https://github.com/ohler55/oj) - Rubyのgemとしての高速JSONパーサーおよびオブジェクトマルシャラー
* [MultiJSON](https://github.com/intridea/multi_json) - JSON処理用の汎用的なスワップ可能なバックエンド

**React**
* [json2react](https://github.com/txgruppi/json2react) - JSONを使ってReactのステートレスコンポーネントを作成する

**.NET**
* [jsonfx](https://github.com/jsonfx/jsonfx) - .NET向けのシリアライズフレームワーク
* [jsonapi-consumer](https://github.com/OKTAYKIR/jsonapi-consumer) - 各プログラミング言語でJSONの解析、生成、変換を行うライブラリです。 [JSON API standard](https://jsonapi.org)

**Scala**
* [spray-json](https://github.com/spray/spray-json) - スケールで軽量でクリーンでシンプルな実装（Scala）
* [circe](https://github.com/circe/circe) - Scala向けのもう一つのJSONライブラリ
* [scala-jsonapi](https://github.com/scala-jsonapi/scala-jsonapi) - JSON:API仕様をPlay、Sprayおよび/またはCirceバックエンドと統合するためのサポートライブラリ
* [jsoniter-scala](https://github.com/plokhotnyuk/jsoniter-scala) - Scalaのマクロによるコンパイル時生成の超高速JSONコードの生成

**Shell**
* [jshn](https://openwrt.org/docs/guide-developer/jshn) - シェルスクリプト（Ash/Bash）向けのJSONパーサーおよび生成ライブラリ

**Swift**
* [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) - Swiftでデータを扱うためのより良い方法

* [yyjson](https://github.com/ibireme/yyjson) - Cにおける高性能パーサーおよびシリアライザー
## リンター <a id="linters"></a>
* [jsonlint](https://github.com/zaach/jsonlint) - CLI付きのパーサーおよびバリデーター。（Javascript）
* [JSON Lint](https://github.com/Seldaek/jsonlint) - PHPのリントツール。（PHP）

## オンラインツール <a id="online-tools"></a>
* [Dadroit V Web](https://dadroit.com/vweb/) - 大規模ファイルをブラウザ内に表示できるツール。ツリービュー、正規表現検索、認証付きURL読み込みをサポート。完全にクライアントサイドで動作。
* [DataFormatter Pro](https://dataformatterpro.com/) - ブラウザベースのフォーマッター、バリデーター、差分ツール、コンバーター。ツリービューを備えている。
* [JSON Blob](https://jsonblob.com/) - データを表示・編集・フォーマット・共有できるオンラインツール。保存されたブロブに対してリクエストを送るAPIも提供。
* [JSON Viewer Tool](https://jsonviewertool.com/) - ブラウザ内でデータを表示・フォーマット・バリデーション・最小化・変換できるオンラインツール。
* [JSONLint](https://jsonlint.com/) - JSONバリデーター。
* [JSONCompare](https://jsoncompare.com/) - JSONリーダーの高度版。
* [JSONMaster](https://jsonmaster.com/) - 無料のオンラインバリデーター、フォーマッター、最小化ツール、表示ツール。
* [JSONMate](https://www.jsonmate.com/) - JSONエディタ、インスペクタ、ビューティファイア。
* [JSON Editor online](https://jsoneditoronline.org/) - ウェブベースのツールでデータを表示・編集・フォーマットできる。
* [Collapsible JSON Formatter](http://www.bodurov.com/JsonFormatter/) - Raw Codeのフォーマッターとカラーリングツール。
* [JSON Formatter and Validator](https://jsonformatter.curiousconcept.com/) - デバッグを支援するフォーマッター。
* [JSON Generator](https://json-generator.com/) - ランダムデータを生成するツール。
* [FakeJSON](https://fakejson.com/) - アプリケーションに仮のデータを迅速に生成するウェブAPI。
* [JSON to CSV](https://konklone.io/json/) - 無料の、ブラウザ内JSONからCSVへの変換ツール。
* [CSV to JSON](https://alef.website/tools/csv-to-json) - プライバシーに配慮し、オフライン優先の簡単なCSVからJSONへのオンライン変換ツール。
* [json2csharp](https://json2csharp.com/) - JSON文字列またはURLからC#クラスを生成。
* [JSON Utils](http://jsonutils.com/) - JSONからC#、VB.Net、JavaScriptクラスを生成するサイト。
* [geojson.io](https://geojson.io/) - GeoJSONマップデータを簡単に編集できる。
* [jq play](https://jqplay.org/) - jqのプレイグランド。
* [json2yaml](https://www.json2yaml.com/) - JSONをYAMLにオンライン変換。
* [JSON Selector Generator](http://jsonselector.com/) - 選択子を生成するためのシンプルなGUI
* [JSON.fr](https://www.json.fr/) - 完全にクライアントサイドのバリデーションとフォーマット
* [JSONtapose](https://www.jsontapose.com/) - 直感的で美しい、安全なクライアントサイドの比較および可視化ツール
* [jsontosdk](https://jsontosdk.vercel.app) - データサンプルを貼り付けると、LLMで名前付けされた型のTypeScriptインターフェースとZodスキーマを生成。サインアップ不要。
* [ObjGen](https://www.objgen.com/json) - オンラインライブJSON生成ツール
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - テストおよびプロトタイピング用の仮のオンラインREST API
* [Extends Class](https://extendsclass.com/json-diff.html) - 2つのファイルを比較する差分ツール
* [JSON Schema Validate API](https://assertible.com/json-schema-validation) - シンプルで無料のJSONスキーマバリデーションAPI
* [JSONPerf](https://jsonperf.com) - 可視化され、バイアスのない、最新のJSONパフォーマンスベンチマーク
* [FracturedJson](https://j-brooke.github.io/FracturedJson/) - 人間が読みやすいが、比較的コンパクトな出力を生成するフォーマットツール
* [Softwium](https://softwium.com/fake-api/) - テスト用の仮のおよびダミーREST API
* [JSONing](https://jsoning.com/) - フォーマットツール、比較ツール、JSONPathテスト、パッチ生成、データ生成を含むツールセット

## スキーマ仕様 <a id="schema-specifications"></a>
* [JSON Model](https://github.com/clairey-zx81/json-model) - データモデリングに用いる軽量かつ機能豊富なDSL
* [JSON Schema](https://json-schema.org/) - JSONベースの形式でJSONデータの構造を定義するためのフォーマット
* [Itemscript](https://code.google.com/archive/p/itemscript/) - 値のバリデーションと指定に用いる言語
* [Kwalify](https://github.com/kvs/kwalify) - パーサー、スキーマバリデーション、データバインディングツール
* [Rx](https://rx.codesimply.com/) - シンプルで拡張可能なスキーマ

## サービス <a id="services"></a>
* [Exchange Rate API](https://www.exchangerate-api.com) - シンプルで無料の為替レートデータAPI
* [ipinfo.io](https://ipinfo.io) - JSON IP および GeoIP REST API
* [JSONProxy](https://github.com/afeld/jsonp) - 任意のJSON APIへのクロスドメインリクエストを可能にするシンプルなHTTPプロキシ
* [Telize](https://www.telize.com/) - JSON IP および GeoIP REST API
* [jsonpad](https://jsonpad.io/) - シンプルなJSONストレージプラットフォーム

## スーパーセット <a id="supersets"></a>
* [YAML](https://yaml.org) - すべてのプログラミング言語に適用可能な人間が使いやすいデータシリアライゼーション標準
* [HanSON](https://github.com/timjansen/hanson) - JSON for Humans - クォートなしの識別子、複数行の文字列およびコメントをサポート
* [μson](https://github.com/burningtree/uson) (uson) - JSONとの互換性を保ちながら追加構文・機能を提供する形式です。
* [HOCON](https://github.com/lightbend/config/blob/master/HOCON.md) - 人間向けに最適化された設定オブジェクト記法
* [ASON](https://github.com/sadmac7000/libason) - JSONの意味的に完全なスーパーセット（ドラフト）
* [TOML](https://github.com/toml-lang/toml) - 意味が明らかで読みやすいため、最小限の設定ファイル形式
* [HCL](https://github.com/hashicorp/hcl) - 人間とマシンの両方にとって使いやすい構造化設定言語

## チュートリアル <a id="tutorials"></a>
* [Introducing JSON](http://json.org/)
* [JSON Tutorial](https://www.w3resource.com/JSON/introduction.php) - JavaScriptオブジェクト記法（JSON）についての入門チュートリアル
* [JSON - Rosetta Code](https://rosettacode.org/wiki/JSON) - さまざまな言語での基本操作（現在57言語）。
* [What is JSON and how to use it](https://ilovecoding.org/lessons/json-what-is-json-and-how-to-use-it) - 初心者向けのビデオチュートリアル
* [jq Primer: Munging JSON Data](https://andrew.gibiansky.com/) - jqがJSONファイルを従来のUnixツールと同様に効果的に処理できる方法

## 関連形式 <a id="related-formats"></a>
* [AXON](https://github.com/intellimath/pyaxon) - オブジェクト、ドキュメント、データの交換に用いるシンプルなテキスト形式。JSON、XML、YAMLの長所を組み合わせたもの
* [CSON](https://github.com/bevry/cson) - CoffeeScript-Object-Notation。CoffeeScriptオブジェクト用のJSON
* [MSON](https://github.com/apiaryio/mson) - JSONおよびJSONスキーマを記述するためのマーカー構文
* [ArchieML](http://archieml.org/) - 人間の書きやすさに最適化された構造化テキスト形式

## 資料 <a id="resources"></a>
* [Type-o-rama](https://github.com/stereobooster/type-o-rama) - JS型システムの相互運用性、異なるJS型システムの比較および相互変換
* [Awesome jq](https://github.com/fiatjaf/awesome-jq) - 素晴らしいjqツールとリソースのキュレーションリスト

## テンプレート <a id="templates"></a>
* [Jsonnet](https://jsonnet.org/) - JSONデータを定義するためのドメイン特定の設定言語
* [rabl](https://github.com/nesquena/rabl) - Rubyでの一般テンプレート化。JSON、BSON、XML、PLIST、MSGPACKをサポート。（Ruby）
* [json2html](http://json2html.com/) - jQueryおよびNode.js向けのラッパーを備えたHTMLテンプレートライブラリ。（JavaScript）

## テスト <a id="testing"></a>
* [JSON Test](http://www.jsontest.com/) - JavaScriptオブジェクト記法（JSON）を用いたサービスのテストプラットフォーム。
* [JSONassert](https://github.com/skyscreamer/JSONassert) - 少ないコードでJSONのユニットテストを書ける。RESTインターフェースのテストに最適。（Java）
* [JsonUnit](https://github.com/lukas-krecan/JsonUnit) - ユニットテストにおけるJSON比較を簡便に実行するライブラリ。XmlUnitに強くインスピレーションを受けています。
* [JSON Parsing Test Suite](https://github.com/nst/JSONTestSuite) - 非常に包括的なテストセットとバリデーションフレームワーク。

## テキストエディタープラグイン <a id="text-editor-plugins"></a>
**Emacs**
* [JSON Reformat](https://github.com/gongo/json-reformat) - フォーマット再設定ツール。

**Vim**
* [vim-json](https://github.com/elzr/vim-json) - Vim向けより良いJSON：キーワードと値の明確なハイライト、JSON専用（JS以外）の警告、引用符の隠蔽。Pathogen対応。

**Visual Studio Code**

**Neovim**
* [nvim-jqx](https://github.com/gennaro-tedesco/nvim-jqx) - neovimのクイックフィックスウィンドウからJSONファイルを閲覧・検索。（Lua）

## 変換 <a id="transformations"></a>
* [json-sharp](https://github.com/globocom/json-sharp) - 純粋なJSONオブジェクトに対する操作を処理するJavaScriptツール。（JavaScript）
* [json2json](https://github.com/joelvh/json2json) - 構造を一つから別のものへ変換（フォーマット再設定）。（JavaScript）
* [trans](https://github.com/gabesoft/trans) - 最強のオブジェクト変換ツール。（JavaScript）
* [osmtogeojson](https://github.com/tyrasd/osmtogeojson) - OSMデータをGeoJSONに変換。（JavaScript）
* [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - XMLとJSONの相互変換（JavaScript/JSON）を高速に実行。
* [x2js](https://github.com/abdolence/x2js) - XMLとJSONの相互変換（JavaScript）関数。（JavaScript）
* [JSONC](https://github.com/tcorral/JSONC) - JSONの圧縮および展開ツール。（JavaScript）
* [JsonMapper](https://github.com/cweiske/jsonmapper) - ネストされた構造をPHPクラスにマップ。（PHP）
* [SassyJSON](https://github.com/KittyGiraudel/SassyJSON) - Sassを駆使したAPI。（Sass）
* [json.human.js](http://marianoguerra.github.io/json.human.js/) - JSONオブジェクトを人間が読みやすいHTML表現に変換する小さなライブラリ。さまざまな目的に合わせてスタイルを適用しやすい。
* [fanci](https://github.com/liip/fanci) - テンプレートに基づいてJSONを抽出、名前を変更、変換。（node.js）
* [deepjson](https://www.npmjs.com/package/deepjson/) - 大きなJSON設定ファイルを読み込むためのより良い方法。（node.js）
* [jsontl](https://github.com/DoublePrecisionSoftware/jsontl) - JSONベースの変換言語を使用して変換を許可する。(node.js)
* [json-transforms](https://github.com/ColinEberhardt/json-transforms) - 再帰的かつパターンマッチングに基づくJSON構造の変換アプローチ。
* [normalizr](https://github.com/paularmstrong/normalizr) - スキーマに基づいてネストされたJSONを標準化する。(Javascript)
* [JSON-populate](https://github.com/eiriklv/json-populate) - 無限に再帰的に循環参照を持つJSONデータを埋め込むツール。Falcorに似たものだが、普通のJSON用。
* [CircularJSON](https://github.com/WebReflection/circular-json) - JSONは循環参照を扱えなかったが、今や扱えるようになった。
* [Sawmill](https://github.com/logzio/sawmill) - JSON変換ライブラリ。(Java)
* [nimnjs](https://github.com/NaturalIntelligence/nimnjs) - JSONとnimnの両方向変換ツール。
* [stylops](https://github.com/cruel-intentions/stylops) - CSSのサブセットをJSONに変換。(node.js)

## クエリ <a id="queries"></a>
* [dasel](https://github.com/tomwright/dasel) - JSON文書を検索・抽出・更新するクエリ言語または実装です。 [jq](https://github.com/jqlang/jq) [yq](https://github.com/kislyuk/yq)
* [JMESPath](https://jmespath.org/) - JSON用のクエリ言語。
* [JSON Mask](https://github.com/nemtsov/json-mask) - JSオブジェクトの特定部分を選択し、残りを隠すための小さな言語とエンジン。(Javascript)
* [JSONiq](https://www.jsoniq.org/) - JSONクエリ言語。
* [ObjectPath](https://objectpath.org/) - 半構造化データ用のアグレッシブクエリ言語。(Python)
* [DefiantJS](https://www.defiantjs.com/) - XPath表現を使って高速検索し、XSLを使って変換。(Javascript)
* [JSONSelect](https://github.com/lloyd/JSONSelect) - CSSのようなセレクタ。(Javascript)
* [JSONPath](https://goessner.net/articles/JsonPath/) - XPathの実装。(Javascript/PHP)
* [searchjs](https://github.com/deitch/searchjs) - JSON SQLに似た言語に基づくフィルタリング用のライブラリ。
* [json-rel](https://github.com/slurmulon/json-where) - JSONにおける透過的な参照。
* [JSONata](https://jsonata.org/) - Node-REDで使用されるクエリおよび変換言語。関数表現をサポート。

## JSON Schemaフロントエンドコンポーネント <a id="json-schema-frontend-components"></a>
* [JSON Editor](https://github.com/jdorn/json-editor) - JSONスキーマベースのエディタ。(jQuery)
* [angular-schema-form](https://github.com/json-schema-form/angular-schema-form) - フォームを生成。(AngularJS)
* [JSON Schema View](https://github.com/mohsen1/json-schema-view) - AngularJSでJSON SchemaをHTMLにレンダリングするディレクティブ (AngularJS)
* [Angular JSON Schema Form](https://github.com/mohsen1/angular-json-schema-form) - JSON Schemaからフォームを作成するAngularJSディレクティブ (AngularJS)
* [AlpacaJS](http://www.alpacajs.org) - Bootstrap、jQuery Mobile、jQuery UIおよびHTML上でJSON Schemaを駆動するフォームを生成 (jQuery)

## JSON Schemaツール <a id="json-schema-tools"></a>
* [JSON Schema CLI](https://github.com/intelligence-ai/jsonschema) - ローカル開発およびCI/CDパイプライン向けのスキーマファイルのフォーマット、Lint、テスト、バンドル、検証を行うコマンドラインインターフェース
* [prmd](https://github.com/interagent/prmd) - HTTP API向けのツールおよびドキュメント生成
* [generate-schema](https://github.com/Nijikokun/generate-schema) - JSONオブジェクトをJSON Schema、Mongoose Schema、またはドキュメント作成用の汎用テンプレートに簡単に変換
* [Docson](https://github.com/lbovet/docson) - あなたの型についてのドキュメント
* [Orderly JSON](https://github.com/lloyd/orderly) - JSONをJSONSchemaにコンパイルしたテキスト形式のスキーマ記述法
* [jsonschema2pojo](https://github.com/joelittlejohn/jsonschema2pojo) - Java型を生成し、Jackson 1.xまたは2.x、Gsonなどとのデータバインディングに注釈を付加
* [Matic](https://github.com/mattyod/matic) - HTMLドキュメントを生成するビルドツール
* [JSON Schema + Faker](https://github.com/json-schema-faker/json-schema-faker) - スキーマを偽造する
* [DLL.js](https://github.com/moll/js-ddl) - PostgreSQLまたはSQLite3からJSON Schemaを取得
* [js-schema](https://github.com/molnarg/js-schema) - JavaScriptでオブジェクトスキーマを記述する新しい方法。シンプルな構文を持ち、JSON Schema形式にシリアライズ・デシリアライズできる。
* [JSON Schema $Ref Parser](https://github.com/APIDevTools/json-schema-ref-parser) - JSON Schemaの$refポインタをパース、解決、デリファレンス

## JSON Schema資料 <a id="json-schema-resources"></a>
* [Learn JSON Schema](https://www.learnjsonschema.com) - スキーマ仕様向けのオープンソースリファレンスドキュメント
* [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema/) - JSONスキーマのよりアクセスしやすいドキュメントを提供するウェブサイト
* [Using JSON Schema](http://usingjsonschema.com/) - 一冊の書籍およびGitHubプロジェクト。JSON Schemaがさまざまなタスクや異なるプログラミングコンテキストでどのように使用されるかを示している。
* [Awesome JSON Schema](https://github.com/sourcemeta/awesome-jsonschema) - 素晴らしいJSON Schemaリソース、チュートリアル、ツールなどを収録したキュレーションされたリスト

## JSON Schemaバリデーター <a id="json-schema-validators"></a>
**Javascript and Node.js**
* [json-schema-benchmark](https://github.com/ebdrup/json-schema-benchmark) - Node.jsバリデーターのパフォーマンスベンチマーク
* [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) - コード生成を用いて極めて高速なバリデーター
* [jsen](https://github.com/bugventure/jsen) - スピードを重視したバリデーター
* [themis](https://github.com/playlyfe/themis) - 驚くほど速いバリデーター
* [jsck](https://github.com/pandastrike/jsck) - JSONスキーマコンパイルチェック
* [z-schema](https://github.com/zaggino/z-schema) - NodeJSおよびブラウザ向けJavaScriptで書かれたバリデーター
* [jjv](https://github.com/acornejo/jjv) - スキーマバリデーション用JavaScriptライブラリ
* [request-validator](https://github.com/bugventure/request-validator) - ExpressおよびConnect向けの柔軟なリクエストバリデーションミドルウェア
* [tv4](https://github.com/geraintluff/tv4) - ミニマムバリデーター
* [ajv](https://github.com/ajv-validator/ajv) - 最も速いスキーマバリデーター。draft-04/06/07/2019-09/2020-12をサポート

**Java and Kotlin**
* [Medeia Validator](https://github.com/worldturner/medeia-validator) - Kotlinで書かれた、準拠（draft-04/06/及07）かつ高速なストリーミングバリデーター

**PHP**
* [JSON Schema for PHP](https://github.com/justinrainbow/json-schema) - JSONスキーマのPHP実装
* [JSON Guard](https://json-guard.thephpleague.com) - JSONスキーマドレフト4向けバリデーター

**Python**
* [jsonschema](https://github.com/python-jsonschema/jsonschema) - Pythonでのjsonschema実装
* [JSON Schema Toolkit](https://github.com/petrounias/json-schema-toolkit) - スキーマのプログラム的構築（再帰フィールドマッピング）とバリデーション、DjangoのJSONフィールド、およびネイティブPostgreSQLのJSON型制約

**Ruby**
* [Ruby JSON Schema Validator](https://github.com/voxpupuli/json-schema) - JSONスキーマドレフト4に準拠したスキーマに基づくバリデーション

## コントリビューション <a id="contribute"></a>
コントリビューションを歓迎します。最初に[コントリビューションガイドライン](https://github.com/burningtree/awesome-json/blob/e8efe3cf3b25bd9d23d857a24c41d21d69b9ea38/CONTRIBUTING.md)を参照してください。

## ライセンス <a id="license"></a>
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
